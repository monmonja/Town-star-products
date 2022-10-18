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
    _this.output = [_crafts_food_parcel__WEBPACK_IMPORTED_MODULE_5__["default"], _crafts_gift_parcel__WEBPACK_IMPORTED_MODULE_6__["default"]];
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
    _this.output = [_crafts_wine_bottle__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.requirements = [_terrains_road__WEBPACK_IMPORTED_MODULE_2__["default"]];
    return _this;
  }

  return GlassFactory;
}(_item__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlassFactory);

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
    _this.output = [_crafts_ceramic_bowl__WEBPACK_IMPORTED_MODULE_5__["default"]];
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
    _this.output = [_crafts_steel__WEBPACK_IMPORTED_MODULE_5__["default"], _crafts_blue_steel__WEBPACK_IMPORTED_MODULE_6__["default"]];
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
    _this.output = [_crafts_water_drum__WEBPACK_IMPORTED_MODULE_4__["default"]];
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
      quantity: 3
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
      quantity: 3
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
      quantity: 3
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
/* harmony import */ var _wood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wood */ "./src/crafts/wood.ts");
/* harmony import */ var _crops_cocoa_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../crops/cocoa-tree */ "./src/crops/cocoa-tree.ts");
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








var Cocoa =
/** @class */
function (_super) {
  __extends(Cocoa, _super);

  function Cocoa() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.name = "Cocoa";
    _this.requires = [(0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _water__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 5
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wood__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 1
    })];
    _this.generatedFrom = [_crops_cocoa_tree__WEBPACK_IMPORTED_MODULE_4__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_5__["default"]];
    return _this;
  }

  return Cocoa;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cocoa);

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
      quantity: 4
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
      craft: _honey__WEBPACK_IMPORTED_MODULE_4__["default"],
      quantity: 1
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _jam__WEBPACK_IMPORTED_MODULE_3__["default"],
      quantity: 2
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _baguette__WEBPACK_IMPORTED_MODULE_2__["default"],
      quantity: 3
    })];
    _this.generatedFrom = [_buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_5__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_6__["default"]];
    return _this;
  }

  return FoodParcel;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FoodParcel);

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
      quantity: 10
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _wax__WEBPACK_IMPORTED_MODULE_5__["default"],
      quantity: 3
    }), (0,_craft_requirement__WEBPACK_IMPORTED_MODULE_1__.createRequirement)({
      craft: _cotton_yarn__WEBPACK_IMPORTED_MODULE_6__["default"],
      quantity: 1
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
      quantity: 5
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
      quantity: 3
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
      quantity: 10
    })];
    _this.generatedFrom = [_crops_pumpkin_patch__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Pumpkin;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pumpkin);

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
      quantity: 2
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
      quantity: 4
    })];
    _this.generatedFrom = [_crops_sugercane_field__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Sugarcane;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sugarcane);

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
      quantity: 3
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
/* harmony import */ var _buildings_warehouse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buildings/warehouse */ "./src/buildings/warehouse.ts");
/* harmony import */ var _buildings_well__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buildings/well */ "./src/buildings/well.ts");
/* harmony import */ var _buildings_wind_pump__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildings/wind-pump */ "./src/buildings/wind-pump.ts");
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
    _this.generatedFrom = [_buildings_well__WEBPACK_IMPORTED_MODULE_2__["default"], _buildings_wind_pump__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_warehouse__WEBPACK_IMPORTED_MODULE_1__["default"]];
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
      quantity: 3
    })];
    _this.generatedFrom = [_crops_wheat_field__WEBPACK_IMPORTED_MODULE_3__["default"]];
    _this.storage = [_buildings_silo__WEBPACK_IMPORTED_MODULE_4__["default"]];
    return _this;
  }

  return Wheat;
}(_craft__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wheat);

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
      building: _crops_tree_farm__WEBPACK_IMPORTED_MODULE_1__["default"]
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
var _a;









































































































































window.products = (_a = {}, // crafts
_a[_crafts_baguette__WEBPACK_IMPORTED_MODULE_11__["default"].name] = new _crafts_baguette__WEBPACK_IMPORTED_MODULE_11__["default"](), _a[_crafts_batter__WEBPACK_IMPORTED_MODULE_18__["default"].name] = new _crafts_batter__WEBPACK_IMPORTED_MODULE_18__["default"](), _a[_crafts_blue_steel__WEBPACK_IMPORTED_MODULE_76__["default"].name] = new _crafts_blue_steel__WEBPACK_IMPORTED_MODULE_76__["default"](), _a[_crafts_brine__WEBPACK_IMPORTED_MODULE_10__["default"].name] = new _crafts_brine__WEBPACK_IMPORTED_MODULE_10__["default"](), _a[_crafts_butter__WEBPACK_IMPORTED_MODULE_4__["default"].name] = new _crafts_butter__WEBPACK_IMPORTED_MODULE_4__["default"](), _a[_crafts_cabernet_grapes__WEBPACK_IMPORTED_MODULE_37__["default"].name] = new _crafts_cabernet_grapes__WEBPACK_IMPORTED_MODULE_37__["default"](), _a[_crafts_cabernet_sauvignon__WEBPACK_IMPORTED_MODULE_35__["default"].name] = new _crafts_cabernet_sauvignon__WEBPACK_IMPORTED_MODULE_35__["default"](), _a[_crafts_cake__WEBPACK_IMPORTED_MODULE_17__["default"].name] = new _crafts_cake__WEBPACK_IMPORTED_MODULE_17__["default"](), _a[_crafts_candy_canes__WEBPACK_IMPORTED_MODULE_28__["default"].name] = new _crafts_candy_canes__WEBPACK_IMPORTED_MODULE_28__["default"](), _a[_crafts_ceramic_bowl__WEBPACK_IMPORTED_MODULE_77__["default"].name] = new _crafts_ceramic_bowl__WEBPACK_IMPORTED_MODULE_77__["default"](), _a[_crafts_chardonnay__WEBPACK_IMPORTED_MODULE_78__["default"].name] = new _crafts_chardonnay__WEBPACK_IMPORTED_MODULE_78__["default"](), _a[_crafts_chardonnay_grapes__WEBPACK_IMPORTED_MODULE_79__["default"].name] = new _crafts_chardonnay_grapes__WEBPACK_IMPORTED_MODULE_79__["default"](), _a[_crafts_chocolate_bar__WEBPACK_IMPORTED_MODULE_25__["default"].name] = new _crafts_chocolate_bar__WEBPACK_IMPORTED_MODULE_25__["default"](), _a[_crafts_chocolate_covered_strawberries__WEBPACK_IMPORTED_MODULE_80__["default"].name] = new _crafts_chocolate_covered_strawberries__WEBPACK_IMPORTED_MODULE_80__["default"](), _a[_crafts_chromium__WEBPACK_IMPORTED_MODULE_40__["default"].name] = new _crafts_chromium__WEBPACK_IMPORTED_MODULE_40__["default"](), _a[_crafts_clay_lump__WEBPACK_IMPORTED_MODULE_81__["default"].name] = new _crafts_clay_lump__WEBPACK_IMPORTED_MODULE_81__["default"](), _a[_crafts_cocoa__WEBPACK_IMPORTED_MODULE_27__["default"].name] = new _crafts_cocoa__WEBPACK_IMPORTED_MODULE_27__["default"](), _a[_crafts_cotton__WEBPACK_IMPORTED_MODULE_82__["default"].name] = new _crafts_cotton__WEBPACK_IMPORTED_MODULE_82__["default"](), _a[_crafts_cotton_yarn__WEBPACK_IMPORTED_MODULE_83__["default"].name] = new _crafts_cotton_yarn__WEBPACK_IMPORTED_MODULE_83__["default"](), _a[_crafts_crude_oil__WEBPACK_IMPORTED_MODULE_12__["default"].name] = new _crafts_crude_oil__WEBPACK_IMPORTED_MODULE_12__["default"](), _a[_crafts_decorated_cake__WEBPACK_IMPORTED_MODULE_16__["default"].name] = new _crafts_decorated_cake__WEBPACK_IMPORTED_MODULE_16__["default"](), _a[_crafts_dough__WEBPACK_IMPORTED_MODULE_84__["default"].name] = new _crafts_dough__WEBPACK_IMPORTED_MODULE_84__["default"](), _a[_crafts_eggs__WEBPACK_IMPORTED_MODULE_23__["default"].name] = new _crafts_eggs__WEBPACK_IMPORTED_MODULE_23__["default"](), _a[_crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"].name] = new _crafts_energy__WEBPACK_IMPORTED_MODULE_3__["default"](), _a[_crafts_fabric_box__WEBPACK_IMPORTED_MODULE_85__["default"].name] = new _crafts_fabric_box__WEBPACK_IMPORTED_MODULE_85__["default"](), _a[_crafts_fancy_cake__WEBPACK_IMPORTED_MODULE_86__["default"].name] = new _crafts_fancy_cake__WEBPACK_IMPORTED_MODULE_86__["default"](), _a[_crafts_feed__WEBPACK_IMPORTED_MODULE_9__["default"].name] = new _crafts_feed__WEBPACK_IMPORTED_MODULE_9__["default"](), _a[_crafts_flour__WEBPACK_IMPORTED_MODULE_19__["default"].name] = new _crafts_flour__WEBPACK_IMPORTED_MODULE_19__["default"](), _a[_crafts_food_parcel__WEBPACK_IMPORTED_MODULE_87__["default"].name] = new _crafts_food_parcel__WEBPACK_IMPORTED_MODULE_87__["default"](), _a[_crafts_gasoline__WEBPACK_IMPORTED_MODULE_88__["default"].name] = new _crafts_gasoline__WEBPACK_IMPORTED_MODULE_88__["default"](), _a[_crafts_gift_parcel__WEBPACK_IMPORTED_MODULE_14__["default"].name] = new _crafts_gift_parcel__WEBPACK_IMPORTED_MODULE_14__["default"](), _a[_crafts_honey__WEBPACK_IMPORTED_MODULE_89__["default"].name] = new _crafts_honey__WEBPACK_IMPORTED_MODULE_89__["default"](), _a[_crafts_honeycomb__WEBPACK_IMPORTED_MODULE_90__["default"].name] = new _crafts_honeycomb__WEBPACK_IMPORTED_MODULE_90__["default"](), _a[_crafts_iron__WEBPACK_IMPORTED_MODULE_43__["default"].name] = new _crafts_iron__WEBPACK_IMPORTED_MODULE_43__["default"](), _a[_crafts_jack_o_lantern__WEBPACK_IMPORTED_MODULE_91__["default"].name] = new _crafts_jack_o_lantern__WEBPACK_IMPORTED_MODULE_91__["default"](), _a[_crafts_jam__WEBPACK_IMPORTED_MODULE_92__["default"].name] = new _crafts_jam__WEBPACK_IMPORTED_MODULE_92__["default"](), _a[_crafts_jet_fuel__WEBPACK_IMPORTED_MODULE_93__["default"].name] = new _crafts_jet_fuel__WEBPACK_IMPORTED_MODULE_93__["default"](), _a[_crafts_limestone__WEBPACK_IMPORTED_MODULE_39__["default"].name] = new _crafts_limestone__WEBPACK_IMPORTED_MODULE_39__["default"](), _a[_crafts_lumber__WEBPACK_IMPORTED_MODULE_1__["default"].name] = new _crafts_lumber__WEBPACK_IMPORTED_MODULE_1__["default"](), _a[_crafts_milk__WEBPACK_IMPORTED_MODULE_6__["default"].name] = new _crafts_milk__WEBPACK_IMPORTED_MODULE_6__["default"](), _a[_crafts_nectar__WEBPACK_IMPORTED_MODULE_94__["default"].name] = new _crafts_nectar__WEBPACK_IMPORTED_MODULE_94__["default"](), _a[_crafts_oak_barrel__WEBPACK_IMPORTED_MODULE_41__["default"].name] = new _crafts_oak_barrel__WEBPACK_IMPORTED_MODULE_41__["default"](), _a[_crafts_oak_wood__WEBPACK_IMPORTED_MODULE_42__["default"].name] = new _crafts_oak_wood__WEBPACK_IMPORTED_MODULE_42__["default"](), _a[_crafts_party_box__WEBPACK_IMPORTED_MODULE_44__["default"].name] = new _crafts_party_box__WEBPACK_IMPORTED_MODULE_44__["default"](), _a[_crafts_peppermint__WEBPACK_IMPORTED_MODULE_29__["default"].name] = new _crafts_peppermint__WEBPACK_IMPORTED_MODULE_29__["default"](), _a[_crafts_petroleum__WEBPACK_IMPORTED_MODULE_135__["default"].name] = new _crafts_petroleum__WEBPACK_IMPORTED_MODULE_135__["default"](), _a[_crafts_pinot_noir__WEBPACK_IMPORTED_MODULE_95__["default"].name] = new _crafts_pinot_noir__WEBPACK_IMPORTED_MODULE_95__["default"](), _a[_crafts_pinot_noir_grapes__WEBPACK_IMPORTED_MODULE_96__["default"].name] = new _crafts_pinot_noir_grapes__WEBPACK_IMPORTED_MODULE_96__["default"](), _a[_crafts_pumpkin__WEBPACK_IMPORTED_MODULE_33__["default"].name] = new _crafts_pumpkin__WEBPACK_IMPORTED_MODULE_33__["default"](), _a[_crafts_pumpkin_pie__WEBPACK_IMPORTED_MODULE_32__["default"].name] = new _crafts_pumpkin_pie__WEBPACK_IMPORTED_MODULE_32__["default"](), _a[_crafts_salt__WEBPACK_IMPORTED_MODULE_5__["default"].name] = new _crafts_salt__WEBPACK_IMPORTED_MODULE_5__["default"](), _a[_crafts_sangria__WEBPACK_IMPORTED_MODULE_30__["default"].name] = new _crafts_sangria__WEBPACK_IMPORTED_MODULE_30__["default"](), _a[_crafts_silica__WEBPACK_IMPORTED_MODULE_38__["default"].name] = new _crafts_silica__WEBPACK_IMPORTED_MODULE_38__["default"](), _a[_crafts_steel__WEBPACK_IMPORTED_MODULE_97__["default"].name] = new _crafts_steel__WEBPACK_IMPORTED_MODULE_97__["default"](), _a[_crafts_strawberries__WEBPACK_IMPORTED_MODULE_36__["default"].name] = new _crafts_strawberries__WEBPACK_IMPORTED_MODULE_36__["default"](), _a[_crafts_sugar__WEBPACK_IMPORTED_MODULE_24__["default"].name] = new _crafts_sugar__WEBPACK_IMPORTED_MODULE_24__["default"](), _a[_crafts_sugarcane__WEBPACK_IMPORTED_MODULE_34__["default"].name] = new _crafts_sugarcane__WEBPACK_IMPORTED_MODULE_34__["default"](), _a[_crafts_uniforms__WEBPACK_IMPORTED_MODULE_98__["default"].name] = new _crafts_uniforms__WEBPACK_IMPORTED_MODULE_98__["default"](), _a[_crafts_water__WEBPACK_IMPORTED_MODULE_7__["default"].name] = new _crafts_water__WEBPACK_IMPORTED_MODULE_7__["default"](), _a[_crafts_water_drum__WEBPACK_IMPORTED_MODULE_13__["default"].name] = new _crafts_water_drum__WEBPACK_IMPORTED_MODULE_13__["default"](), _a[_crafts_wax__WEBPACK_IMPORTED_MODULE_99__["default"].name] = new _crafts_wax__WEBPACK_IMPORTED_MODULE_99__["default"](), _a[_crafts_wheat__WEBPACK_IMPORTED_MODULE_20__["default"].name] = new _crafts_wheat__WEBPACK_IMPORTED_MODULE_20__["default"](), _a[_crafts_wine_bottle__WEBPACK_IMPORTED_MODULE_31__["default"].name] = new _crafts_wine_bottle__WEBPACK_IMPORTED_MODULE_31__["default"](), _a[_crafts_wood__WEBPACK_IMPORTED_MODULE_2__["default"].name] = new _crafts_wood__WEBPACK_IMPORTED_MODULE_2__["default"](), _a[_crafts_wooden_box__WEBPACK_IMPORTED_MODULE_100__["default"].name] = new _crafts_wooden_box__WEBPACK_IMPORTED_MODULE_100__["default"](), _a[_crafts_wool__WEBPACK_IMPORTED_MODULE_22__["default"].name] = new _crafts_wool__WEBPACK_IMPORTED_MODULE_22__["default"](), _a[_crafts_wool_yarn__WEBPACK_IMPORTED_MODULE_21__["default"].name] = new _crafts_wool_yarn__WEBPACK_IMPORTED_MODULE_21__["default"](), // buildings
_a[_buildings_bakery__WEBPACK_IMPORTED_MODULE_0__["default"].name] = new _buildings_bakery__WEBPACK_IMPORTED_MODULE_0__["default"](), _a[_buildings_beehive__WEBPACK_IMPORTED_MODULE_45__["default"].name] = new _buildings_beehive__WEBPACK_IMPORTED_MODULE_45__["default"](), _a[_buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_15__["default"].name] = new _buildings_boxing_facility__WEBPACK_IMPORTED_MODULE_15__["default"](), _a[_buildings_cakery__WEBPACK_IMPORTED_MODULE_46__["default"].name] = new _buildings_cakery__WEBPACK_IMPORTED_MODULE_46__["default"](), _a[_buildings_candy_shop__WEBPACK_IMPORTED_MODULE_104__["default"].name] = new _buildings_candy_shop__WEBPACK_IMPORTED_MODULE_104__["default"](), _a[_buildings_chicken_coop__WEBPACK_IMPORTED_MODULE_103__["default"].name] = new _buildings_chicken_coop__WEBPACK_IMPORTED_MODULE_103__["default"](), _a[_buildings_chocolate_shop__WEBPACK_IMPORTED_MODULE_26__["default"].name] = new _buildings_chocolate_shop__WEBPACK_IMPORTED_MODULE_26__["default"](), _a[_buildings_fabric_plant__WEBPACK_IMPORTED_MODULE_47__["default"].name] = new _buildings_fabric_plant__WEBPACK_IMPORTED_MODULE_47__["default"](), _a[_buildings_feed_mill__WEBPACK_IMPORTED_MODULE_48__["default"].name] = new _buildings_feed_mill__WEBPACK_IMPORTED_MODULE_48__["default"](), _a[_buildings_fuel_storage__WEBPACK_IMPORTED_MODULE_49__["default"].name] = new _buildings_fuel_storage__WEBPACK_IMPORTED_MODULE_49__["default"](), _a[_buildings_glass_factory__WEBPACK_IMPORTED_MODULE_50__["default"].name] = new _buildings_glass_factory__WEBPACK_IMPORTED_MODULE_50__["default"](), _a[_buildings_iron_mine__WEBPACK_IMPORTED_MODULE_51__["default"].name] = new _buildings_iron_mine__WEBPACK_IMPORTED_MODULE_51__["default"](), _a[_buildings_lumber_mill__WEBPACK_IMPORTED_MODULE_52__["default"].name] = new _buildings_lumber_mill__WEBPACK_IMPORTED_MODULE_52__["default"](), _a[_buildings_lumber_yard__WEBPACK_IMPORTED_MODULE_53__["default"].name] = new _buildings_lumber_yard__WEBPACK_IMPORTED_MODULE_53__["default"](), _a[_buildings_milk_barn__WEBPACK_IMPORTED_MODULE_54__["default"].name] = new _buildings_milk_barn__WEBPACK_IMPORTED_MODULE_54__["default"](), _a[_buildings_nuclear_power__WEBPACK_IMPORTED_MODULE_55__["default"].name] = new _buildings_nuclear_power__WEBPACK_IMPORTED_MODULE_55__["default"](), _a[_buildings_oil_pump__WEBPACK_IMPORTED_MODULE_56__["default"].name] = new _buildings_oil_pump__WEBPACK_IMPORTED_MODULE_56__["default"](), _a[_buildings_pantry__WEBPACK_IMPORTED_MODULE_57__["default"].name] = new _buildings_pantry__WEBPACK_IMPORTED_MODULE_57__["default"](), _a[_buildings_pottery_shop__WEBPACK_IMPORTED_MODULE_58__["default"].name] = new _buildings_pottery_shop__WEBPACK_IMPORTED_MODULE_58__["default"](), _a[_buildings_power_plant__WEBPACK_IMPORTED_MODULE_59__["default"].name] = new _buildings_power_plant__WEBPACK_IMPORTED_MODULE_59__["default"](), _a[_buildings_refinery__WEBPACK_IMPORTED_MODULE_60__["default"].name] = new _buildings_refinery__WEBPACK_IMPORTED_MODULE_60__["default"](), _a[_buildings_sand_mine__WEBPACK_IMPORTED_MODULE_61__["default"].name] = new _buildings_sand_mine__WEBPACK_IMPORTED_MODULE_61__["default"](), _a[_buildings_shallow_mine__WEBPACK_IMPORTED_MODULE_62__["default"].name] = new _buildings_shallow_mine__WEBPACK_IMPORTED_MODULE_62__["default"](), _a[_buildings_sheep_pen__WEBPACK_IMPORTED_MODULE_63__["default"].name] = new _buildings_sheep_pen__WEBPACK_IMPORTED_MODULE_63__["default"](), _a[_buildings_silo__WEBPACK_IMPORTED_MODULE_64__["default"].name] = new _buildings_silo__WEBPACK_IMPORTED_MODULE_64__["default"](), _a[_buildings_steel_mill__WEBPACK_IMPORTED_MODULE_65__["default"].name] = new _buildings_steel_mill__WEBPACK_IMPORTED_MODULE_65__["default"](), _a[_buildings_storehouse__WEBPACK_IMPORTED_MODULE_66__["default"].name] = new _buildings_storehouse__WEBPACK_IMPORTED_MODULE_66__["default"](), _a[_buildings_trough__WEBPACK_IMPORTED_MODULE_67__["default"].name] = new _buildings_trough__WEBPACK_IMPORTED_MODULE_67__["default"](), _a[_buildings_warehouse__WEBPACK_IMPORTED_MODULE_68__["default"].name] = new _buildings_warehouse__WEBPACK_IMPORTED_MODULE_68__["default"](), _a[_buildings_water_facility__WEBPACK_IMPORTED_MODULE_69__["default"].name] = new _buildings_water_facility__WEBPACK_IMPORTED_MODULE_69__["default"](), _a[_buildings_water_pump__WEBPACK_IMPORTED_MODULE_70__["default"].name] = new _buildings_water_pump__WEBPACK_IMPORTED_MODULE_70__["default"](), _a[_buildings_well__WEBPACK_IMPORTED_MODULE_71__["default"].name] = new _buildings_well__WEBPACK_IMPORTED_MODULE_71__["default"](), _a[_buildings_wind_mill__WEBPACK_IMPORTED_MODULE_72__["default"].name] = new _buildings_wind_mill__WEBPACK_IMPORTED_MODULE_72__["default"](), _a[_buildings_wind_pump__WEBPACK_IMPORTED_MODULE_73__["default"].name] = new _buildings_wind_pump__WEBPACK_IMPORTED_MODULE_73__["default"](), _a[_buildings_winery__WEBPACK_IMPORTED_MODULE_74__["default"].name] = new _buildings_winery__WEBPACK_IMPORTED_MODULE_74__["default"](), _a[_buildings_wood_shed__WEBPACK_IMPORTED_MODULE_75__["default"].name] = new _buildings_wood_shed__WEBPACK_IMPORTED_MODULE_75__["default"](), // crops
_a[_crops_cabernet_vines__WEBPACK_IMPORTED_MODULE_101__["default"].name] = new _crops_cabernet_vines__WEBPACK_IMPORTED_MODULE_101__["default"](), _a[_crops_chardonnay_vines__WEBPACK_IMPORTED_MODULE_102__["default"].name] = new _crops_chardonnay_vines__WEBPACK_IMPORTED_MODULE_102__["default"](), _a[_crops_cocoa_tree__WEBPACK_IMPORTED_MODULE_105__["default"].name] = new _crops_cocoa_tree__WEBPACK_IMPORTED_MODULE_105__["default"](), _a[_crops_cotton_field__WEBPACK_IMPORTED_MODULE_106__["default"].name] = new _crops_cotton_field__WEBPACK_IMPORTED_MODULE_106__["default"](), _a[_crops_oak_tree_farm__WEBPACK_IMPORTED_MODULE_107__["default"].name] = new _crops_oak_tree_farm__WEBPACK_IMPORTED_MODULE_107__["default"](), _a[_crops_peppermint_field__WEBPACK_IMPORTED_MODULE_108__["default"].name] = new _crops_peppermint_field__WEBPACK_IMPORTED_MODULE_108__["default"](), _a[_crops_pinot_noir_vines__WEBPACK_IMPORTED_MODULE_109__["default"].name] = new _crops_pinot_noir_vines__WEBPACK_IMPORTED_MODULE_109__["default"](), _a[_crops_pumpkin_patch__WEBPACK_IMPORTED_MODULE_110__["default"].name] = new _crops_pumpkin_patch__WEBPACK_IMPORTED_MODULE_110__["default"](), _a[_crops_salt_field__WEBPACK_IMPORTED_MODULE_111__["default"].name] = new _crops_salt_field__WEBPACK_IMPORTED_MODULE_111__["default"](), _a[_crops_strawberry_farm__WEBPACK_IMPORTED_MODULE_112__["default"].name] = new _crops_strawberry_farm__WEBPACK_IMPORTED_MODULE_112__["default"](), _a[_crops_sugercane_field__WEBPACK_IMPORTED_MODULE_113__["default"].name] = new _crops_sugercane_field__WEBPACK_IMPORTED_MODULE_113__["default"](), _a[_crops_tree_farm__WEBPACK_IMPORTED_MODULE_114__["default"].name] = new _crops_tree_farm__WEBPACK_IMPORTED_MODULE_114__["default"](), _a[_crops_wheat_field__WEBPACK_IMPORTED_MODULE_115__["default"].name] = new _crops_wheat_field__WEBPACK_IMPORTED_MODULE_115__["default"](), // terrains
_a[_terrains_clay_field__WEBPACK_IMPORTED_MODULE_116__["default"].name] = new _terrains_clay_field__WEBPACK_IMPORTED_MODULE_116__["default"](), _a[_terrains_clover_field__WEBPACK_IMPORTED_MODULE_117__["default"].name] = new _terrains_clover_field__WEBPACK_IMPORTED_MODULE_117__["default"](), _a[_terrains_dirt_road__WEBPACK_IMPORTED_MODULE_118__["default"].name] = new _terrains_dirt_road__WEBPACK_IMPORTED_MODULE_118__["default"](), _a[_terrains_meadow__WEBPACK_IMPORTED_MODULE_8__["default"].name] = new _terrains_meadow__WEBPACK_IMPORTED_MODULE_8__["default"](), _a[_terrains_mountains__WEBPACK_IMPORTED_MODULE_119__["default"].name] = new _terrains_mountains__WEBPACK_IMPORTED_MODULE_119__["default"](), _a[_terrains_open_world__WEBPACK_IMPORTED_MODULE_120__["default"].name] = new _terrains_open_world__WEBPACK_IMPORTED_MODULE_120__["default"](), _a[_terrains_paved_road__WEBPACK_IMPORTED_MODULE_121__["default"].name] = new _terrains_paved_road__WEBPACK_IMPORTED_MODULE_121__["default"](), _a[_terrains_pond__WEBPACK_IMPORTED_MODULE_122__["default"].name] = new _terrains_pond__WEBPACK_IMPORTED_MODULE_122__["default"](), _a[_terrains_road__WEBPACK_IMPORTED_MODULE_123__["default"].name] = new _terrains_road__WEBPACK_IMPORTED_MODULE_123__["default"](), // workers
_a[_workers_atv__WEBPACK_IMPORTED_MODULE_124__["default"].name] = new _workers_atv__WEBPACK_IMPORTED_MODULE_124__["default"](), _a[_workers_bee_keeper_house__WEBPACK_IMPORTED_MODULE_125__["default"].name] = new _workers_bee_keeper_house__WEBPACK_IMPORTED_MODULE_125__["default"](), _a[_workers_builder_house__WEBPACK_IMPORTED_MODULE_126__["default"].name] = new _workers_builder_house__WEBPACK_IMPORTED_MODULE_126__["default"](), _a[_workers_farm_house__WEBPACK_IMPORTED_MODULE_127__["default"].name] = new _workers_farm_house__WEBPACK_IMPORTED_MODULE_127__["default"](), _a[_workers_farm_tractor__WEBPACK_IMPORTED_MODULE_128__["default"].name] = new _workers_farm_tractor__WEBPACK_IMPORTED_MODULE_128__["default"](), _a[_workers_forklift__WEBPACK_IMPORTED_MODULE_129__["default"].name] = new _workers_forklift__WEBPACK_IMPORTED_MODULE_129__["default"](), _a[_workers_lumberjack_house__WEBPACK_IMPORTED_MODULE_130__["default"].name] = new _workers_lumberjack_house__WEBPACK_IMPORTED_MODULE_130__["default"](), _a[_workers_ranch_house__WEBPACK_IMPORTED_MODULE_131__["default"].name] = new _workers_ranch_house__WEBPACK_IMPORTED_MODULE_131__["default"](), _a[_workers_the_logger_house__WEBPACK_IMPORTED_MODULE_132__["default"].name] = new _workers_the_logger_house__WEBPACK_IMPORTED_MODULE_132__["default"](), _a[_workers_worker_house__WEBPACK_IMPORTED_MODULE_133__["default"].name] = new _workers_worker_house__WEBPACK_IMPORTED_MODULE_133__["default"](), _a);
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