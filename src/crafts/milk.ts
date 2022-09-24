import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Storehouse from "../buildings/storehouse";
import Feed from "./feed";
import Wood from "./wood";
import Water from "./water";
import MilkBarn from "../buildings/milk-barn";

export default class Milk extends Craft {
  name = "Milk";

  requires = [
    createRequirement({ craft: Feed, quantity: 8 }),
    createRequirement({ craft: Wood, quantity: 1 }),
    createRequirement({ craft: Water, quantity: 3 }),
  ];

  generatedFrom = [
    MilkBarn,
  ];

  storage = [
    Storehouse,
  ];

}