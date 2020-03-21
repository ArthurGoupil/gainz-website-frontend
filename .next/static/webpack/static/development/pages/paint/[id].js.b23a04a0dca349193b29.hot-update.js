webpackHotUpdate("static/development/pages/paint/[id].js",{

/***/ "./pages/paint/[id].js":
/*!*****************************!*\
  !*** ./pages/paint/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");

var _jsxFileName = "/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/pages/paint/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Paint = function Paint(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      paint = _useState[0],
      setPaint = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var id = router.query.id;
  var fetchPaint = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!id) {
              _context.next = 12;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://localhost:3100/paint/".concat(id)));

          case 4:
            response = _context.sent;
            setPaint(response.data);
            setIsLoading(false);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0.message);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 9]], Promise);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchPaint();
  }, [id]);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, !isLoading ? __jsx("img", {
    src: paint.bigImage,
    alt: "",
    className: "jsx-3246871299" + " " + "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }) : __jsx("span", {
    className: "jsx-3246871299",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "test"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3246871299",
    __self: this
  }, ".image.jsx-3246871299{height:calc(100% - 300px);width:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvcGFnZXMvcGFpbnQvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2tCLEFBR3FDLDBCQUNoQixVQUNaIiwiZmlsZSI6Ii9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvcGFnZXMvcGFpbnQvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBQYWludCA9IHByb3BzID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtwYWludCwgc2V0UGFpbnRdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmlkO1xuXG4gIGNvbnN0IGZldGNoUGFpbnQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDozMTAwL3BhaW50LyR7aWR9YCk7XG4gICAgICAgIHNldFBhaW50KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUGFpbnQoKTtcbiAgfSwgW2lkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgeyFpc0xvYWRpbmcgPyAoXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e3BhaW50LmJpZ0ltYWdlfSBhbHQ9XCJcIiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4+dGVzdDwvc3Bhbj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMDBweCk7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFpbnQ7XG4iXX0= */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/pages/paint/[id].js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Paint);

/***/ })

})
//# sourceMappingURL=[id].js.b23a04a0dca349193b29.hot-update.js.map