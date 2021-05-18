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
      border: "1px solid #bfbfbf"
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
      lineNumber: 84,
      columnNumber: 7
    }, _this), comments.map(function (comment) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.eachCommentContainer,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.voteContainer,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            alt: "",
            src: comment.hasVoted ? "/upDone.svg" : "/up.svg",
            className: classes.voteUp
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
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
              lineNumber: 98,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes["delete"],
              children: "delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "renderHTML",
            dangerouslySetInnerHTML: {
              __html: comment.text
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, _this);
};

_s(CommentList, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = CommentList;

var getVotesInNumbers = function getVotesInNumbers(num) {
  if (num > 999999) return Math.abs(num) > 999999 ? Math.sign(num) * Number(Math.abs(num) / 1000000).toFixed(1) + "m" : Math.sign(num) * Math.abs(num);
  return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k" : Math.sign(num) * Math.abs(num);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFpbiIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImNvbW1lbnRDb250YWluZXIiLCJlYWNoQ29tbWVudENvbnRhaW5lciIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsImVhY2hDb21tZW50IiwibGFiZWwiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJlZGl0QnV0dG9ucyIsImVkaXQiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwidm90ZVVwIiwiaGVpZ2h0Iiwidm90ZUNvbnRhaW5lciIsIkNvbW1lbnRMaXN0IiwiY29tbWVudHMiLCJjbGFzc2VzIiwibWFwIiwiY29tbWVudCIsImhhc1ZvdGVkIiwiaXNPd25lciIsIl9faHRtbCIsInRleHQiLCJnZXRWb3Rlc0luTnVtYmVycyIsIm51bSIsIk1hdGgiLCJhYnMiLCJzaWduIiwiTnVtYmVyIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQW1CO0FBQzlDQyxRQUFJLEVBQUU7QUFDSkMsZUFBUyxFQUFFO0FBRFAsS0FEd0M7QUFJOUNDLGFBQVMsRUFBRTtBQUNUQyxhQUFPLEVBQUUsTUFEQTtBQUVUQyxtQkFBYSxFQUFFLFFBRk47QUFHVEMsaUJBQVcsRUFBRSxNQUhKO0FBSVRDLGdCQUFVLEVBQUUsTUFKSDtBQUtUQyxXQUFLLEVBQUUsTUFMRTtBQU1UQyxvQkFBYyxFQUFFO0FBTlAs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QTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBdUJELEtBeEJBLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4QkQsQ0FqQ0Q7O0dBQU1SLFc7VUFDWS9CLFM7OztLQURaK0IsVzs7QUFtQ04sSUFBTVMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxHQUFELEVBQWlCO0FBQ3pDLE1BQUlBLEdBQUcsR0FBRyxNQUFWLEVBQ0UsT0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQVQsSUFBZ0IsTUFBaEIsR0FDSEMsSUFBSSxDQUFDRSxJQUFMLENBQVVILEdBQVYsSUFBaUJJLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQVQsSUFBZ0IsT0FBakIsQ0FBTixDQUFnQ0ssT0FBaEMsQ0FBd0MsQ0FBeEMsQ0FBakIsR0FBOEQsR0FEM0QsR0FFSEosSUFBSSxDQUFDRSxJQUFMLENBQVVILEdBQVYsSUFBaUJDLElBQUksQ0FBQ0MsR0FBTCxDQUFTRixHQUFULENBRnJCO0FBR0YsU0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQVQsSUFBZ0IsR0FBaEIsR0FDSEMsSUFBSSxDQUFDRSxJQUFMLENBQVVILEdBQVYsSUFBaUIsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLEdBQVQsSUFBZ0IsSUFBakIsRUFBdUJLLE9BQXZCLENBQStCLENBQS9CLENBQWpCLEdBQXFELEdBRGxELEdBRUhKLElBQUksQ0FBQ0UsSUFBTCxDQUFVSCxHQUFWLElBQWlCQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0YsR0FBVCxDQUZyQjtBQUdELENBUkQ7O0FBVUEsK0RBQWVWLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmVlZHMvW3NsdWddLjI2MDA4ZmZlYTQ1MmIwYWU0NWVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICBtYWluOiB7XG4gICAgbWFyZ2luVG9wOiA0MCxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICB9LFxuXG4gIGNvbW1lbnRDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICB9LFxuICBlYWNoQ29tbWVudENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjYmZiZmJmXCIsXG4gIH0sXG4gIGVhY2hDb21tZW50OiB7fSxcbiAgbGFiZWw6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgZm9udFdlaWdodDogXCJib2xkZXJcIixcbiAgfSxcbiAgZWRpdEJ1dHRvbnM6IHtcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIG1hcmdpblRvcDogMTAsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gIH0sXG4gIGVkaXQ6IHtcbiAgICBiYWNrZ3JvdW5kOiBcInRlYWxcIixcbiAgICBwYWRkaW5nOiA0LFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgbWFyZ2luUmlnaHQ6IDQsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcblxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIGRlbGV0ZToge1xuICAgIGJhY2tncm91bmQ6IFwiIzgwMDAwMFwiLFxuICAgIHBhZGRpbmc6IDQsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIHZvdGVVcDoge1xuICAgIHdpZHRoOiAzNixcbiAgICBoZWlnaHQ6IDM2LFxuICAgIHBhZGRpbmc6IDIsXG4gIH0sXG4gIHZvdGVDb250YWluZXI6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiNGQUY4RjlcIixcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIElDb21tZW50IHtcbiAgdGV4dDogc3RyaW5nO1xuICBpc093bmVyOiBib29sZWFuO1xuICBoYXNWb3RlZDogYm9vbGVhbjtcbiAgaGFzQm9va21hcmtlZDogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNvbW1lbnRzOiBJQ29tbWVudFtdO1xufVxuXG5jb25zdCBDb21tZW50TGlzdDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGNvbW1lbnRzIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfT5SZWNlbnQgQ29tbWVudHM8L2Rpdj5cbiAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQ6IElDb21tZW50KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWFjaENvbW1lbnRDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudm90ZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIHNyYz17Y29tbWVudC5oYXNWb3RlZCA/IFwiL3VwRG9uZS5zdmdcIiA6IFwiL3VwLnN2Z1wifVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy52b3RlVXB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVhY2hDb21tZW50fT5cbiAgICAgICAgICAgICAge2NvbW1lbnQuaXNPd25lciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdEJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXR9PmVkaXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZGVsZXRlfT5kZWxldGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wicmVuZGVySFRNTFwifVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29tbWVudC50ZXh0IH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRWb3Rlc0luTnVtYmVycyA9IChudW06IG51bWJlcikgPT4ge1xuICBpZiAobnVtID4gOTk5OTk5KVxuICAgIHJldHVybiBNYXRoLmFicyhudW0pID4gOTk5OTk5XG4gICAgICA/IE1hdGguc2lnbihudW0pICogTnVtYmVyKE1hdGguYWJzKG51bSkgLyAxMDAwMDAwKS50b0ZpeGVkKDEpICsgXCJtXCJcbiAgICAgIDogTWF0aC5zaWduKG51bSkgKiBNYXRoLmFicyhudW0pO1xuICByZXR1cm4gTWF0aC5hYnMobnVtKSA+IDk5OVxuICAgID8gTWF0aC5zaWduKG51bSkgKiAoTWF0aC5hYnMobnVtKSAvIDEwMDApLnRvRml4ZWQoMSkgKyBcImtcIlxuICAgIDogTWF0aC5zaWduKG51bSkgKiBNYXRoLmFicyhudW0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9