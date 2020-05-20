(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["predictions-predictions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/confirmation/confirmation.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/confirmation/confirmation.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-title>Confirm</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"primary\" class=\"confirmation-card\">\n    <ion-text class=\"confirmation-message\">Predictions made successfully!</ion-text>\n    <ion-buttons>\n      <ion-button expand=\"block\" fill=\"solid\" (click)=\"closeModal()\" size=\"large\" class=\"close-btn\">CLOSE</ion-button>\n    </ion-buttons>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/predictions.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/predictions.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"green-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Weekly Predictions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"completed\">\n    <ion-item>\n      <h6>You're all set! Your predictions for the upcoming Round {{ round }} have been submitted.</h6>\n    </ion-item>\n</ion-content>\n\n<ion-content *ngIf=\"!completed\">\n  <ion-grid>\n    <ion-row class=\"center-box\">\n      <ion-col>\n        <ion-img [src]=\"games[0]?.awayLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col><ion-icon name=\"at-outline\" class=\"at-sign\" style=\"color: #ccc;\"></ion-icon></ion-col>\n      <ion-col>\n        <ion-img [src]=\"games[0]?.homeLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"makeFirstSelection(games[0]?.away, 'away')\" class=\"option\" [ngClass]=\"{'active' : (firstSelected === 'away')}\">WIN</ion-col>\n      <ion-col (click)=\"makeFirstSelection('', 'tie')\" class=\"option\" [ngClass]=\"{'active' : (firstSelected === 'tie')}\">TIE</ion-col>\n      <ion-col (click)=\"makeFirstSelection(games[0]?.home, 'home')\" class=\"option\" [ngClass]=\"{'active' : (firstSelected === 'home')}\">WIN</ion-col>\n    </ion-row>\n    <ion-item-divider class=\"grey-line\"></ion-item-divider>\n\n    <ion-row class=\"center-box\">\n      <ion-col>\n        <ion-img [src]=\"games[1]?.awayLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col><ion-icon name=\"at-outline\" class=\"at-sign\" style=\"color: #ccc;\"></ion-icon></ion-col>\n      <ion-col>\n        <ion-img [src]=\"games[1]?.homeLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"makeSecondSelection(games[1]?.away, 'away')\" class=\"option\" [ngClass]=\"{'active' : (secondSelected === 'away')}\">WIN</ion-col>\n      <ion-col (click)=\"makeSecondSelection('', 'tie')\" class=\"option\" [ngClass]=\"{'active' : (secondSelected === 'tie')}\">TIE</ion-col>\n      <ion-col (click)=\"makeSecondSelection(games[1]?.home, 'home')\" class=\"option\" [ngClass]=\"{'active' : (secondSelected === 'home')}\">WIN</ion-col>\n    </ion-row>\n    <ion-item-divider class=\"grey-line\"></ion-item-divider>\n\n    <ion-row class=\"center-box\">\n      <ion-col>\n        <ion-img [src]=\"games[2]?.awayLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col><ion-icon name=\"at-outline\" class=\"at-sign\" style=\"color: #ccc;\"></ion-icon></ion-col>\n      <ion-col>\n        <ion-img [src]=\"games[2]?.homeLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"makeThirdSelection(games[2]?.away, 'away')\" class=\"option\" [ngClass]=\"{'active' : (thirdSelected === 'away')}\">WIN</ion-col>\n      <ion-col (click)=\"makeThirdSelection('', 'tie')\" class=\"option\" [ngClass]=\"{'active' : (thirdSelected === 'tie')}\">TIE</ion-col>\n      <ion-col (click)=\"makeThirdSelection(games[2]?.home, 'home')\" class=\"option\" [ngClass]=\"{'active' : (thirdSelected === 'home')}\">WIN</ion-col>\n    </ion-row>\n    <ion-item-divider class=\"grey-line\"></ion-item-divider>\n\n    <ion-row class=\"center-box\">\n      <ion-col>\n        <ion-img [src]=\"games[3]?.awayLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col><ion-icon name=\"at-outline\" class=\"at-sign\" style=\"color: #ccc;\"></ion-icon></ion-col>\n      <ion-col>\n        <ion-img [src]=\"games[3]?.homeLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"makeFourthSelection(games[3]?.away, 'away')\" class=\"option\" [ngClass]=\"{'active' : (fourthSelected === 'away')}\">WIN</ion-col>\n      <ion-col (click)=\"makeFourthSelection('', 'tie')\" class=\"option\" [ngClass]=\"{'active' : (fourthSelected === 'tie')}\">TIE</ion-col>\n      <ion-col (click)=\"makeFourthSelection(games[3]?.home, 'home')\" class=\"option\" [ngClass]=\"{'active' : (fourthSelected === 'home')}\">WIN</ion-col>\n    </ion-row>\n    <ion-item-divider class=\"grey-line\"></ion-item-divider>\n\n    <ion-row class=\"center-box\">\n      <ion-col>\n        <ion-img [src]=\"games[4]?.awayLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col><ion-icon name=\"at-outline\" class=\"at-sign\" style=\"color: #ccc;\"></ion-icon></ion-col>\n      <ion-col>\n        <ion-img [src]=\"games[4]?.homeLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"makeFifthSelection(games[4]?.away, 'away')\" class=\"option\" [ngClass]=\"{'active' : (fifthSelected === 'away')}\">WIN</ion-col>\n      <ion-col (click)=\"makeFifthSelection('', 'tie')\" class=\"option\" [ngClass]=\"{'active' : (fifthSelected === 'tie')}\">TIE</ion-col>\n      <ion-col (click)=\"makeFifthSelection(games[4]?.home, 'home')\" class=\"option\" [ngClass]=\"{'active' : (fifthSelected === 'home')}\">WIN</ion-col>\n    </ion-row>\n    <ion-item-divider class=\"grey-line\"></ion-item-divider>\n\n    <ion-row class=\"center-box\">\n      <ion-col>\n        <ion-img [src]=\"games[5]?.awayLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col><ion-icon name=\"at-outline\" class=\"at-sign\" style=\"color: #ccc;\"></ion-icon></ion-col>\n      <ion-col>\n        <ion-img [src]=\"games[5]?.homeLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"makeSixthSelection(games[5]?.away, 'away')\" class=\"option\" [ngClass]=\"{'active' : (sixthSelected === 'away')}\">WIN</ion-col>\n      <ion-col (click)=\"makeSixthSelection('', 'tie')\" class=\"option\" [ngClass]=\"{'active' : (sixthSelected === 'tie')}\">TIE</ion-col>\n      <ion-col (click)=\"makeSixthSelection(games[5]?.home, 'home')\" class=\"option\" [ngClass]=\"{'active' : (sixthSelected === 'home')}\">WIN</ion-col>\n    </ion-row>\n    <ion-item-divider class=\"grey-line\"></ion-item-divider>\n  </ion-grid>\n\n  <div class=\"centered\">\n    <ion-button *ngIf=\"!selectionsSubmitted\" (click)=\"saveSelections()\" (click)=\"showModal()\" color=\"success\" [class.button-disabled]=\"!areSelectionsMade()\">SAVE MY PREDICTIONS!</ion-button>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/predictions/confirmation/confirmation-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/predictions/confirmation/confirmation-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPageRoutingModule", function() { return ConfirmationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _confirmation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmation.page */ "./src/app/predictions/confirmation/confirmation.page.ts");




const routes = [
    {
        path: '',
        component: _confirmation_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmationPage"]
    }
];
let ConfirmationPageRoutingModule = class ConfirmationPageRoutingModule {
};
ConfirmationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfirmationPageRoutingModule);



/***/ }),

/***/ "./src/app/predictions/confirmation/confirmation.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/predictions/confirmation/confirmation.module.ts ***!
  \*****************************************************************/
/*! exports provided: ConfirmationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPageModule", function() { return ConfirmationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmation-routing.module */ "./src/app/predictions/confirmation/confirmation-routing.module.ts");
/* harmony import */ var _confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmation.page */ "./src/app/predictions/confirmation/confirmation.page.ts");







let ConfirmationPageModule = class ConfirmationPageModule {
};
ConfirmationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPageRoutingModule"]
        ],
        declarations: [_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmationPage"]]
    })
], ConfirmationPageModule);



/***/ }),

/***/ "./src/app/predictions/confirmation/confirmation.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/predictions/confirmation/confirmation.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".confirmation-card {\n  padding: 30px;\n  background-color: #1d6b1d;\n}\n\n.confirmation-message {\n  color: #fff;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n}\n\n.close-btn {\n  text-align: center;\n  border-radius: 75%;\n  margin: 20px;\n  color: #000;\n  width: 100px;\n  height: 50px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  margin-top: 10%;\n  transform: translateY(-10%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJyZW5raW5nL0RvY3VtZW50cy9FVlBTTC1MaXZlL0VWUFNMLWlvbmljLWFwcC9zcmMvYXBwL3ByZWRpY3Rpb25zL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wcmVkaWN0aW9ucy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJlZGljdGlvbnMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlybWF0aW9uLWNhcmQge1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ2YjFkO1xufVxuXG4uY29uZmlybWF0aW9uLW1lc3NhZ2Uge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA3NSU7XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6ICMwMDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOjAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAlKTtcbn1cbiIsIi5jb25maXJtYXRpb24tY2FyZCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDZiMWQ7XG59XG5cbi5jb25maXJtYXRpb24tbWVzc2FnZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbG9zZS1idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDc1JTtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/predictions/confirmation/confirmation.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/predictions/confirmation/confirmation.page.ts ***!
  \***************************************************************/
/*! exports provided: ConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPage", function() { return ConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let ConfirmationPage = class ConfirmationPage {
    constructor(modalCtlr) {
        this.modalCtlr = modalCtlr;
    }
    ngOnInit() {
    }
    closeModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.modalCtlr.dismiss();
        });
    }
};
ConfirmationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ConfirmationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/confirmation/confirmation.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirmation.page.scss */ "./src/app/predictions/confirmation/confirmation.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ConfirmationPage);



/***/ }),

/***/ "./src/app/predictions/predictions-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/predictions/predictions-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PredictionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionsPageRoutingModule", function() { return PredictionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _predictions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./predictions.page */ "./src/app/predictions/predictions.page.ts");




const routes = [
    {
        path: '',
        component: _predictions_page__WEBPACK_IMPORTED_MODULE_3__["PredictionsPage"]
    },
    {
        path: 'confirmation',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./confirmation/confirmation.module */ "./src/app/predictions/confirmation/confirmation.module.ts")).then(m => m.ConfirmationPageModule)
    }
];
let PredictionsPageRoutingModule = class PredictionsPageRoutingModule {
};
PredictionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PredictionsPageRoutingModule);



/***/ }),

/***/ "./src/app/predictions/predictions.module.ts":
/*!***************************************************!*\
  !*** ./src/app/predictions/predictions.module.ts ***!
  \***************************************************/
/*! exports provided: PredictionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionsPageModule", function() { return PredictionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _predictions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./predictions-routing.module */ "./src/app/predictions/predictions-routing.module.ts");
/* harmony import */ var _predictions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./predictions.page */ "./src/app/predictions/predictions.page.ts");
/* harmony import */ var _confirmation_confirmation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirmation/confirmation.module */ "./src/app/predictions/confirmation/confirmation.module.ts");








let PredictionsPageModule = class PredictionsPageModule {
};
PredictionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _predictions_routing_module__WEBPACK_IMPORTED_MODULE_5__["PredictionsPageRoutingModule"],
            _confirmation_confirmation_module__WEBPACK_IMPORTED_MODULE_7__["ConfirmationPageModule"]
        ],
        declarations: [_predictions_page__WEBPACK_IMPORTED_MODULE_6__["PredictionsPage"]]
    })
], PredictionsPageModule);



/***/ }),

/***/ "./src/app/predictions/predictions.page.scss":
/*!***************************************************!*\
  !*** ./src/app/predictions/predictions.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-img {\n  height: 100px;\n  padding: 10px 0;\n}\n\n.center-box {\n  align-items: center;\n}\n\n.bordered {\n  padding-bottom: 60px;\n  border-bottom: 1px solid #555;\n}\n\n.grey-line {\n  border-bottom: 1px solid #ccc;\n}\n\n.at-sign {\n  height: 60px;\n  margin: auto;\n  width: 100%;\n}\n\n.option {\n  font-size: 18px;\n  text-align: center;\n  padding: 10px;\n  color: #777;\n  border: 1px solid #E0E0E0;\n  background-color: #f4f4f4;\n  margin: 0 20px;\n}\n\n.active {\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  padding: 10px;\n  color: greenyellow;\n  border: 1px solid greenyellow;\n  background-color: green;\n  margin: 0 20px;\n}\n\n.success-report {\n  padding: 10px;\n  font-weight: bold;\n  border-radius: 10%;\n  background-color: green;\n  border: 2px solid greenyellow;\n  color: #fff;\n}\n\n.centered {\n  position: relative;\n  width: 200px;\n  height: auto;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  margin-top: 10%;\n  margin-bottom: 10%;\n  transform: translateY(-10%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJyZW5raW5nL0RvY3VtZW50cy9FVlBTTC1MaXZlL0VWUFNMLWlvbmljLWFwcC9zcmMvYXBwL3ByZWRpY3Rpb25zL3ByZWRpY3Rpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJlZGljdGlvbnMvcHJlZGljdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ByZWRpY3Rpb25zL3ByZWRpY3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLmNlbnRlci1ib3gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9yZGVyZWQge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NTU7XG59XG5cbi5ncmV5LWxpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLmF0LXNpZ24ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vcHRpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICM3Nzc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5cbi5zdWNjZXNzLXJlcG9ydCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46MCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwJSk7XG59XG5cbiIsIi5sb2dvLWltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLmNlbnRlci1ib3gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9yZGVyZWQge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NTU7XG59XG5cbi5ncmV5LWxpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLmF0LXNpZ24ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vcHRpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICM3Nzc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5cbi5zdWNjZXNzLXJlcG9ydCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/predictions/predictions.page.ts":
/*!*************************************************!*\
  !*** ./src/app/predictions/predictions.page.ts ***!
  \*************************************************/
/*! exports provided: PredictionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionsPage", function() { return PredictionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _predictions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./predictions.service */ "./src/app/predictions/predictions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _confirmation_confirmation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmation/confirmation.page */ "./src/app/predictions/confirmation/confirmation.page.ts");






let PredictionsPage = class PredictionsPage {
    constructor(predictionsService, router, modalCtlr) {
        this.predictionsService = predictionsService;
        this.router = router;
        this.modalCtlr = modalCtlr;
        this.games = [];
        this.year = '';
        this.round = '';
        this.selections = [];
        this.firstSelected = '';
        this.secondSelected = '';
        this.thirdSelected = '';
        this.fourthSelected = '';
        this.fifthSelected = '';
        this.sixthSelected = '';
        this.selectionsComplete = false;
        this.selectionsSubmitted = false;
        this.completed = false;
    }
    hasUserSubmittedRoundPredictions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const isCompleted = yield this.predictionsService.hasUserSubmittedRoundPredictions(this.user._id);
            this.completed = isCompleted;
        });
    }
    showModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtlr.create({
                component: _confirmation_confirmation_page__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPage"]
            });
            yield modal.present();
        });
    }
    getCurrentRound() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentRound = yield this.predictionsService.getCurrentRound();
            console.log(this.currentRound);
            this.games = this.currentRound.games;
            this.year = this.currentRound.year;
            this.round = this.currentRound.round;
        });
    }
    makeFirstSelection(team, choice) {
        const selection = { team, choice };
        this.selections.push(selection);
        if (choice === 'away') {
            this.firstSelected = 'away';
        }
        else if (choice === 'tie') {
            this.firstSelected = 'tie';
        }
        else if (choice === 'home') {
            this.firstSelected = 'home';
        }
    }
    makeSecondSelection(team, choice) {
        const selection = { team, choice };
        this.selections.push(selection);
        if (choice === 'away') {
            this.secondSelected = 'away';
        }
        else if (choice === 'tie') {
            this.secondSelected = 'tie';
        }
        else if (choice === 'home') {
            this.secondSelected = 'home';
        }
    }
    makeThirdSelection(team, choice) {
        const selection = { team, choice };
        this.selections.push(selection);
        if (choice === 'away') {
            this.thirdSelected = 'away';
        }
        else if (choice === 'tie') {
            this.thirdSelected = 'tie';
        }
        else if (choice === 'home') {
            this.thirdSelected = 'home';
        }
    }
    makeFourthSelection(team, choice) {
        const selection = { team, choice };
        this.selections.push(selection);
        if (choice === 'away') {
            this.fourthSelected = 'away';
        }
        else if (choice === 'tie') {
            this.fourthSelected = 'tie';
        }
        else if (choice === 'home') {
            this.fourthSelected = 'home';
        }
    }
    makeFifthSelection(team, choice) {
        const selection = { team, choice };
        this.selections.push(selection);
        if (choice === 'away') {
            this.fifthSelected = 'away';
        }
        else if (choice === 'tie') {
            this.fifthSelected = 'tie';
        }
        else if (choice === 'home') {
            this.fifthSelected = 'home';
        }
    }
    makeSixthSelection(team, choice) {
        const selection = { team, choice };
        this.selections.push(selection);
        if (choice === 'away') {
            this.sixthSelected = 'away';
        }
        else if (choice === 'tie') {
            this.sixthSelected = 'tie';
        }
        else if (choice === 'home') {
            this.sixthSelected = 'home';
        }
    }
    areSelectionsMade() {
        if (this.firstSelected &&
            this.secondSelected &&
            this.thirdSelected &&
            this.fourthSelected &&
            this.fifthSelected &&
            this.sixthSelected) {
            this.selectionsComplete = true;
        }
        return this.selectionsComplete;
    }
    clearSelections() {
        this.firstSelected = '';
        this.secondSelected = '';
        this.thirdSelected = '';
        this.fourthSelected = '';
        this.fifthSelected = '';
        this.sixthSelected = '';
    }
    saveSelections() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const predictionObj = {
                userId: this.user._id,
                year: this.year,
                round: this.round,
                completed: true,
                predictions: [
                    this.selections
                ]
            };
            this.selectionsSubmitted = true;
            this.clearSelections();
            this.selectionsSubmitted = false;
            yield this.predictionsService.sendUserPredictions(predictionObj);
            this.router.navigateByUrl('/standings');
        });
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.getCurrentRound();
        this.hasUserSubmittedRoundPredictions();
    }
};
PredictionsPage.ctorParameters = () => [
    { type: _predictions_service__WEBPACK_IMPORTED_MODULE_2__["PredictionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
PredictionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-predictions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./predictions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/predictions.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./predictions.page.scss */ "./src/app/predictions/predictions.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_predictions_service__WEBPACK_IMPORTED_MODULE_2__["PredictionsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], PredictionsPage);



/***/ }),

/***/ "./src/app/predictions/predictions.service.ts":
/*!****************************************************!*\
  !*** ./src/app/predictions/predictions.service.ts ***!
  \****************************************************/
/*! exports provided: PredictionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionsService", function() { return PredictionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");



let PredictionsService = class PredictionsService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getCurrentRound() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let currentRound = {};
            const req = `rounds/current`;
            currentRound = yield this.apiService.sendRequest(req);
            return currentRound;
        });
    }
    hasUserSubmittedRoundPredictions(userId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const roundReq = yield this.getCurrentRound();
            const round = roundReq.round;
            console.log('userId: ', userId);
            console.log('round: ', round);
            let roundPredictions = {};
            const req = `users/check-predictions`;
            const body = {
                userId,
                round
            };
            roundPredictions = yield this.apiService.sendPostRequest(req, body);
            return roundPredictions;
        });
    }
    sendUserPredictions(predictionObj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const req = `users/predictions`;
            try {
                yield this.apiService.sendPostRequest(req, predictionObj);
            }
            catch (error) {
                console.log(error);
                const message = 'Unable to save predictions.';
                return {
                    error,
                    message
                };
            }
        });
    }
};
PredictionsService.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
PredictionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], PredictionsService);



/***/ })

}]);
//# sourceMappingURL=predictions-predictions-module-es2015.js.map