webpackHotUpdate("static/development/pages/paints.js",{

/***/ "./components/PaintBloc.js":
/*!*********************************!*\
  !*** ./components/PaintBloc.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/components/PaintBloc.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var PaintBloc = function PaintBloc(_ref, photo) {
  var _id = _ref._id,
      name = _ref.name,
      details = _ref.details,
      dimensions = _ref.dimensions,
      date = _ref.date,
      smallImage = _ref.smallImage,
      bigImage = _ref.bigImage;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/paint/[id]",
    as: "/paint/".concat(name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1329092867", [photo.width, photo.height]]]) + " " + "paint-container d-flex justify-center align-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    src: smallImage,
    alt: name,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1329092867", [photo.width, photo.height]]]) + " " + "paint",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1329092867", [photo.width, photo.height]]]) + " " + "paint-infos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, name.toUpperCase()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1329092867",
    dynamic: [photo.width, photo.height],
    __self: this
  }, ".paint-container.__jsx-style-dynamic-selector{width:".concat(photo.width, ";height:").concat(photo.height, ";position:relative;cursor:pointer;font-size:2rem;}.paint.__jsx-style-dynamic-selector{-webkit-transition:0.2s;transition:0.2s;}.paint-container.__jsx-style-dynamic-selector:hover .paint.__jsx-style-dynamic-selector{-webkit-filter:contrast(1.2) brightness(0.5);filter:contrast(1.2) brightness(0.5);-webkit-transition:0.2s;transition:0.2s;}.paint-infos.__jsx-style-dynamic-selector{color:white;font-weight:bold;position:absolute;padding:10px;border-radius:5px;opacity:0;-webkit-transition:0.2s;transition:0.2s;}.paint-container.__jsx-style-dynamic-selector:hover .paint-infos.__jsx-style-dynamic-selector{opacity:1;-webkit-transition:0.2s;transition:0.2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWludEJsb2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWVcsQUFHa0QsQUFVbkIsQUFHcUIsQUFTekIsQUFTRixVQUNNLEVBVEMsaUJBQ0MsTUF2QmtCLEtBVXRDLE9BY2UsR0FRZixVQVBvQixXQXhCQSxPQXlCUixJQWJNLE1BY0EsQ0F6QkQsZUFDQSxlQUNqQixHQVVBLE1BY0EiLCJmaWxlIjoiL1VzZXJzL0FydGh1ckdvdXBpbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJvamVjdHMvUmVhY3QvZ2Fpbnotd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL1BhaW50QmxvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgUGFpbnRCbG9jID0gKFxuICB7IF9pZCwgbmFtZSwgZGV0YWlscywgZGltZW5zaW9ucywgZGF0ZSwgc21hbGxJbWFnZSwgYmlnSW1hZ2UgfSxcbiAgcGhvdG9cbikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9XCIvcGFpbnQvW2lkXVwiIGFzPXtgL3BhaW50LyR7bmFtZX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFpbnQtY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwYWludFwiIHNyYz17c21hbGxJbWFnZX0gYWx0PXtuYW1lfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhaW50LWluZm9zXCI+e25hbWUudG9VcHBlckNhc2UoKX08L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnBhaW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAke3Bob3RvLndpZHRofTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAke3Bob3RvLmhlaWdodH07XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQge1xuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQtY29udGFpbmVyOmhvdmVyIC5wYWludCB7XG4gICAgICAgICAgICAgIGZpbHRlcjogY29udHJhc3QoMS4yKSBicmlnaHRuZXNzKDAuNSk7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWlkZGxlLWNvbHVtbiB7XG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLyogbWFyZ2luOiAwIDIwcHggMjBweCAyMHB4OyAqL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQtaW5mb3Mge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWludC1jb250YWluZXI6aG92ZXIgLnBhaW50LWluZm9zIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFpbnRCbG9jO1xuIl19 */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/components/PaintBloc.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PaintBloc);

/***/ })

})
//# sourceMappingURL=paints.js.452e27d02f65cb90ff73.hot-update.js.map