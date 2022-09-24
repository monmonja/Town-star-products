import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import WaterDrum from "./water-drum";
import Petroleum from "./petroleum";
import Refinery from "../buildings/refinery";
import FuelStorage from "../buildings/fuel-storage";

export default class JetFuel extends Craft {
  name = "Jet Fuel";

  requires = [
    createRequirement({ craft: Petroleum, quantity: 3 }),
    createRequirement({ craft: WaterDrum, quantity: 2 }),
    createRequirement({ craft: Energy, quantity: 3 }),
  ];

  generatedFrom = [
    Refinery,
  ];

  storage = [
    FuelStorage,
  ];
}