function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-team-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/team/team.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teams/team/team.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTeamsTeamTeamPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"green-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Team Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"center-box\" style=\"text-align: center\">\n      <ion-col><h3>{{ team?.fullName }}</h3></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n          <ion-img [src]=\"team?.lgLogoUrl\" class=\"logo-lg\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-item-divider></ion-item-divider>\n    <ion-row>\n      <ion-header class=\"section-header\">Team Details</ion-header>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Founded:</span> {{ team?.entryYear }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">First Season:</span> {{ team?.firstSeason }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Conference:</span> {{ team?.conference }}</ion-col>\n    </ion-row>\n    <ion-item-divider></ion-item-divider>\n    <ion-row>\n      <ion-header class=\"section-header\">Season Record</ion-header>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Wins:</span> {{ team?.season?.wins }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Losses:</span> {{ team?.season?.losses }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Ties:</span> {{ team?.season?.ties }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Goal Differential:</span> {{ team?.season?.goalDiff }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Points:</span> {{ team?.season?.points }}</ion-col>\n    </ion-row>\n    <ion-item-divider></ion-item-divider>\n    <ion-row>\n      <ion-header class=\"section-header\">Ownership/Management</ion-header>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Owner:</span> {{ team?.owner?.firstName }} {{ team?.owner?.lastName }}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"indented\"><span class=\"grey-text\">Coach:</span> {{ team?.coach }}</ion-col>\n    </ion-row>\n    <ion-item-divider></ion-item-divider>\n  </ion-grid>\n  <ion-row>\n    <ion-header class=\"section-header\">Player Roster</ion-header>\n  </ion-row>\n  <ion-grid *ngFor=\"let p of players; let i = index\">\n    <ion-row>\n      <ion-col style=\"margin-left: 10px;\">{{ p.fullName }} <span class=\"grey-text\">({{ p.position }})</span></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/teams/team/team-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/teams/team/team-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: TeamPageRoutingModule */

  /***/
  function srcAppTeamsTeamTeamRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamPageRoutingModule", function () {
      return TeamPageRoutingModule;
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


    var _team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./team.page */
    "./src/app/teams/team/team.page.ts");

    var routes = [{
      path: '',
      component: _team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"]
    }];

    var TeamPageRoutingModule = function TeamPageRoutingModule() {
      _classCallCheck(this, TeamPageRoutingModule);
    };

    TeamPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TeamPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/teams/team/team.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/teams/team/team.module.ts ***!
    \*******************************************/

  /*! exports provided: TeamPageModule */

  /***/
  function srcAppTeamsTeamTeamModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamPageModule", function () {
      return TeamPageModule;
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


    var _team_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./team-routing.module */
    "./src/app/teams/team/team-routing.module.ts");
    /* harmony import */


    var _team_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./team.page */
    "./src/app/teams/team/team.page.ts");

    var TeamPageModule = function TeamPageModule() {
      _classCallCheck(this, TeamPageModule);
    };

    TeamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _team_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamPageRoutingModule"]],
      declarations: [_team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"]]
    })], TeamPageModule);
    /***/
  },

  /***/
  "./src/app/teams/team/team.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/teams/team/team.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTeamsTeamTeamPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grey-text {\n  color: #777;\n}\n\n.section-header {\n  padding: 2px;\n  margin-bottom: 10px;\n  color: #555;\n  text-align: center;\n  background-color: #f4f4f4;\n}\n\nion-item-divider {\n  border: none;\n}\n\n.indented {\n  margin-left: 12px;\n}\n\n.logo-img-center {\n  height: 40px;\n  width: 34px;\n  padding: 4px 0 4px 0;\n  text-align: center;\n  margin-left: 20px;\n}\n\n.logo-lg {\n  position: relative;\n  width: 200px;\n  height: auto;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 50%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJyZW5raW5nL0RvY3VtZW50cy9FVlBTTC1MaXZlL0VWUFNMLWlvbmljLWFwcC9zcmMvYXBwL3RlYW1zL3RlYW0vdGVhbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RlYW1zL3RlYW0vdGVhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90ZWFtcy90ZWFtL3RlYW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZXktdGV4dCB7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4uc2VjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjNTU1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG59XG5cbmlvbi1pdGVtLWRpdmlkZXIge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pbmRlbnRlZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4ubG9nby1pbWctY2VudGVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMzRweDtcbiAgcGFkZGluZzogNHB4IDAgNHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5sb2dvLWxnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjowIGF1dG87XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtcbn1cbiIsIi5ncmV5LXRleHQge1xuICBjb2xvcjogIzc3Nztcbn1cblxuLnNlY3Rpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzU1NTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xufVxuXG5pb24taXRlbS1kaXZpZGVyIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaW5kZW50ZWQge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLmxvZ28taW1nLWNlbnRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDM0cHg7XG4gIHBhZGRpbmc6IDRweCAwIDRweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubG9nby1sZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/teams/team/team.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/teams/team/team.page.ts ***!
    \*****************************************/

  /*! exports provided: TeamPage */

  /***/
  function srcAppTeamsTeamTeamPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamPage", function () {
      return TeamPage;
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
    /*! ../teams.service */
    "./src/app/teams/teams.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TeamPage = /*#__PURE__*/function () {
      function TeamPage(activatedRoute, teamsService) {
        _classCallCheck(this, TeamPage);

        this.activatedRoute = activatedRoute;
        this.teamsService = teamsService;
        this.players = [];
      }

      _createClass(TeamPage, [{
        key: "getTeamByLocation",
        value: function getTeamByLocation(location) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var team;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.teamsService.getTeamByLocation(location);

                  case 2:
                    team = _context.sent;
                    return _context.abrupt("return", team);

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
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.activatedRoute.paramMap.subscribe(function (paramMap) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                        var location;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (paramMap.has('location')) {
                                  _context2.next = 2;
                                  break;
                                }

                                return _context2.abrupt("return");

                              case 2:
                                location = paramMap.get('location');
                                _context2.next = 5;
                                return this.getTeamByLocation(location.charAt(0).toUpperCase() + location.slice(1));

                              case 5:
                                this.team = _context2.sent;
                                _context2.next = 8;
                                return this.team.roster;

                              case 8:
                                this.players = _context2.sent;

                              case 9:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return TeamPage;
    }();

    TeamPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"]
      }];
    };

    TeamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-team',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./team.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/team/team.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./team.page.scss */
      "./src/app/teams/team/team.page.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../teams.page.scss */
      "./src/app/teams/teams.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"]])], TeamPage);
    /***/
  }
}]);
//# sourceMappingURL=team-team-module-es5.js.map