// scripts
export const GOOGLE_API_CLIENT_API_SCRIPT_URL = 'https://apis.google.com/js/api.js';

// URLs
export const DRIVE_MULTIPART_UPLOAD_URL = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id';

// configs
export const API_KEY = 'AIzaSyDy6SRTXKsQx4TlXzxWw1LcN7OwiwwgtQM';
export const CLIENT_ID = '797908848155-g3s0vkl72b2hflvrq6mcq3et891evoim.apps.googleusercontent.com';
const DRIVE_API_DISCOVERY_DOCUMENT = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

export const DISCOVERY_URLS = [
  DRIVE_API_DISCOVERY_DOCUMENT,
];
export const DRIVE_API_SCOPES = {
  recommended: {
    // appdata: 'https://www.googleapis.com/auth/drive.appdata',
    file: 'https://www.googleapis.com/auth/drive.file',
    install: 'https://www.googleapis.com/auth/drive.install',
  },
  // sensitive: {
  //   appsReadOnly: 'https://www.googleapis.com/auth/drive.apps.readonly',
  // },
  // restricted: {
  //   metadata: 'https://www.googleapis.com/auth/drive.metadata',
  //   readonly: 'https://www.googleapis.com/auth/drive.readonly',
  //   metadataReadonly: 'https://www.googleapis.com/auth/drive.metadata.readonly',
  //   full: 'https://www.googleapis.com/auth/drive',
  //   activity: 'https://www.googleapis.com/auth/drive.activity',
  //   activityReadonly: 'https://www.googleapis.com/auth/drive.activity.readonly',
  //   scripts: 'https://www.googleapis.com/auth/drive.scripts',
  // },
};

export const SCOPES = [
  DRIVE_API_SCOPES.recommended.file,
  DRIVE_API_SCOPES.recommended.install,
].join(' ');

// string names
export const DRIVE_UI_INTEGRATION_TYPES = {
  openWithAppSpecificDocument: 'openWithAppSpecificDocument',
  openWithGoogleWorkspaceDocument: 'openWithGoogleWorkspaceDocument',
  newButton: 'newButton',
};

// paths
export const REDIRECT_URLS = {
  chooser: '/chooser',
  photo: '/editor?category=photos',
};
