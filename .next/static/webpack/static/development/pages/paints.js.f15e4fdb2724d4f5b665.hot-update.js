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
      date = _ref.date,
      smallImage = _ref.smallImage,
      bigImage = _ref.bigImage;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/paint/[id]",
    as: "/paint/".concat(name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3151737990" + " " + "paint-container d-flex justify-center align-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("img", {
    src: smallImage,
    alt: name,
    className: "jsx-3151737990" + " " + "paint",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3151737990" + " " + "paint-infos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, name.toUpperCase()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3151737990",
    __self: this
  }, ".paint-container.jsx-3151737990{position:relative;cursor:pointer;font-size:2rem;}.paint.jsx-3151737990{min-width:100%;-webkit-transition:0.2s;transition:0.2s;}.paint-container.jsx-3151737990:hover .paint.jsx-3151737990{-webkit-filter:contrast(1.2) brightness(0.5);filter:contrast(1.2) brightness(0.5);-webkit-transition:0.2s;transition:0.2s;}.paint-infos.jsx-3151737990{color:white;font-weight:bold;position:absolute;opacity:0;-webkit-transition:0.2s;transition:0.2s;}.paint-container.jsx-3151737990:hover .paint-infos.jsx-3151737990{opacity:1;-webkit-transition:0.2s;transition:0.2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWludEJsb2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU1csQUFHaUMsQUFLSCxBQUlzQixBQUt6QixBQU9GLFVBQ00sRUFQQyxHQVRELEdBTEQsV0FlRyxJQWRILGNBZUwsQ0FkWixFQW9CQSxLQWhCQSxFQVdrQix5QkFSQSxlQVNsQix5QkFSQSIsImZpbGUiOiIvVXNlcnMvQXJ0aHVyR291cGlsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm9qZWN0cy9SZWFjdC9nYWluei13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvUGFpbnRCbG9jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBQYWludEJsb2MgPSAoeyBfaWQsIG5hbWUsIGRldGFpbHMsIGRhdGUsIHNtYWxsSW1hZ2UsIGJpZ0ltYWdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPVwiL3BhaW50L1tpZF1cIiBhcz17YC9wYWludC8ke25hbWV9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhaW50LWNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGFpbnRcIiBzcmM9e3NtYWxsSW1hZ2V9IGFsdD17bmFtZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWludC1pbmZvc1wiPntuYW1lLnRvVXBwZXJDYXNlKCl9PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5wYWludC1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhaW50IHtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhaW50LWNvbnRhaW5lcjpob3ZlciAucGFpbnQge1xuICAgICAgICAgICAgICBmaWx0ZXI6IGNvbnRyYXN0KDEuMikgYnJpZ2h0bmVzcygwLjUpO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGFpbnQtaW5mb3Mge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQtY29udGFpbmVyOmhvdmVyIC5wYWludC1pbmZvcyB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhaW50QmxvYztcbiJdfQ== */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/components/PaintBloc.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (PaintBloc);

/***/ })

})
//# sourceMappingURL=paints.js.f15e4fdb2724d4f5b665.hot-update.js.map