import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Lumber from "../crafts/lumber";
import Producer from "../producer";
import Item from "../item";
import Cocoa from "../crafts/cocoa";

export default class CocoaTree extends Item implements Buildable, Producer {
  name = "Cocoa Tree";
  price = 2_500;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 1 }),
  ];

  output = [
    Cocoa,
  ];
}