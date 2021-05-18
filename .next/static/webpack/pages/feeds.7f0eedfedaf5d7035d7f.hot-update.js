self["webpackHotUpdate_N_E"]("pages/feeds",{

/***/ "./components/Forms/TextEditor/index.tsx":
/*!***********************************************!*\
  !*** ./components/Forms/TextEditor/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TextEditor; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./components/Forms/TextEditor/constants.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/bhairaja/mloverflow-next/components/Forms/TextEditor/index.tsx";


var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "vendors-node_modules_react-draft-wysiwyg_dist_react-draft-wysiwyg_js").then(__webpack_require__.t.bind(__webpack_require__, /*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js", 23)).then(function (mod) {
    return mod.Editor;
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js")];
    },
    modules: ["../components/Forms/TextEditor/index.tsx -> " + "react-draft-wysiwyg"]
  }
});
_c2 = Editor;

function TextEditor(_ref) {
  var editorState = _ref.editorState,
      placeholder = _ref.placeholder,
      onEditorStateChange = _ref.onEditorStateChange,
      uploadCallback = _ref.uploadCallback;
  var toolbarConfig = {
    options: ["link", "list", "textAlign", "inline", "colorPicker", "embedded", "emoji", "image", "remove", "history"],
    inline: {
      inDropdown: false,
      options: ["bold", "italic", "underline", "strikethrough", "monospace", "superscript", "subscript"]
    },
    blockType: {
      inDropdown: true,
      options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6", "Blockquote", "Code"]
    },
    list: {
      inDropdown: false
    },
    textAlign: {
      inDropdown: false,
      options: ["left", "center", "right", "justify"]
    },
    colorPicker: {
      colors: _constants__WEBPACK_IMPORTED_MODULE_3__.colors
    },
    link: {
      inDropdown: false,
      showOpenOptionOnHover: true,
      defaultTargetOption: "_self",
      options: ["link", "unlink"]
    },
    emoji: {
      emojis: _constants__WEBPACK_IMPORTED_MODULE_3__.emojis
    },
    image: {
      uploadCallback: uploadCallback,
      uploadEnabled: true,
      alignmentEnabled: true,
      previewImage: true,
      inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
      alt: {
        present: false,
        mandatory: false
      },
      defaultSize: {
        height: 500,
        width: 500
      }
    },
    history: {
      inDropdown: false,
      options: ["undo", "redo"]
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Editor, {
    toolbar: toolbarConfig,
    editorState: editorState,
    placeholder: placeholder,
    editorClassName: "feedFormReact",
    wrapperClassName: "wrapperFormReact",
    onEditorStateChange: onEditorStateChange,
    stripPastedStyles: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, this);
}
_c3 = TextEditor;

var _c, _c2, _c3;

$RefreshReg$(_c, "Editor$dynamic");
$RefreshReg$(_c2, "Editor");
$RefreshReg$(_c3, "TextEditor");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9UZXh0RWRpdG9yL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFZGl0b3IiLCJkeW5hbWljIiwidGhlbiIsIm1vZCIsInNzciIsIlRleHRFZGl0b3IiLCJlZGl0b3JTdGF0ZSIsInBsYWNlaG9sZGVyIiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsInVwbG9hZENhbGxiYWNrIiwidG9vbGJhckNvbmZpZyIsIm9wdGlvbnMiLCJpbmxpbmUiLCJpbkRyb3Bkb3duIiwiYmxvY2tUeXBlIiwibGlzdCIsInRleHRBbGlnbiIsImNvbG9yUGlja2VyIiwiY29sb3JzIiwibGluayIsInNob3dPcGVuT3B0aW9uT25Ib3ZlciIsImRlZmF1bHRUYXJnZXRPcHRpb24iLCJlbW9qaSIsImVtb2ppcyIsImltYWdlIiwidXBsb2FkRW5hYmxlZCIsImFsaWdubWVudEVuYWJsZWQiLCJwcmV2aWV3SW1hZ2UiLCJpbnB1dEFjY2VwdCIsImFsdCIsInByZXNlbnQiLCJtYW5kYXRvcnkiLCJkZWZhdWx0U2l6ZSIsImhlaWdodCIsIndpZHRoIiwiaGlzdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxtREFBTyxNQUNwQjtBQUFBLFNBQU0scVFBQThCQyxJQUE5QixDQUFtQyxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDSCxNQUFiO0FBQUEsR0FBbkMsQ0FBTjtBQUFBLENBRG9CLEVBRXBCO0FBQUVJLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQURhLDJGQUNiO0FBQUE7QUFBQSwrREFEYSxxQkFDYjtBQUFBO0FBQUEsQ0FGb0IsQ0FBdEI7TUFBTUosTTtBQUlOO0FBRWUsU0FBU0ssVUFBVCxPQUtaO0FBQUEsTUFKREMsV0FJQyxRQUpEQSxXQUlDO0FBQUEsTUFIREMsV0FHQyxRQUhEQSxXQUdDO0FBQUEsTUFGREMsbUJBRUMsUUFGREEsbUJBRUM7QUFBQSxNQUREQyxjQUNDLFFBRERBLGNBQ0M7QUFDRCxNQUFNQyxhQUFhLEdBQUc7QUFDcEJDLFdBQU8sRUFBRSxDQUNQLE1BRE8sRUFFUCxNQUZPLEVBR1AsV0FITyxFQUlQLFFBSk8sRUFLUCxhQUxPLEVBTVAsVUFOTyxFQU9QLE9BUE8sRUFRUCxPQVJPLEVBU1AsUUFUTyxFQVVQLFNBVk8sQ0FEVztBQWFwQkMsVUFBTSxFQUFFO0FBQ05DLGdCQUFVLEVBQUUsS0FETjtBQUVORixhQUFPLEVBQUUsQ0FDUCxNQURPLEVBRVAsUUFGTyxFQUdQLFdBSE8sRUFJUCxlQUpPLEVBS1AsV0FMTyxFQU1QLGFBTk8sRUFPUCxXQVBPO0FBRkgsS0FiWTtBQXlCcEJHLGFBQVMsRUFBRTtBQUNURCxnQkFBVSxFQUFFLElBREg7QUFFVEYsYUFBTyxFQUFFLENBQ1AsUUFETyxFQUVQLElBRk8sRUFHUCxJQUhPLEVBSVAsSUFKTyxFQUtQLElBTE8sRUFNUCxJQU5PLEVBT1AsSUFQTyxFQVFQLFlBUk8sRUFTUCxNQVRPO0FBRkEsS0F6QlM7QUF1Q3BCSSxRQUFJLEVBQUU7QUFDSkYsZ0JBQVUsRUFBRTtBQURSLEtBdkNjO0FBMENwQkcsYUFBUyxFQUFFO0FBQ1RILGdCQUFVLEVBQUUsS0FESDtBQUVURixhQUFPLEVBQUUsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixPQUFuQixFQUE0QixTQUE1QjtBQUZBLEtBMUNTO0FBOENwQk0sZUFBVyxFQUFFO0FBQ1hDLFlBQU0sRUFBRUEsOENBQU1BO0FBREgsS0E5Q087QUFpRHBCQyxRQUFJLEVBQUU7QUFDSk4sZ0JBQVUsRUFBRSxLQURSO0FBRUpPLDJCQUFxQixFQUFFLElBRm5CO0FBR0pDLHlCQUFtQixFQUFFLE9BSGpCO0FBSUpWLGFBQU8sRUFBRSxDQUFDLE1BQUQsRUFBUyxRQUFUO0FBSkwsS0FqRGM7QUF1RHBCVyxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFQSw4Q0FBTUE7QUFEVCxLQXZEYTtBQTBEcEJDLFNBQUssRUFBRTtBQUNMZixvQkFBYyxFQUFkQSxjQURLO0FBRUxnQixtQkFBYSxFQUFFLElBRlY7QUFHTEMsc0JBQWdCLEVBQUUsSUFIYjtBQUlMQyxrQkFBWSxFQUFFLElBSlQ7QUFLTEMsaUJBQVcsRUFBRSxvREFMUjtBQU1MQyxTQUFHLEVBQUU7QUFBRUMsZUFBTyxFQUFFLEtBQVg7QUFBa0JDLGlCQUFTLEVBQUU7QUFBN0IsT0FOQTtBQU9MQyxpQkFBVyxFQUFFO0FBQ1hDLGNBQU0sRUFBRSxHQURHO0FBRVhDLGFBQUssRUFBRTtBQUZJO0FBUFIsS0ExRGE7QUF1RXBCQyxXQUFPLEVBQUU7QUFDUHRCLGdCQUFVLEVBQUUsS0FETDtBQUVQRixhQUFPLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVDtBQUZGO0FBdkVXLEdBQXRCO0FBNkVBLHNCQUNFLDhEQUFDLE1BQUQ7QUFDRSxXQUFPLEVBQUVELGFBRFg7QUFFRSxlQUFXLEVBQUVKLFdBRmY7QUFHRSxlQUFXLEVBQUVDLFdBSGY7QUFJRSxtQkFBZSxFQUFDLGVBSmxCO0FBS0Usb0JBQWdCLEVBQUMsa0JBTG5CO0FBTUUsdUJBQW1CLEVBQUVDLG1CQU52QjtBQU9FLHFCQUFpQixFQUFFO0FBUHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEO01BOUZ1QkgsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWVkcy43ZjBlZWRmZWRhZjVkNzAzNWQ3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KFwicmVhY3QtZHJhZnQtd3lzaXd5Z1wiKS50aGVuKChtb2QpID0+IG1vZC5FZGl0b3IpLFxuICB7IHNzcjogZmFsc2UgfVxuKTtcbmltcG9ydCB7IGNvbG9ycywgZW1vamlzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRFZGl0b3Ioe1xuICBlZGl0b3JTdGF0ZSxcbiAgcGxhY2Vob2xkZXIsXG4gIG9uRWRpdG9yU3RhdGVDaGFuZ2UsXG4gIHVwbG9hZENhbGxiYWNrLFxufSkge1xuICBjb25zdCB0b29sYmFyQ29uZmlnID0ge1xuICAgIG9wdGlvbnM6IFtcbiAgICAgIFwibGlua1wiLFxuICAgICAgXCJsaXN0XCIsXG4gICAgICBcInRleHRBbGlnblwiLFxuICAgICAgXCJpbmxpbmVcIixcbiAgICAgIFwiY29sb3JQaWNrZXJcIixcbiAgICAgIFwiZW1iZWRkZWRcIixcbiAgICAgIFwiZW1vamlcIixcbiAgICAgIFwiaW1hZ2VcIixcbiAgICAgIFwicmVtb3ZlXCIsXG4gICAgICBcImhpc3RvcnlcIixcbiAgICBdLFxuICAgIGlubGluZToge1xuICAgICAgaW5Ecm9wZG93bjogZmFsc2UsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiYm9sZFwiLFxuICAgICAgICBcIml0YWxpY1wiLFxuICAgICAgICBcInVuZGVybGluZVwiLFxuICAgICAgICBcInN0cmlrZXRocm91Z2hcIixcbiAgICAgICAgXCJtb25vc3BhY2VcIixcbiAgICAgICAgXCJzdXBlcnNjcmlwdFwiLFxuICAgICAgICBcInN1YnNjcmlwdFwiLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGJsb2NrVHlwZToge1xuICAgICAgaW5Ecm9wZG93bjogdHJ1ZSxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJOb3JtYWxcIixcbiAgICAgICAgXCJIMVwiLFxuICAgICAgICBcIkgyXCIsXG4gICAgICAgIFwiSDNcIixcbiAgICAgICAgXCJINFwiLFxuICAgICAgICBcIkg1XCIsXG4gICAgICAgIFwiSDZcIixcbiAgICAgICAgXCJCbG9ja3F1b3RlXCIsXG4gICAgICAgIFwiQ29kZVwiLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIGluRHJvcGRvd246IGZhbHNlLFxuICAgIH0sXG4gICAgdGV4dEFsaWduOiB7XG4gICAgICBpbkRyb3Bkb3duOiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiLCBcImp1c3RpZnlcIl0sXG4gICAgfSxcbiAgICBjb2xvclBpY2tlcjoge1xuICAgICAgY29sb3JzOiBjb2xvcnMsXG4gICAgfSxcbiAgICBsaW5rOiB7XG4gICAgICBpbkRyb3Bkb3duOiBmYWxzZSxcbiAgICAgIHNob3dPcGVuT3B0aW9uT25Ib3ZlcjogdHJ1ZSxcbiAgICAgIGRlZmF1bHRUYXJnZXRPcHRpb246IFwiX3NlbGZcIixcbiAgICAgIG9wdGlvbnM6IFtcImxpbmtcIiwgXCJ1bmxpbmtcIl0sXG4gICAgfSxcbiAgICBlbW9qaToge1xuICAgICAgZW1vamlzOiBlbW9qaXMsXG4gICAgfSxcbiAgICBpbWFnZToge1xuICAgICAgdXBsb2FkQ2FsbGJhY2ssXG4gICAgICB1cGxvYWRFbmFibGVkOiB0cnVlLFxuICAgICAgYWxpZ25tZW50RW5hYmxlZDogdHJ1ZSxcbiAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcbiAgICAgIGlucHV0QWNjZXB0OiBcImltYWdlL2dpZixpbWFnZS9qcGVnLGltYWdlL2pwZyxpbWFnZS9wbmcsaW1hZ2Uvc3ZnXCIsXG4gICAgICBhbHQ6IHsgcHJlc2VudDogZmFsc2UsIG1hbmRhdG9yeTogZmFsc2UgfSxcbiAgICAgIGRlZmF1bHRTaXplOiB7XG4gICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgaGlzdG9yeToge1xuICAgICAgaW5Ecm9wZG93bjogZmFsc2UsXG4gICAgICBvcHRpb25zOiBbXCJ1bmRvXCIsIFwicmVkb1wiXSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEVkaXRvclxuICAgICAgdG9vbGJhcj17dG9vbGJhckNvbmZpZ31cbiAgICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX1cbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIGVkaXRvckNsYXNzTmFtZT1cImZlZWRGb3JtUmVhY3RcIlxuICAgICAgd3JhcHBlckNsYXNzTmFtZT1cIndyYXBwZXJGb3JtUmVhY3RcIlxuICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17b25FZGl0b3JTdGF0ZUNoYW5nZX1cbiAgICAgIHN0cmlwUGFzdGVkU3R5bGVzPXt0cnVlfVxuICAgIC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9