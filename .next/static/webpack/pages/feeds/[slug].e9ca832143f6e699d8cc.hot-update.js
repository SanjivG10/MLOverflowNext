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
    eachComment: {},
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
      width: 20
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
      lineNumber: 96,
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
            lineNumber: 101,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: getVotesInNumbers(comment.votes)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.eachComment,
          children: [comment.isOwner && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.editButtons,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/bookmark.svg",
              alt: "",
              className: classes.bookmark
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes.edit,
              children: "edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes["delete"],
              children: "delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "renderHTML",
            dangerouslySetInnerHTML: {
              __html: comment.text
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFpbiIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImNvbW1lbnRDb250YWluZXIiLCJlYWNoQ29tbWVudENvbnRhaW5lciIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsIm1pbkhlaWdodCIsImVhY2hDb21tZW50IiwibGFiZWwiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJlZGl0QnV0dG9ucyIsImVkaXQiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwidm90ZVVwIiwiaGVpZ2h0Iiwidm90ZUNvbnRhaW5lciIsImJvb2ttYXJrIiwiQ29tbWVudExpc3QiLCJjb21tZW50cyIsImNsYXNzZXMiLCJtYXAiLCJjb21tZW50IiwiaGFzVm90ZWQiLCJnZXRWb3Rlc0luTnVtYmVycyIsInZvdGVzIiwiaXNPd25lciIsIl9faHRtbCIsInRleHQiLCJudW0iLCJNYXRoIiwiYWJzIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQW1CO0FBQzlDQyxRQUFJLEVBQUU7QUFDSkMsZUFBUyxFQUFFO0FBRFAsS0FEd0M7QUFJOUNDLGFBQVMsRUFBRTtBQUNUQyxhQUFPLEVBQUUsTUFEQTtBQUVUQyxtQkFBYSxFQUFFLFFBRk47QUFHVEMsaUJBQVcsRUFBRSxNQUhKO0FBSVRDLGdCQUFVLEVBQUUsTUFKSDtBQUtUQyxXQUFLLEVBQUUsTUFMRTtBQU1UQyxv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Q0FBQ0MsR0FBTCxDQUFTRixHQUFULElBQWdCLElBQWpCLEVBQXVCRyxPQUF2QixDQUErQixDQUEvQixJQUFvQyxHQURqQyxHQUVIRixJQUFJLENBQUNDLEdBQUwsQ0FBU0YsR0FBVCxDQUZKO0FBR0QsQ0FSRDs7QUFVQSwrREFBZVgsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWVkcy9bc2x1Z10uZTljYTgzMjE0M2Y2ZTY5OWQ4Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIG1haW46IHtcbiAgICBtYXJnaW5Ub3A6IDQwLFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG5cbiAgY29tbWVudENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIGVhY2hDb21tZW50Q29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNiZmJmYmZcIixcbiAgICBtaW5IZWlnaHQ6IDE1MCxcbiAgfSxcbiAgZWFjaENvbW1lbnQ6IHt9LFxuICBsYWJlbDoge1xuICAgIGZvbnRTaXplOiAyMCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBmb250V2VpZ2h0OiBcImJvbGRlclwiLFxuICB9LFxuICBlZGl0QnV0dG9uczoge1xuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgfSxcbiAgZWRpdDoge1xuICAgIGJhY2tncm91bmQ6IFwidGVhbFwiLFxuICAgIHBhZGRpbmc6IDQsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBtYXJnaW5SaWdodDogNCxcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgfSxcbiAgfSxcbiAgZGVsZXRlOiB7XG4gICAgYmFja2dyb3VuZDogXCIjODAwMDAwXCIsXG4gICAgcGFkZGluZzogNCxcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgfSxcbiAgfSxcbiAgdm90ZVVwOiB7XG4gICAgd2lkdGg6IDM2LFxuICAgIGhlaWdodDogMzYsXG4gICAgcGFkZGluZzogMixcbiAgfSxcbiAgdm90ZUNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYmFja2dyb3VuZDogXCIjRkFGOEY5XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgfSxcblxuICBib29rbWFyazoge1xuICAgIGhlaWdodDogMjAsXG4gICAgd2lkdGg6IDIwLFxuICB9LFxufSkpO1xuXG5pbnRlcmZhY2UgSUNvbW1lbnQge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGlzT3duZXI6IGJvb2xlYW47XG4gIGhhc1ZvdGVkOiBib29sZWFuO1xuICBoYXNCb29rbWFya2VkOiBib29sZWFuO1xuICB2b3RlczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY29tbWVudHM6IElDb21tZW50W107XG59XG5cbmNvbnN0IENvbW1lbnRMaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgY29tbWVudHMgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PlJFQ0VOVCBDT01NRU5UUzwvZGl2PlxuICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudDogSUNvbW1lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lYWNoQ29tbWVudENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy52b3RlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgc3JjPXtjb21tZW50Lmhhc1ZvdGVkID8gXCIvdXBEb25lLnN2Z1wiIDogXCIvdXAuc3ZnXCJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnZvdGVVcH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdj57Z2V0Vm90ZXNJbk51bWJlcnMoY29tbWVudC52b3Rlcyl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVhY2hDb21tZW50fT5cbiAgICAgICAgICAgICAge2NvbW1lbnQuaXNPd25lciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdEJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYm9va21hcmsuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJvb2ttYXJrfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5lZGl0fT5lZGl0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRlbGV0ZX0+ZGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInJlbmRlckhUTUxcIn1cbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbW1lbnQudGV4dCB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0Vm90ZXNJbk51bWJlcnMgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgaWYgKG51bSA+IDk5OTk5OSlcbiAgICByZXR1cm4gTWF0aC5hYnMobnVtKSA+IDk5OTk5OVxuICAgICAgPyAoTWF0aC5hYnMobnVtKSAvIDEwMDAwMDApLnRvRml4ZWQoMSkgKyBcIm1cIlxuICAgICAgOiBNYXRoLmFicyhudW0pO1xuICByZXR1cm4gTWF0aC5hYnMobnVtKSA+IDk5OVxuICAgID8gKE1hdGguYWJzKG51bSkgLyAxMDAwKS50b0ZpeGVkKDEpICsgXCJrXCJcbiAgICA6IE1hdGguYWJzKG51bSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=