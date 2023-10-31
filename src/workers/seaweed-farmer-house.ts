import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Item from "../item";
import Road from "../terrains/road";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";
import OakWood from "../crafts/oak-wood";

export default class SeaweedFarmerHouse extends Item implements Buildable {
  name = "Seaweed Farmer House";
  price = 100_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: OakWood, quantity: 5 }),
    createRequirement({ craft: Wood, quantity: 5 }),
    createRequirement({ craft: Energy, quantity: 5 }),
  ];

  requirements = [
    Road,
  ];
}
