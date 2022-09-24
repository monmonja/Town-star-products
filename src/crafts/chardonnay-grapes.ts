import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import Wood from "./wood";
import ChardonnayVines from "../crops/chardonnay-vines";
import Silo from "../buildings/silo";

export default class ChardonnayGrapes extends Craft {
  name = "Chardonnay Grapes";

  requires = [
    createRequirement({ craft: Water, quantity: 2 }),
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  generatedFrom = [
    ChardonnayVines,
  ];

  storage = [
    Silo,
  ];
}