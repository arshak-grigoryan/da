(this.webpackJsonpda=this.webpackJsonpda||[]).push([[0],{24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(17),c=n.n(a),i=(n(24),n(8)),o=n(4),s=n(1),u=n.n(s),l=n(3),p=n(19),d="AIzaSyAuVXgAR4aI47Fxg4ztfBpLpb_IafzKsMY",f=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],g={recommended:{file:"https://www.googleapis.com/auth/drive.file",install:"https://www.googleapis.com/auth/drive.install"}},h=[g.recommended.file,g.recommended.install].join(" "),v="openWithAppSpecificDocument",b="openWithGoogleWorkspaceDocument",m="newButton",k="/chooser",x="/editor?category=photos",w={openWithState:null,newButtonState:null,imgOptions:null,getImageById:function(e){return Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,gapi.client.drive.files.get({fileId:e,alt:"media",fields:"id, name"});case 3:return n=t.sent,t.abrupt("return","data:".concat(n.headers["Content-Type"],";base64, ").concat(btoa(n.body)));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getFileFields:function(e){return Object(l.a)(u.a.mark((function t(){var n,r,a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.fileId,r=e.fields,t.prev=1,t.next=4,gapi.client.drive.files.get({fileId:n,fields:r});case 4:return a=t.sent,t.next=7,JSON.parse(a.body);case 7:return c=t.sent,t.abrupt("return",c);case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},uploadFile:function(e){return Object(l.a)(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",{method:"POST",headers:new Headers({Authorization:"Bearer ".concat(gapi.auth.getToken().access_token)}),body:e});case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},j=n(9),O=n(10),y=new(function(){function e(){Object(j.a)(this,e)}return Object(O.a)(e,[{key:"init",value:function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("init check"),!window.gapi){t.next=3;break}return t.abrupt("return");case 3:return console.log("init"),t.prev=4,t.next=7,S("https://apis.google.com/js/api.js");case 7:return t.next=9,e.loadClient();case 9:return t.next=11,e.initClient();case 11:return t.abrupt("return",gapi);case 14:t.prev=14,t.t0=t.catch(4),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[4,14]])})));return function(){return t.apply(this,arguments)}}()},{key:"signInWithGoogle",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return e.prev=2,e.next=5,gapi.auth2.getAuthInstance().signIn();case 5:return t=e.sent,e.abrupt("return",t);case 9:return e.prev=9,e.t0=e.catch(2),console.log(e.t0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"signOutGoogle",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:gapi.auth2.getAuthInstance().signOut();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"revokeAccess",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:gapi.auth2.getAuthInstance().disconnect();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"shareDrive",value:function(){var t=Object(l.a)(u.a.mark((function t(n){var r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("shareDrive"),t.next=3,this.init();case 3:return t.next=5,e.loadDriveShare();case 5:return r=gapi.auth.getToken().access_token,t.next=8,new gapi.drive.share.ShareClient;case 8:(a=t.sent).setOAuthToken(r),a.setItemIds(this.driveActiveImageId),a.showSettingsDialog(),this.driveActiveImageId=null,n();case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getGrantedScopes",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return e.abrupt("return",gapi.auth2.getAuthInstance().currentUser.get().getGrantedScopes());case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"authUser",value:function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,a,c,i,o,s,l,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:if(console.log("userIdFromDrive",t),n=gapi.auth2.getAuthInstance(),console.log(n),!n){e.next=25;break}if(!n.isSignedIn.get()){e.next=25;break}if(r=n.currentUser.get().getGrantedScopes(),a=g.recommended,c=a.appdata,i=a.file,o=a.install,r.includes(c)&&r.includes(i)&&r.includes(o),console.log(r),!t){e.next=23;break}if(!A(n.currentUser.get().getId(),t)){e.next=16;break}return console.log("already signin from drive and existing are same!!",t),e.abrupt("return",t);case 16:this.openWithState=null,this.driveActiveImageId=null,console.log("isSameUser is false"),console.log("signOut"),n.signOut(),e.next=25;break;case 23:return console.log("userIdFromDrive is undefined"),e.abrupt("return",n.currentUser.get());case 25:if(F()){e.next=28;break}return e.abrupt("return");case 28:return e.next=30,this.signInWithGoogle();case 30:if(!(s=e.sent).error){e.next=36;break}return console.log("currentUser.error"),this.openWithState=null,this.driveActiveImageId=null,e.abrupt("return");case 36:if(!t){e.next=47;break}if(l=A(s.getId(),t),console.log("isSameUser",l),l){e.next=45;break}return n.disconnect(),(p=confirm("Drive account and choosed account doesn't match. Choose account again"))&&console.log("isUserAcceptedNewSigninFlow",p),alert("Your state was lost"),e.abrupt("return");case 45:return console.log("signin from drive first time"),e.abrupt("return",s);case 47:return console.log("signin independent first time"),e.abrupt("return",s);case 49:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}],[{key:"loadClient",value:function(){return new Promise((function(e,t){gapi.load("client:auth2",{callback:e,onerror:t})}))}},{key:"loadDriveShare",value:function(){return new Promise((function(e,t){gapi.load("drive-share",{callback:e,onerror:t})}))}},{key:"initClient",value:function(){return gapi.client.init({apiKey:d,clientId:"58948318321-knaasj1fie9mmvd715621ua0f7drspkd.apps.googleusercontent.com",discoveryDocs:f,scope:h})}}]),e}()),I=new(function(){function e(){Object(j.a)(this,e)}return Object(O.a)(e,[{key:"init",value:function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.authUser();case 2:return console.log("initPicker"),t.next=5,e.loadPicker();case 5:return t.next=7,e.createPicker(n);case 7:console.log("picker created");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}],[{key:"loadPicker",value:function(){return new Promise((function(e,t){gapi.load("picker",{callback:e,onerror:t})}))}},{key:"createPicker",value:function(){var t=Object(l.a)(u.a.mark((function t(n){var r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(n),r=gapi.auth.getToken().access_token,a=new google.picker.DocsView(google.picker.ViewId.FOLDERS).setLabel("My Drive").setOwnedByMe(!0).setIncludeFolders(!0).setSelectFolderEnabled(!0),(new google.picker.PickerBuilder).addView(a).setOAuthToken(r).setDeveloperKey(d).setCallback((function(t){return e.pickerCallback(t,n)})).enableFeature(google.picker.Feature.SUPPORT_DRIVES).setTitle("Pick a folder").build().setVisible(!0);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"pickerCallback",value:function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),t[google.picker.Response.ACTION]===google.picker.Action.PICKED&&(r=t[google.picker.Response.DOCUMENTS][0],console.log(r),n(r.id));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}()),S=function(e){return new Promise((function(t){var n=document.createElement("script");n.src=e,n.onload=function(){t()},document.body.appendChild(n)}))},A=function(e,t){return e===t},C=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,a,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.width,r=t.height,a=t.src,c=document.getElementById("myCanvas"),i=c.getContext("2d"),(o=new Image).src=a,o.onload=function(){c.width=n/7,c.height=r/7,i.drawImage(o,0,0)};case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,a,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:"0000emptyfile",mimeType:w.imgOptions.mimeType,parents:[t]},console.log(n),r=w.imgOptions.src.split(",")[1],a=P(r,w.imgOptions.mimeType),(c=new FormData).append("metadata",new Blob([JSON.stringify(n)],{type:"application/json"})),c.append("file",a),console.log(c),e.next=10,w.uploadFile(c);case 10:i=e.sent,console.log(i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I.init(D);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){return confirm("Authorization required")},P=function(e,t){for(var n=atob(e),r=[],a=new Array(n.length),c=0;c<n.length;c++)a[c]=n.charCodeAt(c);var i=new Uint8Array(a);return r.push(i),new Blob(r,{type:t})},U=function(){console.log("useGDrive");var e=Object(o.g)(),t=Object(o.f)();Object(r.useEffect)((function(){console.log("useGDrive eff");var n=new URLSearchParams(e.search);if(!n.has("state"))return null;var r=JSON.parse(n.get("state"));console.log(r);var a=function(e){console.log(e);var t=Object.keys(e),n=t.includes("userId"),r=t.includes("action"),a=t.includes("ids"),c=t.includes("exportIds"),i=t.includes("folderId");return n&&r&&a&&"open"===e.action?v:n&&r&&c&&"open"===e.action?b:n&&r&&i&&"create"===e.action?m:void 0}(r);console.log(a),a?Object(l.a)(u.a.mark((function e(){var n,c,i,o,s,l,p,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.init();case 2:return e.next=4,y.authUser(r.userId);case 4:if(n=e.sent,console.log(n),n){e.next=9;break}return t.replace(x),e.abrupt("return");case 9:if(a!==v){e.next=23;break}return w.openWithState=r,c=w.openWithState.ids[0],e.next=14,w.getFileFields({fileId:c,fields:"imageMediaMetadata, mimeType"});case 14:return i=e.sent,console.log(i),o=i.imageMediaMetadata,s=o.width,l=o.height,p=i.mimeType,e.next=19,w.getImageById(c);case 19:return d=e.sent,w.imgOptions={src:d,mimeType:p,width:s,height:l},C(w.imgOptions),e.abrupt("return");case 23:if(a!==m){e.next=27;break}return w.newButtonState=r,D(r.folderId),e.abrupt("return");case 27:case"end":return e.stop()}}),e)})))():t.replace(k)}))},B=n(2),G=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];console.log(y);var c=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getGrantedScopes();case 2:t=e.sent,a(t.split(" ").filter((function(e){return e.includes("auth")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{children:[Object(B.jsx)("button",{onClick:function(){y.shareDrive()},children:"Share Drive"}),Object(B.jsx)("button",{onClick:function(){y.authUser()},children:"Authorize"}),Object(B.jsx)("button",{onClick:function(){T()},children:"upload"}),Object(B.jsx)("button",{onClick:function(){y.signInWithGoogle()},children:"signIn"}),Object(B.jsx)("button",{onClick:function(){y.signOutGoogle()},children:"signOut"}),Object(B.jsx)("button",{onClick:function(){y.revokeAccess()},children:"revoke access"}),Object(B.jsx)("button",{onClick:c,children:"see granted scopes"})]}),n.map((function(e){return Object(B.jsx)("p",{children:e},e)})),Object(B.jsx)("div",{children:Object(B.jsx)("canvas",{id:"myCanvas"})})]})},W=function(){return Object(B.jsx)("div",{children:"hi"})},E=function(){return Object(B.jsx)("pre",{children:"console.log('aaaaaaaaa')"})},M=function(){return console.log("aa"),U(),Object(B.jsxs)("div",{children:[Object(B.jsx)(G,{}),Object(B.jsx)(E,{}),Object(B.jsxs)(o.c,{children:[Object(B.jsx)(o.a,{exact:!0,path:"/",component:W}),Object(B.jsx)(o.a,{exact:!0,path:"/code",component:E})]})]})};var N=function(){return Object(B.jsx)("div",{className:"App",children:Object(B.jsx)(i.a,{children:Object(B.jsx)(M,{})})})};c.a.render(Object(B.jsx)(N,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.1e0a1488.chunk.js.map