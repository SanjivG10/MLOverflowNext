self["webpackHotUpdate_N_E"]("pages/feeds/[slug]",{

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
      uploadCallback = _ref.uploadCallback,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur;
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
    stripPastedStyles: true,
    onFocus: onFocus,
    onBlur: onBlur
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9UZXh0RWRpdG9yL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJFZGl0b3IiLCJkeW5hbWljIiwidGhlbiIsIm1vZCIsInNzciIsIlRleHRFZGl0b3IiLCJlZGl0b3JTdGF0ZSIsInBsYWNlaG9sZGVyIiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsInVwbG9hZENhbGxiYWNrIiwib25Gb2N1cyIsIm9uQmx1ciIsInRvb2xiYXJDb25maWciLCJvcHRpb25zIiwiaW5saW5lIiwiaW5Ecm9wZG93biIsImJsb2NrVHlwZSIsImxpc3QiLCJ0ZXh0QWxpZ24iLCJjb2xvclBpY2tlciIsImNvbG9ycyIsImxpbmsiLCJzaG93T3Blbk9wdGlvbk9uSG92ZXIiLCJkZWZhdWx0VGFyZ2V0T3B0aW9uIiwiZW1vamkiLCJlbW9qaXMiLCJpbWFnZSIsInVwbG9hZEVuYWJsZWQiLCJhbGlnbm1lbnRFbmFibGVkIiwicHJldmlld0ltYWdlIiwiaW5wdXRBY2NlcHQiLCJhbHQiLCJwcmVzZW50IiwibWFuZGF0b3J5IiwiZGVmYXVsdFNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsImhpc3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFDcEI7QUFBQSxTQUFNLHFRQUE4QkMsSUFBOUIsQ0FBbUMsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0gsTUFBYjtBQUFBLEdBQW5DLENBQU47QUFBQSxDQURvQixFQUVwQjtBQUFFSSxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FEYSwyRkFDYjtBQUFBO0FBQUEsK0RBRGEscUJBQ2I7QUFBQTtBQUFBLENBRm9CLENBQXRCO01BQU1KLE07QUFJTjtBQVdlLFNBQVNLLFVBQVQsT0FPSjtBQUFBLE1BTlRDLFdBTVMsUUFOVEEsV0FNUztBQUFBLE1BTFRDLFdBS1MsUUFMVEEsV0FLUztBQUFBLE1BSlRDLG1CQUlTLFFBSlRBLG1CQUlTO0FBQUEsTUFIVEMsY0FHUyxRQUhUQSxjQUdTO0FBQUEsTUFGVEMsT0FFUyxRQUZUQSxPQUVTO0FBQUEsTUFEVEMsTUFDUyxRQURUQSxNQUNTO0FBQ1QsTUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxXQUFPLEVBQUUsQ0FDUCxNQURPLEVBRVAsTUFGTyxFQUdQLFdBSE8sRUFJUCxRQUpPLEVBS1AsYUFMTyxFQU1QLFVBTk8sRUFPUCxPQVBPLEVBUVAsT0FSTyxFQVNQLFFBVE8sRUFVUCxTQVZPLENBRFc7QUFhcEJDLFVBQU0sRUFBRTtBQUNOQyxnQkFBVSxFQUFFLEtBRE47QUFFTkYsYUFBTyxFQUFFLENBQ1AsTUFETyxFQUVQLFFBRk8sRUFHUCxXQUhPLEVBSVAsZUFKTyxFQUtQLFdBTE8sRUFNUCxhQU5PLEVBT1AsV0FQTztBQUZILEtBYlk7QUF5QnBCRyxhQUFTLEVBQUU7QUFDVEQsZ0JBQVUsRUFBRSxJQURIO0FBRVRGLGFBQU8sRUFBRSxDQUNQLFFBRE8sRUFFUCxJQUZPLEVBR1AsSUFITyxFQUlQLElBSk8sRUFLUCxJQUxPLEVBTVAsSUFOTyxFQU9QLElBUE8sRUFRUCxZQVJPLEVBU1AsTUFUTztBQUZBLEtBekJTO0FBdUNwQkksUUFBSSxFQUFFO0FBQ0pGLGdCQUFVLEVBQUU7QUFEUixLQXZDYztBQTBDcEJHLGFBQVMsRUFBRTtBQUNUSCxnQkFBVSxFQUFFLEtBREg7QUFFVEYsYUFBTyxFQUFFLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsRUFBNEIsU0FBNUI7QUFGQSxLQTFDUztBQThDcEJNLGVBQVcsRUFBRTtBQUNYQyxZQUFNLEVBQUVBLDhDQUFNQTtBQURILEtBOUNPO0FBaURwQkMsUUFBSSxFQUFFO0FBQ0pOLGdCQUFVLEVBQUUsS0FEUjtBQUVKTywyQkFBcUIsRUFBRSxJQUZuQjtBQUdKQyx5QkFBbUIsRUFBRSxPQUhqQjtBQUlKVixhQUFPLEVBQUUsQ0FBQyxNQUFELEVBQVMsUUFBVDtBQUpMLEtBakRjO0FBdURwQlcsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRUEsOENBQU1BO0FBRFQsS0F2RGE7QUEwRHBCQyxTQUFLLEVBQUU7QUFDTGpCLG9CQUFjLEVBQWRBLGNBREs7QUFFTGtCLG1CQUFhLEVBQUUsSUFGVjtBQUdMQyxzQkFBZ0IsRUFBRSxJQUhiO0FBSUxDLGtCQUFZLEVBQUUsSUFKVDtBQUtMQyxpQkFBVyxFQUFFLG9EQUxSO0FBTUxDLFNBQUcsRUFBRTtBQUFFQyxlQUFPLEVBQUUsS0FBWDtBQUFrQkMsaUJBQVMsRUFBRTtBQUE3QixPQU5BO0FBT0xDLGlCQUFXLEVBQUU7QUFDWEMsY0FBTSxFQUFFLEdBREc7QUFFWEMsYUFBSyxFQUFFO0FBRkk7QUFQUixLQTFEYTtBQXVFcEJDLFdBQU8sRUFBRTtBQUNQdEIsZ0JBQVUsRUFBRSxLQURMO0FBRVBGLGFBQU8sRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFUO0FBRkY7QUF2RVcsR0FBdEI7QUE2RUEsc0JBQ0UsOERBQUMsTUFBRDtBQUNFLFdBQU8sRUFBRUQsYUFEWDtBQUVFLGVBQVcsRUFBRU4sV0FGZjtBQUdFLGVBQVcsRUFBRUMsV0FIZjtBQUlFLG1CQUFlLEVBQUMsZUFKbEI7QUFLRSxvQkFBZ0IsRUFBQyxrQkFMbkI7QUFNRSx1QkFBbUIsRUFBRUMsbUJBTnZCO0FBT0UscUJBQWlCLEVBQUUsSUFQckI7QUFRRSxXQUFPLEVBQUVFLE9BUlg7QUFTRSxVQUFNLEVBQUVDO0FBVFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7TUFsR3VCTixVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZlZWRzL1tzbHVnXS5hNGY4MjhmOTk1ZGIwYzJiZDA1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KFwicmVhY3QtZHJhZnQtd3lzaXd5Z1wiKS50aGVuKChtb2QpID0+IG1vZC5FZGl0b3IpLFxuICB7IHNzcjogZmFsc2UgfVxuKTtcbmltcG9ydCB7IGNvbG9ycywgZW1vamlzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBFZGl0b3JTdGF0ZSB9IGZyb20gXCJyZWFjdC1kcmFmdC13eXNpd3lnXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBlZGl0b3JTdGF0ZTogRWRpdG9yU3RhdGU7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIG9uRWRpdG9yU3RhdGVDaGFuZ2U6IChuZXdFZGl0b3JTdGF0ZTogYW55KSA9PiB2b2lkO1xuICB1cGxvYWRDYWxsYmFjazogKGZpbGU6IEZpbGUpID0+IHZvaWQ7XG4gIG9uRm9jdXM6ICgpID0+IHZvaWQ7XG4gIG9uQmx1cjogKCkgPT4gdm9pZDtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRFZGl0b3Ioe1xuICBlZGl0b3JTdGF0ZSxcbiAgcGxhY2Vob2xkZXIsXG4gIG9uRWRpdG9yU3RhdGVDaGFuZ2UsXG4gIHVwbG9hZENhbGxiYWNrLFxuICBvbkZvY3VzLFxuICBvbkJsdXIsXG59OiBJUHJvcHMpIHtcbiAgY29uc3QgdG9vbGJhckNvbmZpZyA9IHtcbiAgICBvcHRpb25zOiBbXG4gICAgICBcImxpbmtcIixcbiAgICAgIFwibGlzdFwiLFxuICAgICAgXCJ0ZXh0QWxpZ25cIixcbiAgICAgIFwiaW5saW5lXCIsXG4gICAgICBcImNvbG9yUGlja2VyXCIsXG4gICAgICBcImVtYmVkZGVkXCIsXG4gICAgICBcImVtb2ppXCIsXG4gICAgICBcImltYWdlXCIsXG4gICAgICBcInJlbW92ZVwiLFxuICAgICAgXCJoaXN0b3J5XCIsXG4gICAgXSxcbiAgICBpbmxpbmU6IHtcbiAgICAgIGluRHJvcGRvd246IGZhbHNlLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcImJvbGRcIixcbiAgICAgICAgXCJpdGFsaWNcIixcbiAgICAgICAgXCJ1bmRlcmxpbmVcIixcbiAgICAgICAgXCJzdHJpa2V0aHJvdWdoXCIsXG4gICAgICAgIFwibW9ub3NwYWNlXCIsXG4gICAgICAgIFwic3VwZXJzY3JpcHRcIixcbiAgICAgICAgXCJzdWJzY3JpcHRcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgICBibG9ja1R5cGU6IHtcbiAgICAgIGluRHJvcGRvd246IHRydWUsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiTm9ybWFsXCIsXG4gICAgICAgIFwiSDFcIixcbiAgICAgICAgXCJIMlwiLFxuICAgICAgICBcIkgzXCIsXG4gICAgICAgIFwiSDRcIixcbiAgICAgICAgXCJINVwiLFxuICAgICAgICBcIkg2XCIsXG4gICAgICAgIFwiQmxvY2txdW90ZVwiLFxuICAgICAgICBcIkNvZGVcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICBpbkRyb3Bkb3duOiBmYWxzZSxcbiAgICB9LFxuICAgIHRleHRBbGlnbjoge1xuICAgICAgaW5Ecm9wZG93bjogZmFsc2UsXG4gICAgICBvcHRpb25zOiBbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIiwgXCJqdXN0aWZ5XCJdLFxuICAgIH0sXG4gICAgY29sb3JQaWNrZXI6IHtcbiAgICAgIGNvbG9yczogY29sb3JzLFxuICAgIH0sXG4gICAgbGluazoge1xuICAgICAgaW5Ecm9wZG93bjogZmFsc2UsXG4gICAgICBzaG93T3Blbk9wdGlvbk9uSG92ZXI6IHRydWUsXG4gICAgICBkZWZhdWx0VGFyZ2V0T3B0aW9uOiBcIl9zZWxmXCIsXG4gICAgICBvcHRpb25zOiBbXCJsaW5rXCIsIFwidW5saW5rXCJdLFxuICAgIH0sXG4gICAgZW1vamk6IHtcbiAgICAgIGVtb2ppczogZW1vamlzLFxuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVwbG9hZENhbGxiYWNrLFxuICAgICAgdXBsb2FkRW5hYmxlZDogdHJ1ZSxcbiAgICAgIGFsaWdubWVudEVuYWJsZWQ6IHRydWUsXG4gICAgICBwcmV2aWV3SW1hZ2U6IHRydWUsXG4gICAgICBpbnB1dEFjY2VwdDogXCJpbWFnZS9naWYsaW1hZ2UvanBlZyxpbWFnZS9qcGcsaW1hZ2UvcG5nLGltYWdlL3N2Z1wiLFxuICAgICAgYWx0OiB7IHByZXNlbnQ6IGZhbHNlLCBtYW5kYXRvcnk6IGZhbHNlIH0sXG4gICAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGhpc3Rvcnk6IHtcbiAgICAgIGluRHJvcGRvd246IGZhbHNlLFxuICAgICAgb3B0aW9uczogW1widW5kb1wiLCBcInJlZG9cIl0sXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxFZGl0b3JcbiAgICAgIHRvb2xiYXI9e3Rvb2xiYXJDb25maWd9XG4gICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICBlZGl0b3JDbGFzc05hbWU9XCJmZWVkRm9ybVJlYWN0XCJcbiAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJ3cmFwcGVyRm9ybVJlYWN0XCJcbiAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9e29uRWRpdG9yU3RhdGVDaGFuZ2V9XG4gICAgICBzdHJpcFBhc3RlZFN0eWxlcz17dHJ1ZX1cbiAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==