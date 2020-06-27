"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = isMobile;

function isMobile() {
  return window.innerWidth < 567;
}