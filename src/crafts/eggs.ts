import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Feed from "./feed";
import Wood from "./wood";
import Water from "./water";
import ChickenCoop from "../crops/chicken-coop";
import Storehouse from "../buildings/storehouse";

export default class Eggs extends Craft {
  name = "Eggs";

  requires = [
    createRequirement({ craft: Feed, quantity: 3 }),
    createRequirement({ craft: Wood, quantity: 1 }),
    createRequirement({ craft: Water, quantity: 1 }),
  ];

  generatedFrom = [
    ChickenCoop,
  ];

  storage = [
    Storehouse,
  ];
}