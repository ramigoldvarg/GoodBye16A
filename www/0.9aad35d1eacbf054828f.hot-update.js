webpackHotUpdate(0,{

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(24);\n\nvar _reactRedux = __webpack_require__(198);\n\nvar _index = __webpack_require__(228);\n\nvar _redux = __webpack_require__(52);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n* A counter button: tap the button to increase the count.\n*/\nvar Gifs = function (_Component) {\n  _inherits(Gifs, _Component);\n\n  function Gifs(props) {\n    _classCallCheck(this, Gifs);\n\n    return _possibleConstructorReturn(this, (Gifs.__proto__ || Object.getPrototypeOf(Gifs)).call(this, props));\n  }\n\n  _createClass(Gifs, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return React.createElement(\n        'button',\n        {\n          onClick: function onClick() {\n            _this2.props.increaseCounter();\n          }\n        },\n        'Count: ',\n        this.props.counter\n      );\n    }\n  }]);\n\n  return Gifs;\n}(_react.Component);\n\nfunction mapStateToProps(_ref) {\n  var gifs = _ref.gifs,\n      currentGif = _ref.currentGif,\n      showFilter = _ref.showFilter;\n\n  return { gifs: gifs, currentGif: currentGif, showFilter: showFilter };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({ nextId: nextId, prevId: prevId, showGif: showGif }, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Counter);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0dpZnMuanM/MDNkOCJdLCJuYW1lcyI6WyJHaWZzIiwicHJvcHMiLCJpbmNyZWFzZUNvdW50ZXIiLCJjb3VudGVyIiwibWFwU3RhdGVUb1Byb3BzIiwiZ2lmcyIsImN1cnJlbnRHaWYiLCJzaG93RmlsdGVyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJuZXh0SWQiLCJwcmV2SWQiLCJzaG93R2lmIiwiQ291bnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQTs7O0lBR01BLEk7OztBQUNMLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsdUdBQ1ZBLEtBRFU7QUFFbEI7Ozs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFTLG1CQUFNO0FBQ2IsbUJBQUtBLEtBQUwsQ0FBV0MsZUFBWDtBQUNEO0FBSEg7QUFBQTtBQUtVLGFBQUtELEtBQUwsQ0FBV0U7QUFMckIsT0FERjtBQVNEOzs7Ozs7QUFHRixTQUFTQyxlQUFULE9BQXlEO0FBQUEsTUFBL0JDLElBQStCLFFBQS9CQSxJQUErQjtBQUFBLE1BQXpCQyxVQUF5QixRQUF6QkEsVUFBeUI7QUFBQSxNQUFiQyxVQUFhLFFBQWJBLFVBQWE7O0FBQ3ZELFNBQU8sRUFBQ0YsVUFBRCxFQUFPQyxzQkFBUCxFQUFtQkMsc0JBQW5CLEVBQVA7QUFDRDs7QUFFRCxTQUFTQyxrQkFBVCxDQUE0QkMsUUFBNUIsRUFBc0M7QUFDcEMsU0FBTywrQkFBbUIsRUFBRUMsY0FBRixFQUFVQyxjQUFWLEVBQWtCQyxnQkFBbEIsRUFBbkIsRUFBZ0RILFFBQWhELENBQVA7QUFDRDs7a0JBRWMseUJBQVFMLGVBQVIsRUFBeUJJLGtCQUF6QixFQUE2Q0ssT0FBN0MsQyIsImZpbGUiOiIyMzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgaW5jcmVhc2VDb3VudGVyIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleC5qcyc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG4gXG4vKipcbiogQSBjb3VudGVyIGJ1dHRvbjogdGFwIHRoZSBidXR0b24gdG8gaW5jcmVhc2UgdGhlIGNvdW50LlxuKi9cbmNsYXNzIEdpZnMgZXh0ZW5kcyBDb21wb25lbnQge1xuIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuIH1cblxuIHJlbmRlcigpIHtcbiAgIHJldHVybiAoXG4gICAgIDxidXR0b25cbiAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICB0aGlzLnByb3BzLmluY3JlYXNlQ291bnRlcigpO1xuICAgICAgIH19XG4gICAgID5cbiAgICAgICBDb3VudDoge3RoaXMucHJvcHMuY291bnRlcn1cbiAgICAgPC9idXR0b24+XG4gICApO1xuIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHtnaWZzLCBjdXJyZW50R2lmLCBzaG93RmlsdGVyfSkge1xuICByZXR1cm4ge2dpZnMsIGN1cnJlbnRHaWYsIHNob3dGaWx0ZXJ9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyh7IG5leHRJZCwgcHJldklkLCBzaG93R2lmIH0sIGRpc3BhdGNoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVycy9HaWZzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///234\n");

/***/ })

})