import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import Wood from "./wood";
import CocoaTree from "../crops/cocoa-tree";
import Silo from "../buildings/silo";

export default class Cocoa extends Craft {
  name = "Cocoa";

  requires = [
    createRequirement({ craft: Water, quantity: 5, drawInline: true }),
  ];

  generatedFrom = [
    CocoaTree,
  ];

  storage = [
    Silo,
  ];
}
