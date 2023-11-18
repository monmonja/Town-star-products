import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Baguette from "./baguette";
import Jam from "./jam";
import Honey from "./honey";
import BoxingFacility from "../buildings/boxing-facility";
import Warehouse from "../buildings/warehouse";
import Cheese from "./cheese";
import ItalianRestaurant from "../buildings/italian-restaurant";
import Storehouse from "../buildings/storehouse";
import Dough from "./dough";
import TomatoPaste from "./tomato-paste";

export default class PizzaBase extends Craft {
  name = "Pizza Base";

  requires = [
    createRequirement({ craft: Dough, quantity: 2 }),
    createRequirement({ craft: Cheese, quantity: 2 }),
    createRequirement({ craft: TomatoPaste, quantity: 1 }),
  ];

  generatedFrom = [
    ItalianRestaurant,
  ];

  storage = [
    Storehouse,
  ];
}
