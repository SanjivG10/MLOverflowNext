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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./components/Forms/TextEditor/constants.ts");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Spinner */ "./components/Spinner.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/bhairaja/mloverflow-next/components/Forms/TextEditor/index.tsx",
    _s = $RefreshSig$();

// @ts-nocheck


var Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "vendors-node_modules_react-draft-wysiwyg_dist_react-draft-wysiwyg_js").then(__webpack_require__.t.bind(__webpack_require__, /*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js", 23)).then(function (mod) {
    return mod.Editor;
  });
}, {
  ssr: false,
  loading: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spinner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 26
  }, undefined),
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
  }, []);
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
      colors: _constants__WEBPACK_IMPORTED_MODULE_4__.colors
    },
    link: {
      inDropdown: false,
      showOpenOptionOnHover: true,
      defaultTargetOption: "_self",
      options: ["link", "unlink"]
    },
    emoji: {
      emojis: _constants__WEBPACK_IMPORTED_MODULE_4__.emojis
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
    lineNumber: 110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9UZXh0RWRpdG9yL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFZGl0b3IiLCJkeW5hbWljIiwidGhlbiIsIm1vZCIsInNzciIsImxvYWRpbmciLCJUZXh0RWRpdG9yIiwiZWRpdG9yU3RhdGUiLCJwbGFjZWhvbGRlciIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJ1cGxvYWRDYWxsYmFjayIsImRpc2FibGVkIiwidXNlU3RhdGUiLCJlZGl0b3IiLCJzZXRFZGl0b3IiLCJ1c2VFZmZlY3QiLCJ0b29sYmFyQ29uZmlnIiwib3B0aW9ucyIsImlubGluZSIsImluRHJvcGRvd24iLCJibG9ja1R5cGUiLCJsaXN0IiwidGV4dEFsaWduIiwiY29sb3JQaWNrZXIiLCJjb2xvcnMiLCJsaW5rIiwic2hvd09wZW5PcHRpb25PbkhvdmVyIiwiZGVmYXVsdFRhcmdldE9wdGlvbiIsImVtb2ppIiwiZW1vamlzIiwiaW1hZ2UiLCJ1cGxvYWRFbmFibGVkIiwiYWxpZ25tZW50RW5hYmxlZCIsInByZXZpZXdJbWFnZSIsImlucHV0QWNjZXB0IiwiYWx0IiwicHJlc2VudCIsIm1hbmRhdG9yeSIsImRlZmF1bHRTaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJoaXN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPLE1BQ3BCO0FBQUEsU0FBTSxxUUFBOEJDLElBQTlCLENBQW1DLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUNILE1BQWI7QUFBQSxHQUFuQyxDQUFOO0FBQUEsQ0FEb0IsRUFFcEI7QUFBRUksS0FBRyxFQUFFLEtBQVA7QUFBY0MsU0FBTyxlQUFFLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBdkI7QUFBQTtBQUFBO0FBQUEsa0NBRGEsMkZBQ2I7QUFBQTtBQUFBLCtEQURhLHFCQUNi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ZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUwNTE1ZTZkMDY5Yjk1ZjdmMWEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtbm9jaGVja1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmNvbnN0IEVkaXRvciA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydChcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIikudGhlbigobW9kKSA9PiBtb2QuRWRpdG9yKSxcbiAgeyBzc3I6IGZhbHNlLCBsb2FkaW5nOiA8U3Bpbm5lciAvPiB9XG4pO1xuaW1wb3J0IHsgY29sb3JzLCBlbW9qaXMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEVkaXRvclN0YXRlIH0gZnJvbSBcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIjtcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuLi8uLi9TcGlubmVyXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBlZGl0b3JTdGF0ZTogRWRpdG9yU3RhdGU7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIG9uRWRpdG9yU3RhdGVDaGFuZ2U6IChuZXdFZGl0b3JTdGF0ZTogYW55KSA9PiB2b2lkO1xuICB1cGxvYWRDYWxsYmFjazogKGZpbGU6IEZpbGUpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRFZGl0b3Ioe1xuICBlZGl0b3JTdGF0ZSxcbiAgcGxhY2Vob2xkZXIsXG4gIG9uRWRpdG9yU3RhdGVDaGFuZ2UsXG4gIHVwbG9hZENhbGxiYWNrLFxuICBkaXNhYmxlZCxcbn06IElQcm9wcykge1xuICBjb25zdCBbZWRpdG9yLCBzZXRFZGl0b3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RWRpdG9yKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9vbGJhckNvbmZpZyA9IHtcbiAgICBvcHRpb25zOiBbXG4gICAgICBcImxpbmtcIixcbiAgICAgIFwibGlzdFwiLFxuICAgICAgXCJ0ZXh0QWxpZ25cIixcbiAgICAgIFwiaW5saW5lXCIsXG4gICAgICBcImNvbG9yUGlja2VyXCIsXG4gICAgICBcImVtb2ppXCIsXG4gICAgICBcImltYWdlXCIsXG4gICAgICBcInJlbW92ZVwiLFxuICAgICAgXCJoaXN0b3J5XCIsXG4gICAgXSxcbiAgICBpbmxpbmU6IHtcbiAgICAgIGluRHJvcGRvd246IGZhbHNlLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcImJvbGRcIixcbiAgICAgICAgXCJpdGFsaWNcIixcbiAgICAgICAgXCJ1bmRlcmxpbmVcIixcbiAgICAgICAgXCJzdHJpa2V0aHJvdWdoXCIsXG4gICAgICAgIFwibW9ub3NwYWNlXCIsXG4gICAgICAgIFwic3VwZXJzY3JpcHRcIixcbiAgICAgICAgXCJzdWJzY3JpcHRcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgICBibG9ja1R5cGU6IHtcbiAgICAgIGluRHJvcGRvd246IHRydWUsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiTm9ybWFsXCIsXG4gICAgICAgIFwiSDFcIixcbiAgICAgICAgXCJIMlwiLFxuICAgICAgICBcIkgzXCIsXG4gICAgICAgIFwiSDRcIixcbiAgICAgICAgXCJINVwiLFxuICAgICAgICBcIkg2XCIsXG4gICAgICAgIFwiQmxvY2txdW90ZVwiLFxuICAgICAgICBcIkNvZGVcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICBpbkRyb3Bkb3duOiBmYWxzZSxcbiAgICB9LFxuICAgIHRleHRBbGlnbjoge1xuICAgICAgaW5Ecm9wZG93bjogZmFsc2UsXG4gICAgICBvcHRpb25zOiBbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIiwgXCJqdXN0aWZ5XCJdLFxuICAgIH0sXG4gICAgY29sb3JQaWNrZXI6IHtcbiAgICAgIGNvbG9yczogY29sb3JzLFxuICAgIH0sXG4gICAgbGluazoge1xuICAgICAgaW5Ecm9wZG93bjogZmFsc2UsXG4gICAgICBzaG93T3Blbk9wdGlvbk9uSG92ZXI6IHRydWUsXG4gICAgICBkZWZhdWx0VGFyZ2V0T3B0aW9uOiBcIl9zZWxmXCIsXG4gICAgICBvcHRpb25zOiBbXCJsaW5rXCIsIFwidW5saW5rXCJdLFxuICAgIH0sXG4gICAgZW1vamk6IHtcbiAgICAgIGVtb2ppczogZW1vamlzLFxuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVwbG9hZENhbGxiYWNrLFxuICAgICAgdXBsb2FkRW5hYmxlZDogdHJ1ZSxcbiAgICAgIGFsaWdubWVudEVuYWJsZWQ6IHRydWUsXG4gICAgICBwcmV2aWV3SW1hZ2U6IHRydWUsXG4gICAgICBpbnB1dEFjY2VwdDogXCJpbWFnZS9naWYsaW1hZ2UvanBlZyxpbWFnZS9qcGdcIixcbiAgICAgIGFsdDogeyBwcmVzZW50OiBmYWxzZSwgbWFuZGF0b3J5OiBmYWxzZSB9LFxuICAgICAgZGVmYXVsdFNpemU6IHtcbiAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBoaXN0b3J5OiB7XG4gICAgICBpbkRyb3Bkb3duOiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IFtcInVuZG9cIiwgXCJyZWRvXCJdLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICBlZGl0b3IgJiYgKFxuICAgICAgPEVkaXRvclxuICAgICAgICB0b29sYmFyPXt0b29sYmFyQ29uZmlnfVxuICAgICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwiZmVlZEZvcm1SZWFjdFwiXG4gICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJ3cmFwcGVyRm9ybVJlYWN0XCJcbiAgICAgICAgb25FZGl0b3JTdGF0ZUNoYW5nZT17b25FZGl0b3JTdGF0ZUNoYW5nZX1cbiAgICAgICAgc3RyaXBQYXN0ZWRTdHlsZXM9e3RydWV9XG4gICAgICAgIHJlYWRPbmx5PXtkaXNhYmxlZH1cbiAgICAgIC8+XG4gICAgKVxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==