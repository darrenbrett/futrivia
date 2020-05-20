function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scorers-scorers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/scorers/scorers.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scorers/scorers.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScorersScorersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"green-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Goal Scorers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"grey-text\">\n      <ion-col size-md=\"4\" size-xs=\"6\">PLAYER</ion-col>\n      <ion-col size-md size-xs=\"3\">TEAM</ion-col>\n      <ion-col size-md size-xs=\"3\">GOALS</ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let s of scorers; let i = index\">\n      <ion-col size-md=\"4\" size-xs=\"6\">{{ s.fullName }}</ion-col>\n      <ion-col size-md size-xs=\"3\" class=\"grey-text\">{{ s.currentTeam | teamNameTrunc }}</ion-col>\n      <ion-col size-md size-xs=\"3\">{{ s.goals.year['2020'] }}</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/scorers/scorers-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/scorers/scorers-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ScorersPageRoutingModule */

  /***/
  function srcAppScorersScorersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScorersPageRoutingModule", function () {
      return ScorersPageRoutingModule;
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


    var _scorers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./scorers.page */
    "./src/app/scorers/scorers.page.ts");

    var routes = [{
      path: '',
      component: _scorers_page__WEBPACK_IMPORTED_MODULE_3__["ScorersPage"]
    }];

    var ScorersPageRoutingModule = function ScorersPageRoutingModule() {
      _classCallCheck(this, ScorersPageRoutingModule);
    };

    ScorersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ScorersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/scorers/scorers.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/scorers/scorers.module.ts ***!
    \*******************************************/

  /*! exports provided: ScorersPageModule */

  /***/
  function srcAppScorersScorersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScorersPageModule", function () {
      return ScorersPageModule;
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


    var _scorers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./scorers-routing.module */
    "./src/app/scorers/scorers-routing.module.ts");
    /* harmony import */


    var _scorers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./scorers.page */
    "./src/app/scorers/scorers.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ScorersPageModule = function ScorersPageModule() {
      _classCallCheck(this, ScorersPageModule);
    };

    ScorersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _scorers_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScorersPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].forRoot()],
      declarations: [_scorers_page__WEBPACK_IMPORTED_MODULE_6__["ScorersPage"]]
    })], ScorersPageModule);
    /***/
  },

  /***/
  "./src/app/scorers/scorers.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/scorers/scorers.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppScorersScorersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-row {\n  border-bottom: 1px solid #ccc;\n}\n\n.grey-text {\n  color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJyZW5raW5nL0RvY3VtZW50cy9FVlBTTC1MaXZlL0VWUFNMLWlvbmljLWFwcC9zcmMvYXBwL3Njb3JlcnMvc2NvcmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Njb3JlcnMvc2NvcmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2NvcmVycy9zY29yZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1yb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cblxuLmdyZXktdGV4dCB7XG4gIGNvbG9yOiAjNzc3O1xufVxuIiwiaW9uLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uZ3JleS10ZXh0IHtcbiAgY29sb3I6ICM3Nzc7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/scorers/scorers.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/scorers/scorers.page.ts ***!
    \*****************************************/

  /*! exports provided: ScorersPage */

  /***/
  function srcAppScorersScorersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScorersPage", function () {
      return ScorersPage;
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


    var _scorers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./scorers.service */
    "./src/app/scorers/scorers.service.ts");

    var ScorersPage = /*#__PURE__*/function () {
      function ScorersPage(scorersService) {
        _classCallCheck(this, ScorersPage);

        this.scorersService = scorersService;
      }

      _createClass(ScorersPage, [{
        key: "getScorers",
        value: function getScorers() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.scorersService.getScorers();

                  case 2:
                    this.scorers = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getScorers();
        }
      }]);

      return ScorersPage;
    }();

    ScorersPage.ctorParameters = function () {
      return [{
        type: _scorers_service__WEBPACK_IMPORTED_MODULE_2__["ScorersService"]
      }];
    };

    ScorersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scorers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./scorers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/scorers/scorers.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./scorers.page.scss */
      "./src/app/scorers/scorers.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scorers_service__WEBPACK_IMPORTED_MODULE_2__["ScorersService"]])], ScorersPage);
    /***/
  },

  /***/
  "./src/app/scorers/scorers.service.ts":
  /*!********************************************!*\
    !*** ./src/app/scorers/scorers.service.ts ***!
    \********************************************/

  /*! exports provided: ScorersService */

  /***/
  function srcAppScorersScorersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScorersService", function () {
      return ScorersService;
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

    var ScorersService = /*#__PURE__*/function () {
      function ScorersService(apiService) {
        _classCallCheck(this, ScorersService);

        this.apiService = apiService;
      }

      _createClass(ScorersService, [{
        key: "getScorers",
        value: function getScorers() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var req;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    req = "players/scorers";
                    _context2.next = 3;
                    return this.apiService.sendRequest(req);

                  case 3:
                    this.scorers = _context2.sent;
                    return _context2.abrupt("return", this.scorers);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ScorersService;
    }();

    ScorersService.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    ScorersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])], ScorersService);
    /***/
  }
}]);
//# sourceMappingURL=scorers-scorers-module-es5.js.map