webpackHotUpdate(0,{

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nextId = nextId;
var NEXT_ID = exports.NEXT_ID = 'NEXT_ID';
var PREV_ID = exports.PREV_ID = 'PREV_ID';

function nextId(currentId) {
    return {
        type: NEXT_ID,
        payload: ++currentId
    };
}

/***/ })

})