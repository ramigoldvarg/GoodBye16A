webpackHotUpdate(0,{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(87);\n\nvar _index = __webpack_require__(98);\n\nvar _redux = __webpack_require__(33);\n\n__webpack_require__(233);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n* A counter button: tap the button to increase the count.\n*/\nvar Gifs = function (_Component) {\n  _inherits(Gifs, _Component);\n\n  function Gifs(props) {\n    _classCallCheck(this, Gifs);\n\n    return _possibleConstructorReturn(this, (Gifs.__proto__ || Object.getPrototypeOf(Gifs)).call(this, props));\n  }\n\n  _createClass(Gifs, [{\n    key: 'render',\n    value: function render() {\n      var currentShow = this.props.gifs[this.props.currentGif];\n      return _react2.default.createElement(\n        'div',\n        { className: 'wrapper' },\n        _react2.default.createElement('img', { src: currentShow.src }),\n        _react2.default.createElement(\n          'h1',\n          null,\n          currentShow.title\n        )\n      );\n    }\n  }]);\n\n  return Gifs;\n}(_react.Component);\n\nfunction mapStateToProps(_ref) {\n  var gifs = _ref.gifs,\n      currentGif = _ref.currentGif;\n\n  return { gifs: gifs, currentGif: currentGif };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ nextId: _index.nextId, prevId: _index.prevId }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Gifs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0dpZnMuanM/MDNkOCJdLCJuYW1lcyI6WyJHaWZzIiwicHJvcHMiLCJjdXJyZW50U2hvdyIsImdpZnMiLCJjdXJyZW50R2lmIiwic3JjIiwidGl0bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm5leHRJZCIsInByZXZJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxJOzs7QUFDTCxnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHVHQUNWQSxLQURVO0FBRWxCOzs7OzZCQUVRO0FBQ1AsVUFBTUMsY0FBYyxLQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0IsS0FBS0YsS0FBTCxDQUFXRyxVQUEzQixDQUFwQjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0csK0NBQUssS0FBS0YsWUFBWUcsR0FBdEIsR0FESDtBQUVHO0FBQUE7QUFBQTtBQUNHSCxzQkFBWUk7QUFEZjtBQUZILE9BREY7QUFRRDs7Ozs7O0FBR0YsU0FBU0MsZUFBVCxPQUE2QztBQUFBLE1BQW5CSixJQUFtQixRQUFuQkEsSUFBbUI7QUFBQSxNQUFiQyxVQUFhLFFBQWJBLFVBQWE7O0FBQzNDLFNBQU8sRUFBQ0QsVUFBRCxFQUFPQyxzQkFBUCxFQUFQO0FBQ0Q7O0FBRUQsU0FBU0ksa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLFNBQU8sK0JBQW1CLEVBQUVDLHFCQUFGLEVBQVVDLHFCQUFWLEVBQW5CLEVBQXVDRixRQUF2QyxDQUFQO0FBQ0Q7O2tCQUVjLHlCQUFRRixlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkNSLElBQTdDLEMiLCJmaWxlIjoiMjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBuZXh0SWQsIHByZXZJZCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICcuL0dpZnMuY3NzJ1xuIFxuLyoqXG4qIEEgY291bnRlciBidXR0b246IHRhcCB0aGUgYnV0dG9uIHRvIGluY3JlYXNlIHRoZSBjb3VudC5cbiovXG5jbGFzcyBHaWZzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiB9XG5cbiByZW5kZXIoKSB7XG4gICBjb25zdCBjdXJyZW50U2hvdyA9IHRoaXMucHJvcHMuZ2lmc1t0aGlzLnByb3BzLmN1cnJlbnRHaWZdXG4gICByZXR1cm4gKFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgPGltZyBzcmM9e2N1cnJlbnRTaG93LnNyY30gLz5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtjdXJyZW50U2hvdy50aXRsZX1cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgKTtcbiB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7Z2lmcywgY3VycmVudEdpZn0pIHtcbiAgcmV0dXJuIHtnaWZzLCBjdXJyZW50R2lmfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBuZXh0SWQsIHByZXZJZCB9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdpZnMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvR2lmcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///232\n");

/***/ })

})