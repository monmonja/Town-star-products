import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Cocoa from "./cocoa";
import Sugar from "./sugar";
import Milk from "./milk";
import Storehouse from "../buildings/storehouse";
import ChocolateShop from "../buildings/chocolate-shop";

export default class ChocolateBar extends Craft {
  name = "Chocolate Bar";

  requires = [
    createRequirement({ craft: Cocoa, quantity: 3 }),
    createRequirement({ craft: Sugar, quantity: 2 }),
    createRequirement({ craft: Milk, quantity: 1 }),
  ];

  generatedFrom = [
    ChocolateShop,
  ];

  storage = [
    Storehouse,
  ];
}