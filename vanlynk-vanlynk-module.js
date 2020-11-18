(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vanlynk-vanlynk-module"],{

/***/ "./src/app/common/commontopprozpurpleheader/commontopprozpurpleheader.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/common/commontopprozpurpleheader/commontopprozpurpleheader.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-custom{\r\n    background-color: #7e3794;\r\n}\r\n\r\n.build{\r\n    text-align: right;\r\n    color: white;\r\n    padding: 5px 15px;\r\n}\r\n\r\n.navbar .navbar-brand small img {\r\n    height: 40px !important;\r\n    width: 120px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbW1vbnRvcHByb3pwdXJwbGVoZWFkZXIvY29tbW9udG9wcHJvenB1cnBsZWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSx3QkFBd0I7SUFDeEIsd0JBQXdCO0NBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2NvbW1vbnRvcHByb3pwdXJwbGVoZWFkZXIvY29tbW9udG9wcHJvenB1cnBsZWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1jdXN0b217XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2UzNzk0O1xyXG59XHJcblxyXG4uYnVpbGR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcblxyXG4ubmF2YmFyIC5uYXZiYXItYnJhbmQgc21hbGwgaW1nIHtcclxuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/commontopprozpurpleheader/commontopprozpurpleheader.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/common/commontopprozpurpleheader/commontopprozpurpleheader.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n    <div class=\"navbar navbar-custom\">\r\n        <div class=\"navbar-container\">\r\n            <!-- Navbar Barnd -->\r\n            <div class=\"navbar-header pull-left\">\r\n                <a href=\"#\" class=\"navbar-brand\">\r\n                    <small>\r\n                        <img src=\"/assets/img/logo/topproz_logo2.png\" alt=\"\" />\r\n                    </small>\r\n                </a>\r\n            </div>\r\n            <!-- /Navbar Barnd -->\r\n            <!-- Sidebar Collapse -->\r\n            <div class=\"sidebar-collapse\" id=\"sidebar-collapse\">\r\n                <i class=\"collapse-icon fa fa-bars\"></i>\r\n            </div>\r\n            <!-- /Sidebar Collapse -->\r\n\r\n            <!-- VanLynk, Lead Gen, Welcome, Role --->\r\n            <div class=\"navbar-header pull-right\">\r\n                <div class=\"navbar-account\">\r\n                    <div class=\"build\">\r\n                        <span>Welcome &nbsp; {{name}}; &nbsp; Role=\r\n                            {{role}};<br/>\r\n                        VanLynk=N; &nbsp; Lead Gen=Y; &nbsp;</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /VanLynk, Lead Gen, Welcome, Role --->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/common/commontopprozpurpleheader/commontopprozpurpleheader.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/common/commontopprozpurpleheader/commontopprozpurpleheader.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CommontopprozpurpleheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommontopprozpurpleheaderComponent", function() { return CommontopprozpurpleheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");









var CommontopprozpurpleheaderComponent = /** @class */ (function () {
    function CommontopprozpurpleheaderComponent(router, formBuilder, activatedRoute, toastr, http, authService, spinner) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.http = http;
        this.authService = authService;
        this.spinner = spinner;
    }
    CommontopprozpurpleheaderComponent.prototype.ngOnInit = function () {
        this.loginData = JSON.parse(localStorage.getItem("login"));
        console.log("loginData" + this.loginData);
        this.name = this.loginData.name;
        console.log("loginData" + this.name);
        this.role = this.loginData.role;
        this.getRoleData(this.role);
    };
    CommontopprozpurpleheaderComponent.prototype.getRoleData = function (roleCode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getRoleData' + "/" + roleCode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status === 200) {
                _this.roleName = response.response[0].roleDescription;
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    CommontopprozpurpleheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commontopprozpurpleheader',
            template: __webpack_require__(/*! ./commontopprozpurpleheader.component.html */ "./src/app/common/commontopprozpurpleheader/commontopprozpurpleheader.component.html"),
            styles: [__webpack_require__(/*! ./commontopprozpurpleheader.component.css */ "./src/app/common/commontopprozpurpleheader/commontopprozpurpleheader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], CommontopprozpurpleheaderComponent);
    return CommontopprozpurpleheaderComponent;
}());



/***/ }),

/***/ "./src/app/common/commontopprozpurpleheader/commontopprozpurpleheader.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/common/commontopprozpurpleheader/commontopprozpurpleheader.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CommontopprozpurpleheaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommontopprozpurpleheaderModule", function() { return CommontopprozpurpleheaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _commontopprozpurpleheader_commontopprozpurpleheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commontopprozpurpleheader/commontopprozpurpleheader.component */ "./src/app/common/commontopprozpurpleheader/commontopprozpurpleheader.component.ts");




var CommontopprozpurpleheaderModule = /** @class */ (function () {
    function CommontopprozpurpleheaderModule() {
    }
    CommontopprozpurpleheaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_commontopprozpurpleheader_commontopprozpurpleheader_component__WEBPACK_IMPORTED_MODULE_3__["CommontopprozpurpleheaderComponent"]],
            exports: [_commontopprozpurpleheader_commontopprozpurpleheader_component__WEBPACK_IMPORTED_MODULE_3__["CommontopprozpurpleheaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], CommontopprozpurpleheaderModule);
    return CommontopprozpurpleheaderModule;
}());



/***/ }),

/***/ "./src/app/common/vanlynk-sidemenu/vanlynk-sidemenu.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/common/vanlynk-sidemenu/vanlynk-sidemenu.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN CONTAINER -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n\r\n      <!-- Page Sidebar -->\r\n      <div class=\"page-sidebar\" id=\"sidebar\">\r\n          <!-- BEGIN SIDEBAR -->\r\n          <div class=\"sidebar-header-wrapper\">\r\n              <input type=\"text\" class=\"searchinput\" />\r\n              <i class=\"searchicon fa fa-search\"></i>\r\n              <div class=\"searchhelper\">Search Reports, Charts, Emails or Notifications</div>\r\n          </div>\r\n          <!-- /Page Sidebar Header -->\r\n          <!-- Sidebar Menu -->\r\n          <ul class=\"nav sidebar-menu\">\r\n              <!--Dashboard-->\r\n              <li class=\"active\">\r\n                  <!-- <a>\r\n                      <i class=\"menu-icon glyphicon glyphicon-home\"></i>\r\n                      <span class=\"menu-text\"> Dashboard </span>\r\n                  </a> -->\r\n                  <a href=\"#\">\r\n                      <i class=\"menu-icon glyphicon glyphicon-home\"></i>\r\n                      <span class=\"menu-text\">Dashboard</span>\r\n                  </a>\r\n              </li>\r\n              <!--Master-->\r\n\r\n              <!-- DispatchBoard -->\r\n              <li>\r\n                  <a href=\"#\">\r\n                      <i class=\"menu-icon fa fa-group\"></i>\r\n                      <span class=\"menu-text\"> Dispatchboard </span>\r\n                  </a>\r\n              </li>\r\n              <!-- DispatchBoard -->\r\n\r\n              <!--Proz-->\r\n\r\n\r\n              <!--Project Leads-->\r\n              <li>\r\n                  <a href=\"#\" class=\"menu-dropdown\">\r\n                      <i class=\"menu-icon fa fa-table\"></i>\r\n                      <span class=\"menu-text\"> Customers </span>\r\n\r\n                      <i class=\"menu-expand\"></i>\r\n                  </a>\r\n                  <ul class=\"submenu\">\r\n                      <li>\r\n                          <a [routerLink]=\"['/proz/listLeads']\">\r\n                              <span class=\"menu-text\">List Customers</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n                  <ul class=\"submenu\">\r\n                      <li>\r\n                          <a [routerLink]=\"['/proz/listWorkOrders']\">\r\n                              <span class=\"menu-text\">Work Orders</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n                  <ul class=\"submenu\">\r\n                      <li>\r\n                          <a [routerLink]=\"['/proz/listEstimates']\">\r\n                              <span class=\"menu-text\">Estimates</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n                  <ul class=\"submenu\">\r\n                      <li>\r\n                          <a href=\"#\">\r\n                              <span class=\"menu-text\">Invoices</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul>\r\n              </li>\r\n\r\n              <!--Job Cards-->\r\n              <!-- <li>\r\n                  <a href=\"#\" class=\"menu-dropdown\">\r\n                      <i class=\"menu-icon glyphicon glyphicon-briefcase\"></i>\r\n                      <span class=\"menu-text\"> Work Orders/Jobs </span>\r\n\r\n                      <i class=\"menu-expand\"></i>\r\n                  </a> -->\r\n                  <!-- <ul class=\"submenu\">\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\"> List Job Cards</span>\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\"> Create Job Card</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul> -->\r\n              <!-- </li> -->\r\n\r\n              <!--Estimates-->\r\n              <!-- <li>\r\n                  <a href=\"#\" class=\"menu-dropdown\">\r\n                      <i class=\"menu-icon fa fa-table\"></i>\r\n                      <span class=\"menu-text\"> Estimates </span>\r\n\r\n                      <i class=\"menu-expand\"></i>\r\n                  </a> -->\r\n                  <!-- <ul class=\"submenu\">\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\">Submit Estimate</span>\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\">List/Review Estimates</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul> -->\r\n              <!-- </li> -->\r\n\r\n              <!--Invoice/Get Paid-->\r\n              <!-- <li>\r\n                  <a href=\"#\" class=\"menu-dropdown\">\r\n                      <i class=\"menu-icon glyphicon glyphicon-usd\"></i>\r\n                      <span class=\"menu-text\"> Invoice</span>\r\n\r\n                      <i class=\"menu-expand\"></i>\r\n                  </a> -->\r\n                  <!-- <ul class=\"submenu\">\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\"> List Invoices</span>\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\"> Create Invoice</span>\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\">Payments (of Quote)</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul> -->\r\n              <!-- </li> -->\r\n\r\n              <!--Payments-->\r\n              <li>\r\n                  <a>\r\n                      <i class=\"menu-icon glyphicon glyphicon-cog\"></i>\r\n                      <span class=\"menu-text\"> Payments </span>\r\n                  </a>\r\n              </li>\r\n\r\n              <!--InVantory-->\r\n              <li>\r\n                  <a href=\"#\" class=\"menu-dropdown\">\r\n                      <i class=\"menu-icon glyphicon glyphicon-briefcase\"></i>\r\n                      <span class=\"menu-text\"> InVantory </span>\r\n\r\n                      <i class=\"menu-expand\"></i>\r\n                  </a>\r\n                  <!-- <ul class=\"submenu\">\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\"> View/List Vans</span>\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\"> Add Van</span>\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\"> View/List Inventory</span>\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\"> Add Inventory</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul> -->\r\n              </li>\r\n              <!--PriceBook-->\r\n              <li>\r\n                  <a>\r\n                      <i class=\"menu-icon glyphicon glyphicon-book\"></i>\r\n                      <span class=\"menu-text\"> PriceBook </span>\r\n                  </a>\r\n              </li>\r\n              <!--Equipment-->\r\n              <li>\r\n                  <a>\r\n                      <i class=\"menu-icon glyphicon glyphicon-book\"></i>\r\n                      <span class=\"menu-text\"> Equipment </span>\r\n                  </a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#\" class=\"menu-dropdown\">\r\n                      <i class=\"menu-icon glyphicon glyphicon-file\"></i>\r\n                      <span class=\"menu-text\"> Reports </span>\r\n\r\n                      <i class=\"menu-expand\"></i>\r\n                  </a>\r\n                  <!-- <ul class=\"submenu\">\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\"> Invoice Staff</span>\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\"> Commissions</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul> -->\r\n              </li>\r\n              <!--Staff-->\r\n              <li>\r\n                  <a href=\"#\" class=\"menu-dropdown\">\r\n                      <i class=\"menu-icon fa fa-group\"></i>\r\n                      <span class=\"menu-text\"> Staff </span>\r\n\r\n                      <i class=\"menu-expand\"></i>\r\n                  </a>\r\n                  <!-- <ul class=\"submenu\">\r\n                      <li>\r\n                          <a [routerLink]=\"['/proz/addStaff']\">\r\n                              <span class=\"menu-text\"> Create Staff</span>\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a [routerLink]=\"['/proz/listStaff']\">\r\n                              <span class=\"menu-text\"> View/List Staff</span>\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\"> View/List Invoices</span>\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\"> Raise Invoice</span>\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a>\r\n                              <span class=\"menu-text\"> Raise Reimbursement</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul> -->\r\n              </li>\r\n              <!--Commissions-->\r\n              <!--Purchase Order-->\r\n              <li>\r\n                  <a>\r\n                      <i class=\"menu-icon glyphicon glyphicon-book\"></i>\r\n                      <span class=\"menu-text\"> Purchase Order </span>\r\n                  </a>\r\n              </li>\r\n              <!--Accounting-->\r\n              <li>\r\n                  <a>\r\n                      <i class=\"menu-icon glyphicon glyphicon-book\"></i>\r\n                      <span class=\"menu-text\">Accounting </span>\r\n                  </a>\r\n              </li>\r\n              <!--Manage Your Settings-->\r\n              <li>\r\n                  <a href=\"#\" class=\"menu-dropdown\">\r\n                      <i class=\"menu-icon glyphicon glyphicon-cog\"></i>\r\n                      <span class=\"menu-text\"> Account Settings </span>\r\n\r\n                      <i class=\"menu-expand\"></i>\r\n                  </a>\r\n                  <!-- <ul class=\"submenu\">\r\n                      <li>\r\n                          <a [routerLink]=\"['/proz/myProzProfile',user.loginCode]\">\r\n                              <span class=\"menu-text\">My Profile</span>\r\n                          </a>\r\n                      </li>\r\n                      <li>\r\n                          <a [routerLink]=\"['/proz/staffSettings']\">\r\n                              <span class=\"menu-text\">Staff Settings</span>\r\n                          </a>\r\n                      </li>\r\n                  </ul> -->\r\n              </li>\r\n\r\n              <li>\r\n                  <a (click)=\"logout()\">\r\n                      <i class=\"menu-icon glyphicon glyphicon-cog\"></i>\r\n                      <span class=\"menu-text\"> Logout </span>\r\n                  </a>\r\n              </li>\r\n          </ul>\r\n          <!-- /Sidebar Menu -->\r\n      </div>\r\n  </div>\r\n\r\n\r\n  <!-- <div id=\"chatbar\" class=\"page-chatbar\">\r\n      <div class=\"chatbar-contacts\">\r\n          <div class=\"contacts-search\">\r\n              <input type=\"text\" class=\"searchinput\" placeholder=\"Search Contacts\" />\r\n              <i class=\"searchicon fa fa-search\"></i>\r\n              <div class=\"searchhelper\">Search Your Contacts and Chat History</div>\r\n          </div>\r\n          <ul class=\"contacts-list\">\r\n              <li class=\"contact\">\r\n                  <div class=\"contact-avatar\">\r\n                      <img src=\"/assets/img/avatars/divyia.jpg\" />\r\n                  </div>\r\n                  <div class=\"contact-info\">\r\n                      <div class=\"contact-name\">Divyia Philips</div>\r\n                      <div class=\"contact-status\">\r\n                          <div class=\"online\"></div>\r\n                          <div class=\"status\">online</div>\r\n                      </div>\r\n                      <div class=\"last-chat-time\">\r\n                          last week\r\n                      </div>\r\n                  </div>\r\n              </li>\r\n              <li class=\"contact\">\r\n                  <div class=\"contact-avatar\">\r\n                      <img src=\"/assets/img/avatars/Nicolai-Larson.jpg\" />\r\n                  </div>\r\n                  <div class=\"contact-info\">\r\n                      <div class=\"contact-name\">Adam Johnson</div>\r\n                      <div class=\"contact-status\">\r\n                          <div class=\"offline\"></div>\r\n                          <div class=\"status\">left 4 mins ago</div>\r\n                      </div>\r\n                      <div class=\"last-chat-time\">\r\n                          today\r\n                      </div>\r\n                  </div>\r\n              </li>\r\n              <li class=\"contact\">\r\n                  <div class=\"contact-avatar\">\r\n                      <img src=\"/assets/img/avatars/John-Smith.jpg\" />\r\n                  </div>\r\n                  <div class=\"contact-info\">\r\n                      <div class=\"contact-name\">John Smith</div>\r\n                      <div class=\"contact-status\">\r\n                          <div class=\"online\"></div>\r\n                          <div class=\"status\">online</div>\r\n                      </div>\r\n                      <div class=\"last-chat-time\">\r\n                          1:57 am\r\n                      </div>\r\n                  </div>\r\n              </li>\r\n              <li class=\"contact\">\r\n                  <div class=\"contact-avatar\">\r\n                      <img src=\"/assets/img/avatars/Osvaldus-Valutis.jpg\" />\r\n                  </div>\r\n                  <div class=\"contact-info\">\r\n                      <div class=\"contact-name\">Osvaldus Valutis</div>\r\n                      <div class=\"contact-status\">\r\n                          <div class=\"online\"></div>\r\n                          <div class=\"status\">online</div>\r\n                      </div>\r\n                      <div class=\"last-chat-time\">\r\n                          today\r\n                      </div>\r\n                  </div>\r\n              </li>\r\n              <li class=\"contact\">\r\n                  <div class=\"contact-avatar\">\r\n                      <img src=\"/assets/img/avatars/Javi-Jimenez.jpg\" />\r\n                  </div>\r\n                  <div class=\"contact-info\">\r\n                      <div class=\"contact-name\">Javi Jimenez</div>\r\n                      <div class=\"contact-status\">\r\n                          <div class=\"online\"></div>\r\n                          <div class=\"status\">online</div>\r\n                      </div>\r\n                      <div class=\"last-chat-time\">\r\n                          today\r\n                      </div>\r\n                  </div>\r\n              </li>\r\n              <li class=\"contact\">\r\n                  <div class=\"contact-avatar\">\r\n                      <img src=\"/assets/img/avatars/Stephanie-Walter.jpg\" />\r\n                  </div>\r\n                  <div class=\"contact-info\">\r\n                      <div class=\"contact-name\">Stephanie Walter</div>\r\n                      <div class=\"contact-status\">\r\n                          <div class=\"online\"></div>\r\n                          <div class=\"status\">online</div>\r\n                      </div>\r\n                      <div class=\"last-chat-time\">\r\n                          yesterday\r\n                      </div>\r\n                  </div>\r\n              </li>\r\n              <li class=\"contact\">\r\n                  <div class=\"contact-avatar\">\r\n                      <img src=\"/assets/img/avatars/Sergey-Azovskiy.jpg\" />\r\n                  </div>\r\n                  <div class=\"contact-info\">\r\n                      <div class=\"contact-name\">Sergey Azovskiy</div>\r\n                      <div class=\"contact-status\">\r\n                          <div class=\"offline\"></div>\r\n                          <div class=\"status\">offline since oct 24</div>\r\n                      </div>\r\n                      <div class=\"last-chat-time\">\r\n                          22 oct\r\n                      </div>\r\n                  </div>\r\n              </li>\r\n              <li class=\"contact\">\r\n                  <div class=\"contact-avatar\">\r\n                      <img src=\"/assets/img/avatars/Lee-Munroe.jpg\" />\r\n                  </div>\r\n                  <div class=\"contact-info\">\r\n                      <div class=\"contact-name\">Lee Munroe</div>\r\n                      <div class=\"contact-status\">\r\n                          <div class=\"online\"></div>\r\n                          <div class=\"status\">online</div>\r\n                      </div>\r\n                      <div class=\"last-chat-time\">\r\n                          today\r\n                      </div>\r\n                  </div>\r\n              </li>\r\n              <li class=\"contact\">\r\n                  <div class=\"contact-avatar\">\r\n                      <img src=\"/assets/img/avatars/divyia.jpg\" />\r\n                  </div>\r\n                  <div class=\"contact-info\">\r\n                      <div class=\"contact-name\">Divyia Philips</div>\r\n                      <div class=\"contact-status\">\r\n                          <div class=\"online\"></div>\r\n                          <div class=\"status\">online</div>\r\n                      </div>\r\n                      <div class=\"last-chat-time\">\r\n                          last week\r\n                      </div>\r\n                  </div>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n      <div class=\"chatbar-messages\" style=\"display: none;\">\r\n          <div class=\"messages-contact\">\r\n              <div class=\"contact-avatar\">\r\n                  <img src=\"/assets/img/avatars/divyia.jpg\" />\r\n              </div>\r\n              <div class=\"contact-info\">\r\n                  <div class=\"contact-name\">Divyia Philips</div>\r\n                  <div class=\"contact-status\">\r\n                      <div class=\"online\"></div>\r\n                      <div class=\"status\">online</div>\r\n                  </div>\r\n                  <div class=\"last-chat-time\">\r\n                      a moment ago\r\n                  </div>\r\n                  <div class=\"back\">\r\n                      <i class=\"fa fa-arrow-circle-left\"></i>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <ul class=\"messages-list\">\r\n              <li class=\"message\">\r\n                  <div class=\"message-info\">\r\n                      <div class=\"bullet\"></div>\r\n                      <div class=\"contact-name\">Me</div>\r\n                      <div class=\"message-time\">10:14 AM, Today</div>\r\n                  </div>\r\n                  <div class=\"message-body\">\r\n                      Hi, Hope all is good. Are we meeting today?\r\n                  </div>\r\n              </li>\r\n              <li class=\"message reply\">\r\n                  <div class=\"message-info\">\r\n                      <div class=\"bullet\"></div>\r\n                      <div class=\"contact-name\">Divyia</div>\r\n                      <div class=\"message-time\">10:15 AM, Today</div>\r\n                  </div>\r\n                  <div class=\"message-body\">\r\n                      Hi, Hope all is good. Are we meeting today?\r\n                  </div>\r\n              </li>\r\n              <li class=\"message\">\r\n                  <div class=\"message-info\">\r\n                      <div class=\"bullet\"></div>\r\n                      <div class=\"contact-name\">Me</div>\r\n                      <div class=\"message-time\">10:14 AM, Today</div>\r\n                  </div>\r\n                  <div class=\"message-body\">\r\n                      Hi, Hope all is good. Are we meeting today?\r\n                  </div>\r\n              </li>\r\n              <li class=\"message reply\">\r\n                  <div class=\"message-info\">\r\n                      <div class=\"bullet\"></div>\r\n                      <div class=\"contact-name\">Divyia</div>\r\n                      <div class=\"message-time\">10:15 AM, Today</div>\r\n                  </div>\r\n                  <div class=\"message-body\">\r\n                      Hi, Hope all is good. Are we meeting today?\r\n                  </div>\r\n              </li>\r\n              <li class=\"message\">\r\n                  <div class=\"message-info\">\r\n                      <div class=\"bullet\"></div>\r\n                      <div class=\"contact-name\">Me</div>\r\n                      <div class=\"message-time\">10:14 AM, Today</div>\r\n                  </div>\r\n                  <div class=\"message-body\">\r\n                      Hi, Hope all is good. Are we meeting today?\r\n                  </div>\r\n              </li>\r\n              <li class=\"message reply\">\r\n                  <div class=\"message-info\">\r\n                      <div class=\"bullet\"></div>\r\n                      <div class=\"contact-name\">Divyia</div>\r\n                      <div class=\"message-time\">10:15 AM, Today</div>\r\n                  </div>\r\n                  <div class=\"message-body\">\r\n                      Hi, Hope all is good. Are we meeting today?\r\n                  </div>\r\n              </li>\r\n          </ul>\r\n          <div class=\"send-message\">\r\n              <span class=\"input-icon icon-right\">\r\n                  <textarea rows=\"4\" class=\"form-control\" placeholder=\"Type your message\"></textarea>\r\n                  <i class=\"fa fa-camera themeprimary\"></i>\r\n              </span>\r\n          </div>\r\n      </div>\r\n  </div> -->\r\n</div>\r\n\r\n\r\n<!--END SIDEBAR -->\r\n<!-- BEGIN PAGE -->"

/***/ }),

/***/ "./src/app/common/vanlynk-sidemenu/vanlynk-sidemenu.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/common/vanlynk-sidemenu/vanlynk-sidemenu.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi92YW5seW5rLXNpZGVtZW51L3Zhbmx5bmstc2lkZW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/common/vanlynk-sidemenu/vanlynk-sidemenu.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/common/vanlynk-sidemenu/vanlynk-sidemenu.component.ts ***!
  \***********************************************************************/
/*! exports provided: VanlynkSidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanlynkSidemenuComponent", function() { return VanlynkSidemenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VanlynkSidemenuComponent = /** @class */ (function () {
    function VanlynkSidemenuComponent() {
    }
    VanlynkSidemenuComponent.prototype.ngOnInit = function () {
    };
    VanlynkSidemenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanlynk-sidemenu',
            template: __webpack_require__(/*! ./vanlynk-sidemenu.component.html */ "./src/app/common/vanlynk-sidemenu/vanlynk-sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./vanlynk-sidemenu.component.scss */ "./src/app/common/vanlynk-sidemenu/vanlynk-sidemenu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VanlynkSidemenuComponent);
    return VanlynkSidemenuComponent;
}());



/***/ }),

/***/ "./src/app/common/vanlynk-sidemenu/vanlynk-sidemenu.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/common/vanlynk-sidemenu/vanlynk-sidemenu.module.ts ***!
  \********************************************************************/
/*! exports provided: VanlynkSidemenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanlynkSidemenuModule", function() { return VanlynkSidemenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _vanlynk_sidemenu_vanlynk_sidemenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vanlynk-sidemenu/vanlynk-sidemenu.component */ "./src/app/common/vanlynk-sidemenu/vanlynk-sidemenu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var VanlynkSidemenuModule = /** @class */ (function () {
    function VanlynkSidemenuModule() {
    }
    VanlynkSidemenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_vanlynk_sidemenu_vanlynk_sidemenu_component__WEBPACK_IMPORTED_MODULE_3__["VanlynkSidemenuComponent"]],
            exports: [_vanlynk_sidemenu_vanlynk_sidemenu_component__WEBPACK_IMPORTED_MODULE_3__["VanlynkSidemenuComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], VanlynkSidemenuModule);
    return VanlynkSidemenuModule;
}());



/***/ }),

/***/ "./src/app/vanlynk/vanlynk-dashboard/vanlynk-dashboard.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/vanlynk/vanlynk-dashboard/vanlynk-dashboard.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-vanlynk-sidemenu></app-vanlynk-sidemenu>\r\n"

/***/ }),

/***/ "./src/app/vanlynk/vanlynk-dashboard/vanlynk-dashboard.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/vanlynk/vanlynk-dashboard/vanlynk-dashboard.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zhbmx5bmsvdmFubHluay1kYXNoYm9hcmQvdmFubHluay1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/vanlynk/vanlynk-dashboard/vanlynk-dashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/vanlynk/vanlynk-dashboard/vanlynk-dashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: VanlynkDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanlynkDashboardComponent", function() { return VanlynkDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var VanlynkDashboardComponent = /** @class */ (function () {
    function VanlynkDashboardComponent(beyond, router, http, activatedRoute, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
    }
    VanlynkDashboardComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
    };
    VanlynkDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-vanlynk-dashboard',
            template: __webpack_require__(/*! ./vanlynk-dashboard.component.html */ "./src/app/vanlynk/vanlynk-dashboard/vanlynk-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./vanlynk-dashboard.component.scss */ "./src/app/vanlynk/vanlynk-dashboard/vanlynk-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], VanlynkDashboardComponent);
    return VanlynkDashboardComponent;
}());



/***/ }),

/***/ "./src/app/vanlynk/vanlynk-layout/vanlynk-layout.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/vanlynk/vanlynk-layout/vanlynk-layout.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/vanlynk/vanlynk-layout/vanlynk-layout.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/vanlynk/vanlynk-layout/vanlynk-layout.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zhbmx5bmsvdmFubHluay1sYXlvdXQvdmFubHluay1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/vanlynk/vanlynk-layout/vanlynk-layout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/vanlynk/vanlynk-layout/vanlynk-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: VanlynkLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanlynkLayoutComponent", function() { return VanlynkLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VanlynkLayoutComponent = /** @class */ (function () {
    function VanlynkLayoutComponent() {
    }
    VanlynkLayoutComponent.prototype.ngOnInit = function () {
    };
    VanlynkLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vanlynk-layout',
            template: __webpack_require__(/*! ./vanlynk-layout.component.html */ "./src/app/vanlynk/vanlynk-layout/vanlynk-layout.component.html"),
            styles: [__webpack_require__(/*! ./vanlynk-layout.component.scss */ "./src/app/vanlynk/vanlynk-layout/vanlynk-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VanlynkLayoutComponent);
    return VanlynkLayoutComponent;
}());



/***/ }),

/***/ "./src/app/vanlynk/vanlynk-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/vanlynk/vanlynk-routing.module.ts ***!
  \***************************************************/
/*! exports provided: VanlynkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanlynkRoutingModule", function() { return VanlynkRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vanlynk_vanlynk_layout_vanlynk_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vanlynk/vanlynk-layout/vanlynk-layout.component */ "./src/app/vanlynk/vanlynk-layout/vanlynk-layout.component.ts");
/* harmony import */ var _vanlynk_vanlynk_dashboard_vanlynk_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vanlynk/vanlynk-dashboard/vanlynk-dashboard.component */ "./src/app/vanlynk/vanlynk-dashboard/vanlynk-dashboard.component.ts");





var routes = [
    {
        path: '', component: _vanlynk_vanlynk_layout_vanlynk_layout_component__WEBPACK_IMPORTED_MODULE_3__["VanlynkLayoutComponent"],
        children: [
            {
                path: 'vanlynkDashboard',
                component: _vanlynk_vanlynk_dashboard_vanlynk_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["VanlynkDashboardComponent"]
            }
        ]
    }
];
var VanlynkRoutingModule = /** @class */ (function () {
    function VanlynkRoutingModule() {
    }
    VanlynkRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VanlynkRoutingModule);
    return VanlynkRoutingModule;
}());



/***/ }),

/***/ "./src/app/vanlynk/vanlynk.module.ts":
/*!*******************************************!*\
  !*** ./src/app/vanlynk/vanlynk.module.ts ***!
  \*******************************************/
/*! exports provided: VanlynkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanlynkModule", function() { return VanlynkModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _vanlynk_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vanlynk-routing.module */ "./src/app/vanlynk/vanlynk-routing.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _common_commontopprozpurpleheader_commontopprozpurpleheader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/commontopprozpurpleheader/commontopprozpurpleheader.module */ "./src/app/common/commontopprozpurpleheader/commontopprozpurpleheader.module.ts");
/* harmony import */ var _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/commonvanlynkheader/commonvanlynkheader.module */ "./src/app/common/commonvanlynkheader/commonvanlynkheader.module.ts");
/* harmony import */ var _common_vanlynk_sidemenu_vanlynk_sidemenu_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/vanlynk-sidemenu/vanlynk-sidemenu.module */ "./src/app/common/vanlynk-sidemenu/vanlynk-sidemenu.module.ts");
/* harmony import */ var _vanlynk_layout_vanlynk_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vanlynk-layout/vanlynk-layout.component */ "./src/app/vanlynk/vanlynk-layout/vanlynk-layout.component.ts");
/* harmony import */ var _vanlynk_dashboard_vanlynk_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vanlynk-dashboard/vanlynk-dashboard.component */ "./src/app/vanlynk/vanlynk-dashboard/vanlynk-dashboard.component.ts");













var VanlynkModule = /** @class */ (function () {
    function VanlynkModule() {
    }
    VanlynkModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _vanlynk_layout_vanlynk_layout_component__WEBPACK_IMPORTED_MODULE_11__["VanlynkLayoutComponent"],
                _vanlynk_dashboard_vanlynk_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["VanlynkDashboardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"].forRoot(),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _vanlynk_routing_module__WEBPACK_IMPORTED_MODULE_5__["VanlynkRoutingModule"],
                _common_commontopprozpurpleheader_commontopprozpurpleheader_module__WEBPACK_IMPORTED_MODULE_8__["CommontopprozpurpleheaderModule"],
                _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_9__["CommonvanlynkheaderModule"],
                _common_vanlynk_sidemenu_vanlynk_sidemenu_module__WEBPACK_IMPORTED_MODULE_10__["VanlynkSidemenuModule"]
            ]
        })
    ], VanlynkModule);
    return VanlynkModule;
}());



/***/ })

}]);
//# sourceMappingURL=vanlynk-vanlynk-module.js.map