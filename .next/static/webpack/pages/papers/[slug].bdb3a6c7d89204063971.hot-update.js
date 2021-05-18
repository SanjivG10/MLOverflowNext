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
      lineNumber: 90,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: classes.title,
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.authors,
        children: data.authors.map(function (author) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes.eachAuthor,
            children: author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 20
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("abstract", "ABSTRACT", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes["abstract"],
          children: data["abstract"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this), data.tags && data.tags.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.tags
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("clock", "PUBLISHED DATE", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.date,
          children: data.publishedDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("info", "META", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.meta,
          children: data.meta
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
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
          lineNumber: 123,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
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
          lineNumber: 139,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          alt: "",
          src: "/".concat(data.codes[0].language, ".svg"),
          className: classes.langIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
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
          lineNumber: 164,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 161,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFwZXJzL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsInRpdGxlIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJhdXRob3JzIiwibWFyZ2luQm90dG9tIiwiZWFjaEF1dGhvciIsIm1hcmdpblJpZ2h0IiwiZm9udFN0eWxlIiwiY29sb3IiLCJjdXJzb3IiLCJiZWF1dGlmeSIsInNwZWNpYWxMYWJlbCIsImRpc3BsYXkiLCJib3JkZXJCb3R0b20iLCJ3aWR0aCIsImxhYmVsIiwiZm9udFdlaWdodCIsIm1ldGEiLCJpY29uIiwiaGVpZ2h0IiwiZGF0ZSIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvZGUiLCJsYW5nSWNvbiIsIm1hcmdpbkxlZnQiLCJQYXBlclBhZ2UiLCJwcm9wcyIsInVzZVJvdXRlciIsInF1ZXJ5Iiwic2x1ZyIsImNsYXNzZXMiLCJkYXRhIiwiRFVNTVlfUEFQRVIiLCJtYXAiLCJhdXRob3IiLCJuYW1lIiwidGFncyIsImxlbmd0aCIsInB1Ymxpc2hlZERhdGUiLCJjb2RlcyIsImxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFtQjtBQUM5Q0MsUUFBSSxFQUFFO0FBQ0pDLGVBQVMsRUFBRTtBQURQLEtBRHdDO0FBSTlDQyxhQUFTLEVBQUUsRUFKbUM7QUFLOUNDLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUUsUUFETjtBQUVMQyxjQUFRLEVBQUU7QUFGTCxLQUx1QztBQVM5Q0MsV0FBTyxFQUFFO0FBQ1BDLGtCQUFZLEVBQUUsRUFEUDtBQUVQSCxlQUFTLEVBQUU7QUFGSixLQVRxQztBQWE5Q0ks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LGFBQU1PLElBQU4sU0FBUjtBQUEwQixhQUFHLEVBQUMsRUFBOUI7QUFBaUMsbUJBQVMsRUFBRWEsT0FBTyxDQUFDYjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFYSxPQUFPLENBQUNoQixLQUF4QjtBQUFBLGtCQUFnQ0E7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWEQ7O0FBYUEsK0RBQWVXLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFwZXJzL1tzbHVnXS5iZGIzYTZjN2Q4OTIwNDA2Mzk3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IERVTU1ZX1BBUEVSIH0gZnJvbSBcIi4uLy4uL2R1bW15XCI7XG5pbXBvcnQgeyBDbGFzc05hbWVNYXAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHt9XG5pbnRlcmZhY2UgSVBhcGVyIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYXV0aG9yczogeyBuYW1lOiBzdHJpbmcgfVtdO1xuICBhYnN0cmFjdDogc3RyaW5nO1xuICBwdWJsaXNoZWREYXRlOiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbiAgbW9kZWw/OiBzdHJpbmc7XG4gIGRhdGFzZXRzPzogc3RyaW5nO1xuICBtZXRhPzogc3RyaW5nO1xuICB0YWdzPzogeyBuYW1lOiBzdHJpbmcgfVtdO1xuICBjb2Rlcz86IHsgbGFuZ3VhZ2U6IHN0cmluZzsgbGluazogc3RyaW5nIH1bXTtcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgbWFyZ2luVG9wOiA0MCxcbiAgfSxcbiAgY29udGFpbmVyOiB7fSxcbiAgdGl0bGU6IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6IDM2LFxuICB9LFxuICBhdXRob3JzOiB7XG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIGVhY2hBdXRob3I6IHtcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIGFic3RyYWN0OiB7fSxcbiAgYmVhdXRpZnk6IHtcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICB9LFxuXG4gIHNwZWNpYWxMYWJlbDoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYm9yZGVyQm90dG9tOiBcIjVweCBzb2xpZCB0ZWFsXCIsXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbiAgbWV0YToge30sXG4gIGljb246IHtcbiAgICB3aWR0aDogMjAsXG4gICAgaGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gIH0sXG4gIGRhdGU6IHt9LFxuICBsaW5rOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICB9LFxuICBjb2RlOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICB9LFxuICBsYW5nSWNvbjoge1xuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIG1hcmdpbkxlZnQ6IDEwLFxuICB9LFxufSkpO1xuXG5jb25zdCBQYXBlclBhZ2U6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHM6IElQcm9wcykgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc2x1ZyA9IHF1ZXJ5LnNsdWc7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBkYXRhOiBJUGFwZXIgPSBEVU1NWV9QQVBFUlswXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEhlYWRlciB0aXRsZT1cIlBhcGVyXCIgLz5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e2RhdGEudGl0bGV9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhvcnN9PlxuICAgICAgICAgIHtkYXRhLmF1dGhvcnMubWFwKChhdXRob3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZWFjaEF1dGhvcn0+e2F1dGhvci5uYW1lfTwvc3Bhbj47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAge3NwZWNpYWxMYWJlbChcImFic3RyYWN0XCIsIFwiQUJTVFJBQ1RcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWJzdHJhY3R9PntkYXRhLmFic3RyYWN0fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7ZGF0YS50YWdzICYmIGRhdGEudGFncy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdzfT57fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiY2xvY2tcIiwgXCJQVUJMSVNIRUQgREFURVwiLCBjbGFzc2VzKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXRlfT57ZGF0YS5wdWJsaXNoZWREYXRlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAge3NwZWNpYWxMYWJlbChcImluZm9cIiwgXCJNRVRBXCIsIGNsYXNzZXMpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1ldGF9PntkYXRhLm1ldGF9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICB7c3BlY2lhbExhYmVsKFwibGlua1wiLCBcIkxJTktcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e2RhdGEubGlua31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfWB9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2RhdGEubGlua31cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtkYXRhLmNvZGVzICYmXG4gICAgICAgICAgZGF0YS5jb2Rlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgZGF0YS5jb2Rlc1swXS5saW5rICYmXG4gICAgICAgICAgZGF0YS5jb2Rlc1swXS5sYW5ndWFnZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJjb2RlXCIsIFwiQ09ERVwiLCBjbGFzc2VzKX1cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtkYXRhLmNvZGVzWzBdLmxpbmt9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvZGV9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkYXRhLmNvZGVzWzBdLmxpbmt9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgc3JjPXtgLyR7ZGF0YS5jb2Rlc1swXS5sYW5ndWFnZX0uc3ZnYH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFuZ0ljb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBzcGVjaWFsTGFiZWwgPSAoaWNvbjogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBjbGFzc2VzOiBDbGFzc05hbWVNYXApID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3BlY2lhbExhYmVsfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17YC8ke2ljb259LnN2Z2B9IGFsdD1cIlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFwZXJQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==