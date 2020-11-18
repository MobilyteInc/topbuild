(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proz-customer-proz-customer-module"],{

/***/ "./src/app/proz-customer/proz-customer-layout/proz-customer-layout.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/proz-customer/proz-customer-layout/proz-customer-layout.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/proz-customer/proz-customer-layout/proz-customer-layout.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/proz-customer/proz-customer-layout/proz-customer-layout.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3otY3VzdG9tZXIvcHJvei1jdXN0b21lci1sYXlvdXQvcHJvei1jdXN0b21lci1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/proz-customer/proz-customer-layout/proz-customer-layout.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/proz-customer/proz-customer-layout/proz-customer-layout.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProzCustomerLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzCustomerLayoutComponent", function() { return ProzCustomerLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProzCustomerLayoutComponent = /** @class */ (function () {
    function ProzCustomerLayoutComponent() {
    }
    ProzCustomerLayoutComponent.prototype.ngOnInit = function () {
    };
    ProzCustomerLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proz-customer-layout',
            template: __webpack_require__(/*! ./proz-customer-layout.component.html */ "./src/app/proz-customer/proz-customer-layout/proz-customer-layout.component.html"),
            styles: [__webpack_require__(/*! ./proz-customer-layout.component.scss */ "./src/app/proz-customer/proz-customer-layout/proz-customer-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProzCustomerLayoutComponent);
    return ProzCustomerLayoutComponent;
}());



/***/ }),

/***/ "./src/app/proz-customer/proz-customer-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/proz-customer/proz-customer-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ProzCustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzCustomerRoutingModule", function() { return ProzCustomerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _van_customers_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./van-customers/add-customer/add-customer.component */ "./src/app/proz-customer/van-customers/add-customer/add-customer.component.ts");
/* harmony import */ var _van_customers_list_customer_list_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./van-customers/list-customer/list-customer.component */ "./src/app/proz-customer/van-customers/list-customer/list-customer.component.ts");
/* harmony import */ var _van_customers_edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./van-customers/edit-customer/edit-customer.component */ "./src/app/proz-customer/van-customers/edit-customer/edit-customer.component.ts");
/* harmony import */ var _van_customers_view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./van-customers/view-customer/view-customer.component */ "./src/app/proz-customer/van-customers/view-customer/view-customer.component.ts");
/* harmony import */ var _van_customers_reset_customer_password_reset_customer_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./van-customers/reset-customer-password/reset-customer-password.component */ "./src/app/proz-customer/van-customers/reset-customer-password/reset-customer-password.component.ts");
/* harmony import */ var _proz_customer_layout_proz_customer_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proz-customer-layout/proz-customer-layout.component */ "./src/app/proz-customer/proz-customer-layout/proz-customer-layout.component.ts");









//import { ProzCustomerLayoutComponent } from './proz-customer-layout/proz-customer-layout.component';
var routes = [{
        path: '', component: _proz_customer_layout_proz_customer_layout_component__WEBPACK_IMPORTED_MODULE_8__["ProzCustomerLayoutComponent"],
        children: [
            {
                path: 'addVanCustomer',
                component: _van_customers_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_3__["AddCustomerComponent"]
            },
            {
                path: 'resetPassword',
                component: _van_customers_reset_customer_password_reset_customer_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetCustomerPasswordComponent"]
            },
            {
                path: 'listVanCustomers',
                component: _van_customers_list_customer_list_customer_component__WEBPACK_IMPORTED_MODULE_4__["ListCustomerComponent"]
            },
            {
                path: 'viewVanCustomer/:customerId',
                component: _van_customers_view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_6__["ViewCustomerComponent"]
            },
            {
                path: 'editVanCustomer/:customerId',
                component: _van_customers_edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_5__["EditCustomerComponent"]
            },
        ]
    }
];
var ProzCustomerRoutingModule = /** @class */ (function () {
    function ProzCustomerRoutingModule() {
    }
    ProzCustomerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProzCustomerRoutingModule);
    return ProzCustomerRoutingModule;
}());



/***/ }),

/***/ "./src/app/proz-customer/proz-customer.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/proz-customer/proz-customer.module.ts ***!
  \*******************************************************/
/*! exports provided: ProzCustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzCustomerModule", function() { return ProzCustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _van_customers_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./van-customers/add-customer/add-customer.component */ "./src/app/proz-customer/van-customers/add-customer/add-customer.component.ts");
/* harmony import */ var _van_customers_list_customer_list_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./van-customers/list-customer/list-customer.component */ "./src/app/proz-customer/van-customers/list-customer/list-customer.component.ts");
/* harmony import */ var _proz_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proz-customer-routing.module */ "./src/app/proz-customer/proz-customer-routing.module.ts");
/* harmony import */ var _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/prozadmin-sidemenu/proz-sidemenu.module */ "./src/app/common/prozadmin-sidemenu/proz-sidemenu.module.ts");
/* harmony import */ var _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/commonvanlynkheader/commonvanlynkheader.module */ "./src/app/common/commonvanlynkheader/commonvanlynkheader.module.ts");
/* harmony import */ var _van_customers_edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./van-customers/edit-customer/edit-customer.component */ "./src/app/proz-customer/van-customers/edit-customer/edit-customer.component.ts");
/* harmony import */ var _van_customers_view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./van-customers/view-customer/view-customer.component */ "./src/app/proz-customer/van-customers/view-customer/view-customer.component.ts");
/* harmony import */ var _van_customers_reset_customer_password_reset_customer_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./van-customers/reset-customer-password/reset-customer-password.component */ "./src/app/proz-customer/van-customers/reset-customer-password/reset-customer-password.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _proz_customer_layout_proz_customer_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./proz-customer-layout/proz-customer-layout.component */ "./src/app/proz-customer/proz-customer-layout/proz-customer-layout.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/@syncfusion/ej2-angular-schedule.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ "./node_modules/@syncfusion/ej2-angular-grids/@syncfusion/ej2-angular-grids.es5.js");
/* harmony import */ var _utilities_geocode_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utilities/geocode.service */ "./src/utilities/geocode.service.ts");
/* harmony import */ var ng4_auto_complete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng4-auto-complete */ "./node_modules/ng4-auto-complete/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");



















var ProzCustomerModule = /** @class */ (function () {
    function ProzCustomerModule() {
    }
    ProzCustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_van_customers_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_3__["AddCustomerComponent"], _proz_customer_layout_proz_customer_layout_component__WEBPACK_IMPORTED_MODULE_13__["ProzCustomerLayoutComponent"], _van_customers_list_customer_list_customer_component__WEBPACK_IMPORTED_MODULE_4__["ListCustomerComponent"], _van_customers_edit_customer_edit_customer_component__WEBPACK_IMPORTED_MODULE_8__["EditCustomerComponent"], _van_customers_view_customer_view_customer_component__WEBPACK_IMPORTED_MODULE_9__["ViewCustomerComponent"], _van_customers_reset_customer_password_reset_customer_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetCustomerPasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _proz_customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProzCustomerRoutingModule"],
                _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_6__["ProzSidemenuModule"],
                _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_7__["CommonvanlynkheaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_18__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB-WIqE2pai0xtb8hK8uUkaS3OsSz-qOYA',
                    libraries: ["places"]
                }),
            ],
            providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_14__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_14__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_14__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_14__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_14__["MonthAgendaService"], _utilities_geocode_service__WEBPACK_IMPORTED_MODULE_16__["GeocodingService"], ng4_auto_complete__WEBPACK_IMPORTED_MODULE_17__["AutoCompleteService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__["PageService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__["SelectionService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__["RowDDService"]]
        })
    ], ProzCustomerModule);
    return ProzCustomerModule;
}());



/***/ }),

/***/ "./src/app/proz-customer/van-customers/add-customer/add-customer.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/add-customer/add-customer.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a>Customer</a>\r\n          </li>\r\n          <li>\r\n            <a (click)=\"list()\">List of Customers</a>\r\n          </li>\r\n          <li class=\"active\">Add Customer</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Add Customer</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered \">\r\n                      <div class=\"header gray\">\r\n                        Add Customer\r\n                      </div>\r\n                      <div id=\"registration-form\">\r\n                        <form [formGroup]=\"addVanCustomer\" (ngSubmit)=\"onSubmit(buttonType)\">\r\n                          <!-- Customer Type -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"form-title\">\r\n                                Customer Type\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"customerTypeLbl\">\r\n                                      <b>Customer Type <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"radio\">\r\n                                      <label>\r\n                                        <input type=\"radio\" class=\"inverted\" class=\"colored-success\" value=\"Residential\"\r\n                                          formControlName=\"customerType\"\r\n                                          [ngClass]=\"{ 'is-invalid': submitted && f.customerType.errors }\">\r\n                                        <span class=\"text\">Residential </span>\r\n                                      </label>\r\n                                    </div>\r\n                                    <!-- <div class=\"radio\">\r\n                                      <label>\r\n                                        <input value=\"Residential\" type=\"radio\" class=\"colored-success\" checked=\"checked\"\r\n                                          formControlName=\"residential\">\r\n                                        <span class=\"text\">Residential </span>\r\n                                      </label>\r\n                                    </div> -->\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"radio\">\r\n                                      <label>\r\n                                        <input type=\"radio\" class=\"inverted\" class=\"colored-success\" value=\"Business\"\r\n                                          formControlName=\"customerType\"\r\n                                          [ngClass]=\"{ 'is-invalid': submitted && f.customerType.errors }\">\r\n                                        <span class=\"text\">Business</span>\r\n                                      </label>\r\n                                    </div>\r\n\r\n                                  </div>\r\n                                </div>\r\n\r\n                              </div>\r\n\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"customerTypeLbl\">\r\n                                      <!-- <b>Customer Type <span class=\"mandatory\">*</span></b> -->\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <div *ngIf=\"submitted && f.customerType.errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f.customerType.errors.required\">\r\n\r\n                                        <p style=\"color: red; font-size: 11px; \">Select Customer Type</p>\r\n                                      </div>\r\n\r\n                                    </div>\r\n                                    <!-- <div class=\"radio\">\r\n                                      <label>\r\n                                        <input type=\"radio\" class=\"inverted\" class=\"colored-success\" value=\"Residential\"\r\n                                          formControlName=\"customerType\" [ngClass]=\"{ 'is-invalid': submitted && f.customerType.errors }\">\r\n                                        <span class=\"text\">Residential </span>\r\n                                      </label>\r\n                                    </div> -->\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <!-- <div class=\"radio\">\r\n                                      <label>\r\n                                        <input type=\"radio\" class=\"inverted\" class=\"colored-success\" value=\"Business\" formControlName=\"customerType\"\r\n                                          [ngClass]=\"{ 'is-invalid': submitted && f.customerType.errors }\">\r\n                                        <span class=\"text\">Business</span>\r\n                                      </label>\r\n                                    </div> -->\r\n\r\n                                  </div>\r\n                                </div>\r\n\r\n                              </div>\r\n\r\n\r\n\r\n                            </div>\r\n\r\n                          </div>\r\n                          <!-- /Customer Type -->\r\n\r\n                          <!-- Account Settings -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"form-title\">\r\n                                Account Settings\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"customerNumberLbl\">\r\n                                      <b>Customer # </b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                        formControlName=\"customerId\" value=\"{{customerID}}\" readonly>\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"customerNameLbl\">\r\n                                      <b>Company/Customer Name <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                        formControlName=\"customerName\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.customerName.errors }\">\r\n                                    </span>\r\n                                    <div *ngIf=\"submitted && f.customerName.errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f.customerName.errors.required\">\r\n                                        <p style=\"color: red; font-size: 11px\">Enter Company/Customer Name</p>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"creditLimitLbl\">\r\n                                      <b>Customer Credit Limit ($)</b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"number\" class=\"form-control\" placeholder=\"\"\r\n                                        formControlName=\"creditLimit\">\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"termsLbl\">\r\n                                      <b>Terms <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <select class=\"form-control\" formControlName=\"terms\"\r\n                                      [ngClass]=\"{ 'is-invalid': submitted && f.terms.errors }\"\r\n                                      data-bv-field=\"row-title\">\r\n                                      <option value=\"\">Select</option>\r\n                                      <option value=\"Upon Receipt\">Upon Receipt</option>\r\n                                      <option value=\"Net 15\">Net 15</option>\r\n                                      <option value=\"Net 30\">Net 30</option>\r\n                                      <option value=\"Net 45\">Net 45</option>\r\n                                    </select>\r\n                                    <div *ngIf=\"submitted && f.terms.errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f.terms.errors.required\">\r\n                                        <p style=\"color: red; font-size: 11px\">Select Terms</p>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n\r\n                                </div>\r\n                                <!-- <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"terms\">\r\n                                    </span>\r\n                                  </div>\r\n                                </div> -->\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"sourceLbl\">\r\n                                      <b>Source </b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <select class=\"form-control\" formControlName=\"source\" data-bv-field=\"row-title\">\r\n                                      <option value=\"\">Select</option>\r\n                                      <option value=\"Google\">Google</option>\r\n                                      <option value=\"Yelp\">Yelp</option>\r\n                                      <option value=\"Home Advisor\">Home Advisor</option>\r\n                                      <option value=\"Thumbtack\">Thumbtack</option>\r\n                                      <option value=\"Word of Mouth\">Word of Mouth</option>\r\n                                      <option value=\"Money Mailer\">Money Mailer</option>\r\n                                      <option value=\"HomeMag\">HomeMag</option>\r\n                                      <option value=\"Angies List\">Angies List</option>\r\n                                    </select>\r\n                                  </div>\r\n\r\n                                </div> -->\r\n\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <select type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"source\"\r\n                                        data-bv-field=\"row-title\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.source.errors }\">\r\n                                        <option value=\"\">Select</option>\r\n                                        <!-- <option *ngFor=\"let data of sourceData\" value={{data.sourceType}}>\r\n                                          {{data.sourceType}}\r\n                                        </option> -->\r\n                                        <option *ngFor=\"let data of vendorList\" value={{data.vendorName}}>\r\n                                          {{data.vendorName}}\r\n                                        </option>\r\n                                      </select>\r\n                                      <div *ngIf=\"submitted && f.source.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.source.errors.required\">\r\n                                          <p style=\"color: red; font-size: 11px\">Select Source</p>\r\n                                        </div>\r\n                                      </div>\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"paymentMethodLbl\">\r\n                                      <b>Payment Method <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                        formControlName=\"paymentMethod\" data-bv-field=\"row-title\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.paymentMethod.errors }\">\r\n                                        <option value=\"\">Select</option>\r\n                                        <option *ngFor=\"let data of paymentData\" value={{data.paymentMethods}}>\r\n                                          {{data.paymentMethods}}\r\n                                        </option>\r\n                                      </select>\r\n                                      <div *ngIf=\"submitted && f.paymentMethod.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.paymentMethod.errors.required\">\r\n                                          <p style=\"color: red; font-size: 11px\">Select Payment Method</p>\r\n                                        </div>\r\n                                      </div>\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"checkbox\">\r\n                                      <label>\r\n                                        <input type=\"checkbox\" class=\"colored-success\" formControlName=\"doNotServe\"\r\n                                          [(ngModel)]=\"doNotServe\" (ngModelChange)=\"donotserve(doNotServe)\">\r\n                                        <span class=\"text\">Do Not Serve </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"checkbox\">\r\n                                      <label>\r\n                                        <input type=\"checkbox\" class=\"colored-success\" formControlName=\"taxExempt\">\r\n                                        <span class=\"text\">Tax Exempt </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                  </div>\r\n                                </div> -->\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"porLbl\">\r\n                                      <b>P. O. Required </b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-1\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"radio\">\r\n                                      <label>\r\n                                        <input type=\"radio\" class=\"inverted\" class=\"colored-success\" value=\"Yes\"\r\n                                          formControlName=\"poRequired\">\r\n                                        <span class=\"text\">Yes</span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-2\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"radio\">\r\n                                      <label>\r\n                                        <input type=\"radio\" class=\"inverted\" class=\"colored-success\" value=\"No\"\r\n                                          formControlName=\"poRequired\">\r\n                                        <span class=\"text\">No</span>\r\n                                      </label>\r\n                                    </div>\r\n\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\" *ngIf=\"notes\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"donotServeNotesLbl\">\r\n                                      <b>Do Not Serve Notes </b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                        formControlName=\"donotServeNotes\">\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n\r\n\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Account Settings -->\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <hr class=\"hr-gray-thick\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <!-- Collapsible -->\r\n\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"panel-group accordion\" id=\"accordions\">\r\n                                <!-- Billing Details - Collapsible -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseOnes\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Billing Details\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseOnes\" class=\"panel-collapse collapse\">\r\n                                    <!-- <form [formGroup]=\"addAddressList\"> -->\r\n                                    <!-- <ng-container formArrayName=\"fromAddressValues\"> -->\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <!-- Billing Details -->\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"firstNameLbl\">\r\n                                                  <b>First Name <span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\"\r\n                                                    formControlName=\"firstName\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\">\r\n                                                </span>\r\n                                                <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                                                  <div *ngIf=\"f.firstName.errors.required\">\r\n                                                    <p style=\"color: red; font-size: 11px\">Enter First Name</p>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"lastNameLbl\">\r\n                                                  <b>Last Name <span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\"\r\n                                                    formControlName=\"lastName\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\">\r\n                                                </span>\r\n                                                <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                                                  <div *ngIf=\"f.lastName.errors.required\">\r\n                                                    <p style=\"color: red; font-size: 11px\">Enter Last Name</p>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"userTypeLbl\">\r\n                                                  <b>User Type <span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <select class=\"form-control\" formControlName=\"userType\"\r\n                                                  data-bv-field=\"row-title\"\r\n                                                  [ngClass]=\"{ 'is-invalid': submitted && f.userType.errors }\">\r\n                                                  <option value=\"\">--Select--</option>\r\n                                                  <option value=\"Owner\">Owner</option>\r\n                                                  <option value=\"Tenant\">Tenant</option>\r\n                                                  <option value=\"Manager\">Manager</option>\r\n                                                  <option value=\"Representative\">Representative</option>\r\n                                                </select>\r\n                                                <div *ngIf=\"submitted && f.userType.errors\" class=\"invalid-feedback\">\r\n                                                  <div *ngIf=\"f.userType.errors.required\">\r\n                                                    <p style=\"color: red; font-size: 11px\">Select User Type</p>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"emailLbl\">\r\n                                                  <b>Email<span class=\"mandatory\">*</span> </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"email\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"email\"\r\n                                                    pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n                                                </span>\r\n\r\n                                                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                                  <div style=\"color: red; font-size: 11px\"\r\n                                                    *ngIf=\"f.email.errors.required\">Enter Email</div>\r\n                                                  <div style=\"color: red; font-size: 11px\"\r\n                                                    *ngIf=\"f.email.errors.pattern\">\r\n                                                    Email must be a\r\n                                                    valid email </div>\r\n                                                </div>\r\n\r\n                                              </div>\r\n\r\n                                            </div>\r\n\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"phoneNumberLbl\">\r\n                                                  <b>Phone Number<span class=\"mandatory\">*</span> </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    [dropSpecialCharacters]=\"false\" mask=\"000-000-0000\"\r\n                                                    formControlName=\"phoneNumber\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.phoneNumber.errors }\">\r\n                                                </span>\r\n                                                <div *ngIf=\"submitted && f.phoneNumber.errors\" class=\"invalid-feedback\">\r\n                                                  <div *ngIf=\"f.phoneNumber.errors.required\">\r\n                                                    <p style=\"color: red; font-size: 11px\">Enter Phone Number</p>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"phoneTypeLbl\">\r\n                                                  <b>Phone Type </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <select class=\"form-control\" formControlName=\"phoneType\"\r\n                                                  data-bv-field=\"row-title\">\r\n                                                  <option value=\"\">--Select--</option>\r\n                                                  <option value=\"Cell\">Cell</option>\r\n                                                  <option value=\"Home\">Home</option>\r\n                                                  <option value=\"Work\">Work</option>\r\n                                                  <option value=\"Fax\">Fax</option>\r\n                                                </select>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"dispatchTextNumberLbl\">\r\n                                                  <b>Dispatch Text Number</b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    [dropSpecialCharacters]=\"false\" mask=\"000-000-0000\"\r\n                                                    formControlName=\"dispatchTextNumber\">\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <!-- <label for=\"propertyNameLbl\">\r\n                                                  <b>Property Name <span class=\"mandatory\">*</span></b>\r\n                                                </label> -->\r\n                                                <label for=\"adminNotesLbl\">\r\n                                                  <b>Admin Notes </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"adminNotes\">\r\n                                                </span>\r\n                                                <!-- <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"propertyName\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.propertyName.errors }\">\r\n                                                </span>\r\n                                                <div *ngIf=\"submitted && f.propertyName.errors\"\r\n                                                  class=\"invalid-feedback\">\r\n                                                  <div *ngIf=\"f.propertyName.errors.required\">\r\n                                                    <p style=\"color: red; font-size: 11px\">Enter Property Name</p>\r\n                                                  </div>\r\n                                                </div> -->\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"sendInvoiceToLbl\">\r\n                                                  <b>Send Invoice By <span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                  formControlName=\"sendInvoiceBy\" data-bv-field=\"row-title\"\r\n                                                  [ngClass]=\"{ 'is-invalid': submitted && f.sendInvoiceBy.errors }\">\r\n                                                  <option value=\"\">Select</option>\r\n                                                  <option value=\"E-Mail\">E-Mail</option>\r\n                                                  <option value=\"Cell\">Cell</option>\r\n                                                  <option value=\"US Mail\">US Mail</option>\r\n                                                </select>\r\n                                                <div *ngIf=\"submitted && f.sendInvoiceBy.errors\"\r\n                                                  class=\"invalid-feedback\">\r\n                                                  <div *ngIf=\"f.sendInvoiceBy.errors.required\">\r\n                                                    <p style=\"color: red; font-size: 11px\">Select Send Invoice</p>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"invoiceEmailLbl\">\r\n                                                  <b>Invoice Email<span class=\"mandatory\">*</span> </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"invoiceEmail\"\r\n                                                    pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.invoiceEmail.errors }\">\r\n                                                </span>\r\n\r\n                                                <div *ngIf=\"submitted && f.invoiceEmail.errors\"\r\n                                                  class=\"invalid-feedback\">\r\n                                                  <div style=\"color: red; font-size: 11px\"\r\n                                                    *ngIf=\"f.invoiceEmail.errors.required\">Enter Invoice Email</div>\r\n                                                  <div style=\"color: red; font-size: 11px\"\r\n                                                    *ngIf=\"f.invoiceEmail.errors.pattern\">\r\n                                                    Invoice Email must be a\r\n                                                    valid invoice email </div>\r\n                                                  <div style=\"color: red; font-size: 11px\" *ngIf=\"mailError\">\r\n                                                    All Ready Exist </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"serviceAddressLbl\">\r\n                                                  <b> Street Address<span class=\"mandatory\">*</span> </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"address\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\">\r\n                                                </span>\r\n                                                <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n                                                  <div *ngIf=\"f.address.errors.required\">\r\n                                                    <p style=\"color: red; font-size: 11px\">Enter Street Address</p>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"unitLbl\">\r\n                                                  <b>Unit/APT # </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"unit\">\r\n                                                </span>\r\n                                                <!-- <div *ngIf=\"submitted && f.unit.errors\" class=\"invalid-feedback\">\r\n                                                  <div *ngIf=\"f.unit.errors.required\">\r\n                                                    <p style=\"color: red; font-size: 11px\">Enter Unit/APT #</p>\r\n                                                  </div>\r\n                                                </div> -->\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"cityLbl\">\r\n                                                  <b>City<span class=\"mandatory\">*</span> </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"city\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\">\r\n                                                </span>\r\n                                                <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\r\n                                                  <div *ngIf=\"f.city.errors.required\">\r\n                                                    <p style=\"color: red; font-size: 11px\">Enter City</p>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"stateLbl\">\r\n                                                  <b>State<span class=\"mandatory\">*</span> </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <select class=\"form-control\" id=\"stateRegistred\" name=\"status\"\r\n                                                  data-bv-field=\"row-title\" formControlName=\"state\"\r\n                                                  [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\">\r\n                                                  <option value=\"\">Select</option>\r\n                                                  <option *ngFor=\"let data of statesData\" value={{data.stateName}}>\r\n                                                    {{data.stateName}}\r\n                                                  </option>\r\n                                                </select>\r\n                                                <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\r\n                                                  <div *ngIf=\"f.state.errors.required\">\r\n                                                    <p style=\"color: red; font-size: 11px\">Select State</p>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"zipCodeLbl\">\r\n                                                  <b>Zip Code<span class=\"mandatory\">*</span> </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"zipCode\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.zipCode.errors }\">\r\n                                                </span>\r\n                                                <div *ngIf=\"submitted && f.zipCode.errors\" class=\"invalid-feedback\">\r\n                                                  <div *ngIf=\"f.zipCode.errors.required\">\r\n                                                    <p style=\"color: red; font-size: 11px\">Enter Zip Code</p>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <!-- /Billing Details -->\r\n\r\n                                      <!-- </ng-container> -->\r\n                                      <!-- </form> -->\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Billing Details - Collapsible -->\r\n                                <!-- Pictures -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseThird\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Pictures\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseThird\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"serviceIDLbl\">\r\n                                                  <b>Add Pictures</b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <div class=\"controls\">\r\n                                                  <div data-provides=\"fileupload\" class=\"fileupload fileupload-new\">\r\n                                                    <div style=\"width: 100px; height: 120px;\"\r\n                                                      class=\"fileupload-new thumbnail\">\r\n                                                      <img [src]=\"imagePreview\" style=\"height:120px;width:100px;\">\r\n                                                    </div>\r\n\r\n                                                    <div>\r\n                                                      <input #imageUpload type=\"file\" accept=\"image/*\" id=\"avatar\"\r\n                                                        (change)=\"select($event)\" #fileInput\r\n                                                        formControlName=\"customerImage\">\r\n                                                      <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!img\"\r\n                                                        (click)=\"imgfileUpload()\">Upload</button>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div *ngIf=\"progressShow\" class=\"progress-bar1 blue stripes\">\r\n                                                  <span [style.width.%]=\"percentage\">\r\n                                                    <p style=\"text-align: center;color:black;font-size:18px;\">\r\n                                                      {{percentage}}%</p>\r\n                                                  </span>\r\n                                                </div>\r\n                                                <br>\r\n                                                <div *ngIf=\"progressHide\" class=\"alert alert-block alert-success\"\r\n                                                  style=\"height:3px;\">\r\n                                                  <h4 class=\"alert-heading\" style=\"margin-top:-5px;text-align:center;\">\r\n                                                    Image\r\n                                                    Uploaded\r\n                                                    Successfully</h4>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"panel-body border-red\">\r\n                                    </div>\r\n                                    <br>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- Pictures -->\r\n\r\n                                <!-- Credit Card List - Collapsible -->\r\n                                <!-- <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseTwos\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Credit Card List\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseTwos\" class=\"panel-collapse collapse\">\r\n\r\n                                    <form [formGroup]=\"addCardList\">\r\n                                      <ng-container formArrayName=\"fromCardValues\">\r\n                                        <div class=\"panel-body border-red\"\r\n                                          *ngFor=\"let item of addCardList.get('fromCardValues').controls; let i = index;\"\r\n                                          [formGroupName]=\"i\">\r\n                                          <div class=\"form-title\">\r\n                                            Credit Card List\r\n                                            <a class=\"btn btn-xs btn-danger\" style=\"margin-left:93% \"\r\n                                              (click)=\"delCreditCard(i)\"><i class=\"fa fa-trash-o\"></i>\r\n                                            </a>\r\n                                          </div>\r\n                                          <!-- Credit Card List -->\r\n                                <!-- <div class=\"row\">\r\n                                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n\r\n\r\n\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-12\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <hr class=\"hr-gray\">\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"nameOnCardLbl\">\r\n                                                      <b>Name on Card </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\"\r\n                                                        formControlName=\"nameOnCard\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"cardTypeLbl\">\r\n                                                      <b>Card Type </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <select class=\"form-control\" formControlName=\"cardType\">\r\n                                                      <option value=\"MASTER\">MASTER</option>\r\n                                                      <option value=\"VISA\">VISA</option>\r\n                                                      <option value=\"A-MEX\">A-MEX</option>\r\n                                                      <option value=\"Other\">OTHER</option>\r\n                                                    </select>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"cardNumberLbl\">\r\n                                                      <b>Card Number </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        [dropSpecialCharacters]=\"false\" mask=\"0000-0000-0000-0000\"\r\n                                                        formControlName=\"cardNumber\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"crvNumberLbl\">\r\n                                                      <b>CRV Number </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        [dropSpecialCharacters]=\"false\" mask=\"000\"\r\n                                                        formControlName=\"crvNumber\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"cardNumberLbl\">\r\n                                                      <b>Expires On </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <div class=\"col-sm-6\">\r\n                                                      <select class=\"form-control\" id=\"selectMonth\" name=\"status\"\r\n                                                        data-bv-field=\"row-title\" formControlName=\"expiresOnDate\">\r\n                                                        <option value=\"\">--Month--</option>\r\n                                                        <option value=\"JAN\">JAN</option>\r\n                                                        <option value=\"FEB\">FEB</option>\r\n                                                        <option value=\"MAR\">MAR</option>\r\n                                                        <option value=\"APR\">APR</option>\r\n                                                        <option value=\"MAY\">MAY</option>\r\n                                                        <option value=\"JUN\">JUN</option>\r\n                                                        <option value=\"JUL\">JUL</option>\r\n                                                        <option value=\"AUG\">AUG</option>\r\n                                                        <option value=\"SEP\">SEP</option>\r\n                                                        <option value=\"OCT\">OCT</option>\r\n                                                        <option value=\"NOV\">NOV</option>\r\n                                                        <option value=\"DEC\">DEC</option>\r\n                                                      </select>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-6\">\r\n                                                      <select class=\"form-control\" id=\"selectYear\" name=\"status\"\r\n                                                        data-bv-field=\"row-title\" formControlName=\"expiresOnYear\">\r\n                                                        <option value=\"\">--Year--</option>\r\n                                                        <option value=\"2030\">2030</option>\r\n                                                        <option value=\"2029\">2029</option>\r\n                                                        <option value=\"2028\">2028</option>\r\n                                                        <option value=\"2027\">2027</option>\r\n                                                        <option value=\"2026\">2026</option>\r\n                                                        <option value=\"2025\">2025</option>\r\n                                                        <option value=\"2024\">2024</option>\r\n                                                        <option value=\"2023\">2023</option>\r\n                                                        <option value=\"2022\">2022</option>\r\n                                                        <option value=\"2021\">2021</option>\r\n                                                        <option value=\"2020\">2020</option>\r\n                                                        <option value=\"2019\">2019</option>\r\n                                                      </select>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <div class=\"checkbox\">\r\n                                                      <label>\r\n                                                        <input type=\"checkbox\" class=\"colored-success\"\r\n                                                          formControlName=\"isActive\">\r\n                                                        <span class=\"text\">Is Active </span>\r\n                                                      </label>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <div class=\"checkbox\">\r\n                                                      <label>\r\n                                                        <input type=\"checkbox\" class=\"colored-success\"\r\n                                                          formControlName=\"isActiveForSA\">\r\n                                                        <span class=\"text\">Is Active for SA </span>\r\n                                                      </label>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"addressOnCardLbl\">\r\n                                                      <b>Address On Card</b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        formControlName=\"addressOnCard\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"stateLbl\">\r\n                                                      <b>State </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <select class=\"form-control\" id=\"stateRegistred\" name=\"status\"\r\n                                                      data-bv-field=\"row-title\" formControlName=\"cardState\">\r\n                                                      <option value=\"\">Select</option>\r\n                                                      <option *ngFor=\"let data of statesData\" value={{data.stateName}}>\r\n                                                        {{data.stateName}}\r\n                                                      </option>\r\n                                                    </select>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"cityLbl\">\r\n                                                      <b>City </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        formControlName=\"cardCity\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"zipCodeLbl\">\r\n                                                      <b>Zip Code </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        [dropSpecialCharacters]=\"false\" mask=\"00000\"\r\n                                                        formControlName=\"cardZipCode\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"adminNotesLbl\">\r\n                                                      <b>Notes </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-9\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        formControlName=\"notes\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-12\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <hr class=\"hr-gray\">\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div> -->\r\n                                <!-- /Credit Card List -->\r\n                                <!-- \r\n                                        </div>\r\n                                        <div class=\"panel-body border-red\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <button type=\"submit\" class=\"btn btn-success\"\r\n                                                  (click)=\"addCardFieldValue()\"><i class=\"fa fa-user-plus\"></i> Add New\r\n                                                  Credit\r\n                                                  Card</button>\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n\r\n                                      </ng-container>\r\n                                    </form>\r\n                                    <br>\r\n\r\n                                  </div>\r\n                                </div> -->\r\n                                <!-- /Credit Card List - Collapsible -->\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Collapsible -->\r\n\r\n\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <hr class=\"hr-gray-thick\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n\r\n                          <!-- Bottom Buttons -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-4 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <button type=\"submit\" class=\"btn btn-gray\" (click)=\"backtoListCustomers()\"><i\r\n                                    class=\"fa fa-arrow-left\"></i>\r\n                                  Back to List of Customers</button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <button class=\"btn btn-blue\" (click)=\"onSubmit('save')\"><i class=\"fa fa-check\"></i>\r\n                                  Save</button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-1 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <button class=\"btn btn-gray\" (click)=\"onSubmit('workorder')\"><i class=\"fa fa-check\"></i>\r\n                                  Save and Proceed to Work Order</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Bottom Buttons -->\r\n\r\n\r\n                        </form>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/proz-customer/van-customers/add-customer/add-customer.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/add-customer/add-customer.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n    padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.checkbox, .radio {\n  position: relative;\n  display: block;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\n.col-sm-6 {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.button-center {\n  text-align: center; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei1jdXN0b21lci92YW4tY3VzdG9tZXJzL2FkZC1jdXN0b21lci9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxccHJvei1jdXN0b21lclxcdmFuLWN1c3RvbWVyc1xcYWRkLWN1c3RvbWVyXFxhZGQtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2Ysa0NBQWlDO0VBRWpDO3FCQUNpQjtFQUdqQixnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjt5QkFDc0IsRUFFeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksc0NBQXFDLEVBRXhDOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCwyQkFBMEI7RUFDMUIsOEJBQTZCLEVBQ2hDOztBQUVEO0VBQ0ksNkJBQTRCO0VBQzVCLDhCQUE2QixFQUNoQzs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2Qzs7QUFFRDtFQUNBLG1CQUFrQixFQUNqQjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixrQ0FBaUM7RUFDakMsNENBQTJDLEVBQzlDOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLGtDQUFpQyxFQUNwQzs7QUFFRDtFQUNJLDBCQUF5QixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL3Byb3otY3VzdG9tZXIvdmFuLWN1c3RvbWVycy9hZGQtY3VzdG9tZXIvYWRkLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tdGl0bGV7XHJcbiAgICBjb2xvcjogICM1ZGIyZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1ZGIyZmY7XHJcblxyXG4gICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDhweCAwOyovICAgIFxyXG4gICAgLy8gY29sb3I6ICAjN2UzNzk0O1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG5cclxufVxyXG5cclxuLm1hbmRhdG9yeXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5oci1ncmF5LXRoaWNreyAgICBcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG4uaHItZ3JheXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZTM3OTQgIWltcG9ydGFudDtcclxufSBcclxuXHJcbmlucHV0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubW9ja3tcclxuICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9jay1jb25me1xyXG4gICAgY29sb3I6IGdyZWVuOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHJvZ3Jlc3N7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRocmVlLWJvcmRlcmVke1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxufVxyXG5cclxuLmNoZWNrYm94LCAucmFkaW8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sLXNtLTYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JheXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcbiBcclxuLmJ0bi1ncmF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ibHVleyAgICBcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b24tY2VudGVye1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUuY29sbGFwc2VkIHtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlOmhvdmVyOmFmdGVyIHtcclxuICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUge1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZTphZnRlciB7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/proz-customer/van-customers/add-customer/add-customer.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/add-customer/add-customer.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_imageupload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/imageupload */ "./src/utilities/imageupload.ts");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _utilities_customValidators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/customValidators */ "./src/utilities/customValidators.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utilities_geocode_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/geocode.service */ "./src/utilities/geocode.service.ts");











var MAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var isEmail = function (email) { return MAIL_PATTERN.test(email); };
var AddCustomerComponent = /** @class */ (function () {
    function AddCustomerComponent(beyond, router, formBuilder, activatedRoute, http, toastr, geocodingService, ngZone) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.geocodingService = geocodingService;
        this.ngZone = ngZone;
        this.mailError = false;
        this.addressArray = [];
        //cardArray: any = []
        this.addressCheck = false;
        this.disableSubmit = false;
        this.coordinates = {
            latitude: 0,
            longitude: 0
        };
        this.imagePreview = "../../assets/img/avatars/default_person.jpg";
    }
    AddCustomerComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proCode = this.loginData.loginCode;
        console.log("loginData" + JSON.stringify(this.proCode));
        this.getListOfStates();
        this.getCustomerId(this.proCode);
        this.listPaymentMethods();
        // this.listSource()    
        this.getVendorList();
        var val = Math.floor(100 + Math.random() * 900);
        this.accountNum = "ACC" + "" + val;
        var val = Math.floor(100 + Math.random() * 900);
        this.randamvalue = "VANCUST" + "" + val;
        this.addVanCustomer = this.formBuilder.group({
            // residential: ['', Validators.required],
            customerId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            customerType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            accountNumber: [''],
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            creditLimit: [''],
            terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            source: [''],
            paymentMethod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            doNotServe: [''],
            poRequired: [''],
            donotServeNotes: [''],
            pendCompletion: [''],
            taxExempt: [''],
            customerImage: [''],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern(MAIL_PATTERN)]],
            //email: ['', [Validators.required, Validators.email, , Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],      
            // email: new FormControl("", Validators.compose([CustomValidators.emailValidator, Validators.required])),
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            phoneType: [''],
            dispatchTextNumber: [''],
            propertyName: [''],
            sendInvoiceBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            invoiceEmail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern(MAIL_PATTERN)]],
            unit: [''],
            zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            crossSt1: [''],
            crossSt2: [''],
            adminNotes: [''],
            emailSubscription: ['']
        });
        // this.addAddressList = this.formBuilder.group({
        //   fromAddressValues: this.formBuilder.array([this.createAddressInfo()])
        // })
        // this.addCardList = this.formBuilder.group({
        //   fromCardValues: this.formBuilder.array([this.createCardInfo()])
        // })
    };
    //Get vendor List Starts
    AddCustomerComponent.prototype.getVendorList = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/listOfVendors' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.vendorList = response.response;
                console.log("Vendor List", JSON.stringify(_this.vendorList));
                _this.vendorListResponse = true;
            }
            else {
                _this.vendorListResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    //Get vendor List Ends
    AddCustomerComponent.prototype.returnSubmit = function () {
        //$('#modal-info').modal({ backdrop: 'static', keyboard: false, show: true })
        this.validateAllFormFields(this.addVanCustomer);
        // this.validateAllFormFields(this.addAddressList)
    };
    Object.defineProperty(AddCustomerComponent.prototype, "f", {
        get: function () { return this.addVanCustomer.controls; },
        enumerable: true,
        configurable: true
    });
    AddCustomerComponent.prototype.onSubmit = function (a) {
        var _this = this;
        if (a == "save") {
            var addressMixed = this.addVanCustomer.value.address + "," + this.addVanCustomer.value.city + "," + this.addVanCustomer.value.state + "," + this.addVanCustomer.value.zipCode;
            console.log(addressMixed);
            this.submitted = true;
            if (this.addVanCustomer.value.customerType == '') {
                return;
            }
            else if (this.addVanCustomer.value.customerName == '') {
                return;
            }
            else if (this.addVanCustomer.value.terms == '') {
                return;
            }
            else if (this.addVanCustomer.value.paymentMethod == '') {
                return;
            }
            else if (this.addVanCustomer.value.firstName == '') {
                return;
            }
            else if (this.addVanCustomer.value.lastName == '') {
                return;
            }
            else if (this.addVanCustomer.value.userType == '') {
                return;
            }
            else if (!isEmail(this.addVanCustomer.value.email)) {
                return;
            }
            else if (this.addVanCustomer.value.phoneNumber == '') {
                return;
            }
            else if (this.addVanCustomer.value.sendInvoiceBy == '') {
                return;
            }
            else if (!isEmail(this.addVanCustomer.value.invoiceEmail)) {
                return;
            }
            else if (this.addVanCustomer.value.address == '') {
                return;
            }
            else if (this.addVanCustomer.value.city == '') {
                return;
            }
            else if (this.addVanCustomer.value.state == '') {
                return;
            }
            else if (this.addVanCustomer.value.zipCode == '') {
                return;
            }
            else {
                this.geocodingService.getLatLongViaZipcode(addressMixed)
                    .subscribe(function (address) {
                    console.log(address);
                    if (address == undefined || address == '') {
                        _this.coordinates.latitude = 0;
                        _this.coordinates.longitude = 0;
                    }
                    else {
                        var coordObj = {
                            lat: address.lat,
                            lng: address.lng,
                        };
                        _this.coordinates.latitude = address.lat;
                        _this.coordinates.longitude = address.lng;
                    }
                    _this.ngZone.run(function () { return _this.save(); });
                });
            }
        }
        if (a == "workorder") {
            var addressMixed = this.addVanCustomer.value.address + "," + this.addVanCustomer.value.city + "," + this.addVanCustomer.value.state + "," + this.addVanCustomer.value.zipCode;
            console.log(addressMixed);
            this.submitted = true;
            if (this.addVanCustomer.value.customerType == '') {
                return;
            }
            else if (this.addVanCustomer.value.customerName == '') {
                return;
            }
            else if (this.addVanCustomer.value.terms == '') {
                return;
            }
            else if (this.addVanCustomer.value.paymentMethod == '') {
                return;
            }
            else if (this.addVanCustomer.value.firstName == '') {
                return;
            }
            else if (this.addVanCustomer.value.lastName == '') {
                return;
            }
            else if (this.addVanCustomer.value.userType == '') {
                return;
            }
            else if (this.addVanCustomer.value.email == '') {
                return;
            }
            else if (this.addVanCustomer.value.phoneNumber == '') {
                return;
            }
            else if (this.addVanCustomer.value.sendInvoiceBy == '') {
                return;
            }
            else if (this.addVanCustomer.value.invoiceEmail == '') {
                return;
            }
            else if (this.addVanCustomer.value.address == '') {
                return;
            }
            else if (this.addVanCustomer.value.city == '') {
                return;
            }
            else if (this.addVanCustomer.value.state == '') {
                return;
            }
            else if (this.addVanCustomer.value.zipCode == '') {
                return;
            }
            else {
                this.geocodingService.getLatLongViaZipcode(addressMixed)
                    .subscribe(function (address) {
                    console.log(address);
                    if (address == undefined || address == '') {
                        _this.coordinates.latitude = 0;
                        _this.coordinates.longitude = 0;
                    }
                    else {
                        var coordObj = {
                            lat: address.lat,
                            lng: address.lng,
                        };
                        _this.coordinates.latitude = address.lat;
                        _this.coordinates.longitude = address.lng;
                    }
                    _this.ngZone.run(function () { return _this.save2(); });
                });
            }
        }
    };
    AddCustomerComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        var count = 0;
        Object.keys(formGroup.controls).forEach(function (field, i) {
            var control = formGroup.get(field);
            if (control.value != '' && control.value != null && control.value != undefined) {
                count = count + 1;
                console.log("count" + count);
                console.log("count" + Object.keys(formGroup.controls).length);
                if (count == Object.keys(formGroup.controls).length - 36) {
                    _this.save();
                }
                else {
                    //Empty Fields
                }
            }
            else {
            }
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]) {
                control.markAsDirty({ onlySelf: true });
                console.log('dirty');
            }
            else {
            }
            // this.validateMultiLeg()
            //if(i==formGroup.length-1)
        });
    };
    // THIS IS FOR CALLING ADDRESS INFO FOR MULTIPLE TIMES -- START
    AddCustomerComponent.prototype.createAddressInfo = function () {
        console.log("in address info");
        return this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].email]],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            phoneType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            dispatchTextNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            propertyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            sendInvoiceBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            invoiceEmail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].pattern(MAIL_PATTERN)]],
            unit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            crossSt1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            crossSt2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            adminNotes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            emailSubscription: ['']
        });
    };
    AddCustomerComponent.prototype.addFieldValue = function () {
        this.items = this.addAddressList.get('fromAddressValues');
        this.items.push(this.createAddressInfo());
        this.checkValidationAddress();
    };
    Object.defineProperty(AddCustomerComponent.prototype, "addressInfoValues", {
        get: function () {
            return this.addAddressList.get('fromAddressValues');
        },
        enumerable: true,
        configurable: true
    });
    AddCustomerComponent.prototype.deleteFieldValue = function (index) {
        this.addressInfoValues.removeAt(index);
        this.checkValidationAddress();
    };
    // BUTTON DISABLING FUNCTION AND ALSO CHECKING VALIDATION -- START
    AddCustomerComponent.prototype.checkValidationAddress = function () {
        var _this = this;
        this.addressCheck = true;
        this.addAddressList.get('fromAddressValues').value.forEach(function (e) {
            console.log(e);
            if (e.firstName == "" || e.lastName == "" || e.phoneNumber == "" || e.email == "" || e.propertyName == "" || e.address == "") {
                console.log('The empty');
                _this.addressCheck = true;
                return false;
            }
            if (e.firstName == null || e.lastName == null || e.phoneNumber == null || e.email == null || e.propertyName == null || e.address == null) {
                console.log('The empty');
                _this.addressCheck = true;
                return false;
            }
            else if (e.firstName !== "" && e.lastName !== "" && e.phoneNumber !== "" && e.email !== "" && e.propertyName !== "" && e.address !== "") {
                console.log('The not empty');
                _this.addressCheck = false;
                return false;
            }
        });
    };
    // BUTTON DISABLING FUNCTION AND ALSO CHECKING VALIDATIO -- END
    // THIS IS FOR CALLING ADDRESS INFO FOR MULTIPLE TIMES ------ END
    // MULTIPLE CARD DETAILS VALUES INSERTION FUNCTIONS
    AddCustomerComponent.prototype.createCardInfo = function () {
        console.log("in card info");
        return this.formBuilder.group({
            nameOnCard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            cardType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            cardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            crvNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            expiresOnDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            expiresOnYear: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            isActive: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            isActiveForSA: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            addressOnCard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            cardState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            cardCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            cardZipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
            notes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required],
        });
    };
    // addCardFieldValue() {
    //   this.items = this.addCardList.get('fromCardValues') as FormArray;
    //   this.items.push(this.createCardInfo());
    //   this.checkValidationAddress()
    // }
    // get creditCardValues(): FormArray {
    //   return this.addCardList.get('fromCardValues') as FormArray;
    // }
    // delCreditCard(index: number) {
    //   this.creditCardValues.removeAt(index);
    //   this.checkValidationAddress()
    // }
    AddCustomerComponent.prototype.checkValidationCard = function () {
        var _this = this;
        this.addressCheck = true;
        this.addAddressList.get('fromCardValues').value.forEach(function (e) {
            console.log(e);
            if (e.firstName == "" || e.lastName == "" || e.phoneNumber == "" || e.email == "" || e.propertyName == "" || e.address == "") {
                console.log('The empty');
                _this.addressCheck = true;
                return false;
            }
            if (e.firstName == null || e.lastName == null || e.phoneNumber == null || e.email == null || e.propertyName == null || e.address == null) {
                console.log('The empty');
                _this.addressCheck = true;
                return false;
            }
            else if (e.firstName !== "" && e.lastName !== "" && e.phoneNumber !== "" && e.email !== "" && e.propertyName !== "" && e.address !== "") {
                console.log('The not empty');
                _this.addressCheck = false;
                return false;
            }
        });
    };
    AddCustomerComponent.prototype.save = function () {
        var _this = this;
        console.log(this.addVanCustomer.value.doNotServe);
        if (this.addVanCustomer.value.doNotServe == false || this.addVanCustomer.value.doNotServe == undefined) {
            this.addVanCustomer.value.doNotServe = false;
        }
        else if (this.addVanCustomer.value.pendCompletion == false) {
            this.addVanCustomer.value.pendCompletion = "";
        }
        else if (this.addVanCustomer.value.taxExempt == false) {
            this.addVanCustomer.value.taxExempt = "";
        }
        // if (this.addCardList.value.isActive == false) {
        //   this.addCardList.value.isActive = ""
        // }
        // if (this.addCardList.value.isActiveForSA == false) {
        //   this.addCardList.value.isActiveForSA = ""
        // }
        var addObj = {
            "customerId": this.customerID,
            "proId": this.proCode,
            // "residential": this.addVanCustomer.value.residential,
            "customerType": '' + this.addVanCustomer.value.customerType,
            "accountNumber": this.accountNum,
            "customerName": '' + this.addVanCustomer.value.customerName,
            "creditLimit": '' + this.addVanCustomer.value.creditLimit,
            "terms": '' + this.addVanCustomer.value.terms,
            "source": '' + this.addVanCustomer.value.source,
            "paymentMethod": '' + this.addVanCustomer.value.paymentMethod,
            "doNotServe": '' + this.addVanCustomer.value.doNotServe,
            "poRequired": '' + this.addVanCustomer.value.poRequired,
            "donotServeNotes": '' + this.addVanCustomer.value.donotServeNotes,
            "pendCompletion": '' + this.addVanCustomer.value.pendCompletion,
            "taxExempt": '' + this.addVanCustomer.value.taxExempt,
            // "fromAddressValues": this.addAddressList.value.fromAddressValues,
            //"fromCardValues": this.addCardList.value.fromCardValues,
            "createdBy": this.loginData.emailId,
            "customerImage": '' + _global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].documentName,
        };
        console.log("ADD OBJ" + JSON.stringify(addObj));
        // this.addressArray = addObj.fromAddressValues
        //this.cardArray = addObj.fromCardValues
        console.log("addressArray OBJ" + JSON.stringify(this.addressArray));
        // console.log("cardArray OBJ" + JSON.stringify(this.cardArray))
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/addVanlynkCustomerInfo', addObj)
            .subscribe(function (data) {
            var customerData = data.json();
            console.log("customerData" + JSON.stringify(customerData));
            if (customerData.status == 200) {
                var addressObj = {
                    "customerId": _this.customerID,
                    "proId": _this.proCode,
                    "firstName": '' + _this.addVanCustomer.value.firstName,
                    "lastName": '' + _this.addVanCustomer.value.lastName,
                    "userType": '' + _this.addVanCustomer.value.userType,
                    "email": '' + _this.addVanCustomer.value.email,
                    "phoneNumber": '' + _this.addVanCustomer.value.phoneNumber,
                    "phoneType": '' + _this.addVanCustomer.value.phoneType,
                    "dispatchTextNumber": '' + _this.addVanCustomer.value.dispatchTextNumber,
                    "invoiceEmail": '' + _this.addVanCustomer.value.invoiceEmail,
                    "sendInvoiceBy": '' + _this.addVanCustomer.value.sendInvoiceBy,
                    "unit": '' + _this.addVanCustomer.value.unit,
                    "zipCode": '' + _this.addVanCustomer.value.zipCode,
                    "city": '' + _this.addVanCustomer.value.city,
                    "state": '' + _this.addVanCustomer.value.state,
                    "latitude": '' + _this.coordinates.latitude,
                    "longitude": '' + _this.coordinates.longitude,
                    "address": '' + _this.addVanCustomer.value.address,
                    "adminNotes": '' + _this.addVanCustomer.value.adminNotes,
                    "createdBy": _this.loginData.emailId,
                    "resetPasswordURL": "http://topproz.in.s3-website-us-east-1.amazonaws.com/proz/resetPassword"
                };
                console.log("addressObj" + JSON.stringify(addressObj));
                _this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/addBatchAddressInfo', addressObj)
                    .subscribe(function (data) {
                    var response = data.json();
                    if (response.status == 200) {
                        _this.router.navigate(['/proCustomer/listVanCustomers']);
                        // let cardObj = {
                        // cardInfoArray: this.cardArray,
                        //   customerId: this.customerID,
                        //   proId: this.loginData.loginCode,
                        //   createdBy: this.loginData.emailId
                        // }
                        // console.log("cardObj" + JSON.stringify(cardObj))
                        // this.http.post(Global.url + '/addBatchCardInfo', cardObj)
                        // .subscribe(data => {
                        //   var response = data.json();
                        //   if (response.status == 200) {
                        //   }
                        // })
                    }
                });
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    AddCustomerComponent.prototype.mailIdVerifications = function () {
        var _this = this;
        if (this.addVanCustomer.value.email == "") {
            // this.toastr.warning("Email Id is Empty")
            this.mailError = false;
            // this.disableSignIn = true;
            return false;
        }
        else {
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/mailIdVerification/' + this.addVanCustomer.value.email)
                .subscribe(function (data) {
                var mailResponse = data.json();
                if (mailResponse.status == "TRUE") {
                    _this.mailError = true;
                    // this.disableSignIn = false;
                }
                else {
                    _this.mailError = false;
                    // this.disableSignIn = true;
                }
            });
        }
    };
    AddCustomerComponent.prototype.getListOfStates = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/getListOfStates', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.statesData = response.response;
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    // generate  automatic CustomerId
    // getCustomerId() {
    //   var headers = new Headers();
    //   headers.append("Accept", "application/json");
    //   headers.append("Content-Type", "application/json");
    //   let options = new RequestOptions({ headers: headers });
    //   this.http
    //     .get(Global.url + "/generateCustomerID", options)
    //     .subscribe(data => {
    //       this.customerInfo = data.json();
    //       if (this.customerInfo.status == 200) {
    //         this.customerID = this.customerInfo.customerId;
    //         this.dataCustomerInfo = true;
    //       } else {
    //         this.dataCustomerInfo = false;
    //         console.log("NO Records Found");
    //       }
    //     });
    // }
    AddCustomerComponent.prototype.getCustomerId = function (proCode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/generateCustProID/' + proCode, options)
            .subscribe(function (data) {
            var response = data.json();
            _this.customerID = response.customerId;
            console.log("customer number" + _this.customerID);
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    // generate  automatic CustomerId
    // List Payment Methods starts
    AddCustomerComponent.prototype.listPaymentMethods = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/listPaymentMethods', options)
            .subscribe(function (data) {
            var listPay = data.json();
            _this.paymentData = listPay.response;
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    // List Payment Methods ends
    // List Sales and Marketing Source starts
    AddCustomerComponent.prototype.listSource = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/getSourceType/' + this.proCode, options)
            .subscribe(function (data) {
            var listSources = data.json();
            _this.sourceData = listSources.response;
            console.log("sources", JSON.stringify(_this.sourceData));
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    // /List Sales and Marketing Source ends
    AddCustomerComponent.prototype.donotserve = function (doNotServe) {
        console.log("doNotServe1" + this.addVanCustomer.value.doNotServe);
        if (this.addVanCustomer.value.doNotServe == true) {
            this.notes = true;
        }
        else {
            this.notes = false;
        }
    };
    AddCustomerComponent.prototype.backtoListCustomers = function () {
        this.router.navigate(['/proCustomer/listVanCustomers']);
    };
    AddCustomerComponent.prototype.list = function () {
        this.router.navigate(['/proCustomer/listVanCustomers']);
    };
    // addAddress() {
    //   this.toastr.info('Coming Soon')
    // }
    AddCustomerComponent.prototype.save2 = function () {
        var _this = this;
        console.log(this.addVanCustomer.value.doNotServe);
        if (this.addVanCustomer.value.doNotServe == false || this.addVanCustomer.value.doNotServe == undefined) {
            this.addVanCustomer.value.doNotServe = false;
        }
        else if (this.addVanCustomer.value.pendCompletion == false) {
            this.addVanCustomer.value.pendCompletion = "";
        }
        else if (this.addVanCustomer.value.taxExempt == false) {
            this.addVanCustomer.value.taxExempt = "";
        }
        // if (this.addCardList.value.isActive == false) {
        //   this.addCardList.value.isActive = ""
        // }
        // if (this.addCardList.value.isActiveForSA == false) {
        //   this.addCardList.value.isActiveForSA = ""s
        // }
        var addObj = {
            "customerId": this.customerID,
            "proId": this.proCode,
            // "residential": this.addVanCustomer.value.residential,
            "customerType": '' + this.addVanCustomer.value.customerType,
            "accountNumber": this.accountNum,
            "customerName": '' + this.addVanCustomer.value.customerName,
            "creditLimit": '' + this.addVanCustomer.value.creditLimit,
            "terms": '' + this.addVanCustomer.value.terms,
            "source": '' + this.addVanCustomer.value.source,
            "paymentMethod": '' + this.addVanCustomer.value.paymentMethod,
            "doNotServe": '' + this.addVanCustomer.value.doNotServe,
            "poRequired": '' + this.addVanCustomer.value.poRequired,
            "donotServeNotes": '' + this.addVanCustomer.value.donotServeNotes,
            "pendCompletion": '' + this.addVanCustomer.value.pendCompletion,
            "taxExempt": '' + this.addVanCustomer.value.taxExempt,
            // "fromAddressValues": this.addAddressList.value.fromAddressValues,
            // "fromCardValues": this.addCardList.value.fromCardValues,
            "createdBy": this.loginData.emailId
        };
        console.log("ADD OBJ" + JSON.stringify(addObj));
        // this.addressArray = addObj.fromAddressValues
        // this.cardArray = addObj.fromCardValues
        console.log("addressArray OBJ" + JSON.stringify(this.addressArray));
        //  console.log("cardArray OBJ" + JSON.stringify(this.cardArray))
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/addVanlynkCustomerInfo', addObj)
            .subscribe(function (data) {
            var customerData = data.json();
            console.log("customerData" + JSON.stringify(customerData));
            if (customerData.status == 200) {
                var addressObj = {
                    "customerId": _this.customerID,
                    "proId": _this.proCode,
                    "firstName": '' + _this.addVanCustomer.value.firstName,
                    "lastName": '' + _this.addVanCustomer.value.lastName,
                    "userType": '' + _this.addVanCustomer.value.userType,
                    "email": '' + _this.addVanCustomer.value.email,
                    "phoneNumber": '' + _this.addVanCustomer.value.phoneNumber,
                    "phoneType": '' + _this.addVanCustomer.value.phoneType,
                    "dispatchTextNumber": '' + _this.addVanCustomer.value.dispatchTextNumber,
                    "invoiceEmail": '' + _this.addVanCustomer.value.invoiceEmail,
                    "sendInvoiceBy": '' + _this.addVanCustomer.value.sendInvoiceBy,
                    "unit": '' + _this.addVanCustomer.value.unit,
                    "zipCode": '' + _this.addVanCustomer.value.zipCode,
                    "city": '' + _this.addVanCustomer.value.city,
                    "state": '' + _this.addVanCustomer.value.state,
                    "latitude": '' + _this.coordinates.latitude,
                    "longitude": '' + _this.coordinates.longitude,
                    "address": '' + _this.addVanCustomer.value.address,
                    "adminNotes": '' + _this.addVanCustomer.value.adminNotes,
                    "createdBy": _this.loginData.emailId,
                    "resetPasswordURL": "http://topproz.in.s3-website-us-east-1.amazonaws.com/proz/resetPassword"
                };
                console.log("addressObj" + JSON.stringify(addressObj));
                _this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/addBatchAddressInfo', addressObj)
                    .subscribe(function (data) {
                    var response = data.json();
                    // if (response.status == 200) {
                    // let cardObj = {
                    //   cardInfoArray: this.cardArray,
                    //   customerId: this.customerID,
                    //   proId: this.loginData.loginCode,
                    //   createdBy: this.loginData.emailId
                    // }
                    // console.log("cardObj" + JSON.stringify(cardObj))
                    // this.http.post(Global.url + '/addBatchCardInfo', cardObj)
                    //   .subscribe(data => {
                    // var response = data.json();
                    // alert("roja "+this.addVanCustomer.value.doNotServe)
                    // alert("response"+response.status)
                    if (response.status == 200 && _this.addVanCustomer.value.doNotServe == true) {
                        alert("Work Order creation not allowed as this is a Do Not Serve Customer. ");
                        _this.router.navigate(['/proCustomer/listVanCustomers']);
                    }
                    else {
                        _this.router.navigate(['/workorder/addWorkOrder', _this.customerID]);
                        //  }
                        // })
                    }
                });
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    //IMAGE UPLOAD
    AddCustomerComponent.prototype.handleImage = function (file) {
        var _this = this;
        var picReader = new FileReader();
        picReader.onload = function (e) {
            var reader = e.target;
            _this.imagePreview = reader.result;
        };
        picReader.readAsDataURL(file);
    };
    AddCustomerComponent.prototype.select = function (event) {
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
            this.imagePreview = "assets/img/no-image.png";
        }
    };
    /* Image uploaded Name */
    AddCustomerComponent.prototype.imgfileUpload = function () {
        var _this = this;
        console.log("imgfileUpload calling");
        var url = _global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + "/imageUploadData";
        var formData = new FormData();
        var xhr = new XMLHttpRequest();
        formData.append("image", this.file2Upload);
        var config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        xhr.open("post", url, true);
        xhr.upload.onprogress = function (e) {
            if (e.lengthComputable) {
                _this.percentage = (e.loaded / e.total) * 100;
                _this.progressShow = true;
                _this.progressHide = false;
                if (_this.percentage === 100) {
                    _this.progressShow = false;
                    _this.progressHide = true;
                    // this.imageUploadVariable.nativeElement.value = "";
                    _this.img1 = false;
                }
            }
        };
        xhr.onerror = function (e) { };
        xhr.onload = function () {
            var a = JSON.parse(xhr.responseText);
            _global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].secimagePath = a.imagePath;
            _global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].documentName = a.name;
            console.log("GLObaL NAme" + _global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].documentName);
        };
        xhr.send(formData);
    };
    /* Image uploaded Name */
    AddCustomerComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    AddCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"], _utilities_imageupload__WEBPACK_IMPORTED_MODULE_4__["ImageUpload"], _utilities_customValidators__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"], _utilities_geocode_service__WEBPACK_IMPORTED_MODULE_10__["GeocodingService"]],
            selector: 'app-add-customer',
            template: __webpack_require__(/*! ./add-customer.component.html */ "./src/app/proz-customer/van-customers/add-customer/add-customer.component.html"),
            styles: [__webpack_require__(/*! ./add-customer.component.scss */ "./src/app/proz-customer/van-customers/add-customer/add-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _utilities_geocode_service__WEBPACK_IMPORTED_MODULE_10__["GeocodingService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());



/***/ }),

/***/ "./src/app/proz-customer/van-customers/edit-customer/edit-customer.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/edit-customer/edit-customer.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a>Customer</a>\r\n          </li>\r\n          <li>\r\n            <a (click)=\"list()\">List of Customers</a>\r\n          </li>\r\n          <li class=\"active\">Edit Customer</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Edit Customer</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered \">\r\n                      <div class=\"header gray\">\r\n                        Edit Customer\r\n                      </div>\r\n                      <div id=\"registration-form\">\r\n                        <form [formGroup]=\"editVanCustomer\" (ngSubmit)=\"onSubmit(buttonType)\">\r\n                          <!-- Customer Type -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"form-title\">\r\n                                Customer Type\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"customerTypeLbl\">\r\n                                      <b>Customer Type <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"radio\">\r\n                                      <label>\r\n                                        <input value=\"Residential\" type=\"radio\" class=\"colored-success\"\r\n                                          formControlName=\"customerType\">\r\n                                        <span class=\"text\">Residential </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"radio\">\r\n                                      <label>\r\n                                        <input value=\"Business\" type=\"radio\" class=\"colored-success\"\r\n                                          formControlName=\"customerType\">\r\n                                        <span class=\"text\">Business </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"leadSourceLbl\">\r\n                                  <b>Lead Source</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label>\r\n                                  {{customerDataInfo.leadSource}}\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n\r\n                            </div>\r\n                          </div> -->\r\n                          <!-- /Customer Type -->\r\n\r\n                          <!-- Account Settings -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"form-title\">\r\n                                Account Settings\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"customerNumberLbl\">\r\n                                      <b>Customer # </b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"\" value=\"{{customerId}}\"\r\n                                        readonly>\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"customerNameLbl\">\r\n                                      <b>Company/Customer Name <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                        formControlName=\"customerName\">\r\n                                    </span>\r\n                                    <!-- <div *ngIf=\"submitted && f.customerName.errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f.customerName.errors.required\"> [ngClass]=\"{ 'is-invalid': submitted && f.customerName.errors }\"\r\n                                        <p style=\"color: red; font-size: 11px\">Enter Customer Name</p>\r\n                                      </div>\r\n                                    </div> -->\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"creditLimitLbl\">\r\n                                      <b>Customer Credit Limit ($)</b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                        formControlName=\"creditLimit\">\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"termsLbl\">\r\n                                      <b>Terms <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <select class=\"form-control\" formControlName=\"terms\">\r\n                                      <option value=\"Upon Receipt\">Upon Receipt</option>\r\n                                      <option value=\"Net 15\">Net 15</option>\r\n                                      <option value=\"Net 30\">Net 30</option>\r\n                                      <option value=\"Net 45\">Net 45</option>\r\n                                    </select>\r\n                                  </div>\r\n                                  <!-- <div *ngIf=\"submitted && f.terms.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.terms.errors.required\"> [ngClass]=\"{ 'is-invalid': submitted && f.terms.errors }\"\r\n                                      <p style=\"color: red; font-size: 11px\">Select Terms</p>\r\n                                    </div> -->\r\n                                  <!-- </div> -->\r\n                                </div>\r\n                                <!-- <div class=\"col-sm-3\">\r\n                                                                <div class=\"form-group\">\r\n                                                                  <span class=\"input-icon icon-right\">\r\n                                                                    <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"terms\">\r\n                                                                  </span>\r\n                                                                </div>\r\n                                                              </div> -->\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"sourceLbl\">\r\n                                      <b>Source </b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <select class=\"form-control\" formControlName=\"source\">\r\n                                      <option value=\"Google\">Google</option>\r\n                                      <option value=\"Yelp\">Yelp</option>\r\n                                      <option value=\"Home Advisor\">Home Advisor</option>\r\n                                      <option value=\"Thumbtack\">Thumbtack</option>\r\n                                      <option value=\"Word of Mouth\">Word of Mouth</option>\r\n                                      <option value=\"Money Mailer\">Money Mailer</option>\r\n                                      <option value=\"HomeMag\">HomeMag</option>\r\n                                      <option value=\"Angies List\">Angies List</option>\r\n                                    </select>\r\n                                  </div>\r\n\r\n                                </div> -->\r\n\r\n\r\n                                <div *ngIf=\"customerDataInfo?.source =='TopProz'; else elseBlock\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <input type=\"text\" class=\"form-control\" readonly placeholder=\"\"\r\n                                        formControlName=\"source\" data-bv-field=\"row-title\" />\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <ng-template #elseBlock>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <select type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"source\"\r\n                                          data-bv-field=\"row-title\"\r\n                                          [ngClass]=\"{ 'is-invalid': submitted && f.source.errors }\">\r\n                                          <option value=\"\">Select</option>\r\n                                          <!-- <option *ngFor=\"let data of sourceData\" value={{data.sourceType}}>\r\n                                            {{data.sourceType}}\r\n                                          </option> -->\r\n                                          <option *ngFor=\"let data of vendorList\" value={{data.vendorName}}>\r\n                                            {{data.vendorName}}\r\n                                          </option>\r\n                                        </select>\r\n                                        <div *ngIf=\"submitted && f.source.errors\" class=\"invalid-feedback\">\r\n                                          <div *ngIf=\"f.source.errors.required\">\r\n                                            <p style=\"color: red; font-size: 11px\">Select Source</p>\r\n                                          </div>\r\n                                        </div>\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </ng-template>\r\n\r\n\r\n\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"paymentMethodLbl\">\r\n                                      <b>Payment Method <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                        formControlName=\"paymentMethod\" data-bv-field=\"row-title\">\r\n                                        <option value=\"\">Select</option>\r\n                                        <option *ngFor=\"let data of paymentData\" value={{data.paymentMethods}}>\r\n                                          {{data.paymentMethods}}\r\n                                        </option>\r\n                                      </select>\r\n                                      <!-- <div *ngIf=\"submitted && f.paymentMethod.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.paymentMethod.errors.required\">\r\n                                          <p style=\"color: red; font-size: 11px\">Select Payment Method</p>\r\n                                        </div>\r\n                                      </div> -->\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                        formControlName=\"paymentMethod\">\r\n                                        <option value=\"Cash\">Cash</option>\r\n                                        <option value=\"Check\">Check</option>\r\n                                        <option value=\"Credit Card\">Credit Card</option>\r\n                                        <option value=\"Direct Deposit\">Direct Deposit</option>\r\n                                        <option value=\"Finance\">Finance</option>\r\n                                      </select>\r\n                                      <div *ngIf=\"submitted && f.paymentMethod.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f.paymentMethod.errors.required\"> [ngClass]=\"{ 'is-invalid': submitted && f.paymentMethod.errors }\"\r\n                                          <p style=\"color: red; font-size: 11px\">Select Payment Method</p>\r\n                                        </div>\r\n                                      </div>\r\n                                    </span>\r\n                                  </div>\r\n                                </div> -->\r\n\r\n                              </div>\r\n\r\n                              <div class=\"row\">\r\n\r\n                                <!-- <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"checkbox\">\r\n                                      <label>\r\n                                        <input type=\"checkbox\" class=\"colored-success\" formControlName=\"doNotServe\"\r\n                                          [(ngModel)]=\"doNotServe\" (ngModelChange)=\"donotserve(doNotServe)\">\r\n                                        <span class=\"text\">Do Not Serve </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div> -->\r\n                                <div class=\"col-sm-3\" *ngIf=\"showData\">\r\n                                  <div class=\"form-group\" *ngIf=\"customerDataInfo.doNotServe == 'true'\">\r\n                                    <div class=\"checkbox\">\r\n                                      <label>\r\n                                        <input type=\"checkbox\" class=\"colored-success\" [(ngModel)]=\"doNotServe\"\r\n                                          (ngModelChange)=\"donotCheck(doNotServe)\" formControlName=\"doNotServe\"\r\n                                          [checked]=\"true\">\r\n                                        <span class=\"text\">Do Not Serve</span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"form-group\" *ngIf=\"customerDataInfo.doNotServe == 'false'\">\r\n                                    <div class=\"checkbox\">\r\n                                      <label>\r\n                                        <input type=\"checkbox\" class=\"colored-success\" formControlName=\"doNotServe\"\r\n                                          [(ngModel)]=\"doNotServe\" (ngModelChange)=\"donotCheck(doNotServe)\"\r\n                                          [checked]=\"false\">\r\n                                        <span class=\"text\">Do Not Serve </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"checkbox\">\r\n                                      <label>\r\n                                        <input type=\"checkbox\" class=\"colored-success\" formControlName=\"taxExempt\">\r\n                                        <span class=\"text\">Tax Exempt </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                  </div>\r\n                                </div> -->\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"porLbl\">\r\n                                      <b>P. O. Required </b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-1\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"radio\">\r\n                                      <label>\r\n                                        <input value=\"Yes\" type=\"radio\" class=\"colored-success\"\r\n                                          formControlName=\"poRequired\">\r\n                                        <span class=\"text\">Yes </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-2\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"radio\">\r\n                                      <label>\r\n                                        <input value=\"No\" type=\"radio\" class=\"colored-success\"\r\n                                          formControlName=\"poRequired\">\r\n                                        <span class=\"text\">No </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\" *ngIf=\"notes == true \">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"donotServeNotesLbl\">\r\n                                        <b>Do Not Serve Notes </b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"donotServeNotes\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Account Settings -->\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <hr class=\"hr-gray-thick\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <!-- Collapsible -->\r\n\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"panel-group accordion\" id=\"accordions\">\r\n                                <!-- Address - Collapsible -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordions\"\r\n                                        href=\"#collapseOnes\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i>Billing Details\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseOnes\" class=\"panel-collapse collapse in\">\r\n                                    <!-- <form [formGroup]=\"addAddressList\"> -->\r\n                                    <!-- <ng-container formArrayName=\"fromAddressValues\"> -->\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"firstNameLbl\">\r\n                                                  <b>First Name<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\"\r\n                                                    formControlName=\"firstName\">\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"lastNameLbl\">\r\n                                                  <b>Last Name<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\"\r\n                                                    formControlName=\"lastName\">\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"userTypeLbl\">\r\n                                                  <b>User Type<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <select class=\"form-control\" formControlName=\"userType\">\r\n                                                  <option value=\"Owner\">Owner</option>\r\n                                                  <option value=\"Tenant\">Tenant</option>\r\n                                                  <option value=\"Manager\">Manager</option>\r\n                                                  <option value=\"Representative\">Representative</option>\r\n                                                </select>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"emailLbl\">\r\n                                                  <b>Email<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <!-- <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"email\">\r\n                                                </span>\r\n                                              </div>\r\n                                            </div> -->\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"email\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"email\"\r\n                                                    pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n                                                </span>\r\n\r\n                                                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                                                  <div style=\"color: red; font-size: 11px\"\r\n                                                    *ngIf=\"f.email.errors.required\">Enter Email</div>\r\n                                                  <div style=\"color: red; font-size: 11px\"\r\n                                                    *ngIf=\"f.email.errors.pattern\">\r\n                                                    Email must be a\r\n                                                    valid email </div>\r\n                                                  <div style=\"color: red; font-size: 11px\" *ngIf=\"mailError\">\r\n                                                    All Ready Exist </div>\r\n                                                </div>\r\n\r\n                                              </div>\r\n\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"phoneNumberLbl\">\r\n                                                  <b>Phone Number<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"phoneNumber\">\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"phoneTypeLbl\">\r\n                                                  <b>Phone Type </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <select class=\"form-control\" formControlName=\"phoneType\">\r\n                                                  <option value=\"Cell\">Cell</option>\r\n                                                  <option value=\"Home\">Home</option>\r\n                                                  <option value=\"Work\">Work</option>\r\n                                                  <option value=\"Fax\">Fax</option>\r\n                                                </select>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"dispatchTextNumberLbl\">\r\n                                                  <b>Dispatch Text Number</b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"dispatchTextNumber\">\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"adminNotesLbl\">\r\n                                                  <b>Admin Notes </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"adminNotes\">\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n\r\n                                            <!-- <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"propertyNameLbl\">\r\n                                                      <b>Property Name </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        formControlName=\"propertyName\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div> -->\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"invoiceEmailLbl\">\r\n                                                  <b>Invoice Email<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"invoiceEmail\"\r\n                                                    pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.invoiceEmail.errors }\">\r\n                                                </span>\r\n\r\n                                                <div *ngIf=\"submitted && f.invoiceEmail.errors\"\r\n                                                  class=\"invalid-feedback\">\r\n                                                  <div style=\"color: red; font-size: 11px\"\r\n                                                    *ngIf=\"f.invoiceEmail.errors.required\">Enter Invoice Email</div>\r\n                                                  <div style=\"color: red; font-size: 11px\"\r\n                                                    *ngIf=\"f.invoiceEmail.errors.pattern\">\r\n                                                    Invoice Email must be a\r\n                                                    valid invoice email </div>\r\n                                                  <div style=\"color: red; font-size: 11px\" *ngIf=\"mailError\">\r\n                                                    All Ready Exist </div>\r\n                                                </div>\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"sendInvoiceToLbl\">\r\n                                                  <b>Send Invoice By<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                  formControlName=\"sendInvoiceBy\">\r\n                                                  <option value=\"E-Mail\">E-Mail</option>\r\n                                                  <option value=\"Cell\">Cell</option>\r\n                                                  <option value=\"US Mail\">US Mail</option>\r\n                                                </select>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"serviceAddressLbl\">\r\n                                                  <b>Street Address<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"address\">\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"unitLbl\">\r\n                                                  <b>Unit/APT #</b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"unit\">\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"cityLbl\">\r\n                                                  <b>City<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"city\">\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"stateLbl\">\r\n                                                  <b>State<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                  formControlName=\"state\">\r\n                                                  <option value=\"California\">California</option>\r\n                                                  <option value=\"Texas\">Texas</option>\r\n                                                  <option value=\"Florida\">Florida</option>\r\n                                                </select>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n\r\n\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"zipCodeLbl\">\r\n                                                  <b>Zip Code<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                    formControlName=\"zipCode\">\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <!-- </ng-container> -->\r\n                                    <!-- </form> -->\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Billing Address - Collapsible -->\r\n                                <!-- Pictures -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseThird\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Picture\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseThird\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"serviceIDLbl\">\r\n                                                  <b>Add Picture</b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <div class=\"controls\">\r\n                                                  <div data-provides=\"fileupload\" class=\"fileupload fileupload-new\">\r\n                                                    <div style=\"width: 100px; height: 120px;\"\r\n                                                      class=\"fileupload-new thumbnail\">\r\n                                                      <img [src]=\"imagePreview\" style=\"height:120px;width:100px;\">\r\n                                                    </div>\r\n\r\n                                                    <div>\r\n                                                      <input #imageUpload type=\"file\" accept=\"image/*\" id=\"avatar\"\r\n                                                        (change)=\"select($event)\" #fileInput>\r\n                                                      <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!img\"\r\n                                                        (click)=\"imgfileUpload()\">Upload</button>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div *ngIf=\"progressShow\" class=\"progress-bar1 blue stripes\">\r\n                                                  <span [style.width.%]=\"percentage\">\r\n                                                    <p style=\"text-align: center;color:black;font-size:18px;\">\r\n                                                      {{percentage}}%</p>\r\n                                                  </span>\r\n                                                </div>\r\n                                                <br>\r\n                                                <div *ngIf=\"progressHide\" class=\"alert alert-block alert-success\"\r\n                                                  style=\"height:3px;\">\r\n                                                  <h4 class=\"alert-heading\" style=\"margin-top:-5px;text-align:center;\">\r\n                                                    Image\r\n                                                    Uploaded\r\n                                                    Successfully</h4>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n\r\n                                  </div>\r\n                                </div>\r\n                                <!-- Pictures -->\r\n                                <!-- Credit Card List - Collapsible -->\r\n                                <!-- <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseTwos\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Credit Card List\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseTwos\" class=\"panel-collapse collapse\">\r\n\r\n                                    <form [formGroup]=\"addCardList\">\r\n                                      <ng-container formArrayName=\"fromCardValues\">\r\n                                        <div class=\"panel-body border-red\"\r\n                                          *ngFor=\"let item of addCardList.get('fromCardValues').controls; let i = index;\"\r\n                                          [formGroupName]=\"i\">\r\n                                          <div class=\"form-title\">\r\n                                            Credit Card List\r\n                                            <a class=\"btn btn-xs btn-danger shiny\" style=\"margin-left:93% \"\r\n                                              (click)=\"delCreditCard(i)\"><i class=\"fa fa-trash-o\"></i>\r\n                                            </a>\r\n                                          </div> -->\r\n                                <!-- Credit Card List -->\r\n                                <!-- <div class=\"row\">\r\n                                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n\r\n\r\n\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-12\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <hr class=\"hr-gray\">\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"nameOnCardLbl\">\r\n                                                      <b>Name on Card </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        formControlName=\"nameOnCard\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"cardTypeLbl\">\r\n                                                      <b>Card Type </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <select class=\"form-control\" formControlName=\"cardType\">\r\n                                                      <option value=\"MASTER\">MASTER</option>\r\n                                                      <option value=\"VISA\">VISA</option>\r\n                                                      <option value=\"A-MEX\">A-MEX</option>\r\n                                                      <option value=\"Other\">OTHER</option>\r\n                                                    </select>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"cardNumberLbl\">\r\n                                                      <b>Card Number </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        formControlName=\"cardNumber\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"crvNumberLbl\">\r\n                                                      <b>CRV Number </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        formControlName=\"crvNumber\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"cardNumberLbl\">\r\n                                                      <b>Expires On </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <div class=\"col-sm-6\">\r\n                                                      <select class=\"form-control\" id=\"selectMonth\" name=\"status\"\r\n                                                        data-bv-field=\"row-title\" formControlName=\"expiresOnDate\">\r\n                                                        <option value=\"\">--Month--</option>\r\n                                                        <option value=\"JAN\">JAN</option>\r\n                                                        <option value=\"FEB\">FEB</option>\r\n                                                        <option value=\"MAR\">MAR</option>\r\n                                                        <option value=\"APR\">APR</option>\r\n                                                        <option value=\"MAY\">MAY</option>\r\n                                                        <option value=\"JUN\">JUN</option>\r\n                                                        <option value=\"JUL\">JUL</option>\r\n                                                        <option value=\"AUG\">AUG</option>\r\n                                                        <option value=\"SEP\">SEP</option>\r\n                                                        <option value=\"OCT\">OCT</option>\r\n                                                        <option value=\"NOV\">NOV</option>\r\n                                                        <option value=\"DEC\">DEC</option>\r\n                                                      </select>\r\n                                                    </div>\r\n\r\n                                                    <div class=\"col-sm-6\">\r\n                                                      <select class=\"form-control\" id=\"selectYear\" name=\"status\"\r\n                                                        data-bv-field=\"row-title\" formControlName=\"expiresOnYear\">\r\n                                                        <option value=\"\">--Year--</option>\r\n                                                        <option value=\"2030\">2030</option>\r\n                                                        <option value=\"2029\">2029</option>\r\n                                                        <option value=\"2028\">2028</option>\r\n                                                        <option value=\"2027\">2027</option>\r\n                                                        <option value=\"2026\">2026</option>\r\n                                                        <option value=\"2025\">2025</option>\r\n                                                        <option value=\"2024\">2024</option>\r\n                                                        <option value=\"2023\">2023</option>\r\n                                                        <option value=\"2022\">2022</option>\r\n                                                        <option value=\"2021\">2021</option>\r\n                                                        <option value=\"2020\">2020</option>\r\n                                                        <option value=\"2019\">2019</option>\r\n                                                      </select>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <div class=\"checkbox\">\r\n                                                      <label>\r\n                                                        <input type=\"checkbox\" class=\"colored-success\"\r\n                                                          formControlName=\"isActive\">\r\n                                                        <span class=\"text\">Is Active </span>\r\n                                                      </label>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <div class=\"checkbox\">\r\n                                                      <label>\r\n                                                        <input type=\"checkbox\" class=\"colored-success\"\r\n                                                          formControlName=\"isActiveForSA\">\r\n                                                        <span class=\"text\">Is Active for SA </span>\r\n                                                      </label>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"addressOnCardLbl\">\r\n                                                      <b>Address On Card</b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        formControlName=\"addressOnCard\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"stateLbl\">\r\n                                                      <b>State </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                      formControlName=\"cardState\">\r\n                                                      <option value=\"California\">California</option>\r\n                                                      <option value=\"Texas\">Texas</option>\r\n                                                      <option value=\"Florida\">Florida</option>\r\n                                                    </select>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"cityLbl\">\r\n                                                      <b>City </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        formControlName=\"cardCity\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"zipCodeLbl\">\r\n                                                      <b>Zip Code </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        formControlName=\"cardZipCode\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"adminNotesLbl\">\r\n                                                      <b>Notes </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-9\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                        formControlName=\"cardNotes\">\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-12\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <hr class=\"hr-gray\">\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div> -->\r\n                                <!-- /Credit Card List -->\r\n\r\n                                <!-- </div>\r\n                                        <div class=\"panel-body border-red\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <button type=\"submit\" class=\"btn btn-blue\"\r\n                                                  (click)=\"addCardFieldValue()\"><i class=\"fa fa-plus\"></i> Add New\r\n                                                  Credit\r\n                                                  Card</button>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </ng-container>\r\n                                    </form>\r\n                                    <br>\r\n\r\n                                  </div>\r\n                                </div> -->\r\n                                <!-- /Credit Card List - Collapsible -->\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Collapsible -->\r\n\r\n\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <hr class=\"hr-gray-thick\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n\r\n                          <!-- Buttons -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-2 button-center\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <button type=\"button\" class=\"btn btn-blue\" (click)=\"onSubmit('save')\"><i\r\n                                    class=\"fa fa-check\"></i>\r\n                                  Update</button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <button type=\"submit\" class=\"btn btn-gray\" (click)=\"cancelCustomer()\"><i\r\n                                    class=\"fa fa-check\"></i>\r\n                                  Cancel</button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-4 button-center\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Buttons -->\r\n\r\n\r\n                        </form>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/proz-customer/van-customers/edit-customer/edit-customer.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/edit-customer/edit-customer.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.checkbox, .radio {\n  position: relative;\n  display: block;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\n.col-sm-6 {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.button-center {\n  text-align: center; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei1jdXN0b21lci92YW4tY3VzdG9tZXJzL2VkaXQtY3VzdG9tZXIvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3otY3VzdG9tZXJcXHZhbi1jdXN0b21lcnNcXGVkaXQtY3VzdG9tZXJcXGVkaXQtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxlQUFlO0VBQ2Ysa0NBQWlDO0VBRWpDO3NCQUNpQjtFQUdqQixnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjswQkFDc0IsRUFFeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksc0NBQXFDLEVBRXhDOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCwyQkFBMEI7RUFDMUIsOEJBQTZCLEVBQ2hDOztBQUVEO0VBQ0ksNkJBQTRCO0VBQzVCLDhCQUE2QixFQUNoQzs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2Qzs7QUFFRDtFQUNBLG1CQUFrQixFQUNqQjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixrQ0FBaUM7RUFDakMsNENBQTJDLEVBQzlDOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLGtDQUFpQyxFQUNwQzs7QUFFRDtFQUNJLDBCQUF5QixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL3Byb3otY3VzdG9tZXIvdmFuLWN1c3RvbWVycy9lZGl0LWN1c3RvbWVyL2VkaXQtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS10aXRsZXtcclxuICAgICBjb2xvcjogICM1ZGIyZmY7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNWRiMmZmO1xyXG4gXHJcbiAgICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgICBwYWRkaW5nOiA4cHggMDsqLyAgICBcclxuICAgICAvLyBjb2xvcjogICM3ZTM3OTQ7XHJcbiAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0O1xyXG4gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuIFxyXG4gfVxyXG4gXHJcbiAubWFuZGF0b3J5e1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuIH1cclxuIFxyXG4gLmhyLWdyYXktdGhpY2t7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbiB9IFxyXG4gXHJcbiAuaHItZ3JheXsgICAgXHJcbiAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuICAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgIzdlMzc5NCAhaW1wb3J0YW50O1xyXG4gfSBcclxuIFxyXG4gaW5wdXR7XHJcbiAgICAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG4gXHJcbiAubW9ja3tcclxuICAgICBjb2xvcjogcmVkOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5tb2NrLWNvbmZ7XHJcbiAgICAgY29sb3I6IGdyZWVuOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5pbnByb2dyZXNze1xyXG4gICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLnRocmVlLWJvcmRlcmVke1xyXG4gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbiB9XHJcbiBcclxuIC5jaGVja2JveCwgLnJhZGlvIHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5jb2wtc20tNiB7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gIFxyXG4gLmJ0bi1ncmF5e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnRuLWJsdWV7ICAgIFxyXG4gICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnV0dG9uLWNlbnRlcntcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZS5jb2xsYXBzZWQge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6aG92ZXI6YWZ0ZXIge1xyXG4gICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlOmFmdGVyIHtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/proz-customer/van-customers/edit-customer/edit-customer.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/edit-customer/edit-customer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: EditCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCustomerComponent", function() { return EditCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utilities_geocode_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utilities/geocode.service */ "./src/utilities/geocode.service.ts");









var MAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var isEmail = function (email) { return MAIL_PATTERN.test(email); };
var EditCustomerComponent = /** @class */ (function () {
    function EditCustomerComponent(beyond, router, formBuilder, route, http, toastr, geocodingService, ngZone) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.geocodingService = geocodingService;
        this.ngZone = ngZone;
        this.addressArray = [];
        //cardArray: any = []
        this.addressCheck = false;
        this.disableSubmit = false;
        this.coordinates = {
            latitude: 0,
            longitude: 0
        };
        this.showData = false;
        this.imagePreview = "../../ assets / img / avatars / default_person.jpg";
    }
    EditCustomerComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.customerId = this.route.snapshot.params['customerId'];
        console.log("customer id" + this.customerId);
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proCode = this.loginData.loginCode;
        console.log("loginData" + JSON.stringify(this.loginData.loginCode));
        // this.getCustomerId()
        this.listPaymentMethods();
        this.getListOfStates();
        this.viewCustomer();
        this.viewImageData();
        // this.listSource();
        this.getVendorList();
        this.editVanCustomer = this.formBuilder.group({
            customerType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            accountNumber: [''],
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            creditLimit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            source: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            paymentMethod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            doNotServe: [''],
            poRequired: [''],
            // yesPoRequired: ['', Validators.required],
            // noPoRequired: ['', Validators.required],
            donotServeNotes: [''],
            customerImage: [''],
            pendCompletion: [''],
            taxExempt: [''],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(MAIL_PATTERN)]],
            //  email: ['', Validators.required],
            // email: ['', [Validators.required, Validators.email, , Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],      
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            phoneType: [''],
            dispatchTextNumber: [''],
            propertyName: [''],
            sendInvoiceBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            invoiceEmail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(MAIL_PATTERN)]],
            unit: [''],
            zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            crossSt1: [''],
            crossSt2: [''],
            adminNotes: [''],
        });
        // this.addAddressList = this.formBuilder.group({
        //   fromAddressValues: this.formBuilder.array([])
        // })
        // this.addCardList = this.formBuilder.group({
        //   fromCardValues: this.formBuilder.array([])
        // })
    };
    // THIS IS FOR CALLING ADDRESS INFO FOR MULTIPLE TIMES -- START
    // createAddressInfo(addressDataInfo): FormGroup {
    //   console.log("in address info" + JSON.stringify(addressDataInfo))
    //   return this.formBuilder.group({
    //     firstName: addressDataInfo.firstName,
    //     lastName: ['', Validators.required],
    //     userType: ['', Validators.required],
    //     email: ['', Validators.required],
    //     phoneNumber: ['', Validators.required],
    //     phoneType: ['', Validators.required],
    //     dispatchTextNumber: ['', Validators.required],
    //     propertyName: ['', Validators.required],
    //     sendInvoice: ['', Validators.required],
    //     address: ['', Validators.required],
    //     invoiceEmail: ['', Validators.required],
    //     unit: ['', Validators.required],
    //     zipCode: ['', Validators.required],
    //     city: ['', Validators.required],
    //     state: ['', Validators.required],
    //     crossSt1: ['', Validators.required],
    //     crossSt2: ['', Validators.required],
    //     adminNotes: ['', Validators.required],
    //   });
    // }
    // addFieldValue() {
    //   this.items = this.addAddressList.get('fromAddressValues') as FormArray;
    //   this.items.push(this.createAddressInfo(''));
    //   this.checkValidationAddress()
    // }
    // get addressInfoValues(): FormArray {
    //   return this.addAddressList.get('fromAddressValues') as FormArray;
    // }
    // deleteFieldValue(index: number) {
    //   this.addressInfoValues.removeAt(index);
    //   this.checkValidationAddress()
    // }
    // MULTIPLE CARD DETAILS VALUES INSERTION FUNCTIONS
    // BUTTON DISABLING FUNCTION AND ALSO CHECKING VALIDATION -- START
    // checkValidationAddress() {
    //   this.addressCheck = true
    //   this.addAddressList.get('fromAddressValues').value.forEach((e) => {
    //     console.log(e)
    //     if (e.firstName == "" || e.lastName == "" || e.phoneNumber == "" || e.email == "" || e.propertyName == "" || e.address == "") {
    //       console.log('The empty')
    //       this.addressCheck = true
    //       return false;
    //     } if (e.firstName == null || e.lastName == null || e.phoneNumber == null || e.email == null || e.propertyName == null || e.address == null) {
    //       console.log('The empty')
    //       this.addressCheck = true
    //       return false;
    //     } else if (e.firstName !== "" && e.lastName !== "" && e.phoneNumber !== "" && e.email !== "" && e.propertyName !== "" && e.address !== "") {
    //       console.log('The not empty')
    //       this.addressCheck = false
    //       return false;
    //     }
    //   })
    // }
    // BUTTON DISABLING FUNCTION AND ALSO CHECKING VALIDATIO -- END
    // THIS IS FOR CALLING ADDRESS INFO FOR MULTIPLE TIMES ------ END
    // createCardInfo() {
    //   console.log("in card info")
    //   return this.formBuilder.group({
    //     nameOnCard: ['', Validators.required],
    //     cardType: ['', Validators.required],
    //     cardNumber: ['', Validators.required],
    //     crvNumber: ['', Validators.required],
    //     expiresOnDate: ['', Validators.required],
    //     expiresOnYear: ['', Validators.required],
    //     isActive: ['', Validators.required],
    //     isActiveForSA: ['', Validators.required],
    //     addressOnCard: ['', Validators.required],
    //     cardState: ['', Validators.required],
    //     cardCity: ['', Validators.required],
    //     cardZipCode: ['', Validators.required],
    //     cardNotes: ['', Validators.required],
    //   });
    // }
    // addCardFieldValue() {
    //   this.items = this.addCardList.get('fromCardValues') as FormArray;
    //   this.items.push(this.createCardInfo());
    //   // this.checkValidationAddress()
    // }
    // get creditCardValues(): FormArray {
    //   return this.addCardList.get('fromCardValues') as FormArray;
    // }
    // delCreditCard(index: number) {
    //   this.creditCardValues.removeAt(index);
    //   // this.checkValidationAddress()
    // }
    //Get vendor List Starts
    EditCustomerComponent.prototype.getVendorList = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/listOfVendors' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.vendorList = response.response;
                console.log("Vendor List", JSON.stringify(_this.vendorList));
                _this.vendorListResponse = true;
            }
            else {
                _this.vendorListResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    Object.defineProperty(EditCustomerComponent.prototype, "f", {
        //Get vendor List Ends
        get: function () { return this.editVanCustomer.controls; },
        enumerable: true,
        configurable: true
    });
    EditCustomerComponent.prototype.onSubmit = function (a) {
        var _this = this;
        console.log("hii" + !isEmail(this.editVanCustomer.value.email));
        if (a == "save") {
            var addressMixed = this.editVanCustomer.value.address + "," + this.editVanCustomer.value.city + "," + this.editVanCustomer.value.state + "," + this.editVanCustomer.value.zipCode;
            console.log(addressMixed);
            this.submitted = true;
            if (this.editVanCustomer.value.customerType == '') {
                return;
            }
            else if (this.editVanCustomer.value.customerName == '') {
                return;
            }
            else if (this.editVanCustomer.value.terms == '') {
                return;
            }
            else if (this.editVanCustomer.value.paymentMethod == '') {
                return;
            }
            else if (this.editVanCustomer.value.firstName == '') {
                return;
            }
            else if (this.editVanCustomer.value.lastName == '') {
                return;
            }
            else if (this.editVanCustomer.value.userType == '') {
                return;
            }
            else if (!isEmail(this.editVanCustomer.value.email)) {
                return;
            }
            else if (this.editVanCustomer.value.phoneNumber == '') {
                return;
            }
            else if (this.editVanCustomer.value.sendInvoiceBy == '') {
                return;
            }
            else if (!isEmail(this.editVanCustomer.value.invoiceEmail)) {
                return;
            }
            else if (this.editVanCustomer.value.address == '') {
                return;
            }
            else if (this.editVanCustomer.value.city == '') {
                return;
            }
            else if (this.editVanCustomer.value.state == '') {
                return;
            }
            else if (this.editVanCustomer.value.zipCode == '') {
                return;
            }
            else {
                this.geocodingService.getLatLongViaZipcode(addressMixed)
                    .subscribe(function (address) {
                    console.log(address);
                    if (address == undefined || address == '') {
                        _this.coordinates.latitude = 0;
                        _this.coordinates.longitude = 0;
                    }
                    else {
                        var coordObj = {
                            lat: address.lat,
                            lng: address.lng,
                        };
                        _this.coordinates.latitude = address.lat;
                        _this.coordinates.longitude = address.lng;
                    }
                    _this.ngZone.run(function () { return _this.save(); });
                });
            }
        }
        if (a == "workorder") {
            var addressMixed = this.editVanCustomer.value.address + "," + this.editVanCustomer.value.city + "," + this.editVanCustomer.value.state + "," + this.editVanCustomer.value.zipCode;
            console.log(addressMixed);
            this.submitted = true;
            if (this.editVanCustomer.value.customerType == '') {
                return;
            }
            else if (this.editVanCustomer.value.customerName == '') {
                return;
            }
            else if (this.editVanCustomer.value.terms == '') {
                return;
            }
            else if (this.editVanCustomer.value.paymentMethod == '') {
                return;
            }
            else if (this.editVanCustomer.value.firstName == '') {
                return;
            }
            else if (this.editVanCustomer.value.lastName == '') {
                return;
            }
            else if (this.editVanCustomer.value.userType == '') {
                return;
            }
            else if (this.editVanCustomer.value.email == '') {
                return;
            }
            else if (this.editVanCustomer.value.phoneNumber == '') {
                return;
            }
            else if (this.editVanCustomer.value.sendInvoiceBy == '') {
                return;
            }
            else if (this.editVanCustomer.value.invoiceEmail == '') {
                return;
            }
            else if (this.editVanCustomer.value.address == '') {
                return;
            }
            else if (this.editVanCustomer.value.city == '') {
                return;
            }
            else if (this.editVanCustomer.value.state == '') {
                return;
            }
            else if (this.editVanCustomer.value.zipCode == '') {
                return;
            }
            else {
                this.geocodingService.getLatLongViaZipcode(addressMixed)
                    .subscribe(function (address) {
                    console.log(address);
                    if (address == undefined || address == '') {
                        _this.coordinates.latitude = 0;
                        _this.coordinates.longitude = 0;
                    }
                    else {
                        var coordObj = {
                            lat: address.lat,
                            lng: address.lng,
                        };
                        _this.coordinates.latitude = address.lat;
                        _this.coordinates.longitude = address.lng;
                    }
                    _this.ngZone.run(function () { return _this.save(); });
                });
            }
        }
    };
    EditCustomerComponent.prototype.updateCustomer = function () {
        this.router.navigate(['/proCustomer/listVanCustomers']);
    };
    EditCustomerComponent.prototype.cancelCustomer = function () {
        this.router.navigate(['/proCustomer/listVanCustomers']);
    };
    // view employee starts
    EditCustomerComponent.prototype.viewCustomer = function () {
        var _this = this;
        console.log("view customer id" + this.customerId);
        console.log("loginCode" + this.loginData.loginCode);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getVanlynkCustomerDetails/' + this.customerId + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var customerData = data.json();
            if (customerData.status == 200) {
                _this.customerDataInfo = customerData.customerInfo[0];
                _this.addressDataInfo = customerData.addressInfo[0];
                // // this.customerDataInfo.source = undefined;
                if (_this.customerDataInfo.doNotServe == 'true') {
                    _this.notes = true;
                }
                else {
                    _this.notes = false;
                }
                console.log("customerDataInfo" + JSON.stringify(_this.customerDataInfo));
                console.log("addressDataInfo" + JSON.stringify(_this.addressDataInfo));
                // console.log("creditDataInfo" + JSON.stringify(this.creditDataInfo))
                _this.editVanCustomer = _this.formBuilder.group({
                    // customerId: [this.customerDataInfo.customerId, Validators.required],
                    customerType: [_this.customerDataInfo.customerType, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    accountNumber: [_this.customerDataInfo.accountNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    customerName: [_this.customerDataInfo.customerName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    creditLimit: [_this.customerDataInfo.creditLimit, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    terms: [_this.customerDataInfo.terms, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    source: [_this.customerDataInfo.source, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    paymentMethod: [_this.customerDataInfo.paymentMethod, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    doNotServe: [_this.customerDataInfo.doNotServe],
                    poRequired: [_this.customerDataInfo.poRequired, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    donotServeNotes: [_this.customerDataInfo.doNotServeNotes],
                    pendCompletion: [_this.customerDataInfo.pendCompletion, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    taxExempt: [_this.customerDataInfo.taxExempt, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    firstName: [_this.addressDataInfo.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    lastName: [_this.addressDataInfo.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    userType: [_this.addressDataInfo.userType, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    email: [_this.addressDataInfo.emailId, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    phoneNumber: [_this.addressDataInfo.phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    phoneType: [_this.addressDataInfo.phoneType, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    dispatchTextNumber: [_this.addressDataInfo.dispatchTextNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    propertyName: [_this.addressDataInfo.propertyName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    sendInvoiceBy: [_this.addressDataInfo.sendInvoiceBy, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    address: [_this.addressDataInfo.address, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    invoiceEmail: [_this.addressDataInfo.invoiceEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    unit: [_this.addressDataInfo.unit, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    zipCode: [_this.addressDataInfo.zipCode, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    city: [_this.addressDataInfo.city, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    state: [_this.addressDataInfo.state, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    crossSt1: [_this.addressDataInfo.crossSt1, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    crossSt2: [_this.addressDataInfo.crossSt2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    adminNotes: [_this.addressDataInfo.adminNotes, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                });
                console.log("views" + JSON.stringify(_this.customerDataInfo.doNotServe));
                // this.setAddress()
                //this.setCreditCard()
                _this.showData = true;
            }
            else {
                _this.showData = false;
            }
        });
    };
    EditCustomerComponent.prototype.setAddress = function () {
        var _this = this;
        console.log("in set adress");
        var control = this.addAddressList.controls.fromAddressValues;
        console.log("length" + this.addressDataInfo.length);
        this.addressDataInfo.forEach(function (x, i) {
            console.log(x);
            control.push(_this.formBuilder.group({
                // proId: this.loginData.loginCode,
                firstName: x.firstName,
                lastName: x.lastName,
                userType: x.userType,
                email: x.emailId,
                phoneNumber: x.phoneNumber,
                phoneType: x.phoneType,
                dispatchTextNumber: x.dispatchTextNumber,
                propertyName: x.propertyName,
                sendInvoiceBy: x.sendInvoiceBy,
                address: x.address,
                invoiceEmail: x.invoiceEmail,
                unit: x.unit,
                zipCode: x.zipCode,
                city: x.city,
                state: x.state,
                crossSt1: x.crossSt1,
                crossSt2: x.crossSt2,
                adminNotes: x.adminNotes,
            }));
            if (i == _this.addressDataInfo.length - 1) {
                return control;
            }
        });
    };
    // List Sales and Marketing Source starts
    // listSource() {
    //   var headers = new Headers();
    //   headers.append("Accept", 'application/json');
    //   headers.append('Content-Type', 'application/json');
    //   let options = new RequestOptions({ headers: headers });
    //   this.http.get(Global.url + '/getSourceType/' + this.proCode, options)
    //     .subscribe(data => {
    //       var listSources = data.json();
    //       this.sourceData = listSources.response;
    //       console.log("sources", JSON.stringify(this.sourceData))
    //     }, error => {
    //       this.toastr.warning('Unable to connect to server');
    //     })
    // }
    // /List Sales and Marketing Source ends
    // setCreditCard() {
    //   console.log("in set card")
    //   let control = <FormArray>this.addCardList.controls.fromCardValues;
    //   console.log("length" + this.creditDataInfo.length)
    //   this.creditDataInfo.forEach((x, i) => {
    //     console.log(x)
    //     control.push(this.formBuilder.group({
    //       nameOnCard: x.nameOnCard,
    //       // proId: this.loginData.loginCode,
    //       cardType: x.cardType,
    //       cardNumber: x.cardNumber,
    //       crvNumber: x.crvNumber,
    //       expiresOnDate: x.expiresOn.split(' ')[0],
    //       expiresOnYear: x.expiresOn.split(' ')[1],
    //       isActive: x.isActive,
    //       isActiveForSA: x.isActiveForSA,
    //       addressOnCard: x.addressOnCard,
    //       cardState: x.state,
    //       cardCity: x.city,
    //       cardZipCode: x.zipCode,
    //       cardNotes: x.notes,
    //     }))
    //     if (i == this.creditDataInfo.length - 1) {
    //       return control;
    //     }
    //   })
    // }
    // save() {
    //   var addressMixed = this.editVanCustomer.value.address + "," + this.editVanCustomer.value.city + "," + this.editVanCustomer.value.state + "," + this.editVanCustomer.value.zipCode
    //   console.log(addressMixed)
    //   this.geocodingService.getLatLongViaZipcode(addressMixed)
    //     .subscribe(address => {
    //       console.log(address)
    //       if (address == undefined || address == '') {
    //         this.coordinates.latitude = 0
    //         this.coordinates.longitude = 0
    //       } else {
    //         var coordObj = {
    //           lat: address.lat,
    //           lng: address.lng,
    //         }
    //         this.coordinates.latitude = address.lat
    //         this.coordinates.longitude = address.lng
    //         this.ngZone.run(() => this.updateCustomerData());
    //       }
    //     })
    // }
    // List Payment Methods starts
    EditCustomerComponent.prototype.listPaymentMethods = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/listPaymentMethods', options)
            .subscribe(function (data) {
            var listPay = data.json();
            _this.paymentData = listPay.response;
            console.log("paymentmethods.." + JSON.stringify(_this.paymentData));
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    EditCustomerComponent.prototype.donotCheck = function (x) {
        // alert("doNotServe1" + this.editVanCustomer.value.doNotServe)
        if (x == true) {
            this.notes = true;
        }
        if (x == false) {
            this.notes = false;
        }
    };
    EditCustomerComponent.prototype.save = function () {
        var _this = this;
        console.log(this.editVanCustomer.value.doNotServe);
        if (this.editVanCustomer.value.doNotServe == false || this.editVanCustomer.value.doNotServe == undefined) {
            this.editVanCustomer.value.doNotServe = false;
        }
        else if (this.editVanCustomer.value.pendCompletion == false) {
            this.editVanCustomer.value.pendCompletion = "";
        }
        else if (this.editVanCustomer.value.taxExempt == false) {
            this.editVanCustomer.value.taxExempt = "";
        }
        console.log(this.editVanCustomer.value.doNotServe);
        var addObj = {
            "customerId": this.customerId,
            "proId": this.loginData.loginCode,
            "customerType": '' + this.editVanCustomer.value.customerType,
            "accountNumber": '' + this.editVanCustomer.value.accountNumber,
            "customerName": '' + this.editVanCustomer.value.customerName,
            "creditLimit": '' + this.editVanCustomer.value.creditLimit == "" || this.editVanCustomer.value.creditLimit == null ? '' : this.editVanCustomer.value.creditLimit,
            "terms": '' + this.editVanCustomer.value.terms,
            "source": '' + this.editVanCustomer.value.source,
            "paymentMethod": '' + this.editVanCustomer.value.paymentMethod,
            "doNotServe": '' + this.editVanCustomer.value.doNotServe,
            "poRequired": '' + this.editVanCustomer.value.poRequired,
            "donotServeNotes": '' + this.editVanCustomer.value.donotServeNotes == "" || this.editVanCustomer.value.donotServeNotes == null ? '' : this.editVanCustomer.value.donotServeNotes,
            "pendCompletion": '' + this.editVanCustomer.value.pendCompletion,
            "taxExempt": '' + this.editVanCustomer.value.taxExempt,
            //"fromCardValues": this.addCardList.value.fromCardValues,
            "createdBy": this.loginData.emailId,
            "customerImage": '' + _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].documentName,
        };
        console.log("ADD OBJ" + JSON.stringify(addObj));
        //  this.cardArray = addObj.fromCardValues
        // console.log("addressArray OBJ" + JSON.stringify(this.addressArray))
        // console.log("addVanlynkCustomerInfo" + JSON.stringify(this.cardArray))
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/addVanlynkCustomerInfo', addObj)
            .subscribe(function (data) {
            var customerData = data.json();
            console.log("customerData" + JSON.stringify(customerData));
            if (customerData.status == 200) {
                var addressObj = {
                    "customerId": _this.customerId,
                    "proId": _this.loginData.loginCode,
                    "firstName": '' + _this.editVanCustomer.value.firstName,
                    "lastName": '' + _this.editVanCustomer.value.lastName,
                    "userType": '' + _this.editVanCustomer.value.userType == "" || _this.editVanCustomer.value.userType == null ? '' : _this.editVanCustomer.value.userType,
                    "email": '' + _this.editVanCustomer.value.email,
                    "phoneNumber": '' + _this.editVanCustomer.value.phoneNumber,
                    "phoneType": '' + _this.editVanCustomer.value.phoneType == "" || _this.editVanCustomer.value.phoneType == null ? '' : _this.editVanCustomer.value.phoneType,
                    "dispatchTextNumber": '' + _this.editVanCustomer.value.dispatchTextNumber == "" || _this.editVanCustomer.value.dispatchTextNumber == null ? '' : _this.editVanCustomer.value.dispatchTextNumber,
                    "propertyName": '' + _this.editVanCustomer.value.propertyName,
                    "sendInvoiceBy": '' + _this.editVanCustomer.value.sendInvoiceBy == "" || _this.editVanCustomer.value.sendInvoiceBy == null ? '' : _this.editVanCustomer.value.sendInvoiceBy == "" || _this.editVanCustomer.value.sendInvoiceBy == undefined ? '' : _this.editVanCustomer.value.sendInvoiceBy,
                    "address": '' + _this.editVanCustomer.value.address,
                    "invoiceEmail": '' + _this.editVanCustomer.value.invoiceEmail == "" || _this.editVanCustomer.value.invoiceEmail == null ? '' : _this.editVanCustomer.value.invoiceEmail,
                    "unit": '' + _this.editVanCustomer.value.unit == "" || _this.editVanCustomer.value.unit == null ? '' : _this.editVanCustomer.value.unit,
                    "zipCode": '' + _this.editVanCustomer.value.zipCode,
                    "city": '' + _this.editVanCustomer.value.city,
                    "state": '' + _this.editVanCustomer.value.state,
                    "latitude": '' + _this.coordinates.latitude,
                    "longitude": '' + _this.coordinates.longitude,
                    "crossSt1": '' + _this.editVanCustomer.value.crossSt1,
                    "crossSt2": '' + _this.editVanCustomer.value.crossSt2,
                    "adminNotes": '' + _this.editVanCustomer.value.adminNotes == "" || _this.editVanCustomer.value.adminNotes == null ? '' : _this.editVanCustomer.value.adminNotes,
                    "createdBy": _this.loginData.emailId
                };
                console.log("addBatchAddressInfo" + JSON.stringify(addressObj));
                _this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/addBatchAddressInfo', addressObj)
                    .subscribe(function (data) {
                    var response = data.json();
                    if (response.status == 200) {
                        _this.router.navigate(['/proCustomer/listVanCustomers']);
                        // let cardObj = {
                        //   //cardInfoArray: this.cardArray,
                        //   customerId: this.customerId,
                        //   proId: this.loginData.loginCode,
                        //   createdBy: this.loginData.emailId
                        // }
                        //   console.log("addBatchCardInfo" + JSON.stringify(cardObj))
                        //   this.http.post(Global.url + '/addBatchCardInfo', cardObj)
                        //     .subscribe(data => {
                        //       var response = data.json();
                        //       if (response.status == 200) {
                        //         this.router.navigate(['/proCustomer/listVanCustomers'])
                        //       }
                        //     })
                    }
                });
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    EditCustomerComponent.prototype.getListOfStates = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getListOfStates', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.statesData = response.response;
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    // // generate  automatic CustomerId
    // getCustomerId() {
    //   var headers = new Headers();
    //   headers.append("Accept", "application/json");
    //   headers.append("Content-Type", "application/json");
    //   let options = new RequestOptions({ headers: headers });
    //   this.http
    //     .get(Global.url + "/generateCustomerID", options)
    //     .subscribe(data => {
    //       this.customerInfo = data.json();
    //       if (this.customerInfo.status == 200) {
    //         this.customerID = this.customerInfo.customerId;
    //         this.dataCustomerInfo = true;
    //       } else {
    //         this.dataCustomerInfo = false;
    //         console.log("NO Records Found");
    //       }
    //     });
    // }
    // // generate  automatic CustomerId
    // donotserve(doNotServe) {
    //   console.log("doNotServe1" + this.editVanCustomer.value.doNotServe)
    //   if (this.editVanCustomer.value.doNotServe == true) {
    //     this.notes = true;
    //   } else {
    //     this.notes = false;
    //   }
    // }
    //IMAGE UPLOAD
    EditCustomerComponent.prototype.handleImage = function (file) {
        var _this = this;
        var picReader = new FileReader();
        picReader.onload = function (e) {
            var reader = e.target;
            _this.imagePreview = reader.result;
        };
        picReader.readAsDataURL(file);
    };
    EditCustomerComponent.prototype.select = function (event) {
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
            this.imagePreview = "assets/img/no-image.png";
        }
    };
    /* Image uploaded Name */
    EditCustomerComponent.prototype.imgfileUpload = function () {
        var _this = this;
        console.log("imgfileUpload calling");
        var url = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/imageUploadData";
        var formData = new FormData();
        var xhr = new XMLHttpRequest();
        formData.append("image", this.file2Upload);
        var config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        xhr.open("post", url, true);
        xhr.upload.onprogress = function (e) {
            if (e.lengthComputable) {
                _this.percentage = (e.loaded / e.total) * 100;
                _this.progressShow = true;
                _this.progressHide = false;
                if (_this.percentage === 100) {
                    _this.progressShow = false;
                    _this.progressHide = true;
                    // this.imageUploadVariable.nativeElement.value = "";
                    _this.img1 = false;
                }
            }
        };
        xhr.onerror = function (e) { };
        xhr.onload = function () {
            var a = JSON.parse(xhr.responseText);
            _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].secimagePath = a.imagePath;
            _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].documentName = a.name;
            console.log("GLObaL NAme" + _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].documentName);
        };
        xhr.send(formData);
    };
    /* Image uploaded Name */
    EditCustomerComponent.prototype.viewImageData = function () {
        var _this = this;
        //console.log("view called" + this.partID)
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getCustomerViewImage/' + this.customerId, options)
            .subscribe(function (data) {
            var customerData = data.json();
            _this.viewImage = customerData.response[0];
            console.log("vanData" + JSON.stringify(_this.viewImage));
            if (_this.viewImage.customerImage == "default_person.jpg") {
                _this.imagePreview = "../../assets/img/avatars/default_person.jpg";
                console.log("resume" + _this.imagePreview);
            }
            else {
                _this.imagePreview = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/" + _this.viewImage.customerImage;
                // resume1http://localhost:8888/uploads/33f46c179cb54c20bf5a0a5a05ea8188
                console.log("resume1" + _this.imagePreview);
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    EditCustomerComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    EditCustomerComponent.prototype.list = function () {
        this.router.navigate(['/proCustomer/listVanCustomers']);
    };
    EditCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"], _utilities_geocode_service__WEBPACK_IMPORTED_MODULE_8__["GeocodingService"]],
            selector: 'app-edit-customer',
            template: __webpack_require__(/*! ./edit-customer.component.html */ "./src/app/proz-customer/van-customers/edit-customer/edit-customer.component.html"),
            styles: [__webpack_require__(/*! ./edit-customer.component.scss */ "./src/app/proz-customer/van-customers/edit-customer/edit-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _utilities_geocode_service__WEBPACK_IMPORTED_MODULE_8__["GeocodingService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], EditCustomerComponent);
    return EditCustomerComponent;
}());



/***/ }),

/***/ "./src/app/proz-customer/van-customers/list-customer/list-customer.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/list-customer/list-customer.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home</a>\r\n      </li>\r\n      <li><a>Customers</a></li>\r\n      <li class=\"active\">List of Customers</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        List of Customers\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"widget\">\r\n          <div class=\"widget-header with-footer header gray\">\r\n            <span class=\"widget-caption\">Search Customer By</span>\r\n          </div>\r\n          <form [formGroup]=\"searchCustomer\">\r\n          <div class=\"widget-body\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"searchByLbl\">\r\n                      <b>Search Customer By </b>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <select class=\"form-control\" formControlName = \"selectBy\" [(ngModel)]=\"choosePayType\"\r\n                      (ngModelChange)=\"customerTypeSelection(choosePayType)\">\r\n                      <option value=\"All\">All</option>\r\n                      <option value=\"Customer\">Customer #</option>\r\n                      <option value=\"Name\">First Name</option>\r\n                      <option value=\"PhoneNumber\">Phone Number</option>\r\n                      <option value=\"Email\">Email</option>\r\n                      <option value=\"Address\">Address</option>\r\n                      <option value=\"Status\">Status</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"col-sm-3\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"input-icon icon-right\">\r\n                    <input type=\"text\" class=\"form-control\" >\r\n                  </span>\r\n                </div>\r\n              </div> -->\r\n              <div class=\"col-sm-3\" *ngIf=\"All\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"input-icon icon-right\">\r\n                    <input type=\"text\" class=\"form-control\">\r\n                  </span>\r\n                </div>\r\n              </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"Customer\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"customerId\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"Name\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"firstName\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"PhoneNumber\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"phoneNumber\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"Email\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"emailId\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"Address\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"address\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"Status\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"status\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    &nbsp;&nbsp;&nbsp;&nbsp; <button type=\"submit\" class=\"btn btn-success shiny\"\r\n                      (click)=\"searchCustomerData()\"><i class=\"fa fa-search\"></i>&nbsp; Search</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button type=\"submit\" class=\"btn btn-danger shiny\" (click)=\"reset()\"><i\r\n                        class=\"fa fa-repeat\"></i>&nbsp; Reset</button>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success shiny\" (click)=\"addCustomer()\"><i\r\n              class=\"fa fa-user-plus\"></i>&nbsp;\r\n            Add Customer</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"widget\">\r\n          <div class=\"widget-header with-footer header gray\">\r\n            <span class=\"widget-caption\">List of Customers</span>\r\n          </div>\r\n          <div class=\"widget-body\">\r\n            <div class=\"table-scrollable\" *ngIf = \"customerSatus\">\r\n              <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                <thead class=\"flip-content bordered-palegreen\">\r\n                  <tr>\r\n                    <th>\r\n                      Status\r\n                    </th>\r\n                    <th>\r\n                      Customer #\r\n                    </th>\r\n                    <th>\r\n                      Lead Id\r\n                    </th>\r\n                    <th>\r\n                      Source\r\n                    </th>\r\n                    <th>\r\n                      First Name\r\n                    </th>\r\n                    <th>\r\n                      Last Name\r\n                    </th>\r\n                    <th>\r\n                      Company/Customer\r\n                    </th>\r\n                    <th>\r\n                      Phone Number\r\n                    </th>\r\n                    <th>\r\n                      Email\r\n                    </th>\r\n                    <th>\r\n                      Address\r\n                    </th>\r\n                    <th>\r\n                      State\r\n                    </th>\r\n                    <th>\r\n                      City\r\n                    </th>\r\n                    <th>\r\n                      Zip Code\r\n                    </th>\r\n                    <th>Customer Created\r\n                    </th>\r\n                    <!-- <th>\r\n                      View\r\n                    </th>\r\n                    <th>\r\n                      Edit\r\n                    </th>\r\n                    <th>\r\n                      Delete\r\n                    </th>\r\n                    <th>\r\n                      Work Orders\r\n                    </th> -->\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let data of customerList\">\r\n                    <td class=\"item\">\r\n                      <span class=\"label label-warning\">\r\n                        {{data.customerStatus}}\r\n                      </span>\r\n                    </td>\r\n                 \r\n                    <td>\r\n                      <a  (click)=\"viewCustomer(data.customerId)\">{{data.customerId}}</a>\r\n                    </td>\r\n                      <td>{{data.leadId}}</td>\r\n                    <td>\r\n                      {{data.source}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.firstName}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.lastName}}\r\n                    </td>\r\n                    <td >\r\n                      {{data.customerName}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.phoneNumber}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.emailId}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.address}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.state}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.city}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.zipCode}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.createdOn | date: \"dd-MMM-yyyy\"}}\r\n                    </td>\r\n                    <!-- <td class=\"center\">\r\n                      <a class=\"btn btn-xs btn-success shiny\" (click)=\"viewCustomer(data.customerId)\">\r\n                        <i class=\"fa fa-eye\"></i>\r\n                      </a>\r\n                    </td>\r\n                    <td class=\"center\">\r\n                      <a class=\"btn btn-xs btn-primary shiny\" (click)=\"editCustomer(data.customerId)\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                      </a>\r\n                    </td>\r\n                    <td class=\"center\">\r\n                      <a class=\"btn btn-xs btn-danger shiny\" (click)=\"deleteCustomer()\">\r\n                        <i class=\"fa fa-trash-o\"></i>\r\n                      </a>\r\n                    </td>\r\n                    <td class=\"center\">\r\n                      <a class=\"btn btn-xs btn-warning shiny\" (click)=\"customerWO(data)\">\r\n                        <i class=\"fa fa-briefcase\"></i>\r\n                      </a>\r\n                    </td> -->\r\n                  </tr>\r\n\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <br>\r\n            <div  *ngIf = \"!customerSatus\">\r\n              <span>No Customers Found</span>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Body -->\r\n</div>\r\n<!-- /Page Content -->"

/***/ }),

/***/ "./src/app/proz-customer/van-customers/list-customer/list-customer.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/list-customer/list-customer.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.item {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei1jdXN0b21lci92YW4tY3VzdG9tZXJzL2xpc3QtY3VzdG9tZXIvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3otY3VzdG9tZXJcXHZhbi1jdXN0b21lcnNcXGxpc3QtY3VzdG9tZXJcXGxpc3QtY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksbUJBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcHJvei1jdXN0b21lci92YW4tY3VzdG9tZXJzL2xpc3QtY3VzdG9tZXIvbGlzdC1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVte1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/proz-customer/van-customers/list-customer/list-customer.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/list-customer/list-customer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCustomerComponent", function() { return ListCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var ListCustomerComponent = /** @class */ (function () {
    function ListCustomerComponent(beyond, router, formBuilder, activatedRoute, http, toastr, spinner) {
        var _this = this;
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.customerSatus = false;
        this.customerArray = [];
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteConfigLoadStart"]) {
                //console.log('The load started ')
                _this.spinner.show();
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteConfigLoadEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationCancel"]) {
                _this.spinner.hide();
                //console.log('The load ended ')
            }
            else {
                //console.log('The else load')
                _this.spinner.hide();
            }
        });
        this.form = this.formBuilder.group({
            orders: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormArray"]([])
        });
    }
    ListCustomerComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        console.log("loginData" + JSON.stringify(this.loginData.loginCode));
        this.proId = this.loginData.loginCode;
        console.log("proid" + this.proId);
        this.listCustomerDetails();
        this.All = true;
        {
            this.searchCustomer = this.formBuilder.group({
                firstName: [null],
                customerId: [null],
                phoneNumber: [null],
                emailId: [null],
                address: [null],
                status: [null],
                selectBy: [null]
            });
        }
    };
    ListCustomerComponent.prototype.customerTypeSelection = function (x) {
        console.log("x" + x);
        if (x == "All") {
            this.listCustomerDetails();
        }
        if (x == "Customer") {
            this.Customer = true;
            this.Name = false;
            this.PhoneNumber = false;
            this.Email = false;
            this.Address = false;
            this.Status = false;
            this.All = false;
        }
        if (x == "Name") {
            this.Customer = false;
            this.Name = true;
            this.PhoneNumber = false;
            this.Email = false;
            this.Address = false;
            this.Status = false;
            this.All = false;
        }
        if (x == "PhoneNumber") {
            this.Customer = false;
            this.Name = false;
            this.PhoneNumber = true;
            this.Email = false;
            this.Address = false;
            this.Status = false;
            this.All = false;
        }
        if (x == "Email") {
            this.Customer = false;
            this.Name = false;
            this.PhoneNumber = false;
            this.Email = true;
            this.Address = false;
            this.Status = false;
            this.All = false;
        }
        if (x == "Address") {
            this.Customer = false;
            this.Name = false;
            this.PhoneNumber = false;
            this.Email = false;
            this.Address = true;
            this.Status = false;
            this.All = false;
        }
        if (x == "Status") {
            this.Customer = false;
            this.Name = false;
            this.PhoneNumber = false;
            this.Email = false;
            this.Address = false;
            this.All = false;
            this.Status = true;
        }
    };
    ListCustomerComponent.prototype.listCustomerDetails = function () {
        var _this = this;
        // this.spinner.show();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/vancustomerList/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var customerData = data.json();
            console.log("customerData" + JSON.stringify(customerData));
            if (customerData.status == 200) {
                // this.spinner.hide();
                _this.customerList = customerData.addressInfo;
                _this.customerSatus = true;
                return false;
            }
            else {
                console.log("ELSE CONDITION IS CALLING");
                // this.spinner.hide();
                _this.customerSatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    ListCustomerComponent.prototype.reset = function () {
        this.searchCustomer.reset();
        this.listCustomerDetails();
    };
    ListCustomerComponent.prototype.addCustomer = function () {
        this.router.navigate(['/proCustomer/addVanCustomer']);
    };
    ListCustomerComponent.prototype.customerWO = function (data) {
        localStorage.setItem('customerData', JSON.stringify(data));
        this.router.navigate(['/workorder/listWorkOrders']);
    };
    ListCustomerComponent.prototype.editCustomer = function (customerId) {
        this.router.navigate(['/proCustomer/editVanCustomer', customerId]);
    };
    ListCustomerComponent.prototype.viewCustomer = function (customerId) {
        this.router.navigate(['/proCustomer/viewVanCustomer', customerId]);
    };
    // Search Customer Starts
    ListCustomerComponent.prototype.searchCustomerData = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var obj = {
            "customerId": this.searchCustomer.value.customerId,
            "firstName": this.searchCustomer.value.firstName,
            "phoneNumber": this.searchCustomer.value.phoneNumber,
            "emailId": this.searchCustomer.value.emailId,
            "address": this.searchCustomer.value.address,
            "status": this.searchCustomer.value.status
        };
        console.log(obj);
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/searchCustomer/' + this.proId, [
            { id: 'customerId', value: obj.customerId },
            { id: 'firstName', value: obj.firstName },
            { id: 'phoneNumber', value: obj.phoneNumber },
            { id: 'emailId', value: obj.emailId },
            { id: 'address', value: obj.address },
            { id: 'status', value: obj.status }
        ]).subscribe(function (data) {
            _this.customer = data.json();
            console.log("center" + JSON.stringify(_this.customer));
            if (_this.customer.status == 200) {
                _this.customerList = _this.customer.response;
                console.log("customerData values" + JSON.stringify(_this.customerList));
                _this.searchCustomer.reset();
            }
            else {
                console.log('The else');
            }
        });
    };
    // Search Customer Ends
    ListCustomerComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    ListCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-list-customer',
            template: __webpack_require__(/*! ./list-customer.component.html */ "./src/app/proz-customer/van-customers/list-customer/list-customer.component.html"),
            styles: [__webpack_require__(/*! ./list-customer.component.scss */ "./src/app/proz-customer/van-customers/list-customer/list-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], ListCustomerComponent);
    return ListCustomerComponent;
}());



/***/ }),

/***/ "./src/app/proz-customer/van-customers/reset-customer-password/reset-customer-password.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/reset-customer-password/reset-customer-password.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozblueheader></app-commontopprozblueheader>\r\n<div class=\"container\">\r\n    <div class=\"body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-sm-4 col-xs-12\">\r\n            </div>\r\n            <!--LOGIN TAB - STARTS HERE-->\r\n            <div class=\"col-lg-4 col-sm-4 col-xs-12\">\r\n                <div class=\"tabbable\">\r\n                    <br><br><br>\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"tab-pane in active\">\r\n                            <form [formGroup]=\"resetPassword\">\r\n                                <div class=\"login-container animated fadeInDown\">\r\n                                    <div class=\"loginbox bg-white\">\r\n                                        <div class=\"loginbox-title\">Reset Password</div>                                       \r\n                                        <div class=\"loginbox-textbox\">\r\n                                            <input type=\"text\" class=\"form-control\" placeholder=\"UserName\"\r\n                                                formControlName=\"Email\" (change)=\"checkingEmail()\" required/>\r\n                                        </div>\r\n                                        <div class=\"loginbox-textbox\">\r\n                                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\"\r\n                                                formControlName=\"password\" />\r\n                                        </div>\r\n                                        <div class=\"loginbox-textbox\">\r\n                                            <input type=\"password\" class=\"form-control\" placeholder=\"Confrim Password\"\r\n                                                formControlName=\"password\" />\r\n                                        </div>\r\n                                        <div class=\"loginbox-submit\">\r\n                                            <input type=\"button\"\r\n                                                class=\"btn btn-azure shiny btn-block\" value=\"Reset Password\" (click)=\"changePassword()\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <!--TAB CONTENT - ENDS HERE-->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-sm-4 col-xs-12\">\r\n\r\n            </div>\r\n            <!--LOGIN TAB - ENDS HERE-->\r\n        </div>\r\n    </div>\r\n</div>s"

/***/ }),

/***/ "./src/app/proz-customer/van-customers/reset-customer-password/reset-customer-password.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/reset-customer-password/reset-customer-password.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-content {\n  width: 450px !important; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei1jdXN0b21lci92YW4tY3VzdG9tZXJzL3Jlc2V0LWN1c3RvbWVyLXBhc3N3b3JkL0Q6XFxUb3Bwcm96XFxUb3BQcm96X0FkdmFuY2VfQ2xpZW50L3NyY1xcYXBwXFxwcm96LWN1c3RvbWVyXFx2YW4tY3VzdG9tZXJzXFxyZXNldC1jdXN0b21lci1wYXNzd29yZFxccmVzZXQtY3VzdG9tZXItcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyx3QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcHJvei1jdXN0b21lci92YW4tY3VzdG9tZXJzL3Jlc2V0LWN1c3RvbWVyLXBhc3N3b3JkL3Jlc2V0LWN1c3RvbWVyLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRlbnR7XHJcbiAgICAgd2lkdGg6NDUwcHggIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLm1vY2t7XHJcbiAgICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/proz-customer/van-customers/reset-customer-password/reset-customer-password.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/reset-customer-password/reset-customer-password.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ResetCustomerPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetCustomerPasswordComponent", function() { return ResetCustomerPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");









var ResetCustomerPasswordComponent = /** @class */ (function () {
    function ResetCustomerPasswordComponent(router, formBuilder, activatedRoute, toastr, http, authService, spinner) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.http = http;
        this.authService = authService;
        this.spinner = spinner;
    }
    ResetCustomerPasswordComponent.prototype.ngOnInit = function () {
        this.resetPassword = this.formBuilder.group({
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    ResetCustomerPasswordComponent.prototype.checkingEmail = function () {
        var _this = this;
        console.log("check email" + this.resetPassword.value.Email);
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/gettingLoginCode/' + this.resetPassword.value.Email)
            .subscribe(function (data) {
            var mailResponse = data.json();
            if (mailResponse.status == 200) {
                _this.loginResponse = mailResponse.response[0];
                console.log("loginResponse" + JSON.stringify(_this.loginResponse));
            }
            else {
            }
        });
    };
    ResetCustomerPasswordComponent.prototype.changePassword = function () {
        var _this = this;
        var obj = {
            "loginCode": this.loginResponse.loginCode,
            "password": this.resetPassword.value.password,
        };
        console.log("obj" + JSON.stringify(obj));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/customerResetPassword', obj)
            .subscribe(function (data) {
            var passwordResponse = data.json();
            if (passwordResponse.status == 200) {
                console.log("password Changed Response" + JSON.stringify(passwordResponse));
                _this.router.navigate(['/auth/login/0']);
            }
            else if (passwordResponse.status == 404) {
                console.log("password Changed Response Failed");
            }
        });
    };
    ResetCustomerPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-customer-password',
            template: __webpack_require__(/*! ./reset-customer-password.component.html */ "./src/app/proz-customer/van-customers/reset-customer-password/reset-customer-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-customer-password.component.scss */ "./src/app/proz-customer/van-customers/reset-customer-password/reset-customer-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], ResetCustomerPasswordComponent);
    return ResetCustomerPasswordComponent;
}());



/***/ }),

/***/ "./src/app/proz-customer/van-customers/view-customer/view-customer.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/view-customer/view-customer.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a >Customer</a>\r\n          </li>\r\n          <li>\r\n            <a (click)=\"list()\">List of Customers</a>\r\n          </li>\r\n          <li class=\"active\">View Customer</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>View Customer</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered \">\r\n                      <div class=\"header gray\">\r\n                        View Customer\r\n                      </div>\r\n                      <div id=\"registration-form\">\r\n                        <form [formGroup]=\"viewCustomerFG\">\r\n\r\n                          <!-- Top Buttons -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3 button-center\">\r\n                              <div class=\"form-group\">\r\n                                  <button type=\"button\" class=\"btn btn-purple\" (click)=\"newWorkOrderbtn(customerId)\"><i\r\n                                    class=\"fa fa-briefcase\"></i>\r\n                                  New Work Order</button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3 button-center\">\r\n                              <div class=\"form-group\">\r\n                               \r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <!-- <button type=\"button\" class=\"btn btn-blue\" (click)=\"newEstimate(customerId)\"><i\r\n                                    class=\"fa fa-file-text-o\"></i>\r\n                                  New Estimate</button> -->\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <!-- <button type=\"button\" class=\"btn btn-warning\" (click)=\"newInvoice(customerId)\"><i\r\n                                    class=\"fa fa-dollar\"></i>\r\n                                  New Invoice</button> -->\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Top Buttons -->\r\n\r\n                          <!-- Customer Type -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"form-title\">\r\n                                Customer Type\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"customerTypeLbl\">\r\n                                      <b>Customer Type <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"radio\">\r\n                                      <label>\r\n                                        <input type=\"radio\" class=\"colored-success\" formControlName=\"customerType\"\r\n                                          value=\"Residential\" disabled>\r\n                                        <span class=\"text\">Residential </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"radio\">\r\n                                      <label>\r\n                                        <input value=\"Business\" disabled type=\"radio\" class=\"colored-success\"\r\n                                          formControlName=\"customerType\">\r\n                                        <span class=\"text\">Business </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"ssLbl\">\r\n                                  <b>Source</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label>\r\n                                  {{customerDataInfo.source}}\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n\r\n                            </div>\r\n                          </div> -->\r\n                          <!-- /Customer Type -->\r\n\r\n                          <!-- Account Settings -->\r\n                          <div class=\"row\" *ngIf=\"custData\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"form-title\">\r\n                                Account Settings\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"accountNumberLbl\">\r\n                                      <b>Customer # </b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>\r\n                                      {{customerDataInfo.customerId}}\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"customerNameLbl\">\r\n                                      <b>Company/Customer Name<span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>\r\n                                      {{customerDataInfo.customerName}}\r\n                                    </label>\r\n                                    <!-- <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" readonly class=\"form-control\" placeholder=\"\" formControlName=\"customerName\">\r\n                                    </span> -->\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"creditLimitLbl\">\r\n                                      <b>Customer Credit Limit ($)</b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      {{customerDataInfo.creditLimit}}\r\n\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"termsLbl\">\r\n                                      <b>Terms<span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      {{customerDataInfo.terms}}\r\n\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"sourceLbl\">\r\n                                      <b>Source </b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    {{customerDataInfo.source}}\r\n\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"paymentMethodLbl\">\r\n                                      <b>Payment Method<span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      {{customerDataInfo.paymentMethod}}\r\n\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\" *ngIf=\"customerDataInfo.doNotServe == 'true'\">\r\n                                    <div class=\"checkbox\">\r\n                                      <label>\r\n                                        <input type=\"checkbox\" disabled class=\"colored-success\" checked=\"checked\">\r\n                                        <span class=\"text\">Do Not Serve </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"form-group\" *ngIf=\"customerDataInfo.doNotServe == 'false'\">\r\n                                    <div class=\"checkbox\">\r\n                                      <label>\r\n                                        <input type=\"checkbox\" disabled class=\"colored-success\">\r\n                                        <span class=\"text\">Do Not Serve </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"checkbox\">\r\n                                      <label>\r\n                                        <input type=\"checkbox\" disabled class=\"colored-success\"\r\n                                          formControlName=\"taxExempt\">\r\n                                        <span class=\"text\">Tax Exempt </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                  </div>\r\n                                </div> -->\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"porLbl\">\r\n                                      <b>P. O. Required </b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-1\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"radio\">\r\n                                      <label>\r\n                                        <input value=\"Yes\" disabled type=\"radio\" class=\"colored-success\"\r\n                                          formControlName=\"yesPoRequired\">\r\n                                        <span class=\"text\">Yes </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-2\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"radio\">\r\n                                      <label>\r\n                                        <input value=\"No\" disabled type=\"radio\" class=\"colored-success\"\r\n                                          formControlName=\"noPoRequired\">\r\n                                        <span class=\"text\">No </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"donotServeNotesLbl\">\r\n                                      <b>Do Not Serve Notes </b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      {{customerDataInfo.doNotServeNotes}}\r\n\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"checkbox\">\r\n                                      <label>\r\n                                        <input type=\"checkbox\" disabled class=\"colored-success\" formControlName=\"pendCompletion\">\r\n                                        <span class=\"text\">Pend Completion </span>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div> -->\r\n\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Account Settings -->\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <hr class=\"hr-gray-thick\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <!-- Collapsible -->\r\n                          <div class=\"row\" *ngIf=\"custData\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"panel-group accordion\" id=\"accordions\">\r\n                                <!-- Billing Details - Collapsible -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseOnes\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i>Billing Details\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseOnes\" class=\"panel-collapse collapse\">\r\n                                    <!-- <form [formGroup]=\"addAddressList\"> -->\r\n                                    <!-- <ng-container formArrayName=\"fromAddressValues\"> -->\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"firstNameLbl\">\r\n                                                  <b>First Name<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{addressDataInfo.firstName}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"lastNameLbl\">\r\n                                                  <b>Last Name<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{addressDataInfo.lastName}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"userTypeLbl\">\r\n                                                  <b>User Type<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                {{addressDataInfo.userType}}\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"emailLbl\">\r\n                                                  <b>Email<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{addressDataInfo.emailId}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"phoneNumberLbl\">\r\n                                                  <b>Phone Number<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{addressDataInfo.phoneNumber}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"phoneTypeLbl\">\r\n                                                  <b>Phone Type </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                {{addressDataInfo.phoneType}}\r\n\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"dispatchTextNumberLbl\">\r\n                                                  <b>Dispatch Text Number</b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{addressDataInfo.dispatchTextNumber}}\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"adminNotesLbl\">\r\n                                                  <b>Admin Notes </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{addressDataInfo.adminNotes}}\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <!-- <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"propertyNameLbl\">\r\n                                                  <b>Property Name </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{addressDataInfo.propertyName}}\r\n                                                 \r\n                                                </span>\r\n                                              </div>\r\n                                            </div> -->\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"sendInvoiceToLbl\">\r\n                                                  <b>Send Invoice By<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                {{addressDataInfo.sendInvoiceBy}}\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"invoiceEmailLbl\">\r\n                                                  <b>Invoice Email<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{addressDataInfo.invoiceEmail}}\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"serviceAddressLbl\">\r\n                                                  <b> Street Address<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{addressDataInfo.address}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"unitLbl\">\r\n                                                  <b>Unit/APT # </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{addressDataInfo.unit}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"cityLbl\">\r\n                                                  <b>City<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{addressDataInfo.city}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"stateLbl\">\r\n                                                  <b>State<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                {{addressDataInfo.state}}\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"zipCodeLbl\">\r\n                                                  <b>Zip Code<span class=\"mandatory\">*</span></b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{addressDataInfo.zipCode}}\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <!-- </ng-container> -->\r\n                                    <!-- </form> -->\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Billing Details - Collapsible -->\r\n\r\n\r\n                                <!-- Pictures -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseThird\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Picture\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseThird\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"serviceIDLbl\">\r\n                                                  <b> Picture</b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"col-sm-3\">\r\n                                            <div class=\"form-group\">\r\n                                              <div style=\"width: 100px; height: 120px;\"\r\n                                                class=\"fileupload-new thumbnail\">\r\n                                                <img [src]=\"imagePreview\" style=\"height:120px;width:100px;\">\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n\r\n\r\n                                  </div>\r\n                                </div>\r\n                                <!-- Pictures -->\r\n                                <!-- Credit Card List - Collapsible -->\r\n                                <!-- <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseTwos\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Credit Card List\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseTwos\" class=\"panel-collapse collapse\"> -->\r\n                                <!-- <form [formGroup]=\"addCardList\"> -->\r\n                                <!-- <ng-container formArrayName=\"fromCardValues\"> -->\r\n                                <!-- <div class=\"panel-body border-red\">\r\n                                      <div class=\"form-title\">\r\n                                        Credit Card List\r\n                                      </div> -->\r\n                                <!-- Credit Card List -->\r\n                                <!-- <div class=\"row\" *ngFor=\"let data of creditDataInfo\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <hr class=\"hr-gray\">\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"nameOnCardLbl\">\r\n                                                  <b>Name on Card </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{data.nameOnCard}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"cardTypeLbl\">\r\n                                                  <b>Card Type </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                {{data.cardType}}\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"cardNumberLbl\">\r\n                                                  <b>Card Number </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{data.cardNumber}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"crvNumberLbl\">\r\n                                                  <b>CRV Number </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{data.crvNumber}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"cardNumberLbl\">\r\n                                                  <b>Expires On </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <div class=\"col-sm-6\">\r\n                                                  {{data.expiresOn}}\r\n\r\n                                                </div>\r\n\r\n                                                <div class=\"col-sm-6\">\r\n\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <div class=\"checkbox\">\r\n                                                  <label>\r\n                                                    <!-- {{creditDataInfo.isActive}} -->\r\n                                <!-- <input type=\"checkbox\" disabled class=\"colored-success\"\r\n                                                      formControlName=\"isActive\">\r\n                                                    <span class=\"text\">Is Active </span>\r\n                                                  </label>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <div class=\"checkbox\">\r\n                                                  <label> -->\r\n                                <!-- {{creditDataInfo.isActiveForSA}} -->\r\n                                <!-- <input type=\"checkbox\" disabled class=\"colored-success\"\r\n                                                      formControlName=\"isActiveForSA\">\r\n                                                    <span class=\"text\">Is Active for SA </span>\r\n                                                  </label>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"addressOnCardLbl\">\r\n                                                  <b>Address On Card</b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{data.addressOnCard}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"stateLbl\">\r\n                                                  <b>State </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                {{data.state}}\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"cityLbl\">\r\n                                                  <b>City </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{data.city}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"zipCodeLbl\">\r\n                                                  <b>Zip Code </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{data.zipCode}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"adminNotesLbl\">\r\n                                                  <b>Notes </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-9\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  {{data.notes}}\r\n\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <hr class=\"hr-gray\">\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>-->\r\n                                <!-- </div>  -->\r\n                                <!-- /Credit Card List -->\r\n                                <!-- </div> -->\r\n                                <!-- </ng-container>\r\n                        </form> -->\r\n                                <!-- </div>\r\n                          </div> -->\r\n                                <!-- /Credit Card List - Collapsible -->\r\n\r\n                                <!-- Customer History - Collapsible -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#customerHistory\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Customer History\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"customerHistory\" class=\"panel-collapse collapse\">\r\n                                    <form>\r\n                                      <ng-container>\r\n                                        <div class=\"panel-body border-red\">\r\n                                          <!-- Customer History -->\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n\r\n                                              <!-- Created By & Created On -->\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"createdOnLbl\">\r\n                                                      <b>Created On </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <span class=\"input-icon icon-right\">\r\n                                                      {{addressDataInfo.createdOn}}\r\n                                                    </span>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    <label for=\"cardTypeLbl\">\r\n                                                      <b>Created By </b>\r\n                                                    </label>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\">\r\n                                                  <div class=\"form-group\">\r\n                                                    {{loginData.emailId}}\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <!-- /Created By & Created On -->\r\n\r\n                                              <!--Work Orders-->\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                                  <div class=\"form-title\">\r\n                                                    Work Orders\r\n                                                  </div>\r\n                                                  <div class=\"row\">\r\n                                                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                                                      <div class=\"table-scrollable\" *ngIf=\"woResponseStatus\">\r\n                                                        <table\r\n                                                          class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                                                          <thead class=\"flip-content bordered-palegreen\">\r\n                                                            <tr>\r\n                                                              <th>\r\n                                                                WO Status\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Work Order #\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Source\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Customer Name\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Phone #\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Email ID\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Job Title\r\n                                                              </th>\r\n\r\n                                                              <th>\r\n                                                                Estimate #\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Invoice #\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Last Updated On\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Created On\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Edit\r\n                                                              </th>\r\n                                                            </tr>\r\n                                                          </thead>\r\n                                                          <tbody>\r\n                                                            <tr *ngFor=\"let data of bill\">\r\n                                                              <!-- <td class=\"item\" *ngIf=\"data.workOrderStatus =='Unassigned'\">\r\n                                                                            <span class=\"label label-wo-unassigned\">{{data.workOrderStatus}}</span>\r\n                                                                        </td>\r\n                                                                        <td class=\"item\" *ngIf=\"data.workOrderStatus =='Assigned'\">\r\n                                                                            <span class=\"label label-wo-holding\">{{data.workOrderStatus}}</span>\r\n                                                                        </td>\r\n                                                                        <td class=\"item\" *ngIf=\"data.workOrderStatus =='Pending'\">\r\n                                                                            <span class=\"label label-awo-scheduled\">{{data.workOrderStatus}}</span>\r\n                                                                        </td>\r\n                                                                        <td class=\"item\" *ngIf=\"data.workOrderStatus =='Paused'\">\r\n                                                                            <span class=\"label label-awo-pause\">{{data.workOrderStatus}}</span>\r\n                                                                        </td>\r\n                                                                        <td class=\"item\" *ngIf=\"data.workOrderStatus =='Cancelled'\">\r\n                                                                            <span class=\"label label-awo-cancelled\">{{data.workOrderStatus}}</span>\r\n                                                                        </td>\r\n                                                                        <td class=\"item\" *ngIf=\"data.workOrderStatus =='In Progress'\">\r\n                                                                            <span class=\"label label-awo-inprogress\">{{data.workOrderStatus}}</span>\r\n                                                                        </td>\r\n                                                                        <td class=\"item\" *ngIf=\"data.workOrderStatus =='Invoiced'\">\r\n                                                                            <span class=\"label label-awo-invoiced\">{{data.workOrderStatus}}</span>\r\n                                                                        </td>\r\n                                \r\n                                                                        <td class=\"item\" *ngIf=\"data.workOrderStatus =='Recall'\">\r\n                                                                            <span class=\"label label-awo-recall\">{{data.workOrderStatus}}</span>\r\n                                                                        </td>\r\n                                                                        <td class=\"item\" *ngIf=\"data.workOrderStatus =='Estimate'\">\r\n                                                                            <span class=\"label label-awo-estimate\">{{data.workOrderStatus}}</span>\r\n                                                                        </td> -->\r\n                                                              <td>\r\n                                                                {{data.workOrderStatus}}\r\n                                                              </td>\r\n                                                              <td class=\"item\">\r\n                                                                <a\r\n                                                                  (click)=\"viewWorkOrder(data.workOrderNumber)\">{{data.workOrderNumber}}</a>\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.source}}\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.customerName}}\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.phoneNumber}}\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.emailId}}\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.jobTitle}}\r\n                                                              </td>\r\n\r\n                                                              <td class=\"item\">\r\n                                                                <!-- <a href=\"#\">E-5555</a> -->\r\n                                                              </td>\r\n                                                              <td class=\"item\">\r\n                                                                <!-- <a href=\"#\">I-6666</a> -->\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.createdOn}}\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.createdOn}}\r\n                                                              </td>\r\n                                                              <td class=\"center\">\r\n                                                                <a class=\"btn btn-xs btn-primary shiny\"\r\n                                                                  (click)=\"editWorkOrder()\">\r\n                                                                  <i class=\"fa fa-edit\"></i>\r\n                                                                </a>\r\n                                                              </td>\r\n                                                            </tr>\r\n\r\n                                                          </tbody>\r\n                                                        </table>\r\n\r\n                                                      </div>\r\n\r\n                                                      <!-- <div class=\"widget\"> -->\r\n                                                      <!-- <div class=\"widget-header with-footer header gray\">\r\n                <span class=\"widget-caption\">List of Work Orders</span>\r\n              </div> -->\r\n                                                      <!-- <div class=\"widget-body\"> -->\r\n                                                      <!-- <div class=\"table-scrollable\"> -->\r\n\r\n                                                      <!-- <table class=\"table table-bordered table-striped table-condensed flip-content\"> -->\r\n                                                      <!-- <thead class=\"flip-content bordered-palegreen\">\r\n                                                            <tr>\r\n                                                              <th>\r\n                                                                WO Status\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Work Order #\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Source\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                  Job Title\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Created On\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Last Updated On\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Last Updated By\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Edit\r\n                                                              </th>\r\n                                                            </tr>\r\n                                                          </thead>\r\n                                                          <tbody>\r\n                                                            <tr *ngFor=\"let data of bill\">\r\n                                                              <td class=\"item\" *ngIf=\"data.workOrderStatus =='Unassigned'\">\r\n                                                                <span class=\"label label-wo-unassigned\">{{data.workOrderStatus}}</span>\r\n                                                              </td>\r\n                                                              <td class=\"item\" *ngIf=\"data.workOrderStatus =='Assigned'\">\r\n                                                                <span class=\"label label-wo-holding\">{{data.workOrderStatus}}</span>\r\n                                                              </td>\r\n                                                              <td class=\"item\" *ngIf=\"data.workOrderStatus =='Pending'\">\r\n                                                                <span class=\"label label-awo-scheduled\">{{data.workOrderStatus}}</span>\r\n                                                              </td>\r\n                                                              <td class=\"item\" *ngIf=\"data.workOrderStatus =='Paused'\">\r\n                                                                <span class=\"label label-awo-pause\">{{data.workOrderStatus}}</span>\r\n                                                              </td>\r\n                                                              <td class=\"item\" *ngIf=\"data.workOrderStatus =='Cancelled'\">\r\n                                                                <span class=\"label label-awo-cancelled\">{{data.workOrderStatus}}</span>\r\n                                                              </td>\r\n                                                              <td class=\"item\" *ngIf=\"data.workOrderStatus =='In Progress'\">\r\n                                                                <span class=\"label label-awo-inprogress\">{{data.workOrderStatus}}</span>\r\n                                                              </td>\r\n                                                              <td class=\"item\" *ngIf=\"data.workOrderStatus =='Invoiced'\">\r\n                                                                <span class=\"label label-awo-invoiced\">{{data.workOrderStatus}}</span>\r\n                                                              </td>\r\n\r\n                                                              <td class=\"item\" *ngIf=\"data.workOrderStatus =='Recall'\">\r\n                                                                <span class=\"label label-awo-recall\">{{data.workOrderStatus}}</span>\r\n                                                              </td>\r\n                                                              <td class=\"item\" *ngIf=\"data.workOrderStatus =='Estimate'\">\r\n                                                                <span class=\"label label-awo-estimate\">{{data.workOrderStatus}}</span>\r\n                                                              </td>\r\n\r\n                                                              <td class=\"item\">\r\n                                                                <a (click)=\"viewWorkOrder(data.workOrderNumber)\">{{data.workOrderNumber}}</a>\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.source}}\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                Tiolet Install\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.createdOn}}\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.createdBy}}\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.modifiedOn}}\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.modifiedBy}}\r\n                                                              </td>\r\n                                                              <td class=\"center\">\r\n                                                                <a class=\"btn btn-xs btn-primary shiny\" (click)=\"editWorkOrder()\">\r\n                                                                  <i class=\"fa fa-edit\"></i>\r\n                                                                </a>\r\n                                                              </td>\r\n                                                            </tr>\r\n                                                          </tbody>\r\n                                                        </table> -->\r\n                                                      <!-- </div> -->\r\n                                                      <div *ngIf=\"!woResponseStatus\">\r\n                                                        <p>No Records Found</p>\r\n                                                      </div>\r\n                                                      <br>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <br />\r\n                                              <!--/Work Orders-->\r\n\r\n                                              <!--Estimates-->\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                                  <div class=\"form-title\">\r\n                                                    Estimates\r\n                                                  </div>\r\n                                                  <div class=\"row\">\r\n                                                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                                                      <!-- <div class=\"widget three-bordered\"> -->\r\n                                                      <!-- <div class=\"widget-header header gray\">\r\n                <span class=\"widget-caption\">List of Estimates</span>\r\n              </div> -->\r\n                                                      <!-- <div class=\"widget-body\"> -->\r\n                                                      <div class=\"table-scrollable\">\r\n                                                        <table\r\n                                                          class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                                                          <thead class=\"flip-content bordered-palegreen\">\r\n                                                            <tr>\r\n                                                              <th>\r\n                                                                Estimate #\r\n                                                              </th>\r\n                                                              <!-- <th>\r\n                                                                  Job Title\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Status\r\n                                                              </th> -->\r\n                                                              <th>\r\n                                                                Amount\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Created On\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Created By\r\n                                                              </th>\r\n                                                              <!-- <th>\r\n                                                                Last Updated On\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Last Updated By\r\n                                                              </th> -->\r\n                                                              <th>\r\n                                                                View\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Edit\r\n                                                              </th>\r\n                                                            </tr>\r\n                                                          </thead>\r\n                                                          <tbody>\r\n                                                            <tr *ngFor=\"let data of estimateList\">\r\n                                                              <td>\r\n                                                                {{data.estimateNo}}\r\n                                                              </td>\r\n                                                              <!-- <td>\r\n                                                                Toilet Install\r\n                                                              </td> -->\r\n                                                              <!-- <td class=\"center\">\r\n                                                                <span class=\"label bg-info\">Meeting</span>\r\n                                                              </td> -->\r\n                                                              <td>\r\n                                                                {{data.totalPrice}}\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.createdOn}}\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                {{data.createdBy}}\r\n                                                              </td>\r\n                                                              <!-- <td>\r\n                                                                03-10-2019@11:00\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                gayatri.s@sunkpo.com\r\n                                                              </td> -->\r\n                                                              <td class=\"center\">\r\n                                                                <a class=\"btn btn-xs btn-success\"\r\n                                                                  (click)=\"viewEstimate()\">\r\n                                                                  <i class=\"fa fa-eye\"></i>\r\n                                                                </a>\r\n                                                              </td>\r\n                                                              <td class=\"center\">\r\n                                                                <a class=\"btn btn-xs btn-primary\"\r\n                                                                  (click)=\"editEstimate()\">\r\n                                                                  <i class=\"fa fa-pencil\"></i>\r\n                                                                </a>\r\n                                                              </td>\r\n                                                            </tr>\r\n\r\n                                                          </tbody>\r\n                                                        </table>\r\n                                                      </div>\r\n                                                      <br>\r\n                                                      <div *ngIf=\"!estimateResponseStatus\">\r\n                                                        <span>No Records found</span>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <br />\r\n                                              <!--/Estimates-->\r\n\r\n                                              <!--Invoices-->\r\n                                              <div class=\"row\">\r\n                                                <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                                  <div class=\"form-title\">\r\n                                                    Invoices\r\n                                                  </div>\r\n                                                  <div class=\"row\">\r\n                                                    <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                                      <b style=\"color:blue\">List of Invoices Coming Soon</b>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                              <br />\r\n                                              <!--Invoices-->\r\n\r\n\r\n                                            </div>\r\n                                          </div>\r\n                                          <!-- /Customer History -->\r\n                                        </div>\r\n                                      </ng-container>\r\n                                    </form>\r\n                                  </div>\r\n\r\n                                </div>\r\n                                <!-- Customer History - Collapsible -->\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Collapsible -->\r\n\r\n\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <hr class=\"hr-gray-thick\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <!-- Bottom Buttons -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-4 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <button type=\"submit\" class=\"btn btn-gray\" (click)=\"backtoListCustomers()\"><i\r\n                                    class=\"fa fa-arrow-left\"></i>\r\n                                  Back to List of Customers</button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-5 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <button type=\"button\" class=\"btn btn-blue\" (click)=\"editCustomer()\"><i\r\n                                    class=\"fa fa-pencil\"></i>\r\n                                  Edit</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Bottom Buttons -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <hr class=\"hr-gray-thick\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </form>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/proz-customer/van-customers/view-customer/view-customer.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/view-customer/view-customer.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n    padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.checkbox, .radio {\n  position: relative;\n  display: block;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\n.col-sm-6 {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.button-center {\n  text-align: center; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei1jdXN0b21lci92YW4tY3VzdG9tZXJzL3ZpZXctY3VzdG9tZXIvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3otY3VzdG9tZXJcXHZhbi1jdXN0b21lcnNcXHZpZXctY3VzdG9tZXJcXHZpZXctY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2Ysa0NBQWlDO0VBRWpDO3FCQUNpQjtFQUdqQixnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjt5QkFDc0IsRUFFeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksc0NBQXFDLEVBRXhDOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCwyQkFBMEI7RUFDMUIsOEJBQTZCLEVBQ2hDOztBQUVEO0VBQ0ksNkJBQTRCO0VBQzVCLDhCQUE2QixFQUNoQzs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2Qzs7QUFFRDtFQUNBLG1CQUFrQixFQUNqQjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixrQ0FBaUM7RUFDakMsNENBQTJDLEVBQzlDOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLGtDQUFpQyxFQUNwQzs7QUFFRDtFQUNJLDBCQUF5QixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL3Byb3otY3VzdG9tZXIvdmFuLWN1c3RvbWVycy92aWV3LWN1c3RvbWVyL3ZpZXctY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS10aXRsZXtcclxuICAgIGNvbG9yOiAgIzVkYjJmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuXHJcbiAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDA7Ki8gICAgXHJcbiAgICAvLyBjb2xvcjogICM3ZTM3OTQ7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcblxyXG59XHJcblxyXG4ubWFuZGF0b3J5e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmhyLWdyYXktdGhpY2t7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxufSBcclxuXHJcbi5oci1ncmF5eyAgICBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgIzdlMzc5NCAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuaW5wdXR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tb2Nre1xyXG4gICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2NrLWNvbmZ7XHJcbiAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wcm9ncmVzc3tcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGhyZWUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG59XHJcblxyXG4uY2hlY2tib3gsIC5yYWRpbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2wtc20tNiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuIFxyXG4uYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWJsdWV7ICAgIFxyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1dHRvbi1jZW50ZXJ7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZS5jb2xsYXBzZWQge1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6aG92ZXI6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlOmFmdGVyIHtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/proz-customer/van-customers/view-customer/view-customer.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/proz-customer/van-customers/view-customer/view-customer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ViewCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomerComponent", function() { return ViewCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");




// import { ImageUpload } from '../../../../utilities/imageupload'





var ViewCustomerComponent = /** @class */ (function () {
    function ViewCustomerComponent(beyond, router, formBuilder, route, http, toastr, spinner) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.addressArray = [];
        // cardArray: any = []
        this.addressCheck = false;
        this.disableSubmit = false;
        this.imagePreview = "../../assets/img/avatars/default_person.jpg";
    }
    ViewCustomerComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.customerId = this.route.snapshot.params['customerId'];
        this.loginData = JSON.parse(localStorage.getItem("login"));
        console.log("loginData" + JSON.stringify(this.loginData.loginCode));
        console.log("customer id" + this.customerId);
        this.viewCustomer();
        this.listWorkOrder();
        this.listEstimate();
        this.viewImageData();
        this.viewCustomerFG = this.formBuilder.group({
            customerType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // accountNumber: ['', Validators.required],
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            creditLimit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            source: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            paymentMethod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            doNotServe: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            yesPoRequired: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            noPoRequired: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            donotServeNotes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            pendCompletion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            taxExempt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            phoneType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            dispatchTextNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            propertyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            sendInvoiceBy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            serviceAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            invoiceEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            crossSt1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            crossSt2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            adminNotes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        // this.addAddressList = this.formBuilder.group({
        //   fromAddressValues: this.formBuilder.array([])
        // })
        // this.addCardList = this.formBuilder.group({
        //   fromCardValues: this.formBuilder.array([])
        // })
    };
    Object.defineProperty(ViewCustomerComponent.prototype, "addressInfoValues", {
        // createAddressInfo() {
        //   return this.formBuilder.group({
        //     firstName: ['', Validators.required],
        //     lastName: ['', Validators.required],
        //     userType: ['', Validators.required],
        //     email: ['', Validators.required],
        //     phoneNumber: ['', Validators.required],
        //     phoneType: ['', Validators.required],
        //     dispatchTextNumber: ['', Validators.required],
        //     propertyName: ['', Validators.required],
        //     sendInvoice: ['', Validators.required],
        //     serviceAddress: ['', Validators.required],
        //     invoiceEmail: ['', Validators.required],
        //     unit: ['', Validators.required],
        //     zipCode: ['', Validators.required],
        //     city: ['', Validators.required],
        //     state: ['', Validators.required],
        //     crossSt1: ['', Validators.required],
        //     crossSt2: ['', Validators.required],
        //     adminNotes: ['', Validators.required],
        //   });
        // }
        // addFieldValue() {
        //   this.items = this.addAddressList.get('fromAddressValues') as FormArray;
        //   this.items.push(this.createAddressInfo());
        // }
        get: function () {
            return this.addAddressList.get('fromAddressValues');
        },
        enumerable: true,
        configurable: true
    });
    ViewCustomerComponent.prototype.deleteFieldValue = function (index) {
        this.addressInfoValues.removeAt(index);
    };
    // createCardInfo() {
    //   console.log("in card info")
    //   return this.formBuilder.group({
    //   });
    // }
    // addCardFieldValue() {
    //   this.items = this.addCardList.get('fromCardValues') as FormArray;
    //   this.items.push(this.createCardInfo());
    // }
    // get creditCardValues(): FormArray {
    //   return this.addCardList.get('fromCardValues') as FormArray;
    // }
    // delCreditCard(index: number) {
    //   this.creditCardValues.removeAt(index);
    // }
    // view employee starts
    ViewCustomerComponent.prototype.viewCustomer = function () {
        var _this = this;
        console.log("view customer id" + this.customerId);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getVanlynkCustomerDetails/' + this.customerId + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var customerData = data.json();
            if (customerData.status == 200) {
                _this.spinner.hide();
                _this.customerDataInfo = customerData.customerInfo[0];
                _this.addressDataInfo = customerData.addressInfo[0];
                //this.creditDataInfo = customerData.creditCardInfo;
                console.log("customerDataInfo" + JSON.stringify(_this.customerDataInfo));
                console.log("addressDataInfo" + JSON.stringify(_this.addressDataInfo));
                //console.log("creditDataInfo" + JSON.stringify(this.creditDataInfo))
                _this.viewCustomerFG = _this.formBuilder.group({
                    customerId: [_this.customerDataInfo.customerId, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    customerType: [_this.customerDataInfo.customerType, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    // accountNumber: [this.customerDataInfo.accountNumber, Validators.required],
                    customerName: [_this.customerDataInfo.customerName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    creditLimit: [_this.customerDataInfo.creditLimit, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    terms: [_this.customerDataInfo.terms, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    source: [_this.customerDataInfo.source, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    paymentMethod: [_this.customerDataInfo.paymentMethod, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    doNotServe: [_this.customerDataInfo.doNotServe, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    yesPoRequired: [_this.customerDataInfo.poRequired, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    noPoRequired: [_this.customerDataInfo.poRequired, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    donotServeNotes: [_this.customerDataInfo.doNotServeNotes, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    pendCompletion: [_this.customerDataInfo.pendCompletion, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    taxExempt: [_this.customerDataInfo.taxExempt, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    firstName: [_this.addressDataInfo.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    lastName: [_this.addressDataInfo.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    userType: [_this.addressDataInfo.userType, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    email: [_this.addressDataInfo.email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    phoneNumber: [_this.addressDataInfo.phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    phoneType: [_this.addressDataInfo.phoneType, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    dispatchTextNumber: [_this.addressDataInfo.dispatchTextNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    propertyName: [_this.addressDataInfo.propertyName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    sendInvoiceBy: [_this.addressDataInfo.sendInvoiceBy, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    serviceAddress: [_this.addressDataInfo.serviceAddress, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    invoiceEmail: [_this.addressDataInfo.invoiceEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    unit: [_this.addressDataInfo.unit, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    zipCode: [_this.addressDataInfo.zipCode, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    city: [_this.addressDataInfo.city, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    state: [_this.addressDataInfo.state, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    crossSt1: [_this.addressDataInfo.crossSt1, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    crossSt2: [_this.addressDataInfo.crossSt2, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    adminNotes: [_this.addressDataInfo.adminNotes, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    // nameOnCard: [this.creditDataInfo.nameOnCard, Validators.required],
                    // cardType: [this.creditDataInfo.cardType, Validators.required],
                    // cardNumber: [this.creditDataInfo.cardNumber, Validators.required],
                    // crvNumber: [this.creditDataInfo.crvNumber, Validators.required],
                    // expiresOnDate: [this.creditDataInfo.expiresOn, Validators.required],
                    createdOn: [_this.addressDataInfo.createdOn, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                    // expiresOnYear: [this.creditDataInfo.expiresOn.split(' ')[1], Validators.required],
                    // isActive: [this.creditDataInfo.isActive, Validators.required],
                    // isActiveForSA: [this.creditDataInfo.isActiveForSA, Validators.required],
                    // addressOnCard: [this.creditDataInfo.addressOnCard, Validators.required],
                    // cardState: [this.creditDataInfo.state, Validators.required],
                    // cardCity: [this.creditDataInfo.city, Validators.required],
                    // cardZipCode: [this.creditDataInfo.zipCode, Validators.required],
                    // cardNotes: [this.creditDataInfo.notes, Validators.required],
                    customerImage: [_this.customerDataInfo.customerImage, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                });
                _this.custData = true;
            }
            else {
                _this.spinner.hide();
                _this.custData = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    // this.setAddress()
    // this.setCreditCard()
    ViewCustomerComponent.prototype.setAddress = function () {
        var _this = this;
        console.log("in set adress");
        var control = this.addAddressList.controls.fromAddressValues;
        console.log("length" + this.addressDataInfo.length);
        this.addressDataInfo.forEach(function (x, i) {
            console.log(x);
            control.push(_this.formBuilder.group({
                firstName: x.firstName,
                lastName: x.lastName,
                userType: x.userType,
                email: x.emailId,
                phoneNumber: x.phoneNumber,
                phoneType: x.phoneType,
                dispatchTextNumber: x.dispatchTextNumber,
                propertyName: x.propertyName,
                sendInvoiceBy: x.sendInvoiceBy,
                serviceAddress: x.address,
                invoiceEmail: x.invoiceEmail,
                unit: x.unit,
                zipCode: x.zipCode,
                city: x.city,
                state: x.state,
                crossSt1: x.crossSt1,
                crossSt2: x.crossSt2,
                adminNotes: x.adminNotes,
                customerImage: x.customerImage
            }));
            if (i == _this.addressDataInfo.length - 1) {
                return control;
            }
        });
    };
    // setCreditCard() {
    //   console.log("in set card")
    //   let control = <FormArray>this.addCardList.controls.fromCardValues;
    //   console.log("length" + this.creditDataInfo.length)
    //   this.creditDataInfo.forEach((x, i) => {
    //     console.log(x)
    //     control.push(this.formBuilder.group({
    //       nameOnCard: x.nameOnCard,
    //       cardType: x.cardType,
    //       cardNumber: x.cardNumber,
    //       crvNumber: x.crvNumber,
    //       createdOn: x.createdOn,
    //       expiresOnDate: x.expiresOn.split(' ')[0],
    //       expiresOnYear: x.expiresOn.split(' ')[1],
    //       isActive: x.isActive,
    //       isActiveForSA: x.isActiveForSA,
    //       addressOnCard: x.addressOnCard,
    //       cardState: x.state,
    //       cardCity: x.city,
    //       cardZipCode: x.zipCode,
    //       cardNotes: x.notes,
    //     }))
    //     if (i == this.creditDataInfo.length - 1) {
    //       return control;
    //     }
    //   })
    // }
    //   // view employee end
    /* -- Top Buttons -- */
    ViewCustomerComponent.prototype.newWorkOrderbtn = function () {
        console.log("doNotServe123" + this.customerDataInfo.doNotServe);
        if (this.customerDataInfo.doNotServe == "true") {
            alert("Workorder creation not allowed as this is a Do Not Serve Customer. ");
        }
        else {
            console.log("doNotServe123" + this.viewCustomerFG.value.doNotServe);
            console.log("customerId" + this.customerId);
            this.router.navigate(['/workorder/addWorkOrder', this.customerId]);
        }
    };
    ViewCustomerComponent.prototype.newEstimate = function (customerId) {
        console.log("customerId" + this.customerId);
        console.log("doNotServe123" + this.customerDataInfo.doNotServe);
        if (this.customerDataInfo.doNotServe == "true") {
            alert("New Estimate creation not allowed as this is a Do Not Serve Customer. ");
        }
        else {
            console.log("doNotServe123" + this.viewCustomerFG.value.doNotServe);
            console.log("customerId" + this.customerId);
            this.router.navigate(['/estimate/addEstimate1', this.customerId]);
        }
        // if (this.editVanCustomer.value.doNotServe == "") {
        //   console.log("customerId" + this.customerId)
        //   this.router.navigate(['/proz/addEstimate1', this.customerId])
        // } else {
        //   alert("New Estimate creation not allowed as this is a Do Not Serve Customer. ")
        // }
    };
    ViewCustomerComponent.prototype.newInvoice = function (customerId) {
        console.log("customerId" + this.customerId);
        if (this.viewCustomerFG.value.doNotServe == "") {
            this.router.navigate(['/invoice/addInvoice', this.customerId]);
        }
        else {
            alert("New Invoice creation not allowed as this is a Do Not Serve Customer. ");
        }
    };
    /* -- /Top Buttons -- */
    /* -- Bottom Buttons -- */
    ViewCustomerComponent.prototype.backtoListCustomers = function () {
        this.router.navigate(['/proCustomer/listVanCustomers']);
    };
    ViewCustomerComponent.prototype.customerHistory = function () {
        this.router.navigate(['/workorder/listWorkOrders']);
    };
    ViewCustomerComponent.prototype.editCustomer = function () {
        this.router.navigate(['/proCustomer/editVanCustomer', this.customerId]);
    };
    ViewCustomerComponent.prototype.deleteCustomer = function () {
    };
    /* -- /Bottom Buttons -- */
    ViewCustomerComponent.prototype.listWorkOrder = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/customerWorkOrder/' + this.customerId, options)
            .subscribe(function (data) {
            var woResponse = data.json();
            if (woResponse.status == 200) {
                console.log("group Details" + JSON.stringify(woResponse));
                _this.bill = woResponse.billingAddress;
                console.log("list of workOrderList" + JSON.stringify(_this.bill));
                _this.woResponseStatus = true;
            }
            else {
                _this.woResponseStatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    ViewCustomerComponent.prototype.viewWorkOrder = function (workOrderNumber) {
        localStorage.setItem('workOrderDetails', JSON.stringify(this.bill));
        this.router.navigate(['/workorder/viewWorkOrder', workOrderNumber]);
    };
    ViewCustomerComponent.prototype.listEstimate = function () {
        var _this = this;
        console.log("in list estimate");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/listOfEstimatesForPro/' + this.loginData.loginCode + "/" + this.customerId, options)
            .subscribe(function (data) {
            var estimateResponse = data.json();
            console.log("estimate Details" + JSON.stringify(estimateResponse));
            if (estimateResponse.status == 200) {
                _this.estimateList = estimateResponse.response;
                console.log("estimate" + JSON.stringify(_this.estimateList));
                _this.estimateResponseStatus = true;
            }
            else {
                _this.estimateResponseStatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    ViewCustomerComponent.prototype.viewImageData = function () {
        var _this = this;
        //console.log("view called" + this.partID)
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getCustomerViewImage/' + this.customerId, options)
            .subscribe(function (data) {
            var customerData = data.json();
            _this.viewImage = customerData.response[0];
            console.log("vanData" + JSON.stringify(_this.viewImage));
            if (_this.viewImage.customerImage == "default_person.jpg") {
                _this.imagePreview = "../../assets/img/avatars/default_person.jpg";
                console.log("resume" + _this.imagePreview);
            }
            else {
                _this.imagePreview = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/" + _this.viewImage.customerImage;
                // resume1http://localhost:8888/uploads/33f46c179cb54c20bf5a0a5a05ea8188
                console.log("resume1" + _this.imagePreview);
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    ViewCustomerComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    ViewCustomerComponent.prototype.list = function () {
        this.router.navigate(['/proCustomer/listVanCustomers']);
    };
    ViewCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-view-customer',
            template: __webpack_require__(/*! ./view-customer.component.html */ "./src/app/proz-customer/van-customers/view-customer/view-customer.component.html"),
            styles: [__webpack_require__(/*! ./view-customer.component.scss */ "./src/app/proz-customer/van-customers/view-customer/view-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], ViewCustomerComponent);
    return ViewCustomerComponent;
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



/***/ })

}]);
//# sourceMappingURL=proz-customer-proz-customer-module.js.map