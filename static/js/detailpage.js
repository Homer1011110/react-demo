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
      throw new Error();
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
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "input",
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
        lineNumber: 47
      },
      __self: this
    }, "reset")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Search Page"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Page));

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL3BhZ2VzL3NlYXJjaC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYWdlcy80MDQvaW5kZXguanN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInNlYXJjaCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiRXJyb3IiLCJhY3Rpb25DcmVhdG9ycyIsImlucHV0U2VhcmNoIiwiZGlzcGF0Y2giLCJyZXNldFNlYXJjaCIsIlBhZ2UiLCJoaXN0b3J5IiwibWF0Y2giLCJsb2NhdGlvbiIsInVzZVJlZHVjZXIiLCJ0aGVtZSIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciIsImNvbG9yIiwiZSIsInRhcmdldCIsInZhbHVlIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNqQkMsUUFBTSxFQUFFO0FBRFMsQ0FBckI7O0FBSUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQzVCLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFNBQUssT0FBTDtBQUNJLGFBQU87QUFBRUosY0FBTSxFQUFFRyxNQUFNLENBQUNFLE9BQVAsQ0FBZUw7QUFBekIsT0FBUDs7QUFDSixTQUFLLE9BQUw7QUFDSSxhQUFPO0FBQUVBLGNBQU0sRUFBRTtBQUFWLE9BQVA7O0FBQ0o7QUFDSSxZQUFNLElBQUlNLEtBQUosRUFBTjtBQU5SO0FBUUg7O0FBRUQsSUFBTUMsY0FBYyxHQUFHO0FBQ25CQyxhQUFXLEVBQUUscUJBQUNDLFFBQUQsRUFBV1QsTUFBWCxFQUFzQjtBQUMvQlMsWUFBUSxDQUFDO0FBQUVMLFVBQUksRUFBRSxPQUFSO0FBQWlCQyxhQUFPLEVBQUU7QUFBRUwsY0FBTSxFQUFOQTtBQUFGO0FBQTFCLEtBQUQsQ0FBUjtBQUNILEdBSGtCO0FB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IHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFRoZW1lQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L3RoZW1lJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgc2VhcmNoOiAnJ1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgIHJldHVybiB7IHNlYXJjaDogYWN0aW9uLnBheWxvYWQuc2VhcmNoIH1cbiAgICAgICAgY2FzZSAncmVzZXQnOlxuICAgICAgICAgICAgcmV0dXJuIHsgc2VhcmNoOiAnJyB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG59XG5cbmNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xuICAgIGlucHV0U2VhcmNoOiAoZGlzcGF0Y2gsIHNlYXJjaCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdpbnB1dCcsIHBheWxvYWQ6IHsgc2VhcmNoIH0gfSlcbiAgICB9LFxuICAgIHJlc2V0U2VhcmNoOiAoZGlzcGF0Y2gpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAncmVzZXQnIH0pXG4gICAgfSxcbn1cblxuY29uc3QgUGFnZSA9ICh7IGhpc3RvcnksIG1hdGNoLCBsb2NhdGlvbiB9KSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gICAgY29uc3QgeyBzZWFyY2ggfSA9IHN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8VGhlbWVDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7KHsgdGhlbWU6IHsgYmFja2dyb3VuZENvbG9yLCB0ZXh0Q29sb3IgfSB9KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsIGNvbG9yOiB0ZXh0Q29sb3IgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgc2VhcmNoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IGFjdGlvbkNyZWF0b3JzLmlucHV0U2VhcmNoKGRpc3BhdGNoLCBlLnRhcmdldC52YWx1ZSkgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyAoZSkgPT4gYWN0aW9uQ3JlYXRvcnMucmVzZXRTZWFyY2goZGlzcGF0Y2gpIH0+cmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5TZWFyY2ggUGFnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4gaGlzdG9yeS5wdXNoKCcvYWN0JykgfT5nbyB0byBhY3QgcGFnZTwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8L1RoZW1lQ29udGV4dC5Db25zdW1lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUGFnZSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICAgIFJvdXRlLFxuICAgIExpbmssXG4gICAgTmF2TGluayxcbiAgICBSZWRpcmVjdCxcbiAgICBTd2l0Y2gsXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFRoZW1lQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L3RoZW1lJ1xuXG5jb25zdCBQYWdlID0gKHsgaGlzdG9yeSwgbWF0Y2gsIGxvY2F0aW9uIH0pID0+IChcbiAgICA8VGhlbWVDb250ZXh0LkNvbnN1bWVyPlxuICAgIHsoeyB0aGVtZTogeyBiYWNrZ3JvdW5kQ29sb3IsIHRleHRDb2xvciB9IH0pID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsIGNvbG9yOiB0ZXh0Q29sb3IgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGgxPjQwNCBQYWdlPC9oMT5cbiAgICAgICAgICAgIDxwPumhtemdoui1sOS4ouS6hjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICA8L1RoZW1lQ29udGV4dC5Db25zdW1lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQYWdlKSJdLCJzb3VyY2VSb290IjoiIn0=