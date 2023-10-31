import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import Silo from "../buildings/silo";
import CornField from "../crops/corn-field";

export default class Corn extends Craft {
  name = "Corn";

  requires = [
    createRequirement({ craft: Water, quantity: 2, drawInline: true }),
  ];

  generatedFrom = [
    CornField,
  ];

  storage = [
    Silo,
  ];
}
