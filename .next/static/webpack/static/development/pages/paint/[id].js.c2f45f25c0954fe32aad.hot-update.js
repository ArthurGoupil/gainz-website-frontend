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





var Painting = function Painting(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      painting = _useState[0],
      setPainting = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var id = router.query.id;
  var fetchPainting = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function _callee() {
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
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://localhost:3100/painting/".concat(id)));

          case 4:
            response = _context.sent;
            setPainting(response.data);
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
    fetchPainting();
  }, [id]);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, !isLoading ? __jsx("img", {
    src: painting.bigImage,
    alt: "",
    className: "jsx-3827894570" + " " + "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }) : __jsx("span", {
    className: "jsx-3827894570",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "test"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3827894570",
    __self: this
  }, ".image.jsx-3827894570{height:calc(100vh - 155px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvcGFnZXMvcGFpbnQvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2tCLEFBR3NDLDJCQUM3QiIsImZpbGUiOiIvVXNlcnMvQXJ0aHVyR291cGlsL0RvY3VtZW50cy9EZXZlbG9wbWVudC9Qcm9qZWN0cy9SZWFjdC9nYWluei13ZWJzaXRlL2Zyb250ZW5kL3BhZ2VzL3BhaW50L1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgUGFpbnRpbmcgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbcGFpbnRpbmcsIHNldFBhaW50aW5nXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBpZCA9IHJvdXRlci5xdWVyeS5pZDtcblxuICBjb25zdCBmZXRjaFBhaW50aW5nID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzEwMC9wYWludGluZy8ke2lkfWBcbiAgICAgICAgKTtcbiAgICAgICAgc2V0UGFpbnRpbmcocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hQYWludGluZygpO1xuICB9LCBbaWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7IWlzTG9hZGluZyA/IChcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZVwiIHNyYz17cGFpbnRpbmcuYmlnSW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICApIDogKFxuICAgICAgICA8c3Bhbj50ZXN0PC9zcGFuPlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTVweCk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhaW50O1xuIl19 */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/pages/paint/[id].js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Paint);

/***/ })

})
//# sourceMappingURL=[id].js.c2f45f25c0954fe32aad.hot-update.js.map