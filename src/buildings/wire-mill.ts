import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import Road from "../terrains/road";
import Water from "../crafts/water";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";

export default class WireMill extends Item implements Buildable, Producer {
  name = "Wire Mill";
  price = 100_000;
  isNFT = false;

  buildRequirements = [
 //   createRequirement({ craft: Cooper, quantity: 10 }),
    createRequirement({ craft: Energy, quantity: 5 }),
    createRequirement({ craft: Lumber, quantity: 5 }),
  ];

  output = [
 //   CopperWire,
 //   SilverWire,
  ];

  requirements = [
    Road,
  ];
}
