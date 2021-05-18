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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TextEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TextEditor */ "./components/Forms/TextEditor/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/bhairaja/mloverflow-next/components/Forms/CommentForm/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(function (theme) {
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
    children: commentType === "E" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextEditor__WEBPACK_IMPORTED_MODULE_5__.default, {
      onEditorStateChange: onEditorStateChange,
      editorState: editorState,
      uploadCallback: uploadCallback,
      placeholder: "Type a comment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, _this) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Db21tZW50Rm9ybS9pbmRleC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwiQ29tbWVudEZvcm0iLCJ1c2VTdGF0ZSIsImNvbW1lbnRUeXBlIiwic2V0Q29tbWVudFR5cGUiLCJFZGl0b3JTdGF0ZSIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJ1cGxvYWRlZEltYWdlcyIsInNldFVwbG9hZGVkSW1hZ2VzIiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJjbGFzc2VzIiwidXBsb2FkQ2FsbGJhY2siLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZU9iamVjdCIsImxvY2FsU3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaW1hZ2VzIiwiZGF0YSIsImxpbmsiLCJvbkVkaXRvclN0YXRlQ2hhbmdlIiwibmV3RWRpdG9yU3RhdGUiLCJyYXdTdGF0ZSIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwiaHRtbCIsImRyYWZ0VG9IdG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFPQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQW1CO0FBQzlDQyxhQUFTLEVBQUU7QUFEbUMsR0FBbkI7QUFBQSxDQUFELENBQTVCOztBQUlBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDY0MsK0NBQVEsQ0FBd0IsR0FBeEIsQ0FEdEI7QUFBQSxNQUNqQkMsV0FEaUI7QUFBQSxNQUNKQyxjQURJOztBQUFBLG1CQUVjRiwrQ0FBUSxDQUFDRyw2REFBQSxFQUFELENBRnRCO0FBQUEsTUFFakJDLFdBRmlCO0FBQUEsTUFFSkMsY0FGSTs7QUFBQSxtQkFHb0JMLCtDQUFRLENBQVcsRUFBWCxDQUg1QjtBQUFBLE1BR2pCTSxjQUhpQjtBQUFBLE1BR0RDLGlCQUhDOztBQUFBLG1CQUlNUCwrQ0FBUSxDQUFDLEtBQUQsQ0FKZDtBQUFBLE1BSWpCUSxPQUppQjtBQUFBLE1BSVJDLFVBSlE7O0FBS3hCLE1BQU1DLE9BQU8sR0FBR2YsU0FBUyxFQUF6Qjs7QUFFQSxXQUFTZ0IsY0FBVCxDQUF3QkMsSUFBeEIsRUFBb0M7QUFDbEMsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLFVBQU1DLFdBQVcsR0FBRztBQUNsQkosWUFBSSxFQUFKQSxJQURrQjtBQUVsQkssZ0JBQVEsRUFBRUMsR0FBRyxDQUFDQyxlQUFKLENBQW9CUCxJQUFwQjtBQUZRLE9BQXBCO0FBS0EsVUFBTVEsTUFBTSxnS0FBT2QsY0FBUCxJQUF1QlUsV0FBdkIsRUFBWjtBQUNBVCx1QkFBaUIsQ0FBQ2EsTUFBRCxDQUFqQjtBQUNBTixhQUFPLENBQUM7QUFBRU8sWUFBSSxFQUFFO0FBQUVDLGNBQUksRUFBRU4sV0FBVyxDQUFDQztBQUFwQjtBQUFSLE9BQUQsQ0FBUDtBQUNELEtBVE0sQ0FBUDtBQVVEOztBQUVELE1BQU1NLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsY0FBRCxFQUF5QjtBQUNuRG5CLGtCQUFjLENBQUNtQixjQUFELENBQWQ7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLHNEQUFZLENBQUNGLGNBQWMsQ0FBQ0csaUJBQWYsRUFBRCxDQUE3QjtBQUNBLFFBQU1DLElBQUksR0FBR0Msc0RBQVcsQ0FBQ0osUUFBRCxDQUF4QjtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVmLE9BQU8sQ0FBQ1osU0FBeEI7QUFBQSxjQUNHRyxXQUFXLEtBQUssR0FBaEIsZ0JBQ0MsOERBQUMsZ0RBQUQ7QUFDRSx5QkFBbUIsRUFBRXNCLG1CQUR2QjtBQUVFLGlCQUFXLEVBQUVuQixXQUZmO0FBR0Usb0JBQWMsRUFBRU8sY0FIbEI7QUFJRSxpQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEdBT0c7QUFSTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQXRDRDs7R0FBTVosVztVQUtZSixTOzs7S0FMWkksVztBQXdDTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWVkcy9bc2x1Z10uNTdhODE5YTg1ZDVkNzlkNGU4OGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG5pbXBvcnQgZHJhZnRUb0h0bWwgZnJvbSBcImRyYWZ0anMtdG8taHRtbFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBFZGl0b3JTdGF0ZSwgY29udmVydFRvUmF3IH0gZnJvbSBcImRyYWZ0LWpzXCI7XG5pbXBvcnQgVGV4dEVkaXRvciBmcm9tIFwiLi4vVGV4dEVkaXRvclwiO1xuXG5pbnRlcmZhY2UgSUltYWdlIHtcbiAgZmlsZTogRmlsZTtcbiAgbG9jYWxTcmM6IHN0cmluZztcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICBjb250YWluZXI6IHt9LFxufSkpO1xuXG5jb25zdCBDb21tZW50Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW2NvbW1lbnRUeXBlLCBzZXRDb21tZW50VHlwZV0gPSB1c2VTdGF0ZTxcIlRcIiB8IFwiQVwiIHwgXCJWXCIgfCBcIkVcIj4oXCJFXCIpO1xuICBjb25zdCBbZWRpdG9yU3RhdGUsIHNldEVkaXRvclN0YXRlXSA9IHVzZVN0YXRlKEVkaXRvclN0YXRlLmNyZWF0ZUVtcHR5KCkpO1xuICBjb25zdCBbdXBsb2FkZWRJbWFnZXMsIHNldFVwbG9hZGVkSW1hZ2VzXSA9IHVzZVN0YXRlPElJbWFnZVtdPihbXSk7XG4gIGNvbnN0IFtjbGlja2VkLCBzZXRDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGZ1bmN0aW9uIHVwbG9hZENhbGxiYWNrKGZpbGU6IEZpbGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgaW1hZ2VPYmplY3QgPSB7XG4gICAgICAgIGZpbGUsXG4gICAgICAgIGxvY2FsU3JjOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgaW1hZ2VzID0gWy4uLnVwbG9hZGVkSW1hZ2VzLCBpbWFnZU9iamVjdF07XG4gICAgICBzZXRVcGxvYWRlZEltYWdlcyhpbWFnZXMpO1xuICAgICAgcmVzb2x2ZSh7IGRhdGE6IHsgbGluazogaW1hZ2VPYmplY3QubG9jYWxTcmMgfSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSAobmV3RWRpdG9yU3RhdGU6IGFueSkgPT4ge1xuICAgIHNldEVkaXRvclN0YXRlKG5ld0VkaXRvclN0YXRlKTtcbiAgICBjb25zdCByYXdTdGF0ZSA9IGNvbnZlcnRUb1JhdyhuZXdFZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKTtcbiAgICBjb25zdCBodG1sID0gZHJhZnRUb0h0bWwocmF3U3RhdGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIHtjb21tZW50VHlwZSA9PT0gXCJFXCIgPyAoXG4gICAgICAgIDxUZXh0RWRpdG9yXG4gICAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17b25FZGl0b3JTdGF0ZUNoYW5nZX1cbiAgICAgICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XG4gICAgICAgICAgdXBsb2FkQ2FsbGJhY2s9e3VwbG9hZENhbGxiYWNrfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIGNvbW1lbnRcIlxuICAgICAgICAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=