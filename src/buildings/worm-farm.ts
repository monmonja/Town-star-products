import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import Road from "../terrains/road";
import Water from "../crafts/water";

export default class WormFarm extends Item implements Buildable, Producer {
  name = "Worm Farm";
  price = 35_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 10 }),
    createRequirement({ craft: Water, quantity: 1 }),
  ];

  output = [
    ,
  ];

  requirements = [
    Road,
  ];
}
