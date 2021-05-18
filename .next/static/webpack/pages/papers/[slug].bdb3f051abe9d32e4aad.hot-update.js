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
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    detail: {
      display: "flex",
      flexDirection: "column"
    },
    detailContainer: {
      marginBottom: 40
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
      lineNumber: 119,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: classes.title,
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.authors,
        children: data.authors.map(function (author) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes.eachAuthor,
            children: author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 20
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("abstract", "ABSTRACT", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes["abstract"],
          children: data["abstract"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
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
              lineNumber: 138,
              columnNumber: 24
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7__.default, {
        className: classes.detailContainer,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__.default, {
          expandIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }, _this),
          "aria-controls": "panel1a-content",
          id: "panel1a-header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
            className: classes.heading,
            children: "Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
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
              lineNumber: 155,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("info", "META", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.meta,
              children: data.meta
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
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
              lineNumber: 165,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
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
              lineNumber: 181,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              alt: "",
              src: "/".concat(data.codes[0].language, ".svg"),
              className: classes.langIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 118,
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
          lineNumber: 208,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 205,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFwZXJzL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsInRpdGxlIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJhdXRob3JzIiwibWFyZ2luQm90dG9tIiwiZWFjaEF1dGhvciIsIm1hcmdpblJpZ2h0IiwiZm9udFN0eWxlIiwiY29sb3IiLCJjdXJzb3IiLCJiZWF1dGlmeSIsInNwZWNpYWxMYWJlbCIsImRpc3BsYXkiLCJib3JkZXJCb3R0b20iLCJ3aWR0aCIsImxhYmVsIiwiZm9udFdlaWdodCIsIm1ldGEiLCJpY29uIiwiaGVpZ2h0IiwiZGF0ZSIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvZGUiLCJsYW5nSWNvbiIsIm1hcmdpbkxlZnQiLCJ0YWdzIiwidGFnIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJoZWFkaW5nIiwidHlwb2dyYXBoeSIsInB4VG9SZW0iLCJmb250V2VpZ2h0UmVndWxhciIsImRldGFpbCIsImZsZXhEaXJlY3Rpb24iLCJkZXRhaWxDb250YWluZXIiLCJQYXBlclBhZ2UiLCJwcm9wcyIsInVzZVJvdXRlciIsInF1ZXJ5Iiwic2x1ZyIsImNsYXNzZXMiLCJkYXRhIiwiRFVNTVlfUEFQRVIiLCJtYXAiLCJhdXRob3IiLCJuYW1lIiwibGVuZ3RoIiwicHVibGlzaGVkRGF0ZSIsImNvZGVzIiwibGFuZ3VhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQW1CO0FBQzlDQyxRQUFJLEVBQUU7QUFDSkMsZUFBUyxFQUFFO0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM0JOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvRkQsQ0EzRkQ7O0dBQU1jLFM7VUFDY0Usa0QsRUFFRjlDLFM7OztLQUhaNEMsUzs7QUE2Rk4sSUFBTTNCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNPLElBQUQsRUFBZUgsS0FBZixFQUE4QjRCLE9BQTlCLEVBQXdEO0FBQzNFLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVBLE9BQU8sQ0FBQ2hDLFlBQXhCO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUFLLGFBQUcsYUFBTU8sSUFBTixTQUFSO0FBQTBCLGFBQUcsRUFBQyxFQUE5QjtBQUFpQyxtQkFBUyxFQUFFeUIsT0FBTyxDQUFDekI7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUssaUJBQVMsRUFBRXlCLE9BQU8sQ0FBQzVCLEtBQXhCO0FBQUEsa0JBQWdDQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FYRDs7QUFhQSwrREFBZXVCLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFwZXJzL1tzbHVnXS5iZGIzZjA1MWFiZTlkMzJlNGFhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IERVTU1ZX1BBUEVSIH0gZnJvbSBcIi4uLy4uL2R1bW15XCI7XG5pbXBvcnQgeyBDbGFzc05hbWVNYXAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCI7XG5pbXBvcnQgQWNjb3JkaW9uU3VtbWFyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeVwiO1xuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHNcIjtcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge31cbmludGVyZmFjZSBJUGFwZXIge1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3JzOiB7IG5hbWU6IHN0cmluZyB9W107XG4gIGFic3RyYWN0OiBzdHJpbmc7XG4gIHB1Ymxpc2hlZERhdGU6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xuICBtb2RlbD86IHN0cmluZztcbiAgZGF0YXNldHM/OiBzdHJpbmc7XG4gIG1ldGE/OiBzdHJpbmc7XG4gIHRhZ3M/OiB7IG5hbWU6IHN0cmluZyB9W107XG4gIGNvZGVzPzogeyBsYW5ndWFnZTogc3RyaW5nOyBsaW5rOiBzdHJpbmcgfVtdO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBtYXJnaW5Ub3A6IDQwLFxuICB9LFxuICBjb250YWluZXI6IHt9LFxuICB0aXRsZToge1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogMzYsXG4gIH0sXG4gIGF1dGhvcnM6IHtcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgfSxcbiAgZWFjaEF1dGhvcjoge1xuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgfSxcbiAgfSxcbiAgYWJzdHJhY3Q6IHt9LFxuICBiZWF1dGlmeToge1xuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gIH0sXG5cbiAgc3BlY2lhbExhYmVsOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBib3JkZXJCb3R0b206IFwiNXB4IHNvbGlkIHRlYWxcIixcbiAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxuICBtZXRhOiB7fSxcbiAgaWNvbjoge1xuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgfSxcbiAgZGF0ZToge30sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIH0sXG4gIGNvZGU6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIH0sXG4gIGxhbmdJY29uOiB7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gIH0sXG4gIHRhZ3M6IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICB9LFxuICB0YWc6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiM4MDAwMDBcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICBwYWRkaW5nOiA0LFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXG4gICAgfSxcbiAgfSxcbiAgaGVhZGluZzoge1xuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTUpLFxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXG4gIH0sXG4gIGRldGFpbDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIGRldGFpbENvbnRhaW5lcjoge1xuICAgIG1hcmdpbkJvdHRvbTogNDAsXG4gIH0sXG59KSk7XG5cbmNvbnN0IFBhcGVyUGFnZTogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wczogSVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzbHVnID0gcXVlcnkuc2x1ZztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGRhdGE6IElQYXBlciA9IERVTU1ZX1BBUEVSWzBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVhZGVyIHRpdGxlPVwiUGFwZXJcIiAvPlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57ZGF0YS50aXRsZX08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aG9yc30+XG4gICAgICAgICAge2RhdGEuYXV0aG9ycy5tYXAoKGF1dGhvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5lYWNoQXV0aG9yfT57YXV0aG9yLm5hbWV9PC9zcGFuPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiYWJzdHJhY3RcIiwgXCJBQlNUUkFDVFwiLCBjbGFzc2VzKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnN0cmFjdH0+e2RhdGEuYWJzdHJhY3R9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtkYXRhLnRhZ3MgJiYgZGF0YS50YWdzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ3N9PlxuICAgICAgICAgICAgICB7ZGF0YS50YWdzLm1hcCgodGFnOiB7IG5hbWU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ30+e3RhZy5uYW1lfTwvZGl2PjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8QWNjb3JkaW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxDb250YWluZXJ9PlxuICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XG4gICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYS1jb250ZW50XCJcbiAgICAgICAgICAgIGlkPVwicGFuZWwxYS1oZWFkZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkaW5nfT5EZXRhaWxzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cbiAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscyBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICAgICAge3NwZWNpYWxMYWJlbChcImNsb2NrXCIsIFwiUFVCTElTSEVEIERBVEVcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PntkYXRhLnB1Ymxpc2hlZERhdGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiaW5mb1wiLCBcIk1FVEFcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1ldGF9PntkYXRhLm1ldGF9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgICAgICB7c3BlY2lhbExhYmVsKFwibGlua1wiLCBcIkxJTktcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17ZGF0YS5saW5rfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfWB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkYXRhLmxpbmt9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7ZGF0YS5jb2RlcyAmJlxuICAgICAgICAgICAgICBkYXRhLmNvZGVzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgZGF0YS5jb2Rlc1swXS5saW5rICYmXG4gICAgICAgICAgICAgIGRhdGEuY29kZXNbMF0ubGFuZ3VhZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJjb2RlXCIsIFwiQ09ERVwiLCBjbGFzc2VzKX1cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2RhdGEuY29kZXNbMF0ubGlua31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvZGV9XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jb2Rlc1swXS5saW5rfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2AvJHtkYXRhLmNvZGVzWzBdLmxhbmd1YWdlfS5zdmdgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFuZ0ljb259XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHNwZWNpYWxMYWJlbCA9IChpY29uOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIGNsYXNzZXM6IENsYXNzTmFtZU1hcCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGVjaWFsTGFiZWx9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtgLyR7aWNvbn0uc3ZnYH0gYWx0PVwiXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+e2xhYmVsfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXBlclBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9