import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import SeafoodWarehouse from "../buildings/seafood-warehouse";
import SeaweedFarm from "../crops/seaweed-farm";
import Water from "./water";
import Silo from "../buildings/silo";

export default class Seaweed extends Craft {
  name = "Seaweed";

  requires = [
    createRequirement({ craft: Water, quantity: 2, drawInline: true }),
  ];

  generatedFrom = [
    SeaweedFarm,
  ];

  storage = [
    Silo,
  ];
}
