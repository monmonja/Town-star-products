import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import SugercaneField from "../crops/sugercane-field";
import Silo from "../buildings/silo";
import CeramicBowl from "./ceramic-bowl";
import Wax from "./wax";
import WoodenBox from "./wooden-box";
import PotteryShop from "../buildings/pottery-shop";
import Warehouse from "../buildings/warehouse";

export default class SupplyBox extends Craft {
  name = "Supply Box";

  requires = [
    createRequirement({ craft: CeramicBowl, quantity: 2 }),
    createRequirement({ craft: Wax, quantity: 2 }),
    createRequirement({ craft: WoodenBox, quantity: 1 }),
  ];

  generatedFrom = [
    PotteryShop,
  ];

  storage = [
    Warehouse,
  ];
}
