(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/add-role/add-role.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/add-role/add-role.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonheader></app-commonheader>\r\n<app-commonsidemenu></app-commonsidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a >Master</a>\r\n          </li>\r\n          <li>\r\n            <a >List Roles</a>\r\n          </li>\r\n\r\n          <li class=\"active\">Add Role</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Add Role</h1>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"widget flat radius-bordered\">\r\n                      <div class=\"widget-header bg-blue\">\r\n                        <span class=\"widget-caption\">Add Role</span>\r\n                      </div>\r\n                      <div class=\"widget-body\">\r\n                        <form [formGroup]=\"addRole\">\r\n                          <div id=\"registration-form\">\r\n                            <!-- Add Service Category -->\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"serviceRequestNumberLbl\">\r\n                                    <b>Enter Role Code</b>\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-9\">\r\n                                <div class=\"form-group\">\r\n                                  <span class=\"input-icon icon-right\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Eg: ANR\" formControlName=\"roleCode\">\r\n                                    <i class=\"fa fa-file-text\"></i>\r\n                                  </span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"descriptionLbl\">\r\n                                    <b>Enter Role Name</b>\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-9\">\r\n                                <div class=\"form-group\">\r\n                                  <span class=\"input-icon icon-right\">\r\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Role Name\" formControlName=\"roleName\">\r\n                                      <i class=\"fa fa-file-text\"></i>\r\n                                  </span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <!-- /Add Service Category -->\r\n\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-3\">\r\n                              </div>\r\n                              <div class=\"col-sm-9\">\r\n                                <a href=\"javascript:void(0);\" class=\"btn btn-labeled btn-success\" (click)=\"submit()\">\r\n                                  <i class=\"btn-label fa fa-check\"></i>Submit\r\n                                </a> &nbsp; &nbsp;\r\n                                <a href=\"javascript:void(0);\" class=\"btn btn-labeled btn-danger\" (click)=\"cancel()\">\r\n                                  <i class=\"btn-label fa fa-times\"></i>Cancel\r\n                                </a> &nbsp; &nbsp;\r\n                              </div>\r\n                            </div>\r\n                            <br>\r\n\r\n\r\n                          </div>\r\n                        </form>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->"

/***/ }),

/***/ "./src/app/auth/add-role/add-role.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/auth/add-role/add-role.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYWRkLXJvbGUvYWRkLXJvbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/add-role/add-role.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/add-role/add-role.component.ts ***!
  \*****************************************************/
/*! exports provided: AddRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleComponent", function() { return AddRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AddRoleComponent = /** @class */ (function () {
    function AddRoleComponent(beyond, router, http, toastr, formBuilder) {
        this.beyond = beyond;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
    }
    AddRoleComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.addRole = this.formBuilder.group({
            roleCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            roleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    };
    AddRoleComponent.prototype.submit = function () {
        var _this = this;
        var obj = {
            "roleCode": this.addRole.value.roleCode,
            "roleName": this.addRole.value.roleName,
            "status": "ACTIVE"
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/addRbacRoles', obj)
            .subscribe(function (data) {
            var rolesData = data.json();
            console.log("rolesData" + JSON.stringify(rolesData));
            _this.toastr.success('Role Added Successfuly...');
            _this.router.navigate(['/auth/roles']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    AddRoleComponent.prototype.cancel = function () {
        this.router.navigate(['/auth/roles']);
    };
    AddRoleComponent.prototype.home = function () {
        this.router.navigate(['/admin/dashboard']);
    };
    AddRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-add-role',
            template: __webpack_require__(/*! ./add-role.component.html */ "./src/app/auth/add-role/add-role.component.html"),
            styles: [__webpack_require__(/*! ./add-role.component.scss */ "./src/app/auth/add-role/add-role.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], AddRoleComponent);
    return AddRoleComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth-layout/auth-layout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/auth/auth-layout/auth-layout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/auth/auth-layout/auth-layout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/auth/auth-layout/auth-layout.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/auth-layout/auth-layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/auth-layout/auth-layout.component.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
    };
    AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-layout',
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/auth/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/auth/auth-layout/auth-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "./src/app/auth/auth-layout/auth-layout.component.ts");
/* harmony import */ var _role_matrix_role_matrix_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-matrix/role-matrix.component */ "./src/app/auth/role-matrix/role-matrix.component.ts");
/* harmony import */ var _list_roles_list_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-roles/list-roles.component */ "./src/app/auth/list-roles/list-roles.component.ts");
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-role/add-role.component */ "./src/app/auth/add-role/add-role.component.ts");
/* harmony import */ var _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-role/edit-role.component */ "./src/app/auth/edit-role/edit-role.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _forgot_password_otp_verification_forgot_password_otp_verification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forgot-password-otp-verification/forgot-password-otp-verification.component */ "./src/app/auth/forgot-password-otp-verification/forgot-password-otp-verification.component.ts");
/* harmony import */ var _forgot_password_new_pwd_confirmation_forgot_password_new_pwd_confirmation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-password-new-pwd-confirmation/forgot-password-new-pwd-confirmation.component */ "./src/app/auth/forgot-password-new-pwd-confirmation/forgot-password-new-pwd-confirmation.component.ts");
/* harmony import */ var _forgot_password_email_validation_forgot_password_email_validation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot-password-email-validation/forgot-password-email-validation.component */ "./src/app/auth/forgot-password-email-validation/forgot-password-email-validation.component.ts");













var routes = [{
        path: '', component: _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"],
        children: [
            { path: '', redirectTo: 'login/:id', pathMatch: 'full' },
            { path: 'login/:id', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'roleMatrix/:string/:anyCode', component: _role_matrix_role_matrix_component__WEBPACK_IMPORTED_MODULE_5__["RoleMatrixComponent"] },
            { path: 'roles', component: _list_roles_list_roles_component__WEBPACK_IMPORTED_MODULE_6__["ListRolesComponent"] },
            { path: 'addRole', component: _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_7__["AddRoleComponent"] },
            { path: 'editRole/:anyCode', component: _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_8__["EditRoleComponent"] },
        ]
    },
    { path: 'forgotPassEmailValidation', component: _forgot_password_email_validation_forgot_password_email_validation_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordEmailValidationComponent"] },
    { path: 'forgotPass/:emailId', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"] },
    { path: 'forgotPassOtpVerification/:mode/:source/:role', component: _forgot_password_otp_verification_forgot_password_otp_verification_component__WEBPACK_IMPORTED_MODULE_10__["ForgotPasswordOtpVerificationComponent"] },
    { path: 'forgotPassNewPwdConfirmation/:mode/:source/:role', component: _forgot_password_new_pwd_confirmation_forgot_password_new_pwd_confirmation_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordNewPwdConfirmationComponent"] },
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "./src/app/auth/auth-layout/auth-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _common_commontopprozblueheader_commontopprozblueheader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/commontopprozblueheader/commontopprozblueheader.module */ "./src/app/common/commontopprozblueheader/commontopprozblueheader.module.ts");
/* harmony import */ var _common_commonheaderbeforelogin_commonheaderbeforelogin_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/commonheaderbeforelogin/commonheaderbeforelogin.module */ "./src/app/common/commonheaderbeforelogin/commonheaderbeforelogin.module.ts");
/* harmony import */ var _role_matrix_role_matrix_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./role-matrix/role-matrix.component */ "./src/app/auth/role-matrix/role-matrix.component.ts");
/* harmony import */ var _common_commonheader_commonheader_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/commonheader/commonheader.module */ "./src/app/common/commonheader/commonheader.module.ts");
/* harmony import */ var _common_commonsidemenu_commonsidemenu_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/commonsidemenu/commonsidemenu.module */ "./src/app/common/commonsidemenu/commonsidemenu.module.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _list_roles_list_roles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-roles/list-roles.component */ "./src/app/auth/list-roles/list-roles.component.ts");
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-role/add-role.component */ "./src/app/auth/add-role/add-role.component.ts");
/* harmony import */ var _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-role/edit-role.component */ "./src/app/auth/edit-role/edit-role.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _forgot_password_otp_verification_forgot_password_otp_verification_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forgot-password-otp-verification/forgot-password-otp-verification.component */ "./src/app/auth/forgot-password-otp-verification/forgot-password-otp-verification.component.ts");
/* harmony import */ var _forgot_password_new_pwd_confirmation_forgot_password_new_pwd_confirmation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forgot-password-new-pwd-confirmation/forgot-password-new-pwd-confirmation.component */ "./src/app/auth/forgot-password-new-pwd-confirmation/forgot-password-new-pwd-confirmation.component.ts");
/* harmony import */ var _forgot_password_email_validation_forgot_password_email_validation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forgot-password-email-validation/forgot-password-email-validation.component */ "./src/app/auth/forgot-password-email-validation/forgot-password-email-validation.component.ts");




















var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _role_matrix_role_matrix_component__WEBPACK_IMPORTED_MODULE_9__["RoleMatrixComponent"],
                _list_roles_list_roles_component__WEBPACK_IMPORTED_MODULE_13__["ListRolesComponent"],
                _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_14__["AddRoleComponent"],
                _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_15__["EditRoleComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
                _forgot_password_otp_verification_forgot_password_otp_verification_component__WEBPACK_IMPORTED_MODULE_17__["ForgotPasswordOtpVerificationComponent"],
                _forgot_password_new_pwd_confirmation_forgot_password_new_pwd_confirmation_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordNewPwdConfirmationComponent"],
                _forgot_password_email_validation_forgot_password_email_validation_component__WEBPACK_IMPORTED_MODULE_19__["ForgotPasswordEmailValidationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuthRoutingModule"],
                _common_commonheaderbeforelogin_commonheaderbeforelogin_module__WEBPACK_IMPORTED_MODULE_8__["CommonheaderbeforeloginModule"],
                _common_commontopprozblueheader_commontopprozblueheader_module__WEBPACK_IMPORTED_MODULE_7__["CommontopprozblueheaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"],
                _common_commonsidemenu_commonsidemenu_module__WEBPACK_IMPORTED_MODULE_11__["CommonSidemenuModule"],
                _common_commonheader_commonheader_module__WEBPACK_IMPORTED_MODULE_10__["CommonHeaderModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/edit-role/edit-role.component.html":
/*!*********************************************************!*\
  !*** ./src/app/auth/edit-role/edit-role.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonheader></app-commonheader>\r\n<app-commonsidemenu></app-commonsidemenu>\r\n<!-- Main Container -->\r\n<div class=\"main-container container-fluid\">\r\n  <!-- Page Container -->\r\n  <div class=\"page-container\">\r\n    <!-- Page Content -->\r\n    <div class=\"page-content\">\r\n      <!-- Page Breadcrumb -->\r\n      <div class=\"page-breadcrumbs\">\r\n        <ul class=\"breadcrumb\">\r\n          <li>\r\n            <i class=\"fa fa-home\"></i>\r\n            <a (click)=\"home()\">Home</a>\r\n          </li>\r\n          <li>\r\n            <a >Roles</a>\r\n          </li>\r\n          <li>\r\n            <a >List Role</a>\r\n          </li>\r\n\r\n          <li class=\"active\">Edit Role</li>\r\n        </ul>\r\n      </div>\r\n      <!-- /Page Breadcrumb -->\r\n      <!-- Page Header -->\r\n      <div class=\"page-header position-relative\">\r\n        <div class=\"header-title\">\r\n          <h1>Edit Role</h1>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- /Page Header -->\r\n      <!-- Page Body -->\r\n      <div class=\"page-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"widget flat radius-bordered\">\r\n                      <div class=\"widget-header bg-blue\">\r\n                        <span class=\"widget-caption\">Edit Role</span>\r\n                      </div>\r\n                      <div class=\"widget-body\">\r\n                        <div id=\"registration-form\">\r\n                          <form  [formGroup]=\"editRole\">\r\n\r\n                            <!-- Add Service Category -->\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"customerNameLbl\">\r\n                                    <b>Role Code</b>\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-9\">\r\n                                <div class=\"form-group\">\r\n                                  <span class=\"input-icon icon-right\">\r\n                                    <input type=\"text\" class=\"form-control\" formControlName=\"roleCode\" readonly>\r\n                                    <i class=\"fa fa-indent\"></i>\r\n                                  </span>\r\n                                </div>\r\n                              </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                              <div class=\"col-sm-3\">\r\n                                <div class=\"form-group\">\r\n                                  <label for=\"serviceRequestNumberLbl\">\r\n                                    <b>Role Name</b>\r\n                                  </label>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-sm-9\">\r\n                                <div class=\"form-group\">\r\n                                  <span class=\"input-icon icon-right\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Eg: Plumbing\" formControlName=\"roleName\">\r\n                                    <i class=\"fa fa-file-text\"></i>\r\n                                  </span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-3\">\r\n                                  <div class=\"form-group\">\r\n                                    <label for=\"status\">\r\n                                      <b>Status</b>\r\n                                    </label>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-9\">\r\n                                  <div class=\"form-group\">\r\n                                      <select class=\"form-control\" formControlName=\"status\" data-bv-field=\"row-title\" >\r\n                                          <option value=\"ACTIVE\">ACTIVE</option>\r\n                                          <option value=\"INACTIVE\">INACTIVE</option>\r\n                                      </select>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              \r\n                            <!-- /Add Service Category -->\r\n\r\n\r\n                            <div class=\"row\">\r\n                              <div class=\"col-sm-3\">\r\n                              </div>\r\n                              <div class=\"col-sm-9\">\r\n                                <a href=\"javascript:void(0);\" class=\"btn btn-labeled btn-success\" (click)=\"submit()\">\r\n                                  <i class=\"btn-label fa fa-check\"></i>Update\r\n                                </a> &nbsp; &nbsp;\r\n                                <a href=\"javascript:void(0);\" class=\"btn btn-labeled btn-danger\" (click)=\"cancelServiceCategory()\">\r\n                                  <i class=\"btn-label fa fa-times\"></i>Cancel\r\n                                </a> &nbsp; &nbsp;\r\n                              </div>\r\n                            </div>\r\n                            <br/>\r\n\r\n                          </form>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /Page Body -->\r\n    </div>\r\n    <!-- /Page Content -->\r\n  </div>\r\n  <!-- /Page Container -->\r\n</div>\r\n<!-- /Main Container -->\r\n<div class=\"backdrop\" [ngStyle]=\"{'display':displayConfirmation}\"></div>\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':displayConfirmation}\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseHandled()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h4 class=\"modal-title\">Modify Status</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Are you Sure You want to Modify the status</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"onDelete()\">Ok</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"onCloseHandled()\">Close</button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/auth/edit-role/edit-role.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/auth/edit-role/edit-role.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZWRpdC1yb2xlL2VkaXQtcm9sZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/edit-role/edit-role.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/auth/edit-role/edit-role.component.ts ***!
  \*******************************************************/
/*! exports provided: EditRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoleComponent", function() { return EditRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var EditRoleComponent = /** @class */ (function () {
    function EditRoleComponent(beyond, router, route, http, toastr, formBuilder) {
        this.beyond = beyond;
        this.router = router;
        this.route = route;
        this.http = http;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.displayConfirmation = 'none;';
    }
    EditRoleComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.roleCode = this.route.snapshot.params['anyCode'];
        console.log("roleCode" + JSON.stringify(this.roleCode));
        this.editRole = this.formBuilder.group({
            roleCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            roleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
        });
        this.viewRole(this.roleCode);
    };
    EditRoleComponent.prototype.viewRole = function (roleCode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/viewRoles/' + roleCode, options)
            .subscribe(function (data) {
            var viewRoleData = data.json();
            _this.viewRoles = viewRoleData.response[0];
            _this.editRole = _this.formBuilder.group({
                roleCode: [_this.viewRoles.roleCode, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                roleName: [_this.viewRoles.roleDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                status: [_this.viewRoles.status, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
            });
            console.log("service category Data" + JSON.stringify(_this.viewRoles));
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    EditRoleComponent.prototype.submit = function () {
        this.deleteobj = {
            "roleCode": this.viewRoles.roleCode,
            "roleDescription": this.viewRoles.roleDescription,
            "status": this.editRole.value.status
        };
        this.displayConfirmation = 'block';
    };
    EditRoleComponent.prototype.onDelete = function () {
        var _this = this;
        this.displayConfirmation = 'none';
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/editRoleService', this.deleteobj)
            .subscribe(function (data) {
            var roleData = data.json();
            console.log("roleData" + JSON.stringify(roleData));
            _this.toastr.success('Service Categories Updated Successfuly...');
            _this.router.navigate(['/auth/roles']);
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server'); // Error getting the data
        });
    };
    EditRoleComponent.prototype.onCloseHandled = function () {
        this.displayConfirmation = 'none';
    };
    EditRoleComponent.prototype.cancel = function () {
        this.router.navigate(['/auth/roles']);
    };
    EditRoleComponent.prototype.home = function () {
        this.router.navigate(['/admin/dashboard']);
    };
    EditRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-edit-role',
            template: __webpack_require__(/*! ./edit-role.component.html */ "./src/app/auth/edit-role/edit-role.component.html"),
            styles: [__webpack_require__(/*! ./edit-role.component.scss */ "./src/app/auth/edit-role/edit-role.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], EditRoleComponent);
    return EditRoleComponent;
}());



/***/ }),

/***/ "./src/app/auth/forgot-password-email-validation/forgot-password-email-validation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/auth/forgot-password-email-validation/forgot-password-email-validation.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozblueheader></app-commontopprozblueheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n    <!-- <h5 class=\"row-title\"><i class=\"typcn typcn-folder themeprimary\"></i>Simple Tabs</h5> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-2 col-sm-2 col-xs-12\"> </div>\r\n      <!-- CONTENT - STARTS HERE -->\r\n      <div class=\"col-lg-8 col-sm-8 col-xs-12\">\r\n        <!-- NEW PROZ REGISTRATION - STARTS HERE -->\r\n        <div class=\"login-container animated fadeInDown\">\r\n          <div class=\"loginbox bg-white\">\r\n            <div class=\"widget-body\">\r\n              <div id=\"registration-form\">\r\n                <form role=\"form\" [formGroup]=\"forgotPassword\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"loginbox-title\">Forgot Password</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <hr class=\"hr-magenta-title\">\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-sm-6 col-xs-12\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"typeofbusiness\">Enter Your Login Email Id <span class=\"mandatory\">*</span></label>\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Your Login Email Id\" formControlName=\"emailId\"\r\n                          pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.emailId.errors }\" (ngModelChange)=\"userNameVerification()\">\r\n                        <div *ngIf=\"submitted && f.emailId.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.emailId.errors.required\">\r\n                            <p style=\"color: red; font-size: 11px\">Enter Email ID</p>\r\n                          </div>\r\n                          <div style=\"color: red; font-size: 11px\" *ngIf=\"f.emailId.errors.pattern\">Invalid\r\n                            Email ID</div>\r\n                        </div>\r\n                        <small *ngIf=\"mailError\">\r\n                          <p style=\"color:red\"> Email ID do not Exists.\r\n                          </p>\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                      <div class=\"form-group\">\r\n                        <hr>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\" row\">\r\n                      <div class=\"col-lg-2 col-sm-2 col-xs-12\"></div>\r\n                      <div class=\"col-lg-4 col-sm-4 col-xs-12\">\r\n                        <input type=\"button\" class=\"btn btn-lg btn-info shiny btn-block\" value=\"Submit\" [disabled]=\"mailError\" (click)=\"onSubmit()\">\r\n\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-sm-4 col-xs-12\">\r\n                        <input type=\"button\" class=\"btn btn-lg btn-darkorange shiny btn-block\" value=\"Cancel\"\r\n                          (click)=\"cancel()\">\r\n                      </div>\r\n                      <div class=\"col-lg-2 col-sm-2 col-xs-12\"></div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- NEW PROZ REGISTRATION - ENDS HERE-->\r\n      </div>\r\n      <!-- CCONTENT - ENDS HERE-->\r\n      <div class=\"col-lg-2 col-sm-2 col-xs-12\"> </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/forgot-password-email-validation/forgot-password-email-validation.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/auth/forgot-password-email-validation/forgot-password-email-validation.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  position: relative;\n  margin: 3% auto;\n  max-width: 100%; }\n\n.login-container .loginbox {\n  position: relative;\n  width: 100% !important;\n  height: auto !important;\n  padding: 0 0 0px 0;\n  box-shadow: 0 0 14px rgba(0, 0, 0, 0.1); }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-facebook {\n  float: left;\n  border: 2px solid #3b5998;\n  color: #3b5998;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 40%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-twitter {\n  float: left;\n  border: 2px solid #29c1f6;\n  color: #29c1f6;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 35%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-google {\n  float: right;\n  border: 2px solid #ef4f1d;\n  color: #ef4f1d;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  background-color: #fff; }\n\n.loginbox-social {\n  padding: 0 0 0 0 !important; }\n\n.loginbox-title {\n  font-weight: bold !important;\n  font-size: 25px !important; }\n\nlabel {\n  font-weight: bold !important; }\n\nlabel .mandatory {\n  color: red;\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n.hr-blue-title {\n  border-top: 3px solid #5DB2FF !important; }\n\n.hr-blue {\n  border-top: 1px solid #5DB2FF !important; }\n\n.btn {\n  font-size: 14px !important;\n  font-weight: bold !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtZW1haWwtdmFsaWRhdGlvbi9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxcYXV0aFxcZm9yZ290LXBhc3N3b3JkLWVtYWlsLXZhbGlkYXRpb25cXGZvcmdvdC1wYXNzd29yZC1lbWFpbC12YWxpZGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFHbEIsd0NBQW1DLEVBQ3RDOztBQUVEO0VBQ0ksWUFBVztFQUNYLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLFlBQVc7RUFDWCwwQkFBeUI7RUFDekIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWix1QkFBc0IsRUFDekI7O0FBR0E7RUFDRyw0QkFBMkIsRUFDOUI7O0FBR0Q7RUFDSSw2QkFBNEI7RUFDNUIsMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0ksNkJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksV0FBUztFQUNULDJCQUEwQjtFQUMxQiw2QkFBNEIsRUFDL0I7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSwyQkFBMEI7RUFDMUIsNkJBQTRCLEVBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtZW1haWwtdmFsaWRhdGlvbi9mb3Jnb3QtcGFzc3dvcmQtZW1haWwtdmFsaWRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBtYXJnaW46IDMlIGF1dG87XHJcbiAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gfVxyXG4gXHJcbiAubG9naW4tY29udGFpbmVyIC5sb2dpbmJveCB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgcGFkZGluZzogMCAwIDBweCAwO1xyXG4gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE0cHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTRweCByZ2JhKDAsMCwwLC4xKTtcclxuICAgICBib3gtc2hhZG93OiAwIDAgMTRweCByZ2JhKDAsMCwwLC4xKTtcclxuIH1cclxuIFxyXG4gLmxvZ2luLWNvbnRhaW5lciAubG9naW5ib3ggLmxvZ2luYm94LXNvY2lhbCAuc29jaWFsLWJ1dHRvbnMgLmJ1dHRvbi1mYWNlYm9vayB7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgYm9yZGVyOiAycHggc29saWQgIzNiNTk5ODtcclxuICAgICBjb2xvcjogIzNiNTk5ODtcclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogNDAlO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiB9XHJcbiBcclxuIC5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC1zb2NpYWwgLnNvY2lhbC1idXR0b25zIC5idXR0b24tdHdpdHRlciB7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgYm9yZGVyOiAycHggc29saWQgIzI5YzFmNjtcclxuICAgICBjb2xvcjogIzI5YzFmNjtcclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogMzUlO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiB9XHJcbiBcclxuIC5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC1zb2NpYWwgLnNvY2lhbC1idXR0b25zIC5idXR0b24tZ29vZ2xlIHtcclxuICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgYm9yZGVyOiAycHggc29saWQgI2VmNGYxZDtcclxuICAgICBjb2xvcjogI2VmNGYxZDtcclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiB9XHJcbiBcclxuIFxyXG4gIC5sb2dpbmJveC1zb2NpYWwge1xyXG4gICAgIHBhZGRpbmc6IDAgMCAwIDAgIWltcG9ydGFudDsgXHJcbiB9XHJcbiBcclxuIFxyXG4gLmxvZ2luYm94LXRpdGxle1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIGxhYmVse1xyXG4gICAgIGZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gbGFiZWwgLm1hbmRhdG9yeXtcclxuICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmhyLWJsdWUtdGl0bGV7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjNURCMkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5oci1ibHVleyAgICBcclxuICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzVEQjJGRiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnRuIHtcclxuICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/forgot-password-email-validation/forgot-password-email-validation.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/auth/forgot-password-email-validation/forgot-password-email-validation.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ForgotPasswordEmailValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordEmailValidationComponent", function() { return ForgotPasswordEmailValidationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");









var ForgotPasswordEmailValidationComponent = /** @class */ (function () {
    function ForgotPasswordEmailValidationComponent(router, formBuilder, activatedRoute, toastr, http, authService, spinner) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.http = http;
        this.authService = authService;
        this.spinner = spinner;
        this.submitted = false;
        this.mailError = false;
    }
    ForgotPasswordEmailValidationComponent.prototype.ngOnInit = function () {
        this.forgotPassword = this.formBuilder.group({
            emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    Object.defineProperty(ForgotPasswordEmailValidationComponent.prototype, "f", {
        get: function () { return this.forgotPassword.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordEmailValidationComponent.prototype.userNameVerification = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.forgotPassword.value.emailId == "") {
                    this.mailError = false;
                    return [2 /*return*/, false];
                }
                else {
                    this.http
                        .get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url +
                        "/newUserNameVerification/" +
                        this.forgotPassword.value.emailId)
                        .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var mailResponse;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            mailResponse = data.json();
                            if (mailResponse.status == "TRUE") {
                                this.mailError = false;
                                resolve({
                                    status: 'TRUE',
                                });
                            }
                            else {
                                this.mailError = true;
                                resolve({
                                    status: 'FALSE',
                                });
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        }); });
    };
    ForgotPasswordEmailValidationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.forgotPassword.invalid)
            return;
        this.router.navigate(['/auth/forgotPass', this.forgotPassword.value.emailId]);
    };
    ForgotPasswordEmailValidationComponent.prototype.cancel = function () {
        this.router.navigate(['/auth/login/0']);
    };
    ForgotPasswordEmailValidationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password-email-validation',
            template: __webpack_require__(/*! ./forgot-password-email-validation.component.html */ "./src/app/auth/forgot-password-email-validation/forgot-password-email-validation.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password-email-validation.component.scss */ "./src/app/auth/forgot-password-email-validation/forgot-password-email-validation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], ForgotPasswordEmailValidationComponent);
    return ForgotPasswordEmailValidationComponent;
}());



/***/ }),

/***/ "./src/app/auth/forgot-password-new-pwd-confirmation/forgot-password-new-pwd-confirmation.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/auth/forgot-password-new-pwd-confirmation/forgot-password-new-pwd-confirmation.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozblueheader></app-commontopprozblueheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n    <!-- <h5 class=\"row-title\"><i class=\"typcn typcn-folder themeprimary\"></i>Simple Tabs</h5> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-2 col-sm-2 col-xs-12\"> </div>\r\n      <!-- CONTENT - STARTS HERE -->\r\n      <div class=\"col-lg-8 col-sm-8 col-xs-12\">\r\n        <!-- NEW PROZ REGISTRATION - STARTS HERE -->\r\n        <div class=\"login-container animated fadeInDown\">\r\n          <div class=\"loginbox bg-white\">\r\n            <div class=\"widget-body\">\r\n              <div id=\"registration-form\">\r\n                <form role=\"form\" [formGroup]=\"passwordFormGroup\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"loginbox-title\">New Password Confirmation</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <hr class=\"hr-magenta-title\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"password\">New Password <span class=\"mandatory\">*</span></label>\r\n                        <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\"\r\n                          formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.password.errors.required\">\r\n                            <p style=\"color: red; font-size: 11px\">* Required Password</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- <p class=\"bg-primary\" *ngIf=\"passwordFormGroup.controls.password.errors?.required && passwordFormGroup.controls.password.touched\">Password is required</p> -->\r\n\r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"repeatPassword\">Confirm Password <span class=\"mandatory\">*</span></label>\r\n                        <input class=\"form-control\" type=\"password\" name=\"repeatPassword\" placeholder=\"Re-Type Password\"\r\n                          formControlName=\"repeatPassword\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.repeatPassword.errors }\">\r\n                        <div *ngIf=\"submitted && f.repeatPassword.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.repeatPassword.errors.required\">\r\n                            <p style=\"color: red; font-size: 11px\">* Request Repeat Password</p>\r\n                          </div>\r\n                        </div>\r\n                        <!-- <p class=\"bg-primary\" *ngIf=\"passwordFormGroup.controls.repeatPassword.errors?.required && passwordFormGroup.controls.repeatPassword.touched\">Repeat password is required</p> -->\r\n                        <p *ngIf=\"passwordFormGroup.errors?.doesMatchPassword\" style=\"color: red; font-size: 11px\">*\r\n                          Password does not match\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"col-sm-1\">\r\n                        <div class=\"form-group\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-5\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Ok\"\r\n                            (click)=\"changePassword()\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Cancel\" (click)=\"cancel()\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- NEW PROZ REGISTRATION - ENDS HERE-->\r\n      </div>\r\n      <!-- CCONTENT - ENDS HERE-->\r\n      <div class=\"col-lg-2 col-sm-2 col-xs-12\"> </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/forgot-password-new-pwd-confirmation/forgot-password-new-pwd-confirmation.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/auth/forgot-password-new-pwd-confirmation/forgot-password-new-pwd-confirmation.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  position: relative;\n  margin: 3% auto;\n  max-width: 100%; }\n\n.login-container .loginbox {\n  position: relative;\n  width: 100% !important;\n  height: auto !important;\n  padding: 0 0 0px 0;\n  box-shadow: 0 0 14px rgba(0, 0, 0, 0.1); }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-facebook {\n  float: left;\n  border: 2px solid #3b5998;\n  color: #3b5998;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 40%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-twitter {\n  float: left;\n  border: 2px solid #29c1f6;\n  color: #29c1f6;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 35%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-google {\n  float: right;\n  border: 2px solid #ef4f1d;\n  color: #ef4f1d;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  background-color: #fff; }\n\n.loginbox-social {\n  padding: 0 0 0 0 !important; }\n\n.loginbox-title {\n  font-weight: bold !important;\n  font-size: 25px !important; }\n\nlabel {\n  font-weight: bold !important; }\n\nlabel .mandatory {\n  color: red;\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n.hr-blue-title {\n  border-top: 3px solid #5DB2FF !important; }\n\n.hr-blue {\n  border-top: 1px solid #5DB2FF !important; }\n\n.btn {\n  font-size: 14px !important;\n  font-weight: bold !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtbmV3LXB3ZC1jb25maXJtYXRpb24vRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXGF1dGhcXGZvcmdvdC1wYXNzd29yZC1uZXctcHdkLWNvbmZpcm1hdGlvblxcZm9yZ290LXBhc3N3b3JkLW5ldy1wd2QtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFHbEIsd0NBQW1DLEVBQ3RDOztBQUVEO0VBQ0ksWUFBVztFQUNYLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLFlBQVc7RUFDWCwwQkFBeUI7RUFDekIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWix1QkFBc0IsRUFDekI7O0FBR0E7RUFDRyw0QkFBMkIsRUFDOUI7O0FBR0Q7RUFDSSw2QkFBNEI7RUFDNUIsMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0ksNkJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksV0FBUztFQUNULDJCQUEwQjtFQUMxQiw2QkFBNEIsRUFDL0I7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSwyQkFBMEI7RUFDMUIsNkJBQTRCLEVBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtbmV3LXB3ZC1jb25maXJtYXRpb24vZm9yZ290LXBhc3N3b3JkLW5ldy1wd2QtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIG1hcmdpbjogMyUgYXV0bztcclxuICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiBcclxuIC5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICBwYWRkaW5nOiAwIDAgMHB4IDA7XHJcbiAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTRweCByZ2JhKDAsMCwwLC4xKTtcclxuICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gICAgIGJveC1zaGFkb3c6IDAgMCAxNHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gfVxyXG4gXHJcbiAubG9naW4tY29udGFpbmVyIC5sb2dpbmJveCAubG9naW5ib3gtc29jaWFsIC5zb2NpYWwtYnV0dG9ucyAuYnV0dG9uLWZhY2Vib29rIHtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCAjM2I1OTk4O1xyXG4gICAgIGNvbG9yOiAjM2I1OTk4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICB3aWR0aDogNTBweDtcclxuICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiA0MCU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuIH1cclxuIFxyXG4gLmxvZ2luLWNvbnRhaW5lciAubG9naW5ib3ggLmxvZ2luYm94LXNvY2lhbCAuc29jaWFsLWJ1dHRvbnMgLmJ1dHRvbi10d2l0dGVyIHtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjljMWY2O1xyXG4gICAgIGNvbG9yOiAjMjljMWY2O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICB3aWR0aDogNTBweDtcclxuICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAzNSU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuIH1cclxuIFxyXG4gLmxvZ2luLWNvbnRhaW5lciAubG9naW5ib3ggLmxvZ2luYm94LXNvY2lhbCAuc29jaWFsLWJ1dHRvbnMgLmJ1dHRvbi1nb29nbGUge1xyXG4gICAgIGZsb2F0OiByaWdodDtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWY0ZjFkO1xyXG4gICAgIGNvbG9yOiAjZWY0ZjFkO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICB3aWR0aDogNTBweDtcclxuICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuIH1cclxuIFxyXG4gXHJcbiAgLmxvZ2luYm94LXNvY2lhbCB7XHJcbiAgICAgcGFkZGluZzogMCAwIDAgMCAhaW1wb3J0YW50OyBcclxuIH1cclxuIFxyXG4gXHJcbiAubG9naW5ib3gtdGl0bGV7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gbGFiZWx7XHJcbiAgICAgZm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiBsYWJlbCAubWFuZGF0b3J5e1xyXG4gICAgIGNvbG9yOnJlZDtcclxuICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuaHItYmx1ZS10aXRsZXsgICAgXHJcbiAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICM1REIyRkYgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmhyLWJsdWV7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNURCMkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5idG4ge1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/auth/forgot-password-new-pwd-confirmation/forgot-password-new-pwd-confirmation.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/auth/forgot-password-new-pwd-confirmation/forgot-password-new-pwd-confirmation.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ForgotPasswordNewPwdConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordNewPwdConfirmationComponent", function() { return ForgotPasswordNewPwdConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _utilities_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utilities/validator */ "./src/utilities/validator.ts");










var ForgotPasswordNewPwdConfirmationComponent = /** @class */ (function () {
    function ForgotPasswordNewPwdConfirmationComponent(router, formBuilder, activatedRoute, toastr, http, authService, spinner) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.http = http;
        this.authService = authService;
        this.spinner = spinner;
        this.passwordFormGroup = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, {
            validator: _utilities_validator__WEBPACK_IMPORTED_MODULE_9__["RegistrationValidator"].validate.bind(this)
        });
    }
    Object.defineProperty(ForgotPasswordNewPwdConfirmationComponent.prototype, "f", {
        get: function () { return this.passwordFormGroup.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordNewPwdConfirmationComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordNewPwdConfirmationComponent.prototype.changePassword = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.passwordFormGroup.invalid) {
            return;
        }
        this.spinner.show();
        var newPasswordObj = {
            emailId: this.activatedRoute.snapshot.params['source'],
            password: this.passwordFormGroup.value.repeatPassword,
            role: this.activatedRoute.snapshot.params['role'],
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/createNewPassword', newPasswordObj)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.spinner.hide();
                _this.toastr.success('Password Changed Successfully');
                _this.router.navigate(['/auth/login/0']);
            }
        });
    };
    ForgotPasswordNewPwdConfirmationComponent.prototype.cancel = function () {
        this.router.navigate(['/auth/login/0']);
    };
    ForgotPasswordNewPwdConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password-new-pwd-confirmation',
            template: __webpack_require__(/*! ./forgot-password-new-pwd-confirmation.component.html */ "./src/app/auth/forgot-password-new-pwd-confirmation/forgot-password-new-pwd-confirmation.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password-new-pwd-confirmation.component.scss */ "./src/app/auth/forgot-password-new-pwd-confirmation/forgot-password-new-pwd-confirmation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], ForgotPasswordNewPwdConfirmationComponent);
    return ForgotPasswordNewPwdConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/auth/forgot-password-otp-verification/forgot-password-otp-verification.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/auth/forgot-password-otp-verification/forgot-password-otp-verification.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozblueheader></app-commontopprozblueheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n    <!-- <h5 class=\"row-title\"><i class=\"typcn typcn-folder themeprimary\"></i>Simple Tabs</h5> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-2 col-sm-2 col-xs-12\"> </div>\r\n      <!-- CONTENT - STARTS HERE -->\r\n      <div class=\"col-lg-8 col-sm-8 col-xs-12\">\r\n        <!-- NEW PROZ REGISTRATION - STARTS HERE -->\r\n        <div class=\"login-container animated fadeInDown\">\r\n          <div class=\"loginbox bg-white\">\r\n            <div class=\"widget-body\">\r\n              <div id=\"registration-form\">\r\n                <form role=\"form\" [formGroup]=\"forgotPasswordOtpVerification\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"loginbox-title\">Verification Code</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <hr class=\"hr-magenta-title\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"typeofbusiness\">Enter Verification Code <span class=\"mandatory\">*</span></label>\r\n                        <span class=\"input-icon icon-right\">\r\n                          <input type=\"text\" formControlName=\"otp\" class=\"form-control\" id=\"Otp\"\r\n                            placeholder=\"Enter the Code\" [(ngModel)]=\"vcode\" (ngModelChange)=\"vcodeChange(vcode)\"\r\n                            required data-bv-notempty-message=\"Mobile Verification Code is required\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && g.otp.errors }\">\r\n                          <i class=\"fa fa-sort-alpha-asc\"></i><i class=\"fa fa-sort-numeric-asc\"></i>\r\n                        </span>\r\n                        <div *ngIf=\"submitted && g.otp.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"g.otp.errors.required\">\r\n                            <p style=\"color: red; font-size: 11px\">* Required Verification Code </p>\r\n                          </div>\r\n                        </div>\r\n                        <small *ngIf=\"otpValidated\">\r\n                          <p style=\"color:green; font-size: 11px\">Mobile Verification Code Validated</p>\r\n                        </small>\r\n                        <small *ngIf=\"otpNotValidated\">\r\n                          <p style=\"color:red; font-size: 11px\">Mobile Verification Code Not Validated. Please Enter\r\n                            Valid Verification Code</p>\r\n                        </small>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"col-sm-1\">\r\n                        <div class=\"form-group\">\r\n\r\n                        </div>\r\n\r\n                      </div>\r\n                      <div class=\"col-sm-5\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Verify Code\"\r\n                            (click)=\"verifyOTP()\">\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-sm-6\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Resend Code\"\r\n                            (click)=\"resendVerificationCode()\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- NEW PROZ REGISTRATION - ENDS HERE-->\r\n      </div>\r\n      <!-- CCONTENT - ENDS HERE-->\r\n      <div class=\"col-lg-2 col-sm-2 col-xs-12\"> </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/forgot-password-otp-verification/forgot-password-otp-verification.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/auth/forgot-password-otp-verification/forgot-password-otp-verification.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  position: relative;\n  margin: 3% auto;\n  max-width: 100%; }\n\n.login-container .loginbox {\n  position: relative;\n  width: 100% !important;\n  height: auto !important;\n  padding: 0 0 0px 0;\n  box-shadow: 0 0 14px rgba(0, 0, 0, 0.1); }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-facebook {\n  float: left;\n  border: 2px solid #3b5998;\n  color: #3b5998;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 40%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-twitter {\n  float: left;\n  border: 2px solid #29c1f6;\n  color: #29c1f6;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 35%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-google {\n  float: right;\n  border: 2px solid #ef4f1d;\n  color: #ef4f1d;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  background-color: #fff; }\n\n.loginbox-social {\n  padding: 0 0 0 0 !important; }\n\n.loginbox-title {\n  font-weight: bold !important;\n  font-size: 25px !important; }\n\nlabel {\n  font-weight: bold !important; }\n\nlabel .mandatory {\n  color: red;\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n.hr-blue-title {\n  border-top: 3px solid #5DB2FF !important; }\n\n.hr-blue {\n  border-top: 1px solid #5DB2FF !important; }\n\n.btn {\n  font-size: 14px !important;\n  font-weight: bold !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtb3RwLXZlcmlmaWNhdGlvbi9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxcYXV0aFxcZm9yZ290LXBhc3N3b3JkLW90cC12ZXJpZmljYXRpb25cXGZvcmdvdC1wYXNzd29yZC1vdHAtdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFHbEIsd0NBQW1DLEVBQ3RDOztBQUVEO0VBQ0ksWUFBVztFQUNYLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLFlBQVc7RUFDWCwwQkFBeUI7RUFDekIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWix1QkFBc0IsRUFDekI7O0FBR0E7RUFDRyw0QkFBMkIsRUFDOUI7O0FBR0Q7RUFDSSw2QkFBNEI7RUFDNUIsMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0ksNkJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksV0FBUztFQUNULDJCQUEwQjtFQUMxQiw2QkFBNEIsRUFDL0I7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSwyQkFBMEI7RUFDMUIsNkJBQTRCLEVBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQtb3RwLXZlcmlmaWNhdGlvbi9mb3Jnb3QtcGFzc3dvcmQtb3RwLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXIge1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBtYXJnaW46IDMlIGF1dG87XHJcbiAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gfVxyXG4gXHJcbiAubG9naW4tY29udGFpbmVyIC5sb2dpbmJveCB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgcGFkZGluZzogMCAwIDBweCAwO1xyXG4gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE0cHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMTRweCByZ2JhKDAsMCwwLC4xKTtcclxuICAgICBib3gtc2hhZG93OiAwIDAgMTRweCByZ2JhKDAsMCwwLC4xKTtcclxuIH1cclxuIFxyXG4gLmxvZ2luLWNvbnRhaW5lciAubG9naW5ib3ggLmxvZ2luYm94LXNvY2lhbCAuc29jaWFsLWJ1dHRvbnMgLmJ1dHRvbi1mYWNlYm9vayB7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgYm9yZGVyOiAycHggc29saWQgIzNiNTk5ODtcclxuICAgICBjb2xvcjogIzNiNTk5ODtcclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogNDAlO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiB9XHJcbiBcclxuIC5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC1zb2NpYWwgLnNvY2lhbC1idXR0b25zIC5idXR0b24tdHdpdHRlciB7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgYm9yZGVyOiAycHggc29saWQgIzI5YzFmNjtcclxuICAgICBjb2xvcjogIzI5YzFmNjtcclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDogMzUlO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiB9XHJcbiBcclxuIC5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC1zb2NpYWwgLnNvY2lhbC1idXR0b25zIC5idXR0b24tZ29vZ2xlIHtcclxuICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgYm9yZGVyOiAycHggc29saWQgI2VmNGYxZDtcclxuICAgICBjb2xvcjogI2VmNGYxZDtcclxuICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiB9XHJcbiBcclxuIFxyXG4gIC5sb2dpbmJveC1zb2NpYWwge1xyXG4gICAgIHBhZGRpbmc6IDAgMCAwIDAgIWltcG9ydGFudDsgXHJcbiB9XHJcbiBcclxuIFxyXG4gLmxvZ2luYm94LXRpdGxle1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIGxhYmVse1xyXG4gICAgIGZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gbGFiZWwgLm1hbmRhdG9yeXtcclxuICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmhyLWJsdWUtdGl0bGV7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjNURCMkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5oci1ibHVleyAgICBcclxuICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzVEQjJGRiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnRuIHtcclxuICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/forgot-password-otp-verification/forgot-password-otp-verification.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/auth/forgot-password-otp-verification/forgot-password-otp-verification.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ForgotPasswordOtpVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordOtpVerificationComponent", function() { return ForgotPasswordOtpVerificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");









var ForgotPasswordOtpVerificationComponent = /** @class */ (function () {
    function ForgotPasswordOtpVerificationComponent(router, formBuilder, route, toastr, http, authService, spinner) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.route = route;
        this.toastr = toastr;
        this.http = http;
        this.authService = authService;
        this.spinner = spinner;
        this.submitted = false;
        this.otpValidated = false;
        this.otpNotValidated = false;
        this.oneToManyRoles = [];
        this.forgotPasswordOtpVerification = this.formBuilder.group({
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    Object.defineProperty(ForgotPasswordOtpVerificationComponent.prototype, "g", {
        get: function () { return this.forgotPasswordOtpVerification.controls; },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordOtpVerificationComponent.prototype.ngOnInit = function () {
        this.getUserInfo(this.route.snapshot.params['source']);
    };
    ForgotPasswordOtpVerificationComponent.prototype.vcodeChange = function (vcode) {
        var _this = this;
        if (vcode == undefined || vcode == '' || vcode == null)
            return;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/validateverificationcode/' + this.route.snapshot.params['source'] + '/' + this.route.snapshot.params['mode'] + '/' + vcode, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.otpValidated = true;
                _this.otpNotValidated = false;
            }
            else {
                _this.otpValidated = false;
                _this.otpNotValidated = true;
            }
        });
    };
    ForgotPasswordOtpVerificationComponent.prototype.resendVerificationCode = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        var passkeyObj = {
            "mode": this.route.snapshot.params['mode'],
            "emailId": this.route.snapshot.params['source'],
            "role": this.route.snapshot.params['role'],
            "source": this.route.snapshot.params['mode'] == "sms" ? this.userData.mobileNumber : this.userData.emailId
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/passcodeGeneratorForPasswordGeneration', passkeyObj, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.route.snapshot.params['mode'] == 'sms' ? _this.toastr.success('You will received your verification code to your mobile shortly') : _this.toastr.success('You will received your verification code to your email shortly');
            }
        });
    };
    ForgotPasswordOtpVerificationComponent.prototype.verifyOTP = function () {
        this.submitted = true;
        if (this.forgotPasswordOtpVerification.invalid || this.otpValidated == false) {
            return;
        }
        this.router.navigate(['/auth/forgotPassNewPwdConfirmation/' + this.route.snapshot.params['mode'] + '/' + this.route.snapshot.params['source'] + '/' + this.route.snapshot.params['role']]);
    };
    ForgotPasswordOtpVerificationComponent.prototype.getUserInfo = function (emailId) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getUserInfo/' + emailId, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.oneToManyRoles = response.response;
                var userData = _this.oneToManyRoles.filter(function (val) { return val.emailId == emailId && val.role == _this.route.snapshot.params['role']; });
                _this.userData = userData[0];
            }
        });
    };
    ForgotPasswordOtpVerificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password-otp-verification',
            template: __webpack_require__(/*! ./forgot-password-otp-verification.component.html */ "./src/app/auth/forgot-password-otp-verification/forgot-password-otp-verification.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password-otp-verification.component.scss */ "./src/app/auth/forgot-password-otp-verification/forgot-password-otp-verification.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], ForgotPasswordOtpVerificationComponent);
    return ForgotPasswordOtpVerificationComponent;
}());



/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozblueheader></app-commontopprozblueheader>\r\n<div class=\"container\">\r\n  <div class=\"body\">\r\n    <!-- <h5 class=\"row-title\"><i class=\"typcn typcn-folder themeprimary\"></i>Simple Tabs</h5> -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-2 col-sm-2 col-xs-12\"> </div>\r\n      <!-- CONTENT - STARTS HERE -->\r\n      <div class=\"col-lg-8 col-sm-8 col-xs-12\">\r\n        <!-- NEW PROZ REGISTRATION - STARTS HERE -->\r\n        <div class=\"login-container animated fadeInDown\">\r\n          <div class=\"loginbox bg-white\">\r\n            <div class=\"widget-body\">\r\n              <div id=\"registration-form\">\r\n                <form role=\"form\" [formGroup]=\"forgotPassword\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"loginbox-title\">Forgot Password</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <hr class=\"hr-magenta-title\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <div class=\"form-group\">\r\n                        <h4>We will need to verify your account prior to resetting your password. Where would like to\r\n                          receive your verification code?</h4>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <hr>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                      <div class=\"form-group\" *ngIf=\"displayingRoles\">\r\n                        <div class=\"col-lg-1 col-sm-1 col-xs-1\">\r\n                        </div>\r\n                        <div class=\"col-lg-10 col-sm-10 col-xs-10\">\r\n                          <h4>Select Any one of the Role Below to Change Password:-</h4><br/>\r\n                          <div class=\"control-group\" *ngFor=\"let data of displayRoles\">\r\n                            <div class=\"radio\">\r\n                              <label>\r\n                                <input formControlName=\"role\" value=\"{{data.role}}\" type=\"radio\"\r\n                                  name=\"role\" class=\"colored-success\" (change)=\"selectRole(data.role)\">\r\n                                <span class=\"text\">{{data.role}}</span>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"col-lg-1 col-sm-1 col-xs-1\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <br />\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"control-group\">\r\n                          <div class=\"col-lg-1 col-sm-1 col-xs-1\">\r\n                          </div>\r\n                          <div class=\"col-lg-5 col-sm-5 col-xs-5\">\r\n                            <label>\r\n                              Registered Email\r\n                            </label>\r\n                          </div>\r\n                          <div class=\"col-lg-5 col-sm-5 col-xs-5\">\r\n                            <label>\r\n                              Registered Mobile Number Ending with\r\n\r\n                            </label>\r\n                          </div>\r\n                          <div class=\"col-lg-1 col-sm-1 col-xs-1\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                      <div class=\"form-group\" *ngIf=\"userDataStatus\">\r\n                        <div class=\"control-group\">\r\n                          <div class=\"col-lg-1 col-sm-1 col-xs-1\">\r\n                          </div>\r\n                          <div class=\"col-lg-5 col-sm-5 col-xs-5\">\r\n                            <div class=\"radio\">\r\n                              <label>\r\n                                <input formControlName=\"modeOfCommunication\" value=\"mail\" type=\"radio\"\r\n                                  name=\"modeOfCommunication\" class=\"colored-success\">\r\n                                <span class=\"text\">{{userData.emailId}}</span>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-lg-5 col-sm-5 col-xs-5\">\r\n                            <div class=\"radio\">\r\n                              <label>\r\n                                <input formControlName=\"modeOfCommunication\" value=\"sms\" type=\"radio\"\r\n                                  name=\"modeOfCommunication\" class=\"colored-success\">\r\n                                <span class=\"text\">{{userData.maskedMobileNumber}}\r\n                                </span>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-lg-1 col-sm-1 col-xs-1\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n                      <div class=\"form-group\">\r\n                        <hr>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-2 col-sm-2 col-xs-12\"></div>\r\n                      <div class=\"col-lg-4 col-sm-4 col-xs-12\">\r\n                        <input type=\"button\" class=\"btn btn-lg btn-info shiny btn-block\" value=\"Send Verification Code\"\r\n                          (click)=\"verifier()\" [disabled]=\"!userDataStatus\">\r\n                        <!-- (click)=\"sendVerificationCode()\" id=\"previous-7\"> -->\r\n\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-sm-4 col-xs-12\">\r\n                        <input type=\"button\" class=\"btn btn-lg btn-darkorange shiny btn-block\" value=\"Cancel\"\r\n                          (click)=\"cancel()\">\r\n                      </div>\r\n                      <div class=\"col-lg-2 col-sm-2 col-xs-12\"></div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- <h4 class=\"col-sm-6\">Your Mobile Code is: {{mobileCode}}</h4>\r\n                    <h4 class=\"col-sm-6\">Your Mail Code is: {{mailOTP}}</h4> -->\r\n                  <!-- <div class=\"row\">\r\n                    <div class=\"col-sm-6\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"typeofbusiness\">Email Id / Phone Number <span class=\"mandatory\">*</span></label>\r\n                        <span class=\"input-icon icon-right\">\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"email\"\r\n                            placeholder=\"Enter Email Id / Phone Number\" (keyup)=\"checkPassword()\" />\r\n                          <span class=\"help-inline\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['oldPassword'].touched\">\r\n                              <small *ngIf=\"registrationFormGroup.controls['oldPassword'].hasError('required')\">\r\n                                <p style=\"color: red;  font-size: 11px\"> Email Id / Phone Number should not be\r\n                                  empty</p>\r\n                              </small>\r\n\r\n                              <p style=\"color: red;\" *ngIf=\"pass1\">Email Id / Phone Number does not match</p>\r\n                            </small>\r\n\r\n                          </span>\r\n\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                          <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Send OTP\"\r\n                            (click)=\"signUpBtn()\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-6\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"typeofbusiness\">Mobile/Web OTP <span class=\"mandatory\">*</span></label>\r\n                        <span class=\"input-icon icon-right\">\r\n                          <input type=\"text\" class=\"form-control\" formControlName=\"oldPassword\" placeholder=\"Enter OTP\"\r\n                            (keyup)=\"checkPassword()\" />\r\n                          <span class=\"help-inline\">\r\n                            <small *ngIf=\"registrationFormGroup.controls['oldPassword'].touched\">\r\n                              <small *ngIf=\"registrationFormGroup.controls['oldPassword'].hasError('required')\">\r\n                                <p style=\"color: red;  font-size: 11px\"> Enter Valid OTP</p>\r\n                              </small>\r\n\r\n                              <p style=\"color: red;\" *ngIf=\"pass1\">Password does not match</p>\r\n                            </small>\r\n\r\n                          </span>\r\n\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-4\">\r\n                          <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"Verify OTP\"\r\n                            (click)=\"signUpBtn()\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"row\" [formGroup]=\"passwordFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n                    <div class=\"col-sm-6\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"password\">New Password <span class=\"mandatory\">*</span></label>\r\n                        <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\"\r\n                          formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.password.errors.required\">\r\n                            <p style=\"color: red; font-size: 11px\">* Required Password</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- <p class=\"bg-primary\" *ngIf=\"passwordFormGroup.controls.password.errors?.required && passwordFormGroup.controls.password.touched\">Password is required</p> -->\r\n\r\n                  <!-- </div>\r\n                    <div class=\"col-sm-6\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"repeatPassword\">Confirm Password <span class=\"mandatory\">*</span></label>\r\n                        <input class=\"form-control\" type=\"password\" name=\"repeatPassword\" placeholder=\"Re-Type Password\"\r\n                          formControlName=\"repeatPassword\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.repeatPassword.errors }\">\r\n                        <div *ngIf=\"submitted && f.repeatPassword.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.repeatPassword.errors.required\">\r\n                            <p style=\"color: red; font-size: 11px\">* Request Repeat Password</p>\r\n                          </div>\r\n                        </div> -->\r\n                  <!-- <p class=\"bg-primary\" *ngIf=\"passwordFormGroup.controls.repeatPassword.errors?.required && passwordFormGroup.controls.repeatPassword.touched\">Repeat password is required</p> -->\r\n                  <!-- <p *ngIf=\"passwordFormGroup.errors?.doesMatchPassword\" style=\"color: red; font-size: 11px\">*\r\n                          Password does not match\r\n                        </p>\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-12\">\r\n                      <hr class=\"hr-magenta\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-2\"></div>\r\n                    <div class=\"col-sm-4\">\r\n                      <div class=\"form-group\">\r\n                        <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"OK\" (click)=\"resendOTP()\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                      <div class=\"form-group\">\r\n                        <input type=\"submit\" class=\"btn btn-azure shiny btn-block\" value=\"Sign Up\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-2\"></div>\r\n                  </div> -->\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- NEW PROZ REGISTRATION - ENDS HERE-->\r\n      </div>\r\n      <!-- CCONTENT - ENDS HERE-->\r\n      <div class=\"col-lg-2 col-sm-2 col-xs-12\"> </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  position: relative;\n  margin: 3% auto;\n  max-width: 100%; }\n\n.login-container .loginbox {\n  position: relative;\n  width: 100% !important;\n  height: auto !important;\n  padding: 0 0 0px 0;\n  box-shadow: 0 0 14px rgba(0, 0, 0, 0.1); }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-facebook {\n  float: left;\n  border: 2px solid #3b5998;\n  color: #3b5998;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 40%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-twitter {\n  float: left;\n  border: 2px solid #29c1f6;\n  color: #29c1f6;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 35%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-google {\n  float: right;\n  border: 2px solid #ef4f1d;\n  color: #ef4f1d;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  background-color: #fff; }\n\n.loginbox-social {\n  padding: 0 0 0 0 !important; }\n\n.loginbox-title {\n  font-weight: bold !important;\n  font-size: 25px !important; }\n\nlabel {\n  font-weight: bold !important; }\n\nlabel .mandatory {\n  color: red;\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n.hr-blue-title {\n  border-top: 3px solid #5DB2FF !important; }\n\n.hr-blue {\n  border-top: 1px solid #5DB2FF !important; }\n\n.btn {\n  font-size: 14px !important;\n  font-weight: bold !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvRDpcXFRvcHByb3pcXFRvcFByb3pfQWR2YW5jZV9DbGllbnQvc3JjXFxhcHBcXGF1dGhcXGZvcmdvdC1wYXNzd29yZFxcZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLHdCQUF1QjtFQUN2QixtQkFBa0I7RUFHbEIsd0NBQW1DLEVBQ3RDOztBQUVEO0VBQ0ksWUFBVztFQUNYLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLHVCQUFzQixFQUN6Qjs7QUFFRDtFQUNJLFlBQVc7RUFDWCwwQkFBeUI7RUFDekIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWix1QkFBc0IsRUFDekI7O0FBR0E7RUFDRyw0QkFBMkIsRUFDOUI7O0FBR0Q7RUFDSSw2QkFBNEI7RUFDNUIsMkJBQTBCLEVBQzdCOztBQUVEO0VBQ0ksNkJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksV0FBUztFQUNULDJCQUEwQjtFQUMxQiw2QkFBNEIsRUFDL0I7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSx5Q0FBd0MsRUFDM0M7O0FBRUQ7RUFDSSwyQkFBMEI7RUFDMUIsNkJBQTRCLEVBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDMlIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgMCAwcHggMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDE0cHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE0cHggcmdiYSgwLDAsMCwuMSk7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC1zb2NpYWwgLnNvY2lhbC1idXR0b25zIC5idXR0b24tZmFjZWJvb2sge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2I1OTk4O1xyXG4gICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciAubG9naW5ib3ggLmxvZ2luYm94LXNvY2lhbCAuc29jaWFsLWJ1dHRvbnMgLmJ1dHRvbi10d2l0dGVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzI5YzFmNjtcclxuICAgIGNvbG9yOiAjMjljMWY2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IC5sb2dpbmJveC1zb2NpYWwgLnNvY2lhbC1idXR0b25zIC5idXR0b24tZ29vZ2xlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZjRmMWQ7XHJcbiAgICBjb2xvcjogI2VmNGYxZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbiAubG9naW5ib3gtc29jaWFsIHtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDAgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcblxyXG4ubG9naW5ib3gtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sYWJlbCAubWFuZGF0b3J5e1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHItYmx1ZS10aXRsZXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzVEQjJGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHItYmx1ZXsgICAgXHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzVEQjJGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");









var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, formBuilder, activatedRoute, toastr, http, authService, spinner) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.http = http;
        this.authService = authService;
        this.spinner = spinner;
        this.displayRoles = [];
        this.userDataStatus = false;
        this.displayCredential = false;
        this.displayingRoles = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotPassword = this.formBuilder.group({
            modeOfCommunication: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.getUserInfo(this.activatedRoute.snapshot.params['emailId']);
    };
    ForgotPasswordComponent.prototype.selectRole = function () {
        var _this = this;
        if (this.displayRoles.length > 0) {
            var userData = this.displayRoles.filter(function (val) { return val.role == _this.forgotPassword.value.role; });
            this.userData = userData[0];
            this.userData.maskedMobileNumber = this.userData.mobileNumber.replace(/.(?=.{4})/g, 'x');
            this.userData.maskedMobileNumber = this.userData.maskedMobileNumber.substr(0, 3) + '-' + this.userData.maskedMobileNumber.substr(3, 3) + '-' + this.userData.maskedMobileNumber.substr(8, 8);
            this.displayCredential = true;
        }
    };
    ForgotPasswordComponent.prototype.verifier = function () {
        if (this.forgotPassword.invalid)
            return;
        this.passCodeGenerator(this.forgotPassword.value.modeOfCommunication);
    };
    ForgotPasswordComponent.prototype.cancel = function () {
        this.router.navigate(['/auth/login/0']);
    };
    ForgotPasswordComponent.prototype.passCodeGenerator = function (mode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        var passKeyObj = {
            "mode": mode,
            "role": this.userData.role,
            "source": mode == 'sms' ? this.userData.mobileNumber : this.userData.emailId,
            "emailId": this.userData.emailId
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/passcodeGeneratorForPasswordGeneration', passKeyObj, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.router.navigate(['/auth/forgotPassOtpVerification/' + mode + '/' + _this.userData.emailId + '/' + _this.userData.role]);
            }
        });
    };
    ForgotPasswordComponent.prototype.getUserInfo = function (emailId) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getUserInfo/' + emailId, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.userData = response.response[0];
                _this.displayRoles = response.response;
                _this.displayRoles.forEach(function (e) {
                    e.maskedMobileNumber = e.mobileNumber.replace(/.(?=.{4})/g, 'x');
                    e.maskedMobileNumber = e.maskedMobileNumber.substr(0, 3) + '-' + e.maskedMobileNumber.substr(3, 3) + '-' + e.maskedMobileNumber.substr(8, 8);
                });
                _this.forgotPassword.get('role').setValue(_this.userData.role);
                _this.selectRole();
                _this.displayRoles.length == 1 ? _this.displayingRoles = false : _this.displayingRoles = true;
                _this.userDataStatus = true;
            }
        });
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/auth/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/auth/forgot-password/forgot-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/auth/list-roles/list-roles.component.html":
/*!***********************************************************!*\
  !*** ./src/app/auth/list-roles/list-roles.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonheader></app-commonheader>\r\n<app-commonsidemenu></app-commonsidemenu>\r\n<div class=\"page-content\">\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a href=\"#\">Home</a>\r\n      </li>\r\n      <li>Master</li>\r\n      <li>Roles</li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        List of Roles\r\n      </h1>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"page-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"col-sm-3\">\r\n          <a href=\"javascript:void(0);\" class=\"btn btn-labeled btn-success\" (click)=\"addRole()\">\r\n            <i class=\"btn-label typcn typcn-plus\"></i>Add Roles\r\n          </a>\r\n        </div>\r\n        &nbsp; &nbsp;\r\n\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"form-group\">\r\n            <span class=\"input-icon icon-right\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"SearchCategory\" placeholder=\"Eg: Search For Role\">\r\n              <i class=\"fa fa-search\"></i>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"widget\">\r\n          <div class=\"widget-header with-footer header bg-blue\">\r\n            <span class=\"widget-caption\">List Of Roles</span>\r\n          </div>\r\n          <div class=\"widget-body\">\r\n            <div class=\"flip-scroll\">\r\n              <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                <thead class=\"flip-content bordered-palegreen\">\r\n                  <tr>\r\n                    <th>\r\n                      Role Code\r\n                    </th>\r\n                    <th>\r\n                      Role Name\r\n                    </th>\r\n                    <th>\r\n                      Role Status\r\n                    </th>\r\n                    <th>\r\n                      Status\r\n                    </th>\r\n                    <th>\r\n                      Edit\r\n                    </th>\r\n                    <!-- <th>\r\n                      Delete\r\n                    </th> -->\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let data of roleData\">\r\n                    <td>\r\n                      <a [routerLink]=\"['/auth/roleMatrix',data.roleDescription,data.roleCode]\">{{data.roleCode}}</a>\r\n                    </td>\r\n                    <td>\r\n                      <a>\r\n                        {{data.roleDescription}}\r\n                      </a>\r\n                    </td>\r\n                    <td>\r\n                      <span *ngIf=\"data.roleStatus=='PERMISSIONS'\" class=\"label label-success label-mini\">{{data.roleStatus}}</span>\r\n                      <span *ngIf=\"data.roleStatus=='NO PERMISSION'\" class=\"label label-danger label-mini\">{{data.roleStatus}}</span>\r\n                    </td>\r\n                    <td>\r\n                      <span *ngIf=\"data.status=='ACTIVE'\" class=\"label label-success label-mini\">{{data.status}}</span>\r\n                      <span *ngIf=\"data.status=='INACTIVE'\" class=\"label label-danger label-mini\">{{data.status}}</span>\r\n                    </td>\r\n                    <td>\r\n                      <a class=\"btn btn-primary btn-sm shiny\" (click)=\"editRole(data)\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                      </a>\r\n                    </td>\r\n                    <!-- <td>\r\n                      <a class=\"btn btn-danger btn-sm shiny\">\r\n                        <i class=\"fa fa-trash-o\"></i>\r\n                      </a>\r\n                    </td> -->\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <br>\r\n            <!-- <div class=\"row\">\r\n              <div class=\"col-sm-4\">\r\n                <p class=\"span4\" style=\"margin-left: 10px;font-weight:bold;\">{{roleData.length}} Records Found</p>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"span12\" *ngIf=\"!dataRoles\">\r\n          <div class=\"watermark\">No Records Available</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/list-roles/list-roles.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/auth/list-roles/list-roles.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbGlzdC1yb2xlcy9saXN0LXJvbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/list-roles/list-roles.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/list-roles/list-roles.component.ts ***!
  \*********************************************************/
/*! exports provided: ListRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRolesComponent", function() { return ListRolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");







var ListRolesComponent = /** @class */ (function () {
    function ListRolesComponent(beyond, router, http, toastr) {
        this.beyond = beyond;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.dataRoles = false;
    }
    ListRolesComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.getRoles();
    };
    ListRolesComponent.prototype.getRoles = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getRbacRolesData', options)
            .subscribe(function (data) {
            var roles = data.json();
            _this.roleData = roles.response;
            _this.roleData.forEach(function (e) {
                console.log(e);
                if (e.permissions === "" || e.permissions === null || e.permissions === undefined) {
                    e.roleStatus = "NO PERMISSION";
                }
                else {
                    e.roleStatus = "PERMISSIONS";
                }
            });
            _this.dataRoles = true;
            console.log("service category Data" + JSON.stringify(_this.roleData));
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    ListRolesComponent.prototype.addRole = function () {
        this.router.navigate(['/auth/addRole']);
    };
    ListRolesComponent.prototype.editRole = function (roleCode) {
        console.log("roleCode" + JSON.stringify(roleCode));
        this.router.navigate(['/auth/editRole', roleCode.roleCode]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListRolesComponent.prototype, "myInput", void 0);
    ListRolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-list-roles',
            template: __webpack_require__(/*! ./list-roles.component.html */ "./src/app/auth/list-roles/list-roles.component.html"),
            styles: [__webpack_require__(/*! ./list-roles.component.scss */ "./src/app/auth/list-roles/list-roles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ListRolesComponent);
    return ListRolesComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commontopprozblueheader></app-commontopprozblueheader>\r\n<div class=\"container\">\r\n    <div class=\"body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-sm-4 col-xs-12\">\r\n            </div>\r\n            <!--LOGIN TAB - STARTS HERE-->\r\n            <div class=\"col-lg-4 col-sm-4 col-xs-12\">\r\n                <div class=\"tabbable\">\r\n                    <br><br><br>\r\n                    <div class=\"tab-content\">\r\n                        <!--CUSTOMER TAB CONTENT - STARTS HERE-->\r\n                        <div class=\"tab-pane in active\">\r\n                            <form [formGroup]=\"serProSignIn\" (ngSubmit)=\"onSubmit()\">\r\n                                <div class=\"login-container animated fadeInDown\">\r\n                                    <div class=\"loginbox bg-white\">\r\n                                        <div class=\"loginbox-title\">SIGN IN</div>\r\n                                        <div class=\"loginbox-textbox\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\" class=\"form-control\" placeholder=\"Email\"\r\n                                                    formControlName=\"Email\"\r\n                                                    pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.Email.errors }\"\r\n                                                    (ngModelChange)=\"dirtRemover()\">\r\n                                                <div *ngIf=\"submitted && f.Email.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.Email.errors.required\">\r\n                                                        <p style=\"color: red; font-size: 11px\">Enter Email ID</p>\r\n                                                    </div>\r\n                                                    <div style=\"color: red; font-size: 11px\"\r\n                                                        *ngIf=\"f.Email.errors.pattern\">Invalid\r\n                                                        Email ID</div>\r\n                                                </div>\r\n                                                <small *ngIf=\"mailError\">\r\n                                                    <p style=\"color:red\"> Email ID do not Exists.\r\n                                                    </p>\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"loginbox-textbox\">\r\n                                            <input type=\"password\" class=\"form-control\" placeholder=\"Password\"\r\n                                                formControlName=\"password\"\r\n                                                [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\r\n                                                (ngModelChange)=\"dirtRemoverForPassword()\" />\r\n                                            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"f.password.errors.required\">\r\n                                                    <p style=\"color: red; font-size: 11px\">Enter Password</p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <small *ngIf=\"passwordError\">\r\n                                                <p style=\"color:red\"> Incorrect Password / User Disabled\r\n                                                </p>\r\n                                            </small>\r\n                                        </div>\r\n\r\n                                        <div class=\"loginbox-textbox\" *ngIf=\"roleOptions\">\r\n                                            <span class=\"input-icon icon-right\">\r\n                                                <select class=\"form-control\" id=\"businessType\" name=\"status\"\r\n                                                    data-bv-field=\"row-title\" formControlName=\"role\"\r\n                                                    [ngClass]=\"{ 'is-invalid': submitted && f.role.errors }\" required>\r\n                                                    <option value=\"\">--Select Role--</option>\r\n                                                    <option *ngFor=\"let data of RoleDataValue\" value=\"{{data.role}}\">{{data.role}}</option>\r\n                                                    <!-- <option value=\"PRO\">Pro</option>\r\n                                                    <option value=\"VANLYNK\">Vanlynk</option>\r\n                                                    <option value=\"CUST\">Customer</option> -->\r\n                                                </select>\r\n                                            </span>\r\n                                            <div *ngIf=\"roleOptions\">\r\n                                                <div *ngIf=\"submitted && f.role.errors\" class=\"invalid-feedback\">\r\n                                                    <div *ngIf=\"f.role.errors.required\">\r\n                                                        <p style=\"color: red; font-size: 11px\">Select Role</p>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"loginbox-submit\">\r\n                                            <input type=\"submit\" class=\"btn btn-azure shiny btn-block\" value=\"Sign In\">\r\n                                        </div>\r\n                                        <small *ngIf=\"noVanlynkLogin\" style=\"text-align: center;\">\r\n                                            <p style=\"color:red\"> Login Failed. Contact System Admin\r\n                                            </p>\r\n                                        </small>\r\n                                        <div class=\"loginbox-signup\">\r\n                                            <a (click)=\"forgotPassword()\">Forgot Password?</a>\r\n                                        </div>\r\n                                        <!-- <div class=\"loginbox-signup\">\r\n                                            <a [routerLink]=\"['/customerSignup']\">Sign Up With Email</a>\r\n                                        </div> -->\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                        <!--CUSTOMER TAB CONTENT - ENDS HERE-->\r\n                    </div>\r\n                    <!--TAB CONTENT - ENDS HERE-->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-4 col-sm-4 col-xs-12\">\r\n\r\n            </div>\r\n            <!--LOGIN TAB - ENDS HERE-->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-content {\n  width: 450px !important; }\n\n.mock {\n  color: red;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9EOlxcVG9wcHJvelxcVG9wUHJvel9BZHZhbmNlX0NsaWVudC9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksV0FBVTtFQUNWLG1CQUFrQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGVudHtcclxuICAgIHdpZHRoOjQ1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2Nre1xyXG4gICAgY29sb3I6IHJlZDsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _utilities_customValidators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utilities/customValidators */ "./src/utilities/customValidators.ts");










var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, formBuilder, activatedRoute, toastr, http, authService, spinner) {
        var _this = this;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.http = http;
        this.authService = authService;
        this.spinner = spinner;
        this.roleOptions = false;
        this.submitted = false;
        this.mailError = false;
        this.mailExists = false;
        this.noVanlynkLogin = false;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteConfigLoadStart"]) {
                //console.log('The load started ')
                _this.spinner.show();
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteConfigLoadEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
                _this.spinner.hide();
                //console.log('The load ended ')
            }
            else {
                //console.log('The else load')
                _this.spinner.hide();
            }
        });
        this.serProSignIn = this.formBuilder.group({
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            role: ['']
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.prozCode = localStorage.getItem("prozCode");
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.serProSignIn.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        var obj = {
            "emailId": this.serProSignIn.value.Email,
            "password": this.serProSignIn.value.password,
            "role": this.serProSignIn.value.role
        };
        console.log(obj);
        if (this.serProSignIn.value.role == 'CEO' || this.serProSignIn.value.role == 'IT Manager' || this.serProSignIn.value.role === 'COO' || this.serProSignIn.value.role === 'CFO' || this.serProSignIn.value.role === 'Operation Manager' ||
            this.serProSignIn.value.role === 'STAFF' || this.serProSignIn.value.role === 'Field Service Tech' || this.serProSignIn.value.role === 'Dispatcher' || this.serProSignIn.value.role === 'Bookkeeper' || this.serProSignIn.value.role === 'Day Labor'
            || this.serProSignIn.value.role === 'Admin' || this.serProSignIn.value.role === 'Owner' || this.serProSignIn.value.role === 'President' || this.serProSignIn.value.role === 'Channel Manager') {
            this.authService.staffLogin(obj)
                .subscribe(function (data) {
                var loginData = data;
                if (loginData.status == 200) {
                    _this.spinner.show();
                    _this.response = data.data;
                    localStorage.setItem('login', JSON.stringify(_this.response));
                    _this.router.navigate(['/staff/staffDashboard']);
                }
                else {
                    _this.passwordError = true;
                }
            }, function (error) {
                _this.toastr.warning('Unable to connect to server');
            });
        }
        else {
            this.authService.login(obj)
                .subscribe(function (data) {
                var loginData = data;
                if (loginData.status == 200) {
                    _this.spinner.show();
                    _this.response = data.data;
                    localStorage.setItem('login', JSON.stringify(_this.response));
                    if (data.data.role === 'PRO') {
                        _this.prozProfileExistence(data.data.loginCode);
                    }
                    else if (data.data.role === 'CUST' && data.data.vanlynk != 'Y') {
                        if (_this.activatedRoute.snapshot.params['id'] == 1) {
                            _this.router.navigate(['/customer/selectProz', data.data.loginCode]);
                        }
                        else if (_this.activatedRoute.snapshot.params['id'] == 0) {
                            _this.router.navigate(['/customer/customerDashboard', data.data.loginCode]);
                        }
                    }
                    else if (data.data.role === 'CUST' && data.data.vanlynk === 'Y') {
                        _this.spinner.hide();
                        _this.noVanlynkLogin = true;
                    }
                    else if (data.data.role === 'ADMIN') {
                        _this.router.navigate(['/admin/dashboard']);
                    }
                    else if (data.data.role === 'VANLYNK') {
                        _this.router.navigate(['/proz-dashboard/prozDashboard', data.data.loginCode]);
                    }
                }
                else {
                    _this.passwordError = true;
                }
            }, function (error) {
                _this.toastr.warning('Unable to connect to server');
            });
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var existsOrNot;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (!(this.serProSignIn.value.Email == "")) return [3 /*break*/, 1];
                        return [2 /*return*/];
                    case 1:
                        if (!(this.serProSignIn.value.Password == "")) return [3 /*break*/, 2];
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.userNameVerification()];
                    case 3:
                        existsOrNot = _a.sent();
                        console.log(existsOrNot);
                        if (existsOrNot['status'] == "FALSE") {
                            this.mailError = true;
                        }
                        else if (existsOrNot['status'] == "TRUE") {
                            this.mailError = false;
                            this.passwordError = false;
                            this.login();
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.dirtRemover = function () {
        this.mailError = false;
        this.passwordError = false;
        this.roleCheckingMail();
    };
    LoginComponent.prototype.dirtRemoverForPassword = function () {
        this.mailError = false;
        this.passwordError = false;
    };
    LoginComponent.prototype.prozProfileExistence = function (loginCode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/prozProfileCount' + "/" + loginCode, options)
            .subscribe(function (data) {
            var response = data.json();
            _this.prozProfileResponce = response.response;
            if (_this.prozProfileResponce == 1) {
                _this.router.navigate(['/proz-dashboard/prozDashboard', loginCode]);
            }
            else {
                _this.router.navigate(['/prozProfile/prozProfile', loginCode]);
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    LoginComponent.prototype.userNameVerification = function () {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.serProSignIn.value.Email == "") {
                    this.mailError = false;
                    this.disableUsername = false;
                    return [2 /*return*/, false];
                }
                else {
                    this.http
                        .get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url +
                        "/newUserNameVerification/" +
                        this.serProSignIn.value.Email)
                        .subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var mailResponse;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            mailResponse = data.json();
                            if (mailResponse.status == "TRUE") {
                                this.mailError = false;
                                this.passwordError = false;
                                resolve({
                                    status: 'TRUE',
                                });
                            }
                            else {
                                this.mailError = true;
                                resolve({
                                    status: 'FALSE',
                                });
                            }
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        }); });
    };
    LoginComponent.prototype.roleCheckingMail = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.serProSignIn.value.Email == "") {
                _this.mailError = true;
                _this.passwordError = true;
                _this.disableUsername = false;
                return false;
            }
            else {
                _this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/roleCheckingWithEmail/' + _this.serProSignIn.value.Email)
                    .subscribe(function (data) {
                    var roleCheckingResponse = data.json();
                    if (roleCheckingResponse.status == 200) {
                        if (roleCheckingResponse.response.length > 1) {
                            _this.roleOptions = true;
                            _this.RoleDataValue = roleCheckingResponse.response;
                        }
                        else if (roleCheckingResponse.response.length == 1) {
                            _this.roleOptions = false;
                            _this.serProSignIn.get('role').setValue(roleCheckingResponse.response[0].role);
                        }
                    }
                    else {
                        _this.mailError = false;
                        _this.passwordError = false;
                    }
                });
            }
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var existsOrNot;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.serProSignIn.value.Email == "") {
                            this.toastr.success('Enter your Email ID to reset your password');
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.userNameVerification()];
                    case 1:
                        existsOrNot = _a.sent();
                        console.log(existsOrNot);
                        if (existsOrNot['status'] == "FALSE") {
                            this.mailError = true;
                        }
                        else if (existsOrNot['status'] == "TRUE") {
                            this.mailError = false;
                            this.router.navigate(['/auth/forgotPass', this.serProSignIn.value.Email]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_customValidators__WEBPACK_IMPORTED_MODULE_9__["CustomValidators"]],
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/role-matrix/role-matrix.component.html":
/*!*************************************************************!*\
  !*** ./src/app/auth/role-matrix/role-matrix.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonheader></app-commonheader>\r\n<app-commonsidemenu></app-commonsidemenu>\r\n<div class=\"page-content\">\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home</a>\r\n      </li>\r\n      <li>Role Matrix</li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        {{roleName}}\r\n      </h1>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"page-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 col-md-12\">\r\n        <div class=\"well with-header with-footer\">\r\n          <div class=\"table-scrollable\">\r\n            <table class=\"table table-striped table-bordered table-hover\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">Modules</th>\r\n                  <th scope=\"col\">\r\n                    <div class=\"form-group\">\r\n                      <div class=\"checkbox\">\r\n                        <label>\r\n                          <input type=\"checkbox\" [(ngModel)]=\"selectAllPermissions\" (change)=\"selectAll(selectAllPermissions)\">\r\n                          <span class=\"text\"></span>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                  </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <ng-container *ngFor=\"let data of modulesData\">\r\n                  <tr *ngIf=\"data.parentId == modulesData[0].id\">\r\n                    <td><i *ngIf=\"data.openCollapse\" style=\"font-size: 18px\" class=\"fa fa-plus-circle\"\r\n                        (click)=\"openCollapse(data)\"></i><i *ngIf=\"data.closeCollapse\" style=\"font-size: 18px\"\r\n                        class=\"fa fa-minus-circle\"\r\n                        (click)=\"closeCollapse(data)\"></i>&nbsp;&nbsp;&nbsp;{{data.permissionDescription}}</td>\r\n                    <td>\r\n                      <div class=\"form-group\">\r\n                        <div class=\"checkbox\">\r\n                          <label>\r\n                            <input type=\"checkbox\" [(ngModel)]=\"data.checked\" (change)=\"changeMasterModule(data)\">\r\n                            <span class=\"text\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <!-- SECOND LEVEL COLLAPSE -->\r\n                  <ng-container *ngIf=\"data.closeCollapse\">\r\n                    <ng-container *ngFor=\"let subModules of modulesData\">\r\n                      <tr *ngIf=\"subModules.parentId == data.mainId\">\r\n                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{subModules.permissionDescription}}</td>\r\n                        <td>\r\n                          <div class=\"form-group\">\r\n                            <div class=\"checkbox\">\r\n                              <label>\r\n                                <input type=\"checkbox\" [(ngModel)]=\"subModules.checked\"\r\n                                  (change)=\"changeJuniorModule(subModules,data.mainId,data.checked)\">\r\n                                <span class=\"text\"></span>\r\n                              </label>\r\n                            </div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                  <!-- SECOND LEVEL COLLAPSE -->\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3\">\r\n        <div class=\"form-group\">\r\n          <input type=\"button\" class=\"btn btn-azure shiny btn-block\" value=\"+ Grant Permissions\" id=\"add-more\"\r\n            (click)=\"grantPermission()\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/role-matrix/role-matrix.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/auth/role-matrix/role-matrix.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcm9sZS1tYXRyaXgvcm9sZS1tYXRyaXguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/role-matrix/role-matrix.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/role-matrix/role-matrix.component.ts ***!
  \***********************************************************/
/*! exports provided: RoleMatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleMatrixComponent", function() { return RoleMatrixComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");







var RoleMatrixComponent = /** @class */ (function () {
    function RoleMatrixComponent(beyond, router, http, toastr, route) {
        this.beyond = beyond;
        this.router = router;
        this.http = http;
        this.toastr = toastr;
        this.route = route;
        this.modulesData = [];
        this.terminateCollapsableUtility = [];
        this.tempAccessLevel = [];
        this.roleDataPermissions = [];
    }
    RoleMatrixComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.roleName = this.route.snapshot.params['string'];
        this.fetchPermissions(this.route.snapshot.params['anyCode']);
        this.moduleLoader();
    };
    //PERMISSION FETCHER
    RoleMatrixComponent.prototype.fetchPermissions = function (roleCode) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/viewRoles/' + roleCode, options)
            .subscribe(function (data) {
            var permissions = data.json();
            if (permissions.status == 200) {
                _this.tempAccessLevel = permissions.response[0].permissions.split(',').map(function (i) {
                    return parseInt(i, 10);
                });
                return false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    //PERMISSION FETCHER
    //MODULE LOADER
    RoleMatrixComponent.prototype.moduleLoader = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/getAccessPermissions', options)
            .subscribe(function (data) {
            var module = data.json();
            if (module.status == 200) {
                _this.modulesData = module.response;
                _this.modulesData.forEach(function (item, index) {
                    item.checked = false;
                    item.openCollapse = true;
                    item.closeCollapse = false;
                });
                _this.modulesData.forEach(function (item) { return _this.tempAccessLevel.forEach(function (permissions) {
                    if (item.id == permissions) {
                        item.checked = true;
                        item.openCollapse = true;
                        item.closeCollapse = false;
                    }
                }); });
                return false;
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    //MODULE LOADER
    //COLLAPSE OPEN
    RoleMatrixComponent.prototype.openCollapse = function (modulesData) {
        this.terminateCollapsableUtility.push(modulesData);
        if (this.terminateCollapsableUtility.length == 2) {
            this.terminateCollapsableUtility[this.terminateCollapsableUtility.length - 2].openCollapse = true;
            this.terminateCollapsableUtility[this.terminateCollapsableUtility.length - 2].closeCollapse = false;
            this.terminateCollapsableUtility.shift();
        }
        modulesData.openCollapse = false;
        modulesData.closeCollapse = true;
        modulesData.mainId = modulesData.id;
    };
    //COLLAPSE OPEN
    //CLOSE COLLAPSE
    RoleMatrixComponent.prototype.closeCollapse = function (modulesData) {
        modulesData.openCollapse = true;
        modulesData.closeCollapse = false;
    };
    //CLOSE COLLAPSE 
    //MASTER MODULE CHANGE DETECTION
    RoleMatrixComponent.prototype.changeMasterModule = function (masterModule) {
        var _this = this;
        this.tempAccessLevel.push(masterModule.id);
        this.modulesData.forEach(function (item, index) {
            if (item.parentId == masterModule.id && item.checked == true) {
                item.checked = masterModule.checked;
                _this.tempAccessLevel = _this.tempAccessLevel.filter(function (value) { return value !== item.id && value !== masterModule.id; });
            }
            else if (item.parentId == masterModule.id && item.checked == false) {
                item.checked = masterModule.checked;
                _this.tempAccessLevel.push(item.id);
            }
        });
    };
    //MASTER MODULE CHANGE DETECTION
    //JUNIOR MODULE CHANGE DETECTION
    RoleMatrixComponent.prototype.changeJuniorModule = function (juniorModule, id, checked) {
        if (juniorModule.checked == true) {
            this.permissionExist(juniorModule, id);
        }
        else {
            //this.tempAccessLevel = this.tempAccessLevel.filter(value => value !== juniorModule.id);
            this.removePermission(juniorModule, id, checked);
        }
    };
    //JUNIOR MODULE CHANGE DETECTION
    //PERMISSION EXIST
    RoleMatrixComponent.prototype.permissionExist = function (juniorModule, id) {
        var _this = this;
        if (this.tempAccessLevel.includes(id) == true) {
            this.tempAccessLevel.push(juniorModule.id);
            console.log('The temp if' + JSON.stringify(this.tempAccessLevel));
        }
        else {
            this.tempAccessLevel.push(id);
            this.modulesData.forEach(function (item, index) {
                if (item.id == id) {
                    item.checked = juniorModule.checked;
                    _this.tempAccessLevel.push(juniorModule.id);
                }
            });
            console.log('The temp else' + JSON.stringify(this.tempAccessLevel));
        }
    };
    //PERMISSION EXIST
    //REMOVE PERMISSION
    RoleMatrixComponent.prototype.removePermission = function (juniorModule, id, checkedModule) {
        if (this.tempAccessLevel.includes(id) == true) {
            if (this.tempAccessLevel.length == 2) {
                this.tempAccessLevel = this.tempAccessLevel.filter(function (value) { return value !== juniorModule.id && value !== id; });
                console.log('The temp removePermission' + JSON.stringify(this.tempAccessLevel));
                this.modulesData.forEach(function (item, index) {
                    if (item.id == id) {
                        item.checked = false;
                    }
                });
                return false;
            }
            this.tempAccessLevel = this.tempAccessLevel.filter(function (value) { return value !== juniorModule.id; });
            console.log('The temp removePermission' + JSON.stringify(this.tempAccessLevel));
        }
    };
    //REMOVE PERMISSION
    //GRANT PERMISSION
    RoleMatrixComponent.prototype.grantPermission = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        var permissionsObj = {
            permissions: this.tempAccessLevel,
            roleCode: this.route.snapshot.params['anyCode']
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_6__["Global"].url + '/grantPermissions', permissionsObj, options)
            .subscribe(function (data) {
            var accessPermission = data.json();
            if (accessPermission.status == 200) {
                _this.fetchPermissions(_this.route.snapshot.params['anyCode']);
                _this.toastr.success('Permissions Granted Successfully');
                return false;
            }
            else {
                _this.toastr.warning('Permission Granting Unsuccessful');
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    //GRANT PERMISSION
    //SELECT ALL
    RoleMatrixComponent.prototype.selectAll = function (selectAllPermissions) {
        this.modulesData.forEach(function (e) {
            e.checked = selectAllPermissions;
        });
    };
    //SELECT ALL
    RoleMatrixComponent.prototype.home = function () {
        this.router.navigate(['/admin/dashboard']);
    };
    RoleMatrixComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"]],
            selector: 'app-role-matrix',
            template: __webpack_require__(/*! ./role-matrix.component.html */ "./src/app/auth/role-matrix/role-matrix.component.html"),
            styles: [__webpack_require__(/*! ./role-matrix.component.scss */ "./src/app/auth/role-matrix/role-matrix.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_2__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RoleMatrixComponent);
    return RoleMatrixComponent;
}());



/***/ }),

/***/ "./src/app/common/commonheaderbeforelogin/commonheaderbeforelogin.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/common/commonheaderbeforelogin/commonheaderbeforelogin.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 530px)\r\n{\r\n.navbar {\r\n    height: 45px;\r\n    }\r\n}\r\n\r\n.navbar .navbar-brand small img {\r\n    height: 40px !important;\r\n    width: 120px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2NvbW1vbmhlYWRlcmJlZm9yZWxvZ2luL2NvbW1vbmhlYWRlcmJlZm9yZWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7SUFDSSxhQUFhO0tBQ1o7Q0FDSjs7QUFFRDtJQUNJLHdCQUF3QjtJQUN4Qix3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY29tbW9uaGVhZGVyYmVmb3JlbG9naW4vY29tbW9uaGVhZGVyYmVmb3JlbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpXHJcbntcclxuLm5hdmJhciB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1icmFuZCBzbWFsbCBpbWcge1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/common/commonheaderbeforelogin/commonheaderbeforelogin.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/common/commonheaderbeforelogin/commonheaderbeforelogin.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\r\n<div class=\"navbar\">\r\n    <div class=\"navbar-inner\">\r\n        <div class=\"navbar-container\">\r\n            <!-- Navbar Barnd -->\r\n            <div class=\"navbar-header pull-left\">\r\n                <a href=\"#\" class=\"navbar-brand\">\r\n                    <small>\r\n                       <img src=\"\\assets\\img\\logo\\topproz_logo_high_res.jpg\" alt=\"\" />\r\n                    </small>\r\n                </a>\r\n            </div>\r\n            <!-- /Navbar Barnd -->\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- /Navbar -->\r\n"

/***/ }),

/***/ "./src/app/common/commonheaderbeforelogin/commonheaderbeforelogin.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/common/commonheaderbeforelogin/commonheaderbeforelogin.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CommonheaderbeforeloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonheaderbeforeloginComponent", function() { return CommonheaderbeforeloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonheaderbeforeloginComponent = /** @class */ (function () {
    function CommonheaderbeforeloginComponent() {
    }
    CommonheaderbeforeloginComponent.prototype.ngOnInit = function () {
    };
    CommonheaderbeforeloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commonheaderbeforelogin',
            template: __webpack_require__(/*! ./commonheaderbeforelogin.component.html */ "./src/app/common/commonheaderbeforelogin/commonheaderbeforelogin.component.html"),
            styles: [__webpack_require__(/*! ./commonheaderbeforelogin.component.css */ "./src/app/common/commonheaderbeforelogin/commonheaderbeforelogin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonheaderbeforeloginComponent);
    return CommonheaderbeforeloginComponent;
}());



/***/ }),

/***/ "./src/app/common/commonheaderbeforelogin/commonheaderbeforelogin.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/common/commonheaderbeforelogin/commonheaderbeforelogin.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CommonheaderbeforeloginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonheaderbeforeloginModule", function() { return CommonheaderbeforeloginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _commonheaderbeforelogin_commonheaderbeforelogin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commonheaderbeforelogin/commonheaderbeforelogin.component */ "./src/app/common/commonheaderbeforelogin/commonheaderbeforelogin.component.ts");





var CommonheaderbeforeloginModule = /** @class */ (function () {
    function CommonheaderbeforeloginModule() {
    }
    CommonheaderbeforeloginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            declarations: [_commonheaderbeforelogin_commonheaderbeforelogin_component__WEBPACK_IMPORTED_MODULE_4__["CommonheaderbeforeloginComponent"]],
            exports: [_commonheaderbeforelogin_commonheaderbeforelogin_component__WEBPACK_IMPORTED_MODULE_4__["CommonheaderbeforeloginComponent"]],
        })
    ], CommonheaderbeforeloginModule);
    return CommonheaderbeforeloginModule;
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
//# sourceMappingURL=auth-auth-module.js.map