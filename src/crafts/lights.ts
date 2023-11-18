import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Beehive from "../buildings/beehive";
import Pantry from "../buildings/pantry";
import MoltenGlass from "./molten-glass";
import Energy from "./energy";

export default class Lights extends Craft {
  name = "Lights";

  requires = [
    createRequirement({ craft: Energy, quantity: 3 }),
    createRequirement({ craft: MoltenGlass, quantity: 2 }),
  ];

  generatedFrom = [
    Beehive,
  ];

  storage = [
    Pantry,
  ];
}
