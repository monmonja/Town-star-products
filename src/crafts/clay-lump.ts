import Craft from "./craft";
import ClayField from "../terrains/clay-field";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import Warehouse from "../buildings/warehouse";

export default class ClayLump extends Craft {
  name = "Clay Lump";

  requires = [
    createRequirement({ craft: Water, quantity: 3, drawInline: true }),
  ];

  generatedFrom = [
    ClayField,
  ];

  storage = [
    Warehouse,
  ];
}
