import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import PotteryShop from "../buildings/pottery-shop";
import Warehouse from "../buildings/warehouse";
import Pumpkin from "./pumpkin";
import Wax from "./wax";
import CottonYarn from "./cotton-yarn";

export default class JackOLantern extends Craft {
  name = "Jack O Lantern";

  requires = [
    createRequirement({ craft: Pumpkin, quantity: 1 }),
    createRequirement({ craft: Wax, quantity: 2 }),
    createRequirement({ craft: CottonYarn, quantity: 2 }),
  ];

  generatedFrom = [
    PotteryShop,
  ];

  storage = [
    Warehouse,
  ];
}
