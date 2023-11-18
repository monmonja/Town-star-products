import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import SeafoodWarehouse from "../buildings/seafood-warehouse";
import MixingTent from "../buildings/mixing-tent";
import Seaweed from "./seaweed";
import Shrimp from "./shrimp";

export default class FishChum extends Craft {
  name = "Fish Chum";

  requires = [
    createRequirement({ craft: Seaweed, quantity: 1 }),
    createRequirement({ craft: Shrimp, quantity: 2 }),
  ];

  generatedFrom = [
    MixingTent,
  ];

  storage = [
    SeafoodWarehouse,
  ];
}
