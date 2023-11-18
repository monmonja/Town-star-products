import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import JewelryCraftingTable from "../buildings/jewelry-crafting-table";
import JewelryStore from "../buildings/jewelry-store";
import Energy from "./energy";
import Silver from "./silver";

export default class SilverWire extends Craft {
  name = "Silver Wire";

  requires = [
    createRequirement({ craft: Silver, quantity: 2 }),
    createRequirement({ craft: Energy, quantity: 1 }),
  ];

  generatedFrom = [
    JewelryCraftingTable,
  ];

  storage = [
    JewelryStore,
  ];
}
