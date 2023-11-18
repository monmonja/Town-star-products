import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Warehouse from "../buildings/warehouse";
import CopperOre from "./copper-ore";
import Wood from "./wood";
import Forge from "../buildings/forge";

export default class Copper extends Craft {
  name = "Copper";

  requires = [
    createRequirement({ craft: CopperOre, quantity: 5 }),
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  generatedFrom = [
    Forge,
  ];

  storage = [
    Warehouse,
  ];
}
