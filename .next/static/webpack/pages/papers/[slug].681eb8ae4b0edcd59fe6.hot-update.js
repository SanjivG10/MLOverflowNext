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
      alignItems: "center"
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
    className: classes.specialLabel,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/".concat(icon, ".svg"),
        alt: "",
        className: classes.icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.label,
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.separator
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFwZXJzL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsInRpdGxlIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJhdXRob3JzIiwibWFyZ2luQm90dG9tIiwiZWFjaEF1dGhvciIsIm1hcmdpblJpZ2h0IiwiZm9udFN0eWxlIiwiY29sb3IiLCJjdXJzb3IiLCJzcGVjaWFsTGFiZWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImxhYmVsIiwiZm9udFdlaWdodCIsIm1ldGEiLCJpY29uIiwid2lkdGgiLCJoZWlnaHQiLCJzZXBhcmF0b3IiLCJiYWNrZ3JvdW5kIiwiUGFwZXJQYWdlIiwicHJvcHMiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInNsdWciLCJjbGFzc2VzIiwiZGF0YSIsIkRVTU1ZX1BBUEVSIiwibWFwIiwiYXV0aG9yIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFtQjtBQUM5Q0MsUUFBSSxFQUFFO0FBQ0pDLGVBQVMsRUFBRTtBQURQLEtBRHdDO0FBSTlDQyxhQUFTLEVBQUUsRUFKbUM7QUFLOUNDLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUUsUUFETjtBQUVMQyxjQUFRLEVBQUU7QUFGTCxLQUx1QztBQVM5Q0MsV0FBTyxFQUFFO0FBQ1BDLGtCQUFZLEVBQUUsRUFEUDtBQUVQSCxlQUFTLEVBQUU7QUFGSixLQVRxQztBQWE5Q0ksY0FBVSxFQUFFO0FBQ1ZDLGlCQUFXLEVBQUUsRUFESDtBQUVWRixrQkFBWSxFQUFFLEVBRko7QUFHVkcsZUFBUyxFQUFFLFFBSEQ7QUFJVkMsV0FBSyxFQUFFLE1BSkc7QUFLVixp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LFlBQXhCO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRTtBQUFLLFdBQUcsYUFBTU0sSUFBTixTQUFSO0FBQTBCLFdBQUcsRUFBQyxFQUE5QjtBQUFpQyxpQkFBUyxFQUFFVSxPQUFPLENBQUNWO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFLLGVBQVMsRUFBRVUsT0FBTyxDQUFDYixLQUF4QjtBQUFBLGdCQUFnQ0E7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBTUU7QUFBSyxlQUFTLEVBQUVhLE9BQU8sQ0FBQ1A7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FYRDs7QUFhQSwrREFBZUUsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXBlcnMvW3NsdWddLjY4MWViOGFlNGIwZWRjZDU5ZmU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IFBhcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhcGVyXCI7XG5pbXBvcnQgeyBEVU1NWV9QQVBFUiB9IGZyb20gXCIuLi8uLi9kdW1teVwiO1xuaW1wb3J0IHsgQ2xhc3NOYW1lTWFwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBtYXJnaW5Ub3A6IDQwLFxuICB9LFxuICBjb250YWluZXI6IHt9LFxuICB0aXRsZToge1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogMzYsXG4gIH0sXG4gIGF1dGhvcnM6IHtcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgfSxcbiAgZWFjaEF1dGhvcjoge1xuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgfSxcbiAgfSxcbiAgYWJzdHJhY3Q6IHt9LFxuXG4gIHNwZWNpYWxMYWJlbDoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gIH0sXG4gIG1ldGE6IHt9LFxuICBpY29uOiB7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxuICB9LFxuICBzZXBhcmF0b3I6IHtcbiAgICBoZWlnaHQ6IDEwLFxuICAgIGJhY2tncm91bmQ6IFwiIzgwMDAwMFwiLFxuICAgIHdpZHRoOiAyMCxcbiAgfSxcbn0pKTtcblxuY29uc3QgUGFwZXJQYWdlOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHNsdWcgPSBxdWVyeS5zbHVnO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgZGF0YSA9IERVTU1ZX1BBUEVSWzBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVhZGVyIHRpdGxlPVwiUGFwZXJcIiAvPlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57ZGF0YS50aXRsZX08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aG9yc30+XG4gICAgICAgICAge2RhdGEuYXV0aG9ycy5tYXAoKGF1dGhvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5lYWNoQXV0aG9yfT57YXV0aG9yLm5hbWV9PC9zcGFuPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3NwZWNpYWxMYWJlbChcImFic3RyYWN0XCIsIFwiQUJTVFJBQ1RcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWJzdHJhY3R9PntkYXRhLmFic3RyYWN0fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiaW5mb1wiLCBcIk1FVEFcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWV0YX0+e2RhdGEubWV0YX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHNwZWNpYWxMYWJlbCA9IChpY29uOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIGNsYXNzZXM6IENsYXNzTmFtZU1hcCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNwZWNpYWxMYWJlbH0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz17YC8ke2ljb259LnN2Z2B9IGFsdD1cIlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+e2xhYmVsfTwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXBhcmF0b3J9PjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFwZXJQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==