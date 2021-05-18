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
  "abstract": "DoubleML is an open-source Python library implementing the double machine learning framework of Chernozhukov et al. (2018) for a variety of causal models. It contains functionalities for valid statistical inference on causal parameters when the estimation of nuisance parameters is based on machine learning methods. The object-oriented implementation of DoubleML provides a high flexibility in terms of model specifications and makes it easily extendable. The package is distributed under the MIT license and relies on core libraries from the scientific Python ecosystem: scikit-learn, numpy, pandas, scipy, statsmodels and joblib. Source code, documentation and an extensive user guide can be found at this https URL and this https URL.",
  link: "https://facebook.com",
  codes: {
    link: "https://youtube.com",
    language: "tensorflow"
  },
  meta: "This is the meta",
  authors: [{
    'name': 'Philipp Bach'
  }, {
    'name': ' Victor Chernozhukov'
  }, {
    'name': ' Malte S. Kurz'
  }, {
    'name': ' Martin Spindler'
  }]
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
  meta: "6 pages, 2 figures",
  authors: [{
    'name': 'Philipp Bach'
  }, {
    'name': ' Victor Chernozhukov'
  }, {
    'name': ' Malte S. Kurz'
  }, {
    'name': ' Martin Spindler'
  }]
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZHVtbXkvaW5kZXgudHMiXSwibmFtZXMiOlsiUVVJQ0tfTElOS1MiLCJUV1BfSU5GTyIsIllLX0lORk8iLCJETFBfSU5GTyIsIkRVTU1ZX1BBUEVSIiwiaWQiLCJ0aXRsZSIsInRhZ3MiLCJsaW5rIiwiY29kZXMiLCJsYW5ndWFnZSIsIm1ldGEiLCJhdXRob3JzIiwiRFVNTVlfRkVFRCIsInVzZXJJbWFnZSIsInRpbWUiLCJ1c2VybmFtZSIsIm5hbWUiLCJpc093bmVyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxDQUN2QjtBQUNJLFFBQU0sR0FEVjtBQUVJLFVBQVEsa0JBRlo7QUFHSSxVQUFRLHFEQUhaO0FBSUksVUFBUUMsZ0RBSlo7QUFLSSxTQUFPO0FBTFgsQ0FEdUIsRUFPcEI7QUFDQyxRQUFNLEdBRFA7QUFFQyxVQUFRLGdCQUZUO0FBR0MsVUFBUSxnREFIVDtBQUlDLFVBQVFDLCtDQUpUO0FBS0MsU0FBTztBQUxSLENBUG9CLEVBYXBCO0FBQ0MsUUFBTSxHQURQO0FBRUMsVUFBUSx5Q0FGVDtBQUdDLFVBQVEsaURBSFQ7QUFJQyxVQUFRQyxnREFKVDtBQUtDLFNBQU87QUFMUixDQWJvQixDQUFwQjtBQXNCQSxJQUFNQyxXQUFXLEdBQUcsQ0FBQztBQUN4QkMsSUFBRSxFQUFFLEdBRG9CO0FBRXhCQyxPQUFLLEVBQUUsMkJBRmlCO0FBR3hCQyxNQUFJLEVBQUUsQ0FBQyxXQUFELENBSGtCO0FBSXhCLGNBQVUsb3VCQUpjO0FBS3hCQyxNQUFJLEVBQUUsc0JBTGtCO0FBTXhCQyxPQUFLLEVBQUU7QUFDSEQsUUFBSSxFQUFFLHFCQURIO0FBRUhFLFlBQVEsRUFBRTtBQUZQLEdBTmlCO0FBVXhCQyxNQUFJLEVBQUUsa0JBVmtCO0FBV3hCQyxTQUFPLEVBQUUsQ0FBQztBQUFFLFlBQVE7QUFBVixHQUFELEVBQTZCO0FBQUUsWUFBUTtBQUFWLEdBQTdCLEVBQWlFO0FBQUUsWUFBUTtBQUFWLEdBQWpFLEVBQStGO0FBQUUsWUFBUTtBQUFWLEdBQS9GO0FBWGUsQ0FBRCxFQWEzQjtBQUNJUCxJQUFFLEVBQUUsR0FEUjtBQUVJQyxPQUFLLEVBQUUsMkJBRlg7QUFHSUMsTUFBSSxFQUFFLENBQUMsV0FBRCxDQUhWO0FBSUksY0FBVSw0TUFKZDtBQUtJQyxNQUFJLEVBQUUsc0JBTFY7QUFNSUMsT0FBSyxFQUFFO0FBQ0hELFFBQUksRUFBRSxxQkFESDtBQUVIRSxZQUFRLEVBQUU7QUFGUCxHQU5YO0FBVUlDLE1BQUksRUFBRSxvQkFWVjtBQVdJQyxTQUFPLEVBQUUsQ0FBQztBQUFFLFlBQVE7QUFBVixHQUFELEVBQTZCO0FBQUUsWUFBUTtBQUFWLEdBQTdCLEVBQWlFO0FBQUUsWUFBUTtBQUFWLEdBQWpFLEVBQStGO0FBQUUsWUFBUTtBQUFWLEdBQS9GO0FBWGIsQ0FiMkIsQ0FBcEI7QUE0QkEsSUFBTUMsVUFBVSxHQUFHLENBQ3RCO0FBQ0ksUUFBTSxHQURWO0FBRUlDLFdBQVMsRUFBRSxvUEFGZjtBQUdJQyxNQUFJLEVBQUUsWUFIVjtBQUlJQyxVQUFRLEVBQUUsSUFKZDtBQUtJVCxNQUFJLEVBQUUsQ0FBQztBQUFFVSxRQUFJLEVBQUU7QUFBUixHQUFELEVBQWlCO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBQWpCLEVBQTREO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBQTVELENBTFY7QUFNSUMsU0FBTyxFQUFFLEtBTmI7QUFPSUMsTUFBSSxFQUFFO0FBUFYsQ0FEc0IsRUFVbkI7QUFDQyxRQUFNLEdBRFA7QUFFQ0wsV0FBUyxFQUFFLG9QQUZaO0FBR0NDLE1BQUksRUFBRSxZQUhQO0FBSUNDLFVBQVEsRUFBRSxRQUpYO0FBS0NULE1BQUksRUFBRSxDQUFDO0FBQUVVLFFBQUksRUFBRTtBQUFSLEdBQUQsRUFBaUI7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FBakIsQ0FMUDtBQU1DQyxTQUFPLEVBQUUsSUFOVjtBQU9DQyxNQUFJO0FBUEwsQ0FWbUIsRUFrQm5CO0FBQ0MsUUFBTSxHQURQO0FBRUNMLFdBQVMsRUFBRSxvUEFGWjtBQUdDQyxNQUFJLEVBQUUsWUFIUDtBQUlDQyxVQUFRLEVBQUUsUUFKWDtBQUtDVCxNQUFJLEVBQUUsQ0FBQztBQUFFVSxRQUFJLEVBQUU7QUFBUixHQUFELEVBQWlCO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBQWpCLENBTFA7QUFNQ0MsU0FBTyxFQUFFLElBTlY7QUFPQ0MsTUFBSTtBQVBMLENBbEJtQixDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYXBlcnMvW3NsdWddLjcwNzdiMWVmMzAwNmMzYTdhOGJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUV1BfSU5GTywgWUtfSU5GTywgRExQX0lORk8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcblxuZXhwb3J0IGNvbnN0IFFVSUNLX0xJTktTID0gW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIjFcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiVHdvIE1pbnV0ZSBQYXBlclwiLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jL0slQzMlQTFyb2x5WnNvbG5haS92aWRlb3NcIixcbiAgICAgICAgXCJkZXNjXCI6IFRXUF9JTkZPLFxuICAgICAgICBcImltZ1wiOiBcInRtcC5qcGdcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiBcIjJcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiWWFubmljIEtpbGNoZXJcIixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vYy9ZYW5uaWNLaWxjaGVyL3ZpZGVvc1wiLFxuICAgICAgICBcImRlc2NcIjogWUtfSU5GTyxcbiAgICAgICAgXCJpbWdcIjogXCJ5ay5qcGdcIlxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiBcIjNcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgJiBEZWVwIExlYXJuaW5nXCIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvMTA3MTA3NTQ2MzQ4ODAzXCIsXG4gICAgICAgIFwiZGVzY1wiOiBETFBfSU5GTyxcbiAgICAgICAgXCJpbWdcIjogXCJkbHAuanBnXCJcbiAgICB9XG5dXG5cbmV4cG9ydCBjb25zdCBEVU1NWV9QQVBFUiA9IFt7XG4gICAgaWQ6IFwiMVwiLFxuICAgIHRpdGxlOiBcIkF0dGVudGlvbiBpcyBhbGwgeW91IG5lZWRcIixcbiAgICB0YWdzOiBbXCJIZXJlIEkgZ29cIl0sXG4gICAgYWJzdHJhY3Q6IFwiRG91YmxlTUwgaXMgYW4gb3Blbi1zb3VyY2UgUHl0aG9uIGxpYnJhcnkgaW1wbGVtZW50aW5nIHRoZSBkb3VibGUgbWFjaGluZSBsZWFybmluZyBmcmFtZXdvcmsgb2YgQ2hlcm5vemh1a292IGV0IGFsLiAoMjAxOCkgZm9yIGEgdmFyaWV0eSBvZiBjYXVzYWwgbW9kZWxzLiBJdCBjb250YWlucyBmdW5jdGlvbmFsaXRpZXMgZm9yIHZhbGlkIHN0YXRpc3RpY2FsIGluZmVyZW5jZSBvbiBjYXVzYWwgcGFyYW1ldGVycyB3aGVuIHRoZSBlc3RpbWF0aW9uIG9mIG51aXNhbmNlIHBhcmFtZXRlcnMgaXMgYmFzZWQgb24gbWFjaGluZSBsZWFybmluZyBtZXRob2RzLiBUaGUgb2JqZWN0LW9yaWVudGVkIGltcGxlbWVudGF0aW9uIG9mIERvdWJsZU1MIHByb3ZpZGVzIGEgaGlnaCBmbGV4aWJpbGl0eSBpbiB0ZXJtcyBvZiBtb2RlbCBzcGVjaWZpY2F0aW9ucyBhbmQgbWFrZXMgaXQgZWFzaWx5IGV4dGVuZGFibGUuIFRoZSBwYWNrYWdlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBhbmQgcmVsaWVzIG9uIGNvcmUgbGlicmFyaWVzIGZyb20gdGhlIHNjaWVudGlmaWMgUHl0aG9uIGVjb3N5c3RlbTogc2Npa2l0LWxlYXJuLCBudW1weSwgcGFuZGFzLCBzY2lweSwgc3RhdHNtb2RlbHMgYW5kIGpvYmxpYi4gU291cmNlIGNvZGUsIGRvY3VtZW50YXRpb24gYW5kIGFuIGV4dGVuc2l2ZSB1c2VyIGd1aWRlIGNhbiBiZSBmb3VuZCBhdCB0aGlzIGh0dHBzIFVSTCBhbmQgdGhpcyBodHRwcyBVUkwuXCIsXG4gICAgbGluazogXCJodHRwczovL2ZhY2Vib29rLmNvbVwiLFxuICAgIGNvZGVzOiB7XG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbVwiLFxuICAgICAgICBsYW5ndWFnZTogXCJ0ZW5zb3JmbG93XCJcbiAgICB9LFxuICAgIG1ldGE6IFwiVGhpcyBpcyB0aGUgbWV0YVwiLFxuICAgIGF1dGhvcnM6IFt7ICduYW1lJzogJ1BoaWxpcHAgQmFjaCcgfSwgeyAnbmFtZSc6ICcgVmljdG9yIENoZXJub3podWtvdicgfSwgeyAnbmFtZSc6ICcgTWFsdGUgUy4gS3VyeicgfSwgeyAnbmFtZSc6ICcgTWFydGluIFNwaW5kbGVyJyB9XVxufSxcbntcbiAgICBpZDogJzInLFxuICAgIHRpdGxlOiBcIkF0dGVudGlvbiBpcyBhbGwgeW91IG5lZWRcIixcbiAgICB0YWdzOiBbXCJIZXJlIEkgZ29cIl0sXG4gICAgYWJzdHJhY3Q6IFwiVGhpcyBpcyBhYnN0cmFjdCBha3NkamxrYXNka2FranNsZGtqbGFzZGprbGFkc2xramFkc2xqa2xqYSBzZGtsa2phc2RrYXNsamRsIGFza2Rsa2FzZGpsa2FzbGRramFzbGtqZGxhc2tqZGpsYXNka2phc2xqZGsgIGEgc2RrayBkYWxza2psIGFkc2ogYWRzIGFkc2xramEgZHNsamthZCBzamxrYSBzZGprbGFsamtzIGRsa2phZCBzbGprIGRzamxrYSBkc2Egc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9mYWNlYm9vay5jb21cIixcbiAgICBjb2Rlczoge1xuICAgICAgICBsaW5rOiBcImh0dHBzOi8veW91dHViZS5jb21cIixcbiAgICAgICAgbGFuZ3VhZ2U6IFwidGVuc29yZmxvd1wiXG4gICAgfSxcbiAgICBtZXRhOiBcIjYgcGFnZXMsIDIgZmlndXJlc1wiLFxuICAgIGF1dGhvcnM6IFt7ICduYW1lJzogJ1BoaWxpcHAgQmFjaCcgfSwgeyAnbmFtZSc6ICcgVmljdG9yIENoZXJub3podWtvdicgfSwgeyAnbmFtZSc6ICcgTWFsdGUgUy4gS3VyeicgfSwgeyAnbmFtZSc6ICcgTWFydGluIFNwaW5kbGVyJyB9XVxufVxuXTtcblxuZXhwb3J0IGNvbnN0IERVTU1ZX0ZFRUQgPSBbXG4gICAge1xuICAgICAgICBcImlkXCI6ICcxJyxcbiAgICAgICAgdXNlckltYWdlOiBcImh0dHBzOi8vc2NvbnRlbnQuZmt0bTMtMS5mbmEuZmJjZG4ubmV0L3YvdDEuNjQzNS05LzE4NTk0MTIxMl8zOTg5ODk1OTM0NDIzNzE4XzM3MTA5NTE2MjU0NTA4OTI4MDdfbi5qcGc/X25jX2NhdD0xMDQmY2NiPTEtMyZfbmNfc2lkPThiZmViOSZfbmNfb2hjPWxIdnNMVXpFc0FrQVg5UFdaQ18mX25jX2h0PXNjb250ZW50LmZrdG0zLTEuZm5hJm9oPThmMTk1MmE5ZmE3ZmMyZjYyOGQ0MTYxZDkyZjRkYzQ4Jm9lPTYwQzRENjNGXCIsXG4gICAgICAgIHRpbWU6IFwiMjAyMS8xMC8zMFwiLFxuICAgICAgICB1c2VybmFtZTogXCJTR1wiLFxuICAgICAgICB0YWdzOiBbeyBuYW1lOiBcIm1sXCIgfSwgeyBuYW1lOiBcIlRIRSBQTEFDRSBJUyBDQUxMRUQgREhVTElLSEVMXCIgfSwgeyBuYW1lOiBcImFpXCIgfV0sXG4gICAgICAgIGlzT3duZXI6IGZhbHNlLFxuICAgICAgICB0ZXh0OiBcIjxwPkhlbGxvIFdvcmxkIDwvcD4gIDxoMT5Hb29kYnllIFdvcmxkPC9oMT4gXCJcblxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiAnMicsXG4gICAgICAgIHVzZXJJbWFnZTogXCJodHRwczovL3Njb250ZW50LmZrdG0zLTEuZm5hLmZiY2RuLm5ldC92L3QxLjY0MzUtOS8xODU5NDEyMTJfMzk4OTg5NTkzNDQyMzcxOF8zNzEwOTUxNjI1NDUwODkyODA3X24uanBnP19uY19jYXQ9MTA0JmNjYj0xLTMmX25jX3NpZD04YmZlYjkmX25jX29oYz1sSHZzTFV6RXNBa0FYOVBXWkNfJl9uY19odD1zY29udGVudC5ma3RtMy0xLmZuYSZvaD04ZjE5NTJhOWZhN2ZjMmY2MjhkNDE2MWQ5MmY0ZGM0OCZvZT02MEM0RDYzRlwiLFxuICAgICAgICB0aW1lOiBcIjIwMjEvMTAvMzBcIixcbiAgICAgICAgdXNlcm5hbWU6IFwiR2F1dGFtXCIsXG4gICAgICAgIHRhZ3M6IFt7IG5hbWU6IFwibWxcIiB9LCB7IG5hbWU6IFwiYWlcIiB9XSxcbiAgICAgICAgaXNPd25lcjogdHJ1ZSxcbiAgICAgICAgdGV4dDogYDxwPkhlbGxvIFdvcmxkPC9wPjxoMT5Hb29kYnllIFdvcmxkPC9oMT4gIGBcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjogJzMnLFxuICAgICAgICB1c2VySW1hZ2U6IFwiaHR0cHM6Ly9zY29udGVudC5ma3RtMy0xLmZuYS5mYmNkbi5uZXQvdi90MS42NDM1LTkvMTg1OTQxMjEyXzM5ODk4OTU5MzQ0MjM3MThfMzcxMDk1MTYyNTQ1MDg5MjgwN19uLmpwZz9fbmNfY2F0PTEwNCZjY2I9MS0zJl9uY19zaWQ9OGJmZWI5Jl9uY19vaGM9bEh2c0xVekVzQWtBWDlQV1pDXyZfbmNfaHQ9c2NvbnRlbnQuZmt0bTMtMS5mbmEmb2g9OGYxOTUyYTlmYTdmYzJmNjI4ZDQxNjFkOTJmNGRjNDgmb2U9NjBDNEQ2M0ZcIixcbiAgICAgICAgdGltZTogXCIyMDIxLzEwLzMwXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcIkdhdXRhbVwiLFxuICAgICAgICB0YWdzOiBbeyBuYW1lOiBcIm1sXCIgfSwgeyBuYW1lOiBcImFpXCIgfV0sXG4gICAgICAgIGlzT3duZXI6IHRydWUsXG4gICAgICAgIHRleHQ6IGA8cD5IZWxsbyBXb3JsZDwvcD48aDE+R29vZGJ5ZSBXb3JsZDwvaDE+ICBgXG4gICAgfVxuXG5dIl0sInNvdXJjZVJvb3QiOiIifQ==