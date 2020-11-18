(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marketing-marketing-module"],{

/***/ "./src/app/marketing/budgeting/budgeting.component.html":
/*!**************************************************************!*\
  !*** ./src/app/marketing/budgeting/budgeting.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a href=\"#\">Home</a>\r\n      </li>\r\n      <li class=\"active\">Budgeting</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        Marketing Budget\r\n        <span style=\"color: red;\">STATIC</span>\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                <div class=\"well with-header with-footer three-bordered \">\r\n                  <div class=\"header gray\">\r\n                    Marketing Budget\r\n                  </div>\r\n                  <div id=\"registration-form\">\r\n                    <form>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <button type=\"button\" class=\"btn btn-gray\" (click)=\"submit()\">\r\n                                Monthly</button>\r\n                            </div>\r\n                          </div>\r\n                          <br />\r\n                          <!-- Row 1 -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-2\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"promotionCodeLbl\">\r\n                                  <b>Enter Your Monthly Budget For Your Marketing </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select>\r\n                                  <option value=\"\">Select Month Dropdown</option>\r\n                                  <option value=\"\">JANUARY</option>\r\n                                  <option value=\"\">FEBRUARY</option>\r\n                                  <option value=\"\">MARCH</option>\r\n                                  <option value=\"\">APRIL</option>\r\n                                  <option value=\"\">MAY</option>\r\n                                  <option value=\"\">JUNE</option>\r\n                                  <option value=\"\">JULY</option>\r\n                                  <option value=\"\">AUGUST</option>\r\n                                  <option value=\"\">SEPTEMBER</option>\r\n                                  <option value=\"\">OCTOBER</option>\r\n                                  <option value=\"\">NOVEMBER</option>\r\n                                  <option value=\"\">DECEMBER</option>\r\n                                </select>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select>\r\n                                  <option value=\"\">Select Year Dropdown</option>\r\n                                  <option value=\"\">2020</option>\r\n                                  <option value=\"\">2021</option>\r\n                                  <option value=\"\">2022</option>\r\n                                  <option value=\"\">2023</option>\r\n                                  <option value=\"\">2024</option>\r\n                                </select>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                    formControlName=\"monthlybudget\">\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                              <div class=\"form-group\">\r\n                                <button type=\"button\" class=\"btn btn-blue\" (click)=\"submit()\">\r\n                                  Submit</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <br />\r\n                          <!-- /Row 1 -->\r\n\r\n                          <br />\r\n                          <br />\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <button type=\"button\" class=\"btn btn-gray\" (click)=\"submit()\">\r\n                                Monthly</button>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select>\r\n                                  <option value=\"\">Select Month Dropdown</option>\r\n                                  <option value=\"\">JANUARY</option>\r\n                                  <option value=\"\">FEBRUARY</option>\r\n                                  <option value=\"\">MARCH</option>\r\n                                  <option value=\"\">APRIL</option>\r\n                                  <option value=\"\">MAY</option>\r\n                                  <option value=\"\">JUNE</option>\r\n                                  <option value=\"\">JULY</option>\r\n                                  <option value=\"\">AUGUST</option>\r\n                                  <option value=\"\">SEPTEMBER</option>\r\n                                  <option value=\"\">OCTOBER</option>\r\n                                  <option value=\"\">NOVEMBER</option>\r\n                                  <option value=\"\">DECEMBER</option>\r\n                                </select>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select>\r\n                                  <option value=\"\">Select Year Dropdown</option>\r\n                                  <option value=\"\">2020</option>\r\n                                  <option value=\"\">2021</option>\r\n                                  <option value=\"\">2022</option>\r\n                                  <option value=\"\">2023</option>\r\n                                  <option value=\"\">2024</option>\r\n                                </select>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\"></div>\r\n                          </div>\r\n                          <br />\r\n                          <div class=\"widget-body\">\r\n                            <div class=\"table-scrollable\">\r\n                              <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                                <tbody>\r\n                                  <tr>\r\n                                    <td class=\"blue\">\r\n                                      Budgeted\r\n                                    </td>\r\n                                    <td>\r\n                                      $20,000.00\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <td class=\"blue\">\r\n                                      Actual Spent\r\n                                    </td>\r\n                                    <td>\r\n                                      $15,000.00\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"blue\">\r\n                                      Total Calls Received\r\n                                    </td>\r\n                                    <td>\r\n                                      100\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"blue\">\r\n                                      Cost Per Call\r\n                                    </td>\r\n                                    <td>\r\n                                      $75\r\n                                    </td>\r\n                                  </tr>\r\n                                </tbody>\r\n                              </table>\r\n                            </div>\r\n                          </div>\r\n                          <br />\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <button type=\"button\" class=\"btn btn-success\" (click)=\"submit()\">\r\n                                Yearly</button>\r\n                            </div>\r\n                          </div>\r\n                          <br />\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"promotionCodeLbl\">\r\n                                  <b>Enter Your Yearly Budget For Your Marketing </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select>\r\n                                  <option value=\"\">Select YEAR Dropdown</option>\r\n                                  <option value=\"\">2020</option>\r\n                                  <option value=\"\">2021</option>\r\n                                  <option value=\"\">2022</option>\r\n                                  <option value=\"\">2023</option>\r\n                                  <option value=\"\">2024</option>\r\n                                </select>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"yearlyBudget\">\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <button type=\"button\" class=\"btn btn-blue\" (click)=\"submit()\">\r\n                                  Submit</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- Row 3-->\r\n                          <br />\r\n                          <br />\r\n                          <br />\r\n                          <br />\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <button type=\"button\" class=\"btn btn-success\" (click)=\"submit()\">\r\n                                Yearly</button>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select>\r\n                                  <option value=\"\">Select YEAR Dropdown</option>\r\n                                  <option value=\"\">2020</option>\r\n                                  <option value=\"\">2021</option>\r\n                                  <option value=\"\">2022</option>\r\n                                  <option value=\"\">2023</option>\r\n                                  <option value=\"\">2024</option>\r\n                                </select>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\"></div>\r\n                          </div>\r\n                          <br />\r\n                          <div class=\"widget-body\">\r\n                            <div class=\"table-scrollable\">\r\n                              <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                                <!-- <thead class=\"flip-content bordered-palegreen\">\r\n                                 \r\n                                </thead> -->\r\n                                <tbody>\r\n                                  <tr>\r\n                                    <td class=\"yellow\">\r\n                                      Budgeted\r\n                                    </td>\r\n                                    <td>\r\n                                      $240,000.00\r\n                                    </td>\r\n                                  </tr>\r\n\r\n                                  <tr>\r\n                                    <td class=\"yellow\">\r\n                                      Actual Spent\r\n                                    </td>\r\n                                    <td>\r\n                                      $325,000.00\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"yellow\">\r\n                                      Total Calls Received\r\n                                    </td>\r\n                                    <td>\r\n                                      1200\r\n                                    </td>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td class=\"yellow\">\r\n                                      Cost Per Call\r\n                                    </td>\r\n                                    <td>\r\n                                      $75\r\n                                    </td>\r\n                                  </tr>\r\n                                </tbody>\r\n                              </table>\r\n                            </div>\r\n                            <br />\r\n                            <!-- <div *ngIf=\"!showData\">\r\n                              No Records Found\r\n                            </div> -->\r\n                          </div>\r\n                          <!-- /Row 3 -->\r\n                          <!-- Row 4 -->\r\n\r\n                          <!-- /Row 4 -->\r\n                          <!-- Row 5 -->\r\n\r\n                          <!-- /Row 5 -->\r\n\r\n                          <!--Row 6-->\r\n                          <br />\r\n                          <!--/Row 6-->\r\n                          <!-- Bottom Buttons -->\r\n                          <!-- <div class=\"row\">\r\n                            <div class=\"col-lg-3\">\r\n                              <button type=\"button\" class=\"btn btn-blue\" (click)=\"savePromotion()\"><i\r\n                                  class=\"fa fa-check\"></i>\r\n                                Save</button>\r\n                            </div>\r\n                            <div class=\"col-lg-3 button-center\">\r\n                              <button type=\"submit\" class=\"btn btn-gray\" (click)=\"load()\"><i class=\"fa fa-check\"></i>\r\n                                Load to Social Media\r\n                              </button>\r\n\r\n                            </div>\r\n                            <div class=\"col-lg-3 button-center\">\r\n                              <button type=\"button\" class=\"btn btn-blue\" (click)=\"cancel()\"><i class=\"fa fa-check\"></i>\r\n                                Send To All Customers</button>\r\n                            </div>\r\n                            <div class=\"col-lg-3\">\r\n                              <button type=\"button\" class=\"btn btn-gray\" (click)=\"cancel()\"><i class=\"fa fa-times\"></i>\r\n                                Cancel</button>\r\n                            </div>\r\n\r\n\r\n                          </div> -->\r\n                          <!-- /Bottom Buttons -->\r\n                        </div>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Body -->\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- /Page Container -->\r\n\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/marketing/budgeting/budgeting.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/marketing/budgeting/budgeting.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: black !important; }\n\n.yellow {\n  background-color: goldenrod !important;\n  color: black !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2V0aW5nL2J1ZGdldGluZy9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxcbWFya2V0aW5nXFxidWRnZXRpbmdcXGJ1ZGdldGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7c0JBQ2lCO0VBR2pCLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCOzBCQUNzQixFQUV4Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUdGO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNLLHFDQUFvQztFQUNwQyx3QkFBc0IsRUFDMUI7O0FBRUQ7RUFDSSx1Q0FBc0M7RUFDdEMsd0JBQXNCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbWFya2V0aW5nL2J1ZGdldGluZy9idWRnZXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS10aXRsZXtcclxuICAgICBjb2xvcjogICM1ZGIyZmY7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNWRiMmZmO1xyXG4gXHJcbiAgICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgICBwYWRkaW5nOiA4cHggMDsqLyAgICBcclxuICAgICAvLyBjb2xvcjogICM3ZTM3OTQ7XHJcbiAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0O1xyXG4gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuIFxyXG4gfVxyXG4gXHJcbiAubWFuZGF0b3J5e1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuIH1cclxuXHJcbiAuZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gIFxyXG4uYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmx1ZXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnllbGxvd3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/marketing/budgeting/budgeting.component.ts":
/*!************************************************************!*\
  !*** ./src/app/marketing/budgeting/budgeting.component.ts ***!
  \************************************************************/
/*! exports provided: BudgetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetingComponent", function() { return BudgetingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var BudgetingComponent = /** @class */ (function () {
    function BudgetingComponent(beyond, router, formBuilder, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
    }
    BudgetingComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
    };
    BudgetingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-budgeting',
            template: __webpack_require__(/*! ./budgeting.component.html */ "./src/app/marketing/budgeting/budgeting.component.html"),
            styles: [__webpack_require__(/*! ./budgeting.component.scss */ "./src/app/marketing/budgeting/budgeting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], BudgetingComponent);
    return BudgetingComponent;
}());



/***/ }),

/***/ "./src/app/marketing/email-list/email-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/marketing/email-list/email-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home</a>\r\n      </li>\r\n      <li> <a href=\"#\">Marketing</a></li>\r\n      <li class=\"active\">Email List</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        List All Customers\r\n        <!-- <span style=\"color: red;\">INPROGRESS</span> -->\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n    <br />\r\n    <!--Search By-->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"widget\">\r\n          <div class=\"widget-header with-footer header gray\">\r\n            <span class=\"widget-caption\">Search Customer By</span>\r\n          </div>\r\n          <form [formGroup]=\"searchCustomer\">\r\n            <div class=\"widget-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"searchByLbl\">\r\n                      <b>Search Customer By </b>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <select class=\"form-control\" formControlName=\"selectBy\" [(ngModel)]=\"choosePayType\"\r\n                      (ngModelChange)=\"customerTypeSelection(choosePayType)\">\r\n                      <option value=\"All\">All</option>\r\n                      <option value=\"FirstName\">First Name</option>\r\n                      <option value=\"LastName\">Last Name</option>\r\n                      <option value=\"Email\">Email</option>\r\n                      <option value=\"PhoneNumber\">Phone</option>\r\n                      <option value=\"EmailSubscription\">Subscription Status</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"col-sm-3\">\r\n                <div class=\"form-group\">\r\n                  <span class=\"input-icon icon-right\">\r\n                    <input type=\"text\" class=\"form-control\" >\r\n                  </span>\r\n                </div>\r\n              </div> -->\r\n                <div class=\"col-sm-3\" *ngIf=\"All\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"FirstName\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"firstName\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"PhoneNumber\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"phoneNumber\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"Email\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"emailId\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"LastName\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"EmailSubscription\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"emailSubscription\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    &nbsp;&nbsp;&nbsp;&nbsp; <button type=\"submit\" class=\"btn btn-success shiny\"\r\n                      (click)=\"searchCustomerData()\"><i class=\"fa fa-search\"></i>&nbsp; Search</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button type=\"submit\" class=\"btn btn-danger shiny\" (click)=\"reset()\"><i\r\n                        class=\"fa fa-repeat\"></i>&nbsp; Reset</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/Search By-->\r\n    <!-- Add Promotion Button -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-blue\" (click)=\"emailList()\"><i class=\"fa fa-user-plus\"></i>&nbsp;\r\n              Email List</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <div class=\"form-group\">\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-success\" (click)=\"updateList()\">&nbsp;\r\n              Update List</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /Add Promotion Screen -->\r\n\r\n    <!-- List of Promotions - New -->\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"well with-header with-footer three-bordered\">\r\n          <div class=\"header gray\">\r\n            List All Customers\r\n          </div>\r\n          <table class=\"table table-striped table-hover table-bordered\" *ngIf=\"emailListResponse\">\r\n            <thead>\r\n              <tr>\r\n                <th style=\"width:5%;\">\r\n                  First Name\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  Last Name\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  Email\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  Phone\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  Subscription Status\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n\r\n            <tbody>\r\n              <tr *ngFor=\"let data of customerList\">\r\n                <!-- <td><a (click)=\"viewPromotion(data)\">\r\n                    {{data.promotionCode}}</a></td> -->\r\n                <td>{{data.firstName}}</td>\r\n                <td>{{data.lastName}}</td>\r\n                <td>{{data.emailId}}</td>\r\n                <td>{{data.phoneNumber}}</td>\r\n                <td>{{data.emailSubscription}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div *ngIf=\"!emailListResponse\">\r\n            <p>No Records Found</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /List of Promotions - New -->\r\n\r\n  </div>\r\n  <!-- /Page Body -->\r\n</div>"

/***/ }),

/***/ "./src/app/marketing/email-list/email-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/marketing/email-list/email-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2V0aW5nL2VtYWlsLWxpc3QvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXG1hcmtldGluZ1xcZW1haWwtbGlzdFxcZW1haWwtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxlQUFlO0VBQ2Ysa0NBQWlDO0VBRWpDO3NCQUNpQjtFQUdqQixnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjswQkFDc0IsRUFFeEI7O0FBRUQ7RUFDRyxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUdEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDIiwiZmlsZSI6InNyYy9hcHAvbWFya2V0aW5nL2VtYWlsLWxpc3QvZW1haWwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmZvcm0tdGl0bGV7XHJcbiAgICAgY29sb3I6ICAjNWRiMmZmO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuIFxyXG4gICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICAgcGFkZGluZzogOHB4IDA7Ki8gICAgXHJcbiAgICAgLy8gY29sb3I6ICAjN2UzNzk0O1xyXG4gICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzdlMzc5NDtcclxuICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbiBcclxuIH1cclxuXHJcbiAuZ3JheXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnRocmVlLWJvcmRlcmVke1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/marketing/email-list/email-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/marketing/email-list/email-list.component.ts ***!
  \**************************************************************/
/*! exports provided: EmailListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailListComponent", function() { return EmailListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EmailListComponent = /** @class */ (function () {
    function EmailListComponent(beyond, router, formBuilder, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.customerArray = [];
    }
    EmailListComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proId = this.loginData.loginCode;
        this.listCustomerDetails();
        this.All = true;
        {
            this.searchCustomer = this.formBuilder.group({
                firstName: [null],
                lastName: [null],
                phoneNumber: [null],
                emailId: [null],
                emailSubscription: [null],
                selectBy: [null]
            });
        }
    };
    EmailListComponent.prototype.customerTypeSelection = function (x) {
        console.log("x" + x);
        if (x == "All") {
            this.listCustomerDetails();
        }
        if (x == "FirstName") {
            this.FirstName = true;
            this.PhoneNumber = false;
            this.Email = false;
            this.LastName = false;
            this.EmailSubscription = false;
            this.All = false;
        }
        if (x == "PhoneNumber") {
            this.FirstName = false;
            this.PhoneNumber = true;
            this.Email = false;
            this.LastName = false;
            this.EmailSubscription = false;
            this.All = false;
        }
        if (x == "Email") {
            this.FirstName = false;
            this.PhoneNumber = false;
            this.Email = true;
            this.LastName = false;
            this.EmailSubscription = false;
            this.All = false;
        }
        if (x == "EmailSubscription") {
            this.FirstName = false;
            this.PhoneNumber = false;
            this.Email = false;
            this.LastName = false;
            this.EmailSubscription = true;
            this.All = false;
        }
        if (x == "LastName") {
            this.FirstName = false;
            this.PhoneNumber = false;
            this.Email = false;
            this.LastName = true;
            this.EmailSubscription = false;
            this.All = false;
        }
    };
    EmailListComponent.prototype.reset = function () {
        this.searchCustomer.reset();
        this.listCustomerDetails();
    };
    EmailListComponent.prototype.listCustomerDetails = function () {
        var _this = this;
        // this.spinner.show();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/vancustomerList/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var customerData = data.json();
            console.log("customerData" + JSON.stringify(customerData));
            if (customerData.status == 200) {
                // this.spinner.hide();
                _this.customerList = customerData.addressInfo;
                _this.emailListResponse = true;
                return false;
            }
            else {
                console.log("ELSE CONDITION IS CALLING");
                // this.spinner.hide();
                _this.emailListResponse = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    // Search Customer Starts
    EmailListComponent.prototype.searchCustomerData = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var obj = {
            "firstName": this.searchCustomer.value.firstName,
            "lastName": this.searchCustomer.value.lastName,
            "emailId": this.searchCustomer.value.emailId,
            "phoneNumber": this.searchCustomer.value.phoneNumber,
            "emailSubscription": this.searchCustomer.value.emailSubscription
        };
        console.log(obj);
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/searchCustomerEmail/' + this.proId, [
            { id: 'firstName', value: obj.firstName },
            { id: 'lastName', value: obj.lastName },
            { id: 'emailId', value: obj.emailId },
            { id: 'phoneNumber', value: obj.phoneNumber },
            { id: 'emailSubscription', value: obj.emailSubscription }
        ]).subscribe(function (data) {
            _this.customer = data.json();
            console.log("center" + JSON.stringify(_this.customer));
            if (_this.customer.status == 200) {
                _this.customerList = _this.customer.response;
                _this.emailListResponse = true;
                console.log("customerData values" + JSON.stringify(_this.customerList));
                _this.searchCustomer.reset();
            }
            else {
                _this.emailListResponse = false;
                console.log('The else');
            }
        });
    };
    // Search Customer Ends
    EmailListComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    EmailListComponent.prototype.updateList = function () {
        this.listCustomerDetails();
    };
    EmailListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-email-list',
            template: __webpack_require__(/*! ./email-list.component.html */ "./src/app/marketing/email-list/email-list.component.html"),
            styles: [__webpack_require__(/*! ./email-list.component.scss */ "./src/app/marketing/email-list/email-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], EmailListComponent);
    return EmailListComponent;
}());



/***/ }),

/***/ "./src/app/marketing/marketing-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/marketing/marketing-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MarketingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingRoutingModule", function() { return MarketingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _promotions_list_promotion_list_promotion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promotions/list-promotion/list-promotion.component */ "./src/app/marketing/promotions/list-promotion/list-promotion.component.ts");
/* harmony import */ var _promotions_promotions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./promotions/promotions.component */ "./src/app/marketing/promotions/promotions.component.ts");
/* harmony import */ var _promotions_edit_promotion_edit_promotion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promotions/edit-promotion/edit-promotion.component */ "./src/app/marketing/promotions/edit-promotion/edit-promotion.component.ts");
/* harmony import */ var _promotions_add_promotion_add_promotion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promotions/add-promotion/add-promotion.component */ "./src/app/marketing/promotions/add-promotion/add-promotion.component.ts");
/* harmony import */ var _promotions_view_promotion_view_promotion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./promotions/view-promotion/view-promotion.component */ "./src/app/marketing/promotions/view-promotion/view-promotion.component.ts");
/* harmony import */ var _promotions_load_to_social_media_load_to_social_media_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./promotions/load-to-social-media/load-to-social-media.component */ "./src/app/marketing/promotions/load-to-social-media/load-to-social-media.component.ts");
/* harmony import */ var _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./email-list/email-list.component */ "./src/app/marketing/email-list/email-list.component.ts");
/* harmony import */ var _budgeting_budgeting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./budgeting/budgeting.component */ "./src/app/marketing/budgeting/budgeting.component.ts");











var routes = [
    {
        path: '', component: _promotions_promotions_component__WEBPACK_IMPORTED_MODULE_4__["PromotionsComponent"],
        children: [
            {
                path: 'listPromotion',
                component: _promotions_list_promotion_list_promotion_component__WEBPACK_IMPORTED_MODULE_3__["ListPromotionComponent"]
            },
            {
                path: 'editPromotion/:promotionCode',
                component: _promotions_edit_promotion_edit_promotion_component__WEBPACK_IMPORTED_MODULE_5__["EditPromotionComponent"]
            },
            {
                path: 'viewPromotion/:promotionCode',
                component: _promotions_view_promotion_view_promotion_component__WEBPACK_IMPORTED_MODULE_7__["ViewPromotionComponent"]
            },
            {
                path: 'addPromotion',
                component: _promotions_add_promotion_add_promotion_component__WEBPACK_IMPORTED_MODULE_6__["AddPromotionComponent"]
            },
            {
                path: 'loadToSocialMedia',
                component: _promotions_load_to_social_media_load_to_social_media_component__WEBPACK_IMPORTED_MODULE_8__["LoadToSocialMediaComponent"]
            },
            {
                path: 'emailList',
                component: _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_9__["EmailListComponent"]
            },
            {
                path: 'budget',
                component: _budgeting_budgeting_component__WEBPACK_IMPORTED_MODULE_10__["BudgetingComponent"]
            },
        ]
    }
];
var MarketingRoutingModule = /** @class */ (function () {
    function MarketingRoutingModule() {
    }
    MarketingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MarketingRoutingModule);
    return MarketingRoutingModule;
}());



/***/ }),

/***/ "./src/app/marketing/marketing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/marketing/marketing.module.ts ***!
  \***********************************************/
/*! exports provided: MarketingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingModule", function() { return MarketingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _marketing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketing-routing.module */ "./src/app/marketing/marketing-routing.module.ts");
/* harmony import */ var _promotions_promotions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./promotions/promotions.component */ "./src/app/marketing/promotions/promotions.component.ts");
/* harmony import */ var _promotions_add_promotion_add_promotion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promotions/add-promotion/add-promotion.component */ "./src/app/marketing/promotions/add-promotion/add-promotion.component.ts");
/* harmony import */ var _promotions_view_promotion_view_promotion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promotions/view-promotion/view-promotion.component */ "./src/app/marketing/promotions/view-promotion/view-promotion.component.ts");
/* harmony import */ var _promotions_edit_promotion_edit_promotion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./promotions/edit-promotion/edit-promotion.component */ "./src/app/marketing/promotions/edit-promotion/edit-promotion.component.ts");
/* harmony import */ var _promotions_list_promotion_list_promotion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./promotions/list-promotion/list-promotion.component */ "./src/app/marketing/promotions/list-promotion/list-promotion.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/prozadmin-sidemenu/proz-sidemenu.module */ "./src/app/common/prozadmin-sidemenu/proz-sidemenu.module.ts");
/* harmony import */ var _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/commonvanlynkheader/commonvanlynkheader.module */ "./src/app/common/commonvanlynkheader/commonvanlynkheader.module.ts");
/* harmony import */ var _promotions_load_to_social_media_load_to_social_media_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./promotions/load-to-social-media/load-to-social-media.component */ "./src/app/marketing/promotions/load-to-social-media/load-to-social-media.component.ts");
/* harmony import */ var _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./email-list/email-list.component */ "./src/app/marketing/email-list/email-list.component.ts");
/* harmony import */ var _budgeting_budgeting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./budgeting/budgeting.component */ "./src/app/marketing/budgeting/budgeting.component.ts");















var MarketingModule = /** @class */ (function () {
    function MarketingModule() {
    }
    MarketingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_promotions_promotions_component__WEBPACK_IMPORTED_MODULE_4__["PromotionsComponent"], _promotions_add_promotion_add_promotion_component__WEBPACK_IMPORTED_MODULE_5__["AddPromotionComponent"], _promotions_view_promotion_view_promotion_component__WEBPACK_IMPORTED_MODULE_6__["ViewPromotionComponent"], _promotions_edit_promotion_edit_promotion_component__WEBPACK_IMPORTED_MODULE_7__["EditPromotionComponent"], _promotions_list_promotion_list_promotion_component__WEBPACK_IMPORTED_MODULE_8__["ListPromotionComponent"], _promotions_load_to_social_media_load_to_social_media_component__WEBPACK_IMPORTED_MODULE_12__["LoadToSocialMediaComponent"], _email_list_email_list_component__WEBPACK_IMPORTED_MODULE_13__["EmailListComponent"], _budgeting_budgeting_component__WEBPACK_IMPORTED_MODULE_14__["BudgetingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _marketing_routing_module__WEBPACK_IMPORTED_MODULE_3__["MarketingRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_10__["ProzSidemenuModule"],
                _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_11__["CommonvanlynkheaderModule"],
            ]
        })
    ], MarketingModule);
    return MarketingModule;
}());



/***/ }),

/***/ "./src/app/marketing/promotions/add-promotion/add-promotion.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/marketing/promotions/add-promotion/add-promotion.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n     <!-- Page Breadcrumb -->\r\n     <div class=\"page-breadcrumbs\">\r\n          <ul class=\"breadcrumb\">\r\n               <li>\r\n                    <i class=\"fa fa-home\"></i>\r\n                    <a (click)=\"home()\">Home</a>\r\n               </li>\r\n               <li> Promotions</li>\r\n               <!-- <li>List of Promotions</li> -->\r\n               <li>\r\n                    <a (click)=\"list()\">List of Promotions</a>\r\n               </li>\r\n               <li class=\"active\">Add Promotion</li>\r\n          </ul>\r\n     </div>\r\n     <!-- /Page Breadcrumb -->\r\n\r\n     <!-- Page Header -->\r\n     <div class=\"page-header position-relative\">\r\n          <div class=\"header-title\">\r\n               <h1>\r\n                    Add Promotion\r\n                    <!-- <span style=\"color: red;\">INPROGRESS</span> -->\r\n               </h1>\r\n          </div>\r\n     </div>\r\n     <!-- /Page Header -->\r\n     <!-- Page Body -->\r\n     <div class=\"page-body\">\r\n          <div class=\"row\">\r\n               <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"row\">\r\n                         <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"row\">\r\n                                   <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                                        <div class=\"well with-header with-footer three-bordered \">\r\n                                             <div class=\"header gray\">\r\n                                                  Add Promotion\r\n                                             </div>\r\n                                             <div id=\"registration-form\">\r\n                                                  <form [formGroup]=\"addPromotion\" (ngSubmit)=\"onSubmit()\">\r\n                                                       <div class=\"row\">\r\n                                                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                                                 <!-- Row 1 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"promotionCodeLbl\">\r\n                                                                                     <b>Promotion Code </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"promotionCode\"\r\n                                                                                          value=\"{{promotionCode}}\"\r\n                                                                                          readonly>\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"promotionNameLbl\">\r\n                                                                                     <b>Promotion Name <span\r\n                                                                                               class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"promotionName\"\r\n                                                                                          [ngClass]=\"{ 'is-invalid': submitted && f.promotionName.errors }\">\r\n                                                                                </span>\r\n                                                                                <div *ngIf=\"submitted && f.promotionName.errors\"\r\n                                                                                     class=\"invalid-feedback\">\r\n                                                                                     <div\r\n                                                                                          *ngIf=\"f.promotionName.errors.required\">\r\n                                                                                          <p\r\n                                                                                               style=\"color: red; font-size: 11px\">\r\n                                                                                               Enter Promotion Name</p>\r\n                                                                                     </div>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 1 -->\r\n                                                                 <!-- Row 2 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"vendorNameLbl\">\r\n                                                                                     <b>Vendor Name</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <select type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"vendorName\"\r\n                                                                                          data-bv-field=\"row-title\"\r\n                                                                                          [ngClass]=\"{ 'is-invalid': submitted && f.vendorName.errors }\">\r\n                                                                                          <option value=\"\">Select\r\n                                                                                          </option>\r\n                                                                                          <option\r\n                                                                                               *ngFor=\"let data of vendorList\"\r\n                                                                                               value={{data.vendorName}}>\r\n                                                                                               {{data.vendorName}}\r\n                                                                                          </option>\r\n                                                                                     </select>\r\n\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"typeOrCategoryLbl\">\r\n                                                                                     <b>Marketing Media Type<span\r\n                                                                                               class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <select type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"marketingMediaType\"\r\n                                                                                          data-bv-field=\"row-title\"\r\n                                                                                          [ngClass]=\"{ 'is-invalid': submitted && f.marketingMediaType.errors }\">\r\n                                                                                          <option value=\"\">Select\r\n                                                                                          </option>\r\n                                                                                          <option\r\n                                                                                               *ngFor=\"let data of promotionMarketingMediaType\"\r\n                                                                                               value={{data.sourceType}}>\r\n                                                                                               {{data.sourceType}}\r\n                                                                                          </option>\r\n                                                                                     </select>\r\n                                                                                     <div *ngIf=\"submitted && f.marketingMediaType.errors\"\r\n                                                                                          class=\"invalid-feedback\">\r\n                                                                                          <div\r\n                                                                                               *ngIf=\"f.marketingMediaType.errors.required\">\r\n                                                                                               <p\r\n                                                                                                    style=\"color: red; font-size: 11px\">\r\n                                                                                                    Select Marketing\r\n                                                                                                    Media Type</p>\r\n                                                                                          </div>\r\n                                                                                     </div>\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 2 -->\r\n                                                                 <!-- Row 3-->\r\n\r\n\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"startDateLbl\">\r\n                                                                                     <b>Start Date<span\r\n                                                                                               class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"date\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          min=\"{{ startMin }}\"\r\n                                                                                          [max]=\"startMax\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"startDate\"\r\n                                                                                          (change)=\"onStartDateSelected($event.target.value)\"\r\n                                                                                          onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\" />\r\n                                                                                </span>\r\n                                                                                <div *ngIf=\"submitted && f.startDate.errors\"\r\n                                                                                     class=\"invalid-feedback\">\r\n                                                                                     <div\r\n                                                                                          *ngIf=\"f.startDate.errors.required\">\r\n                                                                                          <p\r\n                                                                                               style=\"color: red; font-size: 11px\">\r\n                                                                                               Enter Start Date</p>\r\n                                                                                     </div>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"endDateLbl\">\r\n                                                                                     <b>End Date<span\r\n                                                                                               class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"date\" [min]=\"endMin\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"endDate\"\r\n                                                                                          (change)=\"\r\n                                                                                onEndDateSelected(\r\n                                                                                  $event.target.value\r\n                                                                                )\" onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\" />\r\n\r\n                                                                                </span>\r\n                                                                                <div *ngIf=\"submitted && f.endDate.errors\"\r\n                                                                                     class=\"invalid-feedback\">\r\n                                                                                     <div\r\n                                                                                          *ngIf=\"f.endDate.errors.required\">\r\n                                                                                          <p\r\n                                                                                               style=\"color: red; font-size: 11px\">\r\n                                                                                               Enter End Date</p>\r\n                                                                                     </div>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 3 -->\r\n                                                                 <!-- Row 4 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"emailLbl\">\r\n                                                                                     <b>Recurring<span\r\n                                                                                               class=\"mandatory\">*</span>\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <select type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"recurring\"\r\n                                                                                          [ngClass]=\"{ 'is-invalid': submitted && f.recurring.errors}\">\r\n                                                                                          <option value=\"\">Select\r\n                                                                                          </option>\r\n                                                                                          <option value=\"Per Click\">\r\n                                                                                               Per Click\r\n                                                                                          </option>\r\n                                                                                          <option value=\"Onetime\">\r\n                                                                                               Onetime\r\n                                                                                          </option>\r\n                                                                                          <option value=\"Monthly\">\r\n                                                                                               Monthly\r\n                                                                                          </option>\r\n                                                                                          <option value=\"Quaterly\">\r\n                                                                                               Quaterly\r\n                                                                                          </option>\r\n                                                                                          <option value=\"Yearly\">Yearly\r\n                                                                                          </option>\r\n                                                                                     </select>\r\n                                                                                     <div *ngIf=\"submitted && f.recurring.errors\"\r\n                                                                                          class=\"invalid-feedback\">\r\n                                                                                          <div\r\n                                                                                               *ngIf=\"f.recurring.errors.required\">\r\n                                                                                               <p\r\n                                                                                                    style=\"color: red; font-size: 11px\">\r\n                                                                                                    Select Recurring</p>\r\n                                                                                          </div>\r\n                                                                                     </div>\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Promotion Fees<span\r\n                                                                                               class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <input type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"\"\r\n                                                                                     formControlName=\"promotionFees\"\r\n                                                                                     [ngClass]=\"{ 'is-invalid': submitted && f.promotionFees.errors}\">\r\n                                                                                <div *ngIf=\"submitted && f.promotionFees.errors\"\r\n                                                                                     class=\"invalid-feedback\">\r\n                                                                                     <div\r\n                                                                                          *ngIf=\"f.promotionFees.errors.required\">\r\n                                                                                          <p\r\n                                                                                               style=\"color: red; font-size: 11px\">\r\n                                                                                               Enter Promotion Fees</p>\r\n                                                                                     </div>\r\n                                                                                </div>\r\n                                                                           </div>\r\n\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 4 -->\r\n                                                                 <!-- Row 5 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"promotionValuesLbl\">\r\n                                                                                     <b>Promotion Values<span\r\n                                                                                               class=\"mandatory\">*</span>\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"promotionValues\"\r\n                                                                                          [ngClass]=\"{ 'is-invalid': submitted && f.promotionValues.errors}\">\r\n                                                                                     <div *ngIf=\"submitted && f.promotionValues.errors\"\r\n                                                                                          class=\"invalid-feedback\">\r\n                                                                                          <div\r\n                                                                                               *ngIf=\"f.promotionValues.errors.required\">\r\n                                                                                               <p\r\n                                                                                                    style=\"color: red; font-size: 11px\">\r\n                                                                                                    Enter Promotion\r\n                                                                                                    Value</p>\r\n                                                                                          </div>\r\n                                                                                     </div>\r\n                                                                                </span>\r\n\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-2\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <select type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"\"\r\n                                                                                     formControlName=\"type\"\r\n                                                                                     data-bv-field=\"row-title\"\r\n                                                                                     [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\">\r\n                                                                                     <option value=\"\"> Select\r\n                                                                                     </option>\r\n                                                                                     <option value=\"$\"> $\r\n                                                                                     </option>\r\n                                                                                     <option value=\"%\"> %\r\n                                                                                     </option>\r\n                                                                                </select>\r\n                                                                                <div *ngIf=\"submitted && f.type.errors\"\r\n                                                                                     class=\"invalid-feedback\">\r\n                                                                                     <div\r\n                                                                                          *ngIf=\"f.type.errors.required\">\r\n                                                                                          <p\r\n                                                                                               style=\"color: red; font-size: 11px\">\r\n                                                                                               Select Type</p>\r\n                                                                                     </div>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-2\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <select type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"\"\r\n                                                                                     formControlName=\"mode\"\r\n                                                                                     data-bv-field=\"row-title\"\r\n                                                                                     [ngClass]=\"{ 'is-invalid': submitted && f.mode.errors }\">\r\n                                                                                     <option value=\"\">Select\r\n                                                                                     </option>\r\n                                                                                     <option value=\"Off\">Off\r\n                                                                                     </option>\r\n                                                                                     <option value=\"For\">For\r\n                                                                                     </option>\r\n\r\n                                                                                </select>\r\n                                                                                <div *ngIf=\"submitted && f.mode.errors\"\r\n                                                                                     class=\"invalid-feedback\">\r\n                                                                                     <div\r\n                                                                                          *ngIf=\"f.mode.errors.required\">\r\n                                                                                          <p\r\n                                                                                               style=\"color: red; font-size: 11px\">\r\n                                                                                               Select Mode</p>\r\n                                                                                     </div>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-2\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <input type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"Total Ticket\"\r\n                                                                                     formControlName=\"totalTicket\">\r\n                                                                                <div *ngIf=\" submitted && f.marketingMediaType.errors\"\r\n                                                                                     class=\"invalid-feedback\">\r\n                                                                                     <div\r\n                                                                                          *ngIf=\"f.totalTicket.errors.required\">\r\n                                                                                          <p\r\n                                                                                               style=\"color: red; font-size: 11px\">\r\n                                                                                               Enter Total Ticket</p>\r\n                                                                                     </div>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 5 -->\r\n\r\n                                                                 <!--Row 6-->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"descriptionLbl\">\r\n                                                                                     <b>Description<span\r\n                                                                                               class=\"mandatory\">*</span>\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-6\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"description\">\r\n                                                                                     <div *ngIf=\"submitted && f.description.errors\"\r\n                                                                                          class=\"invalid-feedback\">\r\n                                                                                          <div\r\n                                                                                               *ngIf=\"f.description.errors.required\">\r\n                                                                                               <p\r\n                                                                                                    style=\"color: red; font-size: 11px\">\r\n                                                                                                    Enter Description\r\n                                                                                               </p>\r\n                                                                                          </div>\r\n                                                                                     </div>\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n\r\n                                                                 </div>\r\n                                                                 <!--/Row 6-->\r\n                                                                 <!--Row 7-->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"statusLbl\">\r\n                                                                                     <b>Status</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <select type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"\"\r\n                                                                                     formControlName=\"status\"\r\n                                                                                     data-bv-field=\"row-title\">\r\n                                                                                     <option value=\"\">Select\r\n                                                                                     </option>\r\n                                                                                     <option value=\"ACTIVE\">\r\n                                                                                          ACTIVE\r\n                                                                                     </option>\r\n                                                                                     <option value=\"INACTIVE\">INACTIVE\r\n                                                                                     </option>\r\n                                                                                </select>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n\r\n                                                                 <!--/Row 7-->\r\n                                                            </div>\r\n                                                       </div>\r\n                                                       <!-- <div class=\"row\">\r\n                                                            <div class=\"col-lg-6 col-sm-6 col-xs-6\">\r\n                                                                 <div class=\"form-group\">\r\n                                                                      <label for=\"lginput\">\r\n                                                                           <b>Promotion Image</b>\r\n                                                                           &nbsp;&nbsp;\r\n                                                                           <span\r\n                                                                                class=\"file-input btn btn-magenta shiny btn-file\">\r\n                                                                                Browse <input #imageUpload type=\"file\"\r\n                                                                                     accept=\"image/*\" id=\"avatar\"\r\n                                                                                     (change)=\"select($event)\"\r\n                                                                                     #fileInput>\r\n                                                                           </span>\r\n                                                                      </label>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-sm-3\">\r\n                                                                 <div class=\"form-group\">\r\n                                                                      <label for=\"statusLbl\">\r\n                                                                           <b>Status</b>\r\n                                                                      </label>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-sm-3\">\r\n                                                                 <div class=\"form-group\">\r\n                                                                      <select type=\"text\" class=\"form-control\"\r\n                                                                           placeholder=\"\" formControlName=\"status\"\r\n                                                                           data-bv-field=\"row-title\">\r\n                                                                           <option value=\"\">Select\r\n                                                                           </option>\r\n                                                                           <option value=\"ACTIVE\">\r\n                                                                                ACTIVE\r\n                                                                           </option>\r\n                                                                           <option value=\"INACTIVE\">INACTIVE\r\n                                                                           </option>\r\n                                                                      </select>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                       </div> -->\r\n\r\n                                                       <!-- <div class=\"row\">\r\n                                                            <div class=\"col-lg-6 col-sm-6 col-xs-6\">\r\n                                                                 <div class=\"form-group\">\r\n                                                                      <div data-provides=\"fileupload\"\r\n                                                                           class=\"fileupload fileupload-new\">\r\n                                                                           <div style=\"width: 100px; height: 120px;\"\r\n                                                                                class=\"fileupload-new thumbnail\">\r\n                                                                                <img [src]=\"imagePreview\"\r\n                                                                                     style=\"height:120px;width:100px;\">\r\n                                                                           </div>\r\n                                                                           <div>\r\n                                                                                <button type=\"button\" class=\"btn\"\r\n                                                                                     [disabled]=\"!img\"\r\n                                                                                     (click)=\"imgfileUpload()\">Upload</button>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <div *ngIf=\"progressShow\"\r\n                                                                      class=\"progress-bar1 blue stripes\">\r\n                                                                      <span [style.width.%]=\"percentage\">\r\n                                                                           <p\r\n                                                                                style=\"text-align: center;color:black;font-size:18px;\">\r\n                                                                                {{percentage}}%</p>\r\n                                                                      </span>\r\n                                                                 </div>\r\n                                                                 <br>\r\n                                                                 <div *ngIf=\"progressHide\"\r\n                                                                      class=\"alert alert-block alert-success\"\r\n                                                                      style=\"height:3px;\">\r\n                                                                      <h4 class=\"alert-heading\"\r\n                                                                           style=\"margin-top:-5px;text-align:center;\">\r\n                                                                           Image\r\n                                                                           Uploaded\r\n                                                                           Successfully</h4>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                       </div> -->\r\n                                                       <div class=\"row\">\r\n                                                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"serviceIDLbl\">\r\n                                                                                     <b>Promotion Image</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-2\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <input type=\"file\" id=\"file-upload\"\r\n                                                                                     (change)=\"onSelectFile($event)\"\r\n                                                                                     class=\"uploadImage\"\r\n                                                                                     [(ngModel)]=\"filesToUpload.length\"\r\n                                                                                     [ngModelOptions]=\"{standalone: true}\"\r\n                                                                                     multiple>\r\n\r\n                                                                                <label for=\"file-upload\"\r\n                                                                                     class=\"custom-file-upload\">\r\n                                                                                     <i class=\"fa fa-file-image-o\"></i>\r\n                                                                                     Choose Files\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                      <div class=\"col-sm-2\">\r\n\r\n                                                                      </div>\r\n                                                                 </div>\r\n\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-12\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <div *ngFor=\"let x of arr;let i=index\">\r\n                                                                                     <br>\r\n                                                                                     <figure class=\"imageNamecss\"\r\n                                                                                          class=\"icon1\">\r\n                                                                                          {{imageNames[i]?.image}}<i\r\n                                                                                               (click)=\"removeSelectedFile(i)\"\r\n                                                                                               style=\"float:right;margin-top:0px;color: red\"\r\n                                                                                               class=\"fa fa-times\"></i>\r\n                                                                                          <img src=\"{{x.name}}\"\r\n                                                                                               height=\"100px\"\r\n                                                                                               width=\"120px\" readonly>\r\n\r\n                                                                                     </figure>\r\n                                                                                     &nbsp;&nbsp;&nbsp;&nbsp;\r\n                                                                                </div>\r\n                                                                                <button type=\"button\"\r\n                                                                                     class=\"btn btn-success btn-s\"\r\n                                                                                     (click)=\"upload()\">\r\n                                                                                     <i class=\"fa fa-upload\"></i>\r\n                                                                                     Upload\r\n                                                                                </button>\r\n                                                                                <div *ngIf=\"displyFlag == true\">\r\n                                                                                     <p\r\n                                                                                          style=\"color: red; font-size: 11px\">\r\n                                                                                          Please upload the files\r\n                                                                                     </p>\r\n                                                                                </div>\r\n                                                                                <br>\r\n                                                                                <br>\r\n                                                                                <div *ngIf=\"progressShow1\"\r\n                                                                                     class=\"progress-bar1 green stripes\">\r\n                                                                                     <span\r\n                                                                                          [style.width.%]=\"percentage1\">\r\n                                                                                          <p\r\n                                                                                               style=\"text-align: center;color:black;font-size:18px;\">\r\n                                                                                               {{percentage1}}%</p>\r\n                                                                                     </span>\r\n                                                                                </div>\r\n                                                                                <div *ngIf=\"progressHide1\"\r\n                                                                                     class=\"alert alert-block alert-success\"\r\n                                                                                     style=\"height:4px;\">\r\n                                                                                     <h4 class=\"alert-heading\"\r\n                                                                                          style=\"margin-top:-6px;text-align:center;\">\r\n                                                                                          Images\r\n                                                                                          Uploaded\r\n                                                                                          Successfully</h4>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                       </div>\r\n                                                       <!-- Bottom Buttons -->\r\n\r\n                                                       <div class=\"row\">\r\n                                                            <div class=\"col-lg-3\">\r\n                                                                 <button type=\"submit\" class=\"btn btn-blue\"><i\r\n                                                                           class=\"fa fa-check\"></i>\r\n                                                                      Save</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-lg-3 button-center\">\r\n                                                                 <button type=\"button\" class=\"btn btn-gray\"\r\n                                                                      (click)=\"load()\"><i class=\"fa fa-check\"></i>\r\n                                                                      Load to Social Media\r\n                                                                 </button>\r\n\r\n                                                            </div>\r\n                                                            <div class=\"col-lg-3 button-center\">\r\n                                                                 <button type=\"button\" class=\"btn btn-blue\"\r\n                                                                      (click)=\"sendEmails()\"><i class=\"fa fa-check\"></i>\r\n                                                                      Send To All Customers</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-lg-3\">\r\n                                                                 <button type=\"button\" class=\"btn btn-gray\"\r\n                                                                      (click)=\"cancel()\"><i class=\"fa fa-times\"></i>\r\n                                                                      Cancel</button>\r\n                                                            </div>\r\n\r\n\r\n                                                       </div>\r\n                                                       <!-- /Bottom Buttons -->\r\n                                                  </form>\r\n                                             </div>\r\n                                        </div>\r\n                                   </div>\r\n                              </div>\r\n                         </div>\r\n                    </div>\r\n               </div>\r\n          </div>\r\n     </div>\r\n     <!-- /Page Body -->\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- /Page Container -->\r\n\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/marketing/promotions/add-promotion/add-promotion.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/marketing/promotions/add-promotion/add-promotion.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\ninput[type=\"file\"] {\n  display: none; }\n\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer; }\n\n.uploadImage {\n  margin-left: 3em; }\n\n.imageNamecss {\n  height: 140px;\n  width: 220px; }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.icon1 {\n  height: auto;\n  width: 120px;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  font: 400 16px/1.4 \"Source Code Pro\";\n  font-variant: small-caps;\n  padding: 10px;\n  border: 1px solid #103683;\n  border-radius: 10px;\n  width: 20.33%;\n  padding: 10px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2V0aW5nL3Byb21vdGlvbnMvYWRkLXByb21vdGlvbi9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxcbWFya2V0aW5nXFxwcm9tb3Rpb25zXFxhZGQtcHJvbW90aW9uXFxhZGQtcHJvbW90aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBZTtFQUNmLGtDQUFpQztFQUVqQztzQkFDaUI7RUFHakIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7MEJBQ3NCLEVBRXhCOztBQUNEO0VBQ0csY0FBYSxFQUNoQjs7QUFDQTtFQUNHLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2xCOztBQUNBO0VBQ0csaUJBQWdCLEVBQ2xCOztBQUNGO0VBQ0ksY0FBYTtFQUNiLGFBQVksRUFFZjs7QUFDQTtFQUNJLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUdGO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFHRDtFQUVPLGFBQVk7RUFDWixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDJCQUEwQjtFQUcxQixxQ0FBbUM7RUFDbkMseUJBQXdCO0VBQ3hCLGNBQWE7RUFDYiwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLGNBQWE7RUFDYixjQUFhLEVBRW5CIiwiZmlsZSI6InNyYy9hcHAvbWFya2V0aW5nL3Byb21vdGlvbnMvYWRkLXByb21vdGlvbi9hZGQtcHJvbW90aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tdGl0bGV7XHJcbiAgICAgY29sb3I6ICAjNWRiMmZmO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuIFxyXG4gICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICAgcGFkZGluZzogOHB4IDA7Ki8gICAgXHJcbiAgICAgLy8gY29sb3I6ICAjN2UzNzk0O1xyXG4gICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzdlMzc5NDtcclxuICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbiBcclxuIH1cclxuIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIC5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiAudXBsb2FkSW1hZ2V7XHJcbiAgICBtYXJnaW4tbGVmdDogM2VtO1xyXG4gfVxyXG4uaW1hZ2VOYW1lY3Nze1xyXG4gICAgaGVpZ2h0OjE0MHB4IDtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIFxyXG59XHJcbiAubWFuZGF0b3J5e1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuIH1cclxuXHJcbiAuZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gIFxyXG4uYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmljb24xIFxyXG57XHJcbiAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcclxuICAgICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xyXG4gICAgLy8gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2FmYWZhZjtcclxuICAgICAgIGZvbnQ6IDQwMCAxNnB4LzEuNCdTb3VyY2UgQ29kZSBQcm8nO1xyXG4gICAgICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMDM2ODM7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICAgIFxyXG4gICAgICAgd2lkdGg6IDIwLjMzJTtcclxuICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAvL21hcmdpbjoxMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/marketing/promotions/add-promotion/add-promotion.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/marketing/promotions/add-promotion/add-promotion.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddPromotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPromotionComponent", function() { return AddPromotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_imageupload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/imageupload */ "./src/utilities/imageupload.ts");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










var AddPromotionComponent = /** @class */ (function () {
    function AddPromotionComponent(beyond, router, formBuilder, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.percentage = 0;
        this.imagePreview = "../assets/img/no-image.png";
        this.img = false;
        this.progressShow = false;
        this.progressHide = false;
        this.removeFlag = false;
        // endMin: any;
        // startMax: any;
        this.min = new Date();
        this.startMin = moment__WEBPACK_IMPORTED_MODULE_9__().format('YYYY-MM-DD');
        this.endMin = moment__WEBPACK_IMPORTED_MODULE_9__().format('YYYY-MM-DD');
        this.urls = [];
        this.imagePreviewDocument = "assets/img/no-image.png";
        this.galleryImages = [];
        this.filesToUpload = [];
        this.imageArray = [];
        this.progressShow1 = false;
        this.uploadFlag = false;
        this.progressHide1 = false;
        this.displyFlag = false;
        this.img1 = false;
        this.percentage1 = 0;
        this.arr = [];
        this.result = [];
        this.imageNameData = [];
        this.newArray = [];
        this.orginalArray = [];
        this.imageName = [];
        this.imageNames = [];
        this.imageValue = [];
    }
    AddPromotionComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.prozData = this.loginData.loginCode;
        this.loginEmailData = this.loginData.emailId;
        this.getPromotionCode(),
            this.listPromotionMarketingMediaType();
        this.getVendorList(),
            this.addPromotion = this.formBuilder.group({
                promotionCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                proId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                vendorName: [''],
                promotionName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                mode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                recurring: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                promotionFees: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                promotionValues: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                marketingMediaType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                totalTicket: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                promotionImage: [''],
                status: ['']
            });
    };
    // AUto Genrat
    AddPromotionComponent.prototype.getPromotionCode = function () {
        var _this = this;
        console.log("Promotion Code ");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + "/generatePromotionCode", options).subscribe(function (data) {
            var response = data.json();
            _this.promotionCode = response.promotionCode;
            console.log("Promotion Code " + _this.promotionCode);
        }, function (error) {
            _this.toastr.warning("Unable to connect to server");
        });
    };
    Object.defineProperty(AddPromotionComponent.prototype, "f", {
        // AUto Genrat
        get: function () {
            return this.addPromotion.controls;
        },
        enumerable: true,
        configurable: true
    });
    //Get vendor List Starts
    AddPromotionComponent.prototype.getVendorList = function () {
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
    AddPromotionComponent.prototype.onStartDateSelected = function (startDate) {
        this.endMin = startDate;
    };
    AddPromotionComponent.prototype.onEndDateSelected = function (endDate) {
        this.startMax = endDate;
    };
    AddPromotionComponent.prototype.cancel = function () {
        this.router.navigate(['/promotion/listPromotion']);
    };
    AddPromotionComponent.prototype.load = function () {
        this.router.navigate(['/promotion/loadToSocialMedia']);
    };
    AddPromotionComponent.prototype.onSubmit = function () {
        this.submitted = true;
        //if(this.submitted) return;
        if (!this.addPromotion.value.promotionName) {
            return;
        }
        else if (!this.addPromotion.value.startDate) {
            return;
        }
        else if (!this.addPromotion.value.endDate) {
            return;
        }
        else if (!this.addPromotion.value.marketingMediaType) {
            return;
        }
        else if (!this.addPromotion.value.description) {
            return;
        }
        else if (!this.addPromotion.value.promotionFees) {
            return;
        }
        else if (!this.addPromotion.value.promotionValues) {
            return;
        }
        else if (!this.addPromotion.value.mode) {
            return;
        }
        else if (!this.addPromotion.value.type) {
            return;
        }
        else if (!this.addPromotion.value.totalTicket) {
            return;
        }
        else if (!this.addPromotion.value.recurring) {
            return;
        }
        else {
            this.savePromotion();
        }
    };
    AddPromotionComponent.prototype.savePromotion = function () {
        var _this = this;
        if (this.filesToUpload.length > 0 && this.uploadFlag == false) {
            this.displyFlag = true;
            return false;
        }
        var addObj = {
            "promotionCode": this.promotionCode,
            "proId": this.prozData,
            "vendorName": '' + this.addPromotion.value.vendorName,
            "promotionName": this.addPromotion.value.promotionName,
            "startDate": '' + this.addPromotion.value.startDate,
            "endDate": '' + this.addPromotion.value.endDate,
            "type": '' + this.addPromotion.value.type,
            "mode": '' + this.addPromotion.value.mode,
            "recurring": '' + this.addPromotion.value.recurring,
            "promotionFees": '' + this.addPromotion.value.promotionFees,
            "promotionValues": '' + this.addPromotion.value.promotionValues,
            "marketingMediaType": '' + this.addPromotion.value.marketingMediaType,
            "totalTicket": '' + this.addPromotion.value.totalTicket,
            "description": '' + this.addPromotion.value.description,
            "promotionImage": this.imageArray,
            "status": '' + this.addPromotion.value.status,
            "createdBy": this.loginData.emailId
        };
        console.log("ADD OBJ" + JSON.stringify(addObj));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/addPromotions', addObj)
            .subscribe(function (data) {
            var promotionData = data.json();
            console.log("customerData" + JSON.stringify(promotionData));
            if (promotionData.status == 200) {
                _this.router.navigate(['/promotion/listPromotion']);
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    AddPromotionComponent.prototype.onSelectFile = function (fileInput) {
        var _this = this;
        // this.arr = []
        this.imageArray = [];
        this.progressHide1 = false;
        // console.log("fileInput.target.files" + fileInput.target.files)
        // console.log("Array checking" + fileInput.target.files.length)
        if (fileInput.target.files.length == 1) {
            this.filesToUpload.push(fileInput.target.files[0]);
            this.chosseTypecount = this.filesToUpload.length;
        }
        else {
            for (var i = 0; i < fileInput.target.files.length; i++) {
                this.filesToUpload.push(fileInput.target.files[i]);
                console.log("this.filesTOUPLOAD" + JSON.stringify(this.filesToUpload.length));
                this.chosseTypecount = this.filesToUpload.length;
                this.fileName = "files";
                console.log("this.chosseTypecount" + this.fileName);
            }
        }
        var filesAmount = fileInput.target.files.length;
        for (var i_1 = 0; i_1 < filesAmount; i_1++) {
            var reader = new FileReader();
            reader.onload = function (fileInput) {
                _this.urls.push(fileInput.target.result);
                _this.arr.push({ name: fileInput.target.result });
                _this.imageuploadstatus = true;
            };
            reader.readAsDataURL(fileInput.target.files[i_1]);
        }
        // this.uploadData()
    };
    AddPromotionComponent.prototype.uploadData = function () {
        var _this = this;
        var files = this.filesToUpload;
        this.formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            this.formData.append("fileImage", files[i]);
        }
        console.log("ddd" + this.formData);
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/multiData', this.formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) {
            for (var i = 0; i < files.imagePath.length; i++) {
                _this.newArray.push(files.imagePath[i]);
            }
            var uniqueArray = Array.from(new Set(_this.newArray));
            _this.imageNames = Object.keys(uniqueArray).map(function (key) { return ({ type: key, image: uniqueArray[key] }); });
            _this.arr = Object.keys(uniqueArray).map(function (key) { return ({ type: key, name: _global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + "/" + uniqueArray[key] }); });
        });
    };
    AddPromotionComponent.prototype.removeSelectedFile = function (i) {
        this.arr.splice(i, 1);
        this.imageArray.splice(i, 1);
        this.filesToUpload.splice(i, 1);
    };
    AddPromotionComponent.prototype.upload = function () {
        var _this = this;
        console.log("upload is calling");
        var files = this.filesToUpload;
        console.log("files.lenght" + files);
        this.formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            this.formData.append("fileImage", files[i]);
        }
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/multiData', this.formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) {
            _this.imageArray = [];
            for (var i = 0; i < files.imagePath.length; i++) {
                _this.imageArray.push(files.imagePath[i]);
            }
            _this.uploadFlag = true;
            _this.displyFlag = false;
            _this.progressHide1 = true;
            _this.progressShow1 = false;
            if (_this.percentage1 === 100) {
                _this.progressHide1 = false;
                _this.progressShow1 = true;
                _this.img1 = false;
            }
        });
    };
    // LIST Promotion Marketing Media STARTS
    AddPromotionComponent.prototype.listPromotionMarketingMediaType = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http
            .get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + "/getSourceType/" + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var marketingMediaType = data.json();
            if (marketingMediaType.status == 200) {
                console.log("Promotion Marketing Media" + JSON.stringify(marketingMediaType));
                _this.promotionMarketingMediaType = marketingMediaType.response;
                console.log("list" + JSON.stringify(_this.promotionMarketingMediaType));
                // return false;
            }
            else {
            }
        });
        // , error => {
        // //  this.toastr.warning('Unable to connect to server');
        // })
    };
    //LIST Promotion Marketing Media ENDS
    AddPromotionComponent.prototype.sendEmails = function () {
        var _this = this;
        console.log("Promotion Code ");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        var emailSendObj = {
            emailSubscription: 'YES',
            proId: this.loginData.loginCode,
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + "/sendCustomerEmails", emailSendObj, options).subscribe(function (data) {
            var response = data.json();
        }, function (error) {
            _this.toastr.warning("Unable to connect to server");
        });
    };
    AddPromotionComponent.prototype.list = function () {
        this.router.navigate(['/promotion/listPromotion']);
    };
    AddPromotionComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageUpload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddPromotionComponent.prototype, "imageUploadVariable", void 0);
    AddPromotionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"], _utilities_imageupload__WEBPACK_IMPORTED_MODULE_4__["ImageUpload"]],
            selector: 'app-add-promotion',
            template: __webpack_require__(/*! ./add-promotion.component.html */ "./src/app/marketing/promotions/add-promotion/add-promotion.component.html"),
            styles: [__webpack_require__(/*! ./add-promotion.component.scss */ "./src/app/marketing/promotions/add-promotion/add-promotion.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], AddPromotionComponent);
    return AddPromotionComponent;
}());



/***/ }),

/***/ "./src/app/marketing/promotions/edit-promotion/edit-promotion.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/marketing/promotions/edit-promotion/edit-promotion.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n     <!-- Page Breadcrumb -->\r\n     <div class=\"page-breadcrumbs\">\r\n          <ul class=\"breadcrumb\">\r\n               <li>\r\n                    <i class=\"fa fa-home\"></i>\r\n                    Home\r\n               </li>\r\n               <li> Promotions</li>\r\n               <li> List of Promotions</li>\r\n               <li>View Promotion</li>\r\n               <li class=\"active\">Edit Promotion</li>\r\n          </ul>\r\n     </div>\r\n     <!-- /Page Breadcrumb -->\r\n\r\n     <!-- Page Header -->\r\n     <div class=\"page-header position-relative\">\r\n          <div class=\"header-title\">\r\n               <h1>\r\n                    Edit Promotion\r\n                    <!-- <span style=\"color: red;\">INPROGRESS</span> -->\r\n               </h1>\r\n          </div>\r\n     </div>\r\n     <!-- /Page Header -->\r\n     <!-- Page Body -->\r\n     <div class=\"page-body\">\r\n          <div class=\"row\">\r\n               <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered \">\r\n                         <div class=\"header gray\">\r\n                              Edit Promotion\r\n                         </div>\r\n                         <div id=\"registration-form\">\r\n                              <form [formGroup]=\"editPromotion\" (ngSubmit)=\"onSubmit()\">\r\n                                   <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                             <div class=\"row\">\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <label for=\"Status\">\r\n                                                            <b>Status</b>\r\n                                                       </label>\r\n\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-9\">\r\n                                                       <div class=\"checkbox\">\r\n                                                            <label>\r\n\r\n                                                                 <input class=\"checkbox\" type=\"checkbox\"\r\n                                                                      class=\"colored-success\" [(ngModel)]=\"chooseStatus\"\r\n                                                                      [ngModelOptions]=\"{standalone: true}\"\r\n                                                                      (change)=\"status(chooseStatus)\">\r\n                                                                 <span class=\"text\">Select the checkbox to change the\r\n                                                                      status to INACTIVE</span>\r\n                                                            </label>\r\n                                                       </div>\r\n                                                  </div>\r\n                                             </div>\r\n                                             <!-- Row 1 -->\r\n                                             <div class=\"row\">\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <label for=\"promotionCodeLbl\">\r\n                                                                 <b>Promotion Code </b>\r\n                                                            </label>\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                                 <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                      value=\"{{this.promoCode}}\" readonly>\r\n                                                            </span>\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <label for=\"promotionNameLbl\">\r\n                                                                 <b>Promotion Name <span class=\"mandatory\">*</span></b>\r\n                                                            </label>\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                                 <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                      formControlName=\"promotionName\"\r\n                                                                      [ngClass]=\"{ 'is-invalid': submitted && f.promotionName.errors }\">\r\n                                                            </span>\r\n                                                            <div *ngIf=\"submitted && f.promotionName.errors\"\r\n                                                                 class=\"invalid-feedback\">\r\n                                                                 <div *ngIf=\"f.promotionName.errors.required\">\r\n                                                                      <p style=\"color: red; font-size: 11px\">\r\n                                                                           Enter Promotion Name</p>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                       </div>\r\n                                                  </div>\r\n                                             </div>\r\n                                             <!-- /Row 1 -->\r\n                                             <!-- Row 2 -->\r\n                                             <div class=\"row\">\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <label for=\"vendorNameLbl\">\r\n                                                                 <b>Vendor Name</b>\r\n                                                            </label>\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                                 <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                      formControlName=\"vendorName\"\r\n                                                                      data-bv-field=\"row-title\"\r\n                                                                      [ngClass]=\"{ 'is-invalid': submitted && f.vendorName.errors }\">\r\n                                                                      <option value=\"\">Select\r\n                                                                      </option>\r\n                                                                      <option *ngFor=\"let data of vendorList\"\r\n                                                                           value={{data.vendorName}}>\r\n                                                                           {{data.vendorName}}\r\n                                                                      </option>\r\n                                                                 </select>\r\n\r\n                                                            </span>\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <label for=\"typeOrCategoryLbl\">\r\n                                                                 <b>Marketing Media Type<span\r\n                                                                           class=\"mandatory\">*</span></b>\r\n                                                            </label>\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                                 <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                      formControlName=\"marketingMediaType\"\r\n                                                                      data-bv-field=\"row-title\"\r\n                                                                      [ngClass]=\"{ 'is-invalid': submitted && f.marketingMediaType.errors }\">\r\n                                                                      <option value=\"\">Select\r\n                                                                      </option>\r\n                                                                      <option\r\n                                                                           *ngFor=\"let data of promotionMarketingMediaType\"\r\n                                                                           value={{data.sourceType}}>\r\n                                                                           {{data.sourceType}}\r\n                                                                      </option>\r\n                                                                 </select>\r\n                                                                 <div *ngIf=\"submitted && f.marketingMediaType.errors\"\r\n                                                                      class=\"invalid-feedback\">\r\n                                                                      <div *ngIf=\"f.marketingMediaType.errors.required\">\r\n                                                                           <p style=\"color: red; font-size: 11px\">\r\n                                                                                Select Marketing\r\n                                                                                Media Type</p>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                            </span>\r\n                                                       </div>\r\n                                                  </div>\r\n\r\n\r\n                                             </div>\r\n                                             <!-- /Row 2 -->\r\n                                             <!-- Row 3-->\r\n\r\n\r\n                                             <div class=\"row\">\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <label for=\"startDateLbl\">\r\n                                                                 <b>Start Date<span class=\"mandatory\">*</span></b>\r\n                                                            </label>\r\n                                                       </div>\r\n                                                  </div>\r\n\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                                 <input type=\"date\" class=\"form-control\"\r\n                                                                      min=\"{{ startMin }}\" [max]=\"startMax\"\r\n                                                                      placeholder=\"\" formControlName=\"startDate\"\r\n                                                                      (change)=\"onStartDateSelected($event.target.value)\"\r\n                                                                      onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\" />\r\n                                                            </span>\r\n                                                            <div *ngIf=\"submitted && f.startDate.errors\"\r\n                                                                 class=\"invalid-feedback\">\r\n                                                                 <div *ngIf=\"f.startDate.errors.required\">\r\n                                                                      <p style=\"color: red; font-size: 11px\">\r\n                                                                           Enter Start Date</p>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <label for=\"endDateLbl\">\r\n                                                                 <b>End Date<span class=\"mandatory\">*</span></b>\r\n                                                            </label>\r\n                                                       </div>\r\n                                                  </div>\r\n\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                                 <input type=\"date\" [min]=\"endMin\" class=\"form-control\"\r\n                                                                      placeholder=\"\" formControlName=\"endDate\" (change)=\"\r\n                                                                           onEndDateSelected(\r\n                                                                             $event.target.value\r\n                                                                           )\"\r\n                                                                      onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\" />\r\n\r\n                                                            </span>\r\n                                                            <div *ngIf=\"submitted && f.endDate.errors\"\r\n                                                                 class=\"invalid-feedback\">\r\n                                                                 <div *ngIf=\"f.endDate.errors.required\">\r\n                                                                      <p style=\"color: red; font-size: 11px\">\r\n                                                                           Enter End Date</p>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                       </div>\r\n                                                  </div>\r\n                                             </div>\r\n                                             <!-- /Row 3 -->\r\n                                             <!-- Row 4 -->\r\n                                             <div class=\"row\">\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <label for=\"emailLbl\">\r\n                                                                 <b>Recurring<span class=\"mandatory\">*</span>\r\n                                                                 </b>\r\n                                                            </label>\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                                 <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                      formControlName=\"recurring\"\r\n                                                                      [ngClass]=\"{ 'is-invalid': submitted && f.recurring.errors}\">\r\n                                                                      <option value=\"\">Select\r\n                                                                      </option>\r\n                                                                      <option value=\"Per Click\">\r\n                                                                           Per Click\r\n                                                                      </option>\r\n                                                                      <option value=\"Onetime\">\r\n                                                                           Onetime\r\n                                                                      </option>\r\n                                                                      <option value=\"Monthly\">\r\n                                                                           Monthly\r\n                                                                      </option>\r\n                                                                      <option value=\"Quaterly\">\r\n                                                                           Quaterly\r\n                                                                      </option>\r\n                                                                      <option value=\"Yearly\">Yearly\r\n                                                                      </option>\r\n                                                                 </select>\r\n                                                                 <div *ngIf=\"submitted && f.recurring.errors\"\r\n                                                                      class=\"invalid-feedback\">\r\n                                                                      <div *ngIf=\"f.recurring.errors.required\">\r\n                                                                           <p style=\"color: red; font-size: 11px\">\r\n                                                                                Select Recurring</p>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                            </span>\r\n                                                       </div>\r\n                                                  </div>\r\n\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <label for=\"termsLbl\">\r\n                                                                 <b>Promotion Fees<span class=\"mandatory\">*</span></b>\r\n                                                            </label>\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                 formControlName=\"promotionFees\"\r\n                                                                 [ngClass]=\"{ 'is-invalid': submitted && f.promotionFees.errors}\">\r\n                                                            <div *ngIf=\"submitted && f.promotionFees.errors\"\r\n                                                                 class=\"invalid-feedback\">\r\n                                                                 <div *ngIf=\"f.promotionFees.errors.required\">\r\n                                                                      <p style=\"color: red; font-size: 11px\">\r\n                                                                           Enter Promotion Fees</p>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                       </div>\r\n\r\n                                                  </div>\r\n\r\n                                             </div>\r\n                                             <!-- /Row 4 -->\r\n                                             <!-- Row 5 -->\r\n                                             <div class=\"row\">\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <label for=\"promotionValuesLbl\">\r\n                                                                 <b>Promotion Values<span class=\"mandatory\">*</span>\r\n                                                                 </b>\r\n                                                            </label>\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                                 <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                      formControlName=\"promotionValues\"\r\n                                                                      [ngClass]=\"{ 'is-invalid': submitted && f.promotionValues.errors}\">\r\n                                                                 <div *ngIf=\"submitted && f.promotionValues.errors\"\r\n                                                                      class=\"invalid-feedback\">\r\n                                                                      <div *ngIf=\"f.promotionValues.errors.required\">\r\n                                                                           <p style=\"color: red; font-size: 11px\">\r\n                                                                                Enter Promotion\r\n                                                                                Value</p>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                            </span>\r\n\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-2\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                 formControlName=\"type\" data-bv-field=\"row-title\"\r\n                                                                 [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\">\r\n                                                                 <option value=\"\"> Select\r\n                                                                 </option>\r\n                                                                 <option value=\"$\"> $\r\n                                                                 </option>\r\n                                                                 <option value=\"%\"> %\r\n                                                                 </option>\r\n                                                            </select>\r\n                                                            <div *ngIf=\"submitted && f.type.errors\"\r\n                                                                 class=\"invalid-feedback\">\r\n                                                                 <div *ngIf=\"f.type.errors.required\">\r\n                                                                      <p style=\"color: red; font-size: 11px\">\r\n                                                                           Select Type</p>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-2\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <select type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                 formControlName=\"mode\" data-bv-field=\"row-title\"\r\n                                                                 [ngClass]=\"{ 'is-invalid': submitted && f.mode.errors }\">\r\n                                                                 <option value=\"\">Select\r\n                                                                 </option>\r\n                                                                 <option value=\"Off\">Off\r\n                                                                 </option>\r\n                                                                 <option value=\"For\">For\r\n                                                                 </option>\r\n\r\n                                                            </select>\r\n                                                            <div *ngIf=\"submitted && f.mode.errors\"\r\n                                                                 class=\"invalid-feedback\">\r\n                                                                 <div *ngIf=\"f.mode.errors.required\">\r\n                                                                      <p style=\"color: red; font-size: 11px\">\r\n                                                                           Select Mode</p>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-2\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <input type=\"text\" class=\"form-control\"\r\n                                                                 placeholder=\"Total Ticket\"\r\n                                                                 formControlName=\"totalTicket\">\r\n                                                            <div *ngIf=\" submitted && f.totalTicket.errors\"\r\n                                                                 class=\"invalid-feedback\">\r\n                                                                 <div *ngIf=\"f.totalTicket.errors.required\">\r\n                                                                      <p style=\"color: red; font-size: 11px\">\r\n                                                                           Enter Total Ticket</p>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                       </div>\r\n                                                  </div>\r\n\r\n                                             </div>\r\n                                             <!-- /Row 5 -->\r\n\r\n                                             <!--Row 6-->\r\n                                             <div class=\"row\">\r\n                                                  <div class=\"col-sm-3\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <label for=\"descriptionLbl\">\r\n                                                                 <b>Description<span class=\"mandatory\">*</span>\r\n                                                                 </b>\r\n                                                            </label>\r\n                                                       </div>\r\n                                                  </div>\r\n                                                  <div class=\"col-sm-6\">\r\n                                                       <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                                 <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                      formControlName=\"description\">\r\n                                                                 <div *ngIf=\"submitted && f.description.errors\"\r\n                                                                      class=\"invalid-feedback\">\r\n                                                                      <div *ngIf=\"f.description.errors.required\">\r\n                                                                           <p style=\"color: red; font-size: 11px\">\r\n                                                                                Enter Description\r\n                                                                           </p>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                            </span>\r\n                                                       </div>\r\n                                                  </div>\r\n\r\n\r\n                                             </div>\r\n                                             <!--/Row 6-->\r\n                                             <!--Row 7-->\r\n\r\n                                             <!--/Row 7-->\r\n\r\n\r\n                                        </div>\r\n                                   </div>\r\n\r\n\r\n                                   <div class=\"row\">\r\n                                        <div class=\"col-sm-2\">\r\n                                             <div class=\"form-group\">\r\n                                                  <input type=\"file\" id=\"file-upload\" (change)=\"onSelectFile($event)\"\r\n                                                       class=\"uploadImage\" [(ngModel)]=\"filesToUpload.length\"\r\n                                                       [ngModelOptions]=\"{standalone: true}\" multiple>\r\n\r\n                                                  <label for=\"file-upload\" class=\"custom-file-upload\">\r\n                                                       <i class=\"fa fa-file-image-o\"></i>\r\n                                                       Choose Files\r\n                                                  </label>\r\n                                             </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-2\">\r\n\r\n                                        </div>\r\n                                   </div>\r\n\r\n                                   <div class=\"row\">\r\n                                        <div class=\"col-sm-12\">\r\n                                             <div class=\"form-group\">\r\n                                                  <div *ngFor=\"let x of arr;let i=index\">\r\n                                                       <br>\r\n                                                       <figure class=\"imageNamecss\" class=\"icon1\">\r\n                                                            {{imageNames[i]?.image}}<i (click)=\"removeSelectedFile(i)\"\r\n                                                                 style=\"float:right;margin-top:0px;color: red\"\r\n                                                                 class=\"fa fa-times\"></i>\r\n                                                            <img src=\"{{x.name}}\" height=\"100px\" width=\"120px\" readonly>\r\n\r\n                                                       </figure>\r\n                                                       &nbsp;&nbsp;&nbsp;&nbsp;\r\n                                                  </div>\r\n                                                  <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                                                       (click)=\"upload()\">\r\n                                                       <i class=\"fa fa-upload\"></i>\r\n                                                       Upload\r\n                                                  </button>\r\n                                                  <div *ngIf=\"displyFlag == true\">\r\n                                                       <p style=\"color: red; font-size: 11px\">\r\n                                                            Please upload the files\r\n                                                       </p>\r\n                                                  </div>\r\n                                                  <br>\r\n                                                  <br>\r\n                                                  <div *ngIf=\"progressShow1\" class=\"progress-bar1 green stripes\">\r\n                                                       <span [style.width.%]=\"percentage1\">\r\n                                                            <p style=\"text-align: center;color:black;font-size:18px;\">\r\n                                                                 {{percentage1}}%</p>\r\n                                                       </span>\r\n                                                  </div>\r\n                                                  <div *ngIf=\"progressHide1\" class=\"alert alert-block alert-success\"\r\n                                                       style=\"height:4px;\">\r\n                                                       <h4 class=\"alert-heading\"\r\n                                                            style=\"margin-top:-6px;text-align:center;\">\r\n                                                            Images\r\n                                                            Uploaded\r\n                                                            Successfully</h4>\r\n                                                  </div>\r\n                                             </div>\r\n                                        </div>\r\n                                   </div>\r\n                         </div>\r\n                    </div>\r\n                    <!-- Bottom Buttons -->\r\n                    <div class=\"row\">\r\n                         <div class=\"col-lg-12\">\r\n                              <div class=\"col-lg-4\">\r\n\r\n                              </div>\r\n                              <div class=\"col-lg-4\">\r\n                                   <button type=\"submit\" class=\"btn btn-gray\"><i class=\"fa fa-check\"></i>\r\n                                        Update</button>\r\n\r\n                              </div>\r\n                              <div class=\"col-lg-4 button-center\">\r\n                                   <button type=\"button\" class=\"btn btn-blue\" (click)=\"cancel()\"><i\r\n                                             class=\"fa fa-times\"></i>\r\n                                        Cancel</button>\r\n                              </div>\r\n\r\n                         </div>\r\n                    </div>\r\n                    <!-- /Bottom Buttons -->\r\n\r\n\r\n                    </form>\r\n               </div>\r\n          </div>\r\n     </div>\r\n</div>\r\n</div>\r\n<!-- /Page Body -->\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- /Page Container -->\r\n\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/marketing/promotions/edit-promotion/edit-promotion.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/marketing/promotions/edit-promotion/edit-promotion.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.icon1 {\n  height: auto;\n  width: 120px;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  font: 400 16px/1.4 \"Source Code Pro\";\n  font-variant: small-caps;\n  padding: 10px;\n  border: 1px solid #103683;\n  border-radius: 10px; }\n\ninput[type=\"file\"] {\n  display: none; }\n\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer; }\n\n.uploadImage {\n  margin-left: 3em; }\n\n.imageNamecss {\n  height: 140px;\n  width: 220px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2V0aW5nL3Byb21vdGlvbnMvZWRpdC1wcm9tb3Rpb24vRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXG1hcmtldGluZ1xccHJvbW90aW9uc1xcZWRpdC1wcm9tb3Rpb25cXGVkaXQtcHJvbW90aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBZTtFQUNmLGtDQUFpQztFQUVqQztzQkFDaUI7RUFHakIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7MEJBQ3NCLEVBRXhCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBR0Y7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBRU8sYUFBWTtFQUNaLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsMkJBQTBCO0VBQzFCLG1CQUFrQjtFQUVsQixxQ0FBbUM7RUFDbkMseUJBQXdCO0VBQ3hCLGNBQWE7RUFDYiwwQkFBeUI7RUFDekIsb0JBQW1CLEVBQ3pCOztBQUVEO0VBQ0ksY0FBYSxFQUNoQjs7QUFDQTtFQUNHLHVCQUFzQjtFQUN0QixzQkFBcUI7RUFDckIsa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksaUJBQWdCLEVBQ2xCOztBQUNGO0VBQ0ksY0FBYTtFQUNiLGFBQVksRUFFZiIsImZpbGUiOiJzcmMvYXBwL21hcmtldGluZy9wcm9tb3Rpb25zL2VkaXQtcHJvbW90aW9uL2VkaXQtcHJvbW90aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tdGl0bGV7XHJcbiAgICAgY29sb3I6ICAjNWRiMmZmO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuIFxyXG4gICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICAgcGFkZGluZzogOHB4IDA7Ki8gICAgXHJcbiAgICAgLy8gY29sb3I6ICAjN2UzNzk0O1xyXG4gICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzdlMzc5NDtcclxuICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbiBcclxuIH1cclxuIFxyXG4gLm1hbmRhdG9yeXtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiB9XHJcblxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuICBcclxuLmJ0bi1ncmF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb24xIFxyXG57XHJcbiAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcclxuICAgICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xyXG4gICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2FmYWZhZjtcclxuICAgICAgIGZvbnQ6IDQwMCAxNnB4LzEuNCdTb3VyY2UgQ29kZSBQcm8nO1xyXG4gICAgICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMDM2ODM7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiAuY3VzdG9tLWZpbGUtdXBsb2FkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udXBsb2FkSW1hZ2V7XHJcbiAgICBtYXJnaW4tbGVmdDogM2VtO1xyXG4gfVxyXG4uaW1hZ2VOYW1lY3Nze1xyXG4gICAgaGVpZ2h0OjE0MHB4IDtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/marketing/promotions/edit-promotion/edit-promotion.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/marketing/promotions/edit-promotion/edit-promotion.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditPromotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPromotionComponent", function() { return EditPromotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_imageupload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/imageupload */ "./src/utilities/imageupload.ts");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










var EditPromotionComponent = /** @class */ (function () {
    function EditPromotionComponent(beyond, router, formBuilder, route, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.percentage = 0;
        this.imagePreview = "../../assets/img/no-image.png";
        this.img = false;
        this.progressShow = false;
        this.progressHide = false;
        this.submitted = false;
        this.min = new Date();
        this.startMin = moment__WEBPACK_IMPORTED_MODULE_9__().format('YYYY-MM-DD');
        this.endMin = moment__WEBPACK_IMPORTED_MODULE_9__().format('YYYY-MM-DD');
        this.urls = [];
        this.imagePreviewDocument = "assets/img/no-image.png";
        this.galleryImages = [];
        this.filesToUpload = [];
        this.imageArray = [];
        this.progressShow1 = false;
        this.progressHide1 = false;
        this.img1 = false;
        this.percentage1 = 0;
        this.arr = [];
        this.chooseStatus = true;
        this.result = [];
        this.imageNameData = [];
        this.newArray = [];
        this.orginalArray = [];
        this.imageName = [];
        this.imageNames = [];
        this.imageValue = [];
        this.displyFlag = false;
        this.uploadFlag = false;
    }
    EditPromotionComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.promoCode = this.route.snapshot.params['promotionCode'];
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.prozData = this.loginData.loginCode;
        this.loginEmailData = this.loginData.emailId;
        this.getVendorList(),
            this.listPromotionMarketingMediaType(),
            this.viewPromotions();
        this.editPromotion = this.formBuilder.group({
            promotionCode: [''],
            proId: [''],
            vendorName: [''],
            promotionName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            mode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            recurring: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            promotionFees: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            promotionValues: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            marketingMediaType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            totalTicket: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            promotionImage: [''],
            status: ['']
        });
    };
    EditPromotionComponent.prototype.cancel = function () {
        this.router.navigate(['/promotion/listPromotion']);
    };
    //Get vendor List Starts
    EditPromotionComponent.prototype.getVendorList = function () {
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
    // LIST Promotion Marketing Media STARTS
    EditPromotionComponent.prototype.listPromotionMarketingMediaType = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http
            .get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + "/getSourceType/" + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var marketingMediaType = data.json();
            if (marketingMediaType.status == 200) {
                console.log("Promotion Marketing Media" + JSON.stringify(marketingMediaType));
                _this.promotionMarketingMediaType = marketingMediaType.response;
                console.log("list" + JSON.stringify(_this.promotionMarketingMediaType));
                // return false;
            }
            else {
            }
        });
        // , error => {
        // //  this.toastr.warning('Unable to connect to server');
        // })
    };
    //LIST Promotion Marketing Media ENDS
    EditPromotionComponent.prototype.onStartDateSelected = function (startDate) {
        this.endMin = startDate;
    };
    EditPromotionComponent.prototype.onEndDateSelected = function (endDate) {
        this.startMax = endDate;
    };
    Object.defineProperty(EditPromotionComponent.prototype, "f", {
        get: function () {
            return this.editPromotion.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditPromotionComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (!this.editPromotion.value.promotionName) {
            return;
        }
        else if (!this.editPromotion.value.startDate) {
            return;
        }
        else if (!this.editPromotion.value.endDate) {
            return;
        }
        else if (!this.editPromotion.value.marketingMediaType) {
            return;
        }
        else if (!this.editPromotion.value.description) {
            return;
        }
        else if (!this.editPromotion.value.promotionFees) {
            return;
        }
        else if (!this.editPromotion.value.promotionValues) {
            return;
        }
        else if (!this.editPromotion.value.mode) {
            return;
        }
        else if (!this.editPromotion.value.type) {
            return;
        }
        else if (!this.editPromotion.value.totalTicket) {
            return;
        }
        else if (!this.editPromotion.value.recurring) {
            return;
        }
        else {
            this.updatePromotion();
        }
    };
    EditPromotionComponent.prototype.updatePromotion = function () {
        var _this = this;
        if (this.filesToUpload.length > 0 && this.uploadFlag == false) {
            this.displyFlag = true;
            return false;
        }
        var editObj = {
            "promotionCode": this.promoCode,
            "proId": this.prozData,
            "vendorName": '' + this.editPromotion.value.vendorName,
            "promotionName": '' + this.editPromotion.value.promotionName,
            "startDate": '' + this.editPromotion.value.startDate,
            "endDate": '' + this.editPromotion.value.endDate,
            "type": '' + this.editPromotion.value.type,
            "mode": '' + this.editPromotion.value.mode,
            "recurring": '' + this.editPromotion.value.recurring,
            "promotionFees": '' + this.editPromotion.value.promotionFees,
            "promotionValues": '' + this.editPromotion.value.promotionValues,
            "marketingMediaType": '' + this.editPromotion.value.marketingMediaType,
            "totalTicket": '' + this.editPromotion.value.totalTicket,
            "description": '' + this.editPromotion.value.description,
            "promotionImage": this.imageArray,
            "status": this.editPromotion.value.status,
            "modifiedBy": this.loginEmailData
        };
        console.log("Edit OBJ" + JSON.stringify(editObj));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/updatePromotions', editObj)
            .subscribe(function (data) {
            var promotionData = data.json();
            console.log("edit Promotion Data" + JSON.stringify(promotionData));
            if (promotionData.status == 200) {
                _this.router.navigate(['/promotion/listPromotion']);
                if (_this.editPromotion.value.promotionImage == '' || _this.editPromotion.value.promotionImage == null || _this.editPromotion.value.promotionImage == "undefined") {
                    _this.imagePreview = "../../assets/img/no-image.png";
                }
                else {
                    for (var i = 0; i < _this.urls.length; i++) {
                        _this.imagePreview = _global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + "/" + _this.urls[i];
                        _this.arr.push({ name: _this.imagePreview });
                        _this.arr.push(_this.urls[i]);
                        _this.imageArray.push(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + "/" + _this.urls[i]);
                        console.log("THSISSSSS" + JSON.stringify(_this.arr));
                        //  this.imageArray.push(Global.url + files.imagePath[i])
                    }
                }
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    // start view Vendor
    EditPromotionComponent.prototype.viewPromotions = function () {
        var _this = this;
        //this.spinner.show()
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/viewPromotion/' + this.promoCode, options)
            .subscribe(function (data) {
            var promotion = data.json();
            if (promotion.status == 200) {
                // this.spinner.hide()
                _this.viewPromotionData = promotion.response[0];
                _this.viewPromotionData.status == 'ACTIVE' ? _this.editPromotion.enable() : _this.editPromotion.disable();
                console.log("Promotion Data", JSON.stringify(_this.viewPromotionData));
            }
            else {
            }
            _this.editPromotion = _this.formBuilder.group({
                "vendorName": [_this.viewPromotionData.vendorName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                "promotionName": [_this.viewPromotionData.promotionName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                "startDate": [_this.viewPromotionData.startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                "endDate": [_this.viewPromotionData.endDate, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                "type": [_this.viewPromotionData.type, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                "mode": [_this.viewPromotionData.mode, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                "recurring": [_this.viewPromotionData.recurring, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                "promotionFees": [_this.viewPromotionData.promotionFees, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                "promotionValues": [_this.viewPromotionData.promotionValues, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                "marketingMediaType": [_this.viewPromotionData.marketingMediaType, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                "totalTicket": [_this.viewPromotionData.totalTicket, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                "description": [_this.viewPromotionData.description, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                "status": [_this.viewPromotionData.status, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            });
            _this.chooseStatus = _this.viewPromotionData.status == 'ACTIVE' ? false : true;
            _this.urls = _this.viewPromotionData.promotionImage.split(',');
            if (_this.viewPromotionData.promotionImage == "" || _this.viewPromotionData.promotionImage == null || _this.viewPromotionData.promotionImage == undefined || _this.viewPromotionData.promotionImage == "undefined") {
                _this.imagePreview = '../../assets/img/no-image.png';
                var index = _this.imagePreview.indexOf(_this.imagePreview);
                _this.removeSelectedFile(index);
            }
            else {
                for (var i = 0; i < _this.urls.length; i++) {
                    _this.imageArray.push(_this.urls[i]);
                    _this.imageNames.push({ image: _this.urls[i] });
                    _this.imagePreview = _global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + "/" + _this.urls[i];
                    _this.arr.push({ name: _this.imagePreview });
                }
                _this.fileName = _this.imageArray.length;
                console.log('The execution is fileName ' + JSON.stringify(_this.fileName));
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    // end view Vendor
    EditPromotionComponent.prototype.load = function () {
        this.router.navigate(['/promotion/loadToSocialMedia']);
    };
    EditPromotionComponent.prototype.onSelectFile = function (fileInput) {
        var _this = this;
        // this.arr = []
        //this.imageArray = []
        this.progressHide1 = false;
        console.log("fileInput.target.files" + fileInput.target.files);
        console.log("Array checking" + fileInput.target.files.length);
        if (fileInput.target.files.length == 1) {
            this.filesToUpload.push(fileInput.target.files[0]);
            this.chosseTypecount = this.filesToUpload.length;
        }
        else {
            for (var i = 0; i < fileInput.target.files.length; i++) {
                this.filesToUpload.push(fileInput.target.files[i]);
                console.log("this.filesTOUPLOAD" + JSON.stringify(this.filesToUpload.length));
                this.chosseTypecount = this.filesToUpload.length;
                this.fileName = "files";
                console.log("this.chosseTypecount" + this.fileName);
            }
        }
        var filesAmount = fileInput.target.files.length;
        console.log("filesAmount" + filesAmount);
        for (var i_1 = 0; i_1 < filesAmount; i_1++) {
            var reader = new FileReader();
            reader.onload = function (fileInput) {
                console.log(fileInput.target.result);
                _this.urls.push(fileInput.target.result);
                _this.arr.push({ name: fileInput.target.result });
                // console.log("checking data" + this.urls.length)
                // console.log("array names" + JSON.stringify(this.arr))
                _this.imageuploadstatus = true;
            };
            console.log("array names" + JSON.stringify(this.arr));
            reader.readAsDataURL(fileInput.target.files[i_1]);
        }
        // this.uploadData()
    };
    EditPromotionComponent.prototype.removeSelectedFile = function (i) {
        this.arr.splice(i, 1);
        this.imageArray.splice(i, 1);
        this.filesToUpload.splice(i, 1);
        console.log(this.imageArray);
        // this.imageArray = []
        // for (var p = 0; p < this.arr.length; p++) {
        //   this.value = this.arr[p].name
        //   this.imageArray.push(this.arr[p].name.substring(25, 50))
        //  
        // }
    };
    EditPromotionComponent.prototype.removeDuplicates = function () {
        var _this = this;
        this.result.filter(function (value, index) { return _this.result.indexOf(value) === index; });
        var number = this.result.indexOf();
        console.log("IMAGEARRAY" + JSON.stringify(this.result.indexOf()));
        console.log("number" + number);
        if (number > -1) {
            this.result.splice(number, 1);
        }
        this.imageArray.push(this.result);
        console.log("imageArrayimageArray" + JSON.stringify(this.imageArray));
    };
    EditPromotionComponent.prototype.upload = function () {
        var _this = this;
        var files = this.filesToUpload;
        this.formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            this.formData.append("fileImage", files[i]);
        }
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/multiPromotionData', this.formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) {
            // this.imageArray = []
            for (var i = 0; i < files.imagePath.length; i++) {
                _this.imageArray.push(files.imagePath[i]);
                console.log("  this.imageArray" + JSON.stringify(_this.imageArray));
            }
            _this.uploadFlag = true;
            _this.displyFlag = false;
            _this.progressHide1 = true;
            _this.progressShow1 = false;
            if (_this.percentage1 === 100) {
                _this.progressHide1 = false;
                _this.progressShow1 = true;
                _this.img1 = false;
            }
        });
    };
    EditPromotionComponent.prototype.uploadData = function () {
        var _this = this;
        var files = this.filesToUpload;
        this.formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            this.formData.append("fileImage", files[i]);
        }
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/multiPromotionData', this.formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) {
            for (var i = 0; i < files.imagePath.length; i++) {
                _this.newArray.push(files.imagePath[i]);
            }
            var uniqueArray = Array.from(new Set(_this.newArray));
            _this.imageNames = Object.keys(uniqueArray).map(function (key) { return ({ type: key, image: uniqueArray[key] }); });
            _this.arr = Object.keys(uniqueArray).map(function (key) { return ({ type: key, name: _global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + "/" + uniqueArray[key] }); });
        });
    };
    /* Image Upload */
    EditPromotionComponent.prototype.status = function (chooseStatus) {
        if (chooseStatus == false) {
            this.editPromotion.enable();
            this.editPromotion.get('status').setValue('ACTIVE');
        }
        else if (chooseStatus == true) {
            this.editPromotion.disable();
            this.editPromotion.get('status').setValue('INACTIVE');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageUpload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditPromotionComponent.prototype, "imageUploadVariable", void 0);
    EditPromotionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"], _utilities_imageupload__WEBPACK_IMPORTED_MODULE_4__["ImageUpload"]],
            selector: 'app-edit-promotion',
            template: __webpack_require__(/*! ./edit-promotion.component.html */ "./src/app/marketing/promotions/edit-promotion/edit-promotion.component.html"),
            styles: [__webpack_require__(/*! ./edit-promotion.component.scss */ "./src/app/marketing/promotions/edit-promotion/edit-promotion.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], EditPromotionComponent);
    return EditPromotionComponent;
}());



/***/ }),

/***/ "./src/app/marketing/promotions/list-promotion/list-promotion.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/marketing/promotions/list-promotion/list-promotion.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        Home\r\n      </li>\r\n      <li> Promotions</li>\r\n      <li class=\"active\">List of Promotions</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        List of Promotions\r\n        <!-- <span style=\"color: red;\">INPROGRESS</span> -->\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n    <br />\r\n    <!-- Search By -->\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"widget\">\r\n          <div class=\"widget-header with-footer header gray\">\r\n            <span class=\"widget-caption\">Search Promotions By</span>\r\n          </div>\r\n          <form [formGroup]=\"searchPromotionValue\">\r\n            <div class=\"widget-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"searchByLbl\">\r\n                      <b>Search By</b>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <select class=\"form-control\" formControlName=\"selectBy\" [(ngModel)]=\"chooseSearchBy\"\r\n                      (ngModelChange)=\"promotionSelection(chooseSearchBy)\">\r\n                      <option value=\"All\">--Search By--</option>\r\n                      <option value=\"vendorId\"> ID</option>\r\n                      <option value=\"vendorName\">Promotion Name</option>\r\n                      <option value=\"accountNumber\">Account</option>\r\n                      <option value=\"Address\">Address</option>\r\n                      <option value=\"phoneNumber\">Phone</option>\r\n                      <option value=\"repEmailAddress\">Email</option>\r\n                      <option value=\"status\">Status</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    &nbsp;&nbsp;&nbsp;&nbsp; <button type=\"submit\" class=\"btn btn-blue\"\r\n                      (click)=\"searchFunctionality()\"><i class=\"fa fa-search\"></i>&nbsp;\r\n                      Search</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button type=\"submit\" class=\"btn btn-gray\" (click)=\"reset()\"><i class=\"fa fa-repeat\"></i>&nbsp;\r\n                      Reset</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-15 col-md-15 col-sm-15 col-xs-15\">\r\n        <div class=\"widget\">\r\n          <div class=\"widget-header with-footer header gray\">\r\n            <span class=\"widget-caption\">Search Promotion By</span>\r\n          </div>\r\n          <form [formGroup]=\"searchPromotion\">\r\n            <div class=\"widget-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"fromDateLbl\">\r\n                      <b>From Date </b>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <!-- <input class=\"form-control date-picker\" type=\"date\" data-date-format=\"mm-dd-yyyy\"\r\n                      formControlName=\"startDate\"> -->\r\n                    <input type=\"date\" class=\"form-control\" [max]=\"startMax\" placeholder=\"\" formControlName=\"startDate\"\r\n                      (change)=\"onStartDateSelected($event.target.value)\"\r\n                      onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"toDateLbl\">\r\n                      <b>To Date </b>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <!-- <input class=\"form-control date-picker\" type=\"date\" data-date-format=\"mm-dd-yyyy\"\r\n                      formControlName=\"endDate\"> -->\r\n                    <input type=\"date\" [min]=\"endMin\" class=\"form-control\" placeholder=\"\" formControlName=\"endDate\"\r\n                      (change)=\"\r\n            onEndDateSelected(\r\n              $event.target.value\r\n            )\" onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"nameLbl\">\r\n                      <b>Status </b>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <select class=\"form-control\" formControlName=\"status\">\r\n                      <option value=\"All\">All</option>\r\n                      <option value=\"ACTIVE\">ACTIVE</option>\r\n                      <option value=\"INACTIVE\">INACTIVE</option>\r\n                      <!-- <option value=\"IN ACTIVE\">ACTIVE</option>\r\n                      <option value=\"DO NOT SERVE\">DO NOT SERVE</option> -->\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    &nbsp;&nbsp;&nbsp;&nbsp; <button type=\"submit\" class=\"btn btn-blue\" (click)=\"search()\"><i\r\n                        class=\"fa fa-search\"></i>&nbsp; Search</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button type=\"submit\" class=\"btn btn-danger shiny\" (click)=\"reset()\"><i\r\n                        class=\"fa fa-repeat\"></i>&nbsp;\r\n                      Reset</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /Search By -->\r\n\r\n    <!-- Add Promotion Button -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-blue\" (click)=\"addPromotion()\"><i class=\"fa fa-user-plus\"></i>&nbsp;\r\n            Add Promotion</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /Add Promotion Screen -->\r\n\r\n    <!-- List of Promotions - New -->\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"well with-header with-footer three-bordered\">\r\n          <div class=\"header gray\">\r\n            List of Promotions\r\n          </div>\r\n          <table class=\"table table-striped table-hover table-bordered\" *ngIf=\"promotionListResponse\">\r\n            <thead>\r\n              <tr>\r\n                <th style=\"width:5%;\">\r\n                  Promotion Code\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  Promotion Name\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  Vendor Name\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  Start Date\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  End Date\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  Discount Rate\r\n                </th>\r\n                <th style=\"width:5%;\" class=\"center\">\r\n                  Type\r\n                </th>\r\n                <th style=\"width:5%;\" class=\"center\">\r\n                  Cost Amount\r\n                </th>\r\n                <th style=\"width:5%;\" class=\"center\">\r\n                  # of Calls\r\n                </th>\r\n                <th style=\"width:5%;\" class=\"center\">\r\n                  Total Sales ($)\r\n                </th>\r\n                <th style=\"width:5%;\" class=\"center\">\r\n                  $ Per Call\r\n                </th>\r\n                <th style=\"width:5%;\" class=\"center\">\r\n                  Status\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n\r\n            <tbody>\r\n              <tr *ngFor=\"let data of promotionListDetails\">\r\n                <td><a (click)=\"viewPromotion(data)\">\r\n                    {{data.promotionCode}}</a></td>\r\n                <td>{{data.promotionName}}</td>\r\n                <td>{{data.vendorName}}</td>\r\n                <td>{{data.startDate | date: \"MM-dd-yyyy\"}}</td>\r\n                <td>{{data.endDate | date: \"MM-dd-yyyy\"}}</td>\r\n                <!-- <td>{{data.startDate | date:}}</td>\r\n                <td>{{data.endDate}}</td> -->\r\n                <td class=\"center \">{{data.promotionValues}}</td>\r\n                <td class=\"center \">{{data.type}}</td>\r\n                <td class=\"center \">1000</td>\r\n                <td class=\"center \">10</td>\r\n                <td class=\"center \">100</td>\r\n                <td class=\"center \">10</td>\r\n                <td class=\"center \">{{data.status}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div *ngIf=\"!promotionListResponse\">\r\n            <p>No Records Found</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /List of Promotions - New -->\r\n\r\n  </div>\r\n  <!-- /Page Body -->\r\n</div>"

/***/ }),

/***/ "./src/app/marketing/promotions/list-promotion/list-promotion.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/marketing/promotions/list-promotion/list-promotion.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2V0aW5nL3Byb21vdGlvbnMvbGlzdC1wcm9tb3Rpb24vRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXG1hcmtldGluZ1xccHJvbW90aW9uc1xcbGlzdC1wcm9tb3Rpb25cXGxpc3QtcHJvbW90aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7c0JBQ2lCO0VBR2pCLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCOzBCQUNzQixFQUV4Qjs7QUFFRDtFQUNHLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBR0Q7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM5QixvQ0FBb0MsRUFDdEMiLCJmaWxlIjoic3JjL2FwcC9tYXJrZXRpbmcvcHJvbW90aW9ucy9saXN0LXByb21vdGlvbi9saXN0LXByb21vdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmZvcm0tdGl0bGV7XHJcbiAgICAgY29sb3I6ICAjNWRiMmZmO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuIFxyXG4gICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICAgcGFkZGluZzogOHB4IDA7Ki8gICAgXHJcbiAgICAgLy8gY29sb3I6ICAjN2UzNzk0O1xyXG4gICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzdlMzc5NDtcclxuICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbiBcclxuIH1cclxuXHJcbiAuZ3JheXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnRocmVlLWJvcmRlcmVke1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/marketing/promotions/list-promotion/list-promotion.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/marketing/promotions/list-promotion/list-promotion.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListPromotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPromotionComponent", function() { return ListPromotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









var ListPromotionComponent = /** @class */ (function () {
    function ListPromotionComponent(beyond, router, formBuilder, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.min = new Date();
        this.startMin = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD');
        this.endMin = moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD');
    }
    ListPromotionComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.getPromotionList();
        this.proId = this.loginData.loginCode;
        this.searchPromotion = this.formBuilder.group({
            startDate: [null],
            endDate: [null],
            status: ['All']
        });
    };
    // Search Work Order Starts
    ListPromotionComponent.prototype.search = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        var obj = {
            "startDate": this.searchPromotion.value.startDate,
            "endDate": this.searchPromotion.value.endDate,
            "status": this.searchPromotion.value.status,
        };
        console.log(obj);
        if (this.searchPromotion.value.startDate !== null && this.searchPromotion.value.endDate == null && this.searchPromotion.value.status == 'All') {
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getStartDateSearch/' + this.searchPromotion.value.startDate + "/" + this.proId, options)
                .subscribe(function (data) {
                _this.PromotionSearch = data.json();
                console.log("status1" + _this.searchPromotion.value.startDate);
                console.log("status1" + _this.searchPromotion.value.endDate);
                if (_this.PromotionSearch.status == 200) {
                    _this.promotionListDetails = _this.PromotionSearch.response;
                    _this.promotionListResponse = true;
                }
                else {
                    _this.promotionListResponse = false;
                }
            });
        }
        else if (this.searchPromotion.value.endDate !== null && this.searchPromotion.value.startDate == null && this.searchPromotion.value.status == 'All') {
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getEndDateSearch/' + this.searchPromotion.value.endDate + "/" + this.proId, options)
                .subscribe(function (data) {
                _this.PromotionSearch = data.json();
                console.log("status2" + _this.searchPromotion.value.startDate);
                console.log("status2" + _this.searchPromotion.value.endDate);
                if (_this.PromotionSearch.status == 200) {
                    _this.promotionListDetails = _this.PromotionSearch.response;
                    _this.promotionListResponse = true;
                }
                else {
                    _this.promotionListResponse = false;
                }
            });
        }
        else if (this.searchPromotion.value.startDate !== null && this.searchPromotion.value.endDate !== null && this.searchPromotion.value.status == 'All') {
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getStartDateEndDateSearch/' + this.searchPromotion.value.startDate + "/" + this.searchPromotion.value.endDate + "/" + this.proId, options)
                .subscribe(function (data) {
                _this.PromotionSearch = data.json();
                console.log("status3" + _this.searchPromotion.value.startDate);
                console.log("status3" + _this.searchPromotion.value.endDate);
                if (_this.PromotionSearch.status == 200) {
                    _this.promotionListDetails = _this.PromotionSearch.response;
                    _this.promotionListResponse = true;
                }
                else {
                    _this.promotionListResponse = false;
                }
            });
        }
        else if (this.searchPromotion.value.startDate !== null && this.searchPromotion.value.endDate !== null && this.searchPromotion.value.status !== 'All') {
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getStartDateEndDateStatusSearch/' + this.searchPromotion.value.startDate + "/" + this.searchPromotion.value.endDate + "/" + this.searchPromotion.value.status + "/" + this.proId, options)
                .subscribe(function (data) {
                _this.PromotionSearch = data.json();
                console.log("status4" + _this.searchPromotion.value.startDate);
                console.log("status4" + _this.searchPromotion.value.endDate);
                console.log("status4" + _this.searchPromotion.value.status);
                if (_this.PromotionSearch.status == 200) {
                    _this.promotionListDetails = _this.PromotionSearch.response;
                    _this.promotionListResponse = true;
                }
                else {
                    _this.promotionListResponse = false;
                }
            });
        }
        else if (this.searchPromotion.value.status !== 'All' && this.searchPromotion.value.startDate == null && this.searchPromotion.value.endDate == null) {
            this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/searchPromotionStatus/' + this.searchPromotion.value.status + '/' + this.proId, options)
                .subscribe(function (data) {
                _this.PromotionSearch = data.json();
                console.log("status5" + _this.searchPromotion.value.status);
                if (_this.PromotionSearch.status == 200) {
                    _this.promotionListDetails = _this.PromotionSearch.response;
                    _this.promotionListResponse = true;
                }
                else {
                    _this.promotionListResponse = false;
                }
            });
        }
        else if (this.searchPromotion.value.status == 'All' || this.searchPromotion.value.startDate == null && this.searchPromotion.value.endDate == null) {
            console.log("status6" + this.searchPromotion.value.status);
            this.getPromotionList();
        }
        else if (this.searchPromotion.value.status !== 'All' && this.searchPromotion.value.startDate !== null && this.searchPromotion.value.endDate == null) {
            alert('please select End Date');
        }
        else if (this.searchPromotion.value.status !== 'All' && this.searchPromotion.value.startDate == null && this.searchPromotion.value.endDate !== null) {
            alert('please select Start Date');
        }
        else {
            this.promotionListResponse = false;
        }
    };
    // Search Work Order Ends
    ListPromotionComponent.prototype.onStartDateSelected = function (startDate) {
        this.endMin = startDate;
    };
    ListPromotionComponent.prototype.onEndDateSelected = function (endDate) {
        this.startMax = endDate;
    };
    ListPromotionComponent.prototype.reset = function () {
        this.searchPromotion.get('startDate').reset();
        this.searchPromotion.get('endDate').reset();
        this.searchPromotion.get('status').setValue('All');
        this.getPromotionList();
    };
    // promotionSelection(x) {
    //   console.log("x" + x)
    //   if (x == "All") {
    //     this.getPromotionList()
    //   }
    // }
    ListPromotionComponent.prototype.getPromotionList = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/listOfPromotions' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.promotionListDetails = response.response;
                _this.promotionListResponse = true;
            }
            else {
                _this.promotionListResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    ListPromotionComponent.prototype.addPromotion = function () {
        this.router.navigate(['/promotion/addPromotion']);
    };
    ListPromotionComponent.prototype.viewPromotion = function (data) {
        this.router.navigate(['/promotion/viewPromotion', data.promotionCode]);
    };
    ListPromotionComponent.prototype.editPromotion = function (data) {
        this.router.navigate(['/promotion/editPromotion', data.promotionCode]);
    };
    ListPromotionComponent.prototype.deleteInventory = function () {
    };
    ListPromotionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-list-promotion',
            template: __webpack_require__(/*! ./list-promotion.component.html */ "./src/app/marketing/promotions/list-promotion/list-promotion.component.html"),
            styles: [__webpack_require__(/*! ./list-promotion.component.scss */ "./src/app/marketing/promotions/list-promotion/list-promotion.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ListPromotionComponent);
    return ListPromotionComponent;
}());



/***/ }),

/***/ "./src/app/marketing/promotions/load-to-social-media/load-to-social-media.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/marketing/promotions/load-to-social-media/load-to-social-media.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home</a>\r\n      </li>\r\n      <li> <a>Promotions</a></li>\r\n\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n\r\n  <!-- Page Header -->\r\n  <!-- <div class=\"page-header position-relative\">\r\n         <div class=\"header-title\">\r\n              <h1> -->\r\n\r\n  <!-- <span style=\"color: red;\">INPROGRESS</span> -->\r\n  <!-- </h1>\r\n         </div>\r\n    </div> -->\r\n  <!-- /Page Header-->\r\n\r\n\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n        <div class=\"row\">\r\n          Coming Soon\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/marketing/promotions/load-to-social-media/load-to-social-media.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/marketing/promotions/load-to-social-media/load-to-social-media.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.logo {\n  width: 120px !important;\n  height: 120px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2V0aW5nL3Byb21vdGlvbnMvbG9hZC10by1zb2NpYWwtbWVkaWEvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXG1hcmtldGluZ1xccHJvbW90aW9uc1xcbG9hZC10by1zb2NpYWwtbWVkaWFcXGxvYWQtdG8tc29jaWFsLW1lZGlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBZTtFQUNmLGtDQUFpQztFQUVqQztzQkFDaUI7RUFHakIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7MEJBQ3NCLEVBRXhCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBR0Y7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUNEO0VBQ0ksd0JBQXVCO0VBQ3ZCLHlCQUF3QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL21hcmtldGluZy9wcm9tb3Rpb25zL2xvYWQtdG8tc29jaWFsLW1lZGlhL2xvYWQtdG8tc29jaWFsLW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tdGl0bGV7XHJcbiAgICAgY29sb3I6ICAjNWRiMmZmO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuIFxyXG4gICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICAgcGFkZGluZzogOHB4IDA7Ki8gICAgXHJcbiAgICAgLy8gY29sb3I6ICAjN2UzNzk0O1xyXG4gICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzdlMzc5NDtcclxuICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbiBcclxuIH1cclxuIFxyXG4gLm1hbmRhdG9yeXtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiB9XHJcblxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuICBcclxuLmJ0bi1ncmF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4ubG9nb3tcclxuICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/marketing/promotions/load-to-social-media/load-to-social-media.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/marketing/promotions/load-to-social-media/load-to-social-media.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: LoadToSocialMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadToSocialMediaComponent", function() { return LoadToSocialMediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoadToSocialMediaComponent = /** @class */ (function () {
    function LoadToSocialMediaComponent(router) {
        this.router = router;
    }
    LoadToSocialMediaComponent.prototype.ngOnInit = function () {
        this.loginData = JSON.parse(localStorage.getItem("login"));
    };
    LoadToSocialMediaComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    LoadToSocialMediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-load-to-social-media',
            template: __webpack_require__(/*! ./load-to-social-media.component.html */ "./src/app/marketing/promotions/load-to-social-media/load-to-social-media.component.html"),
            styles: [__webpack_require__(/*! ./load-to-social-media.component.scss */ "./src/app/marketing/promotions/load-to-social-media/load-to-social-media.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoadToSocialMediaComponent);
    return LoadToSocialMediaComponent;
}());



/***/ }),

/***/ "./src/app/marketing/promotions/promotions.component.html":
/*!****************************************************************!*\
  !*** ./src/app/marketing/promotions/promotions.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/marketing/promotions/promotions.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/marketing/promotions/promotions.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmtldGluZy9wcm9tb3Rpb25zL3Byb21vdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/marketing/promotions/promotions.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/marketing/promotions/promotions.component.ts ***!
  \**************************************************************/
/*! exports provided: PromotionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionsComponent", function() { return PromotionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PromotionsComponent = /** @class */ (function () {
    function PromotionsComponent() {
    }
    PromotionsComponent.prototype.ngOnInit = function () {
    };
    PromotionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promotions',
            template: __webpack_require__(/*! ./promotions.component.html */ "./src/app/marketing/promotions/promotions.component.html"),
            styles: [__webpack_require__(/*! ./promotions.component.scss */ "./src/app/marketing/promotions/promotions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PromotionsComponent);
    return PromotionsComponent;
}());



/***/ }),

/***/ "./src/app/marketing/promotions/view-promotion/view-promotion.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/marketing/promotions/view-promotion/view-promotion.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n     <!-- Page Breadcrumb -->\r\n     <div class=\"page-breadcrumbs\">\r\n          <ul class=\"breadcrumb\">\r\n               <li>\r\n                    <i class=\"fa fa-home\"></i>\r\n                    Home\r\n               </li>\r\n               <li> Promotions</li>\r\n               <li>List of Promotions</li>\r\n               <li class=\"active\">View Promotion</li>\r\n          </ul>\r\n     </div>\r\n     <!-- /Page Breadcrumb -->\r\n\r\n     <!-- Page Header -->\r\n     <div class=\"page-header position-relative\">\r\n          <div class=\"header-title\">\r\n               <h1>\r\n                    View Promotion\r\n                    <!-- <span style=\"color: red;\">INPROGRESS</span> -->\r\n               </h1>\r\n          </div>\r\n     </div>\r\n     <!-- /Page Header -->\r\n\r\n\r\n     <!-- Page Body -->\r\n     <div class=\"page-body\">\r\n          <div class=\"row\">\r\n               <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"row\">\r\n                         <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"row\">\r\n                                   <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                                        <div class=\"well with-header with-footer three-bordered \">\r\n                                             <div class=\"header gray\">\r\n                                                  View Promotion\r\n                                             </div>\r\n                                             <div id=\"registration-form\">\r\n                                                  <div class=\"row\">\r\n                                                       <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                                            <!-- Row 1 -->\r\n                                                            <div class=\"row\">\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"promotionCodeLbl\">\r\n                                                                                <b>Promotion Code </b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           {{this.promotionCode}}\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"promotionNameLbl\">\r\n                                                                                <b>Promotion Name </b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           {{viewPromotionData.promotionName}}\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                            <!-- /Row 1 -->\r\n                                                            <!-- Row 2 -->\r\n                                                            <div class=\"row\">\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"vendorNameLbl\">\r\n                                                                                <b>Vendor Name</b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           {{viewPromotionData.vendorName}}\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"typeOrCategoryLbl\">\r\n                                                                                <b>Type </b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           {{viewPromotionData.marketingMediaType}}\r\n                                                                      </div>\r\n                                                                 </div>\r\n\r\n\r\n                                                            </div>\r\n                                                            <!-- /Row 2 -->\r\n                                                            <!-- Row 3-->\r\n                                                            <div class=\"row\">\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"termsLbl\">\r\n                                                                                <b>Start Date</b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           {{viewPromotionData.startDate | date: \"MM-dd-yyyy\"}}\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"termsLbl\">\r\n                                                                                <b>End Date</b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           {{viewPromotionData.endDate | date: \"MM-dd-yyyy\"}}\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                            <!-- /Row 3 -->\r\n                                                            <!-- Row 4 -->\r\n                                                            <div class=\"row\">\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"emailLbl\">\r\n                                                                                <b>Recurring\r\n                                                                                </b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           {{viewPromotionData.recurring}}\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"termsLbl\">\r\n                                                                                <b>Promotion Fees</b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           {{viewPromotionData.promotionFees}}\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                            <!-- /Row 4 -->\r\n                                                            <!-- Row 5 -->\r\n                                                            <div class=\"row\">\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"promotionValuesLbl\">\r\n                                                                                <b>Promotion Values\r\n                                                                                </b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           {{viewPromotionData.promotionValues}}\r\n                                                                           {{viewPromotionData.type}}\r\n                                                                           {{viewPromotionData.mode}}\r\n                                                                           {{viewPromotionData.totalTicket}}\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"descriptionLbl\">\r\n                                                                                <b>Description </b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           {{viewPromotionData.description}}\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                            <!-- /Row 5 -->\r\n                                                            <!-- Row 6 -->\r\n                                                            <div class=\"row\">\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"statusLbl\">\r\n                                                                                <b>Status\r\n                                                                                </b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           {{viewPromotionData.status}}\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                            </div>\r\n                                                            <!-- /Row 5 -->\r\n\r\n                                                            <!--Row 6-->\r\n                                                            <div class=\"row\">\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"cityLbl\">\r\n                                                                                <b>Promotion Image</b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-9\" *ngIf=\"withImg\">\r\n                                                                      <div class=\"form-group\">\r\n\r\n                                                                           <!-- Creates the bootstrap modal where the image will appear -->\r\n                                                                           <div *ngFor='let x of arr;let i = index'>\r\n                                                                                <figure\r\n                                                                                     style=\"height:140px;width:220px;\"\r\n                                                                                     class=\"icon1\">\r\n                                                                                     <figcaption>\r\n                                                                                          {{ imageName[i]?.image }}\r\n                                                                                     </figcaption>\r\n                                                                                     <img (click)=\"show(x)\"\r\n                                                                                          src=\"{{x.name}}\"\r\n                                                                                          height=\"100px\" width=\"120px\">\r\n                                                                                     <!-- <img (click)=\"show(x)\" src=\"{{x.name}}\" [zoom]=\"5\" [lenSize]=\"20\" [imgWidth]=\"100\" [divZoomed]=\"divZoomed\"></app-zoom> -->\r\n                                                                                </figure>\r\n\r\n                                                                                &nbsp;&nbsp;&nbsp;&nbsp;\r\n                                                                           </div>\r\n\r\n\r\n                                                                      </div>\r\n                                                                 </div>\r\n\r\n                                                                 <div class=\"col-sm-3\" *ngIf=\"withOutImg\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <img [src]=\"imagePreview\" height=\"100px\"\r\n                                                                                width=\"120px\">\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- Creates the bootstrap modal where the image will appear -->\r\n                                                                 <div id=\"myModal0\" class=\"modal fade\"\r\n                                                                      style=\"display: none;\" role=\"dialog\"\r\n                                                                      aria-hidden=\"true\"\r\n                                                                      style=\"margin-right: 350px;margin-left: 350px;margin-bottom: 5px\">\r\n\r\n                                                                      <!-- <div id=\"myModal0\" class=\"modal\" id=\"imagemodal\" tabindex=\"-1\" role=\"dialog\"\r\n       aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"> -->\r\n                                                                      <div class=\"modal-dialog1\">\r\n                                                                           <div class=\"modal-content\">\r\n                                                                                <div class=\"modal-header\">\r\n                                                                                     <h4 class=\"modal-title\"\r\n                                                                                          id=\"myModalLabel\">\r\n                                                                                          Image preview</h4>\r\n                                                                                </div>\r\n                                                                                <div class=\"modal-body\">\r\n                                                                                     <div data-dismiss=\"modal\">\r\n                                                                                          {{ Image}}<i\r\n                                                                                               style=\"margin-left:10px;color: red\"\r\n                                                                                               (click)=\"hide()\"\r\n                                                                                               class=\"fa fa-times\"></i>\r\n                                                                                     </div>\r\n                                                                                     <!-- <figure style=\"height:140px;width:220px;margin-right: 20px;\" > -->\r\n                                                                                     <!-- height=\"150px\" width=\"130px\"<app-zoom [img]=\"imageData\" [zoom]=\"5\" [lenSize]=\"20\" [imgWidth]=\"100\" [divZoomed]=\"divZoomed\"></app-zoom> -->\r\n                                                                                     <img [src]=\"imagePreview\"\r\n                                                                                          height=\"100%\" width=\"100%\">\r\n                                                                                     <hr>\r\n                                                                                     <!-- <ngx-image-zoom\r\n                       [thumbImage]=myThumbnail\r\n                       [fullImage]=myFullresImage\r\n                       [magnification]=\"1\"\r\n                       [enableScrollZoom]=\"true\"\r\n                       [enableLens]=\"true\"\r\n                       [lensWidth]=\"200\">\r\n                  </ngx-image-zoom> -->\r\n                                                                                     <!-- </figure> -->\r\n                                                                                     <!-- <div #divZoomed class=\"img-zoom-result\"></div> -->\r\n                                                                                </div>\r\n                                                                                <div class=\"modal-footer\">\r\n                                                                                     <button type=\"button\"\r\n                                                                                          class=\"btn btn-gray\"\r\n                                                                                          data-dismiss=\"modal\"\r\n                                                                                          (click)=\"hide()\">Close</button>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n\r\n                                                                 <!-- Creates the bootstrap modal where the image will appear -->\r\n                                                                 <!--Modal Send Email to customers-->\r\n                                                                 <div id=\"sendEmail\" class=\"modal fade\"\r\n                                                                      style=\"display: none;\" role=\"dialog\"\r\n                                                                      aria-hidden=\"true\">\r\n                                                                      <div class=\"modal-dialog\">\r\n                                                                           <div class=\"modal-content\">\r\n                                                                                <div class=\"modal-header\">\r\n                                                                                     <div class=\"widget-header blue\">\r\n                                                                                          <span class=\"widget-caption\"><b>Send\r\n                                                                                                    Promotion\r\n                                                                                                    Email</b></span>\r\n                                                                                     </div>\r\n                                                                                     <div class=\"modal-body\">\r\n                                                                                          <form>\r\n                                                                                               <br />\r\n                                                                                               <div class=\"row\">\r\n                                                                                                    <div\r\n                                                                                                         class=\"col-lg-12\">\r\n                                                                                                         <div\r\n                                                                                                              class=\"form-group\">\r\n                                                                                                              <label\r\n                                                                                                                   for=\"reasonLbl\">\r\n                                                                                                                   <b\r\n                                                                                                                        class=\"popup-text\">Are\r\n                                                                                                                        you\r\n                                                                                                                        sure\r\n                                                                                                                        you\r\n                                                                                                                        want\r\n                                                                                                                        to\r\n                                                                                                                        send\r\n                                                                                                                        this\r\n                                                                                                                        promotion\r\n                                                                                                                        to\r\n                                                                                                                        all\r\n                                                                                                                        customers?\r\n                                                                                                                   </b>\r\n                                                                                                              </label>\r\n                                                                                                         </div>\r\n                                                                                                    </div>\r\n                                                                                               </div>\r\n                                                                                               <div\r\n                                                                                                    class=\"modal-footer\">\r\n                                                                                                    <div\r\n                                                                                                         class=\"col-lg-4\">\r\n                                                                                                    </div>\r\n                                                                                                    <div\r\n                                                                                                         class=\"col-lg-4 button-center\">\r\n                                                                                                         <button\r\n                                                                                                              type=\"button\"\r\n                                                                                                              class=\"btn btn-info\"\r\n                                                                                                              data-dismiss=\"modal\"\r\n                                                                                                              (click)=\"sendEmails()\">Yes</button>\r\n                                                                                                         &nbsp;&nbsp;\r\n                                                                                                         <button\r\n                                                                                                              type=\"button\"\r\n                                                                                                              class=\"btn btn-danger\"\r\n                                                                                                              data-dismiss=\"modal\"\r\n                                                                                                              (click)=\"subcriptionNo()\">No</button>\r\n                                                                                                    </div>\r\n                                                                                                    <div\r\n                                                                                                         class=\"col-lg-4 button-center\">\r\n\r\n                                                                                                    </div>\r\n                                                                                                    <div\r\n                                                                                                         class=\"col-lg-3\">\r\n                                                                                                    </div>\r\n                                                                                               </div>\r\n                                                                                          </form>\r\n                                                                                     </div>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <br>\r\n                                                                 </div>\r\n                                                                 <!--/Modal Send Email to customers-->\r\n                                                                 <!--Modal Send Email to customers-->\r\n                                                                 <div id=\"previewMessageContent\" class=\"modal fade\"\r\n                                                                      style=\"display: none;\" role=\"dialog\"\r\n                                                                      aria-hidden=\"true\" *ngIf=\"previewMessage\">\r\n                                                                      <div class=\"modal-dialog\">\r\n                                                                           <div class=\"modal-content\">\r\n                                                                                <div class=\"modal-header\">\r\n                                                                                     <div class=\"widget-header blue\">\r\n                                                                                          <span class=\"widget-caption\"><b>Preview\r\n                                                                                                    Message\r\n                                                                                                    Content</b></span>\r\n                                                                                          <button type=\"button\"\r\n                                                                                               class=\"close\"\r\n                                                                                               data-dismiss=\"modal\"\r\n                                                                                               aria-label=\"Close\">\r\n                                                                                               <span\r\n                                                                                                    aria-hidden=\"true\">&times;</span>\r\n                                                                                          </button>\r\n                                                                                     </div>\r\n\r\n                                                                                     <div class=\"modal-body\">\r\n                                                                                          <form> <br />\r\n                                                                                               <div class=\"row\">\r\n                                                                                                    <div\r\n                                                                                                         class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                                                                                         <!-- Row 1 -->\r\n                                                                                                         <!-- <div\r\n                                           class=\"row\">\r\n                                           <div\r\n                                                class=\"col-sm-6\">\r\n                                                <div\r\n                                                     class=\"form-group\">\r\n                                                     <label>\"Hello\r\n                                                          {{viewPreviewMessageData.firstName}}-{{viewPreviewMessageData.lastName}}\"</label>\r\n                                                </div>\r\n                                           </div>\r\n                                      </div> -->\r\n                                                                                                         <!-- /Row 1 -->\r\n                                                                                                         <!-- Row 2 -->\r\n                                                                                                         <div\r\n                                                                                                              class=\"row\">\r\n                                                                                                              <!-- <div\r\n                                                class=\"col-sm-6\">\r\n                                                <div\r\n                                                     class=\"form-group\">\r\n                                                     <label\r\n                                                          for=\"ProNameLbl\">\r\n                                                          <b>PRO\r\n                                                               Name\r\n                                                          </b>\r\n                                                     </label>\r\n                                                </div>\r\n                                           </div> -->\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-3\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        {{viewPreviewMessageData.companyName}}\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-3\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                         </div>\r\n                                                                                                         <!-- /Row 2 -->\r\n                                                                                                         <!-- Row 3 -->\r\n                                                                                                         <div\r\n                                                                                                              class=\"row\">\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-4\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-4\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        <a>\r\n                                                                                                                             <img id=\"imageresource\"\r\n                                                                                                                                  [src]=\"imgPreview\"\r\n                                                                                                                                  style=\"width: 100px; height: 100px;\">\r\n\r\n                                                                                                                        </a>\r\n\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-4\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                         </div>\r\n                                                                                                         <!-- /Row 3 -->\r\n                                                                                                         <!-- Row 4 -->\r\n                                                                                                         <div\r\n                                                                                                              class=\"row\">\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        <label\r\n                                                                                                                             for=\"promotionTitleLbl\">\r\n                                                                                                                             <b>Promotion\r\n                                                                                                                                  Title\r\n                                                                                                                             </b>\r\n                                                                                                                        </label>\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        {{viewPromotionData.promotionName}}\r\n\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                         </div>\r\n                                                                                                         <!-- /Row 4 -->\r\n                                                                                                         <!-- Row 5 -->\r\n                                                                                                         <div\r\n                                                                                                              class=\"row\">\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        <label\r\n                                                                                                                             for=\"promotionValuesLbl\">\r\n                                                                                                                             <b>Promotion\r\n                                                                                                                                  Values\r\n                                                                                                                             </b>\r\n                                                                                                                        </label>\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        {{viewPromotionData.promotionValues}}\r\n                                                                                                                        {{viewPromotionData.type}}\r\n                                                                                                                        {{viewPromotionData.mode}}\r\n                                                                                                                        {{viewPromotionData.totalTicket}}\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                         </div>\r\n                                                                                                         <!-- /Row 5 -->\r\n                                                                                                         <!-- Row 6 -->\r\n                                                                                                         <div\r\n                                                                                                              class=\"row\">\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        <label\r\n                                                                                                                             for=\"descriptionLbl\">\r\n                                                                                                                             <b>Description\r\n                                                                                                                             </b>\r\n                                                                                                                        </label>\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        {{viewPromotionData.description}}\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                         </div>\r\n                                                                                                         <!-- /Row 6-->\r\n                                                                                                         <!-- Row 7 -->\r\n                                                                                                         <div\r\n                                                                                                              class=\"row\">\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        <label\r\n                                                                                                                             for=\"termsLbl\">\r\n                                                                                                                             <b>Start\r\n                                                                                                                                  Date</b>\r\n                                                                                                                        </label>\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        {{viewPromotionData.startDate | date: \"MM-dd-yyyy\"}}\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                         </div>\r\n                                                                                                         <!-- /Row 7-->\r\n                                                                                                         <!-- Row 8-->\r\n                                                                                                         <div\r\n                                                                                                              class=\"row\">\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        <label\r\n                                                                                                                             for=\"termsLbl\">\r\n                                                                                                                             <b>End\r\n                                                                                                                                  Date</b>\r\n                                                                                                                        </label>\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        {{viewPromotionData.endDate | date: \"MM-dd-yyyy\"}}\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                         </div>\r\n                                                                                                         <!-- /Row 8 -->\r\n                                                                                                         <!-- Row 9 -->\r\n                                                                                                         <div\r\n                                                                                                              class=\"row\">\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        <label\r\n                                                                                                                             for=\"promotionCodeLbl\">\r\n                                                                                                                             <b>Promotion\r\n                                                                                                                                  Code\r\n                                                                                                                             </b>\r\n                                                                                                                        </label>\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        {{viewPromotionData.promotionCode}}\r\n\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                         </div>\r\n                                                                                                         <!-- /Row 9 -->\r\n                                                                                                         <!-- Row 10 -->\r\n                                                                                                         <div\r\n                                                                                                              class=\"row\">\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        <label\r\n                                                                                                                             for=\"promotionTitleLbl\">\r\n                                                                                                                             <b>PRO\r\n                                                                                                                                  Phone\r\n                                                                                                                                  #\r\n                                                                                                                             </b>\r\n                                                                                                                        </label>\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        {{viewPreviewMessageData.businessPhone}}\r\n\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                         </div>\r\n                                                                                                         <!-- /Row 10 -->\r\n                                                                                                         <!-- Row 11 -->\r\n                                                                                                         <div\r\n                                                                                                              class=\"row\">\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        <label\r\n                                                                                                                             for=\"proWebsiteAddressLbl\">\r\n                                                                                                                             <b>PRO\r\n                                                                                                                                  Website\r\n                                                                                                                                  Address\r\n                                                                                                                             </b>\r\n                                                                                                                        </label>\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                              <div\r\n                                                                                                                   class=\"col-sm-6\">\r\n                                                                                                                   <div\r\n                                                                                                                        class=\"form-group\">\r\n                                                                                                                        {{viewPreviewMessageData.webMailId}}\r\n\r\n                                                                                                                   </div>\r\n                                                                                                              </div>\r\n                                                                                                         </div>\r\n                                                                                                         <!-- /Row 11 -->\r\n                                                                                                    </div>\r\n                                                                                               </div>\r\n                                                                                               <div\r\n                                                                                                    class=\"modal-footer\">\r\n                                                                                                    <div\r\n                                                                                                         class=\"col-lg-4\">\r\n                                                                                                    </div>\r\n                                                                                                    <div\r\n                                                                                                         class=\"col-lg-4 button-center\">\r\n                                                                                                         <button\r\n                                                                                                              type=\"button\"\r\n                                                                                                              class=\"btn btn-gray\"\r\n                                                                                                              data-toggle=\"modal\"\r\n                                                                                                              data-target=\"#sendEmail\"\r\n                                                                                                              data-dismiss=\"modal\"><i\r\n                                                                                                                   class=\"fa fa-envelope\"></i>Send\r\n                                                                                                              Email\r\n                                                                                                              To\r\n                                                                                                              All\r\n                                                                                                              Customers\r\n                                                                                                         </button>\r\n                                                                                                    </div>\r\n                                                                                                    <div\r\n                                                                                                         class=\"col-lg-4 button-center\">\r\n\r\n                                                                                                    </div>\r\n                                                                                                    <div\r\n                                                                                                         class=\"col-lg-3\">\r\n                                                                                                    </div>\r\n                                                                                               </div>\r\n                                                                                          </form>\r\n                                                                                     </div>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <br>\r\n                                                                 </div>\r\n                                                                 <!--/Modal Send Email to customers-->\r\n                                                                 <!--/Row 6-->\r\n                                                                 <!-- Bottom Buttons -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-lg-12\">\r\n                                                                           <div class=\"col-lg-1\">\r\n                                                                                <button type=\"button\"\r\n                                                                                     class=\"btn btn-blue\"\r\n                                                                                     (click)=\"editPromotion()\"><i\r\n                                                                                          class=\"fa fa-pencil\"></i>\r\n                                                                                     Edit</button>\r\n                                                                           </div>\r\n                                                                           <div class=\"col-lg-3 button-center\">\r\n                                                                                <button type=\"submit\"\r\n                                                                                     class=\"btn btn-gray\"\r\n                                                                                     (click)=\"load()\"><i\r\n                                                                                          class=\"fa fa-check\"></i>\r\n                                                                                     Load to Social Media\r\n                                                                                </button>\r\n                                                                           </div>\r\n                                                                           <div class=\"col-lg-3\">\r\n                                                                                <button type=\"button\"\r\n                                                                                     class=\"btn btn-info\"\r\n                                                                                     data-toggle=\"modal\"\r\n                                                                                     data-target=\"#previewMessageContent\"><i\r\n                                                                                          class=\"fa fa-check\"></i>\r\n                                                                                     Preview Message Content\r\n                                                                                </button>\r\n                                                                           </div>\r\n                                                                           <div class=\"col-lg-3 button-center\">\r\n                                                                                <button type=\"button\"\r\n                                                                                     class=\"btn btn-gray\"\r\n                                                                                     data-toggle=\"modal\"\r\n                                                                                     data-target=\"#sendEmail\"><i\r\n                                                                                          class=\"fa fa-envelope\"></i>Send\r\n                                                                                     Email To\r\n                                                                                     All\r\n                                                                                     Customers\r\n                                                                                </button>\r\n                                                                           </div>\r\n                                                                           <div class=\"col-lg-1\">\r\n                                                                                <button type=\"submit\"\r\n                                                                                     class=\"btn btn-blue\"\r\n                                                                                     (click)=\"ok()\"><i\r\n                                                                                          class=\"fa fa-check\"></i>\r\n                                                                                     Ok\r\n                                                                                </button>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Bottom Buttons -->\r\n                                                            </div>\r\n                                                       </div>\r\n                                                  </div>\r\n                                             </div>\r\n                                        </div>\r\n                                   </div>\r\n                              </div>\r\n                         </div>\r\n                    </div>\r\n                    <!-- /Page Body -->\r\n               </div>\r\n               <!-- /Page Content -->\r\n\r\n               <!-- /Page Container -->\r\n\r\n               <!-- /Main Container -->"

/***/ }),

/***/ "./src/app/marketing/promotions/view-promotion/view-promotion.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/marketing/promotions/view-promotion/view-promotion.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.logo {\n  width: 120px !important;\n  height: 120px !important; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.modal-dialog1 {\n  position: relative !important;\n  display: block !important;\n  /* This is important */\n  text-align: center;\n  overflow-y: scroll !important;\n  overflow-x: scroll !important;\n  max-width: 100% !important;\n  max-height: 100% !important; }\n\n.icon1 {\n  height: auto;\n  width: 120px;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  font: 400 16px/1.4 \"Source Code Pro\";\n  font-variant: small-caps;\n  padding: 10px;\n  border: 1px solid #103683;\n  border-radius: 10px;\n  width: 33.33%;\n  padding: 10px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2V0aW5nL3Byb21vdGlvbnMvdmlldy1wcm9tb3Rpb24vRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXG1hcmtldGluZ1xccHJvbW90aW9uc1xcdmlldy1wcm9tb3Rpb25cXHZpZXctcHJvbW90aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBZTtFQUNmLGtDQUFpQztFQUVqQztzQkFDaUI7RUFHakIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7MEJBQ3NCLEVBRXhCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBR0Y7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUNEO0VBQ0ksd0JBQXVCO0VBQ3ZCLHlCQUF3QixFQUMxQjs7QUFDRDtFQUNHLG9DQUFtQyxFQUN0Qzs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQyx1QkFBc0I7RUFDdEIsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksOEJBQTZCO0VBQzdCLDBCQUF5QjtFQUFFLHVCQUF1QjtFQUNsRCxtQkFBaUI7RUFHakIsOEJBQTJCO0VBQzNCLDhCQUEyQjtFQUUzQiwyQkFBMEI7RUFDdEIsNEJBQTJCLEVBRWxDOztBQUVEO0VBRU8sYUFBWTtFQUNaLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsMkJBQTBCO0VBRzFCLHFDQUFtQztFQUNuQyx5QkFBd0I7RUFDeEIsY0FBYTtFQUNiLDBCQUF5QjtFQUN6QixvQkFBbUI7RUFFbkIsY0FBYTtFQUNiLGNBQWEsRUFFbkIiLCJmaWxlIjoic3JjL2FwcC9tYXJrZXRpbmcvcHJvbW90aW9ucy92aWV3LXByb21vdGlvbi92aWV3LXByb21vdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXRpdGxle1xyXG4gICAgIGNvbG9yOiAgIzVkYjJmZjtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1ZGIyZmY7XHJcbiBcclxuICAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIHBhZGRpbmc6IDhweCAwOyovICAgIFxyXG4gICAgIC8vIGNvbG9yOiAgIzdlMzc5NDtcclxuICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7XHJcbiAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG4gXHJcbiB9XHJcbiBcclxuIC5tYW5kYXRvcnl7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gfVxyXG5cclxuIC5ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAgXHJcbi5idG4tZ3JheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ297XHJcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcclxuIH1cclxuIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibHVleyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLm1vZGFsLWRpYWxvZzF7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IC8qIFRoaXMgaXMgaW1wb3J0YW50ICovICAgIFxyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAvLyB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgLy8gaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy15OnNjcm9sbCFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy14OnNjcm9sbCFpbXBvcnRhbnQ7XHJcbiAgIFxyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJSAhaW1wb3J0YW50OyAgIFxyXG4gICAgLy9taW4taGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuLmljb24xIFxyXG57XHJcbiAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICB3aWR0aDogLW1vei1maXQtY29udGVudDtcclxuICAgICAgIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xyXG4gICAgLy8gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2FmYWZhZjtcclxuICAgICAgIGZvbnQ6IDQwMCAxNnB4LzEuNCdTb3VyY2UgQ29kZSBQcm8nO1xyXG4gICAgICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMDM2ODM7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAvLyBmbG9hdDogbGVmdDtcclxuICAgICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgLy9tYXJnaW46MTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAuY29sdW1uIHtcclxuICBcclxuLy8gICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/marketing/promotions/view-promotion/view-promotion.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/marketing/promotions/view-promotion/view-promotion.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewPromotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPromotionComponent", function() { return ViewPromotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_imageupload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/imageupload */ "./src/utilities/imageupload.ts");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var ViewPromotionComponent = /** @class */ (function () {
    function ViewPromotionComponent(beyond, router, formBuilder, route, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.percentage = 0;
        this.imagePreview = "../../assets/img/no-image.png";
        this.imgPreview = "/assets/img/proz/company_default";
        this.img = false;
        this.progressShow = false;
        this.progressHide = false;
        this.urls = [];
        this.imagePreviewDocument = "assets/img/no-image.png";
        this.arr = [];
        this.imageArray = [];
        this.imageName = [];
        this.Image = [];
        // myThumbnail = "https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
        //myFullresImage = "https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
        this.imageData = [];
        this.imageNames = [];
        this.imageValue = [];
    }
    ViewPromotionComponent.prototype.ngOnInit = function () {
        this.promotionCode = this.route.snapshot.params['promotionCode'];
        console.log("Promotion Code", this.promotionCode);
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.beyond.beyondAdmin();
        this.viewPromotions();
        this.viewPreviewMessage();
    };
    ViewPromotionComponent.prototype.cancel = function () {
        this.router.navigate(['/promotion/listPromotion']);
    };
    ViewPromotionComponent.prototype.ok = function () {
        this.router.navigate(['/promotion/listPromotion']);
    };
    ViewPromotionComponent.prototype.load = function () {
        this.router.navigate(['/promotion/loadToSocialMedia']);
    };
    // start view Vendor
    ViewPromotionComponent.prototype.viewPromotions = function () {
        var _this = this;
        //this.spinner.show()
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/viewPromotion/' + this.promotionCode, options)
            .subscribe(function (data) {
            var promotion = data.json();
            if (promotion.status == 200) {
                // this.spinner.hide()
                _this.viewPromotionData = promotion.response[0];
                console.log("Promotion Data", JSON.stringify(_this.viewPromotionData));
                _this.urls = _this.viewPromotionData.promotionImage.split(',');
                console.log("Promotion Image" + JSON.stringify(_this.urls));
                if (_this.viewPromotionData.promotionImage == "" || _this.viewPromotionData.promotionImage == null || _this.viewPromotionData.promotionImage == "undefined" || _this.viewPromotionData.promotionImage == undefined) {
                    _this.imagePreview = '../../assets/img/no-image.png';
                    var index = _this.imagePreview.indexOf(_this.imagePreview);
                    console.log("TTTTTT" + index);
                    _this.withImg = false;
                    _this.withOutImg = true;
                }
                else {
                    _this.withImg = true;
                    _this.withOutImg = false;
                    for (var i = 0; i < _this.urls.length; i++) {
                        _this.imageName.push({ image: _this.urls[i] });
                        console.log("imageNameimageName" + JSON.stringify(_this.imageName));
                        _this.imagePreview = _global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + "/" + _this.urls[i];
                        _this.arr.push({ name: _this.imagePreview });
                    }
                }
            }
            (function (error) {
                _this.toastr.warning('Unable to Connect to Server');
            });
        });
    };
    // end view Vendor
    /* Image showing in pop up */
    ViewPromotionComponent.prototype.show = function (index) {
        console.log("index::::" + JSON.stringify(index.name));
        this.Image = index.name.substring(22, 50);
        console.log("Image::::" + JSON.stringify(this.Image));
        for (var i = 0; i < this.arr.length; i++) {
            this.imagePreview[i];
            console.log("this.arr[i].name:::" + this.arr[i].name);
            if (index.name == this.arr[i].name) {
                this.imagePreview = index.name;
                // this.Image//=index.substring(22, 50)
                console.log("imagePreview" + this.Image);
                this.showModal = true;
                $("#myModal0").modal("show");
            }
            else {
                //  $("#myModal0").modal("hide"); 
            }
        }
    };
    /* Image showing in pop up */
    //Bootstrap Modal Close event
    ViewPromotionComponent.prototype.hide = function () {
        $("#myModal0").modal("hide");
    };
    ViewPromotionComponent.prototype.editPromotion = function () {
        this.router.navigate(['/promotion/editPromotion', this.promotionCode]);
    };
    ViewPromotionComponent.prototype.sendEmails = function () {
        var _this = this;
        console.log("Send Emails");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        var emailSendObj = {
            emailSubscription: 'YES',
            proId: this.loginData.loginCode,
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/sendCustomerEmails/' + this.promotionCode, emailSendObj).subscribe(function (data) {
            var response = data.json();
        }, function (error) {
            _this.toastr.warning("Unable to connect to server");
        });
    };
    ViewPromotionComponent.prototype.viewPreviewMessage = function () {
        var _this = this;
        //this.spinner.show()
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/viewPreviewMessage/' + this.promotionCode + '/' + this.loginData.loginCode, options).subscribe(function (data) {
            var preview = data.json();
            if (preview.status == 200) {
                // this.spinner.hide()
                _this.viewPreviewMessageData = preview.response[0];
                console.log("Preview Message Data", JSON.stringify(_this.viewPreviewMessageData));
                _this.viewPreviewMessageData.image == 'assets/img/proz/company_default.jpg' ? _this.imgPreview = "../../../assets/img/proz/company_default.jpg" : _this.imgPreview = _global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + _this.viewPreviewMessageData.image;
                _this.previewMessage = true;
            }
            else {
                _this.previewMessage = true;
            }
            (function (error) {
                _this.toastr.warning('Unable to Connect to Server');
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageUpload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewPromotionComponent.prototype, "imageUploadVariable", void 0);
    ViewPromotionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"], _utilities_imageupload__WEBPACK_IMPORTED_MODULE_4__["ImageUpload"]],
            selector: 'app-view-promotion',
            template: __webpack_require__(/*! ./view-promotion.component.html */ "./src/app/marketing/promotions/view-promotion/view-promotion.component.html"),
            styles: [__webpack_require__(/*! ./view-promotion.component.scss */ "./src/app/marketing/promotions/view-promotion/view-promotion.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], ViewPromotionComponent);
    return ViewPromotionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=marketing-marketing-module.js.map