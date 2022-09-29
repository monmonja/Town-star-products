import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import Milk from "../crafts/milk";
import { createRequirement } from "../craft-requirement";

export default class MilkBarn extends Item implements Buildable, Producer {
  name = "Milk Barn";
  price = 30_000;
  isNFT = false;
  icon = "buildings/icon_milkBarn.png";

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 10 }),
  ];

  output = [
    Milk,
  ];
}