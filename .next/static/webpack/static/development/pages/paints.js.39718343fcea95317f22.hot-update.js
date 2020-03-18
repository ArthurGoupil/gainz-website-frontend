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
    className: "jsx-2015722340" + " " + ((!isMiddleColumn ? "paint-container d-flex justify-center align-center" : "paint-container middle-column d-flex justify-center align-center") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    src: smallImage,
    alt: name,
    className: "jsx-2015722340" + " " + "paint",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2015722340" + " " + "paint-infos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, name.toUpperCase()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2015722340",
    __self: this
  }, ".paint-container.jsx-2015722340{margin-bottom:20px;position:relative;cursor:pointer;font-size:2rem;}.paint.jsx-2015722340{width:100%;-webkit-transition:0.2s;transition:0.2s;}.paint-container.jsx-2015722340:hover .paint.jsx-2015722340{-webkit-filter:contrast(1.2) brightness(0.5);filter:contrast(1.2) brightness(0.5);-webkit-transition:0.2s;transition:0.2s;}.middle-column.jsx-2015722340{margin:0 20px 20px 20px;}.paint-infos.jsx-2015722340{color:white;font-weight:bold;position:absolute;padding:10px;border-radius:5px;opacity:0;-webkit-transition:0.2s;transition:0.2s;}.paint-container.jsx-2015722340:hover .paint-infos.jsx-2015722340{opacity:1;-webkit-transition:0.2s;transition:0.2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWludEJsb2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JXLEFBR2tDLEFBTVIsQUFJMEIsQUFJYixBQUdaLEFBU0YsVUFDTSxDQXBCQSxDQVdDLE9BakJDLEtBY3BCLEtBSW9CLFFBakJILFVBa0JGLEdBUWYsQ0FwQkEsQ0FMaUIsUUFrQkcsT0FqQnBCLFdBa0JZLElBWE0sTUFZQSxrQ0FYbEIsTUFZQSIsImZpbGUiOiIvVXNlcnMvQXJ0aHVyR291cGlsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm9qZWN0cy9SZWFjdC9nYWluei13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvUGFpbnRCbG9jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBQYWludEJsb2MgPSAoe1xuICBfaWQsXG4gIG5hbWUsXG4gIGRldGFpbHMsXG4gIGRpbWVuc2lvbnMsXG4gIGRhdGUsXG4gIHNtYWxsSW1hZ2UsXG4gIGJpZ0ltYWdlLFxuICBpc01pZGRsZUNvbHVtblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9XCIvcGFpbnQvW2lkXVwiIGFzPXtgL3BhaW50LyR7bmFtZX1gfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAhaXNNaWRkbGVDb2x1bW5cbiAgICAgICAgICAgID8gXCJwYWludC1jb250YWluZXIgZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlclwiXG4gICAgICAgICAgICA6IFwicGFpbnQtY29udGFpbmVyIG1pZGRsZS1jb2x1bW4gZC1mbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWNlbnRlclwiXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwYWludFwiIHNyYz17c21hbGxJbWFnZX0gYWx0PXtuYW1lfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhaW50LWluZm9zXCI+e25hbWUudG9VcHBlckNhc2UoKX08L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnBhaW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWludC1jb250YWluZXI6aG92ZXIgLnBhaW50IHtcbiAgICAgICAgICAgICAgZmlsdGVyOiBjb250cmFzdCgxLjIpIGJyaWdodG5lc3MoMC41KTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5taWRkbGUtY29sdW1uIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMjBweCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhaW50LWluZm9zIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQtY29udGFpbmVyOmhvdmVyIC5wYWludC1pbmZvcyB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhaW50QmxvYztcbiJdfQ== */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/components/PaintBloc.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (PaintBloc);

/***/ })

})
//# sourceMappingURL=paints.js.39718343fcea95317f22.hot-update.js.map