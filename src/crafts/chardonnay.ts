import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import ChardonnayGrapes from "./chardonnay-grapes";
import WineBottle from "./wine-bottle";
import OakBarrel from "./oak-barrel";
import Storehouse from "../buildings/storehouse";
import Winery from "../buildings/winery";

export default class Chardonnay extends Craft {
  name = "Chardonnay";

  requires = [
    createRequirement({ craft: ChardonnayGrapes, quantity: 6 }),
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
