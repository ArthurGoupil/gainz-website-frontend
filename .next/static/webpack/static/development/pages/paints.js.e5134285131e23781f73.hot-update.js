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


var PaintBloc = function PaintBloc(_ref) {
  var _id = _ref._id,
      name = _ref.name,
      details = _ref.details,
      dimensions = _ref.dimensions,
      date = _ref.date,
      smallImage = _ref.smallImage,
      bigImage = _ref.bigImage,
      isMiddleColumn = _ref.isMiddleColumn;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/paint/[id]",
    as: "/paint/".concat(name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2164022466" + " " + ((!isMiddleColumn ? "paint-container d-flex justify-center align-center" : "paint-container middle-column d-flex justify-center align-center") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    src: smallImage,
    alt: name,
    className: "jsx-2164022466" + " " + "paint",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2164022466" + " " + "paint-infos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, name.toUpperCase()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2164022466",
    __self: this
  }, ".paint-container.jsx-2164022466{width:100%;position:relative;cursor:pointer;font-size:2rem;}.paint.jsx-2164022466{width:100%;-webkit-transition:0.2s;transition:0.2s;}.paint-container.jsx-2164022466:hover .paint.jsx-2164022466{-webkit-filter:contrast(1.2) brightness(0.5);filter:contrast(1.2) brightness(0.5);-webkit-transition:0.2s;transition:0.2s;}.paint-infos.jsx-2164022466{color:white;font-weight:bold;position:absolute;border-radius:5px;opacity:0;-webkit-transition:0.2s;transition:0.2s;}.paint-container.jsx-2164022466:hover .paint-infos.jsx-2164022466{opacity:1;-webkit-transition:0.2s;transition:0.2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWludEJsb2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JXLEFBRzBCLEFBTUEsQUFLMEIsQUFTekIsQUFXRixVQUNNLENBL0JFLEFBT0YsQ0FhQyxpQkFuQkYsQUFvQkcsZUFuQkgsR0F1QkcsR0FPcEIsQ0F4QkEsUUFMQSxNQXVCWSxVQUNNLE9BaEJBLGlDQWlCbEIsT0FoQkEiLCJmaWxlIjoiL1VzZXJzL0FydGh1ckdvdXBpbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJvamVjdHMvUmVhY3QvZ2Fpbnotd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL1BhaW50QmxvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgUGFpbnRCbG9jID0gKHtcbiAgX2lkLFxuICBuYW1lLFxuICBkZXRhaWxzLFxuICBkaW1lbnNpb25zLFxuICBkYXRlLFxuICBzbWFsbEltYWdlLFxuICBiaWdJbWFnZSxcbiAgaXNNaWRkbGVDb2x1bW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPVwiL3BhaW50L1tpZF1cIiBhcz17YC9wYWludC8ke25hbWV9YH0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgIWlzTWlkZGxlQ29sdW1uXG4gICAgICAgICAgICA/IFwicGFpbnQtY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXJcIlxuICAgICAgICAgICAgOiBcInBhaW50LWNvbnRhaW5lciBtaWRkbGUtY29sdW1uIGQtZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXJcIlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGFpbnRcIiBzcmM9e3NtYWxsSW1hZ2V9IGFsdD17bmFtZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWludC1pbmZvc1wiPntuYW1lLnRvVXBwZXJDYXNlKCl9PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5wYWludC1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWludCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQtY29udGFpbmVyOmhvdmVyIC5wYWludCB7XG4gICAgICAgICAgICAgIGZpbHRlcjogY29udHJhc3QoMS4yKSBicmlnaHRuZXNzKDAuNSk7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWlkZGxlLWNvbHVtbiB7XG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLyogbWFyZ2luOiAwIDIwcHggMjBweCAyMHB4OyAqL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQtaW5mb3Mge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLyogcGFkZGluZzogMTBweDsgKi9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQtY29udGFpbmVyOmhvdmVyIC5wYWludC1pbmZvcyB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhaW50QmxvYztcbiJdfQ== */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/components/PaintBloc.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (PaintBloc);

/***/ })

})
//# sourceMappingURL=paints.js.e5134285131e23781f73.hot-update.js.map