import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import OakWood from "../crafts/oak-wood";
import WaterDrum from "../crafts/water-drum";
import Road from "../terrains/road";

export default class WaterFacility extends Item implements Buildable, Producer {
  name = "Water Facility";
  price = 10_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 2 }),
    createRequirement({ craft: OakWood, quantity: 1 }),
  ];

  output = [
    WaterDrum,
  ];

  requirements = [
    Road,
  ];
}