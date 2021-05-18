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
    specialLabel: {
      marginTop: 10,
      display: "flex"
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
    separator: {
      height: 10,
      background: "#800000",
      width: 20
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
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: classes.title,
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.authors,
        children: data.authors.map(function (author) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes.eachAuthor,
            children: author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 20
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [specialLabel("abstract", "ABSTRACT", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes["abstract"],
          children: data["abstract"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [specialLabel("info", "META", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.meta,
          children: data.meta
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, _this);
};

_s(PaperPage, "vvh9GKDmGg2swX3NqEAQicIBfAI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, useStyles];
});

_c = PaperPage;

var specialLabel = function specialLabel(icon, label, classes) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.specialLabel,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/".concat(icon, ".svg"),
        alt: "",
        className: classes.icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.label,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.separator
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFwZXJzL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsInRpdGxlIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJhdXRob3JzIiwibWFyZ2luQm90dG9tIiwiZWFjaEF1dGhvciIsIm1hcmdpblJpZ2h0IiwiZm9udFN0eWxlIiwiY29sb3IiLCJjdXJzb3IiLCJzcGVjaWFsTGFiZWwiLCJkaXNwbGF5IiwibGFiZWwiLCJmb250V2VpZ2h0IiwibWV0YSIsImljb24iLCJ3aWR0aCIsImhlaWdodCIsInNlcGFyYXRvciIsImJhY2tncm91bmQiLCJQYXBlclBhZ2UiLCJwcm9wcyIsInVzZVJvdXRlciIsInF1ZXJ5Iiwic2x1ZyIsImNsYXNzZXMiLCJkYXRhIiwiRFVNTVlfUEFQRVIiLCJtYXAiLCJhdXRob3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQW1CO0FBQzlDQyxRQUFJLEVBQUU7QUFDSkMsZUFBUyxFQUFFO0FBRFAsS0FEd0M7QUFJOUNDLGFBQVMsRUFBRSxFQUptQztBQUs5Q0MsU0FBSyxFQUFFO0FBQ0xDLGVBQVMsRUFBRSxRQUROO0FBRUxDLGNBQVEsRUFBRTtBQUZMLEtBTHVDO0FBUzlDQyxXQUFPLEVBQUU7QUFDUEMsa0JBQVksRUFBRSxFQURQO0FBRVBILGVBQVMsRUFBRTtBQUZKLEtBVHFDO0FBYTlDSSxjQUFVLEVBQUU7QUFDVkMsaUJBQVcsRUFBRSxFQURIO0FBRVZGLGtCQUFZLEVBQUUsRUFGSjtBQUdWRyxlQUFTLEVBQUUsUUFIRDtBQUlWQyxXQUFLLEVBQUUsTUFKRztBQUtWLGlCQUFXO0FBQ1RDLGNB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LGFBQU1LLElBQU4sU0FBUjtBQUEwQixXQUFHLEVBQUMsRUFBOUI7QUFBaUMsaUJBQVMsRUFBRVUsT0FBTyxDQUFDVjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVVLE9BQU8sQ0FBQ2IsS0FBeEI7QUFBQSxnQkFBZ0NBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQU1FO0FBQUssZUFBUyxFQUFFYSxPQUFPLENBQUNQO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBWEQ7O0FBYUEsK0RBQWVFLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFwZXJzL1tzbHVnXS5mYTMwNWEyZDA1NTMwOTRmMWEzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYXBlclwiO1xuaW1wb3J0IHsgRFVNTVlfUEFQRVIgfSBmcm9tIFwiLi4vLi4vZHVtbXlcIjtcbmltcG9ydCB7IENsYXNzTmFtZU1hcCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge31cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgbWFyZ2luVG9wOiA0MCxcbiAgfSxcbiAgY29udGFpbmVyOiB7fSxcbiAgdGl0bGU6IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6IDM2LFxuICB9LFxuICBhdXRob3JzOiB7XG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIGVhY2hBdXRob3I6IHtcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIGFic3RyYWN0OiB7fSxcblxuICBzcGVjaWFsTGFiZWw6IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbiAgbWV0YToge30sXG4gIGljb246IHtcbiAgICB3aWR0aDogMjAsXG4gICAgaGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gIH0sXG4gIHNlcGFyYXRvcjoge1xuICAgIGhlaWdodDogMTAsXG4gICAgYmFja2dyb3VuZDogXCIjODAwMDAwXCIsXG4gICAgd2lkdGg6IDIwLFxuICB9LFxufSkpO1xuXG5jb25zdCBQYXBlclBhZ2U6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHM6IElQcm9wcykgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc2x1ZyA9IHF1ZXJ5LnNsdWc7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBkYXRhID0gRFVNTVlfUEFQRVJbMF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJQYXBlclwiIC8+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PntkYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRob3JzfT5cbiAgICAgICAgICB7ZGF0YS5hdXRob3JzLm1hcCgoYXV0aG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmVhY2hBdXRob3J9PnthdXRob3IubmFtZX08L3NwYW4+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiYWJzdHJhY3RcIiwgXCJBQlNUUkFDVFwiLCBjbGFzc2VzKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnN0cmFjdH0+e2RhdGEuYWJzdHJhY3R9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJpbmZvXCIsIFwiTUVUQVwiLCBjbGFzc2VzKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXRhfT57ZGF0YS5tZXRhfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3Qgc3BlY2lhbExhYmVsID0gKGljb246IHN0cmluZywgbGFiZWw6IHN0cmluZywgY2xhc3NlczogQ2xhc3NOYW1lTWFwKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3BlY2lhbExhYmVsfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPXtgLyR7aWNvbn0uc3ZnYH0gYWx0PVwiXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfT57bGFiZWx9PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlcGFyYXRvcn0+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXBlclBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9