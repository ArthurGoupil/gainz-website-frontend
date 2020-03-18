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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4244902155", [photo.width, photo.height]]]) + " " + "paint-container d-flex justify-center align-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("img", {
    src: smallImage,
    alt: name,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4244902155", [photo.width, photo.height]]]) + " " + "paint",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4244902155", [photo.width, photo.height]]]) + " " + "paint-infos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, name.toUpperCase()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4244902155",
    dynamic: [photo.width, photo.height],
    __self: this
  }, ".paint-container.__jsx-style-dynamic-selector{width:".concat(photo.width, ";height:").concat(photo.height, ";position:relative;cursor:pointer;font-size:2rem;}.paint.__jsx-style-dynamic-selector{-webkit-transition:0.2s;transition:0.2s;}.paint-container.__jsx-style-dynamic-selector:hover .paint.__jsx-style-dynamic-selector{-webkit-filter:contrast(1.2) brightness(0.5);filter:contrast(1.2) brightness(0.5);-webkit-transition:0.2s;transition:0.2s;}.middle-column.__jsx-style-dynamic-selector{margin:0 20px 20px 20px;}.paint-infos.__jsx-style-dynamic-selector{color:white;font-weight:bold;position:absolute;padding:10px;border-radius:5px;opacity:0;-webkit-transition:0.2s;transition:0.2s;}.paint-container.__jsx-style-dynamic-selector:hover .paint-infos.__jsx-style-dynamic-selector{opacity:1;-webkit-transition:0.2s;transition:0.2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWludEJsb2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWVcsQUFHa0QsQUFVbkIsQUFHcUIsQUFJYixBQUdaLEFBU0YsVUFDTSxFQVRDLFlBSG5CLEtBSW9CLE1BckJrQixLQVV0QyxPQVllLEdBUWYsVUFQb0IsV0F0QkEsT0F1QlIsSUFYTSxNQVlBLENBdkJELGVBQ0EsZUFDakIsR0FVQSxNQVlBIiwiZmlsZSI6Ii9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWludEJsb2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFBhaW50QmxvYyA9IChcbiAgeyBfaWQsIG5hbWUsIGRldGFpbHMsIGRpbWVuc2lvbnMsIGRhdGUsIHNtYWxsSW1hZ2UsIGJpZ0ltYWdlIH0sXG4gIHBob3RvXG4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPVwiL3BhaW50L1tpZF1cIiBhcz17YC9wYWludC8ke25hbWV9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhaW50LWNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGFpbnRcIiBzcmM9e3NtYWxsSW1hZ2V9IGFsdD17bmFtZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWludC1pbmZvc1wiPntuYW1lLnRvVXBwZXJDYXNlKCl9PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5wYWludC1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogJHtwaG90by53aWR0aH07XG4gICAgICAgICAgICAgIGhlaWdodDogJHtwaG90by5oZWlnaHR9O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhaW50IHtcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhaW50LWNvbnRhaW5lcjpob3ZlciAucGFpbnQge1xuICAgICAgICAgICAgICBmaWx0ZXI6IGNvbnRyYXN0KDEuMikgYnJpZ2h0bmVzcygwLjUpO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1pZGRsZS1jb2x1bW4ge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweCAyMHB4IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQtaW5mb3Mge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWludC1jb250YWluZXI6aG92ZXIgLnBhaW50LWluZm9zIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFpbnRCbG9jO1xuIl19 */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/components/PaintBloc.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PaintBloc);

/***/ })

})
//# sourceMappingURL=paints.js.f3d28a79826b8e8971cb.hot-update.js.map