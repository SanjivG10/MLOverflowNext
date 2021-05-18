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
      borderBottom: "5px solid #800000",
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
      lineNumber: 89,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: classes.title,
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.authors,
        children: data.authors.map(function (author) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes.eachAuthor,
            children: author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 20
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("abstract", "ABSTRACT", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes["abstract"],
          children: data["abstract"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("clock", "PUBLISHED DATE", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.date,
          children: data.publishedDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("info", "META", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.meta,
          children: data.meta
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("link", "LINK", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: data.link,
          className: "".concat(classes.link),
          children: data.link
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("code", "CODE", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: data.codes.link,
          className: classes.code,
          children: data.codes.link
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          alt: "",
          src: "/".concat(data.codes.language, ".svg"),
          className: classes.langIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
          lineNumber: 142,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 139,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFwZXJzL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsInRpdGxlIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJhdXRob3JzIiwibWFyZ2luQm90dG9tIiwiZWFjaEF1dGhvciIsIm1hcmdpblJpZ2h0IiwiZm9udFN0eWxlIiwiY29sb3IiLCJjdXJzb3IiLCJiZWF1dGlmeSIsInNwZWNpYWxMYWJlbCIsImRpc3BsYXkiLCJib3JkZXJCb3R0b20iLCJ3aWR0aCIsImxhYmVsIiwiZm9udFdlaWdodCIsIm1ldGEiLCJpY29uIiwiaGVpZ2h0IiwiZGF0ZSIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvZGUiLCJsYW5nSWNvbiIsIm1hcmdpbkxlZnQiLCJQYXBlclBhZ2UiLCJwcm9wcyIsInVzZVJvdXRlciIsInF1ZXJ5Iiwic2x1ZyIsImNsYXNzZXMiLCJkYXRhIiwiRFVNTVlfUEFQRVIiLCJtYXAiLCJhdXRob3IiLCJuYW1lIiwicHVibGlzaGVkRGF0ZSIsImNvZGVzIiwibGFuZ3VhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQW1CO0FBQzlDQyxRQUFJLEVBQUU7QUFDSkMsZUFBUyxFQUFFO0FBRFAsS0FEd0M7QUFJOUNDLGFBQVMsRUFBRSxFQUptQztBQUs5Q0MsU0FBSyxFQUFFO0FBQ0xDLGVBQVMsRUFBRSxRQUROO0FBRUxDLGNBQVEsRUFBRTtBQUZMLEtBTHVDO0FBUzlDQyxXQUFPLEVBQUU7QUFDUEMsa0JBQVksRUFBRSxFQURQO0FBRVBILGVBQVMsRUFBRTtBQUZKLEtBVHFDO0FBYTlDSSxjQUFVLEVBQUU7QUFDVkMs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RSxhQUFHLGFBQU1XLElBQUksQ0FBQ00sS0FBTCxDQUFXQyxRQUFqQixTQUZMO0FBR0UsbUJBQVMsRUFBRVIsT0FBTyxDQUFDUDtBQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdERCxDQXZERDs7R0FBTUUsUztVQUNjRSxrRCxFQUVGbEMsUzs7O0tBSFpnQyxTOztBQXlETixJQUFNZixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTyxJQUFELEVBQWVILEtBQWYsRUFBOEJnQixPQUE5QixFQUF3RDtBQUMzRSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQSxPQUFPLENBQUNwQixZQUF4QjtBQUFBLDhCQUNFO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLGFBQU1PLElBQU4sU0FBUjtBQUEwQixhQUFHLEVBQUMsRUFBOUI7QUFBaUMsbUJBQVMsRUFBRWEsT0FBTyxDQUFDYjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFYSxPQUFPLENBQUNoQixLQUF4QjtBQUFBLGtCQUFnQ0E7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWEQ7O0FBYUEsK0RBQWVXLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFwZXJzL1tzbHVnXS40NjM5MzE1YjRjZDdjZmFhMGY5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IERVTU1ZX1BBUEVSIH0gZnJvbSBcIi4uLy4uL2R1bW15XCI7XG5pbXBvcnQgeyBDbGFzc05hbWVNYXAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHt9XG5pbnRlcmZhY2UgSVBhcGVyIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYXV0aG9yczogeyBuYW1lOiBzdHJpbmcgfVtdO1xuICBhYnN0cmFjdDogc3RyaW5nO1xuICBwdWJsaXNoZWREYXRlOiBEYXRlO1xuICBsaW5rOiBzdHJpbmc7XG4gIG1vZGVsPzogc3RyaW5nO1xuICBkYXRhc2V0cz86IHN0cmluZztcbiAgbWV0YT86IHN0cmluZztcbiAgdGFncz86IHsgbmFtZTogc3RyaW5nIH1bXTtcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgbWFyZ2luVG9wOiA0MCxcbiAgfSxcbiAgY29udGFpbmVyOiB7fSxcbiAgdGl0bGU6IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6IDM2LFxuICB9LFxuICBhdXRob3JzOiB7XG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIGVhY2hBdXRob3I6IHtcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIGFic3RyYWN0OiB7fSxcbiAgYmVhdXRpZnk6IHtcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICB9LFxuXG4gIHNwZWNpYWxMYWJlbDoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYm9yZGVyQm90dG9tOiBcIjVweCBzb2xpZCAjODAwMDAwXCIsXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbiAgbWV0YToge30sXG4gIGljb246IHtcbiAgICB3aWR0aDogMjAsXG4gICAgaGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gIH0sXG4gIGRhdGU6IHt9LFxuICBsaW5rOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICB9LFxuICBjb2RlOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICB9LFxuICBsYW5nSWNvbjoge1xuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIG1hcmdpbkxlZnQ6IDEwLFxuICB9LFxufSkpO1xuXG5jb25zdCBQYXBlclBhZ2U6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHM6IElQcm9wcykgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc2x1ZyA9IHF1ZXJ5LnNsdWc7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBkYXRhOiBJUGFwZXIgPSBEVU1NWV9QQVBFUlswXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEhlYWRlciB0aXRsZT1cIlBhcGVyXCIgLz5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e2RhdGEudGl0bGV9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhvcnN9PlxuICAgICAgICAgIHtkYXRhLmF1dGhvcnMubWFwKChhdXRob3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZWFjaEF1dGhvcn0+e2F1dGhvci5uYW1lfTwvc3Bhbj47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAge3NwZWNpYWxMYWJlbChcImFic3RyYWN0XCIsIFwiQUJTVFJBQ1RcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWJzdHJhY3R9PntkYXRhLmFic3RyYWN0fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAge3NwZWNpYWxMYWJlbChcImNsb2NrXCIsIFwiUFVCTElTSEVEIERBVEVcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+e2RhdGEucHVibGlzaGVkRGF0ZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJpbmZvXCIsIFwiTUVUQVwiLCBjbGFzc2VzKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXRhfT57ZGF0YS5tZXRhfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAge3NwZWNpYWxMYWJlbChcImxpbmtcIiwgXCJMSU5LXCIsIGNsYXNzZXMpfVxuICAgICAgICAgIDxhIGhyZWY9e2RhdGEubGlua30gY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9YH0+XG4gICAgICAgICAgICB7ZGF0YS5saW5rfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJjb2RlXCIsIFwiQ09ERVwiLCBjbGFzc2VzKX1cbiAgICAgICAgICA8YSBocmVmPXtkYXRhLmNvZGVzLmxpbmt9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2RlfT5cbiAgICAgICAgICAgIHtkYXRhLmNvZGVzLmxpbmt9XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICBzcmM9e2AvJHtkYXRhLmNvZGVzLmxhbmd1YWdlfS5zdmdgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhbmdJY29ufVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBzcGVjaWFsTGFiZWwgPSAoaWNvbjogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBjbGFzc2VzOiBDbGFzc05hbWVNYXApID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3BlY2lhbExhYmVsfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17YC8ke2ljb259LnN2Z2B9IGFsdD1cIlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFwZXJQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==