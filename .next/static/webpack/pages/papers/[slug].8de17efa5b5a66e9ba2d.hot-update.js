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
      height: 20
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
      lineNumber: 78,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: classes.title,
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.authors,
        children: data.authors.map(function (author) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes.eachAuthor,
            children: author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 20
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("abstract", "ABSTRACT", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes["abstract"],
          children: data["abstract"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("clock", "PUBLISHED DATE", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.date,
          children: data.publishedDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("info", "META", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.meta,
          children: data.meta
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("link", "LINK", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: data.link,
          className: "".concat(classes.link),
          children: data.link
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("code", "CODE", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: data.codes.link,
          className: classes.code,
          children: data.codes.link
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          alt: "",
          src: "/".concat(data.codes.language, ".svg"),
          className: classes.langIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
          lineNumber: 131,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 128,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFwZXJzL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsInRpdGxlIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJhdXRob3JzIiwibWFyZ2luQm90dG9tIiwiZWFjaEF1dGhvciIsIm1hcmdpblJpZ2h0IiwiZm9udFN0eWxlIiwiY29sb3IiLCJjdXJzb3IiLCJiZWF1dGlmeSIsInNwZWNpYWxMYWJlbCIsImRpc3BsYXkiLCJib3JkZXJCb3R0b20iLCJ3aWR0aCIsImxhYmVsIiwiZm9udFdlaWdodCIsIm1ldGEiLCJpY29uIiwiaGVpZ2h0IiwiZGF0ZSIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvZGUiLCJsYW5nSWNvbiIsIlBhcGVyUGFnZSIsInByb3BzIiwidXNlUm91dGVyIiwicXVlcnkiLCJzbHVnIiwiY2xhc3NlcyIsImRhdGEiLCJEVU1NWV9QQVBFUiIsIm1hcCIsImF1dGhvciIsIm5hbWUiLCJwdWJsaXNoZWREYXRlIiwiY29kZXMiLCJsYW5ndWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFtQjtBQUM5Q0MsUUFBSSxFQUFFO0FBQ0pDLGVBQVMsRUFBRTtBQURQLEtBRHdDO0FBSTlDQyxhQUFTLEVBQUUsRUFKbUM7QUFLOUNDLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUUsUUFETjtBQUVMQyxjQUFRLEVBQUU7QUFGTCxLQUx1QztBQVM5Q0MsV0FBTyxFQUFFO0FBQ1BDLGtCQUFZLEVBQUUsRUFEUDtBQUVQSCxlQUFTLEVBQUU7QUFGSixLQVRxQztBQWE5Q0ksY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQUUsRUFE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QWpCLFNBRkw7QUFHRSxtQkFBUyxFQUFFUixPQUFPLENBQUNOO0FBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0RELENBdkREOztHQUFNQyxTO1VBQ2NFLGtELEVBRUZqQyxTOzs7S0FIWitCLFM7O0FBeUROLElBQU1kLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNPLElBQUQsRUFBZUgsS0FBZixFQUE4QmUsT0FBOUIsRUFBd0Q7QUFDM0Usc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUEsT0FBTyxDQUFDbkIsWUFBeEI7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUssYUFBRyxhQUFNTyxJQUFOLFNBQVI7QUFBMEIsYUFBRyxFQUFDLEVBQTlCO0FBQWlDLG1CQUFTLEVBQUVZLE9BQU8sQ0FBQ1o7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUssaUJBQVMsRUFBRVksT0FBTyxDQUFDZixLQUF4QjtBQUFBLGtCQUFnQ0E7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWEQ7O0FBYUEsK0RBQWVVLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFwZXJzL1tzbHVnXS44ZGUxN2VmYTViNWE2NmU5YmEyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYXBlclwiO1xuaW1wb3J0IHsgRFVNTVlfUEFQRVIgfSBmcm9tIFwiLi4vLi4vZHVtbXlcIjtcbmltcG9ydCB7IENsYXNzTmFtZU1hcCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge31cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgbWFyZ2luVG9wOiA0MCxcbiAgfSxcbiAgY29udGFpbmVyOiB7fSxcbiAgdGl0bGU6IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6IDM2LFxuICB9LFxuICBhdXRob3JzOiB7XG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIGVhY2hBdXRob3I6IHtcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIGFic3RyYWN0OiB7fSxcbiAgYmVhdXRpZnk6IHtcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICB9LFxuXG4gIHNwZWNpYWxMYWJlbDoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYm9yZGVyQm90dG9tOiBcIjVweCBzb2xpZCAjODAwMDAwXCIsXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbiAgbWV0YToge30sXG4gIGljb246IHtcbiAgICB3aWR0aDogMjAsXG4gICAgaGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gIH0sXG4gIGRhdGU6IHt9LFxuICBsaW5rOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICB9LFxuICBjb2RlOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICB9LFxuICBsYW5nSWNvbjoge1xuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICB9LFxufSkpO1xuXG5jb25zdCBQYXBlclBhZ2U6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHM6IElQcm9wcykgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc2x1ZyA9IHF1ZXJ5LnNsdWc7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBkYXRhID0gRFVNTVlfUEFQRVJbMF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJQYXBlclwiIC8+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PntkYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRob3JzfT5cbiAgICAgICAgICB7ZGF0YS5hdXRob3JzLm1hcCgoYXV0aG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmVhY2hBdXRob3J9PnthdXRob3IubmFtZX08L3NwYW4+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJhYnN0cmFjdFwiLCBcIkFCU1RSQUNUXCIsIGNsYXNzZXMpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFic3RyYWN0fT57ZGF0YS5hYnN0cmFjdH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJjbG9ja1wiLCBcIlBVQkxJU0hFRCBEQVRFXCIsIGNsYXNzZXMpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9PntkYXRhLnB1Ymxpc2hlZERhdGV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiaW5mb1wiLCBcIk1FVEFcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWV0YX0+e2RhdGEubWV0YX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJsaW5rXCIsIFwiTElOS1wiLCBjbGFzc2VzKX1cbiAgICAgICAgICA8YSBocmVmPXtkYXRhLmxpbmt9IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfWB9PlxuICAgICAgICAgICAge2RhdGEubGlua31cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiY29kZVwiLCBcIkNPREVcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgPGEgaHJlZj17ZGF0YS5jb2Rlcy5saW5rfSBjbGFzc05hbWU9e2NsYXNzZXMuY29kZX0+XG4gICAgICAgICAgICB7ZGF0YS5jb2Rlcy5saW5rfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgc3JjPXtgLyR7ZGF0YS5jb2Rlcy5sYW5ndWFnZX0uc3ZnYH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYW5nSWNvbn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3Qgc3BlY2lhbExhYmVsID0gKGljb246IHN0cmluZywgbGFiZWw6IHN0cmluZywgY2xhc3NlczogQ2xhc3NOYW1lTWFwKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNwZWNpYWxMYWJlbH0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2AvJHtpY29ufS5zdmdgfSBhbHQ9XCJcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfT57bGFiZWx9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcGVyUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=