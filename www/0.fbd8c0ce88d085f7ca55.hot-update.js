webpackHotUpdate(0,{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(87);\n\nvar _index = __webpack_require__(98);\n\nvar _redux = __webpack_require__(33);\n\n__webpack_require__(233);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n* A counter button: tap the button to increase the count.\n*/\nvar Gifs = function (_Component) {\n  _inherits(Gifs, _Component);\n\n  function Gifs(props) {\n    _classCallCheck(this, Gifs);\n\n    var _this = _possibleConstructorReturn(this, (Gifs.__proto__ || Object.getPrototypeOf(Gifs)).call(this, props));\n\n    _this.state = { \"showGif\": false };\n    _this.switchGifs = setInterval((\"click\", function () {\n      _this.setState({\n        \"showGif\": !_this.state.showGif\n      }, function () {\n        !_this.state.showGif && _this.props.nextId(_this.props.currentGif);\n      });\n    }), 1000);\n    return _this;\n  }\n\n  _createClass(Gifs, [{\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      clearInterval(this.switchGifs);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (this.props.currentGif >= this.props.gifs.length) {\n        return _react2.default.createElement(\n          'h1',\n          null,\n          '\\u05DE\\u05E7\\u05D5\\u05D5\\u05D9\\u05DD \\u05E9\\u05E0\\u05D4\\u05E0\\u05EA\\u05DD'\n        );\n      }\n\n      var currentShow = this.props.gifs[this.props.currentGif];\n      return _react2.default.createElement(\n        'div',\n        { className: 'wrapper' },\n        this.state.showGif && _react2.default.createElement('img', { src: currentShow.url }),\n        _react2.default.createElement(\n          'h1',\n          null,\n          currentShow.title\n        )\n      );\n    }\n  }]);\n\n  return Gifs;\n}(_react.Component);\n\nfunction mapStateToProps(_ref) {\n  var gifs = _ref.gifs,\n      currentGif = _ref.currentGif;\n\n  return { gifs: gifs, currentGif: currentGif };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ nextId: _index.nextId, prevId: _index.prevId }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Gifs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0dpZnMuanM/MDNkOCJdLCJuYW1lcyI6WyJHaWZzIiwicHJvcHMiLCJzdGF0ZSIsInN3aXRjaEdpZnMiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwic2hvd0dpZiIsIm5leHRJZCIsImN1cnJlbnRHaWYiLCJjbGVhckludGVydmFsIiwiZ2lmcyIsImxlbmd0aCIsImN1cnJlbnRTaG93IiwidXJsIiwidGl0bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInByZXZJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxJOzs7QUFDTCxnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUNWQSxLQURVOztBQUVoQixVQUFLQyxLQUFMLEdBQWEsRUFBQyxXQUFXLEtBQVosRUFBYjtBQUNBLFVBQUtDLFVBQUwsR0FBa0JDLGFBQWEsU0FBUyxZQUFNO0FBQzFDLFlBQUtDLFFBQUwsQ0FBYztBQUNaLG1CQUFXLENBQUMsTUFBS0gsS0FBTCxDQUFXSTtBQURYLE9BQWQsRUFFRyxZQUFNO0FBQ1AsU0FBQyxNQUFLSixLQUFMLENBQVdJLE9BQVosSUFBdUIsTUFBS0wsS0FBTCxDQUFXTSxNQUFYLENBQWtCLE1BQUtOLEtBQUwsQ0FBV08sVUFBN0IsQ0FBdkI7QUFDRCxPQUpEO0FBS0gsS0FOaUIsR0FNZCxJQU5jLENBQWxCO0FBSGdCO0FBVWxCOzs7OzJDQUVzQjtBQUNyQkMsb0JBQWMsS0FBS04sVUFBbkI7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBSSxLQUFLRixLQUFMLENBQVdPLFVBQVgsSUFBeUIsS0FBS1AsS0FBTCxDQUFXUyxJQUFYLENBQWdCQyxNQUE3QyxFQUFxRDtBQUNwRCxlQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESjtBQUtBOztBQUVELFVBQU1DLGNBQWMsS0FBS1gsS0FBTCxDQUFXUyxJQUFYLENBQWdCLEtBQUtULEtBQUwsQ0FBV08sVUFBM0IsQ0FBcEI7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNJLGFBQUtOLEtBQUwsQ0FBV0ksT0FBWCxJQUFzQix1Q0FBSyxLQUFLTSxZQUFZQyxHQUF0QixHQUQxQjtBQUVHO0FBQUE7QUFBQTtBQUNHRCxzQkFBWUU7QUFEZjtBQUZILE9BREY7QUFRRDs7Ozs7O0FBR0YsU0FBU0MsZUFBVCxPQUE2QztBQUFBLE1BQW5CTCxJQUFtQixRQUFuQkEsSUFBbUI7QUFBQSxNQUFiRixVQUFhLFFBQWJBLFVBQWE7O0FBQzNDLFNBQU8sRUFBQ0UsVUFBRCxFQUFPRixzQkFBUCxFQUFQO0FBQ0Q7O0FBRUQsU0FBU1Esa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ3BDLFNBQU8sK0JBQW1CLEVBQUVWLHFCQUFGLEVBQVVXLHFCQUFWLEVBQW5CLEVBQXVDRCxRQUF2QyxDQUFQO0FBQ0Q7O2tCQUVjLHlCQUFRRixlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkNoQixJQUE3QyxDIiwiZmlsZSI6IjIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgbmV4dElkLCBwcmV2SWQgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4LmpzJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCAnLi9HaWZzLmNzcydcbiBcbi8qKlxuKiBBIGNvdW50ZXIgYnV0dG9uOiB0YXAgdGhlIGJ1dHRvbiB0byBpbmNyZWFzZSB0aGUgY291bnQuXG4qL1xuY2xhc3MgR2lmcyBleHRlbmRzIENvbXBvbmVudCB7XG4gY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcInNob3dHaWZcIjogZmFsc2V9O1xuICAgIHRoaXMuc3dpdGNoR2lmcyA9IHNldEludGVydmFsKChcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgXCJzaG93R2lmXCI6ICF0aGlzLnN0YXRlLnNob3dHaWZcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICF0aGlzLnN0YXRlLnNob3dHaWYgJiYgdGhpcy5wcm9wcy5uZXh0SWQodGhpcy5wcm9wcy5jdXJyZW50R2lmKTtcbiAgICAgICAgfSlcbiAgICB9KSwgMTAwMCk7XG4gfVxuXG4gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICBjbGVhckludGVydmFsKHRoaXMuc3dpdGNoR2lmcylcbiB9XG5cbiByZW5kZXIoKSB7XG4gICBpZiAodGhpcy5wcm9wcy5jdXJyZW50R2lmID49IHRoaXMucHJvcHMuZ2lmcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aDE+XG4gICAgICAgICAg157Xp9eV15XXmdedINep16DXlNeg16rXnVxuICAgICAgICA8L2gxPlxuICAgICk7XG4gICB9XG5cbiAgIGNvbnN0IGN1cnJlbnRTaG93ID0gdGhpcy5wcm9wcy5naWZzW3RoaXMucHJvcHMuY3VycmVudEdpZl1cbiAgIHJldHVybiAoXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93R2lmICYmIDxpbWcgc3JjPXtjdXJyZW50U2hvdy51cmx9IC8+fVxuICAgICAgICA8aDE+XG4gICAgICAgICAge2N1cnJlbnRTaG93LnRpdGxlfVxuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG4gICApO1xuIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHtnaWZzLCBjdXJyZW50R2lmfSkge1xuICByZXR1cm4ge2dpZnMsIGN1cnJlbnRHaWZ9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IG5leHRJZCwgcHJldklkIH0sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR2lmcyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVycy9HaWZzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///232\n");

/***/ })

})