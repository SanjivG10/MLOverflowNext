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
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Accordion */ "./node_modules/@material-ui/core/esm/Accordion/index.js");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "./node_modules/@material-ui/core/esm/AccordionSummary/index.js");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "./node_modules/@material-ui/core/esm/AccordionDetails/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
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
        background: "#000"
      }
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
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
      lineNumber: 112,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: classes.title,
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.authors,
        children: data.authors.map(function (author) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes.eachAuthor,
            children: author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 20
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("abstract", "ABSTRACT", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes["abstract"],
          children: data["abstract"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
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
              lineNumber: 131,
              columnNumber: 24
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__.default, {
          expandIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 25
          }, _this),
          "aria-controls": "panel1a-content",
          id: "panel1a-header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
            className: classes.heading,
            children: "Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_11__.default, {
          className: classes.detail,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("clock", "PUBLISHED DATE", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.date,
              children: data.publishedDate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("info", "META", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.meta,
              children: data.meta
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
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
              lineNumber: 158,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
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
              lineNumber: 174,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              alt: "",
              src: "/".concat(data.codes[0].language, ".svg"),
              className: classes.langIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
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
          lineNumber: 201,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 198,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFwZXJzL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsInRpdGxlIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJhdXRob3JzIiwibWFyZ2luQm90dG9tIiwiZWFjaEF1dGhvciIsIm1hcmdpblJpZ2h0IiwiZm9udFN0eWxlIiwiY29sb3IiLCJjdXJzb3IiLCJiZWF1dGlmeSIsInNwZWNpYWxMYWJlbCIsImRpc3BsYXkiLCJib3JkZXJCb3R0b20iLCJ3aWR0aCIsImxhYmVsIiwiZm9udFdlaWdodCIsIm1ldGEiLCJpY29uIiwiaGVpZ2h0IiwiZGF0ZSIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvZGUiLCJsYW5nSWNvbiIsIm1hcmdpbkxlZnQiLCJ0YWdzIiwidGFnIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJoZWFkaW5nIiwidHlwb2dyYXBoeSIsInB4VG9SZW0iLCJmb250V2VpZ2h0UmVndWxhciIsIlBhcGVyUGFnZSIsInByb3BzIiwidXNlUm91dGVyIiwicXVlcnkiLCJzbHVnIiwiY2xhc3NlcyIsImRhdGEiLCJEVU1NWV9QQVBFUiIsIm1hcCIsImF1dGhvciIsIm5hbWUiLCJsZW5ndGgiLCJkZXRhaWwiLCJwdWJsaXNoZWREYXRlIiwiY29kZXMiLCJsYW5ndWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBbUI7QUFDOUNDLFFBQUksRUFBRTtBQUNKQyxlQUFTLEVBQUU7QUFEUCxLQUR3QztBQUk5Q0MsYUFBUyxFQUFFLEVBSm1DO0FB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SFp5QyxTOztBQTZGTixJQUFNeEIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ08sSUFBRCxFQUFlSCxLQUFmLEVBQThCeUIsT0FBOUIsRUFBd0Q7QUFDM0Usc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUEsT0FBTyxDQUFDN0IsWUFBeEI7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUssYUFBRyxhQUFNTyxJQUFOLFNBQVI7QUFBMEIsYUFBRyxFQUFDLEVBQTlCO0FBQWlDLG1CQUFTLEVBQUVzQixPQUFPLENBQUN0QjtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFc0IsT0FBTyxDQUFDekIsS0FBeEI7QUFBQSxrQkFBZ0NBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQVhEOztBQWFBLCtEQUFlb0IsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXBlcnMvW3NsdWddLjc5MWNkMDRhMzNkMzFhYjMyN2YzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgRFVNTVlfUEFQRVIgfSBmcm9tIFwiLi4vLi4vZHVtbXlcIjtcbmltcG9ydCB7IENsYXNzTmFtZU1hcCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCI7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25cIjtcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5XCI7XG5pbXBvcnQgQWNjb3JkaW9uRGV0YWlscyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlsc1wiO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuaW50ZXJmYWNlIElQYXBlciB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGF1dGhvcnM6IHsgbmFtZTogc3RyaW5nIH1bXTtcbiAgYWJzdHJhY3Q6IHN0cmluZztcbiAgcHVibGlzaGVkRGF0ZTogc3RyaW5nO1xuICBsaW5rOiBzdHJpbmc7XG4gIG1vZGVsPzogc3RyaW5nO1xuICBkYXRhc2V0cz86IHN0cmluZztcbiAgbWV0YT86IHN0cmluZztcbiAgdGFncz86IHsgbmFtZTogc3RyaW5nIH1bXTtcbiAgY29kZXM/OiB7IGxhbmd1YWdlOiBzdHJpbmc7IGxpbms6IHN0cmluZyB9W107XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1hcmdpblRvcDogNDAsXG4gIH0sXG4gIGNvbnRhaW5lcjoge30sXG4gIHRpdGxlOiB7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGZvbnRTaXplOiAzNixcbiAgfSxcbiAgYXV0aG9yczoge1xuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9LFxuICBlYWNoQXV0aG9yOiB7XG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICB9LFxuICB9LFxuICBhYnN0cmFjdDoge30sXG4gIGJlYXV0aWZ5OiB7XG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgfSxcblxuICBzcGVjaWFsTGFiZWw6IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGJvcmRlckJvdHRvbTogXCI1cHggc29saWQgdGVhbFwiLFxuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBmb250U2l6ZTogMTYsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gIH0sXG4gIG1ldGE6IHt9LFxuICBpY29uOiB7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxuICB9LFxuICBkYXRlOiB7fSxcbiAgbGluazoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgfSxcbiAgY29kZToge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgfSxcbiAgbGFuZ0ljb246IHtcbiAgICB3aWR0aDogMjAsXG4gICAgaGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgfSxcbiAgdGFnczoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gIH0sXG4gIHRhZzoge1xuICAgIGJhY2tncm91bmQ6IFwiIzgwMDAwMFwiLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgIHBhZGRpbmc6IDQsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBcIiMwMDBcIixcbiAgICB9LFxuICB9LFxuICBoZWFkaW5nOiB7XG4gICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNSksXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcbiAgfSxcbn0pKTtcblxuY29uc3QgUGFwZXJQYWdlOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHNsdWcgPSBxdWVyeS5zbHVnO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgZGF0YTogSVBhcGVyID0gRFVNTVlfUEFQRVJbMF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJQYXBlclwiIC8+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PntkYXRhLnRpdGxlfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRob3JzfT5cbiAgICAgICAgICB7ZGF0YS5hdXRob3JzLm1hcCgoYXV0aG9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmVhY2hBdXRob3J9PnthdXRob3IubmFtZX08L3NwYW4+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJhYnN0cmFjdFwiLCBcIkFCU1RSQUNUXCIsIGNsYXNzZXMpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFic3RyYWN0fT57ZGF0YS5hYnN0cmFjdH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2RhdGEudGFncyAmJiBkYXRhLnRhZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnc30+XG4gICAgICAgICAgICAgIHtkYXRhLnRhZ3MubWFwKCh0YWc6IHsgbmFtZTogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnfT57dGFnLm5hbWV9PC9kaXY+O1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxBY2NvcmRpb24+XG4gICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcbiAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDFhLWNvbnRlbnRcIlxuICAgICAgICAgICAgaWQ9XCJwYW5lbDFhLWhlYWRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PkRldGFpbHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxuICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiY2xvY2tcIiwgXCJQVUJMSVNIRUQgREFURVwiLCBjbGFzc2VzKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+e2RhdGEucHVibGlzaGVkRGF0ZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJpbmZvXCIsIFwiTUVUQVwiLCBjbGFzc2VzKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWV0YX0+e2RhdGEubWV0YX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJsaW5rXCIsIFwiTElOS1wiLCBjbGFzc2VzKX1cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtkYXRhLmxpbmt9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9YH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RhdGEubGlua31cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtkYXRhLmNvZGVzICYmXG4gICAgICAgICAgICAgIGRhdGEuY29kZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICBkYXRhLmNvZGVzWzBdLmxpbmsgJiZcbiAgICAgICAgICAgICAgZGF0YS5jb2Rlc1swXS5sYW5ndWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgICAgICAgICAge3NwZWNpYWxMYWJlbChcImNvZGVcIiwgXCJDT0RFXCIsIGNsYXNzZXMpfVxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17ZGF0YS5jb2Rlc1swXS5saW5rfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29kZX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmNvZGVzWzBdLmxpbmt9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC8ke2RhdGEuY29kZXNbMF0ubGFuZ3VhZ2V9LnN2Z2B9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYW5nSWNvbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3Qgc3BlY2lhbExhYmVsID0gKGljb246IHN0cmluZywgbGFiZWw6IHN0cmluZywgY2xhc3NlczogQ2xhc3NOYW1lTWFwKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNwZWNpYWxMYWJlbH0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2AvJHtpY29ufS5zdmdgfSBhbHQ9XCJcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfT57bGFiZWx9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcGVyUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=