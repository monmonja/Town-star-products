import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import Cotton from "./cotton";
import Lumber from "./lumber";
import FabricPlant from "../buildings/fabric-plant";
import Warehouse from "../buildings/warehouse";

export default class CottonYarn extends Craft {
  name = "Cotton Yarn";

  requires = [
    createRequirement({ craft: Cotton, quantity: 5 }),
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