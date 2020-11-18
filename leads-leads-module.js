(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leads-leads-module"],{

/***/ "./src/app/leads/leads-layout/leads-layout.component.html":
/*!****************************************************************!*\
  !*** ./src/app/leads/leads-layout/leads-layout.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/leads/leads-layout/leads-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/leads/leads-layout/leads-layout.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYWRzL2xlYWRzLWxheW91dC9sZWFkcy1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/leads/leads-layout/leads-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/leads/leads-layout/leads-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: LeadsLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsLayoutComponent", function() { return LeadsLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeadsLayoutComponent = /** @class */ (function () {
    function LeadsLayoutComponent() {
    }
    LeadsLayoutComponent.prototype.ngOnInit = function () {
    };
    LeadsLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leads-layout',
            template: __webpack_require__(/*! ./leads-layout.component.html */ "./src/app/leads/leads-layout/leads-layout.component.html"),
            styles: [__webpack_require__(/*! ./leads-layout.component.scss */ "./src/app/leads/leads-layout/leads-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeadsLayoutComponent);
    return LeadsLayoutComponent;
}());



/***/ }),

/***/ "./src/app/leads/leads-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/leads/leads-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LeadsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsRoutingModule", function() { return LeadsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _proz_leads_assign_lead2_staff_assign_lead2_staff_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proz-leads/assign-lead2-staff/assign-lead2-staff.component */ "./src/app/leads/proz-leads/assign-lead2-staff/assign-lead2-staff.component.ts");
/* harmony import */ var _proz_leads_add_lead_add_lead_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proz-leads/add-lead/add-lead.component */ "./src/app/leads/proz-leads/add-lead/add-lead.component.ts");
/* harmony import */ var _proz_leads_view_lead_view_lead_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proz-leads/view-lead/view-lead.component */ "./src/app/leads/proz-leads/view-lead/view-lead.component.ts");
/* harmony import */ var _leads_layout_leads_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leads-layout/leads-layout.component */ "./src/app/leads/leads-layout/leads-layout.component.ts");
/* harmony import */ var _proz_leads_list_leads_list_leads_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./proz-leads/list-leads/list-leads.component */ "./src/app/leads/proz-leads/list-leads/list-leads.component.ts");
/* harmony import */ var _proz_leads_lead_purchase_history_lead_purchase_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proz-leads/lead-purchase-history/lead-purchase-history.component */ "./src/app/leads/proz-leads/lead-purchase-history/lead-purchase-history.component.ts");









var routes = [
    {
        path: '', component: _leads_layout_leads_layout_component__WEBPACK_IMPORTED_MODULE_6__["LeadsLayoutComponent"],
        children: [
            {
                path: 'assignleadToStaff/:id',
                component: _proz_leads_assign_lead2_staff_assign_lead2_staff_component__WEBPACK_IMPORTED_MODULE_3__["AssignLead2StaffComponent"]
            },
            {
                path: 'listLeads',
                component: _proz_leads_list_leads_list_leads_component__WEBPACK_IMPORTED_MODULE_7__["ListLeadsComponent"]
            },
            {
                path: 'addLead',
                component: _proz_leads_add_lead_add_lead_component__WEBPACK_IMPORTED_MODULE_4__["AddLeadComponent"]
            },
            {
                path: 'viewLead/:anyCode/:leadId',
                component: _proz_leads_view_lead_view_lead_component__WEBPACK_IMPORTED_MODULE_5__["ViewLeadComponent"]
            },
            {
                path: 'leadpurchasehistory',
                component: _proz_leads_lead_purchase_history_lead_purchase_history_component__WEBPACK_IMPORTED_MODULE_8__["LeadPurchaseHistoryComponent"]
            },
        ]
    }
];
var LeadsRoutingModule = /** @class */ (function () {
    function LeadsRoutingModule() {
    }
    LeadsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LeadsRoutingModule);
    return LeadsRoutingModule;
}());



/***/ }),

/***/ "./src/app/leads/leads.module.ts":
/*!***************************************!*\
  !*** ./src/app/leads/leads.module.ts ***!
  \***************************************/
/*! exports provided: LeadsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsModule", function() { return LeadsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _leads_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leads-routing.module */ "./src/app/leads/leads-routing.module.ts");
/* harmony import */ var _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/prozadmin-sidemenu/proz-sidemenu.module */ "./src/app/common/prozadmin-sidemenu/proz-sidemenu.module.ts");
/* harmony import */ var _common_commonheader_commonheader_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/commonheader/commonheader.module */ "./src/app/common/commonheader/commonheader.module.ts");
/* harmony import */ var _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/commonvanlynkheader/commonvanlynkheader.module */ "./src/app/common/commonvanlynkheader/commonvanlynkheader.module.ts");
/* harmony import */ var _common_commontopprozpurplefooter_commontopprozfooter_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/commontopprozpurplefooter/commontopprozfooter.module */ "./src/app/common/commontopprozpurplefooter/commontopprozfooter.module.ts");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js");
/* harmony import */ var _proz_leads_assign_lead2_staff_assign_lead2_staff_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./proz-leads/assign-lead2-staff/assign-lead2-staff.component */ "./src/app/leads/proz-leads/assign-lead2-staff/assign-lead2-staff.component.ts");
/* harmony import */ var _proz_leads_add_lead_add_lead_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./proz-leads/add-lead/add-lead.component */ "./src/app/leads/proz-leads/add-lead/add-lead.component.ts");
/* harmony import */ var _proz_leads_view_lead_view_lead_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./proz-leads/view-lead/view-lead.component */ "./src/app/leads/proz-leads/view-lead/view-lead.component.ts");
/* harmony import */ var _leads_layout_leads_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./leads-layout/leads-layout.component */ "./src/app/leads/leads-layout/leads-layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _proz_leads_list_leads_list_leads_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./proz-leads/list-leads/list-leads.component */ "./src/app/leads/proz-leads/list-leads/list-leads.component.ts");
/* harmony import */ var _proz_leads_lead_purchase_history_lead_purchase_history_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./proz-leads/lead-purchase-history/lead-purchase-history.component */ "./src/app/leads/proz-leads/lead-purchase-history/lead-purchase-history.component.ts");


















var LeadsModule = /** @class */ (function () {
    function LeadsModule() {
    }
    LeadsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_proz_leads_list_leads_list_leads_component__WEBPACK_IMPORTED_MODULE_16__["ListLeadsComponent"], _proz_leads_add_lead_add_lead_component__WEBPACK_IMPORTED_MODULE_10__["AddLeadComponent"], _proz_leads_assign_lead2_staff_assign_lead2_staff_component__WEBPACK_IMPORTED_MODULE_9__["AssignLead2StaffComponent"], _proz_leads_view_lead_view_lead_component__WEBPACK_IMPORTED_MODULE_11__["ViewLeadComponent"], _leads_layout_leads_layout_component__WEBPACK_IMPORTED_MODULE_12__["LeadsLayoutComponent"], _proz_leads_lead_purchase_history_lead_purchase_history_component__WEBPACK_IMPORTED_MODULE_17__["LeadPurchaseHistoryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _leads_routing_module__WEBPACK_IMPORTED_MODULE_3__["LeadsRoutingModule"],
                _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_4__["ProzSidemenuModule"],
                _common_commonheader_commonheader_module__WEBPACK_IMPORTED_MODULE_5__["CommonHeaderModule"],
                _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_6__["CommonvanlynkheaderModule"],
                _common_commontopprozpurplefooter_commontopprozfooter_module__WEBPACK_IMPORTED_MODULE_7__["CommontopprozfooterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_15__["NgxMaskModule"],
                ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_8__["TypeaheadModule"].forRoot(),
            ]
        })
    ], LeadsModule);
    return LeadsModule;
}());



/***/ }),

/***/ "./src/app/leads/proz-leads/add-lead/add-lead.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/leads/proz-leads/add-lead/add-lead.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a href=\"#\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">Customer</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">List of Customers/Leads</a>\r\n          </li>\r\n          <li class=\"active\">Add New Customer/Lead</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Add New Customer/Lead</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <!-- Tabs -->\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <div class=\"tabbable\">\r\n              <ul class=\"nav nav-tabs nav-justified\" id=\"myTab5\">\r\n                <li class=\"tab-purple active\">\r\n                  <a data-toggle=\"tab\" href=\"#addCustomerType\">\r\n                    Customer Details\r\n                  </a>\r\n                </li>\r\n                <li class=\"tab-red\">\r\n                  <a data-toggle=\"tab\" href=\"#addAddress\">\r\n                    Address\r\n                  </a>\r\n                </li>\r\n                <li class=\"tab-purple\">\r\n                  <a data-toggle=\"tab\" href=\"#addServiceAddress\">\r\n                    Service Address Details\r\n                  </a>\r\n                </li>\r\n                <li class=\"tab-red\">\r\n                  <a data-toggle=\"tab\" href=\"#addCreditCard\">\r\n                    Credit Card List\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n\r\n              <div class=\"tab-content\">\r\n                <!-- Customer Details -->\r\n                <div id=\"addCustomerType\" class=\"tab-pane in active\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                          <div class=\"well with-header with-footer three-bordered\">\r\n                            <div class=\"header bg-purple\">\r\n                              Customer Details\r\n                            </div>\r\n                            <div id=\"registration-form\">\r\n                              <form role=\"form\">\r\n                                <!--Customer Details Form-->\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"customerTypeLbl\">\r\n                                        <b>Customer Type <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <div class=\"checkbox\">\r\n                                        <label>\r\n                                          <input type=\"checkbox\" class=\"colored-success\" formControlName=\"regualar\">\r\n                                          <span class=\"text\">Regular (C.O.D.) </span>\r\n                                        </label>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <div class=\"checkbox\">\r\n                                        <label>\r\n                                          <input type=\"checkbox\" class=\"colored-success\" formControlName=\"commercial\">\r\n                                          <span class=\"text\">Commercial </span>\r\n                                        </label>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"customerIDLbl\">\r\n                                        <b>Customer # <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"customerID\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"customerNameLbl\">\r\n                                        <b>Company/Customer Name <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"customerName\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"creditLimitLbl\">\r\n                                        <b>Credit Limit <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"creditLimit\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"termsLbl\">\r\n                                        <b>Terms <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"terms\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"sourceLbl\">\r\n                                        <b>Source <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <select class=\"form-control\" formControlName=\"source\">\r\n                                        <option value=\"Google\">Google</option>\r\n                                        <option value=\"Yelp\">Yelp</option>\r\n                                        <option value=\"Home Advisor\">Home Advisor</option>\r\n                                        <option value=\"Thumbtack\">Thumbtack</option>\r\n                                        <option value=\"Word of Mouth\">Word of Mouth</option>\r\n                                        <option value=\"Money Mailer\">Money Mailer</option>\r\n                                        <option value=\"HomeMag\">HomeMag</option>\r\n                                        <option value=\"Angies List\">Angies List</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <div class=\"checkbox\">\r\n                                        <label>\r\n                                          <input type=\"checkbox\" class=\"colored-success\"\r\n                                            formControlName=\"creditCardRequest\">\r\n                                          <span class=\"text\">Credit Card Request </span>\r\n                                        </label>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <div class=\"checkbox\">\r\n                                        <label>\r\n                                          <input type=\"checkbox\" class=\"colored-success\" formControlName=\"taxExempt\">\r\n                                          <span class=\"text\">Tax Exempt </span>\r\n                                        </label>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <div class=\"checkbox\">\r\n                                        <label>\r\n                                          <input type=\"checkbox\" class=\"colored-success\" formControlName=\"donotServe\">\r\n                                          <span class=\"text\">Do Not Serve </span>\r\n                                        </label>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <div class=\"checkbox\">\r\n                                        <label>\r\n                                          <input type=\"checkbox\" class=\"colored-success\" formControlName=\"poRequired\">\r\n                                          <span class=\"text\">P. O. Required </span>\r\n                                        </label>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <div class=\"checkbox\">\r\n                                        <label>\r\n                                          <input type=\"checkbox\" class=\"colored-success\"\r\n                                            formControlName=\"pendCompletion\">\r\n                                          <span class=\"text\">Pend Completion </span>\r\n                                        </label>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"donotServeNotesLbl\">\r\n                                        <b>Do Not Serve Notes <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"donotServeNotes\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Customer Details Form -->\r\n                              </form>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- /Customer Details -->\r\n\r\n\r\n                <!-- Address Details -->\r\n                <div id=\"addAddress\" class=\"tab-pane in active\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                          <div class=\"well with-header with-footer three-bordered\">\r\n                            <div class=\"header bg-purple\">\r\n                              Address\r\n                            </div>\r\n                            <div id=\"registration-form\">\r\n                              <form role=\"form\">\r\n                                <!-- Address Form -->\r\n                                <!-- Address1 -->\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"firstNameLbl\">\r\n                                        <b>First Name <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"firstName\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"lastNameLbl\">\r\n                                        <b>Last Name <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"lastName\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"userTypeLbl\">\r\n                                        <b>User Type <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <select class=\"form-control\" formControlName=\"userType\">\r\n                                        <option value=\"Owner\">Owner</option>\r\n                                        <option value=\"Tenant\">Tenant</option>\r\n                                        <option value=\"Manager\">Manager</option>\r\n                                        <option value=\"Representative\">Representative</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"emailLbl\">\r\n                                        <b>Email <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"email\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"phoneNumberLbl\">\r\n                                        <b>Phone Number <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"phoneNumber\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"phoneTypeLbl\">\r\n                                        <b>Phone Type <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <select class=\"form-control\" formControlName=\"phoneType\">\r\n                                        <option value=\"Cell\">Cell</option>\r\n                                        <option value=\"Home\">Home</option>\r\n                                        <option value=\"Work\">Work</option>\r\n                                        <option value=\"Fax\">Fax</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <hr class=\"hr-purple\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Address1 -->\r\n\r\n\r\n                                <!-- Address2 -->\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"firstNameLbl\">\r\n                                        <b>First Name <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"firstName\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"lastNameLbl\">\r\n                                        <b>Last Name <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"lastName\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"userTypeLbl\">\r\n                                        <b>User Type <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <select class=\"form-control\" formControlName=\"userType\">\r\n                                        <option value=\"Owner\">Owner</option>\r\n                                        <option value=\"Tenant\">Tenant</option>\r\n                                        <option value=\"Manager\">Manager</option>\r\n                                        <option value=\"Representative\">Representative</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"emailLbl\">\r\n                                        <b>Email <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"email\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"phoneNumberLbl\">\r\n                                        <b>Phone Number <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"phoneNumber\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"phoneTypeLbl\">\r\n                                        <b>Phone Type <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <select class=\"form-control\" formControlName=\"phoneType\">\r\n                                        <option value=\"Cell\">Cell</option>\r\n                                        <option value=\"Home\">Home</option>\r\n                                        <option value=\"Work\">Work</option>\r\n                                        <option value=\"Fax\">Fax</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <hr class=\"hr-purple\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Address2 -->\r\n\r\n\r\n                                <!-- Address3 -->\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"firstNameLbl\">\r\n                                        <b>First Name <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"firstName\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"lastNameLbl\">\r\n                                        <b>Last Name <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"lastName\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"userTypeLbl\">\r\n                                        <b>User Type <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <select class=\"form-control\" formControlName=\"userType\">\r\n                                        <option value=\"Owner\">Owner</option>\r\n                                        <option value=\"Tenant\">Tenant</option>\r\n                                        <option value=\"Manager\">Manager</option>\r\n                                        <option value=\"Representative\">Representative</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"emailLbl\">\r\n                                        <b>Email <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"email\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"phoneNumberLbl\">\r\n                                        <b>Phone Number <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"phoneNumber\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"phoneTypeLbl\">\r\n                                        <b>Phone Type <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <select class=\"form-control\" formControlName=\"phoneType\">\r\n                                        <option value=\"Cell\">Cell</option>\r\n                                        <option value=\"Home\">Home</option>\r\n                                        <option value=\"Work\">Work</option>\r\n                                        <option value=\"Fax\">Fax</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- <div class=\"row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                          <div class=\"form-group\">\r\n                                            <hr class=\"hr-purple\">\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>                                                 -->\r\n                                <!-- /Address3 -->\r\n\r\n                                <!-- <div class=\"row\">\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-success shiny\" (click)=\"addAddress()\"><i\r\n                                        class=\"fa fa-user-plus\"></i> Add More</button>\r\n                                  </div>\r\n                                </div> -->\r\n                                <!--/Address Form-->\r\n                              </form>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- /Address Details -->\r\n\r\n                <!-- Service Address Details -->\r\n                <div id=\"addServiceAddress\" class=\"tab-pane in active\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                          <div class=\"well with-header with-footer three-bordered\">\r\n                            <div class=\"header bg-purple\">\r\n                              Service Address Details\r\n                            </div>\r\n                            <div id=\"registration-form\">\r\n                              <!-- Address Form -->\r\n                              <form role=\"form\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"serviceAreaDetailsLbl\">\r\n                                        <b>Service Area Details <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"propertyNameLbl\">\r\n                                        <b>Property Name <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-9\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"propertyName\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <hr class=\"hr-purple\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- Billing Address -->\r\n                                <div class=\"form-title\">\r\n                                  Billing Address\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"customerNameLbl\">\r\n                                        <b>Company Name/Customer Name <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-9\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"customerName\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"firstNameLbl\">\r\n                                        <b>First Name <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"firstName\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"lastNameLbl\">\r\n                                        <b>Last Name <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"lastName\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"phoneNumberLbl\">\r\n                                        <b>Phone Number <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"phoneNumber\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"phoneTypeLbl\">\r\n                                        <b>Phone Type <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <select class=\"form-control\" formControlName=\"phoneType\">\r\n                                        <option value=\"Cell\">Cell</option>\r\n                                        <option value=\"Home\">Home</option>\r\n                                        <option value=\"Work\">Work</option>\r\n                                        <option value=\"Fax\">Fax</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"emailLbl\">\r\n                                        <b>Email <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"email\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"unitLbl\">\r\n                                        <b>Unit <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"unit\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"streetAddressLbl\">\r\n                                        <b>Billing Address <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"streetAddress\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"stateLbl\">\r\n                                        <b>State <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <!-- <select class=\"form-control\" id=\"stateRegistred\" name=\"status\" data-bv-field=\"row-title\"\r\n                                      formControlName=\"state\">\r\n                                      <option value=\"\">Select</option>\r\n                                      <option *ngFor=\"let data of statesData\" value={{data.stateName}}>\r\n                                        {{data.stateName}}\r\n                                      </option>\r\n                                    </select> -->\r\n                                      <select type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"state\">\r\n                                        <option value=\"California\">California</option>\r\n                                        <option value=\"Texas\">Texas</option>\r\n                                        <option value=\"Florida\">Florida</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"cityLbl\">\r\n                                        <b>City <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"city\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"zipCodeLbl\">\r\n                                        <b>Zip Code <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"zipCode\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <hr class=\"hr-purple\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Billing Address -->\r\n\r\n                                <!-- Service Address -->\r\n                                <div class=\"form-title\">\r\n                                  Service Address\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <div class=\"checkbox\">\r\n                                        <label>\r\n                                          <input type=\"checkbox\" class=\"colored-success\"\r\n                                            formControlName=\"sameAsBillingCC\">\r\n                                          <span class=\"text\">Same as Billing </span>\r\n                                        </label>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"streetAddressLbl\">\r\n                                        <b>Billing Address <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"streetAddress\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"stateLbl\">\r\n                                        <b>State <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <!-- <select class=\"form-control\" id=\"stateRegistred\" name=\"status\" data-bv-field=\"row-title\"\r\n                                        formControlName=\"state\">\r\n                                        <option value=\"\">Select</option>\r\n                                        <option *ngFor=\"let data of statesData\" value={{data.stateName}}>\r\n                                          {{data.stateName}}\r\n                                        </option>\r\n                                      </select> -->\r\n                                      <select type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"state\">\r\n                                        <option value=\"California\">California</option>\r\n                                        <option value=\"Texas\">Texas</option>\r\n                                        <option value=\"Florida\">Florida</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"cityLbl\">\r\n                                        <b>City <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"city\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"zipCodeLbl\">\r\n                                        <b>Zip Code <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"zipCode\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"unitLbl\">\r\n                                        <b>Unit <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"unit\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                  </div>\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-success shiny\" (click)=\"addAddress()\"><i\r\n                                        class=\"fa fa-check\"></i> Save Customer</button>\r\n                                  </div>\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-danger shiny\" (click)=\"addAddress()\"><i\r\n                                        class=\"fa fa-times\"></i> Reset</button>\r\n                                  </div>\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-primary shiny\" (click)=\"addAddress()\"><i\r\n                                        class=\"fa fa-plus\"></i> Add Service Address</button>\r\n                                  </div>\r\n                                </div> <br />\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-primary shiny\" (click)=\"addAddress()\"><i\r\n                                        class=\"fa fa-pencil\"></i> Edit Contact Info</button>\r\n                                  </div>\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-success shiny\" (click)=\"addAddress()\"><i\r\n                                        class=\"fa fa-plus\"></i> Add Work Order</button>\r\n                                  </div>\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-warning shiny\" (click)=\"addAddress()\"><i\r\n                                        class=\"fa fa-plus\"></i> New Estimate</button>\r\n                                  </div>\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-primary shiny\" (click)=\"addAddress()\"><i\r\n                                        class=\"fa fa-plus\"></i> New Inovice</button>\r\n                                  </div>\r\n                                </div>\r\n\r\n\r\n\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <hr class=\"hr-purple\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"crossSt1Lbl\">\r\n                                        <b>Cross St 1 <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"crossSt1\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"crossSt2Lbl\">\r\n                                        <b>Cross St 2 <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"crossSt2\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"adminNoticeLbl\">\r\n                                        <b>Admin Notice <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-9\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"adminNotice\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <hr class=\"hr-purple\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Service Address-->\r\n\r\n                                <!-- Add Tags -->\r\n                                <div class=\"form-title\">\r\n                                  Add Tags\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"customerSinceLbl\">\r\n                                        <b>Customer Since <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"customerSince\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"sendInvoiceToLbl\">\r\n                                        <b>Send Invoice To<span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                        formControlName=\"sendInvoiceTo\">\r\n                                        <option value=\"E-Mail\">E-Mail</option>\r\n                                        <option value=\"Cell\">Cell</option>\r\n                                        <option value=\"US Mail\">US Mail</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"invoiceEmailLbl\">\r\n                                        <b>Invoice Email <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"invoiceEmail\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"jobDispatchTextNumberLbl\">\r\n                                        <b>Job Dispatch Text No. <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"jobDispatchTextNumber\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"sourceLbl\">\r\n                                        <b>Source<span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <select class=\"form-control\" formControlName=\"source\">\r\n                                        <option value=\"Google\">Google</option>\r\n                                        <option value=\"Yelp\">Yelp</option>\r\n                                        <option value=\"Home Advisor\">Home Advisor</option>\r\n                                        <option value=\"Thumbtack\">Thumbtack</option>\r\n                                        <option value=\"Word of Mouth\">Word of Mouth</option>\r\n                                        <option value=\"Money Mailer\">Money Mailer</option>\r\n                                        <option value=\"HomeMag\">HomeMag</option>\r\n                                        <option value=\"Angies List\">Angies List</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"paymentMethodLbl\">\r\n                                        <b>Payment Method<span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                        formControlName=\"paymentMethod\">\r\n                                        <option value=\"E-Mail\">Credit Card</option>\r\n                                        <option value=\"Cell\">Check</option>\r\n                                        <option value=\"US Mail\">Cash</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Add Tags -->\r\n                              </form>\r\n                              <!--/Address Form-->\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- /Address Details -->\r\n\r\n\r\n\r\n                <!-- Credit Card List -->\r\n                <div id=\"addCreditCard\" class=\"tab-pane in active\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                          <div class=\"well with-header with-footer three-bordered\">\r\n                            <div class=\"header bg-purple\">\r\n                              Credit Card List\r\n                            </div>\r\n                            <div id=\"registration-form\">\r\n                              <form role=\"form\">\r\n                                <!-- Credit Card Form -->\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-success shiny\" (click)=\"addAddress()\"><i\r\n                                        class=\"fa fa-user-plus\"></i> Add New Credit Card</button>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <hr class=\"hr-purple\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <div class=\"checkbox\">\r\n                                        <label>\r\n                                          <input type=\"checkbox\" class=\"colored-success\"\r\n                                            formControlName=\"sameAsBillingCC\">\r\n                                          <span class=\"text\">Same as Billing </span>\r\n                                        </label>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"nameOnCardLbl\">\r\n                                        <b>Name on Card <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"nameOnCard\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"cardTypeLbl\">\r\n                                        <b>Card Type <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <select class=\"form-control\" formControlName=\"cardType\">\r\n                                        <option value=\"Master\">Master</option>\r\n                                        <option value=\"Visa\">Visa</option>\r\n                                        <option value=\"Amercian Express\">Amercian Express</option>\r\n                                        <option value=\"Discover Network\">Discover Network</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"cardNumberLbl\">\r\n                                        <b>Card Number <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"cardNumber\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"crvNumberLbl\">\r\n                                        <b>CRV Number <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"crvNumberLbl\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"cardNumberLbl\">\r\n                                        <b>Expires On <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <div class=\"col-sm-6\">\r\n                                        <select class=\"form-control\" id=\"selectMonth\" name=\"status\"\r\n                                          data-bv-field=\"row-title\" formControlName=\"selectMonth\" required>\r\n                                          <option value=\"\">--Month--</option>\r\n                                          <option value=\"JAN\">JAN</option>\r\n                                          <option value=\"FEB\">FEB</option>\r\n                                          <option value=\"MAR\">MAR</option>\r\n                                          <option value=\"APR\">APR</option>\r\n                                          <option value=\"MAY\">MAY</option>\r\n                                          <option value=\"JUN\">JUN</option>\r\n                                          <option value=\"JUL\">JUL</option>\r\n                                          <option value=\"AUG\">AUG</option>\r\n                                          <option value=\"SEP\">SEP</option>\r\n                                          <option value=\"OCT\">OCT</option>\r\n                                          <option value=\"NOV\">NOV</option>\r\n                                          <option value=\"DEC\">DEC</option>\r\n                                        </select>\r\n                                      </div>\r\n\r\n                                      <div class=\"col-sm-6\">\r\n                                        <select class=\"form-control\" id=\"selectYear\" name=\"status\"\r\n                                          data-bv-field=\"row-title\" formControlName=\"selectMonth\" required>\r\n                                          <option value=\"\">--Year--</option>\r\n                                          <option value=\"2030\">2030</option>\r\n                                          <option value=\"2029\">2029</option>\r\n                                          <option value=\"2028\">2028</option>\r\n                                          <option value=\"2027\">2027</option>\r\n                                          <option value=\"2026\">2026</option>\r\n                                          <option value=\"2025\">2025</option>\r\n                                          <option value=\"2024\">2024</option>\r\n                                          <option value=\"2023\">2023</option>\r\n                                          <option value=\"2022\">2022</option>\r\n                                          <option value=\"2021\">2021</option>\r\n                                          <option value=\"2020\">2020</option>\r\n                                          <option value=\"2019\">2019</option>\r\n                                        </select>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n\r\n                                  <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <div class=\"checkbox\">\r\n                                        <label>\r\n                                          <input type=\"checkbox\" class=\"colored-success\"\r\n                                            formControlName=\"sameAsBillingCC\">\r\n                                          <span class=\"text\">Address on Card is Same as Billing </span>\r\n                                        </label>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"streetAddressLbl\">\r\n                                        <b>Street Address <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"streetAddress\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"stateLbl\">\r\n                                        <b>State <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <!-- <select class=\"form-control\" id=\"stateRegistred\" name=\"status\" data-bv-field=\"row-title\"\r\n                                  formControlName=\"state\">\r\n                                  <option value=\"\">Select</option>\r\n                                  <option *ngFor=\"let data of statesData\" value={{data.stateName}}>\r\n                                    {{data.stateName}}\r\n                                  </option>\r\n                                </select> -->\r\n                                      <select type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"state\">\r\n                                        <option value=\"California\">California</option>\r\n                                        <option value=\"Texas\">Texas</option>\r\n                                        <option value=\"Florida\">Florida</option>\r\n                                      </select>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"cityLbl\">\r\n                                        <b>City <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"city\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"zipCodeLbl\">\r\n                                        <b>Zip Code <span class=\"mandatory\">*</span></b>\r\n                                      </label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-sm-3\">\r\n                                    <div class=\"form-group\">\r\n                                      <span class=\"input-icon icon-right\">\r\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                          formControlName=\"zipCode\">\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-sm-12\">\r\n                                    <div class=\"form-group\">\r\n                                      <hr class=\"hr-purple\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                  </div>\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-success shiny\" (click)=\"addAddress()\"><i\r\n                                        class=\"fa fa-check\"></i> Save</button>\r\n                                  </div>\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-danger shiny\" (click)=\"addAddress()\"><i\r\n                                        class=\"fa fa-times\"></i> Cancel</button>\r\n                                  </div>\r\n                                  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <!-- <div class=\"row\">\r\n                                    <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n                                      <button type=\"submit\" class=\"btn btn-success shiny\" (click)=\"addAddress()\"><i\r\n                                          class=\"fa fa-user-plus\"></i> Add More</button>\r\n                                    </div>\r\n                                  </div> -->\r\n                                <!--/Credit Card Form-->\r\n                              </form>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- /Credit Card List -->\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- /Tabs -->\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/leads/proz-leads/add-lead/add-lead.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/leads/proz-leads/add-lead/add-lead.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #7e3794;\n  /*display: block;\r\n    padding: 8px 0;*/\n  border-bottom: 1px dashed #7e3794;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-purple {\n  border-top: 1px solid #7e3794 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #7e3794;\n  border-right: 1px solid #7e3794;\n  border-bottom: 1px solid #7e3794;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.checkbox, .radio {\n  position: relative;\n  display: block;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\n.col-sm-6 {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZHMvcHJvei1sZWFkcy9hZGQtbGVhZC9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxcbGVhZHNcXHByb3otbGVhZHNcXGFkZC1sZWFkXFxhZGQtbGVhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFFZjtxQkFDaUI7RUFDakIsa0NBQWlDO0VBQ2pDLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCO3lCQUNzQixFQUV4Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSwrQkFBOEI7RUFDOUIsZ0NBQStCO0VBQy9CLGlDQUFnQztFQUNqQyxvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLDJCQUEwQjtFQUMxQiw4QkFBNkIsRUFDaEM7O0FBRUQ7RUFDSSw2QkFBNEI7RUFDNUIsOEJBQTZCLEVBQ2hDIiwiZmlsZSI6InNyYy9hcHAvbGVhZHMvcHJvei1sZWFkcy9hZGQtbGVhZC9hZGQtbGVhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXRpdGxle1xyXG4gICAgY29sb3I6ICAjN2UzNzk0O1xyXG5cclxuICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMDsqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG5cclxufVxyXG5cclxuLm1hbmRhdG9yeXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5oci1wdXJwbGV7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZTM3OTQgIWltcG9ydGFudDtcclxufSBcclxuXHJcbmlucHV0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubW9ja3tcclxuICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9jay1jb25me1xyXG4gICAgY29sb3I6IGdyZWVuOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHJvZ3Jlc3N7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRocmVlLWJvcmRlcmVke1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjN2UzNzk0O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzdlMzc5NDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjN2UzNzk0O1xyXG4gICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxufVxyXG5cclxuLmNoZWNrYm94LCAucmFkaW8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sLXNtLTYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/leads/proz-leads/add-lead/add-lead.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/leads/proz-leads/add-lead/add-lead.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLeadComponent", function() { return AddLeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_imageupload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/imageupload */ "./src/utilities/imageupload.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddLeadComponent = /** @class */ (function () {
    function AddLeadComponent(beyond, router, formBuilder, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
    }
    AddLeadComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
    };
    AddLeadComponent.prototype.cancelButton = function () {
        this.router.navigate(['/admin/listStaff']);
    };
    AddLeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"], _utilities_imageupload__WEBPACK_IMPORTED_MODULE_4__["ImageUpload"]],
            selector: 'app-add-lead',
            template: __webpack_require__(/*! ./add-lead.component.html */ "./src/app/leads/proz-leads/add-lead/add-lead.component.html"),
            styles: [__webpack_require__(/*! ./add-lead.component.scss */ "./src/app/leads/proz-leads/add-lead/add-lead.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], AddLeadComponent);
    return AddLeadComponent;
}());



/***/ }),

/***/ "./src/app/leads/proz-leads/assign-lead2-staff/assign-lead2-staff.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/leads/proz-leads/assign-lead2-staff/assign-lead2-staff.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a href=\"#\">Home</a>\r\n      </li>\r\n      <li class=\"active\">Leads</li>\r\n      <li class=\"active\">Assign to Staff</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        Assign to Staff\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"widget\">\r\n          <div class=\"widget-header with-footer header\" style=\"background-color: #7e3794; color: white;\">\r\n            <span class=\"widget-caption\">Assign Lead to Staff</span>\r\n          </div>\r\n          <div class=\"widget-body\">\r\n            <div class=\"flip-scroll\">\r\n              <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                <thead class=\"flip-content bordered-palegreen\">\r\n                  <tr>\r\n                    <th>\r\n                      Staff Email\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"item\">\r\n                      <a>\r\n                        <input type=\"text\" [typeahead]=\"options\" [(ngModel)]=\"assignStaff\" />\r\n                      </a>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <br>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\"></div>\r\n                <div class=\"col-sm-2\"></div>\r\n                <div class=\"col-sm-2\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"button\" class=\"btn btn-success shiny btn-block\" value=\"Assign\" (click)=\"assign()\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-2\"></div>\r\n                <div class=\"col-sm-3\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Body -->\r\n</div>\r\n<!-- /Page Content -->"

/***/ }),

/***/ "./src/app/leads/proz-leads/assign-lead2-staff/assign-lead2-staff.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/leads/proz-leads/assign-lead2-staff/assign-lead2-staff.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYWRzL3Byb3otbGVhZHMvYXNzaWduLWxlYWQyLXN0YWZmL2Fzc2lnbi1sZWFkMi1zdGFmZi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/leads/proz-leads/assign-lead2-staff/assign-lead2-staff.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/leads/proz-leads/assign-lead2-staff/assign-lead2-staff.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AssignLead2StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignLead2StaffComponent", function() { return AssignLead2StaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");







var AssignLead2StaffComponent = /** @class */ (function () {
    function AssignLead2StaffComponent(http, toastr, router, activatedRoute, beyond) {
        this.http = http;
        this.toastr = toastr;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.beyond = beyond;
        this.options = [];
    }
    AssignLead2StaffComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.listOfLeads();
    };
    AssignLead2StaffComponent.prototype.listOfLeads = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/getEmployees', options)
            .subscribe(function (data) {
            var staffData = data.json();
            if (staffData.status === 200) {
                for (var i = 0; i < staffData.response.length; i++) {
                    _this.options.push(staffData.response[i].email);
                }
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    AssignLead2StaffComponent.prototype.assign = function () {
        var _this = this;
        var assignObj = {
            "email": this.assignStaff,
            "leadCode": this.activatedRoute.snapshot.params['id'],
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/assignLeadToStaff', assignObj)
            .subscribe(function (data) {
            var assignData = data.json();
            if (assignData.status == 200) {
                _this.toastr.success('Assigned Staff Successfully');
                _this.router.navigate(['/leads/listLeads']);
                return false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    AssignLead2StaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assign-lead2-staff',
            template: __webpack_require__(/*! ./assign-lead2-staff.component.html */ "./src/app/leads/proz-leads/assign-lead2-staff/assign-lead2-staff.component.html"),
            styles: [__webpack_require__(/*! ./assign-lead2-staff.component.scss */ "./src/app/leads/proz-leads/assign-lead2-staff/assign-lead2-staff.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _utilities_beyond__WEBPACK_IMPORTED_MODULE_6__["Beyond"]])
    ], AssignLead2StaffComponent);
    return AssignLead2StaffComponent;
}());



/***/ }),

/***/ "./src/app/leads/proz-leads/lead-purchase-history/lead-purchase-history.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/leads/proz-leads/lead-purchase-history/lead-purchase-history.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home</a>\r\n      </li>\r\n      <li class=\"active\">Leads</li>\r\n      <li class=\"active\">Lead Purchase History</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        Lead Purchase History\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n    <div class=\"row\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"widget\">\r\n            <div class=\"widget-header with-footer header gray\">\r\n              <span class=\"widget-caption\">Lead Purchase History</span>\r\n            </div>\r\n            <div class=\"widget-body\">\r\n              <div class=\"table-scrollable\" *ngIf=\"showData\">\r\n                <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                  <thead class=\"flip-content bordered-palegreen\">\r\n                    <tr>\r\n                      <th>\r\n                        Status\r\n                      </th>\r\n                      <th>\r\n                        Transaction Date\r\n                      </th>\r\n                      <th>\r\n                        Lead Id\r\n                      </th>\r\n                      <th>\r\n                        Method Purchased\r\n                      </th>\r\n                      <th>\r\n                        Category\r\n                      </th>\r\n                      <th>\r\n                        Sub-Category\r\n                      </th>\r\n                      <th>\r\n                        Cost($)\r\n                      </th>\r\n                      <th>\r\n                        Customer Id\r\n                      </th>\r\n                      <th>\r\n                        Stripe Customer Id\r\n                      </th>\r\n                      <th>\r\n                        Stripe Transaction Id\r\n                      </th>\r\n                      <th>\r\n                        Stripe Transaction Status\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of leadPurchaseHistory\">\r\n                      <td class=\"item\">\r\n                        <span class=\"label label-primary\">{{ data.status }}</span>\r\n                      </td>\r\n                      <td class=\"item\">{{data.transactionDate}}</td>\r\n                      <td class=\"item\">{{data.leadId}}</td>\r\n                      <td class=\"item\">{{data.modeOfPurchase}}</td>\r\n                      <td class=\"item\">{{data.category}}</td>\r\n                      <td class=\"item\">{{data.subCategory}}</td>\r\n                      <td class=\"item\">{{data.amount}}</td>\r\n                      <td class=\"item\">{{data.customerId}}</td>\r\n                      <td class=\"item\">{{data.stripeCustomerId}}</td>\r\n                      <td class=\"item\">{{data.stripeTransactionId}}</td>\r\n                      <td class=\"item\">{{data.stripeTransactionStatus}}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <br />\r\n              <div *ngIf=\"!showData\">\r\n                No Records Found\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/leads/proz-leads/lead-purchase-history/lead-purchase-history.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/leads/proz-leads/lead-purchase-history/lead-purchase-history.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".databox .databox-text {\n  display: block;\n  font-size: 11px;\n  margin: 4px 0 2px;\n  position: relative;\n  width: 100px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.hr-gray-lg {\n  border-top: 1px solid gray !important; }\n\n.hr-gray {\n  border-top: 1px solid gray !important; }\n\n.item {\n  text-align: center; }\n\n.static {\n  color: red; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;\r\n     border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.static {\n  color: red;\n  font-weight: bold; }\n\n.status-active {\n  color: #00FF00;\n  font-weight: bold; }\n\n.status-inactive {\n  color: #FF0000;\n  font-weight: bold; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n/* LIST MODE */\n\n.center {\n  text-align: center; }\n\n.item {\n  text-align: center; }\n\n/* /LIST MODE */\n\n/* VIEW MODE */\n\n.form-title {\n  color: #5DB2FF;\n  /*display: block;\r\n     padding: 8px 0;*/\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\n.button-center {\n  text-align: center; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.well.with-footer {\n  padding-bottom: 10px !important; }\n\n/* /VIEW MODE */\n\n.static {\n  color: red;\n  font-weight: bold; }\n\n.noRecords {\n  color: blue;\n  font-weight: bold;\n  font-size: 12px; }\n\n.popup-text {\n  color: black;\n  font-weight: bold;\n  font-size: 14px; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;\r\n     border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.alert-heading {\n  font-size: 12px; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.mandatory {\n  color: #FF0000;\n  font-size: 12px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZHMvcHJvei1sZWFkcy9sZWFkLXB1cmNoYXNlLWhpc3RvcnkvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXGxlYWRzXFxwcm96LWxlYWRzXFxsZWFkLXB1cmNoYXNlLWhpc3RvcnlcXGxlYWQtcHVyY2hhc2UtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLHNDQUFxQyxFQUV4Qzs7QUFDRDtFQUNJLHNDQUFxQyxFQUV4Qzs7QUFFRDtFQUNJLG1CQUFpQixFQUNwQjs7QUFFRDtFQUNJLFdBQVUsRUFFYjs7QUFDRDtFQUNJLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7O3lDQUVvQztFQUNwQyxnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjswQkFDc0IsRUFFeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksc0NBQXFDLEVBRXhDOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkM7O0FBQ0Q7RUFDSSwwQkFBeUI7RUFDekIsa0NBQWlDO0VBQ2pDLDRDQUEyQyxFQUM5Qzs7QUFFRDtFQUNJLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixrQ0FBaUM7RUFDakMsNENBQTJDLEVBQzlDOztBQUVEO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksV0FBUztFQUNULGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzlCLG9DQUFvQyxFQUN0Qzs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBQ0QsZUFBZTs7QUFDZjtFQUNLLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFpQixFQUNwQjs7QUFDRCxnQkFBZ0I7O0FBR2pCLGVBQWU7O0FBQ2Q7RUFDRyxlQUFlO0VBQ2Y7c0JBQ2lCO0VBQ2pCLGtDQUFpQztFQUNqQyxnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjswQkFDc0IsRUFDeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLHVCQUFzQjtFQUN0QixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2Qzs7QUFFRDtFQUNJLG9DQUFtQyxFQUN0Qzs7QUFFRDtFQUNJLGdDQUErQixFQUNsQzs7QUFDRCxnQkFBZ0I7O0FBQ2hCO0VBQ0ksV0FBUztFQUNULGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLFlBQVU7RUFDVixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSxhQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBRWxCOztBQUNEO0VBQ0ksZUFBZTtFQUNmLGtDQUFpQztFQUVqQzs7eUNBRW9DO0VBQ3BDLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCOzBCQUNzQixFQUV4Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFDeEM7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFFeEM7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM5QixvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNHLGdCQUFlLEVBQ2pCOztBQUNEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUNEO0VBQ0ksMEJBQXlCO0VBQ3pCLGtDQUFpQztFQUNqQyw0Q0FBMkMsRUFDOUM7O0FBRUQ7RUFDSSx1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsa0NBQWlDO0VBQ2pDLDRDQUEyQyxFQUM5Qzs7QUFFRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUVJLGVBQWM7RUFDZCxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xlYWRzL3Byb3otbGVhZHMvbGVhZC1wdXJjaGFzZS1oaXN0b3J5L2xlYWQtcHVyY2hhc2UtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhYm94IC5kYXRhYm94LXRleHQge1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICBtYXJnaW46IDRweCAwIDJweDtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIC5oci1ncmF5LWxneyAgICBcclxuICAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50O1xyXG4gICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbiB9IFxyXG4gLmhyLWdyYXl7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZTM3OTQgIWltcG9ydGFudDtcclxuIH0gXHJcbiBcclxuIC5pdGVte1xyXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuc3RhdGlje1xyXG4gICAgIGNvbG9yOiByZWQ7XHJcbiBcclxuIH1cclxuIC5mb3JtLXRpdGxleyAgICBcclxuICAgICBjb2xvcjogICM1ZGIyZmY7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNWRiMmZmO1xyXG4gXHJcbiAgICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7Ki9cclxuICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbiBcclxuIH1cclxuIFxyXG4gLm1hbmRhdG9yeXtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiB9XHJcbiBcclxuIC5oci1ncmF5LXRoaWNreyAgICBcclxuICAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gfSBcclxuIFxyXG4gLmhyLWdyYXl7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZTM3OTQgIWltcG9ydGFudDtcclxuIH0gXHJcbiBcclxuIGlucHV0e1xyXG4gICAgIGNvbG9yOiBibGFjaztcclxuIH1cclxuIFxyXG4gLm1vY2t7XHJcbiAgICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAubW9jay1jb25me1xyXG4gICAgIGNvbG9yOiBncmVlbjsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuaW5wcm9ncmVzc3tcclxuICAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC50aHJlZS1ib3JkZXJlZHtcclxuICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG4gfVxyXG4gXHJcbiAudGV4dC1jZW50ZXJ7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuY2hlY2tib3gtY2VudGVyIHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ncmF5e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnRuLWJsdWV7ICAgIFxyXG4gICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZS5jb2xsYXBzZWQge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6aG92ZXI6YWZ0ZXIge1xyXG4gICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5zdGF0aWN7XHJcbiAgICAgY29sb3I6cmVkO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gfVxyXG4gLnN0YXR1cy1hY3RpdmV7XHJcbiAgICAgY29sb3I6ICMwMEZGMDA7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiBcclxuIC5zdGF0dXMtaW5hY3RpdmV7XHJcbiAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiBcclxuIC5pbnByb2dyZXNze1xyXG4gICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLnRocmVlLWJvcmRlcmVke1xyXG4gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbiB9XHJcbiBcclxuIC5ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIC8qIExJU1QgTU9ERSAqL1xyXG4gLmNlbnRlcntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0gXHJcbiBcclxuICAuaXRlbXtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgfVxyXG4gIC8qIC9MSVNUIE1PREUgKi9cclxuIFxyXG4gXHJcbiAvKiBWSUVXIE1PREUgKi9cclxuICAuZm9ybS10aXRsZXtcclxuICAgICBjb2xvcjogICM1REIyRkY7XHJcbiAgICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgICBwYWRkaW5nOiA4cHggMDsqL1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVEQjJGRjtcclxuICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbiB9XHJcbiBcclxuIC5tYW5kYXRvcnl7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gfVxyXG4gXHJcbiAuaHItZ3JheXsgICAgXHJcbiAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuIH0gXHJcbiBcclxuIC5idXR0b24tY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gaW5wdXR7XHJcbiAgICAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG4gXHJcbiAubW9ja3tcclxuICAgICBjb2xvcjogcmVkOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5tb2NrLWNvbmZ7XHJcbiAgICAgY29sb3I6IGdyZWVuOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5pbnByb2dyZXNze1xyXG4gICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLnRocmVlLWJvcmRlcmVke1xyXG4gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbiB9XHJcbiBcclxuIC50ZXh0LWNlbnRlcntcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5jaGVja2JveC1jZW50ZXIge1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYmx1ZXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiBcclxuIC5idG4tZ3JheXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ibHVleyAgICBcclxuICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLm1vZGFsLWhlYWRlciB7XHJcbiAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC53ZWxsLndpdGgtZm9vdGVyIHtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLyogL1ZJRVcgTU9ERSAqL1xyXG4gLnN0YXRpY3tcclxuICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiAubm9SZWNvcmRze1xyXG4gICAgIGNvbG9yOmJsdWU7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gfVxyXG4gLnBvcHVwLXRleHR7XHJcbiAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gXHJcbiB9XHJcbiAuZm9ybS10aXRsZXsgICAgXHJcbiAgICAgY29sb3I6ICAjNWRiMmZmO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuIFxyXG4gICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0OyovXHJcbiAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG4gXHJcbiB9XHJcbiBcclxuIC5tYW5kYXRvcnl7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gfVxyXG4gXHJcbiAuaHItZ3JheS10aGlja3sgICAgXHJcbiAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuIH0gXHJcbiBcclxuIC5oci1ncmF5eyAgICBcclxuICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbiB9IFxyXG4gXHJcbiBpbnB1dHtcclxuICAgICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcbiBcclxuIC5tb2Nre1xyXG4gICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLm1vY2stY29uZntcclxuICAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmlucHJvZ3Jlc3N7XHJcbiAgICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAudGhyZWUtYm9yZGVyZWR7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxuIH1cclxuIFxyXG4gLnRleHQtY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gLmFsZXJ0LWhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcbiAuZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5idG4tZ3JheXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ibHVleyAgICBcclxuICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUuY29sbGFwc2VkIHtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlOmhvdmVyOmFmdGVyIHtcclxuICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlIHtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlOmFmdGVyIHtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLm1hbmRhdG9yeXtcclxuICAgIFxyXG4gICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/leads/proz-leads/lead-purchase-history/lead-purchase-history.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/leads/proz-leads/lead-purchase-history/lead-purchase-history.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LeadPurchaseHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadPurchaseHistoryComponent", function() { return LeadPurchaseHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _utilities_multiplewizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/multiplewizard */ "./src/utilities/multiplewizard.ts");
/* harmony import */ var src_utilities_imageselector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utilities/imageselector */ "./src/utilities/imageselector.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _utilities_customValidators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../utilities/customValidators */ "./src/utilities/customValidators.ts");











var getOptions = function () {
    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    return new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
};
var parseResponse = function (data) {
    var json = data.json();
    if (json.status == 200 && Array.isArray(json.response)) {
        return json.response[0]["count(*)"];
    }
    return 0;
};
var LeadPurchaseHistoryComponent = /** @class */ (function () {
    function LeadPurchaseHistoryComponent(beyond, multiplewizard, router, activatedRoute, imageselector, formBuilder, http, toastr) {
        this.beyond = beyond;
        this.multiplewizard = multiplewizard;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.imageselector = imageselector;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastr = toastr;
        this.leadPurchaseHistory = [];
        this.showData = false;
    }
    LeadPurchaseHistoryComponent.prototype.ngOnInit = function () {
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.beyond.beyondAdmin();
        ;
        this.listOfLeads();
    };
    LeadPurchaseHistoryComponent.prototype.listOfLeads = function () {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_9__["Global"].url + "/leadPurchaseHistory/" + JSON.parse(localStorage.getItem("login")).loginCode;
        var successCallback = function (data) {
            var json = data.json();
            if (json.status == 200 && Array.isArray(json.response)) {
                _this.leadPurchaseHistory = json.response;
                _this.showData = true;
            }
        };
        this.http
            .get(url, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    LeadPurchaseHistoryComponent.prototype.errorCallback = function () {
        this.toastr.warning("Unable to Connect to Server");
    };
    LeadPurchaseHistoryComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    LeadPurchaseHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"], _utilities_multiplewizard__WEBPACK_IMPORTED_MODULE_4__["multiplewizard"], src_utilities_imageselector__WEBPACK_IMPORTED_MODULE_5__["Imageselector"], _utilities_customValidators__WEBPACK_IMPORTED_MODULE_10__["CustomValidators"]],
            selector: 'app-lead-purchase-history',
            template: __webpack_require__(/*! ./lead-purchase-history.component.html */ "./src/app/leads/proz-leads/lead-purchase-history/lead-purchase-history.component.html"),
            styles: [__webpack_require__(/*! ./lead-purchase-history.component.scss */ "./src/app/leads/proz-leads/lead-purchase-history/lead-purchase-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"],
            _utilities_multiplewizard__WEBPACK_IMPORTED_MODULE_4__["multiplewizard"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_utilities_imageselector__WEBPACK_IMPORTED_MODULE_5__["Imageselector"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], LeadPurchaseHistoryComponent);
    return LeadPurchaseHistoryComponent;
}());



/***/ }),

/***/ "./src/app/leads/proz-leads/list-leads/list-leads.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/leads/proz-leads/list-leads/list-leads.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home</a>\r\n      </li>\r\n      <li class=\"active\">Leads</li>\r\n      <li class=\"active\">List of Leads</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        List of Leads\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n    <div class=\"row\">\r\n      <!--Databox 1-->\r\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\r\n        <div class=\"databox bg-purple radius-bordered\">\r\n          <div class=\"databox-right\">\r\n            <span class=\"databox-number white\">{{listOfLeadsData.length}}</span>\r\n            <div class=\"databox-text white\">TOTAL LEADS</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!--/Databox 1-->\r\n      <!--Databox 2-->\r\n      <div class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12\">\r\n        <div class=\"databox bg-palegreen radius-bordered\">\r\n          <div class=\"databox-right\">\r\n            <span class=\"databox-number black\">{{purchasedLeads}}</span>\r\n            <div class=\"databox-text black\">PURCHASED</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"widget\">\r\n            <div class=\"widget-header with-footer header gray\">\r\n              <span class=\"widget-caption\">Search By</span>\r\n            </div>\r\n            <form [formGroup]=\"searchLeads\">\r\n              <div class=\"widget-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"fromDateLbl\">\r\n                        <b>From Date </b>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <input class=\"form-control date-picker\" type=\"date\" data-date-format=\"dd-mm-yyyy\"\r\n                        formControlName=\"dateCreated\" [max]=\"getToday()\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"toDateLbl\">\r\n                        <b>To Date </b>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <input class=\"form-control date-picker\" type=\"date\" data-date-format=\"dd-mm-yyyy\"\r\n                        formControlName=\"toDate\" [min]=\"toToday()\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"leadNumberLbl\">\r\n                        <b>Lead # </b>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <span class=\"input-icon icon-right\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"leadId\" />\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"nameLbl\">\r\n                        <b>Name </b>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <span class=\"input-icon icon-right\">\r\n                        <input type=\"text\" class=\"form-control \" formControlName=\"firstName\" />\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"phoneNumberLbl\">\r\n                        <b>Phone Number </b>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <span class=\"input-icon icon-right\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"phone\" />\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"emailLbl\">\r\n                        <b>Email </b>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <span class=\"input-icon icon-right\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"emailId\" />\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"addressLbl\">\r\n                        <b>Address </b>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <span class=\"input-icon icon-right\">\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"street\" />\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"nameLbl\">\r\n                        <b>Status </b>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3\">\r\n                    <div class=\"form-group\">\r\n                      <select class=\"form-control\" formControlName=\"leadStatus\">\r\n                        <option value=\"NEW LEAD\">NEW LEAD</option>\r\n                        <option value=\"PURCHASED\">PURCHASED</option>\r\n                        <option value=\"All\">All</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group\">\r\n                      &nbsp;&nbsp;&nbsp;&nbsp;\r\n                      <button type=\"submit\" class=\"btn btn-success shiny\" (click)=\"search()\">\r\n                        <i class=\"fa fa-search\"></i>&nbsp; Search\r\n                      </button>\r\n                      &nbsp;&nbsp;&nbsp;&nbsp;\r\n                      <button type=\"submit\" class=\"btn btn-danger shiny\" (click)=\"reset()\">\r\n                        <i class=\"fa fa-repeat\"></i>&nbsp; Reset\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-4\">\r\n                    <div class=\"form-group\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"form-group\">\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"widget\">\r\n            <div class=\"widget-header with-footer header gray\">\r\n              <span class=\"widget-caption\">List of Leads</span>\r\n            </div>\r\n            <div class=\"widget-body\">\r\n              <div class=\"table-scrollable\" *ngIf=\"showData\">\r\n                <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                  <thead class=\"flip-content bordered-palegreen\">\r\n                    <tr>\r\n                      <th>\r\n                        Status\r\n                      </th>\r\n                      <th>\r\n                        Show Lead Info\r\n                      </th>\r\n\r\n                      <th>\r\n                        View\r\n                      </th>\r\n                      <th>\r\n                        Lead #\r\n                      </th>\r\n                      <th>\r\n                        First Name\r\n                      </th>\r\n                      <th>\r\n                        Last Name\r\n                      </th>\r\n                      <th>\r\n                        Job Name\r\n                      </th>\r\n                      <th>\r\n                        City\r\n                      </th>\r\n                      <th>\r\n                        ZipCode\r\n                      </th>\r\n                      <th>\r\n                        Lead Price ($)\r\n                      </th>\r\n                      <th>\r\n                        Email Id\r\n                      </th>\r\n                      <th>\r\n                        Mobile Number\r\n                      </th>\r\n                      <th>\r\n                        Address\r\n                      </th>\r\n                      <th>\r\n                        Created On\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of listOfLeadsData\">\r\n                      <td class=\"item\">\r\n                        <span *ngIf=\"data.leadStatus == 'NEW LEAD'\"\r\n                          class=\"label label-primary\">{{ data.leadStatus }}</span>\r\n                        <span *ngIf=\"data.leadStatus == 'PURCHASED'\"\r\n                          class=\"label label-info\">{{ data.leadStatus }}</span>\r\n                      </td>\r\n                      <td class=\"item\">\r\n                        <button data-toggle=\"modal\" [disabled]=\"data.isPurchased==='YES'\"\r\n                          class=\"btn btn-xs btn-warning shiny \" (click)=\"showLead(data)\">Show Lead\r\n                          Info</button>\r\n                      </td>\r\n                      <td class=\"item\">\r\n                        <button [disabled]=\"data.isPurchased!=='YES'\" class=\"btn btn-xs btn-success shiny\"\r\n                          (click)=\"viewLead(data)\">\r\n                          <i class=\"fa fa-eye\"></i>\r\n                        </button>\r\n                      </td>\r\n                      <td>\r\n                        {{data.leadId}}\r\n                      </td>\r\n                      <td>\r\n                        {{ data.firstName }}\r\n                      </td>\r\n                      <td>\r\n                        {{ data.lastName }}\r\n                      </td>\r\n                      <td>{{ data.serviceName }} - {{ data.subCategoryName }}</td>\r\n                      <td>\r\n                        {{ data.city }}\r\n                      </td>\r\n                      <td>\r\n                        {{ data.zipCode }}\r\n                      </td>\r\n                      <td>\r\n                        {{ data.leadcost }}\r\n                      </td>\r\n                      <td>\r\n                        <span *ngIf=\"data.isPurchased==='YES'\">{{ data.emailId }}</span>\r\n                      </td>\r\n                      <td>\r\n                        <span *ngIf=\"data.isPurchased==='YES'\"> {{ data.phone }}</span>\r\n                      </td>\r\n                      <td>\r\n                        <span\r\n                          *ngIf=\"data.isPurchased==='YES'\">{{ data.street }},{{ data.city }},{{ data.state }}-{{ data.zipCode }}</span>\r\n                      </td>\r\n                      <td>\r\n                        {{ data.dateCreated | date: \"dd-MMM-yyyy\" }}\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <br />\r\n              <div *ngIf=\"!showData\">\r\n                No Records Found\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /Page Body -->\r\n\r\n    <!-- Select Manager Popup -->\r\n    <div id=\"myModal2\" class=\"modal fade bs-example-modal-lg\" tabindex=\"-1\" role=\"dialog\"\r\n      aria-labelledby=\"myLargeModalLabelTrade\" aria-hidden=\"true\" style=\"display: none;\">\r\n      <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"clearZips()\">×</button>\r\n            <div class=\"widget-header blue\">\r\n              <span class=\"widget-caption\"><b>ASSIGN STAFF TO THIS LEAD </b></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-body\" *ngIf=\"staffshowData\">\r\n            <div style=\"width:100%;\">\r\n              <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                <thead class=\"flip-content bordered-palegreen\">\r\n                  <tr>\r\n                    <th>\r\n                    </th>\r\n                    <th>\r\n                      Staff #\r\n                    </th>\r\n                    <th>\r\n                      Role\r\n                    </th>\r\n                    <th>\r\n                      First Name\r\n                    </th>\r\n                    <th>\r\n                      Last Name\r\n                    </th>\r\n                    <th>\r\n                      Email Id\r\n                    </th>\r\n                    <th>\r\n                      Phone Number\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let data of staffData\">\r\n                    <td>\r\n                      <label>\r\n                        <input type=\"radio\" name=\"selectManagerRadio\" value=\"{{employeeId}}\"\r\n                          (change)=\"selectEmployee(data)\">\r\n                        <span class=\"text\"></span>\r\n                      </label>\r\n                    </td>\r\n                    <td>{{data.employeeId}}</td>\r\n                    <td>{{data.role}}</td>\r\n                    <td>{{data.firstName}}</td>\r\n                    <td>{{data.lastName}}</td>\r\n                    <td>{{data.emailId}}</td>\r\n                    <td>{{data.mobilePhone}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <br />\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"!staffshowData\">\r\n            No Staff Found\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"assignStaffdata()\"\r\n              data-dismiss=\"modal\">Assign</button>\r\n            <button type=\"button\" class=\"btn btn-warning\" data-dismiss=\"modal\" (click)=\"cancelStaff()\">Cancel</button>\r\n          </div>\r\n        </div><!-- /.modal-content -->\r\n      </div><!-- /.modal-dialog -->\r\n    </div>\r\n    <!-- /Select Manager Popup-->\r\n\r\n\r\n    <!-- Show Lead Button - Popup when VanLynk = ENABLED  -->\r\n    <div id=\"myModal0\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <div class=\"widget-header blue\">\r\n              <span class=\"widget-caption\"><b>PURCHASE LEAD</b></span>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form>\r\n                <br />\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"reasonLbl\">\r\n                        <b class=\"popup-text\">This Lead cost ${{ perLeadCost }}. Would you like to purchase?</b>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <div class=\"col-lg-3\">\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <a class=\"btn btn-blue\" data-toggle=\"modal\" data-target=\"#myModal5\" (click)=\"onSave()\">\r\n                      CONFIRM\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\" (click)=\"onCancel()\"><i\r\n                        class=\"fa fa-times\"></i>\r\n                      CANCEL</button>\r\n                  </div>\r\n                  <div class=\"col-lg-3\">\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n    </div>\r\n    <!-- /Show Lead Button - Popup when VanLynk = ENABLED  -->\r\n\r\n    <!-- Show Lead Button - Popup when VanLynk = DISABLED  -->\r\n    <div id=\"myModal1\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <div class=\"widget-header blue\">\r\n              <span class=\"widget-caption\"><b>PURCHASE LEAD</b></span>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form>\r\n                <br />\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"reasonLbl\">\r\n                        <b class=\"popup-text\">This Lead cost ${{ perLeadCost }}.Would you like to purchase?</b>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <div class=\"col-lg-3\">\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <a class=\"btn btn-blue\" data-toggle=\"modal\" data-target=\"#myModal5\" (click)=\"onSave()\">\r\n                      CONFIRM\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\" (click)=\"onCancel()\"><i\r\n                        class=\"fa fa-times\"></i>\r\n                      CANCEL</button>\r\n                  </div>\r\n                  <div class=\"col-lg-3\">\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n    </div>\r\n    <!-- /Show Lead Button - Popup when VanLynk = DISABLED  -->\r\n    <!-- CARD EXCEPTION MODAL -->\r\n    <div id=\"cardException\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <div class=\"widget-header blue\">\r\n              <span class=\"widget-caption\"><b>{{stripeCardModalMessage.header}}</b></span>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form>\r\n                <br />\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12\">\r\n                    <div class=\"form-group\">\r\n                      <img src=\"../../../../assets/img/error.png\" height=\"50px\" width=\"50px\" />\r\n                      {{stripeCardModalMessage.content}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <div class=\"col-lg-2\">\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <a class=\"btn btn-blue\" data-toggle=\"modal\" (click)=\"addAnotherCard()\">\r\n                      ADD ANOTHER CARD\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"col-lg-2\">\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i>\r\n                      CLOSE</button>\r\n                  </div>\r\n                  <div class=\"col-lg-2\">\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n    </div>\r\n    <!-- CARD EXCEPTION MODAL -->\r\n  </div>\r\n  <!-- /Page Content -->"

/***/ }),

/***/ "./src/app/leads/proz-leads/list-leads/list-leads.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/leads/proz-leads/list-leads/list-leads.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".databox .databox-text {\n  display: block;\n  font-size: 11px;\n  margin: 4px 0 2px;\n  position: relative;\n  width: 100px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.hr-gray-lg {\n  border-top: 1px solid gray !important; }\n\n.hr-gray {\n  border-top: 1px solid gray !important; }\n\n.item {\n  text-align: center; }\n\n.static {\n  color: red; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n    padding: 8px 0;\r\n    border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.static {\n  color: red;\n  font-weight: bold; }\n\n.status-active {\n  color: #00FF00;\n  font-weight: bold; }\n\n.status-inactive {\n  color: #FF0000;\n  font-weight: bold; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n/* LIST MODE */\n\n.center {\n  text-align: center; }\n\n.item {\n  text-align: center; }\n\n/* /LIST MODE */\n\n/* VIEW MODE */\n\n.form-title {\n  color: #5DB2FF;\n  /*display: block;\r\n    padding: 8px 0;*/\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\n.button-center {\n  text-align: center; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.well.with-footer {\n  padding-bottom: 10px !important; }\n\n/* /VIEW MODE */\n\n.static {\n  color: red;\n  font-weight: bold; }\n\n.noRecords {\n  color: blue;\n  font-weight: bold;\n  font-size: 12px; }\n\n.popup-text {\n  color: black;\n  font-weight: bold;\n  font-size: 14px; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n    padding: 8px 0;\r\n    border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.alert-heading {\n  font-size: 12px; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.mandatory {\n  color: #FF0000;\n  font-size: 12px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZHMvcHJvei1sZWFkcy9saXN0LWxlYWRzL0Q6XFxUb3Bwcm96XFxUb3BQcm96X0FkdmFuY2VfQ2xpZW50L3NyY1xcYXBwXFxsZWFkc1xccHJvei1sZWFkc1xcbGlzdC1sZWFkc1xcbGlzdC1sZWFkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLHNDQUFxQyxFQUV4Qzs7QUFDRDtFQUNJLHNDQUFxQyxFQUV4Qzs7QUFFRDtFQUNJLG1CQUFpQixFQUNwQjs7QUFFRDtFQUNJLFdBQVUsRUFFYjs7QUFDRDtFQUNJLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7O3dDQUVvQztFQUNwQyxnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjt5QkFDc0IsRUFFeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksc0NBQXFDLEVBRXhDOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkM7O0FBQ0Q7RUFDSSwwQkFBeUI7RUFDekIsa0NBQWlDO0VBQ2pDLDRDQUEyQyxFQUM5Qzs7QUFFRDtFQUNJLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixrQ0FBaUM7RUFDakMsNENBQTJDLEVBQzlDOztBQUVEO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksV0FBUztFQUNULGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzlCLG9DQUFvQyxFQUN0Qzs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBQ0QsZUFBZTs7QUFDZjtFQUNLLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFpQixFQUNwQjs7QUFDRCxnQkFBZ0I7O0FBR2pCLGVBQWU7O0FBQ2Q7RUFDRyxlQUFlO0VBQ2Y7cUJBQ2lCO0VBQ2pCLGtDQUFpQztFQUNqQyxnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjt5QkFDc0IsRUFDeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLHVCQUFzQjtFQUN0QixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2Qzs7QUFFRDtFQUNJLG9DQUFtQyxFQUN0Qzs7QUFFRDtFQUNJLGdDQUErQixFQUNsQzs7QUFDRCxnQkFBZ0I7O0FBQ2hCO0VBQ0ksV0FBUztFQUNULGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLFlBQVU7RUFDVixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSxhQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBRWxCOztBQUNEO0VBQ0ksZUFBZTtFQUNmLGtDQUFpQztFQUVqQzs7d0NBRW9DO0VBQ3BDLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCO3lCQUNzQixFQUV4Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFDeEM7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFFeEM7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM5QixvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNHLGdCQUFlLEVBQ2pCOztBQUNEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUNEO0VBQ0ksMEJBQXlCO0VBQ3pCLGtDQUFpQztFQUNqQyw0Q0FBMkMsRUFDOUM7O0FBRUQ7RUFDSSx1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsa0NBQWlDO0VBQ2pDLDRDQUEyQyxFQUM5Qzs7QUFFRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUVJLGVBQWM7RUFDZCxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xlYWRzL3Byb3otbGVhZHMvbGlzdC1sZWFkcy9saXN0LWxlYWRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGFib3ggLmRhdGFib3gtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1hcmdpbjogNHB4IDAgMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhyLWdyYXktbGd7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbn0gXHJcbi5oci1ncmF5eyAgICBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgIzdlMzc5NCAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuLml0ZW17XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLnN0YXRpY3tcclxuICAgIGNvbG9yOiByZWQ7XHJcblxyXG59XHJcbi5mb3JtLXRpdGxleyAgICBcclxuICAgIGNvbG9yOiAgIzVkYjJmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuXHJcbiAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7Ki9cclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuXHJcbn1cclxuXHJcbi5tYW5kYXRvcnl7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaHItZ3JheS10aGlja3sgICAgXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuLmhyLWdyYXl7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG5pbnB1dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1vY2t7XHJcbiAgICBjb2xvcjogcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vY2stY29uZntcclxuICAgIGNvbG9yOiBncmVlbjsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnByb2dyZXNze1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aHJlZS1ib3JkZXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyYXl7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ncmF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ibHVleyAgICBcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZS5jb2xsYXBzZWQge1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6aG92ZXI6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZTphZnRlciB7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RhdGlje1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnN0YXR1cy1hY3RpdmV7XHJcbiAgICBjb2xvcjogIzAwRkYwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3RhdHVzLWluYWN0aXZle1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmlucHJvZ3Jlc3N7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRocmVlLWJvcmRlcmVke1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxufVxyXG5cclxuLmdyYXl7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4vKiBMSVNUIE1PREUgKi9cclxuLmNlbnRlcntcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9IFxyXG5cclxuIC5pdGVte1xyXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gfVxyXG4gLyogL0xJU1QgTU9ERSAqL1xyXG5cclxuXHJcbi8qIFZJRVcgTU9ERSAqL1xyXG4gLmZvcm0tdGl0bGV7XHJcbiAgICBjb2xvcjogICM1REIyRkY7XHJcbiAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDA7Ki9cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVEQjJGRjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxufVxyXG5cclxuLm1hbmRhdG9yeXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5oci1ncmF5eyAgICBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG4uYnV0dG9uLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tb2Nre1xyXG4gICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2NrLWNvbmZ7XHJcbiAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wcm9ncmVzc3tcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGhyZWUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGVja2JveC1jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibHVleyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJ0bi1ncmF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ibHVleyAgICBcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53ZWxsLndpdGgtZm9vdGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogL1ZJRVcgTU9ERSAqL1xyXG4uc3RhdGlje1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm5vUmVjb3Jkc3tcclxuICAgIGNvbG9yOmJsdWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ucG9wdXAtdGV4dHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG59XHJcbi5mb3JtLXRpdGxleyAgICBcclxuICAgIGNvbG9yOiAgIzVkYjJmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuXHJcbiAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7Ki9cclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuXHJcbn1cclxuXHJcbi5tYW5kYXRvcnl7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaHItZ3JheS10aGlja3sgICAgXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuLmhyLWdyYXl7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG5pbnB1dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1vY2t7XHJcbiAgICBjb2xvcjogcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vY2stY29uZntcclxuICAgIGNvbG9yOiBncmVlbjsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnByb2dyZXNze1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aHJlZS1ib3JkZXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYWxlcnQtaGVhZGluZ3tcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tZ3JheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tYmx1ZXsgICAgXHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUuY29sbGFwc2VkIHtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlOmhvdmVyOmFmdGVyIHtcclxuICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUge1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4ubWFuZGF0b3J5e1xyXG4gICBcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/leads/proz-leads/list-leads/list-leads.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/leads/proz-leads/list-leads/list-leads.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListLeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLeadsComponent", function() { return ListLeadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _utilities_multiplewizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/multiplewizard */ "./src/utilities/multiplewizard.ts");
/* harmony import */ var src_utilities_imageselector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utilities/imageselector */ "./src/utilities/imageselector.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../global/config */ "./src/global/config.ts");
/* harmony import */ var _utilities_customValidators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../utilities/customValidators */ "./src/utilities/customValidators.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");














var getOptions = function () {
    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    return new _angular_http__WEBPACK_IMPORTED_MODULE_7__["RequestOptions"]({ headers: headers });
};
var parseResponse = function (data) {
    var json = data.json();
    if (json.status == 200 && Array.isArray(json.response)) {
        return json.response[0]["count(*)"];
    }
    return 0;
};
var ListLeadsComponent = /** @class */ (function () {
    function ListLeadsComponent(beyond, multiplewizard, router, activatedRoute, imageselector, formBuilder, http, toastr, spinner) {
        this.beyond = beyond;
        this.multiplewizard = multiplewizard;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.imageselector = imageselector;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.listOfLeadsData = [];
        this.purchasedLeads = 0;
        this.showdataLeads = false;
        this.showData = false;
        this.customerId = null;
        this.leadId = null;
        this.staffshowData = false;
        this.newworkOrderconfirmation = 'none';
        this.perLeadCost = 0;
        this.prozDetailsData = [];
        this.paymentCardData = {};
        this.isCardAvailable = false;
        this.stripeCardModalMessage = {
            header: null,
            content: null
        };
        this.service = {
            category: null,
            subCategory: null
        };
    }
    ListLeadsComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.popupstatus = this.loginData.vanlynk;
        this.listOfLeads();
        this.getSubscriptions();
        this.prozDetails(this.loginData.loginCode);
        this.fetchRegisteredPaymentCards(this.loginData.loginCode);
        this.searchLeads = this.formBuilder.group({
            dateCreated: [null],
            toDate: [null],
            leadId: [null],
            lastName: [null],
            firstName: [null],
            phone: [null],
            emailId: [null],
            street: [null],
            leadStatus: [null],
        });
    };
    //ERROR CALLBACK
    ListLeadsComponent.prototype.errorCallback = function () {
        this.toastr.warning("Unable to Connect to Server");
    };
    //ERROR CALLBACK
    //VIEW LEAD
    ListLeadsComponent.prototype.viewLead = function (data) {
        this.customerLeadId = data.leadId;
        this.router.navigate(["/leads/viewLead", data.customerId, data.leadId]);
    };
    //VIEW LEAD
    //LIST OF LEADS
    ListLeadsComponent.prototype.listOfLeads = function () {
        var _this = this;
        this.purchasedLeads = 0;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/getLeadDetailsList/" + this.loginData.loginCode;
        var successCallback = function (data) {
            var json = data.json();
            if (json.status == 200 && Array.isArray(json.response)) {
                _this.listOfLeadsData = json.response;
                _this.spinner.hide();
                _this.listOfLeadsData.forEach(function (leads) {
                    if (leads.isPurchased == 'YES') {
                        _this.purchasedLeads++;
                    }
                });
                _this.showdataLeads = json.response.some(function (o) { return o.isPurchased === "YES"; });
                _this.showData = true;
            }
            else {
                _this.spinner.hide();
                _this.showData = false;
            }
        };
        this.http.get(url, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //LIST OF LEADS
    //PROZ DETAILS
    ListLeadsComponent.prototype.prozDetails = function (proId) {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/getProDetails/" + proId;
        var successCallback = function (data) {
            var json = data.json();
            if (json.status == 200 && Array.isArray(json.response)) {
                _this.prozDetailsData = json.profile[0];
            }
        };
        this.http.get(url, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //PROZ DETAILS
    //TOTAL LEADS COUNT
    ListLeadsComponent.prototype.totalLeadsCount = function () {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/getTotalLeads";
        var successCallback = function (data) {
            _this.leadsTotal = parseResponse(data);
        };
        this.http.get(url, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //TOTAL LEADS COUNT
    //TODAYS LEADS COUNT
    ListLeadsComponent.prototype.todaysLeadsCount = function () {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/getTotalLeads";
        var successCallback = function (data) {
            _this.leadsToday = parseResponse(data);
        };
        this.http.get(url, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //TODAYS LEADS COUNT
    //ACTIVE LEADS COUNT
    ListLeadsComponent.prototype.activeLeadsCount = function () {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/getActiveLeads";
        var successCallback = function (data) {
            _this.leadsActive = parseResponse(data);
        };
        this.http.get(url, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //ACTIVE LEADS COUNT
    //GET SUBSCRIPTIONS
    ListLeadsComponent.prototype.getSubscriptions = function () {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/getVanylinkLicence/" + this.loginData.loginCode;
        var successCallback = function (data) {
            var json = data.json();
            if (json.status == 200 && Array.isArray(json.response)) {
                _this.vanLynkData = json.response[0];
                _this.vanlynkStatus = _this.vanLynkData.vanylinkStatus;
            }
        };
        this.http.get(url, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //GET SUBSCRIPTIONS
    //INACTIVE LEAD COUNT
    ListLeadsComponent.prototype.inActiveLeadsCount = function () {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/getInActiveLeads";
        var successCallback = function (data) {
            _this.leadsInactive = parseResponse(data);
        };
        this.http
            .get(url, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //INACTIVE LEAD COUNT
    //FETCH REGISTERED PAYMENT CARDS
    ListLeadsComponent.prototype.fetchRegisteredPaymentCards = function (loginCode) {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/fetchStripeCards";
        var successCallback = function (data) {
            var json = data.json();
            if (json.status == 200 && Array.isArray(json.response)) {
                _this.paymentCardData = json.response[0];
                _this.isCardAvailable = true;
            }
        };
        this.http.post(url, { loginCode: loginCode }, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //FETCH REGISTERED PAYMENT CARDS
    //PAYMENT THROUGH STRIPE
    ListLeadsComponent.prototype.pay = function () {
        var _this = this;
        var payObject = {
            stripeCustomerId: this.paymentCardData.stripeCustomerId,
            amount: this.perLeadCost,
            customerId: this.customerId,
            leadId: this.customerLeadId,
            proId: this.loginData.loginCode,
            category: this.service.category,
            subCategory: this.service.subCategory,
            paymentMode: 'CARD',
            modeOfPurchase: 'TOPPROZ',
            transactionDate: _global_config__WEBPACK_IMPORTED_MODULE_11__["Utility"].day + "-" + _global_config__WEBPACK_IMPORTED_MODULE_11__["Utility"].month + "-" + _global_config__WEBPACK_IMPORTED_MODULE_11__["Utility"].year + " " + _global_config__WEBPACK_IMPORTED_MODULE_11__["Utility"].ampm("" + (_global_config__WEBPACK_IMPORTED_MODULE_11__["Utility"].hour + ":" + _global_config__WEBPACK_IMPORTED_MODULE_11__["Utility"].min))
        };
        var url = _global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/chargeCard";
        var successCallback = function (data) {
            var json = data.json();
            if (json.succeeded == true) {
                _this.updateLeadPurchase();
                return false;
            }
            console.log(json);
            if (json.succeeded == false && json.error && json.error.code == "incorrect_cvc") {
                _this.stripeCardModalMessage.header = 'INCORRECT CVC';
                _this.stripeCardModalMessage.content = 'Incorrect CVC. Please enter valid CVC.';
                $("#cardException").modal("show");
                return false;
            }
            if (json.succeeded == false && json.error && json.error.code == "expired_card") {
                _this.stripeCardModalMessage.header = 'CARD EXPIRED';
                _this.stripeCardModalMessage.content = 'Card Expired. Please update your billing details to continue.';
                $("#cardException").modal("show");
                return false;
            }
            if (json.succeeded == false && json.error && json.error.code == "card_declined" && json.error.decline_code == "generic_decline") {
                _this.stripeCardModalMessage.header = 'CARD DECLINED';
                _this.stripeCardModalMessage.content = 'Card Declined. Please update your billing details to continue.';
                $("#cardException").modal("show");
                return false;
            }
            if (json.succeeded == false && json.error && json.error.code == "card_declined" && json.error.decline_code == "insufficient_funds") {
                _this.stripeCardModalMessage.header = 'CARD DECLINED';
                _this.stripeCardModalMessage.content = 'Card is Declined due to insufficient funds. Please update your billing details to continue.';
                $("#cardException").modal("show");
                return false;
            }
        };
        this.http.post(url, payObject, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //PAYMENT THROUGH STRIPE
    //SHOW LEAD
    ListLeadsComponent.prototype.showLead = function (customerData) {
        if (this.isCardAvailable == false) {
            this.stripeCardModalMessage.header = 'CARD NOT AVAILABLE';
            this.stripeCardModalMessage.content = 'Card Not Available. Please update your billing details to continue.';
            $("#cardException").modal("show");
            return false;
        }
        else {
            this.customerLeadId = customerData.leadId;
            this.perLeadCost = customerData.leadcost;
            this.service.category = customerData.serviceName;
            this.service.subCategory = customerData.subCategoryName;
            if (this.loginData.vanlynk == "Y") {
                $("#myModal0").modal("show");
            }
            else {
                $("#myModal1").modal("show");
            }
            // setting the customerId to puchase.
            var customer = this.listOfLeadsData.find(function (a) { return a.customerId === customerData.customerId; });
            if (customer) {
                this.customerId = customerData.customerId;
                this.listLeadCustomer();
                this.customerTypeValue();
                $("#myModal0").modal("show");
            }
        }
    };
    //SHOW LEAD
    //ON SAVE
    ListLeadsComponent.prototype.onSave = function () {
        if (this.prozDetailsData.creditCardRegisteredFlag == 0) {
            window.location.href = '/stripe/createCard/' + this.loginData.loginCode;
            return false;
        }
        else {
            this.pay();
            $("#myModal0").modal("hide");
        }
    };
    //ON SAVE
    //ON CANCEL
    ListLeadsComponent.prototype.onCancel = function () {
        $("#myModal0").modal("hide");
    };
    //ON CANCEL
    //UPDATE LEAD PURCHASE
    ListLeadsComponent.prototype.updateLeadPurchase = function () {
        var _this = this;
        var request = {
            customerId: this.customerId,
            isPurchased: "YES",
            isAssignStaff: this.vanlynkStatus,
            leadStatus: "PURCHASED",
            leadId: this.customerLeadId,
            proId: this.loginData.loginCode
        };
        console.log(request);
        var successCallback = function (data) {
            var json = data.json();
            if (json.status === 200) {
                _this.confirmation();
                _this.listOfLeadsData = _this.listOfLeadsData.map(function (a) {
                    if (a.customerId !== _this.customerId)
                        return a;
                    _this.showdataLeads = true;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, a, { isPurchased: "YES" });
                });
                _this.customerId = null; // once purchase done we are clearing the customerId.
            }
            else {
                _this.toastr.warning("Purchase failed");
            }
        };
        this.http
            .post(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/purchaseStatusdata", request)
            .subscribe(successCallback, this.errorCallback);
    };
    //UPDATE LEAD PURCHASE
    //ON SAVE LEAD
    ListLeadsComponent.prototype.onSaveLead = function () {
        var _this = this;
        var request = {
            customerId: this.customerId,
            isPurchased: "YES",
            isAssignStaff: this.vanlynkStatus,
            leadStatus: "PURCHASED",
            leadId: this.customerLeadId,
            proId: this.loginData.loginCode
        };
        console.log(request);
        var successCallback = function (data) {
            var json = data.json();
            if (json.status === 200) {
                _this.confirmationData();
                _this.listOfLeadsData = _this.listOfLeadsData.map(function (a) {
                    if (a.customerId !== _this.customerId)
                        return a;
                    _this.showdataLeads = true;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, a, { isPurchased: "YES", leadStatus: "PURCHASED" });
                });
                $("#myModal1").modal("hide");
                _this.customerId = null; // once purchase done we are clearing the customerId.
            }
            else {
                _this.toastr.warning("Purchase failed");
            }
        };
        this.http
            .post(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/purchaseStatusdata", request)
            .subscribe(successCallback, this.errorCallback);
    };
    //ON SAVE LEAD
    ListLeadsComponent.prototype.assignStaff = function (customerId, leadId, serviceName, subCategoryName) {
        var _this = this;
        var staffObj = {
            prozId: this.loginData.loginCode,
            categoryName: serviceName,
            subcategoryName: subCategoryName,
        };
        this.custID = customerId;
        this.leadid = leadId;
        this.serName = serviceName;
        this.subcatName = subCategoryName;
        console.log("names..." + JSON.stringify(staffObj));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/getEmployeeStaff", staffObj).subscribe(function (data) {
            var response = data.json();
            console.log("data" + JSON.stringify(response));
            if (response.status == 200) {
                _this.staffData = response.response;
                console.log("staff status", JSON.stringify(_this.staffData));
                _this.employeeId = _this.staffData[0].employeeId;
                _this.staffshowData = true;
                return false;
            }
        }, function (error) {
            _this.toastr.warning("Unable to connect to server");
        });
    };
    ListLeadsComponent.prototype.assignStaffdata = function () {
        var _this = this;
        console.log(this.custID);
        var staffObj = {
            customerId: this.custID,
            leadId: this.leadid,
            prozId: this.loginData.loginCode,
            employeeId: this.selectedData.employeeId,
            firstName: this.selectedData.firstName,
            lastName: this.selectedData.lastName,
            emailId: this.selectedData.emailId,
            role: this.selectedData.role,
        };
        console.log("staff data>>>" + JSON.stringify(staffObj));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/assignStatusdata", staffObj).subscribe(function (data) {
            var staffassignData = data.json();
            console.log("selected data.." + JSON.stringify(staffassignData));
            var newDate = new Date();
            var month = newDate.getMonth() + 1;
            var year = newDate.getFullYear();
            var day = newDate.getDate();
            console.log(month + "-" + day + "-" + year);
            if (staffassignData.status == 200) {
                var updateStaffObj = {
                    customerId: _this.custID,
                    assignStaffName: _this.selectedData.firstName + " " + _this.selectedData.lastName,
                    assignStaffEmail: _this.selectedData.emailId,
                    modifiedBy: _this.loginData.emailId,
                    modifiedOn: moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format("YYYY-MM-DD HH:mm:ss")
                };
                console.log("assignStaff selected data>>>" + JSON.stringify(updateStaffObj));
                _this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + "/updateAssignStaffName", updateStaffObj)
                    .subscribe(function (data) {
                    var staffNameassignData = data.json();
                    console.log("selected data.." + JSON.stringify(staffNameassignData));
                    if (staffNameassignData.status == 200) {
                        console.log("Staff Name Updated Successfully...");
                        _this.listOfLeads();
                    }
                });
                return false;
            }
            else {
                _this.toastr.warning("No Records Found");
            }
        }, function (error) {
            _this.toastr.warning("Unable to connect to server");
        });
    };
    ListLeadsComponent.prototype.selectEmployee = function (data) {
        this.selectedData = data;
        console.log(data);
        for (var i = 0; i < this.staffData.length; i++) {
            if (data.employeeId == this.staffData[i].employeeId) {
                this.staffData[i].checked = data.checked;
            }
        }
    };
    ListLeadsComponent.prototype.cancelStaff = function () { };
    /*--Lead Customer Converting to Vanlynk customer --*/
    ListLeadsComponent.prototype.listLeadCustomer = function () {
        var _this = this;
        console.log("this.customerId" + this.customerId);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + '/getLeadDetails/' + this.customerId, options)
            .subscribe(function (data) {
            var leadCustomerData = data.json();
            if (leadCustomerData.status == 200) {
                _this.customerStatus = true;
                _this.customerData = leadCustomerData.response[0];
                _this.firstName = _this.customerData.firstName;
                _this.lastName = _this.customerData.lastName;
                _this.customer = _this.customerData.customerStatus;
                _this.zipCode = _this.customerData.zipCode;
                _this.street = _this.customerData.street;
                _this.longitude = _this.customerData.longitude;
                _this.latitude = _this.customerData.latitude;
                _this.city = _this.customerData.city;
                _this.state = _this.customerData.state;
                _this.phone = _this.customerData.phone;
                _this.emailId = _this.customerData.emailId;
                _this.companyName = _this.customerData.companyName;
                _this.serviceName = _this.customerData.serviceName;
                _this.aggregateRating = _this.customerData.aggregateRating;
                _this.inBusinessSince = _this.customerData.inBusinessSince;
                _this.subCategoryName = _this.customerData.subCategoryName;
                _this.emergencyData = _this.customerData.emergency;
                _this.leadStatusData = _this.customerData.leadStatus;
                _this.status = _this.customerData.status;
                _this.isPurchased = _this.customerData.isPurchased;
                _this.otp = _this.customerData.otp;
                _this.projectDescription = _this.customerData.projectDescription;
                _this.customerImage = _this.customerData.customerImage;
                _this.isProMatched = _this.customerData.isProMatched;
                _this.isAssignStaff = _this.customerData.isAssignStaff;
                _this.image = _this.customerData.image;
                _this.customerNo = _this.customerData.customerId;
                _this.leadNo = _this.customerData.leadId;
                _this.customerName = _this.customerData.firstName + " " + _this.customerData.lastName;
                console.log("this.customerData.firstName" + _this.customerName);
                console.log("this.customerDat" + _this.customer);
                if (_this.customerData.image == '' || _this.customerData.image == null) {
                    // this.customerData2 = "../../assets/img/no-image.png"
                }
                else {
                    // this.customerData2 = Global.url + this.customerData.image
                }
                // this.leadStatus = this.customerData.leadStatus
                _this.zipCode = _this.customerData.zipCode;
                console.log("in lead cust" + JSON.stringify(_this.customerData.zipCode));
            }
            else {
                _this.customerStatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    ListLeadsComponent.prototype.customerTypeValue = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + '/customerTypeData/' + this.customerId, options)
            .subscribe(function (data) {
            var response = data.json();
            console.log("Total List Details" + JSON.stringify(response));
            if (response.status == 200) {
                _this.customerHistoryData = response.response;
                _this.customerType = _this.customerHistoryData[0].serviceAnswer;
                console.log(_this.customerType);
                if (_this.customerType == "Home") {
                    _this.customerType = "Residential";
                    console.log("If -->" + _this.customerType);
                }
                else {
                    console.log("this.customerType" + _this.customerType);
                }
            }
            else {
                _this.toastr.warning('Unable to Connect to Server');
            }
        });
    };
    /*--Add Lead Data into VanLynck customer--*/
    ListLeadsComponent.prototype.confirmation = function () {
        var _this = this;
        console.log("confirmation");
        var addObj = {
            "customerId": this.customerNo,
            "leadId": this.leadNo,
            "proId": this.loginData.loginCode,
            "customerName": '' + this.customerName,
            "serviceName": '' + this.serviceName,
            "aggregateRating": '' + this.aggregateRating,
            "inBusinessSince": '' + this.inBusinessSince,
            "subCategoryName": '' + this.subCategoryName,
            "emergency": '' + this.emergencyData,
            "leadStatus": '' + this.leadStatusData,
            "isProMatched": '' + this.isProMatched,
            "isAssignStaff": '' + this.isAssignStaff,
            "isPurchased": '' + this.isPurchased,
            "otp": '' + this.otp,
            "createdBy": this.loginData.emailId,
            "customerImage": this.customerImage,
            "projectDescription": this.projectDescription,
            "customerType": this.customerType,
        };
        console.log("ADD OBJ" + JSON.stringify(addObj));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + '/addLeadVanlynkCustomerInfo', addObj)
            .subscribe(function (data) {
            var customerData = data.json();
            console.log("customerData" + JSON.stringify(customerData));
            if (customerData.status == 200) {
                var addressObj = {
                    "customerId": _this.customerNo,
                    "proId": _this.loginData.loginCode,
                    "firstName": '' + _this.firstName,
                    "lastName": '' + _this.lastName,
                    "customerStatus": '' + _this.customer,
                    "email": '' + _this.emailId,
                    "phoneNumber": '' + _this.phone,
                    "zipCode": '' + _this.zipCode,
                    "city": '' + _this.city,
                    "state": '' + _this.state,
                    "address": '' + _this.street,
                    "longitude": '' + _this.longitude,
                    "latitude": '' + _this.latitude,
                    "createdBy": _this.loginData.emailId,
                };
                console.log("addressObj" + JSON.stringify(addressObj));
                _this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + '/addLeadVanlynkCustomerAddress', addressObj)
                    .subscribe(function (data) {
                    var response = data.json();
                    console.log("This is Response: " + JSON.stringify(response));
                    if (response.status === 200) {
                        _this.newworkOrderconfirmation = 'none';
                        _this.toastr.success("Lead Customer - Purchased Successfully ...!");
                        _this.newworkOrderconfirmation = 'none';
                        console.log(" YES CONSOLE");
                        window.location.href = '/proCustomer/listVanCustomers';
                    }
                    else {
                        _this.toastr.warning('Employee Status is updatation failed...');
                    }
                    (function (error) {
                        console.log('The execution is failed ' + JSON.stringify(error));
                    });
                });
            }
        });
    };
    ListLeadsComponent.prototype.confirmationData = function () {
        var _this = this;
        console.log("confirmation data is calling");
        var addObj = {
            "customerId": this.customerNo,
            "leadId": this.leadNo,
            "proId": this.loginData.loginCode,
            "customerName": '' + this.customerName,
            "serviceName": '' + this.serviceName,
            "aggregateRating": '' + this.aggregateRating,
            "inBusinessSince": '' + this.inBusinessSince,
            "subCategoryName": '' + this.subCategoryName,
            "emergency": '' + this.emergencyData,
            "leadStatus": '' + this.leadStatusData,
            "isProMatched": '' + this.isProMatched,
            "isAssignStaff": '' + this.isAssignStaff,
            "isPurchased": '' + this.isPurchased,
            "otp": '' + this.otp,
            "createdBy": this.loginData.emailId,
            "customerImage": this.customerImage,
            "projectDescription": this.projectDescription,
            "customerType": this.customerType,
        };
        console.log("ADD OBJ" + JSON.stringify(addObj));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + '/addLeadVanlynkCustomerInfo', addObj)
            .subscribe(function (data) {
            var customerData = data.json();
            console.log("customerData" + JSON.stringify(customerData));
            if (customerData.status == 200) {
                var addressObj = {
                    "customerId": _this.customerNo,
                    "proId": _this.loginData.loginCode,
                    "firstName": '' + _this.firstName,
                    "lastName": '' + _this.lastName,
                    "customerStatus": '' + _this.customer,
                    "email": '' + _this.emailId,
                    "phoneNumber": '' + _this.phone,
                    "zipCode": '' + _this.zipCode,
                    "city": '' + _this.city,
                    "state": '' + _this.state,
                    "address": '' + _this.street,
                    "longitude": '' + _this.longitude,
                    "latitude": '' + _this.latitude,
                    "createdBy": _this.loginData.emailId,
                };
                console.log("addressObj" + JSON.stringify(addressObj));
                _this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + '/addLeadVanlynkCustomerAddress', addressObj)
                    .subscribe(function (data) {
                    var response = data.json();
                    console.log("This is Response: " + JSON.stringify(response));
                    if (response.status === 200) {
                        _this.newworkOrderconfirmation = 'none';
                        _this.toastr.success("Lead Customer - Purchased Successfully ...!");
                        _this.newworkOrderconfirmation = 'none';
                        console.log(" YES CONSOLE");
                        // this.router.navigate(['/proCustomer/listVanCustomers'])
                        _this.router.navigate(["/leads/viewLead", _this.customerId, _this.customerLeadId]);
                    }
                    else {
                        _this.toastr.warning('Employee Status is updatation failed...');
                    }
                    (function (error) {
                        console.log('The execution is failed ' + JSON.stringify(error));
                    });
                });
            }
        });
    };
    ListLeadsComponent.prototype.cancel = function () {
        this.newworkOrderconfirmation = 'none';
    };
    /*--/Lead Customer Converting to Vanlynk customer /--*/
    /* --get purchased Count --*/
    ListLeadsComponent.prototype.getPurchasedData = function () {
        var _this = this;
        console.log("this.loginData.loginCode" + this.loginData.loginCode);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + '/getPurchasedCount/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var purchased = data.json();
            console.log("PUUU" + JSON.stringify(purchased.response));
            _this.purchasedCount = purchased.response;
            if (purchased.status == 200) {
                _this.purchasedCount = purchased.response;
                console.log("purchased Length" + JSON.stringify(_this.purchasedCount));
            }
            else {
                _this.customerStatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    /* --/get purchased Count */
    /*-- Search Leads-- */
    ListLeadsComponent.prototype.search = function () {
        var _this = this;
        this.purchasedLeads = 0;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["RequestOptions"]({ headers: headers });
        var obj = {
            "leadId": this.searchLeads.value.leadId,
            "firstName": this.searchLeads.value.firstName,
            "phone": this.searchLeads.value.phone,
            "emailId": this.searchLeads.value.emailId,
            "street": this.searchLeads.value.street,
            "leadStatus": this.searchLeads.value.leadStatus,
            "isPurchased": this.searchLeads.value.isPurchased,
        };
        console.log("purchased" + JSON.stringify(obj));
        if (this.searchLeads.value.leadId !== null || this.searchLeads.value.firstName !== null || this.searchLeads.value.phone !== null || this.searchLeads.value.emailId !== null || this.searchLeads.value.street !== null || this.searchLeads.value.leadStatus !== null || this.searchLeads.value.isPurchased) {
            console.log("All not null " + this.searchLeads.value.dateCreated);
            this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + '/SearchLeadCustomer/' + this.loginData.loginCode, [
                { id: 'leadId', value: obj.leadId },
                { id: 'firstName', value: obj.firstName },
                { id: 'phone', value: obj.phone },
                { id: 'emailId', value: obj.emailId },
                { id: 'street', value: obj.street },
                { id: 'leadStatus', value: obj.leadStatus },
                { id: 'isPurchased', value: obj.isPurchased },
            ], options).subscribe(function (data) {
                _this.leadSearch = data.json();
                console.log("List Of Leads" + JSON.stringify(_this.leadSearch));
                if (_this.leadSearch.response.status == 200) {
                    _this.listOfLeadsData = _this.leadSearch.response.response;
                    _this.listOfLeadsData.forEach(function (leads) {
                        if (leads.isPurchased == 'YES') {
                            _this.purchasedLeads++;
                        }
                    });
                    //console.log("searchPartsData values" + JSON.stringify(this.partsList))
                    _this.showData = true;
                    // this.searchLeads.reset();
                }
                else {
                    _this.showData = false;
                }
            });
        }
        else if (this.searchLeads.value.dateCreated !== null && this.searchLeads.value.toDate !== null) {
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_10__["Global"].url + '/getdateCreatedSearch/' + this.searchLeads.value.dateCreated + "/" + this.searchLeads.value.toDate + "/" + this.loginData.loginCode, options)
                .subscribe(function (data) {
                _this.leadSearch = data.json();
                if (_this.leadSearch.status == 200) {
                    _this.listOfLeadsData = _this.leadSearch.response;
                    _this.showData = true;
                }
                else {
                    _this.showData = false;
                }
            });
        }
    };
    /*--/ Search Leads-- */
    /*-- Reset Search -- */
    ListLeadsComponent.prototype.reset = function () {
        this.searchLeads.reset();
        this.listOfLeads();
    };
    /*--/ Reset Search -- */
    /* Search Validation */
    ListLeadsComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    ListLeadsComponent.prototype.toToday = function () {
        return new Date(this.searchLeads.value.dateCreated).toISOString().split('T')[0];
    };
    /* Search Validation */
    ListLeadsComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    ListLeadsComponent.prototype.addAnotherCard = function () {
        window.location.href = '/stripe/createCard/' + this.loginData.loginCode;
    };
    ListLeadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"], _utilities_multiplewizard__WEBPACK_IMPORTED_MODULE_4__["multiplewizard"], src_utilities_imageselector__WEBPACK_IMPORTED_MODULE_5__["Imageselector"], _utilities_customValidators__WEBPACK_IMPORTED_MODULE_12__["CustomValidators"]],
            selector: "app-list-leads",
            template: __webpack_require__(/*! ./list-leads.component.html */ "./src/app/leads/proz-leads/list-leads/list-leads.component.html"),
            styles: [__webpack_require__(/*! ./list-leads.component.scss */ "./src/app/leads/proz-leads/list-leads/list-leads.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"],
            _utilities_multiplewizard__WEBPACK_IMPORTED_MODULE_4__["multiplewizard"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_utilities_imageselector__WEBPACK_IMPORTED_MODULE_5__["Imageselector"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"]])
    ], ListLeadsComponent);
    return ListLeadsComponent;
}());



/***/ }),

/***/ "./src/app/leads/proz-leads/view-lead/view-lead.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/leads/proz-leads/view-lead/view-lead.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a>Leads</a>\r\n          </li>\r\n          <li>\r\n            <a (click)=\"list()\">List of Leads</a>\r\n          </li>\r\n          <li class=\"active\">View Lead</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>View Lead</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <!-- <h2 class=\"inprogress\"><b>MOCK SCREEN-V1.0-YET TO REVIEW BY TIM</b></h2> -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered\">\r\n                      <div class=\"header gray\">\r\n                        View Lead\r\n                      </div>\r\n                      <div id=\"registration-form\">\r\n                        <!-- Top Buttons -->\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3 button-center\">\r\n                            <div class=\"form-group\">\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3 button-center\">\r\n                            <div class=\"form-group\">\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3 button-center\">\r\n                            <div class=\"form-group\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <!-- /Top Buttons -->\r\n                        <!-- Lead Personal Information -->\r\n                        <div class=\"form-title\">\r\n                          Lead Personal Information\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"customerStatus\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"firstNameLbl\">\r\n                                <b>First Name <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"firstNameVal\">\r\n                                {{customerData.firstName}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"lastNameLbl\">\r\n                                <b>Last Name <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"lastNameVal\">\r\n                                {{customerData.lastName}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"customerStatus\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"phoneLbl\">\r\n                                <b>Phone <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"phoneVal\">\r\n                                {{customerData.phone}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"emailIDLbl\">\r\n                                <b>Email ID <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"emailIDVal\">\r\n                                {{customerData.emailId}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"customerStatus\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"streetAddressLbl\">\r\n                                <b>Street Address <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"streetAddressVal\">\r\n                                {{customerData.street}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"cityLbl\">\r\n                                <b>City <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"cityVal\">\r\n                                {{customerData.city}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"customerStatus\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"stateLbl\">\r\n                                <b>State <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"stateVal\">\r\n                                California\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"zipCodeLbl\">\r\n                                <b>Zip Code <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"zipCodeVal\">\r\n                                {{customerData.zipCode}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                              <div class=\"checkbox\">\r\n                                <label>\r\n                                  <input type=\"checkbox\" class=\"colored-blue\" checked=\"checked\" disabled=\"disabled\"\r\n                                    disabled=\"disabled\">\r\n                                  <span class=\"text\">Yes, I accept terms and conditions</span>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-6\">\r\n                            <div class=\"form-group\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <!-- /Lead Personal Information -->\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                              <hr class=\"hr-gray\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <!-- Lead Information -->\r\n                        <div class=\"form-title\">\r\n                          Lead Information\r\n                        </div>\r\n                        <div class=\"row\" *ngFor=\"let data of customerHistoryData\">\r\n                          <div class=\"col-sm-5\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"questionLbl\">\r\n                                <b>{{data.serviceQuestion}} </b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-7\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"answerLbl\" [ngStyle]=\"{'color': data.color}\">\r\n                                {{data.serviceAnswer}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"customerStatus\">\r\n                          <div class=\"col-sm-5\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"streetAddressLbl\">\r\n                                <b>Please tell us little about your project <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-7\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"streetAddressVal\">\r\n                                {{customerData.projectDescription}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"customerStatus\">\r\n                          <div class=\"col-sm-5\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"cityLbl\">\r\n                                <b>Attach any images/videos/audio about the problem <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-7\">\r\n                            <div class=\"form-group\">\r\n                              <img [src]=\"customerData2\" class=\"logo\" />\r\n                            </div>\r\n\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-12\">\r\n                            <div class=\"form-group\">\r\n                              <hr class=\"hr-gray\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <!-- /Lead Information -->\r\n                        <div class=\"row\" *ngIf=\"editField\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"stateLbl\">\r\n                                <b>Update Status <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"stateVal\">\r\n                                <select class=\"form-control\" [(ngModel)]=\"leadStatus\"\r\n                                  (ngModelChange)=\"leadStatusUpdate(leadStatus)\">\r\n                                  <option value=\"DO NOT SERVE\">DO NOT SERVE</option>\r\n                                  <option value=\"CONTACTED\">CONTACTED</option>\r\n                                  <option value=\"CALL DROP\">CALL DROP</option>\r\n                                </select>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-4\">\r\n                            <button type=\"submit\" class=\"btn btn-blue\" (click)=\"back()\"><i class=\"fa fa-backward\"></i>\r\n                              Back</button>\r\n                          </div>\r\n                          <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/leads/proz-leads/view-lead/view-lead.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/leads/proz-leads/view-lead/view-lead.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5DB2FF;\n  /*display: block;\r\n    padding: 8px 0;*/\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\n.button-center {\n  text-align: center; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.logo {\n  width: 120px !important;\n  height: 120px !important; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.status-active {\n  color: #00FF00;\n  font-weight: bold; }\n\n.status-inactive {\n  color: #FF0000;\n  font-weight: bold; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n/* LIST MODE */\n\n.center {\n  text-align: center; }\n\n.item {\n  text-align: center; }\n\n/* /LIST MODE */\n\n/* VIEW MODE */\n\n.form-title {\n  color: #5DB2FF;\n  /*display: block;\r\n    padding: 8px 0;*/\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\n.button-center {\n  text-align: center; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.well.with-footer {\n  padding-bottom: 10px !important; }\n\n/* /VIEW MODE */\n\n.static {\n  color: red;\n  font-weight: bold; }\n\n.noRecords {\n  color: blue;\n  font-weight: bold;\n  font-size: 12px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZHMvcHJvei1sZWFkcy92aWV3LWxlYWQvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXGxlYWRzXFxwcm96LWxlYWRzXFx2aWV3LWxlYWRcXHZpZXctbGVhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZjtxQkFDaUI7RUFDakIsa0NBQWlDO0VBQ2pDLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCO3lCQUNzQixFQUN4Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFDeEM7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFlRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM5QixvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBR0Q7RUFDRyx3QkFBdUI7RUFDdkIseUJBQXdCLEVBQzFCOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkM7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksZUFBYztFQUNkLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM5QixvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUNELGVBQWU7O0FBQ2Y7RUFDSyxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBaUIsRUFDcEI7O0FBQ0QsZ0JBQWdCOztBQUdqQixlQUFlOztBQUNkO0VBQ0csZUFBZTtFQUNmO3FCQUNpQjtFQUNqQixrQ0FBaUM7RUFDakMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7eUJBQ3NCLEVBQ3hCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLHNDQUFxQyxFQUN4Qzs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzlCLG9DQUFvQyxFQUN0Qzs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQyx1QkFBc0I7RUFDdEIsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxvQ0FBbUMsRUFDdEM7O0FBRUQ7RUFDSSxnQ0FBK0IsRUFDbEM7O0FBQ0QsZ0JBQWdCOztBQUNoQjtFQUNJLFdBQVM7RUFDVCxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxZQUFVO0VBQ1Ysa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGVhZHMvcHJvei1sZWFkcy92aWV3LWxlYWQvdmlldy1sZWFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tdGl0bGV7XHJcbiAgICBjb2xvcjogICM1REIyRkY7XHJcbiAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDA7Ki9cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVEQjJGRjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxufVxyXG5cclxuLm1hbmRhdG9yeXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5oci1ncmF5eyAgICBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG4uYnV0dG9uLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tb2Nre1xyXG4gICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2NrLWNvbmZ7XHJcbiAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi8vIC53aWRnZXQtaGVhZGVye1xyXG5cclxuLy8gICBwYWRkaW5nOiAyMHB4O1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICBmb250LXNpemU6IDMwcHg7XHJcbi8vICAgd2lkdGg6MTVlbTtcclxuLy8gICBtYXJnaW4tbGVmdDogMmVtO1xyXG4gIFxyXG5cclxuICAgIFxyXG5cclxuLy8gfVxyXG4uaW5wcm9ncmVzc3tcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGhyZWUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubG9nb3tcclxuICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2hlY2tib3gtY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JheXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWJsdWV7ICAgIFxyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4uc3RhdHVzLWFjdGl2ZXtcclxuICAgIGNvbG9yOiAjMDBGRjAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zdGF0dXMtaW5hY3RpdmV7XHJcbiAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaW5wcm9ncmVzc3tcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGhyZWUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG59XHJcblxyXG4uZ3JheXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcbi8qIExJU1QgTU9ERSAqL1xyXG4uY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH0gXHJcblxyXG4gLml0ZW17XHJcbiAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiB9XHJcbiAvKiAvTElTVCBNT0RFICovXHJcblxyXG5cclxuLyogVklFVyBNT0RFICovXHJcbiAuZm9ybS10aXRsZXtcclxuICAgIGNvbG9yOiAgIzVEQjJGRjtcclxuICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMDsqL1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNURCMkZGO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG59XHJcblxyXG4ubWFuZGF0b3J5e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmhyLWdyYXl7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxufSBcclxuXHJcbi5idXR0b24tY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1vY2t7XHJcbiAgICBjb2xvcjogcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vY2stY29uZntcclxuICAgIGNvbG9yOiBncmVlbjsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnByb2dyZXNze1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aHJlZS1ib3JkZXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyYXl7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJsdWV7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWJsdWV7ICAgIFxyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndlbGwud2l0aC1mb290ZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4vKiAvVklFVyBNT0RFICovXHJcbi5zdGF0aWN7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubm9SZWNvcmRze1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/leads/proz-leads/view-lead/view-lead.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/leads/proz-leads/view-lead/view-lead.component.ts ***!
  \*******************************************************************/
/*! exports provided: ViewLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewLeadComponent", function() { return ViewLeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _utilities_multiplewizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/multiplewizard */ "./src/utilities/multiplewizard.ts");
/* harmony import */ var src_utilities_imageselector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utilities/imageselector */ "./src/utilities/imageselector.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _utilities_customValidators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../utilities/customValidators */ "./src/utilities/customValidators.ts");










var ViewLeadComponent = /** @class */ (function () {
    function ViewLeadComponent(beyond, multiplewizard, router, activatedRoute, imageselector, http, toastr) {
        this.beyond = beyond;
        this.multiplewizard = multiplewizard;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.imageselector = imageselector;
        this.http = http;
        this.toastr = toastr;
        this.customerStatus = false;
        this.customerHistoryStatus = false;
        this.matchingStatus = false;
        this.getQuote = false;
        this.getProz = false;
        this.theEmergencyRequest = false;
        this.newworkOrderconfirmation = 'none';
    }
    ViewLeadComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.multiplewizard.Multiplewizard();
        this.imageselector.imageselector();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.listLeadCustomerHistory(this.activatedRoute.snapshot.params['anyCode']);
        this.listLeadCustomer(this.activatedRoute.snapshot.params['anyCode']);
    };
    ViewLeadComponent.prototype.listLeadCustomerHistory = function (customerId) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_8__["Global"].url + '/getLeadHistoryDetailsViewLead/' + customerId + '/' + this.activatedRoute.snapshot.params['leadId'], options)
            .subscribe(function (data) {
            var leadCustomerHistoryData = data.json();
            if (leadCustomerHistoryData.status == 200) {
                _this.customerHistoryStatus = true;
                _this.customerHistoryData = leadCustomerHistoryData.response;
                for (var i = 0; i < _this.customerHistoryData.length; i++) {
                    if (_this.customerHistoryData[i].serviceQuestion == "Is this an emergency" && _this.customerHistoryData[i].serviceAnswer == "Yes") {
                        _this.customerHistoryData[i].color = 'red';
                        _this.customerHistoryData[i].colorRed = true;
                        _this.theEmergencyRequest = true;
                    }
                    else if (_this.customerHistoryData[i].serviceQuestion == "Is this an emergency" && _this.customerHistoryData[i].serviceAnswer == "No") {
                        _this.customerHistoryData[i].color = 'green';
                        _this.customerHistoryData[i].colorRed = false;
                        _this.theEmergencyRequest = false;
                    }
                    else if (_this.customerHistoryData[i].serviceQuestion == "" && _this.customerHistoryData[i].serviceAnswer == "") {
                        _this.customerHistoryData[i].color = 'green';
                        _this.customerHistoryData[i].colorRed = false;
                        _this.theEmergencyRequest = false;
                    }
                }
            }
            else {
                _this.customerHistoryStatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    ViewLeadComponent.prototype.listLeadCustomer = function (customerId) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_8__["Global"].url + '/getLeadDetails/' + customerId, options)
            .subscribe(function (data) {
            var leadCustomerData = data.json();
            if (leadCustomerData.status == 200) {
                _this.customerStatus = true;
                _this.customerData = leadCustomerData.response[0];
                _this.firstName = _this.customerData.firstName;
                _this.lastName = _this.customerData.lastName;
                _this.customer = _this.customerData.customerStatus;
                _this.zipCode = _this.customerData.zipCode;
                _this.street = _this.customerData.street;
                _this.city = _this.customerData.city;
                _this.state = _this.customerData.state;
                _this.phone = _this.customerData.phone;
                _this.emailId = _this.customerData.emailId;
                _this.companyName = _this.customerData.companyName;
                _this.serviceName = _this.customerData.serviceName;
                _this.aggregateRating = _this.customerData.aggregateRating;
                _this.inBusinessSince = _this.customerData.inBusinessSince;
                _this.subCategoryName = _this.customerData.subCategoryName;
                _this.emergencyData = _this.customerData.emergency;
                _this.leadStatusData = _this.customerData.leadStatus;
                _this.status = _this.customerData.status;
                _this.isPurchased = _this.customerData.isPurchased;
                _this.customerImage = _this.customerData.customerImage;
                _this.isProMatched = _this.customerData.isProMatched;
                _this.isAssignStaff = _this.customerData.isAssignStaff;
                _this.image = _this.customerData.image;
                if (_this.customerData.image == '' || _this.customerData.image == null) {
                    _this.customerData2 = "../../assets/img/no-image.png";
                }
                else {
                    _this.customerData2 = _global_global__WEBPACK_IMPORTED_MODULE_8__["Global"].url + _this.customerData.image;
                }
                _this.leadStatus = _this.customerData.leadStatus;
                _this.zipCode = _this.customerData.zipCode;
                console.log("in lead cust" + JSON.stringify(_this.customerData.zipCode));
            }
            else {
                _this.customerStatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    ViewLeadComponent.prototype.back = function () {
        window.history.back();
    };
    ViewLeadComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    ViewLeadComponent.prototype.list = function () {
        this.router.navigate(['/leads/listLeads']);
    };
    ViewLeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"], _utilities_multiplewizard__WEBPACK_IMPORTED_MODULE_4__["multiplewizard"], src_utilities_imageselector__WEBPACK_IMPORTED_MODULE_5__["Imageselector"], _utilities_customValidators__WEBPACK_IMPORTED_MODULE_9__["CustomValidators"]],
            selector: 'app-view-lead',
            template: __webpack_require__(/*! ./view-lead.component.html */ "./src/app/leads/proz-leads/view-lead/view-lead.component.html"),
            styles: [__webpack_require__(/*! ./view-lead.component.scss */ "./src/app/leads/proz-leads/view-lead/view-lead.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"],
            _utilities_multiplewizard__WEBPACK_IMPORTED_MODULE_4__["multiplewizard"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_utilities_imageselector__WEBPACK_IMPORTED_MODULE_5__["Imageselector"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], ViewLeadComponent);
    return ViewLeadComponent;
}());



/***/ })

}]);
//# sourceMappingURL=leads-leads-module.js.map