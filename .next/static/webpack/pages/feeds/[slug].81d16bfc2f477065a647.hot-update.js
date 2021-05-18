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
      marginBottom: 10,
      border: "1px solid #bfbfbf",
      minHeight: 150
    },
    eachComment: {
      position: "relative",
      width: "100%"
    },
    label: {
      fontSize: 20,
      textAlign: "center",
      marginBottom: 20,
      fontWeight: "bolder"
    },
    editButtons: {
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 10
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
      width: 36,
      height: 36,
      padding: 2
    },
    voteContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: "#FAF8F9",
      textAlign: "center",
      marginRight: 10
    },
    bookmark: {
      height: 20,
      width: 20,
      position: "absolute",
      right: 10,
      display: "block !important"
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
      children: "RECENT COMMENTS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this), comments.map(function (comment) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.eachCommentContainer,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.voteContainer,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            alt: "",
            src: comment.hasVoted ? "/upDone.svg" : "/up.svg",
            className: classes.voteUp
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: getVotesInNumbers(comment.votes)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.eachComment,
          children: [comment.isOwner && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.editButtons,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: comment.hasBookmarked ? "/bookmarked.svg" : "/bookmark.svg",
              alt: "",
              className: classes.bookmark
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes.edit,
              children: "edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes["delete"],
              children: "delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "renderHTML",
            dangerouslySetInnerHTML: {
              __html: comment.text
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, _this);
};

_s(CommentList, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = CommentList;

var getVotesInNumbers = function getVotesInNumbers(num) {
  if (num > 999999) return Math.abs(num) > 999999 ? (Math.abs(num) / 1000000).toFixed(1) + "m" : Math.abs(num);
  return Math.abs(num) > 999 ? (Math.abs(num) / 1000).toFixed(1) + "k" : Math.abs(num);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFpbiIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImNvbW1lbnRDb250YWluZXIiLCJlYWNoQ29tbWVudENvbnRhaW5lciIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsIm1pbkhlaWdodCIsImVhY2hDb21tZW50IiwicG9zaXRpb24iLCJsYWJlbCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsImVkaXRCdXR0b25zIiwiZWRpdCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJ2b3RlVXAiLCJoZWlnaHQiLCJ2b3RlQ29udGFpbmVyIiwiYm9va21hcmsiLCJyaWdodCIsIkNvbW1lbnRMaXN0IiwiY29tbWVudHMiLCJjbGFzc2VzIiwibWFwIiwiY29tbWVudCIsImhhc1ZvdGVkIiwiZ2V0Vm90ZXNJbk51bWJlcnMiLCJ2b3RlcyIsImlzT3duZXIiLCJoYXNCb29rbWFya2VkIiwiX19odG1sIiwidGV4dCIsIm51bSIsIk1hdGgiLCJhYnMiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBbUI7QUFDOUNDLFFBQUksRUFBRTtBQUNKQyxlQUFTLEVBQUU7QUFEUCxLQUR3QztBQUk5Q0MsYUFBUyxFQUFFO0FBQ1RDLGFBQU8sRUFBRSxNQURBO0FBRVRDLG1CQUFhLEVBQUUsUUFGTjtBQUdUQyxpQkFBVyxFQUFFLE1BSEo7QUFJVEMsZ0JBQVUsRUFB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QUksQ0FBQ0MsR0FBTCxDQUFTRixHQUFULElBQWdCLE9BQWpCLEVBQTBCRyxPQUExQixDQUFrQyxDQUFsQyxJQUF1QyxHQURwQyxHQUVIRixJQUFJLENBQUNDLEdBQUwsQ0FBU0YsR0FBVCxDQUZKO0FBR0YsU0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQVQsSUFBZ0IsR0FBaEIsR0FDSCxDQUFDQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0YsR0FBVCxJQUFnQixJQUFqQixFQUF1QkcsT0FBdkIsQ0FBK0IsQ0FBL0IsSUFBb0MsR0FEakMsR0FFSEYsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQVQsQ0FGSjtBQUdELENBUkQ7O0FBVUEsK0RBQWVaLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmVlZHMvW3NsdWddLjgxZDE2YmZjMmY0NzcwNjVhNjQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICBtYWluOiB7XG4gICAgbWFyZ2luVG9wOiA0MCxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICB9LFxuXG4gIGNvbW1lbnRDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICB9LFxuICBlYWNoQ29tbWVudENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjYmZiZmJmXCIsXG4gICAgbWluSGVpZ2h0OiAxNTAsXG4gIH0sXG4gIGVhY2hDb21tZW50OiB7XG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgZm9udFNpemU6IDIwLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIsXG4gIH0sXG4gIGVkaXRCdXR0b25zOiB7XG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIG1hcmdpbkxlZnQ6IDEwLFxuICB9LFxuICBlZGl0OiB7XG4gICAgYmFja2dyb3VuZDogXCJ0ZWFsXCIsXG4gICAgcGFkZGluZzogNCxcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIG1hcmdpblJpZ2h0OiA0LFxuICAgIGJvcmRlclJhZGl1czogMTAsXG5cbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICB9LFxuICB9LFxuICBkZWxldGU6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiM4MDAwMDBcIixcbiAgICBwYWRkaW5nOiA0LFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICB9LFxuICB9LFxuICB2b3RlVXA6IHtcbiAgICB3aWR0aDogMzYsXG4gICAgaGVpZ2h0OiAzNixcbiAgICBwYWRkaW5nOiAyLFxuICB9LFxuICB2b3RlQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNGQUY4RjlcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxuICB9LFxuXG4gIGJvb2ttYXJrOiB7XG4gICAgaGVpZ2h0OiAyMCxcbiAgICB3aWR0aDogMjAsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICByaWdodDogMTAsXG4gICAgZGlzcGxheTogXCJibG9jayAhaW1wb3J0YW50XCIsXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBJQ29tbWVudCB7XG4gIHRleHQ6IHN0cmluZztcbiAgaXNPd25lcjogYm9vbGVhbjtcbiAgaGFzVm90ZWQ6IGJvb2xlYW47XG4gIGhhc0Jvb2ttYXJrZWQ6IGJvb2xlYW47XG4gIHZvdGVzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjb21tZW50czogSUNvbW1lbnRbXTtcbn1cblxuY29uc3QgQ29tbWVudExpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoeyBjb21tZW50cyB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+UkVDRU5UIENPTU1FTlRTPC9kaXY+XG4gICAgICB7Y29tbWVudHMubWFwKChjb21tZW50OiBJQ29tbWVudCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVhY2hDb21tZW50Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnZvdGVDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICBzcmM9e2NvbW1lbnQuaGFzVm90ZWQgPyBcIi91cERvbmUuc3ZnXCIgOiBcIi91cC5zdmdcIn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudm90ZVVwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2PntnZXRWb3Rlc0luTnVtYmVycyhjb21tZW50LnZvdGVzKX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWFjaENvbW1lbnR9PlxuICAgICAgICAgICAgICB7Y29tbWVudC5pc093bmVyICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lZGl0QnV0dG9uc30+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudC5oYXNCb29rbWFya2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiL2Jvb2ttYXJrZWQuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIvYm9va21hcmsuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYm9va21hcmt9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXR9PmVkaXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZGVsZXRlfT5kZWxldGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wicmVuZGVySFRNTFwifVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29tbWVudC50ZXh0IH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRWb3Rlc0luTnVtYmVycyA9IChudW06IG51bWJlcikgPT4ge1xuICBpZiAobnVtID4gOTk5OTk5KVxuICAgIHJldHVybiBNYXRoLmFicyhudW0pID4gOTk5OTk5XG4gICAgICA/IChNYXRoLmFicyhudW0pIC8gMTAwMDAwMCkudG9GaXhlZCgxKSArIFwibVwiXG4gICAgICA6IE1hdGguYWJzKG51bSk7XG4gIHJldHVybiBNYXRoLmFicyhudW0pID4gOTk5XG4gICAgPyAoTWF0aC5hYnMobnVtKSAvIDEwMDApLnRvRml4ZWQoMSkgKyBcImtcIlxuICAgIDogTWF0aC5hYnMobnVtKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==