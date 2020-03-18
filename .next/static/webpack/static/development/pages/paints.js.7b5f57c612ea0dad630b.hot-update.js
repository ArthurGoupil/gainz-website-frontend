webpackHotUpdate("static/development/pages/paints.js",{

/***/ "./components/SelectedImage.js":
/*!*************************************!*\
  !*** ./components/SelectedImage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/ArthurGoupil/Documents/Development/Projects/React/gainz-website/frontend/components/SelectedImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Checkmark = function Checkmark(_ref) {
  var selected = _ref.selected;
  return __jsx("div", {
    style: selected ? {
      left: "4px",
      top: "4px",
      position: "absolute",
      zIndex: "1"
    } : {
      display: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: "white",
      position: "absolute"
    },
    width: "24px",
    height: "24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("circle", {
    cx: "12.5",
    cy: "12.2",
    r: "8.292",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("svg", {
    style: {
      fill: "#06befa",
      position: "absolute"
    },
    width: "24px",
    height: "24px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })));
};

var imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
var selectedImgStyle = {
  transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
var cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

var SelectedImage = function SelectedImage(_ref2) {
  var index = _ref2.index,
      photo = _ref2.photo,
      margin = _ref2.margin,
      direction = _ref2.direction,
      top = _ref2.top,
      left = _ref2.left,
      selected = _ref2.selected;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(selected),
      isSelected = _useState[0],
      setIsSelected = _useState[1]; //calculate x,y scale


  var sx = (100 - 30 / photo.width * 100) / 100;
  var sy = (100 - 30 / photo.height * 100) / 100;
  selectedImgStyle.transform = "translateZ(0px) scale3d(".concat(sx, ", ").concat(sy, ", 1)");

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  var handleOnClick = function handleOnClick(e) {
    setIsSelected(!isSelected);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setIsSelected(selected);
  }, [selected]);
  return __jsx("div", {
    style: _objectSpread({
      margin: margin,
      height: photo.height,
      width: photo.width
    }, cont),
    className: !isSelected ? "not-selected" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(Checkmark, {
    selected: isSelected ? true : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx("img", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    alt: photo.title,
    style: isSelected ? _objectSpread({}, imgStyle, {}, selectedImgStyle) : _objectSpread({}, imgStyle)
  }, photo, {
    onClick: handleOnClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, ".not-selected:hover{outline:2px solid #06befa}"));
};

/* harmony default export */ __webpack_exports__["default"] = (SelectedImage);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

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
  //   <PaintBloc key={key} margin={"20px"} index={index} photo={photo} />;
  // });

  var imageRenderer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (_ref) {
    var index = _ref.index,
        left = _ref.left,
        top = _ref.top,
        key = _ref.key,
        photo = _ref.photo;
    return __jsx(_components_SelectedImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      selected: selectAll ? true : false,
      key: key,
      margin: "2px",
      index: index,
      photo: photo,
      left: left,
      top: top,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    });
  }, [selectAll]);
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
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, !isLoading ? __jsx(react_photo_gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
    photos: paintsGrid,
    renderImage: imageRenderer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }) : __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "test"));
};

/* harmony default export */ __webpack_exports__["default"] = (Paints);

/***/ })

})
//# sourceMappingURL=paints.js.7b5f57c612ea0dad630b.hot-update.js.map