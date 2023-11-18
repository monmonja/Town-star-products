import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Milk from "./milk";
import Storehouse from "../buildings/storehouse";
import WhiteRice from "./white-rice";
import ItalianRestaurant from "../buildings/italian-restaurant";
import Cheese from "./cheese";

export default class Risotto extends Craft {
  name = "Risotto";

  requires = [
    createRequirement({ craft: WhiteRice, quantity: 7 }),
    createRequirement({ craft: Cheese, quantity: 2 }),
    createRequirement({ craft: Milk, quantity: 1 }),
  ];

  generatedFrom = [
    ItalianRestaurant,
  ];

  storage = [
    Storehouse,
  ];
}
