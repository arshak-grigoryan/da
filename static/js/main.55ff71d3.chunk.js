(this.webpackJsonpda=this.webpackJsonpda||[]).push([[0],{24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(18),a=n.n(i),o=(n(24),n(8)),c=n(4),s=n(1),u=n.n(s),l=n(3),p=n(11),d="AIzaSyAuVXgAR4aI47Fxg4ztfBpLpb_IafzKsMY",f=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],g={recommended:{file:"https://www.googleapis.com/auth/drive.file",install:"https://www.googleapis.com/auth/drive.install"}},h=[g.recommended.file,g.recommended.install].join(" "),v={openWithAppSpecificDocument:"openWithAppSpecificDocument",newButton:"newButton"},b={getImageById:function(e){return gapi.client.drive.files.get({fileId:e,alt:"media",supportsAllDrives:!0,fields:"id, name"}).then(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n=t.headers["Content-Type"],r="data:".concat(n,";base64, ").concat(btoa(t.body)),e.abrupt("return",{src:r,mimeType:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}))},getFileFields:function(e){var t=e.fileId,n=e.fields;return gapi.client.drive.files.get({fileId:t,fields:n,supportsAllDrives:!0}).then((function(e){return JSON.parse(e.body)})).catch((function(e){return console.error(e)}))},getAbout:function(e){return gapi.client.drive.about.get({fields:e}).then((function(e){return JSON.parse(e.body)})).catch((function(e){return console.error(e)}))},uploadFile:function(e){return fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",{method:"POST",headers:new Headers({Authorization:"Bearer ".concat(gapi.auth.getToken().access_token)}),body:e}).then((function(e){return e.json()})).catch((function(e){console.error(e)}))},createFile:function(e){var t=e.resource,n=e.fields;return gapi.client.drive.files.create({resource:t,fields:n}).then((function(e){console.log(e);var t=JSON.parse(e.body);console.log(t);var n=JSON.parse(e.body).files;return console.log(n),n||t})).catch((function(e){return console.error(e)}))}},m=n(9),k=n(10),w=function(){function e(){Object(m.a)(this,e)}return Object(k.a)(e,[{key:"init",value:function(){var t=Object(l.a)(u.a.mark((function t(n,r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("class"),console.log("initPicker"),t.next=4,e.handlePickerLoad();case 4:return console.log(this.isPickFile),t.next=7,e.createPicker(n,r);case 7:console.log("picker created");case 8:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()}],[{key:"handlePickerLoad",value:function(){return new Promise((function(e,t){gapi.load("picker",{callback:e,onerror:t})}))}},{key:"createPicker",value:function(){var t=Object(l.a)(u.a.mark((function t(n,r,i){var a,o,c,s,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(n,r),a=gapi.auth.getToken().access_token,o=new google.picker.DocsView(google.picker.ViewId.FOLDERS).setLabel("My Drive").setOwnedByMe(!0).setIncludeFolders(!0).setSelectFolderEnabled(!0),c=new google.picker.DocsView(google.picker.ViewId.FOLDERS).setEnableDrives(!0).setIncludeFolders(!0).setSelectFolderEnabled(!0),s=new google.picker.DocsView(google.picker.ViewId.FOLDERS).setLabel("Shared with Me").setOwnedByMe(!1).setIncludeFolders(!0).setSelectFolderEnabled(!0),l=new google.picker.DocsView(google.picker.ViewId.FOLDERS).setLabel("Starred").setStarred(!0).setIncludeFolders(!0).setSelectFolderEnabled(!0),(new google.picker.PickerBuilder).addView(o).addView(c).addView(s).addView(l).setOAuthToken(a).setDeveloperKey(d).setCallback((function(t){return e.pickerCallback(t,n,r)})).enableFeature(google.picker.Feature.SUPPORT_DRIVES).setTitle("Pick a folder").build().setVisible(!0);case 8:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"pickerCallback",value:function(){var e=Object(l.a)(u.a.mark((function e(t,n,r){var i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),t[google.picker.Response.ACTION]===google.picker.Action.PICKED&&(i=t[google.picker.Response.DOCUMENTS][0],console.log(i),console.log(i.id));case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()}]),e}(),x=new w;console.log(x);var j=new w;console.log(j);var O=function(e){return new Promise((function(t){var n=document.createElement("script");n.src=e,n.onload=function(){t()},document.body.appendChild(n)}))},y=new(function(){function e(){Object(m.a)(this,e),this.openWithState=null,this.driveActiveImageId=null,this.imgOptions=null}return Object(k.a)(e,[{key:"init",value:function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("init check"),!window.gapi){t.next=3;break}return t.abrupt("return");case 3:return console.log("init"),t.prev=4,t.next=7,O("https://apis.google.com/js/api.js");case 7:return console.log("1"),t.next=10,e.loadClient();case 10:return console.log("2"),t.next=13,e.initClient();case 13:return console.log("3"),t.abrupt("return",gapi);case 17:t.prev=17,t.t0=t.catch(4),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(){return t.apply(this,arguments)}}()},{key:"signInWithGoogle",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return e.prev=2,e.next=5,gapi.auth2.getAuthInstance().signIn();case 5:return t=e.sent,e.abrupt("return",t);case 9:return e.prev=9,e.t0=e.catch(2),console.log(e.t0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"signOutGoogle",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:gapi.auth2.getAuthInstance().signOut();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"revokeAccess",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:gapi.auth2.getAuthInstance().disconnect();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"shareDrive",value:function(){var t=Object(l.a)(u.a.mark((function t(n){var r,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("shareDrive"),t.next=3,this.init();case 3:return t.next=5,e.loadDriveShare();case 5:return r=gapi.auth.getToken().access_token,t.next=8,new gapi.drive.share.ShareClient;case 8:(i=t.sent).setOAuthToken(r),i.setItemIds(this.driveActiveImageId),i.showSettingsDialog(),this.driveActiveImageId=null,n();case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getGrantedScopes",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return e.abrupt("return",gapi.auth2.getAuthInstance().currentUser.get().getGrantedScopes());case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"authUser",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,i,a,o,c,s,l,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:if(console.log("userIdFromDrive",t),!(n=gapi.auth2.getAuthInstance()).isSignedIn.get()){e.next=23;break}if(r=n.currentUser.get().getGrantedScopes(),i=g.recommended,a=i.appdata,o=i.file,c=i.install,r.includes(a)&&r.includes(o)&&r.includes(c),console.log(r),!t){e.next=21;break}if(!I(n.currentUser.get().getId(),t)){e.next=14;break}return console.log("already signin from drive and existing are same!!",t),e.abrupt("return",t);case 14:this.openWithState=null,this.driveActiveImageId=null,console.log("isSameUser is false"),console.log("signOut"),n.signOut(),e.next=23;break;case 21:return console.log("userIdFromDrive is undefined"),e.abrupt("return",n.currentUser.get());case 23:if(B()){e.next=26;break}return e.abrupt("return");case 26:return e.next=28,this.signInWithGoogle();case 28:if(!(s=e.sent).error){e.next=34;break}return console.log("currentUser.error"),this.openWithState=null,this.driveActiveImageId=null,e.abrupt("return");case 34:if(!t){e.next=45;break}if(l=I(s.getId(),t),console.log("isSameUser",l),l){e.next=43;break}return n.disconnect(),(p=confirm("Drive account and choosed account doesn't match. Choose account again"))&&console.log("isUserAcceptedNewSigninFlow",p),alert("Your state was lost"),e.abrupt("return");case 43:return console.log("signin from drive first time"),e.abrupt("return",s);case 45:return console.log("signin independent first time"),e.abrupt("return",s);case 47:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}],[{key:"loadClient",value:function(){return new Promise((function(e,t){gapi.load("client:auth2",{callback:e,onerror:t})}))}},{key:"loadDriveShare",value:function(){return new Promise((function(e,t){gapi.load("drive-share",{callback:e,onerror:t})}))}},{key:"initClient",value:function(){return gapi.client.init({apiKey:d,clientId:"58948318321-knaasj1fie9mmvd715621ua0f7drspkd.apps.googleusercontent.com",discoveryDocs:f,scope:h})}}]),e}()),I=function(e,t){return e===t},S=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,i,a,o,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.width,r=t.height,i=t.src,a=document.getElementById("myCanvas"),o=a.getContext("2d"),(c=new Image).src=i,c.onload=function(){a.width=n,a.height=r,o.drawImage(c,0,0)};case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,i,a,o,c,s,l,p,d,f,g,h,v,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.baseGroup,i=t.upscale,a=t.fileImgName,o=t.qualityValue,c=t.type,s=t.originalWidth,l=t.originalHeight,p=t.isPdf,d=t.isDownload,f=i?"x2"===i?2:4:void 0,!p){e.next=8;break}return e.next=5,getPdfBlobAndSave({baseGroup:r,originalWidth:s,originalHeight:l,fileImgName:a,qualityValue:o,type:c,upscaleSize:f});case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,getImgBlobAndSave({baseGroup:r,originalWidth:s,originalHeight:l,fileImgName:a,qualityValue:o,type:c,isDownload:d,upscaleSize:f});case 10:e.t0=e.sent;case 11:return g=e.t0,console.log(g),h={name:a,mimeType:c,parents:n},console.log(h),(v=new FormData).append("metadata",new Blob([JSON.stringify(h)],{type:"application/json"})),v.append("file",g),console.log(v),e.next=21,b.uploadFile(v);case 21:m=e.sent,y.driveActiveImageId=m.id;case 23:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(y),e.next=3,b.getFileFields({fileId:y.driveActiveImageId,fields:"parents"});case 3:return t=e.sent,console.log(t),n={name:"anun",mimeType:y.imgOptions.mimeType,parents:t.parents},console.log(n),r=y.imgOptions.src,(i=new FormData).append("metadata",new Blob([JSON.stringify(n)],{type:"application/json"})),i.append("file",r),console.log(i),e.next=14,b.uploadFile(i);case 14:e.sent;case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.authUser();case 2:void 0,e.next=12;break;case 6:r=e.sent,n=r.parents,console.log("parnets",n),D(t,n),e.next=15;break;case 12:console.log(" before  deletion"),j.init(D,t),console.log("parnets",n);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(e){b.getImageById(e)},P=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.authUser();case 2:console.log(x),x.init(C),console.log(x);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){return confirm("Authorization required")},T=function(){console.log("useGDrive");var e=Object(c.g)(),t=Object(c.f)();Object(r.useEffect)((function(){console.log("useGDrive eff");var n=new URLSearchParams(e.search);if(!n.has("state"))return null;var r=JSON.parse(n.get("state")),i=function(e){var t=Object.keys(e),n=t.includes("userId"),r=t.includes("action"),i=t.includes("ids"),a=t.includes("exportIds"),o=t.includes("folderId");return n&&r&&i?v.openWithAppSpecificDocument:n&&r&&a?v.openWithGoogleWorkspaceDocument:n&&r&&o?v.newButton:void 0}(r);if(!i)return t.replace("/chooser"),null;Object(l.a)(u.a.mark((function e(){var n,a,o,c,s,l,d,f,g,h,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.init();case 2:return e.next=4,y.authUser(r.userId);case 4:if(n=e.sent,console.log(n),n){e.next=9;break}return t.replace("/editor?category=photos"),e.abrupt("return");case 9:if(i!==v.openWithAppSpecificDocument){e.next=33;break}return y.openWithState=r,a=Object(p.a)(r.ids,1),o=a[0],e.next=14,b.getFileFields({fileId:o,fields:"permissions"});case 14:return c=e.sent,console.log(c),y.driveActiveImageId=o,e.next=19,b.getFileFields({fileId:o,fields:"*"});case 19:if(s=e.sent){e.next=22;break}return e.abrupt("return");case 22:return console.log(s),window.fields=s,l=s.imageMediaMetadata,d=l.width,f=l.height,e.next=27,b.getImageById(o);case 27:return g=e.sent,h=g.src,m=g.mimeType,y.imgOptions={src:h,mimeType:m,width:d,height:f},S(y.imgOptions),e.abrupt("return");case 33:if(i!==v.newButton){e.next=35;break}return e.abrupt("return");case 35:case"end":return e.stop()}}),e)})))()}))},V=n(2),E=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],i=t[1];console.log(y);var a=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getGrantedScopes();case 2:t=e.sent,i(t.split(" ").filter((function(e){return e.includes("auth")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("div",{children:[Object(V.jsx)("button",{onClick:function(){y.shareDrive()},children:"Share Drive"}),Object(V.jsx)("button",{onClick:function(){y.authUser()},children:"Authorize"}),Object(V.jsx)("button",{onClick:function(){A()},children:"upload"}),Object(V.jsx)("button",{onClick:function(){y.signInWithGoogle()},children:"signIn"}),Object(V.jsx)("button",{onClick:function(){y.signOutGoogle()},children:"signOut"}),Object(V.jsx)("button",{onClick:function(){y.revokeAccess()},children:"revoke access"}),Object(V.jsx)("button",{onClick:function(){P()},children:"pick file"}),Object(V.jsx)("button",{onClick:function(){F({})},children:"pick folder"}),Object(V.jsx)("button",{onClick:a,children:"see granted scopes"})]}),n.map((function(e){return Object(V.jsx)("p",{children:e},e)})),Object(V.jsx)("div",{children:Object(V.jsx)("canvas",{id:"myCanvas"})})]})},U=function(){return Object(V.jsx)("div",{children:"hi"})},W=function(){return Object(V.jsx)("pre",{children:"console.log('aaaaaaaaa')"})},G=function(){return console.log("aa"),T(),Object(V.jsxs)("div",{children:[Object(V.jsx)(E,{}),Object(V.jsx)(W,{}),Object(V.jsxs)(c.c,{children:[Object(V.jsx)(c.a,{exact:!0,path:"/",component:U}),Object(V.jsx)(c.a,{exact:!0,path:"/code",component:W})]})]})};var N=function(){return Object(V.jsx)("div",{className:"App",children:Object(V.jsx)(o.a,{children:Object(V.jsx)(G,{})})})};a.a.render(Object(V.jsx)(N,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.55ff71d3.chunk.js.map