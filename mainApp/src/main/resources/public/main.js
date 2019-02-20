(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".olololo{\r\n\twidth: 800px;\r\n\t min-width: 800px;\r\n}\r\n.di1{\r\n\twidth: 50%;\r\n\tbackground-color: blue;\r\n\r\n}\r\n.di2{\r\n\tbackground-color: red;\r\n\twidth: 50%;\r\n}\r\n.di2.di1{\r\n\tborder-color: black;\r\n\tborder : solid ;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n   <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <span class=\"nav-link\">Hapoalim application</span>\n      </li>\n    </ul>\n    \n  </div>\n</nav>\n\n \n <div style=\"margin: 20px\">\n<p-panel  header=\"Select file and send\">\n  <div class=\"ui-g\">\n   <label style=\"margin-right: 50px\" for=\"importButton\">Select file: </label>\n          <p-fileUpload #form mode=\"basic\" id=\"importButton\" (uploadHandler)=\"sendImg($event, form)\" customUpload=\"true\" auto=\"true\"  name=\"file\"  chooseLabel=\"Select file\" >\n  </p-fileUpload>\n</div>\n</p-panel>\n</div>\n\n<div class=\"ui-g\">\n   <div class=\"ui-g-2\"> </div>\n    <div class=\"ui-g-8\"> \n          <p-panel [style]=\"{width: 'auto'}\" styleClass=\"ui-card-shadow\">\n            <p-header>\n              Result\n            </p-header>\n\n            <div *ngIf=\"showLoadSpinner\" class=\"ui-g\">\n                <div class=\"ui-g-5\"> </div>\n                <div class=\"ui-g-2\">\n                  <p-progressSpinner  [style]=\"{width: '50px', height: '50px'}\" strokeWidth=\"8\" fill=\"#EEEEEE\"                 animationDuration=\".5s\"></p-progressSpinner> \n                </div>\n                <div class=\"ui-g-5\"> </div>\n             </div>\n\n            <div class=\"ui-g\">        \n                <div class=\"ui-g-3\"> </div>\n                <div class=\"ui-g-6\"> \n                      <div>{{showMessage}}</div>\n                </div>\n                <div class=\"ui-g-3\"></div>\n            </div>\n\n\n\n            <p-footer>\n              <button pButton type=\"button\" label=\"Clean\" (click)=\"clenAll()\" icon=\"pi pi-check\" style=\"margin-right: .25em\"></button>\n            </p-footer>\n         </p-panel>\n        \n    </div>\n     <div class=\"ui-g-2\"> </div>\n</div>\n\n "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _myModal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myModal.component */ "./src/app/myModal.component.ts");
/* harmony import */ var _dataService_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dataService.component */ "./src/app/dataService.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(modalService, dataService) {
        this.modalService = modalService;
        this.dataService = dataService;
        this.subscriptions = [];
        this.showLoadSpinner = false;
    }
    AppComponent.prototype.openModal = function () {
        this.modalService.show(_myModal_component__WEBPACK_IMPORTED_MODULE_2__["MyModal"], Object.assign({}, {}, { class: 'olololo' }));
    };
    AppComponent.prototype.ngOnInit = function () {
        this.showMessage = "please load customer Id image";
        this.operationNumber = 0;
    };
    AppComponent.prototype.sendImg = function (event, form) {
        var _this = this;
        this.operationResult = null;
        this.showLoadSpinner = true;
        this.showMessage = "waiting server response for operation: " + this.operationNumber;
        this.fd = new FormData();
        this.fd.append('file', event.files[0]);
        this.dataService.insertData(this.fd).subscribe(function (response) {
            if (JSON.stringify(response) != "-1") {
                console.log("" + response);
                _this.operationNumber = JSON.stringify(response);
                _this.startAskForResponse();
                form.clear();
            }
            else {
                console.log("wrong file");
                _this.clenAll();
            }
        }, function (error) { console.log("ERRR"); form.clear(); });
    };
    AppComponent.prototype.checkForResult = function (opId) {
        var _this = this;
        this.dataService.getOperationResult(opId).subscribe(function (response) {
            console.log(response);
            _this.operationResult = response;
            _this.showMessage = JSON.stringify(response);
        }, function (error) { console.log("ERRR"); });
    };
    AppComponent.prototype.startAskForResponse = function () {
        var _this = this;
        var retry = 0;
        this.repeatInterval = setInterval(function () {
            ++retry;
            if (retry > 20) {
                console.log("timeout stoped after 100 retry");
                _this.showLoadSpinner = false;
                clearInterval(_this.repeatInterval);
            }
            _this.checkForResult(_this.operationNumber);
            console.log(_this.operationResult);
            if (_this.operationResult && _this.operationResult.status) {
                if (_this.operationResult.status === "OPERATION_COMPLETE" || _this.operationResult.status === "IMG_NOT_RECOGNIZED") {
                    clearInterval(_this.repeatInterval);
                    _this.showLoadSpinner = false;
                    console.log("OP COMPLETE stop");
                    _this.operationResult = null;
                }
            }
        }, 500);
    };
    AppComponent.prototype.clenAll = function () {
        this.showMessage = "please load customer Id image";
        this.subscriptions.forEach(function (subscription) {
            subscription.unsubscribe();
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _dataService_component__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _myModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myModal.component */ "./src/app/myModal.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dataService_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dataService.component */ "./src/app/dataService.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _myModal_component__WEBPACK_IMPORTED_MODULE_3__["MyModal"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_5__["OverlayPanelModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
                primeng_progressspinner__WEBPACK_IMPORTED_MODULE_8__["ProgressSpinnerModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_10__["PanelModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [
                _dataService_component__WEBPACK_IMPORTED_MODULE_12__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [_myModal_component__WEBPACK_IMPORTED_MODULE_3__["MyModal"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dataService.component.ts":
/*!******************************************!*\
  !*** ./src/app/dataService.component.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'multipart/form-data' })
};
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.insertData = function (data) {
        return this.http.post('http://localhost:8080/file', data);
    };
    DataService.prototype.getOperationResult = function (operationId) {
        return this.http.get('http://localhost:8080/getResultById/' + operationId);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/myModal.component.html":
/*!****************************************!*\
  !*** ./src/app/myModal.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Hello</div>\r\n<button type=\"button\" (click)=\"op.toggle($event)\" class=\"btn btn-primary\">\r\n      Single Button\r\n    </button>\r\n<p-overlayPanel [style]=\"{width: '400px'}\" [appendTo]=\"'body'\" baseZIndex=1050 #op>\r\n    HOP HEY\r\n</p-overlayPanel>"

/***/ }),

/***/ "./src/app/myModal.component.ts":
/*!**************************************!*\
  !*** ./src/app/myModal.component.ts ***!
  \**************************************/
/*! exports provided: MyModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModal", function() { return MyModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyModal = /** @class */ (function () {
    function MyModal() {
    }
    MyModal = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./myModal.component.html */ "./src/app/myModal.component.html"),
            styleUrls: []
        })
    ], MyModal);
    return MyModal;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dshanin.DIALOGIC\Desktop\angular\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map