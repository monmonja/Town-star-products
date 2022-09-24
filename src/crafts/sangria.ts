import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import CabernetSauvignon from "./cabernet-sauvignon";
import Sugar from "./sugar";
import Strawberries from "./strawberries";
import Winery from "../buildings/winery";
import Storehouse from "../buildings/storehouse";

export default class Sangria extends Craft {
  name = "Sangria";

  requires = [
    createRequirement({ craft: CabernetSauvignon, quantity: 1 }),
    createRequirement({ craft: Sugar, quantity: 2 }),
    createRequirement({ craft: Strawberries, quantity: 2 }),
  ];

  generatedFrom = [
    Winery,
  ];

  storage = [
    Storehouse,
  ];
}