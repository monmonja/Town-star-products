/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buildings/bakery.ts":
/*!*********************************!*\
  !*** ./src/buildings/bakery.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _crafts_butter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/butter */ "./src/crafts/butter.ts");
/* harmony import */ var _crafts_dough__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/dough */ "./src/crafts/dough.ts");
/* harmony import */ var _crafts_baguette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/baguette */ "./src/crafts/baguette.ts");
/* harmony import */ var _crafts_jam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../crafts/jam */ "./src/crafts/jam.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();












var Bakery =
/** @class */
function (_super) {
  __extends(Bakery, _super);

  function Bakery() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Bakery";
    _this.price = 400000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_bakery.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    })];
    _this.output = [_crafts_butter__WEBPACK_IMPORTED_MODULE_4__["default"], _crafts_dough__WEBPACK_IMPORTED_MODULE_5__["default"], _crafts_baguette__WEBPACK_IMPORTED_MODULE_6__["default"], _crafts_jam__WEBPACK_IMPORTED_MODULE_7__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_9__["default"]];
    return _this;
  }

  return Bakery;
}(_item__WEBPACK_IMPORTED_MODULE_8__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bakery);

/***/ }),

/***/ "./src/buildings/beehive.ts":
/*!**********************************!*\
  !*** ./src/buildings/beehive.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_honey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/honey */ "./src/crafts/honey.ts");
/* harmony import */ var _crafts_honeycomb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/honeycomb */ "./src/crafts/honeycomb.ts");
/* harmony import */ var _crafts_wax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/wax */ "./src/crafts/wax.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Beehive =
/** @class */
function (_super) {
  __extends(Beehive, _super);

  function Beehive() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Beehive";
    _this.price = 25000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_beehive.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_5__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_5__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 1
    })];
    _this.output = [_crafts_honey__WEBPACK_IMPORTED_MODULE_2__["default"], _crafts_honeycomb__WEBPACK_IMPORTED_MODULE_3__["default"], _crafts_wax__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Beehive;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Beehive);

/***/ }),

/***/ "./src/buildings/boxing-facility.ts":
/*!******************************************!*\
  !*** ./src/buildings/boxing-facility.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_food_parcel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/food-parcel */ "./src/crafts/food-parcel.ts");
/* harmony import */ var _crafts_gift_parcel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/gift-parcel */ "./src/crafts/gift-parcel.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_party_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../crafts/party-box */ "./src/crafts/party-box.ts");
/* harmony import */ var _crafts_stack_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../crafts/stack-box */ "./src/crafts/stack-box.ts");
/* harmony import */ var _crafts_jewelry_set__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../crafts/jewelry-set */ "./src/crafts/jewelry-set.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();













var BoxingFacility =
/** @class */
function (_super) {
  __extends(BoxingFacility, _super);

  function BoxingFacility() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Boxing Facility";
    _this.price = 300000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_boxing_Facility.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    })];
    _this.output = [_crafts_food_parcel__WEBPACK_IMPORTED_MODULE_5__["default"], _crafts_gift_parcel__WEBPACK_IMPORTED_MODULE_6__["default"], _crafts_party_box__WEBPACK_IMPORTED_MODULE_8__["default"], _crafts_stack_box__WEBPACK_IMPORTED_MODULE_9__["default"], _crafts_jewelry_set__WEBPACK_IMPORTED_MODULE_10__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_7__["default"]];
    return _this;
  }

  return BoxingFacility;
}(_item__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxingFacility);

/***/ }),

/***/ "./src/buildings/cakery.ts":
/*!*********************************!*\
  !*** ./src/buildings/cakery.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_cake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/cake */ "./src/crafts/cake.ts");
/* harmony import */ var _crafts_pumpkin_pie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/pumpkin-pie */ "./src/crafts/pumpkin-pie.ts");
/* harmony import */ var _crafts_batter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../crafts/batter */ "./src/crafts/batter.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();











var Cakery =
/** @class */
function (_super) {
  __extends(Cakery, _super);

  function Cakery() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Cakery";
    _this.price = 1000000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_cakery.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    })];
    _this.output = [_crafts_batter__WEBPACK_IMPORTED_MODULE_7__["default"], _crafts_cake__WEBPACK_IMPORTED_MODULE_5__["default"], _crafts_pumpkin_pie__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_8__["default"]];
    return _this;
  }

  return Cakery;
}(_item__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cakery);

/***/ }),

/***/ "./src/buildings/candy-shop.ts":
/*!*************************************!*\
  !*** ./src/buildings/candy-shop.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_candy_canes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/candy-canes */ "./src/crafts/candy-canes.ts");
/* harmony import */ var _crafts_chocolate_covered_strawberries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/chocolate-covered-strawberries */ "./src/crafts/chocolate-covered-strawberries.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var CandyShop =
/** @class */
function (_super) {
  __extends(CandyShop, _super);

  function CandyShop() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Candy Shop";
    _this.price = 150000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_candyShop.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    })];
    _this.output = [_crafts_candy_canes__WEBPACK_IMPORTED_MODULE_3__["default"], _crafts_chocolate_covered_strawberries__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return CandyShop;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CandyShop);

/***/ }),

/***/ "./src/buildings/chicken-coop.ts":
/*!***************************************!*\
  !*** ./src/buildings/chicken-coop.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_eggs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/eggs */ "./src/crafts/eggs.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var ChickenCoop =
/** @class */
function (_super) {
  __extends(ChickenCoop, _super);

  function ChickenCoop() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Chicken Coop";
    _this.price = 15000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_chickenCoop.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 3
    })];
    _this.output = [_crafts_eggs__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return ChickenCoop;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChickenCoop);

/***/ }),

/***/ "./src/buildings/chocolate-shop.ts":
/*!*****************************************!*\
  !*** ./src/buildings/chocolate-shop.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_chocolate_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/chocolate-bar */ "./src/crafts/chocolate-bar.ts");
/* harmony import */ var _crafts_fancy_cake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/fancy-cake */ "./src/crafts/fancy-cake.ts");
/* harmony import */ var _crafts_decorated_cake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/decorated-cake */ "./src/crafts/decorated-cake.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var ChocolateShop =
/** @class */
function (_super) {
  __extends(ChocolateShop, _super);

  function ChocolateShop() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Chocolate Shop";
    _this.price = 300000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_chocolateShop.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 20
    })];
    _this.output = [_crafts_chocolate_bar__WEBPACK_IMPORTED_MODULE_4__["default"], _crafts_fancy_cake__WEBPACK_IMPORTED_MODULE_5__["default"], _crafts_decorated_cake__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return ChocolateShop;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChocolateShop);

/***/ }),

/***/ "./src/buildings/copper-panning-site.ts":
/*!**********************************************!*\
  !*** ./src/buildings/copper-panning-site.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var CopperPanningSite =
/** @class */
function (_super) {
  __extends(CopperPanningSite, _super);

  function CopperPanningSite() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Copper Panning Site";
    _this.price = 1500;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_water__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 1
    })];
    _this.output = [];
    return _this;
  }

  return CopperPanningSite;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopperPanningSite);

/***/ }),

/***/ "./src/buildings/fabric-plant.ts":
/*!***************************************!*\
  !*** ./src/buildings/fabric-plant.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_cotton_yarn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/cotton-yarn */ "./src/crafts/cotton-yarn.ts");
/* harmony import */ var _crafts_wool_yarn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/wool-yarn */ "./src/crafts/wool-yarn.ts");
/* harmony import */ var _crafts_uniforms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../crafts/uniforms */ "./src/crafts/uniforms.ts");
/* harmony import */ var _terrains_paved_road__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../terrains/paved-road */ "./src/terrains/paved-road.ts");
/* harmony import */ var _crafts_fabric_box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../crafts/fabric-box */ "./src/crafts/fabric-box.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();












var FabricPlant =
/** @class */
function (_super) {
  __extends(FabricPlant, _super);

  function FabricPlant() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Fabric Plant";
    _this.price = 500000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_fabricPlant.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    })];
    _this.output = [_crafts_cotton_yarn__WEBPACK_IMPORTED_MODULE_5__["default"], _crafts_wool_yarn__WEBPACK_IMPORTED_MODULE_6__["default"], _crafts_uniforms__WEBPACK_IMPORTED_MODULE_7__["default"], _crafts_fabric_box__WEBPACK_IMPORTED_MODULE_9__["default"]];
    _this.requirements = [_terrains_paved_road__WEBPACK_IMPORTED_MODULE_8__["default"]];
    return _this;
  }

  return FabricPlant;
}(_item__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FabricPlant);

/***/ }),

/***/ "./src/buildings/feed-mill.ts":
/*!************************************!*\
  !*** ./src/buildings/feed-mill.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/feed */ "./src/crafts/feed.ts");
/* harmony import */ var _crafts_wheat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/wheat */ "./src/crafts/wheat.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var FeedMill =
/** @class */
function (_super) {
  __extends(FeedMill, _super);

  function FeedMill() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Feed Mill";
    _this.price = 5000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_feedMill.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crafts_wheat__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    })];
    _this.output = [_crafts_feed__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return FeedMill;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedMill);

/***/ }),

/***/ "./src/buildings/fish-farm.ts":
/*!************************************!*\
  !*** ./src/buildings/fish-farm.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_paved_road__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../terrains/paved-road */ "./src/terrains/paved-road.ts");
/* harmony import */ var _terrains_mountains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/mountains */ "./src/terrains/mountains.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
/* harmony import */ var _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/oak-wood */ "./src/crafts/oak-wood.ts");
/* harmony import */ var _crafts_eel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/eel */ "./src/crafts/eel.ts");
/* harmony import */ var _crafts_roe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../crafts/roe */ "./src/crafts/roe.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();










var FishFarm =
/** @class */
function (_super) {
  __extends(FishFarm, _super);

  function FishFarm() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Fish Farm";
    _this.price = 95000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_water__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 5
    })];
    _this.output = [_crafts_eel__WEBPACK_IMPORTED_MODULE_6__["default"], _crafts_roe__WEBPACK_IMPORTED_MODULE_7__["default"]];
    _this.requirements = [_terrains_paved_road__WEBPACK_IMPORTED_MODULE_2__["default"], _terrains_mountains__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return FishFarm;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FishFarm);

/***/ }),

/***/ "./src/buildings/forge.ts":
/*!********************************!*\
  !*** ./src/buildings/forge.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Forge =
/** @class */
function (_super) {
  __extends(Forge, _super);

  function Forge() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Forge";
    _this.price = 27500;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    })];
    _this.output = [//Cooper,
      //Silver,
      //Gold,
    ];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Forge;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Forge);

/***/ }),

/***/ "./src/buildings/foundry.ts":
/*!**********************************!*\
  !*** ./src/buildings/foundry.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var Foundry =
/** @class */
function (_super) {
  __extends(Foundry, _super);

  function Foundry() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Foundry";
    _this.price = 1500000;
    _this.isNFT = false;
    _this.buildRequirements = [//createRequirement({ craft: Copper, quantity: 25 }),
    //createRequirement({ craft: Silver, quantity: 25 }),
    (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    })];
    _this.output = [//CopperJumpRing,
      //SilverJumpRing,
      //SterlingSilver,
      //SterlingSilverJumpRing,
      //GoldPlatedHeartPendant,
    ];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return Foundry;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Foundry);

/***/ }),

/***/ "./src/buildings/fuel-storage.ts":
/*!***************************************!*\
  !*** ./src/buildings/fuel-storage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var FuelStorage =
/** @class */
function (_super) {
  __extends(FuelStorage, _super);

  function FuelStorage() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Fuel Storage";
    _this.price = 15000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_fuelStorage.png";
    return _this;
  }

  return FuelStorage;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FuelStorage);

/***/ }),

/***/ "./src/buildings/glass-factory.ts":
/*!****************************************!*\
  !*** ./src/buildings/glass-factory.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_wine_bottle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/wine-bottle */ "./src/crafts/wine-bottle.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _crafts_iron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/iron */ "./src/crafts/iron.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var GlassFactory =
/** @class */
function (_super) {
  __extends(GlassFactory, _super);

  function GlassFactory() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Glass Factory";
    _this.price = 100000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_glassFactory.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crafts_iron__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 10
    })];
    _this.output = [_crafts_wine_bottle__WEBPACK_IMPORTED_MODULE_3__["default"] //MoltenGlass,
    ];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return GlassFactory;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlassFactory);

/***/ }),

/***/ "./src/buildings/gold-panning-site.ts":
/*!********************************************!*\
  !*** ./src/buildings/gold-panning-site.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var GoldPanningSite =
/** @class */
function (_super) {
  __extends(GoldPanningSite, _super);

  function GoldPanningSite() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Gold Panning Site";
    _this.price = 5000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_water__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 1
    })];
    _this.output = [//GoldOre
    ];
    return _this;
  }

  return GoldPanningSite;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoldPanningSite);

/***/ }),

/***/ "./src/buildings/iron-mine.ts":
/*!************************************!*\
  !*** ./src/buildings/iron-mine.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_iron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/iron */ "./src/crafts/iron.ts");
/* harmony import */ var _crafts_chromium__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/chromium */ "./src/crafts/chromium.ts");
/* harmony import */ var _crafts_limestone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/limestone */ "./src/crafts/limestone.ts");
/* harmony import */ var _terrains_paved_road__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../terrains/paved-road */ "./src/terrains/paved-road.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_mountains__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../terrains/mountains */ "./src/terrains/mountains.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();












var IronMine =
/** @class */
function (_super) {
  __extends(IronMine, _super);

  function IronMine() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Iron Mine";
    _this.price = 30000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_mine.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_8__["default"],
      quantity: 5
    })];
    _this.output = [_crafts_iron__WEBPACK_IMPORTED_MODULE_4__["default"], _crafts_chromium__WEBPACK_IMPORTED_MODULE_5__["default"], _crafts_limestone__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.requirements = [_terrains_paved_road__WEBPACK_IMPORTED_MODULE_7__["default"], _terrains_mountains__WEBPACK_IMPORTED_MODULE_9__["default"]];
    return _this;
  }

  return IronMine;
}(_item__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IronMine);

/***/ }),

/***/ "./src/buildings/italian-restaurant.ts":
/*!*********************************************!*\
  !*** ./src/buildings/italian-restaurant.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var ItalianRestaurant =
/** @class */
function (_super) {
  __extends(ItalianRestaurant, _super);

  function ItalianRestaurant() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Italian Restaurant";
    _this.price = 850000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 10
    })];
    _this.output = [//PizzaBase,
      //ShrimpPizza
      //FourCheesePizza,
      //Risotto,
      //Lasagna,
    ];
    return _this;
  }

  return ItalianRestaurant;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItalianRestaurant);

/***/ }),

/***/ "./src/buildings/jewelry-crafting-table.ts":
/*!*************************************************!*\
  !*** ./src/buildings/jewelry-crafting-table.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var JewelryCraftingTable =
/** @class */
function (_super) {
  __extends(JewelryCraftingTable, _super);

  function JewelryCraftingTable() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Jewelry Crafting Table";
    _this.price = 300000;
    _this.isNFT = false;
    _this.buildRequirements = [//createRequirement({ craft: Copper, quantity: 10 }),
    //createRequirement({ craft: Silver, quantity: 10 }),
    (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 10
    })];
    _this.output = [//CopperJumpRing,
      //SilverJumpRing
      ///ChandelierEarrings,
      //LobsterClasp,
      //Bracelet,
      //GoldenHeartNecklace,
    ];
    return _this;
  }

  return JewelryCraftingTable;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JewelryCraftingTable);

/***/ }),

/***/ "./src/buildings/jewelry-store.ts":
/*!****************************************!*\
  !*** ./src/buildings/jewelry-store.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var JewelryStore =
/** @class */
function (_super) {
  __extends(JewelryStore, _super);

  function JewelryStore() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Jewelry Store";
    _this.price = 60000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 20
    })];
    _this.output = [];
    return _this;
  }

  return JewelryStore;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JewelryStore);

/***/ }),

/***/ "./src/buildings/lumber-mill.ts":
/*!**************************************!*\
  !*** ./src/buildings/lumber-mill.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_oak_barrel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/oak-barrel */ "./src/crafts/oak-barrel.ts");
/* harmony import */ var _crafts_wooden_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/wooden-box */ "./src/crafts/wooden-box.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var LumberMill =
/** @class */
function (_super) {
  __extends(LumberMill, _super);

  function LumberMill() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Lumber Mill";
    _this.price = 50000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_lumberMill.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    })];
    _this.output = [_crafts_lumber__WEBPACK_IMPORTED_MODULE_2__["default"], _crafts_oak_barrel__WEBPACK_IMPORTED_MODULE_5__["default"], _crafts_wooden_box__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return LumberMill;
}(_item__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LumberMill);

/***/ }),

/***/ "./src/buildings/lumber-yard.ts":
/*!**************************************!*\
  !*** ./src/buildings/lumber-yard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var LumberYard =
/** @class */
function (_super) {
  __extends(LumberYard, _super);

  function LumberYard() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Lumber Yard";
    _this.price = 20000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_LumberYard.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return LumberYard;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LumberYard);

/***/ }),

/***/ "./src/buildings/master-wizard.ts":
/*!****************************************!*\
  !*** ./src/buildings/master-wizard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_ice_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/ice-block */ "./src/crafts/ice-block.ts");
/* harmony import */ var _crafts_magic_powder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../crafts/magic-powder */ "./src/crafts/magic-powder.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();










var MasterWizard =
/** @class */
function (_super) {
  __extends(MasterWizard, _super);

  function MasterWizard() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Master Wizard";
    _this.price = 1500000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    })];
    _this.output = [//EnchantedObject,
    _crafts_magic_powder__WEBPACK_IMPORTED_MODULE_7__["default"], _crafts_ice_block__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return MasterWizard;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MasterWizard);

/***/ }),

/***/ "./src/buildings/milk-barn.ts":
/*!************************************!*\
  !*** ./src/buildings/milk-barn.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_milk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/milk */ "./src/crafts/milk.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var MilkBarn =
/** @class */
function (_super) {
  __extends(MilkBarn, _super);

  function MilkBarn() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Milk Barn";
    _this.price = 30000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_milkBarn.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_3__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 10
    })];
    _this.output = [_crafts_milk__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return MilkBarn;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MilkBarn);

/***/ }),

/***/ "./src/buildings/mixing-tent.ts":
/*!**************************************!*\
  !*** ./src/buildings/mixing-tent.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var MixingTent =
/** @class */
function (_super) {
  __extends(MixingTent, _super);

  function MixingTent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Mixing Tent";
    _this.price = 550000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    })];
    _this.output = [//FishChum,
      //WhiteRice,
      //FoodMix,
      //Cheese,
    ];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return MixingTent;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MixingTent);

/***/ }),

/***/ "./src/buildings/north-pole-creation-lab.ts":
/*!**************************************************!*\
  !*** ./src/buildings/north-pole-creation-lab.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var NorthPoleCreationLab =
/** @class */
function (_super) {
  __extends(NorthPoleCreationLab, _super);

  function NorthPoleCreationLab() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "North Pole Creation Lab";
    _this.price = 500000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    })];
    _this.output = [//Lights,
      //BoomCanes,
    ];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return NorthPoleCreationLab;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NorthPoleCreationLab);

/***/ }),

/***/ "./src/buildings/nuclear-power.ts":
/*!****************************************!*\
  !*** ./src/buildings/nuclear-power.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_paved_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/paved-road */ "./src/terrains/paved-road.ts");
/* harmony import */ var _water_pump__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./water-pump */ "./src/buildings/water-pump.ts");
/* harmony import */ var _crafts_steel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/steel */ "./src/crafts/steel.ts");
/* harmony import */ var _crafts_iron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/iron */ "./src/crafts/iron.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var NuclearPower =
/** @class */
function (_super) {
  __extends(NuclearPower, _super);

  function NuclearPower() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Nuclear Power";
    _this.price = 10000000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_nuclearPower.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_steel__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_iron__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5
    })];
    _this.output = [_crafts_energy__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.requirements = [_terrains_paved_road__WEBPACK_IMPORTED_MODULE_3__["default"], _water_pump__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return NuclearPower;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NuclearPower);

/***/ }),

/***/ "./src/buildings/oil-pump.ts":
/*!***********************************!*\
  !*** ./src/buildings/oil-pump.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_crude_oil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/crude-oil */ "./src/crafts/crude-oil.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var OilPump =
/** @class */
function (_super) {
  __extends(OilPump, _super);

  function OilPump() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Oil Pump";
    _this.price = 1250;
    _this.isNFT = false;
    _this.icon = "buildings/icon_oilPump.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 3
    })];
    _this.output = [_crafts_crude_oil__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return OilPump;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OilPump);

/***/ }),

/***/ "./src/buildings/ore-storage.ts":
/*!**************************************!*\
  !*** ./src/buildings/ore-storage.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var OreStorage =
/** @class */
function (_super) {
  __extends(OreStorage, _super);

  function OreStorage() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Ore Storage";
    _this.price = 20000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return OreStorage;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OreStorage);

/***/ }),

/***/ "./src/buildings/pantry.ts":
/*!*********************************!*\
  !*** ./src/buildings/pantry.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var Pantry =
/** @class */
function (_super) {
  __extends(Pantry, _super);

  function Pantry() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Pantry";
    _this.price = 20000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_pantry.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Pantry;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pantry);

/***/ }),

/***/ "./src/buildings/pottery-shop.ts":
/*!***************************************!*\
  !*** ./src/buildings/pottery-shop.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _crafts_ceramic_bowl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/ceramic-bowl */ "./src/crafts/ceramic-bowl.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_jack_o_lantern__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../crafts/jack-o-lantern */ "./src/crafts/jack-o-lantern.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();










var PotteryShop =
/** @class */
function (_super) {
  __extends(PotteryShop, _super);

  function PotteryShop() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Pottery Shop";
    _this.price = 120000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_potteryShop.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    })];
    _this.output = [_crafts_ceramic_bowl__WEBPACK_IMPORTED_MODULE_5__["default"], _crafts_jack_o_lantern__WEBPACK_IMPORTED_MODULE_7__["default"] //SupplyBox,
    //HeartShapedPrint,
    ];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return PotteryShop;
}(_item__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PotteryShop);

/***/ }),

/***/ "./src/buildings/power-plant.ts":
/*!**************************************!*\
  !*** ./src/buildings/power-plant.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_paved_road__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../terrains/paved-road */ "./src/terrains/paved-road.ts");
/* harmony import */ var _water_pump__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./water-pump */ "./src/buildings/water-pump.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var PowerPlant =
/** @class */
function (_super) {
  __extends(PowerPlant, _super);

  function PowerPlant() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Power Plant";
    _this.price = 250000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_powerPlant.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 10
    })];
    _this.output = [_crafts_energy__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.requirements = [_terrains_paved_road__WEBPACK_IMPORTED_MODULE_5__["default"], _water_pump__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return PowerPlant;
}(_item__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PowerPlant);

/***/ }),

/***/ "./src/buildings/refinery.ts":
/*!***********************************!*\
  !*** ./src/buildings/refinery.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_petroleum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/petroleum */ "./src/crafts/petroleum.ts");
/* harmony import */ var _crafts_gasoline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/gasoline */ "./src/crafts/gasoline.ts");
/* harmony import */ var _crafts_jet_fuel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/jet-fuel */ "./src/crafts/jet-fuel.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Refinery =
/** @class */
function (_super) {
  __extends(Refinery, _super);

  function Refinery() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Refinery";
    _this.price = 15000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_refinery.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    })];
    _this.output = [_crafts_petroleum__WEBPACK_IMPORTED_MODULE_3__["default"], _crafts_gasoline__WEBPACK_IMPORTED_MODULE_4__["default"], _crafts_jet_fuel__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return Refinery;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Refinery);

/***/ }),

/***/ "./src/buildings/sand-mine.ts":
/*!************************************!*\
  !*** ./src/buildings/sand-mine.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_silica__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/silica */ "./src/crafts/silica.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var SandMine =
/** @class */
function (_super) {
  __extends(SandMine, _super);

  function SandMine() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Sand Mine";
    _this.price = 45000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_sandMine.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 3
    })];
    _this.output = [_crafts_silica__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return SandMine;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SandMine);

/***/ }),

/***/ "./src/buildings/santas-factory.ts":
/*!*****************************************!*\
  !*** ./src/buildings/santas-factory.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var SantasFactory =
/** @class */
function (_super) {
  __extends(SantasFactory, _super);

  function SantasFactory() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Santa's Factory";
    _this.price = 5000000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    })];
    _this.output = [//   Bicycle,
      //   RockingHorse,
    ];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return SantasFactory;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SantasFactory);

/***/ }),

/***/ "./src/buildings/sauce-facility.ts":
/*!*****************************************!*\
  !*** ./src/buildings/sauce-facility.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var SauceFacility =
/** @class */
function (_super) {
  __extends(SauceFacility, _super);

  function SauceFacility() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Sauce Facility";
    _this.price = 450000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    })];
    _this.output = [//  RiceVinegar,
      //  TomatoPaste,
      //  PastaSauce,
    ];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return SauceFacility;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SauceFacility);

/***/ }),

/***/ "./src/buildings/seafood-warehouse.ts":
/*!********************************************!*\
  !*** ./src/buildings/seafood-warehouse.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var SeafoodWarehouse =
/** @class */
function (_super) {
  __extends(SeafoodWarehouse, _super);

  function SeafoodWarehouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Seafood Warehouse";
    _this.price = 50000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    })];
    _this.output = [_crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return SeafoodWarehouse;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeafoodWarehouse);

/***/ }),

/***/ "./src/buildings/shallow-mine.ts":
/*!***************************************!*\
  !*** ./src/buildings/shallow-mine.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_paved_road__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/paved-road */ "./src/terrains/paved-road.ts");
/* harmony import */ var _terrains_open_world__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../terrains/open-world */ "./src/terrains/open-world.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _crafts_iron__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../crafts/iron */ "./src/crafts/iron.ts");
/* harmony import */ var _crafts_chromium__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../crafts/chromium */ "./src/crafts/chromium.ts");
/* harmony import */ var _crafts_limestone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../crafts/limestone */ "./src/crafts/limestone.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();












var ShallowMine =
/** @class */
function (_super) {
  __extends(ShallowMine, _super);

  function ShallowMine() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Shallow Mine";
    _this.price = 30000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_shallowMine.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 5
    })];
    _this.output = [_crafts_iron__WEBPACK_IMPORTED_MODULE_7__["default"], _crafts_chromium__WEBPACK_IMPORTED_MODULE_8__["default"], _crafts_limestone__WEBPACK_IMPORTED_MODULE_9__["default"]];
    _this.requirements = [_terrains_paved_road__WEBPACK_IMPORTED_MODULE_4__["default"], _terrains_open_world__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return ShallowMine;
}(_item__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShallowMine);

/***/ }),

/***/ "./src/buildings/sheep-pen.ts":
/*!************************************!*\
  !*** ./src/buildings/sheep-pen.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/wool */ "./src/crafts/wool.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var SheepPen =
/** @class */
function (_super) {
  __extends(SheepPen, _super);

  function SheepPen() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Sheep Pen";
    _this.price = 20000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_sheepPen.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 3
    })];
    _this.output = [_crafts_wool__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return SheepPen;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SheepPen);

/***/ }),

/***/ "./src/buildings/shrimp-farm.ts":
/*!**************************************!*\
  !*** ./src/buildings/shrimp-farm.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var ShrimpFarm =
/** @class */
function (_super) {
  __extends(ShrimpFarm, _super);

  function ShrimpFarm() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Shrimp Farm";
    _this.price = 45000;
    _this.isNFT = false;
    _this.buildRequirements = [//  createRequirement({ craft: Seaweed, quantity: 10 }),
    (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_water__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 20
    })];
    _this.output = [,];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return ShrimpFarm;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShrimpFarm);

/***/ }),

/***/ "./src/buildings/silo.ts":
/*!*******************************!*\
  !*** ./src/buildings/silo.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var Silo =
/** @class */
function (_super) {
  __extends(Silo, _super);

  function Silo() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Silo";
    _this.price = 10000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_silo.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Silo;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Silo);

/***/ }),

/***/ "./src/buildings/silver-panning-site.ts":
/*!**********************************************!*\
  !*** ./src/buildings/silver-panning-site.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var SilverPanningSite =
/** @class */
function (_super) {
  __extends(SilverPanningSite, _super);

  function SilverPanningSite() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Silver Panning Site";
    _this.price = 4000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_water__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 1
    })];
    _this.output = [//  SilverOre
    ];
    return _this;
  }

  return SilverPanningSite;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SilverPanningSite);

/***/ }),

/***/ "./src/buildings/steel-mill.ts":
/*!*************************************!*\
  !*** ./src/buildings/steel-mill.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_iron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/iron */ "./src/crafts/iron.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _crafts_steel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/steel */ "./src/crafts/steel.ts");
/* harmony import */ var _crafts_blue_steel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/blue-steel */ "./src/crafts/blue-steel.ts");
/* harmony import */ var _terrains_paved_road__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../terrains/paved-road */ "./src/terrains/paved-road.ts");
/* harmony import */ var _water_pump__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./water-pump */ "./src/buildings/water-pump.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();











var SteelMill =
/** @class */
function (_super) {
  __extends(SteelMill, _super);

  function SteelMill() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Steel Mill";
    _this.price = 1500000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_steelMill.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_iron__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 10
    })];
    _this.output = [_crafts_steel__WEBPACK_IMPORTED_MODULE_5__["default"], _crafts_blue_steel__WEBPACK_IMPORTED_MODULE_6__["default"] //RedSteel,
    ];
    _this.requirements = [_terrains_paved_road__WEBPACK_IMPORTED_MODULE_7__["default"], _water_pump__WEBPACK_IMPORTED_MODULE_8__["default"]];
    return _this;
  }

  return SteelMill;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SteelMill);

/***/ }),

/***/ "./src/buildings/storehouse.ts":
/*!*************************************!*\
  !*** ./src/buildings/storehouse.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var Storehouse =
/** @class */
function (_super) {
  __extends(Storehouse, _super);

  function Storehouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Silo";
    _this.price = 15000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_storehouse.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Storehouse;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storehouse);

/***/ }),

/***/ "./src/buildings/sushi-restaurant.ts":
/*!*******************************************!*\
  !*** ./src/buildings/sushi-restaurant.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_paved_road__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/paved-road */ "./src/terrains/paved-road.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var SushiRestaurant =
/** @class */
function (_super) {
  __extends(SushiRestaurant, _super);

  function SushiRestaurant() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Steel Mill";
    _this.price = 1500000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_steelMill.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    })];
    _this.output = [//   SalmonNigiri,
      //   EelNigiri,
      //   SushiBoat,
    ];
    _this.requirements = [_terrains_paved_road__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return SushiRestaurant;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SushiRestaurant);

/***/ }),

/***/ "./src/buildings/trough.ts":
/*!*********************************!*\
  !*** ./src/buildings/trough.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var Trough =
/** @class */
function (_super) {
  __extends(Trough, _super);

  function Trough() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Trough";
    _this.price = 5000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_trough.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 1
    })];
    return _this;
  }

  return Trough;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trough);

/***/ }),

/***/ "./src/buildings/warehouse.ts":
/*!************************************!*\
  !*** ./src/buildings/warehouse.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var Warehouse =
/** @class */
function (_super) {
  __extends(Warehouse, _super);

  function Warehouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Warehouse";
    _this.price = 15000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_warehouse.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 3
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Warehouse;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Warehouse);

/***/ }),

/***/ "./src/buildings/water-facility.ts":
/*!*****************************************!*\
  !*** ./src/buildings/water-facility.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/oak-wood */ "./src/crafts/oak-wood.ts");
/* harmony import */ var _crafts_water_drum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_ice_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/ice-block */ "./src/crafts/ice-block.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var WaterFacility =
/** @class */
function (_super) {
  __extends(WaterFacility, _super);

  function WaterFacility() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Water Facility";
    _this.price = 10000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_waterFacility.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    })];
    _this.output = [_crafts_water_drum__WEBPACK_IMPORTED_MODULE_4__["default"], _crafts_ice_block__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return WaterFacility;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WaterFacility);

/***/ }),

/***/ "./src/buildings/water-pump.ts":
/*!*************************************!*\
  !*** ./src/buildings/water-pump.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/oak-wood */ "./src/crafts/oak-wood.ts");
/* harmony import */ var _terrains_pond__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/pond */ "./src/terrains/pond.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var WaterPump =
/** @class */
function (_super) {
  __extends(WaterPump, _super);

  function WaterPump() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Water Pump";
    _this.price = 30000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_waterPump.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 3
    })];
    _this.requirements = [_terrains_pond__WEBPACK_IMPORTED_MODULE_4__["default"] // ocean, river
    ];
    return _this;
  }

  return WaterPump;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WaterPump);

/***/ }),

/***/ "./src/buildings/well.ts":
/*!*******************************!*\
  !*** ./src/buildings/well.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var Well =
/** @class */
function (_super) {
  __extends(Well, _super);

  function Well() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Well";
    _this.price = 1250;
    _this.isNFT = false;
    _this.icon = "buildings/icon_well.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 1
    })];
    _this.output = [_crafts_water__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Well;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Well);

/***/ }),

/***/ "./src/buildings/wind-mill.ts":
/*!************************************!*\
  !*** ./src/buildings/wind-mill.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var WindMill =
/** @class */
function (_super) {
  __extends(WindMill, _super);

  function WindMill() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wind Mill";
    _this.price = 7500;
    _this.isNFT = false;
    _this.icon = "buildings/icon_windmill.png";
    return _this;
  }

  return WindMill;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WindMill);

/***/ }),

/***/ "./src/buildings/wind-pump.ts":
/*!************************************!*\
  !*** ./src/buildings/wind-pump.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var WindPump =
/** @class */
function (_super) {
  __extends(WindPump, _super);

  function WindPump() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wind Pump";
    _this.price = 12500;
    _this.isNFT = false;
    _this.icon = "buildings/icon_windPump.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 3
    })];
    _this.output = [_crafts_water__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return WindPump;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WindPump);

/***/ }),

/***/ "./src/buildings/wind-turbine.ts":
/*!***************************************!*\
  !*** ./src/buildings/wind-turbine.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var WindTurbine =
/** @class */
function (_super) {
  __extends(WindTurbine, _super);

  function WindTurbine() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wind Turbine";
    _this.price = 2500;
    _this.isNFT = false;
    _this.icon = "buildings/icon_windTurbine.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 1
    })];
    _this.output = [_crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return WindTurbine;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WindTurbine);

/***/ }),

/***/ "./src/buildings/winery.ts":
/*!*********************************!*\
  !*** ./src/buildings/winery.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_pinot_noir__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/pinot-noir */ "./src/crafts/pinot-noir.ts");
/* harmony import */ var _crafts_cabernet_sauvignon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../crafts/cabernet-sauvignon */ "./src/crafts/cabernet-sauvignon.ts");
/* harmony import */ var _crafts_chardonnay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../crafts/chardonnay */ "./src/crafts/chardonnay.ts");
/* harmony import */ var _crafts_sangria__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../crafts/sangria */ "./src/crafts/sangria.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();












var Winery =
/** @class */
function (_super) {
  __extends(Winery, _super);

  function Winery() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Winery";
    _this.price = 1000000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_winery.png";
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    })];
    _this.output = [_crafts_pinot_noir__WEBPACK_IMPORTED_MODULE_6__["default"], _crafts_cabernet_sauvignon__WEBPACK_IMPORTED_MODULE_7__["default"], _crafts_chardonnay__WEBPACK_IMPORTED_MODULE_8__["default"], _crafts_sangria__WEBPACK_IMPORTED_MODULE_9__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return Winery;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Winery);

/***/ }),

/***/ "./src/buildings/wire-mill.ts":
/*!************************************!*\
  !*** ./src/buildings/wire-mill.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var WireMill =
/** @class */
function (_super) {
  __extends(WireMill, _super);

  function WireMill() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wire Mill";
    _this.price = 100000;
    _this.isNFT = false;
    _this.buildRequirements = [//   createRequirement({ craft: Cooper, quantity: 10 }),
    (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 5
    })];
    _this.output = [//   CopperWire,
      //   SilverWire,
    ];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return WireMill;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WireMill);

/***/ }),

/***/ "./src/buildings/wizards-workshop.ts":
/*!*******************************************!*\
  !*** ./src/buildings/wizards-workshop.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _crafts_mystic_matter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../crafts/mystic-matter */ "./src/crafts/mystic-matter.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var WizardsWorkshop =
/** @class */
function (_super) {
  __extends(WizardsWorkshop, _super);

  function WizardsWorkshop() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wizard's Workshop";
    _this.price = 1500000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 10
    })];
    _this.output = [_crafts_mystic_matter__WEBPACK_IMPORTED_MODULE_6__["default"] // Glue,
    ];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return WizardsWorkshop;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WizardsWorkshop);

/***/ }),

/***/ "./src/buildings/wood-shed.ts":
/*!************************************!*\
  !*** ./src/buildings/wood-shed.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var WoodShed =
/** @class */
function (_super) {
  __extends(WoodShed, _super);

  function WoodShed() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wood Shed";
    _this.price = 5000;
    _this.isNFT = false;
    _this.icon = "buildings/icon_woodShed.png";
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return WoodShed;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WoodShed);

/***/ }),

/***/ "./src/buildings/worm-farm.ts":
/*!************************************!*\
  !*** ./src/buildings/worm-farm.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var WormFarm =
/** @class */
function (_super) {
  __extends(WormFarm, _super);

  function WormFarm() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Worm Farm";
    _this.price = 35000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_water__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.output = [,];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return WormFarm;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WormFarm);

/***/ }),

/***/ "./src/craft-requirement.ts":
/*!**********************************!*\
  !*** ./src/craft-requirement.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRequirement": () => (/* binding */ createRequirement)
/* harmony export */ });
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function createRequirement(parameter) {
  return __assign({}, parameter);
}



/***/ }),

/***/ "./src/crafts/apple-pie.ts":
/*!*********************************!*\
  !*** ./src/crafts/apple-pie.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _butter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./butter */ "./src/crafts/butter.ts");
/* harmony import */ var _crops_apple_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crops/apple-tree */ "./src/crops/apple-tree.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
/* harmony import */ var _flour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flour */ "./src/crafts/flour.ts");
/* harmony import */ var _apple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apple */ "./src/crafts/apple.ts");
/* harmony import */ var _corn_starch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./corn-starch */ "./src/crafts/corn-starch.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();










var ApplePie =
/** @class */
function (_super) {
  __extends(ApplePie, _super);

  function ApplePie() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Apple Pie";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _flour__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _apple__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _butter__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _corn_starch__WEBPACK_IMPORTED_MODULE_7__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_crops_apple_tree__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return ApplePie;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApplePie);

/***/ }),

/***/ "./src/crafts/apple.ts":
/*!*****************************!*\
  !*** ./src/crafts/apple.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crops_apple_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crops/apple-tree */ "./src/crops/apple-tree.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Apple =
/** @class */
function (_super) {
  __extends(Apple, _super);

  function Apple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Apple";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 6,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_apple_tree__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Apple;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Apple);

/***/ }),

/***/ "./src/crafts/baguette.ts":
/*!********************************!*\
  !*** ./src/crafts/baguette.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _butter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./butter */ "./src/crafts/butter.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _dough__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dough */ "./src/crafts/dough.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _buildings_bakery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/bakery */ "./src/buildings/bakery.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Baguette =
/** @class */
function (_super) {
  __extends(Baguette, _super);

  function Baguette() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Baguette";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _dough__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _butter__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_bakery__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Baguette;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Baguette);

/***/ }),

/***/ "./src/crafts/batter.ts":
/*!******************************!*\
  !*** ./src/crafts/batter.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_cakery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/cakery */ "./src/buildings/cakery.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _flour__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flour */ "./src/crafts/flour.ts");
/* harmony import */ var _eggs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eggs */ "./src/crafts/eggs.ts");
/* harmony import */ var _butter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./butter */ "./src/crafts/butter.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Batter =
/** @class */
function (_super) {
  __extends(Batter, _super);

  function Batter() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Batter";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _flour__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _eggs__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _butter__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_cakery__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Batter;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Batter);

/***/ }),

/***/ "./src/crafts/bicycle.ts":
/*!*******************************!*\
  !*** ./src/crafts/bicycle.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _mystic_matter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mystic-matter */ "./src/crafts/mystic-matter.ts");
/* harmony import */ var _buildings_santas_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/santas-factory */ "./src/buildings/santas-factory.ts");
/* harmony import */ var _blue_steel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blue-steel */ "./src/crafts/blue-steel.ts");
/* harmony import */ var _lights__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lights */ "./src/crafts/lights.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Bicycle =
/** @class */
function (_super) {
  __extends(Bicycle, _super);

  function Bicycle() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Bicycle";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _blue_steel__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _mystic_matter__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _lights__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_santas_factory__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return Bicycle;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bicycle);

/***/ }),

/***/ "./src/crafts/blue-steel.ts":
/*!**********************************!*\
  !*** ./src/crafts/blue-steel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _steel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./steel */ "./src/crafts/steel.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _uniforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uniforms */ "./src/crafts/uniforms.ts");
/* harmony import */ var _buildings_steel_mill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/steel-mill */ "./src/buildings/steel-mill.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var BlueSteel =
/** @class */
function (_super) {
  __extends(BlueSteel, _super);

  function BlueSteel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Blue Steel";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _steel__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _uniforms__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_steel_mill__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return BlueSteel;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlueSteel);

/***/ }),

/***/ "./src/crafts/boom-canes.ts":
/*!**********************************!*\
  !*** ./src/crafts/boom-canes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _buildings_north_pole_creation_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/north-pole-creation-lab */ "./src/buildings/north-pole-creation-lab.ts");
/* harmony import */ var _magic_powder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./magic-powder */ "./src/crafts/magic-powder.ts");
/* harmony import */ var _mystic_matter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mystic-matter */ "./src/crafts/mystic-matter.ts");
/* harmony import */ var _candy_canes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./candy-canes */ "./src/crafts/candy-canes.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var BoomCanes =
/** @class */
function (_super) {
  __extends(BoomCanes, _super);

  function BoomCanes() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Boom Canes";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _magic_powder__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _mystic_matter__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _candy_canes__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_north_pole_creation_lab__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return BoomCanes;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoomCanes);

/***/ }),

/***/ "./src/crafts/bracelet.ts":
/*!********************************!*\
  !*** ./src/crafts/bracelet.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _copper_jump_ring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copper-jump-ring */ "./src/crafts/copper-jump-ring.ts");
/* harmony import */ var _silver_jump_ring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./silver-jump-ring */ "./src/crafts/silver-jump-ring.ts");
/* harmony import */ var _lobster_clasp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lobster-clasp */ "./src/crafts/lobster-clasp.ts");
/* harmony import */ var _buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/jewelry-crafting-table */ "./src/buildings/jewelry-crafting-table.ts");
/* harmony import */ var _buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/jewelry-store */ "./src/buildings/jewelry-store.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Bracelet =
/** @class */
function (_super) {
  __extends(Bracelet, _super);

  function Bracelet() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Bracelet";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _copper_jump_ring__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 6
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _silver_jump_ring__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _lobster_clasp__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return Bracelet;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bracelet);

/***/ }),

/***/ "./src/crafts/brine.ts":
/*!*****************************!*\
  !*** ./src/crafts/brine.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crops_salt_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crops/salt-field */ "./src/crops/salt-field.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Brine =
/** @class */
function (_super) {
  __extends(Brine, _super);

  function Brine() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Brine";
    _this.generatedFrom = [_crops_salt_field__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 3,
      drawInline: true
    })];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Brine;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brine);

/***/ }),

/***/ "./src/crafts/butter.ts":
/*!******************************!*\
  !*** ./src/crafts/butter.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _milk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./milk */ "./src/crafts/milk.ts");
/* harmony import */ var _salt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salt */ "./src/crafts/salt.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _buildings_bakery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/bakery */ "./src/buildings/bakery.ts");
/* harmony import */ var _sugar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sugar */ "./src/crafts/sugar.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Butter =
/** @class */
function (_super) {
  __extends(Butter, _super);

  function Butter() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Butter";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _milk__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _salt__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sugar__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_bakery__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Butter;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Butter);

/***/ }),

/***/ "./src/crafts/cabernet-grapes.ts":
/*!***************************************!*\
  !*** ./src/crafts/cabernet-grapes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
/* harmony import */ var _crops_cabernet_vines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crops/cabernet-vines */ "./src/crops/cabernet-vines.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var CabernetGrapes =
/** @class */
function (_super) {
  __extends(CabernetGrapes, _super);

  function CabernetGrapes() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Cabernet Grapes";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_crops_cabernet_vines__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return CabernetGrapes;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CabernetGrapes);

/***/ }),

/***/ "./src/crafts/cabernet-sauvignon.ts":
/*!******************************************!*\
  !*** ./src/crafts/cabernet-sauvignon.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _cabernet_grapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cabernet-grapes */ "./src/crafts/cabernet-grapes.ts");
/* harmony import */ var _wine_bottle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wine-bottle */ "./src/crafts/wine-bottle.ts");
/* harmony import */ var _oak_barrel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oak-barrel */ "./src/crafts/oak-barrel.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _buildings_winery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/winery */ "./src/buildings/winery.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var CabernetSauvignon =
/** @class */
function (_super) {
  __extends(CabernetSauvignon, _super);

  function CabernetSauvignon() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Cabernet Sauvignon";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cabernet_grapes__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wine_bottle__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _oak_barrel__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_winery__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return CabernetSauvignon;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CabernetSauvignon);

/***/ }),

/***/ "./src/crafts/cake.ts":
/*!****************************!*\
  !*** ./src/crafts/cake.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _buildings_cakery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/cakery */ "./src/buildings/cakery.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _batter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./batter */ "./src/crafts/batter.ts");
/* harmony import */ var _sugar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sugar */ "./src/crafts/sugar.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Cake =
/** @class */
function (_super) {
  __extends(Cake, _super);

  function Cake() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Cake";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _batter__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sugar__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 6
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    })];
    _this.generatedFrom = [_buildings_cakery__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Cake;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cake);

/***/ }),

/***/ "./src/crafts/candy-canes.ts":
/*!***********************************!*\
  !*** ./src/crafts/candy-canes.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _peppermint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./peppermint */ "./src/crafts/peppermint.ts");
/* harmony import */ var _sugar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sugar */ "./src/crafts/sugar.ts");
/* harmony import */ var _buildings_candy_shop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/candy-shop */ "./src/buildings/candy-shop.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var CandyCanes =
/** @class */
function (_super) {
  __extends(CandyCanes, _super);

  function CandyCanes() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Candy Canes";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _peppermint__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sugar__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5
    })];
    _this.generatedFrom = [_buildings_candy_shop__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return CandyCanes;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CandyCanes);

/***/ }),

/***/ "./src/crafts/candy-corn.ts":
/*!**********************************!*\
  !*** ./src/crafts/candy-corn.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _corn_starch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corn-starch */ "./src/crafts/corn-starch.ts");
/* harmony import */ var _sugar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sugar */ "./src/crafts/sugar.ts");
/* harmony import */ var _milk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./milk */ "./src/crafts/milk.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _buildings_candy_shop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../buildings/candy-shop */ "./src/buildings/candy-shop.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();










var CandyCorn =
/** @class */
function (_super) {
  __extends(CandyCorn, _super);

  function CandyCorn() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Candy Corn";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _corn_starch__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sugar__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _milk__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_candy_shop__WEBPACK_IMPORTED_MODULE_7__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return CandyCorn;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CandyCorn);

/***/ }),

/***/ "./src/crafts/ceramic-bowl.ts":
/*!************************************!*\
  !*** ./src/crafts/ceramic-bowl.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_pottery_shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/pottery-shop */ "./src/buildings/pottery-shop.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _clay_lump__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clay-lump */ "./src/crafts/clay-lump.ts");
/* harmony import */ var _water_drum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var CeramicBowl =
/** @class */
function (_super) {
  __extends(CeramicBowl, _super);

  function CeramicBowl() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Ceramic Bowl";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _clay_lump__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water_drum__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_pottery_shop__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return CeramicBowl;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CeramicBowl);

/***/ }),

/***/ "./src/crafts/chandelier-earrings.ts":
/*!*******************************************!*\
  !*** ./src/crafts/chandelier-earrings.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/jewelry-crafting-table */ "./src/buildings/jewelry-crafting-table.ts");
/* harmony import */ var _buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/jewelry-store */ "./src/buildings/jewelry-store.ts");
/* harmony import */ var _copper_jump_ring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copper-jump-ring */ "./src/crafts/copper-jump-ring.ts");
/* harmony import */ var _silver_jump_ring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./silver-jump-ring */ "./src/crafts/silver-jump-ring.ts");
/* harmony import */ var _silver_wire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./silver-wire */ "./src/crafts/silver-wire.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var ChandelierEarrings =
/** @class */
function (_super) {
  __extends(ChandelierEarrings, _super);

  function ChandelierEarrings() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Chandelier Earrings";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _copper_jump_ring__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 4
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _silver_jump_ring__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _silver_wire__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return ChandelierEarrings;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChandelierEarrings);

/***/ }),

/***/ "./src/crafts/chardonnay-grapes.ts":
/*!*****************************************!*\
  !*** ./src/crafts/chardonnay-grapes.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crops_chardonnay_vines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crops/chardonnay-vines */ "./src/crops/chardonnay-vines.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var ChardonnayGrapes =
/** @class */
function (_super) {
  __extends(ChardonnayGrapes, _super);

  function ChardonnayGrapes() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Chardonnay Grapes";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_crops_chardonnay_vines__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return ChardonnayGrapes;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChardonnayGrapes);

/***/ }),

/***/ "./src/crafts/chardonnay.ts":
/*!**********************************!*\
  !*** ./src/crafts/chardonnay.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _chardonnay_grapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chardonnay-grapes */ "./src/crafts/chardonnay-grapes.ts");
/* harmony import */ var _wine_bottle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wine-bottle */ "./src/crafts/wine-bottle.ts");
/* harmony import */ var _oak_barrel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oak-barrel */ "./src/crafts/oak-barrel.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _buildings_winery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/winery */ "./src/buildings/winery.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Chardonnay =
/** @class */
function (_super) {
  __extends(Chardonnay, _super);

  function Chardonnay() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Chardonnay";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _chardonnay_grapes__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 6
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wine_bottle__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _oak_barrel__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_winery__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return Chardonnay;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chardonnay);

/***/ }),

/***/ "./src/crafts/cheese.ts":
/*!******************************!*\
  !*** ./src/crafts/cheese.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _milk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./milk */ "./src/crafts/milk.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _buildings_mixing_tent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/mixing-tent */ "./src/buildings/mixing-tent.ts");
/* harmony import */ var _rice_vinegar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rice-vinegar */ "./src/crafts/rice-vinegar.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var Cheese =
/** @class */
function (_super) {
  __extends(Cheese, _super);

  function Cheese() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Cheese";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _milk__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _rice_vinegar__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_mixing_tent__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Cheese;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cheese);

/***/ }),

/***/ "./src/crafts/chocolate-bar.ts":
/*!*************************************!*\
  !*** ./src/crafts/chocolate-bar.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _cocoa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cocoa */ "./src/crafts/cocoa.ts");
/* harmony import */ var _sugar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sugar */ "./src/crafts/sugar.ts");
/* harmony import */ var _milk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./milk */ "./src/crafts/milk.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _buildings_chocolate_shop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/chocolate-shop */ "./src/buildings/chocolate-shop.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var ChocolateBar =
/** @class */
function (_super) {
  __extends(ChocolateBar, _super);

  function ChocolateBar() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Chocolate Bar";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cocoa__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sugar__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _milk__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_chocolate_shop__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return ChocolateBar;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChocolateBar);

/***/ }),

/***/ "./src/crafts/chocolate-covered-strawberries.ts":
/*!******************************************************!*\
  !*** ./src/crafts/chocolate-covered-strawberries.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _strawberries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./strawberries */ "./src/crafts/strawberries.ts");
/* harmony import */ var _chocolate_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chocolate-bar */ "./src/crafts/chocolate-bar.ts");
/* harmony import */ var _buildings_candy_shop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/candy-shop */ "./src/buildings/candy-shop.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var ChocolateCoveredStrawberries =
/** @class */
function (_super) {
  __extends(ChocolateCoveredStrawberries, _super);

  function ChocolateCoveredStrawberries() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Chocolate Covered Strawberries";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _strawberries__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 6
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _chocolate_bar__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_candy_shop__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return ChocolateCoveredStrawberries;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChocolateCoveredStrawberries);

/***/ }),

/***/ "./src/crafts/chromium.ts":
/*!********************************!*\
  !*** ./src/crafts/chromium.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _water_drum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _buildings_iron_mine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/iron-mine */ "./src/buildings/iron-mine.ts");
/* harmony import */ var _buildings_shallow_mine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/shallow-mine */ "./src/buildings/shallow-mine.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();










var Chromium =
/** @class */
function (_super) {
  __extends(Chromium, _super);

  function Chromium() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Chromium";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water_drum__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_iron_mine__WEBPACK_IMPORTED_MODULE_5__["default"], _buildings_shallow_mine__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_7__["default"]];
    return _this;
  }

  return Chromium;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chromium);

/***/ }),

/***/ "./src/crafts/clay-lump.ts":
/*!*********************************!*\
  !*** ./src/crafts/clay-lump.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _terrains_clay_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../terrains/clay-field */ "./src/terrains/clay-field.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var ClayLump =
/** @class */
function (_super) {
  __extends(ClayLump, _super);

  function ClayLump() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Clay Lump";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 3,
      drawInline: true
    })];
    _this.generatedFrom = [_terrains_clay_field__WEBPACK_IMPORTED_MODULE_1__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return ClayLump;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClayLump);

/***/ }),

/***/ "./src/crafts/cocoa.ts":
/*!*****************************!*\
  !*** ./src/crafts/cocoa.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _crops_cocoa_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crops/cocoa-tree */ "./src/crops/cocoa-tree.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Cocoa =
/** @class */
function (_super) {
  __extends(Cocoa, _super);

  function Cocoa() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Cocoa";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_cocoa_tree__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Cocoa;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cocoa);

/***/ }),

/***/ "./src/crafts/cold.ts":
/*!****************************!*\
  !*** ./src/crafts/cold.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var Cold =
/** @class */
function (_super) {
  __extends(Cold, _super);

  function Cold() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Cold";
    _this.generatedFrom = [];
    return _this;
  }

  return Cold;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cold);

/***/ }),

/***/ "./src/crafts/copper-jump-ring.ts":
/*!****************************************!*\
  !*** ./src/crafts/copper-jump-ring.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/jewelry-crafting-table */ "./src/buildings/jewelry-crafting-table.ts");
/* harmony import */ var _buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/jewelry-store */ "./src/buildings/jewelry-store.ts");
/* harmony import */ var _copper_wire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copper-wire */ "./src/crafts/copper-wire.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var CopperJumpRing =
/** @class */
function (_super) {
  __extends(CopperJumpRing, _super);

  function CopperJumpRing() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Copper Jump Ring";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _copper_wire__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return CopperJumpRing;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopperJumpRing);

/***/ }),

/***/ "./src/crafts/copper-ore.ts":
/*!**********************************!*\
  !*** ./src/crafts/copper-ore.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_copper_panning_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/copper-panning-site */ "./src/buildings/copper-panning-site.ts");
/* harmony import */ var _buildings_ore_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/ore-storage */ "./src/buildings/ore-storage.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var CopperOre =
/** @class */
function (_super) {
  __extends(CopperOre, _super);

  function CopperOre() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Copper Ore";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1,
      drawInline: true
    })];
    _this.generatedFrom = [_buildings_copper_panning_site__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_ore_storage__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return CopperOre;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopperOre);

/***/ }),

/***/ "./src/crafts/copper-wire.ts":
/*!***********************************!*\
  !*** ./src/crafts/copper-wire.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _buildings_wire_mill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/wire-mill */ "./src/buildings/wire-mill.ts");
/* harmony import */ var _copper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./copper */ "./src/crafts/copper.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var CopperWire =
/** @class */
function (_super) {
  __extends(CopperWire, _super);

  function CopperWire() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Copper Wire";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _copper__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_wire_mill__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return CopperWire;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopperWire);

/***/ }),

/***/ "./src/crafts/copper.ts":
/*!******************************!*\
  !*** ./src/crafts/copper.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _copper_ore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copper-ore */ "./src/crafts/copper-ore.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _buildings_forge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/forge */ "./src/buildings/forge.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var Copper =
/** @class */
function (_super) {
  __extends(Copper, _super);

  function Copper() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Copper";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _copper_ore__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_forge__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return Copper;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copper);

/***/ }),

/***/ "./src/crafts/corn-starch.ts":
/*!***********************************!*\
  !*** ./src/crafts/corn-starch.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_wind_mill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/wind-mill */ "./src/buildings/wind-mill.ts");
/* harmony import */ var _corn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corn */ "./src/crafts/corn.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var CornStarch =
/** @class */
function (_super) {
  __extends(CornStarch, _super);

  function CornStarch() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Corn Starch";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _corn__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 4
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_wind_mill__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return CornStarch;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CornStarch);

/***/ }),

/***/ "./src/crafts/corn.ts":
/*!****************************!*\
  !*** ./src/crafts/corn.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
/* harmony import */ var _crops_corn_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crops/corn-field */ "./src/crops/corn-field.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Corn =
/** @class */
function (_super) {
  __extends(Corn, _super);

  function Corn() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Corn";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_corn_field__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Corn;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Corn);

/***/ }),

/***/ "./src/crafts/cotton-yarn.ts":
/*!***********************************!*\
  !*** ./src/crafts/cotton-yarn.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _cotton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cotton */ "./src/crafts/cotton.ts");
/* harmony import */ var _lumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _buildings_fabric_plant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/fabric-plant */ "./src/buildings/fabric-plant.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var CottonYarn =
/** @class */
function (_super) {
  __extends(CottonYarn, _super);

  function CottonYarn() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Cotton Yarn";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cotton__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _lumber__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_fabric_plant__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return CottonYarn;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CottonYarn);

/***/ }),

/***/ "./src/crafts/cotton.ts":
/*!******************************!*\
  !*** ./src/crafts/cotton.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crops_cotton_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crops/cotton-field */ "./src/crops/cotton-field.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Cotton =
/** @class */
function (_super) {
  __extends(Cotton, _super);

  function Cotton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Cotton";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 4,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_cotton_field__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Cotton;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cotton);

/***/ }),

/***/ "./src/crafts/craft.ts":
/*!*****************************!*\
  !*** ./src/crafts/craft.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var Craft =
/** @class */
function (_super) {
  __extends(Craft, _super);

  function Craft() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return Craft;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Craft);

/***/ }),

/***/ "./src/crafts/crude-oil.ts":
/*!*********************************!*\
  !*** ./src/crafts/crude-oil.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _buildings_oil_pump__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buildings/oil-pump */ "./src/buildings/oil-pump.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var CrudeOil =
/** @class */
function (_super) {
  __extends(CrudeOil, _super);

  function CrudeOil() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Crude Oil";
    _this.generatedFrom = [_buildings_oil_pump__WEBPACK_IMPORTED_MODULE_1__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return CrudeOil;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CrudeOil);

/***/ }),

/***/ "./src/crafts/decorated-cake.ts":
/*!**************************************!*\
  !*** ./src/crafts/decorated-cake.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _cake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cake */ "./src/crafts/cake.ts");
/* harmony import */ var _chocolate_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chocolate-bar */ "./src/crafts/chocolate-bar.ts");
/* harmony import */ var _candy_canes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./candy-canes */ "./src/crafts/candy-canes.ts");
/* harmony import */ var _buildings_chocolate_shop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/chocolate-shop */ "./src/buildings/chocolate-shop.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var DecoratedCake =
/** @class */
function (_super) {
  __extends(DecoratedCake, _super);

  function DecoratedCake() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Decorated Cake";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cake__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _chocolate_bar__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _candy_canes__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_chocolate_shop__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return DecoratedCake;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DecoratedCake);

/***/ }),

/***/ "./src/crafts/dough.ts":
/*!*****************************!*\
  !*** ./src/crafts/dough.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _flour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flour */ "./src/crafts/flour.ts");
/* harmony import */ var _eggs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eggs */ "./src/crafts/eggs.ts");
/* harmony import */ var _butter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./butter */ "./src/crafts/butter.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _buildings_bakery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/bakery */ "./src/buildings/bakery.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Dough =
/** @class */
function (_super) {
  __extends(Dough, _super);

  function Dough() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Dough";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _flour__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _eggs__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _butter__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_bakery__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return Dough;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dough);

/***/ }),

/***/ "./src/crafts/eel-nigiri.ts":
/*!**********************************!*\
  !*** ./src/crafts/eel-nigiri.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/seafood-warehouse */ "./src/buildings/seafood-warehouse.ts");
/* harmony import */ var _buildings_sushi_restaurant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/sushi-restaurant */ "./src/buildings/sushi-restaurant.ts");
/* harmony import */ var _eel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eel */ "./src/crafts/eel.ts");
/* harmony import */ var _white_rice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./white-rice */ "./src/crafts/white-rice.ts");
/* harmony import */ var _wasabi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wasabi */ "./src/crafts/wasabi.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var EelNigiri =
/** @class */
function (_super) {
  __extends(EelNigiri, _super);

  function EelNigiri() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Eel Nigiri";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _white_rice__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _eel__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wasabi__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_sushi_restaurant__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return EelNigiri;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EelNigiri);

/***/ }),

/***/ "./src/crafts/eel.ts":
/*!***************************!*\
  !*** ./src/crafts/eel.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/seafood-warehouse */ "./src/buildings/seafood-warehouse.ts");
/* harmony import */ var _buildings_fish_farm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/fish-farm */ "./src/buildings/fish-farm.ts");
/* harmony import */ var _food_mix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food-mix */ "./src/crafts/food-mix.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Eel =
/** @class */
function (_super) {
  __extends(Eel, _super);

  function Eel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Eel";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _food_mix__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_fish_farm__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return Eel;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Eel);

/***/ }),

/***/ "./src/crafts/eggs.ts":
/*!****************************!*\
  !*** ./src/crafts/eggs.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed */ "./src/crafts/feed.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _buildings_chicken_coop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/chicken-coop */ "./src/buildings/chicken-coop.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Eggs =
/** @class */
function (_super) {
  __extends(Eggs, _super);

  function Eggs() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Eggs";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _feed__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_chicken_coop__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return Eggs;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Eggs);

/***/ }),

/***/ "./src/crafts/enchanted-object.ts":
/*!****************************************!*\
  !*** ./src/crafts/enchanted-object.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/seafood-warehouse */ "./src/buildings/seafood-warehouse.ts");
/* harmony import */ var _buildings_master_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/master-wizard */ "./src/buildings/master-wizard.ts");
/* harmony import */ var _peppermint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./peppermint */ "./src/crafts/peppermint.ts");
/* harmony import */ var _mystic_matter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mystic-matter */ "./src/crafts/mystic-matter.ts");
/* harmony import */ var _molten_glass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./molten-glass */ "./src/crafts/molten-glass.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var EnchantedObject =
/** @class */
function (_super) {
  __extends(EnchantedObject, _super);

  function EnchantedObject() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Enchanted Object";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _mystic_matter__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _peppermint__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _molten_glass__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_master_wizard__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return EnchantedObject;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnchantedObject);

/***/ }),

/***/ "./src/crafts/energy.ts":
/*!******************************!*\
  !*** ./src/crafts/energy.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crude_oil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crude-oil */ "./src/crafts/crude-oil.ts");
/* harmony import */ var _water_drum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _buildings_wind_turbine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/wind-turbine */ "./src/buildings/wind-turbine.ts");
/* harmony import */ var _buildings_nuclear_power__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/nuclear-power */ "./src/buildings/nuclear-power.ts");
/* harmony import */ var _buildings_power_plant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/power-plant */ "./src/buildings/power-plant.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();










var Energy =
/** @class */
function (_super) {
  __extends(Energy, _super);

  function Energy() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Energy";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crude_oil__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2,
      building: _buildings_power_plant__WEBPACK_IMPORTED_MODULE_6__["default"],
      required: false
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water_drum__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1,
      building: _buildings_power_plant__WEBPACK_IMPORTED_MODULE_6__["default"],
      required: false
    })];
    _this.generatedFrom = [_buildings_power_plant__WEBPACK_IMPORTED_MODULE_6__["default"], _buildings_wind_turbine__WEBPACK_IMPORTED_MODULE_4__["default"], _buildings_nuclear_power__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_7__["default"]];
    return _this;
  }

  return Energy;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Energy);

/***/ }),

/***/ "./src/crafts/fabric-box.ts":
/*!**********************************!*\
  !*** ./src/crafts/fabric-box.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _wooden_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wooden-box */ "./src/crafts/wooden-box.ts");
/* harmony import */ var _uniforms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uniforms */ "./src/crafts/uniforms.ts");
/* harmony import */ var _wax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wax */ "./src/crafts/wax.ts");
/* harmony import */ var _buildings_fabric_plant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/fabric-plant */ "./src/buildings/fabric-plant.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var FabricBox =
/** @class */
function (_super) {
  __extends(FabricBox, _super);

  function FabricBox() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Fabric Box";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wooden_box__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _uniforms__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wax__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_fabric_plant__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return FabricBox;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FabricBox);

/***/ }),

/***/ "./src/crafts/fancy-cake.ts":
/*!**********************************!*\
  !*** ./src/crafts/fancy-cake.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _cake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cake */ "./src/crafts/cake.ts");
/* harmony import */ var _chocolate_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chocolate-bar */ "./src/crafts/chocolate-bar.ts");
/* harmony import */ var _strawberries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./strawberries */ "./src/crafts/strawberries.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _buildings_chocolate_shop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/chocolate-shop */ "./src/buildings/chocolate-shop.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var FancyCake =
/** @class */
function (_super) {
  __extends(FancyCake, _super);

  function FancyCake() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Fancy Cake";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cake__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _chocolate_bar__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _strawberries__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_chocolate_shop__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return FancyCake;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FancyCake);

/***/ }),

/***/ "./src/crafts/feed.ts":
/*!****************************!*\
  !*** ./src/crafts/feed.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _terrains_meadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../terrains/meadow */ "./src/terrains/meadow.ts");
/* harmony import */ var _buildings_trough__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/trough */ "./src/buildings/trough.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _wheat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wheat */ "./src/crafts/wheat.ts");
/* harmony import */ var _buildings_feed_mill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/feed-mill */ "./src/buildings/feed-mill.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var Feed =
/** @class */
function (_super) {
  __extends(Feed, _super);

  function Feed() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Feed";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_3__.createRequirement)({
      craft: _wheat__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2,
      building: _buildings_feed_mill__WEBPACK_IMPORTED_MODULE_5__["default"],
      required: false
    })];
    _this.generatedFrom = [_terrains_meadow__WEBPACK_IMPORTED_MODULE_1__["default"], _buildings_feed_mill__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_trough__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return Feed;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feed);

/***/ }),

/***/ "./src/crafts/fish-chum.ts":
/*!*********************************!*\
  !*** ./src/crafts/fish-chum.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/seafood-warehouse */ "./src/buildings/seafood-warehouse.ts");
/* harmony import */ var _buildings_mixing_tent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/mixing-tent */ "./src/buildings/mixing-tent.ts");
/* harmony import */ var _seaweed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seaweed */ "./src/crafts/seaweed.ts");
/* harmony import */ var _shrimp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shrimp */ "./src/crafts/shrimp.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var FishChum =
/** @class */
function (_super) {
  __extends(FishChum, _super);

  function FishChum() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Fish Chum";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _seaweed__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _shrimp__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_mixing_tent__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return FishChum;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FishChum);

/***/ }),

/***/ "./src/crafts/flour.ts":
/*!*****************************!*\
  !*** ./src/crafts/flour.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _wheat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wheat */ "./src/crafts/wheat.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _buildings_wind_mill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/wind-mill */ "./src/buildings/wind-mill.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var Flour =
/** @class */
function (_super) {
  __extends(Flour, _super);

  function Flour() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Flour";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wheat__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_wind_mill__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return Flour;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flour);

/***/ }),

/***/ "./src/crafts/food-mix.ts":
/*!********************************!*\
  !*** ./src/crafts/food-mix.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_mixing_tent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/mixing-tent */ "./src/buildings/mixing-tent.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _roe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roe */ "./src/crafts/roe.ts");
/* harmony import */ var _worms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worms */ "./src/crafts/worms.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var FoodMix =
/** @class */
function (_super) {
  __extends(FoodMix, _super);

  function FoodMix() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Food Mix";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _roe__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _worms__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_mixing_tent__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return FoodMix;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FoodMix);

/***/ }),

/***/ "./src/crafts/food-parcel.ts":
/*!***********************************!*\
  !*** ./src/crafts/food-parcel.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _baguette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baguette */ "./src/crafts/baguette.ts");
/* harmony import */ var _jam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jam */ "./src/crafts/jam.ts");
/* harmony import */ var _honey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./honey */ "./src/crafts/honey.ts");
/* harmony import */ var _buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/boxing-facility */ "./src/buildings/boxing-facility.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var FoodParcel =
/** @class */
function (_super) {
  __extends(FoodParcel, _super);

  function FoodParcel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Food Parcel";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _baguette__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _jam__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _honey__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return FoodParcel;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FoodParcel);

/***/ }),

/***/ "./src/crafts/four-cheese-pizza.ts":
/*!*****************************************!*\
  !*** ./src/crafts/four-cheese-pizza.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _cheese__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cheese */ "./src/crafts/cheese.ts");
/* harmony import */ var _buildings_italian_restaurant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/italian-restaurant */ "./src/buildings/italian-restaurant.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _pizza_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pizza-base */ "./src/crafts/pizza-base.ts");
/* harmony import */ var _tomatoes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tomatoes */ "./src/crafts/tomatoes.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var FourCheesePizza =
/** @class */
function (_super) {
  __extends(FourCheesePizza, _super);

  function FourCheesePizza() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Four Cheese Pizza";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _pizza_base__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cheese__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _tomatoes__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 5
    })];
    _this.generatedFrom = [_buildings_italian_restaurant__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return FourCheesePizza;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FourCheesePizza);

/***/ }),

/***/ "./src/crafts/gasoline.ts":
/*!********************************!*\
  !*** ./src/crafts/gasoline.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _petroleum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./petroleum */ "./src/crafts/petroleum.ts");
/* harmony import */ var _water_drum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _buildings_refinery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/refinery */ "./src/buildings/refinery.ts");
/* harmony import */ var _buildings_fuel_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/fuel-storage */ "./src/buildings/fuel-storage.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Gasoline =
/** @class */
function (_super) {
  __extends(Gasoline, _super);

  function Gasoline() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Gasoline";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _petroleum__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water_drum__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 6
    })];
    _this.generatedFrom = [_buildings_refinery__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_fuel_storage__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return Gasoline;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gasoline);

/***/ }),

/***/ "./src/crafts/gift-parcel.ts":
/*!***********************************!*\
  !*** ./src/crafts/gift-parcel.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _decorated_cake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorated-cake */ "./src/crafts/decorated-cake.ts");
/* harmony import */ var _sangria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sangria */ "./src/crafts/sangria.ts");
/* harmony import */ var _pumpkin_pie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pumpkin-pie */ "./src/crafts/pumpkin-pie.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/boxing-facility */ "./src/buildings/boxing-facility.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var GiftParcel =
/** @class */
function (_super) {
  __extends(GiftParcel, _super);

  function GiftParcel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Gift Parcel";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _decorated_cake__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sangria__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _pumpkin_pie__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return GiftParcel;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GiftParcel);

/***/ }),

/***/ "./src/crafts/glue.ts":
/*!****************************!*\
  !*** ./src/crafts/glue.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _honey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./honey */ "./src/crafts/honey.ts");
/* harmony import */ var _buildings_wizards_workshop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/wizards-workshop */ "./src/buildings/wizards-workshop.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _honeycomb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./honeycomb */ "./src/crafts/honeycomb.ts");
/* harmony import */ var _terrains_clay_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../terrains/clay-field */ "./src/terrains/clay-field.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Glue =
/** @class */
function (_super) {
  __extends(Glue, _super);

  function Glue() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Glue";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _honeycomb__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _honey__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _terrains_clay_field__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_wizards_workshop__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Glue;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Glue);

/***/ }),

/***/ "./src/crafts/gold-jump-ring.ts":
/*!**************************************!*\
  !*** ./src/crafts/gold-jump-ring.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _buildings_forge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/forge */ "./src/buildings/forge.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _gold_ore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gold-ore */ "./src/crafts/gold-ore.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var GoldJumpRing =
/** @class */
function (_super) {
  __extends(GoldJumpRing, _super);

  function GoldJumpRing() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Gold Jump Ring";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _gold_ore__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_forge__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return GoldJumpRing;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoldJumpRing);

/***/ }),

/***/ "./src/crafts/gold-ore.ts":
/*!********************************!*\
  !*** ./src/crafts/gold-ore.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _buildings_gold_panning_site__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/gold-panning-site */ "./src/buildings/gold-panning-site.ts");
/* harmony import */ var _buildings_ore_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/ore-storage */ "./src/buildings/ore-storage.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var GoldOre =
/** @class */
function (_super) {
  __extends(GoldOre, _super);

  function GoldOre() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Gold Ore";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1,
      drawInline: true
    })];
    _this.generatedFrom = [_buildings_gold_panning_site__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_ore_storage__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return GoldOre;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoldOre);

/***/ }),

/***/ "./src/crafts/gold-plated-heart-pendant.ts":
/*!*************************************************!*\
  !*** ./src/crafts/gold-plated-heart-pendant.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/jewelry-store */ "./src/buildings/jewelry-store.ts");
/* harmony import */ var _buildings_foundry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/foundry */ "./src/buildings/foundry.ts");
/* harmony import */ var _heart_shaped_print__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heart-shaped-print */ "./src/crafts/heart-shaped-print.ts");
/* harmony import */ var _gold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gold */ "./src/crafts/gold.ts");
/* harmony import */ var _copper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./copper */ "./src/crafts/copper.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var GoldPlatedHeartPendant =
/** @class */
function (_super) {
  __extends(GoldPlatedHeartPendant, _super);

  function GoldPlatedHeartPendant() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Gold-Plated Heart Pendant";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _heart_shaped_print__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _copper__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _gold__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_foundry__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return GoldPlatedHeartPendant;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoldPlatedHeartPendant);

/***/ }),

/***/ "./src/crafts/gold.ts":
/*!****************************!*\
  !*** ./src/crafts/gold.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _buildings_forge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/forge */ "./src/buildings/forge.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _gold_ore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gold-ore */ "./src/crafts/gold-ore.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var Gold =
/** @class */
function (_super) {
  __extends(Gold, _super);

  function Gold() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Gold";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _gold_ore__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_forge__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return Gold;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gold);

/***/ }),

/***/ "./src/crafts/golden-heart-necklace.ts":
/*!*********************************************!*\
  !*** ./src/crafts/golden-heart-necklace.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/jewelry-crafting-table */ "./src/buildings/jewelry-crafting-table.ts");
/* harmony import */ var _buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/jewelry-store */ "./src/buildings/jewelry-store.ts");
/* harmony import */ var _gold_plated_heart_pendant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gold-plated-heart-pendant */ "./src/crafts/gold-plated-heart-pendant.ts");
/* harmony import */ var _lobster_clasp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lobster-clasp */ "./src/crafts/lobster-clasp.ts");
/* harmony import */ var _silver_jump_ring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./silver-jump-ring */ "./src/crafts/silver-jump-ring.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var GoldenHeartNecklace =
/** @class */
function (_super) {
  __extends(GoldenHeartNecklace, _super);

  function GoldenHeartNecklace() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Golden Heart Necklace";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _gold_plated_heart_pendant__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _lobster_clasp__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _silver_jump_ring__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 5
    })];
    _this.generatedFrom = [_buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return GoldenHeartNecklace;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoldenHeartNecklace);

/***/ }),

/***/ "./src/crafts/heart-shaped-print.ts":
/*!******************************************!*\
  !*** ./src/crafts/heart-shaped-print.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _strawberries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strawberries */ "./src/crafts/strawberries.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _clay_lump__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clay-lump */ "./src/crafts/clay-lump.ts");
/* harmony import */ var _buildings_pottery_shop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/pottery-shop */ "./src/buildings/pottery-shop.ts");
/* harmony import */ var _buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/jewelry-store */ "./src/buildings/jewelry-store.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var HeartShapedPrint =
/** @class */
function (_super) {
  __extends(HeartShapedPrint, _super);

  function HeartShapedPrint() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "HeartShapedPrint";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _clay_lump__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _strawberries__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_pottery_shop__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return HeartShapedPrint;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeartShapedPrint);

/***/ }),

/***/ "./src/crafts/honey.ts":
/*!*****************************!*\
  !*** ./src/crafts/honey.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _nectar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nectar */ "./src/crafts/nectar.ts");
/* harmony import */ var _lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _ceramic_bowl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ceramic-bowl */ "./src/crafts/ceramic-bowl.ts");
/* harmony import */ var _buildings_beehive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/beehive */ "./src/buildings/beehive.ts");
/* harmony import */ var _buildings_pantry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/pantry */ "./src/buildings/pantry.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Honey =
/** @class */
function (_super) {
  __extends(Honey, _super);

  function Honey() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Honey";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _nectar__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _ceramic_bowl__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_beehive__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_pantry__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return Honey;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Honey);

/***/ }),

/***/ "./src/crafts/honeycomb.ts":
/*!*********************************!*\
  !*** ./src/crafts/honeycomb.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _nectar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nectar */ "./src/crafts/nectar.ts");
/* harmony import */ var _lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _ceramic_bowl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ceramic-bowl */ "./src/crafts/ceramic-bowl.ts");
/* harmony import */ var _buildings_beehive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/beehive */ "./src/buildings/beehive.ts");
/* harmony import */ var _buildings_pantry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/pantry */ "./src/buildings/pantry.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Honeycomb =
/** @class */
function (_super) {
  __extends(Honeycomb, _super);

  function Honeycomb() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Honeycomb";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _nectar__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 6
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _ceramic_bowl__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_beehive__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_pantry__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return Honeycomb;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Honeycomb);

/***/ }),

/***/ "./src/crafts/husk-rice..ts":
/*!**********************************!*\
  !*** ./src/crafts/husk-rice..ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
/* harmony import */ var _crops_rice_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crops/rice-field */ "./src/crops/rice-field.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var HuskRice =
/** @class */
function (_super) {
  __extends(HuskRice, _super);

  function HuskRice() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Husk Rice";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 8,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_rice_field__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return HuskRice;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HuskRice);

/***/ }),

/***/ "./src/crafts/ice-block.ts":
/*!*********************************!*\
  !*** ./src/crafts/ice-block.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _water_drum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _cold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cold */ "./src/crafts/cold.ts");
/* harmony import */ var _buildings_master_wizard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/master-wizard */ "./src/buildings/master-wizard.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var IceBlock =
/** @class */
function (_super) {
  __extends(IceBlock, _super);

  function IceBlock() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Ice Block";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cold__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water_drum__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_master_wizard__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return IceBlock;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IceBlock);

/***/ }),

/***/ "./src/crafts/iron.ts":
/*!****************************!*\
  !*** ./src/crafts/iron.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _water_drum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _buildings_iron_mine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/iron-mine */ "./src/buildings/iron-mine.ts");
/* harmony import */ var _buildings_shallow_mine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/shallow-mine */ "./src/buildings/shallow-mine.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();










var Iron =
/** @class */
function (_super) {
  __extends(Iron, _super);

  function Iron() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Iron";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _lumber__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water_drum__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_iron_mine__WEBPACK_IMPORTED_MODULE_5__["default"], _buildings_shallow_mine__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_7__["default"]];
    return _this;
  }

  return Iron;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Iron);

/***/ }),

/***/ "./src/crafts/jack-o-lantern.ts":
/*!**************************************!*\
  !*** ./src/crafts/jack-o-lantern.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_pottery_shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/pottery-shop */ "./src/buildings/pottery-shop.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _pumpkin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pumpkin */ "./src/crafts/pumpkin.ts");
/* harmony import */ var _wax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wax */ "./src/crafts/wax.ts");
/* harmony import */ var _cotton_yarn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cotton-yarn */ "./src/crafts/cotton-yarn.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var JackOLantern =
/** @class */
function (_super) {
  __extends(JackOLantern, _super);

  function JackOLantern() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Jack O Lantern";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _pumpkin__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wax__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cotton_yarn__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_pottery_shop__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return JackOLantern;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JackOLantern);

/***/ }),

/***/ "./src/crafts/jam.ts":
/*!***************************!*\
  !*** ./src/crafts/jam.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _strawberries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strawberries */ "./src/crafts/strawberries.ts");
/* harmony import */ var _sugar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sugar */ "./src/crafts/sugar.ts");
/* harmony import */ var _water_drum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _buildings_bakery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/bakery */ "./src/buildings/bakery.ts");
/* harmony import */ var _buildings_pantry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/pantry */ "./src/buildings/pantry.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Jam =
/** @class */
function (_super) {
  __extends(Jam, _super);

  function Jam() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Jam";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _strawberries__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sugar__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water_drum__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_bakery__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_pantry__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return Jam;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Jam);

/***/ }),

/***/ "./src/crafts/jet-fuel.ts":
/*!********************************!*\
  !*** ./src/crafts/jet-fuel.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _water_drum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _petroleum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./petroleum */ "./src/crafts/petroleum.ts");
/* harmony import */ var _buildings_refinery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/refinery */ "./src/buildings/refinery.ts");
/* harmony import */ var _buildings_fuel_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/fuel-storage */ "./src/buildings/fuel-storage.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var JetFuel =
/** @class */
function (_super) {
  __extends(JetFuel, _super);

  function JetFuel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Jet Fuel";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _petroleum__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water_drum__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    })];
    _this.generatedFrom = [_buildings_refinery__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_fuel_storage__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return JetFuel;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JetFuel);

/***/ }),

/***/ "./src/crafts/jewelry-set.ts":
/*!***********************************!*\
  !*** ./src/crafts/jewelry-set.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _wooden_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wooden-box */ "./src/crafts/wooden-box.ts");
/* harmony import */ var _bracelet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bracelet */ "./src/crafts/bracelet.ts");
/* harmony import */ var _chandelier_earrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chandelier-earrings */ "./src/crafts/chandelier-earrings.ts");
/* harmony import */ var _golden_heart_necklace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./golden-heart-necklace */ "./src/crafts/golden-heart-necklace.ts");
/* harmony import */ var _buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/boxing-facility */ "./src/buildings/boxing-facility.ts");
/* harmony import */ var _buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../buildings/jewelry-store */ "./src/buildings/jewelry-store.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();










var JewelrySet =
/** @class */
function (_super) {
  __extends(JewelrySet, _super);

  function JewelrySet() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Jewelry Set";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wooden_box__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _bracelet__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _chandelier_earrings__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _golden_heart_necklace__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_7__["default"]];
    return _this;
  }

  return JewelrySet;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JewelrySet);

/***/ }),

/***/ "./src/crafts/lasagna.ts":
/*!*******************************!*\
  !*** ./src/crafts/lasagna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_beehive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/beehive */ "./src/buildings/beehive.ts");
/* harmony import */ var _buildings_pantry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/pantry */ "./src/buildings/pantry.ts");
/* harmony import */ var _eggs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eggs */ "./src/crafts/eggs.ts");
/* harmony import */ var _cheese__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cheese */ "./src/crafts/cheese.ts");
/* harmony import */ var _pasta_sauce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pasta-sauce */ "./src/crafts/pasta-sauce.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Lasagna =
/** @class */
function (_super) {
  __extends(Lasagna, _super);

  function Lasagna() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Lasagna";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cheese__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _pasta_sauce__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _eggs__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_beehive__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_pantry__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Lasagna;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lasagna);

/***/ }),

/***/ "./src/crafts/lights.ts":
/*!******************************!*\
  !*** ./src/crafts/lights.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_beehive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/beehive */ "./src/buildings/beehive.ts");
/* harmony import */ var _buildings_pantry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/pantry */ "./src/buildings/pantry.ts");
/* harmony import */ var _molten_glass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./molten-glass */ "./src/crafts/molten-glass.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var Lights =
/** @class */
function (_super) {
  __extends(Lights, _super);

  function Lights() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Lights";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _molten_glass__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_beehive__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_pantry__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Lights;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lights);

/***/ }),

/***/ "./src/crafts/limestone.ts":
/*!*********************************!*\
  !*** ./src/crafts/limestone.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _water_drum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _iron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iron */ "./src/crafts/iron.ts");
/* harmony import */ var _buildings_shallow_mine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/shallow-mine */ "./src/buildings/shallow-mine.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();










var Limestone =
/** @class */
function (_super) {
  __extends(Limestone, _super);

  function Limestone() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Limestone";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _lumber__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water_drum__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_iron__WEBPACK_IMPORTED_MODULE_5__["default"], _buildings_shallow_mine__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_7__["default"]];
    return _this;
  }

  return Limestone;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Limestone);

/***/ }),

/***/ "./src/crafts/lobster-clasp.ts":
/*!*************************************!*\
  !*** ./src/crafts/lobster-clasp.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/jewelry-crafting-table */ "./src/buildings/jewelry-crafting-table.ts");
/* harmony import */ var _buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/jewelry-store */ "./src/buildings/jewelry-store.ts");
/* harmony import */ var _silver_wire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./silver-wire */ "./src/crafts/silver-wire.ts");
/* harmony import */ var _copper_jump_ring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./copper-jump-ring */ "./src/crafts/copper-jump-ring.ts");
/* harmony import */ var _sterling_silver_jump_ring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sterling-silver-jump-ring */ "./src/crafts/sterling-silver-jump-ring.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var LobsterClasp =
/** @class */
function (_super) {
  __extends(LobsterClasp, _super);

  function LobsterClasp() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Lobster Clasp";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sterling_silver_jump_ring__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _copper_jump_ring__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _silver_wire__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return LobsterClasp;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LobsterClasp);

/***/ }),

/***/ "./src/crafts/lumber.ts":
/*!******************************!*\
  !*** ./src/crafts/lumber.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _buildings_lumber_mill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buildings/lumber-mill */ "./src/buildings/lumber-mill.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _water_drum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _buildings_wood_shed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/wood-shed */ "./src/buildings/wood-shed.ts");
/* harmony import */ var _buildings_lumber_yard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../buildings/lumber-yard */ "./src/buildings/lumber-yard.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();










var Lumber =
/** @class */
function (_super) {
  __extends(Lumber, _super);

  function Lumber() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Lumber";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _water_drum__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_lumber_mill__WEBPACK_IMPORTED_MODULE_1__["default"]];
    _this.storage = [_buildings_wood_shed__WEBPACK_IMPORTED_MODULE_6__["default"], _buildings_lumber_yard__WEBPACK_IMPORTED_MODULE_7__["default"]];
    return _this;
  }

  return Lumber;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lumber);

/***/ }),

/***/ "./src/crafts/magic-powder.ts":
/*!************************************!*\
  !*** ./src/crafts/magic-powder.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_master_wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/master-wizard */ "./src/buildings/master-wizard.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _pumpkin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pumpkin */ "./src/crafts/pumpkin.ts");
/* harmony import */ var _brine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brine */ "./src/crafts/brine.ts");
/* harmony import */ var _strawberries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strawberries */ "./src/crafts/strawberries.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var MagicPowder =
/** @class */
function (_super) {
  __extends(MagicPowder, _super);

  function MagicPowder() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Magic Powder";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _pumpkin__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _brine__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _strawberries__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_master_wizard__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return MagicPowder;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MagicPowder);

/***/ }),

/***/ "./src/crafts/milk.ts":
/*!****************************!*\
  !*** ./src/crafts/milk.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed */ "./src/crafts/feed.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _buildings_milk_barn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/milk-barn */ "./src/buildings/milk-barn.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Milk =
/** @class */
function (_super) {
  __extends(Milk, _super);

  function Milk() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Milk";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _feed__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 8
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 3
    })];
    _this.generatedFrom = [_buildings_milk_barn__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return Milk;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Milk);

/***/ }),

/***/ "./src/crafts/molten-glass.ts":
/*!************************************!*\
  !*** ./src/crafts/molten-glass.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _silica__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./silica */ "./src/crafts/silica.ts");
/* harmony import */ var _limestone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./limestone */ "./src/crafts/limestone.ts");
/* harmony import */ var _chromium__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chromium */ "./src/crafts/chromium.ts");
/* harmony import */ var _buildings_glass_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/glass-factory */ "./src/buildings/glass-factory.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var MoltenGlass =
/** @class */
function (_super) {
  __extends(MoltenGlass, _super);

  function MoltenGlass() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Molten Glass";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _silica__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 4
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _chromium__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _limestone__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_glass_factory__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return MoltenGlass;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoltenGlass);

/***/ }),

/***/ "./src/crafts/mystic-matter.ts":
/*!*************************************!*\
  !*** ./src/crafts/mystic-matter.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _cotton_yarn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cotton-yarn */ "./src/crafts/cotton-yarn.ts");
/* harmony import */ var _limestone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./limestone */ "./src/crafts/limestone.ts");
/* harmony import */ var _buildings_wizards_workshop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/wizards-workshop */ "./src/buildings/wizards-workshop.ts");
/* harmony import */ var _glue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glue */ "./src/crafts/glue.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var MysticMatter =
/** @class */
function (_super) {
  __extends(MysticMatter, _super);

  function MysticMatter() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Mystic Matter";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _glue__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cotton_yarn__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _limestone__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_wizards_workshop__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return MysticMatter;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MysticMatter);

/***/ }),

/***/ "./src/crafts/nectar.ts":
/*!******************************!*\
  !*** ./src/crafts/nectar.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _terrains_clover_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../terrains/clover-field */ "./src/terrains/clover-field.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var Nectar =
/** @class */
function (_super) {
  __extends(Nectar, _super);

  function Nectar() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Nectar";
    _this.generatedFrom = [_terrains_clover_field__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return Nectar;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nectar);

/***/ }),

/***/ "./src/crafts/oak-barrel.ts":
/*!**********************************!*\
  !*** ./src/crafts/oak-barrel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _buildings_lumber_mill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buildings/lumber-mill */ "./src/buildings/lumber-mill.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _oak_wood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oak-wood */ "./src/crafts/oak-wood.ts");
/* harmony import */ var _iron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iron */ "./src/crafts/iron.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var OakBarrel =
/** @class */
function (_super) {
  __extends(OakBarrel, _super);

  function OakBarrel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Oak Barrel";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _oak_wood__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _iron__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_lumber_mill__WEBPACK_IMPORTED_MODULE_1__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return OakBarrel;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OakBarrel);

/***/ }),

/***/ "./src/crafts/oak-wood.ts":
/*!********************************!*\
  !*** ./src/crafts/oak-wood.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _crops_oak_tree_farm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crops/oak-tree-farm */ "./src/crops/oak-tree-farm.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var OakWood =
/** @class */
function (_super) {
  __extends(OakWood, _super);

  function OakWood() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Oak Wood";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_oak_tree_farm__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return OakWood;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OakWood);

/***/ }),

/***/ "./src/crafts/party-box.ts":
/*!*********************************!*\
  !*** ./src/crafts/party-box.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _gift_parcel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gift-parcel */ "./src/crafts/gift-parcel.ts");
/* harmony import */ var _buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/boxing-facility */ "./src/buildings/boxing-facility.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _food_parcel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-parcel */ "./src/crafts/food-parcel.ts");
/* harmony import */ var _wooden_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wooden-box */ "./src/crafts/wooden-box.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var PartyBox =
/** @class */
function (_super) {
  __extends(PartyBox, _super);

  function PartyBox() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Party Box";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _gift_parcel__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _food_parcel__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wooden_box__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return PartyBox;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartyBox);

/***/ }),

/***/ "./src/crafts/pasta-sauce.ts":
/*!***********************************!*\
  !*** ./src/crafts/pasta-sauce.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _salt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salt */ "./src/crafts/salt.ts");
/* harmony import */ var _sugar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sugar */ "./src/crafts/sugar.ts");
/* harmony import */ var _buildings_sauce_facility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/sauce-facility */ "./src/buildings/sauce-facility.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _tomato_paste__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tomato-paste */ "./src/crafts/tomato-paste.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var PastaSauce =
/** @class */
function (_super) {
  __extends(PastaSauce, _super);

  function PastaSauce() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Pasta Sauce";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _tomato_paste__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _salt__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sugar__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_sauce_facility__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return PastaSauce;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PastaSauce);

/***/ }),

/***/ "./src/crafts/peppermint.ts":
/*!**********************************!*\
  !*** ./src/crafts/peppermint.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _crops_peppermint_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crops/peppermint-field */ "./src/crops/peppermint-field.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Peppermint =
/** @class */
function (_super) {
  __extends(Peppermint, _super);

  function Peppermint() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Peppermint";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_peppermint_field__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Peppermint;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Peppermint);

/***/ }),

/***/ "./src/crafts/petroleum.ts":
/*!*********************************!*\
  !*** ./src/crafts/petroleum.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _buildings_refinery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/refinery */ "./src/buildings/refinery.ts");
/* harmony import */ var _crude_oil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crude-oil */ "./src/crafts/crude-oil.ts");
/* harmony import */ var _water_drum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _buildings_fuel_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/fuel-storage */ "./src/buildings/fuel-storage.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Petroleum =
/** @class */
function (_super) {
  __extends(Petroleum, _super);

  function Petroleum() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Petroleum";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crude_oil__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water_drum__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_refinery__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_fuel_storage__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return Petroleum;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Petroleum);

/***/ }),

/***/ "./src/crafts/pinot-noir-grapes.ts":
/*!*****************************************!*\
  !*** ./src/crafts/pinot-noir-grapes.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crops_pinot_noir_vines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crops/pinot-noir-vines */ "./src/crops/pinot-noir-vines.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var PinotNoirGrapes =
/** @class */
function (_super) {
  __extends(PinotNoirGrapes, _super);

  function PinotNoirGrapes() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Pinot Noir Grapes";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_crops_pinot_noir_vines__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return PinotNoirGrapes;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PinotNoirGrapes);

/***/ }),

/***/ "./src/crafts/pinot-noir.ts":
/*!**********************************!*\
  !*** ./src/crafts/pinot-noir.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _pinot_noir_grapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pinot-noir-grapes */ "./src/crafts/pinot-noir-grapes.ts");
/* harmony import */ var _wine_bottle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wine-bottle */ "./src/crafts/wine-bottle.ts");
/* harmony import */ var _oak_barrel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oak-barrel */ "./src/crafts/oak-barrel.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _buildings_winery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/winery */ "./src/buildings/winery.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var PinotNoir =
/** @class */
function (_super) {
  __extends(PinotNoir, _super);

  function PinotNoir() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Pinot Noir";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _pinot_noir_grapes__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 6
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wine_bottle__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _oak_barrel__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_winery__WEBPACK_IMPORTED_MODULE_6__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return PinotNoir;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PinotNoir);

/***/ }),

/***/ "./src/crafts/pizza-base.ts":
/*!**********************************!*\
  !*** ./src/crafts/pizza-base.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _cheese__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cheese */ "./src/crafts/cheese.ts");
/* harmony import */ var _buildings_italian_restaurant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/italian-restaurant */ "./src/buildings/italian-restaurant.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _dough__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dough */ "./src/crafts/dough.ts");
/* harmony import */ var _tomato_paste__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tomato-paste */ "./src/crafts/tomato-paste.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var PizzaBase =
/** @class */
function (_super) {
  __extends(PizzaBase, _super);

  function PizzaBase() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Pizza Base";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _dough__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cheese__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _tomato_paste__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_italian_restaurant__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return PizzaBase;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PizzaBase);

/***/ }),

/***/ "./src/crafts/pumpkin-pie.ts":
/*!***********************************!*\
  !*** ./src/crafts/pumpkin-pie.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _pumpkin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pumpkin */ "./src/crafts/pumpkin.ts");
/* harmony import */ var _sugar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sugar */ "./src/crafts/sugar.ts");
/* harmony import */ var _eggs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eggs */ "./src/crafts/eggs.ts");
/* harmony import */ var _buildings_cakery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/cakery */ "./src/buildings/cakery.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var PumpkinPie =
/** @class */
function (_super) {
  __extends(PumpkinPie, _super);

  function PumpkinPie() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Pumpkin Pie";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _pumpkin__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 6
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sugar__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _eggs__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 10
    })];
    _this.generatedFrom = [_buildings_cakery__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return PumpkinPie;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PumpkinPie);

/***/ }),

/***/ "./src/crafts/pumpkin.ts":
/*!*******************************!*\
  !*** ./src/crafts/pumpkin.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _crops_pumpkin_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crops/pumpkin-patch */ "./src/crops/pumpkin-patch.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Pumpkin =
/** @class */
function (_super) {
  __extends(Pumpkin, _super);

  function Pumpkin() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Pumpkin";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 10,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_pumpkin_patch__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Pumpkin;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pumpkin);

/***/ }),

/***/ "./src/crafts/red-steel.ts":
/*!*********************************!*\
  !*** ./src/crafts/red-steel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_steel_mill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/steel-mill */ "./src/buildings/steel-mill.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _steel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./steel */ "./src/crafts/steel.ts");
/* harmony import */ var _strawberries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strawberries */ "./src/crafts/strawberries.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var RedSteel =
/** @class */
function (_super) {
  __extends(RedSteel, _super);

  function RedSteel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Pumpkin Pie";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _steel__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _strawberries__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 14
    })];
    _this.generatedFrom = [_buildings_steel_mill__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return RedSteel;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedSteel);

/***/ }),

/***/ "./src/crafts/rice-vinegar.ts":
/*!************************************!*\
  !*** ./src/crafts/rice-vinegar.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _buildings_mixing_tent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/mixing-tent */ "./src/buildings/mixing-tent.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _white_rice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./white-rice */ "./src/crafts/white-rice.ts");
/* harmony import */ var _sugarcane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sugarcane */ "./src/crafts/sugarcane.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var RiceVinegar =
/** @class */
function (_super) {
  __extends(RiceVinegar, _super);

  function RiceVinegar() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Rice Vinegar";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _white_rice__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sugarcane__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_mixing_tent__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return RiceVinegar;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RiceVinegar);

/***/ }),

/***/ "./src/crafts/risotto.ts":
/*!*******************************!*\
  !*** ./src/crafts/risotto.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _milk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./milk */ "./src/crafts/milk.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _white_rice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./white-rice */ "./src/crafts/white-rice.ts");
/* harmony import */ var _buildings_italian_restaurant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/italian-restaurant */ "./src/buildings/italian-restaurant.ts");
/* harmony import */ var _cheese__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cheese */ "./src/crafts/cheese.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Risotto =
/** @class */
function (_super) {
  __extends(Risotto, _super);

  function Risotto() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Risotto";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _white_rice__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 7
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cheese__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _milk__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_italian_restaurant__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Risotto;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Risotto);

/***/ }),

/***/ "./src/crafts/rocking-horse.ts":
/*!*************************************!*\
  !*** ./src/crafts/rocking-horse.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _oak_wood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oak-wood */ "./src/crafts/oak-wood.ts");
/* harmony import */ var _enchanted_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enchanted-object */ "./src/crafts/enchanted-object.ts");
/* harmony import */ var _iron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iron */ "./src/crafts/iron.ts");
/* harmony import */ var _buildings_santas_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/santas-factory */ "./src/buildings/santas-factory.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var RockingHorse =
/** @class */
function (_super) {
  __extends(RockingHorse, _super);

  function RockingHorse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Rocking Horse";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _oak_wood__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 4
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _enchanted_object__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _iron__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_santas_factory__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return RockingHorse;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RockingHorse);

/***/ }),

/***/ "./src/crafts/roe.ts":
/*!***************************!*\
  !*** ./src/crafts/roe.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _seaweed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seaweed */ "./src/crafts/seaweed.ts");
/* harmony import */ var _buildings_fish_farm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/fish-farm */ "./src/buildings/fish-farm.ts");
/* harmony import */ var _buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/seafood-warehouse */ "./src/buildings/seafood-warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Roe =
/** @class */
function (_super) {
  __extends(Roe, _super);

  function Roe() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Roe";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _seaweed__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_fish_farm__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Roe;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Roe);

/***/ }),

/***/ "./src/crafts/salmon-nigiri.ts":
/*!*************************************!*\
  !*** ./src/crafts/salmon-nigiri.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_sushi_restaurant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/sushi-restaurant */ "./src/buildings/sushi-restaurant.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _white_rice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./white-rice */ "./src/crafts/white-rice.ts");
/* harmony import */ var _salmon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salmon */ "./src/crafts/salmon.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var SalmonNigiri =
/** @class */
function (_super) {
  __extends(SalmonNigiri, _super);

  function SalmonNigiri() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Salmon Nigiri";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _white_rice__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _salmon__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 3
    })];
    _this.generatedFrom = [_buildings_sushi_restaurant__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return SalmonNigiri;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SalmonNigiri);

/***/ }),

/***/ "./src/crafts/salmon.ts":
/*!******************************!*\
  !*** ./src/crafts/salmon.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
/* harmony import */ var _crops_wild_net_fishing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crops/wild-net-fishing */ "./src/crops/wild-net-fishing.ts");
/* harmony import */ var _crops_fishing_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crops/fishing-platform */ "./src/crops/fishing-platform.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var Salmon =
/** @class */
function (_super) {
  __extends(Salmon, _super);

  function Salmon() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Salmon";
    _this.requires = [// createRequirement({ craft: FishChum, quantity: 2, building: WildNetFishing }),
    (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 8,
      building: _crops_wild_net_fishing__WEBPACK_IMPORTED_MODULE_3__["default"]
    }), //createRequirement({ craft: FishChum, quantity: 1, building: FishingPlatform }),
    (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 4,
      building: _crops_fishing_platform__WEBPACK_IMPORTED_MODULE_4__["default"]
    })];
    _this.generatedFrom = [_crops_wild_net_fishing__WEBPACK_IMPORTED_MODULE_3__["default"], _crops_fishing_platform__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return Salmon;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Salmon);

/***/ }),

/***/ "./src/crafts/salt.ts":
/*!****************************!*\
  !*** ./src/crafts/salt.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _brine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brine */ "./src/crafts/brine.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _buildings_wind_mill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/wind-mill */ "./src/buildings/wind-mill.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var Salt =
/** @class */
function (_super) {
  __extends(Salt, _super);

  function Salt() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Salt";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _brine__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 4
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_wind_mill__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return Salt;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Salt);

/***/ }),

/***/ "./src/crafts/sangria.ts":
/*!*******************************!*\
  !*** ./src/crafts/sangria.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _cabernet_sauvignon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cabernet-sauvignon */ "./src/crafts/cabernet-sauvignon.ts");
/* harmony import */ var _sugar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sugar */ "./src/crafts/sugar.ts");
/* harmony import */ var _strawberries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./strawberries */ "./src/crafts/strawberries.ts");
/* harmony import */ var _buildings_winery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/winery */ "./src/buildings/winery.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Sangria =
/** @class */
function (_super) {
  __extends(Sangria, _super);

  function Sangria() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Sangria";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cabernet_sauvignon__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sugar__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _strawberries__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_winery__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return Sangria;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sangria);

/***/ }),

/***/ "./src/crafts/seaweed.ts":
/*!*******************************!*\
  !*** ./src/crafts/seaweed.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crops_seaweed_farm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crops/seaweed-farm */ "./src/crops/seaweed-farm.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Seaweed =
/** @class */
function (_super) {
  __extends(Seaweed, _super);

  function Seaweed() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Seaweed";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_seaweed_farm__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Seaweed;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seaweed);

/***/ }),

/***/ "./src/crafts/shrimp-pizza.ts":
/*!************************************!*\
  !*** ./src/crafts/shrimp-pizza.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _pizza_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pizza-base */ "./src/crafts/pizza-base.ts");
/* harmony import */ var _shrimp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shrimp */ "./src/crafts/shrimp.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _buildings_italian_restaurant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/italian-restaurant */ "./src/buildings/italian-restaurant.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var ShrimpPizza =
/** @class */
function (_super) {
  __extends(ShrimpPizza, _super);

  function ShrimpPizza() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Shrimp Pizza";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _pizza_base__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _shrimp__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 3
    })];
    _this.generatedFrom = [_buildings_italian_restaurant__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return ShrimpPizza;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShrimpPizza);

/***/ }),

/***/ "./src/crafts/shrimp.ts":
/*!******************************!*\
  !*** ./src/crafts/shrimp.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/seafood-warehouse */ "./src/buildings/seafood-warehouse.ts");
/* harmony import */ var _seaweed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seaweed */ "./src/crafts/seaweed.ts");
/* harmony import */ var _buildings_shrimp_farm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/shrimp-farm */ "./src/buildings/shrimp-farm.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Shrimp =
/** @class */
function (_super) {
  __extends(Shrimp, _super);

  function Shrimp() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Shrimp";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _seaweed__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_shrimp_farm__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return Shrimp;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shrimp);

/***/ }),

/***/ "./src/crafts/silica.ts":
/*!******************************!*\
  !*** ./src/crafts/silica.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _buildings_sand_mine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/sand-mine */ "./src/buildings/sand-mine.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Silica =
/** @class */
function (_super) {
  __extends(Silica, _super);

  function Silica() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Silica";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_sand_mine__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Silica;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Silica);

/***/ }),

/***/ "./src/crafts/silver-jump-ring.ts":
/*!****************************************!*\
  !*** ./src/crafts/silver-jump-ring.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/jewelry-crafting-table */ "./src/buildings/jewelry-crafting-table.ts");
/* harmony import */ var _buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/jewelry-store */ "./src/buildings/jewelry-store.ts");
/* harmony import */ var _silver_wire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./silver-wire */ "./src/crafts/silver-wire.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var SilverJumpRing =
/** @class */
function (_super) {
  __extends(SilverJumpRing, _super);

  function SilverJumpRing() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Silver Jump Ring";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _silver_wire__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return SilverJumpRing;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SilverJumpRing);

/***/ }),

/***/ "./src/crafts/silver-ore.ts":
/*!**********************************!*\
  !*** ./src/crafts/silver-ore.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_silver_panning_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/silver-panning-site */ "./src/buildings/silver-panning-site.ts");
/* harmony import */ var _buildings_ore_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/ore-storage */ "./src/buildings/ore-storage.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var SilverOre =
/** @class */
function (_super) {
  __extends(SilverOre, _super);

  function SilverOre() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Silver Ore";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: SilverOre,
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_silver_panning_site__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_ore_storage__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return SilverOre;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SilverOre);

/***/ }),

/***/ "./src/crafts/silver-wire.ts":
/*!***********************************!*\
  !*** ./src/crafts/silver-wire.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/jewelry-crafting-table */ "./src/buildings/jewelry-crafting-table.ts");
/* harmony import */ var _buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/jewelry-store */ "./src/buildings/jewelry-store.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _silver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./silver */ "./src/crafts/silver.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var SilverWire =
/** @class */
function (_super) {
  __extends(SilverWire, _super);

  function SilverWire() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Silver Wire";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _silver__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return SilverWire;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SilverWire);

/***/ }),

/***/ "./src/crafts/silver.ts":
/*!******************************!*\
  !*** ./src/crafts/silver.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _silver_ore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./silver-ore */ "./src/crafts/silver-ore.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _buildings_forge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/forge */ "./src/buildings/forge.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var Silver =
/** @class */
function (_super) {
  __extends(Silver, _super);

  function Silver() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Silver";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _silver_ore__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_forge__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return Silver;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Silver);

/***/ }),

/***/ "./src/crafts/stack-box.ts":
/*!*********************************!*\
  !*** ./src/crafts/stack-box.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _food_parcel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-parcel */ "./src/crafts/food-parcel.ts");
/* harmony import */ var _gift_parcel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gift-parcel */ "./src/crafts/gift-parcel.ts");
/* harmony import */ var _wooden_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wooden-box */ "./src/crafts/wooden-box.ts");
/* harmony import */ var _buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/boxing-facility */ "./src/buildings/boxing-facility.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var StackBox =
/** @class */
function (_super) {
  __extends(StackBox, _super);

  function StackBox() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Stacked Box";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _food_parcel__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _gift_parcel__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wooden_box__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return StackBox;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StackBox);

/***/ }),

/***/ "./src/crafts/steel.ts":
/*!*****************************!*\
  !*** ./src/crafts/steel.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _iron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iron */ "./src/crafts/iron.ts");
/* harmony import */ var _water_drum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _buildings_steel_mill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/steel-mill */ "./src/buildings/steel-mill.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Steel =
/** @class */
function (_super) {
  __extends(Steel, _super);

  function Steel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Steel";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _iron__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water_drum__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    })];
    _this.generatedFrom = [_buildings_steel_mill__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return Steel;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Steel);

/***/ }),

/***/ "./src/crafts/sterling-silver-jump-ring.ts":
/*!*************************************************!*\
  !*** ./src/crafts/sterling-silver-jump-ring.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _buildings_foundry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/foundry */ "./src/buildings/foundry.ts");
/* harmony import */ var _sterling_silver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sterling-silver */ "./src/crafts/sterling-silver.ts");
/* harmony import */ var _silica__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./silica */ "./src/crafts/silica.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var SterlingSilverJumpRing =
/** @class */
function (_super) {
  __extends(SterlingSilverJumpRing, _super);

  function SterlingSilverJumpRing() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Sterling Silver Jump Ring";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sterling_silver__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _silica__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_foundry__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return SterlingSilverJumpRing;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SterlingSilverJumpRing);

/***/ }),

/***/ "./src/crafts/sterling-silver.ts":
/*!***************************************!*\
  !*** ./src/crafts/sterling-silver.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _buildings_foundry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/foundry */ "./src/buildings/foundry.ts");
/* harmony import */ var _copper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copper */ "./src/crafts/copper.ts");
/* harmony import */ var _silver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./silver */ "./src/crafts/silver.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var SterlingSilver =
/** @class */
function (_super) {
  __extends(SterlingSilver, _super);

  function SterlingSilver() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Sterling Silver";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _copper__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _silver__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_foundry__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return SterlingSilver;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SterlingSilver);

/***/ }),

/***/ "./src/crafts/strawberries.ts":
/*!************************************!*\
  !*** ./src/crafts/strawberries.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _crops_strawberry_farm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crops/strawberry-farm */ "./src/crops/strawberry-farm.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Strawberries =
/** @class */
function (_super) {
  __extends(Strawberries, _super);

  function Strawberries() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Strawberries";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_strawberry_farm__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Strawberries;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Strawberries);

/***/ }),

/***/ "./src/crafts/sugar.ts":
/*!*****************************!*\
  !*** ./src/crafts/sugar.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _sugarcane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sugarcane */ "./src/crafts/sugarcane.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _buildings_wind_mill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/wind-mill */ "./src/buildings/wind-mill.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var Sugar =
/** @class */
function (_super) {
  __extends(Sugar, _super);

  function Sugar() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Sugar";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _sugarcane__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_wind_mill__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return Sugar;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sugar);

/***/ }),

/***/ "./src/crafts/sugarcane.ts":
/*!*********************************!*\
  !*** ./src/crafts/sugarcane.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _crops_sugercane_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crops/sugercane-field */ "./src/crops/sugercane-field.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Sugarcane =
/** @class */
function (_super) {
  __extends(Sugarcane, _super);

  function Sugarcane() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Sugarcane";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 4,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_sugercane_field__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Sugarcane;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sugarcane);

/***/ }),

/***/ "./src/crafts/supply-box.ts":
/*!**********************************!*\
  !*** ./src/crafts/supply-box.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _ceramic_bowl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ceramic-bowl */ "./src/crafts/ceramic-bowl.ts");
/* harmony import */ var _wax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wax */ "./src/crafts/wax.ts");
/* harmony import */ var _wooden_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wooden-box */ "./src/crafts/wooden-box.ts");
/* harmony import */ var _buildings_pottery_shop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/pottery-shop */ "./src/buildings/pottery-shop.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var SupplyBox =
/** @class */
function (_super) {
  __extends(SupplyBox, _super);

  function SupplyBox() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Supply Box";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _ceramic_bowl__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wax__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wooden_box__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_pottery_shop__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return SupplyBox;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SupplyBox);

/***/ }),

/***/ "./src/crafts/sushi-boat.ts":
/*!**********************************!*\
  !*** ./src/crafts/sushi-boat.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _eel_nigiri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eel-nigiri */ "./src/crafts/eel-nigiri.ts");
/* harmony import */ var _rice_vinegar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rice-vinegar */ "./src/crafts/rice-vinegar.ts");
/* harmony import */ var _buildings_sushi_restaurant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/sushi-restaurant */ "./src/buildings/sushi-restaurant.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _salmon_nigiri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salmon-nigiri */ "./src/crafts/salmon-nigiri.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var SushiBoat =
/** @class */
function (_super) {
  __extends(SushiBoat, _super);

  function SushiBoat() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Sushi Boat";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _salmon_nigiri__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _eel_nigiri__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _rice_vinegar__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_sushi_restaurant__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return SushiBoat;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SushiBoat);

/***/ }),

/***/ "./src/crafts/tomato-paste.ts":
/*!************************************!*\
  !*** ./src/crafts/tomato-paste.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _rice_vinegar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rice-vinegar */ "./src/crafts/rice-vinegar.ts");
/* harmony import */ var _buildings_sushi_restaurant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/sushi-restaurant */ "./src/buildings/sushi-restaurant.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _tomatoes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tomatoes */ "./src/crafts/tomatoes.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var TomatoPaste =
/** @class */
function (_super) {
  __extends(TomatoPaste, _super);

  function TomatoPaste() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Tomato Paste";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _rice_vinegar__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _tomatoes__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 3
    })];
    _this.generatedFrom = [_buildings_sushi_restaurant__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return TomatoPaste;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TomatoPaste);

/***/ }),

/***/ "./src/crafts/tomatoes.ts":
/*!********************************!*\
  !*** ./src/crafts/tomatoes.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _crops_tomato_farm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crops/tomato-farm */ "./src/crops/tomato-farm.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Tomatoes =
/** @class */
function (_super) {
  __extends(Tomatoes, _super);

  function Tomatoes() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Tomatoes";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 3,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_tomato_farm__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return Tomatoes;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tomatoes);

/***/ }),

/***/ "./src/crafts/trick-or-treat-bag.ts":
/*!******************************************!*\
  !*** ./src/crafts/trick-or-treat-bag.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _buildings_candy_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/candy-shop */ "./src/buildings/candy-shop.ts");
/* harmony import */ var _chocolate_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chocolate-bar */ "./src/crafts/chocolate-bar.ts");
/* harmony import */ var _candy_corn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./candy-corn */ "./src/crafts/candy-corn.ts");
/* harmony import */ var _cotton_yarn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cotton-yarn */ "./src/crafts/cotton-yarn.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var TrickOrTreatBag =
/** @class */
function (_super) {
  __extends(TrickOrTreatBag, _super);

  function TrickOrTreatBag() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Trick or Treat Bag";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _chocolate_bar__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _candy_corn__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cotton_yarn__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_candy_shop__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return TrickOrTreatBag;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrickOrTreatBag);

/***/ }),

/***/ "./src/crafts/uniforms.ts":
/*!********************************!*\
  !*** ./src/crafts/uniforms.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _cotton_yarn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cotton-yarn */ "./src/crafts/cotton-yarn.ts");
/* harmony import */ var _wool_yarn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wool-yarn */ "./src/crafts/wool-yarn.ts");
/* harmony import */ var _buildings_fabric_plant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/fabric-plant */ "./src/buildings/fabric-plant.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Uniforms =
/** @class */
function (_super) {
  __extends(Uniforms, _super);

  function Uniforms() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Uniforms";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cotton_yarn__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wool_yarn__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    })];
    _this.generatedFrom = [_buildings_fabric_plant__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return Uniforms;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Uniforms);

/***/ }),

/***/ "./src/crafts/wasabi.ts":
/*!******************************!*\
  !*** ./src/crafts/wasabi.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crops_wasabi_farm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crops/wasabi-farm */ "./src/crops/wasabi-farm.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Wasabi =
/** @class */
function (_super) {
  __extends(Wasabi, _super);

  function Wasabi() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wasabi";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 3,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_wasabi_farm__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Wasabi;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wasabi);

/***/ }),

/***/ "./src/crafts/water-drum.ts":
/*!**********************************!*\
  !*** ./src/crafts/water-drum.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _buildings_water_facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/water-facility */ "./src/buildings/water-facility.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var WaterDrum =
/** @class */
function (_super) {
  __extends(WaterDrum, _super);

  function WaterDrum() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Water Drum";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3,
      drawInline: true
    })];
    _this.generatedFrom = [_buildings_water_facility__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return WaterDrum;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WaterDrum);

/***/ }),

/***/ "./src/crafts/water.ts":
/*!*****************************!*\
  !*** ./src/crafts/water.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _buildings_well__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buildings/well */ "./src/buildings/well.ts");
/* harmony import */ var _buildings_wind_pump__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/wind-pump */ "./src/buildings/wind-pump.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var Water =
/** @class */
function (_super) {
  __extends(Water, _super);

  function Water() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Water";
    _this.generatedFrom = [_buildings_well__WEBPACK_IMPORTED_MODULE_1__["default"], _buildings_wind_pump__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return Water;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Water);

/***/ }),

/***/ "./src/crafts/wax.ts":
/*!***************************!*\
  !*** ./src/crafts/wax.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_beehive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/beehive */ "./src/buildings/beehive.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _nectar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nectar */ "./src/crafts/nectar.ts");
/* harmony import */ var _lumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _ceramic_bowl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ceramic-bowl */ "./src/crafts/ceramic-bowl.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Wax =
/** @class */
function (_super) {
  __extends(Wax, _super);

  function Wax() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wax";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _nectar__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _lumber__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _ceramic_bowl__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_beehive__WEBPACK_IMPORTED_MODULE_2__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Wax;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wax);

/***/ }),

/***/ "./src/crafts/wheat.ts":
/*!*****************************!*\
  !*** ./src/crafts/wheat.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _crops_wheat_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crops/wheat-field */ "./src/crops/wheat-field.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/silo */ "./src/buildings/silo.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var Wheat =
/** @class */
function (_super) {
  __extends(Wheat, _super);

  function Wheat() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wheat";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3,
      drawInline: true
    })];
    _this.generatedFrom = [_crops_wheat_field__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Wheat;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wheat);

/***/ }),

/***/ "./src/crafts/white-rice.ts":
/*!**********************************!*\
  !*** ./src/crafts/white-rice.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _husk_rice___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./husk-rice. */ "./src/crafts/husk-rice..ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _buildings_mixing_tent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buildings/mixing-tent */ "./src/buildings/mixing-tent.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var WhiteRice =
/** @class */
function (_super) {
  __extends(WhiteRice, _super);

  function WhiteRice() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "White Rice";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _husk_rice___WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_mixing_tent__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return WhiteRice;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WhiteRice);

/***/ }),

/***/ "./src/crafts/wine-bottle.ts":
/*!***********************************!*\
  !*** ./src/crafts/wine-bottle.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _silica__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./silica */ "./src/crafts/silica.ts");
/* harmony import */ var _chromium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chromium */ "./src/crafts/chromium.ts");
/* harmony import */ var _limestone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./limestone */ "./src/crafts/limestone.ts");
/* harmony import */ var _buildings_glass_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/glass-factory */ "./src/buildings/glass-factory.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var WineBottle =
/** @class */
function (_super) {
  __extends(WineBottle, _super);

  function WineBottle() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wine Bottle";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _silica__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _chromium__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _limestone__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_glass_factory__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return WineBottle;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WineBottle);

/***/ }),

/***/ "./src/crafts/wood.ts":
/*!****************************!*\
  !*** ./src/crafts/wood.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _crops_tree_farm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crops/tree-farm */ "./src/crops/tree-farm.ts");
/* harmony import */ var _buildings_wood_shed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/wood-shed */ "./src/buildings/wood-shed.ts");
/* harmony import */ var _buildings_lumber_yard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/lumber-yard */ "./src/buildings/lumber-yard.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var Wood =
/** @class */
function (_super) {
  __extends(Wood, _super);

  function Wood() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wood";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_4__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 5,
      required: false,
      building: _crops_tree_farm__WEBPACK_IMPORTED_MODULE_1__["default"],
      drawInline: true
    })];
    _this.generatedFrom = [_crops_tree_farm__WEBPACK_IMPORTED_MODULE_1__["default"]];
    _this.storage = [_buildings_wood_shed__WEBPACK_IMPORTED_MODULE_2__["default"], _buildings_lumber_yard__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return Wood;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wood);

/***/ }),

/***/ "./src/crafts/wooden-box.ts":
/*!**********************************!*\
  !*** ./src/crafts/wooden-box.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _buildings_lumber_mill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/lumber-mill */ "./src/buildings/lumber-mill.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var WoodenBox =
/** @class */
function (_super) {
  __extends(WoodenBox, _super);

  function WoodenBox() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wooden Box";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    })];
    _this.generatedFrom = [_buildings_lumber_mill__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return WoodenBox;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WoodenBox);

/***/ }),

/***/ "./src/crafts/wool-yarn.ts":
/*!*********************************!*\
  !*** ./src/crafts/wool-yarn.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _energy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./energy */ "./src/crafts/energy.ts");
/* harmony import */ var _lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _wool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wool */ "./src/crafts/wool.ts");
/* harmony import */ var _buildings_fabric_plant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buildings/fabric-plant */ "./src/buildings/fabric-plant.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var WoolYarn =
/** @class */
function (_super) {
  __extends(WoolYarn, _super);

  function WoolYarn() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wool Yarn";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wool__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _energy__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_fabric_plant__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return WoolYarn;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WoolYarn);

/***/ }),

/***/ "./src/crafts/wool.ts":
/*!****************************!*\
  !*** ./src/crafts/wool.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _buildings_sheep_pen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buildings/sheep-pen */ "./src/buildings/sheep-pen.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed */ "./src/crafts/feed.ts");
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var Wool =
/** @class */
function (_super) {
  __extends(Wool, _super);

  function Wool() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wool";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _feed__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 8
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 5
    })];
    _this.generatedFrom = [_buildings_sheep_pen__WEBPACK_IMPORTED_MODULE_1__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return Wool;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wool);

/***/ }),

/***/ "./src/crafts/worms.ts":
/*!*****************************!*\
  !*** ./src/crafts/worms.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./craft */ "./src/crafts/craft.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _buildings_worm_farm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/worm-farm */ "./src/buildings/worm-farm.ts");
/* harmony import */ var _husk_rice___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./husk-rice. */ "./src/crafts/husk-rice..ts");
/* harmony import */ var _water__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var Worms =
/** @class */
function (_super) {
  __extends(Worms, _super);

  function Worms() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Worms";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _husk_rice___WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_buildings_worm_farm__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_storehouse__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return Worms;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Worms);

/***/ }),

/***/ "./src/crops/apple-tree.ts":
/*!*********************************!*\
  !*** ./src/crops/apple-tree.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_apple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/apple */ "./src/crafts/apple.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var AppleTree =
/** @class */
function (_super) {
  __extends(AppleTree, _super);

  function AppleTree() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Apple Tree";
    _this.price = 1500;
    _this.isNFT = false;
    _this.buildRequirements = [];
    _this.output = [_crafts_apple__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return AppleTree;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppleTree);

/***/ }),

/***/ "./src/crops/cabernet-vines.ts":
/*!*************************************!*\
  !*** ./src/crops/cabernet-vines.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_cabernet_grapes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/cabernet-grapes */ "./src/crafts/cabernet-grapes.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item */ "./src/item.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var CabernetVines =
/** @class */
function (_super) {
  __extends(CabernetVines, _super);

  function CabernetVines() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Cabernet Vines";
    _this.price = 3500;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 1
    })];
    _this.output = [_crafts_cabernet_grapes__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return CabernetVines;
}(_item__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CabernetVines);

/***/ }),

/***/ "./src/crops/chardonnay-vines.ts":
/*!***************************************!*\
  !*** ./src/crops/chardonnay-vines.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_chardonnay_grapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/chardonnay-grapes */ "./src/crafts/chardonnay-grapes.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var ChardonnayVines =
/** @class */
function (_super) {
  __extends(ChardonnayVines, _super);

  function ChardonnayVines() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Chardonnay Vines";
    _this.price = 1500;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 1
    })];
    _this.output = [_crafts_chardonnay_grapes__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return ChardonnayVines;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChardonnayVines);

/***/ }),

/***/ "./src/crops/cocoa-tree.ts":
/*!*********************************!*\
  !*** ./src/crops/cocoa-tree.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_cocoa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/cocoa */ "./src/crafts/cocoa.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var CocoaTree =
/** @class */
function (_super) {
  __extends(CocoaTree, _super);

  function CocoaTree() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Cocoa Tree";
    _this.price = 2500;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 1
    })];
    _this.output = [_crafts_cocoa__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return CocoaTree;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CocoaTree);

/***/ }),

/***/ "./src/crops/corn-field.ts":
/*!*********************************!*\
  !*** ./src/crops/corn-field.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
/* harmony import */ var _crafts_corn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/corn */ "./src/crafts/corn.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var CornField =
/** @class */
function (_super) {
  __extends(CornField, _super);

  function CornField() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Corn Field";
    _this.price = 1500;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crafts_water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 2
    })];
    _this.output = [_crafts_corn__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return CornField;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CornField);

/***/ }),

/***/ "./src/crops/cotton-field.ts":
/*!***********************************!*\
  !*** ./src/crops/cotton-field.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_cotton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/cotton */ "./src/crafts/cotton.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var CottonField =
/** @class */
function (_super) {
  __extends(CottonField, _super);

  function CottonField() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Cotton Field";
    _this.price = 250;
    _this.isNFT = false;
    _this.output = [_crafts_cotton__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return CottonField;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CottonField);

/***/ }),

/***/ "./src/crops/fishing-platform.ts":
/*!***************************************!*\
  !*** ./src/crops/fishing-platform.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/oak-wood */ "./src/crafts/oak-wood.ts");
/* harmony import */ var _crafts_salmon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/salmon */ "./src/crafts/salmon.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var FishingPlatform =
/** @class */
function (_super) {
  __extends(FishingPlatform, _super);

  function FishingPlatform() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Fishing Platform";
    _this.price = 300000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crafts_water__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 25
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 5
    })];
    _this.output = [_crafts_salmon__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return FishingPlatform;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FishingPlatform);

/***/ }),

/***/ "./src/crops/oak-tree-farm.ts":
/*!************************************!*\
  !*** ./src/crops/oak-tree-farm.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/oak-wood */ "./src/crafts/oak-wood.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var OakTreeFarm =
/** @class */
function (_super) {
  __extends(OakTreeFarm, _super);

  function OakTreeFarm() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Oak Tree Farm";
    _this.price = 1000;
    _this.isNFT = false;
    _this.output = [_crafts_oak_wood__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return OakTreeFarm;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OakTreeFarm);

/***/ }),

/***/ "./src/crops/peppermint-field.ts":
/*!***************************************!*\
  !*** ./src/crops/peppermint-field.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_peppermint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/peppermint */ "./src/crafts/peppermint.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var PeppermintField =
/** @class */
function (_super) {
  __extends(PeppermintField, _super);

  function PeppermintField() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Peppermint Field";
    _this.price = 2500;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 3
    })];
    _this.output = [_crafts_peppermint__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return PeppermintField;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PeppermintField);

/***/ }),

/***/ "./src/crops/pinot-noir-vines.ts":
/*!***************************************!*\
  !*** ./src/crops/pinot-noir-vines.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_pinot_noir_grapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/pinot-noir-grapes */ "./src/crafts/pinot-noir-grapes.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var PinotNoirVines =
/** @class */
function (_super) {
  __extends(PinotNoirVines, _super);

  function PinotNoirVines() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Pinot Noir Vines";
    _this.price = 5000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    })];
    _this.output = [_crafts_pinot_noir_grapes__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return PinotNoirVines;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PinotNoirVines);

/***/ }),

/***/ "./src/crops/pumpkin-patch.ts":
/*!************************************!*\
  !*** ./src/crops/pumpkin-patch.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_pumpkin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/pumpkin */ "./src/crafts/pumpkin.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var PumpkinPatch =
/** @class */
function (_super) {
  __extends(PumpkinPatch, _super);

  function PumpkinPatch() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Pumpkin Patch";
    _this.price = 250;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 3
    })];
    _this.output = [_crafts_pumpkin__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return PumpkinPatch;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PumpkinPatch);

/***/ }),

/***/ "./src/crops/rice-field.ts":
/*!*********************************!*\
  !*** ./src/crops/rice-field.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
/* harmony import */ var _crafts_husk_rice___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/husk-rice. */ "./src/crafts/husk-rice..ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var RiceField =
/** @class */
function (_super) {
  __extends(RiceField, _super);

  function RiceField() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Rice Field";
    _this.price = 1500;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crafts_water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 10
    })];
    _this.output = [_crafts_husk_rice___WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return RiceField;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RiceField);

/***/ }),

/***/ "./src/crops/salt-field.ts":
/*!*********************************!*\
  !*** ./src/crops/salt-field.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_brine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/brine */ "./src/crafts/brine.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var SaltField =
/** @class */
function (_super) {
  __extends(SaltField, _super);

  function SaltField() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Salt Field";
    _this.price = 1250;
    _this.isNFT = false;
    _this.output = [_crafts_brine__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return SaltField;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaltField);

/***/ }),

/***/ "./src/crops/seaweed-farm.ts":
/*!***********************************!*\
  !*** ./src/crops/seaweed-farm.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
/* harmony import */ var _crafts_seaweed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/seaweed */ "./src/crafts/seaweed.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var SeaweedFarm =
/** @class */
function (_super) {
  __extends(SeaweedFarm, _super);

  function SeaweedFarm() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Seaweed Farm";
    _this.price = 5000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crafts_water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    })];
    _this.output = [_crafts_seaweed__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return SeaweedFarm;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeaweedFarm);

/***/ }),

/***/ "./src/crops/strawberry-farm.ts":
/*!**************************************!*\
  !*** ./src/crops/strawberry-farm.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_strawberries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/strawberries */ "./src/crafts/strawberries.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var StrawberryFarm =
/** @class */
function (_super) {
  __extends(StrawberryFarm, _super);

  function StrawberryFarm() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Strawberry Farm";
    _this.price = 1000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 3
    })];
    _this.output = [_crafts_strawberries__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return StrawberryFarm;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StrawberryFarm);

/***/ }),

/***/ "./src/crops/sugercane-field.ts":
/*!**************************************!*\
  !*** ./src/crops/sugercane-field.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_sugarcane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/sugarcane */ "./src/crafts/sugarcane.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var SugercaneField =
/** @class */
function (_super) {
  __extends(SugercaneField, _super);

  function SugercaneField() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Sugercane Field";
    _this.price = 250;
    _this.isNFT = false;
    _this.output = [_crafts_sugarcane__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return SugercaneField;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SugercaneField);

/***/ }),

/***/ "./src/crops/tomato-farm.ts":
/*!**********************************!*\
  !*** ./src/crops/tomato-farm.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var TomatoFarm =
/** @class */
function (_super) {
  __extends(TomatoFarm, _super);

  function TomatoFarm() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Tomato Farm";
    _this.price = 5000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crafts_water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    })];
    _this.output = [//  Tomatoes,
    ];
    return _this;
  }

  return TomatoFarm;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TomatoFarm);

/***/ }),

/***/ "./src/crops/tree-farm.ts":
/*!********************************!*\
  !*** ./src/crops/tree-farm.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var TreeFarm =
/** @class */
function (_super) {
  __extends(TreeFarm, _super);

  function TreeFarm() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Tree Farm";
    _this.price = 500;
    _this.isNFT = false;
    _this.output = [_crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"]];
    return _this;
  }

  return TreeFarm;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeFarm);

/***/ }),

/***/ "./src/crops/wasabi-farm.ts":
/*!**********************************!*\
  !*** ./src/crops/wasabi-farm.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/water */ "./src/crafts/water.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();





var WasabiFarm =
/** @class */
function (_super) {
  __extends(WasabiFarm, _super);

  function WasabiFarm() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wasabi Farm";
    _this.price = 250;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _crafts_water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    })];
    _this.output = [// Wasabi,
    ];
    return _this;
  }

  return WasabiFarm;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WasabiFarm);

/***/ }),

/***/ "./src/crops/wheat-field.ts":
/*!**********************************!*\
  !*** ./src/crops/wheat-field.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_wheat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wheat */ "./src/crafts/wheat.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var WheatField =
/** @class */
function (_super) {
  __extends(WheatField, _super);

  function WheatField() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wheat Field";
    _this.price = 250;
    _this.isNFT = false;
    _this.output = [_crafts_wheat__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return WheatField;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WheatField);

/***/ }),

/***/ "./src/crops/wild-net-fishing.ts":
/*!***************************************!*\
  !*** ./src/crops/wild-net-fishing.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/oak-wood */ "./src/crafts/oak-wood.ts");
/* harmony import */ var _crafts_salmon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/salmon */ "./src/crafts/salmon.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var WildNetFishing =
/** @class */
function (_super) {
  __extends(WildNetFishing, _super);

  function WildNetFishing() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Wild Net Fishing";
    _this.price = 150000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_0__["default"],
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 20
    })];
    _this.output = [_crafts_salmon__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return WildNetFishing;
}(_item__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WildNetFishing);

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buildings_bakery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildings/bakery */ "./src/buildings/bakery.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _crafts_butter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crafts/butter */ "./src/crafts/butter.ts");
/* harmony import */ var _crafts_salt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crafts/salt */ "./src/crafts/salt.ts");
/* harmony import */ var _crafts_milk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crafts/milk */ "./src/crafts/milk.ts");
/* harmony import */ var _crafts_water__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crafts/water */ "./src/crafts/water.ts");
/* harmony import */ var _terrains_meadow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./terrains/meadow */ "./src/terrains/meadow.ts");
/* harmony import */ var _crafts_feed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./crafts/feed */ "./src/crafts/feed.ts");
/* harmony import */ var _crafts_brine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crafts/brine */ "./src/crafts/brine.ts");
/* harmony import */ var _crafts_baguette__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./crafts/baguette */ "./src/crafts/baguette.ts");
/* harmony import */ var _crafts_crude_oil__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./crafts/crude-oil */ "./src/crafts/crude-oil.ts");
/* harmony import */ var _crafts_water_drum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./crafts/water-drum */ "./src/crafts/water-drum.ts");
/* harmony import */ var _crafts_gift_parcel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./crafts/gift-parcel */ "./src/crafts/gift-parcel.ts");
/* harmony import */ var _buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./buildings/boxing-facility */ "./src/buildings/boxing-facility.ts");
/* harmony import */ var _crafts_decorated_cake__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./crafts/decorated-cake */ "./src/crafts/decorated-cake.ts");
/* harmony import */ var _crafts_cake__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./crafts/cake */ "./src/crafts/cake.ts");
/* harmony import */ var _crafts_batter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./crafts/batter */ "./src/crafts/batter.ts");
/* harmony import */ var _crafts_flour__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./crafts/flour */ "./src/crafts/flour.ts");
/* harmony import */ var _crafts_wheat__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./crafts/wheat */ "./src/crafts/wheat.ts");
/* harmony import */ var _crafts_wool_yarn__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./crafts/wool-yarn */ "./src/crafts/wool-yarn.ts");
/* harmony import */ var _crafts_wool__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./crafts/wool */ "./src/crafts/wool.ts");
/* harmony import */ var _crafts_eggs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./crafts/eggs */ "./src/crafts/eggs.ts");
/* harmony import */ var _crafts_sugar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./crafts/sugar */ "./src/crafts/sugar.ts");
/* harmony import */ var _crafts_chocolate_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./crafts/chocolate-bar */ "./src/crafts/chocolate-bar.ts");
/* harmony import */ var _buildings_chocolate_shop__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./buildings/chocolate-shop */ "./src/buildings/chocolate-shop.ts");
/* harmony import */ var _crafts_cocoa__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./crafts/cocoa */ "./src/crafts/cocoa.ts");
/* harmony import */ var _crafts_candy_canes__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./crafts/candy-canes */ "./src/crafts/candy-canes.ts");
/* harmony import */ var _crafts_peppermint__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./crafts/peppermint */ "./src/crafts/peppermint.ts");
/* harmony import */ var _crafts_sangria__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./crafts/sangria */ "./src/crafts/sangria.ts");
/* harmony import */ var _crafts_wine_bottle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./crafts/wine-bottle */ "./src/crafts/wine-bottle.ts");
/* harmony import */ var _crafts_pumpkin_pie__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./crafts/pumpkin-pie */ "./src/crafts/pumpkin-pie.ts");
/* harmony import */ var _crafts_pumpkin__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./crafts/pumpkin */ "./src/crafts/pumpkin.ts");
/* harmony import */ var _crafts_sugarcane__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./crafts/sugarcane */ "./src/crafts/sugarcane.ts");
/* harmony import */ var _crafts_cabernet_sauvignon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./crafts/cabernet-sauvignon */ "./src/crafts/cabernet-sauvignon.ts");
/* harmony import */ var _crafts_strawberries__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./crafts/strawberries */ "./src/crafts/strawberries.ts");
/* harmony import */ var _crafts_cabernet_grapes__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./crafts/cabernet-grapes */ "./src/crafts/cabernet-grapes.ts");
/* harmony import */ var _crafts_silica__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./crafts/silica */ "./src/crafts/silica.ts");
/* harmony import */ var _crafts_limestone__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./crafts/limestone */ "./src/crafts/limestone.ts");
/* harmony import */ var _crafts_chromium__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./crafts/chromium */ "./src/crafts/chromium.ts");
/* harmony import */ var _crafts_oak_barrel__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./crafts/oak-barrel */ "./src/crafts/oak-barrel.ts");
/* harmony import */ var _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./crafts/oak-wood */ "./src/crafts/oak-wood.ts");
/* harmony import */ var _crafts_iron__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./crafts/iron */ "./src/crafts/iron.ts");
/* harmony import */ var _crafts_party_box__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./crafts/party-box */ "./src/crafts/party-box.ts");
/* harmony import */ var _buildings_beehive__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./buildings/beehive */ "./src/buildings/beehive.ts");
/* harmony import */ var _buildings_cakery__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./buildings/cakery */ "./src/buildings/cakery.ts");
/* harmony import */ var _buildings_fabric_plant__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./buildings/fabric-plant */ "./src/buildings/fabric-plant.ts");
/* harmony import */ var _buildings_feed_mill__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./buildings/feed-mill */ "./src/buildings/feed-mill.ts");
/* harmony import */ var _buildings_fuel_storage__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./buildings/fuel-storage */ "./src/buildings/fuel-storage.ts");
/* harmony import */ var _buildings_glass_factory__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./buildings/glass-factory */ "./src/buildings/glass-factory.ts");
/* harmony import */ var _buildings_iron_mine__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./buildings/iron-mine */ "./src/buildings/iron-mine.ts");
/* harmony import */ var _buildings_lumber_mill__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./buildings/lumber-mill */ "./src/buildings/lumber-mill.ts");
/* harmony import */ var _buildings_lumber_yard__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./buildings/lumber-yard */ "./src/buildings/lumber-yard.ts");
/* harmony import */ var _buildings_milk_barn__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./buildings/milk-barn */ "./src/buildings/milk-barn.ts");
/* harmony import */ var _buildings_nuclear_power__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./buildings/nuclear-power */ "./src/buildings/nuclear-power.ts");
/* harmony import */ var _buildings_oil_pump__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./buildings/oil-pump */ "./src/buildings/oil-pump.ts");
/* harmony import */ var _buildings_pantry__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./buildings/pantry */ "./src/buildings/pantry.ts");
/* harmony import */ var _buildings_pottery_shop__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./buildings/pottery-shop */ "./src/buildings/pottery-shop.ts");
/* harmony import */ var _buildings_power_plant__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./buildings/power-plant */ "./src/buildings/power-plant.ts");
/* harmony import */ var _buildings_refinery__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./buildings/refinery */ "./src/buildings/refinery.ts");
/* harmony import */ var _buildings_sand_mine__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./buildings/sand-mine */ "./src/buildings/sand-mine.ts");
/* harmony import */ var _buildings_shallow_mine__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./buildings/shallow-mine */ "./src/buildings/shallow-mine.ts");
/* harmony import */ var _buildings_sheep_pen__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./buildings/sheep-pen */ "./src/buildings/sheep-pen.ts");
/* harmony import */ var _buildings_silo__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./buildings/silo */ "./src/buildings/silo.ts");
/* harmony import */ var _buildings_steel_mill__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./buildings/steel-mill */ "./src/buildings/steel-mill.ts");
/* harmony import */ var _buildings_storehouse__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./buildings/storehouse */ "./src/buildings/storehouse.ts");
/* harmony import */ var _buildings_trough__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./buildings/trough */ "./src/buildings/trough.ts");
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _buildings_water_facility__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./buildings/water-facility */ "./src/buildings/water-facility.ts");
/* harmony import */ var _buildings_water_pump__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./buildings/water-pump */ "./src/buildings/water-pump.ts");
/* harmony import */ var _buildings_well__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./buildings/well */ "./src/buildings/well.ts");
/* harmony import */ var _buildings_wind_mill__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./buildings/wind-mill */ "./src/buildings/wind-mill.ts");
/* harmony import */ var _buildings_wind_pump__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./buildings/wind-pump */ "./src/buildings/wind-pump.ts");
/* harmony import */ var _buildings_winery__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./buildings/winery */ "./src/buildings/winery.ts");
/* harmony import */ var _buildings_wood_shed__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./buildings/wood-shed */ "./src/buildings/wood-shed.ts");
/* harmony import */ var _crafts_blue_steel__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./crafts/blue-steel */ "./src/crafts/blue-steel.ts");
/* harmony import */ var _crafts_ceramic_bowl__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./crafts/ceramic-bowl */ "./src/crafts/ceramic-bowl.ts");
/* harmony import */ var _crafts_chardonnay__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./crafts/chardonnay */ "./src/crafts/chardonnay.ts");
/* harmony import */ var _crafts_chardonnay_grapes__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./crafts/chardonnay-grapes */ "./src/crafts/chardonnay-grapes.ts");
/* harmony import */ var _crafts_chocolate_covered_strawberries__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./crafts/chocolate-covered-strawberries */ "./src/crafts/chocolate-covered-strawberries.ts");
/* harmony import */ var _crafts_clay_lump__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./crafts/clay-lump */ "./src/crafts/clay-lump.ts");
/* harmony import */ var _crafts_cotton__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./crafts/cotton */ "./src/crafts/cotton.ts");
/* harmony import */ var _crafts_cotton_yarn__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./crafts/cotton-yarn */ "./src/crafts/cotton-yarn.ts");
/* harmony import */ var _crafts_dough__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./crafts/dough */ "./src/crafts/dough.ts");
/* harmony import */ var _crafts_fabric_box__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./crafts/fabric-box */ "./src/crafts/fabric-box.ts");
/* harmony import */ var _crafts_fancy_cake__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./crafts/fancy-cake */ "./src/crafts/fancy-cake.ts");
/* harmony import */ var _crafts_food_parcel__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./crafts/food-parcel */ "./src/crafts/food-parcel.ts");
/* harmony import */ var _crafts_gasoline__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./crafts/gasoline */ "./src/crafts/gasoline.ts");
/* harmony import */ var _crafts_honey__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./crafts/honey */ "./src/crafts/honey.ts");
/* harmony import */ var _crafts_honeycomb__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./crafts/honeycomb */ "./src/crafts/honeycomb.ts");
/* harmony import */ var _crafts_jack_o_lantern__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./crafts/jack-o-lantern */ "./src/crafts/jack-o-lantern.ts");
/* harmony import */ var _crafts_jam__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./crafts/jam */ "./src/crafts/jam.ts");
/* harmony import */ var _crafts_jet_fuel__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./crafts/jet-fuel */ "./src/crafts/jet-fuel.ts");
/* harmony import */ var _crafts_nectar__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./crafts/nectar */ "./src/crafts/nectar.ts");
/* harmony import */ var _crafts_pinot_noir__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./crafts/pinot-noir */ "./src/crafts/pinot-noir.ts");
/* harmony import */ var _crafts_pinot_noir_grapes__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./crafts/pinot-noir-grapes */ "./src/crafts/pinot-noir-grapes.ts");
/* harmony import */ var _crafts_steel__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./crafts/steel */ "./src/crafts/steel.ts");
/* harmony import */ var _crafts_uniforms__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ./crafts/uniforms */ "./src/crafts/uniforms.ts");
/* harmony import */ var _crafts_wax__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ./crafts/wax */ "./src/crafts/wax.ts");
/* harmony import */ var _crafts_wooden_box__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./crafts/wooden-box */ "./src/crafts/wooden-box.ts");
/* harmony import */ var _crops_cabernet_vines__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./crops/cabernet-vines */ "./src/crops/cabernet-vines.ts");
/* harmony import */ var _crops_chardonnay_vines__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ./crops/chardonnay-vines */ "./src/crops/chardonnay-vines.ts");
/* harmony import */ var _buildings_chicken_coop__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./buildings/chicken-coop */ "./src/buildings/chicken-coop.ts");
/* harmony import */ var _buildings_candy_shop__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ./buildings/candy-shop */ "./src/buildings/candy-shop.ts");
/* harmony import */ var _crops_cocoa_tree__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./crops/cocoa-tree */ "./src/crops/cocoa-tree.ts");
/* harmony import */ var _crops_cotton_field__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! ./crops/cotton-field */ "./src/crops/cotton-field.ts");
/* harmony import */ var _crops_oak_tree_farm__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ./crops/oak-tree-farm */ "./src/crops/oak-tree-farm.ts");
/* harmony import */ var _crops_peppermint_field__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! ./crops/peppermint-field */ "./src/crops/peppermint-field.ts");
/* harmony import */ var _crops_pinot_noir_vines__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ./crops/pinot-noir-vines */ "./src/crops/pinot-noir-vines.ts");
/* harmony import */ var _crops_pumpkin_patch__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ./crops/pumpkin-patch */ "./src/crops/pumpkin-patch.ts");
/* harmony import */ var _crops_salt_field__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ./crops/salt-field */ "./src/crops/salt-field.ts");
/* harmony import */ var _crops_strawberry_farm__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ./crops/strawberry-farm */ "./src/crops/strawberry-farm.ts");
/* harmony import */ var _crops_sugercane_field__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ./crops/sugercane-field */ "./src/crops/sugercane-field.ts");
/* harmony import */ var _crops_tree_farm__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ./crops/tree-farm */ "./src/crops/tree-farm.ts");
/* harmony import */ var _crops_wheat_field__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ./crops/wheat-field */ "./src/crops/wheat-field.ts");
/* harmony import */ var _terrains_clay_field__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ./terrains/clay-field */ "./src/terrains/clay-field.ts");
/* harmony import */ var _terrains_clover_field__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ./terrains/clover-field */ "./src/terrains/clover-field.ts");
/* harmony import */ var _terrains_dirt_road__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ./terrains/dirt-road */ "./src/terrains/dirt-road.ts");
/* harmony import */ var _terrains_mountains__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ./terrains/mountains */ "./src/terrains/mountains.ts");
/* harmony import */ var _terrains_open_world__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ./terrains/open-world */ "./src/terrains/open-world.ts");
/* harmony import */ var _terrains_paved_road__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ./terrains/paved-road */ "./src/terrains/paved-road.ts");
/* harmony import */ var _terrains_pond__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ./terrains/pond */ "./src/terrains/pond.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ./terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _workers_atv__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ./workers/atv */ "./src/workers/atv.ts");
/* harmony import */ var _workers_bee_keeper_house__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ./workers/bee-keeper-house */ "./src/workers/bee-keeper-house.ts");
/* harmony import */ var _workers_builder_house__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ./workers/builder-house */ "./src/workers/builder-house.ts");
/* harmony import */ var _workers_farm_house__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ./workers/farm-house */ "./src/workers/farm-house.ts");
/* harmony import */ var _workers_farm_tractor__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ./workers/farm-tractor */ "./src/workers/farm-tractor.ts");
/* harmony import */ var _workers_forklift__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ./workers/forklift */ "./src/workers/forklift.ts");
/* harmony import */ var _workers_lumberjack_house__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ./workers/lumberjack-house */ "./src/workers/lumberjack-house.ts");
/* harmony import */ var _workers_ranch_house__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ./workers/ranch-house */ "./src/workers/ranch-house.ts");
/* harmony import */ var _workers_the_logger_house__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ./workers/the-logger-house */ "./src/workers/the-logger-house.ts");
/* harmony import */ var _workers_worker_house__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ./workers/worker-house */ "./src/workers/worker-house.ts");
/* harmony import */ var _ui_product_selection__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ./ui/product-selection */ "./src/ui/product-selection.ts");
/* harmony import */ var _crafts_petroleum__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ./crafts/petroleum */ "./src/crafts/petroleum.ts");
/* harmony import */ var _crafts_stack_box__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ./crafts/stack-box */ "./src/crafts/stack-box.ts");
/* harmony import */ var _workers_aquaculturist_house__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ./workers/aquaculturist-house */ "./src/workers/aquaculturist-house.ts");
/* harmony import */ var _crafts_trick_or_treat_bag__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ./crafts/trick-or-treat-bag */ "./src/crafts/trick-or-treat-bag.ts");
/* harmony import */ var _crafts_corn__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! ./crafts/corn */ "./src/crafts/corn.ts");
/* harmony import */ var _crafts_candy_corn__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! ./crafts/candy-corn */ "./src/crafts/candy-corn.ts");
/* harmony import */ var _crops_corn_field__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! ./crops/corn-field */ "./src/crops/corn-field.ts");
/* harmony import */ var _crafts_corn_starch__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! ./crafts/corn-starch */ "./src/crafts/corn-starch.ts");
/* harmony import */ var _buildings_copper_panning_site__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! ./buildings/copper-panning-site */ "./src/buildings/copper-panning-site.ts");
/* harmony import */ var _buildings_fish_farm__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! ./buildings/fish-farm */ "./src/buildings/fish-farm.ts");
/* harmony import */ var _buildings_forge__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! ./buildings/forge */ "./src/buildings/forge.ts");
/* harmony import */ var _buildings_foundry__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! ./buildings/foundry */ "./src/buildings/foundry.ts");
/* harmony import */ var _buildings_gold_panning_site__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! ./buildings/gold-panning-site */ "./src/buildings/gold-panning-site.ts");
/* harmony import */ var _buildings_italian_restaurant__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! ./buildings/italian-restaurant */ "./src/buildings/italian-restaurant.ts");
/* harmony import */ var _buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! ./buildings/jewelry-crafting-table */ "./src/buildings/jewelry-crafting-table.ts");
/* harmony import */ var _buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! ./buildings/jewelry-store */ "./src/buildings/jewelry-store.ts");
/* harmony import */ var _buildings_master_wizard__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! ./buildings/master-wizard */ "./src/buildings/master-wizard.ts");
/* harmony import */ var _buildings_mixing_tent__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! ./buildings/mixing-tent */ "./src/buildings/mixing-tent.ts");
/* harmony import */ var _buildings_north_pole_creation_lab__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! ./buildings/north-pole-creation-lab */ "./src/buildings/north-pole-creation-lab.ts");
/* harmony import */ var _buildings_ore_storage__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! ./buildings/ore-storage */ "./src/buildings/ore-storage.ts");
/* harmony import */ var _buildings_santas_factory__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! ./buildings/santas-factory */ "./src/buildings/santas-factory.ts");
/* harmony import */ var _buildings_sauce_facility__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! ./buildings/sauce-facility */ "./src/buildings/sauce-facility.ts");
/* harmony import */ var _buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ./buildings/seafood-warehouse */ "./src/buildings/seafood-warehouse.ts");
/* harmony import */ var _buildings_shrimp_farm__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ./buildings/shrimp-farm */ "./src/buildings/shrimp-farm.ts");
/* harmony import */ var _buildings_silver_panning_site__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! ./buildings/silver-panning-site */ "./src/buildings/silver-panning-site.ts");
/* harmony import */ var _buildings_sushi_restaurant__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! ./buildings/sushi-restaurant */ "./src/buildings/sushi-restaurant.ts");
/* harmony import */ var _buildings_wire_mill__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! ./buildings/wire-mill */ "./src/buildings/wire-mill.ts");
/* harmony import */ var _buildings_wizards_workshop__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! ./buildings/wizards-workshop */ "./src/buildings/wizards-workshop.ts");
/* harmony import */ var _buildings_worm_farm__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! ./buildings/worm-farm */ "./src/buildings/worm-farm.ts");
/* harmony import */ var _crops_apple_tree__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! ./crops/apple-tree */ "./src/crops/apple-tree.ts");
/* harmony import */ var _crops_fishing_platform__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! ./crops/fishing-platform */ "./src/crops/fishing-platform.ts");
/* harmony import */ var _crops_rice_field__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! ./crops/rice-field */ "./src/crops/rice-field.ts");
/* harmony import */ var _crops_seaweed_farm__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! ./crops/seaweed-farm */ "./src/crops/seaweed-farm.ts");
/* harmony import */ var _crops_tomato_farm__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! ./crops/tomato-farm */ "./src/crops/tomato-farm.ts");
/* harmony import */ var _crops_wasabi_farm__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! ./crops/wasabi-farm */ "./src/crops/wasabi-farm.ts");
/* harmony import */ var _crops_wild_net_fishing__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ./crops/wild-net-fishing */ "./src/crops/wild-net-fishing.ts");
/* harmony import */ var _workers_panner_bunk_house__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! ./workers/panner-bunk-house */ "./src/workers/panner-bunk-house.ts");
/* harmony import */ var _workers_panner_house__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! ./workers/panner-house */ "./src/workers/panner-house.ts");
/* harmony import */ var _workers_seaweed_farmer_house__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! ./workers/seaweed-farmer-house */ "./src/workers/seaweed-farmer-house.ts");
/* harmony import */ var _crafts_apple__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! ./crafts/apple */ "./src/crafts/apple.ts");
/* harmony import */ var _crafts_apple_pie__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! ./crafts/apple-pie */ "./src/crafts/apple-pie.ts");
/* harmony import */ var _crafts_bicycle__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! ./crafts/bicycle */ "./src/crafts/bicycle.ts");
/* harmony import */ var _crafts_boom_canes__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! ./crafts/boom-canes */ "./src/crafts/boom-canes.ts");
/* harmony import */ var _crafts_bracelet__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! ./crafts/bracelet */ "./src/crafts/bracelet.ts");
/* harmony import */ var _crafts_chandelier_earrings__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! ./crafts/chandelier-earrings */ "./src/crafts/chandelier-earrings.ts");
/* harmony import */ var _crafts_cheese__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! ./crafts/cheese */ "./src/crafts/cheese.ts");
/* harmony import */ var _crafts_copper__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! ./crafts/copper */ "./src/crafts/copper.ts");
/* harmony import */ var _crafts_copper_jump_ring__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! ./crafts/copper-jump-ring */ "./src/crafts/copper-jump-ring.ts");
/* harmony import */ var _crafts_copper_ore__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! ./crafts/copper-ore */ "./src/crafts/copper-ore.ts");
/* harmony import */ var _crafts_copper_wire__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! ./crafts/copper-wire */ "./src/crafts/copper-wire.ts");
/* harmony import */ var _crafts_eel__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! ./crafts/eel */ "./src/crafts/eel.ts");
/* harmony import */ var _crafts_eel_nigiri__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! ./crafts/eel-nigiri */ "./src/crafts/eel-nigiri.ts");
/* harmony import */ var _crafts_enchanted_object__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! ./crafts/enchanted-object */ "./src/crafts/enchanted-object.ts");
/* harmony import */ var _crafts_fish_chum__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! ./crafts/fish-chum */ "./src/crafts/fish-chum.ts");
/* harmony import */ var _crafts_food_mix__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! ./crafts/food-mix */ "./src/crafts/food-mix.ts");
/* harmony import */ var _crafts_four_cheese_pizza__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! ./crafts/four-cheese-pizza */ "./src/crafts/four-cheese-pizza.ts");
/* harmony import */ var _crafts_glue__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! ./crafts/glue */ "./src/crafts/glue.ts");
/* harmony import */ var _crafts_gold__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! ./crafts/gold */ "./src/crafts/gold.ts");
/* harmony import */ var _crafts_gold_jump_ring__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! ./crafts/gold-jump-ring */ "./src/crafts/gold-jump-ring.ts");
/* harmony import */ var _crafts_gold_ore__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! ./crafts/gold-ore */ "./src/crafts/gold-ore.ts");
/* harmony import */ var _crafts_gold_plated_heart_pendant__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! ./crafts/gold-plated-heart-pendant */ "./src/crafts/gold-plated-heart-pendant.ts");
/* harmony import */ var _crafts_golden_heart_necklace__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! ./crafts/golden-heart-necklace */ "./src/crafts/golden-heart-necklace.ts");
/* harmony import */ var _crafts_heart_shaped_print__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! ./crafts/heart-shaped-print */ "./src/crafts/heart-shaped-print.ts");
/* harmony import */ var _crafts_husk_rice___WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! ./crafts/husk-rice. */ "./src/crafts/husk-rice..ts");
/* harmony import */ var _crafts_ice_block__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! ./crafts/ice-block */ "./src/crafts/ice-block.ts");
/* harmony import */ var _crafts_jewelry_set__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! ./crafts/jewelry-set */ "./src/crafts/jewelry-set.ts");
/* harmony import */ var _crafts_lasagna__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! ./crafts/lasagna */ "./src/crafts/lasagna.ts");
/* harmony import */ var _crafts_lights__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! ./crafts/lights */ "./src/crafts/lights.ts");
/* harmony import */ var _crafts_lobster_clasp__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! ./crafts/lobster-clasp */ "./src/crafts/lobster-clasp.ts");
/* harmony import */ var _crafts_magic_powder__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! ./crafts/magic-powder */ "./src/crafts/magic-powder.ts");
/* harmony import */ var _crafts_molten_glass__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! ./crafts/molten-glass */ "./src/crafts/molten-glass.ts");
/* harmony import */ var _crafts_mystic_matter__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! ./crafts/mystic-matter */ "./src/crafts/mystic-matter.ts");
/* harmony import */ var _crafts_pasta_sauce__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! ./crafts/pasta-sauce */ "./src/crafts/pasta-sauce.ts");
/* harmony import */ var _crafts_pizza_base__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! ./crafts/pizza-base */ "./src/crafts/pizza-base.ts");
/* harmony import */ var _crafts_red_steel__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! ./crafts/red-steel */ "./src/crafts/red-steel.ts");
/* harmony import */ var _crafts_rice_vinegar__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! ./crafts/rice-vinegar */ "./src/crafts/rice-vinegar.ts");
/* harmony import */ var _crafts_risotto__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! ./crafts/risotto */ "./src/crafts/risotto.ts");
/* harmony import */ var _crafts_rocking_horse__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! ./crafts/rocking-horse */ "./src/crafts/rocking-horse.ts");
/* harmony import */ var _crafts_roe__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! ./crafts/roe */ "./src/crafts/roe.ts");
/* harmony import */ var _crafts_salmon__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! ./crafts/salmon */ "./src/crafts/salmon.ts");
/* harmony import */ var _crafts_salmon_nigiri__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! ./crafts/salmon-nigiri */ "./src/crafts/salmon-nigiri.ts");
/* harmony import */ var _crafts_seaweed__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! ./crafts/seaweed */ "./src/crafts/seaweed.ts");
/* harmony import */ var _crafts_shrimp__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! ./crafts/shrimp */ "./src/crafts/shrimp.ts");
/* harmony import */ var _crafts_shrimp_pizza__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! ./crafts/shrimp-pizza */ "./src/crafts/shrimp-pizza.ts");
/* harmony import */ var _crafts_silver__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! ./crafts/silver */ "./src/crafts/silver.ts");
/* harmony import */ var _crafts_silver_jump_ring__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! ./crafts/silver-jump-ring */ "./src/crafts/silver-jump-ring.ts");
/* harmony import */ var _crafts_silver_ore__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! ./crafts/silver-ore */ "./src/crafts/silver-ore.ts");
/* harmony import */ var _crafts_silver_wire__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! ./crafts/silver-wire */ "./src/crafts/silver-wire.ts");
/* harmony import */ var _crafts_sterling_silver__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! ./crafts/sterling-silver */ "./src/crafts/sterling-silver.ts");
/* harmony import */ var _crafts_sterling_silver_jump_ring__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! ./crafts/sterling-silver-jump-ring */ "./src/crafts/sterling-silver-jump-ring.ts");
/* harmony import */ var _crafts_supply_box__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! ./crafts/supply-box */ "./src/crafts/supply-box.ts");
/* harmony import */ var _crafts_sushi_boat__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! ./crafts/sushi-boat */ "./src/crafts/sushi-boat.ts");
/* harmony import */ var _crafts_tomato_paste__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! ./crafts/tomato-paste */ "./src/crafts/tomato-paste.ts");
/* harmony import */ var _crafts_tomatoes__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! ./crafts/tomatoes */ "./src/crafts/tomatoes.ts");
/* harmony import */ var _crafts_wasabi__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! ./crafts/wasabi */ "./src/crafts/wasabi.ts");
/* harmony import */ var _crafts_white_rice__WEBPACK_IMPORTED_MODULE_230__ = __webpack_require__(/*! ./crafts/white-rice */ "./src/crafts/white-rice.ts");
/* harmony import */ var _crafts_worms__WEBPACK_IMPORTED_MODULE_231__ = __webpack_require__(/*! ./crafts/worms */ "./src/crafts/worms.ts");
var _a;









































































































































































































































window.products = (_a = {}, // crafts
_a[_crafts_apple__WEBPACK_IMPORTED_MODULE_174__["default"].name] = new _crafts_apple__WEBPACK_IMPORTED_MODULE_174__["default"](), _a[_crafts_apple_pie__WEBPACK_IMPORTED_MODULE_175__["default"].name] = new _crafts_apple_pie__WEBPACK_IMPORTED_MODULE_175__["default"](), _a[_crafts_baguette__WEBPACK_IMPORTED_MODULE_11__["default"].name] = new _crafts_baguette__WEBPACK_IMPORTED_MODULE_11__["default"](), _a[_crafts_batter__WEBPACK_IMPORTED_MODULE_18__["default"].name] = new _crafts_batter__WEBPACK_IMPORTED_MODULE_18__["default"](), _a[_crafts_bicycle__WEBPACK_IMPORTED_MODULE_176__["default"].name] = new _crafts_bicycle__WEBPACK_IMPORTED_MODULE_176__["default"](), _a[_crafts_blue_steel__WEBPACK_IMPORTED_MODULE_76__["default"].name] = new _crafts_blue_steel__WEBPACK_IMPORTED_MODULE_76__["default"](), _a[_crafts_boom_canes__WEBPACK_IMPORTED_MODULE_177__["default"].name] = new _crafts_boom_canes__WEBPACK_IMPORTED_MODULE_177__["default"](), _a[_crafts_bracelet__WEBPACK_IMPORTED_MODULE_178__["default"].name] = new _crafts_bracelet__WEBPACK_IMPORTED_MODULE_178__["default"](), _a[_crafts_brine__WEBPACK_IMPORTED_MODULE_10__["default"].name] = new _crafts_brine__WEBPACK_IMPORTED_MODULE_10__["default"](), _a[_crafts_butter__WEBPACK_IMPORTED_MODULE_4__["default"].name] = new _crafts_butter__WEBPACK_IMPORTED_MODULE_4__["default"](), _a[_crafts_cabernet_grapes__WEBPACK_IMPORTED_MODULE_37__["default"].name] = new _crafts_cabernet_grapes__WEBPACK_IMPORTED_MODULE_37__["default"](), _a[_crafts_cabernet_sauvignon__WEBPACK_IMPORTED_MODULE_35__["default"].name] = new _crafts_cabernet_sauvignon__WEBPACK_IMPORTED_MODULE_35__["default"](), _a[_crafts_cake__WEBPACK_IMPORTED_MODULE_17__["default"].name] = new _crafts_cake__WEBPACK_IMPORTED_MODULE_17__["default"](), _a[_crafts_candy_canes__WEBPACK_IMPORTED_MODULE_28__["default"].name] = new _crafts_candy_canes__WEBPACK_IMPORTED_MODULE_28__["default"](), _a[_crafts_candy_corn__WEBPACK_IMPORTED_MODULE_140__["default"].name] = new _crafts_candy_corn__WEBPACK_IMPORTED_MODULE_140__["default"](), _a[_crafts_ceramic_bowl__WEBPACK_IMPORTED_MODULE_77__["default"].name] = new _crafts_ceramic_bowl__WEBPACK_IMPORTED_MODULE_77__["default"](), _a[_crafts_chandelier_earrings__WEBPACK_IMPORTED_MODULE_179__["default"].name] = new _crafts_chandelier_earrings__WEBPACK_IMPORTED_MODULE_179__["default"](), _a[_crafts_chardonnay__WEBPACK_IMPORTED_MODULE_78__["default"].name] = new _crafts_chardonnay__WEBPACK_IMPORTED_MODULE_78__["default"](), _a[_crafts_chardonnay_grapes__WEBPACK_IMPORTED_MODULE_79__["default"].name] = new _crafts_chardonnay_grapes__WEBPACK_IMPORTED_MODULE_79__["default"](), _a[_crafts_cheese__WEBPACK_IMPORTED_MODULE_180__["default"].name] = new _crafts_cheese__WEBPACK_IMPORTED_MODULE_180__["default"](), _a[_crafts_chocolate_bar__WEBPACK_IMPORTED_MODULE_25__["default"].name] = new _crafts_chocolate_bar__WEBPACK_IMPORTED_MODULE_25__["default"](), _a[_crafts_chocolate_covered_strawberries__WEBPACK_IMPORTED_MODULE_80__["default"].name] = new _crafts_chocolate_covered_strawberries__WEBPACK_IMPORTED_MODULE_80__["default"](), _a[_crafts_chromium__WEBPACK_IMPORTED_MODULE_40__["default"].name] = new _crafts_chromium__WEBPACK_IMPORTED_MODULE_40__["default"](), _a[_crafts_clay_lump__WEBPACK_IMPORTED_MODULE_81__["default"].name] = new _crafts_clay_lump__WEBPACK_IMPORTED_MODULE_81__["default"](), _a[_crafts_cocoa__WEBPACK_IMPORTED_MODULE_27__["default"].name] = new _crafts_cocoa__WEBPACK_IMPORTED_MODULE_27__["default"](), _a[_crafts_copper__WEBPACK_IMPORTED_MODULE_181__["default"].name] = new _crafts_copper__WEBPACK_IMPORTED_MODULE_181__["default"](), _a[_crafts_copper_jump_ring__WEBPACK_IMPORTED_MODULE_182__["default"].name] = new _crafts_copper_jump_ring__WEBPACK_IMPORTED_MODULE_182__["default"](), _a[_crafts_copper_ore__WEBPACK_IMPORTED_MODULE_183__["default"].name] = new _crafts_copper_ore__WEBPACK_IMPORTED_MODULE_183__["default"](), _a[_crafts_copper_wire__WEBPACK_IMPORTED_MODULE_184__["default"].name] = new _crafts_copper_wire__WEBPACK_IMPORTED_MODULE_184__["default"](), _a[_crafts_corn__WEBPACK_IMPORTED_MODULE_139__["default"].name] = new _crafts_corn__WEBPACK_IMPORTED_MODULE_139__["default"](), _a[_crafts_corn_starch__WEBPACK_IMPORTED_MODULE_142__["default"].name] = new _crafts_corn_starch__WEBPACK_IMPORTED_MODULE_142__["default"](), _a[_crafts_cotton__WEBPACK_IMPORTED_MODULE_82__["default"].name] = new _crafts_cotton__WEBPACK_IMPORTED_MODULE_82__["default"](), _a[_crafts_cotton_yarn__WEBPACK_IMPORTED_MODULE_83__["default"].name] = new _crafts_cotton_yarn__WEBPACK_IMPORTED_MODULE_83__["default"](), _a[_crafts_crude_oil__WEBPACK_IMPORTED_MODULE_12__["default"].name] = new _crafts_crude_oil__WEBPACK_IMPORTED_MODULE_12__["default"](), _a[_crafts_decorated_cake__WEBPACK_IMPORTED_MODULE_16__["default"].name] = new _crafts_decorated_cake__WEBPACK_IMPORTED_MODULE_16__["default"](), _a[_crafts_dough__WEBPACK_IMPORTED_MODULE_84__["default"].name] = new _crafts_dough__WEBPACK_IMPORTED_MODULE_84__["default"](), _a[_crafts_eel__WEBPACK_IMPORTED_MODULE_185__["default"].name] = new _crafts_eel__WEBPACK_IMPORTED_MODULE_185__["default"](), _a[_crafts_eel_nigiri__WEBPACK_IMPORTED_MODULE_186__["default"].name] = new _crafts_eel_nigiri__WEBPACK_IMPORTED_MODULE_186__["default"](), _a[_crafts_eggs__WEBPACK_IMPORTED_MODULE_23__["default"].name] = new _crafts_eggs__WEBPACK_IMPORTED_MODULE_23__["default"](), _a[_crafts_enchanted_object__WEBPACK_IMPORTED_MODULE_187__["default"].name] = new _crafts_enchanted_object__WEBPACK_IMPORTED_MODULE_187__["default"](), _a[_crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"].name] = new _crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"](), _a[_crafts_fabric_box__WEBPACK_IMPORTED_MODULE_85__["default"].name] = new _crafts_fabric_box__WEBPACK_IMPORTED_MODULE_85__["default"](), _a[_crafts_fancy_cake__WEBPACK_IMPORTED_MODULE_86__["default"].name] = new _crafts_fancy_cake__WEBPACK_IMPORTED_MODULE_86__["default"](), _a[_crafts_feed__WEBPACK_IMPORTED_MODULE_9__["default"].name] = new _crafts_feed__WEBPACK_IMPORTED_MODULE_9__["default"](), _a[_crafts_fish_chum__WEBPACK_IMPORTED_MODULE_188__["default"].name] = new _crafts_fish_chum__WEBPACK_IMPORTED_MODULE_188__["default"](), _a[_crafts_flour__WEBPACK_IMPORTED_MODULE_19__["default"].name] = new _crafts_flour__WEBPACK_IMPORTED_MODULE_19__["default"](), _a[_crafts_food_mix__WEBPACK_IMPORTED_MODULE_189__["default"].name] = new _crafts_food_mix__WEBPACK_IMPORTED_MODULE_189__["default"](), _a[_crafts_food_parcel__WEBPACK_IMPORTED_MODULE_87__["default"].name] = new _crafts_food_parcel__WEBPACK_IMPORTED_MODULE_87__["default"](), _a[_crafts_four_cheese_pizza__WEBPACK_IMPORTED_MODULE_190__["default"].name] = new _crafts_four_cheese_pizza__WEBPACK_IMPORTED_MODULE_190__["default"](), _a[_crafts_gasoline__WEBPACK_IMPORTED_MODULE_88__["default"].name] = new _crafts_gasoline__WEBPACK_IMPORTED_MODULE_88__["default"](), _a[_crafts_gift_parcel__WEBPACK_IMPORTED_MODULE_14__["default"].name] = new _crafts_gift_parcel__WEBPACK_IMPORTED_MODULE_14__["default"](), _a[_crafts_glue__WEBPACK_IMPORTED_MODULE_191__["default"].name] = new _crafts_glue__WEBPACK_IMPORTED_MODULE_191__["default"](), _a[_crafts_gold__WEBPACK_IMPORTED_MODULE_192__["default"].name] = new _crafts_gold__WEBPACK_IMPORTED_MODULE_192__["default"](), _a[_crafts_gold_jump_ring__WEBPACK_IMPORTED_MODULE_193__["default"].name] = new _crafts_gold_jump_ring__WEBPACK_IMPORTED_MODULE_193__["default"](), _a[_crafts_gold_ore__WEBPACK_IMPORTED_MODULE_194__["default"].name] = new _crafts_gold_ore__WEBPACK_IMPORTED_MODULE_194__["default"](), _a[_crafts_gold_plated_heart_pendant__WEBPACK_IMPORTED_MODULE_195__["default"].name] = new _crafts_gold_plated_heart_pendant__WEBPACK_IMPORTED_MODULE_195__["default"](), _a[_crafts_golden_heart_necklace__WEBPACK_IMPORTED_MODULE_196__["default"].name] = new _crafts_golden_heart_necklace__WEBPACK_IMPORTED_MODULE_196__["default"](), _a[_crafts_heart_shaped_print__WEBPACK_IMPORTED_MODULE_197__["default"].name] = new _crafts_heart_shaped_print__WEBPACK_IMPORTED_MODULE_197__["default"](), _a[_crafts_honey__WEBPACK_IMPORTED_MODULE_89__["default"].name] = new _crafts_honey__WEBPACK_IMPORTED_MODULE_89__["default"](), _a[_crafts_honeycomb__WEBPACK_IMPORTED_MODULE_90__["default"].name] = new _crafts_honeycomb__WEBPACK_IMPORTED_MODULE_90__["default"](), _a[_crafts_husk_rice___WEBPACK_IMPORTED_MODULE_198__["default"].name] = new _crafts_husk_rice___WEBPACK_IMPORTED_MODULE_198__["default"](), _a[_crafts_ice_block__WEBPACK_IMPORTED_MODULE_199__["default"].name] = new _crafts_ice_block__WEBPACK_IMPORTED_MODULE_199__["default"](), _a[_crafts_iron__WEBPACK_IMPORTED_MODULE_43__["default"].name] = new _crafts_iron__WEBPACK_IMPORTED_MODULE_43__["default"](), _a[_crafts_jack_o_lantern__WEBPACK_IMPORTED_MODULE_91__["default"].name] = new _crafts_jack_o_lantern__WEBPACK_IMPORTED_MODULE_91__["default"](), _a[_crafts_jam__WEBPACK_IMPORTED_MODULE_92__["default"].name] = new _crafts_jam__WEBPACK_IMPORTED_MODULE_92__["default"](), _a[_crafts_jet_fuel__WEBPACK_IMPORTED_MODULE_93__["default"].name] = new _crafts_jet_fuel__WEBPACK_IMPORTED_MODULE_93__["default"](), _a[_crafts_jewelry_set__WEBPACK_IMPORTED_MODULE_200__["default"].name] = new _crafts_jewelry_set__WEBPACK_IMPORTED_MODULE_200__["default"](), _a[_crafts_lasagna__WEBPACK_IMPORTED_MODULE_201__["default"].name] = new _crafts_lasagna__WEBPACK_IMPORTED_MODULE_201__["default"](), _a[_crafts_lights__WEBPACK_IMPORTED_MODULE_202__["default"].name] = new _crafts_lights__WEBPACK_IMPORTED_MODULE_202__["default"](), _a[_crafts_limestone__WEBPACK_IMPORTED_MODULE_39__["default"].name] = new _crafts_limestone__WEBPACK_IMPORTED_MODULE_39__["default"](), _a[_crafts_lobster_clasp__WEBPACK_IMPORTED_MODULE_203__["default"].name] = new _crafts_lobster_clasp__WEBPACK_IMPORTED_MODULE_203__["default"](), _a[_crafts_lumber__WEBPACK_IMPORTED_MODULE_1__["default"].name] = new _crafts_lumber__WEBPACK_IMPORTED_MODULE_1__["default"](), _a[_crafts_magic_powder__WEBPACK_IMPORTED_MODULE_204__["default"].name] = new _crafts_magic_powder__WEBPACK_IMPORTED_MODULE_204__["default"](), _a[_crafts_milk__WEBPACK_IMPORTED_MODULE_6__["default"].name] = new _crafts_milk__WEBPACK_IMPORTED_MODULE_6__["default"](), _a[_crafts_molten_glass__WEBPACK_IMPORTED_MODULE_205__["default"].name] = new _crafts_molten_glass__WEBPACK_IMPORTED_MODULE_205__["default"](), _a[_crafts_mystic_matter__WEBPACK_IMPORTED_MODULE_206__["default"].name] = new _crafts_mystic_matter__WEBPACK_IMPORTED_MODULE_206__["default"](), _a[_crafts_nectar__WEBPACK_IMPORTED_MODULE_94__["default"].name] = new _crafts_nectar__WEBPACK_IMPORTED_MODULE_94__["default"](), _a[_crafts_oak_barrel__WEBPACK_IMPORTED_MODULE_41__["default"].name] = new _crafts_oak_barrel__WEBPACK_IMPORTED_MODULE_41__["default"](), _a[_crafts_oak_wood__WEBPACK_IMPORTED_MODULE_42__["default"].name] = new _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_42__["default"](), _a[_crafts_party_box__WEBPACK_IMPORTED_MODULE_44__["default"].name] = new _crafts_party_box__WEBPACK_IMPORTED_MODULE_44__["default"](), _a[_crafts_pasta_sauce__WEBPACK_IMPORTED_MODULE_207__["default"].name] = new _crafts_pasta_sauce__WEBPACK_IMPORTED_MODULE_207__["default"](), _a[_crafts_peppermint__WEBPACK_IMPORTED_MODULE_29__["default"].name] = new _crafts_peppermint__WEBPACK_IMPORTED_MODULE_29__["default"](), _a[_crafts_petroleum__WEBPACK_IMPORTED_MODULE_135__["default"].name] = new _crafts_petroleum__WEBPACK_IMPORTED_MODULE_135__["default"](), _a[_crafts_pinot_noir__WEBPACK_IMPORTED_MODULE_95__["default"].name] = new _crafts_pinot_noir__WEBPACK_IMPORTED_MODULE_95__["default"](), _a[_crafts_pinot_noir_grapes__WEBPACK_IMPORTED_MODULE_96__["default"].name] = new _crafts_pinot_noir_grapes__WEBPACK_IMPORTED_MODULE_96__["default"](), _a[_crafts_pizza_base__WEBPACK_IMPORTED_MODULE_208__["default"].name] = new _crafts_pizza_base__WEBPACK_IMPORTED_MODULE_208__["default"](), _a[_crafts_pumpkin__WEBPACK_IMPORTED_MODULE_33__["default"].name] = new _crafts_pumpkin__WEBPACK_IMPORTED_MODULE_33__["default"](), _a[_crafts_pumpkin_pie__WEBPACK_IMPORTED_MODULE_32__["default"].name] = new _crafts_pumpkin_pie__WEBPACK_IMPORTED_MODULE_32__["default"](), _a[_crafts_red_steel__WEBPACK_IMPORTED_MODULE_209__["default"].name] = new _crafts_red_steel__WEBPACK_IMPORTED_MODULE_209__["default"](), _a[_crafts_rice_vinegar__WEBPACK_IMPORTED_MODULE_210__["default"].name] = new _crafts_rice_vinegar__WEBPACK_IMPORTED_MODULE_210__["default"](), _a[_crafts_risotto__WEBPACK_IMPORTED_MODULE_211__["default"].name] = new _crafts_risotto__WEBPACK_IMPORTED_MODULE_211__["default"](), _a[_crafts_rocking_horse__WEBPACK_IMPORTED_MODULE_212__["default"].name] = new _crafts_rocking_horse__WEBPACK_IMPORTED_MODULE_212__["default"](), _a[_crafts_roe__WEBPACK_IMPORTED_MODULE_213__["default"].name] = new _crafts_roe__WEBPACK_IMPORTED_MODULE_213__["default"](), _a[_crafts_salmon__WEBPACK_IMPORTED_MODULE_214__["default"].name] = new _crafts_salmon__WEBPACK_IMPORTED_MODULE_214__["default"](), _a[_crafts_salmon_nigiri__WEBPACK_IMPORTED_MODULE_215__["default"].name] = new _crafts_salmon_nigiri__WEBPACK_IMPORTED_MODULE_215__["default"](), _a[_crafts_salt__WEBPACK_IMPORTED_MODULE_5__["default"].name] = new _crafts_salt__WEBPACK_IMPORTED_MODULE_5__["default"](), _a[_crafts_sangria__WEBPACK_IMPORTED_MODULE_30__["default"].name] = new _crafts_sangria__WEBPACK_IMPORTED_MODULE_30__["default"](), _a[_crafts_seaweed__WEBPACK_IMPORTED_MODULE_216__["default"].name] = new _crafts_seaweed__WEBPACK_IMPORTED_MODULE_216__["default"](), _a[_crafts_shrimp__WEBPACK_IMPORTED_MODULE_217__["default"].name] = new _crafts_shrimp__WEBPACK_IMPORTED_MODULE_217__["default"](), _a[_crafts_shrimp_pizza__WEBPACK_IMPORTED_MODULE_218__["default"].name] = new _crafts_shrimp_pizza__WEBPACK_IMPORTED_MODULE_218__["default"](), _a[_crafts_silica__WEBPACK_IMPORTED_MODULE_38__["default"].name] = new _crafts_silica__WEBPACK_IMPORTED_MODULE_38__["default"](), _a[_crafts_silver__WEBPACK_IMPORTED_MODULE_219__["default"].name] = new _crafts_silver__WEBPACK_IMPORTED_MODULE_219__["default"](), _a[_crafts_silver_jump_ring__WEBPACK_IMPORTED_MODULE_220__["default"].name] = new _crafts_silver_jump_ring__WEBPACK_IMPORTED_MODULE_220__["default"](), _a[_crafts_silver_ore__WEBPACK_IMPORTED_MODULE_221__["default"].name] = new _crafts_silver_ore__WEBPACK_IMPORTED_MODULE_221__["default"](), _a[_crafts_silver_wire__WEBPACK_IMPORTED_MODULE_222__["default"].name] = new _crafts_silver_wire__WEBPACK_IMPORTED_MODULE_222__["default"](), _a[_crafts_stack_box__WEBPACK_IMPORTED_MODULE_136__["default"].name] = new _crafts_stack_box__WEBPACK_IMPORTED_MODULE_136__["default"](), _a[_crafts_steel__WEBPACK_IMPORTED_MODULE_97__["default"].name] = new _crafts_steel__WEBPACK_IMPORTED_MODULE_97__["default"](), _a[_crafts_sterling_silver__WEBPACK_IMPORTED_MODULE_223__["default"].name] = new _crafts_sterling_silver__WEBPACK_IMPORTED_MODULE_223__["default"](), _a[_crafts_sterling_silver_jump_ring__WEBPACK_IMPORTED_MODULE_224__["default"].name] = new _crafts_sterling_silver_jump_ring__WEBPACK_IMPORTED_MODULE_224__["default"](), _a[_crafts_strawberries__WEBPACK_IMPORTED_MODULE_36__["default"].name] = new _crafts_strawberries__WEBPACK_IMPORTED_MODULE_36__["default"](), _a[_crafts_sugar__WEBPACK_IMPORTED_MODULE_24__["default"].name] = new _crafts_sugar__WEBPACK_IMPORTED_MODULE_24__["default"](), _a[_crafts_sugarcane__WEBPACK_IMPORTED_MODULE_34__["default"].name] = new _crafts_sugarcane__WEBPACK_IMPORTED_MODULE_34__["default"](), _a[_crafts_supply_box__WEBPACK_IMPORTED_MODULE_225__["default"].name] = new _crafts_supply_box__WEBPACK_IMPORTED_MODULE_225__["default"](), _a[_crafts_sushi_boat__WEBPACK_IMPORTED_MODULE_226__["default"].name] = new _crafts_sushi_boat__WEBPACK_IMPORTED_MODULE_226__["default"](), _a[_crafts_tomato_paste__WEBPACK_IMPORTED_MODULE_227__["default"].name] = new _crafts_tomato_paste__WEBPACK_IMPORTED_MODULE_227__["default"](), _a[_crafts_tomatoes__WEBPACK_IMPORTED_MODULE_228__["default"].name] = new _crafts_tomatoes__WEBPACK_IMPORTED_MODULE_228__["default"](), _a[_crafts_trick_or_treat_bag__WEBPACK_IMPORTED_MODULE_138__["default"].name] = new _crafts_trick_or_treat_bag__WEBPACK_IMPORTED_MODULE_138__["default"](), _a[_crafts_uniforms__WEBPACK_IMPORTED_MODULE_98__["default"].name] = new _crafts_uniforms__WEBPACK_IMPORTED_MODULE_98__["default"](), _a[_crafts_wasabi__WEBPACK_IMPORTED_MODULE_229__["default"].name] = new _crafts_wasabi__WEBPACK_IMPORTED_MODULE_229__["default"](), _a[_crafts_water__WEBPACK_IMPORTED_MODULE_7__["default"].name] = new _crafts_water__WEBPACK_IMPORTED_MODULE_7__["default"](), _a[_crafts_water_drum__WEBPACK_IMPORTED_MODULE_13__["default"].name] = new _crafts_water_drum__WEBPACK_IMPORTED_MODULE_13__["default"](), _a[_crafts_wax__WEBPACK_IMPORTED_MODULE_99__["default"].name] = new _crafts_wax__WEBPACK_IMPORTED_MODULE_99__["default"](), _a[_crafts_wheat__WEBPACK_IMPORTED_MODULE_20__["default"].name] = new _crafts_wheat__WEBPACK_IMPORTED_MODULE_20__["default"](), _a[_crafts_white_rice__WEBPACK_IMPORTED_MODULE_230__["default"].name] = new _crafts_white_rice__WEBPACK_IMPORTED_MODULE_230__["default"](), _a[_crafts_wine_bottle__WEBPACK_IMPORTED_MODULE_31__["default"].name] = new _crafts_wine_bottle__WEBPACK_IMPORTED_MODULE_31__["default"](), _a[_crafts_wood__WEBPACK_IMPORTED_MODULE_2__["default"].name] = new _crafts_wood__WEBPACK_IMPORTED_MODULE_2__["default"](), _a[_crafts_wooden_box__WEBPACK_IMPORTED_MODULE_100__["default"].name] = new _crafts_wooden_box__WEBPACK_IMPORTED_MODULE_100__["default"](), _a[_crafts_wool__WEBPACK_IMPORTED_MODULE_22__["default"].name] = new _crafts_wool__WEBPACK_IMPORTED_MODULE_22__["default"](), _a[_crafts_wool_yarn__WEBPACK_IMPORTED_MODULE_21__["default"].name] = new _crafts_wool_yarn__WEBPACK_IMPORTED_MODULE_21__["default"](), _a[_crafts_worms__WEBPACK_IMPORTED_MODULE_231__["default"].name] = new _crafts_worms__WEBPACK_IMPORTED_MODULE_231__["default"](), // buildings
_a[_buildings_bakery__WEBPACK_IMPORTED_MODULE_0__["default"].name] = new _buildings_bakery__WEBPACK_IMPORTED_MODULE_0__["default"](), _a[_buildings_beehive__WEBPACK_IMPORTED_MODULE_45__["default"].name] = new _buildings_beehive__WEBPACK_IMPORTED_MODULE_45__["default"](), _a[_buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_15__["default"].name] = new _buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_15__["default"](), _a[_buildings_cakery__WEBPACK_IMPORTED_MODULE_46__["default"].name] = new _buildings_cakery__WEBPACK_IMPORTED_MODULE_46__["default"](), _a[_buildings_candy_shop__WEBPACK_IMPORTED_MODULE_104__["default"].name] = new _buildings_candy_shop__WEBPACK_IMPORTED_MODULE_104__["default"](), _a[_buildings_chicken_coop__WEBPACK_IMPORTED_MODULE_103__["default"].name] = new _buildings_chicken_coop__WEBPACK_IMPORTED_MODULE_103__["default"](), _a[_buildings_chocolate_shop__WEBPACK_IMPORTED_MODULE_26__["default"].name] = new _buildings_chocolate_shop__WEBPACK_IMPORTED_MODULE_26__["default"](), _a[_buildings_copper_panning_site__WEBPACK_IMPORTED_MODULE_143__["default"].name] = new _buildings_copper_panning_site__WEBPACK_IMPORTED_MODULE_143__["default"](), _a[_buildings_fabric_plant__WEBPACK_IMPORTED_MODULE_47__["default"].name] = new _buildings_fabric_plant__WEBPACK_IMPORTED_MODULE_47__["default"](), _a[_buildings_feed_mill__WEBPACK_IMPORTED_MODULE_48__["default"].name] = new _buildings_feed_mill__WEBPACK_IMPORTED_MODULE_48__["default"](), _a[_buildings_fish_farm__WEBPACK_IMPORTED_MODULE_144__["default"].name] = new _buildings_fish_farm__WEBPACK_IMPORTED_MODULE_144__["default"](), _a[_buildings_forge__WEBPACK_IMPORTED_MODULE_145__["default"].name] = new _buildings_forge__WEBPACK_IMPORTED_MODULE_145__["default"](), _a[_buildings_foundry__WEBPACK_IMPORTED_MODULE_146__["default"].name] = new _buildings_foundry__WEBPACK_IMPORTED_MODULE_146__["default"](), _a[_buildings_fuel_storage__WEBPACK_IMPORTED_MODULE_49__["default"].name] = new _buildings_fuel_storage__WEBPACK_IMPORTED_MODULE_49__["default"](), _a[_buildings_glass_factory__WEBPACK_IMPORTED_MODULE_50__["default"].name] = new _buildings_glass_factory__WEBPACK_IMPORTED_MODULE_50__["default"](), _a[_buildings_gold_panning_site__WEBPACK_IMPORTED_MODULE_147__["default"].name] = new _buildings_gold_panning_site__WEBPACK_IMPORTED_MODULE_147__["default"](), _a[_buildings_iron_mine__WEBPACK_IMPORTED_MODULE_51__["default"].name] = new _buildings_iron_mine__WEBPACK_IMPORTED_MODULE_51__["default"](), _a[_buildings_italian_restaurant__WEBPACK_IMPORTED_MODULE_148__["default"].name] = new _buildings_italian_restaurant__WEBPACK_IMPORTED_MODULE_148__["default"](), _a[_buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_149__["default"].name] = new _buildings_jewelry_crafting_table__WEBPACK_IMPORTED_MODULE_149__["default"](), _a[_buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_150__["default"].name] = new _buildings_jewelry_store__WEBPACK_IMPORTED_MODULE_150__["default"](), _a[_buildings_lumber_mill__WEBPACK_IMPORTED_MODULE_52__["default"].name] = new _buildings_lumber_mill__WEBPACK_IMPORTED_MODULE_52__["default"](), _a[_buildings_lumber_yard__WEBPACK_IMPORTED_MODULE_53__["default"].name] = new _buildings_lumber_yard__WEBPACK_IMPORTED_MODULE_53__["default"](), _a[_buildings_master_wizard__WEBPACK_IMPORTED_MODULE_151__["default"].name] = new _buildings_master_wizard__WEBPACK_IMPORTED_MODULE_151__["default"](), _a[_buildings_milk_barn__WEBPACK_IMPORTED_MODULE_54__["default"].name] = new _buildings_milk_barn__WEBPACK_IMPORTED_MODULE_54__["default"](), _a[_buildings_mixing_tent__WEBPACK_IMPORTED_MODULE_152__["default"].name] = new _buildings_mixing_tent__WEBPACK_IMPORTED_MODULE_152__["default"](), _a[_buildings_north_pole_creation_lab__WEBPACK_IMPORTED_MODULE_153__["default"].name] = new _buildings_north_pole_creation_lab__WEBPACK_IMPORTED_MODULE_153__["default"](), _a[_buildings_nuclear_power__WEBPACK_IMPORTED_MODULE_55__["default"].name] = new _buildings_nuclear_power__WEBPACK_IMPORTED_MODULE_55__["default"](), _a[_buildings_oil_pump__WEBPACK_IMPORTED_MODULE_56__["default"].name] = new _buildings_oil_pump__WEBPACK_IMPORTED_MODULE_56__["default"](), _a[_buildings_ore_storage__WEBPACK_IMPORTED_MODULE_154__["default"].name] = new _buildings_ore_storage__WEBPACK_IMPORTED_MODULE_154__["default"](), _a[_buildings_pantry__WEBPACK_IMPORTED_MODULE_57__["default"].name] = new _buildings_pantry__WEBPACK_IMPORTED_MODULE_57__["default"](), _a[_buildings_pottery_shop__WEBPACK_IMPORTED_MODULE_58__["default"].name] = new _buildings_pottery_shop__WEBPACK_IMPORTED_MODULE_58__["default"](), _a[_buildings_power_plant__WEBPACK_IMPORTED_MODULE_59__["default"].name] = new _buildings_power_plant__WEBPACK_IMPORTED_MODULE_59__["default"](), _a[_buildings_refinery__WEBPACK_IMPORTED_MODULE_60__["default"].name] = new _buildings_refinery__WEBPACK_IMPORTED_MODULE_60__["default"](), _a[_buildings_sand_mine__WEBPACK_IMPORTED_MODULE_61__["default"].name] = new _buildings_sand_mine__WEBPACK_IMPORTED_MODULE_61__["default"](), _a[_buildings_santas_factory__WEBPACK_IMPORTED_MODULE_155__["default"].name] = new _buildings_santas_factory__WEBPACK_IMPORTED_MODULE_155__["default"](), _a[_buildings_sauce_facility__WEBPACK_IMPORTED_MODULE_156__["default"].name] = new _buildings_sauce_facility__WEBPACK_IMPORTED_MODULE_156__["default"](), _a[_buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_157__["default"].name] = new _buildings_seafood_warehouse__WEBPACK_IMPORTED_MODULE_157__["default"](), _a[_buildings_shallow_mine__WEBPACK_IMPORTED_MODULE_62__["default"].name] = new _buildings_shallow_mine__WEBPACK_IMPORTED_MODULE_62__["default"](), _a[_buildings_sheep_pen__WEBPACK_IMPORTED_MODULE_63__["default"].name] = new _buildings_sheep_pen__WEBPACK_IMPORTED_MODULE_63__["default"](), _a[_buildings_shrimp_farm__WEBPACK_IMPORTED_MODULE_158__["default"].name] = new _buildings_shrimp_farm__WEBPACK_IMPORTED_MODULE_158__["default"](), _a[_buildings_silo__WEBPACK_IMPORTED_MODULE_64__["default"].name] = new _buildings_silo__WEBPACK_IMPORTED_MODULE_64__["default"](), _a[_buildings_silver_panning_site__WEBPACK_IMPORTED_MODULE_159__["default"].name] = new _buildings_silver_panning_site__WEBPACK_IMPORTED_MODULE_159__["default"](), _a[_buildings_steel_mill__WEBPACK_IMPORTED_MODULE_65__["default"].name] = new _buildings_steel_mill__WEBPACK_IMPORTED_MODULE_65__["default"](), _a[_buildings_storehouse__WEBPACK_IMPORTED_MODULE_66__["default"].name] = new _buildings_storehouse__WEBPACK_IMPORTED_MODULE_66__["default"](), _a[_buildings_sushi_restaurant__WEBPACK_IMPORTED_MODULE_160__["default"].name] = new _buildings_sushi_restaurant__WEBPACK_IMPORTED_MODULE_160__["default"](), _a[_buildings_trough__WEBPACK_IMPORTED_MODULE_67__["default"].name] = new _buildings_trough__WEBPACK_IMPORTED_MODULE_67__["default"](), _a[_buildings_warehouse__WEBPACK_IMPORTED_MODULE_68__["default"].name] = new _buildings_warehouse__WEBPACK_IMPORTED_MODULE_68__["default"](), _a[_buildings_water_facility__WEBPACK_IMPORTED_MODULE_69__["default"].name] = new _buildings_water_facility__WEBPACK_IMPORTED_MODULE_69__["default"](), _a[_buildings_water_pump__WEBPACK_IMPORTED_MODULE_70__["default"].name] = new _buildings_water_pump__WEBPACK_IMPORTED_MODULE_70__["default"](), _a[_buildings_well__WEBPACK_IMPORTED_MODULE_71__["default"].name] = new _buildings_well__WEBPACK_IMPORTED_MODULE_71__["default"](), _a[_buildings_wind_mill__WEBPACK_IMPORTED_MODULE_72__["default"].name] = new _buildings_wind_mill__WEBPACK_IMPORTED_MODULE_72__["default"](), _a[_buildings_wind_pump__WEBPACK_IMPORTED_MODULE_73__["default"].name] = new _buildings_wind_pump__WEBPACK_IMPORTED_MODULE_73__["default"](), _a[_buildings_winery__WEBPACK_IMPORTED_MODULE_74__["default"].name] = new _buildings_winery__WEBPACK_IMPORTED_MODULE_74__["default"](), _a[_buildings_wire_mill__WEBPACK_IMPORTED_MODULE_161__["default"].name] = new _buildings_wire_mill__WEBPACK_IMPORTED_MODULE_161__["default"](), _a[_buildings_wizards_workshop__WEBPACK_IMPORTED_MODULE_162__["default"].name] = new _buildings_wizards_workshop__WEBPACK_IMPORTED_MODULE_162__["default"](), _a[_buildings_wood_shed__WEBPACK_IMPORTED_MODULE_75__["default"].name] = new _buildings_wood_shed__WEBPACK_IMPORTED_MODULE_75__["default"](), _a[_buildings_worm_farm__WEBPACK_IMPORTED_MODULE_163__["default"].name] = new _buildings_worm_farm__WEBPACK_IMPORTED_MODULE_163__["default"](), // crops
_a[_crops_apple_tree__WEBPACK_IMPORTED_MODULE_164__["default"].name] = new _crops_apple_tree__WEBPACK_IMPORTED_MODULE_164__["default"](), _a[_crops_cabernet_vines__WEBPACK_IMPORTED_MODULE_101__["default"].name] = new _crops_cabernet_vines__WEBPACK_IMPORTED_MODULE_101__["default"](), _a[_crops_chardonnay_vines__WEBPACK_IMPORTED_MODULE_102__["default"].name] = new _crops_chardonnay_vines__WEBPACK_IMPORTED_MODULE_102__["default"](), _a[_crops_cocoa_tree__WEBPACK_IMPORTED_MODULE_105__["default"].name] = new _crops_cocoa_tree__WEBPACK_IMPORTED_MODULE_105__["default"](), _a[_crops_corn_field__WEBPACK_IMPORTED_MODULE_141__["default"].name] = new _crops_corn_field__WEBPACK_IMPORTED_MODULE_141__["default"](), _a[_crops_cotton_field__WEBPACK_IMPORTED_MODULE_106__["default"].name] = new _crops_cotton_field__WEBPACK_IMPORTED_MODULE_106__["default"](), _a[_crops_fishing_platform__WEBPACK_IMPORTED_MODULE_165__["default"].name] = new _crops_fishing_platform__WEBPACK_IMPORTED_MODULE_165__["default"](), _a[_crops_oak_tree_farm__WEBPACK_IMPORTED_MODULE_107__["default"].name] = new _crops_oak_tree_farm__WEBPACK_IMPORTED_MODULE_107__["default"](), _a[_crops_peppermint_field__WEBPACK_IMPORTED_MODULE_108__["default"].name] = new _crops_peppermint_field__WEBPACK_IMPORTED_MODULE_108__["default"](), _a[_crops_pinot_noir_vines__WEBPACK_IMPORTED_MODULE_109__["default"].name] = new _crops_pinot_noir_vines__WEBPACK_IMPORTED_MODULE_109__["default"](), _a[_crops_pumpkin_patch__WEBPACK_IMPORTED_MODULE_110__["default"].name] = new _crops_pumpkin_patch__WEBPACK_IMPORTED_MODULE_110__["default"](), _a[_crops_rice_field__WEBPACK_IMPORTED_MODULE_166__["default"].name] = new _crops_rice_field__WEBPACK_IMPORTED_MODULE_166__["default"](), _a[_crops_salt_field__WEBPACK_IMPORTED_MODULE_111__["default"].name] = new _crops_salt_field__WEBPACK_IMPORTED_MODULE_111__["default"](), _a[_crops_seaweed_farm__WEBPACK_IMPORTED_MODULE_167__["default"].name] = new _crops_seaweed_farm__WEBPACK_IMPORTED_MODULE_167__["default"](), _a[_crops_strawberry_farm__WEBPACK_IMPORTED_MODULE_112__["default"].name] = new _crops_strawberry_farm__WEBPACK_IMPORTED_MODULE_112__["default"](), _a[_crops_sugercane_field__WEBPACK_IMPORTED_MODULE_113__["default"].name] = new _crops_sugercane_field__WEBPACK_IMPORTED_MODULE_113__["default"](), _a[_crops_tomato_farm__WEBPACK_IMPORTED_MODULE_168__["default"].name] = new _crops_tomato_farm__WEBPACK_IMPORTED_MODULE_168__["default"](), _a[_crops_tree_farm__WEBPACK_IMPORTED_MODULE_114__["default"].name] = new _crops_tree_farm__WEBPACK_IMPORTED_MODULE_114__["default"](), _a[_crops_wasabi_farm__WEBPACK_IMPORTED_MODULE_169__["default"].name] = new _crops_wasabi_farm__WEBPACK_IMPORTED_MODULE_169__["default"](), _a[_crops_wheat_field__WEBPACK_IMPORTED_MODULE_115__["default"].name] = new _crops_wheat_field__WEBPACK_IMPORTED_MODULE_115__["default"](), _a[_crops_wild_net_fishing__WEBPACK_IMPORTED_MODULE_170__["default"].name] = new _crops_wild_net_fishing__WEBPACK_IMPORTED_MODULE_170__["default"](), // terrains
_a[_terrains_clay_field__WEBPACK_IMPORTED_MODULE_116__["default"].name] = new _terrains_clay_field__WEBPACK_IMPORTED_MODULE_116__["default"](), _a[_terrains_clover_field__WEBPACK_IMPORTED_MODULE_117__["default"].name] = new _terrains_clover_field__WEBPACK_IMPORTED_MODULE_117__["default"](), _a[_terrains_dirt_road__WEBPACK_IMPORTED_MODULE_118__["default"].name] = new _terrains_dirt_road__WEBPACK_IMPORTED_MODULE_118__["default"](), _a[_terrains_meadow__WEBPACK_IMPORTED_MODULE_8__["default"].name] = new _terrains_meadow__WEBPACK_IMPORTED_MODULE_8__["default"](), _a[_terrains_mountains__WEBPACK_IMPORTED_MODULE_119__["default"].name] = new _terrains_mountains__WEBPACK_IMPORTED_MODULE_119__["default"](), _a[_terrains_open_world__WEBPACK_IMPORTED_MODULE_120__["default"].name] = new _terrains_open_world__WEBPACK_IMPORTED_MODULE_120__["default"](), _a[_terrains_paved_road__WEBPACK_IMPORTED_MODULE_121__["default"].name] = new _terrains_paved_road__WEBPACK_IMPORTED_MODULE_121__["default"](), _a[_terrains_pond__WEBPACK_IMPORTED_MODULE_122__["default"].name] = new _terrains_pond__WEBPACK_IMPORTED_MODULE_122__["default"](), _a[_terrains_road__WEBPACK_IMPORTED_MODULE_123__["default"].name] = new _terrains_road__WEBPACK_IMPORTED_MODULE_123__["default"](), // workers
_a[_workers_aquaculturist_house__WEBPACK_IMPORTED_MODULE_137__["default"].name] = new _workers_aquaculturist_house__WEBPACK_IMPORTED_MODULE_137__["default"](), _a[_workers_atv__WEBPACK_IMPORTED_MODULE_124__["default"].name] = new _workers_atv__WEBPACK_IMPORTED_MODULE_124__["default"](), _a[_workers_bee_keeper_house__WEBPACK_IMPORTED_MODULE_125__["default"].name] = new _workers_bee_keeper_house__WEBPACK_IMPORTED_MODULE_125__["default"](), _a[_workers_builder_house__WEBPACK_IMPORTED_MODULE_126__["default"].name] = new _workers_builder_house__WEBPACK_IMPORTED_MODULE_126__["default"](), _a[_workers_farm_house__WEBPACK_IMPORTED_MODULE_127__["default"].name] = new _workers_farm_house__WEBPACK_IMPORTED_MODULE_127__["default"](), _a[_workers_farm_tractor__WEBPACK_IMPORTED_MODULE_128__["default"].name] = new _workers_farm_tractor__WEBPACK_IMPORTED_MODULE_128__["default"](), _a[_workers_forklift__WEBPACK_IMPORTED_MODULE_129__["default"].name] = new _workers_forklift__WEBPACK_IMPORTED_MODULE_129__["default"](), _a[_workers_lumberjack_house__WEBPACK_IMPORTED_MODULE_130__["default"].name] = new _workers_lumberjack_house__WEBPACK_IMPORTED_MODULE_130__["default"](), _a[_workers_panner_bunk_house__WEBPACK_IMPORTED_MODULE_171__["default"].name] = new _workers_panner_bunk_house__WEBPACK_IMPORTED_MODULE_171__["default"](), _a[_workers_panner_house__WEBPACK_IMPORTED_MODULE_172__["default"].name] = new _workers_panner_house__WEBPACK_IMPORTED_MODULE_172__["default"](), _a[_workers_ranch_house__WEBPACK_IMPORTED_MODULE_131__["default"].name] = new _workers_ranch_house__WEBPACK_IMPORTED_MODULE_131__["default"](), _a[_workers_seaweed_farmer_house__WEBPACK_IMPORTED_MODULE_173__["default"].name] = new _workers_seaweed_farmer_house__WEBPACK_IMPORTED_MODULE_173__["default"](), _a[_workers_the_logger_house__WEBPACK_IMPORTED_MODULE_132__["default"].name] = new _workers_the_logger_house__WEBPACK_IMPORTED_MODULE_132__["default"](), _a[_workers_worker_house__WEBPACK_IMPORTED_MODULE_133__["default"].name] = new _workers_worker_house__WEBPACK_IMPORTED_MODULE_133__["default"](), _a);
var productSelector = new _ui_product_selection__WEBPACK_IMPORTED_MODULE_134__["default"]('product-selector', window.products);
productSelector.populate();
productSelector.addEvent();

/***/ }),

/***/ "./src/item.ts":
/*!*********************!*\
  !*** ./src/item.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item =
/** @class */
function () {
  function Item() {}

  return Item;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);

/***/ }),

/***/ "./src/terrains/clay-field.ts":
/*!************************************!*\
  !*** ./src/terrains/clay-field.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_clay_lump__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/clay-lump */ "./src/crafts/clay-lump.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var ClayField =
/** @class */
function (_super) {
  __extends(ClayField, _super);

  function ClayField() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Clay Field";
    _this.price = 10000;
    _this.isNFT = false;
    _this.output = [_crafts_clay_lump__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return ClayField;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClayField);

/***/ }),

/***/ "./src/terrains/clover-field.ts":
/*!**************************************!*\
  !*** ./src/terrains/clover-field.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_nectar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/nectar */ "./src/crafts/nectar.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var CloverField =
/** @class */
function (_super) {
  __extends(CloverField, _super);

  function CloverField() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Clover Field";
    _this.price = 3500;
    _this.isNFT = false;
    _this.output = [_crafts_nectar__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return CloverField;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloverField);

/***/ }),

/***/ "./src/terrains/dirt-road.ts":
/*!***********************************!*\
  !*** ./src/terrains/dirt-road.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _road__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var DirtRoad =
/** @class */
function (_super) {
  __extends(DirtRoad, _super);

  function DirtRoad() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Dirt Road";
    _this.price = 1000;
    _this.isNFT = false;
    return _this;
  }

  return DirtRoad;
}(_road__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DirtRoad);

/***/ }),

/***/ "./src/terrains/meadow.ts":
/*!********************************!*\
  !*** ./src/terrains/meadow.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_feed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/feed */ "./src/crafts/feed.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var Meadow =
/** @class */
function (_super) {
  __extends(Meadow, _super);

  function Meadow() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Meadow";
    _this.price = 500;
    _this.isNFT = false;
    _this.output = [_crafts_feed__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return Meadow;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Meadow);

/***/ }),

/***/ "./src/terrains/mountains.ts":
/*!***********************************!*\
  !*** ./src/terrains/mountains.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var Mountain =
/** @class */
function (_super) {
  __extends(Mountain, _super);

  function Mountain() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Mountain";
    return _this;
  }

  return Mountain;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mountain);

/***/ }),

/***/ "./src/terrains/open-world.ts":
/*!************************************!*\
  !*** ./src/terrains/open-world.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var OpenWorld =
/** @class */
function (_super) {
  __extends(OpenWorld, _super);

  function OpenWorld() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Open World";
    return _this;
  }

  return OpenWorld;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenWorld);

/***/ }),

/***/ "./src/terrains/paved-road.ts":
/*!************************************!*\
  !*** ./src/terrains/paved-road.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dirt_road__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dirt-road */ "./src/terrains/dirt-road.ts");
/* harmony import */ var _road__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var PavedRoad =
/** @class */
function (_super) {
  __extends(PavedRoad, _super);

  function PavedRoad() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Paved Road";
    _this.price = 30000;
    _this.isImprovementOf = _dirt_road__WEBPACK_IMPORTED_MODULE_0__["default"];
    _this.isNFT = false;
    return _this;
  }

  return PavedRoad;
}(_road__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PavedRoad);

/***/ }),

/***/ "./src/terrains/pond.ts":
/*!******************************!*\
  !*** ./src/terrains/pond.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var Pond =
/** @class */
function (_super) {
  __extends(Pond, _super);

  function Pond() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Pond";
    _this.price = 10000;
    _this.isNFT = false;
    return _this;
  }

  return Pond;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pond);

/***/ }),

/***/ "./src/terrains/road.ts":
/*!******************************!*\
  !*** ./src/terrains/road.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var Road =
/** @class */
function (_super) {
  __extends(Road, _super);

  function Road() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Road";
    return _this;
  }

  return Road;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Road);

/***/ }),

/***/ "./src/ui/product-selection.ts":
/*!*************************************!*\
  !*** ./src/ui/product-selection.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ProductSelector =
/** @class */
function () {
  function ProductSelector(elId, productList) {
    this.productSelector = document.getElementById(elId);
    this.productList = productList;
  }

  ProductSelector.prototype.populate = function () {
    var _this = this;

    var options = Object.keys(this.productList).map(function (key) {
      var product = _this.productList[key];
      var option = document.createElement('option');
      option.value = key;
      option.appendChild(document.createTextNode(product.name));
      return option;
    });
    var fragment = document.createDocumentFragment();
    options.forEach(function (option) {
      return fragment.appendChild(option);
    });
    this.productSelector.appendChild(fragment);
  };

  ProductSelector.prototype.addEvent = function () {
    var _this = this;

    this.productSelector.addEventListener('change', function (event) {
      // @ts-ignore
      var treeGenerator = new TreeGenerator('tree-output', 'buildings-output', event.target.value);
      treeGenerator.generate(event.target.value);
      document.getElementById('share-row').classList.add('show');
    });
    Array.from(document.querySelectorAll('.product-quick-access')).forEach(function (item) {
      item.addEventListener('click', function (event) {
        _this.productSelector.value = event.target.getAttribute('data-product-key');

        _this.productSelector.dispatchEvent(new Event('change'));
      });
    });

    if (window.location.hash) {
      setTimeout(function () {
        _this.productSelector.value = window.location.hash.substring(1);

        _this.productSelector.dispatchEvent(new Event('change'));
      }, 100);
    }
  };

  return ProductSelector;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductSelector);

/***/ }),

/***/ "./src/workers/aquaculturist-house.ts":
/*!********************************************!*\
  !*** ./src/workers/aquaculturist-house.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/oak-wood */ "./src/crafts/oak-wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var AquaculturistHouse =
/** @class */
function (_super) {
  __extends(AquaculturistHouse, _super);

  function AquaculturistHouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Aquaculturist House";
    _this.price = 50000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 5
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return AquaculturistHouse;
}(_item__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AquaculturistHouse);

/***/ }),

/***/ "./src/workers/atv.ts":
/*!****************************!*\
  !*** ./src/workers/atv.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _ranch_house__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ranch-house */ "./src/workers/ranch-house.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var ATV =
/** @class */
function (_super) {
  __extends(ATV, _super);

  function ATV() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "ATV";
    _this.price = 75000;
    _this.isNFT = false;
    _this.isImprovementOf = _ranch_house__WEBPACK_IMPORTED_MODULE_6__["default"];
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return ATV;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ATV);

/***/ }),

/***/ "./src/workers/bee-keeper-house.ts":
/*!*****************************************!*\
  !*** ./src/workers/bee-keeper-house.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var BeeKeeperHouse =
/** @class */
function (_super) {
  __extends(BeeKeeperHouse, _super);

  function BeeKeeperHouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Bee Keeper House";
    _this.price = 7500;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return BeeKeeperHouse;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BeeKeeperHouse);

/***/ }),

/***/ "./src/workers/builder-house.ts":
/*!**************************************!*\
  !*** ./src/workers/builder-house.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var BuilderHouse =
/** @class */
function (_super) {
  __extends(BuilderHouse, _super);

  function BuilderHouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Builder House";
    _this.price = 2500;
    _this.isNFT = false;
    return _this;
  }

  return BuilderHouse;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuilderHouse);

/***/ }),

/***/ "./src/workers/farm-house.ts":
/*!***********************************!*\
  !*** ./src/workers/farm-house.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var FarmHouse =
/** @class */
function (_super) {
  __extends(FarmHouse, _super);

  function FarmHouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Farm House";
    _this.price = 1250;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 1
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return FarmHouse;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FarmHouse);

/***/ }),

/***/ "./src/workers/farm-tractor.ts":
/*!*************************************!*\
  !*** ./src/workers/farm-tractor.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _farm_house__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./farm-house */ "./src/workers/farm-house.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var FarmTractor =
/** @class */
function (_super) {
  __extends(FarmTractor, _super);

  function FarmTractor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Farm Tractor";
    _this.price = 75000;
    _this.isNFT = false;
    _this.isImprovementOf = _farm_house__WEBPACK_IMPORTED_MODULE_6__["default"];
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return FarmTractor;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FarmTractor);

/***/ }),

/***/ "./src/workers/forklift.ts":
/*!*********************************!*\
  !*** ./src/workers/forklift.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var Forklift =
/** @class */
function (_super) {
  __extends(Forklift, _super);

  function Forklift() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Forklift";
    _this.price = 75000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return Forklift;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Forklift);

/***/ }),

/***/ "./src/workers/lumberjack-house.ts":
/*!*****************************************!*\
  !*** ./src/workers/lumberjack-house.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var LumberjackHouse =
/** @class */
function (_super) {
  __extends(LumberjackHouse, _super);

  function LumberjackHouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Lumberjack House";
    _this.isNFT = false;
    _this.price = 2500;
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return LumberjackHouse;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LumberjackHouse);

/***/ }),

/***/ "./src/workers/panner-bunk-house.ts":
/*!******************************************!*\
  !*** ./src/workers/panner-bunk-house.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var PannerBunkHouse =
/** @class */
function (_super) {
  __extends(PannerBunkHouse, _super);

  function PannerBunkHouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Panner Bunk House";
    _this.price = 75000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 5
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return PannerBunkHouse;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PannerBunkHouse);

/***/ }),

/***/ "./src/workers/panner-house.ts":
/*!*************************************!*\
  !*** ./src/workers/panner-house.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var PannerHouse =
/** @class */
function (_super) {
  __extends(PannerHouse, _super);

  function PannerHouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Panner House";
    _this.price = 1500;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 1
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return PannerHouse;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PannerHouse);

/***/ }),

/***/ "./src/workers/ranch-house.ts":
/*!************************************!*\
  !*** ./src/workers/ranch-house.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var RanchHouse =
/** @class */
function (_super) {
  __extends(RanchHouse, _super);

  function RanchHouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Ranch House";
    _this.isNFT = false;
    _this.price = 1250;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_2__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_1__["default"]];
    return _this;
  }

  return RanchHouse;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RanchHouse);

/***/ }),

/***/ "./src/workers/seaweed-farmer-house.ts":
/*!*********************************************!*\
  !*** ./src/workers/seaweed-farmer-house.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crafts/oak-wood */ "./src/crafts/oak-wood.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();








var SeaweedFarmerHouse =
/** @class */
function (_super) {
  __extends(SeaweedFarmerHouse, _super);

  function SeaweedFarmerHouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Seaweed Farmer House";
    _this.price = 100000;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return SeaweedFarmerHouse;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SeaweedFarmerHouse);

/***/ }),

/***/ "./src/workers/the-logger-house.ts":
/*!*****************************************!*\
  !*** ./src/workers/the-logger-house.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crafts/lumber */ "./src/crafts/lumber.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _crafts_energy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crafts/energy */ "./src/crafts/energy.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
/* harmony import */ var _lumberjack_house__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lumberjack-house */ "./src/workers/lumberjack-house.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();









var TheLoggerHouse =
/** @class */
function (_super) {
  __extends(TheLoggerHouse, _super);

  function TheLoggerHouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "The Logger House";
    _this.price = 75000;
    _this.isNFT = false;
    _this.isImprovementOf = _lumberjack_house__WEBPACK_IMPORTED_MODULE_6__["default"];
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_lumber__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_energy__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 5
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return TheLoggerHouse;
}(_item__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TheLoggerHouse);

/***/ }),

/***/ "./src/workers/worker-house.ts":
/*!*************************************!*\
  !*** ./src/workers/worker-house.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _craft_requirement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../craft-requirement */ "./src/craft-requirement.ts");
/* harmony import */ var _crafts_wood__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../crafts/wood */ "./src/crafts/wood.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item */ "./src/item.ts");
/* harmony import */ var _terrains_road__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../terrains/road */ "./src/terrains/road.ts");
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();






var WorkerHouse =
/** @class */
function (_super) {
  __extends(WorkerHouse, _super);

  function WorkerHouse() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Worker House";
    _this.price = 2500;
    _this.isNFT = false;
    _this.buildRequirements = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_0__.createRequirement)({
      craft: _crafts_wood__WEBPACK_IMPORTED_MODULE_1__["default"],
      quantity: 1
    })];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_3__["default"]];
    return _this;
  }

  return WorkerHouse;
}(_item__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkerHouse);

/***/ }),

/***/ "./scss/index.scss":
/*!*************************!*\
  !*** ./scss/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/index": 0,
/******/ 			"css/index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkTown_Star_Products"] = self["webpackChunkTown_Star_Products"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/index"], () => (__webpack_require__("./src/index.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/index"], () => (__webpack_require__("./scss/index.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;