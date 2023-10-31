import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Water from "../crafts/water";

export default class WasabiFarm extends Item implements Buildable, Producer {
  name = "Wasabi Farm";
  price = 250;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Water, quantity: 3 }),
  ];

  output = [
    // Wasabi,
  ];
}
