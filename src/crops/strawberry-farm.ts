import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Strawberries from "../crafts/strawberries";

export default class StrawberryFarm extends Item implements Buildable, Producer {
  name = "Strawberry Farm";
  price = 1_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 3 }),
  ];

  output = [
    Strawberries,
  ];
}