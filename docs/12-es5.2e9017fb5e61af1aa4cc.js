var __extends=this&&this.__extends||function(){var t=function(n,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(n,o)};return function(n,o){function e(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}(),__values=this&&this.__values||function(t){var n="function"==typeof Symbol&&t[Symbol.iterator],o=0;return n?n.call(t):{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Fwaw:function(t,n,o){"use strict";o.d(n,"c",(function(){return b})),o.d(n,"b",(function(){return r})),o.d(n,"a",(function(){return u}));var e=o("Xd0L"),l="accent",a=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],i=function(t){this._elementRef=t},r=function(t){function n(n,o,e){var i,r,u=this;(u=t.call(this,n)||this)._focusMonitor=o,u._animationMode=e,u.isRoundButton=u._hasHostAttributes("mat-fab","mat-mini-fab"),u.isIconButton=u._hasHostAttributes("mat-icon-button");try{for(var b=__values(a),s=b.next();!s.done;s=b.next()){var c=s.value;u._hasHostAttributes(c)&&u._getHostElement().classList.add(c)}}catch(m){i={error:m}}finally{try{s&&!s.done&&(r=b.return)&&r.call(b)}finally{if(i)throw i.error}}return n.nativeElement.classList.add("mat-button-base"),u._focusMonitor.monitor(u._elementRef,!0),u.isRoundButton&&(u.color=l),u}return __extends(n,t),n.prototype.ngOnDestroy=function(){this._focusMonitor.stopMonitoring(this._elementRef)},n.prototype.focus=function(t,n){void 0===t&&(t="program"),this._focusMonitor.focusVia(this._getHostElement(),t,n)},n.prototype._getHostElement=function(){return this._elementRef.nativeElement},n.prototype._isRippleDisabled=function(){return this.disableRipple||this.disabled},n.prototype._hasHostAttributes=function(){for(var t=this,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return n.some((function(n){return t._getHostElement().hasAttribute(n)}))},n}(Object(e.A)(Object(e.C)(Object(e.B)(i)))),u=function(t){function n(n,o,e){return t.call(this,o,n,e)||this}return __extends(n,t),n.prototype._haltDisabledEvents=function(t){this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},n}(r),b=function(){}},bujt:function(t,n,o){"use strict";o.d(n,"a",(function(){return r})),o.d(n,"b",(function(){return u}));var e=o("8Y7J"),l=(o("Fwaw"),o("SVse"),o("IP0z"),o("Xd0L")),a=(o("cUpR"),o("/HVE")),i=o("omvX"),r=(o("5GAg"),e.ub({encapsulation:2,styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],data:{}}));function u(t){return e.Sb(2,[e.Ob(671088640,1,{ripple:0}),(t()(),e.wb(1,0,null,null,1,"span",[["class","mat-button-wrapper"]],null,null,null,null,null)),e.Hb(null,0),(t()(),e.wb(3,0,null,null,1,"div",[["class","mat-button-ripple mat-ripple"],["matRipple",""]],[[2,"mat-button-ripple-round",null],[2,"mat-ripple-unbounded",null]],null,null,null,null)),e.vb(4,212992,[[1,4]],0,l.t,[e.m,e.C,a.a,[2,l.k],[2,i.a]],{centered:[0,"centered"],disabled:[1,"disabled"],trigger:[2,"trigger"]},null),(t()(),e.wb(5,0,null,null,0,"div",[["class","mat-button-focus-overlay"]],null,null,null,null,null))],(function(t,n){var o=n.component;t(n,4,0,o.isIconButton,o._isRippleDisabled(),o._getHostElement())}),(function(t,n){var o=n.component;t(n,3,0,o.isRoundButton||o.isIconButton,e.Ib(n,4).unbounded)}))}},qz43:function(t,n,o){"use strict";o.r(n);var e=o("8Y7J"),l=function(){},a=o("pMnS"),i=o("tp9R"),r=o("c6or"),u=o("iInd"),b=o("SVse"),s=o("bujt"),c=o("Fwaw"),m=o("5GAg"),d=o("omvX"),p=o("U2p0"),f=function(){function t(t){this._movie=t,this.loader=!0}return t.prototype.ngOnInit=function(){this.MovieGenre()},t.prototype.MovieGenre=function(){var t=this;this._movie.getGenres().pipe(Object(p.delay)(2e3)).subscribe((function(n){t.genreslist=n.genres,t.loader=!1}))},t}(),h=o("Di5K"),g=e.ub({encapsulation:0,styles:[[".genre-card[_ngcontent-%COMP%]{display:inline-block;margin:14px 10px;padding:12px 0;vertical-align:top;color:#fff!important;font-size:2rem}.mt_[_ngcontent-%COMP%]{margin:10rem 5rem}@media (min-width:1200px){.genre-card[_ngcontent-%COMP%]{width:20%}}.blue-theme[_ngcontent-%COMP%]{background-color:#dc4666;border-radius:1px}"]],data:{}});function v(t){return e.Sb(0,[(t()(),e.wb(0,0,null,null,1,"app-skeleton",[],null,null,null,i.b,i.a)),e.vb(1,114688,null,0,r.a,[],null,null)],(function(t,n){t(n,1,0)}),null)}function y(t){return e.Sb(0,[(t()(),e.wb(0,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(t,n,o){var l=!0;return"click"===n&&(l=!1!==e.Ib(t,1).onClick(o.button,o.ctrlKey,o.metaKey,o.shiftKey)&&l),l}),null,null)),e.vb(1,671744,null,0,u.p,[u.m,u.a,b.i],{routerLink:[0,"routerLink"]},null),(t()(),e.wb(2,0,null,null,2,"button",[["aria-label","Genres"],["class","genre-card blue-theme"],["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,s.b,s.a)),e.vb(3,180224,null,0,c.b,[e.m,m.f,[2,d.a]],{color:[0,"color"]},null),(t()(),e.Qb(4,0,[" "," "]))],(function(t,n){t(n,1,0,e.Ab(2,"/genres/",n.context.$implicit.id,"/",n.context.$implicit.name,"")),t(n,3,0,"primary")}),(function(t,n){t(n,0,0,e.Ib(n,1).target,e.Ib(n,1).href),t(n,2,0,e.Ib(n,3).disabled||null,"NoopAnimations"===e.Ib(n,3)._animationMode),t(n,4,0,n.context.$implicit.name)}))}function w(t){return e.Sb(0,[(t()(),e.wb(0,0,null,null,4,"div",[["class","col-md-12 text-center"]],null,null,null,null,null)),(t()(),e.wb(1,0,null,null,1,"h2",[["class","mb-5 mt-5"]],null,null,null,null,null)),(t()(),e.Qb(-1,null,["Movies Genres"])),(t()(),e.lb(16777216,null,null,1,null,y)),e.vb(4,278528,null,0,b.k,[e.S,e.P,e.u],{ngForOf:[0,"ngForOf"]},null)],(function(t,n){t(n,4,0,n.component.genreslist)}),null)}function k(t){return e.Sb(0,[(t()(),e.wb(0,0,null,null,1,"app-skeleton",[],null,null,null,i.b,i.a)),e.vb(1,114688,null,0,r.a,[],null,null)],(function(t,n){t(n,1,0)}),null)}function x(t){return e.Sb(0,[(t()(),e.wb(0,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(t,n,o){var l=!0;return"click"===n&&(l=!1!==e.Ib(t,1).onClick(o.button,o.ctrlKey,o.metaKey,o.shiftKey)&&l),l}),null,null)),e.vb(1,671744,null,0,u.p,[u.m,u.a,b.i],{routerLink:[0,"routerLink"]},null),(t()(),e.wb(2,0,null,null,2,"button",[["aria-label","Genres"],["class","genre-card blue-theme"],["color","primary"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,s.b,s.a)),e.vb(3,180224,null,0,c.b,[e.m,m.f,[2,d.a]],{color:[0,"color"]},null),(t()(),e.Qb(4,0,[" "," "]))],(function(t,n){t(n,1,0,e.Ab(2,"/genres-tv/",n.context.$implicit.id,"/",n.context.$implicit.name,"")),t(n,3,0,"primary")}),(function(t,n){t(n,0,0,e.Ib(n,1).target,e.Ib(n,1).href),t(n,2,0,e.Ib(n,3).disabled||null,"NoopAnimations"===e.Ib(n,3)._animationMode),t(n,4,0,n.context.$implicit.name)}))}function _(t){return e.Sb(0,[(t()(),e.wb(0,0,null,null,4,"div",[["class","col-md-12 text-center"]],null,null,null,null,null)),(t()(),e.wb(1,0,null,null,1,"h2",[["class","mt-5 mb-5"]],null,null,null,null,null)),(t()(),e.Qb(-1,null,["TV GENRES"])),(t()(),e.lb(16777216,null,null,1,null,x)),e.vb(4,278528,null,0,b.k,[e.S,e.P,e.u],{ngForOf:[0,"ngForOf"]},null)],(function(t,n){t(n,4,0,n.component.genreslist)}),null)}function z(t){return e.Sb(0,[(t()(),e.wb(0,0,null,null,5,"div",[["class","container-fluid mt-20 mb-20"]],null,null,null,null,null)),(t()(),e.lb(16777216,null,null,1,null,v)),e.vb(2,16384,null,0,b.l,[e.S,e.P],{ngIf:[0,"ngIf"]},null),(t()(),e.wb(3,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(t()(),e.lb(16777216,null,null,1,null,w)),e.vb(5,16384,null,0,b.l,[e.S,e.P],{ngIf:[0,"ngIf"]},null),(t()(),e.wb(6,0,null,null,5,"div",[["class","container-fluid mt-20 mb-20"]],null,null,null,null,null)),(t()(),e.lb(16777216,null,null,1,null,k)),e.vb(8,16384,null,0,b.l,[e.S,e.P],{ngIf:[0,"ngIf"]},null),(t()(),e.wb(9,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(t()(),e.lb(16777216,null,null,1,null,_)),e.vb(11,16384,null,0,b.l,[e.S,e.P],{ngIf:[0,"ngIf"]},null)],(function(t,n){var o=n.component;t(n,2,0,o.loader),t(n,5,0,!o.loader),t(n,8,0,o.loader),t(n,11,0,!o.loader)}),null)}var I=e.sb("app-genre-list",f,(function(t){return e.Sb(0,[(t()(),e.wb(0,0,null,null,1,"app-genre-list",[],null,null,null,z,g)),e.vb(1,114688,null,0,f,[h.a],null,null)],(function(t,n){t(n,1,0)}),null)}),{},{},[]),G=function(){},S=o("IP0z"),O=o("Xd0L"),M=o("cUpR"),A=o("/HVE"),P=o("WzhS"),R=o("iEmA");o.d(n,"GenreListModuleNgFactory",(function(){return E}));var E=e.tb(l,[],(function(t){return e.Fb([e.Gb(512,e.k,e.eb,[[8,[a.a,I]],[3,e.k],e.A]),e.Gb(4608,b.n,b.m,[e.w,[2,b.E]]),e.Gb(1073742336,b.c,b.c,[]),e.Gb(1073742336,u.q,u.q,[[2,u.v],[2,u.m]]),e.Gb(1073742336,G,G,[]),e.Gb(1073742336,S.a,S.a,[]),e.Gb(1073742336,O.l,O.l,[[2,O.d],[2,M.f]]),e.Gb(1073742336,A.b,A.b,[]),e.Gb(1073742336,O.u,O.u,[]),e.Gb(1073742336,c.c,c.c,[]),e.Gb(1073742336,P.b,P.b,[]),e.Gb(1073742336,R.a,R.a,[]),e.Gb(1073742336,l,l,[]),e.Gb(1024,u.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);