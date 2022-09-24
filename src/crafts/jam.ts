import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Strawberries from "./strawberries";
import Sugar from "./sugar";
import WaterDrum from "./water-drum";
import Bakery from "../buildings/bakery";
import Pantry from "../buildings/pantry";

export default class Jam extends Craft {
  name = "Jam";

  requires = [
    createRequirement({ craft: Strawberries, quantity: 10 }),
    createRequirement({ craft: Sugar, quantity: 3 }),
    createRequirement({ craft: WaterDrum, quantity: 1 }),
  ];

  generatedFrom = [
    Bakery,
  ];

  storage = [
    Pantry,
  ];
}