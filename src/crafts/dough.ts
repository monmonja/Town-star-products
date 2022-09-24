import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Flour from "./flour";
import Eggs from "./eggs";
import Butter from "./butter";
import Storehouse from "../buildings/storehouse";
import Bakery from "../buildings/bakery";

export default class Dough extends Craft {
  name = "Dough";

  requires = [
    createRequirement({ craft: Flour, quantity: 5 }),
    createRequirement({ craft: Eggs, quantity: 1 }),
    createRequirement({ craft: Butter, quantity: 1 }),
  ];

  generatedFrom = [
    Bakery,
  ];

  storage = [
    Storehouse,
  ];
}