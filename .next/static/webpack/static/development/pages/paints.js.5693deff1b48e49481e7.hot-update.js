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
      photo = _ref.photo;
  console.log(photo);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/paint/[id]",
    as: "/paint/".concat(name),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1806442828", [photo.width, photo.height]]]) + " " + "paint-container d-flex justify-center align-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("img", {
    src: smallImage,
    alt: name,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1806442828", [photo.width, photo.height]]]) + " " + "paint",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1806442828", [photo.width, photo.height]]]) + " " + "paint-infos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, name.toUpperCase()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1806442828",
    dynamic: [photo.width, photo.height],
    __self: this
  }, ".paint-container.__jsx-style-dynamic-selector{width:".concat(photo.width, "px;height:").concat(photo.height, "px;position:relative;cursor:pointer;font-size:2rem;}.paint.__jsx-style-dynamic-selector{-webkit-transition:0.2s;transition:0.2s;}.paint-container.__jsx-style-dynamic-selector:hover .paint.__jsx-style-dynamic-selector{-webkit-filter:contrast(1.2) brightness(0.5);filter:contrast(1.2) brightness(0.5);-webkit-transition:0.2s;transition:0.2s;}.paint-infos.__jsx-style-dynamic-selector{color:white;font-weight:bold;position:absolute;padding:10px;border-radius:5px;opacity:0;-webkit-transition:0.2s;transition:0.2s;}.paint-container.__jsx-style-dynamic-selector:hover .paint-infos.__jsx-style-dynamic-selector{opacity:1;-webkit-transition:0.2s;transition:0.2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWludEJsb2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JXLEFBR29ELEFBVXJCLEFBR3FCLEFBU3pCLEFBU0YsVUFDTSxFQVRDLGlCQUNDLFFBdkJvQixHQVV4QyxPQWNlLEdBUWYsVUFQb0IsZUF4QkEsR0F5QlIsSUFiTSxNQWNBLEtBekJELGVBQ0EsY0FXakIsQ0FWQSxLQXdCQSIsImZpbGUiOiIvVXNlcnMvQXJ0aHVyR291cGlsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm9qZWN0cy9SZWFjdC9nYWluei13ZWJzaXRlL2Zyb250ZW5kL2NvbXBvbmVudHMvUGFpbnRCbG9jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBQYWludEJsb2MgPSAoe1xuICBfaWQsXG4gIG5hbWUsXG4gIGRldGFpbHMsXG4gIGRpbWVuc2lvbnMsXG4gIGRhdGUsXG4gIHNtYWxsSW1hZ2UsXG4gIGJpZ0ltYWdlLFxuICBwaG90b1xufSkgPT4ge1xuICBjb25zb2xlLmxvZyhwaG90byk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPVwiL3BhaW50L1tpZF1cIiBhcz17YC9wYWludC8ke25hbWV9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhaW50LWNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicGFpbnRcIiBzcmM9e3NtYWxsSW1hZ2V9IGFsdD17bmFtZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWludC1pbmZvc1wiPntuYW1lLnRvVXBwZXJDYXNlKCl9PC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5wYWludC1jb250YWluZXIge1xuICAgICAgICAgICAgICB3aWR0aDogJHtwaG90by53aWR0aH1weDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAke3Bob3RvLmhlaWdodH1weDtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWludCB7XG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWludC1jb250YWluZXI6aG92ZXIgLnBhaW50IHtcbiAgICAgICAgICAgICAgZmlsdGVyOiBjb250cmFzdCgxLjIpIGJyaWdodG5lc3MoMC41KTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5taWRkbGUtY29sdW1uIHtcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvKiBtYXJnaW46IDAgMjBweCAyMHB4IDIwcHg7ICovXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWludC1pbmZvcyB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhaW50LWNvbnRhaW5lcjpob3ZlciAucGFpbnQtaW5mb3Mge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWludEJsb2M7XG4iXX0= */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/components/PaintBloc.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PaintBloc);

/***/ })

})
//# sourceMappingURL=paints.js.5693deff1b48e49481e7.hot-update.js.map