import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Lumber from "../crafts/lumber";
import Producer from "../producer";
import Item from "../item";
import Road from "../terrains/road";
import OakBarrel from "../crafts/oak-barrel";
import WoodenBox from "../crafts/wooden-box";

export default class LumberMill extends Item implements Buildable, Producer {
  name = "Lumber Mill";
  price = 50_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 5 }),
  ];

  output = [
    Lumber,
    OakBarrel,
    WoodenBox,
  ];

  requirements = [
    Road,
  ];
}