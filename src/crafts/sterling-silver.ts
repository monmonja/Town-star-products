import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import Iron from "./iron";
import WaterDrum from "./water-drum";
import SteelMill from "../buildings/steel-mill";
import Warehouse from "../buildings/warehouse";
import Foundry from "../buildings/foundry";
import Copper from "./copper";
import Silver from "./silver";

export default class SterlingSilver extends Craft {
  name = "Sterling Silver";

  requires = [
    createRequirement({ craft: Copper, quantity: 1 }),
    createRequirement({ craft: Silver, quantity: 1 })
  ];

  generatedFrom = [
    Foundry,
  ];

  storage = [
    Warehouse,
  ];
}
