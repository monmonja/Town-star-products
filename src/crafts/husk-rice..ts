import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import Silo from "../buildings/silo";
import RiceField from "../crops/rice-field";

export default class HuskRice extends Craft {
  name = "Husk Rice";

  requires = [
    createRequirement({ craft: Water, quantity: 8, drawInline: true }),
  ];

  generatedFrom = [
    RiceField,
  ];

  storage = [
    Silo,
  ];
}
