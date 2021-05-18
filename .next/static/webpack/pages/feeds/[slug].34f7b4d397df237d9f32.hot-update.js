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
    bookmarkContainer: {},
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
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes.bookmarkContainer,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/bookmark.svg",
                alt: "",
                className: classes.bookmark
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 21
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes.edit,
              children: "edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes["delete"],
              children: "delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
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
            lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFpbiIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImNvbW1lbnRDb250YWluZXIiLCJlYWNoQ29tbWVudENvbnRhaW5lciIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsIm1pbkhlaWdodCIsImVhY2hDb21tZW50IiwibGFiZWwiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJlZGl0QnV0dG9ucyIsImVkaXQiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwidm90ZVVwIiwiaGVpZ2h0Iiwidm90ZUNvbnRhaW5lciIsImJvb2ttYXJrQ29udGFpbmVyIiwiYm9va21hcmsiLCJDb21tZW50TGlzdCIsImNvbW1lbnRzIiwiY2xhc3NlcyIsIm1hcCIsImNvbW1lbnQiLCJoYXNWb3RlZCIsImdldFZvdGVzSW5OdW1iZXJzIiwidm90ZXMiLCJpc093bmVyIiwiX19odG1sIiwidGV4dCIsIm51bSIsIk1hdGgiLCJhYnMiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBbUI7QUFDOUNDLFFBQUksRUFBRTtBQUNKQyxlQUFTLEVBQUU7QUFEUCxLQUR3QztBQUk5Q0MsYUFBUyxFQUFFO0FBQ1RDLGFBQU8sRUFBRSxNQURBO0FBRVRDLG1CQUFhLEVBQUUsUUFGTjtBQUdUQyxpQkFBVyxFQUFFLE1BSEo7QUFJVEMsZ0JBQVUsRUFBRSxNQUpIO0FBS1RDLFdB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QyxJQUF1QyxHQURwQyxHQUVIRixJQUFJLENBQUNDLEdBQUwsQ0FBU0YsR0FBVCxDQUZKO0FBR0YsU0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQVQsSUFBZ0IsR0FBaEIsR0FDSCxDQUFDQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0YsR0FBVCxJQUFnQixJQUFqQixFQUF1QkcsT0FBdkIsQ0FBK0IsQ0FBL0IsSUFBb0MsR0FEakMsR0FFSEYsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQVQsQ0FGSjtBQUdELENBUkQ7O0FBVUEsK0RBQWVYLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmVlZHMvW3NsdWddLjM0ZjdiNGQzOTdkZjIzN2Q5ZjMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICBtYWluOiB7XG4gICAgbWFyZ2luVG9wOiA0MCxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICB9LFxuXG4gIGNvbW1lbnRDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICB9LFxuICBlYWNoQ29tbWVudENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjYmZiZmJmXCIsXG4gICAgbWluSGVpZ2h0OiAxNTAsXG4gIH0sXG4gIGVhY2hDb21tZW50OiB7fSxcbiAgbGFiZWw6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgZm9udFdlaWdodDogXCJib2xkZXJcIixcbiAgfSxcbiAgZWRpdEJ1dHRvbnM6IHtcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIG1hcmdpblRvcDogMTAsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gIH0sXG4gIGVkaXQ6IHtcbiAgICBiYWNrZ3JvdW5kOiBcInRlYWxcIixcbiAgICBwYWRkaW5nOiA0LFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgbWFyZ2luUmlnaHQ6IDQsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcblxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIGRlbGV0ZToge1xuICAgIGJhY2tncm91bmQ6IFwiIzgwMDAwMFwiLFxuICAgIHBhZGRpbmc6IDQsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIHZvdGVVcDoge1xuICAgIHdpZHRoOiAzNixcbiAgICBoZWlnaHQ6IDM2LFxuICAgIHBhZGRpbmc6IDIsXG4gIH0sXG4gIHZvdGVDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmQ6IFwiI0ZBRjhGOVwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gIH0sXG4gIGJvb2ttYXJrQ29udGFpbmVyOiB7fSxcbiAgYm9va21hcms6IHtcbiAgICBoZWlnaHQ6IDIwLFxuICAgIHdpZHRoOiAyMCxcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIElDb21tZW50IHtcbiAgdGV4dDogc3RyaW5nO1xuICBpc093bmVyOiBib29sZWFuO1xuICBoYXNWb3RlZDogYm9vbGVhbjtcbiAgaGFzQm9va21hcmtlZDogYm9vbGVhbjtcbiAgdm90ZXM6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNvbW1lbnRzOiBJQ29tbWVudFtdO1xufVxuXG5jb25zdCBDb21tZW50TGlzdDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGNvbW1lbnRzIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfT5SRUNFTlQgQ09NTUVOVFM8L2Rpdj5cbiAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQ6IElDb21tZW50KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWFjaENvbW1lbnRDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudm90ZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIHNyYz17Y29tbWVudC5oYXNWb3RlZCA/IFwiL3VwRG9uZS5zdmdcIiA6IFwiL3VwLnN2Z1wifVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy52b3RlVXB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXY+e2dldFZvdGVzSW5OdW1iZXJzKGNvbW1lbnQudm90ZXMpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lYWNoQ29tbWVudH0+XG4gICAgICAgICAgICAgIHtjb21tZW50LmlzT3duZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRCdXR0b25zfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib29rbWFya0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYm9va21hcmsuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib29rbWFya31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5lZGl0fT5lZGl0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRlbGV0ZX0+ZGVsZXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInJlbmRlckhUTUxcIn1cbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbW1lbnQudGV4dCB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0Vm90ZXNJbk51bWJlcnMgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgaWYgKG51bSA+IDk5OTk5OSlcbiAgICByZXR1cm4gTWF0aC5hYnMobnVtKSA+IDk5OTk5OVxuICAgICAgPyAoTWF0aC5hYnMobnVtKSAvIDEwMDAwMDApLnRvRml4ZWQoMSkgKyBcIm1cIlxuICAgICAgOiBNYXRoLmFicyhudW0pO1xuICByZXR1cm4gTWF0aC5hYnMobnVtKSA+IDk5OVxuICAgID8gKE1hdGguYWJzKG51bSkgLyAxMDAwKS50b0ZpeGVkKDEpICsgXCJrXCJcbiAgICA6IE1hdGguYWJzKG51bSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=