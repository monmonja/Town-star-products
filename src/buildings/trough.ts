import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Item from "../item";
import { createRequirement } from "../craft-requirement";

export default class Trough extends Item implements Buildable {
  name = "Trough";
  price = 5_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 1 }),
  ];
}