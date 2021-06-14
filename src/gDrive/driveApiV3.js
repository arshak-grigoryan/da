import {
  DRIVE_MULTIPART_UPLOAD_URL,
  // DRIVE_API_FILE_SEARCH_PICSART_ROOT_FOLDER_QUERY,
  // DRIVE_API_FILE_RESOURCE_FIELDS,
} from './constants';

const DriveApiV3 = {
  getImageById(fileId) {
    return (
      gapi.client.drive.files.get({
        fileId,
        alt: 'media',
        supportsAllDrives: true,
        fields: 'id, name',
      })
        .then(async res => {
          console.log(res)
          const mimeType = res.headers['Content-Type'];
          const src = `data:${mimeType};base64, ${btoa(res.body)}`;
          return { src, mimeType };
        })
        .catch(err => console.error(err))
    );
  },

  getFileFields({fileId, fields}) {
    return (
      gapi.client.drive.files.get({
        fileId,
        fields,
        supportsAllDrives: true,
      })
        .then(res => JSON.parse(res.body))
        .catch(err => console.error(err))
    );
  },

  getAbout(fields) {
    return (
      gapi.client.drive.about.get({
        fields,
      })
        .then(res => JSON.parse(res.body))
        .catch(err => console.error(err))
    );
  },

  // getFileParents({ fileId, fields }) {
  //   return (
  //     gapi.client.drive.files.get({
  //       fileId,
  //       fields,
  //       supportsAllDrives: true,
  //     })
  //       .then(res => JSON.parse(res.body))
  //       .catch(err => console.error(err))
  //   );
  // },

  // getFilePermissions(fileId) {
  //   return (
  //     gapi.client.drive.files.get({
  //       fileId,
  //       fields: 'permissions',
  //       supportsAllDrives: true,
  //     })
  //       .then(res => JSON.parse(res.body))
  //       .catch(err => console.error(err))
  //   );
  // },

  uploadFile(body) {
    // need add supportsAllDrives: true param
    return (
      fetch(DRIVE_MULTIPART_UPLOAD_URL, {
        method: 'POST',
        headers: new Headers({ Authorization: `Bearer ${gapi.auth.getToken().access_token}` }),
        body,
      })
        .then(res => res.json())
        .catch(err => {
          console.error(err);
        })
    );
  },

  // searchFiles({ q, fields }) {
  //   return (
  //     gapi.client.drive.files.list({
  //       q,
  //       fields,
  //     })
  //       .then(async res => {
  //         const body = JSON.parse(res.body);
  //         const { files } = body;
  //         console.log(files);
  //         return files;
  //       })
  //       .catch(err => console.error(err))
  //   );
  // },

  createFile({ resource, fields }) {
    return (
      gapi.client.drive.files.create({
        resource,
        fields,
      })
        .then(res => {
          console.log(res);
          const reso = JSON.parse(res.body);
          console.log(reso);
          const { files } = JSON.parse(res.body);
          console.log(files);
          return files || reso;
        })
        .catch(err => console.error(err))
    );
  },
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