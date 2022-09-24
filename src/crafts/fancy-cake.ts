import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Cake from "./cake";
import ChocolateBar from "./chocolate-bar";
import Strawberries from "./strawberries";
import Storehouse from "../buildings/storehouse";
import ChocolateShop from "../buildings/chocolate-shop";

export default class FancyCake extends Craft {
  name = "Fancy Cake";

  requires = [
    createRequirement({ craft: Cake, quantity: 1 }),
    createRequirement({ craft: ChocolateBar, quantity: 3 }),
    createRequirement({ craft: Strawberries, quantity: 2 }),
  ];

  generatedFrom = [
    ChocolateShop,
  ];

  storage = [
    Storehouse,
  ];
}