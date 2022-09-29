import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Lumber from "../crafts/lumber";
import Producer from "../producer";
import Item from "../item";
import Iron from "../crafts/iron";
import Chromium from "../crafts/chromium";
import Limestone from "../crafts/limestone";
import PavedRoad from "../terrains/paved-road";
import Energy from "../crafts/energy";
import Mountain from "../terrains/mountains";

export default class IronMine extends Item implements Buildable, Producer {
  name = "Iron Mine";
  price = 30_000;
  isNFT = false;
  icon = "buildings/icon_mine.png";

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 5 }),
    createRequirement({ craft: Wood, quantity: 5 }),
    createRequirement({ craft: Energy, quantity: 5 }),
  ];

  output = [
    Iron,
    Chromium,
    Limestone,
  ];

  requirements = [
    PavedRoad,
    Mountain,
  ];
}