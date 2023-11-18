import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import MixingTent from "../buildings/mixing-tent";
import Storehouse from "../buildings/storehouse";
import Roe from "./roe";
import WormFarm from "../buildings/worm-farm";
import Energy from "./energy";
import HuskRice from "./husk-rice.";
import Water from "./water";

export default class Worms extends Craft {
  name = "Worms";

  requires = [
    createRequirement({ craft: HuskRice, quantity: 2 }),
    createRequirement({ craft: Water, quantity: 1 }),
  ];

  generatedFrom = [
    WormFarm,
  ];

  storage = [
    Storehouse,
  ];
}
