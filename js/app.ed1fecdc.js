(function(e){function t(t){for(var r,u,a=t[0],i=t[1],l=t[2],s=0,p=[];s<a.length;s++)u=a[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function u(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ed14ea62"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=u(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-simple-package/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2bee":function(e,t,n){"use strict";n("9989")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},c=Object(r["e"])("Home"),u=Object(r["e"])("About");function a(e,t,n,a,i,l){var s=Object(r["s"])("simple"),f=Object(r["s"])("v-base"),p=Object(r["s"])("router-link"),b=Object(r["s"])("router-view");return Object(r["o"])(),Object(r["c"])("div",null,[Object(r["f"])(s,{title:"001"}),Object(r["f"])(f,{title:"002"}),Object(r["d"])("div",o,[Object(r["f"])(p,{to:"/"},{default:Object(r["w"])((function(){return[c]})),_:1}),Object(r["f"])(p,{to:"/about"},{default:Object(r["w"])((function(){return[u]})),_:1})]),Object(r["f"])(b)])}var i=n("bc47"),l=n("980f"),s=Object(r["g"])({components:{Simple:i["a"],VBase:l["a"]}}),f=(n("2bee"),n("6b0d")),p=n.n(f);const b=p()(s,[["render",a]]);var d=b,v=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),m=n("cf05"),j=n.n(m),O={class:"home"},h=Object(r["d"])("img",{alt:"Vue logo",src:j.a},null,-1),g=[h];function y(e,t,n,o,c,u){return Object(r["o"])(),Object(r["c"])("div",O,g)}var w={name:"Home",components:{}};const P=p()(w,[["render",y]]);var k=P,_=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],x=Object(v["a"])({history:Object(v["b"])("/vue-simple-package/"),routes:_}),S=x;Object(r["b"])(d).use(S).mount("#app")},9989:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ed1fecdc.js.map