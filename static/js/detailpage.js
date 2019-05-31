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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL3BhZ2VzL3NlYXJjaC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYWdlcy80MDQvaW5kZXguanN4Il0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInNlYXJjaCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiYWN0aW9uQ3JlYXRvcnMiLCJpbnB1dFNlYXJjaCIsImRpc3BhdGNoIiwicmVzZXRTZWFyY2giLCJQYWdlIiwiaGlzdG9yeSIsIm1hdGNoIiwibG9jYXRpb24iLCJ1c2VSZWR1Y2VyIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiLCJjb2xvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLFFBQU0sRUFBRTtBQURTLENBQXJCOztBQUlBLFNBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQztBQUM1QixVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLLE9BQUw7QUFDSSxhQUFPO0FBQUVKLGNBQU0sRUFBRUcsTUFBTSxDQUFDRSxPQUFQLENBQWVMO0FBQXpCLE9BQVA7O0FBQ0osU0FBSyxPQUFMO0FBQ0ksYUFBTztBQUFFQSxjQUFNLEVBQUU7QUFBVixPQUFQOztBQUNKO0FBQ0ksYUFBT0UsS0FBUDtBQU5SO0FBUUg7O0FBRUQsSUFBTUksY0FBYyxHQUFHO0FBQ25CQyxhQUFXLEVBQUUscUJBQUNDLFFBQUQsRUFBV1IsTUFBWCxFQUFzQjtBQUMvQlEsWUFBUSxDQUFDO0FBQUVKLFVBQUksRUFBRSxPQUFSO0FBQWlCQyxhQUFPLEVBQUU7QUFBRUwsY0FBTSxFQUFOQTtBQUFGO0FBQTFCLEtBQUQsQ0FBUjtBQUNILEdBSGtCO0FBSW5CUyxhQUFXLEVBQUUscUJBQUNELFFBQUQsRUFBYztBQUN2QkEsWUFBUSxDQUFDO0FBQUVKLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUNIO0FBTmtCLENBQXZCOztBQVNBLElBQU1NLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWtDO0FBQUEsTUFBL0JDLE9BQStCLFFBQS9CQSxPQUErQjtBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQ2pCQyx3REFBVSxDQUFDYixPQUFELEVBQVVGLFlBQVYsQ0FETztBQUFBO0FBQUEsTUFDcENHLEtBRG9DO0FBQUEsTUFDN0JNLFFBRDZCOztBQUFBLE1BRW5DUixNQUZtQyxHQUV4QkUsS0FGd0IsQ0FFbkNGLE1BRm1DO0FBSTNDLFNBQ0ksMkRBQUMsc0RBQUQsQ0FBYyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQSw0QkFBR2UsS0FBSDtBQUFBLFFBQVlDLGVBQVosZUFBWUEsZUFBWjtBQUFBLFFBQTZCQyxTQUE3QixlQUE2QkEsU0FBN0I7QUFBQSxXQUNHO0FBQ0ksV0FBSyxFQUFFO0FBQUVELHVCQUFlLEVBQUVBLGVBQW5CO0FBQW9DRSxhQUFLLEVBQUVEO0FBQTNDLE9BRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBRUk7QUFDSSxVQUFJLEVBQUMsTUFEVDtBQUVJLFdBQUssRUFBR2pCLE1BRlo7QUFHSSxjQUFRLEVBQUcsa0JBQUNtQixDQUFEO0FBQUEsZUFBT2IsY0FBYyxDQUFDQyxXQUFmLENBQTJCQyxRQUEzQixFQUFxQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQTlDLENBQVA7QUFBQSxPQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFPSTtBQUFRLGFBQU8sRUFBRyxpQkFBQ0YsQ0FBRDtBQUFBLGVBQU9iLGNBQWMsQ0FBQ0csV0FBZixDQUEyQkQsUUFBM0IsQ0FBUDtBQUFBLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEosQ0FISixFQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpKLENBREg7QUFBQSxHQURELENBREo7QUFxQkgsQ0F6QkQ7O0FBMkJlYyw4SEFBVSxDQUFDWixJQUFELENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQU9BO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZQyxLQUFaLFFBQVlBLEtBQVo7QUFBQSxNQUFtQkMsUUFBbkIsUUFBbUJBLFFBQW5CO0FBQUEsU0FDVCwyREFBQyxzREFBRCxDQUFjLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBLDRCQUFHRSxLQUFIO0FBQUEsUUFBWUMsZUFBWixlQUFZQSxlQUFaO0FBQUEsUUFBNkJDLFNBQTdCLGVBQTZCQSxTQUE3QjtBQUFBLFdBQ0c7QUFDSSxXQUFLLEVBQUU7QUFBRUQsdUJBQWUsRUFBRUEsZUFBbkI7QUFBb0NFLGFBQUssRUFBRUQ7QUFBM0MsT0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBSkosQ0FESDtBQUFBLEdBREQsQ0FEUztBQUFBLENBQWI7O0FBYWVLLDhIQUFVLENBQUNaLElBQUQsQ0FBekIsRSIsImZpbGUiOiJkZXRhaWxwYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvdGhlbWUnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBzZWFyY2g6ICcnXG59XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICAgICAgcmV0dXJuIHsgc2VhcmNoOiBhY3Rpb24ucGF5bG9hZC5zZWFyY2ggfVxuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgICByZXR1cm4geyBzZWFyY2g6ICcnIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XG4gICAgaW5wdXRTZWFyY2g6IChkaXNwYXRjaCwgc2VhcmNoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2lucHV0JywgcGF5bG9hZDogeyBzZWFyY2ggfSB9KVxuICAgIH0sXG4gICAgcmVzZXRTZWFyY2g6IChkaXNwYXRjaCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdyZXNldCcgfSlcbiAgICB9LFxufVxuXG5jb25zdCBQYWdlID0gKHsgaGlzdG9yeSwgbWF0Y2gsIGxvY2F0aW9uIH0pID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgICBjb25zdCB7IHNlYXJjaCB9ID0gc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoeyB0aGVtZTogeyBiYWNrZ3JvdW5kQ29sb3IsIHRleHRDb2xvciB9IH0pID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciwgY29sb3I6IHRleHRDb2xvciB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnNlYXJjaDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBzZWFyY2ggfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gYWN0aW9uQ3JlYXRvcnMuaW5wdXRTZWFyY2goZGlzcGF0Y2gsIGUudGFyZ2V0LnZhbHVlKSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17IChlKSA9PiBhY3Rpb25DcmVhdG9ycy5yZXNldFNlYXJjaChkaXNwYXRjaCkgfT5yZXNldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPlNlYXJjaCBQYWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eyAoKSA9PiBoaXN0b3J5LnB1c2goJy9hY3QnKSB9PmdvIHRvIGFjdCBwYWdlPC9idXR0b24+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDwvVGhlbWVDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQYWdlKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gICAgUm91dGUsXG4gICAgTGluayxcbiAgICBOYXZMaW5rLFxuICAgIFJlZGlyZWN0LFxuICAgIFN3aXRjaCxcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvdGhlbWUnXG5cbmNvbnN0IFBhZ2UgPSAoeyBoaXN0b3J5LCBtYXRjaCwgbG9jYXRpb24gfSkgPT4gKFxuICAgIDxUaGVtZUNvbnRleHQuQ29uc3VtZXI+XG4gICAgeyh7IHRoZW1lOiB7IGJhY2tncm91bmRDb2xvciwgdGV4dENvbG9yIH0gfSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciwgY29sb3I6IHRleHRDb2xvciB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8aDE+NDA0IFBhZ2U8L2gxPlxuICAgICAgICAgICAgPHA+6aG16Z2i6LWw5Lii5LqGPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApfVxuICAgIDwvVGhlbWVDb250ZXh0LkNvbnN1bWVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFBhZ2UpIl0sInNvdXJjZVJvb3QiOiIifQ==