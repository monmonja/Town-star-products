import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Storehouse from "../buildings/storehouse";
import CornStarch from "./corn-starch";
import Sugar from "./sugar";
import Milk from "./milk";
import Energy from "./energy";
import CandyShop from "../buildings/candy-shop";

export default class CandyCorn extends Craft {
  name = "Candy Corn";

  requires = [
    createRequirement({ craft: CornStarch, quantity: 3 }),
    createRequirement({ craft: Sugar, quantity: 3 }),
    createRequirement({ craft: Milk, quantity: 1 }),
    createRequirement({ craft: Energy, quantity: 2 }),
  ];

  generatedFrom = [
    CandyShop,
  ];

  storage = [
    Storehouse,
  ];
}
