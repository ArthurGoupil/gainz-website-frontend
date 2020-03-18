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
    className: "jsx-613289836" + " " + ((!isMiddleColumn ? "paint-container d-flex justify-center align-center" : "paint-container middle-column d-flex justify-center align-center") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    src: smallImage,
    alt: name,
    className: "jsx-613289836" + " " + "paint",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-613289836" + " " + "paint-infos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, name.toUpperCase()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "613289836",
    __self: this
  }, ".paint-container.jsx-613289836{position:relative;cursor:pointer;font-size:2rem;}.paint.jsx-613289836{-webkit-transition:0.2s;transition:0.2s;}.paint-container.jsx-613289836:hover .paint.jsx-613289836{-webkit-filter:contrast(1.2) brightness(0.5);filter:contrast(1.2) brightness(0.5);-webkit-transition:0.2s;transition:0.2s;}.middle-column.jsx-613289836{margin:0 20px 20px 20px;}.paint-infos.jsx-613289836{color:white;font-weight:bold;position:absolute;padding:10px;border-radius:5px;opacity:0;-webkit-transition:0.2s;transition:0.2s;}.paint-container.jsx-613289836:hover .paint-infos.jsx-613289836{opacity:1;-webkit-transition:0.2s;transition:0.2s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWludEJsb2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JXLEFBTWlDLEFBUUYsQUFHcUIsQUFJYixBQUdaLEFBU0YsVUFDTSxFQVRDLE1BbEJGLE1BZWpCLEtBSW9CLElBbEJILE9BT2pCLE9BWWUsQ0FsQmYsRUEwQkEsVUFQb0Isa0JBQ1IsSUFYTSxNQVlBLGtDQVhsQixNQVlBIiwiZmlsZSI6Ii9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvY29tcG9uZW50cy9QYWludEJsb2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFBhaW50QmxvYyA9ICh7XG4gIF9pZCxcbiAgbmFtZSxcbiAgZGV0YWlscyxcbiAgZGltZW5zaW9ucyxcbiAgZGF0ZSxcbiAgc21hbGxJbWFnZSxcbiAgYmlnSW1hZ2UsXG4gIGlzTWlkZGxlQ29sdW1uXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj1cIi9wYWludC9baWRdXCIgYXM9e2AvcGFpbnQvJHtuYW1lfWB9PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICFpc01pZGRsZUNvbHVtblxuICAgICAgICAgICAgPyBcInBhaW50LWNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCJcbiAgICAgICAgICAgIDogXCJwYWludC1jb250YWluZXIgbWlkZGxlLWNvbHVtbiBkLWZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCJcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBhaW50XCIgc3JjPXtzbWFsbEltYWdlfSBhbHQ9e25hbWV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFpbnQtaW5mb3NcIj57bmFtZS50b1VwcGVyQ2FzZSgpfTwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucGFpbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvKiBtYXJnaW4tYm90dG9tOiAyMHB4OyAqL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQge1xuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGFpbnQtY29udGFpbmVyOmhvdmVyIC5wYWludCB7XG4gICAgICAgICAgICAgIGZpbHRlcjogY29udHJhc3QoMS4yKSBicmlnaHRuZXNzKDAuNSk7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWlkZGxlLWNvbHVtbiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wYWludC1pbmZvcyB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBhaW50LWNvbnRhaW5lcjpob3ZlciAucGFpbnQtaW5mb3Mge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWludEJsb2M7XG4iXX0= */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/components/PaintBloc.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (PaintBloc);

/***/ })

})
//# sourceMappingURL=paints.js.b7f0be452c7105223e4d.hot-update.js.map