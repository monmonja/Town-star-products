import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import SandMine from "../buildings/sand-mine";
import Warehouse from "../buildings/warehouse";

export default class Silica extends Craft {
  name = "Silica";

  requires = [
    createRequirement({ craft: Energy, quantity: 2 }),
  ];

  generatedFrom = [
    SandMine,
  ];

  storage = [
    Warehouse,
  ];
}