import { API_KEY } from './constants';

declare const gapi: any;
declare const google: any;

class PickerWidget {
  async init(callback: () => {}) {
    console.log('initPicker');
    await PickerWidget.loadPicker();
    await PickerWidget.createPicker(callback);
    console.log('picker created');
  }

  static loadPicker() {
    return new Promise((res, rej) => {
      gapi.load('picker', { callback: res, onerror: rej });
    });
  }

  static async createPicker(callback: () => {}) {
    console.log(callback);
    const oauthToken = gapi.auth.getToken().access_token;

    const myDriveView = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
      .setLabel('My Drive')
      .setOwnedByMe(true)
      .setIncludeFolders(true)
      .setSelectFolderEnabled(true);

    // const sharedDriveView = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
    //   .setEnableDrives(true)
    //   .setIncludeFolders(true)
    //   .setSelectFolderEnabled(true);

    // const sharedWithMeView = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
    //   .setLabel('Shared with Me')
    //   .setOwnedByMe(false)
    //   .setIncludeFolders(true)
    //   .setSelectFolderEnabled(true);

    // const starredView = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
    //   .setLabel('Starred')
    //   .setStarred(true)
    //   .setIncludeFolders(true)
    //   .setSelectFolderEnabled(true);

    const picker = new google.picker.PickerBuilder()
      .addView(myDriveView)
      // .addView(sharedDriveView)
      // .addView(sharedWithMeView)
      // .addView(starredView)
      .setOAuthToken(oauthToken)
      .setDeveloperKey(API_KEY)
      .setCallback((data: any) => PickerWidget.pickerCallback(data, callback))
      .enableFeature(google.picker.Feature.SUPPORT_DRIVES)
      .setTitle('Pick a folder')
      .build();
    picker.setVisible(true);
  }

  static async pickerCallback(data: any, callback: (folderId: string) => {}) {
    console.log(data);
    if (data[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
      const folder = data[google.picker.Response.DOCUMENTS][0];
      console.log(folder);
      callback(folder.id);
    }
  }
}

const PickerFolder: any = new PickerWidget();

export default PickerFolder;
