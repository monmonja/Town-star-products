import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Warehouse from "../buildings/warehouse";
import Forge from "../buildings/forge";
import Wood from "./wood";
import GoldOre from "./gold-ore";

export default class GoldWire extends Craft {
  name = "Gold Wire";

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
