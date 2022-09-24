import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Energy from "./energy";
import CottonYarn from "./cotton-yarn";
import WoolYarn from "./wool-yarn";
import FabricPlant from "../buildings/fabric-plant";
import Warehouse from "../buildings/warehouse";

export default class Uniforms extends Craft {
  name = "Uniforms";

  requires = [
    createRequirement({ craft: CottonYarn, quantity: 3 }),
    createRequirement({ craft: WoolYarn, quantity: 1 }),
    createRequirement({ craft: Energy, quantity: 3 })
  ];

  generatedFrom = [
    FabricPlant,
  ];

  storage = [
    Warehouse,
  ];
}