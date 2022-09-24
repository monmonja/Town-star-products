import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import Refinery from "../buildings/refinery";
import CrudeOil from "./crude-oil";
import WaterDrum from "./water-drum";
import FuelStorage from "../buildings/fuel-storage";

export default class Petroleum extends Craft {
  name = "Petroleum";

  requires = [
    createRequirement({ craft: CrudeOil, quantity: 2 }),
    createRequirement({ craft: WaterDrum, quantity: 1 }),
    createRequirement({ craft: Energy, quantity: 2 }),
  ];

  generatedFrom = [
    Refinery,
  ];

  storage = [
    FuelStorage,
  ];
}