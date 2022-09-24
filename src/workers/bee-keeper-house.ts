import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Item from "../item";
import Road from "../terrains/road";

export default class BeeKeeperHouse extends Item implements Buildable {
  name = "Bee Keeper House";
  price = 7_500;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 5 }),
  ];

  requirements = [
    Road,
  ];
}