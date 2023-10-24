import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import SaltField from "../crops/salt-field";
import Water from "./water";
import Silo from "../buildings/silo";

export default class Brine extends Craft {
  name = "Brine";

  generatedFrom = [
    SaltField,
  ];

  requires = [
    createRequirement({ craft: Water, quantity: 3, drawInline: true }),
  ];

  storage = [
    Silo,
  ];
}
