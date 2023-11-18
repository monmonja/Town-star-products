import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Warehouse from "../buildings/warehouse";
import Forge from "../buildings/forge";
import Wood from "./wood";
import GoldOre from "./gold-ore";

export default class GoldJumpRing extends Craft {
  name = "Gold Jump Ring";

  requires = [
    createRequirement({ craft: GoldOre, quantity: 3 }),
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  generatedFrom = [
    Forge,
  ];

  storage = [
    Warehouse,
  ];
}
