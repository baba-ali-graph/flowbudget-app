"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = isMobile;
exports.formatPrice = formatPrice;

function isMobile() {
  return window.innerWidth < 567;
}

function formatPrice(currency, price) {
  return "".concat(currency, " ").concat(price);
}