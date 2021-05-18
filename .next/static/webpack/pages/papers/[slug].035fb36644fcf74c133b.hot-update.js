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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
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
    container: {
      margin: 40
    },
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
      marginTop: 10,
      display: "flex",
      flexWrap: "wrap"
    },
    tag: {
      background: "#800000",
      color: "#fff",
      width: "fit-content",
      padding: 4,
      borderRadius: 4,
      "&:hover": {
        background: "#000"
      },
      marginRight: 10,
      marginTop: 10
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightBold
    },
    detail: {
      display: "flex",
      flexDirection: "column"
    }
  };
});

var PaperPage = function PaperPage(props) {
  _s();

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),
      query = _useRouter.query;

  var slug = query.slug;
  var classes = useStyles();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      openAccordion = _useState[0],
      setAccordion = _useState[1];

  var data = _dummy__WEBPACK_IMPORTED_MODULE_4__.DUMMY_PAPER[0];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: "Paper"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__.default, {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: classes.title,
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.authors,
        children: data.authors.map(function (author) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes.eachAuthor,
            children: author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 20
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("abstract", "ABSTRACT", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes["abstract"],
          children: data["abstract"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
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
              lineNumber: 142,
              columnNumber: 24
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7__.default, {
        expanded: openAccordion,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__.default, {
          expandIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 25
          }, _this),
          "aria-controls": "panel1a-content",
          id: "panel1a-header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__.default, {
            className: classes.heading,
            children: "Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
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
              lineNumber: 159,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("info", "META", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.meta,
              children: data.meta
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
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
              lineNumber: 169,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
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
              lineNumber: 185,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              alt: "",
              src: "/".concat(data.codes[0].language, ".svg"),
              className: classes.langIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 19
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }, _this);
};

_s(PaperPage, "Mep4/VYGCb9L3tVyoMtOslzTw54=", false, function () {
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
          lineNumber: 212,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 209,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFwZXJzL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsIm1hcmdpbiIsInRpdGxlIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJhdXRob3JzIiwibWFyZ2luQm90dG9tIiwiZWFjaEF1dGhvciIsIm1hcmdpblJpZ2h0IiwiZm9udFN0eWxlIiwiY29sb3IiLCJjdXJzb3IiLCJiZWF1dGlmeSIsInNwZWNpYWxMYWJlbCIsImRpc3BsYXkiLCJib3JkZXJCb3R0b20iLCJ3aWR0aCIsImxhYmVsIiwiZm9udFdlaWdodCIsIm1ldGEiLCJpY29uIiwiaGVpZ2h0IiwiZGF0ZSIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvZGUiLCJsYW5nSWNvbiIsIm1hcmdpbkxlZnQiLCJ0YWdzIiwiZmxleFdyYXAiLCJ0YWciLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImhlYWRpbmciLCJ0eXBvZ3JhcGh5IiwicHhUb1JlbSIsImZvbnRXZWlnaHRCb2xkIiwiZGV0YWlsIiwiZmxleERpcmVjdGlvbiIsIlBhcGVyUGFnZSIsInByb3BzIiwidXNlUm91dGVyIiwicXVlcnkiLCJzbHVnIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwib3BlbkFjY29yZGlvbiIsInNldEFjY29yZGlvbiIsImRhdGEiLCJEVU1NWV9QQVBFUiIsIm1hcCIsImF1dGhvciIsIm5hbWUiLCJsZW5ndGgiLCJwdWJsaXNoZWREYXRlIiwiY29kZXMiLCJsYW5ndWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBbUI7QUFDOUNDLFFBQUksRUFBRTtBQUNKQyxlQUFTLEVBQUU7QUFEUCxLQUR3QztBQUk5Q0MsYUFBUyxFQUFFO0FBQ1RDLFlBQU0sRUFBRTtBQURDLEtBSm1DO0FBTzlDQyxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFLFFBRE47QUFFTEMsY0FBUSxFQUFFO0FBRkwsS0FQdUM7QUFXOUNDLFdBQU8sRUFBRTtBQUNQQyxrQkFBWSxFQUFFLEVBRFA7QUFFUEgsZUFBUyxFQUFFO0FBRkosS0FYcUM7QUFlOUNJLGNBQVUsRUFBRTtBQUNWQyxpQkFBVyxFQUFFLEVBREg7QUFFVkYsa0JBQVksRUFBRSxFQUZKO0FBR1ZHLGVBQVMsRUFBRSxRQUhEO0FBSVZDLFdBQUssRUFBRSxNQUpHO0FBS1YsaUJBQVc7QUFDVEMsY0FBTSxFQUFFO0FBREM7QUFMRCxLQWZrQztBQXdCOUMsZ0JBQVUsRUF4Qm9DO0FBeUI5Q0MsWUFBUSxFQUFFO0FBQ1JOLGtCQUFZLEVBQUU7QUFETixLQXpCb0M7QUE2QjlDTyxnQkFBWSxFQUFFO0FBQ1pkLGVBQVMsRUFBRSxFQURDO0FBRVplLGFBQU8sRUFBRSxNQUZHO0FBR1pDLGtCQUFZLEVBQUUsZ0JBSEY7QUFJWkMsV0FBSyxFQUFFLGFBSks7QUFLWlYsa0JBQVksRUFBRTtBQUxGLEtBN0JnQztBQW9DOUNXLFNBQUssRUFBRTtBQUNMYixjQUFRLEVBQUUsRUFETDtBQUVMYyxnQkFBVSxFQUFFO0FBRlAsS0FwQ3VDO0FBd0M5Q0MsUUFBSSxFQUFFLEVBeEN3QztBQXlDOUNDLFFBQUksRUFBRTtBQUNKSixXQUFLLEVBQUUsRUFESDtBQUVKSyxZQUFNLEVBQUUsRUFGSjtBQUdKYixpQkFBVyxFQUFFO0FBSFQsS0F6Q3dDO0FBOEM5Q2MsUUFBSSxFQUFFLEVBOUN3QztBQStDOUNDLFFBQUksRUFBRTtBQUNKQyxvQkFBYyxFQUFFO0FBRFosS0EvQ3dDO0FBa0Q5Q0MsUUFBSSxFQUFFO0FBQ0pELG9CQUFjLEVBQUU7QUFEWixLQWxEd0M7QUFxRDlDRSxZQUFRLEVBQUU7QUFDUlYsV0FBSyxFQUFFLEVBREM7QUFFUkssWUFBTSxFQUFFLEVBRkE7QUFHUk0sZ0JBQVUsRUFBRTtBQUhKLEtBckRvQztBQTBEOUNDLFFBQUksRUFBRTtBQUNKN0IsZUFBUyxFQUFFLEVBRFA7QUFFSmUsYUFBTyxFQUFFLE1BRkw7QUFHSmUsY0FBUSxFQUFFO0FBSE4sS0ExRHdDO0FBK0Q5Q0MsT0FBRyxFQUFFO0FBQ0hDLGdCQUFVLEVBQUUsU0FEVDtBQUVIckIsV0FBSyxFQUFFLE1BRko7QUFHSE0sV0FBSyxFQUFFLGFBSEo7QUFJSGdCLGFBQU8sRUFBRSxDQUpOO0FBS0hDLGtCQUFZLEVBQUUsQ0FMWDtBQU1ILGlCQUFXO0FBQ1RGLGtCQUFVLEVBQUU7QUFESCxPQU5SO0FBU0h2QixpQkFBVyxFQUFFLEVBVFY7QUFVSFQsZUFBUyxFQUFFO0FBVlIsS0EvRHlDO0FBMkU5Q21DLFdBQU8sRUFBRTtBQUNQOUIsY0FBUSxFQUFFUCxLQUFLLENBQUNzQyxVQUFOLENBQWlCQyxPQUFqQixDQUF5QixFQUF6QixDQURIO0FBRVBsQixnQkFBVSxFQUFFckIsS0FBSyxDQUFDc0MsVUFBTixDQUFpQkU7QUFGdEIsS0EzRXFDO0FBK0U5Q0MsVUFBTSxFQUFFO0FBQ054QixhQUFPLEVBQUUsTUFESDtBQUVOeUIsbUJBQWEsRUFBRTtBQUZUO0FBL0VzQyxHQUFuQjtBQUFBLENBQUQsQ0FBNUI7O0FBcUZBLElBQU1DLFNBQTJCLEdBQUcsU0FBOUJBLFNBQThCLENBQUNDLEtBQUQsRUFBbUI7QUFBQTs7QUFBQSxtQkFDbkNDLHNEQUFTLEVBRDBCO0FBQUEsTUFDN0NDLEtBRDZDLGNBQzdDQSxLQUQ2Qzs7QUFFckQsTUFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQW5CO0FBQ0EsTUFBTUMsT0FBTyxHQUFHbEQsU0FBUyxFQUF6Qjs7QUFIcUQsa0JBSWZtRCwrQ0FBUSxDQUFDLEtBQUQsQ0FKTztBQUFBLE1BSTlDQyxhQUo4QztBQUFBLE1BSS9CQyxZQUorQjs7QUFNckQsTUFBTUMsSUFBWSxHQUFHQyxrREFBckI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUwsT0FBTyxDQUFDL0MsSUFBeEI7QUFBQSw0QkFDRSw4REFBQyx1REFBRDtBQUFRLFdBQUssRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLDREQUFEO0FBQU8sZUFBUyxFQUFFK0MsT0FBTyxDQUFDN0MsU0FBMUI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUU2QyxPQUFPLENBQUNqQyxRQUF4QjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBRWlDLE9BQU8sQ0FBQzNDLEtBQXZCO0FBQUEsb0JBQStCK0MsSUFBSSxDQUFDL0M7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUssaUJBQVMsRUFBRTJDLE9BQU8sQ0FBQ3hDLE9BQXhCO0FBQUEsa0JBQ0c0QyxJQUFJLENBQUM1QyxPQUFMLENBQWE4QyxHQUFiLENBQWlCLFVBQUNDLE1BQUQsRUFBWTtBQUM1Qiw4QkFBTztBQUFNLHFCQUFTLEVBQUVQLE9BQU8sQ0FBQ3RDLFVBQXpCO0FBQUEsc0JBQXNDNkMsTUFBTSxDQUFDQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0QsU0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQVNFO0FBQUssaUJBQVMsRUFBRVIsT0FBTyxDQUFDakMsUUFBeEI7QUFBQSxtQkFDR0MsWUFBWSxDQUFDLFVBQUQsRUFBYSxVQUFiLEVBQXlCZ0MsT0FBekIsQ0FEZixlQUVFO0FBQUssbUJBQVMsRUFBRUEsT0FBTyxZQUF2QjtBQUFBLG9CQUFtQ0ksSUFBSTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGLEVBY0dBLElBQUksQ0FBQ3JCLElBQUwsSUFBYXFCLElBQUksQ0FBQ3JCLElBQUwsQ0FBVTBCLE1BQVYsR0FBbUIsQ0FBaEMsaUJBQ0M7QUFBSyxpQkFBUyxFQUFFVCxPQUFPLENBQUNqQyxRQUF4QjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRWlDLE9BQU8sQ0FBQ2pCLElBQXhCO0FBQUEsb0JBQ0dxQixJQUFJLENBQUNyQixJQUFMLENBQVV1QixHQUFWLENBQWMsVUFBQ3JCLEdBQUQsRUFBMkI7QUFDeEMsZ0NBQU87QUFBSyx1QkFBUyxFQUFFZSxPQUFPLENBQUNmLEdBQXhCO0FBQUEsd0JBQThCQSxHQUFHLENBQUN1QjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0QsV0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkosZUF3QkUsOERBQUMsZ0VBQUQ7QUFBVyxnQkFBUSxFQUFFTixhQUFyQjtBQUFBLGdDQUNFLDhEQUFDLHVFQUFEO0FBQ0Usb0JBQVUsZUFBRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURkO0FBRUUsMkJBQWMsaUJBRmhCO0FBR0UsWUFBRSxFQUFDLGdCQUhMO0FBQUEsaUNBS0UsOERBQUMsa0VBQUQ7QUFBWSxxQkFBUyxFQUFFRixPQUFPLENBQUNYLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFLDhEQUFDLHdFQUFEO0FBQWtCLG1CQUFTLEVBQUVXLE9BQU8sQ0FBQ1AsTUFBckM7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVPLE9BQU8sQ0FBQ2pDLFFBQXhCO0FBQUEsdUJBQ0dDLFlBQVksQ0FBQyxPQUFELEVBQVUsZ0JBQVYsRUFBNEJnQyxPQUE1QixDQURmLGVBRUU7QUFBSyx1QkFBUyxFQUFFQSxPQUFPLENBQUN2QixJQUF4QjtBQUFBLHdCQUErQjJCLElBQUksQ0FBQ007QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRTtBQUFLLHFCQUFTLEVBQUVWLE9BQU8sQ0FBQ2pDLFFBQXhCO0FBQUEsdUJBQ0dDLFlBQVksQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQmdDLE9BQWpCLENBRGYsZUFFRTtBQUFLLHVCQUFTLEVBQUVBLE9BQU8sQ0FBQzFCLElBQXhCO0FBQUEsd0JBQStCOEIsSUFBSSxDQUFDOUI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFXRTtBQUFLLHFCQUFTLEVBQUUwQixPQUFPLENBQUNqQyxRQUF4QjtBQUFBLHVCQUNHQyxZQUFZLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUJnQyxPQUFqQixDQURmLGVBRUU7QUFDRSxrQkFBSSxFQUFFSSxJQUFJLENBQUMxQixJQURiO0FBRUUsdUJBQVMsWUFBS3NCLE9BQU8sQ0FBQ3RCLElBQWIsQ0FGWDtBQUdFLG9CQUFNLEVBQUMsUUFIVDtBQUlFLGlCQUFHLEVBQUMscUJBSk47QUFBQSx3QkFNRzBCLElBQUksQ0FBQzFCO0FBTlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEYsRUF1QkcwQixJQUFJLENBQUNPLEtBQUwsSUFDQ1AsSUFBSSxDQUFDTyxLQUFMLENBQVdGLE1BQVgsR0FBb0IsQ0FEckIsSUFFQ0wsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjakMsSUFGZixJQUdDMEIsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjQyxRQUhmLGlCQUlHO0FBQUsscUJBQVMsRUFBRVosT0FBTyxDQUFDakMsUUFBeEI7QUFBQSx1QkFDR0MsWUFBWSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCZ0MsT0FBakIsQ0FEZixlQUVFO0FBQ0Usa0JBQUksRUFBRUksSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjakMsSUFEdEI7QUFFRSx1QkFBUyxFQUFFc0IsT0FBTyxDQUFDcEIsSUFGckI7QUFHRSxvQkFBTSxFQUFDLFFBSFQ7QUFJRSxpQkFBRyxFQUFDLHFCQUpOO0FBQUEsd0JBTUd3QixJQUFJLENBQUNPLEtBQUwsQ0FBVyxDQUFYLEVBQWNqQztBQU5qQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBVUU7QUFDRSxpQkFBRyxFQUFDLEVBRE47QUFFRSxpQkFBRyxhQUFNMEIsSUFBSSxDQUFDTyxLQUFMLENBQVcsQ0FBWCxFQUFjQyxRQUFwQixTQUZMO0FBR0UsdUJBQVMsRUFBRVosT0FBTyxDQUFDbkI7QUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBM0JOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvRkQsQ0E1RkQ7O0dBQU1jLFM7VUFDY0Usa0QsRUFFRi9DLFM7OztLQUhaNkMsUzs7QUE4Rk4sSUFBTTNCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNPLElBQUQsRUFBZUgsS0FBZixFQUE4QjRCLE9BQTlCLEVBQXdEO0FBQzNFLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVBLE9BQU8sQ0FBQ2hDLFlBQXhCO0FBQUEsOEJBQ0U7QUFBQSwrQkFDRTtBQUFLLGFBQUcsYUFBTU8sSUFBTixTQUFSO0FBQTBCLGFBQUcsRUFBQyxFQUE5QjtBQUFpQyxtQkFBUyxFQUFFeUIsT0FBTyxDQUFDekI7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUssaUJBQVMsRUFBRXlCLE9BQU8sQ0FBQzVCLEtBQXhCO0FBQUEsa0JBQWdDQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FYRDs7QUFhQSwrREFBZXVCLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFwZXJzL1tzbHVnXS4wMzVmYjM2NjQ0ZmNmNzRjMTMzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcbmltcG9ydCB7IERVTU1ZX1BBUEVSIH0gZnJvbSBcIi4uLy4uL2R1bW15XCI7XG5pbXBvcnQgeyBDbGFzc05hbWVNYXAgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCI7XG5pbXBvcnQgQWNjb3JkaW9uU3VtbWFyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeVwiO1xuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHNcIjtcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XG5cbmludGVyZmFjZSBJUHJvcHMge31cbmludGVyZmFjZSBJUGFwZXIge1xuICB0aXRsZTogc3RyaW5nO1xuICBhdXRob3JzOiB7IG5hbWU6IHN0cmluZyB9W107XG4gIGFic3RyYWN0OiBzdHJpbmc7XG4gIHB1Ymxpc2hlZERhdGU6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xuICBtb2RlbD86IHN0cmluZztcbiAgZGF0YXNldHM/OiBzdHJpbmc7XG4gIG1ldGE/OiBzdHJpbmc7XG4gIHRhZ3M/OiB7IG5hbWU6IHN0cmluZyB9W107XG4gIGNvZGVzPzogeyBsYW5ndWFnZTogc3RyaW5nOyBsaW5rOiBzdHJpbmcgfVtdO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBtYXJnaW5Ub3A6IDQwLFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBtYXJnaW46IDQwLFxuICB9LFxuICB0aXRsZToge1xuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogMzYsXG4gIH0sXG4gIGF1dGhvcnM6IHtcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgfSxcbiAgZWFjaEF1dGhvcjoge1xuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgfSxcbiAgfSxcbiAgYWJzdHJhY3Q6IHt9LFxuICBiZWF1dGlmeToge1xuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gIH0sXG5cbiAgc3BlY2lhbExhYmVsOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBib3JkZXJCb3R0b206IFwiNXB4IHNvbGlkIHRlYWxcIixcbiAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gIH0sXG4gIGxhYmVsOiB7XG4gICAgZm9udFNpemU6IDE2LFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxuICBtZXRhOiB7fSxcbiAgaWNvbjoge1xuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgfSxcbiAgZGF0ZToge30sXG4gIGxpbms6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIH0sXG4gIGNvZGU6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIH0sXG4gIGxhbmdJY29uOiB7XG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gIH0sXG4gIHRhZ3M6IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgfSxcbiAgdGFnOiB7XG4gICAgYmFja2dyb3VuZDogXCIjODAwMDAwXCIsXG4gICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXG4gICAgcGFkZGluZzogNCxcbiAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJhY2tncm91bmQ6IFwiIzAwMFwiLFxuICAgIH0sXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgIG1hcmdpblRvcDogMTAsXG4gIH0sXG4gIGhlYWRpbmc6IHtcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDIwKSxcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICB9LFxuICBkZXRhaWw6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICB9LFxufSkpO1xuXG5jb25zdCBQYXBlclBhZ2U6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHM6IElQcm9wcykgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc2x1ZyA9IHF1ZXJ5LnNsdWc7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW29wZW5BY2NvcmRpb24sIHNldEFjY29yZGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZGF0YTogSVBhcGVyID0gRFVNTVlfUEFQRVJbMF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJQYXBlclwiIC8+XG4gICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57ZGF0YS50aXRsZX08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aG9yc30+XG4gICAgICAgICAge2RhdGEuYXV0aG9ycy5tYXAoKGF1dGhvcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5lYWNoQXV0aG9yfT57YXV0aG9yLm5hbWV9PC9zcGFuPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiYWJzdHJhY3RcIiwgXCJBQlNUUkFDVFwiLCBjbGFzc2VzKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hYnN0cmFjdH0+e2RhdGEuYWJzdHJhY3R9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtkYXRhLnRhZ3MgJiYgZGF0YS50YWdzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ3N9PlxuICAgICAgICAgICAgICB7ZGF0YS50YWdzLm1hcCgodGFnOiB7IG5hbWU6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ30+e3RhZy5uYW1lfTwvZGl2PjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8QWNjb3JkaW9uIGV4cGFuZGVkPXtvcGVuQWNjb3JkaW9ufT5cbiAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxuICAgICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fVxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInBhbmVsMWEtY29udGVudFwiXG4gICAgICAgICAgICBpZD1cInBhbmVsMWEtaGVhZGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGluZ30+RGV0YWlsczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgPEFjY29yZGlvbkRldGFpbHMgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJjbG9ja1wiLCBcIlBVQkxJU0hFRCBEQVRFXCIsIGNsYXNzZXMpfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXRlfT57ZGF0YS5wdWJsaXNoZWREYXRlfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICAgICAge3NwZWNpYWxMYWJlbChcImluZm9cIiwgXCJNRVRBXCIsIGNsYXNzZXMpfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXRhfT57ZGF0YS5tZXRhfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICAgICAge3NwZWNpYWxMYWJlbChcImxpbmtcIiwgXCJMSU5LXCIsIGNsYXNzZXMpfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2RhdGEubGlua31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMubGlua31gfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF0YS5saW5rfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2RhdGEuY29kZXMgJiZcbiAgICAgICAgICAgICAgZGF0YS5jb2Rlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgIGRhdGEuY29kZXNbMF0ubGluayAmJlxuICAgICAgICAgICAgICBkYXRhLmNvZGVzWzBdLmxhbmd1YWdlICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiY29kZVwiLCBcIkNPREVcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtkYXRhLmNvZGVzWzBdLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb2RlfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2RhdGEuY29kZXNbMF0ubGlua31cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgLyR7ZGF0YS5jb2Rlc1swXS5sYW5ndWFnZX0uc3ZnYH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhbmdJY29ufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgPC9QYXBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHNwZWNpYWxMYWJlbCA9IChpY29uOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIGNsYXNzZXM6IENsYXNzTmFtZU1hcCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zcGVjaWFsTGFiZWx9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXtgLyR7aWNvbn0uc3ZnYH0gYWx0PVwiXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbH0+e2xhYmVsfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXBlclBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9