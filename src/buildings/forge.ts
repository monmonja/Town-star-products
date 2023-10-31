import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import Road from "../terrains/road";
import Water from "../crafts/water";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";

export default class Forge extends Item implements Buildable, Producer {
  name = "Forge";
  price = 27_500;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 5 }),
    createRequirement({ craft: Energy, quantity: 5 }),
  ];

  output = [
    //Cooper,
    //Silver,
    //Gold,
  ];

  requirements = [
    Road,
  ];
}
