import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Cakery from "../buildings/cakery";
import Storehouse from "../buildings/storehouse";
import Flour from "./flour";
import Eggs from "./eggs";
import Butter from "./butter";

export default class Batter extends Craft {
  name = "Batter";

  requires = [
    createRequirement({ craft: Flour, quantity: 5 }),
    createRequirement({ craft: Eggs, quantity: 3 }),
    createRequirement({ craft: Butter, quantity: 2 }),
  ];

  generatedFrom = [
    Cakery,
  ];

  storage = [
    Storehouse,
  ];
}