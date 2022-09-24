import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Beehive from "../buildings/beehive";
import Warehouse from "../buildings/warehouse";
import Nectar from "./nectar";
import Lumber from "./lumber";
import CeramicBowl from "./ceramic-bowl";

export default class Wax extends Craft {
  name = "Wax";

  requires = [
    createRequirement({ craft: Nectar, quantity: 3 }),
    createRequirement({ craft: Lumber, quantity: 1 }),
    createRequirement({ craft: CeramicBowl, quantity: 1 }),
  ];

  generatedFrom = [
    Beehive,
  ];

  storage = [
    Warehouse,
  ];
}