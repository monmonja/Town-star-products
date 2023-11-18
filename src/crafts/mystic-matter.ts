import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Warehouse from "../buildings/warehouse";
import CottonYarn from "./cotton-yarn";
import Limestone from "./limestone";
import WizardsWorkshop from "../buildings/wizards-workshop";
import Glue from "./glue";

export default class MysticMatter extends Craft {
  name = "Mystic Matter";

  requires = [
    createRequirement({ craft: Glue, quantity: 1 }),
    createRequirement({ craft: CottonYarn, quantity: 2 }),
    createRequirement({ craft: Limestone, quantity: 1 }),
  ];

  generatedFrom = [
    WizardsWorkshop,
  ];

  storage = [
    Warehouse,
  ];
}
