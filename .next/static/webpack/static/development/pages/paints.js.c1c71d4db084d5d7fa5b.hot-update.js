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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_photo_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-photo-gallery */ "./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PaintBloc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PaintBloc */ "./components/PaintBloc.js");


var _jsxFileName = "/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/pages/paints.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Paintings = function Paintings(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      paintings = _useState[0],
      setPaintings = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      paintingsGrid = _useState2[0],
      setPaintingsGrid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  var paintingsArr = [];
  var fetchPaintings = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://localhost:3100/paintings"));

          case 3:
            response = _context.sent;
            setPaintings(response.data);
            response.data.forEach(function (painting) {
              paintingsArr.push({
                src: painting.smallImage,
                width: painting.width,
                height: painting.height
              });
            });
            setPaintingsGrid(paintingsArr);
            setIsLoading(false);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0.message);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]], Promise);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchPaintings();
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, !isLoading ? __jsx(react_photo_gallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
    margin: 10,
    photos: paintingsGrid,
    limitNodeSearch: 3,
    targetRowHeight: 450,
    renderImage: function renderImage(_ref) {
      var index = _ref.index,
          photo = _ref.photo,
          margin = _ref.margin;
      return __jsx(_components_PaintBloc__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: paintings[index]._id,
        index: index,
        photo: photo,
        margin: margin
      }, paintings[index], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }) : __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "test"));
};

/* harmony default export */ __webpack_exports__["default"] = (Paintings);

/***/ })

})
//# sourceMappingURL=paints.js.c1c71d4db084d5d7fa5b.hot-update.js.map