import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Milk from "./milk";
import Storehouse from "../buildings/storehouse";
import MixingTent from "../buildings/mixing-tent";
import JewelryCraftingTable from "../buildings/jewelry-crafting-table";
import JewelryStore from "../buildings/jewelry-store";
import CopperJumpRing from "./copper-jump-ring";
import SilverJumpRing from "./silver-jump-ring";
import SilverWire from "./silver-wire";

export default class ChandelierEarrings extends Craft {
  name = "Chandelier Earrings";

  requires = [
    createRequirement({ craft: CopperJumpRing, quantity: 4 }),
    createRequirement({ craft: SilverJumpRing, quantity: 2 }),
    createRequirement({ craft: SilverWire, quantity: 2 }),
  ];

  generatedFrom = [
    JewelryCraftingTable,
  ];

  storage = [
    JewelryStore,
  ];
}
