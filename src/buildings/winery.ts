import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";
import Road from "../terrains/road";
import PinotNoir from "../crafts/pinot-noir";
import CabernetSauvignon from "../crafts/cabernet-sauvignon";
import Chardonnay from "../crafts/chardonnay";
import Sangria from "../crafts/sangria";

export default class Winery extends Item implements Buildable, Producer {
  name = "Winery";
  price = 1_000_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 5 }),
    createRequirement({ craft: Wood, quantity: 5 }),
    createRequirement({ craft: Energy, quantity: 5 }),
  ];

  output = [
    PinotNoir,
    CabernetSauvignon,
    Chardonnay,
    Sangria,
  ];

  requirements = [
    Road,
  ];
}