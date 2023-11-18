import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import SeafoodWarehouse from "../buildings/seafood-warehouse";
import FishFarm from "../buildings/fish-farm";
import SushiRestaurant from "../buildings/sushi-restaurant";
import Eel from "./eel";
import WhiteRice from "./white-rice";
import WasabiFarm from "../crops/wasabi-farm";
import Silica from "./silica";
import Silo from "../buildings/silo";
import Water from "./water";

export default class Wasabi extends Craft {
  name = "Wasabi";

  requires = [
    createRequirement({ craft: Water, quantity: 3, drawInline:true }),
  ];

  generatedFrom = [
    WasabiFarm,
  ];

  storage = [
    Silo,
  ];
}
