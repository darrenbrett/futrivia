function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["standings-standings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/standings/standings.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/standings/standings.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStandingsStandingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"green-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Standings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-button size=\"6\" offset=\"2\" *ngIf=\"!overall\" (click)=\"showOverallStandings()\" color=\"success\">CLICK FOR OVERALL STANDINGS</ion-button>\n<ion-button size=\"6\" offset=\"2\" *ngIf=\"overall\" (click)=\"showConferenceStandings()\" color=\"success\">CLICK FOR CONFERENCE STANDINGS</ion-button>\n\n<ion-content>\n  <ion-grid *ngIf=\"!overall\" class=\"ion-no-padding\">\n    <ion-header class=\"standings-header\">WESTERN CONFERENCE</ion-header>\n    <ion-row class=\"col-labels\">\n      <ion-col>TEAM</ion-col>\n      <ion-col style=\"margin-left: 6px;\">W</ion-col>\n      <ion-col>L</ion-col>\n      <ion-col>T</ion-col>\n      <ion-col>GD</ion-col>\n      <ion-col>PTS</ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let t of westernStandings; let i = index\" class=\"center-box\">\n      <ion-img [src]=\"t.lgLogoUrl\" class=\"logo-img\"></ion-img>\n      <ion-col style=\"margin-left: 8px;\">{{ t.name.location | teamNameTrunc }}</ion-col>\n      <ion-col style=\"margin-left: 6px;\">{{ t.season.wins }}</ion-col>\n      <ion-col>{{ t.season.losses }}</ion-col>\n      <ion-col>{{ t.season.ties }}</ion-col>\n      <ion-col>{{ t.season.goalDiff }}</ion-col>\n      <ion-col>{{ t.season.points }}</ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"!overall\" class=\"ion-no-padding\">\n    <ion-item-divider></ion-item-divider>\n    <ion-header class=\"standings-header\">EASTERN CONFERENCE</ion-header>\n    <ion-row class=\"col-labels\">\n      <ion-col>TEAM</ion-col>\n      <ion-col style=\"margin-left: 6px;\">W</ion-col>\n      <ion-col>L</ion-col>\n      <ion-col>T</ion-col>\n      <ion-col>GD</ion-col>\n      <ion-col>PTS</ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let t of easternStandings; let i = index\" class=\"center-box\">\n      <ion-img [src]=\"t.lgLogoUrl\" class=\"logo-img\"></ion-img>\n      <ion-col style=\"margin-left: 8px;\">{{ t.name.location | teamNameTrunc }}</ion-col>\n      <ion-col style=\"margin-left: 6px;\">{{ t.season.wins }}</ion-col>\n      <ion-col>{{ t.season.losses }}</ion-col>\n      <ion-col>{{ t.season.ties }}</ion-col>\n      <ion-col>{{ t.season.goalDiff }}</ion-col>\n      <ion-col>{{ t.season.points }}</ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"overall\" class=\"ion-no-padding\">\n    <ion-header class=\"standings-header\">OVERALL STANDINGS</ion-header>\n    <ion-row class=\"col-labels\">\n      <ion-col>TEAM</ion-col>\n      <ion-col style=\"margin-left: 6px;\">W</ion-col>\n      <ion-col>L</ion-col>\n      <ion-col>T</ion-col>\n      <ion-col>GD</ion-col>\n      <ion-col>PTS</ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let t of overallStandings; let i = index\" class=\"center-box\">\n      <ion-img [src]=\"t.lgLogoUrl\" class=\"logo-img\" ></ion-img>\n      <ion-col style=\"margin-left: 8px;\">{{ t.name.location | teamNameTrunc }}</ion-col>\n      <ion-col style=\"margin-left: 6px;\">{{ t.season.wins }}</ion-col>\n      <ion-col>{{ t.season.losses }}</ion-col>\n      <ion-col>{{ t.season.ties }}</ion-col>\n      <ion-col>{{ t.season.goalDiff }}</ion-col>\n      <ion-col>{{ t.season.points }}</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/standings/standings-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/standings/standings-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: StandingsPageRoutingModule */

  /***/
  function srcAppStandingsStandingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StandingsPageRoutingModule", function () {
      return StandingsPageRoutingModule;
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


    var _standings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./standings.page */
    "./src/app/standings/standings.page.ts");

    var routes = [{
      path: '',
      component: _standings_page__WEBPACK_IMPORTED_MODULE_3__["StandingsPage"]
    }];

    var StandingsPageRoutingModule = function StandingsPageRoutingModule() {
      _classCallCheck(this, StandingsPageRoutingModule);
    };

    StandingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StandingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/standings/standings.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/standings/standings.module.ts ***!
    \***********************************************/

  /*! exports provided: StandingsPageModule */

  /***/
  function srcAppStandingsStandingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StandingsPageModule", function () {
      return StandingsPageModule;
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


    var _standings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./standings-routing.module */
    "./src/app/standings/standings-routing.module.ts");
    /* harmony import */


    var _standings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./standings.page */
    "./src/app/standings/standings.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var StandingsPageModule = function StandingsPageModule() {
      _classCallCheck(this, StandingsPageModule);
    };

    StandingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _standings_routing_module__WEBPACK_IMPORTED_MODULE_5__["StandingsPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].forRoot()],
      declarations: [_standings_page__WEBPACK_IMPORTED_MODULE_6__["StandingsPage"]]
    })], StandingsPageModule);
    /***/
  },

  /***/
  "./src/app/standings/standings.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/standings/standings.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppStandingsStandingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".standings-header {\n  margin-bottom: 4px;\n  color: #555;\n  text-align: center;\n  background-color: #f4f4f4;\n  padding: 4px 0;\n}\n\nion-row {\n  border-bottom: 1px solid #f1f1f1;\n}\n\nion-button {\n  margin-bottom: 6px;\n}\n\n.grey-text {\n  color: #ccc;\n}\n\n.logo-img {\n  height: 40px;\n  width: 34px;\n  padding: 2px;\n}\n\n.col-labels {\n  padding-left: 38px;\n}\n\n.center-box {\n  align-items: center;\n}\n\n.drk-grn-btn, .btn-native {\n  background-color: #1d6b1d;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJyZW5raW5nL0RvY3VtZW50cy9FVlBTTC1MaXZlL0VWUFNMLWlvbmljLWFwcC9zcmMvYXBwL3N0YW5kaW5ncy9zdGFuZGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9zdGFuZGluZ3Mvc3RhbmRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBRUEsWUFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3N0YW5kaW5ncy9zdGFuZGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YW5kaW5ncy1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGNvbG9yOiAjNTU1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuXG5pb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5ncmV5LXRleHQge1xuICBjb2xvcjogI2NjYztcbn1cblxuLmxvZ28taW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMzRweDtcbiAgLy8gcGFkZGluZzogMnB4IDA7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmNvbC1sYWJlbHMge1xuICBwYWRkaW5nLWxlZnQ6IDM4cHg7XG59XG5cbi5jZW50ZXItYm94IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRyay1ncm4tYnRuLCAuYnRuLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDZiMWQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuIiwiLnN0YW5kaW5ncy1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGNvbG9yOiAjNTU1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuXG5pb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5ncmV5LXRleHQge1xuICBjb2xvcjogI2NjYztcbn1cblxuLmxvZ28taW1nIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMzRweDtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uY29sLWxhYmVscyB7XG4gIHBhZGRpbmctbGVmdDogMzhweDtcbn1cblxuLmNlbnRlci1ib3gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZHJrLWdybi1idG4sIC5idG4tbmF0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkNmIxZDtcbiAgY29sb3I6ICNmZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/standings/standings.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/standings/standings.page.ts ***!
    \*********************************************/

  /*! exports provided: StandingsPage */

  /***/
  function srcAppStandingsStandingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StandingsPage", function () {
      return StandingsPage;
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


    var _standings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./standings.service */
    "./src/app/standings/standings.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StandingsPage = /*#__PURE__*/function () {
      function StandingsPage(standingsService, router) {
        _classCallCheck(this, StandingsPage);

        this.standingsService = standingsService;
        this.router = router;
        this.easternStandings = [];
        this.westernStandings = [];
        this.overallStandings = [];
        this.overall = false;
      }

      _createClass(StandingsPage, [{
        key: "getConferenceStandings",
        value: function getConferenceStandings() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.standingsService.getStandingsByConference('east');

                  case 2:
                    this.easternStandings = _context.sent;
                    _context.next = 5;
                    return this.standingsService.getStandingsByConference('west');

                  case 5:
                    this.westernStandings = _context.sent;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getOverallStandings",
        value: function getOverallStandings() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.standingsService.getOverallStandings();

                  case 2:
                    this.overallStandings = _context2.sent;

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "showOverallStandings",
        value: function showOverallStandings() {
          this.overall = true;
        }
      }, {
        key: "showConferenceStandings",
        value: function showConferenceStandings() {
          this.overall = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getConferenceStandings();
          this.getOverallStandings();
        }
      }]);

      return StandingsPage;
    }();

    StandingsPage.ctorParameters = function () {
      return [{
        type: _standings_service__WEBPACK_IMPORTED_MODULE_2__["StandingsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    StandingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-standings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./standings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/standings/standings.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./standings.page.scss */
      "./src/app/standings/standings.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_standings_service__WEBPACK_IMPORTED_MODULE_2__["StandingsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], StandingsPage);
    /***/
  },

  /***/
  "./src/app/standings/standings.service.ts":
  /*!************************************************!*\
    !*** ./src/app/standings/standings.service.ts ***!
    \************************************************/

  /*! exports provided: StandingsService */

  /***/
  function srcAppStandingsStandingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StandingsService", function () {
      return StandingsService;
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

    var StandingsService = /*#__PURE__*/function () {
      function StandingsService(apiService) {
        _classCallCheck(this, StandingsService);

        this.apiService = apiService;
      }

      _createClass(StandingsService, [{
        key: "getStandingsByConference",
        value: function getStandingsByConference(conference) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var standings, req;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    standings = [];
                    req = "teams/standings/".concat(conference);
                    _context3.next = 4;
                    return this.apiService.sendRequest(req);

                  case 4:
                    standings = _context3.sent;
                    return _context3.abrupt("return", standings);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getOverallStandings",
        value: function getOverallStandings() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var standings, req;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    standings = [];
                    req = "teams/standings/overall";
                    _context4.next = 4;
                    return this.apiService.sendRequest(req);

                  case 4:
                    standings = _context4.sent;
                    return _context4.abrupt("return", standings);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return StandingsService;
    }();

    StandingsService.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    StandingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], StandingsService);
    /***/
  }
}]);
//# sourceMappingURL=standings-standings-module-es5.js.map