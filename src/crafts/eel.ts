import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import SeafoodWarehouse from "../buildings/seafood-warehouse";
import FishFarm from "../buildings/fish-farm";
import FoodMix from "./food-mix";

export default class Eel extends Craft {
  name = "Eel";

  requires = [
    createRequirement({ craft: FoodMix, quantity: 1 }),
  ];

  generatedFrom = [
    FishFarm,
  ];

  storage = [
    SeafoodWarehouse,
  ];
}
