import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Lumber from "../crafts/lumber";
import OakWood from "../crafts/oak-wood";
import Salmon from "../crafts/salmon";
import Water from "../crafts/water";

export default class FishingPlatform extends Item implements Buildable, Producer {
  name = "Fishing Platform";
  price = 300_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Water, quantity: 25 }),
    createRequirement({ craft: Lumber, quantity: 5 }),
    createRequirement({ craft: OakWood, quantity: 5 }),
  ];

  output = [
    Salmon,
  ];
}
