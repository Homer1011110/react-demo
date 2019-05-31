(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homepage"],{

/***/ "Ezn3":
/*!***********************************!*\
  !*** ../src/pages/home/Modal.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "xARA");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Modal(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      container = _useState2[0],
      setContainer = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var container = document.createElement('div');
    document.body.appendChild(container);
    setContainer(container);
    return function () {
      document.body.removeChild(container);
      setContainer(null);
    };
  }, []);
  return container && react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(children, container);
}

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "ViWd":
/*!***********************************!*\
  !*** ../src/pages/home/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "mXGw");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "tYyp");
/* harmony import */ var _context_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/theme */ "sdih");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ "Ezn3");
/* harmony import */ var react_photoswipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-photoswipe */ "sPGJ");
/* harmony import */ var react_photoswipe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_photoswipe__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/homerwang/projects/react-demo/src/pages/home/index.jsx";





var items = [{
  src: 'http://12.url.cn/k12_tiku/2433797715/a56b7dd3-8cd0-4d0a-bc40-4e3fc2e2e29a/',
  w: 411,
  h: 730,
  title: 'Image 1'
}];
var options = {//http://photoswipe.com/documentation/options.html
};

var Page = function Page(_ref) {
  var backgroundColor = _ref.backgroundColor,
      textColor = _ref.textColor,
      history = _ref.history,
      match = _ref.match,
      location = _ref.location;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_theme__WEBPACK_IMPORTED_MODULE_2__["default"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
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
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Home Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: function onClick() {
        return history.push('/search');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "go to search page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_photoswipe__WEBPACK_IMPORTED_MODULE_4__["PhotoSwipe"], {
      isOpen: true,
      items: items,
      options: options,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Page));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL3BhZ2VzL2hvbWUvTW9kYWwuanN4Iiwid2VicGFjazovLy8uLi9zcmMvcGFnZXMvaG9tZS9pbmRleC5qc3giXSwibmFtZXMiOlsiTW9kYWwiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiY29udGFpbmVyIiwic2V0Q29udGFpbmVyIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJSZWFjdERPTSIsImNyZWF0ZVBvcnRhbCIsIml0ZW1zIiwic3JjIiwidyIsImgiLCJ0aXRsZSIsIm9wdGlvbnMiLCJQYWdlIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiaGlzdG9yeSIsIm1hdGNoIiwibG9jYXRpb24iLCJ0aGVtZSIsImNvbG9yIiwicHVzaCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULE9BQTJCO0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLElBQUQsQ0FEakI7QUFBQTtBQUFBLE1BQ2xCQyxTQURrQjtBQUFBLE1BQ1BDLFlBRE87O0FBRXpCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNRixTQUFTLEdBQUdHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBRCxZQUFRLENBQUNFLElBQVQsQ0FBY0MsV0FBZCxDQUEwQk4sU0FBMUI7QUFDQUMsZ0JBQVksQ0FBQ0QsU0FBRCxDQUFaO0FBQ0EsV0FBTyxZQUFNO0FBQ1hHLGNBQVEsQ0FBQ0UsSUFBVCxDQUFjRSxXQUFkLENBQTBCUCxTQUExQjtBQUNBQyxrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEtBSEQ7QUFJRCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUEsU0FBT0QsU0FBUyxJQUFJUSxnREFBUSxDQUFDQyxZQUFULENBQXNCWCxRQUF0QixFQUFnQ0UsU0FBaEMsQ0FBcEI7QUFDRDs7QUFFY0gsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJYSxLQUFLLEdBQUcsQ0FDVjtBQUNFQyxLQUFHLEVBQUUsNEVBRFA7QUFFRUMsR0FBQyxFQUFFLEdBRkw7QUFHRUMsR0FBQyxFQUFFLEdBSEw7QUFJRUMsT0FBSyxFQUFFO0FBSlQsQ0FEVSxDQUFaO0FBZUEsSUFBSUMsT0FBTyxHQUFHLENBQ1o7QUFEWSxDQUFkOztBQU1BLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQThEO0FBQUEsTUFBM0RDLGVBQTJELFFBQTNEQSxlQUEyRDtBQUFBLE1BQTFDQyxTQUEwQyxRQUExQ0EsU0FBMEM7QUFBQSxNQUEvQkMsT0FBK0IsUUFBL0JBLE9BQStCO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUd6RSxTQUNFLDJEQUFDLHNEQUFELENBQWMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUEsNEJBQUdDLEtBQUg7QUFBQSxRQUFZTCxlQUFaLGVBQVlBLGVBQVo7QUFBQSxRQUE2QkMsU0FBN0IsZUFBNkJBLFNBQTdCO0FBQUEsV0FDRztBQUNJLFdBQUssRUFBRTtBQUFFRCx1QkFBZSxFQUFFQSxlQUFuQjtBQUFvQ00sYUFBSyxFQUFFTDtBQUEzQyxPQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosRUFJSTtBQUFRLGFBQU8sRUFBRztBQUFBLGVBQU1DLE9BQU8sQ0FBQ0ssSUFBUixDQUFhLFNBQWIsQ0FBTjtBQUFBLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpKLEVBS0ksMkRBQUMsMkRBQUQ7QUFBWSxZQUFNLEVBQUUsSUFBcEI7QUFBMEIsV0FBSyxFQUFFZCxLQUFqQztBQUF3QyxhQUFPLEVBQUVLLE9BQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEosQ0FESDtBQUFBLEdBREQsQ0FERjtBQW9CRCxDQXZCRDs7QUF5QmVVLDhIQUFVLENBQUNULElBQUQsQ0FBekIsRSIsImZpbGUiOiJob21lcGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuZnVuY3Rpb24gTW9kYWwoe2NoaWxkcmVufSkge1xuICBjb25zdCBbY29udGFpbmVyLCBzZXRDb250YWluZXJdID0gdXNlU3RhdGUobnVsbClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIHNldENvbnRhaW5lcihjb250YWluZXIpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGFpbmVyKVxuICAgICAgc2V0Q29udGFpbmVyKG51bGwpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gY29udGFpbmVyICYmIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgY29udGFpbmVyKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVGhlbWVDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvdGhlbWUnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCB7IFBob3RvU3dpcGUgfSBmcm9tICdyZWFjdC1waG90b3N3aXBlJztcblxubGV0IGl0ZW1zID0gW1xuICB7XG4gICAgc3JjOiAnaHR0cDovLzEyLnVybC5jbi9rMTJfdGlrdS8yNDMzNzk3NzE1L2E1NmI3ZGQzLThjZDAtNGQwYS1iYzQwLTRlM2ZjMmUyZTI5YS8nLFxuICAgIHc6IDQxMSxcbiAgICBoOiA3MzAsXG4gICAgdGl0bGU6ICdJbWFnZSAxJ1xuICB9LFxuICAvLyB7XG4gIC8vICAgc3JjOiAnaHR0cDovLzEyLnVybC5jbi9rMTJfdGlrdS8yNDMzNzk3NzE1L2E1NmI3ZGQzLThjZDAtNGQwYS1iYzQwLTRlM2ZjMmUyZTI5YS8nLFxuICAvLyAgIHc6IDQxMSxcbiAgLy8gICBoOiA3MzAsXG4gIC8vICAgdGl0bGU6ICdJbWFnZSAyJ1xuICAvLyB9XG5dO1xuXG5sZXQgb3B0aW9ucyA9IHtcbiAgLy9odHRwOi8vcGhvdG9zd2lwZS5jb20vZG9jdW1lbnRhdGlvbi9vcHRpb25zLmh0bWxcbn07XG5cblxuXG5jb25zdCBQYWdlID0gKHsgYmFja2dyb3VuZENvbG9yLCB0ZXh0Q29sb3IsIGhpc3RvcnksIG1hdGNoLCBsb2NhdGlvbiB9KSA9PiB7XG4gIFxuICBcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVDb250ZXh0LkNvbnN1bWVyPlxuICAgIHsoeyB0aGVtZTogeyBiYWNrZ3JvdW5kQ29sb3IsIHRleHRDb2xvciB9IH0pID0+IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsIGNvbG9yOiB0ZXh0Q29sb3IgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+SG9tZSBQYWdlPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgKCkgPT4gaGlzdG9yeS5wdXNoKCcvc2VhcmNoJykgfT5nbyB0byBzZWFyY2ggcGFnZTwvYnV0dG9uPlxuICAgICAgICAgICAgPFBob3RvU3dpcGUgaXNPcGVuPXt0cnVlfSBpdGVtcz17aXRlbXN9IG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gICAgICAgICAgICB7LyogPE1vZGFsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXZpZXdlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utdmlld2VyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovLzEyLnVybC5jbi9rMTJfdGlrdS8yNDMzNzk3NzE1L2E1NmI3ZGQzLThjZDAtNGQwYS1iYzQwLTRlM2ZjMmUyZTI5YS9cIj48L2ltZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgKX1cbiAgICA8L1RoZW1lQ29udGV4dC5Db25zdW1lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFBhZ2UpIl0sInNvdXJjZVJvb3QiOiIifQ==