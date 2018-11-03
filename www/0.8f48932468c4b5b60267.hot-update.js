webpackHotUpdate(0,{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(87);\n\nvar _index = __webpack_require__(98);\n\nvar _redux = __webpack_require__(33);\n\n__webpack_require__(233);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n* A counter button: tap the button to increase the count.\n*/\nvar Gifs = function (_Component) {\n  _inherits(Gifs, _Component);\n\n  function Gifs(props) {\n    _classCallCheck(this, Gifs);\n\n    var _this = _possibleConstructorReturn(this, (Gifs.__proto__ || Object.getPrototypeOf(Gifs)).call(this, props));\n\n    _this.state = { \"showGif\": false };\n    _this.beginInterval = _this.beginInterval.bind(_this);\n    _this.beginInterval();\n    window.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      clearInterval(_this.switchGifs);\n      _this.props.nextId(_this.props.currentGif);\n      _this.beginInterval();\n    });\n    window.addEventListener(\"contextmenu\", function (e) {\n      e.preventDefault();\n      if (_this.props.currentGif == _this.props.gifs.length) {\n        _this.beginInterval();\n      }\n\n      _this.props.prevId(_this.props.currentGif);\n    });\n    return _this;\n  }\n\n  _createClass(Gifs, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {}\n  }, {\n    key: 'beginInterval',\n    value: function beginInterval() {\n      var _this2 = this;\n\n      this.switchGifs = setInterval(this.setState({\n        \"showGif\": !this.state.showGif\n      }, function () {\n        !_this2.state.showGif && _this2.props.nextId(_this2.props.currentGif);\n      }), 2000);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      clearInterval(this.switchGifs);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (this.props.currentGif >= this.props.gifs.length) {\n        clearInterval(this.switchGifs);\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h1',\n            null,\n            '\\u05DE\\u05E7\\u05D5\\u05D5\\u05D9\\u05DD \\u05E9\\u05E0\\u05D4\\u05E0\\u05EA\\u05DD'\n          ),\n          _react2.default.createElement(\n            'h2',\n            null,\n            '\\u266516A \\u05D0\\u05D5\\u05D4\\u05D1\\u05D9\\u05DD'\n          )\n        );\n      }\n\n      var currentShow = this.props.gifs[this.props.currentGif];\n      return _react2.default.createElement(\n        'div',\n        { className: 'wrapper' },\n        this.state.showGif && _react2.default.createElement('img', { src: currentShow.url }),\n        _react2.default.createElement(\n          'h1',\n          null,\n          currentShow.title\n        )\n      );\n    }\n  }]);\n\n  return Gifs;\n}(_react.Component);\n\nfunction mapStateToProps(_ref) {\n  var gifs = _ref.gifs,\n      currentGif = _ref.currentGif;\n\n  return { gifs: gifs, currentGif: currentGif };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ nextId: _index.nextId, prevId: _index.prevId }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Gifs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0dpZnMuanM/MDNkOCJdLCJuYW1lcyI6WyJHaWZzIiwicHJvcHMiLCJzdGF0ZSIsImJlZ2luSW50ZXJ2YWwiLCJiaW5kIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsZWFySW50ZXJ2YWwiLCJzd2l0Y2hHaWZzIiwibmV4dElkIiwiY3VycmVudEdpZiIsImdpZnMiLCJsZW5ndGgiLCJwcmV2SWQiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwic2hvd0dpZiIsImN1cnJlbnRTaG93IiwidXJsIiwidGl0bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxJOzs7QUFDTCxnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUNWQSxLQURVOztBQUVoQixVQUFLQyxLQUFMLEdBQWEsRUFBQyxXQUFXLEtBQVosRUFBYjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsT0FBckI7QUFDQSxVQUFLRCxhQUFMO0FBQ0FFLFdBQU9DLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQUNDLENBQUQsRUFBTztBQUN0Q0EsUUFBRUMsY0FBRjtBQUNBQyxvQkFBYyxNQUFLQyxVQUFuQjtBQUNBLFlBQUtULEtBQUwsQ0FBV1UsTUFBWCxDQUFrQixNQUFLVixLQUFMLENBQVdXLFVBQTdCO0FBQ0EsWUFBS1QsYUFBTDtBQUNELEtBTEQ7QUFNQUUsV0FBT0MsZ0JBQVAsQ0FBd0IsYUFBeEIsRUFBdUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzVDQSxRQUFFQyxjQUFGO0FBQ0EsVUFBSSxNQUFLUCxLQUFMLENBQVdXLFVBQVgsSUFBeUIsTUFBS1gsS0FBTCxDQUFXWSxJQUFYLENBQWdCQyxNQUE3QyxFQUFxRDtBQUNuRCxjQUFLWCxhQUFMO0FBQ0Q7O0FBRUQsWUFBS0YsS0FBTCxDQUFXYyxNQUFYLENBQWtCLE1BQUtkLEtBQUwsQ0FBV1csVUFBN0I7QUFDRCxLQVBEO0FBWGdCO0FBbUJsQjs7Ozt3Q0FFbUIsQ0FFbkI7OztvQ0FFZTtBQUFBOztBQUNmLFdBQUtGLFVBQUwsR0FBa0JNLFlBQVksS0FBS0MsUUFBTCxDQUFjO0FBQzFDLG1CQUFXLENBQUMsS0FBS2YsS0FBTCxDQUFXZ0I7QUFEbUIsT0FBZCxFQUUzQixZQUFNO0FBQ1AsU0FBQyxPQUFLaEIsS0FBTCxDQUFXZ0IsT0FBWixJQUF1QixPQUFLakIsS0FBTCxDQUFXVSxNQUFYLENBQWtCLE9BQUtWLEtBQUwsQ0FBV1csVUFBN0IsQ0FBdkI7QUFDRCxPQUo2QixDQUFaLEVBSWQsSUFKYyxDQUFsQjtBQUtBOzs7MkNBRXNCO0FBQ3JCSCxvQkFBYyxLQUFLQyxVQUFuQjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFJLEtBQUtULEtBQUwsQ0FBV1csVUFBWCxJQUF5QixLQUFLWCxLQUFMLENBQVdZLElBQVgsQ0FBZ0JDLE1BQTdDLEVBQXFEO0FBQ25ETCxzQkFBYyxLQUFLQyxVQUFuQjtBQUNELGVBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGLFNBREY7QUFVQTs7QUFFRCxVQUFNUyxjQUFjLEtBQUtsQixLQUFMLENBQVdZLElBQVgsQ0FBZ0IsS0FBS1osS0FBTCxDQUFXVyxVQUEzQixDQUFwQjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0ksYUFBS1YsS0FBTCxDQUFXZ0IsT0FBWCxJQUFzQix1Q0FBSyxLQUFLQyxZQUFZQyxHQUF0QixHQUQxQjtBQUVHO0FBQUE7QUFBQTtBQUNHRCxzQkFBWUU7QUFEZjtBQUZILE9BREY7QUFRRDs7Ozs7O0FBR0YsU0FBU0MsZUFBVCxPQUE2QztBQUFBLE1BQW5CVCxJQUFtQixRQUFuQkEsSUFBbUI7QUFBQSxNQUFiRCxVQUFhLFFBQWJBLFVBQWE7O0FBQzNDLFNBQU8sRUFBQ0MsVUFBRCxFQUFPRCxzQkFBUCxFQUFQO0FBQ0Q7O0FBRUQsU0FBU1csa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLFNBQU8sK0JBQW1CLEVBQUViLHFCQUFGLEVBQVVJLHFCQUFWLEVBQW5CLEVBQXVDUyxRQUF2QyxDQUFQO0FBQ0Q7O2tCQUVjLHlCQUFRRixlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkN2QixJQUE3QyxDIiwiZmlsZSI6IjIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbmV4dElkLCBwcmV2SWQgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCAnLi9HaWZzLmNzcydcbiBcbi8qKlxuKiBBIGNvdW50ZXIgYnV0dG9uOiB0YXAgdGhlIGJ1dHRvbiB0byBpbmNyZWFzZSB0aGUgY291bnQuXG4qL1xuY2xhc3MgR2lmcyBleHRlbmRzIENvbXBvbmVudCB7XG4gY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcInNob3dHaWZcIjogZmFsc2V9O1xuICAgIHRoaXMuYmVnaW5JbnRlcnZhbCA9IHRoaXMuYmVnaW5JbnRlcnZhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYmVnaW5JbnRlcnZhbCgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zd2l0Y2hHaWZzKTtcbiAgICAgIHRoaXMucHJvcHMubmV4dElkKHRoaXMucHJvcHMuY3VycmVudEdpZik7XG4gICAgICB0aGlzLmJlZ2luSW50ZXJ2YWwoKTtcbiAgICB9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRHaWYgPT0gdGhpcy5wcm9wcy5naWZzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmJlZ2luSW50ZXJ2YWwoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcy5wcmV2SWQodGhpcy5wcm9wcy5jdXJyZW50R2lmKTtcbiAgICB9KVxuIH1cbiBcbiBjb21wb25lbnREaWRNb3VudCgpIHtcblxuIH1cblxuIGJlZ2luSW50ZXJ2YWwoKSB7XG4gIHRoaXMuc3dpdGNoR2lmcyA9IHNldEludGVydmFsKHRoaXMuc2V0U3RhdGUoe1xuICAgIFwic2hvd0dpZlwiOiAhdGhpcy5zdGF0ZS5zaG93R2lmXG4gIH0sICgpID0+IHtcbiAgICAhdGhpcy5zdGF0ZS5zaG93R2lmICYmIHRoaXMucHJvcHMubmV4dElkKHRoaXMucHJvcHMuY3VycmVudEdpZik7XG4gIH0pLCAyMDAwKTtcbiB9XG5cbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgIGNsZWFySW50ZXJ2YWwodGhpcy5zd2l0Y2hHaWZzKVxuIH1cblxuIHJlbmRlcigpIHtcbiAgIGlmICh0aGlzLnByb3BzLmN1cnJlbnRHaWYgPj0gdGhpcy5wcm9wcy5naWZzLmxlbmd0aCkge1xuICAgICBjbGVhckludGVydmFsKHRoaXMuc3dpdGNoR2lmcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICDXnten15XXldeZ150g16nXoNeU16DXqtedXG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICDimaUxNkEg15DXldeU15HXmdedIFxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgIH1cblxuICAgY29uc3QgY3VycmVudFNob3cgPSB0aGlzLnByb3BzLmdpZnNbdGhpcy5wcm9wcy5jdXJyZW50R2lmXVxuICAgcmV0dXJuIChcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dHaWYgJiYgPGltZyBzcmM9e2N1cnJlbnRTaG93LnVybH0gLz59XG4gICAgICAgIDxoMT5cbiAgICAgICAgICB7Y3VycmVudFNob3cudGl0bGV9XG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICk7XG4gfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoe2dpZnMsIGN1cnJlbnRHaWZ9KSB7XG4gIHJldHVybiB7Z2lmcywgY3VycmVudEdpZn07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3JzKHsgbmV4dElkLCBwcmV2SWQgfSwgZGlzcGF0Y2gpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHaWZzKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL0dpZnMuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///232\n");

/***/ })

})