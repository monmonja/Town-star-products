import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import SeafoodWarehouse from "../buildings/seafood-warehouse";
import SushiRestaurant from "../buildings/sushi-restaurant";
import Eel from "./eel";
import WhiteRice from "./white-rice";
import Wasabi from "./wasabi";

export default class EelNigiri extends Craft {
  name = "Eel Nigiri";

  requires = [
    createRequirement({ craft: WhiteRice, quantity: 1 }),
    createRequirement({ craft: Eel, quantity: 1 }),
    createRequirement({ craft: Wasabi, quantity: 1 }),
  ];

  generatedFrom = [
    SushiRestaurant,
  ];

  storage = [
    SeafoodWarehouse,
  ];
}
