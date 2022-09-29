import Buildable from "../buildable";
import Item from "../item";
import Road from "../terrains/road";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";

export default class RanchHouse extends Item implements Buildable {
  name = "Ranch House"
  isNFT = false;
  price = 1_250;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  requirements = [
    Road,
  ];
}