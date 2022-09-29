import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Wool from "../crafts/wool";

export default class SheepPen extends Item implements Buildable, Producer {
  name = "Sheep Pen";
  price = 20_000;
  isNFT = false;
  icon = "buildings/icon_sheepPen.png";

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 3 }),
  ];

  output = [
    Wool,
  ];
}