webpackHotUpdate(0,{

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(33);

var _reducer_current = __webpack_require__(230);

var _reducer_current2 = _interopRequireDefault(_reducer_current);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    counter: _reducer_current2.default
});

exports.default = rootReducer;

/***/ }),

/***/ 228:
false,

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var action = arguments[1];

    switch (action.type) {
        case _index.NEXT_ID:
            return action.payload;
        default:
            return state;
    }
};

var _index = __webpack_require__(97);

/***/ })

})