import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import SeafoodWarehouse from "../buildings/seafood-warehouse";
import FishFarm from "../buildings/fish-farm";
import SushiRestaurant from "../buildings/sushi-restaurant";
import Eel from "./eel";
import HuskRice from "./husk-rice.";
import Energy from "./energy";
import MixingTent from "../buildings/mixing-tent";
import Storehouse from "../buildings/storehouse";

export default class WhiteRice extends Craft {
  name = "White Rice";

  requires = [
    createRequirement({ craft: HuskRice, quantity: 2 }),
    createRequirement({ craft: Energy, quantity: 1 }),
  ];

  generatedFrom = [
    MixingTent,
  ];

  storage = [
    Storehouse,
  ];
}
