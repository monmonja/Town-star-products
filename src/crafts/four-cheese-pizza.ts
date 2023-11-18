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
import Tomatoes from "./tomatoes";

export default class FourCheesePizza extends Craft {
  name = "Four Cheese Pizza";

  requires = [
    createRequirement({ craft: PizzaBase, quantity: 1 }),
    createRequirement({ craft: Cheese, quantity: 2 }),
    createRequirement({ craft: Tomatoes, quantity: 5 }),
  ];

  generatedFrom = [
    ItalianRestaurant,
  ];

  storage = [
    Storehouse,
  ];
}
