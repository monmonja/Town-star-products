import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Water from "../crafts/water";

export default class TomatoFarm extends Item implements Buildable, Producer {
  name = "Tomato Farm";
  price = 5_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Water, quantity: 3 }),
  ];

  output = [
  //  Tomatoes,
  ];
}
