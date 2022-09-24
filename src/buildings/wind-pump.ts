import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Water from "../crafts/water";

export default class WindPump extends Item implements Buildable, Producer {
  name = "Wind Pump";
  price = 12_500;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 3 }),
  ];

  output = [
    Water,
  ];
}