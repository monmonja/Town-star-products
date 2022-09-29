import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Lumber from "../crafts/lumber";
import Producer from "../producer";
import Item from "../item";
import Iron from "../crafts/iron";
import Energy from "../crafts/energy";
import Steel from "../crafts/steel";
import BlueSteel from "../crafts/blue-steel";
import PavedRoad from "../terrains/paved-road";
import WaterPump from "./water-pump";

export default class SteelMill extends Item implements Buildable, Producer {
  name = "Steel Mill";
  price = 1_500_000;
  isNFT = false;
  icon = "buildings/icon_steelMill.png";

  buildRequirements = [
    createRequirement({ craft: Iron, quantity: 2 }),
    createRequirement({ craft: Lumber, quantity: 2 }),
    createRequirement({ craft: Energy, quantity: 10 }),
  ];

  output = [
    Steel,
    BlueSteel,
  ];

  requirements = [
    PavedRoad,
    WaterPump,
  ];
}