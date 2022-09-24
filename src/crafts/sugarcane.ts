import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import SugercaneField from "../crops/sugercane-field";
import Silo from "../buildings/silo";

export default class Sugarcane extends Craft {
  name = "Sugarcane";

  requires = [
    createRequirement({ craft: Water, quantity: 4 }),
  ];

  generatedFrom = [
    SugercaneField,
  ];

  storage = [
    Silo,
  ];
}