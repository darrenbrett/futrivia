(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scores-scores-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scores/scores.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scores/scores.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button class=\"green-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Scores</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngFor=\"let s of scores; let i = index\">\n    <ion-row class=\"center-box\">\n      <ion-col size=\"2\">\n        <ion-img [src]=\"s.awayTeamLogoUrl\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col size=\"4\">\n        {{s.awayTeam}}\n      </ion-col>\n      <ion-col size=\"2\">\n        {{ s.awayTeamGoalTimes.length }}\n      </ion-col>\n      <div *ngIf=\"s.awayTeam == s?.winner\">\n        <ion-icon name=\"caret-back-outline\"></ion-icon>\n      </div>\n    </ion-row>\n    <ion-row class=\"center-box\">\n      <ion-col size=\"2\">\n        <ion-img [src]=\"s.homeTeamLogoUrl\" class=\"logo-img\"></ion-img>\n      </ion-col>\n      <ion-col size=\"4\">\n        {{s.homeTeam}}\n      </ion-col>\n      <ion-col size=\"2\">\n        {{ s.homeTeamGoalTimes.length }}\n      </ion-col>\n      <div *ngIf=\"s.homeTeam == s?.winner\">\n        <ion-icon name=\"caret-back-outline\"></ion-icon>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/scores/scores-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/scores/scores-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ScoresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresPageRoutingModule", function() { return ScoresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _scores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scores.page */ "./src/app/scores/scores.page.ts");




const routes = [
    {
        path: '',
        component: _scores_page__WEBPACK_IMPORTED_MODULE_3__["ScoresPage"]
    }
];
let ScoresPageRoutingModule = class ScoresPageRoutingModule {
};
ScoresPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ScoresPageRoutingModule);



/***/ }),

/***/ "./src/app/scores/scores.module.ts":
/*!*****************************************!*\
  !*** ./src/app/scores/scores.module.ts ***!
  \*****************************************/
/*! exports provided: ScoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresPageModule", function() { return ScoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _scores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scores-routing.module */ "./src/app/scores/scores-routing.module.ts");
/* harmony import */ var _scores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scores.page */ "./src/app/scores/scores.page.ts");







let ScoresPageModule = class ScoresPageModule {
};
ScoresPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _scores_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScoresPageRoutingModule"]
        ],
        declarations: [_scores_page__WEBPACK_IMPORTED_MODULE_6__["ScoresPage"]]
    })
], ScoresPageModule);



/***/ }),

/***/ "./src/app/scores/scores.page.scss":
/*!*****************************************!*\
  !*** ./src/app/scores/scores.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  border-bottom: 1px solid #555;\n}\n\n.logo-img {\n  height: 40px;\n  padding: 2px 0;\n}\n\n.scorer-details {\n  color: #ccc;\n  font-size: 70%;\n}\n\n.center-box {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXJyZW5raW5nL0RvY3VtZW50cy9FVlBTTC1MaXZlL0VWUFNMLWlvbmljLWFwcC9zcmMvYXBwL3Njb3Jlcy9zY29yZXMucGFnZS5zY3NzIiwic3JjL2FwcC9zY29yZXMvc2NvcmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zY29yZXMvc2NvcmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NTU7XG59XG5cbi5sb2dvLWltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMnB4IDA7XG59XG5cbi5zY29yZXItZGV0YWlscyB7XG4gIGNvbG9yOiAjY2NjO1xuICBmb250LXNpemU6IDcwJTtcbn1cblxuLmNlbnRlci1ib3gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4iLCJpb24tZ3JpZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTU1O1xufVxuXG4ubG9nby1pbWcge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDJweCAwO1xufVxuXG4uc2NvcmVyLWRldGFpbHMge1xuICBjb2xvcjogI2NjYztcbiAgZm9udC1zaXplOiA3MCU7XG59XG5cbi5jZW50ZXItYm94IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/scores/scores.page.ts":
/*!***************************************!*\
  !*** ./src/app/scores/scores.page.ts ***!
  \***************************************/
/*! exports provided: ScoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresPage", function() { return ScoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scores.service */ "./src/app/scores/scores.service.ts");
/* harmony import */ var _teams_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teams/teams.service */ "./src/app/teams/teams.service.ts");




let ScoresPage = class ScoresPage {
    constructor(scoresService, teamsService) {
        this.scoresService = scoresService;
        this.teamsService = teamsService;
        this.scores = [];
    }
    getLatestScores() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.scores = yield this.scoresService.getLatestScores();
            return this.scores;
        });
    }
    ngOnInit() {
        this.getLatestScores();
    }
};
ScoresPage.ctorParameters = () => [
    { type: _scores_service__WEBPACK_IMPORTED_MODULE_2__["ScoresService"] },
    { type: _teams_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"] }
];
ScoresPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scores',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scores.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scores/scores.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scores.page.scss */ "./src/app/scores/scores.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scores_service__WEBPACK_IMPORTED_MODULE_2__["ScoresService"], _teams_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"]])
], ScoresPage);



/***/ }),

/***/ "./src/app/scores/scores.service.ts":
/*!******************************************!*\
  !*** ./src/app/scores/scores.service.ts ***!
  \******************************************/
/*! exports provided: ScoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresService", function() { return ScoresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");



let ScoresService = class ScoresService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getLatestScores() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let scores = [];
            const req = `games/latest`;
            scores = yield this.apiService.sendRequest(req);
            console.log('scores: ', scores);
            scores.reverse();
            return scores;
        });
    }
};
ScoresService.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
ScoresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], ScoresService);



/***/ })

}]);
//# sourceMappingURL=scores-scores-module-es2015.js.map