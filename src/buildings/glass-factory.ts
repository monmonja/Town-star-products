import Buildable from "../buildable";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Road from "../terrains/road";
import WineBottle from "../crafts/wine-bottle";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";
import Iron from "../crafts/iron";

export default class GlassFactory extends Item implements Buildable {
  name = "Glass Factory";
  price = 100_000;
  isNFT = false;
  icon = "buildings/icon_glassFactory.png";

  buildRequirements = [
    createRequirement({ craft: Iron, quantity: 2 }),
    createRequirement({ craft: Lumber, quantity: 2 }),
    createRequirement({ craft: Energy, quantity: 10 }),
  ];

  output = [
    WineBottle,
  ];

  requirements = [
    Road,
  ];
}