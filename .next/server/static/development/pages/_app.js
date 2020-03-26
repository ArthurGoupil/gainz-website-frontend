module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/reset.css */ "./styles/reset.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/pages/_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import App from 'next/app'



_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowLeft"]);

function MyApp({
  Component,
  pageProps
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Component, _extends({}, pageProps, {
    className: "jsx-1303806342" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1303806342",
    __self: this
  }, `@import url("https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap");*{box-sizing:border-box;}html,input,textarea,button{font-size:62.5%;font-family:"Quicksand",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;}body::-webkit-scrollbar{display:none;}body{-ms-overflow-style:none;}body,input,button,textarea{font-size:1.4rem;line-height:1.9rem;color:${middleBlue};}main{padding:0 20px 20px 20px;}h1{color:${middleBlue};display:block;font-size:2.4rem;line-height:2.8rem;font-weight:bold;margin-bottom:10px;}h2{color:${middleBlue};display:block;font-size:1.6rem;line-height:2rem;}h3{color:${middleBlue};display:block;font-size:1.6rem;line-height:1.8rem;font-weight:bold;}h4{color:${middleBlue};display:block;font-size:1.4rem;line-height:1.7rem;font-weight:bold;}a{-webkit-text-decoration:none;text-decoration:none;}a:link{color:inherit;}a:visited{color:inherit;}b{font-weight:bold;}input:not(.submit),textarea{border-radius:${miniRadius};border:none;margin:5px 0 10px 0;padding:10px 10px;background-color:${lightGrey};}input{width:100%;height:40px;padding:10px 10px;}textarea{min-width:400px;max-width:400px;min-height:100px;}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus{border:2px solid ${middleBlue};-webkit-box-shadow:0 0 0px 1000px ${lightGrey} inset;-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s;}.container{width:96vw;max-width:${container};}.d-flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.justify-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.space-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.space-around{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.align-center{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.flex-column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.flex-wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZUyxBQUltQyxBQUU2RCxBQUtuRSxBQVFILEFBSVcsQUFNUCxBQUtRLEFBSVUsQUFRQSxBQU1BLEFBT0EsQUFTZCxBQUdQLEFBR0EsQUFLRyxBQU0wQixBQU9oQyxBQUtLLEFBYThCLEFBT25DLEFBTUUsQUFHVSxBQUdPLEFBR0QsQUFHVixBQUdHLEFBR1AsV0FoREgsQUF5QjJCLEVBbEd6QyxDQW9EQSxBQUdBLEVBL0RzQyxBQXNGcEIsQ0FwRUcsQUFrRHJCLEtBM0VBLENBeUZvQixDQXRFcEIsQ0FXQSxPQWdFbUIsR0E1REgsQUFRQSxBQU1BLEFBT0EsQ0E3QnFCLEtBZ0VyQyxFQVRjLEdBeUJ5RCxHQXZFcEQsQUFRQSxBQU1BLEFBT0EsQUF1Q25CLENBL0JBLEFBa0RBLENBMUdxQyxJQTBFZixFQXVEdEIsU0FyR3FCLEFBUUYsQUFNRSxBQU9BLEtBOUJyQixHQTRGQSxDQXBDb0IsR0FtRHBCLEtBekZBLEVBUm1CLEFBY0EsQUFPQSxDQWpEaUIsT0EyRVksQUErQ2hELE1BVEEsR0FwRnFCLEFBY3JCLEFBT0EsYUFnRG1ELEFBa0JuRCxLQW5Ib0MsQ0E2QnBDLEVBeUZBLGdCQTNDQSxlQTFFQSxtRUFpR0EiLCJmaWxlIjoiL1VzZXJzL0FydGh1ckdvdXBpbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJvamVjdHMvUmVhY3QvZ2Fpbnotd2Vic2l0ZS9mcm9udGVuZC9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBcIi4uL3N0eWxlcy9yZXNldC5jc3NcIjtcblxuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIjtcbmltcG9ydCB7IGZhQXJyb3dMZWZ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xubGlicmFyeS5hZGQoZmFBcnJvd0xlZnQpO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLyogTUFJTiAqL1xuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kOjQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgdGV4dGFyZWEsXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbiAgICAgICAgICBib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUgYW5kIEVkZ2UgKi9cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS45cmVtO1xuICAgICAgICAgICAgY29sb3I6ICR7bWlkZGxlQmx1ZX07XG4gICAgICAgICAgfVxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogVElUTEVTICovXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6ICR7bWlkZGxlQmx1ZX07XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6ICR7bWlkZGxlQmx1ZX07XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgIGNvbG9yOiAke21pZGRsZUJsdWV9O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgY29sb3I6ICR7bWlkZGxlQmx1ZX07XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIExJTktTICovXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEZPTlRTICovXG4gICAgICAgICAgYiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBJTlBVVFMgKi9cbiAgICAgICAgICBpbnB1dDpub3QoLnN1Ym1pdCksXG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHttaW5pUmFkaXVzfTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgMTBweCAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtsaWdodEdyZXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAgICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG4gICAgICAgICAgdGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAgICAgICB0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICAgICAgIHRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG4gICAgICAgICAgc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgICAgICAgc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgICAgICAgc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHttaWRkbGVCbHVlfTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggJHtsaWdodEdyZXl9IGluc2V0O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBDT05UQUlORVIgKi9cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA5NnZ3O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAke2NvbnRhaW5lcn07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogRkxFWEJPWCAqL1xuICAgICAgICAgIC5kLWZsZXgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmp1c3RpZnktY2VudGVyIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3BhY2UtYmV0d2VlbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zcGFjZS1hcm91bmQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbGlnbi1jZW50ZXIge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZsZXgtY29sdW1uIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mbGV4LXdyYXAge1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA7XG4gICAgPC8+XG4gICk7XG59XG5cbi8vIE9ubHkgdW5jb21tZW50IHRoaXMgbWV0aG9kIGlmIHlvdSBoYXZlIGJsb2NraW5nIGRhdGEgcmVxdWlyZW1lbnRzIGZvclxuLy8gZXZlcnkgc2luZ2xlIHBhZ2UgaW4geW91ciBhcHBsaWNhdGlvbi4gVGhpcyBkaXNhYmxlcyB0aGUgYWJpbGl0eSB0b1xuLy8gcGVyZm9ybSBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiwgY2F1c2luZyBldmVyeSBwYWdlIGluIHlvdXIgYXBwIHRvXG4vLyBiZSBzZXJ2ZXItc2lkZSByZW5kZXJlZC5cbi8vXG4vLyBNeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuLy8gICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4vLyAgIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcbi8vXG4vLyAgIHJldHVybiB7IC4uLmFwcFByb3BzIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXX0= */
/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/pages/_app.js */`), ";");
} // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }


/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map