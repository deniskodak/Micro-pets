"use strict";(self.webpackChunkmicro_pets=self.webpackChunkmicro_pets||[]).push([[297],{999:(e,t,r)=>{r.r(t);var n={};r.r(n),r.d(n,{Home:()=>h,HoverBoard:()=>j,TicTacToe:()=>S});var o=r(416),a=r.n(o),l=r(745),i=r(113);const c=function(){return a().createElement("a",{href:"#",className:"x8Qf3q3sfAdvxQOOqq9J"},"Micro Pets")};var u={"light-theme":"dark-theme","dark-theme":"light-theme"};const s=function(){return a().createElement("header",{className:"k5rxhHqufc0wTH_iRBgY"},a().createElement(c,null),a().createElement(i.Z,{onChange:function(){var e,t=document.querySelector('link[href*="-theme.css"]');if(t){var r=t.getAttribute("href");if(r){var n=(null===(e=r.match(/\/([^/]+)\.css$/))||void 0===e?void 0:e[1])||"light-theme",o=r.replace(n,u[n]);t.setAttribute("href",o)}}}}))},m=JSON.parse('[{"key":"Home","url":"/Micro-pets","title":"Home page","description":"Here you can find most of my pet projects, use the list on the left to switch between them."},{"key":"TicTacToe","url":"/Micro-pets/Tic-tac-toe","title":"Tic Tac Toe","description":"A well-known logical game between two opponents on a square field 3 by 3 cells. One of the players plays with \'crosses\', the second - with \'tac-toes\'"},{"key":"HoverBoard","url":"/Micro-pets/Hover-board","title":"Hover Board","description":"The game is a time-killer. Intuitive, you need to select the difficulty of the board and press the \'Start\' button. Then just move your mouse across the board."}]');var f=(0,o.createContext)(null);var p=r(184),d=r.n(p);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}const b=function(){var e=(0,o.useContext)(f),t=e.item,r=e.setItem,n=(0,o.useCallback)((function(e){return function(){history.replaceState({},"",e.url),r(e)}}),[]),l=m.map((function(e){return a().createElement("li",{key:e.url,className:d()("jCSroL0VpUjWKsLUtnbn",(r={},o="lzj2dfExCuku1z7wB9Pf",l=t.url===e.url,(o=function(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===y(t)?t:String(t)}(o))in r?Object.defineProperty(r,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[o]=l,r)),onClick:n(e)},e.title);var r,o,l}));return a().createElement("ul",{className:"XV6Gmomv3qN35rzpXSWL"},l)},v=function(){var e,t,r=(0,o.useContext)(f).item;return a().createElement("div",{className:"XVuM8HwintIcSa8TMfsg"},(t=(e=r.title.split(" ")).pop(),a().createElement("h2",{className:"zdsTdXyo3m8oFOMW8ykW"},e.join(" ")+" ",a().createElement("span",{className:"fToFbYgI20cqJzF2gjC9"},t))),a().createElement("p",{className:"SzvpA0Q7wlnf1DaSojJP"},r.description))},h=function(){return a().createElement("div",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nihil? Voluptatum asperiores optio dolorum dicta omnis temporibus totam aut enim, quo quam, soluta culpa illo eum, aliquam ipsam? Consequatur, iure.")};var E=r(466);const w=function(){return a().createElement(E.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})};var g=a().lazy((function(){return r.e(26).then(r.t.bind(r,26,23))}));const S=function(){return a().createElement("div",{className:"ps5k9CEdGs4HwnZ7Dljv",id:"tictactoe"},a().createElement(a().Suspense,{fallback:a().createElement(w,null)},a().createElement(g,null)))};var k=a().lazy((function(){return r.e(820).then(r.t.bind(r,820,23))}));const j=function(){return a().createElement("div",{className:"bUQcmzF3a0M9XNqO7RDw",id:"hoverBoard"},a().createElement(a().Suspense,{fallback:a().createElement(w,null)},a().createElement(k,null)))};function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,l,i=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=T(m,1)[0];const q=function(){var e=T((0,o.useState)(C),2),t=e[0],r=e[1],l=n[t.key];return(0,o.useLayoutEffect)((function(){var e;e=m.find((function(e){return e.url===window.location.pathname}))||C,r(e)}),[]),a().createElement(f.Provider,{value:{item:t,setItem:r}},a().createElement("div",{className:"App"},a().createElement(s,null),a().createElement("section",{className:"main-section"},a().createElement(b,null),a().createElement("section",{className:"project-section"},a().createElement(v,null),a().createElement(l,null)))))};l.createRoot(document.getElementById("app")).render(a().createElement(a().StrictMode,null,a().createElement(q,null)))}}]);