import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import CrudeOil from "../crafts/crude-oil";
import Road from "../terrains/road";

export default class OilPump extends Item implements Buildable, Producer {
  name = "Oil Pump";
  price = 1_250;
  isNFT = false;
  icon = "buildings/icon_oilPump.png";

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 3 }),
  ];

  output = [
    CrudeOil,
  ];

  requirements = [
    Road,
  ];
}