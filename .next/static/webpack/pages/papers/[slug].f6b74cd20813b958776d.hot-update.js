self["webpackHotUpdate_N_E"]("pages/papers/[slug]",{

/***/ "./dummy/index.ts":
/*!************************!*\
  !*** ./dummy/index.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QUICK_LINKS": function() { return /* binding */ QUICK_LINKS; },
/* harmony export */   "DUMMY_PAPER": function() { return /* binding */ DUMMY_PAPER; },
/* harmony export */   "DUMMY_FEED": function() { return /* binding */ DUMMY_FEED; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./constants/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

var QUICK_LINKS = [{
  "id": "1",
  "name": "Two Minute Paper",
  "link": "https://www.youtube.com/c/K%C3%A1rolyZsolnai/videos",
  "desc": _constants__WEBPACK_IMPORTED_MODULE_0__.TWP_INFO,
  "img": "tmp.jpg"
}, {
  "id": "2",
  "name": "Yannic Kilcher",
  "link": "https://www.youtube.com/c/YannicKilcher/videos",
  "desc": _constants__WEBPACK_IMPORTED_MODULE_0__.YK_INFO,
  "img": "yk.jpg"
}, {
  "id": "3",
  "name": "Artificial Intelligence & Deep Learning",
  "link": "https://www.facebook.com/groups/107107546348803",
  "desc": _constants__WEBPACK_IMPORTED_MODULE_0__.DLP_INFO,
  "img": "dlp.jpg"
}];
var DUMMY_PAPER = [{
  id: "1",
  title: "Attention is all you need",
  tags: ["Here I go"],
  "abstract": "This is abstract aksdjlkasdkakjsldkjlasdjkladslkjadsljklja sdklkjasdkasljdl askdlkasdjlkasldkjaslkjdlaskjdjlasdkjasljdk  a sdkk dalskjl adsj ads adslkja dsljkad sjlka sdjklaljks dlkjad sljk dsjlka dsa s",
  link: "https://facebook.com",
  codes: {
    link: "https://youtube.com",
    language: "tensorflow"
  },
  meta: "This is the meta"
}, {
  id: '2',
  title: "Attention is all you need",
  tags: ["Here I go"],
  "abstract": "This is abstract aksdjlkasdkakjsldkjlasdjkladslkjadsljklja sdklkjasdkasljdl askdlkasdjlkasldkjaslkjdlaskjdjlasdkjasljdk  a sdkk dalskjl adsj ads adslkja dsljkad sjlka sdjklaljks dlkjad sljk dsjlka dsa s",
  link: "https://facebook.com",
  codes: {
    link: "https://youtube.com",
    language: "tensorflow"
  },
  meta: "This is the meta"
}];
var DUMMY_FEED = [{
  "id": '1',
  userImage: "https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/185941212_3989895934423718_3710951625450892807_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=lHvsLUzEsAkAX9PWZC_&_nc_ht=scontent.fktm3-1.fna&oh=8f1952a9fa7fc2f628d4161d92f4dc48&oe=60C4D63F",
  time: "2021/10/30",
  username: "SG",
  tags: [{
    name: "ml"
  }, {
    name: "THE PLACE IS CALLED DHULIKHEL"
  }, {
    name: "ai"
  }],
  isOwner: false,
  text: "<p>Hello World </p>  <h1>Goodbye World</h1> "
}, {
  "id": '2',
  userImage: "https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/185941212_3989895934423718_3710951625450892807_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=lHvsLUzEsAkAX9PWZC_&_nc_ht=scontent.fktm3-1.fna&oh=8f1952a9fa7fc2f628d4161d92f4dc48&oe=60C4D63F",
  time: "2021/10/30",
  username: "Gautam",
  tags: [{
    name: "ml"
  }, {
    name: "ai"
  }],
  isOwner: true,
  text: "<p>Hello World</p><h1>Goodbye World</h1>  "
}, {
  "id": '3',
  userImage: "https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/185941212_3989895934423718_3710951625450892807_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=lHvsLUzEsAkAX9PWZC_&_nc_ht=scontent.fktm3-1.fna&oh=8f1952a9fa7fc2f628d4161d92f4dc48&oe=60C4D63F",
  time: "2021/10/30",
  username: "Gautam",
  tags: [{
    name: "ml"
  }, {
    name: "ai"
  }],
  isOwner: true,
  text: "<p>Hello World</p><h1>Goodbye World</h1>  "
}];

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
    container: {
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%"
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
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Container, {
      className: classes.container,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(PaperPage, "vvh9GKDmGg2swX3NqEAQicIBfAI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, useStyles];
});

_c = PaperPage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZHVtbXkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BhcGVycy9bc2x1Z10udHN4Il0sIm5hbWVzIjpbIlFVSUNLX0xJTktTIiwiVFdQX0lORk8iLCJZS19JTkZPIiwiRExQX0lORk8iLCJEVU1NWV9QQVBFUiIsImlkIiwidGl0bGUiLCJ0YWdzIiwibGluayIsImNvZGVzIiwibGFuZ3VhZ2UiLCJtZXRhIiwiRFVNTVlfRkVFRCIsInVzZXJJbWFnZSIsInRpbWUiLCJ1c2VybmFtZSIsIm5hbWUiLCJpc093bmVyIiwidGV4dCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW5Ub3AiLCJjb250YWluZXIiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsIlBhcGVyUGFnZSIsInByb3BzIiwidXNlUm91dGVyIiwicXVlcnkiLCJzbHVnIiwiY2xhc3NlcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxXQUFXLEdBQUcsQ0FDdkI7QUFDSSxRQUFNLEdBRFY7QUFFSSxVQUFRLGtCQUZaO0FBR0ksVUFBUSxxREFIWjtBQUlJLFVBQVFDLGdEQUpaO0FBS0ksU0FBTztBQUxYLENBRHVCLEVBT3BCO0FBQ0MsUUFBTSxHQURQO0FBRUMsVUFBUSxnQkFGVDtBQUdDLFVBQVEsZ0RBSFQ7QUFJQyxVQUFRQywrQ0FKVDtBQUtDLFNBQU87QUFMUixDQVBvQixFQWFwQjtBQUNDLFFBQU0sR0FEUDtBQUVDLFVBQVEseUNBRlQ7QUFHQyxVQUFRLGlEQUhUO0FBSUMsVUFBUUMsZ0RBSlQ7QUFLQyxTQUFPO0FBTFIsQ0Fib0IsQ0FBcEI7QUFzQkEsSUFBTUMsV0FBVyxHQUFHLENBQUM7QUFDeEJDLElBQUUsRUFBRSxHQURvQjtBQUV4QkMsT0FBSyxFQUFFLDJCQUZpQjtBQUd4QkMsTUFBSSxFQUFFLENBQUMsV0FBRCxDQUhrQjtBQUl4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QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FqQkQ7O0dBQU1JLFM7VUFDY0Usa0QsRUFFRlgsUzs7O0tBSFpTLFM7QUFtQk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFwZXJzL1tzbHVnXS5mNmI3NGNkMjA4MTNiOTU4Nzc2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVFdQX0lORk8sIFlLX0lORk8sIERMUF9JTkZPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5cbmV4cG9ydCBjb25zdCBRVUlDS19MSU5LUyA9IFtcbiAgICB7XG4gICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlR3byBNaW51dGUgUGFwZXJcIixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vYy9LJUMzJUExcm9seVpzb2xuYWkvdmlkZW9zXCIsXG4gICAgICAgIFwiZGVzY1wiOiBUV1BfSU5GTyxcbiAgICAgICAgXCJpbWdcIjogXCJ0bXAuanBnXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjogXCIyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIllhbm5pYyBLaWxjaGVyXCIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2MvWWFubmljS2lsY2hlci92aWRlb3NcIixcbiAgICAgICAgXCJkZXNjXCI6IFlLX0lORk8sXG4gICAgICAgIFwiaW1nXCI6IFwieWsuanBnXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjogXCIzXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkFydGlmaWNpYWwgSW50ZWxsaWdlbmNlICYgRGVlcCBMZWFybmluZ1wiLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzLzEwNzEwNzU0NjM0ODgwM1wiLFxuICAgICAgICBcImRlc2NcIjogRExQX0lORk8sXG4gICAgICAgIFwiaW1nXCI6IFwiZGxwLmpwZ1wiXG4gICAgfVxuXVxuXG5leHBvcnQgY29uc3QgRFVNTVlfUEFQRVIgPSBbe1xuICAgIGlkOiBcIjFcIixcbiAgICB0aXRsZTogXCJBdHRlbnRpb24gaXMgYWxsIHlvdSBuZWVkXCIsXG4gICAgdGFnczogW1wiSGVyZSBJIGdvXCJdLFxuICAgIGFic3RyYWN0OiBcIlRoaXMgaXMgYWJzdHJhY3QgYWtzZGpsa2FzZGtha2pzbGRramxhc2Rqa2xhZHNsa2phZHNsamtsamEgc2RrbGtqYXNka2FzbGpkbCBhc2tkbGthc2RqbGthc2xka2phc2xramRsYXNramRqbGFzZGtqYXNsamRrICBhIHNka2sgZGFsc2tqbCBhZHNqIGFkcyBhZHNsa2phIGRzbGprYWQgc2psa2Egc2Rqa2xhbGprcyBkbGtqYWQgc2xqayBkc2psa2EgZHNhIHNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZmFjZWJvb2suY29tXCIsXG4gICAgY29kZXM6IHtcbiAgICAgICAgbGluazogXCJodHRwczovL3lvdXR1YmUuY29tXCIsXG4gICAgICAgIGxhbmd1YWdlOiBcInRlbnNvcmZsb3dcIlxuICAgIH0sXG4gICAgbWV0YTogXCJUaGlzIGlzIHRoZSBtZXRhXCIsXG59LFxue1xuICAgIGlkOiAnMicsXG4gICAgdGl0bGU6IFwiQXR0ZW50aW9uIGlzIGFsbCB5b3UgbmVlZFwiLFxuICAgIHRhZ3M6IFtcIkhlcmUgSSBnb1wiXSxcbiAgICBhYnN0cmFjdDogXCJUaGlzIGlzIGFic3RyYWN0IGFrc2RqbGthc2RrYWtqc2xka2psYXNkamtsYWRzbGtqYWRzbGprbGphIHNka2xramFzZGthc2xqZGwgYXNrZGxrYXNkamxrYXNsZGtqYXNsa2pkbGFza2pkamxhc2RramFzbGpkayAgYSBzZGtrIGRhbHNramwgYWRzaiBhZHMgYWRzbGtqYSBkc2xqa2FkIHNqbGthIHNkamtsYWxqa3MgZGxramFkIHNsamsgZHNqbGthIGRzYSBzXCIsXG4gICAgbGluazogXCJodHRwczovL2ZhY2Vib29rLmNvbVwiLFxuICAgIGNvZGVzOiB7XG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbVwiLFxuICAgICAgICBsYW5ndWFnZTogXCJ0ZW5zb3JmbG93XCJcbiAgICB9LFxuICAgIG1ldGE6IFwiVGhpcyBpcyB0aGUgbWV0YVwiLFxufVxuXTtcblxuZXhwb3J0IGNvbnN0IERVTU1ZX0ZFRUQgPSBbXG4gICAge1xuICAgICAgICBcImlkXCI6ICcxJyxcbiAgICAgICAgdXNlckltYWdlOiBcImh0dHBzOi8vc2NvbnRlbnQuZmt0bTMtMS5mbmEuZmJjZG4ubmV0L3YvdDEuNjQzNS05LzE4NTk0MTIxMl8zOTg5ODk1OTM0NDIzNzE4XzM3MTA5NTE2MjU0NTA4OTI4MDdfbi5qcGc/X25jX2NhdD0xMDQmY2NiPTEtMyZfbmNfc2lkPThiZmViOSZfbmNfb2hjPWxIdnNMVXpFc0FrQVg5UFdaQ18mX25jX2h0PXNjb250ZW50LmZrdG0zLTEuZm5hJm9oPThmMTk1MmE5ZmE3ZmMyZjYyOGQ0MTYxZDkyZjRkYzQ4Jm9lPTYwQzRENjNGXCIsXG4gICAgICAgIHRpbWU6IFwiMjAyMS8xMC8zMFwiLFxuICAgICAgICB1c2VybmFtZTogXCJTR1wiLFxuICAgICAgICB0YWdzOiBbeyBuYW1lOiBcIm1sXCIgfSwgeyBuYW1lOiBcIlRIRSBQTEFDRSBJUyBDQUxMRUQgREhVTElLSEVMXCIgfSwgeyBuYW1lOiBcImFpXCIgfV0sXG4gICAgICAgIGlzT3duZXI6IGZhbHNlLFxuICAgICAgICB0ZXh0OiBcIjxwPkhlbGxvIFdvcmxkIDwvcD4gIDxoMT5Hb29kYnllIFdvcmxkPC9oMT4gXCJcblxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiAnMicsXG4gICAgICAgIHVzZXJJbWFnZTogXCJodHRwczovL3Njb250ZW50LmZrdG0zLTEuZm5hLmZiY2RuLm5ldC92L3QxLjY0MzUtOS8xODU5NDEyMTJfMzk4OTg5NTkzNDQyMzcxOF8zNzEwOTUxNjI1NDUwODkyODA3X24uanBnP19uY19jYXQ9MTA0JmNjYj0xLTMmX25jX3NpZD04YmZlYjkmX25jX29oYz1sSHZzTFV6RXNBa0FYOVBXWkNfJl9uY19odD1zY29udGVudC5ma3RtMy0xLmZuYSZvaD04ZjE5NTJhOWZhN2ZjMmY2MjhkNDE2MWQ5MmY0ZGM0OCZvZT02MEM0RDYzRlwiLFxuICAgICAgICB0aW1lOiBcIjIwMjEvMTAvMzBcIixcbiAgICAgICAgdXNlcm5hbWU6IFwiR2F1dGFtXCIsXG4gICAgICAgIHRhZ3M6IFt7IG5hbWU6IFwibWxcIiB9LCB7IG5hbWU6IFwiYWlcIiB9XSxcbiAgICAgICAgaXNPd25lcjogdHJ1ZSxcbiAgICAgICAgdGV4dDogYDxwPkhlbGxvIFdvcmxkPC9wPjxoMT5Hb29kYnllIFdvcmxkPC9oMT4gIGBcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjogJzMnLFxuICAgICAgICB1c2VySW1hZ2U6IFwiaHR0cHM6Ly9zY29udGVudC5ma3RtMy0xLmZuYS5mYmNkbi5uZXQvdi90MS42NDM1LTkvMTg1OTQxMjEyXzM5ODk4OTU5MzQ0MjM3MThfMzcxMDk1MTYyNTQ1MDg5MjgwN19uLmpwZz9fbmNfY2F0PTEwNCZjY2I9MS0zJl9uY19zaWQ9OGJmZWI5Jl9uY19vaGM9bEh2c0xVekVzQWtBWDlQV1pDXyZfbmNfaHQ9c2NvbnRlbnQuZmt0bTMtMS5mbmEmb2g9OGYxOTUyYTlmYTdmYzJmNjI4ZDQxNjFkOTJmNGRjNDgmb2U9NjBDNEQ2M0ZcIixcbiAgICAgICAgdGltZTogXCIyMDIxLzEwLzMwXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcIkdhdXRhbVwiLFxuICAgICAgICB0YWdzOiBbeyBuYW1lOiBcIm1sXCIgfSwgeyBuYW1lOiBcImFpXCIgfV0sXG4gICAgICAgIGlzT3duZXI6IHRydWUsXG4gICAgICAgIHRleHQ6IGA8cD5IZWxsbyBXb3JsZDwvcD48aDE+R29vZGJ5ZSBXb3JsZDwvaDE+ICBgXG4gICAgfVxuXG5dIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYXBlclwiO1xuaW1wb3J0IHsgRFVNTVlfUEFQRVIgfSBmcm9tIFwiLi4vLi4vZHVtbXlcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBtYXJnaW5Ub3A6IDQwLFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICB9LFxufSkpO1xuXG5jb25zdCBQYXBlclBhZ2U6IFJlYWN0LkZDPElQcm9wcz4gPSAocHJvcHM6IElQcm9wcykgPT4ge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc2x1ZyA9IHF1ZXJ5LnNsdWc7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBjb25zdCBkYXRhID0gRFVNTVlfUEFQRVJbMF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJQYXBlclwiIC8+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj48L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFwZXJQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==