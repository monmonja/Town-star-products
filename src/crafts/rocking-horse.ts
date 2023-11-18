import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import OakWood from "./oak-wood";
import EnchantedObject from "./enchanted-object";
import Iron from "./iron";
import SantasFactory from "../buildings/santas-factory";
import Warehouse from "../buildings/warehouse";

export default class RockingHorse extends Craft {
  name = "Rocking Horse";

  requires = [
    createRequirement({ craft: OakWood, quantity: 4 }),
    createRequirement({ craft: EnchantedObject, quantity: 1 }),
    createRequirement({ craft: Iron, quantity: 1 }),
  ];

  generatedFrom = [
    SantasFactory,
  ];

  storage = [
    Warehouse,
  ];
}
