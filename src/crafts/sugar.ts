import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Sugarcane from "./sugarcane";
import Wood from "./wood";
import WindMill from "../buildings/wind-mill";
import Storehouse from "../buildings/storehouse";

export default class Sugar extends Craft {
  name = "Sugar";

  requires = [
    createRequirement({ craft: Sugarcane, quantity: 3 }),
    createRequirement({ craft: Wood, quantity: 1 })
  ];

  generatedFrom = [
    WindMill,
  ];

  storage = [
    Storehouse,
  ];
}