webpackHotUpdate(0,{

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(52);\n\nvar _reducer_current_gif = __webpack_require__(230);\n\nvar _reducer_current_gif2 = _interopRequireDefault(_reducer_current_gif);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar rootReducer = (0, _redux.combineReducers)({\n    counter: _reducer_current_gif2.default\n});\n\nexports.default = rootReducer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yZWR1Y2VyX3Jvb3QuanM/ZTQ1NCJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImNvdW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxjQUFjLDRCQUFnQjtBQUNoQ0M7QUFEZ0MsQ0FBaEIsQ0FBcEI7O2tCQUllRCxXIiwiZmlsZSI6IjIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IFJlZHVjZXJDdXJyZW50R2lmIGZyb20gJy4vcmVkdWNlcl9jdXJyZW50X2dpZic7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBjb3VudGVyOiBSZWR1Y2VyQ3VycmVudEdpZlxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL3JlZHVjZXJfcm9vdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///226\n");

/***/ }),

/***/ 227:
false,

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.nextId = nextId;\nexports.prevId = prevId;\nvar NEXT_ID = exports.NEXT_ID = 'NEXT_ID';\nvar PREV_ID = exports.PREV_ID = 'PREV_ID';\n\nfunction nextId(currentId) {\n    return {\n        type: NEXT_ID,\n        payload: currentId + 1\n    };\n}\n\nfunction prevId(currentId) {\n    return {\n        type: PREV_ID,\n        payload: currentId - 1\n    };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzP2JmMjEiXSwibmFtZXMiOlsibmV4dElkIiwicHJldklkIiwiTkVYVF9JRCIsIlBSRVZfSUQiLCJjdXJyZW50SWQiLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFHZ0JBLE0sR0FBQUEsTTtRQU9BQyxNLEdBQUFBLE07QUFWVCxJQUFNQyw0QkFBVSxTQUFoQjtBQUNBLElBQU1DLDRCQUFVLFNBQWhCOztBQUVBLFNBQVNILE1BQVQsQ0FBZ0JJLFNBQWhCLEVBQTJCO0FBQzlCLFdBQVE7QUFDSkMsY0FBTUgsT0FERjtBQUVKSSxpQkFBU0YsWUFBWTtBQUZqQixLQUFSO0FBSUg7O0FBRU0sU0FBU0gsTUFBVCxDQUFnQkcsU0FBaEIsRUFBMkI7QUFDOUIsV0FBUTtBQUNKQyxjQUFNRixPQURGO0FBRUpHLGlCQUFTRixZQUFZO0FBRmpCLEtBQVI7QUFJSCIsImZpbGUiOiIyMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTkVYVF9JRCA9ICdORVhUX0lEJztcclxuZXhwb3J0IGNvbnN0IFBSRVZfSUQgPSAnUFJFVl9JRCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmV4dElkKGN1cnJlbnRJZCkge1xyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgICAgdHlwZTogTkVYVF9JRCxcclxuICAgICAgICBwYXlsb2FkOiBjdXJyZW50SWQgKyAxXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByZXZJZChjdXJyZW50SWQpIHtcclxuICAgIHJldHVybiAoe1xyXG4gICAgICAgIHR5cGU6IFBSRVZfSUQsXHJcbiAgICAgICAgcGF5bG9hZDogY3VycmVudElkIC0gMVxyXG4gICAgfSk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///228\n");

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _index.PREV_ID:\n        case _index.NEXT_ID:\n            return action.payload;\n        default:\n            return state;\n    }\n};\n\nvar _index = __webpack_require__(228);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9yZWR1Y2VyX2N1cnJlbnRfZ2lmLmpzP2ZlZTAiXSwibmFtZXMiOlsic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUVlLFlBQTRCO0FBQUEsUUFBbkJBLEtBQW1CLHVFQUFYLENBQVc7QUFBQSxRQUFSQyxNQUFROztBQUN2QyxZQUFPQSxPQUFPQyxJQUFkO0FBQ0k7QUFDQTtBQUNJLG1CQUFPRCxPQUFPRSxPQUFkO0FBQ0o7QUFDSSxtQkFBT0gsS0FBUDtBQUxSO0FBT0gsQzs7QUFWRCIsImZpbGUiOiIyMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBORVhUX0lELCBQUkVWX0lEIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gMCwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIChQUkVWX0lEKTpcclxuICAgICAgICBjYXNlIChORVhUX0lEKTpcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9yZWR1Y2VyX2N1cnJlbnRfZ2lmLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///230\n");

/***/ })

})