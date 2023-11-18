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
import EelNigiri from "./eel-nigiri";
import RiceVinegar from "./rice-vinegar";
import SushiRestaurant from "../buildings/sushi-restaurant";
import Storehouse from "../buildings/storehouse";
import SalmonNigiri from "./salmon-nigiri";

export default class SushiBoat extends Craft {
  name = "Sushi Boat";

  requires = [
    createRequirement({ craft: SalmonNigiri, quantity: 2 }),
    createRequirement({ craft: EelNigiri, quantity: 1 }),
    createRequirement({ craft: RiceVinegar, quantity: 1 }),
  ];

  generatedFrom = [
    SushiRestaurant,
  ];

  storage = [
    Storehouse,
  ];
}
