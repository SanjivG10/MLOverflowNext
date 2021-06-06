self["webpackHotUpdate_N_E"]("pages/index",{

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


var _jsxFileName = "/home/bhairaja/mloverflow-next/components/Forms/TextEditor/index.tsx",
    _s = $RefreshSig$();



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
  _s();

  var editorState = _ref.editorState,
      placeholder = _ref.placeholder,
      onEditorStateChange = _ref.onEditorStateChange,
      uploadCallback = _ref.uploadCallback,
      disabled = _ref.disabled;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      editor = _useState[0],
      setEditor = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setEditor(true);
  });
  var toolbarConfig = {
    options: ["link", "list", "textAlign", "inline", "colorPicker", "emoji", "image", "remove", "history"],
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
      inputAccept: "image/gif,image/jpeg,image/jpg",
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
  return editor && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Editor, {
    toolbar: toolbarConfig,
    editorState: editorState,
    placeholder: placeholder,
    editorClassName: "feedFormReact",
    wrapperClassName: "wrapperFormReact",
    onEditorStateChange: onEditorStateChange,
    stripPastedStyles: true,
    readOnly: disabled
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 7
  }, this);
}

_s(TextEditor, "41vkwuK4f3C0oGF5HzoJv6k4KAk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9UZXh0RWRpdG9yL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFZGl0b3IiLCJkeW5hbWljIiwidGhlbiIsIm1vZCIsInNzciIsIlRleHRFZGl0b3IiLCJlZGl0b3JTdGF0ZSIsInBsYWNlaG9sZGVyIiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsInVwbG9hZENhbGxiYWNrIiwiZGlzYWJsZWQiLCJ1c2VTdGF0ZSIsImVkaXRvciIsInNldEVkaXRvciIsInVzZUVmZmVjdCIsInRvb2xiYXJDb25maWciLCJvcHRpb25zIiwiaW5saW5lIiwiaW5Ecm9wZG93biIsImJsb2NrVHlwZSIsImxpc3QiLCJ0ZXh0QWxpZ24iLCJjb2xvclBpY2tlciIsImNvbG9ycyIsImxpbmsiLCJzaG93T3Blbk9wdGlvbk9uSG92ZXIiLCJkZWZhdWx0VGFyZ2V0T3B0aW9uIiwiZW1vamkiLCJlbW9qaXMiLCJpbWFnZSIsInVwbG9hZEVuYWJsZWQiLCJhbGlnbm1lbnRFbmFibGVkIiwicHJldmlld0ltYWdlIiwiaW5wdXRBY2NlcHQiLCJhbHQiLCJwcmVzZW50IiwibWFuZGF0b3J5IiwiZGVmYXVsdFNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsImhpc3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFDcEI7QUFBQSxTQUFNLHFRQUE4QkMsSUFBOUIsQ0FBbUMsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0gsTUFBYjtBQUFBLEdBQW5DLENBQU47QUFBQSxDQURvQixFQUVwQjtBQUFFSSxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FEYSwyRkFDYjtBQUFBO0FBQUEsK0RBRGEscUJBQ2I7QUFBQTtBQUFBLENBRm9CLENBQXRCO01BQU1KLE07QUFJTjtBQVVlLFNBQVNLLFVBQVQsT0FNSjtBQUFBOztBQUFBLE1BTFRDLFdBS1MsUUFMVEEsV0FLUztBQUFBLE1BSlRDLFdBSVMsUUFKVEEsV0FJUztBQUFBLE1BSFRDLG1CQUdTLFFBSFRBLG1CQUdTO0FBQUEsTUFGVEMsY0FFUyxRQUZUQSxjQUVTO0FBQUEsTUFEVEMsUUFDUyxRQURUQSxRQUNTOztBQUFBLGtCQUNtQkMsK0NBQVEsQ0FBVSxLQUFWLENBRDNCO0FBQUEsTUFDRkMsTUFERTtBQUFBLE1BQ01DLFNBRE47O0FBRVRDLGtEQUFTLENBQUMsWUFBTTtBQUNkRCxhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsR0FGUSxDQUFUO0FBSUEsTUFBTUUsYUFBYSxHQUFHO0FBQ3BCQyxXQUFPLEVBQUUsQ0FDUCxNQURPLEVBRVAsTUFGTyxFQUdQLFdBSE8sRUFJUCxRQUpPLEVBS1AsYUFMTyxFQU1QLE9BTk8sRUFPUCxPQVBPLEVBUVAsUUFSTyxFQVNQLFNBVE8sQ0FEVztBQVlwQkMsVUFBTSxFQUFFO0FBQ05DLGdCQUFVLEVBQUUsS0FETjtBQUVORixhQUFPLEVBQUUsQ0FDUCxNQURPLEVBRVAsUUFGTyxFQUdQLFdBSE8sRUFJUCxlQUpPLEVBS1AsV0FMTyxFQU1QLGFBTk8sRUFPUCxXQVBPO0FBRkgsS0FaWTtBQXdCcEJHLGFBQVMsRUFBRTtBQUNURCxnQkFBVSxFQUFFLElBREg7QUFFVEYsYUFBTyxFQUFFLENBQ1AsUUFETyxFQUVQLElBRk8sRUFHUCxJQUhPLEVBSVAsSUFKTyxFQUtQLElBTE8sRUFNUCxJQU5PLEVBT1AsSUFQTyxFQVFQLFlBUk8sRUFTUCxNQVRPO0FBRkEsS0F4QlM7QUFzQ3BCSSxRQUFJLEVBQUU7QUFDSkYsZ0JBQVUsRUFBRTtBQURSLEtBdENjO0FBeUNwQkcsYUFBUyxFQUFFO0FBQ1RILGdCQUFVLEVBQUUsS0FESDtBQUVURixhQUFPLEVBQUUsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixPQUFuQixFQUE0QixTQUE1QjtBQUZBLEtBekNTO0FBNkNwQk0sZUFBVyxFQUFFO0FBQ1hDLFlBQU0sRUFBRUEsOENBQU1BO0FBREgsS0E3Q087QUFnRHBCQyxRQUFJLEVBQUU7QUFDSk4sZ0JBQVUsRUFBRSxLQURSO0FBRUpPLDJCQUFxQixFQUFFLElBRm5CO0FBR0pDLHlCQUFtQixFQUFFLE9BSGpCO0FBSUpWLGFBQU8sRUFBRSxDQUFDLE1BQUQsRUFBUyxRQUFUO0FBSkwsS0FoRGM7QUFzRHBCVyxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFQSw4Q0FBTUE7QUFEVCxLQXREYTtBQXlEcEJDLFNBQUssRUFBRTtBQUNMcEIsb0JBQWMsRUFBZEEsY0FESztBQUVMcUIsbUJBQWEsRUFBRSxJQUZWO0FBR0xDLHNCQUFnQixFQUFFLElBSGI7QUFJTEMsa0JBQVksRUFBRSxJQUpUO0FBS0xDLGlCQUFXLEVBQUUsZ0NBTFI7QUFNTEMsU0FBRyxFQUFFO0FBQUVDLGVBQU8sRUFBRSxLQUFYO0FBQWtCQyxpQkFBUyxFQUFFO0FBQTdCLE9BTkE7QUFPTEMsaUJBQVcsRUFBRTtBQUNYQyxjQUFNLEVBQUUsR0FERztBQUVYQyxhQUFLLEVBQUU7QUFGSTtBQVBSLEtBekRhO0FBc0VwQkMsV0FBTyxFQUFFO0FBQ1B0QixnQkFBVSxFQUFFLEtBREw7QUFFUEYsYUFBTyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQ7QUFGRjtBQXRFVyxHQUF0QjtBQTRFQSxTQUNFSixNQUFNLGlCQUNKLDhEQUFDLE1BQUQ7QUFDRSxXQUFPLEVBQUVHLGFBRFg7QUFFRSxlQUFXLEVBQUVULFdBRmY7QUFHRSxlQUFXLEVBQUVDLFdBSGY7QUFJRSxtQkFBZSxFQUFDLGVBSmxCO0FBS0Usb0JBQWdCLEVBQUMsa0JBTG5CO0FBTUUsdUJBQW1CLEVBQUVDLG1CQU52QjtBQU9FLHFCQUFpQixFQUFFLElBUHJCO0FBUUUsWUFBUSxFQUFFRTtBQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGSjtBQWNEOztHQXRHdUJMLFU7O01BQUFBLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzcwN2RiZTk1NDNkNGNlNzRhYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5jb25zdCBFZGl0b3IgPSBkeW5hbWljKFxuICAoKSA9PiBpbXBvcnQoXCJyZWFjdC1kcmFmdC13eXNpd3lnXCIpLnRoZW4oKG1vZCkgPT4gbW9kLkVkaXRvciksXG4gIHsgc3NyOiBmYWxzZSB9XG4pO1xuaW1wb3J0IHsgY29sb3JzLCBlbW9qaXMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEVkaXRvclN0YXRlIH0gZnJvbSBcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGVkaXRvclN0YXRlOiBFZGl0b3JTdGF0ZTtcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgb25FZGl0b3JTdGF0ZUNoYW5nZTogKG5ld0VkaXRvclN0YXRlOiBhbnkpID0+IHZvaWQ7XG4gIHVwbG9hZENhbGxiYWNrOiAoZmlsZTogRmlsZSkgPT4gdm9pZDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEVkaXRvcih7XG4gIGVkaXRvclN0YXRlLFxuICBwbGFjZWhvbGRlcixcbiAgb25FZGl0b3JTdGF0ZUNoYW5nZSxcbiAgdXBsb2FkQ2FsbGJhY2ssXG4gIGRpc2FibGVkLFxufTogSVByb3BzKSB7XG4gIGNvbnN0IFtlZGl0b3IsIHNldEVkaXRvcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RWRpdG9yKHRydWUpO1xuICB9KTtcblxuICBjb25zdCB0b29sYmFyQ29uZmlnID0ge1xuICAgIG9wdGlvbnM6IFtcbiAgICAgIFwibGlua1wiLFxuICAgICAgXCJsaXN0XCIsXG4gICAgICBcInRleHRBbGlnblwiLFxuICAgICAgXCJpbmxpbmVcIixcbiAgICAgIFwiY29sb3JQaWNrZXJcIixcbiAgICAgIFwiZW1vamlcIixcbiAgICAgIFwiaW1hZ2VcIixcbiAgICAgIFwicmVtb3ZlXCIsXG4gICAgICBcImhpc3RvcnlcIixcbiAgICBdLFxuICAgIGlubGluZToge1xuICAgICAgaW5Ecm9wZG93bjogZmFsc2UsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiYm9sZFwiLFxuICAgICAgICBcIml0YWxpY1wiLFxuICAgICAgICBcInVuZGVybGluZVwiLFxuICAgICAgICBcInN0cmlrZXRocm91Z2hcIixcbiAgICAgICAgXCJtb25vc3BhY2VcIixcbiAgICAgICAgXCJzdXBlcnNjcmlwdFwiLFxuICAgICAgICBcInN1YnNjcmlwdFwiLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGJsb2NrVHlwZToge1xuICAgICAgaW5Ecm9wZG93bjogdHJ1ZSxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJOb3JtYWxcIixcbiAgICAgICAgXCJIMVwiLFxuICAgICAgICBcIkgyXCIsXG4gICAgICAgIFwiSDNcIixcbiAgICAgICAgXCJINFwiLFxuICAgICAgICBcIkg1XCIsXG4gICAgICAgIFwiSDZcIixcbiAgICAgICAgXCJCbG9ja3F1b3RlXCIsXG4gICAgICAgIFwiQ29kZVwiLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIGluRHJvcGRvd246IGZhbHNlLFxuICAgIH0sXG4gICAgdGV4dEFsaWduOiB7XG4gICAgICBpbkRyb3Bkb3duOiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiLCBcImp1c3RpZnlcIl0sXG4gICAgfSxcbiAgICBjb2xvclBpY2tlcjoge1xuICAgICAgY29sb3JzOiBjb2xvcnMsXG4gICAgfSxcbiAgICBsaW5rOiB7XG4gICAgICBpbkRyb3Bkb3duOiBmYWxzZSxcbiAgICAgIHNob3dPcGVuT3B0aW9uT25Ib3ZlcjogdHJ1ZSxcbiAgICAgIGRlZmF1bHRUYXJnZXRPcHRpb246IFwiX3NlbGZcIixcbiAgICAgIG9wdGlvbnM6IFtcImxpbmtcIiwgXCJ1bmxpbmtcIl0sXG4gICAgfSxcbiAgICBlbW9qaToge1xuICAgICAgZW1vamlzOiBlbW9qaXMsXG4gICAgfSxcbiAgICBpbWFnZToge1xuICAgICAgdXBsb2FkQ2FsbGJhY2ssXG4gICAgICB1cGxvYWRFbmFibGVkOiB0cnVlLFxuICAgICAgYWxpZ25tZW50RW5hYmxlZDogdHJ1ZSxcbiAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcbiAgICAgIGlucHV0QWNjZXB0OiBcImltYWdlL2dpZixpbWFnZS9qcGVnLGltYWdlL2pwZ1wiLFxuICAgICAgYWx0OiB7IHByZXNlbnQ6IGZhbHNlLCBtYW5kYXRvcnk6IGZhbHNlIH0sXG4gICAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGhpc3Rvcnk6IHtcbiAgICAgIGluRHJvcGRvd246IGZhbHNlLFxuICAgICAgb3B0aW9uczogW1widW5kb1wiLCBcInJlZG9cIl0sXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIGVkaXRvciAmJiAoXG4gICAgICA8RWRpdG9yXG4gICAgICAgIHRvb2xiYXI9e3Rvb2xiYXJDb25maWd9XG4gICAgICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBlZGl0b3JDbGFzc05hbWU9XCJmZWVkRm9ybVJlYWN0XCJcbiAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cIndyYXBwZXJGb3JtUmVhY3RcIlxuICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXtvbkVkaXRvclN0YXRlQ2hhbmdlfVxuICAgICAgICBzdHJpcFBhc3RlZFN0eWxlcz17dHJ1ZX1cbiAgICAgICAgcmVhZE9ubHk9e2Rpc2FibGVkfVxuICAgICAgLz5cbiAgICApXG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9