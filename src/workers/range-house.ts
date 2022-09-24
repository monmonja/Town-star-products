import Buildable from "../buildable";
import Item from "../item";
import Road from "../terrains/road";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";

export default class RangeHouse extends Item implements Buildable {
  name = "Range House"
  isNFT = false;
  price = 1_250;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  requirements = [
    Road,
  ];
}