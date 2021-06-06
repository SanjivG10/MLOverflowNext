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
      disabled = _ref.disabled;
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Editor, {
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
    lineNumber: 101,
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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
} // function dynamic<P = {}, O extends DynamicOptions>(options: O):


function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);

  if (typeof dynamicOptions === 'object' && !(dynamicOptions instanceof Promise)) {
    // show deprecation warning for `modules` key in development
    if (true) {
      if (dynamicOptions.modules) {
        console.warn('The modules option for next/dynamic has been deprecated. See here for more info https://nextjs.org/docs/messages/next-dynamic-modules');
      }
    } // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.render) {
      loadableOptions.render = function (loaded, props) {
        return dynamicOptions.render(props, loaded);
      };
    } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


    if (dynamicOptions.modules) {
      loadableFn = _loadable["default"].Map;
      var loadModules = {};
      var modules = dynamicOptions.modules();
      Object.keys(modules).forEach(function (key) {
        var value = modules[key];

        if (typeof value.then === 'function') {
          loadModules[key] = function () {
            return value.then(function (mod) {
              return mod["default"] || mod;
            });
          };

          return;
        }

        loadModules[key] = value;
      });
      loadableOptions.loader = loadModules;
    }
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = /*#__PURE__*/_react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js


var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      })["catch"](function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  })["catch"](function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function render(loaded, props) {
  return /*#__PURE__*/_react["default"].createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription.useSubscription)(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return /*#__PURE__*/_react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return opts.render(state.loaded, props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "Bp87+qHhaUk8bOFGKxqLWPW1xR0=", true);

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return /*#__PURE__*/_react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      })["catch"](function (_err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

_c = Loadable;

function LoadableMap(opts) {
  if (typeof opts.render !== 'function') {
    throw new Error('LoadableMap requires a `render(loaded, props)` function');
  }

  return createLoadableComponent(loadMap, opts);
}

_c2 = LoadableMap;
Loadable.Map = LoadableMap;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolveInitializers, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolvePreload) {
    var res = function res() {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports.default = _default;

var _c, _c2;

$RefreshReg$(_c, "Loadable");
$RefreshReg$(_c2, "LoadableMap");

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


/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9UZXh0RWRpdG9yL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9keW5hbWljLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9sb2FkYWJsZS1jb250ZXh0LnRzIiwid2VicGFjazovL19OX0UvLi4vbmV4dC1zZXJ2ZXIvbGliL2xvYWRhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLXN1YnNjcmlwdGlvbi9janMvdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vaW5kZXguanMiXSwibmFtZXMiOlsiRWRpdG9yIiwiZHluYW1pYyIsInRoZW4iLCJtb2QiLCJzc3IiLCJUZXh0RWRpdG9yIiwiZWRpdG9yU3RhdGUiLCJwbGFjZWhvbGRlciIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJ1cGxvYWRDYWxsYmFjayIsImRpc2FibGVkIiwidG9vbGJhckNvbmZpZyIsIm9wdGlvbnMiLCJpbmxpbmUiLCJpbkRyb3Bkb3duIiwiYmxvY2tUeXBlIiwibGlzdCIsInRleHRBbGlnbiIsImNvbG9yUGlja2VyIiwiY29sb3JzIiwibGluayIsInNob3dPcGVuT3B0aW9uT25Ib3ZlciIsImRlZmF1bHRUYXJnZXRPcHRpb24iLCJlbW9qaSIsImVtb2ppcyIsImltYWdlIiwidXBsb2FkRW5hYmxlZCIsImFsaWdubWVudEVuYWJsZWQiLCJwcmV2aWV3SW1hZ2UiLCJpbnB1dEFjY2VwdCIsImFsdCIsInByZXNlbnQiLCJtYW5kYXRvcnkiLCJkZWZhdWx0U2l6ZSIsImhlaWdodCIsIndpZHRoIiwiaGlzdG9yeSIsImlzU2VydmVyU2lkZSIsImxvYWRhYmxlT3B0aW9ucyIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJMb2FkaW5nIiwibG9hZGFibGVGbiIsIkxvYWRhYmxlIiwibG9hZGluZyIsImVycm9yIiwiZHluYW1pY09wdGlvbnMiLCJjb25zb2xlIiwibG9hZE1vZHVsZXMiLCJtb2R1bGVzIiwiT2JqZWN0Iiwia2V5IiwidmFsdWUiLCJub1NTUiIsIkxvYWRhYmxlQ29udGV4dCIsIlJlYWN0IiwiQUxMX0lOSVRJQUxJWkVSUyIsIlJFQURZX0lOSVRJQUxJWkVSUyIsImluaXRpYWxpemVkIiwicHJvbWlzZSIsImxvYWRlciIsInN0YXRlIiwibG9hZGVkIiwiZXJyIiwicHJvbWlzZXMiLCJyZXN1bHQiLCJsb2FkIiwib2JqIiwicmVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJvcHRzIiwiZGVsYXkiLCJ0aW1lb3V0IiwicmVuZGVyIiwid2VicGFjayIsInN1YnNjcmlwdGlvbiIsInN1YiIsImdldEN1cnJlbnRWYWx1ZSIsInN1YnNjcmliZSIsInJldHJ5IiwibW9kdWxlSWRzIiwiaWRzIiwiaW5pdCIsIkxvYWRhYmxlQ29tcG9uZW50IiwiY29udGV4dCIsIkFycmF5IiwibW9kdWxlTmFtZSIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiTG9hZGFibGVTdWJzY3JpcHRpb24iLCJjb25zdHJ1Y3RvciIsIl9yZXMiLCJfb3B0cyIsInNldFRpbWVvdXQiLCJfZXJyIiwiX3VwZGF0ZSIsImNhbGxiYWNrIiwiX2NsZWFyVGltZW91dHMiLCJjbGVhclRpbWVvdXQiLCJjcmVhdGVMb2FkYWJsZUNvbXBvbmVudCIsImluaXRpYWxpemVycyIsImZsdXNoSW5pdGlhbGl6ZXJzIiwicmVzb2x2ZVByZWxvYWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsbURBQU8sTUFDcEI7QUFBQSxTQUFNLHFRQUE4QkMsSUFBOUIsQ0FBbUMsVUFBQ0MsR0FBRDtBQUFBLFdB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUEsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0NBQWdDOztBQUVuQztBQUNBOztBQUVBLHVCQUF1QjtBQUN2QixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQzFIYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxFQUFFLHdKQUFpRTtBQUNuRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMTU5NDJkMWRjYjY5OGI5MGI2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuY29uc3QgRWRpdG9yID0gZHluYW1pYyhcbiAgKCkgPT4gaW1wb3J0KFwicmVhY3QtZHJhZnQtd3lzaXd5Z1wiKS50aGVuKChtb2QpID0+IG1vZC5FZGl0b3IpLFxuICB7IHNzcjogZmFsc2UgfVxuKTtcbmltcG9ydCB7IGNvbG9ycywgZW1vamlzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBFZGl0b3JTdGF0ZSB9IGZyb20gXCJyZWFjdC1kcmFmdC13eXNpd3lnXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBlZGl0b3JTdGF0ZTogRWRpdG9yU3RhdGU7XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIG9uRWRpdG9yU3RhdGVDaGFuZ2U6IChuZXdFZGl0b3JTdGF0ZTogYW55KSA9PiB2b2lkO1xuICB1cGxvYWRDYWxsYmFjazogKGZpbGU6IEZpbGUpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRFZGl0b3Ioe1xuICBlZGl0b3JTdGF0ZSxcbiAgcGxhY2Vob2xkZXIsXG4gIG9uRWRpdG9yU3RhdGVDaGFuZ2UsXG4gIHVwbG9hZENhbGxiYWNrLFxuICBkaXNhYmxlZCxcbn06IElQcm9wcykge1xuICBjb25zdCB0b29sYmFyQ29uZmlnID0ge1xuICAgIG9wdGlvbnM6IFtcbiAgICAgIFwibGlua1wiLFxuICAgICAgXCJsaXN0XCIsXG4gICAgICBcInRleHRBbGlnblwiLFxuICAgICAgXCJpbmxpbmVcIixcbiAgICAgIFwiY29sb3JQaWNrZXJcIixcbiAgICAgIFwiZW1vamlcIixcbiAgICAgIFwiaW1hZ2VcIixcbiAgICAgIFwicmVtb3ZlXCIsXG4gICAgICBcImhpc3RvcnlcIixcbiAgICBdLFxuICAgIGlubGluZToge1xuICAgICAgaW5Ecm9wZG93bjogZmFsc2UsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiYm9sZFwiLFxuICAgICAgICBcIml0YWxpY1wiLFxuICAgICAgICBcInVuZGVybGluZVwiLFxuICAgICAgICBcInN0cmlrZXRocm91Z2hcIixcbiAgICAgICAgXCJtb25vc3BhY2VcIixcbiAgICAgICAgXCJzdXBlcnNjcmlwdFwiLFxuICAgICAgICBcInN1YnNjcmlwdFwiLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGJsb2NrVHlwZToge1xuICAgICAgaW5Ecm9wZG93bjogdHJ1ZSxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgXCJOb3JtYWxcIixcbiAgICAgICAgXCJIMVwiLFxuICAgICAgICBcIkgyXCIsXG4gICAgICAgIFwiSDNcIixcbiAgICAgICAgXCJINFwiLFxuICAgICAgICBcIkg1XCIsXG4gICAgICAgIFwiSDZcIixcbiAgICAgICAgXCJCbG9ja3F1b3RlXCIsXG4gICAgICAgIFwiQ29kZVwiLFxuICAgICAgXSxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIGluRHJvcGRvd246IGZhbHNlLFxuICAgIH0sXG4gICAgdGV4dEFsaWduOiB7XG4gICAgICBpbkRyb3Bkb3duOiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IFtcImxlZnRcIiwgXCJjZW50ZXJcIiwgXCJyaWdodFwiLCBcImp1c3RpZnlcIl0sXG4gICAgfSxcbiAgICBjb2xvclBpY2tlcjoge1xuICAgICAgY29sb3JzOiBjb2xvcnMsXG4gICAgfSxcbiAgICBsaW5rOiB7XG4gICAgICBpbkRyb3Bkb3duOiBmYWxzZSxcbiAgICAgIHNob3dPcGVuT3B0aW9uT25Ib3ZlcjogdHJ1ZSxcbiAgICAgIGRlZmF1bHRUYXJnZXRPcHRpb246IFwiX3NlbGZcIixcbiAgICAgIG9wdGlvbnM6IFtcImxpbmtcIiwgXCJ1bmxpbmtcIl0sXG4gICAgfSxcbiAgICBlbW9qaToge1xuICAgICAgZW1vamlzOiBlbW9qaXMsXG4gICAgfSxcbiAgICBpbWFnZToge1xuICAgICAgdXBsb2FkQ2FsbGJhY2ssXG4gICAgICB1cGxvYWRFbmFibGVkOiB0cnVlLFxuICAgICAgYWxpZ25tZW50RW5hYmxlZDogdHJ1ZSxcbiAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcbiAgICAgIGlucHV0QWNjZXB0OiBcImltYWdlL2dpZixpbWFnZS9qcGVnLGltYWdlL2pwZ1wiLFxuICAgICAgYWx0OiB7IHByZXNlbnQ6IGZhbHNlLCBtYW5kYXRvcnk6IGZhbHNlIH0sXG4gICAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGhpc3Rvcnk6IHtcbiAgICAgIGluRHJvcGRvd246IGZhbHNlLFxuICAgICAgb3B0aW9uczogW1widW5kb1wiLCBcInJlZG9cIl0sXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxFZGl0b3JcbiAgICAgIHRvb2xiYXI9e3Rvb2xiYXJDb25maWd9XG4gICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICBlZGl0b3JDbGFzc05hbWU9XCJmZWVkRm9ybVJlYWN0XCJcbiAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJ3cmFwcGVyRm9ybVJlYWN0XCJcbiAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9e29uRWRpdG9yU3RhdGVDaGFuZ2V9XG4gICAgICBzdHJpcFBhc3RlZFN0eWxlcz17dHJ1ZX1cbiAgICAgIHJlYWRPbmx5PXtkaXNhYmxlZH1cbiAgICAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExvYWRhYmxlIGZyb20gJy4vbG9hZGFibGUnXG5cbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCB0eXBlIExvYWRlckNvbXBvbmVudDxQID0ge30+ID0gUHJvbWlzZTxcbiAgUmVhY3QuQ29tcG9uZW50VHlwZTxQPiB8IHsgZGVmYXVsdDogUmVhY3QuQ29tcG9uZW50VHlwZTxQPiB9XG4+XG5cbmV4cG9ydCB0eXBlIExvYWRlcjxQID0ge30+ID0gKCgpID0+IExvYWRlckNvbXBvbmVudDxQPikgfCBMb2FkZXJDb21wb25lbnQ8UD5cblxuZXhwb3J0IHR5cGUgTG9hZGVyTWFwID0geyBbbWR1bGU6IHN0cmluZ106ICgpID0+IExvYWRlcjxhbnk+IH1cblxuZXhwb3J0IHR5cGUgTG9hZGFibGVHZW5lcmF0ZWRPcHRpb25zID0ge1xuICB3ZWJwYWNrPygpOiBhbnlcbiAgbW9kdWxlcz8oKTogTG9hZGVyTWFwXG59XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlQmFzZU9wdGlvbnM8UCA9IHt9PiA9IExvYWRhYmxlR2VuZXJhdGVkT3B0aW9ucyAmIHtcbiAgbG9hZGluZz86ICh7XG4gICAgZXJyb3IsXG4gICAgaXNMb2FkaW5nLFxuICAgIHBhc3REZWxheSxcbiAgfToge1xuICAgIGVycm9yPzogRXJyb3IgfCBudWxsXG4gICAgaXNMb2FkaW5nPzogYm9vbGVhblxuICAgIHBhc3REZWxheT86IGJvb2xlYW5cbiAgICByZXRyeT86ICgpID0+IHZvaWRcbiAgICB0aW1lZE91dD86IGJvb2xlYW5cbiAgfSkgPT4gSlNYLkVsZW1lbnQgfCBudWxsXG4gIGxvYWRlcj86IExvYWRlcjxQPiB8IExvYWRlck1hcFxuICBsb2FkYWJsZUdlbmVyYXRlZD86IExvYWRhYmxlR2VuZXJhdGVkT3B0aW9uc1xuICBzc3I/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIExvYWRhYmxlT3B0aW9uczxQID0ge30+ID0gTG9hZGFibGVCYXNlT3B0aW9uczxQPiAmIHtcbiAgcmVuZGVyPyhsb2FkZXI6IGFueSwgcHJvcHM6IGFueSk6IEpTWC5FbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIER5bmFtaWNPcHRpb25zPFAgPSB7fT4gPSBMb2FkYWJsZUJhc2VPcHRpb25zPFA+ICYge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdGhlIG1vZHVsZXMgb3B0aW9uIGhhcyBiZWVuIHBsYW5uZWQgZm9yIHJlbW92YWxcbiAgICovXG4gIHJlbmRlcj8ocHJvcHM6IFAsIGxvYWRlZDogYW55KTogSlNYLkVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgTG9hZGFibGVGbjxQID0ge30+ID0gKFxuICBvcHRzOiBMb2FkYWJsZU9wdGlvbnM8UD5cbikgPT4gUmVhY3QuQ29tcG9uZW50VHlwZTxQPlxuXG5leHBvcnQgdHlwZSBMb2FkYWJsZUNvbXBvbmVudDxQID0ge30+ID0gUmVhY3QuQ29tcG9uZW50VHlwZTxQPlxuXG5leHBvcnQgZnVuY3Rpb24gbm9TU1I8UCA9IHt9PihcbiAgTG9hZGFibGVJbml0aWFsaXplcjogTG9hZGFibGVGbjxQPixcbiAgbG9hZGFibGVPcHRpb25zOiBMb2FkYWJsZU9wdGlvbnM8UD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8UD4ge1xuICAvLyBSZW1vdmluZyB3ZWJwYWNrIGFuZCBtb2R1bGVzIG1lYW5zIHJlYWN0LWxvYWRhYmxlIHdvbid0IHRyeSBwcmVsb2FkaW5nXG4gIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFja1xuICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXNcblxuICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IHJlYWN0LWxvYWRhYmxlIGZyb20gaW5pdGlhbGl6aW5nIG9uIHRoZSBzZXJ2ZXJcbiAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICByZXR1cm4gTG9hZGFibGVJbml0aWFsaXplcihsb2FkYWJsZU9wdGlvbnMpXG4gIH1cblxuICBjb25zdCBMb2FkaW5nID0gbG9hZGFibGVPcHRpb25zLmxvYWRpbmchXG4gIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICByZXR1cm4gKCkgPT4gKFxuICAgIDxMb2FkaW5nIGVycm9yPXtudWxsfSBpc0xvYWRpbmcgcGFzdERlbGF5PXtmYWxzZX0gdGltZWRPdXQ9e2ZhbHNlfSAvPlxuICApXG59XG5cbi8vIGZ1bmN0aW9uIGR5bmFtaWM8UCA9IHt9LCBPIGV4dGVuZHMgRHluYW1pY09wdGlvbnM+KG9wdGlvbnM6IE8pOlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljPFAgPSB7fT4oXG4gIGR5bmFtaWNPcHRpb25zOiBEeW5hbWljT3B0aW9uczxQPiB8IExvYWRlcjxQPixcbiAgb3B0aW9ucz86IER5bmFtaWNPcHRpb25zPFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPFA+IHtcbiAgbGV0IGxvYWRhYmxlRm46IExvYWRhYmxlRm48UD4gPSBMb2FkYWJsZVxuICBsZXQgbG9hZGFibGVPcHRpb25zOiBMb2FkYWJsZU9wdGlvbnM8UD4gPSB7XG4gICAgLy8gQSBsb2FkaW5nIGNvbXBvbmVudCBpcyBub3QgcmVxdWlyZWQsIHNvIHdlIGRlZmF1bHQgaXRcbiAgICBsb2FkaW5nOiAoeyBlcnJvciwgaXNMb2FkaW5nLCBwYXN0RGVsYXkgfSkgPT4ge1xuICAgICAgaWYgKCFwYXN0RGVsYXkpIHJldHVybiBudWxsXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7ZXJyb3IubWVzc2FnZX1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHtlcnJvci5zdGFja31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9LFxuICB9XG5cbiAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gIC8vIE5vdGUgdGhhdCB0aGlzIGlzIG9ubHkga2VwdCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSBzb21lb25lIGlzIHBhc3NpbmcgaW4gYSBwcm9taXNlIGFzIGZpcnN0IGFyZ3VtZW50XG4gIC8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG4gIGlmIChkeW5hbWljT3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gKCkgPT4gZHluYW1pY09wdGlvbnNcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgaW1wb3J0IGFzIGEgZnVuY3Rpb24sIGVnOiBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gZHluYW1pY09wdGlvbnNcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgbG9hZGFibGVPcHRpb25zID0geyAuLi5sb2FkYWJsZU9wdGlvbnMsIC4uLmR5bmFtaWNPcHRpb25zIH1cbiAgfVxuXG4gIC8vIFN1cHBvcnQgZm9yIHBhc3Npbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7bG9hZGluZzogKCkgPT4gPHA+TG9hZGluZyBzb21ldGhpbmc8L3A+fSlcbiAgbG9hZGFibGVPcHRpb25zID0geyAuLi5sb2FkYWJsZU9wdGlvbnMsIC4uLm9wdGlvbnMgfVxuXG4gIGlmIChcbiAgICB0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdvYmplY3QnICYmXG4gICAgIShkeW5hbWljT3B0aW9ucyBpbnN0YW5jZW9mIFByb21pc2UpXG4gICkge1xuICAgIC8vIHNob3cgZGVwcmVjYXRpb24gd2FybmluZyBmb3IgYG1vZHVsZXNgIGtleSBpbiBkZXZlbG9wbWVudFxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoZHluYW1pY09wdGlvbnMubW9kdWxlcykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1RoZSBtb2R1bGVzIG9wdGlvbiBmb3IgbmV4dC9keW5hbWljIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFNlZSBoZXJlIGZvciBtb3JlIGluZm8gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1keW5hbWljLW1vZHVsZXMnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgYHJlbmRlcmAgd2hlbiB1c2luZyBhIG1hcHBpbmcsIGVnOiBgZHluYW1pYyh7IG1vZHVsZXM6ICgpID0+IHtyZXR1cm4ge0hlbGxvV29ybGQ6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0sIHJlbmRlcihwcm9wcywgbG9hZGVkKSB7fSB9IH0pXG4gICAgaWYgKGR5bmFtaWNPcHRpb25zLnJlbmRlcikge1xuICAgICAgbG9hZGFibGVPcHRpb25zLnJlbmRlciA9IChsb2FkZWQsIHByb3BzKSA9PlxuICAgICAgICBkeW5hbWljT3B0aW9ucy5yZW5kZXIhKHByb3BzLCBsb2FkZWQpXG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIGBtb2R1bGVzYCB3aGVuIHVzaW5nIGEgbWFwcGluZywgZWc6IGBkeW5hbWljKHsgbW9kdWxlczogKCkgPT4ge3JldHVybiB7SGVsbG9Xb3JsZDogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSwgcmVuZGVyKHByb3BzLCBsb2FkZWQpIHt9IH0gfSlcbiAgICBpZiAoZHluYW1pY09wdGlvbnMubW9kdWxlcykge1xuICAgICAgbG9hZGFibGVGbiA9IExvYWRhYmxlLk1hcFxuICAgICAgY29uc3QgbG9hZE1vZHVsZXM6IExvYWRlck1hcCA9IHt9XG4gICAgICBjb25zdCBtb2R1bGVzID0gZHluYW1pY09wdGlvbnMubW9kdWxlcygpXG4gICAgICBPYmplY3Qua2V5cyhtb2R1bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWU6IGFueSA9IG1vZHVsZXNba2V5XVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsb2FkTW9kdWxlc1trZXldID0gKCkgPT4gdmFsdWUudGhlbigobW9kOiBhbnkpID0+IG1vZC5kZWZhdWx0IHx8IG1vZClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsb2FkTW9kdWxlc1trZXldID0gdmFsdWVcbiAgICAgIH0pXG4gICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gbG9hZE1vZHVsZXNcbiAgICB9XG4gIH1cblxuICAvLyBjb21pbmcgZnJvbSBidWlsZC9iYWJlbC9wbHVnaW5zL3JlYWN0LWxvYWRhYmxlLXBsdWdpbi5qc1xuICBpZiAobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKSB7XG4gICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgLi4ubG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkLFxuICAgIH1cbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkXG4gIH1cblxuICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSlcbiAgaWYgKHR5cGVvZiBsb2FkYWJsZU9wdGlvbnMuc3NyID09PSAnYm9vbGVhbicpIHtcbiAgICBpZiAoIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcbiAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyXG4gICAgICByZXR1cm4gbm9TU1IobG9hZGFibGVGbiwgbG9hZGFibGVPcHRpb25zKVxuICAgIH1cbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzclxuICB9XG5cbiAgcmV0dXJuIGxvYWRhYmxlRm4obG9hZGFibGVPcHRpb25zKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG50eXBlIENhcHR1cmVGbiA9IChtb2R1bGVOYW1lOiBzdHJpbmcpID0+IHZvaWRcblxuZXhwb3J0IGNvbnN0IExvYWRhYmxlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8Q2FwdHVyZUZuIHwgbnVsbD4obnVsbClcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgTG9hZGFibGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0xvYWRhYmxlQ29udGV4dCdcbn1cbiIsIi8qKlxuQGNvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50IEphbWVzIEt5bGUgPG1lQHRoZWphbWVza3lsZS5jb20+XG4gTUlUIExpY2Vuc2VcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG5NRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxuTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG5XSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRVxuKi9cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW1pZWJ1aWxkcy9yZWFjdC1sb2FkYWJsZS9ibG9iL3Y1LjUuMC9zcmMvaW5kZXguanNcbi8vIE1vZGlmaWVkIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB3ZWJwYWNrIDQgLyBOZXh0LmpzXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN1YnNjcmlwdGlvbiB9IGZyb20gJ3VzZS1zdWJzY3JpcHRpb24nXG5pbXBvcnQgeyBMb2FkYWJsZUNvbnRleHQgfSBmcm9tICcuL2xvYWRhYmxlLWNvbnRleHQnXG5cbmNvbnN0IEFMTF9JTklUSUFMSVpFUlMgPSBbXVxuY29uc3QgUkVBRFlfSU5JVElBTElaRVJTID0gW11cbmxldCBpbml0aWFsaXplZCA9IGZhbHNlXG5cbmZ1bmN0aW9uIGxvYWQobG9hZGVyKSB7XG4gIGxldCBwcm9taXNlID0gbG9hZGVyKClcblxuICBsZXQgc3RhdGUgPSB7XG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgICBsb2FkZWQ6IG51bGwsXG4gICAgZXJyb3I6IG51bGwsXG4gIH1cblxuICBzdGF0ZS5wcm9taXNlID0gcHJvbWlzZVxuICAgIC50aGVuKChsb2FkZWQpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgc3RhdGUubG9hZGVkID0gbG9hZGVkXG4gICAgICByZXR1cm4gbG9hZGVkXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXG4gICAgICBzdGF0ZS5lcnJvciA9IGVyclxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcblxuICByZXR1cm4gc3RhdGVcbn1cblxuZnVuY3Rpb24gbG9hZE1hcChvYmopIHtcbiAgbGV0IHN0YXRlID0ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGxvYWRlZDoge30sXG4gICAgZXJyb3I6IG51bGwsXG4gIH1cblxuICBsZXQgcHJvbWlzZXMgPSBbXVxuXG4gIHRyeSB7XG4gICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGxldCByZXN1bHQgPSBsb2FkKG9ialtrZXldKVxuXG4gICAgICBpZiAoIXJlc3VsdC5sb2FkaW5nKSB7XG4gICAgICAgIHN0YXRlLmxvYWRlZFtrZXldID0gcmVzdWx0LmxvYWRlZFxuICAgICAgICBzdGF0ZS5lcnJvciA9IHJlc3VsdC5lcnJvclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgcHJvbWlzZXMucHVzaChyZXN1bHQucHJvbWlzZSlcblxuICAgICAgcmVzdWx0LnByb21pc2VcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHN0YXRlLmxvYWRlZFtrZXldID0gcmVzXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgc3RhdGUuZXJyb3IgPSBlcnJcbiAgICAgICAgfSlcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBzdGF0ZS5lcnJvciA9IGVyclxuICB9XG5cbiAgc3RhdGUucHJvbWlzZSA9IFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuIHJlc1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcblxuICByZXR1cm4gc3RhdGVcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iai5kZWZhdWx0IDogb2JqXG59XG5cbmZ1bmN0aW9uIHJlbmRlcihsb2FkZWQsIHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHJlc29sdmUobG9hZGVkKSwgcHJvcHMpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWRGbiwgb3B0aW9ucykge1xuICBsZXQgb3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAge1xuICAgICAgbG9hZGVyOiBudWxsLFxuICAgICAgbG9hZGluZzogbnVsbCxcbiAgICAgIGRlbGF5OiAyMDAsXG4gICAgICB0aW1lb3V0OiBudWxsLFxuICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICB3ZWJwYWNrOiBudWxsLFxuICAgICAgbW9kdWxlczogbnVsbCxcbiAgICB9LFxuICAgIG9wdGlvbnNcbiAgKVxuXG4gIGxldCBzdWJzY3JpcHRpb24gPSBudWxsXG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAoIXN1YnNjcmlwdGlvbikge1xuICAgICAgY29uc3Qgc3ViID0gbmV3IExvYWRhYmxlU3Vic2NyaXB0aW9uKGxvYWRGbiwgb3B0cylcbiAgICAgIHN1YnNjcmlwdGlvbiA9IHtcbiAgICAgICAgZ2V0Q3VycmVudFZhbHVlOiBzdWIuZ2V0Q3VycmVudFZhbHVlLmJpbmQoc3ViKSxcbiAgICAgICAgc3Vic2NyaWJlOiBzdWIuc3Vic2NyaWJlLmJpbmQoc3ViKSxcbiAgICAgICAgcmV0cnk6IHN1Yi5yZXRyeS5iaW5kKHN1YiksXG4gICAgICAgIHByb21pc2U6IHN1Yi5wcm9taXNlLmJpbmQoc3ViKSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1YnNjcmlwdGlvbi5wcm9taXNlKClcbiAgfVxuXG4gIC8vIFNlcnZlciBvbmx5XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIEFMTF9JTklUSUFMSVpFUlMucHVzaChpbml0KVxuICB9XG5cbiAgLy8gQ2xpZW50IG9ubHlcbiAgaWYgKFxuICAgICFpbml0aWFsaXplZCAmJlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIG9wdHMud2VicGFjayA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICBjb25zdCBtb2R1bGVJZHMgPSBvcHRzLndlYnBhY2soKVxuICAgIFJFQURZX0lOSVRJQUxJWkVSUy5wdXNoKChpZHMpID0+IHtcbiAgICAgIGZvciAoY29uc3QgbW9kdWxlSWQgb2YgbW9kdWxlSWRzKSB7XG4gICAgICAgIGlmIChpZHMuaW5kZXhPZihtb2R1bGVJZCkgIT09IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGluaXQoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IExvYWRhYmxlQ29tcG9uZW50ID0gKHByb3BzLCByZWYpID0+IHtcbiAgICBpbml0KClcblxuICAgIGNvbnN0IGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KExvYWRhYmxlQ29udGV4dClcbiAgICBjb25zdCBzdGF0ZSA9IHVzZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pXG5cbiAgICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKFxuICAgICAgcmVmLFxuICAgICAgKCkgPT4gKHtcbiAgICAgICAgcmV0cnk6IHN1YnNjcmlwdGlvbi5yZXRyeSxcbiAgICAgIH0pLFxuICAgICAgW11cbiAgICApXG5cbiAgICBpZiAoY29udGV4dCAmJiBBcnJheS5pc0FycmF5KG9wdHMubW9kdWxlcykpIHtcbiAgICAgIG9wdHMubW9kdWxlcy5mb3JFYWNoKChtb2R1bGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbnRleHQobW9kdWxlTmFtZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmxvYWRpbmcgfHwgc3RhdGUuZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQob3B0cy5sb2FkaW5nLCB7XG4gICAgICAgICAgaXNMb2FkaW5nOiBzdGF0ZS5sb2FkaW5nLFxuICAgICAgICAgIHBhc3REZWxheTogc3RhdGUucGFzdERlbGF5LFxuICAgICAgICAgIHRpbWVkT3V0OiBzdGF0ZS50aW1lZE91dCxcbiAgICAgICAgICBlcnJvcjogc3RhdGUuZXJyb3IsXG4gICAgICAgICAgcmV0cnk6IHN1YnNjcmlwdGlvbi5yZXRyeSxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUubG9hZGVkKSB7XG4gICAgICAgIHJldHVybiBvcHRzLnJlbmRlcihzdGF0ZS5sb2FkZWQsIHByb3BzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9LCBbcHJvcHMsIHN0YXRlXSlcbiAgfVxuXG4gIExvYWRhYmxlQ29tcG9uZW50LnByZWxvYWQgPSAoKSA9PiBpbml0KClcbiAgTG9hZGFibGVDb21wb25lbnQuZGlzcGxheU5hbWUgPSAnTG9hZGFibGVDb21wb25lbnQnXG5cbiAgcmV0dXJuIFJlYWN0LmZvcndhcmRSZWYoTG9hZGFibGVDb21wb25lbnQpXG59XG5cbmNsYXNzIExvYWRhYmxlU3Vic2NyaXB0aW9uIHtcbiAgY29uc3RydWN0b3IobG9hZEZuLCBvcHRzKSB7XG4gICAgdGhpcy5fbG9hZEZuID0gbG9hZEZuXG4gICAgdGhpcy5fb3B0cyA9IG9wdHNcbiAgICB0aGlzLl9jYWxsYmFja3MgPSBuZXcgU2V0KClcbiAgICB0aGlzLl9kZWxheSA9IG51bGxcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuXG4gICAgdGhpcy5yZXRyeSgpXG4gIH1cblxuICBwcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXMucHJvbWlzZVxuICB9XG5cbiAgcmV0cnkoKSB7XG4gICAgdGhpcy5fY2xlYXJUaW1lb3V0cygpXG4gICAgdGhpcy5fcmVzID0gdGhpcy5fbG9hZEZuKHRoaXMuX29wdHMubG9hZGVyKVxuXG4gICAgdGhpcy5fc3RhdGUgPSB7XG4gICAgICBwYXN0RGVsYXk6IGZhbHNlLFxuICAgICAgdGltZWRPdXQ6IGZhbHNlLFxuICAgIH1cblxuICAgIGNvbnN0IHsgX3JlczogcmVzLCBfb3B0czogb3B0cyB9ID0gdGhpc1xuXG4gICAgaWYgKHJlcy5sb2FkaW5nKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdHMuZGVsYXkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChvcHRzLmRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fc3RhdGUucGFzdERlbGF5ID0gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2RlbGF5ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGUoe1xuICAgICAgICAgICAgICBwYXN0RGVsYXk6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIG9wdHMuZGVsYXkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcHRzLnRpbWVvdXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl91cGRhdGUoeyB0aW1lZE91dDogdHJ1ZSB9KVxuICAgICAgICB9LCBvcHRzLnRpbWVvdXQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcmVzLnByb21pc2VcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlKHt9KVxuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKF9lcnIpID0+IHtcbiAgICAgICAgdGhpcy5fdXBkYXRlKHt9KVxuICAgICAgICB0aGlzLl9jbGVhclRpbWVvdXRzKClcbiAgICAgIH0pXG4gICAgdGhpcy5fdXBkYXRlKHt9KVxuICB9XG5cbiAgX3VwZGF0ZShwYXJ0aWFsKSB7XG4gICAgdGhpcy5fc3RhdGUgPSB7XG4gICAgICAuLi50aGlzLl9zdGF0ZSxcbiAgICAgIGVycm9yOiB0aGlzLl9yZXMuZXJyb3IsXG4gICAgICBsb2FkZWQ6IHRoaXMuX3Jlcy5sb2FkZWQsXG4gICAgICBsb2FkaW5nOiB0aGlzLl9yZXMubG9hZGluZyxcbiAgICAgIC4uLnBhcnRpYWwsXG4gICAgfVxuICAgIHRoaXMuX2NhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soKSlcbiAgfVxuXG4gIF9jbGVhclRpbWVvdXRzKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheSlcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgfVxuXG4gIGdldEN1cnJlbnRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGVcbiAgfVxuXG4gIHN1YnNjcmliZShjYWxsYmFjaykge1xuICAgIHRoaXMuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuX2NhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIExvYWRhYmxlKG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWQsIG9wdHMpXG59XG5cbmZ1bmN0aW9uIExvYWRhYmxlTWFwKG9wdHMpIHtcbiAgaWYgKHR5cGVvZiBvcHRzLnJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignTG9hZGFibGVNYXAgcmVxdWlyZXMgYSBgcmVuZGVyKGxvYWRlZCwgcHJvcHMpYCBmdW5jdGlvbicpXG4gIH1cblxuICByZXR1cm4gY3JlYXRlTG9hZGFibGVDb21wb25lbnQobG9hZE1hcCwgb3B0cylcbn1cblxuTG9hZGFibGUuTWFwID0gTG9hZGFibGVNYXBcblxuZnVuY3Rpb24gZmx1c2hJbml0aWFsaXplcnMoaW5pdGlhbGl6ZXJzLCBpZHMpIHtcbiAgbGV0IHByb21pc2VzID0gW11cblxuICB3aGlsZSAoaW5pdGlhbGl6ZXJzLmxlbmd0aCkge1xuICAgIGxldCBpbml0ID0gaW5pdGlhbGl6ZXJzLnBvcCgpXG4gICAgcHJvbWlzZXMucHVzaChpbml0KGlkcykpXG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xuICAgIGlmIChpbml0aWFsaXplcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmx1c2hJbml0aWFsaXplcnMoaW5pdGlhbGl6ZXJzLCBpZHMpXG4gICAgfVxuICB9KVxufVxuXG5Mb2FkYWJsZS5wcmVsb2FkQWxsID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVJbml0aWFsaXplcnMsIHJlamVjdCkgPT4ge1xuICAgIGZsdXNoSW5pdGlhbGl6ZXJzKEFMTF9JTklUSUFMSVpFUlMpLnRoZW4ocmVzb2x2ZUluaXRpYWxpemVycywgcmVqZWN0KVxuICB9KVxufVxuXG5Mb2FkYWJsZS5wcmVsb2FkUmVhZHkgPSAoaWRzID0gW10pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlUHJlbG9hZCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9ICgpID0+IHtcbiAgICAgIGluaXRpYWxpemVkID0gdHJ1ZVxuICAgICAgcmV0dXJuIHJlc29sdmVQcmVsb2FkKClcbiAgICB9XG4gICAgLy8gV2UgYWx3YXlzIHdpbGwgcmVzb2x2ZSwgZXJyb3JzIHNob3VsZCBiZSBoYW5kbGVkIHdpdGhpbiBsb2FkaW5nIFVJcy5cbiAgICBmbHVzaEluaXRpYWxpemVycyhSRUFEWV9JTklUSUFMSVpFUlMsIGlkcykudGhlbihyZXMsIHJlcylcbiAgfSlcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5fX05FWFRfUFJFTE9BRFJFQURZID0gTG9hZGFibGUucHJlbG9hZFJlYWR5XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRhYmxlXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvZHluYW1pYycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdnVuZGVmaW5lZFxuICogdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIHJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy9cbi8vIEluIG9yZGVyIHRvIGF2b2lkIHJlbW92aW5nIGFuZCByZS1hZGRpbmcgc3Vic2NyaXB0aW9ucyBlYWNoIHRpbWUgdGhpcyBob29rIGlzIGNhbGxlZCxcbi8vIHRoZSBwYXJhbWV0ZXJzIHBhc3NlZCB0byB0aGlzIGhvb2sgc2hvdWxkIGJlIG1lbW9pemVkIGluIHNvbWUgd2F54oCTXG4vLyBlaXRoZXIgYnkgd3JhcHBpbmcgdGhlIGVudGlyZSBwYXJhbXMgb2JqZWN0IHdpdGggdXNlTWVtbygpXG4vLyBvciBieSB3cmFwcGluZyB0aGUgaW5kaXZpZHVhbCBjYWxsYmFja3Mgd2l0aCB1c2VDYWxsYmFjaygpLlxuXG5mdW5jdGlvbiB1c2VTdWJzY3JpcHRpb24oX3JlZikge1xuICB2YXIgZ2V0Q3VycmVudFZhbHVlID0gX3JlZi5nZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmUgPSBfcmVmLnN1YnNjcmliZTtcblxuICAvLyBSZWFkIHRoZSBjdXJyZW50IHZhbHVlIGZyb20gb3VyIHN1YnNjcmlwdGlvbi5cbiAgLy8gV2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMsIHdlJ2xsIHNjaGVkdWxlIGFuIHVwZGF0ZSB3aXRoIFJlYWN0LlxuICAvLyBJdCdzIGltcG9ydGFudCB0byBhbHNvIHN0b3JlIHRoZSBob29rIHBhcmFtcyBzbyB0aGF0IHdlIGNhbiBjaGVjayBmb3Igc3RhbGVuZXNzLlxuICAvLyAoU2VlIHRoZSBjb21tZW50IGluIGNoZWNrRm9yVXBkYXRlcygpIGJlbG93IGZvciBtb3JlIGluZm8uKVxuICB2YXIgX3VzZVN0YXRlID0gcmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRDdXJyZW50VmFsdWU6IGdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICAgdmFsdWU6IGdldEN1cnJlbnRWYWx1ZSgpXG4gICAgfTtcbiAgfSksXG4gICAgICBzdGF0ZSA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciB2YWx1ZVRvUmV0dXJuID0gc3RhdGUudmFsdWU7IC8vIElmIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkIHNpbmNlIG91ciBsYXN0IHJlbmRlciwgc2NoZWR1bGUgYW4gdXBkYXRlIHdpdGggaXRzIGN1cnJlbnQgdmFsdWUuXG5cbiAgaWYgKHN0YXRlLmdldEN1cnJlbnRWYWx1ZSAhPT0gZ2V0Q3VycmVudFZhbHVlIHx8IHN0YXRlLnN1YnNjcmliZSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgLy8gSWYgdGhlIHN1YnNjcmlwdGlvbiBoYXMgYmVlbiB1cGRhdGVkLCB3ZSdsbCBzY2hlZHVsZSBhbm90aGVyIHVwZGF0ZSB3aXRoIFJlYWN0LlxuICAgIC8vIFJlYWN0IHdpbGwgcHJvY2VzcyB0aGlzIHVwZGF0ZSBpbW1lZGlhdGVseSwgc28gdGhlIG9sZCBzdWJzY3JpcHRpb24gdmFsdWUgd29uJ3QgYmUgY29tbWl0dGVkLlxuICAgIC8vIEl0IGlzIHN0aWxsIG5pY2UgdG8gYXZvaWQgcmV0dXJuaW5nIGEgbWlzbWF0Y2hlZCB2YWx1ZSB0aG91Z2gsIHNvIGxldCdzIG92ZXJyaWRlIHRoZSByZXR1cm4gdmFsdWUuXG4gICAgdmFsdWVUb1JldHVybiA9IGdldEN1cnJlbnRWYWx1ZSgpO1xuICAgIHNldFN0YXRlKHtcbiAgICAgIGdldEN1cnJlbnRWYWx1ZTogZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICB2YWx1ZTogdmFsdWVUb1JldHVyblxuICAgIH0pO1xuICB9IC8vIERpc3BsYXkgdGhlIGN1cnJlbnQgdmFsdWUgZm9yIHRoaXMgaG9vayBpbiBSZWFjdCBEZXZUb29scy5cblxuXG4gIHJlYWN0LnVzZURlYnVnVmFsdWUodmFsdWVUb1JldHVybik7IC8vIEl0IGlzIGltcG9ydGFudCBub3QgdG8gc3Vic2NyaWJlIHdoaWxlIHJlbmRlcmluZyBiZWNhdXNlIHRoaXMgY2FuIGxlYWQgdG8gbWVtb3J5IGxlYWtzLlxuICAvLyAoTGVhcm4gbW9yZSBhdCByZWFjdGpzLm9yZy9kb2NzL3N0cmljdC1tb2RlLmh0bWwjZGV0ZWN0aW5nLXVuZXhwZWN0ZWQtc2lkZS1lZmZlY3RzKVxuICAvLyBJbnN0ZWFkLCB3ZSB3YWl0IHVudGlsIHRoZSBjb21taXQgcGhhc2UgdG8gYXR0YWNoIG91ciBoYW5kbGVyLlxuICAvL1xuICAvLyBXZSBpbnRlbnRpb25hbGx5IHVzZSBhIHBhc3NpdmUgZWZmZWN0ICh1c2VFZmZlY3QpIHJhdGhlciB0aGFuIGEgc3luY2hyb25vdXMgb25lICh1c2VMYXlvdXRFZmZlY3QpXG4gIC8vIHNvIHRoYXQgd2UgZG9uJ3Qgc3RyZXRjaCB0aGUgY29tbWl0IHBoYXNlLlxuICAvLyBUaGlzIGFsc28gaGFzIGFuIGFkZGVkIGJlbmVmaXQgd2hlbiBtdWx0aXBsZSBjb21wb25lbnRzIGFyZSBzdWJzY3JpYmVkIHRvIHRoZSBzYW1lIHNvdXJjZTpcbiAgLy8gSXQgYWxsb3dzIGVhY2ggb2YgdGhlIGV2ZW50IGhhbmRsZXJzIHRvIHNhZmVseSBzY2hlZHVsZSB3b3JrIHdpdGhvdXQgcG90ZW50aWFsbHkgcmVtb3ZpbmcgYW4gYW5vdGhlciBoYW5kbGVyLlxuICAvLyAoTGVhcm4gbW9yZSBhdCBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvazB5dnI1OTcwbylcblxuICByZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuXG4gICAgdmFyIGNoZWNrRm9yVXBkYXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCB0aGlzIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBldmVuIGFmdGVyIGJlaW5nIHVuc3Vic2NyaWJlZCxcbiAgICAgIC8vIGlmIGl0J3MgcmVtb3ZlZCBhcyBhIHJlc3VsdCBvZiBhIHN1YnNjcmlwdGlvbiBldmVudC91cGRhdGUuXG4gICAgICAvLyBJbiB0aGlzIGNhc2UsIFJlYWN0IHdpbGwgbG9nIGEgREVWIHdhcm5pbmcgYWJvdXQgYW4gdXBkYXRlIGZyb20gYW4gdW5tb3VudGVkIGNvbXBvbmVudC5cbiAgICAgIC8vIFdlIGNhbiBhdm9pZCB0cmlnZ2VyaW5nIHRoYXQgd2FybmluZyB3aXRoIHRoaXMgY2hlY2suXG4gICAgICBpZiAoZGlkVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBXZSB1c2UgYSBzdGF0ZSB1cGRhdGVyIGZ1bmN0aW9uIHRvIGF2b2lkIHNjaGVkdWxpbmcgd29yayBmb3IgYSBzdGFsZSBzb3VyY2UuXG4gICAgICAvLyBIb3dldmVyIGl0J3MgaW1wb3J0YW50IHRvIGVhZ2VybHkgcmVhZCB0aGUgY3VycmVudGx5IHZhbHVlLFxuICAgICAgLy8gc28gdGhhdCBhbGwgc2NoZWR1bGVkIHdvcmsgc2hhcmVzIHRoZSBzYW1lIHZhbHVlIChpbiB0aGUgZXZlbnQgb2YgbXVsdGlwbGUgc3Vic2NyaXB0aW9ucykuXG4gICAgICAvLyBUaGlzIGF2b2lkcyB2aXN1YWwgXCJ0ZWFyaW5nXCIgd2hlbiBhIG11dGF0aW9uIGhhcHBlbnMgZHVyaW5nIGEgKGNvbmN1cnJlbnQpIHJlbmRlci5cblxuXG4gICAgICB2YXIgdmFsdWUgPSBnZXRDdXJyZW50VmFsdWUoKTtcbiAgICAgIHNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgLy8gSWdub3JlIHZhbHVlcyBmcm9tIHN0YWxlIHNvdXJjZXMhXG4gICAgICAgIC8vIFNpbmNlIHdlIHN1YnNjcmliZSBhbiB1bnN1YnNjcmliZSBpbiBhIHBhc3NpdmUgZWZmZWN0LFxuICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgZm9yIGEgc3RhbGUgKHByZXZpb3VzKSBzdWJzY3JpcHRpb24uXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgYXZvaWRzIHNjaGVkdWxpbmcgYW4gdXBkYXRlIGZvciB0aGF0IHN0YWxlIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS5nZXRDdXJyZW50VmFsdWUgIT09IGdldEN1cnJlbnRWYWx1ZSB8fCBwcmV2U3RhdGUuc3Vic2NyaWJlICE9PSBzdWJzY3JpYmUpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9IC8vIFNvbWUgc3Vic2NyaXB0aW9ucyB3aWxsIGF1dG8taW52b2tlIHRoZSBoYW5kbGVyLCBldmVuIGlmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZC5cbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLCBubyB1cGRhdGUgaXMgbmVlZGVkLlxuICAgICAgICAvLyBSZXR1cm4gc3RhdGUgYXMtaXMgc28gUmVhY3QgY2FuIGJhaWwgb3V0IGFuZCBhdm9pZCBhbiB1bm5lY2Vzc2FyeSByZW5kZXIuXG5cblxuICAgICAgICBpZiAocHJldlN0YXRlLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2Fzc2lnbih7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShjaGVja0ZvclVwZGF0ZXMpOyAvLyBCZWNhdXNlIHdlJ3JlIHN1YnNjcmliaW5nIGluIGEgcGFzc2l2ZSBlZmZlY3QsXG4gICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IGFuIHVwZGF0ZSBoYXMgb2NjdXJyZWQgYmV0d2VlbiByZW5kZXIgYW5kIG91ciBlZmZlY3QgaGFuZGxlci5cbiAgICAvLyBDaGVjayBmb3IgdGhpcyBhbmQgc2NoZWR1bGUgYW4gdXBkYXRlIGlmIHdvcmsgaGFzIG9jY3VycmVkLlxuXG4gICAgY2hlY2tGb3JVcGRhdGVzKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpZFVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW2dldEN1cnJlbnRWYWx1ZSwgc3Vic2NyaWJlXSk7IC8vIFJldHVybiB0aGUgY3VycmVudCB2YWx1ZSBmb3Igb3VyIGNhbGxlciB0byB1c2Ugd2hpbGUgcmVuZGVyaW5nLlxuXG4gIHJldHVybiB2YWx1ZVRvUmV0dXJuO1xufVxuXG5leHBvcnRzLnVzZVN1YnNjcmlwdGlvbiA9IHVzZVN1YnNjcmlwdGlvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3Vic2NyaXB0aW9uLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=