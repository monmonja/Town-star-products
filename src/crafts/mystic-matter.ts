import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import MasterWizard from "../buildings/master-wizard";
import Warehouse from "../buildings/warehouse";
import Pumpkin from "./pumpkin";
import Brine from "./brine";
import Strawberries from "./strawberries";

export default class MysticMatter extends Craft {
  name = "Mystic Matter";

  requires = [
    createRequirement({ craft: Pumpkin, quantity: 1 }),
    createRequirement({ craft: Brine, quantity: 2 }),
    createRequirement({ craft: Strawberries, quantity: 2 }),
  ];

  generatedFrom = [
    MasterWizard,
  ];

  storage = [
    Warehouse,
  ];
}
