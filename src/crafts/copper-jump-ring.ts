import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import SandMine from "../buildings/sand-mine";
import Warehouse from "../buildings/warehouse";
import WoodenBox from "./wooden-box";
import JewelryCraftingTable from "../buildings/jewelry-crafting-table";
import JewelryStore from "../buildings/jewelry-store";
import CopperWire from "./copper-wire";

export default class CopperJumpRing extends Craft {
  name = "Copper Jump Ring";

  requires = [
    createRequirement({ craft: CopperWire, quantity: 1 }),
  ];

  generatedFrom = [
    JewelryCraftingTable,
  ];

  storage = [
    JewelryStore,
  ];
}
