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
    eachComment: {
      border: "1px solid black",
      borderRadius: 4,
      padding: 10,
      marginBottom: 10
    },
    label: {
      fontSize: 20,
      textAlign: "center",
      marginBottom: 20,
      fontWeight: "bolder"
    },
    editButtons: {},
    edit: {
      background: "teal",
      padding: 4
    },
    "delete": {
      background: "#800000",
      padding: 4
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
      lineNumber: 55,
      columnNumber: 7
    }, _this), comments.map(function (comment) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.eachComment,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.editButtons,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes.edit,
            children: "edit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes["delete"],
            children: "delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "renderHTML",
          dangerouslySetInnerHTML: {
            __html: comment.text
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFpbiIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImNvbW1lbnRDb250YWluZXIiLCJlYWNoQ29tbWVudCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJsYWJlbCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsImVkaXRCdXR0b25zIiwiZWRpdCIsImJhY2tncm91bmQiLCJDb21tZW50TGlzdCIsImNvbW1lbnRzIiwiY2xhc3NlcyIsIm1hcCIsImNvbW1lbnQiLCJfX2h0bWwiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBbUI7QUFDOUNDLFFBQUksRUFBRTtBQUNKQyxlQUFTLEVBQUU7QUFEUCxLQUR3QztBQUk5Q0MsYUFBUyxFQUFFO0FBQ1RDLGFBQU8sRUFBRSxNQURBO0FBRVRDLG1CQUFhLEVBQUUsUUFGTjtBQUdUQyxpQkFBVyxFQUFFLE1BSEo7QUFJVEMsZ0JBQVUsRUFBRSxNQUpIO0FBS1RDLFdBQUssRUFBRSxNQUxFO0FBTVRDLG9CQUFjLEVBQUU7QUFOUCxLQUptQztBQWE5Q0Msb0JBQWdCLEVBQUU7QUFDaEJOLGFBQU8sRUFBRSxNQURPO0FBRWhCQyxtQkFBYSxFQUFFO0FBRkMsS0FiNEI7QUFpQjlDTSxlQUFXLEVBQUU7QUFDWEMsWUFBTSxFQUFFLGlCQURHO0FBRVhDLGtCQUFZLEVBQUUsQ0FGSDtBQUdYQyxhQUFPLEVBQUUsRUFIRTtBQUlYQyxrQkFBWSxFQUFFO0FBSkgsS0FqQmlDO0FBdUI5Q0MsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxFQURMO0FBRUxDLGVBQVMsRUFBRSxRQUZOO0FBR0xILGtCQUFZLEVBQUUsRUFIVDtBQUlMSSxnQkFBVSxFQUFFO0FBSlAsS0F2QnVDO0FBNkI5Q0MsZUFBVyxFQUFFLEVBN0JpQztBQThCOUNDLFFBQUksRUFBRTtBQUNKQyxnQkFBVSxFQUFFLE1BRFI7QUFFSlIsYUFBTyxFQUFFO0FBRkwsS0E5QndDO0FBa0M5QyxjQUFRO0FBQ05RLGdCQUFVLEVBQUUsU0FETjtBQUVOUixhQUFPLEVBQUU7QUFGSDtBQWxDc0MsR0FBbkI7QUFBQSxDQUFELENBQTVCOztBQTRDQSxJQUFNUyxXQUE2QixHQUFHLFNBQWhDQSxXQUFnQyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUN0RCxNQUFNQyxPQUFPLEdBQUczQixTQUFTLEVBQXpCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUUyQixPQUFPLENBQUN0QixTQUF4QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFc0IsT0FBTyxDQUFDVCxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdRLFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBK0I7QUFDM0MsMEJBQ0U7QUFBSyxpQkFBUyxFQUFFRixPQUFPLENBQUNkLFdBQXhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFYyxPQUFPLENBQUNMLFdBQXhCO0FBQUEsa0NBQ0U7QUFBTSxxQkFBUyxFQUFFSyxPQUFPLENBQUNKLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBTSxxQkFBUyxFQUFFSSxPQUFPLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQ0UsbUJBQVMsRUFBRSxZQURiO0FBRUUsaUNBQXVCLEVBQUU7QUFBRUcsa0JBQU0sRUFBRUQsT0FBTyxDQUFDRTtBQUFsQjtBQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQsS0FiQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBdEJEOztHQUFNTixXO1VBQ1l6QixTOzs7S0FEWnlCLFc7QUF3Qk4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmVlZHMvW3NsdWddLjdlMDY5NTUyZDQwODVjZTRhZDFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7IE1vcmVWZXJ0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIG1haW46IHtcbiAgICBtYXJnaW5Ub3A6IDQwLFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG5cbiAgY29tbWVudENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIGVhY2hDb21tZW50OiB7XG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRlclwiLFxuICB9LFxuICBlZGl0QnV0dG9uczoge30sXG4gIGVkaXQ6IHtcbiAgICBiYWNrZ3JvdW5kOiBcInRlYWxcIixcbiAgICBwYWRkaW5nOiA0LFxuICB9LFxuICBkZWxldGU6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiM4MDAwMDBcIixcbiAgICBwYWRkaW5nOiA0LFxuICB9LFxufSkpO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY29tbWVudHM6IHsgdGV4dDogc3RyaW5nIH1bXTtcbn1cblxuY29uc3QgQ29tbWVudExpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBjb21tZW50cyB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+UmVjZW50IENvbW1lbnRzPC9kaXY+XG4gICAgICB7Y29tbWVudHMubWFwKChjb21tZW50OiB7IHRleHQ6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWFjaENvbW1lbnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdEJ1dHRvbnN9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdH0+ZWRpdDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRlbGV0ZX0+ZGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJyZW5kZXJIVE1MXCJ9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29tbWVudC50ZXh0IH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==