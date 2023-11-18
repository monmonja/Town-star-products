import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import CopperJumpRing from "./copper-jump-ring";
import SilverJumpRing from "./silver-jump-ring";
import LobsterClasp from "./lobster-clasp";
import JewelryCraftingTable from "../buildings/jewelry-crafting-table";
import JewelryStore from "../buildings/jewelry-store";

export default class Bracelet extends Craft {
  name = "Bracelet";

  requires = [
    createRequirement({ craft: CopperJumpRing, quantity: 6 }),
    createRequirement({ craft: SilverJumpRing, quantity: 3 }),
    createRequirement({ craft: LobsterClasp, quantity: 1 }),
  ];

  generatedFrom = [
    JewelryCraftingTable,
  ];

  storage = [
    JewelryStore,
  ];
}
