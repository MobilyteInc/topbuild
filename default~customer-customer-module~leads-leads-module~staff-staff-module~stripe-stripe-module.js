(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~customer-customer-module~leads-leads-module~staff-staff-module~stripe-stripe-module"],{

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



/***/ }),

/***/ "./src/utilities/imageselector.ts":
/*!****************************************!*\
  !*** ./src/utilities/imageselector.ts ***!
  \****************************************/
/*! exports provided: Imageselector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Imageselector", function() { return Imageselector; });
var Imageselector = /** @class */ (function () {
    function Imageselector() {
    }
    Imageselector.prototype.imageselector = function () {
        $(function () {
            $('div.product-chooser').not('.disabled').find('div.product-chooser-item').on('click', function () {
                $(this).parent().parent().find('div.product-chooser-item').removeClass('selected');
                $(this).addClass('selected');
                $(this).find('input[type="radio"]').prop("checked", true);
            });
        });
    };
    return Imageselector;
}());



/***/ }),

/***/ "./src/utilities/multiplewizard.ts":
/*!*****************************************!*\
  !*** ./src/utilities/multiplewizard.ts ***!
  \*****************************************/
/*! exports provided: multiplewizard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplewizard", function() { return multiplewizard; });
var multiplewizard = /** @class */ (function () {
    function multiplewizard() {
    }
    multiplewizard.prototype.Multiplewizard = function () {
        $(document).ready(function () {
            $("#next-1").click(function () {
                $("#first").hide();
                $("#second").show();
                $("#progressbar").css("width", "10%");
                $("#progressText").html("10%");
            });
            $("#previous-1").click(function () {
                $("#first").show();
                $("#second").hide();
                $("#progressbar").css("width", "0%");
                $("#progressText").html("0%");
            });
            $("#next-2").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").show();
                $("#progressbar").css("width", "20%");
                $("#progressText").html("20%");
            });
            $("#previous-2").click(function () {
                $("#first").hide();
                $("#second").show();
                $("#third").hide();
                $("#progressbar").css("width", "10%");
                $("#progressText").html("10%");
            });
            $("#next-3").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").show();
                $("#progressbar").css("width", "30%");
                $("#progressText").html("30%");
            });
            $("#previous-3").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").show();
                $("#fourth").hide();
                $("#progressbar").css("width", "20%");
                $("#progressText").html("20%");
            });
            $("#next-4").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").hide();
                $("#fifth").show();
                $("#progressbar").css("width", "40%");
                $("#progressText").html("40%");
            });
            $("#previous-4").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").show();
                $("#fifth").hide();
                $("#progressbar").css("width", "30%");
                $("#progressText").html("30%");
            });
            $("#next-5").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").hide();
                $("#fifth").hide();
                $("#sixth").show();
                $("#progressbar").css("width", "50%");
                $("#progressText").html("50%");
            });
            $("#previous-5").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").hide();
                $("#fifth").show();
                $("#sixth").hide();
                $("#progressbar").css("width", "40%");
                $("#progressText").html("40%");
            });
            $("#next-6").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").hide();
                $("#fifth").hide();
                $("#sixth").hide();
                $("#seventh").show();
                $("#progressbar").css("width", "60%");
                $("#progressText").html("60%");
            });
            $("#previous-6").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").hide();
                $("#fifth").hide();
                $("#sixth").show();
                $("#seventh").hide();
                $("#progressbar").css("width", "50%");
                $("#progressText").html("50%");
            });
            $("#next-7").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").hide();
                $("#fifth").hide();
                $("#sixth").hide();
                $("#seventh").hide();
                $("#eight").show();
                $("#progressbar").css("width", "70%");
                $("#progressText").html("70%");
            });
            $("#previous-7").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").hide();
                $("#fifth").hide();
                $("#sixth").hide();
                $("#seventh").show();
                $("#eight").hide();
                $("#progressbar").css("width", "60%");
                $("#progressText").html("60%");
            });
            $("#next-8").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").hide();
                $("#fifth").hide();
                $("#sixth").hide();
                $("#seventh").hide();
                $("#eight").hide();
                $("#ninth").show();
                $("#progressbar").css("width", "80%");
                $("#progressText").html("80%");
            });
            $("#previous-8").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").hide();
                $("#fifth").hide();
                $("#sixth").hide();
                $("#seventh").hide();
                $("#eight").show();
                $("#ninth").hide();
                $("#progressbar").css("width", "70%");
                $("#progressText").html("70%");
            });
            $("#next-9").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").hide();
                $("#fifth").hide();
                $("#sixth").hide();
                $("#seventh").hide();
                $("#eight").hide();
                $("#ninth").hide();
                $("#tenth").show();
                $("#progressbar").css("width", "90%");
                $("#progressText").html("90%");
            });
            $("#previous-9").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").hide();
                $("#fifth").hide();
                $("#sixth").hide();
                $("#seventh").hide();
                $("#eight").hide();
                $("#ninth").show();
                $("#tenth").hide();
                $("#progressbar").css("width", "80%");
                $("#progressText").html("80%");
            });
            $("#next-10").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").hide();
                $("#fifth").hide();
                $("#sixth").hide();
                $("#seventh").hide();
                $("#eight").hide();
                $("#ninth").hide();
                $("#tenth").hide();
                $("#eleventh").show();
                $("#progressbar").css("width", "95%");
                $("#progressText").html("95%");
            });
            $("#previous-10").click(function () {
                $("#first").hide();
                $("#second").hide();
                $("#third").hide();
                $("#fourth").hide();
                $("#fifth").hide();
                $("#sixth").hide();
                $("#seventh").hide();
                $("#eight").hide();
                $("#ninth").hide();
                $("#tenth").show();
                $("#eleventh").hide();
                $("#progressbar").css("width", "90%");
                $("#progressText").html("90%");
            });
            // $("#finish").click(function (){
            //   $("#first").hide();
            // $("#second").hide();
            //$("#third").hide();
            //$("#fourth").hide();
            //$("#fifth").hide();
            //$("#sixth").hide();
            //$("#seventh").hide();
            //$("#eight").hide();
            //$("#ninth").hide();
            //$("#tenth").hide();
            //$("#eleventh").show();
            //$("#progressbar").css("width", "100%");
            //$("#progressText").html("100%");
            //  })
            $('#finish').click(function (e) {
                e.preventDefault(); //will stop the link href to call the blog page
                setTimeout(function () {
                    $("#progressbar").css("width", "100%");
                    $("#progressText").html("100%");
                    window.location.href = "/signin"; //will redirect to your blog page (an ex: blog.html)
                }, 500); //will call the function after 2 secs.
            });
        });
    };
    return multiplewizard;
}());



/***/ })

}]);
//# sourceMappingURL=default~customer-customer-module~leads-leads-module~staff-staff-module~stripe-stripe-module.js.map