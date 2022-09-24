import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import PumpkinPatch from "../crops/pumpkin-patch";
import Silo from "../buildings/silo";

export default class Pumpkin extends Craft {
  name = "Pumpkin";

  requires = [
    createRequirement({ craft: Water, quantity: 10 }),
  ];

  generatedFrom = [
    PumpkinPatch,
  ];

  storage = [
    Silo,
  ];
}