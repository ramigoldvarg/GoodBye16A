webpackHotUpdate(0,{

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.increaseCounter = increaseCounter;
exports.nextId = nextId;
var INCREASED_COUNTER = exports.INCREASED_COUNTER = 'INCREASED_COUNTER';
var NEXT_ID = exports.NEXT_ID = 'NEXT_ID';

function increaseCounter() {
    return {
        type: INCREASED_COUNTER,
        payload: ''
    };
}

function nextId(currentId) {
    return {
        type: NEXT_ID
    };
}

/***/ })

})