(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detailpage"],{

/***/ "92Wf":
/*!*************************************!*\
  !*** ../src/pages/search/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "tYyp");
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/theme */ "sdih");
var _jsxFileName = "/Users/homerwang/projects/react-demo/src/pages/search/index.jsx";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var initialState = {
  search: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'input':
      return {
        search: action.payload.search
      };

    case 'reset':
      return {
        search: ''
      };

    default:
      return state;
  }
}

var actionCreators = {
  inputSearch: function inputSearch(dispatch, search) {
    dispatch({
      type: 'input',
      payload: {
        search: search
      }
    });
  },
  resetSearch: function resetSearch(dispatch) {
    dispatch({
      type: 'reset'
    });
  }
};

var Page = function Page(_ref) {
  var history = _ref.history,
      match = _ref.match,
      location = _ref.location;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var search = state.search;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_theme__WEBPACK_IMPORTED_MODULE_2__["default"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, function (_ref2) {
    var _ref2$theme = _ref2.theme,
        backgroundColor = _ref2$theme.backgroundColor,
        textColor = _ref2$theme.textColor;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        backgroundColor: backgroundColor,
        color: textColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "search:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      value: search,
      onChange: function onChange(e) {
        return actionCreators.inputSearch(dispatch, e.target.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick(e) {
        return actionCreators.resetSearch(dispatch);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "reset")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Search Page"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Page));

/***/ }),

/***/ "D9WN":
/*!***************************************************!*\
  !*** ../node_modules/moment/locale sync ^\.\/.*$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "ggbP",
	"./af.js": "ggbP",
	"./ar": "zaxx",
	"./ar-dz": "fyYX",
	"./ar-dz.js": "fyYX",
	"./ar-kw": "jogf",
	"./ar-kw.js": "jogf",
	"./ar-ly": "zWXE",
	"./ar-ly.js": "zWXE",
	"./ar-ma": "6Nbo",
	"./ar-ma.js": "6Nbo",
	"./ar-sa": "ooRU",
	"./ar-sa.js": "ooRU",
	"./ar-tn": "ZPeb",
	"./ar-tn.js": "ZPeb",
	"./ar.js": "zaxx",
	"./az": "sTnJ",
	"./az.js": "sTnJ",
	"./be": "mOKi",
	"./be.js": "mOKi",
	"./bg": "oaWn",
	"./bg.js": "oaWn",
	"./bm": "TQ38",
	"./bm.js": "TQ38",
	"./bn": "6K5y",
	"./bn.js": "6K5y",
	"./bo": "vPIy",
	"./bo.js": "vPIy",
	"./br": "afE2",
	"./br.js": "afE2",
	"./bs": "JNFb",
	"./bs.js": "JNFb",
	"./ca": "NQcR",
	"./ca.js": "NQcR",
	"./cs": "0V88",
	"./cs.js": "0V88",
	"./cv": "e/5r",
	"./cv.js": "e/5r",
	"./cy": "HTX9",
	"./cy.js": "HTX9",
	"./da": "oBlQ",
	"./da.js": "oBlQ",
	"./de": "DPpk",
	"./de-at": "7epm",
	"./de-at.js": "7epm",
	"./de-ch": "mq6o",
	"./de-ch.js": "mq6o",
	"./de.js": "DPpk",
	"./dv": "FyKI",
	"./dv.js": "FyKI",
	"./el": "U5Cp",
	"./el.js": "U5Cp",
	"./en-SG": "IIgg",
	"./en-SG.js": "IIgg",
	"./en-au": "2tm8",
	"./en-au.js": "2tm8",
	"./en-ca": "bxNt",
	"./en-ca.js": "bxNt",
	"./en-gb": "YmdP",
	"./en-gb.js": "YmdP",
	"./en-ie": "gLHG",
	"./en-ie.js": "gLHG",
	"./en-il": "rTiS",
	"./en-il.js": "rTiS",
	"./en-nz": "Odsn",
	"./en-nz.js": "Odsn",
	"./eo": "GjBA",
	"./eo.js": "GjBA",
	"./es": "SKOl",
	"./es-do": "8wa+",
	"./es-do.js": "8wa+",
	"./es-us": "YL9C",
	"./es-us.js": "YL9C",
	"./es.js": "SKOl",
	"./et": "+JHh",
	"./et.js": "+JHh",
	"./eu": "pAPS",
	"./eu.js": "pAPS",
	"./fa": "zhSd",
	"./fa.js": "zhSd",
	"./fi": "/BTK",
	"./fi.js": "/BTK",
	"./fo": "K/JZ",
	"./fo.js": "K/JZ",
	"./fr": "wehu",
	"./fr-ca": "UKIa",
	"./fr-ca.js": "UKIa",
	"./fr-ch": "sIcz",
	"./fr-ch.js": "sIcz",
	"./fr.js": "wehu",
	"./fy": "RmWi",
	"./fy.js": "RmWi",
	"./ga": "s5bY",
	"./ga.js": "s5bY",
	"./gd": "BWwv",
	"./gd.js": "BWwv",
	"./gl": "794S",
	"./gl.js": "794S",
	"./gom-latn": "jixF",
	"./gom-latn.js": "jixF",
	"./gu": "Uz2K",
	"./gu.js": "Uz2K",
	"./he": "dSB2",
	"./he.js": "dSB2",
	"./hi": "0vPu",
	"./hi.js": "0vPu",
	"./hr": "fnly",
	"./hr.js": "fnly",
	"./hu": "FI+y",
	"./hu.js": "FI+y",
	"./hy-am": "ZxHn",
	"./hy-am.js": "ZxHn",
	"./id": "KxDR",
	"./id.js": "KxDR",
	"./is": "H+sD",
	"./is.js": "H+sD",
	"./it": "GyEJ",
	"./it-ch": "jSwB",
	"./it-ch.js": "jSwB",
	"./it.js": "GyEJ",
	"./ja": "km6H",
	"./ja.js": "km6H",
	"./jv": "WnjQ",
	"./jv.js": "WnjQ",
	"./ka": "WXVf",
	"./ka.js": "WXVf",
	"./kk": "zJNk",
	"./kk.js": "zJNk",
	"./km": "ZuGE",
	"./km.js": "ZuGE",
	"./kn": "VCFo",
	"./kn.js": "VCFo",
	"./ko": "EpfC",
	"./ko.js": "EpfC",
	"./ku": "FvgC",
	"./ku.js": "FvgC",
	"./ky": "Pfmo",
	"./ky.js": "Pfmo",
	"./lb": "wSTE",
	"./lb.js": "wSTE",
	"./lo": "IKWk",
	"./lo.js": "IKWk",
	"./lt": "wUrv",
	"./lt.js": "wUrv",
	"./lv": "xVOH",
	"./lv.js": "xVOH",
	"./me": "riUx",
	"./me.js": "riUx",
	"./mi": "b1YN",
	"./mi.js": "b1YN",
	"./mk": "yPwC",
	"./mk.js": "yPwC",
	"./ml": "dS3T",
	"./ml.js": "dS3T",
	"./mn": "8J7P",
	"./mn.js": "8J7P",
	"./mr": "Cla+",
	"./mr.js": "Cla+",
	"./ms": "Vbbc",
	"./ms-my": "qelJ",
	"./ms-my.js": "qelJ",
	"./ms.js": "Vbbc",
	"./mt": "YkvB",
	"./mt.js": "YkvB",
	"./my": "4lZK",
	"./my.js": "4lZK",
	"./nb": "4dXb",
	"./nb.js": "4dXb",
	"./ne": "dhqa",
	"./ne.js": "dhqa",
	"./nl": "oPI1",
	"./nl-be": "XLIu",
	"./nl-be.js": "XLIu",
	"./nl.js": "oPI1",
	"./nn": "T9ox",
	"./nn.js": "T9ox",
	"./pa-in": "Ly9c",
	"./pa-in.js": "Ly9c",
	"./pl": "MX9p",
	"./pl.js": "MX9p",
	"./pt": "VVP3",
	"./pt-br": "qatJ",
	"./pt-br.js": "qatJ",
	"./pt.js": "VVP3",
	"./ro": "2xJO",
	"./ro.js": "2xJO",
	"./ru": "eqS4",
	"./ru.js": "eqS4",
	"./sd": "6Huv",
	"./sd.js": "6Huv",
	"./se": "opZB",
	"./se.js": "opZB",
	"./si": "Ueyn",
	"./si.js": "Ueyn",
	"./sk": "YIvA",
	"./sk.js": "YIvA",
	"./sl": "s2ex",
	"./sl.js": "s2ex",
	"./sq": "9o/V",
	"./sq.js": "9o/V",
	"./sr": "CZE8",
	"./sr-cyrl": "xXeP",
	"./sr-cyrl.js": "xXeP",
	"./sr.js": "CZE8",
	"./ss": "z3ad",
	"./ss.js": "z3ad",
	"./sv": "AVN5",
	"./sv.js": "AVN5",
	"./sw": "y2+C",
	"./sw.js": "y2+C",
	"./ta": "i/qy",
	"./ta.js": "i/qy",
	"./te": "Zov1",
	"./te.js": "Zov1",
	"./tet": "6ucV",
	"./tet.js": "6ucV",
	"./tg": "cLEX",
	"./tg.js": "cLEX",
	"./th": "cYD4",
	"./th.js": "cYD4",
	"./tl-ph": "+Ls2",
	"./tl-ph.js": "+Ls2",
	"./tlh": "sCZo",
	"./tlh.js": "sCZo",
	"./tr": "Nx06",
	"./tr.js": "Nx06",
	"./tzl": "x0TR",
	"./tzl.js": "x0TR",
	"./tzm": "eHpI",
	"./tzm-latn": "ceDr",
	"./tzm-latn.js": "ceDr",
	"./tzm.js": "eHpI",
	"./ug-cn": "a1x9",
	"./ug-cn.js": "a1x9",
	"./uk": "jAw7",
	"./uk.js": "jAw7",
	"./ur": "UZ6Q",
	"./ur.js": "UZ6Q",
	"./uz": "eYI/",
	"./uz-latn": "MTcW",
	"./uz-latn.js": "MTcW",
	"./uz.js": "eYI/",
	"./vi": "riLI",
	"./vi.js": "riLI",
	"./x-pseudo": "ESkz",
	"./x-pseudo.js": "ESkz",
	"./yo": "tL86",
	"./yo.js": "tL86",
	"./zh-cn": "/cTU",
	"./zh-cn.js": "/cTU",
	"./zh-hk": "dH0k",
	"./zh-hk.js": "dH0k",
	"./zh-tw": "0+Cr",
	"./zh-tw.js": "0+Cr"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "D9WN";

/***/ }),

/***/ "LE+o":
/*!***********************************!*\
  !*** ../src/pages/detail/util.js ***!
  \***********************************/
/*! exports provided: normalizeConditions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeConditions", function() { return normalizeConditions; });
/* harmony import */ var _Condition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Condition */ "Vwe+");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function normalizeConditions(data) {
  if (data.type === _Condition__WEBPACK_IMPORTED_MODULE_0__["TYPE_MAP"].EXPRESSION) {
    var fact = data.fact,
        value = data.value,
        operator = data.operator;
    return {
      fact: fact,
      operator: operator,
      value: value
    };
  } else {
    var type = data.type,
        priority = data.priority,
        subConditions = data.subConditions;
    return _defineProperty({
      priority: priority
    }, type, subConditions.map(function (item) {
      return normalizeConditions(item);
    }));
  }
}

/***/ }),

/***/ "LUSV":
/*!**********************************!*\
  !*** ../src/pages/404/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "dMQ9");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "tYyp");
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/theme */ "sdih");
var _jsxFileName = "/Users/homerwang/projects/react-demo/src/pages/404/index.jsx";





var Page = function Page(_ref) {
  var history = _ref.history,
      match = _ref.match,
      location = _ref.location;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_theme__WEBPACK_IMPORTED_MODULE_3__["default"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, function (_ref2) {
    var _ref2$theme = _ref2.theme,
        backgroundColor = _ref2$theme.backgroundColor,
        textColor = _ref2$theme.textColor;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        backgroundColor: backgroundColor,
        color: textColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "404 Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "\u9875\u9762\u8D70\u4E22\u4E86"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Page));

/***/ }),

/***/ "Vwe+":
/*!*****************************************!*\
  !*** ../src/pages/detail/Condition.jsx ***!
  \*****************************************/
/*! exports provided: TYPE_MAP, ConditionModel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_MAP", function() { return TYPE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionModel", function() { return ConditionModel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "n6Mx");
var _jsxFileName = "/Users/homerwang/projects/react-demo/src/pages/detail/Condition.jsx",
    _SubComponentMap;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var FormItem = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item;
var Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;
var TYPE_MAP = {
  ALL: 'all',
  ANY: 'any',
  EXPRESSION: 'expression'
};
var TYPES = Object.values(TYPE_MAP);
var ConditionModel = function ConditionModel(_ref) {
  var type = _ref.type,
      _ref$fact = _ref.fact,
      fact = _ref$fact === void 0 ? '' : _ref$fact,
      _ref$operator = _ref.operator,
      operator = _ref$operator === void 0 ? '' : _ref$operator,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$subConditions = _ref.subConditions,
      subConditions = _ref$subConditions === void 0 ? [] : _ref$subConditions,
      _ref$priority = _ref.priority,
      priority = _ref$priority === void 0 ? 1 : _ref$priority;

  _classCallCheck(this, ConditionModel);

  this.type = type;
  this.id = parseInt(Math.random() * 100000000);
  this.fact = fact;
  this.operator = operator;
  this.value = value;
  this.subConditions = subConditions;
  this.priority = priority;
};
var All = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function () {
  return null; // return (
  //   <div className="all">
  //     <Tag color="blue">all</Tag>
  //   </div>
  // )
});
var Any = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function () {
  return null; // return (
  //   <div className="any">
  //     <Tag color="purple">purple</Tag>
  //   </div>
  // )
});
var OPERATORS = ['equal', 'notEqual', 'lessThan', 'lessThanInclusive', 'greaterThan', 'greaterThanInclusive', 'in', 'notIn', 'contains', 'doesNotContain'];
var Expression = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref2) {
  var fact = _ref2.fact,
      operator = _ref2.operator,
      value = _ref2.value,
      onChange = _ref2.onChange;
  var handleFactChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    onChange('fact', e.target.value);
  }, [onChange]);
  var handleOperatorChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (v) {
    onChange('operator', v);
  }, [onChange]);
  var handleValueChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    onChange('value', e.target.value);
  }, [onChange]);
  /*
    TODO: value 可以为各种数据格式: undefined/null/number/string/boolean/symbol/object
  */

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    layout: "inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "fact",
    value: fact,
    onChange: handleFactChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    value: operator,
    onChange: handleOperatorChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, OPERATORS.map(function (op) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
      key: op,
      value: op,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, op);
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "value",
    value: value,
    onChange: handleValueChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })));
});
var SubComponentMap = (_SubComponentMap = {}, _defineProperty(_SubComponentMap, TYPE_MAP.ALL, All), _defineProperty(_SubComponentMap, TYPE_MAP.ANY, Any), _defineProperty(_SubComponentMap, TYPE_MAP.EXPRESSION, Expression), _SubComponentMap);
var Condition = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref3) {
  var index = _ref3.index,
      data = _ref3.data,
      onChange = _ref3.onChange,
      onDelete = _ref3.onDelete;
  var handlTypeeChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (v) {
    onChange(_objectSpread({}, data, {
      type: v,
      subConditions: v === TYPE_MAP.EXPRESSION ? [] : data.subConditions
    }), index);
  }, [data, index, onChange]);
  var handleAdd = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    onChange(_objectSpread({}, data, {
      subConditions: [].concat(_toConsumableArray(data.subConditions), [new ConditionModel({
        type: TYPE_MAP.EXPRESSION
      })])
    }), index);
  }, [data, index, onChange]);
  var handleSubChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (subData, idx) {
    onChange(_objectSpread({}, data, {
      subConditions: data.subConditions.map(function (item, i) {
        if (i !== idx) {
          return item;
        }

        return subData;
      })
    }), index);
  }, [data, index, onChange]);
  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (key, value) {
    onChange(_objectSpread({}, data, _defineProperty({}, key, value)), index);
  }, [data, index, onChange]);
  var handleSubDelete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (i) {
    onChange(_objectSpread({}, data, {
      subConditions: data.subConditions.filter(function (item, idx) {
        return idx !== i;
      })
    }), index);
  }, [data, index, onChange]);
  var handleDelete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    onDelete(index);
  }, [index, onDelete]);
  var type = data.type,
      fact = data.fact,
      operator = data.operator,
      value = data.value,
      subConditions = data.subConditions;
  var SubComp = SubComponentMap[type];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "condition",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    value: type,
    style: {
      width: 120
    },
    onChange: handlTypeeChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, TYPES.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
      key: item,
      value: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, item);
  })), [TYPE_MAP.ALL, TYPE_MAP.ANY].includes(type) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "plus-square",
    theme: "twoTone",
    onClick: handleAdd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    type: "delete",
    theme: "twoTone",
    onClick: handleDelete,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }), SubComp && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubComp, {
    fact: fact,
    operator: operator,
    value: value,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sub-condition-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, !!subConditions.length && subConditions.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Condition, {
      key: item.id,
      index: i,
      data: item,
      onChange: handleSubChange,
      onDelete: handleSubDelete,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    });
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Condition);

/***/ }),

/***/ "cJLt":
/*!**************************************!*\
  !*** ../src/pages/detail/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./index.scss */ "z6SE");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "UezQ")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "km9I":
/*!*************************************!*\
  !*** ../src/pages/detail/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "tYyp");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "n6Mx");
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/theme */ "sdih");
/* harmony import */ var _Condition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Condition */ "Vwe+");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "LE+o");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "cJLt");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/homerwang/projects/react-demo/src/pages/detail/index.jsx";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var Page = function Page() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new _Condition__WEBPACK_IMPORTED_MODULE_4__["ConditionModel"]({
    type: _Condition__WEBPACK_IMPORTED_MODULE_4__["TYPE_MAP"].ALL
  })),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data) {
    setData(data);
  }, []);
  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    console.log(JSON.stringify(data));
    var conditions = Object(_util__WEBPACK_IMPORTED_MODULE_5__["normalizeConditions"])(data);
    console.log(JSON.stringify(conditions));
  }, [data]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_theme__WEBPACK_IMPORTED_MODULE_3__["default"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, function (_ref) {
    var _ref$theme = _ref.theme,
        backgroundColor = _ref$theme.backgroundColor,
        textColor = _ref$theme.textColor;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        backgroundColor: backgroundColor,
        color: textColor
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Condition__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: data,
      onChange: handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "\u786E\u5B9A")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Page));

/***/ }),

/***/ "z6SE":
/*!***********************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!../src/pages/detail/index.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "Ai0b")(false);
// Module
exports.push([module.i, ".body {\n  padding-bottom: 50px; }\n\n.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  padding: 10px 20px;\n  text-align: right;\n  background-color: #eee; }\n\n.condition {\n  display: flex; }\n  .condition .ant-input {\n    max-width: 100px; }\n  .condition .ant-select {\n    width: 170px; }\n  .condition .ant-form-inline .ant-form-item {\n    margin-right: 5px; }\n  .condition .ant-form-inline .ant-form-item:last-child {\n    margin-right: 0; }\n  .condition .content {\n    max-width: 410px;\n    border: 1px solid #000;\n    padding: 5px; }\n  .condition .sub-condition-list {\n    flex: 1;\n    border: 1px solid #000; }\n", ""]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL3BhZ2VzL3NlYXJjaC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhZ2VzL2RldGFpbC91dGlsLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFnZXMvNDA0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhZ2VzL2RldGFpbC9Db25kaXRpb24uanN4Iiwid2VicGFjazovLy8uLi9zcmMvcGFnZXMvZGV0YWlsL2luZGV4LnNjc3M/NDI0ZSIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhZ2VzL2RldGFpbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYWdlcy9kZXRhaWwvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJzZWFyY2giLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImFjdGlvbkNyZWF0b3JzIiwiaW5wdXRTZWFyY2giLCJkaXNwYXRjaCIsInJlc2V0U2VhcmNoIiwiUGFnZSIsImhpc3RvcnkiLCJtYXRjaCIsImxvY2F0aW9uIiwidXNlUmVkdWNlciIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiY29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ3aXRoUm91dGVyIiwibm9ybWFsaXplQ29uZGl0aW9ucyIsImRhdGEiLCJUWVBFX01BUCIsIkVYUFJFU1NJT04iLCJmYWN0Iiwib3BlcmF0b3IiLCJwcmlvcml0eSIsInN1YkNvbmRpdGlvbnMiLCJtYXAiLCJpdGVtIiwiRm9ybUl0ZW0iLCJGb3JtIiwiSXRlbSIsIk9wdGlvbiIsIlNlbGVjdCIsIkFMTCIsIkFOWSIsIlRZUEVTIiwiT2JqZWN0IiwidmFsdWVzIiwiQ29uZGl0aW9uTW9kZWwiLCJpZCIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsIkFsbCIsIm1lbW8iLCJBbnkiLCJPUEVSQVRPUlMiLCJFeHByZXNzaW9uIiwib25DaGFuZ2UiLCJoYW5kbGVGYWN0Q2hhbmdlIiwidXNlQ2FsbGJhY2siLCJoYW5kbGVPcGVyYXRvckNoYW5nZSIsInYiLCJoYW5kbGVWYWx1ZUNoYW5nZSIsIm9wIiwiU3ViQ29tcG9uZW50TWFwIiwiQ29uZGl0aW9uIiwiaW5kZXgiLCJvbkRlbGV0ZSIsImhhbmRsVHlwZWVDaGFuZ2UiLCJoYW5kbGVBZGQiLCJoYW5kbGVTdWJDaGFuZ2UiLCJzdWJEYXRhIiwiaWR4IiwiaSIsImhhbmRsZUNoYW5nZSIsImtleSIsImhhbmRsZVN1YkRlbGV0ZSIsImZpbHRlciIsImhhbmRsZURlbGV0ZSIsIlN1YkNvbXAiLCJ3aWR0aCIsImluY2x1ZGVzIiwibGVuZ3RoIiwidXNlU3RhdGUiLCJzZXREYXRhIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25kaXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ2pCQyxRQUFNLEVBQUU7QUFEUyxDQUFyQjs7QUFJQSxTQUFTQyxPQUFULENBQWlCQyxLQUFqQixFQUF3QkMsTUFBeEIsRUFBZ0M7QUFDNUIsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBSyxPQUFMO0FBQ0ksYUFBTztBQUFFSixjQUFNLEVBQUVHLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlTDtBQUF6QixPQUFQOztBQUNKLFNBQUssT0FBTDtBQUNJLGFBQU87QUFBRUEsY0FBTSxFQUFFO0FBQVYsT0FBUDs7QUFDSjtBQUNJLGFBQU9FLEtBQVA7QUFOUjtBQVFIOztBQUVELElBQU1JLGNBQWMsR0FBRztBQUNuQkMsYUFBVyxFQUFFLHFCQUFDQyxRQUFELEVBQVdSLE1BQVgsRUFBc0I7QUFDL0JRLFlBQVEsQ0FBQztBQUFFSixVQUFJLEVBQUUsT0FBUjtBQUFpQkMsYUFBTyxFQUFFO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25SQTtBQUVPLFNBQVNhLG1CQUFULENBQTZCQyxJQUE3QixFQUFtQztBQUN4QyxNQUFHQSxJQUFJLENBQUNwQixJQUFMLEtBQWNxQixtREFBUSxDQUFDQyxVQUExQixFQUFzQztBQUFBLFFBQzVCQyxJQUQ0QixHQUNGSCxJQURF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O0FBQVEsYUFBTyxFQUFFVyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixDQVRGLENBREQ7QUFBQSxHQURILENBREY7QUFtQkQsQ0EvQkQ7O0FBaUNlM0QsOEhBQVUsQ0FBQ1osSUFBRCxDQUF6QixFOzs7Ozs7Ozs7OztBQzNDQSwyQkFBMkIsbUJBQU8sQ0FBQyxrRUFBc0Q7QUFDekY7QUFDQSxjQUFjLFFBQVMsVUFBVSx5QkFBeUIsRUFBRSxhQUFhLG9CQUFvQixZQUFZLGNBQWMsZ0JBQWdCLHVCQUF1QixzQkFBc0IsMkJBQTJCLEVBQUUsZ0JBQWdCLGtCQUFrQixFQUFFLDJCQUEyQix1QkFBdUIsRUFBRSw0QkFBNEIsbUJBQW1CLEVBQUUsZ0RBQWdELHdCQUF3QixFQUFFLDJEQUEyRCxzQkFBc0IsRUFBRSx5QkFBeUIsdUJBQXVCLDZCQUE2QixtQkFBbUIsRUFBRSxvQ0FBb0MsY0FBYyw2QkFBNkIsRUFBRSIsImZpbGUiOiJkZXRhaWxwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvdGhlbWUnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBzZWFyY2g6ICcnXG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgcmV0dXJuIHsgc2VhcmNoOiBhY3Rpb24ucGF5bG9hZC5zZWFyY2ggfVxuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgICByZXR1cm4geyBzZWFyY2g6ICcnIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XG4gICAgaW5wdXRTZWFyY2g6IChkaXNwYXRjaCwgc2VhcmNoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2lucHV0JywgcGF5bG9hZDogeyBzZWFyY2ggfSB9KVxuICAgIH0sXG4gICAgcmVzZXRTZWFyY2g6IChkaXNwYXRjaCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdyZXNldCcgfSlcbiAgICB9LFxufVxuXG5jb25zdCBQYWdlID0gKHsgaGlzdG9yeSwgbWF0Y2gsIGxvY2F0aW9uIH0pID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgICBjb25zdCB7IHNlYXJjaCB9ID0gc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoeyB0aGVtZTogeyBiYWNrZ3JvdW5kQ29sb3IsIHRleHRDb2xvciB9IH0pID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciwgY29sb3I6IHRleHRDb2xvciB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnNlYXJjaDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBzZWFyY2ggfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gYWN0aW9uQ3JlYXRvcnMuaW5wdXRTZWFyY2goZGlzcGF0Y2gsIGUudGFyZ2V0LnZhbHVlKSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17IChlKSA9PiBhY3Rpb25DcmVhdG9ycy5yZXNldFNlYXJjaChkaXNwYXRjaCkgfT5yZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPlNlYXJjaCBQYWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiBoaXN0b3J5LnB1c2goJy9hY3QnKSB9PmdvIHRvIGFjdCBwYWdlPC9idXR0b24+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDwvVGhlbWVDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQYWdlKSIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcImdnYlBcIixcblx0XCIuL2FmLmpzXCI6IFwiZ2diUFwiLFxuXHRcIi4vYXJcIjogXCJ6YXh4XCIsXG5cdFwiLi9hci1kelwiOiBcImZ5WVhcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiZnlZWFwiLFxuXHRcIi4vYXIta3dcIjogXCJqb2dmXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcImpvZ2ZcIixcblx0XCIuL2FyLWx5XCI6IFwieldYRVwiLFxuXHRcIi4vYXItbHkuanNcIjogXCJ6V1hFXCIsXG5cdFwiLi9hci1tYVwiOiBcIjZOYm9cIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiNk5ib1wiLFxuXHRcIi4vYXItc2FcIjogXCJvb1JVXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIm9vUlVcIixcblx0XCIuL2FyLXRuXCI6IFwiWlBlYlwiLFxuXHRcIi4vYXItdG4uanNcIjogXCJaUGViXCIsXG5cdFwiLi9hci5qc1wiOiBcInpheHhcIixcblx0XCIuL2F6XCI6IFwic1RuSlwiLFxuXHRcIi4vYXouanNcIjogXCJzVG5KXCIsXG5cdFwiLi9iZVwiOiBcIm1PS2lcIixcblx0XCIuL2JlLmpzXCI6IFwibU9LaVwiLFxuXHRcIi4vYmdcIjogXCJvYVduXCIsXG5cdFwiLi9iZy5qc1wiOiBcIm9hV25cIixcblx0XCIuL2JtXCI6IFwiVFEzOFwiLFxuXHRcIi4vYm0uanNcIjogXCJUUTM4XCIsXG5cdFwiLi9iblwiOiBcIjZLNXlcIixcblx0XCIuL2JuLmpzXCI6IFwiNks1eVwiLFxuXHRcIi4vYm9cIjogXCJ2UEl5XCIsXG5cdFwiLi9iby5qc1wiOiBcInZQSXlcIixcblx0XCIuL2JyXCI6IFwiYWZFMlwiLFxuXHRcIi4vYnIuanNcIjogXCJhZkUyXCIsXG5cdFwiLi9ic1wiOiBcIkpORmJcIixcblx0XCIuL2JzLmpzXCI6IFwiSk5GYlwiLFxuXHRcIi4vY2FcIjogXCJOUWNSXCIsXG5cdFwiLi9jYS5qc1wiOiBcIk5RY1JcIixcblx0XCIuL2NzXCI6IFwiMFY4OFwiLFxuXHRcIi4vY3MuanNcIjogXCIwVjg4XCIsXG5cdFwiLi9jdlwiOiBcImUvNXJcIixcblx0XCIuL2N2LmpzXCI6IFwiZS81clwiLFxuXHRcIi4vY3lcIjogXCJIVFg5XCIsXG5cdFwiLi9jeS5qc1wiOiBcIkhUWDlcIixcblx0XCIuL2RhXCI6IFwib0JsUVwiLFxuXHRcIi4vZGEuanNcIjogXCJvQmxRXCIsXG5cdFwiLi9kZVwiOiBcIkRQcGtcIixcblx0XCIuL2RlLWF0XCI6IFwiN2VwbVwiLFxuXHRcIi4vZGUtYXQuanNcIjogXCI3ZXBtXCIsXG5cdFwiLi9kZS1jaFwiOiBcIm1xNm9cIixcblx0XCIuL2RlLWNoLmpzXCI6IFwibXE2b1wiLFxuXHRcIi4vZGUuanNcIjogXCJEUHBrXCIsXG5cdFwiLi9kdlwiOiBcIkZ5S0lcIixcblx0XCIuL2R2LmpzXCI6IFwiRnlLSVwiLFxuXHRcIi4vZWxcIjogXCJVNUNwXCIsXG5cdFwiLi9lbC5qc1wiOiBcIlU1Q3BcIixcblx0XCIuL2VuLVNHXCI6IFwiSUlnZ1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCJJSWdnXCIsXG5cdFwiLi9lbi1hdVwiOiBcIjJ0bThcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiMnRtOFwiLFxuXHRcIi4vZW4tY2FcIjogXCJieE50XCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcImJ4TnRcIixcblx0XCIuL2VuLWdiXCI6IFwiWW1kUFwiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCJZbWRQXCIsXG5cdFwiLi9lbi1pZVwiOiBcImdMSEdcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiZ0xIR1wiLFxuXHRcIi4vZW4taWxcIjogXCJyVGlTXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcInJUaVNcIixcblx0XCIuL2VuLW56XCI6IFwiT2RzblwiLFxuXHRcIi4vZW4tbnouanNcIjogXCJPZHNuXCIsXG5cdFwiLi9lb1wiOiBcIkdqQkFcIixcblx0XCIuL2VvLmpzXCI6IFwiR2pCQVwiLFxuXHRcIi4vZXNcIjogXCJTS09sXCIsXG5cdFwiLi9lcy1kb1wiOiBcIjh3YStcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiOHdhK1wiLFxuXHRcIi4vZXMtdXNcIjogXCJZTDlDXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIllMOUNcIixcblx0XCIuL2VzLmpzXCI6IFwiU0tPbFwiLFxuXHRcIi4vZXRcIjogXCIrSkhoXCIsXG5cdFwiLi9ldC5qc1wiOiBcIitKSGhcIixcblx0XCIuL2V1XCI6IFwicEFQU1wiLFxuXHRcIi4vZXUuanNcIjogXCJwQVBTXCIsXG5cdFwiLi9mYVwiOiBcInpoU2RcIixcblx0XCIuL2ZhLmpzXCI6IFwiemhTZFwiLFxuXHRcIi4vZmlcIjogXCIvQlRLXCIsXG5cdFwiLi9maS5qc1wiOiBcIi9CVEtcIixcblx0XCIuL2ZvXCI6IFwiSy9KWlwiLFxuXHRcIi4vZm8uanNcIjogXCJLL0paXCIsXG5cdFwiLi9mclwiOiBcIndlaHVcIixcblx0XCIuL2ZyLWNhXCI6IFwiVUtJYVwiLFxuXHRcIi4vZnItY2EuanNcIjogXCJVS0lhXCIsXG5cdFwiLi9mci1jaFwiOiBcInNJY3pcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwic0ljelwiLFxuXHRcIi4vZnIuanNcIjogXCJ3ZWh1XCIsXG5cdFwiLi9meVwiOiBcIlJtV2lcIixcblx0XCIuL2Z5LmpzXCI6IFwiUm1XaVwiLFxuXHRcIi4vZ2FcIjogXCJzNWJZXCIsXG5cdFwiLi9nYS5qc1wiOiBcInM1YllcIixcblx0XCIuL2dkXCI6IFwiQld3dlwiLFxuXHRcIi4vZ2QuanNcIjogXCJCV3d2XCIsXG5cdFwiLi9nbFwiOiBcIjc5NFNcIixcblx0XCIuL2dsLmpzXCI6IFwiNzk0U1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCJqaXhGXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcImppeEZcIixcblx0XCIuL2d1XCI6IFwiVXoyS1wiLFxuXHRcIi4vZ3UuanNcIjogXCJVejJLXCIsXG5cdFwiLi9oZVwiOiBcImRTQjJcIixcblx0XCIuL2hlLmpzXCI6IFwiZFNCMlwiLFxuXHRcIi4vaGlcIjogXCIwdlB1XCIsXG5cdFwiLi9oaS5qc1wiOiBcIjB2UHVcIixcblx0XCIuL2hyXCI6IFwiZm5seVwiLFxuXHRcIi4vaHIuanNcIjogXCJmbmx5XCIsXG5cdFwiLi9odVwiOiBcIkZJK3lcIixcblx0XCIuL2h1LmpzXCI6IFwiRkkreVwiLFxuXHRcIi4vaHktYW1cIjogXCJaeEhuXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIlp4SG5cIixcblx0XCIuL2lkXCI6IFwiS3hEUlwiLFxuXHRcIi4vaWQuanNcIjogXCJLeERSXCIsXG5cdFwiLi9pc1wiOiBcIkgrc0RcIixcblx0XCIuL2lzLmpzXCI6IFwiSCtzRFwiLFxuXHRcIi4vaXRcIjogXCJHeUVKXCIsXG5cdFwiLi9pdC1jaFwiOiBcImpTd0JcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwialN3QlwiLFxuXHRcIi4vaXQuanNcIjogXCJHeUVKXCIsXG5cdFwiLi9qYVwiOiBcImttNkhcIixcblx0XCIuL2phLmpzXCI6IFwia202SFwiLFxuXHRcIi4vanZcIjogXCJXbmpRXCIsXG5cdFwiLi9qdi5qc1wiOiBcIldualFcIixcblx0XCIuL2thXCI6IFwiV1hWZlwiLFxuXHRcIi4va2EuanNcIjogXCJXWFZmXCIsXG5cdFwiLi9ra1wiOiBcInpKTmtcIixcblx0XCIuL2trLmpzXCI6IFwiekpOa1wiLFxuXHRcIi4va21cIjogXCJadUdFXCIsXG5cdFwiLi9rbS5qc1wiOiBcIlp1R0VcIixcblx0XCIuL2tuXCI6IFwiVkNGb1wiLFxuXHRcIi4va24uanNcIjogXCJWQ0ZvXCIsXG5cdFwiLi9rb1wiOiBcIkVwZkNcIixcblx0XCIuL2tvLmpzXCI6IFwiRXBmQ1wiLFxuXHRcIi4va3VcIjogXCJGdmdDXCIsXG5cdFwiLi9rdS5qc1wiOiBcIkZ2Z0NcIixcblx0XCIuL2t5XCI6IFwiUGZtb1wiLFxuXHRcIi4va3kuanNcIjogXCJQZm1vXCIsXG5cdFwiLi9sYlwiOiBcIndTVEVcIixcblx0XCIuL2xiLmpzXCI6IFwid1NURVwiLFxuXHRcIi4vbG9cIjogXCJJS1drXCIsXG5cdFwiLi9sby5qc1wiOiBcIklLV2tcIixcblx0XCIuL2x0XCI6IFwid1VydlwiLFxuXHRcIi4vbHQuanNcIjogXCJ3VXJ2XCIsXG5cdFwiLi9sdlwiOiBcInhWT0hcIixcblx0XCIuL2x2LmpzXCI6IFwieFZPSFwiLFxuXHRcIi4vbWVcIjogXCJyaVV4XCIsXG5cdFwiLi9tZS5qc1wiOiBcInJpVXhcIixcblx0XCIuL21pXCI6IFwiYjFZTlwiLFxuXHRcIi4vbWkuanNcIjogXCJiMVlOXCIsXG5cdFwiLi9ta1wiOiBcInlQd0NcIixcblx0XCIuL21rLmpzXCI6IFwieVB3Q1wiLFxuXHRcIi4vbWxcIjogXCJkUzNUXCIsXG5cdFwiLi9tbC5qc1wiOiBcImRTM1RcIixcblx0XCIuL21uXCI6IFwiOEo3UFwiLFxuXHRcIi4vbW4uanNcIjogXCI4SjdQXCIsXG5cdFwiLi9tclwiOiBcIkNsYStcIixcblx0XCIuL21yLmpzXCI6IFwiQ2xhK1wiLFxuXHRcIi4vbXNcIjogXCJWYmJjXCIsXG5cdFwiLi9tcy1teVwiOiBcInFlbEpcIixcblx0XCIuL21zLW15LmpzXCI6IFwicWVsSlwiLFxuXHRcIi4vbXMuanNcIjogXCJWYmJjXCIsXG5cdFwiLi9tdFwiOiBcIllrdkJcIixcblx0XCIuL210LmpzXCI6IFwiWWt2QlwiLFxuXHRcIi4vbXlcIjogXCI0bFpLXCIsXG5cdFwiLi9teS5qc1wiOiBcIjRsWktcIixcblx0XCIuL25iXCI6IFwiNGRYYlwiLFxuXHRcIi4vbmIuanNcIjogXCI0ZFhiXCIsXG5cdFwiLi9uZVwiOiBcImRocWFcIixcblx0XCIuL25lLmpzXCI6IFwiZGhxYVwiLFxuXHRcIi4vbmxcIjogXCJvUEkxXCIsXG5cdFwiLi9ubC1iZVwiOiBcIlhMSXVcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiWExJdVwiLFxuXHRcIi4vbmwuanNcIjogXCJvUEkxXCIsXG5cdFwiLi9ublwiOiBcIlQ5b3hcIixcblx0XCIuL25uLmpzXCI6IFwiVDlveFwiLFxuXHRcIi4vcGEtaW5cIjogXCJMeTljXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIkx5OWNcIixcblx0XCIuL3BsXCI6IFwiTVg5cFwiLFxuXHRcIi4vcGwuanNcIjogXCJNWDlwXCIsXG5cdFwiLi9wdFwiOiBcIlZWUDNcIixcblx0XCIuL3B0LWJyXCI6IFwicWF0SlwiLFxuXHRcIi4vcHQtYnIuanNcIjogXCJxYXRKXCIsXG5cdFwiLi9wdC5qc1wiOiBcIlZWUDNcIixcblx0XCIuL3JvXCI6IFwiMnhKT1wiLFxuXHRcIi4vcm8uanNcIjogXCIyeEpPXCIsXG5cdFwiLi9ydVwiOiBcImVxUzRcIixcblx0XCIuL3J1LmpzXCI6IFwiZXFTNFwiLFxuXHRcIi4vc2RcIjogXCI2SHV2XCIsXG5cdFwiLi9zZC5qc1wiOiBcIjZIdXZcIixcblx0XCIuL3NlXCI6IFwib3BaQlwiLFxuXHRcIi4vc2UuanNcIjogXCJvcFpCXCIsXG5cdFwiLi9zaVwiOiBcIlVleW5cIixcblx0XCIuL3NpLmpzXCI6IFwiVWV5blwiLFxuXHRcIi4vc2tcIjogXCJZSXZBXCIsXG5cdFwiLi9zay5qc1wiOiBcIllJdkFcIixcblx0XCIuL3NsXCI6IFwiczJleFwiLFxuXHRcIi4vc2wuanNcIjogXCJzMmV4XCIsXG5cdFwiLi9zcVwiOiBcIjlvL1ZcIixcblx0XCIuL3NxLmpzXCI6IFwiOW8vVlwiLFxuXHRcIi4vc3JcIjogXCJDWkU4XCIsXG5cdFwiLi9zci1jeXJsXCI6IFwieFhlUFwiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcInhYZVBcIixcblx0XCIuL3NyLmpzXCI6IFwiQ1pFOFwiLFxuXHRcIi4vc3NcIjogXCJ6M2FkXCIsXG5cdFwiLi9zcy5qc1wiOiBcInozYWRcIixcblx0XCIuL3N2XCI6IFwiQVZONVwiLFxuXHRcIi4vc3YuanNcIjogXCJBVk41XCIsXG5cdFwiLi9zd1wiOiBcInkyK0NcIixcblx0XCIuL3N3LmpzXCI6IFwieTIrQ1wiLFxuXHRcIi4vdGFcIjogXCJpL3F5XCIsXG5cdFwiLi90YS5qc1wiOiBcImkvcXlcIixcblx0XCIuL3RlXCI6IFwiWm92MVwiLFxuXHRcIi4vdGUuanNcIjogXCJab3YxXCIsXG5cdFwiLi90ZXRcIjogXCI2dWNWXCIsXG5cdFwiLi90ZXQuanNcIjogXCI2dWNWXCIsXG5cdFwiLi90Z1wiOiBcImNMRVhcIixcblx0XCIuL3RnLmpzXCI6IFwiY0xFWFwiLFxuXHRcIi4vdGhcIjogXCJjWUQ0XCIsXG5cdFwiLi90aC5qc1wiOiBcImNZRDRcIixcblx0XCIuL3RsLXBoXCI6IFwiK0xzMlwiLFxuXHRcIi4vdGwtcGguanNcIjogXCIrTHMyXCIsXG5cdFwiLi90bGhcIjogXCJzQ1pvXCIsXG5cdFwiLi90bGguanNcIjogXCJzQ1pvXCIsXG5cdFwiLi90clwiOiBcIk54MDZcIixcblx0XCIuL3RyLmpzXCI6IFwiTngwNlwiLFxuXHRcIi4vdHpsXCI6IFwieDBUUlwiLFxuXHRcIi4vdHpsLmpzXCI6IFwieDBUUlwiLFxuXHRcIi4vdHptXCI6IFwiZUhwSVwiLFxuXHRcIi4vdHptLWxhdG5cIjogXCJjZURyXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcImNlRHJcIixcblx0XCIuL3R6bS5qc1wiOiBcImVIcElcIixcblx0XCIuL3VnLWNuXCI6IFwiYTF4OVwiLFxuXHRcIi4vdWctY24uanNcIjogXCJhMXg5XCIsXG5cdFwiLi91a1wiOiBcImpBdzdcIixcblx0XCIuL3VrLmpzXCI6IFwiakF3N1wiLFxuXHRcIi4vdXJcIjogXCJVWjZRXCIsXG5cdFwiLi91ci5qc1wiOiBcIlVaNlFcIixcblx0XCIuL3V6XCI6IFwiZVlJL1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIk1UY1dcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCJNVGNXXCIsXG5cdFwiLi91ei5qc1wiOiBcImVZSS9cIixcblx0XCIuL3ZpXCI6IFwicmlMSVwiLFxuXHRcIi4vdmkuanNcIjogXCJyaUxJXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIkVTa3pcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiRVNrelwiLFxuXHRcIi4veW9cIjogXCJ0TDg2XCIsXG5cdFwiLi95by5qc1wiOiBcInRMODZcIixcblx0XCIuL3poLWNuXCI6IFwiL2NUVVwiLFxuXHRcIi4vemgtY24uanNcIjogXCIvY1RVXCIsXG5cdFwiLi96aC1oa1wiOiBcImRIMGtcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiZEgwa1wiLFxuXHRcIi4vemgtdHdcIjogXCIwK0NyXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIjArQ3JcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiRDlXTlwiOyIsImltcG9ydCB7IFRZUEVfTUFQIH0gZnJvbSAnLi9Db25kaXRpb24nXG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb25kaXRpb25zKGRhdGEpIHtcbiAgaWYoZGF0YS50eXBlID09PSBUWVBFX01BUC5FWFBSRVNTSU9OKSB7XG4gICAgY29uc3QgeyBmYWN0LCB2YWx1ZSwgb3BlcmF0b3IgfSA9IGRhdGFcbiAgICByZXR1cm4geyBmYWN0LCBvcGVyYXRvciwgdmFsdWUgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHsgdHlwZSwgcHJpb3JpdHksIHN1YkNvbmRpdGlvbnMgfSA9IGRhdGFcbiAgICByZXR1cm4ge1xuICAgICAgcHJpb3JpdHksXG4gICAgICBbdHlwZV06IHN1YkNvbmRpdGlvbnMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemVDb25kaXRpb25zKGl0ZW0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgUm91dGUsXG4gICAgTGluayxcbiAgICBOYXZMaW5rLFxuICAgIFJlZGlyZWN0LFxuICAgIFN3aXRjaCxcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvdGhlbWUnXG5cbmNvbnN0IFBhZ2UgPSAoeyBoaXN0b3J5LCBtYXRjaCwgbG9jYXRpb24gfSkgPT4gKFxuICAgIDxUaGVtZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgeyh7IHRoZW1lOiB7IGJhY2tncm91bmRDb2xvciwgdGV4dENvbG9yIH0gfSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciwgY29sb3I6IHRleHRDb2xvciB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8aDE+NDA0IFBhZ2U8L2gxPlxuICAgICAgICAgICAgPHA+6aG16Z2i6LWw5Lii5LqGPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDwvVGhlbWVDb250ZXh0LkNvbnN1bWVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFBhZ2UpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWxlY3QsIEZvcm0sIElucHV0LCBJY29uIH0gZnJvbSAnYW50ZCdcbmNvbnN0IHsgSXRlbTogRm9ybUl0ZW0gfSA9IEZvcm1cbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3RcblxuZXhwb3J0IGNvbnN0IFRZUEVfTUFQID0ge1xuICBBTEw6ICdhbGwnLFxuICBBTlk6ICdhbnknLFxuICBFWFBSRVNTSU9OOiAnZXhwcmVzc2lvbicsXG59XG5cbmNvbnN0IFRZUEVTID0gT2JqZWN0LnZhbHVlcyhUWVBFX01BUClcblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbk1vZGVsIHtcbiAgY29uc3RydWN0b3IoeyB0eXBlLCBmYWN0PScnLCBvcGVyYXRvcj0nJywgdmFsdWU9JycsIHN1YkNvbmRpdGlvbnM9W10sIHByaW9yaXR5PTEgfSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGVcbiAgICB0aGlzLmlkID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMClcbiAgICB0aGlzLmZhY3QgPSBmYWN0XG4gICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgdGhpcy5zdWJDb25kaXRpb25zID0gc3ViQ29uZGl0aW9uc1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICB9XG59XG5cbmNvbnN0IEFsbCA9IG1lbW8oKCkgPT4ge1xuICByZXR1cm4gbnVsbFxuXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPGRpdiBjbGFzc05hbWU9XCJhbGxcIj5cbiAgLy8gICAgIDxUYWcgY29sb3I9XCJibHVlXCI+YWxsPC9UYWc+XG4gIC8vICAgPC9kaXY+XG4gIC8vIClcbn0pXG5cbmNvbnN0IEFueSA9IG1lbW8oKCkgPT4ge1xuICByZXR1cm4gbnVsbFxuXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPGRpdiBjbGFzc05hbWU9XCJhbnlcIj5cbiAgLy8gICAgIDxUYWcgY29sb3I9XCJwdXJwbGVcIj5wdXJwbGU8L1RhZz5cbiAgLy8gICA8L2Rpdj5cbiAgLy8gKVxufSlcblxuY29uc3QgT1BFUkFUT1JTID0gW1xuICAnZXF1YWwnLFxuICAnbm90RXF1YWwnLFxuICAnbGVzc1RoYW4nLFxuICAnbGVzc1RoYW5JbmNsdXNpdmUnLFxuICAnZ3JlYXRlclRoYW4nLFxuICAnZ3JlYXRlclRoYW5JbmNsdXNpdmUnLFxuICAnaW4nLFxuICAnbm90SW4nLFxuICAnY29udGFpbnMnLFxuICAnZG9lc05vdENvbnRhaW4nLFxuXVxuXG5jb25zdCBFeHByZXNzaW9uID0gbWVtbygoeyBmYWN0LCBvcGVyYXRvciwgdmFsdWUsIG9uQ2hhbmdlIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlRmFjdENoYW5nZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgb25DaGFuZ2UoJ2ZhY3QnLCBlLnRhcmdldC52YWx1ZSlcbiAgfSwgW29uQ2hhbmdlXSlcblxuICBjb25zdCBoYW5kbGVPcGVyYXRvckNoYW5nZSA9IHVzZUNhbGxiYWNrKCh2KSA9PiB7XG4gICAgb25DaGFuZ2UoJ29wZXJhdG9yJywgdilcbiAgfSwgW29uQ2hhbmdlXSlcblxuICBjb25zdCBoYW5kbGVWYWx1ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgb25DaGFuZ2UoJ3ZhbHVlJywgZS50YXJnZXQudmFsdWUpXG4gIH0sIFtvbkNoYW5nZV0pXG5cbiAgLypcbiAgICBUT0RPOiB2YWx1ZSDlj6/ku6XkuLrlkITnp43mlbDmja7moLzlvI86IHVuZGVmaW5lZC9udWxsL251bWJlci9zdHJpbmcvYm9vbGVhbi9zeW1ib2wvb2JqZWN0XG4gICovXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBsYXlvdXQ9XCJpbmxpbmVcIj5cbiAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJmYWN0XCJcbiAgICAgICAgICB2YWx1ZT17ZmFjdH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmFjdENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICB2YWx1ZT17b3BlcmF0b3J9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9wZXJhdG9yQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgT1BFUkFUT1JTLm1hcCgob3ApID0+IChcbiAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgIGtleT17b3B9XG4gICAgICAgICAgICAgICAgdmFsdWU9e29wfVxuICAgICAgICAgICAgICA+e29wfTwvT3B0aW9uPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ2YWx1ZVwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVWYWx1ZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgPC9Gb3JtPlxuICApXG59KVxuXG5jb25zdCBTdWJDb21wb25lbnRNYXAgPSB7XG4gIFtUWVBFX01BUC5BTExdOiBBbGwsXG4gIFtUWVBFX01BUC5BTlldOiBBbnksXG4gIFtUWVBFX01BUC5FWFBSRVNTSU9OXTogRXhwcmVzc2lvbixcbn1cblxuY29uc3QgQ29uZGl0aW9uID0gbWVtbygoeyBpbmRleCwgZGF0YSwgb25DaGFuZ2UsIG9uRGVsZXRlIH0pID0+IHtcbiAgY29uc3QgaGFuZGxUeXBlZUNoYW5nZSA9IHVzZUNhbGxiYWNrKCh2KSA9PiB7XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4uZGF0YSxcbiAgICAgIHR5cGU6IHYsXG4gICAgICBzdWJDb25kaXRpb25zOiB2ID09PSBUWVBFX01BUC5FWFBSRVNTSU9OID8gW10gOiBkYXRhLnN1YkNvbmRpdGlvbnNcbiAgICB9LCBpbmRleClcbiAgfSwgW2RhdGEsIGluZGV4LCBvbkNoYW5nZV0pXG5cbiAgY29uc3QgaGFuZGxlQWRkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG9uQ2hhbmdlKHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBzdWJDb25kaXRpb25zOiBbXG4gICAgICAgIC4uLihkYXRhLnN1YkNvbmRpdGlvbnMpLFxuICAgICAgICBuZXcgQ29uZGl0aW9uTW9kZWwoeyB0eXBlOiBUWVBFX01BUC5FWFBSRVNTSU9OIH0pXG4gICAgICBdXG4gICAgfSwgaW5kZXgpXG4gIH0sIFtkYXRhLCBpbmRleCwgb25DaGFuZ2VdKVxuXG4gIGNvbnN0IGhhbmRsZVN1YkNoYW5nZSA9IHVzZUNhbGxiYWNrKChzdWJEYXRhLCBpZHgpID0+IHtcbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5kYXRhLFxuICAgICAgc3ViQ29uZGl0aW9uczogZGF0YS5zdWJDb25kaXRpb25zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBpZihpICE9PSBpZHgpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJEYXRhXG4gICAgICB9KVxuICAgIH0sIGluZGV4KVxuICB9LCBbZGF0YSwgaW5kZXgsIG9uQ2hhbmdlXSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoa2V5LCB2YWx1ZSkgPT4ge1xuICAgIG9uQ2hhbmdlKHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBba2V5XTogdmFsdWVcbiAgICB9LCBpbmRleClcbiAgfSwgW2RhdGEsIGluZGV4LCBvbkNoYW5nZV0pXG5cbiAgY29uc3QgaGFuZGxlU3ViRGVsZXRlID0gdXNlQ2FsbGJhY2soKGkpID0+IHtcbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5kYXRhLFxuICAgICAgc3ViQ29uZGl0aW9uczogZGF0YS5zdWJDb25kaXRpb25zLmZpbHRlcigoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgIHJldHVybiBpZHggIT09IGlcbiAgICAgIH0pXG4gICAgfSwgaW5kZXgpXG4gIH0sIFtkYXRhLCBpbmRleCwgb25DaGFuZ2VdKVxuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBvbkRlbGV0ZShpbmRleClcbiAgfSwgW2luZGV4LCBvbkRlbGV0ZV0pXG5cbiAgY29uc3QgeyB0eXBlLCBmYWN0LCBvcGVyYXRvciwgdmFsdWUsIHN1YkNvbmRpdGlvbnMgfSA9IGRhdGFcbiAgY29uc3QgU3ViQ29tcCA9IFN1YkNvbXBvbmVudE1hcFt0eXBlXVxuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbmRpdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgIDxTZWxlY3QgdmFsdWU9e3R5cGV9IHN0eWxlPXt7IHdpZHRoOiAxMjAgfX0gb25DaGFuZ2U9e2hhbmRsVHlwZWVDaGFuZ2V9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFRZUEVTLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpdGVtfSB2YWx1ZT17aXRlbX0+e2l0ZW19PC9PcHRpb24+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAge1xuICAgICAgICAgIFtUWVBFX01BUC5BTEwsIFRZUEVfTUFQLkFOWV0uaW5jbHVkZXModHlwZSkgJiZcbiAgICAgICAgICA8SWNvbiB0eXBlPVwicGx1cy1zcXVhcmVcIiB0aGVtZT1cInR3b1RvbmVcIiBvbkNsaWNrPXtoYW5kbGVBZGR9Lz5cbiAgICAgICAgfVxuICAgICAgICA8SWNvbiB0eXBlPVwiZGVsZXRlXCIgdGhlbWU9XCJ0d29Ub25lXCIgb25DbGljaz17aGFuZGxlRGVsZXRlfS8+XG4gICAgICAgIHtcbiAgICAgICAgICBTdWJDb21wICYmXG4gICAgICAgICAgPFN1YkNvbXBcbiAgICAgICAgICAgIGZhY3Q9e2ZhY3R9XG4gICAgICAgICAgICBvcGVyYXRvcj17b3BlcmF0b3J9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItY29uZGl0aW9uLWxpc3RcIj5cbiAgICAgICAge1xuICAgICAgICAgICEhc3ViQ29uZGl0aW9ucy5sZW5ndGggJiZcbiAgICAgICAgICBzdWJDb25kaXRpb25zLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENvbmRpdGlvblxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICBpbmRleD17aX1cbiAgICAgICAgICAgICAgICBkYXRhPXsgaXRlbSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBoYW5kbGVTdWJDaGFuZ2UgfVxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsgaGFuZGxlU3ViRGVsZXRlIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXG5cbmltcG9ydCBUaGVtZUNvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC90aGVtZSdcbmltcG9ydCBDb25kaXRpb24sIHsgVFlQRV9NQVAsIENvbmRpdGlvbk1vZGVsIH0gZnJvbSAnLi9Db25kaXRpb24nXG5pbXBvcnQgeyBub3JtYWxpemVDb25kaXRpb25zIH0gZnJvbSAnLi91dGlsJ1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobmV3IENvbmRpdGlvbk1vZGVsKHsgdHlwZTogVFlQRV9NQVAuQUxMIH0pKVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZGF0YSkgPT4ge1xuICAgIHNldERhdGEoZGF0YSlcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBub3JtYWxpemVDb25kaXRpb25zKGRhdGEpXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY29uZGl0aW9ucykpXG4gIH0sIFtkYXRhXSlcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7KHsgdGhlbWU6IHsgYmFja2dyb3VuZENvbG9yLCB0ZXh0Q29sb3IgfSB9KSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciwgY29sb3I6IHRleHRDb2xvciB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICA8Q29uZGl0aW9uXG4gICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+56Gu5a6aPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1RoZW1lQ29udGV4dC5Db25zdW1lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFBhZ2UpIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYm9keSB7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDsgfVxcblxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlOyB9XFxuXFxuLmNvbmRpdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuICAuY29uZGl0aW9uIC5hbnQtaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDEwMHB4OyB9XFxuICAuY29uZGl0aW9uIC5hbnQtc2VsZWN0IHtcXG4gICAgd2lkdGg6IDE3MHB4OyB9XFxuICAuY29uZGl0aW9uIC5hbnQtZm9ybS1pbmxpbmUgLmFudC1mb3JtLWl0ZW0ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDsgfVxcbiAgLmNvbmRpdGlvbiAuYW50LWZvcm0taW5saW5lIC5hbnQtZm9ybS1pdGVtOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gIC5jb25kaXRpb24gLmNvbnRlbnQge1xcbiAgICBtYXgtd2lkdGg6IDQxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgICBwYWRkaW5nOiA1cHg7IH1cXG4gIC5jb25kaXRpb24gLnN1Yi1jb25kaXRpb24tbGlzdCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7IH1cXG5cIiwgXCJcIl0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==