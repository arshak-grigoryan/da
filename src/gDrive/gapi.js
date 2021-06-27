import {
  API_KEY,
  CLIENT_ID,
  DISCOVERY_URLS,
  SCOPES,
  GOOGLE_API_CLIENT_API_SCRIPT_URL,
} from './constants';
import { addScript } from './helpers';
import DriveApiV3 from './driveApiV3';

class GapiClient {
  constructor() {
    GapiClient.apiKey = API_KEY;
    GapiClient.clientId = CLIENT_ID;
    GapiClient.discoverUrls = DISCOVERY_URLS;
    GapiClient.scopes = SCOPES;
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

  async shareDrive() {
    await this.init();
    await GapiClient.loadDriveShare();
    console.log(DriveApiV3.uploadedImage.id)
    const token = gapi.auth.getToken().access_token;
    window.s = await new gapi.drive.share.ShareClient();
    s.setOAuthToken(token);
    s.setItemIds(DriveApiV3.uploadedImage.id);
    s.showSettingsDialog();
  }

  async handleDifferentUsers(currentUser) {
    // console.log(currentUser, DriveApiV3.userIdFromDrive)
    if (currentUser.getId() === DriveApiV3.userIdFromDrive) {
      return this.handleGrantedScopes(currentUser)
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
    await this.init()
    return gapi.auth2.getAuthInstance().currentUser.get().getGrantedScopes()
  }

  handleGrantedScopes(currentUser) {
    const grantedScopes = currentUser.getGrantedScopes();
    const scopesList = GapiClient.scopes.split(' ');

    for(let i=0; i<scopesList.length; i++) {
      if(!grantedScopes.includes(scopesList[i])) {
        return this.handleAuthorizeDriveModal();
      }
    };

    return currentUser;
  }

  async handleSignInPrompt() {
    await this.revokeAccess();
    const currentUser = await this.signInWithGoogle();
    
    if (currentUser) {
      return this.handleDifferentUsers(currentUser)
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
      return this.handleDifferentUsers(GoogleAuth.currentUser.get());
    }

    return this.handleAuthorizeDriveModal();
  }
}

const Gapi = new GapiClient();

export default Gapi;
