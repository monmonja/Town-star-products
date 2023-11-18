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
import SterlingSilver from "./sterling-silver";
import Silica from "./silica";

export default class SterlingSilverJumpRing extends Craft {
  name = "Sterling Silver Jump Ring";

  requires = [
    createRequirement({ craft: SterlingSilver, quantity: 1 }),
    createRequirement({ craft: Silica, quantity: 1 })
  ];

  generatedFrom = [
    Foundry,
  ];

  storage = [
    Warehouse,
  ];
}
