webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sketch;

var _configs = __webpack_require__(5);

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sketch(s) {
  var x = void 0,
      y = void 0,
      backgroundColor = void 0;

  var width = _configs2.default.canvas.size.width;
  var height = _configs2.default.canvas.size.height;

  s.setup = function () {
    s.createCanvas(width, height);
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));

    x = s.random(width);
    y = height / 2;
  };

  s.draw = function () {
    s.background(backgroundColor);
    s.fill(s.color(255, 0, 0));
    s.ellipse(x, y, 100, 100);

    x = (x + 1) % width;
  };

  s.mousePressed = function () {
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
  };
}

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  canvas: {
    size: {
      width: 600,
      height: 600
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _p = __webpack_require__(0);

var _p2 = _interopRequireDefault(_p);

__webpack_require__(2);

__webpack_require__(1);

var _sketch = __webpack_require__(3);

var _sketch2 = _interopRequireDefault(_sketch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _p2.default(_sketch2.default);

/***/ })
],[6]);
//# sourceMappingURL=bundle.d91155e65b97df3b1876.js.map