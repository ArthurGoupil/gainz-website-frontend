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
    className: "jsx-238299370" + " " + "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }) : __jsx("span", {
    className: "jsx-238299370",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "test"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "238299370",
    __self: this
  }, ".image.jsx-238299370{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BcnRodXJHb3VwaWwvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2plY3RzL1JlYWN0L2dhaW56LXdlYnNpdGUvZnJvbnRlbmQvcGFnZXMvcGFpbnQvW2lkXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ2tCLEFBR3VCLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL0FydGh1ckdvdXBpbC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJvamVjdHMvUmVhY3QvZ2Fpbnotd2Vic2l0ZS9mcm9udGVuZC9wYWdlcy9wYWludC9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmNvbnN0IFBhaW50ID0gcHJvcHMgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3BhaW50LCBzZXRQYWludF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnkuaWQ7XG5cbiAgY29uc3QgZmV0Y2hQYWludCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMxMDAvcGFpbnQvJHtpZH1gKTtcbiAgICAgICAgc2V0UGFpbnQocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hQYWludCgpO1xuICB9LCBbaWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICB7IWlzTG9hZGluZyA/IChcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZVwiIHNyYz17cGFpbnQuYmlnSW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICApIDogKFxuICAgICAgICA8c3Bhbj50ZXN0PC9zcGFuPlxuICAgICAgKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhaW50O1xuIl19 */\n/*@ sourceURL=/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/pages/paint/[id].js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Paint);

/***/ })

})
//# sourceMappingURL=[id].js.81b0447b73dabd0f135a.hot-update.js.map