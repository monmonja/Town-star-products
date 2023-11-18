import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Butter from "./butter";
import AppleTree from "../crops/apple-tree";
import Silo from "../buildings/silo";
import Flour from "./flour";
import Apple from "./apple";
import CornStarch from "./corn-starch";

export default class ApplePie extends Craft {
  name = "Apple Pie";

  requires = [
    createRequirement({ craft: Flour, quantity: 2 }),
    createRequirement({ craft: Apple, quantity: 5 }),
    createRequirement({ craft: Butter, quantity: 1 }),
    createRequirement({ craft: CornStarch, quantity: 2 }),
  ];

  generatedFrom = [
    AppleTree,
  ];

  storage = [
    Silo,
  ];
}
