import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import WaterFacility from "../buildings/water-facility";
import Warehouse from "../buildings/warehouse";

export default class WaterDrum extends Craft {
  name = "Water Drum";

  requires = [
    createRequirement({ craft: Water, quantity: 3 }),
  ];

  generatedFrom = [
    WaterFacility,
  ];

  storage = [
    Warehouse,
  ];
}