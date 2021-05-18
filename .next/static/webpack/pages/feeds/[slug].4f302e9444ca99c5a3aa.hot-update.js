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
/* harmony import */ var _FeedForm_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FeedForm/constants */ "./components/Forms/FeedForm/constants.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/bhairaja/mloverflow-next/components/Forms/CommentForm/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.makeStyles)(function (theme) {
  return {
    container: {}
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
      placeholder: _FeedForm_constants__WEBPACK_IMPORTED_MODULE_6__.placeholder,
      onFocus: function onFocus() {
        return setClicked(true);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, _this) : commentType === "E" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextEditor__WEBPACK_IMPORTED_MODULE_5__.default, {
      onEditorStateChange: onEditorStateChange,
      editorState: editorState,
      uploadCallback: uploadCallback,
      placeholder: _FeedForm_constants__WEBPACK_IMPORTED_MODULE_6__.placeholder
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, _this) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Db21tZW50Rm9ybS9pbmRleC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwiQ29tbWVudEZvcm0iLCJ1c2VTdGF0ZSIsImNvbW1lbnRUeXBlIiwic2V0Q29tbWVudFR5cGUiLCJFZGl0b3JTdGF0ZSIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJ1cGxvYWRlZEltYWdlcyIsInNldFVwbG9hZGVkSW1hZ2VzIiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJjbGFzc2VzIiwidXBsb2FkQ2FsbGJhY2siLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZU9iamVjdCIsImxvY2FsU3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaW1hZ2VzIiwiZGF0YSIsImxpbmsiLCJvbkVkaXRvclN0YXRlQ2hhbmdlIiwibmV3RWRpdG9yU3RhdGUiLCJyYXdTdGF0ZSIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwiaHRtbCIsImRyYWZ0VG9IdG1sIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBbUI7QUFDOUNDLGFBQVMsRUFBRTtBQURtQyxHQUFuQjtBQUFBLENBQUQsQ0FBNUI7O0FBSUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNjQywrQ0FBUSxDQUF3QixHQUF4QixDQUR0QjtBQUFBLE1BQ2pCQyxXQURpQjtBQUFBLE1BQ0pDLGNBREk7O0FBQUEsbUJBRWNGLCtDQUFRLENBQUNHLDZEQUFBLEVBQUQsQ0FGdEI7QUFBQSxNQUVqQkMsV0FGaUI7QUFBQSxNQUVKQyxjQUZJOztBQUFBLG1CQUdvQkwsK0NBQVEsQ0FBVyxFQUFYLENBSDVCO0FBQUEsTUFHakJNLGNBSGlCO0FBQUEsTUFHREMsaUJBSEM7O0FBQUEsbUJBSU1QLCtDQUFRLENBQUMsS0FBRCxDQUpkO0FBQUEsTUFJakJRLE9BSmlCO0FBQUEsTUFJUkMsVUFKUTs7QUFLeEIsTUFBTUMsT0FBTyxHQUFHZixTQUFTLEVBQXpCOztBQUVBLFdBQVNnQixjQUFULENBQXdCQyxJQUF4QixFQUFvQztBQUNsQyxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsVUFBTUMsV0FBVyxHQUFHO0FBQ2xCSixZQUFJLEVBQUpBLElBRGtCO0FBRWxCSyxnQkFBUSxFQUFFQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JQLElBQXBCO0FBRlEsT0FBcEI7QUFLQSxVQUFNUSxNQUFNLGdLQUFPZCxjQUFQLElBQXVCVSxXQUF2QixFQUFaO0FBQ0FULHVCQUFpQixDQUFDYSxNQUFELENBQWpCO0FBQ0FOLGFBQU8sQ0FBQztBQUFFTyxZQUFJLEVBQUU7QUFBRUMsY0FBSSxFQUFFTixXQUFXLENBQUNDO0FBQXBCO0FBQVIsT0FBRCxDQUFQO0FBQ0QsS0FUTSxDQUFQO0FBVUQ7O0FBRUQsTUFBTU0sbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxjQUFELEVBQXlCO0FBQ25EbkIsa0JBQWMsQ0FBQ21CLGNBQUQsQ0FBZDtBQUNBLFFBQU1DLFFBQVEsR0FBR0Msc0RBQVksQ0FBQ0YsY0FBYyxDQUFDRyxpQkFBZixFQUFELENBQTdCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxzREFBVyxDQUFDSixRQUFELENBQXhCO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWYsT0FBTyxDQUFDWixTQUF4QjtBQUFBLGNBQ0csQ0FBQ1UsT0FBRCxnQkFDQyw4REFBQyx3REFBRDtBQUNFLFFBQUUsRUFBQyxnQkFETDtBQUVFLFdBQUssRUFBRSxTQUZUO0FBR0UsaUJBQVcsRUFBRXNCLDREQUhmO0FBSUUsYUFBTyxFQUFFO0FBQUEsZUFBTXJCLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsR0FPR1IsV0FBVyxLQUFLLEdBQWhCLGdCQUNGLDhEQUFDLGdEQUFEO0FBQ0UseUJBQW1CLEVBQUVzQixtQkFEdkI7QUFFRSxpQkFBVyxFQUFFbkIsV0FGZjtBQUdFLG9CQUFjLEVBQUVPLGNBSGxCO0FBSUUsaUJBQVcsRUFBRW1CLDREQUFXQTtBQUoxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREUsR0FPQTtBQWZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQTdDRDs7R0FBTS9CLFc7VUFLWUosUzs7O0tBTFpJLFc7QUErQ04sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmVlZHMvW3NsdWddLjRmMzAyZTk0NDRjYTk5YzVhM2FhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGRyYWZ0VG9IdG1sIGZyb20gXCJkcmFmdGpzLXRvLWh0bWxcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgRWRpdG9yU3RhdGUsIGNvbnZlcnRUb1JhdyB9IGZyb20gXCJkcmFmdC1qc1wiO1xuaW1wb3J0IFRleHRFZGl0b3IgZnJvbSBcIi4uL1RleHRFZGl0b3JcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgcGxhY2Vob2xkZXIgfSBmcm9tIFwiLi4vRmVlZEZvcm0vY29uc3RhbnRzXCI7XG5cbmludGVyZmFjZSBJSW1hZ2Uge1xuICBmaWxlOiBGaWxlO1xuICBsb2NhbFNyYzogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIGNvbnRhaW5lcjoge30sXG59KSk7XG5cbmNvbnN0IENvbW1lbnRGb3JtID0gKCkgPT4ge1xuICBjb25zdCBbY29tbWVudFR5cGUsIHNldENvbW1lbnRUeXBlXSA9IHVzZVN0YXRlPFwiVFwiIHwgXCJBXCIgfCBcIlZcIiB8IFwiRVwiPihcIkVcIik7XG4gIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKSk7XG4gIGNvbnN0IFt1cGxvYWRlZEltYWdlcywgc2V0VXBsb2FkZWRJbWFnZXNdID0gdXNlU3RhdGU8SUltYWdlW10+KFtdKTtcbiAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgZnVuY3Rpb24gdXBsb2FkQ2FsbGJhY2soZmlsZTogRmlsZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBpbWFnZU9iamVjdCA9IHtcbiAgICAgICAgZmlsZSxcbiAgICAgICAgbG9jYWxTcmM6IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSksXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbWFnZXMgPSBbLi4udXBsb2FkZWRJbWFnZXMsIGltYWdlT2JqZWN0XTtcbiAgICAgIHNldFVwbG9hZGVkSW1hZ2VzKGltYWdlcyk7XG4gICAgICByZXNvbHZlKHsgZGF0YTogeyBsaW5rOiBpbWFnZU9iamVjdC5sb2NhbFNyYyB9IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgb25FZGl0b3JTdGF0ZUNoYW5nZSA9IChuZXdFZGl0b3JTdGF0ZTogYW55KSA9PiB7XG4gICAgc2V0RWRpdG9yU3RhdGUobmV3RWRpdG9yU3RhdGUpO1xuICAgIGNvbnN0IHJhd1N0YXRlID0gY29udmVydFRvUmF3KG5ld0VkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpO1xuICAgIGNvbnN0IGh0bWwgPSBkcmFmdFRvSHRtbChyYXdTdGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgeyFjbGlja2VkID8gKFxuICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgbGFiZWw9e1wiQ29tbWVudFwifVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRDbGlja2VkKHRydWUpfVxuICAgICAgICAvPlxuICAgICAgKSA6IGNvbW1lbnRUeXBlID09PSBcIkVcIiA/IChcbiAgICAgICAgPFRleHRFZGl0b3JcbiAgICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXtvbkVkaXRvclN0YXRlQ2hhbmdlfVxuICAgICAgICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX1cbiAgICAgICAgICB1cGxvYWRDYWxsYmFjaz17dXBsb2FkQ2FsbGJhY2t9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=