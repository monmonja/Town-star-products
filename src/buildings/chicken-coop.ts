import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Eggs from "../crafts/eggs";

export default class ChickenCoop extends Item implements Buildable, Producer {
  name = "Chicken Coop";
  price = 15_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 3 }),
  ];

  output = [
    Eggs,
  ];
}