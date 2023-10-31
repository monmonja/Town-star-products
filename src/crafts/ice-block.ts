import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Storehouse from "../buildings/storehouse";
import WaterDrum from "./water-drum";
import Cold from "./cold";
import MasterWizard from "../buildings/master-wizard";

export default class IceBlock extends Craft {
  name = "Ice Block";

  requires = [
    createRequirement({ craft: Cold, quantity: 3 }),
    createRequirement({ craft: WaterDrum, quantity: 2 }),
  ];

  generatedFrom = [
    MasterWizard,
  ];

  storage = [
    Storehouse,
  ];
}
