import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import canvas from 'store/canvas';
import { uploadToDriveForPickerFolder } from '../gDrive/helpers';

import {
  getDriveUiIntegrationType,
  drawOnCanvas,
} from './helpers';
import DriveApiV3 from './driveApiV3';
import { DRIVE_UI_INTEGRATION_TYPES, REDIRECT_URLS } from './constants';
import Gapi from './gapi';

const useGDrive = () => {
  console.log('useGDrive');
  const location = useLocation();
  const history = useHistory();
  // const dispatch = useDispatch();

  useEffect(() => {
    console.log('useGDrive eff');

    const searchParams = new URLSearchParams(location.search);

    if (!searchParams.has('state')) {
      return null;
    }

    const state = JSON.parse(searchParams.get('state'));
    
    console.log(state);
    
    const integrationType = getDriveUiIntegrationType(state);

    console.log(integrationType);

    if (!integrationType) {
      // history.replace(REDIRECT_URLS.chooser);
      return
    }

    // sessionStorage.setItem('editor');

    (async () => {
      await Gapi.init();
      console.log('after init')
      DriveApiV3.userIdFromDrive = state.userId
      const user = await Gapi.authUser();

      console.log(user)

      if (!user) {
        // history.replace(REDIRECT_URLS.photo);
        return;
      }

      if (integrationType === DRIVE_UI_INTEGRATION_TYPES.openWithAppSpecificDocument) {
        DriveApiV3.openWithState = state;
        const id = DriveApiV3.openWithState.ids[0]
        const fields = await DriveApiV3.getFileFields({ fileId: id, fields: 'imageMediaMetadata, mimeType'});

        if (!fields) {
          return
        }
        console.log(fields)
        // case filed error
        const { imageMediaMetadata: { width, height }, mimeType } = fields;
        const src = await DriveApiV3.getImageById(id);

        DriveApiV3.imgOptions = { src, mimeType, width, height };
        // dispatch(canvas.actions.setBlankCanvasSettings({
        //   blank: true,
        //   width,
        //   height,
        // }));
        // history.replace(`/editor?customSize=${width}x${height}&unit=px&category=photos`);
        drawOnCanvas(DriveApiV3.imgOptions);
        return;
      }

      if (integrationType === DRIVE_UI_INTEGRATION_TYPES.openWithGoogleWorkspaceDocument) {
        return
      }

      if (integrationType === DRIVE_UI_INTEGRATION_TYPES.newButton) {
        DriveApiV3.newButtonState = state
        uploadToDriveForPickerFolder(state.folderId)
        return
      }
      //
    })();
  });
};

export default useGDrive;