import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Milk from "./milk";
import Storehouse from "../buildings/storehouse";
import MixingTent from "../buildings/mixing-tent";
import Water from "./water";
import WhiteRice from "./white-rice";
import Sugarcane from "./sugarcane";

export default class RiceVinegar extends Craft {
  name = "Rice Vinegar";

  requires = [
    createRequirement({ craft: Water, quantity: 2 }),
    createRequirement({ craft: WhiteRice, quantity: 1 }),
    createRequirement({ craft: Sugarcane, quantity: 1 }),
  ];

  generatedFrom = [
    MixingTent,
  ];

  storage = [
    Storehouse,
  ];
}
