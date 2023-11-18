import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Milk from "./milk";
import Storehouse from "../buildings/storehouse";
import MixingTent from "../buildings/mixing-tent";
import RiceVinegar from "./rice-vinegar";

export default class Cheese extends Craft {
  name = "Cheese";

  requires = [
    createRequirement({ craft: Milk, quantity: 2 }),
    createRequirement({ craft: RiceVinegar, quantity: 1 }),
  ];

  generatedFrom = [
    MixingTent,
  ];

  storage = [
    Storehouse,
  ];
}
