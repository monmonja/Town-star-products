import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import PeppermintField from "../crops/peppermint-field";
import Silo from "../buildings/silo";

export default class Peppermint extends Craft {
  name = "Peppermint";

  requires = [
    createRequirement({ craft: Water, quantity: 3, drawInline: true })
  ];

  generatedFrom = [
    PeppermintField,
  ];

  storage = [
    Silo,
  ];
}
