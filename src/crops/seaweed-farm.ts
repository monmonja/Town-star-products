import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Water from "../crafts/water";
import Seaweed from "../crafts/seaweed";

export default class SeaweedFarm extends Item implements Buildable, Producer {
  name = "Seaweed Farm";
  price = 5_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Water, quantity: 3 }),
  ];

  output = [
   Seaweed,
  ];
}
