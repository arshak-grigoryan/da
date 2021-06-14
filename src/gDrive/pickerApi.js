import { API_KEY } from './constants';

class PickerWidget {
  async init(uploadCallback, imgSettings) {
    console.log('class');
    console.log('initPicker');
    await PickerWidget.handlePickerLoad();
    await PickerWidget.createPicker(uploadCallback, imgSettings);
    console.log('picker created');
  }

  static handlePickerLoad() {
    return new Promise((res, rej) => {
      gapi.load('picker', { callback: res, onerror: rej });
    });
  }

  static async createPicker(uploadCallback, imgSettings) {
    console.log(uploadCallback, imgSettings);
    const oauthToken = gapi.auth.getToken().access_token;

    const myDriveView = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
      .setLabel('My Drive')
      .setOwnedByMe(true)
      .setIncludeFolders(true)
      .setSelectFolderEnabled(true);

    const sharedDriveView = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
      .setEnableDrives(true)
      .setIncludeFolders(true)
      .setSelectFolderEnabled(true);

    const sharedWithMeView = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
      .setLabel('Shared with Me')
      .setOwnedByMe(false)
      .setIncludeFolders(true)
      .setSelectFolderEnabled(true);

    const starredView = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
      .setLabel('Starred')
      .setStarred(true)
      .setIncludeFolders(true)
      .setSelectFolderEnabled(true);

    const picker = new google.picker.PickerBuilder()
      .addView(myDriveView)
      .addView(sharedDriveView)
      .addView(sharedWithMeView)
      .addView(starredView)
      .setOAuthToken(oauthToken)
      .setDeveloperKey(API_KEY)
      .setCallback(d => PickerWidget.pickerCallback(d, uploadCallback, imgSettings))
      .enableFeature(google.picker.Feature.SUPPORT_DRIVES)
      .setTitle('Pick a folder')
      .build();
    picker.setVisible(true);
  }

  static pickerCallback(data, cb, imgSettings) {
    console.log(data, cb, imgSettings);
    if (data[google.picker.Response.ACTION] === google.picker.Action.PICKED) {
      const folder = data[google.picker.Response.DOCUMENTS][0];
      console.log(folder.id);
      cb(imgSettings, [folder.id]);
    }
  }
}

const Picker = new PickerWidget();

export default Picker;
