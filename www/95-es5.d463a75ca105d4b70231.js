function _defineProperties(n,l){for(var u=0;u<l.length;u++){var t=l[u];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,u){return l&&_defineProperties(n.prototype,l),u&&_defineProperties(n,u),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{rc49:function(n,l,u){"use strict";u.r(l);var t=u("8Y7J"),e=function n(){_classCallCheck(this,n)},o=u("pMnS"),i=u("vNEW"),r=u("MKJQ"),a=u("sZkV"),c=u("iInd"),b=u("SVse"),s=u("mrSG"),m=u("6LKi"),p=function(){function n(l){_classCallCheck(this,n),this.teamsService=l,this.teams=[]}return _createClass(n,[{key:"getTeams",value:function(){return s.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.teamsService.getTeams();case 2:this.teams=n.sent,this.teams.sort((function(n,l){return n.name.location.localeCompare(l.name.location)}));case 4:case"end":return n.stop()}}),n,this)})))}},{key:"ngOnInit",value:function(){this.getTeams()}}]),n}(),f=t.nb({encapsulation:0,styles:[i.a],data:{}});function k(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,12,"ion-row",[["class","center-box"]],null,null,null,r.U,r.u)),t.ob(1,49152,null,0,a.db,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,4,"ion-img",[["class","logo-img"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.Ab(n,4).onClick()&&e),"click"===l&&(e=!1!==t.Ab(n,6).onClick(u)&&e),e}),r.J,r.j)),t.ob(3,49152,null,0,a.A,[t.h,t.k,t.x],{src:[0,"src"]},null),t.ob(4,16384,null,0,c.n,[c.m,c.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Bb(5,2),t.ob(6,737280,null,0,a.Eb,[b.g,a.Bb,t.k,c.m,[2,c.n]],null,null),(n()(),t.pb(7,0,null,0,5,"ion-col",[["class","team-name"],["style","margin-left: 6px;"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==t.Ab(n,9).onClick()&&e),"click"===l&&(e=!1!==t.Ab(n,11).onClick(u)&&e),e}),r.E,r.e)),t.ob(8,49152,null,0,a.q,[t.h,t.k,t.x],null,null),t.ob(9,16384,null,0,c.n,[c.m,c.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Bb(10,2),t.ob(11,737280,null,0,a.Eb,[b.g,a.Bb,t.k,c.m,[2,c.n]],null,null),(n()(),t.Ib(12,0,[""," ",""]))],(function(n,l){n(l,3,0,l.context.$implicit.smLogoUrl);var u=n(l,5,0,"./",l.context.$implicit.name.location);n(l,4,0,u),n(l,6,0);var t=n(l,10,0,"./",l.context.$implicit.name.location);n(l,9,0,t),n(l,11,0)}),(function(n,l){n(l,12,0,l.context.$implicit.name.location,l.context.$implicit.name.nick)}))}function h(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,10,"ion-header",[],null,null,null,r.H,r.h)),t.ob(1,49152,null,0,a.y,[t.h,t.k,t.x],{translucent:[0,"translucent"]},null),(n()(),t.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.Z,r.z)),t.ob(3,49152,null,0,a.wb,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.C,r.c)),t.ob(5,49152,null,0,a.i,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,1,"ion-menu-button",[["class","green-menu"]],null,null,null,r.Q,r.r)),t.ob(7,49152,null,0,a.O,[t.h,t.k,t.x],null,null),(n()(),t.pb(8,0,null,0,2,"ion-title",[],null,null,null,r.Y,r.y)),t.ob(9,49152,null,0,a.ub,[t.h,t.k,t.x],null,null),(n()(),t.Ib(-1,0,["Teams"])),(n()(),t.pb(11,0,null,null,5,"ion-content",[],null,null,null,r.F,r.f)),t.ob(12,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(n()(),t.pb(13,0,null,0,3,"ion-grid",[],null,null,null,r.G,r.g)),t.ob(14,49152,null,0,a.x,[t.h,t.k,t.x],null,null),(n()(),t.eb(16777216,null,0,1,null,k)),t.ob(16,278528,null,0,b.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var u=l.component;n(l,1,0,!0),n(l,16,0,u.teams)}),null)}var g=t.lb("app-teams",p,(function(n){return t.Kb(0,[(n()(),t.pb(0,0,null,null,1,"app-teams",[],null,null,null,h,f)),t.ob(1,114688,null,0,p,[m.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),y=u("s7LF"),x=function(){return u.e(102).then(u.bind(null,"3dWU")).then((function(n){return n.TeamPageModuleNgFactory}))},d=function n(){_classCallCheck(this,n)};u.d(l,"TeamsPageModuleNgFactory",(function(){return v}));var v=t.mb(e,[],(function(n){return t.xb([t.yb(512,t.j,t.X,[[8,[o.a,g]],[3,t.j],t.v]),t.yb(4608,b.l,b.k,[t.s,[2,b.u]]),t.yb(4608,y.n,y.n,[]),t.yb(4608,a.a,a.a,[t.x,t.g]),t.yb(4608,a.Ab,a.Ab,[a.a,t.j,t.p]),t.yb(4608,a.Db,a.Db,[a.a,t.j,t.p]),t.yb(1073742336,b.b,b.b,[]),t.yb(1073742336,y.m,y.m,[]),t.yb(1073742336,y.c,y.c,[]),t.yb(1073742336,a.yb,a.yb,[]),t.yb(1073742336,c.p,c.p,[[2,c.u],[2,c.m]]),t.yb(1073742336,d,d,[]),t.yb(1073742336,e,e,[]),t.yb(1024,c.k,(function(){return[[{path:"",component:p},{path:":location",loadChildren:x}]]}),[])])}))},vNEW:function(n,l,u){"use strict";u.d(l,"a",(function(){return t}));var t=[".center-box[_ngcontent-%COMP%]{align-items:center}.logo-img[_ngcontent-%COMP%]{height:40px;padding:4px 0}.team-name[_ngcontent-%COMP%]{font-size:18px}"]}}]);