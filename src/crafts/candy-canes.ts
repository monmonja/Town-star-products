import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import Peppermint from "./peppermint";
import Sugar from "./sugar";
import CandyShop from "../buildings/candy-shop";
import Storehouse from "../buildings/storehouse";

export default class CandyCanes extends Craft {
  name = "Candy Canes";

  requires = [
    createRequirement({ craft: Peppermint, quantity: 3 }),
    createRequirement({ craft: Sugar, quantity: 3 }),
    createRequirement({ craft: Energy, quantity: 5 }),
  ];

  generatedFrom = [
    CandyShop,
  ];

  storage = [
    Storehouse,
  ];
}