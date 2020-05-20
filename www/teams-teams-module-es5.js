function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teams-teams-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teams.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teams.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeamsTeamsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"green-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Teams</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor=\"let t of teams; let i = index\" class=\"center-box\">\n      <ion-img [src]=\"t.smLogoUrl\" class=\"logo-img\" [routerLink]=\"['./', t.name.location]\"></ion-img>\n      <ion-col style=\"margin-left: 6px;\" [routerLink]=\"['./', t.name.location]\">{{ t.name.location }} {{ t.name.nick }}</ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/teams/teams-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/teams/teams-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: TeamsPageRoutingModule */

  /***/
  function srcAppTeamsTeamsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamsPageRoutingModule", function () {
      return TeamsPageRoutingModule;
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


    var _teams_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./teams.page */
    "./src/app/teams/teams.page.ts");

    var routes = [{
      path: '',
      component: _teams_page__WEBPACK_IMPORTED_MODULE_3__["TeamsPage"]
    }, {
      path: ':location',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | team-team-module */
        "team-team-module").then(__webpack_require__.bind(null,
        /*! ./team/team.module */
        "./src/app/teams/team/team.module.ts")).then(function (m) {
          return m.TeamPageModule;
        });
      }
    }];

    var TeamsPageRoutingModule = function TeamsPageRoutingModule() {
      _classCallCheck(this, TeamsPageRoutingModule);
    };

    TeamsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TeamsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/teams/teams.module.ts":
  /*!***************************************!*\
    !*** ./src/app/teams/teams.module.ts ***!
    \***************************************/

  /*! exports provided: TeamsPageModule */

  /***/
  function srcAppTeamsTeamsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamsPageModule", function () {
      return TeamsPageModule;
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


    var _teams_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./teams-routing.module */
    "./src/app/teams/teams-routing.module.ts");
    /* harmony import */


    var _teams_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./teams.page */
    "./src/app/teams/teams.page.ts");

    var TeamsPageModule = function TeamsPageModule() {
      _classCallCheck(this, TeamsPageModule);
    };

    TeamsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _teams_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamsPageRoutingModule"]],
      declarations: [_teams_page__WEBPACK_IMPORTED_MODULE_6__["TeamsPage"]]
    })], TeamsPageModule);
    /***/
  },

  /***/
  "./src/app/teams/teams.page.scss":
  /*!***************************************!*\
    !*** ./src/app/teams/teams.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeamsTeamsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center-box {\n  align-items: center;\n}\n\n.logo-img {\n  height: 40px;\n  padding: 4px 0 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJyZW5raW5nL0RvY3VtZW50cy9FVlBTTC1MaXZlL0VWUFNMLWlvbmljLWFwcC9zcmMvYXBwL3RlYW1zL3RlYW1zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGVhbXMvdGVhbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGVhbXMvdGVhbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlci1ib3gge1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG5cbi5sb2dvLWltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNHB4IDAgNHB4IDA7XG59XG4iLCIuY2VudGVyLWJveCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvLWltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNHB4IDAgNHB4IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/teams/teams.page.ts":
  /*!*************************************!*\
    !*** ./src/app/teams/teams.page.ts ***!
    \*************************************/

  /*! exports provided: TeamsPage */

  /***/
  function srcAppTeamsTeamsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamsPage", function () {
      return TeamsPage;
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


    var _teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./teams.service */
    "./src/app/teams/teams.service.ts");

    var TeamsPage = /*#__PURE__*/function () {
      function TeamsPage(teamsService) {
        _classCallCheck(this, TeamsPage);

        this.teamsService = teamsService;
        this.teams = [];
      }

      _createClass(TeamsPage, [{
        key: "getTeams",
        value: function getTeams() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.teamsService.getTeams();

                  case 2:
                    this.teams = _context.sent;
                    this.teams.sort(function (a, b) {
                      return a.name.location.localeCompare(b.name.location);
                    });

                  case 4:
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
          this.getTeams();
        }
      }]);

      return TeamsPage;
    }();

    TeamsPage.ctorParameters = function () {
      return [{
        type: _teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"]
      }];
    };

    TeamsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teams',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./teams.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teams.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./teams.page.scss */
      "./src/app/teams/teams.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"]])], TeamsPage);
    /***/
  }
}]);
//# sourceMappingURL=teams-teams-module-es5.js.map