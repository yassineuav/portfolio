_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/KGT":function(e,t,n){},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"20a2":function(e,t,n){e.exports=n("nOHt")},"4l1m":function(e,t,n){},Do4B:function(e,t,n){},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},"HP2+":function(e,t,n){},IlR1:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return me}));var r={};n.r(r),n.d(r,"addTrackers",(function(){return Q})),n.d(r,"initialize",(function(){return W})),n.d(r,"ga",(function(){return Y})),n.d(r,"set",(function(){return ee})),n.d(r,"send",(function(){return te})),n.d(r,"pageview",(function(){return ne})),n.d(r,"modalview",(function(){return re})),n.d(r,"timing",(function(){return oe})),n.d(r,"event",(function(){return ie})),n.d(r,"exception",(function(){return ae})),n.d(r,"plugin",(function(){return ce})),n.d(r,"outboundLink",(function(){return ue})),n.d(r,"testModeAPI",(function(){return le})),n.d(r,"default",(function(){return fe}));var o=n("q1tI"),i=n.n(o),a=n("20a2"),c=n.n(a),u=n("17x9"),l=n.n(u);function f(e){console.warn("[react-ga]",e)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=["to","target"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P="_blank",A=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o=O(a);function a(){var e;d(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return k(w(e=o.call.apply(o,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,i=n.to,c=n.onClick,u=n.trackerNames,l={label:o},f=r!==P,s=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);f&&s?(t.preventDefault(),a.trackLink(l,(function(){window.location.href=i}),u)):a.trackLink(l,(function(){}),u),c&&c(t)})),e}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=b(b({},y(e,p)),{},{target:n,href:t,onClick:this.handleClick});return n===P&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,i.a.createElement("a",r)}}])&&v(t.prototype,n),r&&v(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o.Component);k(A,"trackLink",(function(){f("ga tracking not enabled")})),A.propTypes={eventLabel:l.a.string.isRequired,target:l.a.string,to:l.a.string,onClick:l.a.func,trackerNames:l.a.arrayOf(l.a.string)},A.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function E(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(f("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function S(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var T=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function x(e){return S(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(T)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var D=!1;function N(e){console.info("[react-ga]",e)}var C=[],_={calls:C,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];C.push([].concat(t))},resetCalls:function(){C.length=0}},q=["category","action","label","value","nonInteraction","transport"];function I(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B="undefined"===typeof window||"undefined"===typeof document,K=!1,H=!0,M=!1,F=!0,U=!0,V=function(){var e;return M?_.ga.apply(_,arguments):!B&&(window.ga?(e=window).ga.apply(e,arguments):f("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function $(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(n=x(e)),t&&(n=E(n)),n}(e,H,U)}function X(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"===typeof o?(!F&&Array.isArray(e)||V.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){V.apply(void 0,G(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):f("ga command must be a string")}function Z(e,t){e?t&&(t.debug&&!0===t.debug&&(K=!0),!1===t.titleCase&&(H=!1),!1===t.redactEmail&&(U=!1),t.useExistingGa)||(t&&t.gaOptions?V("create",e,t.gaOptions):V("create",e,"auto")):f("gaTrackingID is required in initialize()")}function Q(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===J(e)?Z(e.trackingId,e):f("All configs must be an object")})):Z(e,t),!0}function W(e,t){if(t&&!0===t.testMode)M=!0;else{if(B)return;t&&!0===t.standardImplementation||function(e){if(!D){D=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,i,a,c,u,l=e&&e.onerror;n=window,r=document,o="script",i=t,a="ga",n.GoogleAnalyticsObject=a,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(o),u=r.getElementsByTagName(o)[0],c.async=1,c.src=i,c.onerror=l,u.parentNode.insertBefore(c,u)}}(t)}F=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Q(e,t)}function Y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(V.apply(void 0,t),K&&(N("called ga('arguments');"),N("with arguments: ".concat(JSON.stringify(t))))),window.ga}function ee(e,t){e?"object"===J(e)?(0===Object.keys(e).length&&f("empty `fieldsObject` given to .set()"),X(t,"set",e),K&&(N("called ga('set', fieldsObject);"),N("with fieldsObject: ".concat(JSON.stringify(e))))):f("Expected `fieldsObject` arg to be an Object"):f("`fieldsObject` is required in .set()")}function te(e,t){X(t,"send",e),K&&(N("called ga('send', fieldObject);"),N("with fieldObject: ".concat(JSON.stringify(e))),N("with trackers: ".concat(JSON.stringify(t))))}function ne(e,t,n){if(e){var r=S(e);if(""!==r){var o={};if(n&&(o.title=n),X(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),K){N("called ga('send', 'pageview', path);");var i="";n&&(i=" and title: ".concat(n)),N("with path: ".concat(r).concat(i))}}else f("path cannot be an empty string in .pageview()")}else f("path is required in .pageview()")}function re(e,t){if(e){var n,r="/"===(n=S(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);X(t,"send","pageview",o),K&&(N("called ga('send', 'pageview', path);"),N("with path: ".concat(o)))}else f("modalName cannot be an empty string or a single / in .modalview()")}else f("modalName is required in .modalview(modalName)")}function oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var a={hitType:"timing",timingCategory:$(t),timingVar:$(n),timingValue:r};o&&(a.timingLabel=$(o)),te(a,i)}else f("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,a=e.transport,c=I(e,q),u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:$(t),eventAction:$(n)};r&&(l.eventLabel=$(r)),"undefined"!==typeof o&&("number"!==typeof o?f("Expected `args.value` arg to be a Number."):l.eventValue=o),"undefined"!==typeof i&&("boolean"!==typeof i?f("`args.nonInteraction` must be a boolean."):l.nonInteraction=i),"undefined"!==typeof a&&("string"!==typeof a?f("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&f("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=a)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){l[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){l[e]=c[e]})),te(l,u)}else f("args.category AND args.action are required in event()")}function ae(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=$(n)),"undefined"!==typeof r&&("boolean"!==typeof r?f("`args.fatal` must be a boolean."):o.exFatal=r),te(o,t)}var ce={require:function(e,t,n){if(e){var r=S(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==J(t))return void f("Expected `options` arg to be an Object");0===Object.keys(t).length&&f("Empty `options` given to .require()"),Y(o,r,t),K&&N("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else Y(o,r),K&&N("called ga('require', '".concat(r,"');"))}else f("`name` cannot be an empty string in .require()")}else f("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];if(1===i.length?n=i[0]:(r=i[0],n=i[1]),"string"!==typeof e)f("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)f("Expected `action` arg to be a String.");else{var c="".concat(e,":").concat(t);n=n||null,r&&n?(Y(c,r,n),K&&(N("called ga('".concat(c,"');")),N('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(Y(c,n),K&&(N("called ga('".concat(c,"');")),N("with payload: ".concat(JSON.stringify(n))))):(Y(c),K&&N("called ga('".concat(c,"');")))}}};function ue(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:$(e.label)},o=!1,i=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(i),o||t()},te(r,n)}else f("args.label is required in outboundLink()");else f("hitCallback function is required")}var le=_,fe={initialize:W,ga:Y,set:ee,send:te,pageview:ne,modalview:re,timing:oe,event:ie,exception:ae,plugin:ce,outboundLink:ue,testModeAPI:_};function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}A.origTrackLink=A.trackLink,A.trackLink=ue;var be=A,ye=pe(pe({},r),{},{OutboundLink:be}),de=function(){ye.set({page:window.location.pathname}),ye.pageview(window.location.pathname)},ve=(n("4l1m"),n("/KGT"),n("HP2+"),n("Do4B"),i.a.createElement);function me(e){var t=e.Component,n=e.pageProps;return Object(o.useEffect)((function(){ye.initialize("UA-207734888-1"),de(),c.a.events.on("routeChangeComplete",de)}),[]),ve(t,n)}}},[[0,0,2,1]]]);