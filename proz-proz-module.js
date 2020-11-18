(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proz-proz-module"],{

/***/ "./src/app/proz/Equipment/add-new-equipment/add-new-equipment.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/proz/Equipment/add-new-equipment/add-new-equipment.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <!-- <li>\r\n            <a>Equipment</a>\r\n          </li> -->\r\n          <li>\r\n            <a (click)=\"listEquipment()\">List of Equipment</a>\r\n          </li>\r\n          <li class=\"active\">Add Equipment</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Add Equipment</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body  (ngSubmit)=\"onSubmit()\"-->\r\n\r\n      <div class=\"page-body\">\r\n        <form *ngIf=\"addEquipmentData\" [formGroup]=\"addEquipmentData\" >\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                      <div class=\"well with-header with-footer three-bordered\">\r\n                        <div class=\"header gray\">\r\n                          Add Equipment\r\n                        </div>\r\n                        <div id=\"registeration-form\">\r\n\r\n                          <!-- Add  Equipment Part -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"idLbl\">\r\n                                  <b>Equipment ID <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" value=\"{{equipmentID}}\"\r\n                                    formControlName=\"equipmentId\" readonly>\r\n                                </span>\r\n                              </div>\r\n                            </div>                            \r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"Add PictureLbl\">\r\n                                  <b>Show On Equipment Board </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <div class=\"checkbox\">\r\n                                     <label>\r\n                                          <input type=\"checkbox\"\r\n                                               class=\"colored-success\" formControlName=\"showOnEquipmentBoard\"\r\n                                               >\r\n                                          <span class=\"text\"> </span>\r\n                                     </label>\r\n                                </div>\r\n                           </div>\r\n                            </div>\r\n                            \r\n                          </div>\r\n                          \r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b> Equipment Name    <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"   formControlName=\"equipmentName\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.equipmentName.errors }\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.equipmentName.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.equipmentName.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Equipment Name</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b>Description  </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"\"   formControlName=\"description\"\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\">\r\n                              </span>\r\n                              <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.description.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\">Enter Description</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"costPerUnitLbl\">\r\n                                  <b> Purchase Date<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"date\" class=\"form-control\" formControlName=\"purchaseDate\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.purchaseDate.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.purchaseDate.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter category</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-lg-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"stateLbl\">\r\n                                  <b>Current Location <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select class=\"form-control\" id=\"stateRegistred\" name=\"location\"\r\n                                  data-bv-field=\"row-title\" formControlName=\"location\"\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\">\r\n                                  <option value=\"\">Select</option>\r\n                                  <option *ngFor=\"let data of statesData\" value={{data.stateName}}>\r\n                                    {{data.stateName}}\r\n                                  </option>\r\n                                </select>\r\n                                <div *ngIf=\"submitted && f.location.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.location.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Select Location</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            \r\n                          </div>\r\n                         \r\n\r\n                          <div class=\"row\">\r\n                           \r\n                            \r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"subcategoryLbl\">\r\n                                  <b>Category <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <select class=\"form-control\" formControlName=\"itemCategoryCode\" [(ngModel)]=\"category\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.itemCategoryCode.errors }\"\r\n                                    (change)=\"getEquipmentSubCategory(category)\">\r\n                                    <option>--Select--</option>\r\n                                    <option *ngFor='let data of equipmentCat' value={{data.category}}>\r\n                                      {{data.category}}</option>\r\n                                  </select>\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.itemCategoryCode.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.itemCategoryCode.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Category</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"subcategoryLbl\">\r\n                                  <b>Sub Category <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n\r\n                                  <select class=\"form-control\" formControlName=\"itemSubCategoryCode\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.itemSubCategoryCode.errors }\">\r\n                                    <option>--Select--</option>\r\n                                    <option *ngFor='let data of equipmentsubCat' value={{data.subCategory}}>\r\n                                      {{data.subCategory}}</option>\r\n                                  </select>\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.itemSubCategoryCode.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.itemSubCategoryCode.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter SubCategory</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b> Manufacturer <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"manufacturer\">\r\n                              </span>\r\n                              <div *ngIf=\"submitted && f.manufacturer.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.manufacturer.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\">Enter Manufacturer</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b>Serial # <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"serialNo\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.serialNo.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.serialNo.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Serial No.</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"sizeLbl\">\r\n                                  <b>Model Number <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"model\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.model.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.model.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Model Number</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"colorLbl\">\r\n                                  <b>Purchase Price<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"PurchasePrice\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.PurchasePrice.errors }\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.PurchasePrice.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.PurchasePrice.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Purchase Price</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"maincategoryLbl\">\r\n                                  <b> Size <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"size\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.size.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.size.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Size</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"subcategoryLbl\">\r\n                                  <b>Present Price <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"presentPrice\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.presentPrice.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.presentPrice.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Present Price</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"maincategoryLbl\">\r\n                                  <b> Color <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"color\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.color.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.color.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Color</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"yearLbl\">\r\n                                  <b>Status<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select class=\"form-control\" formControlName=\"status\"\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\">\r\n                                 \r\n                                  <option value=\"Available\">Available</option>                                  \r\n                                  <option value=\"Un Available\">Un Available</option>\r\n                                  <option value=\"In Active\">IN ACTIVE</option>\r\n                                  <option value=\"In Repair\">IN REPAIR</option>                                  \r\n                                </select>\r\n                                <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.status.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\"> Required Status</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row\"><div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"vendorLbl\">\r\n                                <b>Vendor </b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <select class=\"form-control\" formControlName=\"vendor\"\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.vendor.errors }\">\r\n                                  <option>--Select--</option>\r\n                                  <option *ngFor='let data of vendorListDetails' value={{data.vendorName}}>\r\n                                    {{data.vendorName}}</option>\r\n                                </select>\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"Add PictureLbl\">\r\n                                <b>Upload Picture </b>\r\n                              </label>\r\n                            </div>\r\n                            <!-- <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"customerNameLbl\">\r\n                                  <input type='file' (change)=\"onSelectFile($event)\" style=\"margin-left:6em;\"\r\n                                    [(ngModel)]=\"filesToUpload.length\" [ngModelOptions]=\"{standalone: true}\" multiple>\r\n                                </label>\r\n                              </div>\r\n                            </div> -->\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <div *ngIf=\"!withOutImage\" style=\"width: 100px; height: 120px;\"\r\n                                class=\"fileupload-new thumbnail\">\r\n                                <img [src]=\"imagePreview\" style=\"height:120px;width:100px;\">\r\n                              </div>\r\n                              <div *ngFor=\"let x of arr;let i=index\">\r\n                                <br>\r\n                                <div *ngIf=\"withOutImage\" height=\"100px\" width=\"120px\" class=\"icon1\">\r\n                                  {{imageNames[i]?.image}}<i (click)=\"removeSelectedFile(i)\"\r\n                                    style=\"margin-left:10px;color: red\" class=\"fa fa-times\"></i>\r\n                                  <br />\r\n\r\n                                  <img src=\"{{x.name}}\" height=\"100px\" width=\"120px\">\r\n                                </div>\r\n                                <br />\r\n                              </div>\r\n                              <input type='file' (change)=\"onSelectFile($event)\" [(ngModel)]=\"filesToUpload.length\"\r\n                                [ngModelOptions]=\"{standalone: true}\" multiple>\r\n                              <br />\r\n                              <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"progressData()\"\r\n                                [disabled]=\"!img\">\r\n                                Upload\r\n                              </button>\r\n                              <br>\r\n                              <br>\r\n                              <div *ngIf=\"progressShow\" class=\"progress-bar1 green stripes\">\r\n                                <span [style.width.%]=\"percentage\">\r\n                                  <p style=\"text-align: center;color:black;font-size:18px;\">\r\n                                    {{percentage}}%</p>\r\n                                </span>\r\n                              </div>\r\n                              <div *ngIf=\"progressHide\" class=\"alert alert-block alert-success\" style=\"height:3px;\">\r\n                                <h4 class=\"alert\" style=\"margin-top:-19px;text-align:center;height:3em;\">\r\n                                  Images\r\n                                  Uploaded\r\n                                  Successfully</h4>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                            \r\n                            \r\n                            <!-- <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"Add PictureLbl\">\r\n                                  <b>Add to Inventory</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <div class=\"checkbox\">\r\n                                     <label>\r\n                                          <input type=\"checkbox\"\r\n                                               class=\"colored-success\"\r\n                                               formControlName=\"Inventory\">\r\n                                          <span class=\"text\"> </span>\r\n                                     </label>\r\n                                </div>\r\n                           </div>\r\n                            </div> -->\r\n                            \r\n                          </div>\r\n                          \r\n     \r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-4\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                           \r\n                            <div class=\"col-lg-3 button-center\" >\r\n                              <button type=\"submit\" class=\"btn btn-success\" (click)=\"onSubmit()\"><i class=\"fa fa-check\"></i>\r\n                                Save</button>\r\n                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\r\n                                <button type=\"submit\" class=\"btn btn-danger\" (click)=\"Oncancel()\"><i class=\"fa fa-times\"></i>\r\n                                  Cancel</button>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              \r\n                            </div>\r\n                \r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <br />\r\n                          <!-- /Add  Inventory Part-->\r\n                          <!-- </form> -->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/proz/Equipment/add-new-equipment/add-new-equipment.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/proz/Equipment/add-new-equipment/add-new-equipment.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5DB2FF;\n  /*display: block;\r\n    padding: 8px 0;*/\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\n.tag {\n  background-color: #08970c;\n  opacity: 0.9;\n  text-align: center; }\n\n.button-center {\n  text-align: center; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei9FcXVpcG1lbnQvYWRkLW5ldy1lcXVpcG1lbnQvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3pcXEVxdWlwbWVudFxcYWRkLW5ldy1lcXVpcG1lbnRcXGFkZC1uZXctZXF1aXBtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmO3FCQUNpQjtFQUNqQixrQ0FBaUM7RUFDakMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7eUJBQ3NCLEVBQ3hCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLHNDQUFxQyxFQUN4Qzs7QUFDRDtFQUNJLDBCQUFnQztFQUFDLGFBQVc7RUFDNUMsbUJBQWtCLEVBR3JCOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0csbUJBQWtCLEVBQ3BCOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkMiLCJmaWxlIjoic3JjL2FwcC9wcm96L0VxdWlwbWVudC9hZGQtbmV3LWVxdWlwbWVudC9hZGQtbmV3LWVxdWlwbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXRpdGxle1xyXG4gICAgY29sb3I6ICAjNURCMkZGO1xyXG4gICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDhweCAwOyovXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1REIyRkY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbn1cclxuXHJcbi5tYW5kYXRvcnl7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaHItZ3JheXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG59IFxyXG4udGFneyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDgsIDE1MSwgMTIpO29wYWNpdHk6MC45O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxuXHJcbn0gXHJcblxyXG4uYnV0dG9uLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tb2Nre1xyXG4gICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2NrLWNvbmZ7XHJcbiAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wcm9ncmVzc3tcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGhyZWUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2hlY2tib3gtY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JheXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWJsdWV7ICAgIFxyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/proz/Equipment/add-new-equipment/add-new-equipment.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/proz/Equipment/add-new-equipment/add-new-equipment.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddNewEquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewEquipmentComponent", function() { return AddNewEquipmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../global/config */ "./src/global/config.ts");









var AddNewEquipmentComponent = /** @class */ (function () {
    function AddNewEquipmentComponent(beyond, router, formBuilder, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.filesToUpload = [];
        this.newArray = [];
        this.uniqueArray = [];
        this.imageNames = [];
        this.urls = [];
        this.percentage = 0;
        this.imagePreview = "../../../assets/img/no-image.png";
    }
    AddNewEquipmentComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proData = this.loginData.loginCode;
        this.proCode = this.loginData.loginCode;
        this.getEquipmentId(this.proCode);
        this.getVendorList();
        this.getListOfStates();
        this.getEquipmentCategory();
        this.addEquipmentData = this.formBuilder.group({
            equipmentId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            equipmentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            purchaseDate: [_global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].year + "-" + _global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].month + "-" + _global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].day, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            showOnEquipmentBoard: [false],
            itemCategoryCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            itemSubCategoryCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            size: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            serialNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            manufacturer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            vendor: [''],
            PurchasePrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            presentPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    };
    AddNewEquipmentComponent.prototype.getEquipmentId = function (proCode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        //this.http.get(Global.url + '/generateEquipmentID/' + proCode, options)
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/generateEquipmentID', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.equipmentID = response.equipmentId;
            console.log("Equipment number" + _this.equipmentID);
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    AddNewEquipmentComponent.prototype.getVendorList = function () {
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
    Object.defineProperty(AddNewEquipmentComponent.prototype, "f", {
        // getToday(){}
        //IMAGE UPLOAD
        get: function () { return this.addEquipmentData.controls; },
        enumerable: true,
        configurable: true
    });
    AddNewEquipmentComponent.prototype.handleImage = function (file) {
        var _this = this;
        var picReader = new FileReader();
        picReader.onload = function (e) {
            var reader = e.target;
            _this.imagePreview = reader.result;
        };
        picReader.readAsDataURL(file);
    };
    AddNewEquipmentComponent.prototype.select = function (event) {
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
            this.imagePreview = "../../../assets/img/no-image.png";
        }
    };
    AddNewEquipmentComponent.prototype.onSelectFile = function (fileInput) {
        var _this = this;
        this.arr = [];
        this.imageArray = [];
        this.progressHide1 = false;
        console.log("fileInput.target.files" + fileInput.target.files);
        console.log("Array checking" + fileInput.target.files.length);
        if (fileInput.target.files.length == 1) {
            this.filesToUpload.push(fileInput.target.files[0]);
            this.img = true;
            this.withOutImage = true;
            this.chosseTypecount = this.filesToUpload.length;
        }
        else {
            for (var i = 0; i < fileInput.target.files.length; i++) {
                this.img = true;
                this.withOutImage = true;
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
            this.img = true;
            this.withOutImage = true;
            reader.onload = function (fileInput) {
                console.log(fileInput.target.result);
                _this.urls.push(fileInput.target.result);
                // this.arr.push({ name: fileInput.target.result });
                // console.log("checking data" + this.urls.length)
                // console.log("array names" + JSON.stringify(this.arr))
                _this.imageuploadstatus = true;
            };
            reader.readAsDataURL(fileInput.target.files[i_1]);
        }
        this.uploadData();
    };
    AddNewEquipmentComponent.prototype.uploadData = function () {
        var _this = this;
        console.log("upload is calling");
        var files = this.filesToUpload;
        //console.log(files);
        console.log("files.lenght" + files.length);
        this.formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            this.formData.append("fileImage", files[i]);
        }
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/multiEqiImgData', this.formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) {
            for (var i = 0; i < files.imagePath.length; i++) {
                _this.newArray.push(files.imagePath[i]);
                console.log("  this.newArray" + JSON.stringify(_this.newArray));
            }
            _this.uniqueArray = Array.from(new Set(_this.newArray));
            _this.imageNames = Object.keys(_this.uniqueArray).map(function (key) { return ({ type: key, image: _this.uniqueArray[key] }); });
            _this.arr = Object.keys(_this.uniqueArray).map(function (key) { return ({ type: key, name: _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/" + _this.uniqueArray[key] }); });
        });
    };
    AddNewEquipmentComponent.prototype.progressData = function () {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/multiEqiImgData";
        var formData = new FormData();
        var xhr = new XMLHttpRequest();
        formData.append("fileImage", this.file2Upload);
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
                }
            }
        };
        xhr.onerror = function (e) { };
        xhr.onload = function () {
            var a = JSON.parse(xhr.responseText);
            _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].secimagePath = a.imagePath;
        };
        xhr.send(formData);
    };
    AddNewEquipmentComponent.prototype.removeSelectedFile = function (i) {
        this.arr.splice(i, 1);
        this.imageNames.splice(i, 1);
        this.uniqueArray = [];
        for (var p = 0; p < this.arr.length; p++) {
            this.value = this.arr[p].name;
            this.uniqueArray.push(this.arr[p].name.substring(25, 50));
            console.log('uniqueArray' + '' + this.uniqueArray);
        }
    };
    AddNewEquipmentComponent.prototype.getEquipmentCategory = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/equipmentProcat' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentCat = response.response;
                console.log("equipmentCat details" + JSON.stringify(_this.equipmentCat));
                _this.priceBookServiceResponse = true;
            }
            else {
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    AddNewEquipmentComponent.prototype.getEquipmentSubCategory = function (category) {
        var _this = this;
        console.log("category" + category);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/equipmentProSubcatgory/' + category + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentsubCat = response.response;
                console.log("equipmentCat details" + JSON.stringify(_this.equipmentCat));
                _this.priceBookServiceResponse = true;
            }
            else {
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    AddNewEquipmentComponent.prototype.getListOfStates = function () {
        var _this = this;
        // this.zipcodeValue = JSON.parse(localStorage.getItem('zipcode'))
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
    AddNewEquipmentComponent.prototype.listEquipment = function () {
        this.router.navigate(['/proz/listEquipment']);
    };
    AddNewEquipmentComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    AddNewEquipmentComponent.prototype.purchaseDatas = function (pDate) {
        this.PurchaseDateValue = pDate;
    };
    AddNewEquipmentComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.addEquipmentData.value.equipmentID == '') {
            return;
        }
        else if (this.addEquipmentData.value.equipmentName == '') {
            return;
        }
        else if (this.addEquipmentData.value.purchaseDate == '') {
            return;
        }
        else if (this.addEquipmentData.value.status == '') {
            return;
        }
        // stop here if form is invalid
        if (this.addEquipmentData.invalid) {
            this.saveButton();
            return;
        }
        else {
        }
    };
    AddNewEquipmentComponent.prototype.saveButton = function () {
        var _this = this;
        if (this.addEquipmentData.value.itemCategoryCode != '' && this.addEquipmentData.value.itemSubCategoryCode != '' && this.addEquipmentData.value.name != '') {
            var addObj = {
                "proId": this.proCode,
                "equipmentId": '' + this.equipmentID,
                "equipmentName": '' + this.addEquipmentData.value.equipmentName,
                "description": '' + this.addEquipmentData.value.description,
                "date": '' + this.addEquipmentData.value.purchaseDate,
                //"existingQty": '' + this.existQty == undefined ? '' : this.existQty,
                "location": '' + this.addEquipmentData.value.location == undefined ? '' : this.addEquipmentData.value.location,
                //"qty": '' + this.quantityAdd == undefined ? '' : this.quantityAdd,
                //"totalQuantity": '' + this.totalQuantityData == undefined ? '' : this.totalQuantityData,
                "manufacturer": '' + this.addEquipmentData.value.manufacturer,
                "model": '' + this.addEquipmentData.value.model,
                "size": '' + this.addEquipmentData.value.size,
                "color": '' + this.addEquipmentData.value.color,
                "showOnEquipmentBoard": '' + this.addEquipmentData.value.showOnEquipmentBoard,
                "category": '' + this.addEquipmentData.value.itemCategoryCode == undefined ? '' : this.addEquipmentData.value.itemCategoryCode,
                "subCategory": '' + this.addEquipmentData.value.itemSubCategoryCode == undefined ? '' : this.addEquipmentData.value.itemSubCategoryCode,
                "serialNo": '' + this.addEquipmentData.value.serialNo,
                "purchasePrice": '' + this.addEquipmentData.value.PurchasePrice,
                //"vendorName": '' + this.addEquipmentData.value.vendorName,
                // "webLinkDetails": '' + this.addEquipmentData.value.webLinkDetails,
                "vendorName": '' + this.addEquipmentData.value.vendor == undefined ? '' : this.addEquipmentData.value.vendor,
                //"type": '' + this.addEquipmentData.value.type,
                //"unit": '' + this.addEquipmentData.value.unit == undefined ? '' : this.addEquipmentData.value.unit,
                "presentPrice": '' + this.addEquipmentData.value.presentPrice,
                "status": '' + this.addEquipmentData.value.status,
                "pictures": '' + this.uniqueArray,
            };
            console.log("ADD OBJ" + JSON.stringify(addObj));
            this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/addEquipment/' + this.proCode, addObj)
                .subscribe(function (data) {
                var partInfoData = data.json();
                if (partInfoData.status == 200) {
                    // alert(200)
                    _this.toastr.success('Item Data Added Successfuly...');
                    //this.listEquipment();
                    _this.router.navigate(['/proz/listEquipment']);
                }
                else {
                }
            }, function (error) {
                console.log(error); // Error getting the data
            });
        }
    };
    AddNewEquipmentComponent.prototype.Oncancel = function () {
        this.router.navigate(['/proz/listEquipment']);
    };
    AddNewEquipmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-add-new-equipment',
            template: __webpack_require__(/*! ./add-new-equipment.component.html */ "./src/app/proz/Equipment/add-new-equipment/add-new-equipment.component.html"),
            styles: [__webpack_require__(/*! ./add-new-equipment.component.scss */ "./src/app/proz/Equipment/add-new-equipment/add-new-equipment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], AddNewEquipmentComponent);
    return AddNewEquipmentComponent;
}());



/***/ }),

/***/ "./src/app/proz/Equipment/book-equipment/book-equipment.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/proz/Equipment/book-equipment/book-equipment.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n\r\n<div class=\"page-content\">\r\n     <!-- Page Breadcrumb -->\r\n     <div class=\"page-breadcrumbs\">\r\n          <ul class=\"breadcrumb\">\r\n               <li>\r\n                    <i class=\"fa fa-home\"></i>\r\n                    <a (click)=\"home()\">Home</a>\r\n                  </li>\r\n               <li> Book an Equipment</li>\r\n               \r\n          </ul>\r\n     </div>\r\n     <!-- /Page Breadcrumb -->\r\n\r\n     <!-- Page Header -->\r\n     <div class=\"page-header position-relative\">\r\n          <div class=\"header-title\">\r\n               <h1>\r\n                   Book an Equipment\r\n                    <!-- <span style=\"color: red;\">IN PROGRESS</span> -->\r\n               </h1>\r\n          </div>\r\n     </div>\r\n     <!-- /Page Header -->\r\n\r\n\r\n     <!-- Page Body -->\r\n     <div class=\"page-body\">\r\n          <div class=\"row\">\r\n               <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"row\">\r\n                         <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"row\">\r\n                                   <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                                        <div class=\"well with-header with-footer three-bordered \">\r\n                                             <div class=\"header gray\">\r\n                                              Book an Equipment\r\n                                             </div>\r\n                                             <div id=\"registration-form\">\r\n                                                  <form *ngIf=\"addBookEquipment\"  [formGroup]=\"addBookEquipment\">\r\n                                                       <div class=\"row\">\r\n                                                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                                                 <!-- Row 1 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                        <div class=\"form-group\">\r\n                                                                          <label for=\"idLbl\">\r\n                                                                            <b>Equipment Book ID <span class=\"mandatory\">*</span></b>\r\n                                                                          </label>\r\n                                                                        </div>\r\n                                                                      </div>\r\n                                          \r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                        <div class=\"form-group\">\r\n                                                                          <span class=\"input-icon icon-right\">\r\n                                                                            <input type=\"text\" class=\"form-control\" placeholder=\"\" value=\"{{equipmentBookId}}\"\r\n                                                                              formControlName=\"equipmentBookId\" readonly>\r\n                                                                          </span>\r\n                                                                        </div>\r\n                                                                      </div>\r\n                                                                      \r\n                                                                 </div>\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"vendorIDLbl\">\r\n                                                                                     <b>Equipment Name <span class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <select class=\"form-control\" id=\"stateRegistred\" name=\"equipmentName\"\r\n                                                                                  data-bv-field=\"row-title\" formControlName=\"equipmentName\" (change)=\"getSingleEquipmentName($event.target.value)\"\r\n                                                                                  [ngClass]=\"{ 'is-invalid': submitted && f.equipmentName.errors }\">\r\n                                                                                  <option value=\"\">Select</option>\r\n                                                                                  <option *ngFor=\"let data of equipmentListDetails\" value={{data.equipmentName}}>\r\n                                                                                    {{data.equipmentName}}\r\n                                                                                  </option>\r\n                                                                                </select>\r\n                                                                                <div *ngIf=\"submitted && f.equipmentName.errors\" class=\"invalid-feedback\">\r\n                                                                                  <div *ngIf=\"f.equipmentName.errors.required\">\r\n                                                                                    <p style=\"color: red; font-size: 11px\">Equipment Name</p>\r\n                                                                                  </div>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"bookbyStaffLbl\">\r\n                                                                                     <b>Book by Staff <span class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <!-- <input type=\"text\" formControlName=\"bookbyStaff\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"bookbyStaff\"\r\n                                                                                          > -->\r\n                                                                                          <select class=\"form-control\" id=\"stateRegistred\" name=\"bookbyStaff\"\r\n                                                                                  data-bv-field=\"row-title\" formControlName=\"bookbyStaff\" \r\n                                                                                  [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\">\r\n                                                                                  <option value=\"\">Select</option>\r\n                                                                                  <option *ngFor=\"let data of employeeList\" value={{data.firstName}}{{data.lastName}}>\r\n                                                                                     {{data.firstName}} {{data.lastName}}\r\n                                                                                  </option>\r\n                                                                                </select>\r\n                                                                                </span>\r\n                                                                                <div *ngIf=\"submitted && f.bookbyStaff.errors\" class=\"invalid-feedback\">\r\n                                                                                     <div *ngIf=\"f.bookbyStaff.errors.required\">\r\n                                                                                       <p style=\"color: red; font-size: 11px\">Enter Book by Staff</p>\r\n                                                                                     </div>\r\n                                                                                   </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 1 -->\r\n                                                                 <!-- Row 2 -->\r\n                                                                 <div class=\"row\">\r\n\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Check Out Date <span class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <input type=\"date\" class=\"form-control\" formControlName=\"checkOutDate\" \r\n                                                                                     placeholder=\"\" min=\"{{ startMin }}\"\r\n                                                                                     [max]=\"startMax\" (change)=\"onStartDateSelected($event.target.value)\"\r\n                                                                                     onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\"\r\n                                                                                     >\r\n                                                                                     <div *ngIf=\"submitted && f.checkOutDate.errors\" class=\"invalid-feedback\">\r\n                                                                                          <div *ngIf=\"f.checkOutDate.errors.required\">\r\n                                                                                            <p style=\"color: red; font-size: 11px\">Enter Check Out Date</p>\r\n                                                                                          </div>\r\n                                                                                        </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"sourceLbl\">\r\n                                                                                     <b>Check Out Time <span class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"time\" formControlName=\"checkOutTime\" value=\"checkOutTime\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\" (change)=\"onSelectedStartTime($event)\"\r\n                                                                                          >\r\n                                                                                     <!-- <input type=\"time\" formControlName=\"checkOutTime\" value=\"checkOutTime\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\" (change)=\"onStartTime($event.target.value)\"\r\n                                                                                          > -->\r\n                                                                                </span>\r\n                                                                                <div style=\"color:red;\">\r\n                                                                                     {{checkOutTimeErrorMsg}}\r\n                                                                                   </div>\r\n                                                                                <div *ngIf=\"submitted && f.checkOutTime.errors\" class=\"invalid-feedback\">\r\n                                                                                     <div *ngIf=\"f.checkOutTime.errors.required\">\r\n                                                                                       <p style=\"color: red; font-size: 11px\">Enter Check Out Time</p>\r\n                                                                                     </div>\r\n                                                                                   </div>\r\n                                                                           </div>\r\n\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 2 -->\r\n                                                                 <!-- Row 3-->\r\n                                                                 <div class=\"row\">\r\n                                                                    \r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"typeOrCategoryLbl\">\r\n                                                                                     <b>Return Date <span class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                        <div class=\"form-group\">\r\n                                                                             <span class=\"input-icon icon-right\">\r\n                                                                                  <input type=\"date\" formControlName=\"returnDate\"\r\n                                                                                       class=\"form-control\"\r\n                                                                                       placeholder=\"\" (change)=\"\r\n                                                                                       onEndDateSelected(\r\n                                                                                         $event.target.value\r\n                                                                                       )\"\r\n                                                                                     onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\" \r\n                                                                                       >\r\n                                                                             </span>\r\n                                                                             <div *ngIf=\"submitted && f.returnDate.errors\" class=\"invalid-feedback\">\r\n                                                                                <div *ngIf=\"f.returnDate.errors.required\">\r\n                                                                                  <p style=\"color: red; font-size: 11px\">Enter Return Date</p>\r\n                                                                                </div>\r\n                                                                              </div>\r\n                      \r\n                                                                        </div>\r\n                                                                   </div>\r\n                                                                   <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"emailLbl\">\r\n                                                                                <b>Return Time<span class=\"mandatory\">*</span>\r\n                                                                                </b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <span class=\"input-icon icon-right\">\r\n                                                                                <input type=\"time\" formControlName=\"returnTime\"\r\n                                                                                     class=\"form-control\"\r\n                                                                                     placeholder=\"\" (change)=\"\r\n                                                                                     onEndTime(\r\n                                                                                       $event.target.value\r\n                                                                                     )\r\n                                                                                   \"\r\n                                                                                   onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\" >\r\n                                                                           </span>\r\n                                                                           <div style=\"color:red;\">\r\n                                                                                {{ returnTimeErrorMsg }}\r\n                                                                              </div>\r\n                                                                           <div *ngIf=\"submitted && f.returnTime.errors\" class=\"invalid-feedback\">\r\n                                                                                <div *ngIf=\"f.returnTime.errors.required\">\r\n                                                                                  <p style=\"color: red; font-size: 11px\">Return Time</p>\r\n                                                                                </div>\r\n                                                                              </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 3 -->\r\n                                                                 <!-- Row 4 -->\r\n                                                                 <div class=\"row\">\r\n                                                                     \r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>WO #<span class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">                                                                                    \r\n                                                                                <select class=\"form-control\"\r\n                                                                                     formControlName=\"wO\" (change)=\"onSelected($event)\"\r\n                                                                                     [(ngModel)]=\"getTypeName\" >                                                                                  \r\n                                                                                <option *ngFor=\"let data of woDetails\" [value]=\"data.workOrderNumber\">\r\n                                                                                {{data.workOrderNumber}}\r\n                                                                                </option>\r\n                                                                                </select>\r\n                                                                                </span>\r\n\r\n                                                                                    <!-- <ng2-completer  class=\"form-control\" id=\"xsminput\" formControlName=\"wO\"\r\n                                                                                     [datasource]=\"dataServices\" [minSearchLength]=\"0\"\r\n                                                                                     [(ngModel)]=\"getTypeName\"\r\n                                                                                     (selected)=\"onSelected($event)\"></ng2-completer> -->\r\n                                                                                     <div *ngIf=\"submitted && f.wO.errors\" class=\"invalid-feedback\">\r\n                                                                                          <div *ngIf=\"f.wO.errors.required\">\r\n                                                                                          <p style=\"color: red; font-size: 11px\">Enter Work Order</p>\r\n                                                                                          </div>\r\n                                                                                     </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"donotServeNotesLbl\">\r\n                                                                                     <b>Customer Name <span class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\" formControlName=\"cName\" value=\"{{this.customerName}}\"\r\n                                                                                          class=\"form-control\"\r\n                                                                                          placeholder=\"\" disabled\r\n                                                                                          >\r\n                                                                                </span>\r\n                                                                                <div *ngIf=\"submitted && f.cName.errors\" class=\"invalid-feedback\">\r\n                                                                                     <div *ngIf=\"f.cName.errors.required\">\r\n                                                                                       <p style=\"color: red; font-size: 11px\">Enter Customer Name</p>\r\n                                                                                     </div>\r\n                                                                                   </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <!-- /Row 4 -->\r\n                                                                 <!-- Row 5 -->\r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"donotServeNotesLbl\">\r\n                                                                                     <b>Customer Street Address<span class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <span class=\"input-icon icon-right\">\r\n                                                                                     <input type=\"text\" formControlName=\"cAddress\"\r\n                                                                                          class=\"form-control\" value=\"{{this.addressWO}}\"\r\n                                                                                          placeholder=\"\" disabled\r\n                                                                                          >\r\n                                                                                </span>\r\n                                                                                <div *ngIf=\"submitted && f.cAddress.errors\" class=\"invalid-feedback\">\r\n                                                                                     <div *ngIf=\"f.cAddress.errors.required\">\r\n                                                                                       <p style=\"color: red; font-size: 11px\">Enter Address</p>\r\n                                                                                     </div>\r\n                                                                                   </div>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"cityLbl\">\r\n                                                                                     <b>City<span class=\"mandatory\">*</span>\r\n                                                                                     </b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                             <span class=\"input-icon icon-right\">\r\n                                                                               <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                                 formControlName=\"city\" value=\"{{this.cityWO}}\" disabled\r\n                                                                                 [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\">\r\n                                                                             </span>\r\n                                                                             <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\r\n                                                                               <div *ngIf=\"f.city.errors.required\">\r\n                                                                                 <p style=\"color: red; font-size: 11px\">Enter City</p>\r\n                                                                               </div>\r\n                                                                             </div>\r\n                                                                           </div>\r\n                                                                         </div>                                                                 \r\n                                                                 </div>\r\n                                                                 <div class=\"row\">\r\n                                                                     \r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>State<span class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <select class=\"form-control\" id=\"stateRegistred\" name=\"state\"\r\n                                                                                  data-bv-field=\"row-title\" formControlName=\"state\" disabled\r\n                                                                                  [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\">\r\n                                                                                  <option value=\"\">Select</option>\r\n                                                                                  <option *ngFor=\"let data of statesData\" value={{data.stateName}}>\r\n                                                                                    {{data.stateName}}\r\n                                                                                  </option>\r\n                                                                                </select>\r\n                                                                                <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\r\n                                                                                  <div *ngIf=\"f.state.errors.required\">\r\n                                                                                    <p style=\"color: red; font-size: 11px\">Select State</p>\r\n                                                                                  </div>\r\n                                                                                </div>\r\n                                                                           </div>\r\n                                                                      </div>                                                                      \r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                                <label for=\"termsLbl\">\r\n                                                                                     <b>Zip code<span class=\"mandatory\">*</span></b>\r\n                                                                                </label>\r\n                                                                           </div>\r\n                                                                      </div>\r\n                                                                      <div class=\"col-sm-3\">\r\n                                                                           <div class=\"form-group\">\r\n                                                                             <span class=\"input-icon icon-right\">\r\n                                                                               <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                                 formControlName=\"zipCode\" value=\"{{this.zipCodeWO}}\" disabled\r\n                                                                                 [ngClass]=\"{ 'is-invalid': submitted && f.zipCode.errors }\">\r\n                                                                             </span>\r\n                                                                             <div *ngIf=\"submitted && f.zipCode.errors\" class=\"invalid-feedback\">\r\n                                                                               <div *ngIf=\"f.zipCode.errors.required\">\r\n                                                                                 <p style=\"color: red; font-size: 11px\">Enter Zip Code</p>\r\n                                                                               </div>\r\n                                                                             </div>\r\n                                                                           </div>\r\n                                                                         </div>\r\n                                                                 </div>\r\n                                                                \r\n<div class=\"row\">\r\n     <div class=\"col-sm-3\">\r\n          <div class=\"form-group\">\r\n               <label for=\"donotServeNotesLbl\">\r\n                    <b>Equipment Requires Repair</b>\r\n               </label>\r\n          </div>\r\n     </div>\r\n     <div class=\"col-sm-3\">\r\n          <div class=\"checkbox\">\r\n               <label>\r\n                    <input type=\"checkbox\"\r\n                         class=\"colored-success\" formControlName=\"equipmentRequiresRepair\"\r\n                         >\r\n                    <span class=\"text\"> </span>\r\n               </label>\r\n          </div>\r\n     </div>\r\n</div>\r\n                                                             <div class=\"row\">\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                           <label for=\"donotServeNotesLbl\">\r\n                                                                                <b>Describe Issue</b>\r\n                                                                           </label>\r\n                                                                      </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                   <div class=\"form-group\">\r\n                                                                     <span class=\"input-icon icon-right\">                                                                      \r\n                                                                       <textarea rows=\"3\" class=\"form-control\" formControlName=\"describeIssue\" \r\n                                                                       placeholder=\"Describe Issue\"></textarea>\r\n                                                                     </span>   \r\n                                                                   </div>\r\n                                                                 </div>\r\n                                                                 <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                        <label for=\"yearLbl\">\r\n                                                                          <b>Status<span class=\"mandatory\">*</span></b>\r\n                                                                        </label>\r\n                                                                      </div>\r\n                                                                    </div>\r\n                                                                    <div class=\"col-sm-3\">\r\n                                                                      <div class=\"form-group\">\r\n                                                                        <select class=\"form-control\" formControlName=\"status\"\r\n                                                                          [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\">\r\n                                                                          <option value=\"\">Select</option>\r\n                                                                          <option value=\"Booked\">Booked</option>                                  \r\n                                                                          <option value=\"In-Use\">In-Use</option>\r\n                                                                          <option value=\"Returned\">Returned</option>\r\n                                                                          <option value=\"Cancel\">Cancel</option>                           \r\n                                                                        </select>\r\n                                                                        <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\">\r\n                                                                          <div *ngIf=\"f.status.errors.required\">\r\n                                                                            <p style=\"color: red; font-size: 11px\"> Required Status</p>\r\n                                                                          </div>\r\n                                                                        </div>\r\n                                                                      </div>\r\n                                                                    </div>\r\n                                                            </div>\r\n                                                           \r\n                                                                 <div class=\"row\">\r\n                                                                      <div class=\"col-lg-3\">\r\n                                                                      </div>\r\n                                                                      <div class=\"col-lg-5 button-center\">\r\n                                                                           <button type=\"submit\"  class=\"btn btn-blue\" (click)=\"onShowEH()\"><i class=\"menu-icon glyphicon glyphicon-file\"></i>\r\n                                                                                Show Equipment Booking History   </button>\r\n                                                                           </div>\r\n                                                                           <div class=\"col-lg-4\">\r\n                                                                           </div>\r\n                                                                 </div>\r\n                                                           \r\n                                                            <br/>\r\n                                                              <div class=\"row\">\r\n                                                                 <div class=\"col-lg-4\">\r\n                                                                 </div>\r\n                                                                 <div class=\"col-lg-3 button-center\">\r\n                                                                      <button type=\"submit\" class=\"btn btn-blue\" (click)=\"onSubmit()\"><i class=\"fa fa-check\"></i>\r\n                                                                           Save\r\n                                                                      </button>\r\n                                                                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\r\n                                                                      <button type=\"button\" class=\"btn btn-danger\"\r\n                                                                      (click)=\"Oncancel()\"><i class=\"fa fa-times\"></i>\r\n                                                                           Cancel</button>\r\n                                                                 </div>\r\n                                                               </div>\r\n                                                               <br/>\r\n                                                            </div>\r\n                                                       </div>                                \r\n                                                  </form>\r\n                                                                \r\n                                             </div>\r\n                                        </div>\r\n                                   </div>\r\n                              </div>\r\n                         </div>\r\n                    </div>\r\n               </div>\r\n          </div>\r\n         \r\n     </div>\r\n<!-- /  Equipment Booking Over Lap condition  -->\r\n<div id=\"myModal1\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n     <div class=\"modal-dialog\">\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n           <div class=\"widget-header blue\">\r\n             <span class=\"widget-caption\"><b>Equipment Booking OverLap </b></span>\r\n           </div>\r\n           <div class=\"modal-body\">\r\n             <form>\r\n               <br />\r\n               <div class=\"row\">\r\n                 <div class=\"col-lg-12\">\r\n                   <div class=\"form-group\">\r\n                     <label for=\"reasonLbl\">\r\n                       <b class=\"popup-text\" style=\"color: red;\">The Equipment Booking {{equipmentName}} has already been assigned / overlap during\r\n                         this time\r\n                         slot {{techEBstartTime}} -- {{techEBEndTime}}. Please choose a different\r\n                         time.</b>\r\n                     </label>\r\n                     <div class=\"row\">\r\n                       <div class=\"col-sm-12\">\r\n                         <div class=\"form-group\">\r\n                           <hr class=\"hr-gray-lg\">\r\n                         </div>\r\n                       </div>\r\n                     </div>\r\n                     <!-- <label>\r\n                       <b class=\"popup-text\"> Do you want add Equipment Booking ?\r\n                         <br> -->\r\n                         <!-- <span style=\"color:blue\"> Customers List/Search Customers</span> -->\r\n                       <!-- </b>\r\n                     </label> -->\r\n                   </div>\r\n                 </div>\r\n               </div>\r\n               <!-- <div class=\"row\">\r\n               <div class=\"col-sm-12\">\r\n                 <div class=\"form-group\">\r\n                   <hr class=\"hr-gray\">\r\n                 </div>\r\n               </div>\r\n             </div> -->\r\n\r\n               <div class=\"modal-footer\">\r\n                 <div class=\"col-lg-3\">\r\n                 </div>\r\n                 <div class=\"col-lg-3 button-center\">\r\n                   <a class=\"btn btn-blue\" data-toggle=\"modal\" (click)=\"WooverLapCondition()\">\r\n                     CONFIRM\r\n                   </a>\r\n                 </div>\r\n                 <div class=\"col-lg-3 button-center\">\r\n                   <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\" (click)=\"onCancelOverlap()\"><i\r\n                       class=\"fa fa-times\"></i>\r\n                     CANCEL</button>\r\n                 </div>\r\n                 <div class=\"col-lg-3\">\r\n                 </div>\r\n               </div>\r\n             </form>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n     <br>\r\n   </div>\r\n\r\n   <!-- /  Equipment Booking Over Lap condition  -->\r\n<div id=\"myModal2\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n     <div class=\"modal-dialog\" style=\"width: 80%;\">\r\n       <div class=\"modal-content\">\r\n         <div class=\"modal-header\">\r\n           <div class=\"widget-header blue\">\r\n             <span class=\"widget-caption\"><b>Equipment History </b></span>\r\n           </div>\r\n           <div class=\"modal-body\">\r\n             <form>\r\n               <br />\r\n               <div class=\"row\">\r\n                    <div class=\"widget\">\r\n                         <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                              <!-- <div class=\"widget-body\">\r\n                                   <div class=\"table-scrollable\"> -->\r\n                    <table *ngIf=\"equipmenBooktListResponse\" class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                         <thead class=\"flip-content bordered-palegreen\"> \r\n                         <tr>\r\n                              <th>Equipment Book ID</th>\r\n                              <th>Equipment Name</th>\r\n                              <th>Staff Name </th>\r\n                              <th>Check Out Date </th>\r\n                              <th>Check Out Time </th>\r\n                              <th>Return Date </th>\r\n                              <th>Return Time </th>\r\n                              <th>Status</th>\r\n                         </tr>\r\n                    </thead>\r\n                         <tbody>\r\n                         <tr *ngFor=\"let data of equipmentBookingListDetails | paginate: {itemsPerPage: 10, currentPage:p }\">\r\n                              <td>{{data.equipmentBookId}}</td>\r\n                              <td>{{data.equipmentName}}</td>\r\n                              <td>{{data.bookByStaff}}</td>\r\n                              <td>{{data.checkOutDate}}</td>\r\n                              <td>{{data.checkOutTime}}</td>\r\n                              <td>{{data.returnDate}}</td>\r\n                              <td>{{data.returnTime}}</td>\r\n                              <td>{{data.status}}</td>\r\n                         </tr>\r\n                         </tbody>\r\n                    </table>\r\n                    <div class=\"row-fluid\" *ngIf=\"equipmenBooktListResponse\">\r\n                         <br>\r\n                         <pagination-controls class=\"span10\" style=\"float:left\" (pageChange)=\"p = $event\"\r\n                         previousLabel=\"\" nextLabel=\"\"></pagination-controls>\r\n                         <p class=\"span2\" style=\"float:right\">{{equipmentBookingListDetails.length}} Records Found</p>\r\n                       </div>\r\n                       <div class=\"row-fluid\" *ngIf=\"!equipmenBooktListResponse\">\r\n                         <br />\r\n                         <div class=\"col-lg-12\">\r\n                           <div class=\"col-lg-4\"></div>\r\n                           <div class=\"col-lg-4\">\r\n                             <div class=\"span6\"><b style=\"font-size: 25px\">No Records\r\n                                 Available</b></div>\r\n                             <div class=\"col-lg-4\"></div>\r\n                           </div>\r\n                         </div>\r\n                       </div>\r\n               <!-- </div>\r\n                              </div> -->\r\n                    <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                         <hr class=\"hr-gray-lg\">\r\n                    </div>\r\n                    </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                    <div class=\"col-lg-4\">\r\n                    </div>\r\n                    <div class=\"col-lg-3 button-center\">\r\n                    <a class=\"btn btn-blue\" data-toggle=\"modal\" (click)=\"WooverLapCondition()\">\r\n                         Close\r\n                    </a>\r\n                    </div>\r\n                    <!-- <div class=\"col-lg-3 button-center\">\r\n                    <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\" (click)=\"onCancelOverlap()\"><i\r\n                         class=\"fa fa-times\"></i>\r\n                         CANCEL</button>\r\n                    </div> -->\r\n                    <div class=\"col-lg-3\">\r\n                    </div>\r\n                    </div>\r\n                         </div>\r\n                    </div>\r\n               </div>               \r\n             </form>\r\n           </div>\r\n         </div>\r\n       </div>\r\n     </div>\r\n     <br>\r\n   </div>\r\n     <!-- /Page Body -->\r\n</div>\r\n    <!-- Bottom Buttons -->\r\n  \r\n\r\n<!-- /Bottom Buttons -->\r\n<!-- /Page Content -->\r\n\r\n<!-- /Page Container -->\r\n\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/proz/Equipment/book-equipment/book-equipment.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/proz/Equipment/book-equipment/book-equipment.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status-active {\n  color: #00FF00;\n  font-weight: bold; }\n\n.status-inactive {\n  color: #FF0000;\n  font-weight: bold; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.wostatustag-blue {\n  background: #3C78D8;\n  color: #FFFFFF; }\n\n.wostatustag-pink {\n  background: #E06666;\n  color: #FFFFFF; }\n\n.wostatustag-violet {\n  background: #9900FF;\n  color: #FFFFFF; }\n\n.wostatustag-brown {\n  background: #BF9000;\n  color: #FFFFFF; }\n\n.assignedwostatustag-green {\n  background: #00FF00; }\n\n.assignedwostatustag-lblue {\n  background: #A4C2F4; }\n\n.assignedwostatustag-orange {\n  background: #FF9900; }\n\n.assignedwostatustag-red {\n  background: #FF0000; }\n\n.assignedwostatustag-yellow {\n  background: #FFFF00; }\n\n.assignedwostatustag-lpink {\n  background: #E6B8AF; }\n\n.assignedwostatustag-blue {\n  background: #0000FF; }\n\n/* -- General Tab - Group Tab -- */\n\n.text-center {\n  text-align: center; }\n\n.center {\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n/* -- /General Tab - Group Tab -- */\n\n/* LIST MODE */\n\n.center {\n  text-align: center; }\n\n.item {\n  text-align: center; }\n\n/* /LIST MODE */\n\n/* VIEW MODE */\n\n.form-title {\n  color: #5DB2FF;\n  /*display: block;\r\n    padding: 8px 0;*/\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\n.button-center {\n  text-align: center; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.alert {\n  background-color: red; }\n\n.error {\n  background-color: red; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.well.with-footer {\n  padding-bottom: 10px !important; }\n\n/* /VIEW MODE */\n\n#divcenter {\n  border-style: solid;\n  border-color: #1e90ff; }\n\n#cid {\n  padding-left: 9.8em; }\n\n#from {\n  padding-left: 9.8em; }\n\n#to {\n  padding-left: 9.8em; }\n\n.tab-content {\n  background-color: #fbfbfb;\n  padding: 1px 12px !important;\n  position: relative;\n  box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.3); }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei9FcXVpcG1lbnQvYm9vay1lcXVpcG1lbnQvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3pcXEVxdWlwbWVudFxcYm9vay1lcXVpcG1lbnRcXGJvb2stZXF1aXBtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBYztFQUNkLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxvQkFBbUI7RUFDbkIsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLG9CQUFtQjtFQUNuQixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksb0JBQW1CO0VBQ25CLGVBQWMsRUFDakI7O0FBSUQ7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBR0QsbUNBQW1DOztBQUNuQztFQUNJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2Qzs7QUFDRCxvQ0FBb0M7O0FBQ3BDLGVBQWU7O0FBQ2Y7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBaUIsRUFDcEI7O0FBQ0QsZ0JBQWdCOztBQUdoQixlQUFlOztBQUNmO0VBQ0csZUFBZTtFQUNmO3FCQUNpQjtFQUNqQixrQ0FBaUM7RUFDakMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7eUJBQ3NCLEVBQ3ZCOztBQUVEO0VBQ0csa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNqQjs7QUFFRDtFQUNHLHNDQUFxQyxFQUN2Qzs7QUFFRDtFQUNHLG1CQUFrQixFQUNwQjs7QUFFRDtFQUNHLGFBQVksRUFDZDs7QUFFRDtFQUNHLFdBQVU7RUFDVixtQkFBa0IsRUFDcEI7O0FBRUQ7RUFDRyxhQUFZO0VBQ1osbUJBQWtCLEVBQ3BCOztBQUVEO0VBQ0csaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNwQjs7QUFFRDtFQUNHLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzlCLG9DQUFvQyxFQUNyQzs7QUFFRDtFQUNHLG1CQUFrQixFQUNwQjs7QUFFRDtFQUNHLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3BCOztBQUVEO0VBQ0csa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUMzQjs7QUFFRDtFQUNHLHFDQUFvQztFQUNwQyx1QkFBc0I7RUFDdEIsa0JBQWlCLEVBQ25COztBQUVEO0VBQ0csa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUMzQjs7QUFFRDtFQUNHLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdEM7O0FBQ0Q7RUFDSSxzQkFBb0IsRUFDdkI7O0FBQ0Q7RUFDSSxzQkFBb0IsRUFDdkI7O0FBRUQ7RUFDRyxvQ0FBbUMsRUFDckM7O0FBRUQ7RUFDRyxnQ0FBK0IsRUFDakM7O0FBQ0QsZ0JBQWdCOztBQUdoQjtFQUNJLG9CQUFrQjtFQUNsQixzQkFBb0IsRUFDbkI7O0FBQ0Q7RUFFQSxvQkFBbUIsRUFDbEI7O0FBQ0Q7RUFFQSxvQkFBbUIsRUFDbEI7O0FBQ0Q7RUFFQSxvQkFBbUIsRUFDbEI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsNkJBQTRCO0VBQzVCLG1CQUFrQjtFQUNsQiw4Q0FBeUMsRUFDNUMiLCJmaWxlIjoic3JjL2FwcC9wcm96L0VxdWlwbWVudC9ib29rLWVxdWlwbWVudC9ib29rLWVxdWlwbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMtYWN0aXZle1xyXG4gICAgIGNvbG9yOiAjMDBGRjAwO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gfVxyXG4gXHJcbiAuc3RhdHVzLWluYWN0aXZle1xyXG4gICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gfVxyXG4gXHJcbiAuaW5wcm9ncmVzc3tcclxuICAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC50aHJlZS1ib3JkZXJlZHtcclxuICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG4gfVxyXG4gXHJcbiAuZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5idG4tZ3JheXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ibHVleyAgICBcclxuICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLndvc3RhdHVzdGFnLWJsdWV7XHJcbiAgICAgYmFja2dyb3VuZDogIzNDNzhEODtcclxuICAgICBjb2xvcjogI0ZGRkZGRjtcclxuIH1cclxuIC53b3N0YXR1c3RhZy1waW5re1xyXG4gICAgIGJhY2tncm91bmQ6ICNFMDY2NjY7XHJcbiAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiB9XHJcbiAud29zdGF0dXN0YWctdmlvbGV0e1xyXG4gICAgIGJhY2tncm91bmQ6ICM5OTAwRkY7XHJcbiAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiB9XHJcbiAud29zdGF0dXN0YWctYnJvd257XHJcbiAgICAgYmFja2dyb3VuZDogI0JGOTAwMDtcclxuICAgICBjb2xvcjogI0ZGRkZGRjtcclxuIH1cclxuIFxyXG4gXHJcbiBcclxuIC5hc3NpZ25lZHdvc3RhdHVzdGFnLWdyZWVue1xyXG4gICAgIGJhY2tncm91bmQ6ICMwMEZGMDA7XHJcbiB9XHJcbiAuYXNzaWduZWR3b3N0YXR1c3RhZy1sYmx1ZXtcclxuICAgICBiYWNrZ3JvdW5kOiAjQTRDMkY0O1xyXG4gfVxyXG4gLmFzc2lnbmVkd29zdGF0dXN0YWctb3Jhbmdle1xyXG4gICAgIGJhY2tncm91bmQ6ICNGRjk5MDA7XHJcbiB9XHJcbiAuYXNzaWduZWR3b3N0YXR1c3RhZy1yZWR7XHJcbiAgICAgYmFja2dyb3VuZDogI0ZGMDAwMDtcclxuIH1cclxuIC5hc3NpZ25lZHdvc3RhdHVzdGFnLXllbGxvd3tcclxuICAgICBiYWNrZ3JvdW5kOiAjRkZGRjAwO1xyXG4gfVxyXG4gLmFzc2lnbmVkd29zdGF0dXN0YWctbHBpbmt7XHJcbiAgICAgYmFja2dyb3VuZDogI0U2QjhBRjtcclxuIH1cclxuIC5hc3NpZ25lZHdvc3RhdHVzdGFnLWJsdWV7XHJcbiAgICAgYmFja2dyb3VuZDogIzAwMDBGRjtcclxuIH1cclxuIFxyXG4gXHJcbiAvKiAtLSBHZW5lcmFsIFRhYiAtIEdyb3VwIFRhYiAtLSAqL1xyXG4gLnRleHQtY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIC5jZW50ZXJ7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnRuLWdyYXl7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5idG4tYmx1ZXsgICAgXHJcbiAgICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAvKiAtLSAvR2VuZXJhbCBUYWIgLSBHcm91cCBUYWIgLS0gKi9cclxuIC8qIExJU1QgTU9ERSAqL1xyXG4gLmNlbnRlcntcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9IFxyXG4gXHJcbiAuaXRlbXtcclxuICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuIH1cclxuIC8qIC9MSVNUIE1PREUgKi9cclxuIFxyXG4gXHJcbiAvKiBWSUVXIE1PREUgKi9cclxuIC5mb3JtLXRpdGxle1xyXG4gICAgY29sb3I6ICAjNURCMkZGO1xyXG4gICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDhweCAwOyovXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1REIyRkY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbiB9XHJcbiBcclxuIC5tYW5kYXRvcnl7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gfVxyXG4gXHJcbiAuaHItZ3JheXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gfSBcclxuIFxyXG4gLmJ1dHRvbi1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIGlucHV0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG4gXHJcbiAubW9ja3tcclxuICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAubW9jay1jb25me1xyXG4gICAgY29sb3I6IGdyZWVuOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmlucHJvZ3Jlc3N7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLnRocmVlLWJvcmRlcmVke1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxuIH1cclxuIFxyXG4gLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuY2hlY2tib3gtY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuZ3JheXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYmx1ZXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiBcclxuIC5idG4tZ3JheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5idG4tYmx1ZXsgICAgXHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmFsZXJ0e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gfVxyXG4gLmVycm9ye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gfVxyXG4gXHJcbiAubW9kYWwtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAud2VsbC53aXRoLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLyogL1ZJRVcgTU9ERSAqL1xyXG4gXHJcbiBcclxuICNkaXZjZW50ZXJ7XHJcbiAgICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4gICAgIGJvcmRlci1jb2xvcjojMWU5MGZmO1xyXG4gICAgIH1cclxuICAgICAjY2lkXHJcbiAgICAge1xyXG4gICAgIHBhZGRpbmctbGVmdDo5LjhlbSA7XHJcbiAgICAgfVxyXG4gICAgICNmcm9tXHJcbiAgICAge1xyXG4gICAgIHBhZGRpbmctbGVmdDo5LjhlbSA7XHJcbiAgICAgfVxyXG4gICAgICN0b1xyXG4gICAgIHtcclxuICAgICBwYWRkaW5nLWxlZnQ6OS44ZW0gO1xyXG4gICAgIH1cclxuIFxyXG4gICAgIC50YWItY29udGVudCB7XHJcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgICAgICAgIHBhZGRpbmc6IDFweCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgYm94LXNoYWRvdzogMXB4IDAgMTBweCAxcHggcmdiYSgwLDAsMCwuMyk7XHJcbiAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/proz/Equipment/book-equipment/book-equipment.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/proz/Equipment/book-equipment/book-equipment.component.ts ***!
  \***************************************************************************/
/*! exports provided: BookEquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEquipmentComponent", function() { return BookEquipmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../global/config */ "./src/global/config.ts");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-completer */ "./node_modules/ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var ng4_auto_complete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng4-auto-complete */ "./node_modules/ng4-auto-complete/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);













var BookEquipmentComponent = /** @class */ (function () {
    function BookEquipmentComponent(beyond, router, formBuilder, activatedRoute, http, toastr, completerService, autoCompleteService, spinner) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.completerService = completerService;
        this.autoCompleteService = autoCompleteService;
        this.spinner = spinner;
        this.startMin = moment__WEBPACK_IMPORTED_MODULE_12__().format('YYYY-MM-DD');
        this.endMin = moment__WEBPACK_IMPORTED_MODULE_12__().format('YYYY-MM-DD');
        this.woNumber = [];
    }
    BookEquipmentComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proData = this.loginData.loginCode;
        this.listEmployeeDetails();
        this.getBookEquipmentId(this.proData);
        this.getAllWO();
        this.getEquipmentName();
        this.getListOfStates();
        this.currentDateTime = _global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].year + "-" + _global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].month + "-" + _global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].day + _global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].hour + ":" + _global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].min;
        this.addBookEquipment = this.formBuilder.group({
            equipmentBookId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            equipmentRequiresRepair: [false],
            equipmentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            bookbyStaff: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            checkOutDate: [_global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].year + "-" + _global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].month + "-" + _global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].day, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            //checkOutDate: ['', Validators.required],  
            checkOutTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            returnDate: [_global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].year + "-" + _global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].month + "-" + _global_config__WEBPACK_IMPORTED_MODULE_8__["Utility"].day, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            //returnDate: ['', Validators.required],
            returnTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            wO: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            zipCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            describeIssue: [''],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    };
    Object.defineProperty(BookEquipmentComponent.prototype, "f", {
        get: function () { return this.addBookEquipment.controls; },
        enumerable: true,
        configurable: true
    });
    BookEquipmentComponent.prototype.getSingleEquipmentName = function (event) {
        var _this = this;
        this.equipmentName = this.addBookEquipment.value.equipmentName;
        //alert(this.equipmentName)
        //this.getEquipmentBookingList(this.equipmentName);
        //getEquipmentBookingList(event) {
        //alert(event.target.value)
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/equipmentBookingByEName/' + this.equipmentName + '/' + this.loginData.loginCode, options)
            //this.http.get(Global.url + '/getWO/' + data.target.value + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentBookingListDetails = response.response;
                //this.equipmentBookId = response.response[0].equipmentBookId;
                //alert(this.equipmentBookId)
                //alert(response.response[0].equipmentId)
                _this.equipmenBooktListResponse = true;
            }
            else {
                _this.equipmenBooktListResponse = false;
                _this.equipmentBookingListDetails = null;
            }
            // error => {
            //   //console.log('The execution is failed ' + JSON.stringify(error))
            // }
        });
        //}
    };
    BookEquipmentComponent.prototype.getBookEquipmentId = function (proCode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        //this.http.get(Global.url + '/generateEquipmentID/' + proCode, options)
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/generateEquipmentBookID', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.equipmentBookId = response.equipmentBookId;
            console.log("Equipment number" + _this.equipmentBookId);
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    BookEquipmentComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    /*current date and future Date*/
    BookEquipmentComponent.prototype.listEmployeeDetails = function () {
        var _this = this;
        this.spinner.show();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/employeeList/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.spinner.hide();
                console.log("employee Details1" + JSON.stringify(response));
                _this.employeeList = response.response;
            }
        });
    };
    BookEquipmentComponent.prototype.myFunction = function () {
        var d = new Date(this.addBookEquipment.value.checkOutDate);
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        this.n = weekday[d.getDay()];
        console.log("Start DAY ::" + this.n);
    };
    BookEquipmentComponent.prototype.endDate = function () {
        var d = new Date(this.addBookEquipment.value.returnDate);
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        this.endDay = weekday[d.getDay()];
        console.log(" End DAY :: " + this.endDay);
    };
    BookEquipmentComponent.prototype.onStartDateSelected = function (startDate) {
        this.myFunction();
        this.endMin = startDate;
        var startTime = this.addBookEquipment.value.checkOutTime;
        var endTime = this.addBookEquipment.value.returnTime;
        this.onSelectedStartTime(startTime);
        if (startTime) {
            this.onStartTime(startTime);
        }
        if (endTime) {
            this.onEndTime(endTime);
        }
    };
    BookEquipmentComponent.prototype.onEndDateSelected = function (endDate) {
        this.endMin = endDate;
        this.startMax = endDate;
        var startTime = this.addBookEquipment.value.checkOutTime;
        var endTime = this.addBookEquipment.value.returnTime;
        if (startTime) {
            this.onStartTime(startTime);
        }
        if (endTime) {
            this.onEndTime(endTime);
        }
    };
    BookEquipmentComponent.prototype.onSelectedStartTime = function (e) {
        var startDate = this.addBookEquipment.value.checkOutDate;
        var startTime = e.target.value;
        //const startDateTime = moment(startDate + startTime.target.value, 'YYYY-MM-DDhh:mm');
        //const realDateTime = moment(this.currentDateTime);
        //alert(this.addBookEquipment.value.checkOutDate +e.target.value )
        //alert(this.currentDateTime )
        if (this.addBookEquipment.value.checkOutDate + e.target.value < this.currentDateTime) {
            this.checkOutTimeErrorMsg = 'Invalid Start Time';
        }
        else {
            this.checkOutTimeErrorMsg = '';
        }
    };
    BookEquipmentComponent.prototype.onStartTime = function (startTime) {
        this.endDate();
        // if (this.addBookEquipment.value.addPrimaryTech == "NONE") {
        //   return
        // }
        this.equipmentBookingDateTimeSlap();
        //this.getStaffTimeSheduleday()
        //alert(startTime.target.value)
        var startDate = this.addBookEquipment.value.checkOutDate;
        var endDate = this.addBookEquipment.value.returnDate;
        var endTime = this.addBookEquipment.value.returnTime;
        if (endDate && endTime) {
            var startDateTime = moment__WEBPACK_IMPORTED_MODULE_12__(startDate + startTime.target.value, 'YYYY-MM-DDhh:mm');
            var endDateTime = moment__WEBPACK_IMPORTED_MODULE_12__(endDate + endTime, 'YYYY-MM-DDhh:mm');
            var isAfter = moment__WEBPACK_IMPORTED_MODULE_12__(startDateTime).isAfter(endDateTime);
            var isBefore = moment__WEBPACK_IMPORTED_MODULE_12__(startDateTime).isBefore(endDateTime);
            // console.log("isAfter" + isAfter)
            // console.log("isBefore" + isBefore)
            var time = new Date().getHours() + ':' + new Date().getMinutes();
            if (isAfter === false && isBefore === true) {
                this.checkOutTimeErrorMsg = 'Invalid Start Time';
            }
            else {
                this.checkOutTimeErrorMsg = '';
            }
            if (moment__WEBPACK_IMPORTED_MODULE_12__(startTime.target.value, "HH:mm") < moment__WEBPACK_IMPORTED_MODULE_12__(time, "HH:mm")) {
                // alert('The current time is greater than actual time')
                //console.log('THe current time is greater than actual time')
                this.checkOutTimeErrorMsg = 'Invalid Start Time';
            }
            else {
                this.checkOutTimeErrorMsg = '';
            }
        }
        // if(moment(this.addBookEquipment.value.checkOutDate + startTime, 'YYYY-MM-DDhh:mm')< moment(this.currentDateTime,'YYYY-MM-DDhh:mm'))
        // {
        //   this.checkOutTimeErrorMsg = 'Invalid Start Time';
        // }
        // if (moment(startTime.target.value, "HH:mm") < moment(time, "HH:mm")) {
        //   // alert('The current time is greater than actual time')
        //    //console.log('THe current time is greater than actual time')
        //    this.checkOutTimeErrorMsg = 'Invalid Start Time';
        //  } else {
        //    this.checkOutTimeErrorMsg = '';
        //  }
    };
    BookEquipmentComponent.prototype.onEndTime = function (endTime) {
        // if (this.addBookEquipment.value.addPrimaryTech == "NONE") {
        //   return
        // }
        this.equipmentBookingDateTimeSlap();
        // this.getStaffTimeSheduleday()
        var startDate = this.addBookEquipment.value.checkOutDate;
        var startTime = this.addBookEquipment.value.checkOutTime;
        var endDate = this.addBookEquipment.value.returnDate;
        if (startDate && startTime) {
            var startDateTime = moment__WEBPACK_IMPORTED_MODULE_12__(startDate + startTime, 'YYYY-MM-DDhh:mm');
            var endDateTime = moment__WEBPACK_IMPORTED_MODULE_12__(endDate + endTime, 'YYYY-MM-DDhh:mm');
            var isAfter = moment__WEBPACK_IMPORTED_MODULE_12__(startDateTime).isAfter(endDateTime);
            if (isAfter) {
                this.returnTimeErrorMsg = 'Invalid End Time';
            }
            else {
                this.returnTimeErrorMsg = '';
                this.checkOutTimeErrorMsg = '';
            }
        }
    };
    /* -- Get staffshuduleTimings Data --*/
    BookEquipmentComponent.prototype.equipmentBookingDateTimeSlap = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        //this.techName = this.addWorkOrder.value.addPrimaryTech
        this.techEBstartTime = this.addBookEquipment.value.checkOutTime;
        this.techEBEndTime = this.addBookEquipment.value.returnTime;
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/EquipmentBookingStartDateTime/' + this.equipmentName + "/" + this.addBookEquipment.value.checkOutDate + "/" + this.addBookEquipment.value.returnDate + "/" + this.addBookEquipment.value.checkOutTime + "/" + this.addBookEquipment.value.returnTime, options)
            .subscribe(function (data) {
            var shudule = data.json();
            _this.shuduleTiming = shudule.response;
            console.log("work order Details" + JSON.stringify(_this.shuduleTiming));
            // if (this.shuduleTiming == "INVALID") {
            //   $("#myModal0").modal("show");
            //   // alert("The technician has already been assigned during this time slot (" + this.addWorkOrder.value.startTime + " -- " + this.addWorkOrder.value.endTime + "). Please choose a different time.")
            // }
            // else if (this.shuduleTiming == "VALID") {
            //   alert("Success! : The Time slot is available. You can Proceed")
            // }
        }, function (error) {
            // this.toastr.warning('Unable to connect to server');
        });
    };
    //   onChangeEvent(ev) {
    //     alert(ev.target.value); // should print option1
    // }
    BookEquipmentComponent.prototype.onSelected = function (data) {
        var _this = this;
        localStorage.setItem('workOrderNumber', JSON.stringify({
            workOrderNumber: data.target.value
        }));
        //alert(data.target.value);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getWO/' + data.target.value + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.woDetails = response.response;
                _this.addBookEquipment.patchValue({
                    equipmentBookId: _this.equipmentBookId,
                    equipmentRequiresRepair: _this.addBookEquipment.value.equipmentRequiresRepair,
                    equipmentName: _this.addBookEquipment.value.equipmentName,
                    bookbyStaff: _this.addBookEquipment.value.bookbyStaff,
                    checkOutDate: _this.addBookEquipment.value.checkOutDate,
                    checkOutTime: _this.addBookEquipment.value.checkOutTime,
                    returnDate: _this.addBookEquipment.value.returnDate,
                    returnTime: _this.addBookEquipment.value.returnTime,
                    cName: _this.woDetails[0].customerName,
                    cAddress: _this.woDetails[0].address,
                    zipCode: _this.woDetails[0].zipCode,
                    city: _this.woDetails[0].city,
                    state: _this.woDetails[0].state == undefined ? '' : _this.woDetails[0].state,
                    describeIssue: _this.addBookEquipment.value.describeIssue,
                    status: _this.addBookEquipment.value.status,
                });
                _this.getAllWO();
            }
            else {
                //this.priceBookServiceResponse = false;
            }
        });
    };
    BookEquipmentComponent.prototype.getAllWO = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getWO/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.woDetails = response.response;
                console.log("ow details" + JSON.stringify(_this.woDetails));
                for (var i = 0; i < _this.woDetails.length; i++) {
                    //this.options.push(this.categoriesSubCategoriesData[i].categoryName + "-" + this.categoriesSubCategoriesData[i].subcategoryName + " - " + this.categoriesSubCategoriesData[i].catId + " - " + this.categoriesSubCategoriesData[i].subCatId) 
                    _this.woNumber.push({
                        "workOrderNumber": _this.woDetails[i].workOrderNumber,
                    });
                    if (i == _this.woDetails.length - 1) {
                        //console.log('This is end of loop ' + JSON.stringify(this.catNames))
                        _this.dataServices = _this.completerService.local(_this.woNumber, 'workOrderNumber', 'workOrderNumber');
                        //console.log("data services"+JSON.stringify(this.dataServices))
                    }
                    //this.priceBookServiceResponse = true;
                }
            }
            else {
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    BookEquipmentComponent.prototype.getEquipmentName = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/equipmentList' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentListDetails = response.response;
                _this.equipmentID = response.response[0].equipmentId;
                //alert(response.response[0].equipmentId)
                //this.equipmentListResponse = true;
            }
            else {
                //this.equipmentListResponse = false;
            }
            // error => {
            //   //console.log('The execution is failed ' + JSON.stringify(error))
            // }
        });
    };
    BookEquipmentComponent.prototype.getListOfStates = function () {
        var _this = this;
        // this.zipcodeValue = JSON.parse(localStorage.getItem('zipcode'))
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
    BookEquipmentComponent.prototype.WooverLapCondition = function () {
        console.log("!!!");
        $("#myModal1").modal("hide");
        $("#myModal2").modal("hide");
    };
    BookEquipmentComponent.prototype.onSubmit = function () {
        if (this.checkOutTimeErrorMsg == 'Invalid Start Time' || this.returnTimeErrorMsg == 'Invalid End Time') {
            return;
        }
        this.submitted = true;
        if (this.addBookEquipment.value.equipmentName == '') {
            return;
        }
        else if (this.addBookEquipment.value.bookbyStaff == '') {
            return;
        }
        else if (this.addBookEquipment.value.checkOutDate == '') {
            return;
        }
        else if (this.addBookEquipment.value.checkOutTime == '') {
            return;
        }
        else if (this.addBookEquipment.value.returnDate == '') {
            return;
        }
        else if (this.addBookEquipment.value.returnTime == '') {
            return;
        }
        else if (this.addBookEquipment.value.wO == '') {
            return;
        }
        else if (this.addBookEquipment.value.cName == '') {
            return;
        }
        else if (this.addBookEquipment.value.cAddress == '') {
            return;
        }
        else if (this.shuduleTiming == "INVALID") {
            console.log("INVALID CONDITION IS CALIING");
            $("#myModal1").modal("show");
            // alert("The technician has already been assigned during this time slot (" + this.addWorkOrder.value.startTime + " -- " + this.addWorkOrder.value.endTime + "). Please choose a different time.")
        }
        else {
            console.log("VALID CONDITION IS CALIING");
            //this.spinner.show();
            console.log("Add Work Order Screen -> Clicked on Save Button - Hide Spinner ::: WO Address and Techs");
            this.saveButton();
            // var employeeRoleList = this.employeeRoleData.filter(val => val.checked == true)
            // if (employeeRoleList.length > 0) {
            //   this.saveTechs()
            // }
            // if (this.employeeIdForService != "" || this.employeeIdForService != null) {
            //   this.savePrimaryTech()
            // }
        }
        // else {
        //   this.saveButton()
        // }
    };
    BookEquipmentComponent.prototype.saveButton = function () {
        var _this = this;
        if (this.addBookEquipment.value.equipmentName != '' && this.addBookEquipment.value.bookbyStaff != '' && this.addBookEquipment.value.wO != '') {
            //alert('Name'+this.addBookEquipment.value.bookbyStaff)
            var addObj = {
                "proId": this.loginData.loginCode,
                "equipmentBookId": '' + this.equipmentBookId,
                "equipmentName": '' + this.addBookEquipment.value.equipmentName,
                "bookbyStaff": '' + this.addBookEquipment.value.bookbyStaff,
                "checkOutDate": '' + this.addBookEquipment.value.checkOutDate,
                "checkOutTime": '' + this.addBookEquipment.value.checkOutTime,
                "returnDate": '' + this.addBookEquipment.value.returnDate,
                "returnTime": '' + this.addBookEquipment.value.returnTime,
                "wO": '' + this.addBookEquipment.value.wO,
                "customerName": '' + this.addBookEquipment.value.cName,
                "address": '' + this.addBookEquipment.value.cAddress,
                "city": '' + this.addBookEquipment.value.city,
                "state": '' + this.addBookEquipment.value.state == undefined ? '' : this.addBookEquipment.value.state,
                "zip": '' + this.addBookEquipment.value.zipCode,
                "equipmentRequiresRepair": '' + this.addBookEquipment.value.equipmentRequiresRepair,
                "describeIssue": '' + this.addBookEquipment.value.describeIssue,
                "status": '' + this.addBookEquipment.value.status,
            };
            console.log("ADD OBJ" + JSON.stringify(addObj));
            this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/addBookEquipment/' + this.loginData.loginCode, addObj)
                .subscribe(function (data) {
                var partInfoData = data.json();
                if (partInfoData.status == 200) {
                    // alert(200)
                    _this.toastr.success('Item Data Added Successfuly...');
                    //this.listEquipment();
                    _this.router.navigate(['/proz/listEquipmentBooking']);
                }
                else {
                }
            }, function (error) {
                console.log(error); // Error getting the data
            });
        }
    };
    /* --/ List of Parts & Tools & Consumable Data --*/
    // getwONumber(getTypeName) {
    //   alert(getTypeName)
    //   var headers = new Headers();
    //   headers.append("Accept", 'application/json');
    //   headers.append('Content-Type', 'application/json');
    //   let options = new RequestOptions({ headers: headers });
    //   this.http.get(Global.url + '/getWO/' + getTypeName + '/' + this.loginData.loginCode, options)
    //     .subscribe(data => {
    //       var response = data.json();
    //       if (response.status == 200) {
    //         this.woDetails = response.response;
    //         this.addBookEquipment = this.formBuilder.group({
    //           cName: this.woDetails[0].customerName,
    //           cAddress: this.woDetails[0].address,
    //           zipCode: this.woDetails[0].zip,
    //           city: this.woDetails[0].city,
    //           state: this.woDetails[0].state,
    //         })
    //         // this.customerName = response.response[0].customerName;
    //         // this.addressWO = response.response[0].address;
    //         // this.stateWO = response.response[0].state;
    //         // this.cityWO = response.response[0].city;
    //         // this.zipCodeWO = response.response[0].zipCode;
    //         console.log("ow details" + JSON.stringify(this.woDetails))
    //         //this.priceBookServiceResponse = true;
    //       }
    //       else {
    //         this.customerName = '';
    //         this.addressWO = '';
    //         this.stateWO = '';
    //         this.cityWO = '';
    //         this.zipCodeWO = '';
    //         //this.priceBookServiceResponse = false;
    //       }
    //       error => {
    //         //console.log('The execution is failed ' + JSON.stringify(error))
    //       }
    //     })
    // }
    BookEquipmentComponent.prototype.Oncancel = function () {
        this.router.navigate(['/proz/listEquipmentBooking']);
    };
    BookEquipmentComponent.prototype.onShowEH = function () {
        $("#myModal2").modal("show");
    };
    BookEquipmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-book-equipment',
            template: __webpack_require__(/*! ./book-equipment.component.html */ "./src/app/proz/Equipment/book-equipment/book-equipment.component.html"),
            styles: [__webpack_require__(/*! ./book-equipment.component.scss */ "./src/app/proz/Equipment/book-equipment/book-equipment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            ng2_completer__WEBPACK_IMPORTED_MODULE_9__["CompleterService"],
            ng4_auto_complete__WEBPACK_IMPORTED_MODULE_10__["AutoCompleteService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"]])
    ], BookEquipmentComponent);
    return BookEquipmentComponent;
}());



/***/ }),

/***/ "./src/app/proz/Equipment/edit-equipment/edit-equipment.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/proz/Equipment/edit-equipment/edit-equipment.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <!-- <li>\r\n            <a>Equipment</a>\r\n          </li> -->\r\n          <li>\r\n            <a (click)=\"list()\">List of Equipment</a>\r\n          </li>\r\n          <li class=\"active\">Edit Equipment</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Edit Equipment</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n\r\n      <div class=\"page-body\">\r\n        <form [formGroup]=\"editEquipment\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                      <div class=\"well with-header with-footer three-bordered\">\r\n                        <div class=\"header gray\">\r\n                          Edit Equipment\r\n                        </div>\r\n                        <div id=\"registeration-form\">\r\n\r\n                          <!-- Add  Equipment Part -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"idLbl\">\r\n                                  <b>Equipment ID <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" \r\n                                    formControlName=\"equipmentId\" readonly>\r\n                                </span>\r\n                              </div>\r\n                            </div>                            \r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"Add PictureLbl\">\r\n                                  <b>Show On Equipment Board </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <div class=\"checkbox\">\r\n                                     <label>\r\n                                          <input type=\"checkbox\"\r\n                                               class=\"colored-success\" formControlName=\"showOnEquipmentBoard\"\r\n                                               >\r\n                                          <span class=\"text\"> </span>\r\n                                     </label>\r\n                                </div>\r\n                           </div>\r\n                            </div>\r\n                            \r\n                          </div>\r\n                          \r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b> Equipment Name    <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" formControlName=\"equipmentName\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.equipmentName.errors }\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.equipmentName.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.equipmentName.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Equipment Name</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b>Description  </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"\"   formControlName=\"description\"\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\">\r\n                              </span>\r\n                              <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.description.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\">Enter Description</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"costPerUnitLbl\">\r\n                                  <b> Purchase Date<span class=\"mandatory\"></span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"date\" class=\"form-control\" formControlName=\"date\" >\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-lg-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"stateLbl\">\r\n                                  <b>Current Location<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select class=\"form-control\" id=\"stateRegistred\" name=\"status\" \r\n                                  data-bv-field=\"row-title\" formControlName=\"location\"\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\" >\r\n                                  <option value=\"\">Select</option>                                  \r\n                                  <option *ngFor=\"let data of statesData\" value={{data.stateName}}>\r\n                                    {{data.stateName}}\r\n                                  </option>\r\n                                </select>\r\n                                <div *ngIf=\"submitted && f.location.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.location.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Select Location</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            \r\n                          </div>\r\n                         \r\n\r\n                          <div class=\"row\">\r\n                           \r\n                            \r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"subcategoryLbl\">\r\n                                  <b>Category <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <select class=\"form-control\" formControlName=\"itemCategoryCode\" [(ngModel)]=\"category\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.itemCategoryCode.errors }\"\r\n                                    (change)=\"getEquipmentSubCategory(category)\">\r\n                                    \r\n                                    <option>--Select--</option>\r\n                                    <option *ngFor='let data of equipmentCat' value={{data.category}}>\r\n                                      {{data.category}}</option>\r\n                                  </select>\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.itemCategoryCode.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.itemCategoryCode.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter category</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"subcategoryLbl\">\r\n                                  <b>Sub Category <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n\r\n                                  <select class=\"form-control\" formControlName=\"itemSubCategoryCode\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.itemSubCategoryCode.errors }\">\r\n                                    \r\n                                    <option>--Select--</option>\r\n                                    <option *ngFor='let data of equipmentsubCat' value={{data.subCategory}}>\r\n                                      {{data.subCategory}}</option>\r\n                                  </select>\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.itemSubCategoryCode.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.itemSubCategoryCode.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter SubCategory</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b> Manufacturer <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"\"  formControlName=\"manufacturer\">\r\n                              </span>\r\n                              <div *ngIf=\"submitted && f.manufacturer.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.manufacturer.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\">Enter Manufacturer</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b>Serial # <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"  formControlName=\"serialNo\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.serialNo.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.serialNo.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Serial No.</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"sizeLbl\">\r\n                                  <b>Model Number</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"  formControlName=\"model\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.model.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.model.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Model Number</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"colorLbl\">\r\n                                  <b>Purchase Price<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"  formControlName=\"PurchasePrice\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.PurchasePrice.errors }\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.PurchasePrice.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.PurchasePrice.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Purchase Price</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"maincategoryLbl\">\r\n                                  <b> Size <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"  formControlName=\"size\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.size.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.size.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Size</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"subcategoryLbl\">\r\n                                  <b>Present Price <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"  formControlName=\"presentPrice\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.presentPrice.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.presentPrice.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Present Price</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"maincategoryLbl\">\r\n                                  <b> Color <span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"  formControlName=\"color\">\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.color.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.color.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\">Enter Color</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"yearLbl\">\r\n                                  <b>Status<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select class=\"form-control\" formControlName=\"status\" \r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\">                                  \r\n                                  <option value=\"Available\">Available</option>                                  \r\n                                  <option value=\"Un Available\">Un Available</option>\r\n                                  <option value=\"In Active\">IN ACTIVE</option>\r\n                                  <option value=\"In Repair\">IN REPAIR</option>                                  \r\n                                </select>\r\n                                <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.status.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\"> Required Status</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row\"><div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"vendorLbl\">\r\n                                <b>Vendor </b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <select class=\"form-control\" formControlName=\"vendor\"\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.vendor.errors }\">\r\n                                  <option>--Select--</option>                                  \r\n                                  <option *ngFor='let data of vendorListDetails' value={{data.vendorName}}>\r\n                                    {{data.vendorName}}</option>\r\n                                </select>\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"Add PictureLbl\">\r\n                                <b>Upload Picture </b>\r\n                              </label>\r\n                            </div>\r\n                            <!-- <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"customerNameLbl\">\r\n                                  <input type='file' (change)=\"onSelectFile($event)\" style=\"margin-left:6em;\"\r\n                                    [(ngModel)]=\"filesToUpload.length\" [ngModelOptions]=\"{standalone: true}\" multiple>\r\n                                </label>\r\n                              </div>\r\n                            </div> -->\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <div *ngIf=\"withOutImage\" style=\"width: 100px; height: 120px;\"\r\n                                class=\"fileupload-new thumbnail\">\r\n                                <img [src]=\"imagePreview\" style=\"height:120px;width:100px;\">\r\n                              </div>\r\n                              <div *ngFor=\"let x of arr;let i=index\">\r\n                                <br>\r\n                                <div height=\"100px\" width=\"120px\" class=\"icon1\">\r\n                                  {{imageNames[i]?.image}}<i (click)=\"removeSelectedFile(i)\"\r\n                                    style=\"margin-left:10px;color: red\" class=\"fa fa-times\"></i>\r\n                                  <br />\r\n                                  <img src=\"{{x.name}}\" height=\"100px\" width=\"120px\">\r\n                                </div>\r\n                                <br />\r\n                              </div>\r\n                              <input type='file' (change)=\"onSelectFile($event)\" [(ngModel)]=\"filesToUpload.length\"\r\n                                [ngModelOptions]=\"{standalone: true}\" multiple>\r\n                              <br />\r\n                              <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"progressData()\"\r\n                                [disabled]=\"!img\">\r\n                                Upload\r\n                              </button>\r\n                              <br>\r\n                              <br>\r\n                              <div *ngIf=\"progressShow\" class=\"progress-bar1 green stripes\">\r\n                                <span [style.width.%]=\"percentage\">\r\n                                  <p style=\"text-align: center;color:black;font-size:18px;\">\r\n                                    {{percentage}}%</p>\r\n                                </span>\r\n                              </div>\r\n                              <div *ngIf=\"progressHide\" class=\"alert alert-block alert-success\" style=\"height:3px;\">\r\n                                <h4 class=\"alert\" style=\"margin-top:-19px;text-align:center;height:3em;\">\r\n                                  Images\r\n                                  Uploaded\r\n                                  Successfully</h4>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                            \r\n                            \r\n                            <!-- <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"Add PictureLbl\">\r\n                                  <b>Add to Inventory</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <div class=\"checkbox\">\r\n                                     <label>\r\n                                          <input type=\"checkbox\"\r\n                                               class=\"colored-success\"\r\n                                               formControlName=\"Inventory\">\r\n                                          <span class=\"text\"> </span>\r\n                                     </label>\r\n                                </div>\r\n                           </div>\r\n                            </div> -->\r\n                            \r\n                          </div>\r\n                          \r\n     \r\n                          <br />\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-4\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                           \r\n                            <div class=\"col-lg-3 button-center\">\r\n                              <button type=\"submit\" class=\"btn btn-success\" (click)=\"onSubmit()\"><i class=\"fa fa-check\"></i>\r\n                                Save</button>\r\n                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\r\n                                <button type=\"submit\" class=\"btn btn-danger\" (click)=\"Oncancel()\"><i class=\"fa fa-times\"></i>\r\n                                  Cancel</button>\r\n                            </div>\r\n                            \r\n                \r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <br />\r\n                          <!-- /Add  Inventory Part-->\r\n                          <!-- </form> -->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          \r\n\r\n          \r\n\r\n\r\n\r\n        </form>\r\n\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->\r\n"

/***/ }),

/***/ "./src/app/proz/Equipment/edit-equipment/edit-equipment.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/proz/Equipment/edit-equipment/edit-equipment.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5DB2FF;\n  /*display: block;\r\n    padding: 8px 0;*/\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\n.tag {\n  background-color: #08970c;\n  opacity: 0.9;\n  text-align: center; }\n\n.button-center {\n  text-align: center; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei9FcXVpcG1lbnQvZWRpdC1lcXVpcG1lbnQvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3pcXEVxdWlwbWVudFxcZWRpdC1lcXVpcG1lbnRcXGVkaXQtZXF1aXBtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmO3FCQUNpQjtFQUNqQixrQ0FBaUM7RUFDakMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7eUJBQ3NCLEVBQ3hCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLHNDQUFxQyxFQUN4Qzs7QUFDRDtFQUNJLDBCQUFnQztFQUFDLGFBQVc7RUFDNUMsbUJBQWtCLEVBR3JCOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0csbUJBQWtCLEVBQ3BCOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkMiLCJmaWxlIjoic3JjL2FwcC9wcm96L0VxdWlwbWVudC9lZGl0LWVxdWlwbWVudC9lZGl0LWVxdWlwbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXRpdGxle1xyXG4gICAgY29sb3I6ICAjNURCMkZGO1xyXG4gICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDhweCAwOyovXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1REIyRkY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbn1cclxuXHJcbi5tYW5kYXRvcnl7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaHItZ3JheXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG59IFxyXG4udGFneyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDgsIDE1MSwgMTIpO29wYWNpdHk6MC45O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxuXHJcbn0gXHJcblxyXG4uYnV0dG9uLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tb2Nre1xyXG4gICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2NrLWNvbmZ7XHJcbiAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wcm9ncmVzc3tcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGhyZWUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2hlY2tib3gtY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JheXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWJsdWV7ICAgIFxyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/proz/Equipment/edit-equipment/edit-equipment.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/proz/Equipment/edit-equipment/edit-equipment.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditEquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEquipmentComponent", function() { return EditEquipmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global/config */ "./src/global/config.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var EditEquipmentComponent = /** @class */ (function () {
    function EditEquipmentComponent(beyond, router, http, _Activatedroute, formBuilder, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.http = http;
        this._Activatedroute = _Activatedroute;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.equipmentDataStatus = false;
        this.submitted = false;
        this.urls = [];
        this.imageArray = [];
        this.filesToUpload = [];
        this.newArray = [];
        this.uniqueArray = [];
        this.imageNames = [];
        this.percentage = 0;
        this.imagePreview = "../../../assets/img/no-image.png";
    }
    EditEquipmentComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proData = this.loginData.loginCode;
        this.equipmentID = this._Activatedroute.snapshot.paramMap.get("equipmentId");
        this.equipmentListOne(this.equipmentID);
        this.getEquipmentCategory();
        this.getVendorList();
        this.getListOfStates();
        this.editEquipment = this.formBuilder.group({
            equipmentId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            equipmentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            date: [_global_config__WEBPACK_IMPORTED_MODULE_5__["Utility"].year + "-" + _global_config__WEBPACK_IMPORTED_MODULE_5__["Utility"].month + "-" + _global_config__WEBPACK_IMPORTED_MODULE_5__["Utility"].day, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            showOnEquipmentBoard: [false],
            itemCategoryCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            itemSubCategoryCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            size: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            serialNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            manufacturer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            vendor: [''],
            PurchasePrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            presentPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
    };
    EditEquipmentComponent.prototype.equipmentListOne = function (euipmentID) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/equipmentListOne' + '/' + euipmentID, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentListDetails = response.response;
                _this.editEquipment = _this.formBuilder.group({
                    equipmentId: [_this.equipmentListDetails[0].equipmentId, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    description: [_this.equipmentListDetails[0].description, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    equipmentName: [_this.equipmentListDetails[0].equipmentName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    date: [_this.equipmentListDetails[0].date, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    showOnEquipmentBoard: [_this.equipmentListDetails[0].showOnEquipmentBoard],
                    itemCategoryCode: [_this.equipmentListDetails[0].category, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    itemSubCategoryCode: [_this.equipmentListDetails[0].subCategory, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    location: [_this.equipmentListDetails[0].location, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    size: [_this.equipmentListDetails[0].size],
                    color: [_this.equipmentListDetails[0].color],
                    model: [_this.equipmentListDetails[0].model],
                    serialNo: [_this.equipmentListDetails[0].serialNo],
                    manufacturer: [_this.equipmentListDetails[0].manufacturer],
                    vendor: [_this.equipmentListDetails[0].vendorName],
                    PurchasePrice: [_this.equipmentListDetails[0].purchasePrice, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    status: [_this.equipmentListDetails[0].status, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    presentPrice: [_this.equipmentListDetails[0].presentPrice, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                });
                _this.getEquipmentSubCategory(_this.equipmentListDetails[0].category);
                _this.urls = _this.equipmentListDetails[0].pictures.split(',');
                console.log("url" + JSON.stringify(_this.urls));
                _this.urls = _this.equipmentListDetails[0].pictures.split(',');
                //this.urls = this.equipmentListDetails[0].pictures.split(',')
                //console.log("url" + JSON.stringify(this.urls))
                //console.log("urls" + JSON.stringify(this.equipmentListDetails[0].pictures))
                if (_this.equipmentListDetails[0].pictures != "") {
                    _this.withImage = true;
                    _this.withOutImage = false;
                    for (var i = 0; i < _this.urls.length; i++) {
                        _this.imageArray.push(_this.urls[i]);
                        _this.imageNames.push({ image: _this.urls[i] });
                        _this.arrayValues.push(_this.urls[i]);
                        _this.imagePreview = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/" + _this.urls[i];
                        _this.arr.push({ name: _this.imagePreview });
                    }
                    _this.uniqueArray = Array.from(new Set(_this.arr));
                    console.log(" this.uniqueArray" + JSON.stringify(_this.uniqueArray));
                }
                console.log("arrarr" + JSON.stringify(_this.arr));
                if (_this.equipmentListDetails[0].pictures == "" || _this.equipmentListDetails[0].pictures == null || _this.equipmentListDetails[0].pictures == undefined || _this.equipmentListDetails[0].pictures == "undefined") {
                    _this.withOutImage = true;
                    _this.withImage = false;
                    _this.imagePreview = '../../assets/img/no-image.png';
                }
                // this.equipentListResponse = true;
            }
            else {
                //this.equipentListResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    EditEquipmentComponent.prototype.handleImage = function (file) {
        var _this = this;
        var picReader = new FileReader();
        picReader.onload = function (e) {
            var reader = e.target;
            _this.imagePreview = reader.result;
        };
        picReader.readAsDataURL(file);
    };
    EditEquipmentComponent.prototype.select = function (event) {
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
            this.imagePreview = "../../../assets/img/no-image.png";
        }
    };
    EditEquipmentComponent.prototype.onSelectFile = function (fileInput) {
        var _this = this;
        this.arr = [];
        this.imageArray = [];
        this.progressHide = false;
        console.log("fileInput.target.files" + fileInput.target.files);
        console.log("Array checking" + fileInput.target.files.length);
        if (fileInput.target.files.length == 1) {
            this.filesToUpload.push(fileInput.target.files[0]);
            this.img = true;
            this.withOutImage = true;
            this.chosseTypecount = this.filesToUpload.length;
        }
        else {
            for (var i = 0; i < fileInput.target.files.length; i++) {
                this.img = true;
                this.withOutImage = true;
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
            this.img = true;
            this.withOutImage = true;
            reader.onload = function (fileInput) {
                console.log(fileInput.target.result);
                _this.urls.push(fileInput.target.result);
                // this.arr.push({ name: fileInput.target.result });
                // console.log("checking data" + this.urls.length)
                // console.log("array names" + JSON.stringify(this.arr))
                _this.imageuploadstatus = true;
            };
            reader.readAsDataURL(fileInput.target.files[i_1]);
        }
        this.uploadData();
    };
    EditEquipmentComponent.prototype.uploadData = function () {
        var _this = this;
        console.log("upload is calling");
        var files = this.filesToUpload;
        //console.log(files);
        console.log("files.lenght" + files.length);
        this.formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            this.formData.append("fileImage", files[i]);
        }
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/multiEqiImgData', this.formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) {
            for (var i = 0; i < files.imagePath.length; i++) {
                _this.newArray.push(files.imagePath[i]);
                console.log("  this.newArray" + JSON.stringify(_this.newArray));
            }
            _this.uniqueArray = Array.from(new Set(_this.newArray));
            _this.imageNames = Object.keys(_this.uniqueArray).map(function (key) { return ({ type: key, image: _this.uniqueArray[key] }); });
            _this.arr = Object.keys(_this.uniqueArray).map(function (key) { return ({ type: key, name: _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/" + _this.uniqueArray[key] }); });
        });
    };
    EditEquipmentComponent.prototype.progressData = function () {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/multiEqiImgData";
        var formData = new FormData();
        var xhr = new XMLHttpRequest();
        formData.append("fileImage", this.file2Upload);
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
                }
            }
        };
        xhr.onerror = function (e) { };
        xhr.onload = function () {
            var a = JSON.parse(xhr.responseText);
            _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].secimagePath = a.imagePath;
        };
        xhr.send(formData);
    };
    EditEquipmentComponent.prototype.removeSelectedFile = function (i) {
        this.arr.splice(i, 1);
        this.imageNames.splice(i, 1);
        this.uniqueArray = [];
        for (var p = 0; p < this.arr.length; p++) {
            this.value = this.arr[p].name;
            this.uniqueArray.push(this.arr[p].name.substring(25, 50));
            console.log('uniqueArray' + '' + this.uniqueArray);
        }
    };
    EditEquipmentComponent.prototype.getToday = function () {
    };
    EditEquipmentComponent.prototype.getListOfStates = function () {
        var _this = this;
        // this.zipcodeValue = JSON.parse(localStorage.getItem('zipcode'))
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getListOfStates', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.statesData = response.response;
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    EditEquipmentComponent.prototype.getVendorList = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
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
    Object.defineProperty(EditEquipmentComponent.prototype, "f", {
        get: function () { return this.editEquipment.controls; },
        enumerable: true,
        configurable: true
    });
    EditEquipmentComponent.prototype.getEquipmentCategory = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/equipmentProcat' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentCat = response.response;
                console.log("equipmentCat details" + JSON.stringify(_this.equipmentCat));
                _this.priceBookServiceResponse = true;
            }
            else {
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    EditEquipmentComponent.prototype.getEquipmentSubCategory = function (category) {
        var _this = this;
        console.log("category" + category);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/equipmentProSubcatgory/' + category + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentsubCat = response.response;
                console.log("equipmentCat details" + JSON.stringify(_this.equipmentCat));
                _this.priceBookServiceResponse = true;
            }
            else {
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    EditEquipmentComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    EditEquipmentComponent.prototype.list = function () {
        this.router.navigate(['/proz/listEquipment']);
    };
    EditEquipmentComponent.prototype.Onupdate = function () {
        this.router.navigate(['/proz/listEquipment']);
    };
    EditEquipmentComponent.prototype.Oncancel = function () {
        this.router.navigate(['/proz/listEquipment']);
    };
    EditEquipmentComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.editEquipment.value.equipmentID == '') {
            return;
        }
        else if (this.editEquipment.value.equipmentName == '') {
            return;
        }
        else if (this.editEquipment.value.status == '') {
            return;
        }
        else {
            this.saveButton();
        }
    };
    EditEquipmentComponent.prototype.saveButton = function () {
        var _this = this;
        if (this.editEquipment.value.itemCategoryCode != '' && this.editEquipment.value.itemSubCategoryCode != '' && this.editEquipment.value.name != '') {
            var addObj = {
                "proId": this.loginData.loginCode,
                "equipmentId": '' + this.equipmentID,
                "equipmentName": '' + this.editEquipment.value.equipmentName,
                "description": '' + this.editEquipment.value.description,
                "date": '' + this.editEquipment.value.date,
                //"existingQty": '' + this.existQty == undefined ? '' : this.existQty,
                "location": '' + this.editEquipment.value.location == undefined ? '' : this.editEquipment.value.location,
                //"qty": '' + this.quantityAdd == undefined ? '' : this.quantityAdd,
                //"totalQuantity": '' + this.totalQuantityData == undefined ? '' : this.totalQuantityData,
                "manufacturer": '' + this.editEquipment.value.manufacturer,
                "model": '' + this.editEquipment.value.model,
                "size": '' + this.editEquipment.value.size,
                "color": '' + this.editEquipment.value.color,
                "showOnEquipmentBoard": '' + this.editEquipment.value.showOnEquipmentBoard,
                "category": '' + this.editEquipment.value.itemCategoryCode == undefined ? '' : this.editEquipment.value.itemCategoryCode,
                "subCategory": '' + this.editEquipment.value.itemSubCategoryCode == undefined ? '' : this.editEquipment.value.itemSubCategoryCode,
                "serialNo": '' + this.editEquipment.value.serialNo,
                "purchasePrice": '' + this.editEquipment.value.PurchasePrice,
                //"vendorName": '' + this.editEquipment.value.vendorName,
                // "webLinkDetails": '' + this.editEquipment.value.webLinkDetails,
                "vendorName": '' + this.editEquipment.value.vendor == undefined ? '' : this.editEquipment.value.vendor,
                //"type": '' + this.editEquipment.value.type,
                //"unit": '' + this.editEquipment.value.unit == undefined ? '' : this.editEquipment.value.unit,
                "presentPrice": '' + this.editEquipment.value.presentPrice,
                "status": '' + this.editEquipment.value.status,
                "pictures": '' + this.uniqueArray,
            };
            console.log("ADD OBJ" + JSON.stringify(addObj));
            this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/editEquipment', addObj)
                .subscribe(function (data) {
                var partInfoData = data.json();
                if (partInfoData.status == 200) {
                    // alert(200)
                    _this.toastr.success('Equipment updated Successfuly...');
                    //this.listEquipment();
                    _this.router.navigate(['/proz/listEquipment']);
                }
                else {
                }
            }, function (error) {
                console.log(error); // Error getting the data
            });
        }
    };
    EditEquipmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-edit-equipment',
            template: __webpack_require__(/*! ./edit-equipment.component.html */ "./src/app/proz/Equipment/edit-equipment/edit-equipment.component.html"),
            styles: [__webpack_require__(/*! ./edit-equipment.component.scss */ "./src/app/proz/Equipment/edit-equipment/edit-equipment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], EditEquipmentComponent);
    return EditEquipmentComponent;
}());



/***/ }),

/***/ "./src/app/proz/Equipment/equipmentbooking-board/equipmentbooking-board.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/proz/Equipment/equipmentbooking-board/equipmentbooking-board.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <!-- <li>\r\n            <a>Equipment</a>\r\n          </li> -->\r\n          <!-- <li>\r\n            <a (click)=\"listEquipment()\">List of Equipment</a>\r\n          </li> -->\r\n          <li class=\"active\">Equipment Booking Board</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Equipment Booking Board</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body  (ngSubmit)=\"onSubmit()\"-->\r\n\r\n      <div class=\"page-body\">\r\n        <!-- Dispatch Top Sec Starts -->\r\n        <div class=\"row dispatch-top-sec\">\r\n            <div class=\"col-xs-12 col-md-3\" style=\"padding-bottom: 0%;\">\r\n                \r\n                <div class=\"page-heading\">\r\n                    <h1 class=\"dashboard-heading\">Booking Board </h1>                    \r\n                    <!-- <div>&nbsp;</div> -->\r\n                   \r\n                    <div class=\"col-md-12 attendence-status\">\r\n                        <!-- <div>&nbsp;</div> -->\r\n                        <div>\r\n                            <div class=\"col-md-10\">\r\n                                <i class=\"fa fa-circle\" style=\"color:blue\"></i> &nbsp;&nbsp;\r\n                                <span>Booked</span>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                {{Booked}}\r\n                            </div>\r\n\r\n                            <div class=\"col-md-10\">\r\n                                <i class=\"fa fa-circle\" style=\"color: red;\"></i> &nbsp;&nbsp;\r\n                                <span>In-Use</span>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                {{InUse}}\r\n                            </div>\r\n\r\n                            <div class=\"col-md-10\">\r\n                                <i class=\"fa fa-circle\" style=\"color:green;\"></i> &nbsp; &nbsp;\r\n                                <span>Available</span>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                {{Returned}}\r\n                            </div>\r\n                            <div class=\"col-md-10\">\r\n                                <i class=\"fa fa-circle\" style=\"color:pink;\"></i> &nbsp;&nbsp;\r\n                                <span>Cancelled</span>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                {{Cancel}}\r\n                            </div>\r\n                            <div class=\"col-md-10\">\r\n                                <i class=\"fa fa-circle\" style=\"color:black;\"></i> &nbsp;&nbsp;\r\n                                <span>Unavailable</span>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                {{Unavailable}}\r\n                            </div>\r\n                            <div class=\"col-md-10\">\r\n                                <i class=\"fa fa-circle\" style=\"color:grey;\"></i> &nbsp; &nbsp;\r\n                                <span>In-Repair</span>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                {{Inrepair}}\r\n                            </div>\r\n                            <div>&nbsp;</div>\r\n                        </div>\r\n                    </div> \r\n                    <!-- <div>&nbsp;</div>                   -->\r\n                </div>\r\n               \r\n            </div>\r\n\r\n           \r\n            \r\n            <br />\r\n            <div class=\"col-md-12 control-section\" style=\" display:inline-block;\">\r\n                <!-- <div class=\"drag-sample-wrapper\"> -->\r\n                <div class=\"schedule-container\">\r\n                    <ejs-schedule #scheduleObj id='Schedule' cssClass='schedule-drag-drop' width='100%' startHour='00:00' endHour='24:00' [group]=\"group\" [currentView]=\"currentView\" [selectedDate]=\"selectedDate\" (dataBinding)=\"onDataBound($event)\" [eventSettings]=\"eventSettings\"\r\n                        (actionBegin)=\"onActionBegin($event)\" (eventRendered)=\"onEventRendered($event)\" (renderCell)=\"onRenderCell($event)\" (popupOpen)='onPopupOpen($event)' (created)='onCreate()' (actionComplete)='onActionComplete($event)' (cellClick)=\"scheduleCellClick($event)\"\r\n                        (drag)=\"onItemDrag($event)\" (dragStop)=\"onDragStop($event)\" (resizeStart)=\"onResizeStart($event)\" (cellDoubleClick)=\"scheduleCellDoubleClick($event)\" (eventClick)=\"scheduleEventClick($event)\" (resizeStop)=\"onResizeStop($event)\" (resize)=\"resizeInProgress($event)\"\r\n                        (dragStart)=\"onDragStart($event)\" [rowAutoHeight]=\"rowAutoHeight\" [allowMultiple]='allowMultiple' [timeScale]=\"timeScale\">\r\n                        <!-- cssClass=\"schedule-cell-dimension\"     [allowVirtualScrolling]=\"virtualscroll\"\r\n                (drag)=\"onItemDrag($event)\" (actionComplete)='onActionComplete($event)' \r\n                width='auto' height=\"500px\" (dragStart)=\"onDragStart($event)\"  [timeScale]=\"timeScale\" -->\r\n                        <e-header-rows>\r\n                            <e-header-row option='Hour'></e-header-row>\r\n                        </e-header-rows>\r\n                        <ng-template #timeScaleMajorSlotTemplate let-data>\r\n                            <div class=\"majorTime\">{{getMajorTime(data)}}</div>\r\n                        </ng-template>\r\n                        <e-resources>\r\n                            <e-resource field='equipmentBookId' title='Tech' name='Consultants' [dataSource]=\"consultantDataSource\" [allowMultiple]='true' textField='Text' idField='Id' groupIDField=\"GroupId\" colorField='Color'>\r\n                            </e-resource>\r\n                        </e-resources>\r\n                        <ng-template #eventSettingsTemplate let-data>\r\n                            <div class='template-wrap'>\r\n                                <div class=\"subject\" style=\"font-size: 15px;\">{{data.bookByStaff}}-{{data.address}}</div>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template #resourceHeaderTemplate let-data>\r\n                            <div class=\"template-wrap\" (click)=\"showResourceDetails(data)\">\r\n                                <div class=\"specialist-category\">\r\n                                    <div>\r\n                                        <img src=\"{{getConsultantImage(data)}}\" class=\"specialist-image\" />\r\n                                    </div>\r\n                                    <div class=\"specialist-name\" style=\"font-size: 12px;font-weight: bold; color: #9B9A9B\">\r\n                                        <div>\r\n                                            {{getConsultantName(data)}}\r\n                                            <i class=\"fa fa-circle\" style=\"color:rgb(10, 10, 202);font-size: 12px;\"></i>\r\n                                        </div>\r\n                                        <!-- <div class=\"specialist-designation\">getConsultantDesignation(data)</div> -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                        <e-views>\r\n                            <e-view option=\"TimelineDay\"></e-view>\r\n                            <e-view option=\"Week\"></e-view>\r\n                            <!-- <e-view option='TimelineDay' [allowVirtualScrolling]=\"virtualscroll\"></e-view>\r\n              <e-view option='Week' [allowVirtualScrolling]=\"virtualscroll\"></e-view>\r\n              <e-view option='Month' [allowVirtualScrolling]=\"virtualscroll\"></e-view> -->\r\n                            <!-- <e-view option='TimelineMonth' [allowVirtualScrolling]=\"virtualscroll\"></e-view> -->\r\n                        </e-views>\r\n                        <ng-template #editorTemplate let-data style=\"background-color: #e6ffff!important;\">\r\n                            <table class=\"custom-event-editor\" width=\"100%\" cellpadding=\"5\">\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td colspan=\"6\">\r\n                                            <hr class=\"mt-1 mb-1\" style=\"border-top: 2px solid #e3165b !important\" />\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <table class=\"custom-inner-table\" width=\"100%\" style=\"table-layout:fixed;\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <th width=\"80\">Wo#</th>\r\n                                                        <td>data.equipmentBookId</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <th>Wo Status</th>\r\n                                                        <td>data.status</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <th>Wo Title</th>\r\n                                                        <td>data.equipmentName</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </td>\r\n                                        <td>\r\n                                            <table class=\"custom-inner-table\" width=\"100%\" style=\"table-layout:fixed;\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <th width=\"100\">Created On</th>\r\n                                                        <td style=\"font-size: 12px;\">data.createdOn</td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <th>Created By</th>\r\n                                                        <!-- <td>{{data.firstName}}</td> -->\r\n                                                        data.createdBy\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <th>Assigned Tech</th>\r\n                                                        <td>data.workTechName</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"6\">\r\n                                            <hr class=\"mt-1 mb-1\" style=\"border-top: 2px solid #e3165b !important\" />\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"6\">\r\n                                            <table class=\"custom-inner-table\" width=\"100%\" style=\"table-layout:fixed;\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td>\r\n                                                            <table class=\"custom-inner-table\" width=\"100%\" style=\"table-layout:fixed;\">\r\n                                                                <tbody>\r\n                                                                    <tr>\r\n                                                                        <th width=\"30\"><i style=\"color: black;\" class=\"fa fa-user text-muted fa-2x\" aria-hidden=\"true\"></i></th>\r\n                                                                        <td>data.customerName</td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td colspan=\"2\">\r\n                                                                            <p></p>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                    <tr (click)=\"viewWOMapView(data)\">\r\n                                                                        <th width=\"30\"><i style=\"color: black;\" class=\"fa fa-map-marker text-muted fa-2x\" aria-hidden=\"true\"></i></th>\r\n                                                                        <td>data.address <br /> data.city data.state data.zipCode\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <table class=\"custom-inner-table\" width=\"100%\" style=\"table-layout:fixed;\">\r\n                                                                <tbody>\r\n                                                                    <tr>\r\n                                                                        <th width=\"30\"><i style=\"color: black;\" class=\"fa fa-phone text-muted fa-2x\" aria-hidden=\"true\"></i>\r\n                                                                        </th>\r\n                                                                        <td>data.phoneNumber</td>\r\n                                                                    </tr>\r\n                                                                    <!-- <tr>\r\n                                    <th colspan=\"2\">\r\n                                      <button (click)=\"dispatchWO(data)\"\r\n                                        class=\"btn btn-primary btn-sm\">Dispatch</button>\r\n                                    </th>\r\n                                  </tr> -->\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <th width=\"30\"></th>\r\n                                                        <td></td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"6\">\r\n                                            <hr class=\"mt-1 mb-1\" style=\"border-top: 2px solid #e3165b !important\" />\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"pr-2\">\r\n                                            <table width=\"90%\" style=\"table-layout:fixed;\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td class=\"e-textlabel\" width=\"50\"><strong>From</strong></td>\r\n                                                        <td>\r\n                                                            <input id=\"StartTime\" class=\"e-field\" type=\"text\" name=\"StartTime\" />\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td class=\"e-textlabel\"><strong>To</strong></td>\r\n                                                        <td>\r\n                                                            <input id=\"EndTime\" class=\"e-field\" type=\"text\" name=\"EndTime\" />\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </td>\r\n                                        <td>\r\n                                            <table width=\"100%\" style=\"table-layout:fixed;\">\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td>\r\n                                                            <p style=\"margin-top: -5px;\"><b>Frequency</b></p>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <p style=\"margin-top: -5px;\">data.makeReoccuring || 'One Time'</p>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td colspan=\"2\">\r\n                                                            <input class=\"e-field e-input\" type=\"input\" name=\"isAllDay\" value=\"\" id=\"allDay\">\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"6\">\r\n                                            <hr class=\"mt-1 mb-1\" style=\"border-top: 2px solid #e3165b !important\" />\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr style=\"display: none;\">\r\n                                        <td class=\"e-textlabel\"><b>Status</b></td>\r\n                                        <td colspan=\"4\">\r\n                                            <input type=\"text\" id=\"status\" name=\"workOrderStatus\" class=\"e-field\" style=\"width: 100%\" />\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"e-textlabel\"><b>Secondary tech</b></td>\r\n                                        <td colspan=\"4\">\r\n                                            <input type=\"text\" id=\"TechId\" name=\"ConsultantIds\" class=\"e-field\" style=\"width: 100%\" />\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"e-textlabel\"><b>Description</b></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"3\" style=\"width: 100%;\">\r\n                                            <textarea id=\"Description\" class=\"e-field e-input\" name=\"Description\" rows=\"2\" cols=\"50\" value=\"{{data.description}}\" style=\"width: 100%; resize: vertical\"></textarea>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td colspan=\"6\">\r\n                                            <hr class=\"mt-1 mb-1\" style=\"border-top: 2px solid #e3165b !important\" />\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </ng-template>\r\n                    </ejs-schedule>\r\n                </div>\r\n                <!-- </div> -->\r\n                <br><br>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <!--Databox 1-->\r\n                <div class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12\">\r\n                    <div class=\"databox bg-purple radius-bordered\" (click)=\"unAssignedWO()\">\r\n                        <div class=\"databox-right\">\r\n                            <span class=\"databox-number white\">{{totalUnAssignedCounts}}</span>\r\n                            <div class=\"databox-text white\" (click)=\"unAssignedWO()\">UNASSIGNED</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12\">\r\n                    <div class=\"databox bg-themethirdcolor radius-bordered\">\r\n                        <div class=\"databox-right\" (click)=\"cancelledWO()\">\r\n                            <span class=\"databox-number black \">{{totalCancelledCounts}}</span>\r\n                            <div class=\"databox-text black\">CANCELLED</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--/Databox 5-->\r\n\r\n            <div *ngIf=\"unAssignedWOData\">\r\n                <div class=\"title-container\">\r\n                    <h1 class=\"title-text\">UnAssigned WorkOrders</h1>\r\n                </div>\r\n                <!-- <div class=\"control-section p-2\">\r\n          <form action=\"\">\r\n            <label for=\"datetimepick\">Search For date : </label>\r\n            <input type=\"date\" name=\"datetimepick\" id=\"datetimepick\" placeholder=\"search for date\"\r\n              (change)=\"filterlistWorkOrder($event.target.value)\" class=\"form-control\">\r\n            <input type=\"button\" (click)=\"filterlistWorkOrder('')\" class=\"form-control btn btn-primary\" value=\"reset\">\r\n          </form>\r\n        </div> -->\r\n                <div class=\"control-section\">\r\n                    <!-- <button ejs-button (click)=\"SingleSort()\"  cssClass=\"e-flat\">Sort <b>workOrderNumber</b> column</button> -->\r\n                    <div class=\"e-resizable\">\r\n                        <ejs-grid id='Grid' #gridObj [dataSource]='gridDS' height='100%' width=\"100%\" [allowSorting]='true' [pageSettings]='pageSettings' [allowRowDragAndDrop]=\"allowDragAndDrop\" [rowDropSettings]=\"srcDropOptions\" (rowDrop)=\"onRowDragStop($event)\" (rowDrag)=\"onRowDrag($event)\"\r\n                            rowDragStart=\"onRowDragStart($event)\" [allowSelection]=\"true\" (click)=\"clickHeader($event)\">\r\n                            <e-columns>\r\n                                <e-column field='workOrderStatus' headerText='Status' width='120'>\r\n                                    <ng-template #template let-data>\r\n                                        <div class=\"item\" *ngIf=\"data.workOrderStatus =='UNASSIGNED'\">\r\n                                            <span class=\"label-wo-unassigned\">data.workOrderStatus</span>\r\n                                        </div>\r\n                                        <div class=\"item\" *ngIf=\"data.workOrderStatus =='DRAFT'\">\r\n                                            <span class=\"label-wo-draft\">data.workOrderStatus</span>\r\n                                        </div>\r\n                                        <div class=\"item\" *ngIf=\"data.workOrderStatus =='SENT'\">\r\n                                            <span class=\"label-wo-sent\">data.workOrderStatus</span>\r\n                                        </div>\r\n                                        <div class=\"item\" *ngIf=\"data.workOrderStatus =='REJECTED'\">\r\n                                            <span class=\"label-wo-rejected\">data.workOrderStatus</span>\r\n                                        </div>\r\n                                        <div class=\"item\" *ngIf=\"data.workOrderStatus =='APPROVED'\">\r\n                                            <span class=\"label-wo-approved\">data.workOrderStatus</span>\r\n                                        </div>\r\n                                        <div class=\"item\" *ngIf=\"data.workOrderStatus =='MODIFIED'\">\r\n                                            <span class=\"label-wo-modified\">data.workOrderStatus</span>\r\n                                        </div>\r\n                                        <div class=\"item\" *ngIf=\"data.workOrderStatus =='ONGOING'\">\r\n                                            <span class=\"label-wo-ongoing\">data.workOrderStatus</span>\r\n                                        </div>\r\n                                        <div class=\"item\" *ngIf=\"data.workOrderStatus =='COMPLETE'\">\r\n                                            <span class=\"label-wo-complete\">data.workOrderStatus</span>\r\n                                        </div>\r\n                                        <div class=\"item\" *ngIf=\"data.workOrderStatus =='RECALL'\">\r\n                                            <span class=\"label-wo-recall\">data.workOrderStatus</span>\r\n                                        </div>\r\n                                        <div class=\"item\" *ngIf=\"data.workOrderStatus =='PENDING'\">\r\n                                            <span class=\"label-wo-pending\">data.workOrderStatus</span>\r\n                                        </div>\r\n                                    </ng-template>\r\n                                </e-column>\r\n                                <e-column [isPrimaryKey]='primaryKeyVal' field='workOrderNumber' headerText='Work Order #' width='150'>\r\n                                    <ng-template #template let-data>\r\n                                        <a href=\"javascript:void(0)\" style=\"box-shadow: none;\" (click)=\"viewWorkOrder(data.workOrderNumber)\">{{data.workOrderNumber}}</a>\r\n                                    </ng-template>\r\n                                </e-column>\r\n                                <e-column field='startDate' headerText='Start date' width='120'></e-column>\r\n                                <e-column field='startTime' headerText='Start time' width='120'></e-column>\r\n\r\n                                <e-column field='endDate' headerText='End date' width='120'></e-column>\r\n                                <e-column field='endTime' headerText='End time' width='120'></e-column>\r\n\r\n                                <e-column field='source' headerText='Source' width='120'></e-column>\r\n                                <e-column field='customerName' headerText='Customer Name' width='160'></e-column>\r\n                                <e-column field='emailId' headerText='Email' width='150'></e-column>\r\n                                <e-column field='phoneNumber' headerText='Phone #' width='150'></e-column>\r\n                                <e-column field='jobName' headerText='Job Name' width='120'></e-column>\r\n                                <!-- <e-column field='estimate' headerText='Estimate #' width='120'></e-column>\r\n                                <e-column field='invoice' headerText='Invoice #' width='120'></e-column> -->\r\n                                <e-column field='createdOn' headerText='Last Updated On' width='150'></e-column>\r\n                                <e-column field='createdOn' headerText='createdOn' width='120'></e-column>\r\n                                <e-column headerText='Edit' width='120'>\r\n                                    <ng-template #template let-data>\r\n                                        <a href=\"javascript:void(0)\" (click)=\"editWorkOrder(data.workOrderNumber)\" class=\"btn btn-xs btn-primary shiny\"><i class=\"fa fa-edit\"></i></a>\r\n                                    </ng-template>\r\n                                </e-column>\r\n                            </e-columns>\r\n                        </ejs-grid>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\" *ngIf=\"cancelledWo\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"widget\">\r\n                        <!-- /Widget Header-->\r\n                        <div class=\"widget-header bordered-bottom bordered-themeprimary\">\r\n                            <i class=\"widget-icon fa fa-tasks themeprimary\"></i>\r\n                            <span class=\"widget-caption black\">List of Work Orders: Cancelled</span>\r\n                        </div>\r\n                        <!-- /Widget Header-->\r\n                        <!-- Widget Body-->\r\n                        <div class=\"widget-body\" *ngIf=\"cancelledwoResponse\">\r\n                            <!-- <div class=\"task-container\"> -->\r\n                            <div class=\"table-scrollable\">\r\n                                <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                                    <thead class=\"flip-content bordered-palegreen\">\r\n                                        <tr>\r\n                                            <th (click)=\"sort('workOrderNumber')\">\r\n                                                Work Order #\r\n                                                <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" *ngIf=\"sortField=='workOrderNumber' && sortType=='asc'\"></i>\r\n                                                <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" *ngIf=\"sortField=='workOrderNumber' && sortType=='dsc'\"></i>\r\n                                            </th>\r\n                                            <th (click)=\"sort('source')\" >\r\n                                                Source\r\n                                                <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" *ngIf=\"sortField=='source' && sortType=='asc'\"></i>\r\n                                                <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" *ngIf=\"sortField=='source' && sortType=='dsc'\"></i>\r\n                                            </th>\r\n                                            <th (click)=\"sort('customerName')\">\r\n                                                Customer Name\r\n                                                <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" *ngIf=\"sortField=='customerName' && sortType=='asc'\" ></i>\r\n                                                <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" *ngIf=\"sortField=='customerName' && sortType=='dsc'\"></i>\r\n                                            </th>\r\n                                            <th (click)=\"sort('phoneNumber')\">\r\n                                                Phone #\r\n                                                <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" *ngIf=\"sortField=='phoneNumber' && sortType=='asc'\" ></i>\r\n                                                <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" *ngIf=\"sortField=='phoneNumber' && sortType=='dsc'\" ></i>\r\n                                            </th>\r\n                                            <th (click)=\"sort('emailId')\">\r\n                                                Email ID\r\n                                                <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" *ngIf=\"sortField=='emailId' && sortType=='asc'\"></i>\r\n                                                <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" *ngIf=\"sortField=='emailId' && sortType=='dsc'\"></i>\r\n                                            </th>\r\n                                            <th>\r\n                                                Job Name\r\n                                            </th>\r\n\r\n                                            \r\n                                            <th (click)=\"sort('modifiedOn')\">\r\n                                                Last Updated On\r\n                                                <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" *ngIf=\"sortField=='modifiedOn' && sortType=='asc'\"></i>\r\n                                                <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" *ngIf=\"sortField=='modifiedOn' && sortType=='dsc'\"></i>\r\n                                            </th>\r\n                                            <th (click)=\"sort('createdOn')\">\r\n                                                Created On\r\n                                                <i class=\"fa fa-arrow-up\" aria-hidden=\"true\" *ngIf=\"sortField=='createdOn' && sortType=='asc'\"></i>\r\n                                                <i class=\"fa fa-arrow-down\" aria-hidden=\"true\" *ngIf=\"sortField=='createdOn' && sortType=='dsc'\"></i>\r\n                                            </th>\r\n                                            <th>\r\n                                                Edit\r\n                                            </th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let data of bill\">\r\n                                            <td class=\"item\">\r\n                                                <a (click)=\"viewWorkOrder(data.workOrderNumber)\">data.workOrderNumber</a>\r\n                                            </td>\r\n                                            <td>\r\n                                                data.source\r\n                                            </td>\r\n                                            <td>\r\n                                                data.customerName\r\n                                            </td>\r\n                                            <td>\r\n                                                data.phoneNumber\r\n                                            </td>\r\n                                            <td>\r\n                                                data.emailId\r\n                                            </td>\r\n                                            <td>\r\n                                                Tiolet Install\r\n                                            </td>\r\n\r\n                                           \r\n                                            <td>\r\n                                                data.modifiedOn\r\n                                            </td>\r\n                                            <td>\r\n                                                data.createdOn\r\n                                            </td>\r\n                                            <td class=\"center\">\r\n                                                <a class=\"btn btn-xs btn-primary shiny\" (click)=\"editWorkOrder(data.workOrderNumber)\">\r\n                                                    <i class=\"fa fa-edit\"></i>\r\n                                                </a>\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                    <!-- <tbody>\r\n                        <tr *ngFor=\"let data of bill\">\r\n                          <td draggable=\"true\">\r\n                            <span class=\"text\"> #{{data.workOrderNumber}} - {{data.firstName}} -\r\n                              {{data.selectCategory}} {{data.selectSubCategory}} - {{data.address}}, {{data.state}},\r\n                              {{data.city}} - {{data.zipCode}} </span>\r\n                          </td>\r\n                        </tr>\r\n                      </tbody> -->\r\n                                </table>\r\n                            </div>\r\n                            <!-- </div> -->\r\n                        </div>\r\n                        <div class=\"widget-body no-padding\" *ngIf=\"!cancelledwoResponse\">\r\n                            <p>No Cancelled Work Orders</p>\r\n                        </div>\r\n                        <br /><br /><br /><br /><br /><br />\r\n                        <!-- CALENDER -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /Page Body -->\r\n        </div>\r\n        <div class=\"backdrop\"></div>\r\n        <div #container class='root-container'></div>\r\n        <!-- <ejs-dialog [visible]='false' id='dialog' #ejDialog isModal='true' (overlayClick)=\"onOverlayClick()\" showCloseIcon='true' [target]='targetElement' width='250px' [buttons]='buttons' (open)=\"dialogOpen()\">\r\n            <ng-template #content>\r\n                <div class=\"dialogContent\">\r\n                    <span class=\"dialogText\">Reason ?</span>\r\n                    <input id=\"inVal\" class=\"e-input\" type=\"text\" placeholder=\"Enter your message here!\" />\r\n                </div>\r\n            </ng-template>\r\n        </ejs-dialog> -->\r\n        <!-- <div #resourcecontainer class='resource-root-container'></div> -->\r\n        <!-- <ejs-dialog [visible]='false' id='resourceDialog' #ejResourceDialog isModal='true' (overlayClick)=\"onOverlayClick()\" showCloseIcon='true' [target]='targetElement' width='250px' (open)=\"dialogOpen()\">\r\n            <ng-template #content></ng-template>\r\n        </ejs-dialog> -->\r\n    </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/proz/Equipment/equipmentbooking-board/equipmentbooking-board.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/proz/Equipment/equipmentbooking-board/equipmentbooking-board.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n         padding: 8px 0;\r\n         border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n        margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #ff0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #fff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n#content {\n  width: 100%;\n  height: 100%;\n  border: 1px solid black; }\n\n.contentInside {\n  width: 100px;\n  height: 70px;\n  margin: 7px;\n  border: 1px solid black;\n  display: inline-flex; }\n\n.resize {\n  resize: horizontal;\n  overflow: auto; }\n\n/* custom code start*/\n\n.drag-sample-wrapper {\n  display: flex; }\n\n.schedule-container {\n  padding-right: 10px;\n  width: 100%; }\n\n.title-container {\n  padding-bottom: 10px; }\n\n.title-text {\n  font-size: 18px;\n  margin: 0px;\n  font-weight: bold;\n  text-align: center; }\n\n/* custom code end*/\n\n.treeview-external-drag #waiting {\n  height: 100%;\n  padding: 0; }\n\n.treeview-external-drag #waitid {\n  float: left;\n  width: 13%;\n  text-align: center;\n  line-height: 30px;\n  font-size: 13px;\n  font-family: \"Segoe UI\";\n  color: #f9920b;\n  overflow: hidden;\n  margin: 9px 0;\n  padding: 0 2px 0 0; }\n\n.treeview-external-drag #waitdetails {\n  width: 95%;\n  float: left;\n  height: 100%;\n  padding: 0; }\n\n.treeview-external-drag #waitlist {\n  width: 100%;\n  height: 50%;\n  font-weight: bold;\n  font-family: \"Segoe UI\";\n  font-size: 12px;\n  color: #545554;\n  padding: 5px 0 0 10px;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.treeview-external-drag #waitcategory {\n  height: 50%;\n  font-family: \"Segoe UI\";\n  font-size: 10px;\n  color: #545554;\n  opacity: 0.6;\n  padding-left: 10px;\n  padding-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.treeview-external-drag .e-list-text,\n.treeview-external-drag.e-rtl .e-list-text,\n.e-bigger .treeview-external-drag .e-list-text,\n.e-bigger .treeview-external-drag.e-rtl .e-list-text {\n  background: white;\n  border: 0.5px solid #e1e7ec;\n  height: 50px;\n  line-height: 15px;\n  padding: 0 5px;\n  width: 220px; }\n\n.treeview-external-drag .e-list-parent,\n.treeview-external-drag.e-rtl .e-list-parent,\n.e-bigger .treeview-external-drag .e-list-parent,\n.e-bigger .treeview-external-drag.e-rtl .e-list-parent {\n  height: 100%;\n  padding: 0 2px; }\n\n.treeview-external-drag .e-list-item,\n.e-bigger .treeview-external-drag .e-list-item {\n  height: 100%;\n  padding: 0 0 5px 0; }\n\n.treeview-external-drag .e-fullrow,\n.e-bigger .treeview-external-drag .e-fullrow {\n  height: 55px; }\n\n.treeview-external-drag .e-list-item.e-hover > .e-fullrow,\n.treeview-external-drag .e-list-item.e-active > .e-fullrow,\n.treeview-external-drag .e-list-item.e-active.e-hover > .e-fullrow,\n.e-bigger .treeview-external-drag .e-list-item.e-hover > .e-fullrow,\n.e-bigger .treeview-external-drag .e-list-item.e-active > .e-fullrow,\n.e-bigger .treeview-external-drag .e-list-item.e-active.e-hover > .e-fullrow {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none !important; }\n\n.treeview-external-drag .e-text-content,\n.e-bigger .treeview-external-drag .e-text-content,\n.treeview-external-drag.e-rtl .e-text-content,\n.e-bigger .treeview-external-drag.e-rtl .e-text-content {\n  padding: 0; }\n\n.e-drag-item.e-treeview.treeview-external-drag,\n.e-bigger .e-drag-item.e-treeview.treeview-external-drag {\n  padding: 0 !important; }\n\n.e-schedule.schedule-drag-drop .e-timeline-view .e-resource-left-td,\n.e-schedule.schedule-drag-drop .e-timeline-month-view .e-resource-left-td {\n  width: 180px; }\n\n.e-schedule.schedule-drag-drop .e-resource-cells.e-parent-node .specialist-category {\n  padding-left: 30px; }\n\n.e-schedule.e-rtl.schedule-drag-drop .e-resource-cells.e-parent-node .specialist-category {\n  padding-right: 30px; }\n\n.e-schedule.schedule-drag-drop .e-resource-cells.e-child-node .specialist-category,\n.e-schedule.schedule-drag-drop .e-resource-cells.e-child-node .specialist-name {\n  padding: 0px; }\n\n.e-schedule.schedule-drag-drop .e-resource-cells.e-parent-node .specialist-name {\n  padding: 0 10px; }\n\n.e-schedule.schedule-drag-drop .specialist-name {\n  font-size: 13px; }\n\n.e-schedule.schedule-drag-drop .specialist-designation {\n  font-size: 9px; }\n\n.e-device-hover {\n  background-color: #e0e0e0 !important; }\n\n.e-schedule.schedule-drag-drop .specialist-image {\n  width: 40px;\n  height: 40px;\n  float: left;\n  border-radius: 25%;\n  border: 2px solid red;\n  margin-right: 10px;\n  padding: 2px; }\n\n.schedule-container > ejs-schedule {\n  max-height: 700px !important; }\n\n@media (max-width: 550px) {\n  /* custom code start*/\n  .drag-sample-wrapper {\n    display: block; }\n  .schedule-container {\n    padding-bottom: 10px; }\n  /* custom code end*/\n  .treeview-external-drag.e-treeview,\n  .e-bigger .treeview-external-drag.e-treeview {\n    width: 225px; }\n  .e-bigger .treeview-external-drag.e-treeview.e-drag-item {\n    position: relative !important; } }\n\n.time-slot {\n  border-radius: 4px;\n  height: 35px;\n  padding-top: 5px; }\n\n.btn-slt-pink {\n  background-color: rgba(208, 114, 231, 0.5) !important;\n  border: 2px solid rgba(190, 86, 250, 0.5); }\n\n.btn-slt-blue {\n  background-color: rgba(123, 209, 243, 0.6) !important;\n  border: 2px solid skyblue !important; }\n\nthead {\n  border-bottom: 3px solid #837f7f; }\n\n.vertical-line {\n  border-left: 1px dotted black;\n  height: 100px; }\n\n.img-thumbnail {\n  border: rgba(208, 114, 231, 0.5) !important;\n  border-radius: 3px; }\n\n.page-heading h1 {\n  font-weight: 500 !important;\n  margin-top: 0px; }\n\n.fa-2x {\n  font-size: 1.6em; }\n\n.datepicker-area strong {\n  font-size: 16px !important; }\n\n.btn-slt-pink-top {\n  background-color: blueviolet;\n  height: 5px; }\n\n.labels p {\n  margin-bottom: 0;\n  line-height: 20px; }\n\n.labels .pink-col p {\n  background: rgba(243, 67, 247, 0.4);\n  border-bottom: 2px solid #ebe6e6;\n  width: 78%; }\n\n.labels .blue-col p {\n  background: rgba(64, 195, 232, 0.2);\n  border-bottom: 2px solid #ebe6e6;\n  width: 78%; }\n\n.border-green {\n  border: 2px solid #13c1b2;\n  color: #6bbb58;\n  background: #2441a8;\n  border-radius: 10px;\n  font-weight: 600; }\n\n.mb-0 {\n  margin-bottom: 0;\n  margin-top: 10px; }\n\n.pull-left {\n  margin-left: 4px;\n  margin-top: 4px; }\n\n.dashboard-heading {\n  display: inline; }\n\n.numbers {\n  color: #015701; }\n\n.header-sum-up {\n  padding-left: 30px; }\n\n.list-inline {\n  width: 436px; }\n\n.span-data {\n  border-radius: 5px; }\n\n.e-schedule .e-timeline-view .e-work-cells,\n.e-schedule .e-timeline-month-view .e-work-cells {\n  background-color: #ffffff;\n  border-color: none;\n  border-style: none;\n  border-width: 0 0 1 0 !important;\n  border-bottom-style: solid !important;\n  color: rgba(0, 0, 0, 0.87); }\n\n.attendence-status {\n  padding-right: 38px;\n  background: white; }\n\n.e-schedule.schedule-drag-drop .e-timeline-view .e-resource-column-wrap table tr {\n  height: 60px !important; }\n\n.e-schedule.schedule-drag-drop .e-timeline-view .e-resource-cells {\n  padding-left: 5px !important; }\n\n.e-schedule .e-timeline-view .e-resource-cells,\n.e-schedule .e-timeline-view .e-work-cells {\n  height: 60px !important; }\n\n.e-schedule .e-week-view .e-schedule-table {\n  height: 118px !important; }\n\n.e-schedule .e-month-view .e-schedule-table.e-content-table tr td {\n  width: 50px !important; }\n\n.e-date-header-wrap table.e-schedule-table colgroup col,\ntable.e-schedule-table.e-content-table colgroup col {\n  width: 3.9vw !important; }\n\n.e-quick-popup-wrapper .e-event-popup .e-popup-header .e-header-icon-wrapper .e-delete {\n  display: none !important; }\n\n.custom-row,\n.custom-field-row {\n  margin-bottom: 20px; }\n\nbutton.e-control.e-btn.e-lib.e-delete.e-primary.e-flat {\n  position: absolute;\n  left: 0px; }\n\n.hideDialogClass {\n  display: none; }\n\n#dialog-container {\n  display: block;\n  height: 100%;\n  overflow: hidden;\n  width: 100%; }\n\n#container {\n  visibility: hidden; }\n\n#Schedule_dialog_wrapper {\n  width: 550px !important; }\n\n#Schedule_dialog_wrapper_dialog-content {\n  padding-bottom: 0 !important; }\n\n.e-grid .e-rowcell {\n  padding-right: 0;\n  padding-bottom: 0; }\n\n.e-grid .e-gridheader {\n  border-bottom-color: #a0d468 !important;\n  border-bottom-width: 3px !important;\n  height: 40px !important; }\n\n.e-grid .e-headercelldiv {\n  /* grid headercell font styles*/\n  font-size: 13px !important;\n  font-weight: 600 !important;\n  width: 130px !important; }\n\n.e-sortfilterdiv.e-icons.e-ascending.e-icon-ascending {\n  font-size: 15px !important; }\n\n.e-sortfilterdiv.e-icons.e-descending.e-icon-descending {\n  font-size: 15px !important; }\n\n.e-grid .e-rowcell:not(.e-editedbatchcell) {\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* IE10+/Edge */\n  user-select: none; }\n\n#resourceDialog {\n  width: 400px !important; }\n\n.mt-0 {\n  margin-top: 0; }\n\n.mt-1 {\n  margin-top: 5px; }\n\n.mb-1 {\n  margin-bottom: 5px; }\n\n.m-0 {\n  margin: 0; }\n\n.m-1 {\n  margin: 5px; }\n\n.p-1 {\n  padding: 5px; }\n\n.p-2 {\n  padding: 10px; }\n\n.d-block {\n  width: 100%;\n  display: block; }\n\n.full-width {\n  width: 100%; }\n\n.bg-light-info {\n  background: #b8e1fc; }\n\n#resourceDialog .e-dlg-closeicon-btn {\n  position: absolute;\n  top: -15px;\n  left: auto;\n  z-index: 3;\n  right: -15px;\n  background: #fff; }\n\n#resourceDialog .e-dlg-header-content {\n  padding: 0 !important; }\n\n#Schedule_dialog_wrapper_title {\n  display: none; }\n\n#Schedule_dialog_wrapper .e-dlg-header-content {\n  padding-bottom: 0 !important;\n  padding-top: 0 !important; }\n\n#Schedule_dialog_wrapper .e-dlg-closeicon-btn {\n  /* position: absolute; */\n  top: -15px;\n  left: auto;\n  z-index: 3;\n  right: -30px;\n  background: #fff; }\n\n.label-wo-unassigned {\n  background-color: #E06666 !important;\n  color: #FFFFFF !important; }\n\n.label-wo-draft {\n  background-color: #67D4E8 !important;\n  color: #FFFFFF !important; }\n\n.label-wo-sent {\n  background-color: #FFFF3C !important;\n  color: #FFFFFF !important; }\n\n.label-wo-modified {\n  background-color: #80009C !important;\n  color: #FFFFFF !important; }\n\n.label-wo-approved {\n  background-color: #000025 !important;\n  color: #FFFFFF !important; }\n\n.label-wo-rejected {\n  background-color: #FF0000 !important;\n  color: #FFFFFF !important; }\n\n.label-wo-ongoing {\n  background-color: #0AA12F !important;\n  color: #FFFFFF !important; }\n\n.label-wo-complete {\n  background-color: #0A0ACF !important;\n  color: #FFFFFF !important; }\n\n.label-wo-recall {\n  background-color: #4D009B !important;\n  color: #FFFFFF !important; }\n\n.label-wo-pending {\n  background-color: #52B6C4 !important;\n  color: #FFFFFF !important; }\n\n.label-wo-paused {\n  background-color: #FF0000 !important;\n  color: #FFFFFF !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei9FcXVpcG1lbnQvZXF1aXBtZW50Ym9va2luZy1ib2FyZC9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxccHJvelxcRXF1aXBtZW50XFxlcXVpcG1lbnRib29raW5nLWJvYXJkXFxlcXVpcG1lbnRib29raW5nLWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBYztFQUNkLGtDQUFpQztFQUVqQzs7NkNBRXdDO0VBQ3hDLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCOzhCQUN5QixFQUMxQjs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxzQ0FBcUMsRUFDdEM7O0FBRUQ7RUFDRSxzQ0FBcUMsRUFFdEM7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM3QixvQ0FBb0MsRUFDckM7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UsdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUNyQzs7QUFDRDtFQUNFLDBCQUF5QjtFQUN6QixrQ0FBaUM7RUFDakMsNENBQTJDLEVBQzVDOztBQUVEO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLGtDQUFpQztFQUNqQyw0Q0FBMkMsRUFDNUM7O0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsYUFBWTtFQUNaLHdCQUF1QixFQUN4Qjs7QUFDRDtFQUNFLGFBQVk7RUFDWixhQUFZO0VBQ1osWUFBVztFQUNYLHdCQUF1QjtFQUN2QixxQkFBb0IsRUFDckI7O0FBRUQ7RUFJRSxtQkFBa0I7RUFDbEIsZUFBYyxFQUNmOztBQUVELHNCQUFzQjs7QUFDdEI7RUFFRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsWUFBVyxFQUNaOztBQUVEO0VBQ0UscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNuQjs7QUFDRCxvQkFBb0I7O0FBRXBCO0VBQ0UsYUFBWTtFQUNaLFdBQVUsRUFDWDs7QUFFRDtFQUNFLFlBQVc7RUFDWCxXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLHdCQUF1QjtFQUN2QixlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsWUFBVztFQUNYLGFBQVk7RUFDWixXQUFVLEVBQ1g7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsWUFBVztFQUNYLGtCQUFpQjtFQUNqQix3QkFBdUI7RUFDdkIsZ0JBQWU7RUFDZixlQUFjO0VBQ2Qsc0JBQXFCO0VBQ3JCLGlCQUFnQjtFQUNoQix3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsd0JBQXVCO0VBQ3ZCLGdCQUFlO0VBQ2YsZUFBYztFQUNkLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQix3QkFBdUIsRUFDeEI7O0FBRUQ7Ozs7RUFJRSxrQkFBaUI7RUFDakIsNEJBQTJCO0VBQzNCLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsZUFBYztFQUNkLGFBQVksRUFDYjs7QUFFRDs7OztFQUlFLGFBQVk7RUFDWixlQUFjLEVBQ2Y7O0FBRUQ7O0VBRUUsYUFBWTtFQUNaLG1CQUFrQixFQUNuQjs7QUFFRDs7RUFFRSxhQUFZLEVBQ2I7O0FBRUQ7Ozs7OztFQU1FLDhCQUE2QjtFQUM3QiwwQkFBeUI7RUFDekIsNEJBQTJCLEVBQzVCOztBQUVEOzs7O0VBSUUsV0FBVSxFQUNYOztBQUVEOztFQUVFLHNCQUFxQixFQUN0Qjs7QUFFRDs7RUFFRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7O0VBR0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLGVBQWMsRUFDZjs7QUFFRDtFQUNFLHFDQUFvQyxFQUNyQzs7QUFFRDtFQUNFLFlBQVc7RUFDWCxhQUFZO0VBQ1osWUFBVztFQUNYLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLGFBQVksRUFFYjs7QUFDRDtFQUNFLDZCQUE0QixFQUM3Qjs7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QjtJQUNFLGVBQWMsRUFDZjtFQUVEO0lBQ0UscUJBQW9CLEVBQ3JCO0VBQ0Qsb0JBQW9CO0VBQ3BCOztJQUVFLGFBQVksRUFDYjtFQUVEO0lBQ0UsOEJBQTZCLEVBQzlCLEVBQUE7O0FBSUg7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLHNEQUFxRDtFQUNyRCwwQ0FBeUMsRUFDMUM7O0FBRUQ7RUFDRSxzREFBcUQ7RUFDckQscUNBQW9DLEVBQ3JDOztBQU1EO0VBQ0UsaUNBQTJDLEVBQzVDOztBQUVEO0VBQ0UsOEJBQTZCO0VBQzdCLGNBQWEsRUFDZDs7QUFFRDtFQUNFLDRDQUEyQztFQUMzQyxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSw0QkFBMkI7RUFDM0IsZ0JBQWUsRUFDaEI7O0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSwyQkFBMEIsRUFDM0I7O0FBRUQ7RUFDRSw2QkFBNEI7RUFDNUIsWUFBVyxFQUNaOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLG9DQUFtQztFQUNuQyxpQ0FBMkM7RUFDM0MsV0FBVSxFQUNYOztBQUVEO0VBQ0Usb0NBQW1DO0VBQ25DLGlDQUEyQztFQUMzQyxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSwwQkFBeUI7RUFFekIsZUFBYztFQUNkLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixnQkFBZSxFQUNoQjs7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCOztBQUNEO0VBQ0UsZUFBb0IsRUFDckI7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7O0VBRUUsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsaUNBQWdDO0VBQ2hDLHNDQUFxQztFQUNyQywyQkFBMEIsRUFDM0I7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsa0JBQWlCLEVBQ2xCOztBQU9EO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUVEO0VBRUUsNkJBQTRCLEVBRTdCOztBQUVEOztFQUVFLHdCQUF1QixFQUN4Qjs7QUFNRDtFQUNFLHlCQUF3QixFQUN6Qjs7QUFFRDtFQUNFLHVCQUFzQixFQUN2Qjs7QUFHRDs7RUFHSSx3QkFBdUIsRUFDeEI7O0FBR0g7RUFDRSx5QkFBd0IsRUFDekI7O0FBRUQ7O0VBRUUsb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0UsbUJBQWtCO0VBQ2xCLFVBQVMsRUFDVjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFJRDtFQUNFLGVBQWM7RUFDZCxhQUFZO0VBQ1osaUJBQWdCO0VBQ2hCLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLDZCQUE0QixFQUM3Qjs7QUFFRDtFQUVFLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSx3Q0FBdUM7RUFFdkMsb0NBQW1DO0VBQ25DLHdCQUF1QixFQUN4Qjs7QUFFRDtFQUNFLGdDQUFnQztFQUNoQywyQkFBMEI7RUFDMUIsNEJBQTJCO0VBQzNCLHdCQUF1QixFQUN4Qjs7QUFZRDtFQUNFLDJCQUEwQixFQUMzQjs7QUFDRDtFQUNFLDJCQUEwQixFQUMzQjs7QUFDRDtFQUNFLDBCQUF5QjtFQUFFLFlBQVk7RUFDdkMsdUJBQXNCO0VBQUUsYUFBYTtFQUNyQyxzQkFBcUI7RUFBRSxnQkFBZ0I7RUFDdkMsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0Usd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUNEO0VBQ0UsZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxVQUFTLEVBQ1Y7O0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxjQUFhLEVBQ2Q7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsZUFBYyxFQUNmOztBQUNEO0VBQ0UsWUFBVyxFQUNaOztBQUNEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFdBQVU7RUFDVixXQUFVO0VBQ1YsV0FBVTtFQUNWLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7O0FBQ0Q7RUFDRSxzQkFBcUIsRUFDdEI7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSw2QkFBNEI7RUFDNUIsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVU7RUFDVixXQUFVO0VBQ1YsV0FBVTtFQUNWLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzFCOztBQUVEO0VBQ0UscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL3Byb3ovRXF1aXBtZW50L2VxdWlwbWVudGJvb2tpbmctYm9hcmQvZXF1aXBtZW50Ym9va2luZy1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXRpdGxlIHtcclxuICAgICBjb2xvcjogIzVkYjJmZjtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1ZGIyZmY7XHJcbiAgIFxyXG4gICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7Ki9cclxuICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuICAgfVxyXG4gICBcclxuICAgLm1hbmRhdG9yeSB7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuaHItZ3JheS10aGljayB7XHJcbiAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgLmhyLWdyYXkge1xyXG4gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZTM3OTQgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgaW5wdXQge1xyXG4gICAgIGNvbG9yOiBibGFjaztcclxuICAgfVxyXG4gICBcclxuICAgLm1vY2sge1xyXG4gICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB9XHJcbiAgIFxyXG4gICAubW9jay1jb25mIHtcclxuICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuaW5wcm9ncmVzcyB7XHJcbiAgICAgY29sb3I6IG9yYW5nZXJlZDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIH1cclxuICAgXHJcbiAgIC50aHJlZS1ib3JkZXJlZCB7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbiAgIH1cclxuICAgXHJcbiAgIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuY2hlY2tib3gtY2VudGVyIHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5ncmF5IHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgLmJ0bi1ncmF5IHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgLmJ0bi1ibHVlIHtcclxuICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlLmNvbGxhcHNlZCB7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZTpob3ZlcjphZnRlciB7XHJcbiAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZSB7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZTphZnRlciB7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgI2NvbnRlbnQge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGhlaWdodDogMTAwJTtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgfVxyXG4gICAuY29udGVudEluc2lkZSB7XHJcbiAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgIGhlaWdodDogNzBweDtcclxuICAgICBtYXJnaW46IDdweDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgfVxyXG4gICBcclxuICAgLnJlc2l6ZSB7XHJcbiAgICAgLy8gYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgLy8gcGFkZGluZzogMjBweDtcclxuICAgICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgICAgcmVzaXplOiBob3Jpem9udGFsO1xyXG4gICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICB9XHJcbiAgIFxyXG4gICAvKiBjdXN0b20gY29kZSBzdGFydCovXHJcbiAgIC5kcmFnLXNhbXBsZS13cmFwcGVyIHtcclxuICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuc2NoZWR1bGUtY29udGFpbmVyIHtcclxuICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcbiAgIFxyXG4gICAudGl0bGUtY29udGFpbmVyIHtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgfVxyXG4gICBcclxuICAgLnRpdGxlLXRleHQge1xyXG4gICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICBtYXJnaW46IDBweDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIH1cclxuICAgLyogY3VzdG9tIGNvZGUgZW5kKi9cclxuICAgXHJcbiAgIC50cmVldmlldy1leHRlcm5hbC1kcmFnICN3YWl0aW5nIHtcclxuICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgcGFkZGluZzogMDtcclxuICAgfVxyXG4gICBcclxuICAgLnRyZWV2aWV3LWV4dGVybmFsLWRyYWcgI3dhaXRpZCB7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgd2lkdGg6IDEzJTtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XHJcbiAgICAgY29sb3I6ICNmOTkyMGI7XHJcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICBtYXJnaW46IDlweCAwO1xyXG4gICAgIHBhZGRpbmc6IDAgMnB4IDAgMDtcclxuICAgfVxyXG4gICBcclxuICAgLnRyZWV2aWV3LWV4dGVybmFsLWRyYWcgI3dhaXRkZXRhaWxzIHtcclxuICAgICB3aWR0aDogOTUlO1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIGhlaWdodDogMTAwJTtcclxuICAgICBwYWRkaW5nOiAwO1xyXG4gICB9XHJcbiAgIFxyXG4gICAudHJlZXZpZXctZXh0ZXJuYWwtZHJhZyAjd2FpdGxpc3Qge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGhlaWdodDogNTAlO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XHJcbiAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgIGNvbG9yOiAjNTQ1NTU0O1xyXG4gICAgIHBhZGRpbmc6IDVweCAwIDAgMTBweDtcclxuICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICB9XHJcbiAgIFxyXG4gICAudHJlZXZpZXctZXh0ZXJuYWwtZHJhZyAjd2FpdGNhdGVnb3J5IHtcclxuICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiO1xyXG4gICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICBjb2xvcjogIzU0NTU1NDtcclxuICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgfVxyXG4gICBcclxuICAgLnRyZWV2aWV3LWV4dGVybmFsLWRyYWcgLmUtbGlzdC10ZXh0LFxyXG4gICAudHJlZXZpZXctZXh0ZXJuYWwtZHJhZy5lLXJ0bCAuZS1saXN0LXRleHQsXHJcbiAgIC5lLWJpZ2dlciAudHJlZXZpZXctZXh0ZXJuYWwtZHJhZyAuZS1saXN0LXRleHQsXHJcbiAgIC5lLWJpZ2dlciAudHJlZXZpZXctZXh0ZXJuYWwtZHJhZy5lLXJ0bCAuZS1saXN0LXRleHQge1xyXG4gICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgIGJvcmRlcjogMC41cHggc29saWQgI2UxZTdlYztcclxuICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAudHJlZXZpZXctZXh0ZXJuYWwtZHJhZyAuZS1saXN0LXBhcmVudCxcclxuICAgLnRyZWV2aWV3LWV4dGVybmFsLWRyYWcuZS1ydGwgLmUtbGlzdC1wYXJlbnQsXHJcbiAgIC5lLWJpZ2dlciAudHJlZXZpZXctZXh0ZXJuYWwtZHJhZyAuZS1saXN0LXBhcmVudCxcclxuICAgLmUtYmlnZ2VyIC50cmVldmlldy1leHRlcm5hbC1kcmFnLmUtcnRsIC5lLWxpc3QtcGFyZW50IHtcclxuICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgcGFkZGluZzogMCAycHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC50cmVldmlldy1leHRlcm5hbC1kcmFnIC5lLWxpc3QtaXRlbSxcclxuICAgLmUtYmlnZ2VyIC50cmVldmlldy1leHRlcm5hbC1kcmFnIC5lLWxpc3QtaXRlbSB7XHJcbiAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIHBhZGRpbmc6IDAgMCA1cHggMDtcclxuICAgfVxyXG4gICBcclxuICAgLnRyZWV2aWV3LWV4dGVybmFsLWRyYWcgLmUtZnVsbHJvdyxcclxuICAgLmUtYmlnZ2VyIC50cmVldmlldy1leHRlcm5hbC1kcmFnIC5lLWZ1bGxyb3cge1xyXG4gICAgIGhlaWdodDogNTVweDtcclxuICAgfVxyXG4gICBcclxuICAgLnRyZWV2aWV3LWV4dGVybmFsLWRyYWcgLmUtbGlzdC1pdGVtLmUtaG92ZXIgPiAuZS1mdWxscm93LFxyXG4gICAudHJlZXZpZXctZXh0ZXJuYWwtZHJhZyAuZS1saXN0LWl0ZW0uZS1hY3RpdmUgPiAuZS1mdWxscm93LFxyXG4gICAudHJlZXZpZXctZXh0ZXJuYWwtZHJhZyAuZS1saXN0LWl0ZW0uZS1hY3RpdmUuZS1ob3ZlciA+IC5lLWZ1bGxyb3csXHJcbiAgIC5lLWJpZ2dlciAudHJlZXZpZXctZXh0ZXJuYWwtZHJhZyAuZS1saXN0LWl0ZW0uZS1ob3ZlciA+IC5lLWZ1bGxyb3csXHJcbiAgIC5lLWJpZ2dlciAudHJlZXZpZXctZXh0ZXJuYWwtZHJhZyAuZS1saXN0LWl0ZW0uZS1hY3RpdmUgPiAuZS1mdWxscm93LFxyXG4gICAuZS1iaWdnZXIgLnRyZWV2aWV3LWV4dGVybmFsLWRyYWcgLmUtbGlzdC1pdGVtLmUtYWN0aXZlLmUtaG92ZXIgPiAuZS1mdWxscm93IHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgLnRyZWV2aWV3LWV4dGVybmFsLWRyYWcgLmUtdGV4dC1jb250ZW50LFxyXG4gICAuZS1iaWdnZXIgLnRyZWV2aWV3LWV4dGVybmFsLWRyYWcgLmUtdGV4dC1jb250ZW50LFxyXG4gICAudHJlZXZpZXctZXh0ZXJuYWwtZHJhZy5lLXJ0bCAuZS10ZXh0LWNvbnRlbnQsXHJcbiAgIC5lLWJpZ2dlciAudHJlZXZpZXctZXh0ZXJuYWwtZHJhZy5lLXJ0bCAuZS10ZXh0LWNvbnRlbnQge1xyXG4gICAgIHBhZGRpbmc6IDA7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5lLWRyYWctaXRlbS5lLXRyZWV2aWV3LnRyZWV2aWV3LWV4dGVybmFsLWRyYWcsXHJcbiAgIC5lLWJpZ2dlciAuZS1kcmFnLWl0ZW0uZS10cmVldmlldy50cmVldmlldy1leHRlcm5hbC1kcmFnIHtcclxuICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5lLXNjaGVkdWxlLnNjaGVkdWxlLWRyYWctZHJvcCAuZS10aW1lbGluZS12aWV3IC5lLXJlc291cmNlLWxlZnQtdGQsXHJcbiAgIC5lLXNjaGVkdWxlLnNjaGVkdWxlLWRyYWctZHJvcCAuZS10aW1lbGluZS1tb250aC12aWV3IC5lLXJlc291cmNlLWxlZnQtdGQge1xyXG4gICAgIHdpZHRoOiAxODBweDtcclxuICAgfVxyXG4gICBcclxuICAgLmUtc2NoZWR1bGUuc2NoZWR1bGUtZHJhZy1kcm9wIC5lLXJlc291cmNlLWNlbGxzLmUtcGFyZW50LW5vZGUgLnNwZWNpYWxpc3QtY2F0ZWdvcnkge1xyXG4gICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgfVxyXG4gICBcclxuICAgLmUtc2NoZWR1bGUuZS1ydGwuc2NoZWR1bGUtZHJhZy1kcm9wIC5lLXJlc291cmNlLWNlbGxzLmUtcGFyZW50LW5vZGUgLnNwZWNpYWxpc3QtY2F0ZWdvcnkge1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5lLXNjaGVkdWxlLnNjaGVkdWxlLWRyYWctZHJvcCAuZS1yZXNvdXJjZS1jZWxscy5lLWNoaWxkLW5vZGUgLnNwZWNpYWxpc3QtY2F0ZWdvcnksXHJcbiAgIC5lLXNjaGVkdWxlLnNjaGVkdWxlLWRyYWctZHJvcCAuZS1yZXNvdXJjZS1jZWxscy5lLWNoaWxkLW5vZGUgLnNwZWNpYWxpc3QtbmFtZSB7XHJcbiAgICAgLy8gcGFkZGluZzogNXB4O1xyXG4gICAgIHBhZGRpbmc6IDBweDtcclxuICAgfVxyXG4gICBcclxuICAgLmUtc2NoZWR1bGUuc2NoZWR1bGUtZHJhZy1kcm9wIC5lLXJlc291cmNlLWNlbGxzLmUtcGFyZW50LW5vZGUgLnNwZWNpYWxpc3QtbmFtZSB7XHJcbiAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuZS1zY2hlZHVsZS5zY2hlZHVsZS1kcmFnLWRyb3AgLnNwZWNpYWxpc3QtbmFtZSB7XHJcbiAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICB9XHJcbiAgIC5lLXNjaGVkdWxlLnNjaGVkdWxlLWRyYWctZHJvcCAuc3BlY2lhbGlzdC1kZXNpZ25hdGlvbiB7XHJcbiAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5lLWRldmljZS1ob3ZlciB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuZS1zY2hlZHVsZS5zY2hlZHVsZS1kcmFnLWRyb3AgLnNwZWNpYWxpc3QtaW1hZ2Uge1xyXG4gICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgIGhlaWdodDogNDBweDtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgLy8gbWFyZ2luLXRvcDogNXB4O1xyXG4gICB9XHJcbiAgIC5zY2hlZHVsZS1jb250YWluZXI+ZWpzLXNjaGVkdWxlIHtcclxuICAgICBtYXgtaGVpZ2h0OiA3MDBweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgIC8qIGN1c3RvbSBjb2RlIHN0YXJ0Ki9cclxuICAgICAuZHJhZy1zYW1wbGUtd3JhcHBlciB7XHJcbiAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICB9XHJcbiAgIFxyXG4gICAgIC5zY2hlZHVsZS1jb250YWluZXIge1xyXG4gICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgfVxyXG4gICAgIC8qIGN1c3RvbSBjb2RlIGVuZCovXHJcbiAgICAgLnRyZWV2aWV3LWV4dGVybmFsLWRyYWcuZS10cmVldmlldyxcclxuICAgICAuZS1iaWdnZXIgLnRyZWV2aWV3LWV4dGVybmFsLWRyYWcuZS10cmVldmlldyB7XHJcbiAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgfVxyXG4gICBcclxuICAgICAuZS1iaWdnZXIgLnRyZWV2aWV3LWV4dGVybmFsLWRyYWcuZS10cmVldmlldy5lLWRyYWctaXRlbSB7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiAgIC8vbW9iaWx5dGVcclxuICAgLnRpbWUtc2xvdCB7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgIGhlaWdodDogMzVweDtcclxuICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuYnRuLXNsdC1waW5rIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOCwgMTE0LCAyMzEsIDAuNSkgIWltcG9ydGFudDtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE5MCwgODYsIDI1MCwgMC41KTtcclxuICAgfVxyXG4gICBcclxuICAgLmJ0bi1zbHQtYmx1ZSB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjMsIDIwOSwgMjQzLCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyOiAycHggc29saWQgc2t5Ymx1ZSAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICAvLyB0ciB0ZCB7XHJcbiAgIC8vICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM5QjlBOUJcclxuICAgLy8gfVxyXG4gICBcclxuICAgdGhlYWQge1xyXG4gICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCByZ2IoMTMxLCAxMjcsIDEyNyk7XHJcbiAgIH1cclxuICAgXHJcbiAgIC52ZXJ0aWNhbC1saW5lIHtcclxuICAgICBib3JkZXItbGVmdDogMXB4IGRvdHRlZCBibGFjaztcclxuICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuaW1nLXRodW1ibmFpbCB7XHJcbiAgICAgYm9yZGVyOiByZ2JhKDIwOCwgMTE0LCAyMzEsIDAuNSkgIWltcG9ydGFudDtcclxuICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5wYWdlLWhlYWRpbmcgaDEge1xyXG4gICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5mYS0yeCB7XHJcbiAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgfVxyXG4gICBcclxuICAgLmRhdGVwaWNrZXItYXJlYSBzdHJvbmcge1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuYnRuLXNsdC1waW5rLXRvcCB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgICBoZWlnaHQ6IDVweDtcclxuICAgfVxyXG4gICBcclxuICAgLmxhYmVscyBwIHtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAubGFiZWxzIC5waW5rLWNvbCBwIHtcclxuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MywgNjcsIDI0NywgMC40KTtcclxuICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIzNSwgMjMwLCAyMzApO1xyXG4gICAgIHdpZHRoOiA3OCU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5sYWJlbHMgLmJsdWUtY29sIHAge1xyXG4gICAgIGJhY2tncm91bmQ6IHJnYmEoNjQsIDE5NSwgMjMyLCAwLjIpO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjM1LCAyMzAsIDIzMCk7XHJcbiAgICAgd2lkdGg6IDc4JTtcclxuICAgfVxyXG4gICBcclxuICAgLmJvcmRlci1ncmVlbiB7XHJcbiAgICAgYm9yZGVyOiAycHggc29saWQgIzEzYzFiMjtcclxuICAgICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgIGNvbG9yOiAjNmJiYjU4O1xyXG4gICAgIGJhY2tncm91bmQ6ICMyNDQxYTg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICB9XHJcbiAgIFxyXG4gICAubWItMCB7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICB9XHJcbiAgIC5wdWxsLWxlZnQge1xyXG4gICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICB9XHJcbiAgIC5kYXNoYm9hcmQtaGVhZGluZyB7XHJcbiAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICB9XHJcbiAgIC5udW1iZXJzIHtcclxuICAgICBjb2xvcjogcmdiKDEsIDg3LCAxKTtcclxuICAgfVxyXG4gICAuaGVhZGVyLXN1bS11cCB7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICB9XHJcbiAgIC5saXN0LWlubGluZSB7XHJcbiAgICAgd2lkdGg6IDQzNnB4O1xyXG4gICB9XHJcbiAgIC5zcGFuLWRhdGEge1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgfVxyXG4gICBcclxuICAgLmUtc2NoZWR1bGUgLmUtdGltZWxpbmUtdmlldyAuZS13b3JrLWNlbGxzLFxyXG4gICAuZS1zY2hlZHVsZSAuZS10aW1lbGluZS1tb250aC12aWV3IC5lLXdvcmstY2VsbHMge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgICBib3JkZXItd2lkdGg6IDAgMCAxIDAgIWltcG9ydGFudDtcclxuICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZCAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuYXR0ZW5kZW5jZS1zdGF0dXMge1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6IDM4cHg7XHJcbiAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC8vIC5lLXNjaGVkdWxlLnNjaGVkdWxlLWRyYWctZHJvcCAuZS10aW1lbGluZS12aWV3IC5lLXRpbWUtY2VsbHMtd3JhcCB0YWJsZSB0ZCxcclxuICAgLy8gLmUtc2NoZWR1bGUuc2NoZWR1bGUtZHJhZy1kcm9wIC5lLXRpbWVsaW5lLXZpZXcgLmUtd29yay1jZWxscyB7XHJcbiAgIC8vICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcclxuICAgLy8gfVxyXG4gICBcclxuICAgLmUtc2NoZWR1bGUuc2NoZWR1bGUtZHJhZy1kcm9wIC5lLXRpbWVsaW5lLXZpZXcgLmUtcmVzb3VyY2UtY29sdW1uLXdyYXAgdGFibGUgdHIge1xyXG4gICAgIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuZS1zY2hlZHVsZS5zY2hlZHVsZS1kcmFnLWRyb3AgLmUtdGltZWxpbmUtdmlldyAuZS1yZXNvdXJjZS1jZWxscyB7XHJcbiAgICAgLy9wYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgIC8vaGVpZ2h0OiA1MHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuZS1zY2hlZHVsZSAuZS10aW1lbGluZS12aWV3IC5lLXJlc291cmNlLWNlbGxzLFxyXG4gICAuZS1zY2hlZHVsZSAuZS10aW1lbGluZS12aWV3IC5lLXdvcmstY2VsbHN7XHJcbiAgICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC8vIC5lLXNjaGVkdWxlIC5lLXZlcnRpY2FsLXZpZXcgLmUtd2Vlay12aWV3IC5lLXJlc291cmNlLWNlbGxze1xyXG4gICAvLyAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAvLyB9XHJcbiAgIFxyXG4gICAuZS1zY2hlZHVsZSAuZS13ZWVrLXZpZXcgLmUtc2NoZWR1bGUtdGFibGV7XHJcbiAgICAgaGVpZ2h0OiAxMThweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuZS1zY2hlZHVsZSAuZS1tb250aC12aWV3IC5lLXNjaGVkdWxlLXRhYmxlLmUtY29udGVudC10YWJsZSB0ciB0ZCB7XHJcbiAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgXHJcbiAgIC5lLWRhdGUtaGVhZGVyLXdyYXAgdGFibGUuZS1zY2hlZHVsZS10YWJsZSxcclxuICAgdGFibGUuZS1zY2hlZHVsZS10YWJsZS5lLWNvbnRlbnQtdGFibGUge1xyXG4gICAgIGNvbGdyb3VwIGNvbCB7XHJcbiAgICAgICB3aWR0aDogMy45dncgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiAgIC5lLXF1aWNrLXBvcHVwLXdyYXBwZXIgLmUtZXZlbnQtcG9wdXAgLmUtcG9wdXAtaGVhZGVyIC5lLWhlYWRlci1pY29uLXdyYXBwZXIgLmUtZGVsZXRlIHtcclxuICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5jdXN0b20tcm93LFxyXG4gICAuY3VzdG9tLWZpZWxkLXJvdyB7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgfVxyXG4gICBidXR0b24uZS1jb250cm9sLmUtYnRuLmUtbGliLmUtZGVsZXRlLmUtcHJpbWFyeS5lLWZsYXQge1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICBsZWZ0OiAwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5oaWRlRGlhbG9nQ2xhc3Mge1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC8vLnNjaGVkdWxlLWRyYWctZHJvcHttYXgtaGVpZ2h0OiA2MDBweDt9XHJcbiAgIFxyXG4gICAjZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH1cclxuICAgXHJcbiAgICNjb250YWluZXIge1xyXG4gICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgfVxyXG4gICBcclxuICAgI1NjaGVkdWxlX2RpYWxvZ193cmFwcGVyIHtcclxuICAgICB3aWR0aDogNTUwcHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgI1NjaGVkdWxlX2RpYWxvZ193cmFwcGVyX2RpYWxvZy1jb250ZW50IHtcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICAuZS1ncmlkIC5lLXJvd2NlbGwge1xyXG4gICAgIC8vIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5lLWdyaWQgLmUtZ3JpZGhlYWRlciB7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2EwZDQ2OCAhaW1wb3J0YW50O1xyXG4gICAgIC8vY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5lLWdyaWQgLmUtaGVhZGVyY2VsbGRpdiB7XHJcbiAgICAgLyogZ3JpZCBoZWFkZXJjZWxsIGZvbnQgc3R5bGVzKi9cclxuICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC8vICNTY2hlZHVsZV9kaWFsb2dfd3JhcHBlciAuZS1kbGctY29udGVudCB7XHJcbiAgIC8vICAgY29sb3I6ICM3Nzc7XHJcbiAgIC8vIH1cclxuICAgXHJcbiAgIC8vIHRkLmUtcm93Y2VsbC5lLWxhc3Ryb3djZWxsIHtcclxuICAgLy8gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cclxuICAgLy8gICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgIC8vICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRTEwKy9FZGdlICovXHJcbiAgIC8vICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgIC8vIH1cclxuICAgLmUtc29ydGZpbHRlcmRpdi5lLWljb25zLmUtYXNjZW5kaW5nLmUtaWNvbi1hc2NlbmRpbmd7XHJcbiAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgLmUtc29ydGZpbHRlcmRpdi5lLWljb25zLmUtZGVzY2VuZGluZy5lLWljb24tZGVzY2VuZGluZ3tcclxuICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAuZS1ncmlkIC5lLXJvd2NlbGw6bm90KC5lLWVkaXRlZGJhdGNoY2VsbCkge1xyXG4gICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cclxuICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgfVxyXG4gICBcclxuICAgI3Jlc291cmNlRGlhbG9nIHtcclxuICAgICB3aWR0aDogNDAwcHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgLm10LTAge1xyXG4gICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgIH1cclxuICAgLm10LTEge1xyXG4gICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgfVxyXG4gICAubWItMSB7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICB9XHJcbiAgIC5tLTAge1xyXG4gICAgIG1hcmdpbjogMDtcclxuICAgfVxyXG4gICAubS0xIHtcclxuICAgICBtYXJnaW46IDVweDtcclxuICAgfVxyXG4gICBcclxuICAgLnAtMSB7XHJcbiAgICAgcGFkZGluZzogNXB4O1xyXG4gICB9XHJcbiAgIC5wLTIge1xyXG4gICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgIH1cclxuICAgLmQtYmxvY2sge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICB9XHJcbiAgIC5mdWxsLXdpZHRoIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgfVxyXG4gICAuYmctbGlnaHQtaW5mbyB7XHJcbiAgICAgYmFja2dyb3VuZDogI2I4ZTFmYztcclxuICAgfVxyXG4gICBcclxuICAgI3Jlc291cmNlRGlhbG9nIC5lLWRsZy1jbG9zZWljb24tYnRuIHtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgdG9wOiAtMTVweDtcclxuICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgIHotaW5kZXg6IDM7XHJcbiAgICAgcmlnaHQ6IC0xNXB4O1xyXG4gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgIH1cclxuICAgI3Jlc291cmNlRGlhbG9nIC5lLWRsZy1oZWFkZXItY29udGVudCB7XHJcbiAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICAjU2NoZWR1bGVfZGlhbG9nX3dyYXBwZXJfdGl0bGUge1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIH1cclxuICAgXHJcbiAgICNTY2hlZHVsZV9kaWFsb2dfd3JhcHBlciAuZS1kbGctaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgI1NjaGVkdWxlX2RpYWxvZ193cmFwcGVyIC5lLWRsZy1jbG9zZWljb24tYnRuIHtcclxuICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICAgdG9wOiAtMTVweDtcclxuICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgIHotaW5kZXg6IDM7XHJcbiAgICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5sYWJlbC13by11bmFzc2lnbmVke1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNFMDY2NjYgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICAubGFiZWwtd28tZHJhZnR7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY3RDRFOCAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5sYWJlbC13by1zZW50e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGM0MgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICAubGFiZWwtd28tbW9kaWZpZWR7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDA5QyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5sYWJlbC13by1hcHByb3ZlZHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDI1ICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgLmxhYmVsLXdvLXJlamVjdGVke1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDAgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICAubGFiZWwtd28tb25nb2luZ3tcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEFBMTJGICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgLmxhYmVsLXdvLWNvbXBsZXRle1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTBBQ0YgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICAubGFiZWwtd28tcmVjYWxse1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM0RDAwOUIgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICAubGFiZWwtd28tcGVuZGluZ3tcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJCNkM0ICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgLmxhYmVsLXdvLXBhdXNlZHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgXHJcbiAgICJdfQ== */"

/***/ }),

/***/ "./src/app/proz/Equipment/equipmentbooking-board/equipmentbooking-board.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/proz/Equipment/equipmentbooking-board/equipmentbooking-board.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EquipmentbookingBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentbookingBoardComponent", function() { return EquipmentbookingBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _utilities_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/calendar */ "./src/utilities/calendar.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data */ "./src/data.ts");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-dropdowns */ "./node_modules/@syncfusion/ej2-dropdowns/index.js");
/* harmony import */ var _syncfusion_ej2_calendars__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-calendars */ "./node_modules/@syncfusion/ej2-calendars/index.js");
/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ "./node_modules/@syncfusion/ej2-buttons/index.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/index.js");
/* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/@syncfusion/ej2-angular-schedule.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ "./node_modules/@syncfusion/ej2-angular-grids/@syncfusion/ej2-angular-grids.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ "./node_modules/@syncfusion/ej2-angular-popups/@syncfusion/ej2-angular-popups.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "./node_modules/@syncfusion/ej2-angular-navigations/@syncfusion/ej2-angular-navigations.es5.js");





//import { ImageUpload } from '../../../utilities/imageupload'









//import { ProzRefreshService } from '../../proz-refresh.service';






//import { DragAndDropEventArgs } from '@syncfusion/ej2-navigations';

var EquipmentbookingBoardComponent = /** @class */ (function () {
    function EquipmentbookingBoardComponent(beyond, router, formBuilder, activatedRoute, http, elRef, toastr, socketService, changeDetectorRef) {
        var _this = this;
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.elRef = elRef;
        this.toastr = toastr;
        this.socketService = socketService;
        this.changeDetectorRef = changeDetectorRef;
        //scheduleObj: any;
        this.unAssignedWOData = false;
        this.dateYear = new Date().getFullYear();
        this.dateMonth = new Date().getMonth();
        this.date = new Date().getDate();
        this.selectedDate = new Date(this.dateYear, this.dateMonth, this.date);
        this.currentView = 'TimelineDay';
        this.timeScale = { enable: true, interval: 60, slotCount: 4 };
        this.allowDragAndDrop = true;
        this.srcDropOptions = { targetID: 'Schedule' };
        this.selectionOptions = { mode: 'Cell', cellSelectionMode: 'Box', type: 'Single' };
        this.primaryKeyVal = true;
        this.editSettings = {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true
        };
        this.isTreeItemDropped = false;
        this.draggedItemId = '';
        this.data = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_16__["extend"])([], _data__WEBPACK_IMPORTED_MODULE_5__["hospitalData"], null, true);
        this.eventSettings = {
            dataSource: [],
            fields: {
                id: "Id",
                subject: { title: 'Customer Name', name: 'Name' },
                startTime: { title: 'From', name: 'StartTime' },
                endTime: { title: 'To', name: 'EndTime' },
                description: { title: 'Reason', name: 'Description' }
            }
        };
        this.namesArray = [];
        this.assignedwoResponse = false;
        this.pendingWo = false;
        this.pausedWo = false;
        this.consultantDataSource = [];
        this.group = { allowGroupEdit: true, resources: ['Departments', 'Consultants'] }; // enableCompactView: false,
        this.virtualscroll = true;
        this.staffGroups = [];
        this.Booked = 0;
        this.InUse = 0;
        this.Returned = 0;
        this.Cancel = 0;
        this.Inactive = 0;
        this.Unavailable = 0;
        this.Available = 0;
        this.Inrepair = 0;
        this.EMP_JOB_STATUS = {
            DISPATCH: 1,
            JOB_CHECKIN: 2,
            JOB_CHECKOUT: 3,
            JOB_UPDATE: 4,
            STAND_BY: 5
        };
        this.leaveList = [];
        // Initialize the Dialog component target element.
        this.initilaizeTarget = function () {
            _this.targetElement = _this.container.nativeElement.parentElement;
            //this.resourceTargetElement = this.resourcecontainer.nativeElement.parentElement;
        };
        this.jobStatus = ['Ongoing', 'Pending', 'Complete', 'Recall', 'Paused'];
        this.estimateStatus = ['Draft', 'Sent', 'Rejected', 'Approved', 'Modified'];
        this.currentAppointmentId = 0;
        this.currentWorkOrderNumber = 0;
        this.currentEventOnEditorWindow = "";
        //private UtilComponent: any;
        this.alertDialog = function () {
            this.UtilComponent = _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__["DialogUtility"].confirm({
                title: '',
                content: "Are you sure you want to " + this.currentEventOnEditorWindow + " this work order",
                okButton: { text: 'YES', click: this.okClick.bind(this) },
                cancelButton: { text: 'NO' },
                showCloseIcon: true,
                closeOnEscape: true,
                animationSettings: { effect: 'Zoom' }
            });
        };
        // Hide the Dialog when click the footer button.
        this.reasonDialogClick = function () {
            var reason = document.getElementById('inVal')['value'];
            if (_this.currentEventOnEditorWindow === "PAUSE") {
                console.log(_this.currentEventOnEditorWindow);
                //  this.updatePauseStatus(this.getAppointmentId());
            }
            else if (_this.currentEventOnEditorWindow === "UNASSIGN") {
                console.log(_this.currentEventOnEditorWindow);
                // this.updateUnassignStatus(this.getAppointmentId(), reason);
            }
            else if (_this.currentEventOnEditorWindow === "CANCEL") {
                console.log(_this.currentEventOnEditorWindow);
                // this.updateCancelStatus(this.getAppointmentId(), reason);
            }
            _this.ejDialog.hide();
        };
        this.dialogOpen = function () {
            // (document.getElementById('sendButton') as any).keypress = (e: any) => {
            //     if (e.keyCode === 13) { this.updateTextValue(); }
            // };
            // (document.getElementById('inVal')as HTMLElement).onkeydown = (e: any) => {
            //     if (e.keyCode === 13) { this.updateTextValue(); }
            // };
            // document.getElementById('sendButton').onclick = (): void => {
            //     this.updateTextValue();
            // };
        };
        this.updateTextValue = function () {
            //let enteredVal: HTMLInputElement = document.getElementById('inVal') as HTMLInputElement;    
            // let dialogTextElement: HTMLElement = document.getElementsByClassName('dialogText')[0] as HTMLElement;
            // let dialogTextWrap : HTMLElement = document.getElementsByClassName('dialogContent')[0] as HTMLElement;
            // if (!isNullOrUndefined(document.getElementsByClassName('contentText')[0])) {
            //     detach(document.getElementsByClassName('contentText')[0]);
            // }
            // if (enteredVal.value !== '') {
            //     dialogTextElement.innerHTML = enteredVal.value;
            // }
            // enteredVal.value = '';
        };
        // Enables the footer buttons
        this.buttons = [
            {
                'click': this.reasonDialogClick.bind(this),
                // Accessing button component properties by buttonModel property
                buttonModel: {
                    content: 'Submit',
                    isPrimary: true
                }
            },
        ];
        this.onOverlayClick = function () {
            _this.ejDialog.hide();
        };
    }
    EquipmentbookingBoardComponent.prototype.ngOnInit = function () {
        //this.initSocket();
        this.pageSettings = { pageSize: 10 };
        this.initilaizeTarget();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.beyond.beyondAdmin();
        this.beyond.dispatchBoard();
        this.dispatchEquiBookBoardData();
        this.dispatchEquipmentBoardData();
        this.getProStaffName();
        this.beyond.beyondAdmin();
        // this.dispatchDetails = this.formBuilder.group({
        //   category: ['']
        //});
        //this.refresh();
        //this.getleaveList()
        //this.getEqBookingDetails();
    };
    EquipmentbookingBoardComponent.prototype.onEventRendered = function (args) {
        if (args.type == "event" && args.data) {
            console.log("onEventRendered method called", args);
            var isJob = false;
            var data = args.data;
            // if (this.estimateStatus.indexOf(data['status']) > -1 && data['workOrderStatus'] !== 'Approved') {
            //     isJob = false;
            // }
            // if (this.jobStatus.indexOf(data['workOrderStatus']) > -1 || data['workOrderStatus'] == 'Approved') {
            //     isJob = true;
            // }
            var childNode = args.element.querySelector('.e-appointment-details');
            childNode.setAttribute('style', "color:black;");
            if (isJob) {
                args.element.style.backgroundColor = 'rgba(135, 206, 235, 0.4)';
                args.element.style.border = '2px solid skyblue';
            }
            else {
                args.element.style.backgroundColor = 'rgba(243, 67, 247, 0.4)';
                args.element.style.border = '2px solid pink';
            }
            args.element.style.borderRadius = '4px';
            args.element.style.marginTop = '5px';
            args.element.style.alignItems = 'center';
            var firstChild = args.element.firstChild;
            // let ele: HTMLElement = createElement('div', {
            //     //innerHTML: "<i class='fa fa-truck'></i>" + " &nbsp;<i class='fa fa-circle' ></i>",
            //     innerHTML: "&nbsp;<i class='fa fa-circle' ></i>",
            //     //className: 'templatewrap'
            // });
            var ele = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_16__["createElement"])('div');
            // if (args.data && args.data['dispatchTime'] && args.data['dispatchTime'] !== "0000-00-00 00:00:00") {
            //     ele.innerHTML = "&nbsp;<i class='fa fa-truck' style='color:'green'></i>"
            // }
            switch (args.data['status']) {
                // case "Assigned":
                //     (ele.children[0] as HTMLElement).style.color = "green";
                //     break;
                case "Draft":
                    ele.innerHTML = "&nbsp;<i class='fa fa-circle' ></i>";
                    ele.children[0].style.color = "rgb(103, 212, 231)";
                    break;
                case "Sent":
                    ele.innerHTML = "&nbsp;<i class='fa fa-circle' ></i>";
                    ele.children[0].style.color = "rgb(204,255,243)";
                    break;
                case "Rejected":
                    ele.innerHTML = "&nbsp;<i class='fa fa-circle' ></i>";
                    ele.children[0].style.color = "rgb(253,231,189)";
                    break;
                case "Approved":
                    ele.innerHTML = "&nbsp;<i class='fa fa-circle' ></i>";
                    ele.children[0].style.color = "black";
                    break;
                case "Modified":
                    ele.innerHTML = "&nbsp;<i class='fa fa-circle' ></i>";
                    ele.children[0].style.color = "purple";
                    break;
                case "Ongoing":
                    ele.innerHTML = "&nbsp;<i class='fa fa-circle' ></i>";
                    ele.children[0].style.color = "green";
                    break;
                case "Pending":
                    ele.innerHTML = "&nbsp;<i class='fa fa-circle' ></i>";
                    ele.children[0].style.color = "#52B6CE";
                    break;
                case "Complete":
                    ele.innerHTML = "&nbsp;<i class='fa fa-circle' ></i>";
                    ele.children[0].style.color = "#0A0AD0";
                    break;
                case "Recall":
                    ele.innerHTML = "&nbsp;<i class='fa fa-circle' ></i>";
                    ele.children[0].style.color = "#4D0080";
                    break;
                case "Paused":
                    ele.innerHTML = "&nbsp;<i class='fa fa-circle' ></i>";
                    ele.children[0].style.color = "red";
                    break;
            }
            //ele.style.color = 'black';
            //(ele.children[1] as HTMLElement).style.color = "green";
            //(ele.children[0] as HTMLElement).style.color = "green";
            args.element.insertBefore(ele, firstChild);
        }
    };
    EquipmentbookingBoardComponent.prototype.onDragStart = function (args) {
        args.scroll = { enable: true, scrollBy: 5, timeDelay: 200 };
        //this.dWPDetails = args.data;
    };
    EquipmentbookingBoardComponent.prototype.onItemDrag = function (event) {
        //console.log("IN ITEM DRAG", event, this.scheduleObj.isAdaptive)
        //console.log(document.body.style.cursor)
        document.body.style.cursor = 'pointer';
        //event.cancel = true;
        // if (this.scheduleObj.isAdaptive) {
        //     let classElement: HTMLElement = this.scheduleObj.element.querySelector('.e-device-hover');
        //     if (classElement) {
        //         classElement.classList.remove('e-device-hover');
        //     }
        //     if (event.target.classList.contains('e-work-cells')) {
        //         addClass([event.target], 'e-device-hover');
        //     }
        // }
        // if (document.body.style.cursor === 'not-allowed') {
        //     document.body.style.cursor = '';
        // }
        // if (event.name === "drag") {
        //     let dragElementIcon: NodeListOf<HTMLElement> =
        //         document.querySelectorAll('.e-drag-item');
        //     for (let i: number = 0; i < dragElementIcon.length; i++) {
        //         dragElementIcon[i].style.display = 'none';
        //     }
        // }
    };
    EquipmentbookingBoardComponent.prototype.onRenderCell = function (args) {
        var _this = this;
        console.log("onRenderCell method called");
        // if (args.elementType == 'resourceGroupCells' && args.element.className.indexOf('e-work-hours') > 0) {
        //     args.element.style.background = "#FAFAE3";
        // }
        console.log('currentView' + this.scheduleObj.currentView);
        if (args.elementType === 'emptyCells' && args.element.classList.contains('e-resource-left-td') && this.scheduleObj.currentView === "TimelineDay") {
            var target = args.element.querySelector('.e-resource-text');
            target.innerHTML = '<div class="name" style="font-weight:bold;color:#9B9A9B">Electrical Demand</div>';
        }
        if (args.elementType === 'workCells' && this.scheduleObj.currentView === "TimelineDay") {
            console.log("onRenderCell method called", args);
            // let s=args['style']
            // s['backgroundColor']='black'
            // args['style']=s//("backgroundColor", "#F3C3C3").css("color", "black");/*custom css applied to the row */
            //console.log("onRenderCell method called");
            //let resource: ResourceDetails = this.scheduleObj.getResourcesByIndex(args.groupIndex);
            var data_1 = this.equipmentBookingDetailsData;
            console.log('resourceData' + JSON.stringify(data_1));
            var fromTime = this.getTime(data_1[0].checkOutTime);
            var toTime = this.getTime(data_1[0].returnTime);
            console.log("data.fromTime", fromTime);
            console.log("data.toTime", toTime);
            var rowColor_1;
            console.log('this.leaveList.filter' + JSON.stringify(args));
            this.leaveList.filter(function (e) { return e.equipmentName == data_1[0].equipmentName; }).forEach(function (l) {
                console.log("dddddddddddddddd1111111", l, args.date, args.date >= l.checkOutDate, args.date <= l.returnDate);
                if ((args.date >= l.checkOutDate && args.date <= l.returnDate) || (args.date >= l.checkOutDate && l.returnDate == 'Invalid Date')) {
                    rowColor_1 = l.type == 'sick' ? "rgb(204,255,243)" : "rgb(253,231,189)";
                }
            });
            // let currentWorkSchedule ={
            //     from: new Date(this.scheduleObj.selectedDate.getFullYear(),this.scheduleObj.selectedDate.getMonth(),this.scheduleObj.selectedDate.getDate(),fromTime['hours'],fromTime['minutes']),
            //     to: new Date(this.scheduleObj.selectedDate.getFullYear(),this.scheduleObj.selectedDate.getMonth(),this.scheduleObj.selectedDate.getDate(),toTime['hours'],toTime['minutes'])
            // }
            console.log("ccccccccccccccccccccccc", JSON.stringify(data_1));
            if (rowColor_1) {
                args.element.style.background = rowColor_1;
            }
            // if(args.date>= currentWorkSchedule.from&& args.date<currentWorkSchedule.to){
            // switch (data.attendanceStatus) {
            //     case 4: rowColor = "rgb(204,255,243)"; break; // sick
            //     case 5: rowColor = "rgb(253,231,189)"; break; //off
            // }
            // }
            var schedulerDate = this.scheduleObj.selectedDate;
            var currentDate = schedulerDate.getTime(); //new Date(args.date).getTime()
            var schedulerDateisToday = true; /*schedulerDate.getDate() === new Date().getDate() &&
                schedulerDate.getMonth() === new Date().getMonth() &&
                schedulerDate.getFullYear() === new Date().getFullYear();*/
            // console.log("local clockin time", data.clocked_in,data.employeeId, schedulerDateisToday)
            // clockInColor = schedulerDate.getDay()==clockedIn.getDay
            // let localDate1 = new Date(`${data.clocked_in} UTC`.replace(/-/g, '/'));
            // let clockInCheck = new Date(localDate1.getFullYear(), localDate1.getMonth(), localDate1.getDate(), localDate1.getHours(), localDate1.getMinutes() >= 30 ? 30 : 0)
            // let localDate2 = new Date(`${data.clocked_out} UTC`.replace(/-/g, '/'));
            // let clockOutCheck = new Date(localDate2.getFullYear(), localDate2.getMonth(), localDate2.getDate(), localDate2.getHours(), localDate2.getMinutes() >= 30 ? 30 : 0)
            // if (rowColor && data.clocked_in && args.date >= clockInCheck && data.clocked_out && args.date <= clockOutCheck) {
            //     rowColor = null
            // }
            // else if (rowColor && data.clocked_in && args.date >= clockInCheck && (!data.clocked_out || localDate2<localDate1)) {
            //     rowColor = null
            // }
            // if (rowColor) {
            //     (args.element as HTMLElement).style.background = rowColor;
            //         // (args.element as HTMLElement).style.pointerEvents = 'none'
            // }
            var offset = new Date().getTimezoneOffset(); // get local timezone offset
            if (schedulerDateisToday && data_1[0].checkOutDate != null) {
                //let localDate = `${data.clocked_in} UTC`;
                var localDate = (data_1[0].checkOutDate + " UTC").replace(/-/g, '/');
                var clockedIn = new Date(localDate);
                clockedIn = new Date(clockedIn.getTime());
                var clockedInDate = new Date(new Date(clockedIn.getFullYear(), clockedIn.getMonth(), clockedIn.getDate()).toDateString()).getTime();
                var isToday = clockedInDate === currentDate;
                var clockedInTime = clockedIn.toLocaleTimeString(navigator.language, {
                    hour: '2-digit',
                    minute: '2-digit'
                });
                if (isToday && (args.date).getHours() === clockedIn.getHours() && (args.date).getMinutes() === 0
                    && clockedIn.getMinutes() > 0 && clockedIn.getMinutes() <= 30) {
                    console.log("utc clockin time", data_1[0].returnTime, data_1[0].equipmentBookId);
                    console.log("local clockin time", clockedIn);
                    var ele = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_16__["createElement"])('div', {
                        innerHTML: "<i class='fa fa-angle-double-right' triggers=\"focus\" aria-hidden='true'></i>",
                        className: 'clockinImage',
                        styles: "font-size: 14.5px;padding-left:" + clockedIn.getMinutes() + "px;display: inline-block;",
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-container": "body",
                            "title": clockedInTime
                        }
                    });
                    (args.element).appendChild(ele);
                }
                if (isToday && (args.date).getHours() === clockedIn.getHours() && (args.date).getMinutes() === 30
                    && clockedIn.getMinutes() > 30) {
                    console.log("utc clockin time > 30", data_1[0].checkOutTime, data_1[0].equipmentBookId);
                    console.log("local clockin time > 30", clockedIn);
                    var ele = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_16__["createElement"])('div', {
                        innerHTML: "<i class='fa fa-angle-double-right' aria-hidden='true'></i>",
                        className: 'clockinImage',
                        styles: "font-size: 14.5px;z-index:0;padding-left:" + (30 - clockedIn.getMinutes()) + "px;display: inline-block;",
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-container": "body",
                            "title": clockedInTime
                        }
                    });
                    (args.element).appendChild(ele);
                }
            }
            if (schedulerDateisToday && data_1[0].checkOutDate && data_1[0].checkOutDate !== "0000-00-00 00:00:00") {
                var localDate = (data_1[0].checkOutDate + " UTC").replace(/-/g, '/');
                // let localDate = `${data.clocked_out}`;
                var clockedOut = new Date(localDate);
                clockedOut = new Date(clockedOut.getTime());
                var clockedInDate = new Date(new Date(clockedOut.getFullYear(), clockedOut.getMonth(), clockedOut.getDate()).toDateString()).getTime();
                var isToday = clockedInDate === currentDate;
                var clockedOutTime = clockedOut.toLocaleTimeString(navigator.language, {
                    hour: '2-digit',
                    minute: '2-digit'
                });
                if (isToday && (args.date).getHours() === clockedOut.getHours() &&
                    (args.date).getMinutes() === 0 && clockedOut.getMinutes() > 0 &&
                    clockedOut.getMinutes() <= 30) {
                    console.log("utc clockout time", data_1[0].checkOutDate);
                    console.log("local clockout time", clockedOut);
                    var ele = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_16__["createElement"])('div', {
                        innerHTML: "<i class='fa fa-angle-double-left' triggers=\"focus\" aria-hidden='true'></i>",
                        className: 'clockoutImage',
                        styles: "font-size: 14.5px; padding-left:" + clockedOut.getMinutes() + "px;display: flex;",
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-container": "body",
                            "title": clockedOutTime
                        }
                    });
                    (args.element).appendChild(ele);
                }
                if (isToday && (args.date).getHours() === clockedOut.getHours() && (args.date).getMinutes() === 30 &&
                    clockedOut.getMinutes() > 30) {
                    console.log("utc clockout time", data_1[0].checkOutTime);
                    console.log("local clockout time", clockedOut);
                    var ele = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_16__["createElement"])('div', {
                        innerHTML: "<i class='fa fa-angle-double-left' aria-hidden='true'></i>",
                        className: 'clockoutImage',
                        styles: "font-size: 14.5px; padding-left:" + (clockedOut.getMinutes() - 30) + "px;display: flex;",
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-container": "body",
                            "title": clockedOutTime
                        }
                    });
                    (args.element).appendChild(ele);
                }
            }
            if (data_1.status == 'Booked' && schedulerDateisToday && data_1['returnTime'] && data_1['returnTime'] !== "0000-00-00 00:00:00") {
                // let localDate = `${data.lastUpdatedTime} UTC`;
                //UNCOMMENT THE LINE BELOW TO ENABLE IT ON ALL BROWSERS
                var localDate = (data_1[0].returnTime + " UTC").replace(/-/g, '/');
                //let localDate = `${data.lastUpdatedTime}`;
                var lastUpdatedTime = new Date(localDate);
                var truckColor = 'blue';
                if (data_1['flag'] === this.EMP_JOB_STATUS.STAND_BY) {
                    truckColor = 'black';
                    var c_in = new Date((data_1[0].returnTime + " UTC").replace(/-/g, '/'));
                    if (lastUpdatedTime < c_in) {
                        lastUpdatedTime = c_in;
                    }
                }
                if (data_1['flag'] === this.EMP_JOB_STATUS.JOB_CHECKOUT) {
                    truckColor = 'red';
                }
                if (data_1['flag'] === this.EMP_JOB_STATUS.JOB_CHECKIN) {
                    truckColor = 'green';
                }
                var lastUpdatedDate = new Date(new Date(lastUpdatedTime.getFullYear(), lastUpdatedTime.getMonth(), lastUpdatedTime.getDate()).toDateString()).getTime();
                var isToday = lastUpdatedDate === currentDate;
                var twoDigitTime = lastUpdatedTime.toLocaleTimeString(navigator.language, {
                    hour: '2-digit',
                    minute: '2-digit'
                });
                if (isToday && (args.date).getHours() === lastUpdatedTime.getHours() && (args.date).getMinutes() === 0
                    && lastUpdatedTime.getMinutes() > 0 && lastUpdatedTime.getMinutes() <= 30) {
                    var ele = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_16__["createElement"])('div', {
                        id: "" + data_1[0].equipmentBookId,
                        innerHTML: "<i class='fa fa-truck fa-flip-horizontal OverlapCss' aria-hidden='true'></i>",
                        className: 'dispatchedTimeImage',
                        styles: "font-size: 15px;padding-left:" + lastUpdatedTime.getMinutes() + "px;color:" + truckColor + ";padding-top: 4px;",
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-container": "body",
                            "title": twoDigitTime
                        }
                    });
                    (args.element).appendChild(ele);
                    setTimeout(function () {
                        document.getElementById("" + data_1[0].equipmentBookId).addEventListener('click', function () {
                            var resource = _this.scheduleObj.getResourcesByIndex(args.groupIndex);
                            var data = resource.resourceData;
                            localStorage.setItem("resourceData", JSON.stringify(data));
                            // this.router.navigate(['/proz-dashboard/map-view', data.equipmentBookId, data.woNumber]);
                        });
                    }, 0);
                    //console.log("utc lastupdate time", data['lastUpdatedTime']);
                    //console.log("local lastupdate time", lastUpdatedTime);
                }
                if (isToday && (args.date).getHours() === lastUpdatedTime.getHours() && (args.date).getMinutes() === 30 &&
                    lastUpdatedTime.getMinutes() > 30) {
                    var ele = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_16__["createElement"])('div', {
                        id: "" + data_1[0].equipmentBookId,
                        innerHTML: "<i class='fa fa-truck fa-flip-horizontal OverlapCss' aria-hidden='true'></i>",
                        className: 'dispatchedTimeImage',
                        styles: "font-size: 15px;padding-left:" + (lastUpdatedTime.getMinutes() - 30) + "px;color:" + truckColor + ";padding-top: 4px;",
                        attrs: {
                            "data-toggle": "tooltip",
                            "data-container": "body",
                            "title": twoDigitTime
                        }
                    });
                    (args.element).appendChild(ele);
                    setTimeout(function () {
                        document.getElementById("" + data_1[0].equipmentBookId).addEventListener('click', function () {
                            var resource = _this.scheduleObj.getResourcesByIndex(args.groupIndex);
                            var data = resource.resourceData;
                            localStorage.setItem("resourceData", JSON.stringify(data));
                            //this.router.navigate(['/proz-dashboard/map-view', data.equipmentBookId, data.woNumber]);
                        });
                    }, 0);
                    //console.log("utc lastupdate time", data['lastUpdatedTime']);
                    //console.log("local lastupdate time", lastUpdatedTime);
                }
            }
        }
        // if (args.elementType === 'resourceHeader') {
        //     let resource: ResourceDetails = this.scheduleObj.getResourcesByIndex(args.groupIndex);
        //     let data = resource.resourceData;
        //     let element = args.element.querySelector('.fa-circle') as HTMLElement;
        //     switch (data.attendanceStatus) {
        //         case 0: element.style.color = "rgb(10, 10, 202)"; break; //did not clockin
        //         case 1: element.style.color = "green"; break; // clockedin
        //         case 2: element.style.color = "purple"; break; // clockedout
        //         case 4: element.style.color = "rgb(204,255,243)"; break; // sick
        //         case 5: element.style.color = "rgb(253,231,189)"; break; //off
        //     }
        // }
        if (args.elementType === 'majorSlot') {
            args.element.style.fontSize = "15px";
            args.element.style.color = "#9B9A9B";
            args.element.style.fontWeight = "bold";
        }
        if (args.elementType === 'majorSlot' && this.scheduleObj.currentView === "TimelineDay") {
            args.element.style.borderBottom = "3px solid #9B9A9B";
        }
        if (args.elementType === 'minorSlot' && this.scheduleObj.currentView === "TimelineDay") {
            args.element.style.borderBottom = "3px solid #9B9A9B";
        }
        if (args.elementType === 'majorSlot' && this.scheduleObj.currentView === "Week") {
            args.element.style.borderRight = "3px solid #9B9A9B";
        }
        if (args.elementType === 'minorSlot' && this.scheduleObj.currentView === "Week") {
            args.element.style.borderRight = "3px solid #9B9A9B";
            args.element.style.borderBottom = "3px solid #9B9A9B";
        }
        if (args.elementType === 'emptyCells' && this.scheduleObj.currentView === "TimelineDay") {
            args.element.style.borderBottom = "3px solid #9B9A9B";
        }
        if (args.elementType === 'alldayCells' && this.scheduleObj.currentView === "Week") {
            args.element.style.borderBottom = "3px solid #9B9A9B";
        }
        if (args.elementType === 'emptyCells' && this.scheduleObj.currentView === "Week") {
            args.element.style.borderRight = "3px solid #9B9A9B";
        }
    };
    EquipmentbookingBoardComponent.prototype.getMajorTime = function (value) {
        var hours = new Date(value.date).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
        return hours;
    };
    /**
    * @string == 08:00 PM
    */
    EquipmentbookingBoardComponent.prototype.getTime = function (string) {
        console.log('string' + string);
        var time = {};
        time['hours'] = +string.split(":")[0];
        time['minutes'] = +string.split(":")[1].split(" ")[0];
        if (string.split(" ")[1] == "PM") {
            time['hours'] += 12;
        }
        return time;
    };
    EquipmentbookingBoardComponent.prototype.onRowDataBound = function (args) {
        console.log("ggggggggggggggggggggg", args);
        args.row.css("backgroundColor", "#F3C3C3").css("color", "black"); /*custom css applied to the row */
    };
    EquipmentbookingBoardComponent.prototype.employeeStatus = function (status) {
        switch (status) {
            case 0:
                status = "Booked";
                break;
            case 1:
                status = "InUse";
                break;
            case 2:
                status = "Returned";
                break;
            case 4:
                status = "Cancel";
                break;
            case 5:
                status = "Unavailable";
                break;
            case 6:
                status = "In-Repair";
                break;
        }
        return status;
    };
    EquipmentbookingBoardComponent.prototype.ejGridDataBound = function (args) {
        for (var i = 0; i < this.gridObj.columns.length; i++) {
            //(this.gridObj.columns[0] as any).width = 10;
            if (this.gridObj.columns[i].field === "createdOn") {
                this.gridObj.columns[i].type = "date";
            }
            if (this.gridObj.columns[i].type === "date") {
                this.gridObj.columns[i].format = { type: "dateTime", format: "dd/MM/yyyy hh:mm a" };
            }
            this.gridObj.columns[2].format = "P2";
        }
        this.gridObj.refreshColumns();
    };
    EquipmentbookingBoardComponent.prototype.getProStaffName = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["RequestOptions"]({ headers: headers });
        var url = _global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/equipmentList/' + this.loginData.loginCode;
        if (this.filterGroup) {
            url = url + '?group=' + this.filterGroup;
        }
        this.http.get(url, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.proStaffData = response.response;
                //alert(response.response[0].equipmentName)
                //dummy user
                // this.proStaffData.push({"Id":184,"employeeId":"STAFF-0034","Text":"Auqib","lastName":"Ghosal","mobilePhone":"787-897-9797","skillLevel":"1","GroupId":"Test","Designation":"Dispatcher","showOnDispatchboard":"true","employeStatus":"ACTIVE","prozId":"PRO1076","image":"","attendanceStatus":1,"email":"subhasis.ghosal@gmail.com","clockedIn":"Wed Aug 12 2020 22:00:00","clockedOut":"Wed Aug 12 2020 22:00:00","userName":"subhasis.ghosal@gmail.com","fromTime":"06:00 AM","toTime":"08:00 PM","latitude":null,"longitude":null,"lastUpdatedTime":"Wed Aug 12 2020 22:00:00","flag":2,"woNumber":null,"clocked_in":"Wed Aug 12 2020 22:00:00","clocked_out":"Wed Aug 12 2020 22:00:00","Count":0})
                _this.staffDataSource = _this.proStaffData;
                _this.consultantDataSource = _this.proStaffData.filter(function (e) { return e['showOnEquipmentBoard'] == 'true'; });
            }
            else {
                _this.proStaffData = [];
                _this.consultantDataSource = [];
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    EquipmentbookingBoardComponent.prototype.refresh = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["RequestOptions"]({ headers: headers });
        this.refreshIntervalSubscriber = Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["interval"])(5 * 60 * 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])(function () {
            var url = _global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/equipmentList/' + _this.loginData.loginCode;
            if (_this.filterGroup) {
                url = url + '?group=' + _this.filterGroup;
            }
            return _this.http.get(url, {
                headers: headers
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["map"])(function (res) { return res.json(); })).subscribe(function (response) {
            if (response.status == 200) {
                _this.consultantDataSource = response.response;
            }
            else {
                _this.proStaffData = [];
                _this.consultantDataSource = [];
            }
        });
    };
    EquipmentbookingBoardComponent.prototype.showResourceDetails = function (event) {
        if (!event.resourceData.image) {
            event.resourceData.image = "/../assets/img/no-image.png";
        }
        var employeeStatus = this.employeeStatus(event.resourceData.status);
        // alert(employeeStatus)
        var time = { label: "Time", value: "NA" };
        if (event.resourceData.attendanceStatus == 'In Active') {
            event.resourceData.date = (event.resourceData.date + " UTC").replace(/-/g, '/');
            time.label = "In Active";
            time.value = new Date(event.resourceData.date).toLocaleString();
        }
        if (event.resourceData.status == 'In Repair') {
            event.resourceData.date = (event.resourceData.date + " UTC").replace(/-/g, '/');
            time.label = "In Repair";
            time.value = new Date(event.resourceData.date).toLocaleString();
        }
        this.selectedResourceData = event.resourceData;
        var dialogContent = "<div class=\"dialogContent p-2\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"media\">\n        <div class=\"media-left\">\n          <a href=\"#\">\n            <img class=\"media-object\" src=\"" + event.resourceData.pictures + "\"\n              alt=\"...\" width=\"100\" height=\"100\">\n          </a>\n        </div>\n        <div class=\"media-body\">\n          <h5 class=\"titleheading bg-light-info text-center mt-0 text-uppercase p-1\">\n            <strong>EMPLOYEE INFORMATION</strong>\n          </h5>\n          <table class=\"full-width\">\n            <tr>\n              <td width=\"100\">Username</td>\n              <td>" + event.resourceData.equipmentName + "</td>\n            </tr>\n            <tr>\n              <td width=\"100\">Name</td>\n              <td>" + event.resourceData.equipmentName + " </td>\n            </tr>\n            <tr>\n              <td width=\"100\">Skill Level</td>\n              <td>" + event.resourceData.skillLevel + "</td>\n            </tr>\n            <tr>\n              <td width=\"100\">Cell</td>\n              <td>" + event.resourceData.mobilePhone + "</td>\n            </tr>\n            <tr>\n              <td width=\"100\">Status</td>\n              <td id=\"empStatus\">" + status + "</td>\n            </tr>\n            " + (time.label != "Time" ? "<tr>\n              <td width=\"100\">" + time.label + "</td>\n              <td>" + time.value + "</td>\n            </tr>" : '') + "\n          </table>\n        </div>\n        <p></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h5 class=\"titleheading bg-light-info text-center mt-0 text-uppercase p-1\">\n        <strong>EMPLOYEE SALES</strong>\n      </h5>\n      <table class=\"full-width\">\n        <tr>\n          <td>Todays Primary Sales</td>\n          <td width=\"100\" class=\"text-right\">$1000.00</td>\n        </tr>\n        <tr>\n          <td>Todays Split Sales</td>\n          <td width=\"100\" class=\"text-right\">$1000.00</td>\n        </tr>\n        <tr>\n        <tr>\n          <td>Todays Total Sales</td>\n          <td width=\"100\" class=\"text-right\">$1000.00</td>\n        </tr>\n        <tr>\n        <tr>\n          <td>Todays Avg. Ticket</td>\n          <td width=\"100\" class=\"text-right\">$1000.00</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">\n            <hr class=\"mb-1 mt-1\" />\n          </td>\n        </tr>\n        <tr>\n          <td>This Weeks Primary Sales</td>\n          <td width=\"100\" class=\"text-right\">$1000.00</td>\n        </tr>\n        <tr>\n          <td>This Weeks Split Sales</td>\n          <td width=\"100\" class=\"text-right\">$1000.00</td>\n        </tr>\n        <tr>\n          <td>This Weeks Total Sales</td>\n          <td width=\"100\" class=\"text-right\">$1000.00</td>\n        </tr>\n        <tr>\n          <td>This Weeks Avg. Ticket</td>\n          <td width=\"100\" class=\"text-right\">$1000.00</td>\n        </tr>\n      </table>\n      <p></p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h5 class=\"titleheading bg-light-info text-center mt-0 text-uppercase p-1\">\n        <strong>TIME CARD SUMMARY</strong>\n      </h5>\n      <table class=\"full-width\">\n        <tr>\n          <td>Todays Total Hours</td>\n          <td width=\"100\" class=\"text-right\">200</td>\n        </tr>\n        <tr>\n          <td>Total Hours This Week</td>\n          <td width=\"100\" class=\"text-right\">200</td>\n        </tr>\n        <tr>\n          <td>Total Hours Last Week</td>\n          <td width=\"100\" class=\"text-right\">200</td>\n        </tr>\n      </table>\n      <p></p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h5 class=\"titleheading bg-light-info text-center mt-0 text-uppercase p-1\">\n        <strong>Equipment Settings</strong>\n      </h5>\n      <h6>No record found.</h6>\n      <h6>Add new equipment</h6>\n      <p></p>\n    </div>\n  </div>\n  <div class=\"row\">\n  <div class=\"col\">\n    <h5 class=\"titleheading bg-light-info text-center mt-0 text-uppercase p-1\">\n      <strong>Schedule Accuracy</strong>\n    </h5>\n    <table class=\"full-width\">\n      <tr>\n        <td>Today On time Arrival</td>\n        <td width=\"100\" class=\"text-right\">200</td>\n      </tr>\n      <tr>\n        <td>Today Late Arrivals</td>\n        <td width=\"100\" class=\"text-right\">200</td>\n      </tr>\n      <tr>\n        <td>This Week Ontime Arrival</td>\n        <td width=\"100\" class=\"text-right\">200</td>\n      </tr>\n      <tr>\n        <td>This week Late Arrival</td>\n        <td width=\"100\" class=\"text-right\">200</td>\n      </tr>\n      <tr>\n        <td>Today Drive Time to Job Exceeded ETA</td>\n        <td width=\"100\" class=\"text-right\">200</td>\n      </tr>\n      <tr>\n        <td>This Week Driver Exceeded ETA </td>\n        <td width=\"100\" class=\"text-right\">200</td>\n      </tr>\n    </table>\n    <p></p>\n  </div>\n</div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h5 class=\"titleheading bg-light-info text-center mt-0 text-uppercase p-1\">\n        <strong>Settings</strong>\n      </h5>\n      <a id=\"viewStaff\"><h6>View Employee Settings</h6></a>\n      <a id=\"staffCalender\"><h6>Employee Calender</h6></a>\n      <a id=\"staffWriteUps\"><h6>Employee Write Ups</h6></a>\n    </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col text-center\">\n          <input type=\"checkbox\" id=\"off\" name=\"off\" class='employeeStatusChangeCheckBox'>\n          <label for=\"off\" class='paddingRight20px verticalAlighTextBottom'> Off</label>\n          \n          <input type=\"checkbox\" id=\"sick\" name=\"sick\" class='employeeStatusChangeCheckBox'>\n          <label for=\"sick\" class='verticalAlighTextBottom'> Sick</label>\n      </div>\n  </div>\n</div>";
        this.ejResourceDialog.content = dialogContent;
        this.ejResourceDialog.show();
        // document.getElementById("viewStaff").addEventListener('click', () => {
        //     localStorage.setItem('viewData', JSON.stringify(event.resourceData));
        //     this.ejResourceDialog.hide();
        //     this.router.navigate(['/proStaff/viewStaff2']);
        // });
        // document.getElementById("staffWriteUps").addEventListener('click', () => {
        //     this.ejResourceDialog.hide();
        //     this.router.navigate(['/proStaff/viewWriteups']);
        // });
        // let offCheckbox: any = document.getElementById("off");
        // let sickCheckbox: any = document.getElementById("sick");
        // offCheckbox.addEventListener('click', () => {
        //     this.showConfirmPopup(offCheckbox, event)
        // }); //5
        // sickCheckbox.addEventListener('click', () => { this.showConfirmPopup(sickCheckbox, event) }); //4
        // if (event.resourceData.status === 'Available') {
        //     offCheckbox.checked = true;
        // } else if (event.resourceData.status === 'Un Available') {
        //     sickCheckbox.checked = true;
        // }
    };
    EquipmentbookingBoardComponent.prototype.showConfirmPopup = function (checkbox, event) {
        var _this = this;
        var closeButtonClick = true;
        this.ejResourceDialog.zIndex = 0;
        var sd = this.scheduleObj.selectedDate;
        var equipmentName = " " + this.selectedResourceData.equipmentName;
        var todayWO = this.workOrderDetailsData.filter(function (f) {
            var wod = new Date(f.StartTime);
            return new Date(f.EndTime) >= wod && f.ConsultantID == event.resourceData.Id && sd.getFullYear() == wod.getFullYear() && sd.getMonth() == wod.getMonth() && sd.getDay() == wod.getDay();
        });
        console.log("wwwwwwwwwwww", checkbox, todayWO);
        // if(this.selectedResourceData.attendanceStatus == 4 || this.selectedResourceData.attendanceStatus ==5 ){
        if (!checkbox.checked) {
            //this.updateEmployeeStatus(checkbox)
        }
        else {
            var message = "Are you sure you want to change " + equipmentName + " status to " + (checkbox.id == 'sick' ? 'Sick' : 'Off');
            this.UtilComponent = _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__["DialogUtility"].confirm({
                title: '',
                content: "" + message,
                okButton: {
                    text: 'YES', click: function () {
                        _this.UtilComponent.hide();
                        closeButtonClick = false;
                        if (todayWO && todayWO.length) {
                            _this.ejResourceDialog.hide();
                            _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__["DialogUtility"].alert(equipmentName + " has assigned Workorders, please reassign or cancel Assigned WOs to proceed");
                        }
                        else {
                            //this.updateEmployeeStatus(checkbox)
                        }
                    }
                },
                cancelButton: { text: 'NO', click: function () { _this.UtilComponent.hide(); checkbox.checked = false; } },
                showCloseIcon: true,
                close: function (e) {
                    console.log("close", closeButtonClick);
                    _this.UtilComponent.hide();
                    if (closeButtonClick) {
                        checkbox.checked = false;
                    }
                    _this.ejResourceDialog.zIndex = 1000;
                },
                closeOnEscape: true,
                animationSettings: { effect: 'Zoom' },
                position: { Y: 'top' }
            });
        }
    };
    EquipmentbookingBoardComponent.prototype.findConsultantName = function (id) {
        var index = this.consultantDataSource.findIndex(function (e) {
            return (e['Id'] === id);
        });
        return {
            employeeId: this.consultantDataSource[index]['equipmentBookId'],
            techName: "" + this.consultantDataSource[index]['bookByStaff']
        };
    };
    EquipmentbookingBoardComponent.prototype.onCreate = function () {
        this.getEqBookingDetails();
    };
    ;
    EquipmentbookingBoardComponent.prototype.getConsultantName = function (value) {
        return " " + value.resourceData.equipmentName;
    };
    EquipmentbookingBoardComponent.prototype.getConsultantImage = function (value) {
        if (value && value.resourceData['image']) {
            return value.resourceData['image'];
        }
        else {
            return "/../assets/img/no-image.png";
        }
    };
    EquipmentbookingBoardComponent.prototype.getConsultantStatus = function (value) {
        var resourceName = value.resourceData[value.resource.textField];
        if (resourceName === 'GENERAL' || resourceName === 'DENTAL') {
            return false;
        }
        else {
            return true;
        }
    };
    EquipmentbookingBoardComponent.prototype.getConsultantDesignation = function (value) {
        var resourceName = value.resourceData[value.resource.textField];
        if (resourceName === 'GENERAL' || resourceName === 'DENTAL') {
            return '';
        }
        else {
            return value.resourceData.Designation;
        }
    };
    EquipmentbookingBoardComponent.prototype.getConsultantImageName = function (value) {
        return this.getConsultantName(value).toLowerCase();
    };
    EquipmentbookingBoardComponent.prototype.onResizeStart = function (args) {
        if (args.data && args.data.checkOutTime) {
            var currentAppointmentStartTime = (args.data['checkOutTime']);
            var currentAppointmentEndTime = args.data['returnTime'];
            var startTimeInms = new Date(currentAppointmentStartTime).getTime();
            var endTimeInms = new Date(currentAppointmentEndTime).getTime();
            var currentTimeInms = new Date().getTime();
            if (startTimeInms < currentTimeInms && endTimeInms < currentTimeInms) {
                args.cancel = true;
                _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__["DialogUtility"].alert('You can not assign job in past time.');
            }
            if (args.event.target['classList'].contains('e-right-handler')) { }
            if (args.event.target['classList'].contains('e-left-handler')) {
                if (startTimeInms < currentTimeInms) {
                    args.cancel = true;
                    _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__["DialogUtility"].alert('You can not assign job in past time.');
                }
            }
        }
    };
    EquipmentbookingBoardComponent.prototype.scheduleCellDoubleClick = function (args) {
        //console.log("scheduleCellDoubleClick", args)
        args.cancel = true;
    };
    EquipmentbookingBoardComponent.prototype.onDragStop = function (args) {
        // let cellData: CellClickEventArgs = this.scheduleObj.getCellDetails(args.event.target);
        // let currentDate = new Date();
        // let cellStartTime = new Date(cellData.startTime)
        // let staff = this.consultantDataSource[cellData.groupIndex]
        // let preCid = this.dWPDetails.ConsultantID[0] || this.dWPDetails.ConsultantID
        // let newPreCid = args.data.ConsultantID[0] || args.data.ConsultantID
        // let disableDragDrop = ''
        // console.log('cell Data', cellData)
        // console.log('data', args.data)
        // console.log('dispatched', staff, this.leaveList.filter(e => e.employeeId == staff['employeeId']).length)
        // this.leaveList.filter(e => e.employeeId == staff['employeeId']).forEach(l => {
        //     // let rowColor
        //     console.log("dddddddddddddddd1111111", cellStartTime, cellStartTime >= l.startDT, cellStartTime <= l.endDT, (cellStartTime >= l.startDT && l.endDT == 'Invalid Date'))
        //     if ((cellStartTime >= l.startDT && cellStartTime <= l.endDT) || (cellStartTime >= l.startDT && l.endDT == 'Invalid Date' && args.date <= new Date())) {
        //         disableDragDrop = l.type //disable drag drop
        //         console.log("disabled drag and drop")
        //     }
        // })
        // let attendanceStatus = staff['attendanceStatus']
        // let clocked_in = staff['clocked_in'] && staff['clocked_in'] >= cellStartTime
        // let clocked_out = staff['clocked_out'] && staff['clocked_out'] <= new Date(cellData.endTime)
        // let localDate1 = new Date(`${staff['clocked_in']} UTC`.replace(/-/g, '/'));
        // let clockInCheck = new Date(localDate1.getFullYear(), localDate1.getMonth(), localDate1.getDate(), localDate1.getHours(), localDate1.getMinutes() >= 30 ? 30 : 0)
        // let localDate2 = new Date(`${staff['clocked_out']} UTC`.replace(/-/g, '/'));
        // let clockOutCheck = new Date(localDate2.getFullYear(), localDate2.getMonth(), localDate2.getDate(), localDate2.getHours(), localDate2.getMinutes() >= 30 ? 30 : 0)
        // let rowColor=true
        // if (rowColor && staff['clocked_in'] && cellStartTime >= clockInCheck && staff['clocked_out'] && cellData.endTime <= clockOutCheck) {
        //     rowColor = false
        // }
        // else if (rowColor && staff['clocked_in'] && cellStartTime >= clockInCheck && (!staff['clocked_out'] || localDate2<localDate1)) {
        //     rowColor = false
        // }
        // console.log("rowColor",rowColor)
        // if (cellStartTime.getTime() < currentDate.getTime()) {
        //     DialogUtility.alert('You can not assign job in past time.');
        //     args.cancel = true
        // } else if (staff['attendanceStatus'] == 5 || staff['attendanceStatus'] == 4) {
        //     console.log("dragDrop disabled on 5 and 4 attendace")
        //     args.cancel = true
        //     DialogUtility.alert(`Staff ${staff['Text']} ${staff['lastName']} has ${staff['attendanceStatus'] == 4 ? 'sick' : 'off'} status. You can not assign the work order this time.`);
        // }
        // else {
        //     if (this.dWPDetails && !args.data.acceptedAssign) { //if assigning Wo to another staff
        //         args.cancel = true
        //         args.data.acceptedAssign = true
        //         let content = "Are you sure you want to reassign this WO?";
        //         if (preCid == newPreCid) {
        //             content = "Are you sure you want to reschedule this WO?"
        //         }
        //         this.UtilComponent = DialogUtility.confirm({
        //             title: '',
        //             content: content,
        //             okButton: { text: 'YES', click: () => { args.cancel = false; this.onDragStop(args) } },
        //             cancelButton: { text: 'NO' },
        //             showCloseIcon: true,
        //             closeOnEscape: true,
        //             animationSettings: { effect: 'Zoom' }
        //         });
        //         console.log("i am here are you ghere toooo")
        //     } else if (args.data.acceptedAssign) {
        //         args.data.acceptedAssign = false
        //         args.cancel = false
        //         this.dWPDetails = null;
        //         this.UtilComponent.hide();
        //         args.requestType = 'eventChange'
        //         this.onActionBegin(args)
        //     }
        //     let resourceDetails: ResourceDetails = this.scheduleObj.getResourcesByIndex(cellData.groupIndex);
        //     if (args && args.data && resourceDetails) {
        //         args.data['workTechName'] = resourceDetails.resourceData.Text;
        //     }
        // }
    };
    EquipmentbookingBoardComponent.prototype.onActionBegin = function (event) {
        //console.log(this.scheduleObj.eventSettings)
        console.log("in action begins....", event);
        //console.log(this.scheduleObj.eventFields);
        if (event.requestType === 'eventCreate') {
            this.isTreeItemDropped = false;
            var apps = this.gridObj.currentViewData;
            var selected = this.gridObj.getSelectedRecords()[0];
            if (selected) {
                var removeIndex = apps.findIndex(function (data) { return data['equipmentBookId'] === selected['equipmentBookId']; });
                // apps.some((data, index) => {
                // return data['id'] === selected['id'];
                // removeIndex = index;
                // });
                if (removeIndex != -1)
                    apps.splice(removeIndex, 1); // remove data based on selected index 
                this.gridObj.renderModule.dataManagerSuccess({ result: apps, count: this.gridObj.pageSettings.totalRecordsCount });
            }
            if (this.equipmentBookingDetailsData && event && event.data) {
                var _a = this.equipmentBookingDetailsData, resourceData = _a.resourceData, eventData = _a.eventData, workOrderNumber = _a.workOrderNumber;
                eventData.checkOutTime = event.data[0]['checkOutTime'];
                eventData.returnTime = event.data[0]['returnTime'];
                eventData.isAllDay = event.data[0]['isAllDay'] ? 1 : 0;
                //eventData.Status = event.data[0]['Status'];
                eventData.status = event.data[0]['status'];
                //eventData.Frequancy = event.data[0]['Frequancy'];
                //eventData.Description = event.data[0]['Description'];
                this.addWorkOrder(resourceData, eventData, workOrderNumber);
            }
        }
        else if (event.requestType === 'eventChange') {
            //this.updateWorkOrderInfo(event.data);
        }
        else if (event.requestType === 'eventRemove') {
            // this.currentEventOnEditorWindow = "CANCEL";
            var workOrderId = event.data[0]['Id'];
            //this.setAppointmentId(workOrderId);
            //this.updateCancelStatus(parseInt(workOrderId));
        }
        else if (event.requestType === 'eventPause') {
            // this.updatePauseStatus(parseInt(this.draggedItemId, 10));
        }
        else if (event.requestType === 'eventViewWorkOrder') {
            this.router.navigate(['/workorder/viewWorkOrder']);
        }
    };
    EquipmentbookingBoardComponent.prototype.addWorkOrder = function (data, eventData, workOrderNumber) {
        var arr = [];
        var workStartTime = eventData[0].checkOutTime;
        var workEndTime = eventData[0].returnTime;
        if (eventData.isAllDay) {
            var startDate = new Date(eventData[0].checkOutTime);
            workStartTime = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 0, 0, 0);
            var endDate = new Date(eventData[0].returnTime);
            workEndTime = new Date(new Date(endDate).setHours(23, 59, 59, 999));
        }
        var obj = {
            "workOrderId": eventData[0].Id,
            "proId": this.loginData.loginCode,
            "woNumber": workOrderNumber,
            "category": this.dispatchDetails.value.category,
            "customerName": eventData[0].Name,
            "serviceName": eventData.Description,
            "serviceAddress": eventData.Location,
            "workStartTime": workStartTime,
            "workEndTime": workEndTime,
            "departmentId": data.GroupId,
            //"workTechName": data.Text,
            //"consultantId": data.Id,
            "employees": this.selectedSecondaryStaff || eventData.employees,
            "workOrderStatus": eventData.workOrderStatus,
            "customerId": eventData.customerId,
            "status": "Active",
            "isAllday": eventData.isAllDay ? 1 : 0,
        };
        if (eventData[0].equipmentBookId && eventData[0].equipmentBookId.length) {
            var length_1 = eventData.equipmentBookId.length;
            for (var i = 0; i < length_1; i++) {
                var tech = this.findConsultantName(eventData.equipmentBookId[i]);
                arr.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ "workTechName": tech.techName, "employeeId": tech.employeeId, "consultantId": eventData.equipmentBookId[i] }, obj));
            }
        }
        else {
            arr.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ "workTechName": data.Text + " " + data[0].equipmentName, "employeeId": eventData.equipmentBookId, "departmentId": data.GroupId, "consultantId": data[0].Id }, obj));
        }
        // this.http.post(Global.url + '/addWorkOrderDetails', arr)
        //     .subscribe(data => {
        //         // this.getWorkOrderDetails();
        //         // this.scheduleObj.refreshEvents();
        //         var response = data.json();
        //         this.addWorkOrderResponse = response.response
        //         //console.log("addWorkOrderResponse" + JSON.stringify(this.addWorkOrderResponse.woNumber))
        //         this.updateButton(this.addWorkOrderResponse.woNumber);
        //         if (response.status == 200) {
        //             return false;
        //         } else if (response.status == 404) {
        //         }
        //     }, error => {
        //     })
    };
    EquipmentbookingBoardComponent.prototype.onPopupOpen = function (args) {
        var _this = this;
        if (args.type === "QuickInfo") {
            args.cancel;
        }
        // document.getElementById("Description")['disabled'] = dispatched
        var isJob = false;
        if (args.data) {
            this.setAppointmentId(args.data['Id']);
            this.setWorkOrderNumber(args.data['equipmentName']);
            if (this.estimateStatus.indexOf(args.data['status']) > -1 && args.data['status'] !== 'Booked') {
                isJob = false;
            }
            if (this.jobStatus.indexOf(args.data['status']) > -1 || args.data['status'] == 'Returned') {
                isJob = true;
            }
        }
        if (args.element && args.target && args.target.classList.contains('e-appointment')) {
            var app = document.querySelector('.e-appointment');
            var backgroundColor = isJob ? 'background:#87CEEB' : 'background:#FAB3FC';
            args.element.setAttribute('style', backgroundColor);
            var nodes = args.element.children;
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].nodeName.toLowerCase() == 'div') {
                    nodes[i].setAttribute('style', backgroundColor);
                }
            }
        }
        if (args.type === 'Editor') {
            var allDay = args.element.querySelector('#allDay');
            if (!allDay.classList.contains('e-checkbox')) {
                var checkBoxObject = new _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_12__["CheckBox"]({
                    label: 'All Day',
                    checked: args.data['isAllDay'] ? true : false
                });
                checkBoxObject.appendTo(allDay);
            }
            var processElement = args.element.querySelector('#TechId');
            console.log("fffffffffffffffffffff", this.consultantDataSource);
            if (!args.data['secondary_tech']) {
                args.data['secondary_tech'] = [];
            }
            else {
                console.log("secondary tech", args.data);
            }
            if (!processElement.classList.contains('e-multiselect')) {
                var multiSelectObject = new _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_10__["MultiSelect"]({
                    placeholder: 'Choose a secondary tech',
                    fields: { text: 'Text', value: 'Id' },
                    dataSource: this.staffDataSource.filter(function (e) { return e.Id != args.data['equipmentBookId']; }),
                    showSelectAll: true,
                    mode: 'CheckBox',
                    selectAllText: "Select All",
                    value: this.staffDataSource.filter(function (s) { return args.data['equipmentName'] && args.data['equipmentName'].indexOf(s['equipmentBookId']) > -1; }).map(function (e) { return e['Id']; })
                });
                this.selectedSecondaryStaff = args.data['equipmentName'];
                multiSelectObject.addEventListener("change", function (v) {
                    console.log("change is ", v);
                    _this.selectedSecondaryStaff = _this.staffDataSource.filter(function (e) { return v.value && v.value.indexOf(e['Id']); }).map(function (e) { return e["equipmentBookId"]; }).join(",");
                    console.log("secondary staff", _this.selectedSecondaryStaff);
                });
                multiSelectObject.appendTo(processElement);
            }
            var statusElement = args.element.querySelector('#status');
            if (!statusElement.classList.contains('e-dropdownlist')) {
                var dropDownListObject = new _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_10__["DropDownList"]({
                    placeholder: 'Choose a status',
                    dataSource: isJob ? this.jobStatus : this.estimateStatus,
                    value: args.data['workOrderStatus'],
                });
                //statusElement.setAttribute('name', 'EventType');
                dropDownListObject.appendTo(statusElement);
            }
            var startElement = args.element.querySelector('#StartTime');
            var endElement = args.element.querySelector('#EndTime');
            if (!startElement.classList.contains('e-datetimepicker')) {
                this.startPicker = new _syncfusion_ej2_calendars__WEBPACK_IMPORTED_MODULE_11__["DateTimePicker"]({
                    strictMode: true,
                    value: new Date(startElement.value) || new Date(),
                    readonly: args.data['isAllDay'] == 1,
                }, startElement);
            }
            if (!endElement.classList.contains('e-datetimepicker')) {
                this.endPicker = new _syncfusion_ej2_calendars__WEBPACK_IMPORTED_MODULE_11__["DateTimePicker"]({
                    strictMode: true,
                    value: new Date(endElement.value) || new Date(),
                    readonly: args.data['isAllDay'] == 1,
                }, endElement);
            }
            this.endPicker.addEventListener("change", function (e) {
                // console.log("eeeeeeeeeeeeee",e)
                // console.log("this.startDate",this.startPicker)
                // this.startPicker.max=e.value
            });
            allDay.addEventListener("change", function (e) {
                _this.startPicker.readonly = e.target['checked'];
                _this.endPicker.readonly = e.target['checked'];
            });
            if (args.target !== undefined) {
                var footer = args.element.querySelector('.e-footer-content');
                var dialogObj = (args.element)['ej2_instances'][0];
                document.querySelector('.e-event-save').classList.remove("e-flat");
                document.querySelector('.e-event-save').classList.add("e-fill");
                document.querySelector('.e-event-cancel').setAttribute("style", "display:none");
                document.querySelector('.e-event-delete').setAttribute("style", "display:none");
                if (document.querySelector('.cancel-btn') === null) {
                    var cancelWoButton = document.createElement('button');
                    cancelWoButton.className = "e-control e-btn e-lib e-fill e-primary cancel-btn";
                    cancelWoButton.innerText = "Cancel WO";
                    footer.appendChild(cancelWoButton);
                    dialogObj.dataBind();
                    document.querySelector('.cancel-btn').addEventListener('click', function () {
                        dialogObj.hide();
                        _this.setEvent("CANCEL");
                        _this.alertDialog();
                    });
                }
                if (document.querySelector('.view-wo-btn') === null) {
                    var viewWoButton = document.createElement('button');
                    viewWoButton.className = "e-control e-btn e-lib e-fill e-primary view-wo-btn";
                    viewWoButton.innerText = "View WO";
                    footer.appendChild(viewWoButton);
                    dialogObj.dataBind();
                    viewWoButton.addEventListener('click', function () {
                        dialogObj.hide();
                        var woNumber = _this.findWorkOrderNumber(_this.getAppointmentId())['woNumber'];
                        _this.router.navigate(['/workorder/viewWorkOrder/' + woNumber]);
                    });
                }
                if (document.querySelector('.pause-btn') === null && isJob) {
                    var pauseButton = document.createElement('button');
                    pauseButton.className = "e-control e-btn e-lib e-fill e-primary pause-btn";
                    pauseButton.innerText = "PAUSE";
                    footer.appendChild(pauseButton);
                    dialogObj.dataBind();
                    document.querySelector('.pause-btn').addEventListener('click', function () {
                        dialogObj.hide();
                        _this.setEvent("PAUSE");
                        _this.alertDialog();
                    });
                }
                if (document.querySelector('.unassign-btn') === null) {
                    var unassignBtn = document.createElement("button");
                    unassignBtn.type = 'button';
                    unassignBtn.className = "e-btn e-fill e-primary unassign-btn";
                    unassignBtn.innerHTML = "UNASSIGN";
                    footer.appendChild(unassignBtn);
                    dialogObj.dataBind();
                    document.querySelector('.unassign-btn').addEventListener('click', function (event) {
                        _this.setEvent("UNASSIGN");
                        dialogObj.hide();
                        _this.alertDialog();
                    });
                }
            }
        }
        if (args.type === 'DeleteAlert') {
            args.cancel = true;
        }
    };
    EquipmentbookingBoardComponent.prototype.dispatchEquiBookBoardData = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/bookingboardStatusData/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var res = data.json();
            if (res.status == 200) {
                var empAttendanceData = res.response;
                //alert(res.response[0].status)
                _this.Booked = 0;
                _this.InUse = 0;
                _this.Returned = 0;
                _this.Cancel = 0;
                // this.Available = 0;
                // this.Inrepair = 0;
                empAttendanceData.forEach(function (element) {
                    if (element.status == 'Booked') {
                        _this.Booked = element.count;
                    }
                    else if (element.status == 'In-Use') {
                        _this.InUse = element.count;
                    }
                    else if (element.status == 'Returned') {
                        _this.Returned = element.count;
                    }
                    else if (element.status == 'Cancel') {
                        _this.Cancel = element.count;
                    }
                    // if (element.attendanceStatus === 0) this.Booked = element.count;
                    //  if (element.attendanceStatus === 1) this.InUse = element.count;
                    // if (element.attendanceStatus === 2) this.Returned = element.count;
                    // if (element.attendanceStatus === 4) this.Cancel = element.count;
                    // if (element.attendanceStatus === 4) this.Available = element.count;
                    // if (element.attendanceStatus === 5) this.Inrepair = element.count;
                });
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    EquipmentbookingBoardComponent.prototype.dispatchEquipmentBoardData = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //alert(this.loginData.loginCode)
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/equipmentStatusData/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var res = data.json();
            if (res.status == 200) {
                var empAttendanceData = res.response;
                //alert(res.response[0].status)
                _this.Inactive = 0;
                _this.Unavailable = 0;
                _this.Available = 0;
                _this.Inrepair = 0;
                empAttendanceData.forEach(function (element) {
                    if (element.status == 'IN ACTIVE') {
                        _this.Inactive = element.count;
                    }
                    else if (element.status == 'Un Available') {
                        _this.Unavailable = element.count;
                    }
                    else if (element.status == 'Available') {
                        _this.Available = element.count;
                    }
                    else if (element.status == 'In Repair') {
                        _this.Inrepair = element.count;
                    }
                    // this.Inrepair = element.count;
                    // if (element.attendanceStatus === 7) this.Inactive = element.count;
                    //if (element.attendanceStatus === 5) this.Unavailable = element.count;              
                    //if (element.attendanceStatus === 8) this.Available = element.count;
                    // if (element.attendanceStatus === 6) this.Inrepair = element.count;
                });
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    EquipmentbookingBoardComponent.prototype.findWorkOrderNumber = function (workOrderPrimaryKey) {
        var index = this.workOrderDetailsData.findIndex(function (e) {
            return (parseInt(e.Id) === parseInt(workOrderPrimaryKey));
        });
        return this.workOrderDetailsData[index];
    };
    EquipmentbookingBoardComponent.prototype.setAppointmentId = function (id) {
        this.currentAppointmentId = id;
    };
    EquipmentbookingBoardComponent.prototype.getAppointmentId = function () {
        return this.currentAppointmentId;
    };
    EquipmentbookingBoardComponent.prototype.setWorkOrderNumber = function (woNumber) {
        this.currentWorkOrderNumber = woNumber;
    };
    EquipmentbookingBoardComponent.prototype.getWorkOrderNumber = function () {
        return this.currentWorkOrderNumber;
    };
    EquipmentbookingBoardComponent.prototype.setEvent = function (event) {
        this.currentEventOnEditorWindow = event;
    };
    // dispatchWO(value) {
    //   console.log("dispatch wo", value)
    // }
    EquipmentbookingBoardComponent.prototype.viewWOMapView = function (value) {
        console.log("viewWOMapView", value);
    };
    EquipmentbookingBoardComponent.prototype.okClick = function () {
        document.getElementById('inVal')['value'] = "";
        if (this.currentEventOnEditorWindow === "PAUSE") {
            console.log(this.currentEventOnEditorWindow);
            // this.ejDialog.content = `<div class="dialogContent">
            // <p>Are you sure you want to ${this.currentEventOnEditorWindow} ?</p>
            // <span class="dialogText">Please put your reason here</span>
            // <textarea id="inVal" class="e-input" type="text" placeholder="Enter your message here!"></textarea> 
            // </div>`;
            this.ejDialog.show();
        }
        else if (this.currentEventOnEditorWindow === "UNASSIGN") {
            console.log(this.currentEventOnEditorWindow);
            this.ejDialog.show();
        }
        else if (this.currentEventOnEditorWindow === "CANCEL") {
            console.log(this.currentEventOnEditorWindow);
            this.ejDialog.show();
        }
        this.UtilComponent.hide();
    };
    EquipmentbookingBoardComponent.prototype.scheduleEventClick = function (args) {
        var _this = this;
        console.log("scheduleEventClick", args.event);
        document.body.style.cursor = 'pointer';
        args.cancel = true;
        this.scheduleObj.openEditor(args.event, "Save", true);
        var dispatched = this.consultantDataSource.map(function (u) { return u.equipmentBookId; }).indexOf(args.event['equipmentBookId']) != -1;
        var content = "Are you sure you want to reschedule this WO?";
        if (args.event['dispatchTime'] && +args.event['dispatchTime'].replace(/[-: ]/g, '') > 0) {
            content = 'Staff Already Dispatched to this location, are you sure you want to edit the WO';
        }
        this.UtilComponent = _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__["DialogUtility"].confirm({
            title: '',
            content: content,
            okButton: { text: 'YES', click: function () { _this.UtilComponent.hide(); _this.scheduleObj.openEditor(args.event, "Save", true); } },
            cancelButton: { text: 'NO' },
            showCloseIcon: true,
            closeOnEscape: true,
            animationSettings: { effect: 'Zoom' }
        });
    };
    EquipmentbookingBoardComponent.prototype.scheduleCellClick = function (args) {
        // console.log("scheduleCellClick", args)
        args.cancel = true;
        this.scheduleObj.refreshEvents();
    };
    EquipmentbookingBoardComponent.prototype.onActionComplete = function (args) {
        //console.log("on actioncomplete", args)
        if (args.requestType === "viewNavigate" && this.scheduleObj.currentView === "TimelineDay") {
            this.scheduleObj.scrollTo("7:00");
        }
        if (args.requestType === "dateNavigate") {
            //this.getBookingDetails();
        }
    };
    EquipmentbookingBoardComponent.prototype.onDataBound = function () {
        var currTime = new Date();
        var hours = currTime.getHours() < 10 ? '0' + currTime.getHours().toString() : currTime.getHours().toString();
        if (document.querySelector(".e-work-cells")) {
            // if (parseInt(hours) < 7 || parseInt(hours) > 16) {
            var minutes = currTime.getMinutes().toString();
            var time = hours + ':' + minutes;
            this.scheduleObj.scrollTo(time);
            // } else {
            //     this.scheduleObj.scrollTo('7:00')
            // }
        }
    };
    EquipmentbookingBoardComponent.prototype.getEqBookingDetails = function () {
        var _this = this;
        //alert('Abc'+ this.selectedDate.toDateString)
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_7__["RequestOptions"]({ headers: headers });
        var schedulerDate = "2020-10-16"; //this.selectedDate;
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getEquipMentBookingDetails?schedulerDate=' + schedulerDate, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentBookingDetailsData = response.response.filter(function (wo) { return wo.status == "Booked"; });
                // alert('Abc'+ JSON.stringify(this.equipmentBookingDetailsData))
                for (var i = 0; i < _this.equipmentBookingDetailsData.length; i++) {
                    _this.equipmentBookingDetailsData[i].equipmentBookId = (_this.equipmentBookingDetailsData[i].equipmentBookId);
                    _this.equipmentBookingDetailsData[i].address = _this.equipmentBookingDetailsData[i].address.replace(/,/g, "");
                    _this.equipmentBookingDetailsData[i].checkOutDate = new Date(_this.equipmentBookingDetailsData[i].checkOutDate).toDateString() + " " + new Date(_this.equipmentBookingDetailsData[i].checkOutDate).toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric', hour12: true
                    });
                }
                alert('Abc' + JSON.stringify(_this.equipmentBookingDetailsData));
                _this.scheduleObj.eventSettings.dataSource = _this.equipmentBookingDetailsData;
                _this.scheduleObj.refreshEvents();
            }
            else {
                alert('No');
                _this.scheduleObj.eventSettings.dataSource = [];
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    // private getleaveList() {
    //   // const headers = new Headers();
    //   // headers.append("Accept", 'application/json');
    //   // headers.append('Content-Type', 'application/json');
    //   // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //   // headers.append('authorization', currentUser.token);
    //   // let options = new RequestOptions({ headers: headers });
    //  // this.http.get(Global.url + '/empLeaveList?date=' + new Date().getTime(), options)
    //     //  .subscribe(data => {
    //         //  let res = data.json()
    //         //  this.leaveList = res.response.map(e => ({ ...e, startDT: new Date(e.startDT + ' utc'), endDT: new Date(e.endDT + ' utc') }))
    //         // this.scheduleObj.refresh()    
    //           //this.scheduleObj.eventSettings.dataSource = this.equipmentBookingDetailsData;// to refresh the cells for background color change
    //           //alert(JSON.stringify(this.consultantDataSource))
    //           this.consultantDataSource = JSON.parse(JSON.stringify(this.consultantDataSource))
    //           this.scheduleObj.refreshEvents();
    //         //  console.log("leavelist", this.leaveList)
    //       //})
    //}
    EquipmentbookingBoardComponent.prototype.onResizeStop = function (args) {
        var _this = this;
        if (args.data && args.data.StartTime) {
            var currentAppointmentStartTime = (args.data['checkOutTime']);
            var currentAppointmentEndTime = args.data['returnTime'];
            var startTimeInms = new Date(currentAppointmentStartTime).getTime();
            var endTimeInms = new Date(currentAppointmentEndTime).getTime();
            var currentTimeInms = new Date().getTime();
            // if (startTimeInms < currentTimeInms || endTimeInms < currentTimeInms) {
            //     args.cancel = true;
            //     DialogUtility.alert('You can not assign job in past time.');
            // }
            if (args.event.target['classList'].contains('e-right-handler')) { }
            if (args.event.target['classList'].contains('e-left-handler')) {
                if (startTimeInms < currentTimeInms) {
                    args.cancel = true;
                    _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__["DialogUtility"].alert('You can not assign job in past time.');
                }
            }
            var dispatched = this.consultantDataSource.map(function (u) { return u.equipmentBookId; }).indexOf(args.data['equipmentBookId']) != -1;
            args.cancel = true;
            var content = "Are you sure you want to reschedule this WO?";
            console.log("disptavh", args.data);
            if (args.data['dispatchTime'] && +args.data['dispatchTime'].toString().replace(/[-: ]/g, '') > 0) {
                content = 'Staff Already Dispatched to this location, are you sure you want to edit the WO';
            }
            this.UtilComponent = _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__["DialogUtility"].confirm({
                title: '',
                content: content,
                okButton: {
                    text: 'YES', click: function () {
                        args.cancel = false;
                        _this.UtilComponent.hide();
                        //this.updateWorkOrderInfo(args.data)
                    }
                },
                cancelButton: { text: 'NO' },
                showCloseIcon: true,
                closeOnEscape: true,
                animationSettings: { effect: 'Zoom' }
            });
        }
    };
    EquipmentbookingBoardComponent.prototype.resizeInProgress = function (args) {
        console.log("resize in progress", args);
        if (args.data && args.data.StartTime) {
            var currentAppointmentStartTime = (args.data['checkOutTime']);
            var currentAppointmentEndTime = args.data['returnTime'];
            var startTimeInms = new Date(currentAppointmentStartTime).getTime();
            var endTimeInms = new Date(currentAppointmentEndTime).getTime();
            var currentTimeInms = new Date().getTime();
            if (args.event.target['classList'].contains('e-left-handler')) {
                if (startTimeInms < currentTimeInms) {
                    args.cancel = true;
                    _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__["DialogUtility"].alert('You can not assign job in past time.');
                }
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleObj'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_17__["ScheduleComponent"])
    ], EquipmentbookingBoardComponent.prototype, "scheduleObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('treeObj'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_20__["TreeViewComponent"])
    ], EquipmentbookingBoardComponent.prototype, "treeObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gridObj'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_18__["GridComponent"])
    ], EquipmentbookingBoardComponent.prototype, "gridObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ejDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__["DialogComponent"])
    ], EquipmentbookingBoardComponent.prototype, "ejDialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EquipmentbookingBoardComponent.prototype, "container", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ejResourceDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_19__["DialogComponent"])
    ], EquipmentbookingBoardComponent.prototype, "ejResourceDialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('resourcecontainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EquipmentbookingBoardComponent.prototype, "resourcecontainer", void 0);
    EquipmentbookingBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            //providers: [Beyond],
            selector: 'app-equipmentbooking-board',
            template: __webpack_require__(/*! ./equipmentbooking-board.component.html */ "./src/app/proz/Equipment/equipmentbooking-board/equipmentbooking-board.component.html"),
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"], _utilities_calendar__WEBPACK_IMPORTED_MODULE_3__["Calendar"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_17__["TimelineViewsService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_17__["TimelineMonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_17__["ResizeService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_17__["DragAndDropService"]],
            styles: [__webpack_require__(/*! ./equipmentbooking-board.component.scss */ "./src/app/proz/Equipment/equipmentbooking-board/equipmentbooking-board.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_13__["SocketService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], EquipmentbookingBoardComponent);
    return EquipmentbookingBoardComponent;
}());



/***/ }),

/***/ "./src/app/proz/Equipment/list-equipment/list-equipment.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/proz/Equipment/list-equipment/list-equipment.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home </a>\r\n      </li>\r\n      <li><a> Equipment List</a></li>\r\n      <li class=\"active\">Equipment List</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>Equipment List</h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-blue\" (click)=\"addEquipment()\"><i class=\"fa fa-user-plus\"></i>&nbsp;\r\n            Add New Equipment</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"widget\">\r\n          <div class=\"widget-header with-footer header gray\">\r\n            <span class=\"widget-caption\"> Equipment List</span>\r\n          </div>\r\n          <div class=\"widget-body\">\r\n            <div class=\"table-scrollable\">\r\n              <table *ngIf=\"equipmentListResponse\"  class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                <thead class=\"flip-content bordered-palegreen\">\r\n                  <tr>\r\n                    <th>Equipment Id</th>\r\n                    <th>Equipment Name</th>\r\n                    <th>Description</th>\r\n                    <th>Category</th>\r\n                    <th>Subcategory</th>\r\n                    <th>Status</th>\r\n                    <th class=\"text-center\">Show on<br> Booking Board</th>\r\n                    <th class=\"text-center\">Edit </th>\r\n                    <th class=\"text-center\">View</th>\r\n                    <th class=\"text-center\">Book</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let data of equipmentListDetails\" >\r\n                    <td>\r\n                    <a (click)=\"viewEquipments(data.equipmentId)\">\r\n                     {{data.equipmentId}}\r\n                    </a>\r\n                  </td>\r\n                    <td>\r\n                      {{data.equipmentName}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.description}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.category}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.subCategory}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.status}}\r\n                    </td>\r\n                    <td>\r\n                      <div class=\"checkbox\" class=\"check\" >\r\n                        <label>\r\n                             <input type=\"checkbox\" disabled  [checked]=\"data.showOnEquipmentBoard == 'true'\" \r\n                                  class=\"colored-success\"  >\r\n                             <span class=\"text\"> </span>\r\n                        </label>\r\n                   </div>\r\n                    </td>\r\n\r\n                    <td class=\"center\">\r\n                      <a\r\n                        class=\"btn btn-xs btn-primary shiny\"\r\n                        (click)=\"edit(data.equipmentId)\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                      </a>\r\n                    </td>\r\n                      <td class=\"center\">\r\n                        <a\r\n                          class=\"btn btn-xs btn-primary shiny\"\r\n                          (click)=\"Onview(data.equipmentId)\">\r\n                          <i class=\"fa fa-eye\"></i>\r\n                        </a>\r\n                    </td>\r\n                    <td class=\"center\">\r\n                      <a\r\n                        class=\" btn btn-xs btn-primary shiny\"\r\n                        (click)=\"book()\">\r\n                        <i class=\"menu-icon glyphicon glyphicon-file\"></i>\r\n                      </a>\r\n                  </td>\r\n                   \r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <div class=\"row-fluid\" *ngIf=\"equipmentListResponse\">\r\n                <br>\r\n                <pagination-controls class=\"span10\" style=\"float:left\" (pageChange)=\"p = $event\"></pagination-controls>\r\n                <p class=\"span2\" style=\"float:right\">{{equipmentListDetails.length}} Records Found</p>\r\n              </div>\r\n              <div class=\"row-fluid\" *ngIf=\"!equipmentListResponse\">\r\n                <br />\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"col-lg-4\"></div>\r\n                  <div class=\"col-lg-4\">\r\n                    <div class=\"span6\"><b style=\"font-size: 25px\">No Records\r\n                        Available</b></div>\r\n                    <div class=\"col-lg-4\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div *ngIf=\"!precheckListResponse\">\r\n                            <p>No Records Found</p>\r\n                        </div> -->\r\n\r\n            <br />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Body -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/proz/Equipment/list-equipment/list-equipment.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/proz/Equipment/list-equipment/list-equipment.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".databox .databox-text {\n  display: block;\n  font-size: 11px;\n  margin: 4px 0 2px;\n  position: relative;\n  width: 100px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.item {\n  text-align: center; }\n\n.label {\n  font-size: 13px !important; }\n\n.label-wo-assigned {\n  background-color: #3C78D8 !important;\n  color: #FFFFFF !important; }\n\n.label-wo-unassigned {\n  background-color: #E06666 !important;\n  color: #FFFFFF !important; }\n\n.check {\n  margin-left: 5em; }\n\n.label-wo-holding {\n  background-color: #9900FF !important;\n  color: #FFFFFF !important; }\n\n.label-wo-cancelled {\n  background-color: #BF9000 !important;\n  color: #FFFFFF !important; }\n\n.label-awo-scheduled {\n  background-color: #00FF00 !important;\n  color: #000000 !important; }\n\n.label-awo-inprogress {\n  background-color: #A4C2F4 !important;\n  color: #000000 !important; }\n\n.label-awo-invoiced {\n  background-color: #FF9900 !important;\n  color: #000000 !important; }\n\n.label-awo-cancelled {\n  background-color: #FF0000 !important;\n  color: #000000 !important; }\n\n.label-awo-recall {\n  background-color: #FFFF00 !important;\n  color: #000000 !important; }\n\n.label-awo-estimate {\n  background-color: #E6B8AF !important;\n  color: #000000 !important; }\n\n.label-awo-pause {\n  background-color: #0000FF !important;\n  color: #FFFFFF !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei9FcXVpcG1lbnQvbGlzdC1lcXVpcG1lbnQvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3pcXEVxdWlwbWVudFxcbGlzdC1lcXVpcG1lbnRcXGxpc3QtZXF1aXBtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBYztFQUNkLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0csa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkM7O0FBRUE7RUFDSSxtQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDRyxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzNCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0cscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFFQTtFQUNHLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL3Byb3ovRXF1aXBtZW50L2xpc3QtZXF1aXBtZW50L2xpc3QtZXF1aXBtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGFib3ggLmRhdGFib3gtdGV4dCB7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgIG1hcmdpbjogNHB4IDAgMnB4O1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5idG4tZ3JheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tYmx1ZXsgICAgXHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcbiBcclxuIC5pdGVte1xyXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gfVxyXG5cclxuIC5sYWJlbHtcclxuICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAubGFiZWwtd28tYXNzaWduZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0M3OEQ4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5sYWJlbC13by11bmFzc2lnbmVke1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNFMDY2NjYgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmNoZWNre1xyXG4gICAgIG1hcmdpbi1sZWZ0OiA1ZW07XHJcbiB9XHJcblxyXG4gLmxhYmVsLXdvLWhvbGRpbmd7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5MDBGRiAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmxhYmVsLXdvLWNhbmNlbGxlZHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkY5MDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAubGFiZWwtYXdvLXNjaGVkdWxlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEZGMDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAubGFiZWwtYXdvLWlucHJvZ3Jlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTRDMkY0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtYXdvLWludm9pY2Vke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOTkwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLWF3by1jYW5jZWxsZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtYXdvLXJlY2FsbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGMDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1hd28tZXN0aW1hdGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZCOEFGICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtYXdvLXBhdXNle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDBGRiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/proz/Equipment/list-equipment/list-equipment.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/proz/Equipment/list-equipment/list-equipment.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListEquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEquipmentComponent", function() { return ListEquipmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ListEquipmentComponent = /** @class */ (function () {
    function ListEquipmentComponent(beyond, router, formBuilder, activatedRoute, http) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
    }
    ListEquipmentComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proData = this.loginData.loginCode;
        this.getEquipmentList();
    };
    ListEquipmentComponent.prototype.getEquipmentList = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/equipmentList' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentListDetails = response.response;
                _this.equipmentID = response.response[0].equipmentId;
                //alert(response.response[0].equipmentId)
                _this.equipmentListResponse = true;
            }
            else {
                _this.equipmentListDetails = null;
                _this.equipmentListResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    ListEquipmentComponent.prototype.addEquipment = function () {
        this.router.navigate(['/proz/addNewEquipment']);
    };
    ListEquipmentComponent.prototype.edit = function (equipmentID) {
        this.router.navigate(['/proz/editEquipment', equipmentID]);
    };
    ListEquipmentComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    ListEquipmentComponent.prototype.Onview = function (equipmentID) {
        this.router.navigate(['/proz/viewEquipment/', equipmentID]);
    };
    ListEquipmentComponent.prototype.viewEquipments = function (equipmentID) {
        this.router.navigate(['/proz/viewEquipment', equipmentID]);
    };
    ListEquipmentComponent.prototype.book = function () {
        this.router.navigate(['/proz/bookEquipment']);
    };
    ListEquipmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-list-equipment',
            template: __webpack_require__(/*! ./list-equipment.component.html */ "./src/app/proz/Equipment/list-equipment/list-equipment.component.html"),
            styles: [__webpack_require__(/*! ./list-equipment.component.scss */ "./src/app/proz/Equipment/list-equipment/list-equipment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], ListEquipmentComponent);
    return ListEquipmentComponent;
}());



/***/ }),

/***/ "./src/app/proz/Equipment/view-equipment/view-equipment.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/proz/Equipment/view-equipment/view-equipment.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <!-- <li>\r\n            <a>Equipment</a>\r\n          </li> -->\r\n          <li>\r\n            <a (click)=\"list()\">List of Equipment</a>\r\n          </li>\r\n          <li class=\"active\">View Equipment</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>View Equipment</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n\r\n      <div class=\"page-body\">\r\n        <div *ngFor=\"let data of equipmentListDetails\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                      <div class=\"well with-header with-footer three-bordered\">\r\n                        <div class=\"header gray\">\r\n                          View Equipment\r\n                        </div>\r\n                        <div id=\"registeration-form\" >\r\n\r\n                          <!-- View  Equipment Part -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"idLbl\">\r\n                                  <b>Equipment ID </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.equipmentId}}\r\n                                <!-- P-1000101 -->\r\n                                <!-- <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" value=\"{{partID}}\"\r\n                                    formControlName=\"partId\" readonly>\r\n                                </span> -->\r\n                              </div>\r\n                            </div>                            \r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"Add PictureLbl\">\r\n                                  <b>Show On Equipment Board </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <div class=\"checkbox\">\r\n                                     <label>\r\n                                          <input type=\"checkbox\" [checked]=\"data.showOnEquipmentBoard == 'true'\" disabled\r\n                                               class=\"colored-success\" >\r\n                                          <span class=\"text\"> </span>\r\n                                     </label>\r\n                                </div>\r\n                           </div>\r\n                            </div>\r\n                            \r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b> Equipment Name  </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.equipmentName}}\r\n                                 <!-- Hydojetter -->\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"vendorLbl\">\r\n                                  <b>Description </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.description}}\r\n                              </div>\r\n                            </div>\r\n                            \r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"costPerUnitLbl\">\r\n                                  <b> Purchase Date<</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.date}}\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-lg-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"stateLbl\">\r\n                                  <b>Current Location</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-lg-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.location}}\r\n                              </div>\r\n                            </div>\r\n                            \r\n                          </div>\r\n                         \r\n\r\n                          <div class=\"row\">\r\n                            \r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"subcategoryLbl\">\r\n                                  <b>Category</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.category}}\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"subcategoryLbl\">\r\n                                  <b>Sub Category</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.subCategory}}\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b> Manufacturer </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              {{data.manufacturer}}\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b>Serial # </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.serialNo}}\r\n\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"sizeLbl\">\r\n                                  <b>Model Number</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.model}}\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"colorLbl\">\r\n                                  <b>Purchase Price</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              {{data.purchasePrice}}\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"maincategoryLbl\">\r\n                                  <b> Size <span class=\"mandatory\"></span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.size}}\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"subcategoryLbl\">\r\n                                  <b>Present Price</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.presentPrice}}\r\n                              </div>\r\n                            </div>\r\n\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"maincategoryLbl\">\r\n                                  <b> Color <span class=\"mandatory\"></span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.color}}\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"yearLbl\">\r\n                                  <b>Status</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.status}}\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"Add PictureLbl\">\r\n                                  <b>Vendor</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <div class=\"checkbox\">\r\n                                     <label>\r\n                                      {{data.vendorName}}\r\n                                     </label>\r\n                                </div>\r\n                           </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <!-- <div class=\"form-group\">\r\n                                <label for=\"Add PictureLbl\">\r\n                                  <b>Upload Picture </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\" *ngIf=\"withImage\">\r\n                              <div class=\"col-sm-12 links\" *ngFor=\"let x of uniqueArray;let i=index\">\r\n                                <br>\r\n                                <div height=\"100px\" width=\"120px\" class=\"icon1\">\r\n                                  {{imageNames[i]?.image}}\r\n                                  <br />\r\n                                  <img src=\"{{x.name}}\" height=\"100px\" width=\"120px\">\r\n                                </div>\r\n                                \r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\" *ngIf=\"withOutImage\">\r\n                              <div style=\"width: 100px; height: 100px;\" class=\"fileupload-new thumbnail\">\r\n                                <img class=\"inventory-img\" alt=\"inventory Image\" [src]=\"imagePreview\" />\r\n                              </div>\r\n                            </div>\r\n                            </div>                                                        -->\r\n                          </div>\r\n                         \r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"Add PictureLbl\">\r\n                                  <b>Upload Pictures </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                           \r\n                              <div class=\"table-scrollable\">\r\n                            <div class=\"col-xs-6 col-sm-6 col-md-4 col-lg-12\">\r\n                              <div class=\"form-group\" *ngIf=\"withImage\">                              \r\n                               <ng-container >\r\n                                 <table >\r\n                                   <tr >\r\n                                     <td *ngFor=\"let x of uniqueArray;let i=index\">\r\n                                      {{imageNames[i]?.image}}\r\n                                      <br/>\r\n                                      <img [src]= x.name alt=\"image not found\" height=\"100px\" width=\"120px\" class=\"icon\"/>\r\n                                      &nbsp; &nbsp; &nbsp;\r\n                                     </td>\r\n                                   </tr>\r\n                                                            \r\n                               </table>\r\n                              \r\n                              \r\n                           </ng-container>\r\n                          </div>\r\n                           <div class=\"form-group\" *ngIf=\"withOutImage\">\r\n                            <div style=\"width: 100px; height: 100px;\" class=\"fileupload-new thumbnail\">\r\n                              <img class=\"inventory-img\" alt=\"inventory Image\" [src]=\"imagePreview\" />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        </div>\r\n                          <br />\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-4\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                           \r\n                            <div class=\"col-lg-3 button-center\">\r\n                              <button type=\"submit\" class=\"btn btn-success\" (click)=\"Onedit()\"><i class=\"fa fa-check\"></i>\r\n                                Edit</button>\r\n                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\r\n                                \r\n                                  <button type=\"submit\" class=\"btn btn-danger\" (click)=\"Oncancel()\"><i class=\"fa fa-times\"></i>\r\n                                    Cancel</button>\r\n                               \r\n                            </div>\r\n                           \r\n                \r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <br />\r\n                         \r\n                          <!-- </form> -->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->\r\n"

/***/ }),

/***/ "./src/app/proz/Equipment/view-equipment/view-equipment.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/proz/Equipment/view-equipment/view-equipment.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".databox .databox-text {\n  display: block;\n  font-size: 11px;\n  margin: 4px 0 2px;\n  position: relative;\n  width: 100px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.item {\n  text-align: center; }\n\n.label {\n  font-size: 13px !important; }\n\n.label-wo-assigned {\n  background-color: #3C78D8 !important;\n  color: #FFFFFF !important; }\n\n.label-wo-unassigned {\n  background-color: #E06666 !important;\n  color: #FFFFFF !important; }\n\n.check {\n  margin-left: 5em; }\n\n.label-wo-holding {\n  background-color: #9900FF !important;\n  color: #FFFFFF !important; }\n\n.label-wo-cancelled {\n  background-color: #BF9000 !important;\n  color: #FFFFFF !important; }\n\n.label-awo-scheduled {\n  background-color: #00FF00 !important;\n  color: #000000 !important; }\n\n.label-awo-inprogress {\n  background-color: #A4C2F4 !important;\n  color: #000000 !important; }\n\n.label-awo-invoiced {\n  background-color: #FF9900 !important;\n  color: #000000 !important; }\n\n.label-awo-cancelled {\n  background-color: #FF0000 !important;\n  color: #000000 !important; }\n\n.label-awo-recall {\n  background-color: #FFFF00 !important;\n  color: #000000 !important; }\n\n.label-awo-estimate {\n  background-color: #E6B8AF !important;\n  color: #000000 !important; }\n\n.label-awo-pause {\n  background-color: #0000FF !important;\n  color: #FFFFFF !important; }\n\n.selected-color {\n  background-color: orange;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei9FcXVpcG1lbnQvdmlldy1lcXVpcG1lbnQvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3pcXEVxdWlwbWVudFxcdmlldy1lcXVpcG1lbnRcXHZpZXctZXF1aXBtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBYztFQUNkLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0csa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkM7O0FBRUE7RUFDSSxtQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDRyxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzNCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0cscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFFQTtFQUNHLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHlCQUF3QjtFQUN4QixhQUFXLEVBRVgiLCJmaWxlIjoic3JjL2FwcC9wcm96L0VxdWlwbWVudC92aWV3LWVxdWlwbWVudC92aWV3LWVxdWlwbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhYm94IC5kYXRhYm94LXRleHQge1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICBtYXJnaW46IDRweCAwIDJweDtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAuYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWJsdWV7ICAgIFxyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4gXHJcbiAuaXRlbXtcclxuICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuIH1cclxuXHJcbiAubGFiZWx7XHJcbiAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmxhYmVsLXdvLWFzc2lnbmVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDNzhEOCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAubGFiZWwtd28tdW5hc3NpZ25lZHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTA2NjY2ICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuIH1cclxuIC5jaGVja3tcclxuICAgICBtYXJnaW4tbGVmdDogNWVtO1xyXG4gfVxyXG5cclxuIC5sYWJlbC13by1ob2xkaW5ne1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTAwRkYgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5sYWJlbC13by1jYW5jZWxsZWR7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JGOTAwMCAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmxhYmVsLWF3by1zY2hlZHVsZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBGRjAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gLmxhYmVsLWF3by1pbnByb2dyZXNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E0QzJGNCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLWF3by1pbnZvaWNlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjk5MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1hd28tY2FuY2VsbGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLWF3by1yZWNhbGx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtYXdvLWVzdGltYXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2QjhBRiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLWF3by1wYXVzZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwRkYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1jb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL1RyYW5zXzEucG5nJyk7XHJcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/proz/Equipment/view-equipment/view-equipment.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/proz/Equipment/view-equipment/view-equipment.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewEquipmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEquipmentComponent", function() { return ViewEquipmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");






var ViewEquipmentComponent = /** @class */ (function () {
    function ViewEquipmentComponent(beyond, router, http, _Activatedroute) {
        this.beyond = beyond;
        this.router = router;
        this.http = http;
        this._Activatedroute = _Activatedroute;
        this.urls = [];
        this.imageArray = [];
        this.imageNames = [];
        this.arrayValues = [];
        this.arr = [];
        this.uniqueArray = [];
    }
    ViewEquipmentComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proData = this.loginData.loginCode;
        this.equipmentID = this._Activatedroute.snapshot.paramMap.get("equipmentId");
        this.equipmentListOne(this.equipmentID);
    };
    ViewEquipmentComponent.prototype.equipmentListOne = function (equipmentID) {
        var _this = this;
        //alert(this.euipmentID)
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        //this.http.get(Global.url + '/equipmentListOne/'  + '/' + euipmentID, options)
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/equipmentListOne' + '/' + equipmentID, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentListDetails = response.response;
                _this.urls = _this.equipmentListDetails[0].pictures.split(',');
                //this.urls = this.equipmentListDetails[0].pictures.split(',')
                //console.log("url" + JSON.stringify(this.urls))
                //console.log("urls" + JSON.stringify(this.equipmentListDetails[0].pictures))
                if (_this.equipmentListDetails[0].pictures != "") {
                    _this.withImage = true;
                    _this.withOutImage = false;
                    for (var i = 0; i < _this.urls.length; i++) {
                        _this.imageArray.push(_this.urls[i]);
                        _this.imageNames.push({ image: _this.urls[i] });
                        _this.arrayValues.push(_this.urls[i]);
                        _this.imagePreview = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/" + _this.urls[i];
                        _this.arr.push({ name: _this.imagePreview });
                    }
                    _this.uniqueArray = Array.from(new Set(_this.arr));
                    console.log(" this.uniqueArray" + JSON.stringify(_this.uniqueArray));
                }
                console.log("arrarr" + JSON.stringify(_this.arr));
                if (_this.equipmentListDetails[0].pictures == "" || _this.equipmentListDetails[0].pictures == null || _this.equipmentListDetails[0].pictures == undefined || _this.equipmentListDetails[0].pictures == "undefined") {
                    _this.withOutImage = true;
                    _this.withImage = false;
                    _this.imagePreview = '../../assets/img/no-image.png';
                }
                _this.equipentListResponse = true;
            }
            else {
                _this.equipentListResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    ViewEquipmentComponent.prototype.changeColor = function (i) {
        console.log(i);
        this.selectedIndex = i;
    };
    ViewEquipmentComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    ViewEquipmentComponent.prototype.Onedit = function () {
        this.router.navigate(['/proz/editEquipment', this.equipmentID]);
    };
    ViewEquipmentComponent.prototype.Oncancel = function () {
        this.router.navigate(['/proz/listEquipment']);
    };
    ViewEquipmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-view-equipment',
            template: __webpack_require__(/*! ./view-equipment.component.html */ "./src/app/proz/Equipment/view-equipment/view-equipment.component.html"),
            styles: [__webpack_require__(/*! ./view-equipment.component.scss */ "./src/app/proz/Equipment/view-equipment/view-equipment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewEquipmentComponent);
    return ViewEquipmentComponent;
}());



/***/ }),

/***/ "./src/app/proz/equipment/edit-equipmentbooking/edit-equipmentbooking.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/proz/equipment/edit-equipmentbooking/edit-equipmentbooking.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n\r\n<div class=\"page-content\">\r\n     <!-- Page Breadcrumb -->\r\n     <div class=\"page-breadcrumbs\">\r\n          <ul class=\"breadcrumb\">\r\n               <li>\r\n                    <i class=\"fa fa-home\"></i>\r\n                    <a (click)=\"home()\">Home</a>\r\n                  </li>\r\n               <li> Book an Equipment</li>\r\n               \r\n          </ul>\r\n     </div>\r\n     <!-- /Page Breadcrumb -->\r\n\r\n     <!-- Page Header -->\r\n     <div class=\"page-header position-relative\">\r\n          <div class=\"header-title\">\r\n               <h1>\r\n                   Edit Equipment Booking\r\n                    <!-- <span style=\"color: red;\">IN PROGRESS</span> -->\r\n               </h1>\r\n          </div>\r\n     </div>\r\n     <!-- /Page Header -->\r\n\r\n\r\n     <!-- Page Body -->\r\n     <div class=\"page-body\">\r\n      <form *ngIf=\"editEquipmentBooking\" [formGroup]=\"editEquipmentBooking\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered\">\r\n                      <div class=\"header gray\">\r\n                        Edit Equipment Booking\r\n                      </div>\r\n                      <div id=\"registeration-form\">\r\n\r\n                        <!-- Add  Equipment Part -->\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"idLbl\">\r\n                                <b>Equipment Book ID <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"\" \r\n                                  formControlName=\"equipmentBookId\" readonly>\r\n                              </span>\r\n                            </div>\r\n                          </div>                            \r\n                          \r\n                          \r\n                        </div>\r\n                        \r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"descriptionLbl\">\r\n                                <b> Equipment Name    <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <select class=\"form-control\" id=\"stateRegistred\" name=\"equipmentName\"\r\n                                    data-bv-field=\"row-title\" formControlName=\"equipmentName\" (change)=\"getSingleEquipmentName($event.target.value)\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.equipmentName.errors }\">\r\n                                    <option value=\"\">Select</option>\r\n                                    <option *ngFor=\"let data of equipmentListDetails\" value={{data.equipmentName}}>\r\n                                      {{data.equipmentName}}\r\n                                    </option>\r\n                                  </select>\r\n                                  <div *ngIf=\"submitted && f.equipmentName.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.equipmentName.errors.required\">\r\n                                      <p style=\"color: red; font-size: 11px\">Equipment Name</p>\r\n                                    </div>\r\n                                  </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"descriptionLbl\">\r\n                                <b>Book by Staff <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                          <div class=\"form-group\">\r\n                            <span class=\"input-icon icon-right\">\r\n                              <!-- <input type=\"text\" formControlName=\"bookbyStaff\"\r\n                                   class=\"form-control\"\r\n                                   placeholder=\"bookbyStaff\"\r\n                                   > -->\r\n                                   <select class=\"form-control\" id=\"stateRegistred\" name=\"bookByStaff\"\r\n                           data-bv-field=\"row-title\" formControlName=\"bookByStaff\" \r\n                           [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\">\r\n                           <option value=\"\">Select</option>\r\n                           <option *ngFor=\"let data of employeeList\" value={{data.firstName}}{{data.lastName}}>\r\n                              {{data.firstName}} {{data.lastName}}\r\n                           </option>\r\n                         </select>\r\n                         </span>\r\n                         <div *ngIf=\"submitted && f.bookByStaff.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.bookByStaff.errors.required\">\r\n                                <p style=\"color: red; font-size: 11px\">Enter Book by Staff</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"costPerUnitLbl\">\r\n                                <b> Check Out Date<span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <input type=\"date\" class=\"form-control\" formControlName=\"checkOutDate\"\r\n                              placeholder=\"\" min=\"{{ startMin }}\"\r\n                              [max]=\"startMax\" (change)=\"onStartDateSelected($event.target.value)\"\r\n                              onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\"\r\n                              >\r\n                              <div *ngIf=\"submitted && f.checkOutDate.errors\" class=\"invalid-feedback\">\r\n                                   <div *ngIf=\"f.checkOutDate.errors.required\">\r\n                                     <p style=\"color: red; font-size: 11px\">Enter Check Out Date</p>\r\n                                   </div>\r\n                                 </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-lg-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"stateLbl\">\r\n                                <b>Check Out Time<span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <input type=\"time\" formControlName=\"checkOutTime\"\r\n                                     class=\"form-control\"\r\n                                     placeholder=\"\" (change)=\"onStartTime($event.target.value)\"\r\n                                     >\r\n                           </span>\r\n                           <div style=\"color:red;\">\r\n                            {{checkOutTimeErrorMsg}}\r\n                          </div>\r\n                           <div *ngIf=\"submitted && f.checkOutTime.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.checkOutTime.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\">Enter Check Out Time</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          \r\n                        </div>\r\n                       \r\n\r\n                        <div class=\"row\">\r\n                         \r\n                          \r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"subcategoryLbl\">\r\n                                <b>Return Date <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <input type=\"date\" formControlName=\"returnDate\"\r\n                                     class=\"form-control\"\r\n                                     placeholder=\"\" (change)=\"\r\n                                     onEndDateSelected(\r\n                                       $event.target.value\r\n                                     )\"\r\n                                   onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\"\r\n                                     >\r\n                           </span>\r\n                           <div *ngIf=\"submitted && f.returnDate.errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f.returnDate.errors.required\">\r\n                                <p style=\"color: red; font-size: 11px\">Enter Return Date</p>\r\n                              </div>\r\n                            </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"subcategoryLbl\">\r\n                                <b>Return Time<span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <input type=\"time\" formControlName=\"returnTime\"\r\n                                     class=\"form-control\"\r\n                                     placeholder=\"\" (change)=\"onEndTime($event.target.value)\"  onkeypress=\"return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)\"\r\n                                     >\r\n                           </span>\r\n                           <div style=\"color:red;\">\r\n                            {{ returnTimeErrorMsg }}\r\n                          </div>\r\n                           <div *ngIf=\"submitted && f.returnTime.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.returnTime.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\">Return Time</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"descriptionLbl\">\r\n                                <b> WO #<span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <select class=\"form-control\"\r\n                              formControlName=\"wO\" (change)=\"onSelected($event)\"\r\n                              [(ngModel)]=\"getTypeName\" >                                                                                  \r\n                         <option *ngFor=\"let data of woDetails\" [value]=\"data.workOrderNumber\">\r\n                         {{data.workOrderNumber}}\r\n                         </option>\r\n                         </select>\r\n                            <!-- <ng2-completer   [(ngModel)]=\"searchStr\" [datasource]=\"dataServices\" formControlName=\"wO\" class=\"form-control input-sm\" id=\"xlginput\"\r\n                            [minSearchLength]=\"0\" style=\"width: 100%;\" [selectOnClick]=\"true\" (selected)=\"onSelected($event)\"></ng2-completer> -->\r\n\r\n                            <div *ngIf=\"submitted && f.wO.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.wO.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\">Enter Work Order</p>\r\n                                </div>\r\n                              </div>\r\n                          </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"descriptionLbl\">\r\n                                <b>Customer Name <span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <input type=\"text\" formControlName=\"customerName\" value=\"{{this.customerName}}\"\r\n                                     class=\"form-control\"\r\n                                     placeholder=\"\" disabled\r\n                                     >\r\n                           </span>\r\n                           <div *ngIf=\"submitted && f.customerName.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.customerName.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\">Enter Customer Name</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"sizeLbl\">\r\n                                <b>Customer Street Address<span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <input type=\"text\" formControlName=\"address\"\r\n                                     class=\"form-control\"  value=\"{{this.addressWO}}\"\r\n                                     placeholder=\"\" disabled\r\n                                     >\r\n                           </span>\r\n                           <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.address.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\">Enter Address</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"colorLbl\">\r\n                                <b>City<span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                  formControlName=\"city\" value=\"{{this.cityWO}}\" disabled\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\">\r\n                              </span>\r\n                              <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.city.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\">Enter City</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"maincategoryLbl\">\r\n                                <b> State<span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <select class=\"form-control\" id=\"stateRegistred\" name=\"state\"\r\n                                data-bv-field=\"row-title\" formControlName=\"state\" disabled\r\n                                [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\">\r\n                                <option value=\"\">Select</option>\r\n                                <option *ngFor=\"let data of statesData\" value={{data.stateName}}>\r\n                                  {{data.stateName}}\r\n                                </option>\r\n                              </select>\r\n                              <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.state.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\">Select State</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"subcategoryLbl\">\r\n                                <b>Zip Code<span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <span class=\"input-icon icon-right\">\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                  formControlName=\"zip\" value=\"{{this.zipCodeWO}}\" disabled\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.zip.errors }\">\r\n                              </span>\r\n                              <div *ngIf=\"submitted && f.zip.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.zip.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\">Enter Zip Code</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-3\">\r\n    <div class=\"form-group\">\r\n      <label for=\"Add PictureLbl\">\r\n        <b>Equipment Requires Repair</b>\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <div class=\"form-group\">\r\n      <div class=\"checkbox\">\r\n           <label>\r\n                <input type=\"checkbox\"\r\n                     class=\"colored-success\" formControlName=\"equipmentRequiresRepair\"\r\n                     >\r\n                <span class=\"text\"> </span>\r\n           </label>\r\n      </div>\r\n </div>\r\n  </div>\r\n</div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"maincategoryLbl\">\r\n                                <b>Describe Issue</b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <span class=\"input-icon icon-right\">                                                                      \r\n                                <textarea rows=\"3\" class=\"form-control\" formControlName=\"describeIssue\" \r\n                                placeholder=\"Describe Issue\"></textarea>\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"yearLbl\">\r\n                                <b>Status<span class=\"mandatory\">*</span></b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <select class=\"form-control\" formControlName=\"status\"\r\n                                                                          [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\">\r\n                                                                         \r\n                                                                          <option value=\"Booked\">Booked</option>                                  \r\n                                                                          <option value=\"In-Use\">In-Use</option>\r\n                                                                          <option value=\"Returned\">Returned</option>\r\n                                                                          <option value=\"Cancel\">Cancel</option>                              \r\n                                                                        </select>\r\n                                                                        <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\">\r\n                                                                          <div *ngIf=\"f.status.errors.required\">\r\n                                                                            <p style=\"color: red; font-size: 11px\"> Required Status</p>\r\n                                                                          </div>\r\n                                                                        </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        \r\n                        <br />\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-4\">\r\n                            <div class=\"form-group\">\r\n                            </div>\r\n                          </div>\r\n                         \r\n                          <div class=\"col-lg-3 button-center\">\r\n                            <button type=\"submit\" class=\"btn btn-success\" (click)=\"onSubmit()\"><i class=\"fa fa-check\"></i>\r\n                              Save</button>\r\n                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\r\n                              <button type=\"submit\" class=\"btn btn-danger\" (click)=\"Oncancel()\"><i class=\"fa fa-times\"></i>\r\n                                Cancel</button>\r\n                          </div>\r\n                          \r\n              \r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <br />\r\n                        <!-- /Add  Inventory Part-->\r\n                        <!-- </form> -->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        \r\n\r\n        \r\n\r\n\r\n\r\n      </form>\r\n\r\n    </div>\r\n    !-- /  Equipment Booking Over Lap condition  -->\r\n    <div id=\"myModal0\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n         <div class=\"modal-dialog\">\r\n           <div class=\"modal-content\">\r\n             <div class=\"modal-header\">\r\n               <div class=\"widget-header blue\">\r\n                 <span class=\"widget-caption\"><b>Equipment Booking OverLap </b></span>\r\n               </div>\r\n               <div class=\"modal-body\">\r\n                 <form>\r\n                   <br />\r\n                   <div class=\"row\">\r\n                     <div class=\"col-lg-12\">\r\n                       <div class=\"form-group\">\r\n                         <label for=\"reasonLbl\">\r\n                           <b class=\"popup-text\" style=\"color: red;\">The Equipment Booking {{equipmentName}} has already been assigned / overlap during\r\n                             this time\r\n                             slot {{techEBstartTime}} -- {{techEBEndTime}}. Please choose a different\r\n                             time.</b>\r\n                         </label>\r\n                         <div class=\"row\">\r\n                           <div class=\"col-sm-12\">\r\n                             <div class=\"form-group\">\r\n                               <hr class=\"hr-gray-lg\">\r\n                             </div>\r\n                           </div>\r\n                         </div>\r\n                         <!-- <label>\r\n                           <b class=\"popup-text\"> Do you want add Equipment Booking ?\r\n                             <br> -->\r\n                             <!-- <span style=\"color:blue\"> Customers List/Search Customers</span> -->\r\n                           <!-- </b>\r\n                         </label> -->\r\n                       </div>\r\n                     </div>\r\n                   </div>\r\n                   <!-- <div class=\"row\">\r\n                   <div class=\"col-sm-12\">\r\n                     <div class=\"form-group\">\r\n                       <hr class=\"hr-gray\">\r\n                     </div>\r\n                   </div>\r\n                 </div> -->\r\n    \r\n                   <div class=\"modal-footer\">\r\n                     <div class=\"col-lg-3\">\r\n                     </div>\r\n                     <div class=\"col-lg-3 button-center\">\r\n                       <a class=\"btn btn-blue\" data-toggle=\"modal\" (click)=\"WooverLapCondition()\">\r\n                         CONFIRM\r\n                       </a>\r\n                     </div>\r\n                     <div class=\"col-lg-3 button-center\">\r\n                       <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\" (click)=\"onCancelOverlap()\"><i\r\n                           class=\"fa fa-times\"></i>\r\n                         CANCEL</button>\r\n                     </div>\r\n                     <div class=\"col-lg-3\">\r\n                     </div>\r\n                   </div>\r\n                 </form>\r\n               </div>\r\n             </div>\r\n           </div>\r\n         </div>\r\n         <br>\r\n       </div>\r\n     <!-- /Page Body -->\r\n</div>\r\n "

/***/ }),

/***/ "./src/app/proz/equipment/edit-equipmentbooking/edit-equipmentbooking.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/proz/equipment/edit-equipmentbooking/edit-equipmentbooking.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status-active {\n  color: #00FF00;\n  font-weight: bold; }\n\n.status-inactive {\n  color: #FF0000;\n  font-weight: bold; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.wostatustag-blue {\n  background: #3C78D8;\n  color: #FFFFFF; }\n\n.wostatustag-pink {\n  background: #E06666;\n  color: #FFFFFF; }\n\n.wostatustag-violet {\n  background: #9900FF;\n  color: #FFFFFF; }\n\n.wostatustag-brown {\n  background: #BF9000;\n  color: #FFFFFF; }\n\n.assignedwostatustag-green {\n  background: #00FF00; }\n\n.assignedwostatustag-lblue {\n  background: #A4C2F4; }\n\n.assignedwostatustag-orange {\n  background: #FF9900; }\n\n.assignedwostatustag-red {\n  background: #FF0000; }\n\n.assignedwostatustag-yellow {\n  background: #FFFF00; }\n\n.assignedwostatustag-lpink {\n  background: #E6B8AF; }\n\n.assignedwostatustag-blue {\n  background: #0000FF; }\n\n/* -- General Tab - Group Tab -- */\n\n.text-center {\n  text-align: center; }\n\n.center {\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n/* -- /General Tab - Group Tab -- */\n\n/* LIST MODE */\n\n.center {\n  text-align: center; }\n\n.item {\n  text-align: center; }\n\n/* /LIST MODE */\n\n/* VIEW MODE */\n\n.form-title {\n  color: #5DB2FF;\n  /*display: block;\r\n    padding: 8px 0;*/\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\n.button-center {\n  text-align: center; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.alert {\n  background-color: red; }\n\n.error {\n  background-color: red; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.well.with-footer {\n  padding-bottom: 10px !important; }\n\n/* /VIEW MODE */\n\n#divcenter {\n  border-style: solid;\n  border-color: #1e90ff; }\n\n#cid {\n  padding-left: 9.8em; }\n\n#from {\n  padding-left: 9.8em; }\n\n#to {\n  padding-left: 9.8em; }\n\n.tab-content {\n  background-color: #fbfbfb;\n  padding: 1px 12px !important;\n  position: relative;\n  box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.3); }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei9lcXVpcG1lbnQvZWRpdC1lcXVpcG1lbnRib29raW5nL0Q6XFxUb3Bwcm96XFxUb3BQcm96X0FkdmFuY2VfQ2xpZW50L3NyY1xcYXBwXFxwcm96XFxlcXVpcG1lbnRcXGVkaXQtZXF1aXBtZW50Ym9va2luZ1xcZWRpdC1lcXVpcG1lbnRib29raW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBYztFQUNkLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxvQkFBbUI7RUFDbkIsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLG9CQUFtQjtFQUNuQixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksb0JBQW1CO0VBQ25CLGVBQWMsRUFDakI7O0FBSUQ7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBR0QsbUNBQW1DOztBQUNuQztFQUNJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2Qzs7QUFDRCxvQ0FBb0M7O0FBQ3BDLGVBQWU7O0FBQ2Y7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBaUIsRUFDcEI7O0FBQ0QsZ0JBQWdCOztBQUdoQixlQUFlOztBQUNmO0VBQ0csZUFBZTtFQUNmO3FCQUNpQjtFQUNqQixrQ0FBaUM7RUFDakMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7eUJBQ3NCLEVBQ3ZCOztBQUVEO0VBQ0csa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNqQjs7QUFFRDtFQUNHLHNDQUFxQyxFQUN2Qzs7QUFFRDtFQUNHLG1CQUFrQixFQUNwQjs7QUFFRDtFQUNHLGFBQVksRUFDZDs7QUFFRDtFQUNHLFdBQVU7RUFDVixtQkFBa0IsRUFDcEI7O0FBRUQ7RUFDRyxhQUFZO0VBQ1osbUJBQWtCLEVBQ3BCOztBQUVEO0VBQ0csaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNwQjs7QUFFRDtFQUNHLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzlCLG9DQUFvQyxFQUNyQzs7QUFFRDtFQUNHLG1CQUFrQixFQUNwQjs7QUFFRDtFQUNHLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3BCOztBQUVEO0VBQ0csa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUMzQjs7QUFFRDtFQUNHLHFDQUFvQztFQUNwQyx1QkFBc0I7RUFDdEIsa0JBQWlCLEVBQ25COztBQUVEO0VBQ0csa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUMzQjs7QUFFRDtFQUNHLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdEM7O0FBQ0Q7RUFDSSxzQkFBb0IsRUFDdkI7O0FBQ0Q7RUFDSSxzQkFBb0IsRUFDdkI7O0FBRUQ7RUFDRyxvQ0FBbUMsRUFDckM7O0FBRUQ7RUFDRyxnQ0FBK0IsRUFDakM7O0FBQ0QsZ0JBQWdCOztBQUdoQjtFQUNJLG9CQUFrQjtFQUNsQixzQkFBb0IsRUFDbkI7O0FBQ0Q7RUFFQSxvQkFBbUIsRUFDbEI7O0FBQ0Q7RUFFQSxvQkFBbUIsRUFDbEI7O0FBQ0Q7RUFFQSxvQkFBbUIsRUFDbEI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsNkJBQTRCO0VBQzVCLG1CQUFrQjtFQUNsQiw4Q0FBeUMsRUFDNUMiLCJmaWxlIjoic3JjL2FwcC9wcm96L2VxdWlwbWVudC9lZGl0LWVxdWlwbWVudGJvb2tpbmcvZWRpdC1lcXVpcG1lbnRib29raW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy1hY3RpdmV7XHJcbiAgICAgY29sb3I6ICMwMEZGMDA7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiBcclxuIC5zdGF0dXMtaW5hY3RpdmV7XHJcbiAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiBcclxuIC5pbnByb2dyZXNze1xyXG4gICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLnRocmVlLWJvcmRlcmVke1xyXG4gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbiB9XHJcbiBcclxuIC5ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ncmF5e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnRuLWJsdWV7ICAgIFxyXG4gICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAud29zdGF0dXN0YWctYmx1ZXtcclxuICAgICBiYWNrZ3JvdW5kOiAjM0M3OEQ4O1xyXG4gICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gfVxyXG4gLndvc3RhdHVzdGFnLXBpbmt7XHJcbiAgICAgYmFja2dyb3VuZDogI0UwNjY2NjtcclxuICAgICBjb2xvcjogI0ZGRkZGRjtcclxuIH1cclxuIC53b3N0YXR1c3RhZy12aW9sZXR7XHJcbiAgICAgYmFja2dyb3VuZDogIzk5MDBGRjtcclxuICAgICBjb2xvcjogI0ZGRkZGRjtcclxuIH1cclxuIC53b3N0YXR1c3RhZy1icm93bntcclxuICAgICBiYWNrZ3JvdW5kOiAjQkY5MDAwO1xyXG4gICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gfVxyXG4gXHJcbiBcclxuIFxyXG4gLmFzc2lnbmVkd29zdGF0dXN0YWctZ3JlZW57XHJcbiAgICAgYmFja2dyb3VuZDogIzAwRkYwMDtcclxuIH1cclxuIC5hc3NpZ25lZHdvc3RhdHVzdGFnLWxibHVle1xyXG4gICAgIGJhY2tncm91bmQ6ICNBNEMyRjQ7XHJcbiB9XHJcbiAuYXNzaWduZWR3b3N0YXR1c3RhZy1vcmFuZ2V7XHJcbiAgICAgYmFja2dyb3VuZDogI0ZGOTkwMDtcclxuIH1cclxuIC5hc3NpZ25lZHdvc3RhdHVzdGFnLXJlZHtcclxuICAgICBiYWNrZ3JvdW5kOiAjRkYwMDAwO1xyXG4gfVxyXG4gLmFzc2lnbmVkd29zdGF0dXN0YWcteWVsbG93e1xyXG4gICAgIGJhY2tncm91bmQ6ICNGRkZGMDA7XHJcbiB9XHJcbiAuYXNzaWduZWR3b3N0YXR1c3RhZy1scGlua3tcclxuICAgICBiYWNrZ3JvdW5kOiAjRTZCOEFGO1xyXG4gfVxyXG4gLmFzc2lnbmVkd29zdGF0dXN0YWctYmx1ZXtcclxuICAgICBiYWNrZ3JvdW5kOiAjMDAwMEZGO1xyXG4gfVxyXG4gXHJcbiBcclxuIC8qIC0tIEdlbmVyYWwgVGFiIC0gR3JvdXAgVGFiIC0tICovXHJcbiAudGV4dC1jZW50ZXJ7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gLmNlbnRlcntcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiAuZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5idG4tZ3JheXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ibHVleyAgICBcclxuICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIC8qIC0tIC9HZW5lcmFsIFRhYiAtIEdyb3VwIFRhYiAtLSAqL1xyXG4gLyogTElTVCBNT0RFICovXHJcbiAuY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH0gXHJcbiBcclxuIC5pdGVte1xyXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gfVxyXG4gLyogL0xJU1QgTU9ERSAqL1xyXG4gXHJcbiBcclxuIC8qIFZJRVcgTU9ERSAqL1xyXG4gLmZvcm0tdGl0bGV7XHJcbiAgICBjb2xvcjogICM1REIyRkY7XHJcbiAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDA7Ki9cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVEQjJGRjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuIH1cclxuIFxyXG4gLm1hbmRhdG9yeXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiB9XHJcbiBcclxuIC5oci1ncmF5eyAgICBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbiB9IFxyXG4gXHJcbiAuYnV0dG9uLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gaW5wdXR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcbiBcclxuIC5tb2Nre1xyXG4gICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5tb2NrLWNvbmZ7XHJcbiAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuaW5wcm9ncmVzc3tcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAudGhyZWUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG4gfVxyXG4gXHJcbiAudGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5jaGVja2JveC1jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5ibHVleyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ncmF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ibHVleyAgICBcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuYWxlcnR7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiB9XHJcbiAuZXJyb3J7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiB9XHJcbiBcclxuIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC53ZWxsLndpdGgtZm9vdGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAvKiAvVklFVyBNT0RFICovXHJcbiBcclxuIFxyXG4gI2RpdmNlbnRlcntcclxuICAgICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgICAgYm9yZGVyLWNvbG9yOiMxZTkwZmY7XHJcbiAgICAgfVxyXG4gICAgICNjaWRcclxuICAgICB7XHJcbiAgICAgcGFkZGluZy1sZWZ0OjkuOGVtIDtcclxuICAgICB9XHJcbiAgICAgI2Zyb21cclxuICAgICB7XHJcbiAgICAgcGFkZGluZy1sZWZ0OjkuOGVtIDtcclxuICAgICB9XHJcbiAgICAgI3RvXHJcbiAgICAge1xyXG4gICAgIHBhZGRpbmctbGVmdDo5LjhlbSA7XHJcbiAgICAgfVxyXG4gXHJcbiAgICAgLnRhYi1jb250ZW50IHtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxuICAgICAgICAgcGFkZGluZzogMXB4IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICBib3gtc2hhZG93OiAxcHggMCAxMHB4IDFweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/proz/equipment/edit-equipmentbooking/edit-equipmentbooking.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/proz/equipment/edit-equipmentbooking/edit-equipmentbooking.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditEquipmentbookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEquipmentbookingComponent", function() { return EditEquipmentbookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global/config */ "./src/global/config.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-completer */ "./node_modules/ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);












var EditEquipmentbookingComponent = /** @class */ (function () {
    function EditEquipmentbookingComponent(beyond, router, http, _Activatedroute, formBuilder, toastr, spinner, completerService) {
        this.beyond = beyond;
        this.router = router;
        this.http = http;
        this._Activatedroute = _Activatedroute;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.spinner = spinner;
        this.completerService = completerService;
        this.catNames = [];
    }
    EditEquipmentbookingComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proData = this.loginData.loginCode;
        this.equipmentBookID = this._Activatedroute.snapshot.paramMap.get("equipmentBookId");
        this.equipmentBookingListOne(this.equipmentBookID);
        this.getBookEquipmentId(this.proData);
        this.getEquipmentName();
        this.listEmployeeDetails();
        this.getListOfStates();
        this.getAllWO();
        //this.dataService = this.completerService.local(this.searchData);
        this.editEquipmentBooking = this.formBuilder.group({
            equipmentBookId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            equipmentRequiresRepair: [false],
            equipmentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            bookByStaff: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            checkOutDate: [_global_config__WEBPACK_IMPORTED_MODULE_5__["Utility"].year + "-" + _global_config__WEBPACK_IMPORTED_MODULE_5__["Utility"].month + "-" + _global_config__WEBPACK_IMPORTED_MODULE_5__["Utility"].day, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            checkOutTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            returnDate: [_global_config__WEBPACK_IMPORTED_MODULE_5__["Utility"].year + "-" + _global_config__WEBPACK_IMPORTED_MODULE_5__["Utility"].month + "-" + _global_config__WEBPACK_IMPORTED_MODULE_5__["Utility"].day, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            returnTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            wO: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            customerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
            describeIssue: [''],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
        });
    };
    Object.defineProperty(EditEquipmentbookingComponent.prototype, "f", {
        get: function () { return this.editEquipmentBooking.controls; },
        enumerable: true,
        configurable: true
    });
    EditEquipmentbookingComponent.prototype.getBookEquipmentId = function (proCode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        //this.http.get(Global.url + '/generateEquipmentID/' + proCode, options)
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/generateEquipmentBookID', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.equipmentBookId = response.equipmentBookId;
            console.log("Equipment number" + _this.equipmentBookId);
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    EditEquipmentbookingComponent.prototype.getEquipmentName = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/equipmentList' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentListDetails = response.response;
                _this.equipmentID = response.response[0].equipmentId;
                //alert(response.response[0].equipmentId)
                //this.equipmentListResponse = true;
            }
            else {
                //this.equipmentListResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    EditEquipmentbookingComponent.prototype.listEmployeeDetails = function () {
        var _this = this;
        this.spinner.show();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/employeeList/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.spinner.hide();
                console.log("employee Details1" + JSON.stringify(response));
                _this.employeeList = response.response;
            }
        });
    };
    EditEquipmentbookingComponent.prototype.getListOfStates = function () {
        var _this = this;
        // this.zipcodeValue = JSON.parse(localStorage.getItem('zipcode'))
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getListOfStates', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.statesData = response.response;
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    EditEquipmentbookingComponent.prototype.onSelected = function (data) {
        var _this = this;
        localStorage.setItem('workOrderNumber', JSON.stringify({
            workOrderNumber: data.target.value
        }));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getWO/' + data.target.value + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.woDetails = response.response;
                _this.editEquipmentBooking.patchValue({
                    equipmentBookId: _this.editEquipmentBooking.value.equipmentBookId,
                    bookByStaff: _this.editEquipmentBooking.value.bookByStaff,
                    equipmentName: _this.editEquipmentBooking.value.equipmentName,
                    equipmentRequiresRepair: _this.editEquipmentBooking.value.equipmentRequiresRepair,
                    checkOutDate: _this.editEquipmentBooking.value.checkOutDate,
                    checkOutTime: _this.editEquipmentBooking.value.checkOutTime,
                    returnDate: _this.editEquipmentBooking.value.returnDate,
                    returnTime: _this.editEquipmentBooking.value.returnTime,
                    wO: _this.editEquipmentBooking.value.wO,
                    customerName: _this.woDetails[0].customerName,
                    address: _this.woDetails[0].address,
                    zip: _this.woDetails[0].zipCode,
                    city: _this.woDetails[0].city,
                    state: _this.woDetails[0].state == undefined ? '' : _this.woDetails[0].state,
                    describeIssue: _this.editEquipmentBooking.value.describeIssue,
                    status: _this.editEquipmentBooking.value.status,
                });
                _this.getAllWO();
            }
            else {
                //this.priceBookServiceResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    EditEquipmentbookingComponent.prototype.getAllWO = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getWO/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.woDetails = response.response;
                console.log("ow details" + JSON.stringify(_this.woDetails));
                for (var i = 0; i < _this.woDetails.length; i++) {
                    //this.options.push(this.categoriesSubCategoriesData[i].categoryName + "-" + this.categoriesSubCategoriesData[i].subcategoryName + " - " + this.categoriesSubCategoriesData[i].catId + " - " + this.categoriesSubCategoriesData[i].subCatId) 
                    _this.catNames.push({
                        "workOrderNumber": _this.woDetails[i].workOrderNumber,
                    });
                    if (i == _this.woDetails.length - 1) {
                        //console.log('This is end of loop ' + JSON.stringify(this.catNames))
                        _this.dataServices = _this.completerService.local(_this.catNames, 'workOrderNumber', 'workOrderNumber');
                        //console.log("data services"+JSON.stringify(this.dataServices))
                    }
                    //this.priceBookServiceResponse = true;
                }
            }
            else {
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    EditEquipmentbookingComponent.prototype.getwO = function (event) {
        //alert("woNumber" + event.target.value)
    };
    EditEquipmentbookingComponent.prototype.equipmentBookingListOne = function (euipmentbookingID) {
        var _this = this;
        //alert(euipmentbookingID)
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/equipmentBookingListOne' + '/' + euipmentbookingID, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentBookingListDetails = response.response;
                _this.editEquipmentBooking = _this.formBuilder.group({
                    equipmentBookId: [_this.equipmentBookingListDetails[0].equipmentBookId, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    bookByStaff: [_this.equipmentBookingListDetails[0].bookByStaff, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    equipmentName: [_this.equipmentBookingListDetails[0].equipmentName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    equipmentRequiresRepair: [_this.equipmentBookingListDetails[0].equipmentRequiresRepair],
                    checkOutDate: [_this.equipmentBookingListDetails[0].checkOutDate, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    checkOutTime: [_this.equipmentBookingListDetails[0].checkOutTime, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    returnDate: [_this.equipmentBookingListDetails[0].returnDate, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    returnTime: [_this.equipmentBookingListDetails[0].returnTime, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    wO: [_this.equipmentBookingListDetails[0].wO, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    customerName: [_this.equipmentBookingListDetails[0].customerName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    address: [_this.equipmentBookingListDetails[0].address, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    zip: [_this.equipmentBookingListDetails[0].zip, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    city: [_this.equipmentBookingListDetails[0].city, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    state: [_this.equipmentBookingListDetails[0].state, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                    describeIssue: [_this.equipmentBookingListDetails[0].describeIssue],
                    status: [_this.equipmentBookingListDetails[0].status, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required],
                });
                _this.finalStatus = _this.equipmentBookingListDetails[0].status;
                //this.getEquipmentSubCategory(this.equipmentBookingListDetails[0].category);
                // this.equipentListResponse = true;
            }
            else {
                //this.equipentListResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    EditEquipmentbookingComponent.prototype.onSubmit = function () {
        if (this.checkOutTimeErrorMsg == 'Invalid Start Time' || this.returnTimeErrorMsg == 'Invalid End Time') {
            return;
        }
        this.submitted = true;
        if (this.editEquipmentBooking.value.equipmentName == '') {
            return;
        }
        else if (this.editEquipmentBooking.value.bookByStaff == '') {
            return;
        }
        else if (this.editEquipmentBooking.value.checkOutDate == '') {
            return;
        }
        else if (this.editEquipmentBooking.value.checkOutTime == '') {
            return;
        }
        else if (this.editEquipmentBooking.value.returnDate == '') {
            return;
        }
        else if (this.editEquipmentBooking.value.returnTime == '') {
            return;
        }
        else if (this.editEquipmentBooking.value.wO == '') {
            return;
        }
        else if (this.editEquipmentBooking.value.customerName == '') {
            return;
        }
        else if (this.editEquipmentBooking.value.address == '') {
            return;
        }
        else if (this.shuduleTiming == "INVALID") {
            console.log("INVALID CONDITION IS CALIING");
            $("#myModal0").modal("show");
            // alert("The technician has already been assigned during this time slot (" + this.addWorkOrder.value.startTime + " -- " + this.addWorkOrder.value.endTime + "). Please choose a different time.")
        }
        else {
            console.log("VALID CONDITION IS CALIING");
            //this.spinner.show();
            console.log("Add Equipment Booking Screen -> Clicked on Save Button - Hide Spinner ::: EB Address and Techs");
            this.saveButton();
            // var employeeRoleList = this.employeeRoleData.filter(val => val.checked == true)
            // if (employeeRoleList.length > 0) {
            //   this.saveTechs()
            // }
            // if (this.employeeIdForService != "" || this.employeeIdForService != null) {
            //   this.savePrimaryTech()
            // }
        }
    };
    EditEquipmentbookingComponent.prototype.saveButton = function () {
        var _this = this;
        if (this.finalStatus == 'Cancel') {
            alert('Status' + '' + this.finalStatus);
        }
        else {
            if (this.editEquipmentBooking.value.equipmentBookId != '' && this.editEquipmentBooking.value.equipmentName != '' && this.editEquipmentBooking.value.status != '') {
                var addObj = {
                    "proId": this.loginData.loginCode,
                    "equipmentBookId": '' + this.equipmentBookID,
                    "equipmentName": '' + this.editEquipmentBooking.value.equipmentName,
                    "bookByStaff": '' + this.editEquipmentBooking.value.bookByStaff,
                    "checkOutDate": '' + this.editEquipmentBooking.value.checkOutDate,
                    "checkOutTime": '' + this.editEquipmentBooking.value.checkOutTime,
                    "returnDate": '' + this.editEquipmentBooking.value.returnDate,
                    "returnTime": '' + this.editEquipmentBooking.value.returnTime,
                    "wO": '' + this.editEquipmentBooking.value.wO,
                    "customerName": '' + this.editEquipmentBooking.value.customerName,
                    "address": '' + this.editEquipmentBooking.value.address,
                    "city": '' + this.editEquipmentBooking.value.city,
                    "state": '' + this.editEquipmentBooking.value.state == undefined ? '' : this.editEquipmentBooking.value.state,
                    "zip": '' + this.editEquipmentBooking.value.zip,
                    "equipmentRequiresRepair": '' + this.editEquipmentBooking.value.equipmentRequiresRepair,
                    "describeIssue": '' + this.editEquipmentBooking.value.describeIssue,
                    "status": '' + this.editEquipmentBooking.value.status,
                };
                console.log("ADD OBJ" + JSON.stringify(addObj));
                this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/editEquipmentBooking', addObj)
                    .subscribe(function (data) {
                    var partInfoData = data.json();
                    if (partInfoData.status == 200) {
                        // alert(200)
                        _this.toastr.success('Equipment Booking updated Successfuly...');
                        //this.listEquipment();
                        _this.router.navigate(['/proz/listEquipmentBooking']);
                    }
                    else {
                    }
                }, function (error) {
                    console.log(error); // Error getting the data
                });
            }
        }
    };
    EditEquipmentbookingComponent.prototype.Oncancel = function () {
        this.router.navigate(['/proz/listEquipmentBooking']);
    };
    EditEquipmentbookingComponent.prototype.getSingleEquipmentName = function (event) {
        this.equipmentName = this.editEquipmentBooking.value.equipmentName;
        //alert(this.equipmentName)
    };
    EditEquipmentbookingComponent.prototype.myFunction = function () {
        var d = new Date(this.editEquipmentBooking.value.checkOutDate);
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        this.n = weekday[d.getDay()];
        console.log("Start DAY ::" + this.n);
    };
    EditEquipmentbookingComponent.prototype.endDate = function () {
        var d = new Date(this.editEquipmentBooking.value.returnDate);
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        this.endDay = weekday[d.getDay()];
        console.log(" End DAY :: " + this.endDay);
    };
    EditEquipmentbookingComponent.prototype.onStartDateSelected = function (startDate) {
        this.myFunction();
        this.endMin = startDate;
        var startTime = this.editEquipmentBooking.value.checkOutTime;
        var endTime = this.editEquipmentBooking.value.returnTime;
        if (startTime) {
            this.onStartTime(startTime);
        }
        if (endTime) {
            this.onEndTime(endTime);
        }
    };
    EditEquipmentbookingComponent.prototype.onEndDateSelected = function (endDate) {
        this.startMax = endDate;
        var startTime = this.editEquipmentBooking.value.checkOutTime;
        var endTime = this.editEquipmentBooking.value.returnTime;
        if (startTime) {
            this.onStartTime(startTime);
        }
        if (endTime) {
            this.onEndTime(endTime);
        }
    };
    EditEquipmentbookingComponent.prototype.onStartTime = function (startTime) {
        this.endDate();
        // if (this.addBookEquipment.value.addPrimaryTech == "NONE") {
        //   return
        // }
        this.equipmentBookingDateTimeSlap();
        //this.getStaffTimeSheduleday()
        console.log(startTime);
        var startDate = this.editEquipmentBooking.value.checkOutDate;
        var endDate = this.editEquipmentBooking.value.returnDate;
        var endTime = this.editEquipmentBooking.value.returnTime;
        if (endDate && endTime) {
            var startDateTime = moment__WEBPACK_IMPORTED_MODULE_11__(startDate + startTime, 'YYYY-MM-DDhh:mm');
            var endDateTime = moment__WEBPACK_IMPORTED_MODULE_11__(endDate + endTime, 'YYYY-MM-DDhh:mm');
            var isAfter = moment__WEBPACK_IMPORTED_MODULE_11__(startDateTime).isAfter(endDateTime);
            var isBefore = moment__WEBPACK_IMPORTED_MODULE_11__(startDateTime).isBefore(endDateTime);
            // console.log("isAfter" + isAfter)
            // console.log("isBefore" + isBefore)
            var time = new Date().getHours() + ':' + new Date().getMinutes();
            if (isAfter === false && isBefore === true) {
                this.checkOutTimeErrorMsg = 'Invalid Start Time';
                ;
            }
            else {
                this.checkOutTimeErrorMsg = '';
            }
            if (moment__WEBPACK_IMPORTED_MODULE_11__(startTime, "HH:mm") < moment__WEBPACK_IMPORTED_MODULE_11__(time, "HH:mm")) {
                alert('The current time is greater than actual time');
                //console.log('The current time is greater than actual time')
                this.checkOutTimeErrorMsg = 'Invalid Start Time';
            }
            else {
                this.checkOutTimeErrorMsg = '';
            }
        }
    };
    EditEquipmentbookingComponent.prototype.onEndTime = function (endTime) {
        // if (this.addBookEquipment.value.addPrimaryTech == "NONE") {
        //   return
        // }
        this.equipmentBookingDateTimeSlap();
        // this.getStaffTimeSheduleday()
        var startDate = this.editEquipmentBooking.value.checkOutDate;
        var startTime = this.editEquipmentBooking.value.checkOutTime;
        var endDate = this.editEquipmentBooking.value.returnDate;
        if (startDate && startTime) {
            var startDateTime = moment__WEBPACK_IMPORTED_MODULE_11__(startDate + startTime, 'YYYY-MM-DDhh:mm');
            var endDateTime = moment__WEBPACK_IMPORTED_MODULE_11__(endDate + endTime, 'YYYY-MM-DDhh:mm');
            var isAfter = moment__WEBPACK_IMPORTED_MODULE_11__(startDateTime).isAfter(endDateTime);
            if (isAfter) {
                this.returnTimeErrorMsg = 'Invalid End Time';
            }
            else {
                this.returnTimeErrorMsg = '';
                this.checkOutTimeErrorMsg = '';
            }
        }
    };
    /* -- Get staffshuduleTimings Data --*/
    EditEquipmentbookingComponent.prototype.equipmentBookingDateTimeSlap = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        //this.techName = this.addWorkOrder.value.addPrimaryTech
        this.techEBstartTime = this.editEquipmentBooking.value.checkOutTime;
        this.techEBEndTime = this.editEquipmentBooking.value.returnTime;
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/EquipmentBookingStartDateTime/' + this.equipmentName + "/" + this.editEquipmentBooking.value.checkOutDate + "/" + this.editEquipmentBooking.value.returnDate + "/" + this.editEquipmentBooking.value.checkOutTime + "/" + this.editEquipmentBooking.value.returnTime, options)
            .subscribe(function (data) {
            var shudule = data.json();
            _this.shuduleTiming = shudule.response;
            console.log("work order Details" + JSON.stringify(_this.shuduleTiming));
            // if (this.shuduleTiming == "INVALID") {
            //   $("#myModal0").modal("show");
            //   // alert("The technician has already been assigned during this time slot (" + this.addWorkOrder.value.startTime + " -- " + this.addWorkOrder.value.endTime + "). Please choose a different time.")
            // }
            // else if (this.shuduleTiming == "VALID") {
            //   alert("Success! : The Time slot is available. You can Proceed")
            // }
        }, function (error) {
            // this.toastr.warning('Unable to connect to server');
        });
    };
    EditEquipmentbookingComponent.prototype.WooverLapCondition = function () {
        console.log("!!!");
        $("#myModal0").modal("hide");
    };
    EditEquipmentbookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-edit-equipmentbooking',
            template: __webpack_require__(/*! ./edit-equipmentbooking.component.html */ "./src/app/proz/equipment/edit-equipmentbooking/edit-equipmentbooking.component.html"),
            styles: [__webpack_require__(/*! ./edit-equipmentbooking.component.scss */ "./src/app/proz/equipment/edit-equipmentbooking/edit-equipmentbooking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            ng2_completer__WEBPACK_IMPORTED_MODULE_10__["CompleterService"]])
    ], EditEquipmentbookingComponent);
    return EditEquipmentbookingComponent;
}());



/***/ }),

/***/ "./src/app/proz/equipment/equipmentbooking-list/equipmentbooking-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/proz/equipment/equipmentbooking-list/equipmentbooking-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home </a>\r\n      </li>\r\n      <!-- <li><a> Equipment List</a></li> -->\r\n      <li class=\"active\">Equipment Booking List</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>Equipment Booking List</h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n  \r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n    <!-- Search By -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"widget\">\r\n          <div class=\"widget-header with-footer header gray\">\r\n            <span class=\"widget-caption\">Search Equipment Booking By</span>\r\n          </div>\r\n          <form [formGroup]=\"searchEquipmentBookValue\">\r\n            <div class=\"widget-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"searchByLbl\">\r\n                      <b>Search By Status</b>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <select class=\"form-control\" formControlName=\"selectBy\" [(ngModel)]=\"chooseSearchBy\"\r\n                      (ngModelChange)=\"equipmentBookSelection(chooseSearchBy)\">\r\n                      <option [value]=\"All\">--Search By--</option>\r\n                      <option value=\"Booked\">Booked</option>                                  \r\n                      <option value=\"In-Use\">In-Use</option>\r\n                      <option value=\"returned\">Returned</option>\r\n                      <option value=\"Cancel\">Cancel</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                \r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    &nbsp;&nbsp;&nbsp;&nbsp; <button type=\"submit\" class=\"btn btn-blue\"\r\n                      (click)=\"searchFunctionality()\"><i class=\"fa fa-search\"></i>&nbsp;\r\n                      Search</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button type=\"submit\" class=\"btn btn-danger\" (click)=\"reset()\"><i class=\"fa fa-repeat\"></i>&nbsp;\r\n                      Reset</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /Search By -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-blue\" (click)=\"addBookEquipment()\"><i class=\"fa fa-user-plus\"></i>&nbsp;\r\n           Book an Equipment</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"widget\">\r\n          <div class=\"widget-header with-footer header gray\">\r\n            <span class=\"widget-caption\"> Equipment Booking List</span>\r\n          </div>\r\n          <div class=\"widget-body\">\r\n            <div  class=\"table-scrollable\">\r\n              <table *ngIf=\"equipmenBooktListResponse\" class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                <thead class=\"flip-content bordered-palegreen\">\r\n                  <tr>\r\n                    <th> Book Id</th>\r\n                    <th>Equipment</th>\r\n                    <th>Staff</th>\r\n                    <th>Start Date</th>\r\n                    <th>Start Time</th>\r\n                    <th>Return Date</th>\r\n                    <th>Return Time</th>\r\n                    <th>WO#</th>\r\n                    <th>Customer</th>\r\n                    <th>Status</th>                   \r\n                    <th>Describe Issue</th>                    \r\n                    <th class=\"text-center\">Edit </th>\r\n                    <th class=\"text-center\">View</th>\r\n                    <th class=\"text-center\">Cancel</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let data of equipmentBookingListDetails | paginate: {itemsPerPage: 10, currentPage:p }\" >\r\n                    <td>\r\n                    <a (click)=\"viewBookEquipments(data.equipmentBookId)\">\r\n                     {{data.equipmentBookId}}\r\n                    </a>\r\n                  </td>\r\n                    <td>\r\n                      {{data.equipmentName}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.bookByStaff}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.checkOutDate}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.checkOutTime}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.returnDate}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.returnTime}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.wO}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.customerName}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.status}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.describeIssue}}\r\n                    </td>\r\n                    <!-- <td>\r\n                      <div class=\"checkbox\" class=\"check\" >\r\n                        <label>\r\n                             <input type=\"checkbox\"  [checked]=\"data.showOnEquipmentBoard == 'true'\" \r\n                                  class=\"colored-success\"  >\r\n                             <span class=\"text\"> </span>\r\n                        </label>\r\n                   </div>\r\n                    </td> -->\r\n\r\n                    <td class=\"center\">\r\n                      <a\r\n                        class=\"btn btn-xs btn-primary shiny\"\r\n                        (click)=\"edit(data.equipmentBookId)\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                      </a>\r\n                    </td>\r\n                      <td class=\"center\">\r\n                        <a\r\n                          class=\"btn btn-xs btn-primary shiny\"\r\n                          (click)=\"Onview(data.equipmentBookId)\">\r\n                          <i class=\"fa fa-eye\"></i>\r\n                        </a>\r\n                    </td>\r\n                    <td class=\"center\">\r\n                      <a class=\"btn btn-xs btn-danger  \" (click)=\"cancelEquipmentBooking(data.equipmentBookId)\">\r\n                        <i class=\"fa fa-trash-o\"></i>\r\n                      </a>\r\n                    </td>\r\n                   \r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <div class=\"row-fluid\" *ngIf=\"equipmenBooktListResponse\">\r\n              <br>\r\n              <pagination-controls class=\"span10\" style=\"float:left\" (pageChange)=\"p = $event\"></pagination-controls>\r\n              <p class=\"span2\" style=\"float:right\">{{equipmentBookingListDetails.length}} Records Found</p>\r\n            </div>\r\n            <div class=\"row-fluid\" *ngIf=\"!equipmenBooktListResponse\">\r\n              <br />\r\n              <div class=\"col-lg-12\">\r\n                <div class=\"col-lg-4\"></div>\r\n                <div class=\"col-lg-4\">\r\n                  <div class=\"span6\"><b style=\"font-size: 25px\">No Records\r\n                      Available</b></div>\r\n                  <div class=\"col-lg-4\">\r\n                   \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                \r\n              </div>\r\n            </div>\r\n\r\n            <br />\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n  <!-- /Page Body -->\r\n  <div id=\"myModal1\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"widget-header blue\">\r\n            <span class=\"widget-caption\"><b>Cancel Equipment Booking</b></span>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <!-- <form> -->\r\n              <br />\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"reasonLbl\" style=\"align-content: center;\">                      \r\n                      <b class=\"popup-text\"> This action will cancel your booking. Do you want to cancel?</b>\r\n                    </label>\r\n                   \r\n                    \r\n                  </div>\r\n                </div>\r\n              </div>              \r\n\r\n              <div class=\"modal-footer\">\r\n                <div class=\"col-lg-3\">\r\n                </div>\r\n                <div class=\"col-lg-3 button-center\">\r\n                  <!-- <button type=\"button\" class=\"btn btn-blue\"  (click)=\"Yes(data.equipmentBookId)\">\r\n                    <i class=\"fa fa-check\"></i>\r\n                    Yes</button> -->\r\n                  <!-- <a class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"Yes(data.equipmentBookId)\">\r\n                    <i class=\"fa fa-check\"></i>\r\n                  </a> -->\r\n                  <button type=\"submit\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"Yes()\"><i class=\"fa fa-check\"></i>\r\n                    Save</button>\r\n                </div>\r\n                <div class=\"col-lg-3 button-center\">\r\n                  <button type=\"button\" class=\"btn btn-blue\" data-dismiss=\"modal\" (click)=\"onCancelOverlap()\"><i\r\n                      class=\"fa fa-times\"></i>\r\n                    No</button>\r\n                </div>\r\n                <div class=\"col-lg-3\">\r\n                </div>\r\n              </div>\r\n            <!-- </form> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/proz/equipment/equipmentbooking-list/equipmentbooking-list.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/proz/equipment/equipmentbooking-list/equipmentbooking-list.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status-active {\n  color: #00FF00;\n  font-weight: bold; }\n\n.status-inactive {\n  color: #FF0000;\n  font-weight: bold; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.wostatustag-blue {\n  background: #3C78D8;\n  color: #FFFFFF; }\n\n.wostatustag-pink {\n  background: #E06666;\n  color: #FFFFFF; }\n\n.wostatustag-violet {\n  background: #9900FF;\n  color: #FFFFFF; }\n\n.wostatustag-brown {\n  background: #BF9000;\n  color: #FFFFFF; }\n\n.assignedwostatustag-green {\n  background: #00FF00; }\n\n.assignedwostatustag-lblue {\n  background: #A4C2F4; }\n\n.assignedwostatustag-orange {\n  background: #FF9900; }\n\n.assignedwostatustag-red {\n  background: #FF0000; }\n\n.assignedwostatustag-yellow {\n  background: #FFFF00; }\n\n.assignedwostatustag-lpink {\n  background: #E6B8AF; }\n\n.assignedwostatustag-blue {\n  background: #0000FF; }\n\n/* -- General Tab - Group Tab -- */\n\n.text-center {\n  text-align: center; }\n\n.center {\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n/* -- /General Tab - Group Tab -- */\n\n/* LIST MODE */\n\n.center {\n  text-align: center; }\n\n.item {\n  text-align: center; }\n\n/* /LIST MODE */\n\n/* VIEW MODE */\n\n.form-title {\n  color: #5DB2FF;\n  /*display: block;\r\n    padding: 8px 0;*/\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\n.button-center {\n  text-align: center; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.alert {\n  background-color: red; }\n\n.error {\n  background-color: red; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.well.with-footer {\n  padding-bottom: 10px !important; }\n\n/* /VIEW MODE */\n\n.modal-dialog {\n  position: relative;\n  scroll-margin-inline-start: 100px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei9lcXVpcG1lbnQvZXF1aXBtZW50Ym9va2luZy1saXN0L0Q6XFxUb3Bwcm96XFxUb3BQcm96X0FkdmFuY2VfQ2xpZW50L3NyY1xcYXBwXFxwcm96XFxlcXVpcG1lbnRcXGVxdWlwbWVudGJvb2tpbmctbGlzdFxcZXF1aXBtZW50Ym9va2luZy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBYztFQUNkLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGVBQWM7RUFDZCxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxvQkFBbUI7RUFDbkIsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLG9CQUFtQjtFQUNuQixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksb0JBQW1CO0VBQ25CLGVBQWMsRUFDakI7O0FBSUQ7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBR0QsbUNBQW1DOztBQUNuQztFQUNJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2Qzs7QUFDRCxvQ0FBb0M7O0FBQ3BDLGVBQWU7O0FBQ2Y7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBaUIsRUFDcEI7O0FBQ0QsZ0JBQWdCOztBQUdoQixlQUFlOztBQUNmO0VBQ0csZUFBZTtFQUNmO3FCQUNpQjtFQUNqQixrQ0FBaUM7RUFDakMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7eUJBQ3NCLEVBQ3ZCOztBQUVEO0VBQ0csa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNqQjs7QUFFRDtFQUNHLHNDQUFxQyxFQUN2Qzs7QUFFRDtFQUNHLG1CQUFrQixFQUNwQjs7QUFFRDtFQUNHLGFBQVksRUFDZDs7QUFFRDtFQUNHLFdBQVU7RUFDVixtQkFBa0IsRUFDcEI7O0FBRUQ7RUFDRyxhQUFZO0VBQ1osbUJBQWtCLEVBQ3BCOztBQUVEO0VBQ0csaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNwQjs7QUFFRDtFQUNHLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzlCLG9DQUFvQyxFQUNyQzs7QUFFRDtFQUNHLG1CQUFrQixFQUNwQjs7QUFFRDtFQUNHLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3BCOztBQUVEO0VBQ0csa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUMzQjs7QUFFRDtFQUNHLHFDQUFvQztFQUNwQyx1QkFBc0I7RUFDdEIsa0JBQWlCLEVBQ25COztBQUVEO0VBQ0csa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUMzQjs7QUFFRDtFQUNHLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdEM7O0FBQ0Q7RUFDSSxzQkFBb0IsRUFDdkI7O0FBQ0Q7RUFDSSxzQkFBb0IsRUFDdkI7O0FBRUQ7RUFDRyxvQ0FBbUMsRUFDckM7O0FBRUQ7RUFDRyxnQ0FBK0IsRUFDakM7O0FBQ0QsZ0JBQWdCOztBQUNoQjtFQUNHLG1CQUFrQjtFQUVsQixrQ0FBaUMsRUFDcEMiLCJmaWxlIjoic3JjL2FwcC9wcm96L2VxdWlwbWVudC9lcXVpcG1lbnRib29raW5nLWxpc3QvZXF1aXBtZW50Ym9va2luZy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy1hY3RpdmV7XHJcbiAgICAgY29sb3I6ICMwMEZGMDA7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiBcclxuIC5zdGF0dXMtaW5hY3RpdmV7XHJcbiAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiBcclxuIC5pbnByb2dyZXNze1xyXG4gICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLnRocmVlLWJvcmRlcmVke1xyXG4gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbiB9XHJcbiBcclxuIC5ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ncmF5e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnRuLWJsdWV7ICAgIFxyXG4gICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAud29zdGF0dXN0YWctYmx1ZXtcclxuICAgICBiYWNrZ3JvdW5kOiAjM0M3OEQ4O1xyXG4gICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gfVxyXG4gLndvc3RhdHVzdGFnLXBpbmt7XHJcbiAgICAgYmFja2dyb3VuZDogI0UwNjY2NjtcclxuICAgICBjb2xvcjogI0ZGRkZGRjtcclxuIH1cclxuIC53b3N0YXR1c3RhZy12aW9sZXR7XHJcbiAgICAgYmFja2dyb3VuZDogIzk5MDBGRjtcclxuICAgICBjb2xvcjogI0ZGRkZGRjtcclxuIH1cclxuIC53b3N0YXR1c3RhZy1icm93bntcclxuICAgICBiYWNrZ3JvdW5kOiAjQkY5MDAwO1xyXG4gICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gfVxyXG4gXHJcbiBcclxuIFxyXG4gLmFzc2lnbmVkd29zdGF0dXN0YWctZ3JlZW57XHJcbiAgICAgYmFja2dyb3VuZDogIzAwRkYwMDtcclxuIH1cclxuIC5hc3NpZ25lZHdvc3RhdHVzdGFnLWxibHVle1xyXG4gICAgIGJhY2tncm91bmQ6ICNBNEMyRjQ7XHJcbiB9XHJcbiAuYXNzaWduZWR3b3N0YXR1c3RhZy1vcmFuZ2V7XHJcbiAgICAgYmFja2dyb3VuZDogI0ZGOTkwMDtcclxuIH1cclxuIC5hc3NpZ25lZHdvc3RhdHVzdGFnLXJlZHtcclxuICAgICBiYWNrZ3JvdW5kOiAjRkYwMDAwO1xyXG4gfVxyXG4gLmFzc2lnbmVkd29zdGF0dXN0YWcteWVsbG93e1xyXG4gICAgIGJhY2tncm91bmQ6ICNGRkZGMDA7XHJcbiB9XHJcbiAuYXNzaWduZWR3b3N0YXR1c3RhZy1scGlua3tcclxuICAgICBiYWNrZ3JvdW5kOiAjRTZCOEFGO1xyXG4gfVxyXG4gLmFzc2lnbmVkd29zdGF0dXN0YWctYmx1ZXtcclxuICAgICBiYWNrZ3JvdW5kOiAjMDAwMEZGO1xyXG4gfVxyXG4gXHJcbiBcclxuIC8qIC0tIEdlbmVyYWwgVGFiIC0gR3JvdXAgVGFiIC0tICovXHJcbiAudGV4dC1jZW50ZXJ7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gLmNlbnRlcntcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiAuZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5idG4tZ3JheXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ibHVleyAgICBcclxuICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIC8qIC0tIC9HZW5lcmFsIFRhYiAtIEdyb3VwIFRhYiAtLSAqL1xyXG4gLyogTElTVCBNT0RFICovXHJcbiAuY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH0gXHJcbiBcclxuIC5pdGVte1xyXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gfVxyXG4gLyogL0xJU1QgTU9ERSAqL1xyXG4gXHJcbiBcclxuIC8qIFZJRVcgTU9ERSAqL1xyXG4gLmZvcm0tdGl0bGV7XHJcbiAgICBjb2xvcjogICM1REIyRkY7XHJcbiAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDA7Ki9cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVEQjJGRjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuIH1cclxuIFxyXG4gLm1hbmRhdG9yeXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiB9XHJcbiBcclxuIC5oci1ncmF5eyAgICBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbiB9IFxyXG4gXHJcbiAuYnV0dG9uLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gaW5wdXR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcbiBcclxuIC5tb2Nre1xyXG4gICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5tb2NrLWNvbmZ7XHJcbiAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuaW5wcm9ncmVzc3tcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAudGhyZWUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG4gfVxyXG4gXHJcbiAudGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5jaGVja2JveC1jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5ibHVleyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ncmF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ibHVleyAgICBcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuYWxlcnR7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiB9XHJcbiAuZXJyb3J7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XHJcbiB9XHJcbiBcclxuIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC53ZWxsLndpdGgtZm9vdGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAvKiAvVklFVyBNT0RFICovXHJcbiAubW9kYWwtZGlhbG9nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIHdpZHRoOiBhdXRvO1xyXG4gICAgc2Nyb2xsLW1hcmdpbi1pbmxpbmUtc3RhcnQ6IDEwMHB4O1xyXG59XHJcbiBcclxuLy8gICNkaXZjZW50ZXJ7XHJcbi8vICAgICAgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG4vLyAgICAgIGJvcmRlci1jb2xvcjojMWU5MGZmO1xyXG4vLyAgICAgIH1cclxuLy8gICAgICAjY2lkXHJcbi8vICAgICAge1xyXG4vLyAgICAgIHBhZGRpbmctbGVmdDo5LjhlbSA7XHJcbi8vICAgICAgfVxyXG4vLyAgICAgICNmcm9tXHJcbi8vICAgICAge1xyXG4vLyAgICAgIHBhZGRpbmctbGVmdDo5LjhlbSA7XHJcbi8vICAgICAgfVxyXG4vLyAgICAgICN0b1xyXG4vLyAgICAgIHtcclxuLy8gICAgICBwYWRkaW5nLWxlZnQ6OS44ZW0gO1xyXG4vLyAgICAgIH1cclxuIFxyXG4vLyAgICAgIC50YWItY29udGVudCB7XHJcbi8vICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbi8vICAgICAgICAgIHBhZGRpbmc6IDFweCAxMnB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDAgMTBweCAxcHggcmdiYSgwLDAsMCwuMyk7XHJcbi8vICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/proz/equipment/equipmentbooking-list/equipmentbooking-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/proz/equipment/equipmentbooking-list/equipmentbooking-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EquipmentbookingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipmentbookingListComponent", function() { return EquipmentbookingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");








var EquipmentbookingListComponent = /** @class */ (function () {
    function EquipmentbookingListComponent(beyond, router, formBuilder, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.searchEquipmentBookValue = this.formBuilder.group({
            Booked: [!'', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            inUse: [null],
            returned: [null],
            selectBy: [null],
        });
    }
    EquipmentbookingListComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proData = this.loginData.loginCode;
        this.getEquipmentBookingList();
        this.getEquipmentBookingListwithStatus();
    };
    EquipmentbookingListComponent.prototype.getEquipmentBookingListwithStatus = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/equipmentbookingList' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentBookingListDetails = response.response;
                var _loop_1 = function (i) {
                    if (_this.equipmentBookingListDetails[i].status == 'Booked') {
                        //alert(this.equipmentBookingListDetails[i].equipmentBookId)
                        // this.returnDate = this.equipmentBookingListDetails[i].returnDate;
                        // this.returnTime = this.equipmentBookingListDetails[i].returnTime;
                        var addObj = {
                            "proId": _this.loginData.loginCode,
                            "equipmentBookId": '' + _this.equipmentBookingListDetails[i].equipmentBookId,
                        };
                        console.log("ADD OBJ" + JSON.stringify(addObj));
                        _this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/statusInUseEquipmentBooking', addObj)
                            .subscribe(function (data) {
                            var response = data.json();
                            if (response.status == 200) {
                                var addObj_1 = {
                                    "proId": _this.loginData.loginCode,
                                    "equipmentBookId": '' + _this.equipmentBookingListDetails[i].equipmentBookId,
                                    "status": '' + 'Booked',
                                };
                                console.log("ADD OBJ" + JSON.stringify(addObj_1));
                                _this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/cancelEquipmentBooking', addObj_1)
                                    .subscribe(function (data) {
                                    var partInfoData = data.json();
                                    if (partInfoData.status == 200) {
                                        // alert(200)
                                        _this.toastr.success('Equipment Booking In_Use Successfuly...');
                                        _this.getEquipmentBookingList();
                                    }
                                    else {
                                    }
                                }, function (error) {
                                    console.log(error); // Error getting the data
                                });
                            }
                            else {
                            }
                        }, function (error) {
                            console.log(error);
                        });
                    }
                    //  if(this.equipmentBookingListDetails[i].status == 'Booked' || this.equipmentBookingListDetails[i].status == 'In-Use')
                    //   {
                    //     let addObj = {
                    //       "proId": this.loginData.loginCode,
                    //       "equipmentBookId": '' + this.equipmentBookingListDetails[i].equipmentBookId,            
                    //     }
                    //     console.log("ADD OBJ" + JSON.stringify(addObj))
                    //     this.http.post(Global.url + '/statusReturnEquipmentBooking' , addObj)
                    //       .subscribe(data => {
                    //         var response = data.json();
                    //         if (response.status == 200) {
                    //           let addObj4 = {
                    //             "proId": this.loginData.loginCode,
                    //             "equipmentBookId": '' + this.equipmentBookingListDetails[i].equipmentBookId,
                    //             "status": '' + 'Returned', 
                    //           }
                    //           console.log("ADD OBJ" + JSON.stringify(addObj4))
                    //           this.http.post(Global.url + '/cancelEquipmentBooking' , addObj4)
                    //             .subscribe(data => {
                    //               var partInfoData = data.json();
                    //               if (partInfoData.status == 200) {
                    //                // alert(200)
                    //                 this.toastr.success('Equipment Booking Return Successfuly...');
                    //                 this.getEquipmentBookingList()
                    //               } else {
                    //               }
                    //             }, error => {
                    //               console.log(error);// Error getting the data
                    //             });
                    //          }
                    //       else {
                    //         }
                    //       }, error => {
                    //         console.log(error);
                    //       });
                    //   }
                };
                for (var i = 0; i < _this.equipmentBookingListDetails.length; i++) {
                    _loop_1(i);
                }
                _this.getEquipmentBookingList();
            }
        });
    };
    EquipmentbookingListComponent.prototype.getEquipmentBookingList = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/equipmentbookingList' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentBookingListDetails = response.response;
                _this.equipmentBookId = response.response[0].equipmentBookId;
                _this.equipmenBooktListResponse = true;
            }
            else {
                _this.equipmentBookingListDetails = null;
                _this.equipmenBooktListResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    EquipmentbookingListComponent.prototype.equipmentBookSelection = function (chooseSearchBy) {
        this.searchStatus = chooseSearchBy;
    };
    EquipmentbookingListComponent.prototype.searchFunctionality = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/searchByEquipmentBook/' + this.searchStatus + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentBookingListDetails = response.response;
                //console.log("searchInventoryData values" + JSON.stringify(this.inventoryListDetails))
                _this.equipmenBooktListResponse = true;
                _this.searchEquipmentBookValue.reset();
            }
            else {
                _this.equipmentBookingListDetails = null;
                _this.equipmenBooktListResponse = false;
            }
        });
        this.searchEquipmentBookValue.value.selectBy = this.searchStatus;
    };
    EquipmentbookingListComponent.prototype.reset = function () {
        this.searchEquipmentBookValue.reset();
        this.getEquipmentBookingList();
    };
    EquipmentbookingListComponent.prototype.addBookEquipment = function () {
        this.router.navigate(['/proz/bookEquipment']);
    };
    EquipmentbookingListComponent.prototype.edit = function (equipmentBookId) {
        this.router.navigate(['/proz/editEquipmentBooking', equipmentBookId]);
    };
    EquipmentbookingListComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    EquipmentbookingListComponent.prototype.Onview = function (equipmentID) {
        this.router.navigate(['/proz/viewEquipmentBooking/', equipmentID]);
    };
    EquipmentbookingListComponent.prototype.viewBookEquipments = function (equipmentID) {
        this.router.navigate(['/proz/viewEquipmentBooking', equipmentID]);
    };
    EquipmentbookingListComponent.prototype.cancelEquipmentBooking = function (equipmentID) {
        this.equipmentBookId = equipmentID;
        $("#myModal1").modal("show");
    };
    EquipmentbookingListComponent.prototype.Yes = function () {
        var _this = this;
        //alert(this.equipmentBookId)
        var addObj = {
            "proId": this.loginData.loginCode,
            "equipmentBookId": '' + this.equipmentBookId,
            "status": '' + 'Cancel',
        };
        console.log("ADD OBJ" + JSON.stringify(addObj));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_5__["Global"].url + '/cancelEquipmentBooking', addObj)
            .subscribe(function (data) {
            var partInfoData = data.json();
            if (partInfoData.status == 200) {
                // alert(200)
                _this.toastr.success('Equipment Booking Canceled Successfuly...');
                _this.getEquipmentBookingList();
            }
            else {
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    EquipmentbookingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-equipmentbooking-list',
            template: __webpack_require__(/*! ./equipmentbooking-list.component.html */ "./src/app/proz/equipment/equipmentbooking-list/equipmentbooking-list.component.html"),
            styles: [__webpack_require__(/*! ./equipmentbooking-list.component.scss */ "./src/app/proz/equipment/equipmentbooking-list/equipmentbooking-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], EquipmentbookingListComponent);
    return EquipmentbookingListComponent;
}());



/***/ }),

/***/ "./src/app/proz/equipment/view-equipmentbooking/view-equipmentbooking.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/proz/equipment/view-equipmentbooking/view-equipmentbooking.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <!-- <li>\r\n            <a>Equipment</a>\r\n          </li> -->\r\n          <li>\r\n            <a (click)=\"list()\">List of Equipment Booking</a>\r\n          </li>\r\n          <li class=\"active\">View Equipment Booking</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>View Equipment Booking</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n\r\n      <div class=\"page-body\">\r\n        <div *ngFor=\"let data of equipmentBookingListDetails\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                      <div class=\"well with-header with-footer three-bordered\">\r\n                        <div class=\"header gray\">\r\n                          View Equipment Booking\r\n                        </div>\r\n                        <div id=\"registeration-form\" >\r\n\r\n                          <!-- View  Equipment Part -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"idLbl\">\r\n                                  <b>Equipment Book ID </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.equipmentBookId}}\r\n                                <!-- P-1000101 -->\r\n                                <!-- <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" value=\"{{partID}}\"\r\n                                    formControlName=\"partId\" readonly>\r\n                                </span> -->\r\n                              </div>\r\n                            </div>                            \r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"Add PictureLbl\">\r\n                                  <b>Equipment Requires Repair </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <div class=\"checkbox\">\r\n                                     <label>\r\n                                          <input type=\"checkbox\" [checked]=\"data.equipmentRequiresRepair == 'true'\" disabled\r\n                                               class=\"colored-success\" >\r\n                                          <span class=\"text\"> </span>\r\n                                     </label>\r\n                                </div>\r\n                           </div>\r\n                            </div>\r\n                            \r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b> Equipment Name  </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.equipmentName}}\r\n                                 <!-- Hydojetter -->\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"vendorLbl\">\r\n                                  <b>Book by Staff </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.bookByStaff}}\r\n                              </div>\r\n                            </div>\r\n                            \r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"costPerUnitLbl\">\r\n                                  <b> Check Out Date</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.checkOutDate}}\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-lg-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"stateLbl\">\r\n                                  <b>Check Out Time</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-lg-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.checkOutTime}}\r\n                              </div>\r\n                            </div>\r\n                            \r\n                          </div>\r\n                         \r\n\r\n                          <div class=\"row\">\r\n                            \r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"subcategoryLbl\">\r\n                                  <b>Return Date</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.returnDate}}\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"subcategoryLbl\">\r\n                                  <b>Return Time</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.returnTime}}\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b> WO# </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              {{data.wO}}\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b>Customer Name </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.customerName}}\r\n\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"sizeLbl\">\r\n                                  <b>Customer Name\r\n                                  </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.address}}\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"colorLbl\">\r\n                                  <b>City</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              {{data.city}}\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"maincategoryLbl\">\r\n                                  <b> State </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.state}}\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"subcategoryLbl\">\r\n                                  <b>Zip Code</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.zip}}\r\n                              </div>\r\n                            </div>\r\n\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"maincategoryLbl\">\r\n                                  <b> Describe Issue </b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.describeIssue}}\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"yearLbl\">\r\n                                  <b>Status</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                {{data.status}}\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          \r\n                          <br />\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-4\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                           \r\n                            <div class=\"col-lg-3 button-center\">\r\n                              <button type=\"submit\" class=\"btn btn-success\" (click)=\"Onedit(data.equipmentBookId)\"><i class=\"fa fa-check\"></i>\r\n                                Edit</button>\r\n                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\r\n                                <button type=\"submit\" class=\"btn btn-danger\" (click)=\"Oncancel()\"><i class=\"fa fa-times\"></i>\r\n                                  Cancel</button>\r\n                            </div>\r\n                            \r\n                \r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <br />\r\n                         \r\n                          <!-- </form> -->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->\r\n"

/***/ }),

/***/ "./src/app/proz/equipment/view-equipmentbooking/view-equipmentbooking.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/proz/equipment/view-equipmentbooking/view-equipmentbooking.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".databox .databox-text {\n  display: block;\n  font-size: 11px;\n  margin: 4px 0 2px;\n  position: relative;\n  width: 100px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.item {\n  text-align: center; }\n\n.label {\n  font-size: 13px !important; }\n\n.label-wo-assigned {\n  background-color: #3C78D8 !important;\n  color: #FFFFFF !important; }\n\n.label-wo-unassigned {\n  background-color: #E06666 !important;\n  color: #FFFFFF !important; }\n\n.check {\n  margin-left: 5em; }\n\n.label-wo-holding {\n  background-color: #9900FF !important;\n  color: #FFFFFF !important; }\n\n.label-wo-cancelled {\n  background-color: #BF9000 !important;\n  color: #FFFFFF !important; }\n\n.label-awo-scheduled {\n  background-color: #00FF00 !important;\n  color: #000000 !important; }\n\n.label-awo-inprogress {\n  background-color: #A4C2F4 !important;\n  color: #000000 !important; }\n\n.label-awo-invoiced {\n  background-color: #FF9900 !important;\n  color: #000000 !important; }\n\n.label-awo-cancelled {\n  background-color: #FF0000 !important;\n  color: #000000 !important; }\n\n.label-awo-recall {\n  background-color: #FFFF00 !important;\n  color: #000000 !important; }\n\n.label-awo-estimate {\n  background-color: #E6B8AF !important;\n  color: #000000 !important; }\n\n.label-awo-pause {\n  background-color: #0000FF !important;\n  color: #FFFFFF !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei9lcXVpcG1lbnQvdmlldy1lcXVpcG1lbnRib29raW5nL0Q6XFxUb3Bwcm96XFxUb3BQcm96X0FkdmFuY2VfQ2xpZW50L3NyY1xcYXBwXFxwcm96XFxlcXVpcG1lbnRcXHZpZXctZXF1aXBtZW50Ym9va2luZ1xcdmlldy1lcXVpcG1lbnRib29raW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBYztFQUNkLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0csa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkM7O0FBRUE7RUFDSSxtQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDRyxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzNCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0cscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFFQTtFQUNHLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1QiIsImZpbGUiOiJzcmMvYXBwL3Byb3ovZXF1aXBtZW50L3ZpZXctZXF1aXBtZW50Ym9va2luZy92aWV3LWVxdWlwbWVudGJvb2tpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YWJveCAuZGF0YWJveC10ZXh0IHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgbWFyZ2luOiA0cHggMCAycHg7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmJ0bi1ncmF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ibHVleyAgICBcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuIFxyXG4gLml0ZW17XHJcbiAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiB9XHJcblxyXG4gLmxhYmVse1xyXG4gICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5sYWJlbC13by1hc3NpZ25lZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQzc4RDggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmxhYmVsLXdvLXVuYXNzaWduZWR7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UwNjY2NiAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuY2hlY2t7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDVlbTtcclxuIH1cclxuXHJcbiAubGFiZWwtd28taG9sZGluZ3tcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkwMEZGICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAubGFiZWwtd28tY2FuY2VsbGVke1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNCRjkwMDAgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5sYWJlbC1hd28tc2NoZWR1bGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwRkYwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuIC5sYWJlbC1hd28taW5wcm9ncmVzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNEMyRjQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1hd28taW52b2ljZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5OTAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtYXdvLWNhbmNlbGxlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1hd28tcmVjYWxse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkYwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLWF3by1lc3RpbWF0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkI4QUYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1hd28tcGF1c2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMEZGICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/proz/equipment/view-equipmentbooking/view-equipmentbooking.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/proz/equipment/view-equipmentbooking/view-equipmentbooking.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ViewEquipmentbookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEquipmentbookingComponent", function() { return ViewEquipmentbookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");






var ViewEquipmentbookingComponent = /** @class */ (function () {
    function ViewEquipmentbookingComponent(beyond, router, http, _Activatedroute) {
        this.beyond = beyond;
        this.router = router;
        this.http = http;
        this._Activatedroute = _Activatedroute;
    }
    ViewEquipmentbookingComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proData = this.loginData.loginCode;
        this.equipmentBookId = this._Activatedroute.snapshot.paramMap.get("equipmentBookId");
        this.equipmentBookingListOne(this.equipmentBookId);
    };
    ViewEquipmentbookingComponent.prototype.equipmentBookingListOne = function (equipmentBookId) {
        var _this = this;
        //alert(this.euipmentID)
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        //this.http.get(Global.url + '/equipmentListOne/'  + '/' + euipmentID, options)
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/equipmentBookingListOne' + '/' + equipmentBookId, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.equipmentBookingListDetails = response.response;
                _this.equipentBookingListResponse = true;
            }
            else {
                _this.equipentBookingListResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    ViewEquipmentbookingComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    ViewEquipmentbookingComponent.prototype.Onedit = function (equipmentBookId) {
        this.router.navigate(['/proz/editEquipmentBooking', equipmentBookId]);
    };
    ViewEquipmentbookingComponent.prototype.Oncancel = function () {
        this.router.navigate(['/proz/listEquipmentBooking']);
    };
    ViewEquipmentbookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-view-equipmentbooking',
            template: __webpack_require__(/*! ./view-equipmentbooking.component.html */ "./src/app/proz/equipment/view-equipmentbooking/view-equipmentbooking.component.html"),
            styles: [__webpack_require__(/*! ./view-equipmentbooking.component.scss */ "./src/app/proz/equipment/view-equipmentbooking/view-equipmentbooking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewEquipmentbookingComponent);
    return ViewEquipmentbookingComponent;
}());



/***/ }),

/***/ "./src/app/proz/feedback/feedback.component.html":
/*!*******************************************************!*\
  !*** ./src/app/proz/feedback/feedback.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- <app-prozadmin-sidemenu></app-prozadmin-sidemenu> -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a href=\"#\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">Invoices</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">View Invoice</a>\r\n          </li>\r\n          <li class=\"active\">Feedback</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Feedback</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!--Container-->\r\n      <div class=\"container\">\r\n        <div class=\"body\">\r\n\r\n          <!-- Row1 -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n              <!-- Page Body -->\r\n              <div class=\"page-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                        <h2 class=\"text-green\">Thank you note specified in PRO settings</h2>\r\n                      </div>\r\n                    </div>\r\n                    <br />\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                        <p class=\"text-left\"> 1) Are you happy with the services you received from Red Hat Plumbing?</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                        <div class=\"col-sm-4\"></div>\r\n                        <!-- <div id=\"emotion\">\r\n                        <div class=\"col-sm-2\">\r\n\r\n                          <a><img style=\"height:100px;width:100px\" src=\"/assets/img/proz/happy.jpg\" alt=\"happy_logo\"\r\n                              class=\"logo\" /></a>\r\n\r\n                          <div class=\"button\">\r\n                            <input type=\"radio\" name=\"happy\" id=\"happy\" value=\"happy\">Happy<br>\r\n\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-2\">\r\n\r\n                          <a><img style=\"height:100px;width:100px\" src=\"/assets/img/proz/sad.jpg\" alt=\"sad_logo\"\r\n                              class=\"logo\" /></a>\r\n                          <div class=\"button\">\r\n                            <input type=\"radio\" name=\"sad\" id=\"sad\" value=\"sad\">Sad<br>\r\n                          </div>\r\n                        </div>\r\n                      </div> -->\r\n                        <div class=\"col-sm-4\">\r\n                          <div id=\"emotion\">\r\n                            <input type=\"radio\" name=\"emotion\" id=\"happy\" />\r\n\r\n                            <label for=\"happy\"><img style=\"height:100px;width:100px\" src=\"/assets/img/proz/happy3.png\"\r\n                                alt=\"I'm happy\" /></label>\r\n                            &nbsp;&nbsp;\r\n\r\n                            <input type=\"radio\" name=\"emotion\" id=\"sad\" />\r\n                            <label for=\"sad\"><img style=\"height:100px;width:100px\" src=\"/assets/img/proz/sad5.png\"\r\n                                alt=\"I'm sad\" /></label>\r\n\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\"></div>\r\n\r\n                      </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-12\">\r\n                        <p class=\"text-left\">2) Please rate \"Sadhana\"</p>\r\n                      </div>\r\n                    </div>\r\n                    <br />\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                        <div class=\"col-sm-1\"></div>\r\n                        <div class=\"col-sm-7\">\r\n                          <label class=\"text\">Did “Sadhana” show up on Time</label>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n\r\n                          <select class=\"form-control\" id=\"selectRating\" name=\"status\" data-bv-field=\"row-title\"\r\n                            formControlName=\"selectRating\" value=\"0\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.selectMonth.errors }\" required>\r\n                            <option value=\"\">--Select--</option>\r\n                            <option value=\"1\">1</option>\r\n                            <option value=\"2\">2</option>\r\n                            <option value=\"3\">3</option>\r\n                            <option value=\"4\">4</option>\r\n                            <option value=\"5\">5</option>\r\n                            <option value=\"6\">6</option>\r\n                            <option value=\"7\">7</option>\r\n                            <option value=\"8\">8</option>\r\n                            <option value=\"9\">9</option>\r\n                            <option value=\"10\">10</option>\r\n                          </select>\r\n                          <div *ngIf=\"submitted && f.selectRating.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.selectRating.errors.required\">\r\n                              <p style=\"color: red;  font-size: 11px\">* Select Rating</p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                        <div class=\"col-sm-1 \"></div>\r\n                        <div class=\"col-sm-7 \">\r\n                          <label class=\"text\">Did \"Sadhana\" look Professional?</label>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                          <select class=\"form-control\" id=\"selectRating\" name=\"status\" data-bv-field=\"row-title\"\r\n                            formControlName=\"selectRating\" value=\"0\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.selectMonth.errors }\" required>\r\n                            <option value=\"\">--Select--</option>\r\n                            <option value=\"1\">1</option>\r\n                            <option value=\"2\">2</option>\r\n                            <option value=\"3\">3</option>\r\n                            <option value=\"4\">4</option>\r\n                            <option value=\"5\">5</option>\r\n                            <option value=\"6\">6</option>\r\n                            <option value=\"7\">7</option>\r\n                            <option value=\"8\">8</option>\r\n                            <option value=\"9\">9</option>\r\n                            <option value=\"10\">10</option>\r\n                          </select>\r\n                          <div *ngIf=\"submitted && f.selectRating.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.selectRating.errors.required\">\r\n                              <p style=\"color: red;  font-size: 11px\">* Select Rating</p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                        <div class=\"col-sm-1 \"></div>\r\n                        <div class=\"col-sm-7 \">\r\n                          <label class=\"text-left\">Did “Sadhana” Communicate properly?</label>\r\n\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                          <select class=\"form-control\" id=\"selectRating\" name=\"status\" data-bv-field=\"row-title\"\r\n                            formControlName=\"selectRating\" value=\"0\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.selectMonth.errors }\" required>\r\n                            <option value=\"\">--Select--</option>\r\n                            <option value=\"1\">1</option>\r\n                            <option value=\"2\">2</option>\r\n                            <option value=\"3\">3</option>\r\n                            <option value=\"4\">4</option>\r\n                            <option value=\"5\">5</option>\r\n                            <option value=\"6\">6</option>\r\n                            <option value=\"7\">7</option>\r\n                            <option value=\"8\">8</option>\r\n                            <option value=\"9\">9</option>\r\n                            <option value=\"10\">10</option>\r\n                          </select>\r\n                          <div *ngIf=\"submitted && f.selectRating.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.selectRating.errors.required\">\r\n                              <p style=\"color: red;  font-size: 11px\">* Select Rating</p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                        <div class=\"col-sm-1 \"></div>\r\n                        <div class=\"col-sm-7 \">\r\n                          <label class=\"text1\">Total Score</label>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                          <input type=\"text\" style=\"text-align: center;\" placeholder=\"4\" value=\"4\"\r\n                            class=\"form-control input-sm text2\" readonly formcontrolName=\"totalScore\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <br />\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\"></div>\r\n                      </div>\r\n                      <div class=\"col-sm-2\">\r\n                        <div class=\"form-group\">\r\n                          <button type=\"submit\" (click)=\"skipButton()\" class=\"btn btn-gray\"><i\r\n                              class=\"fa fa-arrow-left\"></i>\r\n                            Skip</button>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-2\">\r\n                        <div class=\"form-group\">\r\n                          <button type=\"submit\" (click)=\"continue()\" class=\"btn btn-success\">\r\n                            Continue <i class=\"fa fa-arrow-right\"></i></button>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-4\">\r\n                        <div class=\"form-group\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- /Page Body -->\r\n              </div>\r\n\r\n              <!-- /Page Body -->\r\n            </div>\r\n          </div>\r\n          <!-- /Row1 -->\r\n        </div>\r\n      </div>\r\n      <!--/Container-->\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/proz/feedback/feedback.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/proz/feedback/feedback.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".boxed {\n  border: 1px solid blue;\n  margin-left: 12px;\n  margin-right: 12px;\n  text-align: justify;\n  text-justify: inter-word; }\n\n.page-body {\n  background: #ffffff !important;\n  padding: 18px 20px 24px !important; }\n\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.input_hidden {\n  position: absolute;\n  left: -9999px; }\n\n.selected {\n  background-color: #fae208;\n  border-radius: 50%; }\n\n#emotion label {\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 50%; }\n\n#emotion label img {\n  padding: 1px;\n  border-radius: 50%; }\n\n.body {\n  background-color: white; }\n\n.row {\n  margin-right: 30px; }\n\nh1 {\n  font-weight: bold !important;\n  font-size: 20px;\n  color: blue; }\n\nh2 u {\n  font-weight: bold !important;\n  font-size: 15px;\n  color: #20a6e4; }\n\np {\n  font-size: 16px;\n  color: black; }\n\nu {\n  font-weight: bold !important;\n  font-size: 25px;\n  color: orange;\n  padding-right: 180px; }\n\nh3 {\n  font-size: 18px;\n  color: orangered; }\n\n.side {\n  border-left: 1px solid #003cff;\n  padding: 10px 40px; }\n\n.side p {\n  color: orange;\n  font-size: 15px; }\n\n.side h2 {\n  color: grey;\n  font-size: 15px;\n  font-weight: bold !important;\n  line-height: 20px; }\n\n.side h4 {\n  color: black;\n  font-size: 20px; }\n\n.showcase h5 {\n  font-size: 20px;\n  color: black; }\n\n.showcase h5 button {\n  float: right;\n  color: white;\n  border-radius: 20px;\n  border: 1px solid #ffffff;\n  font-weight: bold !important;\n  margin: 35px; }\n\n.side h4 button {\n  float: right;\n  color: white;\n  border-radius: 20px;\n  border: 1px solid #ffffff;\n  font-weight: bold !important;\n  margin: 35px; }\n\n.green p {\n  font-size: 25px;\n  font-weight: bold;\n  text-align: center;\n  color: green;\n  padding: 30px 0px;\n  margin: 10px 0px 0px 20px;\n  line-height: 30px; }\n\n.grid-image .grid-right-image img {\n  height: 200px !important; }\n\n.img-responsive {\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto; }\n\n.img-responsive .maps {\n  height: 200px !important;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto; }\n\n/* .img button{\r\n  color: white;\r\n  border: 1px solid #ffffff;\r\n  font-weight: bold !important;    \r\n width:200px;\r\n} */\n\n.form-control, select {\n  font-size: 13px !important;\n  color: #858585 !important;\n  background-color: #fbfbfb !important;\n  border: 1px solid #d5d5d5 !important;\n  padding: 1px 4px !important; }\n\n.text-green {\n  text-align: center !important;\n  color: green !important;\n  font-weight: bold !important; }\n\n.text {\n  font-size: 14px !important; }\n\n.text1 {\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n.text2 {\n  font-size: 16px !important;\n  font-weight: bold !important;\n  color: green !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei9mZWVkYmFjay9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxccHJvelxcZmVlZGJhY2tcXGZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssdUJBQXVCO0VBQ3ZCLGtCQUFnQjtFQUNoQixtQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLHlCQUF3QixFQUV6Qjs7QUFFRjtFQUNFLCtCQUE4QjtFQUM5QixtQ0FBa0MsRUFDckM7O0FBQ0Q7RUFDRSxpQkFBZ0IsRUFFakI7O0FBQ0Q7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsY0FBYSxFQUNkOztBQUVEO0VBQ0UsMEJBQWtDO0VBQ2xDLG1CQUFpQixFQUNsQjs7QUFFRDtFQUNFLHNCQUFxQjtFQUNyQixnQkFBZTtFQUNmLG1CQUFpQixFQUNsQjs7QUFFRDtFQUNFLGFBQVk7RUFDWixtQkFBaUIsRUFDbEI7O0FBSUQ7RUFDRSx3QkFBc0IsRUFDdkI7O0FBQ0Q7RUFDRSxtQkFBaUIsRUFDbEI7O0FBQ0Q7RUFDRSw2QkFBMkI7RUFDM0IsZ0JBQWM7RUFDZCxZQUFVLEVBRVg7O0FBQ0Q7RUFDRSw2QkFBMkI7RUFDM0IsZ0JBQWM7RUFDZCxlQUF1QixFQUN4Qjs7QUFDRDtFQUVFLGdCQUFjO0VBRWQsYUFBVyxFQUNaOztBQUNEO0VBQ0UsNkJBQTRCO0VBQzVCLGdCQUFjO0VBQ2QsY0FBWTtFQUNaLHFCQUFtQixFQUVwQjs7QUFDRDtFQUVFLGdCQUFjO0VBQ2QsaUJBQWUsRUFDaEI7O0FBQ0Q7RUFDRSwrQkFBc0M7RUFDeEMsbUJBQWlCLEVBQ2hCOztBQUNEO0VBQ0UsY0FBWTtFQUNaLGdCQUFjLEVBQ2Y7O0FBQ0Q7RUFDRSxZQUFVO0VBQ1YsZ0JBQWM7RUFDZCw2QkFBMkI7RUFDM0Isa0JBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsYUFBVztFQUNYLGdCQUFjLEVBRWY7O0FBQ0Q7RUFDRSxnQkFBYztFQUNkLGFBQVcsRUFDWjs7QUFDRDtFQUNFLGFBQVc7RUFDWCxhQUFZO0VBQ1osb0JBQW1CO0VBQ25CLDBCQUF5QjtFQUN6Qiw2QkFBNEI7RUFDNUIsYUFBWSxFQUNiOztBQUNEO0VBRUUsYUFBVztFQUNYLGFBQVk7RUFDWixvQkFBbUI7RUFDbkIsMEJBQXlCO0VBQ3pCLDZCQUE0QjtFQUM1QixhQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQiwwQkFBeUI7RUFDekIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UseUJBQXdCLEVBQ3pCOztBQUNEO0VBQ0UsWUFBVTtFQUNWLG1CQUFpQjtFQUNqQixrQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSx5QkFBd0I7RUFDeEIsWUFBVTtFQUNWLG1CQUFpQjtFQUNqQixrQkFBZ0IsRUFDakI7O0FBRUQ7Ozs7O0lBS0k7O0FBRUo7RUFDRSwyQkFBMEI7RUFDMUIsMEJBQXlCO0VBQ3pCLHFDQUFvQztFQUNwQyxxQ0FBb0M7RUFDcEMsNEJBQTJCLEVBQzVCOztBQUVEO0VBQ0UsOEJBQTJCO0VBQzNCLHdCQUFzQjtFQUN0Qiw2QkFBMkIsRUFDNUI7O0FBRUQ7RUFDRSwyQkFBMEIsRUFDM0I7O0FBQ0Q7RUFDRSwyQkFBMEI7RUFDMUIsNkJBQTJCLEVBQzVCOztBQUNEO0VBQ0UsMkJBQTBCO0VBQzFCLDZCQUEyQjtFQUMzQix3QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvcHJvei9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3hlZCB7XHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZSA7XHJcbiAgICAgbWFyZ2luLWxlZnQ6MTJweDtcclxuICAgICBtYXJnaW4tcmlnaHQ6MTJweDtcclxuICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxuXHJcbiAgIH1cclxuXHJcbiAgLnBhZ2UtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDIwcHggMjRweCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiBcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXRfaGlkZGVuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTk5OTlweDtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyMjYsIDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6NTAlO1xyXG59XHJcblxyXG4jZW1vdGlvbiBsYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOjUwJTtcclxufVxyXG5cclxuI2Vtb3Rpb24gbGFiZWwgaW1nIHtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbn1cclxuXHJcblxyXG5cclxuLmJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG4ucm93e1xyXG4gIG1hcmdpbi1yaWdodDozMHB4O1xyXG59XHJcbmgxe1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6MjBweDtcclxuICBjb2xvcjpibHVlO1xyXG5cclxufVxyXG5oMiB1e1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6MTVweDtcclxuICBjb2xvcjpyZ2IoMzIsIDE2NiwgMjI4KTtcclxufVxyXG5we1xyXG4gXHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgLy8gZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG51IHtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZToyNXB4O1xyXG4gIGNvbG9yOm9yYW5nZTtcclxuICBwYWRkaW5nLXJpZ2h0OjE4MHB4O1xyXG4gIFxyXG59XHJcbmgzIHtcclxuICBcclxuICBmb250LXNpemU6MThweDtcclxuICBjb2xvcjpvcmFuZ2VyZWQ7XHJcbn1cclxuLnNpZGV7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMCwgNjAsIDI1NSk7XHJcbnBhZGRpbmc6MTBweCA0MHB4O1xyXG59XHJcbi5zaWRlIHB7XHJcbiAgY29sb3I6b3JhbmdlO1xyXG4gIGZvbnQtc2l6ZToxNXB4O1xyXG59XHJcbi5zaWRlIGgye1xyXG4gIGNvbG9yOmdyZXk7XHJcbiAgZm9udC1zaXplOjE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OjIwcHg7XHJcbn1cclxuLnNpZGUgaDR7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbiAgXHJcbn1cclxuLnNob3djYXNlIGg1IHtcclxuICBmb250LXNpemU6MjBweDtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG4uc2hvd2Nhc2UgaDUgYnV0dG9ue1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsgICAgXHJcbiAgbWFyZ2luOiAzNXB4O1xyXG59XHJcbi5zaWRlIGg0IGJ1dHRvbntcclxuIFxyXG4gIGZsb2F0OnJpZ2h0OyAgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyBcclxuICBtYXJnaW46MzVweDsgICBcclxufVxyXG4uZ3JlZW4gcHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBwYWRkaW5nOiAzMHB4IDBweDtcclxuICBtYXJnaW46IDEwcHggMHB4IDBweCAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZ3JpZC1pbWFnZSAuZ3JpZC1yaWdodC1pbWFnZSBpbWd7XHJcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbWctcmVzcG9uc2l2ZXtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OmF1dG87XHJcbn1cclxuXHJcbi5pbWctcmVzcG9uc2l2ZSAubWFwc3tcclxuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICBtYXJnaW4tbGVmdDphdXRvO1xyXG59XHJcblxyXG4vKiAuaW1nIGJ1dHRvbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyAgICBcclxuIHdpZHRoOjIwMHB4O1xyXG59ICovXHJcblxyXG4uZm9ybS1jb250cm9sLCBzZWxlY3Qge1xyXG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjODU4NTg1ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ1ZDUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxcHggNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWdyZWVuIHtcclxuICB0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6Z3JlZW4gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0MXtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQye1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtcclxuICBjb2xvcjpncmVlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWdyYXl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/proz/feedback/feedback.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/proz/feedback/feedback.component.ts ***!
  \*****************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_radiobutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/radiobutton */ "./src/utilities/radiobutton.ts");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(beyond, radio, router, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.radio = radio;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.radio.radiobutton();
        this.beyond.beyondAdmin();
    };
    FeedbackComponent.prototype.skipButton = function () {
        this.router.navigate(['/invoice/viewInvoice']);
    };
    FeedbackComponent.prototype.continue = function () {
        this.toastr.success('Thanks for your valuable feedback');
        this.router.navigate(['/invoice/viewInvoice']);
    };
    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_radiobutton__WEBPACK_IMPORTED_MODULE_2__["Radio"], _utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"]],
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/proz/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.scss */ "./src/app/proz/feedback/feedback.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"],
            _utilities_radiobutton__WEBPACK_IMPORTED_MODULE_2__["Radio"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/proz/proz-layout/proz-layout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/proz/proz-layout/proz-layout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/proz/proz-layout/proz-layout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/proz/proz-layout/proz-layout.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3ovcHJvei1sYXlvdXQvcHJvei1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/proz/proz-layout/proz-layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/proz/proz-layout/proz-layout.component.ts ***!
  \***********************************************************/
/*! exports provided: ProzLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzLayoutComponent", function() { return ProzLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProzLayoutComponent = /** @class */ (function () {
    function ProzLayoutComponent() {
    }
    ProzLayoutComponent.prototype.ngOnInit = function () {
    };
    ProzLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proz-layout',
            template: __webpack_require__(/*! ./proz-layout.component.html */ "./src/app/proz/proz-layout/proz-layout.component.html"),
            styles: [__webpack_require__(/*! ./proz-layout.component.scss */ "./src/app/proz/proz-layout/proz-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProzLayoutComponent);
    return ProzLayoutComponent;
}());



/***/ }),

/***/ "./src/app/proz/proz-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/proz/proz-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ProzRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzRoutingModule", function() { return ProzRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _proz_proz_layout_proz_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proz/proz-layout/proz-layout.component */ "./src/app/proz/proz-layout/proz-layout.component.ts");
/* harmony import */ var _van_add_van_add_van_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./van/add-van/add-van.component */ "./src/app/proz/van/add-van/add-van.component.ts");
/* harmony import */ var _van_list_van_list_van_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./van/list-van/list-van.component */ "./src/app/proz/van/list-van/list-van.component.ts");
/* harmony import */ var _van_view_van_view_van_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./van/view-van/view-van.component */ "./src/app/proz/van/view-van/view-van.component.ts");
/* harmony import */ var _van_edit_van_edit_van_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./van/edit-van/edit-van.component */ "./src/app/proz/van/edit-van/edit-van.component.ts");
/* harmony import */ var _proz_twilio_log_twiliosmslog_twiliosmslog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proz-twilio-log/twiliosmslog/twiliosmslog.component */ "./src/app/proz/proz-twilio-log/twiliosmslog/twiliosmslog.component.ts");
/* harmony import */ var _proz_twilio_log_twiliocalllog_twiliocalllog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./proz-twilio-log/twiliocalllog/twiliocalllog.component */ "./src/app/proz/proz-twilio-log/twiliocalllog/twiliocalllog.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/proz/feedback/feedback.component.ts");
/* harmony import */ var _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./terms-conditions/terms-conditions.component */ "./src/app/proz/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _Equipment_list_equipment_list_equipment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Equipment/list-equipment/list-equipment.component */ "./src/app/proz/Equipment/list-equipment/list-equipment.component.ts");
/* harmony import */ var _Equipment_view_equipment_view_equipment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Equipment/view-equipment/view-equipment.component */ "./src/app/proz/Equipment/view-equipment/view-equipment.component.ts");
/* harmony import */ var _Equipment_edit_equipment_edit_equipment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Equipment/edit-equipment/edit-equipment.component */ "./src/app/proz/Equipment/edit-equipment/edit-equipment.component.ts");
/* harmony import */ var _Equipment_add_new_equipment_add_new_equipment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Equipment/add-new-equipment/add-new-equipment.component */ "./src/app/proz/Equipment/add-new-equipment/add-new-equipment.component.ts");
/* harmony import */ var _Equipment_book_equipment_book_equipment_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Equipment/book-equipment/book-equipment.component */ "./src/app/proz/Equipment/book-equipment/book-equipment.component.ts");
/* harmony import */ var _Equipment_equipmentbooking_board_equipmentbooking_board_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Equipment/equipmentbooking-board/equipmentbooking-board.component */ "./src/app/proz/Equipment/equipmentbooking-board/equipmentbooking-board.component.ts");
/* harmony import */ var _equipment_equipmentbooking_list_equipmentbooking_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./equipment/equipmentbooking-list/equipmentbooking-list.component */ "./src/app/proz/equipment/equipmentbooking-list/equipmentbooking-list.component.ts");
/* harmony import */ var _equipment_view_equipmentbooking_view_equipmentbooking_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./equipment/view-equipmentbooking/view-equipmentbooking.component */ "./src/app/proz/equipment/view-equipmentbooking/view-equipmentbooking.component.ts");
/* harmony import */ var _equipment_edit_equipmentbooking_edit_equipmentbooking_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./equipment/edit-equipmentbooking/edit-equipmentbooking.component */ "./src/app/proz/equipment/edit-equipmentbooking/edit-equipmentbooking.component.ts");




// STAFF COMPONENTS START
// LIST ROLES
// LIST ROLES
// STAFF ACCOUNT SETTINGS




/* TWILLIO */


/* /TWILLIO */











var routes = [
    {
        path: '', component: _proz_proz_layout_proz_layout_component__WEBPACK_IMPORTED_MODULE_3__["ProzLayoutComponent"],
        children: [
            // {
            //   path: 'addProTimeActivity',
            //   component: AddProTimeActivityComponent
            // },
            // {
            //   path: 'editProTimeActivity',
            //   component: EditProTimeActivityComponent
            // },
            // {
            //   path: 'addProEmployeeStatus',
            //   component: AddProEmployeeStatusComponent
            // },
            // {
            //   path: 'addProCurrentStatus',
            //   component: AddProCurrentStatusComponent
            // },
            // {
            //   path: 'addProPaymentMethod',
            //   component: AddProPaymentMethodComponent
            // },
            // {
            //   path: 'addProGroup',
            //   component: AddProGroupComponent
            // },
            // {
            //   path: 'addProStaffRolePermission',
            //   component: AddProStaffRolePermissionsComponent
            // },
            /* -- Van -- */
            {
                path: 'addLocatin',
                component: _van_add_van_add_van_component__WEBPACK_IMPORTED_MODULE_4__["AddVanComponent"]
            },
            {
                path: 'listLocations',
                component: _van_list_van_list_van_component__WEBPACK_IMPORTED_MODULE_5__["ListVanComponent"]
            },
            {
                path: 'viewLoation/:vanId',
                component: _van_view_van_view_van_component__WEBPACK_IMPORTED_MODULE_6__["ViewVanComponent"]
            },
            {
                path: 'editLocation/:vanId',
                component: _van_edit_van_edit_van_component__WEBPACK_IMPORTED_MODULE_7__["EditVanComponent"]
            },
            /* -- /Van -- */
            /* -- Twillio -- */
            {
                path: 'smslog',
                component: _proz_twilio_log_twiliosmslog_twiliosmslog_component__WEBPACK_IMPORTED_MODULE_8__["TwiliosmslogComponent"]
            },
            {
                path: 'calllog',
                component: _proz_twilio_log_twiliocalllog_twiliocalllog_component__WEBPACK_IMPORTED_MODULE_9__["TwiliocalllogComponent"]
            },
            /* -- /Twillio -- */
            /* -- Invoices -- */
            {
                path: 'feedback',
                component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackComponent"]
            },
            {
                path: 'terms/:proId',
                component: _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_11__["TermsConditionsComponent"]
            },
            /* -- Equipment -- */
            {
                path: 'addNewEquipment',
                component: _Equipment_add_new_equipment_add_new_equipment_component__WEBPACK_IMPORTED_MODULE_15__["AddNewEquipmentComponent"]
            },
            {
                path: 'listEquipment',
                component: _Equipment_list_equipment_list_equipment_component__WEBPACK_IMPORTED_MODULE_12__["ListEquipmentComponent"]
            },
            {
                path: 'viewEquipment/:equipmentId',
                component: _Equipment_view_equipment_view_equipment_component__WEBPACK_IMPORTED_MODULE_13__["ViewEquipmentComponent"]
            },
            {
                path: 'editEquipment/:equipmentId',
                component: _Equipment_edit_equipment_edit_equipment_component__WEBPACK_IMPORTED_MODULE_14__["EditEquipmentComponent"]
            },
            {
                path: 'bookEquipment',
                component: _Equipment_book_equipment_book_equipment_component__WEBPACK_IMPORTED_MODULE_16__["BookEquipmentComponent"]
            },
            {
                path: 'bookinboardEquipment',
                component: _Equipment_equipmentbooking_board_equipmentbooking_board_component__WEBPACK_IMPORTED_MODULE_17__["EquipmentbookingBoardComponent"]
            },
            {
                path: 'listEquipmentBooking',
                component: _equipment_equipmentbooking_list_equipmentbooking_list_component__WEBPACK_IMPORTED_MODULE_18__["EquipmentbookingListComponent"]
            },
            {
                path: 'editEquipmentBooking/:equipmentBookId',
                component: _equipment_edit_equipmentbooking_edit_equipmentbooking_component__WEBPACK_IMPORTED_MODULE_20__["EditEquipmentbookingComponent"]
            },
            {
                path: 'viewEquipmentBooking/:equipmentBookId',
                component: _equipment_view_equipmentbooking_view_equipmentbooking_component__WEBPACK_IMPORTED_MODULE_19__["ViewEquipmentbookingComponent"]
            },
        ]
    }
];
var ProzRoutingModule = /** @class */ (function () {
    function ProzRoutingModule() {
    }
    ProzRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProzRoutingModule);
    return ProzRoutingModule;
}());



/***/ }),

/***/ "./src/app/proz/proz-twilio-log/twiliocalllog/twiliocalllog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/proz/proz-twilio-log/twiliocalllog/twiliocalllog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a href=\"#\">Home</a>\r\n      </li>\r\n      <li class=\"active\">List of Calls</li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        List of Calls\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"page-body\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n        <div class=\"well with-header with-footer three-bordered\">\r\n          <div class=\"header gray\" >\r\n            List of Calls - {{loginData.loginCode}}\r\n          </div>\r\n          <div class=\"widget-body\">\r\n            <div class=\"table-scrollable\" >\r\n              <table class=\"table table-bordered table-striped table-condensed flip-content\" *ngIf=\"showData\">\r\n                <thead class=\"flip-content bordered-purple\">\r\n                  <tr>\r\n                    <th>\r\n                      S.No.\r\n                    </th>\r\n                    <th>\r\n                     PRO Code\r\n                    </th>\r\n                    <th>\r\n                     Lead Code\r\n                    </th>\r\n                    <th>\r\n                      Session Id\r\n                    </th>\r\n                    <th>\r\n                     From Number\r\n                    </th>\r\n                    <th>\r\n                     To Number\r\n                    </th>\r\n                    <th>\r\n                    Direction\r\n                    </th>\r\n                    <th>\r\n                    Duration\r\n                    </th>\r\n                    <th>\r\n                    Call Sid\r\n                    </th>\r\n                    <th>\r\n                    Call Status\r\n                    </th>\r\n                    <th>\r\n                    Time of Call\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let data of logData\">\r\n                    <td>\r\n                      {{data.row}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.proCode}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.leadCode}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.sessionId}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.fromNumber}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.toNumber}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.direction}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.duration}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.callSid}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.callStatus}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.timeofCall}}\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              \r\n            </div>\r\n            <div *ngIf=\"!showData\">\r\n              <span>No Call log found...!</span>\r\n            </div>\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/proz/proz-twilio-log/twiliocalllog/twiliocalllog.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/proz/proz-twilio-log/twiliocalllog/twiliocalllog.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td, th {\n  text-align: center;\n  height: 2%;\n  /* font-size:10px; */\n  align-items: center;\n  word-wrap: break-word;\n  vertical-align: middle; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n    padding: 8px 0;\r\n    border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-purple {\n  border-top: 1px solid #7e3794 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #7e3794;\n  border-right: 1px solid #7e3794;\n  border-bottom: 1px solid #7e3794;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei9wcm96LXR3aWxpby1sb2cvdHdpbGlvY2FsbGxvZy9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxccHJvelxccHJvei10d2lsaW8tbG9nXFx0d2lsaW9jYWxsbG9nXFx0d2lsaW9jYWxsbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssbUJBQWlCO0VBQ2pCLFdBQVM7RUFDVCxxQkFBcUI7RUFDckIsb0JBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQix1QkFBc0IsRUFDekI7O0FBQ0Q7RUFDRyxlQUFlO0VBQ2Ysa0NBQWlDO0VBRWpDOzt3Q0FFb0M7RUFDcEMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7eUJBQ3NCLEVBRXhCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLHlDQUF3QyxFQUMzQzs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLCtCQUE4QjtFQUM5QixnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQ2pDLG9DQUFvQyxFQUN0Qzs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvcHJvei9wcm96LXR3aWxpby1sb2cvdHdpbGlvY2FsbGxvZy90d2lsaW9jYWxsbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHRkLHRoe1xyXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgIGhlaWdodDoyJTtcclxuICAgICAvKiBmb250LXNpemU6MTBweDsgKi9cclxuICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiB9XHJcbiAuZm9ybS10aXRsZXsgICAgXHJcbiAgICBjb2xvcjogICM1ZGIyZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1ZGIyZmY7XHJcblxyXG4gICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0OyovXHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcblxyXG59XHJcblxyXG4ubWFuZGF0b3J5e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmhyLXB1cnBsZXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzdlMzc5NCAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuaW5wdXR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tb2Nre1xyXG4gICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2NrLWNvbmZ7XHJcbiAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wcm9ncmVzc3tcclxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGhyZWUtYm9yZGVyZWR7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM3ZTM3OTQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjN2UzNzk0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3ZTM3OTQ7XHJcbiAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGVja2JveC1jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tZ3JheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tYmx1ZXsgICAgXHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/proz/proz-twilio-log/twiliocalllog/twiliocalllog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/proz/proz-twilio-log/twiliocalllog/twiliocalllog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TwiliocalllogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwiliocalllogComponent", function() { return TwiliocalllogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var TwiliocalllogComponent = /** @class */ (function () {
    function TwiliocalllogComponent(beyond, router, formBuilder, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.showData = false;
    }
    TwiliocalllogComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        console.log("loginData" + JSON.stringify(this.loginData.loginCode));
        this.listProSubscriptions(this.loginData.loginCode);
    };
    TwiliocalllogComponent.prototype.listProSubscriptions = function (proCode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getCalllog/' + proCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                console.log("employee Details" + JSON.stringify(response));
                _this.logData = response.response;
                _this.showData = true;
                _this.logData.forEach(function (e, i) {
                    e.row = i + 1;
                });
            }
        }, function (error) {
            console.log("Unable to connect to server");
        });
    };
    TwiliocalllogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-twiliocalllog',
            template: __webpack_require__(/*! ./twiliocalllog.component.html */ "./src/app/proz/proz-twilio-log/twiliocalllog/twiliocalllog.component.html"),
            styles: [__webpack_require__(/*! ./twiliocalllog.component.scss */ "./src/app/proz/proz-twilio-log/twiliocalllog/twiliocalllog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], TwiliocalllogComponent);
    return TwiliocalllogComponent;
}());



/***/ }),

/***/ "./src/app/proz/proz-twilio-log/twiliosmslog/twiliosmslog.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/proz/proz-twilio-log/twiliosmslog/twiliosmslog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a href=\"#\">Home</a>\r\n      </li>\r\n      <li class=\"active\">List of SMS</li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        List of SMS\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"page-body\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n        <div class=\"well with-header with-footer three-bordered\">\r\n          <div class=\"header gray\">\r\n            List of SMS - {{loginData.loginCode}}\r\n          </div>\r\n          <div class=\"widget-body\">\r\n            <div class=\"table-scrollable\">\r\n              <table class=\"table table-bordered table-striped table-condensed flip-content\" *ngIf=\"showData\">\r\n                <thead class=\"flip-content bordered-purple\">\r\n                  <tr>\r\n                    <th>\r\n                      S.No.\r\n                    </th>\r\n                    <th>\r\n                     PRO Code\r\n                    </th>\r\n                    <th>\r\n                     Lead Code\r\n                    </th>\r\n                    <th>\r\n                      Session Id\r\n                    </th>\r\n                    <th>\r\n                     From Number\r\n                    </th>\r\n                    <th>\r\n                     To Number\r\n                    </th>\r\n                    <th>\r\n                    Message Id\r\n                    </th>\r\n                    <th>\r\n                    Message Status\r\n                    </th>\r\n                    <th>\r\n                    Accound Sid\r\n                    </th>\r\n                    <th>\r\n                      Time of SMS\r\n                      </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let data of logData\">\r\n                    <td>\r\n                      {{data.row}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.proCode}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.leadCode}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.sessionId}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.fromNumber}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.toNumber}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.messageId}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.messageStatus}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.accountSid}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.date}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.timeofCall}}\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <div *ngIf=\"!showData\">\r\n              <span>No SMS log found...!</span>\r\n            </div>\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/proz/proz-twilio-log/twiliosmslog/twiliosmslog.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/proz/proz-twilio-log/twiliosmslog/twiliosmslog.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table td, th {\n  text-align: center;\n  height: 2%;\n  /* font-size:10px; */\n  align-items: center;\n  word-wrap: break-word;\n  vertical-align: middle; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n    padding: 8px 0;\r\n    border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-purple {\n  border-top: 1px solid #7e3794 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #7e3794;\n  border-right: 1px solid #7e3794;\n  border-bottom: 1px solid #7e3794;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei9wcm96LXR3aWxpby1sb2cvdHdpbGlvc21zbG9nL0Q6XFxUb3Bwcm96XFxUb3BQcm96X0FkdmFuY2VfQ2xpZW50L3NyY1xcYXBwXFxwcm96XFxwcm96LXR3aWxpby1sb2dcXHR3aWxpb3Ntc2xvZ1xcdHdpbGlvc21zbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssbUJBQWlCO0VBQ2pCLFdBQVM7RUFDVCxxQkFBcUI7RUFDckIsb0JBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQix1QkFBc0IsRUFDekI7O0FBQ0Q7RUFDRyxlQUFlO0VBQ2Ysa0NBQWlDO0VBRWpDOzt3Q0FFb0M7RUFDcEMsZ0JBQWU7RUFDZixrQkFBaUI7RUFDbEI7eUJBQ3NCLEVBRXhCOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLHlDQUF3QyxFQUMzQzs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLFdBQVU7RUFDVixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLCtCQUE4QjtFQUM5QixnQ0FBK0I7RUFDL0IsaUNBQWdDO0VBQ2pDLG9DQUFvQyxFQUN0Qzs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvcHJvei9wcm96LXR3aWxpby1sb2cvdHdpbGlvc21zbG9nL3R3aWxpb3Ntc2xvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0ZCx0aHtcclxuICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICBoZWlnaHQ6MiU7XHJcbiAgICAgLyogZm9udC1zaXplOjEwcHg7ICovXHJcbiAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gfVxyXG4gLmZvcm0tdGl0bGV7ICAgIFxyXG4gICAgY29sb3I6ICAjNWRiMmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNWRiMmZmO1xyXG5cclxuICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzdlMzc5NDsqL1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG5cclxufVxyXG5cclxuLm1hbmRhdG9yeXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5oci1wdXJwbGV7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZTM3OTQgIWltcG9ydGFudDtcclxufSBcclxuXHJcbmlucHV0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubW9ja3tcclxuICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9jay1jb25me1xyXG4gICAgY29sb3I6IGdyZWVuOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHJvZ3Jlc3N7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRocmVlLWJvcmRlcmVke1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjN2UzNzk0O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzdlMzc5NDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjN2UzNzk0O1xyXG4gICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxufVxyXG5cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2hlY2tib3gtY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JheXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWJsdWV7ICAgIFxyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/proz/proz-twilio-log/twiliosmslog/twiliosmslog.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/proz/proz-twilio-log/twiliosmslog/twiliosmslog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TwiliosmslogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwiliosmslogComponent", function() { return TwiliosmslogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var TwiliosmslogComponent = /** @class */ (function () {
    function TwiliosmslogComponent(beyond, router, formBuilder, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.showData = false;
    }
    TwiliosmslogComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        console.log("loginData" + JSON.stringify(this.loginData.loginCode));
        this.listProSubscriptions(this.loginData.loginCode);
    };
    TwiliosmslogComponent.prototype.listProSubscriptions = function (proCode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getSmslog/' + proCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                console.log("employee Details" + JSON.stringify(response));
                _this.logData = response.response;
                _this.showData = true;
                _this.logData.forEach(function (e, i) {
                    e.row = i + 1;
                });
            }
        }, function (error) {
            console.log("Unable to connect to server");
        });
    };
    TwiliosmslogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-twiliosmslog',
            template: __webpack_require__(/*! ./twiliosmslog.component.html */ "./src/app/proz/proz-twilio-log/twiliosmslog/twiliosmslog.component.html"),
            styles: [__webpack_require__(/*! ./twiliosmslog.component.scss */ "./src/app/proz/proz-twilio-log/twiliosmslog/twiliosmslog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], TwiliosmslogComponent);
    return TwiliosmslogComponent;
}());



/***/ }),

/***/ "./src/app/proz/proz.module.ts":
/*!*************************************!*\
  !*** ./src/app/proz/proz.module.ts ***!
  \*************************************/
/*! exports provided: ProzModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProzModule", function() { return ProzModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-completer */ "./node_modules/ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/commonvanlynkheader/commonvanlynkheader.module */ "./src/app/common/commonvanlynkheader/commonvanlynkheader.module.ts");
/* harmony import */ var _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/prozadmin-sidemenu/proz-sidemenu.module */ "./src/app/common/prozadmin-sidemenu/proz-sidemenu.module.ts");
/* harmony import */ var _common_commontopprozpurplefooter_commontopprozfooter_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/commontopprozpurplefooter/commontopprozfooter.module */ "./src/app/common/commontopprozpurplefooter/commontopprozfooter.module.ts");
/* harmony import */ var _proz_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./proz-routing.module */ "./src/app/proz/proz-routing.module.ts");
/* harmony import */ var _proz_layout_proz_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./proz-layout/proz-layout.component */ "./src/app/proz/proz-layout/proz-layout.component.ts");
/* harmony import */ var _utilities_geocode_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utilities/geocode.service */ "./src/utilities/geocode.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng4_auto_complete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng4-auto-complete */ "./node_modules/ng4-auto-complete/index.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js");
/* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/@syncfusion/ej2-angular-schedule.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ "./node_modules/@syncfusion/ej2-angular-grids/@syncfusion/ej2-angular-grids.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @syncfusion/ej2-angular-popups */ "./node_modules/@syncfusion/ej2-angular-popups/@syncfusion/ej2-angular-popups.es5.js");
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ "./node_modules/@syncfusion/ej2-angular-navigations/@syncfusion/ej2-angular-navigations.es5.js");
/* harmony import */ var _van_add_van_add_van_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./van/add-van/add-van.component */ "./src/app/proz/van/add-van/add-van.component.ts");
/* harmony import */ var _van_list_van_list_van_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./van/list-van/list-van.component */ "./src/app/proz/van/list-van/list-van.component.ts");
/* harmony import */ var _van_view_van_view_van_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./van/view-van/view-van.component */ "./src/app/proz/van/view-van/view-van.component.ts");
/* harmony import */ var _van_edit_van_edit_van_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./van/edit-van/edit-van.component */ "./src/app/proz/van/edit-van/edit-van.component.ts");
/* harmony import */ var _proz_twilio_log_twiliosmslog_twiliosmslog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./proz-twilio-log/twiliosmslog/twiliosmslog.component */ "./src/app/proz/proz-twilio-log/twiliosmslog/twiliosmslog.component.ts");
/* harmony import */ var _proz_twilio_log_twiliocalllog_twiliocalllog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./proz-twilio-log/twiliocalllog/twiliocalllog.component */ "./src/app/proz/proz-twilio-log/twiliocalllog/twiliocalllog.component.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/proz/feedback/feedback.component.ts");
/* harmony import */ var _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./terms-conditions/terms-conditions.component */ "./src/app/proz/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _Equipment_edit_equipment_edit_equipment_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Equipment/edit-equipment/edit-equipment.component */ "./src/app/proz/Equipment/edit-equipment/edit-equipment.component.ts");
/* harmony import */ var _Equipment_list_equipment_list_equipment_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Equipment/list-equipment/list-equipment.component */ "./src/app/proz/Equipment/list-equipment/list-equipment.component.ts");
/* harmony import */ var _Equipment_view_equipment_view_equipment_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Equipment/view-equipment/view-equipment.component */ "./src/app/proz/Equipment/view-equipment/view-equipment.component.ts");
/* harmony import */ var _Equipment_book_equipment_book_equipment_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Equipment/book-equipment/book-equipment.component */ "./src/app/proz/Equipment/book-equipment/book-equipment.component.ts");
/* harmony import */ var _Equipment_add_new_equipment_add_new_equipment_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Equipment/add-new-equipment/add-new-equipment.component */ "./src/app/proz/Equipment/add-new-equipment/add-new-equipment.component.ts");
/* harmony import */ var _Equipment_equipmentbooking_board_equipmentbooking_board_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Equipment/equipmentbooking-board/equipmentbooking-board.component */ "./src/app/proz/Equipment/equipmentbooking-board/equipmentbooking-board.component.ts");
/* harmony import */ var _equipment_equipmentbooking_list_equipmentbooking_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./equipment/equipmentbooking-list/equipmentbooking-list.component */ "./src/app/proz/equipment/equipmentbooking-list/equipmentbooking-list.component.ts");
/* harmony import */ var _equipment_view_equipmentbooking_view_equipmentbooking_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./equipment/view-equipmentbooking/view-equipmentbooking.component */ "./src/app/proz/equipment/view-equipmentbooking/view-equipmentbooking.component.ts");
/* harmony import */ var _equipment_edit_equipmentbooking_edit_equipmentbooking_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./equipment/edit-equipmentbooking/edit-equipmentbooking.component */ "./src/app/proz/equipment/edit-equipmentbooking/edit-equipmentbooking.component.ts");
















// LIST ROLES


// LIST ROLES
// STAFF ACCOUNT SETTINGS
// STAFF ACCOUNT SETTINGS
// import { NgxSmartModalModule } from 'ngx-smart-modal';






















var ProzModule = /** @class */ (function () {
    function ProzModule() {
    }
    ProzModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [
                _proz_layout_proz_layout_component__WEBPACK_IMPORTED_MODULE_11__["ProzLayoutComponent"],
                _van_add_van_add_van_component__WEBPACK_IMPORTED_MODULE_22__["AddVanComponent"],
                _van_list_van_list_van_component__WEBPACK_IMPORTED_MODULE_23__["ListVanComponent"],
                _van_view_van_view_van_component__WEBPACK_IMPORTED_MODULE_24__["ViewVanComponent"],
                _van_edit_van_edit_van_component__WEBPACK_IMPORTED_MODULE_25__["EditVanComponent"],
                _proz_twilio_log_twiliosmslog_twiliosmslog_component__WEBPACK_IMPORTED_MODULE_26__["TwiliosmslogComponent"],
                _proz_twilio_log_twiliocalllog_twiliocalllog_component__WEBPACK_IMPORTED_MODULE_27__["TwiliocalllogComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_29__["FeedbackComponent"],
                _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_30__["TermsConditionsComponent"],
                _Equipment_edit_equipment_edit_equipment_component__WEBPACK_IMPORTED_MODULE_31__["EditEquipmentComponent"],
                _Equipment_list_equipment_list_equipment_component__WEBPACK_IMPORTED_MODULE_32__["ListEquipmentComponent"],
                _Equipment_view_equipment_view_equipment_component__WEBPACK_IMPORTED_MODULE_33__["ViewEquipmentComponent"],
                _Equipment_book_equipment_book_equipment_component__WEBPACK_IMPORTED_MODULE_34__["BookEquipmentComponent"],
                _Equipment_add_new_equipment_add_new_equipment_component__WEBPACK_IMPORTED_MODULE_35__["AddNewEquipmentComponent"],
                _Equipment_equipmentbooking_board_equipmentbooking_board_component__WEBPACK_IMPORTED_MODULE_36__["EquipmentbookingBoardComponent"],
                _equipment_equipmentbooking_list_equipmentbooking_list_component__WEBPACK_IMPORTED_MODULE_37__["EquipmentbookingListComponent"],
                _equipment_view_equipmentbooking_view_equipmentbooking_component__WEBPACK_IMPORTED_MODULE_38__["ViewEquipmentbookingComponent"],
                _equipment_edit_equipmentbooking_edit_equipmentbooking_component__WEBPACK_IMPORTED_MODULE_39__["EditEquipmentbookingComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _proz_routing_module__WEBPACK_IMPORTED_MODULE_10__["ProzRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_7__["CommonvanlynkheaderModule"],
                _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_8__["ProzSidemenuModule"],
                _common_commontopprozpurplefooter_commontopprozfooter_module__WEBPACK_IMPORTED_MODULE_9__["CommontopprozfooterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"].forRoot(),
                ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"],
                ng2_completer__WEBPACK_IMPORTED_MODULE_4__["Ng2CompleterModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_28__["LeafletModule"].forRoot(),
                ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadModule"].forRoot(),
                _syncfusion_ej2_angular_popups__WEBPACK_IMPORTED_MODULE_20__["DialogModule"],
                //NotificationsModule,
                // NgxSmartModalModule.forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB-WIqE2pai0xtb8hK8uUkaS3OsSz-qOYA',
                    libraries: ["places"]
                }),
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_21__["AccordionModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_21__["ToolbarModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_21__["ContextMenuModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_21__["TabModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_21__["TreeViewModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_21__["SidebarModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_21__["MenuModule"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_18__["ScheduleModule"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_18__["RecurrenceEditorModule"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_19__["GridModule"]
            ],
            providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_18__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_18__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_18__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_18__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_18__["MonthAgendaService"], _utilities_geocode_service__WEBPACK_IMPORTED_MODULE_12__["GeocodingService"], ng4_auto_complete__WEBPACK_IMPORTED_MODULE_16__["AutoCompleteService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_19__["PageService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_19__["SelectionService"], _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_19__["RowDDService"]]
        })
    ], ProzModule);
    return ProzModule;
}());



/***/ }),

/***/ "./src/app/proz/terms-conditions/terms-conditions.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/proz/terms-conditions/terms-conditions.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n Coming - Soon\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/proz/terms-conditions/terms-conditions.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/proz/terms-conditions/terms-conditions.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3ovdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/proz/terms-conditions/terms-conditions.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/proz/terms-conditions/terms-conditions.component.ts ***!
  \*********************************************************************/
/*! exports provided: TermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function() { return TermsConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsConditionsComponent = /** @class */ (function () {
    function TermsConditionsComponent() {
    }
    TermsConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms-conditions',
            template: __webpack_require__(/*! ./terms-conditions.component.html */ "./src/app/proz/terms-conditions/terms-conditions.component.html"),
            styles: [__webpack_require__(/*! ./terms-conditions.component.scss */ "./src/app/proz/terms-conditions/terms-conditions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermsConditionsComponent);
    return TermsConditionsComponent;
}());



/***/ }),

/***/ "./src/app/proz/van/add-van/add-van.component.html":
/*!*********************************************************!*\
  !*** ./src/app/proz/van/add-van/add-van.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <!-- <li>\r\n            <a href=\"#\">Account Settings</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">General Tab</a>\r\n          </li> -->\r\n          <li>\r\n            <a (click)=\"listVan()\">List of Locations</a>\r\n          </li>\r\n\r\n          <li class=\"active\">Add Location</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Add Location</h1>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered\">\r\n                      <div class=\"header gray\">\r\n                        <span class=\"widget-caption\">Add Location</span>\r\n                      </div>\r\n                      <form [formGroup]=\"addVan\" (ngSubmit)=\"onSubmit()\">\r\n                        <div id=\"registration-form\">\r\n                          <!-- Add Service Category -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"VanIdLbl\">\r\n                                  <b>Location ID<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"vanId\"\r\n                                    value=\"{{vanId}}\"\r\n                                    style=\"background-color: #F2F2F2; color: black\" disabled>\r\n                                </span>\r\n\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"makeLbl\">\r\n                                  <b>Type<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select class=\"form-control\" formControlName=\"type\" [(ngModel)]=\"typeData\"\r\n                                  (ngModelChange)=\"TypeSelection(typeData)\"\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\">\r\n                                  <option value=\"\">--Select --</option>\r\n                                  <option value=\"Warehouse\">Warehouse</option>\r\n                                  <option value=\"Van\">Van</option>\r\n                                  <option value=\"Truck\">Truck</option>\r\n                                </select>\r\n                              </div>\r\n                              <div *ngIf=\"submitted && f.type.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.type.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\"> Required Type</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"modelLbl\">\r\n                                  <b>Name<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"name\"  (keyup)=\"subCheckingName()\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" >\r\n\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.name.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\"> Required Name</p>\r\n                                  </div>\r\n                                </div>\r\n                                <small *ngIf=\"mailError\">\r\n                                  <p style=\"color:red\">Name Already Exist</p>\r\n                                </small>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"yearLbl\">\r\n                                  <b>Status<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select class=\"form-control\" formControlName=\"status\"\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\">\r\n                                  <!-- <option value=\"\">Available</option> -->\r\n                                  <option value=\"Available\">Available</option>\r\n                                  <!-- <!-- <option value=\"Available\">Available</option> --> -->\r\n                                  <option value=\"UnAvailable\">UnAvailable</option>\r\n                                </select>\r\n                                <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.status.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\"> Required Status</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n\r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"colorLbl\">\r\n                                  <b>Make</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\" *ngIf=\"!WarehouseData\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" style=\"background-color: #F2F2F2; color: black;text-align: center;\"\r\n                                    class=\"form-control\" placeholder=\"\" formControlName=\"make\" disabled>\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"VanEnable\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"make\">\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b>Model</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\" *ngIf=\"!WarehouseData\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" style=\"background-color: #F2F2F2; color: black;text-align: center;\"\r\n                                    class=\"form-control\" placeholder=\"\" formControlName=\"model\" disabled>\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"VanEnable\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"model\">\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"colorLbl\">\r\n                                  <b>Year</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n\r\n                              <div class=\"form-group\" *ngIf=\"!WarehouseData\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"date\" style=\"background-color: #F2F2F2; color: black;text-align: center;\"\r\n                                    class=\"form-control\" [max]=\"getToday()\" placeholder=\"\" formControlName=\"year\"\r\n                                    disabled>\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"VanEnable\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"date\" class=\"form-control\" placeholder=\"\" formControlName=\"year\"\r\n                                    [max]=\"getToday()\">\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b>Color</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n\r\n                              <div class=\"form-group\" *ngIf=\"!WarehouseData\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" style=\"background-color: #F2F2F2; color: black;text-align: center;\"\r\n                                    class=\"form-control\" placeholder=\"\" formControlName=\"color\" disabled>\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"VanEnable\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"color\">\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"pictureLbl\">\r\n                                  <b>Picture</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <div class=\"controls\">\r\n                                  <div data-provides=\"fileupload\" class=\"fileupload fileupload-new\">\r\n                                    <div style=\"width: 100px; height: 120px;\" class=\"fileupload-new thumbnail\">\r\n                                      <img [src]=\"imagePreview\" style=\"height:120px;width:100px;\">\r\n                                    </div>\r\n                                    <!-- <div style=\"max-width: 90px; max-height: 110px; line-height: 20px;\"\r\n                                  class=\"fileupload-preview fileupload-exists thumbnail\"></div> -->\r\n                                    <div>\r\n                                      <input #imageUpload type=\"file\" accept=\"image/*\" id=\"avatar\"\r\n                                        (change)=\"select($event)\" #fileInput>\r\n                                      <button type=\"button\" class=\"btn btn-blue\" [disabled]=\"!img\"\r\n                                        (click)=\"imgfileUpload()\">Upload</button>\r\n                                        \r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div *ngIf=\"progressShow\" class=\"progress-bar1 blue stripes\">\r\n                                  <span [style.width.%]=\"percentage\">\r\n                                    <p style=\"text-align: center;color:black;font-size:18px;\">\r\n                                      {{percentage}}%</p>\r\n                                  </span>\r\n                                </div>\r\n                                <br>\r\n                                <div *ngIf=\"progressHide\" class=\"alert alert-block alert-success\" style=\"height:3px;\">\r\n                                  <h4 class=\"alert-heading\" style=\"margin-top:-5px;text-align:center;\">Image\r\n                                    Uploaded\r\n                                    Successfully</h4>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"typeLbl\">\r\n                                  <b>Assign To Staff</b>\r\n                                </label>\r\n\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n\r\n                              <div class=\"form-group\" *ngIf=\"!WarehouseData\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <select class=\"form-control\" formControlName=\"assignedStaff\"\r\n                                    style=\"background-color: #F2F2F2; color: black;text-align: center;\" disabled>\r\n\r\n                                    <option>--Select--</option>\r\n                                    <option *ngFor='let data of employeeStatus'\r\n                                      value={{data.employeeId}}-{{data.firstName}}{{data.lastName}}>\r\n                                      {{data.employeeId}}-{{data.firstName}}{{data.lastName}}</option>\r\n                                  </select>\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"VanEnable\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <select class=\"form-control\" formControlName=\"assignedStaff\">\r\n\r\n                                    <option>--Select--</option>\r\n                                    <option *ngFor='let data of employeeStatus'\r\n                                      value={{data.employeeId}}-{{data.firstName}}{{data.lastName}}>\r\n                                      {{data.employeeId}}-{{data.firstName}}{{data.lastName}}</option>\r\n                                  </select>\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"VanIdLbl\">\r\n                                  <b>Description<span class=\"mandatory\"></span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n\r\n                                  <textarea rows=\"3\" class=\"form-control\" formControlName=\"description\"></textarea>\r\n                                </span>\r\n                                <!-- <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"vanId\"\r\n                                   value=\"{{vanId}}\" readonly style=\"background-color: gray; color: white;\">\r\n                                </span> -->\r\n\r\n                              </div>\r\n\r\n\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Add Van -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                              <button type=\"submit\" class=\"btn btn-blue\"><i class=\"fa fa-check\"></i> Save</button>\r\n                            </div>\r\n                            <div class=\"col-sm-1\">\r\n                              <button type=\"button\" (click)=\"cancelVan()\" class=\"btn btn-danger\"><i\r\n                                  class=\"fa fa-times\"></i> Cancel</button>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <br />\r\n                        </div>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/proz/van/add-van/add-van.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/proz/van/add-van/add-van.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n    padding: 8px 0;\r\n    border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-purple {\n  border-top: 1px solid #7e3794 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #7e3794;\n  border-right: 1px solid #7e3794;\n  border-bottom: 1px solid #7e3794;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei92YW4vYWRkLXZhbi9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxccHJvelxcdmFuXFxhZGQtdmFuXFxhZGQtdmFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGtDQUFpQztFQUVqQzs7d0NBRW9DO0VBQ3BDLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCO3lCQUNzQixFQUV4Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSwrQkFBOEI7RUFDOUIsZ0NBQStCO0VBQy9CLGlDQUFnQztFQUNqQyxvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2QyIsImZpbGUiOiJzcmMvYXBwL3Byb3ovdmFuL2FkZC12YW4vYWRkLXZhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXRpdGxleyAgICBcclxuICAgIGNvbG9yOiAgIzVkYjJmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuXHJcbiAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7Ki9cclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuXHJcbn1cclxuXHJcbi5tYW5kYXRvcnl7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaHItcHVycGxleyAgICBcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG5pbnB1dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1vY2t7XHJcbiAgICBjb2xvcjogcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vY2stY29uZntcclxuICAgIGNvbG9yOiBncmVlbjsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnByb2dyZXNze1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aHJlZS1ib3JkZXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzdlMzc5NDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3ZTM3OTQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzdlMzc5NDtcclxuICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyYXl7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ncmF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ibHVleyAgICBcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/proz/van/add-van/add-van.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/proz/van/add-van/add-van.component.ts ***!
  \*******************************************************/
/*! exports provided: AddVanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVanComponent", function() { return AddVanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddVanComponent = /** @class */ (function () {
    function AddVanComponent(beyond, router, formBuilder, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.progressShow = false;
        this.progressHide = false;
        this.img = false;
        this.imagePreview = "assets/img/no-image.png";
        this.percentage = 0;
        this.submitted = false;
        this.WarehouseData = true;
        this.VanEnable = true;
    }
    AddVanComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proData = this.loginData.loginCode;
        this.getStaff();
        this.employeeProSpecific();
        this.getvanID();
        this.addVan = this.formBuilder.group({
            vanId: [""],
            make: [""],
            model: [""],
            year: [""],
            color: [""],
            type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            notes: [""],
            description: [""],
            assignedStaff: [""],
            status: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            vanImage: [""],
        });
    };
    AddVanComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.addVan.invalid) {
            return;
        }
        else {
            this.submitImage();
        }
    };
    Object.defineProperty(AddVanComponent.prototype, "f", {
        get: function () { return this.addVan.controls; },
        enumerable: true,
        configurable: true
    });
    // AUto Genrat
    AddVanComponent.prototype.getvanID = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/generatepwvanID/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            _this.vanId = response.vanId;
            console.log("vanId number" + _this.vanId);
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    // AUto Genrat
    AddVanComponent.prototype.submitImage = function () {
        if (_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].imagePath == '') {
            this.imagePreview = "assets/img/no-image.png";
            _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].imagePath = this.imagePreview;
            this.saveVan(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].imagePath);
        }
        else {
            this.saveVan(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].imagePath);
        }
    };
    AddVanComponent.prototype.saveVan = function (x) {
        var _this = this;
        if (this.addVan.value.type != '' && this.addVan.value.status && this.addVan.value.name != '' && this.mailResponse.status == "FALSE") {
            var obj = {
                "proId": this.loginData.loginCode,
                "vanId": this.vanId,
                "make": this.addVan.value.make,
                "model": this.addVan.value.model,
                "year": this.addVan.value.year,
                "color": this.addVan.value.color,
                "type": this.addVan.value.type,
                "name": this.addVan.value.name,
                "description": this.addVan.value.description,
                "status": this.addVan.value.status,
                "assignedStaff": this.addVan.value.assignedStaff,
                "notes": this.addVan.value.notes,
                // "staffName": this.addVan.value.staffName,
                "image": '' + _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].documentName,
                "createdBy": this.loginData.emailId,
                "createdOn": new Date()
            };
            console.log("obj" + JSON.stringify(obj));
            this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/addVan', obj)
                .subscribe(function (data) {
                var vanData = data.json();
                console.log("vanData" + JSON.stringify(vanData));
                _this.toastr.success('van Added Successfuly...');
                _this.router.navigate(['/proz/listLocations']);
            }, function (error) {
                console.log(error); // Error getting the data
            });
        }
        else {
        }
    };
    AddVanComponent.prototype.getStaff = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getStaffId', options)
            .subscribe(function (data) {
            var staffId = data.json();
            if (staffId.status == 200) {
                console.log("group Details" + JSON.stringify(staffId));
                _this.getStaffId = staffId.response;
                console.log("list" + JSON.stringify(_this.getStaffId));
                // return false;
                // this.currentStatus1 = true;
            }
            else {
                // this.currentStatus1 = false;
                _this.toastr.warning('Unable to connect to server');
            }
        });
    };
    /* -- Employee staff pro Specific data-- */
    AddVanComponent.prototype.employeeProSpecific = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/VanStaffStatus/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var proStaff = data.json();
            if (proStaff.status == 200) {
                console.log("group Details" + JSON.stringify(proStaff));
                _this.employeeStatus = proStaff.response;
                console.log("employeeStatus" + JSON.stringify(_this.employeeStatus));
                // return false;
                // this.currentStatus1 = true;
            }
            else {
                // this.currentStatus1 = false;
                _this.toastr.warning('Unable to connect to server');
            }
        });
    };
    AddVanComponent.prototype.cancelVan = function () {
        this.router.navigate(['/proz/listLocations']);
    };
    AddVanComponent.prototype.list = function () {
        this.router.navigate(['/proz/listLocations']);
    };
    //IMAGE UPLOAD
    AddVanComponent.prototype.handleImage = function (file) {
        var _this = this;
        var picReader = new FileReader();
        picReader.onload = function (e) {
            var reader = e.target;
            _this.imagePreview = reader.result;
        };
        picReader.readAsDataURL(file);
    };
    AddVanComponent.prototype.select = function (event) {
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
    AddVanComponent.prototype.imgfileUpload = function () {
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
    //IMAGE UPLOAD
    AddVanComponent.prototype.mobileValidation = function () {
        var _this = this;
        console.log("staffid" + this.addVan.value.staffId);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"];
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getStaffRole/' + this.addVan.value.staffId)
            .subscribe(function (data) {
            var getStaffRole1 = data.json();
            if (getStaffRole1.status == 200) {
                // this.mobileNumberValidation = false;
                console.log('exists' + JSON.stringify(getStaffRole1));
                //let data = getStaffRole1.data
                // this.genAppointment.get('customerName').setValue(mobileNumberValidation.data[0].name)
                _this.addVan.get('staffRole').setValue(getStaffRole1.response[0].role);
                _this.addVan.get('staffName').setValue(getStaffRole1.response[0].firstName);
            }
            else {
                // this.mobileNumberValidation = true;
                console.log('does not exists');
            }
        }, function (error) {
            _this.toastr.error('Failed to Connect Server');
        });
    };
    AddVanComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    AddVanComponent.prototype.listVan = function () {
        this.router.navigate(['/proz/listLocations']);
    };
    /*year Validation */
    AddVanComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    /*year Validation */
    AddVanComponent.prototype.TypeSelection = function (typeData) {
        console.log("TYPE :::" + typeData);
        if (typeData == "Warehouse") {
            this.WarehouseData = false;
            this.VanEnable = false;
        }
        if (typeData == "Van") {
            this.WarehouseData = true;
            this.VanEnable = true;
        }
        if (typeData == "Truck") {
            this.WarehouseData = true;
            this.VanEnable = true;
        }
    };
    AddVanComponent.prototype.subCheckingName = function () {
        var _this = this;
        console.log("This is the Name:" + JSON.stringify(this.addVan.value.name));
        if (this.addVan.value.name == "") {
            this.toastr.warning("Name is Empty");
            this.mailError = false;
            this.disableSignIn = true;
            return false;
        }
        else {
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/checkVanName/' + this.addVan.value.name + "/" + this.loginData.loginCode)
                .subscribe(function (data) {
                _this.mailResponse = data.json();
                if (_this.mailResponse.status == "TRUE") {
                    _this.mailError = true;
                    _this.disableSignIn = false;
                    return false;
                    // console.log("hao")
                }
                else {
                    _this.mailError = false;
                    _this.disableSignIn = true;
                }
            });
        }
    };
    AddVanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-add-van',
            template: __webpack_require__(/*! ./add-van.component.html */ "./src/app/proz/van/add-van/add-van.component.html"),
            styles: [__webpack_require__(/*! ./add-van.component.scss */ "./src/app/proz/van/add-van/add-van.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], AddVanComponent);
    return AddVanComponent;
}());



/***/ }),

/***/ "./src/app/proz/van/edit-van/edit-van.component.html":
/*!***********************************************************!*\
  !*** ./src/app/proz/van/edit-van/edit-van.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <!-- <li>\r\n            <a href=\"#\">Account Settings</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">General Tab</a>\r\n          </li> -->\r\n          <li>\r\n            <a (click)=\"listVan()\">List of Locations</a>\r\n          </li>\r\n\r\n          <li class=\"active\">Edit Location</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Edit Location</h1>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered\">\r\n                      <div class=\"header gray\">\r\n                        <span class=\"widget-caption\">Edit Location</span>\r\n                      </div>\r\n                      <form [formGroup]=\"editVan\" (ngSubmit)=\"onSubmit()\">\r\n                        <div id=\"registration-form\">\r\n                          <!-- Edit Service Category -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"VanIdLbl\">\r\n                                  <b>Location ID<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"vanId\"\r\n                                    value=\"{{vanId}}\"\r\n                                    style=\"background-color: #F2F2F2; color: black;\" disabled>\r\n                                </span>\r\n\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"makeLbl\">\r\n                                  <b>Type<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select class=\"form-control\" formControlName=\"type\" [(ngModel)]=\"typeData\"\r\n                                  (ngModelChange)=\"TypeSelection(typeData)\"\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\">\r\n                                  <option value=\"\">--Select --</option>\r\n                                  <option value=\"Warehouse\">Warehouse</option>\r\n                                  <option value=\"Van\">Van</option>\r\n                                  <option value=\"Truck\">Truck</option>\r\n                                </select>\r\n                              </div>\r\n                              <div *ngIf=\"submitted && f.type.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.type.errors.required\">\r\n                                  <p style=\"color: red; font-size: 11px\"> Required Type</p>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"modelLbl\">\r\n                                  <b>Name<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"name\"\r\n                                    (keyup)=\"subCheckingName()\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\r\n\r\n                                </span>\r\n                                <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.name.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\"> Required Name</p>\r\n                                  </div>\r\n                                </div>\r\n                                <small *ngIf=\"mailError\">\r\n                                  <p style=\"color:red\">Name Already Exist</p>\r\n                                </small>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"yearLbl\">\r\n                                  <b>Status<span class=\"mandatory\">*</span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <select class=\"form-control\" formControlName=\"status\"\r\n                                  [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\">\r\n                                  <!-- <option value=\"\">Available</option> -->\r\n                                  <option value=\"Available\">Available</option>\r\n                                  <!-- <!-- <option value=\"Available\">Available</option> --> -->\r\n                                  <option value=\"UnAvailable\">UnAvailable</option>\r\n                                </select>\r\n                                <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\">\r\n                                  <div *ngIf=\"f.status.errors.required\">\r\n                                    <p style=\"color: red; font-size: 11px\"> Required Status</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n\r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"colorLbl\">\r\n                                  <b>Make</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\" *ngIf=\"!WarehouseData\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" style=\"background-color: #F2F2F2; color: black;text-align: center;\"\r\n                                    class=\"form-control\" placeholder=\"\" formControlName=\"make\" disabled>\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"VanEnable\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"make\">\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b>Model</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\" *ngIf=\"!WarehouseData\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" style=\"background-color: #F2F2F2; color: black;text-align: center;\"\r\n                                    class=\"form-control\" placeholder=\"\" formControlName=\"model\" disabled>\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"VanEnable\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"model\">\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"colorLbl\">\r\n                                  <b>Year</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n\r\n                              <div class=\"form-group\" *ngIf=\"!WarehouseData\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"date\" style=\"background-color: #F2F2F2; color: black;text-align: center;\"\r\n                                    class=\"form-control\" [max]=\"getToday()\" placeholder=\"\" formControlName=\"year\"\r\n                                    disabled>\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"VanEnable\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"date\" class=\"form-control\" placeholder=\"\" formControlName=\"year\"\r\n                                    [max]=\"getToday()\">\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"descriptionLbl\">\r\n                                  <b>Color</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n\r\n                              <div class=\"form-group\" *ngIf=\"!WarehouseData\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" style=\"background-color: #F2F2F2; color: black;text-align: center;\"\r\n                                    class=\"form-control\" placeholder=\"\" formControlName=\"color\" disabled>\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"VanEnable\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"color\">\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"pictureLbl\">\r\n                                  <b>Picture</b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <div class=\"controls\">\r\n                                  <div data-provides=\"fileupload\" class=\"fileupload fileupload-new\">\r\n                                    <div style=\"width: 100px; height: 120px;\" class=\"fileupload-new thumbnail\">\r\n                                      <img [src]=\"imagePreview\" style=\"height:120px;width:100px;\">\r\n                                    </div>\r\n                                    <!-- <div style=\"max-width: 90px; max-height: 110px; line-height: 20px;\"\r\n                                  class=\"fileupload-preview fileupload-exists thumbnail\"></div> -->\r\n                                    <div>\r\n                                      <input #imageUpload type=\"file\" accept=\"image/*\" id=\"avatar\"\r\n                                        (change)=\"select($event)\" #fileInput>\r\n                                      <button type=\"button\" class=\"btn btn-blue\" [disabled]=\"!img\"\r\n                                        (click)=\"imgfileUpload()\">Upload</button>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div *ngIf=\"progressShow\" class=\"progress-bar1 blue stripes\">\r\n                                  <span [style.width.%]=\"percentage\">\r\n                                    <p style=\"text-align: center;color:black;font-size:18px;\">\r\n                                      {{percentage}}%</p>\r\n                                  </span>\r\n                                </div>\r\n                                <br>\r\n                                <div *ngIf=\"progressHide\" class=\"alert alert-block alert-success\" style=\"height:3px;\">\r\n                                  <h4 class=\"alert-heading\" style=\"margin-top:-5px;text-align:center;\">Image\r\n                                    Uploaded\r\n                                    Successfully</h4>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"typeLbl\">\r\n                                  <b>Assign To Staff</b>\r\n                                </label>\r\n\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3\">\r\n\r\n                              <div class=\"form-group\" *ngIf=\"!WarehouseData\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <select class=\"form-control\" formControlName=\"assignedStaff\"\r\n                                    style=\"background-color: #F2F2F2; color: black;text-align: center;\" disabled>\r\n\r\n                                    <option>--Select--</option>\r\n                                    <option *ngFor='let data of employeeStatus'\r\n                                      value={{data.employeeId}}-{{data.firstName}}{{data.lastName}}>\r\n                                      {{data.employeeId}}-{{data.firstName}}{{data.lastName}}</option>\r\n                                  </select>\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"form-group\" *ngIf=\"VanEnable\">\r\n                                <span class=\"input-icon icon-right\">\r\n                                  <select class=\"form-control\" formControlName=\"assignedStaff\">\r\n\r\n                                    <option>--Select--</option>\r\n                                    <option *ngFor='let data of employeeStatus'\r\n                                      value={{data.employeeId}}-{{data.firstName}}{{data.lastName}}>\r\n                                      {{data.employeeId}}-{{data.firstName}}{{data.lastName}}</option>\r\n                                  </select>\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                                <label for=\"VanIdLbl\">\r\n                                  <b>Description<span class=\"mandatory\"></span></b>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                              <div class=\"form-group\">\r\n                                <span class=\"input-icon icon-right\">\r\n\r\n                                  <textarea rows=\"3\" class=\"form-control\" formControlName=\"description\"></textarea>\r\n                                </span>\r\n                                <!-- <span class=\"input-icon icon-right\">\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"vanId\"\r\n                                   value=\"{{vanId}}\" readonly style=\"background-color: gray; color: white;\">\r\n                                </span> -->\r\n\r\n                              </div>\r\n\r\n\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Edit Van -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-3\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-2\">\r\n                              <button type=\"submit\" class=\"btn btn-blue\"><i class=\"fa fa-check\"></i> Update</button>\r\n                            </div>\r\n                            <div class=\"col-sm-1\">\r\n                              <button type=\"button\" (click)=\"cancelVan()\" class=\"btn btn-danger\"><i\r\n                                  class=\"fa fa-times\"></i> Cancel</button>\r\n                            </div>\r\n                            <div class=\"col-sm-6\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <br />\r\n                        </div>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/proz/van/edit-van/edit-van.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/proz/van/edit-van/edit-van.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n    padding: 8px 0;\r\n    border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-purple {\n  border-top: 1px solid #7e3794 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #7e3794;\n  border-right: 1px solid #7e3794;\n  border-bottom: 1px solid #7e3794;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei92YW4vZWRpdC12YW4vRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3pcXHZhblxcZWRpdC12YW5cXGVkaXQtdmFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGtDQUFpQztFQUVqQzs7d0NBRW9DO0VBQ3BDLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCO3lCQUNzQixFQUV4Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSwrQkFBOEI7RUFDOUIsZ0NBQStCO0VBQy9CLGlDQUFnQztFQUNqQyxvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2QyIsImZpbGUiOiJzcmMvYXBwL3Byb3ovdmFuL2VkaXQtdmFuL2VkaXQtdmFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tdGl0bGV7ICAgIFxyXG4gICAgY29sb3I6ICAjNWRiMmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNWRiMmZmO1xyXG5cclxuICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzdlMzc5NDsqL1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG5cclxufVxyXG5cclxuLm1hbmRhdG9yeXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5oci1wdXJwbGV7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZTM3OTQgIWltcG9ydGFudDtcclxufSBcclxuXHJcbmlucHV0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubW9ja3tcclxuICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9jay1jb25me1xyXG4gICAgY29sb3I6IGdyZWVuOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHJvZ3Jlc3N7XHJcbiAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRocmVlLWJvcmRlcmVke1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjN2UzNzk0O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzdlMzc5NDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjN2UzNzk0O1xyXG4gICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxufVxyXG5cclxuLnRleHQtY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2hlY2tib3gtY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JheXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWJsdWV7ICAgIFxyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/proz/van/edit-van/edit-van.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/proz/van/edit-van/edit-van.component.ts ***!
  \*********************************************************/
/*! exports provided: EditVanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVanComponent", function() { return EditVanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EditVanComponent = /** @class */ (function () {
    function EditVanComponent(beyond, router, formBuilder, route, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.progressShow = false;
        this.progressHide = false;
        this.img = false;
        this.imagePreview = "assets/img/no-image.png";
        this.percentage = 0;
        this.WarehouseData = true;
        this.VanEnable = true;
    }
    EditVanComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proData = this.loginData.loginCode;
        this.vanId = this.route.snapshot.params['vanId'];
        this.getStaff();
        this.viewVan();
        this.employeeProSpecific();
        this.editVan = this.formBuilder.group({
            vanId: [null],
            make: [null],
            model: [null],
            year: [null],
            color: [null],
            type: [null],
            description: [null],
            status: [null],
            assignedStaff: [null],
            notes: [null],
            name: [null],
            // staffName: [null],
            images: [null]
        });
    };
    EditVanComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.updateVan();
        // stop here if form is invalid
        if (this.editVan.invalid) {
            return;
        }
        else {
        }
    };
    Object.defineProperty(EditVanComponent.prototype, "f", {
        get: function () { return this.editVan.controls; },
        enumerable: true,
        configurable: true
    });
    EditVanComponent.prototype.updateVan = function () {
        var _this = this;
        var obj = {
            "proId": this.loginData.loginCode,
            "vanId": this.editVan.value.vanId,
            "model": this.editVan.value.model,
            "make": this.editVan.value.make,
            "year": this.editVan.value.year,
            "color": this.editVan.value.color,
            "type": this.editVan.value.type,
            "description": this.editVan.value.description,
            "assignedStaff": this.editVan.value.assignedStaff,
            "notes": this.editVan.value.notes,
            "status": this.editVan.value.status,
            "name": this.editVan.value.name,
            // "staffName": this.editVan.value.staffName,
            "images": _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].documentName,
            "modifiedOn": new Date(),
            "modifiedBy": this.loginData.emailId,
        };
        console.log("obj" + JSON.stringify(obj));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/updateVan', obj)
            .subscribe(function (data) {
            var vanData = data.json();
            console.log("vanData" + JSON.stringify(vanData));
            _this.toastr.success('van Added Successfuly...');
            _this.router.navigate(['/proz/listLocations']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    EditVanComponent.prototype.editData = function (x) {
        this.editVan = this.formBuilder.group({
            proId: [x.proId, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            vanId: [x.vanId, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            make: [x.make, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            model: [x.model, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            year: [x.year, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            color: [x.color, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            type: [x.type, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            description: [x.description, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            assignedStaff: [x.assignedStaff, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            notes: [x.notes, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            name: [x.name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            status: [x.status, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // staffName: [x.staffName, Validators.required],
            images: _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].imagePath,
        });
    };
    EditVanComponent.prototype.getStaff = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getStaffId', options)
            .subscribe(function (data) {
            var staffId = data.json();
            if (staffId.status == 200) {
                console.log("group Details" + JSON.stringify(staffId));
                _this.getStaffId = staffId.response;
                console.log("list" + JSON.stringify(_this.getStaffId));
                // return false;
                // this.currentStatus1 = true;
            }
            else {
                // this.currentStatus1 = false;
                _this.toastr.warning('Unable to connect to server');
            }
        });
    };
    //IMAGE UPLOAD
    EditVanComponent.prototype.handleImage = function (file) {
        var _this = this;
        var picReader = new FileReader();
        picReader.onload = function (e) {
            var reader = e.target;
            _this.imagePreview = reader.result;
        };
        picReader.readAsDataURL(file);
    };
    EditVanComponent.prototype.select = function (event) {
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
    EditVanComponent.prototype.imgfileUpload = function () {
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
    //IMAGE UPLOAD
    EditVanComponent.prototype.mobileValidation = function () {
        var _this = this;
        console.log("staffid" + this.editVan.value.staffId);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"];
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getStaffRole/' + this.editVan.value.staffId)
            .subscribe(function (data) {
            var getStaffRole1 = data.json();
            if (getStaffRole1.status == 200) {
                // this.mobileNumberValidation = false;
                console.log('exists' + JSON.stringify(getStaffRole1));
                //let data = getStaffRole1.data
                // this.genAppointment.get('customerName').setValue(mobileNumberValidation.data[0].name)
                _this.editVan.get('staffRole').setValue(getStaffRole1.response[0].role);
                _this.editVan.get('staffName').setValue(getStaffRole1.response[0].firstName);
            }
            else {
                // this.mobileNumberValidation = true;
                console.log('does not exists');
            }
        }, function (error) {
            _this.toastr.error('Failed to Connect Server');
        });
    };
    EditVanComponent.prototype.viewVan = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/viewVan/' + this.vanId, options)
            .subscribe(function (data) {
            var van = data.json();
            _this.vanData = van.response[0];
            _this.type = _this.vanData.type;
            _this.TypeSelection(_this.type);
            if (_this.vanData.images == '') {
                _this.imagePreview = "assets/img/no-image.png";
                _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].imagePath = _this.vanData.images;
                console.log("resume" + _this.imagePreview);
            }
            else {
                _this.imagePreview = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/" + _this.vanData.images;
                console.log("resume1" + _this.imagePreview);
                _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].imagePath = _this.vanData.images;
            }
            _this.editData(_this.vanData);
            console.log("View Van Data" + JSON.stringify(_this.vanData));
            _this.dataVan = true;
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    EditVanComponent.prototype.cancelVan = function () {
        this.router.navigate(['/proz/listLocations']);
    };
    EditVanComponent.prototype.listVan = function () {
        this.router.navigate(['/proz/listLocations']);
    };
    EditVanComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    EditVanComponent.prototype.employeeProSpecific = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/VanStaffStatus/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var proStaff = data.json();
            if (proStaff.status == 200) {
                console.log("group Details" + JSON.stringify(proStaff));
                _this.employeeStatus = proStaff.response;
                console.log("employeeStatus" + JSON.stringify(_this.employeeStatus));
                // return false;
                // this.currentStatus1 = true;
            }
            else {
                // this.currentStatus1 = false;
                _this.toastr.warning('Unable to connect to server');
            }
        });
    };
    /*year Validation */
    EditVanComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    /*year Validation */
    EditVanComponent.prototype.TypeSelection = function (typeData) {
        console.log("TYPE :::" + typeData);
        if (typeData == "Warehouse") {
            this.WarehouseData = false;
            this.VanEnable = false;
        }
        if (typeData == "Van") {
            this.WarehouseData = true;
            this.VanEnable = true;
        }
        if (typeData == "Truck") {
            this.WarehouseData = true;
            this.VanEnable = true;
        }
    };
    EditVanComponent.prototype.subCheckingName = function () {
        var _this = this;
        console.log("This is the Name:" + JSON.stringify(this.editVan.value.name));
        if (this.editVan.value.name == "") {
            this.toastr.warning("Name is Empty");
            this.mailError = false;
            this.disableSignIn = true;
            return false;
        }
        else {
            this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/checkVanName/' + this.editVan.value.name + "/" + this.loginData.loginCode)
                .subscribe(function (data) {
                _this.mailResponse = data.json();
                if (_this.mailResponse.status == "TRUE") {
                    _this.mailError = true;
                    _this.disableSignIn = false;
                    return false;
                    // console.log("hao")
                }
                else {
                    _this.mailError = false;
                    _this.disableSignIn = true;
                }
            });
        }
    };
    EditVanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-edit-van',
            template: __webpack_require__(/*! ./edit-van.component.html */ "./src/app/proz/van/edit-van/edit-van.component.html"),
            styles: [__webpack_require__(/*! ./edit-van.component.scss */ "./src/app/proz/van/edit-van/edit-van.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], EditVanComponent);
    return EditVanComponent;
}());



/***/ }),

/***/ "./src/app/proz/van/list-van/list-van.component.html":
/*!***********************************************************!*\
  !*** ./src/app/proz/van/list-van/list-van.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home</a>\r\n      </li>\r\n      <li class=\"active\">Location</li>\r\n      <li class=\"active\">List of Locations</li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        List of Locations\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- <h2 class=\"inprogress\"><b>LIVE SCREEN-V1.2-WORK IN PROGRESS</b></h2> -->\r\n  <div class=\"page-body\">\r\n    <!-- search van -->\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"widget\">\r\n          <div class=\"widget-header with-footer header gray\">\r\n            <span class=\"widget-caption\">Search Location By</span>\r\n          </div>\r\n          <form [formGroup]=\"searchLocation\">\r\n            <div class=\"widget-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"searchByLbl\">\r\n                      <b>Search Location By </b>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <select class=\"form-control\" formControlName=\"selectBy\" [(ngModel)]=\"choosePayType\"\r\n                      (ngModelChange)=\"vanTypeSelection(choosePayType)\">\r\n                      <option value=\"All\">All</option>\r\n                      <option value=\"vanId\">Location #</option>\r\n                      <option value=\"make\">Make</option>\r\n                      <option value=\"model\">Model</option>\r\n                      <option value=\"year\">Year</option>\r\n                      <option value=\"type\">Type</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-3\" *ngIf=\"All\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"vanId\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"vanId\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"make\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"make\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"model\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"model\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"year\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"year\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"type\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"type\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"Status\">\r\n                  <div class=\"form-group\">\r\n                    <span class=\"input-icon icon-right\">\r\n                      <input type=\"text\" class=\"form-control\" formControlName=\"status\">\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    &nbsp;&nbsp;&nbsp;&nbsp; <button type=\"submit\" class=\"btn btn-success shiny\"\r\n                      (click)=\"searchFunctionality()\"><i class=\"fa fa-search\"></i>&nbsp; Search</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button type=\"submit\" class=\"btn btn-danger shiny\" (click)=\"reset()\"><i\r\n                        class=\"fa fa-repeat\"></i>&nbsp;\r\n                      Reset</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- search van -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <button type=\"submit\" class=\"btn btn-success shiny\" (click)=\"addVan()\"><i class=\"fa fa-user-plus\"></i> Add\r\n          New Location</button>\r\n      </div>\r\n    </div><br />\r\n\r\n    <!-- Add Staff Popup -->\r\n    <!-- <div id=\"myVan\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <div class=\"widget-header blue\">\r\n              <span class=\"widget-caption\"><b>Assign Staff</b></span>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <br />\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 \">\r\n                  <div class=\"row\">\r\n\r\n                  </div><br />\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6\">\r\n                      <div class=\"form-group\">\r\n                        <span class=\"input-icon icon-right\">\r\n                          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\"\r\n                            placeholder=\"Eg: Search Staff\">\r\n                          <i class=\"fa fa-search\"></i>\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                  </div><br>\r\n                  <div class=\"table-scrollable\">\r\n                    <table class=\"table table-striped table-bordered table-hover\">\r\n                      <thead class=\"bordered-palegreen\">\r\n                        <tr>\r\n                          <th>\r\n                            Select\r\n                          </th>\r\n                          <th>\r\n                            Staff Id\r\n                          </th>\r\n                          <th>\r\n                            Staff Name\r\n                          </th>\r\n                          <th>\r\n                            Manager\r\n                          </th>\r\n                          <th>\r\n                            Staff Pay Structure\r\n                          </th>\r\n                          <th>\r\n                            Comm Rate\r\n                          </th>\r\n                          <th>\r\n                            Ratings\r\n                          </th>\r\n                          <th>\r\n                            Group\r\n                          </th>\r\n                          <th>\r\n                            Staff Status\r\n                          </th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let data of employeeList\">\r\n                          <td class=\"center\">\r\n                            <label>\r\n                              <input type=\"radio\" class=\"colored-success\" value=\"{{data.employeeId}}\"\r\n                                [(ngModel)]=\"selectEmployeeId\">\r\n                              <span class=\"text\"></span>\r\n                            </label></td>\r\n                          <td>{{data.employeeId}}</td>\r\n                          <td>\r\n                            {{data.firstName}}\r\n                          </td>\r\n                          <td>\r\n                            {{data.managerId}}\r\n                          </td>\r\n                          <td>\r\n                            {{data.compType}}\r\n                          </td>\r\n                          <td>\r\n                            {{data.compValue}}\r\n                          </td>\r\n                          <td>\r\n                            {{data.rating}}\r\n                          </td>\r\n                          <td>\r\n                            {{data.empgroup}}\r\n                          </td>\r\n                          <td>\r\n                            {{data.assignedStaff}}\r\n                          </td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-3\">\r\n                <div class=\"form-group\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3 button-center\">\r\n                <div class=\"form-group\">\r\n                  <button type=\"button\" class=\"btn btn-blue\" data-dismiss=\"modal\" (click)=\"saveSelectedInventory()\"><i\r\n                      class=\"fa fa-check\"></i>\r\n                    Save</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3 button-center\">\r\n                <div class=\"form-group\">\r\n                  <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\" (click)=\"cancelSelectedInventory()\"><i\r\n                      class=\"fa fa-times\"></i>\r\n                    Cancel</button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-3\">\r\n                <div class=\"form-group\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n    <!-- /Add Staff Popup -->\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n        <div class=\"well with-header with-footer three-bordered\">\r\n          <div class=\"header gray\">\r\n            List of Locations\r\n          </div>\r\n          <div class=\"widget-body\">\r\n            <div class=\"table-scrollable\">\r\n              <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                <thead class=\"flip-content bordered-purple\">\r\n                  <tr>\r\n                    <th>\r\n                      Status\r\n                    </th>\r\n                    <th>\r\n                      Location ID\r\n                    </th>\r\n                    <th>\r\n                      Name\r\n                    </th>\r\n                    <th>\r\n                      Make\r\n                    </th>\r\n                    <th>\r\n                      Model\r\n                    </th>\r\n                    <th>\r\n                      Year\r\n                    </th>\r\n                    <th>\r\n                      Type\r\n                    </th>\r\n                    <th>\r\n                      Assign Staff\r\n                    </th>\r\n                    <!-- <th>\r\n                      Assigned Staff\r\n                    </th> -->\r\n\r\n                    <th>\r\n                      View\r\n                    </th>\r\n                    <th>\r\n                      Edit\r\n                    </th>\r\n                    <th>\r\n                      Delete\r\n                    </th>\r\n\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let data of vanList | paginate: { itemsPerPage: 5, currentPage: p }; let i = index\">\r\n                    <td>\r\n                      {{data.status}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.vanId}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.name}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.make}}\r\n                    </td>\r\n\r\n                    <td>\r\n                      {{data.model}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.year}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.type}}\r\n                    </td>\r\n                    <td>\r\n                      {{data.assignedStaff}}\r\n                    </td>\r\n\r\n                    <td>\r\n                      <a class=\"btn btn-success shiny\" (click)=\"viewStaff(data.vanId)\">\r\n                        <i class=\"fa fa-eye\"></i>\r\n                      </a>\r\n                    </td>\r\n                    <td>\r\n                      <a class=\"btn btn-primary shiny\" (click)=\"editStaff(data.vanId)\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                      </a>\r\n                    </td>\r\n                    <td>\r\n                      <a class=\"btn btn-danger shiny\" (click)=\"deleteVan(data)\">\r\n                        <i class=\"fa fa-trash-o\"></i>\r\n                      </a>\r\n                    </td>\r\n                    <!-- <td>\r\n                      <a class=\"btn btn-warning shiny\" data-toggle=\"modal\" data-target=\"#myVan\" (click)=\"vanDetails(data.vanId)\">\r\n                        <i class=\"fa fa-user-plus\"></i>\r\n                      </a>\r\n                    </td> -->\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <div class=\"row-fluid\" *ngIf=\"!showList\">\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"col-lg-4\"></div>\r\n                  <div class=\"col-lg-4\">\r\n                    <div class=\"span6\"><b style=\"font-size: 25px\">No Records\r\n                        Available</b></div>\r\n                    <div class=\"col-lg-4\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row-fluid\">\r\n              <pagination-controls class=\"span10\" style=\"float:left\" (pageChange)=\"p = $event\"></pagination-controls>\r\n              <p class=\"span2\" style=\"float:right\">{{vanList?.length}} Records Found</p>\r\n            </div>\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Delete Equipment Status -->\r\n    <div style=\"width:100%;margin-top: 3em\">\r\n      <div class=\"backdrop\" [ngStyle]=\"{'display':displayFileModalEquipStatus}\"></div>\r\n      <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayFileModalEquipStatus}\"\r\n        style=\"width: 100em\">\r\n        <div class=\"modal-dialog modal-md\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n\r\n              <div class=\"widget-header blue\">\r\n                <span class=\"widget-caption\" style=\"font-size:0.9em;\"><b>Delete Location </b></span>\r\n              </div>\r\n              <div class=\"modal-body\" style=\"font-size:0.9em;\">\r\n                <p>Are you sure you want to delete: {{vanId}} {{type}} ?</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"onDeleteEquipmentStatus()\">Yes</button>\r\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandledEquipmentStatus()\">No</button>\r\n            </div>\r\n          </div> <!-- / .modal-content -->\r\n        </div> <!-- / .modal-dialog -->\r\n      </div>\r\n    </div>\r\n    <!-- Delete Equipment Status -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/proz/van/list-van/list-van.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/proz/van/list-van/list-van.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".databox .databox-text {\n  display: block;\n  font-size: 11px;\n  margin: 4px 0 2px;\n  position: relative;\n  width: 100px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.text-blue {\n  color: #5db2ff; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.item {\n  text-align: center; }\n\n.label {\n  font-size: 13px !important; }\n\n.label-wo-assigned {\n  background-color: #3C78D8 !important;\n  color: #FFFFFF !important; }\n\n.label-wo-unassigned {\n  background-color: #E06666 !important;\n  color: #FFFFFF !important; }\n\n.label-wo-holding {\n  background-color: #9900FF !important;\n  color: #FFFFFF !important; }\n\n.label-wo-cancelled {\n  background-color: #BF9000 !important;\n  color: #FFFFFF !important; }\n\n.label-awo-scheduled {\n  background-color: #00FF00 !important;\n  color: #000000 !important; }\n\n.label-awo-inprogress {\n  background-color: #A4C2F4 !important;\n  color: #000000 !important; }\n\n.label-awo-invoiced {\n  background-color: #FF9900 !important;\n  color: #000000 !important; }\n\n.label-awo-cancelled {\n  background-color: #FF0000 !important;\n  color: #000000 !important; }\n\n.label-awo-recall {\n  background-color: #FFFF00 !important;\n  color: #000000 !important; }\n\n.label-awo-estimate {\n  background-color: #E6B8AF !important;\n  color: #000000 !important; }\n\n.label-awo-pause {\n  background-color: #0000FF !important;\n  color: #FFFFFF !important; }\n\n.modal-footer {\n  border-top: 3px solid #333 !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.hr-blue {\n  border-top: 1px solid #869eb4 !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.status-active {\n  color: #00FF00;\n  font-weight: bold; }\n\n.status-inactive {\n  color: #FF0000;\n  font-weight: bold; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.wostatustag-blue {\n  background: #3C78D8;\n  color: #FFFFFF; }\n\n.wostatustag-pink {\n  background: #E06666;\n  color: #FFFFFF; }\n\n.wostatustag-violet {\n  background: #9900FF;\n  color: #FFFFFF; }\n\n.wostatustag-brown {\n  background: #BF9000;\n  color: #FFFFFF; }\n\n.assignedwostatustag-green {\n  background: #00FF00; }\n\n.assignedwostatustag-lblue {\n  background: #A4C2F4; }\n\n.assignedwostatustag-orange {\n  background: #FF9900; }\n\n.assignedwostatustag-red {\n  background: #FF0000; }\n\n.assignedwostatustag-yellow {\n  background: #FFFF00; }\n\n.assignedwostatustag-lpink {\n  background: #E6B8AF; }\n\n.assignedwostatustag-blue {\n  background: #0000FF; }\n\n/* -- General Tab - Group Tab -- */\n\n.text-center {\n  text-align: center; }\n\n.center {\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n/* -- /General Tab - Group Tab -- */\n\n/* LIST MODE */\n\n.center {\n  text-align: center; }\n\n.item {\n  text-align: center; }\n\n/* /LIST MODE */\n\n/* VIEW MODE */\n\n.form-title {\n  color: #5DB2FF;\n  /*display: block;\r\n   padding: 8px 0;*/\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n  margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\n.button-center {\n  text-align: center; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.alert {\n  background-color: red; }\n\n.error {\n  background-color: red; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.well.with-footer {\n  padding-bottom: 10px !important; }\n\n/* /VIEW MODE */\n\n#divcenter {\n  border-style: solid;\n  border-color: #1e90ff; }\n\n#cid {\n  padding-left: 9.8em; }\n\n#from {\n  padding-left: 9.8em; }\n\n#to {\n  padding-left: 9.8em; }\n\n.tab-content {\n  background-color: #fbfbfb;\n  padding: 1px 12px !important;\n  position: relative;\n  box-shadow: 1px 0 10px 1px rgba(0, 0, 0, 0.3); }\n\n.modal-title {\n  background-color: #5DB2FF; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n        padding: 8px 0;\r\n        border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n       margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.static {\n  color: red;\n  font-weight: bold; }\n\n.status-active {\n  color: #00FF00;\n  font-weight: bold; }\n\n.status-inactive {\n  color: #FF0000;\n  font-weight: bold; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n/* LIST MODE */\n\n.center {\n  text-align: center; }\n\n.item {\n  text-align: center; }\n\n/* /LIST MODE */\n\n/* VIEW MODE */\n\n.form-title {\n  color: #5DB2FF;\n  /*display: block;\r\n        padding: 8px 0;*/\n  border-bottom: 1px dashed #5DB2FF;\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n       margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\n.button-center {\n  text-align: center; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.well.with-footer {\n  padding-bottom: 10px !important; }\n\n/* /VIEW MODE */\n\n.static {\n  color: red;\n  font-weight: bold; }\n\n.noRecords {\n  color: blue;\n  font-weight: bold;\n  font-size: 12px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei92YW4vbGlzdC12YW4vRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3pcXHZhblxcbGlzdC12YW5cXGxpc3QtdmFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBYztFQUNkLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0csa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUVBO0VBQ0ksbUJBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0cscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUMzQjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNHLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUE7RUFDRyxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDRSxzQ0FBcUMsRUFDdEM7O0FBQ0Q7RUFDSyx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUNEO0VBQ0kseUNBQW1ELEVBQ3REOztBQUNEO0VBQ0cscUNBQW9DO0VBQ3BDLHVCQUFzQjtFQUN0QixrQkFBaUIsRUFDcEI7O0FBSUQ7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksZUFBYztFQUNkLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM5QixvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSxvQkFBbUI7RUFDbkIsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLG9CQUFtQjtFQUNuQixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksb0JBQW1CO0VBQ25CLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxvQkFBbUI7RUFDbkIsZUFBYyxFQUNqQjs7QUFJRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFHRCxtQ0FBbUM7O0FBQ25DO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUNELG9DQUFvQzs7QUFDcEMsZUFBZTs7QUFDZjtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFpQixFQUNwQjs7QUFDRCxnQkFBZ0I7O0FBR2hCLGVBQWU7O0FBQ2Y7RUFDRyxlQUFlO0VBQ2Y7b0JBQ2lCO0VBQ2pCLGtDQUFpQztFQUNqQyxnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjt3QkFDc0IsRUFDdkI7O0FBRUQ7RUFDRyxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2pCOztBQUVEO0VBQ0csc0NBQXFDLEVBQ3ZDOztBQUVEO0VBQ0csbUJBQWtCLEVBQ3BCOztBQUVEO0VBQ0csYUFBWSxFQUNkOztBQUVEO0VBQ0csV0FBVTtFQUNWLG1CQUFrQixFQUNwQjs7QUFFRDtFQUNHLGFBQVk7RUFDWixtQkFBa0IsRUFDcEI7O0FBRUQ7RUFDRyxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3BCOztBQUVEO0VBQ0csNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3JDOztBQUVEO0VBQ0csbUJBQWtCLEVBQ3BCOztBQUVEO0VBQ0csbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDcEI7O0FBRUQ7RUFDRyxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzNCOztBQUVEO0VBQ0cscUNBQW9DO0VBQ3BDLHVCQUFzQjtFQUN0QixrQkFBaUIsRUFDbkI7O0FBRUQ7RUFDRyxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzNCOztBQUVEO0VBQ0csdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN0Qzs7QUFDRDtFQUNJLHNCQUFvQixFQUN2Qjs7QUFDRDtFQUNJLHNCQUFvQixFQUN2Qjs7QUFFRDtFQUNHLG9DQUFtQyxFQUNyQzs7QUFFRDtFQUNHLGdDQUErQixFQUNqQzs7QUFDRCxnQkFBZ0I7O0FBR2hCO0VBQ0ksb0JBQWtCO0VBQ2xCLHNCQUFvQixFQUNuQjs7QUFDRDtFQUVBLG9CQUFtQixFQUNsQjs7QUFDRDtFQUVBLG9CQUFtQixFQUNsQjs7QUFDRDtFQUVBLG9CQUFtQixFQUNsQjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6Qiw2QkFBNEI7RUFDNUIsbUJBQWtCO0VBQ2xCLDhDQUF5QyxFQUM1Qzs7QUFDRDtFQUNJLDBCQUEwQixFQUM3Qjs7QUFDRDtFQUNJLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7OzRDQUVvQztFQUNwQyxnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjs2QkFDc0IsRUFFeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksc0NBQXFDLEVBRXhDOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkM7O0FBQ0Q7RUFDSSwwQkFBeUI7RUFDekIsa0NBQWlDO0VBQ2pDLDRDQUEyQyxFQUM5Qzs7QUFFRDtFQUNJLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixrQ0FBaUM7RUFDakMsNENBQTJDLEVBQzlDOztBQUVEO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksV0FBUztFQUNULGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzlCLG9DQUFvQyxFQUN0Qzs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBQ0QsZUFBZTs7QUFDZjtFQUNLLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFpQixFQUNwQjs7QUFDRCxnQkFBZ0I7O0FBR2pCLGVBQWU7O0FBQ2Q7RUFDRyxlQUFlO0VBQ2Y7eUJBQ2lCO0VBQ2pCLGtDQUFpQztFQUNqQyxnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjs2QkFDc0IsRUFDeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLHVCQUFzQjtFQUN0QixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2Qzs7QUFFRDtFQUNJLG9DQUFtQyxFQUN0Qzs7QUFFRDtFQUNJLGdDQUErQixFQUNsQzs7QUFDRCxnQkFBZ0I7O0FBQ2hCO0VBQ0ksV0FBUztFQUNULGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLFlBQVU7RUFDVixrQkFBaUI7RUFDakIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wcm96L3Zhbi9saXN0LXZhbi9saXN0LXZhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhYm94IC5kYXRhYm94LXRleHQge1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICBtYXJnaW46IDRweCAwIDJweDtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAuYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWJsdWV7XHJcbiAgICBjb2xvcjogIzVkYjJmZjtcclxufVxyXG4uYnRuLWJsdWV7ICAgIFxyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4gXHJcbiAuaXRlbXtcclxuICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuIH1cclxuXHJcbiAubGFiZWx7XHJcbiAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmxhYmVsLXdvLWFzc2lnbmVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNDNzhEOCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAubGFiZWwtd28tdW5hc3NpZ25lZHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTA2NjY2ICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAubGFiZWwtd28taG9sZGluZ3tcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkwMEZGICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAubGFiZWwtd28tY2FuY2VsbGVke1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNCRjkwMDAgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5sYWJlbC1hd28tc2NoZWR1bGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwRkYwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuIC5sYWJlbC1hd28taW5wcm9ncmVzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNEMyRjQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1hd28taW52b2ljZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5OTAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtYXdvLWNhbmNlbGxlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1hd28tcmVjYWxse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkYwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLWF3by1lc3RpbWF0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkI4QUYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1hd28tcGF1c2V7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMEZGICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tYmx1ZXsgICAgXHJcbiAgICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuaHItYmx1ZXsgICAgXHJcbiAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxMzQsIDE1OCwgMTgwKSAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmJsdWV7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuXHJcbi5zdGF0dXMtYWN0aXZle1xyXG4gICAgY29sb3I6ICMwMEZGMDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnN0YXR1cy1pbmFjdGl2ZXtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbnByb2dyZXNze1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aHJlZS1ib3JkZXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbn1cclxuXHJcbi5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tZ3JheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tYmx1ZXsgICAgXHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud29zdGF0dXN0YWctYmx1ZXtcclxuICAgIGJhY2tncm91bmQ6ICMzQzc4RDg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4ud29zdGF0dXN0YWctcGlua3tcclxuICAgIGJhY2tncm91bmQ6ICNFMDY2NjY7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4ud29zdGF0dXN0YWctdmlvbGV0e1xyXG4gICAgYmFja2dyb3VuZDogIzk5MDBGRjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi53b3N0YXR1c3RhZy1icm93bntcclxuICAgIGJhY2tncm91bmQ6ICNCRjkwMDA7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuXHJcblxyXG4uYXNzaWduZWR3b3N0YXR1c3RhZy1ncmVlbntcclxuICAgIGJhY2tncm91bmQ6ICMwMEZGMDA7XHJcbn1cclxuLmFzc2lnbmVkd29zdGF0dXN0YWctbGJsdWV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQTRDMkY0O1xyXG59XHJcbi5hc3NpZ25lZHdvc3RhdHVzdGFnLW9yYW5nZXtcclxuICAgIGJhY2tncm91bmQ6ICNGRjk5MDA7XHJcbn1cclxuLmFzc2lnbmVkd29zdGF0dXN0YWctcmVke1xyXG4gICAgYmFja2dyb3VuZDogI0ZGMDAwMDtcclxufVxyXG4uYXNzaWduZWR3b3N0YXR1c3RhZy15ZWxsb3d7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRjAwO1xyXG59XHJcbi5hc3NpZ25lZHdvc3RhdHVzdGFnLWxwaW5re1xyXG4gICAgYmFja2dyb3VuZDogI0U2QjhBRjtcclxufVxyXG4uYXNzaWduZWR3b3N0YXR1c3RhZy1ibHVle1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDBGRjtcclxufVxyXG5cclxuXHJcbi8qIC0tIEdlbmVyYWwgVGFiIC0gR3JvdXAgVGFiIC0tICovXHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ncmF5eyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tZ3JheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tYmx1ZXsgICAgXHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC0tIC9HZW5lcmFsIFRhYiAtIEdyb3VwIFRhYiAtLSAqL1xyXG4vKiBMSVNUIE1PREUgKi9cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSBcclxuXHJcbi5pdGVte1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLyogL0xJU1QgTU9ERSAqL1xyXG5cclxuXHJcbi8qIFZJRVcgTU9ERSAqL1xyXG4uZm9ybS10aXRsZXtcclxuICAgY29sb3I6ICAjNURCMkZGO1xyXG4gICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICBwYWRkaW5nOiA4cHggMDsqL1xyXG4gICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1REIyRkY7XHJcbiAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxufVxyXG5cclxuLm1hbmRhdG9yeXtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5oci1ncmF5eyAgICBcclxuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxufSBcclxuXHJcbi5idXR0b24tY2VudGVye1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5tb2Nre1xyXG4gICBjb2xvcjogcmVkOyAgICBcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9jay1jb25me1xyXG4gICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnByb2dyZXNze1xyXG4gICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGhyZWUtYm9yZGVyZWR7XHJcbiAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxuICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2hlY2tib3gtY2VudGVyIHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyYXl7ICAgIFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibHVleyAgICBcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJ0bi1ncmF5e1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tYmx1ZXsgICAgXHJcbiAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4uYWxlcnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxufVxyXG4uZXJyb3J7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2VsbC53aXRoLWZvb3RlciB7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogL1ZJRVcgTU9ERSAqL1xyXG5cclxuXHJcbiNkaXZjZW50ZXJ7XHJcbiAgICBib3JkZXItc3R5bGU6c29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IzFlOTBmZjtcclxuICAgIH1cclxuICAgICNjaWRcclxuICAgIHtcclxuICAgIHBhZGRpbmctbGVmdDo5LjhlbSA7XHJcbiAgICB9XHJcbiAgICAjZnJvbVxyXG4gICAge1xyXG4gICAgcGFkZGluZy1sZWZ0OjkuOGVtIDtcclxuICAgIH1cclxuICAgICN0b1xyXG4gICAge1xyXG4gICAgcGFkZGluZy1sZWZ0OjkuOGVtIDtcclxuICAgIH1cclxuXHJcbiAgICAudGFiLWNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgICAgICAgcGFkZGluZzogMXB4IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDAgMTBweCAxcHggcmdiYSgwLDAsMCwuMyk7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtdGl0bGV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICM1REIyRkY7XHJcbiAgICB9XHJcbiAgICAuZm9ybS10aXRsZXsgICAgXHJcbiAgICAgICAgY29sb3I6ICAjNWRiMmZmO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuICAgIFxyXG4gICAgICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0OyovXHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYW5kYXRvcnl7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaHItZ3JheS10aGlja3sgICAgXHJcbiAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC5oci1ncmF5eyAgICBcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICBpbnB1dHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tb2Nre1xyXG4gICAgICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1vY2stY29uZntcclxuICAgICAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlucHJvZ3Jlc3N7XHJcbiAgICAgICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGhyZWUtYm9yZGVyZWR7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZ3JheXsgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idG4tZ3JheXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1ibHVleyAgICBcclxuICAgICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUuY29sbGFwc2VkIHtcclxuICAgICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlOmhvdmVyOmFmdGVyIHtcclxuICAgICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlIHtcclxuICAgICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlOmFmdGVyIHtcclxuICAgICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3RhdGlje1xyXG4gICAgICAgIGNvbG9yOnJlZDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5zdGF0dXMtYWN0aXZle1xyXG4gICAgICAgIGNvbG9yOiAjMDBGRjAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3RhdHVzLWluYWN0aXZle1xyXG4gICAgICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wcm9ncmVzc3tcclxuICAgICAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50aHJlZS1ib3JkZXJlZHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgICAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZ3JheXsgICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAvKiBMSVNUIE1PREUgKi9cclxuICAgIC5jZW50ZXJ7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICB9IFxyXG4gICAgXHJcbiAgICAgLml0ZW17XHJcbiAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgIH1cclxuICAgICAvKiAvTElTVCBNT0RFICovXHJcbiAgICBcclxuICAgIFxyXG4gICAgLyogVklFVyBNT0RFICovXHJcbiAgICAgLmZvcm0tdGl0bGV7XHJcbiAgICAgICAgY29sb3I6ICAjNURCMkZGO1xyXG4gICAgICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7Ki9cclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1REIyRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFuZGF0b3J5e1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhyLWdyYXl7ICAgIFxyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICAuYnV0dG9uLWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0e1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1vY2t7XHJcbiAgICAgICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubW9jay1jb25me1xyXG4gICAgICAgIGNvbG9yOiBncmVlbjsgICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wcm9ncmVzc3tcclxuICAgICAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50aHJlZS1ib3JkZXJlZHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgICAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGV4dC1jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hlY2tib3gtY2VudGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ncmF5eyAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJsdWV7ICAgIFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLWdyYXl7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idG4tYmx1ZXsgICAgXHJcbiAgICAgICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAud2VsbC53aXRoLWZvb3RlciB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC8qIC9WSUVXIE1PREUgKi9cclxuICAgIC5zdGF0aWN7XHJcbiAgICAgICAgY29sb3I6cmVkO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLm5vUmVjb3Jkc3tcclxuICAgICAgICBjb2xvcjpibHVlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/proz/van/list-van/list-van.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/proz/van/list-van/list-van.component.ts ***!
  \*********************************************************/
/*! exports provided: ListVanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListVanComponent", function() { return ListVanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var ListVanComponent = /** @class */ (function () {
    function ListVanComponent(beyond, router, activatedRoute, formBuilder, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toastr = toastr;
    }
    ListVanComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        console.log("loginData" + JSON.stringify(this.loginData.loginCode));
        this.listVans();
        this.listEmployeeDetails();
        this.searchLocation = this.formBuilder.group({
            vanId: [null],
            model: [null],
            make: [null],
            year: [null],
            type: [null],
            status: [null],
            selectBy: [null]
        });
    };
    ListVanComponent.prototype.listVans = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/listVan/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                console.log("group Details" + JSON.stringify(response));
                _this.vanList = response.response;
                console.log("list" + JSON.stringify(_this.vanList));
                _this.showList = true;
            }
            else {
                _this.vanList = [];
                _this.showList = false;
            }
        });
    };
    ListVanComponent.prototype.editStaff = function (id) {
        this.router.navigate(['/proz/editLocation', id]);
    };
    ListVanComponent.prototype.viewStaff = function (id) {
        this.router.navigate(['/proz/viewLoation', id]);
    };
    // Add Van
    ListVanComponent.prototype.addVan = function () {
        this.router.navigate(['/proz/addLocatin']);
    };
    // Add Van
    // get staff details
    ListVanComponent.prototype.listEmployeeDetails = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/employeeList/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                console.log("employee Details" + JSON.stringify(response));
                _this.employeeList = response.response;
                console.log("list" + JSON.stringify(_this.employeeList));
                _this.showEmployeeData = true;
                return false;
            }
            else {
                _this.showEmployeeData = false;
            }
        }, function (error) {
            console.log("Unable to connect to server");
        });
    };
    // get staff details
    ListVanComponent.prototype.vanTypeSelection = function (x) {
        console.log("vanTypeSelection" + x);
        if (x == "vanId") {
            this.vanId = true;
            this.make = false;
            this.model = false;
            this.year = false;
            this.type = false;
            this.Status = false;
            this.All = false;
        }
        if (x == "make") {
            this.vanId = false;
            this.make = true;
            this.model = false;
            this.year = false;
            this.type = false;
            this.Status = false;
            this.All = false;
        }
        if (x == "model") {
            this.vanId = false;
            this.make = false;
            this.model = true;
            this.year = false;
            this.type = false;
            this.Status = false;
            this.All = false;
        }
        if (x == "year") {
            this.vanId = false;
            this.make = false;
            this.model = false;
            this.year = true;
            this.type = false;
            this.Status = false;
            this.All = false;
        }
        if (x == "type") {
            this.vanId = false;
            this.make = false;
            this.model = false;
            this.year = false;
            this.type = true;
            this.Status = false;
            this.All = false;
        }
        if (x == "Status") {
            this.vanId = false;
            this.make = false;
            this.model = false;
            this.year = false;
            this.type = false;
            this.All = false;
            this.Status = true;
        }
    };
    // saveSelectedInventory(){
    //   console.log("Selected Radio Btton" + this.selectEmployeeId)
    //   this.mobileValidation()
    // }
    ListVanComponent.prototype.vanDetails = function (vanId) {
        console.log("Van Id" + vanId);
        this.getVanId = vanId;
    };
    ListVanComponent.prototype.saveSelectedInventory = function () {
        var _this = this;
        console.log("staffid" + this.selectEmployeeId);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"];
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getStaffRole/' + this.selectEmployeeId)
            .subscribe(function (data) {
            var getStaffRole1 = data.json();
            if (getStaffRole1.status == 200) {
                console.log("staffName" + getStaffRole1.response[0].firstName);
                _this.staffName = getStaffRole1.response[0].firstName;
                // console.log('exists' + JSON.stringify(getStaffRole1))
                _this.updateVanData(_this.staffName);
            }
            else {
                // this.mobileNumberValidation = true;
                console.log('does not exists');
            }
        }, function (error) {
            _this.toastr.error('Failed to Connect Server');
        });
    };
    ListVanComponent.prototype.updateVanData = function (staffName) {
        var _this = this;
        var obj = {
            "vanId": "" + this.getVanId,
            "staffId": "" + this.selectEmployeeId,
            "staffName": "" + staffName,
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/updateVanDetails', obj)
            .subscribe(function (data) {
            var updateVanDetails = data.json();
            if (updateVanDetails.status == 200) {
                _this.listVans();
            }
            else {
                // this.mobileNumberValidation = true;
                console.log('does not exists');
            }
        }, function (error) {
            _this.toastr.error('Failed to Connect Server');
        });
    };
    ListVanComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    ListVanComponent.prototype.list = function () {
        this.router.navigate(['/inventory/listInventory']);
    };
    /* Delete Vans*/
    ListVanComponent.prototype.deleteVan = function (data) {
        // var id = id;
        this.displayFileModalEquipStatus = "block";
        this.vanId = data.vanId;
        this.type = data.type;
        console.log("id.." + this.vanId);
    };
    ListVanComponent.prototype.onDeleteEquipmentStatus = function () {
        var _this = this;
        console.log("equipmentStatus is delete" + this.vanId);
        event.preventDefault();
        event.stopPropagation();
        this.http
            .get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/deleteVan/" + this.vanId)
            .subscribe(function (data) {
            _this.vans = data;
            if (_this.vans.status == 200) {
                _this.displayFileModalEquipStatus = "none";
                _this.toastr.success("Location deleted Successfully ");
                _this.listVans();
            }
            else {
                console.log("The else");
            }
        });
    };
    ListVanComponent.prototype.onCloseHandledEquipmentStatus = function () {
        this.displayFileModalEquipStatus = "none";
    };
    /* Delete Vans*/
    ListVanComponent.prototype.reset = function () {
        this.searchLocation.reset();
        this.listVans();
    };
    ListVanComponent.prototype.searchFunctionality = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        var obj = {
            "vanId": this.searchLocation.value.vanId,
            "type": this.searchLocation.value.type,
            "make": this.searchLocation.value.make,
            "model": this.searchLocation.value.model,
            "year": this.searchLocation.value.year,
            "status": this.searchLocation.value.status,
            "selectBy": this.searchLocation.value.selectBy,
        };
        console.log(obj);
        if (this.searchLocation.value.selectBy != 'All') {
            this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/searchLocations/' + this.loginData.loginCode, [
                { id: 'vanId', value: obj.vanId },
                { id: 'type', value: obj.type },
                { id: 'make', value: obj.make },
                { id: 'model', value: obj.model },
                { id: 'year', value: obj.year },
                { id: 'status', value: obj.status },
            ], options).subscribe(function (data) {
                _this.locationData = data.json();
                //console.log("Inventory Search" + JSON.stringify(this.inventorySearch))
                if (_this.locationData.status == 200) {
                    _this.vanList = _this.locationData.response;
                    //console.log("searchInventoryData values" + JSON.stringify(this.inventoryListDetails))
                    _this.showList = true;
                    _this.searchLocation.reset();
                }
                else {
                    _this.showList = false;
                    _this.vanList = [];
                }
            });
        }
        else {
            this.listVans();
        }
    };
    ListVanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"]],
            selector: 'app-list-van',
            template: __webpack_require__(/*! ./list-van.component.html */ "./src/app/proz/van/list-van/list-van.component.html"),
            styles: [__webpack_require__(/*! ./list-van.component.scss */ "./src/app/proz/van/list-van/list-van.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ListVanComponent);
    return ListVanComponent;
}());



/***/ }),

/***/ "./src/app/proz/van/view-van/view-van.component.html":
/*!***********************************************************!*\
  !*** ./src/app/proz/van/view-van/view-van.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <!-- <li>\r\n            <a href=\"#\">Location</a>\r\n          </li> -->\r\n          <li>\r\n            <a (click)=\"list()\">List of Locations</a>\r\n          </li>\r\n          <li class=\"active\">View of Location\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>View Location</h1>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered\">\r\n                      <div class=\"header gray\">\r\n                        <span class=\"widget-caption\">View Location</span>\r\n                      </div>\r\n\r\n                      <div id=\"registration-form\">\r\n                        <!-- Add Service Category -->\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"proIDLbl\">\r\n                                <b>Location ID </b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"proIDVal\">\r\n                                {{vanData?.vanId}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"vanIDLbl\">\r\n                                <b>Type </b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"vanIDVal\">\r\n                                {{vanData.type}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"makeLbl\">\r\n                                <b>Name</b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"makeVal\">\r\n                                {{vanData.name}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"modelLbl\">\r\n                                <b>Status </b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"modelVal\">\r\n                                {{vanData.status}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"yearLbl\">\r\n                                <b> Make </b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"yearVal\">\r\n                                {{vanData.make}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"colorLbl\">\r\n                                <b> Model </b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"colorVal\">\r\n                                {{vanData.model}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <!-- <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"listPriceLbl\">\r\n                                <b>StaffId</b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"listPriceVal\">\r\n                                {{vanData.staffId}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"descriptionLbl\">\r\n                                <b>Staff Role</b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"descriptionVal\">\r\n                                {{vanData.staffRole}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                        </div> -->\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"typeLbl\">\r\n                                <b> Year</b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"typeVal\">\r\n                                {{vanData.year}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"descriptionLbl\">\r\n                                <b>Color</b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"descriptionVal\">\r\n                                {{vanData.color}}\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"descriptionLbl\">\r\n                                <b>Picture</b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"descriptionVal\">\r\n                                <img class=\"beller-img\" alt=\"Location Image\" [src]=\"imagePreview\"\r\n                                  style=\"height:120px;width:100px;\" />\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"pictureLbl\">\r\n                                <b> Assign To Staff</b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              {{vanData.assignedStaff}}</div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"descriptionLbl\">\r\n                                <b>Description</b>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                              <label for=\"descriptionVal\">\r\n                            {{vanData.description}}  </label>\r\n                            </div>\r\n                          </div>\r\n                       </div>\r\n\r\n                        <!-- /View Service Category -->\r\n                        <br />\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3 button-right\">\r\n                            <div class=\"form-group\">\r\n                              <button type=\"submit\" class=\"btn btn-blue\" (click)=\"editLabourRate(vanData.vanId)\"><i class=\"fa fa-pencil\"></i> Edit\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3 button-left\">\r\n                            <div class=\"form-group\">\r\n                             \r\n                                  <button type=\"submit\" class=\"btn btn-danger\" (click)=\"okLabourRate()\"><i class=\"fa fa-check\"></i> OK </button>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-3\">\r\n                            <div class=\"form-group\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/proz/van/view-van/view-van.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/proz/van/view-van/view-van.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".databox .databox-text {\n  display: block;\n  font-size: 11px;\n  margin: 4px 0 2px;\n  position: relative;\n  width: 100px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.item {\n  text-align: center; }\n\n.label {\n  font-size: 13px !important; }\n\n.label-wo-assigned {\n  background-color: #3C78D8 !important;\n  color: #FFFFFF !important; }\n\n.label-wo-unassigned {\n  background-color: #E06666 !important;\n  color: #FFFFFF !important; }\n\n.label-wo-holding {\n  background-color: #9900FF !important;\n  color: #FFFFFF !important; }\n\n.label-wo-cancelled {\n  background-color: #BF9000 !important;\n  color: #FFFFFF !important; }\n\n.label-awo-scheduled {\n  background-color: #00FF00 !important;\n  color: #000000 !important; }\n\n.label-awo-inprogress {\n  background-color: #A4C2F4 !important;\n  color: #000000 !important; }\n\n.label-awo-invoiced {\n  background-color: #FF9900 !important;\n  color: #000000 !important; }\n\n.label-awo-cancelled {\n  background-color: #FF0000 !important;\n  color: #000000 !important; }\n\n.label-awo-recall {\n  background-color: #FFFF00 !important;\n  color: #000000 !important; }\n\n.label-awo-estimate {\n  background-color: #E6B8AF !important;\n  color: #000000 !important; }\n\n.label-awo-pause {\n  background-color: #0000FF !important;\n  color: #FFFFFF !important; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.checkbox, .radio {\n  position: relative;\n  display: block;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\n.col-sm-6 {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.button-center {\n  text-align: center; }\n\n.button-left {\n  text-align: left; }\n\n.button-right {\n  text-align: right; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.center {\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.item {\n  text-align: center; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvei92YW4vdmlldy12YW4vRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByb3pcXHZhblxcdmlldy12YW5cXHZpZXctdmFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssZUFBYztFQUNkLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0csa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkM7O0FBRUE7RUFDSSxtQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDRyxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzNCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0cscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFFQTtFQUNHLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHFDQUFvQztFQUNwQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0kscUNBQW9DO0VBQ3BDLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNLLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7c0JBQ2lCO0VBR2pCLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCOzBCQUNzQixFQUV4Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFDeEM7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFFeEM7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM5QixvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLDJCQUEwQjtFQUMxQiw4QkFBNkIsRUFDaEM7O0FBRUQ7RUFDSSw2QkFBNEI7RUFDNUIsOEJBQTZCLEVBQ2hDOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUVEO0VBQ0EsbUJBQWtCLEVBQ2pCOztBQUVEO0VBQ0csaUJBQWdCLEVBQ2xCOztBQUVGO0VBQ0ksa0JBQWlCLEVBQ2hCOztBQUVKO0VBQ0ksMEJBQXlCO0VBQ3pCLGtDQUFpQztFQUNqQyw0Q0FBMkMsRUFDOUM7O0FBRUQ7RUFDSSx1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsa0NBQWlDLEVBQ3BDOztBQUVEO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLG1CQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb3ovdmFuL3ZpZXctdmFuL3ZpZXctdmFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGFib3ggLmRhdGFib3gtdGV4dCB7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgIG1hcmdpbjogNHB4IDAgMnB4O1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5idG4tZ3JheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tYmx1ZXsgICAgXHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcbiBcclxuIC5pdGVte1xyXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gfVxyXG5cclxuIC5sYWJlbHtcclxuICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAubGFiZWwtd28tYXNzaWduZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0M3OEQ4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5sYWJlbC13by11bmFzc2lnbmVke1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNFMDY2NjYgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5sYWJlbC13by1ob2xkaW5ne1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTAwRkYgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuIC5sYWJlbC13by1jYW5jZWxsZWR7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JGOTAwMCAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmxhYmVsLWF3by1zY2hlZHVsZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBGRjAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4gLmxhYmVsLWF3by1pbnByb2dyZXNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E0QzJGNCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLWF3by1pbnZvaWNlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjk5MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1hd28tY2FuY2VsbGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLWF3by1yZWNhbGx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwtYXdvLWVzdGltYXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2QjhBRiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxhYmVsLWF3by1wYXVzZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwRkYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvcm0tdGl0bGV7XHJcbiAgICAgY29sb3I6ICAjNWRiMmZmO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuIFxyXG4gICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICAgcGFkZGluZzogOHB4IDA7Ki8gICAgXHJcbiAgICAgLy8gY29sb3I6ICAjN2UzNzk0O1xyXG4gICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzdlMzc5NDtcclxuICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyovXHJcbiBcclxuIH1cclxuIFxyXG4gLm1hbmRhdG9yeXtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiB9XHJcbiBcclxuIC5oci1ncmF5LXRoaWNreyAgICBcclxuICAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gfSBcclxuIFxyXG4gLmhyLWdyYXl7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZTM3OTQgIWltcG9ydGFudDtcclxuIH0gXHJcbiBcclxuIGlucHV0e1xyXG4gICAgIGNvbG9yOiBibGFjaztcclxuIH1cclxuIFxyXG4gLm1vY2t7XHJcbiAgICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAubW9jay1jb25me1xyXG4gICAgIGNvbG9yOiBncmVlbjsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuaW5wcm9ncmVzc3tcclxuICAgICBjb2xvcjogb3JhbmdlcmVkOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC50aHJlZS1ib3JkZXJlZHtcclxuICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqL1xyXG4gfVxyXG4gXHJcbiAuY2hlY2tib3gsIC5yYWRpbyB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuY29sLXNtLTYge1xyXG4gICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuICBcclxuIC5idG4tZ3JheXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ0bi1ibHVleyAgICBcclxuICAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmJ1dHRvbi1jZW50ZXJ7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcblxyXG4gLmJ1dHRvbi1sZWZ0e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuIH1cclxuXHJcbi5idXR0b24tcmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuIFxyXG4gLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZS5jb2xsYXBzZWQge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6aG92ZXI6YWZ0ZXIge1xyXG4gICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlOmFmdGVyIHtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmNlbnRlcntcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLml0ZW17XHJcbiAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/proz/van/view-van/view-van.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/proz/van/view-van/view-van.component.ts ***!
  \*********************************************************/
/*! exports provided: ViewVanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVanComponent", function() { return ViewVanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var ViewVanComponent = /** @class */ (function () {
    function ViewVanComponent(beyond, router, route, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.imagePreview = "assets/img/no-image.png";
    }
    ViewVanComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.vanId = this.route.snapshot.params['vanId'];
        this.viewPayment();
    };
    ViewVanComponent.prototype.viewPayment = function () {
        var _this = this;
        console.log("view called" + this.vanId);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/viewVan/' + this.vanId, options)
            .subscribe(function (data) {
            var pay = data.json();
            _this.vanData = pay.response[0];
            console.log("vanData" + JSON.stringify(_this.vanData));
            if (_this.vanData.images == '') {
                _this.imagePreview = "assets/img/no-image.png";
                console.log("resume" + _this.imagePreview);
            }
            else {
                _this.imagePreview = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/" + _this.vanData.images;
                console.log("resume1" + _this.imagePreview);
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    ViewVanComponent.prototype.editLabourRate = function (id) {
        this.router.navigate(['/proz/editLocation', id]);
    };
    ViewVanComponent.prototype.okLabourRate = function () {
        this.router.navigate(['/proz/listLocations']);
    };
    ViewVanComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    ViewVanComponent.prototype.list = function () {
        this.router.navigate(['/proz/listLocations']);
    };
    ViewVanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"]],
            selector: 'app-view-van',
            template: __webpack_require__(/*! ./view-van.component.html */ "./src/app/proz/van/view-van/view-van.component.html"),
            styles: [__webpack_require__(/*! ./view-van.component.scss */ "./src/app/proz/van/view-van/view-van.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ViewVanComponent);
    return ViewVanComponent;
}());



/***/ })

}]);
//# sourceMappingURL=proz-proz-module.js.map