import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import StrawberryFarm from "../crops/strawberry-farm";
import Silo from "../buildings/silo";

export default class Strawberries extends Craft {
  name = "Strawberries";

  requires = [
    createRequirement({ craft: Water, quantity: 2, drawInline: true })
  ];

  generatedFrom = [
    StrawberryFarm,
  ];

  storage = [
    Silo,
  ];
}
