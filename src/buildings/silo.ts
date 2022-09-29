import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Item from "../item";
import Road from "../terrains/road";

export default class Silo extends Item implements Buildable {
  name = "Silo";
  price = 10_000;
  isNFT = false;
  icon = "buildings/icon_silo.png";

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 5 }),
  ];

  requirements = [
    Road,
  ];
}