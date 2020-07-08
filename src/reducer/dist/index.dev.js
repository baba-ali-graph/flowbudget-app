"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.initialState = void 0;

var types = _interopRequireWildcard(require("../actions/types"));

var _index = require("../tools/index");

var _uuid = _interopRequireDefault(require("uuid"));

var _testBudget = _interopRequireDefault(require("./testBudget"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  budgets: _testBudget["default"],
  currentBudget: {
    _id: _uuid["default"].v4(),
    amount: 2000,
    used: 0,
    timestamp: new Date(),
    remaining: 2000,
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
  showHint: true,
  notification: {
    type: 'success',
    msg: 'App loaded successfully',
    show: false
  },
  settings: {
    allowOverflow: false,
    darkTheme: false,
    fontSize: 16,
    hideSidebar: false
  }
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
      currentBudget = state.budgets.find(function (budget) {
        return budget._id == action.payload;
      });
      return _objectSpread({}, state, {}, currentBudget);

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

    case types.SORT_BUDGET:
      var _items = currentBudget.items;
      currentBudget.items = _items.sort(function (a, b) {
        return a.price < b.price ? 1 : -1;
      });
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
      var items = currentBudget.items.map(function (item) {
        if (item._id === action.payload._id) {
          item[action.payload.field] = action.payload.value;
        }

        return item;
      });
      currentBudget = _objectSpread({}, currentBudget, {
        items: items
      });

      if (action.payload.field === 'price') {
        console.log(_typeof(action.payload.value));
        var used = currentBudget.items.reduce(function (sum, item) {
          return sum + item.price;
        }, 0);
        console.log('used', used);
        var remaining = currentBudget.amount - used;
        console.log('remaining', remaining);
        currentBudget = _objectSpread({}, currentBudget, {
          used: used,
          remaining: remaining
        });
        console.log(currentBudget);
      }

      return _objectSpread({}, state, {
        currentBudget: currentBudget
      });

    case types.DELETE_ITEM:
      return _objectSpread({}, state);

    case types.UPDATE_ITEM:
      return _objectSpread({}, state);

    case types.TOGGLE_HELP:
      return _objectSpread({}, state, {
        showHints: !state.showHints
      });

    case types.HIDE_NOTIFICATION:
      var notification = state.notification;
      notification.show = !notification.show;
      return _objectSpread({}, state, {
        notification: notification
      });
  }
};

exports.reducer = reducer;