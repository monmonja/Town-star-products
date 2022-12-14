import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Steel from "./steel";
import Energy from "./energy";
import Uniforms from "./uniforms";
import SteelMill from "../buildings/steel-mill";
import Warehouse from "../buildings/warehouse";

export default class BlueSteel extends Craft {
  name = "Blue Steel";

  requires = [
    createRequirement({ craft: Steel, quantity: 5 }),
    createRequirement({ craft: Energy, quantity: 10 }),
    createRequirement({ craft: Uniforms, quantity: 1 }),
  ];

  generatedFrom = [
    SteelMill,
  ];

  storage = [
    Warehouse,
  ];
}