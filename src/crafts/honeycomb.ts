import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Nectar from "./nectar";
import Lumber from "./lumber";
import CeramicBowl from "./ceramic-bowl";
import Beehive from "../buildings/beehive";
import Pantry from "../buildings/pantry";

export default class Honeycomb extends Craft {
  name = "Honeycomb";

  requires = [
    createRequirement({ craft: Nectar, quantity: 6 }),
    createRequirement({ craft: Lumber, quantity: 2 }),
    createRequirement({ craft: CeramicBowl, quantity: 1 }),
  ];

  generatedFrom = [
    Beehive,
  ];

  storage = [
    Pantry,
  ];
}