import Craft from "./craft";
import SheepPen from "../buildings/sheep-pen";
import { createRequirement } from "../craft-requirement";
import Feed from "./feed";
import Wood from "./wood";
import Water from "./water";
import Storehouse from "../buildings/storehouse";

export default class Wool extends Craft {
  name = "Wool";

  requires = [
    createRequirement({ craft: Feed, quantity: 8 }),
    createRequirement({ craft: Wood, quantity: 1 }),
    createRequirement({ craft: Water, quantity: 5 }),
  ];

  generatedFrom = [
    SheepPen,
  ];

  storage = [
    Storehouse,
  ];
}