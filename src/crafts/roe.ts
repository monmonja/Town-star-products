import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Seaweed from "./seaweed";
import FishFarm from "../buildings/fish-farm";
import SeafoodWarehouse from "../buildings/seafood-warehouse";

export default class Roe extends Craft {
  name = "Roe";

  requires = [
    createRequirement({ craft: Seaweed, quantity: 1 }),
  ];

  generatedFrom = [
    FishFarm,
  ];

  storage = [
    SeafoodWarehouse,
  ];
}
