import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import canvas from 'store/canvas';

import {
  getDriveUiIntegrationType,
  addSrcToCanvas,
} from './helpers';
import DriveApiV3 from './driveApiV3';
import { DRIVE_UI_INTEGRATION_TYPES } from './constants';
import Gapi from './gapi';

const useGDrive = () => {
  console.log('useGDrive');
  const location = useLocation();
  const history = useHistory();
  // const dispatch = useDispatch();

  useEffect(() => {
    console.log('useGDrive eff');

    console.log(location.search)
    const searchParams = new URLSearchParams(location.search);

    if (!searchParams.has('state')) {
      return null;
    }

    console.log(searchParams);
    const state = JSON.parse(searchParams.get('state'));

    const integrationType = getDriveUiIntegrationType(state);

    if (!integrationType) {
      history.replace('/chooser');
      return null;
    }

    (async () => {
      await Gapi.init();

      const user = await Gapi.authUser(state.userId);

      console.log(user)
      if (!user) {
        history.replace('/editor?category=photos');
        return;
      }

      if (integrationType === DRIVE_UI_INTEGRATION_TYPES.openWithAppSpecificDocument) {
        Gapi.openWithState = state;
        const [id] = state.ids;
        const fileParents = await DriveApiV3.getFileFields({ fileId: id, fields: 'parents, name' });
        console.log(fileParents);
        const folderPermissions = await DriveApiV3.getFileFields({ fileId: fileParents.parents[0], fields: 'permissions' });
        console.log(folderPermissions)
        const filePermissions = await DriveApiV3.getFileFields({ fileId: id, fields: 'permissions' });
        console.log(filePermissions);

        Gapi.driveActiveImageId = id;
        const fields = await DriveApiV3.getFileFields({ fileId: id, fields: '*'});
        console.log(fields)
        window.fields = fields
        const { imageMediaMetadata: { width, height } } = fields;
        const { src, mimeType } = await DriveApiV3.getImageById(id);

        Gapi.imgOptions = { src, mimeType, width, height };
        // dispatch(canvas.actions.setBlankCanvasSettings({
        //   blank: true,
        //   width,
        //   height,
        // }));
        // history.replace(`/editor?customSize=${width}x${height}&unit=px&category=photos`);
        addSrcToCanvas(Gapi.imgOptions.src);
        return;
      }

      // if (integrationType === DRIVE_UI_INTEGRATION_TYPES.openWithGoogleWorkspaceDocument) {}

      // if (integrationType === DRIVE_UI_INTEGRATION_TYPES.newButton) {}
    })();
  });
};

export default useGDrive;
