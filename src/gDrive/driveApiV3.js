import {
  DRIVE_MULTIPART_UPLOAD_URL,
  // DRIVE_API_FILE_SEARCH_PICSART_ROOT_FOLDER_QUERY,
  // DRIVE_API_FILE_RESOURCE_FIELDS,
} from './constants';

const DriveApiV3 = {
  userIdFromDrive: null,
  openWithState: null,
  newButtonState: null,
  // driveActiveImageId: null,
  imgOptions: null,

  async getImageById(fileId) {
    try {
      const response = await gapi.client.drive.files.get({
        fileId,
        alt: 'media',
        fields: 'id, name',
      });
      return `data:${response.headers['Content-Type']};base64, ${btoa(response.body)}`
    } catch (error) {
      console.log(error) 
    }
  },

  async getFileFields({fileId, fields}) {
    try {
      const response = await gapi.client.drive.files.get({
        fileId,
        fields,
      });
      const result = await JSON.parse(response.body);
      return result;
    } catch (error) {
      console.log(error)
    }
  },

  async uploadFile(body) {
    try {
      const reponse = await fetch(DRIVE_MULTIPART_UPLOAD_URL, {
        method: 'POST',
        headers: new Headers({ Authorization: `Bearer ${gapi.auth.getToken().access_token}` }),
        body,
      });
      const result = await reponse.json();
      return result;
    } catch (error) {
      console.log(error)
    }
  },

  // createFile({ resource, fields }) {
  //   return (
  //     gapi.client.drive.files.create({
  //       resource,
  //       fields,
  //     })
  //       .then(res => {
  //         console.log(res);
  //         const reso = JSON.parse(res.body);
  //         console.log(reso);
  //         const { files } = JSON.parse(res.body);
  //         console.log(files);
  //         return files || reso;
  //       })
  //       .catch(err => console.error(err))
  //   );
  // },
};

export default DriveApiV3;

// const token = gapi.auth.getToken().access_token;
// fetch('https://appsmarket.googleapis.com/appsmarket/v2/customerLicense/58948318321/117831644331788887278', {
//   headers: new Headers({ Authorization: `Bearer ${token}` }),
// })
//   .then(res => res.json())
//   .catch(err => {
//     console.error(err);
//   })