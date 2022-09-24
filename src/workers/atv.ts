import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Item from "../item";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";
import Road from "../terrains/road";
import RangeHouse from "./range-house";

export default class ATV extends Item implements Buildable {
  name = "ATV";
  price = 75_000;
  isNFT = false;
  isImprovementOf = RangeHouse;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 5 }),
    createRequirement({ craft: Wood, quantity: 5 }),
    createRequirement({ craft: Energy, quantity: 5 }),
  ];

  requirements = [
    Road,
  ];
}