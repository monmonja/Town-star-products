import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Warehouse from "../buildings/warehouse";
import Forge from "../buildings/forge";
import Wood from "./wood";
import JewelryCraftingTable from "../buildings/jewelry-crafting-table";
import JewelryStore from "../buildings/jewelry-store";
import GoldPlatedHeartPendant from "./gold-plated-heart-pendant";
import HeartShapedPrint from "./heart-shaped-print";
import LobsterClasp from "./lobster-clasp";
import SilverJumpRing from "./silver-jump-ring";

export default class GoldenHeartNecklace extends Craft {
  name = "Golden Heart Necklace";

  requires = [
    createRequirement({ craft: GoldPlatedHeartPendant, quantity: 1 }),
    createRequirement({ craft: LobsterClasp, quantity: 1 }),
    createRequirement({ craft: SilverJumpRing, quantity: 5 }),
  ];

  generatedFrom = [
    JewelryCraftingTable,
  ];

  storage = [
    JewelryStore,
  ];
}
