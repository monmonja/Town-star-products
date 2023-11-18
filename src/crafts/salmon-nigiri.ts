import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import EelNigiri from "./eel-nigiri";
import RiceVinegar from "./rice-vinegar";
import SushiRestaurant from "../buildings/sushi-restaurant";
import Storehouse from "../buildings/storehouse";
import WhiteRice from "./white-rice";
import Salmon from "./salmon";
import Energy from "./energy";

export default class SalmonNigiri extends Craft {
  name = "Salmon Nigiri";

  requires = [
    createRequirement({ craft: WhiteRice, quantity: 1 }),
    createRequirement({ craft: Salmon, quantity: 1 }),
    createRequirement({ craft: Energy, quantity: 3 }),
  ];

  generatedFrom = [
    SushiRestaurant,
  ];

  storage = [
    Storehouse,
  ];
}
