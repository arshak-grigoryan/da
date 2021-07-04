import { DRIVE_MULTIPART_UPLOAD_URL } from './constants';

declare const gapi: any;

type fileFields = {
  id: null | string;
  webViewLink?: null | string;
}

// interface driveActionState {

// }

type imgOptions = {
  src: string;
  mimeType: string;
  width: number;
  height: number;
}

type DriveApi = {
  uploadUrl: string;
  userIdFromDrive: null | string;
  openWithState: any;
  newButtonState: any;
  imgOptions: null | imgOptions;
  picsartImageParams: any;
  uploadedImage: fileFields;
  getImageById: (id: string) => Promise<string | undefined>;
  getFileFields: (fileId: null | string, fields: string) => Promise<fileFields>;
  uploadFile: (body: any) => Promise<fileFields>;
}

const DriveApiV3: DriveApi = {
  uploadUrl: DRIVE_MULTIPART_UPLOAD_URL,
  userIdFromDrive: null,
  openWithState: null,
  newButtonState: null,
  imgOptions: null,
  picsartImageParams: null,
  uploadedImage: {
    id: null,
    webViewLink: null,
  },

  async getImageById(id) {
    try {
      const response = await gapi.client.drive.files.get({
        fileId: id,
        alt: 'media',
        fields: 'id, name',
      });

      return `data:${response.headers['Content-Type']};base64, ${btoa(response.body)}`;
    } catch (error) {
      console.log(error);
    }
  },

  async getFileFields(fileId, fields) {
    try {
      const response = await gapi.client.drive.files.get({
        fileId,
        fields,
      });

      return await JSON.parse(response.body);
    } catch (error) {
      console.log(error);
    }
  },

  async uploadFile(data) {
    try {
      const reponse = await fetch(this.uploadUrl, {
        method: 'POST',
        headers: new Headers({ Authorization: `Bearer ${gapi.auth.getToken().access_token}` }),
        body: data,
      });

      return await reponse.json();
    } catch (error) {
      console.log(error);
    }
  },
};

export default DriveApiV3;
