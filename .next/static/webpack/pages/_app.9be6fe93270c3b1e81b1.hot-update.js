self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var configureStore = function configureStore() {
  var Store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__.default, en);
  return Store;
};

var wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJTdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImVuIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUUzQixNQUFNQyxLQUFLLEdBQUdDLGtEQUFXLENBQUNDLDhDQUFELEVBQVNDLEVBQVQsQ0FBekI7QUFFQSxTQUFPSCxLQUFQO0FBQ0QsQ0FMRDs7QUFPQSxJQUFNSSxPQUFPLEdBQUdDLGlFQUFhLENBQUNOLGNBQUQsRUFBZ0IsRUFBaEIsQ0FBN0I7QUFFQSwrREFBZUssT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjliZTZmZTkzMjcwYzNiMWU4MWIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCJcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBTdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsZW4pXHJcblxyXG4gIHJldHVybiBTdG9yZVxyXG59XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSx7fSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==