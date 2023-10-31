import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import Energy from "../crafts/energy";
import Road from "../terrains/road";
import Lumber from "../crafts/lumber";

export default class SauceFacility extends Item implements Buildable, Producer {
  name = "Sauce Facility";
  price = 450_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 10 }),
    createRequirement({ craft: Wood, quantity: 10 }),
    createRequirement({ craft: Energy, quantity: 10 }),
  ];

  output = [
  //  RiceVinegar,
  //  TomatoPaste,
  //  PastaSauce,
  ];

  requirements = [
    Road,
  ];
}
