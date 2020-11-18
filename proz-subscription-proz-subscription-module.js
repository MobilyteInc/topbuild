(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proz-subscription-proz-subscription-module"],{

/***/ "./src/app/proz-subscription/enable-vanlynk/enable-vanlynk.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/proz-subscription/enable-vanlynk/enable-vanlynk.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a> Vanlynk License Details </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Vanlynk License Details</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"col-lg-8 col-sm-8 col-xs-8\">\r\n              <b>Note: 1 license of Vanlynk Enabled for Pro Admin by default. If you need more staff licenses please\r\n                enter\r\n                the number here</b>\r\n            </div>\r\n            <div class=\"col-lg-4 col-sm-4 col-xs-4\">\r\n              <b style=\"color: red;\">Rate: $ 50 (Monthly Per License)</b>\r\n            </div>\r\n            <br /><br /><br />\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered \">\r\n                      <div class=\"header gray\">\r\n                        Update Vanlynk Licenses\r\n                      </div>\r\n                      <div id=\"registration-form\">\r\n                        <form [formGroup]=\"updateSubscription\">\r\n                          <!-- Enable Vanlynk -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"numberofLicensesLbl\">\r\n                                      <b>Current Number of Licenses (Active Logins)<span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      {{this.prozDetailsData[0].noOfLicenses}}\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"numberofLicensesLbl\">\r\n                                      <b>Required Licenses (Active Logins)<span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" formControlName=\"noOfLicenses\"\r\n                                        [(ngModel)]=\"name\" placeholder=\"Enter Number of Licenses\">\r\n                                      <i class=\"fa fa-briefcase\"></i>\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Enable Vanlynk -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-4\">\r\n                              <div class=\"form-group\"></div>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                              <div class=\"form-group\">\r\n                                <input type=\"button\" class=\"btn btn-success btn-block\" value=\"Update Licenses\"\r\n                                  (click)=\"updateButton()\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                              <div class=\"form-group\">\r\n                                <input type=\"submit\" class=\"btn btn-gray btn-block\" value=\"Cancel\" (click)=\"cancel()\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-4\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </form>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"widget-body\">\r\n              <div class=\"table-scrollable\">\r\n                <table class=\"table table-bordered table-striped table-condensed flip-content\" *ngIf=\"showData\">\r\n                  <thead class=\"flip-content bordered-purple\">\r\n                    <tr>\r\n                      <th>\r\n                        Licenses Purchased\r\n                      </th>\r\n                      <th>\r\n                        Licenses Used (Active Logins)\r\n                      </th>\r\n                      <th>\r\n                        Licenses Free\r\n                      </th>\r\n                      <th>\r\n                        Total Staff\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        {{this.prozDetailsData[0].noOfLicenses}}\r\n                      </td>\r\n                      <td>\r\n                        {{this.activeLoginData.ActiveLogins}}\r\n                      </td>\r\n                      <td>\r\n                        {{this.prozDetailsData[0].noOfLicenses-this.activeLoginData.ActiveLogins}}\r\n                      </td>\r\n                      <td>\r\n                        {{this.totalStaffData.totalStaff}}\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <br>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <div class=\"row\" *ngIf=\"showData\">\r\n              <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                <div class=\"well with-header with-footer three-bordered\">\r\n                  <div class=\"header gray\">\r\n                    List of Staff\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-3\">\r\n                      <label><b>De-Activation Logins Selected :</b> {{deactivationLoginSelectedCounter}} </label>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                      <label><b>Current Free Licenses :</b>\r\n                        {{totalFreeLicenses}} </label>\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                    </div>\r\n                    <div class=\"col-sm-3\">\r\n                      <input type=\"button\" class=\"btn btn-success\" (click)=\"apply()\" value=\"Apply\"> &nbsp;\r\n                      <input type=\"button\" class=\"btn btn-danger\" value=\"Cancel\">\r\n                    </div>\r\n                  </div>\r\n                  <br>\r\n                  <div class=\"widget-body\">\r\n                    <div class=\"table-scrollable\">\r\n                      <table class=\"table table-bordered table-striped table-condensed flip-content\" *ngIf=\"showData\">\r\n                        <thead class=\"flip-content bordered-purple\">\r\n                          <tr>\r\n                            <th>\r\n                              Staff #\r\n                            </th>\r\n                            <th>\r\n                              First Name\r\n                            </th>\r\n                            <th>\r\n                              Last Name\r\n                            </th>\r\n                            <th>\r\n                              Role\r\n                            </th>\r\n                            <th>\r\n                              Employee Status\r\n                            </th>\r\n                            <th>\r\n                              Login Status\r\n                            </th>\r\n                            <!-- <th>\r\n\r\n                            </th> -->\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let data of employeeData\">\r\n                            <td>\r\n                              {{data.employeeId}}\r\n                            </td>\r\n                            <td>\r\n                              {{data.firstName}}\r\n                            </td>\r\n                            <td>\r\n                              {{data.lastName}}\r\n                            </td>\r\n                            <td>\r\n                              {{data.role}}\r\n                            </td>\r\n                            <td>\r\n                              {{data.employeStatus}}\r\n                            </td>\r\n                            <td>\r\n                              <label>\r\n                                <input type=\"checkbox\" [(ngModel)]=\"data.checked\" data-md-icheck\r\n                                  (change)=\"sendDataToModal(data)\" data-toggle=\"modal\" data-target=\"#uncheckLogin\"\r\n                                  [disabled]=\"data.statusCheck\">\r\n                                <span class=\"text\"></span>\r\n                              </label>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                    <br>\r\n                    <div *ngIf=\"!showData\">\r\n                      <b class=\"noRecords\"> No Records Found </b>\r\n                    </div>\r\n                    <!-- <div>\r\n                            <ul class=\"pagination pagination-sm\">\r\n                              <li class=\"disabled\">\r\n                                <a>«</a>\r\n                              </li>\r\n                              <li class=\"active\">\r\n                                <a>1\r\n                                  <span class=\"sr-only\">(current)</span>\r\n                                </a>\r\n                              </li>\r\n                              <li>\r\n                                <a>2</a>\r\n                              </li>\r\n                              <li>\r\n                                <a>3</a>\r\n                              </li>\r\n                              <li>\r\n                                <a>4</a>\r\n                              </li>\r\n                              <li>\r\n                                <a>5</a>\r\n                              </li>\r\n                              <li>\r\n                                <a>»</a>\r\n                              </li>\r\n                            </ul>\r\n                          </div> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Body -->\r\n      <div id=\"uncheckLogin\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" style=\"margin-top: 6em;\"\r\n        [ngStyle]=\"{'display':displayFileModal}\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseHandled()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <div class=\"widget-header blue\">\r\n                <span class=\"widget-caption\"><b>Work Order Completion</b></span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n              Are you sure want to {{activeDeactiveLabel}} Login : &nbsp;\r\n              ?\r\n            </div>\r\n\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"statusToggle()\">Yes</button>\r\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"\r\n                (click)=\"dismissActiveLoginFunction()\">No</button>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div id=\"checkLogin\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" style=\"margin-top: 6em;\"\r\n        [ngStyle]=\"{'display':displayFileModal}\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseHandled()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <div class=\"widget-header blue\">\r\n                <span class=\"widget-caption\"><b>Work Order Completion</b></span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n              Are you sure want to Activate Login : &nbsp; ?\r\n            </div>\r\n\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"check()\">Yes</button>\r\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"onCloseHandled()\">No</button>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <!-- Update License --Confirmation --Popup  -->\r\n      <div id=\"confirmation\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\"\r\n        *ngIf=!showVanlynk>\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <div class=\"widget-header blue\">\r\n                <span class=\"widget-caption\"><b>UPDATE LICENSE CONFIRMATION</b></span>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <form>\r\n                  <br />\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"reasonLbl\">\r\n                          <b class=\"popup-text\">Are you sure update Required Licenses\r\n                            {{name}}</b>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <div class=\"col-lg-3\">\r\n                    </div>\r\n                    <div class=\"col-lg-3 button-center\">\r\n                      <a class=\"btn btn-blue\" data-toggle=\"modal\" data-target=\"#myModal5\" (click)=\"confirmationPopup()\">\r\n                        CONFIRM\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"col-lg-3 button-center\">\r\n                      <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\" (click)=\"onCancel()\"><i\r\n                          class=\"fa fa-times\"></i>\r\n                        CANCEL</button>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n      </div>\r\n      <!-- /Update License --Confirmation --Popup  -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/proz-subscription/enable-vanlynk/enable-vanlynk.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/proz-subscription/enable-vanlynk/enable-vanlynk.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;\r\n     border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-purple {\n  border-top: 1px solid #7e3794 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #7e3794;\n  border-right: 1px solid #7e3794;\n  border-bottom: 1px solid #7e3794;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.right {\n  text-align: right !important;\n  font-size: 15px !important;\n  font-weight: bold !important;\n  margin-left: 80% !important; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.well.with-footer {\n  padding-bottom: 10px !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei1zdWJzY3JpcHRpb24vZW5hYmxlLXZhbmx5bmsvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3otc3Vic2NyaXB0aW9uXFxlbmFibGUtdmFubHlua1xcZW5hYmxlLXZhbmx5bmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxlQUFlO0VBQ2Ysa0NBQWlDO0VBRWpDOzt5Q0FFb0M7RUFDcEMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7MEJBQ3NCLEVBRXhCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLHlDQUF3QyxFQUMzQzs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLCtCQUE4QjtFQUM5QixnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQ2pDLG9DQUFvQyxFQUN0Qzs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUVGO0VBQ0ssNkJBQTRCO0VBQzVCLDJCQUF5QjtFQUN6Qiw2QkFBMkI7RUFDM0IsNEJBQTBCLEVBRTdCOztBQUVEO0VBQ0csb0NBQW1DLEVBQ3RDOztBQUVEO0VBQ0ksZ0NBQStCLEVBQ2xDOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLHVCQUFzQjtFQUN0QixrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wcm96LXN1YnNjcmlwdGlvbi9lbmFibGUtdmFubHluay9lbmFibGUtdmFubHluay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXRpdGxleyAgICBcclxuICAgICBjb2xvcjogICM1ZGIyZmY7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNWRiMmZmO1xyXG4gXHJcbiAgICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7Ki9cclxuICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbiBcclxuIH1cclxuIFxyXG4gLm1hbmRhdG9yeXtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiB9XHJcbiBcclxuIC5oci1wdXJwbGV7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbiB9IFxyXG4gXHJcbiBpbnB1dHtcclxuICAgICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcbiBcclxuIC5tb2Nre1xyXG4gICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLm1vY2stY29uZntcclxuICAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmlucHJvZ3Jlc3N7XHJcbiAgICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAudGhyZWUtYm9yZGVyZWR7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjN2UzNzk0O1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3ZTM3OTQ7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3ZTM3OTQ7XHJcbiAgICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxuIH1cclxuIFxyXG4gLnRleHQtY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5idG4tZ3JheXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ibHVleyAgICBcclxuICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbi5yaWdodHtcclxuICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgIGZvbnQtc2l6ZToxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O1xyXG4gICAgIG1hcmdpbi1sZWZ0OjgwJSAhaW1wb3J0YW50O1xyXG5cclxuIH1cclxuXHJcbiAubW9kYWwtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2VsbC53aXRoLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmx1ZXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/proz-subscription/enable-vanlynk/enable-vanlynk.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/proz-subscription/enable-vanlynk/enable-vanlynk.component.ts ***!
  \******************************************************************************/
/*! exports provided: EnableVanlynkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnableVanlynkComponent", function() { return EnableVanlynkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EnableVanlynkComponent = /** @class */ (function () {
    function EnableVanlynkComponent(beyond, router, activatedRoute, http, formBuilder, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.name = '';
        this.prozDetailsData = [];
        this.employeeData = [];
        this.counter = 0;
        this.checkArray = [];
        this.modalDataHolder = {};
        this.totalFreeLicenses = 0;
        this.deactivationLoginSelectedCounter = 0;
        this.activeDeactiveLabel = 'Deactivate';
    }
    EnableVanlynkComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.getSubscriptions();
        this.listStaffs();
        this.listStaffFreeUsedProSubscriptions();
        this.listTotalStaffFreeUsedProSubscriptions();
        this.listActiveLogin();
        this.updateSubscription = this.formBuilder.group({
            vanylinkStatus: ['Enable', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            noOfLicenses: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    };
    EnableVanlynkComponent.prototype.updateButton = function () {
        $("#confirmation").modal("show");
    };
    EnableVanlynkComponent.prototype.confirmationPopup = function () {
        var _this = this;
        if (this.updateSubscription.value.noOfLicenses >= this.licenseData.numStaff) {
            var updateObj_1 = {
                "proCode": this.loginData.loginCode,
                "vanylinkStatus": "Enable",
                "noOfLicenses": '' + this.updateSubscription.value.noOfLicenses,
                "modifiedBy": this.loginData.emailId,
                "modifiedOn": new Date(),
                "date": new Date().toUTCString()
            };
            //console.log("ADD OBJ" + JSON.stringify(addObj))
            this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/updateLicenseVanyLinkSubscription', updateObj_1)
                .subscribe(function (data) {
                var employeeData = data.json();
                _this.eData = employeeData.response;
                console.log("rolesData" + JSON.stringify(employeeData));
                // $("#confirmation").modal("hide");
                _this.updateVanlynk(updateObj_1);
                // this.router.navigate(['/proz/listInventory'])
            }, function (error) {
                //console.log(error);// Error getting the data
            });
        }
        else {
            alert("you need to remove " + (this.activeLoginData.ActiveLogins - this.updateSubscription.value.noOfLicenses) + " active Logins before you reduce the Licenses");
        }
    };
    EnableVanlynkComponent.prototype.onCancel = function () {
        $("#confirmation").modal("hide");
    };
    EnableVanlynkComponent.prototype.updateVanlynk = function (OBJ) {
        var _this = this;
        console.log("Update 22::");
        //console.log(OBJ.date)
        var addObj = {
            "proCode": this.loginData.loginCode,
            "vanylinkStatus": 'Enable',
            "noOfLicenses": '' + this.updateSubscription.value.noOfLicenses,
            "modifiedBy": this.loginData.emailId,
            "date": '' + OBJ.date,
        };
        //console.log("ADD OBJ" + JSON.stringify(addObj))
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/updateVanyLinkSubscription', addObj)
            .subscribe(function (data) {
            var employeeData = data.json();
            console.log("rolesData" + JSON.stringify(employeeData));
            _this.updateLogin(OBJ);
        }, function (error) {
            //console.log(error);// Error getting the data
        });
    };
    EnableVanlynkComponent.prototype.updateLogin = function (OBJ) {
        var _this = this;
        console.log("Update 333::");
        var addObj = {
            "proCode": this.loginData.loginCode,
            "vanylinkStatus": this.updateSubscription.value.vanylinkStatus,
            "noOfLicenses": '' + this.updateSubscription.value.noOfLicenses,
            "modifiedBy": this.loginData.emailId,
            "date": '' + OBJ.date,
        };
        //console.log("ADD OBJ" + JSON.stringify(addObj))
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/updateLoginVanyLinkSubscription', addObj)
            .subscribe(function (data) {
            var employeeData = data.json();
            //console.log("rolesData" + JSON.stringify(employeeData))
            _this.toastr.success('Login Subscription Added Successfuly...');
            //console.log(this.updateSubscription.value.vanylinkStatus)
            if (_this.updateSubscription.value.vanylinkStatus == "Enable") {
                var vanlynk = "Y";
            }
            else {
                var vanlynk = "N";
            }
            _this.loginData.vanlynk = vanlynk;
            localStorage.setItem("login", JSON.stringify(_this.loginData));
            $("#confirmation").modal("hide");
            location.reload();
            // this.router.navigate(['/subscription/confirmVanlynk'])
            //console.log('role cahnged' + JSON.stringify(this.loginData))
        }, function (error) {
            //console.log(error);// Error getting the data
        });
    };
    EnableVanlynkComponent.prototype.getSubscriptions = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getVanylinkLicence/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.prozDetailsData = response.response;
                console.log("getsubscriptions", JSON.stringify(_this.prozDetailsData));
                console.log("noOflicenses", JSON.stringify(_this.prozDetailsData[0].noOfLicenses));
                // if (this.prozDetailsData[0].vanylinkStatus == "Disable") {
                //   this.updateSubscription.get('vanylinkStatus').setValue('Disable')
                // } else {
                //   this.updateSubscription.get('vanylinkStatus').setValue('Enable')
                // }
                _this.updateSubscription.get('noOfLicenses').setValue(_this.prozDetailsData[_this.prozDetailsData.length - 1].noOfLicenses);
                return false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    /* Get Active Staff Free Used Pro Subscriptions */
    EnableVanlynkComponent.prototype.listStaffFreeUsedProSubscriptions = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getActiveStaff/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                console.log("Active Staff licenses free,used" + JSON.stringify(response));
                _this.licenseData = response.response[0];
                _this.showData = true;
            }
            else {
                _this.showData = false;
                _this.toastr.warning('Failed to get Vanlynk licenses');
            }
        }, function (error) {
            console.log("No Vanlynk Licenses");
        });
    };
    /* /Get Active Staff Free Used Pro Subscriptions */
    /* Get Total Staff Free Used Pro Subscriptions */
    EnableVanlynkComponent.prototype.listTotalStaffFreeUsedProSubscriptions = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getTotalStaff/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                console.log("Total Staff licenses free,used" + JSON.stringify(response));
                _this.totalStaffData = response.response[0];
                _this.showData = true;
            }
            else {
                _this.showData = false;
                _this.toastr.warning('Failed to get Vanlynk licenses');
            }
        }, function (error) {
            console.log("Unable to connect to server");
        });
    };
    /* /Get Total Staff Free Used Pro Subscriptions */
    /* Get Total Staff Free Used Pro Subscriptions */
    EnableVanlynkComponent.prototype.listActiveLogin = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getActiveLogin/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                console.log("Total Staff licenses free,used" + JSON.stringify(response));
                _this.activeLoginData = response.response[0];
                _this.totalFreeLicenses = parseInt(_this.prozDetailsData[0].noOfLicenses) - parseInt(_this.activeLoginData.ActiveLogins);
                _this.showData = true;
            }
            else {
                _this.showData = false;
                _this.toastr.warning('Failed to get Vanlynk licenses');
            }
        }, function (error) {
            console.log("Unable to connect to server");
        });
    };
    /* /Get Total Staff Free Used Pro Subscriptions */
    /*List of Staff*/
    EnableVanlynkComponent.prototype.listStaffs = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/listEmployee/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.employeeData = response.response;
                console.log("Employee Data" + JSON.stringify(_this.employeeData));
                _this.employeeData.forEach(function (e) {
                    e.checked = false;
                    e.statusCheck = false;
                    if (e.status == 'ACTIVE') {
                        e.statusCheck = false;
                        e.checked = true;
                    }
                    else {
                        e.statusCheck = true;
                        e.checked = false;
                    }
                });
                _this.showData = true;
            }
            else {
                _this.showData = false;
            }
        }, function (error) {
            console.log("Unable to connect to server");
        });
    };
    EnableVanlynkComponent.prototype.cancel = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard', this.loginData.loginCode]);
    };
    EnableVanlynkComponent.prototype.sendDataToModal = function (data) {
        console.log(data);
        this.modalDataHolder = data;
        data.checked == false ? this.activeDeactiveLabel = 'Deactivate' : this.activeDeactiveLabel = 'Activate';
        data.checked == false ? data.status = "INACTIVE" : data.status = "ACTIVE";
    };
    EnableVanlynkComponent.prototype.dismissActiveLoginFunction = function () {
        var _this = this;
        console.log(this.modalDataHolder);
        var dataHolder;
        this.employeeData.forEach(function (e) {
            if (e.id == _this.modalDataHolder.id) {
                e.checked = !e.checked;
                dataHolder = e;
            }
        });
        // if (this.modalDataHolder.checked == dataHolder.checked) {
        //   this.totalFreeLicenses++
        //   this.deactivationLoginSelectedCounter++
        // } else {
        //   this.totalFreeLicenses--
        //   this.deactivationLoginSelectedCounter--
        // }
    };
    EnableVanlynkComponent.prototype.statusToggle = function () {
        console.log(this.employeeData);
        if (this.modalDataHolder.checked == false) {
            this.totalFreeLicenses++;
            this.deactivationLoginSelectedCounter++;
        }
        else {
            this.totalFreeLicenses--;
            this.deactivationLoginSelectedCounter--;
        }
    };
    EnableVanlynkComponent.prototype.apply = function () {
        console.log(this.checkArray);
    };
    EnableVanlynkComponent.prototype.check = function () {
        //alert("You are deactivating the user, Are you sure you want to continue")
        // this.activeLoginData.status = "INACTIVE";
        // data.status == 'INACTIVE';
        this.counter--; // counter is the varible    
        if (this.counter % 2 == 1) {
            this.checked = false; //checked is the variable
        }
        else {
            this.checked = true;
        }
    };
    EnableVanlynkComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    EnableVanlynkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"]],
            selector: 'app-enable-vanlynk',
            template: __webpack_require__(/*! ./enable-vanlynk.component.html */ "./src/app/proz-subscription/enable-vanlynk/enable-vanlynk.component.html"),
            styles: [__webpack_require__(/*! ./enable-vanlynk.component.scss */ "./src/app/proz-subscription/enable-vanlynk/enable-vanlynk.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], EnableVanlynkComponent);
    return EnableVanlynkComponent;
}());



/***/ }),

/***/ "./src/app/proz-subscription/proz-list-subscriptions/proz-list-subscriptions.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/proz-subscription/proz-list-subscriptions/proz-list-subscriptions.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home</a>\r\n      </li>\r\n      <li class=\"active\">Subscriptions</li>\r\n      <li class=\"active\"> VanLynk Subscriptions History</li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        VanLynk Subscriptions History\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- <h2 class=\"inprogress\"><b>LIVE SCREEN-V1.2-WORK IN PROGRESS</b></h2> -->\r\n  <div class=\"page-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\r\n        <button type=\"submit\" class=\"btn btn-blue\" (click)=\"newSubscripiton()\"><i class=\"fa fa-plus\"></i>\r\n          Add/Update VanLynk Subscription</button>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3\">\r\n        <button type=\"submit\" class=\"btn btn-success\" (click)=\"updateLicenses()\"><i class=\"fa fa-plus\"></i>\r\n          Update Licenses</button>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n      </div>\r\n    </div><br />\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n        <div class=\"well with-header with-footer three-bordered\">\r\n          <div class=\"header gray\">\r\n            List of VanLynk Subscriptions History - {{this.loginData.loginCode}}\r\n          </div>\r\n          <div class=\"widget-body\">\r\n            <div class=\"table-scrollable\">\r\n              <table class=\"table table-bordered table-striped table-condensed flip-content\" *ngIf=\"showData\">\r\n                <thead class=\"flip-content bordered-purple\">\r\n                  <tr>\r\n                    <!-- <th>\r\n                      S.No.\r\n                    </th> -->\r\n                    <th>\r\n                      Subscription Type\r\n                    </th>\r\n                    <th>\r\n                      Subscription Status\r\n                    </th>\r\n                    <th>\r\n                      Date\r\n                    </th>\r\n                    <th>\r\n                      No.of Licences\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let data of proData | paginate: { itemsPerPage: 5, currentPage: p }; let i = index\">\r\n                    <!-- <td>\r\n                      {{data.row}}\r\n                    </td> -->\r\n                    <td>\r\n                      {{data.subscriptionType}}\r\n                    </td>\r\n                    <!-- <td *ngIf=\"data.subscriptionStatus=='Disable'\">\r\n                      <label>DISABLED</label>\r\n                    </td>\r\n                    <td *ngIf=\"data.subscriptionStatus!='Disable'\">\r\n                      <label>ENABLED </label>\r\n                    </td> -->\r\n                    <td>\r\n                      {{data.subscriptionStatus}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.date}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.noOfLicenses}}\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <div class=\"row-fluid\" *ngIf=\"showData\">\r\n              <br>\r\n              <pagination-controls class=\"span10\" style=\"float:left\" (pageChange)=\"p = $event\"></pagination-controls>\r\n              <p class=\"span2\" style=\"float:right\">{{proData.length}} Records Found</p>\r\n            </div>\r\n            <div class=\"row-fluid\" *ngIf=\"!showData\">\r\n              <br />\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"col-lg-4\"></div>\r\n                <div class=\"col-lg-4\">\r\n                  <div class=\"span6\"><b style=\"font-size: 25px\">No Records\r\n                      Available</b></div>\r\n                  <div class=\"col-lg-4\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n          </div>\r\n          <br />\r\n          <br />\r\n          <div class=\"widget-body\">\r\n            <div class=\"table-scrollable\">\r\n              <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                <thead class=\"flip-content bordered-purple\">\r\n                  <tr>\r\n                    <th>\r\n                      Licenses Purchased\r\n                    </th>\r\n                    <th>\r\n                      Licenses Used (Active Logins)\r\n                    </th>\r\n                    <th>\r\n                      Licenses Free\r\n                    </th>\r\n                    <th>\r\n                      Total Staff\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>\r\n                      <p *ngIf=\"proDataStatus\">{{this.prozDetailsData[0].noOfLicenses}}</p>\r\n                    </td>\r\n                    <td>\r\n                      <p *ngIf=\"activeLoginDataStatus\">{{this.activeLoginData.ActiveLogins}}</p>\r\n                    </td>\r\n                    <td>\r\n                      <p *ngIf=\"proDataStatus\">{{this.prozDetailsData[0].noOfLicenses-this.activeLoginData.ActiveLogins}}</p>\r\n                    </td>\r\n                    <td>\r\n                      <p *ngIf=\"showData\">{{this.totalStaffData.totalStaff}}</p>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/proz-subscription/proz-list-subscriptions/proz-list-subscriptions.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/proz-subscription/proz-list-subscriptions/proz-list-subscriptions.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td, th {\n  text-align: center;\n  height: 2%;\n  /* font-size:10px; */\n  align-items: center;\n  word-wrap: break-word;\n  vertical-align: middle; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n    padding: 8px 0;\r\n    border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-purple {\n  border-top: 1px solid #7e3794 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #7e3794;\n  border-right: 1px solid #7e3794;\n  border-bottom: 1px solid #7e3794;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei1zdWJzY3JpcHRpb24vcHJvei1saXN0LXN1YnNjcmlwdGlvbnMvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3otc3Vic2NyaXB0aW9uXFxwcm96LWxpc3Qtc3Vic2NyaXB0aW9uc1xccHJvei1saXN0LXN1YnNjcmlwdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxtQkFBaUI7RUFDakIsV0FBUztFQUNULHFCQUFxQjtFQUNyQixvQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLHVCQUFzQixFQUN6Qjs7QUFDRDtFQUNHLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7O3dDQUVvQztFQUNwQyxnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjt5QkFDc0IsRUFFeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0kseUNBQXdDLEVBQzNDOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksK0JBQThCO0VBQzlCLGdDQUErQjtFQUMvQixpQ0FBZ0M7RUFDakMsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkMiLCJmaWxlIjoic3JjL2FwcC9wcm96LXN1YnNjcmlwdGlvbi9wcm96LWxpc3Qtc3Vic2NyaXB0aW9ucy9wcm96LWxpc3Qtc3Vic2NyaXB0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0ZCx0aHtcclxuICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICBoZWlnaHQ6MiU7XHJcbiAgICAgLyogZm9udC1zaXplOjEwcHg7ICovXHJcbiAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gfVxyXG4gLmZvcm0tdGl0bGV7ICAgIFxyXG4gICAgY29sb3I6ICAjNWRiMmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNWRiMmZmO1xyXG5cclxuICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzdlMzc5NDsqL1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG5cclxufVxyXG5cclxuLm1hbmRhdG9yeXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5oci1wdXJwbGV7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZTM3OTQgIWltcG9ydGFudDtcclxufSBcclxuXHJcbmlucHV0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubW9ja3tcclxuICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9jay1jb25me1xyXG4gICAgY29sb3I6IGdyZWVuOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHJvZ3Jlc3N7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRocmVlLWJvcmRlcmVke1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjN2UzNzk0O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzdlMzc5NDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjN2UzNzk0O1xyXG4gICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxufVxyXG5cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2hlY2tib3gtY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JheXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWJsdWV7ICAgIFxyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/proz-subscription/proz-list-subscriptions/proz-list-subscriptions.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/proz-subscription/proz-list-subscriptions/proz-list-subscriptions.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ProzListSubscriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzListSubscriptionsComponent", function() { return ProzListSubscriptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ProzListSubscriptionsComponent = /** @class */ (function () {
    function ProzListSubscriptionsComponent(beyond, router, formBuilder, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.prozDetailsData = [];
        this.proDataStatus = false;
        this.activeLoginDataStatus = false;
    }
    ;
    ProzListSubscriptionsComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        console.log("loginData" + JSON.stringify(this.loginData.loginCode));
        this.listProSubscriptions(this.loginData.loginCode);
        this.listTotalStaffFreeUsedProSubscriptions(this.loginData.loginCode);
        this.listActiveLogin();
    };
    ProzListSubscriptionsComponent.prototype.listProSubscriptions = function (proCode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getTotalSubscriptions/' + proCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                console.log("employee Details" + JSON.stringify(response));
                _this.proData = response.response;
            }
            else {
                _this.toastr.warning('No Total Subscriptions Found');
            }
        }, function (error) {
            console.log("Unable to connect to server");
        });
    };
    /* Get Staff Free Used Pro Subscriptions */
    // listStaffFreeUsedProSubscriptions(proCode) {
    //   var headers = new Headers();
    //   headers.append("Accept", 'application/json');
    //   headers.append('Content-Type', 'application/json');
    //   let options = new RequestOptions({ headers: headers });
    //   this.http.get(Global.url + '/getTotalStaff/' + proCode, options)
    //     .subscribe(data => {
    //       var response = data.json();
    //       if (response.status == 200) {
    //         console.log("Staff licenses free,used" + JSON.stringify(response))
    //         this.licenseData = response.response;
    //         this.showLicenseData = true;
    //         this.getSubscriptions()
    //       }
    //       else {
    //         this.showLicenseData = false;
    //         this.toastr.warning('No Licenses Found')
    //       }
    //     }, error => {
    //       console.log("Unable to connect to server");
    //     })
    // }
    /* /Get Staff Free Used Pro Subscriptions */
    /* Get Total Staff Free Used Pro Subscriptions */
    ProzListSubscriptionsComponent.prototype.listTotalStaffFreeUsedProSubscriptions = function (proCode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getTotalStaff/' + proCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                console.log("Total Staff licenses free,used" + JSON.stringify(response));
                _this.totalStaffData = response.response[0];
                _this.getSubscriptions();
                _this.showLicenseData = true;
                _this.showData = true;
                _this.getSubscriptions();
            }
            else {
                _this.showLicenseData = false;
                _this.showData = false;
                _this.toastr.warning('Failed to get Vanlynk licenses');
            }
        }, function (error) {
            console.log("Unable to connect to server");
        });
    };
    /* /Get Total Staff Free Used Pro Subscriptions */
    /* Get Total Staff Free Used Pro Subscriptions */
    ProzListSubscriptionsComponent.prototype.listActiveLogin = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getActiveLogin/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                console.log("Total Staff licenses free,used" + JSON.stringify(response));
                _this.activeLoginData = response.response[0];
                _this.activeLoginDataStatus = true;
            }
            else {
                _this.activeLoginDataStatus = false;
                _this.toastr.warning('Failed to get Vanlynk licenses');
            }
        }, function (error) {
            console.log("Unable to connect to server");
        });
    };
    /* /Get Total Staff Free Used Pro Subscriptions */
    ProzListSubscriptionsComponent.prototype.newSubscripiton = function () {
        this.router.navigate(['/subscription/prozsubscription']);
    };
    ProzListSubscriptionsComponent.prototype.updateLicenses = function () {
        this.router.navigate(['/subscription/enableVanlynkData']);
    };
    ProzListSubscriptionsComponent.prototype.getSubscriptions = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getVanylinkLicence/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.prozDetailsData = response.response;
                _this.proDataStatus = true;
                _this.proData.forEach(function (e, i) {
                    _this.prozDetailsData.forEach(function (f, j) {
                        var d1 = new Date(e.date).getTime();
                        var d2 = new Date(f.date).getTime();
                        //     e.row = i + 1
                        // if (e.date == f.date && e.subscriptionType == "VANLYNK") {
                        //   e.noOfLicenses = f.noOfLicenses
                        // }
                        // if
                        //   (this.prozDetailsData.subscriptionType == "LEADGEN") {
                        //   this.prozDetailsData.noOfLicenses = "NA"
                        // }
                        // else {
                        // }
                        if (e.subscriptionType == "LEADGEN") {
                            e.noOfLicenses = "NA";
                        }
                        else {
                        }
                        return false;
                    });
                }, function (error) {
                    _this.toastr.warning('Unable to connect to server');
                });
            }
        });
    };
    ProzListSubscriptionsComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    ProzListSubscriptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-proz-list-subscriptions',
            template: __webpack_require__(/*! ./proz-list-subscriptions.component.html */ "./src/app/proz-subscription/proz-list-subscriptions/proz-list-subscriptions.component.html"),
            styles: [__webpack_require__(/*! ./proz-list-subscriptions.component.scss */ "./src/app/proz-subscription/proz-list-subscriptions/proz-list-subscriptions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ProzListSubscriptionsComponent);
    return ProzListSubscriptionsComponent;
}());



/***/ }),

/***/ "./src/app/proz-subscription/proz-subscription-layout/proz-subscription-layout.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/proz-subscription/proz-subscription-layout/proz-subscription-layout.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/proz-subscription/proz-subscription-layout/proz-subscription-layout.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/proz-subscription/proz-subscription-layout/proz-subscription-layout.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3otc3Vic2NyaXB0aW9uL3Byb3otc3Vic2NyaXB0aW9uLWxheW91dC9wcm96LXN1YnNjcmlwdGlvbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/proz-subscription/proz-subscription-layout/proz-subscription-layout.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/proz-subscription/proz-subscription-layout/proz-subscription-layout.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ProzSubscriptionLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzSubscriptionLayoutComponent", function() { return ProzSubscriptionLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProzSubscriptionLayoutComponent = /** @class */ (function () {
    function ProzSubscriptionLayoutComponent() {
    }
    ProzSubscriptionLayoutComponent.prototype.ngOnInit = function () {
    };
    ProzSubscriptionLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proz-subscription-layout',
            template: __webpack_require__(/*! ./proz-subscription-layout.component.html */ "./src/app/proz-subscription/proz-subscription-layout/proz-subscription-layout.component.html"),
            styles: [__webpack_require__(/*! ./proz-subscription-layout.component.scss */ "./src/app/proz-subscription/proz-subscription-layout/proz-subscription-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProzSubscriptionLayoutComponent);
    return ProzSubscriptionLayoutComponent;
}());



/***/ }),

/***/ "./src/app/proz-subscription/proz-subscription-payment-history/proz-subscription-payment-history.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/proz-subscription/proz-subscription-payment-history/proz-subscription-payment-history.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home</a>\r\n      </li>\r\n      <li class=\"active\">Subscription</li>\r\n      <li class=\"active\">Payment History</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        Payment History\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n    <div class=\"row\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"widget\">\r\n            <div class=\"widget-header with-footer header gray\">\r\n              <span class=\"widget-caption\">Payment History</span>\r\n            </div>\r\n            <div class=\"widget-body\">\r\n              <div class=\"table-scrollable\">\r\n                <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                  <thead class=\"flip-content bordered-palegreen\">\r\n                    <tr>\r\n                      <th>\r\n                        Subscription Type\r\n                      </th>\r\n                      <th>\r\n\r\n                      </th>\r\n                      <th>\r\n\r\n                      </th>\r\n                      <th>\r\n                          <select class=\"form-control\">\r\n                            <option value=\"ALL\">All</option>\r\n                            <option value=\"VANLYNK\">VANLYNK</option>\r\n                            <option value=\"LEADGEN\">LEADGEN</option>\r\n                          </select>\r\n                      </th>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>\r\n                        Payment Date\r\n                      </th>\r\n                      <th>\r\n                        Receipt\r\n                      </th>\r\n                      <th>\r\n                        Amount\r\n                      </th>\r\n                      <th>\r\n                        Subscription Type\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td class=\"item\">{{date}}</td>\r\n                      <td class=\"item\" (click)=\"generatePDF()\"\r\n                        style=\"text-decoration: underline;color: blue;cursor:pointer;\">Vanlynk_Receipt_{{date}}.pdf</td>\r\n                      <td class=\"item\">$96.00 USD</td>\r\n                      <td class=\"item\">LEADGEN</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td class=\"item\">{{date}}</td>\r\n                      <td class=\"item\" (click)=\"generatePDF()\"\r\n                        style=\"text-decoration: underline;color: blue;cursor:pointer;\">Vanlynk_Receipt_{{date}}.pdf</td>\r\n                      <td class=\"item\">$100.00 USD</td>\r\n                      <td class=\"item\">VANLYNK</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!-- <br />\r\n              <div *ngIf=\"!showData\">\r\n                No Records Found\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/proz-subscription/proz-subscription-payment-history/proz-subscription-payment-history.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/proz-subscription/proz-subscription-payment-history/proz-subscription-payment-history.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".databox .databox-text {\n  display: block;\n  font-size: 11px;\n  margin: 4px 0 2px;\n  position: relative;\n  width: 100px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.hr-gray-lg {\n  border-top: 1px solid gray !important; }\n\n.hr-gray {\n  border-top: 1px solid gray !important; }\n\n.item {\n  text-align: center; }\n\n.static {\n  color: red; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;\r\n     border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.static {\n  color: red;\n  font-weight: bold; }\n\n.status-active {\n  color: #00FF00;\n  font-weight: bold; }\n\n.status-inactive {\n  color: #FF0000;\n  font-weight: bold; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n/* LIST MODE */\n\n.center {\n  text-align: center; }\n\n.item {\n  text-align: center; }\n\n/* /LIST MODE */\n\n/* VIEW MODE */\n\n.form-title {\n  color: #5DB2FF;\n  /*display: block;\r\n     padding: 8px 0;*/\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\n.button-center {\n  text-align: center; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.well.with-footer {\n  padding-bottom: 10px !important; }\n\n/* /VIEW MODE */\n\n.static {\n  color: red;\n  font-weight: bold; }\n\n.noRecords {\n  color: blue;\n  font-weight: bold;\n  font-size: 12px; }\n\n.popup-text {\n  color: black;\n  font-weight: bold;\n  font-size: 14px; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;\r\n     border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.alert-heading {\n  font-size: 12px; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.mandatory {\n  color: #FF0000;\n  font-size: 12px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei1zdWJzY3JpcHRpb24vcHJvei1zdWJzY3JpcHRpb24tcGF5bWVudC1oaXN0b3J5L0Q6XFxUb3Bwcm96XFxUb3BQcm96X0FkdmFuY2VfQ2xpZW50L3NyY1xcYXBwXFxwcm96LXN1YnNjcmlwdGlvblxccHJvei1zdWJzY3JpcHRpb24tcGF5bWVudC1oaXN0b3J5XFxwcm96LXN1YnNjcmlwdGlvbi1wYXltZW50LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFDSSxzQ0FBcUMsRUFFeEM7O0FBQ0Q7RUFDSSxzQ0FBcUMsRUFFeEM7O0FBRUQ7RUFDSSxtQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxXQUFVLEVBRWI7O0FBQ0Q7RUFDSSxlQUFlO0VBQ2Ysa0NBQWlDO0VBRWpDOzt5Q0FFb0M7RUFDcEMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7MEJBQ3NCLEVBRXhCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLHNDQUFxQyxFQUN4Qzs7QUFFRDtFQUNJLHNDQUFxQyxFQUV4Qzs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzlCLG9DQUFvQyxFQUN0Qzs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUNEO0VBQ0ksMEJBQXlCO0VBQ3pCLGtDQUFpQztFQUNqQyw0Q0FBMkMsRUFDOUM7O0FBRUQ7RUFDSSx1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsa0NBQWlDO0VBQ2pDLDRDQUEyQyxFQUM5Qzs7QUFFRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLFdBQVM7RUFDVCxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksZUFBYztFQUNkLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM5QixvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUNELGVBQWU7O0FBQ2Y7RUFDSyxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBaUIsRUFDcEI7O0FBQ0QsZ0JBQWdCOztBQUdqQixlQUFlOztBQUNkO0VBQ0csZUFBZTtFQUNmO3NCQUNpQjtFQUNqQixrQ0FBaUM7RUFDakMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7MEJBQ3NCLEVBQ3hCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLHNDQUFxQyxFQUN4Qzs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzlCLG9DQUFvQyxFQUN0Qzs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQyx1QkFBc0I7RUFDdEIsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxvQ0FBbUMsRUFDdEM7O0FBRUQ7RUFDSSxnQ0FBK0IsRUFDbEM7O0FBQ0QsZ0JBQWdCOztBQUNoQjtFQUNJLFdBQVM7RUFDVCxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxZQUFVO0VBQ1Ysa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksYUFBVztFQUNYLGtCQUFpQjtFQUNqQixnQkFBZSxFQUVsQjs7QUFDRDtFQUNJLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7O3lDQUVvQztFQUNwQyxnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjswQkFDc0IsRUFFeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksc0NBQXFDLEVBRXhDOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDRyxnQkFBZSxFQUNqQjs7QUFDRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2Qzs7QUFDRDtFQUNJLDBCQUF5QjtFQUN6QixrQ0FBaUM7RUFDakMsNENBQTJDLEVBQzlDOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLGtDQUFpQztFQUNqQyw0Q0FBMkMsRUFDOUM7O0FBRUQ7RUFDSSwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFFSSxlQUFjO0VBQ2QsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wcm96LXN1YnNjcmlwdGlvbi9wcm96LXN1YnNjcmlwdGlvbi1wYXltZW50LWhpc3RvcnkvcHJvei1zdWJzY3JpcHRpb24tcGF5bWVudC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGFib3ggLmRhdGFib3gtdGV4dCB7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgIG1hcmdpbjogNHB4IDAgMnB4O1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmhyLWdyYXktbGd7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZTM3OTQgIWltcG9ydGFudDtcclxuIH0gXHJcbiAuaHItZ3JheXsgICAgXHJcbiAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDtcclxuICAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgIzdlMzc5NCAhaW1wb3J0YW50O1xyXG4gfSBcclxuIFxyXG4gLml0ZW17XHJcbiAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5zdGF0aWN7XHJcbiAgICAgY29sb3I6IHJlZDtcclxuIFxyXG4gfVxyXG4gLmZvcm0tdGl0bGV7ICAgIFxyXG4gICAgIGNvbG9yOiAgIzVkYjJmZjtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1ZGIyZmY7XHJcbiBcclxuICAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzdlMzc5NDsqL1xyXG4gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuIFxyXG4gfVxyXG4gXHJcbiAubWFuZGF0b3J5e1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuIH1cclxuIFxyXG4gLmhyLWdyYXktdGhpY2t7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbiB9IFxyXG4gXHJcbiAuaHItZ3JheXsgICAgXHJcbiAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuICAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgIzdlMzc5NCAhaW1wb3J0YW50O1xyXG4gfSBcclxuIFxyXG4gaW5wdXR7XHJcbiAgICAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG4gXHJcbiAubW9ja3tcclxuICAgICBjb2xvcjogcmVkOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5tb2NrLWNvbmZ7XHJcbiAgICAgY29sb3I6IGdyZWVuOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5pbnByb2dyZXNze1xyXG4gICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLnRocmVlLWJvcmRlcmVke1xyXG4gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbiB9XHJcbiBcclxuIC50ZXh0LWNlbnRlcntcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5jaGVja2JveC1jZW50ZXIge1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnRuLWdyYXl7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5idG4tYmx1ZXsgICAgXHJcbiAgICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlLmNvbGxhcHNlZCB7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZTpob3ZlcjphZnRlciB7XHJcbiAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZSB7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZTphZnRlciB7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLnN0YXRpY3tcclxuICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiAuc3RhdHVzLWFjdGl2ZXtcclxuICAgICBjb2xvcjogIzAwRkYwMDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuIFxyXG4gLnN0YXR1cy1pbmFjdGl2ZXtcclxuICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuIFxyXG4gLmlucHJvZ3Jlc3N7XHJcbiAgICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAudGhyZWUtYm9yZGVyZWR7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxuIH1cclxuIFxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLyogTElTVCBNT0RFICovXHJcbiAuY2VudGVye1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSBcclxuIFxyXG4gIC5pdGVte1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICB9XHJcbiAgLyogL0xJU1QgTU9ERSAqL1xyXG4gXHJcbiBcclxuIC8qIFZJRVcgTU9ERSAqL1xyXG4gIC5mb3JtLXRpdGxle1xyXG4gICAgIGNvbG9yOiAgIzVEQjJGRjtcclxuICAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIHBhZGRpbmc6IDhweCAwOyovXHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNURCMkZGO1xyXG4gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuIH1cclxuIFxyXG4gLm1hbmRhdG9yeXtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiB9XHJcbiBcclxuIC5oci1ncmF5eyAgICBcclxuICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gfSBcclxuIFxyXG4gLmJ1dHRvbi1jZW50ZXJ7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiBpbnB1dHtcclxuICAgICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcbiBcclxuIC5tb2Nre1xyXG4gICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLm1vY2stY29uZntcclxuICAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmlucHJvZ3Jlc3N7XHJcbiAgICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAudGhyZWUtYm9yZGVyZWR7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxuIH1cclxuIFxyXG4gLnRleHQtY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5ibHVleyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ncmF5e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnRuLWJsdWV7ICAgIFxyXG4gICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAubW9kYWwtaGVhZGVyIHtcclxuICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLndlbGwud2l0aC1mb290ZXIge1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAvKiAvVklFVyBNT0RFICovXHJcbiAuc3RhdGlje1xyXG4gICAgIGNvbG9yOnJlZDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuIC5ub1JlY29yZHN7XHJcbiAgICAgY29sb3I6Ymx1ZTtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcbiAucG9wdXAtdGV4dHtcclxuICAgICBjb2xvcjpibGFjaztcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiBcclxuIH1cclxuIC5mb3JtLXRpdGxleyAgICBcclxuICAgICBjb2xvcjogICM1ZGIyZmY7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNWRiMmZmO1xyXG4gXHJcbiAgICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7Ki9cclxuICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbiBcclxuIH1cclxuIFxyXG4gLm1hbmRhdG9yeXtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiB9XHJcbiBcclxuIC5oci1ncmF5LXRoaWNreyAgICBcclxuICAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gfSBcclxuIFxyXG4gLmhyLWdyYXl7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZTM3OTQgIWltcG9ydGFudDtcclxuIH0gXHJcbiBcclxuIGlucHV0e1xyXG4gICAgIGNvbG9yOiBibGFjaztcclxuIH1cclxuIFxyXG4gLm1vY2t7XHJcbiAgICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAubW9jay1jb25me1xyXG4gICAgIGNvbG9yOiBncmVlbjsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuaW5wcm9ncmVzc3tcclxuICAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC50aHJlZS1ib3JkZXJlZHtcclxuICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG4gfVxyXG4gXHJcbiAudGV4dC1jZW50ZXJ7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuY2hlY2tib3gtY2VudGVyIHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiAuYWxlcnQtaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuIH1cclxuIC5ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ncmF5e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnRuLWJsdWV7ICAgIFxyXG4gICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZS5jb2xsYXBzZWQge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6aG92ZXI6YWZ0ZXIge1xyXG4gICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAubWFuZGF0b3J5e1xyXG4gICAgXHJcbiAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/proz-subscription/proz-subscription-payment-history/proz-subscription-payment-history.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/proz-subscription/proz-subscription-payment-history/proz-subscription-payment-history.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ProzSubscriptionPaymentHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzSubscriptionPaymentHistoryComponent", function() { return ProzSubscriptionPaymentHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/config */ "./src/global/config.ts");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _utilities_pdfmake_script_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/pdfmake.script.service */ "./src/utilities/pdfmake.script.service.ts");






var ProzSubscriptionPaymentHistoryComponent = /** @class */ (function () {
    function ProzSubscriptionPaymentHistoryComponent(beyond, router, pdfMakeService) {
        this.beyond = beyond;
        this.router = router;
        this.pdfMakeService = pdfMakeService;
        this.date = _global_config__WEBPACK_IMPORTED_MODULE_3__["Utility"].year + "-" + _global_config__WEBPACK_IMPORTED_MODULE_3__["Utility"].month + "-" + _global_config__WEBPACK_IMPORTED_MODULE_3__["Utility"].day;
        this.pdfMakeService.load('pdfMake', 'vfsFonts');
    }
    ProzSubscriptionPaymentHistoryComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
    };
    //HOME
    ProzSubscriptionPaymentHistoryComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    //HOME
    //GENERATE SUBSCRIPTION RECEIPT
    ProzSubscriptionPaymentHistoryComponent.prototype.generatePDF = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var image, documentDefinition;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _global_config__WEBPACK_IMPORTED_MODULE_3__["Utility"].image2Base64('../../../assets/img/topproz_logo_blue.jpg')];
                    case 1:
                        image = _a.sent();
                        documentDefinition = this.getDocumentDefinition(image);
                        pdfMake.createPdf(documentDefinition).download("vanlynk_receipt_" + _global_config__WEBPACK_IMPORTED_MODULE_3__["Utility"].year + "-" + _global_config__WEBPACK_IMPORTED_MODULE_3__["Utility"].month + "-" + _global_config__WEBPACK_IMPORTED_MODULE_3__["Utility"].day + ".pdf");
                        return [2 /*return*/];
                }
            });
        });
    };
    //GENERATE SUBSCRIPTION RECEIPT
    //GET DOCUMENT DEFINATION
    ProzSubscriptionPaymentHistoryComponent.prototype.getDocumentDefinition = function (image) {
        return {
            // a string or { width: number, height: number }
            pageSize: { width: 200, height: 500 },
            pageMargins: [40, 20, 40, 0],
            content: [
                {
                    image: image,
                    width: 80,
                    height: 30,
                    alignment: 'left',
                    margin: [-20, 0, 0, 10]
                },
                {
                    text: 'Receipt for Vanlynk Subscription',
                    bold: true,
                    fontSize: 8,
                    alignment: 'left',
                    margin: [-15, 5, 0, 10]
                },
                {
                    text: 'Client Account',
                    style: 'leftHeader'
                },
                {
                    text: 'Payment Date',
                    style: 'rightHeader'
                },
                {
                    text: 'Topproz',
                    style: 'left'
                },
                {
                    text: this.date,
                    style: 'right'
                },
                {
                    text: 'Company Name',
                    style: 'leftContent'
                },
                {
                    text: 'SunKPO Inc.',
                    style: 'rightContent'
                },
                {
                    text: 'Address',
                    style: 'leftContent'
                },
                {
                    text: '63 Summer Hill,Ct',
                    style: 'rightContent'
                },
                {
                    text: 'City',
                    style: 'leftContent'
                },
                {
                    text: 'Danville',
                    style: 'rightContent'
                },
                {
                    text: 'State',
                    style: 'leftContent'
                },
                {
                    text: 'CA',
                    style: 'rightContent'
                },
                {
                    text: 'Postal Code',
                    style: 'leftContent'
                },
                {
                    text: '94526',
                    style: 'rightContent'
                },
                {
                    text: 'Country',
                    style: 'leftContent'
                },
                {
                    text: 'United States',
                    style: 'rightContent'
                },
                {
                    text: 'Transaction ID:',
                    style: 'leftTransaction'
                },
                {
                    text: 'BADP3FA145C1',
                    style: 'rightTransaction'
                },
                {
                    text: 'Invoice Number:',
                    style: 'leftTransaction'
                },
                {
                    text: '5081534',
                    style: 'rightTransaction'
                },
                {
                    text: 'Plan:',
                    style: 'leftTransaction'
                },
                {
                    text: 'Business',
                    style: 'rightTransaction'
                },
                {
                    text: 'Plan Term:',
                    style: 'leftTransaction'
                },
                {
                    text: 'Monthly',
                    style: 'rightTransaction'
                },
                {
                    text: 'Bill To Name:',
                    style: 'leftTransaction'
                },
                {
                    text: 'Vishal',
                    style: 'rightTransaction'
                },
                {
                    text: 'Bill To Account Number:',
                    style: 'leftTransaction'
                },
                {
                    text: '*******4444',
                    style: 'rightTransaction'
                },
                {
                    text: 'Plan Amount:',
                    style: 'leftTransaction'
                },
                {
                    text: '$ 96.00 USD',
                    style: 'rightTransaction'
                },
                {
                    text: 'Tax Amount:',
                    style: 'leftTransaction'
                },
                {
                    text: '$ 0.00 USD',
                    style: 'rightTransaction'
                },
                {
                    text: 'Total Payment:',
                    style: 'leftTransaction'
                },
                {
                    text: '$ 96.00 USD',
                    style: 'rightTransaction'
                },
                {
                    text: 'Status:',
                    style: 'leftTransaction'
                },
                {
                    text: 'PAID',
                    style: 'rightTransaction'
                },
                {
                    text: 'Thanks for choosing Topproz',
                    style: 'leftStatement'
                },
                {
                    text: 'Questions about this receipt ? Email billing@topproz.com',
                    style: 'leftEnd'
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 20, 0, 10],
                    decoration: 'underline'
                },
                name: {
                    fontSize: 16,
                    bold: true
                },
                jobTitle: {
                    fontSize: 14,
                    bold: true,
                    italics: true
                },
                leftHeader: {
                    margin: [-15, 5, 0, 0],
                    alignment: 'left',
                    fontSize: 6,
                    bold: true
                },
                rightHeader: {
                    margin: [0, -7.5, -15, 0],
                    alignment: 'right',
                    fontSize: 6,
                    bold: true
                },
                left: {
                    margin: [-15, 5, 0, 0],
                    alignment: 'left',
                    fontSize: 6,
                },
                right: {
                    margin: [0, -7.5, -15, 0],
                    alignment: 'right',
                    fontSize: 6
                },
                leftContent: {
                    margin: [-15, 5, 0, 0],
                    alignment: 'left',
                    fontSize: 6,
                    bold: true
                },
                rightContent: {
                    margin: [0, -7.5, -15, 0],
                    alignment: 'right',
                    fontSize: 6
                },
                leftTransaction: {
                    margin: [-15, 4, 0, 0],
                    alignment: 'left',
                    fontSize: 6,
                    bold: true
                },
                rightTransaction: {
                    margin: [0, -6.5, -15, 0],
                    alignment: 'right',
                    fontSize: 6
                },
                leftStatement: {
                    margin: [-15, 15, 0, 0],
                    alignment: 'left',
                    fontSize: 5.5
                },
                leftEnd: {
                    margin: [-15, 6.5, 0, 0],
                    alignment: 'left',
                    fontSize: 5.5
                },
                tableHeader: {
                    fontSize: 8,
                    margin: [0, 0, 0, 0],
                }
            }
        };
    };
    ProzSubscriptionPaymentHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_4__["Beyond"]],
            selector: 'app-proz-subscription-payment-history',
            template: __webpack_require__(/*! ./proz-subscription-payment-history.component.html */ "./src/app/proz-subscription/proz-subscription-payment-history/proz-subscription-payment-history.component.html"),
            styles: [__webpack_require__(/*! ./proz-subscription-payment-history.component.scss */ "./src/app/proz-subscription/proz-subscription-payment-history/proz-subscription-payment-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_4__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _utilities_pdfmake_script_service__WEBPACK_IMPORTED_MODULE_5__["ScriptService"]])
    ], ProzSubscriptionPaymentHistoryComponent);
    return ProzSubscriptionPaymentHistoryComponent;
}());



/***/ }),

/***/ "./src/app/proz-subscription/proz-subscription-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/proz-subscription/proz-subscription-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProzSubscriptionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzSubscriptionRoutingModule", function() { return ProzSubscriptionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _proz_subscription_layout_proz_subscription_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proz-subscription-layout/proz-subscription-layout.component */ "./src/app/proz-subscription/proz-subscription-layout/proz-subscription-layout.component.ts");
/* harmony import */ var _enable_vanlynk_enable_vanlynk_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enable-vanlynk/enable-vanlynk.component */ "./src/app/proz-subscription/enable-vanlynk/enable-vanlynk.component.ts");
/* harmony import */ var _proz_list_subscriptions_proz_list_subscriptions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proz-list-subscriptions/proz-list-subscriptions.component */ "./src/app/proz-subscription/proz-list-subscriptions/proz-list-subscriptions.component.ts");
/* harmony import */ var _proz_subscriptions_proz_subscriptions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proz-subscriptions/proz-subscriptions.component */ "./src/app/proz-subscription/proz-subscriptions/proz-subscriptions.component.ts");
/* harmony import */ var _van_lynk_confimation_van_lynk_confimation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./van-lynk-confimation/van-lynk-confimation.component */ "./src/app/proz-subscription/van-lynk-confimation/van-lynk-confimation.component.ts");
/* harmony import */ var _proz_subscription_payment_history_proz_subscription_payment_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proz-subscription-payment-history/proz-subscription-payment-history.component */ "./src/app/proz-subscription/proz-subscription-payment-history/proz-subscription-payment-history.component.ts");









var routes = [{
        path: '', component: _proz_subscription_layout_proz_subscription_layout_component__WEBPACK_IMPORTED_MODULE_3__["ProzSubscriptionLayoutComponent"],
        children: [
            {
                path: 'prozsubscription',
                component: _proz_subscriptions_proz_subscriptions_component__WEBPACK_IMPORTED_MODULE_6__["ProzSubscriptionsComponent"]
            },
            {
                path: 'listProSubscriptions',
                component: _proz_list_subscriptions_proz_list_subscriptions_component__WEBPACK_IMPORTED_MODULE_5__["ProzListSubscriptionsComponent"]
            },
            {
                path: 'enableVanlynkData',
                component: _enable_vanlynk_enable_vanlynk_component__WEBPACK_IMPORTED_MODULE_4__["EnableVanlynkComponent"]
            },
            {
                path: 'confirmVanlynk',
                component: _van_lynk_confimation_van_lynk_confimation_component__WEBPACK_IMPORTED_MODULE_7__["VanLynkConfimationComponent"]
            },
            {
                path: 'paymentHistory/:proCode',
                component: _proz_subscription_payment_history_proz_subscription_payment_history_component__WEBPACK_IMPORTED_MODULE_8__["ProzSubscriptionPaymentHistoryComponent"]
            },
        ]
    }
];
var ProzSubscriptionRoutingModule = /** @class */ (function () {
    function ProzSubscriptionRoutingModule() {
    }
    ProzSubscriptionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProzSubscriptionRoutingModule);
    return ProzSubscriptionRoutingModule;
}());



/***/ }),

/***/ "./src/app/proz-subscription/proz-subscription.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/proz-subscription/proz-subscription.module.ts ***!
  \***************************************************************/
/*! exports provided: ProzSubscriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzSubscriptionModule", function() { return ProzSubscriptionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _proz_subscription_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proz-subscription-routing.module */ "./src/app/proz-subscription/proz-subscription-routing.module.ts");
/* harmony import */ var _proz_subscription_layout_proz_subscription_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proz-subscription-layout/proz-subscription-layout.component */ "./src/app/proz-subscription/proz-subscription-layout/proz-subscription-layout.component.ts");
/* harmony import */ var _proz_subscriptions_proz_subscriptions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proz-subscriptions/proz-subscriptions.component */ "./src/app/proz-subscription/proz-subscriptions/proz-subscriptions.component.ts");
/* harmony import */ var _proz_list_subscriptions_proz_list_subscriptions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proz-list-subscriptions/proz-list-subscriptions.component */ "./src/app/proz-subscription/proz-list-subscriptions/proz-list-subscriptions.component.ts");
/* harmony import */ var _enable_vanlynk_enable_vanlynk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enable-vanlynk/enable-vanlynk.component */ "./src/app/proz-subscription/enable-vanlynk/enable-vanlynk.component.ts");
/* harmony import */ var _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/prozadmin-sidemenu/proz-sidemenu.module */ "./src/app/common/prozadmin-sidemenu/proz-sidemenu.module.ts");
/* harmony import */ var _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/commonvanlynkheader/commonvanlynkheader.module */ "./src/app/common/commonvanlynkheader/commonvanlynkheader.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _van_lynk_confimation_van_lynk_confimation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./van-lynk-confimation/van-lynk-confimation.component */ "./src/app/proz-subscription/van-lynk-confimation/van-lynk-confimation.component.ts");
/* harmony import */ var _proz_subscription_payment_history_proz_subscription_payment_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./proz-subscription-payment-history/proz-subscription-payment-history.component */ "./src/app/proz-subscription/proz-subscription-payment-history/proz-subscription-payment-history.component.ts");














var ProzSubscriptionModule = /** @class */ (function () {
    function ProzSubscriptionModule() {
    }
    ProzSubscriptionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_proz_subscription_layout_proz_subscription_layout_component__WEBPACK_IMPORTED_MODULE_4__["ProzSubscriptionLayoutComponent"], _van_lynk_confimation_van_lynk_confimation_component__WEBPACK_IMPORTED_MODULE_12__["VanLynkConfimationComponent"], _proz_subscriptions_proz_subscriptions_component__WEBPACK_IMPORTED_MODULE_5__["ProzSubscriptionsComponent"], _proz_list_subscriptions_proz_list_subscriptions_component__WEBPACK_IMPORTED_MODULE_6__["ProzListSubscriptionsComponent"], _enable_vanlynk_enable_vanlynk_component__WEBPACK_IMPORTED_MODULE_7__["EnableVanlynkComponent"], _proz_subscription_payment_history_proz_subscription_payment_history_component__WEBPACK_IMPORTED_MODULE_13__["ProzSubscriptionPaymentHistoryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _proz_subscription_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProzSubscriptionRoutingModule"],
                _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_8__["ProzSidemenuModule"],
                _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_9__["CommonvanlynkheaderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ]
        })
    ], ProzSubscriptionModule);
    return ProzSubscriptionModule;
}());



/***/ }),

/***/ "./src/app/proz-subscription/proz-subscriptions/proz-subscriptions.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/proz-subscription/proz-subscriptions/proz-subscriptions.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a>Subscriptions & Billing</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1> Subscriptions & Billing</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered \">\r\n                      <div class=\"header gray\">\r\n                        Subscriptions & Billing\r\n                      </div>\r\n                      <div id=\"registration-form\">\r\n                        <!-- CREDIT CARD -->\r\n                        <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                          <thead class=\"flip-content bordered-palegreen\">\r\n                            <tr>\r\n                              <th>\r\n                                Name of the Card\r\n                              </th>\r\n                              <th> </th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody *ngIf=\"paymentCardStatus\">\r\n                            <tr>\r\n                              <td>\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"workOrderNumLbl\">\r\n                                    <p style=\"font-size: 14px\">Card Number: XXXX-XXXX-XXXX-{{paymentCardData.last4}}</p>\r\n                                  </label>\r\n                                </div>\r\n                              </td>\r\n                              <td><button class=\"btn btn-blue btn-small\">Edit Address & Payment\r\n                                  Info</button></td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <!-- CREDIT CARD -->\r\n\r\n                        <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                          <thead class=\"flip-content bordered-palegreen\">\r\n                            <tr>\r\n                              <th>\r\n                                Current Subscription\r\n                              </th>\r\n                              <th>\r\n                                Status\r\n                              </th>\r\n                              <th></th>\r\n                              <th></th>\r\n                              <th></th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let data of subscriptions\">\r\n                              <td>\r\n                                <div class=\"form-group\">\r\n                                  <label>\r\n                                    <p>{{data.subscription}}</p>\r\n                                  </label>\r\n                                </div>\r\n                              </td>\r\n                              <td>\r\n                                <div class=\"form-group\">\r\n                                  <label>\r\n                                    <label class=\"label label-{{data.buttonColor == 'success'?'danger':success}}\"\r\n                                      style=\"font-size: 14px;background-color:white;color:red;font-weight:bold;\">\r\n                                      {{data.statusDisplay}}\r\n                                    </label>\r\n                                    <!-- <p>{{data.createdDate}}</p> -->\r\n                                  </label>\r\n                                </div>\r\n                              </td>\r\n                              <td><label>\r\n                                  <button class=\"btn btn-blue btn-small\" (click)=\"viewReceipts()\">View Receipts &\r\n                                    History</button>\r\n                                </label></td>\r\n                              <td><label>\r\n                                  <button class=\"btn btn-blue btn-small\"\r\n                                    (click)=\"subscriptionDetails(data.subscription)\">Subscription Details</button>\r\n                                </label></td>\r\n                              <td>\r\n                                <div class=\"form-group\">\r\n                                  <button class=\"btn btn-{{data.buttonColor}}\" style=\"font-size: 14px\"\r\n                                    (click)=\"toggleSubscription(data)\">{{data.buttonLabel}}</button>\r\n                                  <!-- <p>{{data.currentCreatedDate}}</p> -->\r\n                                </div>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- PAUSE RESUME & CANCEL CONFIRMATION POPUP -->\r\n        <div id=\"confirmationPopup\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <div class=\"widget-header blue\">\r\n                  <span class=\"widget-caption\"><b>{{subscriptionBilling.header}}</b></span>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <form>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12\">\r\n                        <div class=\"form-group\">\r\n                          {{subscriptionBilling.content}}<br /><br />\r\n                          <p style=\"color: red;\"><b>NOTE:- </b>On Confirmation the application automatically gets logged out for the changes to get applied. Login again to continue.</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                      <div class=\"col-lg-2\">\r\n                      </div>\r\n                      <div class=\"col-lg-3 button-center\">\r\n                        <a class=\"btn btn-success\" data-toggle=\"modal\" (click)=\"saveButton()\"><i\r\n                            class=\"fa fa-check\"></i>\r\n                          YES\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"col-lg-2\">\r\n                      </div>\r\n                      <div class=\"col-lg-3 button-center\">\r\n                        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\r\n                          (click)=\"cancelSubscription()\"><i class=\"fa fa-times\"></i>\r\n                          CANCEL</button>\r\n                      </div>\r\n                      <div class=\"col-lg-2\">\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n        </div>\r\n        <!-- PAUSE RESUME & CANCEL CONFIRMATION POPUP -->\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/proz-subscription/proz-subscriptions/proz-subscriptions.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/proz-subscription/proz-subscriptions/proz-subscriptions.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".databox .databox-text {\n  display: block;\n  font-size: 11px;\n  margin: 4px 0 2px;\n  position: relative;\n  width: 100px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.hr-gray-lg {\n  border-top: 1px solid gray !important; }\n\n.hr-gray {\n  border-top: 1px solid gray !important; }\n\n.item {\n  text-align: center; }\n\n.static {\n  color: red; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n    padding: 8px 0;\r\n    border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.static {\n  color: red;\n  font-weight: bold; }\n\n.status-active {\n  color: #00FF00;\n  font-weight: bold; }\n\n.status-inactive {\n  color: #FF0000;\n  font-weight: bold; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n/* LIST MODE */\n\n.center {\n  text-align: center; }\n\n.item {\n  text-align: center; }\n\n/* /LIST MODE */\n\n/* VIEW MODE */\n\n.form-title {\n  color: #5DB2FF;\n  /*display: block;\r\n    padding: 8px 0;*/\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\n.button-center {\n  text-align: center; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.well.with-footer {\n  padding-bottom: 10px !important; }\n\n/* /VIEW MODE */\n\n.static {\n  color: red;\n  font-weight: bold; }\n\n.noRecords {\n  color: blue;\n  font-weight: bold;\n  font-size: 12px; }\n\n.popup-text {\n  color: black;\n  font-weight: bold;\n  font-size: 14px; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n    padding: 8px 0;\r\n    border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.alert-heading {\n  font-size: 12px; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.mandatory {\n  color: #FF0000;\n  font-size: 12px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei1zdWJzY3JpcHRpb24vcHJvei1zdWJzY3JpcHRpb25zL0Q6XFxUb3Bwcm96XFxUb3BQcm96X0FkdmFuY2VfQ2xpZW50L3NyY1xcYXBwXFxwcm96LXN1YnNjcmlwdGlvblxccHJvei1zdWJzY3JpcHRpb25zXFxwcm96LXN1YnNjcmlwdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFDSSxzQ0FBcUMsRUFFeEM7O0FBQ0Q7RUFDSSxzQ0FBcUMsRUFFeEM7O0FBRUQ7RUFDSSxtQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxXQUFVLEVBRWI7O0FBQ0Q7RUFDSSxlQUFlO0VBQ2Ysa0NBQWlDO0VBRWpDOzt3Q0FFb0M7RUFDcEMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7eUJBQ3NCLEVBRXhCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLHNDQUFxQyxFQUN4Qzs7QUFFRDtFQUNJLHNDQUFxQyxFQUV4Qzs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzlCLG9DQUFvQyxFQUN0Qzs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUNEO0VBQ0ksMEJBQXlCO0VBQ3pCLGtDQUFpQztFQUNqQyw0Q0FBMkMsRUFDOUM7O0FBRUQ7RUFDSSx1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsa0NBQWlDO0VBQ2pDLDRDQUEyQyxFQUM5Qzs7QUFFRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLFdBQVM7RUFDVCxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksZUFBYztFQUNkLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM5QixvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUNELGVBQWU7O0FBQ2Y7RUFDSyxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBaUIsRUFDcEI7O0FBQ0QsZ0JBQWdCOztBQUdqQixlQUFlOztBQUNkO0VBQ0csZUFBZTtFQUNmO3FCQUNpQjtFQUNqQixrQ0FBaUM7RUFDakMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7eUJBQ3NCLEVBQ3hCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLHNDQUFxQyxFQUN4Qzs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzlCLG9DQUFvQyxFQUN0Qzs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQyx1QkFBc0I7RUFDdEIsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxvQ0FBbUMsRUFDdEM7O0FBRUQ7RUFDSSxnQ0FBK0IsRUFDbEM7O0FBQ0QsZ0JBQWdCOztBQUNoQjtFQUNJLFdBQVM7RUFDVCxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxZQUFVO0VBQ1Ysa0JBQWlCO0VBQ2pCLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksYUFBVztFQUNYLGtCQUFpQjtFQUNqQixnQkFBZSxFQUVsQjs7QUFDRDtFQUNJLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7O3dDQUVvQztFQUNwQyxnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjt5QkFDc0IsRUFFeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksc0NBQXFDLEVBRXhDOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDRyxnQkFBZSxFQUNqQjs7QUFDRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2Qzs7QUFDRDtFQUNJLDBCQUF5QjtFQUN6QixrQ0FBaUM7RUFDakMsNENBQTJDLEVBQzlDOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLGtDQUFpQztFQUNqQyw0Q0FBMkMsRUFDOUM7O0FBRUQ7RUFDSSwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFFSSxlQUFjO0VBQ2QsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wcm96LXN1YnNjcmlwdGlvbi9wcm96LXN1YnNjcmlwdGlvbnMvcHJvei1zdWJzY3JpcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGFib3ggLmRhdGFib3gtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1hcmdpbjogNHB4IDAgMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhyLWdyYXktbGd7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbn0gXHJcbi5oci1ncmF5eyAgICBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgIzdlMzc5NCAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuLml0ZW17XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLnN0YXRpY3tcclxuICAgIGNvbG9yOiByZWQ7XHJcblxyXG59XHJcbi5mb3JtLXRpdGxleyAgICBcclxuICAgIGNvbG9yOiAgIzVkYjJmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuXHJcbiAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7Ki9cclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuXHJcbn1cclxuXHJcbi5tYW5kYXRvcnl7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaHItZ3JheS10aGlja3sgICAgXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuLmhyLWdyYXl7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG5pbnB1dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1vY2t7XHJcbiAgICBjb2xvcjogcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vY2stY29uZntcclxuICAgIGNvbG9yOiBncmVlbjsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnByb2dyZXNze1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aHJlZS1ib3JkZXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyYXl7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ncmF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ibHVleyAgICBcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZS5jb2xsYXBzZWQge1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6aG92ZXI6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZTphZnRlciB7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RhdGlje1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnN0YXR1cy1hY3RpdmV7XHJcbiAgICBjb2xvcjogIzAwRkYwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3RhdHVzLWluYWN0aXZle1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmlucHJvZ3Jlc3N7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRocmVlLWJvcmRlcmVke1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxufVxyXG5cclxuLmdyYXl7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4vKiBMSVNUIE1PREUgKi9cclxuLmNlbnRlcntcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9IFxyXG5cclxuIC5pdGVte1xyXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gfVxyXG4gLyogL0xJU1QgTU9ERSAqL1xyXG5cclxuXHJcbi8qIFZJRVcgTU9ERSAqL1xyXG4gLmZvcm0tdGl0bGV7XHJcbiAgICBjb2xvcjogICM1REIyRkY7XHJcbiAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDA7Ki9cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVEQjJGRjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxufVxyXG5cclxuLm1hbmRhdG9yeXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5oci1ncmF5eyAgICBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG4uYnV0dG9uLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tb2Nre1xyXG4gICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2NrLWNvbmZ7XHJcbiAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wcm9ncmVzc3tcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGhyZWUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGVja2JveC1jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibHVleyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJ0bi1ncmF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ibHVleyAgICBcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53ZWxsLndpdGgtZm9vdGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogL1ZJRVcgTU9ERSAqL1xyXG4uc3RhdGlje1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm5vUmVjb3Jkc3tcclxuICAgIGNvbG9yOmJsdWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ucG9wdXAtdGV4dHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG59XHJcbi5mb3JtLXRpdGxleyAgICBcclxuICAgIGNvbG9yOiAgIzVkYjJmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuXHJcbiAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7Ki9cclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuXHJcbn1cclxuXHJcbi5tYW5kYXRvcnl7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaHItZ3JheS10aGlja3sgICAgXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuLmhyLWdyYXl7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG5pbnB1dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1vY2t7XHJcbiAgICBjb2xvcjogcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vY2stY29uZntcclxuICAgIGNvbG9yOiBncmVlbjsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnByb2dyZXNze1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aHJlZS1ib3JkZXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYWxlcnQtaGVhZGluZ3tcclxuICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tZ3JheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tYmx1ZXsgICAgXHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUuY29sbGFwc2VkIHtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlOmhvdmVyOmFmdGVyIHtcclxuICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUge1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4ubWFuZGF0b3J5e1xyXG4gICBcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/proz-subscription/proz-subscriptions/proz-subscriptions.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/proz-subscription/proz-subscriptions/proz-subscriptions.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProzSubscriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzSubscriptionsComponent", function() { return ProzSubscriptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");









//HTTP OPTIONS
var getOptions = function () {
    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    return new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
};
//HTTP OPTIONS
var ProzSubscriptionsComponent = /** @class */ (function () {
    function ProzSubscriptionsComponent(beyond, router, activatedRoute, http, formBuilder, toastr, spinner) {
        this.beyond = beyond;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.spinner = spinner;
        this.subscriptions = [
            {
                subscription: 'LEADGEN',
                status: 'DISABLED',
                statusDisplay: 'DISABLED',
                buttonLabel: 'RESUME',
                buttonColor: 'success',
                createdDate: null,
                currentCreatedDate: null,
            },
            {
                subscription: 'VANLYNK',
                status: 'DISABLED',
                statusDisplay: 'DISABLED',
                buttonLabel: 'RESUME',
                buttonColor: 'success',
                createdDate: null,
                currentCreatedDate: null,
            }
        ];
        this.subscriptionBilling = {
            header: null,
            content: null
        };
        this.subscriptionData = {};
        this.serviceStatus = '';
        this.checkVany = true;
        this.checkLead = true;
        this.showForm = false;
        this.showLeadOnToggle = false;
        this.showVanyOnToggle = false;
        this.enableDateWidget = false;
        this.addSubscription = [];
        this.paymentCardData = {};
        this.paymentCardStatus = false;
    }
    ProzSubscriptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        console.log(this.loginData);
        this.subscriptions.forEach(function (data) {
            if (data.subscription == 'VANLYNK') {
                data.status = _this.loginData.vanlynk == 'Y' ? 'ENABLED' : 'DISABLED';
                data.statusDisplay = _this.loginData.vanlynk == 'Y' ? 'ENABLED' : 'DISABLED';
                data.buttonColor = _this.loginData.vanlynk == 'Y' ? 'danger' : 'success';
                data.buttonLabel = _this.loginData.vanlynk == 'Y' ? 'PAUSE' : 'RESUME';
            }
            else if (data.subscription == 'LEADGEN') {
                data.status = _this.loginData.leadG == 'Y' ? 'ENABLED' : 'DISABLED';
                data.statusDisplay = _this.loginData.leadG == 'Y' ? 'ENABLED' : 'DISABLED';
                data.buttonColor = _this.loginData.leadG == 'Y' ? 'danger' : 'success';
                data.buttonLabel = _this.loginData.leadG == 'Y' ? 'PAUSE' : 'RESUME';
            }
        });
        //this.getProVanylink(this.loginData.loginCode)
        //this.getLeadGen(this.loginData.loginCode)
        this.getSubscriptions(this.loginData.loginCode);
        this.fetchDefaultCreditCard(this.loginData.loginCode);
    };
    //ERROR CALLBACK
    ProzSubscriptionsComponent.prototype.errorCallback = function () {
        this.toastr.warning("Unable to Connect to Server");
    };
    //ERROR CALLBACK
    //FETCH DEFAULT CARD
    ProzSubscriptionsComponent.prototype.fetchDefaultCreditCard = function (loginCode) {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + "/fetchStripeCards";
        var successCallback = function (data) {
            var json = data.json();
            if (json.status == 200 && Array.isArray(json.response)) {
                _this.paymentCardData = json.response[0];
                _this.paymentCardStatus = true;
            }
        };
        this.http.post(url, { loginCode: loginCode }, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //FETCH DEFAULT CARD
    //VIEW RECEIPTS
    ProzSubscriptionsComponent.prototype.viewReceipts = function () {
        this.router.navigate(['/subscription/paymentHistory', this.loginData.loginCode]);
    };
    //VIEW RECEIPTS
    //SUBSCRIPTION DETAILS
    ProzSubscriptionsComponent.prototype.subscriptionDetails = function (type) {
        if (type == "VANLYNK") {
            this.router.navigate(['/subscription/enableVanlynkData']);
        }
        else {
            alert('to be done');
        }
    };
    //SUBSCRIPTION DETAILS
    //HOME
    ProzSubscriptionsComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    //HOME
    //TOGGLE SUBSCRIPTION
    ProzSubscriptionsComponent.prototype.toggleSubscription = function (data) {
        console.log(data);
        $("#confirmationPopup").modal("show");
        this.subscriptionBilling.header = 'Subscription & Billing';
        if (data.subscription == "LEADGEN" && data.status == "DISABLED") {
            this.subscriptionBilling.content = 'Are you sure you want to resume?';
        }
        else if (data.subscription == "LEADGEN" && data.status == "ENABLED") {
            this.subscriptionBilling.content = 'This will pause the Leadgen service temporarily. ' +
                'You will not receive any lead while the service in a pause status. Are you sure you want to pause?  ';
        }
        else if (data.subscription == "VANLYNK" && data.status == "DISABLED") {
            this.subscriptionBilling.content = 'Are you sure you want to resume?';
        }
        else if (data.subscription == "VANLYNK" && data.status == "ENABLED") {
            this.subscriptionBilling.content = 'This will pause the Vanlynk service temporarily. You and your Staff will not be able to operate the Vanlynk system , Menus/Logins will be disabled except for Pro Admin Subscription Management.' +
                ' Are you sure you want to pause?  ';
        }
        // data.subscription == "LEADGEN" ? data.status == "ENABLED" ?
        //   this.subscriptionBilling.content = 'Are you sure do you want to resume?'
        //   : this.subscriptionBilling.content = 'This will pause the Leadgen service temporarily. ' +
        //   'You will not receive any lead while the service in a pause status. Are you sure you want to pause?  ' : ''
        // data.subscription == "VANLYNK" ?
        //   this.subscriptionBilling.content = 'This will pause the Leadgen service temporarily. ' +
        //   'You will not receive any lead while the service in a pause status. Are you sure you want to pause?  '
        //   : this.subscriptionBilling.content = 'This will pause the Vanlynk service temporarily. You and your Staff will not be able to operate the Vanlynk system , Menus/Logins will be disabled except for Pro Admin Subscription Management.' +
        //   ' Are you sure you want to pause?  '
        data.status == 'ENABLED' ? data.status = 'DISABLED' : data.status = 'ENABLED';
        data.createdDate = new Date().toUTCString();
        this.addSubscription = this.addSubscription.filter(function (val) { return val.subscriptionType != data.subscription; });
        this.addSubscription.push({
            "proCode": '' + this.loginData.loginCode,
            "subscriptionStatus": data.status == 'DISABLED' ? 'Disable' : 'Enable',
            "noOfLicenses": '' + this.licenses,
            "date": data.createdDate,
            "subscriptionType": data.subscription,
            "createdBy": '' + this.loginData.loginCode,
        });
        this.subscriptionData = {
            "proCode": '' + this.loginData.loginCode,
            "subscriptionStatus": data.status == 'DISABLED' ? 'Disable' : 'Enable',
            "noOfLicenses": '' + this.licenses,
            "date": data.createdDate,
            "subscriptionType": data.subscription,
            "createdBy": '' + this.loginData.loginCode,
        };
    };
    //TOGGLE SUBSCRIPTION
    //GET PRO VANLYNK
    ProzSubscriptionsComponent.prototype.getProVanylink = function (loginCode) {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + "/getVanylinksubscriptions/" + loginCode;
        var successCallback = function (data) {
            var json = data.json();
            if (json.status == 200 && Array.isArray(json.response)) {
                _this.subscriptions.forEach(function (data) {
                    if (data.subscription == 'VANLYNK') {
                        data.currentCreatedDate = json.response[json.response.length - 1].date;
                        data.status = json.response[json.response.length - 1].subscriptionStatus == 'Enable' ? 'ENABLED' : 'DISABLED';
                        data.buttonColor = json.response[json.response.length - 1].subscriptionStatus == 'Enable' ? 'danger' : 'success';
                        data.buttonLabel = json.response[json.response.length - 1].subscriptionStatus == 'Enable' ? 'PAUSE' : 'RESUME';
                    }
                });
                console.log(json.response);
            }
        };
        this.http.get(url, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //GET PRO VANLYNK
    //GET LEADGEN
    ProzSubscriptionsComponent.prototype.getLeadGen = function (loginCode) {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + "/getLeadgensubscriptions/" + loginCode;
        var successCallback = function (data) {
            var json = data.json();
            if (json.status == 200 && Array.isArray(json.response)) {
                _this.subscriptions.forEach(function (data) {
                    if (data.subscription == 'LEADGEN') {
                        data.currentCreatedDate = json.response[json.response.length - 1].date;
                        data.status = json.response[json.response.length - 1].subscriptionStatus == 'Enable' ? 'ENABLED' : 'DISABLED';
                        data.buttonColor = json.response[json.response.length - 1].subscriptionStatus == 'Enable' ? 'danger' : 'success';
                        data.buttonLabel = json.response[json.response.length - 1].subscriptionStatus == 'Enable' ? 'PAUSE' : 'RESUME';
                    }
                });
                console.log(json.response);
            }
        };
        this.http.get(url, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //GET LEADGEN
    //GET SUBSCRIPTIONS
    ProzSubscriptionsComponent.prototype.getSubscriptions = function (loginCode) {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + "/getVanylinkLicence/" + loginCode;
        var successCallback = function (data) {
            var json = data.json();
            if (json.status == 200 && Array.isArray(json.response)) {
                _this.licenses = json.response[json.response.length - 1].noOfLicenses;
                console.log(json.response);
            }
        };
        this.http.get(url, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //GET SUBSCRIPTIONS
    //SAVE SUBSCRIPTION
    ProzSubscriptionsComponent.prototype.saveButton = function () {
        var _this = this;
        this.spinner.show();
        var url = _global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + "/addServiceSubscriptionStatus";
        var addSubscriptionObject = {
            "subscription": this.subscriptionData
        };
        var successCallback = function (data) {
            var json = data.json();
            if (json.status == 200) {
                console.log(json.response);
                _this.updateLicenses();
            }
        };
        this.http.post(url, addSubscriptionObject, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //SAVE SUBSCRIPTION
    //CANCEL SUBSCRIPTION
    ProzSubscriptionsComponent.prototype.cancelSubscription = function () {
        this.addSubscription = [];
    };
    //CANCEL SUBSCRIPTION
    //CANCEL
    ProzSubscriptionsComponent.prototype.cancel = function () {
        this.router.navigate(['/subscription/listProSubscriptions']);
    };
    //CANCEL
    //UPDATE LICENSES
    ProzSubscriptionsComponent.prototype.updateLicenses = function () {
        if (this.addSubscription.length > 0) {
            var vanlynkLicense = this.addSubscription.filter(function (val) { return val.subscriptionType == 'VANLYNK'; });
            var leadGen = this.addSubscription.filter(function (val) { return val.subscriptionType == 'LEADGEN'; });
            var vanlynk;
            var leadgeneration;
            if (vanlynkLicense.length > 0) {
                if (vanlynkLicense[0].subscriptionStatus == "Enable") {
                    vanlynk = "Y";
                }
                else {
                    vanlynk = "N";
                }
                this.loginData.vanlynk = vanlynk;
                localStorage.setItem("login", JSON.stringify(this.loginData));
                console.log(vanlynkLicense);
                this.insertVanlynkSubscription(vanlynkLicense[0]);
                //return false;
            }
            if (leadGen.length > 0) {
                if (leadGen[0].subscriptionStatus == "Enable") {
                    leadgeneration = "Y";
                }
                else {
                    leadgeneration = "N";
                }
                this.loginData.leadG = leadgeneration;
                localStorage.setItem("login", JSON.stringify(this.loginData));
                console.log(leadGen);
                this.insertleadGenSubscription(leadGen[0]);
                //return false;
            }
        }
    };
    //UPDATE LICENSES
    //INSERT VANLYNK SUBSCRIPTION
    ProzSubscriptionsComponent.prototype.insertVanlynkSubscription = function (data) {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + "/addVanyLinkSubscription";
        var addVanlynkObject = {
            "proCode": data.proCode,
            "vanylinkStatus": '' + data.subscriptionStatus,
            "noOfLicenses": '' + this.licenses,
            "modifiedBy": data.proCode,
            "date": data.date
        };
        var successCallback = function (data) {
            var json = data.json();
            console.log(json.response);
            if (json.status == 200) {
                $("#confirmationPopup").modal("hide");
                _this.spinner.hide();
                //window.location.reload()
                //this.toastr.success('PRO Subscription Added Successfuly...');
                _this.router.navigate(['/auth/login', 0]);
            }
        };
        this.http.post(url, addVanlynkObject, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //INSERT VANLYNK SUBSCRIPTION
    //INSERT LEADGEN SUBSCRIPTION
    ProzSubscriptionsComponent.prototype.insertleadGenSubscription = function (data) {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + "/addLeadGenSubscription";
        var addLeadGenObject = {
            "proCode": data.proCode,
            "leadGen": '' + data.subscriptionStatus,
            "createdBy": data.proCode,
            "date": data.date
        };
        var successCallback = function (data) {
            var json = data.json();
            if (json.status == 200) {
                console.log(json.response);
                $("#confirmationPopup").modal("hide");
                _this.spinner.hide();
                _this.router.navigate(['/auth/login', 0]);
                //window.location.reload()
                // this.toastr.success('PRO Subscription Added Successfuly...');
                // this.router.navigate(['/subscription/listProSubscriptions'])
            }
        };
        this.http.post(url, addLeadGenObject, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    ProzSubscriptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"]],
            selector: 'app-proz-subscriptions',
            template: __webpack_require__(/*! ./proz-subscriptions.component.html */ "./src/app/proz-subscription/proz-subscriptions/proz-subscriptions.component.html"),
            styles: [__webpack_require__(/*! ./proz-subscriptions.component.scss */ "./src/app/proz-subscription/proz-subscriptions/proz-subscriptions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], ProzSubscriptionsComponent);
    return ProzSubscriptionsComponent;
}());



/***/ }),

/***/ "./src/app/proz-subscription/van-lynk-confimation/van-lynk-confimation.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/proz-subscription/van-lynk-confimation/van-lynk-confimation.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a href=\"#\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">  VanLynk Subcription Confirmation</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>  VanLynk Subcription Confirmation</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered \">\r\n                      <div class=\"header gray\">\r\n                        VanLynk Subcription Confirmation\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                          <div class=\"form-group\">\r\n                            <h3 class=\"green-text\">Your have updated vanlynk subscription successfully</h3>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                          <div class=\"form-group\"></div>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                          <div class=\"form-group\">\r\n                            <input type=\"button\" class=\"btn btn-blue btn-block\" value=\"Dashboard\" (click)=\"home()\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n                          <div class=\"form-group\">\r\n                            <input type=\"submit\" class=\"btn btn-gray btn-block\" value=\"List Subscriptions\" (click)=\"list()\">\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                          <div class=\"form-group\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/proz-subscription/van-lynk-confimation/van-lynk-confimation.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/proz-subscription/van-lynk-confimation/van-lynk-confimation.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;\r\n     border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-purple {\n  border-top: 1px solid #7e3794 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #7e3794;\n  border-right: 1px solid #7e3794;\n  border-bottom: 1px solid #7e3794;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.green-text {\n  color: green;\n  font-family: 'Arial', 'Helvetica', 'sans-serif' !important;\n  text-align: center; }\n\n.green-text span {\n  font-weight: bold; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei1zdWJzY3JpcHRpb24vdmFuLWx5bmstY29uZmltYXRpb24vRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3otc3Vic2NyaXB0aW9uXFx2YW4tbHluay1jb25maW1hdGlvblxcdmFuLWx5bmstY29uZmltYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSyxlQUFlO0VBQ2Ysa0NBQWlDO0VBRWpDOzt5Q0FFb0M7RUFDcEMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7MEJBQ3NCLEVBRXhCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLHlDQUF3QyxFQUMzQzs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLCtCQUE4QjtFQUM5QixnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQ2pDLG9DQUFvQyxFQUN0Qzs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUNEO0VBQ0ksYUFBWTtFQUNaLDJEQUEwRDtFQUMxRCxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wcm96LXN1YnNjcmlwdGlvbi92YW4tbHluay1jb25maW1hdGlvbi92YW4tbHluay1jb25maW1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXRpdGxleyAgICBcclxuICAgICBjb2xvcjogICM1ZGIyZmY7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNWRiMmZmO1xyXG4gXHJcbiAgICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7Ki9cclxuICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbiBcclxuIH1cclxuIFxyXG4gLm1hbmRhdG9yeXtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiB9XHJcbiBcclxuIC5oci1wdXJwbGV7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbiB9IFxyXG4gXHJcbiBpbnB1dHtcclxuICAgICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcbiBcclxuIC5tb2Nre1xyXG4gICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLm1vY2stY29uZntcclxuICAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmlucHJvZ3Jlc3N7XHJcbiAgICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAudGhyZWUtYm9yZGVyZWR7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjN2UzNzk0O1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3ZTM3OTQ7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3ZTM3OTQ7XHJcbiAgICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxuIH1cclxuIFxyXG4gLnRleHQtY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5idG4tZ3JheXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ibHVleyAgICBcclxuICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIC5ncmVlbi10ZXh0e1xyXG4gICAgIGNvbG9yOiBncmVlbjtcclxuICAgICBmb250LWZhbWlseTogJ0FyaWFsJywgJ0hlbHZldGljYScsICdzYW5zLXNlcmlmJyAhaW1wb3J0YW50O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmdyZWVuLXRleHQgc3BhbntcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/proz-subscription/van-lynk-confimation/van-lynk-confimation.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/proz-subscription/van-lynk-confimation/van-lynk-confimation.component.ts ***!
  \******************************************************************************************/
/*! exports provided: VanLynkConfimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanLynkConfimationComponent", function() { return VanLynkConfimationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var VanLynkConfimationComponent = /** @class */ (function () {
    function VanLynkConfimationComponent(beyond, router, activatedRoute, http, formBuilder, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
    }
    VanLynkConfimationComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
    };
    VanLynkConfimationComponent.prototype.home = function () {
        localStorage.setItem('proServiceAreas', null);
        this.router.navigate(['/proz-dashboard/prozDashboard', this.loginData.loginCode]);
    };
    VanLynkConfimationComponent.prototype.list = function () {
        this.router.navigate(['/subscription/listProSubscriptions']);
    };
    VanLynkConfimationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"]],
            selector: 'app-van-lynk-confimation',
            template: __webpack_require__(/*! ./van-lynk-confimation.component.html */ "./src/app/proz-subscription/van-lynk-confimation/van-lynk-confimation.component.html"),
            styles: [__webpack_require__(/*! ./van-lynk-confimation.component.scss */ "./src/app/proz-subscription/van-lynk-confimation/van-lynk-confimation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], VanLynkConfimationComponent);
    return VanLynkConfimationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=proz-subscription-proz-subscription-module.js.map