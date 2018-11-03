webpackHotUpdate(0,{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(87);\n\nvar _index = __webpack_require__(98);\n\nvar _redux = __webpack_require__(33);\n\n__webpack_require__(233);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n* A counter button: tap the button to increase the count.\n*/\nvar Gifs = function (_Component) {\n  _inherits(Gifs, _Component);\n\n  function Gifs(props) {\n    _classCallCheck(this, Gifs);\n\n    var _this = _possibleConstructorReturn(this, (Gifs.__proto__ || Object.getPrototypeOf(Gifs)).call(this, props));\n\n    _this.state = { \"showGif\": false };\n    window.addEventListener(\"click\", function () {\n      _this.setState(function (_ref) {\n        var showGif = _ref.showGif;\n\n        showGif && _this.props.nextId();\n\n        return { \"showGif\": !showGif };\n      });\n    });\n    return _this;\n  }\n\n  _createClass(Gifs, [{\n    key: 'render',\n    value: function render() {\n      var currentShow = this.props.gifs[this.props.currentGif];\n      return _react2.default.createElement(\n        'div',\n        { className: 'wrapper' },\n        this.state.showGif && _react2.default.createElement('img', { src: currentShow.url }),\n        _react2.default.createElement(\n          'h1',\n          null,\n          currentShow.title\n        )\n      );\n    }\n  }]);\n\n  return Gifs;\n}(_react.Component);\n\nfunction mapStateToProps(_ref2) {\n  var gifs = _ref2.gifs,\n      currentGif = _ref2.currentGif;\n\n  return { gifs: gifs, currentGif: currentGif };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ nextId: _index.nextId, prevId: _index.prevId }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Gifs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0dpZnMuanM/MDNkOCJdLCJuYW1lcyI6WyJHaWZzIiwicHJvcHMiLCJzdGF0ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRTdGF0ZSIsInNob3dHaWYiLCJuZXh0SWQiLCJjdXJyZW50U2hvdyIsImdpZnMiLCJjdXJyZW50R2lmIiwidXJsIiwidGl0bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInByZXZJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxJOzs7QUFDTCxnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUNWQSxLQURVOztBQUVoQixVQUFLQyxLQUFMLEdBQWEsRUFBQyxXQUFXLEtBQVosRUFBYjtBQUNBQyxXQUFPQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFNO0FBQ25DLFlBQUtDLFFBQUwsQ0FBYyxnQkFBZTtBQUFBLFlBQWJDLE9BQWEsUUFBYkEsT0FBYTs7QUFDM0JBLG1CQUFXLE1BQUtMLEtBQUwsQ0FBV00sTUFBWCxFQUFYOztBQUVBLGVBQU8sRUFBQyxXQUFXLENBQUNELE9BQWIsRUFBUDtBQUNELE9BSkQ7QUFLSCxLQU5EO0FBSGdCO0FBVWxCOzs7OzZCQUVRO0FBQ1AsVUFBTUUsY0FBYyxLQUFLUCxLQUFMLENBQVdRLElBQVgsQ0FBZ0IsS0FBS1IsS0FBTCxDQUFXUyxVQUEzQixDQUFwQjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0ksYUFBS1IsS0FBTCxDQUFXSSxPQUFYLElBQXNCLHVDQUFLLEtBQUtFLFlBQVlHLEdBQXRCLEdBRDFCO0FBRUc7QUFBQTtBQUFBO0FBQ0dILHNCQUFZSTtBQURmO0FBRkgsT0FERjtBQVFEOzs7Ozs7QUFHRixTQUFTQyxlQUFULFFBQTZDO0FBQUEsTUFBbkJKLElBQW1CLFNBQW5CQSxJQUFtQjtBQUFBLE1BQWJDLFVBQWEsU0FBYkEsVUFBYTs7QUFDM0MsU0FBTyxFQUFDRCxVQUFELEVBQU9DLHNCQUFQLEVBQVA7QUFDRDs7QUFFRCxTQUFTSSxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTywrQkFBbUIsRUFBRVIscUJBQUYsRUFBVVMscUJBQVYsRUFBbkIsRUFBdUNELFFBQXZDLENBQVA7QUFDRDs7a0JBRWMseUJBQVFGLGVBQVIsRUFBeUJDLGtCQUF6QixFQUE2Q2QsSUFBN0MsQyIsImZpbGUiOiIyMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IG5leHRJZCwgcHJldklkIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgJy4vR2lmcy5jc3MnXG4gXG4vKipcbiogQSBjb3VudGVyIGJ1dHRvbjogdGFwIHRoZSBidXR0b24gdG8gaW5jcmVhc2UgdGhlIGNvdW50LlxuKi9cbmNsYXNzIEdpZnMgZXh0ZW5kcyBDb21wb25lbnQge1xuIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XCJzaG93R2lmXCI6IGZhbHNlfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoe3Nob3dHaWZ9KSA9PiB7XG4gICAgICAgICAgc2hvd0dpZiAmJiB0aGlzLnByb3BzLm5leHRJZCgpO1xuXG4gICAgICAgICAgcmV0dXJuIHtcInNob3dHaWZcIjogIXNob3dHaWZ9XG4gICAgICAgIH0pXG4gICAgfSlcbiB9XG5cbiByZW5kZXIoKSB7XG4gICBjb25zdCBjdXJyZW50U2hvdyA9IHRoaXMucHJvcHMuZ2lmc1t0aGlzLnByb3BzLmN1cnJlbnRHaWZdXG4gICByZXR1cm4gKFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd0dpZiAmJiA8aW1nIHNyYz17Y3VycmVudFNob3cudXJsfSAvPn1cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtjdXJyZW50U2hvdy50aXRsZX1cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgKTtcbiB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7Z2lmcywgY3VycmVudEdpZn0pIHtcbiAgcmV0dXJuIHtnaWZzLCBjdXJyZW50R2lmfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBuZXh0SWQsIHByZXZJZCB9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdpZnMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvR2lmcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///232\n");

/***/ })

})