import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import Road from "../terrains/road";
import Water from "../crafts/water";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";

export default class Foundry extends Item implements Buildable, Producer {
  name = "Foundry";
  price = 1_500_000;
  isNFT = false;

  buildRequirements = [
    //createRequirement({ craft: Copper, quantity: 25 }),
    //createRequirement({ craft: Silver, quantity: 25 }),
    createRequirement({ craft: Lumber, quantity: 10 }),
  ];

  output = [
    //CopperJumpRing,
    //SilverJumpRing,
    //SterlingSilver,
    //SterlingSilverJumpRing,
    //GoldPlatedHeartPendant,
  ];

  requirements = [
    Road,
  ];
}
