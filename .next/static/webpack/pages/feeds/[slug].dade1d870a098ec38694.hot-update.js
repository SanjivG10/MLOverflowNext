self["webpackHotUpdate_N_E"]("pages/feeds/[slug]",{

/***/ "./components/CommentList.tsx":
/*!************************************!*\
  !*** ./components/CommentList.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/bhairaja/mloverflow-next/components/CommentList.tsx",
    _this = undefined,
    _s = $RefreshSig$();



var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {
  return {
    main: {
      marginTop: 40
    },
    container: {
      display: "flex",
      flexDirection: "column",
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%",
      justifyContent: "center"
    },
    commentContainer: {
      display: "flex",
      flexDirection: "column"
    },
    eachCommentContainer: {
      display: "flex",
      flexWrap: "nowrap",
      padding: 10,
      marginBottom: 10
    },
    eachComment: {
      border: "1px solid #bfbfbf",
      borderRadius: 4
    },
    label: {
      fontSize: 20,
      textAlign: "center",
      marginBottom: 20,
      fontWeight: "bolder"
    },
    editButtons: {
      marginBottom: 10
    },
    edit: {
      background: "teal",
      padding: 4,
      color: "white",
      marginRight: 4,
      borderRadius: 10,
      "&:hover": {
        cursor: "pointer"
      }
    },
    "delete": {
      background: "#800000",
      padding: 4,
      color: "white",
      borderRadius: 10,
      "&:hover": {
        cursor: "pointer"
      }
    },
    voteUp: {
      width: 24,
      height: 24
    },
    voteContainer: {
      background: "#FAF8F9"
    }
  };
});

var CommentList = function CommentList(_ref) {
  _s();

  var comments = _ref.comments;
  var classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.container,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.label,
      children: "Recent Comments"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this), comments.map(function (comment) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.eachCommentContainer,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.voteContainer,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            alt: "",
            src: "/up.svg",
            className: classes.voteUp
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.eachComment,
          children: [comment.isOwner && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.editButtons,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes.edit,
              children: "edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes["delete"],
              children: "delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "renderHTML",
            dangerouslySetInnerHTML: {
              __html: comment.text
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, _this);
};

_s(CommentList, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = CommentList;
/* harmony default export */ __webpack_exports__["default"] = (CommentList);

var _c;

$RefreshReg$(_c, "CommentList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFpbiIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImNvbW1lbnRDb250YWluZXIiLCJlYWNoQ29tbWVudENvbnRhaW5lciIsImZsZXhXcmFwIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImVhY2hDb21tZW50IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwibGFiZWwiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJlZGl0QnV0dG9ucyIsImVkaXQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJjdXJzb3IiLCJ2b3RlVXAiLCJoZWlnaHQiLCJ2b3RlQ29udGFpbmVyIiwiQ29tbWVudExpc3QiLCJjb21tZW50cyIsImNsYXNzZXMiLCJtYXAiLCJjb21tZW50IiwiaXNPd25lciIsIl9faHRtbCIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFtQjtBQUM5Q0MsUUFBSSxFQUFFO0FBQ0pDLGVBQVMsRUFBRTtBQURQLEtBRHdDO0FBSTlDQyxhQUFTLEVBQUU7QUFDVEMsYUFBTyxFQUFFLE1BREE7QUFFVEMsbUJBQWEsRUFBRSxRQUZOO0FBR1RDLGlCQUFXLEVBQUUsTUFISjtBQUlUQyxnQkFBVSxFQUFFLE1BSkg7QUFLVEMsV0FBSyxFQUFFLE1BTEU7QUFNVEMsb0JBQWMsRUFBRTtBQU5QLEtBSm1DO0FBYTlDQyxvQkFBZ0IsRUFBRTtBQUNoQk4sYUFBTyxFQUFFLE1BRE87QUFFaEJDLG1CQUFhLEVBQUU7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0E3QkQ7O0dBQU1QLFc7VUFDWWhDLFM7OztLQURaZ0MsVztBQStCTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWVkcy9bc2x1Z10uZGFkZTFkODcwYTA5OGVjMzg2OTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIG1haW46IHtcbiAgICBtYXJnaW5Ub3A6IDQwLFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG5cbiAgY29tbWVudENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIGVhY2hDb21tZW50Q29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleFdyYXA6IFwibm93cmFwXCIsXG5cbiAgICBwYWRkaW5nOiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBlYWNoQ29tbWVudDoge1xuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2JmYmZiZlwiLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgZm9udFdlaWdodDogXCJib2xkZXJcIixcbiAgfSxcbiAgZWRpdEJ1dHRvbnM6IHtcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBlZGl0OiB7XG4gICAgYmFja2dyb3VuZDogXCJ0ZWFsXCIsXG4gICAgcGFkZGluZzogNCxcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIG1hcmdpblJpZ2h0OiA0LFxuICAgIGJvcmRlclJhZGl1czogMTAsXG5cbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICB9LFxuICB9LFxuICBkZWxldGU6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiM4MDAwMDBcIixcbiAgICBwYWRkaW5nOiA0LFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICB9LFxuICB9LFxuICB2b3RlVXA6IHtcbiAgICB3aWR0aDogMjQsXG4gICAgaGVpZ2h0OiAyNCxcbiAgfSxcbiAgdm90ZUNvbnRhaW5lcjoge1xuICAgIGJhY2tncm91bmQ6IFwiI0ZBRjhGOVwiLFxuICB9LFxufSkpO1xuXG5pbnRlcmZhY2UgSUNvbW1lbnQge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGlzT3duZXI6IGJvb2xlYW47XG4gIGhhc1ZvdGVkOiBib29sZWFuO1xuICBoYXNCb29rbWFya2VkOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY29tbWVudHM6IElDb21tZW50W107XG59XG5cbmNvbnN0IENvbW1lbnRMaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgY29tbWVudHMgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PlJlY2VudCBDb21tZW50czwvZGl2PlxuICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudDogSUNvbW1lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lYWNoQ29tbWVudENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy52b3RlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCIvdXAuc3ZnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnZvdGVVcH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWFjaENvbW1lbnR9PlxuICAgICAgICAgICAgICB7Y29tbWVudC5pc093bmVyICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lZGl0QnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdH0+ZWRpdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWxldGV9PmRlbGV0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJyZW5kZXJIVE1MXCJ9XG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb21tZW50LnRleHQgfX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==