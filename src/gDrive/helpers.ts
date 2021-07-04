// import { getImgBlobAndSave } from 'utils';
// import { getPdfBlobAndSave } from 'components/common/DownloadDropdown/download';

import { DRIVE_UI_INTEGRATION_TYPES } from './constants';
import DriveApiV3 from './driveApiV3';
import PickerFolder from './pickerApi';
import Gapi from './gapi';

// const b64toBlob = (b64Data, contentType) => {
//   const byteCharacters = atob(b64Data);
//   const byteArrays = [];

//   const byteNumbers = new Array(byteCharacters.length);
//   for (let i = 0; i < byteCharacters.length; i++) {
//     byteNumbers[i] = byteCharacters.charCodeAt(i);
//   }

//   const byteArray = new Uint8Array(byteNumbers);
//   byteArrays.push(byteArray);

//   const blob = new Blob(byteArrays, { type: contentType });
//   return blob;
// };

// export const addScript = url => new Promise(res => {
//   const script = document.createElement('script');
//   script.src = url;
//   script.onload = () => {
//     res();
//   };
//   document.body.appendChild(script);
// });

export const getDriveUiIntegrationType = (state: any) => {
  const stateKeys = Object.keys(state);

  const isUserId = stateKeys.includes('userId');
  const isAction = stateKeys.includes('action');
  const isIds = stateKeys.includes('ids');
  const isExportIds = stateKeys.includes('exportIds');
  const isFolderId = stateKeys.includes('folderId');
  // const isResourceKeys = stateKeys.includes('resourceKeys');
  // const isFolderResourceKey = stateKeys.includes('folderResourceKey');

  /* userId and action are general for Open with and New button actions,
    ids are for handling an Open with for an app-specific document,
    exportIds are for handling an Open with for a Google Workspace document,
    folderId is for handling a New URL */

  if (isUserId && isAction && isIds && state.action === 'open') {
    return DRIVE_UI_INTEGRATION_TYPES.openWithAppSpecificDocument;
  }
  if (isUserId && isAction && isExportIds && state.action === 'open') {
    return DRIVE_UI_INTEGRATION_TYPES.openWithGoogleWorkspaceDocument;
  }
  if (isUserId && isAction && isFolderId && state.action === 'create') {
    return DRIVE_UI_INTEGRATION_TYPES.newButton;
  }
};

// export const getImageSize = src => new Promise(res => {
//   const image = new Image();
//   image.src = src;
//   image.onload = () => {
//     const { width, height } = image;
//     res({ width, height });
//   };
// });

// export const rgbColor1To255 = colorObj => {
//   const colorObj255 = {};
//   Object.entries(colorObj)
//     .map(color => [color[0], Math.round(color[1] * 255)])
//     .forEach(([name, value]) => colorObj255[name] = value);
//   return colorObj255;
// };

export const drawOnCanvas = async ({ width, height, src }: { width: number; height: number; src: string }) => {
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as any;
  const baseImage = new Image();
  baseImage.src = src;
  baseImage.onload = () => {
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(baseImage, 0, 0);
  };
};

export const handleDriveUpload = async ({
  baseGroup,
  upscale,
  fileImgName,
  qualityValue,
  type,
  originalWidth,
  originalHeight,
  isPdf,
  isDownload,
}: any) => {
  // const upscaleSize = upscale ? upscale === 'x2' ? 2 : 4 : undefined;
  const blob = ''
  // const blob = isPdf
  //   ? await getPdfBlobAndSave({
  //     baseGroup, originalWidth, originalHeight, fileImgName, qualityValue, type, upscaleSize,
  //   })
  //   : await getImgBlobAndSave({
  //     baseGroup, originalWidth, originalHeight, fileImgName, qualityValue, type, isDownload, upscaleSize,
  //   });

  console.log(blob);
  const metadata = {
    name: fileImgName,
    mimeType: type,
  };
  console.log(metadata);
  return {
    metadata,
    blob,
  };
};

// export const uploadToDriveForPickerFolder = async folderId => {
//   const metadata = {
//     name: '0000hardCodeName',
//     mimeType: DriveApiV3.imgOptions.mimeType,
//     parents: [folderId],
//     appProperties: {
//       picsart: 'PicsArt',
//     },
//   };
//   console.log(metadata);
//   const b64Data = DriveApiV3.imgOptions.src.split(',')[1];
//   const blob = b64toBlob(b64Data, DriveApiV3.imgOptions.mimeType);
//   const form = new FormData();
//   form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
//   form.append('file', blob);

//   console.log(form);

//   const res1 = await DriveApiV3.uploadFile(form);
//   console.log(res1);
//   DriveApiV3.uploadedImage.id = res1.id;
//   const res2 = await DriveApiV3.getFileFields(DriveApiV3.uploadedImage.id, 'webViewLink');
//   DriveApiV3.uploadedImage.webViewLink = res2.webViewLink;

//   console.log(res2);
//   // eslint-disable-next-line
//   alert(`Image Saved ${DriveApiV3.uploadedImage.webViewLink}`);
// };

const uploadToDriveForPickerFolder2 = async (folderId: string) => {
  const image = await handleDriveUpload(DriveApiV3.picsartImageParams);
  const { metadata: { name, mimeType }, blob } = image;

  const metadata = {
    name,
    mimeType,
    parents: [folderId],
    appProperties: {
      picsart: 'PicsArt',
    },
  };
  console.log(metadata);
  const form = new FormData();
  form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
  form.append('file', blob);

  console.log(form);

  const res1 = await DriveApiV3.uploadFile(form);
  DriveApiV3.uploadedImage.id = res1.id;
  const res2 = await DriveApiV3.getFileFields(DriveApiV3.uploadedImage.id, 'webViewLink');
  DriveApiV3.uploadedImage.webViewLink = res2.webViewLink;
  DriveApiV3.picsartImageParams = null;
  console.log(res1, res2);
  console.log(DriveApiV3);
  // eslint-disable-next-line
  alert(`Image Saved ${DriveApiV3.uploadedImage.webViewLink}`);
};

export const uploadDriveForPicker = async (params: any) => {
  console.log('uploadDriveForPicker');
  DriveApiV3.picsartImageParams = params;
  const currentUser = await Gapi.authUser();
  if (!currentUser) {
    return;
  }
  console.log(DriveApiV3.picsartImageParams);
  PickerFolder.init(uploadToDriveForPickerFolder2);
};
