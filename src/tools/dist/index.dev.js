"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = isMobile;
exports.formatPrice = formatPrice;
exports.computePartialRemaining = computePartialRemaining;

function isMobile() {
  return window.innerWidth < 567;
}

function formatPrice(currency, price) {
  return "".concat(currency, " ").concat(price);
}

function computePartialRemaining(_ref, ID) {
  var amount = _ref.amount,
      items = _ref.items;
  var sumPrices = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      if (item._id !== ID) sumPrices += item.price;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return amount - sumPrices;
}