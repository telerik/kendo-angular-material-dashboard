(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-menu></app-main-menu>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.template.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.template.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" class=\"row\">\n    <div class=\"col-sm\">\n        <h4>Statistics</h4>\n        <p class=\"h2\">{{ rangeStart | date }} - {{ today | date }}</p>\n    </div>\n    <div class=\"col-sm text-sm-right p-0 p-sm-3\">\n        <kendo-buttongroup [selection]=\"'single'\">\n            <button kendoRippleContainer kendoButton [togglable]=\"true\" (click)=\"onFilterClick(3)\" [selected]=\"true\">3 Months</button>\n            <button kendoRippleContainer kendoButton [togglable]=\"true\" (click)=\"onFilterClick(6)\">6 Months</button>\n            <button kendoRippleContainer kendoButton [togglable]=\"true\" (click)=\"onFilterClick(12)\">1 Year</button>\n        </kendo-buttongroup>\n    </div>\n</div>\n\n<div id=\"statistics\">\n  <kendo-tabstrip (select)=\"onTabSelect($event)\">\n      <kendo-tabstrip-tab [title]=\"'All Issues'\" [selected]=\"true\">\n          <ng-template kendoTabContent>\n              <app-statistics [loading]=\"isLoading\" [issues]=\"issues\" [months]=\"months\"></app-statistics>\n          </ng-template>\n      </kendo-tabstrip-tab>\n\n      <kendo-tabstrip-tab [title]=\"'Assigned to Me'\">\n          <ng-template kendoTabContent>\n              <app-statistics [loading]=\"isLoading\" [issues]=\"issues\" [months]=\"months\"></app-statistics>\n          </ng-template>\n      </kendo-tabstrip-tab>\n\n      <kendo-tabstrip-tab [title]=\"'Created by Me'\">\n          <ng-template kendoTabContent>\n              <app-statistics [loading]=\"isLoading\" [issues]=\"issues\" [months]=\"months\"></app-statistics>\n          </ng-template>\n      </kendo-tabstrip-tab>\n  </kendo-tabstrip>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/issues/issues.template.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/issues/issues.template.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" class=\"row\">\n    <div class=\"col-sm\">\n        <h4>Issues</h4>\n        <p class=\"h2\">{{range.from | date}} - {{range.to | date}}</p>\n    </div>\n    <div class=\"col-sm text-sm-right p-0 p-sm-3\">\n        <kendo-buttongroup [disabled]=\"isLoading\" [selection]=\"'single'\">\n            <button kendoRippleContainer kendoButton [disabled]=\"isLoading\" (click)=\"onFilterClick(3)\" [selected]=\"selectedPeriod === 3 ? true : false\">3 Months</button>\n            <button kendoRippleContainer kendoButton [disabled]=\"isLoading\" (click)=\"onFilterClick(6)\" [selected]=\"selectedPeriod === 6 ? true : false\">6 Months</button>\n            <button kendoRippleContainer kendoButton [disabled]=\"isLoading\" (click)=\"onFilterClick(12)\" [selected]=\"selectedPeriod === 12 ? true : false\">1 Year</button>\n        </kendo-buttongroup>\n    </div>\n</div>\n<app-loading-spinner *ngIf=\"isLoading\">\n</app-loading-spinner>\n<div *ngIf=\"!isLoading && !view\">\n    <img src=\"../../assets/noConnection.png\">\n</div>\n<kendo-grid\n    *ngIf=\"view\"\n    [data]=\"view\"\n    [pageSize]=\"pageSize\"\n    [pageable]=\"true\"\n    [skip]=\"skip\"\n    [scrollable]=\"'none'\"\n    (pageChange)='onPageChange($event)'\n    >\n    <kendo-grid-column field=\"number\" title=\"ID\" width=\"80\">\n        <ng-template kendoGridCellTemplate let-dataItem>\n          <a href=\"dataItem.html_url\">#{{ dataItem.number }}</a>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"title\" title=\"Title\">\n        <ng-template kendoGridCellTemplate let-dataItem>\n          <span [ngClass]=\"{\n              'issue-status': true,\n              'issue-open': dataItem.state === 'open',\n              'issue-closed': dataItem.state !== 'open' }\"></span>\n            {{ dataItem.title }}\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"labels\" title=\"Labels\" media=\"sm\">\n        <ng-template kendoGridCellTemplate let-dataItem>\n            <span *ngFor=\"let label of dataItem.labels\" class=\"badge\" [labelClass]=\"label.name\">\n                {{ label.name }}\n            </span>\n        </ng-template>\n    </kendo-grid-column>\n     <kendo-grid-column field=\"milestone\" title=\"Milestone\" width=\"200\" media=\"xl\">\n        <ng-template kendoGridCellTemplate let-dataItem>\n             {{ dataItem.milestone ? dataItem.milestone.title : '' }}\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"assignee\" title=\"Assignee\" width=\"200\" media=\"xl\">\n         <ng-template kendoGridCellTemplate let-dataItem>\n             <img *ngIf=\"dataItem.assignee\" [src]=\"dataItem.assignee? dataItem.assignee.avatar_url : undefined\" [ngStyle]=\"{'width': '30px', 'height': '30px'}\" class=\"img-circle\" />\n            {{ dataItem.assignee ? dataItem.assignee.login : '' }}\n        </ng-template>\n    </kendo-grid-column>\n    <ng-template kendoGridDetailTemplate let-dataItem let-rowIndex=\"rowIndex\">\n        <div class=\"row my-4\">\n            <div class=\"col-sm-12\">\n                <span class=\"badge\" [ngClass]=\"{\n                    'badge-success': dataItem.state === 'open',\n                    'badge-danger': dataItem.state === 'closed'\n                }\">{{ dataItem.state }}</span>\n                <h3 class=\"h1\">\n                    {{ dataItem.title }}\n                    <span class=\"text-muted\">#{{ dataItem.number }}</span>\n                </h3>\n            </div>\n        </div>\n        <div class=\"row my-4\">\n            <div class=\"col-sm-2\">\n                <span class=\"small d-block text-muted\">Created on</span>\n                {{ dataItem.created_at | date }}\n            </div>\n            <div *ngIf=\"dataItem.closed_at\" class=\"col-sm-2\">\n                <span class=\"small d-block text-muted\">Closed on</span>\n                {{ dataItem.closed_at | date }}\n            </div>\n            <div class=\"col-sm-2\">\n                <span class=\"small d-block text-muted\">Milestone</span>\n                {{ dataItem.milestone ? dataItem.milestone.title : '' }}\n            </div>\n            <div class=\"col-sm-2\">\n                <span class=\"small d-block text-muted\">Author</span>\n                {{ dataItem.user.login }}\n            </div>\n            <div *ngIf=\"dataItem.assignee\" class=\"col-sm-2\">\n                <span class=\"small d-block text-muted\">Assignee</span>\n                <img [src]=\"dataItem.assignee? dataItem.assignee.avatar_url : undefined\" [ngStyle]=\"{'width': '30px', 'height': '30px'}\" class=\"img-circle\" />\n                {{ dataItem.assignee ? dataItem.assignee.login : '' }}\n            </div>\n        </div>\n        <div class=\"row my-4\">\n            <div class=\"col-sm-2\">\n                <h4 class=\"small text-muted\">Labels</h4>\n                <span *ngFor=\"let label of dataItem.labels\" class=\"badge\" [labelClass]=\"label.name\">\n                    {{ label.name }}\n                </span>\n            </div>\n            <div class=\"col-sm-8\">\n                <h4 class=\"small text-muted\">Description</h4>\n                <app-markdown [data]=\"dataItem.body\"></app-markdown>\n            </div>\n        </div>\n    </ng-template>\n</kendo-grid>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-menu/main-menu.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-menu/main-menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div id=\"top-bar\" class=\"top-bar sticky-top bg-white d-xl-none k-shadow\">\n        <span id=\"nav-toggle\" class=\"nav-toggle d-xl-none\"\n            (click)=\"toggleNav()\">\n            <span class=\"k-icon k-i-hamburger\"></span>\n        </span>\n    </div>\n    <div id=\"nav\"\n        class=\"sticky-top py-3 py-sm-5 k-vbox shadow col-xl-2 d-xl-flex hide\"\n        [@toggleNav]=\"navState\"\n        *ngIf=\"showNav()\"\n        >\n\n        <div class=\"container\">\n          <h1 id=\"app-title\" class=\"mb-0\">Issues</h1>\n          <p id=\"app-subtitle\" class=\"h4 mb-4\">Sample Dashboard</p>\n          <hr class=\"k-hr\" />\n          <p class=\"h4 mt-3 mt-sm-5\">Project</p>\n          <ul class=\"nav nav-pills flex-column\">\n              <li class=\"nav-item\" id=\"dashbaord\">\n                  <a [routerLink]=\" ['./dashboard'] \" class=\"nav-link\" routerLinkActive=\"active\">Dashboard</a>\n              </li>\n              <li class=\"nav-item\" id=\"issues\">\n                  <a [routerLink]=\" ['./issues'] \" class=\"nav-link\" routerLinkActive=\"active\">Issues</a>\n              </li>\n          </ul>\n          <p class=\"h4 mt-3 mt-sm-5\">Account</p>\n          <ul class=\"nav nav-pills flex-column\">\n              <li class=\"nav-item\" id=\"profile\">\n                  <a [routerLink]=\" ['./profile'] \" class=\"nav-link\" routerLinkActive=\"active\">My Profile</a>\n              </li>\n              <li class=\"nav-item\" id=\"signout\">\n                  <a [routerLink]=\" ['./signin'] \" class=\"nav-link\" routerLinkActive=\"active\">Sign Out</a>\n              </li>\n          </ul>\n        </div>\n\n        <div class=\"container mt-sm-auto\">\n          <hr class=\"k-flex k-hr k-hr-bottom\" />\n          <div id=\"copy\">\n              <p>Copyright &copy; {{year}},<br /><a href=\"http://www.progress.com\">Progress Software Corporation</a> and/or its subsidiaries or affiliates.</p>\n              <p>All Rights Reserved.</p>\n          </div>\n        </div>\n\n    </div>\n\n    <main class=\"content-wrapper col\">\n        <router-outlet></router-outlet>\n    </main>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.template.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.template.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-spinner *ngIf=\"isLoading\">\n</app-loading-spinner>\n<div *ngIf=\"!isLoading && !user.id\">\n    <img class=\"center\" src=\"../../assets/noConnection.png\">\n</div>\n<div *ngIf=\"user.id && !isLoading\" >\n    <div class=\"row\">\n        <div class=\"col-sm\">\n            <h4>Account</h4>\n            <p class=\"h2\">{{user.login}} - {{user.name}}</p>\n        </div>\n        <div class=\"col-sm text-sm-right\">\n            <button kendoRippleContainer class=\"k-button\" (click)=\"onSignOutClick()\">Sign out</button>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-7\">\n\n            <div class=\"k-card\" id=\"profile\">\n                <h3 class=\"k-card-header\">Public Profile</h3>\n                <div class=\"k-card-body\">\n\n                    <div class=\"row\">\n                        <div class=\"col-md-3 text-xs-center\">\n                            <img [src]=\"user.avatar_url\" [ngStyle]=\"{'max-width': '100%'}\" class=\"img-circle mx-auto mb-3\" />\n                        </div>\n                        <div class=\"col-md-9\">\n                            <div class=\"form-group\">\n                                <kendo-textbox-container class=\"custom-width\" floatingLabel=\"Username\">\n                                    <input kendoTextBox type=\"text\" id=\"username\" [value]=\"user.login\" />\n                                </kendo-textbox-container>\n                            </div>\n                            <div class=\"form-group\">\n                                <kendo-textbox-container class=\"custom-width\" floatingLabel=\"Name\">\n                                    <input kendoTextBox type=\"text\" id=\"name\" [value]=\"user.name\" />\n                                </kendo-textbox-container>\n                            </div>\n                            <div class=\"form-group\">\n                                <kendo-textbox-container class=\"custom-width\" floatingLabel=\"Email\">\n                                    <input kendoTextBox type=\"email\" id=\"email\" [value]=\"user.email\" />\n                                </kendo-textbox-container>\n                            </div>\n                            <div class=\"form-group\" kendoRippleContainer>\n                                    <input type=\"checkbox\" id=\"chkboxonly\" class=\"k-checkbox\" checked />\n                                    <label class=\"k-checkbox-label\" for=\"chkboxonly\">Keep my email address private</label>\n                            </div>\n                            <div class=\"form-group\">\n                                <kendo-textbox-container class=\"custom-width\" floatingLabel=\"Company\">\n                                    <input kendoTextBox type=\"text\" id=\"company\" [value]=\"user.company\" />\n                                </kendo-textbox-container>\n                            </div>\n                            <div class=\"form-group\">\n                                <kendo-textbox-container class=\"custom-width\" floatingLabel=\"Location\">\n                                    <input kendoTextBox type=\"text\" id=\"location\" [value]=\"user.location\" />\n                                </kendo-textbox-container>\n                            </div>\n                            <div class=\"form-group\" >\n                                <button kendoRippleContainer class=\"k-button k-primary\" (click)=\"onUpdateClick()\">Update profile</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"k-card\" id=\"delete-account\">\n                <h3 class=\"k-card-header\">Delete Account</h3>\n                <div class=\"k-card-body\">\n                    <p>You will immediately lose access to your repositories and all other information associated with your account. <strong>This cannot be undone!</strong></p>\n                    <button kendoRippleContainer class=\"k-button k-primary\" style=\"background-color: red;\" (click)=\"onDeleteClick()\">Delete Account</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-5\">\n\n            <div class=\"k-card\" id=\"notifications\">\n                <h3 class=\"k-card-header\">Notifications</h3>\n                <div class=\"k-card-body\">\n                    <h4 class=\"h6\">Automatically watch repositories?</h4>\n                    <p class=\"text-muted\">When you are given push access to a repository, automatically receive notifications for it.</p>\n                    <p><kendo-switch></kendo-switch></p>\n                    <h4 class=\"h6\">Receive updates to any conversations via email?</h4>\n                    <p><kendo-switch [checked]=\"true\"></kendo-switch></p>\n                    <h4 class=\"h6\" >Receive updates to any repositories via email?</h4>\n                    <p><kendo-switch [checked]=\"true\"></kendo-switch></p>\n                </div>\n            </div>\n            <div class=\"k-card\" id=\"password\">\n                <h3 class=\"k-card-header\">Update password</h3>\n                <div class=\"k-card-body\">\n                    <div class=\"form-group\">\n                        <kendo-textbox-container class=\"custom-width\" floatingLabel=\"Old password\">\n                            <input kendoTextBox type=\"password\" />\n                        </kendo-textbox-container>\n                    </div>\n                    <div class=\"form-group\">\n                        <kendo-textbox-container class=\"custom-width\" floatingLabel=\"New password\">\n                            <input kendoTextBox type=\"password\" />\n                        </kendo-textbox-container>\n                    </div>\n                    <div class=\"form-group\">\n                        <kendo-textbox-container class=\"custom-width\" floatingLabel=\"Confirm password\">\n                            <input kendoTextBox type=\"password\" />\n                        </kendo-textbox-container>\n                    </div>\n                    <div class=\"form-group\">\n                        <button kendoRippleContainer class=\"k-button k-primary\">Change password</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <kendo-dialog title=\"Thank you\" *ngIf=\"profileDialogVisible\" (close)=\"onProfileDialogClose()\">\n        <p>Your profile has been successfully updated</p>\n        <kendo-dialog-actions>\n            <button kendoRippleContainer class=\"k-button\" (click)=\"onProfileDialogClose()\">OK</button>\n        </kendo-dialog-actions>\n    </kendo-dialog>\n\n    <kendo-dialog title=\"Are you sure you want to do this?\" *ngIf=\"deleteDialogVisible\" (close)=\"onDeleteDialogClose()\">\n        <p>Account deletetion cannot be undone!</p>\n        <kendo-dialog-actions>\n            <button kendoRippleContainer kendoButton (click)=\"onDeleteDialogClose()\">Cancel</button>\n            <button kendoRippleContainer kendoButton (click)=\"onDeleteDialogClose()\" [primary]=\"true\">Delete Account</button>\n        </kendo-dialog-actions>\n    </kendo-dialog>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signin/signin.template.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signin/signin.template.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"signin-form col-xl-3\">\n  <div class=\"k-card\">\n    <div class=\"k-card-block\">\n      <div class=\"k-form\">\n        <h1 id=\"app-title\" class=\"mb-0\">Issues</h1>\n        <p id=\"app-subtitle\" class=\"h4 mb-4\">Sample Dashboard</p>\n\n        <hr class=\"k-hr\">\n\n        <div class=\"form-group mt-4\">\n          <kendo-textbox-container class=\"custom-width\" floatingLabel=\"Email or Username\">\n              <input kendoTextBox type=\"text\"/>\n          </kendo-textbox-container>\n        </div>\n        <div class=\"form-group\">\n          <kendo-textbox-container class=\"custom-width\" floatingLabel=\"Password\">\n              <input kendoTextBox type=\"password\"/>\n          </kendo-textbox-container>\n          <p class=\"text-xs-right small\">\n            <a href=\"#\">Forgot it?</a>\n          </p>\n        </div>\n        <div class=\"form-group mb-0 text-right\">\n          <button kendoRippleContainer class=\"k-button k-primary\" (click)=\"onLoginClick()\">Log in</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");

// angular


// app

var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_3__["AppRoutes"], { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maestro-app',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/index */ "./src/app/common/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @progress/kendo-angular-charts */ "./node_modules/@progress/kendo-angular-charts/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-layout */ "./node_modules/@progress/kendo-angular-layout/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @progress/kendo-angular-ripple */ "./node_modules/@progress/kendo-angular-ripple/dist/fesm5/index.js");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _issues_issues_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./issues/issues.component */ "./src/app/issues/issues.component.ts");
/* harmony import */ var _issues_label_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./issues/label.directive */ "./src/app/issues/label.directive.ts");
/* harmony import */ var _markdown_markdown_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./markdown/markdown.component */ "./src/app/markdown/markdown.component.ts");
/* harmony import */ var _charts_active_issues_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./charts/active-issues.component */ "./src/app/charts/active-issues.component.ts");
/* harmony import */ var _charts_types_distribution_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./charts/types-distribution.component */ "./src/app/charts/types-distribution.component.ts");
/* harmony import */ var _charts_issue_types_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./charts/issue-types.component */ "./src/app/charts/issue-types.component.ts");
/* harmony import */ var _charts_statistics_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./charts/statistics.component */ "./src/app/charts/statistics.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






// vendor dependencies


// app



// Kendo UI







// Components












// environment

_common_index__WEBPACK_IMPORTED_MODULE_8__["Config"].PLATFORM_TARGET = _common_index__WEBPACK_IMPORTED_MODULE_8__["Config"].PLATFORMS.WEB;
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _issues_label_directive__WEBPACK_IMPORTED_MODULE_23__["LabelClass"],
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__["MainMenuComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_19__["SigninComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                _issues_issues_component__WEBPACK_IMPORTED_MODULE_22__["IssuesComponent"],
                _markdown_markdown_component__WEBPACK_IMPORTED_MODULE_24__["MarkdownComponent"],
                _charts_active_issues_component__WEBPACK_IMPORTED_MODULE_25__["ActiveIssuesComponent"],
                _charts_types_distribution_component__WEBPACK_IMPORTED_MODULE_26__["TypesDistributionComponent"],
                _charts_issue_types_component__WEBPACK_IMPORTED_MODULE_27__["IssueTypesComponent"],
                _charts_statistics_component__WEBPACK_IMPORTED_MODULE_28__["StatisticsComponent"],
                _shared_spinner_component__WEBPACK_IMPORTED_MODULE_29__["LoadingComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_30__["environment"].production }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _progress_kendo_angular_charts__WEBPACK_IMPORTED_MODULE_12__["ChartsModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_11__["GridModule"],
                _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_14__["InputsModule"],
                _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_15__["ButtonsModule"],
                _progress_kendo_angular_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]]
                    }
                }),
                _progress_kendo_angular_ripple__WEBPACK_IMPORTED_MODULE_17__["RippleModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard */ "./src/app/dashboard/index.ts");
/* harmony import */ var _issues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./issues */ "./src/app/issues/index.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile */ "./src/app/profile/index.ts");
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin */ "./src/app/signin/index.ts");




/**
 * Define app module routes here, e.g., to lazily load a module
 * (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
 */
var AppRoutes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    { path: 'dashboard', component: _dashboard__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'issues', component: _issues__WEBPACK_IMPORTED_MODULE_1__["IssuesComponent"] },
    { path: 'profile', component: _profile__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'signin', component: _signin__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] }
];


/***/ }),

/***/ "./src/app/charts/active-issues.component.ts":
/*!***************************************************!*\
  !*** ./src/app/charts/active-issues.component.ts ***!
  \***************************************************/
/*! exports provided: ActiveIssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveIssuesComponent", function() { return ActiveIssuesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActiveIssuesComponent = /** @class */ (function () {
    function ActiveIssuesComponent() {
    }
    Object.defineProperty(ActiveIssuesComponent.prototype, "months", {
        set: function (months) {
            months > 3 ? this.baseUnit = 'months' : this.baseUnit = 'weeks';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveIssuesComponent.prototype, "closeRate", {
        set: function (rate) {
            this.bulletData = [{ target: 70, current: Math.round(rate * 100) }];
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActiveIssuesComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActiveIssuesComponent.prototype, "active", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ActiveIssuesComponent.prototype, "issues", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ActiveIssuesComponent.prototype, "months", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ActiveIssuesComponent.prototype, "closeRate", null);
    ActiveIssuesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-active-issues',
            template: "\n        <div class=\"k-card\">\n            <h2 class=\"k-card-header m-0\">Active Issues</h2>\n            <div class=\"k-card-body\">\n\n                <div class=\"row\">\n\n                    <div class=\"col-sm-12 col-lg-6 col-xl active-issues\">\n                        <div class=\"comp-label\">\n                            <div class=\"issues-count\">{{ issues.open + issues.closed }}</div>\n                            <div class=\"issues-label\">Active issues</div>\n                        </div>\n                        <kendo-chart style=\"height: 80px;\">\n                        <kendo-chart-tooltip format=\"{0}%\"></kendo-chart-tooltip>\n                            <kendo-chart-series-defaults type=\"column\"\n                            [stack]=\"true\"\n                            [gap]=\"0.5\"\n                            [overlay]=\"false\"></kendo-chart-series-defaults>\n                            <kendo-chart-series>\n                                <kendo-chart-series-item\n                                type=\"area\"\n                                [line]=\"{style:'smooth'}\"\n                                [color]=\"'#888'\"\n                                [data]=\"active\"\n                                field=\"count\"\n                                categoryField=\"date\"\n                                aggregate=\"count\"></kendo-chart-series-item>\n                            </kendo-chart-series>\n                            <kendo-chart-category-axis>\n                                <kendo-chart-category-axis-item\n                                    [baseUnit]=\"baseUnit\"\n                                    [majorTicks]=\"{visible: false}\"\n                                    [labels]=\"{step: 4, skip: 2, font: '10px sans-serif'}\"\n                                    [majorGridLines]=\"{visible: false}\"\n                                    [line]=\"{visible: false}\"\n                                ></kendo-chart-category-axis-item>\n                            </kendo-chart-category-axis>\n                            <kendo-chart-value-axis>\n                                <kendo-chart-value-axis-item [visible]=\"false\" [majorGridLines]=\"{visible: false}\">\n                                </kendo-chart-value-axis-item>\n                            </kendo-chart-value-axis>\n                        </kendo-chart>\n                    </div>\n\n                    <div class=\"col-12 col-lg-6 col-xl pb-4 text-danger closed-issues\">\n                        <span class=\"comp-label\">\n                            <div class=\"issues-count\">{{ issues.closed }}</div>\n                            <div class=\"issues-label\">Closed issues</div>\n                        </span>\n                        <kendo-chart style=\"height: 80px;\">\n                        <kendo-chart-tooltip format=\"{0}\"></kendo-chart-tooltip>\n                            <kendo-chart-series-defaults type=\"column\" [stack]=\"true\" [gap]=\"0.5\" [overlay]=\"false\">\n                            </kendo-chart-series-defaults>\n                            <kendo-chart-series>\n                                <kendo-chart-series-item\n                                type=\"area\"\n                                [line]=\"{style:'smooth'}\"\n                                [color]=\"'#e91e63'\"\n                                [data]=\"data.closed\"\n                                field=\"count\"\n                                categoryField=\"date\"\n                                aggregate=\"count\">\n                                </kendo-chart-series-item>\n                            </kendo-chart-series>\n                            <kendo-chart-category-axis>\n                                <kendo-chart-category-axis-item\n                                    [baseUnit]=\"baseUnit\"\n                                    [majorTicks]=\"{visible: false}\"\n                                    [labels]=\"{step: 4, skip: 2, font: '10px sans-serif'}\"\n                                    [majorGridLines]=\"{visible: false}\"\n                                    [line]=\"{visible: false}\"\n                                ></kendo-chart-category-axis-item>\n                            </kendo-chart-category-axis>\n                            <kendo-chart-value-axis>\n                                <kendo-chart-value-axis-item [visible]=\"false\" [majorGridLines]=\"{visible: false}\">\n                                </kendo-chart-value-axis-item>\n                            </kendo-chart-value-axis>\n                        </kendo-chart>\n                    </div>\n\n                    <div class=\"col-12 col-lg-6 col-xl pb-4 text-success open-issues\">\n                        <span class=\"comp-label\">\n                            <div class=\"issues-count\">{{ issues.open }}</div>\n                            <div class=\"issues-label\">Open issues</div>\n                        </span>\n                        <kendo-chart style=\"height: 80px;\">\n                        <kendo-chart-tooltip format=\"{0}\"></kendo-chart-tooltip>\n                            <kendo-chart-series-defaults type=\"column\" [stack]=\"true\" [gap]=\"0.5\" [overlay]=\"false\">\n                            </kendo-chart-series-defaults>\n                            <kendo-chart-series>\n                                <kendo-chart-series-item\n                                type=\"area\"\n                                [line]=\"{style:'smooth'}\"\n                                [color]=\"'#27c46d'\"\n                                [data]=\"data.open\"\n                                field=\"count\"\n                                categoryField=\"date\"\n                                aggregate=\"count\">\n                                </kendo-chart-series-item>\n                            </kendo-chart-series>\n                            <kendo-chart-category-axis>\n                                <kendo-chart-category-axis-item\n                                    [baseUnit]=\"baseUnit\"\n                                    [majorTicks]=\"{visible: false}\"\n                                    [labels]=\"{step: 4, skip: 2, font: '10px sans-serif'}\"\n                                    [majorGridLines]=\"{visible: false}\"\n                                    [line]=\"{visible: false}\"\n                                ></kendo-chart-category-axis-item>\n                            </kendo-chart-category-axis>\n                            <kendo-chart-value-axis>\n                                <kendo-chart-value-axis-item [visible]=\"false\" [majorGridLines]=\"{visible: false}\">\n                                </kendo-chart-value-axis-item>\n                            </kendo-chart-value-axis>\n                        </kendo-chart>\n                    </div>\n\n                    <div class=\"col-12 col-lg-6 col-xl pb-4 close-rate\">\n                        <span class=\"comp-label\">\n                            <div class=\"issues-count\">{{ issues.closeRate.average | percent:'2.0-0' }}</div>\n                            <div class=\"issues-label\">Close rate</div>\n                        </span>\n                        <p class=\"m-0 small text-uppercase text-muted\">\n                            Highest:\n                            {{issues.closeRate.highest.close_rate | percent: '2.0-0' }}\n                            on {{issues.closeRate.highest.created_at | date}}\n                        </p>\n                        <p class=\"m-0 small text-uppercase text-muted\">\n                            Lowest:\n                            {{issues.closeRate.lowest.close_rate | percent: '2.0-0' }}\n                            on {{issues.closeRate.lowest.created_at | date}}\n                        </p>\n                        <kendo-chart style=\"height: 20px;\" [chartArea]=\"{margin: -20}\">\n                        <kendo-chart-tooltip format=\"{0}\"></kendo-chart-tooltip>\n                            <kendo-chart-series>\n                                <kendo-chart-series-item type=\"bullet\"\n                                    [data]=\"bulletData\"\n                                    [target]=\"{color: '#FFF'}\"\n                                    currentField=\"current\"\n                                    targetField=\"target\"\n                                    color=\"#e91e63\"\n                                ></kendo-chart-series-item>\n                                </kendo-chart-series>\n\n                                <kendo-chart-value-axis>\n                                <kendo-chart-value-axis-item\n                                    [plotBands]=\"[{from:0, to:100, color: '#35C473'}]\"\n                                    [visible]=\"false\"\n                                    [majorGridLines]=\"{visible: false}\">\n                                </kendo-chart-value-axis-item>\n                            </kendo-chart-value-axis>\n                        </kendo-chart>\n                    </div>\n\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-12 all-issues\">\n                        <kendo-chart>\n                            <kendo-chart-tooltip format=\"{0}\"></kendo-chart-tooltip>\n                            <kendo-chart-series-defaults [type]=\"'area'\" [stack]=\"true\" [gap]=\"0.06\" [overlay]=\"false\">\n                            </kendo-chart-series-defaults>\n                            <kendo-chart-series>\n                                <kendo-chart-series-item\n                                [line]=\"{style:'smooth'}\"\n                                    [opacity]=\"0.3\"\n                                    [border]=\"{color: '#35C473', opacity: 0.3}\"\n                                    [color]=\"'#35C473'\"\n                                    [data]=\"data.open\" field=\"count\" categoryField=\"date\" aggregate=\"count\"></kendo-chart-series-item>\n                                <kendo-chart-series-item\n                                    [line]=\"{style:'smooth'}\"\n                                    [opacity]=\"0.3\"\n                                    [border]=\"{color: '#CC3458', opacity: 0.3}\"\n                                    [color]=\"'#CC3458'\" [data]=\"data.closed\"\n                                    field=\"count\" categoryField=\"date\"\n                                    aggregate=\"count\"></kendo-chart-series-item>\n                            </kendo-chart-series>\n                            <kendo-chart-category-axis>\n                                <kendo-chart-category-axis-item\n                                    [baseUnit]=\"baseUnit\"\n                                    [majorTicks]=\"{visible: false}\"\n                                    [line]=\"{visible: false}\"\n                                    [majorGridLines]=\"{visible: false}\"\n                                    [labels]=\"{rotation: 'auto', margin: { top: 8 }}\"\n                                ></kendo-chart-category-axis-item>\n                            </kendo-chart-category-axis>\n                            <kendo-chart-value-axis>\n                                <kendo-chart-value-axis-item\n                                    [line]=\"{visible: false}\"\n                                    [labels]=\"{step: 2, skip: 2, margin: { right: 4 }}\"\n                                    [majorGridLines]=\"{step: 2, skip: 2, color: '#F0F2F2'}\">\n                                </kendo-chart-value-axis-item>\n                            </kendo-chart-value-axis>\n                        </kendo-chart>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    "
        })
    ], ActiveIssuesComponent);
    return ActiveIssuesComponent;
}());



/***/ }),

/***/ "./src/app/charts/issue-types.component.ts":
/*!*************************************************!*\
  !*** ./src/app/charts/issue-types.component.ts ***!
  \*************************************************/
/*! exports provided: IssueTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueTypesComponent", function() { return IssueTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IssueTypesComponent = /** @class */ (function () {
    function IssueTypesComponent() {
        this.hoverColor = 'rgb(255, 99, 88)';
    }
    Object.defineProperty(IssueTypesComponent.prototype, "data", {
        set: function (data) {
            var _this = this;
            this.issues = data;
            data.forEach(function (series) {
                if (series.type === 'SEV: LOW') {
                    _this.setDonutLegend({
                        value: series.value,
                        category: series.type,
                        point: {
                            options: {
                                color: _this.hoverColor
                            }
                        }
                    });
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IssueTypesComponent.prototype, "className", {
        get: function () {
            return 'k-card issue-types';
        },
        enumerable: true,
        configurable: true
    });
    IssueTypesComponent.prototype.onHover = function (event) {
        this.setDonutLegend(event);
    };
    IssueTypesComponent.prototype.setDonutLegend = function (series) {
        this.hoverColor = series.point.options.color;
        this.donutPercent = Math.round(series.value * 100 || 0) + '';
        this.donutLabel = series.category;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], IssueTypesComponent.prototype, "data", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IssueTypesComponent.prototype, "className", null);
    IssueTypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issue-types',
            template: "\n        <h2 class=\"k-card-header\">Issue Types</h2>\n        <div class=\"k-card-body height-1\">\n            <kendo-chart (seriesHover)=\"onHover($event)\">\n                <kendo-chart-series>\n                    <kendo-chart-series-item\n                        [holeSize]=\"100\"\n                        [data]=\"issues\"\n                        type=\"donut\"\n                        field=\"value\"\n                        categoryField=\"type\"\n                        [overlay]=\"false\"\n                    ></kendo-chart-series-item>\n                </kendo-chart-series>\n                <kendo-chart-legend position=\"bottom\">\n                </kendo-chart-legend>\n            </kendo-chart>\n            <div class=\"comp-label chart-label\" [style.color]=\"hoverColor\">\n                <div class=\"issues-count\">\n                  {{donutPercent}}\n                  <span class=\"percentage\">%</span>\n                </div>\n                <div class=\"issues-label\">{{donutLabel}}</div>\n            </div>\n        </div>\n    "
        })
    ], IssueTypesComponent);
    return IssueTypesComponent;
}());



/***/ }),

/***/ "./src/app/charts/statistics.component.ts":
/*!************************************************!*\
  !*** ./src/app/charts/statistics.component.ts ***!
  \************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatisticsComponent.prototype, "issues", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatisticsComponent.prototype, "months", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StatisticsComponent.prototype, "loading", void 0);
    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: "\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div *ngIf=\"loading\" class=\"k-card\" style=\"height: 400px\">\n                    <app-loading-spinner>\n                    </app-loading-spinner>\n                </div>\n                <app-active-issues\n                    *ngIf=\"!loading && issues.active.length\"\n                    [data]=\"issues.groupedIssues\"\n                    [months]=\"months\"\n                    [issues]=\"issues\"\n                    [closeRate]=\"issues.closeRate.average\"\n                    [active]=\"issues.active\"></app-active-issues>\n            </div>\n            <div *ngIf=\"!loading && issues.active.length\" class=\"col-xl-4\">\n                <app-issue-types [data]=\"issues.issueTypes\"></app-issue-types>\n            </div>\n            <div *ngIf=\"!loading && issues.active.length\" class=\"col-xl-8\">\n                <app-types-distribution [data]=\"issues.typesDistribution\" [months]=\"months\" *ngIf=\"issues.active.length\">\n                </app-types-distribution>\n            </div>\n        </div>\n\n    "
        })
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/charts/types-distribution.component.ts":
/*!********************************************************!*\
  !*** ./src/app/charts/types-distribution.component.ts ***!
  \********************************************************/
/*! exports provided: TypesDistributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesDistributionComponent", function() { return TypesDistributionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypesDistributionComponent = /** @class */ (function () {
    function TypesDistributionComponent() {
        this.initialGrey = '#A2ACAC';
        this.series = [];
        this.visibleSeries = [];
        this.seriesColors = [
            { label: 'SEV: Low', value: '#FF9966', active: false },
            { label: 'SEV: Medium', value: '#BB6ACB', active: false },
            { label: 'SEV: High', value: '#52C3D3', active: false },
            { label: 'Enhancement', value: '#22C85D', active: false },
            { label: 'Feature', value: '#FF6358', active: false },
            { label: 'Others', value: '#2BA7DA', active: false }
        ];
    }
    Object.defineProperty(TypesDistributionComponent.prototype, "months", {
        set: function (months) {
            months > 3 ? this.baseUnit = 'months' : this.baseUnit = 'weeks';
        },
        enumerable: true,
        configurable: true
    });
    TypesDistributionComponent.prototype.addSeries = function (button, toggleLabels) {
        if (toggleLabels) {
            this.seriesColors.forEach(function (s) {
                if (s.value === button.value) {
                    s.active = !s.active;
                }
            });
        }
        var newSeries = {
            color: this.seriesColors.filter(function (color) { return color.label === button.label; })[0].value,
            markers: { visible: false },
            data: this.data[button.label]
        };
        var present = this.visibleSeries.some(function (series) { return series.color === newSeries.color; });
        if (present) {
            var removeIndex = this.visibleSeries.map(function (item) { return item.color; }).indexOf(newSeries.color);
            // tslint:disable: no-unused-expression
            // tslint:disable: no-bitwise
            ~removeIndex && this.visibleSeries.splice(removeIndex, 1);
        }
        else {
            this.visibleSeries.push(newSeries);
        }
        this.series = this.visibleSeries;
    };
    TypesDistributionComponent.prototype.ngOnInit = function () {
        this.addSeries({ label: 'SEV: Low', value: '#FF9966', active: false }, true);
        this.addSeries({ label: 'Enhancement', value: '#22C85D', active: false }, true);
        this.addSeries({ label: 'Others', value: '#2BA7DA', active: false }, true);
    };
    TypesDistributionComponent.prototype.ngOnChanges = function (changes) {
        if (changes.data.previousValue && changes.data.previousValue.hasOwnProperty('Others')) {
            this.visibleSeries = [];
            this.addSeries({ label: 'SEV: Low', value: '#FF9966', active: false }, false);
            this.addSeries({ label: 'Enhancement', value: '#22C85D', active: false }, false);
            this.addSeries({ label: 'Others', value: '#2BA7DA', active: false }, false);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TypesDistributionComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], TypesDistributionComponent.prototype, "months", null);
    TypesDistributionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-types-distribution',
            template: "\n        <div class=\"k-card\">\n            <h2 class=\"k-card-header\">Types Distribution</h2>\n            <div class=\"k-card-body\">\n                <div class=\"row\">\n                  <div *ngFor=\"let button of seriesColors\" (click)=\"addSeries(button, true)\"\n                      [style.color]=\"button.active ? button.value : initialGrey\"\n                      class=\"col-6 col-sm-4 col-xl-2 comp-label label-clickable\">\n                      <div class=\"issues-count\">{{data[button.label].length}}</div>\n                      <div class=\"issues-label\">{{button.label}}</div>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-12 types-distribution\">\n                      <kendo-chart [pannable]=\"true\" [zoomable]=\"true\" style=\"height: 300px;\" [transitions]=\"false\">\n                      <kendo-chart-tooltip format=\"{0}\"></kendo-chart-tooltip>\n                          <kendo-chart-series-defaults type=\"line\" [overlay]=\"false\"></kendo-chart-series-defaults>\n                          <kendo-chart-category-axis>\n                              <kendo-chart-category-axis-item\n                                  baseUnit=\"months\"\n                                  [majorTicks]=\"{visible: false}\"\n                                  [labels]=\"{step: 4, skip: 2}\"\n                                  [majorGridLines]=\"{visible: false}\"\n                                  [line]=\"{visible: false}\"\n                              ></kendo-chart-category-axis-item>\n                          </kendo-chart-category-axis>\n                          <kendo-chart-series>\n                              <kendo-chart-series-item *ngFor=\"let series of visibleSeries\"\n                                  [data]=\"series.data\"\n                                  [markers]=\"series.markers\"\n                                  [color]=\"series.color\"\n                                  style=\"smooth\"\n                                  aggregate=\"count\"\n                                  categoryField=\"date\"\n                              ></kendo-chart-series-item>\n                          </kendo-chart-series>\n                          <kendo-chart-value-axis>\n                              <kendo-chart-value-axis-item\n                                  [line]=\"{visible: false}\" [labels]=\"{step: 2, skip: 2}\"\n                                  [majorGridLines]=\"{step: 2, skip: 2, color: '#F0F2F2'}\">\n                              </kendo-chart-value-axis-item>\n                          </kendo-chart-value-axis>\n                      </kendo-chart>\n                  </div>\n                </div>\n            </div>\n        </div>\n    "
        })
    ], TypesDistributionComponent);
    return TypesDistributionComponent;
}());



/***/ }),

/***/ "./src/app/common/index.ts":
/*!*********************************!*\
  !*** ./src/app/common/index.ts ***!
  \*********************************/
/*! exports provided: Config, RouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index */ "./src/app/common/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_0__["Config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]; });




/***/ }),

/***/ "./src/app/common/utils/Config.ts":
/*!****************************************!*\
  !*** ./src/app/common/utils/Config.ts ***!
  \****************************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Object.defineProperty(Config, "IS_WEB", {
        get: function () {
            return Config.PLATFORM_TARGET === Config.PLATFORMS.WEB;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config, "IS_MOBILE_NATIVE", {
        get: function () {
            return Config.PLATFORM_TARGET === Config.PLATFORMS.MOBILE_NATIVE;
        },
        enumerable: true,
        configurable: true
    });
    // supported platforms
    Config.PLATFORMS = {
        WEB: 'web',
        MOBILE_NATIVE: 'mobile_native'
    };
    // current target (defaults to web)
    Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;
    return Config;
}());



/***/ }),

/***/ "./src/app/common/utils/index.ts":
/*!***************************************!*\
  !*** ./src/app/common/utils/index.ts ***!
  \***************************************/
/*! exports provided: Config, RouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./src/app/common/utils/Config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return _Config__WEBPACK_IMPORTED_MODULE_0__["Config"]; });

/* harmony import */ var _router_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router-module */ "./src/app/common/utils/router-module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return _router_module__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]; });





/***/ }),

/***/ "./src/app/common/utils/router-module.ts":
/*!***********************************************!*\
  !*** ./src/app/common/utils/router-module.ts ***!
  \***********************************************/
/*! exports provided: RouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]; });




/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/github.service */ "./src/app/shared/github.service.ts");
/* harmony import */ var _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/issues-processor.service */ "./src/app/shared/issues-processor.service.ts");
/* harmony import */ var _shared_issues_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/issues.model */ "./src/app/shared/issues.model.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(githubService, issuesProcessor) {
        var _this = this;
        this.githubService = githubService;
        this.issuesProcessor = issuesProcessor;
        this.isLoading = true;
        this.today = new Date();
        this.months = 3;
        this.selectedIndex = 0;
        this.rangeStart = this.issuesProcessor.getMonthsRange(this.months);
        this.subscription =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(githubService
                .getGithubIssues({ pages: 5 })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) {
                _this.data = data;
                _this.isLoading = false;
                return _this.issuesProcessor.process(data, _this.months);
            }, function (err) { return _this.isLoading = false; })), Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _shared_issues_model__WEBPACK_IMPORTED_MODULE_4__["IssuesModel"]()))
                .subscribe(function (data) {
                _this.issues = data;
            });
    }
    Object.defineProperty(DashboardComponent.prototype, "get_id", {
        get: function () { return 'dashboard'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "get_class", {
        get: function () { return 'container-fluid'; },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.onFilterClick = function (months) {
        if (this.months !== months) {
            this.months = months;
            this.rangeStart = this.issuesProcessor.getMonthsRange(months);
            this.issues = this.issuesProcessor.process(this.data, months);
            this.filterIssues(this.selectedIndex);
        }
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DashboardComponent.prototype.onTabSelect = function (event) {
        this.filterIssues(event.index);
    };
    DashboardComponent.prototype.filterIssues = function (index) {
        switch (index) {
            case 0:
                this.issues = this.issuesProcessor.process(this.data, this.months);
                this.selectedIndex = 0;
                break;
            case 1:
                var assigned = this.issuesProcessor.flatten(this.data)
                    .filter(function (item) { return item.assignee ? item.assignee.login === 'ggkrustev' : false; });
                this.issues = this.issuesProcessor.process(assigned, this.months);
                this.selectedIndex = 1;
                break;
            case 2:
                var created = this.issuesProcessor.flatten(this.data).filter(function (item) { return item.user.login === 'ggkrustev'; });
                this.issues = this.issuesProcessor.process(created, this.months);
                this.selectedIndex = 2;
                break;
            default: this.issues = this.issuesProcessor.process(this.data, this.months);
        }
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _shared_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"] },
        { type: _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_3__["IssuesProcessor"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.id'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent.prototype, "get_id", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent.prototype, "get_class", null);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            providers: [_shared_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"], _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_3__["IssuesProcessor"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! raw-loader!./dashboard.template.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"], _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_3__["IssuesProcessor"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/index.ts":
/*!************************************!*\
  !*** ./src/app/dashboard/index.ts ***!
  \************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]; });




/***/ }),

/***/ "./src/app/issues/index.ts":
/*!*********************************!*\
  !*** ./src/app/issues/index.ts ***!
  \*********************************/
/*! exports provided: IssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _issues_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./issues.component */ "./src/app/issues/issues.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IssuesComponent", function() { return _issues_component__WEBPACK_IMPORTED_MODULE_0__["IssuesComponent"]; });




/***/ }),

/***/ "./src/app/issues/issues.component.ts":
/*!********************************************!*\
  !*** ./src/app/issues/issues.component.ts ***!
  \********************************************/
/*! exports provided: IssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesComponent", function() { return IssuesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_github_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/github.service */ "./src/app/shared/github.service.ts");
/* harmony import */ var _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/issues-processor.service */ "./src/app/shared/issues-processor.service.ts");





var IssuesComponent = /** @class */ (function () {
    function IssuesComponent(http, githubService, issuesProcessor) {
        var _this = this;
        this.http = http;
        this.githubService = githubService;
        this.issuesProcessor = issuesProcessor;
        this.isLoading = true;
        this.selectedPeriod = 3;
        this.total = 5;
        this.pageSize = 10;
        this.skip = 0;
        this.today = new Date();
        this.months = 3;
        this.range = this.dateRange();
        githubService.getGithubIssues({ pages: 5 }).subscribe(function (data) {
            data = data.reduce(function (agg, curr) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](agg, curr); }, []).filter(function (issue) { return issue.pull_request ? false : true; });
            _this.allIssues = data;
            _this.applyPaging(_this.issuesProcessor.filterByMonth(_this.allIssues, _this.months));
            _this.isLoading = false;
        }, function () { return _this.isLoading = false; });
    }
    Object.defineProperty(IssuesComponent.prototype, "get_id", {
        get: function () { return 'issues'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IssuesComponent.prototype, "get_class", {
        get: function () { return 'container-fluid'; },
        enumerable: true,
        configurable: true
    });
    IssuesComponent.prototype.onFilterClick = function (e) {
        this.selectedPeriod = e;
        this.skip = 0;
        this.months = e;
        this.range = this.dateRange();
        this.applyPaging(this.issuesProcessor.filterByMonth(this.allIssues, e));
    };
    IssuesComponent.prototype.onPageChange = function (e) {
        this.skip = e.skip;
        this.view = this.getView(e.skip, e.take);
    };
    IssuesComponent.prototype.applyPaging = function (data) {
        this.issues = data;
        this.view = this.getView(this.skip, this.pageSize);
    };
    IssuesComponent.prototype.getView = function (skip, take) {
        return {
            data: this.issues.slice(skip, skip + take),
            total: this.issues.length
        };
    };
    IssuesComponent.prototype.dateRange = function () {
        return {
            to: new Date(),
            from: this.issuesProcessor.getMonthsRange(this.months)
        };
    };
    IssuesComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _shared_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"] },
        { type: _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_4__["IssuesProcessor"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('attr.id'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IssuesComponent.prototype, "get_id", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IssuesComponent.prototype, "get_class", null);
    IssuesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-issues',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            providers: [
                _shared_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"],
                _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_4__["IssuesProcessor"]
            ],
            template: __webpack_require__(/*! raw-loader!./issues.template.html */ "./node_modules/raw-loader/index.js!./src/app/issues/issues.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _shared_github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"], _shared_issues_processor_service__WEBPACK_IMPORTED_MODULE_4__["IssuesProcessor"]])
    ], IssuesComponent);
    return IssuesComponent;
}());



/***/ }),

/***/ "./src/app/issues/label.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/issues/label.directive.ts ***!
  \*******************************************/
/*! exports provided: LabelClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelClass", function() { return LabelClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// tslint:disable-next-line: directive-selector
var LabelClass = /** @class */ (function () {
    function LabelClass(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        // tslint:disable-next-line:member-ordering
        this.colors = {
            'SEV: LOW': '#ff9800',
            'SEV: MEDIUM': '#ff5d2a',
            'SEV: HIGH': '#d50000',
            ENHANCEMENT: '#00c853',
            FEATURE: '#2e7d32',
            OTHER: '#1ca8dd',
            'PASSED QA': '#57b45b',
            BUG: '#cf3257',
            'NEEDS QA': '#bc007c',
            DOCUMENTATION: '#455a64',
            DEMO: '#673ab7',
            DELETED: '#f44336',
            'IN PROGRESS': '#ffd600'
        };
    }
    Object.defineProperty(LabelClass.prototype, "labelClass", {
        set: function (text) {
            var color = this.matchColor(text);
            this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', color);
        },
        enumerable: true,
        configurable: true
    });
    LabelClass.prototype.matchColor = function (text) {
        var color = this.colors[text.toUpperCase()];
        return color ? color : this.colors.OTHER;
    };
    LabelClass.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], LabelClass.prototype, "labelClass", null);
    LabelClass = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[labelClass]' })
        // tslint:disable-next-line: directive-class-suffix
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], LabelClass);
    return LabelClass;
}());



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(router) {
        this.router = router;
        this.year = new Date().getFullYear();
        if (window.innerWidth < 1200) {
            this.navState = 'collapsed';
        }
        else {
            this.navState = 'expanded';
        }
    }
    Object.defineProperty(MainMenuComponent.prototype, "id", {
        get: function () {
            return 'app';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainMenuComponent.prototype, "appClass", {
        get: function () {
            return 'app container-fluid';
        },
        enumerable: true,
        configurable: true
    });
    MainMenuComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth < 1200) {
            this.navState = 'collapsed';
        }
        else {
            this.navState = 'expanded';
        }
    };
    MainMenuComponent.prototype.showNav = function () {
        return this.router.url !== '/signin';
    };
    MainMenuComponent.prototype.toggleNav = function () {
        if (this.navState === 'expanded') {
            this.navState = 'collapsed';
        }
        else {
            this.navState = 'expanded';
        }
    };
    MainMenuComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('attr.id'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainMenuComponent.prototype, "id", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainMenuComponent.prototype, "appClass", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MainMenuComponent.prototype, "onResize", null);
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! raw-loader!./main-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-menu/main-menu.component.html"),
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toggleNav', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('collapsed <=> expanded', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200)
                    ])
                ])],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/markdown/markdown.component.ts":
/*!************************************************!*\
  !*** ./src/app/markdown/markdown.component.ts ***!
  \************************************************/
/*! exports provided: MarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownComponent", function() { return MarkdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);



var MarkdownComponent = /** @class */ (function () {
    function MarkdownComponent() {
    }
    MarkdownComponent.prototype.ngOnChanges = function () {
        var md = marked__WEBPACK_IMPORTED_MODULE_2__["setOptions"]({});
        this.convertedData = md.parse(this.data);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MarkdownComponent.prototype, "data", void 0);
    MarkdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-markdown',
            template: '<div [innerHTML]="convertedData"></div>'
        })
    ], MarkdownComponent);
    return MarkdownComponent;
}());



/***/ }),

/***/ "./src/app/profile/index.ts":
/*!**********************************!*\
  !*** ./src/app/profile/index.ts ***!
  \**********************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]; });




/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/github.service */ "./src/app/shared/github.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(githubService, router) {
        var _this = this;
        this.githubService = githubService;
        this.router = router;
        this.isLoading = true;
        this.user = {};
        this.profileDialogVisible = false;
        this.deleteDialogVisible = false;
        githubService.getGithubUser('mbechev').subscribe(function (data) {
            _this.user = data;
            _this.isLoading = false;
        }, function (err) {
            _this.isLoading = false;
        });
    }
    Object.defineProperty(ProfileComponent.prototype, "get_id", {
        get: function () { return 'profile'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "get_class", {
        get: function () { return 'container-fluid'; },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.onProfileDialogClose = function () {
        this.profileDialogVisible = false;
    };
    ProfileComponent.prototype.onSignOutClick = function () {
        this.router.navigate(['/signin']);
    };
    ProfileComponent.prototype.onUpdateClick = function () {
        this.profileDialogVisible = true;
    };
    ProfileComponent.prototype.onDeleteClick = function () {
        this.deleteDialogVisible = true;
    };
    ProfileComponent.prototype.onDeleteDialogClose = function () {
        this.deleteDialogVisible = false;
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _shared_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.id'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent.prototype, "get_id", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent.prototype, "get_class", null);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [_shared_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"]],
            template: __webpack_require__(/*! raw-loader!./profile.template.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/github.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/github.service.ts ***!
  \******************************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var baseUrl = 'https://api.github.com/repos/telerik/kendo-ui-core/issues';
var token = 'b95116792cba5a8169a1ec10640d8c16535c6419';
var epoch = '2018-01-01T00:00:00';
var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
    // Generate your own token through
    // https://github.com/settings/tokens
    Authorization: "token " + token
});
var GithubService = /** @class */ (function () {
    function GithubService(http) {
        this.http = http;
    }
    GithubService.prototype.getGithubIssues = function (pages) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.getIssuesUrls(pages));
    };
    GithubService.prototype.getTotalIssuesCount = function () {
        return this.http.get(baseUrl + "?since='" + epoch + "'", { headers: headers });
    };
    GithubService.prototype.getIssuesUrls = function (_a) {
        var pages = _a.pages;
        var result = [];
        for (var index = 1; index < pages; index++) {
            result.push(this.http.get(baseUrl + "?state=all&page=" + index + "&per_page=100", { headers: headers }));
        }
        return result;
    };
    GithubService.prototype.getIssuesPerPage = function (skip, take) {
        var page = (take + skip) / take;
        return this.http.get(baseUrl + "?state=all&page=" + page + "&per_page=" + take, { headers: headers });
    };
    GithubService.prototype.getGithubUser = function (username) {
        return this.http.get("https://api.github.com/users/" + username, { headers: headers });
    };
    GithubService.prototype.getGithubIssue = function (id) {
        return this.http.get(baseUrl + "/" + id, { headers: headers });
    };
    GithubService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    GithubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GithubService);
    return GithubService;
}());



/***/ }),

/***/ "./src/app/shared/issues-processor.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/issues-processor.service.ts ***!
  \****************************************************/
/*! exports provided: IssuesProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesProcessor", function() { return IssuesProcessor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issues_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./issues.model */ "./src/app/shared/issues.model.ts");



var colors = {
    'SEV: LOW': '#ff9800',
    'SEV: MEDIUM': '#ff5d2a',
    'SEV: HIGH': '#d50000',
    ENHANCEMENT: '#00c853',
    FEATURE: '#2e7d32',
    OTHER: '#1ca8dd',
    'PASSED QA': '#57b45b',
    BUG: '#cf3257',
    'NEEDS QA': '#bc007c',
    DOCUMENTATION: '#455a64',
    DEMO: '#673ab7',
    DELETED: '#f44336',
    'IN PROGRESS': '#ffd600'
};
var IssuesProcessor = /** @class */ (function () {
    function IssuesProcessor() {
    }
    IssuesProcessor_1 = IssuesProcessor;
    IssuesProcessor.mapIssues = function (data) {
        return data
            .reduce(function (agg, curr) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](agg, curr); }, [])
            .filter(function (issue) { return !issue.pull_request; })
            .map(IssuesProcessor_1.mapIssue);
    };
    IssuesProcessor.mapIssue = function (issue) {
        return {
            id: issue.number,
            title: issue.title,
            body: issue.body,
            author: IssuesProcessor_1.mapUser(issue.user),
            assignees: (issue.assignees ? issue.assignees.map(IssuesProcessor_1.mapUser) : []),
            state: issue.state,
            date: new Date(issue.created_at),
            dateClosed: (issue.closed_at ? new Date(issue.closed_at) : undefined),
            count: 1,
            labels: issue.labels.map(IssuesProcessor_1.mapLabels),
            milestone: issue.milestone,
            created_at: issue.created_at,
            assignee: issue.assignee ? issue.assignee.login : 'none'
        };
    };
    IssuesProcessor.mapLabels = function (label) {
        var name = label.name.toUpperCase();
        if (name in colors) {
            label.color = colors[name];
        }
        else {
            label.color = colors.OTHER;
        }
        return label;
    };
    IssuesProcessor.mapUser = function (user) {
        return {
            id: user.id,
            name: user.login,
            avatarUrl: user.avatar_url,
            avatarUrlThumb: user.avatar_url + '&size=60'
        };
    };
    IssuesProcessor.prototype.process = function (data, months) {
        var mappedIssues = this.filterByMonth(IssuesProcessor_1.mapIssues(data), months);
        var groupedIssues = this.groupIssues(mappedIssues);
        return new _issues_model__WEBPACK_IMPORTED_MODULE_2__["IssuesModel"](mappedIssues, groupedIssues.open.length, groupedIssues.closed.length, groupedIssues, this.groupLabels(mappedIssues), this.distribution(mappedIssues), this.closeRate(groupedIssues));
    };
    IssuesProcessor.prototype.flatten = function (data) {
        return data.reduce(function (agg, curr) { return agg.concat(curr); });
    };
    IssuesProcessor.prototype.aggregate = function (data, field) {
        return data.reduce(function (agg, curr) {
            agg[curr[field]] = (agg[curr[field]] || 0) + 1;
            return agg;
        }, {});
    };
    IssuesProcessor.prototype.closeRate = function (data) {
        var closed = this.aggregate(data.closed.map(function (item) { return ({
            created_at: new Date(item.created_at).setHours(0, 0, 0, 0)
        }); }), 'created_at');
        var open = this.aggregate(data.open.map(function (item) { return ({
            created_at: new Date(item.created_at).setHours(0, 0, 0, 0)
        }); }), 'created_at');
        var rate = Object.keys(closed).map(function (key) {
            var closedKey = closed[key] || 0;
            var openKey = open[key] || 0;
            var closeRate = closedKey / (closedKey + openKey);
            return {
                created_at: key,
                close_rate: closeRate
            };
        });
        return {
            lowest: rate.reduce(function (agg, curr) { return agg.close_rate < curr.close_rate ? agg : curr; }),
            highest: rate.reduce(function (agg, curr) { return agg.close_rate > curr.close_rate ? agg : curr; }),
            average: data.closed.length / (data.open.length + data.closed.length)
        };
    };
    IssuesProcessor.prototype.groupIssues = function (data) {
        return data.reduce(function (agg, curr) {
            agg[curr.state].push(curr);
            return agg;
        }, { open: [], closed: [] });
    };
    IssuesProcessor.prototype.groupLabels = function (data) {
        var labels = this.aggregate(this.flatten(data.map(function (item) { return item.labels; })), 'name');
        var low = (labels['SEV: Low'] / data.length);
        var medium = labels['SEV: Medium'] / data.length;
        var high = labels['SEV: High'] / data.length;
        var enhancement = labels.Enhancement / data.length;
        var feature = labels.Feature / data.length;
        var other = 1 - low - medium - high - enhancement - feature;
        return [
            { type: 'SEV: LOW', value: parseFloat(low.toFixed(2)) },
            { type: 'SEV: MEDIUM', value: parseFloat(medium.toFixed(2)) },
            { type: 'SEV: HIGH', value: parseFloat(high.toFixed(2)) },
            { type: 'ENHANCEMENT', value: parseFloat(enhancement.toFixed(2)) },
            { type: 'FEATURE', value: parseFloat(feature.toFixed(2)) },
            { type: 'OTHER', value: parseFloat(other.toFixed(2)) }
        ];
    };
    IssuesProcessor.prototype.distribution = function (data) {
        var _this = this;
        return data.map(function (item) { return ({
            created_at: new Date(item.created_at).setHours(0, 0, 0, 0),
            label: _this.cleanupLabels(item.labels)
        }); })
            .reduce(function (agg, curr) {
            agg[curr.label].push({
                date: new Date(curr.created_at),
                value: 1
            });
            return agg;
        }, { Others: [], Enhancement: [], 'SEV: Low': [], 'SEV: Medium': [], 'SEV: High': [], Feature: [] });
    };
    IssuesProcessor.prototype.cleanupLabels = function (labels) {
        var filtered = labels.filter(function (label) {
            return label.name === 'SEV: Low' ||
                label.name === 'SEV: High' ||
                label.name === 'Feature' ||
                label.name === 'Enhancement' ||
                label.name === 'SEV: Medium';
        })
            .map(function (label) { return label.name; });
        return filtered.length === 0 ? 'Others' : filtered[0];
    };
    IssuesProcessor.prototype.filterByMonth = function (data, months) {
        var _this = this;
        return data.filter(function (value) {
            return new Date(value.created_at).getTime() > _this.getMonthsRange(months).getTime();
        });
    };
    IssuesProcessor.prototype.filterByUsername = function (data, username) {
        return this.process(data, 12).active.filter(function (value) {
            return value.assignee === username;
        });
    };
    IssuesProcessor.prototype.getMonthsRange = function (months) {
        var since = new Date();
        since.setMonth(since.getMonth() - months);
        return since;
    };
    var IssuesProcessor_1;
    IssuesProcessor = IssuesProcessor_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], IssuesProcessor);
    return IssuesProcessor;
}());



/***/ }),

/***/ "./src/app/shared/issues.model.ts":
/*!****************************************!*\
  !*** ./src/app/shared/issues.model.ts ***!
  \****************************************/
/*! exports provided: IssuesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesModel", function() { return IssuesModel; });
var IssuesModel = /** @class */ (function () {
    function IssuesModel(active, open, closed, groupedIssues, issueTypes, typesDistribution, closeRate) {
        if (active === void 0) { active = []; }
        if (open === void 0) { open = 0; }
        if (closed === void 0) { closed = 0; }
        if (groupedIssues === void 0) { groupedIssues = {
            open: [],
            closed: []
        }; }
        if (issueTypes === void 0) { issueTypes = []; }
        if (typesDistribution === void 0) { typesDistribution = {
            Enhancement: [],
            Others: [],
            'SEV: Low': [],
            'SEV: Medium': [],
            'SEV: High': [],
            Feature: []
        }; }
        if (closeRate === void 0) { closeRate = {
            lowest: {
                close_rate: 0,
                created_at: new Date().toISOString()
            },
            highest: {
                close_rate: 0,
                created_at: new Date().toISOString()
            },
            average: 0
        }; }
        this.active = active;
        this.open = open;
        this.closed = closed;
        this.groupedIssues = groupedIssues;
        this.issueTypes = issueTypes;
        this.typesDistribution = typesDistribution;
        this.closeRate = closeRate;
    }
    IssuesModel.ctorParameters = function () { return [
        { type: Array },
        null,
        null,
        null,
        null,
        null,
        null
    ]; };
    return IssuesModel;
}());



/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-spinner',
            template: "\n        <div class=\"k-i-loading\">\n        </div>\n    ",
            styles: ["\n      .k-i-loading {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        font-size: 100px;\n        color: #252830;\n      }\n    "]
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/signin/index.ts":
/*!*********************************!*\
  !*** ./src/app/signin/index.ts ***!
  \*********************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.component */ "./src/app/signin/signin.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return _signin_component__WEBPACK_IMPORTED_MODULE_0__["SigninComponent"]; });




/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SigninComponent = /** @class */ (function () {
    function SigninComponent(router) {
        this.router = router;
    }
    Object.defineProperty(SigninComponent.prototype, "id", {
        get: function () {
            return 'login';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SigninComponent.prototype, "appClass", {
        get: function () {
            return 'justify-content-center';
        },
        enumerable: true,
        configurable: true
    });
    SigninComponent.prototype.onLoginClick = function () {
        this.router.navigate(['/dashboard']);
    };
    SigninComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.id'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SigninComponent.prototype, "id", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SigninComponent.prototype, "appClass", null);
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! raw-loader!./signin.template.html */ "./node_modules/raw-loader/index.js!./src/app/signin/signin.template.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninComponent);
    return SigninComponent;
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

module.exports = __webpack_require__(/*! C:\IVO\NG-PWA-GH-PAGES\kendo-angular-material-dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map