self["webpackHotUpdate_N_E"]("pages/papers/[slug]",{

/***/ "./pages/papers/[slug].tsx":
/*!*********************************!*\
  !*** ./pages/papers/[slug].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _dummy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dummy */ "./dummy/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/home/bhairaja/mloverflow-next/pages/papers/[slug].tsx",
    _this = undefined,
    _s = $RefreshSig$();







var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
  return {
    root: {
      marginTop: 40
    },
    container: {},
    title: {
      textAlign: "center",
      fontSize: 36
    },
    authors: {
      marginBottom: 20,
      textAlign: "center"
    },
    eachAuthor: {
      marginRight: 10,
      marginBottom: 10,
      fontStyle: "italic",
      color: "blue",
      "&:hover": {
        cursor: "pointer"
      }
    },
    "abstract": {},
    beautify: {
      marginBottom: 20
    },
    specialLabel: {
      marginTop: 10,
      display: "flex",
      borderBottom: "5px solid teal",
      width: "fit-content",
      marginBottom: 10
    },
    label: {
      fontSize: 16,
      fontWeight: "bold"
    },
    meta: {},
    icon: {
      width: 20,
      height: 20,
      marginRight: 10
    },
    date: {},
    link: {
      textDecoration: "none"
    },
    code: {
      textDecoration: "none"
    },
    langIcon: {
      width: 20,
      height: 20,
      marginLeft: 10
    },
    tags: {
      marginTop: 10
    },
    tag: {
      background: "#800000",
      color: "#fff",
      width: "fit-content",
      padding: 4,
      borderRadius: 4,
      "&:hover": {
        background: "#000",
        color: "#fff"
      }
    }
  };
});

var PaperPage = function PaperPage(props) {
  _s();

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),
      query = _useRouter.query;

  var slug = query.slug;
  var classes = useStyles();
  var data = _dummy__WEBPACK_IMPORTED_MODULE_4__.DUMMY_PAPER[0];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "Paper"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: classes.title,
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.authors,
        children: data.authors.map(function (author) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes.eachAuthor,
            children: author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 20
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("abstract", "ABSTRACT", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes["abstract"],
          children: data["abstract"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this), data.tags && data.tags.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.tags,
          children: data.tags.map(function (tag) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.tag,
              children: tag.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 24
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("clock", "PUBLISHED DATE", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.date,
          children: data.publishedDate
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("info", "META", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.meta,
          children: data.meta
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("link", "LINK", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: data.link,
          className: "".concat(classes.link),
          target: "_blank",
          rel: "noopener noreferrer",
          children: data.link
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this), data.codes && data.codes.length > 0 && data.codes[0].link && data.codes[0].language && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("code", "CODE", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: data.codes[0].link,
          className: classes.code,
          target: "_blank",
          rel: "noopener noreferrer",
          children: data.codes[0].link
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          alt: "",
          src: "/".concat(data.codes[0].language, ".svg"),
          className: classes.langIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 103,
    columnNumber: 5
  }, _this);
};

_s(PaperPage, "vvh9GKDmGg2swX3NqEAQicIBfAI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, useStyles];
});

_c = PaperPage;

var specialLabel = function specialLabel(icon, label, classes) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.specialLabel,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/".concat(icon, ".svg"),
          alt: "",
          className: classes.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 179,
    columnNumber: 5
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (PaperPage);

var _c;

$RefreshReg$(_c, "PaperPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFwZXJzL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsInRpdGxlIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJhdXRob3JzIiwibWFyZ2luQm90dG9tIiwiZWFjaEF1dGhvciIsIm1hcmdpblJpZ2h0IiwiZm9udFN0eWxlIiwiY29sb3IiLCJjdXJzb3IiLCJiZWF1dGlmeSIsInNwZWNpYWxMYWJlbCIsImRpc3BsYXkiLCJib3JkZXJCb3R0b20iLCJ3aWR0aCIsImxhYmVsIiwiZm9udFdlaWdodCIsIm1ldGEiLCJpY29uIiwiaGVpZ2h0IiwiZGF0ZSIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvZGUiLCJsYW5nSWNvbiIsIm1hcmdpbkxlZnQiLCJ0YWdzIiwidGFnIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJQYXBlclBhZ2UiLCJwcm9wcyIsInVzZVJvdXRlciIsInF1ZXJ5Iiwic2x1ZyIsImNsYXNzZXMiLCJkYXRhIiwiRFVNTVlfUEFQRVIiLCJtYXAiLCJhdXRob3IiLCJuYW1lIiwibGVuZ3RoIiwicHVibGlzaGVkRGF0ZSIsImNvZGVzIiwibGFuZ3VhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWlCQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQW1CO0FBQzlDQyxRQUFJLEVBQUU7QUFDSkMsZUFBUyxFQUFFO0FBRFAsS0FEd0M7QUFJOUNDLGFBQVMsRUFBRSxFQUptQztBQUs5Q0MsU0FBSyxFQUFFO0FBQ0xDLGVBQVMsRUFBRSxRQUROO0FBRUxDLGNBQVEsRUFBRTtBQUZMLEtBTHVDO0FBUzlDQyxXQUFPLEVBQUU7QUFDUEMsa0JBQVks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O0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFVRTtBQUNFLGFBQUcsRUFBQyxFQUROO0FBRUUsYUFBRyxhQUFNZ0IsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjQyxRQUFwQixTQUZMO0FBR0UsbUJBQVMsRUFBRVQsT0FBTyxDQUFDWjtBQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlFRCxDQWhGRDs7R0FBTU8sUztVQUNjRSxrRCxFQUVGdkMsUzs7O0tBSFpxQyxTOztBQWtGTixJQUFNcEIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ08sSUFBRCxFQUFlSCxLQUFmLEVBQThCcUIsT0FBOUIsRUFBd0Q7QUFDM0Usc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUEsT0FBTyxDQUFDekIsWUFBeEI7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUssYUFBRyxhQUFNTyxJQUFOLFNBQVI7QUFBMEIsYUFBRyxFQUFDLEVBQTlCO0FBQWlDLG1CQUFTLEVBQUVrQixPQUFPLENBQUNsQjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFa0IsT0FBTyxDQUFDckIsS0FBeEI7QUFBQSxrQkFBZ0NBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQVhEOztBQWFBLCtEQUFlZ0IsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXBlcnMvW3NsdWddLmJmYzAwMDc2MWI1NjI4ZDk1MWY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgRFVNTVlfUEFQRVIgfSBmcm9tIFwiLi4vLi4vZHVtbXlcIjtcbmltcG9ydCB7IENsYXNzTmFtZU1hcCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge31cbmludGVyZmFjZSBJUGFwZXIge1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3JzOiB7IG5hbWU6IHN0cmluZyB9W107XG4gIGFic3RyYWN0OiBzdHJpbmc7XG4gIHB1Ymxpc2hlZERhdGU6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xuICBtb2RlbD86IHN0cmluZztcbiAgZGF0YXNldHM/OiBzdHJpbmc7XG4gIG1ldGE/OiBzdHJpbmc7XG4gIHRhZ3M/OiB7IG5hbWU6IHN0cmluZyB9W107XG4gIGNvZGVzPzogeyBsYW5ndWFnZTogc3RyaW5nOyBsaW5rOiBzdHJpbmcgfVtdO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBtYXJnaW5Ub3A6IDQwLFxuICB9LFxuICBjb250YWluZXI6IHt9LFxuICB0aXRsZToge1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogMzYsXG4gIH0sXG4gIGF1dGhvcnM6IHtcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgfSxcbiAgZWFjaEF1dGhvcjoge1xuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgfSxcbiAgfSxcbiAgYWJzdHJhY3Q6IHt9LFxuICBiZWF1dGlmeToge1xuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gIH0sXG5cbiAgc3BlY2lhbExhYmVsOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBib3JkZXJCb3R0b206IFwiNXB4IHNvbGlkIHRlYWxcIixcbiAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxuICBtZXRhOiB7fSxcbiAgaWNvbjoge1xuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgfSxcbiAgZGF0ZToge30sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIH0sXG4gIGNvZGU6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIH0sXG4gIGxhbmdJY29uOiB7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gIH0sXG4gIHRhZ3M6IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICB9LFxuICB0YWc6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiM4MDAwMDBcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICBwYWRkaW5nOiA0LFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXG4gICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgUGFwZXJQYWdlOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHNsdWcgPSBxdWVyeS5zbHVnO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgZGF0YTogSVBhcGVyID0gRFVNTVlfUEFQRVJbMF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJQYXBlclwiIC8+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PntkYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRob3JzfT5cbiAgICAgICAgICB7ZGF0YS5hdXRob3JzLm1hcCgoYXV0aG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmVhY2hBdXRob3J9PnthdXRob3IubmFtZX08L3NwYW4+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJhYnN0cmFjdFwiLCBcIkFCU1RSQUNUXCIsIGNsYXNzZXMpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFic3RyYWN0fT57ZGF0YS5hYnN0cmFjdH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2RhdGEudGFncyAmJiBkYXRhLnRhZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnc30+XG4gICAgICAgICAgICAgIHtkYXRhLnRhZ3MubWFwKCh0YWc6IHsgbmFtZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnfT57dGFnLm5hbWV9PC9kaXY+O1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiY2xvY2tcIiwgXCJQVUJMSVNIRUQgREFURVwiLCBjbGFzc2VzKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXRlfT57ZGF0YS5wdWJsaXNoZWREYXRlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAge3NwZWNpYWxMYWJlbChcImluZm9cIiwgXCJNRVRBXCIsIGNsYXNzZXMpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1ldGF9PntkYXRhLm1ldGF9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICB7c3BlY2lhbExhYmVsKFwibGlua1wiLCBcIkxJTktcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e2RhdGEubGlua31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5saW5rfWB9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2RhdGEubGlua31cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtkYXRhLmNvZGVzICYmXG4gICAgICAgICAgZGF0YS5jb2Rlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgZGF0YS5jb2Rlc1swXS5saW5rICYmXG4gICAgICAgICAgZGF0YS5jb2Rlc1swXS5sYW5ndWFnZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJjb2RlXCIsIFwiQ09ERVwiLCBjbGFzc2VzKX1cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtkYXRhLmNvZGVzWzBdLmxpbmt9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvZGV9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkYXRhLmNvZGVzWzBdLmxpbmt9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgc3JjPXtgLyR7ZGF0YS5jb2Rlc1swXS5sYW5ndWFnZX0uc3ZnYH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGFuZ0ljb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBzcGVjaWFsTGFiZWwgPSAoaWNvbjogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBjbGFzc2VzOiBDbGFzc05hbWVNYXApID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3BlY2lhbExhYmVsfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17YC8ke2ljb259LnN2Z2B9IGFsdD1cIlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFwZXJQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==