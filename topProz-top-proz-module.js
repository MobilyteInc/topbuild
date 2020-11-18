(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["topProz-top-proz-module"],{

/***/ "./src/app/topProz/top-proz-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/topProz/top-proz-routing.module.ts ***!
  \****************************************************/
/*! exports provided: TopProzRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopProzRoutingModule", function() { return TopProzRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _topProz_topproz_layout_topproz_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../topProz/topproz-layout/topproz-layout.component */ "./src/app/topProz/topproz-layout/topproz-layout.component.ts");
/* harmony import */ var _topProz_topproz_pricing_topproz_pricing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topProz/topproz-pricing/topproz-pricing.component */ "./src/app/topProz/topproz-pricing/topproz-pricing.component.ts");
/* harmony import */ var _topProz_topproz_professionals_topproz_professionals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../topProz/topproz-professionals/topproz-professionals.component */ "./src/app/topProz/topproz-professionals/topproz-professionals.component.ts");
/* harmony import */ var _topProz_topproz_select_category_details_topproz_select_category_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../topProz/topproz-select-category-details/topproz-select-category-details.component */ "./src/app/topProz/topproz-select-category-details/topproz-select-category-details.component.ts");
/* harmony import */ var _topProz_topproz_services_howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../topProz/topproz-services/howitworks/howitworks.component */ "./src/app/topProz/topproz-services/howitworks/howitworks.component.ts");
/* harmony import */ var _topProz_topproz_services_topproz_service_sub_category_topproz_service_sub_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../topProz/topproz-services/topproz-service-sub-category/topproz-service-sub-category.component */ "./src/app/topProz/topproz-services/topproz-service-sub-category/topproz-service-sub-category.component.ts");
/* harmony import */ var _topProz_topproz_services_topproz_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../topProz/topproz-services/topproz-services.component */ "./src/app/topProz/topproz-services/topproz-services.component.ts");
/* harmony import */ var _topProz_topproz_signin_topproz_signin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../topProz/topproz-signin/topproz-signin.component */ "./src/app/topProz/topproz-signin/topproz-signin.component.ts");
/* harmony import */ var _topProz_topproz_vanlynk_topproz_vanlynk_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../topProz/topproz-vanlynk/topproz-vanlynk.component */ "./src/app/topProz/topproz-vanlynk/topproz-vanlynk.component.ts");
/* harmony import */ var _topProz_topproz_beapro_topproz_beapro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../topProz/topproz-beapro/topproz-beapro.component */ "./src/app/topProz/topproz-beapro/topproz-beapro.component.ts");
/* harmony import */ var _topProz_topproz_beapro_password_topproz_beapro_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../topProz/topproz-beapro-password/topproz-beapro-password.component */ "./src/app/topProz/topproz-beapro-password/topproz-beapro-password.component.ts");
/* harmony import */ var _topproz_confirmation_topproz_confirmation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./topproz-confirmation/topproz-confirmation.component */ "./src/app/topProz/topproz-confirmation/topproz-confirmation.component.ts");
/* harmony import */ var _topproz_vanlynk_beapro_topproz_vanlynk_beapro_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./topproz-vanlynk-beapro/topproz-vanlynk-beapro.component */ "./src/app/topProz/topproz-vanlynk-beapro/topproz-vanlynk-beapro.component.ts");
/* harmony import */ var _topproz_vanlynk_beapro_password_topproz_vanlynk_beapro_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./topproz-vanlynk-beapro-password/topproz-vanlynk-beapro-password.component */ "./src/app/topProz/topproz-vanlynk-beapro-password/topproz-vanlynk-beapro-password.component.ts");




//import { TopprozHomeComponent } from '../topProz/topproz-home/topproz-home.component';













var routes = [
    { path: '', component: _topProz_topproz_layout_topproz_layout_component__WEBPACK_IMPORTED_MODULE_3__["TopprozLayoutComponent"],
        children: [
            {
                path: 'pricing',
                component: _topProz_topproz_pricing_topproz_pricing_component__WEBPACK_IMPORTED_MODULE_4__["TopprozPricingComponent"]
            },
            {
                path: 'professionals',
                component: _topProz_topproz_professionals_topproz_professionals_component__WEBPACK_IMPORTED_MODULE_5__["TopprozProfessionalsComponent"]
            },
            {
                path: 'topprozSelectCategoryDetails/:serviceName',
                component: _topProz_topproz_select_category_details_topproz_select_category_details_component__WEBPACK_IMPORTED_MODULE_6__["TopprozSelectCategoryDetailsComponent"]
            },
            {
                path: 'howItWorks',
                component: _topProz_topproz_services_howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_7__["HowitworksComponent"]
            },
            {
                path: 'topprozservicesubcategory/:cat_code/:categoryName',
                component: _topProz_topproz_services_topproz_service_sub_category_topproz_service_sub_category_component__WEBPACK_IMPORTED_MODULE_8__["TopprozServiceSubCategoryComponent"]
            },
            {
                path: 'services',
                component: _topProz_topproz_services_topproz_services_component__WEBPACK_IMPORTED_MODULE_9__["TopprozServicesComponent"]
            },
            {
                path: 'signin/:id',
                component: _topProz_topproz_signin_topproz_signin_component__WEBPACK_IMPORTED_MODULE_10__["TopprozSigninComponent"]
            },
            {
                path: 'vanlynk',
                component: _topProz_topproz_vanlynk_topproz_vanlynk_component__WEBPACK_IMPORTED_MODULE_11__["TopprozVanlynkComponent"]
            },
            {
                path: 'beAPRO',
                component: _topProz_topproz_beapro_topproz_beapro_component__WEBPACK_IMPORTED_MODULE_12__["TopprozBeaproComponent"]
            },
            {
                path: 'passwordConfirmation/:prozId',
                component: _topProz_topproz_beapro_password_topproz_beapro_password_component__WEBPACK_IMPORTED_MODULE_13__["TopprozBeaproPasswordComponent"]
            },
            {
                path: 'topProzConfirmation/:prozId',
                component: _topproz_confirmation_topproz_confirmation_component__WEBPACK_IMPORTED_MODULE_14__["TopprozConfirmationComponent"]
            },
            {
                path: 'vanlynkBeAPro',
                component: _topproz_vanlynk_beapro_topproz_vanlynk_beapro_component__WEBPACK_IMPORTED_MODULE_15__["TopprozVanlynkBeaproComponent"]
            },
            {
                path: 'vanlynkBeAProPassword/:vanlynkId',
                component: _topproz_vanlynk_beapro_password_topproz_vanlynk_beapro_password_component__WEBPACK_IMPORTED_MODULE_16__["TopprozVanlynkBeaproPasswordComponent"]
            }
        ]
    },
];
var TopProzRoutingModule = /** @class */ (function () {
    function TopProzRoutingModule() {
    }
    TopProzRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TopProzRoutingModule);
    return TopProzRoutingModule;
}());



/***/ }),

/***/ "./src/app/topProz/top-proz.module.ts":
/*!********************************************!*\
  !*** ./src/app/topProz/top-proz.module.ts ***!
  \********************************************/
/*! exports provided: TopProzModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopProzModule", function() { return TopProzModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _top_proz_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-proz-routing.module */ "./src/app/topProz/top-proz-routing.module.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _topproz_layout_topproz_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topproz-layout/topproz-layout.component */ "./src/app/topProz/topproz-layout/topproz-layout.component.ts");
/* harmony import */ var _common_commontopprozheader_commontopprozheader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/commontopprozheader/commontopprozheader.module */ "./src/app/common/commontopprozheader/commontopprozheader.module.ts");
/* harmony import */ var _common_commontopprozblueheader_commontopprozblueheader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/commontopprozblueheader/commontopprozblueheader.module */ "./src/app/common/commontopprozblueheader/commontopprozblueheader.module.ts");
/* harmony import */ var _topProz_topproz_pricing_topproz_pricing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../topProz/topproz-pricing/topproz-pricing.component */ "./src/app/topProz/topproz-pricing/topproz-pricing.component.ts");
/* harmony import */ var _common_commonfooter_commonfooter_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/commonfooter/commonfooter.module */ "./src/app/common/commonfooter/commonfooter.module.ts");
/* harmony import */ var _topProz_topproz_professionals_topproz_professionals_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../topProz/topproz-professionals/topproz-professionals.component */ "./src/app/topProz/topproz-professionals/topproz-professionals.component.ts");
/* harmony import */ var _topProz_topproz_select_category_details_topproz_select_category_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../topProz/topproz-select-category-details/topproz-select-category-details.component */ "./src/app/topProz/topproz-select-category-details/topproz-select-category-details.component.ts");
/* harmony import */ var _topProz_topproz_services_howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../topProz/topproz-services/howitworks/howitworks.component */ "./src/app/topProz/topproz-services/howitworks/howitworks.component.ts");
/* harmony import */ var _topProz_topproz_services_topproz_service_sub_category_topproz_service_sub_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../topProz/topproz-services/topproz-service-sub-category/topproz-service-sub-category.component */ "./src/app/topProz/topproz-services/topproz-service-sub-category/topproz-service-sub-category.component.ts");
/* harmony import */ var _topProz_topproz_services_topproz_services_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../topProz/topproz-services/topproz-services.component */ "./src/app/topProz/topproz-services/topproz-services.component.ts");
/* harmony import */ var _topProz_topproz_signin_topproz_signin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../topProz/topproz-signin/topproz-signin.component */ "./src/app/topProz/topproz-signin/topproz-signin.component.ts");
/* harmony import */ var _topProz_topproz_vanlynk_topproz_vanlynk_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../topProz/topproz-vanlynk/topproz-vanlynk.component */ "./src/app/topProz/topproz-vanlynk/topproz-vanlynk.component.ts");
/* harmony import */ var _topProz_topproz_beapro_topproz_beapro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../topProz/topproz-beapro/topproz-beapro.component */ "./src/app/topProz/topproz-beapro/topproz-beapro.component.ts");
/* harmony import */ var _topProz_topproz_beapro_password_topproz_beapro_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../topProz/topproz-beapro-password/topproz-beapro-password.component */ "./src/app/topProz/topproz-beapro-password/topproz-beapro-password.component.ts");
/* harmony import */ var _topproz_confirmation_topproz_confirmation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./topproz-confirmation/topproz-confirmation.component */ "./src/app/topProz/topproz-confirmation/topproz-confirmation.component.ts");
/* harmony import */ var _topproz_vanlynk_beapro_topproz_vanlynk_beapro_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./topproz-vanlynk-beapro/topproz-vanlynk-beapro.component */ "./src/app/topProz/topproz-vanlynk-beapro/topproz-vanlynk-beapro.component.ts");
/* harmony import */ var _topproz_vanlynk_beapro_password_topproz_vanlynk_beapro_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./topproz-vanlynk-beapro-password/topproz-vanlynk-beapro-password.component */ "./src/app/topProz/topproz-vanlynk-beapro-password/topproz-vanlynk-beapro-password.component.ts");























var TopProzModule = /** @class */ (function () {
    function TopProzModule() {
    }
    TopProzModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _topproz_layout_topproz_layout_component__WEBPACK_IMPORTED_MODULE_6__["TopprozLayoutComponent"],
                _topProz_topproz_pricing_topproz_pricing_component__WEBPACK_IMPORTED_MODULE_9__["TopprozPricingComponent"],
                _topProz_topproz_professionals_topproz_professionals_component__WEBPACK_IMPORTED_MODULE_11__["TopprozProfessionalsComponent"],
                _topProz_topproz_select_category_details_topproz_select_category_details_component__WEBPACK_IMPORTED_MODULE_12__["TopprozSelectCategoryDetailsComponent"],
                _topProz_topproz_services_topproz_service_sub_category_topproz_service_sub_category_component__WEBPACK_IMPORTED_MODULE_14__["TopprozServiceSubCategoryComponent"],
                _topProz_topproz_services_topproz_services_component__WEBPACK_IMPORTED_MODULE_15__["TopprozServicesComponent"],
                _topProz_topproz_signin_topproz_signin_component__WEBPACK_IMPORTED_MODULE_16__["TopprozSigninComponent"],
                _topProz_topproz_vanlynk_topproz_vanlynk_component__WEBPACK_IMPORTED_MODULE_17__["TopprozVanlynkComponent"],
                _topProz_topproz_services_howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_13__["HowitworksComponent"],
                _topProz_topproz_beapro_topproz_beapro_component__WEBPACK_IMPORTED_MODULE_18__["TopprozBeaproComponent"],
                _topProz_topproz_beapro_password_topproz_beapro_password_component__WEBPACK_IMPORTED_MODULE_19__["TopprozBeaproPasswordComponent"],
                _topproz_confirmation_topproz_confirmation_component__WEBPACK_IMPORTED_MODULE_20__["TopprozConfirmationComponent"],
                _topproz_vanlynk_beapro_topproz_vanlynk_beapro_component__WEBPACK_IMPORTED_MODULE_21__["TopprozVanlynkBeaproComponent"],
                _topproz_vanlynk_beapro_password_topproz_vanlynk_beapro_password_component__WEBPACK_IMPORTED_MODULE_22__["TopprozVanlynkBeaproPasswordComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _top_proz_routing_module__WEBPACK_IMPORTED_MODULE_4__["TopProzRoutingModule"],
                _common_commontopprozheader_commontopprozheader_module__WEBPACK_IMPORTED_MODULE_7__["CommontopprozheaderModule"],
                _common_commontopprozblueheader_commontopprozblueheader_module__WEBPACK_IMPORTED_MODULE_8__["CommontopprozblueheaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _common_commonfooter_commonfooter_module__WEBPACK_IMPORTED_MODULE_10__["CommonfooterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"].forRoot(),
            ]
        })
    ], TopProzModule);
    return TopProzModule;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-beapro-password/topproz-beapro-password.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/topProz/topproz-beapro-password/topproz-beapro-password.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\r\n    position: relative;\r\n    margin: 3% auto;\r\n    max-width: 100%;\r\n}\r\n\r\n.login-container .loginbox {\r\n    position: relative;\r\n    width: 100% !important;\r\n    height: auto !important;\r\n    padding: 0 0 0px 0;\r\n    box-shadow: 0 0 14px rgba(0,0,0,.1);\r\n}\r\n\r\n.login-container .loginbox .loginbox-social .social-buttons .button-facebook {\r\n    float: left;\r\n    border: 2px solid #3b5998;\r\n    color: #3b5998;\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 40%;\r\n    background-color: #fff;\r\n}\r\n\r\n.login-container .loginbox .loginbox-social .social-buttons .button-twitter {\r\n    float: left;\r\n    border: 2px solid #29c1f6;\r\n    color: #29c1f6;\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 35%;\r\n    background-color: #fff;\r\n}\r\n\r\n.login-container .loginbox .loginbox-social .social-buttons .button-google {\r\n    float: right;\r\n    border: 2px solid #ef4f1d;\r\n    color: #ef4f1d;\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: #fff;\r\n}\r\n\r\n.loginbox-social {\r\n    padding: 0 0 0 0 !important; \r\n}\r\n\r\n.loginbox-title{\r\n    font-weight: bold !important;\r\n    font-size: 25px !important;\r\n}\r\n\r\nlabel{\r\n    font-weight:bold !important;\r\n}\r\n\r\nlabel .mandatory{\r\n    color:red;\r\n    font-size: 16px !important;\r\n    font-weight: bold !important;\r\n}\r\n\r\n.hr-blue-title{    \r\n    border-top: 3px solid #5DB2FF !important;\r\n}\r\n\r\n.hr-blue{    \r\n    border-top: 1px solid #5DB2FF !important;\r\n}\r\n\r\n.btn {\r\n    font-size: 14px !important;\r\n    font-weight: bold !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wUHJvei90b3Bwcm96LWJlYXByby1wYXNzd29yZC90b3Bwcm96LWJlYXByby1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFHbkIsb0NBQW9DO0NBQ3ZDOztBQUVEO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7Q0FDMUI7O0FBR0E7SUFDRyw0QkFBNEI7Q0FDL0I7O0FBR0Q7SUFDSSw2QkFBNkI7SUFDN0IsMkJBQTJCO0NBQzlCOztBQUVEO0lBQ0ksNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksVUFBVTtJQUNWLDJCQUEyQjtJQUMzQiw2QkFBNkI7Q0FDaEM7O0FBRUQ7SUFDSSx5Q0FBeUM7Q0FDNUM7O0FBRUQ7SUFDSSx5Q0FBeUM7Q0FDNUM7O0FBRUQ7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0NBQ2hDIiwiZmlsZSI6InNyYy9hcHAvdG9wUHJvei90b3Bwcm96LWJlYXByby1wYXNzd29yZC90b3Bwcm96LWJlYXByby1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDMlIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgMCAwcHggMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE0cHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE0cHggcmdiYSgwLDAsMCwuMSk7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC1zb2NpYWwgLnNvY2lhbC1idXR0b25zIC5idXR0b24tZmFjZWJvb2sge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2I1OTk4O1xyXG4gICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAubG9naW5ib3ggLmxvZ2luYm94LXNvY2lhbCAuc29jaWFsLWJ1dHRvbnMgLmJ1dHRvbi10d2l0dGVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzI5YzFmNjtcclxuICAgIGNvbG9yOiAjMjljMWY2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC1zb2NpYWwgLnNvY2lhbC1idXR0b25zIC5idXR0b24tZ29vZ2xlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZjRmMWQ7XHJcbiAgICBjb2xvcjogI2VmNGYxZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbiAubG9naW5ib3gtc29jaWFsIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG4ubG9naW5ib3gtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sYWJlbCAubWFuZGF0b3J5e1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHItYmx1ZS10aXRsZXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzVEQjJGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHItYmx1ZXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzVEQjJGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/topProz/topproz-beapro-password/topproz-beapro-password.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/topProz/topproz-beapro-password/topproz-beapro-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozblueheader></app-commontopprozblueheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n    <!-- <h5 class=\"row-title\"><i class=\"typcn typcn-folder themeprimary\"></i>Simple Tabs</h5> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <!-- CONTENT - STARTS HERE -->\r\n        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n          <!-- NEW PROZ REGISTRATION - STARTS HERE -->\r\n          <div class=\"login-container animated fadeInDown\">\r\n            <div class=\"loginbox bg-white\">\r\n              <div class=\"widget-body\">\r\n                <div id=\"registration-form\">\r\n                  <form role=\"form\" [formGroup]=\"registrationFormGroup\" (ngSubmit)=\"onSubmit1()\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"loginbox-title\">NEW PRO REGISTRATION</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <hr class=\"hr-magenta-title\">\r\n                      </div>\r\n                    </div>\r\n                    <h4 class=\"col-sm-6\">Your Mobile Code is: {{mobileCode}}</h4>\r\n                    <h4 class=\"col-sm-6\">Your Mail Code is: {{mailOTP}}</h4>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"typeofbusiness\">Enter the verification code received on your Mobile <span\r\n                              class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" formControlName=\"mobileCode\" class=\"form-control\" id=\"mobileCode\"\r\n                              placeholder=\"Enter the Code\" (change)=\"otpConfirm()\" (keypress)=\"keyPress($event)\"\r\n                              required data-bv-notempty-message=\"Mobile Verification Code is required\"\r\n                              [ngClass]=\"{ 'is-invalid': submitted && g.mobileCode.errors }\">\r\n                            <i class=\"fa fa-sort-alpha-asc\"></i><i class=\"fa fa-sort-numeric-asc\"></i>\r\n                          </span>\r\n                          <div *ngIf=\"submitted && g.mobileCode.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"g.mobileCode.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">* Required Mobile Verification Code </p>\r\n                            </div>\r\n                          </div>\r\n                          <small *ngIf=\"otpValidate\">\r\n                            <p style=\"color:green; font-size: 11px\">Mobile Verification Code Validated</p>\r\n                          </small>\r\n                          <small *ngIf=\"otpError\">\r\n                            <p style=\"color:red; font-size: 11px\">Mobile Verification Code Not Validated. Please Enter Valid Verification Code</p>\r\n                          </small>\r\n                          <!-- <small *ngIf=\"registrationFormGroup.controls['mobileCode'].touched\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['mobileCode'].hasError('required')\">\r\n                                Mobile Code should not be empty\r\n                            </small>\r\n                        </small> -->\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"typeofbusiness\">Enter the verification code received on your Mail <span\r\n                              class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" formControlName=\"mailOTP\" class=\"form-control\" id=\"mailOTP\"\r\n                              (keypress)=\"keyPress($event)\" placeholder=\"Enter the Mail Code\"\r\n                              (change)=\"mailOTPConfirm()\" required data-bv-notempty-message=\"Mail Verification Code is required\"\r\n                              [ngClass]=\"{ 'is-invalid': submitted && g.mailOTP.errors }\">\r\n                            <i class=\"fa fa-sort-alpha-asc\"></i><i class=\"fa fa-sort-numeric-asc\"></i>\r\n                          </span>\r\n                          <div *ngIf=\"submitted && g.mailOTP.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"g.mailOTP.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">* Required Mail Verification Code</p>\r\n                            </div>\r\n                          </div>\r\n                          <small *ngIf=\"mailOtpValidate\">\r\n                            <p style=\"color:green; font-size: 11px\">Mail Verification Code Validated</p>\r\n                          </small>\r\n                          <small *ngIf=\"mailOtpError\">\r\n                            <p style=\"color:red; font-size: 11px\">Mail Verification Code Not Validated. Please Enter the correct OTP</p>\r\n                          </small>\r\n                          <!-- <small *ngIf=\"registrationFormGroup.controls['mailOTP'].touched\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['mailOTP'].hasError('required')\">\r\n                                Mail Code should not be empty\r\n                            </small>\r\n                        </small> -->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\" [formGroup]=\"passwordFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"password\">Password <span class=\"mandatory\">*</span></label>\r\n                          <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\"\r\n                            formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.password.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">* Required Password</p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <!-- <p class=\"bg-primary\" *ngIf=\"passwordFormGroup.controls.password.errors?.required && passwordFormGroup.controls.password.touched\">Password is required</p> -->\r\n\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"repeatPassword\">Re-Type Password <span class=\"mandatory\">*</span></label>\r\n                          <input class=\"form-control\" type=\"password\" name=\"repeatPassword\"\r\n                            placeholder=\"Re-Type Password\" formControlName=\"repeatPassword\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.repeatPassword.errors }\">\r\n                          <div *ngIf=\"submitted && f.repeatPassword.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.repeatPassword.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">* Request Repeat Password</p>\r\n                            </div>\r\n                          </div>\r\n                          <!-- <p class=\"bg-primary\" *ngIf=\"passwordFormGroup.controls.repeatPassword.errors?.required && passwordFormGroup.controls.repeatPassword.touched\">Repeat password is required</p> -->\r\n                          <p *ngIf=\"passwordFormGroup.errors?.doesMatchPassword\" style=\"color: red; font-size: 11px\">*\r\n                            Password does not match\r\n                          </p>\r\n                        </div>\r\n\r\n\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <hr class=\"hr-magenta\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-2\"></div>\r\n                      <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Resend Verification Code\"\r\n                            (click)=\"resendOTP()\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"submit\" class=\"btn btn-azure shiny btn-block\" value=\"Sign Up\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2\"></div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- NEW PROZ REGISTRATION - ENDS HERE-->\r\n        </div>\r\n        <!-- CCONTENT - ENDS HERE-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/topProz/topproz-beapro-password/topproz-beapro-password.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/topProz/topproz-beapro-password/topproz-beapro-password.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TopprozBeaproPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopprozBeaproPasswordComponent", function() { return TopprozBeaproPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/validator */ "./src/utilities/validator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");









var TopprozBeaproPasswordComponent = /** @class */ (function () {
    function TopprozBeaproPasswordComponent(formBuilder, router, activatedRoute, http, toastr, spinner) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.otpError = false;
        this.otpValidate = false;
        this.mailOtpValidate = false;
        this.mailOtpError = false;
        this.submitted = false;
        this.passwordFormGroup = this.formBuilder.group({
            mobileCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mailOTP: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, {
            validator: _utilities_validator__WEBPACK_IMPORTED_MODULE_3__["RegistrationValidator"].validate.bind(this)
        });
        this.registrationFormGroup = this.formBuilder.group({
            mobileCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mailOTP: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    TopprozBeaproPasswordComponent.prototype.ngOnInit = function () {
        this.beAProValues = JSON.parse(localStorage.getItem('regValues'));
        console.log("beAProValues" + JSON.stringify(this.beAProValues));
        this.mobileCode = this.beAProValues.OTP;
        this.mailOTP = this.beAProValues.mailOTP;
        this.emailId = this.beAProValues.emailId;
        this.proId = this.activatedRoute.snapshot.params['prozId'];
        console.log("this is prozcode" + this.proId);
    };
    Object.defineProperty(TopprozBeaproPasswordComponent.prototype, "f", {
        get: function () { return this.passwordFormGroup.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TopprozBeaproPasswordComponent.prototype, "g", {
        get: function () { return this.registrationFormGroup.controls; },
        enumerable: true,
        configurable: true
    });
    TopprozBeaproPasswordComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.passwordFormGroup.invalid) {
            return;
        }
        this.signUpBtn();
    };
    TopprozBeaproPasswordComponent.prototype.onSubmit1 = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registrationFormGroup.invalid) {
            return;
        }
        this.signUpBtn();
    };
    TopprozBeaproPasswordComponent.prototype.signUpBtn = function () {
        var _this = this;
        this.spinner.show();
        if (this.registrationFormGroup.invalid) {
            return;
        }
        var topObj = {
            otp: this.mobileCode,
            mailOTP: this.mailOTP,
            loginCode: this.proId,
            mobileNumber: this.beAProValues.mobileNumber,
            password: this.passwordFormGroup.value.repeatPassword,
            emailId: this.beAProValues.emailId,
            firstName: this.beAProValues.firstName,
            lastName: this.beAProValues.lastName,
            url: this.beAProValues.appURL,
            leadG: this.beAProValues.leadG,
            vanlynk: this.beAProValues.vanlynk
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/newProzPasswordConfm', topObj)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                localStorage.setItem('prozCode', _this.prozCode);
                //this.router.navigate(['/auth/login/0'])
                _this.stdrolesPermissions();
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.stdrolesPermissions = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdrolesPermissions', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listRoles = response.response;
                console.log("getStdrolesPermissions" + JSON.stringify(_this.listRoles));
                _this.addRolesPermissons(_this.listRoles);
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.addRolesPermissons = function (listRoles) {
        var _this = this;
        console.log("listRoles" + JSON.stringify(this.listRoles));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addRolesData' + '/' + this.proId + '/' + this.emailId, this.listRoles)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("'''..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.stdUseAgreement();
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.stdUseAgreement = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStduseAgreement', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listAgreement = response.response;
                console.log("getStduseAgreement" + JSON.stringify(_this.listAgreement));
                _this.addUseAgreement(_this.listAgreement);
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.addUseAgreement = function (listAgreement) {
        var _this = this;
        console.log("listAgreement" + JSON.stringify(this.listAgreement));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addUseAgreementData' + '/' + this.proId + '/' + this.emailId, this.listAgreement)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("'''..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.stdLoginAgreement();
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.stdLoginAgreement = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdLoginAgreement', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listLoginAgreement = response.response;
                console.log("getStdLoginAgreement" + JSON.stringify(_this.listLoginAgreement));
                _this.addLoginAgreement(_this.listLoginAgreement);
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.addLoginAgreement = function (listLoginAgreement) {
        var _this = this;
        console.log("listLoginAgreement" + JSON.stringify(this.listLoginAgreement));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addLoginAgreementData' + '/' + this.proId + '/' + this.emailId, this.listLoginAgreement)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("'''..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.stdMarkupValue();
            }
            else {
            }
        });
    };
    /* getting std markup value */
    TopprozBeaproPasswordComponent.prototype.stdMarkupValue = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdMarkup', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.priceBookListDetails = response.response;
                console.log("stdMarkupValue" + JSON.stringify(_this.priceBookListDetails));
                _this.addMarkupValues(_this.priceBookListDetails);
                _this.priceBookServiceResponse = true;
            }
            else {
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
            });
        });
    };
    TopprozBeaproPasswordComponent.prototype.addMarkupValues = function (priceBookListDetails) {
        var _this = this;
        console.log("this.proId" + JSON.stringify(this.proId));
        console.log("emailId" + JSON.stringify(this.emailId));
        console.log("matchingProData" + JSON.stringify(this.priceBookListDetails));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addproMarkupData' + '/' + this.proId + '/' + this.emailId, this.priceBookListDetails)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("matchingData..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.stdInventoryValue();
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.stdInventoryValue = function () {
        var _this = this;
        console.log("stdInventoryValue calling");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdInventory', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listInventry = response.response;
                //  this.priceBookListDetails.push(this.listInventry)
                console.log("getStdInventory" + JSON.stringify(_this.listInventry));
                _this.addInventoryValues(_this.listInventry);
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.addInventoryValues = function (listInventry) {
        var _this = this;
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addInventoryData' + '/' + this.proId + '/' + this.emailId, this.listInventry)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("matchingData..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.matchingResponseStatus = false;
                _this.stdOacValue();
            }
            else {
                _this.matchingResponseStatus = true;
            }
        }, function (error) {
        });
    };
    TopprozBeaproPasswordComponent.prototype.stdOacValue = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdOACost', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listOac = response.response;
                console.log("getStdOACost" + JSON.stringify(_this.listOac));
                _this.addOvcostValues(_this.listOac);
                _this.priceBookServiceResponse = true;
            }
            else {
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
            });
        });
    };
    TopprozBeaproPasswordComponent.prototype.addOvcostValues = function (listOac) {
        var _this = this;
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addOvCostData' + '/' + this.proId + '/' + this.emailId, this.listOac)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("addOvCostData..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.stdJBValue();
            }
            else {
            }
        }, function (error) {
        });
    };
    TopprozBeaproPasswordComponent.prototype.stdJBValue = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdJBcostName', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listJB = response.response;
                // this.priceBookListDetails.push(this.listJB)
                console.log("getStdJBcostName" + JSON.stringify(_this.listJB));
                _this.addjbrValues(_this.listJB);
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.addjbrValues = function (listJB) {
        var _this = this;
        console.log("this.proId" + JSON.stringify(this.proId));
        console.log("emailId" + JSON.stringify(this.emailId));
        console.log("matchingProData" + JSON.stringify(this.listJB));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addJbrData' + '/' + this.proId + '/' + this.emailId, this.listJB)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("matchingData..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.stdPackageName();
            }
            else {
            }
        }, function (error) {
        });
    };
    TopprozBeaproPasswordComponent.prototype.stdPackageName = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdPackageName', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.packageData = response.response;
                console.log("getStdPackageName" + JSON.stringify(_this.packageData));
                _this.addPackageNames(_this.packageData);
                _this.priceBookServiceResponse = true;
            }
            else {
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
            });
        });
    };
    TopprozBeaproPasswordComponent.prototype.addPackageNames = function (packageData) {
        var _this = this;
        console.log("packageData" + JSON.stringify(this.packageData));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addPackageName' + '/' + this.proId + '/' + this.emailId, this.packageData)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("'''..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.stdInvoiceValue();
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.stdInvoiceValue = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdInvoice', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listInvoice = response.response;
                console.log("getStdInvoice" + JSON.stringify(_this.listInvoice));
                _this.addInvoiceValues(_this.listInvoice);
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.addInvoiceValues = function (listInvoice) {
        var _this = this;
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addInvoiceData' + '/' + this.proId + '/' + this.emailId, this.listInvoice)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("listInvoicecc..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.stdwofRightValue();
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.stdwofRightValue = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdwofRight', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listWoRight = response.response;
                console.log("getStdwofRight" + JSON.stringify(_this.listWoRight));
                _this.addWorValue(_this.listWoRight);
                _this.priceBookServiceResponse = true;
            }
            else {
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
            });
        });
    };
    TopprozBeaproPasswordComponent.prototype.addWorValue = function (listWoRight) {
        var _this = this;
        console.log("listWoRight" + JSON.stringify(this.listWoRight));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addWoRightData' + '/' + this.proId + '/' + this.emailId, this.listWoRight)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("listWoRight..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                // this.matchingResponseStatus = false;
                _this.stdIncompletionValue();
            }
            else {
                //   this.matchingResponseStatus = true;
            }
        }, function (error) {
        });
    };
    TopprozBeaproPasswordComponent.prototype.stdIncompletionValue = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdIVCompletion', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listComletion = response.response;
                console.log("getStdIVCompletion" + JSON.stringify(_this.listComletion));
                _this.addCompletionValue(_this.listComletion);
                _this.priceBookServiceResponse = true;
            }
            else {
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
            });
        });
    };
    TopprozBeaproPasswordComponent.prototype.addCompletionValue = function (listComletion) {
        var _this = this;
        console.log("listWoRight" + JSON.stringify(this.listWoRight));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addCompletionData' + '/' + this.proId + '/' + this.emailId, this.listComletion)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("addWorData..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                //this.matchingResponseStatus = false;
                _this.stdChangeOfOrder();
            }
            else {
                // this.matchingResponseStatus = true;
            }
        }, function (error) {
        });
    };
    TopprozBeaproPasswordComponent.prototype.stdChangeOfOrder = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdChangeofOrder', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listChangeOrder = response.response;
                console.log("getStdChangeofOrder" + JSON.stringify(_this.listChangeOrder));
                _this.addChangeOrder(_this.listChangeOrder);
            }
            else {
            }
            (function (error) {
            });
        });
    };
    TopprozBeaproPasswordComponent.prototype.addChangeOrder = function (listChangeOrder) {
        var _this = this;
        console.log("listChangeOrder" + JSON.stringify(this.listChangeOrder));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addchangeOrderData' + '/' + this.proId + '/' + this.emailId, this.listChangeOrder)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("listChangeOrder..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                //  this.matchingResponseStatus = false;
                _this.stdItemType();
            }
            else {
                //  this.matchingResponseStatus = true;
            }
        }, function (error) {
        });
    };
    // stdPurchaseOrder() {
    //   var headers = new Headers();
    //   headers.append("Accept", 'application/json');
    //   headers.append('Content-Type', 'application/json');
    //   let options = new RequestOptions({ headers: headers });
    //   this.http.get(Global.url + '/getStdPurchaseOrder', options)
    //     .subscribe(data => {
    //       var response = data.json();
    //       if (response.status == 200) {
    //         this.listPurchase = response.response;
    //         console.log("getStdPurchaseOrder" + JSON.stringify(this.listPurchase))
    //         this.addpurchaseOrder(this.listPurchase)
    //         this.priceBookServiceResponse = true;
    //       }
    //       else {
    //         this.priceBookServiceResponse = false;
    //       }
    //       error => {
    //       }
    //     })
    // }
    // addpurchaseOrder(listPurchase) {
    //   console.log("listPurchase" + JSON.stringify(this.listPurchase))
    //   this.http.post(Global.url + '/addPurchaseOrder' + '/' + this.proId + '/' + this.emailId, this.listPurchase)
    //     .subscribe(data => {
    //       var matchingData = data.json();
    //       console.log("listPurchase..." + JSON.stringify(matchingData))
    //       this.matchingResponse = matchingData.response;
    //       if (matchingData.status == 200) {
    //         this.stdItemType()
    //         this.matchingResponseStatus = false;
    //       }
    //       else {
    //         this.matchingResponseStatus = true;
    //       }
    //     },
    //       error => {
    //       })
    // }
    TopprozBeaproPasswordComponent.prototype.stdItemType = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdItemType', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listItemType = response.response;
                console.log("getStdItemType" + JSON.stringify(_this.listItemType));
                _this.addItemType(_this.listItemType);
                _this.priceBookServiceResponse = true;
            }
            else {
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
            });
        });
    };
    TopprozBeaproPasswordComponent.prototype.addItemType = function (listItemType) {
        var _this = this;
        console.log("listPurchase" + JSON.stringify(this.listItemType));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addEquipmentItemType' + '/' + this.proId + '/' + this.emailId, this.listItemType)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("listItemType..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.stdEQStatus();
            }
            else {
                _this.matchingResponseStatus = true;
            }
        }, function (error) {
        });
    };
    TopprozBeaproPasswordComponent.prototype.stdEQStatus = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdEQstatus', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listStatus = response.response;
                console.log("getStdEQstatus" + JSON.stringify(_this.listStatus));
                _this.addEqStatus(_this.listStatus);
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.addEqStatus = function (listStatus) {
        var _this = this;
        console.log("listStatus" + JSON.stringify(this.listStatus));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addEqStatus' + '/' + this.proId + '/' + this.emailId, this.listStatus)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("'''..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.stdSourceType();
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.stdSourceType = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdSourceType', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listSourseType = response.response;
                console.log("getStdSourceType" + JSON.stringify(_this.listSourseType));
                _this.addSourceType(_this.listSourseType);
                _this.priceBookServiceResponse = true;
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.addSourceType = function (listSourseType) {
        var _this = this;
        console.log("listSourseType" + JSON.stringify(this.listSourseType));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addSourceTypeData' + '/' + this.proId + '/' + this.emailId, this.listSourseType)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("'''..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.stdMsgAlerts();
            }
            else {
            }
        });
    };
    // stdSourceype() {
    //   var headers = new Headers();
    //   headers.append("Accept", 'application/json');
    //   headers.append('Content-Type', 'application/json');
    //   let options = new RequestOptions({ headers: headers });
    //   this.http.get(Global.url + '/getStdSourseType', options)
    //     .subscribe(data => {
    //       var response = data.json();
    //       if (response.status == 200) {
    //         this.listSourse = response.response;
    //         //  this.priceBookListDetails.push(this.listSourse)
    //         console.log("newarray11" + JSON.stringify(this.listSourse))
    //         this.addsourceType(this.listSourse)
    //         this.priceBookServiceResponse = true;
    //       }
    //       else {
    //         this.priceBookServiceResponse = false;
    //       }
    //       error => {
    //       }
    //     })
    // }
    // addsourceType(listSourse) {
    //   console.log("listSourse" + JSON.stringify(this.listSourse))
    //   this.http.post(Global.url + '/addSourceTypeData' + '/' + this.proId + '/' + this.emailId, this.listSourse)
    //     .subscribe(data => {
    //       var matchingData = data.json();
    //       console.log("listPurchase..." + JSON.stringify(matchingData))
    //       this.matchingResponse = matchingData.response;
    //       if (matchingData.status == 200) {
    //         this.stdMsgAlerts()
    //       }
    //       else {
    //       }
    //     },
    //     )
    // }
    TopprozBeaproPasswordComponent.prototype.stdMsgAlerts = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdMsgAlerts', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listmsgAerts = response.response;
                console.log("getStdMsgAlerts" + JSON.stringify(_this.listmsgAerts));
                _this.addMsgAlerts(_this.listmsgAerts);
                _this.priceBookServiceResponse = true;
            }
            else {
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
            });
        });
    };
    TopprozBeaproPasswordComponent.prototype.addMsgAlerts = function (listmsgAerts) {
        var _this = this;
        console.log("listmsgAerts" + JSON.stringify(this.listmsgAerts));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addMsgAlertsData' + '/' + this.proId + '/' + this.emailId, this.listmsgAerts)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("'''..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.stdVendorCat();
            }
            else {
            }
        });
    };
    // stdAcType() {
    //   console.log("std ac type")
    //   var headers = new Headers();
    //   headers.append("Accept", 'application/json');
    //   headers.append('Content-Type', 'application/json');
    //   let options = new RequestOptions({ headers: headers });
    //   this.http.get(Global.url + '/getStdAcType', options)
    //     .subscribe(data => {
    //       var response = data.json();
    //       if (response.status == 200) {
    //         this.listAcType = response.response;
    //         console.log("getStdAcType" + JSON.stringify(this.listAcType))
    //         this.addACTypes(this.listAcType)
    //       }
    //       else {
    //       }
    //     })
    // }
    // addACTypes(listAcType) {
    //   console.log("listmsgAerts" + JSON.stringify(this.listAcType))
    //   this.http.post(Global.url + '/addACTypeData' + '/' + this.proId + '/' + this.emailId, this.listAcType)
    //     .subscribe(data => {
    //       var matchingData = data.json();
    //       console.log("'''..." + JSON.stringify(matchingData))
    //       this.matchingResponse = matchingData.response;
    //       console.log("this is matching response" + JSON.stringify(this.matchingResponse))
    //       if (matchingData.status == 200) {
    //         this.spinner.hide()
    //         this.router.navigate(['/topProz/topProzConfirmation', this.activatedRoute.snapshot.params['prozId']])
    //       }
    //       else {
    //       }
    //     },
    //     )
    // }
    TopprozBeaproPasswordComponent.prototype.stdVendorCat = function () {
        var _this = this;
        console.log("std ac type");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getStdVendorCat', options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.listVendorCategory = response.response;
                console.log("getStdVendorCategory" + JSON.stringify(_this.listVendorCategory));
                _this.addVCTypes(_this.listVendorCategory);
            }
            else {
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.addVCTypes = function (listVendorCategory) {
        var _this = this;
        console.log("listmsgAerts" + JSON.stringify(this.listVendorCategory));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addVendorCategoryData' + '/' + this.proId + '/' + this.emailId, this.listVendorCategory)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("'''..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            console.log("this is matching response" + JSON.stringify(_this.matchingResponse));
            if (matchingData.status == 200) {
                _this.spinner.hide();
                _this.router.navigate(['/topProz/topProzConfirmation', _this.activatedRoute.snapshot.params['prozId']]);
            }
            else {
            }
        });
    };
    /* getting std markup value */
    TopprozBeaproPasswordComponent.prototype.otpConfirm = function () {
        var _this = this;
        if (this.registrationFormGroup.value.mobileCode == "" || this.registrationFormGroup.value.mobileCode == null) {
            this.otpValidate = false;
            this.otpError = false;
            return false;
        }
        else {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/prozOTPValidation/' + this.activatedRoute.snapshot.params['prozId'] + '/' + this.registrationFormGroup.value.mobileCode, options)
                .subscribe(function (data) {
                var otpValidator = data.json();
                //console.log("mobile code formcntrl"+JSON.stringify(otpValidator))
                if (otpValidator.status == 200) {
                    _this.otpValidate = true;
                    _this.otpError = false;
                }
                else {
                    _this.otpError = true;
                    _this.otpValidate = false;
                }
            }, function (error) {
                _this.toastr.warning('Unable to Connect to Server');
            });
        }
    };
    TopprozBeaproPasswordComponent.prototype.mailOTPConfirm = function () {
        var _this = this;
        if (this.registrationFormGroup.value.mailOTP == "" || this.registrationFormGroup.value.mailOTP == null) {
            this.mailOtpValidate = false;
            this.mailOtpError = false;
            return false;
        }
        else {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/prozMailOTPValidation/' + this.activatedRoute.snapshot.params['prozId'] + '/' + this.registrationFormGroup.value.mailOTP, options)
                .subscribe(function (data) {
                var mailOtpValidator = data.json();
                //console.log("Mail code formcntrl"+JSON.stringify(mailOtpValidator))
                if (mailOtpValidator.status == 200) {
                    _this.mailOtpValidate = true;
                    _this.mailOtpError = false;
                }
                else {
                    _this.mailOtpError = true;
                    _this.mailOtpValidate = false;
                }
            }, function (error) {
                _this.toastr.warning('Unable to Connect to Server');
            });
        }
    };
    TopprozBeaproPasswordComponent.prototype.resendOTP = function () {
        var _this = this;
        var regenerateObj = {
            prozId: this.activatedRoute.snapshot.params['prozId'],
            mobileNumber: this.beAProValues.mobileNumber,
            firstName: this.beAProValues.firstName,
            lastName: this.beAProValues.lastName,
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/resendOTP', regenerateObj)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.mobileCode = response.OTP;
                _this.toastr.warning('Regenerated Verification Code Successfully');
                return false;
            }
        });
    };
    TopprozBeaproPasswordComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    TopprozBeaproPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topproz-beapro-password',
            template: __webpack_require__(/*! ./topproz-beapro-password.component.html */ "./src/app/topProz/topproz-beapro-password/topproz-beapro-password.component.html"),
            styles: [__webpack_require__(/*! ./topproz-beapro-password.component.css */ "./src/app/topProz/topproz-beapro-password/topproz-beapro-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], TopprozBeaproPasswordComponent);
    return TopprozBeaproPasswordComponent;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-beapro/topproz-beapro.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/topProz/topproz-beapro/topproz-beapro.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\r\n    position: relative;\r\n    margin: 3% auto;\r\n    max-width: 100%;\r\n}\r\n\r\n.login-container .loginbox {\r\n    position: relative;\r\n    width: 100% !important;\r\n    height: auto !important;\r\n    padding: 0 0 0px 0;\r\n    box-shadow: 0 0 14px rgba(0,0,0,.1);\r\n}\r\n\r\n.login-container .loginbox .loginbox-social .social-buttons .button-facebook {\r\n    float: left;\r\n    border: 2px solid #3b5998;\r\n    color: #3b5998;\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 40%;\r\n    background-color: #fff;\r\n}\r\n\r\n.login-container .loginbox .loginbox-social .social-buttons .button-twitter {\r\n    float: left;\r\n    border: 2px solid #29c1f6;\r\n    color: #29c1f6;\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-right: 35%;\r\n    background-color: #fff;\r\n}\r\n\r\n.login-container .loginbox .loginbox-social .social-buttons .button-google {\r\n    float: right;\r\n    border: 2px solid #ef4f1d;\r\n    color: #ef4f1d;\r\n    border-radius: 50%;\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: #fff;\r\n}\r\n\r\n.loginbox-social {\r\n    padding: 0 0 0 0 !important; \r\n}\r\n\r\n.loginbox-title{\r\n    font-weight: bold !important;\r\n    font-size: 25px !important;\r\n}\r\n\r\nlabel{\r\n    font-weight:bold !important;\r\n}\r\n\r\nlabel .mandatory{\r\n    color:red;\r\n    font-size: 16px !important;\r\n    font-weight: bold !important;\r\n}\r\n\r\n.hr-blue-title{    \r\n    border-top: 3px solid #5DB2FF !important;\r\n}\r\n\r\n.hr-blue{    \r\n    border-top: 1px solid #5DB2FF !important;\r\n}\r\n\r\n.btn {\r\n    font-size: 14px !important;\r\n    font-weight: bold !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wUHJvei90b3Bwcm96LWJlYXByby90b3Bwcm96LWJlYXByby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFHbkIsb0NBQW9DO0NBQ3ZDOztBQUVEO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7Q0FDMUI7O0FBR0E7SUFDRyw0QkFBNEI7Q0FDL0I7O0FBR0Q7SUFDSSw2QkFBNkI7SUFDN0IsMkJBQTJCO0NBQzlCOztBQUVEO0lBQ0ksNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksVUFBVTtJQUNWLDJCQUEyQjtJQUMzQiw2QkFBNkI7Q0FDaEM7O0FBRUQ7SUFDSSx5Q0FBeUM7Q0FDNUM7O0FBRUQ7SUFDSSx5Q0FBeUM7Q0FDNUM7O0FBRUQ7SUFDSSwyQkFBMkI7SUFDM0IsNkJBQTZCO0NBQ2hDIiwiZmlsZSI6InNyYy9hcHAvdG9wUHJvei90b3Bwcm96LWJlYXByby90b3Bwcm96LWJlYXByby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDMlIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgMCAwcHggMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE0cHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE0cHggcmdiYSgwLDAsMCwuMSk7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC1zb2NpYWwgLnNvY2lhbC1idXR0b25zIC5idXR0b24tZmFjZWJvb2sge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2I1OTk4O1xyXG4gICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAubG9naW5ib3ggLmxvZ2luYm94LXNvY2lhbCAuc29jaWFsLWJ1dHRvbnMgLmJ1dHRvbi10d2l0dGVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzI5YzFmNjtcclxuICAgIGNvbG9yOiAjMjljMWY2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC1zb2NpYWwgLnNvY2lhbC1idXR0b25zIC5idXR0b24tZ29vZ2xlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZjRmMWQ7XHJcbiAgICBjb2xvcjogI2VmNGYxZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbiAubG9naW5ib3gtc29jaWFsIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG4ubG9naW5ib3gtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sYWJlbCAubWFuZGF0b3J5e1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHItYmx1ZS10aXRsZXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzVEQjJGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHItYmx1ZXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzVEQjJGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/topProz/topproz-beapro/topproz-beapro.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/topProz/topproz-beapro/topproz-beapro.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozblueheader></app-commontopprozblueheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n    <!-- <h5 class=\"row-title\"><i class=\"typcn typcn-folder themeprimary\"></i>Simple Tabs</h5> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <!-- CONTENT - STARTS HERE -->\r\n        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n          <!-- NEW PROZ REGISTRATION - STARTS HERE -->\r\n          <div class=\"login-container animated fadeInDown\">\r\n            <div class=\"loginbox bg-white\">\r\n              <div class=\"widget-body\">\r\n                <div id=\"registration-form\">\r\n                  <form role=\"form\" [formGroup]=\"registrationFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"loginbox-title\">NEW PRO REGISTRATION(LEAD GENERATION)</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <hr class=\"hr-blue-title\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"nameofbusiness\">Name of the Business <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"nameofbusiness\" id=\"nameofbusiness\"\r\n                              placeholder=\"Enter Name of the Business\"\r\n                              [ngClass]=\"{ 'is-invalid': submitted && f.nameofbusiness.errors }\">\r\n                            <i class=\"fa fa-briefcase\"></i>\r\n                          </span>\r\n                          <div *ngIf=\"submitted && f.nameofbusiness.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.nameofbusiness.errors.required\">\r\n                              <p style=\"color: red;  font-size: 11px\">* Required Name of the Business</p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"businessType\">Business Type<span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <select class=\"form-control\" id=\"businessType\" name=\"status\" data-bv-field=\"row-title\"\r\n                              formControlName=\"businessType\"\r\n                              [ngClass]=\"{ 'is-invalid': submitted && f.nameofbusiness.errors }\" required>\r\n                              <option value=\"\">--Select Business Type--</option>\r\n                              <option value=\"Sole Proprietor\">Sole Proprietor</option>\r\n                              <option value=\"LLC\">LLC</option>\r\n                              <option value=\"Corporation\">Corporation</option>\r\n                            </select>\r\n                          </span>\r\n                          <div *ngIf=\"submitted && f.businessType.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.businessType.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">* Required Business Type</p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"firstname\">First Name <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\"\r\n                              (keypress)=\"keyPress1($event)\" placeholder=\"Enter First Name\"\r\n                              [ngClass]=\"{ 'is-invalid': submitted && f.nameofbusiness.errors }\">\r\n                            <i class=\"fa fa-user\"></i>\r\n                          </span>\r\n\r\n                          <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.firstname.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">* Required First Name</p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"lastname\">Last Name <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\"\r\n                              (keypress)=\"keyPress1($event)\" placeholder=\"Enter Last Name\"\r\n                              [ngClass]=\"{ 'is-invalid': submitted && f.nameofbusiness.errors }\">\r\n                            <i class=\"fa fa-user\"></i>\r\n                          </span>\r\n                          <div *ngIf=\"submitted && f.lastname.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.lastname.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">* Required Last Name </p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"emailID\">E-Mail ID/Username <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"email\" class=\"form-control\" formControlName=\"emailID\"\r\n                              placeholder=\"Enter E-Mail ID\" (keyup)=\"mailIdVerification()\" required\r\n                              data-bv-notempty-message=\"Email is required\"\r\n                              [ngClass]=\"{ 'is-invalid': submitted && f.nameofbusiness.errors }\">\r\n                            <i class=\"fa fa-envelope-o\"></i>\r\n                          </span>\r\n                          <div *ngIf=\"submitted && f.emailID.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.emailID.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">* Required Email ID</p>\r\n                            </div>\r\n                          </div>\r\n\r\n\r\n                          <span class=\"help-inline\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['emailID'].hasError('invalidEmailAddress')\">\r\n                              <p style=\"color:red\">* Please enter valid Email</p>\r\n                            </small>\r\n                          </span>\r\n                          <small *ngIf=\"mailError\">\r\n                            <p style=\"color:red\">* Email Id Already Exist</p>\r\n                          </small>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"mobileNumber\">Mobile Number <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input maxlength=\"18\" type=\"text\" class=\"form-control\" formControlName=\"mobileNumber\"\r\n                              (keypress)=\"keyPress($event)\" placeholder=\"Enter Mobile Number\"\r\n                              [dropSpecialCharacters]=\"false\" mask=\"000-000-0000\" required\r\n                              data-bv-notempty-message=\"Mobile Number is required\"\r\n                              [ngClass]=\"{ 'is-invalid': submitted && f.nameofbusiness.errors }\">\r\n                            <i class=\"fa fa-mobile-phone\"></i>\r\n                          </span>\r\n                          <div *ngIf=\"submitted && f.mobileNumber.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.mobileNumber.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">* Required Mobile Number</p>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <span class=\"help-inline\">\r\n                            <small\r\n                              *ngIf=\"registrationFormGroup.controls['mobileNumber'].hasError('invalidMobileNumber')\">\r\n                              <p style=\"color: red\">* Please Enter Valid 10-Digits Mobile Number</p>\r\n                            </small>\r\n                            <small *ngIf=\"mobileNumberValidation\">\r\n                              <p style=\"color: red\">* Mobile Number already exists</p>\r\n                            </small>\r\n                            <small *ngIf=\"validMobileNumber\">\r\n                              <p style=\"color: red\">* Not a Valid US Mobile Number</p>\r\n                            </small>\r\n                          </span>\r\n                          <!-- <small *ngIf=\"error\">\r\n                            <p style=\"color:red\">* Mobile Number Already Exist 2</p>\r\n                          </small> -->\r\n\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"smsMobile\">Send Lead Notification To This Phone Number <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input maxlength=\"18\" type=\"text\" class=\"form-control\" formControlName=\"smsMobile\"\r\n                              (keypress)=\"keyPress($event)\" placeholder=\"Enter Mobile Number\"\r\n                              [dropSpecialCharacters]=\"false\" mask=\"000-000-0000\" required\r\n                              data-bv-notempty-message=\"Mobile Number is required\"\r\n                              [ngClass]=\"{ 'is-invalid': submitted && f.nameofbusiness.errors }\">\r\n                            <i class=\"fa fa-mobile-phone\"></i>\r\n                          </span>\r\n                          <div *ngIf=\"submitted && f.smsMobile.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.smsMobile.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">* Required Mobile Number</p>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <span class=\"help-inline\">\r\n                            <small\r\n                              *ngIf=\"registrationFormGroup.controls['smsMobile'].hasError('invalidMobileNumber')\">\r\n                              <p style=\"color: red\">* Please Enter Valid 10-Digits Mobile Number</p>\r\n                            </small>\r\n                            <small *ngIf=\"mobileNumberValidation\">\r\n                              <p style=\"color: red\">* Mobile Number already exists</p>\r\n                            </small>\r\n                            <small *ngIf=\"validMobileNumber\">\r\n                              <p style=\"color: red\">* Not a Valid US Mobile Number</p>\r\n                            </small>\r\n                          </span>\r\n                          <!-- <small *ngIf=\"error\">\r\n                            <p style=\"color:red\">* Mobile Number Already Exist 2</p>\r\n                          </small> -->\r\n\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"businessAddressLine1\">Business Address<span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Business Address\"\r\n                              formControlName=\"businessAddressLine1\"\r\n                              [ngClass]=\"{ 'is-invalid': submitted && f.nameofbusiness.errors }\" required>\r\n                            <i class=\"fa fa-envelope\"></i>\r\n                          </span>\r\n                          <div *ngIf=\"submitted && f.businessAddressLine1.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.businessAddressLine1.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">* Required Business Address</p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"city\">City<span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"Enter City\"\r\n                              formControlName=\"city\" [ngClass]=\"{ 'is-invalid': submitted && f.nameofbusiness.errors }\"\r\n                              required>\r\n                            <i class=\"fa fa-envelope\"></i>\r\n                          </span>\r\n                          <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.city.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">*Required City</p>\r\n                            </div>\r\n                          </div>\r\n                          <!-- <span class=\"help-inline\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['city'].dirty\">\r\n                              <small *ngIf=\"registrationFormGroup.controls['city'].hasError('required')\">\r\n                                <p style=\"color:red;\">City should not Be Empty</p>\r\n                              </small>\r\n                            </small>\r\n                          </span> -->\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"state\">State<span class=\"mandatory\">*</span></label>\r\n                          <select class=\"form-control\" id=\"state\" name=\"status\" data-bv-field=\"row-title\"\r\n                            formControlName=\"state\" [ngClass]=\"{ 'is-invalid': submitted && f.nameofbusiness.errors }\"\r\n                            required>\r\n                            <option value=\"\">Select State</option>\r\n                            <option *ngFor=\"let data of statesData\" value={{data.stateCode}}>\r\n                              {{data.stateName}}\r\n                            </option>\r\n                          </select>\r\n                          <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.state.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">* Select State</p>\r\n                            </div>\r\n                          </div>\r\n                          <!-- <span class=\"help-inline\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['state'].dirty\">\r\n                              <small *ngIf=\"registrationFormGroup.controls['state'].hasError('required')\">\r\n                                <p style=\"color:red;\">State should not Be Empty</p>\r\n                              </small>\r\n                            </small>\r\n                          </span> -->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"zipCode\">Zip Code<span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"zipCode\" placeholder=\"Enter Zipcode\"\r\n                              formControlName=\"zipCode\" minlength=\"5\" maxlength=\"5\"\r\n                              [ngClass]=\"{ 'is-invalid': submitted && f.nameofbusiness.errors }\" required>\r\n                            <i class=\"fa fa-map-marker\"></i>\r\n                          </span>\r\n                          <div *ngIf=\"submitted && f.zipCode.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.zipCode.errors.required\">\r\n                              <p style=\"color: red; font-size: 11px\">* Required Zip Code</p>\r\n                            </div>\r\n                            <div *ngIf=\"f.zipCode.errors.minlength\" style=\"color:red;font-size: 11px\">Enter Valid Zip\r\n                              Code\r\n                              (5-digits)\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <hr class=\"hr-blue\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <label for=\"notes\">NOTE<span class=\"mandatory\">*</span>: A Code will be sent to your Mobile &\r\n                          Email for Verification</label>\r\n                      </div>\r\n                    </div>\r\n                    <!-- <div class=\"row\" *ngIf=\"yelpExists\">\r\n                      <div class=\"col-sm-12\">\r\n                        <label for=\"notes\" style=\"color:green\"><b>\r\n                            <h2>Yelp Verified</h2>\r\n                          </b></label>\r\n                      </div>\r\n                    </div> -->\r\n\r\n                    <!-- <div class=\"row\" *ngIf=\"yelpNotVerified\">\r\n                      <div class=\"col-sm-12\">\r\n                        <label for=\"notes\" style=\"color:green\"><b>\r\n                            <h2>This Business is not verified by Yelp</h2>\r\n                          </b></label>\r\n                      </div>\r\n                    </div> -->\r\n                    <br /><br />\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-2\"></div>\r\n                      <div class=\"col-sm-4\">\r\n                        <!-- <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Next\"\r\n                          [disabled]=\"!registrationFormGroup.valid || (click)=\"nextBtn()\"!disableSignIn\" (click)=\"nextBtn()\"> -->\r\n                        <input type=\"submit\" class=\"btn btn-azure shiny btn-block\" value=\"Next\">\r\n                      </div>\r\n                      <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"SignIn\"\r\n                            [disabled]=\"disableSignIn\" (click)=\"signin()\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2\"></div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- NEW PROZ REGISTRATION - ENDS HERE -->\r\n        </div>\r\n        <!-- CONTENT - ENDS HERE -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-commonfooter></app-commonfooter>"

/***/ }),

/***/ "./src/app/topProz/topproz-beapro/topproz-beapro.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/topProz/topproz-beapro/topproz-beapro.component.ts ***!
  \********************************************************************/
/*! exports provided: TopprozBeaproComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopprozBeaproComponent", function() { return TopprozBeaproComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/customValidators */ "./src/utilities/customValidators.ts");
/* harmony import */ var _utilities_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utilities/input */ "./src/utilities/input.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");











var TopprozBeaproComponent = /** @class */ (function () {
    function TopprozBeaproComponent(beyond, router, activatedRoute, formBuilder, input, toastr, http, spinner) {
        this.beyond = beyond;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.input = input;
        this.toastr = toastr;
        this.http = http;
        this.spinner = spinner;
        this.error = false;
        this.mailError = false;
        this.disableSignIn = true;
        this.yelpExists = false;
        this.yelpNotVerified = false;
        this.role = "PRO";
        this.statesData = [];
        this.displayZipcodes = [];
        this.nameOfBussiness = false;
        this.BusinessType = false;
        this.submitted = false;
        this.validMobileNumber = false;
        this.registrationFormGroup = this.formBuilder.group({
            nameofbusiness: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            businessType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].textValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].textValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            emailID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].emailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].mobileNumValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            smsMobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].mobileNumValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            businessAddressLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    TopprozBeaproComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.input.phoneno();
        this.getListOfStates();
    };
    Object.defineProperty(TopprozBeaproComponent.prototype, "f", {
        get: function () { return this.registrationFormGroup.controls; },
        enumerable: true,
        configurable: true
    });
    TopprozBeaproComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.submitted = true;
                this.spinner.show();
                // stop here if form is invalid
                if (this.registrationFormGroup.invalid) {
                    this.spinner.hide();
                    return [2 /*return*/];
                }
                if (this.mailError == true) {
                    this.spinner.hide();
                    this.toastr.warning('Please use different EmailId');
                    return [2 /*return*/];
                }
                this.nextBtn();
                return [2 /*return*/];
            });
        });
    };
    TopprozBeaproComponent.prototype.validateMobileNumber = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/mobileNumberValidator/' + _this.registrationFormGroup.value.mobileNumber.replace(/\s/g, '') + '/' + 'US')
                            .subscribe(function (data) {
                            var response = data.json();
                            if (response.status == 200) {
                                resolve(response);
                            }
                            else {
                                resolve(response);
                            }
                        });
                    })];
            });
        });
    };
    TopprozBeaproComponent.prototype.nextBtn = function () {
        var _this = this;
        if (this.registrationFormGroup.value.leads == true) {
            this.leadGValue = "Enable";
        }
        else {
            this.leadGValue = "Disable";
        }
        if (this.registrationFormGroup.value.vanlynk == true) {
            this.vanlynkValue = "Enable";
        }
        else {
            this.vanlynkValue = "Disable";
        }
        var val = Math.floor(1000 + Math.random() * 9000);
        this.randamvalue = "PRO" + "" + val;
        var newProzObj = {
            prozId: this.randamvalue,
            typeOfBusiness: this.registrationFormGroup.value.nameofbusiness,
            businessType: this.registrationFormGroup.value.businessType,
            firstName: this.registrationFormGroup.value.firstname,
            lastName: this.registrationFormGroup.value.lastname,
            mobileNumber: this.registrationFormGroup.value.mobileNumber,
            smsMobile: this.registrationFormGroup.value.smsMobile,
            emailId: this.registrationFormGroup.value.emailID,
            businessAddress: this.registrationFormGroup.value.businessAddressLine1,
            zipcode: this.registrationFormGroup.value.zipCode,
            city: this.registrationFormGroup.value.city,
            state: this.registrationFormGroup.value.state,
            leadG: this.leadGValue,
            vanlynk: this.vanlynkValue
        };
        //console.log("newProzObj"+JSON.stringify(newProzObj))
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/newProzRegistration', newProzObj)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                localStorage.setItem('regValues', JSON.stringify(response));
                console.log(newProzObj);
                _this.getcountyDetails(newProzObj.city, newProzObj.zipcode, newProzObj.prozId);
            }
        }, function (error) {
            _this.toastr.error('Failed to Connect Server');
        });
    };
    TopprozBeaproComponent.prototype.mailIdVerification = function () {
        var _this = this;
        if (this.registrationFormGroup.value.emailID == "") {
            // this.toastr.warning("Email Id is Empty")
            this.mailError = false;
            this.disableSignIn = true;
            return false;
        }
        else {
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/newCustomerMailIdVerification/' + this.registrationFormGroup.value.emailID + "/" + this.role)
                .subscribe(function (data) {
                var mailResponse = data.json();
                if (mailResponse.status == "TRUE") {
                    _this.mailError = true;
                    _this.disableSignIn = false;
                }
                else {
                    _this.mailError = false;
                    _this.disableSignIn = true;
                }
            });
        }
    };
    TopprozBeaproComponent.prototype.signin = function () {
        this.router.navigate(['/auth/login/0']);
    };
    //BUSINESS API SOCIAL MEDIA
    TopprozBeaproComponent.prototype.changeBusinessName = function () {
        var _this = this;
        if (this.registrationFormGroup.controls.nameofbusiness.value != '' && this.registrationFormGroup.controls.businessAddressLine1.value != '' && this.registrationFormGroup.controls.city.value != '' && this.registrationFormGroup.controls.state.value != '' && this.registrationFormGroup.controls.zipCode.value != '') {
            //COMMON OBJECT FOR FETCHING SOCIAL MEDIA RATING
            var businessObj = {
                name: this.registrationFormGroup.controls.nameofbusiness.value,
                address1: this.registrationFormGroup.controls.businessAddressLine1.value,
                city: this.registrationFormGroup.controls.city.value,
                country: 'US',
                state: this.registrationFormGroup.controls.state.value,
                zipcode: this.registrationFormGroup.controls.zipCode.value,
            };
            //COMMON OBJECT FOR FETCHING SOCIAL MEDIA RATING
            //YELP DETAILS FETCHER
            this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/getYelpBusiness', businessObj)
                .subscribe(function (data) {
                var response = data.json();
                //console.log('This is yelp verified ' + JSON.stringify(response))
                if (response.businesses == "") {
                    _this.yelpExists = false;
                    _this.yelpNotVerified = true;
                    return false;
                }
                else {
                    _this.yelpExists = true;
                    _this.yelpNotVerified = false;
                }
            }, function (error) {
                _this.toastr.warning('Unable to connect to server');
            });
            //YELP DETAILS FETCHER
        }
    };
    //BUSINESS API SOCIAL MEDIA  
    //STATES
    TopprozBeaproComponent.prototype.getListOfStates = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/getListOfStates', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.statesData = response.response;
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    //STATES  
    TopprozBeaproComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    TopprozBeaproComponent.prototype.keyPress1 = function (event) {
        var pattern = /^[a-zA-Z ]+$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && event.keyCode != 9 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //DEFAULTCOUNTY INSERTION
    //INSERT COUNTIES ZIPCODE BATCH DIRECT
    TopprozBeaproComponent.prototype.getcountyDetails = function (city, zipcode, proId) {
        var _this = this;
        console.log(city + '-' + zipcode);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/getStateCodewithZipcode/' + city + '/' + zipcode, options)
            .subscribe(function (data) {
            var response = data.json();
            _this.countyData = response.response[0];
            _this.getZipcodesFromCountyData(_this.countyData.county, _this.countyData.stateCode, proId);
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    TopprozBeaproComponent.prototype.getZipcodesFromCountyData = function (data, stateCode, proId) {
        var _this = this;
        console.log(data);
        this.displayZipcodes = [];
        var householdsZipcodes = 0;
        var county = data;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/getZipcodeFromCounty/' + county + '/' + stateCode, options)
            .subscribe(function (data1) {
            var response = data1.json();
            if (response.status == 200) {
                _this.displayZipcodes = response.response;
                _this.displayZipcodes.forEach(function (e, i) {
                    e.proCode = proId;
                    e.zipcode = e.zipCode;
                    e.checked = false;
                    householdsZipcodes = householdsZipcodes + parseInt(e.households);
                    if (i == _this.displayZipcodes.length - 1) {
                        _this.insertCountiesZipcodeBatchDirect(data, stateCode, _this.displayZipcodes, proId);
                    }
                });
                return false;
            }
            else {
                _this.displayZipcodes = [];
            }
        }, function (error) {
            _this.toastr.warning("Unable to connect to server");
        });
    };
    TopprozBeaproComponent.prototype.insertCountiesZipcodeBatchDirect = function (county, stateCode, zipcodesData, proId) {
        var _this = this;
        //console.log(this.activatedRoute.snapshot.params['prozId'])
        console.log(county);
        console.log(zipcodesData);
        console.log(this.displayZipcodes);
        var countiesZipcodeObj = {
            prozId: proId,
            county: county,
            stateCode: stateCode,
            zipcodes: zipcodesData
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/countiesZipcodeBatchInsertDirect', countiesZipcodeObj)
            .subscribe(function (data) {
            var response = data.json();
            _this.spinner.hide();
            _this.router.navigate(['/topProz/passwordConfirmation', _this.randamvalue]);
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    TopprozBeaproComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"], _utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"], _utilities_input__WEBPACK_IMPORTED_MODULE_7__["Input"]],
            selector: 'app-topproz-beapro',
            template: __webpack_require__(/*! ./topproz-beapro.component.html */ "./src/app/topProz/topproz-beapro/topproz-beapro.component.html"),
            styles: [__webpack_require__(/*! ./topproz-beapro.component.css */ "./src/app/topProz/topproz-beapro/topproz-beapro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _utilities_input__WEBPACK_IMPORTED_MODULE_7__["Input"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]])
    ], TopprozBeaproComponent);
    return TopprozBeaproComponent;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-confirmation/topproz-confirmation.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/topProz/topproz-confirmation/topproz-confirmation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozblueheader></app-commontopprozblueheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <!-- PROZ PROFILE - STARTS HERE -->\r\n        <div class=\"login-container animated fadeInDown\">\r\n          <div class=\"loginbox bg-white\">\r\n            <div class=\"widget-body\">\r\n              <div id=\"registration-form\">\r\n                <div class=\"row\" *ngIf=\"mailStatus\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <div class=\"loginbox-title\">NEW PRO REGISTRATION CONFIRMATION</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <hr class=\"hr-blue-title\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <!-- <h3 class=\"green-text\">Congratulations!!!</h3>\r\n                      <h3 class=\"green-text\">You have registered successfully in TopProz</h3>\r\n                      <h3 class=\"green-text\">Your Registered Reference Number is <span>#{{prozCode}}</span></h3>\r\n                      <h3 class=\"green-text\">We have sent you a confirmation message to your registerted mobile number\r\n                        and Email </h3> -->\r\n                      <h3 class=\"green-text\">Welcome to TopProz. Please login as <b>{{proMailId}}</b> to update your\r\n                        profile</h3>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <h3 class=\"green-text\">To Sign In Click the button below,</h3>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-2\">\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group\">\r\n                      <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Home\" (click)=\"homeBtn()\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group\">\r\n                      <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Sign In\" (click)=\"signInBtn()\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-2\">\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/topProz/topproz-confirmation/topproz-confirmation.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/topProz/topproz-confirmation/topproz-confirmation.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  position: relative;\n  margin: 3% auto;\n  max-width: 100%; }\n\n.login-container .loginbox {\n  position: relative;\n  width: 100% !important;\n  height: auto !important;\n  padding: 0 0 0px 0;\n  box-shadow: 0 0 14px rgba(0, 0, 0, 0.1); }\n\n.login-container .loginbox .loginbox-title {\n  height: auto !important;\n  font-family: 'Arial', 'Helvetica', 'sans-serif' !important; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-facebook {\n  float: left;\n  border: 2px solid #3b5998;\n  color: #3b5998;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 40%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-twitter {\n  float: left;\n  border: 2px solid #29c1f6;\n  color: #29c1f6;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 35%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-google {\n  float: right;\n  border: 2px solid #ef4f1d;\n  color: #ef4f1d;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  background-color: #fff; }\n\n.loginbox-social {\n  padding: 0 0 0 0 !important; }\n\n.loginbox-title {\n  font-weight: bold !important;\n  font-size: 25px !important; }\n\nlabel {\n  font-weight: bold !important; }\n\nlabel .mandatory {\n  color: red;\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n.hr-blue-title {\n  border-top: 3px solid #5DB2FF !important; }\n\n.hr-blue {\n  border-top: 1px solid #5DB2FF !important; }\n\n.logoImage {\n  width: 100px;\n  height: 100px;\n  margin-top: 5px;\n  border-width: 1px;\n  border-color: #5DB2FF;\n  border-style: solid; }\n\n.btn {\n  font-size: 20px !important;\n  font-weight: bold !important;\n  font-family: 'Arial', 'Helvetica', 'sans-serif' !important; }\n\n.form-title {\n  display: block;\n  padding: 8px 0;\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  color: #5DB2FF;\n  margin-bottom: 15px; }\n\n.green-text {\n  color: green;\n  font-family: 'Arial', 'Helvetica', 'sans-serif' !important;\n  text-align: center; }\n\n.green-text span {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wUHJvei90b3Bwcm96LWNvbmZpcm1hdGlvbi9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxcdG9wUHJvelxcdG9wcHJvei1jb25maXJtYXRpb25cXHRvcHByb3otY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFHbEIsd0NBQW1DLEVBQ3RDOztBQUVEO0VBQ0ksd0JBQXVCO0VBQ3ZCLDJEQUEwRCxFQUM3RDs7QUFHRDtFQUNJLFlBQVc7RUFDWCwwQkFBeUI7RUFDekIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osdUJBQXNCLEVBQ3pCOztBQUdBO0VBQ0csNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksNkJBQTRCO0VBQzVCLDJCQUEwQixFQUM3Qjs7QUFFRDtFQUNJLDZCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLFdBQVM7RUFDVCwyQkFBMEI7RUFDMUIsNkJBQTRCLEVBQy9COztBQUVEO0VBQ0kseUNBQXdDLEVBQzNDOztBQUVEO0VBQ0kseUNBQXdDLEVBQzNDOztBQUVEO0VBQ0ksYUFBVztFQUNYLGNBQVk7RUFDWixnQkFBYztFQUNkLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsb0JBQW1CLEVBQ3RCOztBQUdEO0VBQ0ksMkJBQTBCO0VBQzFCLDZCQUE0QjtFQUM1QiwyREFBMEQsRUFDN0Q7O0FBRUQ7RUFDSSxlQUFjO0VBQ2QsZUFBYztFQUNkLGtDQUFpQztFQUNqQyxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2Qsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLDJEQUEwRDtFQUMxRCxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC90b3BQcm96L3RvcHByb3otY29uZmlybWF0aW9uL3RvcHByb3otY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDMlIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgMCAwcHggMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE0cHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE0cHggcmdiYSgwLDAsMCwuMSk7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC10aXRsZSB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCAnSGVsdmV0aWNhJywgJ3NhbnMtc2VyaWYnICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubG9naW4tY29udGFpbmVyIC5sb2dpbmJveCAubG9naW5ib3gtc29jaWFsIC5zb2NpYWwtYnV0dG9ucyAuYnV0dG9uLWZhY2Vib29rIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNiNTk5ODtcclxuICAgIGNvbG9yOiAjM2I1OTk4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC1zb2NpYWwgLnNvY2lhbC1idXR0b25zIC5idXR0b24tdHdpdHRlciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMyOWMxZjY7XHJcbiAgICBjb2xvcjogIzI5YzFmNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIC5sb2dpbmJveCAubG9naW5ib3gtc29jaWFsIC5zb2NpYWwtYnV0dG9ucyAuYnV0dG9uLWdvb2dsZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWY0ZjFkO1xyXG4gICAgY29sb3I6ICNlZjRmMWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4gLmxvZ2luYm94LXNvY2lhbCB7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG4ubG9naW5ib3gtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sYWJlbCAubWFuZGF0b3J5e1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHItYmx1ZS10aXRsZXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzVEQjJGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHItYmx1ZXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzVEQjJGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9nb0ltYWdle1xyXG4gICAgd2lkdGg6MTAwcHg7IFxyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7IFxyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7ICAgXHJcbiAgICBib3JkZXItY29sb3I6ICM1REIyRkY7ICAgXHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkOyBcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsICdIZWx2ZXRpY2EnLCAnc2Fucy1zZXJpZicgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tdGl0bGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVEQjJGRjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM1REIyRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZ3JlZW4tdGV4dHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCAnSGVsdmV0aWNhJywgJ3NhbnMtc2VyaWYnICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmVlbi10ZXh0IHNwYW57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/topProz/topproz-confirmation/topproz-confirmation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/topProz/topproz-confirmation/topproz-confirmation.component.ts ***!
  \********************************************************************************/
/*! exports provided: TopprozConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopprozConfirmationComponent", function() { return TopprozConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");






var TopprozConfirmationComponent = /** @class */ (function () {
    function TopprozConfirmationComponent(beyond, http, router, activatedRoute) {
        this.beyond = beyond;
        this.http = http;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mailStatus = false;
    }
    TopprozConfirmationComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.prozCode = this.activatedRoute.snapshot.params['prozId'];
        this.getProInfo(this.prozCode);
        //console.log("prozcode"+this.prozCode)
    };
    TopprozConfirmationComponent.prototype.getProInfo = function (id) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/getProMail/' + id, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status = 200) {
                _this.proMailId = response.response[0].emailId;
                _this.mailStatus = true;
            }
            else {
                _this.mailStatus = false;
            }
        }, function (error) {
        });
    };
    TopprozConfirmationComponent.prototype.signInBtn = function () {
        this.router.navigate(['/auth/login/0']);
    };
    TopprozConfirmationComponent.prototype.homeBtn = function () {
        this.router.navigate(['']);
    };
    TopprozConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_4__["Beyond"]],
            selector: 'app-topproz-confirmation',
            template: __webpack_require__(/*! ./topproz-confirmation.component.html */ "./src/app/topProz/topproz-confirmation/topproz-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./topproz-confirmation.component.scss */ "./src/app/topProz/topproz-confirmation/topproz-confirmation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_4__["Beyond"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TopprozConfirmationComponent);
    return TopprozConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-layout/topproz-layout.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/topProz/topproz-layout/topproz-layout.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/topProz/topproz-layout/topproz-layout.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/topProz/topproz-layout/topproz-layout.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcFByb3ovdG9wcHJvei1sYXlvdXQvdG9wcHJvei1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/topProz/topproz-layout/topproz-layout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/topProz/topproz-layout/topproz-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: TopprozLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopprozLayoutComponent", function() { return TopprozLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopprozLayoutComponent = /** @class */ (function () {
    function TopprozLayoutComponent() {
    }
    TopprozLayoutComponent.prototype.ngOnInit = function () {
    };
    TopprozLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topproz-layout',
            template: __webpack_require__(/*! ./topproz-layout.component.html */ "./src/app/topProz/topproz-layout/topproz-layout.component.html"),
            styles: [__webpack_require__(/*! ./topproz-layout.component.scss */ "./src/app/topProz/topproz-layout/topproz-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopprozLayoutComponent);
    return TopprozLayoutComponent;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-pricing/topproz-pricing.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/topProz/topproz-pricing/topproz-pricing.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    background-color:white;\r\n}\r\n.row{\r\n    margin-right:30px;\r\n}\r\nh1{\r\n    font-weight:bold !important;\r\n    font-size:20px;\r\n    color:blue;\r\n\r\n}\r\nh2 u{\r\n    font-weight:bold !important;\r\n    font-size:15px;\r\n    color:rgb(32, 166, 228);\r\n}\r\np{\r\n   \r\n    font-size:15px;\r\n    font-weight:bold;\r\n    color:grey;\r\n}\r\nu {\r\n    font-weight: bold !important;\r\n    font-size:25px;\r\n    color:orange;\r\n    padding-right:180px;\r\n    \r\n}\r\nh3 {\r\n    \r\n    font-size:18px;\r\n    color:orangered;\r\n}\r\n.side{\r\n    border-left: 1px solid rgb(0, 60, 255);\r\npadding:10px 40px;\r\n}\r\n.side p{\r\n    color:orange;\r\n    font-size:15px;\r\n}\r\n.side h2{\r\n    color:grey;\r\n    font-size:15px;\r\n    font-weight:bold !important;\r\n    line-height:20px;\r\n}\r\n.side h4{\r\n    color:black;\r\n    font-size:20px;\r\n    \r\n}\r\n.showcase h5 {\r\n    font-size:20px;\r\n    color:black;\r\n}\r\n.showcase h5 button{\r\n    float:right;\r\n    color: white;\r\n    border-radius: 20px;\r\n    border: 1px solid #ffffff;\r\n    font-weight: bold !important;    \r\n    margin: 35px;\r\n}\r\n.side h4 button{\r\n   \r\n    float:right;  \r\n    color: white;\r\n    border-radius: 20px;\r\n    border: 1px solid #ffffff;\r\n    font-weight: bold !important; \r\n    margin:35px;   \r\n}\r\n.green p{\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    color: green;\r\n    padding: 30px 0px;\r\n    margin: 10px 0px 0px 20px;\r\n    line-height: 30px;\r\n}\r\n.grid-image .grid-right-image img{\r\n    height: 200px !important;\r\n}\r\n.img-responsive{\r\n    width:100%;\r\n    margin-right:auto;\r\n    margin-left:auto;\r\n}\r\n.img-responsive .maps{\r\n    height: 200px !important;\r\n    width:100%;\r\n    margin-right:auto;\r\n    margin-left:auto;\r\n}\r\n/* .img button{\r\n    color: white;\r\n    border: 1px solid #ffffff;\r\n    font-weight: bold !important;    \r\n   width:200px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wUHJvei90b3Bwcm96LXByaWNpbmcvdG9wcHJvei1wcmljaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixXQUFXOztDQUVkO0FBQ0Q7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLHdCQUF3QjtDQUMzQjtBQUNEOztJQUVJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztDQUNkO0FBQ0Q7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGFBQWE7SUFDYixvQkFBb0I7O0NBRXZCO0FBQ0Q7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksdUNBQXVDO0FBQzNDLGtCQUFrQjtDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGVBQWU7O0NBRWxCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLGFBQWE7Q0FDaEI7QUFDRDs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0NBQ3JCO0FBRUQ7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7QUFFRDs7Ozs7SUFLSSIsImZpbGUiOiJzcmMvYXBwL3RvcFByb3ovdG9wcHJvei1wcmljaW5nL3RvcHByb3otcHJpY2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59XHJcbi5yb3d7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MzBweDtcclxufVxyXG5oMXtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuXHJcbn1cclxuaDIgdXtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgY29sb3I6cmdiKDMyLCAxNjYsIDIyOCk7XHJcbn1cclxucHtcclxuICAgXHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBjb2xvcjpncmV5O1xyXG59XHJcbnUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgY29sb3I6b3JhbmdlO1xyXG4gICAgcGFkZGluZy1yaWdodDoxODBweDtcclxuICAgIFxyXG59XHJcbmgzIHtcclxuICAgIFxyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBjb2xvcjpvcmFuZ2VyZWQ7XHJcbn1cclxuLnNpZGV7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigwLCA2MCwgMjU1KTtcclxucGFkZGluZzoxMHB4IDQwcHg7XHJcbn1cclxuLnNpZGUgcHtcclxuICAgIGNvbG9yOm9yYW5nZTtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG59XHJcbi5zaWRlIGgye1xyXG4gICAgY29sb3I6Z3JleTtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6MjBweDtcclxufVxyXG4uc2lkZSBoNHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICBcclxufVxyXG4uc2hvd2Nhc2UgaDUge1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG4uc2hvd2Nhc2UgaDUgYnV0dG9ue1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7ICAgIFxyXG4gICAgbWFyZ2luOiAzNXB4O1xyXG59XHJcbi5zaWRlIGg0IGJ1dHRvbntcclxuICAgXHJcbiAgICBmbG9hdDpyaWdodDsgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyBcclxuICAgIG1hcmdpbjozNXB4OyAgIFxyXG59XHJcbi5ncmVlbiBwe1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmdyaWQtaW1hZ2UgLmdyaWQtcmlnaHQtaW1hZ2UgaW1ne1xyXG4gICAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbWctcmVzcG9uc2l2ZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbn1cclxuXHJcbi5pbWctcmVzcG9uc2l2ZSAubWFwc3tcclxuICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbn1cclxuXHJcbi8qIC5pbWcgYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7ICAgIFxyXG4gICB3aWR0aDoyMDBweDtcclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/topProz/topproz-pricing/topproz-pricing.component.html":
/*!************************************************************************!*\
  !*** ./src/app/topProz/topproz-pricing/topproz-pricing.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozheader></app-commontopprozheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n\r\n    <!-- Row1 -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-lg-6 col-sm-6 col-xs-12 showcase\">\r\n          <h1>TopProz</h1>\r\n          <p>Upload your company profile</p>\r\n          <p> Get Project Verified Leads</p>\r\n          <p> Submit Estimates</p>\r\n          <p> Review Estimate Status</p>\r\n          <p> See Bid Scorecard</p>\r\n\r\n          <u>NO Per Lead Fees & Leads </u>\r\n          <u>sent to top 3 best matches</u>\r\n\r\n\r\n          <h2><u>Fees</u></h2>\r\n          <h3>xxxx per month per category for a selected area.</h3>\r\n          <h5>Select a service category and area you want to serve.</h5>\r\n          <h5>Pay a fixed monthly fee based on home count in that area.\r\n            <button type=\"button\" class=\"btn btn-success shiny\">30 day Free Trail</button></h5>\r\n\r\n\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12 img\">\r\n            <img src=\"assets/img/topproz-home/map1.png\" class=\"img-responsive maps\" alt=\"Image\" style=\"height: 550px;\">\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-11 col-sm-11 col-xs-12 img\">\r\n              <div class=\"col-lg-6 col-sm-6 col-xs-12\">\r\n                <button type=\"button\" class=\"btn btn-default btn-block\">Cancel</button>\r\n              </div>\r\n              <div class=\"col-lg-6 col-sm-6 col-xs-12\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-block\">Apply</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-lg-6 col-sm-6 col-xs-12 side\">\r\n          <h1>VanLynk</h1>\r\n          <h2>Cloud based field service management applications, no software to install, tech Friendly mobile apps,\r\n            helps\r\n            you manage people,projects, inventory from anywhere. It includes the following modules:</h2>\r\n          <p>Project Leads</p>\r\n          <p>Schedule/Dispatch</p>\r\n          <p>Inventory Management</p>\r\n          <p>Invoices/</p>\r\n          <p>Payments</p>\r\n          <p> Estimates</p>\r\n          <p>Pricebook</p>\r\n          <p>Management reports</p>\r\n          <p>Profile Settings</p>\r\n          <h2><u>Fees</u></h2>\r\n          <h3>xxx per month per tech with unlimited office users\r\n            <h3>\r\n              <h4>Our price gives everything nothing extra to buy, no hidden charges and no \"extra modules\".\r\n                <button type=\"button\" class=\"btn btn-success shiny\">30 Day Free Trail</button></h4>\r\n              <div class=\"row grid-image\">\r\n                <div class=\"col-lg-12 col-sm-12 col-xs-12 green\">\r\n                  <p>Receive leads and control your business using one app</p>\r\n                </div>\r\n              </div>\r\n              <!-- /Row1 -->\r\n\r\n              <!-- Row5 -->\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                  <div class=\"col-lg-6 col-sm-6 col-xs-12\">\r\n                    <img src=\"assets/img/topproz-home/charts2.png\" class=\"img-responsive\" alt=\"Charts\">\r\n                  </div>\r\n                  <div class=\"col-lg-6 col-sm-6 col-xs-12\">\r\n                    <img src=\"assets/img/topproz-home/plumber3.png\" class=\"img-responsive\" alt=\"Image\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- /Row5 -->"

/***/ }),

/***/ "./src/app/topProz/topproz-pricing/topproz-pricing.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/topProz/topproz-pricing/topproz-pricing.component.ts ***!
  \**********************************************************************/
/*! exports provided: TopprozPricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopprozPricingComponent", function() { return TopprozPricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopprozPricingComponent = /** @class */ (function () {
    function TopprozPricingComponent() {
    }
    TopprozPricingComponent.prototype.ngOnInit = function () {
    };
    TopprozPricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topproz-pricing',
            template: __webpack_require__(/*! ./topproz-pricing.component.html */ "./src/app/topProz/topproz-pricing/topproz-pricing.component.html"),
            styles: [__webpack_require__(/*! ./topproz-pricing.component.css */ "./src/app/topProz/topproz-pricing/topproz-pricing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopprozPricingComponent);
    return TopprozPricingComponent;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-professionals/topproz-professionals.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/topProz/topproz-professionals/topproz-professionals.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\r\n    background-color:white;\r\n}\r\nh2{\r\n    color:rgb(0, 119, 255);\r\n    font-size:30px;\r\n    font-weight:bold !important;\r\n    margin:2% 3%;\r\n    padding-bottom: 20px;\r\n}\r\np{\r\n    color:grey;\r\n    font-size:20px;\r\n    font-weight:bold!important;\r\n    line-height:20px;\r\n    margin:2% 3%;\r\n    \r\n\r\n}\r\np button{\r\n    background-color: rgb(255, 15, 223);\r\n    color:rgb(253, 247, 251);\r\n     \r\n   \r\n   width:200px;\r\n    border: 1px solid #ffffff;\r\n    font-weight: bold! important;\r\n}\r\n.grid-image .grid-left-image img{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wUHJvei90b3Bwcm96LXByb2Zlc3Npb25hbHMvdG9wcHJvei1wcm9mZXNzaW9uYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixhQUFhOzs7Q0FHaEI7QUFFRDtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7OztHQUcxQixZQUFZO0lBQ1gsMEJBQTBCO0lBQzFCLDZCQUE2QjtDQUNoQztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RvcFByb3ovdG9wcHJvei1wcm9mZXNzaW9uYWxzL3RvcHByb3otcHJvZmVzc2lvbmFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG59XHJcbmgye1xyXG4gICAgY29sb3I6cmdiKDAsIDExOSwgMjU1KTtcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOjIlIDMlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxucHtcclxuICAgIGNvbG9yOmdyZXk7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6MjBweDtcclxuICAgIG1hcmdpbjoyJSAzJTtcclxuICAgIFxyXG5cclxufVxyXG5cclxucCBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNSwgMjIzKTtcclxuICAgIGNvbG9yOnJnYigyNTMsIDI0NywgMjUxKTtcclxuICAgICBcclxuICAgXHJcbiAgIHdpZHRoOjIwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkISBpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmlkLWltYWdlIC5ncmlkLWxlZnQtaW1hZ2UgaW1ne1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/topProz/topproz-professionals/topproz-professionals.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/topProz/topproz-professionals/topproz-professionals.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozheader></app-commontopprozheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <h2>TopProz Leads</h2>\r\n        <div Class=\"col-lg-6 col-sm-6 col-xs-12\">\r\n          <p>Get Verified Job Leads from Customers within your Service area, best matches your Service.\r\n          </p>\r\n          <p> No Per Lead Fees</p>\r\n          <p>Leads sent to top 3 best matches</p>\r\n          <h2> Submit Estimates using your Mobile Devices</h2>\r\n          <h2> Submit Estimates using your Mobile Devices</h2>\r\n          <p><button type=\"button\" class=\"btn btn-magenta shiny\">30Day Free Trail\r\n            </button></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Row4 -->\r\n    <div class=\"row grid-image\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-lg-3 col-sm-3 col-xs-12 grid-left-image\">\r\n          <img src=\"assets/img/topproz-home/plumber2.png\" class=\"img-responsive\" alt=\"Image\">\r\n        </div>\r\n        <div class=\"col-lg-9 col-sm-9 col-xs-12 grid-left-image\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /Row4 -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/topProz/topproz-professionals/topproz-professionals.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/topProz/topproz-professionals/topproz-professionals.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TopprozProfessionalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopprozProfessionalsComponent", function() { return TopprozProfessionalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopprozProfessionalsComponent = /** @class */ (function () {
    function TopprozProfessionalsComponent() {
    }
    TopprozProfessionalsComponent.prototype.ngOnInit = function () {
    };
    TopprozProfessionalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topproz-professionals',
            template: __webpack_require__(/*! ./topproz-professionals.component.html */ "./src/app/topProz/topproz-professionals/topproz-professionals.component.html"),
            styles: [__webpack_require__(/*! ./topproz-professionals.component.css */ "./src/app/topProz/topproz-professionals/topproz-professionals.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopprozProfessionalsComponent);
    return TopprozProfessionalsComponent;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-select-category-details/topproz-select-category-details.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/topProz/topproz-select-category-details/topproz-select-category-details.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcFByb3ovdG9wcHJvei1zZWxlY3QtY2F0ZWdvcnktZGV0YWlscy90b3Bwcm96LXNlbGVjdC1jYXRlZ29yeS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/topProz/topproz-select-category-details/topproz-select-category-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/topProz/topproz-select-category-details/topproz-select-category-details.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozheader></app-commontopprozheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n        <!-- Row1 -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n      \r\n                      <div class=\"form-group\">\r\n                            <h2 name=\"categorySelectedLbl\">Service Categories</h2>\r\n                            <h4 id=\"categorySelectedValue\">{{serviceCategoryCode}}</h4>\r\n                          <h2 name=\"categorySubSelectedLbl\">Select Service Sub Categories</h2>\r\n                          <!-- <h4 >Drain Clearing, Faucets, Fixtures &amp; Pipes </h4> -->\r\n                          <div class=\"checkbox\" *ngFor=\"let data of serviceCategoryData\">\r\n                            <label>\r\n                                <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\" id=\"drainclearingID\" [(ngModel)]=\"data.subCategoryCode\" (change)=\"importSelectRowFromList(data,data.subCategoryCode)\">\r\n                                <span class=\"text\">{{data.name}}</span>\r\n                            </label>\r\n                        </div>\r\n                        \r\n                      </div>\r\n                \r\n            </div>\r\n          </div>\r\n          <!-- /Row1 -->\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"widget\">\r\n                  <div class=\"widget-header bg-magenta\">\r\n                      <span class=\"widget-caption\"><h4>Basic Information</h4></span>\r\n                  </div>\r\n                  <div class=\"widget-body\">\r\n                      <div>\r\n                          <form role=\"form\">\r\n                              <div class=\"form-group\">\r\n                                  <label for=\"lastName\">Last Name</label>                                  \r\n                                  <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter Last Name\">\r\n                                      <i class=\"fa fa-user\"></i>\r\n                                  </span>\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                  <label for=\"firstName\">First Name</label>                                  \r\n                                  <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\"  id=\"firstName\" placeholder=\"Enter First Name\">\r\n                                      <i class=\"fa fa-user\"></i>\r\n                                  </span>\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                                  <label for=\"emailID\">E-Mail ID</label>                                  \r\n                                  <span class=\"input-icon icon-right\">\r\n                                      <input type=\"email\" class=\"form-control\" id=\"emailID\" placeholder=\"Enter Email ID\">\r\n                                      <i class=\"fa fa-envelope-o circular\"></i>\r\n                                  </span>\r\n                              </div>                              \r\n                              <div class=\"form-group\">\r\n                                  <label for=\"mobileNumber\">Mobile Number</label>                                  \r\n                                  <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" id=\"mobileNumber\" placeholder=\"Enter Mobile Number\">\r\n                                      <i class=\"glyphicon glyphicon-earphone\"></i>\r\n                                  </span>\r\n                              </div>                              \r\n                              <button type=\"submit\" class=\"btn btn-magenta shiny\" (click)=\"register()\">Register</button>\r\n                          </form>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/topProz/topproz-select-category-details/topproz-select-category-details.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/topProz/topproz-select-category-details/topproz-select-category-details.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: TopprozSelectCategoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopprozSelectCategoryDetailsComponent", function() { return TopprozSelectCategoryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var ng4_auto_complete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-auto-complete */ "./node_modules/ng4-auto-complete/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var TopprozSelectCategoryDetailsComponent = /** @class */ (function () {
    function TopprozSelectCategoryDetailsComponent(autoCompleteService, beyond, router, http, toastr, route, formBuilder) {
        this.autoCompleteService = autoCompleteService;
        this.beyond = beyond;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.route = route;
        this.formBuilder = formBuilder;
        this.dataServiceCategory = false;
        this.selectedRow = [];
        this.disableSubmitButton = true;
    }
    TopprozSelectCategoryDetailsComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.serviceCategoryCode = this.route.snapshot.params['serviceName'];
        //console.log("service Code"+this.serviceCategoryCode)
        this.searchServiceCategories(this.serviceCategoryCode);
        this.addLeadForm = this.formBuilder.group({
            'firstName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            'lastName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            'phoneNumber': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]
        });
    };
    TopprozSelectCategoryDetailsComponent.prototype.searchServiceCategories = function (serviceCategoryCode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/sub-categories/searchByKeyword/' + this.serviceCategoryCode, options)
            .subscribe(function (data) {
            _this.serviceCategoryData = data.json();
            //console.log("in details screen"+JSON.stringify(this.serviceCategoryData))
            for (var i = 0; i < _this.serviceCategoryData.length; i++) {
                _this.serviceCategoryData[i].subCategoryCode = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to get Data');
        });
    };
    //disableSubmit
    TopprozSelectCategoryDetailsComponent.prototype.disableSubmit = function (x) {
        //console.log("x"+x)
        if (x == "") {
            this.disableSubmitButton = true;
        }
        else {
            this.disableSubmitButton = false;
        }
    };
    //disableSubmit  
    TopprozSelectCategoryDetailsComponent.prototype.importSelectRowFromList = function (data, subCategoryCode) {
        //console.log("subCategoryCode"+ subCategoryCode , data)
        if (subCategoryCode == true) {
            this.selectedRow.push(data);
            this.disableSubmit(this.selectedRow);
            //console.log('These are the disable ' + JSON.stringify(this.selectedRow))
        }
        else {
            var tempArray = [];
            for (var i = 0; i < this.selectedRow.length; i++) {
                if (this.selectedRow[i] != data) {
                    tempArray.push(this.selectedRow[i]);
                }
            }
            this.selectedRow = [];
            this.selectedRow = tempArray;
            //console.log('These are the disable 2 ' + JSON.stringify(this.selectedRow))
            this.disableSubmit(this.selectedRow);
        }
    };
    TopprozSelectCategoryDetailsComponent.prototype.register = function () {
        // for (var i=0; i<this.selectedRow.length; i++){
        //   //console.log("SelectedRow"+JSON.stringify(this.selectedRow[i]))
        //   var obj ={
        //     "firstName":"" + this.addLeadForm.value.firstName ,
        //     "lastName":"" + this.addLeadForm.value.lastName,
        //     "phone":"" + this.addLeadForm.value.phone,
        //     "emailId":"" + this.addLeadForm.value.emailId,
        //     "serviceSubCategoryName":"" + this.selectedRow[i].name
        //   }
        //   //console.log("obj..."+JSON.stringify(obj))
        this.router.navigate(['/login']);
    };
    TopprozSelectCategoryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-topproz-select-category-details',
            template: __webpack_require__(/*! ./topproz-select-category-details.component.html */ "./src/app/topProz/topproz-select-category-details/topproz-select-category-details.component.html"),
            styles: [__webpack_require__(/*! ./topproz-select-category-details.component.css */ "./src/app/topProz/topproz-select-category-details/topproz-select-category-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng4_auto_complete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteService"],
            _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], TopprozSelectCategoryDetailsComponent);
    return TopprozSelectCategoryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-services/howitworks/howitworks.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/topProz/topproz-services/howitworks/howitworks.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcFByb3ovdG9wcHJvei1zZXJ2aWNlcy9ob3dpdHdvcmtzL2hvd2l0d29ya3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/topProz/topproz-services/howitworks/howitworks.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/topProz/topproz-services/howitworks/howitworks.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/topProz/topproz-services/howitworks/howitworks.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/topProz/topproz-services/howitworks/howitworks.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HowitworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowitworksComponent", function() { return HowitworksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowitworksComponent = /** @class */ (function () {
    function HowitworksComponent() {
    }
    HowitworksComponent.prototype.ngOnInit = function () {
    };
    HowitworksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-howitworks',
            template: __webpack_require__(/*! ./howitworks.component.html */ "./src/app/topProz/topproz-services/howitworks/howitworks.component.html"),
            styles: [__webpack_require__(/*! ./howitworks.component.css */ "./src/app/topProz/topproz-services/howitworks/howitworks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowitworksComponent);
    return HowitworksComponent;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-services/topproz-service-sub-category/topproz-service-sub-category.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/topProz/topproz-services/topproz-service-sub-category/topproz-service-sub-category.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body\r\n{\r\n    background-color:white;\r\n}\r\n\r\n\r\nh1 {\r\n    color: #bc5679;\r\n    font-size: 30px;\r\n    font-weight: bold !important;\r\n    margin-left: 20px;\r\n  }\r\n\r\n\r\np {\r\n   \r\n    font-size: 15px;\r\n    font-weight: bold !important;\r\n    margin-left: 20px;\r\n    \r\n  }\r\n\r\n\r\n.gridview p {\r\n    font-size: 15px;\r\n    font-weight: bold !important;\r\n    \r\n  }\r\n\r\n\r\n.gridview p img{    \r\nheight:22px;\r\nwidth:22px;\r\nmargin-right: 2px;\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wUHJvei90b3Bwcm96LXNlcnZpY2VzL3RvcHByb3otc2VydmljZS1zdWItY2F0ZWdvcnkvdG9wcHJvei1zZXJ2aWNlLXN1Yi1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHVCQUF1QjtDQUMxQjs7O0FBR0Q7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixrQkFBa0I7R0FDbkI7OztBQUVEOztJQUVFLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0Isa0JBQWtCOztHQUVuQjs7O0FBRUQ7SUFDRSxnQkFBZ0I7SUFDaEIsNkJBQTZCOztHQUU5Qjs7O0FBRUg7QUFDQSxZQUFZO0FBQ1osV0FBVztBQUNYLGtCQUFrQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL3RvcFByb3ovdG9wcHJvei1zZXJ2aWNlcy90b3Bwcm96LXNlcnZpY2Utc3ViLWNhdGVnb3J5L3RvcHByb3otc2VydmljZS1zdWItY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5XHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogI2JjNTY3OTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICBcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmdyaWR2aWV3IHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgIFxyXG4gIH1cclxuXHJcbi5ncmlkdmlldyBwIGltZ3sgICAgXHJcbmhlaWdodDoyMnB4O1xyXG53aWR0aDoyMnB4O1xyXG5tYXJnaW4tcmlnaHQ6IDJweDtcclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/topProz/topproz-services/topproz-service-sub-category/topproz-service-sub-category.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/topProz/topproz-services/topproz-service-sub-category/topproz-service-sub-category.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozheader></app-commontopprozheader>\r\n<div class=\"container\">\r\n  \r\n    <div class=\"body\">\r\n<!-- TopProz - Service Sub Categories -->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <h1>Service Sub Categories : {{categoryNameData}}</h1>\r\n    </div>\r\n  </div>\r\n<!-- TopProz - Service Sub Categories -->\r\n    <!-- Line -->\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <hr class=\"hr-blue\">\r\n        </div>\r\n      </div>\r\n      <!-- /Line -->\r\n\r\n  <!---Row1-->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12 gridview\" *ngFor=\"let data of subCategoriesData\">\r\n        <p><img src=\"assets/img/topproz-home/services1.png\"> <a (click)=\"questions(categoryNameData, data.subcategoryName)\">{{data.subcategoryName}}</a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/Row1-->\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/topProz/topproz-services/topproz-service-sub-category/topproz-service-sub-category.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/topProz/topproz-services/topproz-service-sub-category/topproz-service-sub-category.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: TopprozServiceSubCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopprozServiceSubCategoryComponent", function() { return TopprozServiceSubCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");







var TopprozServiceSubCategoryComponent = /** @class */ (function () {
    function TopprozServiceSubCategoryComponent(beyond, router, route, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.dataServiceSubCategory = false;
    }
    TopprozServiceSubCategoryComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.categoryCodeData = this.route.snapshot.params['cat_code'];
        this.categoryNameData = this.route.snapshot.params['categoryName'];
        this.listSubCategories(this.categoryCodeData);
    };
    TopprozServiceSubCategoryComponent.prototype.listSubCategories = function (categoryCodeData) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/subCategoriesDetails/' + categoryCodeData, options)
            .subscribe(function (data) {
            _this.serviceSubCategoryData = data.json();
            if (_this.serviceSubCategoryData.status == 200) {
                _this.subCategoriesData = _this.serviceSubCategoryData.response;
                ////console.log("service category Data"+JSON.stringify(this.subCategoriesData))
                _this.dataServiceSubCategory = true;
            }
            else {
                _this.dataServiceSubCategory = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    TopprozServiceSubCategoryComponent.prototype.questions = function (categoryNameData, subcategoryName) {
        this.serviceName = categoryNameData + "-" + subcategoryName;
        this.router.navigate(['/selectedService', this.serviceName.trim()]);
    };
    TopprozServiceSubCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-topproz-service-sub-category',
            template: __webpack_require__(/*! ./topproz-service-sub-category.component.html */ "./src/app/topProz/topproz-services/topproz-service-sub-category/topproz-service-sub-category.component.html"),
            styles: [__webpack_require__(/*! ./topproz-service-sub-category.component.css */ "./src/app/topProz/topproz-services/topproz-service-sub-category/topproz-service-sub-category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], TopprozServiceSubCategoryComponent);
    return TopprozServiceSubCategoryComponent;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-services/topproz-services.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/topProz/topproz-services/topproz-services.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body\r\n{\r\n    background-color:white;\r\n}\r\nh2 {\r\n    color: #796c70;\r\n    font-size: 50px;\r\n    font-weight: bold !important;\r\n    margin-left: 0;\r\n    text-align:center;\r\n  }\r\np {\r\n    color: #bc5679;\r\n    font-size: 20px;\r\n    padding-top:10px;\r\n    margin-left:20px;\r\n  }\r\np button{\r\n      float:right;\r\n    margin-right: 80px;    \r\n    color: white;\r\n    border-radius: 20px;\r\n    border: 1px solid #ffffff;\r\n    font-weight: bold;    \r\n}\r\n/* .grid-view{\r\n    \r\n   }\r\n \r\n   .grid-view img{\r\n       \r\n       display: block;\r\n       margin-left: 30px;\r\n       margin-right: auto;\r\n       width: 30%;\r\n       padding-top:50px;\r\n       \r\n   } */\r\n/* .grid-view h6{\r\n    color: orange;\r\n    font-size: 15px;\r\n    margin-left:20px;\r\n   }\r\n \r\n   .grid-view p{\r\n    color: rgb(0, 132, 255);\r\n    font-size: 15px;\r\n    padding-top: 0px;\r\n    line-height:15px;\r\n   } */\r\n/* .blue{\r\n    margin: 10% 0;\r\n} */\r\n/* \r\n   .blue p{\r\n       color:#2E86C1;\r\n       font-size:15px;\r\n      text-align:center;\r\n      line-height:12px;\r\n      \r\n   } */\r\n/* Plumber Image */\r\n.grid-image{\r\n       \r\n}\r\n.grid-image .grid-left-image img{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n/* Plumber Image */\r\nh1 {\r\n    color: #bc5679;\r\n    font-size: 30px;\r\n    font-weight: bold !important;\r\n    margin-left:20px;\r\n  }\r\n.gridview p {\r\n    font-size: 15px;\r\n    font-weight: bold !important;\r\n    \r\n  }\r\n.gridview p img{    \r\nheight:22px;\r\nwidth:22px;\r\nmargin-right: 2px;\r\n}\r\n.hr-blue{    \r\n    border-top: 1px solid #5DB2FF !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wUHJvei90b3Bwcm96LXNlcnZpY2VzL3RvcHByb3otc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixrQkFBa0I7R0FDbkI7QUFDRjtJQUNHLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtHQUNsQjtBQUVEO01BQ0ksWUFBWTtJQUNkLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQixrQkFBa0I7Q0FDckI7QUFDQzs7Ozs7Ozs7Ozs7O09BWUs7QUFFSjs7Ozs7Ozs7Ozs7T0FXSTtBQUdQOztJQUVJO0FBQ0o7Ozs7Ozs7T0FPTztBQUVQLG1CQUFtQjtBQUNoQjs7Q0FFRjtBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QjtBQUNELG1CQUFtQjtBQUlsQjtJQUNHLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtHQUNsQjtBQUdEO0lBQ0UsZ0JBQWdCO0lBQ2hCLDZCQUE2Qjs7R0FFOUI7QUFFSDtBQUNBLFlBQVk7QUFDWixXQUFXO0FBQ1gsa0JBQWtCO0NBQ2pCO0FBR0Q7SUFDSSx5Q0FBeUM7Q0FDNUMiLCJmaWxlIjoic3JjL2FwcC90b3BQcm96L3RvcHByb3otc2VydmljZXMvdG9wcHJvei1zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHlcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG5oMiB7XHJcbiAgICBjb2xvcjogIzc5NmM3MDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIH1cclxuIHAge1xyXG4gICAgY29sb3I6ICNiYzU2Nzk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICB9XHJcblxyXG4gIHAgYnV0dG9ue1xyXG4gICAgICBmbG9hdDpyaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogODBweDsgICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICBcclxufVxyXG4gIC8qIC5ncmlkLXZpZXd7XHJcbiAgICBcclxuICAgfVxyXG4gXHJcbiAgIC5ncmlkLXZpZXcgaW1ne1xyXG4gICAgICAgXHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgIHBhZGRpbmctdG9wOjUwcHg7XHJcbiAgICAgICBcclxuICAgfSAqL1xyXG4gXHJcbiAgIC8qIC5ncmlkLXZpZXcgaDZ7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxuICAgfVxyXG4gXHJcbiAgIC5ncmlkLXZpZXcgcHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMTMyLCAyNTUpO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OjE1cHg7XHJcbiAgIH0gKi9cclxuXHJcblxyXG4vKiAuYmx1ZXtcclxuICAgIG1hcmdpbjogMTAlIDA7XHJcbn0gKi9cclxuLyogXHJcbiAgIC5ibHVlIHB7XHJcbiAgICAgICBjb2xvcjojMkU4NkMxO1xyXG4gICAgICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDoxMnB4O1xyXG4gICAgICBcclxuICAgfSAqL1xyXG4gXHJcbi8qIFBsdW1iZXIgSW1hZ2UgKi9cclxuICAgLmdyaWQtaW1hZ2V7XHJcbiAgICAgICBcclxufVxyXG5cclxuLmdyaWQtaW1hZ2UgLmdyaWQtbGVmdC1pbWFnZSBpbWd7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4vKiBQbHVtYmVyIEltYWdlICovXHJcblxyXG5cclxuXHJcbiBoMSB7XHJcbiAgICBjb2xvcjogI2JjNTY3OTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5ncmlkdmlldyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICB9XHJcblxyXG4uZ3JpZHZpZXcgcCBpbWd7ICAgIFxyXG5oZWlnaHQ6MjJweDtcclxud2lkdGg6MjJweDtcclxubWFyZ2luLXJpZ2h0OiAycHg7XHJcbn0gXHJcblxyXG5cclxuLmhyLWJsdWV7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1REIyRkYgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/topProz/topproz-services/topproz-services.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/topProz/topproz-services/topproz-services.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozheader></app-commontopprozheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n\r\n    <!-- Description -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <h2>Get the job Done using local Service Pro's in your area for the best value.</h2>\r\n        <p>Book vetted and verified Top Service Pro's For the Best Value</p>\r\n        <p>Combined reviews in one screen from all available major resources( Facebook, Google, yelp)</p>\r\n        <p>Get and View Side-Side Estimates.\r\n          <button type=\"button\" class=\"btn btn-success shiny\">How It Works?</button>\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <!-- /Description -->\r\n\r\n\r\n    <!-- TopProz - Service Categories -->\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <br/>\r\n        <h1>Top Categories</h1>\r\n      </div>\r\n    </div> -->\r\n    <!-- /TopProz - Service Categories -->\r\n\r\n    <!-- Line -->\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n          <hr class=\"hr-blue\">\r\n      </div>\r\n    </div>\r\n    <!-- /Line -->\r\n\r\n    <!---Row1-->\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\" *ngFor=\"let data of categoriesData\">\r\n          <p>\r\n            <img src=\"{{data.icons}}\">\r\n            <a (click)=\"subCategories(data)\">{{data.categoryName}}</a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!--/Row1-->\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\" >\r\n               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <h5 class=\"row-title\"><i class=\"typcn typcn-lightbulb\"></i>Top Categories</h5>\r\n                <div>\r\n                    <ol class=\"dd-list\" class=\"col-lg-4 col-sm-4 col-xs-12\" *ngFor=\"let data of categoriesData\">\r\n                        <li class=\"dd-item bordered-inverse\">\r\n                            <div class=\"dd-handle\" (click)=\"selectedCategoriesTrue(data)\" *ngIf=\"data.collapsefalse\">\r\n                                <i class=\"fa fa-chevron-right\"></i>&nbsp; &nbsp;{{data.categoryName}}\r\n                            </div>\r\n                            <div class=\"dd-handle\" (click)=\"selectedCategoriesFalse(data)\" *ngIf=\"data.collapsetrue\">\r\n                                <i class=\"fa fa-chevron-down\"></i>&nbsp; &nbsp;{{data.categoryName}}\r\n                            </div>\r\n                        </li>\r\n                        <ng-container *ngIf=\"data.collapsetrue\">\r\n                            <li class=\"dd-item\" data-id=\"2\" *ngFor=\"let dataCategory of subCategoriesData\">\r\n                                <ol class=\"dd-list\" >\r\n                                    <li class=\"dd-item bordered-palegreen\" data-id=\"3\" >\r\n                                        <div class=\"dd-handle\" (click)=\"questions(data.categoryName, dataCategory.subcategoryName)\">\r\n                                            {{dataCategory.subcategoryName}}\r\n                                        </div>\r\n                                        \r\n                                    </li>\r\n                                </ol>\r\n                            </li>\r\n                        </ng-container>\r\n                    </ol>\r\n\r\n            </div>\r\n            </div>\r\n          </div>\r\n\r\n    <!---Row2-->\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Bathrooms </a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Cabinets &\r\n              Countertops </a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Carpentry </a></p>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!--/Row2-->\r\n\r\n    <!---Row3-->\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"> <a routerLink=\"/topprozservicesubcategory\"> Carpet</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"> <a routerLink=\"/topprozservicesubcategory\"> Cleaning &\r\n              Maid Service</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Concrete,\r\n              Brick & Stone</a></p>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!--/Row3-->\r\n\r\n    <!---Row4-->\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Decks &\r\n              Porches</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Driveways,\r\n              Patios & Walks</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Drywall &\r\n              Insulation</a></p>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!--/Row4-->\r\n\r\n    <!---Row5-->\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Electrical &\r\n              Computers</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Fences</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Flooring &\r\n              Hardwood</a></p>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!--/Row5-->\r\n\r\n    <!---Row6-->\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"> <a routerLink=\"/topprozservicesubcategory\"> Garages,\r\n              Doors, Openers</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Handyman\r\n              Services</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Heating &\r\n              Cooling</a></p>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!--/Row6-->\r\n\r\n    <!---Row7-->\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Kitchens</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Landscape</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Lawncare &\r\n              Sprinklers</a></p>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!--/Row7-->\r\n\r\n    <!---Row8-->\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Painting &\r\n              Staining</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Plumbing</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Remodels</a></p>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!--/Row8-->\r\n\r\n    <!---Row9-->\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Roofing &\r\n              Gutters</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Siding</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Swimming\r\n              Pools & Spas</a></p>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!--/Row9-->\r\n\r\n    <!---Row10-->\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Tile & Stone</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Walls &\r\n              Ceilings</a></p>\r\n        </div>\r\n        <div class=\"col-lg-4 col-sm-4 col-xs-12 gridview\">\r\n          <p><img src=\"assets/img/topproz-home/services1.png\"><a routerLink=\"/topprozservicesubcategory\"> Windows &\r\n              Doors</a></p>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!--/Row10-->\r\n\r\n\r\n\r\n    <!-- Plumber Image -->\r\n    <div class=\"row grid-image\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-lg-3 col-sm-3 col-xs-12 grid-left-image\">\r\n          <img src=\"assets/img/topproz-home/plumber2.png\" class=\"img-responsive\" alt=\"Image\">\r\n        </div>\r\n        <div class=\"col-lg-9 col-sm-9 col-xs-12 grid-left-image\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /Plumber Image -->\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/topProz/topproz-services/topproz-services.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/topProz/topproz-services/topproz-services.component.ts ***!
  \************************************************************************/
/*! exports provided: TopprozServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopprozServicesComponent", function() { return TopprozServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");







var TopprozServicesComponent = /** @class */ (function () {
    function TopprozServicesComponent(beyond, router, http, toastr, route) {
        this.beyond = beyond;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.route = route;
        this.dataServiceCategory = false;
        this.dataServiceSubCategory = false;
        this.catSelection = false;
        this.expandedArraySubCategory = [];
    }
    TopprozServicesComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.listServiceCategories();
    };
    TopprozServicesComponent.prototype.listServiceCategories = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/categories', options)
            .subscribe(function (data) {
            _this.serviceCategoryData = data.json();
            _this.categoriesData = _this.serviceCategoryData.response;
            for (var i = 0; i < _this.categoriesData.length; i++) {
                _this.listSubCategories(_this.categoriesData[i]);
                _this.categoriesData[i].collapsefalse = true;
                _this.categoriesData[i].collapsetrue = false;
                if (_this.categoriesData[i].icons === '' || _this.categoriesData[i].icons === null) {
                    _this.categoriesData[i].icons = '../assets/img/no-image.png';
                }
                else {
                    _this.categoriesData[i].icons = _global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + "/" + _this.categoriesData[i].icons;
                }
            }
            _this.dataServiceCategory = true;
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    TopprozServicesComponent.prototype.listSubCategories = function (categoryCodeData) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/subCategoriesDetails/' + categoryCodeData.cat_code, options)
            .subscribe(function (data) {
            _this.serviceSubCategoryData = data.json();
            if (_this.serviceSubCategoryData.status == 200) {
                _this.subCategoriesData = _this.serviceSubCategoryData.response;
                ////console.log("service category Data"+JSON.stringify(this.subCategoriesData))
                _this.dataServiceSubCategory = true;
            }
            else {
                _this.dataServiceSubCategory = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    TopprozServicesComponent.prototype.subCategories = function (data) {
        this.router.navigate(['/topprozservicesubcategory', data.cat_code, data.categoryName]);
    };
    TopprozServicesComponent.prototype.selectedCategoriesTrue = function (Category) {
        var _this = this;
        this.expandedArraySubCategory.push(Category);
        if (this.expandedArraySubCategory.length == 2) {
            this.expandedArraySubCategory[this.expandedArraySubCategory.length - 2].collapsefalse = true;
            this.expandedArraySubCategory[this.expandedArraySubCategory.length - 2].collapsetrue = false;
            this.expandedArraySubCategory.shift();
        }
        Category.collapsefalse = false;
        Category.collapsetrue = true;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/categoriesSubCategories/' + Category.cat_code, options)
            .subscribe(function (data) {
            var subCategories = data.json();
            if (subCategories.status == 200) {
                _this.subCategoriesData = subCategories.response;
            }
            else {
                Category.collapsefalse = true;
                Category.collapsetrue = false;
                return false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    TopprozServicesComponent.prototype.selectedCategoriesFalse = function (Category) {
        Category.collapsetrue = false;
        Category.collapsefalse = true;
    };
    TopprozServicesComponent.prototype.questions = function (categoryNameData, subcategoryName) {
        this.serviceName = categoryNameData + "-" + subcategoryName;
        this.router.navigate(['/customer/selectedService', this.serviceName.trim()]);
    };
    TopprozServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-topproz-services',
            template: __webpack_require__(/*! ./topproz-services.component.html */ "./src/app/topProz/topproz-services/topproz-services.component.html"),
            styles: [__webpack_require__(/*! ./topproz-services.component.css */ "./src/app/topProz/topproz-services/topproz-services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TopprozServicesComponent);
    return TopprozServicesComponent;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-signin/topproz-signin.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/topProz/topproz-signin/topproz-signin.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabbable{\r\n  margin-top: 3%;\r\n}\r\n.tab-content{\r\n  padding: 1px 5px;\r\n}\r\n.login-container{\r\n margin-top: 10px;\r\n}\r\n.loginbox-dropdown\r\n{\r\n  padding:10px 42px;\r\n  border-left: 4px;\r\n  width:100%;\r\n}\r\n.loginbox-signup a{\r\n  font-size: 14px !important;\r\n  color: #5DB2FF  !important;\r\n  -webkit-text-decoration-line: underline !important;\r\n          text-decoration-line: underline !important;\r\n}\r\n.btn {\r\n  font-size: 14px !important;\r\n  font-weight: bold !important;\r\n}\r\n.or-line{\r\n  border-top: 3px solid #5DB2FF  !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wUHJvei90b3Bwcm96LXNpZ25pbi90b3Bwcm96LXNpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBRUQ7Q0FDQyxpQkFBaUI7Q0FDakI7QUFFRDs7RUFFRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixtREFBMkM7VUFBM0MsMkNBQTJDO0NBQzVDO0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0NBQzlCO0FBRUQ7RUFDRSwwQ0FBMEM7Q0FDM0MiLCJmaWxlIjoic3JjL2FwcC90b3BQcm96L3RvcHByb3otc2lnbmluL3RvcHByb3otc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiYmFibGV7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxuLnRhYi1jb250ZW50e1xyXG4gIHBhZGRpbmc6IDFweCA1cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXJ7XHJcbiBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubG9naW5ib3gtZHJvcGRvd25cclxue1xyXG4gIHBhZGRpbmc6MTBweCA0MnB4O1xyXG4gIGJvcmRlci1sZWZ0OiA0cHg7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmxvZ2luYm94LXNpZ251cCBhe1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNURCMkZGICAhaW1wb3J0YW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxufVxyXG4gXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vci1saW5le1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjNURCMkZGICAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/topProz/topproz-signin/topproz-signin.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/topProz/topproz-signin/topproz-signin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozblueheader></app-commontopprozblueheader>\r\n<div class=\"container\">\r\n    <div class=\"body\">\r\n        <!-- <h5 class=\"row-title\"><i class=\"typcn typcn-folder themeprimary\"></i>Simple Tabs</h5> -->\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-sm-4 col-xs-12\">\r\n                <!-- <h1>Welcome to TopProz!!!</h1>\r\n                <p>Lorem Ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p> -->\r\n            </div>\r\n            <!--LOGIN TAB - STARTS HERE-->\r\n            <div class=\"col-lg-4 col-sm-4 col-xs-12\">\r\n                <div class=\"tabbable\">\r\n                    <!--DEFINE THE TABS - STARTS HERE-->\r\n                    <ul class=\"nav nav-tabs\" id=\"loginTabs\">\r\n                        <li class=\"tab-red {{classActive}}\">\r\n                            <a data-toggle=\"tab\" (click)=\"customerTab()\" href=\"#customerTab\">\r\n                                Customer\r\n                            </a>\r\n                        </li>\r\n                        <li class=\"{{classNotActive}}\">\r\n                            <a data-toggle=\"tab\" (click)=\"prozTab()\" href=\"#serviceProviderTab\">\r\n                                Service Provider\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                    <!--DEFINE THE TABS - ENDS HERE-->\r\n                    <!--TAB CONTENT - STARTS HERE-->\r\n                    <div class=\"tab-content\">\r\n                        <!--CUSTOMER TAB CONTENT - STARTS HERE-->\r\n                        <!--  -->\r\n                        <div class=\"tab-pane in active\" *ngIf=\"customerRole\" >\r\n                                <form [formGroup]=\"custSignIn\">\r\n                            <div class=\"login-container animated fadeInDown\">\r\n                                <div class=\"loginbox bg-white\">\r\n                                    <div class=\"loginbox-title\">SIGN IN</div>\r\n                                    <div class=\"loginbox-social\">\r\n                                        <div class=\"social-title \">Connect with Your Social Accounts</div>\r\n                                        <div class=\"social-buttons\">\r\n                                            <a href=\"\" class=\"button-facebook\">\r\n                                                <i class=\"social-icon fa fa-facebook\"></i>\r\n                                            </a>\r\n                                            <a href=\"\" class=\"button-twitter\">\r\n                                                <i class=\"social-icon fa fa-twitter\"></i>\r\n                                            </a>\r\n                                            <a href=\"\" class=\"button-google\">\r\n                                                <i class=\"social-icon fa fa-google\"></i>\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"loginbox-or\">\r\n                                        <div class=\"or-line\"></div>\r\n                                        <div class=\"or\">OR</div>\r\n                                    </div>\r\n                                    <div class=\"loginbox-textbox\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"Email\"/>\r\n                                    </div>\r\n                                    <div class=\"loginbox-textbox\">\r\n                                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" />\r\n                                    </div>\r\n                                    <div class=\"loginbox-submit\">\r\n                                        <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Sign In\" (click)=\"cuSignInBtn()\">\r\n                                    </div>                                    \r\n                                    <div class=\"loginbox-signup\">\r\n                                        <a href=\"\">Forgot Password?</a>\r\n                                    </div>\r\n                                    <div class=\"loginbox-signup\">\r\n                                        <a [routerLink]=\"['/customerSignup']\">Sign Up With Email</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            </form>\r\n                        </div>\r\n                        <!--CUSTOMER TAB CONTENT - ENDS HERE-->\r\n                        <!--SERVICE PROVIDER TAB CONTENT - STARTS HERE-->\r\n                        <!--   -->\r\n                        <div class=\"tab-pane in active\" *ngIf=\"prozRole\" >\r\n                            <form [formGroup]=\"serProSignIn\">\r\n                            <div class=\"login-container animated fadeInDown\">\r\n                                <div class=\"loginbox bg-white\">\r\n                                    <div class=\"loginbox-title\">SIGN IN</div>\r\n                                    <div class=\"loginbox-social\">\r\n                                        <div class=\"social-title \">Connect with Your Social Accounts</div>\r\n                                        <div class=\"social-buttons\">\r\n                                            <a href=\"\" class=\"button-facebook\">\r\n                                                <i class=\"social-icon fa fa-facebook\"></i>\r\n                                            </a>\r\n                                            <a href=\"\" class=\"button-twitter\">\r\n                                                <i class=\"social-icon fa fa-twitter\"></i>\r\n                                            </a>\r\n                                            <a href=\"\" class=\"button-google\">\r\n                                                <i class=\"social-icon fa fa-google\"></i>\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"loginbox-or\">\r\n                                        <div class=\"or-line\"></div>\r\n                                        <div class=\"or\">OR</div>\r\n                                    </div>\r\n                                    <div class=\"loginbox-textbox\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"Email\" />\r\n                                    </div>\r\n                                    <div class=\"loginbox-textbox\">\r\n                                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" />\r\n                                    </div>\r\n                                    <div class=\"loginbox-dropdown\">\r\n\r\n                                        <select class=\"form-control\" name=\"role\" data-bv-field=\"row-title\" formControlName=\"role\">\r\n                                            <option value=\"\">Choose Role</option>\r\n                                            <option value=\"PROZ ADMIN\">Pro Admin</option>\r\n                                            <option value=\"PROZ\">Pro</option>\r\n                                        </select><i class=\"form-control-feedback\" data-bv-field=\"role\" style=\"display: none;\"></i>\r\n                                    </div>\r\n\r\n                                    <div class=\"loginbox-submit\">\r\n                                        <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Sign In\" (click)=\"spSignInBtn()\">\r\n                                    </div>                                  \r\n\r\n                                    <div class=\"loginbox-signup\">\r\n                                        <a href=\"\">Forgot Password?</a>\r\n                                    </div>\r\n\r\n                                    <div class=\"loginbox-signup\">\r\n                                        <a href=\"register.html\">Sign Up With Email</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                        </div>\r\n                        <!--SERVICE PROVIDER TAB CONTENT - ENDS HERE-->\r\n                    </div>\r\n                    <!--TAB CONTENT - ENDS HERE-->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-sm-4 col-xs-12\">\r\n\r\n            </div>\r\n            <!--LOGIN TAB - ENDS HERE-->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/topProz/topproz-signin/topproz-signin.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/topProz/topproz-signin/topproz-signin.component.ts ***!
  \********************************************************************/
/*! exports provided: TopprozSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopprozSigninComponent", function() { return TopprozSigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");








var TopprozSigninComponent = /** @class */ (function () {
    function TopprozSigninComponent(router, formBuilder, activatedRoute, toastr, http, authService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.http = http;
        this.authService = authService;
        this.customerRole = false;
        this.prozRole = true;
        this.serProSignIn = this.formBuilder.group({
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            role: ['PROZ']
        });
        this.custSignIn = this.formBuilder.group({
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    TopprozSigninComponent.prototype.ngOnInit = function () {
        this.prozCode = localStorage.getItem("prozCode");
        //console.log("prozCode"+this.prozCode)
        if (this.activatedRoute.snapshot.params['id'] == "CUST") {
            this.classActive = "active";
            this.classNotActive = "";
            this.customerRole = true;
            this.prozRole = false;
            return false;
        }
        if (this.activatedRoute.snapshot.params['id'] == "PROZ") {
            this.classActive = "";
            this.classNotActive = "active";
            this.customerRole = false;
            this.prozRole = true;
            return false;
        }
    };
    TopprozSigninComponent.prototype.customerTab = function () {
        this.customerRole = true;
        this.prozRole = false;
    };
    TopprozSigninComponent.prototype.prozTab = function () {
        this.prozRole = true;
        this.customerRole = false;
    };
    TopprozSigninComponent.prototype.cuSignInBtn = function () {
        var _this = this;
        var obj = {
            "emailId": this.custSignIn.value.Email,
            "password": this.custSignIn.value.password
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/custLogin', obj)
            .subscribe(function (data) {
            var responseData = data.json();
            _this.response = responseData.response[0];
            localStorage.setItem('customerLogin', JSON.stringify(_this.response));
            //console.log("This is Response: " + JSON.stringify(this.response))
            if (responseData.status === 200) {
                _this.toastr.success("Logged in Suceessfully...");
                if (_this.activatedRoute.snapshot.params['id'] == "PROZ") {
                    _this.router.navigate(['/customerDashboard']);
                }
                else {
                    _this.router.navigate(['/selectProz/', _this.response.loginCode]);
                }
            }
            else {
                _this.toastr.warning('No Login....');
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    TopprozSigninComponent.prototype.spSignInBtn = function () {
        var _this = this;
        var obj = {
            "emailId": this.serProSignIn.value.Email,
            "password": this.serProSignIn.value.password,
            "role": this.serProSignIn.value.role
        };
        this.authService.login(obj)
            .subscribe(function (data) {
            var loginData = data;
            _this.response = data.data;
            localStorage.setItem('login', JSON.stringify(_this.response));
            if (loginData.status == 200) {
                _this.router.navigate(['/proz/prozProfile', _this.prozCode]);
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    TopprozSigninComponent.prototype.newProzRegistrationLink = function () {
        this.router.navigate(['/newProzRegistration']);
    };
    TopprozSigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topproz-signin',
            template: __webpack_require__(/*! ./topproz-signin.component.html */ "./src/app/topProz/topproz-signin/topproz-signin.component.html"),
            styles: [__webpack_require__(/*! ./topproz-signin.component.css */ "./src/app/topProz/topproz-signin/topproz-signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], TopprozSigninComponent);
    return TopprozSigninComponent;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-vanlynk-beapro-password/topproz-vanlynk-beapro-password.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/topProz/topproz-vanlynk-beapro-password/topproz-vanlynk-beapro-password.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozblueheader></app-commontopprozblueheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n    <!-- <h5 class=\"row-title\"><i class=\"typcn typcn-folder themeprimary\"></i>Simple Tabs</h5> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <!-- CONTENT - STARTS HERE -->\r\n        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n          <!-- NEW PROZ REGISTRATION - STARTS HERE -->\r\n          <div class=\"login-container animated fadeInDown\">\r\n            <div class=\"loginbox bg-white\">\r\n              <div class=\"widget-body\">\r\n                <div id=\"registration-form\">\r\n                  <form role=\"form\"  [formGroup]=\"registrationFormGroup\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"loginbox-title\">VANLYNK SIGN UP - PASSWORD</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                            <hr class=\"hr-magenta-title\">\r\n                      </div>\r\n                    </div>\r\n                    <h4 class=\"col-sm-6\">Your Mobile Code is: {{mobileCode}}</h4>\r\n                    <h4 class=\"col-sm-6\">Your Email Code is: {{mailOTP}}</h4>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"typeofbusiness\">Enter the code received on your Mobile <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" formControlName=\"mobileCode\" class=\"form-control\" id=\"mobileCode\" placeholder=\"Enter the Code\" (change)=\"otpConfirm()\"  required data-bv-notempty-message=\"OTP is required\">\r\n                            <i class=\"fa fa-sort-alpha-asc\"></i><i class=\"fa fa-sort-numeric-asc\"></i>\r\n                          </span>\r\n                          <small *ngIf=\"otpValidate\">\r\n                            <b style=\"color:green\">OTP Validated</b>\r\n                          </small>\r\n                          <small *ngIf=\"otpError\">\r\n                            <b style=\"color:red\">OTP Not Validated. Please Enter the correct OTP</b>\r\n                          </small>\r\n                          <small *ngIf=\"registrationFormGroup.controls['mobileCode'].touched\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['mobileCode'].hasError('required')\">\r\n                                Mobile Code should not be empty\r\n                            </small>\r\n                        </small>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"typeofbusiness\">Enter the code received on your Mail <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" formControlName=\"mailOTP\" class=\"form-control\" id=\"mailOTP\" placeholder=\"Enter the Mail Code\" (change)=\"mailOTPConfirm()\" required data-bv-notempty-message=\"Mail OTP is required\">\r\n                            <i class=\"fa fa-sort-alpha-asc\"></i><i class=\"fa fa-sort-numeric-asc\"></i>\r\n                          </span>\r\n                          <small *ngIf=\"mailOtpValidate\">\r\n                            <b style=\"color:green\">Mail OTP Validated</b>\r\n                          </small>\r\n                          <small *ngIf=\"mailOtpError\">\r\n                            <b style=\"color:red\">Mail OTP Not Validated. Please Enter the correct OTP</b>\r\n                          </small>\r\n                          <small *ngIf=\"registrationFormGroup.controls['mailOTP'].touched\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['mailOTP'].hasError('required')\">\r\n                                Mail Code should not be empty\r\n                            </small>\r\n                        </small>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                          <div class=\"form-group\">\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\" [formGroup]=\"passwordFormGroup\">\r\n                      <div class=\"col-sm-6\">\r\n                          <div class=\"form-group\" >\r\n                              <label for=\"password\">Password <span class=\"mandatory\">*</span></label>\r\n                              <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                          </div>\r\n                          <p class=\"bg-primary\" *ngIf=\"passwordFormGroup.controls.password.errors?.required && passwordFormGroup.controls.password.touched\">Password is required</p>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                                <label for=\"repeatPassword\">Re-Type Password <span class=\"mandatory\">*</span></label>\r\n                                <input class=\"form-control\" type=\"password\" name=\"repeatPassword\" placeholder=\"Re-Type Password\" formControlName=\"repeatPassword\">\r\n                            </div>\r\n                            <p class=\"bg-primary\" *ngIf=\"passwordFormGroup.controls.repeatPassword.errors?.required && passwordFormGroup.controls.repeatPassword.touched\">Repeat password is required</p>\r\n                            <p class=\"bg-danger\" *ngIf=\"passwordFormGroup.errors?.doesMatchPassword\">Password does not match</p>\r\n                       \r\n                      </div>\r\n                    </div>                    \r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                            <hr class=\"hr-magenta\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-2\"></div> \r\n                      <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Resend OTP\" (click)=\"resendOTP()\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Sign Up\" (click)=\"signUpBtn()\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2\"></div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- NEW PROZ REGISTRATION - ENDS HERE-->\r\n        </div>\r\n        <!-- CCONTENT - ENDS HERE-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/topProz/topproz-vanlynk-beapro-password/topproz-vanlynk-beapro-password.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/topProz/topproz-vanlynk-beapro-password/topproz-vanlynk-beapro-password.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  position: relative;\n  margin: 3% auto;\n  max-width: 100%; }\n\n.login-container .loginbox {\n  position: relative;\n  width: 100% !important;\n  height: auto !important;\n  padding: 0 0 0px 0;\n  box-shadow: 0 0 14px rgba(0, 0, 0, 0.1); }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-facebook {\n  float: left;\n  border: 2px solid #3b5998;\n  color: #3b5998;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 40%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-twitter {\n  float: left;\n  border: 2px solid #29c1f6;\n  color: #29c1f6;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 35%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-google {\n  float: right;\n  border: 2px solid #ef4f1d;\n  color: #ef4f1d;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  background-color: #fff; }\n\n.loginbox-social {\n  padding: 0 0 0 0 !important; }\n\n.loginbox-title {\n  font-weight: bold !important;\n  font-size: 25px !important; }\n\nlabel {\n  font-weight: bold !important; }\n\nlabel .mandatory {\n  color: red;\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n.hr-blue-title {\n  border-top: 3px solid #5DB2FF !important; }\n\n.hr-blue {\n  border-top: 1px solid #5DB2FF !important; }\n\n.btn {\n  font-size: 14px !important;\n  font-weight: bold !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wUHJvei90b3Bwcm96LXZhbmx5bmstYmVhcHJvLXBhc3N3b3JkL0Q6XFxUb3Bwcm96XFxUb3BQcm96X0FkdmFuY2VfQ2xpZW50L3NyY1xcYXBwXFx0b3BQcm96XFx0b3Bwcm96LXZhbmx5bmstYmVhcHJvLXBhc3N3b3JkXFx0b3Bwcm96LXZhbmx5bmstYmVhcHJvLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFHbEIsd0NBQW1DLEVBQ3RDOztBQUVEO0VBQ0ksWUFBVztFQUNYLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLFlBQVc7RUFDWCwwQkFBeUI7RUFDekIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWix1QkFBc0IsRUFDekI7O0FBR0E7RUFDRyw0QkFBMkIsRUFDOUI7O0FBR0Q7RUFDSSw2QkFBNEI7RUFDNUIsMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0ksNkJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksV0FBUztFQUNULDJCQUEwQjtFQUMxQiw2QkFBNEIsRUFDL0I7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSwyQkFBMEI7RUFDMUIsNkJBQTRCLEVBQy9CIiwiZmlsZSI6InNyYy9hcHAvdG9wUHJvei90b3Bwcm96LXZhbmx5bmstYmVhcHJvLXBhc3N3b3JkL3RvcHByb3otdmFubHluay1iZWFwcm8tcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMyUgYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAubG9naW5ib3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAwIDBweCAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTRweCByZ2JhKDAsMCwwLC4xKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDE0cHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTRweCByZ2JhKDAsMCwwLC4xKTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAubG9naW5ib3ggLmxvZ2luYm94LXNvY2lhbCAuc29jaWFsLWJ1dHRvbnMgLmJ1dHRvbi1mYWNlYm9vayB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYjU5OTg7XHJcbiAgICBjb2xvcjogIzNiNTk5ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIC5sb2dpbmJveCAubG9naW5ib3gtc29jaWFsIC5zb2NpYWwtYnV0dG9ucyAuYnV0dG9uLXR3aXR0ZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjljMWY2O1xyXG4gICAgY29sb3I6ICMyOWMxZjY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAubG9naW5ib3ggLmxvZ2luYm94LXNvY2lhbCAuc29jaWFsLWJ1dHRvbnMgLmJ1dHRvbi1nb29nbGUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2VmNGYxZDtcclxuICAgIGNvbG9yOiAjZWY0ZjFkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuIC5sb2dpbmJveC1zb2NpYWwge1xyXG4gICAgcGFkZGluZzogMCAwIDAgMCAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuXHJcbi5sb2dpbmJveC10aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxhYmVsIC5tYW5kYXRvcnl7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oci1ibHVlLXRpdGxleyAgICBcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjNURCMkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oci1ibHVleyAgICBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNURCMkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/topProz/topproz-vanlynk-beapro-password/topproz-vanlynk-beapro-password.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/topProz/topproz-vanlynk-beapro-password/topproz-vanlynk-beapro-password.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: TopprozVanlynkBeaproPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopprozVanlynkBeaproPasswordComponent", function() { return TopprozVanlynkBeaproPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/validator */ "./src/utilities/validator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");








var TopprozVanlynkBeaproPasswordComponent = /** @class */ (function () {
    function TopprozVanlynkBeaproPasswordComponent(formBuilder, router, activatedRoute, http, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.otpError = false;
        this.otpValidate = false;
        this.mailOtpValidate = false;
        this.mailOtpError = false;
        this.passwordFormGroup = this.formBuilder.group({
            mobileCode: [''],
            mailOTP: [''],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, {
            validator: _utilities_validator__WEBPACK_IMPORTED_MODULE_3__["RegistrationValidator"].validate.bind(this)
        });
        this.registrationFormGroup = this.formBuilder.group({
            mobileCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mailOTP: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            passwordFormGroup: this.passwordFormGroup
        });
    }
    TopprozVanlynkBeaproPasswordComponent.prototype.ngOnInit = function () {
        this.vanlynkValues = JSON.parse(localStorage.getItem('regValues'));
        //console.log("vanlynk Values"+JSON.stringify(this.vanlynkValues))
        this.regStatus = JSON.parse(localStorage.getItem('status'));
        //console.log("reg Status"+JSON.stringify(this.regStatus))
        this.mobileCode = this.vanlynkValues.OTP;
        this.mailOTP = this.vanlynkValues.mailOTP;
        this.vanlynkCode = this.activatedRoute.snapshot.params['vanlynkId'];
    };
    TopprozVanlynkBeaproPasswordComponent.prototype.signUpBtn = function () {
        var _this = this;
        var topObj = {
            mailOTP: this.mailOTP,
            otp: this.mobileCode,
            loginCode: this.vanlynkCode,
            mobileNumber: this.vanlynkValues.mobileNumber,
            password: this.passwordFormGroup.value.repeatPassword,
            emailId: this.vanlynkValues.emailId,
            firstName: this.vanlynkValues.firstName,
            leadG: this.regStatus.leadG,
            vanlynk: this.regStatus.vanlynk,
            // lastName: this.vanlynkCode.lastName,
            url: this.vanlynkValues.appURL,
        };
        //console.log("topObj"+JSON.stringify(topObj))
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/vanlynkPasswordConfm', topObj)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                localStorage.setItem('vanlynkCode', _this.vanlynkCode);
                _this.router.navigate(['/auth/login/0']);
            }
        });
    };
    TopprozVanlynkBeaproPasswordComponent.prototype.mailOTPConfirm = function () {
        var _this = this;
        if (this.registrationFormGroup.value.mailOTP == "" || this.registrationFormGroup.value.mailOTP == null) {
            this.mailOtpValidate = false;
            this.mailOtpError = false;
            return false;
        }
        else {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/vanlynkMailOTPValidation/' + this.activatedRoute.snapshot.params['vanlynkId'] + '/' + this.registrationFormGroup.value.mailOTP, options)
                .subscribe(function (data) {
                var mailOtpValidator = data.json();
                //console.log("Mail code formcntrl"+JSON.stringify(mailOtpValidator))
                if (mailOtpValidator.status == 200) {
                    _this.mailOtpValidate = true;
                    _this.mailOtpError = false;
                }
                else {
                    _this.mailOtpError = true;
                    _this.mailOtpValidate = false;
                }
            }, function (error) {
                _this.toastr.warning('Unable to Connect to Server');
            });
        }
    };
    TopprozVanlynkBeaproPasswordComponent.prototype.otpConfirm = function () {
        var _this = this;
        if (this.registrationFormGroup.value.mobileCode == "" || this.registrationFormGroup.value.mobileCode == null) {
            this.otpValidate = false;
            this.otpError = false;
            return false;
        }
        else {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/vanlynkOTPValidation/' + this.activatedRoute.snapshot.params['vanlynkId'] + '/' + this.registrationFormGroup.value.mobileCode, options)
                .subscribe(function (data) {
                var otpValidator = data.json();
                //console.log("mobile code formcntrl"+JSON.stringify(otpValidator))
                if (otpValidator.status == 200) {
                    _this.otpValidate = true;
                    _this.otpError = false;
                }
                else {
                    _this.otpError = true;
                    _this.otpValidate = false;
                }
            }, function (error) {
                _this.toastr.warning('Unable to Connect to Server');
            });
        }
    };
    TopprozVanlynkBeaproPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topproz-vanlynk-beapro-password',
            template: __webpack_require__(/*! ./topproz-vanlynk-beapro-password.component.html */ "./src/app/topProz/topproz-vanlynk-beapro-password/topproz-vanlynk-beapro-password.component.html"),
            styles: [__webpack_require__(/*! ./topproz-vanlynk-beapro-password.component.scss */ "./src/app/topProz/topproz-vanlynk-beapro-password/topproz-vanlynk-beapro-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], TopprozVanlynkBeaproPasswordComponent);
    return TopprozVanlynkBeaproPasswordComponent;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-vanlynk-beapro/topproz-vanlynk-beapro.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/topProz/topproz-vanlynk-beapro/topproz-vanlynk-beapro.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozblueheader></app-commontopprozblueheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n    <!-- <h5 class=\"row-title\"><i class=\"typcn typcn-folder themeprimary\"></i>Simple Tabs</h5> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <!-- CONTENT - STARTS HERE -->\r\n        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n          <!-- NEW PROZ REGISTRATION - STARTS HERE -->\r\n          <div class=\"login-container animated fadeInDown\">\r\n            <div class=\"loginbox bg-white\">\r\n              <div class=\"widget-body\">\r\n                <div id=\"registration-form\">\r\n                  <form role=\"form\" [formGroup]=\"registrationFormGroup\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"loginbox-title\">VANLYNK SIGN UP</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <hr class=\"hr-blue-title\">\r\n                      </div>\r\n                    </div>\r\n                    <!-- Company Details -->\r\n                    <div class=\"form-title\">\r\n                      Company Details\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"nameofbusiness\">Company Name <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"companyName\" id=\"nameofbusiness\"\r\n                              placeholder=\"Enter Name of the Business\" >\r\n                            <i class=\"fa fa-briefcase\"></i>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"mobileNumber\">Mobile Number <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input (onkeypress)=\"phoneno()\" maxlength=\"18\" type=\"text\" class=\"form-control\"\r\n                              formControlName=\"mobileNumber\" placeholder=\"Enter Mobile Number\"\r\n                              [dropSpecialCharacters]=\"false\" mask=\"000-000-0000\" required\r\n                              data-bv-notempty-message=\"Mobile Number is required\">\r\n                            <i class=\"fa fa-mobile-phone\"></i>\r\n                          </span>\r\n                          <span class=\"help-inline\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['mobileNumber'].touched\">\r\n                              <small *ngIf=\"registrationFormGroup.controls['mobileNumber'].hasError('required')\">\r\n                                Mobile Number should not be empty\r\n                              </small>\r\n                              <small\r\n                                *ngIf=\"registrationFormGroup.controls['mobileNumber'].hasError('invalidMobileNumber')\">\r\n                                <b style=\"color: red\">Please enter valid Mobile Number</b>\r\n                              </small>\r\n                            </small>\r\n                            <small *ngIf=\"mobileNumberValidation\">\r\n                              <small>Mobile Number already exists</small>\r\n                            </small>\r\n                          </span>\r\n                          <small *ngIf=\"error\">\r\n                            <b style=\"color:red\">Mobile Number Already Exist</b>\r\n                          </small>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"businessAddressLine1\">Address<span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Business Address\"\r\n                              formControlName=\"address\" required>\r\n                            <i class=\"fa fa-envelope\"></i>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"state\">State<span class=\"mandatory\">*</span></label>\r\n                          <select class=\"form-control\" id=\"state\" name=\"status\" data-bv-field=\"row-title\"\r\n                          formControlName=\"state\" required>\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let data of statesData\" value={{data.stateCode}}>\r\n                            {{data.stateName}}\r\n                          </option>\r\n                        </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"city\">City<span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"Enter City\"\r\n                              formControlName=\"city\"  required>\r\n                            <i class=\"fa fa-envelope\"></i>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"zipCode\">Zipcode<span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"zipCode\" placeholder=\"Enter Zipcode\"\r\n                              formControlName=\"zipCode\" [dropSpecialCharacters]=\"false\" mask=\"00000\" required >\r\n                            <i class=\"fa fa-map-marker\"></i>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <!-- /Company Details -->\r\n\r\n                    <!-- Contact Person Details -->\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                          <hr class=\"hr-blue\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-title\">\r\n                      Contact Person Details\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"firstname\">First Name <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" id=\"firstname\"\r\n                              placeholder=\"Enter First Name\">\r\n                            <i class=\"fa fa-user\"></i>\r\n                          </span>\r\n                          <span class=\"help-inline\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['firstname'].touched\">\r\n                              <small *ngIf=\"registrationFormGroup.controls['firstname'].hasError('required')\">\r\n                                Name should not be empty\r\n                              </small>\r\n                              <small *ngIf=\"registrationFormGroup.controls['firstname'].hasError('invalidText')\">\r\n                                <b style=\"color:red\">Please enter valid First Name without Numbers</b>\r\n                              </small>\r\n                            </small>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"lastname\">Last Name <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" formControlName=\"lastname\" id=\"lastname\"\r\n                              placeholder=\"Enter Last Name\">\r\n                            <i class=\"fa fa-user\"></i>\r\n                          </span>\r\n                          <span class=\"help-inline\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['lastname'].touched\">\r\n                              <small *ngIf=\"registrationFormGroup.controls['lastname'].hasError('required')\">\r\n                                Name should not be empty\r\n                              </small>\r\n                              <small *ngIf=\"registrationFormGroup.controls['lastname'].hasError('invalidText')\">\r\n                                <b style=\"color:red\">Please enter valid Last Name without Numbers</b>\r\n                              </small>\r\n                            </small>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"emailId\">E-Mail ID/Username <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"email\" class=\"form-control\" formControlName=\"emailId\"\r\n                              placeholder=\"Enter E-Mail ID\" (keyup)=\"mailIdVerification()\" required\r\n                              data-bv-notempty-message=\"Email is required\">\r\n                            <i class=\"fa fa-envelope-o\"></i>\r\n                          </span>\r\n                          <span class=\"help-inline\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['emailId'].touched\">\r\n                              <small *ngIf=\"registrationFormGroup.controls['emailId'].hasError('required')\">\r\n                                Email should not be empty\r\n                              </small>\r\n                              <small *ngIf=\"registrationFormGroup.controls['emailId'].hasError('invalidEmailAddress')\">\r\n                                <b style=\"color:red\">Please enter valid Email</b>\r\n                              </small>\r\n                            </small>\r\n                          </span>\r\n                          <small *ngIf=\"mailError\">\r\n                            <b style=\"color:red\">Email Id Already Registerd With {{roleCode}}</b>\r\n                          </small>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"contactNumber\">Mobile Number <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input (onkeypress)=\"phoneno()\" maxlength=\"18\" type=\"text\" class=\"form-control\"\r\n                              formControlName=\"contactNumber\" placeholder=\"Enter Mobile Number\"\r\n                              [dropSpecialCharacters]=\"false\" mask=\"000-000-0000\" required\r\n                              data-bv-notempty-message=\"Mobile Number is required\">\r\n                            <i class=\"fa fa-mobile-phone\"></i>\r\n                          </span>\r\n                          <span class=\"help-inline\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['contactNumber'].touched\">\r\n                              <small *ngIf=\"registrationFormGroup.controls['contactNumber'].hasError('required')\">\r\n                                Mobile Number should not be empty\r\n                              </small>\r\n                              <small\r\n                                *ngIf=\"registrationFormGroup.controls['contactNumber'].hasError('invalidMobileNumber')\">\r\n                                <b style=\"color: red\">Please enter valid Mobile Number</b>\r\n                              </small>\r\n                            </small>\r\n                            <small *ngIf=\"mobileNumberValidation\">\r\n                              <small>Mobile Number already exists</small>\r\n                            </small>\r\n                          </span>\r\n                          <small *ngIf=\"error\">\r\n                            <b style=\"color:red\">Mobile Number Already Exist</b>\r\n                          </small>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"checkbox\">\r\n                            <label>\r\n                              <input type=\"checkbox\" class=\"colored-success\">\r\n                              <span class=\"text\">Admin Info: Check if the same as the contact person</span>\r\n                            </label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <!-- /Contact Person Details-->\r\n\r\n                    <!-- Business Information -->\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                          <hr class=\"hr-blue\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-title\">\r\n                      Business Information\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"numberEmployees\">How many Employees? <span class=\"mandatory\">*</span></label>\r\n                          <select class=\"form-control\" id=\"numberEmployees\" name=\"status\" data-bv-field=\"row-title\"\r\n                            formControlName=\"noOfEmployees\" required>\r\n                            <option value=\"\">--Select No. of Employees--</option>\r\n                            <option value=\">10\">Less than 10</option>\r\n                            <option value=\"11-50\">11-50</option>\r\n                            <option value=\"51-200\">51-200</option>\r\n                            <option value=\"200-More\">200-More</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"inBusinessSince\">Year Established? <span class=\"mandatory\">*</span></label>\r\n                          <!-- <span class=\"input-icon icon-right\">\r\n                            <input type=\"date\" class=\"form-control\" id=\"dateEstablished\" placeholder=\"DD/MM/YYYY\"\r\n                              formControlName=\"dateEstablished\" (change)=\"tradeLicenseExpiration()\">\r\n                            <i class=\"fa fa-calendar\"></i>\r\n                          </span> --> \r\n                          <select class=\"form-control\" data-bv-field=\"row-title\" formControlName=\"establishedYear\"\r\n                          required>\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let data of yearsData\" value={{data.year}}>\r\n                            {{data.year}}\r\n                          </option>\r\n                        </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"companyProfileDesc\">Do you have a price book? <span\r\n                              class=\"mandatory\">*</span></label>\r\n                          <div class=\"control-group\">\r\n                            <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                              <div class=\"radio\">\r\n                                <label>\r\n                                  <input value=\"yes\" type=\"radio\" class=\"colored-success\"\r\n                                    formControlName=\"priceBook\" required>\r\n                                  <span class=\"text\"> Yes</span>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                              <div class=\"radio\">\r\n                                <label>\r\n                                  <input value=\"no\" type=\"radio\" class=\"colored-success\" formControlName=\"priceBook\"\r\n                                    required>\r\n                                  <span class=\"text\"> No</span>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"companyProfileDesc\">Do you have an inventory system?? <span\r\n                              class=\"mandatory\">*</span></label>\r\n                          <div class=\"control-group\">\r\n                            <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                              <div class=\"radio\">\r\n                                <label>\r\n                                  <input value=\"yes\" type=\"radio\" class=\"colored-success\"\r\n                                    formControlName=\"inventorySystem\">\r\n                                  <span class=\"text\"> Yes</span>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n                              <div class=\"radio\">\r\n                                <label>\r\n                                  <input value=\"no\" type=\"radio\" class=\"colored-success\" formControlName=\"inventorySystem\">\r\n                                  <span class=\"text\"> No</span>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"companyProfileDesc\">What type of software are you using now <span\r\n                              class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"textarea\" class=\"form-control\" id=\"typeOfSoftwares\"\r\n                              placeholder=\"Enter What type of software are you using now\"\r\n                              formControlName=\"typeOfSoftware\" required>\r\n                            <i class=\"fa fa-file\"></i>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"companyProfileDesc\">Number of Licenses Required?<span\r\n                              class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"numberOfLicenses\"\r\n                              placeholder=\"Enter Number of Licenses Required\" formControlName=\"licensesRequired\"\r\n                              required>\r\n                            <i class=\"fa fa-file\"></i>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"companyLogo\">Company Logo</label>\r\n                              <div class=\"controls\">\r\n                                <div data-provides=\"fileupload\" class=\"fileupload fileupload-new\">\r\n                                  <div style=\"width: 100px; height: 120px;\" class=\"fileupload-new thumbnail\">\r\n                                    <img [src]=\"imagePreview\" style=\"height:120px;width:100px;\">\r\n                                  </div>\r\n                                  <div style=\"max-width: 90px; max-height: 110px; line-height: 20px;\"\r\n                                    class=\"fileupload-preview fileupload-exists thumbnail\"></div>\r\n                                  <div>\r\n                                    <input #imageUpload type=\"file\" accept=\"image/*\" id=\"avatar\" (change)=\"select($event)\"\r\n                                      #fileInput>\r\n                                    <button type=\"button\" class=\"btn\" [disabled]=\"!img\"\r\n                                      (click)=\"imgfileUpload()\">Upload</button>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div *ngIf=\"progressShow\" class=\"progress-bar1 blue stripes\">\r\n                              <span [style.width.%]=\"percentage\">\r\n                                <p style=\"text-align: center;color:black;font-size:18px;\">{{percentage}}%</p>\r\n                              </span>\r\n                            </div>\r\n                            <br>\r\n                            <div *ngIf=\"progressHide\" class=\"alert alert-block alert-success\" style=\"height:3px;\">\r\n                              <h4 class=\"alert-heading\" style=\"margin-top:-5px;text-align:center;\">Image Uploaded\r\n                                Successfully</h4>\r\n                            </div>\r\n                          </div>\r\n                    </div>\r\n                    <!-- /Business Information -->\r\n\r\n                    <!-- Trade Licenses Information -->\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <hr class=\"hr-blue\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-title\">\r\n                      Trade License Details\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                          <form [formGroup]=\"addTradeLicenseList\">\r\n                            <ng-container formArrayName=\"tradeLicense\">\r\n                              <div id=\"field\"\r\n                                *ngFor=\"let item of addTradeLicenseList.get('tradeLicense').controls; let i = index;\"\r\n                                [formGroupName]=\"i\">\r\n                                <div id=\"field0\">\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-5\">\r\n                                      <div class=\"form-group\">\r\n                                        <label for=\"stateRegistred\">State Registered In?<span class=\"mandatory\">*</span></label>\r\n                                        <select class=\"form-control\" id=\"stateRegistred\" name=\"status\"\r\n                                          data-bv-field=\"row-title\" formControlName=\"stateRegisteredIn\" (change)=\"checkValidationTrade()\">\r\n                                          <option value=\"\">Select</option>\r\n                                          <option *ngFor=\"let data of statesData\" value={{data.stateName}}>\r\n                                            {{data.stateName}}\r\n                                          </option>\r\n                                        </select>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-5\">\r\n                                      <div class=\"form-group\">\r\n                                        <label for=\"tradeLicense1\">Trade License Category<span class=\"mandatory\">*</span></label>\r\n                                        <select class=\"form-control\" id=\"tradeLicense1\" name=\"status\"\r\n                                          data-bv-field=\"row-title\" formControlName=\"tradeLicense\" (change)=\"checkValidationTrade()\">\r\n                                          <option value=\"\">Select</option>\r\n                                          <option *ngFor=\"let data of categoriesData\" value={{data.cat_code}}>\r\n                                            {{data.categoryName}}\r\n                                          </option>\r\n                                        </select>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-2\">\r\n                                      <div class=\"form-group\">\r\n                                        <span class=\"input-icon icon-right\" style=\"margin-top:28px;\">\r\n                                          <a (click)=\"deleteFieldValue(i)\" class=\"btn btn-danger btn-sm shiny\">\r\n                                            <i class=\"fa fa-trash-o\"></i>\r\n                                          </a>\r\n                                        </span>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-sm-5\">\r\n                                      <div class=\"form-group\">\r\n                                        <label for=\"tradeLicense1N\">Trade License #<span class=\"mandatory\">*</span> </label>\r\n                                        <span class=\"input-icon icon-right\">\r\n                                          <input type=\"text\" class=\"form-control\" id=\"tradeLicense1N\"\r\n                                            placeholder=\"Enter Trade License #\" formControlName=\"tradeLicenseNumber\" (change)=\"checkValidationTrade()\">\r\n                                          <i class=\"fa fa-file\"></i>\r\n                                        </span>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-5\">\r\n                                      <div class=\"form-group\">\r\n                                        <label for=\"tradeLicense1Exp\">Trade License Expiration<span class=\"mandatory\">*</span></label>\r\n                                        <span class=\"input-icon icon-right\">\r\n                                          <input type=\"date\" class=\"form-control\" id=\"tradeLicense1Exp\"\r\n                                            placeholder=\"DD/MM/YYYY\" formControlName=\"tradeLicenseExpiration\" (change)=\"checkValidationTrade()\"\r\n                                            (change)=\"tradeLicenseExpiration()\">\r\n                                          <i class=\"fa fa-calendar\"></i>\r\n                                        </span>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"col-sm-2\">\r\n    \r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-12\">\r\n                                    <hr class=\"hr-blue\">\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </ng-container>\r\n                          </form>\r\n                        </div>\r\n                      </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3\">\r\n                          <input type=\"button\" [disabled]=\"tradeStatusCheck\" class=\"btn btn-azure shiny btn-block\" value=\"+ Add Another Trade License\"\r\n                            id=\"add-more\" (click)=\"addFieldValue()\">\r\n                        </div>\r\n                      </div>\r\n                    <!-- /Trade Licenses Information -->\r\n\r\n                    <!-- Billing Info -->\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                          <hr class=\"hr-blue\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-title\">\r\n                      Billing Info\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"companyProfileDesc\">Credit Card Type <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <select class=\"form-control\" id=\"creditCardType\" name=\"status\" data-bv-field=\"row-title\"\r\n                              formControlName=\"creditCardType\" >\r\n                              <option value=\"\">--Select Credit Card Type--</option>\r\n                              <option value=\"Master\">Master</option>\r\n                              <option value=\"Visa\">Visa</option>\r\n                              <option value=\"Amercian Express\">Amercian Express</option>\r\n                              <option value=\"Discover Network\">Discover Network</option>\r\n                            </select>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"companyProfileDesc\">Credit Card Number<span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"creditCardNumber\"\r\n                              placeholder=\"Enter Credit Card Number\" formControlName=\"creditCardNumber\"   [dropSpecialCharacters]=\"false\" mask=\"0000-0000-0000-0000\" required>\r\n                            <i class=\"fa fa-file\"></i>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"companyProfileDesc\">CVV Number <span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"ccvNumber\" placeholder=\"Enter CVV Number\"\r\n                              formControlName=\"ccvNumber\" [dropSpecialCharacters]=\"false\" mask=\"000\" required>\r\n                            <i class=\"fa fa-file\"></i>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"col-sm-12\">\r\n                            <label for=\"companyProfileDesc\">Expires On?<span class=\"mandatory\">*</span></label>\r\n                          </div>\r\n                          <div class=\"col-sm-6\">\r\n                            <select class=\"form-control\" id=\"selectMonth\" name=\"status\" data-bv-field=\"row-title\"\r\n                              formControlName=\"cardExpiry\" >\r\n                              <option value=\"\">--Select Month--</option>\r\n                              <option value=\"JAN\">JAN</option>\r\n                              <option value=\"FEB\">FEB</option>\r\n                              <option value=\"MAR\">MAR</option>\r\n                              <option value=\"APR\">APR</option>\r\n                              <option value=\"MAY\">MAY</option>\r\n                              <option value=\"JUN\">JUN</option>\r\n                              <option value=\"JUL\">JUL</option>\r\n                              <option value=\"AUG\">AUG</option>\r\n                              <option value=\"SEP\">SEP</option>\r\n                              <option value=\"OCT\">OCT</option>\r\n                              <option value=\"NOV\">NOV</option>\r\n                              <option value=\"DEC\">DEC</option>\r\n                            </select>\r\n                          </div>\r\n\r\n                          <div class=\"col-sm-6\">\r\n                            <select class=\"form-control\" id=\"selectYear\" name=\"status\" data-bv-field=\"row-title\"\r\n                              formControlName=\"cardExpiry\" required>\r\n                              <option value=\"\">--Select Year--</option>\r\n                              <option value=\"2030\">2030</option>\r\n                              <option value=\"2029\">2029</option>\r\n                              <option value=\"2028\">2028</option>\r\n                              <option value=\"2027\">2027</option>\r\n                              <option value=\"2026\">2026</option>\r\n                              <option value=\"2025\">2025</option>\r\n                              <option value=\"2024\">2024</option>\r\n                              <option value=\"2023\">2023</option>\r\n                              <option value=\"2022\">2022</option>\r\n                              <option value=\"2021\">2021</option>\r\n                              <option value=\"2020\">2020</option>\r\n                              <option value=\"2019\">2019</option>\r\n                            </select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"businessAddressLine1\">Address<span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Business Address\"\r\n                              formControlName=\"billingAddress\" >\r\n                            <i class=\"fa fa-envelope\"></i>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"state\">State<span class=\"mandatory\">*</span></label>\r\n                          <select class=\"form-control\" id=\"state\" name=\"status\" data-bv-field=\"row-title\"\r\n                            formControlName=\"billingState\" >\r\n                            <option value=\"\">Select</option>\r\n                            <option *ngFor=\"let data of statesData\" value={{data.stateCode}}>\r\n                              {{data.stateName}}\r\n                            </option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"city\">City<span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"Enter City\"\r\n                              formControlName=\"billingCity\" >\r\n                            <i class=\"fa fa-envelope\"></i>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"zipCode\">Zipcode<span class=\"mandatory\">*</span></label>\r\n                          <span class=\"input-icon icon-right\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"zipCode\" placeholder=\"Enter Zipcode\"\r\n                              formControlName=\"billingZipCode\" mask=\"00000\" >\r\n                            <i class=\"fa fa-map-marker\"></i>\r\n                          </span>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <!-- /Billing Info -->\r\n\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <hr class=\"hr-blue\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <label for=\"notes\">NOTE<span class=\"mandatory\">*</span>: A Code will be sent to your Email for\r\n                          Verification</label>\r\n                      </div>\r\n                    </div>\r\n                    <br /><br />\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Sign In\" (click)=\"signin()\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- NEW PROZ REGISTRATION - ENDS HERE -->\r\n        </div>\r\n        <!-- CONTENT - ENDS HERE -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-commonfooter></app-commonfooter>"

/***/ }),

/***/ "./src/app/topProz/topproz-vanlynk-beapro/topproz-vanlynk-beapro.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/topProz/topproz-vanlynk-beapro/topproz-vanlynk-beapro.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  position: relative;\n  margin: 3% auto;\n  max-width: 100%; }\n\n.login-container .loginbox {\n  position: relative;\n  width: 100% !important;\n  height: auto !important;\n  padding: 0 0 0px 0;\n  box-shadow: 0 0 14px rgba(0, 0, 0, 0.1); }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-facebook {\n  float: left;\n  border: 2px solid #3b5998;\n  color: #3b5998;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 40%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-twitter {\n  float: left;\n  border: 2px solid #29c1f6;\n  color: #29c1f6;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 35%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-google {\n  float: right;\n  border: 2px solid #ef4f1d;\n  color: #ef4f1d;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  background-color: #fff; }\n\n.loginbox-social {\n  padding: 0 0 0 0 !important; }\n\n.loginbox-title {\n  font-weight: bold !important;\n  font-size: 25px !important; }\n\nlabel {\n  font-weight: bold !important; }\n\nlabel .mandatory {\n  color: red;\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n.hr-blue-title {\n  border-top: 3px solid #5DB2FF !important; }\n\n.hr-blue {\n  border-top: 1px solid #5DB2FF !important; }\n\n.btn {\n  font-size: 14px !important;\n  font-weight: bold !important; }\n\n.form-title {\n  display: block;\n  padding: 8px 0;\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  color: #5DB2FF;\n  margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wUHJvei90b3Bwcm96LXZhbmx5bmstYmVhcHJvL0Q6XFxUb3Bwcm96XFxUb3BQcm96X0FkdmFuY2VfQ2xpZW50L3NyY1xcYXBwXFx0b3BQcm96XFx0b3Bwcm96LXZhbmx5bmstYmVhcHJvXFx0b3Bwcm96LXZhbmx5bmstYmVhcHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFHbEIsd0NBQW1DLEVBQ3RDOztBQUVEO0VBQ0ksWUFBVztFQUNYLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLFlBQVc7RUFDWCwwQkFBeUI7RUFDekIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWix1QkFBc0IsRUFDekI7O0FBR0E7RUFDRyw0QkFBMkIsRUFDOUI7O0FBR0Q7RUFDSSw2QkFBNEI7RUFDNUIsMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0ksNkJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksV0FBUztFQUNULDJCQUEwQjtFQUMxQiw2QkFBNEIsRUFDL0I7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSwyQkFBMEI7RUFDMUIsNkJBQTRCLEVBQy9COztBQUVEO0VBQ0ksZUFBYztFQUNkLGVBQWM7RUFDZCxrQ0FBaUM7RUFDakMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsZUFBYztFQUNkLG9CQUFtQixFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RvcFByb3ovdG9wcHJvei12YW5seW5rLWJlYXByby90b3Bwcm96LXZhbmx5bmstYmVhcHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDMlIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgMCAwcHggMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE0cHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE0cHggcmdiYSgwLDAsMCwuMSk7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC1zb2NpYWwgLnNvY2lhbC1idXR0b25zIC5idXR0b24tZmFjZWJvb2sge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2I1OTk4O1xyXG4gICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAubG9naW5ib3ggLmxvZ2luYm94LXNvY2lhbCAuc29jaWFsLWJ1dHRvbnMgLmJ1dHRvbi10d2l0dGVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzI5YzFmNjtcclxuICAgIGNvbG9yOiAjMjljMWY2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC1zb2NpYWwgLnNvY2lhbC1idXR0b25zIC5idXR0b24tZ29vZ2xlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZjRmMWQ7XHJcbiAgICBjb2xvcjogI2VmNGYxZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbiAubG9naW5ib3gtc29jaWFsIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG4ubG9naW5ib3gtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sYWJlbCAubWFuZGF0b3J5e1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHItYmx1ZS10aXRsZXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzVEQjJGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHItYmx1ZXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzVEQjJGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvcm0tdGl0bGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVEQjJGRjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM1REIyRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/topProz/topproz-vanlynk-beapro/topproz-vanlynk-beapro.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/topProz/topproz-vanlynk-beapro/topproz-vanlynk-beapro.component.ts ***!
  \************************************************************************************/
/*! exports provided: TopprozVanlynkBeaproComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopprozVanlynkBeaproComponent", function() { return TopprozVanlynkBeaproComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/customValidators */ "./src/utilities/customValidators.ts");
/* harmony import */ var _utilities_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utilities/input */ "./src/utilities/input.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");











var TopprozVanlynkBeaproComponent = /** @class */ (function () {
    function TopprozVanlynkBeaproComponent(beyond, router, activatedRoute, formBuilder, input, toastr, http, spinner) {
        this.beyond = beyond;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.input = input;
        this.toastr = toastr;
        this.http = http;
        this.spinner = spinner;
        this.error = false;
        this.mailError = false;
        this.disableSignIn = true;
        this.yelpExists = false;
        this.yelpNotVerified = false;
        this.role = "VANLYNK";
        this.imagePreview = "../../assets/img/no-image.png";
        this.tradeArray = [];
        this.percentage = 0;
        this.progressShow = false;
        this.progressHide = false;
        this.editProfile = false;
        this.img = false;
        this.statesData = [];
        this.tradeStatusCheck = false;
        this.registrationFormGroup = this.formBuilder.group({
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            // businessType: [''],
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].mobileNumValidator])),
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].textValidator])),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].textValidator])),
            emailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].emailValidator])),
            contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"].mobileNumValidator])),
            noOfEmployees: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            establishedYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            priceBook: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('no'),
            inventorySystem: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('no'),
            typeOfSoftware: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            licensesRequired: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            image: [''],
            tradeLicenseState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tradeLicenseCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tradeLicenseNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tradeLicenseExpiry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            creditCardType: [''],
            creditCardNumber: [''],
            ccvNumber: [''],
            cardExpiry: [''],
            billingAddress: [''],
            billingState: [''],
            billingCity: [''],
            billingZipCode: [''],
        });
        this.addTradeLicenseList = this.formBuilder.group({
            tradeLicense: this.formBuilder.array([this.createTradeLicense()])
        });
    }
    TopprozVanlynkBeaproComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.input.phoneno();
        this.getListOfStates();
        this.getYears();
        this.getListOfCategories();
        this.checkValidationTrade();
    };
    //TRADE LICENSE GENERATION
    TopprozVanlynkBeaproComponent.prototype.createTradeLicense = function () {
        return this.formBuilder.group({
            stateRegisteredIn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tradeLicense: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tradeLicenseNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            tradeLicenseExpiration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    TopprozVanlynkBeaproComponent.prototype.addFieldValue = function () {
        this.items = this.addTradeLicenseList.get('tradeLicense');
        this.items.push(this.createTradeLicense());
        this.checkValidationTrade();
    };
    Object.defineProperty(TopprozVanlynkBeaproComponent.prototype, "tradeLicenseValues", {
        get: function () {
            return this.addTradeLicenseList.get('tradeLicense');
        },
        enumerable: true,
        configurable: true
    });
    TopprozVanlynkBeaproComponent.prototype.deleteFieldValue = function (index) {
        this.tradeLicenseValues.removeAt(index);
        this.checkValidationTrade();
    };
    //TRADE LICENSE GENERATION
    //IMAGE UPLOAD
    TopprozVanlynkBeaproComponent.prototype.handleImage = function (file) {
        var _this = this;
        var picReader = new FileReader();
        picReader.onload = function (e) {
            var reader = e.target;
            _this.imagePreview = reader.result;
        };
        picReader.readAsDataURL(file);
    };
    TopprozVanlynkBeaproComponent.prototype.select = function (event) {
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            this.img = true;
            this.progressShow = false;
            this.progressHide = false;
            this.file2Upload = event.target.files[0];
            this.handleImage(file);
        }
        else {
            this.img = false;
            this.progressShow = false;
            this.progressHide = false;
            this.imagePreview = '../../assets/img/no-image.png';
        }
    };
    TopprozVanlynkBeaproComponent.prototype.imgfileUpload = function () {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/imageUpload';
        var formData = new FormData();
        var xhr = new XMLHttpRequest();
        formData.append('image', this.file2Upload);
        var config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        xhr.open('post', url, true);
        xhr.upload.onprogress = function (e) {
            if (e.lengthComputable) {
                _this.percentage = (e.loaded / e.total) * 100;
                _this.progressShow = true;
                _this.progressHide = false;
                if (_this.percentage === 100) {
                    _this.progressShow = false;
                    _this.progressHide = true;
                    _this.imageUploadVariable.nativeElement.value = "";
                    _this.img = false;
                }
            }
        };
        xhr.onerror = function (e) {
        };
        xhr.onload = function () {
            var a = JSON.parse(xhr.responseText);
            _global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].imagePath = a.imagePath;
        };
        xhr.send(formData);
    };
    //IMAGE UPLOAD
    TopprozVanlynkBeaproComponent.prototype.checkValidationTrade = function () {
        var _this = this;
        this.tradeStatusCheck = true;
        this.addTradeLicenseList.get('tradeLicense').value.forEach(function (e) {
            //console.log(e)
            if (e.stateRegisteredIn == "" || e.tradeLicense == "" || e.tradeLicenseExpiration == "" || e.tradeLicenseNumber == "") {
                //console.log('The empty')
                _this.tradeStatusCheck = true;
                return false;
            }
            if (e.stateRegisteredIn == null || e.tradeLicense == null || e.tradeLicenseExpiration == null || e.tradeLicenseNumber == null) {
                //console.log('The empty')
                _this.tradeStatusCheck = true;
                return false;
            }
            else if (e.stateRegisteredIn !== "" && e.tradeLicense !== "" && e.tradeLicenseExpiration !== "" && e.tradeLicenseNumber !== "") {
                //console.log('The not empty')
                _this.tradeStatusCheck = false;
                return false;
            }
        });
    };
    //CHECK TRADE VALIDATIONS
    //STATES
    TopprozVanlynkBeaproComponent.prototype.getListOfStates = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/getListOfStates', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.statesData = response.response;
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    //STATES  
    //YEARS
    TopprozVanlynkBeaproComponent.prototype.getYears = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/getYears', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.yearsData = response.response;
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    //YEARS
    //CATEGORIES
    TopprozVanlynkBeaproComponent.prototype.getListOfCategories = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/getListOfCategories', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.categoriesData = response.response;
            // this.categoriesData.forEach((e) => {
            //   e.checked = false;
            // })
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    //CATEGORIES
    TopprozVanlynkBeaproComponent.prototype.signin = function () {
        var _this = this;
        var val = Math.floor(1000 + Math.random() * 9000);
        this.randamvalue = "VANPRO" + "" + val;
        var vanlynkObj = {
            vanlynkId: this.randamvalue,
            companyName: this.registrationFormGroup.value.companyName,
            mobileNumber: this.registrationFormGroup.value.mobileNumber,
            address: this.registrationFormGroup.value.address,
            state: this.registrationFormGroup.value.state,
            city: this.registrationFormGroup.value.city,
            zipcode: this.registrationFormGroup.value.zipCode,
            firstName: this.registrationFormGroup.value.firstname,
            lastName: this.registrationFormGroup.value.lastname,
            emailId: this.registrationFormGroup.value.emailId,
            contactNumber: this.registrationFormGroup.value.contactNumber,
            noOfEmployees: this.registrationFormGroup.value.noOfEmployees,
            establishedYear: this.registrationFormGroup.value.establishedYear,
            priceBook: this.registrationFormGroup.value.priceBook,
            inventorySystem: this.registrationFormGroup.value.inventorySystem,
            typeOfSoftware: this.registrationFormGroup.value.typeOfSoftware,
            licensesRequired: this.registrationFormGroup.value.licensesRequired,
            image: this.registrationFormGroup.value.image,
            stateRegisteredIn: this.addTradeLicenseList.value.stateRegisteredIn,
            tradeLicense: this.addTradeLicenseList.value.tradeLicense,
            tradeLicenseNumber: this.addTradeLicenseList.value.tradeLicenseNumber,
            tradeLicenseExpiration: this.addTradeLicenseList.value.tradeLicenseExpiration
        };
        //console.log("vanlynkObj" + JSON.stringify(vanlynkObj))
        //console.log("vanlynkObj" + JSON.stringify(vanlynkObj.tradeLicense))
        this.tradeArray = vanlynkObj.tradeLicense;
        // this.id = vanlynkObj.vanlynkId
        // this.tradeArray.push(this.id)
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/vanlynkRegistration', vanlynkObj)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                localStorage.setItem('regValues', JSON.stringify(response));
                var billingObj = {
                    vanlynkId: _this.randamvalue,
                    creditCardType: _this.registrationFormGroup.value.creditCardType,
                    creditCardNumber: _this.registrationFormGroup.value.creditCardNumber,
                    ccvNumber: _this.registrationFormGroup.value.ccvNumber,
                    cardExpiry: _this.registrationFormGroup.value.cardExpiry,
                    billingAddress: _this.registrationFormGroup.value.billingAddress,
                    billingState: _this.registrationFormGroup.value.billingState,
                    billingCity: _this.registrationFormGroup.value.billingCity,
                    billingZipCode: _this.registrationFormGroup.value.billingZipCode,
                };
                _this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/vanlynkBillingDetails', billingObj)
                    .subscribe(function (data) {
                    var response = data.json();
                    if (response.status == 200) {
                        var tradeObj = {
                            tradeLicenseArray: _this.tradeArray,
                            vanlynkId: _this.randamvalue,
                        };
                        //console.log("tradeObj"+JSON.stringify(tradeObj))
                        _this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/addBatchTradeLicense', tradeObj)
                            .subscribe(function (data) {
                            var response = data.json();
                            if (response.status == 200) {
                                _this.router.navigate(['/topProz/vanlynkBeAProPassword', _this.randamvalue]);
                            }
                        });
                    }
                });
            }
        }, function (error) {
            _this.toastr.error('Failed to Connect Server');
        });
    };
    //TRADE LICENSE EXPIRATION
    TopprozVanlynkBeaproComponent.prototype.tradeLicenseExpiration = function () {
        //var date = this.serProzDetails.controls.tradeLicenseExpiration.value;
        //  var changeDate = new Date(date)
    };
    //TRADE LICENSE EXPIRATION
    TopprozVanlynkBeaproComponent.prototype.mailIdVerification = function () {
        var _this = this;
        if (this.registrationFormGroup.value.emailId == "") {
            this.toastr.warning("Email Id is Empty");
            this.mailError = false;
            this.disableSignIn = true;
            return false;
        }
        else {
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + '/mailIdVerification/' + this.registrationFormGroup.value.emailId)
                .subscribe(function (data) {
                var mailResponse = data.json();
                //console.log("mailResponse"+JSON.stringify(mailResponse))
                _this.roleCode = mailResponse.response[0].role;
                if (_this.roleCode == "PRO") {
                    _this.leadG = "Y";
                    _this.vanlynk = "Y";
                }
                else {
                    _this.leadG = "N";
                    _this.vanlynk = "Y";
                }
                localStorage.setItem("status", JSON.stringify({
                    'leadG': _this.leadG,
                    'vanlynk': _this.vanlynk
                }));
                //console.log("mailResponse"+JSON.stringify(this.roleCode))
                if (mailResponse.status == "TRUE") {
                    _this.mailError = true;
                    _this.disableSignIn = false;
                }
                else {
                    _this.mailError = false;
                    _this.disableSignIn = true;
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageUpload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TopprozVanlynkBeaproComponent.prototype, "imageUploadVariable", void 0);
    TopprozVanlynkBeaproComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"], _utilities_customValidators__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"], _utilities_input__WEBPACK_IMPORTED_MODULE_7__["Input"]],
            selector: 'app-topproz-vanlynk-beapro',
            template: __webpack_require__(/*! ./topproz-vanlynk-beapro.component.html */ "./src/app/topProz/topproz-vanlynk-beapro/topproz-vanlynk-beapro.component.html"),
            styles: [__webpack_require__(/*! ./topproz-vanlynk-beapro.component.scss */ "./src/app/topProz/topproz-vanlynk-beapro/topproz-vanlynk-beapro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _utilities_input__WEBPACK_IMPORTED_MODULE_7__["Input"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]])
    ], TopprozVanlynkBeaproComponent);
    return TopprozVanlynkBeaproComponent;
}());



/***/ }),

/***/ "./src/app/topProz/topproz-vanlynk/topproz-vanlynk.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/topProz/topproz-vanlynk/topproz-vanlynk.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.body{\r\n    background-color:white;\r\n}\r\n\r\nh1{\r\n    font-size:30px;\r\n    font-weight:bold !important;\r\n    color:#1E8449; \r\n    margin-left:20px;\r\n}\r\n\r\nh2{\r\n    font-size:25px;\r\n    font-weight:bold !important;\r\n    color:#3498DB;\r\n    margin-left:20px;\r\n}\r\n\r\nh3{\r\n    font-size:16px;\r\n    color:#DC7633;\r\n}\r\n\r\np{\r\n    font-size:14px;\r\n    color:black;\r\n   \r\n}\r\n\r\nli{\r\n    font-size:14px;\r\n    color:#17202A;\r\n    \r\n}\r\n\r\n.img{\r\nwidth:90px;\r\n}\r\n\r\nh6{\r\n    font-size:25px;\r\n}\r\n\r\n.green h5{\r\n    font-size: 30px;\r\n    font-weight: bold !important;\r\n    text-align: left;\r\n    color: green;\r\n    padding: 30px 0px;\r\n    margin: 10px 0px 0px 20px;\r\n    line-height: 30px;\r\n}\r\n\r\n.green h5 button{\r\n    margin-left: auto;    \r\n    margin-right: auto;\r\n    color: white;\r\n    border-radius: 20px;\r\n    border: 1px solid #ffffff;\r\n    font-weight: bold;\r\n    margin-bottom:15px;    \r\n}\r\n\r\n.grid-image{\r\n    \r\n    text-align: justify;\r\n}\r\n\r\n.grid-image .grid-left-image img{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 150px !important;\r\n    height: 300px !important;\r\n    float:bottom;\r\n}\r\n\r\n.grid-image .grid-mid-image h2{\r\nfont-size: 20px;\r\ncolor:  black;\r\nfont-weight: bold;\r\n\r\n}\r\n\r\n.grid-image .grid-mid-image p{\r\n    font-size: 15px;\r\ncolor:  black;\r\n\r\n}\r\n\r\n.grid-image .grid-mid-image img{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    float: left;\r\n    width: 150px !important;\r\n    height: 75px !important;\r\n}\r\n\r\n.grid-image .grid-right-image img{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 100% !important;\r\n    height: 300px !important;\r\n}\r\n\r\n/* .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {\r\n    position: relative;\r\n    min-height: 1px;\r\n    padding-right: 5% !important;\r\n    padding-left: 5% !important;\r\n} */\r\n\r\n\r\n\r\n\r\n\r\n\r\n    \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wUHJvei90b3Bwcm96LXZhbmx5bmsvdG9wcHJvei12YW5seW5rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksZUFBZTtJQUNmLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsWUFBWTs7Q0FFZjs7QUFFRDtJQUNJLGVBQWU7SUFDZixjQUFjOztDQUVqQjs7QUFHRDtBQUNBLFdBQVc7Q0FDVjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixtQkFBbUI7Q0FDdEI7O0FBS0Q7O0lBRUksb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGFBQWE7Q0FDaEI7O0FBRUQ7QUFDQSxnQkFBZ0I7QUFDaEIsY0FBYztBQUNkLGtCQUFrQjs7Q0FFakI7O0FBRUQ7SUFDSSxnQkFBZ0I7QUFDcEIsY0FBYzs7Q0FFYjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7Q0FDNUI7O0FBR0Q7Ozs7O0lBS0kiLCJmaWxlIjoic3JjL2FwcC90b3BQcm96L3RvcHByb3otdmFubHluay90b3Bwcm96LXZhbmx5bmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojMUU4NDQ5OyBcclxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbn1cclxuaDJ7XHJcbiAgICBmb250LXNpemU6MjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiMzNDk4REI7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG59XHJcbmgze1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBjb2xvcjojREM3NjMzO1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgXHJcbn1cclxuXHJcbmxpe1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBjb2xvcjojMTcyMDJBO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uaW1ne1xyXG53aWR0aDo5MHB4O1xyXG59XHJcblxyXG5oNntcclxuICAgIGZvbnQtc2l6ZToyNXB4O1xyXG59XHJcblxyXG4uZ3JlZW4gaDV7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZ3JlZW4gaDUgYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87ICAgIFxyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDsgICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5ncmlkLWltYWdle1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uZ3JpZC1pbWFnZSAuZ3JpZC1sZWZ0LWltYWdlIGltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdDpib3R0b207XHJcbn1cclxuXHJcbi5ncmlkLWltYWdlIC5ncmlkLW1pZC1pbWFnZSBoMntcclxuZm9udC1zaXplOiAyMHB4O1xyXG5jb2xvcjogIGJsYWNrO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuXHJcbn1cclxuXHJcbi5ncmlkLWltYWdlIC5ncmlkLW1pZC1pbWFnZSBwe1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG5jb2xvcjogIGJsYWNrO1xyXG5cclxufVxyXG5cclxuLmdyaWQtaW1hZ2UgLmdyaWQtbWlkLWltYWdlIGltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNzVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JpZC1pbWFnZSAuZ3JpZC1yaWdodC1pbWFnZSBpbWd7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKiAuY29sLWxnLTEsIC5jb2wtbGctMTAsIC5jb2wtbGctMTEsIC5jb2wtbGctMTIsIC5jb2wtbGctMiwgLmNvbC1sZy0zLCAuY29sLWxnLTQsIC5jb2wtbGctNSwgLmNvbC1sZy02LCAuY29sLWxnLTcsIC5jb2wtbGctOCwgLmNvbC1sZy05LCAuY29sLW1kLTEsIC5jb2wtbWQtMTAsIC5jb2wtbWQtMTEsIC5jb2wtbWQtMTIsIC5jb2wtbWQtMiwgLmNvbC1tZC0zLCAuY29sLW1kLTQsIC5jb2wtbWQtNSwgLmNvbC1tZC02LCAuY29sLW1kLTcsIC5jb2wtbWQtOCwgLmNvbC1tZC05LCAuY29sLXNtLTEsIC5jb2wtc20tMTAsIC5jb2wtc20tMTEsIC5jb2wtc20tMTIsIC5jb2wtc20tMiwgLmNvbC1zbS0zLCAuY29sLXNtLTQsIC5jb2wtc20tNSwgLmNvbC1zbS02LCAuY29sLXNtLTcsIC5jb2wtc20tOCwgLmNvbC1zbS05LCAuY29sLXhzLTEsIC5jb2wteHMtMTAsIC5jb2wteHMtMTEsIC5jb2wteHMtMTIsIC5jb2wteHMtMiwgLmNvbC14cy0zLCAuY29sLXhzLTQsIC5jb2wteHMtNSwgLmNvbC14cy02LCAuY29sLXhzLTcsIC5jb2wteHMtOCwgLmNvbC14cy05IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/topProz/topproz-vanlynk/topproz-vanlynk.component.html":
/*!************************************************************************!*\
  !*** ./src/app/topProz/topproz-vanlynk/topproz-vanlynk.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozheader></app-commontopprozheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <h1>\r\n          VanLynk for Field Service</h1>\r\n        <h2> Cloud based, no software to install, tech Friendly mobile apps, helps you manage people, projects,\r\n          inventory from anywhere.</h2>\r\n        <!--row 1-->\r\n        <div class=\"col-lg-6 col-sm-6 col-xs-12\">\r\n          <!--row 1 image-->\r\n          <div class=\"col-lg-2 col-sm-2 col-xs-12 img\">\r\n            <img src=\"assets/img/topproz-home/client_75x75_Glow.png\" class=\"img-responsive\" alt=\"Image\">\r\n          </div>\r\n          <!--/row 1 image-->\r\n          <div class=\"col-lg-10 col-sm-10 col-xs-12\">\r\n            <h3>\r\n              Project Leads\r\n            </h3>\r\n            <p>Verified client detail; best job match to your service category and specified area.</p>\r\n            <ul>\r\n              <li>Manage lead sources</li>\r\n              <li>Add and share lead details and notice between sales and service team</li>\r\n              <li>Status tracking </li>\r\n              <li>Alerts you if Customer already exist </li>\r\n              <li>Alert Customers via text when the tech is dispatched </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-lg-2 col-sm-2 col-xs-12\">\r\n            <img src=\"assets/img/topproz-home/timecards_75x75_Glow.png\" class=\"img-responsive\" alt=\"Image\">\r\n          </div>\r\n          <div class=\"col-lg-10 col-sm-10 col-xs-12\">\r\n            <h3>Schedule/Dispatch</h3>\r\n            <p>Simplify your operation, Book available technicians and where they are at. Keep track of all jobs na\r\n              dnever lose track<p>\r\n                <ul>\r\n                  <li>Visibility over your team availability</li>\r\n                  <li>Tag schedule by Job, estimate, recall</li>\r\n                  <li>Schedule field techs</li>\r\n                  <li>Text clients when you are on the way</li>\r\n                  <li>See which techs has company equipment</li>\r\n                  <li>Exclude techs from client/jobs</li>\r\n                  <li>Routing Maps</li>\r\n                  <li>Bird's eye view or service address</li>\r\n                  <li>Daily, weekly and monthly sales for the team or per tech</li>\r\n                  <li>Reassign work orders</li>\r\n                  <li>Automatic text message notification with job details or changes</li>\r\n                  <li>Automatic notification with ETA to Customers based on Realtime traffic</li>\r\n                </ul>\r\n          </div>\r\n          <div class=\"col-lg-2 col-sm-2 col-xs-12\">\r\n            <img src=\"assets/img/topproz-home/warehouse-inventory.png\" class=\"img-responsive\" alt=\"Image\" style=\"width:75px; height: 75px;\">\r\n          </div>\r\n          <div class=\"col-lg-10 col-sm-10 col-xs-12\">\r\n            <h3>\r\n              InVANtory\r\n            </h3>\r\n            <p>Track material, equipment and check out major tools in each of your service vans.\r\n              Supply house purchases for each job.\r\n            </p>\r\n            <ul>\r\n              <li>Keep track and schedule major equipment </li>\r\n              <li>Track pars purchased at the supply house and find out where it is used</li>\r\n              <li> Optimize spoilage and waste</li>\r\n              <li>Compare material used at a job with estimated</li>\r\n              <li>Exclude techs from client/jobs </li>\r\n              <li>Issue POs order #s generated from APP for specific jobs</li>\r\n              <li>Voice enabled material list</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-lg-2 col-sm-2 col-xs-12\">\r\n            <img src=\"assets/img/topproz-home/Vendor_75x75_Glow.png\" class=\"img-responsive\" alt=\"Image\">\r\n          </div>\r\n          <div class=\"col-lg-10 col-sm-10 col-xs-12\">\r\n            <h3>Staff</h3>\r\n            <p>Manage staff permissions, commissions, inventory, work log.<p>\r\n                <ul>\r\n                  <li> Calculate commissions as jobs get don in the field</li>\r\n                  <li>Factor in operating cost, mark ups, split commissions</li>\r\n                  <li> Average Sales ticket per staff </li>\r\n\r\n                  <li>Timesheets tracking billable vs. non-billable hours</li>\r\n                </ul>\r\n          </div>\r\n          <div class=\"col-lg-2 col-sm-2 col-xs-12\">\r\n            <img src=\"assets/img/topproz-home/Reports_75x75_Glow.png\" class=\"img-responsive\" alt=\"Image\">\r\n          </div>\r\n          <div class=\"col-lg-10 col-sm-10 col-xs-12\">\r\n            <h3>Analysis Reports</h3>\r\n            <p>Built-in reports, invoice, aging, estimate conversion,employee sales and performance, inventory,\r\n              etc.. </p>\r\n            <ul>\r\n              <li>Revenue report by staff, by company sort by day, weeek, moth custom period</li>\r\n              <li>Employee report, average sales ticket, profit per job, closing ratio, per staff</li>\r\n              <li>Ads and marketing campaign analysis </li>\r\n              <li>Customize job sources</li>\r\n\r\n              <li>Search receivables for unpaid account</li>\r\n              <li>Payment types</li>\r\n              <li> Send auto reports</li>\r\n              <li>Revenue comparision</li>\r\n              <li> Aging reports</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <!--/row 1-->\r\n        <!--col 1-->\r\n        <div class=\"col-lg-6 col-sm-6 col-xs-12\">\r\n          <div class=\"col-lg-2 col-sm-2 col-xs-12\">\r\n            <img src=\"assets/img/topproz-home/employees_75x75_Glow.png\" class=\"img-responsive\" alt=\"Image\">\r\n          </div>\r\n          <div class=\"col-lg-10 col-sm-10 col-xs-12\">\r\n            <h3>Customer management </h3>\r\n            <p>Track important information about your customers. It lets you know who was at the service address last,\r\n              what were the recommendations, what was the warranty, all of your customers history is available, in real\r\n              time, right in your technicians hands.</p>\r\n            <ul>\r\n              <li>Customer History</li>\r\n              <li>Email Client and see past emails</li>\r\n              <li>Search Clients </li>\r\n              <li>Add Notes</li>\r\n              <li> Billing and Work History</li>\r\n              <li>Flag Bad Clients</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-lg-2 col-sm-2 col-xs-12\">\r\n            <img src=\"assets/img/topproz-home/invoice_review_75x75_Glow.png\" class=\"img-responsive\" alt=\"Image\">\r\n          </div>\r\n          <div class=\"col-lg-10 col-sm-10 col-xs-12\">\r\n            <h3>\r\n              Invoices/Get Paid\r\n            </h3>\r\n            <p>Paperless invoicing from the field easy as 1-2-3. Collect payments, track open invoices.</p>\r\n            <ul>\r\n\r\n              <li>Choose material and jobs from preloaded pricebook</li>\r\n              <li>Custom pricing for custom jobs </li>\r\n              <li>Dead stops forcing field techs to collect required documents and sign off prior to leaving job</li>\r\n              <li>Choose from pre installed template </li>\r\n              <li> Customizable service agreements</li>\r\n              <li>Split invoicing </li>\r\n              <li>Late payment alerts </li>\r\n              <li> Collect payments</li>\r\n              <li> Search invoices</li>\r\n              <li> Inspection sheets</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-lg-2 col-sm-2 col-xs-12\">\r\n            <img src=\"assets/img/topproz-home/Estimate_75x75_Glow.png\" class=\"img-responsive\" alt=\"Image\">\r\n          </div>\r\n          <div class=\"col-lg-10 col-sm-10 col-xs-12\">\r\n            <h3>Estimates</h3>\r\n            <p>Tech friendly, easily to generate and modify. quickly bid on work, track and follow up reminders.</p>\r\n            <ul>\r\n              <li>Manage active estimates, know who created it, who ends up selling it.</li>\r\n              <li>Monitor a sales performance by employee, technician or salesperson.</li>\r\n              <li>When a quote or estimate becomes job, a single click converts it in our field service management\r\n                system\r\n                to save you time and avoid double entries. All your original estimates are saved so you never lose\r\n                track\r\n                of what was originally written up!</li>\r\n            </ul>\r\n          </div>\r\n            <div class=\"col-lg-2 col-sm-2 col-xs-12\">\r\n              <img src=\"assets/img/topproz-home/expense_codes_75x75_Glow.png\" class=\"img-responsive\" alt=\"Image\">\r\n            </div>\r\n            <div class=\"col-lg-10 col-sm-10 col-xs-12\">\r\n              <h3>Pricebook</h3>\r\n              <p>Create your own custom price book. Enter material cost, labor rates in an instant. Add pictures,\r\n                notice\r\n                and procedures.</p>\r\n              <ul>\r\n                <li>Customize pricing for all your services, material</li>\r\n                <li>Edit pricing on invoices without changing the pricebook</li>\r\n                <li>Leave specific notes for each task to remind techs to upsell work</li>\r\n\r\n              </ul>\r\n            </div>\r\n            <div class=\"col-lg-2 col-sm-2 col-xs-12\">\r\n              <img src=\"assets/img/topproz-home/client_75x75_Glow.png\" class=\"img-responsive\" alt=\"Image\">\r\n            </div>\r\n            <div class=\"col-lg-10 col-sm-10 col-xs-12\">\r\n              <h3>Manage Your Setttings</h3>\r\n              <p>Track important information about your customers. It lets you know who was at the service address\r\n                last,\r\n                what were the recommendations, what was the warranty, all of your customers history is available, in\r\n                real\r\n                time, right in your technicians hands.</p>\r\n              <ul>\r\n                <li>Add,modify or delete Staff</li>\r\n                <li>Update your profile, pictures, services, emails</li>\r\n                <li>Customize source list</li>\r\n                <li>Customize Emails, Text, estimate, Invoice, reports templates</li>\r\n                <li>Manage service categories and service areas</li>\r\n                <li>Customizable and add new service agreement</li>\r\n\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        \r\n        <!--/col 1-->\r\n        <div class=\"row grid-image\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"col-lg-2 col-sm-2 col-xs-12 grid-left-image\">\r\n              <img src=\"assets/img/topproz-home/plumber2.png\" class=\"img-responsive\" alt=\"Image\">\r\n            </div>\r\n            <div class=\"col-lg-4 col-sm-4 col-xs-12 grid-mid-image\">\r\n              <h6>Run your Business from anywhere</h6>\r\n              <p>\r\n                With smart mobile apps for iOS and Android core which allows you to manage your business on the go.\r\n                Track time and expenses, attach receipts send invoices and bills, and run reports-right from your\r\n                favourite device\r\n              </p>\r\n              <img src=\"assets/img/topproz-home/download_app_appstore1.png\" class=\"img-responsive\" alt=\"Download App From App Store\" />\r\n              <img src=\"assets/img/topproz-home/download_app_googleplay1.png\" class=\"img-responsive\" alt=\"Download App From Google Play\" />\r\n           \r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-3 col-xs-12 grid-right-image\">\r\n              <img src=\"assets/img/topproz-home/charts1.png\" class=\"img-responsive\" alt=\"Charts\">\r\n            </div>\r\n            <div class=\"col-lg-3 col-sm-3 col-xs-12 green\">\r\n                <h5><button type=\"button\" class=\"btn btn-success shiny\" (click)=\"DaysTrail()\">30 days Free Trial</button>\r\n              Receive leads and control your business using one app</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- /Row6 -->"

/***/ }),

/***/ "./src/app/topProz/topproz-vanlynk/topproz-vanlynk.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/topProz/topproz-vanlynk/topproz-vanlynk.component.ts ***!
  \**********************************************************************/
/*! exports provided: TopprozVanlynkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopprozVanlynkComponent", function() { return TopprozVanlynkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TopprozVanlynkComponent = /** @class */ (function () {
    function TopprozVanlynkComponent(beyond, router, activatedRoute) {
        this.beyond = beyond;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    TopprozVanlynkComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
    };
    TopprozVanlynkComponent.prototype.DaysTrail = function () {
        this.router.navigate(['/topProz/vanlynkBeAPro']);
    };
    TopprozVanlynkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-topproz-vanlynk',
            template: __webpack_require__(/*! ./topproz-vanlynk.component.html */ "./src/app/topProz/topproz-vanlynk/topproz-vanlynk.component.html"),
            styles: [__webpack_require__(/*! ./topproz-vanlynk.component.css */ "./src/app/topProz/topproz-vanlynk/topproz-vanlynk.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TopprozVanlynkComponent);
    return TopprozVanlynkComponent;
}());



/***/ }),

/***/ "./src/utilities/customValidators.ts":
/*!*******************************************!*\
  !*** ./src/utilities/customValidators.ts ***!
  \*******************************************/
/*! exports provided: CustomValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
var CustomValidators = /** @class */ (function () {
    function CustomValidators() {
    }
    CustomValidators.hasError = function (errorCode, path) {
        var error = {
            'invalidMobileNumber': 'InvalidMobile Number',
            'invalidEmailAddress': 'invalidEmailAddress',
            'invalidAadhar': 'invalidAadhar',
            'invalidPan': 'invalidPan',
            'invalidIfscCode': 'invalidIfscCode',
            'invalidText': 'invalidText',
            'invalidField': 'InvalidMobile Field',
            'invalidHeight': 'InvalidHeight',
            'invalidWeight': 'InvalidWeight',
            'invalidZipCode': 'InvalidZipCode',
        };
    };
    CustomValidators.emailValidator = function (control) {
        if (control.value.match(/^[A-Za-z0-9._%+-]{2,}@[a-zA-Z0-9]{1,}([.]{1}[a-zA-Z0-9]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/)) {
            return null;
        }
        if (control.value === "") {
            return { 'invalidEmailAddress': false };
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    CustomValidators.mobileNumValidator = function (control) {
        if (control.value.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)) {
            return null;
        }
        if (control.value === "") {
            return { 'invalidMobileNumber': false };
        }
        else {
            return { 'invalidMobileNumber': true };
        }
    };
    CustomValidators.aadharValidator = function (control) {
        if (control.value.match(/[0-9]{12}/)) {
            return null;
        }
        else if (control.value === "") {
            return { 'invalidAadhar': false };
        }
        else {
            console.log('The else');
            return { 'invalidAadhar': true };
        }
    };
    CustomValidators.panValidator = function (control) {
        if (control.value.match(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/)) {
            return null;
        }
        else if (control.value === "") {
            return { 'invalidPan': false };
        }
        else {
            return { 'invalidPan': true };
        }
    };
    CustomValidators.ifscCodeValidator = function (control) {
        if (control.value.match(/^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/)) {
            return null;
        }
        else if (control.value === "") {
            return { 'invalidIfscCode': false };
        }
        else {
            return { 'invalidIfscCode': true };
        }
    };
    CustomValidators.textValidator = function (control) {
        if (control.value.match(/^[a-zA-Z ]*$/)) {
            return null;
        }
        else if (control.value === "") {
            return { 'invalidText': false };
        }
        else {
            return { 'invalidText': true };
        }
    };
    CustomValidators.heightValidator = function (control) {
        if (control.value.match(/^([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|250)$/)) {
            return null;
        }
        else if (control.value === "") {
            return { 'invalidHeight': false };
        }
        else {
            return { 'invalidHeight': true };
        }
    };
    CustomValidators.weightValidator = function (control) {
        if (control.value.match(/^([0-9]|[1-8][0-9]|9[0-9]|[1-4][0-9]{2}|500)$/)) {
            return null;
        }
        else if (control.value === "") {
            return { 'InvalidWeight': false };
        }
        else {
            console.log('The else');
            return { 'InvalidWeight': true };
        }
    };
    CustomValidators.zipCodeValidator = function (control) {
        if (control.value.match(/^\d{5}$/)) {
            return null;
        }
        else if (control.value === "") {
            return { 'InvalidZipCode': false };
        }
        else {
            console.log('The else');
            return { 'InvalidZipCode': true };
        }
    };
    return CustomValidators;
}());



/***/ }),

/***/ "./src/utilities/input.ts":
/*!********************************!*\
  !*** ./src/utilities/input.ts ***!
  \********************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
var Input = /** @class */ (function () {
    function Input() {
    }
    Input.prototype.phoneno = function () {
        $(document).ready(function () {
            $('[id^=edit]').keypress(validateNumber);
        });
        function validateNumber(event) {
            var key = window.event ? event.keyCode : event.which;
            if (event.keyCode === 8 || event.keyCode === 46) {
                return true;
            }
            else if (key < 48 || key > 57) {
                return false;
            }
            else {
                return true;
            }
        }
        ;
    };
    Input.prototype.changeRadio = function () {
        $(document).ready(function () {
            //Yes/No Radio Button in Slimming 
            function checkradiobox() {
                var radio = $("input[name='exampleRadio']:checked").val();
                $('#field1').hide();
                if (radio == "Yes") {
                    $('#field1').show();
                    // $("#field1").focus();
                }
            }
            function checkradiobox2() {
                var radio = $("input[name='exampleRadio']:checked").val();
                //$('#field1').show();
                if (radio == "No") {
                    $('#field1').hide();
                    // $("#field1").focus();
                }
            }
            $("#button1").change(function () {
                checkradiobox();
            });
            $("#button2").change(function () {
                checkradiobox2();
            });
            checkradiobox();
        });
        //Yes/No Radio Button in Slimming 
        //Allergic Product Radio Button
        $(document).ready(function () {
            function checkallergicradiobox() {
                var radio = $("input[name='allergicRadio']:checked").val();
                $('#allergicField').hide();
                if (radio == "Yes") {
                    $('#allergicField').show();
                    // $("#field1").focus();
                }
            }
            function checknotallergicradiobox() {
                var radio = $("input[name='allergicRadio']:checked").val();
                //$('#field1').show();
                if (radio == "No") {
                    $('#allergicField').hide();
                    // $("#field1").focus();
                }
            }
            $("#ifAllergic").change(function () {
                checkallergicradiobox();
            });
            $("#notAllergic").change(function () {
                checknotallergicradiobox();
            });
            checkallergicradiobox();
        });
        //Allergic Product Radio Button
        //Diet Radio Button
        $(document).ready(function () {
            function checkDietRadiobox() {
                var radio = $("input[name='dietRadio']:checked").val();
                $('#dietField').hide();
                if (radio == "Yes") {
                    $('#dietField').show();
                    // $("#field1").focus();
                }
            }
            function checkNoDietRadiobox() {
                var radio = $("input[name='dietRadio']:checked").val();
                //$('#field1').show();
                if (radio == "No") {
                    $('#dietField').hide();
                    // $("#field1").focus();
                }
            }
            $("#ifDiet").change(function () {
                checkDietRadiobox();
            });
            $("#noDiet").change(function () {
                checkNoDietRadiobox();
            });
            checkDietRadiobox();
        });
        //Diet Radio Button
    };
    Input.prototype.changeCheckbox = function () {
        //SourceAnyOther Checkbox
        $(document).ready(function () {
            function checkBoxAnyOther() {
                var checkBox = $("input[name='AnyOther']:checked").val();
                $('#fieldAnyOther').hide();
                if (checkBox == "AnyOther") {
                    console.log('clicked');
                    $('#fieldAnyOther').show();
                }
            }
            $("#anyOtherCheckbox").change(function () {
                checkBoxAnyOther();
            });
            checkBoxAnyOther();
        });
        //SourceAnyOther Checkbox
        //Preferable Checkbox
        $(document).ready(function () {
            function checkBoxPreferable() {
                var checkBox = $("input[name='examplePreferable']:checked").val();
                $('#fieldPreferable').hide();
                if (checkBox == "Other's please specify") {
                    console.log('clicked');
                    $('#fieldPreferable').show();
                }
            }
            $("#preferableCheckbox").change(function () {
                checkBoxPreferable();
            });
            checkBoxPreferable();
        });
        //Preferable Checkbox
        //Diesease Checkbox
        $(document).ready(function () {
            function checkBoxDisease() {
                var checkBox = $("input[name='exampleDisease']:checked").val();
                $('#fieldDisease').hide();
                if (checkBox == "Other's please specify") {
                    $('#fieldDisease').show();
                }
            }
            $("#diseaseCheckbox").change(function () {
                checkBoxDisease();
            });
            checkBoxDisease();
        });
        //Diesease Checkbox
        //LocalHealthClub Checkbox
        $(document).ready(function () {
            function checkBoxHealthClub() {
                var checkBox = $("input[name='exampleHealthclub']:checked").val();
                $('#fieldHealthClub').hide();
                if (checkBox == "Local health Club") {
                    console.log('clicked');
                    $('#fieldHealthClub').show();
                }
            }
            $("#healthClubCheckbox").change(function () {
                checkBoxHealthClub();
            });
            checkBoxHealthClub();
        });
        //LocalHealthClub Checkbox
        //WeightLossCenter Checkbox
        $(document).ready(function () {
            function checkBoxWeightLoss() {
                var checkBox = $("input[name='exampleWeightLoss']:checked").val();
                $('#fieldWeightLoss').hide();
                if (checkBox == "Name of the weight loss center you have attended?") {
                    $('#fieldWeightLoss').show();
                }
            }
            $("#weightLossCheckbox").change(function () {
                checkBoxWeightLoss();
            });
            checkBoxWeightLoss();
        });
        //WeightLossCenter Checkbox
    };
    return Input;
}());



/***/ })

}]);
//# sourceMappingURL=topProz-top-proz-module.js.map