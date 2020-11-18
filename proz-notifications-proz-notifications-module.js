(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proz-notifications-proz-notifications-module"],{

/***/ "./src/app/proz-notifications/proz-notifications-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/proz-notifications/proz-notifications-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProzNotificationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzNotificationsRoutingModule", function() { return ProzNotificationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _proz_notifications_proz_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proz-notifications/proz-notifications.component */ "./src/app/proz-notifications/proz-notifications/proz-notifications.component.ts");




var routes = [
    {
        path: 'notifications', component: _proz_notifications_proz_notifications_component__WEBPACK_IMPORTED_MODULE_3__["ProzNotificationsComponent"],
    }
];
var ProzNotificationsRoutingModule = /** @class */ (function () {
    function ProzNotificationsRoutingModule() {
    }
    ProzNotificationsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProzNotificationsRoutingModule);
    return ProzNotificationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/proz-notifications/proz-notifications.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/proz-notifications/proz-notifications.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProzNotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzNotificationsModule", function() { return ProzNotificationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _proz_notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proz-notifications-routing.module */ "./src/app/proz-notifications/proz-notifications-routing.module.ts");
/* harmony import */ var _proz_notifications_proz_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proz-notifications/proz-notifications.component */ "./src/app/proz-notifications/proz-notifications/proz-notifications.component.ts");
/* harmony import */ var _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/prozadmin-sidemenu/proz-sidemenu.module */ "./src/app/common/prozadmin-sidemenu/proz-sidemenu.module.ts");
/* harmony import */ var _common_commonheader_commonheader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/commonheader/commonheader.module */ "./src/app/common/commonheader/commonheader.module.ts");
/* harmony import */ var _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/commonvanlynkheader/commonvanlynkheader.module */ "./src/app/common/commonvanlynkheader/commonvanlynkheader.module.ts");
/* harmony import */ var _common_commontopprozpurplefooter_commontopprozfooter_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/commontopprozpurplefooter/commontopprozfooter.module */ "./src/app/common/commontopprozpurplefooter/commontopprozfooter.module.ts");
/* harmony import */ var _common_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/notifications/notifications.module */ "./src/app/common/notifications/notifications.module.ts");










var ProzNotificationsModule = /** @class */ (function () {
    function ProzNotificationsModule() {
    }
    ProzNotificationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_proz_notifications_proz_notifications_component__WEBPACK_IMPORTED_MODULE_4__["ProzNotificationsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _proz_notifications_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProzNotificationsRoutingModule"],
                _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_5__["ProzSidemenuModule"],
                _common_commonheader_commonheader_module__WEBPACK_IMPORTED_MODULE_6__["CommonHeaderModule"],
                _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_7__["CommonvanlynkheaderModule"],
                _common_commontopprozpurplefooter_commontopprozfooter_module__WEBPACK_IMPORTED_MODULE_8__["CommontopprozfooterModule"],
                _common_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_9__["NotificationsModule"],
            ],
        })
    ], ProzNotificationsModule);
    return ProzNotificationsModule;
}());



/***/ }),

/***/ "./src/app/proz-notifications/proz-notifications/proz-notifications.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/proz-notifications/proz-notifications/proz-notifications.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n\r\n<div class=\"page-content\">\r\n     <!-- Page Breadcrumb -->\r\n     <div class=\"page-breadcrumbs\">\r\n          <ul class=\"breadcrumb\">\r\n               <li (click)=\"goToHome()\">\r\n                    <i class=\"fa fa-home\"></i>\r\n                    <a (click)=\"home()\">Home</a>\r\n               </li>\r\n               <li>\r\n                    Notification\r\n               </li> \r\n          </ul>\r\n     </div>\r\n     <app-notifications></app-notifications>\r\n\r\n     <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/proz-notifications/proz-notifications/proz-notifications.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/proz-notifications/proz-notifications/proz-notifications.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3otbm90aWZpY2F0aW9ucy9wcm96LW5vdGlmaWNhdGlvbnMvcHJvei1ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/proz-notifications/proz-notifications/proz-notifications.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/proz-notifications/proz-notifications/proz-notifications.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProzNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzNotificationsComponent", function() { return ProzNotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");




var ProzNotificationsComponent = /** @class */ (function () {
    function ProzNotificationsComponent(router, beyond) {
        this.router = router;
        this.beyond = beyond;
    }
    ProzNotificationsComponent.prototype.ngOnInit = function () {
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.beyond.beyondAdmin();
        // this.beyond.dispatchBoard();
        // this.beyond.notification();
    };
    ProzNotificationsComponent.prototype.goToHome = function () {
        var proz = localStorage.getItem("login");
        if (proz && typeof proz === 'string') {
            var pro = JSON.parse(proz);
            this.router.navigate(["/proz-dashboard/prozDashboard/" + pro.loginCode]);
        }
    };
    ProzNotificationsComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    ProzNotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proz-notifications',
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"]],
            template: __webpack_require__(/*! ./proz-notifications.component.html */ "./src/app/proz-notifications/proz-notifications/proz-notifications.component.html"),
            styles: [__webpack_require__(/*! ./proz-notifications.component.scss */ "./src/app/proz-notifications/proz-notifications/proz-notifications.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"]])
    ], ProzNotificationsComponent);
    return ProzNotificationsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=proz-notifications-proz-notifications-module.js.map