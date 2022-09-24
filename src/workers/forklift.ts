import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Item from "../item";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";
import Road from "../terrains/road";

export default class Forklift extends Item implements Buildable {
  name = "Forklift";
  price = 75_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 5 }),
    createRequirement({ craft: Wood, quantity: 5 }),
    createRequirement({ craft: Energy, quantity: 5 }),
  ];

  requirements = [
    Road,
  ];
}