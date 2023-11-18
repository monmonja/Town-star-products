import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Warehouse from "../buildings/warehouse";
import NorthPoleCreationLab from "../buildings/north-pole-creation-lab";
import MagicPowder from "./magic-powder";
import MysticMatter from "./mystic-matter";
import CandyCanes from "./candy-canes";

export default class BoomCanes extends Craft {
  name = "Boom Canes";

  requires = [
    createRequirement({ craft: MagicPowder, quantity: 2 }),
    createRequirement({ craft: MysticMatter, quantity: 1 }),
    createRequirement({ craft: CandyCanes, quantity: 2 }),
  ];

  generatedFrom = [
    NorthPoleCreationLab,
  ];

  storage = [
    Warehouse,
  ];
}
