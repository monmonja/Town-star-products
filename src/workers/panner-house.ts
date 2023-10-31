import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Item from "../item";
import Road from "../terrains/road";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";

export default class PannerHouse extends Item implements Buildable {
  name = "Panner House";
  price = 1_500;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  requirements = [
    Road,
  ];
}
