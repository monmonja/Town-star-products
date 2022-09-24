import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import Petroleum from "./petroleum";
import WaterDrum from "./water-drum";
import Refinery from "../buildings/refinery";
import FuelStorage from "../buildings/fuel-storage";

export default class Gasoline extends Craft {
  name = "Gasoline";

  requires = [
    createRequirement({ craft: Petroleum, quantity: 1 }),
    createRequirement({ craft: WaterDrum, quantity: 2 }),
    createRequirement({ craft: Energy, quantity: 6 }),
  ];

  generatedFrom = [
    Refinery,
  ];

  storage = [
    FuelStorage,
  ];
}