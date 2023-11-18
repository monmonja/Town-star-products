import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import MixingTent from "../buildings/mixing-tent";
import Storehouse from "../buildings/storehouse";
import Roe from "./roe";
import Worms from "./worms";

export default class FoodMix extends Craft {
  name = "Food Mix";

  requires = [
    createRequirement({ craft: Roe, quantity: 2 }),
    createRequirement({ craft: Worms, quantity: 1 }),
  ];

  generatedFrom = [
    MixingTent,
  ];

  storage = [
    Storehouse,
  ];
}
