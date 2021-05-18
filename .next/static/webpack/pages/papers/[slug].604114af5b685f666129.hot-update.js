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
      display: "flex",
      "&::after": {
        background: "#800000",
        height: 4,
        content: '""',
        display: "block"
      }
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
      lineNumber: 67,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: classes.title,
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.authors,
        children: data.authors.map(function (author) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes.eachAuthor,
            children: author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 20
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [specialLabel("abstract", "ABSTRACT", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes["abstract"],
          children: data["abstract"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [specialLabel("info", "META", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.meta,
          children: data.meta
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
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
          lineNumber: 95,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFwZXJzL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsInRpdGxlIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJhdXRob3JzIiwibWFyZ2luQm90dG9tIiwiZWFjaEF1dGhvciIsIm1hcmdpblJpZ2h0IiwiZm9udFN0eWxlIiwiY29sb3IiLCJjdXJzb3IiLCJzcGVjaWFsTGFiZWwiLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsImhlaWdodCIsImNvbnRlbnQiLCJsYWJlbCIsImZvbnRXZWlnaHQiLCJtZXRhIiwiaWNvbiIsIndpZHRoIiwiUGFwZXJQYWdlIiwicHJvcHMiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInNsdWciLCJjbGFzc2VzIiwiZGF0YSIsIkRVTU1ZX1BBUEVSIiwibWFwIiwiYXV0aG9yIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFtQjtBQUM5Q0MsUUFBSSxFQUFFO0FBQ0pDLGVBQVMsRUFBRTtBQURQLEtBRHdDO0FBSTlDQyxhQUFTLEVBQUUsRUFKbUM7QUFLOUNDLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUUsUUFETjtBQUVMQyxjQUFRLEVBQUU7QUFGTCxLQUx1QztBQVM5Q0MsV0FBTyxFQUFFO0FBQ1BDLGtCQUFZLEVBQUUsRUFEUDtBQUVQSCxlQUFTLEVBQUU7QUFGSixLQVRxQztBQWE5Q0ksY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQUUsRUFESDtBQUVWRixrQkFBWSxFQUFFLEVBRko7QUFHVkcsZUFBUyxFQUFFLFFBSEQ7QUFJVkMsV0FBSyxFQUFFLE1BSkc7QUFLVixpQkFBVztBQUNUQyxjQUFN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O0FBQUEsK0JBQ0U7QUFBSyxhQUFHLGFBQU1RLElBQU4sU0FBUjtBQUEwQixhQUFHLEVBQUMsRUFBOUI7QUFBaUMsbUJBQVMsRUFBRU8sT0FBTyxDQUFDUDtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFTyxPQUFPLENBQUNWLEtBQXhCO0FBQUEsa0JBQWdDQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FYRDs7QUFhQSwrREFBZUssU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXBlcnMvW3NsdWddLjYwNDExNGFmNWI2ODVmNjY2MTI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhcGVyXCI7XG5pbXBvcnQgeyBEVU1NWV9QQVBFUiB9IGZyb20gXCIuLi8uLi9kdW1teVwiO1xuaW1wb3J0IHsgQ2xhc3NOYW1lTWFwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBtYXJnaW5Ub3A6IDQwLFxuICB9LFxuICBjb250YWluZXI6IHt9LFxuICB0aXRsZToge1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogMzYsXG4gIH0sXG4gIGF1dGhvcnM6IHtcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgfSxcbiAgZWFjaEF1dGhvcjoge1xuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgfSxcbiAgfSxcbiAgYWJzdHJhY3Q6IHt9LFxuXG4gIHNwZWNpYWxMYWJlbDoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgXCImOjphZnRlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBcIiM4MDAwMDBcIixcbiAgICAgIGhlaWdodDogNCxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB9LFxuICB9LFxuICBsYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbiAgbWV0YToge30sXG4gIGljb246IHtcbiAgICB3aWR0aDogMjAsXG4gICAgaGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gIH0sXG59KSk7XG5cbmNvbnN0IFBhcGVyUGFnZTogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wczogSVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzbHVnID0gcXVlcnkuc2x1ZztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGRhdGEgPSBEVU1NWV9QQVBFUlswXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEhlYWRlciB0aXRsZT1cIlBhcGVyXCIgLz5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e2RhdGEudGl0bGV9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhvcnN9PlxuICAgICAgICAgIHtkYXRhLmF1dGhvcnMubWFwKChhdXRob3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZWFjaEF1dGhvcn0+e2F1dGhvci5uYW1lfTwvc3Bhbj47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJhYnN0cmFjdFwiLCBcIkFCU1RSQUNUXCIsIGNsYXNzZXMpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFic3RyYWN0fT57ZGF0YS5hYnN0cmFjdH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3NwZWNpYWxMYWJlbChcImluZm9cIiwgXCJNRVRBXCIsIGNsYXNzZXMpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1ldGF9PntkYXRhLm1ldGF9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBzcGVjaWFsTGFiZWwgPSAoaWNvbjogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBjbGFzc2VzOiBDbGFzc05hbWVNYXApID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3BlY2lhbExhYmVsfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17YC8ke2ljb259LnN2Z2B9IGFsdD1cIlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFwZXJQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==