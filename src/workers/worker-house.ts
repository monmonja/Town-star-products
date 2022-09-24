import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Item from "../item";
import Road from "../terrains/road";

export default class WorkerHouse extends Item implements Buildable {
  name = "Worker House";
  price = 2_500;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  requirements = [
    Road
  ];
}