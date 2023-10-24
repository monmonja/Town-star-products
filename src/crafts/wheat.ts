import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import WheatField from "../crops/wheat-field";
import Silo from "../buildings/silo";

export default class Wheat extends Craft {
  name = "Wheat";

  requires = [
    createRequirement({ craft: Water, quantity: 3, drawInline: true }),
  ];

  generatedFrom = [
    WheatField,
  ];

  storage = [
    Silo,
  ];
}
