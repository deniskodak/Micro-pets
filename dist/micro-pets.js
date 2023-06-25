(()=>{var e,r,t,n,o,a,i={352:(e,r,t)=>{Promise.all([t.e(236),t.e(416),t.e(297)]).then(t.bind(t,999))},558:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof HoverBoardApp)return e();t.l("https://deniskodak.github.io/hover-board/remoteEntry.js",(t=>{if("undefined"!=typeof HoverBoardApp)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"HoverBoardApp")})).then((()=>HoverBoardApp))},451:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof TicTacToeApp)return e();t.l("https://deniskodak.github.io/tictaktoe/remoteEntry.js",(t=>{if("undefined"!=typeof TicTacToeApp)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"TicTacToeApp")})).then((()=>TicTacToeApp))}},s={};function u(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={exports:{}};return i[e](t,t.exports,u),t.exports}u.m=i,u.c=s,u.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return u.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);u.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,u.d(o,a),o},u.d=(e,r)=>{for(var t in r)u.o(r,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((r,t)=>(u.f[t](e,r),r)),[])),u.u=e=>e+".micro-pets.js",u.miniCssF=e=>"style.46db94e120de7949da1b.css",u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="micro-pets:",u.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,s;if(void 0!==o)for(var f=document.getElementsByTagName("script"),p=0;p<f.length;p++){var l=f[p];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+o){i=l;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var d=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={26:[26],820:[820]},a={26:["default","./TicTacToe",451],820:["default","./HoverBoard",558]},u.f.remotes=(e,r)=>{u.o(o,e)&&o[e].forEach((e=>{var t=u.R;t||(t=[]);var n=a[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),u.m[e]=()=>{throw r},n.p=0},i=(e,t,a,i,s,u)=>{try{var f=e(t,a);if(!f||!f.then)return s(f,i,u);var p=f.then((e=>s(e,i)),o);if(!u)return p;r.push(n.p=p)}catch(e){o(e)}},s=(e,r,o)=>i(r.get,n[1],t,0,f,o),f=r=>{n.p=1,u.m[e]=e=>{e.exports=r()}};i(u,n[2],0,0,((e,r,t)=>e?i(u.I,n[0],0,e,s,t):o()),1)}}))},(()=>{u.S={};var e={},r={};u.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];u.o(u.S,t)||(u.S[t]={});var a=u.S[t],i="micro-pets",s=(e,r,t,n)=>{var o=a[e]=a[e]||{},s=o[r];(!s||!s.loaded&&(!n!=!s.eager?n:i>s.from))&&(o[r]={get:t,from:i,eager:!!n})},f=e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!=typeof console&&console.warn&&console.warn(r));var r};try{var o=u(e);if(!o)return;var a=e=>e&&e.init&&e.init(u.S[t],n);if(o.then)return p.push(o.then(a,r));var i=a(o);if(i&&i.then)return p.push(i.catch(r))}catch(e){r(e)}},p=[];return"default"===t&&(s("react-dom","18.2.0",(()=>Promise.all([u.e(935),u.e(416)]).then((()=>()=>u(935))))),s("react","18.2.0",(()=>u.e(294).then((()=>()=>u(294))))),f(451),f(558)),p.length?e[t]=Promise.all(p).then((()=>e[t]=1)):e[t]=1}}})(),u.p="https://deniskodak.github.io/Micro-pets/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=e=>{var t=e[0],n="";if(1===e.length)return"*";if(t+.5){n+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(s=e[a]))[0]?"-":(o>0?".":"")+(o=2,s);return n}var i=[];for(a=1;a<e.length;a++){var s=e[a];i.push(0===s?"not("+u()+")":1===s?"("+u()+" || "+u()+")":2===s?i.pop()+" "+i.pop():r(s))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(r,n)=>{if(0 in r){n=e(n);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,s=1,u=!0;;s++,i++){var f,p,l=s<r.length?(typeof r[s])[0]:"";if(i>=n.length||"o"==(p=(typeof(f=n[i]))[0]))return!u||("u"==l?s>o&&!a:""==l!=a);if("u"==p){if(!u||"u"!=l)return!1}else if(u)if(l==p)if(s<=o){if(f!=r[s])return!1}else{if(a?f>r[s]:f<r[s])return!1;f!=r[s]&&(u=!1)}else if("s"!=l&&"n"!=l){if(a||s<=o)return!1;u=!1,s--}else{if(s<=o||p<l!=a)return!1;u=!1}else"s"!=l&&"n"!=l&&(u=!1,s--)}}var d=[],c=d.pop.bind(d);for(i=1;i<r.length;i++){var h=r[i];d.push(1==h?c()|c():2==h?c()&c():h?t(h,n):!c())}return!!c()},n=(r,t)=>{var n=r[t];return Object.keys(n).reduce(((r,t)=>!r||!n[r].loaded&&((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],s=(typeof i)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}})(r,t)?t:r),0)},o=(e,o,s,u)=>{var f=n(e,s);return t(u,f)||a(((e,t,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[t][n].from)+" of shared singleton module "+t+" (required "+r(o)+")")(e,s,f,u)),i(e[s][f])},a=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},i=e=>(e.loaded=1,e.get()),s=(e=>function(r,t,n,o){var a=u.I(r);return a&&a.then?a.then(e.bind(e,r,u.S[r],t,n,o)):e(r,u.S[r],t,n,o)})(((e,r,t,n,a)=>r&&u.o(r,t)?o(r,0,t,n):a())),f={},p={416:()=>s("default","react",[1,18,2,0],(()=>u.e(294).then((()=>()=>u(294))))),51:()=>s("default","react-dom",[1,18,2,0],(()=>u.e(935).then((()=>()=>u(935)))))},l={297:[51],416:[416]};u.f.consumes=(e,r)=>{u.o(l,e)&&l[e].forEach((e=>{if(u.o(f,e))return r.push(f[e]);var t=r=>{f[e]=0,u.m[e]=t=>{delete u.c[e],t.exports=r()}},n=r=>{delete f[e],u.m[e]=t=>{throw delete u.c[e],r}};try{var o=p[e]();o.then?r.push(f[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))}})(),(()=>{if("undefined"!=typeof document){var e={179:0};u.f.miniCss=(r,t)=>{e[r]?t.push(e[r]):0!==e[r]&&{297:1}[r]&&t.push(e[r]=(e=>new Promise(((r,t)=>{var n=u.miniCssF(e),o=u.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===r))return i}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var i;if((o=(i=a[n]).getAttribute("data-href"))===e||o===r)return i}})(n,o))return r();((e,r,t,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=t=>{if(a.onerror=a.onload=null,"load"===t.type)n();else{var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode&&a.parentNode.removeChild(a),o(u)}},a.href=r,document.head.appendChild(a)})(e,o,0,r,t)})))(r).then((()=>{e[r]=0}),(t=>{throw delete e[r],t})))}}})(),(()=>{var e={179:0};u.f.j=(r,t)=>{var n=u.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(26|416|820)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=u.p+u.u(r),i=new Error;u.l(a,(t=>{if(u.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,s]=t,f=0;if(a.some((r=>0!==e[r]))){for(n in i)u.o(i,n)&&(u.m[n]=i[n]);s&&s(u)}for(r&&r(t);f<a.length;f++)o=a[f],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunkmicro_pets=self.webpackChunkmicro_pets||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),u.nc=void 0,u(352)})();