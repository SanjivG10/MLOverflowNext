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
      display: "flex"
    },
    eachComment: {
      border: "1px solid #bfbfbf",
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
      lineNumber: 77,
      columnNumber: 7
    }, _this), comments.map(function (comment) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.eachCommentContainer,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
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
              lineNumber: 85,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes["delete"],
              children: "delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "renderHTML",
            dangerouslySetInnerHTML: {
              __html: comment.text
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFpbiIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImNvbW1lbnRDb250YWluZXIiLCJlYWNoQ29tbWVudENvbnRhaW5lciIsImVhY2hDb21tZW50IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbkJvdHRvbSIsImxhYmVsIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwiZWRpdEJ1dHRvbnMiLCJlZGl0IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiY3Vyc29yIiwiQ29tbWVudExpc3QiLCJjb21tZW50cyIsImNsYXNzZXMiLCJtYXAiLCJjb21tZW50IiwiaXNPd25lciIsIl9faHRtbCIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFtQjtBQUM5Q0MsUUFBSSxFQUFFO0FBQ0pDLGVBQVMsRUFBRTtBQURQLEtBRHdDO0FBSTlDQyxhQUFTLEVBQUU7QUFDVEMsYUFBTyxFQUFFLE1BREE7QUFFVEMsbUJBQWEsRUFBRSxRQUZOO0FBR1RDLGlCQUFXLEVBQUUsTUFISjtBQUlUQyxnQkFBVSxFQUFFLE1BSkg7QUFLVEMsV0FBSyxFQUFFLE1BTEU7QUFNVEMsb0JBQWMsRUFBRTtBQU5QLEtBSm1DO0FBYTlDQyxvQkFBZ0IsRUFBRTtBQUNoQk4sYUFBTyxFQUFFLE1BRE87QUFFaEJDLG1CQUFhLEVBQUU7QUFGQyxLQWI0QjtBQWlCOUNNLHdCQUFvQixFQUFFO0FBQ3BCUCxhQUFPLEVBQUU7QUFEVyxLQWpCd0I7QUFvQjlDUSxlQUFXLEVBQUU7QUFDWEMsWUFBTSxFQUFFLG1CQURHO0FBRVhDLGtCQUFZLEVBQUUsQ0FGSDtBQUdYQyxhQUFPLEVBQUUsRUFIRTtBQUlYQyxrQkFBWSxFQUFFO0FBSkgsS0FwQmlDO0FBMEI5Q0MsU0FBSyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxFQURMO0FBRUxDLGVBQVMsRUFBRSxRQUZOO0FBR0xILGtCQUFZLEVBQUUsRUFIVDtBQUlMSSxnQkFBVSxFQUFFO0FBSlAsS0ExQnVDO0FBZ0M5Q0MsZUFBVyxFQUFFO0FBQ1hMLGtCQUFZLEVBQUU7QUFESCxLQWhDaUM7QUFtQzlDTSxRQUFJLEVBQUU7QUFDSkMsZ0JBQVUsRUFBRSxNQURSO0FBRUpSLGFBQU8sRUFBRSxDQUZMO0FBR0pTLFdBQUssRUFBRSxPQUhIO0FBSUpsQixpQkFBVyxFQUFFLENBSlQ7QUFLSlEsa0JBQVksRUFBRSxFQUxWO0FBT0osaUJBQVc7QUFDVFcsY0FBTSxFQUFFO0FBREM7QUFQUCxLQW5Dd0M7QUE4QzlDLGNBQVE7QUFDTkYsZ0JBQVUsRUFBRSxTQUROO0FBRU5SLGFBQU8sRUFBRSxDQUZIO0FBR05TLFdBQUssRUFBRSxPQUhEO0FBSU5WLGtCQUFZLEVBQUUsRUFKUjtBQUtOLGlCQUFXO0FBQ1RXLGNBQU0sRUFBRTtBQURDO0FBTEw7QUE5Q3NDLEdBQW5CO0FBQUEsQ0FBRCxDQUE1Qjs7QUFvRUEsSUFBTUMsV0FBNkIsR0FBRyxTQUFoQ0EsV0FBZ0MsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDdEQsTUFBTUMsT0FBTyxHQUFHOUIsU0FBUyxFQUF6QjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFOEIsT0FBTyxDQUFDekIsU0FBeEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRXlCLE9BQU8sQ0FBQ1gsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHVSxRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQXVCO0FBQ25DLDBCQUNFO0FBQUssaUJBQVMsRUFBRUYsT0FBTyxDQUFDakIsb0JBQXhCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssbUJBQVMsRUFBRWlCLE9BQU8sQ0FBQ2hCLFdBQXhCO0FBQUEscUJBQ0drQixPQUFPLENBQUNDLE9BQVIsaUJBQ0M7QUFBSyxxQkFBUyxFQUFFSCxPQUFPLENBQUNQLFdBQXhCO0FBQUEsb0NBQ0U7QUFBTSx1QkFBUyxFQUFFTyxPQUFPLENBQUNOLElBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBTSx1QkFBUyxFQUFFTSxPQUFPLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQU9FO0FBQ0UscUJBQVMsRUFBRSxZQURiO0FBRUUsbUNBQXVCLEVBQUU7QUFBRUksb0JBQU0sRUFBRUYsT0FBTyxDQUFDRztBQUFsQjtBQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlCRCxLQWxCQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBM0JEOztHQUFNUCxXO1VBQ1k1QixTOzs7S0FEWjRCLFc7QUE2Qk4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmVlZHMvW3NsdWddLjdiZGU4MTAwZDMzZTY2ODI5NWMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICBtYWluOiB7XG4gICAgbWFyZ2luVG9wOiA0MCxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICB9LFxuXG4gIGNvbW1lbnRDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICB9LFxuICBlYWNoQ29tbWVudENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICB9LFxuICBlYWNoQ29tbWVudDoge1xuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2JmYmZiZlwiLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRlclwiLFxuICB9LFxuICBlZGl0QnV0dG9uczoge1xuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gIH0sXG4gIGVkaXQ6IHtcbiAgICBiYWNrZ3JvdW5kOiBcInRlYWxcIixcbiAgICBwYWRkaW5nOiA0LFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgbWFyZ2luUmlnaHQ6IDQsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcblxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIGRlbGV0ZToge1xuICAgIGJhY2tncm91bmQ6IFwiIzgwMDAwMFwiLFxuICAgIHBhZGRpbmc6IDQsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBJQ29tbWVudCB7XG4gIHRleHQ6IHN0cmluZztcbiAgaXNPd25lcjogYm9vbGVhbjtcbiAgaGFzVm90ZWQ6IGJvb2xlYW47XG4gIGhhc0Jvb2ttYXJrZWQ6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjb21tZW50czogSUNvbW1lbnRbXTtcbn1cblxuY29uc3QgQ29tbWVudExpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBjb21tZW50cyB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+UmVjZW50IENvbW1lbnRzPC9kaXY+XG4gICAgICB7Y29tbWVudHMubWFwKChjb21tZW50OiBJQ29tbWVudCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVhY2hDb21tZW50Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lYWNoQ29tbWVudH0+XG4gICAgICAgICAgICAgIHtjb21tZW50LmlzT3duZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRCdXR0b25zfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5lZGl0fT5lZGl0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRlbGV0ZX0+ZGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInJlbmRlckhUTUxcIn1cbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbW1lbnQudGV4dCB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9