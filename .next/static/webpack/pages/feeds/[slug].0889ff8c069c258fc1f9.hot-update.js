self["webpackHotUpdate_N_E"]("pages/feeds/[slug]",{

/***/ "./components/Feed.tsx":
/*!*****************************!*\
  !*** ./components/Feed.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_bhairaja_mloverflow_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _home_bhairaja_mloverflow_next_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_bhairaja_mloverflow_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Share */ "./node_modules/@material-ui/icons/Share.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "./components/Menu.tsx");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "/home/bhairaja/mloverflow-next/components/Feed.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_bhairaja_mloverflow_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(function (theme) {
  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.createStyles)({
    root: {
      height: "100%",
      "&:hover": _objectSpread({}, theme.styles.onHover)
    },
    avatar: {
      height: "100%",
      width: "100%"
    },
    tagContainer: {
      marginBottom: 10,
      display: "flex",
      flexWrap: "wrap",
      borderBottom: "1px solid #bfbfbf",
      padding: 2
    },
    tag: {
      marginLeft: 10,
      background: "#800000",
      width: "fit-content",
      marginBottom: 2,
      color: "white",
      padding: 4,
      lineHeight: "100%",
      display: "flex",
      alignItems: "center",
      borderRadius: 4,
      "&:hover": {
        background: "#000",
        color: "#fff"
      }
    },
    vote: {
      height: 24,
      width: 24
    },
    media: {
      height: 0,
      paddingTop: "56.25%"
    }
  });
});

var Feeds = function Feeds(props) {
  _s();

  var classes = useStyles();
  var time = props.time,
      userImage = props.userImage,
      username = props.username,
      tags = props.tags,
      isOwner = props.isOwner,
      text = props.text,
      id = props.id;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(null),
      _React$useState2 = (0,_home_bhairaja_mloverflow_next_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var editFeed = function editFeed() {
    closeAnchor();
  };

  var bookmark = function bookmark() {
    closeAnchor();
  };

  var menuOptions = [].concat((0,_home_bhairaja_mloverflow_next_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(isOwner ? [{
    name: "Edit",
    onClick: editFeed,
    icon: "edit.svg"
  }] : []), [{
    name: "Bookmark",
    onClick: bookmark,
    icon: "bookmark.svg"
  }]);

  var renderTags = function renderTags(myTags) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.tagContainer,
      children: myTags.map(function (tag) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.tag,
          children: tag.name
        }, tag.name, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this);
  };

  var setAnchor = function setAnchor(event) {
    setAnchorEl(event.currentTarget);
  };

  var closeAnchor = function closeAnchor() {
    setAnchorEl(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_8__.default, {
      avatar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_9__.default, {
        "aria-label": "recipe",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: userImage ? userImage : "/avatar.svg",
          alt: "",
          className: classes.avatar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }, _this),
      action: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default, {
          "aria-label": "settings",
          onClick: setAnchor,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_5__.default, {
          options: menuOptions,
          anchor: anchorEl,
          closeAnchor: closeAnchor
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, _this)]
      }, void 0, true),
      title: username,
      subheader: time
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this), tags && tags.length > 0 && renderTags(tags), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_12__.default, {
      className: classes.media,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/LARGE_elevation.jpg/1200px-LARGE_elevation.jpg",
      title: "feed"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_13__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__.default, {
        variant: "body2",
        color: "textSecondary",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          dangerouslySetInnerHTML: {
            __html: text
          },
          className: "renderHTML"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__.default, {
      disableSpacing: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default, {
        "aria-label": "add to favorites",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/up.svg",
          alt: "asd",
          className: classes.vote
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default, {
        "aria-label": "share",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_16__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__.default, {
        "aria-label": "bookmark",
        onClick: bookmark,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/bookmark.svg",
          alt: "",
          className: classes.vote
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 5
  }, _this);
};

_s(Feeds, "vXA32r6EXukv831dcFOknrOnVCE=", false, function () {
  return [useStyles];
});

_c = Feeds;
/* harmony default export */ __webpack_exports__["default"] = (Feeds);

var _c;

$RefreshReg$(_c, "Feeds");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWVkLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiaGVpZ2h0Iiwic3R5bGVzIiwib25Ib3ZlciIsImF2YXRhciIsIndpZHRoIiwidGFnQ29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYm9yZGVyQm90dG9tIiwicGFkZGluZyIsInRhZyIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiYWxpZ25JdGVtcyIsImJvcmRlclJhZGl1cyIsInZvdGUiLCJtZWRpYSIsInBhZGRpbmdUb3AiLCJGZWVkcyIsInByb3BzIiwiY2xhc3NlcyIsInRpbWUiLCJ1c2VySW1hZ2UiLCJ1c2VybmFtZSIsInRhZ3MiLCJpc093bmVyIiwidGV4dCIsImlkIiwiUmVhY3QiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiZWRpdEZlZWQiLCJjbG9zZUFuY2hvciIsImJvb2ttYXJrIiwibWVudU9wdGlvbnMiLCJuYW1lIiwib25DbGljayIsImljb24iLCJyZW5kZXJUYWdzIiwibXlUYWdzIiwibWFwIiwic2V0QW5jaG9yIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibGVuZ3RoIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsWUFBTSxFQUFFLE1BREo7QUFFSixtQ0FDS0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLE9BRGxCO0FB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QXVERCxDQTlGRDs7R0FBTUcsSztVQUNZMUIsUzs7O0tBRFowQixLO0FBZ0dOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZlZWRzL1tzbHVnXS4wODg5ZmY4YzA2OWMyNThmYzFmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEhlYWRlclwiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBTaGFyZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9TaGFyZVwiO1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWFcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRmVlZCB7XG4gIHRpbWU6IHN0cmluZztcbiAgdXNlckltYWdlOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHRhZ3M6IHsgbmFtZTogc3RyaW5nIH1bXTtcbiAgaXNPd25lcjogYm9vbGVhbjtcbiAgdGV4dDogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIC4uLnRoZW1lLnN0eWxlcy5vbkhvdmVyLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGF2YXRhcjoge1xuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9LFxuICAgIHRhZ0NvbnRhaW5lcjoge1xuICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCAjYmZiZmJmXCIsXG4gICAgICBwYWRkaW5nOiAyLFxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICAgIGJhY2tncm91bmQ6IFwiIzgwMDAwMFwiLFxuICAgICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICAgIG1hcmdpbkJvdHRvbTogMixcbiAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICBwYWRkaW5nOiA0LFxuICAgICAgbGluZUhlaWdodDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMDBcIixcbiAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHZvdGU6IHtcbiAgICAgIGhlaWdodDogMjQsXG4gICAgICB3aWR0aDogMjQsXG4gICAgfSxcbiAgICBtZWRpYToge1xuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgcGFkZGluZ1RvcDogXCI1Ni4yNSVcIixcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgRmVlZHM6IFJlYWN0LkZDPElGZWVkPiA9IChwcm9wczogSUZlZWQpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHRpbWUsIHVzZXJJbWFnZSwgdXNlcm5hbWUsIHRhZ3MsIGlzT3duZXIsIHRleHQsIGlkIH0gPSBwcm9wcztcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGVkaXRGZWVkID0gKCkgPT4ge1xuICAgIGNsb3NlQW5jaG9yKCk7XG4gIH07XG4gIGNvbnN0IGJvb2ttYXJrID0gKCkgPT4ge1xuICAgIGNsb3NlQW5jaG9yKCk7XG4gIH07XG5cbiAgY29uc3QgbWVudU9wdGlvbnMgPSBbXG4gICAgLi4uKGlzT3duZXIgPyBbeyBuYW1lOiBcIkVkaXRcIiwgb25DbGljazogZWRpdEZlZWQsIGljb246IFwiZWRpdC5zdmdcIiB9XSA6IFtdKSxcbiAgICB7IG5hbWU6IFwiQm9va21hcmtcIiwgb25DbGljazogYm9va21hcmssIGljb246IFwiYm9va21hcmsuc3ZnXCIgfSxcbiAgXTtcblxuICBjb25zdCByZW5kZXJUYWdzID0gKG15VGFnczogeyBuYW1lOiBzdHJpbmcgfVtdKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ0NvbnRhaW5lcn0+XG4gICAgICAgIHtteVRhZ3MubWFwKCh0YWcpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3RhZy5uYW1lfSBjbGFzc05hbWU9e2NsYXNzZXMudGFnfT5cbiAgICAgICAgICAgICAge3RhZy5uYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHNldEFuY2hvciA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBjbG9zZUFuY2hvciA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgPEF2YXRhciBhcmlhLWxhYmVsPVwicmVjaXBlXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17dXNlckltYWdlID8gdXNlckltYWdlIDogXCIvYXZhdGFyLnN2Z1wifVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgfVxuICAgICAgICBhY3Rpb249e1xuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2V0dGluZ3NcIiBvbkNsaWNrPXtzZXRBbmNob3J9PlxuICAgICAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICBvcHRpb25zPXttZW51T3B0aW9uc31cbiAgICAgICAgICAgICAgYW5jaG9yPXthbmNob3JFbH1cbiAgICAgICAgICAgICAgY2xvc2VBbmNob3I9e2Nsb3NlQW5jaG9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgICB0aXRsZT17dXNlcm5hbWV9XG4gICAgICAgIHN1YmhlYWRlcj17dGltZX1cbiAgICAgIC8+XG4gICAgICB7dGFncyAmJiB0YWdzLmxlbmd0aCA+IDAgJiYgcmVuZGVyVGFncyh0YWdzKX1cbiAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICBpbWFnZT1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMy8zZC9MQVJHRV9lbGV2YXRpb24uanBnLzEyMDBweC1MQVJHRV9lbGV2YXRpb24uanBnXCJcbiAgICAgICAgdGl0bGU9XCJmZWVkXCJcbiAgICAgIC8+XG4gICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGV4dCB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVuZGVySFRNTFwiXG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPENhcmRBY3Rpb25zIGRpc2FibGVTcGFjaW5nPlxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiYWRkIHRvIGZhdm9yaXRlc1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3VwLnN2Z1wiIGFsdD1cImFzZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy52b3RlfSAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzaGFyZVwiPlxuICAgICAgICAgIDxTaGFyZUljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuXG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJib29rbWFya1wiIG9uQ2xpY2s9e2Jvb2ttYXJrfT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9ib29rbWFyay5zdmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9e2NsYXNzZXMudm90ZX0gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWVkcztcbiJdLCJzb3VyY2VSb290IjoiIn0=