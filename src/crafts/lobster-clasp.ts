import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import JewelryCraftingTable from "../buildings/jewelry-crafting-table";
import JewelryStore from "../buildings/jewelry-store";
import Copper from "./copper";
import SilverWire from "./silver-wire";
import CopperJumpRing from "./copper-jump-ring";
import SterlingSilverJumpRing from "./sterling-silver-jump-ring";

export default class LobsterClasp extends Craft {
  name = "Lobster Clasp";

  requires = [
    createRequirement({ craft: SterlingSilverJumpRing, quantity: 1 }),
    createRequirement({ craft: CopperJumpRing, quantity: 1 }),
    createRequirement({ craft: SilverWire, quantity: 1 }),
  ];

  generatedFrom = [
    JewelryCraftingTable,
  ];

  storage = [
    JewelryStore,
  ];
}
