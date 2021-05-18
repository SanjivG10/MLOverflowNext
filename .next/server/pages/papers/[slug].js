(function() {
var exports = {};
exports.id = "pages/papers/[slug]";
exports.ids = ["pages/papers/[slug]"];
exports.modules = {

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../constants */ "./constants/index.ts");


var _jsxFileName = "/home/bhairaja/mloverflow-next/components/Header.tsx";



function Header(props) {
  const {
    title
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: title || _constants__WEBPACK_IMPORTED_MODULE_3__.SLOGAN
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./constants/index.ts":
/*!****************************!*\
  !*** ./constants/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SEARCH_PLACEHOLDER": function() { return /* binding */ SEARCH_PLACEHOLDER; },
/* harmony export */   "SLOGAN": function() { return /* binding */ SLOGAN; },
/* harmony export */   "MAIN_LABEL_HOME_PAGE": function() { return /* binding */ MAIN_LABEL_HOME_PAGE; },
/* harmony export */   "SECONDARY_LABEL_HOME_PAGE": function() { return /* binding */ SECONDARY_LABEL_HOME_PAGE; },
/* harmony export */   "TWP_INFO": function() { return /* binding */ TWP_INFO; },
/* harmony export */   "YK_INFO": function() { return /* binding */ YK_INFO; },
/* harmony export */   "DLP_INFO": function() { return /* binding */ DLP_INFO; }
/* harmony export */ });
const SEARCH_PLACEHOLDER = "search";
const SLOGAN = "MLOverflow";
const MAIN_LABEL_HOME_PAGE = "get machine learning resources";
const SECONDARY_LABEL_HOME_PAGE = "keep your machine learning information upto date";
const TWP_INFO = "Two minute paper offers brief explanation of machine learning papers inside 2 minutes";
const YK_INFO = "Yannic Kilcher will take you through whole paper explanation in his youtube videos. Keep in touch";
const DLP_INFO = "The definitive and most active FB Group on A.I., Neural Networks and Deep Learning. All things new and interesting on the frontier of A.I. and Deep Learning. Neural networks will redefine what it means to be a smart machine in the years to come";

/***/ }),

/***/ "./dummy/index.ts":
/*!************************!*\
  !*** ./dummy/index.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QUICK_LINKS": function() { return /* binding */ QUICK_LINKS; },
/* harmony export */   "DUMMY_PAPER": function() { return /* binding */ DUMMY_PAPER; },
/* harmony export */   "DUMMY_FEED": function() { return /* binding */ DUMMY_FEED; },
/* harmony export */   "DUMMY_COMMENTS": function() { return /* binding */ DUMMY_COMMENTS; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./constants/index.ts");

const QUICK_LINKS = [{
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
const DUMMY_PAPER = [{
  datasets: "https://linkedin.com",
  id: "1",
  title: "Attention is all you need",
  tags: [{
    name: "Here I go"
  }, {
    name: "machine learning"
  }, {
    name: "Here I go"
  }, {
    name: "machine learning"
  }, {
    name: "Here I go"
  }, {
    name: "machine learning"
  }],
  abstract: "DoubleML is an open-source Python library implementing the double machine learning framework of Chernozhukov et al. (2018) for a variety of causal models. It contains functionalities for valid statistical inference on causal parameters when the estimation of nuisance parameters is based on machine learning methods. The object-oriented implementation of DoubleML provides a high flexibility in terms of model specifications and makes it easily extendable. The package is distributed under the MIT license and relies on core libraries from the scientific Python ecosystem: scikit-learn, numpy, pandas, scipy, statsmodels and joblib. Source code, documentation and an extensive user guide can be found at this https URL and this https URL.",
  link: "https://arxiv.org/abs/1804.02767",
  codes: [{
    link: "https://youtube.com",
    language: "tensorflow"
  }],
  meta: "6 pages, 2 figures",
  publishedDate: new Date().toUTCString(),
  authors: [{
    'name': 'Philipp Bach'
  }, {
    'name': ' Victor Chernozhukov'
  }, {
    'name': ' Malte S. Kurz'
  }, {
    'name': ' Martin Spindler'
  }, {
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
  tags: [{
    name: "Here I go"
  }],
  abstract: "This is abstract aksdjlkasdkakjsldkjlasdjkladslkjadsljklja sdklkjasdkasljdl askdlkasdjlkasldkjaslkjdlaskjdjlasdkjasljdk  a sdkk dalskjl adsj ads adslkja dsljkad sjlka sdjklaljks dlkjad sljk dsjlka dsa s",
  link: "https://facebook.com",
  codes: [{
    link: "https://youtube.com",
    language: "tensorflow"
  }],
  meta: "6 pages, 2 figures",
  authors: [{
    'name': 'Philipp Bach'
  }, {
    'name': ' Victor Chernozhukov'
  }, {
    'name': ' Malte S. Kurz'
  }, {
    'name': ' Martin Spindler'
  }],
  publishedDate: new Date().toUTCString()
}];
const DUMMY_FEED = [{
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
  text: `<p>Hello World</p><h1>Goodbye World</h1>  `
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
  text: `<p>Hello World</p><h1>Goodbye World</h1>  `
}];
const DUMMY_COMMENTS = [{
  text: "<p>The CSS <code>background-color</code> property defines the background color of an element.</p>",
  isOwner: true,
  hasVoted: false,
  hasBookmarked: false,
  votes: 12345
}, {
  text: `<p>The CSS <code>background-color</code> property defines the background color of an element.  <img alt="" src="/logo.png" / ></p>`,
  isOwner: false,
  hasVoted: true,
  hasBookmarked: true,
  votes: 156
}, {
  text: `<h2>HTML Buttons</h2>
<p>HTML buttons are defined with the button tag:</p>
<button>Click me</button>`,
  isOwner: true,
  hasVoted: true,
  hasBookmarked: true,
  votes: 6454654
}];

/***/ }),

/***/ "./pages/papers/[slug].tsx":
/*!*********************************!*\
  !*** ./pages/papers/[slug].tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dummy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dummy */ "./dummy/index.ts");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Accordion */ "@material-ui/core/Accordion");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "@material-ui/core/AccordionSummary");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "@material-ui/core/AccordionDetails");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/home/bhairaja/mloverflow-next/pages/papers/[slug].tsx";











const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(theme => ({
  root: {
    marginTop: 40
  },
  container: {
    margin: 40,
    padding: 10
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
  abstract: {},
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
  datasets: {
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
      background: "#000",
      cursor: "pointer"
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
  },
  pdf: {
    textDecoration: "none"
  }
}));

const PaperPage = props => {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const slug = query.slug;
  const classes = useStyles();
  const data = _dummy__WEBPACK_IMPORTED_MODULE_6__.DUMMY_PAPER[0];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {
      title: "Paper"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: classes.container,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: classes.title,
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.authors,
        children: data.authors.map(author => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: classes.eachAuthor,
            children: author.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 20
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: [specialLabel("abstract", "ABSTRACT", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.abstract,
          children: data.abstract
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, undefined), data.tags && data.tags.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.beautify,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.tags,
          children: data.tags.map(tag => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.tag,
              children: tag.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 24
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_7___default()), {
        defaultExpanded: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_8___default()), {
          expandIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 25
          }, undefined),
          "aria-controls": "panel1a-content",
          id: "panel1a-header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
            className: classes.heading,
            children: "Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_9___default()), {
          className: classes.detail,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("clock", "PUBLISHED DATE", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.date,
              children: data.publishedDate
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("info", "META", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: classes.meta,
              children: data.meta
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("link", "LINK", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: data.link,
              className: `${classes.link}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: data.link
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, undefined), data.codes && data.codes.length > 0 && data.codes[0].link && data.codes[0].language && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("code", "CODE", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: data.codes[0].link,
              className: classes.code,
              target: "_blank",
              rel: "noopener noreferrer",
              children: data.codes[0].link
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              alt: "",
              src: `/${data.codes[0].language}.svg`,
              className: classes.langIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 17
          }, undefined), data.datasets && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("dataset", "DATASETS", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: data.datasets,
              className: `${classes.datasets}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: data.datasets
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 15
          }, undefined), data.link.startsWith("https://arxiv.org/abs/") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.beautify,
            children: [specialLabel("pdf", "PDF", classes), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: `https://arxiv.org/pdf/${data.link.split("/").slice(-1).pop()}`,
              className: `${classes.pdf}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: `https://arxiv.org/pdf/${data.link.split("/").slice(-1).pop()}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 5
  }, undefined);
};

const specialLabel = (icon, label, classes) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.specialLabel,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: `/${icon}.svg`,
          alt: "",
          className: classes.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.label,
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 250,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PaperPage);

/***/ }),

/***/ "@material-ui/core/Accordion":
/*!**********************************************!*\
  !*** external "@material-ui/core/Accordion" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Accordion");;

/***/ }),

/***/ "@material-ui/core/AccordionDetails":
/*!*****************************************************!*\
  !*** external "@material-ui/core/AccordionDetails" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/AccordionDetails");;

/***/ }),

/***/ "@material-ui/core/AccordionSummary":
/*!*****************************************************!*\
  !*** external "@material-ui/core/AccordionSummary" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/AccordionSummary");;

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Paper");;

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Typography");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ExpandMore");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/papers/[slug].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlLy4vY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvLi9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS8uL2R1bW15L2luZGV4LnRzIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvLi9wYWdlcy9wYXBlcnMvW3NsdWddLnRzeCIsIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHNcIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeVwiIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJ0aXRsZSIsIlNMT0dBTiIsIlNFQVJDSF9QTEFDRUhPTERFUiIsIk1BSU5fTEFCRUxfSE9NRV9QQUdFIiwiU0VDT05EQVJZX0xBQkVMX0hPTUVfUEFHRSIsIlRXUF9JTkZPIiwiWUtfSU5GTyIsIkRMUF9JTkZPIiwiUVVJQ0tfTElOS1MiLCJEVU1NWV9QQVBFUiIsImRhdGFzZXRzIiwiaWQiLCJ0YWdzIiwibmFtZSIsImFic3RyYWN0IiwibGluayIsImNvZGVzIiwibGFuZ3VhZ2UiLCJtZXRhIiwicHVibGlzaGVkRGF0ZSIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsImF1dGhvcnMiLCJEVU1NWV9GRUVEIiwidXNlckltYWdlIiwidGltZSIsInVzZXJuYW1lIiwiaXNPd25lciIsInRleHQiLCJEVU1NWV9DT01NRU5UUyIsImhhc1ZvdGVkIiwiaGFzQm9va21hcmtlZCIsInZvdGVzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsIm1hcmdpbiIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImVhY2hBdXRob3IiLCJtYXJnaW5SaWdodCIsImZvbnRTdHlsZSIsImNvbG9yIiwiY3Vyc29yIiwiYmVhdXRpZnkiLCJzcGVjaWFsTGFiZWwiLCJkaXNwbGF5IiwiYm9yZGVyQm90dG9tIiwid2lkdGgiLCJsYWJlbCIsImZvbnRXZWlnaHQiLCJpY29uIiwiaGVpZ2h0IiwiZGF0ZSIsInRleHREZWNvcmF0aW9uIiwiY29kZSIsImxhbmdJY29uIiwibWFyZ2luTGVmdCIsImZsZXhXcmFwIiwidGFnIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImhlYWRpbmciLCJ0eXBvZ3JhcGh5IiwicHhUb1JlbSIsImZvbnRXZWlnaHRCb2xkIiwiZGV0YWlsIiwiZmxleERpcmVjdGlvbiIsInBkZiIsIlBhcGVyUGFnZSIsInF1ZXJ5IiwidXNlUm91dGVyIiwic2x1ZyIsImNsYXNzZXMiLCJkYXRhIiwibWFwIiwiYXV0aG9yIiwibGVuZ3RoIiwic3RhcnRzV2l0aCIsInNwbGl0Iiwic2xpY2UiLCJwb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQStCO0FBQzVDLFFBQU07QUFBRUM7QUFBRixNQUFZRCxLQUFsQjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRQyxLQUFLLElBQUlDLDhDQUFNQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBV0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJNLE1BQU1DLGtCQUFrQixHQUFHLFFBQTNCO0FBQ0EsTUFBTUQsTUFBTSxHQUFHLFlBQWY7QUFDQSxNQUFNRSxvQkFBb0IsR0FBRyxnQ0FBN0I7QUFDQSxNQUFNQyx5QkFBeUIsR0FDcEMsa0RBREs7QUFFQSxNQUFNQyxRQUFRLEdBQ25CLHVGQURLO0FBR0EsTUFBTUMsT0FBTyxHQUNsQixtR0FESztBQUdBLE1BQU1DLFFBQVEsR0FDbkIsc1BBREssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hQO0FBRU8sTUFBTUMsV0FBVyxHQUFHLENBQ3ZCO0FBQ0ksUUFBTSxHQURWO0FBRUksVUFBUSxrQkFGWjtBQUdJLFVBQVEscURBSFo7QUFJSSxVQUFRSCxnREFKWjtBQUtJLFNBQU87QUFMWCxDQUR1QixFQU9wQjtBQUNDLFFBQU0sR0FEUDtBQUVDLFVBQVEsZ0JBRlQ7QUFHQyxVQUFRLGdEQUhUO0FBSUMsVUFBUUMsK0NBSlQ7QUFLQyxTQUFPO0FBTFIsQ0FQb0IsRUFhcEI7QUFDQyxRQUFNLEdBRFA7QUFFQyxVQUFR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ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFNMT0dBTiB9IGZyb20gXCIuLy4uL2NvbnN0YW50c1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzOiBJUHJvcHMpIHtcbiAgY29uc3QgeyB0aXRsZSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlIHx8IFNMT0dBTn08L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgIDwvPlxuICApO1xufVxuIiwiZXhwb3J0IGNvbnN0IFNFQVJDSF9QTEFDRUhPTERFUiA9IFwic2VhcmNoXCI7XG5leHBvcnQgY29uc3QgU0xPR0FOID0gXCJNTE92ZXJmbG93XCI7XG5leHBvcnQgY29uc3QgTUFJTl9MQUJFTF9IT01FX1BBR0UgPSBcImdldCBtYWNoaW5lIGxlYXJuaW5nIHJlc291cmNlc1wiO1xuZXhwb3J0IGNvbnN0IFNFQ09OREFSWV9MQUJFTF9IT01FX1BBR0UgPVxuICBcImtlZXAgeW91ciBtYWNoaW5lIGxlYXJuaW5nIGluZm9ybWF0aW9uIHVwdG8gZGF0ZVwiO1xuZXhwb3J0IGNvbnN0IFRXUF9JTkZPID1cbiAgXCJUd28gbWludXRlIHBhcGVyIG9mZmVycyBicmllZiBleHBsYW5hdGlvbiBvZiBtYWNoaW5lIGxlYXJuaW5nIHBhcGVycyBpbnNpZGUgMiBtaW51dGVzXCI7XG5cbmV4cG9ydCBjb25zdCBZS19JTkZPID1cbiAgXCJZYW5uaWMgS2lsY2hlciB3aWxsIHRha2UgeW91IHRocm91Z2ggd2hvbGUgcGFwZXIgZXhwbGFuYXRpb24gaW4gaGlzIHlvdXR1YmUgdmlkZW9zLiBLZWVwIGluIHRvdWNoXCI7XG5cbmV4cG9ydCBjb25zdCBETFBfSU5GTyA9XG4gIFwiVGhlIGRlZmluaXRpdmUgYW5kIG1vc3QgYWN0aXZlIEZCIEdyb3VwIG9uIEEuSS4sIE5ldXJhbCBOZXR3b3JrcyBhbmQgRGVlcCBMZWFybmluZy4gQWxsIHRoaW5ncyBuZXcgYW5kIGludGVyZXN0aW5nIG9uIHRoZSBmcm9udGllciBvZiBBLkkuIGFuZCBEZWVwIExlYXJuaW5nLiBOZXVyYWwgbmV0d29ya3Mgd2lsbCByZWRlZmluZSB3aGF0IGl0IG1lYW5zIHRvIGJlIGEgc21hcnQgbWFjaGluZSBpbiB0aGUgeWVhcnMgdG8gY29tZVwiO1xuIiwiaW1wb3J0IHsgVFdQX0lORk8sIFlLX0lORk8sIERMUF9JTkZPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5cbmV4cG9ydCBjb25zdCBRVUlDS19MSU5LUyA9IFtcbiAgICB7XG4gICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIlR3byBNaW51dGUgUGFwZXJcIixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vYy9LJUMzJUExcm9seVpzb2xuYWkvdmlkZW9zXCIsXG4gICAgICAgIFwiZGVzY1wiOiBUV1BfSU5GTyxcbiAgICAgICAgXCJpbWdcIjogXCJ0bXAuanBnXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjogXCIyXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIllhbm5pYyBLaWxjaGVyXCIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2MvWWFubmljS2lsY2hlci92aWRlb3NcIixcbiAgICAgICAgXCJkZXNjXCI6IFlLX0lORk8sXG4gICAgICAgIFwiaW1nXCI6IFwieWsuanBnXCJcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjogXCIzXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkFydGlmaWNpYWwgSW50ZWxsaWdlbmNlICYgRGVlcCBMZWFybmluZ1wiLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzLzEwNzEwNzU0NjM0ODgwM1wiLFxuICAgICAgICBcImRlc2NcIjogRExQX0lORk8sXG4gICAgICAgIFwiaW1nXCI6IFwiZGxwLmpwZ1wiXG4gICAgfVxuXVxuXG5leHBvcnQgY29uc3QgRFVNTVlfUEFQRVIgPSBbe1xuICAgIGRhdGFzZXRzOiBcImh0dHBzOi8vbGlua2VkaW4uY29tXCIsXG4gICAgaWQ6IFwiMVwiLFxuICAgIHRpdGxlOiBcIkF0dGVudGlvbiBpcyBhbGwgeW91IG5lZWRcIixcbiAgICB0YWdzOiBbeyBuYW1lOiBcIkhlcmUgSSBnb1wiIH0sIHsgbmFtZTogXCJtYWNoaW5lIGxlYXJuaW5nXCIgfSwgeyBuYW1lOiBcIkhlcmUgSSBnb1wiIH0sIHsgbmFtZTogXCJtYWNoaW5lIGxlYXJuaW5nXCIgfSwgeyBuYW1lOiBcIkhlcmUgSSBnb1wiIH0sIHsgbmFtZTogXCJtYWNoaW5lIGxlYXJuaW5nXCIgfV0sXG4gICAgYWJzdHJhY3Q6IFwiRG91YmxlTUwgaXMgYW4gb3Blbi1zb3VyY2UgUHl0aG9uIGxpYnJhcnkgaW1wbGVtZW50aW5nIHRoZSBkb3VibGUgbWFjaGluZSBsZWFybmluZyBmcmFtZXdvcmsgb2YgQ2hlcm5vemh1a292IGV0IGFsLiAoMjAxOCkgZm9yIGEgdmFyaWV0eSBvZiBjYXVzYWwgbW9kZWxzLiBJdCBjb250YWlucyBmdW5jdGlvbmFsaXRpZXMgZm9yIHZhbGlkIHN0YXRpc3RpY2FsIGluZmVyZW5jZSBvbiBjYXVzYWwgcGFyYW1ldGVycyB3aGVuIHRoZSBlc3RpbWF0aW9uIG9mIG51aXNhbmNlIHBhcmFtZXRlcnMgaXMgYmFzZWQgb24gbWFjaGluZSBsZWFybmluZyBtZXRob2RzLiBUaGUgb2JqZWN0LW9yaWVudGVkIGltcGxlbWVudGF0aW9uIG9mIERvdWJsZU1MIHByb3ZpZGVzIGEgaGlnaCBmbGV4aWJpbGl0eSBpbiB0ZXJtcyBvZiBtb2RlbCBzcGVjaWZpY2F0aW9ucyBhbmQgbWFrZXMgaXQgZWFzaWx5IGV4dGVuZGFibGUuIFRoZSBwYWNrYWdlIGlzIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBhbmQgcmVsaWVzIG9uIGNvcmUgbGlicmFyaWVzIGZyb20gdGhlIHNjaWVudGlmaWMgUHl0aG9uIGVjb3N5c3RlbTogc2Npa2l0LWxlYXJuLCBudW1weSwgcGFuZGFzLCBzY2lweSwgc3RhdHNtb2RlbHMgYW5kIGpvYmxpYi4gU291cmNlIGNvZGUsIGRvY3VtZW50YXRpb24gYW5kIGFuIGV4dGVuc2l2ZSB1c2VyIGd1aWRlIGNhbiBiZSBmb3VuZCBhdCB0aGlzIGh0dHBzIFVSTCBhbmQgdGhpcyBodHRwcyBVUkwuXCIsXG4gICAgbGluazogXCJodHRwczovL2FyeGl2Lm9yZy9hYnMvMTgwNC4wMjc2N1wiLFxuICAgIGNvZGVzOiBbe1xuICAgICAgICBsaW5rOiBcImh0dHBzOi8veW91dHViZS5jb21cIixcbiAgICAgICAgbGFuZ3VhZ2U6IFwidGVuc29yZmxvd1wiXG4gICAgfV0sXG4gICAgbWV0YTogXCI2IHBhZ2VzLCAyIGZpZ3VyZXNcIixcbiAgICBwdWJsaXNoZWREYXRlOiBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCksXG4gICAgYXV0aG9yczogW3sgJ25hbWUnOiAnUGhpbGlwcCBCYWNoJyB9LCB7ICduYW1lJzogJyBWaWN0b3IgQ2hlcm5vemh1a292JyB9LCB7ICduYW1lJzogJyBNYWx0ZSBTLiBLdXJ6JyB9LCB7ICduYW1lJzogJyBNYXJ0aW4gU3BpbmRsZXInIH0sIHsgJ25hbWUnOiAnUGhpbGlwcCBCYWNoJyB9LCB7ICduYW1lJzogJyBWaWN0b3IgQ2hlcm5vemh1a292JyB9LCB7ICduYW1lJzogJyBNYWx0ZSBTLiBLdXJ6JyB9LCB7ICduYW1lJzogJyBNYXJ0aW4gU3BpbmRsZXInIH1dXG59LFxue1xuICAgIGlkOiAnMicsXG4gICAgdGl0bGU6IFwiQXR0ZW50aW9uIGlzIGFsbCB5b3UgbmVlZFwiLFxuICAgIHRhZ3M6IFt7IG5hbWU6IFwiSGVyZSBJIGdvXCIgfV0sXG4gICAgYWJzdHJhY3Q6IFwiVGhpcyBpcyBhYnN0cmFjdCBha3NkamxrYXNka2FranNsZGtqbGFzZGprbGFkc2xramFkc2xqa2xqYSBzZGtsa2phc2RrYXNsamRsIGFza2Rsa2FzZGpsa2FzbGRramFzbGtqZGxhc2tqZGpsYXNka2phc2xqZGsgIGEgc2RrayBkYWxza2psIGFkc2ogYWRzIGFkc2xramEgZHNsamthZCBzamxrYSBzZGprbGFsamtzIGRsa2phZCBzbGprIGRzamxrYSBkc2Egc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9mYWNlYm9vay5jb21cIixcbiAgICBjb2RlczogW3tcbiAgICAgICAgbGluazogXCJodHRwczovL3lvdXR1YmUuY29tXCIsXG4gICAgICAgIGxhbmd1YWdlOiBcInRlbnNvcmZsb3dcIlxuICAgIH1dLFxuICAgIG1ldGE6IFwiNiBwYWdlcywgMiBmaWd1cmVzXCIsXG4gICAgYXV0aG9yczogW3sgJ25hbWUnOiAnUGhpbGlwcCBCYWNoJyB9LCB7ICduYW1lJzogJyBWaWN0b3IgQ2hlcm5vemh1a292JyB9LCB7ICduYW1lJzogJyBNYWx0ZSBTLiBLdXJ6JyB9LCB7ICduYW1lJzogJyBNYXJ0aW4gU3BpbmRsZXInIH1dLFxuICAgIHB1Ymxpc2hlZERhdGU6IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKVxufVxuXTtcblxuZXhwb3J0IGNvbnN0IERVTU1ZX0ZFRUQgPSBbXG4gICAge1xuICAgICAgICBcImlkXCI6ICcxJyxcbiAgICAgICAgdXNlckltYWdlOiBcImh0dHBzOi8vc2NvbnRlbnQuZmt0bTMtMS5mbmEuZmJjZG4ubmV0L3YvdDEuNjQzNS05LzE4NTk0MTIxMl8zOTg5ODk1OTM0NDIzNzE4XzM3MTA5NTE2MjU0NTA4OTI4MDdfbi5qcGc/X25jX2NhdD0xMDQmY2NiPTEtMyZfbmNfc2lkPThiZmViOSZfbmNfb2hjPWxIdnNMVXpFc0FrQVg5UFdaQ18mX25jX2h0PXNjb250ZW50LmZrdG0zLTEuZm5hJm9oPThmMTk1MmE5ZmE3ZmMyZjYyOGQ0MTYxZDkyZjRkYzQ4Jm9lPTYwQzRENjNGXCIsXG4gICAgICAgIHRpbWU6IFwiMjAyMS8xMC8zMFwiLFxuICAgICAgICB1c2VybmFtZTogXCJTR1wiLFxuICAgICAgICB0YWdzOiBbeyBuYW1lOiBcIm1sXCIgfSwgeyBuYW1lOiBcIlRIRSBQTEFDRSBJUyBDQUxMRUQgREhVTElLSEVMXCIgfSwgeyBuYW1lOiBcImFpXCIgfV0sXG4gICAgICAgIGlzT3duZXI6IGZhbHNlLFxuICAgICAgICB0ZXh0OiBcIjxwPkhlbGxvIFdvcmxkIDwvcD4gIDxoMT5Hb29kYnllIFdvcmxkPC9oMT4gXCJcblxuICAgIH0sIHtcbiAgICAgICAgXCJpZFwiOiAnMicsXG4gICAgICAgIHVzZXJJbWFnZTogXCJodHRwczovL3Njb250ZW50LmZrdG0zLTEuZm5hLmZiY2RuLm5ldC92L3QxLjY0MzUtOS8xODU5NDEyMTJfMzk4OTg5NTkzNDQyMzcxOF8zNzEwOTUxNjI1NDUwODkyODA3X24uanBnP19uY19jYXQ9MTA0JmNjYj0xLTMmX25jX3NpZD04YmZlYjkmX25jX29oYz1sSHZzTFV6RXNBa0FYOVBXWkNfJl9uY19odD1zY29udGVudC5ma3RtMy0xLmZuYSZvaD04ZjE5NTJhOWZhN2ZjMmY2MjhkNDE2MWQ5MmY0ZGM0OCZvZT02MEM0RDYzRlwiLFxuICAgICAgICB0aW1lOiBcIjIwMjEvMTAvMzBcIixcbiAgICAgICAgdXNlcm5hbWU6IFwiR2F1dGFtXCIsXG4gICAgICAgIHRhZ3M6IFt7IG5hbWU6IFwibWxcIiB9LCB7IG5hbWU6IFwiYWlcIiB9XSxcbiAgICAgICAgaXNPd25lcjogdHJ1ZSxcbiAgICAgICAgdGV4dDogYDxwPkhlbGxvIFdvcmxkPC9wPjxoMT5Hb29kYnllIFdvcmxkPC9oMT4gIGBcbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjogJzMnLFxuICAgICAgICB1c2VySW1hZ2U6IFwiaHR0cHM6Ly9zY29udGVudC5ma3RtMy0xLmZuYS5mYmNkbi5uZXQvdi90MS42NDM1LTkvMTg1OTQxMjEyXzM5ODk4OTU5MzQ0MjM3MThfMzcxMDk1MTYyNTQ1MDg5MjgwN19uLmpwZz9fbmNfY2F0PTEwNCZjY2I9MS0zJl9uY19zaWQ9OGJmZWI5Jl9uY19vaGM9bEh2c0xVekVzQWtBWDlQV1pDXyZfbmNfaHQ9c2NvbnRlbnQuZmt0bTMtMS5mbmEmb2g9OGYxOTUyYTlmYTdmYzJmNjI4ZDQxNjFkOTJmNGRjNDgmb2U9NjBDNEQ2M0ZcIixcbiAgICAgICAgdGltZTogXCIyMDIxLzEwLzMwXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcIkdhdXRhbVwiLFxuICAgICAgICB0YWdzOiBbeyBuYW1lOiBcIm1sXCIgfSwgeyBuYW1lOiBcImFpXCIgfV0sXG4gICAgICAgIGlzT3duZXI6IHRydWUsXG4gICAgICAgIHRleHQ6IGA8cD5IZWxsbyBXb3JsZDwvcD48aDE+R29vZGJ5ZSBXb3JsZDwvaDE+ICBgXG4gICAgfVxuXG5dXG5cbmV4cG9ydCBjb25zdCBEVU1NWV9DT01NRU5UUyA9IFtcbiAgICB7IHRleHQ6IFwiPHA+VGhlIENTUyA8Y29kZT5iYWNrZ3JvdW5kLWNvbG9yPC9jb2RlPiBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGFuIGVsZW1lbnQuPC9wPlwiLCBpc093bmVyOiB0cnVlLCBoYXNWb3RlZDogZmFsc2UsIGhhc0Jvb2ttYXJrZWQ6IGZhbHNlLCB2b3RlczogMTIzNDUgfSxcbiAgICB7IHRleHQ6IGA8cD5UaGUgQ1NTIDxjb2RlPmJhY2tncm91bmQtY29sb3I8L2NvZGU+IHByb3BlcnR5IGRlZmluZXMgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgYW4gZWxlbWVudC4gIDxpbWcgYWx0PVwiXCIgc3JjPVwiL2xvZ28ucG5nXCIgLyA+PC9wPmAsIGlzT3duZXI6IGZhbHNlLCBoYXNWb3RlZDogdHJ1ZSwgaGFzQm9va21hcmtlZDogdHJ1ZSwgdm90ZXM6IDE1NiB9LFxuICAgIHtcbiAgICAgICAgdGV4dDogYDxoMj5IVE1MIEJ1dHRvbnM8L2gyPlxuPHA+SFRNTCBidXR0b25zIGFyZSBkZWZpbmVkIHdpdGggdGhlIGJ1dHRvbiB0YWc6PC9wPlxuPGJ1dHRvbj5DbGljayBtZTwvYnV0dG9uPmAsIGlzT3duZXI6IHRydWUsIGhhc1ZvdGVkOiB0cnVlLCBoYXNCb29rbWFya2VkOiB0cnVlLCB2b3RlczogNjQ1NDY1NFxuICAgIH0sXG5dIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XG5pbXBvcnQgeyBEVU1NWV9QQVBFUiB9IGZyb20gXCIuLi8uLi9kdW1teVwiO1xuaW1wb3J0IHsgQ2xhc3NOYW1lTWFwIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9zdHlsZXNcIjtcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblwiO1xuaW1wb3J0IEFjY29yZGlvblN1bW1hcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnlcIjtcbmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzXCI7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHt9XG5pbnRlcmZhY2UgSVBhcGVyIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYXV0aG9yczogeyBuYW1lOiBzdHJpbmcgfVtdO1xuICBhYnN0cmFjdDogc3RyaW5nO1xuICBwdWJsaXNoZWREYXRlOiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbiAgbW9kZWw/OiBzdHJpbmc7XG4gIGRhdGFzZXRzPzogc3RyaW5nO1xuICBtZXRhPzogc3RyaW5nO1xuICB0YWdzPzogeyBuYW1lOiBzdHJpbmcgfVtdO1xuICBjb2Rlcz86IHsgbGFuZ3VhZ2U6IHN0cmluZzsgbGluazogc3RyaW5nIH1bXTtcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgbWFyZ2luVG9wOiA0MCxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgbWFyZ2luOiA0MCxcbiAgICBwYWRkaW5nOiAxMCxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6IDM2LFxuICB9LFxuICBhdXRob3JzOiB7XG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIGVhY2hBdXRob3I6IHtcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIGFic3RyYWN0OiB7fSxcbiAgYmVhdXRpZnk6IHtcbiAgICBtYXJnaW5Cb3R0b206IDIwLFxuICB9LFxuXG4gIHNwZWNpYWxMYWJlbDoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYm9yZGVyQm90dG9tOiBcIjVweCBzb2xpZCB0ZWFsXCIsXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICB9LFxuICBsYWJlbDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbiAgbWV0YToge30sXG4gIGljb246IHtcbiAgICB3aWR0aDogMjAsXG4gICAgaGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gIH0sXG4gIGRhdGU6IHt9LFxuICBsaW5rOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICB9LFxuICBjb2RlOiB7XG4gICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICB9LFxuICBkYXRhc2V0czoge1xuICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgfSxcbiAgbGFuZ0ljb246IHtcbiAgICB3aWR0aDogMjAsXG4gICAgaGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgfSxcbiAgdGFnczoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICB9LFxuICB0YWc6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiM4MDAwMDBcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgd2lkdGg6IFwiZml0LWNvbnRlbnRcIixcbiAgICBwYWRkaW5nOiA0LFxuICAgIGJvcmRlclJhZGl1czogNCxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gICAgbWFyZ2luUmlnaHQ6IDEwLFxuICAgIG1hcmdpblRvcDogMTAsXG4gIH0sXG4gIGhlYWRpbmc6IHtcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDIwKSxcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICB9LFxuICBkZXRhaWw6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICB9LFxuICBwZGY6IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gIH0sXG59KSk7XG5cbmNvbnN0IFBhcGVyUGFnZTogUmVhY3QuRkM8SVByb3BzPiA9IChwcm9wczogSVByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzbHVnID0gcXVlcnkuc2x1ZztcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIGNvbnN0IGRhdGE6IElQYXBlciA9IERVTU1ZX1BBUEVSWzBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVhZGVyIHRpdGxlPVwiUGFwZXJcIiAvPlxuICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e2RhdGEudGl0bGV9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhvcnN9PlxuICAgICAgICAgIHtkYXRhLmF1dGhvcnMubWFwKChhdXRob3IpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZWFjaEF1dGhvcn0+e2F1dGhvci5uYW1lfTwvc3Bhbj47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAge3NwZWNpYWxMYWJlbChcImFic3RyYWN0XCIsIFwiQUJTVFJBQ1RcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWJzdHJhY3R9PntkYXRhLmFic3RyYWN0fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7ZGF0YS50YWdzICYmIGRhdGEudGFncy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdzfT5cbiAgICAgICAgICAgICAge2RhdGEudGFncy5tYXAoKHRhZzogeyBuYW1lOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWd9Pnt0YWcubmFtZX08L2Rpdj47XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEFjY29yZGlvbiBkZWZhdWx0RXhwYW5kZWQ+XG4gICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcbiAgICAgICAgICAgIGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn1cbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDFhLWNvbnRlbnRcIlxuICAgICAgICAgICAgaWQ9XCJwYW5lbDFhLWhlYWRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRpbmd9PkRldGFpbHM8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxuICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgICAgICB7c3BlY2lhbExhYmVsKFwiY2xvY2tcIiwgXCJQVUJMSVNIRUQgREFURVwiLCBjbGFzc2VzKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+e2RhdGEucHVibGlzaGVkRGF0ZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJpbmZvXCIsIFwiTUVUQVwiLCBjbGFzc2VzKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWV0YX0+e2RhdGEubWV0YX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iZWF1dGlmeX0+XG4gICAgICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJsaW5rXCIsIFwiTElOS1wiLCBjbGFzc2VzKX1cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtkYXRhLmxpbmt9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmxpbmt9YH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RhdGEubGlua31cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtkYXRhLmNvZGVzICYmXG4gICAgICAgICAgICAgIGRhdGEuY29kZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICBkYXRhLmNvZGVzWzBdLmxpbmsgJiZcbiAgICAgICAgICAgICAgZGF0YS5jb2Rlc1swXS5sYW5ndWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgICAgICAgICAge3NwZWNpYWxMYWJlbChcImNvZGVcIiwgXCJDT0RFXCIsIGNsYXNzZXMpfVxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17ZGF0YS5jb2Rlc1swXS5saW5rfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29kZX1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmNvZGVzWzBdLmxpbmt9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC8ke2RhdGEuY29kZXNbMF0ubGFuZ3VhZ2V9LnN2Z2B9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYW5nSWNvbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtkYXRhLmRhdGFzZXRzICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmVhdXRpZnl9PlxuICAgICAgICAgICAgICAgIHtzcGVjaWFsTGFiZWwoXCJkYXRhc2V0XCIsIFwiREFUQVNFVFNcIiwgY2xhc3Nlcyl9XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2RhdGEuZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzZXMuZGF0YXNldHN9YH1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7ZGF0YS5kYXRhc2V0c31cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2RhdGEubGluay5zdGFydHNXaXRoKFwiaHR0cHM6Ly9hcnhpdi5vcmcvYWJzL1wiKSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJlYXV0aWZ5fT5cbiAgICAgICAgICAgICAgICB7c3BlY2lhbExhYmVsKFwicGRmXCIsIFwiUERGXCIsIGNsYXNzZXMpfVxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9hcnhpdi5vcmcvcGRmLyR7ZGF0YS5saW5rXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi9cIilcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKC0xKVxuICAgICAgICAgICAgICAgICAgICAucG9wKCl9YH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5wZGZ9YH1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YGh0dHBzOi8vYXJ4aXYub3JnL3BkZi8ke2RhdGEubGlua1xuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgtMSlcbiAgICAgICAgICAgICAgICAgICAgLnBvcCgpfWB9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgIDwvUGFwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBzcGVjaWFsTGFiZWwgPSAoaWNvbjogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBjbGFzc2VzOiBDbGFzc05hbWVNYXApID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3BlY2lhbExhYmVsfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17YC8ke2ljb259LnN2Z2B9IGFsdD1cIlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFwZXJQYWdlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==