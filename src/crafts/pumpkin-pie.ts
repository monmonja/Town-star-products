import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Pumpkin from "./pumpkin";
import Sugar from "./sugar";
import Eggs from "./eggs";
import Cakery from "../buildings/cakery";
import Storehouse from "../buildings/storehouse";

export default class PumpkinPie extends Craft {
  name = "Pumpkin Pie";

  requires = [
    createRequirement({ craft: Pumpkin, quantity: 6 }),
    createRequirement({ craft: Sugar, quantity: 5 }),
    createRequirement({ craft: Eggs, quantity: 10 })
  ];

  generatedFrom = [
    Cakery,
  ];

  storage = [
    Storehouse,
  ];
}