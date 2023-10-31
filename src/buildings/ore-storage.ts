import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Item from "../item";
import Road from "../terrains/road";

export default class OreStorage extends Item implements Buildable {
  name = "Ore Storage";
  price = 20_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 10 }),
  ];

  requirements = [
    Road,
  ];
}
