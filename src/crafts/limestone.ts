import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Lumber from "./lumber";
import Energy from "./energy";
import WaterDrum from "./water-drum";
import Iron from "./iron";
import ShallowMine from "../buildings/shallow-mine";
import Warehouse from "../buildings/warehouse";

export default class Limestone extends Craft {
  name = "Limestone";

  requires = [
    createRequirement({ craft: Lumber, quantity: 1 }),
    createRequirement({ craft: Energy, quantity: 3 }),
    createRequirement({ craft: WaterDrum, quantity: 2 }),
  ];

  generatedFrom = [
    Iron,
    ShallowMine,
  ];

  storage = [
    Warehouse,
  ];
}