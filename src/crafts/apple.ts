import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Butter from "./butter";
import Storehouse from "../buildings/storehouse";
import Dough from "./dough";
import Wood from "./wood";
import Bakery from "../buildings/bakery";
import AppleTree from "../crops/apple-tree";
import Silo from "../buildings/silo";
import Water from "./water";

export default class Apple extends Craft {
  name = "Apple";

  requires = [
    createRequirement({ craft: Water, quantity: 6, drawInline: true }),
  ];

  generatedFrom = [
    AppleTree,
  ];

  storage = [
    Silo,
  ];
}
