import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import Iron from "./iron";
import WaterDrum from "./water-drum";
import SteelMill from "../buildings/steel-mill";
import Warehouse from "../buildings/warehouse";

export default class Steel extends Craft {
  name = "Steel";

  requires = [
    createRequirement({ craft: Iron, quantity: 10 }),
    createRequirement({ craft: Energy, quantity: 5 }),
    createRequirement({ craft: WaterDrum, quantity: 5 }),
  ];

  generatedFrom = [
    SteelMill,
  ];

  storage = [
    Warehouse,
  ];
}