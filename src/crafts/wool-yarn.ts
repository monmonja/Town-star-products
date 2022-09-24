import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import Lumber from "./lumber";
import Wool from "./wool";
import FabricPlant from "../buildings/fabric-plant";
import Warehouse from "../buildings/warehouse";

export default class WoolYarn extends Craft {
  name = "Wool Yarn";

  requires = [
    createRequirement({ craft: Wool, quantity: 5 }),
    createRequirement({ craft: Lumber, quantity: 1 }),
    createRequirement({ craft: Energy, quantity: 1 })
  ];

  generatedFrom = [
    FabricPlant,
  ];

  storage = [
    Warehouse,
  ];
}