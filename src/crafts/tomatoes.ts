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
import PizzaBase from "./pizza-base";
import TomatoFarm from "../crops/tomato-farm";
import Water from "./water";

export default class Tomatoes extends Craft {
  name = "Tomatoes";

  requires = [
    createRequirement({ craft: Water, quantity: 3, drawInline: true }),
  ];

  generatedFrom = [
    TomatoFarm,
  ];

  storage = [
    Storehouse,
  ];
}
