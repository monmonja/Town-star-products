import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Storehouse from "../buildings/storehouse";
import Brine from "./brine";
import Wood from "./wood";
import WindMill from "../buildings/wind-mill";

export default class Salt extends Craft {
  name = "Salt";

  requires = [
    createRequirement({ craft: Brine, quantity: 4 }),
    createRequirement({ craft: Wood, quantity: 2 }),
  ];

  generatedFrom = [
    WindMill,
  ];

  storage = [
    Storehouse,
  ];
}