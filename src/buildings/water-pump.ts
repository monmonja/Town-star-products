import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Item from "../item";
import OakWood from "../crafts/oak-wood";
import Pond from "../terrains/pond";

export default class WaterPump extends Item implements Buildable {
  name = "Water Pump";
  price = 30_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 3 }),
    createRequirement({ craft: OakWood, quantity: 3 }),
  ];

  requirements = [
    Pond,
    // ocean, river
  ];
}