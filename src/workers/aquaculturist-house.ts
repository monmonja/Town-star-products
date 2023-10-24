import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import OakWood from "../crafts/oak-wood";
import Item from "../item";
import Road from "../terrains/road";
import Energy from "../crafts/energy";

export default class AquaculturistHouse extends Item implements Buildable {
  name = "Aquaculturist House";
  price = 50_000;
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
