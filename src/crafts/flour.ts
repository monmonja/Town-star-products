import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Wheat from "./wheat";
import Wood from "./wood";
import WindMill from "../buildings/wind-mill";
import Storehouse from "../buildings/storehouse";

export default class Flour extends Craft {
  name = "Flour";

  requires = [
    createRequirement({ craft: Wheat, quantity: 2 }),
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  generatedFrom = [
    WindMill,
  ];

  storage = [
    Storehouse,
  ];
}