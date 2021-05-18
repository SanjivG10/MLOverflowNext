self["webpackHotUpdate_N_E"]("pages/feeds/[slug]",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZHVtbXkvaW5kZXgudHMiXSwibmFtZXMiOlsiUVVJQ0tfTElOS1MiLCJUV1BfSU5GTyIsIllLX0lORk8iLCJETFBfSU5GTyIsIkRVTU1ZX1BBUEVSIiwiaWQiLCJ0aXRsZSIsInRhZ3MiLCJsaW5rIiwiY29kZXMiLCJsYW5ndWFnZSIsIm1ldGEiLCJhdXRob3JzIiwiRFVNTVlfRkVFRCIsInVzZXJJbWFnZSIsInRpbWUiLCJ1c2VybmFtZSIsIm5hbWUiLCJpc093bmVyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxDQUN2QjtBQUNJLFFBQU0sR0FEVjtBQUVJLFVBQVEsa0JBRlo7QUFHSSxVQUFRLHFEQUhaO0FBSUksVUFBUUMsZ0RBSlo7QUFLSSxTQUFPO0FBTFgsQ0FEdUIsRUFPcEI7QUFDQyxRQUFNLEdBRFA7QUFFQyxVQUFRLGdCQUZUO0FBR0MsVUFBUSxnREFIVDtBQUlDLFVBQVFDLCtDQUpUO0FBS0MsU0FBTztBQUxSLENBUG9CLEVBYXBCO0FBQ0MsUUFBTSxHQURQO0FBRUMsVUFBUSx5Q0FGVDtBQUdDLFVBQVEsaURBSFQ7QUFJQyxVQUFRQyxnREFKVDtBQUtDLFNBQU87QUFMUixDQWJvQixDQUFwQjtBQXNCQSxJQUFNQyxXQUFXLEdBQUcsQ0FBQztBQUN4QkMsSUFBRSxFQUFFLEdBRG9CO0FBRXhCQyxPQUFLLEVBQUUsMkJBRmlCO0FBR3hCQyxNQUFJLEVBQUUsQ0FBQyxXQUFELENBSGtCO0FBSXhCLGNBQVUsb3VCQUpjO0FBS3hCQyxNQUFJLEVBQUUsc0JBTGtCO0FBTXhCQyxPQUFLLEVBQUU7QUFDSEQsUUFBSSxFQUFFLHFCQURIO0FBRUhFLFlBQVEsRUFBRTtBQUZQLEdBTmlCO0FBVXhCQyxNQUFJLEVBQUUsb0JBVmtCO0FBV3hCQyxTQUFPLEVBQUUsQ0FBQztBQUFFLFlBQVE7QUFBVixHQUFELEVBQTZCO0FBQUUsWUFBUTtBQUFWLEdBQTdCLEVBQWlFO0FBQUUsWUFBUTtBQUFWLEdBQWpFLEVBQStGO0FBQUUsWUFBUTtBQUFWLEdBQS9GO0FBWGUsQ0FBRCxFQWEzQjtBQUNJUCxJQUFFLEVBQUUsR0FEUjtBQUVJQyxPQUFLLEVBQUUsMkJBRlg7QUFHSUMsTUFBSSxFQUFFLENBQUMsV0FBRCxDQUhWO0FBSUksY0FBVSw0TUFKZDtBQUtJQyxNQUFJLEVBQUUsc0JBTFY7QUFNSUMsT0FBSyxFQUFFO0FBQ0hELFFBQUksRUFBRSxxQkFESDtBQUVIRSxZQUFRLEVBQUU7QUFGUCxHQU5YO0FBVUlDLE1BQUksRUFBRSxvQkFWVjtBQVdJQyxTQUFPLEVBQUUsQ0FBQztBQUFFLFlBQVE7QUFBVixHQUFELEVBQTZCO0FBQUUsWUFBUTtBQUFWLEdBQTdCLEVBQWlFO0FBQUUsWUFBUTtBQUFWLEdBQWpFLEVBQStGO0FBQUUsWUFBUTtBQUFWLEdBQS9GO0FBWGIsQ0FiMkIsQ0FBcEI7QUE0QkEsSUFBTUMsVUFBVSxHQUFHLENBQ3RCO0FBQ0ksUUFBTSxHQURWO0FBRUlDLFdBQVMsRUFBRSxvUEFGZjtBQUdJQyxNQUFJLEVBQUUsWUFIVjtBQUlJQyxVQUFRLEVBQUUsSUFKZDtBQUtJVCxNQUFJLEVBQUUsQ0FBQztBQUFFVSxRQUFJLEVBQUU7QUFBUixHQUFELEVBQWlCO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBQWpCLEVBQTREO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBQTVELENBTFY7QUFNSUMsU0FBTyxFQUFFLEtBTmI7QUFPSUMsTUFBSSxFQUFFO0FBUFYsQ0FEc0IsRUFVbkI7QUFDQyxRQUFNLEdBRFA7QUFFQ0wsV0FBUyxFQUFFLG9QQUZaO0FBR0NDLE1BQUksRUFBRSxZQUhQO0FBSUNDLFVBQVEsRUFBRSxRQUpYO0FBS0NULE1BQUksRUFBRSxDQUFDO0FBQUVVLFFBQUksRUFBRTtBQUFSLEdBQUQsRUFBaUI7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FBakIsQ0FMUDtBQU1DQyxTQUFPLEVBQUUsSUFOVjtBQU9DQyxNQUFJO0FBUEwsQ0FWbUIsRUFrQm5CO0FBQ0MsUUFBTSxHQURQO0FBRUNMLFdBQVMsRUFBRSxvUEFGWjtBQUdDQyxNQUFJLEVBQUUsWUFIUDtBQUlDQyxVQUFRLEVBQUUsUUFKWDtBQUtDVCxNQUFJLEVBQUUsQ0FBQztBQUFFVSxRQUFJLEVBQUU7QUFBUixHQUFELEVBQWlCO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBQWpCLENBTFA7QUFNQ0MsU0FBTyxFQUFFLElBTlY7QUFPQ0MsTUFBSTtBQVBMLENBbEJtQixDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWVkcy9bc2x1Z10uNjRhOGYyOWY0MDM1NWIxZTU5NmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRXUF9JTkZPLCBZS19JTkZPLCBETFBfSU5GTyB9IGZyb20gXCIuLi9jb25zdGFudHNcIlxuXG5leHBvcnQgY29uc3QgUVVJQ0tfTElOS1MgPSBbXG4gICAge1xuICAgICAgICBcImlkXCI6IFwiMVwiLFxuICAgICAgICBcIm5hbWVcIjogXCJUd28gTWludXRlIFBhcGVyXCIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2MvSyVDMyVBMXJvbHlac29sbmFpL3ZpZGVvc1wiLFxuICAgICAgICBcImRlc2NcIjogVFdQX0lORk8sXG4gICAgICAgIFwiaW1nXCI6IFwidG1wLmpwZ1wiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IFwiMlwiLFxuICAgICAgICBcIm5hbWVcIjogXCJZYW5uaWMgS2lsY2hlclwiLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jL1lhbm5pY0tpbGNoZXIvdmlkZW9zXCIsXG4gICAgICAgIFwiZGVzY1wiOiBZS19JTkZPLFxuICAgICAgICBcImltZ1wiOiBcInlrLmpwZ1wiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IFwiM1wiLFxuICAgICAgICBcIm5hbWVcIjogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZSAmIERlZXAgTGVhcm5pbmdcIixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy8xMDcxMDc1NDYzNDg4MDNcIixcbiAgICAgICAgXCJkZXNjXCI6IERMUF9JTkZPLFxuICAgICAgICBcImltZ1wiOiBcImRscC5qcGdcIlxuICAgIH1cbl1cblxuZXhwb3J0IGNvbnN0IERVTU1ZX1BBUEVSID0gW3tcbiAgICBpZDogXCIxXCIsXG4gICAgdGl0bGU6IFwiQXR0ZW50aW9uIGlzIGFsbCB5b3UgbmVlZFwiLFxuICAgIHRhZ3M6IFtcIkhlcmUgSSBnb1wiXSxcbiAgICBhYnN0cmFjdDogXCJEb3VibGVNTCBpcyBhbiBvcGVuLXNvdXJjZSBQeXRob24gbGlicmFyeSBpbXBsZW1lbnRpbmcgdGhlIGRvdWJsZSBtYWNoaW5lIGxlYXJuaW5nIGZyYW1ld29yayBvZiBDaGVybm96aHVrb3YgZXQgYWwuICgyMDE4KSBmb3IgYSB2YXJpZXR5IG9mIGNhdXNhbCBtb2RlbHMuIEl0IGNvbnRhaW5zIGZ1bmN0aW9uYWxpdGllcyBmb3IgdmFsaWQgc3RhdGlzdGljYWwgaW5mZXJlbmNlIG9uIGNhdXNhbCBwYXJhbWV0ZXJzIHdoZW4gdGhlIGVzdGltYXRpb24gb2YgbnVpc2FuY2UgcGFyYW1ldGVycyBpcyBiYXNlZCBvbiBtYWNoaW5lIGxlYXJuaW5nIG1ldGhvZHMuIFRoZSBvYmplY3Qtb3JpZW50ZWQgaW1wbGVtZW50YXRpb24gb2YgRG91YmxlTUwgcHJvdmlkZXMgYSBoaWdoIGZsZXhpYmlsaXR5IGluIHRlcm1zIG9mIG1vZGVsIHNwZWNpZmljYXRpb25zIGFuZCBtYWtlcyBpdCBlYXNpbHkgZXh0ZW5kYWJsZS4gVGhlIHBhY2thZ2UgaXMgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGFuZCByZWxpZXMgb24gY29yZSBsaWJyYXJpZXMgZnJvbSB0aGUgc2NpZW50aWZpYyBQeXRob24gZWNvc3lzdGVtOiBzY2lraXQtbGVhcm4sIG51bXB5LCBwYW5kYXMsIHNjaXB5LCBzdGF0c21vZGVscyBhbmQgam9ibGliLiBTb3VyY2UgY29kZSwgZG9jdW1lbnRhdGlvbiBhbmQgYW4gZXh0ZW5zaXZlIHVzZXIgZ3VpZGUgY2FuIGJlIGZvdW5kIGF0IHRoaXMgaHR0cHMgVVJMIGFuZCB0aGlzIGh0dHBzIFVSTC5cIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZmFjZWJvb2suY29tXCIsXG4gICAgY29kZXM6IHtcbiAgICAgICAgbGluazogXCJodHRwczovL3lvdXR1YmUuY29tXCIsXG4gICAgICAgIGxhbmd1YWdlOiBcInRlbnNvcmZsb3dcIlxuICAgIH0sXG4gICAgbWV0YTogXCI2IHBhZ2VzLCAyIGZpZ3VyZXNcIixcbiAgICBhdXRob3JzOiBbeyAnbmFtZSc6ICdQaGlsaXBwIEJhY2gnIH0sIHsgJ25hbWUnOiAnIFZpY3RvciBDaGVybm96aHVrb3YnIH0sIHsgJ25hbWUnOiAnIE1hbHRlIFMuIEt1cnonIH0sIHsgJ25hbWUnOiAnIE1hcnRpbiBTcGluZGxlcicgfV1cbn0sXG57XG4gICAgaWQ6ICcyJyxcbiAgICB0aXRsZTogXCJBdHRlbnRpb24gaXMgYWxsIHlvdSBuZWVkXCIsXG4gICAgdGFnczogW1wiSGVyZSBJIGdvXCJdLFxuICAgIGFic3RyYWN0OiBcIlRoaXMgaXMgYWJzdHJhY3QgYWtzZGpsa2FzZGtha2pzbGRramxhc2Rqa2xhZHNsa2phZHNsamtsamEgc2RrbGtqYXNka2FzbGpkbCBhc2tkbGthc2RqbGthc2xka2phc2xramRsYXNramRqbGFzZGtqYXNsamRrICBhIHNka2sgZGFsc2tqbCBhZHNqIGFkcyBhZHNsa2phIGRzbGprYWQgc2psa2Egc2Rqa2xhbGprcyBkbGtqYWQgc2xqayBkc2psa2EgZHNhIHNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZmFjZWJvb2suY29tXCIsXG4gICAgY29kZXM6IHtcbiAgICAgICAgbGluazogXCJodHRwczovL3lvdXR1YmUuY29tXCIsXG4gICAgICAgIGxhbmd1YWdlOiBcInRlbnNvcmZsb3dcIlxuICAgIH0sXG4gICAgbWV0YTogXCI2IHBhZ2VzLCAyIGZpZ3VyZXNcIixcbiAgICBhdXRob3JzOiBbeyAnbmFtZSc6ICdQaGlsaXBwIEJhY2gnIH0sIHsgJ25hbWUnOiAnIFZpY3RvciBDaGVybm96aHVrb3YnIH0sIHsgJ25hbWUnOiAnIE1hbHRlIFMuIEt1cnonIH0sIHsgJ25hbWUnOiAnIE1hcnRpbiBTcGluZGxlcicgfV1cbn1cbl07XG5cbmV4cG9ydCBjb25zdCBEVU1NWV9GRUVEID0gW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiAnMScsXG4gICAgICAgIHVzZXJJbWFnZTogXCJodHRwczovL3Njb250ZW50LmZrdG0zLTEuZm5hLmZiY2RuLm5ldC92L3QxLjY0MzUtOS8xODU5NDEyMTJfMzk4OTg5NTkzNDQyMzcxOF8zNzEwOTUxNjI1NDUwODkyODA3X24uanBnP19uY19jYXQ9MTA0JmNjYj0xLTMmX25jX3NpZD04YmZlYjkmX25jX29oYz1sSHZzTFV6RXNBa0FYOVBXWkNfJl9uY19odD1zY29udGVudC5ma3RtMy0xLmZuYSZvaD04ZjE5NTJhOWZhN2ZjMmY2MjhkNDE2MWQ5MmY0ZGM0OCZvZT02MEM0RDYzRlwiLFxuICAgICAgICB0aW1lOiBcIjIwMjEvMTAvMzBcIixcbiAgICAgICAgdXNlcm5hbWU6IFwiU0dcIixcbiAgICAgICAgdGFnczogW3sgbmFtZTogXCJtbFwiIH0sIHsgbmFtZTogXCJUSEUgUExBQ0UgSVMgQ0FMTEVEIERIVUxJS0hFTFwiIH0sIHsgbmFtZTogXCJhaVwiIH1dLFxuICAgICAgICBpc093bmVyOiBmYWxzZSxcbiAgICAgICAgdGV4dDogXCI8cD5IZWxsbyBXb3JsZCA8L3A+ICA8aDE+R29vZGJ5ZSBXb3JsZDwvaDE+IFwiXG5cbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjogJzInLFxuICAgICAgICB1c2VySW1hZ2U6IFwiaHR0cHM6Ly9zY29udGVudC5ma3RtMy0xLmZuYS5mYmNkbi5uZXQvdi90MS42NDM1LTkvMTg1OTQxMjEyXzM5ODk4OTU5MzQ0MjM3MThfMzcxMDk1MTYyNTQ1MDg5MjgwN19uLmpwZz9fbmNfY2F0PTEwNCZjY2I9MS0zJl9uY19zaWQ9OGJmZWI5Jl9uY19vaGM9bEh2c0xVekVzQWtBWDlQV1pDXyZfbmNfaHQ9c2NvbnRlbnQuZmt0bTMtMS5mbmEmb2g9OGYxOTUyYTlmYTdmYzJmNjI4ZDQxNjFkOTJmNGRjNDgmb2U9NjBDNEQ2M0ZcIixcbiAgICAgICAgdGltZTogXCIyMDIxLzEwLzMwXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcIkdhdXRhbVwiLFxuICAgICAgICB0YWdzOiBbeyBuYW1lOiBcIm1sXCIgfSwgeyBuYW1lOiBcImFpXCIgfV0sXG4gICAgICAgIGlzT3duZXI6IHRydWUsXG4gICAgICAgIHRleHQ6IGA8cD5IZWxsbyBXb3JsZDwvcD48aDE+R29vZGJ5ZSBXb3JsZDwvaDE+ICBgXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6ICczJyxcbiAgICAgICAgdXNlckltYWdlOiBcImh0dHBzOi8vc2NvbnRlbnQuZmt0bTMtMS5mbmEuZmJjZG4ubmV0L3YvdDEuNjQzNS05LzE4NTk0MTIxMl8zOTg5ODk1OTM0NDIzNzE4XzM3MTA5NTE2MjU0NTA4OTI4MDdfbi5qcGc/X25jX2NhdD0xMDQmY2NiPTEtMyZfbmNfc2lkPThiZmViOSZfbmNfb2hjPWxIdnNMVXpFc0FrQVg5UFdaQ18mX25jX2h0PXNjb250ZW50LmZrdG0zLTEuZm5hJm9oPThmMTk1MmE5ZmE3ZmMyZjYyOGQ0MTYxZDkyZjRkYzQ4Jm9lPTYwQzRENjNGXCIsXG4gICAgICAgIHRpbWU6IFwiMjAyMS8xMC8zMFwiLFxuICAgICAgICB1c2VybmFtZTogXCJHYXV0YW1cIixcbiAgICAgICAgdGFnczogW3sgbmFtZTogXCJtbFwiIH0sIHsgbmFtZTogXCJhaVwiIH1dLFxuICAgICAgICBpc093bmVyOiB0cnVlLFxuICAgICAgICB0ZXh0OiBgPHA+SGVsbG8gV29ybGQ8L3A+PGgxPkdvb2RieWUgV29ybGQ8L2gxPiAgYFxuICAgIH1cblxuXSJdLCJzb3VyY2VSb290IjoiIn0=