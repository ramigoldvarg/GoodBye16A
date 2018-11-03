webpackHotUpdate(0,{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(87);\n\nvar _index = __webpack_require__(98);\n\nvar _redux = __webpack_require__(33);\n\n__webpack_require__(233);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n* A counter button: tap the button to increase the count.\n*/\nvar Gifs = function (_Component) {\n  _inherits(Gifs, _Component);\n\n  function Gifs(props) {\n    _classCallCheck(this, Gifs);\n\n    var _this = _possibleConstructorReturn(this, (Gifs.__proto__ || Object.getPrototypeOf(Gifs)).call(this, props));\n\n    _this.state = { \"showGif\": false };\n    _this.beginInterval = _this.beginInterval.bind(_this);\n    _this.switchGifs = setInterval(_this.beginInterval, 2000);\n    window.addEventListener;\n    window.addEventListener(\"contextmenu\", function (e) {\n      e.preventDefault();\n      if (_this.props.currentGif == _this.props.gifs.length) {\n        _this.switchGifs = setInterval(_this.beginInterval, 2000);\n      }\n\n      _this.props.prevId(_this.props.currentGif);\n    });\n    return _this;\n  }\n\n  _createClass(Gifs, [{\n    key: 'beginInterval',\n    value: function beginInterval() {\n      var _this2 = this;\n\n      this.switchGifs = setInterval(this.setState({\n        \"showGif\": !this.state.showGif\n      }, function () {\n        !_this2.state.showGif && _this2.props.nextId(_this2.props.currentGif);\n      }), 2000);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      clearInterval(this.switchGifs);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (this.props.currentGif >= this.props.gifs.length) {\n        clearInterval(this.switchGifs);\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h1',\n            null,\n            '\\u05DE\\u05E7\\u05D5\\u05D5\\u05D9\\u05DD \\u05E9\\u05E0\\u05D4\\u05E0\\u05EA\\u05DD'\n          ),\n          _react2.default.createElement(\n            'h2',\n            null,\n            '\\u266516A \\u05D0\\u05D5\\u05D4\\u05D1\\u05D9\\u05DD'\n          )\n        );\n      }\n\n      var currentShow = this.props.gifs[this.props.currentGif];\n      return _react2.default.createElement(\n        'div',\n        { className: 'wrapper' },\n        this.state.showGif && _react2.default.createElement('img', { src: currentShow.url }),\n        _react2.default.createElement(\n          'h1',\n          null,\n          currentShow.title\n        )\n      );\n    }\n  }]);\n\n  return Gifs;\n}(_react.Component);\n\nfunction mapStateToProps(_ref) {\n  var gifs = _ref.gifs,\n      currentGif = _ref.currentGif;\n\n  return { gifs: gifs, currentGif: currentGif };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ nextId: _index.nextId, prevId: _index.prevId }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Gifs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0dpZnMuanM/MDNkOCJdLCJuYW1lcyI6WyJHaWZzIiwicHJvcHMiLCJzdGF0ZSIsImJlZ2luSW50ZXJ2YWwiLCJiaW5kIiwic3dpdGNoR2lmcyIsInNldEludGVydmFsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRHaWYiLCJnaWZzIiwibGVuZ3RoIiwicHJldklkIiwic2V0U3RhdGUiLCJzaG93R2lmIiwibmV4dElkIiwiY2xlYXJJbnRlcnZhbCIsImN1cnJlbnRTaG93IiwidXJsIiwidGl0bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxJOzs7QUFDTCxnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUNWQSxLQURVOztBQUVoQixVQUFLQyxLQUFMLEdBQWEsRUFBQyxXQUFXLEtBQVosRUFBYjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsT0FBckI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCQyxZQUFZLE1BQUtILGFBQWpCLEVBQWdDLElBQWhDLENBQWxCO0FBQ0FJLFdBQU9DLGdCQUFQO0FBQ0FELFdBQU9DLGdCQUFQLENBQXdCLGFBQXhCLEVBQXVDLFVBQUNDLENBQUQsRUFBTztBQUM1Q0EsUUFBRUMsY0FBRjtBQUNBLFVBQUksTUFBS1QsS0FBTCxDQUFXVSxVQUFYLElBQXlCLE1BQUtWLEtBQUwsQ0FBV1csSUFBWCxDQUFnQkMsTUFBN0MsRUFBcUQ7QUFDbkQsY0FBS1IsVUFBTCxHQUFrQkMsWUFBWSxNQUFLSCxhQUFqQixFQUFnQyxJQUFoQyxDQUFsQjtBQUNEOztBQUVELFlBQUtGLEtBQUwsQ0FBV2EsTUFBWCxDQUFrQixNQUFLYixLQUFMLENBQVdVLFVBQTdCO0FBQ0QsS0FQRDtBQU5nQjtBQWNsQjs7OztvQ0FFZTtBQUFBOztBQUNmLFdBQUtOLFVBQUwsR0FBa0JDLFlBQVksS0FBS1MsUUFBTCxDQUFjO0FBQzFDLG1CQUFXLENBQUMsS0FBS2IsS0FBTCxDQUFXYztBQURtQixPQUFkLEVBRTNCLFlBQU07QUFDUCxTQUFDLE9BQUtkLEtBQUwsQ0FBV2MsT0FBWixJQUF1QixPQUFLZixLQUFMLENBQVdnQixNQUFYLENBQWtCLE9BQUtoQixLQUFMLENBQVdVLFVBQTdCLENBQXZCO0FBQ0QsT0FKNkIsQ0FBWixFQUlkLElBSmMsQ0FBbEI7QUFLQTs7OzJDQUVzQjtBQUNyQk8sb0JBQWMsS0FBS2IsVUFBbkI7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBSSxLQUFLSixLQUFMLENBQVdVLFVBQVgsSUFBeUIsS0FBS1YsS0FBTCxDQUFXVyxJQUFYLENBQWdCQyxNQUE3QyxFQUFxRDtBQUNuREssc0JBQWMsS0FBS2IsVUFBbkI7QUFDRCxlQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixTQURGO0FBVUE7O0FBRUQsVUFBTWMsY0FBYyxLQUFLbEIsS0FBTCxDQUFXVyxJQUFYLENBQWdCLEtBQUtYLEtBQUwsQ0FBV1UsVUFBM0IsQ0FBcEI7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNJLGFBQUtULEtBQUwsQ0FBV2MsT0FBWCxJQUFzQix1Q0FBSyxLQUFLRyxZQUFZQyxHQUF0QixHQUQxQjtBQUVHO0FBQUE7QUFBQTtBQUNHRCxzQkFBWUU7QUFEZjtBQUZILE9BREY7QUFRRDs7Ozs7O0FBR0YsU0FBU0MsZUFBVCxPQUE2QztBQUFBLE1BQW5CVixJQUFtQixRQUFuQkEsSUFBbUI7QUFBQSxNQUFiRCxVQUFhLFFBQWJBLFVBQWE7O0FBQzNDLFNBQU8sRUFBQ0MsVUFBRCxFQUFPRCxzQkFBUCxFQUFQO0FBQ0Q7O0FBRUQsU0FBU1ksa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLFNBQU8sK0JBQW1CLEVBQUVQLHFCQUFGLEVBQVVILHFCQUFWLEVBQW5CLEVBQXVDVSxRQUF2QyxDQUFQO0FBQ0Q7O2tCQUVjLHlCQUFRRixlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkN2QixJQUE3QyxDIiwiZmlsZSI6IjIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbmV4dElkLCBwcmV2SWQgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCAnLi9HaWZzLmNzcydcbiBcbi8qKlxuKiBBIGNvdW50ZXIgYnV0dG9uOiB0YXAgdGhlIGJ1dHRvbiB0byBpbmNyZWFzZSB0aGUgY291bnQuXG4qL1xuY2xhc3MgR2lmcyBleHRlbmRzIENvbXBvbmVudCB7XG4gY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcInNob3dHaWZcIjogZmFsc2V9O1xuICAgIHRoaXMuYmVnaW5JbnRlcnZhbCA9IHRoaXMuYmVnaW5JbnRlcnZhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3dpdGNoR2lmcyA9IHNldEludGVydmFsKHRoaXMuYmVnaW5JbnRlcnZhbCwgMjAwMCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50R2lmID09IHRoaXMucHJvcHMuZ2lmcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hHaWZzID0gc2V0SW50ZXJ2YWwodGhpcy5iZWdpbkludGVydmFsLCAyMDAwKVxuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLnByZXZJZCh0aGlzLnByb3BzLmN1cnJlbnRHaWYpO1xuICAgIH0pXG4gfVxuXG4gYmVnaW5JbnRlcnZhbCgpIHtcbiAgdGhpcy5zd2l0Y2hHaWZzID0gc2V0SW50ZXJ2YWwodGhpcy5zZXRTdGF0ZSh7XG4gICAgXCJzaG93R2lmXCI6ICF0aGlzLnN0YXRlLnNob3dHaWZcbiAgfSwgKCkgPT4ge1xuICAgICF0aGlzLnN0YXRlLnNob3dHaWYgJiYgdGhpcy5wcm9wcy5uZXh0SWQodGhpcy5wcm9wcy5jdXJyZW50R2lmKTtcbiAgfSksIDIwMDApO1xuIH1cblxuIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN3aXRjaEdpZnMpXG4gfVxuXG4gcmVuZGVyKCkge1xuICAgaWYgKHRoaXMucHJvcHMuY3VycmVudEdpZiA+PSB0aGlzLnByb3BzLmdpZnMubGVuZ3RoKSB7XG4gICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zd2l0Y2hHaWZzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgINee16fXldeV15nXnSDXqdeg15TXoNeq151cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIOKZpTE2QSDXkNeV15TXkdeZ150gXG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICAgfVxuXG4gICBjb25zdCBjdXJyZW50U2hvdyA9IHRoaXMucHJvcHMuZ2lmc1t0aGlzLnByb3BzLmN1cnJlbnRHaWZdXG4gICByZXR1cm4gKFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd0dpZiAmJiA8aW1nIHNyYz17Y3VycmVudFNob3cudXJsfSAvPn1cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtjdXJyZW50U2hvdy50aXRsZX1cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgKTtcbiB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7Z2lmcywgY3VycmVudEdpZn0pIHtcbiAgcmV0dXJuIHtnaWZzLCBjdXJyZW50R2lmfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBuZXh0SWQsIHByZXZJZCB9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdpZnMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvR2lmcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///232\n");

/***/ })

})