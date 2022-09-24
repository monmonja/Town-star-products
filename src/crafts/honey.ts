import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Nectar from "./nectar";
import Lumber from "./lumber";
import CeramicBowl from "./ceramic-bowl";
import Beehive from "../buildings/beehive";
import Pantry from "../buildings/pantry";

export default class Honey extends Craft {
  name = "Honey";

  requires = [
    createRequirement({ craft: Nectar, quantity: 3 }),
    createRequirement({ craft: Lumber, quantity: 1 }),
    createRequirement({ craft: CeramicBowl, quantity: 1 }),
  ];

  generatedFrom = [
    Beehive,
  ];

  storage = [
    Pantry,
  ];
}