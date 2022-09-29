import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Item from "../item";
import Road from "../terrains/road";

export default class Storehouse extends Item implements Buildable {
  name = "Silo";
  price = 15_000;
  isNFT = false;
  icon = "buildings/icon_storehouse.png";

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 5 }),
  ];

  requirements = [
    Road,
  ];
}