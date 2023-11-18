import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Producer from "../producer";
import Item from "../item";
import PavedRoad from "../terrains/paved-road";
import Mountain from "../terrains/mountains";
import Water from "../crafts/water";
import OakWood from "../crafts/oak-wood";
import Eel from "../crafts/eel";
import Roe from "../crafts/roe";

export default class FishFarm extends Item implements Buildable, Producer {
  name = "Fish Farm";
  price = 95_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Water, quantity: 5 }),
    createRequirement({ craft: OakWood, quantity: 5 }),
  ];

  output = [
    Eel,
    Roe,
  ];

  requirements = [
    PavedRoad,
    Mountain,
  ];
}
