import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Lumber from "../crafts/lumber";
import Producer from "../producer";
import Item from "../item";
import PavedRoad from "../terrains/paved-road";
import OpenWorld from "../terrains/open-world";
import Energy from "../crafts/energy";
import Iron from "../crafts/iron";
import Chromium from "../crafts/chromium";
import Limestone from "../crafts/limestone";

export default class ShallowMine extends Item implements Buildable, Producer {
  name = "Shallow Mine";
  price = 30_000;
  isNFT = false;

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
    OpenWorld,
  ];
}