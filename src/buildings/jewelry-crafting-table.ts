import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Water from "../crafts/water";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";

export default class JewelryCraftingTable extends Item implements Buildable, Producer {
  name = "Jewelry Crafting Table";
  price = 300_000;
  isNFT = false;

  buildRequirements = [
    //createRequirement({ craft: Copper, quantity: 10 }),
    //createRequirement({ craft: Silver, quantity: 10 }),
    createRequirement({ craft: Lumber, quantity: 10 }),
  ];

  output = [
    //CopperJumpRing,
    //SilverJumpRing
    ///ChandelierEarrings,
    //LobsterClasp,
    //Bracelet,
    //GoldenHeartNecklace,
  ];
}
