import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import Road from "../terrains/road";
import Water from "../crafts/water";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";

export default class ShrimpFarm extends Item implements Buildable, Producer {
  name = "Shrimp Farm";
  price = 45_000;
  isNFT = false;

  buildRequirements = [
  //  createRequirement({ craft: Seaweed, quantity: 10 }),
    createRequirement({ craft: Water, quantity: 20 }),
  ];

  output = [
    ,
  ];

  requirements = [
    Road,
  ];
}
