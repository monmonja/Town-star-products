import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import Warehouse from "../buildings/warehouse";
import WireMill from "../buildings/wire-mill";
import Copper from "./copper";

export default class CopperWire extends Craft {
  name = "Copper Wire";

  requires = [
    createRequirement({ craft: Copper, quantity: 2 }),
    createRequirement({ craft: Energy, quantity: 1 }),
  ];

  generatedFrom = [
    WireMill,
  ];

  storage = [
    Warehouse,
  ];
}
