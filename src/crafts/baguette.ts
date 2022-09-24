import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Butter from "./butter";
import Storehouse from "../buildings/storehouse";
import Dough from "./dough";
import Wood from "./wood";
import Bakery from "../buildings/bakery";

export default class Baguette extends Craft {
  name = "Baguette";

  requires = [
    createRequirement({ craft: Dough, quantity: 2 }),
    createRequirement({ craft: Butter, quantity: 2 }),
    createRequirement({ craft: Wood, quantity: 2 }),
  ];

  generatedFrom = [
    Bakery,
  ];

  storage = [
    Storehouse,
  ];
}