import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Warehouse from "../buildings/warehouse";
import MysticMatter from "./mystic-matter";
import SantasFactory from "../buildings/santas-factory";
import BlueSteel from "./blue-steel";
import Lights from "./lights";

export default class Bicycle extends Craft {
  name = "Bicycle";

  requires = [
    createRequirement({ craft: BlueSteel, quantity: 1 }),
    createRequirement({ craft: MysticMatter, quantity: 1 }),
    createRequirement({ craft: Lights, quantity: 2 }),
  ];

  generatedFrom = [
    SantasFactory,
  ];

  storage = [
    Warehouse,
  ];
}
