import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import JewelryCraftingTable from "../buildings/jewelry-crafting-table";
import JewelryStore from "../buildings/jewelry-store";
import SilverWire from "./silver-wire";

export default class SilverJumpRing extends Craft {
  name = "Silver Jump Ring";

  requires = [
    createRequirement({ craft: SilverWire, quantity: 1 }),
  ];

  generatedFrom = [
    JewelryCraftingTable,
  ];

  storage = [
    JewelryStore,
  ];
}
