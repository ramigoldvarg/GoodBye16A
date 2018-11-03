webpackHotUpdate(0,{

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(24);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(114);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(86);

var _redux = __webpack_require__(33);

var _reducer_root = __webpack_require__(227);

var _reducer_root2 = _interopRequireDefault(_reducer_root);

var _App = __webpack_require__(231);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStoreWithMiddleware = (0, _redux.applyMiddleware)()(_redux.createStore);

document.addEventListener('DOMContentLoaded', function () {
  _reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: createStoreWithMiddleware(_reducer_root2.default) },
    _react2.default.createElement(_App2.default, null)
  ), document.getElementById('root'));
});

/***/ })

})