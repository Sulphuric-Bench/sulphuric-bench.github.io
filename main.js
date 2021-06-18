(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Abir\Desktop\Projects\Angular\SB-Website\src\main.ts */"zUnb");


/***/ }),

/***/ "2ZvQ":
/*!********************************************!*\
  !*** ./src/app/videos/videos.component.ts ***!
  \********************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function VideosComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Coming Soon.... Stay Tuned! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideosComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.sanitizer.bypassSecurityTrustResourceUrl(ctx_r1.embed + video_r2.payload.doc.data().code), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"])("title", video_r2.payload.doc.data().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r2.payload.doc.data().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.youtube + video_r2.payload.doc.data().code + ctx_r1.sparse, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class VideosComponent {
    constructor(db, sanitizer) {
        this.db = db;
        this.sanitizer = sanitizer;
        this.youtube = 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyoutu.be%2F';
        this.sparse = '&amp;src=sdkpreparse';
        this.embed = 'https://www.youtube.com/embed/';
        db.collection('videos', (res) => res.orderBy('date', 'desc'))
            .snapshotChanges()
            .subscribe((res) => (this.videos = res));
    }
    ngOnInit() { }
}
VideosComponent.ɵfac = function VideosComponent_Factory(t) { return new (t || VideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
VideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosComponent, selectors: [["app-videos"]], decls: 3, vars: 2, consts: [[1, "videos"], ["class", "not-found", 4, "ngIf"], ["class", "video-card", 4, "ngFor", "ngForOf"], [1, "not-found"], [1, "video-card"], ["frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", "title"], [1, "caption"], ["target", "blank", 3, "href"], [1, "fas", "fa-share-alt"]], template: function VideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VideosComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VideosComponent_div_2_Template, 9, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.videos.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["section.videos[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\nsection.videos[_ngcontent-%COMP%]   p.not-found[_ngcontent-%COMP%] {\n  z-index: -123123;\n  display: flex;\n  justify-content: flex-start;\n  font-family: \"PT Sans\", sans-serif;\n  font-weight: lighter;\n  opacity: 0.8;\n  height: 100vh;\n}\nsection.videos[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%] {\n  flex-basis: 80%;\n  margin-bottom: 45px;\n}\nsection.videos[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 390px;\n  margin-bottom: 15px;\n  border-radius: 16px;\n}\nsection.videos[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nsection.videos[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #182a30;\n  font-family: \"PT Sans\";\n  font-size: 21px;\n}\nsection.videos[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n}\nsection.videos[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #182a30;\n  font-weight: bold;\n}\nsection.videos[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  color: #182a30;\n  font-weight: bold;\n  font-size: 16px;\n}\n@media (max-width: 300px) {\n  section.videos[_ngcontent-%COMP%]   .video-card[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZpZGVvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFERjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFOO0FBRUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFBTjtBQUNNO0VBQ0UsV0FBQTtFQUNBLGNBaENBO0VBa0NFLHNCQUFBO0VBQ0EsZUFBQTtBQUFWO0FBR007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFEUjtBQUVRO0VBQ0UsY0E3Q0Y7RUE4Q0UsaUJBQUE7QUFBVjtBQUVRO0VBQ0Usa0NBQUE7RUFDQSxjQWxERjtFQW1ERSxpQkFBQTtFQUNBLGVBQUE7QUFBVjtBQU1BO0VBR007SUFDRSxhQUFBO0VBTE47QUFDRiIsImZpbGUiOiJ2aWRlb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdGhlbWU6ICMxODJhMzA7XHJcbiRjb2xvcjogIzU0ZGVmZTtcclxuc2VjdGlvbi52aWRlb3Mge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcC5ub3QtZm91bmQge1xyXG4gICAgei1pbmRleDogLTEyMzEyMztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC52aWRlby1jYXJkIHtcclxuICAgIGZsZXgtYmFzaXM6IDgwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcblxyXG4gICAgaWZyYW1lIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzkwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuY2FwdGlvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgaDIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiAkdGhlbWU7XHJcbiAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgZmFtaWx5OiBcIlBUIFNhbnNcIjtcclxuICAgICAgICAgIHNpemU6IDIxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiAkdGhlbWU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBjb2xvcjogJHRoZW1lO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIHNlY3Rpb24udmlkZW9zIHtcclxuICAgIC52aWRlby1jYXJkIHtcclxuICAgICAgaWZyYW1lIHtcclxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "3+vs":
/*!**************************************************!*\
  !*** ./src/app/blog-post/blog-post.component.ts ***!
  \**************************************************/
/*! exports provided: BlogPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostComponent", function() { return BlogPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function BlogPostComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Thanks for Your Comment. Reply will be sent to your email(if available). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogPostComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogPostComponent_div_22_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalidinput", _r6.invalid && _r6.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.name);
} }
function BlogPostComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "E-mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogPostComponent_div_23_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalidinput", _r9.invalid && _r9.touched || ctx_r3.invalidEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.email);
} }
function BlogPostComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Comment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogPostComponent_div_24_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.fullComment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalidinput", _r12.invalid && _r12.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.fullComment);
} }
function BlogPostComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Comment! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.commented || _r0.invalid);
} }
class BlogPostComponent {
    constructor(route2, db) {
        this.route2 = route2;
        this.db = db;
        this.commented = false;
        this.invalidEmail = false;
        this.validEmail = false;
        db.collection('comments', (res) => res.orderBy('date', 'desc'))
            .snapshotChanges()
            .subscribe((res) => (this.allcomment = res));
    }
    commentIT() {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.email)) {
            this.validEmail = false;
        }
        else {
            this.validEmail = true;
        }
        if (this.validEmail) {
            this.comment = {
                n: this.name,
                e: this.email,
                c: this.fullComment,
                t: this.title,
                a: this.author,
                date: new Date().getTime(),
            };
            this.db.collection('comments').add(this.comment);
            this.commented = true;
        }
        else {
            this.invalidEmail = true;
        }
    }
    ngOnInit() {
        let xoxo = this.route2.snapshot.paramMap.get('data');
        let x = xoxo === null || xoxo === void 0 ? void 0 : xoxo.split('--:--');
        this.title = x === null || x === void 0 ? void 0 : x[0];
        this.img = x === null || x === void 0 ? void 0 : x[1];
        this.author = x === null || x === void 0 ? void 0 : x[2];
        this.authorFB = x === null || x === void 0 ? void 0 : x[3];
        this.exactDate = x === null || x === void 0 ? void 0 : x[4];
        this.exactTime = x === null || x === void 0 ? void 0 : x[5];
        this.body = x === null || x === void 0 ? void 0 : x[6];
    }
}
BlogPostComponent.ɵfac = function BlogPostComponent_Factory(t) { return new (t || BlogPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
BlogPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogPostComponent, selectors: [["app-blog-post"]], decls: 26, vars: 14, consts: [[1, "post"], [1, "wrap"], [1, "titles"], [3, "href"], ["srcset", "", 3, "src", "alt"], [1, "body"], [1, "comment"], ["method", "post", "autocomplete", "off", "novalidate", "", 3, "ngSubmit"], ["blogData", "ngForm"], [4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["class", "buttons", 4, "ngIf"], [1, "form-group"], ["name", "titleBlog", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["titleBlog", "ngModel"], ["name", "blogAuthor", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["blogAuthor", "ngModel"], ["name", "blogBody", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["blogBody", "ngModel"], [1, "buttons"], ["type", "submit", 3, "disabled"]], template: function BlogPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BlogPostComponent_Template_form_ngSubmit_19_listener() { return ctx.commentIT(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BlogPostComponent_p_21_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BlogPostComponent_div_22_Template, 5, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BlogPostComponent_div_23_Template, 5, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, BlogPostComponent_div_24_Template, 6, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BlogPostComponent_div_25_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.authorFB, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" | ", ctx.exactDate, " at ", ctx.exactTime, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Comments (", ctx.allcomment.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.commented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.commented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.commented);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.commented);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["section.post[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nsection.post[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 90%;\n}\nsection.post[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%] {\n  width: 90%;\n}\nsection.post[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #182a30;\n  margin-bottom: 10px;\n  text-transform: capitalize;\n  font-family: \"PT Sans\";\n}\nsection.post[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #182a30;\n  margin-bottom: 10px;\n  font-family: \"PT Sans\";\n}\nsection.post[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #182a30;\n  text-transform: none;\n  font-family: \"PT Sans\";\n}\nsection.post[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  text-decoration: none;\n  color: #182a30;\n  font-family: \"PT Sans\";\n}\nsection.post[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #01b9e2;\n}\nsection.post[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #182a30;\n  margin-bottom: 10px;\n  font-family: \"PT Sans\";\n}\nsection.post[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 90%;\n  background: #182a30;\n  color: #182a30;\n  margin-top: 25px;\n  margin-bottom: 25px;\n  height: 1px;\n}\nsection.post[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-bottom: 25px;\n}\nsection.post[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #182a30;\n  margin-bottom: 25px;\n  font-family: \"Hind Siliguri\", sans-serif;\n}\nsection.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\n  width: 90%;\n}\nsection.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #182a30;\n  margin-bottom: 10px;\n  text-transform: capitalize;\n  font-family: \"PT Sans\";\n}\nsection.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #182a30;\n  padding: 50px 20px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n  width: 90%;\n}\nsection.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\";\n  padding: 50px;\n  color: #01b9e2;\n}\nsection.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nsection.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\";\n  line-height: 34px;\n  color: #01b9e2;\n  margin-right: 10px;\n}\nsection.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  padding: 7px 10px 7px 10px;\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}\nsection.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  padding: 10px 10px 10px 10px;\n  height: 187px;\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  resize: none;\n}\nsection.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.invalidinput[_ngcontent-%COMP%], section.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   textarea.invalidinput[_ngcontent-%COMP%] {\n  border: 1px solid #db3131;\n  box-shadow: 0px 0px 17px #db3131;\n}\nsection.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #182a30;\n  border-radius: 5px;\n  background: #01b9e2;\n  padding: 10px 5px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"PT Sans\", sans-serif;\n  margin-top: 25px;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  width: 100px;\n  cursor: pointer;\n  transition: 0.2s;\n}\nsection.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 10px #01b9e2, 0 0 13px #01b9e2, 0 0 26px #01b9e2;\n}\nsection.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\nsection.post[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJsb2ctcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREY7QUFFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBQUo7QUFDSTtFQUNFLFVBQUE7QUFDTjtBQUFNO0VBQ0UsY0FmQTtFQWdCQSxtQkFBQTtFQUVFLDBCQUFBO0VBR0Esc0JBQUE7QUFEVjtBQUlNO0VBQ0UsY0F6QkE7RUEwQkEsbUJBQUE7RUFFRSxzQkFBQTtBQUhWO0FBS1E7RUFDRSxjQS9CRjtFQWlDSSxvQkFBQTtFQUdBLHNCQUFBO0FBTlo7QUFRVTtFQUVJLDBCQUFBO0VBRUYscUJBQUE7RUFDQSxjQTNDSjtFQTZDTSxzQkFBQTtBQVRkO0FBV1k7RUFDRSxjQS9DTjtBQXNDUjtBQWNNO0VBQ0UsY0F0REE7RUF1REEsbUJBQUE7RUFFRSxzQkFBQTtBQWJWO0FBaUJJO0VBQ0UsVUFBQTtFQUNBLG1CQS9ERTtFQWdFRixjQWhFRTtFQWlFRixnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWZOO0FBaUJJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBZk47QUFrQk07RUFDRSxjQTNFQTtFQTRFQSxtQkFBQTtFQUVFLHdDQUFBO0FBakJWO0FBc0JFO0VBQ0UsVUFBQTtBQXBCSjtBQXFCSTtFQUNFLGNBdEZFO0VBdUZGLG1CQUFBO0VBRUUsMEJBQUE7RUFHQSxzQkFBQTtBQXRCUjtBQXlCSTtFQVFFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkEzR0U7RUE0R0Ysa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQTlCTjtBQWVNO0VBRUksc0JBQUE7RUFFRixhQUFBO0VBQ0EsY0FwR0E7QUFxRlI7QUEwQk07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXhCUjtBQXlCUTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQXRIRjtFQXVIRSxrQkFBQTtBQXZCVjtBQXlCUTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FoSUY7RUFpSUUsa0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF2QlY7QUF5QlE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxjQTVJRjtFQTZJRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBdkJWO0FBeUJROztFQUVFLHlCQUFBO0VBQ0EsZ0NBQUE7QUF2QlY7QUE0QlE7RUFDRSxjQTFKRjtFQTJKRSxrQkFBQTtFQUNBLG1CQTNKRjtFQTRKRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTFCVjtBQTJCVTtFQUNFLGdFQUFBO0FBekJaO0FBMkJVO0VBSUUsWUFBQTtFQUNBLGVBQUE7QUE1Qlo7QUF3Qlk7RUFDRSxnQkFBQTtBQXRCZCIsImZpbGUiOiJibG9nLXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdGhlbWU6ICMxODJhMzA7XHJcbiRjb2xvcjogIzAxYjllMjtcclxuc2VjdGlvbi5wb3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLndyYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgLnRpdGxlcyB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBjb2xvcjogJHRoZW1lO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICBmYW1pbHk6IFwiUFQgU2Fuc1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgY29sb3I6ICR0aGVtZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgIGZhbWlseTogXCJQVCBTYW5zXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgY29sb3I6ICR0aGVtZTtcclxuICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgICBmYW1pbHk6IFwiUFQgU2Fuc1wiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lO1xyXG4gICAgICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICAgICAgZmFtaWx5OiBcIlBUIFNhbnNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNtYWxsIHtcclxuICAgICAgICBjb2xvcjogJHRoZW1lO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgZmFtaWx5OiBcIlBUIFNhbnNcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhyIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgYmFja2dyb3VuZDogJHRoZW1lO1xyXG4gICAgICBjb2xvcjogJHRoZW1lO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuYm9keSB7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAkdGhlbWU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICBmb250OiB7XHJcbiAgICAgICAgICBmYW1pbHk6IFwiSGluZCBTaWxpZ3VyaVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY29tbWVudCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaDIge1xyXG4gICAgICBjb2xvcjogJHRoZW1lO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB0ZXh0OiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICB9XHJcbiAgICAgIGZvbnQ6IHtcclxuICAgICAgICBmYW1pbHk6IFwiUFQgU2Fuc1wiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udDoge1xyXG4gICAgICAgICAgZmFtaWx5OiBcIlBUIFNhbnNcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkdGhlbWU7XHJcbiAgICAgIHBhZGRpbmc6IDUwcHggMjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIjtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvcjtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogN3B4IDEwcHggN3B4IDEwcHg7XHJcbiAgICAgICAgICBjb2xvcjogJHRoZW1lO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4N3B4O1xyXG4gICAgICAgICAgY29sb3I6ICR0aGVtZTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQuaW52YWxpZGlucHV0LFxyXG4gICAgICAgIHRleHRhcmVhLmludmFsaWRpbnB1dCB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGIzMTMxO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxN3B4ICNkYjMxMzE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGNvbG9yOiAkdGhlbWU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJGNvbG9yLCAwIDAgMTNweCAkY29sb3IsIDAgMCAyNnB4ICRjb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "HhcG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
// import Swiper core and required modules









function HomeComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Coming Soon.... Stay Tuned!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1.blogs[0].payload.doc.data().img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx_r1.blogs[0].payload.doc.data().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1.blogs[1].payload.doc.data().img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx_r1.blogs[1].payload.doc.data().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1.blogs[2].payload.doc.data().img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx_r1.blogs[2].payload.doc.data().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1.blogs[3].payload.doc.data().img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx_r1.blogs[3].payload.doc.data().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r1.blogs[4].payload.doc.data().img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx_r1.blogs[4].payload.doc.data().title);
} }
function HomeComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " See More Posts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_p_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Coming Soon.... Stay Tuned! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_45_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", p_r11.payload.doc.data().img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomeComponent_45_ng_template_0_Template, 2, 1, "ng-template", 70);
} }
function HomeComponent_p_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Coming Soon.... Stay Tuned! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_iframe_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "iframe", 73);
} if (rf & 2) {
    const video_r14 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r6.sanitizer.bypassSecurityTrustResourceUrl(ctx_r6.embed + video_r14.payload.doc.data().code), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"])("title", video_r14.payload.doc.data().title);
} }
// install Swiper modules
swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Scrollbar"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["A11y"]]);
class HomeComponent {
    constructor(db, sanitizer) {
        this.db = db;
        this.sanitizer = sanitizer;
        this.introEng = 'Welcome to the learners world of Sulphuric Bench! We are basically an online Platform which is working for the betterment of education by making it More and more enjoyable and we try to spread all kinds of Knowledge among the curious people and students. We believe the valueless world of knowledge should be free for each and everyone. Through the magical power of the Internet,everyone can be self-educated and can gain knowledge coatlessly! That\'s why we strongly believe in our motto"I will see the world on the palm of my hand"';
        this.introBangla = 'সালফিউরিক বেঞ্চ এর শেখার জগৎ এ সকলকে স্বাগতম! আমরা মূলত একটি অনলাইন প্ল্যাটফর্ম,পড়ালেখাকে মজার মধ্য দিয়ে উপস্থাপন করে যেটি কাজ করে যাচ্ছে শিক্ষার মানোন্নয়নে তার পাশাপাশি আমরা চেষ্টা করি জ্ঞানপিপাসু মানুষ এবং কৌতুহলী শিক্ষার্থীদের মধ্যে সব ধরনের জ্ঞানকে ছড়িয়ে দেওয়ার। আমরা বিশ্বাস করি জ্ঞাণের অমূল্য জগৎ হবে সকলের জন্য উন্মুক্ত। ইন্টারনেট এর যাদুকরী শক্তিতে প্রতিটি মানুষের স্বশিক্ষিত হয়ে উঠা এবং শিক্ষাকে সবার কাছে পৌঁছে দেওয়া চাইলেই সম্ভব। "বিশ্বটাকে দেখব আমি আপন হাতের মুঠোয় পুরে"! নিজেদের এই নীতিতে দৃঢ়ভাবে বিশ্বাসী ।';
        this.admins = [
            {
                img: '../../assets/miraz.png',
                name: 'Mirazul Islam',
                inst: 'Dhaka College, Dhaka',
            },
            {
                img: '../../assets/abru.jpg',
                name: 'Abrar Mahmud Abru',
                inst: 'Notre Dame College, Dhaka',
            },
            {
                img: '../../assets/misbah.jpg',
                name: 'Misbah Uz Zamal',
                inst: 'Government City College, Chattogram',
            },
            {
                img: '../../assets/sheehan.jpg',
                name: 'Abdullah Ibne Nasiruddin Sheehan',
                inst: 'Government City College, Chattogram',
            },
            {
                img: '../../assets/aiman.jpg',
                name: 'MD Aiman Aousaf',
                inst: 'Government Hazi Muhammad Mohsin College, Chattogram',
            },
            {
                img: '../../assets/labonno.jpg',
                name: 'Mubarrat E Ishmum',
                inst: 'Hazera-Taju University College, Chattogram',
            },
            {
                img: '../../assets/jami.jpg',
                name: 'Imtiaz Ahsan Jami',
                inst: 'Notre Dame College, Dhaka',
            },
            {
                img: '../../assets/abeer.jpg',
                name: 'Abdullah Abeerr',
                inst: 'Government Hazi Muhammad Mohsin College, Chattogram',
            },
        ];
        this.userModel = new _user__WEBPACK_IMPORTED_MODULE_1__["user"]('', '', '');
        this.invalidEmail = false;
        this.submitted = false;
        this.submitText = 'Submit';
        this.embed = 'https://www.youtube.com/embed/';
        db.collection('products', (res) => res.orderBy('date', 'desc'))
            .snapshotChanges()
            .subscribe((res) => (this.products = res));
        db.collection('bestmember')
            .snapshotChanges()
            .subscribe((res) => (this.bestDetails = res));
        db.collection('videos', (res) => res.orderBy('date', 'desc'))
            .snapshotChanges()
            .subscribe((res) => (this.videos = res));
        db.collection('blogs', (res) => res.orderBy('date', 'desc'))
            .snapshotChanges()
            .subscribe((res) => (this.blogs = res));
    }
    onSubmit() {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.userModel.email)) {
            this.invalidEmail = true;
        }
        else {
            this.invalidEmail = false;
        }
        if (!this.invalidEmail) {
            const scriptURL = 'https://script.google.com/macros/s/AKfycbyF8GnXzxoLZkJklORp0z5XEfdqtc7K29B5UElP16pWGy0jssUKCHuiFVMx6e8iJ2Hi/exec';
            const formName = 'Message-US';
            const form = document.forms[formName];
            fetch(scriptURL, { method: 'POST', body: new FormData(form) });
            this.submitText = 'Submitted';
            this.submitted = true;
        }
    }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 155, vars: 50, consts: [[1, "best-body"], [1, "container"], [1, "box"], [1, "circle"], ["alt", "Fahim", 3, "src"], [1, "text-img"], [1, "sb"], [1, "role"], [1, "name"], [1, "blog-body"], [1, "line"], ["class", "not-found", 4, "ngIf"], ["class", "gallery", 4, "ngIf"], ["class", "blgbtn", 4, "ngIf"], [1, "step-body"], [1, "join-wrap"], ["src", "../../assets/Nerd-cuate 1.png", 1, "nerd"], [1, "develop"], ["target", "blank", "href", "https://www.facebook.com/groups/sulphuric.bench", 1, "join"], [1, "card-wrap"], [1, "card"], ["src", "../../assets/animate-video.png"], [2, "font-size", "12px"], ["src", "../../assets/pencil.png"], ["src", "../../assets/knowledge.png"], [1, "product-body"], [1, "mySwiper", 3, "slidesPerView", "spaceBetween", "slidesPerGroup", "loop"], [4, "ngFor", "ngForOf"], [1, "admin-body"], [1, "wrapper"], [1, "images"], ["alt", "AdminPIC", "srcset", "", 3, "src"], ["href", "#"], [1, "inst"], ["href", "#", 2, "font-size", "13px"], [1, "video-body"], [1, "videos"], ["frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", "title", 4, "ngFor", "ngForOf"], [1, "about-body"], [1, "about"], [1, "bottom"], [1, "social"], ["target", "blank", "href", "https://www.facebook.com/sulphuric.bench"], [1, "fab", "fa-facebook"], ["target", "blank", "href", "https://twitter.com/BenchSulphuric"], [1, "fab", "fa-twitter"], ["target", "blank", "href", "https://www.youtube.com/channel/UCgyRiWpL2eCY2lzCTx6S6Zg"], [1, "fab", "fa-youtube"], ["target", "blank", "href", "https://www.instagram.com/sulphuric.bench"], [1, "fab", "fa-instagram"], [1, "contact"], ["method", "post", "autocomplete", "off", "name", "Message-US", "novalidate", "", 3, "ngSubmit"], ["userData", "ngForm"], ["for", "name"], ["name", "Name", "type", "text", "required", "", 1, "small", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["for", "email"], ["name", "E-mail", "type", "email", "required", "", 1, "small", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "message"], ["name", "Message", "required", "", 3, "ngModel", "ngModelChange"], ["msg", "ngModel"], ["type", "submit", 3, "disabled"], [1, "not-found"], [1, "gallery"], [1, "big", 3, "src", "alt"], [1, "small", 3, "src", "alt"], [1, "blgbtn"], ["routerLink", "/blog", 1, "see-blog"], [1, "fas", "fa-arrow-right"], ["swiperSlide", ""], ["routerLink", "/products", 1, "slider-img"], [3, "src"], ["frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", "title"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Best Sulphuric");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HomeComponent_p_16_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, HomeComponent_div_17_Template, 6, 10, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, HomeComponent_div_18_Template, 4, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Develop your skills with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Join Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Watch our animated videos free");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Develop your skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Enlighten your knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, HomeComponent_p_43_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "swiper", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, HomeComponent_45_Template, 1, 0, undefined, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Executive Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "section", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](112, HomeComponent_p_112_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](114, HomeComponent_iframe_114_Template, 1, 2, "iframe", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "section", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "form", 51, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_139_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "input", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_143_listener($event) { return ctx.userModel.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "E-mail Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "input", 57, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_147_listener($event) { return ctx.userModel.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "textarea", 60, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_textarea_ngModelChange_151_listener($event) { return ctx.userModel.msg = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](140);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](144);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](148);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.bestDetails[0].payload.doc.data().pic, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.bestDetails[0].payload.doc.data().name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.blogs.length < 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.blogs.length >= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.blogs.length >= 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.products.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("slidesPerView", ctx.products.length)("spaceBetween", 10)("slidesPerGroup", ctx.products.length)("loop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.admins[0].img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[0].inst);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.admins[1].img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[1].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[1].inst);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.admins[2].img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[2].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[2].inst);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.admins[3].img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[3].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[3].inst);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.admins[4].img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[4].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[4].inst);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.admins[5].img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[5].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[5].inst);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.admins[6].img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[6].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[6].inst);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.admins[7].img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[7].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.admins[7].inst);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.videos.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.videos);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.introBangla, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.introEng, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalidinput", _r8.invalid && _r8.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalidinput", _r9.invalid && _r9.touched || ctx.invalidEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("invalidinput", _r10.invalid && _r10.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userModel.msg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r7.invalid || ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.submitText, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperSlideDirective"]], styles: ["@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n[_ngcontent-%COMP%]:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  \n  z-index: 1;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.swiper-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-container-android[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-wrapper[_ngcontent-%COMP%] {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.swiper-container-multirow-column[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-container-free-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-container-pointer-events[_ngcontent-%COMP%] {\n  touch-action: pan-y;\n}\n.swiper-container-pointer-events.swiper-container-vertical[_ngcontent-%COMP%] {\n  touch-action: pan-x;\n}\n.swiper-slide[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.swiper-container-autoheight[_ngcontent-%COMP%], .swiper-container-autoheight[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  height: auto;\n}\n.swiper-container-autoheight[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n\n.swiper-container-3d[_ngcontent-%COMP%] {\n  perspective: 1200px;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: start start;\n}\n.swiper-container-horizontal.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: x mandatory;\n}\n.swiper-container-vertical.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: y mandatory;\n}\n[_ngcontent-%COMP%]:root {\n  \n}\n.swiper-pagination[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.swiper-pagination-fraction[_ngcontent-%COMP%], .swiper-pagination-custom[_ngcontent-%COMP%], .swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%] {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-main[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev[_ngcontent-%COMP%] {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-prev-prev[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next[_ngcontent-%COMP%] {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet-active-next-next[_ngcontent-%COMP%] {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 50%;\n  background: #000;\n  opacity: 0.2;\n}\nbutton.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.swiper-pagination-clickable[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  opacity: 1;\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%] {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  margin: 6px 0;\n  display: block;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  margin: 0 4px;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-container-horizontal.swiper-container-rtl[_ngcontent-%COMP%]    > .swiper-pagination-bullets-dynamic[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  transition: 200ms transform, 200ms right;\n}\n\n.swiper-pagination-progressbar[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n.swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%] {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-container-rtl[_ngcontent-%COMP%]   .swiper-pagination-progressbar[_ngcontent-%COMP%]   .swiper-pagination-progressbar-fill[_ngcontent-%COMP%] {\n  transform-origin: right top;\n}\n.swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-progressbar[_ngcontent-%COMP%], .swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-pagination-progressbar[_ngcontent-%COMP%], .swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-white[_ngcontent-%COMP%] {\n  --swiper-pagination-color: #ffffff;\n}\n.swiper-pagination-black[_ngcontent-%COMP%] {\n  --swiper-pagination-color: #000000;\n}\n.swiper-pagination-lock[_ngcontent-%COMP%] {\n  display: none;\n}\n[_ngcontent-%COMP%]:root {\n  --swiper-navigation-size: 44px;\n  \n}\n.swiper-button-prev[_ngcontent-%COMP%], .swiper-button-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled[_ngcontent-%COMP%], .swiper-button-next.swiper-button-disabled[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev[_ngcontent-%COMP%]:after, .swiper-button-next[_ngcontent-%COMP%]:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  text-transform: none;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev[_ngcontent-%COMP%], .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  left: 10px;\n  right: auto;\n}\n.swiper-button-prev[_ngcontent-%COMP%]:after, .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]:after {\n  content: \"prev\";\n}\n.swiper-button-next[_ngcontent-%COMP%], .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n  right: 10px;\n  left: auto;\n}\n.swiper-button-next[_ngcontent-%COMP%]:after, .swiper-container-rtl[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]:after {\n  content: \"next\";\n}\n.swiper-button-prev.swiper-button-white[_ngcontent-%COMP%], .swiper-button-next.swiper-button-white[_ngcontent-%COMP%] {\n  --swiper-navigation-color: #ffffff;\n}\n.swiper-button-prev.swiper-button-black[_ngcontent-%COMP%], .swiper-button-next.swiper-button-black[_ngcontent-%COMP%] {\n  --swiper-navigation-color: #000000;\n}\n.swiper-button-lock[_ngcontent-%COMP%] {\n  display: none;\n}\nsection.best-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 20vh;\n}\nsection.best-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-basis: 75%;\n  flex-wrap: wrap;\n  z-index: -100000;\n}\nsection.best-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  height: 450px;\n  background: #fff;\n  margin: 20px 40px;\n}\nsection.best-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 300px;\n  height: 304px;\n  background: transparent;\n  border-radius: 50%;\n  z-index: 1;\n  box-shadow: 0 100px 0 -68px #fff;\n}\nsection.best-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 300px;\n  height: 300px;\n  border: 6px solid transparent;\n  border-bottom: 6px solid #182a30;\n  box-sizing: border-box;\n  border-radius: 50%;\n}\nsection.best-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 290px;\n  height: 300px;\n  background: #54defe;\n  overflow: hidden;\n  border-radius: 50%;\n  border: 6px solid #182a30;\n}\nsection.best-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-51.5%);\n  width: 500px;\n  height: 465px;\n}\nsection.best-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   div.text-img[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  margin-top: 13%;\n  margin-left: auto;\n  margin-right: auto;\n}\nsection.best-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   div.text-img[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  text-transform: uppercase;\n  color: #182a30;\n  font-weight: 700;\n}\nsection.best-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   div.text-img[_ngcontent-%COMP%]   p.sb[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\nsection.best-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   div.text-img[_ngcontent-%COMP%]   p.role[_ngcontent-%COMP%] {\n  font-size: 3.5em;\n  text-align: center;\n  letter-spacing: 5px;\n}\nsection.best-body[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   div.text-img[_ngcontent-%COMP%]   p.name[_ngcontent-%COMP%] {\n  font-size: 1.09em;\n  color: #54defe;\n  border-radius: 5px;\n  background: #182a30;\n  padding: 10px;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n}\nsection.blog-body[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  padding: 50px 50px 0px 50px;\n  position: relative;\n}\nsection.blog-body[_ngcontent-%COMP%]   p.not-found[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  width: 100%;\n  text-align: center;\n}\nsection.blog-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  text-transform: uppercase;\n  color: #182a30;\n  font-weight: bold;\n  font-size: 24px;\n  display: inline-block;\n  margin-right: 25px;\n  margin-bottom: 30px;\n}\nsection.blog-body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 5px;\n  background: #182a30;\n  display: inline-block;\n  position: absolute;\n  top: 63px;\n}\nsection.blog-body[_ngcontent-%COMP%]   p.not-found[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  width: 100%;\n  text-align: center;\n}\nsection.blog-body[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n  grid-template-rows: 200px 200px;\n  grid-gap: 5px;\n}\nsection.blog-body[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\nsection.blog-body[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%]   img.big[_ngcontent-%COMP%] {\n  grid-column: 1/span 5;\n  grid-row: 1/-1;\n}\nsection.blog-body[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%]   img.small[_ngcontent-%COMP%] {\n  grid-column: auto/span 3;\n}\nsection.blog-body[_ngcontent-%COMP%]   .blgbtn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\nsection.blog-body[_ngcontent-%COMP%]   .blgbtn[_ngcontent-%COMP%]   button.see-blog[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  outline: none;\n  border: none;\n  font-family: \"PT Sans\", sans-serif;\n  color: #182a30;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 1.09em;\n  color: #54defe;\n  border-radius: 5px;\n  background: #182a30;\n  padding: 10px;\n  text-align: center;\n  transition: 0.5s;\n}\nsection.step-body[_ngcontent-%COMP%]   .join-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\nsection.step-body[_ngcontent-%COMP%]   .join-wrap[_ngcontent-%COMP%]   img.nerd[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n}\nsection.step-body[_ngcontent-%COMP%]   .join-wrap[_ngcontent-%COMP%]   h2.develop[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  color: #182a30;\n  font-weight: bold;\n  font-size: 1.5em;\n  margin-bottom: 25px;\n  text-align: center;\n  display: flex;\n  flex-wrap: nowrap;\n}\nsection.step-body[_ngcontent-%COMP%]   .join-wrap[_ngcontent-%COMP%]   a.join[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 1.3em;\n  width: 100px;\n  color: #54defe;\n  border-radius: 5px;\n  background: #182a30;\n  padding: 10px;\n  text-align: center;\n}\nsection.step-body[_ngcontent-%COMP%]   .join-wrap[_ngcontent-%COMP%]   .card-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n  flex-wrap: wrap;\n  width: 90%;\n}\nsection.step-body[_ngcontent-%COMP%]   .join-wrap[_ngcontent-%COMP%]   .card-wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: #182a30;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  display: flex;\n  margin-right: 30px;\n  width: 250px;\n  height: 120px;\n  border-radius: 16px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\nsection.step-body[_ngcontent-%COMP%]   .join-wrap[_ngcontent-%COMP%]   .card-wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-bottom: 25px;\n  -webkit-user-select: none;\n          user-select: none;\n}\nsection.step-body[_ngcontent-%COMP%]   .join-wrap[_ngcontent-%COMP%]   .card-wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #54defe;\n  text-transform: uppercase;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 700;\n}\nsection.product-body[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 50px 50px 0px 50px;\n  position: relative;\n}\nsection.product-body[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\nsection.product-body[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  background: #fff;\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nsection.product-body[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\nsection.product-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  text-transform: uppercase;\n  color: #182a30;\n  font-weight: bold;\n  font-size: 24px;\n  display: inline-block;\n  margin-right: 25px;\n  margin-bottom: 30px;\n}\nsection.product-body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 5px;\n  background: #182a30;\n  display: inline-block;\n  position: absolute;\n  top: 63px;\n}\nsection.product-body[_ngcontent-%COMP%]   p.not-found[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  width: 100%;\n  text-align: center;\n}\nsection.product-body[_ngcontent-%COMP%]   div.slider-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  border-radius: 15px;\n  cursor: pointer;\n}\nsection.admin-body[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 50px 50px 0px 50px;\n  position: relative;\n}\nsection.admin-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  text-transform: uppercase;\n  color: #182a30;\n  font-weight: bold;\n  font-size: 24px;\n  display: inline-block;\n  margin-right: 25px;\n  margin-bottom: 30px;\n}\nsection.admin-body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 5px;\n  background: #182a30;\n  display: inline-block;\n  position: absolute;\n  top: 63px;\n}\nsection.admin-body[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nsection.admin-body[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  margin-bottom: 30px;\n}\nsection.admin-body[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  flex-basis: 200px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 30px;\n}\nsection.admin-body[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border: 5px solid #182a30;\n  width: 100px;\n  height: 120px;\n  border-radius: 50%;\n  margin-bottom: 5px;\n}\nsection.admin-body[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  color: #182a30;\n  text-align: center;\n  margin-bottom: 4px;\n}\nsection.admin-body[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-family: \"PT Sans\", sans-serif;\n  color: #182a30;\n  text-align: center;\n}\nsection.admin-body[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p.name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nsection.admin-body[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p.inst[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\nsection.video-body[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 50px 50px 0px 50px;\n  position: relative;\n  margin-bottom: 25px;\n}\nsection.video-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  text-transform: uppercase;\n  color: #182a30;\n  font-weight: bold;\n  font-size: 24px;\n  display: inline-block;\n  margin-right: 25px;\n  margin-bottom: 30px;\n}\nsection.video-body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 5px;\n  background: #182a30;\n  display: inline-block;\n  position: absolute;\n  top: 63px;\n}\nsection.video-body[_ngcontent-%COMP%]   p.not-found[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  width: 100%;\n  text-align: center;\n}\nsection.video-body[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\nsection.video-body[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 265px;\n  height: 200px;\n  margin: 0px 10px 20px 0px;\n  border-radius: 15px;\n}\nsection.video-body[_ngcontent-%COMP%]   .videos[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]:last-child {\n  margin: none;\n}\nsection.about-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  background: #182a30;\n  padding: 40px 50px 20px 50px;\n}\nsection.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n  grid-column: 1/9;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  flex-basis: 50%;\n}\nsection.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin-bottom: 20px;\n}\nsection.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  text-transform: uppercase;\n  color: #54defe;\n  font-weight: bold;\n  font-size: 24px;\n  display: inline-block;\n  margin-bottom: 10px;\n}\nsection.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 2px;\n  bottom: 0;\n  height: 1px;\n  width: 14%;\n  \n  border-bottom: 5px solid #54defe;\n}\nsection.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: justify;\n  color: #fff;\n  font-family: \"PT Sans\", sans-serif;\n}\nsection.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Hind Siliguri\", sans-serif;\n}\nsection.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   div.social[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 10px;\n  background: #54defe;\n  margin-top: 25px;\n  width: 30%;\n  border-radius: 20px;\n}\nsection.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   div.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nsection.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   div.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  text-align: center;\n  cursor: pointer;\n}\nsection.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   div.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-facebook[_ngcontent-%COMP%] {\n  display: block;\n  color: #182a30;\n  font-size: 25px;\n}\nsection.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   div.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-twitter[_ngcontent-%COMP%] {\n  color: #54defe;\n  background: #182a30;\n  border-radius: 50%;\n  font-size: 15px;\n  padding: 6px;\n}\nsection.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   div.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-youtube[_ngcontent-%COMP%] {\n  background: #182a30;\n  color: #54defe;\n  border-radius: 50%;\n  font-size: 16px;\n  padding: 5px;\n}\nsection.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   div.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.fa-instagram[_ngcontent-%COMP%] {\n  color: #54defe;\n  background: #182a30;\n  border-radius: 50%;\n  font-size: 15px;\n  padding: 6px;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  grid-column: 9/-1;\n  display: flex;\n  flex-direction: column;\n  flex-basis: 50%;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin-bottom: 20px;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  text-transform: uppercase;\n  color: #54defe;\n  font-weight: bold;\n  font-size: 24px;\n  display: inline-block;\n  margin-bottom: 10px;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 2px;\n  bottom: 0;\n  height: 1px;\n  width: 27%;\n  border-bottom: 5px solid #54defe;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: justify;\n  color: #fff;\n  font-family: \"PT Sans\", sans-serif;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  line-height: 34px;\n  color: #54defe;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  padding: 7px 10px 7px 10px;\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.invalidinput[_ngcontent-%COMP%], section.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea.invalidinput[_ngcontent-%COMP%] {\n  border: 1px solid #db3131;\n  box-shadow: 0px 0px 17px #db3131;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  padding: 10px 10px 10px 10px;\n  height: 187px;\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  resize: none;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #182a30;\n  border-radius: 5px;\n  background: #54defe;\n  padding: 10px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"PT Sans\", sans-serif;\n  margin-top: 25px;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  width: 100px;\n  cursor: pointer;\n  transition: 0.2s;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 10px #54defe, 0 0 13px #54defe, 0 0 26px #54defe;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\nsection.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover {\n  box-shadow: none;\n}\n@media (max-width: 650px) {\n  section.blog-body[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(5, 400px);\n    grid-gap: 5px;\n  }\n  section.blog-body[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n  section.blog-body[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(1) {\n    grid-column: 1/-1;\n    grid-row: 1/2;\n  }\n  section.blog-body[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n    grid-column: 1/-1;\n    grid-row: 2/3;\n  }\n  section.blog-body[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n    grid-column: 1/-1;\n    grid-row: 3/4;\n  }\n  section.blog-body[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n    grid-column: 1/-1;\n    grid-row: 4/5;\n  }\n  section.blog-body[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n    grid-column: 1/-1;\n    grid-row: 5/6;\n  }\n\n  section.about-body[_ngcontent-%COMP%] {\n    grid-template-rows: 500px 25px 425px;\n  }\n  section.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    grid-row: 1/2;\n  }\n  section.about-body[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    grid-row: 3/-1;\n  }\n}\n@media (max-width: 350px) {\n  section.blog-body[_ngcontent-%COMP%]   .gallery[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(11, 1fr);\n    grid-template-rows: repeat(5, 200px);\n  }\n}\n@media (max-width: 500px) {\n  section.about-body[_ngcontent-%COMP%] {\n    grid-template-rows: 700px 25px 425px;\n  }\n  section.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   div.social[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (max-width: 300px) {\n  section.about-body[_ngcontent-%COMP%] {\n    grid-template-rows: 750px 50px 425px;\n  }\n  section.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  section.about-body[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   div.social[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcc3dpcGVyXFxzd2lwZXIuc2NzcyIsIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXHN3aXBlclxcY29tcG9uZW50c1xccGFnaW5hdGlvblxccGFnaW5hdGlvbi5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxzd2lwZXJcXGNvbXBvbmVudHNcXG5hdmlnYXRpb25cXG5hdmlnYXRpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDJCQUFBO0VBQ0EsNHNFQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FES0E7RUFDRSw2QkFBQTtBQ0hGO0FES0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQ0ZGO0FESUE7RUFDRSxzQkFBQTtBQ0RGO0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDQUY7QURFQTs7RUFFRSxpQ0FBQTtBQ0NGO0FEQ0E7RUFDRSxlQUFBO0FDRUY7QURBQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0dGO0FEREE7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUNJRjtBREZBO0VBQ0UsbUJBQUE7QUNLRjtBREpFO0VBQ0UsbUJBQUE7QUNNSjtBREhBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ01GO0FESkE7RUFDRSxrQkFBQTtBQ09GO0FETEEsZ0JBQUE7QUFFRTs7RUFFRSxZQUFBO0FDT0o7QURKRTtFQUNFLHVCQUFBO0VBQ0Esc0NBQUE7QUNNSjtBREZBLGVBQUE7QUFD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Q0U7SUFDRSxvQ0FBQTtFQXlXRjtFQXRXTTtJQUNFLGFBQUE7RUF3V1I7RUFyV0k7SUFDRSxVQUFBO0VBdVdOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N3aXBlci12YXJzLnNjc3MnO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdzd2lwZXItaWNvbnMnO1xuICBzcmM6IHVybCgnZGF0YTphcHBsaWNhdGlvbi9mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsIGQwOUdSZ0FCQUFBQUFBWmdBQkFBQUFBQURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFHUkFBQUFCb0FBQUFjaTZxSGtVZEVSVVlBQUFXZ0FBQUFJd0FBQUNRQVlBQlhSMUJQVXdBQUJoUUFBQUF1QUFBQU51QVk3K3hIVTFWQ0FBQUZ4QUFBQUZBQUFBQm0yZlBjelU5VEx6SUFBQUhjQUFBQVNnQUFBR0JQOVY1UlkyMWhjQUFBQWtRQUFBQ0lBQUFCWXQ2RjBjQmpkblFnQUFBQ3pBQUFBQVFBQUFBRUFCRUJSR2RoYzNBQUFBV1lBQUFBQ0FBQUFBai8vd0FEWjJ4NVpnQUFBeXdBQUFETUFBQUQyTUh0cnlWb1pXRmtBQUFCYkFBQUFEQUFBQUEyRTIrZW9XaG9aV0VBQUFHY0FBQUFId0FBQUNRQzlnRHphRzEwZUFBQUFpZ0FBQUFaQUFBQXJnSmtBQkZzYjJOaEFBQUMwQUFBQUZvQUFBQmFGUUFVR0cxaGVIQUFBQUc4QUFBQUh3QUFBQ0FBY0FCQWJtRnRaUUFBQS9nQUFBRTVBQUFDWHZGZEJ3bHdiM04wQUFBRk5BQUFBR0lBQUFDRTVzNzRoWGphWTJCa1lHQUFZcGY1SHUvaitXMitNbkF6TVlEQXphWDZRakQ2LzQvL0J4ajVHQThBdVJ3TVlHa0FQeXdMMTNqYVkyQmtZR0E4OFA4QWd4NGorLzhmUURZZkExQUVCV2dEQUlCMkJPb0FlTnBqWUdSZ1lOQmg0R2RnWWdBQkVNbklBQkp6WU5BRENRQUFDV2dBc1FCNDJtTmdZZnpDT0lHQmxZR0IwWWN4allHQndSMUtmMldRWkdoaFlHQmlZR1ZtZ0FGR0JpUVFrT2Fhd3REQW9NQlF4WGpnL3dFR1BjWUREQTR3TlVBMkNDZ3dzQUFBTzRFTDZnQUFlTnBqMk0wZ3lBQUNxeGdHTldCa1oyRDQvd01BK3hrRGRnQUFBSGphWTJCZ1lHYUFZQmtHUmdZUWlBSHlHTUY4RmdZSElNM0R3TUhBQkdRck1PZ3lXRExFTTFUOS93OFVCZkVNZ0x6RS8vLy9QLzUvL2YvVi94dityNGVhQUFlTWJBeHdJVVltSU1IRWdLWUFZalVjc0RBd3NMS3hjM0J5Y2ZQdzhqRVFBL2daQkFTRmhFVkV4Y1FsSktXa1pXVGw1QlVVbFpSVlZOWFVOVFFaQmdNQUFNUitFK2dBRVFGRUFBQUFLZ0FxQUNvQU5BQStBRWdBVWdCY0FHWUFjQUI2QUlRQWpnQ1lBS0lBckFDMkFNQUF5Z0RVQU40QTZBRHlBUHdCQmdFUUFSb0JKQUV1QVRnQlFnRk1BVllCWUFGcUFYUUJmZ0dJQVpJQm5BR21BYklCemdIc0FBQjQydTJOTVE2Q1VBeUdXNTY4eDlBbmVZWWdtNE1KYmhLRmFFeElPQVZYOEFwZXdTdDRCaWM0QWZlQWlkM1ZPQml4RHhmUFlFemE1TytYZmkwNFlBRGdnaVVJVUxDdUVKSzhWaE80YlN2cGRua3RISTVRQ1l0ZGkyc2w4Wm5YYUhscVVyTkt6ZEtjVDhjamxxK3J3WlN2SVZjek5pZXpzZm5QL3V6bm1mUEZCTk9ETTJLN01UUTQ1WUVBWnFHUDgxQW1HR2NGM2lQcU9vcDByMVNQVGFUYlZrZlVlNEhYajk3d1lFK3lOd1dZeHdXdTR2MXVnV0hnbzNTMVhkWkVWcVdNN0VUMGNmbkxHeFdma2dSNDJvMlB2V3JETUJTRmovSUhMYUYwektqUmdkaVZNd1NjTlJBb1dVb0g3OFkyaWNCL3lJWTA5QW42QUgyQmR1L1VCK3l4b3BZc2hRaUV2bnZ1MGRVUmdEdDhRZUM4UER3N0ZwamkzZkVBNHovUEVKNllPQjVoS2g0ZGozRXZYaHhQcUgvU0tVWTNySjdzclo0RlpuaDFQTUF0UGh3UDZmbDJQTUpNUERnZVE0clk4WVQ2R3phbzBlQUVBNDA5RHVnZ21UbkZuT2NTQ2lFaUxNZ3hDaVRJNkNxNURaVWQzUW1wMTB2TzBMYUxUZDJjak40Zk91bWxjN2xVWWJTUWNaRmt1dFJHN2c2SktaS3kwUm1kTFk2ODBDRG5FSitVTWtwRkZlMVJON254ZFZwWHJDNGFUdG5hdXJPblllcmNaZzJZVm1MTi9kL2djemZFaW1yRS9mcy9iT3VxMjlabW44dGxvT1JhWGdaZ0dhNzh5TzkvY25YbTJCcGFHdnEyNUR2OVM0RTkrNVNJYzlQcXVwSktoWUZTU2w0NytRY3IxbVlOQUFBQWVOcHR3MGNLd2tBQUFNRFpKQThRN09VSnZrTHNQZlo2ekZWRVJQeThxSGgyWUVSKzNpL0JQODN2SUJMTHlTc29LaW1ycUtxcGEyaHA2K2pxNlJzWUdobWJtSnFaU3kwc3JheHRiTzNzSFJ5ZG5FTVU0dVI2eXg3SkpYdmVQN1dyRHljQUFBQUFBQUgvL3dBQ2VOcGpZR1JnWU9BQlloa2daZ0pDWmdaTkJrWUdMUVp0SUpzRkxNWUFBQXczQUxnQWVOb2xpekVLZ0RBUUJDY2hSYkMyc0ZFUjBZRDZxVlFpQkN2L0g5ZXpHSTZaNVhCQXc4Q0JLL201aVFRVmF1VmJYTG5Pck1adjJvTGRLRmE4UGp1cnUyaEp6R2FibU9TTHpOTXp2dXRwQjNONDJtTmdaR0JnNEdLUVl6QmhZTXhKTE1sajRHQmdBWW93L1AvUEFKSmhMTTZzU29XS2ZXQ0FBd0RBamdiUkFBQjQybU5nWUdCa0FJSWJDWm81SVBybVVuMGhHQTBBTzhFRlRRQUEnKVxuICAgIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpyb290IHtcbiAgLS1zd2lwZXItdGhlbWUtY29sb3I6ICN7JHRoZW1lQ29sb3J9O1xufVxuLnN3aXBlci1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIEZpeCBvZiBXZWJraXQgZmxpY2tlcmluZyAqL1xuICB6LWluZGV4OiAxO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN3aXBlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuLnN3aXBlci1jb250YWluZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLFxuLnN3aXBlci13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xufVxuLnN3aXBlci1jb250YWluZXItbXVsdGlyb3cgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdy1jb2x1bW4gPiAuc3dpcGVyLXdyYXBwZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnN3aXBlci1jb250YWluZXItcG9pbnRlci1ldmVudHMge1xuICB0b3VjaC1hY3Rpb246IHBhbi15O1xuICAmLnN3aXBlci1jb250YWluZXItdmVydGljYWwge1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLXg7XG4gIH1cbn1cbi5zd2lwZXItc2xpZGUge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG59XG4uc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFuayB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi8qIEF1dG8gSGVpZ2h0ICovXG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IHtcbiAgJixcbiAgLnN3aXBlci1zbGlkZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnN3aXBlci13cmFwcGVyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGhlaWdodDtcbiAgfVxufVxuXG4vKiAzRCBFZmZlY3RzICovXG4uc3dpcGVyLWNvbnRhaW5lci0zZCB7XG4gIHBlcnNwZWN0aXZlOiAxMjAwcHg7XG4gIC5zd2lwZXItd3JhcHBlcixcbiAgLnN3aXBlci1zbGlkZSxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tLFxuICAuc3dpcGVyLWN1YmUtc2hhZG93IHtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgfVxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgfVxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIH1cbn1cblxuLyogQ1NTIE1vZGUgKi9cbi5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlIHtcbiAgPiAuc3dpcGVyLXdyYXBwZXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZSB7XG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0IHN0YXJ0O1xuICB9XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUge1xuICA+IC5zd2lwZXItd3JhcHBlciB7XG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gIH1cbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUge1xuICA+IC5zd2lwZXItd3JhcHBlciB7XG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XG4gIH1cbn1cblxuXG5cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJzd2lwZXItaWNvbnNcIjtcbiAgc3JjOiB1cmwoXCJkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwgZDA5R1JnQUJBQUFBQUFaZ0FCQUFBQUFBREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUdSQUFBQUJvQUFBQWNpNnFIa1VkRVJVWUFBQVdnQUFBQUl3QUFBQ1FBWUFCWFIxQlBVd0FBQmhRQUFBQXVBQUFBTnVBWTcreEhVMVZDQUFBRnhBQUFBRkFBQUFCbTJmUGN6VTlUTHpJQUFBSGNBQUFBU2dBQUFHQlA5VjVSWTIxaGNBQUFBa1FBQUFDSUFBQUJZdDZGMGNCamRuUWdBQUFDekFBQUFBUUFBQUFFQUJFQlJHZGhjM0FBQUFXWUFBQUFDQUFBQUFqLy93QURaMng1WmdBQUF5d0FBQURNQUFBRDJNSHRyeVZvWldGa0FBQUJiQUFBQURBQUFBQTJFMitlb1dob1pXRUFBQUdjQUFBQUh3QUFBQ1FDOWdEemFHMTBlQUFBQWlnQUFBQVpBQUFBcmdKa0FCRnNiMk5oQUFBQzBBQUFBRm9BQUFCYUZRQVVHRzFoZUhBQUFBRzhBQUFBSHdBQUFDQUFjQUJBYm1GdFpRQUFBL2dBQUFFNUFBQUNYdkZkQndsd2IzTjBBQUFGTkFBQUFHSUFBQUNFNXM3NGhYamFZMkJrWUdBQVlwZjVIdS9qK1cyK01uQXpNWURBemFYNlFqRDYvNC8vQnhqNUdBOEF1UndNWUdrQVB5d0wxM2phWTJCa1lHQTg4UDhBZ3g0aisvOGZRRFlmQTFBRUJXZ0RBSUIyQk9vQWVOcGpZR1JnWU5CaDRHZGdZZ0FCRU1uSUFCSnpZTkFEQ1FBQUNXZ0FzUUI0Mm1OZ1lmekNPSUdCbFlHQjBZY3hqWUdCd1IxS2YyV1FaR2hoWUdCaVlHVm1nQUZHQmlRUWtPYWF3dERBb01CUXhYamcvd0VHUGNZRERBNHdOVUEyQ0Nnd3NBQUFPNEVMNmdBQWVOcGoyTTBneUFBQ3F4Z0dOV0JrWjJENC93TUEreGtEZGdBQUFIamFZMkJnWUdhQVlCa0dSZ1lRaUFIeUdNRjhGZ1lISU0zRHdNSEFCR1FyTU9neVdETEVNMVQ5L3c4VUJmRU1nTHpFLy8vL1AvNS8vZi9WL3h2K3I0ZWFBQWVNYkF4d0lVWW1JTUhFZ0tZQVlqVWNzREF3c0xLeGMzQnljZlB3OGpFUUEvZ1pCQVNGaEVWRXhjUWxKS1drWldUbDVCVVVsWlJWVk5YVU5UUVpCZ01BQU1SK0UrZ0FFUUZFQUFBQUtnQXFBQ29BTkFBK0FFZ0FVZ0JjQUdZQWNBQjZBSVFBamdDWUFLSUFyQUMyQU1BQXlnRFVBTjRBNkFEeUFQd0JCZ0VRQVJvQkpBRXVBVGdCUWdGTUFWWUJZQUZxQVhRQmZnR0lBWklCbkFHbUFiSUJ6Z0hzQUFCNDJ1Mk5NUTZDVUF5R1c1Njh4OUFuZVlZZ200TUpiaEtGYUV4SU9BVlg4QXBld1N0NEJpYzRBZmVBaWQzVk9CaXhEeGZQWUV6YTVPK1hmaTA0WUFEZ2dpVUlVTEN1RUpLOFZoTzRiU3ZwZG5rdEhJNVFDWXRkaTJzbDhablhhSGxxVXJOS3pkS2NUOGNqbHErcndaU3ZJVmN6TmllenNmblAvdXpubWZQRkJOT0RNMks3TVRRNDVZRUFacUdQODFBbUdHY0YzaVBxT29wMHIxU1BUYVRiVmtmVWU0SFhqOTd3WUUreU53V1l4d1d1NHYxdWdXSGdvM1MxWGRaRVZxV003RVQwY2ZuTEd4V2ZrZ1I0Mm8yUHZXckRNQlNGai9JSExhRjB6S2pSZ2RpVk13U2NOUkFvV1VvSDc4WTJpY0IveUlZMDlBbjZBSDJCZHUvVUIreXhvcFlzaFFpRXZudnUwZFVSZ0R0OFFlQzhQRHc3RnBqaTNmRUE0ei9QRUo2WU9CNWhLaDRkajNFdlhoeFBxSC9TS1VZM3JKN3NyWjRGWm5oMVBNQXRQaHdQNmZsMlBNSk1QRGdlUTRyWThZVDZHemFvMGVBRUE0MDlEdWdnbVRuRm5PY1NDaUVpTE1neENpVEk2Q3E1RFpVZDNRbXAxMHZPMExhTFRkMmNqTjRmT3VtbGM3bFVZYlNRY1pGa3V0Ukc3ZzZKS1pLeTBSbWRMWTY4MENEbkVKK1VNa3BGRmUxUk43bnhkVnBYckM0YVR0bmF1ck9uWWVyY1pnMllWbUxOL2QvZ2N6ZkVpbXJFL2ZzL2JPdXEyOVptbjh0bG9PUmFYZ1pnR2E3OHlPOS9jblhtMkJwYUd2cTI1RHY5UzRFOSs1U0ljOVBxdXBKS2hZRlNTbDQ3K1FjcjFtWU5BQUFBZU5wdHcwY0t3a0FBQU1EWkpBOFE3T1VKdmtMc1BmWjZ6RlZFUlB5OHFIaDJZRVIrM2kvQlA4M3ZJQkxMeVNzb0tpbXJxS3FwYTJocDYranE2UnNZR2htYm1KcVpTeTBzcmF4dGJPM3NIUnlkbkVNVTR1UjZ5eDdKSlh2ZVA3V3JEeWNBQUFBQUFBSC8vd0FDZU5wallHUmdZT0FCWWhrZ1pnSkNaZ1pOQmtZR0xRWnRJSnNGTE1ZQUFBdzNBTGdBZU5vbGl6RUtnREFRQkNjaFJiQzJzRkVSMFlENnFWUWlCQ3YvSDllekdJNlo1WEJBdzhDQksvbTVpUVFWYXVWYlhMbk9yTVp2Mm9MZEtGYThQanVydTJoSnpHYWJtT1NMek5NenZ1dHBCM040Mm1OZ1pHQmc0R0tRWXpCaFlNeEpMTWxqNEdCZ0FZb3cvUC9QQUpKaExNNnNTb1dLZldDQUF3REFqZ2JSQUFCNDJtTmdZR0JrQUlJYkNabzVJUHJtVW4waEdBMEFPOEVGVFFBQVwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG46cm9vdCB7XG4gIC0tc3dpcGVyLXRoZW1lLWNvbG9yOiAjMDA3YWZmO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgLyogRml4IG9mIFdlYmtpdCBmbGlja2VyaW5nICovXG4gIHotaW5kZXg6IDE7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnN3aXBlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsXG4uc3dpcGVyLXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLW11bHRpcm93ID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdy1jb2x1bW4gPiAuc3dpcGVyLXdyYXBwZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXBvaW50ZXItZXZlbnRzIHtcbiAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbn1cbi5zd2lwZXItY29udGFpbmVyLXBvaW50ZXItZXZlbnRzLnN3aXBlci1jb250YWluZXItdmVydGljYWwge1xuICB0b3VjaC1hY3Rpb246IHBhbi14O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuXG4uc3dpcGVyLXNsaWRlLWludmlzaWJsZS1ibGFuayB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogQXV0byBIZWlnaHQgKi9cbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQsXG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItc2xpZGUge1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc3dpcGVyLWNvbnRhaW5lci1hdXRvaGVpZ2h0IC5zd2lwZXItd3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGhlaWdodDtcbn1cblxuLyogM0QgRWZmZWN0cyAqL1xuLnN3aXBlci1jb250YWluZXItM2Qge1xuICBwZXJzcGVjdGl2ZTogMTIwMHB4O1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci13cmFwcGVyLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZSxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3cge1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxMDtcbn1cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG59XG5cbi8qIENTUyBNb2RlICovXG4uc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qIEZvciBGaXJlZm94ICovXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXG59XG4uc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlIHtcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0IHN0YXJ0O1xufVxuXG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbn1cblxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwuc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xufVxuXG46cm9vdCB7XG4gIC8qXG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6IHZhcigtLXN3aXBlci10aGVtZS1jb2xvcik7XG4gICovXG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAzMDBtcyBvcGFjaXR5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB6LWluZGV4OiAxMDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xufVxuXG4vKiBDb21tb24gU3R5bGVzICovXG4uc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24sXG4uc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogQnVsbGV0cyAqL1xuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1tYWluIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42Nik7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXYtcHJldiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW5leHQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBvcGFjaXR5OiAwLjI7XG59XG5idXR0b24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1jbGlja2FibGUgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtNTAlLCAwKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIG1hcmdpbjogNnB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogOHB4O1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyB0b3A7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgbWFyZ2luOiAwIDRweDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIHRyYW5zaXRpb246IDIwMG1zIHRyYW5zZm9ybSwgMjAwbXMgbGVmdDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1ydGwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIHJpZ2h0O1xufVxuXG4vKiBQcm9ncmVzcyAqL1xuLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1maWxsIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xufVxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2JhciwgLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLCAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLW9wcG9zaXRlIHtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZSB7XG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayB7XG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6ICMwMDAwMDA7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1sb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOnJvb3Qge1xuICAtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemU6IDQ0cHg7XG4gIC8qXG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3I6IHZhcigtLXN3aXBlci10aGVtZS1jb2xvcik7XG4gICovXG59XG5cbi5zd2lwZXItYnV0dG9uLXByZXYsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IGNhbGModmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkgLyA0NCAqIDI3KTtcbiAgaGVpZ2h0OiB2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKTtcbiAgbWFyZ2luLXRvcDogY2FsYygwcHggLSAodmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkgLyAyKSk7XG4gIHotaW5kZXg6IDEwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xufVxuLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWRpc2FibGVkLFxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zNTtcbiAgY3Vyc29yOiBhdXRvO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IHN3aXBlci1pY29ucztcbiAgZm9udC1zaXplOiB2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXZhcmlhbnQ6IGluaXRpYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogYXV0bztcbn1cbi5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIsXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dDphZnRlciB7XG4gIGNvbnRlbnQ6IFwicHJldlwiO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICByaWdodDogMTBweDtcbiAgbGVmdDogYXV0bztcbn1cbi5zd2lwZXItYnV0dG9uLW5leHQ6YWZ0ZXIsXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tcHJldjphZnRlciB7XG4gIGNvbnRlbnQ6IFwibmV4dFwiO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24td2hpdGUsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24td2hpdGUge1xuICAtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24tYmxhY2ssXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24tYmxhY2sge1xuICAtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc3dpcGVyLWJ1dHRvbi1sb2NrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuc2VjdGlvbi5iZXN0LWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjB2aDtcbn1cbnNlY3Rpb24uYmVzdC1ib2R5IC5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWJhc2lzOiA3NSU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgei1pbmRleDogLTEwMDAwMDtcbn1cbnNlY3Rpb24uYmVzdC1ib2R5IC5jb250YWluZXIgLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDIwcHggNDBweDtcbn1cbnNlY3Rpb24uYmVzdC1ib2R5IC5jb250YWluZXIgLmJveDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgei1pbmRleDogMTtcbiAgYm94LXNoYWRvdzogMCAxMDBweCAwIC02OHB4ICNmZmY7XG59XG5zZWN0aW9uLmJlc3QtYm9keSAuY29udGFpbmVyIC5ib3g6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjMTgyYTMwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5zZWN0aW9uLmJlc3QtYm9keSAuY29udGFpbmVyIC5ib3ggLmNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMjkwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQ6ICM1NGRlZmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiA2cHggc29saWQgIzE4MmEzMDtcbn1cbnNlY3Rpb24uYmVzdC1ib2R5IC5jb250YWluZXIgLmJveCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUxLjUlKTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDQ2NXB4O1xufVxuc2VjdGlvbi5iZXN0LWJvZHkgLmNvbnRhaW5lciBkaXYudGV4dC1pbWcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTMlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuc2VjdGlvbi5iZXN0LWJvZHkgLmNvbnRhaW5lciBkaXYudGV4dC1pbWcgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMxODJhMzA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5zZWN0aW9uLmJlc3QtYm9keSAuY29udGFpbmVyIGRpdi50ZXh0LWltZyBwLnNiIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG5zZWN0aW9uLmJlc3QtYm9keSAuY29udGFpbmVyIGRpdi50ZXh0LWltZyBwLnJvbGUge1xuICBmb250LXNpemU6IDMuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5zZWN0aW9uLmJlc3QtYm9keSAuY29udGFpbmVyIGRpdi50ZXh0LWltZyBwLm5hbWUge1xuICBmb250LXNpemU6IDEuMDllbTtcbiAgY29sb3I6ICM1NGRlZmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogIzE4MmEzMDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuc2VjdGlvbi5ibG9nLWJvZHkge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBwYWRkaW5nOiA1MHB4IDUwcHggMHB4IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnNlY3Rpb24uYmxvZy1ib2R5IHAubm90LWZvdW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5zZWN0aW9uLmJsb2ctYm9keSBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMxODJhMzA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuc2VjdGlvbi5ibG9nLWJvZHkgLmxpbmUge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogIzE4MmEzMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjNweDtcbn1cbnNlY3Rpb24uYmxvZy1ib2R5IHAubm90LWZvdW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5zZWN0aW9uLmJsb2ctYm9keSAuZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDIwMHB4O1xuICBncmlkLWdhcDogNXB4O1xufVxuc2VjdGlvbi5ibG9nLWJvZHkgLmdhbGxlcnkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5zZWN0aW9uLmJsb2ctYm9keSAuZ2FsbGVyeSBpbWcuYmlnIHtcbiAgZ3JpZC1jb2x1bW46IDEvc3BhbiA1O1xuICBncmlkLXJvdzogMS8tMTtcbn1cbnNlY3Rpb24uYmxvZy1ib2R5IC5nYWxsZXJ5IGltZy5zbWFsbCB7XG4gIGdyaWQtY29sdW1uOiBhdXRvL3NwYW4gMztcbn1cbnNlY3Rpb24uYmxvZy1ib2R5IC5ibGdidG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbnNlY3Rpb24uYmxvZy1ib2R5IC5ibGdidG4gYnV0dG9uLnNlZS1ibG9nIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMTgyYTMwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4wOWVtO1xuICBjb2xvcjogIzU0ZGVmZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMTgyYTMwO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbnNlY3Rpb24uc3RlcC1ib2R5IC5qb2luLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5zZWN0aW9uLnN0ZXAtYm9keSAuam9pbi13cmFwIGltZy5uZXJkIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5zZWN0aW9uLnN0ZXAtYm9keSAuam9pbi13cmFwIGgyLmRldmVsb3Age1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMTgyYTMwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbnNlY3Rpb24uc3RlcC1ib2R5IC5qb2luLXdyYXAgYS5qb2luIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIHdpZHRoOiAxMDBweDtcbiAgY29sb3I6ICM1NGRlZmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogIzE4MmEzMDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuc2VjdGlvbi5zdGVwLWJvZHkgLmpvaW4td3JhcCAuY2FyZC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDkwJTtcbn1cbnNlY3Rpb24uc3RlcC1ib2R5IC5qb2luLXdyYXAgLmNhcmQtd3JhcCAuY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMxODJhMzA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuc2VjdGlvbi5zdGVwLWJvZHkgLmpvaW4td3JhcCAuY2FyZC13cmFwIC5jYXJkIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuc2VjdGlvbi5zdGVwLWJvZHkgLmpvaW4td3JhcCAuY2FyZC13cmFwIC5jYXJkIHAge1xuICBjb2xvcjogIzU0ZGVmZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbnNlY3Rpb24ucHJvZHVjdC1ib2R5IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogNTBweCA1MHB4IDBweCA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5zZWN0aW9uLnByb2R1Y3QtYm9keSAuc3dpcGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5zZWN0aW9uLnByb2R1Y3QtYm9keSAuc3dpcGVyLXNsaWRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC8qIENlbnRlciBzbGlkZSB0ZXh0IHZlcnRpY2FsbHkgKi9cbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuc2VjdGlvbi5wcm9kdWN0LWJvZHkgLnN3aXBlci1zbGlkZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5zZWN0aW9uLnByb2R1Y3QtYm9keSBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMxODJhMzA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuc2VjdGlvbi5wcm9kdWN0LWJvZHkgLmxpbmUge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogIzE4MmEzMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjNweDtcbn1cbnNlY3Rpb24ucHJvZHVjdC1ib2R5IHAubm90LWZvdW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5zZWN0aW9uLnByb2R1Y3QtYm9keSBkaXYuc2xpZGVyLWltZyBpbWcge1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNlY3Rpb24uYWRtaW4tYm9keSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDUwcHggNTBweCAwcHggNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuc2VjdGlvbi5hZG1pbi1ib2R5IGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzE4MmEzMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5zZWN0aW9uLmFkbWluLWJvZHkgLmxpbmUge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogIzE4MmEzMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjNweDtcbn1cbnNlY3Rpb24uYWRtaW4tYm9keSAud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlY3Rpb24uYWRtaW4tYm9keSAuaW1hZ2VzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5zZWN0aW9uLmFkbWluLWJvZHkgLmltYWdlcyAuY2FyZCB7XG4gIGZsZXgtYmFzaXM6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbnNlY3Rpb24uYWRtaW4tYm9keSAuaW1hZ2VzIC5jYXJkIGltZyB7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMxODJhMzA7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5zZWN0aW9uLmFkbWluLWJvZHkgLmltYWdlcyAuY2FyZCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzE4MmEzMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5zZWN0aW9uLmFkbWluLWJvZHkgLmltYWdlcyAuY2FyZCBwIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMxODJhMzA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24uYWRtaW4tYm9keSAuaW1hZ2VzIC5jYXJkIHAubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuc2VjdGlvbi5hZG1pbi1ib2R5IC5pbWFnZXMgLmNhcmQgcC5pbnN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5zZWN0aW9uLnZpZGVvLWJvZHkge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiA1MHB4IDUwcHggMHB4IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbnNlY3Rpb24udmlkZW8tYm9keSBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMxODJhMzA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuc2VjdGlvbi52aWRlby1ib2R5IC5saW5lIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6ICMxODJhMzA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYzcHg7XG59XG5zZWN0aW9uLnZpZGVvLWJvZHkgcC5ub3QtZm91bmQge1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24udmlkZW8tYm9keSAudmlkZW9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbnNlY3Rpb24udmlkZW8tYm9keSAudmlkZW9zIGlmcmFtZSB7XG4gIHdpZHRoOiAyNjVweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiAwcHggMTBweCAyMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbnNlY3Rpb24udmlkZW8tYm9keSAudmlkZW9zIGlmcmFtZTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiBub25lO1xufVxuXG5zZWN0aW9uLmFib3V0LWJvZHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcbiAgYmFja2dyb3VuZDogIzE4MmEzMDtcbiAgcGFkZGluZzogNDBweCA1MHB4IDIwcHggNTBweDtcbn1cbnNlY3Rpb24uYWJvdXQtYm9keSAuYWJvdXQge1xuICBncmlkLWNvbHVtbjogMS85O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1iYXNpczogNTAlO1xufVxuc2VjdGlvbi5hYm91dC1ib2R5IC5hYm91dCAuYm90dG9tIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuc2VjdGlvbi5hYm91dC1ib2R5IC5hYm91dCAuYm90dG9tIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzU0ZGVmZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuc2VjdGlvbi5hYm91dC1ib2R5IC5hYm91dCAuYm90dG9tOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDE0JTtcbiAgLyogb3IgMTAwcHggKi9cbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM1NGRlZmU7XG59XG5zZWN0aW9uLmFib3V0LWJvZHkgLmFib3V0IHAge1xuICB3aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuc2VjdGlvbi5hYm91dC1ib2R5IC5hYm91dCBwIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJIaW5kIFNpbGlndXJpXCIsIHNhbnMtc2VyaWY7XG59XG5zZWN0aW9uLmFib3V0LWJvZHkgLmFib3V0IGRpdi5zb2NpYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzU0ZGVmZTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgd2lkdGg6IDMwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbnNlY3Rpb24uYWJvdXQtYm9keSAuYWJvdXQgZGl2LnNvY2lhbCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuc2VjdGlvbi5hYm91dC1ib2R5IC5hYm91dCBkaXYuc29jaWFsIGEgaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuc2VjdGlvbi5hYm91dC1ib2R5IC5hYm91dCBkaXYuc29jaWFsIGEgaS5mYS1mYWNlYm9vayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzE4MmEzMDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuc2VjdGlvbi5hYm91dC1ib2R5IC5hYm91dCBkaXYuc29jaWFsIGEgaS5mYS10d2l0dGVyIHtcbiAgY29sb3I6ICM1NGRlZmU7XG4gIGJhY2tncm91bmQ6ICMxODJhMzA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA2cHg7XG59XG5zZWN0aW9uLmFib3V0LWJvZHkgLmFib3V0IGRpdi5zb2NpYWwgYSBpLmZhLXlvdXR1YmUge1xuICBiYWNrZ3JvdW5kOiAjMTgyYTMwO1xuICBjb2xvcjogIzU0ZGVmZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbnNlY3Rpb24uYWJvdXQtYm9keSAuYWJvdXQgZGl2LnNvY2lhbCBhIGkuZmEtaW5zdGFncmFtIHtcbiAgY29sb3I6ICM1NGRlZmU7XG4gIGJhY2tncm91bmQ6ICMxODJhMzA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiA2cHg7XG59XG5zZWN0aW9uLmFib3V0LWJvZHkgLmNvbnRhY3Qge1xuICBncmlkLWNvbHVtbjogOS8tMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1iYXNpczogNTAlO1xufVxuc2VjdGlvbi5hYm91dC1ib2R5IC5jb250YWN0IC5ib3R0b20ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5zZWN0aW9uLmFib3V0LWJvZHkgLmNvbnRhY3QgLmJvdHRvbSBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM1NGRlZmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbnNlY3Rpb24uYWJvdXQtYm9keSAuY29udGFjdCAuYm90dG9tOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDI3JTtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM1NGRlZmU7XG59XG5zZWN0aW9uLmFib3V0LWJvZHkgLmNvbnRhY3QgcCB7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5zZWN0aW9uLmFib3V0LWJvZHkgLmNvbnRhY3QgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5zZWN0aW9uLmFib3V0LWJvZHkgLmNvbnRhY3QgZm9ybSBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBQVCBTYW5zO1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgY29sb3I6ICM1NGRlZmU7XG59XG5zZWN0aW9uLmFib3V0LWJvZHkgLmNvbnRhY3QgZm9ybSBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogN3B4IDEwcHggN3B4IDEwcHg7XG4gIGNvbG9yOiAjMTgyYTMwO1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5zZWN0aW9uLmFib3V0LWJvZHkgLmNvbnRhY3QgZm9ybSBpbnB1dC5pbnZhbGlkaW5wdXQsXG5zZWN0aW9uLmFib3V0LWJvZHkgLmNvbnRhY3QgZm9ybSB0ZXh0YXJlYS5pbnZhbGlkaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGIzMTMxO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE3cHggI2RiMzEzMTtcbn1cbnNlY3Rpb24uYWJvdXQtYm9keSAuY29udGFjdCBmb3JtIHRleHRhcmVhIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBoZWlnaHQ6IDE4N3B4O1xuICBjb2xvcjogIzE4MmEzMDtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbnNlY3Rpb24uYWJvdXQtYm9keSAuY29udGFjdCBmb3JtIGJ1dHRvbiB7XG4gIGNvbG9yOiAjMTgyYTMwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM1NGRlZmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5zZWN0aW9uLmFib3V0LWJvZHkgLmNvbnRhY3QgZm9ybSBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjNTRkZWZlLCAwIDAgMTNweCAjNTRkZWZlLCAwIDAgMjZweCAjNTRkZWZlO1xufVxuc2VjdGlvbi5hYm91dC1ib2R5IC5jb250YWN0IGZvcm0gYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5zZWN0aW9uLmFib3V0LWJvZHkgLmNvbnRhY3QgZm9ybSBidXR0b246ZGlzYWJsZWQ6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgc2VjdGlvbi5ibG9nLWJvZHkgLmdhbGxlcnkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgNDAwcHgpO1xuICAgIGdyaWQtZ2FwOiA1cHg7XG4gIH1cbiAgc2VjdGlvbi5ibG9nLWJvZHkgLmdhbGxlcnkgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgc2VjdGlvbi5ibG9nLWJvZHkgLmdhbGxlcnkgaW1nOm50aC1jaGlsZCgxKSB7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgfVxuICBzZWN0aW9uLmJsb2ctYm9keSAuZ2FsbGVyeSBpbWc6bnRoLWNoaWxkKDIpIHtcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgICBncmlkLXJvdzogMi8zO1xuICB9XG4gIHNlY3Rpb24uYmxvZy1ib2R5IC5nYWxsZXJ5IGltZzpudGgtY2hpbGQoMykge1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGdyaWQtcm93OiAzLzQ7XG4gIH1cbiAgc2VjdGlvbi5ibG9nLWJvZHkgLmdhbGxlcnkgaW1nOm50aC1jaGlsZCg0KSB7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gICAgZ3JpZC1yb3c6IDQvNTtcbiAgfVxuICBzZWN0aW9uLmJsb2ctYm9keSAuZ2FsbGVyeSBpbWc6bnRoLWNoaWxkKDUpIHtcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcbiAgICBncmlkLXJvdzogNS82O1xuICB9XG5cbiAgc2VjdGlvbi5hYm91dC1ib2R5IHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwMHB4IDI1cHggNDI1cHg7XG4gIH1cbiAgc2VjdGlvbi5hYm91dC1ib2R5IC5hYm91dCB7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgfVxuICBzZWN0aW9uLmFib3V0LWJvZHkgLmNvbnRhY3Qge1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGdyaWQtcm93OiAzLy0xO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgc2VjdGlvbi5ibG9nLWJvZHkgLmdhbGxlcnkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDIwMHB4KTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIHNlY3Rpb24uYWJvdXQtYm9keSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MDBweCAyNXB4IDQyNXB4O1xuICB9XG4gIHNlY3Rpb24uYWJvdXQtYm9keSAuYWJvdXQgZGl2LnNvY2lhbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIHNlY3Rpb24uYWJvdXQtYm9keSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3NTBweCA1MHB4IDQyNXB4O1xuICB9XG4gIHNlY3Rpb24uYWJvdXQtYm9keSAuYWJvdXQgcCBzcGFuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIHNlY3Rpb24uYWJvdXQtYm9keSAuYWJvdXQgZGl2LnNvY2lhbCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uL3N3aXBlci12YXJzLnNjc3MnO1xuXG46cm9vdCB7XG4gIC8qXG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6IHZhcigtLXN3aXBlci10aGVtZS1jb2xvcik7XG4gICovXG59XG4uc3dpcGVyLXBhZ2luYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMzAwbXMgb3BhY2l0eTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgei1pbmRleDogMTA7XG4gICYuc3dpcGVyLXBhZ2luYXRpb24taGlkZGVuIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4vKiBDb21tb24gU3R5bGVzICovXG4uc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24sXG4uc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi8qIEJ1bGxldHMgKi9cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDA7XG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLW1haW4ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcbiAgfVxuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2LXByZXYge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG4gIH1cbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbmV4dCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcbiAgfVxuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XG4gIH1cbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMjtcbiAgQGF0LXJvb3QgYnV0dG9uI3smfSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxuICAuc3dpcGVyLXBhZ2luYXRpb24tY2xpY2thYmxlICYge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG59XG5cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsIHtcbiAgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIC01MCUsIDApO1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgbWFyZ2luOiA2cHggMDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAmLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIHRvcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwge1xuICA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgfVxuICAgICYuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIHtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyBsZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLnN3aXBlci1jb250YWluZXItcnRsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIHJpZ2h0O1xuICB9XG59XG4vKiBQcm9ncmVzcyAqL1xuLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgfVxuICAuc3dpcGVyLWNvbnRhaW5lci1ydGwgJiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItZmlsbCB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgdG9wO1xuICB9XG4gIC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAmLFxuICAuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+ICYuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gJixcbiAgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+ICYuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUge1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICB9XG59XG5AZWFjaCAkcGFnaW5hdGlvbkNvbG9yTmFtZSwgJHBhZ2luYXRpb25Db2xvclZhbHVlIGluICRjb2xvcnMge1xuICAuc3dpcGVyLXBhZ2luYXRpb24tI3skcGFnaW5hdGlvbkNvbG9yTmFtZX0ge1xuICAgIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6ICN7JHBhZ2luYXRpb25Db2xvclZhbHVlfTtcbiAgfVxufVxuLnN3aXBlci1wYWdpbmF0aW9uLWxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vc3dpcGVyLXZhcnMuc2Nzcyc7XG5cbjpyb290IHtcbiAgLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplOiA0NHB4O1xuICAvKlxuICAtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpO1xuICAqL1xufVxuLnN3aXBlci1idXR0b24tcHJldixcbi5zd2lwZXItYnV0dG9uLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogY2FsYyh2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKSAvIDQ0ICogMjcpO1xuICBoZWlnaHQ6IHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpO1xuICBtYXJnaW4tdG9wOiBjYWxjKDBweCAtICh2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKSAvIDIpKTtcbiAgei1pbmRleDogMTA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG4gICYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC4zNTtcbiAgICBjdXJzb3I6IGF1dG87XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgZm9udC1mYW1pbHk6IHN3aXBlci1pY29ucztcbiAgICBmb250LXNpemU6IHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC12YXJpYW50OiBpbml0aWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG4uc3dpcGVyLWJ1dHRvbi1wcmV2LFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAncHJldic7XG4gIH1cbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IGF1dG87XG59XG4uc3dpcGVyLWJ1dHRvbi1uZXh0LFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiAnbmV4dCc7XG4gIH1cbiAgcmlnaHQ6IDEwcHg7XG4gIGxlZnQ6IGF1dG87XG59XG5cbkBlYWNoICRuYXZDb2xvck5hbWUsICRuYXZDb2xvclZhbHVlIGluICRjb2xvcnMge1xuICAuc3dpcGVyLWJ1dHRvbi1wcmV2LFxuICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICAmLnN3aXBlci1idXR0b24tI3skbmF2Q29sb3JOYW1lfSB7XG4gICAgICAtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiAjeyRuYXZDb2xvclZhbHVlfTtcbiAgICB9XG4gIH1cbn1cbi5zd2lwZXItYnV0dG9uLWxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C7aP":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CoursesComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Coming Soon.... Stay Tuned! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", d_r2.payload.doc.data().buyLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", d_r2.payload.doc.data().poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r2.payload.doc.data().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r2.payload.doc.data().author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u09F3 ", d_r2.payload.doc.data().mainprice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", d_r2.payload.doc.data().time, "h ");
} }
class CoursesComponent {
    constructor(db) {
        this.db = db;
        db.collection('courses', (res) => res.orderBy('date', 'desc'))
            .snapshotChanges()
            .subscribe((res) => (this.dataArray = res));
    }
    ngOnInit() { }
}
CoursesComponent.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
CoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesComponent, selectors: [["app-departments"]], decls: 3, vars: 2, consts: [[1, "courses"], ["class", "not-found", 4, "ngIf"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "not-found"], [1, "card"], [3, "href"], ["alt", "Book", 3, "src"], [1, "price-duration"], [1, "main-price"], [1, "duration"], [1, "far", "fa-clock"]], template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CoursesComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CoursesComponent_div_2_Template, 13, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataArray.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["section.courses[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\nsection.courses[_ngcontent-%COMP%]   p.not-found[_ngcontent-%COMP%] {\n  z-index: -123123;\n  display: flex;\n  justify-content: flex-start;\n  font-family: \"PT Sans\", sans-serif;\n  font-weight: lighter;\n  opacity: 0.8;\n  height: 100vh;\n}\nsection.courses[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  flex-basis: 250px;\n  padding: 30px 20px 0px 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 3%;\n  margin-bottom: 25px;\n  box-shadow: 5px 9px 12px 5px #00000059;\n  border-radius: 16px;\n  background: #ffffff;\n  padding-bottom: 20px;\n  cursor: pointer;\n  background: #182a30;\n  transition: 0.3s;\n}\nsection.courses[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nsection.courses[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 170px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n}\nsection.courses[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  font-weight: bold;\n  color: #01b9e2;\n}\nsection.courses[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: normal;\n  margin: 10px 0px 10px 0px;\n  color: #01b9e2;\n}\nsection.courses[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .price-duration[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nsection.courses[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .price-duration[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  font-weight: bolder;\n  margin-bottom: 8px;\n  color: #01b9e2;\n}\nsection.courses[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .price-duration[_ngcontent-%COMP%]   p.main-price[_ngcontent-%COMP%] {\n  margin: none;\n  font-weight: bold;\n  color: #01b9e2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvdXJzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREY7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQUo7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUVBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQS9CSTtFQWdDSixnQkFBQTtBQUFKO0FBQ0k7RUFDRSxxQkFBQTtBQUNOO0FBQU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUNNO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBNUNBO0FBNkNSO0FBQ007RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FqREE7QUFrRFI7QUFDTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUNSO0FBQVE7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQTFERjtBQTREUjtBQUFRO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0EvREY7QUFpRVIiLCJmaWxlIjoiY291cnNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0aGVtZTogIzE4MmEzMDtcclxuJGNvbG9yOiAjMDFiOWUyO1xyXG5zZWN0aW9uLmNvdXJzZXMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcC5ub3QtZm91bmQge1xyXG4gICAgei1pbmRleDogLTEyMzEyMztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC5jYXJkIHtcclxuICAgIGZsZXgtYmFzaXM6IDI1MHB4O1xyXG4gICAgcGFkZGluZzogMzBweCAyMHB4IDBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA5cHggMTJweCA1cHggIzAwMDAwMDU5O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDlweCAxMnB4IDVweCAjMDAwMDAwNTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogJHRoZW1lO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcclxuICAgICAgfVxyXG4gICAgICAucHJpY2UtZHVyYXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAubWFpbi1wcmljZSB7XHJcbiAgICAgICAgICBtYXJnaW46IG5vbmU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "HhcG":
/*!******************************!*\
  !*** ./src/app/home/user.ts ***!
  \******************************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
class user {
    constructor(name, email, msg) {
        this.name = name;
        this.email = email;
        this.msg = msg;
    }
}


/***/ }),

/***/ "LgBW":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BlogComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Coming Soon.... Stay Tuned! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const blog_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goToBlogPost(blog_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Written By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Read More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", blog_r2.payload.doc.data().img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", blog_r2.payload.doc.data().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r2.payload.doc.data().title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r2.payload.doc.data().author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r2.payload.doc.data().exactDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r2.payload.doc.data().exactTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", blog_r2.payload.doc.data().body, " ");
} }
class BlogComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        db.collection('blogs', (res) => res.orderBy('date', 'desc'))
            .snapshotChanges()
            .subscribe((res) => (this.blogs = res));
    }
    goToBlogPost(blog) {
        this.router.navigate([
            'blog',
            blog.payload.doc.data().title +
                '--:--' +
                blog.payload.doc.data().img +
                '--:--' +
                blog.payload.doc.data().author +
                '--:--' +
                blog.payload.doc.data().authorFB +
                '--:--' +
                blog.payload.doc.data().exactDate +
                '--:--' +
                blog.payload.doc.data().exactTime +
                '--:--' +
                blog.payload.doc.data().body,
        ]);
    }
    ngOnInit() { }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 4, vars: 2, consts: [[1, "blogs"], ["class", "not-found", 4, "ngIf"], [1, "wrap"], ["class", "card", 3, "click", 4, "ngFor", "ngForOf"], [1, "not-found"], [1, "card", 3, "click"], [1, "imgBx"], [3, "src", "alt"], [1, "textBx"], [2, "font-weight", "bold", "text-transform", "capitalize"], [2, "font-weight", "bold"], ["routerLink", "/blog"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlogComponent_div_3_Template, 20, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blogs.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["section.blogs[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\nsection.blogs[_ngcontent-%COMP%]   p.not-found[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  font-family: \"PT Sans\", sans-serif;\n  font-weight: lighter;\n  opacity: 0.8;\n  height: 100vh;\n  z-index: -11111111111;\n}\nsection.blogs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n}\nsection.blogs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  flex-basis: 280px;\n  margin-bottom: 25px;\n  -webkit-user-select: none;\n          user-select: none;\n}\nsection.blogs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%] {\n  width: 280px;\n  height: auto;\n  position: relative;\n}\nsection.blogs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  top: 0;\n  width: 280px;\n  height: 240px;\n  border-radius: 10px;\n}\nsection.blogs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   .textBx[_ngcontent-%COMP%] {\n  transition: 0.8s;\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  bottom: 100px;\n  height: 100px;\n  padding: 20px;\n}\nsection.blogs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   .textBx[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  display: block;\n}\nsection.blogs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   .textBx[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: block;\n}\nsection.blogs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   .textBx[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  font-weight: bold;\n}\nsection.blogs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   .textBx[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  white-space: nowrap;\n  width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #182a30;\n}\nsection.blogs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   .textBx[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #01b9e2;\n  border-radius: 5px;\n  background: #182a30;\n  padding: 10px 10px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"PT Sans\", sans-serif;\n  margin-top: 10px;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s;\n}\nsection.blogs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\nsection.blogs[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .imgBx[_ngcontent-%COMP%]   .textBx[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQURGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUFKO0FBRUU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFDTjtBQUFNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRFE7RUFDRSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUdWO0FBRFE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBR1Y7QUFGVTtFQUNFLGNBakRKO0VBa0RJLGtDQUFBO0VBQ0EsY0FBQTtBQUlaO0FBRlU7RUFDRSxjQXRESjtFQXVESSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSVo7QUFIWTtFQUNFLGNBNUROO0VBNkRNLGtDQUFBO0VBQ0EsaUJBQUE7QUFLZDtBQUZVO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0F2RUo7QUEyRVI7QUFGVTtFQUNFLGtCQUFBO0VBQ0EsY0ExRUo7RUEyRUksa0JBQUE7RUFDQSxtQkE3RUo7RUE4RUksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlaO0FBRVU7RUFDRSxZQUFBO0FBQVo7QUFFVTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQUFaIiwiZmlsZSI6ImJsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdGhlbWU6ICMxODJhMzA7XHJcbiRjb2xvcjogIzAxYjllMjtcclxuc2VjdGlvbi5ibG9ncyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHAubm90LWZvdW5kIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB6LWluZGV4OiAtMTExMTExMTExMTE7XHJcbiAgfVxyXG4gIC53cmFwIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5jYXJkIHtcclxuICAgICAgZmxleC1iYXNpczogMjgwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAuaW1nQngge1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMjgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHRCeCB7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjhzO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgY29sb3I6ICR0aGVtZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgY29sb3I6ICR0aGVtZTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZTtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAuaW1nQngge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRleHRCeCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "QW0e":
/*!*********************************!*\
  !*** ./src/app/login/course.ts ***!
  \*********************************/
/*! exports provided: course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "course", function() { return course; });
class course {
    constructor(poster, name, author, mainprice, time, buyLink) {
        this.poster = poster;
        this.name = name;
        this.author = author;
        this.mainprice = mainprice;
        this.time = time;
        this.buyLink = buyLink;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AppComponent_i_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function AppComponent_i_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
class AppComponent {
    constructor() {
        this.activBar = true;
    }
    ngOnInit() { }
    toggleNav() {
        this.activBar = !this.activBar;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 42, vars: 4, consts: [[1, "navbar"], [1, "wave"], ["src", "/assets/sb-logo.png", "routerLink", "/", 1, "logo"], [1, "nav"], ["routerLink", "/blog", "routerLinkActive", "active-menu"], ["routerLink", "/rank", "routerLinkActive", "active-menu"], ["routerLink", "/videos", "routerLinkActive", "active-menu"], ["routerLink", "/products", "routerLinkActive", "active-menu"], ["routerLink", "/courses", "routerLinkActive", "active-menu"], [1, "toggle-menu", 3, "click"], ["class", "fas fa-bars", 4, "ngIf"], ["class", "fas fa-times", 4, "ngIf"], [1, "fas", "fa-bars"], [1, "fas", "fa-times"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Blog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Rank ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Videos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_35_listener() { return ctx.toggleNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AppComponent_i_36_Template, 1, 0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppComponent_i_37_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00A9 2021 Sulphuric Bench, All Rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active-nav", !ctx.activBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.activBar);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["header.navbar[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border: 5px solid #182a30;\n  border-radius: 50%;\n  margin-left: 20px;\n  transform: translateY(70px);\n  outline: none;\n  cursor: pointer;\n}\nheader.navbar[_ngcontent-%COMP%]   .wave[_ngcontent-%COMP%] {\n  height: 220px;\n  transform: translateY(-50px);\n  background: url(\"/assets/nav-bg.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  z-index: -1000000;\n}\nheader.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  right: 10px;\n  top: 25%;\n  z-index: 100000000000000000;\n}\nheader.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  position: relative;\n  list-style: none;\n  overflow: hidden;\n  display: inline-block;\n  padding: 5px 25px 5px 25px;\n  margin-top: 25px;\n  font-family: Agency FB;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 25px;\n  color: #54defe;\n  transition: 0.2s;\n  border-radius: 10px;\n  outline: none;\n  cursor: pointer;\n}\nheader.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: #54defe;\n  color: #182a30;\n  box-shadow: 0 0 20px #54defe, 0 0 40px #54defe, 0 0 80px #54defe;\n  transition-delay: 1s;\n}\nheader.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n}\nheader.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(90deg, transparent, #54defe);\n}\nheader.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  top: -100%;\n  right: 0;\n  height: 100%;\n  width: 2px;\n  background: linear-gradient(180deg, transparent, #54defe);\n}\nheader.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  bottom: 0;\n  right: -100%;\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(270deg, transparent, #54defe);\n}\nheader.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  bottom: -100%;\n  left: 0;\n  height: 100%;\n  width: 2px;\n  background: linear-gradient(360deg, transparent, #54defe);\n}\nheader.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1) {\n  left: 100%;\n  transition: 1s;\n}\nheader.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(2) {\n  top: 100%;\n  transition: 1s;\n  transition-delay: 0.25s;\n}\nheader.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(3) {\n  right: 100%;\n  transition: 1s;\n  transition-delay: 0.5s;\n}\nheader.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(4) {\n  bottom: 100%;\n  transition: 1s;\n  transition-delay: 0.75s;\n}\nheader.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active-menu[_ngcontent-%COMP%] {\n  background: #54defe;\n  color: #182a30;\n}\nheader.navbar[_ngcontent-%COMP%]   div.toggle-menu[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n  color: #54defe;\n  position: absolute;\n  right: 25px;\n  top: 60%;\n  font-size: 25px;\n}\nfooter[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #54defe;\n  padding: 10px 0px;\n}\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  font-weight: bold;\n  color: #182a30;\n  text-align: center;\n  text-transform: capitalize;\n  -webkit-user-select: none;\n          user-select: none;\n}\n@media (max-width: 700px) {\n  header.navbar[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n    margin-left: 20px;\n    transform: translateY(55px);\n  }\n  header.navbar[_ngcontent-%COMP%]   .wave[_ngcontent-%COMP%] {\n    height: 140px;\n    background: #182a30;\n  }\n  header.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    top: 40%;\n  }\n  header.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  header.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    transition-delay: 0s;\n  }\n}\n@media (max-width: 600px) {\n  header.navbar[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    margin-left: 20px;\n    transform: translateY(55px);\n  }\n  header.navbar[_ngcontent-%COMP%]   .wave[_ngcontent-%COMP%] {\n    height: 120px;\n    background: #182a30;\n  }\n  header.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 5px 15px 5px 15px;\n  }\n  header.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    transition-delay: 0s;\n  }\n}\n@media (max-width: 495px) {\n  header.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: 200vh;\n    background: #182a30;\n    top: 120px;\n    left: -100%;\n    transition: 0.5s;\n    z-index: 100;\n  }\n  header.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n    margin-top: 0;\n    padding: 20px 0px 20px 0px;\n    border-radius: 0px;\n    border-bottom: 1px solid #54defe;\n    z-index: 100;\n  }\n  header.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  header.navbar[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n    background: #54defe;\n    color: #182a30;\n    box-shadow: none;\n    transition-delay: 0s;\n  }\n  header.navbar[_ngcontent-%COMP%]   div.toggle-menu[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  header.navbar[_ngcontent-%COMP%]   nav.active-nav[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0NBQUE7QUFhRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUpKO0FBT0U7RUFDRSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUxKO0FBUUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQU5KO0FBU007RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQTNDQTtFQTRDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFQUjtBQVFRO0VBQ0UsbUJBakRGO0VBa0RFLGNBbkRGO0VBb0RFLGdFQUFBO0VBQ0Esb0JBQUE7QUFOVjtBQVNRO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBUFY7QUFTVTtFQUNFLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx3REFBQTtBQVBaO0FBU1U7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseURBQUE7QUFQWjtBQVNVO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlEQUFBO0FBUFo7QUFTVTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5REFBQTtBQVBaO0FBVVE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQVJWO0FBVVE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBUlY7QUFVUTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFSVjtBQVVRO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQVJWO0FBV007RUFDRSxtQkE3R0E7RUE4R0EsY0EvR0E7QUFzR1I7QUFlRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0F2SEk7RUF3SEosa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFiSjtBQWlCQTtFQUNFLFdBQUE7RUFDQSxtQkFqSU07RUFrSU4saUJBQUE7QUFkRjtBQWVFO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBdklJO0VBd0lKLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBYko7QUFnQkE7RUFFSTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSwyQkFBQTtFQWRKO0VBZ0JFO0lBQ0UsYUFBQTtJQUNBLG1CQXZKRTtFQXlJTjtFQWdCRTtJQUNFLFFBQUE7RUFkSjtFQWdCTTtJQUNFLGVBQUE7RUFkUjtFQWVRO0lBQ0Usb0JBQUE7RUFiVjtBQUNGO0FBb0JBO0VBRUk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsMkJBQUE7RUFuQko7RUFxQkU7SUFDRSxhQUFBO0lBQ0EsbUJBakxFO0VBOEpOO0VBdUJNO0lBQ0UsMEJBQUE7RUFyQlI7RUFzQlE7SUFDRSxvQkFBQTtFQXBCVjtBQUNGO0FBMkJBO0VBRUk7SUFFRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBdk1FO0lBd01GLFVBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VBM0JKO0VBNkJNO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLDBCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQ0FBQTtJQUNBLFlBQUE7RUEzQlI7RUE0QlE7SUFDRSxhQUFBO0VBMUJWO0VBNEJRO0lBQ0UsbUJBeE5KO0lBeU5JLGNBMU5KO0lBMk5JLGdCQUFBO0lBQ0Esb0JBQUE7RUExQlY7RUErQkU7SUFDRSxxQkFBQTtFQTdCSjtFQStCRTtJQUNFLE9BQUE7RUE3Qko7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuXHJcbiAqIEF1dGhvcjotIEFiZHVsbGFoIFNoZWVoYW5cclxuICogRW1haWw6LSBhYmRzaGUyMDA1QGdtYWlsLmNvbVxyXG4gKiBDcmVhdGVkOi0gMjAyMS0wNC0yOSAwMDo1NzoyMlxyXG4gKiBEZXNjcmlwdGlvbjotIE5hdmJhciBDU1NcclxuXHJcbiovXHJcblxyXG4kdGhlbWU6ICMxODJhMzA7XHJcbiRjb2xvcjogIzU0ZGVmZTtcclxuXHJcbmhlYWRlci5uYXZiYXIge1xyXG4gIGltZy5sb2dvIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCAkdGhlbWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MHB4KTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAud2F2ZSB7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvbmF2LWJnLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgei1pbmRleDogLTEwMDAwMDA7XHJcbiAgfVxyXG5cclxuICBuYXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHotaW5kZXg6IDEwMDAwMDAwMDAwMDAwMDAwMDtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiA1cHggMjVweCA1cHggMjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBZ2VuY3kgRkI7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiAkdGhlbWU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAkY29sb3IsIDAgMCA0MHB4ICRjb2xvciwgMCAwIDgwcHggJGNvbG9yO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCAkY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICB0b3A6IC0xMDAlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB0cmFuc3BhcmVudCwgJGNvbG9yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICByaWdodDogLTEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgdHJhbnNwYXJlbnQsICRjb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogLTEwMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgdHJhbnNwYXJlbnQsICRjb2xvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIgc3BhbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHNwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4yNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIgc3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIgc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgYm90dG9tOiAxMDAlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjc1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGkuYWN0aXZlLW1lbnUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAgICAgICBjb2xvcjogJHRoZW1lO1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDAgMCAyMHB4ICRjb2xvciwgMCAwIDQwcHggJGNvbG9yLCAwIDAgODBweCAkY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpdi50b2dnbGUtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgdG9wOiA2MCU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG59XHJcbi8vIE5hdmJhciBEb25lXHJcbmZvb3RlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yO1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogJHRoZW1lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgaGVhZGVyLm5hdmJhciB7XHJcbiAgICBpbWcubG9nbyB7XHJcbiAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTVweCk7XHJcbiAgICB9XHJcbiAgICAud2F2ZSB7XHJcbiAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR0aGVtZTtcclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgIHRvcDogNDAlO1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgaGVhZGVyLm5hdmJhciB7XHJcbiAgICBpbWcubG9nbyB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTVweCk7XHJcbiAgICB9XHJcbiAgICAud2F2ZSB7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR0aGVtZTtcclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0OTVweCkge1xyXG4gIGhlYWRlci5uYXZiYXIge1xyXG4gICAgbmF2IHtcclxuICAgICAgLy8gZGlzcGxheTogbm9uZTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMDB2aDtcclxuICAgICAgYmFja2dyb3VuZDogJHRoZW1lO1xyXG4gICAgICB0b3A6IDEyMHB4O1xyXG4gICAgICBsZWZ0OiAtMTAwJTtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICB1bCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdi50b2dnbGUtbWVudSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIG5hdi5hY3RpdmUtbmF2IHtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIE5hdmJhciBSZXNwb25zaXZlbmVzcyBBZGRlZFxyXG4iXX0= */"] });


/***/ }),

/***/ "UQIs":
/*!****************************************!*\
  !*** ./src/app/rank/rank.component.ts ***!
  \****************************************/
/*! exports provided: RankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankComponent", function() { return RankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function RankComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Records Found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RankComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Best Sulphuric");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Member");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.members[0].payload.doc.data().name, " ");
} }
function RankComponent_table_3_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r4 = ctx.$implicit;
    const indexOfelement_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](indexOfelement_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r4.payload.doc.data().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r4.payload.doc.data().posts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r4.payload.doc.data().score);
} }
function RankComponent_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RankComponent_table_3_tr_10_Template, 9, 4, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.members);
} }
class RankComponent {
    constructor(db) {
        this.db = db;
        db.collection('members', (res) => res.orderBy('score', 'desc'))
            .snapshotChanges()
            .subscribe((res) => (this.members = res));
    }
    log() {
        console.log(JSON.parse(this.members));
    }
    ngOnInit() { }
}
RankComponent.ɵfac = function RankComponent_Factory(t) { return new (t || RankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
RankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RankComponent, selectors: [["app-rank"]], decls: 4, vars: 3, consts: [[1, "rank"], ["class", "records", 4, "ngIf"], ["class", "text-img", 4, "ngIf"], [4, "ngIf"], [1, "records"], [1, "text-img"], [1, "sb"], [1, "role"], [1, "name"], [4, "ngFor", "ngForOf"]], template: function RankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RankComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RankComponent_div_2_Template, 7, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RankComponent_table_3_Template, 11, 1, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.members.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.members.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.members.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@charset \"UTF-8\";\nsection.rank[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 25px;\n  min-height: 70vh;\n}\nsection.rank[_ngcontent-%COMP%]   p.records[_ngcontent-%COMP%] {\n  z-index: -123123;\n  display: flex;\n  justify-content: flex-start;\n  font-family: \"PT Sans\", sans-serif;\n  font-weight: lighter;\n  opacity: 0.8;\n  height: 100vh;\n}\nsection.rank[_ngcontent-%COMP%]   div.text-img[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 25px;\n}\nsection.rank[_ngcontent-%COMP%]   div.text-img[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  text-transform: uppercase;\n  color: #182a30;\n  font-weight: 700;\n}\nsection.rank[_ngcontent-%COMP%]   div.text-img[_ngcontent-%COMP%]   p.sb[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\nsection.rank[_ngcontent-%COMP%]   div.text-img[_ngcontent-%COMP%]   p.role[_ngcontent-%COMP%] {\n  font-size: 4em;\n}\nsection.rank[_ngcontent-%COMP%]   div.text-img[_ngcontent-%COMP%]   p.name[_ngcontent-%COMP%] {\n  font-size: 1.09em;\n  color: #54defe;\n  border-radius: 5px;\n  background: #182a30;\n  padding: 10px;\n  text-align: center;\n  -webkit-user-select: none;\n          user-select: none;\n}\nsection.rank[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n}\nsection.rank[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], section.rank[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: center;\n  padding: 10px 0px;\n}\nsection.rank[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), section.rank[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  width: 60px;\n}\nsection.rank[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), section.rank[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 300px;\n}\nsection.rank[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), section.rank[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  width: 100px;\n}\nsection.rank[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), section.rank[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4) {\n  width: 100px;\n}\nsection.rank[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n}\nsection.rank[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n}\nsection.rank[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #182a30;\n}\nsection.rank[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   th[_ngcontent-%COMP%], section.rank[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  color: #54defe;\n}\nsection.rank[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #54defe;\n}\nsection.rank[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   th[_ngcontent-%COMP%], section.rank[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   td[_ngcontent-%COMP%] {\n  color: #182a30;\n}\nsection.rank[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   td[_ngcontent-%COMP%]:nth-child(1)::before {\n  font-family: \"Font Awesome 5 Free\";\n  content: \"\uF521\";\n  display: block;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJhbmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFzQkEsbUJBQUE7QUFwQko7QUFESTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxjQTVCRTtFQTZCRixnQkFBQTtBQUdOO0FBREk7RUFDRSxjQUFBO0FBR047QUFESTtFQUNFLGNBQUE7QUFHTjtBQURJO0VBQ0UsaUJBQUE7RUFDQSxjQXRDRTtFQXVDRixrQkFBQTtFQUNBLG1CQXpDRTtFQTBDRixhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBR047QUFDRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQUk7O0VBRUUsa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVOO0FBRE07O0VBQ0UsV0FBQTtBQUlSO0FBRk07O0VBQ0UsWUFBQTtBQUtSO0FBSE07O0VBQ0UsWUFBQTtBQU1SO0FBSk07O0VBQ0UsWUFBQTtBQU9SO0FBRkk7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBSU47QUFGSTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUFJTjtBQUZJO0VBQ0UsbUJBdEZFO0FBMEZSO0FBSE07O0VBRUUsY0F4RkE7QUE2RlI7QUFGSTtFQUNFLG1CQTVGRTtBQWdHUjtBQUhNOztFQUVFLGNBaEdBO0FBcUdSO0FBQ1U7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNaIiwiZmlsZSI6InJhbmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5zZWN0aW9uLnJhbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbWluLWhlaWdodDogNzB2aDtcbn1cbnNlY3Rpb24ucmFuayBwLnJlY29yZHMge1xuICB6LWluZGV4OiAtMTIzMTIzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG9wYWNpdHk6IDAuODtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbnNlY3Rpb24ucmFuayBkaXYudGV4dC1pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbnNlY3Rpb24ucmFuayBkaXYudGV4dC1pbWcgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMxODJhMzA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5zZWN0aW9uLnJhbmsgZGl2LnRleHQtaW1nIHAuc2Ige1xuICBmb250LXNpemU6IDJlbTtcbn1cbnNlY3Rpb24ucmFuayBkaXYudGV4dC1pbWcgcC5yb2xlIHtcbiAgZm9udC1zaXplOiA0ZW07XG59XG5zZWN0aW9uLnJhbmsgZGl2LnRleHQtaW1nIHAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4wOWVtO1xuICBjb2xvcjogIzU0ZGVmZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMTgyYTMwO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuc2VjdGlvbi5yYW5rIHRhYmxlIHtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuc2VjdGlvbi5yYW5rIHRhYmxlIHRoLFxuc2VjdGlvbi5yYW5rIHRhYmxlIHRkIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuc2VjdGlvbi5yYW5rIHRhYmxlIHRoOm50aC1jaGlsZCgxKSxcbnNlY3Rpb24ucmFuayB0YWJsZSB0ZDpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogNjBweDtcbn1cbnNlY3Rpb24ucmFuayB0YWJsZSB0aDpudGgtY2hpbGQoMiksXG5zZWN0aW9uLnJhbmsgdGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuc2VjdGlvbi5yYW5rIHRhYmxlIHRoOm50aC1jaGlsZCgzKSxcbnNlY3Rpb24ucmFuayB0YWJsZSB0ZDpudGgtY2hpbGQoMykge1xuICB3aWR0aDogMTAwcHg7XG59XG5zZWN0aW9uLnJhbmsgdGFibGUgdGg6bnRoLWNoaWxkKDQpLFxuc2VjdGlvbi5yYW5rIHRhYmxlIHRkOm50aC1jaGlsZCg0KSB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbnNlY3Rpb24ucmFuayB0cjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnB4O1xufVxuc2VjdGlvbi5yYW5rIHRyOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTZweDtcbn1cbnNlY3Rpb24ucmFuayB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiAjMTgyYTMwO1xufVxuc2VjdGlvbi5yYW5rIHRyOm50aC1jaGlsZChldmVuKSB0aCxcbnNlY3Rpb24ucmFuayB0cjpudGgtY2hpbGQoZXZlbikgdGQge1xuICBjb2xvcjogIzU0ZGVmZTtcbn1cbnNlY3Rpb24ucmFuayB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICM1NGRlZmU7XG59XG5zZWN0aW9uLnJhbmsgdHI6bnRoLWNoaWxkKG9kZCkgdGgsXG5zZWN0aW9uLnJhbmsgdHI6bnRoLWNoaWxkKG9kZCkgdGQge1xuICBjb2xvcjogIzE4MmEzMDtcbn1cbnNlY3Rpb24ucmFuayB0cjpudGgtY2hpbGQoMikgdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGNvbnRlbnQ6IFwi75ShXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */"] });


/***/ }),

/***/ "YWe2":
/*!*********************************!*\
  !*** ./src/app/login/member.ts ***!
  \*********************************/
/*! exports provided: member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "member", function() { return member; });
class member {
    constructor(name, posts, score) {
        this.name = name;
        this.posts = posts;
        this.score = score;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./courses/courses.component */ "C7aP");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _rank_rank_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rank/rank.component */ "UQIs");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./videos/videos.component */ "2ZvQ");
/* harmony import */ var _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blog-post/blog-post.component */ "3+vs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















const firebaseConfig = {
    apiKey: 'AIzaSyCT6RbzRH1uqcDBDNM3Xl4O9hZ66sbLYJQ',
    authDomain: 'sulphuric-bench-e3947.firebaseapp.com',
    projectId: 'sulphuric-bench-e3947',
    storageBucket: 'sulphuric-bench-e3947.appspot.com',
    messagingSenderId: '494231051016',
    appId: '1:494231051016:web:73496dd33a4389957c2abd',
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"].initializeApp(firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestoreModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"],
        _rank_rank_component__WEBPACK_IMPORTED_MODULE_13__["RankComponent"],
        _videos_videos_component__WEBPACK_IMPORTED_MODULE_14__["VideosComponent"],
        _products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"],
        _courses_courses_component__WEBPACK_IMPORTED_MODULE_8__["CoursesComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_15__["BlogPostComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_0__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestoreModule"]] }); })();


/***/ }),

/***/ "eh7G":
/*!********************************!*\
  !*** ./src/app/login/video.ts ***!
  \********************************/
/*! exports provided: video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "video", function() { return video; });
class video {
    constructor(title, code) {
        this.title = title;
        this.code = code;
    }
}


/***/ }),

/***/ "niYU":
/*!*******************************!*\
  !*** ./src/app/login/blog.ts ***!
  \*******************************/
/*! exports provided: blog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blog", function() { return blog; });
class blog {
    constructor(img, title, author, authorFB, body) {
        this.img = img;
        this.title = title;
        this.author = author;
        this.authorFB = authorFB;
        this.body = body;
    }
}


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 7, vars: 0, consts: [[1, "not"], [1, "wrap"], ["src", "./../../assets/404.jpg", "alt", "Not Found", "srcset", ""], ["routerLink", "/"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The requested URL was not found on this server :(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".not[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.not[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.not[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 550px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.not[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 21px;\n  font-color: #182a30;\n  margin-bottom: 25px;\n}\n.not[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #54defe;\n  border-radius: 5px;\n  background: #182a30;\n  padding: 10px 10px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"PT Sans\", sans-serif;\n  margin-top: 10px;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s;\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREY7QUFFRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQUo7QUFDSTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQ047QUFDSTtFQUVJLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQXBCQTtFQXNCRixtQkFBQTtBQUROO0FBR0k7RUFDRSxrQkFBQTtFQUNBLGNBekJFO0VBMEJGLGtCQUFBO0VBQ0EsbUJBNUJFO0VBNkJGLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUROIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0aGVtZTogIzE4MmEzMDtcclxuJGNvbG9yOiAjNTRkZWZlO1xyXG4ubm90IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLndyYXAge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDU1MHB4O1xyXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250OiB7XHJcbiAgICAgICAgZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBzaXplOiAyMXB4O1xyXG4gICAgICAgIGNvbG9yOiAkdGhlbWU7XHJcbiAgICAgIH1cclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICRjb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkdGhlbWU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "tjBN":
/*!*******************************!*\
  !*** ./src/app/login/book.ts ***!
  \*******************************/
/*! exports provided: book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "book", function() { return book; });
class book {
    constructor(img, bookname, author, mainprice, discountprice, buyLink) {
        this.img = img;
        this.bookname = bookname;
        this.author = author;
        this.mainprice = mainprice;
        this.discountprice = discountprice;
        this.buyLink = buyLink;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog-post/blog-post.component */ "3+vs");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog/blog.component */ "LgBW");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses/courses.component */ "C7aP");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.component */ "ziXE");
/* harmony import */ var _rank_rank_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rank/rank.component */ "UQIs");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./videos/videos.component */ "2ZvQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"] },
    {
        path: 'blog/:data',
        component: _blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_1__["BlogPostComponent"],
    },
    { path: 'courses', component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_3__["CoursesComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"] },
    { path: 'rank', component: _rank_rank_component__WEBPACK_IMPORTED_MODULE_8__["RankComponent"] },
    { path: 'videos', component: _videos_videos_component__WEBPACK_IMPORTED_MODULE_9__["VideosComponent"] },
    { path: 'adminlogin', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog */ "niYU");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book */ "tjBN");
/* harmony import */ var _course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course */ "QW0e");
/* harmony import */ var _member__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member */ "YWe2");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video */ "eh7G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function LoginComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_section_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Login To Website's Heart !!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_0_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.inputPasscode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.inputPasscode);
} }
function LoginComponent_section_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Add Book to Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Instruction:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Go ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "& upload the book image (Check Auto Delete Image to Don't Autodelete). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Get the URL & Enter that url in your browser then you will see your image in window. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Right-click on the image and hit \"Copy Image Address/URL\". This URL should be look like : https://i.ibb.co/\u20397 Digit Random Alphanumerical Code\u203A/\u2039Image Name in your Local Machine\u203A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Give it in Field 1.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Fill up other fields and click on Add button.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "form", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_section_1_div_3_Template_form_ngSubmit_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r19.addBook(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Give Link of Book Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_3_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r21.newBook.img = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Book Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_3_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r22.newBook.bookname = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Author Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "input", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_3_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r23.newBook.author = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Main Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_3_Template_input_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r24.newBook.mainprice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "After Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_3_Template_input_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r25.newBook.discountprice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Buying Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_3_Template_input_ngModelChange_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r26.newBook.buyLink = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_section_1_div_3_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r27.addAnother(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, " Add Another ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](25);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](37);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](41);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](45);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r13.invalid && _r13.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r6.newBook.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r14.invalid && _r14.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r6.newBook.bookname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r15.invalid && _r15.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r6.newBook.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r16.invalid && _r16.touched || ctx_r6.invalidPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r6.newBook.mainprice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r17.invalid && _r17.touched || ctx_r6.invalidDis);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r6.newBook.discountprice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r18.invalid && _r18.touched || ctx_r6.invalidDis);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r6.newBook.buyLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r6.added || _r12.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r6.submitText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r6.added);
} }
function LoginComponent_section_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Add Course to Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Instruction:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Go ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "& upload the course poster (Check Auto Delete Image to Don't Autodelete). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Get the URL & Enter that url in your browser then you will see your image in window. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Right-click on the poster and hit \"Copy Image Address/URL\". This URL should be look like : https://i.ibb.co/\u20397 Digit Random Alphanumerical Code\u203A/\u2039Image Name in your Local Machine\u203A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Give it in Field 1.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Fill up other fields and click on Add button.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "form", 19, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_section_1_div_6_Template_form_ngSubmit_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r35.addCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Give Link of Course Poster");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_6_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r37.newCourse.poster = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Course Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_6_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r38.newCourse.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Course Instructor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_6_Template_input_ngModelChange_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r39.newCourse.author = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "input", 28, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_6_Template_input_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r40.newCourse.mainprice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Duration(in hour)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_6_Template_input_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r41.newCourse.time = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Buying Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "input", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_6_Template_input_ngModelChange_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r42.newCourse.buyLink = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_section_1_div_6_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r43.addAnotherCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, " Add Another ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](25);
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29);
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](37);
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](41);
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](45);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r29.invalid && _r29.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r7.newCourse.poster);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r30.invalid && _r30.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r7.newCourse.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r31.invalid && _r31.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r7.newCourse.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r32.invalid && _r32.touched || ctx_r7.invalidCPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r7.newCourse.mainprice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r33.invalid && _r33.touched || ctx_r7.invalidTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r7.newCourse.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r34.invalid && _r34.touched || ctx_r7.invalidTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r7.newCourse.buyLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r7.courseAdded || _r28.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r7.courseSubText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r7.courseAdded);
} }
function LoginComponent_section_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Add Video to Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Instruction:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Give A Suitable Title in Field 1. (Bengali Recommended)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Go to Share, In the link, After you.tube/ you will see a alphanumerical code. Copy That Code and give it in field 2. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 19, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_section_1_div_9_Template_form_ngSubmit_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r47.addVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Video Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_9_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r49.newVideo.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "YouTube Code of Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "input", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_9_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r50.newVideo.code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_section_1_div_9_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r51.addAnotherVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Add Another ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r45.invalid && _r45.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r8.newVideo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r46.invalid && _r46.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r8.newVideo.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r8.videoAdded || _r44.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r8.videoSubText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r8.videoAdded);
} }
function LoginComponent_section_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Add Member to Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 19, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_section_1_div_12_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r56.addMember(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_12_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r58.newMember.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Total Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_12_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r57); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r59.newMember.posts = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_12_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r57); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r60.newMember.score = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_section_1_div_12_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r57); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r61.addAnotherMember(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Add Another ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](17);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r53.invalid && _r53.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r9.newMember.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r54.invalid && _r54.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r9.newMember.posts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r55.invalid && _r55.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r9.newMember.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r9.memberAdded || _r52.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r9.memberSubText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r9.memberAdded);
} }
function LoginComponent_section_1_div_15_table_4_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](member_r69.payload.doc.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](member_r69.payload.doc.data().name);
} }
function LoginComponent_section_1_div_15_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LoginComponent_section_1_div_15_table_4_tr_6_Template, 5, 2, "tr", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r62.members);
} }
function LoginComponent_section_1_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Update Member Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LoginComponent_section_1_div_15_table_4_Template, 7, 1, "table", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 19, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_section_1_div_15_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r71.updateMember(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_15_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r72); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r73.upMemberProps.uid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_15_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r72); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r74.mem.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Total Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 71, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_15_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r72); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r75.mem.posts = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "New score");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_15_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r72); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r76.mem.score = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_section_1_div_15_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r72); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r77.updateAnotherMember(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Add Another ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](18);
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.members.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r64.invalid && _r64.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.upMemberProps.uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r65.invalid && _r65.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.mem.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r66.invalid && _r66.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.mem.posts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r67.invalid && _r67.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r10.mem.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r10.umember || _r63.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r10.upMemText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r10.umember);
} }
function LoginComponent_section_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Add Blog to Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Image Size 500x400 px recommended");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 19, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_section_1_div_18_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r84.addBlog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Blog Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_18_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r85); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r86.newBlog.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 80, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_18_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r85); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r87.newBlog.author = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Author FB ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "input", 82, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_18_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r85); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r88.newBlog.authorFB = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Poster Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 84, 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_18_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r85); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r89.newBlog.img = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Blog Body");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "textarea", 86, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_1_div_18_Template_textarea_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r85); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r90.newBlog.body = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_section_1_div_18_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r85); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r91.addAnotherBlog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " Add Another ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](28);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r79.invalid && _r79.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r11.newBlog.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r80.invalid && _r80.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r11.newBlog.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r81.invalid && _r81.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r11.newBlog.authorFB);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r82.invalid && _r82.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r11.newBlog.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("invalidinput", _r83.invalid && _r83.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r11.newBlog.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r11.blogAdded || _r78.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r11.blogMemText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r11.blogAdded);
} }
function LoginComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r92.showProducts = !ctx_r92.showProducts; return ctx_r92.showProduct = ctx_r92.showProduct === "Hide" ? "Show" : "Hide"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, LoginComponent_section_1_div_3_Template, 51, 21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r94.showCourses = !ctx_r94.showCourses; return ctx_r94.showCourse = ctx_r94.showCourse === "Hide" ? "Show" : "Hide"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, LoginComponent_section_1_div_6_Template, 51, 21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r93); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r95.showVideos = !ctx_r95.showVideos; return ctx_r95.showVideo = ctx_r95.showVideo === "Hide" ? "Show" : "Hide"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, LoginComponent_section_1_div_9_Template, 26, 9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r93); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r96.showMembers = !ctx_r96.showMembers; return ctx_r96.showMember = ctx_r96.showMember === "Hide" ? "Show" : "Hide"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, LoginComponent_section_1_div_12_Template, 23, 12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r93); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r97.showUMembers = !ctx_r97.showUMembers; return ctx_r97.showUMember = ctx_r97.showUMember === "Hide" ? "Show" : "Hide"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, LoginComponent_section_1_div_15_Template, 28, 16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r93); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); ctx_r98.showBlogs = !ctx_r98.showBlogs; return ctx_r98.showBlog = ctx_r98.showBlog === "Hide" ? "Show" : "Hide"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, LoginComponent_section_1_div_18_Template, 35, 18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.showProduct, " Product Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.showCourse, " Course Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showCourses);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.showVideo, " Video Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showVideos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.showMember, " Member Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.showUMember, " Member Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showUMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.showBlog, " Blog Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.showBlogs);
} }
class LoginComponent {
    constructor(db) {
        this.db = db;
        this.loggedIn = false;
        this.show = true;
        this.password = 'Bench.Sulphur2020';
        this.showProduct = 'Show';
        this.showCourse = 'Show';
        this.showVideo = 'Show';
        this.showMember = 'Show';
        this.showUMember = 'Show';
        this.showBlog = 'Show';
        this.showProducts = false;
        this.showCourses = false;
        this.showVideos = false;
        this.showMembers = false;
        this.showUMembers = false;
        this.showBlogs = false;
        this.newBook = new _book__WEBPACK_IMPORTED_MODULE_1__["book"]('', '', '', '', '', '');
        this.submitText = 'Add';
        this.added = false;
        this.invalidPrice = false;
        this.invalidDis = false;
        this.valid = true;
        this.newCourse = new _course__WEBPACK_IMPORTED_MODULE_2__["course"]('', '', '', '', '', '');
        this.courseSubText = 'Add';
        this.courseAdded = false;
        this.invalidCPrice = false;
        this.invalidTime = false;
        this.courseValid = true;
        this.newVideo = new _video__WEBPACK_IMPORTED_MODULE_4__["video"]('', '');
        this.videoSubText = 'Add';
        this.videoAdded = false;
        this.newMember = new _member__WEBPACK_IMPORTED_MODULE_3__["member"]('', '', '');
        this.memberAdded = false;
        this.memberSubText = 'Add';
        this.upMemberProps = {
            uid: '',
        };
        this.mem = {
            name: '',
            posts: '',
            score: '',
        };
        this.umember = false;
        this.upMemText = 'Update';
        this.newBlog = new _blog__WEBPACK_IMPORTED_MODULE_0__["blog"]('', '', '', '', '');
        this.blogMemText = 'Add';
        this.blogAdded = false;
        this.monthArray = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'June',
            'July',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec',
        ];
        db.collection('members', (res) => res.orderBy('score', 'desc'))
            .snapshotChanges()
            .subscribe((res) => (this.members = res));
    }
    login() {
        if (this.inputPasscode == this.password) {
            this.loggedIn = true;
        }
        else {
            this.show = false;
        }
    }
    addBook() {
        const re = /^\d+$/;
        if (!re.test(this.newBook.mainprice)) {
            this.invalidPrice = true;
            this.valid = false;
        }
        else {
            this.invalidPrice = false;
            this.valid = true;
        }
        if (!re.test(this.newBook.discountprice)) {
            this.invalidDis = true;
            this.valid = false;
        }
        else {
            this.valid = true;
            this.invalidDis = false;
        }
        if (this.valid) {
            this.submitText = 'Added';
            this.added = true;
            let p = {
                img: this.newBook.img,
                name: this.newBook.bookname,
                author: this.newBook.author,
                mainprice: this.newBook.mainprice,
                discountprice: this.newBook.discountprice,
                buyLink: this.newBook.buyLink,
                date: new Date().getTime(),
            };
            this.db.collection('products').add(p);
        }
    }
    addAnother() {
        this.added = !this.added;
        this.submitText = 'Add';
        this.newBook = new _book__WEBPACK_IMPORTED_MODULE_1__["book"]('', '', '', '', '', '');
    }
    addCourse() {
        const re = /^\d+$/;
        if (!re.test(this.newCourse.mainprice)) {
            this.invalidCPrice = true;
            this.courseValid = false;
        }
        else {
            this.invalidCPrice = false;
            this.courseValid = true;
        }
        if (!re.test(this.newCourse.time)) {
            this.invalidTime = true;
            this.courseValid = false;
        }
        else {
            this.courseValid = true;
            this.invalidTime = false;
        }
        if (this.courseValid) {
            this.courseSubText = 'Added';
            this.courseAdded = true;
            let course = {
                poster: this.newCourse.poster,
                name: this.newCourse.name,
                author: this.newCourse.author,
                mainprice: this.newCourse.mainprice,
                time: this.newCourse.time,
                buyLink: this.newCourse.buyLink,
                date: new Date().getTime(),
            };
            this.db.collection('courses').add(course);
        }
    }
    addAnotherCourse() {
        this.courseAdded = !this.courseAdded;
        this.courseSubText = 'Add';
        this.newCourse = new _course__WEBPACK_IMPORTED_MODULE_2__["course"]('', '', '', '', '', '');
    }
    addVideo() {
        this.videoSubText = 'Added';
        this.videoAdded = true;
        let video = {
            title: this.newVideo.title,
            code: this.newVideo.code,
            date: new Date().getTime(),
        };
        this.db.collection('videos').add(video);
    }
    addAnotherVideo() {
        this.videoAdded = !this.videoAdded;
        this.videoSubText = 'Add';
        this.newVideo = new _video__WEBPACK_IMPORTED_MODULE_4__["video"]('', '');
    }
    addMember() {
        this.memberSubText = 'Added';
        this.memberAdded = true;
        let member = {
            name: this.newMember.name,
            posts: this.newMember.posts,
            score: parseInt(this.newMember.score),
        };
        this.db.collection('members').add(member);
    }
    addAnotherMember() {
        this.memberAdded = !this.memberAdded;
        this.memberSubText = 'Add';
        this.newMember = new _member__WEBPACK_IMPORTED_MODULE_3__["member"]('', '', '');
    }
    updateMember() {
        this.umember = !this.umember;
        this.upMemText = 'Updated';
        this.db
            .collection('members')
            .doc(this.upMemberProps.uid)
            .update({
            name: this.mem.name,
            posts: this.mem.posts,
            score: parseInt(this.mem.score),
        });
    }
    updateAnotherMember() {
        this.umember = !this.umember;
        this.upMemText = 'Update';
        this.upMemberProps.uid = '';
        this.mem.score = '';
        this.mem.name = '';
        this.mem.posts = '';
    }
    addBlog() {
        this.blogMemText = 'Added';
        this.blogAdded = true;
        let blog = {
            img: this.newBlog.img,
            title: this.newBlog.title,
            author: this.newBlog.author,
            authorFB: this.newBlog.authorFB,
            body: this.newBlog.body,
            date: new Date().getTime(),
            exactDate: new Date().getDate() +
                ' ' +
                this.monthArray[new Date().getMonth()] +
                ' ' +
                new Date().getFullYear(),
            exactTime: (new Date().getHours() < 10
                ? '0' + new Date().getHours()
                : new Date().getHours()) +
                ':' +
                (new Date().getMinutes() < 10
                    ? '0' + new Date().getMinutes()
                    : new Date().getMinutes()) +
                ':' +
                (new Date().getSeconds() < 10
                    ? '0' + new Date().getSeconds()
                    : new Date().getSeconds()),
        };
        this.db.collection('blogs').add(blog);
    }
    addAnotherBlog() {
        this.blogAdded = !this.blogAdded;
        this.blogMemText = 'Add';
        this.newBlog = new _blog__WEBPACK_IMPORTED_MODULE_0__["blog"]('', '', '', '', '');
    }
    ngOnInit() { }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 2, consts: [["class", "login", 4, "ngIf"], ["class", "maincontainer", 4, "ngIf"], [1, "login"], [3, "ngSubmit"], ["for", "password"], ["name", "passcode", "type", "password", "required", "", 3, "ngModel", "ngModelChange"], ["passcode", "ngModel"], ["type", "submit"], [1, "maincontainer"], [1, "showIt", 3, "click"], ["class", "container1", 4, "ngIf"], ["class", "container2", 4, "ngIf"], ["class", "container3", 4, "ngIf"], ["class", "container4", 4, "ngIf"], ["class", "container5", 4, "ngIf"], ["class", "container6", 4, "ngIf"], [1, "container1"], [1, "instruction"], ["href", "http://imgbb.com", "target", "blank"], ["method", "post", "autocomplete", "off", "novalidate", "", 3, "ngSubmit"], ["bookData", "ngForm"], ["for", "img"], ["name", "imglink", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["imgLink", "ngModel"], ["type", "text", "required", "", "name", "bookname", 3, "ngModel", "ngModelChange"], ["bookname", "ngModel"], ["name", "author", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["author", "ngModel"], ["type", "text", "required", "", "name", "mainPrice", 3, "ngModel", "ngModelChange"], ["mainprice", "ngModel"], ["type", "text", "required", "", "name", "discount", 3, "ngModel", "ngModelChange"], ["discountprice", "ngModel"], ["type", "text", "required", "", "name", "buyinLink", 3, "ngModel", "ngModelChange"], ["buyinLink", "ngModel"], [1, "buttons"], ["type", "submit", 3, "disabled"], [1, "another", 3, "disabled", "click"], [1, "container2"], ["courseData", "ngForm"], ["name", "posterlink", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["posterLink", "ngModel"], ["type", "text", "required", "", "name", "coursename", 3, "ngModel", "ngModelChange"], ["coursename", "ngModel"], ["name", "authorC", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["authorC", "ngModel"], ["mainPrice", "ngModel"], ["type", "text", "required", "", "name", "time", 3, "ngModel", "ngModelChange"], ["time", "ngModel"], ["type", "text", "required", "", "name", "buyingLink", 3, "ngModel", "ngModelChange"], ["buyingLink", "ngModel"], [1, "container3"], ["videoData", "ngForm"], ["type", "text", "required", "", "name", "videoTitle", 3, "ngModel", "ngModelChange"], ["videoTitle", "ngModel"], ["name", "code", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["code", "ngModel"], [1, "container4"], ["memberData", "ngForm"], ["name", "name", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["name", "posts", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["posts", "ngModel"], ["name", "score", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["score", "ngModel"], [1, "container5"], [4, "ngIf"], ["memberUpData", "ngForm"], ["name", "uid", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["uid", "ngModel"], ["name", "nname", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["nname", "ngModel"], ["name", "ttp", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["ttp", "ngModel"], ["name", "nscore", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["nscore", "ngModel"], [4, "ngFor", "ngForOf"], [1, "container6"], ["blogData", "ngForm"], ["name", "titleBlog", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["titleBlog", "ngModel"], ["name", "blogAuthor", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["blogAuthor", "ngModel"], ["name", "blogAuthorFB", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["blogAuthorFB", "ngModel"], ["name", "blogPoster", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["blogPoster", "ngModel"], ["name", "blogBody", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["blogBody", "ngModel"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, LoginComponent_section_0_Template, 10, 1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoginComponent_section_1_Template, 19, 12, "section", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loggedIn && ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["@charset \"UTF-8\";\nsection.login[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  min-height: 60vh;\n}\nsection.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #182a30;\n  padding: 20px 20px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n}\nsection.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  color: #54defe;\n  margin-bottom: 20px;\n  width: 100%;\n  text-align: center;\n}\nsection.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  line-height: 34px;\n  color: #54defe;\n}\nsection.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  padding: 7px 10px 7px 10px;\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}\nsection.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #182a30;\n  border-radius: 5px;\n  background: #54defe;\n  padding: 10px 5px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"PT Sans\", sans-serif;\n  margin-top: 25px;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  width: 50px;\n  cursor: pointer;\n  transition: 0.2s;\n}\nsection.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 10px #54defe, 0 0 13px #54defe, 0 0 26px #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 25px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   button.showIt[_ngcontent-%COMP%] {\n  color: #182a30;\n  border-radius: 5px;\n  background: #54defe;\n  padding: 10px 5px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"PT Sans\", sans-serif;\n  margin-top: 25px;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  width: 120px;\n  cursor: pointer;\n  transition: 0.2s;\n  margin-bottom: 25px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: #0084ff;\n  padding: 50px 25px;\n  width: 70%;\n  border-radius: 25px;\n  margin-bottom: 25px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  margin-bottom: 20px;\n  width: 100%;\n  text-align: center;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #182a30;\n  padding: 50px 20px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  line-height: 34px;\n  color: #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  text-align: center;\n  padding: 7px 10px 7px 10px;\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.invalidinput[_ngcontent-%COMP%], section.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea.invalidinput[_ngcontent-%COMP%] {\n  border: 1px solid #db3131;\n  box-shadow: 0px 0px 17px #db3131;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #182a30;\n  border-radius: 5px;\n  background: #54defe;\n  padding: 10px 5px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"PT Sans\", sans-serif;\n  margin-top: 25px;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  width: 50px;\n  cursor: pointer;\n  transition: 0.2s;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 10px #54defe, 0 0 13px #54defe, 0 0 26px #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover {\n  box-shadow: none;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button.another[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  width: 100px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  background: #182a30;\n  padding: 50px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n  min-width: 50px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  color: #54defe;\n  margin-bottom: 20px;\n  text-align: start;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  color: #54defe;\n  margin-bottom: 10px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container1[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: #0084ff;\n  padding: 50px 25px;\n  width: 70%;\n  border-radius: 25px;\n  margin-bottom: 25px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  margin-bottom: 20px;\n  width: 100%;\n  text-align: center;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #182a30;\n  padding: 50px 20px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  line-height: 34px;\n  color: #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  padding: 7px 10px 7px 10px;\n  text-align: center;\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.invalidinput[_ngcontent-%COMP%], section.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea.invalidinput[_ngcontent-%COMP%] {\n  border: 1px solid #db3131;\n  box-shadow: 0px 0px 17px #db3131;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #182a30;\n  border-radius: 5px;\n  background: #54defe;\n  padding: 10px 5px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"PT Sans\", sans-serif;\n  margin-top: 25px;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  width: 50px;\n  cursor: pointer;\n  transition: 0.2s;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 10px #54defe, 0 0 13px #54defe, 0 0 26px #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover {\n  box-shadow: none;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button.another[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  width: 100px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  background: #182a30;\n  padding: 50px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n  min-width: 50px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  color: #54defe;\n  margin-bottom: 20px;\n  text-align: start;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  color: #54defe;\n  margin-bottom: 10px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container2[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: #0084ff;\n  padding: 50px 25px;\n  width: 70%;\n  border-radius: 25px;\n  margin-bottom: 25px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  margin-bottom: 20px;\n  width: 100%;\n  text-align: center;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #182a30;\n  padding: 50px 20px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  line-height: 34px;\n  color: #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  padding: 7px 10px 7px 10px;\n  text-align: center;\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.invalidinput[_ngcontent-%COMP%], section.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea.invalidinput[_ngcontent-%COMP%] {\n  border: 1px solid #db3131;\n  box-shadow: 0px 0px 17px #db3131;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #182a30;\n  border-radius: 5px;\n  background: #54defe;\n  padding: 10px 5px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"PT Sans\", sans-serif;\n  margin-top: 25px;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  width: 50px;\n  cursor: pointer;\n  transition: 0.2s;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 10px #54defe, 0 0 13px #54defe, 0 0 26px #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover {\n  box-shadow: none;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button.another[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  width: 100px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  background: #182a30;\n  padding: 50px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n  min-width: 50px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  color: #54defe;\n  margin-bottom: 20px;\n  text-align: start;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  color: #54defe;\n  margin-bottom: 10px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container3[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: #0084ff;\n  padding: 50px 25px;\n  width: 70%;\n  border-radius: 25px;\n  margin-bottom: 25px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  margin-bottom: 20px;\n  width: 100%;\n  text-align: center;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #182a30;\n  padding: 50px 20px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  line-height: 34px;\n  color: #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  text-align: center;\n  padding: 7px 10px 7px 10px;\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.invalidinput[_ngcontent-%COMP%], section.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea.invalidinput[_ngcontent-%COMP%] {\n  border: 1px solid #db3131;\n  box-shadow: 0px 0px 17px #db3131;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #182a30;\n  border-radius: 5px;\n  background: #54defe;\n  padding: 10px 5px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"PT Sans\", sans-serif;\n  margin-top: 25px;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  width: 50px;\n  cursor: pointer;\n  transition: 0.2s;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 10px #54defe, 0 0 13px #54defe, 0 0 26px #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover {\n  box-shadow: none;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button.another[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  width: 100px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  background: #182a30;\n  padding: 50px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n  min-width: 50px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  color: #54defe;\n  margin-bottom: 20px;\n  text-align: start;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  color: #54defe;\n  margin-bottom: 10px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container4[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: #0084ff;\n  padding: 50px 25px;\n  width: 70%;\n  border-radius: 25px;\n  margin-bottom: 25px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  margin-bottom: 20px;\n  width: 100%;\n  text-align: center;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], section.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  font-weight: 700;\n  text-align: center;\n  padding: 10px 0px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), section.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\n  width: 100px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), section.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 365px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #182a30;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   th[_ngcontent-%COMP%], section.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  color: #54defe;\n  text-align: center;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   th[_ngcontent-%COMP%], section.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd)   td[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #182a30;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   td[_ngcontent-%COMP%]:nth-child(1)::before {\n  font-family: \"Font Awesome 5 Free\";\n  content: \"\uF521\";\n  display: block;\n  font-size: 13px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #182a30;\n  padding: 50px 20px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  line-height: 34px;\n  color: #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  text-align: center;\n  padding: 7px 10px 7px 10px;\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.invalidinput[_ngcontent-%COMP%], section.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea.invalidinput[_ngcontent-%COMP%] {\n  border: 1px solid #db3131;\n  box-shadow: 0px 0px 17px #db3131;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #182a30;\n  border-radius: 5px;\n  background: #54defe;\n  padding: 10px 5px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"PT Sans\", sans-serif;\n  margin-top: 25px;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  width: 80px;\n  cursor: pointer;\n  transition: 0.2s;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 10px #54defe, 0 0 13px #54defe, 0 0 26px #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover {\n  box-shadow: none;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button.another[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  width: 100px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  background: #182a30;\n  padding: 50px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n  min-width: 50px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  color: #54defe;\n  margin-bottom: 20px;\n  text-align: start;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  color: #54defe;\n  margin-bottom: 10px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container5[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: #0084ff;\n  padding: 50px 25px;\n  width: 70%;\n  border-radius: 25px;\n  margin-bottom: 25px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  margin-bottom: 20px;\n  width: 100%;\n  text-align: center;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #182a30;\n  padding: 50px 20px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  line-height: 34px;\n  color: #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  text-align: center;\n  padding: 7px 10px 7px 10px;\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  padding: 10px 10px 10px 10px;\n  height: 187px;\n  color: #182a30;\n  font-family: \"PT Sans\", sans-serif;\n  font-size: 16px;\n  resize: none;\n  width: 90%;\n  height: 500px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.invalidinput[_ngcontent-%COMP%], section.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea.invalidinput[_ngcontent-%COMP%] {\n  border: 1px solid #db3131;\n  box-shadow: 0px 0px 17px #db3131;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #182a30;\n  border-radius: 5px;\n  background: #54defe;\n  padding: 10px 5px;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"PT Sans\", sans-serif;\n  margin-top: 25px;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  border: none;\n  width: 80px;\n  cursor: pointer;\n  transition: 0.2s;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 10px #54defe, 0 0 13px #54defe, 0 0 26px #54defe;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover {\n  box-shadow: none;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button.another[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  width: 100px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%] {\n  margin-left: 25px;\n  background: #182a30;\n  padding: 50px;\n  margin-bottom: 25px;\n  border-radius: 15px;\n  min-width: 50px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  color: #54defe;\n  margin-bottom: 20px;\n  text-align: start;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: PT Sans;\n  color: #54defe;\n  margin-bottom: 10px;\n}\nsection.maincontainer[_ngcontent-%COMP%]   .container6[_ngcontent-%COMP%]   .instruction[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #54defe;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFYSTtFQVlKLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDRSxvQkFBQTtFQUNBLGNBaEJFO0VBaUJGLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRU47QUFBSTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQXhCRTtBQTBCUjtBQUFJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQWpDRTtFQWtDRixrQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVOO0FBQUk7RUFDRSxjQXZDRTtFQXdDRixrQkFBQTtFQUNBLG1CQXhDRTtFQXlDRixpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVOO0FBRE07RUFDRSxnRUFBQTtBQUdSO0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNFLGNBakVJO0VBa0VKLGtCQUFBO0VBQ0EsbUJBbEVJO0VBbUVKLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFFO0VBQ0UsYUFBQTtF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Q0Usb0JBQUE7RUFDQSxjQWx5QkY7RUFteUJFLG1CQUFBO0FBekNWO0FBMkNVO0VBQ0UsY0F0eUJKO0FBNnZCUiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbnNlY3Rpb24ubG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNjB2aDtcbn1cbnNlY3Rpb24ubG9naW4gZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMTgyYTMwO1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5zZWN0aW9uLmxvZ2luIGZvcm0gaDIge1xuICBmb250LWZhbWlseTogUFQgU2FucztcbiAgY29sb3I6ICM1NGRlZmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5zZWN0aW9uLmxvZ2luIGZvcm0gbGFiZWwge1xuICBmb250LWZhbWlseTogUFQgU2FucztcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGNvbG9yOiAjNTRkZWZlO1xufVxuc2VjdGlvbi5sb2dpbiBmb3JtIGlucHV0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA3cHggMTBweCA3cHggMTBweDtcbiAgY29sb3I6ICMxODJhMzA7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnNlY3Rpb24ubG9naW4gZm9ybSBidXR0b24ge1xuICBjb2xvcjogIzE4MmEzMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjNTRkZWZlO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuc2VjdGlvbi5sb2dpbiBmb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM1NGRlZmUsIDAgMCAxM3B4ICM1NGRlZmUsIDAgMCAyNnB4ICM1NGRlZmU7XG59XG5cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgYnV0dG9uLnNob3dJdCB7XG4gIGNvbG9yOiAjMTgyYTMwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM1NGRlZmU7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIxIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6ICMwMDg0ZmY7XG4gIHBhZGRpbmc6IDUwcHggMjVweDtcbiAgd2lkdGg6IDcwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMSBoMiB7XG4gIGZvbnQtZmFtaWx5OiBQVCBTYW5zO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIxIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzE4MmEzMDtcbiAgcGFkZGluZzogNTBweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIxIGZvcm0gbGFiZWwge1xuICBmb250LWZhbWlseTogUFQgU2FucztcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGNvbG9yOiAjNTRkZWZlO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIxIGZvcm0gaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogN3B4IDEwcHggN3B4IDEwcHg7XG4gIGNvbG9yOiAjMTgyYTMwO1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjEgZm9ybSBpbnB1dC5pbnZhbGlkaW5wdXQsXG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjEgZm9ybSB0ZXh0YXJlYS5pbnZhbGlkaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGIzMTMxO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE3cHggI2RiMzEzMTtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMSBmb3JtIC5idXR0b25zIGJ1dHRvbiB7XG4gIGNvbG9yOiAjMTgyYTMwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM1NGRlZmU7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjEgZm9ybSAuYnV0dG9ucyBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjNTRkZWZlLCAwIDAgMTNweCAjNTRkZWZlLCAwIDAgMjZweCAjNTRkZWZlO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIxIGZvcm0gLmJ1dHRvbnMgYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjEgZm9ybSAuYnV0dG9ucyBidXR0b246ZGlzYWJsZWQ6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIxIGZvcm0gLmJ1dHRvbnMgYnV0dG9uLmFub3RoZXIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIxIC5pbnN0cnVjdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMTgyYTMwO1xuICBwYWRkaW5nOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjEgLmluc3RydWN0aW9uIGgyIHtcbiAgZm9udC1mYW1pbHk6IFBUIFNhbnM7XG4gIGNvbG9yOiAjNTRkZWZlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMSAuaW5zdHJ1Y3Rpb24gb2wgbGkge1xuICBmb250LWZhbWlseTogUFQgU2FucztcbiAgY29sb3I6ICM1NGRlZmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjEgLmluc3RydWN0aW9uIG9sIGxpIGEge1xuICBjb2xvcjogIzU0ZGVmZTtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiAjMDA4NGZmO1xuICBwYWRkaW5nOiA1MHB4IDI1cHg7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjIgaDIge1xuICBmb250LWZhbWlseTogUFQgU2FucztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMiBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxODJhMzA7XG4gIHBhZGRpbmc6IDUwcHggMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMiBmb3JtIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFBUIFNhbnM7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBjb2xvcjogIzU0ZGVmZTtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMiBmb3JtIGlucHV0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA3cHggMTBweCA3cHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzE4MmEzMDtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIyIGZvcm0gaW5wdXQuaW52YWxpZGlucHV0LFxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIyIGZvcm0gdGV4dGFyZWEuaW52YWxpZGlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiMzEzMTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxN3B4ICNkYjMxMzE7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjIgZm9ybSAuYnV0dG9ucyBidXR0b24ge1xuICBjb2xvcjogIzE4MmEzMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjNTRkZWZlO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIyIGZvcm0gLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzU0ZGVmZSwgMCAwIDEzcHggIzU0ZGVmZSwgMCAwIDI2cHggIzU0ZGVmZTtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMiBmb3JtIC5idXR0b25zIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuMztcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIyIGZvcm0gLmJ1dHRvbnMgYnV0dG9uOmRpc2FibGVkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMiBmb3JtIC5idXR0b25zIGJ1dHRvbi5hbm90aGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMiAuaW5zdHJ1Y3Rpb24ge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgYmFja2dyb3VuZDogIzE4MmEzMDtcbiAgcGFkZGluZzogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIyIC5pbnN0cnVjdGlvbiBoMiB7XG4gIGZvbnQtZmFtaWx5OiBQVCBTYW5zO1xuICBjb2xvcjogIzU0ZGVmZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjIgLmluc3RydWN0aW9uIG9sIGxpIHtcbiAgZm9udC1mYW1pbHk6IFBUIFNhbnM7XG4gIGNvbG9yOiAjNTRkZWZlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIyIC5pbnN0cnVjdGlvbiBvbCBsaSBhIHtcbiAgY29sb3I6ICM1NGRlZmU7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZDogIzAwODRmZjtcbiAgcGFkZGluZzogNTBweCAyNXB4O1xuICB3aWR0aDogNzAlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIzIGgyIHtcbiAgZm9udC1mYW1pbHk6IFBUIFNhbnM7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjMgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMTgyYTMwO1xuICBwYWRkaW5nOiA1MHB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjMgZm9ybSBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBQVCBTYW5zO1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgY29sb3I6ICM1NGRlZmU7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjMgZm9ybSBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogN3B4IDEwcHggN3B4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxODJhMzA7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMyBmb3JtIGlucHV0LmludmFsaWRpbnB1dCxcbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMyBmb3JtIHRleHRhcmVhLmludmFsaWRpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYjMxMzE7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTdweCAjZGIzMTMxO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIzIGZvcm0gLmJ1dHRvbnMgYnV0dG9uIHtcbiAgY29sb3I6ICMxODJhMzA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogIzU0ZGVmZTtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMyBmb3JtIC5idXR0b25zIGJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM1NGRlZmUsIDAgMCAxM3B4ICM1NGRlZmUsIDAgMCAyNnB4ICM1NGRlZmU7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjMgZm9ybSAuYnV0dG9ucyBidXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMyBmb3JtIC5idXR0b25zIGJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjMgZm9ybSAuYnV0dG9ucyBidXR0b24uYW5vdGhlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjMgLmluc3RydWN0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMxODJhMzA7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMyAuaW5zdHJ1Y3Rpb24gaDIge1xuICBmb250LWZhbWlseTogUFQgU2FucztcbiAgY29sb3I6ICM1NGRlZmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXIzIC5pbnN0cnVjdGlvbiBvbCBsaSB7XG4gIGZvbnQtZmFtaWx5OiBQVCBTYW5zO1xuICBjb2xvcjogIzU0ZGVmZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyMyAuaW5zdHJ1Y3Rpb24gb2wgbGkgYSB7XG4gIGNvbG9yOiAjNTRkZWZlO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6ICMwMDg0ZmY7XG4gIHBhZGRpbmc6IDUwcHggMjVweDtcbiAgd2lkdGg6IDcwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNCBoMiB7XG4gIGZvbnQtZmFtaWx5OiBQVCBTYW5zO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI0IGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzE4MmEzMDtcbiAgcGFkZGluZzogNTBweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI0IGZvcm0gbGFiZWwge1xuICBmb250LWZhbWlseTogUFQgU2FucztcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGNvbG9yOiAjNTRkZWZlO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI0IGZvcm0gaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogN3B4IDEwcHggN3B4IDEwcHg7XG4gIGNvbG9yOiAjMTgyYTMwO1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjQgZm9ybSBpbnB1dC5pbnZhbGlkaW5wdXQsXG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjQgZm9ybSB0ZXh0YXJlYS5pbnZhbGlkaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGIzMTMxO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE3cHggI2RiMzEzMTtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNCBmb3JtIC5idXR0b25zIGJ1dHRvbiB7XG4gIGNvbG9yOiAjMTgyYTMwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM1NGRlZmU7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjQgZm9ybSAuYnV0dG9ucyBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjNTRkZWZlLCAwIDAgMTNweCAjNTRkZWZlLCAwIDAgMjZweCAjNTRkZWZlO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI0IGZvcm0gLmJ1dHRvbnMgYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjQgZm9ybSAuYnV0dG9ucyBidXR0b246ZGlzYWJsZWQ6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI0IGZvcm0gLmJ1dHRvbnMgYnV0dG9uLmFub3RoZXIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI0IC5pbnN0cnVjdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMTgyYTMwO1xuICBwYWRkaW5nOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjQgLmluc3RydWN0aW9uIGgyIHtcbiAgZm9udC1mYW1pbHk6IFBUIFNhbnM7XG4gIGNvbG9yOiAjNTRkZWZlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNCAuaW5zdHJ1Y3Rpb24gb2wgbGkge1xuICBmb250LWZhbWlseTogUFQgU2FucztcbiAgY29sb3I6ICM1NGRlZmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjQgLmluc3RydWN0aW9uIG9sIGxpIGEge1xuICBjb2xvcjogIzU0ZGVmZTtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiAjMDA4NGZmO1xuICBwYWRkaW5nOiA1MHB4IDI1cHg7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjUgaDIge1xuICBmb250LWZhbWlseTogUFQgU2FucztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNSAuaW5zdHJ1Y3Rpb24gdGFibGUge1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjUgLmluc3RydWN0aW9uIHRhYmxlIHRoLFxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI1IC5pbnN0cnVjdGlvbiB0YWJsZSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNSAuaW5zdHJ1Y3Rpb24gdGFibGUgdGg6bnRoLWNoaWxkKDEpLFxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI1IC5pbnN0cnVjdGlvbiB0YWJsZSB0ZDpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogMTAwcHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjUgLmluc3RydWN0aW9uIHRhYmxlIHRoOm50aC1jaGlsZCgyKSxcbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNSAuaW5zdHJ1Y3Rpb24gdGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDM2NXB4O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI1IC5pbnN0cnVjdGlvbiB0cjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnB4O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI1IC5pbnN0cnVjdGlvbiB0cjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTZweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE2cHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjUgLmluc3RydWN0aW9uIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICMxODJhMzA7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjUgLmluc3RydWN0aW9uIHRyOm50aC1jaGlsZChldmVuKSB0aCxcbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNSAuaW5zdHJ1Y3Rpb24gdHI6bnRoLWNoaWxkKGV2ZW4pIHRkIHtcbiAgY29sb3I6ICM1NGRlZmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNSAuaW5zdHJ1Y3Rpb24gdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjNTRkZWZlO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI1IC5pbnN0cnVjdGlvbiB0cjpudGgtY2hpbGQob2RkKSB0aCxcbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNSAuaW5zdHJ1Y3Rpb24gdHI6bnRoLWNoaWxkKG9kZCkgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMTgyYTMwO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI1IC5pbnN0cnVjdGlvbiB0cjpudGgtY2hpbGQoMikgdGQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGNvbnRlbnQ6IFwi75ShXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjUgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMTgyYTMwO1xuICBwYWRkaW5nOiA1MHB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjUgZm9ybSBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBQVCBTYW5zO1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgY29sb3I6ICM1NGRlZmU7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjUgZm9ybSBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA3cHggMTBweCA3cHggMTBweDtcbiAgY29sb3I6ICMxODJhMzA7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNSBmb3JtIGlucHV0LmludmFsaWRpbnB1dCxcbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNSBmb3JtIHRleHRhcmVhLmludmFsaWRpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYjMxMzE7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTdweCAjZGIzMTMxO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI1IGZvcm0gLmJ1dHRvbnMgYnV0dG9uIHtcbiAgY29sb3I6ICMxODJhMzA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogIzU0ZGVmZTtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNSBmb3JtIC5idXR0b25zIGJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM1NGRlZmUsIDAgMCAxM3B4ICM1NGRlZmUsIDAgMCAyNnB4ICM1NGRlZmU7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjUgZm9ybSAuYnV0dG9ucyBidXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNSBmb3JtIC5idXR0b25zIGJ1dHRvbjpkaXNhYmxlZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjUgZm9ybSAuYnV0dG9ucyBidXR0b24uYW5vdGhlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjUgLmluc3RydWN0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICMxODJhMzA7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNSAuaW5zdHJ1Y3Rpb24gaDIge1xuICBmb250LWZhbWlseTogUFQgU2FucztcbiAgY29sb3I6ICM1NGRlZmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI1IC5pbnN0cnVjdGlvbiBvbCBsaSB7XG4gIGZvbnQtZmFtaWx5OiBQVCBTYW5zO1xuICBjb2xvcjogIzU0ZGVmZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNSAuaW5zdHJ1Y3Rpb24gb2wgbGkgYSB7XG4gIGNvbG9yOiAjNTRkZWZlO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6ICMwMDg0ZmY7XG4gIHBhZGRpbmc6IDUwcHggMjVweDtcbiAgd2lkdGg6IDcwJTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNiBoMiB7XG4gIGZvbnQtZmFtaWx5OiBQVCBTYW5zO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI2IGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzE4MmEzMDtcbiAgcGFkZGluZzogNTBweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI2IGZvcm0gbGFiZWwge1xuICBmb250LWZhbWlseTogUFQgU2FucztcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGNvbG9yOiAjNTRkZWZlO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI2IGZvcm0gaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogN3B4IDEwcHggN3B4IDEwcHg7XG4gIGNvbG9yOiAjMTgyYTMwO1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjYgZm9ybSB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgaGVpZ2h0OiAxODdweDtcbiAgY29sb3I6ICMxODJhMzA7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICByZXNpemU6IG5vbmU7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNTAwcHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjYgZm9ybSBpbnB1dC5pbnZhbGlkaW5wdXQsXG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjYgZm9ybSB0ZXh0YXJlYS5pbnZhbGlkaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGIzMTMxO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE3cHggI2RiMzEzMTtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNiBmb3JtIC5idXR0b25zIGJ1dHRvbiB7XG4gIGNvbG9yOiAjMTgyYTMwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM1NGRlZmU7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA4MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjYgZm9ybSAuYnV0dG9ucyBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjNTRkZWZlLCAwIDAgMTNweCAjNTRkZWZlLCAwIDAgMjZweCAjNTRkZWZlO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI2IGZvcm0gLmJ1dHRvbnMgYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjYgZm9ybSAuYnV0dG9ucyBidXR0b246ZGlzYWJsZWQ6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI2IGZvcm0gLmJ1dHRvbnMgYnV0dG9uLmFub3RoZXIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuc2VjdGlvbi5tYWluY29udGFpbmVyIC5jb250YWluZXI2IC5pbnN0cnVjdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjMTgyYTMwO1xuICBwYWRkaW5nOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjYgLmluc3RydWN0aW9uIGgyIHtcbiAgZm9udC1mYW1pbHk6IFBUIFNhbnM7XG4gIGNvbG9yOiAjNTRkZWZlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbn1cbnNlY3Rpb24ubWFpbmNvbnRhaW5lciAuY29udGFpbmVyNiAuaW5zdHJ1Y3Rpb24gb2wgbGkge1xuICBmb250LWZhbWlseTogUFQgU2FucztcbiAgY29sb3I6ICM1NGRlZmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5zZWN0aW9uLm1haW5jb250YWluZXIgLmNvbnRhaW5lcjYgLmluc3RydWN0aW9uIG9sIGxpIGEge1xuICBjb2xvcjogIzU0ZGVmZTtcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "ziXE":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProductsComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Coming Soon.... Stay Tuned! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "del", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", d_r2.payload.doc.data().img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r2.payload.doc.data().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r2.payload.doc.data().author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u09F3 ", d_r2.payload.doc.data().mainprice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u09F3 ", d_r2.payload.doc.data().discountprice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", d_r2.payload.doc.data().buyLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProductsComponent {
    constructor(db) {
        this.db = db;
        db.collection('products', (res) => res.orderBy('date', 'desc'))
            .snapshotChanges()
            .subscribe((res) => (this.dataArray = res));
    }
    ngOnInit() { }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 3, vars: 2, consts: [[1, "products"], ["class", "not-found", 4, "ngIf"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "not-found"], [1, "card"], ["alt", "Book", 3, "src"], [1, "price"], [1, "main-price"], [1, "discount-price"], [3, "href"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_p_1_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsComponent_div_2_Template, 14, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataArray.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["section.products[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\nsection.products[_ngcontent-%COMP%]   p.not-found[_ngcontent-%COMP%] {\n  z-index: -123123;\n  display: flex;\n  justify-content: flex-start;\n  font-family: \"PT Sans\", sans-serif;\n  font-weight: lighter;\n  opacity: 0.8;\n  height: 100vh;\n}\nsection.products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  flex-basis: 250px;\n  padding: 30px 0px 0px 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 3%;\n  margin-bottom: 25px;\n  box-shadow: 5px 9px 12px 5px #00000059;\n  border-radius: 16px;\n  background: #ffffff;\n  padding-bottom: 20px;\n  transition: 0.3s;\n}\nsection.products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  border-radius: 6px;\n  margin-bottom: 16px;\n}\nsection.products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  font-weight: bold;\n}\nsection.products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"PT Sans\", sans-serif;\n  font-weight: lighter;\n  margin-bottom: 8px;\n}\nsection.products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%] {\n  margin: none;\n  font-weight: bold;\n}\nsection.products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%]   del.main-price[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: red;\n}\nsection.products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p.price[_ngcontent-%COMP%]   span.discount-price[_ngcontent-%COMP%] {\n  color: green;\n}\nsection.products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background: #182a30;\n  padding: 10px 30px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s;\n}\nsection.products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  text-align: center;\n  font-weight: bold;\n  font-family: \"PT Sans\", sans-serif;\n  color: #54defe;\n}\nsection.products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  background: #81818180;\n  box-shadow: inset 5px 9px 12px 2px rgba(0, 0, 0, 0.28);\n}\nsection.products[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURGO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFKO0FBRUU7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUVBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUVJO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtBQUFOO0FBRUk7RUFDRSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUVJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBQU47QUFDTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQUNSO0FBQ007RUFDRSxZQUFBO0FBQ1I7QUFFSTtFQUNFLGtCQUFBO0VBQ0EsbUJBNURFO0VBNkRGLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFBTjtBQUNNO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQXRFQTtBQXVFUjtBQUVJO0VBQ0UscUJBQUE7RUFFQSxzREFBQTtBQUFOO0FBRUk7RUFDRSxnQkFBQTtBQUFOIiwiZmlsZSI6InByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRoZW1lOiAjMTgyYTMwO1xyXG4kY29sb3I6ICM1NGRlZmU7XHJcbnNlY3Rpb24ucHJvZHVjdHMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcC5ub3QtZm91bmQge1xyXG4gICAgei1pbmRleDogLTEyMzEyMztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIC5jYXJkIHtcclxuICAgIGZsZXgtYmFzaXM6IDI1MHB4O1xyXG4gICAgcGFkZGluZzogMzBweCAwcHggMHB4IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDlweCAxMnB4IDVweCAjMDAwMDAwNTk7XHJcbiAgICBib3gtc2hhZG93OiA1cHggOXB4IDEycHggNXB4ICMwMDAwMDA1OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICAgIHAucHJpY2Uge1xyXG4gICAgICBtYXJnaW46IG5vbmU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBkZWwubWFpbi1wcmljZSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgICAgc3Bhbi5kaXNjb3VudC1wcmljZSB7XHJcbiAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR0aGVtZTtcclxuICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQVCBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM4MTgxODE4MDtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCA1cHggOXB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDVweCA5cHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxuICAgIH1cclxuICAgICY6aG92ZXIgYnV0dG9uIHtcclxuICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map