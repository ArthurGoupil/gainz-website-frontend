webpackHotUpdate("static/development/pages/paints.js",{

/***/ "./pages/paints.js":
/*!*************************!*\
  !*** ./pages/paints.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-stack-grid */ "./node_modules/react-stack-grid/lib/index.js");
/* harmony import */ var react_stack_grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_stack_grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PaintBloc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PaintBloc */ "./components/PaintBloc.js");


var _jsxFileName = "/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/pages/paints.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var Paints = function Paints(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      paints = _useState[0],
      setPaints = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchPaints = function fetchPaints() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetchPaints$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://localhost:3100/paints"));

            case 3:
              response = _context.sent;
              setPaints(response.data);
              setIsLoading(false);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0.message);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 8]], Promise);
    };

    fetchPaints();
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, !isLoading ? __jsx("div", {
    className: "jsx-1355143799" + " " + "grid-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(react_stack_grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
    columnWidth: "33.33333%",
    gutterWidth: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, paints.map(function (paint) {
    return __jsx(_components_PaintBloc__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: paint._id
    }, paint, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1355143799",
    __self: this
  }, ".grid-wrapper.jsx-1355143799{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvcGFnZXMvcGFpbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DYSxBQUc0QixXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvcGFnZXMvcGFpbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgU3RhY2tHcmlkIGZyb20gXCJyZWFjdC1zdGFjay1ncmlkXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUGFpbnRCbG9jIGZyb20gXCIuLi9jb21wb25lbnRzL1BhaW50QmxvY1wiO1xuXG5jb25zdCBQYWludHMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtwYWludHMsIHNldFBhaW50c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUGFpbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMxMDAvcGFpbnRzXCIpO1xuICAgICAgICBzZXRQYWludHMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoUGFpbnRzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7IWlzTG9hZGluZyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLXdyYXBwZXJcIj5cbiAgICAgICAgICA8U3RhY2tHcmlkIGNvbHVtbldpZHRoPVwiMzMuMzMzMzMlXCIgZ3V0dGVyV2lkdGg9ezB9PlxuICAgICAgICAgICAge3BhaW50cy5tYXAocGFpbnQgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPFBhaW50QmxvYyBrZXk9e3BhaW50Ll9pZH0gey4uLnBhaW50fSAvPjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU3RhY2tHcmlkPlxuICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAuZ3JpZC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxzcGFuPnRlc3Q8L3NwYW4+XG4gICAgICApfVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFpbnRzO1xuIl19 */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/pages/paints.js */")) : __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "test"));
};

/* harmony default export */ __webpack_exports__["default"] = (Paints);

/***/ })

})
//# sourceMappingURL=paints.js.90a077535d8267503e9d.hot-update.js.map