import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Water from "../crafts/water";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";

export default class JewelryStore extends Item implements Buildable, Producer {
  name = "Jewelry Store";
  price = 60_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 20 }),
  ];

  output = [
  ];
}
