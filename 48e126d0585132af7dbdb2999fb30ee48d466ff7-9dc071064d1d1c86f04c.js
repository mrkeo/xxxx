(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"A2+M":function(e,r,t){var n=t("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,r){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,r,t){var n=t("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,r,t){var n=t("Ijbi"),a=t("EbDI"),o=t("ZhPi"),f=t("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||f()}},SksO:function(e,r){function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},t(r,n)}e.exports=t},WkPL:function(e,r){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}},X8hv:function(e,r,t){var n=t("sXyB"),a=t("RIqP"),o=t("lSNA"),f=t("8OQS");function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var u=t("q1tI"),l=t("7ljp").mdx,d=t("BfwJ").useMDXScope;e.exports=function(e){var r=e.scope,t=e.children,o=f(e,["scope","children"]),i=d(r),s=u.useMemo((function(){if(!t)return null;var e=c({React:u,mdx:l},i),r=Object.keys(e),o=r.map((function(r){return e[r]}));return n(Function,["_fn"].concat(a(r),[""+t])).apply(void 0,[{}].concat(a(o)))}),[t,r]);return u.createElement(s,c({},o))}},ZhPi:function(e,r,t){var n=t("WkPL");e.exports=function(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}},b48C:function(e,r){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},sXyB:function(e,r,t){var n=t("SksO"),a=t("b48C");function o(r,t,f){return a()?e.exports=o=Reflect.construct:e.exports=o=function(e,r,t){var a=[null];a.push.apply(a,r);var o=new(Function.bind.apply(e,a));return t&&n(o,t.prototype),o},o.apply(null,arguments)}e.exports=o},zfrj:function(e,r,t){"use strict";t("q1tI");var n=t("2A+t"),a=t("9eSz"),o=t.n(a),f=t("PcS7"),i=(t("E9XD"),t("wx14"),t("JX7q")),c=t("dI71"),u=t("foSv"),l=t("s4An");function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e,r,t){return(s=d()?Reflect.construct:function(e,r,t){var n=[null];n.push.apply(n,r);var a=new(Function.bind.apply(e,n));return t&&Object(l.a)(a,t.prototype),a}).apply(null,arguments)}function p(e){var r="function"==typeof Map?new Map:void 0;return(p=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return s(e,arguments,Object(u.a)(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Object(l.a)(n,e)})(e)}var b=function(e){function r(r){var t;return t=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+r+" for more information.")||this,Object(i.a)(t)}return Object(c.a)(r,e),r}(p(Error));function g(e){return Math.round(255*e)}function h(e,r,t){return g(e)+","+g(r)+","+g(t)}function y(e,r,t,n){if(void 0===n&&(n=h),0===r)return n(t,t,t);var a=(e%360+360)%360/60,o=(1-Math.abs(2*t-1))*r,f=o*(1-Math.abs(a%2-1)),i=0,c=0,u=0;a>=0&&a<1?(i=o,c=f):a>=1&&a<2?(i=f,c=o):a>=2&&a<3?(c=o,u=f):a>=3&&a<4?(c=f,u=o):a>=4&&a<5?(i=f,u=o):a>=5&&a<6&&(i=o,u=f);var l=t-o/2;return n(i+l,c+l,u+l)}var m={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var v=/^#[a-fA-F0-9]{6}$/,w=/^#[a-fA-F0-9]{8}$/,x=/^#[a-fA-F0-9]{3}$/,k=/^#[a-fA-F0-9]{4}$/,I=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,O=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,j=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,S=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function P(e){if("string"!=typeof e)throw new b(3);var r=function(e){if("string"!=typeof e)return e;var r=e.toLowerCase();return m[r]?"#"+m[r]:e}(e);if(r.match(v))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(w)){var t=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:t}}if(r.match(x))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(k)){var n=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:n}}var a=I.exec(r);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var o=O.exec(r);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])};var f=j.exec(r);if(f){var i="rgb("+y(parseInt(""+f[1],10),parseInt(""+f[2],10)/100,parseInt(""+f[3],10)/100)+")",c=I.exec(i);if(!c)throw new b(4,r,i);return{red:parseInt(""+c[1],10),green:parseInt(""+c[2],10),blue:parseInt(""+c[3],10)}}var u=S.exec(r);if(u){var l="rgb("+y(parseInt(""+u[1],10),parseInt(""+u[2],10)/100,parseInt(""+u[3],10)/100)+")",d=I.exec(l);if(!d)throw new b(4,r,l);return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10),alpha:parseFloat(""+u[4])}}throw new b(5)}var A=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function q(e){var r=e.toString(16);return 1===r.length?"0"+r:r}function R(e,r,t){if("number"==typeof e&&"number"==typeof r&&"number"==typeof t)return A("#"+q(e)+q(r)+q(t));if("object"==typeof e&&void 0===r&&void 0===t)return A("#"+q(e.red)+q(e.green)+q(e.blue));throw new b(6)}function F(e,r,t,n){if("string"==typeof e&&"number"==typeof r){var a=P(e);return"rgba("+a.red+","+a.green+","+a.blue+","+r+")"}if("number"==typeof e&&"number"==typeof r&&"number"==typeof t&&"number"==typeof n)return n>=1?R(e,r,t):"rgba("+e+","+r+","+t+","+n+")";if("object"==typeof e&&void 0===r&&void 0===t&&void 0===n)return e.alpha>=1?R(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new b(7)}t("qKvR");var D=function(e){var r=e.children,t=e.color,a=void 0===t?"":t,o=e.slim,i=Object(f.b)()[0],c=Object(n.e)().theme,u="light"===i?c.colors.background:c.colors.modes.dark.background,l=F(u,.4);return Object(n.c)("div",{sx:{width:"100%",height:o?["400px","500px"]:["500px","600px","700px","40vw"],maxHeight:"1200px",zIndex:1,".gatsby-image-wrapper":{position:"static !important",filter:"grayscale(100%)","> div":{paddingBottom:"0 !important",height:o?["400px !important","500px !important"]:["500px !important","600px !important","700px !important","40vw !important"],maxHeight:"1200px"}},"&:before":{content:'""',height:"100%",left:0,top:0,position:"absolute",width:"100%",mixBlendMode:"light"===i?"overlay":"soft-light",zIndex:2,background:a?"linear-gradient(to top, rgba(0, 0, 0, 0) 0%, "+F(a,1)+" 100%)":null},"&:after":{backfaceVisibility:"hidden",content:'""',height:"100%",left:0,top:0,position:"absolute",width:"100%",background:"linear-gradient(to bottom, "+l+" 0%, "+u+" 100%),\n      linear-gradient(135deg, "+l+" 40%, "+u+" 100%), linear-gradient(-135deg, "+l+" 40%, "+u+" 100%)"}}},r)};r.a=function(e){var r=e.children,t=e.color,a=void 0===t?"":t,f=e.image,i=e.slim,c=void 0!==i&&i;return Object(n.c)("section",{sx:{position:"relative",height:c?["400px","500px"]:["500px","600px","700px","40vw"],maxHeight:"1200px",width:"100%",overflow:"hidden"}},Object(n.c)(D,{color:a,slim:c},Object(n.c)(o.a,{fluid:f})),r)}}}]);
//# sourceMappingURL=48e126d0585132af7dbdb2999fb30ee48d466ff7-9dc071064d1d1c86f04c.js.map