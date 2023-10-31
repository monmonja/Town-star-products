import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import WindMill from "../buildings/wind-mill";
import Corn from "./corn";
import Wood from "./wood";
import Storehouse from "../buildings/storehouse";

export default class CornStarch extends Craft {
  name = "Corn Starch";

  requires = [
    createRequirement({ craft: Corn, quantity: 4 }),
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  generatedFrom = [
    WindMill,
  ];

  storage = [
    Storehouse,
  ];
}
