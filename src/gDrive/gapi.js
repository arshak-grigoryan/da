import {
  API_KEY,
  CLIENT_ID,
  DISCOVERY_URLS,
  SCOPES,
  GOOGLE_API_CLIENT_API_SCRIPT_URL,
  DRIVE_API_SCOPES,
} from './constants';
import { addScript } from './helpers';
import DriveApiV3 from './driveApiV3';

// class Person {
//   static async create () {
//       return new Promise((res, rej) => {
//           setTimeout(() => res(console.log(‘created’)), 2000)
//       })
//   }
// }
// var newInstance = await Person.create();
// console.log(‘>>>’);

class GapiClient {
  constructor(apiKey, clientId, discoverUrls, scopes) {
    GapiClient.apiKey = apiKey;
    GapiClient.clientId = clientId;
    GapiClient.discoverUrls = discoverUrls;
    GapiClient.scopes = scopes;
  }

  async init() {
    console.log('gapi check');
    if (window.gapi) {
      return;
    }
    console.log('gapi init');
    try {
      await addScript(GOOGLE_API_CLIENT_API_SCRIPT_URL);
      await GapiClient.loadClient();
      console.log('after load clint')
      await GapiClient.initClient();
      console.log('after init client')
      return gapi;
    } catch (error) {
      console.log(error);
    }
  }

  static loadClient() {
    return new Promise((res, rej) => {
      gapi.load('client:auth2', { callback: res, onerror: rej });
    });
  }

  static loadDriveShare() {
    return new Promise((res, rej) => {
      gapi.load('drive-share', { callback: res, onerror: rej });
    });
  }

  static initClient() {
    return (
      gapi.client.init({
        apiKey: GapiClient.apiKey,
        clientId: GapiClient.clientId,
        discoveryDocs: GapiClient.discoverUrls,
        scope: GapiClient.scopes,
      })
    );
  }

  async signInWithGoogle() {
    await this.init();
    // need i disconnect every time or i can move it int signinpromt
    // await this.revokeAccess();
    try {
      const currentUser = await gapi.auth2.getAuthInstance().signIn();
      return currentUser;
    } catch (error) {
      // error case: when user closes sign in prompt
      console.log(error);
      return null;
    }
  }

  async signOutGoogle() {
    await this.init();
    gapi.auth2.getAuthInstance().signOut();
  }

  async revokeAccess() {
    console.log('revokeAccess')
    await this.init();
    gapi.auth2.getAuthInstance().disconnect();
  }

  async shareDrive(resetProgressCallback) {
    // console.log('shareDrive');
    await this.init();
    await GapiClient.loadDriveShare();
    const token = gapi.auth.getToken().access_token;
    const s = await new gapi.drive.share.ShareClient();
    s.setOAuthToken(token);
    s.setItemIds(this.driveActiveImageId);
    s.showSettingsDialog();
    this.driveActiveImageId = null;
    resetProgressCallback();
  }

  async handleCheckForDifferentUsers(currentUser) {
    // console.log(currentUser, DriveApiV3.userIdFromDrive)
    if (currentUser.getId() === DriveApiV3.userIdFromDrive) {
      return this.handleCheckGorGrantedScopes(currentUser)
    }

    await this.revokeAccess()
    // eslint-disable-next-line
    const isAnswer = confirm(`Your signed account ${currentUser.getBasicProfile().getEmail()} is not match with drive account, choose oter account`);

    if (isAnswer) {
      return this.handleSignInPrompt()
    }
    
    return this.handleAuthorizeDriveModal();
  }

  async getGrantedScopes() {
    await GapiClient.init()
    return gapi.auth2.getAuthInstance().currentUser.get().getGrantedScopes()
  }

  handleCheckGorGrantedScopes(currentUser) {
    // need refactor
    const grantedScopes = currentUser.getGrantedScopes();
    const { recommended: { file, install } } = DRIVE_API_SCOPES;
    if (grantedScopes.includes(file) && grantedScopes.includes(install)) {
      return currentUser
    }

    return this.handleAuthorizeDriveModal();
  }

  async handleSignInPrompt() {
    await this.revokeAccess();
    const currentUser = await this.signInWithGoogle();
    if (currentUser) {
      return this.handleCheckForDifferentUsers(currentUser)
    }

    return this.handleAuthorizeDriveModal();
  }

  handleAuthorizeDriveModal() {
    // eslint-disable-next-line
    const isAnswer = confirm('Authorize Drive');
    if (isAnswer) {
      return this.handleSignInPrompt();
    }
    // currentUser is null
    return null
  }

  async authUser() {
    await this.init();

    // GoogleAuth can be null when gapi not corrected was init;
    const GoogleAuth = gapi.auth2.getAuthInstance();

    // console.log(GoogleAuth.currentUser.get())

    // id is null when app signin with google only https://myaccount.google.com/permissions
    const id = gapi.auth2.getAuthInstance().currentUser.get().getId()
    console.log(id)

    // handle expired signin session / token

    if (GoogleAuth.isSignedIn.get()) {
      return this.handleCheckForDifferentUsers(GoogleAuth.currentUser.get());
    }
    return this.handleAuthorizeDriveModal();
  }
}

const Gapi = new GapiClient(API_KEY, CLIENT_ID, DISCOVERY_URLS, SCOPES);

export default Gapi;
