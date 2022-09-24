import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Silica from "./silica";
import Chromium from "./chromium";
import Limestone from "./limestone";
import GlassFactory from "../buildings/glass-factory";
import Warehouse from "../buildings/warehouse";

export default class WineBottle extends Craft {
  name = "Wine Bottle";

  requires = [
    createRequirement({ craft: Silica, quantity: 3 }),
    createRequirement({ craft: Chromium, quantity: 1 }),
    createRequirement({ craft: Limestone, quantity: 1 }),
  ];

  generatedFrom = [
    GlassFactory,
  ];

  storage = [
    Warehouse,
  ];
}