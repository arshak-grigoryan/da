// scripts
export const GOOGLE_API_CLIENT_API_SCRIPT_URL = 'https://apis.google.com/js/api.js';

// URLs
export const DRIVE_MULTIPART_UPLOAD_URL = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id';

// configs
export const API_KEY = 'AIzaSyAuVXgAR4aI47Fxg4ztfBpLpb_IafzKsMY';
export const CLIENT_ID = '58948318321-knaasj1fie9mmvd715621ua0f7drspkd.apps.googleusercontent.com';
const DRIVE_API_DISCOVERY_DOCUMENT = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
const MARKETPLACE_API_DISCOVERY_DOCUMENT = 'https://appsmarket.googleapis.com/$discovery/rest?version=v2';

export const DISCOVERY_URLS = [
  DRIVE_API_DISCOVERY_DOCUMENT,
  MARKETPLACE_API_DISCOVERY_DOCUMENT
];
const DRIVE_API_SCOPES = {
  recommended: {
    appdata: 'https://www.googleapis.com/auth/drive.appdata',
    file: 'https://www.googleapis.com/auth/drive.file',
    install: 'https://www.googleapis.com/auth/drive.install',
  },
  // sensitive: {
  //   appsReadOnly: 'https://www.googleapis.com/auth/drive.apps.readonly',
  // },
  // restricted: {
  //   metadata: 'https://www.googleapis.com/auth/drive.metadata',
  //   full: 'https://www.googleapis.com/auth/drive',
  //   activity: 'https://www.googleapis.com/auth/drive.activity',
  //   activityReadonly: 'https://www.googleapis.com/auth/drive.activity.readonly',
  //   readonly: 'https://www.googleapis.com/auth/drive.readonly',
  //   metadataReadonly: 'https://www.googleapis.com/auth/drive.metadata.readonly',
  //   scripts: 'https://www.googleapis.com/auth/drive.scripts',
  // },
};

export const SCOPES = [
  DRIVE_API_SCOPES.recommended.appdata,
  DRIVE_API_SCOPES.recommended.file,
  DRIVE_API_SCOPES.recommended.install,
  'https://www.googleapis.com/auth/appsmarketplace.license'
  // DRIVE_API_SCOPES.sensitive.appsReadOnly,
  // DRIVE_API_SCOPES.restricted.metadata,
  // DRIVE_API_SCOPES.restricted.full,
  // DRIVE_API_SCOPES.restricted.activity,
  // DRIVE_API_SCOPES.restricted.activityReadonly,
  // DRIVE_API_SCOPES.restricted.readonly,
  // DRIVE_API_SCOPES.restricted.metadataReadonly,
  // DRIVE_API_SCOPES.restricted.scripts,
].join(' ');

// string names
export const DRIVE_UI_INTEGRATION_TYPES = {
  openWithAppSpecificDocument: 'openWithAppSpecificDocument',
  // openWithGoogleWorkspaceDocument: 'openWithGoogleWorkspaceDocument',
  // newButton: 'newButton',
};

// drive API
// export const DRIVE_API_FILE_SEARCH_PICSART_ROOT_FOLDER_QUERY = '"root" in parents and mimeType = "application/vnd.google-apps.folder" and name = "PicsArt" and trashed = false';
// export const DRIVE_API_FILE_RESOURCE_FIELDS = 'nextPageToken, files(id, name)';
export const DRIVE_API_FIELDS = {
  about: {
    storageQuota: 'storageQuota',
  }
}