self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FeedList.tsx":
/*!*********************************!*\
  !*** ./components/FeedList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FeedList; }
/* harmony export */ });
/* harmony import */ var _home_bhairaja_mloverflow_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Feed */ "./components/Feed.tsx");
/* harmony import */ var _dummy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dummy */ "./dummy/index.ts");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "/home/bhairaja/mloverflow-next/components/FeedList.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_bhairaja_mloverflow_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(function (theme) {
  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.createStyles)({
    main: {},
    root: {
      backgroundColor: theme.palette.background.paper
    },
    feed: {
      margin: 10
    },
    mainLabel: {
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: 40,
      textAlign: "center",
      "&:hover": {
        cursor: "pointer"
      },
      width: "fit-content"
    },
    moreButton: {
      width: "fit-content",
      marginLeft: "auto",
      marginRight: "auto"
    },
    seeMore: {
      fontSize: 16
    }
  });
});
function FeedList(_ref) {
  _s();

  var _this = this;

  var originalFeed = _ref.originalFeed;
  var classes = useStyles();
  var items = _dummy__WEBPACK_IMPORTED_MODULE_4__.DUMMY_FEED;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: classes.main,
    children: [!originalFeed && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: "/feeds",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
        className: classes.mainLabel,
        children: "Feeds"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
      container: true,
      className: classes.root,
      children: items.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xs: 12,
          sm: 12,
          md: 6,
          lg: 6,
          xl: 4,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__.default, {
            className: classes.feed,
            children: [/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Feed__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, item), {}, {
              key: item.id,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }
            })), ";"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, _this)
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), !originalFeed && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
      href: "/feeds",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: classes.moreButton,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Button, {
          color: "secondary",
          className: classes.seeMore,
          children: "SEE MORE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_s(FeedList, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = FeedList;

var _c;

$RefreshReg$(_c, "FeedList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWVkTGlzdC50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwibWFpbiIsInJvb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiZmVlZCIsIm1hcmdpbiIsIm1haW5MYWJlbCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiY3Vyc29yIiwid2lkdGgiLCJtb3JlQnV0dG9uIiwic2VlTW9yZSIsIkZlZWRMaXN0Iiwib3JpZ2luYWxGZWVkIiwiY2xhc3NlcyIsIml0ZW1zIiwiRFVNTVlfRkVFRCIsIm1hcCIsIml0ZW0iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUUsRUFESztBQUVYQyxRQUFJLEVBQUU7QUFDSkMscUJBQWUsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBRHRDLEtBRks7QUFLWEMsUUFBSSxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBTEs7QUFPWEMsYUFBUyxFQUFFO0FBQ1RDLGdCQUFVLEVBQUUsTUFESDtBQUVUQyxpQkFBVyxFQUFFLE1BRko7QUFHVEMsY0FBUSxFQUFFLEVBSEQ7QUFJVEMsZUFBUyxFQUFFLFFBSkY7QUFLVCxpQkFBVztBQUNUQyxjQUFNLEVBQUU7QUFEQyxPQUxGO0FBUVRDLFdBQUssRUFBRTtBQVJFLEtBUEE7QUFpQlhDLGNBQVUsRUFBRTtBQUNWRCxXQUFLLEVBQUUsYUFERztBQUVWTCxnQkFBVSxFQUFFLE1BRkY7QUFHVkMsaUJBQVcsRUFBRTtBQUhILEtBakJEO0FBc0JYTSxXQUFPLEVBQUU7QUFDUEwsY0FBUSxFQUFFO0FBREg7QUF0QkUsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQTZCZSxTQUFTTSxRQUFULE9BQStDO0FBQUE7O0FBQUE7O0FBQUEsTUFBM0JDLFlBQTJCLFFBQTNCQSxZQUEyQjtBQUM1RCxNQUFNQyxPQUFPLEdBQUd2QixTQUFTLEVBQXpCO0FBRUEsTUFBTXdCLEtBQUssR0FBR0MsOENBQWQ7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUYsT0FBTyxDQUFDbkIsSUFBeEI7QUFBQSxlQUNHLENBQUNrQixZQUFELGlCQUNDLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLFFBQVg7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUVDLE9BQU8sQ0FBQ1gsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFNRSw4REFBQywyREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixlQUFTLEVBQUVXLE9BQU8sQ0FBQ2xCLElBQW5DO0FBQUEsZ0JBQ0dtQixLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQWlCO0FBQzFCLDRCQUNFLDhEQUFDLDJEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLEVBQWY7QUFBbUIsWUFBRSxFQUFFLEVBQXZCO0FBQTJCLFlBQUUsRUFBRSxDQUEvQjtBQUFrQyxZQUFFLEVBQUUsQ0FBdEM7QUFBeUMsWUFBRSxFQUFFLENBQTdDO0FBQUEsaUNBQ0UsOERBQUMsZ0VBQUQ7QUFBVyxxQkFBUyxFQUFFSixPQUFPLENBQUNiLElBQTlCO0FBQUEsb0NBQ0UscURBQUMsMENBQUQsa0NBQVVpQixJQUFWO0FBQWdCLGlCQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQXFERCxJQUFJLENBQUNDLEVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFPRCxPQVJBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLEVBa0JHLENBQUNOLFlBQUQsaUJBQ0MsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsUUFBWDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUMsT0FBTyxDQUFDSixVQUF4QjtBQUFBLCtCQUNFLDhEQUFDLHFEQUFEO0FBQVEsZUFBSyxFQUFDLFdBQWQ7QUFBMEIsbUJBQVMsRUFBRUksT0FBTyxDQUFDSCxPQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEOztHQW5DdUJDLFE7VUFDTnJCLFM7OztLQURNcUIsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNjZmNzI4MjljMGUxNjIwNjJiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBGZWVkLCB7IElGZWVkIH0gZnJvbSBcIi4vRmVlZFwiO1xuaW1wb3J0IHsgRFVNTVlfRkVFRCB9IGZyb20gXCIuLi9kdW1teVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XG5cbnR5cGUgRmVlZFByb3BzID0ge1xuICBvcmlnaW5hbEZlZWQ/OiBCb29sZWFuO1xufTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIG1haW46IHt9LFxuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIH0sXG4gICAgZmVlZDogeyBtYXJnaW46IDEwIH0sXG5cbiAgICBtYWluTGFiZWw6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIH0sXG4gICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgIH0sXG4gICAgbW9yZUJ1dHRvbjoge1xuICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICAgIH0sXG4gICAgc2VlTW9yZToge1xuICAgICAgZm9udFNpemU6IDE2LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWVkTGlzdCh7IG9yaWdpbmFsRmVlZCB9OiBGZWVkUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGl0ZW1zID0gRFVNTVlfRkVFRDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm1haW59PlxuICAgICAgeyFvcmlnaW5hbEZlZWQgJiYgKFxuICAgICAgICA8TGluayBocmVmPVwiL2ZlZWRzXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWluTGFiZWx9PkZlZWRzPC9oMT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKX1cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW06IElGZWVkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fSBsZz17Nn0geGw9ezR9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZlZWR9PlxuICAgICAgICAgICAgICAgIDxGZWVkIHsuLi5pdGVtfSBrZXk9e2l0ZW0uaWR9IC8+O1xuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvR3JpZD5cblxuICAgICAgeyFvcmlnaW5hbEZlZWQgJiYgKFxuICAgICAgICA8TGluayBocmVmPVwiL2ZlZWRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubW9yZUJ1dHRvbn0+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNlZU1vcmV9PlxuICAgICAgICAgICAgICBTRUUgTU9SRVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9