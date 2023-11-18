import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Honey from "./honey";
import WizardsWorkshop from "../buildings/wizards-workshop";
import Storehouse from "../buildings/storehouse";
import Honeycomb from "./honeycomb";
import ClayField from "../terrains/clay-field";

export default class Glue extends Craft {
  name = "Glue";

  requires = [
    createRequirement({ craft: Honeycomb, quantity: 1 }),
    createRequirement({ craft: Honey, quantity: 1 }),
    createRequirement({ craft: ClayField, quantity: 2 }),
  ];

  generatedFrom = [
    WizardsWorkshop,
  ];

  storage = [
    Storehouse,
  ];
}
