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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _languages_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../languages/data.json */ "./languages/data.json");
var _languages_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../languages/data.json */ "./languages/data.json", 1);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utils_ActiveLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils/ActiveLink */ "./components/Utils/ActiveLink.js");
var _jsxFileName = "/Users/ArthurGoupil/Documents/Development/Projects/gainz-website/frontend/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Header = ({
  lang,
  setLang
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleMobileMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'd-flex flex-column align-center justify-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_Utils_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'logo-container d-flex justify-center align-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("img", {
    src: "/logo/logo-gainz.svg",
    alt: "Gainz Art",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'd-flex justify-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "GAINZ")))), __jsx("nav", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'd-flex justify-center align-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'nav-elements d-flex space-between',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_Utils_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activeClassName: "active-link",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, _languages_data_json__WEBPACK_IMPORTED_MODULE_2__[lang].nav.home)), __jsx(_Utils_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activeClassName: "active-link",
    href: "/paintings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, _languages_data_json__WEBPACK_IMPORTED_MODULE_2__[lang].nav.paintings)), __jsx(_Utils_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activeClassName: "active-link",
    href: "/papers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, _languages_data_json__WEBPACK_IMPORTED_MODULE_2__[lang].nav.papers)), __jsx(_Utils_ActiveLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    activeClassName: "active-link",
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, _languages_data_json__WEBPACK_IMPORTED_MODULE_2__[lang].nav.about)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'language-container d-flex',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'language',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, _languages_data_json__WEBPACK_IMPORTED_MODULE_2__[lang].nav.language, "\xA0\xA0"), "|"), __jsx("div", {
    onClick: () => setLang('fr'),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'language-element fr d-flex align-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'icons d-flex align-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, lang === 'fr' ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdAdjust"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }) : __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdRadioButtonUnchecked"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  })), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "fr")), __jsx("div", {
    onClick: () => setLang('en'),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'language-element en d-flex align-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'icons d-flex align-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, lang === 'en' ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdAdjust"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }) : __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdRadioButtonUnchecked"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  })), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["204616097", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'en-text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "en"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "204616097",
    dynamic: [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold'],
    __self: undefined
  }, `header.__jsx-style-dynamic-selector{width:100%;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;z-index:1;height:80px;padding-top:20px;background-color:white;}nav.__jsx-style-dynamic-selector{height:60px;background-color:rgba(255,255,255,1);position:-webkit-sticky;position:sticky;top:0;z-index:2;background-color:white;}.nav-elements.__jsx-style-dynamic-selector{width:400px;}.active-link.__jsx-style-dynamic-selector{font-weight:bold;}.logo-container.__jsx-style-dynamic-selector{position:relative;width:180px;height:55px;}.logo.__jsx-style-dynamic-selector{width:65%;height:65%;opacity:0;position:absolute;-webkit-transition:0.4s;transition:0.4s;-webkit-filter:blur(2px);filter:blur(2px);}h1.__jsx-style-dynamic-selector{width:100%;line-height:5.5rem;font-size:2.3rem;-webkit-transition:0.4s;transition:0.4s;font-weight:normal;margin-bottom:0;}h2.__jsx-style-dynamic-selector{font-size:1.4rem;line-height:1.9rem;}.logo-container.__jsx-style-dynamic-selector:hover h1.__jsx-style-dynamic-selector{opacity:0;-webkit-transition:0.4s;transition:0.4s;}.logo-container.__jsx-style-dynamic-selector:hover .logo.__jsx-style-dynamic-selector{opacity:1;-webkit-transition:0.4s;transition:0.4s;-webkit-filter:blur(0px);filter:blur(0px);}.language-container.__jsx-style-dynamic-selector{position:absolute;right:20px;}.language.__jsx-style-dynamic-selector{margin-right:10px;}.language-element.__jsx-style-dynamic-selector{margin-right:15px;color:${greyBlue};cursor:pointer;}.language-element.__jsx-style-dynamic-selector:hover{color:${middleBlue};}.icons.__jsx-style-dynamic-selector{margin-right:3px;font-size:1.2rem;}.en.__jsx-style-dynamic-selector{font-weight:${lang === 'en' && 'bold'};}.fr.__jsx-style-dynamic-selector{font-weight:${lang === 'fr' && 'bold'};}.en-text.__jsx-style-dynamic-selector{margin-bottom:1px;}@media only screen and (max-width:769px){nav.__jsx-style-dynamic-selector{display:none;}header.__jsx-style-dynamic-selector{padding-bottom:20px;position:-webkit-sticky;position:sticky;top:0;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RTLEFBR3dCLEFBUUMsQUFRQSxBQUdLLEFBR0MsQUFLUixBQVFDLEFBUU0sQUFJUCxBQUlBLEFBS1EsQUFJQSxBQUdBLEFBS2lCLEFBR2xCLEFBSXdCLEFBR0EsQUFHdkIsQUFJSCxBQUdPLFVBNURYLEFBb0JLLEFBSUEsQ0FuREcsQUFtQ0EsQ0EzQnFCLEFBUTFDLENBcUVFLElBbEVGLEFBd0JxQixBQTRCRixDQWpETCxBQWtDRCxBQUliLEFBR3FDLEFBa0JyQyxFQU9vQixDQTVEUixRQTZCWixDQWxDYyxBQWFLLENBUEMsR0EyQ3BCLENBSkEsQ0F4QkEsS0ErQkEsQUFHQSxDQXREQSxLQWFrQixFQTVCQSxBQXFCQSxDQWtCbEIsQUFJbUIsR0FZRixPQXlCUCxNQUNSLEVBekJGLG1CQTNCcUIsRUE1QmIsQUFxQlcsR0FzQm5CLEdBMUNZLFNBVkEsQ0FXYSxDQTJCUCxRQXJDSixRQXNDZCxJQXJDbUIsRUFVbkIsR0FtQkEsWUE1QnlCLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvQXJ0aHVyR291cGlsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm9qZWN0cy9nYWluei13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi9sYW5ndWFnZXMvZGF0YS5qc29uJztcblxuaW1wb3J0IHsgTWRBZGp1c3QsIE1kUmFkaW9CdXR0b25VbmNoZWNrZWQgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5cbmltcG9ydCBBY3RpdmVMaW5rIGZyb20gJy4vVXRpbHMvQWN0aXZlTGluayc7XG5cbmNvbnN0IEhlYWRlciA9ICh7IGxhbmcsIHNldExhbmcgfSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVNb2JpbGVNZW51Q2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ28tY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXInPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2xvZ28nIHNyYz0nL2xvZ28vbG9nby1nYWluei5zdmcnIGFsdD0nR2FpbnogQXJ0JyAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY2VudGVyJz5HQUlOWjwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG5hdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWVsZW1lbnRzIGQtZmxleCBzcGFjZS1iZXR3ZWVuJz5cbiAgICAgICAgICA8QWN0aXZlTGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZS1saW5rJyBocmVmPScvJz5cbiAgICAgICAgICAgIDxoMj57ZGF0YVtsYW5nXS5uYXYuaG9tZX08L2gyPlxuICAgICAgICAgIDwvQWN0aXZlTGluaz5cbiAgICAgICAgICA8QWN0aXZlTGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZS1saW5rJyBocmVmPScvcGFpbnRpbmdzJz5cbiAgICAgICAgICAgIDxoMj57ZGF0YVtsYW5nXS5uYXYucGFpbnRpbmdzfTwvaDI+XG4gICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICAgIDxBY3RpdmVMaW5rIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlLWxpbmsnIGhyZWY9Jy9wYXBlcnMnPlxuICAgICAgICAgICAgPGgyPntkYXRhW2xhbmddLm5hdi5wYXBlcnN9PC9oMj5cbiAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUtbGluaycgaHJlZj0nL2Fib3V0Jz5cbiAgICAgICAgICAgIDxoMj57ZGF0YVtsYW5nXS5uYXYuYWJvdXR9PC9oMj5cbiAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhbmd1YWdlLWNvbnRhaW5lciBkLWZsZXgnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhbmd1YWdlJz5cbiAgICAgICAgICAgICAgPGI+e2RhdGFbbGFuZ10ubmF2Lmxhbmd1YWdlfSZuYnNwOyZuYnNwOzwvYj58XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsYW5ndWFnZS1lbGVtZW50IGZyIGQtZmxleCBhbGlnbi1jZW50ZXInXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExhbmcoJ2ZyJyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29ucyBkLWZsZXggYWxpZ24tY2VudGVyJz5cbiAgICAgICAgICAgICAgICB7bGFuZyA9PT0gJ2ZyJyA/IDxNZEFkanVzdCAvPiA6IDxNZFJhZGlvQnV0dG9uVW5jaGVja2VkIC8+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4+ZnI8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsYW5ndWFnZS1lbGVtZW50IGVuIGQtZmxleCBhbGlnbi1jZW50ZXInXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExhbmcoJ2VuJyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29ucyBkLWZsZXggYWxpZ24tY2VudGVyJz5cbiAgICAgICAgICAgICAgICB7bGFuZyA9PT0gJ2VuJyA/IDxNZEFkanVzdCAvPiA6IDxNZFJhZGlvQnV0dG9uVW5jaGVja2VkIC8+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdlbi10ZXh0Jz5lbjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdi1lbGVtZW50cyB7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hY3RpdmUtbGluayB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ28tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNS41cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ28tY29udGFpbmVyOmhvdmVyIGgxIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9nby1jb250YWluZXI6aG92ZXIgLmxvZ28ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxhbmd1YWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxhbmd1YWdlIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxhbmd1YWdlLWVsZW1lbnQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgY29sb3I6ICR7Z3JleUJsdWV9O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFuZ3VhZ2UtZWxlbWVudDpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJHttaWRkbGVCbHVlfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmljb25zIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lbiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogJHtsYW5nID09PSAnZW4nICYmICdib2xkJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mciB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogJHtsYW5nID09PSAnZnInICYmICdib2xkJ307XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lbi10ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */
/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/gainz-website/frontend/components/Header.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_LangContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/LangContext */ "./contexts/LangContext.js");
/* harmony import */ var _styles_StylingVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/StylingVariables */ "./styles/StylingVariables.js");
/* harmony import */ var _styles_StylingVariables__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_StylingVariables__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _MobileHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MobileHeader */ "./components/MobileHeader.js");
var _jsxFileName = "/Users/ArthurGoupil/Documents/Development/Projects/gainz-website/frontend/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Layout = ({
  children,
  padding
}) => {
  const {
    0: lang,
    1: setLang
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('fr');
  return __jsx(_contexts_LangContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: lang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    id: "App",
    className: "jsx-4227868076",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-4227868076" + " " + 'mobile-menu',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_MobileHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pageWrapId: 'page-wrap',
    outerContainerId: 'App',
    lang: lang,
    setLang: setLang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx("div", {
    id: "page-wrap",
    className: "jsx-4227868076",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    lang: lang,
    setLang: setLang,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("main", {
    className: "jsx-4227868076",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, children)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4227868076",
    __self: undefined
  }, "main.jsx-4227868076{padding-bottom:20px;}@media only screen and (min-width:769px){.mobile-menu.jsx-4227868076{display:none;}}@media only screen and (max-width:769px){main.jsx-4227868076{padding-bottom:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJvQixBQUdpQyxBQUlMLEFBS0ksYUFKbkIsSUFLQSxHQVRGIiwiZmlsZSI6Ii9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYW5nQ29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9MYW5nQ29udGV4dCc7XG5cbmltcG9ydCAnLi4vc3R5bGVzL1N0eWxpbmdWYXJpYWJsZXMnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBNb2JpbGVIZWFkZXIgZnJvbSAnLi9Nb2JpbGVIZWFkZXInO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgcGFkZGluZyB9KSA9PiB7XG4gIGNvbnN0IFtsYW5nLCBzZXRMYW5nXSA9IHVzZVN0YXRlKCdmcicpO1xuXG4gIHJldHVybiAoXG4gICAgPExhbmdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtsYW5nfT5cbiAgICAgIDxkaXYgaWQ9J0FwcCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2JpbGUtbWVudSc+XG4gICAgICAgICAgPE1vYmlsZUhlYWRlclxuICAgICAgICAgICAgcGFnZVdyYXBJZD17J3BhZ2Utd3JhcCd9XG4gICAgICAgICAgICBvdXRlckNvbnRhaW5lcklkPXsnQXBwJ31cbiAgICAgICAgICAgIGxhbmc9e2xhbmd9XG4gICAgICAgICAgICBzZXRMYW5nPXtzZXRMYW5nfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPSdwYWdlLXdyYXAnPlxuICAgICAgICAgIDxIZWFkZXIgbGFuZz17bGFuZ30gc2V0TGFuZz17c2V0TGFuZ30gLz5cbiAgICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgIC5tb2JpbGUtbWVudSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGFuZ0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/gainz-website/frontend/components/Layout.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/MobileHeader.js":
/*!************************************!*\
  !*** ./components/MobileHeader.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _languages_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../languages/data.json */ "./languages/data.json");
var _languages_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../languages/data.json */ "./languages/data.json", 1);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utils_ActiveLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utils/ActiveLink */ "./components/Utils/ActiveLink.js");
var _jsxFileName = "/Users/ArthurGoupil/Documents/Development/Projects/gainz-website/frontend/components/MobileHeader.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const MobileHeader = ({
  pageWrapId,
  outerContainerId,
  lang,
  setLang
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__["push"], {
    pageWrapId: pageWrapId,
    outerContainerId: outerContainerId,
    isOpen: isOpen,
    onStateChange: state => setIsOpen(state.isOpen),
    disableAutoFocus: true,
    styles: styles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    id: "menu",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'd-flex flex-column',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    onClick: () => setIsOpen(false),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_Utils_ActiveLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activeClassName: "active-link",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, _languages_data_json__WEBPACK_IMPORTED_MODULE_2__[lang].nav.home))), __jsx("div", {
    onClick: () => setIsOpen(false),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(_Utils_ActiveLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activeClassName: "active-link",
    href: "/paintings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, _languages_data_json__WEBPACK_IMPORTED_MODULE_2__[lang].nav.paintings))), __jsx("div", {
    onClick: () => setIsOpen(false),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_Utils_ActiveLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activeClassName: "active-link",
    href: "/papers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, _languages_data_json__WEBPACK_IMPORTED_MODULE_2__[lang].nav.papers))), __jsx("div", {
    onClick: () => setIsOpen(false),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_Utils_ActiveLink__WEBPACK_IMPORTED_MODULE_5__["default"], {
    activeClassName: "active-link",
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, _languages_data_json__WEBPACK_IMPORTED_MODULE_2__[lang].nav.about))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'language-container d-flex',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'language',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("b", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, _languages_data_json__WEBPACK_IMPORTED_MODULE_2__[lang].nav.language, "\xA0\xA0"), "|"), __jsx("div", {
    onClick: () => setLang('fr'),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'language-element fr d-flex align-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'icons d-flex align-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, lang === 'fr' ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdAdjust"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }) : __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdRadioButtonUnchecked"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  })), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "fr")), __jsx("div", {
    onClick: () => setLang('en'),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'language-element en d-flex align-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'icons d-flex align-center',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, lang === 'en' ? __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdAdjust"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }) : __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdRadioButtonUnchecked"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  })), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["630628555", [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold']]]) + " " + 'en-text',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "en")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "630628555",
    dynamic: [greyBlue, middleBlue, lang === 'en' && 'bold', lang === 'fr' && 'bold'],
    __self: undefined
  }, `#menu.__jsx-style-dynamic-selector{outline:none;}.active-link.__jsx-style-dynamic-selector{font-weight:bold;}.link.__jsx-style-dynamic-selector{margin-bottom:20px;font-size:2rem;}.language-container.__jsx-style-dynamic-selector{margin-top:20px;}.language.__jsx-style-dynamic-selector{margin-right:10px;}.language-element.__jsx-style-dynamic-selector{margin-right:15px;color:${greyBlue};cursor:pointer;}.language-element.__jsx-style-dynamic-selector:hover{color:${middleBlue};}.icons.__jsx-style-dynamic-selector{margin-right:3px;font-size:1.2rem;}.en.__jsx-style-dynamic-selector{font-weight:${lang === 'en' && 'bold'};}.fr.__jsx-style-dynamic-selector{font-weight:${lang === 'fr' && 'bold'};}.en-text.__jsx-style-dynamic-selector{margin-bottom:1px;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9Nb2JpbGVIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVrQixBQUd3QixBQUdJLEFBR0UsQUFJSCxBQUdFLEFBR0EsQUFLaUIsQUFHbEIsQUFJd0IsQUFHQSxBQUd2QixhQWpDcEIsR0FVQSxDQVBBLEFBcUJtQixDQVhuQixBQUdxQyxBQWtCckMsQ0E1QmlCLGVBQ2pCLEFBa0JBLENBSkEsTUFPQSxBQUdBLFlBZGlCLGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9Nb2JpbGVIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkYXRhIGZyb20gJy4uL2xhbmd1YWdlcy9kYXRhLmpzb24nO1xuXG5pbXBvcnQgeyBwdXNoIGFzIE1lbnUgfSBmcm9tICdyZWFjdC1idXJnZXItbWVudSc7XG5pbXBvcnQgeyBNZEFkanVzdCwgTWRSYWRpb0J1dHRvblVuY2hlY2tlZCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcblxuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSAnLi9VdGlscy9BY3RpdmVMaW5rJztcblxuY29uc3QgTW9iaWxlSGVhZGVyID0gKHsgcGFnZVdyYXBJZCwgb3V0ZXJDb250YWluZXJJZCwgbGFuZywgc2V0TGFuZyB9KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TWVudVxuICAgICAgcGFnZVdyYXBJZD17cGFnZVdyYXBJZH1cbiAgICAgIG91dGVyQ29udGFpbmVySWQ9e291dGVyQ29udGFpbmVySWR9XG4gICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgIG9uU3RhdGVDaGFuZ2U9eyhzdGF0ZSkgPT4gc2V0SXNPcGVuKHN0YXRlLmlzT3Blbil9XG4gICAgICBkaXNhYmxlQXV0b0ZvY3VzXG4gICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICA+XG4gICAgICA8ZGl2IGlkPSdtZW51JyBjbGFzc05hbWU9J2QtZmxleCBmbGV4LWNvbHVtbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5rJyBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfT5cbiAgICAgICAgICA8QWN0aXZlTGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZS1saW5rJyBocmVmPScvJz5cbiAgICAgICAgICAgIDxzcGFuPntkYXRhW2xhbmddLm5hdi5ob21lfTwvc3Bhbj5cbiAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluaycgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0+XG4gICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUtbGluaycgaHJlZj0nL3BhaW50aW5ncyc+XG4gICAgICAgICAgICA8c3Bhbj57ZGF0YVtsYW5nXS5uYXYucGFpbnRpbmdzfTwvc3Bhbj5cbiAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluaycgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0+XG4gICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUtbGluaycgaHJlZj0nL3BhcGVycyc+XG4gICAgICAgICAgICA8c3Bhbj57ZGF0YVtsYW5nXS5uYXYucGFwZXJzfTwvc3Bhbj5cbiAgICAgICAgICA8L0FjdGl2ZUxpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluaycgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0+XG4gICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUtbGluaycgaHJlZj0nL2Fib3V0Jz5cbiAgICAgICAgICAgIDxzcGFuPntkYXRhW2xhbmddLm5hdi5hYm91dH08L3NwYW4+XG4gICAgICAgICAgPC9BY3RpdmVMaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xhbmd1YWdlLWNvbnRhaW5lciBkLWZsZXgnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5ndWFnZSc+XG4gICAgICAgICAgICA8Yj57ZGF0YVtsYW5nXS5uYXYubGFuZ3VhZ2V9Jm5ic3A7Jm5ic3A7PC9iPnxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J2xhbmd1YWdlLWVsZW1lbnQgZnIgZC1mbGV4IGFsaWduLWNlbnRlcidcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExhbmcoJ2ZyJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb25zIGQtZmxleCBhbGlnbi1jZW50ZXInPlxuICAgICAgICAgICAgICB7bGFuZyA9PT0gJ2ZyJyA/IDxNZEFkanVzdCAvPiA6IDxNZFJhZGlvQnV0dG9uVW5jaGVja2VkIC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3Bhbj5mcjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9J2xhbmd1YWdlLWVsZW1lbnQgZW4gZC1mbGV4IGFsaWduLWNlbnRlcidcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExhbmcoJ2VuJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb25zIGQtZmxleCBhbGlnbi1jZW50ZXInPlxuICAgICAgICAgICAgICB7bGFuZyA9PT0gJ2VuJyA/IDxNZEFkanVzdCAvPiA6IDxNZFJhZGlvQnV0dG9uVW5jaGVja2VkIC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2VuLXRleHQnPmVuPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjbWVudSB7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZlLWxpbmsge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5saW5rIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgfVxuICAgICAgICAubGFuZ3VhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5sYW5ndWFnZSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5sYW5ndWFnZS1lbGVtZW50IHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgY29sb3I6ICR7Z3JleUJsdWV9O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubGFuZ3VhZ2UtZWxlbWVudDpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICR7bWlkZGxlQmx1ZX07XG4gICAgICAgIH1cbiAgICAgICAgLmljb25zIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgfVxuICAgICAgICAuZW4ge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAke2xhbmcgPT09ICdlbicgJiYgJ2JvbGQnfTtcbiAgICAgICAgfVxuICAgICAgICAuZnIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAke2xhbmcgPT09ICdmcicgJiYgJ2JvbGQnfTtcbiAgICAgICAgfVxuICAgICAgICAuZW4tdGV4dCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9NZW51PlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBibUJ1cmdlckJ1dHRvbjoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHdpZHRoOiAnMjBweCcsXG4gICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgbGVmdDogJzIwcHgnLFxuICAgIHRvcDogJzMwcHgnLFxuICB9LFxuICBibUJ1cmdlckJhcnM6IHtcbiAgICBiYWNrZ3JvdW5kOiAnIzMwMkUyRScsXG4gIH0sXG4gIGJtQnVyZ2VyQmFyc0hvdmVyOiB7XG4gICAgYmFja2dyb3VuZDogJyNhOTAwMDAnLFxuICB9LFxuICBibUNyb3NzQnV0dG9uOiB7XG4gICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgd2lkdGg6ICczMHB4JyxcbiAgfSxcbiAgYm1Dcm9zczoge1xuICAgIGJhY2tncm91bmQ6ICcjMzAyRTJFJyxcbiAgfSxcbiAgYm1NZW51V3JhcDoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9LFxuICBibU1lbnU6IHtcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgIHBhZGRpbmc6ICcyLjVlbSAxLjVlbSAwJyxcbiAgICBmb250U2l6ZTogJzEuMTVlbScsXG4gIH0sXG4gIGJtTW9ycGhTaGFwZToge1xuICAgIGZpbGw6ICcjMzczYTQ3JyxcbiAgfSxcbiAgYm1JdGVtTGlzdDoge1xuICAgIGNvbG9yOiAnI2I4YjdhZCcsXG4gICAgcGFkZGluZzogJzAuOGVtJyxcbiAgfSxcbiAgYm1JdGVtOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICB9LFxuICBibU92ZXJsYXk6IHtcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZUhlYWRlcjtcbiJdfQ== */
/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/gainz-website/frontend/components/MobileHeader.js */`));
};

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '20px',
    height: '20px',
    left: '20px',
    top: '30px'
  },
  bmBurgerBars: {
    background: '#302E2E'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '30px',
    width: '30px'
  },
  bmCross: {
    background: '#302E2E'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: 'white',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'flex'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MobileHeader);

/***/ }),

/***/ "./components/Utils/ActiveLink.js":
/*!****************************************!*\
  !*** ./components/Utils/ActiveLink.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ArthurGoupil/Documents/Development/Projects/gainz-website/frontend/components/Utils/ActiveLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const child = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children);
  let className = child.props.className || '';

  if (router.pathname === '/' && props.href === '/' && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  } else if ((router.pathname.includes(props.href) || router.asPath.includes(props.href)) && props.href !== '/' && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
    className
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ActiveLink);

/***/ }),

/***/ "./contexts/LangContext.js":
/*!*********************************!*\
  !*** ./contexts/LangContext.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const context = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (context);

/***/ }),

/***/ "./languages/data.json":
/*!*****************************!*\
  !*** ./languages/data.json ***!
  \*****************************/
/*! exports provided: fr, en, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"fr\":{\"main\":{\"paintings\":\"Peinture\",\"papers\":\"Travail sur papier\",\"about\":\"À propos\",\"inquiry\":\"Pour toute demande\"},\"nav\":{\"home\":\"accueil\",\"paintings\":\"peinture\",\"papers\":\"travail sur papier\",\"about\":\"à propos\",\"language\":\"langue\"},\"filters\":{\"sort\":\"trier\",\"newest\":\"+ récents\",\"oldest\":\"+ anciens\",\"show\":\"inclure\",\"all\":\"tous\",\"available\":\"disponibles\",\"sold\":\"vendus\"},\"art\":{\"available\":\"Disponible\",\"sold\":\"Vendu\",\"interested\":\"Intéressé(e) ? Contactez-nous.\",\"defaultColor\":\"Choisir la couleur du mur\",\"colorSelected\":\"Rétablir la couleur par défaut\"},\"moreInfos\":{\"about\":\"À propos de\",\"subtitle\":\"Dites-en nous un peu plus.\",\"lastName\":\"Nom (facultatif)\",\"name\":\"Prénom (facultatif)\",\"email\":\"Email\",\"phone\":\"Téléphone (facultatif)\",\"message\":\"Votre message\",\"messagePlaceholder\":\"Écrivez ici\",\"send\":\"Envoyer\",\"emailMessageError\":\"Merci de remplir les champs \\\"Email\\\" et \\\"Votre message\\\".\",\"messageError\":\"Merci d'écrire un court message pour nous indiquer ce que vous souhaitez.\",\"emailError\":\"Merci d'indiquer votre adresse email.\",\"sent\":\"Votre message a bien été envoyé.\",\"interest\":\"Merci de votre intérêt pour le travail de Gainz.\",\"back\":\"Retour à\",\"page\":\"la page\",\"paintings\":\"peinture\",\"papers\":\"travail sur papier\",\"in\":\"dans\"}},\"en\":{\"main\":{\"paintings\":\"Paintings\",\"papers\":\"Work on paper\",\"about\":\"About\",\"inquiry\":\"Further information\"},\"nav\":{\"home\":\"home\",\"paintings\":\"paintings\",\"papers\":\"work on paper\",\"about\":\"about\",\"language\":\"language\"},\"filters\":{\"sort\":\"sort\",\"newest\":\"newest\",\"oldest\":\"oldest\",\"show\":\"show\",\"all\":\"all\",\"available\":\"available\",\"sold\":\"sold\"},\"art\":{\"available\":\"Available\",\"sold\":\"Sold\",\"interested\":\"Interested ? Contact us.\",\"defaultColor\":\"Choose wall color\",\"colorSelected\":\"Reset wall color\"},\"moreInfos\":{\"about\":\"About\",\"subtitle\":\"Please tell us a bit more about what you need.\",\"lastName\":\"Last name (optionnal)\",\"name\":\"Name (optionnal)\",\"email\":\"Email\",\"phone\":\"Phone number (optionnal)\",\"message\":\"Your message\",\"messagePlaceholder\":\"Write here\",\"send\":\"Send\",\"emailMessageError\":\"Please fill in email and message fields.\",\"messageError\":\"Please write a short message to explain us what do you need.\",\"emailError\":\"Please fill in the email field.\",\"sent\":\"Your message has been sent.\",\"interest\":\"Thanks for your interest in Gainz work.\",\"back\":\"Back to\",\"page\":\"page\",\"in\":\"in\"}}}");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-page-transitions */ "next-page-transitions");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/reset.css */ "./styles/reset.css");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/ArthurGoupil/Documents/Development/Projects/gainz-website/frontend/pages/_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function MyApp({
  Component,
  pageProps
}) {
  const {
    0: wallColor,
    1: setWallColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    rgba: 'rgba(236,236,236,1)',
    hex: '#ececec'
  });
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-55980200-2",
    className: "jsx-1189816883",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("script", {
    className: "jsx-1189816883",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "window.dataLayer = window.dataLayer || []; function gtag()", dataLayer.push(arguments), "gtag('js', new Date()); gtag('config', 'UA-55980200-2');"), __jsx("link", {
    rel: "shortcut icon",
    href: "/favicon.ico",
    className: "jsx-1189816883",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: `https://www.gainz-art.com${router.asPath}`,
    className: "jsx-1189816883",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-1189816883",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("meta", {
    property: "fb:app_id",
    content: "1078456695887562",
    className: "jsx-1189816883",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx(next_page_transitions__WEBPACK_IMPORTED_MODULE_4__["PageTransition"], {
    timeout: 300,
    classNames: "page-transition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(Component, _extends({}, pageProps, {
    wallColor: wallColor,
    setWallColor: setWallColor,
    key: router.pathname,
    className: "jsx-1189816883" + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1189816883",
    __self: this
  }, `@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700&display=swap');*{box-sizing:border-box;}html,input,textarea,button{font-size:62.5%;font-family:'Quicksand',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;}body::-webkit-scrollbar{display:none;}body{-ms-overflow-style:none;}body,input,button,textarea{font-size:1.4rem;line-height:1.9rem;color:${middleBlue};}.static-margins{margin:0 20px 0 20px;}.responsive-margins{margin:0 20px 0 20px;}@media only screen and (max-width:769px){.responsive-margins{margin:0;}}h1{color:${middleBlue};display:block;font-size:2.4rem;line-height:2.8rem;font-weight:bold;margin-bottom:10px;}h2{color:${middleBlue};display:block;font-size:1.6rem;line-height:2rem;}h3{color:${middleBlue};display:block;font-size:1.6rem;line-height:1.8rem;font-weight:bold;}h4{color:${middleBlue};display:block;font-size:1.4rem;line-height:1.7rem;font-weight:bold;}a{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}a:hover{color:${darkBlue};}a:link{color:${middleBlue};}a:visited{color:${middleBlue};}a:visited:hover{color:${darkBlue};}b{font-weight:bold;}input:not(.submit),textarea{border-radius:${miniRadius};border:none;margin:5px 0 10px 0;padding:10px 10px;background-color:${lightGrey};}button.submit{height:40px;margin-top:10px;background-color:${middleBlue};color:white;font-weight:bold;border-radius:${miniRadius};border:none;cursor:pointer;}button.submit:hover{background-color:${darkBlue};}input{width:100%;height:40px;padding:10px 10px;}textarea{min-width:100%;max-width:100%;min-height:100px;}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus{border:2px solid ${middleBlue};-webkit-box-shadow:0 0 0px 1000px ${lightGrey} inset;-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s;}.color-picker input{font-size:1.2rem;padding:5px;height:inherit;}.d-flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.justify-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.space-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.space-around{-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.align-center{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.flex-column{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.flex-wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.page-transition-enter{opacity:0;}.page-transition-enter-active{opacity:1;-webkit-transition:opacity 200ms;transition:opacity 200ms;}.page-transition-exit{opacity:1;}.page-transition-exit-active{opacity:0;-webkit-transition:opacity 200ms;transition:opacity 200ms;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRFMsQUFJbUMsQUFFNkQsQUFLbkUsQUFRSCxBQUlXLEFBTVAsQUFPSSxBQUdBLEFBSVYsQUFNd0IsQUFRQSxBQU1BLEFBT0EsQUFTZCxBQUljLEFBR0EsQUFHQSxBQUdBLEFBS2xCLEFBTTBCLEFBTy9CLEFBVW1DLEFBR3BDLEFBS0ksQUFhZ0MsQUFPOUIsQUFPSixBQUdVLEFBR08sQUFHRCxBQUdWLEFBR0csQUFHUCxBQUtMLEFBR0EsQUFJQSxBQUdBLFNBaEpWLENBdUlGLEFBRzJCLEFBSTNCLEFBRzJCLENBakViLENBYkksQ0EzRmxCLEVBNkdpQixDQXJIcUIsQ0FrQmpCLEFBb0VyQixBQW1EYyxJQWhIZCxBQUdBLENBbkNBLENBd0hvQixDQXJHcEIsSUF3RmlELENBc0NoQyxDQXBCRSxLQWhGSCxBQVFBLEFBTUEsQUFPQSxBQWFoQixBQUdBLEFBR0EsQUFHQSxDQTlEcUMsS0ErRnJDLEVBdEJjLENBK0NkLEdBOUJBLEFBVUEsQUFXd0UsRUEzRnJELEFBUUEsQUFNQSxBQU9BLENBUUYsQ0FuRW9CLElBNEZmLEVBcUV0QixRQTdGQSxDQTdCcUIsQUFRRixBQU1FLEFBT0EsRUE4R3JCLEFBT0EsR0E5SkEsR0E0SEEsQ0FsRG9CLEFBT04sR0EwRGQsS0E5R0EsRUFSbUIsQUFjQSxBQU9BLENBNURpQixDQW9HakIsTUFQOEIsQUE2RGpELE1BVEEsR0F6R3FCLEFBY3JCLEFBT0EsRUF3QzhDLFdBK0M5QyxFQW5CbUQsR0FoSWYsQ0F3Q3BDLEVBOEdBLGlCQXpEQSxRQVFjLE1BcEdkLE1BcUdpQixlQUNqQixnREEwQkEiLCJmaWxlIjoiL1VzZXJzL0FydGh1ckdvdXBpbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJvamVjdHMvZ2Fpbnotd2Vic2l0ZS9mcm9udGVuZC9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQYWdlVHJhbnNpdGlvbiB9IGZyb20gJ25leHQtcGFnZS10cmFuc2l0aW9ucyc7XG5cbmltcG9ydCAnLi4vc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFt3YWxsQ29sb3IsIHNldFdhbGxDb2xvcl0gPSB1c2VTdGF0ZSh7XG4gICAgcmdiYTogJ3JnYmEoMjM2LDIzNiwyMzYsMSknLFxuICAgIGhleDogJyNlY2VjZWMnLFxuICB9KTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgey8qIDwhLS0gR2xvYmFsIHNpdGUgdGFnIChndGFnLmpzKSAtIEdvb2dsZSBBbmFseXRpY3MgLS0+ICovfVxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmNcbiAgICAgICAgICBzcmM9J2h0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9VUEtNTU5ODAyMDAtMidcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdOyBmdW5jdGlvbiBndGFnKClcbiAgICAgICAgICB7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKX1cbiAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpOyBndGFnKCdjb25maWcnLCAnVUEtNTU5ODAyMDAtMicpO1xuICAgICAgICA8L3NjcmlwdD5cblxuICAgICAgICA8bGluayByZWw9J3Nob3J0Y3V0IGljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT0nb2c6dXJsJ1xuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL3d3dy5nYWluei1hcnQuY29tJHtyb3V0ZXIuYXNQYXRofWB9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0eXBlJyBjb250ZW50PSd3ZWJzaXRlJyAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT0nZmI6YXBwX2lkJyBjb250ZW50PScxMDc4NDU2Njk1ODg3NTYyJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFBhZ2VUcmFuc2l0aW9uIHRpbWVvdXQ9ezMwMH0gY2xhc3NOYW1lcz0ncGFnZS10cmFuc2l0aW9uJz5cbiAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgICAgd2FsbENvbG9yPXt3YWxsQ29sb3J9XG4gICAgICAgICAgc2V0V2FsbENvbG9yPXtzZXRXYWxsQ29sb3J9XG4gICAgICAgICAga2V5PXtyb3V0ZXIucGF0aG5hbWV9XG4gICAgICAgIC8+XG4gICAgICA8L1BhZ2VUcmFuc2l0aW9uPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLyogTUFJTiAqL1xuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQ6NDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIHRleHRhcmVhLFxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDYyLjUlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuICAgICAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSBhbmQgRWRnZSAqL1xuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIGJ1dHRvbixcbiAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjlyZW07XG4gICAgICAgICAgICBjb2xvcjogJHttaWRkbGVCbHVlfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBFWFRSQS1NQVJHSU4gKi9cbiAgICAgICAgICAuc3RhdGljLW1hcmdpbnMge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVzcG9uc2l2ZS1tYXJnaW5zIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgLnJlc3BvbnNpdmUtbWFyZ2lucyB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBUSVRMRVMgKi9cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogJHttaWRkbGVCbHVlfTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi44cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogJHttaWRkbGVCbHVlfTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgY29sb3I6ICR7bWlkZGxlQmx1ZX07XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBjb2xvcjogJHttaWRkbGVCbHVlfTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogTElOS1MgKi9cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJHtkYXJrQmx1ZX07XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICBjb2xvcjogJHttaWRkbGVCbHVlfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTp2aXNpdGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAke21pZGRsZUJsdWV9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOnZpc2l0ZWQ6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICR7ZGFya0JsdWV9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEZPTlRTICovXG4gICAgICAgICAgYiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBJTlBVVFMgKi9cbiAgICAgICAgICBpbnB1dDpub3QoLnN1Ym1pdCksXG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHttaW5pUmFkaXVzfTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgMTBweCAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtsaWdodEdyZXl9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24uc3VibWl0IHtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke21pZGRsZUJsdWV9O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAke21pbmlSYWRpdXN9O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24uc3VibWl0OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7ZGFya0JsdWV9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgICAgICAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAgICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxuICAgICAgICAgIHRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgICAgICAgdGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAgICAgICB0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxuICAgICAgICAgIHNlbGVjdDotd2Via2l0LWF1dG9maWxsLFxuICAgICAgICAgIHNlbGVjdDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICAgICAgIHNlbGVjdDotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7bWlkZGxlQmx1ZX07XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4ICR7bGlnaHRHcmV5fSBpbnNldDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogQ09MT1IgUElDS0VSICovXG4gICAgICAgICAgLmNvbG9yLXBpY2tlciBpbnB1dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBGTEVYQk9YICovXG4gICAgICAgICAgLmQtZmxleCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuanVzdGlmeS1jZW50ZXIge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zcGFjZS1iZXR3ZWVuIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNwYWNlLWFyb3VuZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFsaWduLWNlbnRlciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmxleC1jb2x1bW4ge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZsZXgtd3JhcCB7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogUEFHRSBUUkFOU0lUSU9OUyAqL1xuICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZW50ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhZ2UtdHJhbnNpdGlvbi1lbnRlci1hY3RpdmUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wYWdlLXRyYW5zaXRpb24tZXhpdCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFnZS10cmFuc2l0aW9uLWV4aXQtYWN0aXZlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbi8vIE9ubHkgdW5jb21tZW50IHRoaXMgbWV0aG9kIGlmIHlvdSBoYXZlIGJsb2NraW5nIGRhdGEgcmVxdWlyZW1lbnRzIGZvclxuLy8gZXZlcnkgc2luZ2xlIHBhZ2UgaW4geW91ciBhcHBsaWNhdGlvbi4gVGhpcyBkaXNhYmxlcyB0aGUgYWJpbGl0eSB0b1xuLy8gcGVyZm9ybSBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiwgY2F1c2luZyBldmVyeSBwYWdlIGluIHlvdXIgYXBwIHRvXG4vLyBiZSBzZXJ2ZXItc2lkZSByZW5kZXJlZC5cbi8vXG4vLyBNeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuLy8gICAvLyBjYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4vLyAgIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcbi8vXG4vLyAgIHJldHVybiB7IC4uLmFwcFByb3BzIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXX0= */
/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/gainz-website/frontend/pages/_app.js */`));
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

/***/ "./styles/StylingVariables.js":
/*!************************************!*\
  !*** ./styles/StylingVariables.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// SPACING
container = '1024px';
spaceBetweenSections = '30px';
spaceBetweenBlocks = '20px'; // COLOURS

darkBlue = '#0B132B';
middleBlue = '#1C2541';
greyBlue = '#70778d';
lightGrey = '#EDF2F4'; // STYLING

radius = '10px';
miniRadius = '5px';

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

/***/ "next-page-transitions":
/*!****************************************!*\
  !*** external "next-page-transitions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-page-transitions");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-burger-menu":
/*!************************************!*\
  !*** external "react-burger-menu" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map