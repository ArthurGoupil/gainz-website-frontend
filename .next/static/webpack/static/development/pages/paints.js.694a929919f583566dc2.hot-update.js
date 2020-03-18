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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4244902155", [photo.width, photo.height]]]) + " " + ((!isMiddleColumn ? "paint-container d-flex justify-center align-center" : "paint-container middle-column d-flex justify-center align-center") || ""),
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
      lineNumber: 16
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4244902155", [photo.width, photo.height]]]) + " " + "paint-infos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, name.toUpperCase()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4244902155",
    dynamic: [photo.width, photo.height],
    __self: this
  }, ".paint-container.__jsx-style-dynamic-selector{width:".concat(photo.width, ";height:").concat(photo.height, ";position:relative;cursor:pointer;font-size:2rem;}.paint.__jsx-style-dynamic-selector{-webkit-transition:0.2s;transition:0.2s;}.paint-container.__jsx-style-dynamic-selector:hover .paint.__jsx-style-dynamic-selector{-webkit-filter:contrast(1.2) brightness(0.5);filter:contrast(1.2) brightness(0.5);-webkit-transition:0.2s;transition:0.2s;}.middle-column.__jsx-style-dynamic-selector{margin:0 20px 20px 20px;}.paint-infos.__jsx-style-dynamic-selector{color:white;font-weight:bold;position:absolute;padding:10px;border-radius:5px;opacity:0;-webkit-transition:0.2s;transition:0.2s;}.paint-container.__jsx-style-dynamic-selector:hover .paint-infos.__jsx-style-dynamic-selector{opacity:1;-webkit-transition:0.2s;transition:0.2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWludEJsb2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JXLEFBR2tELEFBVW5CLEFBR3FCLEFBSWIsQUFHWixBQVNGLFVBQ00sRUFUQyxZQUhuQixLQUlvQixNQXJCa0IsS0FVdEMsT0FZZSxHQVFmLFVBUG9CLFdBdEJBLE9BdUJSLElBWE0sTUFZQSxDQXZCRCxlQUNBLGVBQ2pCLEdBVUEsTUFZQSIsImZpbGUiOiIvVXNlcnMvQXJ0aHVyR291cGlsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm9qZWN0cy9SZWFjdC9nYWluei13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvUGFpbnRCbG9jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBQYWludEJsb2MgPSAoXG4gIHsgX2lkLCBuYW1lLCBkZXRhaWxzLCBkaW1lbnNpb25zLCBkYXRlLCBzbWFsbEltYWdlLCBiaWdJbWFnZSB9LFxuICBwaG90b1xuKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj1cIi9wYWludC9baWRdXCIgYXM9e2AvcGFpbnQvJHtuYW1lfWB9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICFpc01pZGRsZUNvbHVtblxuICAgICAgICAgICAgPyBcInBhaW50LWNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCJcbiAgICAgICAgICAgIDogXCJwYWludC1jb250YWluZXIgbWlkZGxlLWNvbHVtbiBkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCJcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBhaW50XCIgc3JjPXtzbWFsbEltYWdlfSBhbHQ9e25hbWV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFpbnQtaW5mb3NcIj57bmFtZS50b1VwcGVyQ2FzZSgpfTwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucGFpbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgd2lkdGg6ICR7cGhvdG8ud2lkdGh9O1xuICAgICAgICAgICAgICBoZWlnaHQ6ICR7cGhvdG8uaGVpZ2h0fTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWludCB7XG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWludC1jb250YWluZXI6aG92ZXIgLnBhaW50IHtcbiAgICAgICAgICAgICAgZmlsdGVyOiBjb250cmFzdCgxLjIpIGJyaWdodG5lc3MoMC41KTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5taWRkbGUtY29sdW1uIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHggMjBweCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhaW50LWluZm9zIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQtY29udGFpbmVyOmhvdmVyIC5wYWludC1pbmZvcyB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhaW50QmxvYztcbiJdfQ== */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/components/PaintBloc.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PaintBloc);

/***/ })

})
//# sourceMappingURL=paints.js.694a929919f583566dc2.hot-update.js.map