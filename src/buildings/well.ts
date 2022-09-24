import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Water from "../crafts/water";

export default class Well extends Item implements Buildable, Producer {
  name = "Well";
  price = 1_250;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  output = [
    Water,
  ];
}