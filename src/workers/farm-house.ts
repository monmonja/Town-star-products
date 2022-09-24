import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Item from "../item";
import Road from "../terrains/road";

export default class FarmHouse extends Item implements Buildable {
  name = "Farm House";
  price = 1_250;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  requirements = [
    Road,
  ];
}