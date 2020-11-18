(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pricebook-pricebook-module"],{

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/add-pricebook-services/add-pricebook-services.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/add-pricebook-services/add-pricebook-services.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a>PriceBook</a>\r\n          </li>\r\n          <li>\r\n            <a>PriceBook Services</a>\r\n          </li>\r\n          <li>\r\n            <a (click)=\"list()\">List of PriceBook Services</a>\r\n          </li>\r\n          <li class=\"active\">Add PriceBook Services</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Add PriceBook Services</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered \">\r\n                      <div class=\"header gray\">\r\n                        Add PriceBook Service\r\n                      </div>\r\n                      <!-- form1 -->\r\n                      <div id=\"registration-form\">\r\n                        <form [formGroup]=\"addPriceBook1\" (ngSubmit)=\"onSubmit()\">\r\n                          <!-- Add PriceBook Services -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"serviceIDLbl\">\r\n                                      <b>Service ID <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"\" value=\"{{serviceNumber}}\"\r\n                                        readonly style=\"background-color: #F2F2F2; color: black;\">\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"customerNameLbl\">\r\n                                      <b>Main Category <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <select class=\"form-control\" id=\"mainCategory2\" formControlName=\"category\"\r\n                                      name=\"status\" required (change)=\"changeCategory()\">\r\n                                      <option value=\"\">Select</option>\r\n                                      <option *ngFor=\"let data of proCategoryList\" value={{data.categoryName}}>\r\n                                        {{data.categoryName}}\r\n                                      </option>\r\n                                    </select>\r\n                                    <div *ngIf=\"submitted && f.category.errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f.category.errors.required\">\r\n                                        <p style=\"color: red; font-size: 11px\">Enter Main Category</p>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"creditLimitLbl\">\r\n                                      <b>Subcategory <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <select class=\"form-control\" name=\"status\" formControlName=\"subCategory\" required>\r\n                                      <option value=\"\">Select</option>\r\n                                      <option *ngFor=\"let data of subCategoryServices\" value={{data.subCategory}}>\r\n                                        {{data.subCategory}}\r\n                                      </option>\r\n                                    </select>\r\n                                    <div *ngIf=\"submitted && f.subCategory.errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f.subCategory.errors.required\">\r\n                                        <p style=\"color: red; font-size: 11px\">Enter Sub category </p>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                              </div>\r\n                              <br>\r\n                              <div class=\"row\">\r\n\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"sourceLbl\">\r\n                                      <b>Service Title <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-9\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" formControlName=\"description\"\r\n                                        placeholder=\"\">\r\n                                    </span>\r\n                                    <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f.description.errors.required\">\r\n                                        <p style=\"color: red; font-size: 11px\">Enter Description </p>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                              </div>\r\n                              <br>\r\n                              <div class=\"row\">\r\n\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"termsLbl\">\r\n                                      <b>Lead Cost($) <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                        value={{settingLEADCOSTValue}} readonly\r\n                                        style=\"background-color: #F2F2F2; color: black;\">\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"sourceLbl\">\r\n                                      <b>TOC($) <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"\" value={{settingTOCValue}}\r\n                                        readonly style=\"background-color: #F2F2F2; color: black;\">\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <br>\r\n                            </div>\r\n                          </div>\r\n                          <!-- Add PriceBook Services -->\r\n\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <hr class=\"hr-gray-thick\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n\r\n\r\n                          <!-- Collapsible -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"panel-group accordion\" id=\"accordions\">\r\n                                <!-- Cost Estimate - Collapsible -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseOne\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Cost Estimate\r\n                                        <span *ngIf=\"costEstimate\" class=\"error\">Please add Cost Estimate Data</span>\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                                    <div>\r\n                                      <!-- <form [formGroup]=\"CostEstimate\"> -->\r\n                                      <div class=\"panel-body border-red\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                            <!-- Inventory & Labor List -->\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-xs-12 col-md-12\">\r\n                                                <div class=\"widget\">\r\n                                                  <div class=\"widget-header gray with-footer\">\r\n                                                    <span class=\"widget-caption\">Material</span>\r\n                                                  </div>\r\n                                                  <div class=\"widget-body\">\r\n                                                    <div class=\"flip-scroll\">\r\n                                                      <form [formGroup]=\"addPriceBookService\">\r\n                                                        <a class=\"btn btn-xs-two btn-primary\" data-toggle=\"modal\"\r\n                                                          data-target=\"#myInventory\">\r\n                                                          <i class=\"fa fa-plus\"></i> Select Material\r\n                                                        </a> <br /><br />\r\n                                                        <table\r\n                                                          class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                                                          <thead class=\"flip-content bordered-palegreen\">\r\n                                                            <tr>\r\n                                                              <th>\r\n                                                                Item #\r\n                                                              </th>\r\n                                                              <!-- <th>\r\n                                                                Type\r\n                                                              </th> -->\r\n                                                              <th>\r\n                                                                Name\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Description\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Manufacturer\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Model\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                QTY\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                List Price($)\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Sub Total($)\r\n                                                              </th>\r\n                                                              <!-- <th>\r\n                                                              Delete\r\n                                                            </th> -->\r\n                                                            </tr>\r\n                                                          </thead>\r\n                                                          <ng-container>\r\n                                                            <tbody>\r\n                                                              <tr *ngFor=\"let data of selectedInventory\">\r\n                                                                <td>\r\n                                                                  <input type=\"text\" style=\"text-align: center;\"\r\n                                                                    placeholder=\"Eg:123456\" value=\"{{data.sno}}\"\r\n                                                                    class=\"form-control input-sm\" readonly\r\n                                                                    style=\"background-color: #F2F2F2; color: black;\">\r\n                                                                </td>\r\n                                                                <!-- <td>\r\n                                                                  <input type=\"text\" style=\"text-align: center;\"\r\n                                                                    placeholder=\"Material/Labor\" value=\"{{data.type}}\"\r\n                                                                    class=\"form-control input-sm\" readonly\r\n                                                                    style=\"background-color: #F2F2F2; color: black;\">\r\n                                                                </td> -->\r\n                                                                <td>\r\n                                                                  <input type=\"text\" style=\"text-align: center;\"\r\n                                                                    placeholder=\"1\" value=\"{{data.name}}\"\r\n                                                                    class=\"form-control input-sm\" readonly\r\n                                                                    style=\"background-color: #F2F2F2; color: black;\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <input type=\"text\" style=\"text-align: center;\"\r\n                                                                    value=\"{{data.description}}\"\r\n                                                                    class=\"form-control input-sm\" readonly\r\n                                                                    style=\"background-color: #F2F2F2; color: black;\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <input type=\"text\" style=\"text-align: center;\"\r\n                                                                    value=\"{{data.manufacturer}}\"\r\n                                                                    class=\"form-control input-sm\" readonly\r\n                                                                    style=\"background-color: #F2F2F2; color: black;\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <input type=\"text\" style=\"text-align: center;\"\r\n                                                                    value=\"{{data.model}}\" class=\"form-control input-sm\"\r\n                                                                    readonly\r\n                                                                    style=\"background-color: #F2F2F2; color: black;\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <input type=\"text\" style=\"text-align: center;\"\r\n                                                                    value=\"{{data.totalQuantity}}\"\r\n                                                                    pattern=\" 0+\\.[0-9]*[1-9][0-9]*$\"\r\n                                                                    name=\"itemConsumption\"\r\n                                                                    onkeypress=\"return event.charCode >= 48 && event.charCode <= 57\"\r\n                                                                    placeholder=\"Each\" class=\"form-control input-sm\"\r\n                                                                    [(ngModel)]=\"data.quantity\"\r\n                                                                    (ngModelChange)=\"getQuantity(data)\"\r\n                                                                    [ngModelOptions]=\"{standalone: true}\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <input type=\"text\" style=\"text-align: center;\"\r\n                                                                    placeholder=\"Each\" value=\"{{data.listPrice}}\"\r\n                                                                    class=\"form-control input-sm\" readonly\r\n                                                                    style=\"background-color: #F2F2F2; color: black;\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <input type=\"text\" class=\"form-control input-sm\"\r\n                                                                    style=\"text-align: center;\"\r\n                                                                    value=\"{{data.subTotal}}\" readonly\r\n                                                                    style=\"background-color: #F2F2F2; color: black;\">\r\n                                                                </td>\r\n                                                              </tr>\r\n                                                            </tbody>\r\n                                                          </ng-container>\r\n                                                        </table>\r\n                                                        <br>\r\n\r\n                                                      </form>\r\n                                                      <div class=\"row\">\r\n                                                        <div class=\"col-sm-4\">\r\n                                                          <div class=\"form-group\">\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-2\">\r\n                                                          <div class=\"form-group\">\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-2\">\r\n                                                          <div class=\"form-group\">\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-2\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"laborCostLbl\">\r\n                                                              <h5><b>Total Material Cost</b></h5>\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-2\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"laborCostVal\">\r\n                                                              <h5><b class=\"text-blue\">${{listPriceInventory}}</b></h5>\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                      <!-- /Total Material Cost -->\r\n\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <!-- /Inventory & Labor List -->\r\n\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-xs-12 col-md-12\">\r\n                                                <div class=\"widget\">\r\n                                                  <div class=\"widget-header gray with-footer\">\r\n                                                    <span class=\"widget-caption\">Enter Labor cost for this\r\n                                                      service</span>\r\n                                                  </div>\r\n                                                  <div class=\"widget-body\">\r\n                                                    <div class=\"flip-scroll\">\r\n                                                      <form>\r\n                                                        <div class=\"row\">\r\n                                                          <div class=\"col-sm-3\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <label for=\"termsLbl\">\r\n                                                                <b>Labor Rate ($/Hour)</b>\r\n                                                              </label>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                          <div class=\"col-sm-3\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <span class=\"input-icon icon-right\">\r\n                                                                <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                  value=\"{{settingPBLABORCOSTValue}}\" readonly\r\n                                                                  style=\"background-color: #F2F2F2; color: black;\">\r\n                                                              </span>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                          <div class=\"col-sm-6\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <p><a\r\n                                                                  href=\"http://localhost:4800/proz/accountSettings\">Labor\r\n                                                                  rate is defined in Account Settings</a></p>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                        </div>\r\n\r\n                                                        <div class=\"row\">\r\n                                                          <div class=\"col-sm-3\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <label for=\"sourceLbl\">\r\n                                                                <b> Enter Number Of Hours </b>\r\n                                                              </label>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                          <div class=\"col-sm-3\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <span class=\"input-icon icon-right\">\r\n                                                                <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                  [dropSpecialCharacters]=\"false\" mask=\"0*.00\"\r\n                                                                  [(ngModel)]=\"qty\" (ngModelChange)=\"getHours(qty)\"\r\n                                                                  [ngModelOptions]=\"{standalone: true}\">\r\n                                                              </span>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                        </div>\r\n\r\n                                                        <div class=\"row\">\r\n                                                          <div class=\"col-sm-3\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <label for=\"termsLbl\">\r\n                                                                <b>SubTotal($)</b>\r\n                                                              </label>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                          <div class=\"col-sm-3\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <span class=\"input-icon icon-right\">\r\n                                                                <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                  mask=\"0.00\"\r\n                                                                  value=\"{{subTotalLR}}\" readonly\r\n                                                                  style=\"background-color: #F2F2F2; color: black;\">\r\n                                                              </span>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                          <div class=\"col-sm-1\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <label for=\"laborCostLbl\">\r\n                                                                <h5><b></b></h5>\r\n                                                              </label>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                          <div class=\"col-sm-1\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <label for=\"laborCostLbl\">\r\n                                                                <h5><b></b></h5>\r\n                                                              </label>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                          <div class=\"col-sm-2\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <label for=\"laborCostLbl\">\r\n                                                                <h5><b>Labor Cost</b></h5>\r\n                                                              </label>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                          <div class=\"col-sm-2\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <label for=\"laborCostVal\">\r\n                                                                <h5><b class=\"text-blue\">${{subTotalLR}}</b></h5>\r\n                                                              </label>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                      </form>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-xs-12 col-md-12\">\r\n                                                <div class=\"widget\">\r\n                                                  <div class=\"widget-header gray with-footer\">\r\n                                                    <span class=\"widget-caption\">Total Cost (Material Cost + Labor Cost\r\n                                                      + Lead Cost + TOC)</span>\r\n                                                  </div>\r\n                                                  <div class=\"widget-body\">\r\n                                                    <div class=\"flip-scroll\">\r\n                                                      <form>\r\n                                                        <div class=\"row\">\r\n\r\n                                                          <div class=\"col-sm-5\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <label for=\"termsLbl\">\r\n                                                                <b>Total Cost($)</b>\r\n                                                              </label>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                          <div class=\"col-sm-2\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <span class=\"input-icon icon-right\">\r\n                                                                <label for=\"laborCostVal\">\r\n                                                                  <h5><b class=\"text-blue\"></b></h5>\r\n                                                                </label>\r\n                                                              </span>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                          <div class=\"col-sm-1\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <span class=\"input-icon icon-right\">\r\n                                                                <label for=\"laborCostVal\">\r\n                                                                  <h5><b class=\"text-blue\"></b></h5>\r\n                                                                </label>\r\n                                                              </span>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                          <div class=\"col-sm-2\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <span class=\"input-icon icon-right\">\r\n                                                                <label for=\"laborCostVal\">\r\n                                                                  <h5><b class=\"text-blue\"></b></h5>\r\n                                                                </label>\r\n                                                              </span>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                          <div class=\"col-sm-1\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <span class=\"input-icon icon-right\">\r\n                                                                <label for=\"laborCostVal\">\r\n                                                                  <h5><b class=\"text-blue\">${{totalCost}}</b></h5>\r\n                                                                </label>\r\n                                                              </span>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                        </div>\r\n\r\n                                                      </form>\r\n\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <!-- Package Name -->\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-lg-12 col-md-10 col-sm-12 col-xs-12\">\r\n                                                <br>\r\n                                                <!-- list -->\r\n                                                <div class=\"row\">\r\n                                                  <div class=\"col-xs-12 col-md-12\">\r\n                                                    <div class=\"widget\">\r\n                                                      <div class=\"widget-body\">\r\n                                                        <div class=\"flip-scroll\">\r\n                                                          <table\r\n                                                            class=\"table table-bordered table-striped table-condensed flip-content\"\r\n                                                            *ngIf=\"account\">\r\n                                                            <thead class=\"flip-content\">\r\n                                                              <tr>\r\n                                                                <th>\r\n                                                                  Package Name\r\n                                                                </th>\r\n                                                                <th>\r\n                                                                  {{acctype[0].packageName}}\r\n                                                                </th>\r\n                                                                <th>\r\n                                                                  {{acctype[1].packageName}}\r\n                                                                </th>\r\n                                                                <th>\r\n                                                                  {{acctype[2].packageName}}\r\n                                                                </th>\r\n                                                              </tr>\r\n                                                            </thead>\r\n                                                            <tbody>\r\n                                                              <tr>\r\n                                                                <td>\r\n                                                                  Desired Profit(%)\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <div class=\"form-group\">\r\n                                                                    <input type=\"text\" class=\"form-control\"\r\n                                                                      value={{acctype[0].exceptedNetProfit}} readonly\r\n                                                                      [ngStyle]=\"{'background-color': acctype[0].colorCode}\"\r\n                                                                      style=\"color: white;\">\r\n                                                                  </div>\r\n                                                                </td>\r\n                                                                <td class=\"numeric\">\r\n                                                                  <div class=\"form-group\">\r\n                                                                    <input type=\"text\" class=\"form-control\"\r\n                                                                      value={{acctype[1].exceptedNetProfit}} readonly\r\n                                                                      [ngStyle]=\"{'background-color': acctype[1].colorCode}\"\r\n                                                                      style=\"color: white;\">\r\n                                                                  </div>\r\n                                                                </td>\r\n                                                                <td class=\"numeric\">\r\n                                                                  <div class=\"form-group\">\r\n                                                                    <input type=\"text\" class=\"form-control\"\r\n                                                                      value={{acctype[2].exceptedNetProfit}} readonly\r\n                                                                      [ngStyle]=\"{'background-color': acctype[2].colorCode}\"\r\n                                                                      style=\"color: white;\">\r\n                                                                  </div>\r\n                                                                </td>\r\n                                                              </tr>\r\n                                                              <tr>\r\n                                                                <td>\r\n                                                                  Price Book List Prices\r\n                                                                </td>\r\n                                                                <td class=\"form-control\"\r\n                                                                  [ngStyle]=\"{'background-color': acctype[0].colorCode}\"\r\n                                                                  style=\"color: white;\" [dropSpecialCharacters]=\"false\"\r\n                                                                  mask=\"00*.00\">\r\n                                                                  &nbsp;${{finalStandardValue}}\r\n                                                                </td>\r\n                                                                <td\r\n                                                                  [ngStyle]=\"{'background-color': acctype[1].colorCode}\"\r\n                                                                  style=\"color: white;\">\r\n                                                                  &nbsp; ${{finalValueData}}\r\n                                                                </td>\r\n                                                                <td\r\n                                                                  [ngStyle]=\"{'background-color': acctype[2].colorCode}\"\r\n                                                                  style=\"color: white;\">\r\n                                                                  &nbsp; ${{finalMemberValue}}\r\n                                                                </td>\r\n                                                              </tr>\r\n                                                            </tbody>\r\n                                                          </table>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <!-- list -->\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                            <!-- /Package Name -->\r\n                                            <br>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <!-- </form> -->\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Cost Estimate - Collapsible -->\r\n\r\n\r\n                                <!-- Images -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseThird\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Images\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseThird\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"serviceIDLbl\">\r\n                                                  <b>Add Images</b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-2\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"customerNameLbl\">\r\n                                                  <!-- <input type='file' (change)=\"onSelectFile($event)\"\r\n                                                    style=\"margin-left:6em;\" multiple> -->\r\n                                                    <input type='file' id=\"files\" (change)=\"onSelectFile($event)\" multiple class=\"hidden\" />\r\n                                                    <label for=\"files\"> Choose File <i class=\"fa fa-file-image-o\" title=\"Chose File\"></i>\r\n                                                      &nbsp;&nbsp;\r\n                                                      {{chosseTypecount}} </label>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <!-- <div style=\"margin-left: 0.9em;\" class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <input class=\"form-control\"\r\n                                                  style=\"background-color: #F2F2F2; color: black;margin-right: 20em;\"\r\n                                                  readonly value={{chosseTypecount}}>\r\n                                              </div>\r\n                                            </div> -->\r\n                                            <div class=\"col-sm-2\">\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-5\">\r\n                                              <div class=\"form-group\">\r\n                                                <div *ngFor=\"let x of arr;let i=index\">\r\n                                                  <figure style=\"height:140px;width:220px;\" class=\"icon1\">\r\n                                                    {{imageNames[i]?.image}}<i (click)=\"removeSelectedFile(i)\"\r\n                                                      style=\"margin-left:10px;color: red\" class=\"fa fa-times\"></i>\r\n                                                    <br>\r\n                                                    <img src=\"{{x.name}}\" height=\"100px\" width=\"120px\">\r\n                                                  </figure>\r\n                                                  &nbsp;&nbsp;&nbsp;&nbsp;\r\n                                                </div>\r\n                                                <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"upload()\">\r\n                                                  Upload\r\n                                                </button>\r\n\r\n                                                <br>\r\n                                                <div *ngIf=\"displyFlag == true\">\r\n                                                  <p style=\"color: red; font-size: 11px\">\r\n                                                    Please upload the files\r\n                                                  </p>\r\n                                                </div>\r\n                                                <br>\r\n                                                <div *ngIf=\"progressShow1\" class=\"progress-bar1 green stripes\">\r\n                                                  <span [style.width.%]=\"percentage1\">\r\n                                                    <p style=\"text-align: center;color:black;font-size:18px;\">\r\n                                                      {{percentage1}}%</p>\r\n                                                  </span>\r\n                                                </div>\r\n                                                <div *ngIf=\"progressHide1\" class=\"alert alert-block alert-success\"\r\n                                                  style=\"height:3px;\">\r\n                                                  <h4 class=\"alert-heading\" style=\"margin-top:-5px;text-align:center;\">\r\n                                                    Images\r\n                                                    Uploaded\r\n                                                    Successfully</h4>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <!-- </ng-container> -->\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"panel-body border-red\">\r\n                                    </div>\r\n                                    <br>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- Images -->\r\n\r\n                                <!-- Documents -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseFour\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Documents\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n\r\n                                          <!-- <div class=\"row\">\r\n                                          <div class=\"col-sm-3\">\r\n                                            <div class=\"form-group\">\r\n                                              <label for=\"documentsLbl\">\r\n                                                <b>Add Documents</b>\r\n                                              </label>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-sm-4\">\r\n                                            <div class=\"form-group\">\r\n                                              <input type='file' (change)=\"onSelectFile($event)\" multiple>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                              <div *ngFor='let url of urls;let index = index'>\r\n                                                <figure class=\"icon1\">\r\n                                                  <figcaption (click)=\"removeSelectedFile(index)\" style=\"margin-left:20px;color: red\"><i\r\n                                                      class=\"fa fa-times\"></i>\r\n                                                  </figcaption>\r\n                                                  <img [src]=\"url\" height=\"100px\" width=\"120px\">\r\n\r\n                                                </figure>\r\n                                                &nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div> -->\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"writeupPictureLbl\">\r\n                                                  <b> Add Documents </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <div class=\"controls\">\r\n                                                  <div data-provides=\"fileupload\" class=\"fileupload fileupload-new\">\r\n                                                    <!-- <div style=\"width: 100px; height: 120px;\"\r\n                                                                                          class=\"fileupload-new thumbnail\">\r\n                                                                                          <img [src]=\"imagePreviewWriteup\" style=\"height:120px;width:100px;\">\r\n                                                                                        </div> -->\r\n                                                    <!-- <div style=\"max-width: 90px; max-height: 110px; line-height: 20px;\"\r\n                                                                                          class=\"fileupload-preview fileupload-exists thumbnail\"></div> -->\r\n                                                    <div>\r\n                                                      <input #imageUpload type=\"file\" accept=\"application/pdf\"\r\n                                                        id=\"avatar\" (change)=\"selectDocument($event)\" #fileInput>\r\n                                                      <button type=\"button\" class=\"btn\" [disabled]=\"!img1\"\r\n                                                        (click)=\"fileUploadDocument()\">Upload</button>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n\r\n                                                <div *ngIf=\"progressShow1\" class=\"progress-bar1 blue stripes\">\r\n                                                  <span [style.width.%]=\"percentage2\">\r\n                                                    <p style=\"text-align: center;color:black;font-size:18px;\">\r\n                                                      {{percentage2}}%</p>\r\n                                                  </span>\r\n                                                </div>\r\n                                                <div *ngIf=\"progressHide2\" class=\"alert alert-block alert-success\"\r\n                                                  style=\"height:3px;\">\r\n                                                  <h4 class=\"alert-heading\" style=\"margin-top:-5px;text-align:center;\">\r\n                                                    Document\r\n                                                    Uploaded\r\n                                                    Successfully</h4>\r\n                                                </div>\r\n                                                <br>\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"panel-body border-red\">\r\n                                    </div>\r\n                                    <br>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- Documents -->\r\n\r\n\r\n                                <!-- Service Description -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseFifth\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Service Description\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseFifth\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"bioLbl\">\r\n                                                  <b>Add Service Description </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <textarea rows=\"4\" class=\"form-control\"\r\n                                                    formControlName=\"serviceDescription\"\r\n                                                    placeholder=\"Enter Your Service Description\"></textarea>\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Service Description   -->\r\n\r\n                                <!-- Installation Instructions -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseSixth\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Installation Instructions\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseSixth\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"bioLbl\">\r\n                                                  <b>Add Installation Instructions </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <textarea rows=\"4\" class=\"form-control\" formControlName=\"instructions\"\r\n                                                    placeholder=\"Enter Your Installation Instructions\"></textarea>\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Installation Instructions  -->\r\n\r\n\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Collapsible -->\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <hr class=\"hr-gray-thick\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n\r\n                          <!-- Buttons -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-2 button-center\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <button type=\"submit\" class=\"btn btn-blue\"><i class=\"fa fa-check\"></i>\r\n                                  Save</button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <button type=\"submit\" (click)=\"cancelPriceBook()\" class=\"btn btn-gray\"><i\r\n                                    class=\"fa fa-check\"></i>\r\n                                  Cancel</button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-4 button-center\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Buttons -->\r\n\r\n\r\n                        </form>\r\n                      </div>\r\n                      <!-- /form1 -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Add Inventory Popup -->\r\n        <div id=\"myInventory\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <div class=\"widget-header blue\">\r\n                  <span class=\"widget-caption\"><b>Select Material For This PriceBook Item:</b></span>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <br />\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 \">\r\n                      <div class=\"row\">\r\n                        <!-- <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                          <button type=\"submit\" class=\"btn btn-gray\" (click)=\"newInventory()\">\r\n                            <i class=\"fa fa-plus\"></i>Add New Material</button>\r\n                        </div> -->\r\n                      </div><br />\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-6\">\r\n                          <div class=\"form-group\">\r\n                            <span class=\"input-icon icon-right\">\r\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Eg: Search Material\">\r\n                              <i class=\"fa fa-search\"></i>\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"table-scrollable\">\r\n                        <table class=\"table table-striped table-hover table-bordered\" id=\"editabledatatable\"\r\n                          style=\"width:100%;\" *ngIf=\"inventoryListResponse\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th style=\"width:5%;\">\r\n                                Select\r\n                              </th>\r\n                              <!-- <th style=\"width:5%;\">\r\n                                Type\r\n                              </th> -->\r\n                              <th style=\"width:5%;\">\r\n                                Name\r\n                              </th>\r\n                              <th style=\"width:10%;\">\r\n                                Description\r\n                              </th>\r\n                              <th style=\"width:5%;\">\r\n                                Manufacturer\r\n                              </th>\r\n                              <th style=\"width:5%;\">\r\n                                Model\r\n                              </th>\r\n                              <!-- <th style=\"width:5%;\">\r\n                                QTY\r\n                              </th> -->\r\n                              <th style=\"width:5%;\">\r\n                                List Price\r\n                              </th>\r\n                              <!-- <th style=\"width:5%;\">\r\n                                Sub Total\r\n                              </th> -->\r\n\r\n                            </tr>\r\n                          </thead>\r\n\r\n                          <tbody>\r\n                            <tr *ngFor=\"let data of inventoryListDetails\">\r\n                              <td class=\"center\">\r\n                                <label>\r\n                                  <input type=\"checkbox\" class=\"colored-success\" [(ngModel)]=\"data.selectedService\"\r\n                                    (ngModelChange)=\"selectServiceFromList(data)\" [ngModelOptions]=\"{standalone: true}\"\r\n                                    value=\"1\">\r\n                                  <span class=\"text\"></span>\r\n                                </label></td>\r\n                              <!-- <td>{{data.type}}</td> -->\r\n                              <td>{{data.name}}</td>\r\n                              <td>{{data.description}}</td>\r\n                              <td>{{data.manufacturer}}</td>\r\n                              <td>{{data.model}}</td>\r\n                              <td class=\"center \">{{data.listPrice}}</td>\r\n                              <!-- <td>{{data.quantity}}</td> -->\r\n                              <!-- <td class=\"center \">{{data.subTotal}}</td> -->\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!inventoryListResponse\">\r\n                          <p>No Records Found</p>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <div class=\"form-group\">\r\n                      <button type=\"button\" class=\"btn btn-blue\" data-dismiss=\"modal\"\r\n                        (click)=\"saveSelectedInventory()\"><i class=\"fa fa-check\"></i>\r\n                        Save</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <div class=\"form-group\">\r\n                      <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\"\r\n                        (click)=\"cancelSelectedInventory()\"><i class=\"fa fa-times\"></i>\r\n                        Cancel</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div> <!-- / .modal-content -->\r\n          </div>\r\n        </div>\r\n        <!-- /Add Inventory Popup -->\r\n\r\n        <!-- Add Labor Popup -->\r\n        <div id=\"myLabors\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <div class=\"widget-header blue\">\r\n                  <span class=\"widget-caption\"><b>Add Labor</b></span>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <br />\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 \">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                          <button type=\"submit\" class=\"btn btn-gray\" (click)=\"newLabourRate()\">\r\n                            <i class=\"fa fa-user-plus\"></i>Add New Labor</button>\r\n                        </div>\r\n                      </div><br />\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-6\">\r\n                          <div class=\"form-group\">\r\n                            <span class=\"input-icon icon-right\">\r\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Eg: Search Labor\">\r\n                              <i class=\"fa fa-search\"></i>\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"table-scrollable\">\r\n                        <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                          <thead class=\"flip-content bordered-purple\">\r\n                            <tr>\r\n                              <th>\r\n                                Select\r\n                              </th>\r\n                              <th>\r\n                                Role\r\n                              </th>\r\n                              <th>\r\n                                Units\r\n                              </th>\r\n                              <th>\r\n                                Unit Cost\r\n                              </th>\r\n                              <th>\r\n                                List Price\r\n                              </th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let data of labourList\">\r\n                              <td>\r\n                                <label>\r\n                                  <!-- <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\"> -->\r\n                                  <input type=\"checkbox\" class=\"colored-success\"\r\n                                    [(ngModel)]=\"data.selectedServiceLabour\"\r\n                                    (ngModelChange)=\"selectServiceLabourFromList(data)\"\r\n                                    [ngModelOptions]=\"{standalone: true}\" value=\"1\">\r\n                                  <span class=\"text\"></span>\r\n                                </label>\r\n                              </td>\r\n                              <td>\r\n                                {{data.role}}\r\n                              </td>\r\n                              <td>\r\n                                {{data.units}}\r\n                              </td>\r\n                              <td>\r\n                                {{data.unitCost}}\r\n                              </td>\r\n                              <td>\r\n                                {{data.listPrice}}\r\n                              </td>\r\n                            </tr>\r\n\r\n                          </tbody>\r\n                        </table>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <div class=\"form-group\">\r\n                      <button type=\"button\" class=\"btn btn-blue\" data-dismiss=\"modal\" (click)=\"saveSelectedLabor()\"><i\r\n                          class=\"fa fa-check\"></i>\r\n                        Save</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <div class=\"form-group\">\r\n                      <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\" (click)=\"cancelSelectedLabor()\"><i\r\n                          class=\"fa fa-times\"></i>\r\n                        Cancel</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div> <!-- / .modal-content -->\r\n          </div>\r\n        </div>\r\n        <!-- /Add Labor Popup -->\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n\r\n\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/add-pricebook-services/add-pricebook-services.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/add-pricebook-services/add-pricebook-services.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.error {\n  color: red;\n  font-weight: bold; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.checkbox, .radio {\n  position: relative;\n  display: block;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.button-center {\n  text-align: center; }\n\n.button-left {\n  text-align: left; }\n\n.button-right {\n  text-align: right; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.center {\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.item {\n  text-align: center; }\n\n.body {\n  background-color: white; }\n\n.header-title {\n  font-size: 18px !important; }\n\n.form-heading {\n  font-size: 18px !important; }\n\n/* Buttons */\n\n.btn {\n  font-size: 14px !important;\n  font-weight: bold !important; }\n\n/* /Buttons */\n\n/* Line */\n\n.hr-blue {\n  border-top: 1px solid #869eb4 !important; }\n\n/* /Line */\n\n/* Textbox */\n\n.formcontrol, select {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  border-left-width: 1px !important;\n  border-right-width: 1px !important; }\n\n/* /Textbox */\n\n/* Atkore logo */\n\n.text {\n  text-align: center; }\n\n.text img {\n  width: 70px;\n  height: 80px; }\n\n/* /Atkore logo */\n\n/* Labels */\n\n.label {\n  padding: 5px !important; }\n\nlabel .mandatory {\n  color: red;\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n/* /Labels */\n\n/* Tables    */\n\n.table > tbody > tr > td {\n  padding: 2px !important;\n  line-height: 1.257143 !important;\n  vertical-align: middle; }\n\n/* /Tables    */\n\n/* Vertical Text */\n\n.testrotate p {\n  line-height: 145px !important;\n  font-size: 15px; }\n\n.testrotate .testq {\n  line-height: 483px !important;\n  font-size: 15px; }\n\n.testrotate .testr {\n  line-height: 100px !important;\n  font-size: 15px; }\n\n.testrotate .testp {\n  line-height: 170px !important;\n  font-size: 15px; }\n\n/* /Vertical Text */\n\n/* Textbox input */\n\n.input .formcontrol {\n  width: 50px !important;\n  vertical-align: middle; }\n\n/* /Textbox input */\n\n.form-control {\n  padding: 4px 3px !important; }\n\n/* Pin Gap Diagram */\n\n.row .pin img {\n  width: 230px;\n  height: 240px;\n  margin-left: 30px !important;\n  margin-right: auto !important; }\n\n/* /Pin Gap Diagram */\n\n.gap {\n  text-align: center; }\n\n/* Bolt torque specifications */\n\n.adjust {\n  margin-left: 10px !important;\n  margin-bottom: 1040px !important; }\n\n/* /Bolt torque specifications */\n\n/* Imageupload    */\n\ntd .img-adjust {\n  margin-left: auto !important;\n  margin-right: auto !important; }\n\n/* /Imageupload    */\n\n.alert-heading {\n  font-size: 12px; }\n\n.align-text-top {\n  vertical-align: top !important; }\n\n.text-big {\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;\r\n     border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.accordion.panel-group .panel-body {\n  background-color: #fff !important;\n  border-top: none !important;\n  border-left: 2px solid #eee;\n  color: #262626 !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.icon1 {\n  height: auto;\n  width: 120px;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  font: 400 16px/1.4 \"Source Code Pro\";\n  font-variant: small-caps;\n  padding: 10px;\n  border: 1px solid #103683;\n  border-radius: 10px; }\n\n.text-blue {\n  color: #5db2ff; }\n\n.btn-xs-two {\n  padding: 2px 7px !important;\n  margin: 2px 0px !important; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.well.with-footer {\n  padding-bottom: 10px !important; }\n\n.modal-footer {\n  border-top: 3px solid #333 !important; }\n\n.table-scrollable {\n  width: 100%;\n  height: 200px !important;\n  overflow-x: auto;\n  overflow-y: auto !important;\n  border: 1px solid #ddd; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2Vib29rL1ByaWNlQm9vay9QcmljZUJvb2stU2VydmljZXMvYWRkLXByaWNlYm9vay1zZXJ2aWNlcy9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxccHJpY2Vib29rXFxQcmljZUJvb2tcXFByaWNlQm9vay1TZXJ2aWNlc1xcYWRkLXByaWNlYm9vay1zZXJ2aWNlc1xcYWRkLXByaWNlYm9vay1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7c0JBQ2lCO0VBR2pCLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCOzBCQUNzQixFQUV4Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFFQyxXQUFVO0VBQ1Ysa0JBQWlCLEVBQ2xCOztBQUVBO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksc0NBQXFDLEVBRXhDOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCwyQkFBMEI7RUFDMUIsOEJBQTZCLEVBQ2hDOztBQU9EO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUVEO0VBQ0EsbUJBQWtCLEVBQ2pCOztBQUVEO0VBQ0csaUJBQWdCLEVBQ2xCOztBQUVGO0VBQ0ksa0JBQWlCLEVBQ2hCOztBQUVKO0VBQ0ksMEJBQXlCO0VBQ3pCLGtDQUFpQztFQUNqQyw0Q0FBMkMsRUFDOUM7O0FBRUQ7RUFDSSx1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsa0NBQWlDLEVBQ3BDOztBQUVEO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLG1CQUFpQixFQUNwQjs7QUFFRDtFQUNJLHdCQUFzQixFQUV6Qjs7QUFFRDtFQUNJLDJCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLDJCQUF5QixFQUM1Qjs7QUFDRCxhQUFhOztBQUNiO0VBQ0ksMkJBQTBCO0VBQzFCLDZCQUE0QixFQUMvQjs7QUFDRCxjQUFjOztBQUVkLFVBQVU7O0FBQ1Y7RUFDSSx5Q0FBbUQsRUFDdEQ7O0FBQ0QsV0FBVzs7QUFFWCxhQUFhOztBQUNiO0VBQ0ksNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM3QixrQ0FBaUM7RUFDakMsbUNBQWtDLEVBQ3JDOztBQUNELGNBQWM7O0FBRWQsaUJBQWlCOztBQUNqQjtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBQ0Qsa0JBQWtCOztBQUVsQixZQUFZOztBQUNaO0VBQ0ksd0JBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksV0FBUztFQUNULDJCQUEwQjtFQUMxQiw2QkFBNEIsRUFDL0I7O0FBQ0QsYUFBYTs7QUFFYixlQUFlOztBQUNmO0VBQ0ksd0JBQXVCO0VBQ3ZCLGlDQUFnQztFQUNoQyx1QkFBc0IsRUFDekI7O0FBQ0QsZ0JBQWdCOztBQUVoQixtQkFBbUI7O0FBR25CO0VBQ0ksOEJBQTRCO0VBQzVCLGdCQUFjLEVBQ2pCOztBQUVEO0VBQ0ksOEJBQTRCO0VBQzVCLGdCQUFjLEVBQ2pCOztBQUVEO0VBQ0ksOEJBQTRCO0VBQzVCLGdCQUFjLEVBQ2pCOztBQUVEO0VBQ0ksOEJBQTRCO0VBQzVCLGdCQUFjLEVBQ2pCOztBQUVELG9CQUFvQjs7QUFFcEIsbUJBQW1COztBQUNuQjtFQUNJLHVCQUFxQjtFQUNyQix1QkFBcUIsRUFDeEI7O0FBQ0Qsb0JBQW9COztBQU9wQjtFQUNJLDRCQUEwQixFQUM3Qjs7QUFFRCxxQkFBcUI7O0FBQ3JCO0VBQ0ksYUFBVztFQUNYLGNBQVk7RUFDWiw2QkFBMkI7RUFDM0IsOEJBQTRCLEVBQy9COztBQUNELHNCQUFzQjs7QUFFdEI7RUFDSSxtQkFBaUIsRUFDcEI7O0FBQ0QsZ0NBQWdDOztBQUNoQztFQUNJLDZCQUEyQjtFQUMzQixpQ0FBZ0MsRUFDbkM7O0FBQ0QsaUNBQWlDOztBQUVqQyxvQkFBb0I7O0FBQ3BCO0VBQ0ksNkJBQTJCO0VBQzNCLDhCQUE0QixFQUMvQjs7QUFDRCxxQkFBcUI7O0FBR3JCO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSwrQkFBOEIsRUFDakM7O0FBRUQ7RUFDSSwyQkFBeUI7RUFDekIsNkJBQTJCLEVBQzlCOztBQUNEO0VBQ0ksZUFBZTtFQUNmLGtDQUFpQztFQUVqQzs7eUNBRW9DO0VBQ3BDLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCOzBCQUNzQixFQUV4Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFDeEM7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFFeEM7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM5QixvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNHLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMsdUJBQXNCO0VBQ3RCLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDRCQUEyQjtFQUMzQiw0QkFBMkI7RUFDM0IsMEJBQXlCLEVBQzVCOztBQUVBO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLGtDQUFpQztFQUNqQyw0Q0FBMkMsRUFDOUM7O0FBRUQ7RUFDSSwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFFTyxhQUFZO0VBQ1osYUFBWTtFQUNaLHdCQUF1QjtFQUN2QiwyQkFBMEI7RUFDMUIsbUJBQWtCO0VBRWxCLHFDQUFtQztFQUNuQyx5QkFBd0I7RUFDeEIsY0FBYTtFQUNiLDBCQUF5QjtFQUN6QixvQkFBbUIsRUFDMUI7O0FBRUQ7RUFDSSxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDJCQUEwQixFQUM3Qjs7QUFFRDtFQUNJLG9DQUFtQyxFQUN0Qzs7QUFFRDtFQUNJLGdDQUErQixFQUNsQzs7QUFHRDtFQUNFLHNDQUFxQyxFQUN0Qzs7QUFHRDtFQUNJLFlBQVc7RUFDWCx5QkFBd0I7RUFDeEIsaUJBQWdCO0VBQ2hCLDRCQUEyQjtFQUMzQix1QkFBc0IsRUFDekIiLCJmaWxlIjoic3JjL2FwcC9wcmljZWJvb2svUHJpY2VCb29rL1ByaWNlQm9vay1TZXJ2aWNlcy9hZGQtcHJpY2Vib29rLXNlcnZpY2VzL2FkZC1wcmljZWJvb2stc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS10aXRsZXtcclxuICAgICBjb2xvcjogICM1ZGIyZmY7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNWRiMmZmO1xyXG4gXHJcbiAgICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgICBwYWRkaW5nOiA4cHggMDsqLyAgICBcclxuICAgICAvLyBjb2xvcjogICM3ZTM3OTQ7XHJcbiAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0O1xyXG4gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuIFxyXG4gfVxyXG4gXHJcbiAubWFuZGF0b3J5e1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuIH1cclxuIC5lcnJvciB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXdlaWdodDogYm9sZDs7XHJcbn1cclxuIFxyXG4gLmhyLWdyYXktdGhpY2t7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbiB9IFxyXG4gXHJcbiAuaHItZ3JheXsgICAgXHJcbiAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuICAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgIzdlMzc5NCAhaW1wb3J0YW50O1xyXG4gfSBcclxuIFxyXG4gaW5wdXR7XHJcbiAgICAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG4gXHJcbiAubW9ja3tcclxuICAgICBjb2xvcjogcmVkOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5tb2NrLWNvbmZ7XHJcbiAgICAgY29sb3I6IGdyZWVuOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5pbnByb2dyZXNze1xyXG4gICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLnRocmVlLWJvcmRlcmVke1xyXG4gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbiB9XHJcbiBcclxuIC5jaGVja2JveCwgLnJhZGlvIHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuLy8gIC5jb2wtc20tNiB7XHJcbi8vICAgICAvLyAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuLy8gICAgIC8vICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuLy8gIH1cclxuIFxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gIFxyXG4gLmJ0bi1ncmF5e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnRuLWJsdWV7ICAgIFxyXG4gICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnV0dG9uLWNlbnRlcntcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuXHJcbiAuYnV0dG9uLWxlZnR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gfVxyXG5cclxuLmJ1dHRvbi1yaWdodHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gXHJcbiAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlLmNvbGxhcHNlZCB7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZTpob3ZlcjphZnRlciB7XHJcbiAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZSB7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuaXRlbXtcclxuICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuIH1cclxuXHJcbiAuYm9keXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgIFxyXG4gfVxyXG4gXHJcbiAuaGVhZGVyLXRpdGxle1xyXG4gICAgIGZvbnQtc2l6ZToxOHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5mb3JtLWhlYWRpbmd7XHJcbiAgICAgZm9udC1zaXplOjE4cHggIWltcG9ydGFudDtcclxuIH0gICBcclxuIC8qIEJ1dHRvbnMgKi9cclxuIC5idG57XHJcbiAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuIH1cclxuIC8qIC9CdXR0b25zICovXHJcbiBcclxuIC8qIExpbmUgKi9cclxuIC5oci1ibHVleyAgICBcclxuICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDEzNCwgMTU4LCAxODApICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAvKiAvTGluZSAqL1xyXG4gXHJcbiAvKiBUZXh0Ym94ICovXHJcbiAuZm9ybWNvbnRyb2wsIHNlbGVjdHtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHggIWltcG9ydGFudDtcclxuICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLyogL1RleHRib3ggKi9cclxuIFxyXG4gLyogQXRrb3JlIGxvZ28gKi9cclxuIC50ZXh0e1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLnRleHQgaW1ne1xyXG4gICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgIGhlaWdodDogODBweDsgIFxyXG4gfVxyXG4gLyogL0F0a29yZSBsb2dvICovXHJcbiBcclxuIC8qIExhYmVscyAqL1xyXG4gLmxhYmVse1xyXG4gICAgIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAgICBcclxuIGxhYmVsIC5tYW5kYXRvcnl7XHJcbiAgICAgY29sb3I6cmVkO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAvKiAvTGFiZWxzICovIFxyXG4gXHJcbiAvKiBUYWJsZXMgICAgKi9cclxuIC50YWJsZT50Ym9keT50cj50ZHtcclxuICAgICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcclxuICAgICBsaW5lLWhlaWdodDogMS4yNTcxNDMgIWltcG9ydGFudDsgXHJcbiAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXHJcbiB9XHJcbiAvKiAvVGFibGVzICAgICovXHJcbiBcclxuIC8qIFZlcnRpY2FsIFRleHQgKi8gIFxyXG4gXHJcbiAgICBcclxuIC50ZXN0cm90YXRlIHB7XHJcbiAgICAgbGluZS1oZWlnaHQ6MTQ1cHggIWltcG9ydGFudDtcclxuICAgICBmb250LXNpemU6MTVweDtcclxuIH1cclxuIFxyXG4gLnRlc3Ryb3RhdGUgLnRlc3Rxe1xyXG4gICAgIGxpbmUtaGVpZ2h0OjQ4M3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC1zaXplOjE1cHg7XHJcbiB9XHJcbiBcclxuIC50ZXN0cm90YXRlIC50ZXN0cntcclxuICAgICBsaW5lLWhlaWdodDoxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gfVxyXG4gXHJcbiAudGVzdHJvdGF0ZSAudGVzdHB7XHJcbiAgICAgbGluZS1oZWlnaHQ6MTcwcHggIWltcG9ydGFudDtcclxuICAgICBmb250LXNpemU6MTVweDtcclxuIH1cclxuIFxyXG4gLyogL1ZlcnRpY2FsIFRleHQgKi8gXHJcbiBcclxuIC8qIFRleHRib3ggaW5wdXQgKi8gICBcclxuIC5pbnB1dCAuZm9ybWNvbnRyb2x7XHJcbiAgICAgd2lkdGg6NTBweCAhaW1wb3J0YW50OyBcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiB9XHJcbiAvKiAvVGV4dGJveCBpbnB1dCAqL1xyXG4gICAgXHJcbi8vICAuZm9ybS1ncm91cHtcclxuLy8gICAgIC8vICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuLy8gICAgIC8vICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuLy8gIH1cclxuICAgIFxyXG4gLmZvcm0tY29udHJvbHtcclxuICAgICBwYWRkaW5nOjRweCAzcHggIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLyogUGluIEdhcCBEaWFncmFtICovICAgXHJcbiAucm93IC5waW4gaW1ne1xyXG4gICAgIHdpZHRoOjIzMHB4O1xyXG4gICAgIGhlaWdodDoyNDBweDtcclxuICAgICBtYXJnaW4tbGVmdDozMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OmF1dG8gIWltcG9ydGFudDsgXHJcbiB9XHJcbiAvKiAvUGluIEdhcCBEaWFncmFtICovIFxyXG4gXHJcbiAuZ2Fwe1xyXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gfVxyXG4gLyogQm9sdCB0b3JxdWUgc3BlY2lmaWNhdGlvbnMgKi8gICBcclxuIC5hZGp1c3R7XHJcbiAgICAgbWFyZ2luLWxlZnQ6MTBweCAhaW1wb3J0YW50O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDEwNDBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLyogL0JvbHQgdG9ycXVlIHNwZWNpZmljYXRpb25zICovXHJcbiBcclxuIC8qIEltYWdldXBsb2FkICAgICovXHJcbiB0ZCAuaW1nLWFkanVzdHtcclxuICAgICBtYXJnaW4tbGVmdDphdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OmF1dG8gIWltcG9ydGFudDtcclxuIH1cclxuIC8qIC9JbWFnZXVwbG9hZCAgICAqLyAgXHJcbiBcclxuICAgXHJcbiAuYWxlcnQtaGVhZGluZ3tcclxuICAgICBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcbiBcclxuIC5hbGlnbi10ZXh0LXRvcHtcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7IFxyXG4gfVxyXG4gXHJcbiAudGV4dC1iaWd7XHJcbiAgICAgZm9udC1zaXplOjE2cHggIWltcG9ydGFudDtcclxuICAgICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuZm9ybS10aXRsZXsgICAgXHJcbiAgICAgY29sb3I6ICAjNWRiMmZmO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuIFxyXG4gICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0OyovXHJcbiAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG4gXHJcbiB9XHJcbiBcclxuIC5tYW5kYXRvcnl7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gfVxyXG4gXHJcbiAuaHItZ3JheS10aGlja3sgICAgXHJcbiAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuIH0gXHJcbiBcclxuIC5oci1ncmF5eyAgICBcclxuICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbiB9IFxyXG4gXHJcbiBpbnB1dHtcclxuICAgICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcbiBcclxuIC5tb2Nre1xyXG4gICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLm1vY2stY29uZntcclxuICAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmlucHJvZ3Jlc3N7XHJcbiAgICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAudGhyZWUtYm9yZGVyZWR7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxuIH1cclxuIFxyXG4gLnRleHQtY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuZ3JheXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmx1ZXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIFxyXG4uYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWJsdWV7ICAgIFxyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4gXHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZWVlO1xyXG4gICAgY29sb3I6ICMyNjI2MjYgIWltcG9ydGFudDtcclxufSBcclxuXHJcbiAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlOmhvdmVyOmFmdGVyIHtcclxuICAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlIHtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlOmFmdGVyIHtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmljb24xIFxyXG4ge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNhZmFmYWY7XHJcbiAgICAgICAgZm9udDogNDAwIDE2cHgvMS40J1NvdXJjZSBDb2RlIFBybyc7XHJcbiAgICAgICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzEwMzY4MztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4udGV4dC1ibHVle1xyXG4gICAgY29sb3I6ICM1ZGIyZmY7XHJcbn1cclxuXHJcbi5idG4teHMtdHdveyBcclxuICAgIHBhZGRpbmc6IDJweCA3cHggIWltcG9ydGFudDsgIFxyXG4gICAgbWFyZ2luOiAycHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53ZWxsLndpdGgtZm9vdGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnRhYmxlLXNjcm9sbGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG4gXHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/add-pricebook-services/add-pricebook-services.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/add-pricebook-services/add-pricebook-services.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: AddPricebookServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPricebookServicesComponent", function() { return AddPricebookServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var AddPricebookServicesComponent = /** @class */ (function () {
    function AddPricebookServicesComponent(beyond, router, formBuilder, activatedRoute, http, toastr, spinner) {
        var _this = this;
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.name = 'Angular 4';
        this.urls = [];
        this.imagePreview = "assets/img/no-image.png";
        this.url = "../../assets/img/no-image.png";
        this.filesToUpload = [];
        this.selectedInventory = [];
        this.inventoryTemp = [];
        this.selectedLabour = [];
        this.labourTemp = [];
        this.subCategoryServices = [];
        this.listPriceInventory = 0;
        this.subTotal = 0;
        this.listPriceLabour = 0;
        this.subTotalLR = 0;
        this.totalCost = 0;
        this.packageStandardValue = 0;
        this.finalStandardValue = 0;
        this.finalValueData = 0;
        this.finalMemberValue = 0;
        this.progressShow1 = false;
        this.progressHide1 = false;
        this.img1 = false;
        this.percentage1 = 0;
        this.progressShow = false;
        this.progressHide = false;
        this.percentage = 0;
        this.img = false;
        this.imageArray = [];
        this.imagePreviewDocument = "assets/img/no-image.png";
        this.taxPercentage = [];
        this.chosseTypecount = 0;
        this.newArray = [];
        this.imageNames = [];
        this.arr = [];
        this.imageuploadstatus = false;
        this.progressHide2 = false;
        this.progressShow2 = false;
        this.costEstimate = false;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteConfigLoadStart"]) {
                _this.spinner.show();
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteConfigLoadEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationCancel"]) {
                _this.spinner.hide();
            }
            else {
                _this.spinner.hide();
            }
        });
        this.form = this.formBuilder.group({
            orders: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormArray"]([])
        });
    }
    AddPricebookServicesComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proCode = this.loginData.loginCode;
        this.proemailId = this.loginData.emailId;
        this.taxValueData();
        this.statevalueDetails();
        this.addPriceBook1 = this.formBuilder.group({
            // residential: ['', Validators.required],
            serviceID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            subCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            subcatogryCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            serviceDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            labourRate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            instructions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.addPriceBookService = this.formBuilder.group({
            fromPriceBookValues: this.formBuilder.array([this.createPriceBookInfo()])
        });
        this.inventory = [{ "item": "", "type": "", "description": "", "manufacturer": "", "model": "", "name": "", "quantity": "", "listPrice": "", "subtotal": "" }];
        this.addPriceBookLabor = this.formBuilder.group({
            fromPriceBookLabor: this.formBuilder.array([this.createPriceBookLabor()])
        });
        this.labor = [{ "item1": "", "description1": "", "type1": "", "qty1": "", "units1": "", "listPrice1": "", "subtotal1": "" }];
        var val = Math.floor(100 + Math.random() * 9000);
        this.priceBookServiceId = "PB-" + "" + val;
        this.getInventoryList();
        this.labourRates();
        this.getPriceBookValues();
        this.getProCategories();
        this.accountType();
        this.serviceIdData();
    };
    AddPricebookServicesComponent.prototype.removeSelectedFile = function (i) {
        this.arr.splice(i, 1);
        this.imageNames.splice(i, 1);
        this.uniqueArray = [];
        for (var p = 0; p < this.arr.length; p++) {
            this.value = this.arr[p].name;
            this.uniqueArray.push(this.arr[p].name.substring(25, 50));
            this.newArray = this.uniqueArray;
            if (this.uniqueArray.length == 0) {
                this.chosseTypecount = 0;
            }
            else {
                this.chosseTypecount = this.uniqueArray.length;
            }
        }
    };
    AddPricebookServicesComponent.prototype.createPriceBookInfo = function () {
        return this.formBuilder.group({
            item: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            manufacturer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            listPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            subtotal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    };
    AddPricebookServicesComponent.prototype.addFieldValue = function () {
        this.inventory.push({ "item": "", "type": "", "description": "", "manufacturer": "", "model": "", "name": "", "quantity": "", "listPrice": "", "subtotal": "" });
        // this.items = this.addPriceBookService.get('fromPriceBookValues') as FormArray;
        // this.items.push(this.createPriceBookInfo());
        // // this.checkValidationAddress()
    };
    Object.defineProperty(AddPricebookServicesComponent.prototype, "addressInfoValues", {
        get: function () {
            return this.addPriceBookService.get('fromPriceBookValues');
        },
        enumerable: true,
        configurable: true
    });
    AddPricebookServicesComponent.prototype.deleteFieldValue = function (data) {
        this.inventory = this.inventory.filter(function (value) { return value !== data; });
        if (this.inventory.status == 200) {
        }
        else {
            // this.toastr.error('Product row is deleted Successfully');
        }
    };
    AddPricebookServicesComponent.prototype.createPriceBookLabor = function () {
        return this.formBuilder.group({
            item1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            description1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            type1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            qty1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            units1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            listPrice1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            subtotal1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    };
    AddPricebookServicesComponent.prototype.addFieldValueLabor = function () {
        this.labor.push({ "item1": "", "description1": "", "type1": "", "qty1": "", "units1": "", "listPrice1": "", "subtotal1": "" });
        // this.items = this.addPriceBookService.get('fromPriceBookValues') as FormArray;
        // this.items.push(this.createPriceBookInfo());
        // // this.checkValidationAddress()
    };
    Object.defineProperty(AddPricebookServicesComponent.prototype, "addressInfoValuesLabor", {
        get: function () {
            return this.addPriceBookLabor.get('fromPriceBookLabor');
        },
        enumerable: true,
        configurable: true
    });
    // deleteFieldValue(index: number) {
    //   this.addressInfoValues.removeAt(index);
    //   // this.checkValidationAddress()
    // }
    AddPricebookServicesComponent.prototype.deleteFieldValueLabor = function (data1) {
        this.labor = this.labor.filter(function (value) { return value !== data1; });
        if (this.labor.status == 200) {
        }
        else {
            // this.toastr.error('Product row is deleted Successfully');
        }
    };
    Object.defineProperty(AddPricebookServicesComponent.prototype, "f", {
        get: function () {
            return this.addPriceBook1.controls;
        },
        enumerable: true,
        configurable: true
    });
    AddPricebookServicesComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (!this.addPriceBook1.value.subCategory ||
            !this.addPriceBook1.value.category ||
            !this.addPriceBook1.value.description) {
        }
        else {
            this.showError = false;
            this.addPriceBookData();
        }
    };
    /* Add Price Book */
    AddPricebookServicesComponent.prototype.addPriceBookData = function () {
        var _this = this;
        this.newSubTotal = Math.round(this.subTotalLR * 1e2) / 1e2;
        this.costEstimate = false;
        if (this.filesToUpload.length > 0 && this.uploadFlag == true) {
            this.displyFlag = true;
            alert(" Please upload the files");
            return false;
        }
        this.spinner.show();
        var obj = {
            "proId": this.proCode,
            "serviceId": this.serviceNumber,
            "category": this.addPriceBook1.value.category,
            "categoryCode": this.addPriceBook1.value.category,
            "subCategory": this.addPriceBook1.value.subCategory,
            "subcatogryCode": this.addPriceBook1.value.subCategory,
            "description": this.addPriceBook1.value.description,
            "materialCost": this.listPriceInventory == '' ? 0 : this.listPriceInventory,
            "taxPercentage": 0,
            "taxValue": 0,
            "totalmaterialPrice": this.listPriceInventory == '' ? 0 : this.listPriceInventory,
            "truckOperatingCost": this.settingTOCValue,
            "leadCost": this.settingLEADCOSTValue,
            "totalCost": this.totalCost,
            "time": this.laborHour == undefined ? 0 : this.laborHour,
            "laborRate": this.settingPBLABORCOSTValue,
            "laborCost": this.newSubTotal,
            "standard": this.finalStandardValue,
            "value": this.finalValueData,
            "member": this.finalMemberValue,
            "picture": this.uniqueArray == undefined ? '' : this.uniqueArray,
            "document": _global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].documentName,
            "instructions": this.addPriceBook1.value.instructions,
            "serviceDescription": this.addPriceBook1.value.serviceDescription,
            "fromPriceBookValues": this.selectedInventory == [] ? "" : this.selectedInventory,
            "createdBy": "" + this.proemailId,
            "createdOn": new Date()
        };
        console.log("PriceBook obj" + JSON.stringify(obj));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/addpriceBook' + '/' + this.loginData.loginCode + '/' + this.serviceNumber, obj)
            .subscribe(function (data) {
            var ConsData = data.json();
            if (ConsData.status == 200) {
                _this.spinner.hide();
                _this.toastr.success('price book Added Successfuly...');
                _this.router.navigate(['/pricebook/listPriceBook']);
            }
            else {
                _this.spinner.hide();
                _this.toastr.warning('Failed t Add Record');
            }
        }, function (error) {
        });
    };
    /* --/ Add Price Book */
    AddPricebookServicesComponent.prototype.cancelPriceBook = function () {
        this.router.navigate(['/pricebook/listPriceBook']);
    };
    AddPricebookServicesComponent.prototype.addInventory = function () {
    };
    AddPricebookServicesComponent.prototype.addLabor = function () {
    };
    /* Add Labor - Popup */
    AddPricebookServicesComponent.prototype.newLabourRate = function () {
        this.router.navigate(['/proz/addLaborRate']);
    };
    AddPricebookServicesComponent.prototype.selectServiceLabourFromList = function (data) {
        var _this = this;
        if (data.selectedServiceLabour === true) {
            this.selectedLabour.push(data);
        }
        else {
            this.selectedLabour = this.selectedLabour.filter(function (value) { return value.selectedServiceLabour == true; });
            this.selectedLabour.forEach(function (e) {
                _this.labourTemp.push(e);
            });
        }
    };
    AddPricebookServicesComponent.prototype.saveSelectedLabor = function () {
        this.listPriceLabour = 0;
        for (var i = 0; i < this.selectedLabour.length; i++) {
            this.listPriceLabour = this.listPriceLabour + parseInt(this.selectedLabour[i].subTotal);
        }
    };
    AddPricebookServicesComponent.prototype.cancelSelectedLabor = function () {
        this.router.navigate(['/proz/addPriceBook']);
    };
    /* /Add Labor - Popup */
    /* Add Inventory - Popup */
    AddPricebookServicesComponent.prototype.newInventory = function () {
        this.router.navigate(['/proz/addInventory']);
    };
    AddPricebookServicesComponent.prototype.selectServiceFromList = function (data) {
        var _this = this;
        if (data.selectedService === true) {
            this.selectedInventory.push(data);
            for (var i = 0; i < this.selectedInventory.length; i++) {
                this.selectedInventory[i].sno = i + 1;
                this.selectedInventory[i].subTotal = this.selectedInventory[i].listPrice * 0;
            }
        }
        else {
            this.selectedInventory = this.selectedInventory.filter(function (value) { return value.selectedService == true; });
            this.selectedInventory.forEach(function (e) {
                _this.inventoryTemp.push(e);
            });
        }
    };
    AddPricebookServicesComponent.prototype.saveSelectedInventory = function () {
        this.listPriceInventory = 0;
        for (var i = 0; i < this.selectedInventory.length; i++) {
            this.listPriceInventory = this.listPriceInventory + parseInt(this.selectedInventory[i].subTotal);
            this.getFinalValue();
        }
    };
    AddPricebookServicesComponent.prototype.getQuantity = function (qty) {
        this.listPriceInventory = 0;
        qty.subTotal = qty.quantity * qty.listPrice;
        for (var i = 0; i < this.selectedInventory.length; i++) {
            this.listPriceInventory = this.listPriceInventory + parseInt(this.selectedInventory[i].subTotal);
            this.getFinalValue();
        }
    };
    AddPricebookServicesComponent.prototype.getFinalValue = function () {
        this.taxPercentage = this.taxPercentage;
        this.taxValue = this.listPriceInventory * this.taxPercentage / 100;
        for (var i = 0; i < this.taxPercentage.length; i++) {
            this.taxvalueData = this.listPriceInventory * this.taxPercentage[i] / 100;
        }
        this.totalmaterialPrice = this.listPriceInventory + parseInt(this.taxvalueData);
        this.totalCost = this.listPriceInventory + parseInt(this.settingLEADCOSTValue) + parseInt(this.settingTOCValue) + parseInt(this.settingPBLABORCOSTValue);
        this.packageStandardValue = this.acctype[0].exceptedNetProfit;
        this.percentStandardValue = this.totalCost * this.packageStandardValue / 100;
        this.finalStandardValue = parseInt(this.totalCost) + this.percentStandardValue;
        this.packageValueData = this.acctype[1].exceptedNetProfit;
        this.percentValueData = this.totalCost * this.packageValueData / 100;
        this.finalValueData = parseInt(this.totalCost) + this.percentValueData;
        this.packageMemberValue = this.acctype[2].exceptedNetProfit;
        this.percentMemberValue = this.totalCost * this.packageMemberValue / 100;
        this.finalMemberValue = parseInt(this.totalCost) + this.percentMemberValue;
    };
    AddPricebookServicesComponent.prototype.cancelSelectedInventory = function () {
        this.router.navigate(['/proz/addPriceBook']);
    };
    // MULTIPLE IMAGE UPLOAD START
    AddPricebookServicesComponent.prototype.upload = function () {
        var _this = this;
        var files = this.filesToUpload;
        this.formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            this.formData.append("fileImage", files[i]);
        }
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/multiData', this.formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) {
            _this.imageArray = [];
            _this.uploadFlag = false;
            _this.displyFlag = false;
            for (var i = 0; i < files.imagePath.length; i++) {
                _this.imageArray.push(files.imagePath[i]);
            }
            _this.progressHide1 = true;
            _this.progressShow1 = false;
            if (_this.percentage1 === 100) {
                _this.progressHide1 = false;
                _this.progressShow1 = true;
                _this.img1 = false;
            }
        });
    };
    // MULTIPLE IMAGE UPLOAD END
    AddPricebookServicesComponent.prototype.onSelectFile = function (fileInput) {
        var _this = this;
        this.progressShow = false;
        this.progressHide = false;
        this.imageArray = [];
        this.uniqueArray = [];
        this.progressHide1 = false;
        this.filesToUpload = [];
        if (fileInput.target.files.length == 1) {
            this.filesToUpload.push(fileInput.target.files[0]);
        }
        else {
            for (var i = 0; i < fileInput.target.files.length; i++) {
                this.filesToUpload.push(fileInput.target.files[i]);
            }
        }
        var filesAmount = fileInput.target.files.length;
        for (var i_1 = 0; i_1 < filesAmount; i_1++) {
            var reader = new FileReader();
            reader.onload = function (fileInput) {
                _this.urls.push(fileInput.target.result);
                _this.imageuploadstatus = true;
            };
            reader.readAsDataURL(fileInput.target.files[i_1]);
        }
        this.uploadData();
    };
    AddPricebookServicesComponent.prototype.uploadData = function () {
        var _this = this;
        var files = this.filesToUpload;
        this.formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            this.formData.append("fileImage", files[i]);
        }
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/multiData', this.formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) {
            for (var i = 0; i < files.imagePath.length; i++) {
                _this.newArray.push(files.imagePath[i]);
            }
            _this.uploadFlag = true;
            _this.displyFlag = false;
            _this.uniqueArray = Array.from(new Set(_this.newArray));
            _this.chosseTypecount = _this.uniqueArray.length;
            _this.imageNames = Object.keys(_this.uniqueArray).map(function (key) { return ({ type: key, image: _this.uniqueArray[key] }); });
            _this.arr = Object.keys(_this.uniqueArray).map(function (key) { return ({ type: key, name: _global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + "/" + _this.uniqueArray[key] }); });
        });
    };
    AddPricebookServicesComponent.prototype.getInventoryList = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/listOfInventory' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.inventoryListDetails = response.response;
                for (var i = 0; i < _this.inventoryListDetails.length; i++) {
                    _this.inventoryListDetails[i].subTotal = _this.inventoryListDetails[i].listPrice * _this.inventoryListDetails[i].quantity;
                    _this.subTotalValue = _this.inventoryListDetails[i].subTotal;
                }
                _this.inventoryListResponse = true;
            }
            else {
                _this.inventoryListResponse = false;
            }
            (function (error) {
            });
        });
    };
    // AUto Genrat
    AddPricebookServicesComponent.prototype.serviceIdData = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/maxServiceId/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            _this.serviceNumber = response.serviceId;
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    // AUto Genrat
    AddPricebookServicesComponent.prototype.labourRates = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/listPBLaborrate/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var labourRates = data.json();
            if (labourRates.status == 200) {
                _this.labourList = labourRates.response;
                for (var i = 0; i < _this.labourList.length; i++) {
                    _this.labourList[i].subTotal = _this.labourList[i].listPrice * _this.labourList[i].unitCost;
                }
                _this.labourStatus = true;
            }
            else {
                _this.labourStatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    /* pro specific Categories */
    AddPricebookServicesComponent.prototype.getProCategories = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/proPricebookCategories/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var proCategories = data.json();
            if (proCategories.status == 200) {
                _this.proCategoryList = proCategories.response;
                _this.proCategoryStatus = true;
            }
            else {
                _this.labourStatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    /* pro specific Categories */
    /*  pro specific Catgeroy  Names  */
    AddPricebookServicesComponent.prototype.proCatNames = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/proPricebookCatNames/' + this.addPriceBook1.value.category, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.proCatNameData = response.response;
                return false;
            }
            else {
                _this.toastr.warning("No Records Found");
            }
        }, function (error) {
            _this.toastr.warning("Unable to connect to server");
        });
    };
    /* --/ pro specific Catgeroy  Names  */
    /* pro specific sub categories */
    AddPricebookServicesComponent.prototype.changeCategory = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/PBSubcategoryData/' + this.loginData.loginCode + "/" + this.addPriceBook1.value.category, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.subCategoryServices = response.response;
                return false;
            }
            else {
                _this.toastr.warning("No Records Found");
            }
        }, function (error) {
            _this.toastr.warning("Unable to connect to server");
        });
    };
    /* Tax value */
    AddPricebookServicesComponent.prototype.taxValueData = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/prbTaxValue', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.taxResponse = response.response;
            _this.groupName = _this.taxResponse[0].groupName;
            _this.taxData = _this.taxResponse[0].salesTax;
        });
    };
    AddPricebookServicesComponent.prototype.statevalueDetails = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/prbstateValue', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.stateValueData = response.response;
            _this.taxPercentage = 0;
        });
    };
    /* Tax value */
    AddPricebookServicesComponent.prototype.getPriceBookValues = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/getPriceBookSettingValues/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var priceBookSetting = data.json();
            if (priceBookSetting.status == 200) {
                _this.pricebookSettingValues = priceBookSetting.response;
                for (var i = 0; i < _this.pricebookSettingValues.length; i++) {
                    if (_this.pricebookSettingValues[i].settingName == "TOC") {
                        _this.settingTOCValue = _this.pricebookSettingValues[i].settingValue;
                    }
                    if (_this.pricebookSettingValues[i].settingName == "LEADCOST") {
                        _this.settingLEADCOSTValue = _this.pricebookSettingValues[i].settingValue;
                    }
                    if (_this.pricebookSettingValues[i].settingName == "PBLABORCOST") {
                        _this.settingPBLABORCOSTValue = _this.pricebookSettingValues[i].settingValue;
                    }
                    if (_this.pricebookSettingValues[i].settingName == "OVERHEADCOST") {
                        _this.settingOHCOSTValue = _this.pricebookSettingValues[i].settingValue;
                    }
                }
                _this.priceBookValueStatus = true;
            }
            else {
                _this.priceBookValueStatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    AddPricebookServicesComponent.prototype.getHours = function (hour) {
        this.laborHour = hour;
        this.subTotalL = this.settingPBLABORCOSTValue * this.laborHour;
        this.subTotalLR = this.subTotalL.toFixed(2);
        this.listPriceData = this.listPriceInventory.toFixed(2);
        this.totalC = parseInt(this.listPriceData) + parseInt(this.subTotalLR) + parseInt(this.settingTOCValue) + parseInt(this.settingLEADCOSTValue);
        this.totalCost = this.totalC.toFixed(2);
        this.packageStandardValue = this.acctype[0].exceptedNetProfit;
        this.percentStandardValue = this.totalCost * this.packageStandardValue / 100;
        this.finalStandardValue = parseInt(this.totalCost) + this.percentStandardValue;
        this.packageValueData = this.acctype[1].exceptedNetProfit;
        this.percentValueData = this.totalCost * this.packageValueData / 100;
        this.finalValueData = parseInt(this.totalCost) + this.percentValueData;
        this.packageMemberValue = this.acctype[2].exceptedNetProfit;
        this.percentMemberValue = this.totalCost * this.packageMemberValue / 100;
        this.finalMemberValue = parseInt(this.totalCost) + this.percentMemberValue;
    };
    // LIST Equip Use jobrelated
    AddPricebookServicesComponent.prototype.accountType = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/listPBPackageName/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var accountType = data.json();
            if (accountType.status == 200) {
                _this.acctype = accountType.response;
                _this.account = true;
                return false;
            }
            else {
                _this.account = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    // LIST Equip Use jobrelated
    //IMAGE UPLOAD FOR Document
    AddPricebookServicesComponent.prototype.handleImageDocument = function (file) {
        var _this = this;
        var picReader = new FileReader();
        picReader.onload = function (e) {
            var reader = e.target;
            _this.imagePreviewDocument = reader.result;
        };
        picReader.readAsDataURL(file);
    };
    AddPricebookServicesComponent.prototype.selectDocument = function (event) {
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            if (event.target.files[0].type === "application/pdf") {
                var file = event.target.files[0];
                this.img1 = true;
                this.progressShow2 = false;
                this.progressHide2 = false;
                this.file2Upload1 = event.target.files[0];
                this.handleImageDocument(file);
            }
            else {
                event.target.value = "";
                alert("Please Select PDF");
                this.img1 = false;
                this.progressShow2 = false;
                this.progressHide2 = false;
            }
        }
        else {
            this.img1 = false;
            this.progressShow2 = false;
            this.progressHide2 = false;
            this.imagePreviewDocument = "../../assets/img/no-image.png";
        }
    };
    AddPricebookServicesComponent.prototype.fileUploadDocument = function () {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + "/imageUploadData";
        var formData = new FormData();
        var xhr = new XMLHttpRequest();
        formData.append("image", this.file2Upload1);
        var config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        xhr.open("post", url, true);
        xhr.upload.onprogress = function (e) {
            if (e.lengthComputable) {
                _this.percentage2 = (e.loaded / e.total) * 100;
                _this.progressShow2 = true;
                _this.progressHide2 = false;
                if (_this.percentage2 === 100) {
                    _this.progressShow2 = false;
                    _this.progressHide2 = true;
                    // this.imageUploadVariable.nativeElement.value = "";
                    _this.img1 = false;
                }
            }
        };
        xhr.onerror = function (e) { };
        xhr.onload = function () {
            var a = JSON.parse(xhr.responseText);
            _global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].secimagePath = a.imagePath;
            _global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].documentName = a.name;
        };
        xhr.send(formData);
    };
    AddPricebookServicesComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    AddPricebookServicesComponent.prototype.list = function () {
        this.router.navigate(['/pricebook/listPriceBook']);
    };
    AddPricebookServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'TrimDecimalPipe' }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-add-pricebook-services',
            template: __webpack_require__(/*! ./add-pricebook-services.component.html */ "./src/app/pricebook/PriceBook/PriceBook-Services/add-pricebook-services/add-pricebook-services.component.html"),
            styles: [__webpack_require__(/*! ./add-pricebook-services.component.scss */ "./src/app/pricebook/PriceBook/PriceBook-Services/add-pricebook-services/add-pricebook-services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], AddPricebookServicesComponent);
    return AddPricebookServicesComponent;
}());



/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/edit-pricebook-services/edit-pricebook-services.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/edit-pricebook-services/edit-pricebook-services.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a>PriceBook</a>\r\n          </li>\r\n          <li>\r\n            <a>PriceBook Services</a>\r\n          </li>\r\n          <li>\r\n            <a (click)=\"list()\">List of PriceBook Services</a>\r\n          </li>\r\n          <li class=\"active\">Edit PriceBook Services</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Edit PriceBook Services</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered \">\r\n                      <div class=\"header gray\">\r\n                        Edit PriceBook Service\r\n                      </div>\r\n                      <!-- form1 -->\r\n                      <div id=\"registration-form\" *ngIf=\"account\">\r\n                        <form [formGroup]=\"editPriceBook1\" (ngSubmit)=\"onSubmit()\">\r\n                          <!-- Add PriceBook Services -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"serviceIDLbl\">\r\n                                      <b>Service ID <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"serviceId\"\r\n                                        readonly style=\"background-color: #F2F2F2; color: black\">\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"customerNameLbl\">\r\n                                      <b>Main Category <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <select class=\"form-control\" formControlName=\"category\" #mySelect\r\n                                      (change)='changeCategory(mySelect.value)'>\r\n                                      <option value=\"\">Select</option>\r\n                                      <!-- <option id=\"test\" [ngValue]=\"Plumbing\" disabled>Plumbing</option> -->\r\n                                      <option *ngFor=\"let data of proCategoryList\" value={{data.categoryName}}>\r\n                                        {{data.categoryName}}\r\n                                      </option>\r\n                                    </select>\r\n                                    <div *ngIf=\"submitted && f.category.errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f.category.errors.required\">\r\n                                        <p style=\"color: red; font-size: 11px\">Enter Main Category</p>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"creditLimitLbl\">\r\n                                      <b>Subcategory <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <!-- <select class=\"form-control\" formControlName=\"subcatogryCode\"\r\n                                      (change)=\"prosubCatNames($event.target.value)\">\r\n                                      <option value=\"\">Select</option>\r\n                                      <option *ngFor=\"let data of subCategoryServices\" [value]=\"data.subcategoryCode\">\r\n                                        {{data.subcategoryName}}\r\n                                      </option>\r\n                                    </select> -->\r\n                                    <select class=\"form-control\" name=\"status\" formControlName=\"subCategory\" required>\r\n                                      <option value=\"\">Select</option>\r\n                                      <option *ngFor=\"let data of subCategoryServices\" value={{data.subCategory}}>\r\n                                        {{data.subCategory}}\r\n                                      </option>\r\n                                    </select>\r\n                                    <div *ngIf=\"submitted && f.subCategory.errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f.subCategory.errors.required\">\r\n                                        <p style=\"color: red; font-size: 11px\">Enter Sub category </p>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <br>\r\n                              <div class=\"row\">\r\n\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"sourceLbl\">\r\n                                      <b>Service Title <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-9\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" formControlName=\"description\"\r\n                                        placeholder=\"\">\r\n                                    </span>\r\n                                    <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f.description.errors.required\">\r\n                                        <p style=\"color: red; font-size: 11px\">Enter Description </p>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n\r\n                              </div>\r\n                              <br>\r\n                              <div class=\"row\">\r\n\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"termsLbl\">\r\n                                      <b>Lead Cost($) <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"leadCost\"\r\n                                        readonly style=\"background-color: #F2F2F2; color: black;\">\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"sourceLbl\">\r\n                                      <b>TOC($) <span class=\"mandatory\">*</span></b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                        formControlName=\"truckOperatingCost\" readonly\r\n                                        style=\"background-color: #F2F2F2; color: black;\">\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <br>\r\n                            </div>\r\n                          </div>\r\n                          <!-- Add PriceBook Services -->\r\n\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <hr class=\"hr-gray-thick\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n\r\n\r\n                          <!-- Collapsible -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"panel-group accordion\" id=\"accordions\">\r\n                                <!-- Cost Estimate - Collapsible -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseOne\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Cost Estimate\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                                    <div>\r\n                                      <!-- <form [formGroup]=\"CostEstimate\"> -->\r\n                                      <div class=\"panel-body border-red\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                            <!-- Inventory & Labor List -->\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-xs-12 col-md-12\">\r\n                                                <div class=\"widget\">\r\n                                                  <div class=\"widget-header gray with-footer\">\r\n                                                    <span class=\"widget-caption\">Material</span>\r\n                                                  </div>\r\n                                                  <div class=\"widget-body\">\r\n                                                    <div class=\"flip-scroll\">\r\n                                                      <form [formGroup]=\"editPriceBookInventory\">\r\n                                                        <a class=\"btn btn-xs-two btn-primary\" data-toggle=\"modal\"\r\n                                                          data-target=\"#myInventory\">\r\n                                                          <i class=\"fa fa-plus\"></i> Select Material\r\n                                                        </a> <br /><br />\r\n                                                        <table\r\n                                                          class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                                                          <thead class=\"flip-content bordered-palegreen\">\r\n                                                            <tr>\r\n                                                              <th>\r\n                                                                Item #\r\n                                                              </th>\r\n                                                              <!-- <th>\r\n                                                                Type\r\n                                                              </th> -->\r\n                                                              <th>\r\n                                                                Name\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Description\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Manufacturer\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Model\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                QTY\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                List Price($)\r\n                                                              </th>\r\n                                                              <th>\r\n                                                                Sub Total($)\r\n                                                              </th>\r\n                                                              <!-- <th>\r\n                                                              Delete\r\n                                                            </th> -->\r\n                                                            </tr>\r\n                                                          </thead>\r\n                                                          <ng-container>\r\n                                                            <tbody>\r\n                                                              <tr *ngFor=\"let data of priceBookListInventoryDetails\">\r\n                                                                <td>\r\n                                                                  <input type=\"text\" style=\"text-align: center;\"\r\n                                                                    [(ngModel)]=\"data.item\"\r\n                                                                    [ngModelOptions]=\"{standalone: true}\" placeholder=\"\"\r\n                                                                    class=\"form-control input-sm\" readonly\r\n                                                                    style=\"background-color: #F2F2F2; color: black;\">\r\n                                                                </td>\r\n                                                                <!-- <td>\r\n                                                                  <input type=\"text\" [(ngModel)]=\"data.type\"\r\n                                                                    [ngModelOptions]=\"{standalone: true}\" placeholder=\"\"\r\n                                                                    class=\"form-control input-sm;background\" readonly\r\n                                                                    style=\"background-color: #F2F2F2; color: black;text-align: center;\">\r\n                                                                </td> -->\r\n                                                                <td>\r\n                                                                  <input type=\"text\"\r\n                                                                    style=\"background-color: #F2F2F2; color: black;text-align: center;\"\r\n                                                                    [(ngModel)]=\"data.name\"\r\n                                                                    [ngModelOptions]=\"{standalone: true}\" placeholder=\"\"\r\n                                                                    class=\"form-control input-sm\" readonly>\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <input type=\"text\"\r\n                                                                    style=\"background-color: #F2F2F2; color: black;text-align: center;\"\r\n                                                                    [(ngModel)]=\"data.description\"\r\n                                                                    [ngModelOptions]=\"{standalone: true}\"\r\n                                                                    class=\"form-control input-sm\" readonly>\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <input type=\"text\" [(ngModel)]=\"data.manufacturer\"\r\n                                                                    [ngModelOptions]=\"{standalone: true}\"\r\n                                                                    class=\"form-control input-sm\" readonly\r\n                                                                    style=\"background-color: #F2F2F2; color: black;text-align: center;\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <input type=\"text\" [(ngModel)]=\"data.model\"\r\n                                                                    [ngModelOptions]=\"{standalone: true}\"\r\n                                                                    class=\"form-control input-sm\" readonly\r\n                                                                    style=\"background-color: #F2F2F2; color: black;text-align: center;\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <input type=\"text\" style=\"text-align: center;\"\r\n                                                                    pattern=\" 0+\\.[0-9]*[1-9][0-9]*$\"\r\n                                                                    name=\"itemConsumption\"\r\n                                                                    onkeypress=\"return event.charCode >= 48 && event.charCode <= 57\"\r\n                                                                    [(ngModel)]=\"data.quantity\"\r\n                                                                    (ngModelChange)=\"getQuantity(data)\"\r\n                                                                    [ngModelOptions]=\"{standalone: true}\" placeholder=\"\"\r\n                                                                    class=\"form-control input-sm\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <input type=\"text\" [(ngModel)]=\"data.listPrice\"\r\n                                                                    [ngModelOptions]=\"{standalone: true}\" placeholder=\"\"\r\n                                                                    class=\"form-control input-sm\" readonly\r\n                                                                    style=\"background-color: #F2F2F2; color: black;text-align: center;\">\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <input type=\"text\" class=\"form-control input-sm\"\r\n                                                                    style=\"background-color: #F2F2F2; color: black;text-align: center;\"\r\n                                                                    [(ngModel)]=\"data.subTotal\"\r\n                                                                    [ngModelOptions]=\"{standalone: true}\" readonly>\r\n                                                                </td>\r\n                                                              </tr>\r\n                                                            </tbody>\r\n                                                          </ng-container>\r\n                                                        </table>\r\n                                                        <br>\r\n                                                      </form>\r\n                                                      <div class=\"row\">\r\n                                                        <div class=\"col-sm-5\">\r\n                                                          <div class=\"form-group\">\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-2\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"materialCostLbl\">\r\n                                                              <!-- <h5><b>Material Cost</b></h5> -->\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-1\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"materialCostVal\">\r\n                                                              <!-- <h5><b class=\"text-blue\">$258.00</b></h5> -->\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-2\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"laborCostLbl\">\r\n                                                              <h5><b>Total Material Cost</b></h5>\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-2\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"laborCostVal\">\r\n                                                              <h5><b class=\"text-blue\">${{listPriceInventory}}</b></h5>\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <!-- <div class=\"row\">\r\n                                            <div class=\"col-sm-4\">\r\n                                              <div class=\"form-group\">\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"laborCostLbl\">\r\n                                                  <h5 style=\"text-align: right;\"><b>Tax %</b></h5>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"laborCostVal\">\r\n                                                  <h5><b class=\"text-blue\"><input type=\"text\"\r\n                                                        class=\"form-control input-sm\"\r\n                                                        value=\"{{taxPercentage}}\"\r\n                                                        [(ngModel)]=\"taxPercentage\"\r\n                                                        (ngModelChange)=\"getFinalValue(taxPercentage)\"\r\n                                                        [ngModelOptions]=\"{standalone: true}\" /></b>\r\n                                                  </h5>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"laborCostLbl\">\r\n                                                  <h5><b>Tax Value</b></h5>\r\n                                                </label>\r\n                                              </div\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"laborCostVal\">\r\n                                                  <h5><b class=\"text-blue\">{{ taxvalueData}}</b></h5>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div> -->\r\n                                            <!-- <div class=\"row\">\r\n                                            <div class=\"col-sm-4\">\r\n                                              <div class=\"form-group\">\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\">\r\n                                              <div class=\"form-group\">\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\">\r\n                                              <div class=\"form-group\">\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"laborCostLbl\">\r\n                                                  <h5><b>Total Material Cost</b></h5>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <div class=\"col-sm-2\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"laborCostVal\">\r\n                                                  <h5><b class=\"text-blue\">${{totalmaterialPrice}}</b></h5>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div> -->\r\n                                            <!-- /Total Material Cost -->\r\n                                            <!-- /Inventory & Labor List -->\r\n\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-xs-12 col-md-12\">\r\n                                                <div class=\"widget\">\r\n                                                  <div class=\"widget-header gray with-footer\">\r\n                                                    <span class=\"widget-caption\">Enter Labor cost for this\r\n                                                      service</span>\r\n                                                  </div>\r\n                                                  <div class=\"widget-body\">\r\n                                                    <div class=\"flip-scroll\">\r\n                                                      <!-- <form> -->\r\n                                                      <div class=\"row\">\r\n                                                        <div class=\"col-sm-3\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"termsLbl\">\r\n                                                              <b>Labor Rate ($/Hour)</b>\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-3\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                              <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                formControlName=\"laborRate\" readonly\r\n                                                                style=\"background-color: #F2F2F2; color: black;\">\r\n                                                            </span>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-6\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <p><a\r\n                                                                href=\"http://localhost:4800/proz/accountSettings\">Labor\r\n                                                                rate is defined in Account Settings</a></p>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                      </div>\r\n\r\n                                                      <div class=\"row\">\r\n                                                        <div class=\"col-sm-3\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"sourceLbl\">\r\n                                                              <b> Enter Number Of Hours </b>\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-3\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                              <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                [dropSpecialCharacters]=\"false\" mask=\"0*.00\"\r\n                                                                [(ngModel)]=\"qty\" (ngModelChange)=\"getHours(qty)\"\r\n                                                                [ngModelOptions]=\"{standalone: true}\">\r\n                                                            </span>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                      </div>\r\n\r\n                                                      <div class=\"row\">\r\n                                                        <div class=\"col-sm-3\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"termsLbl\">\r\n                                                              <b>SubTotal($)</b>\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-3\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                              <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                formControlName=\"laborCost\" readonly\r\n                                                                style=\"background-color: #F2F2F2; color: black\"\r\n                                                                value=\"{{subTotalLR}}\">\r\n                                                            </span>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-1\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"laborCostLbl\">\r\n                                                              <h5><b></b></h5>\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-1\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"laborCostLbl\">\r\n                                                              <h5><b></b></h5>\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-2\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"laborCostLbl\">\r\n                                                              <h5><b>Labor Cost</b></h5>\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-2\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"laborCostVal\">\r\n                                                              <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                formControlName=\"laborCost\" readonly\r\n                                                                value=\"{{subTotalLR}}\">\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                      <!-- </form> -->\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-xs-12 col-md-12\">\r\n                                                <div class=\"widget\">\r\n                                                  <div class=\"widget-header gray with-footer\">\r\n                                                    <span class=\"widget-caption\">Total Cost (Material Cost + Labor Cost\r\n                                                      + Lead Cost + TOC)</span>\r\n                                                  </div>\r\n                                                  <div class=\"widget-body\">\r\n                                                    <div class=\"flip-scroll\">\r\n                                                      <!-- <form> -->\r\n                                                      <div class=\"row\">\r\n\r\n                                                        <div class=\"col-sm-5\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"termsLbl\">\r\n                                                              <b>Total Cost($)</b>\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n\r\n                                                        <div class=\"col-sm-2\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                              <label for=\"laborCostVal\">\r\n                                                                <h5><b class=\"text-blue\"></b></h5>\r\n                                                              </label>\r\n                                                            </span>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-1\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                              <label for=\"laborCostVal\">\r\n                                                                <h5><b class=\"text-blue\"></b></h5>\r\n                                                              </label>\r\n                                                            </span>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-2\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                              <label for=\"laborCostVal\">\r\n                                                                <h5><b class=\"text-blue\"></b></h5>\r\n                                                              </label>\r\n                                                            </span>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-1\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <span class=\"input-icon icon-right\">\r\n                                                              <label for=\"laborCostVal\">\r\n                                                                <h5><b class=\"text-blue\">${{totalCostNew}}</b></h5>\r\n                                                              </label>\r\n                                                            </span>\r\n                                                          </div>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                      <!-- </form> -->\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <!-- Package Name -->\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-lg-12 col-md-10 col-sm-12 col-xs-12\">\r\n                                                <br>\r\n                                                <!-- list -->\r\n                                                <div class=\"row\">\r\n                                                  <div class=\"col-xs-12 col-md-12\">\r\n                                                    <div class=\"widget\">\r\n                                                      <div class=\"widget-body\">\r\n                                                        <div class=\"flip-scroll\">\r\n                                                          <table\r\n                                                            class=\"table table-bordered table-striped table-condensed flip-content\"\r\n                                                            *ngIf=\"account\">\r\n                                                            <thead class=\"flip-content\">\r\n                                                              <tr>\r\n                                                                <th>\r\n                                                                  Package Name\r\n                                                                </th>\r\n                                                                <th>\r\n                                                                  {{acctype[0].packageName}}\r\n                                                                </th>\r\n                                                                <th>\r\n                                                                  {{acctype[1].packageName}}\r\n                                                                </th>\r\n                                                                <th>\r\n                                                                  {{acctype[2].packageName}}\r\n                                                                </th>\r\n                                                              </tr>\r\n                                                            </thead>\r\n                                                            <tbody>\r\n                                                              <tr>\r\n                                                                <td>\r\n                                                                  Desired Profit(%)\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <div class=\"form-group\">\r\n                                                                    <input type=\"text\" class=\"form-control\"\r\n                                                                      value=\"{{acctype[0].exceptedNetProfit}}\" readonly\r\n                                                                      [ngStyle]=\"{'background-color': acctype[0].colorCode}\"\r\n                                                                      style=\"color: white;\">\r\n                                                                  </div>\r\n                                                                </td>\r\n                                                                <td class=\"numeric\">\r\n                                                                  <div class=\"form-group\">\r\n                                                                    <input type=\"text\" class=\"form-control\"\r\n                                                                      value=\"{{acctype[1].exceptedNetProfit}}\" readonly\r\n                                                                      [ngStyle]=\"{'background-color': acctype[1].colorCode}\"\r\n                                                                      style=\"color: white;\">\r\n                                                                  </div>\r\n                                                                </td>\r\n                                                                <td class=\"numeric\">\r\n                                                                  <div class=\"form-group\">\r\n                                                                    <input type=\"text\" class=\"form-control\"\r\n                                                                      value=\"{{acctype[2].exceptedNetProfit}}\" readonly\r\n                                                                      [ngStyle]=\"{'background-color': acctype[2].colorCode}\"\r\n                                                                      style=\"color: white;\">\r\n                                                                  </div>\r\n                                                                </td>\r\n                                                              </tr>\r\n                                                              <tr>\r\n                                                                <td>\r\n                                                                  Price Book List Prices\r\n                                                                </td>\r\n                                                                <!-- <td  style=\"background-color: lightsalmon; color: black;\">\r\n                                                                &nbsp;${{finalStandardValue}}\r\n                                                              </td> -->\r\n                                                                <td>\r\n                                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                    value=\"{{finalStandardValue}}\"\r\n                                                                    [ngStyle]=\"{'background-color': acctype[0].colorCode}\"\r\n                                                                    style=\"color: white;\" readonly>\r\n                                                                </td>\r\n                                                                <!-- <td class=\"numeric\" style=\"background-color: lightgreen; color: black;\">\r\n                                                                &nbsp; ${{finalValueData}}\r\n                                                              </td> -->\r\n                                                                <td>\r\n                                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                    value=\"{{finalValueData}}\"\r\n                                                                    [ngStyle]=\"{'background-color': acctype[1].colorCode}\"\r\n                                                                    style=\"color: white;\" readonly>\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  <input type=\"text\" class=\"form-control\" placeholder=\"\"\r\n                                                                    value=\"{{finalMemberValue}}\"\r\n                                                                    [ngStyle]=\"{'background-color': acctype[2].colorCode}\"\r\n                                                                    style=\"color: white;\" readonly>\r\n                                                                </td>\r\n                                                                <!-- <td class=\"numeric\" style=\"background-color: lightskyblue; color: black;\">\r\n                                                                &nbsp; ${{finalMemberValue}}\r\n                                                              </td> -->\r\n                                                              </tr>\r\n                                                            </tbody>\r\n                                                          </table>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <!-- list -->\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                            <!-- /Package Name -->\r\n                                            <br>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <!-- </form> -->\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Cost Estimate - Collapsible -->\r\n\r\n\r\n                                <!-- Images -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseThird\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Images\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseThird\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"serviceIDLbl\">\r\n                                                  <b>Add Images</b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-2\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"customerNameLbl\">\r\n                                                  <!-- <input type=\"file\" (change)=\"onSelectFile($event)\"\r\n                                                    style=\"margin-left:6em;\"  multiple> -->\r\n                                                  <input type='file' id=\"files\" (change)=\"onSelectFile($event)\" multiple\r\n                                                    class=\"hidden\" />\r\n                                                  <label for=\"files\"> Choose File <i class=\"fa fa-file-image-o\"\r\n                                                      title=\"Chose File\"></i>\r\n                                                    &nbsp;&nbsp;\r\n                                                    {{chosseTypecount}} </label>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                            <!-- <div style=\"margin-left: 0.9em;\" class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <input \r\n                                                  style=\"background-color: #F2F2F2; color: black;margin-right: 20em;text-align: center;\"\r\n                                                  readonly value={{chosseTypecount}}>\r\n                                              </div>\r\n                                            </div> -->\r\n                                            <div class=\"col-sm-2\">\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-5\">\r\n                                              <div class=\"form-group\">\r\n                                                <div *ngFor=\"let x of arr;let i=index\">\r\n                                                  <br>\r\n                                                  <figure style=\"height:140px;width:220px;\" class=\"icon1\">\r\n                                                    {{imageNames[i]?.image}}<i (click)=\"removeSelectedFile(i)\"\r\n                                                      style=\"margin-left:10px;color: red\" class=\"fa fa-times\"></i>\r\n                                                    <img src=\"{{x.name}}\" height=\"100px\" width=\"120px\" readonly>\r\n                                                  </figure>\r\n                                                  &nbsp;&nbsp;&nbsp;&nbsp;\r\n                                                </div>\r\n                                                <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"upload()\">\r\n                                                  Upload\r\n                                                </button>\r\n                                                <br />\r\n                                                <div *ngIf=\"displyFlag == true\">\r\n                                                  <p style=\"color: red; font-size: 11px\">\r\n                                                    Please upload the files\r\n                                                  </p>\r\n                                                </div>\r\n                                                <br>\r\n                                                <br>\r\n                                                <div *ngIf=\"progressShow1\" class=\"progress-bar1 green stripes\">\r\n                                                  <span [style.width.%]=\"percentage1\">\r\n                                                    <p style=\"text-align: center;color:black;font-size:18px;\">\r\n                                                      {{percentage1}}%</p>\r\n                                                  </span>\r\n                                                </div>\r\n                                                <div *ngIf=\"progressHide1\" class=\"alert alert-block alert-success\"\r\n                                                  style=\"height:3px;\">\r\n                                                  <h4 class=\"alert-heading\" style=\"margin-top:-5px;text-align:center;\">\r\n                                                    Images\r\n                                                    Uploaded\r\n                                                    Successfully</h4>\r\n                                                </div>\r\n\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <!-- </ng-container> -->\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"panel-body border-red\">\r\n                                    </div>\r\n                                    <br>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- Images -->\r\n\r\n                                <!-- Documents -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseFour\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Documents\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n\r\n                                          <!-- <div class=\"row\">\r\n                                          <div class=\"col-sm-3\">\r\n                                            <div class=\"form-group\">\r\n                                              <label for=\"documentsLbl\">\r\n                                                <b>Add Documents</b>\r\n                                              </label>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-sm-4\">\r\n                                            <div class=\"form-group\">\r\n                                              <input type='file' (change)=\"onSelectFile($event)\" multiple>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                              <div *ngFor='let url of urls;let index = index'>\r\n                                                <figure class=\"icon1\">\r\n                                                  <figcaption (click)=\"removeSelectedFile(index)\" style=\"margin-left:20px;color: red\"><i\r\n                                                      class=\"fa fa-times\"></i>\r\n                                                  </figcaption>\r\n                                                  <img [src]=\"url\" height=\"100px\" width=\"120px\">\r\n\r\n                                                </figure>\r\n                                                &nbsp;&nbsp;&nbsp;&nbsp;\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div> -->\r\n\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"writeupPictureLbl\">\r\n                                                  <b> Add Documents </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <div class=\"controls\">\r\n                                                  <div data-provides=\"fileupload\" class=\"fileupload fileupload-new\">\r\n                                                    <!-- <div style=\"width: 100px; height: 120px;\"\r\n                                                                                          class=\"fileupload-new thumbnail\">\r\n                                                                                          <img [src]=\"imagePreviewWriteup\" style=\"height:120px;width:100px;\">\r\n                                                                                        </div> -->\r\n                                                    <!-- <div style=\"max-width: 90px; max-height: 110px; line-height: 20px;\"\r\n                                                                                          class=\"fileupload-preview fileupload-exists thumbnail\"></div> -->\r\n                                                    <div>\r\n                                                      <label *ngIf=\"nofileData\">\r\n                                                        <a href=\"/uploads/{{documentLink}}\"\r\n                                                          target=\"_blank\">{{documentLink}}</a>\r\n                                                      </label>\r\n                                                      <label *ngIf=\" !nofileData\">\r\n                                                        <!-- {{globalUrl}}<a href=\"{{globalUrl}}/uploads/{{documentLink}}\" target=\"_blank\">{{documentLink}}</a> -->\r\n                                                      </label>\r\n                                                      <input #imageUpload type=\"file\" accept=\"application/pdf\"\r\n                                                        id=\"avatar\" (change)=\"selectDocument($event)\" #fileInput>\r\n                                                      <button type=\"button\" class=\"btn\"\r\n                                                        (click)=\"fileUploadDocument()\">Upload</button>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n\r\n                                                <div *ngIf=\"progressShow1\" class=\"progress-bar1 blue stripes\">\r\n                                                  <span [style.width.%]=\"percentage1\">\r\n                                                    <p style=\"text-align: center;color:black;font-size:18px;\">\r\n                                                      {{percentage1}}%</p>\r\n                                                  </span>\r\n                                                </div>\r\n                                                <div *ngIf=\"progressHide1\" class=\"alert alert-block alert-success\"\r\n                                                  style=\"height:3px;\">\r\n                                                  <h4 class=\"alert-heading\" style=\"margin-top:-5px;text-align:center;\">\r\n                                                    Document\r\n                                                    Uploaded\r\n                                                    Successfully</h4>\r\n                                                </div>\r\n                                                <br>\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"panel-body border-red\">\r\n                                    </div>\r\n                                    <br>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- Documents -->\r\n\r\n\r\n                                <!-- Service Description -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseFifth\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Service Description\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseFifth\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"bioLbl\">\r\n                                                  <b>Add Service Description </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <textarea rows=\"4\" class=\"form-control\"\r\n                                                    formControlName=\"serviceDescription\"\r\n                                                    placeholder=\"Enter Your Service Description\"></textarea>\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Service Description   -->\r\n\r\n                                <!-- Installation Instructions -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseSixth\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Installation Instructions\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseSixth\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"bioLbl\">\r\n                                                  <b>Add Installation Instructions </b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <textarea rows=\"4\" class=\"form-control\" formControlName=\"instructions\"\r\n                                                    placeholder=\"Enter Your Installation Instructions\"></textarea>\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Installation Instructions  -->\r\n\r\n\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Collapsible -->\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <hr class=\"hr-gray-thick\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n\r\n                          <!-- Buttons -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-2 button-center\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <button type=\"submit\" class=\"btn btn-blue\"><i class=\"fa fa-check\"></i>\r\n                                  Update</button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <button type=\"submit\" (click)=\"cancelPriceBook()\" class=\"btn btn-gray\"><i\r\n                                    class=\"fa fa-check\"></i>\r\n                                  Cancel</button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-4 button-center\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Buttons -->\r\n\r\n\r\n                        </form>\r\n                      </div>\r\n                      <!-- /form1 -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Add Inventory Popup -->\r\n        <div id=\"myInventory\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <div class=\"widget-header blue\">\r\n                  <span class=\"widget-caption\"><b>Select Material For This PriceBook Item:</b></span>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <br />\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 \">\r\n                      <div class=\"row\">\r\n                        <!-- <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                          <button type=\"submit\" class=\"btn btn-gray\" (click)=\"newInventory()\">\r\n                            <i class=\"fa fa-plus\"></i>Add New Material</button>\r\n                        </div> -->\r\n                      </div><br />\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-6\">\r\n                          <div class=\"form-group\">\r\n                            <span class=\"input-icon icon-right\">\r\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Eg: Search Material\">\r\n                              <i class=\"fa fa-search\"></i>\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"table-scrollable\">\r\n                        <table class=\"table table-striped table-hover table-bordered\" id=\"editabledatatable\"\r\n                          style=\"width:100%;\" *ngIf=\"inventoryListResponse\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th style=\"width:5%;\">\r\n                                Select\r\n                              </th>\r\n                              <!-- <th style=\"width:5%;\">\r\n                                Type\r\n                              </th> -->\r\n                              <th style=\"width:5%;\">\r\n                                Name\r\n                              </th>\r\n                              <th style=\"width:10%;\">\r\n                                Description\r\n                              </th>\r\n                              <th style=\"width:5%;\">\r\n                                Manufacturer\r\n                              </th>\r\n                              <th style=\"width:5%;\">\r\n                                Model\r\n                              </th>\r\n                              <!-- <th style=\"width:5%;\">\r\n                                QTY\r\n                              </th> -->\r\n                              <th style=\"width:5%;\">\r\n                                List Price\r\n                              </th>\r\n                              <!-- <th style=\"width:5%;\">\r\n                                Sub Total\r\n                              </th> -->\r\n\r\n                            </tr>\r\n                          </thead>\r\n\r\n                          <tbody>\r\n                            <tr *ngFor=\"let data of inventoryListDetails\">\r\n                              <td class=\"center\">\r\n                                <label>\r\n                                  <input type=\"checkbox\" class=\"colored-success\" [(ngModel)]=\"data.selectedService\"\r\n                                    (ngModelChange)=\"selectServiceFromList(data)\" [ngModelOptions]=\"{standalone: true}\"\r\n                                    value=\"1\">\r\n                                  <span class=\"text\"></span>\r\n                                </label></td>\r\n                              <!-- <!-- <td>{{data.id}}</t/d> -->\r\n                              <!-- <td>{{data.type}}</td> -->\r\n                              <td>{{data.name}}</td>\r\n                              <td>{{data.description}}</td>\r\n                              <td>{{data.manufacturer}}</td>\r\n                              <td>{{data.model}}</td>\r\n                              <td class=\"center \">{{data.listPrice}}</td>\r\n                              <!-- <td>{{data.quantity}}</td> -->\r\n                              <!-- <td class=\"center \">{{data.subTotal}}</td> -->\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!inventoryListResponse\">\r\n                          <p>No Records Found</p>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <div class=\"form-group\">\r\n                      <button type=\"button\" class=\"btn btn-blue\" data-dismiss=\"modal\"\r\n                        (click)=\"saveSelectedInventory()\"><i class=\"fa fa-check\"></i>\r\n                        Save</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <div class=\"form-group\">\r\n                      <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\"\r\n                        (click)=\"cancelSelectedInventory()\"><i class=\"fa fa-times\"></i>\r\n                        Cancel</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div> <!-- / .modal-content -->\r\n          </div>\r\n        </div>\r\n        <!-- /Add Inventory Popup -->\r\n\r\n        <!-- Add Labor Popup -->\r\n        <div id=\"myLabors\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <div class=\"widget-header blue\">\r\n                  <span class=\"widget-caption\"><b>Add Labor</b></span>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <br />\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 \">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                          <button type=\"submit\" class=\"btn btn-gray\" (click)=\"newLabourRate()\">\r\n                            <i class=\"fa fa-user-plus\"></i>Add New Labor</button>\r\n                        </div>\r\n                      </div><br />\r\n                      <div class=\"row\">\r\n                        <div class=\"col-lg-6\">\r\n                          <div class=\"form-group\">\r\n                            <span class=\"input-icon icon-right\">\r\n                              <input type=\"text\" class=\"form-control\" placeholder=\"Eg: Search Labor\">\r\n                              <i class=\"fa fa-search\"></i>\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"table-scrollable\">\r\n                        <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                          <thead class=\"flip-content bordered-purple\">\r\n                            <tr>\r\n                              <th>\r\n                                Select\r\n                              </th>\r\n                              <th>\r\n                                Role\r\n                              </th>\r\n                              <th>\r\n                                Units\r\n                              </th>\r\n                              <th>\r\n                                Unit Cost\r\n                              </th>\r\n                              <th>\r\n                                List Price\r\n                              </th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let data of labourList\">\r\n                              <td>\r\n                                <label>\r\n                                  <!-- <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\"> -->\r\n                                  <input type=\"checkbox\" class=\"colored-success\"\r\n                                    [(ngModel)]=\"data.selectedServiceLabour\"\r\n                                    (ngModelChange)=\"selectServiceLabourFromList(data)\"\r\n                                    [ngModelOptions]=\"{standalone: true}\" value=\"1\">\r\n                                  <span class=\"text\"></span>\r\n                                </label>\r\n                              </td>\r\n                              <td>\r\n                                {{data.role}}\r\n                              </td>\r\n                              <td>\r\n                                {{data.units}}\r\n                              </td>\r\n                              <td>\r\n                                {{data.unitCost}}\r\n                              </td>\r\n                              <td>\r\n                                {{data.listPrice}}\r\n                              </td>\r\n                            </tr>\r\n\r\n                          </tbody>\r\n                        </table>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <div class=\"form-group\">\r\n                      <button type=\"button\" class=\"btn btn-blue\" data-dismiss=\"modal\" (click)=\"saveSelectedLabor()\"><i\r\n                          class=\"fa fa-check\"></i>\r\n                        Save</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3 button-center\">\r\n                    <div class=\"form-group\">\r\n                      <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\" (click)=\"cancelSelectedLabor()\"><i\r\n                          class=\"fa fa-times\"></i>\r\n                        Cancel</button>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-3\">\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div> <!-- / .modal-content -->\r\n          </div>\r\n        </div>\r\n        <!-- /Add Labor Popup -->\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n\r\n\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/edit-pricebook-services/edit-pricebook-services.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/edit-pricebook-services/edit-pricebook-services.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n    padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.groove {\n  border-style: groove; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.checkbox, .radio {\n  position: relative;\n  display: block;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.button-center {\n  text-align: center; }\n\n.button-left {\n  text-align: left; }\n\n.button-right {\n  text-align: right; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.center {\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.item {\n  text-align: center; }\n\n.body {\n  background-color: white; }\n\n.header-title {\n  font-size: 18px !important; }\n\n.form-heading {\n  font-size: 18px !important; }\n\n/* Buttons */\n\n.btn {\n  font-size: 14px !important;\n  font-weight: bold !important; }\n\n/* /Buttons */\n\n/* Line */\n\n.hr-blue {\n  border-top: 1px solid #869eb4 !important; }\n\n/* /Line */\n\n/* Textbox */\n\n.formcontrol, select {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  border-left-width: 1px !important;\n  border-right-width: 1px !important; }\n\n/* /Textbox */\n\n/* Atkore logo */\n\n.text {\n  text-align: center; }\n\n.text img {\n  width: 70px;\n  height: 80px; }\n\n/* /Atkore logo */\n\n/* Labels */\n\n.label {\n  padding: 5px !important; }\n\nlabel .mandatory {\n  color: red;\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n/* /Labels */\n\n/* Tables    */\n\n.table > tbody > tr > td {\n  padding: 2px !important;\n  line-height: 1.257143 !important;\n  vertical-align: middle; }\n\n/* /Tables    */\n\n/* Vertical Text */\n\n.testrotate p {\n  line-height: 145px !important;\n  font-size: 15px; }\n\n.testrotate .testq {\n  line-height: 483px !important;\n  font-size: 15px; }\n\n.testrotate .testr {\n  line-height: 100px !important;\n  font-size: 15px; }\n\n.testrotate .testp {\n  line-height: 170px !important;\n  font-size: 15px; }\n\n/* /Vertical Text */\n\n/* Textbox input */\n\n.input .formcontrol {\n  width: 50px !important;\n  vertical-align: middle; }\n\n/* /Textbox input */\n\n.form-control {\n  padding: 4px 3px !important; }\n\n.background {\n  background: #F2F2F2;\n  text-align: center;\n  color: black; }\n\n/* Pin Gap Diagram */\n\n.row .pin img {\n  width: 230px;\n  height: 240px;\n  margin-left: 30px !important;\n  margin-right: auto !important; }\n\n/* /Pin Gap Diagram */\n\n.gap {\n  text-align: center; }\n\n/* Bolt torque specifications */\n\n.adjust {\n  margin-left: 10px !important;\n  margin-bottom: 1040px !important; }\n\n/* /Bolt torque specifications */\n\n/* Imageupload    */\n\ntd .img-adjust {\n  margin-left: auto !important;\n  margin-right: auto !important; }\n\n/* /Imageupload    */\n\n.alert-heading {\n  font-size: 12px; }\n\n.align-text-top {\n  vertical-align: top !important; }\n\n.text-big {\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n    padding: 8px 0;\r\n    border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n   margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.blue {\n  background-color: #5db2ff !important;\n  color: #333 !important;\n  font-weight: bold; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.accordion.panel-group .panel-body {\n  background-color: #fff !important;\n  border-top: none !important;\n  border-left: 2px solid #eee;\n  color: #262626 !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.icon1 {\n  height: auto;\n  width: 120px;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  font: 400 16px/1.4 \"Source Code Pro\";\n  font-variant: small-caps;\n  padding: 10px;\n  border: 1px solid #103683;\n  border-radius: 10px; }\n\n.text-blue {\n  color: #5db2ff; }\n\n.btn-xs-two {\n  padding: 2px 7px !important;\n  margin: 2px 0px !important; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n.well.with-footer {\n  padding-bottom: 10px !important; }\n\n.border {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  background-color: #fff; }\n\n.modal-footer {\n  border-top: 3px solid #333 !important; }\n\n.table-scrollable {\n  width: 100%;\n  height: 200px !important;\n  overflow-x: auto;\n  overflow-y: auto !important;\n  border: 1px solid #ddd; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2Vib29rL1ByaWNlQm9vay9QcmljZUJvb2stU2VydmljZXMvZWRpdC1wcmljZWJvb2stc2VydmljZXMvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByaWNlYm9va1xcUHJpY2VCb29rXFxQcmljZUJvb2stU2VydmljZXNcXGVkaXQtcHJpY2Vib29rLXNlcnZpY2VzXFxlZGl0LXByaWNlYm9vay1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7cUJBQ2lCO0VBR2pCLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCO3lCQUNzQixFQUV4Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFDeEM7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFFeEM7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLHFCQUFvQixFQUFFOztBQUUxQjtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM5QixvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLDJCQUEwQjtFQUMxQiw4QkFBNkIsRUFDaEM7O0FBT0Q7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QixxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDQSxtQkFBa0IsRUFDakI7O0FBRUQ7RUFDRyxpQkFBZ0IsRUFDbEI7O0FBRUQ7RUFDRyxrQkFBaUIsRUFDaEI7O0FBRUo7RUFDSSwwQkFBeUI7RUFDekIsa0NBQWlDO0VBQ2pDLDRDQUEyQyxFQUM5Qzs7QUFFRDtFQUNJLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixrQ0FBaUMsRUFDcEM7O0FBRUQ7RUFDSSwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksbUJBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksd0JBQXNCLEVBRXpCOztBQUVEO0VBQ0ksMkJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMkJBQXlCLEVBQzVCOztBQUNELGFBQWE7O0FBQ2I7RUFDSSwyQkFBMEI7RUFDMUIsNkJBQTRCLEVBQy9COztBQUNELGNBQWM7O0FBRWQsVUFBVTs7QUFDVjtFQUNJLHlDQUFtRCxFQUN0RDs7QUFDRCxXQUFXOztBQUVYLGFBQWE7O0FBQ2I7RUFDSSw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzdCLGtDQUFpQztFQUNqQyxtQ0FBa0MsRUFDckM7O0FBQ0QsY0FBYzs7QUFFZCxpQkFBaUI7O0FBQ2pCO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksWUFBVztFQUNYLGFBQVksRUFDZjs7QUFDRCxrQkFBa0I7O0FBRWxCLFlBQVk7O0FBQ1o7RUFDSSx3QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxXQUFTO0VBQ1QsMkJBQTBCO0VBQzFCLDZCQUE0QixFQUMvQjs7QUFDRCxhQUFhOztBQUViLGVBQWU7O0FBQ2Y7RUFDSSx3QkFBdUI7RUFDdkIsaUNBQWdDO0VBQ2hDLHVCQUFzQixFQUN6Qjs7QUFDRCxnQkFBZ0I7O0FBRWhCLG1CQUFtQjs7QUFHbkI7RUFDSSw4QkFBNEI7RUFDNUIsZ0JBQWMsRUFDakI7O0FBRUQ7RUFDSSw4QkFBNEI7RUFDNUIsZ0JBQWMsRUFDakI7O0FBRUQ7RUFDSSw4QkFBNEI7RUFDNUIsZ0JBQWMsRUFDakI7O0FBRUQ7RUFDSSw4QkFBNEI7RUFDNUIsZ0JBQWMsRUFDakI7O0FBRUQsb0JBQW9COztBQUVwQixtQkFBbUI7O0FBQ25CO0VBQ0ksdUJBQXFCO0VBQ3JCLHVCQUFxQixFQUN4Qjs7QUFDRCxvQkFBb0I7O0FBT3BCO0VBQ0ksNEJBQTBCLEVBQzdCOztBQUNEO0VBQ0Esb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNqQixhQUFZLEVBRVo7O0FBRUQscUJBQXFCOztBQUNyQjtFQUNJLGFBQVc7RUFDWCxjQUFZO0VBQ1osNkJBQTJCO0VBQzNCLDhCQUE0QixFQUMvQjs7QUFDRCxzQkFBc0I7O0FBRXRCO0VBQ0ksbUJBQWlCLEVBQ3BCOztBQUNELGdDQUFnQzs7QUFDaEM7RUFDSSw2QkFBMkI7RUFDM0IsaUNBQWdDLEVBQ25DOztBQUNELGlDQUFpQzs7QUFFakMsb0JBQW9COztBQUNwQjtFQUNJLDZCQUEyQjtFQUMzQiw4QkFBNEIsRUFDL0I7O0FBQ0QscUJBQXFCOztBQUdyQjtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksK0JBQThCLEVBQ2pDOztBQUVEO0VBQ0ksMkJBQXlCO0VBQ3pCLDZCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7O3dDQUVvQztFQUNwQyxnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjt5QkFDc0IsRUFFeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksc0NBQXFDLEVBRXhDOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDRyxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzNCOztBQUVEO0VBQ0cscUNBQW9DO0VBQ3BDLHVCQUFzQjtFQUN0QixrQkFBaUIsRUFDbkI7O0FBRUQ7RUFDRyxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzNCOztBQUVEO0VBQ0csdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN0Qzs7QUFFRDtFQUNHLGtDQUFpQztFQUNqQyw0QkFBMkI7RUFDM0IsNEJBQTJCO0VBQzNCLDBCQUF5QixFQUMzQjs7QUFFRDtFQUNJLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixrQ0FBaUM7RUFDakMsNENBQTJDLEVBQzlDOztBQUVEO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUNEO0VBRU8sYUFBWTtFQUNaLGFBQVk7RUFDWix3QkFBdUI7RUFDdkIsMkJBQTBCO0VBQzFCLG1CQUFrQjtFQUVsQixxQ0FBbUM7RUFDbkMseUJBQXdCO0VBQ3hCLGNBQWE7RUFDYiwwQkFBeUI7RUFDekIsb0JBQW1CLEVBQ3pCOztBQUVEO0VBQ0csZUFBYyxFQUNoQjs7QUFFRDtFQUNHLDRCQUEyQjtFQUMzQiwyQkFBMEIsRUFDNUI7O0FBRUQ7RUFDRyxvQ0FBbUMsRUFDckM7O0FBRUQ7RUFDRyxnQ0FBK0IsRUFDakM7O0FBTUQ7RUFDRSx5QkFBd0I7RUFDeEIsMkJBQTBCO0VBQzFCLDBCQUF5QjtFQUN6Qiw0QkFBMkI7RUFDM0IsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0Msc0NBQXFDLEVBQ3JDOztBQUdEO0VBQ0csWUFBVztFQUNYLHlCQUF3QjtFQUN4QixpQkFBZ0I7RUFDaEIsNEJBQTJCO0VBQzNCLHVCQUFzQixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3ByaWNlYm9vay9QcmljZUJvb2svUHJpY2VCb29rLVNlcnZpY2VzL2VkaXQtcHJpY2Vib29rLXNlcnZpY2VzL2VkaXQtcHJpY2Vib29rLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tdGl0bGV7XHJcbiAgICBjb2xvcjogICM1ZGIyZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM1ZGIyZmY7XHJcblxyXG4gICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDhweCAwOyovICAgIFxyXG4gICAgLy8gY29sb3I6ICAjN2UzNzk0O1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG5cclxufVxyXG5cclxuLm1hbmRhdG9yeXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5oci1ncmF5LXRoaWNreyAgICBcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG4uaHItZ3JheXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3ZTM3OTQgIWltcG9ydGFudDtcclxufSBcclxuXHJcbmlucHV0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubW9ja3tcclxuICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9jay1jb25me1xyXG4gICAgY29sb3I6IGdyZWVuOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZ3Jvb3ZlIHtcclxuICAgIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO31cclxuXHJcbi5pbnByb2dyZXNze1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aHJlZS1ib3JkZXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbn1cclxuXHJcbi5jaGVja2JveCwgLnJhZGlvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbC1zbS02IHtcclxuICAgLy8gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIC8vICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyYXl7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4gXHJcbi5idG4tZ3JheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tYmx1ZXsgICAgXHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uLWNlbnRlcntcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uLWxlZnR7XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5idXR0b24tcmlnaHR7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICB9XHJcblxyXG4uYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlLmNvbGxhcHNlZCB7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZTpob3ZlcjphZnRlciB7XHJcbiAgICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JheXsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbXtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBcclxufVxyXG5cclxuLmhlYWRlci10aXRsZXtcclxuICAgIGZvbnQtc2l6ZToxOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6MThweCAhaW1wb3J0YW50O1xyXG59ICAgXHJcbi8qIEJ1dHRvbnMgKi9cclxuLmJ0bntcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxufVxyXG4vKiAvQnV0dG9ucyAqL1xyXG5cclxuLyogTGluZSAqL1xyXG4uaHItYmx1ZXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDEzNCwgMTU4LCAxODApICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogL0xpbmUgKi9cclxuXHJcbi8qIFRleHRib3ggKi9cclxuLmZvcm1jb250cm9sLCBzZWxlY3R7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC9UZXh0Ym94ICovXHJcblxyXG4vKiBBdGtvcmUgbG9nbyAqL1xyXG4udGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQgaW1ne1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7ICBcclxufVxyXG4vKiAvQXRrb3JlIGxvZ28gKi9cclxuXHJcbi8qIExhYmVscyAqL1xyXG4ubGFiZWx7XHJcbiAgICBwYWRkaW5nOjVweCAhaW1wb3J0YW50O1xyXG59XHJcbiAgIFxyXG5sYWJlbCAubWFuZGF0b3J5e1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIC9MYWJlbHMgKi8gXHJcblxyXG4vKiBUYWJsZXMgICAgKi9cclxuLnRhYmxlPnRib2R5PnRyPnRke1xyXG4gICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNTcxNDMgIWltcG9ydGFudDsgXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBcclxufVxyXG4vKiAvVGFibGVzICAgICovXHJcblxyXG4vKiBWZXJ0aWNhbCBUZXh0ICovICBcclxuXHJcbiAgIFxyXG4udGVzdHJvdGF0ZSBwe1xyXG4gICAgbGluZS1oZWlnaHQ6MTQ1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG59XHJcblxyXG4udGVzdHJvdGF0ZSAudGVzdHF7XHJcbiAgICBsaW5lLWhlaWdodDo0ODNweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbn1cclxuXHJcbi50ZXN0cm90YXRlIC50ZXN0cntcclxuICAgIGxpbmUtaGVpZ2h0OjEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxufVxyXG5cclxuLnRlc3Ryb3RhdGUgLnRlc3Rwe1xyXG4gICAgbGluZS1oZWlnaHQ6MTcwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG59XHJcblxyXG4vKiAvVmVydGljYWwgVGV4dCAqLyBcclxuXHJcbi8qIFRleHRib3ggaW5wdXQgKi8gICBcclxuLmlucHV0IC5mb3JtY29udHJvbHtcclxuICAgIHdpZHRoOjUwcHggIWltcG9ydGFudDsgXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbn1cclxuLyogL1RleHRib3ggaW5wdXQgKi9cclxuICAgXHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAvLyAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIC8vICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4gICBcclxuLmZvcm0tY29udHJvbHtcclxuICAgIHBhZGRpbmc6NHB4IDNweCAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG5iYWNrZ3JvdW5kOiAjRjJGMkYyO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBjb2xvcjogYmxhY2s7XHJcblxyXG59XHJcblxyXG4vKiBQaW4gR2FwIERpYWdyYW0gKi8gICBcclxuLnJvdyAucGluIGltZ3tcclxuICAgIHdpZHRoOjIzMHB4O1xyXG4gICAgaGVpZ2h0OjI0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MzBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG8gIWltcG9ydGFudDsgXHJcbn1cclxuLyogL1BpbiBHYXAgRGlhZ3JhbSAqLyBcclxuXHJcbi5nYXB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4vKiBCb2x0IHRvcnF1ZSBzcGVjaWZpY2F0aW9ucyAqLyAgIFxyXG4uYWRqdXN0e1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogL0JvbHQgdG9ycXVlIHNwZWNpZmljYXRpb25zICovXHJcblxyXG4vKiBJbWFnZXVwbG9hZCAgICAqL1xyXG50ZCAuaW1nLWFkanVzdHtcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDphdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogL0ltYWdldXBsb2FkICAgICovICBcclxuXHJcbiAgXHJcbi5hbGVydC1oZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYWxpZ24tdGV4dC10b3B7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7IFxyXG59XHJcblxyXG4udGV4dC1iaWd7XHJcbiAgICBmb250LXNpemU6MTZweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtLXRpdGxleyAgICBcclxuICAgIGNvbG9yOiAgIzVkYjJmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuXHJcbiAgICAvKmRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM3ZTM3OTQ7Ki9cclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAvKiAgY29sb3I6ICM1REIyRkY7XHJcbiAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuXHJcbn1cclxuXHJcbi5tYW5kYXRvcnl7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaHItZ3JheS10aGlja3sgICAgXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuLmhyLWdyYXl7ICAgIFxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG5pbnB1dHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1vY2t7XHJcbiAgICBjb2xvcjogcmVkOyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1vY2stY29uZntcclxuICAgIGNvbG9yOiBncmVlbjsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnByb2dyZXNze1xyXG4gICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aHJlZS1ib3JkZXJlZHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyYXl7ICAgIFxyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibHVleyAgICBcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJ0bi1ncmF5e1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tYmx1ZXsgICAgXHJcbiAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtYm9keSB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlZWU7XHJcbiAgIGNvbG9yOiAjMjYyNjI2ICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG4uYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlOmhvdmVyOmFmdGVyIHtcclxuICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUge1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG4uaWNvbjEgXHJcbntcclxuICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xyXG4gICAgICAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XHJcbiAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhZmFmO1xyXG4gICAgICAgZm9udDogNDAwIDE2cHgvMS40J1NvdXJjZSBDb2RlIFBybyc7XHJcbiAgICAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgIzEwMzY4MztcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWJsdWV7XHJcbiAgIGNvbG9yOiAjNWRiMmZmO1xyXG59XHJcblxyXG4uYnRuLXhzLXR3b3sgXHJcbiAgIHBhZGRpbmc6IDJweCA3cHggIWltcG9ydGFudDsgIFxyXG4gICBtYXJnaW46IDJweCAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ud2VsbC53aXRoLWZvb3RlciB7XHJcbiAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gLmJvcmRlciB7XHJcbiBcclxuLy8gICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4vLyAgICBvdXRsaW5lOiBub25lO1xyXG4vLyB9XHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4udGFibGUtc2Nyb2xsYWJsZSB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcclxuICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/edit-pricebook-services/edit-pricebook-services.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/edit-pricebook-services/edit-pricebook-services.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: EditPricebookServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPricebookServicesComponent", function() { return EditPricebookServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EditPricebookServicesComponent = /** @class */ (function () {
    function EditPricebookServicesComponent(beyond, router, formBuilder, activatedRoute, route, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.name = 'Angular 4';
        this.id = "test";
        this.urls = [];
        this.imagePreview = "assets/img/no-image.png";
        this.imagePreviewDocument = "assets/img/no-image.png";
        this.dropDown = false;
        this.subTotalLR = 0;
        this.totalCost = 0;
        this.listPriceInventory = 0;
        this.packageStandardValue = 0;
        this.finalStandardValue = 0;
        this.finalValueData = 0;
        this.finalMemberValue = 0;
        this.priceBookListInventoryDetails = [];
        this.selectedInventory = [];
        this.inventoryTemp = [];
        this.galleryImages = [];
        this.filesToUpload = [];
        this.imageArray = [];
        this.progressShow1 = false;
        this.progressHide1 = false;
        this.img1 = false;
        this.percentage1 = 0;
        this.taxPercentage = [];
        this.totalmaterialPrice = 0;
        this.arr = [];
        this.chosseTypecount = 0;
        this.result = [];
        this.imageNameData = [];
        this.newArray = [];
        this.orginalArray = [];
        this.imageName = [];
        this.imageNames = [];
        this.imageValue = [];
        this.newArrayValues = [];
        this.arrayValues = [];
        this.Array = [];
        this.removedImageArray = [];
        this.uploadImages = [];
        this.totalCostNew = 0;
        this.viewResponse = [];
        this.qty = 0;
        this.displyFlag = false;
        this.uploadFlag = false;
        this.listPriceData = 0;
    }
    EditPricebookServicesComponent.prototype.ngOnInit = function () {
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proCode = this.loginData.loginCode;
        this.proemailId = this.loginData.emailId;
        this.serviceIdData = this.route.snapshot.params['serviceId'];
        this.viewPriceBookService();
        this.getinventory();
        this.getProCategories();
        this.beyond.beyondAdmin();
        this.getInventoryList();
        this.accountType();
        this.editPriceBook1 = this.formBuilder.group({
            // residential: ['', Validators.required],
            serviceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            category: ['Plumbing', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            categoryCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            subcatogryCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            subCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            materialCost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            truckOperatingCost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            leadCost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            totalCost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            taxPercentage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            taxValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            totalmaterialPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            time: ['0', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            laborRate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            laborCost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            standard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            member: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            picture: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            document: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            instructions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            serviceDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.editPriceBookInventory = this.formBuilder.group({
            item: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            manufacturer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            listPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            subTotal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.editPriceBookInventory = this.formBuilder.group({
            fromPriceBookValues: this.formBuilder.array([this.createPriceBookInfo()])
        });
        this.inventory = [{ "item": "", "type": "", "description": "", "manufacturer": "", "model": "", "name": "", "quantity": "", "listPrice": "", "subtotal": "" }];
        this.addPriceBookLabor = this.formBuilder.group({
            fromPriceBookLabor: this.formBuilder.array([this.createPriceBookLabor()])
        });
        this.labor = [{ "item1": "", "description1": "", "type1": "", "qty1": "", "units1": "", "listPrice1": "", "subtotal1": "" }];
    };
    EditPricebookServicesComponent.prototype.onSelectFile = function (fileInput) {
        var _this = this;
        this.progressShow1 = false;
        this.progressHide1 = false;
        this.imageArray = [];
        this.uniqueArray = [];
        this.progressHide1 = false;
        this.filesToUpload = [];
        if (fileInput.target.files.length == 1) {
            this.filesToUpload.push(fileInput.target.files[0]);
        }
        else {
            for (var i = 0; i < fileInput.target.files.length; i++) {
                this.filesToUpload.push(fileInput.target.files[i]);
            }
        }
        var filesAmount = fileInput.target.files.length;
        for (var i_1 = 0; i_1 < filesAmount; i_1++) {
            var reader = new FileReader();
            reader.onload = function (fileInput) {
                _this.urls.push(fileInput.target.result);
                _this.imageuploadstatus = true;
            };
            reader.readAsDataURL(fileInput.target.files[i_1]);
        }
        this.uploadData();
    };
    EditPricebookServicesComponent.prototype.uploadData = function () {
        var _this = this;
        var files = this.filesToUpload;
        this.formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            this.formData.append("fileImage", files[i]);
        }
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/multiData', this.formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) {
            for (var i = 0; i < files.imagePath.length; i++) {
                _this.newArray.push(files.imagePath[i]);
            }
            _this.uploadFlag = true;
            _this.displyFlag = false;
            _this.uniqueArray = Array.from(new Set(_this.newArray));
            _this.chosseTypecount = _this.uniqueArray.length;
            _this.imageNames = Object.keys(_this.uniqueArray).map(function (key) { return ({ type: key, image: _this.uniqueArray[key] }); });
            _this.arr = Object.keys(_this.uniqueArray).map(function (key) { return ({ type: key, name: _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/" + _this.uniqueArray[key] }); });
        });
    };
    EditPricebookServicesComponent.prototype.removeSelectedFile = function (i) {
        this.arr.splice(i, 1);
        this.imageNames.splice(i, 1);
        this.uniqueArray = [];
        for (var p = 0; p < this.arr.length; p++) {
            this.value = this.arr[p].name;
            this.uniqueArray.push(this.arr[p].name.substring(25, 50));
            this.newArray = this.uniqueArray;
            this.imageArray = this.uniqueArray;
            if (this.uniqueArray.length == 0) {
                this.chosseTypecount = 0;
            }
            else {
                this.chosseTypecount = this.uniqueArray.length;
            }
        }
    };
    EditPricebookServicesComponent.prototype.createPriceBookInfo = function () {
        return this.formBuilder.group({
            item: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            manufacturer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            listPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            subtotal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    };
    EditPricebookServicesComponent.prototype.labourRates = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/listPBLaborrate/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var labourRates = data.json();
            if (labourRates.status == 200) {
                _this.labourList = labourRates.response;
                for (var i = 0; i < _this.labourList.length; i++) {
                    _this.labourList[i].subTotal = _this.labourList[i].listPrice * _this.labourList[i].unitCost;
                }
                _this.labourStatus = true;
            }
            else {
                _this.labourStatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    EditPricebookServicesComponent.prototype.addFieldValue = function () {
        this.inventory.push({ "item": "", "type": "", "description": "", "manufacturer": "", "model": "", "name": "", "qty": "", "listPrice": "", "subtotal": "" });
        // this.items = this.addPriceBookService.get('fromPriceBookValues') as FormArray;
        // this.items.push(this.createPriceBookInfo());
        // // this.checkValidationAddress()
    };
    Object.defineProperty(EditPricebookServicesComponent.prototype, "addressInfoValues", {
        get: function () {
            return this.editPriceBookInventory.get('fromPriceBookValues');
        },
        enumerable: true,
        configurable: true
    });
    EditPricebookServicesComponent.prototype.deleteFieldValue = function (data) {
        this.inventory = this.inventory.filter(function (value) { return value !== data; });
        if (this.inventory.status == 200) {
        }
        else {
            // this.toastr.error('Product row is deleted Successfully');
        }
    };
    EditPricebookServicesComponent.prototype.createPriceBookLabor = function () {
        return this.formBuilder.group({
            item1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            description1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            type1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            qty1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            units1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            listPrice1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            subtotal1: ['$158.00', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    };
    EditPricebookServicesComponent.prototype.addFieldValueLabor = function () {
        this.labor.push({ "item1": "", "description1": "", "type1": "", "qty1": "", "units1": "", "listPrice1": "", "subtotal1": "" });
        // this.items = this.addPriceBookService.get('fromPriceBookValues') as FormArray;
        // this.items.push(this.createPriceBookInfo());
        // // this.checkValidationAddress()
    };
    Object.defineProperty(EditPricebookServicesComponent.prototype, "addressInfoValuesLabor", {
        get: function () {
            return this.addPriceBookLabor.get('fromPriceBookLabor');
        },
        enumerable: true,
        configurable: true
    });
    // deleteFieldValue(index: number) {
    //   this.addressInfoValues.removeAt(index);
    //   // this.checkValidationAddress()
    // }
    EditPricebookServicesComponent.prototype.deleteFieldValueLabor = function (data1) {
        this.labor = this.labor.filter(function (value) { return value !== data1; });
        if (this.labor.status == 200) {
        }
        else {
            // this.toastr.error('Product row is deleted Successfully');
        }
    };
    Object.defineProperty(EditPricebookServicesComponent.prototype, "f", {
        get: function () {
            return this.editPriceBook1.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditPricebookServicesComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (!this.editPriceBook1.value.subcatogryCode ||
            !this.editPriceBook1.value.categoryCode ||
            !this.editPriceBook1.value.description) {
        }
        else {
            this.updatePriceBook();
        }
    };
    EditPricebookServicesComponent.prototype.updatePriceBook = function () {
        var _this = this;
        if (this.filesToUpload.length > 0 && this.uploadFlag == true) {
            this.displyFlag = true;
            alert(" Please upload the files");
            return false;
        }
        var obj = {
            "proId": this.proCode,
            "serviceId": this.editPriceBook1.value.serviceId,
            "category": '' + this.editPriceBook1.value.category,
            "subCategory": '' + this.editPriceBook1.value.subCategory,
            "description": this.editPriceBook1.value.description,
            "materialCost": this.listPriceInventory,
            "taxPercentage": 0,
            "taxValue": 0,
            "totalmaterialPrice": this.taxvalueData,
            "truckOperatingCost": this.editPriceBook1.value.truckOperatingCost,
            "leadCost": this.editPriceBook1.value.leadCost,
            "totalCost": this.totalCostNew,
            "time": this.laborHour,
            "laborRate": this.editPriceBook1.value.laborRate,
            "laborCost": this.subTotalLR,
            "standard": this.finalStandardValue,
            "value": this.finalValueData,
            "member": this.finalMemberValue,
            "picture": this.uniqueArray == undefined ? '' : this.uniqueArray,
            "document": "" + _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].documentName,
            "instructions": this.editPriceBook1.value.instructions,
            "serviceDescription": this.editPriceBook1.value.serviceDescription,
            "fromPriceBookValues": this.priceBookListInventoryDetails,
            "modifiedBy": "" + this.proemailId,
            "modifiedOn": new Date(),
        };
        if (obj.document == "") {
            var obj_1 = {
                "proId": this.proCode,
                "serviceId": this.editPriceBook1.value.serviceId,
                "category": '' + this.editPriceBook1.value.category,
                "subCategory": '' + this.editPriceBook1.value.subCategory,
                "description": this.editPriceBook1.value.description,
                "materialCost": this.listPriceInventory,
                "taxPercentage": 0,
                "taxValue": 0,
                "totalmaterialPrice": this.taxvalueData,
                "truckOperatingCost": this.editPriceBook1.value.truckOperatingCost,
                "leadCost": this.editPriceBook1.value.leadCost,
                "totalCost": this.totalCostNew,
                "time": this.laborHour,
                "laborRate": this.editPriceBook1.value.laborRate,
                "laborCost": this.subTotalLR,
                "standard": this.finalStandardValue,
                "value": this.finalValueData,
                "member": this.finalMemberValue,
                "picture": this.uniqueArray == undefined ? '' : this.uniqueArray,
                "document": "" + this.documentLink,
                "instructions": this.editPriceBook1.value.instructions,
                "serviceDescription": this.editPriceBook1.value.serviceDescription,
                "fromPriceBookValues": this.priceBookListInventoryDetails,
                "modifiedBy": "" + this.proemailId,
                "modifiedOn": new Date(),
            };
            console.log("edit data obj" + JSON.stringify(obj_1));
            this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/updatepriceBook', obj_1)
                .subscribe(function (data) {
                var pricebookData = data.json();
                if (pricebookData.status == 200) {
                    _this.toastr.success('Price Book data Updated Successfuly...');
                    _this.router.navigate(['/pricebook/listPriceBook']);
                }
                else {
                    _this.toastr.warning("Failed to Update");
                }
            }, function (error) {
            });
        }
        else {
            var obj_2 = {
                "proId": this.proCode,
                "serviceId": this.editPriceBook1.value.serviceId,
                "categoryCode": '' + this.editPriceBook1.value.categoryCode,
                "category": '' + this.editPriceBook1.value.category,
                "subCategory": '' + this.editPriceBook1.value.subCategory,
                "description": this.editPriceBook1.value.description,
                "materialCost": this.listPriceInventory,
                "taxPercentage": 0,
                "taxValue": 0,
                "totalmaterialPrice": this.taxvalueData,
                "truckOperatingCost": this.editPriceBook1.value.truckOperatingCost,
                "leadCost": this.editPriceBook1.value.leadCost,
                "totalCost": this.totalCostNew,
                "time": this.laborHour,
                "laborRate": this.editPriceBook1.value.laborRate,
                "laborCost": this.subTotalLR,
                "standard": this.finalStandardValue,
                "value": this.finalValueData,
                "member": this.finalMemberValue,
                "picture": this.uniqueArray == undefined ? '' : this.uniqueArray,
                "document": "" + _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].documentName,
                "instructions": this.editPriceBook1.value.instructions,
                "serviceDescription": this.editPriceBook1.value.serviceDescription,
                "fromPriceBookValues": this.priceBookListInventoryDetails,
                "modifiedBy": "" + this.proemailId,
                "modifiedOn": new Date(),
            };
            console.log("edit data obj222" + JSON.stringify(obj_2));
            this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/updatepriceBook', obj_2)
                .subscribe(function (data) {
                var pricebookData = data.json();
                if (pricebookData.status == 200) {
                    _this.toastr.success('consumable data Updated Successfuly...');
                    _this.router.navigate(['/pricebook/listPriceBook']);
                }
                else {
                    _this.toastr.warning("Failed to Update");
                }
            }, function (error) {
            });
        }
    };
    EditPricebookServicesComponent.prototype.cancelPriceBook = function () {
        this.router.navigate(['/pricebook/listPriceBook']);
    };
    /* Add Labor - Popup */
    EditPricebookServicesComponent.prototype.newLabourRate = function () {
        this.router.navigate(['/pricebook/addLaborRate']);
    };
    EditPricebookServicesComponent.prototype.saveSelectedLabor = function () {
        this.router.navigate(['/pricebook/editPriceBook']);
    };
    EditPricebookServicesComponent.prototype.cancelSelectedLabor = function () {
        this.router.navigate(['/pricebook/editPriceBook']);
    };
    /* /Add Labor - Popup */
    /* Add Inventory - Popup */
    EditPricebookServicesComponent.prototype.newInventory = function () {
        this.router.navigate(['/pricebook/addInventory']);
    };
    EditPricebookServicesComponent.prototype.selectServiceFromList = function (data) {
        var _this = this;
        if (data.selectedService === true) {
            this.priceBookListInventoryDetails.push(data);
            for (var i = 0; i < this.priceBookListInventoryDetails.length; i++) {
                this.priceBookListInventoryDetails[i].item = i + 1;
                this.priceBookListInventoryDetails[i].subTotal = 0;
            }
        }
        else {
            this.priceBookListInventoryDetails = this.priceBookListInventoryDetails.filter(function (value) { return value.selectedService == true; });
            this.priceBookListInventoryDetails.forEach(function (e) {
                _this.inventoryTemp.push(e);
            });
        }
    };
    EditPricebookServicesComponent.prototype.saveSelectedInventory = function () {
        this.listPriceInventory = 0;
        for (var i = 0; i < this.selectedInventory.length; i++) {
            this.listPriceInventory = this.listPriceInventory + parseInt(this.selectedInventory[i].subTotal);
            this.getFinalValue();
        }
    };
    EditPricebookServicesComponent.prototype.getQuantity = function (qty) {
        this.listPriceInventory = 0;
        qty.subTotal = qty.quantity * qty.listPrice;
        for (var i = 0; i < this.priceBookListInventoryDetails.length; i++) {
            this.listPriceInventory = this.listPriceInventory + parseInt(this.priceBookListInventoryDetails[i].subTotal);
            this.getFinalValue();
        }
    };
    EditPricebookServicesComponent.prototype.getFinalValue = function () {
        this.taxPercentage = this.taxPercentage;
        this.taxValue = this.listPriceInventory * this.taxPercentage / 100;
        for (var i = 0; i < this.taxPercentage.length; i++) {
            this.taxvalueData = this.listPriceInventory * this.taxPercentage[i] / 100;
        }
        // this.totalmaterialPrice = this.listPriceInventory + parseInt(this.taxvalueData)
        this.totalCostNew = this.listPriceInventory + parseInt(this.editPriceBook1.value.leadCost) + parseInt(this.editPriceBook1.value.truckOperatingCost) + parseInt(this.editPriceBook1.value.laborCost);
        this.packageStandardValue = this.acctype[0].exceptedNetProfit;
        this.percentStandardValue = this.totalCostNew * this.packageStandardValue / 100;
        this.finalStandardValue = parseInt(this.totalCostNew) + this.percentStandardValue;
        this.packageValueData = this.acctype[1].exceptedNetProfit;
        this.percentValueData = this.totalCostNew * this.packageValueData / 100;
        this.finalValueData = parseInt(this.totalCostNew) + this.percentValueData;
        this.packageMemberValue = this.acctype[2].exceptedNetProfit;
        this.percentMemberValue = this.totalCostNew * this.packageMemberValue / 100;
        this.finalMemberValue = parseInt(this.totalCostNew) + this.percentMemberValue;
    };
    EditPricebookServicesComponent.prototype.cancelSelectedInventory = function () {
        $("#myInventory").modal("hide");
        this.router.navigate(['/pricebook/editPriceBook']);
    };
    /* /Add Inventory - Popup */
    EditPricebookServicesComponent.prototype.editData = function (x) {
        this.laborHour = x.time;
        this.qty = x.time;
        this.finalMemberValue = x.member;
        this.listPriceInventory = x.materialCost;
        this.editPriceBook1 = this.formBuilder.group({
            proId: [x.proId, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            serviceId: [x.serviceId, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            category: [x.category, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            categoryCode: [x.categoryCode, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            subcatogryCode: [x.subcatogryCode, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            subCategory: [x.subCategory, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            description: [x.description, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            materialCost: [x.materialCost, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            truckOperatingCost: [x.truckOperatingCost, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            leadCost: [x.leadCost, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            totalCost: [x.totalCost, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            taxPercentage: [x.taxPercentage, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            taxValue: [x.taxValue, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            totalmaterialPrice: [x.totalmaterialPrice, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            time: [x.time, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            laborRate: [x.laborRate, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            laborCost: [x.laborCost, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            standard: [x.standard, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            value: [x.value, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            member: [x.member, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            instructions: [x.instructions, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            serviceDescription: [x.serviceDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            listPrice: [x.listPrice, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            document: [x.document, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.nofileData = true;
        this.documentLink = x.document;
    };
    EditPricebookServicesComponent.prototype.viewPriceBookService = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/viewPriceBook' + '/' + this.serviceIdData, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.priceBookListDetails = response.response[0];
                _this.priceBookServiceResponse = true;
                _this.editData(_this.priceBookListDetails);
                _this.changeCategory(response.response[0].category);
                _this.priceBookCategory = response.response[0].category;
                _this.priceBookTitle = response.response[0].title;
                _this.totalCostNew = response.response[0].totalCost;
                _this.subTotalLR = response.response[0].laborCost;
                _this.urls = _this.priceBookListDetails.picture.split(',');
                if (_this.priceBookListDetails.picture == "" || _this.priceBookListDetails.picture == null || _this.priceBookListDetails.picture == undefined || _this.priceBookListDetails.picture == "undefined") {
                    _this.imagePreview = '../../assets/img/no-image.png';
                    var index = _this.imagePreview.indexOf(_this.imagePreview);
                    _this.removeSelectedFile(index);
                }
                else {
                    for (var i = 0; i < _this.urls.length; i++) {
                        _this.chosseTypecount = _this.urls.length;
                        _this.imageArray.push(_this.urls[i]);
                        _this.imageNames.push({ image: _this.urls[i] });
                        _this.arrayValues.push(_this.urls[i]);
                        _this.imagePreview = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/" + _this.urls[i];
                        _this.arr.push({ name: _this.imagePreview });
                        _this.newArray = _this.arrayValues;
                        _this.uniqueArray = _this.arrayValues;
                    }
                    _this.fileName = _this.imageArray.length;
                }
            }
            else {
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
            });
        });
    };
    EditPricebookServicesComponent.prototype.changeCategory = function (x) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/PBSubcategoryData/' + this.loginData.loginCode + "/" + x, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.subCategoryServices = response.response;
                // this.getCategoryName(x)
                return false;
            }
            else {
                _this.toastr.warning("No Records Found");
            }
        }, function (error) {
            _this.toastr.warning("Unable to connect to server");
        });
    };
    /*  pro specific Catgeroy  Names  */
    EditPricebookServicesComponent.prototype.proCatNames = function (x) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/proPricebookCatNames/' + x, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.proCatNameData = response.response;
                return false;
            }
            else {
                _this.toastr.warning("No Records Found proCatNames");
            }
        }, function (error) {
            _this.toastr.warning("Unable to connect to server");
        });
    };
    /* --/ pro specific Catgeroy  Names  */
    EditPricebookServicesComponent.prototype.prosubCatNames = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/proPricebookSubNames/' + this.editPriceBook1.value.subcatogryCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.proCatNameData = response.response;
                return false;
            }
            else {
                // this.toastr.warning("No Records Found prosubCatNames")
            }
        }, function (error) {
            // this.toastr.warning("Unable to connect to server")
        });
    };
    EditPricebookServicesComponent.prototype.getinventory = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/viewinvDatapb' + '/' + this.serviceIdData, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.priceBookListInventoryDetails = response.response;
                _this.inventoryListResponse = true;
            }
            else {
                _this.inventoryListResponse = false;
            }
            (function (error) {
            });
        });
    };
    EditPricebookServicesComponent.prototype.getInventoryList = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/listOfInventory' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.inventoryListDetails = response.response;
                for (var i = 0; i < _this.inventoryListDetails.length; i++) {
                    _this.inventoryListDetails[i].subTotal = _this.inventoryListDetails[i].listPrice * _this.inventoryListDetails[i].quantity;
                }
                _this.inventoryListResponse = true;
            }
            else {
                _this.inventoryListResponse = false;
            }
            (function (error) {
            });
        });
    };
    EditPricebookServicesComponent.prototype.accountType = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/listPBPackageName/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var accountType = data.json();
            if (accountType.status == 200) {
                _this.acctype = accountType.response;
                _this.account = true;
                return false;
            }
            else {
                _this.account = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    EditPricebookServicesComponent.prototype.getHours = function (hour) {
        this.laborHour = hour;
        this.subTotalL = this.editPriceBook1.value.laborRate * this.laborHour;
        this.subTotalLR = this.subTotalL.toFixed(2);
        this.listPriceData = this.listPriceInventory;
        this.totalC = parseInt(this.listPriceData) + parseInt(this.subTotalLR) + parseInt(this.editPriceBook1.value.truckOperatingCost) + parseInt(this.editPriceBook1.value.leadCost);
        this.totalCostNew = this.totalC.toFixed(2);
        this.packageStandardValue = this.acctype[0].exceptedNetProfit;
        this.percentStandardValue = this.totalCostNew * this.packageStandardValue / 100;
        this.finalStandardValue = parseInt(this.totalCostNew) + this.percentStandardValue;
        this.packageValueData = this.acctype[1].exceptedNetProfit;
        this.percentValueData = this.totalCostNew * this.packageValueData / 100;
        this.finalValueData = parseInt(this.totalCostNew) + this.percentValueData;
        this.packageMemberValue = this.acctype[2].exceptedNetProfit;
        this.percentMemberValue = this.totalCostNew * this.packageMemberValue / 100;
        this.finalMemberValue = parseInt(this.totalCostNew) + this.percentMemberValue;
    };
    // MULTIPLE IMAGE UPLOAD START
    EditPricebookServicesComponent.prototype.upload = function () {
        var _this = this;
        var files = this.filesToUpload;
        this.formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            this.formData.append("fileImage", files[i]);
        }
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/multiData', this.formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) {
            _this.imageArray = [];
            for (var i = 0; i < files.imagePath.length; i++) {
                _this.Array.push(files.imagePath[i]);
                _this.uploadImages = _this.Array.concat(_this.arrayValues, _this.removedImageArray);
                _this.imageArray = Array.from(new Set(_this.uploadImages));
            }
            _this.uploadFlag = false;
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
    //document UPLOAD FOR Document
    EditPricebookServicesComponent.prototype.handleImageDocument = function (file) {
        var _this = this;
        var picReader = new FileReader();
        picReader.onload = function (e) {
            var reader = e.target;
            _this.imagePreviewDocument = reader.result;
        };
        picReader.readAsDataURL(file);
    };
    EditPricebookServicesComponent.prototype.selectDocument = function (event) {
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            if (event.target.files[0].type === "application/pdf") {
                var file = event.target.files[0];
                this.img1 = true;
                this.progressShow1 = false;
                this.progressHide1 = false;
                this.file2Upload1 = event.target.files[0];
                this.handleImageDocument(file);
            }
            else {
                event.target.value = "";
                alert("Please Select PDF");
                this.img1 = false;
                this.progressShow1 = false;
                this.progressHide1 = false;
            }
        }
        else {
            this.img1 = false;
            this.progressShow1 = false;
            this.progressHide1 = false;
            this.imagePreviewDocument = "../../assets/img/no-image.png";
        }
    };
    EditPricebookServicesComponent.prototype.fileUploadDocument = function () {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/imageUploadData";
        var formData = new FormData();
        var xhr = new XMLHttpRequest();
        formData.append("image", this.file2Upload1);
        var config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        xhr.open("post", url, true);
        xhr.upload.onprogress = function (e) {
            if (e.lengthComputable) {
                _this.percentage1 = (e.loaded / e.total) * 100;
                _this.progressShow1 = true;
                _this.progressHide1 = false;
                if (_this.percentage1 === 100) {
                    _this.progressShow1 = false;
                    _this.progressHide1 = true;
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
        };
        xhr.send(formData);
    };
    //document UPLOAD
    EditPricebookServicesComponent.prototype.selectdoc = function (event) {
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            this.file = file;
            if (this.file = '') {
                this.nofileData = true;
            }
            if (this.file != '') {
                this.withfileData = true;
            }
            this.showImagePreview(file);
        }
    };
    /*To show image preview*/
    EditPricebookServicesComponent.prototype.showImagePreview = function (file) {
        var _this = this;
        var picReader = new FileReader();
        picReader.onload = function (e) {
            _this.imagePreview = e.target.result;
        };
        picReader.readAsDataURL(file);
    };
    EditPricebookServicesComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    EditPricebookServicesComponent.prototype.list = function () {
        this.router.navigate(['/pricebook/listPriceBook']);
    };
    /* pro specific Categories */
    EditPricebookServicesComponent.prototype.getProCategories = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/proPricebookCategories/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var proCategories = data.json();
            if (proCategories.status == 200) {
                _this.proCategoryList = proCategories.response;
                _this.proCategoryStatus = true;
            }
            else {
                _this.labourStatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    EditPricebookServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-edit-pricebook-services',
            template: __webpack_require__(/*! ./edit-pricebook-services.component.html */ "./src/app/pricebook/PriceBook/PriceBook-Services/edit-pricebook-services/edit-pricebook-services.component.html"),
            styles: [__webpack_require__(/*! ./edit-pricebook-services.component.scss */ "./src/app/pricebook/PriceBook/PriceBook-Services/edit-pricebook-services/edit-pricebook-services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], EditPricebookServicesComponent);
    return EditPricebookServicesComponent;
}());



/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/list-pricebook-services/list-pricebook-services.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/list-pricebook-services/list-pricebook-services.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home</a>\r\n      </li>\r\n      <li> <a>PriceBook</a></li>\r\n      <li> <a>PriceBook Services</a></li>\r\n      <li class=\"active\">List of PriceBook Services</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        List of PriceBook Services\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n  <br>\r\n  <!-- Price Book Excel -->\r\n  <div class=\"row\" class=\"pull-right dropdown\">\r\n    <div class=\"span11\">\r\n      <!-- BEGIN PAGE TITLE & BREADCRUMB-->\r\n      <!--Import & Export-->\r\n      <!-- <li class=\"pull-right dropdown\"> -->\r\n      <button class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\" (click)=\"exportAsXLSX()\">\r\n        <img src=\"../../assets/img/excel-export2.png\" style=\"height:25px;width:25px;\" alt=\"\">\r\n        <span class=\"username\">Excel Export</span>\r\n        <b class=\"caret\"></b>\r\n      </button> &nbsp;&nbsp;\r\n      <button class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" (click)=\"openImport()\">\r\n        <img src=\"../../assets/img/export-excel.png\" style=\"height:25px;width:25px;\" alt=\"\">\r\n        <span class=\"username\">Excel Import</span>\r\n        <b class=\"caret\"></b>\r\n      </button>\r\n      <!-- </li> -->\r\n      <div class=\"backdrop\" [ngStyle]=\"{'display':displayFileModal}\"></div>\r\n      <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayFileModal}\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"alert alert-block alert-info modal-header \">\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeImport()\">\r\n                <span aria-hidden=\"true\" style=\"margin-right: 0.5em\">&times;</span>\r\n              </button>\r\n              <h4 class=\"modal-title\">Import List of PriceBook Services\r\n              </h4>\r\n            </div>\r\n            <div classs=\"modal-body\" style=\"margin-left:1em\">\r\n              <span style=\"color:red\"> <b> CAUTION : The current price book entries will be REPLACED/ OVERWRITTEN by\r\n                  newly imported content. Continue ?</b></span>\r\n              <br>\r\n              <br>\r\n              <input type=\"file\" (change)=\"select($event)\">\r\n              <br>\r\n              <!-- <span *ngIf=\"excelError\" style=\"color:red\"> <b>WARNING : This will overwrite your existing data. Do you want to Continue ?</b></span> -->\r\n              <span *ngIf=\"excelfile\" style=\"color:red\"> <b>Please Select an Excel FILE</b></span>\r\n              <div *ngIf=\"progressShow\" class=\"progress-bar1 blue stripes\">\r\n                <span [style.width.%]=\"percentage\">\r\n                  <p style=\"text-align: center;color:black;font-size:18px;\">{{percentage}}%</p>\r\n                </span>\r\n              </div>\r\n              <br>\r\n              <div *ngIf=\"progressHide\" class=\"alert alert-success\" style=\"height:5px;margin-right:1em\">\r\n                <h4 class=\"alert-heading\" style=\"margin-top:-5px;text-align:center;\">File Uploaded Successfully</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-small btn-success\" (click)=\"checking()\">YES</button>\r\n              <button type=\"button\" class=\"btn btn-small btn-danger\" (click)=\"closeImport()\">NO</button>\r\n            </div>\r\n          </div>\r\n          <!-- /.modal-content -->\r\n        </div>\r\n        <!-- /.modal-dialog -->\r\n      </div>\r\n      <br>\r\n\r\n      <!--Import & Export-->\r\n      <!-- END PAGE TITLE & BREADCRUMB-->\r\n    </div>\r\n  </div>\r\n  <!-- Price Book Excel -->\r\n\r\n  <div class=\"page-body\">\r\n\r\n    <!-- Search By -->\r\n    <!-- Search By -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"widget three-bordered\">\r\n          <div class=\"widget-header header gray\">\r\n            <span class=\"widget-caption\">Search PriceBook Services By</span>\r\n          </div>\r\n          <div class=\"widget-body\">\r\n            <form [formGroup]=\"searchPriceBookServices\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"searchByLbl\">\r\n                      <b>Search By</b>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    <select class=\"form-control\" formControlName=\"searchBy\" [(ngModel)]=\"chooseSearchBy\"\r\n                      (ngModelChange)=\"PriceSearchSelection(chooseSearchBy)\">\r\n                      <option value=\"\">--Search By--</option>\r\n                      <option value=\"serviceIdData\">Service ID</option>\r\n                      <option value=\"category\">Main Category</option>\r\n                      <option value=\"subCategory\">Sub Category</option>\r\n                      <option value=\"title\">Title</option>\r\n                      <!-- <option   value=\"status\">Active</option> -->\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"serviceIdData\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control date-picker\" type=\"text\" formControlName=\"serviceId\">\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-sm-3\" *ngIf=\"category\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control date-picker\" type=\"text\" formControlName=\"category\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"subCategory\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control date-picker\" type=\"text\" formControlName=\"subCategory\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-sm-3\" *ngIf=\"title\">\r\n                  <div class=\"form-group\">\r\n                    <input class=\"form-control date-picker\" type=\"text\" formControlName=\"description\">\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"col-sm-3\" *ngIf=\"staus\">\r\n                              <div class=\"form-group\">\r\n                                <input class=\"form-control date-picker\" type=\"text\" formControlName=\"status\">\r\n                              </div>\r\n                            </div> -->\r\n\r\n                <div class=\"col-sm-3\">\r\n                  <div class=\"form-group\">\r\n                    &nbsp;&nbsp;&nbsp;&nbsp; <button type=\"submit\" class=\"btn btn-blue\" (click)=\"priceBookSearch()\"><i\r\n                        class=\"fa fa-search\"></i>&nbsp;\r\n                      Search</button>\r\n                    &nbsp;&nbsp;&nbsp;&nbsp;\r\n                    <button type=\"submit\" class=\"btn btn-gray\" (click)=\"reset()\"><i class=\"fa fa-repeat\"></i>&nbsp;\r\n                      Reset</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </form>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"searchByLbl\">\r\n                    <b>Choose Columns To Display On List</b>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"col-sm-2\">\r\n                    <div class=\"form-group\">\r\n                        <label>\r\n                        \r\n                          <input type=\"checkbox\"   class=\"colored-success\" checked=\"checked\" [value]=\"true\"\r\n                          (change)=\"serviceIdChecking(serviceIds)\" [(ngModel)]=\"serviceIds\"\r\n                          [ngModelOptions]=\"{standalone: true}\"> \r\n                          <span clas>Service ID </span>\r\n                        </label>\r\n                    </div>\r\n                  </div> -->\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\"\r\n                      (change)=\"serviceIdChecking(serviceIds)\" [(ngModel)]=\"serviceIds\"\r\n                      [ngModelOptions]=\"{standalone: true}\">\r\n                    <span class=\"text\">ServiceID </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\"\r\n                      (change)=\"mainCategoryChecking(mainCategory)\" [(ngModel)]=\"mainCategory\"\r\n                      [ngModelOptions]=\"{standalone: true}\">\r\n                    <span class=\"text\">Main Category </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\"\r\n                      (change)=\"subCategoryChanges(subCategorys)\" [(ngModel)]=\"subCategorys\"\r\n                      [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Sub-Category </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <!-- </div>\r\n                <div class=\"row\"> -->\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\" (change)=\"titleChange(titles)\"\r\n                      [(ngModel)]=\"titles\" [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Description </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\"\r\n                      (change)=\"materialRetailPriceChange(retailPrice)\" [(ngModel)]=\"retailPrice\"\r\n                      [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Material Retail Price </span>\r\n                  </label>\r\n                </div>\r\n              </div> -->\r\n              <!-- <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\"\r\n                      (change)=\"taxPercentage(tax)\" [(ngModel)]=\"tax\"\r\n                      [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Tax % </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\"\r\n                      (change)=\"taxValueDatachecking(taxValue)\" [(ngModel)]=\"taxValue\"\r\n                      [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Tax Value </span>\r\n                  </label>\r\n                </div>\r\n              </div> -->\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\"\r\n                      (change)=\"totalMRPCost(totalMrpCost)\" [(ngModel)]=\"totalMrpCost\"\r\n                      [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\"> Total Material Cost</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\"\r\n                      (change)=\"TrunkOperatingChange(trunkOpCost)\" [(ngModel)]=\"trunkOpCost\"\r\n                      [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Trunk Operating Cost </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\" (change)=\"leadCostChange(LeadCost)\"\r\n                      [(ngModel)]=\"LeadCost\" [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Lead Cost </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <!-- </div>\r\n                <div class=\"row\"> -->\r\n\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\" (change)=\"timeChanges(time)\"\r\n                      [(ngModel)]=\"time\" [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Time</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\"\r\n                      (change)=\"laborRateCahanges(laborRate)\" [(ngModel)]=\"laborRate\"\r\n                      [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Labor Rate $/HR </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\"\r\n                      (change)=\"laborCostChanges(laborCost)\" [(ngModel)]=\"laborCost\"\r\n                      [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Labor Cost </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <!-- </div>\r\n                <div class=\"row\"> -->\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\" (change)=\"totalcostChange(cost)\"\r\n                      [(ngModel)]=\"cost\" [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Total Cost </span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\" (change)=\"standardChange(change)\"\r\n                      [(ngModel)]=\"change\" [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Standard</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\" (change)=\"valueChange(value)\"\r\n                      [(ngModel)]=\"value\" [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Value</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\" (change)=\"memberChanges(member)\"\r\n                      [(ngModel)]=\"member\" [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Member</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-2\">\r\n                <div class=\"form-group\">\r\n                  <label>\r\n                    <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\"\r\n                      (change)=\"lastModifiedChanges(last)\" [(ngModel)]=\"last\" [ngModelOptions]=\"{standalone:true}\">\r\n                    <span class=\"text\">Last Modified On</span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /Search By -->\r\n\r\n\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-blue\" (click)=\"addPriceBook()\"><i class=\"fa fa-user-plus\"></i>&nbsp;\r\n            Add New Price Book Service</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"widget three-bordered\">\r\n          <div class=\"widget-header header gray\">\r\n            <span class=\"widget-caption\">List of PriceBook Services</span>\r\n          </div>\r\n          <div class=\"widget-body\">\r\n            <div class=\"table-scrollable\">\r\n              <table class=\"table table-bordered table-striped table-condensed flip-content\"\r\n                *ngIf=\"priceBookServiceResponse\">\r\n                <thead class=\"flip-content bordered-palegreen\">\r\n                  <tr>\r\n                    <th width=\"4%\">\r\n                      Preview\r\n                    </th>\r\n                    <th width=\"4%\">\r\n                      Edit\r\n                    </th>\r\n                    <!-- <th *ngIf=\"showserviceId\">\r\n                      Service ID\r\n                    </th> -->\r\n                    <th width=\"4%\" *ngIf=\"!showserviceId\">\r\n                      Service ID\r\n                    </th>\r\n                    <th width=\"4%\" *ngIf=\"!mainCategoryData\">\r\n                      Main Category\r\n                    </th>\r\n                    <th width=\"4%\" *ngIf=\"!subCategoryData\">\r\n                      Sub Category\r\n                    </th>\r\n                    <th width=\"20%\" *ngIf=\"!titleData\">\r\n                      Description\r\n                    </th>\r\n                    <th width=\"4%\" *ngIf=\"!totalMrpCostData\">\r\n                      Total Material Cost\r\n                    </th>\r\n                    <th width=\"4%\" *ngIf=\"!trunkOpCostData\">\r\n                      Truck Operating Cost\r\n                    </th>\r\n                    <th width=\"4%\" *ngIf=\"!LeadCostData\">\r\n                      Lead Cost\r\n                    </th>\r\n                    <th width=\"4%\" *ngIf=\"!timeData\">\r\n                      Time\r\n                    </th>\r\n                    <th width=\"4%\" *ngIf=\"!laborRateData\">\r\n                      Labor Rate $/HR\r\n                    </th>\r\n                    <th width=\"4%\" *ngIf=\"!laborCostData\">\r\n                      Labor Cost\r\n                    </th>\r\n                    <th width=\"4%\" *ngIf=\"!totalcostData\">\r\n                      Total Cost\r\n                    </th>\r\n                    <th style=\"background-color: orange; width:4%;\" *ngIf=\"!changeData\">\r\n                      Standard\r\n                    </th>\r\n                    <th style=\"background-color: blue; width:4%;\" *ngIf=\"!valueData\">\r\n                      Value\r\n                    </th>\r\n                    <th style=\"background-color: mediumvioletred; width:4%;\" *ngIf=\"!memberData\">\r\n                      Member\r\n                    </th>\r\n                    <th width=\"4%\">\r\n                      Active\r\n                    </th>\r\n                    <th width=\"4%\" *ngIf=\"!lastData\">\r\n                      Last Modified On\r\n                    </th>\r\n                    <th width=\"4%\">\r\n                      Delete\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr\r\n                    *ngFor=\"let data of priceBookListDetails | paginate: { itemsPerPage: 30, currentPage: p }; let i = index\">\r\n                    <td class=\"center\">\r\n                      <a class=\"btn btn-xs btn-success  \" (click)=\"viewItem(data.serviceId)\">\r\n                        <i class=\"fa fa-eye\"></i>\r\n                      </a>\r\n                    </td>\r\n                    <td class=\"center\">\r\n                      <a class=\"btn btn-xs btn-primary  \" (click)=\"editPriceBookService(data.serviceId)\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                      </a>\r\n                    </td>\r\n                    <td *ngIf=\"!showserviceId\">\r\n                      {{data.serviceId}}\r\n                    </td>\r\n                    <td *ngIf=\"!mainCategoryData\">\r\n                      {{data.category}}\r\n                    </td>\r\n                    <td *ngIf=\"!subCategoryData\" style=\"white-space:normal;\">\r\n                      {{data.subCategory}}\r\n                    </td>\r\n                    <td *ngIf=\"!titleData\">\r\n                      {{data.description}}\r\n                    </td>\r\n                    <td *ngIf=\"!totalMrpCostData\" class=\"center\">\r\n                      $ {{data.materialCost}}\r\n                    </td>\r\n                    <td *ngIf=\"!trunkOpCostData\" class=\"center\">\r\n                      ${{data.truckOperatingCost}}\r\n                    </td>\r\n                    <td *ngIf=\"!LeadCostData\" class=\"center\">\r\n                      ${{data.leadCost}}\r\n                    </td>\r\n                    <td *ngIf=\"!timeData\" class=\"center\">\r\n                      {{data.time}}\r\n                    </td>\r\n                    <td *ngIf=\"!laborRateData\" class=\"center\">\r\n                      ${{data.laborRate}}\r\n                    </td>\r\n                    <td *ngIf=\"!laborCostData\" class=\"center\">\r\n                      ${{data.laborCost}}\r\n                    </td>\r\n                    <td *ngIf=\"!totalcostData\" class=\"center\">\r\n                      ${{data.totalCost}}\r\n                    </td>\r\n                    <td *ngIf=\"!changeData\" class=\"center\">\r\n                      $ {{data.standard}}\r\n                    </td>\r\n                    <td *ngIf=\"!valueData\" class=\"center\">\r\n                      $ {{data.value}}\r\n                    </td>\r\n                    <td *ngIf=\"!memberData\" class=\"center\">\r\n                      $ {{data.member}}\r\n                    </td>\r\n                    <td class=\"center\">\r\n                      <label>\r\n                        <input type=\"checkbox\" class=\"colored-success\" checked=\"checked\">\r\n                        <span class=\"text\"></span>\r\n                      </label>\r\n                    </td>\r\n                    <td *ngIf=\"!lastData\">\r\n                      {{data.modifiedOn | date:'MM/dd/yyyy HH:mm:ss'}}\r\n                    </td>\r\n                    <td class=\"center\">\r\n                      <a class=\"btn btn-xs btn-danger  \" (click)=\"deletePriceBookService()\">\r\n                        <i class=\"fa fa-trash-o\"></i>\r\n                      </a>\r\n                    </td>\r\n                  </tr>\r\n\r\n                </tbody>\r\n              </table>\r\n              <div class=\"row-fluid\" *ngIf=\"priceBookSearchData\">\r\n                <br>\r\n                <pagination-controls class=\"span10\" style=\"float:left\" (pageChange)=\"p = $event\"></pagination-controls>\r\n                <p class=\"span2\" style=\"float:right\">{{priceBookListDetails.length}} Records Found</p>\r\n              </div>\r\n              <div class=\"row-fluid\" *ngIf=\"!priceBookServiceResponse\">\r\n                <br />\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"col-lg-4\"></div>\r\n                  <div class=\"col-lg-4\">\r\n                    <div class=\"span6\"><b style=\"font-size: 25px\">No Records\r\n                        Available</b></div>\r\n                    <div class=\"col-lg-4\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/list-pricebook-services/list-pricebook-services.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/list-pricebook-services/list-pricebook-services.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.item {\n  text-align: center; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.databox-value {\n  color: #000 !important;\n  font-size: 24px !important; }\n\n.databox-field {\n  color: #000 !important;\n  font-size: 16px !important; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text {\n  font-size: 12px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2Vib29rL1ByaWNlQm9vay9QcmljZUJvb2stU2VydmljZXMvbGlzdC1wcmljZWJvb2stc2VydmljZXMvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByaWNlYm9va1xcUHJpY2VCb29rXFxQcmljZUJvb2stU2VydmljZXNcXGxpc3QtcHJpY2Vib29rLXNlcnZpY2VzXFxsaXN0LXByaWNlYm9vay1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSxtQkFBaUIsRUFDcEI7O0FBRUQ7RUFDRyxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2Qzs7QUFFRDtFQUNJLHVCQUFzQjtFQUN0QiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIsMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0ssNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksMkJBQTBCLEVBQzdCIiwiZmlsZSI6InNyYy9hcHAvcHJpY2Vib29rL1ByaWNlQm9vay9QcmljZUJvb2stU2VydmljZXMvbGlzdC1wcmljZWJvb2stc2VydmljZXMvbGlzdC1wcmljZWJvb2stc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuaXRlbXtcclxuICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuIH1cclxuXHJcbiAuYnRuLWdyYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWJsdWV7ICAgIFxyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGFib3gtdmFsdWV7XHJcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXRhYm94LWZpZWxke1xyXG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGhyZWUtYm9yZGVyZWR7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxuIH1cclxuXHJcbiAudGV4dHtcclxuICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/list-pricebook-services/list-pricebook-services.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/list-pricebook-services/list-pricebook-services.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ListPricebookServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPricebookServicesComponent", function() { return ListPricebookServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _excel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../excel.service */ "./src/app/pricebook/excel.service.ts");
/* harmony import */ var _utilities_export2Excel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../..//utilities/export2Excel */ "./src/utilities/export2Excel.ts");











var ListPricebookServicesComponent = /** @class */ (function () {
    function ListPricebookServicesComponent(beyond, router, formBuilder, activatedRoute, http, toastr, spinner, export2Excel, excelService) {
        var _this = this;
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.spinner = spinner;
        this.export2Excel = export2Excel;
        this.excelService = excelService;
        this.serviceIds = "true";
        this.mainCategory = "true";
        this.subCategorys = "true";
        this.titles = "true";
        this.retailPrice = "true";
        this.tax = "true";
        this.taxValue = "true";
        this.totalMrpCost = "true";
        this.trunkOpCost = "true";
        this.LeadCost = "true";
        this.cost = "true";
        this.time = "true";
        this.laborRate = "true";
        this.laborCost = "true";
        this.change = "true";
        this.value = "true";
        this.member = "true";
        this.last = "true";
        this.ordersData = [];
        this.showserviceId = false;
        this.mainCategoryData = false;
        this.laborCostValue = [];
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadStart"]) {
                //console.log('The load started ')
                _this.spinner.show();
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteConfigLoadEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
                _this.spinner.hide();
                //console.log('The load ended ')
            }
            else {
                //console.log('The else load')
                _this.spinner.hide();
            }
        });
        this.form = this.formBuilder.group({
            orders: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormArray"]([])
        });
    }
    ListPricebookServicesComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        //console.log("loginData" + JSON.stringify(this.loginData.loginCode))
        this.getProCategories();
        this.getPriceBookValues();
        this.accountType();
        this.GenerealTaxValue();
        this.getPriceBookServiceList();
        // this.requests=this._http.PriceBookCaluculations().subscribe(res=>this.requests=res);
        this.searchPriceBookServices = this.formBuilder.group({
            serviceId: [null],
            category: [null],
            subCategory: [null],
            description: [null],
            // status:[null],
            searchBy: [null]
        });
        this.serviceIdChecking(this.serviceIds);
    };
    // catCode(catCode: any) {
    //   throw new Error("Method not implemented.");
    // }
    ListPricebookServicesComponent.prototype.priceBookSearch = function () {
        var _this = this;
        this.serviceId = '';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        //let options = new RequestOptions({ headers: headers });
        var obj = {
            "serviceId": this.searchPriceBookServices.value.serviceId,
            "category": this.searchPriceBookServices.value.category,
            "subCategory": this.searchPriceBookServices.value.subCategory,
            "description": this.searchPriceBookServices.value.description,
        };
        //console.log('this is search obj' + JSON.stringify(obj))
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/priceBookSearch', [
            { id: 'serviceId', value: obj.serviceId },
            { id: 'category', value: obj.category },
            { id: 'subCategory', value: obj.subCategory },
            { id: 'description', value: obj.description },
        ]).subscribe(function (data) {
            _this.priceBook = data.json();
            //console.log("priceBookListDetails" + JSON.stringify(this.priceBook))
            if (_this.priceBook.status == 200) {
                _this.priceBookListDetails = _this.priceBook.response;
                _this.searchPriceBookServices.reset();
                _this.showList = true;
            }
            else {
                _this.showList = false;
            }
        });
    };
    ListPricebookServicesComponent.prototype.openImport = function () {
        this.progressShow = false;
        this.progressHide = false;
        event.preventDefault();
        event.stopPropagation();
        this.displayFileModal = 'block';
    };
    ListPricebookServicesComponent.prototype.closeImport = function () {
        this.displayFileModal = 'none';
        this.excelError = false;
        this.excelfile = false;
        this.select('');
    };
    ListPricebookServicesComponent.prototype.select = function (event) {
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
    ListPricebookServicesComponent.prototype.checking = function () {
        if (this.excelData === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
            this.import('');
        }
        else {
            // alert("Please Select an Excel FILE");
            this.excelfile = true;
        }
    };
    ListPricebookServicesComponent.prototype.import = function ($event) {
        var _this = this;
        console.log("excelData" + JSON.stringify(this.excelData));
        var url = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/PriceBookImport' + '/' + this.loginData.loginCode;
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
                    location.reload();
                    _this.progressHide = true;
                }
            }
        };
        xhr.onerror = function (e) {
        };
        xhr.onload = function () {
        };
        xhr.send(formData);
    };
    ListPricebookServicesComponent.prototype.exportAsXLSX = function () {
        this.excelService.exportAsExcelFile(this.priceBookListDetails, 'ExportPriceBook');
    };
    ListPricebookServicesComponent.prototype.PriceSearchSelection = function (chooseSearchBy) {
        if (chooseSearchBy == "serviceIdData") {
            this.serviceIdData = true;
            this.category = false;
            this.subCategory = false;
            this.title = false;
            this.status = false;
        }
        if (chooseSearchBy == "category") {
            this.serviceIdData = false;
            this.category = true;
            this.subCategory = false;
            this.title = false;
            this.status = false;
        }
        if (chooseSearchBy == "subCategory") {
            this.serviceIdData = false;
            this.category = false;
            this.subCategory = true;
            this.title = false;
            this.status = false;
        }
        if (chooseSearchBy == "title") {
            this.serviceIdData = false;
            this.category = false;
            this.subCategory = false;
            this.title = true;
            this.status = false;
        }
        if (chooseSearchBy == "status") {
            this.serviceIdData = false;
            this.category = false;
            this.subCategory = false;
            this.title = false;
            this.status = true;
        }
    };
    ListPricebookServicesComponent.prototype.reset = function () {
        this.searchPriceBookServices.reset();
        this.getPriceBookServiceList();
    };
    ListPricebookServicesComponent.prototype.getPriceBookServiceList = function () {
        var _this = this;
        this.spinner.show();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/listPriceBookService' + '/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.spinner.hide();
                _this.priceBookListDetails = response.response;
                _this.priceBookServiceResponse = true;
                console.log("priceBookListDetails" + JSON.stringify(_this.priceBookListDetails));
                for (var i = 0; i < _this.priceBookListDetails.length; i++) {
                    // this.priceBookListDetails[i].taxPercentage = Number(this.taxValueData)
                    // this.priceBookListDetails[i].taxValue = this.priceBookListDetails[i].materialCost * (this.priceBookListDetails[i].taxPercentage / 100)
                    /*Restric two decimal values in taxValue*/
                    // this.priceBookListDetails[i].taxValue = parseFloat(this.priceBookListDetails[i].taxValue).toFixed(2)
                    //console.log("this is taxvaluedata" + this.priceBookListDetails[i].taxValue)
                    // this.priceBookListDetails[i].totalmaterialPrice = parseFloat(this.priceBookListDetails[i].materialCost) + parseFloat(this.priceBookListDetails[i].taxValue)
                    //console.log("totalmaterialPrice" + this.priceBookListDetails[i].totalmaterialPrice)
                    _this.priceBookListDetails[i].truckOperatingCost = _this.settingTOCValue;
                    _this.priceBookListDetails[i].leadCost = _this.settingLEADCOSTValue;
                    _this.priceBookListDetails[i].laborRate = _this.settingPBLABORCOSTValue;
                    _this.priceBookListDetails[i].laborCost = _this.priceBookListDetails[i].laborRate * _this.priceBookListDetails[i].time;
                    _this.priceBookListDetails[i].totalCost = parseFloat(_this.priceBookListDetails[i].materialCost) + parseFloat(_this.priceBookListDetails[i].laborCost) + parseInt(_this.priceBookListDetails[i].truckOperatingCost) + parseInt(_this.priceBookListDetails[i].leadCost);
                    /*Restric two decimal values in totalCost */
                    _this.priceBookListDetails[i].totalCost = Math.round(_this.priceBookListDetails[i].totalCost * 100) / 100;
                    console.log("totalCost " + _this.priceBookListDetails[i].totalCost);
                    _this.packageStandardValue = parseInt(_this.acctype[0].exceptedNetProfit);
                    console.log("packageStandardValue" + _this.packageStandardValue);
                    _this.percentStandardValue = _this.priceBookListDetails[i].totalCost * _this.packageStandardValue / 100;
                    console.log("percentStandardValue" + _this.percentStandardValue);
                    _this.priceBookListDetails[i].standard = _this.priceBookListDetails[i].totalCost + _this.percentStandardValue;
                    _this.priceBookListDetails[i].standard = Math.round(_this.priceBookListDetails[i].standard * 100) / 100;
                    console.log("this is standard" + JSON.stringify(_this.priceBookListDetails[i].standard));
                    _this.packageValueData = parseInt(_this.acctype[1].exceptedNetProfit);
                    _this.percentValueData = _this.priceBookListDetails[i].totalCost * _this.packageValueData / 100;
                    _this.priceBookListDetails[i].value = _this.priceBookListDetails[i].totalCost + _this.percentValueData;
                    _this.priceBookListDetails[i].value = Math.round(_this.priceBookListDetails[i].value * 100) / 100;
                    console.log("this is value" + JSON.stringify(_this.priceBookListDetails[i].value));
                    _this.packageMemberValue = parseInt(_this.acctype[2].exceptedNetProfit);
                    _this.percentMemberValue = _this.priceBookListDetails[i].totalCost * _this.packageMemberValue / 100;
                    _this.priceBookListDetails[i].member = _this.priceBookListDetails[i].totalCost + _this.percentMemberValue;
                    _this.priceBookListDetails[i].member = Math.round(_this.priceBookListDetails[i].member * 100) / 100;
                    console.log("this is member" + JSON.stringify(_this.priceBookListDetails[i].member));
                }
                _this.addlistProServices(_this.priceBookListDetails);
                _this.priceBookListDetails.forEach(function (e) {
                    console.log("EEEEE");
                    var category = _this.proCategoryList.filter(function (value) { return value.categoryCode == e.category; });
                    var subCategory = _this.proCategoryList.filter(function (value) { return value.subcatogryCode == e.subCategory; });
                    for (var i = 0; i < _this.proCategoryList.length; i++) {
                        console.log("LIST LENGTH" + _this.proCategoryList.length);
                        if (_this.proCategoryList[i].categoryCode == _this.priceBookListDetails[i].categoryCode)
                            e.category = _this.proCategoryList[i].categoryName;
                        //e.category = this.priceBookListDetails[i].categoryCode
                        console.log("e.category--->" + e.category);
                    }
                });
                _this.priceBookServiceResponse = true;
                _this.catCode = _this.priceBookListDetails[0].categoryCode;
            }
            else {
                _this.spinner.hide();
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
                //console.log('The execution is failed ' + JSON.stringify(error))
            });
        });
    };
    //Getting Account Setting LaborRate
    ListPricebookServicesComponent.prototype.addlistProServices = function (priceBookListDetails) {
        var _this = this;
        console.log("matchingProData" + JSON.stringify(this.priceBookListDetails));
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/addProServices' + '/' + this.loginData.loginCode, this.priceBookListDetails)
            .subscribe(function (data) {
            var matchingData = data.json();
            console.log("matchingData..." + JSON.stringify(matchingData));
            _this.matchingResponse = matchingData.response;
            if (matchingData.status == 200) {
                _this.matchingResponseStatus = false;
                // this.toastr.success("Matching Data Added Successfully");
            }
            else {
                _this.toastr.warning("Record adding Failed");
                _this.matchingResponseStatus = true;
            }
        }, function (error) {
            //console.log('The execution is failed ' + JSON.stringify(error))
        });
    };
    ListPricebookServicesComponent.prototype.getPriceBookValues = function () {
        var _this = this;
        //console.log("in price book values")
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getPriceBookSettingValues/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var priceBookSetting = data.json();
            if (priceBookSetting.status == 200) {
                //console.log("agreementStatus Details" + JSON.stringify(priceBookSetting))
                _this.pricebookSettingValues = priceBookSetting.response;
                //console.log("list of pricebook values" + JSON.stringify(this.pricebookSettingValues))
                for (var i = 0; i < _this.pricebookSettingValues.length; i++) {
                    if (_this.pricebookSettingValues[i].settingName == "TOC") {
                        _this.settingTOCValue = _this.pricebookSettingValues[i].settingValue;
                        //console.log("settingTOCValue" + this.settingTOCValue)
                    }
                    if (_this.pricebookSettingValues[i].settingName == "LEADCOST") {
                        _this.settingLEADCOSTValue = _this.pricebookSettingValues[i].settingValue;
                        //console.log("settingLEADCOSTValue" + this.settingLEADCOSTValue)
                    }
                    if (_this.pricebookSettingValues[i].settingName == "PBLABORCOST") {
                        _this.settingPBLABORCOSTValue = _this.pricebookSettingValues[i].settingValue;
                        //console.log("settingPBLABORCOSTValue" + this.settingPBLABORCOSTValue)
                    }
                    if (_this.pricebookSettingValues[i].settingName == "OVERHEADCOST") {
                        _this.settingOHCOSTValue = _this.pricebookSettingValues[i].settingValue;
                        //console.log("settingOHCOSTValue" + this.settingOHCOSTValue)
                    }
                    if (_this.pricebookSettingValues[i].settingName == "ETC") {
                        _this.employeeTax = _this.pricebookSettingValues[i].settingValue;
                        //console.log("employeeTax" + this.employeeTax)
                    }
                    // this.getPriceBookServiceList(this.settingPBLABORCOSTValue)
                    // this.getLaborRate(this.settingPBLABORCOSTValue)
                }
                _this.priceBookValueStatus = true;
                //console.log("lab" + this.pricebookSettingValues)
                // return false;
            }
            else {
                _this.priceBookValueStatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server 1111');
        });
    };
    //Getting Account Setting LaborRate */
    /*Getting Standard Values here */
    ListPricebookServicesComponent.prototype.accountType = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/listPBPackageName/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var accountType = data.json();
            if (accountType.status == 200) {
                console.log("accountType Details" + JSON.stringify(accountType));
                _this.acctype = accountType.response;
                console.log("acctype 0 -->" + JSON.stringify(_this.acctype[0].exceptedNetProfit));
                console.log("acctype 1 -->" + JSON.stringify(_this.acctype[1].exceptedNetProfit));
                console.log("acctype 2 --->" + JSON.stringify(_this.acctype[2].exceptedNetProfit));
                _this.account = true;
                return false;
            }
            else {
                _this.account = false;
            }
        }, function (error) {
            //  this.toastr.warning('Unable to connect to server 2222');
        });
    };
    /*Getting Standard Values here */
    /*Getting tax value */
    ListPricebookServicesComponent.prototype.GenerealTaxValue = function () {
        var _this = this;
        //console.log("General tax value")
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/prbTaxValue', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.catresponse = response.response;
            //console.log("this.catresponse" + JSON.stringify(this.catresponse))
            _this.taxValueData = 0;
            //  this.taxValueData = this.catresponse[0].salesTax
            //console.log(" this.taxData" + JSON.stringify(Number(this.taxValueData)))
        });
    };
    ListPricebookServicesComponent.prototype.GenerealTaxValueinprogress = function () {
        var _this = this;
        //console.log("General tax value")
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/pbgpTaxvalueData', options)
            .subscribe(function (data) {
            var response = data.json();
            _this.catresponse = response.response;
            //console.log("this.catresponse" + JSON.stringify(this.catresponse))
            _this.taxData = _this.catresponse[0].salesTax;
            //console.log(" this.taxData" + JSON.stringify(Number(this.taxData)))
        });
    };
    /*Getting tax value */
    ListPricebookServicesComponent.prototype.addCheckboxes = function () {
        var _this = this;
        this.ordersData.forEach(function (o, i) {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](i === 0); // if first item set to true, else false
            _this.form.controls.orders.push(control);
        });
    };
    // getCategoryName() {
    //   //console.log("catCode" + JSON.stringify(this.catCode))
    //   var headers = new Headers();
    //   headers.append("Accept", 'application/json');
    //   headers.append('Content-Type', 'application/json');
    //   let options = new RequestOptions({ headers: headers });
    //   this.http.get(Global.url + '/pricebookCategoryName/' + this.catCode, options)
    //     .subscribe(data => {
    //       var catresponse = data.json();
    //       if (catresponse.status == 200) {
    //         //console.log("this is Response of category NAme"+JSON.stringify(catresponse))
    //         this.categoryID = catresponse.response[0].cat_code
    //         //console.log("this is  this.categoryID"+JSON.stringify( this.categoryID))
    //         this.serviceName = catresponse.response[0].cat_code
    //         //console.log("response" + JSON.stringify(catresponse.response[0].category))
    //         return false;
    //       } else {
    //         this.toastr.warning("No Records Found")
    //       }
    //     }, error => {
    //       this.toastr.warning("Unable to connect to server")
    //     })
    // }
    ListPricebookServicesComponent.prototype.getOrders = function () {
        return [
            { id: 100, name: 'order 1' },
            { id: 200, name: 'order 2' },
            { id: 300, name: 'order 3' },
            { id: 400, name: 'order 4' }
        ];
    };
    ListPricebookServicesComponent.prototype.addPriceBook = function () {
        this.router.navigate(['/pricebook/addPriceBook']);
    };
    ListPricebookServicesComponent.prototype.viewPriceBookService = function () {
        this.router.navigate(['/pricebook/viewPriceBook']);
    };
    ListPricebookServicesComponent.prototype.editPriceBookService = function (serviceId) {
        this.router.navigate(['/pricebook/editPriceBook', serviceId]);
    };
    ListPricebookServicesComponent.prototype.deletePriceBookService = function () {
        alert("Delete Coming Soon");
    };
    ListPricebookServicesComponent.prototype.viewItem = function (serviceId) {
        this.router.navigate(['/pricebook/viewItem', serviceId]);
    };
    ListPricebookServicesComponent.prototype.search = function () {
    };
    ListPricebookServicesComponent.prototype.apply = function () {
    };
    ListPricebookServicesComponent.prototype.resetSelected = function () {
    };
    ListPricebookServicesComponent.prototype.getProCategories = function () {
        var _this = this;
        //console.log("categoryssssssss")
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/prolistCatNames/' + this.loginData.loginCode, options)
            .subscribe(function (data) {
            var proCategories = data.json();
            if (proCategories.status == 200) {
                _this.proCategoryList = proCategories.response;
                // for(var i=0;i<this.proCategoryList.length;i++){
                //   console.log("LLLLLLL" + this.proCategoryList.length)
                // }
                //console.log("this is Procategories Response" + JSON.stringify(this.proCategoryList))
                _this.proCategoryStatus = true;
            }
            else {
                _this.labourStatus = false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server 333333');
        });
    };
    ListPricebookServicesComponent.prototype.changeCheckbox = function (event, index) {
        this.tags[index] = event.target.checked;
    };
    ListPricebookServicesComponent.prototype.serviceIdChecking = function (serviceIds) {
        //console.log("this is service Checking" + JSON.stringify(serviceIds))
        if (serviceIds == false) {
            this.showserviceId = true;
        }
        else {
            this.showserviceId = false;
        }
    };
    ListPricebookServicesComponent.prototype.mainCategoryChecking = function (mainCategory) {
        //console.log("this is  mainCategory" + JSON.stringify(mainCategory))
        if (mainCategory == false) {
            this.mainCategoryData = true;
        }
        else {
            this.mainCategoryData = false;
        }
    };
    ListPricebookServicesComponent.prototype.subCategoryChanges = function (subCategorys) {
        //console.log("this is subCategorys" + JSON.stringify(subCategorys))
        if (subCategorys == false) {
            this.subCategoryData = true;
        }
        else {
            this.subCategoryData = false;
        }
    };
    ListPricebookServicesComponent.prototype.titleChange = function (titles) {
        //console.log("this is titles" + JSON.stringify(titles))
        if (titles == false) {
            this.titleData = true;
        }
        else {
            this.titleData = false;
        }
    };
    ListPricebookServicesComponent.prototype.materialRetailPriceChange = function (retailPrice) {
        //console.log("this is retailPrice" + JSON.stringify(retailPrice))
        if (retailPrice == false) {
            this.retailPriceData = true;
        }
        else {
            this.retailPriceData = false;
        }
    };
    ListPricebookServicesComponent.prototype.taxPercentage = function (tax) {
        //console.log("this tax value" + JSON.stringify(tax))
        if (tax == false) {
            this.taxData = true;
        }
        else {
            this.taxData = false;
        }
    };
    ListPricebookServicesComponent.prototype.taxValueDatachecking = function (taxValue) {
        //console.log("this is taxvalues" + JSON.stringify(taxValue))
        if (taxValue == false) {
            this.taxvalues = true;
        }
        else {
            this.taxvalues = false;
        }
    };
    ListPricebookServicesComponent.prototype.totalMRPCost = function (totalMrpCost) {
        //console.log("this totalMrpCost" + JSON.stringify(totalMrpCost))
        if (totalMrpCost == false) {
            this.totalMrpCostData = true;
        }
        else {
            this.totalMrpCostData = false;
        }
    };
    ListPricebookServicesComponent.prototype.TrunkOperatingChange = function (trunkOpCost) {
        //console.log("this is trunkOpCost" + JSON.stringify(trunkOpCost))
        if (trunkOpCost == false) {
            this.trunkOpCostData = true;
        }
        else {
            this.trunkOpCostData = false;
        }
    };
    ListPricebookServicesComponent.prototype.leadCostChange = function (LeadCost) {
        //console.log("this is LeadCost" + JSON.stringify(LeadCost))
        if (LeadCost == false) {
            this.LeadCostData = true;
        }
        else {
            this.LeadCostData = false;
        }
    };
    ListPricebookServicesComponent.prototype.standardChange = function (change) {
        //console.log("this is change" + JSON.stringify(change))
        if (change == false) {
            this.changeData = true;
        }
        else {
            this.changeData = false;
        }
    };
    ListPricebookServicesComponent.prototype.valueChange = function (value) {
        //console.log("this is value" + JSON.stringify(value))
        if (value == false) {
            this.valueData = true;
        }
        else {
            this.valueData = false;
        }
    };
    ListPricebookServicesComponent.prototype.memberChanges = function (member) {
        //console.log("this is member" + JSON.stringify(member))
        if (member == false) {
            this.memberData = true;
        }
        else {
            this.memberData = false;
        }
    };
    ListPricebookServicesComponent.prototype.totalcostChange = function (cost) {
        //console.log("this   is cost" + JSON.stringify(cost))
        if (cost == false) {
            this.totalcostData = true;
        }
        else {
            this.totalcostData = false;
        }
    };
    ListPricebookServicesComponent.prototype.laborRateCahanges = function (laborRate) {
        //console.log("this is laborRate" + JSON.stringify(laborRate))
        if (laborRate == false) {
            this.laborRateData = true;
        }
        else {
            this.laborRateData = false;
        }
    };
    ListPricebookServicesComponent.prototype.laborCostChanges = function (laborCost) {
        //console.log("this is laborCost" + JSON.stringify(laborCost))
        if (laborCost == false) {
            this.laborCostData = true;
        }
        else {
            this.laborCostData = false;
        }
    };
    ListPricebookServicesComponent.prototype.timeChanges = function (time) {
        //console.log("this time " + JSON.stringify(time))
        if (time == false) {
            this.timeData = true;
        }
        else {
            this.timeData = false;
        }
    };
    ListPricebookServicesComponent.prototype.lastModifiedChanges = function (last) {
        //console.log("this is last " + JSON.stringify(last))
        if (last == false) {
            this.lastData = true;
        }
        else {
            this.lastData = false;
        }
    };
    ListPricebookServicesComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListPricebookServicesComponent.prototype, "myInput", void 0);
    ListPricebookServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"], _utilities_export2Excel__WEBPACK_IMPORTED_MODULE_10__["Export2Excel"], _excel_service__WEBPACK_IMPORTED_MODULE_9__["ExcelService"]],
            selector: 'app-list-pricebook-services',
            template: __webpack_require__(/*! ./list-pricebook-services.component.html */ "./src/app/pricebook/PriceBook/PriceBook-Services/list-pricebook-services/list-pricebook-services.component.html"),
            styles: [__webpack_require__(/*! ./list-pricebook-services.component.scss */ "./src/app/pricebook/PriceBook/PriceBook-Services/list-pricebook-services/list-pricebook-services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"],
            _utilities_export2Excel__WEBPACK_IMPORTED_MODULE_10__["Export2Excel"],
            _excel_service__WEBPACK_IMPORTED_MODULE_9__["ExcelService"]])
    ], ListPricebookServicesComponent);
    return ListPricebookServicesComponent;
}());



/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/view-item/view-item.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/view-item/view-item.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a href=\"#\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">PriceBook</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\">PriceBook Service</a>\r\n          </li>\r\n          <li class=\"active\">\r\n            View PriceBook Summary\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>View Price Book Service Details</h1>\r\n          <!-- <h1>View Item</h1> -->\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered \" *ngIf=\"priceBookServiceResponse\">\r\n                      <div class=\"header gray\">\r\n                        View Price Book Service Details -- {{priceBookListDetails.serviceId}}\r\n                      </div>\r\n                      <!-- form -->\r\n                      <div id=\"registration-form\">\r\n                        <!-- <form [formGroup]=\"viewItem\"> -->\r\n                        <!-- View PriceBook Summary -->\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                            <div class=\"form-title\">\r\n                              View Price Book Item\r\n                            </div>\r\n                            <!-- <div class=\"row\">\r\n                                <div class=\"col-sm-12\"> -->\r\n                            <form class=\"form-horizontal\" role=\"form\">\r\n\r\n                              <!-- <div class=\"row\">\r\n                                      <div class=\"col-sm-12\"> -->\r\n\r\n                              <div class=\"row\" *ngIf=\"withOutImg\">\r\n                                <div class=\"col-sm-5\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"widget-body text-center\">\r\n                                      <img [src]=\"imagePreview\" height=\"180px\" width=\"180px\">\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-1\"></div>\r\n                                <div class=\"col-sm-6\">\r\n                                  <div class=\"form-group\">\r\n                                    <h3><b>{{priceBookListDetails.description}}</b></h3>\r\n                                    <p>{{priceBookListDetails.category}}/{{priceBookListDetails.subCategory}}</p>\r\n                                    <p>{{priceBookListDetails.serviceDescription}}\r\n                                    </p><br />\r\n                                    <h5><b>Installation Instructions</b></h5>\r\n                                    <p>{{priceBookListDetails.instructions}}</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"row\" *ngIf=\"withImg\">\r\n                                <div class=\"col-sm-5\">\r\n                                  <div class=\"form-group\">\r\n                                    <div class=\"widget-body text-center\">\r\n                                      <!-- <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery> -->\r\n                                      <!-- <div class=\"row\">\r\n                                      <div class=\"col-sm-12\">\r\n                                        <div class=\"form-group\"> -->\r\n\r\n                                      <div *ngFor='let x of arr;let i = index'>\r\n                                        <figure style=\"height:140px;width:220px;\" class=\"icon1\">\r\n                                          <figcaption>{{ imageName[i]?.image }}\r\n                                          </figcaption>\r\n                                          <img (click)=\"show(x)\" src=\"{{x.name}}\" height=\"100px\" width=\"120px\">\r\n                                          <!-- <img (click)=\"show(x)\" src=\"{{x.name}}\" [zoom]=\"5\" [lenSize]=\"20\" [imgWidth]=\"100\" [divZoomed]=\"divZoomed\"></app-zoom> -->\r\n                                        </figure>\r\n\r\n                                        &nbsp;&nbsp;&nbsp;&nbsp;\r\n                                      </div>\r\n\r\n                                      <!-- Creates the bootstrap modal where the image will appear -->\r\n                                      <div id=\"myModal0\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\"\r\n                                        aria-hidden=\"true\"\r\n                                      >\r\n\r\n                                        <!-- <div id=\"myModal0\" class=\"modal\" id=\"imagemodal\" tabindex=\"-1\" role=\"dialog\"\r\n                                            aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"> -->\r\n                                        <div class=\"modal-dialog1\">\r\n                                          <div class=\"modal-content\">\r\n                                            <div class=\"modal-header\">\r\n                                              <h4 class=\"modal-title\" id=\"myModalLabel\">\r\n                                                Image preview</h4>\r\n                                            </div>\r\n                                            <div class=\"modal-body\">\r\n                                              <div data-dismiss=\"modal\">{{ Image}}<i style=\"margin-left:10px;color: red\"\r\n                                                  (click)=\"hide()\" class=\"fa fa-times\"></i>\r\n                                              </div>\r\n                                              <!-- <figure style=\"height:140px;width:220px;margin-right: 20px;\" > -->\r\n                                              <!-- height=\"150px\" width=\"130px\"<app-zoom [img]=\"imageData\" [zoom]=\"5\" [lenSize]=\"20\" [imgWidth]=\"100\" [divZoomed]=\"divZoomed\"></app-zoom> -->\r\n                                              <img [src]=\"imageData\" height=\"auto\" width=\"auto\">\r\n                                              <hr>\r\n                                              <ngx-image-zoom [thumbImage]=myThumbnail [fullImage]=myFullresImage\r\n                                                [magnification]=\"1\" [enableScrollZoom]=\"true\" [enableLens]=\"true\"\r\n                                                [lensWidth]=\"auto\"></ngx-image-zoom>\r\n                                              <!-- </figure> -->\r\n                                              <!-- <div #divZoomed class=\"img-zoom-result\"></div> -->\r\n                                            </div>\r\n                                            <div class=\"modal-footer\">\r\n                                              <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\"\r\n                                                (click)=\"hide()\">Close</button>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n\r\n                                      <!-- Creates the bootstrap modal where the image will appear -->\r\n                                      <!-- </div>\r\n                                      </div>\r\n                                    </div> -->\r\n\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-1\"></div>\r\n                                <div class=\"col-sm-6\">\r\n                                  <div class=\"form-group\">\r\n                                    <h3><b>{{priceBookListDetails.description}}</b></h3>\r\n                                    <p>{{priceBookListDetails.category}}/{{priceBookListDetails.subCategory}}</p>\r\n                                    <!-- <p>PERFORMANCE, WATER, CONSERVATION, QUALITY</p> -->\r\n                                    <!-- <p>Pressure-Assested Technology offersthe only true high-performance, low\r\n                                      consumer expectations.</p> -->\r\n                                    <p>{{priceBookListDetails.serviceDescription}}\r\n                                    </p><br />\r\n                                    <h5><b>Installation Instructions</b></h5>\r\n                                    <p>{{priceBookListDetails.instructions}}</p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <br><br>\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-4 button-center\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>\r\n                                      <input type=\"radio\" name=\"test\" value=\"small\" checked=\"checked\">\r\n                                      <a class=\"btn btn-magenta\">\r\n                                        Member<br />\r\n                                        <h4><b>${{priceBookListDetails.member}}</b></h4>\r\n                                      </a>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4 button-center\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>\r\n                                      <input type=\"radio\" name=\"test\" value=\"big\">\r\n                                      <a class=\"btn btn-primary\">\r\n                                        Value<br />\r\n                                        <h4><b>${{priceBookListDetails.value}}</b></h4>\r\n                                      </a>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4 button-center\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>\r\n                                      <input type=\"radio\" name=\"test\" value=\"large\">\r\n                                      <a class=\"btn btn-warning\">\r\n                                        Standard<br />\r\n                                        <h4><b>${{priceBookListDetails.standard}}</b></h4>\r\n                                      </a>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <!-- <div class=\"row \">\r\n                                <div class=\"col-sm-4 button-center\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>\r\n                                      <input type=\"radio\" name=\"apply\" class=\"colored-success\">\r\n                                      <button class=\"btn btn-warning\">\r\n                                        Standard<br />\r\n                                        <h4><b>${{priceBookListDetails.standard}}</b></h4>\r\n                                      </button>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4 button-center\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>\r\n                                      <input type=\"radio\" name=\"apply\" class=\"colored-success\">\r\n                                      <button class=\"btn btn-primary\">\r\n                                        Value<br />\r\n                                        <h4><b>${{priceBookListDetails.value}}</b></h4>\r\n                                      </button>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4 button-center\">\r\n                                  <div class=\"form-group\">\r\n                                    <label>\r\n                                      <input type=\"radio\" name=\"apply\" class=\"colored-success\" checked=\"checked\">\r\n                                      <button class=\"btn btn-magenta\">\r\n                                        Member<br />\r\n                                        <h4><b>${{priceBookListDetails.member}}</b></h4>\r\n                                      </button>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                              </div> -->\r\n                              <br />\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-2\">\r\n                                  <div class=\"form-group\">\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <button type=\"submit\" (click)=\"addToEstimateButton()\" *ngIf=\"addToEstimate\"\r\n                                      class=\"btn btn-lg btn-block btn-gray\"><i class=\"fa fa-file-o\"></i>\r\n                                      Add to Estimate\r\n                                    </button>\r\n                                    <!-- <button type=\"submit\" (click)=\"addToEstimateButton()\"  \r\n                                    *ngIf=\"!addToEstimate\"\r\n                                      class=\"btn btn-lg btn-block btn-gray\"><i class=\"fa fa-file-o\"></i>\r\n                                      Add to Estimate\r\n                                    </button> -->\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-2\">\r\n                                  <div class=\"form-group\">\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3 button-center\">\r\n                                  <div class=\"form-group\">\r\n                                    <button type=\"submit\" (click)=\"addToInvoiceButton()\" *ngIf=\"addToEstimate\"\r\n                                      class=\"btn btn-lg btn-block btn-gray\"><i class=\"fa fa-dollar\"></i>\r\n                                      Add to Invoice\r\n                                    </button>\r\n                                    <!-- <button type=\"submit\" (click)=\"addToInvoiceButton()\"  *ngIf=\"!addToEstimate\"\r\n                                      class=\"btn btn-lg btn-block btn-gray\"><i class=\"fa fa-dollar\"></i>\r\n                                      Add to Invoice\r\n                                    </button> -->\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-2\">\r\n                                  <div class=\"form-group\">\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n\r\n                              <!-- <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                  <div class=\"form-group\">\r\n                                    <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter the Tech Notes\">\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                              </div> -->\r\n\r\n                              <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3 button-center\">\r\n                                  <div class=\"form-group\">\r\n                                    <button type=\"submit\" (click)=\"backToPriceBook()\" class=\"btn btn-blue\"><i\r\n                                        class=\"fa fa-arrow-left\"></i>\r\n                                      Back to PriceBook\r\n                                    </button>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3 button-center\">\r\n                                  <div class=\"form-group\">\r\n                                    <button type=\"submit\" data-toggle=\"modal\" data-target=\"#myModal\"\r\n                                      (click)=\"viewDocument()\" class=\"btn btn-gray\"><i class=\"fa fa-file\"></i>\r\n                                      View Documents\r\n                                    </button>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <!-- </div>\r\n                                    </div> -->\r\n                              <!-- Modal- STARTS HERE -->\r\n                              <div class=\"backdrop\" [ngStyle]=\"{'display':displayFileModal}\"></div>\r\n                              <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayFileModal}\">\r\n                                <!-- .modal-dialog - Starts Here -->\r\n                                <div class=\"modal-dialog\"\r\n                                  style=\"overflow-y: scroll; max-height:85%; width: 840px; margin-top: 50px; margin-bottom:50px;\">\r\n                                  <!-- .modal-content - Starts Here -->\r\n                                  <div class=\"modal-content\">\r\n                                    <!-- .modal-header - Starts Here -->\r\n                                    <div class=\"modal-header\">\r\n                                      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseHandled()\">\r\n                                        <span aria-hidden=\"true\">&times;</span>\r\n                                      </button>\r\n                                    </div>\r\n                                    <!-- .modal-header - Ends Here -->\r\n                                    <!-- .modal-body - Starts Here -->\r\n                                    <!-- <modal class=\"custom-modal-2\"> -->\r\n                                    <div class=\"modal-body\">\r\n                                      <pdf-viewer [src]=\"imagePreview\" [render-text]=\"true\" style=\"display: block;\">\r\n                                      </pdf-viewer>\r\n                                      <!-- <object [data]=\"imagePreview\" type=\"application/pdf\">\r\n          <embed [src]=\"imagePreview\" type=\"application/pdf\" />\r\n      </object> -->\r\n                                      <!-- <iframe [src]=\"imagePreview | safe\"></iframe> -->\r\n                                    </div>\r\n                                    <!-- </modal> -->\r\n                                    <!-- .modal-body - Ends Here -->\r\n                                    <!-- .modal-footer - Starts Here -->\r\n                                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                                    <!-- .modal-footer - Ends Here -->\r\n                                  </div>\r\n                                  <!-- .modal-content - Ends Here -->\r\n                                </div>\r\n                                <!-- .modal-dialog - Starts Here -->\r\n                              </div>\r\n\r\n\r\n                            </form>\r\n                            <!-- </div>\r\n                              </div> -->\r\n                            <!-- </div>\r\n                    </div> -->\r\n                            <!-- /View PriceBook Summary -->\r\n                            <!-- </form> -->\r\n                          </div>\r\n                          <!-- /form -->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /Page Body -->\r\n\r\n        </div>\r\n        <!-- /Page Content -->\r\n      </div>\r\n      <!-- /Page Container -->\r\n    </div>\r\n    <!-- /Main Container -->"

/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/view-item/view-item.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/view-item/view-item.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status-active {\n  color: #00FF00;\n  font-weight: bold; }\n\n.status-inactive {\n  color: #FF0000;\n  font-weight: bold; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.well.with-header {\n  padding-top: 10px !important; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  border-top: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\nimg1 {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  border-color: blue;\n  padding: 5px;\n  width: 150px; }\n\n.icon1 {\n  height: auto;\n  width: 165px;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  font: 400 16px/1.4 \"Source Code Pro\";\n  font-variant: small-caps;\n  padding: 10px;\n  border: 1px solid #103683;\n  border-radius: 20px; }\n\n.button-center {\n  text-align: center; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.mainImage {\n  width: 250px !important;\n  height: 300px !important;\n  border: 2px solid #5db2ff !important; }\n\n.tileImage {\n  width: 250px !important;\n  height: 50px !important;\n  border: 1px solid #5db2ff !important; }\n\n[type=radio] {\n  position: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n/* Button STYLES */\n\n[type=radio] + .btn {\n  cursor: pointer; }\n\n/* CHECKED STYLES */\n\n[type=radio]:checked + .btn {\n  outline: 5px solid yellow; }\n\n.img-zoom-result {\n  border: 1px solid #d4d4d4;\n  /*set the size of the result div:*/\n  width: 320px;\n  height: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2Vib29rL1ByaWNlQm9vay9QcmljZUJvb2stU2VydmljZXMvdmlldy1pdGVtL0Q6XFxUb3Bwcm96XFxUb3BQcm96X0FkdmFuY2VfQ2xpZW50L3NyY1xcYXBwXFxwcmljZWJvb2tcXFByaWNlQm9va1xcUHJpY2VCb29rLVNlcnZpY2VzXFx2aWV3LWl0ZW1cXHZpZXctaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJpY2Vib29rL1ByaWNlQm9vay9QcmljZUJvb2stU2VydmljZXMvdmlldy1pdGVtL3ZpZXctaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLGVBQWM7RUFDZCxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxlQUFjO0VBQ2Qsa0JBQWlCLEVBQ3BCOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNHLDZCQUE0QixFQUMvQjs7QUFDQTtFQUNJLDRCQUEyQjtFQUMzQiw2QkFBNEI7RUFDNUIsOEJBQTZCO0VBQzdCLDJCQUEwQjtFQUMzQixvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQixtQkFBaUI7RUFDakIsYUFBWTtFQUNaLGFBQVksRUFDWDs7QUFDRDtFQUNHLGFBQVk7RUFDWixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDJCQUEwQjtFQUMxQixtQkFBa0I7RUFFbEIscUNBQW1DO0VBQ25DLHlCQUF3QjtFQUN4QixjQUFhO0VBQ2IsMEJBQXlCO0VBQ3pCLG9CQUFtQixFQUNwQjs7QUFFUDtFQUNJLG1CQUFrQixFQUVyQjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUVEO0VBQ0ksd0JBQXVCO0VBQ3ZCLHlCQUF1QjtFQUN2QixxQ0FBb0MsRUFDdkM7O0FBRUQ7RUFDSSx3QkFBdUI7RUFDdkIsd0JBQXNCO0VBQ3RCLHFDQUFvQyxFQUN2Qzs7QUNWRDtFRGNHLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsU0FBUTtFQUNSLFVBQVMsRUFDTjs7QUFFRCxtQkFBbUI7O0FDYnhCO0VEZUcsZ0JBQWUsRUFDWjs7QUFFRCxvQkFBb0I7O0FDZHpCO0VEZ0JHLDBCQUF5QixFQUN0Qjs7QUFFTjtFQUNFLDBCQUF5QjtFQUN6QixtQ0FBbUM7RUFDbkMsYUFBWTtFQUNaLGNBQWEsRUFFZCIsImZpbGUiOiJzcmMvYXBwL3ByaWNlYm9vay9QcmljZUJvb2svUHJpY2VCb29rLVNlcnZpY2VzL3ZpZXctaXRlbS92aWV3LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdHVzLWFjdGl2ZXtcclxuICAgICBjb2xvcjogIzAwRkYwMDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuIFxyXG4gLnN0YXR1cy1pbmFjdGl2ZXtcclxuICAgICBjb2xvcjogI0ZGMDAwMDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuIFxyXG4gLmlucHJvZ3Jlc3N7XHJcbiAgICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gLndlbGwud2l0aC1oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4gLnRocmVlLWJvcmRlcmVke1xyXG4gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbiB9XHJcbiBcclxuIC5ncmF5eyAgICBcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiBpbWcxIHtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICBib3JkZXItY29sb3I6Ymx1ZTtcclxuICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgIH1cclxuICAgICAuaWNvbjEge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTY1cHg7XHJcbiAgICAgICAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNhZmFmYWY7XHJcbiAgICAgICAgZm9udDogNDAwIDE2cHgvMS40J1NvdXJjZSBDb2RlIFBybyc7XHJcbiAgICAgICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzEwMzY4MztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4uYnV0dG9uLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5idG4tZ3JheXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tYmx1ZXsgICAgXHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpbkltYWdle1xyXG4gICAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgaGVpZ2h0OjMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aWxlSW1hZ2V7ICAgIFxyXG4gICAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgaGVpZ2h0OjUwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1ZGIyZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbiAgICAgICBbdHlwZT1yYWRpb10geyBcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0XHR3aWR0aDogMDtcclxuXHRcdFx0aGVpZ2h0OiAwO1xyXG5cdFx0ICAgfVxyXG5cdFx0ICAgXHJcblx0XHQgICAvKiBCdXR0b24gU1RZTEVTICovXHJcblx0XHQgICBbdHlwZT1yYWRpb10gKyAuYnRuIHtcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0ICAgfVxyXG5cdFx0ICAgXHJcblx0XHQgICAvKiBDSEVDS0VEIFNUWUxFUyAqL1xyXG5cdFx0ICAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAuYnRuIHtcclxuXHRcdFx0b3V0bGluZTogNXB4IHNvbGlkIHllbGxvdztcclxuXHRcdCAgIH1cclxuXHJcbi5pbWctem9vbS1yZXN1bHQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgLypzZXQgdGhlIHNpemUgb2YgdGhlIHJlc3VsdCBkaXY6Ki9cclxuICB3aWR0aDogMzIwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuXHJcbn1cclxuXHRcdCAgIiwiLnN0YXR1cy1hY3RpdmUge1xuICBjb2xvcjogIzAwRkYwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnN0YXR1cy1pbmFjdGl2ZSB7XG4gIGNvbG9yOiAjRkYwMDAwO1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4uaW5wcm9ncmVzcyB7XG4gIGNvbG9yOiBvcmFuZ2VyZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ud2VsbC53aXRoLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLnRocmVlLWJvcmRlcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzM7XG4gIC8qIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzdlMzc5NDsqLyB9XG5cbi5ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50OyB9XG5cbmltZzEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMTUwcHg7IH1cblxuLmljb24xIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTY1cHg7XG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250OiA0MDAgMTZweC8xLjQgXCJTb3VyY2UgQ29kZSBQcm9cIjtcbiAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTAzNjgzO1xuICBib3JkZXItcmFkaXVzOiAyMHB4OyB9XG5cbi5idXR0b24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5idG4tZ3JheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDsgfVxuXG4uYnRuLWJsdWUge1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7IH1cblxuLm1haW5JbWFnZSB7XG4gIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM1ZGIyZmYgIWltcG9ydGFudDsgfVxuXG4udGlsZUltYWdlIHtcbiAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7IH1cblxuW3R5cGU9cmFkaW9dIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwOyB9XG5cbi8qIEJ1dHRvbiBTVFlMRVMgKi9cblt0eXBlPXJhZGlvXSArIC5idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyogQ0hFQ0tFRCBTVFlMRVMgKi9cblt0eXBlPXJhZGlvXTpjaGVja2VkICsgLmJ0biB7XG4gIG91dGxpbmU6IDVweCBzb2xpZCB5ZWxsb3c7IH1cblxuLmltZy16b29tLXJlc3VsdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIC8qc2V0IHRoZSBzaXplIG9mIHRoZSByZXN1bHQgZGl2OiovXG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAyNTBweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/view-item/view-item.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/view-item/view-item.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ViewItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewItemComponent", function() { return ViewItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_8__);




// import { ImageUpload } from '../../../../utilities/imageupload'





var ViewItemComponent = /** @class */ (function () {
    function ViewItemComponent(beyond, router, formBuilder, route, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.dataGallery = false;
        this.galleryImages = [];
        this.bellerImage1 = "assets/img/toi.jpg";
        this.bellerImage2 = "assets/img/slideimg1.png";
        this.bellerImage3 = "assets/img/plumbing/pipe1.png";
        this.bellerImage4 = "assets/img/plumbing/plumbing1.png";
        this.urls = [];
        // imagePreview: any;
        this.imagePreview = "assets/img/no-image.png";
        this.displayFileModal = 'none';
        this.arr = [];
        this.imageName = [];
        this.Image = [];
        this.myThumbnail = "https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
        this.myFullresImage = "https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
        this.imageData = [];
    }
    ViewItemComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.serviceIdData = this.route.snapshot.params['serviceId'];
        //console.log("serviceIdData"+this.serviceIdData)
        this.getImagesGallery();
        this.viewPriceBookService();
        this.AddtoEstimate();
        this.galleryOptions = [
            {
                width: '400px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_8__["NgxGalleryAnimation"].Slide,
                previewZoom: true,
                previewRotate: true
            },
            {
                breakpoint: 800,
                width: '70%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            {
                breakpoint: 400,
                preview: false
            }
        ];
    };
    ViewItemComponent.prototype.getImagesGallery = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getListOfProzDetails', options)
            .subscribe(function (dataPDF) {
            var galleryData = dataPDF.json();
            if (galleryData.status == 200) {
                //console.log(galleryData)
                _this.dataGallery = true;
                for (var i = 0; i < galleryData.response.length; i++) {
                    _this.galleryImages.push({
                        small: galleryData.response[i].image,
                        medium: galleryData.response[i].image,
                        big: galleryData.response[i].image,
                    });
                }
            }
        });
    };
    ViewItemComponent.prototype.dateConversion = function (todayTime) {
        var date = new Date(todayTime);
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        return day + "-" + month + "-" + year;
    };
    ViewItemComponent.prototype.viewPriceBookService = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/viewPriceBook' + '/' + this.serviceIdData, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.priceBookListDetails = response.response[0];
                console.log(" view priceBookListDetails" + JSON.stringify(_this.priceBookListDetails));
                _this.priceBookServiceResponse = true;
                _this.urls = _this.priceBookListDetails.picture.split(',');
                for (var i = 0; i < _this.urls.length; i++) {
                    _this.galleryImages.push({
                        small: _this.urls[i],
                        medium: _this.urls[i],
                        big: _this.urls[i],
                    });
                    console.log("document1" + JSON.stringify(_this.galleryImages));
                }
                console.log("Categoyr" + JSON.stringify(_this.urls));
                if (_this.priceBookListDetails.picture == "" || _this.priceBookListDetails.picture == null || _this.priceBookListDetails.picture == undefined || _this.priceBookListDetails.picture == "undefined") {
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
                        _this.imagePreview = _global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + "/" + _this.urls[i];
                        _this.arr.push({ name: _this.imagePreview });
                    }
                }
            }
            else {
                _this.priceBookServiceResponse = false;
            }
            (function (error) {
            });
        });
    };
    ViewItemComponent.prototype.backToPriceBook = function () {
        if (this.imageData = this.Image) {
            $("#myModal0").modal("hide");
        }
        this.router.navigate(['/pricebook/listPriceBook']);
    };
    ViewItemComponent.prototype.viewDocument = function () {
        this.displayFileModal = 'block';
    };
    ViewItemComponent.prototype.onCloseHandled = function () {
        this.displayFileModal = 'none';
    };
    ViewItemComponent.prototype.onFileSelected = function () {
        var _this = this;
        var $img1 = document.querySelector('#file');
        if (typeof (FileReader) !== 'undefined') {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.imagePreview = e.target.result;
            };
            reader.readAsArrayBuffer($img1.files[0]);
        }
    };
    ViewItemComponent.prototype.addToEstimateButton = function () {
        this.router.navigate(['/estimate/addEstimate']);
    };
    ViewItemComponent.prototype.AddtoEstimate = function () {
        //console.log("this ismain category checking" + JSON.stringify(this.serviceIdData))
        if (this.serviceIdData == false) {
            this.addToEstimate = true;
            //console.log("this......true"+this.addToEstimate)
        }
        else {
            this.addToEstimate = false;
            //console.log("this...... false"+this.addToEstimate)
        }
    };
    /* Image showing in pop up */
    ViewItemComponent.prototype.show = function (index) {
        console.log("index::::" + JSON.stringify(index.name));
        this.Image = index.name.substring(22, 50);
        console.log("Image::::" + JSON.stringify(this.Image));
        for (var i = 0; i < this.arr.length; i++) {
            this.imagePreview[i];
            console.log("this.arr[i].name:::" + this.arr[i].name);
            if (index.name == this.arr[i].name) {
                this.imageData = index.name;
                // this.Image//=index.substring(22, 50)
                console.log("imagePreview" + this.Image);
                this.showModal = true;
                $("#myModal0").modal("show");
            }
            else {
                // $("#myModal0").modal("hide"); 
            }
        }
    };
    /* Image showing in pop up */
    //Bootstrap Modal Close event
    ViewItemComponent.prototype.hide = function () {
        $("#myModal0").modal("hide");
    };
    ViewItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-view-item',
            template: __webpack_require__(/*! ./view-item.component.html */ "./src/app/pricebook/PriceBook/PriceBook-Services/view-item/view-item.component.html"),
            styles: [__webpack_require__(/*! ./view-item.component.scss */ "./src/app/pricebook/PriceBook/PriceBook-Services/view-item/view-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ViewItemComponent);
    return ViewItemComponent;
}());



/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/view-pricebook-services/view-pricebook-services.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/view-pricebook-services/view-pricebook-services.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a >PriceBook</a>\r\n          </li>\r\n          <li>\r\n            <a >PriceBook Services</a>\r\n          </li>\r\n          <li>\r\n            <a (click)=\"list()\">List of PriceBook Services</a>\r\n          </li>\r\n          <li class=\"active\">View PriceBook Services Details</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>View PriceBook Services Details</h1>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-md-12 col-md-12 col-xs-12 \">\r\n                    <div class=\"well with-header with-footer three-bordered \">\r\n                      <div class=\"header gray\">\r\n                        View PriceBook Service Details\r\n                      </div>\r\n                      <!-- View PriceBook Services Details -->\r\n                      <div id=\"registration-form\">\r\n                        <!-- View PriceBook Services Form -->\r\n                        <form [formGroup]=\"viewPriceBook\">\r\n                          <!-- View PriceBook Services -->\r\n                          <!-- <div class=\"row\"> -->\r\n                          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                            <!-- <div class=\"form-title\">\r\n                                View Service\r\n                              </div> -->\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"serviceIDLbl\">\r\n                                    <b>Service ID</b>\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"unitCostLbl\">\r\n                                    PB -1001\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"customerNameLbl\">\r\n                                    <b>Main Category <span class=\"mandatory\">*</span></b>\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"unitCostLbl\">\r\n                                    Plumbing\r\n                                  </label>\r\n                                  <!-- <div *ngIf=\"submitted && f.units.errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f.units.errors.required\">\r\n                                        <p style=\"color: red; font-size: 11px\">* Select Time Zone </p>\r\n                                      </div>\r\n                                    </div> -->\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"creditLimitLbl\">\r\n                                    <b>Subcategory</b>\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"unitCostLbl\">\r\n                                    Water main\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"termsLbl\">\r\n                                    <b>Lead Cost </b>\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"unitCostLbl\">\r\n                                    $75.00\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"sourceLbl\">\r\n                                    <b>TOC</b>\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"unitCostLbl\">\r\n                                    $25.00\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"sourceLbl\">\r\n                                    <b>Description</b>\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"unitCostLbl\">\r\n                                    Install new 1\" backflow device\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- </div> -->\r\n                          <!-- View PriceBook Services -->\r\n\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <hr class=\"hr-gray-thick\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <!-- Collapsible -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                              <div class=\"panel-group accordion\" id=\"accordions\">\r\n\r\n\r\n                                <!-- Cost Estimate - Collapsible -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\" data-parent=\"#accordions\"\r\n                                        href=\"#collapseTwos\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Cost Estimate\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseTwos\" class=\"panel-collapse collapse\">\r\n                                    <div>\r\n                                      <form [formGroup]=\"viewPriceBookService\">\r\n                                        <ng-container formArrayName=\"fromPriceBookValues\">\r\n                                          <div class=\"panel-body border-red\">\r\n\r\n                                            <!-- INVENTORY alignment  -->\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-xs-12 col-md-12\">\r\n                                                <div class=\"widget three-bordered\">\r\n                                                  <div class=\"widget-header gray with-footer\">\r\n                                                    <span class=\"widget-caption\">Inventory</span>\r\n                                                  </div>\r\n                                                  <div class=\"widget-body\">\r\n                                                    <div class=\"flip-scroll\">\r\n                                                      <table\r\n                                                        class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                                                        <thead class=\"flip-content bordered-palegreen\">\r\n                                                          <tr>\r\n                                                            <th>\r\n                                                              Item #\r\n                                                            </th>\r\n                                                            <th>\r\n                                                              Description\r\n                                                            </th>\r\n                                                            <th>\r\n                                                              Type\r\n                                                            </th>\r\n                                                            <th>\r\n                                                              QTY\r\n                                                            </th>\r\n                                                            <th>\r\n                                                              Units\r\n                                                            </th>\r\n                                                            <th>\r\n                                                              List Price\r\n                                                            </th>\r\n                                                            <th>\r\n                                                              Subtotal\r\n                                                            </th>\r\n                                                          </tr>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n                                                          <tr>\r\n                                                            <td>\r\n                                                                123459\r\n                                                            </td>\r\n                                                            <td>\r\n                                                              Back Flow Valve\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                Material\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                1\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                Each\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                $158.00\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                $158.00\r\n                                                            </td>\r\n                                                          </tr>\r\n                                                          <tr>\r\n                                                            <td>\r\n                                                                123460\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                Install new 2\" back-flow device\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                Material\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                1\r\n                                                            </td>\r\n                                                            <td>\r\n                                                              Each\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                $100.00\r\n                                                            </td>\r\n                                                            <td>\r\n                                                                $100.00\r\n                                                            </td>\r\n                                                          </tr>\r\n                                                          <tr>\r\n                                                              <td>\r\n                                                                  Labor - Master TECH\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                <div class=\"form-group\">\r\n                                                                    Labor - Master TECH\r\n                                                                </div>\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                  Labor\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                  3.5\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                  hrs\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                  $165\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                  $577.50\r\n                                                              </td>\r\n                                                            </tr>\r\n                                                            <tr>\r\n                                                              <td>\r\n                                                                  Labor - Master TECH\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                <div class=\"form-group\">\r\n                                                                    DIGGER-001\r\n                                                                </div>\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                  Labor\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                  3.5\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                  Day\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                  $280.00\r\n                                                              </td>\r\n                                                              <td>\r\n                                                                  $980.00\r\n                                                              </td>\r\n                                                            </tr>\r\n                                                        </tbody>\r\n                                                      </table><br>\r\n                                                      <div class=\"row\">\r\n                                                        <div class=\"col-sm-4\">\r\n                                                          <!-- <div class=\"form-group\">\r\n                                                          <button type=\"submit\" class=\"btn btn-blue\"\r\n                                                            (click)=\"addFieldValue()\"><i class=\"fa fa-plus\"></i>\r\n                                                            View Another Inventory </button>\r\n                                                        </div> -->\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-2\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"materialCostLbl\">\r\n                                                              <b>Material Cost </b>\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n\r\n                                                        <div class=\"col-sm-2\">\r\n                                                          <div class=\"form-group\">\r\n                                                            <label for=\"materialCostVal\">\r\n                                                              $258.00\r\n                                                            </label>\r\n                                                          </div>\r\n                                                        </div>\r\n\r\n                                                        \r\n                                                        <div class=\"col-sm-2\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <label for=\"materialCostLbl\">\r\n                                                                <b>Labor Cost </b>\r\n                                                              </label>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                          <div class=\"col-sm-2\">\r\n                                                            <div class=\"form-group\">\r\n                                                              <label for=\"materialCostVal\">\r\n                                                                $1557.50\r\n                                                              </label>\r\n                                                            </div>\r\n                                                          </div>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n                                            <!-- /alignment -->\r\n\r\n\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-lg-12 col-md-10 col-sm-12 col-xs-12\">\r\n\r\n\r\n                                                <br>\r\n                                                <!-- list -->\r\n                                                <div class=\"row\">\r\n                                                  <div class=\"col-xs-12 col-md-12\">\r\n                                                    <div class=\"widget three-bordered\" style=\"border-top: 1px solid #333;\">\r\n                                                     \r\n                                                      <div class=\"widget-body\">\r\n                                                        <div class=\"flip-scroll\">\r\n                                                          <table\r\n                                                            class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                                                            <thead class=\"flip-content\">\r\n                                                              <tr>\r\n                                                                <th>\r\n                                                                  Package Name\r\n                                                                </th>\r\n                                                                <th>\r\n                                                                  Standard\r\n                                                                </th>\r\n                                                                <th>\r\n                                                                  Value\r\n\r\n                                                                </th>\r\n                                                                <th>\r\n                                                                  Member\r\n                                                                </th>\r\n\r\n                                                              </tr>\r\n                                                            </thead>\r\n                                                            <tbody>\r\n                                                              <tr>\r\n                                                                <td>\r\n                                                                  Desired Profit\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  &nbsp; 30.00%\r\n\r\n                                                                </td>\r\n                                                                <td class=\"numeric\">\r\n                                                                  &nbsp; 20.00%\r\n\r\n                                                                </td>\r\n                                                                <td class=\"numeric\">\r\n                                                                  &nbsp;10.00%\r\n                                                                </td>\r\n\r\n                                                              </tr>\r\n                                                              <tr>\r\n                                                                <td>\r\n                                                                  Price Book List Prices= Labor cost + material\r\n                                                                  cost+Overhead Cost+Desired Profit\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                  &nbsp;$1,337.77\r\n                                                                </td>\r\n                                                                <td class=\"numeric\">\r\n                                                                  &nbsp; $1,234.86\r\n                                                                </td>\r\n                                                                <td class=\"numeric\">\r\n                                                                  &nbsp; $1,029.05\r\n                                                                </td>\r\n\r\n                                                              </tr>\r\n                                                            </tbody>\r\n                                                          </table>\r\n                                                        </div>\r\n                                                      </div>\r\n                                                    </div>\r\n                                                  </div>\r\n                                                </div>\r\n                                                <!-- list -->\r\n\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                          <br>\r\n                                        </ng-container>\r\n                                      </form>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- /Cost Estimate - Collapsible -->\r\n\r\n\r\n                                <!-- Pictures -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseThird\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i>Pictures\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n\r\n\r\n                                  <div id=\"collapseThird\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n\r\n                                          <!-- <div class=\"row\">\r\n                                            <div class=\"col-sm-3\">\r\n                                              <div class=\"form-group\">\r\n                                                <label for=\"serviceIDLbl\">\r\n                                                  <b>View Pictures</b>\r\n                                                </label>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div> -->\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <td colspan=\"8\" rowspan=\"6\" class=\"text\">\r\n                                                  <img src=\"/assets/img/plumbing/fixing-faucets/faucet1.jpg\" style=\"width:100px; height:100px; margin: 0px 5px;\" />\r\n                                                  <img src=\"/assets/img/plumbing/fixing-faucets/faucet1.jpg\" style=\"width:100px; height:100px; margin: 0px 5px;\" />\r\n                                                  <img src=\"/assets/img/plumbing/fixing-faucets/faucet1.jpg\" style=\"width:100px; height:100px; margin: 0px 5px;\" />\r\n                                                </td>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n\r\n\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div class=\"panel-body border-red\">\r\n                                    </div>\r\n                                    <br>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- Pictures -->                                \r\n                                \r\n                                <!-- Documents -->\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\">\r\n                                      <h4 class=\"panel-title\">\r\n                                        <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                          data-parent=\"#accordions\" href=\"#collapse4\">\r\n                                          <i class=\"fa-fw fa fa-check\"></i>Documents\r\n                                        </a>\r\n                                      </h4>\r\n                                    </div>\r\n  \r\n  \r\n                                    <div id=\"collapse4\" class=\"panel-collapse collapse\">\r\n                                      <div class=\"panel-body border-red\">\r\n                                        <div class=\"row\">\r\n                                          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                            <div class=\"row\">\r\n                                              <div class=\"col-sm-12\">\r\n                                                <div class=\"form-group\">\r\n                                                  <td colspan=\"8\" rowspan=\"6\" class=\"text\">                                                    \r\n                                                  <img src=\"/assets/img/plumbing/fixing-faucets/faucet1.jpg\" style=\"width:100px; height:100px; margin: 0px 5px;\" />\r\n                                                  <img src=\"/assets/img/plumbing/fixing-faucets/faucet1.jpg\" style=\"width:100px; height:100px; margin: 0px 5px;\" />\r\n                                                  <img src=\"/assets/img/plumbing/fixing-faucets/faucet1.jpg\" style=\"width:100px; height:100px; margin: 0px 5px;\" />\r\n                                                 </td>\r\n                                                </div>\r\n                                              </div>\r\n                                            </div>\r\n  \r\n  \r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                      <div class=\"panel-body border-red\">\r\n                                      </div>\r\n                                      <br>\r\n                                    </div>\r\n                                  </div>\r\n                                  <!-- Documents -->\r\n\r\n                                <!-- Installation instructions -->\r\n                                <div class=\"panel panel-default\">\r\n                                  <div class=\"panel-heading\">\r\n                                    <h4 class=\"panel-title\">\r\n                                      <a class=\"accordion-toggle collapsed\" data-toggle=\"collapse\"\r\n                                        data-parent=\"#accordions\" href=\"#collapseFourth\">\r\n                                        <i class=\"fa-fw fa fa-check\"></i> Installation Instructions\r\n                                      </a>\r\n                                    </h4>\r\n                                  </div>\r\n                                  <div id=\"collapseFourth\" class=\"panel-collapse collapse\">\r\n                                    <div class=\"panel-body border-red\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                                          <div class=\"row\">\r\n                                            <div class=\"col-sm-12\">\r\n                                              <div class=\"form-group\">\r\n                                                <span class=\"input-icon icon-right\">\r\n                                                  <label>\r\n                                                    Lorem Ipsum is simply dummy text of the printing and typesetting\r\n                                                    industry. Lorem Ipsum has been the industry's standard dummy text\r\n                                                    ever since the 1500s, when an unknown printer took a galley of type\r\n                                                    and scrambled it to make a type specimen book.\r\n                                                  </label>\r\n                                                </span>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                                <!-- Installation instructions  -->\r\n\r\n\r\n\r\n\r\n                                <!-- calculations -->\r\n                                <!-- calculations -->\r\n\r\n\r\n\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Collapsible -->\r\n\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                              <div class=\"form-group\">\r\n                                <hr class=\"hr-gray-thick\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n\r\n                          <!-- Buttons -->\r\n                          <div class=\"row\">\r\n                            <div class=\"col-sm-2 button-center\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <button type=\"submit\" (click)=\"okPriceBook()\" class=\"btn btn-blue\"><i\r\n                                    class=\"fa fa-check\"></i>\r\n                                  Ok</button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-3 button-center\">\r\n                              <div class=\"form-group\">\r\n                                <button type=\"submit\" (click)=\"editPriceBook()\" class=\"btn btn-gray\"><i\r\n                                    class=\"fa fa-pencil\"></i>\r\n                                  Edit</button>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"col-sm-4 button-center\">\r\n                              <div class=\"form-group\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <!-- /Buttons -->\r\n\r\n\r\n                        </form>\r\n                        <!-- /View PriceBook Services Form -->\r\n                      </div>\r\n                      <!-- /View PriceBook Services Details -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/view-pricebook-services/view-pricebook-services.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/view-pricebook-services/view-pricebook-services.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.checkbox, .radio {\n  position: relative;\n  display: block;\n  margin-top: 0px !important;\n  margin-bottom: 0px !important; }\n\n.col-sm-6 {\n  padding-left: 0px !important;\n  padding-right: 0px !important; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-blue {\n  color: #333 !important;\n  background-color: #5db2ff !important; }\n\n.button-center {\n  text-align: center; }\n\n.button-left {\n  text-align: left; }\n\n.button-right {\n  text-align: right; }\n\n.accordion.panel-group .panel-heading .accordion-toggle.collapsed {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\n.center {\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.item {\n  text-align: center; }\n\n.body {\n  background-color: white; }\n\n.header-title {\n  font-size: 18px !important; }\n\n.form-heading {\n  font-size: 18px !important; }\n\n/* Buttons */\n\n.btn {\n  font-size: 14px !important;\n  font-weight: bold !important; }\n\n/* /Buttons */\n\n/* Line */\n\n.hr-blue {\n  border-top: 1px solid #869eb4 !important; }\n\n/* /Line */\n\n/* Textbox */\n\n.formcontrol, select {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  border-left-width: 1px !important;\n  border-right-width: 1px !important; }\n\n/* /Textbox */\n\n/* Atkore logo */\n\n.text {\n  text-align: center; }\n\n.text img {\n  width: 70px;\n  height: 80px; }\n\n/* /Atkore logo */\n\n/* Labels */\n\n.label {\n  padding: 5px !important; }\n\nlabel .mandatory {\n  color: red;\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n/* /Labels */\n\n/* Tables    */\n\n.table > tbody > tr > td {\n  padding: 2px !important;\n  line-height: 1.257143 !important;\n  vertical-align: middle; }\n\n/* /Tables    */\n\n/* Vertical Text */\n\n.testrotate p {\n  line-height: 145px !important;\n  font-size: 15px; }\n\n.testrotate .testq {\n  line-height: 483px !important;\n  font-size: 15px; }\n\n.testrotate .testr {\n  line-height: 100px !important;\n  font-size: 15px; }\n\n.testrotate .testp {\n  line-height: 170px !important;\n  font-size: 15px; }\n\n/* /Vertical Text */\n\n/* Textbox input */\n\n.input .formcontrol {\n  width: 50px !important;\n  vertical-align: middle; }\n\n/* /Textbox input */\n\n.form-group {\n  margin-bottom: 0px !important;\n  margin-top: 0px !important; }\n\n.form-control {\n  padding: 4px 3px !important; }\n\n/* Pin Gap Diagram */\n\n.row .pin img {\n  width: 230px;\n  height: 240px;\n  margin-left: 30px !important;\n  margin-right: auto !important; }\n\n/* /Pin Gap Diagram */\n\n.gap {\n  text-align: center; }\n\n/* Bolt torque specifications */\n\n.adjust {\n  margin-left: 10px !important;\n  margin-bottom: 1040px !important; }\n\n/* /Bolt torque specifications */\n\n/* Imageupload    */\n\ntd .img-adjust {\n  margin-left: auto !important;\n  margin-right: auto !important; }\n\n/* /Imageupload    */\n\n.alert-heading {\n  font-size: 12px; }\n\n.align-text-top {\n  vertical-align: top !important; }\n\n.text-big {\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n.form-title {\n  color: #5db2ff;\n  border-bottom: 1px dashed #5db2ff;\n  /*display: block;\r\n     padding: 8px 0;\r\n     border-bottom: 1px dashed #7e3794;*/\n  font-size: 15px;\n  font-weight: bold;\n  /*  color: #5DB2FF;\r\n    margin-bottom: 15px;*/ }\n\n.mandatory {\n  font-weight: bold;\n  color: #FF0000;\n  font-size: 16px; }\n\n.hr-gray-thick {\n  border-top: 3px solid #333 !important; }\n\n.hr-gray {\n  border-top: 1px solid #333 !important; }\n\ninput {\n  color: black; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n.mock-conf {\n  color: green;\n  text-align: center; }\n\n.inprogress {\n  color: orangered;\n  text-align: center; }\n\n.three-bordered {\n  border-left: 1px solid #333;\n  border-right: 1px solid #333;\n  border-bottom: 1px solid #333;\n  /* border-left: 3px solid #7e3794;*/ }\n\n.text-center {\n  text-align: center; }\n\n.checkbox-center {\n  position: relative;\n  display: block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  text-align: center; }\n\n.gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.btn-gray {\n  background-color: #333 !important;\n  color: #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:hover:after {\n  color: #FFF !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle {\n  color: #5db2ff !important;\n  background-color: #333 !important;\n  border-bottom: 1px solid #5db2ff !important; }\n\n.accordion.panel-group .panel-heading .accordion-toggle:after {\n  color: #5db2ff !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpY2Vib29rL1ByaWNlQm9vay9QcmljZUJvb2stU2VydmljZXMvdmlldy1wcmljZWJvb2stc2VydmljZXMvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXHByaWNlYm9va1xcUHJpY2VCb29rXFxQcmljZUJvb2stU2VydmljZXNcXHZpZXctcHJpY2Vib29rLXNlcnZpY2VzXFx2aWV3LXByaWNlYm9vay1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7c0JBQ2lCO0VBR2pCLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2xCOzBCQUNzQixFQUV4Qjs7QUFFRDtFQUNJLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFDeEM7O0FBRUQ7RUFDSSxzQ0FBcUMsRUFFeEM7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxXQUFVO0VBQ1YsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM5QixvQ0FBb0MsRUFDdEM7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsZUFBYztFQUNkLDJCQUEwQjtFQUMxQiw4QkFBNkIsRUFDaEM7O0FBRUQ7RUFDSSw2QkFBNEI7RUFDNUIsOEJBQTZCLEVBQ2hDOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLGtDQUFpQztFQUNqQywwQkFBeUIsRUFDNUI7O0FBRUQ7RUFDSSx1QkFBc0I7RUFDdEIscUNBQW9DLEVBQ3ZDOztBQUVEO0VBQ0EsbUJBQWtCLEVBQ2pCOztBQUVEO0VBQ0csaUJBQWdCLEVBQ2xCOztBQUVGO0VBQ0ksa0JBQWlCLEVBQ2hCOztBQUVKO0VBQ0ksMEJBQXlCO0VBQ3pCLGtDQUFpQztFQUNqQyw0Q0FBMkMsRUFDOUM7O0FBRUQ7RUFDSSx1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSwwQkFBeUI7RUFDekIsa0NBQWlDLEVBQ3BDOztBQUVEO0VBQ0ksMEJBQXlCLEVBQzVCOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLG1CQUFpQixFQUNwQjs7QUFFRDtFQUNJLHdCQUFzQixFQUV6Qjs7QUFFRDtFQUNJLDJCQUF5QixFQUM1Qjs7QUFFRDtFQUNJLDJCQUF5QixFQUM1Qjs7QUFDRCxhQUFhOztBQUNiO0VBQ0ksMkJBQTBCO0VBQzFCLDZCQUE0QixFQUMvQjs7QUFDRCxjQUFjOztBQUVkLFVBQVU7O0FBQ1Y7RUFDSSx5Q0FBbUQsRUFDdEQ7O0FBQ0QsV0FBVzs7QUFFWCxhQUFhOztBQUNiO0VBQ0ksNkJBQTRCO0VBQzVCLDhCQUE2QjtFQUM3QixrQ0FBaUM7RUFDakMsbUNBQWtDLEVBQ3JDOztBQUNELGNBQWM7O0FBRWQsaUJBQWlCOztBQUNqQjtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxhQUFZLEVBQ2Y7O0FBQ0Qsa0JBQWtCOztBQUVsQixZQUFZOztBQUNaO0VBQ0ksd0JBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksV0FBUztFQUNULDJCQUEwQjtFQUMxQiw2QkFBNEIsRUFDL0I7O0FBQ0QsYUFBYTs7QUFFYixlQUFlOztBQUNmO0VBQ0ksd0JBQXVCO0VBQ3ZCLGlDQUFnQztFQUNoQyx1QkFBc0IsRUFDekI7O0FBQ0QsZ0JBQWdCOztBQUVoQixtQkFBbUI7O0FBR25CO0VBQ0ksOEJBQTRCO0VBQzVCLGdCQUFjLEVBQ2pCOztBQUVEO0VBQ0ksOEJBQTRCO0VBQzVCLGdCQUFjLEVBQ2pCOztBQUVEO0VBQ0ksOEJBQTRCO0VBQzVCLGdCQUFjLEVBQ2pCOztBQUVEO0VBQ0ksOEJBQTRCO0VBQzVCLGdCQUFjLEVBQ2pCOztBQUVELG9CQUFvQjs7QUFFcEIsbUJBQW1COztBQUNuQjtFQUNJLHVCQUFxQjtFQUNyQix1QkFBcUIsRUFDeEI7O0FBQ0Qsb0JBQW9COztBQUVwQjtFQUNJLDhCQUE2QjtFQUM3QiwyQkFBMEIsRUFDN0I7O0FBRUQ7RUFDSSw0QkFBMEIsRUFDN0I7O0FBRUQscUJBQXFCOztBQUNyQjtFQUNJLGFBQVc7RUFDWCxjQUFZO0VBQ1osNkJBQTJCO0VBQzNCLDhCQUE0QixFQUMvQjs7QUFDRCxzQkFBc0I7O0FBRXRCO0VBQ0ksbUJBQWlCLEVBQ3BCOztBQUNELGdDQUFnQzs7QUFDaEM7RUFDSSw2QkFBMkI7RUFDM0IsaUNBQWdDLEVBQ25DOztBQUNELGlDQUFpQzs7QUFFakMsb0JBQW9COztBQUNwQjtFQUNJLDZCQUEyQjtFQUMzQiw4QkFBNEIsRUFDL0I7O0FBQ0QscUJBQXFCOztBQUdyQjtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksK0JBQThCLEVBQ2pDOztBQUVEO0VBQ0ksMkJBQXlCO0VBQ3pCLDZCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLGVBQWU7RUFDZixrQ0FBaUM7RUFFakM7O3lDQUVvQztFQUNwQyxnQkFBZTtFQUNmLGtCQUFpQjtFQUNsQjswQkFDc0IsRUFFeEI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZUFBYztFQUNkLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksc0NBQXFDLEVBQ3hDOztBQUVEO0VBQ0ksc0NBQXFDLEVBRXhDOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksNEJBQTJCO0VBQzNCLDZCQUE0QjtFQUM1Qiw4QkFBNkI7RUFDOUIsb0NBQW9DLEVBQ3RDOztBQUVEO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxrQ0FBaUM7RUFDakMsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksa0NBQWlDO0VBQ2pDLDBCQUF5QixFQUM1Qjs7QUFJRDtFQUNJLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLDBCQUF5QjtFQUN6QixrQ0FBaUM7RUFDakMsNENBQTJDLEVBQzlDOztBQUVEO0VBQ0ksMEJBQXlCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvcHJpY2Vib29rL1ByaWNlQm9vay9QcmljZUJvb2stU2VydmljZXMvdmlldy1wcmljZWJvb2stc2VydmljZXMvdmlldy1wcmljZWJvb2stc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS10aXRsZXtcclxuICAgICBjb2xvcjogICM1ZGIyZmY7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNWRiMmZmO1xyXG4gXHJcbiAgICAgLypkaXNwbGF5OiBibG9jaztcclxuICAgICBwYWRkaW5nOiA4cHggMDsqLyAgICBcclxuICAgICAvLyBjb2xvcjogICM3ZTM3OTQ7XHJcbiAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0O1xyXG4gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qICBjb2xvcjogIzVEQjJGRjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7Ki9cclxuIFxyXG4gfVxyXG4gXHJcbiAubWFuZGF0b3J5e1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuIH1cclxuIFxyXG4gLmhyLWdyYXktdGhpY2t7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMzMzICFpbXBvcnRhbnQ7XHJcbiB9IFxyXG4gXHJcbiAuaHItZ3JheXsgICAgXHJcbiAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuICAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgIzdlMzc5NCAhaW1wb3J0YW50O1xyXG4gfSBcclxuIFxyXG4gaW5wdXR7XHJcbiAgICAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG4gXHJcbiAubW9ja3tcclxuICAgICBjb2xvcjogcmVkOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5tb2NrLWNvbmZ7XHJcbiAgICAgY29sb3I6IGdyZWVuOyAgICBcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5pbnByb2dyZXNze1xyXG4gICAgIGNvbG9yOiBvcmFuZ2VyZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLnRocmVlLWJvcmRlcmVke1xyXG4gICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzMzMztcclxuICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgLyogYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjN2UzNzk0OyovXHJcbiB9XHJcbiBcclxuIC5jaGVja2JveCwgLnJhZGlvIHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5jb2wtc20tNiB7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gIFxyXG4gLmJ0bi1ncmF5e1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnRuLWJsdWV7ICAgIFxyXG4gICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnV0dG9uLWNlbnRlcntcclxuIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuXHJcbiAuYnV0dG9uLWxlZnR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gfVxyXG5cclxuLmJ1dHRvbi1yaWdodHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gXHJcbiAuYWNjb3JkaW9uLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nIC5hY2NvcmRpb24tdG9nZ2xlLmNvbGxhcHNlZCB7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZTpob3ZlcjphZnRlciB7XHJcbiAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmFjY29yZGlvbi5wYW5lbC1ncm91cCAucGFuZWwtaGVhZGluZyAuYWNjb3JkaW9uLXRvZ2dsZSB7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmdyYXl7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgICBjb2xvcjogIzVkYjJmZiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuaXRlbXtcclxuICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuIH1cclxuXHJcbiAuYm9keXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgIFxyXG4gfVxyXG4gXHJcbiAuaGVhZGVyLXRpdGxle1xyXG4gICAgIGZvbnQtc2l6ZToxOHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5mb3JtLWhlYWRpbmd7XHJcbiAgICAgZm9udC1zaXplOjE4cHggIWltcG9ydGFudDtcclxuIH0gICBcclxuIC8qIEJ1dHRvbnMgKi9cclxuIC5idG57XHJcbiAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuIH1cclxuIC8qIC9CdXR0b25zICovXHJcbiBcclxuIC8qIExpbmUgKi9cclxuIC5oci1ibHVleyAgICBcclxuICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDEzNCwgMTU4LCAxODApICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAvKiAvTGluZSAqL1xyXG4gXHJcbiAvKiBUZXh0Ym94ICovXHJcbiAuZm9ybWNvbnRyb2wsIHNlbGVjdHtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxcHggIWltcG9ydGFudDtcclxuICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLyogL1RleHRib3ggKi9cclxuIFxyXG4gLyogQXRrb3JlIGxvZ28gKi9cclxuIC50ZXh0e1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLnRleHQgaW1ne1xyXG4gICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgIGhlaWdodDogODBweDsgIFxyXG4gfVxyXG4gLyogL0F0a29yZSBsb2dvICovXHJcbiBcclxuIC8qIExhYmVscyAqL1xyXG4gLmxhYmVse1xyXG4gICAgIHBhZGRpbmc6NXB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAgICBcclxuIGxhYmVsIC5tYW5kYXRvcnl7XHJcbiAgICAgY29sb3I6cmVkO1xyXG4gICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAvKiAvTGFiZWxzICovIFxyXG4gXHJcbiAvKiBUYWJsZXMgICAgKi9cclxuIC50YWJsZT50Ym9keT50cj50ZHtcclxuICAgICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcclxuICAgICBsaW5lLWhlaWdodDogMS4yNTcxNDMgIWltcG9ydGFudDsgXHJcbiAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXHJcbiB9XHJcbiAvKiAvVGFibGVzICAgICovXHJcbiBcclxuIC8qIFZlcnRpY2FsIFRleHQgKi8gIFxyXG4gXHJcbiAgICBcclxuIC50ZXN0cm90YXRlIHB7XHJcbiAgICAgbGluZS1oZWlnaHQ6MTQ1cHggIWltcG9ydGFudDtcclxuICAgICBmb250LXNpemU6MTVweDtcclxuIH1cclxuIFxyXG4gLnRlc3Ryb3RhdGUgLnRlc3Rxe1xyXG4gICAgIGxpbmUtaGVpZ2h0OjQ4M3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC1zaXplOjE1cHg7XHJcbiB9XHJcbiBcclxuIC50ZXN0cm90YXRlIC50ZXN0cntcclxuICAgICBsaW5lLWhlaWdodDoxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gfVxyXG4gXHJcbiAudGVzdHJvdGF0ZSAudGVzdHB7XHJcbiAgICAgbGluZS1oZWlnaHQ6MTcwcHggIWltcG9ydGFudDtcclxuICAgICBmb250LXNpemU6MTVweDtcclxuIH1cclxuIFxyXG4gLyogL1ZlcnRpY2FsIFRleHQgKi8gXHJcbiBcclxuIC8qIFRleHRib3ggaW5wdXQgKi8gICBcclxuIC5pbnB1dCAuZm9ybWNvbnRyb2x7XHJcbiAgICAgd2lkdGg6NTBweCAhaW1wb3J0YW50OyBcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiB9XHJcbiAvKiAvVGV4dGJveCBpbnB1dCAqL1xyXG4gICAgXHJcbiAuZm9ybS1ncm91cHtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuIH1cclxuICAgIFxyXG4gLmZvcm0tY29udHJvbHtcclxuICAgICBwYWRkaW5nOjRweCAzcHggIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLyogUGluIEdhcCBEaWFncmFtICovICAgXHJcbiAucm93IC5waW4gaW1ne1xyXG4gICAgIHdpZHRoOjIzMHB4O1xyXG4gICAgIGhlaWdodDoyNDBweDtcclxuICAgICBtYXJnaW4tbGVmdDozMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OmF1dG8gIWltcG9ydGFudDsgXHJcbiB9XHJcbiAvKiAvUGluIEdhcCBEaWFncmFtICovIFxyXG4gXHJcbiAuZ2Fwe1xyXG4gICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gfVxyXG4gLyogQm9sdCB0b3JxdWUgc3BlY2lmaWNhdGlvbnMgKi8gICBcclxuIC5hZGp1c3R7XHJcbiAgICAgbWFyZ2luLWxlZnQ6MTBweCAhaW1wb3J0YW50O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDEwNDBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLyogL0JvbHQgdG9ycXVlIHNwZWNpZmljYXRpb25zICovXHJcbiBcclxuIC8qIEltYWdldXBsb2FkICAgICovXHJcbiB0ZCAuaW1nLWFkanVzdHtcclxuICAgICBtYXJnaW4tbGVmdDphdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OmF1dG8gIWltcG9ydGFudDtcclxuIH1cclxuIC8qIC9JbWFnZXVwbG9hZCAgICAqLyAgXHJcbiBcclxuICAgXHJcbiAuYWxlcnQtaGVhZGluZ3tcclxuICAgICBmb250LXNpemU6IDEycHg7XHJcbiB9XHJcbiBcclxuIC5hbGlnbi10ZXh0LXRvcHtcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wICFpbXBvcnRhbnQ7IFxyXG4gfVxyXG4gXHJcbiAudGV4dC1iaWd7XHJcbiAgICAgZm9udC1zaXplOjE2cHggIWltcG9ydGFudDtcclxuICAgICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuZm9ybS10aXRsZXsgICAgXHJcbiAgICAgY29sb3I6ICAjNWRiMmZmO1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzVkYjJmZjtcclxuIFxyXG4gICAgIC8qZGlzcGxheTogYmxvY2s7XHJcbiAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjN2UzNzk0OyovXHJcbiAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLyogIGNvbG9yOiAjNURCMkZGO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsqL1xyXG4gXHJcbiB9XHJcbiBcclxuIC5tYW5kYXRvcnl7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgY29sb3I6ICNGRjAwMDA7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gfVxyXG4gXHJcbiAuaHItZ3JheS10aGlja3sgICAgXHJcbiAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICMzMzMgIWltcG9ydGFudDtcclxuIH0gXHJcbiBcclxuIC5oci1ncmF5eyAgICBcclxuICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2UzNzk0ICFpbXBvcnRhbnQ7XHJcbiB9IFxyXG4gXHJcbiBpbnB1dHtcclxuICAgICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcbiBcclxuIC5tb2Nre1xyXG4gICAgIGNvbG9yOiByZWQ7ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLm1vY2stY29uZntcclxuICAgICBjb2xvcjogZ3JlZW47ICAgIFxyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmlucHJvZ3Jlc3N7XHJcbiAgICAgY29sb3I6IG9yYW5nZXJlZDsgICAgXHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAudGhyZWUtYm9yZGVyZWR7XHJcbiAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICM3ZTM3OTQ7Ki9cclxuIH1cclxuIFxyXG4gLnRleHQtY2VudGVye1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG4gLmNoZWNrYm94LWNlbnRlciB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAuZ3JheXsgICAgXHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5idG4tZ3JheXtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6ICM1ZGIyZmYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gXHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6aG92ZXI6YWZ0ZXIge1xyXG4gICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGUge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5hY2NvcmRpb24ucGFuZWwtZ3JvdXAgLnBhbmVsLWhlYWRpbmcgLmFjY29yZGlvbi10b2dnbGU6YWZ0ZXIge1xyXG4gICAgIGNvbG9yOiAjNWRiMmZmICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/pricebook/PriceBook/PriceBook-Services/view-pricebook-services/view-pricebook-services.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pricebook/PriceBook/PriceBook-Services/view-pricebook-services/view-pricebook-services.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ViewPricebookServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPricebookServicesComponent", function() { return ViewPricebookServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ViewPricebookServicesComponent = /** @class */ (function () {
    function ViewPricebookServicesComponent(beyond, router, formBuilder, activatedRoute, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.toastr = toastr;
        this.bellerImage1 = "assets/img/plumbing/House1.png";
        this.bellerImage2 = "assets/img/plumbing/House3.png";
        this.bellerImage3 = "assets/img/plumbing/pipe1.png";
        this.bellerImage4 = "assets/img/plumbing/plumbing1.png";
    }
    ViewPricebookServicesComponent.prototype.ngOnInit = function () {
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.beyond.beyondAdmin();
    };
    ViewPricebookServicesComponent.prototype.okPriceBook = function () {
        this.router.navigate(['/pricebook/listPriceBook']);
    };
    ViewPricebookServicesComponent.prototype.editPriceBook = function () {
        this.router.navigate(['/pricebook/editPriceBook']);
    };
    ViewPricebookServicesComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    ViewPricebookServicesComponent.prototype.list = function () {
        this.router.navigate(['/pricebook/listPriceBook']);
    };
    ViewPricebookServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-view-pricebook-services',
            template: __webpack_require__(/*! ./view-pricebook-services.component.html */ "./src/app/pricebook/PriceBook/PriceBook-Services/view-pricebook-services/view-pricebook-services.component.html"),
            styles: [__webpack_require__(/*! ./view-pricebook-services.component.scss */ "./src/app/pricebook/PriceBook/PriceBook-Services/view-pricebook-services/view-pricebook-services.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ViewPricebookServicesComponent);
    return ViewPricebookServicesComponent;
}());



/***/ }),

/***/ "./src/app/pricebook/excel.service.ts":
/*!********************************************!*\
  !*** ./src/app/pricebook/excel.service.ts ***!
  \********************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/pricebook/pricebook-layout/pricebook-layout.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pricebook/pricebook-layout/pricebook-layout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pricebook/pricebook-layout/pricebook-layout.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pricebook/pricebook-layout/pricebook-layout.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNlYm9vay9wcmljZWJvb2stbGF5b3V0L3ByaWNlYm9vay1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pricebook/pricebook-layout/pricebook-layout.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pricebook/pricebook-layout/pricebook-layout.component.ts ***!
  \**************************************************************************/
/*! exports provided: PricebookLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricebookLayoutComponent", function() { return PricebookLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricebookLayoutComponent = /** @class */ (function () {
    function PricebookLayoutComponent() {
    }
    PricebookLayoutComponent.prototype.ngOnInit = function () {
    };
    PricebookLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricebook-layout',
            template: __webpack_require__(/*! ./pricebook-layout.component.html */ "./src/app/pricebook/pricebook-layout/pricebook-layout.component.html"),
            styles: [__webpack_require__(/*! ./pricebook-layout.component.scss */ "./src/app/pricebook/pricebook-layout/pricebook-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricebookLayoutComponent);
    return PricebookLayoutComponent;
}());



/***/ }),

/***/ "./src/app/pricebook/pricebook-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pricebook/pricebook-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PricebookRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricebookRoutingModule", function() { return PricebookRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _PriceBook_PriceBook_Services_view_item_view_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PriceBook/PriceBook-Services/view-item/view-item.component */ "./src/app/pricebook/PriceBook/PriceBook-Services/view-item/view-item.component.ts");
/* harmony import */ var _PriceBook_PriceBook_Services_list_pricebook_services_list_pricebook_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PriceBook/PriceBook-Services/list-pricebook-services/list-pricebook-services.component */ "./src/app/pricebook/PriceBook/PriceBook-Services/list-pricebook-services/list-pricebook-services.component.ts");
/* harmony import */ var _PriceBook_PriceBook_Services_add_pricebook_services_add_pricebook_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PriceBook/PriceBook-Services/add-pricebook-services/add-pricebook-services.component */ "./src/app/pricebook/PriceBook/PriceBook-Services/add-pricebook-services/add-pricebook-services.component.ts");
/* harmony import */ var _PriceBook_PriceBook_Services_view_pricebook_services_view_pricebook_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PriceBook/PriceBook-Services/view-pricebook-services/view-pricebook-services.component */ "./src/app/pricebook/PriceBook/PriceBook-Services/view-pricebook-services/view-pricebook-services.component.ts");
/* harmony import */ var _PriceBook_PriceBook_Services_edit_pricebook_services_edit_pricebook_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PriceBook/PriceBook-Services/edit-pricebook-services/edit-pricebook-services.component */ "./src/app/pricebook/PriceBook/PriceBook-Services/edit-pricebook-services/edit-pricebook-services.component.ts");
/* harmony import */ var _pricebook_layout_pricebook_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricebook-layout/pricebook-layout.component */ "./src/app/pricebook/pricebook-layout/pricebook-layout.component.ts");





// import { AddLabourRateComponent } from './proz-account-settings/price-book/pricebook-labor-rates/add-labour-rate/add-labour-rate.component';
// import { ViewLabourRateComponent } from './proz-account-settings/price-book/pricebook-labor-rates/view-labour-rate/view-labour-rate.component';
// import { EditLabourRateComponent } from './proz-account-settings/price-book/pricebook-labor-rates/edit-labour-rate/edit-labour-rate.component';




// import { ListLabourRatesComponent } from './proz-account-settings/price-book/pricebook-labor-rates/list-labour-rates/list-labour-rates.component';
// import { ListPbServiceCategoriesComponent } from './proz-account-settings/price-book/pb-service-categories/list-pb-service-categories/list-pb-service-categories.component';
var routes = [
    {
        path: '', component: _pricebook_layout_pricebook_layout_component__WEBPACK_IMPORTED_MODULE_8__["PricebookLayoutComponent"],
        children: [
            // {
            //   path: 'listLaborRates',
            //   component: ListLabourRatesComponent
            // },
            // {
            //   path: 'addLaborRate',
            //   component: AddLabourRateComponent
            // },
            // {
            //   path: 'viewLaborRate/:id',
            //   component: ViewLabourRateComponent
            // },
            // {
            //   path: 'editLaborRate/:id',
            //   component: EditLabourRateComponent
            // },
            {
                path: 'listPriceBook',
                component: _PriceBook_PriceBook_Services_list_pricebook_services_list_pricebook_services_component__WEBPACK_IMPORTED_MODULE_4__["ListPricebookServicesComponent"]
            },
            {
                path: 'addPriceBook',
                component: _PriceBook_PriceBook_Services_add_pricebook_services_add_pricebook_services_component__WEBPACK_IMPORTED_MODULE_5__["AddPricebookServicesComponent"]
            },
            {
                path: 'viewPriceBook',
                component: _PriceBook_PriceBook_Services_view_pricebook_services_view_pricebook_services_component__WEBPACK_IMPORTED_MODULE_6__["ViewPricebookServicesComponent"]
            },
            {
                path: 'editPriceBook/:serviceId',
                component: _PriceBook_PriceBook_Services_edit_pricebook_services_edit_pricebook_services_component__WEBPACK_IMPORTED_MODULE_7__["EditPricebookServicesComponent"]
            },
            {
                path: 'viewItem/:serviceId',
                component: _PriceBook_PriceBook_Services_view_item_view_item_component__WEBPACK_IMPORTED_MODULE_3__["ViewItemComponent"]
            },
        ]
    }
];
var PricebookRoutingModule = /** @class */ (function () {
    function PricebookRoutingModule() {
    }
    PricebookRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PricebookRoutingModule);
    return PricebookRoutingModule;
}());



/***/ }),

/***/ "./src/app/pricebook/pricebook.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pricebook/pricebook.module.ts ***!
  \***********************************************/
/*! exports provided: PricebookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricebookModule", function() { return PricebookModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/prozadmin-sidemenu/proz-sidemenu.module */ "./src/app/common/prozadmin-sidemenu/proz-sidemenu.module.ts");
/* harmony import */ var _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/commonvanlynkheader/commonvanlynkheader.module */ "./src/app/common/commonvanlynkheader/commonvanlynkheader.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pricebook_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pricebook-routing.module */ "./src/app/pricebook/pricebook-routing.module.ts");
/* harmony import */ var _pricebook_layout_pricebook_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricebook-layout/pricebook-layout.component */ "./src/app/pricebook/pricebook-layout/pricebook-layout.component.ts");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-completer */ "./node_modules/ng2-completer/esm5/ng2-completer.js");
/* harmony import */ var _PriceBook_PriceBook_Services_view_item_view_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PriceBook/PriceBook-Services/view-item/view-item.component */ "./src/app/pricebook/PriceBook/PriceBook-Services/view-item/view-item.component.ts");
/* harmony import */ var _PriceBook_PriceBook_Services_list_pricebook_services_list_pricebook_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PriceBook/PriceBook-Services/list-pricebook-services/list-pricebook-services.component */ "./src/app/pricebook/PriceBook/PriceBook-Services/list-pricebook-services/list-pricebook-services.component.ts");
/* harmony import */ var _PriceBook_PriceBook_Services_add_pricebook_services_add_pricebook_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PriceBook/PriceBook-Services/add-pricebook-services/add-pricebook-services.component */ "./src/app/pricebook/PriceBook/PriceBook-Services/add-pricebook-services/add-pricebook-services.component.ts");
/* harmony import */ var _PriceBook_PriceBook_Services_view_pricebook_services_view_pricebook_services_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PriceBook/PriceBook-Services/view-pricebook-services/view-pricebook-services.component */ "./src/app/pricebook/PriceBook/PriceBook-Services/view-pricebook-services/view-pricebook-services.component.ts");
/* harmony import */ var _PriceBook_PriceBook_Services_edit_pricebook_services_edit_pricebook_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PriceBook/PriceBook-Services/edit-pricebook-services/edit-pricebook-services.component */ "./src/app/pricebook/PriceBook/PriceBook-Services/edit-pricebook-services/edit-pricebook-services.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _utilities_twoDigitdecimal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utilities/twoDigitdecimal */ "./src/utilities/twoDigitdecimal.ts");

















var PricebookModule = /** @class */ (function () {
    function PricebookModule() {
    }
    PricebookModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_pricebook_layout_pricebook_layout_component__WEBPACK_IMPORTED_MODULE_8__["PricebookLayoutComponent"],
                _PriceBook_PriceBook_Services_view_item_view_item_component__WEBPACK_IMPORTED_MODULE_10__["ViewItemComponent"],
                _PriceBook_PriceBook_Services_list_pricebook_services_list_pricebook_services_component__WEBPACK_IMPORTED_MODULE_11__["ListPricebookServicesComponent"],
                _PriceBook_PriceBook_Services_add_pricebook_services_add_pricebook_services_component__WEBPACK_IMPORTED_MODULE_12__["AddPricebookServicesComponent"],
                _PriceBook_PriceBook_Services_view_pricebook_services_view_pricebook_services_component__WEBPACK_IMPORTED_MODULE_13__["ViewPricebookServicesComponent"],
                _PriceBook_PriceBook_Services_edit_pricebook_services_edit_pricebook_services_component__WEBPACK_IMPORTED_MODULE_14__["EditPricebookServicesComponent"], _utilities_twoDigitdecimal__WEBPACK_IMPORTED_MODULE_16__["TwoDigitDecimaNumberDirective"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pricebook_routing_module__WEBPACK_IMPORTED_MODULE_7__["PricebookRoutingModule"],
                _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_3__["ProzSidemenuModule"],
                _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_4__["CommonvanlynkheaderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng2_completer__WEBPACK_IMPORTED_MODULE_9__["Ng2CompleterModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_15__["NgxMaskModule"]
            ]
        })
    ], PricebookModule);
    return PricebookModule;
}());



/***/ }),

/***/ "./src/utilities/twoDigitdecimal.ts":
/*!******************************************!*\
  !*** ./src/utilities/twoDigitdecimal.ts ***!
  \******************************************/
/*! exports provided: TwoDigitDecimaNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoDigitDecimaNumberDirective", function() { return TwoDigitDecimaNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TwoDigitDecimaNumberDirective = /** @class */ (function () {
    function TwoDigitDecimaNumberDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^\d*\.?\d{0,2}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
    }
    TwoDigitDecimaNumberDirective.prototype.onKeyDown = function (event) {
        console.log("KEYPRES" + this.el.nativeElement.value);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var position = this.el.nativeElement.selectionStart;
        var next = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TwoDigitDecimaNumberDirective.prototype, "onKeyDown", null);
    TwoDigitDecimaNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTwoDigitDecimaNumber]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TwoDigitDecimaNumberDirective);
    return TwoDigitDecimaNumberDirective;
}());



/***/ })

}]);
//# sourceMappingURL=pricebook-pricebook-module.js.map