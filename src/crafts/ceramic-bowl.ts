import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import PotteryShop from "../buildings/pottery-shop";
import Warehouse from "../buildings/warehouse";
import ClayLump from "./clay-lump";
import WaterDrum from "./water-drum";
import Energy from "./energy";

export default class CeramicBowl extends Craft {
  name = "Ceramic Bowl";

  requires = [
    createRequirement({ craft: ClayLump, quantity: 2 }),
    createRequirement({ craft: WaterDrum, quantity: 1 }),
    createRequirement({ craft: Energy, quantity: 2 }),
  ];

  generatedFrom = [
    PotteryShop,
  ];

  storage = [
    Warehouse,
  ];
}