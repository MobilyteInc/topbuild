(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors-vendors-module"],{

/***/ "./src/app/vendors/add-vendor/add-vendor.component.html":
/*!**************************************************************!*\
  !*** ./src/app/vendors/add-vendor/add-vendor.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n     <!-- Page Breadcrumb -->\r\n     <div class=\"page-breadcrumbs\">\r\n          <ul class=\"breadcrumb\">\r\n               <li>\r\n                    <i class=\"fa fa-home\"></i>\r\n                    Home\r\n               </li>\r\n               <li> Vendors</li>\r\n               <li>List of Vendors</li>\r\n               <li class=\"active\">Add Vendor</li>\r\n          </ul>\r\n     </div>\r\n     <!-- /Page Breadcrumb -->\r\n\r\n     <!-- Page Header -->\r\n     <div class=\"page-header position-relative\">\r\n          <div class=\"header-title\">\r\n               <h1>\r\n                    Add Vendor\r\n                    <!-- <span style=\"color: red;\">INPROGRESS</span> -->\r\n               </h1>\r\n          </div>\r\n     </div>\r\n     <!-- /Page Header -->\r\n\r\n\r\n     <!-- Page Body -->\r\n     <div class=\"page-body\">\r\n          <div class=\"row\">\r\n               <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"row\">\r\n                         <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"row\">\r\n                                   <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                                        <div class=\"well with-header with-footer three-bordered \">\r\n                                             <div class=\"header gray\">\r\n                                                  Add Vendor\r\n                                             </div>\r\n                                             <div id=\"registration-form\">\r\n                                                  <form [formGroup]=\"addVendor\" (ngSubmit)=\"onSubmit()\">\r\n                                                       <div class=\"row\">\r\n                                                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                                                 <!-- Row 1 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"vendorIDLbl\">\r\n                                                                                     <b>Vendor ID </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"vendorId\"\r\n                                                                                          value=\"{{vendorId}}\" readonly>\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"vendorNameLbl\">\r\n                                                                                     <b>Vendor Name <span\r\n                                                                                               class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"vendorName\"\r\n                                                                                          (keypress)=\"keyPress1($event)\"\r\n                                                                                          [ngClass]=\"{ 'is-invalid': submitted && f.vendorName.errors }\">\r\n                                                                                </span>\r\n                                                                                <div *ngIf=\"submitted && f.vendorName.errors\"\r\n                                                                                     class=\"invalid-feedback\">\r\n                                                                                     <div\r\n                                                                                          *ngIf=\"f.vendorName.errors.required\">\r\n                                                                                          <p\r\n                                                                                               style=\"color: red; font-size: 11px\">\r\n                                                                                               Enter Vendor Name</p>\r\n                                                                                     </div>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 1 -->\r\n                                                                 <!-- Row 2 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"creditLimitLbl\">\r\n                                                                                     <b>Tax ID/EIN</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\" minlength=\"11\"\r\n                                                                                          maxlength=\"11\"\r\n                                                                                          (keypress)=\"keyPress2($event)\"\r\n                                                                                          formControlName=\"taxIdOrEIN\">\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Account Rep Name</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <input type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"\"\r\n                                                                                     formControlName=\"accountRepName\"\r\n                                                                                     (keypress)=\"keyPress1($event)\">\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 2 -->\r\n                                                                 <!-- Row 3-->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"sourceLbl\">\r\n                                                                                     <b>1099 Eligible </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <div class=\"checkbox\">\r\n                                                                                     <label>\r\n                                                                                          <input type=\"checkbox\"\r\n                                                                                               class=\"colored-success\"\r\n                                                                                               formControlName=\"eligible1099\">\r\n                                                                                          <span class=\"text\"> </span>\r\n                                                                                     </label>\r\n                                                                                </div>\r\n                                                                           </div>\r\n\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"typeOrCategoryLbl\">\r\n                                                                                     <b>Type / Category </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <select type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"vendorCategory\"\r\n                                                                                          data-bv-field=\"row-title\">\r\n                                                                                          <option value=\"\">Select\r\n                                                                                          </option>\r\n                                                                                          <option\r\n                                                                                               *ngFor=\"let data of vendorList\"\r\n                                                                                               value={{data.vendorCategory}}>\r\n                                                                                               {{data.vendorCategory}}\r\n                                                                                          </option>\r\n                                                                                     </select>\r\n                                                                                     <!-- <div *ngIf=\"submitted && f.vendorCategory.errors\"\r\n                                                                                          class=\"invalid-feedback\">\r\n                                                                                          <div\r\n                                                                                               *ngIf=\"f.paymentMethod.errors.required\">\r\n                                                                                               <p\r\n                                                                                                    style=\"color: red; font-size: 11px\">\r\n                                                                                                    Select Vendor\r\n                                                                                                    Category</p>\r\n                                                                                          </div>\r\n                                                                                     </div> -->\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 3 -->\r\n                                                                 <!-- Row 4 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"emailLbl\">\r\n                                                                                     <b>Email\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"email\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"repEmailAddress\"\r\n                                                                                          pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                           <div\r\n                                                                                *ngIf=\"addVendor.get('repEmailAddress').invalid && (addVendor.get('repEmailAddress').dirty || addVendor.get('repEmailAddress').touched)\">\r\n                                                                                <span style=\"color: red;\">Invalid Email\r\n                                                                                     Id. </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Account #</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <input type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"\" minlength=\"12\"\r\n                                                                                     maxlength=\"12\"\r\n                                                                                     (keypress)=\"keyPress2($event)\"\r\n                                                                                     formControlName=\"accountNumber\">\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 4 -->\r\n                                                                 <!-- Row 5 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"emailLbl\">\r\n                                                                                     <b>Phone\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"phoneNumber\"\r\n                                                                                          [dropSpecialCharacters]=\"false\"\r\n                                                                                          mask=\"000-000-0000\">\r\n                                                                                </span>\r\n\r\n                                                                           </div>\r\n                                                                           <div\r\n                                                                                *ngIf=\"addVendor.get('phoneNumber').invalid && (addVendor.get('phoneNumber').dirty || addVendor.get('phoneNumber').touched)\">\r\n                                                                                <span style=\"color: red;\">Phone Number\r\n                                                                                     should be 10 digits. Please fix.\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Ext.</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <input type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"\"\r\n                                                                                     (keypress)=\"keyPress2($event)\"\r\n                                                                                     minlength=\"5\" maxlength=\"5\"\r\n                                                                                     formControlName=\"extensionNumber\">\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 5 -->\r\n                                                                 <!-- Row 6 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"emailLbl\">\r\n                                                                                     <b>Street Address\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"streetAddress\">\r\n                                                                                </span>\r\n\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Unit #</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <input type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"\"\r\n                                                                                     formControlName=\"unit\">\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 6 -->\r\n                                                                 <!-- Row 7 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"emailLbl\">\r\n                                                                                     <b>City\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          (keypress)=\"keyPress1($event)\"\r\n                                                                                          formControlName=\"city\">\r\n                                                                                </span>\r\n\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>State</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <select class=\"form-control\"\r\n                                                                                     id=\"stateRegistred\" name=\"status\"\r\n                                                                                     data-bv-field=\"row-title\"\r\n                                                                                     formControlName=\"state\">\r\n                                                                                     <option value=\"\">Select</option>\r\n                                                                                     <option\r\n                                                                                          *ngFor=\"let data of statesData\"\r\n                                                                                          value={{data.stateName}}>\r\n                                                                                          {{data.stateName}}\r\n                                                                                     </option>\r\n                                                                                </select>\r\n\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 7 -->\r\n                                                                 <!-- Row 8 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"zipCodeLbl\">\r\n                                                                                     <b>Zip Code\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"zipCode\"\r\n                                                                                          [dropSpecialCharacters]=\"false\"\r\n                                                                                          mask=\"00000\" minlength=\"5\"\r\n                                                                                          maxlength=\"5\">\r\n                                                                                </span>\r\n\r\n                                                                           </div>\r\n                                                                           <div\r\n                                                                                *ngIf=\"addVendor.get('zipCode').invalid && (addVendor.get('zipCode').dirty || addVendor.get('zipCode').touched)\">\r\n                                                                                <span style=\"color: red;\">Zip Code\r\n                                                                                     should be 5 digits. Please fix.\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"statusLbl\">\r\n                                                                                     <b>Status</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <select type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"\"\r\n                                                                                     formControlName=\"status\"\r\n                                                                                     data-bv-field=\"row-title\">\r\n                                                                                     <option value=\"\">Select\r\n                                                                                     </option>\r\n                                                                                     <option value=\"ACTIVE\">\r\n                                                                                          ACTIVE\r\n                                                                                     </option>\r\n                                                                                     <option value=\"INACTIVE\">INACTIVE\r\n                                                                                     </option>\r\n                                                                                </select>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 8 -->\r\n                                                                 <!--Row 9-->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"donotServeNotesLbl\">\r\n                                                                                     <b>Special Notes </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-6\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"specialNotes\">\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n\r\n                                                                 </div>\r\n                                                                 <!--/Row 9-->\r\n                                                            </div>\r\n                                                       </div>\r\n                                                       <!-- Bottom Buttons -->\r\n                                                       <div class=\"row\">\r\n                                                            <div class=\"col-lg-3\">\r\n                                                            </div>\r\n                                                            <div class=\"col-lg-3 button-center\">\r\n                                                                 <button type=\"submit\" class=\"btn btn-blue\"><i\r\n                                                                           class=\"fa fa-check\"></i>\r\n                                                                      Save\r\n                                                                 </button>\r\n                                                                 &nbsp; &nbsp; &nbsp; &nbsp;\r\n                                                                 <button type=\"button\" class=\"btn btn-gray\"\r\n                                                                      (click)=\"cancel()\"><i class=\"fa fa-times\"></i>\r\n                                                                      Cancel</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-lg-3 button-center\">\r\n\r\n                                                            </div>\r\n                                                            <div class=\"col-lg-3\">\r\n                                                            </div>\r\n\r\n\r\n                                                       </div>\r\n                                                       <!-- /Bottom Buttons -->\r\n\r\n\r\n                                                  </form>\r\n                                             </div>\r\n                                        </div>\r\n                                   </div>\r\n                              </div>\r\n                         </div>\r\n                    </div>\r\n               </div>\r\n          </div>\r\n     </div>\r\n     <!-- /Page Body -->\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- /Page Container -->\r\n\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/vendors/add-vendor/add-vendor.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/vendors/add-vendor/add-vendor.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9ycy9hZGQtdmVuZG9yL0Q6XFxUb3Bwcm96XFxUb3BQcm96X0FkdmFuY2VfQ2xpZW50L3NyY1xcYXBwXFx2ZW5kb3JzXFxhZGQtdmVuZG9yXFxhZGQtdmVuZG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBZTtFQUNmLGtDQUFpQztFQUVqQztzQkFDaUI7RUFHakIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7MEJBQ3NCLEVBRXhCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBR0Y7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9ycy9hZGQtdmVuZG9yL2FkZC12ZW5kb3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS10aXRsZXtcclxuICAgICBjb2xvcjogICM1ZGIyZmY7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNWRiMmZmO1xyXG4gXHJcbiAgICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgICBwYWRkaW5nOiA4cHggMDsqLyAgICBcclxuICAgICAvLyBjb2xvcjogICM3ZTM3OTQ7XHJcbiAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0O1xyXG4gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuIFxyXG4gfVxyXG4gXHJcbiAubWFuZGF0b3J5e1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuIH1cclxuXHJcbiAuZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gIFxyXG4uYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/vendors/add-vendor/add-vendor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/vendors/add-vendor/add-vendor.component.ts ***!
  \************************************************************/
/*! exports provided: AddVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVendorComponent", function() { return AddVendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var MAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var isEmail = function (email) { return MAIL_PATTERN.test(email); };
var isValidForm = function (formData, fields) {
    if (fields === void 0) { fields = []; }
    return !fields.some(function (key) {
        var _a = formData.get(key), errors = _a.errors, value = _a.value;
        // if filed is having error or if value empty
        return errors || !value;
    });
};
var AddVendorComponent = /** @class */ (function () {
    function AddVendorComponent(beyond, router, formBuilder, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
    }
    AddVendorComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.prozData = this.loginData.loginCode;
        this.loginEmailData = this.loginData.emailId;
        this.getVendorID(),
            this.listVendorCategory(),
            this.getListOfStates();
        this.addVendor = this.formBuilder.group({
            vendorId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            proId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            vendorName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            taxIdOrEIN: [''],
            accountRepName: [''],
            eligible1099: [''],
            vendorCategory: [''],
            repEmailAddress: ["", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(MAIL_PATTERN)
                ]],
            accountNumber: [''],
            phoneNumber: [''],
            extensionNumber: [''],
            streetAddress: [''],
            unit: [''],
            state: [''],
            city: [''],
            zipCode: [''],
            status: [''],
            specialNotes: [''],
        });
    };
    // AUto Genrat
    AddVendorComponent.prototype.getVendorID = function () {
        var _this = this;
        console.log("vendor Id ");
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/generateVendorID", options).subscribe(function (data) {
            var response = data.json();
            _this.vendorId = response.vendorId;
            console.log("vendor Id " + _this.vendorId);
        }, function (error) {
            _this.toastr.warning("Unable to connect to server");
        });
    };
    // AUto Genrat
    AddVendorComponent.prototype.cancel = function () {
        this.router.navigate(['/vendor/listVendor']);
    };
    Object.defineProperty(AddVendorComponent.prototype, "f", {
        get: function () {
            return this.addVendor.controls;
        },
        enumerable: true,
        configurable: true
    });
    //STATES
    AddVendorComponent.prototype.keyPress1 = function (event) {
        var pattern = /^[a-zA-Z ]+$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && event.keyCode != 9 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddVendorComponent.prototype.keyPress2 = function (event) {
        var pattern = /^[0-9-]+$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && event.keyCode != 9 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddVendorComponent.prototype.getListOfStates = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/getListOfStates", options).subscribe(function (data) {
            var response = data.json();
            _this.statesData = response.response;
        }, function (error) {
            _this.toastr.warning("Unable to connect to server");
        });
    };
    //STATES
    AddVendorComponent.prototype.onSubmit = function () {
        this.submitted = true;
        var fields = [
            "vendorName",
        ];
        console.log(this.addVendor.get('phoneNumber').errors);
        console.log(this.addVendor.get('zipCode').errors);
        if (!isValidForm(this.addVendor, fields) ||
            this.addVendor.get('zipCode').errors ||
            this.addVendor.get('repEmailAddress').errors ||
            this.addVendor.get('phoneNumber').errors ||
            console.log(this.addVendor.get('phoneNumber').errors)) {
            return;
        }
        this.saveVendor();
    };
    AddVendorComponent.prototype.saveVendor = function () {
        var _this = this;
        var addObj = {
            "vendorId": this.vendorId,
            "proId": this.prozData,
            // "residential": this.addVanCustomer.value.residential,
            "vendorName": '' + this.addVendor.value.vendorName,
            "taxIdOrEIN": this.addVendor.value.taxIdOrEIN,
            "accountRepName": '' + this.addVendor.value.accountRepName,
            "eligible1099": '' + this.addVendor.value.eligible1099,
            "vendorCategory": '' + this.addVendor.value.vendorCategory,
            "repEmailAddress": '' + this.addVendor.value.repEmailAddress,
            "accountNumber": '' + this.addVendor.value.accountNumber,
            "phoneNumber": '' + this.addVendor.value.phoneNumber,
            "extensionNumber": '' + this.addVendor.value.extensionNumber,
            "streetAddress": '' + this.addVendor.value.streetAddress,
            "unit": '' + this.addVendor.value.unit,
            "city": '' + this.addVendor.value.city,
            "state": '' + this.addVendor.value.state,
            "zipCode": '' + this.addVendor.value.zipCode,
            "status": '' + this.addVendor.value.status,
            "specialNotes": this.addVendor.value.specialNotes,
            "createdBy": this.loginData.emailId
        };
        console.log("ADD OBJ" + JSON.stringify(addObj));
        // this.addressArray = addObj.fromAddressValues
        // this.cardArray = addObj.fromCardValues
        //console.log("addressArray OBJ" + JSON.stringify(this.addressArray))
        //  console.log("cardArray OBJ" + JSON.stringify(this.cardArray))
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/addVendors', addObj)
            .subscribe(function (data) {
            var vendorData = data.json();
            console.log("customerData" + JSON.stringify(vendorData));
            if (vendorData.status == 200) {
                _this.router.navigate(['/vendor/listVendor']);
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    // LIST Vendor Category STARTS
    AddVendorComponent.prototype.listVendorCategory = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getVendorCategory/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var vendors = data.json();
            if (vendors.status == 200) {
                console.log("Category Details" + JSON.stringify(vendors));
                _this.vendorList = vendors.response;
                console.log("list" + JSON.stringify(_this.vendorList));
                // return false;
                _this.vendors = true;
            }
            else {
                _this.vendors = false;
            }
        });
        // , error => {
        // //  this.toastr.warning('Unable to connect to server');
        // })
    };
    AddVendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-add-vendor',
            template: __webpack_require__(/*! ./add-vendor.component.html */ "./src/app/vendors/add-vendor/add-vendor.component.html"),
            styles: [__webpack_require__(/*! ./add-vendor.component.scss */ "./src/app/vendors/add-vendor/add-vendor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], AddVendorComponent);
    return AddVendorComponent;
}());



/***/ }),

/***/ "./src/app/vendors/edit-vendor/edit-vendor.component.html":
/*!****************************************************************!*\
  !*** ./src/app/vendors/edit-vendor/edit-vendor.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n     <!-- Page Breadcrumb -->\r\n     <div class=\"page-breadcrumbs\">\r\n          <ul class=\"breadcrumb\">\r\n               <li>\r\n                    <i class=\"fa fa-home\"></i>\r\n                    Home\r\n               </li>\r\n               <li> Vendors</li>\r\n               <li> List of Vendors</li>\r\n               <li class=\"active\">Edit Vendor</li>\r\n          </ul>\r\n     </div>\r\n     <!-- /Page Breadcrumb -->\r\n\r\n     <!-- Page Header -->\r\n     <div class=\"page-header position-relative\">\r\n          <div class=\"header-title\">\r\n               <h1>\r\n                    Edit Vendor\r\n                    <!-- <span style=\"color: red;\">INPROGRESS</span> -->\r\n               </h1>\r\n          </div>\r\n     </div>\r\n     <!-- /Page Header -->\r\n\r\n\r\n     <!-- Page Body -->\r\n     <div class=\"page-body\">\r\n          <div class=\"row\">\r\n               <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"row\">\r\n                         <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"row\">\r\n                                   <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                                        <div class=\"well with-header with-footer three-bordered \">\r\n                                             <div class=\"header gray\">\r\n                                                  Edit Vendor\r\n                                             </div>\r\n                                             <div id=\"registration-form\" *ngIf=\"dataVendor\">\r\n                                                  <form [formGroup]=\"editVendor\" (ngSubmit)=\"onSubmit()\">\r\n                                                       <div class=\"row\">\r\n                                                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                                                 <!-- Row 1 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"vendorIDLbl\">\r\n                                                                                     <b>Vendor ID </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          value=\"{{vendorId}}\" readonly>\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"vendorNameLbl\">\r\n                                                                                     <b>Vendor Name <span\r\n                                                                                               class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"vendorName\"\r\n                                                                                          (keypress)=\"keyPress1($event)\"\r\n                                                                                          [ngClass]=\"{ 'is-invalid': submitted && f.vendorName.errors }\">\r\n                                                                                </span>\r\n                                                                                <div *ngIf=\"submitted && f.vendorName.errors\"\r\n                                                                                     class=\"invalid-feedback\">\r\n                                                                                     <div\r\n                                                                                          *ngIf=\"f.vendorName.errors.required\">\r\n                                                                                          <p\r\n                                                                                               style=\"color: red; font-size: 11px\">\r\n                                                                                               Enter Vendor Name</p>\r\n                                                                                     </div>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 1 -->\r\n                                                                 <!-- Row 2 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"creditLimitLbl\">\r\n                                                                                     <b>Tax ID/EIN</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          (keypress)=\"keyPress2($event)\"\r\n                                                                                          minlength=\"11\" maxlength=\"11\"\r\n                                                                                          formControlName=\"taxIdOrEIN\"\r\n                                                                                          placeholder=\"\">\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Account Rep Name</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <input type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"\"\r\n                                                                                     formControlName=\"accountRepName\"\r\n                                                                                     (keypress)=\"keyPress1($event)\">\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 2 -->\r\n                                                                 <!-- Row 3-->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"sourceLbl\">\r\n                                                                                     <b>1099 Eligible </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <div class=\"checkbox\">\r\n                                                                                     <label>\r\n                                                                                          <input type=\"checkbox\"\r\n                                                                                               class=\"colored-success\"\r\n                                                                                               formControlName=\"eligible1099\">\r\n                                                                                          <span class=\"text\"> </span>\r\n                                                                                     </label>\r\n                                                                                </div>\r\n                                                                           </div>\r\n\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"typeOrCategoryLbl\">\r\n                                                                                     <b>Type / Category </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <select type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"vendorCategory\"\r\n                                                                                          data-bv-field=\"row-title\">\r\n                                                                                          <option\r\n                                                                                               *ngFor=\"let data of vendorList\"\r\n                                                                                               value=\"{{data.vendorCategory}}\">\r\n                                                                                               {{data.vendorCategory}}\r\n                                                                                          </option>\r\n                                                                                     </select>\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 3 -->\r\n                                                                 <!-- Row 4 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"emailLbl\">\r\n                                                                                     <b>Email\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"email\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"repEmailAddress\"\r\n                                                                                          (keyup)=\"mailIdVerification()\">\r\n                                                                                </span>\r\n\r\n                                                                                <div *ngIf=\"submitted && f.repEmailAddress.errors\"\r\n                                                                                     class=\"invalid-feedback\">\r\n                                                                                     <div style=\"color: red; font-size: 11px\"\r\n                                                                                          *ngIf=\"f.repEmailAddress.errors.required\">\r\n                                                                                          Enter Email</div>\r\n                                                                                     <div style=\"color: red; font-size: 11px\"\r\n                                                                                          *ngIf=\"addVendor.controls['repEmailAddress'].hasError('invalidEmailAddress')\">\r\n                                                                                          Email must be a\r\n                                                                                          valid email </div>\r\n                                                                                     <small *ngIf=\"mailError\">\r\n                                                                                          <p style=\"color:red\">* Email\r\n                                                                                               Id Already Exist</p>\r\n                                                                                     </small>\r\n\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Account #</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <input type=\"text\" class=\"form-control\"\r\n                                                                                     formControlName=\"accountNumber\"\r\n                                                                                     (keypress)=\"keyPress2($event)\"\r\n                                                                                     minlength=\"12\" maxlength=\"12\"\r\n                                                                                     placeholder=\"\">\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 4 -->\r\n                                                                 <!-- Row 5 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"emailLbl\">\r\n                                                                                     <b>Phone\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          [dropSpecialCharacters]=\"false\"\r\n                                                                                          formControlName=\"phoneNumber\"\r\n                                                                                          mask=\"000-000-0000\">\r\n                                                                                </span>\r\n\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Ext.</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <input type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"\"\r\n                                                                                     (keypress)=\"keyPress2($event)\"\r\n                                                                                     minlength=\"5\" maxlength=\"5\"\r\n                                                                                     formControlName=\"extensionNumber\">\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 5 -->\r\n                                                                 <!-- Row 6 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"emailLbl\">\r\n                                                                                     <b>Street Address\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"streetAddress\">\r\n                                                                                </span>\r\n\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Unit #</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <input type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"\"\r\n                                                                                     formControlName=\"unit\">\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 6 -->\r\n                                                                 <!-- Row 7 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"emailLbl\">\r\n                                                                                     <b>City\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          (keypress)=\"keyPress1($event)\"\r\n                                                                                          formControlName=\"city\">\r\n                                                                                </span>\r\n\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>State</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <select class=\"form-control\"\r\n                                                                                     id=\"stateRegistred\" name=\"status\"\r\n                                                                                     data-bv-field=\"row-title\"\r\n                                                                                     formControlName=\"state\">\r\n                                                                                     <option value=\"\">Select</option>\r\n                                                                                     <option\r\n                                                                                          *ngFor=\"let data of statesData\"\r\n                                                                                          value={{data.stateName}}>\r\n                                                                                          {{data.stateName}}\r\n                                                                                     </option>\r\n                                                                                </select>\r\n\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 7 -->\r\n                                                                 <!-- Row 8 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"zipCodeLbl\">\r\n                                                                                     <b>Zip Code\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          formControlName=\"zipCode\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          [dropSpecialCharacters]=\"false\"\r\n                                                                                          mask=\"00000\">\r\n                                                                                </span>\r\n\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"statusLbl\">\r\n                                                                                     <b>Status</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <select type=\"text\" class=\"form-control\"\r\n                                                                                     placeholder=\"\"\r\n                                                                                     formControlName=\"status\"\r\n                                                                                     data-bv-field=\"row-title\">\r\n                                                                                     <option value=\"\">Select\r\n                                                                                     </option>\r\n                                                                                     <option value=\"ACTIVE\">\r\n                                                                                          ACTIVE\r\n                                                                                     </option>\r\n                                                                                     <option value=\"INACTIVE\">INACTIVE\r\n                                                                                     </option>\r\n                                                                                </select>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 8 -->\r\n                                                                 <!--Row 9-->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"donotServeNotesLbl\">\r\n                                                                                     <b>Special Notes </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-6\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\"\r\n                                                                                          formControlName=\"specialNotes\">\r\n                                                                                </span>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n\r\n                                                                 </div>\r\n                                                                 <!--/Row 9-->\r\n                                                            </div>\r\n                                                       </div>\r\n                                                       <!-- Bottom Buttons -->\r\n                                                       <div class=\"row\">\r\n                                                            <div class=\"col-lg-3\">\r\n                                                            </div>\r\n                                                            <div class=\"col-lg-3 button-center\">\r\n                                                                 <button type=\"submit\" class=\"btn btn-blue\"><i\r\n                                                                           class=\"fa fa-check\"></i>\r\n                                                                      Update\r\n                                                                 </button>\r\n                                                                 &nbsp; &nbsp; &nbsp; &nbsp;\r\n                                                                 <button type=\"button\" class=\"btn btn-gray\"\r\n                                                                      (click)=\"cancel()\"><i class=\"fa fa-times\"></i>\r\n                                                                      Cancel</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-lg-3 button-center\">\r\n                                                            </div>\r\n                                                            <div class=\"col-lg-3\">\r\n                                                            </div>\r\n                                                       </div>\r\n                                                       <!-- /Bottom Buttons -->\r\n                                                  </form>\r\n                                             </div>\r\n                                        </div>\r\n                                   </div>\r\n                              </div>\r\n                         </div>\r\n                    </div>\r\n               </div>\r\n          </div>\r\n     </div>\r\n     <!-- /Page Body -->\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- /Page Container -->\r\n\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/vendors/edit-vendor/edit-vendor.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/vendors/edit-vendor/edit-vendor.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9ycy9lZGl0LXZlbmRvci9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxcdmVuZG9yc1xcZWRpdC12ZW5kb3JcXGVkaXQtdmVuZG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBZTtFQUNmLGtDQUFpQztFQUVqQztzQkFDaUI7RUFHakIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7MEJBQ3NCLEVBRXhCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBR0Y7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9ycy9lZGl0LXZlbmRvci9lZGl0LXZlbmRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXRpdGxle1xyXG4gICAgIGNvbG9yOiAgIzVkYjJmZjtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1ZGIyZmY7XHJcbiBcclxuICAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIHBhZGRpbmc6IDhweCAwOyovICAgIFxyXG4gICAgIC8vIGNvbG9yOiAgIzdlMzc5NDtcclxuICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7XHJcbiAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG4gXHJcbiB9XHJcbiBcclxuIC5tYW5kYXRvcnl7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gfVxyXG5cclxuIC5ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAgXHJcbi5idG4tZ3JheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vendors/edit-vendor/edit-vendor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vendors/edit-vendor/edit-vendor.component.ts ***!
  \**************************************************************/
/*! exports provided: EditVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVendorComponent", function() { return EditVendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utilities_customValidators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utilities/customValidators */ "./src/utilities/customValidators.ts");









var EditVendorComponent = /** @class */ (function () {
    function EditVendorComponent(beyond, router, formBuilder, route, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
    }
    EditVendorComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.prozData = this.loginData.loginCode;
        this.loginEmailData = this.loginData.emailId;
        this.vendorId = this.route.snapshot.params['vendorId'];
        this.editVendor = this.formBuilder.group({
            vendorId: [''],
            proId: [''],
            vendorName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            taxIdOrEIN: [''],
            accountRepName: [''],
            eligible1099: [''],
            vendorCategory: [''],
            repEmailAddress: [''],
            accountNumber: [''],
            phoneNumber: [''],
            extensionNumber: [''],
            streetAddress: [''],
            unit: [''],
            state: [''],
            city: [''],
            zipCode: [''],
            status: [''],
            specialNotes: [''],
        });
        this.listVendorCategory();
        this.viewVendor();
        this.getListOfStates();
    };
    EditVendorComponent.prototype.cancel = function () {
        this.router.navigate(['/vendor/listVendor']);
    };
    Object.defineProperty(EditVendorComponent.prototype, "f", {
        get: function () {
            return this.editVendor.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditVendorComponent.prototype.keyPress1 = function (event) {
        var pattern = /^[a-zA-Z ]+$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && event.keyCode != 9 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //STATES
    EditVendorComponent.prototype.getListOfStates = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/getListOfStates", options).subscribe(function (data) {
            var response = data.json();
            _this.statesData = response.response;
        }, function (error) {
            _this.toastr.warning("Unable to connect to server");
        });
    };
    //STATES
    EditVendorComponent.prototype.onSubmit = function () {
        this.submitted = "true";
        if (!this.editVendor.value.vendorName) {
            return;
        }
        else {
            this.saveVendor();
        }
    };
    EditVendorComponent.prototype.saveVendor = function () {
        var _this = this;
        var editObj = {
            "vendorId": this.vendorId,
            "proId": this.prozData,
            "vendorName": '' + this.editVendor.value.vendorName,
            "taxIdOrEIN": '' + this.editVendor.value.taxIdOrEIN,
            "accountRepName": '' + this.editVendor.value.accountRepName,
            "eligible1099": '' + this.editVendor.value.eligible1099,
            "vendorCategory": '' + this.editVendor.value.vendorCategory,
            "repEmailAddress": '' + this.editVendor.value.repEmailAddress,
            "accountNumber": '' + this.editVendor.value.accountNumber,
            "phoneNumber": '' + this.editVendor.value.phoneNumber,
            "extensionNumber": '' + this.editVendor.value.extensionNumber,
            "streetAddress": '' + this.editVendor.value.streetAddress,
            "unit": '' + this.editVendor.value.unit,
            "city": '' + this.editVendor.value.city,
            "state": '' + this.editVendor.value.state,
            "zipCode": '' + this.editVendor.value.zipCode,
            "status": '' + this.editVendor.value.status,
            "specialNotes": '' + this.editVendor.value.specialNotes,
            "modifiedBy": this.loginData.emailId
        };
        console.log("ADD OBJ" + JSON.stringify(editObj));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/updateVendors', editObj)
            .subscribe(function (data) {
            var vendorData = data.json();
            console.log("customerData" + JSON.stringify(vendorData));
            if (vendorData.status == 200) {
                _this.router.navigate(['/vendor/listVendor']);
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    // LIST Vendor Category STARTS
    EditVendorComponent.prototype.listVendorCategory = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getVendorCategory/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var vendors = data.json();
            if (vendors.status == 200) {
                console.log("Category Details" + JSON.stringify(vendors));
                _this.vendorList = vendors.response;
                console.log("list" + JSON.stringify(_this.vendorList));
                // return false;
                // this.vendors = true;
            }
            else {
                // this.vendors = false;
            }
        });
        // , error => {
        // //  this.toastr.warning('Unable to connect to server');
        // })
    };
    // LIST Vendor Category ENDS
    // start view Vendor
    EditVendorComponent.prototype.viewVendor = function () {
        var _this = this;
        //this.spinner.show()
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/viewVendors/' + this.vendorId, options)
            .subscribe(function (data) {
            var vendor = data.json();
            if (vendor.status == 200) {
                // this.spinner.hide()
                _this.vendorData = vendor.response[0];
                if (_this.vendorData.eligible1099 == 'true' ||
                    _this.vendorData.eligible1099 == 'TRUE')
                    _this.vendorData.eligible1099 = true;
                if (_this.vendorData.eligible1099 == "" ||
                    _this.vendorData.eligible1099 == 'false' ||
                    _this.vendorData.eligible1099 == 'FALSE')
                    _this.vendorData.eligible1099 = false;
                console.log("vendor Data", JSON.stringify(_this.vendorData));
                _this.dataVendor = true;
            }
            else {
                _this.dataVendor = false;
            }
            _this.editVendor = _this.formBuilder.group({
                //"vendorId": this.vendorId,
                //"proId": this.prozData,
                "vendorName": [_this.vendorData.vendorName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "taxIdOrEIN": [_this.vendorData.taxIdOrEIN, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "accountRepName": [_this.vendorData.accountRepName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "eligible1099": [_this.vendorData.eligible1099, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "vendorCategory": [_this.vendorData.vendorCategory, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "repEmailAddress": [_this.vendorData.repEmailAddress, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "accountNumber": [_this.vendorData.accountNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "phoneNumber": [_this.vendorData.phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "extensionNumber": [_this.vendorData.extensionNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "streetAddress": [_this.vendorData.streetAddress, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "unit": [_this.vendorData.unit, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "city": [_this.vendorData.city, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "state": [_this.vendorData.state, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "zipCode": [_this.vendorData.zipCode, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "status": [_this.vendorData.status, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                "specialNotes": [_this.vendorData.specialNotes, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            });
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    EditVendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"], _utilities_customValidators__WEBPACK_IMPORTED_MODULE_8__["CustomValidators"]],
            selector: 'app-edit-vendor',
            template: __webpack_require__(/*! ./edit-vendor.component.html */ "./src/app/vendors/edit-vendor/edit-vendor.component.html"),
            styles: [__webpack_require__(/*! ./edit-vendor.component.scss */ "./src/app/vendors/edit-vendor/edit-vendor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], EditVendorComponent);
    return EditVendorComponent;
}());



/***/ }),

/***/ "./src/app/vendors/list-vendor/list-vendor.component.html":
/*!****************************************************************!*\
  !*** ./src/app/vendors/list-vendor/list-vendor.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        Home\r\n      </li>\r\n      <li> Vendors</li>\r\n      <li class=\"active\">List of Vendors</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        List of Vendors\r\n        <!-- <span style=\"color: red;\">INPROGRESS</span> -->\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n\r\n    <!-- IMPORT & EXPORT Buttons -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7\">\r\n      </div>\r\n      <div class=\"col-lg-5 button-center\">\r\n        <!-- <button type=\"button\" class=\"btn btn-blue\" (click)=\"import()\">\r\n          IMPORT\r\n        </button>  -->\r\n        <button type=\"button\" class=\"btn btn-success shiny\" (click)=\"exportAsXLSX()\">\r\n          <img src=\"../../assets/img/excel-export2.png\" style=\"height:25px;width:25px;\" alt=\"\">\r\n          <span class=\"username\">Export</span></button>\r\n        &nbsp;&nbsp;\r\n        <button class=\"btn btn-primary\" data-toggle=\"dropdown\" (click)=\"openImport()\">\r\n          <img src=\"../../assets/img/export-excel.png\" style=\"height:25px;width:25px;\" alt=\"\">\r\n          <span class=\"username\">Import</span>\r\n        </button>\r\n        &nbsp;&nbsp;\r\n        <button class=\"btn btn-blue\" data-toggle=\"dropdown\" (click)=\"downloadFile()\">\r\n          <img src=\"../../assets/img/export-excel.png\" style=\"height:25px;width:25px;\" alt=\"\">\r\n          <span class=\"username\">Download</span>\r\n        </button>\r\n        <div class=\"backdrop\" [ngStyle]=\"{'display':displayFileModal}\"></div>\r\n        <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayFileModal}\">\r\n          <div class=\"modal-dialog\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"alert alert-block alert-info modal-header \">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeImport()\">\r\n                  <span aria-hidden=\"true\" style=\"margin-right: 0.5em\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">Import Vendors\r\n                </h4>\r\n              </div>\r\n              <div classs=\"modal-body\" style=\"margin-left:1em\">\r\n                <input type=\"file\" accept=\".xlsx, .xls, .csv\" (change)=\"select($event)\">\r\n                <!-- accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\" -->\r\n                <br>\r\n                <span *ngIf=\"excelError\" style=\"color:red\"> <b>This will append to your existing data.</b></span>\r\n                <!-- <span *ngIf=\"excelfile\" style=\"color:red\"> <b>Please Select an Excel FILE</b></span> -->\r\n                <div *ngIf=\"progressShow\" class=\"progress-bar1 blue stripes\">\r\n                  <span [style.width.%]=\"percentage\">\r\n                    <p style=\"text-align: center;color:black;font-size:18px;\">{{percentage}}%</p>\r\n                  </span>\r\n                </div>\r\n                <br>\r\n                <div *ngIf=\"progressHide\" class=\"alert alert-success\" style=\"height:5px;margin-right:1em\">\r\n                  <h4 class=\"alert-heading\" style=\"margin-top:-5px;text-align:center;\">File Uploaded Successfully</h4>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-small btn-success\" (click)=\"checking()\">Import</button>\r\n                <button type=\"button\" class=\"btn btn-small btn-danger\" (click)=\"closeImport()\">Cancel</button>\r\n              </div>\r\n            </div>\r\n            <!-- /.modal-content -->\r\n          </div>\r\n          <!-- /.modal-dialog -->\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <!-- / IMPORT & EXPORT Buttons -->\r\n\r\n\r\n    <br />\r\n\r\n    <!-- Search By -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"widget\">\r\n          <div class=\"widget-header with-footer header gray\">\r\n            <span class=\"widget-caption\">Search Vendor By</span>\r\n          </div>\r\n          <form [formGroup]=\"searchVendor\">\r\n            <div class=\"widget-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"searchByLbl\">\r\n                      <b>Search By</b>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <select class=\"form-control\" formControlName=\"selectBy\" [(ngModel)]=\"chooseSearchBy\"\r\n                      (ngModelChange)=\"vendorSelection(chooseSearchBy)\">\r\n                      <option value=\"All\">--Search By--</option>\r\n                      <option value=\"VendorId\">Vendor ID</option>\r\n                      <option value=\"VendorName\">Vendor Name</option>\r\n                      <option value=\"AccountNumber\">Account</option>\r\n                      <option value=\"Address\">Address</option>\r\n                      <option value=\"PhoneNumber\">Phone</option>\r\n                      <option value=\"RepEmailAddress\">Email</option>\r\n                      <option value=\"Status\">Status</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"All\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"VendorId\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"vendorId\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"VendorName\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"vendorName\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"AccountNumber\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"accountNumber\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"Address\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"streetAddress\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"PhoneNumber\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"phoneNumber\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"RepEmailAddress\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"repEmailAddress\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"Status\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"status\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    &nbsp;&nbsp;&nbsp;&nbsp; <button type=\"submit\" class=\"btn btn-success shiny\"\r\n                      (click)=\"searchVendorData()\"><i class=\"fa fa-search\"></i>&nbsp; Search</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button type=\"submit\" class=\"btn btn-danger shiny\" (click)=\"reset()\"><i\r\n                        class=\"fa fa-repeat\"></i>&nbsp; Reset</button>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /Search By -->\r\n\r\n    <!-- Add Vendor Button -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-blue\" (click)=\"addVendor()\"><i class=\"fa fa-user-plus\"></i>&nbsp;\r\n            Add Vendor</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /Add Vendor Screen -->\r\n\r\n    <!-- List of Vendor - New -->\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"well with-header with-footer three-bordered\">\r\n          <div class=\"header gray\">\r\n            List of Vendors\r\n          </div>\r\n          <table class=\"table table-striped table-hover table-bordered\" *ngIf=\"vendorListResponse\">\r\n            <thead>\r\n              <tr>\r\n                <th style=\"width:5%;\">\r\n                  Vendor ID\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  Vendor Name\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  Account #\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  Address\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  Phone #\r\n                </th>\r\n                <th style=\"width:5%;\">\r\n                  Email\r\n                </th>\r\n                <th style=\"width:5%;\" class=\"center\">\r\n                  Status\r\n                </th>\r\n                <!-- <th style=\"width:10%;\" class=\"center\">\r\n                  Actions\r\n                </th> -->\r\n              </tr>\r\n            </thead>\r\n\r\n            <tbody>\r\n              <tr *ngFor=\"let data of vendorListDetails\">\r\n                <td><a (click)=\"viewVendor(data)\">\r\n                    {{data.vendorId}}</a></td>\r\n                <td>{{data.vendorName}}</td>\r\n                <td>{{data.accountNumber}}</td>\r\n                <td>{{data.streetAddress}}</td>\r\n                <td>{{data.phoneNumber}}</td>\r\n                <td class=\"center \">{{data.repEmailAddress}}</td>\r\n                <td class=\"center \">{{data.status}}</td>\r\n                <!-- <td class=\"center \"> -->\r\n                <!-- <a (click)=\"viewVendor(data)\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-eye\"></i></a>\r\n                  &nbsp;&nbsp;\r\n                  <a (click)=\"editVendor(data)\" class=\"btn btn-primary btn-xs\"><i class=\"fa fa-pencil\"></i></a>\r\n                  &nbsp;&nbsp; -->\r\n                <!-- <a href=\"#\" class=\"btn btn-danger btn-xs\"><i class=\"fa fa-trash-o\"></i></a> &nbsp;&nbsp; -->\r\n                <!-- </td> -->\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div *ngIf=\"!vendorListResponse\">\r\n            <p>No Records Found</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /List of Vendor - New -->\r\n\r\n  </div>\r\n  <!-- /Page Body -->\r\n</div>"

/***/ }),

/***/ "./src/app/vendors/list-vendor/list-vendor.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/vendors/list-vendor/list-vendor.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9ycy9saXN0LXZlbmRvci9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxcdmVuZG9yc1xcbGlzdC12ZW5kb3JcXGxpc3QtdmVuZG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7c0JBQ2lCO0VBR2pCLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCOzBCQUNzQixFQUV4Qjs7QUFFRDtFQUNHLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBR0Q7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM5QixvQ0FBb0MsRUFDdEMiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3JzL2xpc3QtdmVuZG9yL2xpc3QtdmVuZG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAuZm9ybS10aXRsZXtcclxuICAgICBjb2xvcjogICM1ZGIyZmY7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNWRiMmZmO1xyXG4gXHJcbiAgICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgICBwYWRkaW5nOiA4cHggMDsqLyAgICBcclxuICAgICAvLyBjb2xvcjogICM3ZTM3OTQ7XHJcbiAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0O1xyXG4gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuIFxyXG4gfVxyXG5cclxuIC5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4udGhyZWUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/vendors/list-vendor/list-vendor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vendors/list-vendor/list-vendor.component.ts ***!
  \**************************************************************/
/*! exports provided: ListVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVendorComponent", function() { return ListVendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _export_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../export-excel.service */ "./src/app/vendors/export-excel.service.ts");
/* harmony import */ var _utilities_export2Excel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utilities/export2Excel */ "./src/utilities/export2Excel.ts");










var ListVendorComponent = /** @class */ (function () {
    function ListVendorComponent(beyond, router, formBuilder, activatedRoute, http, toastr, export2Excel, excelService) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.export2Excel = export2Excel;
        this.excelService = excelService;
        this.vendorListDetails = [];
        this.vendorDetailsForExcelExport = [];
        this.displayFileModal = 'none';
        this.progressShow = false;
        this.progressHide = false;
        this.vendorDetailsForExcelDownload = [{
                vendorName: "",
                taxIdOrEIN: "",
                accountRepName: "",
                eligible1099: "",
                vendorCategory: "",
                repEmailAddress: "",
                accountNumber: "",
                phoneNumber: "",
                extensionNumber: "",
                streetAddress: "",
                unit: "",
                city: "",
                state: "",
                zipCode: "",
                status: "",
                specialNotes: "",
            }];
    }
    ListVendorComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proId = this.loginData.loginCode;
        this.getVendorList();
        this.All = true;
        {
            this.searchVendor = this.formBuilder.group({
                vendorId: [null],
                vendorName: [null],
                accountNumber: [null],
                phoneNumber: [null],
                repEmailAddress: [null],
                streetAddress: [null],
                status: [null],
                selectBy: [null]
            });
        }
    };
    ListVendorComponent.prototype.vendorSelection = function (x) {
        console.log("x" + x);
        if (x == "All") {
            this.getVendorList();
        }
        if (x == "VendorId") {
            this.VendorId = true;
            this.VendorName = false;
            this.AccountNumber = false;
            this.PhoneNumber = false;
            this.Address = false;
            this.RepEmailAddress = false;
            this.Status = false;
            this.All = false;
        }
        if (x == "VendorName") {
            this.VendorId = false;
            this.VendorName = true;
            this.AccountNumber = false;
            this.PhoneNumber = false;
            this.Address = false;
            this.RepEmailAddress = false;
            this.Status = false;
            this.All = false;
        }
        if (x == "Address") {
            this.VendorId = false;
            this.VendorName = false;
            this.AccountNumber = false;
            this.PhoneNumber = false;
            this.Address = true;
            this.RepEmailAddress = false;
            this.Status = false;
            this.All = false;
        }
        if (x == "RepEmailAddress") {
            this.VendorId = false;
            this.VendorName = false;
            this.AccountNumber = false;
            this.PhoneNumber = false;
            this.Address = false;
            this.RepEmailAddress = true;
            this.Status = false;
            this.All = false;
        }
        if (x == "PhoneNumber") {
            this.VendorId = false;
            this.VendorName = false;
            this.AccountNumber = false;
            this.PhoneNumber = true;
            this.Address = false;
            this.RepEmailAddress = false;
            this.Status = false;
            this.All = false;
        }
        if (x == "Status") {
            this.VendorId = false;
            this.VendorName = false;
            this.AccountNumber = false;
            this.PhoneNumber = false;
            this.Address = false;
            this.RepEmailAddress = false;
            this.Status = true;
            this.All = false;
        }
        if (x == "AccountNumber") {
            this.VendorId = false;
            this.VendorName = false;
            this.AccountNumber = true;
            this.PhoneNumber = false;
            this.Address = false;
            this.RepEmailAddress = false;
            this.Status = false;
            this.All = false;
        }
    };
    ListVendorComponent.prototype.reset = function () {
        this.searchVendor.reset();
        this.getVendorList();
    };
    // Search Customer Starts
    ListVendorComponent.prototype.searchVendorData = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var obj = {
            "vendorId": this.searchVendor.value.vendorId,
            "vendorName": this.searchVendor.value.vendorName,
            "accountNumber": this.searchVendor.value.accountNumber,
            "phoneNumber": this.searchVendor.value.phoneNumber,
            "repEmailAddress": this.searchVendor.value.repEmailAddress,
            "streetAddress": this.searchVendor.value.streetAddress,
            "status": this.searchVendor.value.status,
        };
        console.log(obj);
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/searchVendor/' + this.proId, [
            { id: 'vendorId', value: obj.vendorId },
            { id: 'vendorName', value: obj.vendorName },
            { id: 'accountNumber', value: obj.accountNumber },
            { id: 'phoneNumber', value: obj.phoneNumber },
            { id: 'repEmailAddress', value: obj.repEmailAddress },
            { id: 'streetAddress', value: obj.streetAddress },
            { id: 'status', value: obj.status }
        ]).subscribe(function (data) {
            _this.vendor = data.json();
            console.log("center" + JSON.stringify(_this.vendor));
            if (_this.vendor.status == 200) {
                _this.vendorListDetails = _this.vendor.response;
                _this.vendorListResponse = true;
                console.log("Vendor values" + JSON.stringify(_this.vendorListDetails));
                _this.searchVendor.reset();
            }
            else {
                _this.vendorListResponse = false;
                console.log('The else');
            }
        });
    };
    ListVendorComponent.prototype.getVendorList = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/listOfVendors' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.vendorListDetails = response.response;
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
    ListVendorComponent.prototype.addVendor = function () {
        this.router.navigate(['/vendor/addVendor']);
    };
    ListVendorComponent.prototype.viewVendor = function (data) {
        this.router.navigate(['/vendor/viewVendor', data.vendorId]);
    };
    ListVendorComponent.prototype.editVendor = function (data) {
        this.router.navigate(['/vendor/editVendor', data.id]);
    };
    ListVendorComponent.prototype.deleteInventory = function () {
    };
    ListVendorComponent.prototype.onCloseHandled = function () {
        this.displayFileModal = 'none';
    };
    ListVendorComponent.prototype.exportAsXLSX = function () {
        var _this = this;
        this.vendorDetailsForExcelExport = [];
        this.vendorListDetails.forEach(function (e) {
            _this.vendorDetailsForExcelExport.push({
                vendorName: e.vendorName,
                taxIdOrEIN: e.taxIdOrEIN,
                accountRepName: e.accountRepName,
                eligible1099: e.eligible1099,
                vendorCategory: e.vendorCategory,
                repEmailAddress: e.repEmailAddress,
                accountNumber: e.accountNumber,
                phoneNumber: e.phoneNumber,
                extensionNumber: e.extensionNumber,
                streetAddress: e.streetAddress,
                unit: e.unit,
                city: e.city,
                state: e.state,
                zipCode: e.zipCode,
                status: e.status,
                specialNotes: e.specialNotes,
            });
        });
        this.excelService.exportAsExcelFile(this.vendorDetailsForExcelExport, 'ExportVendor');
    };
    ListVendorComponent.prototype.downloadFile = function () {
        this.excelService.exportAsExcelFile(this.vendorDetailsForExcelDownload, 'DownloadVendor');
    };
    ListVendorComponent.prototype.openImport = function () {
        this.progressShow = false;
        this.progressHide = false;
        event.preventDefault();
        event.stopPropagation();
        this.displayFileModal = 'block';
    };
    ListVendorComponent.prototype.closeImport = function () {
        this.displayFileModal = 'none';
        this.excelError = false;
        this.excelfile = false;
        this.select('');
    };
    ListVendorComponent.prototype.select = function (event) {
        this.excelError = false;
        this.excelfile = false;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            console.log("TTT" + event.target.files[0].type);
            this.excelError = true;
            this.excelfile = false;
            if (event.target.files[0].type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
                this.excelData = event.target.files[0].type;
                console.log("excelData" + this.excelData);
                var file = event.target.files[0];
                this.progressShow = false;
                this.progressHide = false;
                this.filesToUpload = event.target.files[0];
            }
            else {
                this.excelError = false;
                this.progressShow = false;
                this.progressHide = false;
                this.excelfile = true;
                // alert("Please Select an Excel FILE");
            }
        }
    };
    ListVendorComponent.prototype.checking = function () {
        if (this.excelData === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
            this.import('');
        }
        else {
            // alert("Please Select an Excel FILE");
            this.excelfile = true;
        }
    };
    ListVendorComponent.prototype.import = function ($event) {
        var _this = this;
        console.log("excelData" + JSON.stringify(this.excelData));
        var url = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/vendorImport' + '/' + this.loginData.loginCode;
        var formData = new FormData();
        var xhr = new XMLHttpRequest();
        formData.append('file', this.filesToUpload);
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
                if (_this.percentage == 100) {
                    _this.toastr.success('Data imported Successfully...');
                    //location.reload();
                    _this.progressHide = true;
                    _this.displayFileModal = 'none';
                    _this.getVendorList();
                }
            }
        };
        xhr.onerror = function (e) {
        };
        xhr.onload = function () {
        };
        xhr.send(formData);
    };
    ListVendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"], _utilities_export2Excel__WEBPACK_IMPORTED_MODULE_9__["Export2Excel"]],
            selector: 'app-list-vendor',
            template: __webpack_require__(/*! ./list-vendor.component.html */ "./src/app/vendors/list-vendor/list-vendor.component.html"),
            styles: [__webpack_require__(/*! ./list-vendor.component.scss */ "./src/app/vendors/list-vendor/list-vendor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _utilities_export2Excel__WEBPACK_IMPORTED_MODULE_9__["Export2Excel"],
            _export_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExportExcelService"]])
    ], ListVendorComponent);
    return ListVendorComponent;
}());



/***/ }),

/***/ "./src/app/vendors/vendor-layout/vendor-layout.component.html":
/*!********************************************************************!*\
  !*** ./src/app/vendors/vendor-layout/vendor-layout.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/vendors/vendor-layout/vendor-layout.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/vendors/vendor-layout/vendor-layout.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvcnMvdmVuZG9yLWxheW91dC92ZW5kb3ItbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/vendors/vendor-layout/vendor-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/vendors/vendor-layout/vendor-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: VendorLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorLayoutComponent", function() { return VendorLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VendorLayoutComponent = /** @class */ (function () {
    function VendorLayoutComponent() {
    }
    VendorLayoutComponent.prototype.ngOnInit = function () {
    };
    VendorLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vendor-layout',
            template: __webpack_require__(/*! ./vendor-layout.component.html */ "./src/app/vendors/vendor-layout/vendor-layout.component.html"),
            styles: [__webpack_require__(/*! ./vendor-layout.component.scss */ "./src/app/vendors/vendor-layout/vendor-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VendorLayoutComponent);
    return VendorLayoutComponent;
}());



/***/ }),

/***/ "./src/app/vendors/vendors-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/vendors/vendors-routing.module.ts ***!
  \***************************************************/
/*! exports provided: VendorsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsRoutingModule", function() { return VendorsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vendor_layout_vendor_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor-layout/vendor-layout.component */ "./src/app/vendors/vendor-layout/vendor-layout.component.ts");
/* harmony import */ var _list_vendor_list_vendor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-vendor/list-vendor.component */ "./src/app/vendors/list-vendor/list-vendor.component.ts");
/* harmony import */ var _edit_vendor_edit_vendor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-vendor/edit-vendor.component */ "./src/app/vendors/edit-vendor/edit-vendor.component.ts");
/* harmony import */ var _view_vendor_view_vendor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-vendor/view-vendor.component */ "./src/app/vendors/view-vendor/view-vendor.component.ts");
/* harmony import */ var _add_vendor_add_vendor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-vendor/add-vendor.component */ "./src/app/vendors/add-vendor/add-vendor.component.ts");








var routes = [
    {
        path: '', component: _vendor_layout_vendor_layout_component__WEBPACK_IMPORTED_MODULE_3__["VendorLayoutComponent"],
        children: [
            {
                path: 'listVendor',
                component: _list_vendor_list_vendor_component__WEBPACK_IMPORTED_MODULE_4__["ListVendorComponent"]
            },
            {
                path: 'editVendor/:vendorId',
                component: _edit_vendor_edit_vendor_component__WEBPACK_IMPORTED_MODULE_5__["EditVendorComponent"]
            },
            {
                path: 'viewVendor/:vendorId',
                component: _view_vendor_view_vendor_component__WEBPACK_IMPORTED_MODULE_6__["ViewVendorComponent"]
            },
            {
                path: 'addVendor',
                component: _add_vendor_add_vendor_component__WEBPACK_IMPORTED_MODULE_7__["AddVendorComponent"]
            },
        ]
    }
];
var VendorsRoutingModule = /** @class */ (function () {
    function VendorsRoutingModule() {
    }
    VendorsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VendorsRoutingModule);
    return VendorsRoutingModule;
}());



/***/ }),

/***/ "./src/app/vendors/vendors.module.ts":
/*!*******************************************!*\
  !*** ./src/app/vendors/vendors.module.ts ***!
  \*******************************************/
/*! exports provided: VendorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorsModule", function() { return VendorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _vendors_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendors-routing.module */ "./src/app/vendors/vendors-routing.module.ts");
/* harmony import */ var _add_vendor_add_vendor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-vendor/add-vendor.component */ "./src/app/vendors/add-vendor/add-vendor.component.ts");
/* harmony import */ var _view_vendor_view_vendor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-vendor/view-vendor.component */ "./src/app/vendors/view-vendor/view-vendor.component.ts");
/* harmony import */ var _list_vendor_list_vendor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-vendor/list-vendor.component */ "./src/app/vendors/list-vendor/list-vendor.component.ts");
/* harmony import */ var _edit_vendor_edit_vendor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-vendor/edit-vendor.component */ "./src/app/vendors/edit-vendor/edit-vendor.component.ts");
/* harmony import */ var _vendor_layout_vendor_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor-layout/vendor-layout.component */ "./src/app/vendors/vendor-layout/vendor-layout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/prozadmin-sidemenu/proz-sidemenu.module */ "./src/app/common/prozadmin-sidemenu/proz-sidemenu.module.ts");
/* harmony import */ var _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/commonvanlynkheader/commonvanlynkheader.module */ "./src/app/common/commonvanlynkheader/commonvanlynkheader.module.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");













var VendorsModule = /** @class */ (function () {
    function VendorsModule() {
    }
    VendorsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_add_vendor_add_vendor_component__WEBPACK_IMPORTED_MODULE_4__["AddVendorComponent"], _view_vendor_view_vendor_component__WEBPACK_IMPORTED_MODULE_5__["ViewVendorComponent"], _list_vendor_list_vendor_component__WEBPACK_IMPORTED_MODULE_6__["ListVendorComponent"], _edit_vendor_edit_vendor_component__WEBPACK_IMPORTED_MODULE_7__["EditVendorComponent"], _vendor_layout_vendor_layout_component__WEBPACK_IMPORTED_MODULE_8__["VendorLayoutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _vendors_routing_module__WEBPACK_IMPORTED_MODULE_3__["VendorsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_10__["ProzSidemenuModule"],
                _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_11__["CommonvanlynkheaderModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"],
            ]
        })
    ], VendorsModule);
    return VendorsModule;
}());



/***/ }),

/***/ "./src/app/vendors/view-vendor/view-vendor.component.html":
/*!****************************************************************!*\
  !*** ./src/app/vendors/view-vendor/view-vendor.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n     <!-- Page Breadcrumb -->\r\n     <div class=\"page-breadcrumbs\">\r\n          <ul class=\"breadcrumb\">\r\n               <li>\r\n                    <i class=\"fa fa-home\"></i>\r\n                    Home\r\n               </li>\r\n               <li>Vendors</li>\r\n               <li>List of Vendors</li>\r\n               <li class=\"active\">View Vendor</li>\r\n          </ul>\r\n     </div>\r\n     <!-- /Page Breadcrumb -->\r\n\r\n     <!-- Page Header -->\r\n     <div class=\"page-header position-relative\">\r\n          <div class=\"header-title\">\r\n               <h1>\r\n                    View Vendor\r\n                    <!-- <span style=\"color: red;\">INPROGRESS</span> -->\r\n               </h1>\r\n          </div>\r\n     </div>\r\n     <!-- /Page Header -->\r\n\r\n\r\n     <!-- Page Body -->\r\n     <div class=\"page-body\">\r\n          <div class=\"row\">\r\n               <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"row\">\r\n                         <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"row\">\r\n                                   <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                                        <div class=\"well with-header with-footer three-bordered \">\r\n                                             <div class=\"header gray\">\r\n                                                  View Vendor\r\n                                             </div>\r\n                                             <div id=\"registration-form\">\r\n                                                  <form *ngIf=\"dataVendor\">\r\n                                                       <div class=\"row\">\r\n                                                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                                                 <!-- Row 1 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"vendorIDLbl\">\r\n                                                                                     <b>Vendor ID </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"vendorIdLbl\">\r\n                                                                                     {{this.vendorId}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"vendorNameLbl\">\r\n                                                                                     <b>Vendor Name</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"vendorNameLbl\">\r\n                                                                                     {{vendorData.vendorName}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 1 -->\r\n                                                                 <!-- Row 2 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"creditLimitLbl\">\r\n                                                                                     <b>Tax ID/EIN</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"taxIdOrEINLbl\">\r\n                                                                                     {{vendorData.taxIdOrEIN}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Account Rep Name</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"accountRepNameLbl\">\r\n                                                                                     {{vendorData.accountRepName}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 2 -->\r\n                                                                 <!-- Row 3-->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"sourceLbl\">\r\n                                                                                     <b>1099 Eligible </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <!--Checked-->\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <div class=\"checkbox\">\r\n                                                                                     <label>\r\n                                                                                          <input type=\"checkbox\"\r\n                                                                                               class=\"colored-success\"\r\n                                                                                               [ngModelOptions]=\"{standalone: true}\"\r\n                                                                                               [(ngModel)]=\"vendorData.eligible1099\"\r\n                                                                                               disabled>\r\n                                                                                          <span class=\"text\"> </span>\r\n                                                                                     </label>\r\n                                                                                </div>\r\n                                                                           </div>\r\n\r\n                                                                      </div>\r\n                                                                      <!--/Checked-->\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"typeOrCategoryLbl\">\r\n                                                                                     <b>Type / Category</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"vendorCategoryLbl\">\r\n                                                                                     {{vendorData.vendorCategory}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 3 -->\r\n                                                                 <!-- Row 4 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"emailLbl\">\r\n                                                                                     <b>Email\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"repEmailAddressLbl\">\r\n                                                                                     {{vendorData.repEmailAddress}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Account #</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"accountNumberLbl\">\r\n                                                                                     {{vendorData.accountNumber}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 4 -->\r\n                                                                 <!-- Row 5 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"emailLbl\">\r\n                                                                                     <b>Phone\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"phoneNumberLbl\">\r\n                                                                                     {{vendorData.phoneNumber}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Ext.</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"extensionNumberLbl\">\r\n                                                                                     {{vendorData.extensionNumber}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 5 -->\r\n                                                                 <!-- Row 6 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"emailLbl\">\r\n                                                                                     <b>Street Address\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"streetAddressLbl\">\r\n                                                                                     {{vendorData.streetAddress}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Unit #</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"unitLbl\">\r\n                                                                                     {{vendorData.unit}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 6 -->\r\n                                                                 <!-- Row 7 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"emailLbl\">\r\n                                                                                     <b>City\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"cityLbl\">\r\n                                                                                     {{vendorData.city}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>State</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"stateLbl\">\r\n                                                                                     {{vendorData.state}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 7 -->\r\n                                                                 <!-- Row 8 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"zipCodeLbl\">\r\n                                                                                     <b>Zip Code\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"zipCodeLbl\">\r\n                                                                                     {{vendorData.zipCode}}\r\n                                                                                </label>\r\n\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"statusLbl\">\r\n                                                                                     <b>Status</b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"statusLbl\">\r\n                                                                                     {{vendorData.status}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n                                                                 </div>\r\n                                                                 <!-- /Row 8 -->\r\n                                                                 <!--Row 9-->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"donotServeNotesLbl\">\r\n                                                                                     <b>Special Notes </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-6\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"specialNotesLbl\">\r\n                                                                                     {{vendorData.specialNotes}}\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n\r\n\r\n                                                                 </div>\r\n                                                                 <!--/Row 9-->\r\n                                                            </div>\r\n                                                       </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                                                       <!-- Bottom Buttons -->\r\n                                                       <div class=\"row\">\r\n                                                            <div class=\"col-lg-3\">\r\n                                                            </div>\r\n                                                            <div class=\"col-lg-3 button-center\">\r\n                                                                 <button type=\"submit\" class=\"btn btn-blue\"\r\n                                                                      (click)=\"okButton()\"><i class=\"fa fa-check\"></i>\r\n                                                                      Ok\r\n                                                                 </button>\r\n                                                            </div>\r\n                                                            <div class=\"col-lg-3 button-center\">\r\n                                                                 <button type=\"button\" class=\"btn btn-gray\"\r\n                                                                      (click)=\"editVendor()\"><i\r\n                                                                           class=\"fa fa-pencil\"></i>\r\n                                                                      Edit</button>\r\n                                                            </div>\r\n                                                            <div class=\"col-lg-3\">\r\n                                                            </div>\r\n\r\n\r\n                                                       </div>\r\n                                                       <!-- /Bottom Buttons -->\r\n\r\n\r\n                                                  </form>\r\n                                             </div>\r\n                                        </div>\r\n                                   </div>\r\n                              </div>\r\n                         </div>\r\n                    </div>\r\n               </div>\r\n          </div>\r\n     </div>\r\n     <!-- /Page Body -->\r\n</div>\r\n<!-- /Page Content -->\r\n\r\n<!-- /Page Container -->\r\n\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/vendors/view-vendor/view-vendor.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/vendors/view-vendor/view-vendor.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9ycy92aWV3LXZlbmRvci9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxcdmVuZG9yc1xcdmlldy12ZW5kb3JcXHZpZXctdmVuZG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7c0JBQ2lCO0VBR2pCLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCOzBCQUNzQixFQUV4Qjs7QUFHRjtFQUNLLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUIiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3JzL3ZpZXctdmVuZG9yL3ZpZXctdmVuZG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5mb3JtLXRpdGxle1xyXG4gICAgIGNvbG9yOiAgIzVkYjJmZjtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1ZGIyZmY7XHJcbiBcclxuICAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIHBhZGRpbmc6IDhweCAwOyovICAgIFxyXG4gICAgIC8vIGNvbG9yOiAgIzdlMzc5NDtcclxuICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7XHJcbiAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG4gXHJcbiB9XHJcblxyXG4gIFxyXG4uYnRuLWdyYXl7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/vendors/view-vendor/view-vendor.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vendors/view-vendor/view-vendor.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVendorComponent", function() { return ViewVendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");









var ViewVendorComponent = /** @class */ (function () {
    function ViewVendorComponent(beyond, router, route, http, toastr, httpClient, spinner) {
        this.beyond = beyond;
        this.router = router;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.httpClient = httpClient;
        this.spinner = spinner;
        this.dataVendor = false;
    }
    ViewVendorComponent.prototype.ngOnInit = function () {
        this.vendorId = this.route.snapshot.params['vendorId'];
        this.beyond.beyondAdmin();
        this.viewDataValues = JSON.parse(localStorage.getItem("viewData"));
        console.log("viewDataValues" + JSON.stringify(this.viewDataValues));
        this.viewVendor();
    };
    ViewVendorComponent.prototype.okButton = function () {
        this.router.navigate(['vendor/listVendor']);
    };
    ViewVendorComponent.prototype.editVendor = function () {
        this.router.navigate(['vendor/editVendor', this.vendorId]);
    };
    // start view Vendor
    ViewVendorComponent.prototype.viewVendor = function () {
        var _this = this;
        this.spinner.show();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/viewVendors/' + this.vendorId, options)
            .subscribe(function (data) {
            var vendor = data.json();
            if (vendor.status == 200) {
                _this.spinner.hide();
                _this.vendorData = vendor.response[0];
                if (_this.vendorData.eligible1099 == 'true' ||
                    _this.vendorData.eligible1099 == 'TRUE')
                    _this.vendorData.eligible1099 = true;
                if (_this.vendorData.eligible1099 == "" ||
                    _this.vendorData.eligible1099 == 'false' ||
                    _this.vendorData.eligible1099 == 'FALSE')
                    _this.vendorData.eligible1099 = false;
                console.log("vendor Data", JSON.stringify(_this.vendorData));
                _this.dataVendor = true;
            }
            else {
                _this.dataVendor = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    ViewVendorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-view-vendor',
            template: __webpack_require__(/*! ./view-vendor.component.html */ "./src/app/vendors/view-vendor/view-vendor.component.html"),
            styles: [__webpack_require__(/*! ./view-vendor.component.scss */ "./src/app/vendors/view-vendor/view-vendor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], ViewVendorComponent);
    return ViewVendorComponent;
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
//# sourceMappingURL=vendors-vendors-module.js.map