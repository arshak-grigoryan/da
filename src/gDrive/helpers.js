// import { getImgBlobAndSave } from 'utils';
// import { getPdfBlobAndSave } from 'components/common/DownloadDropdown/download';

import DriveApiV3 from './driveApiV3';
import { DRIVE_UI_INTEGRATION_TYPES } from './constants';
import Picker from './pickerApi';
import Gapi from './gapi';

export const addScript = url => new Promise(res => {
  const script = document.createElement('script');
  script.src = url;
  script.onload = () => {
    res();
  };
  document.body.appendChild(script);
});

export const isSameId = (id1, id2) => id1 === id2;

export const getDriveUiIntegrationType = state => {
  const stateKeys = Object.keys(state);

  const isUserId = stateKeys.includes('userId');
  const isAction = stateKeys.includes('action');
  const isIds = stateKeys.includes('ids');
  const isExportIds = stateKeys.includes('exportIds');
  const isFolderId = stateKeys.includes('folderId');
  // const isResourceKeys = stateKeys.includes('resourceKeys');

  /* userId and action are general for Open with and New button actions,
    ids are for handling an Open with for an app-specific document,
    exportIds are for handling an Open with for a Google Workspace document,
    folderId is for handling a New URL */

  if (isUserId && isAction && isIds) {
    return DRIVE_UI_INTEGRATION_TYPES.openWithAppSpecificDocument;
  }
  if (isUserId && isAction && isExportIds) {
    return DRIVE_UI_INTEGRATION_TYPES.openWithGoogleWorkspaceDocument;
  }
  if (isUserId && isAction && isFolderId) {
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

export const addSrcToCanvas = async imageSrc => {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  const { width, height } = await getImageSize(imageSrc);
  const baseImage = new Image();
  baseImage.src = imageSrc;
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
}, parents) => {
  const upscaleSize = upscale ? upscale === 'x2' ? 2 : 4 : undefined;
  const blob = isPdf
    ? await getPdfBlobAndSave({
      baseGroup, originalWidth, originalHeight, fileImgName, qualityValue, type, upscaleSize,
    })
    : await getImgBlobAndSave({
      baseGroup, originalWidth, originalHeight, fileImgName, qualityValue, type, isDownload, upscaleSize,
    });

  console.log(blob);
  const metadata = {
    name: fileImgName,
    mimeType: type,
    parents,
  };
  console.log(metadata);
  const form = new FormData();
  form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
  form.append('file', blob);

  console.log(form);

  const res = await DriveApiV3.uploadFile(form);

  Gapi.driveActiveImageId = res.id;
};

export const handlDriveUploadForPicker = async imgSettings => {
  await Gapi.authUser();
  let parents;
  // const drivefileId = Gapi.driveActiveImageId;
  // only for test open picker
  const drivefileId = undefined;
  if (drivefileId) {
    const parentsResp = await DriveApiV3.getFileParents({
      fileId: drivefileId,
      fields: 'parents, name',
    });
    parents = parentsResp.parents;
    console.log('parnets', parents);
    handleDriveUpload(imgSettings, parents);
  } else {
    console.log(' before  deletion');
    Picker.init(handleDriveUpload, imgSettings);
    console.log('parnets', parents);
  }
};

export const handleAuthorizeDriveModal = () => {
  // eslint-disable-next-line
  const answer = confirm('Authorization required');

  return answer
}