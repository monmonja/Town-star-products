import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import Lumber from "./lumber";
import WaterDrum from "./water-drum";
import IronMine from "../buildings/iron-mine";
import ShallowMine from "../buildings/shallow-mine";
import Warehouse from "../buildings/warehouse";

export default class Chromium extends Craft {
  name = "Chromium";

  requires = [
    createRequirement({ craft: Lumber, quantity: 1 }),
    createRequirement({ craft: Energy, quantity: 3 }),
    createRequirement({ craft: WaterDrum, quantity: 2 }),
  ];

  generatedFrom = [
    IronMine,
    ShallowMine,
  ];

  storage = [
    Warehouse,
  ];
}