import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Milk from "./milk";
import Salt from "./salt";
import Storehouse from "../buildings/storehouse";
import Bakery from "../buildings/bakery";
import Sugar from "./sugar";

export default class Butter extends Craft {
  name = "Butter";

  requires = [
    createRequirement({ craft: Milk, quantity: 2 }),
    createRequirement({ craft: Salt, quantity: 2 }),
    createRequirement({ craft: Sugar, quantity: 1 })
  ];

  generatedFrom = [
    Bakery,
  ];

  storage = [
    Storehouse,
  ];
}