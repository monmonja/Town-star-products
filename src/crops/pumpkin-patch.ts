import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Pumpkin from "../crafts/pumpkin";

export default class PumpkinPatch extends Item implements Buildable, Producer {
  name = "Pumpkin Patch";
  price = 250;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 3 }),
  ];

  output = [
    Pumpkin,
  ];
}