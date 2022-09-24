import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Lumber from "../crafts/lumber";
import Item from "../item";
import Energy from "../crafts/energy";
import Road from "../terrains/road";
import LumberjackHouse from "./lumberjack-house";

export default class TheLoggerHouse extends Item implements Buildable {
  name = "The Logger House";
  price = 75_000;
  isNFT = false;
  isImprovementOf = LumberjackHouse;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 5 }),
    createRequirement({ craft: Wood, quantity: 5 }),
    createRequirement({ craft: Energy, quantity: 5 }),
  ];

  requirements = [
    Road,
  ];
}