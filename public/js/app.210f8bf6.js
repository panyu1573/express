(function(t){function e(e){for(var r,i,u=e[0],c=e[1],s=e[2],l=0,p=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a9a57846"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(t);var s=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("766a"),o=n.n(r);o.a},"3aff":function(t,e,n){},"4dcb":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("9743"),n("b8aa"),n("5493"),n("fa55");var r=n("0261"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("034f"),n("5511")),u={},c=Object(i["a"])(u,o,a,!1,null,null,null),s=c.exports,l=(n("c41e"),n("c478")),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home df fdc",staticStyle:{position:"fixed",width:"100%",height:"100%"}},[n("div",{staticClass:"bf1 df fdc ac jc"},[n("div",{staticStyle:{font:"120px 'Italiana', sans-serif"}},[t._v("自由水")]),n("div",{staticStyle:{"font-size":"16px"}},[t._v("网站开发中，敬请期待...")])]),n("a",{staticStyle:{"margin-bottom":"20px"},attrs:{href:"http://beian.miit.gov.cn/",target:"_blank"}},[t._v("沪ICP备18023074号")])])}],d={name:"home",components:{}},v=d,h=Object(i["a"])(v,f,p,!1,null,null,null),m=h.exports;r["a"].use(l["a"]);var b=[{path:"/",name:"home",component:m},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],y=new l["a"]({routes:b}),g=y,w=n("08c1");r["a"].use(w["a"]);var _=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("3aff"),n("4dcb");r["a"].config.productionTip=!1,new r["a"]({router:g,store:_,render:function(t){return t(s)}}).$mount("#app")},"766a":function(t,e,n){}});
//# sourceMappingURL=app.210f8bf6.js.map