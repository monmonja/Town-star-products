import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import RiceVinegar from "./rice-vinegar";
import SushiRestaurant from "../buildings/sushi-restaurant";
import Storehouse from "../buildings/storehouse";
import Tomatoes from "./tomatoes";

export default class TomatoPaste extends Craft {
  name = "Tomato Paste";

  requires = [
    createRequirement({ craft: RiceVinegar, quantity: 1 }),
    createRequirement({ craft: Tomatoes, quantity: 3 }),
  ];

  generatedFrom = [
    SushiRestaurant,
  ];

  storage = [
    Storehouse,
  ];
}
