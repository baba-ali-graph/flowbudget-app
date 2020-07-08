"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideRightLeft = exports.slideRight = exports.slideDownUp = void 0;
var slideDownUp = {
  start: {
    y: -100
  },
  down: {
    y: 0
  },
  up: {
    y: -100
  }
};
exports.slideDownUp = slideDownUp;
var slideRight = {
  initial: {
    x: -100
  },
  animation: {
    x: 0
  }
};
exports.slideRight = slideRight;
var slideRightLeft = {
  start: {
    x: -100
  },
  right: {
    x: 0
  },
  left: {
    x: -100
  }
};
exports.slideRightLeft = slideRightLeft;