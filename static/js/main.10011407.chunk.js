(this.webpackJsonpda=this.webpackJsonpda||[]).push([[0],{24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(17),c=n.n(a),i=(n(24),n(8)),o=n(4),u=n(0),l=n.n(u),p=n(3),d=n(19),h="AIzaSyDy6SRTXKsQx4TlXzxWw1LcN7OwiwwgtQM",f=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],g={recommended:{file:"https://www.googleapis.com/auth/drive.file",install:"https://www.googleapis.com/auth/drive.install"}},v=[g.recommended.file,g.recommended.install].join(" "),b="openWithAppSpecificDocument",k="openWithGoogleWorkspaceDocument",m="newButton",w={userIdFromDrive:null,uploadedImageId:null,openWithState:null,newButtonState:null,imgOptions:null,getImageById:function(e){return Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,gapi.client.drive.files.get({fileId:e,alt:"media",fields:"id, name"});case 3:return n=t.sent,t.abrupt("return","data:".concat(n.headers["Content-Type"],";base64, ").concat(btoa(n.body)));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getFileFields:function(e){return Object(p.a)(l.a.mark((function t(){var n,r,a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.fileId,r=e.fields,t.prev=1,t.next=4,gapi.client.drive.files.get({fileId:n,fields:r});case 4:return a=t.sent,t.next=7,JSON.parse(a.body);case 7:return c=t.sent,t.abrupt("return",c);case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},uploadFile:function(e){return Object(p.a)(l.a.mark((function t(){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id",{method:"POST",headers:new Headers({Authorization:"Bearer ".concat(gapi.auth.getToken().access_token)}),body:e});case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,console.log(r),w.uploadedImageId=r.id,t.abrupt("return",r);case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()}},x=w,j=n(9),O=n(10),y=new(function(){function e(t){Object(j.a)(this,e),e.apiKey=h,e.clientId="797908848155-g3s0vkl72b2hflvrq6mcq3et891evoim.apps.googleusercontent.com",e.discoverUrls=f,e.scopes=t}return Object(O.a)(e,[{key:"init",value:function(){var t=Object(p.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("gapi check"),!window.gapi){t.next=3;break}return t.abrupt("return");case 3:return console.log("gapi init"),t.prev=4,t.next=7,S("https://apis.google.com/js/api.js");case 7:return t.next=9,e.loadClient();case 9:return console.log("after load clint"),t.next=12,e.initClient();case 12:return console.log("after init client"),t.abrupt("return",gapi);case 16:t.prev=16,t.t0=t.catch(4),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(){return t.apply(this,arguments)}}()},{key:"signInWithGoogle",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:return e.prev=2,e.next=5,gapi.auth2.getAuthInstance().signIn();case 5:return t=e.sent,e.abrupt("return",t);case 9:return e.prev=9,e.t0=e.catch(2),console.log(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"signOutGoogle",value:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:gapi.auth2.getAuthInstance().signOut();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"revokeAccess",value:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("revokeAccess"),e.next=3,this.init();case 3:gapi.auth2.getAuthInstance().disconnect();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"shareDrive",value:function(){var t=Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.init();case 2:return t.next=4,e.loadDriveShare();case 4:return n=gapi.auth.getToken().access_token,t.next=7,new gapi.drive.share.ShareClient;case 7:window.s=t.sent,s.setOAuthToken(n),s.setItemIds(x.uploadedImageId);case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleCheckForDifferentUsers",value:function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.getId()!==x.userIdFromDrive){e.next=2;break}return e.abrupt("return",this.handleCheckGorGrantedScopes(t));case 2:return e.next=4,this.revokeAccess();case 4:if(!confirm("Your signed account ".concat(t.getBasicProfile().getEmail()," is not match with drive account, choose oter account"))){e.next=7;break}return e.abrupt("return",this.handleSignInPrompt());case 7:return e.abrupt("return",this.handleAuthorizeDriveModal());case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGrantedScopes",value:function(){var t=Object(p.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.init();case 2:return t.abrupt("return",gapi.auth2.getAuthInstance().currentUser.get().getGrantedScopes());case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"handleCheckGorGrantedScopes",value:function(t){for(var n=t.getGrantedScopes(),r=e.scopes.split(" "),a=0;a<r.length;a++)if(!n.includes(r[a]))return this.handleAuthorizeDriveModal();return t}},{key:"handleSignInPrompt",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.revokeAccess();case 2:return e.next=4,this.signInWithGoogle();case 4:if(!(t=e.sent)){e.next=7;break}return e.abrupt("return",this.handleCheckForDifferentUsers(t));case 7:return e.abrupt("return",this.handleAuthorizeDriveModal());case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleAuthorizeDriveModal",value:function(){return confirm("Authorize Drive")?this.handleSignInPrompt():null}},{key:"authUser",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.init();case 2:if(t=gapi.auth2.getAuthInstance(),n=gapi.auth2.getAuthInstance().currentUser.get().getId(),console.log(n),!t.isSignedIn.get()){e.next=7;break}return e.abrupt("return",this.handleCheckForDifferentUsers(t.currentUser.get()));case 7:return e.abrupt("return",this.handleAuthorizeDriveModal());case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"loadClient",value:function(){return new Promise((function(e,t){gapi.load("client:auth2",{callback:e,onerror:t})}))}},{key:"loadDriveShare",value:function(){return new Promise((function(e,t){gapi.load("drive-share",{callback:e,onerror:t})}))}},{key:"initClient",value:function(){return gapi.client.init({apiKey:e.apiKey,clientId:e.clientId,discoveryDocs:e.discoverUrls,scope:e.scopes})}}]),e}())(v),I=new(function(){function e(){Object(j.a)(this,e)}return Object(O.a)(e,[{key:"init",value:function(){var t=Object(p.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.authUser();case 2:if(t.sent){t.next=5;break}return t.abrupt("return");case 5:return console.log("initPicker"),t.next=8,e.loadPicker();case 8:return t.next=10,e.createPicker(n);case 10:console.log("picker created");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}],[{key:"loadPicker",value:function(){return new Promise((function(e,t){gapi.load("picker",{callback:e,onerror:t})}))}},{key:"createPicker",value:function(){var t=Object(p.a)(l.a.mark((function t(n){var r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(n),r=gapi.auth.getToken().access_token,a=new google.picker.DocsView(google.picker.ViewId.FOLDERS).setLabel("My Drive").setOwnedByMe(!0).setIncludeFolders(!0).setSelectFolderEnabled(!0),(new google.picker.PickerBuilder).addView(a).setOAuthToken(r).setDeveloperKey(h).setCallback((function(t){return e.pickerCallback(t,n)})).enableFeature(google.picker.Feature.SUPPORT_DRIVES).setTitle("Pick a folder").build().setVisible(!0);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"pickerCallback",value:function(){var e=Object(p.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),t[google.picker.Response.ACTION]===google.picker.Action.PICKED&&(r=t[google.picker.Response.DOCUMENTS][0],console.log(r),n(r.id));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}()),S=function(e){return new Promise((function(t){var n=document.createElement("script");n.src=e,n.onload=function(){t()},document.body.appendChild(n)}))},D=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a,c,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.width,r=t.height,a=t.src,c=document.getElementById("myCanvas"),i=c.getContext("2d"),(o=new Image).src=a,o.onload=function(){c.width=n,c.height=r,i.drawImage(o,0,0)};case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,r,a,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={name:"0000hardCodeName",mimeType:x.imgOptions.mimeType,parents:[t]},console.log(n),r=x.imgOptions.src.split(",")[1],a=P(r,x.imgOptions.mimeType),(c=new FormData).append("metadata",new Blob([JSON.stringify(n)],{type:"application/json"})),c.append("file",a),console.log(c),e.next=10,x.uploadFile(c);case 10:i=e.sent,console.log(i),alert("Image Saved");case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I.init(C);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e,t){for(var n=atob(e),r=[],a=new Array(n.length),c=0;c<n.length;c++)a[c]=n.charCodeAt(c);var i=new Uint8Array(a);return r.push(i),new Blob(r,{type:t})},T=function(){console.log("useGDrive");var e=Object(o.g)();Object(o.f)();Object(r.useEffect)((function(){console.log("useGDrive eff");var t=new URLSearchParams(e.search);if(!t.has("state"))return null;var n=JSON.parse(t.get("state"));console.log(n);var r=function(e){var t=Object.keys(e),n=t.includes("userId"),r=t.includes("action"),a=t.includes("ids"),c=t.includes("exportIds"),i=t.includes("folderId");return n&&r&&a&&"open"===e.action?b:n&&r&&c&&"open"===e.action?k:n&&r&&i&&"create"===e.action?m:void 0}(n);console.log(r),r&&Object(p.a)(l.a.mark((function e(){var t,a,c,i,o,s,u,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.init();case 2:return x.userIdFromDrive=n.userId,e.next=5,y.authUser();case 5:if(t=e.sent,console.log(t),t){e.next=9;break}return e.abrupt("return");case 9:if(r!==b){e.next=25;break}return x.openWithState=n,a=x.openWithState.ids[0],e.next=14,x.getFileFields({fileId:a,fields:"imageMediaMetadata, mimeType"});case 14:if(c=e.sent){e.next=17;break}return e.abrupt("return");case 17:return console.log(c),i=c.imageMediaMetadata,o=i.width,s=i.height,u=c.mimeType,e.next=21,x.getImageById(a);case 21:return p=e.sent,x.imgOptions={src:p,mimeType:u,width:o,height:s},D(x.imgOptions),e.abrupt("return");case 25:if(r!==k){e.next=27;break}return e.abrupt("return");case 27:if(r!==m){e.next=31;break}return x.newButtonState=n,C(n.folderId),e.abrupt("return");case 31:case"end":return e.stop()}}),e)})))()}))},F=n(2),G=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1];console.log(y);var c=function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.shareDrive();case 2:s.showSettingsDialog(),x.uploadedImageId=null;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getGrantedScopes();case 2:t=e.sent,a(t.split(" ").filter((function(e){return e.includes("auth")})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("button",{onClick:c,children:"Share Drive"}),Object(F.jsx)("button",{onClick:function(){y.authUser()},children:"Authorize"}),Object(F.jsx)("button",{onClick:function(){A()},children:"upload"}),Object(F.jsx)("button",{onClick:function(){y.signInWithGoogle()},children:"signIn"}),Object(F.jsx)("button",{onClick:function(){y.signOutGoogle()},children:"signOut"}),Object(F.jsx)("button",{onClick:function(){y.revokeAccess()},children:"revoke access"}),Object(F.jsx)("button",{onClick:i,children:"see granted scopes"})]}),n.map((function(e){return Object(F.jsx)("p",{children:e},e)})),Object(F.jsx)("div",{children:Object(F.jsx)("canvas",{id:"myCanvas"})})]})},U=function(){return Object(F.jsx)("div",{children:"hi"})},B=function(){return console.log("a"),T(),Object(F.jsxs)("div",{children:[Object(F.jsx)(G,{}),Object(F.jsx)(o.c,{children:Object(F.jsx)(o.a,{exact:!0,path:"/",component:U})})]})};var M=function(){return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(i.a,{children:Object(F.jsx)(B,{})})})};c.a.render(Object(F.jsx)(M,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.10011407.chunk.js.map