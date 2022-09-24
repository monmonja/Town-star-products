import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import CabernetGrapes from "./cabernet-grapes";
import WineBottle from "./wine-bottle";
import OakBarrel from "./oak-barrel";
import Storehouse from "../buildings/storehouse";
import Winery from "../buildings/winery";

export default class CabernetSauvignon extends Craft {
  name = "Cabernet Sauvignon";

  requires = [
    createRequirement({ craft: CabernetGrapes, quantity: 5 }),
    createRequirement({ craft: WineBottle, quantity: 1 }),
    createRequirement({ craft: OakBarrel, quantity: 1 }),
  ];

  generatedFrom = [
    Winery,
  ];

  storage = [
    Storehouse,
  ];
}