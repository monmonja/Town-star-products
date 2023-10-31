import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Lumber from "../crafts/lumber";
import OakWood from "../crafts/oak-wood";
import Salmon from "../crafts/salmon";

export default class WildNetFishing extends Item implements Buildable, Producer {
  name = "Wild Net Fishing";
  price = 150_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 5 }),
    createRequirement({ craft: Wood, quantity: 10 }),
    createRequirement({ craft: OakWood, quantity: 20 }),
  ];

  output = [
    Salmon,
  ];
}
