import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Storehouse from "../buildings/storehouse";
import CandyShop from "../buildings/candy-shop";
import ChocolateBar from "./chocolate-bar";
import CandyCorn from "./candy-corn";
import CottonYarn from "./cotton-yarn";

export default class TrickOrTreatBag extends Craft {
  name = "Trick or Treat Bag";

  requires = [
    createRequirement({ craft: ChocolateBar, quantity: 3 }),
    createRequirement({ craft: CandyCorn, quantity: 3 }),
    createRequirement({ craft: CottonYarn, quantity: 1 }),
  ];

  generatedFrom = [
    CandyShop,
  ];

  storage = [
    Storehouse,
  ];
}
