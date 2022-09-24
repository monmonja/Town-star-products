import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Cake from "./cake";
import ChocolateBar from "./chocolate-bar";
import CandyCanes from "./candy-canes";
import ChocolateShop from "../buildings/chocolate-shop";
import Storehouse from "../buildings/storehouse";

export default class DecoratedCake extends Craft {
  name = "Decorated Cake";

  requires = [
    createRequirement({ craft: Cake, quantity: 1 }),
    createRequirement({ craft: ChocolateBar, quantity: 1 }),
    createRequirement({ craft: CandyCanes, quantity: 2 }),
  ];

  generatedFrom = [
    ChocolateShop,
  ];

  storage = [
    Storehouse,
  ];
}