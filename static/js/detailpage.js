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
      subConditions = _ref$subConditions === void 0 ? [] : _ref$subConditions;

  _classCallCheck(this, ConditionModel);

  this.type = type;
  this.id = parseInt(Math.random() * 100000000);
  this.fact = fact;
  this.operator = operator;
  this.value = value;
  this.subConditions = subConditions;
};
var All = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "all"));
});
var Any = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "any",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    color: "purple",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "purple"));
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
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "fact",
    value: fact,
    onChange: handleFactChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    value: operator,
    onChange: handleOperatorChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, OPERATORS.map(function (op) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
      key: op,
      value: op,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, op);
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "value",
    value: value,
    onChange: handleValueChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })));
});
var SubComponentMap = (_SubComponentMap = {}, _defineProperty(_SubComponentMap, TYPE_MAP.ALL, All), _defineProperty(_SubComponentMap, TYPE_MAP.ANY, Any), _defineProperty(_SubComponentMap, TYPE_MAP.EXPRESSION, Expression), _SubComponentMap);
var Condition = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref3) {
  var index = _ref3.index,
      data = _ref3.data,
      onChange = _ref3.onChange;
  var handlTypeeChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (v) {
    onChange(_objectSpread({}, data, {
      type: v
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
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
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
      lineNumber: 156
    },
    __self: this
  }, TYPES.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
      key: item,
      value: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, item);
  })), SubComp && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubComp, {
    fact: fact,
    operator: operator,
    value: value,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }), [TYPE_MAP.ALL, TYPE_MAP.ANY].includes(type) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    onClick: handleAdd,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "+\u5B50\u6761\u4EF6")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sub-condition-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, !!subConditions.length && subConditions.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Condition, {
      key: item.id,
      index: i,
      data: item,
      onChange: handleSubChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
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
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "cJLt");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);
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
  }, [data]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_theme__WEBPACK_IMPORTED_MODULE_3__["default"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
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
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Condition__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: data,
      onChange: handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
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
exports.push([module.i, ".body {\n  padding-bottom: 50px; }\n\n.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  padding: 10px 20px;\n  text-align: right;\n  background-color: #eee; }\n\n.condition {\n  display: flex; }\n  .condition .ant-input {\n    max-width: 100px; }\n  .condition .ant-select {\n    max-width: 170px; }\n  .condition .ant-form-inline .ant-form-item:not(:last-child) {\n    margin-right: 5px; }\n  .condition .content {\n    max-width: 400px;\n    border: 1px solid #000; }\n  .condition .sub-condition-list {\n    flex: 1;\n    border: 1px solid #000; }\n", ""]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL3BhZ2VzL3NlYXJjaC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhZ2VzLzQwNC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYWdlcy9kZXRhaWwvQ29uZGl0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhZ2VzL2RldGFpbC9pbmRleC5zY3NzPzQyNGUiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYWdlcy9kZXRhaWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uLi9zcmMvcGFnZXMvZGV0YWlsL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwic2VhcmNoIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJhY3Rpb25DcmVhdG9ycyIsImlucHV0U2VhcmNoIiwiZGlzcGF0Y2giLCJyZXNldFNlYXJjaCIsIlBhZ2UiLCJoaXN0b3J5IiwibWF0Y2giLCJsb2NhdGlvbiIsInVzZVJlZHVjZXIiLCJ0aGVtZSIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciIsImNvbG9yIiwiZSIsInRhcmdldCIsInZhbHVlIiwid2l0aFJvdXRlciIsIkZvcm1JdGVtIiwiRm9ybSIsIkl0ZW0iLCJPcHRpb24iLCJTZWxlY3QiLCJUWVBFX01BUCIsIkFMTCIsIkFOWSIsIkVYUFJFU1NJT04iLCJUWVBFUyIsIk9iamVjdCIsInZhbHVlcyIsIkNvbmRpdGlvbk1vZGVsIiwiZmFjdCIsIm9wZXJhdG9yIiwic3ViQ29uZGl0aW9ucyIsImlkIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiQWxsIiwibWVtbyIsIkFueSIsIk9QRVJBVE9SUyIsIkV4cHJlc3Npb24iLCJvbkNoYW5nZSIsImhhbmRsZUZhY3RDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImhhbmRsZU9wZXJhdG9yQ2hhbmdlIiwidiIsImhhbmRsZVZhbHVlQ2hhbmdlIiwibWFwIiwib3AiLCJTdWJDb21wb25lbnRNYXAiLCJDb25kaXRpb24iLCJpbmRleCIsImRhdGEiLCJoYW5kbFR5cGVlQ2hhbmdlIiwiaGFuZGxlQWRkIiwiaGFuZGxlU3ViQ2hhbmdlIiwic3ViRGF0YSIsImlkeCIsIml0ZW0iLCJpIiwiaGFuZGxlQ2hhbmdlIiwia2V5IiwiU3ViQ29tcCIsIndpZHRoIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJ1c2VTdGF0ZSIsInNldERhdGEiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsUUFBTSxFQUFFO0FBRFMsQ0FBckI7O0FBSUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQzVCLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUssT0FBTDtBQUNJLGFBQU87QUFBRUosY0FBTSxFQUFFRyxNQUFNLENBQUNFLE9BQVAsQ0FBZUw7QUFBekIsT0FBUDs7QUFDSixTQUFLLE9BQUw7QUFDSSxhQUFPO0FBQUVBLGNBQU0sRUFBRTtBQUFWLE9BQVA7O0FBQ0o7QUFDSSxhQUFPRSxLQUFQO0FBTlI7QUFRSDs7QUFFRCxJQUFNSSxjQUFjLEdBQUc7QUFDbkJDLGFBQVcsRUFBRSxxQkFBQ0MsUUFBRCxFQUFXUixNQUFYLEVBQXNCO0FBQy9CUSxZQUFRLENBQUM7QUFBRUosVUFBSSxFQUFFLE9BQVI7QUFBaUJDLGFBQU8sRUFBRTtBQUFFTCxjQUFNLEVBQU5BO0FBQUY7QUFBMUIsS0FBRCxDQUFSO0FBQ0gsR0FIa0I7QUFJbkJTLGFBQVcsRUFBRSxxQkFBQ0QsUUFBRCxFQUFjO0FBQ3ZCQSxZQUFRLENBQUM7QUFBRUosVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFSO0FBQ0g7QUFOa0Is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Y0FBNkJBLFNBQTdCO0FBQUEsV0FDQztBQUNFLFdBQUssRUFBRTtBQUFFRCx1QkFBZSxFQUFFQSxlQUFuQjtBQUFvQ0UsYUFBSyxFQUFFRDtBQUEzQyxPQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLDJEQUFDLGtEQUFEO0FBQ0UsVUFBSSxFQUFFMEMsSUFEUjtBQUVFLGNBQVEsRUFBRVEsWUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBSEYsRUFTRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsMkRBQUMsMkNBQUQ7QUFBUSxhQUFPLEVBQUVRLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBVEYsQ0FERDtBQUFBLEdBREgsQ0FERjtBQW1CRCxDQTdCRDs7QUErQmVyRCw4SEFBVSxDQUFDWixJQUFELENBQXpCLEU7Ozs7Ozs7Ozs7O0FDeENBLDJCQUEyQixtQkFBTyxDQUFDLGtFQUFzRDtBQUN6RjtBQUNBLGNBQWMsUUFBUyxVQUFVLHlCQUF5QixFQUFFLGFBQWEsb0JBQW9CLFlBQVksY0FBYyxnQkFBZ0IsdUJBQXVCLHNCQUFzQiwyQkFBMkIsRUFBRSxnQkFBZ0Isa0JBQWtCLEVBQUUsMkJBQTJCLHVCQUF1QixFQUFFLDRCQUE0Qix1QkFBdUIsRUFBRSxpRUFBaUUsd0JBQXdCLEVBQUUseUJBQXlCLHVCQUF1Qiw2QkFBNkIsRUFBRSxvQ0FBb0MsY0FBYyw2QkFBNkIsRUFBRSIsImZpbGUiOiJkZXRhaWxwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvdGhlbWUnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBzZWFyY2g6ICcnXG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgcmV0dXJuIHsgc2VhcmNoOiBhY3Rpb24ucGF5bG9hZC5zZWFyY2ggfVxuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgICByZXR1cm4geyBzZWFyY2g6ICcnIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XG4gICAgaW5wdXRTZWFyY2g6IChkaXNwYXRjaCwgc2VhcmNoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2lucHV0JywgcGF5bG9hZDogeyBzZWFyY2ggfSB9KVxuICAgIH0sXG4gICAgcmVzZXRTZWFyY2g6IChkaXNwYXRjaCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdyZXNldCcgfSlcbiAgICB9LFxufVxuXG5jb25zdCBQYWdlID0gKHsgaGlzdG9yeSwgbWF0Y2gsIGxvY2F0aW9uIH0pID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgICBjb25zdCB7IHNlYXJjaCB9ID0gc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoeyB0aGVtZTogeyBiYWNrZ3JvdW5kQ29sb3IsIHRleHRDb2xvciB9IH0pID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciwgY29sb3I6IHRleHRDb2xvciB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnNlYXJjaDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBzZWFyY2ggfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gYWN0aW9uQ3JlYXRvcnMuaW5wdXRTZWFyY2goZGlzcGF0Y2gsIGUudGFyZ2V0LnZhbHVlKSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17IChlKSA9PiBhY3Rpb25DcmVhdG9ycy5yZXNldFNlYXJjaChkaXNwYXRjaCkgfT5yZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPlNlYXJjaCBQYWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiBoaXN0b3J5LnB1c2goJy9hY3QnKSB9PmdvIHRvIGFjdCBwYWdlPC9idXR0b24+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDwvVGhlbWVDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQYWdlKSIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcImdnYlBcIixcblx0XCIuL2FmLmpzXCI6IFwiZ2diUFwiLFxuXHRcIi4vYXJcIjogXCJ6YXh4XCIsXG5cdFwiLi9hci1kelwiOiBcImZ5WVhcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiZnlZWFwiLFxuXHRcIi4vYXIta3dcIjogXCJqb2dmXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcImpvZ2ZcIixcblx0XCIuL2FyLWx5XCI6IFwieldYRVwiLFxuXHRcIi4vYXItbHkuanNcIjogXCJ6V1hFXCIsXG5cdFwiLi9hci1tYVwiOiBcIjZOYm9cIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiNk5ib1wiLFxuXHRcIi4vYXItc2FcIjogXCJvb1JVXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIm9vUlVcIixcblx0XCIuL2FyLXRuXCI6IFwiWlBlYlwiLFxuXHRcIi4vYXItdG4uanNcIjogXCJaUGViXCIsXG5cdFwiLi9hci5qc1wiOiBcInpheHhcIixcblx0XCIuL2F6XCI6IFwic1RuSlwiLFxuXHRcIi4vYXouanNcIjogXCJzVG5KXCIsXG5cdFwiLi9iZVwiOiBcIm1PS2lcIixcblx0XCIuL2JlLmpzXCI6IFwibU9LaVwiLFxuXHRcIi4vYmdcIjogXCJvYVduXCIsXG5cdFwiLi9iZy5qc1wiOiBcIm9hV25cIixcblx0XCIuL2JtXCI6IFwiVFEzOFwiLFxuXHRcIi4vYm0uanNcIjogXCJUUTM4XCIsXG5cdFwiLi9iblwiOiBcIjZLNXlcIixcblx0XCIuL2JuLmpzXCI6IFwiNks1eVwiLFxuXHRcIi4vYm9cIjogXCJ2UEl5XCIsXG5cdFwiLi9iby5qc1wiOiBcInZQSXlcIixcblx0XCIuL2JyXCI6IFwiYWZFMlwiLFxuXHRcIi4vYnIuanNcIjogXCJhZkUyXCIsXG5cdFwiLi9ic1wiOiBcIkpORmJcIixcblx0XCIuL2JzLmpzXCI6IFwiSk5GYlwiLFxuXHRcIi4vY2FcIjogXCJOUWNSXCIsXG5cdFwiLi9jYS5qc1wiOiBcIk5RY1JcIixcblx0XCIuL2NzXCI6IFwiMFY4OFwiLFxuXHRcIi4vY3MuanNcIjogXCIwVjg4XCIsXG5cdFwiLi9jdlwiOiBcImUvNXJcIixcblx0XCIuL2N2LmpzXCI6IFwiZS81clwiLFxuXHRcIi4vY3lcIjogXCJIVFg5XCIsXG5cdFwiLi9jeS5qc1wiOiBcIkhUWDlcIixcblx0XCIuL2RhXCI6IFwib0JsUVwiLFxuXHRcIi4vZGEuanNcIjogXCJvQmxRXCIsXG5cdFwiLi9kZVwiOiBcIkRQcGtcIixcblx0XCIuL2RlLWF0XCI6IFwiN2VwbVwiLFxuXHRcIi4vZGUtYXQuanNcIjogXCI3ZXBtXCIsXG5cdFwiLi9kZS1jaFwiOiBcIm1xNm9cIixcblx0XCIuL2RlLWNoLmpzXCI6IFwibXE2b1wiLFxuXHRcIi4vZGUuanNcIjogXCJEUHBrXCIsXG5cdFwiLi9kdlwiOiBcIkZ5S0lcIixcblx0XCIuL2R2LmpzXCI6IFwiRnlLSVwiLFxuXHRcIi4vZWxcIjogXCJVNUNwXCIsXG5cdFwiLi9lbC5qc1wiOiBcIlU1Q3BcIixcblx0XCIuL2VuLVNHXCI6IFwiSUlnZ1wiLFxuXHRcIi4vZW4tU0cuanNcIjogXCJJSWdnXCIsXG5cdFwiLi9lbi1hdVwiOiBcIjJ0bThcIixcblx0XCIuL2VuLWF1LmpzXCI6IFwiMnRtOFwiLFxuXHRcIi4vZW4tY2FcIjogXCJieE50XCIsXG5cdFwiLi9lbi1jYS5qc1wiOiBcImJ4TnRcIixcblx0XCIuL2VuLWdiXCI6IFwiWW1kUFwiLFxuXHRcIi4vZW4tZ2IuanNcIjogXCJZbWRQXCIsXG5cdFwiLi9lbi1pZVwiOiBcImdMSEdcIixcblx0XCIuL2VuLWllLmpzXCI6IFwiZ0xIR1wiLFxuXHRcIi4vZW4taWxcIjogXCJyVGlTXCIsXG5cdFwiLi9lbi1pbC5qc1wiOiBcInJUaVNcIixcblx0XCIuL2VuLW56XCI6IFwiT2RzblwiLFxuXHRcIi4vZW4tbnouanNcIjogXCJPZHNuXCIsXG5cdFwiLi9lb1wiOiBcIkdqQkFcIixcblx0XCIuL2VvLmpzXCI6IFwiR2pCQVwiLFxuXHRcIi4vZXNcIjogXCJTS09sXCIsXG5cdFwiLi9lcy1kb1wiOiBcIjh3YStcIixcblx0XCIuL2VzLWRvLmpzXCI6IFwiOHdhK1wiLFxuXHRcIi4vZXMtdXNcIjogXCJZTDlDXCIsXG5cdFwiLi9lcy11cy5qc1wiOiBcIllMOUNcIixcblx0XCIuL2VzLmpzXCI6IFwiU0tPbFwiLFxuXHRcIi4vZXRcIjogXCIrSkhoXCIsXG5cdFwiLi9ldC5qc1wiOiBcIitKSGhcIixcblx0XCIuL2V1XCI6IFwicEFQU1wiLFxuXHRcIi4vZXUuanNcIjogXCJwQVBTXCIsXG5cdFwiLi9mYVwiOiBcInpoU2RcIixcblx0XCIuL2ZhLmpzXCI6IFwiemhTZFwiLFxuXHRcIi4vZmlcIjogXCIvQlRLXCIsXG5cdFwiLi9maS5qc1wiOiBcIi9CVEtcIixcblx0XCIuL2ZvXCI6IFwiSy9KWlwiLFxuXHRcIi4vZm8uanNcIjogXCJLL0paXCIsXG5cdFwiLi9mclwiOiBcIndlaHVcIixcblx0XCIuL2ZyLWNhXCI6IFwiVUtJYVwiLFxuXHRcIi4vZnItY2EuanNcIjogXCJVS0lhXCIsXG5cdFwiLi9mci1jaFwiOiBcInNJY3pcIixcblx0XCIuL2ZyLWNoLmpzXCI6IFwic0ljelwiLFxuXHRcIi4vZnIuanNcIjogXCJ3ZWh1XCIsXG5cdFwiLi9meVwiOiBcIlJtV2lcIixcblx0XCIuL2Z5LmpzXCI6IFwiUm1XaVwiLFxuXHRcIi4vZ2FcIjogXCJzNWJZXCIsXG5cdFwiLi9nYS5qc1wiOiBcInM1YllcIixcblx0XCIuL2dkXCI6IFwiQld3dlwiLFxuXHRcIi4vZ2QuanNcIjogXCJCV3d2XCIsXG5cdFwiLi9nbFwiOiBcIjc5NFNcIixcblx0XCIuL2dsLmpzXCI6IFwiNzk0U1wiLFxuXHRcIi4vZ29tLWxhdG5cIjogXCJqaXhGXCIsXG5cdFwiLi9nb20tbGF0bi5qc1wiOiBcImppeEZcIixcblx0XCIuL2d1XCI6IFwiVXoyS1wiLFxuXHRcIi4vZ3UuanNcIjogXCJVejJLXCIsXG5cdFwiLi9oZVwiOiBcImRTQjJcIixcblx0XCIuL2hlLmpzXCI6IFwiZFNCMlwiLFxuXHRcIi4vaGlcIjogXCIwdlB1XCIsXG5cdFwiLi9oaS5qc1wiOiBcIjB2UHVcIixcblx0XCIuL2hyXCI6IFwiZm5seVwiLFxuXHRcIi4vaHIuanNcIjogXCJmbmx5XCIsXG5cdFwiLi9odVwiOiBcIkZJK3lcIixcblx0XCIuL2h1LmpzXCI6IFwiRkkreVwiLFxuXHRcIi4vaHktYW1cIjogXCJaeEhuXCIsXG5cdFwiLi9oeS1hbS5qc1wiOiBcIlp4SG5cIixcblx0XCIuL2lkXCI6IFwiS3hEUlwiLFxuXHRcIi4vaWQuanNcIjogXCJLeERSXCIsXG5cdFwiLi9pc1wiOiBcIkgrc0RcIixcblx0XCIuL2lzLmpzXCI6IFwiSCtzRFwiLFxuXHRcIi4vaXRcIjogXCJHeUVKXCIsXG5cdFwiLi9pdC1jaFwiOiBcImpTd0JcIixcblx0XCIuL2l0LWNoLmpzXCI6IFwialN3QlwiLFxuXHRcIi4vaXQuanNcIjogXCJHeUVKXCIsXG5cdFwiLi9qYVwiOiBcImttNkhcIixcblx0XCIuL2phLmpzXCI6IFwia202SFwiLFxuXHRcIi4vanZcIjogXCJXbmpRXCIsXG5cdFwiLi9qdi5qc1wiOiBcIldualFcIixcblx0XCIuL2thXCI6IFwiV1hWZlwiLFxuXHRcIi4va2EuanNcIjogXCJXWFZmXCIsXG5cdFwiLi9ra1wiOiBcInpKTmtcIixcblx0XCIuL2trLmpzXCI6IFwiekpOa1wiLFxuXHRcIi4va21cIjogXCJadUdFXCIsXG5cdFwiLi9rbS5qc1wiOiBcIlp1R0VcIixcblx0XCIuL2tuXCI6IFwiVkNGb1wiLFxuXHRcIi4va24uanNcIjogXCJWQ0ZvXCIsXG5cdFwiLi9rb1wiOiBcIkVwZkNcIixcblx0XCIuL2tvLmpzXCI6IFwiRXBmQ1wiLFxuXHRcIi4va3VcIjogXCJGdmdDXCIsXG5cdFwiLi9rdS5qc1wiOiBcIkZ2Z0NcIixcblx0XCIuL2t5XCI6IFwiUGZtb1wiLFxuXHRcIi4va3kuanNcIjogXCJQZm1vXCIsXG5cdFwiLi9sYlwiOiBcIndTVEVcIixcblx0XCIuL2xiLmpzXCI6IFwid1NURVwiLFxuXHRcIi4vbG9cIjogXCJJS1drXCIsXG5cdFwiLi9sby5qc1wiOiBcIklLV2tcIixcblx0XCIuL2x0XCI6IFwid1VydlwiLFxuXHRcIi4vbHQuanNcIjogXCJ3VXJ2XCIsXG5cdFwiLi9sdlwiOiBcInhWT0hcIixcblx0XCIuL2x2LmpzXCI6IFwieFZPSFwiLFxuXHRcIi4vbWVcIjogXCJyaVV4XCIsXG5cdFwiLi9tZS5qc1wiOiBcInJpVXhcIixcblx0XCIuL21pXCI6IFwiYjFZTlwiLFxuXHRcIi4vbWkuanNcIjogXCJiMVlOXCIsXG5cdFwiLi9ta1wiOiBcInlQd0NcIixcblx0XCIuL21rLmpzXCI6IFwieVB3Q1wiLFxuXHRcIi4vbWxcIjogXCJkUzNUXCIsXG5cdFwiLi9tbC5qc1wiOiBcImRTM1RcIixcblx0XCIuL21uXCI6IFwiOEo3UFwiLFxuXHRcIi4vbW4uanNcIjogXCI4SjdQXCIsXG5cdFwiLi9tclwiOiBcIkNsYStcIixcblx0XCIuL21yLmpzXCI6IFwiQ2xhK1wiLFxuXHRcIi4vbXNcIjogXCJWYmJjXCIsXG5cdFwiLi9tcy1teVwiOiBcInFlbEpcIixcblx0XCIuL21zLW15LmpzXCI6IFwicWVsSlwiLFxuXHRcIi4vbXMuanNcIjogXCJWYmJjXCIsXG5cdFwiLi9tdFwiOiBcIllrdkJcIixcblx0XCIuL210LmpzXCI6IFwiWWt2QlwiLFxuXHRcIi4vbXlcIjogXCI0bFpLXCIsXG5cdFwiLi9teS5qc1wiOiBcIjRsWktcIixcblx0XCIuL25iXCI6IFwiNGRYYlwiLFxuXHRcIi4vbmIuanNcIjogXCI0ZFhiXCIsXG5cdFwiLi9uZVwiOiBcImRocWFcIixcblx0XCIuL25lLmpzXCI6IFwiZGhxYVwiLFxuXHRcIi4vbmxcIjogXCJvUEkxXCIsXG5cdFwiLi9ubC1iZVwiOiBcIlhMSXVcIixcblx0XCIuL25sLWJlLmpzXCI6IFwiWExJdVwiLFxuXHRcIi4vbmwuanNcIjogXCJvUEkxXCIsXG5cdFwiLi9ublwiOiBcIlQ5b3hcIixcblx0XCIuL25uLmpzXCI6IFwiVDlveFwiLFxuXHRcIi4vcGEtaW5cIjogXCJMeTljXCIsXG5cdFwiLi9wYS1pbi5qc1wiOiBcIkx5OWNcIixcblx0XCIuL3BsXCI6IFwiTVg5cFwiLFxuXHRcIi4vcGwuanNcIjogXCJNWDlwXCIsXG5cdFwiLi9wdFwiOiBcIlZWUDNcIixcblx0XCIuL3B0LWJyXCI6IFwicWF0SlwiLFxuXHRcIi4vcHQtYnIuanNcIjogXCJxYXRKXCIsXG5cdFwiLi9wdC5qc1wiOiBcIlZWUDNcIixcblx0XCIuL3JvXCI6IFwiMnhKT1wiLFxuXHRcIi4vcm8uanNcIjogXCIyeEpPXCIsXG5cdFwiLi9ydVwiOiBcImVxUzRcIixcblx0XCIuL3J1LmpzXCI6IFwiZXFTNFwiLFxuXHRcIi4vc2RcIjogXCI2SHV2XCIsXG5cdFwiLi9zZC5qc1wiOiBcIjZIdXZcIixcblx0XCIuL3NlXCI6IFwib3BaQlwiLFxuXHRcIi4vc2UuanNcIjogXCJvcFpCXCIsXG5cdFwiLi9zaVwiOiBcIlVleW5cIixcblx0XCIuL3NpLmpzXCI6IFwiVWV5blwiLFxuXHRcIi4vc2tcIjogXCJZSXZBXCIsXG5cdFwiLi9zay5qc1wiOiBcIllJdkFcIixcblx0XCIuL3NsXCI6IFwiczJleFwiLFxuXHRcIi4vc2wuanNcIjogXCJzMmV4XCIsXG5cdFwiLi9zcVwiOiBcIjlvL1ZcIixcblx0XCIuL3NxLmpzXCI6IFwiOW8vVlwiLFxuXHRcIi4vc3JcIjogXCJDWkU4XCIsXG5cdFwiLi9zci1jeXJsXCI6IFwieFhlUFwiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcInhYZVBcIixcblx0XCIuL3NyLmpzXCI6IFwiQ1pFOFwiLFxuXHRcIi4vc3NcIjogXCJ6M2FkXCIsXG5cdFwiLi9zcy5qc1wiOiBcInozYWRcIixcblx0XCIuL3N2XCI6IFwiQVZONVwiLFxuXHRcIi4vc3YuanNcIjogXCJBVk41XCIsXG5cdFwiLi9zd1wiOiBcInkyK0NcIixcblx0XCIuL3N3LmpzXCI6IFwieTIrQ1wiLFxuXHRcIi4vdGFcIjogXCJpL3F5XCIsXG5cdFwiLi90YS5qc1wiOiBcImkvcXlcIixcblx0XCIuL3RlXCI6IFwiWm92MVwiLFxuXHRcIi4vdGUuanNcIjogXCJab3YxXCIsXG5cdFwiLi90ZXRcIjogXCI2dWNWXCIsXG5cdFwiLi90ZXQuanNcIjogXCI2dWNWXCIsXG5cdFwiLi90Z1wiOiBcImNMRVhcIixcblx0XCIuL3RnLmpzXCI6IFwiY0xFWFwiLFxuXHRcIi4vdGhcIjogXCJjWUQ0XCIsXG5cdFwiLi90aC5qc1wiOiBcImNZRDRcIixcblx0XCIuL3RsLXBoXCI6IFwiK0xzMlwiLFxuXHRcIi4vdGwtcGguanNcIjogXCIrTHMyXCIsXG5cdFwiLi90bGhcIjogXCJzQ1pvXCIsXG5cdFwiLi90bGguanNcIjogXCJzQ1pvXCIsXG5cdFwiLi90clwiOiBcIk54MDZcIixcblx0XCIuL3RyLmpzXCI6IFwiTngwNlwiLFxuXHRcIi4vdHpsXCI6IFwieDBUUlwiLFxuXHRcIi4vdHpsLmpzXCI6IFwieDBUUlwiLFxuXHRcIi4vdHptXCI6IFwiZUhwSVwiLFxuXHRcIi4vdHptLWxhdG5cIjogXCJjZURyXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcImNlRHJcIixcblx0XCIuL3R6bS5qc1wiOiBcImVIcElcIixcblx0XCIuL3VnLWNuXCI6IFwiYTF4OVwiLFxuXHRcIi4vdWctY24uanNcIjogXCJhMXg5XCIsXG5cdFwiLi91a1wiOiBcImpBdzdcIixcblx0XCIuL3VrLmpzXCI6IFwiakF3N1wiLFxuXHRcIi4vdXJcIjogXCJVWjZRXCIsXG5cdFwiLi91ci5qc1wiOiBcIlVaNlFcIixcblx0XCIuL3V6XCI6IFwiZVlJL1wiLFxuXHRcIi4vdXotbGF0blwiOiBcIk1UY1dcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCJNVGNXXCIsXG5cdFwiLi91ei5qc1wiOiBcImVZSS9cIixcblx0XCIuL3ZpXCI6IFwicmlMSVwiLFxuXHRcIi4vdmkuanNcIjogXCJyaUxJXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIkVTa3pcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiRVNrelwiLFxuXHRcIi4veW9cIjogXCJ0TDg2XCIsXG5cdFwiLi95by5qc1wiOiBcInRMODZcIixcblx0XCIuL3poLWNuXCI6IFwiL2NUVVwiLFxuXHRcIi4vemgtY24uanNcIjogXCIvY1RVXCIsXG5cdFwiLi96aC1oa1wiOiBcImRIMGtcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiZEgwa1wiLFxuXHRcIi4vemgtdHdcIjogXCIwK0NyXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIjArQ3JcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiRDlXTlwiOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgUm91dGUsXG4gICAgTGluayxcbiAgICBOYXZMaW5rLFxuICAgIFJlZGlyZWN0LFxuICAgIFN3aXRjaCxcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvdGhlbWUnXG5cbmNvbnN0IFBhZ2UgPSAoeyBoaXN0b3J5LCBtYXRjaCwgbG9jYXRpb24gfSkgPT4gKFxuICAgIDxUaGVtZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgeyh7IHRoZW1lOiB7IGJhY2tncm91bmRDb2xvciwgdGV4dENvbG9yIH0gfSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciwgY29sb3I6IHRleHRDb2xvciB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8aDE+NDA0IFBhZ2U8L2gxPlxuICAgICAgICAgICAgPHA+6aG16Z2i6LWw5Lii5LqGPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDwvVGhlbWVDb250ZXh0LkNvbnN1bWVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFBhZ2UpIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUYWcsIFNlbGVjdCwgQnV0dG9uLCBGb3JtLCBJbnB1dCB9IGZyb20gJ2FudGQnXG5jb25zdCB7IEl0ZW06IEZvcm1JdGVtIH0gPSBGb3JtXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0XG5cbmV4cG9ydCBjb25zdCBUWVBFX01BUCA9IHtcbiAgQUxMOiAnYWxsJyxcbiAgQU5ZOiAnYW55JyxcbiAgRVhQUkVTU0lPTjogJ2V4cHJlc3Npb24nLFxufVxuXG5jb25zdCBUWVBFUyA9IE9iamVjdC52YWx1ZXMoVFlQRV9NQVApXG5cbmV4cG9ydCBjbGFzcyBDb25kaXRpb25Nb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHsgdHlwZSwgZmFjdD0nJywgb3BlcmF0b3I9JycsIHZhbHVlPScnLCBzdWJDb25kaXRpb25zPVtdIH0pIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlXG4gICAgdGhpcy5pZCA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApXG4gICAgdGhpcy5mYWN0ID0gZmFjdFxuICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgIHRoaXMuc3ViQ29uZGl0aW9ucyA9IHN1YkNvbmRpdGlvbnNcbiAgfVxufVxuXG5jb25zdCBBbGwgPSBtZW1vKCgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFsbFwiPlxuICAgICAgPFRhZyBjb2xvcj1cImJsdWVcIj5hbGw8L1RhZz5cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuY29uc3QgQW55ID0gbWVtbygoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbnlcIj5cbiAgICAgIDxUYWcgY29sb3I9XCJwdXJwbGVcIj5wdXJwbGU8L1RhZz5cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuY29uc3QgT1BFUkFUT1JTID0gW1xuICAnZXF1YWwnLFxuICAnbm90RXF1YWwnLFxuICAnbGVzc1RoYW4nLFxuICAnbGVzc1RoYW5JbmNsdXNpdmUnLFxuICAnZ3JlYXRlclRoYW4nLFxuICAnZ3JlYXRlclRoYW5JbmNsdXNpdmUnLFxuICAnaW4nLFxuICAnbm90SW4nLFxuICAnY29udGFpbnMnLFxuICAnZG9lc05vdENvbnRhaW4nLFxuXVxuXG5jb25zdCBFeHByZXNzaW9uID0gbWVtbygoeyBmYWN0LCBvcGVyYXRvciwgdmFsdWUsIG9uQ2hhbmdlIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlRmFjdENoYW5nZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgb25DaGFuZ2UoJ2ZhY3QnLCBlLnRhcmdldC52YWx1ZSlcbiAgfSwgW29uQ2hhbmdlXSlcblxuICBjb25zdCBoYW5kbGVPcGVyYXRvckNoYW5nZSA9IHVzZUNhbGxiYWNrKCh2KSA9PiB7XG4gICAgb25DaGFuZ2UoJ29wZXJhdG9yJywgdilcbiAgfSwgW29uQ2hhbmdlXSlcblxuICBjb25zdCBoYW5kbGVWYWx1ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgb25DaGFuZ2UoJ3ZhbHVlJywgZS50YXJnZXQudmFsdWUpXG4gIH0sIFtvbkNoYW5nZV0pXG5cbiAgLypcbiAgICBUT0RPOiB2YWx1ZSDlj6/ku6XkuLrlkITnp43mlbDmja7moLzlvI86IHVuZGVmaW5lZC9udWxsL251bWJlci9zdHJpbmcvYm9vbGVhbi9zeW1ib2wvb2JqZWN0XG4gICovXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBsYXlvdXQ9XCJpbmxpbmVcIj5cbiAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJmYWN0XCJcbiAgICAgICAgICB2YWx1ZT17ZmFjdH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmFjdENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICB2YWx1ZT17b3BlcmF0b3J9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9wZXJhdG9yQ2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgT1BFUkFUT1JTLm1hcCgob3ApID0+IChcbiAgICAgICAgICAgICAgPE9wdGlvblxuICAgICAgICAgICAgICAgIGtleT17b3B9XG4gICAgICAgICAgICAgICAgdmFsdWU9e29wfVxuICAgICAgICAgICAgICA+e29wfTwvT3B0aW9uPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ2YWx1ZVwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVWYWx1ZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgPC9Gb3JtPlxuICApXG59KVxuXG5jb25zdCBTdWJDb21wb25lbnRNYXAgPSB7XG4gIFtUWVBFX01BUC5BTExdOiBBbGwsXG4gIFtUWVBFX01BUC5BTlldOiBBbnksXG4gIFtUWVBFX01BUC5FWFBSRVNTSU9OXTogRXhwcmVzc2lvbixcbn1cblxuY29uc3QgQ29uZGl0aW9uID0gbWVtbygoeyBpbmRleCwgZGF0YSwgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCBoYW5kbFR5cGVlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKHYpID0+IHtcbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5kYXRhLFxuICAgICAgdHlwZTogdlxuICAgIH0sIGluZGV4KVxuICB9LCBbZGF0YSwgaW5kZXgsIG9uQ2hhbmdlXSlcblxuICBjb25zdCBoYW5kbGVBZGQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4uZGF0YSxcbiAgICAgIHN1YkNvbmRpdGlvbnM6IFtcbiAgICAgICAgLi4uKGRhdGEuc3ViQ29uZGl0aW9ucyksXG4gICAgICAgIG5ldyBDb25kaXRpb25Nb2RlbCh7IHR5cGU6IFRZUEVfTUFQLkVYUFJFU1NJT04gfSlcbiAgICAgIF1cbiAgICB9LCBpbmRleClcbiAgfSwgW2RhdGEsIGluZGV4LCBvbkNoYW5nZV0pXG5cbiAgY29uc3QgaGFuZGxlU3ViQ2hhbmdlID0gdXNlQ2FsbGJhY2soKHN1YkRhdGEsIGlkeCkgPT4ge1xuICAgIG9uQ2hhbmdlKHtcbiAgICAgIC4uLmRhdGEsXG4gICAgICBzdWJDb25kaXRpb25zOiBkYXRhLnN1YkNvbmRpdGlvbnMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGlmKGkgIT09IGlkeCkge1xuICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YkRhdGFcbiAgICAgIH0pXG4gICAgfSwgaW5kZXgpXG4gIH0sIFtkYXRhLCBpbmRleCwgb25DaGFuZ2VdKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChrZXksIHZhbHVlKSA9PiB7XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4uZGF0YSxcbiAgICAgIFtrZXldOiB2YWx1ZVxuICAgIH0sIGluZGV4KVxuICB9LCBbZGF0YSwgaW5kZXgsIG9uQ2hhbmdlXSlcblxuICBjb25zdCB7IHR5cGUsIGZhY3QsIG9wZXJhdG9yLCB2YWx1ZSwgc3ViQ29uZGl0aW9ucyB9ID0gZGF0YVxuICBjb25zdCBTdWJDb21wID0gU3ViQ29tcG9uZW50TWFwW3R5cGVdXG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZGl0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgPFNlbGVjdCB2YWx1ZT17dHlwZX0gc3R5bGU9e3sgd2lkdGg6IDEyMCB9fSBvbkNoYW5nZT17aGFuZGxUeXBlZUNoYW5nZX0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgVFlQRVMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2l0ZW19IHZhbHVlPXtpdGVtfT57aXRlbX08L09wdGlvbj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgICB7XG4gICAgICAgICAgU3ViQ29tcCAmJlxuICAgICAgICAgIDxTdWJDb21wXG4gICAgICAgICAgICBmYWN0PXtmYWN0fVxuICAgICAgICAgICAgb3BlcmF0b3I9e29wZXJhdG9yfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBbVFlQRV9NQVAuQUxMLCBUWVBFX01BUC5BTlldLmluY2x1ZGVzKHR5cGUpICYmXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBvbkNsaWNrPXtoYW5kbGVBZGR9PivlrZDmnaHku7Y8L0J1dHRvbj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1jb25kaXRpb24tbGlzdFwiPlxuICAgICAgICB7XG4gICAgICAgICAgISFzdWJDb25kaXRpb25zLmxlbmd0aCAmJlxuICAgICAgICAgIHN1YkNvbmRpdGlvbnMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q29uZGl0aW9uXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgIGluZGV4PXtpfVxuICAgICAgICAgICAgICAgIGRhdGE9eyBpdGVtIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGhhbmRsZVN1YkNoYW5nZSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xuXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvdGhlbWUnXG5pbXBvcnQgQ29uZGl0aW9uLCB7IFRZUEVfTUFQLCBDb25kaXRpb25Nb2RlbCB9IGZyb20gJy4vQ29uZGl0aW9uJ1xuXG5pbXBvcnQgJy4vaW5kZXguc2NzcydcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobmV3IENvbmRpdGlvbk1vZGVsKHsgdHlwZTogVFlQRV9NQVAuQUxMIH0pKVxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZGF0YSkgPT4ge1xuICAgIHNldERhdGEoZGF0YSlcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICB9LCBbZGF0YV0pXG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgeyh7IHRoZW1lOiB7IGJhY2tncm91bmRDb2xvciwgdGV4dENvbG9yIH0gfSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsIGNvbG9yOiB0ZXh0Q29sb3IgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgPENvbmRpdGlvblxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PuehruWumjwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9UaGVtZUNvbnRleHQuQ29uc3VtZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQYWdlKSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJvZHkge1xcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7IH1cXG5cXG4uZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTsgfVxcblxcbi5jb25kaXRpb24ge1xcbiAgZGlzcGxheTogZmxleDsgfVxcbiAgLmNvbmRpdGlvbiAuYW50LWlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAxMDBweDsgfVxcbiAgLmNvbmRpdGlvbiAuYW50LXNlbGVjdCB7XFxuICAgIG1heC13aWR0aDogMTcwcHg7IH1cXG4gIC5jb25kaXRpb24gLmFudC1mb3JtLWlubGluZSAuYW50LWZvcm0taXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7IH1cXG4gIC5jb25kaXRpb24gLmNvbnRlbnQge1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyB9XFxuICAuY29uZGl0aW9uIC5zdWItY29uZGl0aW9uLWxpc3Qge1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwOyB9XFxuXCIsIFwiXCJdKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=