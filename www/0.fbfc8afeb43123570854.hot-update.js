webpackHotUpdate(0,{

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
        case _index.PREV_ID:
        case _index.NEXT_ID:
            return action.payload;
        default:
            return state;
    }
};

var _index = __webpack_require__(97);

/***/ })

})