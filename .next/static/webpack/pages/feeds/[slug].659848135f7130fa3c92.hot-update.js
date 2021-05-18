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
      lineNumber: 46,
      columnNumber: 7
    }, _this), comments.map(function (comment) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.eachComment,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.editButtons,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "edit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "renderHTML",
          dangerouslySetInnerHTML: {
            __html: comment.text
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFpbiIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImNvbW1lbnRDb250YWluZXIiLCJlYWNoQ29tbWVudCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJsYWJlbCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsIkNvbW1lbnRMaXN0IiwiY29tbWVudHMiLCJjbGFzc2VzIiwibWFwIiwiY29tbWVudCIsImVkaXRCdXR0b25zIiwiX19odG1sIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQW1CO0FBQzlDQyxRQUFJLEVBQUU7QUFDSkMsZUFBUyxFQUFFO0FBRFAsS0FEd0M7QUFJOUNDLGFBQVMsRUFBRTtBQUNUQyxhQUFPLEVBQUUsTUFEQTtBQUVUQyxtQkFBYSxFQUFFLFFBRk47QUFHVEMsaUJBQVcsRUFBRSxNQUhKO0FBSVRDLGdCQUFVLEVBQUUsTUFKSDtBQUtUQyxXQUFLLEVBQUUsTUFMRTtBQU1UQyxvQkFBYyxFQUFFO0FBTlAsS0FKbUM7QUFhOUNDLG9CQUFnQixFQUFFO0FBQ2hCTixhQUFPLEVBQUUsTUFETztBQUVoQkMsbUJBQWEsRUFBRTtBQUZDLEtBYjRCO0FBaUI5Q00sZUFBVyxFQUFFO0FBQ1hDLFlBQU0sRUFBRSxpQkFERztBQUVYQyxrQkFBWSxFQUFFLENBRkg7QUFHWEMsYUFBTyxFQUFFLEVBSEU7QUFJWEMsa0JBQVksRUFBRTtBQUpILEtBakJpQztBQXVCOUNDLFNBQUssRUFBRTtBQUNMQyxjQUFRLEVBQUUsRUFETDtBQUVMQyxlQUFTLEVBQUUsUUFGTjtBQUdMSCxrQkFBWSxFQUFFLEVBSFQ7QUFJTEksZ0JBQVUsRUFBRTtBQUpQO0FBdkJ1QyxHQUFuQjtBQUFBLENBQUQsQ0FBNUI7O0FBbUNBLElBQU1DLFdBQTZCLEdBQUcsU0FBaENBLFdBQWdDLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3RELE1BQU1DLE9BQU8sR0FBR3hCLFNBQVMsRUFBekI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRXdCLE9BQU8sQ0FBQ25CLFNBQXhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVtQixPQUFPLENBQUNOLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR0ssUUFBUSxDQUFDRSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUErQjtBQUMzQywwQkFDRTtBQUFLLGlCQUFTLEVBQUVGLE9BQU8sQ0FBQ1gsV0FBeEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVXLE9BQU8sQ0FBQ0csV0FBeEI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQ0UsbUJBQVMsRUFBRSxZQURiO0FBRUUsaUNBQXVCLEVBQUU7QUFBRUMsa0JBQU0sRUFBRUYsT0FBTyxDQUFDRztBQUFsQjtBQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBWUQsS0FiQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBdEJEOztHQUFNUCxXO1VBQ1l0QixTOzs7S0FEWnNCLFc7QUF3Qk4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmVlZHMvW3NsdWddLjY1OTg0ODEzNWY3MTMwZmEzYzkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7IE1vcmVWZXJ0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIG1haW46IHtcbiAgICBtYXJnaW5Ub3A6IDQwLFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG5cbiAgY29tbWVudENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIGVhY2hDb21tZW50OiB7XG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCBibGFja1wiLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRlclwiLFxuICB9LFxufSkpO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY29tbWVudHM6IHsgdGV4dDogc3RyaW5nIH1bXTtcbn1cblxuY29uc3QgQ29tbWVudExpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBjb21tZW50cyB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+UmVjZW50IENvbW1lbnRzPC9kaXY+XG4gICAgICB7Y29tbWVudHMubWFwKChjb21tZW50OiB7IHRleHQ6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWFjaENvbW1lbnR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdEJ1dHRvbnN9PlxuICAgICAgICAgICAgICA8c3Bhbj5lZGl0PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj5kZWxldGU8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInJlbmRlckhUTUxcIn1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb21tZW50LnRleHQgfX1cbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9