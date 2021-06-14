import { addScript } from './utils';
import {
  API_KEY,
  CLIENT_ID,
  DISCOVERY_URLS,
  SCOPES,
  GOOGLE_API_CLIENT_API_SCRIPT_URL,
} from './constants';
import { handleAuthorizeDriveModal, isSameId } from './helpers';

class GapiBrowserLibrary {
  constructor() {
    this.openWithState = null;
    this.driveActiveImageId = null;
    this.imgOptions = null;
  }

  async init() {
    console.log('init');
    if (window.gapi) {
      return;
    }
    try {
      await addScript(GOOGLE_API_CLIENT_API_SCRIPT_URL);
      await GapiBrowserLibrary.loadClient();
      await GapiBrowserLibrary.initClient();
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
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_URLS,
        scope: SCOPES,
      })
    );
  }

  async signInWithGoogle() {
    await this.init();
    try {
      const currentUser = await gapi.auth2.getAuthInstance().signIn();
      return currentUser;
    } catch (error) {
      // error case: when user closes sign in prompt
      console.log(error);
      return error;
    }
  }

  async signOutGoogle() {
    await this.init();
    gapi.auth2.getAuthInstance().signOut();
  }

  async shareDrive(resetProgressCallback) {
    console.log('shareDrive');
    await this.init();
    await GapiBrowserLibrary.loadDriveShare();
    const token = gapi.auth.getToken().access_token;
    const s = await new gapi.drive.share.ShareClient();
    s.setOAuthToken(token);
    s.setItemIds(this.driveActiveImageId);
    s.showSettingsDialog();
    this.driveActiveImageId = null;
    resetProgressCallback();
  }


  async authUser(userIdFromDrive) {
    await this.init();
    console.log('userIdFromDrive', userIdFromDrive);
    const GoogleAuth = gapi.auth2.getAuthInstance();

    // console.log('isSignedIn', GoogleAuth.isSignedIn.get(), GoogleAuth.currentUser.get().getBasicProfile().getEmail());

    if (GoogleAuth.isSignedIn.get()) {
      const grantedScopes = GoogleAuth.currentUser.get().getGrantedScopes();
      console.log(grantedScopes)
      // check for scopes
      if (userIdFromDrive) {
        const isSameUser = isSameId(GoogleAuth.currentUser.get().getId(), userIdFromDrive);
        if (isSameUser) {
          console.log('already signin from drive and existing are same!!', userIdFromDrive);
          return userIdFromDrive;
        }
        this.openWithState = null;
        this.driveActiveImageId = null;
        console.log('isSameUser is false');
        console.log('signOut');
        GoogleAuth.signOut();
      } else {
        console.log('userIdFromDrive is undefined');
        return GoogleAuth.currentUser.get();
      }
    }

    const res = handleAuthorizeDriveModal();
    if (!res) return

    const currentUser = await this.signInWithGoogle();

    if (currentUser.error) {
      // this.authUser();
      console.log('currentUser.error')
      this.openWithState = null;
      this.driveActiveImageId = null;
      return;
    }
    // const grantedScopes = currentUser
    if (userIdFromDrive) {
      const isSameUser = isSameId(currentUser.getId(), userIdFromDrive);
      console.log('isSameUser', isSameUser);
      if (!isSameUser) {
        GoogleAuth.disconnect();
        // eslint-disable-next-line
        const isUserAcceptedNewSigninFlow = confirm("Drive account and choosed account doesn't match. Choose account again");
        if (isUserAcceptedNewSigninFlow) {
          console.log('isUserAcceptedNewSigninFlow', isUserAcceptedNewSigninFlow);
          // return handleAuthProcess(null, userIdFromDrive);
        }
        // eslint-disable-next-line
        alert('Your state was lost');
        return;
      }
      console.log('signin from drive first time');
      return currentUser;
    }
    console.log('signin independent first time');
    return currentUser;
  }
}

const Gapi = new GapiBrowserLibrary();

export default Gapi;
