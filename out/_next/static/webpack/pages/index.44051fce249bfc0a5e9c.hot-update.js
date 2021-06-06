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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9UZXh0RWRpdG9yL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFZGl0b3IiLCJkeW5hbWljIiwidGhlbiIsIm1vZCIsInNzciIsIlRleHRFZGl0b3IiLCJlZGl0b3JTdGF0ZSIsInBsYWNlaG9sZGVyIiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsInVwbG9hZENhbGxiYWNrIiwiZGlzYWJsZWQiLCJ1c2VTdGF0ZSIsImVkaXRvciIsInNldEVkaXRvciIsInVzZUVmZmVjdCIsInRvb2xiYXJDb25maWciLCJvcHRpb25zIiwiaW5saW5lIiwiaW5Ecm9wZG93biIsImJsb2NrVHlwZSIsImxpc3QiLCJ0ZXh0QWxpZ24iLCJjb2xvclBpY2tlciIsImNvbG9ycyIsImxpbmsiLCJzaG93T3Blbk9wdGlvbk9uSG92ZXIiLCJkZWZhdWx0VGFyZ2V0T3B0aW9uIiwiZW1vamkiLCJlbW9qaXMiLCJpbWFnZSIsInVwbG9hZEVuYWJsZWQiLCJhbGlnbm1lbnRFbmFibGVkIiwicHJldmlld0ltYWdlIiwiaW5wdXRBY2NlcHQiLCJhbHQiLCJwcmVzZW50IiwibWFuZGF0b3J5IiwiZGVmYXVsdFNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsImhpc3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFDcEI7QUFBQSxTQUFNLHFRQUE4QkMsSUFBOUIsQ0FBbUMsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0gsTUFBYjtBQUFBLEdBQW5DLENBQU47QUFBQSxDQURvQixFQUVwQjtBQUFFSSxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FEYSwyRkFDYjtBQUFBO0FBQUEsK0RBRGEscUJBQ2I7QUFBQTtBQUFBLENBRm9CLENBQXRCO01BQU1KLE07QUFJTjtBQVVlLFNBQVNLLFVBQVQsT0FNSjtBQUFBOztBQUFBLE1BTFRDLFdBS1MsUUFMVEEsV0FLUztBQUFBLE1BSlRDLFdBSVMsUUFKVEEsV0FJUztBQUFBLE1BSFRDLG1CQUdTLFFBSFRBLG1CQUdTO0FBQUEsTUFGVEMsY0FFUyxRQUZUQSxjQUVTO0FBQUEsTUFEVEMsUUFDUyxRQURUQSxRQUNTOztBQUFBLGtCQUNtQkMsK0NBQVEsQ0FBVSxLQUFWLENBRDNCO0FBQUEsTUFDRkMsTUFERTtBQUFBLE1BQ01DLFNBRE47O0FBRVRDLGtEQUFTLENBQUMsWUFBTTtBQUNkRCxhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLE1BQU1FLGFBQWEsR0FBRztBQUNwQkMsV0FBTyxFQUFFLENBQ1AsTUFETyxFQUVQLE1BRk8sRUFHUCxXQUhPLEVBSVAsUUFKTyxFQUtQLGFBTE8sRUFNUCxPQU5PLEVBT1AsT0FQTyxFQVFQLFFBUk8sRUFTUCxTQVRPLENBRFc7QUFZcEJDLFVBQU0sRUFBRTtBQUNOQyxnQkFBVSxFQUFFLEtBRE47QUFFTkYsYUFBTyxFQUFFLENBQ1AsTUFETyxFQUVQLFFBRk8sRUFHUCxXQUhPLEVBSVAsZUFKTyxFQUtQLFdBTE8sRUFNUCxhQU5PLEVBT1AsV0FQTztBQUZILEtBWlk7QUF3QnBCRyxhQUFTLEVBQUU7QUFDVEQsZ0JBQVUsRUFBRSxJQURIO0FBRVRGLGFBQU8sRUFBRSxDQUNQLFFBRE8sRUFFUCxJQUZPLEVBR1AsSUFITyxFQUlQLElBSk8sRUFLUCxJQUxPLEVBTVAsSUFOTyxFQU9QLElBUE8sRUFRUCxZQVJPLEVBU1AsTUFUTztBQUZBLEtBeEJTO0FBc0NwQkksUUFBSSxFQUFFO0FBQ0pGLGdCQUFVLEVBQUU7QUFEUixLQXRDYztBQXlDcEJHLGFBQVMsRUFBRTtBQUNUSCxnQkFBVSxFQUFFLEtBREg7QUFFVEYsYUFBTyxFQUFFLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsRUFBNEIsU0FBNUI7QUFGQSxLQXpDUztBQTZDcEJNLGVBQVcsRUFBRTtBQUNYQyxZQUFNLEVBQUVBLDhDQUFNQTtBQURILEtBN0NPO0FBZ0RwQkMsUUFBSSxFQUFFO0FBQ0pOLGdCQUFVLEVBQUUsS0FEUjtBQUVKTywyQkFBcUIsRUFBRSxJQUZuQjtBQUdKQyx5QkFBbUIsRUFBRSxPQUhqQjtBQUlKVixhQUFPLEVBQUUsQ0FBQyxNQUFELEVBQVMsUUFBVDtBQUpMLEtBaERjO0FBc0RwQlcsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRUEsOENBQU1BO0FBRFQsS0F0RGE7QUF5RHBCQyxTQUFLLEVBQUU7QUFDTHBCLG9CQUFjLEVBQWRBLGNBREs7QUFFTHFCLG1CQUFhLEVBQUUsSUFGVjtBQUdMQyxzQkFBZ0IsRUFBRSxJQUhiO0FBSUxDLGtCQUFZLEVBQUUsSUFKVDtBQUtMQyxpQkFBVyxFQUFFLGdDQUxSO0FBTUxDLFNBQUcsRUFBRTtBQUFFQyxlQUFPLEVBQUUsS0FBWDtBQUFrQkMsaUJBQVMsRUFBRTtBQUE3QixPQU5BO0FBT0xDLGlCQUFXLEVBQUU7QUFDWEMsY0FBTSxFQUFFLEdBREc7QUFFWEMsYUFBSyxFQUFFO0FBRkk7QUFQUixLQXpEYTtBQXNFcEJDLFdBQU8sRUFBRTtBQUNQdEIsZ0JBQVUsRUFBRSxLQURMO0FBRVBGLGFBQU8sRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFUO0FBRkY7QUF0RVcsR0FBdEI7QUE0RUEsU0FDRUosTUFBTSxpQkFDSiw4REFBQyxNQUFEO0FBQ0UsV0FBTyxFQUFFRyxhQURYO0FBRUUsZUFBVyxFQUFFVCxXQUZmO0FBR0UsZUFBVyxFQUFFQyxXQUhmO0FBSUUsbUJBQWUsRUFBQyxlQUpsQjtBQUtFLG9CQUFnQixFQUFDLGtCQUxuQjtBQU1FLHVCQUFtQixFQUFFQyxtQkFOdkI7QUFPRSxxQkFBaUIsRUFBRSxJQVByQjtBQVFFLFlBQVEsRUFBRUU7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFjRDs7R0F0R3VCTCxVOztNQUFBQSxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ0MDUxZmNlMjQ5YmZjMGE1ZTljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KFwicmVhY3QtZHJhZnQtd3lzaXd5Z1wiKS50aGVuKChtb2QpID0+IG1vZC5FZGl0b3IpLFxuICB7IHNzcjogZmFsc2UgfVxuKTtcbmltcG9ydCB7IGNvbG9ycywgZW1vamlzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBFZGl0b3JTdGF0ZSB9IGZyb20gXCJyZWFjdC1kcmFmdC13eXNpd3lnXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBlZGl0b3JTdGF0ZTogRWRpdG9yU3RhdGU7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIG9uRWRpdG9yU3RhdGVDaGFuZ2U6IChuZXdFZGl0b3JTdGF0ZTogYW55KSA9PiB2b2lkO1xuICB1cGxvYWRDYWxsYmFjazogKGZpbGU6IEZpbGUpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRFZGl0b3Ioe1xuICBlZGl0b3JTdGF0ZSxcbiAgcGxhY2Vob2xkZXIsXG4gIG9uRWRpdG9yU3RhdGVDaGFuZ2UsXG4gIHVwbG9hZENhbGxiYWNrLFxuICBkaXNhYmxlZCxcbn06IElQcm9wcykge1xuICBjb25zdCBbZWRpdG9yLCBzZXRFZGl0b3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEVkaXRvcih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRvb2xiYXJDb25maWcgPSB7XG4gICAgb3B0aW9uczogW1xuICAgICAgXCJsaW5rXCIsXG4gICAgICBcImxpc3RcIixcbiAgICAgIFwidGV4dEFsaWduXCIsXG4gICAgICBcImlubGluZVwiLFxuICAgICAgXCJjb2xvclBpY2tlclwiLFxuICAgICAgXCJlbW9qaVwiLFxuICAgICAgXCJpbWFnZVwiLFxuICAgICAgXCJyZW1vdmVcIixcbiAgICAgIFwiaGlzdG9yeVwiLFxuICAgIF0sXG4gICAgaW5saW5lOiB7XG4gICAgICBpbkRyb3Bkb3duOiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJib2xkXCIsXG4gICAgICAgIFwiaXRhbGljXCIsXG4gICAgICAgIFwidW5kZXJsaW5lXCIsXG4gICAgICAgIFwic3RyaWtldGhyb3VnaFwiLFxuICAgICAgICBcIm1vbm9zcGFjZVwiLFxuICAgICAgICBcInN1cGVyc2NyaXB0XCIsXG4gICAgICAgIFwic3Vic2NyaXB0XCIsXG4gICAgICBdLFxuICAgIH0sXG4gICAgYmxvY2tUeXBlOiB7XG4gICAgICBpbkRyb3Bkb3duOiB0cnVlLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcIk5vcm1hbFwiLFxuICAgICAgICBcIkgxXCIsXG4gICAgICAgIFwiSDJcIixcbiAgICAgICAgXCJIM1wiLFxuICAgICAgICBcIkg0XCIsXG4gICAgICAgIFwiSDVcIixcbiAgICAgICAgXCJINlwiLFxuICAgICAgICBcIkJsb2NrcXVvdGVcIixcbiAgICAgICAgXCJDb2RlXCIsXG4gICAgICBdLFxuICAgIH0sXG4gICAgbGlzdDoge1xuICAgICAgaW5Ecm9wZG93bjogZmFsc2UsXG4gICAgfSxcbiAgICB0ZXh0QWxpZ246IHtcbiAgICAgIGluRHJvcGRvd246IGZhbHNlLFxuICAgICAgb3B0aW9uczogW1wibGVmdFwiLCBcImNlbnRlclwiLCBcInJpZ2h0XCIsIFwianVzdGlmeVwiXSxcbiAgICB9LFxuICAgIGNvbG9yUGlja2VyOiB7XG4gICAgICBjb2xvcnM6IGNvbG9ycyxcbiAgICB9LFxuICAgIGxpbms6IHtcbiAgICAgIGluRHJvcGRvd246IGZhbHNlLFxuICAgICAgc2hvd09wZW5PcHRpb25PbkhvdmVyOiB0cnVlLFxuICAgICAgZGVmYXVsdFRhcmdldE9wdGlvbjogXCJfc2VsZlwiLFxuICAgICAgb3B0aW9uczogW1wibGlua1wiLCBcInVubGlua1wiXSxcbiAgICB9LFxuICAgIGVtb2ppOiB7XG4gICAgICBlbW9qaXM6IGVtb2ppcyxcbiAgICB9LFxuICAgIGltYWdlOiB7XG4gICAgICB1cGxvYWRDYWxsYmFjayxcbiAgICAgIHVwbG9hZEVuYWJsZWQ6IHRydWUsXG4gICAgICBhbGlnbm1lbnRFbmFibGVkOiB0cnVlLFxuICAgICAgcHJldmlld0ltYWdlOiB0cnVlLFxuICAgICAgaW5wdXRBY2NlcHQ6IFwiaW1hZ2UvZ2lmLGltYWdlL2pwZWcsaW1hZ2UvanBnXCIsXG4gICAgICBhbHQ6IHsgcHJlc2VudDogZmFsc2UsIG1hbmRhdG9yeTogZmFsc2UgfSxcbiAgICAgIGRlZmF1bHRTaXplOiB7XG4gICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgaGlzdG9yeToge1xuICAgICAgaW5Ecm9wZG93bjogZmFsc2UsXG4gICAgICBvcHRpb25zOiBbXCJ1bmRvXCIsIFwicmVkb1wiXSxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgZWRpdG9yICYmIChcbiAgICAgIDxFZGl0b3JcbiAgICAgICAgdG9vbGJhcj17dG9vbGJhckNvbmZpZ31cbiAgICAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIGVkaXRvckNsYXNzTmFtZT1cImZlZWRGb3JtUmVhY3RcIlxuICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwid3JhcHBlckZvcm1SZWFjdFwiXG4gICAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9e29uRWRpdG9yU3RhdGVDaGFuZ2V9XG4gICAgICAgIHN0cmlwUGFzdGVkU3R5bGVzPXt0cnVlfVxuICAgICAgICByZWFkT25seT17ZGlzYWJsZWR9XG4gICAgICAvPlxuICAgIClcbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=