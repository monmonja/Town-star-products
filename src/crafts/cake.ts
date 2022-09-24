import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import Cakery from "../buildings/cakery";
import Storehouse from "../buildings/storehouse";
import Batter from "./batter";
import Sugar from "./sugar";

export default class Cake extends Craft {
  name = "Cake";

  requires = [
    createRequirement({ craft: Batter, quantity: 3 }),
    createRequirement({ craft: Sugar, quantity: 6 }),
    createRequirement({ craft: Energy, quantity: 3 }),
  ];

  generatedFrom = [
    Cakery,
  ];

  storage = [
    Storehouse,
  ];
}