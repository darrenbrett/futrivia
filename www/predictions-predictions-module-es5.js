function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["predictions-predictions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/confirmation/confirmation.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/confirmation/confirmation.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPredictionsConfirmationConfirmationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-title>Confirm</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"primary\" class=\"confirmation-card\">\n    <ion-text class=\"confirmation-message\">Predictions made successfully!</ion-text>\n    <ion-buttons>\n      <ion-button expand=\"block\" fill=\"solid\" (click)=\"closeModal()\" size=\"large\" class=\"close-btn\">CLOSE</ion-button>\n    </ion-buttons>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/predictions.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/predictions.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPredictionsPredictionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"green-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Weekly Predictions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"completed\">\n    <ion-item>\n      <h6>You're all set! Your predictions for the upcoming Round {{ round }} have been submitted.</h6>\n    </ion-item>\n</ion-content>\n\n<ion-content *ngIf=\"!completed\">\n  <ion-grid>\n    <ion-row class=\"center-box\">\n      <ion-col>\n        <ion-img [src]=\"games[0]?.awayLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col><ion-icon name=\"at-outline\" class=\"at-sign\" style=\"color: #ccc;\"></ion-icon></ion-col>\n      <ion-col>\n        <ion-img [src]=\"games[0]?.homeLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"makeFirstSelection(games[0]?.away, 'away')\" class=\"option\" [ngClass]=\"{'active' : (firstSelected === 'away')}\">WIN</ion-col>\n      <ion-col (click)=\"makeFirstSelection('', 'tie')\" class=\"option\" [ngClass]=\"{'active' : (firstSelected === 'tie')}\">TIE</ion-col>\n      <ion-col (click)=\"makeFirstSelection(games[0]?.home, 'home')\" class=\"option\" [ngClass]=\"{'active' : (firstSelected === 'home')}\">WIN</ion-col>\n    </ion-row>\n    <ion-item-divider class=\"grey-line\"></ion-item-divider>\n\n    <ion-row class=\"center-box\">\n      <ion-col>\n        <ion-img [src]=\"games[1]?.awayLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col><ion-icon name=\"at-outline\" class=\"at-sign\" style=\"color: #ccc;\"></ion-icon></ion-col>\n      <ion-col>\n        <ion-img [src]=\"games[1]?.homeLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"makeSecondSelection(games[1]?.away, 'away')\" class=\"option\" [ngClass]=\"{'active' : (secondSelected === 'away')}\">WIN</ion-col>\n      <ion-col (click)=\"makeSecondSelection('', 'tie')\" class=\"option\" [ngClass]=\"{'active' : (secondSelected === 'tie')}\">TIE</ion-col>\n      <ion-col (click)=\"makeSecondSelection(games[1]?.home, 'home')\" class=\"option\" [ngClass]=\"{'active' : (secondSelected === 'home')}\">WIN</ion-col>\n    </ion-row>\n    <ion-item-divider class=\"grey-line\"></ion-item-divider>\n\n    <ion-row class=\"center-box\">\n      <ion-col>\n        <ion-img [src]=\"games[2]?.awayLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col><ion-icon name=\"at-outline\" class=\"at-sign\" style=\"color: #ccc;\"></ion-icon></ion-col>\n      <ion-col>\n        <ion-img [src]=\"games[2]?.homeLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"makeThirdSelection(games[2]?.away, 'away')\" class=\"option\" [ngClass]=\"{'active' : (thirdSelected === 'away')}\">WIN</ion-col>\n      <ion-col (click)=\"makeThirdSelection('', 'tie')\" class=\"option\" [ngClass]=\"{'active' : (thirdSelected === 'tie')}\">TIE</ion-col>\n      <ion-col (click)=\"makeThirdSelection(games[2]?.home, 'home')\" class=\"option\" [ngClass]=\"{'active' : (thirdSelected === 'home')}\">WIN</ion-col>\n    </ion-row>\n    <ion-item-divider class=\"grey-line\"></ion-item-divider>\n\n    <ion-row class=\"center-box\">\n      <ion-col>\n        <ion-img [src]=\"games[3]?.awayLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col><ion-icon name=\"at-outline\" class=\"at-sign\" style=\"color: #ccc;\"></ion-icon></ion-col>\n      <ion-col>\n        <ion-img [src]=\"games[3]?.homeLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"makeFourthSelection(games[3]?.away, 'away')\" class=\"option\" [ngClass]=\"{'active' : (fourthSelected === 'away')}\">WIN</ion-col>\n      <ion-col (click)=\"makeFourthSelection('', 'tie')\" class=\"option\" [ngClass]=\"{'active' : (fourthSelected === 'tie')}\">TIE</ion-col>\n      <ion-col (click)=\"makeFourthSelection(games[3]?.home, 'home')\" class=\"option\" [ngClass]=\"{'active' : (fourthSelected === 'home')}\">WIN</ion-col>\n    </ion-row>\n    <ion-item-divider class=\"grey-line\"></ion-item-divider>\n\n    <ion-row class=\"center-box\">\n      <ion-col>\n        <ion-img [src]=\"games[4]?.awayLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col><ion-icon name=\"at-outline\" class=\"at-sign\" style=\"color: #ccc;\"></ion-icon></ion-col>\n      <ion-col>\n        <ion-img [src]=\"games[4]?.homeLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"makeFifthSelection(games[4]?.away, 'away')\" class=\"option\" [ngClass]=\"{'active' : (fifthSelected === 'away')}\">WIN</ion-col>\n      <ion-col (click)=\"makeFifthSelection('', 'tie')\" class=\"option\" [ngClass]=\"{'active' : (fifthSelected === 'tie')}\">TIE</ion-col>\n      <ion-col (click)=\"makeFifthSelection(games[4]?.home, 'home')\" class=\"option\" [ngClass]=\"{'active' : (fifthSelected === 'home')}\">WIN</ion-col>\n    </ion-row>\n    <ion-item-divider class=\"grey-line\"></ion-item-divider>\n\n    <ion-row class=\"center-box\">\n      <ion-col>\n        <ion-img [src]=\"games[5]?.awayLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col><ion-icon name=\"at-outline\" class=\"at-sign\" style=\"color: #ccc;\"></ion-icon></ion-col>\n      <ion-col>\n        <ion-img [src]=\"games[5]?.homeLogo\" class=\"logo-img\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col (click)=\"makeSixthSelection(games[5]?.away, 'away')\" class=\"option\" [ngClass]=\"{'active' : (sixthSelected === 'away')}\">WIN</ion-col>\n      <ion-col (click)=\"makeSixthSelection('', 'tie')\" class=\"option\" [ngClass]=\"{'active' : (sixthSelected === 'tie')}\">TIE</ion-col>\n      <ion-col (click)=\"makeSixthSelection(games[5]?.home, 'home')\" class=\"option\" [ngClass]=\"{'active' : (sixthSelected === 'home')}\">WIN</ion-col>\n    </ion-row>\n    <ion-item-divider class=\"grey-line\"></ion-item-divider>\n  </ion-grid>\n\n  <div class=\"centered\">\n    <ion-button *ngIf=\"!selectionsSubmitted\" (click)=\"saveSelections()\" (click)=\"showModal()\" color=\"success\" [class.button-disabled]=\"!areSelectionsMade()\">SAVE MY PREDICTIONS!</ion-button>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/predictions/confirmation/confirmation-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/predictions/confirmation/confirmation-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ConfirmationPageRoutingModule */

  /***/
  function srcAppPredictionsConfirmationConfirmationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationPageRoutingModule", function () {
      return ConfirmationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _confirmation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./confirmation.page */
    "./src/app/predictions/confirmation/confirmation.page.ts");

    var routes = [{
      path: '',
      component: _confirmation_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmationPage"]
    }];

    var ConfirmationPageRoutingModule = function ConfirmationPageRoutingModule() {
      _classCallCheck(this, ConfirmationPageRoutingModule);
    };

    ConfirmationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfirmationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/predictions/confirmation/confirmation.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/predictions/confirmation/confirmation.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ConfirmationPageModule */

  /***/
  function srcAppPredictionsConfirmationConfirmationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationPageModule", function () {
      return ConfirmationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./confirmation-routing.module */
    "./src/app/predictions/confirmation/confirmation-routing.module.ts");
    /* harmony import */


    var _confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./confirmation.page */
    "./src/app/predictions/confirmation/confirmation.page.ts");

    var ConfirmationPageModule = function ConfirmationPageModule() {
      _classCallCheck(this, ConfirmationPageModule);
    };

    ConfirmationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPageRoutingModule"]],
      declarations: [_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmationPage"]]
    })], ConfirmationPageModule);
    /***/
  },

  /***/
  "./src/app/predictions/confirmation/confirmation.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/predictions/confirmation/confirmation.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPredictionsConfirmationConfirmationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".confirmation-card {\n  padding: 30px;\n  background-color: #1d6b1d;\n}\n\n.confirmation-message {\n  color: #fff;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n}\n\n.close-btn {\n  text-align: center;\n  border-radius: 75%;\n  margin: 20px;\n  color: #000;\n  width: 100px;\n  height: 50px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  margin-top: 10%;\n  transform: translateY(-10%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJyZW5raW5nL0RvY3VtZW50cy9FVlBTTC1MaXZlL0VWUFNMLWlvbmljLWFwcC9zcmMvYXBwL3ByZWRpY3Rpb25zL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wcmVkaWN0aW9ucy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJlZGljdGlvbnMvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlybWF0aW9uLWNhcmQge1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ2YjFkO1xufVxuXG4uY29uZmlybWF0aW9uLW1lc3NhZ2Uge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA3NSU7XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6ICMwMDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOjAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAlKTtcbn1cbiIsIi5jb25maXJtYXRpb24tY2FyZCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDZiMWQ7XG59XG5cbi5jb25maXJtYXRpb24tbWVzc2FnZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbG9zZS1idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDc1JTtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/predictions/confirmation/confirmation.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/predictions/confirmation/confirmation.page.ts ***!
    \***************************************************************/

  /*! exports provided: ConfirmationPage */

  /***/
  function srcAppPredictionsConfirmationConfirmationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationPage", function () {
      return ConfirmationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ConfirmationPage = /*#__PURE__*/function () {
      function ConfirmationPage(modalCtlr) {
        _classCallCheck(this, ConfirmationPage);

        this.modalCtlr = modalCtlr;
      }

      _createClass(ConfirmationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtlr.dismiss();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ConfirmationPage;
    }();

    ConfirmationPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ConfirmationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirmation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/confirmation/confirmation.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmation.page.scss */
      "./src/app/predictions/confirmation/confirmation.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ConfirmationPage);
    /***/
  },

  /***/
  "./src/app/predictions/predictions-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/predictions/predictions-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: PredictionsPageRoutingModule */

  /***/
  function srcAppPredictionsPredictionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsPageRoutingModule", function () {
      return PredictionsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _predictions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./predictions.page */
    "./src/app/predictions/predictions.page.ts");

    var routes = [{
      path: '',
      component: _predictions_page__WEBPACK_IMPORTED_MODULE_3__["PredictionsPage"]
    }, {
      path: 'confirmation',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./confirmation/confirmation.module */
        "./src/app/predictions/confirmation/confirmation.module.ts")).then(function (m) {
          return m.ConfirmationPageModule;
        });
      }
    }];

    var PredictionsPageRoutingModule = function PredictionsPageRoutingModule() {
      _classCallCheck(this, PredictionsPageRoutingModule);
    };

    PredictionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PredictionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/predictions/predictions.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/predictions/predictions.module.ts ***!
    \***************************************************/

  /*! exports provided: PredictionsPageModule */

  /***/
  function srcAppPredictionsPredictionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsPageModule", function () {
      return PredictionsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _predictions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./predictions-routing.module */
    "./src/app/predictions/predictions-routing.module.ts");
    /* harmony import */


    var _predictions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./predictions.page */
    "./src/app/predictions/predictions.page.ts");
    /* harmony import */


    var _confirmation_confirmation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./confirmation/confirmation.module */
    "./src/app/predictions/confirmation/confirmation.module.ts");

    var PredictionsPageModule = function PredictionsPageModule() {
      _classCallCheck(this, PredictionsPageModule);
    };

    PredictionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _predictions_routing_module__WEBPACK_IMPORTED_MODULE_5__["PredictionsPageRoutingModule"], _confirmation_confirmation_module__WEBPACK_IMPORTED_MODULE_7__["ConfirmationPageModule"]],
      declarations: [_predictions_page__WEBPACK_IMPORTED_MODULE_6__["PredictionsPage"]]
    })], PredictionsPageModule);
    /***/
  },

  /***/
  "./src/app/predictions/predictions.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/predictions/predictions.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPredictionsPredictionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-img {\n  height: 100px;\n  padding: 10px 0;\n}\n\n.center-box {\n  align-items: center;\n}\n\n.bordered {\n  padding-bottom: 60px;\n  border-bottom: 1px solid #555;\n}\n\n.grey-line {\n  border-bottom: 1px solid #ccc;\n}\n\n.at-sign {\n  height: 60px;\n  margin: auto;\n  width: 100%;\n}\n\n.option {\n  font-size: 18px;\n  text-align: center;\n  padding: 10px;\n  color: #777;\n  border: 1px solid #E0E0E0;\n  background-color: #f4f4f4;\n  margin: 0 20px;\n}\n\n.active {\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  padding: 10px;\n  color: greenyellow;\n  border: 1px solid greenyellow;\n  background-color: green;\n  margin: 0 20px;\n}\n\n.success-report {\n  padding: 10px;\n  font-weight: bold;\n  border-radius: 10%;\n  background-color: green;\n  border: 2px solid greenyellow;\n  color: #fff;\n}\n\n.centered {\n  position: relative;\n  width: 200px;\n  height: auto;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  margin-top: 10%;\n  margin-bottom: 10%;\n  transform: translateY(-10%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJyZW5raW5nL0RvY3VtZW50cy9FVlBTTC1MaXZlL0VWUFNMLWlvbmljLWFwcC9zcmMvYXBwL3ByZWRpY3Rpb25zL3ByZWRpY3Rpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJlZGljdGlvbnMvcHJlZGljdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ByZWRpY3Rpb25zL3ByZWRpY3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLmNlbnRlci1ib3gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9yZGVyZWQge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NTU7XG59XG5cbi5ncmV5LWxpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLmF0LXNpZ24ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vcHRpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICM3Nzc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5cbi5zdWNjZXNzLXJlcG9ydCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46MCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwJSk7XG59XG5cbiIsIi5sb2dvLWltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLmNlbnRlci1ib3gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9yZGVyZWQge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NTU7XG59XG5cbi5ncmV5LWxpbmUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLmF0LXNpZ24ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vcHRpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICM3Nzc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMEUwRTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5cbi5zdWNjZXNzLXJlcG9ydCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAxMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbnllbGxvdztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAlKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/predictions/predictions.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/predictions/predictions.page.ts ***!
    \*************************************************/

  /*! exports provided: PredictionsPage */

  /***/
  function srcAppPredictionsPredictionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsPage", function () {
      return PredictionsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _predictions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./predictions.service */
    "./src/app/predictions/predictions.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _confirmation_confirmation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./confirmation/confirmation.page */
    "./src/app/predictions/confirmation/confirmation.page.ts");

    var PredictionsPage = /*#__PURE__*/function () {
      function PredictionsPage(predictionsService, router, modalCtlr) {
        _classCallCheck(this, PredictionsPage);

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

      _createClass(PredictionsPage, [{
        key: "hasUserSubmittedRoundPredictions",
        value: function hasUserSubmittedRoundPredictions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var isCompleted;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.predictionsService.hasUserSubmittedRoundPredictions(this.user._id);

                  case 2:
                    isCompleted = _context2.sent;
                    this.completed = isCompleted;

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "showModal",
        value: function showModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtlr.create({
                      component: _confirmation_confirmation_page__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPage"]
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getCurrentRound",
        value: function getCurrentRound() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.predictionsService.getCurrentRound();

                  case 2:
                    this.currentRound = _context4.sent;
                    console.log(this.currentRound);
                    this.games = this.currentRound.games;
                    this.year = this.currentRound.year;
                    this.round = this.currentRound.round;

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "makeFirstSelection",
        value: function makeFirstSelection(team, choice) {
          var selection = {
            team: team,
            choice: choice
          };
          this.selections.push(selection);

          if (choice === 'away') {
            this.firstSelected = 'away';
          } else if (choice === 'tie') {
            this.firstSelected = 'tie';
          } else if (choice === 'home') {
            this.firstSelected = 'home';
          }
        }
      }, {
        key: "makeSecondSelection",
        value: function makeSecondSelection(team, choice) {
          var selection = {
            team: team,
            choice: choice
          };
          this.selections.push(selection);

          if (choice === 'away') {
            this.secondSelected = 'away';
          } else if (choice === 'tie') {
            this.secondSelected = 'tie';
          } else if (choice === 'home') {
            this.secondSelected = 'home';
          }
        }
      }, {
        key: "makeThirdSelection",
        value: function makeThirdSelection(team, choice) {
          var selection = {
            team: team,
            choice: choice
          };
          this.selections.push(selection);

          if (choice === 'away') {
            this.thirdSelected = 'away';
          } else if (choice === 'tie') {
            this.thirdSelected = 'tie';
          } else if (choice === 'home') {
            this.thirdSelected = 'home';
          }
        }
      }, {
        key: "makeFourthSelection",
        value: function makeFourthSelection(team, choice) {
          var selection = {
            team: team,
            choice: choice
          };
          this.selections.push(selection);

          if (choice === 'away') {
            this.fourthSelected = 'away';
          } else if (choice === 'tie') {
            this.fourthSelected = 'tie';
          } else if (choice === 'home') {
            this.fourthSelected = 'home';
          }
        }
      }, {
        key: "makeFifthSelection",
        value: function makeFifthSelection(team, choice) {
          var selection = {
            team: team,
            choice: choice
          };
          this.selections.push(selection);

          if (choice === 'away') {
            this.fifthSelected = 'away';
          } else if (choice === 'tie') {
            this.fifthSelected = 'tie';
          } else if (choice === 'home') {
            this.fifthSelected = 'home';
          }
        }
      }, {
        key: "makeSixthSelection",
        value: function makeSixthSelection(team, choice) {
          var selection = {
            team: team,
            choice: choice
          };
          this.selections.push(selection);

          if (choice === 'away') {
            this.sixthSelected = 'away';
          } else if (choice === 'tie') {
            this.sixthSelected = 'tie';
          } else if (choice === 'home') {
            this.sixthSelected = 'home';
          }
        }
      }, {
        key: "areSelectionsMade",
        value: function areSelectionsMade() {
          if (this.firstSelected && this.secondSelected && this.thirdSelected && this.fourthSelected && this.fifthSelected && this.sixthSelected) {
            this.selectionsComplete = true;
          }

          return this.selectionsComplete;
        }
      }, {
        key: "clearSelections",
        value: function clearSelections() {
          this.firstSelected = '';
          this.secondSelected = '';
          this.thirdSelected = '';
          this.fourthSelected = '';
          this.fifthSelected = '';
          this.sixthSelected = '';
        }
      }, {
        key: "saveSelections",
        value: function saveSelections() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var predictionObj;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    predictionObj = {
                      userId: this.user._id,
                      year: this.year,
                      round: this.round,
                      completed: true,
                      predictions: [this.selections]
                    };
                    this.selectionsSubmitted = true;
                    this.clearSelections();
                    this.selectionsSubmitted = false;
                    _context5.next = 6;
                    return this.predictionsService.sendUserPredictions(predictionObj);

                  case 6:
                    this.router.navigateByUrl('/standings');

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user = JSON.parse(localStorage.getItem('currentUser'));
          this.getCurrentRound();
          this.hasUserSubmittedRoundPredictions();
        }
      }]);

      return PredictionsPage;
    }();

    PredictionsPage.ctorParameters = function () {
      return [{
        type: _predictions_service__WEBPACK_IMPORTED_MODULE_2__["PredictionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    PredictionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-predictions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./predictions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/predictions/predictions.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./predictions.page.scss */
      "./src/app/predictions/predictions.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_predictions_service__WEBPACK_IMPORTED_MODULE_2__["PredictionsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], PredictionsPage);
    /***/
  },

  /***/
  "./src/app/predictions/predictions.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/predictions/predictions.service.ts ***!
    \****************************************************/

  /*! exports provided: PredictionsService */

  /***/
  function srcAppPredictionsPredictionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsService", function () {
      return PredictionsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/api/api.service.ts");

    var PredictionsService = /*#__PURE__*/function () {
      function PredictionsService(apiService) {
        _classCallCheck(this, PredictionsService);

        this.apiService = apiService;
      }

      _createClass(PredictionsService, [{
        key: "getCurrentRound",
        value: function getCurrentRound() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var currentRound, req;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    currentRound = {};
                    req = "rounds/current";
                    _context6.next = 4;
                    return this.apiService.sendRequest(req);

                  case 4:
                    currentRound = _context6.sent;
                    return _context6.abrupt("return", currentRound);

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "hasUserSubmittedRoundPredictions",
        value: function hasUserSubmittedRoundPredictions(userId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var roundReq, round, roundPredictions, req, body;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.getCurrentRound();

                  case 2:
                    roundReq = _context7.sent;
                    round = roundReq.round;
                    console.log('userId: ', userId);
                    console.log('round: ', round);
                    roundPredictions = {};
                    req = "users/check-predictions";
                    body = {
                      userId: userId,
                      round: round
                    };
                    _context7.next = 11;
                    return this.apiService.sendPostRequest(req, body);

                  case 11:
                    roundPredictions = _context7.sent;
                    return _context7.abrupt("return", roundPredictions);

                  case 13:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "sendUserPredictions",
        value: function sendUserPredictions(predictionObj) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var req, message;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    req = "users/predictions";
                    _context8.prev = 1;
                    _context8.next = 4;
                    return this.apiService.sendPostRequest(req, predictionObj);

                  case 4:
                    _context8.next = 11;
                    break;

                  case 6:
                    _context8.prev = 6;
                    _context8.t0 = _context8["catch"](1);
                    console.log(_context8.t0);
                    message = 'Unable to save predictions.';
                    return _context8.abrupt("return", {
                      error: _context8.t0,
                      message: message
                    });

                  case 11:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[1, 6]]);
          }));
        }
      }]);

      return PredictionsService;
    }();

    PredictionsService.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    PredictionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], PredictionsService);
    /***/
  }
}]);
//# sourceMappingURL=predictions-predictions-module-es5.js.map