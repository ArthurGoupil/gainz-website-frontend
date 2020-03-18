webpackHotUpdate("static/development/pages/paints.js",{

/***/ "./pages/paints.js":
/*!*************************!*\
  !*** ./pages/paints.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_photo_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-photo-gallery */ "./node_modules/react-photo-gallery/dist/react-photo-gallery.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PaintBloc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PaintBloc */ "./components/PaintBloc.js");
/* harmony import */ var _components_SelectedImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SelectedImage */ "./components/SelectedImage.js");

var _jsxFileName = "/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/pages/paints.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Paints = function Paints(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      paints = _useState[0],
      setPaints = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      paintsGrid = _useState2[0],
      setPaintsGrid = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isLoading = _useState3[0],
      setIsLoading = _useState3[1];

  var paintsArr = []; // const imageRenderer = useCallback(({ index, photo, key }) => {
  // });

  var fetchPaints = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:3100/paints"));

          case 3:
            response = _context.sent;
            setPaints(response.data);
            response.data.forEach(function (paint) {
              paintsArr.push({
                _id: paint._id,
                src: paint.smallImage,
                width: paint.width,
                height: paint.height
              });
            });
            setPaintsGrid(paintsArr);
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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetchPaints();
  }, []);
  var imageRenderer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (_ref) {
    var index = _ref.index,
        left = _ref.left,
        top = _ref.top,
        key = _ref.key,
        photo = _ref.photo;
    return console.log(paints);
  }, // <PaintBloc key={key} margin={"20px"} index={index} {...paints[index]} />
  // <SelectedImage
  //   selected={false}
  //   key={photo._id}
  //   margin={"2px"}
  //   index={index}
  //   photo={photo}
  //   left={left}
  //   top={top}
  // />
  []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, !isLoading ? __jsx(react_photo_gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
    photos: paintsGrid,
    renderImage: function renderImage(_ref2) {
      var index = _ref2.index,
          left = _ref2.left,
          top = _ref2.top,
          key = _ref2.key,
          photo = _ref2.photo;
      return console.log(paints);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }) : __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "test"));
};

/* harmony default export */ __webpack_exports__["default"] = (Paints);

/***/ })

})
//# sourceMappingURL=paints.js.a177b6a682f8029d01df.hot-update.js.map