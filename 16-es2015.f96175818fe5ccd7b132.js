(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"ct+p":function(t,e,r){"use strict";r.r(e),r.d(e,"HomePageModule",(function(){return m}));var n=r("ofXK"),i=r("TEn/"),o=r("3Pt+"),s=r("tyNb"),a=r("mrSG"),c=r("fXoL"),d=r("WOgW");const l=["video"],h=["canvas"];function b(t,e){if(1&t&&(c.Mb(0,"li"),c.Kb(1,"img",13),c.Lb()),2&t){const t=e.$implicit;c.zb(1),c.Yb("src",t,c.ac)}}const p=[{path:"",component:(()=>{class t{constructor(t,e){this.androidPermissions=t,this.platform=e,this.shouldFaceUser=!0,this.stream=null,this.track=null,this.captures=[]}ngOnInit(){}ngAfterViewInit(){return Object(a.a)(this,void 0,void 0,(function*(){this.platform.ready().then(()=>{this.platform.is("cordova")&&this.platform.is("android")?this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA,this.androidPermissions.PERMISSION.MODIFY_AUDIO_SETTINGS,this.androidPermissions.PERMISSION.RECORD_AUDIO]).then(()=>{console.log("permissions asked"),this.initCamera()}):this.initCamera()})}))}initCamera(){return Object(a.a)(this,void 0,void 0,(function*(){try{this.stream=yield navigator.mediaDevices.getUserMedia({video:{facingMode:this.shouldFaceUser?"user":"environment"}}),this.track=this.stream.getVideoTracks()[0],this.video.nativeElement.srcObject=this.stream,this.video.nativeElement.play()}catch(t){console.error("******"),console.error(t),console.error("******"),this.error=t,"NotFoundError"===t.name||"DevicesNotFoundError"===t.name?this.error="Devices not found":"NotReadableError"===t.name||"TrackStartError"===t.name?this.error="Devices not readable or already in use":"OverconstrainedError"===t.name||"ConstraintNotSatisfiedError"===t.name?this.error="Constraints not accepted":"NotAllowedError"===t.name||"PermissionDeniedError"===t.name?this.error="Permission denied":"TypeError"!==t.name&&"TypeError"!==t.name||(this.error="Constraints error")}}))}capture(){this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement,0,0,640,480),this.captures.push(this.canvas.nativeElement.toDataURL("image/png"))}flip(){null!=this.stream&&(this.stream.getTracks().forEach(t=>{t.stop()}),this.shouldFaceUser=!this.shouldFaceUser,this.initCamera())}toggleFlash(){this.track.applyConstraints({advanced:[{torch:!0}]}).catch(t=>console.log(t))}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(d.a),c.Jb(i.j))},t.\u0275cmp=c.Db({type:t,selectors:[["app-home"]],viewQuery:function(t,e){var r;1&t&&(c.fc(l,!0),c.fc(h,!0)),2&t&&(c.Zb(r=c.Ub())&&(e.video=r.first),c.Zb(r=c.Ub())&&(e.canvas=r.first))},decls:23,vars:4,consts:[[3,"translucent"],[3,"fullscreen"],["id","app"],[1,"video-wrapper"],[1,"square-wrapper"],[1,"square"],["id","video","width","320","height","240","autoplay",""],["video",""],["id","snap",3,"click"],["id","canvas","width","640","height","480"],["canvas",""],[3,"click"],[4,"ngFor","ngForOf"],["height","50",3,"src"]],template:function(t,e){1&t&&(c.Mb(0,"ion-header",0),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-title"),c.dc(3," Blank "),c.Lb(),c.Lb(),c.Lb(),c.Mb(4,"ion-content",1),c.Mb(5,"div",2),c.Mb(6,"div",3),c.Mb(7,"div",4),c.Kb(8,"div",5),c.Lb(),c.Kb(9,"video",6,7),c.Lb(),c.Mb(11,"div"),c.Mb(12,"button",8),c.Tb("click",(function(){return e.capture()})),c.dc(13,"Snap Photo"),c.Lb(),c.Lb(),c.Kb(14,"canvas",9,10),c.Mb(16,"ion-button",11),c.Tb("click",(function(){return e.flip()})),c.dc(17,"Flip"),c.Lb(),c.Mb(18,"ion-button",11),c.Tb("click",(function(){return e.toggleFlash()})),c.dc(19,"Flash"),c.Lb(),c.Mb(20,"ul"),c.cc(21,b,2,1,"li",12),c.Lb(),c.dc(22),c.Lb(),c.Lb()),2&t&&(c.Xb("translucent",!0),c.zb(4),c.Xb("fullscreen",!0),c.zb(17),c.Xb("ngForOf",e.captures),c.zb(1),c.ec(" ",e.error," "))},directives:[i.d,i.g,i.f,i.c,i.b,n.h],styles:["body[_ngcontent-%COMP%]{background-color:#f0f0f0}#app[_ngcontent-%COMP%]{text-align:center;color:#2c3e50;margin-top:60px}#video[_ngcontent-%COMP%]{background-color:#000}#canvas[_ngcontent-%COMP%]{display:none}li[_ngcontent-%COMP%]{display:inline;padding:5px}.video-wrapper[_ngcontent-%COMP%]{position:relative}.square[_ngcontent-%COMP%]{width:140px;height:180px;border:2px solid #f7ff00}.square-wrapper[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}"]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(p)],s.i]}),t})(),m=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[n.b,o.a,i.h,u]]}),t})()}}]);