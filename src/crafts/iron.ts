import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Lumber from "./lumber";
import Energy from "./energy";
import WaterDrum from "./water-drum";
import IronMine from "../buildings/iron-mine";
import ShallowMine from "../buildings/shallow-mine";
import Warehouse from "../buildings/warehouse";

export default class Iron extends Craft {
  name = "Iron";

  requires = [
    createRequirement({ craft: Lumber, quantity: 1 }),
    createRequirement({ craft: Energy, quantity: 1 }),
    createRequirement({ craft: WaterDrum, quantity: 1 }),
  ];

  generatedFrom = [
    IronMine,
    ShallowMine,
  ];

  storage = [
    Warehouse,
  ];
}