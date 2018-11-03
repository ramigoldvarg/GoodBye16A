webpackHotUpdate(0,{

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(52);\n\nvar _reducer_current_gif = __webpack_require__(230);\n\nvar _reducer_current_gif2 = _interopRequireDefault(_reducer_current_gif);\n\nvar _reducer_gifs = __webpack_require__(231);\n\nvar _reducer_gifs2 = _interopRequireDefault(_reducer_gifs);\n\nvar _reducer_show_filter = __webpack_require__(232);\n\nvar _reducer_show_filter2 = _interopRequireDefault(_reducer_show_filter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar rootReducer = (0, _redux.combineReducers)({\n    currentGif: _reducer_current_gif2.default,\n    gifs: _reducer_gifs2.default\n\n});\n\nexports.default = rootReducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yZWR1Y2VyX3Jvb3QuanM/ZTQ1NCJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImN1cnJlbnRHaWYiLCJnaWZzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGNBQWMsNEJBQWdCO0FBQ2hDQyw2Q0FEZ0M7QUFFaENDOztBQUZnQyxDQUFoQixDQUFwQjs7a0JBTWVGLFciLCJmaWxlIjoiMjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgUmVkdWNlckN1cnJlbnRHaWYgZnJvbSAnLi9yZWR1Y2VyX2N1cnJlbnRfZ2lmJztcclxuaW1wb3J0IFJlZHVjZXJHaWZzIGZyb20gJy4vcmVkdWNlcl9naWZzJztcclxuaW1wb3J0IFJlZHVjZXJTaG93RmlsdGVyIGZyb20gJy4vcmVkdWNlcl9zaG93X2ZpbHRlcic7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjdXJyZW50R2lmOiBSZWR1Y2VyQ3VycmVudEdpZixcclxuICAgIGdpZnM6IFJlZHVjZXJHaWZzLFxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9yZWR1Y2VyX3Jvb3QuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///226\n");

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _index.SHOW_GIF:\n            return !state;\n        default:\n            return state;\n    }\n};\n\nvar _index = __webpack_require__(228);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yZWR1Y2VyX3Nob3dfZmlsdGVyLmpzPzg2OTIiXSwibmFtZXMiOlsic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWUsWUFBaUM7QUFBQSxRQUF2QkEsS0FBdUIsdUVBQWYsS0FBZTtBQUFBLFFBQVJDLE1BQVE7O0FBQzVDLFlBQVFBLE9BQU9DLElBQWY7QUFDSTtBQUNJLG1CQUFPLENBQUNGLEtBQVI7QUFDSjtBQUNJLG1CQUFPQSxLQUFQO0FBSlI7QUFNSCxDOztBQVREIiwiZmlsZSI6IjIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNIT1dfR0lGIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGZhbHNlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIChTSE9XX0dJRik6IFxyXG4gICAgICAgICAgICByZXR1cm4gIXN0YXRlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvcmVkdWNlcl9zaG93X2ZpbHRlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///232\n");

/***/ })

})