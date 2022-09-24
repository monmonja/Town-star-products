import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Item from "../item";
import Road from "../terrains/road";

export default class Warehouse extends Item implements Buildable {
  name = "Warehouse";
  price = 15_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 3 }),
  ];

  requirements = [
    Road,
  ];
}