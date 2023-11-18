import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Silica from "./silica";
import Limestone from "./limestone";
import Chromium from "./chromium";
import GlassFactory from "../buildings/glass-factory";
import Warehouse from "../buildings/warehouse";

export default class MoltenGlass extends Craft {
  name = "Molten Glass";

  requires = [
    createRequirement({ craft: Silica, quantity: 4 }),
    createRequirement({ craft: Chromium, quantity: 2 }),
    createRequirement({ craft: Limestone, quantity: 1 }),
  ];

  generatedFrom = [
    GlassFactory,
  ];

  storage = [
    Warehouse,
  ];
}
