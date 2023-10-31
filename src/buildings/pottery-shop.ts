import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Lumber from "../crafts/lumber";
import Producer from "../producer";
import Item from "../item";
import Energy from "../crafts/energy";
import CeramicBowl from "../crafts/ceramic-bowl";
import Road from "../terrains/road";
import JackOLantern from "../crafts/jack-o-lantern";

export default class PotteryShop extends Item implements Buildable, Producer {
  name = "Pottery Shop";
  price = 120_000;
  isNFT = false;
  icon = "buildings/icon_potteryShop.png";

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 5 }),
    createRequirement({ craft: Wood, quantity: 5 }),
    createRequirement({ craft: Energy, quantity: 5 }),
  ];

  output = [
    CeramicBowl,
    JackOLantern,
    //SupplyBox,
    //HeartShapedPrint,
  ];

  requirements = [
    Road,
  ];
}
