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
  console.log(photo);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/paint/[id]",
    as: "/paint/".concat(name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1329092867", [photo.width, photo.height]]]) + " " + "paint-container d-flex justify-center align-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("img", {
    src: smallImage,
    alt: name,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1329092867", [photo.width, photo.height]]]) + " " + "paint",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1329092867", [photo.width, photo.height]]]) + " " + "paint-infos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, name.toUpperCase()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1329092867",
    dynamic: [photo.width, photo.height],
    __self: this
  }, ".paint-container.__jsx-style-dynamic-selector{width:".concat(photo.width, ";height:").concat(photo.height, ";position:relative;cursor:pointer;font-size:2rem;}.paint.__jsx-style-dynamic-selector{-webkit-transition:0.2s;transition:0.2s;}.paint-container.__jsx-style-dynamic-selector:hover .paint.__jsx-style-dynamic-selector{-webkit-filter:contrast(1.2) brightness(0.5);filter:contrast(1.2) brightness(0.5);-webkit-transition:0.2s;transition:0.2s;}.paint-infos.__jsx-style-dynamic-selector{color:white;font-weight:bold;position:absolute;padding:10px;border-radius:5px;opacity:0;-webkit-transition:0.2s;transition:0.2s;}.paint-container.__jsx-style-dynamic-selector:hover .paint-infos.__jsx-style-dynamic-selector{opacity:1;-webkit-transition:0.2s;transition:0.2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWludEJsb2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY1csQUFHa0QsQUFVbkIsQUFHcUIsQUFTekIsQUFTRixVQUNNLEVBVEMsaUJBQ0MsTUF2QmtCLEtBVXRDLE9BY2UsR0FRZixVQVBvQixXQXhCQSxPQXlCUixJQWJNLE1BY0EsQ0F6QkQsZUFDQSxlQUNqQixHQVVBLE1BY0EiLCJmaWxlIjoiL1VzZXJzL0FydGh1ckdvdXBpbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJvamVjdHMvUmVhY3QvZ2Fpbnotd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL1BhaW50QmxvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgUGFpbnRCbG9jID0gKFxuICB7IF9pZCwgbmFtZSwgZGV0YWlscywgZGltZW5zaW9ucywgZGF0ZSwgc21hbGxJbWFnZSwgYmlnSW1hZ2UgfSxcbiAgcGhvdG9cbikgPT4ge1xuICBjb25zb2xlLmxvZyhwaG90byk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPVwiL3BhaW50L1tpZF1cIiBhcz17YC9wYWludC8ke25hbWV9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhaW50LWNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGFpbnRcIiBzcmM9e3NtYWxsSW1hZ2V9IGFsdD17bmFtZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWludC1pbmZvc1wiPntuYW1lLnRvVXBwZXJDYXNlKCl9PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5wYWludC1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogJHtwaG90by53aWR0aH07XG4gICAgICAgICAgICAgIGhlaWdodDogJHtwaG90by5oZWlnaHR9O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhaW50IHtcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhaW50LWNvbnRhaW5lcjpob3ZlciAucGFpbnQge1xuICAgICAgICAgICAgICBmaWx0ZXI6IGNvbnRyYXN0KDEuMikgYnJpZ2h0bmVzcygwLjUpO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1pZGRsZS1jb2x1bW4ge1xuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8qIG1hcmdpbjogMCAyMHB4IDIwcHggMjBweDsgKi9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhaW50LWluZm9zIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQtY29udGFpbmVyOmhvdmVyIC5wYWludC1pbmZvcyB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhaW50QmxvYztcbiJdfQ== */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/components/PaintBloc.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PaintBloc);

/***/ })

})
//# sourceMappingURL=paints.js.b102a37847d90f57535f.hot-update.js.map