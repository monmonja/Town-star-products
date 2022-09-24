import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import WoodenBox from "./wooden-box";
import Uniforms from "./uniforms";
import Wax from "./wax";
import FabricPlant from "../buildings/fabric-plant";
import Warehouse from "../buildings/warehouse";

export default class FabricBox extends Craft {
  name = "Fabric Box";

  requires = [
    createRequirement({ craft: WoodenBox, quantity: 1 }),
    createRequirement({ craft: Uniforms, quantity: 3 }),
    createRequirement({ craft: Wax, quantity: 1 }),
  ];

  generatedFrom = [
    FabricPlant,
  ];

  storage = [
    Warehouse,
  ];
}