import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import SeafoodWarehouse from "../buildings/seafood-warehouse";
import Seaweed from "./seaweed";
import ShrimpFarm from "../buildings/shrimp-farm";
import PizzaBase from "./pizza-base";
import Shrimp from "./shrimp";
import Energy from "./energy";
import ItalianRestaurant from "../buildings/italian-restaurant";
import Storehouse from "../buildings/storehouse";

export default class ShrimpPizza extends Craft {
  name = "Shrimp Pizza";

  requires = [
    createRequirement({ craft: PizzaBase, quantity: 1 }),
    createRequirement({ craft: Shrimp, quantity: 5 }),
    createRequirement({ craft: Energy, quantity: 3 }),
  ];

  generatedFrom = [
    ItalianRestaurant,
  ];

  storage = [
    Storehouse,
  ];
}
