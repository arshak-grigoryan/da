import {
  API_KEY,
  CLIENT_ID,
  DISCOVERY_URLS,
  SCOPES,
  GOOGLE_API_CLIENT_API_SCRIPT_URL,
} from './constants';
import DriveApiV3 from './driveApiV3';

// declare const gapi: any;

class GapiClient {
  static readonly apiKey = API_KEY;

  static readonly clientId = CLIENT_ID;

  static readonly discoverUrls = DISCOVERY_URLS;

  static readonly scopes = SCOPES;

  static readonly url = GOOGLE_API_CLIENT_API_SCRIPT_URL;

  static addScript(url: string) {
    return new Promise<void>(resolve => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => {
        resolve();
      };
      document.body.appendChild(script);
    });
  }

  async init() {
    if ((window as any).gapi) {
      return;
    }
    try {
      await GapiClient.addScript(GapiClient.url);
      await GapiClient.loadClient();
      await GapiClient.initClient();
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
    }
  }

  async signOutGoogle() {
    await this.init();
    gapi.auth2.getAuthInstance().signOut();
  }

  async revokeAccess() {
    console.log('revokeAccess');
    await this.init();
    gapi.auth2.getAuthInstance().disconnect();
  }

  async handleDifferentUsers(currentUser: any): Promise<undefined | (() => {})> {
    console.log(currentUser, DriveApiV3.userIdFromDrive);
    if (!DriveApiV3.userIdFromDrive) {
      return;
    }

    if (currentUser.getId() === DriveApiV3.userIdFromDrive) {
      return this.handleGrantedScopes(currentUser);
    }

    await this.revokeAccess();
    // eslint-disable-next-line
    const isAnswer = confirm(`Your signed account ${currentUser.getBasicProfile().getEmail()} is not match with drive account, choose oter account`);

    if (isAnswer) {
      return this.handleSignInPrompt();
    }

    return this.handleAuthorizeDriveModal();
  }

  async getGrantedScopes() {
    await this.init();
    await this.authUser();
    return gapi.auth2.getAuthInstance().currentUser.get().getGrantedScopes();
  }

  handleGrantedScopes(currentUser: any) {
    const grantedScopes = currentUser.getGrantedScopes();
    const scopesList = GapiClient.scopes.split(' ');

    for (let i = 0; i < scopesList.length; i++) {
      if (!grantedScopes.includes(scopesList[i])) {
        return this.handleAuthorizeDriveModal();
      }
    }

    return currentUser;
  }

  async handleSignInPrompt(): Promise<undefined | (() => {})> {
    await this.revokeAccess();
    const currentUser = await this.signInWithGoogle();

    if (currentUser) {
      return this.handleDifferentUsers(currentUser);
    }

    return this.handleAuthorizeDriveModal();
  }

  handleAuthorizeDriveModal() {
    // eslint-disable-next-line
    const isAnswer = confirm('Authorize Drive');
    if (isAnswer) {
      return this.handleSignInPrompt();
    }
  }

  async authUser() {
    await this.init();

    // GoogleAuth can be null when gapi not corrected was init;
    const GoogleAuth = gapi.auth2.getAuthInstance();

    // console.log(GoogleAuth.currentUser.get())

    // id is null when app signin with google only with these https://myaccount.google.com/permissions and signout from web app
    const id = gapi.auth2.getAuthInstance().currentUser.get().getId();
    console.log(id);

    // handle expired signin session / token

    if (GoogleAuth.isSignedIn.get()) {
      return this.handleDifferentUsers(GoogleAuth.currentUser.get());
    }

    return this.handleAuthorizeDriveModal();
  }
}

console.dir(GapiClient);

const Gapi = new GapiClient();

export default Gapi;
