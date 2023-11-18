import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Pumpkin from "./pumpkin";
import Sugar from "./sugar";
import Eggs from "./eggs";
import Cakery from "../buildings/cakery";
import Storehouse from "../buildings/storehouse";
import SteelMill from "../buildings/steel-mill";
import Warehouse from "../buildings/warehouse";
import Energy from "./energy";
import Steel from "./steel";
import Strawberries from "./strawberries";

export default class RedSteel extends Craft {
  name = "Pumpkin Pie";

  requires = [
    createRequirement({ craft: Steel, quantity: 3 }),
    createRequirement({ craft: Energy, quantity: 5 }),
    createRequirement({ craft: Strawberries, quantity: 14 })
  ];

  generatedFrom = [
    SteelMill,
  ];

  storage = [
    Warehouse,
  ];
}
