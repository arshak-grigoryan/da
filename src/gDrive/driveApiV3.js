import { DRIVE_MULTIPART_UPLOAD_URL } from './constants';

const DriveApiV3 = {
  uploadUrl: DRIVE_MULTIPART_UPLOAD_URL,
  userIdFromDrive: null,
  uploadedImage: {
    id: null,
    webViewLink: null
  },
  openWithState: null,
  newButtonState: null,
  imgOptions: null,

  async getImageById(id) {
    try {
      const response = await gapi.client.drive.files.get({
        fileId: id,
        alt: 'media',
        fields: 'id, name',
      });

      return `data:${response.headers['Content-Type']};base64, ${btoa(response.body)}`
    } catch (error) {
      console.log(error) 
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
      console.log(error)
    }
  },

  async uploadFile(body) {
    try {
      const reponse = await fetch(this.uploadUrl, {
        method: 'POST',
        headers: new Headers({ Authorization: `Bearer ${gapi.auth.getToken().access_token}` }),
        body,
      });

      return await reponse.json();
    } catch (error) {
      console.log(error)
    }
  },
};

export default DriveApiV3;
