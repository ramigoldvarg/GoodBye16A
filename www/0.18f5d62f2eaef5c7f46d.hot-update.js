webpackHotUpdate(0,{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(87);\n\nvar _index = __webpack_require__(98);\n\nvar _redux = __webpack_require__(33);\n\n__webpack_require__(233);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n* A counter button: tap the button to increase the count.\n*/\nvar Gifs = function (_Component) {\n  _inherits(Gifs, _Component);\n\n  function Gifs(props) {\n    _classCallCheck(this, Gifs);\n\n    var _this = _possibleConstructorReturn(this, (Gifs.__proto__ || Object.getPrototypeOf(Gifs)).call(this, props));\n\n    _this.state = { \"showGif\": false };\n    _this.beginInterval = _this.beginInterval.bind(_this);\n    _this.switchGifs = setInterval(function () {}, 2000);\n\n    window.addEventListener(\"contextmenu\", function (e) {\n      e.preventDefault();\n      _this.props.prevId(_this.props.currentGif);\n    });\n    return _this;\n  }\n\n  _createClass(Gifs, [{\n    key: 'beginInterval',\n    value: function beginInterval() {\n      var _this2 = this;\n\n      this.setState({\n        \"showGif\": !this.state.showGif\n      }, function () {\n        !_this2.state.showGif && _this2.props.nextId(_this2.props.currentGif);\n      });\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      clearInterval(this.switchGifs);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (this.props.currentGif >= this.props.gifs.length) {\n        clearInterval(this.switchGifs);\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h1',\n            null,\n            '\\u05DE\\u05E7\\u05D5\\u05D5\\u05D9\\u05DD \\u05E9\\u05E0\\u05D4\\u05E0\\u05EA\\u05DD'\n          ),\n          _react2.default.createElement(\n            'h2',\n            null,\n            '\\u05D0\\u05D5\\u05D4\\u05D1\\u05D9\\u05DD 16A \\u2665'\n          )\n        );\n      }\n\n      var currentShow = this.props.gifs[this.props.currentGif];\n      return _react2.default.createElement(\n        'div',\n        { className: 'wrapper' },\n        this.state.showGif && _react2.default.createElement('img', { src: currentShow.url }),\n        _react2.default.createElement(\n          'h1',\n          null,\n          currentShow.title\n        )\n      );\n    }\n  }]);\n\n  return Gifs;\n}(_react.Component);\n\nfunction mapStateToProps(_ref) {\n  var gifs = _ref.gifs,\n      currentGif = _ref.currentGif;\n\n  return { gifs: gifs, currentGif: currentGif };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ nextId: _index.nextId, prevId: _index.prevId }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Gifs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0dpZnMuanM/MDNkOCJdLCJuYW1lcyI6WyJHaWZzIiwicHJvcHMiLCJzdGF0ZSIsImJlZ2luSW50ZXJ2YWwiLCJiaW5kIiwic3dpdGNoR2lmcyIsInNldEludGVydmFsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZJZCIsImN1cnJlbnRHaWYiLCJzZXRTdGF0ZSIsInNob3dHaWYiLCJuZXh0SWQiLCJjbGVhckludGVydmFsIiwiZ2lmcyIsImxlbmd0aCIsImN1cnJlbnRTaG93IiwidXJsIiwidGl0bGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxJOzs7QUFDTCxnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDRHQUNWQSxLQURVOztBQUVoQixVQUFLQyxLQUFMLEdBQWEsRUFBQyxXQUFXLEtBQVosRUFBYjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkMsSUFBbkIsT0FBckI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCQyxZQUFZLFlBQU0sQ0FFbkMsQ0FGaUIsRUFFZixJQUZlLENBQWxCOztBQUlBQyxXQUFPQyxnQkFBUCxDQUF3QixhQUF4QixFQUF1QyxVQUFDQyxDQUFELEVBQU87QUFDNUNBLFFBQUVDLGNBQUY7QUFDQSxZQUFLVCxLQUFMLENBQVdVLE1BQVgsQ0FBa0IsTUFBS1YsS0FBTCxDQUFXVyxVQUE3QjtBQUNELEtBSEQ7QUFSZ0I7QUFZbEI7Ozs7b0NBRWU7QUFBQTs7QUFDZixXQUFLQyxRQUFMLENBQWM7QUFDWixtQkFBVyxDQUFDLEtBQUtYLEtBQUwsQ0FBV1k7QUFEWCxPQUFkLEVBRUcsWUFBTTtBQUNQLFNBQUMsT0FBS1osS0FBTCxDQUFXWSxPQUFaLElBQXVCLE9BQUtiLEtBQUwsQ0FBV2MsTUFBWCxDQUFrQixPQUFLZCxLQUFMLENBQVdXLFVBQTdCLENBQXZCO0FBQ0QsT0FKRDtBQUtBOzs7MkNBRXNCO0FBQ3JCSSxvQkFBYyxLQUFLWCxVQUFuQjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFJLEtBQUtKLEtBQUwsQ0FBV1csVUFBWCxJQUF5QixLQUFLWCxLQUFMLENBQVdnQixJQUFYLENBQWdCQyxNQUE3QyxFQUFxRDtBQUNuREYsc0JBQWMsS0FBS1gsVUFBbkI7QUFDRCxlQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixTQURGO0FBVUE7O0FBRUQsVUFBTWMsY0FBYyxLQUFLbEIsS0FBTCxDQUFXZ0IsSUFBWCxDQUFnQixLQUFLaEIsS0FBTCxDQUFXVyxVQUEzQixDQUFwQjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxTQUFmO0FBQ0ksYUFBS1YsS0FBTCxDQUFXWSxPQUFYLElBQXNCLHVDQUFLLEtBQUtLLFlBQVlDLEdBQXRCLEdBRDFCO0FBRUc7QUFBQTtBQUFBO0FBQ0dELHNCQUFZRTtBQURmO0FBRkgsT0FERjtBQVFEOzs7Ozs7QUFHRixTQUFTQyxlQUFULE9BQTZDO0FBQUEsTUFBbkJMLElBQW1CLFFBQW5CQSxJQUFtQjtBQUFBLE1BQWJMLFVBQWEsUUFBYkEsVUFBYTs7QUFDM0MsU0FBTyxFQUFDSyxVQUFELEVBQU9MLHNCQUFQLEVBQVA7QUFDRDs7QUFFRCxTQUFTVyxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTywrQkFBbUIsRUFBRVQscUJBQUYsRUFBVUoscUJBQVYsRUFBbkIsRUFBdUNhLFFBQXZDLENBQVA7QUFDRDs7a0JBRWMseUJBQVFGLGVBQVIsRUFBeUJDLGtCQUF6QixFQUE2Q3ZCLElBQTdDLEMiLCJmaWxlIjoiMjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBuZXh0SWQsIHByZXZJZCB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXguanMnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0ICcuL0dpZnMuY3NzJ1xuIFxuLyoqXG4qIEEgY291bnRlciBidXR0b246IHRhcCB0aGUgYnV0dG9uIHRvIGluY3JlYXNlIHRoZSBjb3VudC5cbiovXG5jbGFzcyBHaWZzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1wic2hvd0dpZlwiOiBmYWxzZX07XG4gICAgdGhpcy5iZWdpbkludGVydmFsID0gdGhpcy5iZWdpbkludGVydmFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zd2l0Y2hHaWZzID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBcbiAgICB9LCAyMDAwKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJvcHMucHJldklkKHRoaXMucHJvcHMuY3VycmVudEdpZik7XG4gICAgfSlcbiB9XG5cbiBiZWdpbkludGVydmFsKCkge1xuICB0aGlzLnNldFN0YXRlKHtcbiAgICBcInNob3dHaWZcIjogIXRoaXMuc3RhdGUuc2hvd0dpZlxuICB9LCAoKSA9PiB7XG4gICAgIXRoaXMuc3RhdGUuc2hvd0dpZiAmJiB0aGlzLnByb3BzLm5leHRJZCh0aGlzLnByb3BzLmN1cnJlbnRHaWYpO1xuICB9KVxuIH1cblxuIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN3aXRjaEdpZnMpXG4gfVxuXG4gcmVuZGVyKCkge1xuICAgaWYgKHRoaXMucHJvcHMuY3VycmVudEdpZiA+PSB0aGlzLnByb3BzLmdpZnMubGVuZ3RoKSB7XG4gICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zd2l0Y2hHaWZzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlxuICAgICAgICAgINee16fXldeV15nXnSDXqdeg15TXoNeq151cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGgyPlxuICAgICAgICAgINeQ15XXlNeR15nXnSAxNkEg4pmlXG4gICAgICAgIDwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICAgfVxuXG4gICBjb25zdCBjdXJyZW50U2hvdyA9IHRoaXMucHJvcHMuZ2lmc1t0aGlzLnByb3BzLmN1cnJlbnRHaWZdXG4gICByZXR1cm4gKFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd0dpZiAmJiA8aW1nIHNyYz17Y3VycmVudFNob3cudXJsfSAvPn1cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtjdXJyZW50U2hvdy50aXRsZX1cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgKTtcbiB9XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7Z2lmcywgY3VycmVudEdpZn0pIHtcbiAgcmV0dXJuIHtnaWZzLCBjdXJyZW50R2lmfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMoeyBuZXh0SWQsIHByZXZJZCB9LCBkaXNwYXRjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdpZnMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvR2lmcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///232\n");

/***/ })

})