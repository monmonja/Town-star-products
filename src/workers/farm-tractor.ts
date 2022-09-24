import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Item from "../item";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";
import Road from "../terrains/road";
import FarmHouse from "./farm-house";

export default class FarmTractor extends Item implements Buildable {
  name = "Farm Tractor";
  price = 75_000;
  isNFT = false;
  isImprovementOf = FarmHouse;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 5 }),
    createRequirement({ craft: Wood, quantity: 5 }),
    createRequirement({ craft: Energy, quantity: 5 }),
  ];

  requirements = [
    Road,
  ];
}