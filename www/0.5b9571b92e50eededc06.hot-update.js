webpackHotUpdate(0,{

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(52);\n\nvar _reducer_current_gif = __webpack_require__(230);\n\nvar _reducer_current_gif2 = _interopRequireDefault(_reducer_current_gif);\n\nvar _reducer_gifs = __webpack_require__(231);\n\nvar _reducer_gifs2 = _interopRequireDefault(_reducer_gifs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar rootReducer = (0, _redux.combineReducers)({\n    counter: _reducer_current_gif2.default\n});\n\nexports.default = rootReducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yZWR1Y2VyX3Jvb3QuanM/ZTQ1NCJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImNvdW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGNBQWMsNEJBQWdCO0FBQ2hDQztBQURnQyxDQUFoQixDQUFwQjs7a0JBSWVELFciLCJmaWxlIjoiMjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgUmVkdWNlckN1cnJlbnRHaWYgZnJvbSAnLi9yZWR1Y2VyX2N1cnJlbnRfZ2lmJztcclxuaW1wb3J0IFJlZHVjZXJHaWZzIGZyb20gJy4vcmVkdWNlcl9naWZzJ1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY291bnRlcjogUmVkdWNlckN1cnJlbnRHaWZcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9yZWR1Y2VyX3Jvb3QuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///226\n");

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var action = arguments[1];\n\n    switch (action.type) {\n        case INCREASED_COUNTER:\n            return state + 1;\n    }\n\n    return state;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yZWR1Y2VyX2dpZnMuanM/MzBiZSJdLCJuYW1lcyI6WyJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJJTkNSRUFTRURfQ09VTlRFUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUFlLFlBQTZCO0FBQUEsUUFBcEJBLEtBQW9CLHVFQUFaLEVBQVk7QUFBQSxRQUFSQyxNQUFROztBQUN4QyxZQUFPQSxPQUFPQyxJQUFkO0FBQ0ksYUFBTUMsaUJBQU47QUFDSSxtQkFBT0gsUUFBUSxDQUFmO0FBRlI7O0FBS0EsV0FBT0EsS0FBUDtBQUNILEMiLCJmaWxlIjoiMjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBbXSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIChJTkNSRUFTRURfQ09VTlRFUik6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvcmVkdWNlcl9naWZzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///231\n");

/***/ })

})