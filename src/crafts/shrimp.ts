import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import SeafoodWarehouse from "../buildings/seafood-warehouse";
import Seaweed from "./seaweed";
import ShrimpFarm from "../buildings/shrimp-farm";

export default class Shrimp extends Craft {
  name = "Shrimp";

  requires = [
    createRequirement({ craft: Seaweed, quantity: 2 }),
  ];

  generatedFrom = [
    ShrimpFarm,
  ];

  storage = [
    SeafoodWarehouse,
  ];
}
