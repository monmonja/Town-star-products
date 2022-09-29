import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Item from "../item";
import Road from "../terrains/road";

export default class Pantry extends Item implements Buildable {
  name = "Pantry";
  price = 20_000;
  isNFT = false;
  icon = "buildings/icon_pantry.png";

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 5 }),
  ];

  requirements = [
    Road,
  ];
}