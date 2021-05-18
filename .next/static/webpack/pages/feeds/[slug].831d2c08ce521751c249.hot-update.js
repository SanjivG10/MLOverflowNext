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
      right: "10px !important "
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
      lineNumber: 101,
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
            lineNumber: 106,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: getVotesInNumbers(comment.votes)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
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
              lineNumber: 116,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes.edit,
              children: "edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes["delete"],
              children: "delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "renderHTML",
            dangerouslySetInnerHTML: {
              __html: comment.text
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFpbiIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImNvbW1lbnRDb250YWluZXIiLCJlYWNoQ29tbWVudENvbnRhaW5lciIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsIm1pbkhlaWdodCIsImVhY2hDb21tZW50IiwicG9zaXRpb24iLCJsYWJlbCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsImVkaXRCdXR0b25zIiwiZWRpdCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJ2b3RlVXAiLCJoZWlnaHQiLCJ2b3RlQ29udGFpbmVyIiwiYm9va21hcmsiLCJyaWdodCIsIkNvbW1lbnRMaXN0IiwiY29tbWVudHMiLCJjbGFzc2VzIiwibWFwIiwiY29tbWVudCIsImhhc1ZvdGVkIiwiZ2V0Vm90ZXNJbk51bWJlcnMiLCJ2b3RlcyIsImlzT3duZXIiLCJoYXNCb29rbWFya2VkIiwiX19odG1sIiwidGV4dCIsIm51bSIsIk1hdGgiLCJhYnMiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBbUI7QUFDOUNDLFFBQUksRUFBRTtBQUNKQyxlQUFTLEVBQUU7QUFEUCxLQUR3QztBQUk5Q0MsYUFBUyxFQUFFO0FBQ1RDLGFBQU8sRUFBRSxNQURBO0FBRVRDLG1CQUFhLEVBQUUsUUFGTjtBQUdUQyxpQkFBVyxFQUFFLE1BSEo7QUFJVEMsZ0JBQVUsRUFB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VCxJQUFnQixPQUFqQixFQUEwQkcsT0FBMUIsQ0FBa0MsQ0FBbEMsSUFBdUMsR0FEcEMsR0FFSEYsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQVQsQ0FGSjtBQUdGLFNBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixHQUFULElBQWdCLEdBQWhCLEdBQ0gsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQVQsSUFBZ0IsSUFBakIsRUFBdUJHLE9BQXZCLENBQStCLENBQS9CLElBQW9DLEdBRGpDLEdBRUhGLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixHQUFULENBRko7QUFHRCxDQVJEOztBQVVBLCtEQUFlWixXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZlZWRzL1tzbHVnXS44MzFkMmMwOGNlNTIxNzUxYzI0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcbiAgbWFpbjoge1xuICAgIG1hcmdpblRvcDogNDAsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgfSxcblxuICBjb21tZW50Q29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgfSxcbiAgZWFjaENvbW1lbnRDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2JmYmZiZlwiLFxuICAgIG1pbkhlaWdodDogMTUwLFxuICB9LFxuICBlYWNoQ29tbWVudDoge1xuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRlclwiLFxuICB9LFxuICBlZGl0QnV0dG9uczoge1xuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgfSxcbiAgZWRpdDoge1xuICAgIGJhY2tncm91bmQ6IFwidGVhbFwiLFxuICAgIHBhZGRpbmc6IDQsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBtYXJnaW5SaWdodDogNCxcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgfSxcbiAgfSxcbiAgZGVsZXRlOiB7XG4gICAgYmFja2dyb3VuZDogXCIjODAwMDAwXCIsXG4gICAgcGFkZGluZzogNCxcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgfSxcbiAgfSxcbiAgdm90ZVVwOiB7XG4gICAgd2lkdGg6IDM2LFxuICAgIGhlaWdodDogMzYsXG4gICAgcGFkZGluZzogMixcbiAgfSxcbiAgdm90ZUNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZDogXCIjRkFGOEY5XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgfSxcblxuICBib29rbWFyazoge1xuICAgIGhlaWdodDogMjAsXG4gICAgd2lkdGg6IDIwLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgcmlnaHQ6IFwiMTBweCAhaW1wb3J0YW50IFwiLFxuICB9LFxufSkpO1xuXG5pbnRlcmZhY2UgSUNvbW1lbnQge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGlzT3duZXI6IGJvb2xlYW47XG4gIGhhc1ZvdGVkOiBib29sZWFuO1xuICBoYXNCb29rbWFya2VkOiBib29sZWFuO1xuICB2b3RlczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY29tbWVudHM6IElDb21tZW50W107XG59XG5cbmNvbnN0IENvbW1lbnRMaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgY29tbWVudHMgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PlJFQ0VOVCBDT01NRU5UUzwvZGl2PlxuICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudDogSUNvbW1lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lYWNoQ29tbWVudENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy52b3RlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgc3JjPXtjb21tZW50Lmhhc1ZvdGVkID8gXCIvdXBEb25lLnN2Z1wiIDogXCIvdXAuc3ZnXCJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnZvdGVVcH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdj57Z2V0Vm90ZXNJbk51bWJlcnMoY29tbWVudC52b3Rlcyl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVhY2hDb21tZW50fT5cbiAgICAgICAgICAgICAge2NvbW1lbnQuaXNPd25lciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdEJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuaGFzQm9va21hcmtlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIi9ib29rbWFya2VkLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiL2Jvb2ttYXJrLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvb2ttYXJrfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5lZGl0fT5lZGl0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRlbGV0ZX0+ZGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInJlbmRlckhUTUxcIn1cbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbW1lbnQudGV4dCB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0Vm90ZXNJbk51bWJlcnMgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgaWYgKG51bSA+IDk5OTk5OSlcbiAgICByZXR1cm4gTWF0aC5hYnMobnVtKSA+IDk5OTk5OVxuICAgICAgPyAoTWF0aC5hYnMobnVtKSAvIDEwMDAwMDApLnRvRml4ZWQoMSkgKyBcIm1cIlxuICAgICAgOiBNYXRoLmFicyhudW0pO1xuICByZXR1cm4gTWF0aC5hYnMobnVtKSA+IDk5OVxuICAgID8gKE1hdGguYWJzKG51bSkgLyAxMDAwKS50b0ZpeGVkKDEpICsgXCJrXCJcbiAgICA6IE1hdGguYWJzKG51bSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=