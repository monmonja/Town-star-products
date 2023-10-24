import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import CottonField from "../crops/cotton-field";
import Water from "./water";
import Silo from "../buildings/silo";

export default class Cotton extends Craft {
  name = "Cotton";

  requires = [
    createRequirement({ craft: Water, quantity: 4, drawInline: true }),
  ];

  generatedFrom = [
    CottonField,
  ];

  storage = [
    Silo,
  ];

}
