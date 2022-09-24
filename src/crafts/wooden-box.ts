import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import Lumber from "./lumber";
import Wood from "./wood";
import LumberMill from "../buildings/lumber-mill";
import Warehouse from "../buildings/warehouse";

export default class WoodenBox extends Craft {
  name = "Wooden Box";

  requires = [
    createRequirement({ craft: Lumber, quantity: 1 }),
    createRequirement({ craft: Wood, quantity: 2 }),
    createRequirement({ craft: Energy, quantity: 2 }),
  ];

  generatedFrom = [
    LumberMill,
  ];

  storage = [
    Warehouse,
  ];
}