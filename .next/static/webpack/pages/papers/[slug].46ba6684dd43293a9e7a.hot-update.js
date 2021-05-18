self["webpackHotUpdate_N_E"]("pages/papers/[slug]",{

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js").default;

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ExpandMore.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ExpandMore.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/utils/createSvgIcon.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _utils.createSvgIcon;
  }
}));

var _utils = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");

/***/ }),

/***/ "./pages/papers/[slug].tsx":
/*!*********************************!*\
  !*** ./pages/papers/[slug].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _dummy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dummy */ "./dummy/index.ts");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Accordion */ "./node_modules/@material-ui/core/esm/Accordion/index.js");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "./node_modules/@material-ui/core/esm/AccordionSummary/index.js");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "./node_modules/@material-ui/core/esm/AccordionDetails/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/bhairaja/mloverflow-next/pages/papers/[slug].tsx",
    _this = undefined,
    _s = $RefreshSig$();












var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
  return {
    root: {
      marginTop: 40
    },
    container: {},
    title: {
      textAlign: "center",
      fontSize: 36
    },
    authors: {
      marginBottom: 20,
      textAlign: "center"
    },
    eachAuthor: {
      marginRight: 10,
      marginBottom: 10,
      fontStyle: "italic",
      color: "blue",
      "&:hover": {
        cursor: "pointer"
      }
    },
    "abstract": {},
    beautify: {
      marginBottom: 20
    },
    specialLabel: {
      marginTop: 10,
      display: "flex",
      borderBottom: "5px solid teal",
      width: "fit-content",
      marginBottom: 10
    },
    label: {
      fontSize: 16,
      fontWeight: "bold"
    },
    meta: {},
    icon: {
      width: 20,
      height: 20,
      marginRight: 10
    },
    date: {},
    link: {
      textDecoration: "none"
    },
    code: {
      textDecoration: "none"
    },
    langIcon: {
      width: 20,
      height: 20,
      marginLeft: 10
    },
    tags: {
      marginTop: 10
    },
    tag: {
      background: "#800000",
      color: "#fff",
      width: "fit-content",
      padding: 4,
      borderRadius: 4,
      "&:hover": {
        background: "#000"
      }
    }
  };
});

var PaperPage = function PaperPage(props) {
  _s();

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),
      query = _useRouter.query;

  var slug = query.slug;
  var classes = useStyles();
  var data = _dummy__WEBPACK_IMPORTED_MODULE_4__.DUMMY_PAPER[0];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "Paper"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: classes.title,
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.authors,
        children: data.authors.map(function (author) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes.eachAuthor,
            children: author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 20
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("abstract", "ABSTRACT", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes["abstract"],
          children: data["abstract"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this), data.tags && data.tags.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.tags,
          children: data.tags.map(function (tag) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.tag,
              children: tag.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 24
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__.default, {
          expandIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, _this),
          "aria-controls": "panel1a-content",
          id: "panel1a-header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
            className: classes.heading,
            children: "Accordion 1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_11__.default, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("clock", "PUBLISHED DATE", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.date,
              children: data.publishedDate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("info", "META", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.meta,
              children: data.meta
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("link", "LINK", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: data.link,
              className: "".concat(classes.link),
              target: "_blank",
              rel: "noopener noreferrer",
              children: data.link
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, _this), data.codes && data.codes.length > 0 && data.codes[0].link && data.codes[0].language && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("code", "CODE", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: data.codes[0].link,
              className: classes.code,
              target: "_blank",
              rel: "noopener noreferrer",
              children: data.codes[0].link
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              alt: "",
              src: "/".concat(data.codes[0].language, ".svg"),
              className: classes.langIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }, _this);
};

_s(PaperPage, "vvh9GKDmGg2swX3NqEAQicIBfAI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, useStyles];
});

_c = PaperPage;

var specialLabel = function specialLabel(icon, label, classes) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.specialLabel,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/".concat(icon, ".svg"),
          alt: "",
          className: classes.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 194,
    columnNumber: 5
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (PaperPage);

var _c;

$RefreshReg$(_c, "PaperPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy91dGlscy9jcmVhdGVTdmdJY29uLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wYXBlcnMvW3NsdWddLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luVG9wIiwiY29udGFpbmVyIiwidGl0bGUiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImF1dGhvcnMiLCJtYXJnaW5Cb3R0b20iLCJlYWNoQXV0aG9yIiwibWFyZ2luUmlnaHQiLCJmb250U3R5bGUiLCJjb2xvciIsImN1cnNvciIsImJlYXV0aWZ5Iiwic3BlY2lhbExhYmVsIiwiZGlzcGxheSIsImJvcmRlckJvdHRvbSIsIndpZHRoIiwibGFiZWwiLCJmb250V2VpZ2h0IiwibWV0YSIsImljb24iLCJoZWlnaHQiLCJkYXRlIiwibGluayIsInRleHREZWNvcmF0aW9uIiwiY29kZSIsImxhbmdJY29uIiwibWFyZ2luTGVmdCIsInRhZ3MiLCJ0YWciLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIlBhcGVyUGFnZSIsInByb3BzIiwidXNlUm91dGVyIiwicXVlcnkiLCJzbHVnIiwiY2xhc3NlcyIsImRhdGEiLCJEVU1NWV9QQVBFUiIsIm1hcCIsImF1dGhvciIsIm5hbWUiLCJsZW5ndGgiLCJoZWFkaW5nIiwicHVibGlzaGVkRGF0ZSIsImNvZGVzIiwibGFuZ3VhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNQckUsY0FBYyxtSEFBbUQ7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUIsUTs7Ozs7Ozs7OztBQ3JEckU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHNCQUF5QixtQkFBbUIseUJBQXlCO0FBQ3pFLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxzQkFBeUIsbUJBQW1CLHlCQUF5QjtBQUN6RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUIsUTs7Ozs7Ozs7Ozs7QUNyQnhEOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixlQUFlOztBQUVmLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQSxDQUFDOztBQUVELGVBQWUsWTs7Ozs7Ozs7Ozs7QUNuQkY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFD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LGVBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0ZELENBM0ZEOztHQUFNTyxTO1VBQ2NFLGtELEVBRUZ2QyxTOzs7S0FIWnFDLFM7O0FBNkZOLElBQU1wQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTyxJQUFELEVBQWVILEtBQWYsRUFBOEJxQixPQUE5QixFQUF3RDtBQUMzRSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxPQUFPLENBQUN6QixZQUF4QjtBQUFBLDhCQUNFO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLGFBQU1PLElBQU4sU0FBUjtBQUEwQixhQUFHLEVBQUMsRUFBOUI7QUFBaUMsbUJBQVMsRUFBRWtCLE9BQU8sQ0FBQ2xCO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUVrQixPQUFPLENBQUNyQixLQUF4QjtBQUFBLGtCQUFnQ0E7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWEQ7O0FBYUEsK0RBQWVnQixTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhcGVycy9bc2x1Z10uNDZiYTY2ODRkZDQzMjkzYTllN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7XG4gIHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7XG4gICAgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wO1xuICB9KShub2RlSW50ZXJvcCk7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHtcbiAgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE2LjU5IDguNTlMMTIgMTMuMTcgNy40MSA4LjU5IDYgMTBsNiA2IDYtNnpcIlxufSksICdFeHBhbmRNb3JlJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdXRpbHMuY3JlYXRlU3ZnSWNvbjtcbiAgfVxufSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IERVTU1ZX1BBUEVSIH0gZnJvbSBcIi4uLy4uL2R1bW15XCI7XG5pbXBvcnQgeyBDbGFzc05hbWVNYXAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCI7XG5pbXBvcnQgQWNjb3JkaW9uU3VtbWFyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeVwiO1xuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHNcIjtcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge31cbmludGVyZmFjZSBJUGFwZXIge1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3JzOiB7IG5hbWU6IHN0cmluZyB9W107XG4gIGFic3RyYWN0OiBzdHJpbmc7XG4gIHB1Ymxpc2hlZERhdGU6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xuICBtb2RlbD86IHN0cmluZztcbiAgZGF0YXNldHM/OiBzdHJpbmc7XG4gIG1ldGE/OiBzdHJpbmc7XG4gIHRhZ3M/OiB7IG5hbWU6IHN0cmluZyB9W107XG4gIGNvZGVzPzogeyBsYW5ndWFnZTogc3RyaW5nOyBsaW5rOiBzdHJpbmcgfVtdO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBtYXJnaW5Ub3A6IDQwLFxuICB9LFxuICBjb250YWluZXI6IHt9LFxuICB0aXRsZToge1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogMzYsXG4gIH0sXG4gIGF1dGhvcnM6IHtcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgfSxcbiAgZWFjaEF1dGhvcjoge1xuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgfSxcbiAgfSxcbiAgYWJzdHJhY3Q6IHt9LFxuICBiZWF1dGlmeToge1xuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gIH0sXG5cbiAgc3BlY2lhbExhYmVsOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBib3JkZXJCb3R0b206IFwiNXB4IHNvbGlkIHRlYWxcIixcbiAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxuICBtZXRhOiB7fSxcbiAgaWNvbjoge1xuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgfSxcbiAgZGF0ZToge30sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIH0sXG4gIGNvZGU6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIH0sXG4gIGxhbmdJY29uOiB7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gIH0sXG4gIHRhZ3M6IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICB9LFxuICB0YWc6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiM4MDAwMDBcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICBwYWRkaW5nOiA0LFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgUGFwZXJQYWdlOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHNsdWcgPSBxdWVyeS5zbHVnO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgZGF0YTogSVBhcGVyID0gRFVNTVlfUEFQRVJbMF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJQYXBlclwiIC8+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PntkYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRob3JzfT5cbiAgICAgICAgICB7ZGF0YS5hdXRob3JzLm1hcCgoYXV0aG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmVhY2hBdXRob3J9PnthdXRob3IubmFtZX08L3NwYW4+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJhYnN0cmFjdFwiLCBcIkFCU1RSQUNUXCIsIGNsYXNzZXMpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFic3RyYWN0fT57ZGF0YS5hYnN0cmFjdH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2RhdGEudGFncyAmJiBkYXRhLnRhZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnc30+XG4gICAgICAgICAgICAgIHtkYXRhLnRhZ3MubWFwKCh0YWc6IHsgbmFtZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnfT57dGFnLm5hbWV9PC9kaXY+O1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxBY2NvcmRpb24+XG4gICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcbiAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDFhLWNvbnRlbnRcIlxuICAgICAgICAgICAgaWQ9XCJwYW5lbDFhLWhlYWRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PkFjY29yZGlvbiAxPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICAgICAge3NwZWNpYWxMYWJlbChcImNsb2NrXCIsIFwiUFVCTElTSEVEIERBVEVcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PntkYXRhLnB1Ymxpc2hlZERhdGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiaW5mb1wiLCBcIk1FVEFcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1ldGF9PntkYXRhLm1ldGF9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgICAgICB7c3BlY2lhbExhYmVsKFwibGlua1wiLCBcIkxJTktcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17ZGF0YS5saW5rfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfWB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkYXRhLmxpbmt9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7ZGF0YS5jb2RlcyAmJlxuICAgICAgICAgICAgICBkYXRhLmNvZGVzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgZGF0YS5jb2Rlc1swXS5saW5rICYmXG4gICAgICAgICAgICAgIGRhdGEuY29kZXNbMF0ubGFuZ3VhZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJjb2RlXCIsIFwiQ09ERVwiLCBjbGFzc2VzKX1cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2RhdGEuY29kZXNbMF0ubGlua31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvZGV9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jb2Rlc1swXS5saW5rfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2AvJHtkYXRhLmNvZGVzWzBdLmxhbmd1YWdlfS5zdmdgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFuZ0ljb259XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHNwZWNpYWxMYWJlbCA9IChpY29uOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIGNsYXNzZXM6IENsYXNzTmFtZU1hcCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGVjaWFsTGFiZWx9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtgLyR7aWNvbn0uc3ZnYH0gYWx0PVwiXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+e2xhYmVsfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXBlclBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9