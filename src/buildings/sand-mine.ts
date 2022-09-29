import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import Silica from "../crafts/silica";
import Road from "../terrains/road";

export default class SandMine extends Item implements Buildable, Producer {
  name = "Sand Mine";
  price = 45_000;
  isNFT = false;
  icon = "buildings/icon_sandMine.png";

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 3 }),
  ];

  output = [
    Silica,
  ];

  requirements = [
    Road,
  ];
}