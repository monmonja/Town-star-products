import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Warehouse from "../buildings/warehouse";
import Forge from "../buildings/forge";
import Wood from "./wood";
import Strawberries from "./strawberries";
import Energy from "./energy";
import ClayLump from "./clay-lump";
import PotteryShop from "../buildings/pottery-shop";
import JewelryStore from "../buildings/jewelry-store";

export default class HeartShapedPrint extends Craft {
  name = "HeartShapedPrint";

  requires = [
    createRequirement({ craft: ClayLump, quantity: 2 }),
    createRequirement({ craft: Energy, quantity: 2 }),
    createRequirement({ craft: Strawberries, quantity: 1 }),
  ];

  generatedFrom = [
    PotteryShop,
  ];

  storage = [
    JewelryStore,
  ];
}
