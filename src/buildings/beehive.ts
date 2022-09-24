import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import Honey from "../crafts/honey";
import Honeycomb from "../crafts/honeycomb";
import Wax from "../crafts/wax";
import { createRequirement } from "../craft-requirement";
import Lumber from "../crafts/lumber";

export default class Beehive extends Item implements Buildable, Producer {
  name = "Beehive";
  price = 25_000;
  isNFT = false;


  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 3 }),
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  output = [
    Honey,
    Honeycomb,
    Wax,
  ];
}