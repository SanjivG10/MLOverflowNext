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
      width: 24,
      height: 24
    },
    voteContainer: {
      background: "#FAF8F9",
      borderRadius: 10
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
      lineNumber: 87,
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
            lineNumber: 92,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
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
              lineNumber: 97,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes["delete"],
              children: "delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "renderHTML",
            dangerouslySetInnerHTML: {
              __html: comment.text
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFpbiIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImNvbW1lbnRDb250YWluZXIiLCJlYWNoQ29tbWVudENvbnRhaW5lciIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJlYWNoQ29tbWVudCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImxhYmVsIiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwiZWRpdEJ1dHRvbnMiLCJlZGl0IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiY3Vyc29yIiwidm90ZVVwIiwiaGVpZ2h0Iiwidm90ZUNvbnRhaW5lciIsIkNvbW1lbnRMaXN0IiwiY29tbWVudHMiLCJjbGFzc2VzIiwibWFwIiwiY29tbWVudCIsImlzT3duZXIiLCJfX2h0bWwiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBbUI7QUFDOUNDLFFBQUksRUFBRTtBQUNKQyxlQUFTLEVBQUU7QUFEUCxLQUR3QztBQUk5Q0MsYUFBUyxFQUFFO0FBQ1RDLGFBQU8sRUFBRSxNQURBO0FBRVRDLG1CQUFhLEVBQUUsUUFGTjtBQUdUQyxpQkFBVyxFQUFFLE1BSEo7QUFJVEMsZ0JBQVUsRUFBRSxNQUpIO0FBS1RDLFdBQUssRUFBRSxNQUxFO0FBTVRDLG9CQUFjLEVBQUU7QUFOUCxLQUptQztBQWE5Q0Msb0JBQWdCLEVBQUU7QUFDaEJOLGFBQU8sRUFBRSxNQURPO0FBRWhCQyxtQkFBYSxFQUFFO0FBRkMsS0FiNEI7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QTtBQUFBLGVBREY7QUFtQkQsS0FwQkEsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTdCRDs7R0FBTVAsVztVQUNZL0IsUzs7O0tBRForQixXO0FBK0JOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZlZWRzL1tzbHVnXS5lM2RlMTMzNTI0OTA2ZTgwZDVjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcbiAgbWFpbjoge1xuICAgIG1hcmdpblRvcDogNDAsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgfSxcblxuICBjb21tZW50Q29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgfSxcbiAgZWFjaENvbW1lbnRDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBlYWNoQ29tbWVudDoge1xuICAgIGJvcmRlcjogXCIxcHggc29saWQgI2JmYmZiZlwiLFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgZm9udFdlaWdodDogXCJib2xkZXJcIixcbiAgfSxcbiAgZWRpdEJ1dHRvbnM6IHtcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIG1hcmdpblRvcDogMTAsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gIH0sXG4gIGVkaXQ6IHtcbiAgICBiYWNrZ3JvdW5kOiBcInRlYWxcIixcbiAgICBwYWRkaW5nOiA0LFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgbWFyZ2luUmlnaHQ6IDQsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcblxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIGRlbGV0ZToge1xuICAgIGJhY2tncm91bmQ6IFwiIzgwMDAwMFwiLFxuICAgIHBhZGRpbmc6IDQsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIHZvdGVVcDoge1xuICAgIHdpZHRoOiAyNCxcbiAgICBoZWlnaHQ6IDI0LFxuICB9LFxuICB2b3RlQ29udGFpbmVyOiB7XG4gICAgYmFja2dyb3VuZDogXCIjRkFGOEY5XCIsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIElDb21tZW50IHtcbiAgdGV4dDogc3RyaW5nO1xuICBpc093bmVyOiBib29sZWFuO1xuICBoYXNWb3RlZDogYm9vbGVhbjtcbiAgaGFzQm9va21hcmtlZDogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNvbW1lbnRzOiBJQ29tbWVudFtdO1xufVxuXG5jb25zdCBDb21tZW50TGlzdDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGNvbW1lbnRzIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfT5SZWNlbnQgQ29tbWVudHM8L2Rpdj5cbiAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQ6IElDb21tZW50KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWFjaENvbW1lbnRDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudm90ZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiL3VwLnN2Z1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy52b3RlVXB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVhY2hDb21tZW50fT5cbiAgICAgICAgICAgICAge2NvbW1lbnQuaXNPd25lciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdEJ1dHRvbnN9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXR9PmVkaXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZGVsZXRlfT5kZWxldGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wicmVuZGVySFRNTFwifVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29tbWVudC50ZXh0IH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=