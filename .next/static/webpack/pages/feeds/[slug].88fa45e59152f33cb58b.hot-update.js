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
    button: {
      marginBottom: 20,
      background: "teal",
      color: "white",
      "&:hover": {
        background: "black"
      }
    },
    editor: {
      border: "10px solid #800000"
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
    children: !clicked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {
      className: classes.button,
      color: "secondary",
      onClick: function onClick() {
        return setClicked(true);
      },
      children: "Add Comment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, _this) : commentType === "E" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.editor,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextEditor__WEBPACK_IMPORTED_MODULE_5__.default, {
        onEditorStateChange: onEditorStateChange,
        editorState: editorState,
        uploadCallback: uploadCallback,
        placeholder: _constants__WEBPACK_IMPORTED_MODULE_6__.placeholder
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, _this) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Db21tZW50Rm9ybS9pbmRleC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwiYnV0dG9uIiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiZWRpdG9yIiwiYm9yZGVyIiwiQ29tbWVudEZvcm0iLCJ1c2VTdGF0ZSIsImNvbW1lbnRUeXBlIiwic2V0Q29tbWVudFR5cGUiLCJFZGl0b3JTdGF0ZSIsImVkaXRvclN0YXRlIiwic2V0RWRpdG9yU3RhdGUiLCJ1cGxvYWRlZEltYWdlcyIsInNldFVwbG9hZGVkSW1hZ2VzIiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJjbGFzc2VzIiwidXBsb2FkQ2FsbGJhY2siLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZU9iamVjdCIsImxvY2FsU3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaW1hZ2VzIiwiZGF0YSIsImxpbmsiLCJvbkVkaXRvclN0YXRlQ2hhbmdlIiwibmV3RWRpdG9yU3RhdGUiLCJyYXdTdGF0ZSIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwiaHRtbCIsImRyYWZ0VG9IdG1sIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBbUI7QUFDOUNDLGFBQVMsRUFBRSxFQURtQztBQUU5Q0MsVUFBTSxFQUFFO0FBQ05DLGtCQUFZLEVBQUUsRUFEUjtBQUVOQyxnQkFBVSxFQUFFLE1BRk47QUFHTkMsV0FBSyxFQUFFLE9BSEQ7QUFJTixpQkFBVztBQUNURCxrQkFBVSxFQUFFO0FBREg7QUFKTCxLQUZzQztBQVU5Q0UsVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRTtBQURGO0FBVnNDLEdBQW5CO0FBQUEsQ0FBRCxDQUE1Qjs7QUFlQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLCtDQUFRLENBQXdCLEdBQXhCLENBRHRCO0FBQUEsTUFDakJDLFdBRGlCO0FBQUEsTUFDSkMsY0FESTs7QUFBQSxtQkFFY0YsK0NBQVEsQ0FBQ0csNkRBQUEsRUFBRCxDQUZ0QjtBQUFBLE1BRWpCQyxXQUZpQjtBQUFBLE1BRUpDLGNBRkk7O0FBQUEsbUJBR29CTCwrQ0FBUSxDQUFXLEVBQVgsQ0FINUI7QUFBQSxNQUdqQk0sY0FIaUI7QUFBQSxNQUdEQyxpQkFIQzs7QUFBQSxtQkFJTVAsK0NBQVEsQ0FBQyxLQUFELENBSmQ7QUFBQSxNQUlqQlEsT0FKaUI7QUFBQSxNQUlSQyxVQUpROztBQUt4QixNQUFNQyxPQUFPLEdBQUdyQixTQUFTLEVBQXpCOztBQUVBLFdBQVNzQixjQUFULENBQXdCQyxJQUF4QixFQUFvQztBQUNsQyxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsVUFBTUMsV0FBVyxHQUFHO0FBQ2xCSixZQUFJLEVBQUpBLElBRGtCO0FBRWxCSyxnQkFBUSxFQUFFQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JQLElBQXBCO0FBRlEsT0FBcEI7QUFLQSxVQUFNUSxNQUFNLGdLQUFPZCxjQUFQLElBQXVCVSxXQUF2QixFQUFaO0FBQ0FULHVCQUFpQixDQUFDYSxNQUFELENBQWpCO0FBQ0FOLGFBQU8sQ0FBQztBQUFFTyxZQUFJLEVBQUU7QUFBRUMsY0FBSSxFQUFFTixXQUFXLENBQUNDO0FBQXBCO0FBQVIsT0FBRCxDQUFQO0FBQ0QsS0FUTSxDQUFQO0FBVUQ7O0FBRUQsTUFBTU0sbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxjQUFELEVBQXlCO0FBQ25EbkIsa0JBQWMsQ0FBQ21CLGNBQUQsQ0FBZDtBQUNBLFFBQU1DLFFBQVEsR0FBR0Msc0RBQVksQ0FBQ0YsY0FBYyxDQUFDRyxpQkFBZixFQUFELENBQTdCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxzREFBVyxDQUFDSixRQUFELENBQXhCO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWYsT0FBTyxDQUFDbEIsU0FBeEI7QUFBQSxjQUNHLENBQUNnQixPQUFELGdCQUNDLDhEQUFDLHFEQUFEO0FBQ0UsZUFBUyxFQUFFRSxPQUFPLENBQUNqQixNQURyQjtBQUVFLFdBQUssRUFBQyxXQUZSO0FBR0UsYUFBTyxFQUFFO0FBQUEsZUFBTWdCLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsT0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELEdBUUdSLFdBQVcsS0FBSyxHQUFoQixnQkFDRjtBQUFLLGVBQVMsRUFBRVMsT0FBTyxDQUFDYixNQUF4QjtBQUFBLDZCQUNFLDhEQUFDLGdEQUFEO0FBQ0UsMkJBQW1CLEVBQUUwQixtQkFEdkI7QUFFRSxtQkFBVyxFQUFFbkIsV0FGZjtBQUdFLHNCQUFjLEVBQUVPLGNBSGxCO0FBSUUsbUJBQVcsRUFBRW1CLG1EQUFXQTtBQUoxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURFLEdBU0E7QUFsQk47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBaEREOztHQUFNL0IsVztVQUtZVixTOzs7S0FMWlUsVztBQWtETiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWVkcy9bc2x1Z10uODhmYTQ1ZTU5MTUyZjMzY2I1OGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgZHJhZnRUb0h0bWwgZnJvbSBcImRyYWZ0anMtdG8taHRtbFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBFZGl0b3JTdGF0ZSwgY29udmVydFRvUmF3IH0gZnJvbSBcImRyYWZ0LWpzXCI7XG5pbXBvcnQgVGV4dEVkaXRvciBmcm9tIFwiLi4vVGV4dEVkaXRvclwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24gfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IHBsYWNlaG9sZGVyIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmludGVyZmFjZSBJSW1hZ2Uge1xuICBmaWxlOiBGaWxlO1xuICBsb2NhbFNyYzogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIGNvbnRhaW5lcjoge30sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgYmFja2dyb3VuZDogXCJ0ZWFsXCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxuICAgIH0sXG4gIH0sXG4gIGVkaXRvcjoge1xuICAgIGJvcmRlcjogXCIxMHB4IHNvbGlkICM4MDAwMDBcIixcbiAgfSxcbn0pKTtcblxuY29uc3QgQ29tbWVudEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtjb21tZW50VHlwZSwgc2V0Q29tbWVudFR5cGVdID0gdXNlU3RhdGU8XCJUXCIgfCBcIkFcIiB8IFwiVlwiIHwgXCJFXCI+KFwiRVwiKTtcbiAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZShFZGl0b3JTdGF0ZS5jcmVhdGVFbXB0eSgpKTtcbiAgY29uc3QgW3VwbG9hZGVkSW1hZ2VzLCBzZXRVcGxvYWRlZEltYWdlc10gPSB1c2VTdGF0ZTxJSW1hZ2VbXT4oW10pO1xuICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBmdW5jdGlvbiB1cGxvYWRDYWxsYmFjayhmaWxlOiBGaWxlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGltYWdlT2JqZWN0ID0ge1xuICAgICAgICBmaWxlLFxuICAgICAgICBsb2NhbFNyYzogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGltYWdlcyA9IFsuLi51cGxvYWRlZEltYWdlcywgaW1hZ2VPYmplY3RdO1xuICAgICAgc2V0VXBsb2FkZWRJbWFnZXMoaW1hZ2VzKTtcbiAgICAgIHJlc29sdmUoeyBkYXRhOiB7IGxpbms6IGltYWdlT2JqZWN0LmxvY2FsU3JjIH0gfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBvbkVkaXRvclN0YXRlQ2hhbmdlID0gKG5ld0VkaXRvclN0YXRlOiBhbnkpID0+IHtcbiAgICBzZXRFZGl0b3JTdGF0ZShuZXdFZGl0b3JTdGF0ZSk7XG4gICAgY29uc3QgcmF3U3RhdGUgPSBjb252ZXJ0VG9SYXcobmV3RWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSk7XG4gICAgY29uc3QgaHRtbCA9IGRyYWZ0VG9IdG1sKHJhd1N0YXRlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICB7IWNsaWNrZWQgPyAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDbGlja2VkKHRydWUpfVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIENvbW1lbnRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApIDogY29tbWVudFR5cGUgPT09IFwiRVwiID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lZGl0b3J9PlxuICAgICAgICAgIDxUZXh0RWRpdG9yXG4gICAgICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXtvbkVkaXRvclN0YXRlQ2hhbmdlfVxuICAgICAgICAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfVxuICAgICAgICAgICAgdXBsb2FkQ2FsbGJhY2s9e3VwbG9hZENhbGxiYWNrfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=