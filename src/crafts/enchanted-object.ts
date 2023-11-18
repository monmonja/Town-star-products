import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import SeafoodWarehouse from "../buildings/seafood-warehouse";
import MasterWizard from "../buildings/master-wizard";
import Peppermint from "./peppermint";
import MysticMatter from "./mystic-matter";
import MoltenGlass from "./molten-glass";

export default class EnchantedObject extends Craft {
  name = "Enchanted Object";

  requires = [
    createRequirement({ craft: MysticMatter, quantity: 1 }),
    createRequirement({ craft: Peppermint, quantity: 3 }),
    createRequirement({ craft: MoltenGlass, quantity: 1 }),
  ];

  generatedFrom = [
    MasterWizard,
  ];

  storage = [
    SeafoodWarehouse,
  ];
}
