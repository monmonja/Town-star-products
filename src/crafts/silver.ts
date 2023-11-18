import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import SilverOre from "./silver-ore";
import Wood from "./wood";
import Forge from "../buildings/forge";
import Warehouse from "../buildings/warehouse";

export default class Silver extends Craft {
  name = "Silver";

  requires = [
    createRequirement({ craft: SilverOre, quantity: 2 }),
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  generatedFrom = [
    Forge,
  ];

  storage = [
    Warehouse,
  ];
}
