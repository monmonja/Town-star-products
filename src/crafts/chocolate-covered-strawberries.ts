import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import Storehouse from "../buildings/storehouse";
import Strawberries from "./strawberries";
import ChocolateBar from "./chocolate-bar";
import CandyShop from "../buildings/candy-shop";

export default class ChocolateCoveredStrawberries extends Craft {
  name = "Chocolate Covered Strawberries";

  requires = [
    createRequirement({ craft: Strawberries, quantity: 6 }),
    createRequirement({ craft: ChocolateBar, quantity: 2 }),
    createRequirement({ craft: Energy, quantity: 2 }),
  ];

  generatedFrom = [
    CandyShop,
  ];

  storage = [
    Storehouse,
  ];
}