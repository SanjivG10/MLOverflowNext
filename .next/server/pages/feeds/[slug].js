(function() {
var exports = {};
exports.id = "pages/feeds/[slug]";
exports.ids = ["pages/feeds/[slug]"];
exports.modules = {

/***/ "./components/CommentList.tsx":
/*!************************************!*\
  !*** ./components/CommentList.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/bhairaja/mloverflow-next/components/CommentList.tsx";


const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  main: {
    marginTop: 40
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    justifyContent: "center"
  },
  commentContainer: {
    display: "flex",
    flexDirection: "column"
  },
  eachCommentContainer: {
    display: "flex",
    marginBottom: 10,
    border: "1px solid #bfbfbf",
    minHeight: 150
  },
  eachComment: {
    position: "relative",
    width: "100%"
  },
  label: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bolder"
  },
  editButtons: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10
  },
  edit: {
    background: "teal",
    padding: 4,
    color: "white",
    marginRight: 4,
    borderRadius: 10,
    "&:hover": {
      cursor: "pointer"
    }
  },
  delete: {
    background: "#800000",
    padding: 4,
    color: "white",
    borderRadius: 10,
    "&:hover": {
      cursor: "pointer"
    }
  },
  voteUp: {
    width: 36,
    height: 36,
    padding: 2
  },
  voteContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#FAF8F9",
    textAlign: "center",
    marginRight: 10
  },
  bookmark: {
    height: 20,
    width: 20,
    position: "absolute",
    right: "10px !important "
  }
}));

const CommentList = ({
  comments
}) => {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.container,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.label,
      children: "RECENT COMMENTS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined), comments.map(comment => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.eachCommentContainer,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.voteContainer,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            alt: "",
            src: comment.hasVoted ? "/upDone.svg" : "/up.svg",
            className: classes.voteUp
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: getVotesInNumbers(comment.votes)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.eachComment,
          children: [comment.isOwner && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.editButtons,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: comment.hasBookmarked ? "/bookmarked.svg" : "/bookmark.svg",
              alt: "",
              className: classes.bookmark
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes.edit,
              children: "edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 19
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: classes.delete,
              children: "delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 17
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "renderHTML",
            dangerouslySetInnerHTML: {
              __html: comment.text
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, undefined);
};

const getVotesInNumbers = num => {
  if (num > 999999) return Math.abs(num) > 999999 ? (Math.abs(num) / 1000000).toFixed(1) + "m" : Math.abs(num);
  return Math.abs(num) > 999 ? (Math.abs(num) / 1000).toFixed(1) + "k" : Math.abs(num);
};

/* harmony default export */ __webpack_exports__["default"] = (CommentList);

/***/ }),

/***/ "./components/Feed.tsx":
/*!*****************************!*\
  !*** ./components/Feed.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Share */ "@material-ui/icons/Share");
/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Menu */ "./components/Menu.tsx");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "/home/bhairaja/mloverflow-next/components/Feed.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.createStyles)({
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
}));

const Feeds = props => {
  const classes = useStyles();
  const {
    time,
    userImage,
    username,
    tags,
    isOwner,
    text,
    id
  } = props;
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);

  const editFeed = () => {
    closeAnchor();
  };

  const bookmark = () => {
    closeAnchor();
  };

  const menuOptions = [...(isOwner ? [{
    name: "Edit",
    onClick: editFeed,
    icon: "edit.svg"
  }] : []), {
    name: "Bookmark",
    onClick: bookmark,
    icon: "bookmark.svg"
  }];

  const renderTags = myTags => {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.tagContainer,
      children: myTags.map(tag => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.tag,
          children: tag.name
        }, tag.name, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, undefined);
  };

  const setAnchor = event => {
    setAnchorEl(event.currentTarget);
  };

  const closeAnchor = () => {
    setAnchorEl(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: classes.root,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4___default()), {
      avatar: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7___default()), {
        "aria-label": "recipe",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: userImage ? userImage : "/avatar.svg",
          alt: "",
          className: classes.avatar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }, undefined),
      action: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default()), {
          "aria-label": "settings",
          onClick: setAnchor,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_12__.default, {
          options: menuOptions,
          anchor: anchorEl,
          closeAnchor: closeAnchor
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 13
        }, undefined)]
      }, void 0, true),
      title: username,
      subheader: time
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, undefined), tags && tags.length > 0 && renderTags(tags), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_13___default()), {
      className: classes.media,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/LARGE_elevation.jpg/1200px-LARGE_elevation.jpg",
      title: "feed"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default()), {
      disableSpacing: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default()), {
        "aria-label": "add to favorites",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/up.svg",
          alt: "asd",
          className: classes.vote
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default()), {
        "aria-label": "share",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default()), {
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
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Feeds);

/***/ }),

/***/ "./components/Forms/CommentForm/constants.ts":
/*!***************************************************!*\
  !*** ./components/Forms/CommentForm/constants.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeholder": function() { return /* binding */ placeholder; }
/* harmony export */ });
const placeholder = "Type a comment";

/***/ }),

/***/ "./components/Forms/CommentForm/index.tsx":
/*!************************************************!*\
  !*** ./components/Forms/CommentForm/index.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! draftjs-to-html */ "draftjs-to-html");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TextEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TextEditor */ "./components/Forms/TextEditor/index.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./components/Forms/CommentForm/constants.ts");


var _jsxFileName = "/home/bhairaja/mloverflow-next/components/Forms/CommentForm/index.tsx";







const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(theme => ({
  container: {},
  button: {
    marginBottom: 20,
    background: "teal",
    color: "white",
    "&:hover": {
      background: "black"
    }
  },
  editor: {
    border: "10px solid #FAF8F9"
  },
  commentButton: {
    marginTop: 10,
    background: "teal",
    color: "white",
    "&:hover": {
      background: "black"
    }
  }
}));

const CommentForm = () => {
  const {
    0: commentType,
    1: setCommentType
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("E");
  const {
    0: editorState,
    1: setEditorState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(draft_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.createEmpty());
  const {
    0: uploadedImages,
    1: setUploadedImages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: clicked,
    1: setClicked
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const classes = useStyles();

  function uploadCallback(file) {
    return new Promise((resolve, reject) => {
      const imageObject = {
        file,
        localSrc: URL.createObjectURL(file)
      };
      const images = [...uploadedImages, imageObject];
      setUploadedImages(images);
      resolve({
        data: {
          link: imageObject.localSrc
        }
      });
    });
  }

  const onEditorStateChange = newEditorState => {
    setEditorState(newEditorState);
    const rawState = (0,draft_js__WEBPACK_IMPORTED_MODULE_4__.convertToRaw)(newEditorState.getCurrentContent());
    const html = draftjs_to_html__WEBPACK_IMPORTED_MODULE_2___default()(rawState);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.container,
    children: !clicked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
      className: classes.button,
      color: "secondary",
      onClick: () => setClicked(true),
      children: "Add Comment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, undefined) : commentType === "E" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: classes.editor,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextEditor__WEBPACK_IMPORTED_MODULE_5__.default, {
          onEditorStateChange: onEditorStateChange,
          editorState: editorState,
          uploadCallback: uploadCallback,
          placeholder: _constants__WEBPACK_IMPORTED_MODULE_7__.placeholder
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
        className: classes.commentButton,
        size: "large",
        children: "Comment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, undefined)]
    }, void 0, true) : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

/***/ }),

/***/ "./components/Forms/TextEditor/constants.ts":
/*!**************************************************!*\
  !*** ./components/Forms/TextEditor/constants.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colors": function() { return /* binding */ colors; },
/* harmony export */   "placeholder": function() { return /* binding */ placeholder; },
/* harmony export */   "emojis": function() { return /* binding */ emojis; }
/* harmony export */ });
const colors = ["rgb(97,189,109)", "rgb(26,188,156)", "rgb(84,172,210)", "rgb(44,130,201)", "rgb(147,101,184)", "rgb(71,85,119)", "rgb(204,204,204)", "rgb(65,168,95)", "rgb(0,168,133)", "rgb(61,142,185)", "rgb(41,105,176)", "rgb(85,57,130)", "rgb(40,50,78)", "rgb(0,0,0)", "rgb(247,218,100)", "rgb(251,160,38)", "rgb(235,107,86)", "rgb(226,80,65)", "rgb(163,143,132)", "rgb(239,239,239)", "rgb(255,255,255)", "rgb(250,197,28)", "rgb(243,121,52)", "rgb(209,72,65)", "rgb(184,49,47)", "rgb(124,112,107)", "rgb(209,213,216)"];
const placeholder = "start typing ...";
const emojis = ["😀", "😁", "😂", "😃", "😉", "😋", "😎", "😍", "😗", "🤗", "🤔", "😣", "😫", "😴", "😌", "🤓", "😛", "😜", "😠", "😇", "😷", "😈", "👻", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "🙈", "🙉", "🙊", "👼", "👮", "🕵", "💂", "👳", "🎅", "👸", "👰", "👲", "🙍", "🙇", "🚶", "🏃", "💃", "⛷", "🏂", "🏌", "🏄", "🚣", "🏊", "⛹", "🏋", "🚴", "👫", "💪", "👈", "👉", "👉", "👆", "🖕", "👇", "🖖", "🤘", "🖐", "👌", "👍", "👎", "✊", "👊", "👏", "🙌", "🙏", "🐵", "🐶", "🐇", "🐥", "🐸", "🐌", "🐛", "🐜", "🐝", "🍉", "🍄", "🍔", "🍤", "🍨", "🍪", "🎂", "🍰", "🍾", "🍷", "🍸", "🍺", "🌍", "🚑", "⏰", "🌙", "🌝", "🌞", "⭐", "🌟", "🌠", "🌨", "🌩", "⛄", "🔥", "🎄", "🎈", "🎉", "🎊", "🎁", "🎗", "🏀", "🏈", "🎲", "🔇", "🔈", "📣", "🔔", "🎵", "🎷", "💰", "🖊", "📅", "✅", "❎", "💯"];

/***/ }),

/***/ "./components/Forms/TextEditor/index.tsx":
/*!***********************************************!*\
  !*** ./components/Forms/TextEditor/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TextEditor; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./components/Forms/TextEditor/constants.ts");

var _jsxFileName = "/home/bhairaja/mloverflow-next/components/Forms/TextEditor/index.tsx";


const Editor = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-draft-wysiwyg */ "react-draft-wysiwyg", 23)).then(mod => mod.Editor), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-draft-wysiwyg */ "react-draft-wysiwyg")],
    modules: ["../components/Forms/TextEditor/index.tsx -> " + "react-draft-wysiwyg"]
  }
});

function TextEditor({
  editorState,
  placeholder,
  onEditorStateChange,
  uploadCallback
}) {
  const toolbarConfig = {
    options: ["link", "list", "textAlign", "inline", "colorPicker", "embedded", "emoji", "image", "remove", "history"],
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
      uploadCallback,
      uploadEnabled: true,
      alignmentEnabled: true,
      previewImage: true,
      inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
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
    stripPastedStyles: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, this);
}

/***/ }),

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

/***/ "./components/Menu.tsx":
/*!*****************************!*\
  !*** ./components/Menu.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/bhairaja/mloverflow-next/components/Menu.tsx";




const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(theme => (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.createStyles)({
  icon: {
    height: 20,
    width: 20,
    marginRight: 10
  }
}));

const MyMenu = ({
  options,
  anchor,
  closeAnchor
}) => {
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "simple-menu",
      anchorEl: anchor,
      keepMounted: true,
      open: Boolean(anchor),
      onClose: closeAnchor,
      children: options.map(option => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default()), {
          onClick: option.onClick,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: option.icon,
            alt: "",
            className: classes.icon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: option.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, undefined)]
        }, option.name, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (MyMenu);

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

/***/ "./pages/feeds/[slug].tsx":
/*!********************************!*\
  !*** ./pages/feeds/[slug].tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Header */ "./components/Header.tsx");
/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Feed */ "./components/Feed.tsx");
/* harmony import */ var _dummy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dummy */ "./dummy/index.ts");
/* harmony import */ var _components_Forms_CommentForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Forms/CommentForm */ "./components/Forms/CommentForm/index.tsx");
/* harmony import */ var _components_CommentList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../components/CommentList */ "./components/CommentList.tsx");

var _jsxFileName = "/home/bhairaja/mloverflow-next/pages/feeds/[slug].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(theme => ({
  main: {
    marginTop: 40
  },
  container: {
    display: "flex",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    justifyContent: "center"
  },
  feed: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  commentContainer: {
    marginTop: 20
  },
  commentList: {}
}));

const FeedPage = () => {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const slug = query.slug;
  const classes = useStyles();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: classes.main,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__.default, {
      title: "Feeds"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
      container: true,
      spacing: 3,
      className: classes.container,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default()), {
        item: true,
        sm: 6,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: classes.feed,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Feed__WEBPACK_IMPORTED_MODULE_6__.default, _objectSpread({}, _dummy__WEBPACK_IMPORTED_MODULE_7__.DUMMY_FEED[1]), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.commentContainer,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Forms_CommentForm__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.commentList,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CommentList__WEBPACK_IMPORTED_MODULE_9__.default, {
              comments: _dummy__WEBPACK_IMPORTED_MODULE_7__.DUMMY_COMMENTS
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FeedPage);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Avatar");;

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Card");;

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/CardActions");;

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/CardContent");;

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/CardHeader");;

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/CardMedia");;

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Grid");;

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/IconButton");;

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Menu");;

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/MenuItem");;

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

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/MoreVert");;

/***/ }),

/***/ "@material-ui/icons/Share":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Share" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Share");;

/***/ }),

/***/ "draft-js":
/*!***************************!*\
  !*** external "draft-js" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("draft-js");;

/***/ }),

/***/ "draftjs-to-html":
/*!**********************************!*\
  !*** external "draftjs-to-html" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("draftjs-to-html");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

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

/***/ "react-draft-wysiwyg":
/*!**************************************!*\
  !*** external "react-draft-wysiwyg" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-draft-wysiwyg");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/feeds/[slug].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC50c3giLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS8uL2NvbXBvbmVudHMvRmVlZC50c3giLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS8uL2NvbXBvbmVudHMvRm9ybXMvQ29tbWVudEZvcm0vY29uc3RhbnRzLnRzIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvLi9jb21wb25lbnRzL0Zvcm1zL0NvbW1lbnRGb3JtL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlLy4vY29tcG9uZW50cy9Gb3Jtcy9UZXh0RWRpdG9yL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlLy4vY29tcG9uZW50cy9Gb3Jtcy9UZXh0RWRpdG9yL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlLy4vY29tcG9uZW50cy9IZWFkZXIudHN4Iiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvLi9jb21wb25lbnRzL01lbnUudHN4Iiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvLi9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS8uL2R1bW15L2luZGV4LnRzIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvLi9wYWdlcy9mZWVkcy9bc2x1Z10udHN4Iiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NoYXJlXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS9leHRlcm5hbCBcImRyYWZ0LWpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS9leHRlcm5hbCBcImRyYWZ0anMtdG8taHRtbFwiIiwid2VicGFjazovL25leHQtcHJhY3Rpc2UvZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1wcmFjdGlzZS9leHRlcm5hbCBcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIiIsIndlYnBhY2s6Ly9uZXh0LXByYWN0aXNlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFpbiIsIm1hcmdpblRvcCIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImNvbW1lbnRDb250YWluZXIiLCJlYWNoQ29tbWVudENvbnRhaW5lciIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsIm1pbkhlaWdodCIsImVhY2hDb21tZW50IiwicG9zaXRpb24iLCJsYWJlbCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsImVkaXRCdXR0b25zIiwiZWRpdCIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJkZWxldGUiLCJ2b3RlVXAiLCJoZWlnaHQiLCJ2b3RlQ29udGFpbmVyIiwiYm9va21hcmsiLCJyaWdodCIsIkNvbW1lbnRMaXN0IiwiY29tbWVudHMiLCJjbGFzc2VzIiwibWFwIiwiY29tbWVudCIsImhhc1ZvdGVkIiwiZ2V0Vm90ZXNJbk51bWJlcnMiLCJ2b3RlcyIsImlzT3duZXIiLCJoYXNCb29rbWFya2VkIiwiX19odG1sIiwidGV4dCIsIm51bSIsIk1hdGgiLCJhYnMiLCJ0b0ZpeGVkIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsInN0eWxlcyIsIm9uSG92ZXIiLCJhdmF0YXIiLCJ0YWdDb250YWluZXIiLCJmbGV4V3JhcCIsImJvcmRlckJvdHRvbSIsInRhZyIsImxpbmVIZWlnaHQiLCJhbGlnbkl0ZW1zIiwidm90ZSIsIm1lZGlhIiwicGFkZGluZ1RvcCIsIkZlZWRzIiwicHJvcHMiLCJ0aW1lIiwidXNlckltYWdlIiwidXNlcm5hbWUiLCJ0YWdzIiwiaWQiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiUmVhY3QiLCJlZGl0RmVlZCIsImNsb3NlQW5jaG9yIiwibWVudU9wdGlvbnMiLCJuYW1lIiwib25DbGljayIsImljb24iLCJyZW5kZXJUYWdzIiwibXlUYWdzIiwic2V0QW5jaG9yIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJlZGl0b3IiLCJjb21tZW50QnV0dG9uIiwiQ29tbWVudEZvcm0iLCJjb21tZW50VHlwZSIsInNldENvbW1lbnRUeXBlIiwidXNlU3RhdGUiLCJlZGl0b3JTdGF0ZSIsInNldEVkaXRvclN0YXRlIiwiRWRpdG9yU3RhdGUiLCJ1cGxvYWRlZEltYWdlcyIsInNldFVwbG9hZGVkSW1hZ2VzIiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJ1cGxvYWRDYWxsYmFjayIsImZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltYWdlT2JqZWN0IiwibG9jYWxTcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJpbWFnZXMiLCJkYXRhIiwibGluayIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJuZXdFZGl0b3JTdGF0ZSIsInJhd1N0YXRlIiwiY29udmVydFRvUmF3IiwiZ2V0Q3VycmVudENvbnRlbnQiLCJodG1sIiwiZHJhZnRUb0h0bWwiLCJjb2xvcnMiLCJlbW9qaXMiLCJFZGl0b3IiLCJkeW5hbWljIiwidGhlbiIsIm1vZCIsInNzciIsIlRleHRFZGl0b3IiLCJ0b29sYmFyQ29uZmlnIiwib3B0aW9ucyIsImlubGluZSIsImluRHJvcGRvd24iLCJibG9ja1R5cGUiLCJsaXN0IiwiY29sb3JQaWNrZXIiLCJzaG93T3Blbk9wdGlvbk9uSG92ZXIiLCJkZWZhdWx0VGFyZ2V0T3B0aW9uIiwiZW1vamkiLCJpbWFnZSIsInVwbG9hZEVuYWJsZWQiLCJhbGlnbm1lbnRFbmFibGVkIiwicHJldmlld0ltYWdlIiwiaW5wdXRBY2NlcHQiLCJhbHQiLCJwcmVzZW50IiwibWFuZGF0b3J5IiwiZGVmYXVsdFNpemUiLCJoaXN0b3J5IiwiSGVhZGVyIiwidGl0bGUiLCJTTE9HQU4iLCJNeU1lbnUiLCJhbmNob3IiLCJCb29sZWFuIiwib3B0aW9uIiwiU0VBUkNIX1BMQUNFSE9MREVSIiwiTUFJTl9MQUJFTF9IT01FX1BBR0UiLCJTRUNPTkRBUllfTEFCRUxfSE9NRV9QQUdFIiwiVFdQX0lORk8iLCJZS19JTkZPIiwiRExQX0lORk8iLCJRVUlDS19MSU5LUyIsIkRVTU1ZX1BBUEVSIiwiZGF0YXNldHMiLCJhYnN0cmFjdCIsImNvZGVzIiwibGFuZ3VhZ2UiLCJtZXRhIiwicHVibGlzaGVkRGF0ZSIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsImF1dGhvcnMiLCJEVU1NWV9GRUVEIiwiRFVNTVlfQ09NTUVOVFMiLCJmZWVkIiwiY29tbWVudExpc3QiLCJGZWVkUGFnZSIsInF1ZXJ5IiwidXNlUm91dGVyIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUVDLEtBQUQsS0FBbUI7QUFDOUNDLE1BQUksRUFBRTtBQUNKQyxhQUFTLEVBQUU7QUFEUCxHQUR3QztBQUk5Q0MsV0FBUyxFQUFFO0FBQ1RDLFdBQU8sRUFBRSxNQURBO0FBRVRDLGlCQUFhLEVBQUUsUUFGTjtBQUdUQyxlQUFXLEVBQUUsTUFISjtBQUlUQyxjQUFVLEVBQUUsTUFKSDtBQUtUQyxTQUFLLEVBQUUsTUFMRTtBQU1UQyxrQkFBYyxFQUFFO0FBTlAsR0FKbUM7QUFhOUNDLGtCQUFnQixFQUFFO0FBQ2hCTixXQUFPLEVBQUUsTUFETztBQUVoQkMsaUJBQWEsRUFBRTtBQUZD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LCtDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2ZlZWRzL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+ICh7XG4gIG1haW46IHtcbiAgICBtYXJnaW5Ub3A6IDQwLFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG5cbiAgY29tbWVudENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gIH0sXG4gIGVhY2hDb21tZW50Q29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNiZmJmYmZcIixcbiAgICBtaW5IZWlnaHQ6IDE1MCxcbiAgfSxcbiAgZWFjaENvbW1lbnQ6IHtcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgfSxcbiAgbGFiZWw6IHtcbiAgICBmb250U2l6ZTogMjAsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgZm9udFdlaWdodDogXCJib2xkZXJcIixcbiAgfSxcbiAgZWRpdEJ1dHRvbnM6IHtcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgIG1hcmdpblRvcDogMTAsXG4gICAgbWFyZ2luTGVmdDogMTAsXG4gIH0sXG4gIGVkaXQ6IHtcbiAgICBiYWNrZ3JvdW5kOiBcInRlYWxcIixcbiAgICBwYWRkaW5nOiA0LFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgbWFyZ2luUmlnaHQ6IDQsXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcblxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIGRlbGV0ZToge1xuICAgIGJhY2tncm91bmQ6IFwiIzgwMDAwMFwiLFxuICAgIHBhZGRpbmc6IDQsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgIH0sXG4gIH0sXG4gIHZvdGVVcDoge1xuICAgIHdpZHRoOiAzNixcbiAgICBoZWlnaHQ6IDM2LFxuICAgIHBhZGRpbmc6IDIsXG4gIH0sXG4gIHZvdGVDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmQ6IFwiI0ZBRjhGOVwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gIH0sXG5cbiAgYm9va21hcms6IHtcbiAgICBoZWlnaHQ6IDIwLFxuICAgIHdpZHRoOiAyMCxcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHJpZ2h0OiBcIjEwcHggIWltcG9ydGFudCBcIixcbiAgfSxcbn0pKTtcblxuaW50ZXJmYWNlIElDb21tZW50IHtcbiAgdGV4dDogc3RyaW5nO1xuICBpc093bmVyOiBib29sZWFuO1xuICBoYXNWb3RlZDogYm9vbGVhbjtcbiAgaGFzQm9va21hcmtlZDogYm9vbGVhbjtcbiAgdm90ZXM6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNvbW1lbnRzOiBJQ29tbWVudFtdO1xufVxuXG5jb25zdCBDb21tZW50TGlzdDogUmVhY3QuRkM8SVByb3BzPiA9ICh7IGNvbW1lbnRzIH0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfT5SRUNFTlQgQ09NTUVOVFM8L2Rpdj5cbiAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQ6IElDb21tZW50KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZWFjaENvbW1lbnRDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudm90ZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIHNyYz17Y29tbWVudC5oYXNWb3RlZCA/IFwiL3VwRG9uZS5zdmdcIiA6IFwiL3VwLnN2Z1wifVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy52b3RlVXB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXY+e2dldFZvdGVzSW5OdW1iZXJzKGNvbW1lbnQudm90ZXMpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lYWNoQ29tbWVudH0+XG4gICAgICAgICAgICAgIHtjb21tZW50LmlzT3duZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRCdXR0b25zfT5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICBjb21tZW50Lmhhc0Jvb2ttYXJrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIvYm9va21hcmtlZC5zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9ib29rbWFyay5zdmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib29rbWFya31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZWRpdH0+ZWRpdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWxldGV9PmRlbGV0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJyZW5kZXJIVE1MXCJ9XG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb21tZW50LnRleHQgfX1cbiAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFZvdGVzSW5OdW1iZXJzID0gKG51bTogbnVtYmVyKSA9PiB7XG4gIGlmIChudW0gPiA5OTk5OTkpXG4gICAgcmV0dXJuIE1hdGguYWJzKG51bSkgPiA5OTk5OTlcbiAgICAgID8gKE1hdGguYWJzKG51bSkgLyAxMDAwMDAwKS50b0ZpeGVkKDEpICsgXCJtXCJcbiAgICAgIDogTWF0aC5hYnMobnVtKTtcbiAgcmV0dXJuIE1hdGguYWJzKG51bSkgPiA5OTlcbiAgICA/IChNYXRoLmFicyhudW0pIC8gMTAwMCkudG9GaXhlZCgxKSArIFwia1wiXG4gICAgOiBNYXRoLmFicyhudW0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSwgY3JlYXRlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyXCI7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCI7XG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IFNoYXJlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1NoYXJlXCI7XG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnRcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL01lbnVcIjtcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGZWVkIHtcbiAgdGltZTogc3RyaW5nO1xuICB1c2VySW1hZ2U6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgdGFnczogeyBuYW1lOiBzdHJpbmcgfVtdO1xuICBpc093bmVyOiBib29sZWFuO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgLi4udGhlbWUuc3R5bGVzLm9uSG92ZXIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYXZhdGFyOiB7XG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIH0sXG4gICAgdGFnQ29udGFpbmVyOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkICNiZmJmYmZcIixcbiAgICAgIHBhZGRpbmc6IDIsXG4gICAgfSxcbiAgICB0YWc6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IDEwLFxuICAgICAgYmFja2dyb3VuZDogXCIjODAwMDAwXCIsXG4gICAgICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxuICAgICAgbWFyZ2luQm90dG9tOiAyLFxuICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgIHBhZGRpbmc6IDQsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzAwMFwiLFxuICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdm90ZToge1xuICAgICAgaGVpZ2h0OiAyNCxcbiAgICAgIHdpZHRoOiAyNCxcbiAgICB9LFxuICAgIG1lZGlhOiB7XG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBwYWRkaW5nVG9wOiBcIjU2LjI1JVwiLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5jb25zdCBGZWVkczogUmVhY3QuRkM8SUZlZWQ+ID0gKHByb3BzOiBJRmVlZCkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgdGltZSwgdXNlckltYWdlLCB1c2VybmFtZSwgdGFncywgaXNPd25lciwgdGV4dCwgaWQgfSA9IHByb3BzO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgZWRpdEZlZWQgPSAoKSA9PiB7XG4gICAgY2xvc2VBbmNob3IoKTtcbiAgfTtcbiAgY29uc3QgYm9va21hcmsgPSAoKSA9PiB7XG4gICAgY2xvc2VBbmNob3IoKTtcbiAgfTtcblxuICBjb25zdCBtZW51T3B0aW9ucyA9IFtcbiAgICAuLi4oaXNPd25lciA/IFt7IG5hbWU6IFwiRWRpdFwiLCBvbkNsaWNrOiBlZGl0RmVlZCwgaWNvbjogXCJlZGl0LnN2Z1wiIH1dIDogW10pLFxuICAgIHsgbmFtZTogXCJCb29rbWFya1wiLCBvbkNsaWNrOiBib29rbWFyaywgaWNvbjogXCJib29rbWFyay5zdmdcIiB9LFxuICBdO1xuXG4gIGNvbnN0IHJlbmRlclRhZ3MgPSAobXlUYWdzOiB7IG5hbWU6IHN0cmluZyB9W10pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGFnQ29udGFpbmVyfT5cbiAgICAgICAge215VGFncy5tYXAoKHRhZykgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17dGFnLm5hbWV9IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWd9PlxuICAgICAgICAgICAgICB7dGFnLm5hbWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgc2V0QW5jaG9yID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlQW5jaG9yID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgYXZhdGFyPXtcbiAgICAgICAgICA8QXZhdGFyIGFyaWEtbGFiZWw9XCJyZWNpcGVcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXt1c2VySW1hZ2UgPyB1c2VySW1hZ2UgOiBcIi9hdmF0YXIuc3ZnXCJ9XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICB9XG4gICAgICAgIGFjdGlvbj17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzZXR0aW5nc1wiIG9uQ2xpY2s9e3NldEFuY2hvcn0+XG4gICAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgIG9wdGlvbnM9e21lbnVPcHRpb25zfVxuICAgICAgICAgICAgICBhbmNob3I9e2FuY2hvckVsfVxuICAgICAgICAgICAgICBjbG9zZUFuY2hvcj17Y2xvc2VBbmNob3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICAgIHRpdGxlPXt1c2VybmFtZX1cbiAgICAgICAgc3ViaGVhZGVyPXt0aW1lfVxuICAgICAgLz5cbiAgICAgIHt0YWdzICYmIHRhZ3MubGVuZ3RoID4gMCAmJiByZW5kZXJUYWdzKHRhZ3MpfVxuICAgICAgPENhcmRNZWRpYVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XG4gICAgICAgIGltYWdlPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8zLzNkL0xBUkdFX2VsZXZhdGlvbi5qcGcvMTIwMHB4LUxBUkdFX2VsZXZhdGlvbi5qcGdcIlxuICAgICAgICB0aXRsZT1cImZlZWRcIlxuICAgICAgLz5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0ZXh0IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZW5kZXJIVE1MXCJcbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8Q2FyZEFjdGlvbnMgZGlzYWJsZVNwYWNpbmc+XG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJhZGQgdG8gZmF2b3JpdGVzXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvdXAuc3ZnXCIgYWx0PVwiYXNkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnZvdGV9IC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNoYXJlXCI+XG4gICAgICAgICAgPFNoYXJlSWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG5cbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImJvb2ttYXJrXCIgb25DbGljaz17Ym9va21hcmt9PlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Jvb2ttYXJrLnN2Z1wiIGFsdD1cIlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy52b3RlfSAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZlZWRzO1xuIiwiZXhwb3J0IGNvbnN0IHBsYWNlaG9sZGVyID0gXCJUeXBlIGEgY29tbWVudFwiIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBkcmFmdFRvSHRtbCBmcm9tIFwiZHJhZnRqcy10by1odG1sXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB7IEVkaXRvclN0YXRlLCBjb252ZXJ0VG9SYXcgfSBmcm9tIFwiZHJhZnQtanNcIjtcbmltcG9ydCBUZXh0RWRpdG9yIGZyb20gXCIuLi9UZXh0RWRpdG9yXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgcGxhY2Vob2xkZXIgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuaW50ZXJmYWNlIElJbWFnZSB7XG4gIGZpbGU6IEZpbGU7XG4gIGxvY2FsU3JjOiBzdHJpbmc7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcbiAgY29udGFpbmVyOiB7fSxcbiAgYnV0dG9uOiB7XG4gICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICBiYWNrZ3JvdW5kOiBcInRlYWxcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsXG4gICAgfSxcbiAgfSxcbiAgZWRpdG9yOiB7XG4gICAgYm9yZGVyOiBcIjEwcHggc29saWQgI0ZBRjhGOVwiLFxuICB9LFxuICBjb21tZW50QnV0dG9uOiB7XG4gICAgbWFyZ2luVG9wOiAxMCxcbiAgICBiYWNrZ3JvdW5kOiBcInRlYWxcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsXG4gICAgfSxcbiAgfSxcbn0pKTtcblxuY29uc3QgQ29tbWVudEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtjb21tZW50VHlwZSwgc2V0Q29tbWVudFR5cGVdID0gdXNlU3RhdGU8XCJUXCIgfCBcIkFcIiB8IFwiVlwiIHwgXCJFXCI+KFwiRVwiKTtcbiAgY29uc3QgW2VkaXRvclN0YXRlLCBzZXRFZGl0b3JTdGF0ZV0gPSB1c2VTdGF0ZShFZGl0b3JTdGF0ZS5jcmVhdGVFbXB0eSgpKTtcbiAgY29uc3QgW3VwbG9hZGVkSW1hZ2VzLCBzZXRVcGxvYWRlZEltYWdlc10gPSB1c2VTdGF0ZTxJSW1hZ2VbXT4oW10pO1xuICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICBmdW5jdGlvbiB1cGxvYWRDYWxsYmFjayhmaWxlOiBGaWxlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGltYWdlT2JqZWN0ID0ge1xuICAgICAgICBmaWxlLFxuICAgICAgICBsb2NhbFNyYzogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGltYWdlcyA9IFsuLi51cGxvYWRlZEltYWdlcywgaW1hZ2VPYmplY3RdO1xuICAgICAgc2V0VXBsb2FkZWRJbWFnZXMoaW1hZ2VzKTtcbiAgICAgIHJlc29sdmUoeyBkYXRhOiB7IGxpbms6IGltYWdlT2JqZWN0LmxvY2FsU3JjIH0gfSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBvbkVkaXRvclN0YXRlQ2hhbmdlID0gKG5ld0VkaXRvclN0YXRlOiBhbnkpID0+IHtcbiAgICBzZXRFZGl0b3JTdGF0ZShuZXdFZGl0b3JTdGF0ZSk7XG4gICAgY29uc3QgcmF3U3RhdGUgPSBjb252ZXJ0VG9SYXcobmV3RWRpdG9yU3RhdGUuZ2V0Q3VycmVudENvbnRlbnQoKSk7XG4gICAgY29uc3QgaHRtbCA9IGRyYWZ0VG9IdG1sKHJhd1N0YXRlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICB7IWNsaWNrZWQgPyAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDbGlja2VkKHRydWUpfVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIENvbW1lbnRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApIDogY29tbWVudFR5cGUgPT09IFwiRVwiID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVkaXRvcn0+XG4gICAgICAgICAgICA8VGV4dEVkaXRvclxuICAgICAgICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXtvbkVkaXRvclN0YXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XG4gICAgICAgICAgICAgIHVwbG9hZENhbGxiYWNrPXt1cGxvYWRDYWxsYmFja31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbW1lbnRCdXR0b259IHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgQ29tbWVudFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07XG4iLCJcbmV4cG9ydCBjb25zdCBjb2xvcnMgPSBbXG4gICAgXCJyZ2IoOTcsMTg5LDEwOSlcIixcbiAgICBcInJnYigyNiwxODgsMTU2KVwiLFxuICAgIFwicmdiKDg0LDE3MiwyMTApXCIsXG4gICAgXCJyZ2IoNDQsMTMwLDIwMSlcIixcbiAgICBcInJnYigxNDcsMTAxLDE4NClcIixcbiAgICBcInJnYig3MSw4NSwxMTkpXCIsXG4gICAgXCJyZ2IoMjA0LDIwNCwyMDQpXCIsXG4gICAgXCJyZ2IoNjUsMTY4LDk1KVwiLFxuICAgIFwicmdiKDAsMTY4LDEzMylcIixcbiAgICBcInJnYig2MSwxNDIsMTg1KVwiLFxuICAgIFwicmdiKDQxLDEwNSwxNzYpXCIsXG4gICAgXCJyZ2IoODUsNTcsMTMwKVwiLFxuICAgIFwicmdiKDQwLDUwLDc4KVwiLFxuICAgIFwicmdiKDAsMCwwKVwiLFxuICAgIFwicmdiKDI0NywyMTgsMTAwKVwiLFxuICAgIFwicmdiKDI1MSwxNjAsMzgpXCIsXG4gICAgXCJyZ2IoMjM1LDEwNyw4NilcIixcbiAgICBcInJnYigyMjYsODAsNjUpXCIsXG4gICAgXCJyZ2IoMTYzLDE0MywxMzIpXCIsXG4gICAgXCJyZ2IoMjM5LDIzOSwyMzkpXCIsXG4gICAgXCJyZ2IoMjU1LDI1NSwyNTUpXCIsXG4gICAgXCJyZ2IoMjUwLDE5NywyOClcIixcbiAgICBcInJnYigyNDMsMTIxLDUyKVwiLFxuICAgIFwicmdiKDIwOSw3Miw2NSlcIixcbiAgICBcInJnYigxODQsNDksNDcpXCIsXG4gICAgXCJyZ2IoMTI0LDExMiwxMDcpXCIsXG4gICAgXCJyZ2IoMjA5LDIxMywyMTYpXCIsXG5cbl1cbmV4cG9ydCBjb25zdCBwbGFjZWhvbGRlciA9IFwic3RhcnQgdHlwaW5nIC4uLlwiXG5leHBvcnQgY29uc3QgZW1vamlzID0gW1xuXG4gICAgXCLwn5iAXCIsXG4gICAgXCLwn5iBXCIsXG4gICAgXCLwn5iCXCIsXG4gICAgXCLwn5iDXCIsXG4gICAgXCLwn5iJXCIsXG4gICAgXCLwn5iLXCIsXG4gICAgXCLwn5iOXCIsXG4gICAgXCLwn5iNXCIsXG4gICAgXCLwn5iXXCIsXG4gICAgXCLwn6SXXCIsXG4gICAgXCLwn6SUXCIsXG4gICAgXCLwn5ijXCIsXG4gICAgXCLwn5irXCIsXG4gICAgXCLwn5i0XCIsXG4gICAgXCLwn5iMXCIsXG4gICAgXCLwn6STXCIsXG4gICAgXCLwn5ibXCIsXG4gICAgXCLwn5icXCIsXG4gICAgXCLwn5igXCIsXG4gICAgXCLwn5iHXCIsXG4gICAgXCLwn5i3XCIsXG4gICAgXCLwn5iIXCIsXG4gICAgXCLwn5G7XCIsXG4gICAgXCLwn5i6XCIsXG4gICAgXCLwn5i4XCIsXG4gICAgXCLwn5i5XCIsXG4gICAgXCLwn5i7XCIsXG4gICAgXCLwn5i8XCIsXG4gICAgXCLwn5i9XCIsXG4gICAgXCLwn5mAXCIsXG4gICAgXCLwn5mIXCIsXG4gICAgXCLwn5mJXCIsXG4gICAgXCLwn5mKXCIsXG4gICAgXCLwn5G8XCIsXG4gICAgXCLwn5GuXCIsXG4gICAgXCLwn5W1XCIsXG4gICAgXCLwn5KCXCIsXG4gICAgXCLwn5GzXCIsXG4gICAgXCLwn46FXCIsXG4gICAgXCLwn5G4XCIsXG4gICAgXCLwn5GwXCIsXG4gICAgXCLwn5GyXCIsXG4gICAgXCLwn5mNXCIsXG4gICAgXCLwn5mHXCIsXG4gICAgXCLwn5q2XCIsXG4gICAgXCLwn4+DXCIsXG4gICAgXCLwn5KDXCIsXG4gICAgXCLim7dcIixcbiAgICBcIvCfj4JcIixcbiAgICBcIvCfj4xcIixcbiAgICBcIvCfj4RcIixcbiAgICBcIvCfmqNcIixcbiAgICBcIvCfj4pcIixcbiAgICBcIuKbuVwiLFxuICAgIFwi8J+Pi1wiLFxuICAgIFwi8J+atFwiLFxuICAgIFwi8J+Rq1wiLFxuICAgIFwi8J+SqlwiLFxuICAgIFwi8J+RiFwiLFxuICAgIFwi8J+RiVwiLFxuICAgIFwi8J+RiVwiLFxuICAgIFwi8J+RhlwiLFxuICAgIFwi8J+WlVwiLFxuICAgIFwi8J+Rh1wiLFxuICAgIFwi8J+WllwiLFxuICAgIFwi8J+kmFwiLFxuICAgIFwi8J+WkFwiLFxuICAgIFwi8J+RjFwiLFxuICAgIFwi8J+RjVwiLFxuICAgIFwi8J+RjlwiLFxuICAgIFwi4pyKXCIsXG4gICAgXCLwn5GKXCIsXG4gICAgXCLwn5GPXCIsXG4gICAgXCLwn5mMXCIsXG4gICAgXCLwn5mPXCIsXG4gICAgXCLwn5C1XCIsXG4gICAgXCLwn5C2XCIsXG4gICAgXCLwn5CHXCIsXG4gICAgXCLwn5ClXCIsXG4gICAgXCLwn5C4XCIsXG4gICAgXCLwn5CMXCIsXG4gICAgXCLwn5CbXCIsXG4gICAgXCLwn5CcXCIsXG4gICAgXCLwn5CdXCIsXG4gICAgXCLwn42JXCIsXG4gICAgXCLwn42EXCIsXG4gICAgXCLwn42UXCIsXG4gICAgXCLwn42kXCIsXG4gICAgXCLwn42oXCIsXG4gICAgXCLwn42qXCIsXG4gICAgXCLwn46CXCIsXG4gICAgXCLwn42wXCIsXG4gICAgXCLwn42+XCIsXG4gICAgXCLwn423XCIsXG4gICAgXCLwn424XCIsXG4gICAgXCLwn426XCIsXG4gICAgXCLwn4yNXCIsXG4gICAgXCLwn5qRXCIsXG4gICAgXCLij7BcIixcbiAgICBcIvCfjJlcIixcbiAgICBcIvCfjJ1cIixcbiAgICBcIvCfjJ5cIixcbiAgICBcIuKtkFwiLFxuICAgIFwi8J+Mn1wiLFxuICAgIFwi8J+MoFwiLFxuICAgIFwi8J+MqFwiLFxuICAgIFwi8J+MqVwiLFxuICAgIFwi4puEXCIsXG4gICAgXCLwn5SlXCIsXG4gICAgXCLwn46EXCIsXG4gICAgXCLwn46IXCIsXG4gICAgXCLwn46JXCIsXG4gICAgXCLwn46KXCIsXG4gICAgXCLwn46BXCIsXG4gICAgXCLwn46XXCIsXG4gICAgXCLwn4+AXCIsXG4gICAgXCLwn4+IXCIsXG4gICAgXCLwn46yXCIsXG4gICAgXCLwn5SHXCIsXG4gICAgXCLwn5SIXCIsXG4gICAgXCLwn5OjXCIsXG4gICAgXCLwn5SUXCIsXG4gICAgXCLwn461XCIsXG4gICAgXCLwn463XCIsXG4gICAgXCLwn5KwXCIsXG4gICAgXCLwn5aKXCIsXG4gICAgXCLwn5OFXCIsXG4gICAgXCLinIVcIixcbiAgICBcIuKdjlwiLFxuICAgIFwi8J+Sr1wiLFxuXSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmNvbnN0IEVkaXRvciA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydChcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIikudGhlbigobW9kKSA9PiBtb2QuRWRpdG9yKSxcbiAgeyBzc3I6IGZhbHNlIH1cbik7XG5pbXBvcnQgeyBjb2xvcnMsIGVtb2ppcyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRWRpdG9yU3RhdGUgfSBmcm9tIFwicmVhY3QtZHJhZnQtd3lzaXd5Z1wiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgZWRpdG9yU3RhdGU6IEVkaXRvclN0YXRlO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBvbkVkaXRvclN0YXRlQ2hhbmdlOiAobmV3RWRpdG9yU3RhdGU6IGFueSkgPT4gdm9pZDtcbiAgdXBsb2FkQ2FsbGJhY2s6IChmaWxlOiBGaWxlKSA9PiB2b2lkO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEVkaXRvcih7XG4gIGVkaXRvclN0YXRlLFxuICBwbGFjZWhvbGRlcixcbiAgb25FZGl0b3JTdGF0ZUNoYW5nZSxcbiAgdXBsb2FkQ2FsbGJhY2ssXG59OiBJUHJvcHMpIHtcbiAgY29uc3QgdG9vbGJhckNvbmZpZyA9IHtcbiAgICBvcHRpb25zOiBbXG4gICAgICBcImxpbmtcIixcbiAgICAgIFwibGlzdFwiLFxuICAgICAgXCJ0ZXh0QWxpZ25cIixcbiAgICAgIFwiaW5saW5lXCIsXG4gICAgICBcImNvbG9yUGlja2VyXCIsXG4gICAgICBcImVtYmVkZGVkXCIsXG4gICAgICBcImVtb2ppXCIsXG4gICAgICBcImltYWdlXCIsXG4gICAgICBcInJlbW92ZVwiLFxuICAgICAgXCJoaXN0b3J5XCIsXG4gICAgXSxcbiAgICBpbmxpbmU6IHtcbiAgICAgIGluRHJvcGRvd246IGZhbHNlLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICBcImJvbGRcIixcbiAgICAgICAgXCJpdGFsaWNcIixcbiAgICAgICAgXCJ1bmRlcmxpbmVcIixcbiAgICAgICAgXCJzdHJpa2V0aHJvdWdoXCIsXG4gICAgICAgIFwibW9ub3NwYWNlXCIsXG4gICAgICAgIFwic3VwZXJzY3JpcHRcIixcbiAgICAgICAgXCJzdWJzY3JpcHRcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgICBibG9ja1R5cGU6IHtcbiAgICAgIGluRHJvcGRvd246IHRydWUsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIFwiTm9ybWFsXCIsXG4gICAgICAgIFwiSDFcIixcbiAgICAgICAgXCJIMlwiLFxuICAgICAgICBcIkgzXCIsXG4gICAgICAgIFwiSDRcIixcbiAgICAgICAgXCJINVwiLFxuICAgICAgICBcIkg2XCIsXG4gICAgICAgIFwiQmxvY2txdW90ZVwiLFxuICAgICAgICBcIkNvZGVcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICBpbkRyb3Bkb3duOiBmYWxzZSxcbiAgICB9LFxuICAgIHRleHRBbGlnbjoge1xuICAgICAgaW5Ecm9wZG93bjogZmFsc2UsXG4gICAgICBvcHRpb25zOiBbXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwicmlnaHRcIiwgXCJqdXN0aWZ5XCJdLFxuICAgIH0sXG4gICAgY29sb3JQaWNrZXI6IHtcbiAgICAgIGNvbG9yczogY29sb3JzLFxuICAgIH0sXG4gICAgbGluazoge1xuICAgICAgaW5Ecm9wZG93bjogZmFsc2UsXG4gICAgICBzaG93T3Blbk9wdGlvbk9uSG92ZXI6IHRydWUsXG4gICAgICBkZWZhdWx0VGFyZ2V0T3B0aW9uOiBcIl9zZWxmXCIsXG4gICAgICBvcHRpb25zOiBbXCJsaW5rXCIsIFwidW5saW5rXCJdLFxuICAgIH0sXG4gICAgZW1vamk6IHtcbiAgICAgIGVtb2ppczogZW1vamlzLFxuICAgIH0sXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVwbG9hZENhbGxiYWNrLFxuICAgICAgdXBsb2FkRW5hYmxlZDogdHJ1ZSxcbiAgICAgIGFsaWdubWVudEVuYWJsZWQ6IHRydWUsXG4gICAgICBwcmV2aWV3SW1hZ2U6IHRydWUsXG4gICAgICBpbnB1dEFjY2VwdDogXCJpbWFnZS9naWYsaW1hZ2UvanBlZyxpbWFnZS9qcGcsaW1hZ2UvcG5nLGltYWdlL3N2Z1wiLFxuICAgICAgYWx0OiB7IHByZXNlbnQ6IGZhbHNlLCBtYW5kYXRvcnk6IGZhbHNlIH0sXG4gICAgICBkZWZhdWx0U2l6ZToge1xuICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGhpc3Rvcnk6IHtcbiAgICAgIGluRHJvcGRvd246IGZhbHNlLFxuICAgICAgb3B0aW9uczogW1widW5kb1wiLCBcInJlZG9cIl0sXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxFZGl0b3JcbiAgICAgIHRvb2xiYXI9e3Rvb2xiYXJDb25maWd9XG4gICAgICBlZGl0b3JTdGF0ZT17ZWRpdG9yU3RhdGV9XG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICBlZGl0b3JDbGFzc05hbWU9XCJmZWVkRm9ybVJlYWN0XCJcbiAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJ3cmFwcGVyRm9ybVJlYWN0XCJcbiAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9e29uRWRpdG9yU3RhdGVDaGFuZ2V9XG4gICAgICBzdHJpcFBhc3RlZFN0eWxlcz17dHJ1ZX1cbiAgICAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgU0xPR0FOIH0gZnJvbSBcIi4vLi4vY29uc3RhbnRzXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHM6IElQcm9wcykge1xuICBjb25zdCB7IHRpdGxlIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57dGl0bGUgfHwgU0xPR0FOfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWUsIGNyZWF0ZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxudHlwZSBPcHRpb24gPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgaWNvbjogc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIG1lbnVPcHRpb25zIHtcbiAgb3B0aW9uczogT3B0aW9uW107XG4gIGFuY2hvcjogSFRNTEVsZW1lbnQgfCBudWxsO1xuICBjbG9zZUFuY2hvcjogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIGljb246IHtcbiAgICAgIGhlaWdodDogMjAsXG4gICAgICB3aWR0aDogMjAsXG4gICAgICBtYXJnaW5SaWdodDogMTAsXG4gICAgfSxcbiAgfSlcbik7XG5cbmNvbnN0IE15TWVudTogUmVhY3QuRkM8bWVudU9wdGlvbnM+ID0gKHsgb3B0aW9ucywgYW5jaG9yLCBjbG9zZUFuY2hvciB9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnVcbiAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXG4gICAgICAgIGFuY2hvckVsPXthbmNob3J9XG4gICAgICAgIGtlZXBNb3VudGVkXG4gICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yKX1cbiAgICAgICAgb25DbG9zZT17Y2xvc2VBbmNob3J9XG4gICAgICA+XG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtvcHRpb24ub25DbGlja30ga2V5PXtvcHRpb24ubmFtZX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtvcHRpb24uaWNvbn0gYWx0PVwiXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IC8+XG4gICAgICAgICAgICAgIDxkaXY+e29wdGlvbi5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTWVudT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15TWVudTtcbiIsImV4cG9ydCBjb25zdCBTRUFSQ0hfUExBQ0VIT0xERVIgPSBcInNlYXJjaFwiO1xuZXhwb3J0IGNvbnN0IFNMT0dBTiA9IFwiTUxPdmVyZmxvd1wiO1xuZXhwb3J0IGNvbnN0IE1BSU5fTEFCRUxfSE9NRV9QQUdFID0gXCJnZXQgbWFjaGluZSBsZWFybmluZyByZXNvdXJjZXNcIjtcbmV4cG9ydCBjb25zdCBTRUNPTkRBUllfTEFCRUxfSE9NRV9QQUdFID1cbiAgXCJrZWVwIHlvdXIgbWFjaGluZSBsZWFybmluZyBpbmZvcm1hdGlvbiB1cHRvIGRhdGVcIjtcbmV4cG9ydCBjb25zdCBUV1BfSU5GTyA9XG4gIFwiVHdvIG1pbnV0ZSBwYXBlciBvZmZlcnMgYnJpZWYgZXhwbGFuYXRpb24gb2YgbWFjaGluZSBsZWFybmluZyBwYXBlcnMgaW5zaWRlIDIgbWludXRlc1wiO1xuXG5leHBvcnQgY29uc3QgWUtfSU5GTyA9XG4gIFwiWWFubmljIEtpbGNoZXIgd2lsbCB0YWtlIHlvdSB0aHJvdWdoIHdob2xlIHBhcGVyIGV4cGxhbmF0aW9uIGluIGhpcyB5b3V0dWJlIHZpZGVvcy4gS2VlcCBpbiB0b3VjaFwiO1xuXG5leHBvcnQgY29uc3QgRExQX0lORk8gPVxuICBcIlRoZSBkZWZpbml0aXZlIGFuZCBtb3N0IGFjdGl2ZSBGQiBHcm91cCBvbiBBLkkuLCBOZXVyYWwgTmV0d29ya3MgYW5kIERlZXAgTGVhcm5pbmcuIEFsbCB0aGluZ3MgbmV3IGFuZCBpbnRlcmVzdGluZyBvbiB0aGUgZnJvbnRpZXIgb2YgQS5JLiBhbmQgRGVlcCBMZWFybmluZy4gTmV1cmFsIG5ldHdvcmtzIHdpbGwgcmVkZWZpbmUgd2hhdCBpdCBtZWFucyB0byBiZSBhIHNtYXJ0IG1hY2hpbmUgaW4gdGhlIHllYXJzIHRvIGNvbWVcIjtcbiIsImltcG9ydCB7IFRXUF9JTkZPLCBZS19JTkZPLCBETFBfSU5GTyB9IGZyb20gXCIuLi9jb25zdGFudHNcIlxuXG5leHBvcnQgY29uc3QgUVVJQ0tfTElOS1MgPSBbXG4gICAge1xuICAgICAgICBcImlkXCI6IFwiMVwiLFxuICAgICAgICBcIm5hbWVcIjogXCJUd28gTWludXRlIFBhcGVyXCIsXG4gICAgICAgIFwibGlua1wiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2MvSyVDMyVBMXJvbHlac29sbmFpL3ZpZGVvc1wiLFxuICAgICAgICBcImRlc2NcIjogVFdQX0lORk8sXG4gICAgICAgIFwiaW1nXCI6IFwidG1wLmpwZ1wiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IFwiMlwiLFxuICAgICAgICBcIm5hbWVcIjogXCJZYW5uaWMgS2lsY2hlclwiLFxuICAgICAgICBcImxpbmtcIjogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jL1lhbm5pY0tpbGNoZXIvdmlkZW9zXCIsXG4gICAgICAgIFwiZGVzY1wiOiBZS19JTkZPLFxuICAgICAgICBcImltZ1wiOiBcInlrLmpwZ1wiXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6IFwiM1wiLFxuICAgICAgICBcIm5hbWVcIjogXCJBcnRpZmljaWFsIEludGVsbGlnZW5jZSAmIERlZXAgTGVhcm5pbmdcIixcbiAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy8xMDcxMDc1NDYzNDg4MDNcIixcbiAgICAgICAgXCJkZXNjXCI6IERMUF9JTkZPLFxuICAgICAgICBcImltZ1wiOiBcImRscC5qcGdcIlxuICAgIH1cbl1cblxuZXhwb3J0IGNvbnN0IERVTU1ZX1BBUEVSID0gW3tcbiAgICBkYXRhc2V0czogXCJodHRwczovL2xpbmtlZGluLmNvbVwiLFxuICAgIGlkOiBcIjFcIixcbiAgICB0aXRsZTogXCJBdHRlbnRpb24gaXMgYWxsIHlvdSBuZWVkXCIsXG4gICAgdGFnczogW3sgbmFtZTogXCJIZXJlIEkgZ29cIiB9LCB7IG5hbWU6IFwibWFjaGluZSBsZWFybmluZ1wiIH0sIHsgbmFtZTogXCJIZXJlIEkgZ29cIiB9LCB7IG5hbWU6IFwibWFjaGluZSBsZWFybmluZ1wiIH0sIHsgbmFtZTogXCJIZXJlIEkgZ29cIiB9LCB7IG5hbWU6IFwibWFjaGluZSBsZWFybmluZ1wiIH1dLFxuICAgIGFic3RyYWN0OiBcIkRvdWJsZU1MIGlzIGFuIG9wZW4tc291cmNlIFB5dGhvbiBsaWJyYXJ5IGltcGxlbWVudGluZyB0aGUgZG91YmxlIG1hY2hpbmUgbGVhcm5pbmcgZnJhbWV3b3JrIG9mIENoZXJub3podWtvdiBldCBhbC4gKDIwMTgpIGZvciBhIHZhcmlldHkgb2YgY2F1c2FsIG1vZGVscy4gSXQgY29udGFpbnMgZnVuY3Rpb25hbGl0aWVzIGZvciB2YWxpZCBzdGF0aXN0aWNhbCBpbmZlcmVuY2Ugb24gY2F1c2FsIHBhcmFtZXRlcnMgd2hlbiB0aGUgZXN0aW1hdGlvbiBvZiBudWlzYW5jZSBwYXJhbWV0ZXJzIGlzIGJhc2VkIG9uIG1hY2hpbmUgbGVhcm5pbmcgbWV0aG9kcy4gVGhlIG9iamVjdC1vcmllbnRlZCBpbXBsZW1lbnRhdGlvbiBvZiBEb3VibGVNTCBwcm92aWRlcyBhIGhpZ2ggZmxleGliaWxpdHkgaW4gdGVybXMgb2YgbW9kZWwgc3BlY2lmaWNhdGlvbnMgYW5kIG1ha2VzIGl0IGVhc2lseSBleHRlbmRhYmxlLiBUaGUgcGFja2FnZSBpcyBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgYW5kIHJlbGllcyBvbiBjb3JlIGxpYnJhcmllcyBmcm9tIHRoZSBzY2llbnRpZmljIFB5dGhvbiBlY29zeXN0ZW06IHNjaWtpdC1sZWFybiwgbnVtcHksIHBhbmRhcywgc2NpcHksIHN0YXRzbW9kZWxzIGFuZCBqb2JsaWIuIFNvdXJjZSBjb2RlLCBkb2N1bWVudGF0aW9uIGFuZCBhbiBleHRlbnNpdmUgdXNlciBndWlkZSBjYW4gYmUgZm91bmQgYXQgdGhpcyBodHRwcyBVUkwgYW5kIHRoaXMgaHR0cHMgVVJMLlwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9hcnhpdi5vcmcvYWJzLzE4MDQuMDI3NjdcIixcbiAgICBjb2RlczogW3tcbiAgICAgICAgbGluazogXCJodHRwczovL3lvdXR1YmUuY29tXCIsXG4gICAgICAgIGxhbmd1YWdlOiBcInRlbnNvcmZsb3dcIlxuICAgIH1dLFxuICAgIG1ldGE6IFwiNiBwYWdlcywgMiBmaWd1cmVzXCIsXG4gICAgcHVibGlzaGVkRGF0ZTogbmV3IERhdGUoKS50b1VUQ1N0cmluZygpLFxuICAgIGF1dGhvcnM6IFt7ICduYW1lJzogJ1BoaWxpcHAgQmFjaCcgfSwgeyAnbmFtZSc6ICcgVmljdG9yIENoZXJub3podWtvdicgfSwgeyAnbmFtZSc6ICcgTWFsdGUgUy4gS3VyeicgfSwgeyAnbmFtZSc6ICcgTWFydGluIFNwaW5kbGVyJyB9LCB7ICduYW1lJzogJ1BoaWxpcHAgQmFjaCcgfSwgeyAnbmFtZSc6ICcgVmljdG9yIENoZXJub3podWtvdicgfSwgeyAnbmFtZSc6ICcgTWFsdGUgUy4gS3VyeicgfSwgeyAnbmFtZSc6ICcgTWFydGluIFNwaW5kbGVyJyB9XVxufSxcbntcbiAgICBpZDogJzInLFxuICAgIHRpdGxlOiBcIkF0dGVudGlvbiBpcyBhbGwgeW91IG5lZWRcIixcbiAgICB0YWdzOiBbeyBuYW1lOiBcIkhlcmUgSSBnb1wiIH1dLFxuICAgIGFic3RyYWN0OiBcIlRoaXMgaXMgYWJzdHJhY3QgYWtzZGpsa2FzZGtha2pzbGRramxhc2Rqa2xhZHNsa2phZHNsamtsamEgc2RrbGtqYXNka2FzbGpkbCBhc2tkbGthc2RqbGthc2xka2phc2xramRsYXNramRqbGFzZGtqYXNsamRrICBhIHNka2sgZGFsc2tqbCBhZHNqIGFkcyBhZHNsa2phIGRzbGprYWQgc2psa2Egc2Rqa2xhbGprcyBkbGtqYWQgc2xqayBkc2psa2EgZHNhIHNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vZmFjZWJvb2suY29tXCIsXG4gICAgY29kZXM6IFt7XG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbVwiLFxuICAgICAgICBsYW5ndWFnZTogXCJ0ZW5zb3JmbG93XCJcbiAgICB9XSxcbiAgICBtZXRhOiBcIjYgcGFnZXMsIDIgZmlndXJlc1wiLFxuICAgIGF1dGhvcnM6IFt7ICduYW1lJzogJ1BoaWxpcHAgQmFjaCcgfSwgeyAnbmFtZSc6ICcgVmljdG9yIENoZXJub3podWtvdicgfSwgeyAnbmFtZSc6ICcgTWFsdGUgUy4gS3VyeicgfSwgeyAnbmFtZSc6ICcgTWFydGluIFNwaW5kbGVyJyB9XSxcbiAgICBwdWJsaXNoZWREYXRlOiBuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKClcbn1cbl07XG5cbmV4cG9ydCBjb25zdCBEVU1NWV9GRUVEID0gW1xuICAgIHtcbiAgICAgICAgXCJpZFwiOiAnMScsXG4gICAgICAgIHVzZXJJbWFnZTogXCJodHRwczovL3Njb250ZW50LmZrdG0zLTEuZm5hLmZiY2RuLm5ldC92L3QxLjY0MzUtOS8xODU5NDEyMTJfMzk4OTg5NTkzNDQyMzcxOF8zNzEwOTUxNjI1NDUwODkyODA3X24uanBnP19uY19jYXQ9MTA0JmNjYj0xLTMmX25jX3NpZD04YmZlYjkmX25jX29oYz1sSHZzTFV6RXNBa0FYOVBXWkNfJl9uY19odD1zY29udGVudC5ma3RtMy0xLmZuYSZvaD04ZjE5NTJhOWZhN2ZjMmY2MjhkNDE2MWQ5MmY0ZGM0OCZvZT02MEM0RDYzRlwiLFxuICAgICAgICB0aW1lOiBcIjIwMjEvMTAvMzBcIixcbiAgICAgICAgdXNlcm5hbWU6IFwiU0dcIixcbiAgICAgICAgdGFnczogW3sgbmFtZTogXCJtbFwiIH0sIHsgbmFtZTogXCJUSEUgUExBQ0UgSVMgQ0FMTEVEIERIVUxJS0hFTFwiIH0sIHsgbmFtZTogXCJhaVwiIH1dLFxuICAgICAgICBpc093bmVyOiBmYWxzZSxcbiAgICAgICAgdGV4dDogXCI8cD5IZWxsbyBXb3JsZCA8L3A+ICA8aDE+R29vZGJ5ZSBXb3JsZDwvaDE+IFwiXG5cbiAgICB9LCB7XG4gICAgICAgIFwiaWRcIjogJzInLFxuICAgICAgICB1c2VySW1hZ2U6IFwiaHR0cHM6Ly9zY29udGVudC5ma3RtMy0xLmZuYS5mYmNkbi5uZXQvdi90MS42NDM1LTkvMTg1OTQxMjEyXzM5ODk4OTU5MzQ0MjM3MThfMzcxMDk1MTYyNTQ1MDg5MjgwN19uLmpwZz9fbmNfY2F0PTEwNCZjY2I9MS0zJl9uY19zaWQ9OGJmZWI5Jl9uY19vaGM9bEh2c0xVekVzQWtBWDlQV1pDXyZfbmNfaHQ9c2NvbnRlbnQuZmt0bTMtMS5mbmEmb2g9OGYxOTUyYTlmYTdmYzJmNjI4ZDQxNjFkOTJmNGRjNDgmb2U9NjBDNEQ2M0ZcIixcbiAgICAgICAgdGltZTogXCIyMDIxLzEwLzMwXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcIkdhdXRhbVwiLFxuICAgICAgICB0YWdzOiBbeyBuYW1lOiBcIm1sXCIgfSwgeyBuYW1lOiBcImFpXCIgfV0sXG4gICAgICAgIGlzT3duZXI6IHRydWUsXG4gICAgICAgIHRleHQ6IGA8cD5IZWxsbyBXb3JsZDwvcD48aDE+R29vZGJ5ZSBXb3JsZDwvaDE+ICBgXG4gICAgfSwge1xuICAgICAgICBcImlkXCI6ICczJyxcbiAgICAgICAgdXNlckltYWdlOiBcImh0dHBzOi8vc2NvbnRlbnQuZmt0bTMtMS5mbmEuZmJjZG4ubmV0L3YvdDEuNjQzNS05LzE4NTk0MTIxMl8zOTg5ODk1OTM0NDIzNzE4XzM3MTA5NTE2MjU0NTA4OTI4MDdfbi5qcGc/X25jX2NhdD0xMDQmY2NiPTEtMyZfbmNfc2lkPThiZmViOSZfbmNfb2hjPWxIdnNMVXpFc0FrQVg5UFdaQ18mX25jX2h0PXNjb250ZW50LmZrdG0zLTEuZm5hJm9oPThmMTk1MmE5ZmE3ZmMyZjYyOGQ0MTYxZDkyZjRkYzQ4Jm9lPTYwQzRENjNGXCIsXG4gICAgICAgIHRpbWU6IFwiMjAyMS8xMC8zMFwiLFxuICAgICAgICB1c2VybmFtZTogXCJHYXV0YW1cIixcbiAgICAgICAgdGFnczogW3sgbmFtZTogXCJtbFwiIH0sIHsgbmFtZTogXCJhaVwiIH1dLFxuICAgICAgICBpc093bmVyOiB0cnVlLFxuICAgICAgICB0ZXh0OiBgPHA+SGVsbG8gV29ybGQ8L3A+PGgxPkdvb2RieWUgV29ybGQ8L2gxPiAgYFxuICAgIH1cblxuXVxuXG5leHBvcnQgY29uc3QgRFVNTVlfQ09NTUVOVFMgPSBbXG4gICAgeyB0ZXh0OiBcIjxwPlRoZSBDU1MgPGNvZGU+YmFja2dyb3VuZC1jb2xvcjwvY29kZT4gcHJvcGVydHkgZGVmaW5lcyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiBhbiBlbGVtZW50LjwvcD5cIiwgaXNPd25lcjogdHJ1ZSwgaGFzVm90ZWQ6IGZhbHNlLCBoYXNCb29rbWFya2VkOiBmYWxzZSwgdm90ZXM6IDEyMzQ1IH0sXG4gICAgeyB0ZXh0OiBgPHA+VGhlIENTUyA8Y29kZT5iYWNrZ3JvdW5kLWNvbG9yPC9jb2RlPiBwcm9wZXJ0eSBkZWZpbmVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGFuIGVsZW1lbnQuICA8aW1nIGFsdD1cIlwiIHNyYz1cIi9sb2dvLnBuZ1wiIC8gPjwvcD5gLCBpc093bmVyOiBmYWxzZSwgaGFzVm90ZWQ6IHRydWUsIGhhc0Jvb2ttYXJrZWQ6IHRydWUsIHZvdGVzOiAxNTYgfSxcbiAgICB7XG4gICAgICAgIHRleHQ6IGA8aDI+SFRNTCBCdXR0b25zPC9oMj5cbjxwPkhUTUwgYnV0dG9ucyBhcmUgZGVmaW5lZCB3aXRoIHRoZSBidXR0b24gdGFnOjwvcD5cbjxidXR0b24+Q2xpY2sgbWU8L2J1dHRvbj5gLCBpc093bmVyOiB0cnVlLCBoYXNWb3RlZDogdHJ1ZSwgaGFzQm9va21hcmtlZDogdHJ1ZSwgdm90ZXM6IDY0NTQ2NTRcbiAgICB9LFxuXSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBGZWVkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ZlZWRcIjtcbmltcG9ydCB7IERVTU1ZX0ZFRUQsIERVTU1ZX0NPTU1FTlRTIH0gZnJvbSBcIi4uLy4uL2R1bW15XCI7XG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9ybXMvQ29tbWVudEZvcm1cIjtcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT4gKHtcbiAgbWFpbjoge1xuICAgIG1hcmdpblRvcDogNDAsXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG5cbiAgZmVlZDoge1xuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgfSxcbiAgY29tbWVudENvbnRhaW5lcjoge1xuICAgIG1hcmdpblRvcDogMjAsXG4gIH0sXG4gIGNvbW1lbnRMaXN0OiB7fSxcbn0pKTtcblxuaW50ZXJmYWNlIElQcm9wcyB7fVxuXG5jb25zdCBGZWVkUGFnZTogUmVhY3QuRkM8SVByb3BzPiA9ICgpID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHNsdWcgPSBxdWVyeS5zbHVnO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT5cbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJGZWVkc1wiIC8+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxHcmlkIGl0ZW0gc209ezZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZlZWR9PlxuICAgICAgICAgICAgPEZlZWQgey4uLkRVTU1ZX0ZFRURbMV19IC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbW1lbnRDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8Q29tbWVudEZvcm0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21tZW50TGlzdH0+XG4gICAgICAgICAgICAgIDxDb21tZW50TGlzdCBjb21tZW50cz17RFVNTVlfQ09NTUVOVFN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZFBhZ2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2hhcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRyYWZ0LWpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkcmFmdGpzLXRvLWh0bWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRyYWZ0LXd5c2l3eWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==