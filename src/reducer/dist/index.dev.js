"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = void 0;

var types = _interopRequireWildcard(require("../actions/types"));

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  currentBudget: {
    amount: 3000,
    used: 1300,
    remaining: 1700,
    currency: 'N',
    items: [{
      _id: _uuid["default"].v4(),
      name: 'rice',
      price: 600
    }, {
      _id: _uuid["default"].v4(),
      name: 'beans',
      price: 400
    }, {
      _id: _uuid["default"].v4(),
      name: 'tomatoes',
      price: 300
    }]
  },
  currencyList: ['N', 'USD', 'F', 'E'],
  showHint: true
};
exports.initialState = initialState;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var currentBudget = state.currentBudget;

  switch (action.type) {
    // budget actions
    case types.CREATE_BUDGET:
      console.log('CREATE_BUDGET dispatched');
      return _objectSpread({}, state);

    case types.OPEN_BUDGET:
      console.log('OPEN_BUDGET dispatched');
      return _objectSpread({}, state);

    case types.SAVE_BUDGET:
      return _objectSpread({}, state);

    case types.DELETE_BUDGET:
      return _objectSpread({}, state);

    case types.UPDATE_BUDGET:
      var _action$payload = action.payload,
          field = _action$payload.field,
          value = _action$payload.value;
      currentBudget = _objectSpread({}, currentBudget, _defineProperty({}, field, value));
      console.log(currentBudget);
      return _objectSpread({}, state, {
        currentBudget: currentBudget
      });
    // item actions

    case types.ADD_ITEM:
      var newItem = {
        _id: _uuid["default"].v4(),
        name: '',
        price: 0
      };
      currentBudget.items.push(newItem);
      return _objectSpread({}, state, {}, currentBudget);

    case types.SET_ITEM:
      currentBudget.items = currentBudget.items.map(function (item) {
        if (item._id === action.payload._id) {
          item[action.payload.field] = action.payload.value;
        }

        return item;
      });
      return _objectSpread({}, state, {}, currentBudget);

    case types.DELETE_ITEM:
      return _objectSpread({}, state);

    case types.UPDATE_ITEM:
      return _objectSpread({}, state);
  }
};

exports.reducer = reducer;