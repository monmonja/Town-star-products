import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import Petroleum from "../crafts/petroleum";
import Gasoline from "../crafts/gasoline";
import JetFuel from "../crafts/jet-fuel";
import Road from "../terrains/road";

export default class Refinery extends Item implements Buildable, Producer {
  name = "Refinery";
  price = 15_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 10 }),
  ];

  output = [
    Petroleum,
    Gasoline,
    JetFuel,
  ];

  requirements = [
    Road,
  ];
}