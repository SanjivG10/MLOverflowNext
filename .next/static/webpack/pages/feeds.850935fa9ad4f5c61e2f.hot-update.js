self["webpackHotUpdate_N_E"]("pages/feeds",{

/***/ "./components/Forms/FeedForm/index.tsx":
/*!*********************************************!*\
  !*** ./components/Forms/FeedForm/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_bhairaja_mloverflow_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../TextEditor */ "./components/Forms/TextEditor/index.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./components/Forms/FeedForm/constants.ts");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TagForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TagForm */ "./components/Forms/TagForm/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/bhairaja/mloverflow-next/components/Forms/FeedForm/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();










var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.makeStyles)(function (theme) {
  return {
    container: {
      borderRadius: 8,
      marginBottom: 10,
      maxWidth: 600
    },
    editorContainer: {
      border: "1px solid #696969"
    },
    root: {
      marginTop: 40,
      marginBottom: 40
    },
    postButton: {
      background: theme.palette.secondary.main,
      color: "#fff",
      "&:hover": {
        color: "#fff",
        background: theme.palette.secondary.dark
      },
      "&:disabled": {
        color: "#8f8f8f",
        background: theme.palette.secondary.dark
      }
    },
    postList: {},
    error: {
      color: "red",
      textAlign: "center"
    },
    uploadedImage: {
      width: 500,
      height: 500
    },
    tagAndButton: {
      maxWidth: 500
    }
  };
});
var TAGS_LENGTH = 5;

var FeedForm = function FeedForm() {
  _s();

  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.createEmpty()),
      editorState = _useState[0],
      setEditorState = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      uploadedImages = _useState3[0],
      setUploadedImages = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      tags = _useState4[0],
      setTags = _useState4[1];

  var onEditorStateChange = function onEditorStateChange(newEditorState) {
    setEditorState(newEditorState);
    var rawState = (0,draft_js__WEBPACK_IMPORTED_MODULE_4__.convertToRaw)(newEditorState.getCurrentContent());
    var html = draftjs_to_html__WEBPACK_IMPORTED_MODULE_6___default()(rawState);
  };

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.editorContainer,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextEditor__WEBPACK_IMPORTED_MODULE_3__.default, {
          editorState: editorState,
          placeholder: _constants__WEBPACK_IMPORTED_MODULE_5__.placeholder,
          onEditorStateChange: onEditorStateChange,
          editorClassName: "feedFormReact",
          wrapperClassName: "wrapperFormReact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TagForm__WEBPACK_IMPORTED_MODULE_7__.default, {
        setTags: setTags,
        placeholder: _constants__WEBPACK_IMPORTED_MODULE_5__.tagPlaceHolder,
        length: 100,
        maxNumber: TAGS_LENGTH,
        setError: setError,
        tags: tags,
        label: "tag"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {
        className: classes.postButton,
        color: "primary",
        disabled: !editorState.getCurrentContent().hasText() || (tags === null || tags === void 0 ? void 0 : tags.length) === 0,
        children: "POST"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, _this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.error,
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, _this);
};

_s(FeedForm, "hkJ+nnMITNNmed3aikV56nuMQCY=", false, function () {
  return [useStyles];
});

_c = FeedForm;
/* harmony default export */ __webpack_exports__["default"] = (FeedForm);

var _c;

$RefreshReg$(_c, "FeedForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9GZWVkRm9ybS9pbmRleC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luQm90dG9tIiwibWF4V2lkdGgiLCJlZGl0b3JDb250YWluZXIiLCJib3JkZXIiLCJyb290IiwibWFyZ2luVG9wIiwicG9zdEJ1dHRvbiIsImJhY2tncm91bmQiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImNvbG9yIiwiZGFyayIsInBvc3RMaXN0IiwiZXJyb3IiLCJ0ZXh0QWxpZ24iLCJ1cGxvYWRlZEltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJ0YWdBbmRCdXR0b24iLCJUQUdTX0xFTkdUSCIsIkZlZWRGb3JtIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwiRWRpdG9yU3RhdGUiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwic2V0RXJyb3IiLCJ1cGxvYWRlZEltYWdlcyIsInNldFVwbG9hZGVkSW1hZ2VzIiwidGFncyIsInNldFRhZ3MiLCJvbkVkaXRvclN0YXRlQ2hhbmdlIiwibmV3RWRpdG9yU3RhdGUiLCJyYXdTdGF0ZSIsImNvbnZlcnRUb1JhdyIsImdldEN1cnJlbnRDb250ZW50IiwiaHRtbCIsImRyYWZ0VG9IdG1sIiwidXBsb2FkQ2FsbGJhY2siLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZU9iamVjdCIsImxvY2FsU3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiaW1hZ2VzIiwiZGF0YSIsImxpbmsiLCJwbGFjZWhvbGRlciIsInRhZ1BsYWNlSG9sZGVyIiwiaGFzVGV4dCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFtQjtBQUM5Q0MsYUFBUyxFQUFFO0FBQ1RDLGtCQUFZLEVBQUUsQ0FETDtBQUVUQyxrQkFBWSxFQUFFLEVBRkw7QUFHVEMsY0FBUSxFQUFFO0FBSEQsS0FEbUM7QUFNOUNDLG1CQUFlLEVBQUU7QUFDZkMsWUFBTSxFQUFFO0FBRE8sS0FONkI7QUFTOUNDLFFBQUksRUFBRTtBQUNKQyxlQUFTLEVBQUUsRUFEUDtBQUVKTCxrQkFBWSxFQUFFO0FBRlYsS0FUd0M7QUFhOUNNLGNBQVUsRUFBRTtBQUNWQyxnQkFBVSxFQUFFVixLQUFLLENBQUNXLE9BQU4sQ0FBY0MsU0FBZCxDQUF3QkMsSUFEMUI7QUFFVkMsV0FBSyxFQUFFLE1BRkc7QUFHVixpQkFBVztBQUNUQSxhQUFLLEVBQUUsTUFERTtBQUVUSixrQkFBVSxFQUFFVixLQUFLLENBQUNXLE9BQU4sQ0FBY0MsU0FBZCxDQUF3Qkc7QUFGM0IsT0FIRDtBQU9WLG9CQUFjO0FBQ1pELGFBQUssRUFBRSxTQURLO0FBRVpKLGtCQUFVLEVBQUVWLEtBQUssQ0FBQ1csT0FBTixDQUFjQyxTQUFkLENBQXdCRztBQUZ4QjtBQVBKLEtBYmtDO0FBeUI5Q0MsWUFBUSxFQUFFLEVBekJvQztBQTBCOUNDLFNBQUssRUFBRTtBQUNMSCxXQUFLLEVBQUUsS0FERjtBQUVMSSxlQUFTLEVBQUU7QUFGTixLQTFCdUM7QUE4QjlDQyxpQkFBYSxFQUFFO0FBQ2JDLFdBQUssRUFBRSxHQURNO0FBRWJDLFlBQU0sRUFBRTtBQUZLLEtBOUIrQjtBQWtDOUNDLGdCQUFZLEVBQUU7QUFDWmxCLGNBQVEsRUFBRTtBQURFO0FBbENnQyxHQUFuQjtBQUFBLENBQUQsQ0FBNUI7QUF1Q0EsSUFBTW1CLFdBQVcsR0FBRyxDQUFwQjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLE9BQU8sR0FBRzNCLFNBQVMsRUFBekI7O0FBRHFCLGtCQUVpQjRCLCtDQUFRLENBQUNDLDZEQUFBLEVBQUQsQ0FGekI7QUFBQSxNQUVkQyxXQUZjO0FBQUEsTUFFREMsY0FGQzs7QUFBQSxtQkFHS0gsK0NBQVEsQ0FBQyxFQUFELENBSGI7QUFBQSxNQUdkVCxLQUhjO0FBQUEsTUFHUGEsUUFITzs7QUFBQSxtQkFJdUJKLCtDQUFRLENBQVcsRUFBWCxDQUovQjtBQUFBLE1BSWRLLGNBSmM7QUFBQSxNQUlFQyxpQkFKRjs7QUFBQSxtQkFLR04sK0NBQVEsQ0FBUyxFQUFULENBTFg7QUFBQSxNQUtkTyxJQUxjO0FBQUEsTUFLUkMsT0FMUTs7QUFPckIsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxjQUFELEVBQW9CO0FBQzlDUCxrQkFBYyxDQUFDTyxjQUFELENBQWQ7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLHNEQUFZLENBQUNGLGNBQWMsQ0FBQ0csaUJBQWYsRUFBRCxDQUE3QjtBQUNBLFFBQU1DLElBQUksR0FBR0Msc0RBQVcsQ0FBQ0osUUFBRCxDQUF4QjtBQUNELEdBSkQ7O0FBTUEsV0FBU0ssY0FBVCxDQUF3QkMsSUFBeEIsRUFBb0M7QUFDbEMsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDLFVBQU1DLFdBQVcsR0FBRztBQUNsQkosWUFBSSxFQUFKQSxJQURrQjtBQUVsQkssZ0JBQVEsRUFBRUMsR0FBRyxDQUFDQyxlQUFKLENBQW9CUCxJQUFwQjtBQUZRLE9BQXBCO0FBS0EsVUFBTVEsTUFBTSxnS0FBT3BCLGNBQVAsSUFBdUJnQixXQUF2QixFQUFaO0FBQ0FmLHVCQUFpQixDQUFDbUIsTUFBRCxDQUFqQjtBQUNBTixhQUFPLENBQUM7QUFBRU8sWUFBSSxFQUFFO0FBQUVDLGNBQUksRUFBRU4sV0FBVyxDQUFDQztBQUFwQjtBQUFSLE9BQUQsQ0FBUDtBQUNELEtBVE0sQ0FBUDtBQVVEOztBQUVELHNCQUNFLDhEQUFDLGdFQUFEO0FBQVcsYUFBUyxFQUFFdkIsT0FBTyxDQUFDbEIsSUFBOUI7QUFBQSw0QkFDRSw4REFBQyxnRUFBRDtBQUFXLGVBQVMsRUFBRWtCLE9BQU8sQ0FBQ3hCLFNBQTlCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFd0IsT0FBTyxDQUFDcEIsZUFBeEI7QUFBQSwrQkFDRSw4REFBQyxnREFBRDtBQUNFLHFCQUFXLEVBQUV1QixXQURmO0FBRUUscUJBQVcsRUFBRTBCLG1EQUZmO0FBR0UsNkJBQW1CLEVBQUVuQixtQkFIdkI7QUFJRSx5QkFBZSxFQUFDLGVBSmxCO0FBS0UsMEJBQWdCLEVBQUM7QUFMbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVdFLDhEQUFDLDZDQUFEO0FBQ0UsZUFBTyxFQUFFRCxPQURYO0FBRUUsbUJBQVcsRUFBRXFCLHNEQUZmO0FBR0UsY0FBTSxFQUFFLEdBSFY7QUFJRSxpQkFBUyxFQUFFaEMsV0FKYjtBQUtFLGdCQUFRLEVBQUVPLFFBTFo7QUFNRSxZQUFJLEVBQUVHLElBTlI7QUFPRSxhQUFLLEVBQUM7QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEYsZUFxQkUsOERBQUMsc0RBQUQ7QUFDRSxpQkFBUyxFQUFFUixPQUFPLENBQUNoQixVQURyQjtBQUVFLGFBQUssRUFBQyxTQUZSO0FBR0UsZ0JBQVEsRUFDTixDQUFDbUIsV0FBVyxDQUFDVyxpQkFBWixHQUFnQ2lCLE9BQWhDLEVBQUQsSUFBOEMsQ0FBQXZCLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFd0IsTUFBTixNQUFpQixDQUpuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQWlDR3hDLEtBQUssaUJBQUk7QUFBSyxlQUFTLEVBQUVRLE9BQU8sQ0FBQ1IsS0FBeEI7QUFBQSxnQkFBZ0NBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0EvREQ7O0dBQU1PLFE7VUFDWTFCLFM7OztLQURaMEIsUTtBQWlFTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWVkcy44NTA5MzVmYTlhZDRmNWM2MWUyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRWRpdG9yIGZyb20gXCIuLy4uL1RleHRFZGl0b3JcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgeyBFZGl0b3JTdGF0ZSwgY29udmVydFRvUmF3IH0gZnJvbSBcImRyYWZ0LWpzXCI7XG5pbXBvcnQgeyB0YWdQbGFjZUhvbGRlciwgcGxhY2Vob2xkZXIgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgQnV0dG9uLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IGRyYWZ0VG9IdG1sIGZyb20gXCJkcmFmdGpzLXRvLWh0bWxcIjtcbmltcG9ydCBUYWdGb3JtIGZyb20gXCIuLi9UYWdGb3JtXCI7XG5pbXBvcnQgeyBJVGFnIH0gZnJvbSBcIi4uL1RhZ0Zvcm1cIjtcblxuaW50ZXJmYWNlIElJbWFnZSB7XG4gIGZpbGU6IEZpbGU7XG4gIGxvY2FsU3JjOiBzdHJpbmc7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcbiAgY29udGFpbmVyOiB7XG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgbWF4V2lkdGg6IDYwMCxcbiAgfSxcbiAgZWRpdG9yQ29udGFpbmVyOiB7XG4gICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNjk2OTY5XCIsXG4gIH0sXG4gIHJvb3Q6IHtcbiAgICBtYXJnaW5Ub3A6IDQwLFxuICAgIG1hcmdpbkJvdHRvbTogNDAsXG4gIH0sXG4gIHBvc3RCdXR0b246IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcbiAgICB9LFxuICAgIFwiJjpkaXNhYmxlZFwiOiB7XG4gICAgICBjb2xvcjogXCIjOGY4ZjhmXCIsXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxuICAgIH0sXG4gIH0sXG4gIHBvc3RMaXN0OiB7fSxcbiAgZXJyb3I6IHtcbiAgICBjb2xvcjogXCJyZWRcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIHVwbG9hZGVkSW1hZ2U6IHtcbiAgICB3aWR0aDogNTAwLFxuICAgIGhlaWdodDogNTAwLFxuICB9LFxuICB0YWdBbmRCdXR0b246IHtcbiAgICBtYXhXaWR0aDogNTAwLFxuICB9LFxufSkpO1xuXG5jb25zdCBUQUdTX0xFTkdUSCA9IDU7XG5cbmNvbnN0IEZlZWRGb3JtID0gKCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtlZGl0b3JTdGF0ZSwgc2V0RWRpdG9yU3RhdGVdID0gdXNlU3RhdGUoRWRpdG9yU3RhdGUuY3JlYXRlRW1wdHkoKSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1cGxvYWRlZEltYWdlcywgc2V0VXBsb2FkZWRJbWFnZXNdID0gdXNlU3RhdGU8SUltYWdlW10+KFtdKTtcbiAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGU8SVRhZ1tdPihbXSk7XG5cbiAgY29uc3Qgb25FZGl0b3JTdGF0ZUNoYW5nZSA9IChuZXdFZGl0b3JTdGF0ZSkgPT4ge1xuICAgIHNldEVkaXRvclN0YXRlKG5ld0VkaXRvclN0YXRlKTtcbiAgICBjb25zdCByYXdTdGF0ZSA9IGNvbnZlcnRUb1JhdyhuZXdFZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKTtcbiAgICBjb25zdCBodG1sID0gZHJhZnRUb0h0bWwocmF3U3RhdGUpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHVwbG9hZENhbGxiYWNrKGZpbGU6IEZpbGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgaW1hZ2VPYmplY3QgPSB7XG4gICAgICAgIGZpbGUsXG4gICAgICAgIGxvY2FsU3JjOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgaW1hZ2VzID0gWy4uLnVwbG9hZGVkSW1hZ2VzLCBpbWFnZU9iamVjdF07XG4gICAgICBzZXRVcGxvYWRlZEltYWdlcyhpbWFnZXMpO1xuICAgICAgcmVzb2x2ZSh7IGRhdGE6IHsgbGluazogaW1hZ2VPYmplY3QubG9jYWxTcmMgfSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lZGl0b3JDb250YWluZXJ9PlxuICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9e29uRWRpdG9yU3RhdGVDaGFuZ2V9XG4gICAgICAgICAgICBlZGl0b3JDbGFzc05hbWU9XCJmZWVkRm9ybVJlYWN0XCJcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJ3cmFwcGVyRm9ybVJlYWN0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8VGFnRm9ybVxuICAgICAgICAgIHNldFRhZ3M9e3NldFRhZ3N9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RhZ1BsYWNlSG9sZGVyfVxuICAgICAgICAgIGxlbmd0aD17MTAwfVxuICAgICAgICAgIG1heE51bWJlcj17VEFHU19MRU5HVEh9XG4gICAgICAgICAgc2V0RXJyb3I9e3NldEVycm9yfVxuICAgICAgICAgIHRhZ3M9e3RhZ3N9XG4gICAgICAgICAgbGFiZWw9XCJ0YWdcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucG9zdEJ1dHRvbn1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICFlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpLmhhc1RleHQoKSB8fCB0YWdzPy5sZW5ndGggPT09IDBcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICBQT1NUXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lcnJvcn0+e2Vycm9yfTwvZGl2Pn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==