webpackHotUpdate("static/development/pages/paints.js",{

/***/ "./components/PaintBloc.js":
/*!*********************************!*\
  !*** ./components/PaintBloc.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/components/PaintBloc.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var PaintBloc = function PaintBloc(_ref) {
  var _id = _ref._id,
      name = _ref.name,
      details = _ref.details,
      width = _ref.width,
      height = _ref.height,
      date = _ref.date,
      smallImage = _ref.smallImage,
      bigImage = _ref.bigImage,
      photo = _ref.photo,
      margin = _ref.margin;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/paint/[id]",
    as: "/paint/".concat(_id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2400635823", [margin]]]) + " " + "paint-container d-flex d-flex justify-center align-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, photo, {
    alt: name,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2400635823", [margin]]]) + " " + (photo && photo.className != null && photo.className || "paint"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2400635823", [margin]]]) + " " + "paint-infos d-flex flex-column align-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2400635823", [margin]]]) + " " + "paint-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, name.toUpperCase()), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2400635823", [margin]]]) + " " + "paint-dimensions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, width, "cm x ", height, "cm")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2400635823",
    dynamic: [margin],
    __self: this
  }, ".paint-container.__jsx-style-dynamic-selector{cursor:pointer;margin:".concat(margin, "px;position:relative;}.paint.__jsx-style-dynamic-selector{-webkit-transition:0.2s;transition:0.2s;}.paint-container.__jsx-style-dynamic-selector:hover .paint.__jsx-style-dynamic-selector{-webkit-filter:contrast(1.2) brightness(0.5);filter:contrast(1.2) brightness(0.5);-webkit-transition:0.2s;transition:0.2s;}.paint-infos.__jsx-style-dynamic-selector{position:absolute;}.paint-name.__jsx-style-dynamic-selector{color:white;font-size:2rem;font-weight:bold;margin-bottom:10px;opacity:0;-webkit-transition:0.2s;transition:0.2s;}.paint-dimensions.__jsx-style-dynamic-selector{color:white;font-size:1.5rem;font-style:italic;opacity:0;-webkit-transition:0.2s;transition:0.2s;}.paint-container.__jsx-style-dynamic-selector:hover .paint-name.__jsx-style-dynamic-selector,.paint-container.__jsx-style-dynamic-selector:hover .paint-dimensions.__jsx-style-dynamic-selector{opacity:1;-webkit-transition:0.2s;transition:0.2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWludEJsb2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJXLEFBRzhCLEFBS0MsQUFHcUIsQUFJbkIsQUFHTixBQVFBLEFBUUYsVUFDTSxFQWhCRCxBQVFFLEdBdkJxQixHQVl4QyxTQUltQixFQVFDLFdBbkJwQixJQVlxQixHQVFULEdBT1osR0EvQm9CLElBeUJGLE1BUk4sUUFoQlosRUFpQmtCLFNBWEEsZUFtQmxCLGdCQVBBLFNBWEEiLCJmaWxlIjoiL1VzZXJzL0FydGh1ckdvdXBpbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJvamVjdHMvUmVhY3QvZ2Fpbnotd2Vic2l0ZS9mcm9udGVuZC9jb21wb25lbnRzL1BhaW50QmxvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgUGFpbnRCbG9jID0gKHtcbiAgX2lkLFxuICBuYW1lLFxuICBkZXRhaWxzLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBkYXRlLFxuICBzbWFsbEltYWdlLFxuICBiaWdJbWFnZSxcbiAgcGhvdG8sXG4gIG1hcmdpblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9XCIvcGFpbnQvW2lkXVwiIGFzPXtgL3BhaW50LyR7X2lkfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWludC1jb250YWluZXIgZC1mbGV4IGQtZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwYWludFwiIHsuLi5waG90b30gYWx0PXtuYW1lfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhaW50LWluZm9zIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhaW50LW5hbWVcIj57bmFtZS50b1VwcGVyQ2FzZSgpfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFpbnQtZGltZW5zaW9uc1wiPlxuICAgICAgICAgICAge3dpZHRofWNtIHgge2hlaWdodH1jbVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnBhaW50LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiAke21hcmdpbn1weDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhaW50IHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWludC1jb250YWluZXI6aG92ZXIgLnBhaW50IHtcbiAgICAgICAgICAgICAgZmlsdGVyOiBjb250cmFzdCgxLjIpIGJyaWdodG5lc3MoMC41KTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWludC1pbmZvcyB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWludC1uYW1lIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhaW50LWRpbWVuc2lvbnMge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQtY29udGFpbmVyOmhvdmVyIC5wYWludC1uYW1lLFxuICAgICAgICAgICAgLnBhaW50LWNvbnRhaW5lcjpob3ZlciAucGFpbnQtZGltZW5zaW9ucyB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhaW50QmxvYztcbiJdfQ== */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/components/PaintBloc.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PaintBloc);

/***/ })

})
//# sourceMappingURL=paints.js.f2e9fe7b16e0e244a353.hot-update.js.map