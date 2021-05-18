self["webpackHotUpdate_N_E"]("pages/feeds/[slug]",{

/***/ "./components/Forms/CommentForm/index.tsx":
/*!************************************************!*\
  !*** ./components/Forms/CommentForm/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_bhairaja_mloverflow_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TextEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TextEditor */ "./components/Forms/TextEditor/index.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./components/Forms/CommentForm/constants.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/bhairaja/mloverflow-next/components/Forms/CommentForm/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function (theme) {
  return {
    container: {},
    dummyInput: {
      marginBottom: 20
    }
  };
});

var CommentForm = function CommentForm() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("E"),
      commentType = _useState[0],
      setCommentType = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.createEmpty()),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      uploadedImages = _useState3[0],
      setUploadedImages = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      clicked = _useState4[0],
      setClicked = _useState4[1];

  var classes = useStyles();

  function uploadCallback(file) {
    return new Promise(function (resolve, reject) {
      var imageObject = {
        file: file,
        localSrc: URL.createObjectURL(file)
      };
      var images = [].concat((0,_home_bhairaja_mloverflow_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(uploadedImages), [imageObject]);
      setUploadedImages(images);
      resolve({
        data: {
          link: imageObject.localSrc
        }
      });
    });
  }

  var onEditorStateChange = function onEditorStateChange(newEditorState) {
    setEditorState(newEditorState);
    var rawState = (0,draft_js__WEBPACK_IMPORTED_MODULE_4__.convertToRaw)(newEditorState.getCurrentContent());
    var html = draftjs_to_html__WEBPACK_IMPORTED_MODULE_3___default()(rawState);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.container,
    children: !clicked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.TextField, {
      id: "standard-basic",
      label: "Comment",
      className: classes.dummyInput,
      placeholder: _constants__WEBPACK_IMPORTED_MODULE_6__.placeholder,
      onFocus: function onFocus() {
        return setClicked(true);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, _this) : commentType === "E" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextEditor__WEBPACK_IMPORTED_MODULE_5__.default, {
      onEditorStateChange: onEditorStateChange,
      editorState: editorState,
      uploadCallback: uploadCallback,
      placeholder: _constants__WEBPACK_IMPORTED_MODULE_6__.placeholder
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_s(CommentForm, "s/TWQx2BzMmCuUKR7PjFe8gcDAU=", false, function () {
  return [useStyles];
});

_c = CommentForm;
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c;

$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Db21tZW50Rm9ybS9pbmRleC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwiZHVtbXlJbnB1dCIsIm1hcmdpbkJvdHRvbSIsIkNvbW1lbnRGb3JtIiwidXNlU3RhdGUiLCJjb21tZW50VHlwZSIsInNldENvbW1lbnRUeXBlIiwiRWRpdG9yU3RhdGUiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwidXBsb2FkZWRJbWFnZXMiLCJzZXRVcGxvYWRlZEltYWdlcyIsImNsaWNrZWQiLCJzZXRDbGlja2VkIiwiY2xhc3NlcyIsInVwbG9hZENhbGxiYWNrIiwiZmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2VPYmplY3QiLCJsb2NhbFNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImltYWdlcyIsImRhdGEiLCJsaW5rIiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsIm5ld0VkaXRvclN0YXRlIiwicmF3U3RhdGUiLCJjb252ZXJ0VG9SYXciLCJnZXRDdXJyZW50Q29udGVudCIsImh0bWwiLCJkcmFmdFRvSHRtbCIsInBsYWNlaG9sZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQW1CO0FBQzlDQyxhQUFTLEVBQUUsRUFEbUM7QUFFOUNDLGNBQVUsRUFBRTtBQUFFQyxrQkFBWSxFQUFFO0FBQWhCO0FBRmtDLEdBQW5CO0FBQUEsQ0FBRCxDQUE1Qjs7QUFLQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLCtDQUFRLENBQXdCLEdBQXhCLENBRHRCO0FBQUEsTUFDakJDLFdBRGlCO0FBQUEsTUFDSkMsY0FESTs7QUFBQSxtQkFFY0YsK0NBQVEsQ0FBQ0csNkRBQUEsRUFBRCxDQUZ0QjtBQUFBLE1BRWpCQyxXQUZpQjtBQUFBLE1BRUpDLGNBRkk7O0FBQUEsbUJBR29CTCwrQ0FBUSxDQUFXLEVBQVgsQ0FINUI7QUFBQSxNQUdqQk0sY0FIaUI7QUFBQSxNQUdEQyxpQkFIQzs7QUFBQSxtQkFJTVAsK0NBQVEsQ0FBQyxLQUFELENBSmQ7QUFBQSxNQUlqQlEsT0FKaUI7QUFBQSxNQUlSQyxVQUpROztBQUt4QixNQUFNQyxPQUFPLEdBQUdqQixTQUFTLEVBQXpCOztBQUVBLFdBQVNrQixjQUFULENBQXdCQyxJQUF4QixFQUFvQztBQUNsQyxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsVUFBTUMsV0FBVyxHQUFHO0FBQ2xCSixZQUFJLEVBQUpBLElBRGtCO0FBRWxCSyxnQkFBUSxFQUFFQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JQLElBQXBCO0FBRlEsT0FBcEI7QUFLQSxVQUFNUSxNQUFNLGdLQUFPZCxjQUFQLElBQXVCVSxXQUF2QixFQUFaO0FBQ0FULHVCQUFpQixDQUFDYSxNQUFELENBQWpCO0FBQ0FOLGFBQU8sQ0FBQztBQUFFTyxZQUFJLEVBQUU7QUFBRUMsY0FBSSxFQUFFTixXQUFXLENBQUNDO0FBQXBCO0FBQVIsT0FBRCxDQUFQO0FBQ0QsS0FUTSxDQUFQO0FBVUQ7O0FBRUQsTUFBTU0sbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxjQUFELEVBQXlCO0FBQ25EbkIsa0JBQWMsQ0FBQ21CLGNBQUQsQ0FBZDtBQUNBLFFBQU1DLFFBQVEsR0FBR0Msc0RBQVksQ0FBQ0YsY0FBYyxDQUFDRyxpQkFBZixFQUFELENBQTdCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxzREFBVyxDQUFDSixRQUFELENBQXhCO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWYsT0FBTyxDQUFDZCxTQUF4QjtBQUFBLGNBQ0csQ0FBQ1ksT0FBRCxnQkFDQyw4REFBQyx3REFBRDtBQUNFLFFBQUUsRUFBQyxnQkFETDtBQUVFLFdBQUssRUFBRSxTQUZUO0FBR0UsZUFBUyxFQUFFRSxPQUFPLENBQUNiLFVBSHJCO0FBSUUsaUJBQVcsRUFBRWlDLG1EQUpmO0FBS0UsYUFBTyxFQUFFO0FBQUEsZUFBTXJCLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUE7QUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsR0FRR1IsV0FBVyxLQUFLLEdBQWhCLGdCQUNGLDhEQUFDLGdEQUFEO0FBQ0UseUJBQW1CLEVBQUVzQixtQkFEdkI7QUFFRSxpQkFBVyxFQUFFbkIsV0FGZjtBQUdFLG9CQUFjLEVBQUVPLGNBSGxCO0FBSUUsaUJBQVcsRUFBRW1CLG1EQUFXQTtBQUoxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREUsR0FPQTtBQWhCTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvQkQsQ0E5Q0Q7O0dBQU0vQixXO1VBS1lOLFM7OztLQUxaTSxXO0FBZ0ROLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZlZWRzL1tzbHVnXS5iZjhhZWJhMjU1Nzk5ZWI5YTEzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBkcmFmdFRvSHRtbCBmcm9tIFwiZHJhZnRqcy10by1odG1sXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7IEVkaXRvclN0YXRlLCBjb252ZXJ0VG9SYXcgfSBmcm9tIFwiZHJhZnQtanNcIjtcbmltcG9ydCBUZXh0RWRpdG9yIGZyb20gXCIuLi9UZXh0RWRpdG9yXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IHBsYWNlaG9sZGVyIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmludGVyZmFjZSBJSW1hZ2Uge1xuICBmaWxlOiBGaWxlO1xuICBsb2NhbFNyYzogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIGNvbnRhaW5lcjoge30sXG4gIGR1bW15SW5wdXQ6IHsgbWFyZ2luQm90dG9tOiAyMCB9LFxufSkpO1xuXG5jb25zdCBDb21tZW50Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW2NvbW1lbnRUeXBlLCBzZXRDb21tZW50VHlwZV0gPSB1c2VTdGF0ZTxcIlRcIiB8IFwiQVwiIHwgXCJWXCIgfCBcIkVcIj4oXCJFXCIpO1xuICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCkpO1xuICBjb25zdCBbdXBsb2FkZWRJbWFnZXMsIHNldFVwbG9hZGVkSW1hZ2VzXSA9IHVzZVN0YXRlPElJbWFnZVtdPihbXSk7XG4gIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGZ1bmN0aW9uIHVwbG9hZENhbGxiYWNrKGZpbGU6IEZpbGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgaW1hZ2VPYmplY3QgPSB7XG4gICAgICAgIGZpbGUsXG4gICAgICAgIGxvY2FsU3JjOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgaW1hZ2VzID0gWy4uLnVwbG9hZGVkSW1hZ2VzLCBpbWFnZU9iamVjdF07XG4gICAgICBzZXRVcGxvYWRlZEltYWdlcyhpbWFnZXMpO1xuICAgICAgcmVzb2x2ZSh7IGRhdGE6IHsgbGluazogaW1hZ2VPYmplY3QubG9jYWxTcmMgfSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSAobmV3RWRpdG9yU3RhdGU6IGFueSkgPT4ge1xuICAgIHNldEVkaXRvclN0YXRlKG5ld0VkaXRvclN0YXRlKTtcbiAgICBjb25zdCByYXdTdGF0ZSA9IGNvbnZlcnRUb1JhdyhuZXdFZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKTtcbiAgICBjb25zdCBodG1sID0gZHJhZnRUb0h0bWwocmF3U3RhdGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIHshY2xpY2tlZCA/IChcbiAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgIGxhYmVsPXtcIkNvbW1lbnRcIn1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHVtbXlJbnB1dH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Q2xpY2tlZCh0cnVlKX1cbiAgICAgICAgLz5cbiAgICAgICkgOiBjb21tZW50VHlwZSA9PT0gXCJFXCIgPyAoXG4gICAgICAgIDxUZXh0RWRpdG9yXG4gICAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17b25FZGl0b3JTdGF0ZUNoYW5nZX1cbiAgICAgICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XG4gICAgICAgICAgdXBsb2FkQ2FsbGJhY2s9e3VwbG9hZENhbGxiYWNrfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgLz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9