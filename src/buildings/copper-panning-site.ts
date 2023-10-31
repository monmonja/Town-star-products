import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Water from "../crafts/water";

export default class CopperPanningSite extends Item implements Buildable, Producer {
  name = "Copper Panning Site";
  price = 1_500;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Water, quantity: 1 }),
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  output = [

  ];
}
