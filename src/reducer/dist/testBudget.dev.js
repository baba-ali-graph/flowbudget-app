"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var budgets = [{
  _id: _uuid["default"].v4(),
  title: 'Budget for Family',
  timestamp: new Date(2020, 4, 12)
}, {
  _id: _uuid["default"].v4(),
  title: 'Travelling Budget',
  timestamp: new Date(2020, 5, 23)
}];
var _default = budgets;
exports["default"] = _default;