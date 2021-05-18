self["webpackHotUpdate_N_E"]("pages/papers/[slug]",{

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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
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
    container: {
      margin: 40,
      padding: 10
    },
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
    datasets: {
      textDecoration: "none"
    },
    langIcon: {
      width: 20,
      height: 20,
      marginLeft: 10
    },
    tags: {
      marginTop: 10,
      display: "flex",
      flexWrap: "wrap"
    },
    tag: {
      background: "#800000",
      color: "#fff",
      width: "fit-content",
      padding: 4,
      borderRadius: 4,
      "&:hover": {
        background: "#000",
        cursor: "pointer"
      },
      marginRight: 10,
      marginTop: 10
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightBold
    },
    detail: {
      display: "flex",
      flexDirection: "column"
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
      lineNumber: 127,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__.default, {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: classes.title,
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.authors,
        children: data.authors.map(function (author) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes.eachAuthor,
            children: author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 20
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("abstract", "ABSTRACT", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes["abstract"],
          children: data["abstract"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
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
              lineNumber: 146,
              columnNumber: 24
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7__.default, {
        defaultExpanded: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__.default, {
          expandIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, _this),
          "aria-controls": "panel1a-content",
          id: "panel1a-header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
            className: classes.heading,
            children: "Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_11__.default, {
          className: classes.detail,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("clock", "PUBLISHED DATE", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.date,
              children: data.publishedDate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("info", "META", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.meta,
              children: data.meta
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
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
              lineNumber: 173,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
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
              lineNumber: 189,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              alt: "",
              src: "/".concat(data.codes[0].language, ".svg"),
              className: classes.langIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 17
          }, _this), data.datasets && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("dataset", "DATASETS", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: data.datasets,
              className: "".concat(classes.datasets),
              target: "_blank",
              rel: "noopener noreferrer",
              children: data.datasets
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 15
          }, _this), data.link.startsWith("https://arxiv.org/abs/") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("pdf", "PDF", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://arxiv.org/pdf/".concat(data.link.split("/").slice(-1).pop()),
              className: "".concat(classes.pdf),
              target: "_blank",
              rel: "noopener noreferrer",
              children: "https://arxiv.org/pdf/".concat(data.link.split("/").slice(-1).pop())
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
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
          lineNumber: 250,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 247,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFwZXJzL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsIm1hcmdpbiIsInBhZGRpbmciLCJ0aXRsZSIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiYXV0aG9ycyIsIm1hcmdpbkJvdHRvbSIsImVhY2hBdXRob3IiLCJtYXJnaW5SaWdodCIsImZvbnRTdHlsZSIsImNvbG9yIiwiY3Vyc29yIiwiYmVhdXRpZnkiLCJzcGVjaWFsTGFiZWwiLCJkaXNwbGF5IiwiYm9yZGVyQm90dG9tIiwid2lkdGgiLCJsYWJlbCIsImZvbnRXZWlnaHQiLCJtZXRhIiwiaWNvbiIsImhlaWdodCIsImRhdGUiLCJsaW5rIiwidGV4dERlY29yYXRpb24iLCJjb2RlIiwiZGF0YXNldHMiLCJsYW5nSWNvbiIsIm1hcmdpbkxlZnQiLCJ0YWdzIiwiZmxleFdyYXAiLCJ0YWciLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiaGVhZGluZyIsInR5cG9ncmFwaHkiLCJweFRvUmVtIiwiZm9udFdlaWdodEJvbGQiLCJkZXRhaWwiLCJmbGV4RGlyZWN0aW9uIiwiUGFwZXJQYWdlIiwicHJvcHMiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInNsdWciLCJjbGFzc2VzIiwiZGF0YSIsIkRVTU1ZX1BBUEVSIiwibWFwIiwiYXV0aG9yIiwibmFtZSIsImxlbmd0aCIsInB1Ymxpc2hlZERhdGUiLCJjb2RlcyIsImxhbmd1YWdlIiwic3RhcnRzV2l0aCIsInNwbGl0Iiwic2xpY2UiLCJwb3AiLCJwZGYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0Ms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QUFDLFFBTlQ7QUFPRSxpQkFBRyxFQUFDLHFCQVBOO0FBQUEsd0RBUzRCYixJQUFJLENBQUN2QixJQUFMLENBQ3ZCaUMsS0FEdUIsQ0FDakIsR0FEaUIsRUFFdkJDLEtBRnVCLENBRWpCLENBQUMsQ0FGZ0IsRUFHdkJDLEdBSHVCLEVBVDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzSEQsQ0E3SEQ7O0dBQU1sQixTO1VBQ2NFLGtELEVBRUZoRCxTOzs7S0FIWjhDLFM7O0FBK0hOLElBQU0zQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTyxJQUFELEVBQWVILEtBQWYsRUFBOEI0QixPQUE5QixFQUF3RDtBQUMzRSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxPQUFPLENBQUNoQyxZQUF4QjtBQUFBLDhCQUNFO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLGFBQU1PLElBQU4sU0FBUjtBQUEwQixhQUFHLEVBQUMsRUFBOUI7QUFBaUMsbUJBQVMsRUFBRXlCLE9BQU8sQ0FBQ3pCO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUV5QixPQUFPLENBQUM1QixLQUF4QjtBQUFBLGtCQUFnQ0E7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWEQ7O0FBYUEsK0RBQWV1QixTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhcGVycy9bc2x1Z10uZDk4ODY5MTk4ZjBiZTBmZjhmN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xuaW1wb3J0IHsgRFVNTVlfUEFQRVIgfSBmcm9tIFwiLi4vLi4vZHVtbXlcIjtcbmltcG9ydCB7IENsYXNzTmFtZU1hcCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5XCI7XG5pbXBvcnQgQWNjb3JkaW9uRGV0YWlscyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlsc1wiO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuaW50ZXJmYWNlIElQYXBlciB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGF1dGhvcnM6IHsgbmFtZTogc3RyaW5nIH1bXTtcbiAgYWJzdHJhY3Q6IHN0cmluZztcbiAgcHVibGlzaGVkRGF0ZTogc3RyaW5nO1xuICBsaW5rOiBzdHJpbmc7XG4gIG1vZGVsPzogc3RyaW5nO1xuICBkYXRhc2V0cz86IHN0cmluZztcbiAgbWV0YT86IHN0cmluZztcbiAgdGFncz86IHsgbmFtZTogc3RyaW5nIH1bXTtcbiAgY29kZXM/OiB7IGxhbmd1YWdlOiBzdHJpbmc7IGxpbms6IHN0cmluZyB9W107XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpblRvcDogNDAsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIG1hcmdpbjogNDAsXG4gICAgcGFkZGluZzogMTAsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGZvbnRTaXplOiAzNixcbiAgfSxcbiAgYXV0aG9yczoge1xuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9LFxuICBlYWNoQXV0aG9yOiB7XG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICB9LFxuICB9LFxuICBhYnN0cmFjdDoge30sXG4gIGJlYXV0aWZ5OiB7XG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgfSxcblxuICBzcGVjaWFsTGFiZWw6IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGJvcmRlckJvdHRvbTogXCI1cHggc29saWQgdGVhbFwiLFxuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gIH0sXG4gIG1ldGE6IHt9LFxuICBpY29uOiB7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxuICB9LFxuICBkYXRlOiB7fSxcbiAgbGluazoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgfSxcbiAgY29kZToge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgfSxcbiAgZGF0YXNldHM6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIH0sXG4gIGxhbmdJY29uOiB7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gIH0sXG4gIHRhZ3M6IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgfSxcbiAgdGFnOiB7XG4gICAgYmFja2dyb3VuZDogXCIjODAwMDAwXCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgcGFkZGluZzogNCxcbiAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmQ6IFwiIzAwMFwiLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICB9LFxuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICB9LFxuICBoZWFkaW5nOiB7XG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgyMCksXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcbiAgfSxcbiAgZGV0YWlsOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgfSxcbn0pKTtcblxuY29uc3QgUGFwZXJQYWdlOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHNsdWcgPSBxdWVyeS5zbHVnO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgZGF0YTogSVBhcGVyID0gRFVNTVlfUEFQRVJbMF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJQYXBlclwiIC8+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57ZGF0YS50aXRsZX08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aG9yc30+XG4gICAgICAgICAge2RhdGEuYXV0aG9ycy5tYXAoKGF1dGhvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5lYWNoQXV0aG9yfT57YXV0aG9yLm5hbWV9PC9zcGFuPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiYWJzdHJhY3RcIiwgXCJBQlNUUkFDVFwiLCBjbGFzc2VzKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnN0cmFjdH0+e2RhdGEuYWJzdHJhY3R9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtkYXRhLnRhZ3MgJiYgZGF0YS50YWdzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ3N9PlxuICAgICAgICAgICAgICB7ZGF0YS50YWdzLm1hcCgodGFnOiB7IG5hbWU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ30+e3RhZy5uYW1lfTwvZGl2PjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRFeHBhbmRlZD5cbiAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxuICAgICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInBhbmVsMWEtY29udGVudFwiXG4gICAgICAgICAgICBpZD1cInBhbmVsMWEtaGVhZGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+RGV0YWlsczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgPEFjY29yZGlvbkRldGFpbHMgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJjbG9ja1wiLCBcIlBVQkxJU0hFRCBEQVRFXCIsIGNsYXNzZXMpfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXRlfT57ZGF0YS5wdWJsaXNoZWREYXRlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICAgICAge3NwZWNpYWxMYWJlbChcImluZm9cIiwgXCJNRVRBXCIsIGNsYXNzZXMpfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXRhfT57ZGF0YS5tZXRhfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICAgICAge3NwZWNpYWxMYWJlbChcImxpbmtcIiwgXCJMSU5LXCIsIGNsYXNzZXMpfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2RhdGEubGlua31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua31gfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF0YS5saW5rfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2RhdGEuY29kZXMgJiZcbiAgICAgICAgICAgICAgZGF0YS5jb2Rlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgIGRhdGEuY29kZXNbMF0ubGluayAmJlxuICAgICAgICAgICAgICBkYXRhLmNvZGVzWzBdLmxhbmd1YWdlICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiY29kZVwiLCBcIkNPREVcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtkYXRhLmNvZGVzWzBdLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2RlfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuY29kZXNbMF0ubGlua31cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgLyR7ZGF0YS5jb2Rlc1swXS5sYW5ndWFnZX0uc3ZnYH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhbmdJY29ufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2RhdGEuZGF0YXNldHMgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgICAgICAge3NwZWNpYWxMYWJlbChcImRhdGFzZXRcIiwgXCJEQVRBU0VUU1wiLCBjbGFzc2VzKX1cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17ZGF0YS5kYXRhc2V0c31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5kYXRhc2V0c31gfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtkYXRhLmRhdGFzZXRzfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7ZGF0YS5saW5rLnN0YXJ0c1dpdGgoXCJodHRwczovL2FyeGl2Lm9yZy9hYnMvXCIpICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJwZGZcIiwgXCJQREZcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2FyeGl2Lm9yZy9wZGYvJHtkYXRhLmxpbmtcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiL1wiKVxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoLTEpXG4gICAgICAgICAgICAgICAgICAgIC5wb3AoKX1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLnBkZn1gfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtgaHR0cHM6Ly9hcnhpdi5vcmcvcGRmLyR7ZGF0YS5saW5rXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi9cIilcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKC0xKVxuICAgICAgICAgICAgICAgICAgICAucG9wKCl9YH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgPC9QYXBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHNwZWNpYWxMYWJlbCA9IChpY29uOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIGNsYXNzZXM6IENsYXNzTmFtZU1hcCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGVjaWFsTGFiZWx9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtgLyR7aWNvbn0uc3ZnYH0gYWx0PVwiXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+e2xhYmVsfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXBlclBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9