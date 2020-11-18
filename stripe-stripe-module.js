(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stripe-stripe-module"],{

/***/ "./src/app/stripe/create-card/create-card.component.html":
/*!***************************************************************!*\
  !*** ./src/app/stripe/create-card/create-card.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home</a>\r\n      </li>\r\n      <li class=\"active\">Stripe</li>\r\n      <li class=\"active\">Create Card</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        Create Card\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n    <div class=\"row\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"widget\">\r\n            <div class=\"widget-body\">\r\n              <form [formGroup]=\"serProzPaymentInfoDetails\" *ngIf=\"showForm\">\r\n                <!-- DYNAMIC NGX STRIPE[NOMADS] PLUGIN -->\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-2\"></div>\r\n                  <div class=\"col-sm-8\"><b style=\"color: rgb(56, 57, 58);\">TopProz Credit card validation and\r\n                      processing is provided by Stripe(www.stripe.com)</b></div>\r\n                  <div class=\"col-sm-2\"></div>\r\n                </div><br />\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Name<span class=\"mandatory\"></span></label>\r\n                      <span class=\"input-icon icon-right\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter Your Name\" formControlName=\"name\"\r\n                          [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" required disabled>\r\n                        <i class=\"fa fa-envelope\"></i>\r\n                      </span>\r\n                      <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.name.errors.required\">\r\n                          <p style=\"color: red;  font-size: 11px\">* Required Name</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <ngx-stripe-card [options]=\"cardOptions\" [elementsOptions]=\"elementsOptions\"\r\n                      (change)=\"cardUpdated($event)\" (error)=\"error = $event\"></ngx-stripe-card>\r\n                    <div class=\"invalid-feedback\">\r\n                      {{error?.message}}\r\n                    </div>\r\n                  </div>\r\n                </div><br />\r\n                <div class=\"row\">\r\n                  <!-- <div class=\"col-sm-2\">\r\n                    <div class=\"form-group\">\r\n                    </div>\r\n                  </div> -->\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                      <input type=\"button\" class=\"btn btn-primary shiny btn-block\" value=\"<&nbsp;&nbsp;Back\"\r\n                        (click)=\"goBack()\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <div class=\"form-group\">\r\n                      <input type=\"button\" class=\"btn btn-success shiny btn-block\" value=\"Continue\" (click)=\"validate('PROD')\"\r\n                        [disabled]=\"!complete\">\r\n                    </div>\r\n                  </div>\r\n                  <!-- <div class=\"col-sm-4\">\r\n                    <div class=\"form-group\">\r\n                      <input type=\"button\" class=\"btn btn-success shiny btn-block\" value=\"Continue(Testing)\"\r\n                        (click)=\"validate('TEST')\" [disabled]=\"!complete\">\r\n                    </div>\r\n                  </div> -->\r\n                </div>\r\n                <!-- DYNAMIC NGX STRIPE[NOMADS] PLUGIN -->\r\n              </form>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- CARD EXCEPTION MODAL -->\r\n  <div id=\"cardException\" class=\"modal fade\" style=\"display: none;\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <div class=\"widget-header blue\">\r\n            <span class=\"widget-caption\"><b>{{stripeCardModalMessage.header}}</b></span>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <form>\r\n              <br />\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"form-group\">\r\n                    <img src=\"../../../../assets/img/error.png\" height=\"50px\" width=\"50px\" />\r\n                    {{stripeCardModalMessage.content}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <div class=\"col-lg-4\">\r\n                </div>\r\n                <div class=\"col-lg-4 button-center\">\r\n                  <button type=\"button\" class=\"btn btn-gray\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i>\r\n                    CLOSE</button>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <!-- CARD EXCEPTION MODAL -->\r\n</div>"

/***/ }),

/***/ "./src/app/stripe/create-card/create-card.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/stripe/create-card/create-card.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  position: relative;\n  margin: 3% auto;\n  max-width: 100%; }\n\n.login-container .loginbox {\n  position: relative;\n  width: 100% !important;\n  height: auto !important;\n  padding: 0 0 0px 0;\n  box-shadow: 0 0 14px rgba(0, 0, 0, 0.1); }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-facebook {\n  float: left;\n  border: 2px solid #3b5998;\n  color: #3b5998;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 40%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-twitter {\n  float: left;\n  border: 2px solid #29c1f6;\n  color: #29c1f6;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  margin-right: 35%;\n  background-color: #fff; }\n\n.login-container .loginbox .loginbox-social .social-buttons .button-google {\n  float: right;\n  border: 2px solid #ef4f1d;\n  color: #ef4f1d;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  background-color: #fff; }\n\n.loginbox-social {\n  padding: 0 0 0 0 !important; }\n\n.loginbox-title {\n  font-weight: bold !important;\n  font-size: 25px !important; }\n\nlabel {\n  font-weight: bold !important; }\n\nlabel .mandatory {\n  color: red;\n  font-size: 16px !important;\n  font-weight: bold !important; }\n\n.hr-blue-title {\n  border-top: 3px solid #5DB2FF !important; }\n\n.hr-blue {\n  border-top: 1px solid #5DB2FF !important; }\n\n.btn {\n  font-size: 14px !important;\n  font-weight: bold !important; }\n\nform.checkout {\n  max-width: 500px;\n  margin: 2rem auto;\n  text-align: center;\n  border: 2px solid #eee;\n  border-radius: 8px;\n  padding: 1rem 2rem;\n  background: white;\n  font-family: monospace;\n  color: #525252;\n  font-size: 1.1rem; }\n\nform.checkout button {\n  padding: 0.5rem 1rem;\n  color: white;\n  background: coral;\n  border: none;\n  border-radius: 4px;\n  margin-top: 1rem; }\n\nform.checkout button:active {\n  background: #a54c2b; }\n\n.StripeElement {\n  margin: 1rem 0 1rem;\n  background-color: white;\n  padding: 8px 12px;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  transition: box-shadow 150ms ease; }\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df; }\n\n.StripeElement--invalid {\n  border-color: #fa755a; }\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important; }\n\n.modal-header {\n  padding: 0px 0px 0px 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RyaXBlL2NyZWF0ZS1jYXJkL0Q6XFxUb3Bwcm96XFxUb3BQcm96X0FkdmFuY2VfQ2xpZW50L3NyY1xcYXBwXFxzdHJpcGVcXGNyZWF0ZS1jYXJkXFxjcmVhdGUtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNLLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsbUJBQWtCO0VBR2xCLHdDQUFtQyxFQUN0Qzs7QUFFRDtFQUNJLFlBQVc7RUFDWCwwQkFBeUI7RUFDekIsZUFBYztFQUNkLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osdUJBQXNCLEVBQ3pCOztBQUdBO0VBQ0csNEJBQTJCLEVBQzlCOztBQUVEO0VBQ0ksNkJBQTRCO0VBQzVCLDJCQUEwQixFQUM3Qjs7QUFFRDtFQUNJLDZCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLFdBQVM7RUFDVCwyQkFBMEI7RUFDMUIsNkJBQTRCLEVBQy9COztBQUVEO0VBQ0kseUNBQXdDLEVBQzNDOztBQUVEO0VBQ0kseUNBQXdDLEVBQzNDOztBQUVEO0VBQ0ksMkJBQTBCO0VBQzFCLDZCQUE0QixFQUMvQjs7QUFFRDtFQUNJLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQix1QkFBc0I7RUFDdEIsZUFBYztFQUNkLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLHFCQUFvQjtFQUNwQixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0Usb0JBQTRCLEVBQzdCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLDhCQUE2QjtFQUM3QixnQ0FBK0I7RUFFL0Isa0NBQWlDLEVBQ2xDOztBQUVEO0VBQ0UsZ0NBQStCLEVBQ2hDOztBQUVEO0VBQ0Usc0JBQXFCLEVBQ3RCOztBQUVEO0VBQ0UscUNBQW9DLEVBQ3JDOztBQUVEO0VBQ0Msb0NBQW1DLEVBQ3RDIiwiZmlsZSI6InNyYy9hcHAvc3RyaXBlL2NyZWF0ZS1jYXJkL2NyZWF0ZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIG1hcmdpbjogMyUgYXV0bztcclxuICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiBcclxuIC5sb2dpbi1jb250YWluZXIgLmxvZ2luYm94IHtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICBwYWRkaW5nOiAwIDAgMHB4IDA7XHJcbiAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTRweCByZ2JhKDAsMCwwLC4xKTtcclxuICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gICAgIGJveC1zaGFkb3c6IDAgMCAxNHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gfVxyXG4gXHJcbiAubG9naW4tY29udGFpbmVyIC5sb2dpbmJveCAubG9naW5ib3gtc29jaWFsIC5zb2NpYWwtYnV0dG9ucyAuYnV0dG9uLWZhY2Vib29rIHtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCAjM2I1OTk4O1xyXG4gICAgIGNvbG9yOiAjM2I1OTk4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICB3aWR0aDogNTBweDtcclxuICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiA0MCU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuIH1cclxuIFxyXG4gLmxvZ2luLWNvbnRhaW5lciAubG9naW5ib3ggLmxvZ2luYm94LXNvY2lhbCAuc29jaWFsLWJ1dHRvbnMgLmJ1dHRvbi10d2l0dGVyIHtcclxuICAgICBmbG9hdDogbGVmdDtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjljMWY2O1xyXG4gICAgIGNvbG9yOiAjMjljMWY2O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICB3aWR0aDogNTBweDtcclxuICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAzNSU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuIH1cclxuIFxyXG4gLmxvZ2luLWNvbnRhaW5lciAubG9naW5ib3ggLmxvZ2luYm94LXNvY2lhbCAuc29jaWFsLWJ1dHRvbnMgLmJ1dHRvbi1nb29nbGUge1xyXG4gICAgIGZsb2F0OiByaWdodDtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWY0ZjFkO1xyXG4gICAgIGNvbG9yOiAjZWY0ZjFkO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICB3aWR0aDogNTBweDtcclxuICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuIH1cclxuIFxyXG4gXHJcbiAgLmxvZ2luYm94LXNvY2lhbCB7XHJcbiAgICAgcGFkZGluZzogMCAwIDAgMCAhaW1wb3J0YW50OyBcclxuIH1cclxuIFxyXG4gLmxvZ2luYm94LXRpdGxle1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIGxhYmVse1xyXG4gICAgIGZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gbGFiZWwgLm1hbmRhdG9yeXtcclxuICAgICBjb2xvcjpyZWQ7XHJcbiAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuIH1cclxuIFxyXG4gLmhyLWJsdWUtdGl0bGV7ICAgIFxyXG4gICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjNURCMkZGICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5oci1ibHVleyAgICBcclxuICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzVEQjJGRiAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAuYnRuIHtcclxuICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiBmb3JtLmNoZWNrb3V0IHtcclxuICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgICBjb2xvcjogIzUyNTI1MjtcclxuICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgfVxyXG4gICBcclxuICAgZm9ybS5jaGVja291dCBidXR0b24ge1xyXG4gICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBiYWNrZ3JvdW5kOiBjb3JhbDtcclxuICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgIH1cclxuICAgXHJcbiAgIGZvcm0uY2hlY2tvdXQgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICAgYmFja2dyb3VuZDogcmdiKDE2NSwgNzYsIDQzKTtcclxuICAgfVxyXG4gXHJcbiAgIC5TdHJpcGVFbGVtZW50IHtcclxuICAgICBtYXJnaW46IDFyZW0gMCAxcmVtO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjZTZlYmYxO1xyXG4gICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xyXG4gICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMTUwbXMgZWFzZTtcclxuICAgfVxyXG4gICBcclxuICAgLlN0cmlwZUVsZW1lbnQtLWZvY3VzIHtcclxuICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjY2ZkN2RmO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuU3RyaXBlRWxlbWVudC0taW52YWxpZCB7XHJcbiAgICAgYm9yZGVyLWNvbG9yOiAjZmE3NTVhO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuU3RyaXBlRWxlbWVudC0td2Via2l0LWF1dG9maWxsIHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZGU1ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuXHJcbiAgIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/stripe/create-card/create-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/stripe/create-card/create-card.component.ts ***!
  \*************************************************************/
/*! exports provided: CreateCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCardComponent", function() { return CreateCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nomadreservations/ngx-stripe */ "./node_modules/@nomadreservations/ngx-stripe/fesm5/nomadreservations-ngx-stripe.js");











var CreateCardComponent = /** @class */ (function () {
    function CreateCardComponent(beyond, router, formBuilder, activatedRoute, http, spinner, toastr, stripeService, _location) {
        var _this = this;
        this.beyond = beyond;
        this.router = router;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.spinner = spinner;
        this.toastr = toastr;
        this.stripeService = stripeService;
        this._location = _location;
        this.dataProzDetails = false;
        this.stripeActions = false;
        this.showForm = false;
        this.amount = 500;
        this.addScript = false;
        this.finalAmount = 1;
        this.submitted = false;
        this.paypalConfig = {
            env: 'sandbox',
            client: {
                sandbox: 'AclRBQkjJnhtuOndcXfrkSFBVggnO8loIskrypTfCfQ8L--nUt5xFX5IDyp-A0OsSebMUZJvEcH__etM',
                production: '<insert Production client Id>'
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            {
                                amount: { total: _this.serviceAreaData.serviceCost, currency: 'USD' }
                            }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function (payment) {
                    _this.toastr.success("Payment has been Successfull...!");
                });
            }
        };
        this.stripeKey = '';
        this.complete = false;
        this.cardOptions = {
            style: {
                base: {
                    iconColor: '#666ee8',
                    color: '#31325f',
                    fontWeight: 400,
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '15px',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    ':-webkit-autofill': {
                        color: '#666ee8',
                    },
                },
            }
        };
        this.elementsOptions = {
            locale: 'en'
        };
        this.stripeCardModalMessage = {
            header: null,
            content: null
        };
    }
    CreateCardComponent.prototype.ngOnInit = function () {
        this.spinner.show();
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.serProzPaymentInfoDetails = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.prozDetails(this.activatedRoute.snapshot.params['prozId']);
        this.estimatedCost = JSON.parse(localStorage.getItem('serviceCost'));
        this.stripeService.retrievePaymentIntent('pi_1GxXdMC0mkeCkdjxV36xnpAi_secret_CpHyO3s6fWST2igxpM8ZeAHtD')
            .subscribe(function (result) {
            console.log(result);
        });
    };
    //------------------NGX STRIPE PLUGIN----------------------------------------------
    CreateCardComponent.prototype.prozDetails = function (mobileNumber) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getProzDetails/' + mobileNumber, options)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status == 200) {
                _this.prozDetailsData = response.response;
                _this.firstName = _this.prozDetailsData[0].firstName;
                _this.lastName = _this.prozDetailsData[0].lastName;
                _this.mobileNumber = _this.prozDetailsData[0].mobileNumber;
                _this.emailId = _this.prozDetailsData[0].emailId;
                _this.serProzPaymentInfoDetails.get('name').setValue(_this.prozDetailsData[0].firstName + ' ' + _this.prozDetailsData[0].lastName);
                _this.showForm = true;
                _this.spinner.hide();
                return false;
            }
        }, function (error) {
            console.log('The execution is failed ' + JSON.stringify(error));
        });
    };
    CreateCardComponent.prototype.cardUpdated = function (result) {
        console.log(result);
        this.element = result.element;
        this.complete = result.card.complete;
        if (this.complete) {
            this.stripeService;
        }
        this.error = undefined;
    };
    CreateCardComponent.prototype.keyUpdated = function () {
        this.stripeService.changeKey(this.stripeKey);
    };
    CreateCardComponent.prototype.validate = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinner.show();
                        this.submitted = true;
                        // console.log("first checking submit function")
                        // stop here if form is invalid
                        if (this.serProzPaymentInfoDetails.invalid) {
                            // console.log("in IF checking submit function")
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.cardSetup('/cardSetup', {
                                name: this.serProzPaymentInfoDetails.value.name,
                                email: this.loginData.emailId,
                                phone: this.loginData.mobileNumber
                            })];
                    case 1:
                        response = _a.sent();
                        this.stripeService.handleCardSetup(response['client_secret'], this.element, {
                            payment_method_data: {
                                billing_details: {
                                    name: this.serProzPaymentInfoDetails.value.name,
                                    email: this.loginData.emailId,
                                    phone: this.loginData.mobileNumber
                                },
                            }
                        }).subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var verifyCard, cardSaved;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(result);
                                        this.spinner.hide();
                                        if (type == 'TEST' && result.error) {
                                            this.testModeStripe(result, response);
                                            return [2 /*return*/, false];
                                        }
                                        if (result.error && result.error.code == "incorrect_cvc") {
                                            this.stripeCardModalMessage.header = 'INCORRECT CVC';
                                            this.stripeCardModalMessage.content = 'Incorrect CVC. Please enter valid CVC.';
                                            $("#cardException").modal("show");
                                            return [2 /*return*/, false];
                                        }
                                        if (result.error && result.error.code == "expired_card") {
                                            this.stripeCardModalMessage.header = 'CARD EXPIRED';
                                            this.stripeCardModalMessage.content = 'Card Expired. Please update your billing details to continue.';
                                            $("#cardException").modal("show");
                                            return [2 /*return*/, false];
                                        }
                                        if (result.error && result.error.code == "card_declined" && result.error.decline_code == "generic_decline") {
                                            this.stripeCardModalMessage.header = 'CARD DECLINED';
                                            this.stripeCardModalMessage.content = 'Card Declined. Please update your billing details to continue.';
                                            $("#cardException").modal("show");
                                            return [2 /*return*/, false];
                                        }
                                        if (!(result.error && result.error.code == "card_declined" && result.error.decline_code == "insufficient_funds")) return [3 /*break*/, 1];
                                        this.stripeCardModalMessage.header = 'CARD DECLINED';
                                        this.stripeCardModalMessage.content = 'Card is Declined due to insufficient funds. Please update your billing details to continue.';
                                        $("#cardException").modal("show");
                                        return [2 /*return*/, false];
                                    case 1: return [4 /*yield*/, this.creditCardSaver('/verifyProAddedCard', {
                                            prozId: this.activatedRoute.snapshot.params['prozId']
                                        })];
                                    case 2:
                                        verifyCard = _a.sent();
                                        return [4 /*yield*/, this.creditCardSaver('/saveStripeCard', {
                                                loginCode: this.activatedRoute.snapshot.params['prozId'],
                                                emailId: this.loginData.emailId,
                                                mobileNumber: this.loginData.mobileNumber,
                                                stripeCustomerId: response['stripeCustomerId'],
                                                paymentMethodString: result['setupIntent']['payment_method'],
                                                createdBy: this.activatedRoute.snapshot.params['prozId'],
                                                modifiedBy: this.activatedRoute.snapshot.params['prozId'],
                                                isDefaultCard: "NO",
                                                status: "ACTIVE",
                                            })];
                                    case 3:
                                        cardSaved = _a.sent();
                                        if (cardSaved['status'] === 200) {
                                            this.spinner.hide();
                                            this.toastr.success('Card Added Successfully');
                                            this.router.navigate(['/leads/listLeads']);
                                        }
                                        else {
                                            this.spinner.hide();
                                            this.toastr.warning('Card Registration Unsuccessful');
                                        }
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            _this.spinner.hide();
                            _this.toastr.warning('Unable to connect to server');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCardComponent.prototype.cardSetup = function (apiUrl, object) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + apiUrl, object)
                .subscribe(function (data) {
                resolve(data.json());
            }, function (error) {
                resolve(error);
            });
        });
    };
    CreateCardComponent.prototype.creditCardSaver = function (apiUrl, object) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + apiUrl, object)
                .subscribe(function (data) {
                resolve(data.json());
            }, function (error) {
                resolve(error);
            });
        });
    };
    CreateCardComponent.prototype.testModeStripe = function (result, response) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var verifyCard, cardSaved;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.creditCardSaver('/verifyProAddedCard', {
                            prozId: this.activatedRoute.snapshot.params['prozId']
                        })];
                    case 1:
                        verifyCard = _a.sent();
                        return [4 /*yield*/, this.creditCardSaver('/saveStripeCard', {
                                loginCode: this.activatedRoute.snapshot.params['prozId'],
                                emailId: this.loginData.emailId,
                                mobileNumber: this.loginData.mobileNumber,
                                stripeCustomerId: response['stripeCustomerId'],
                                paymentMethodString: result.error.payment_method.id,
                                createdBy: this.activatedRoute.snapshot.params['prozId'],
                                modifiedBy: this.activatedRoute.snapshot.params['prozId'],
                                isDefaultCard: "NO",
                                status: "ACTIVE",
                            })];
                    case 2:
                        cardSaved = _a.sent();
                        if (cardSaved['status'] === 200) {
                            this.spinner.hide();
                            this.toastr.success('Card Added Successfully');
                            this.router.navigate(['/leads/listLeads']);
                        }
                        else {
                            this.spinner.hide();
                            this.toastr.warning('Card Registration Unsuccessful');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateCardComponent.prototype.skip = function () {
        this._location.back();
    };
    Object.defineProperty(CreateCardComponent.prototype, "f", {
        get: function () { return this.serProzPaymentInfoDetails.controls; },
        enumerable: true,
        configurable: true
    });
    //------------------NGX STRIPE PLUGIN----------------------------------------------
    //-------------------OLD ADD CREDIT CARD DETAILS CODE------------------------------
    CreateCardComponent.prototype.addPaypalScript = function () {
        return new Promise(function (resolve, reject) {
            var scriptTagElement = document.createElement('script');
            scriptTagElement.src = "https://www.paypalobjects.com/api/checkout.js";
            scriptTagElement.onload = resolve;
            document.body.appendChild(scriptTagElement);
        });
    };
    CreateCardComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // console.log("first checking submit function")
        // stop here if form is invalid
        if (this.serProzPaymentInfoDetails.invalid) {
            // console.log("in IF checking submit function")
            return;
        }
        // console.log(" outside checking submit function")
        this.prozPaymentSave();
    };
    // For showing card details and account details starts here....
    CreateCardComponent.prototype.paymentTypeSelection = function (x) {
        this.paymentType = x;
        if (x == "PayPal") {
            this.cardDetails = false;
            this.accountDetails = false;
            this.paypalDetails = true;
            this.addPaypalScript().then(function () {
                // paypal.Button.render(this.paypalConfig, '');
            });
        }
    };
    CreateCardComponent.prototype.cardDetailsRadio = function (x) {
        if (x == "Debit Card" || x == 'Credit Card') {
            this.cardDetails = true;
            this.accountDetails = false;
            this.paypalDetails = false;
            // this.addPaypalScript().then(() => {
            //   // paypal.Button.render(this.paypalConfig, '');
            // })
        }
    };
    CreateCardComponent.prototype.netBankingRadio = function (x) {
        if (x == "Checking Account" || x == 'Savings Account') {
            this.cardDetails = false;
            this.accountDetails = true;
            this.paypalDetails = false;
            // this.addPaypalScript().then(() => {
            //   // paypal.Button.render(this.paypalConfig, '');
            // })
        }
    };
    // For showing card details and account details ends here....
    CreateCardComponent.prototype.handlePayment = function () {
        this.handler.open({
            name: 'FireStarter',
            excerpt: 'Deposit Funds to Account',
            amount: this.serviceAreaData.serviceCost
        });
    };
    CreateCardComponent.prototype.onPopstate = function () {
        this.handler.close();
    };
    CreateCardComponent.prototype.stripePayment = function (token, amount) {
        var _this = this;
        this.handler.open({});
        var obj = {
            amount: this.amount,
            token: token
        };
        this.http.post('http://localhost:5000/charge', obj)
            .subscribe(function (data) {
            var response = data.json();
            console.log("This is Response: " + JSON.stringify(response));
            if (response.status === 200) {
                _this.toastr.success("Payment Data Saved Successfully...!");
                _this.stripeActions = true;
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastr.warning('Payment Creation Failed...');
            }
            (function (error) {
                console.log('The execution is failed ' + JSON.stringify(error));
            });
        });
    };
    CreateCardComponent.prototype.prozPaymentSave = function () {
        var _this = this;
        var obj = {
            "prozId": this.activatedRoute.snapshot.params['prozId'],
            "firstName": this.firstName,
            "lastName": this.lastName,
            "mobileNumber": this.mobileNumber,
            "emailId": this.emailId,
            "creditCardNumber": this.serProzPaymentInfoDetails.value.creditCardNumber,
            "creditCardType": this.serProzPaymentInfoDetails.value.creditCardType,
            "ccvNumber": this.serProzPaymentInfoDetails.value.ccvNumber,
            "selectMonth": this.serProzPaymentInfoDetails.value.selectMonth,
            "selectYear": this.serProzPaymentInfoDetails.value.selectYear,
            "businessAddressLine1": this.serProzPaymentInfoDetails.value.businessAddressLine1,
            "state": this.serProzPaymentInfoDetails.value.state,
            "city": this.serProzPaymentInfoDetails.value.city,
            "zipCode": this.serProzPaymentInfoDetails.value.zipCode,
        };
        this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/addPaymentInfo', obj)
            .subscribe(function (data) {
            var response = data.json();
            if (response.status === 200) {
                _this.toastr.success("Payment Data Saved Successfully...!");
                _this.router.navigate(['/prozProfile/prozProfileConfirmation', _this.activatedRoute.snapshot.params['prozId']]);
            }
        }, function (error) {
            _this.toastr.warning('Unable to connect to server');
        });
    };
    CreateCardComponent.prototype.goBack = function () {
        this._location.back();
    };
    //STATES
    CreateCardComponent.prototype.getListOfStates = function () {
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
    //STATES
    //VIEW PROZ DETAILS
    CreateCardComponent.prototype.viewProzDetails = function (prozId) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        this.http.get(_global_global__WEBPACK_IMPORTED_MODULE_4__["Global"].url + '/getProDetails/' + prozId, options)
            .subscribe(function (data) {
            var response = data.json();
            _this.spinner.hide();
            if (response.status == 200) {
                var profile = response.profile[0];
            }
        }, function (error) {
            _this.toastr.warning('Unable to Connect to Server');
        });
    };
    //VIEW PROZ DETAILS
    //-------------------OLD ADD CREDIT CARD DETAILS CODE------------------------------
    CreateCardComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:popstate'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CreateCardComponent.prototype, "onPopstate", null);
    CreateCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_8__["Beyond"]],
            selector: 'app-create-card',
            template: __webpack_require__(/*! ./create-card.component.html */ "./src/app/stripe/create-card/create-card.component.html"),
            styles: [__webpack_require__(/*! ./create-card.component.scss */ "./src/app/stripe/create-card/create-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_8__["Beyond"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_10__["StripeService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CreateCardComponent);
    return CreateCardComponent;
}());



/***/ }),

/***/ "./src/app/stripe/register-stripe/register-stripe.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/stripe/register-stripe/register-stripe.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a (click)=\"home()\">Home</a>\r\n      </li>\r\n      <li><a >Stripe</a></li>\r\n      <li class=\"active\">Register Stripe</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        Register Stripe\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n    <p>Dear Pro, For receiving and remitting payment from and to TopProz you will need to complete your credit card registration with our payment gateway partners Stripe.  Stipe stores this information safely in a PCI compliant system and TopProz has access only to the secure authentication code give by you.  Click on the button below to complete the registraiton</p> <br/>\r\n    <p>The site will temporarily leave outside for www.stripe.com screens and come BACK to TopProz after successful completion.</p><br/>\r\n    <button type=\"submit\" class=\"btn btn-success shiny\" (click)=\"connectWithStripe()\">\r\n      $ Connect with Stripe</button> \r\n      <h1 *ngIf=\"stripeSuccess\"><b style=\"color:green;\">Registered for Stripe Successfully</b></h1>\r\n      <h1 *ngIf=\"stripeFail\"><b style=\"color:red;\">Registration for Stripe Unsuccessful</b></h1>\r\n  </div>\r\n  <!-- /Page Body -->\r\n</div>\r\n<!-- /Page Content -->"

/***/ }),

/***/ "./src/app/stripe/register-stripe/register-stripe.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/stripe/register-stripe/register-stripe.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cmlwZS9yZWdpc3Rlci1zdHJpcGUvcmVnaXN0ZXItc3RyaXBlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/stripe/register-stripe/register-stripe.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/stripe/register-stripe/register-stripe.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterStripeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStripeComponent", function() { return RegisterStripeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


// import { ActivatedRoute } from '@angular/router';




var RegisterStripeComponent = /** @class */ (function () {
    function RegisterStripeComponent(route, http, router, beyond) {
        this.route = route;
        this.http = http;
        this.router = router;
        this.beyond = beyond;
    }
    RegisterStripeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.proCode = JSON.parse(localStorage.getItem("login"));
        console.log("procode" + JSON.stringify(this.proCode.loginCode));
        this.route.queryParams.subscribe(function (params) {
            if (params.code != null || params.code != undefined) {
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
                var obj = {
                    proId: _this.proCode.loginCode,
                    stripeAuthCode: params.code,
                    createdBy: _this.proCode.loginCode,
                    modifiedBy: _this.proCode.loginCode,
                    modifiedOn: new Date(),
                    createdOn: new Date(),
                    date: new Date(),
                };
                _this.http.post(_global_global__WEBPACK_IMPORTED_MODULE_3__["Global"].url + '/stripeAuthCodeInsert', obj, options)
                    .subscribe(function (data) {
                    var response = data.json();
                    if (response.status == 200) {
                        _this.stripeSuccess = true;
                        _this.stripeFail = false;
                    }
                    else {
                        _this.stripeSuccess = false;
                        _this.stripeFail = true;
                    }
                });
            }
        });
    };
    RegisterStripeComponent.prototype.connectWithStripe = function () {
        window.open('https://connect.stripe.com/express/oauth/authorize?response_type=code&client_id=ca_GtZFzZHMtnbRD5RDJkEEOEKatjB7DhPI&scope=read_write#/', '_blank');
    };
    RegisterStripeComponent.prototype.home = function () {
        this.router.navigate(['/proz-dashboard/prozDashboard/', this.loginData.loginCode]);
    };
    RegisterStripeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_4__["Beyond"]],
            selector: 'app-register-stripe',
            template: __webpack_require__(/*! ./register-stripe.component.html */ "./src/app/stripe/register-stripe/register-stripe.component.html"),
            styles: [__webpack_require__(/*! ./register-stripe.component.scss */ "./src/app/stripe/register-stripe/register-stripe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _utilities_beyond__WEBPACK_IMPORTED_MODULE_4__["Beyond"]])
    ], RegisterStripeComponent);
    return RegisterStripeComponent;
}());



/***/ }),

/***/ "./src/app/stripe/stripe-cards/stripe-cards.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/stripe/stripe-cards/stripe-cards.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commonvanlynkheader></app-commonvanlynkheader>\r\n<app-prozadmin-sidemenu></app-prozadmin-sidemenu>\r\n<div class=\"page-content\">\r\n  <!-- Page Breadcrumb -->\r\n  <div class=\"page-breadcrumbs\">\r\n    <ul class=\"breadcrumb\">\r\n      <li>\r\n        <i class=\"fa fa-home\"></i>\r\n        <a href=\"#\">Home</a>\r\n      </li>\r\n      <li class=\"active\">Stripe</li>\r\n      <li class=\"active\">Cards</li>\r\n    </ul>\r\n  </div>\r\n  <!-- /Page Breadcrumb -->\r\n  <!-- Page Header -->\r\n  <div class=\"page-header position-relative\">\r\n    <div class=\"header-title\">\r\n      <h1>\r\n        List of Cards\r\n      </h1>\r\n    </div>\r\n  </div>\r\n  <!-- /Page Header -->\r\n  <!-- Page Body -->\r\n  <div class=\"page-body\">\r\n    <div class=\"row\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"widget\">\r\n            <div class=\"widget-header with-footer header gray\">\r\n              <span class=\"widget-caption\">List of Cards</span>\r\n            </div>\r\n            <div class=\"widget-body\">\r\n              <div class=\"table-scrollable\" *ngIf=\"showData\">\r\n                <table class=\"table table-bordered table-striped table-condensed flip-content\">\r\n                  <thead class=\"flip-content bordered-palegreen\">\r\n                    <tr>\r\n                      <th>\r\n                        Default Card\r\n                      </th>\r\n                      <th>\r\n                        Brand\r\n                      </th>\r\n                      <th>\r\n                        Card Number\r\n                      </th>\r\n                      <th>\r\n                        Expire Month\r\n                      </th>\r\n                      <th>\r\n                        Expire Year\r\n                      </th>\r\n                      <th>\r\n                        Status\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let data of listOfCardsData\">\r\n                      <td>\r\n                        <div class=\"radio\">\r\n                          <label>\r\n                            <input type=\"radio\" value=\"{{data.stripeCustomerId}}\" name=\"card\"\r\n                              [(ngModel)]=\"stripeCustomerId\" (change)=\"selectCard(data)\" class=\"colored-success\">\r\n                            <span class=\"text\"></span>\r\n                          </label>\r\n                        </div>\r\n                      </td>\r\n                      <td>{{ data.brand }}</td>\r\n                      <td>XXXX-XXXX-XXXX-{{ data.last4 }}</td>\r\n                      <td>XX</td>\r\n                      <td>{{ data.expYear }}</td>\r\n                      <td>{{ data.isDefaultCard == 'YES'?'DEFAULT':'STANDBY' }}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <br />\r\n              <div *ngIf=\"!showData\">\r\n                No Records Found\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showData\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\"></div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n        <div class=\"form-group\">\r\n          <input type=\"submit\" class=\"btn btn-danger shiny btn-block\" (click)=\"setDefaultCard()\"\r\n            value=\"Save Selected Card as Default\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\"></div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n        <div class=\"form-group\">\r\n          <input type=\"submit\" class=\"btn btn-success shiny btn-block\" (click)=\"addAnotherCard()\"\r\n            value=\"Add Another Card\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\"></div>\r\n    </div>\r\n    <!-- /Page Body -->\r\n  </div>\r\n  <!-- /Page Content -->"

/***/ }),

/***/ "./src/app/stripe/stripe-cards/stripe-cards.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/stripe/stripe-cards/stripe-cards.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cmlwZS9zdHJpcGUtY2FyZHMvc3RyaXBlLWNhcmRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/stripe/stripe-cards/stripe-cards.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/stripe/stripe-cards/stripe-cards.component.ts ***!
  \***************************************************************/
/*! exports provided: StripeCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeCardsComponent", function() { return StripeCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utilities_beyond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/beyond */ "./src/utilities/beyond.ts");
/* harmony import */ var _utilities_multiplewizard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utilities/multiplewizard */ "./src/utilities/multiplewizard.ts");
/* harmony import */ var src_utilities_imageselector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utilities/imageselector */ "./src/utilities/imageselector.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _global_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../global/global */ "./src/global/global.ts");
/* harmony import */ var _utilities_customValidators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utilities/customValidators */ "./src/utilities/customValidators.ts");










var getOptions = function () {
    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    return new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
};
var StripeCardsComponent = /** @class */ (function () {
    function StripeCardsComponent(beyond, multiplewizard, router, imageselector, http, toastr) {
        this.beyond = beyond;
        this.multiplewizard = multiplewizard;
        this.router = router;
        this.imageselector = imageselector;
        this.http = http;
        this.toastr = toastr;
        this.listOfCardsData = [];
        this.showData = false;
        this.loginData = {};
        this.cardData = {};
    }
    StripeCardsComponent.prototype.ngOnInit = function () {
        this.beyond.beyondAdmin();
        this.loginData = JSON.parse(localStorage.getItem("login"));
        this.listOfCards();
    };
    //ERROR CALLBACK
    StripeCardsComponent.prototype.errorCallback = function () {
        this.toastr.warning("Unable to Connect to Server");
    };
    //ERROR CALLBACK
    //LIST OF CARDS
    StripeCardsComponent.prototype.listOfCards = function () {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_8__["Global"].url + "/fetchSavedStripeCards";
        var successCallback = function (data) {
            var json = data.json();
            if (json.status == 200 && Array.isArray(json.response)) {
                _this.listOfCardsData = json.response;
                _this.listOfCardsData.forEach(function (e) {
                    if (e.isDefaultCard == 'YES') {
                        _this.stripeCustomerId = e.stripeCustomerId;
                        _this.selectCard(e);
                    }
                });
                _this.showData = true;
            }
            else {
                _this.showData = false;
            }
        };
        this.http
            .post(url, { loginCode: this.loginData.loginCode }, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    //LIST OF CARDS
    //SELECT CARD
    StripeCardsComponent.prototype.selectCard = function (data) {
        if (data.stripeCustomerId == undefined || data.stripeCustomerId == '')
            return;
        this.stripeCustomerId = data.stripeCustomerId;
    };
    //SELECT CARD
    //ADD ANOTHER CARD
    StripeCardsComponent.prototype.addAnotherCard = function () {
        this.router.navigate(['/stripe/createCard', this.loginData.loginCode]);
    };
    //ADD ANOTHER CARD
    //SET DEFAULT CARD
    StripeCardsComponent.prototype.setDefaultCard = function () {
        var _this = this;
        var url = _global_global__WEBPACK_IMPORTED_MODULE_8__["Global"].url + "/setDefaultStripeCard";
        var successCallback = function (data) {
            var json = data.json();
            if (json.status == 200) {
                _this.listOfCards();
                _this.toastr.success('Default Card Saved Successfully');
            }
            else {
                _this.toastr.warning('Default Card Saving Unsuccessful');
            }
        };
        this.http
            .post(url, { stripeCustomerId: this.stripeCustomerId, loginCode: this.loginData.loginCode }, getOptions())
            .subscribe(successCallback, this.errorCallback);
    };
    StripeCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"], _utilities_multiplewizard__WEBPACK_IMPORTED_MODULE_4__["multiplewizard"], src_utilities_imageselector__WEBPACK_IMPORTED_MODULE_5__["Imageselector"], _utilities_customValidators__WEBPACK_IMPORTED_MODULE_9__["CustomValidators"]],
            selector: "app-stripe-cards",
            template: __webpack_require__(/*! ./stripe-cards.component.html */ "./src/app/stripe/stripe-cards/stripe-cards.component.html"),
            styles: [__webpack_require__(/*! ./stripe-cards.component.scss */ "./src/app/stripe/stripe-cards/stripe-cards.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_utilities_beyond__WEBPACK_IMPORTED_MODULE_3__["Beyond"],
            _utilities_multiplewizard__WEBPACK_IMPORTED_MODULE_4__["multiplewizard"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_utilities_imageselector__WEBPACK_IMPORTED_MODULE_5__["Imageselector"],
            _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], StripeCardsComponent);
    return StripeCardsComponent;
}());



/***/ }),

/***/ "./src/app/stripe/stripe-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/stripe/stripe-routing.module.ts ***!
  \*************************************************/
/*! exports provided: StripeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeRoutingModule", function() { return StripeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_stripe_register_stripe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-stripe/register-stripe.component */ "./src/app/stripe/register-stripe/register-stripe.component.ts");
/* harmony import */ var _stripe_cards_stripe_cards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stripe-cards/stripe-cards.component */ "./src/app/stripe/stripe-cards/stripe-cards.component.ts");
/* harmony import */ var _create_card_create_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-card/create-card.component */ "./src/app/stripe/create-card/create-card.component.ts");






var routes = [
    {
        path: 'registerStripe',
        component: _register_stripe_register_stripe_component__WEBPACK_IMPORTED_MODULE_3__["RegisterStripeComponent"]
    },
    {
        path: 'stripeCards',
        component: _stripe_cards_stripe_cards_component__WEBPACK_IMPORTED_MODULE_4__["StripeCardsComponent"]
    },
    {
        path: 'createCard/:prozId',
        component: _create_card_create_card_component__WEBPACK_IMPORTED_MODULE_5__["CreateCardComponent"]
    },
];
var StripeRoutingModule = /** @class */ (function () {
    function StripeRoutingModule() {
    }
    StripeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StripeRoutingModule);
    return StripeRoutingModule;
}());



/***/ }),

/***/ "./src/app/stripe/stripe.module.ts":
/*!*****************************************!*\
  !*** ./src/app/stripe/stripe.module.ts ***!
  \*****************************************/
/*! exports provided: StripeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeModule", function() { return StripeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _stripe_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stripe-routing.module */ "./src/app/stripe/stripe-routing.module.ts");
/* harmony import */ var _register_stripe_register_stripe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-stripe/register-stripe.component */ "./src/app/stripe/register-stripe/register-stripe.component.ts");
/* harmony import */ var _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/commonvanlynkheader/commonvanlynkheader.module */ "./src/app/common/commonvanlynkheader/commonvanlynkheader.module.ts");
/* harmony import */ var _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/prozadmin-sidemenu/proz-sidemenu.module */ "./src/app/common/prozadmin-sidemenu/proz-sidemenu.module.ts");
/* harmony import */ var _stripe_cards_stripe_cards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stripe-cards/stripe-cards.component */ "./src/app/stripe/stripe-cards/stripe-cards.component.ts");
/* harmony import */ var _create_card_create_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-card/create-card.component */ "./src/app/stripe/create-card/create-card.component.ts");
/* harmony import */ var _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nomadreservations/ngx-stripe */ "./node_modules/@nomadreservations/ngx-stripe/fesm5/nomadreservations-ngx-stripe.js");











var StripeModule = /** @class */ (function () {
    function StripeModule() {
    }
    StripeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_register_stripe_register_stripe_component__WEBPACK_IMPORTED_MODULE_5__["RegisterStripeComponent"], _stripe_cards_stripe_cards_component__WEBPACK_IMPORTED_MODULE_8__["StripeCardsComponent"], _create_card_create_card_component__WEBPACK_IMPORTED_MODULE_9__["CreateCardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _stripe_routing_module__WEBPACK_IMPORTED_MODULE_4__["StripeRoutingModule"],
                _common_commonvanlynkheader_commonvanlynkheader_module__WEBPACK_IMPORTED_MODULE_6__["CommonvanlynkheaderModule"],
                _common_prozadmin_sidemenu_proz_sidemenu_module__WEBPACK_IMPORTED_MODULE_7__["ProzSidemenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _nomadreservations_ngx_stripe__WEBPACK_IMPORTED_MODULE_10__["NgxStripeModule"].forRoot('pk_test_PhrNoP70hPSyNYpgTohsNCD0'),
            ]
        })
    ], StripeModule);
    return StripeModule;
}());



/***/ })

}]);
//# sourceMappingURL=stripe-stripe-module.js.map