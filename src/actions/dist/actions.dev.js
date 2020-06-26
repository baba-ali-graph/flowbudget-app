"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateBudget = exports.SaveBudget = exports.OpenBudget = exports.CreateBudget = void 0;

var types = _interopRequireWildcard(require("./types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CreateBudget = function CreateBudget(payload) {
  return {
    type: types.CREATE_BUDGET,
    payload: payload
  };
};

exports.CreateBudget = CreateBudget;

var OpenBudget = function OpenBudget(payload) {
  return {
    type: types.OPEN_BUDGET,
    payload: payload
  };
};

exports.OpenBudget = OpenBudget;

var SaveBudget = function SaveBudget(payload) {
  return {
    type: types.SAVE_BUDGET,
    payload: payload
  };
};

exports.SaveBudget = SaveBudget;

var UpdateBudget = function UpdateBudget(payload) {
  return {
    type: types.UPDATE_BUDGET,
    payload: payload
  };
};

exports.UpdateBudget = UpdateBudget;