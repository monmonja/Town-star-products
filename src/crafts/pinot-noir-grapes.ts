import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import Wood from "./wood";
import PinotNoirVines from "../crops/pinot-noir-vines";
import Silo from "../buildings/silo";

export default class PinotNoirGrapes extends Craft {
  name = "Pinot Noir Grapes";

  requires = [
    createRequirement({ craft: Water, quantity: 2 }),
    createRequirement({ craft: Wood, quantity: 1 })
  ];

  generatedFrom = [
    PinotNoirVines,
  ];

  storage = [
    Silo,
  ];
}