import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Lumber from "../crafts/lumber";
import Producer from "../producer";
import Item from "../item";
import Energy from "../crafts/energy";
import PavedRoad from "../terrains/paved-road";
import WaterPump from "./water-pump";

export default class PowerPlant extends Item implements Buildable, Producer {
  name = "Power Plant";
  price = 250_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 10 }),
    createRequirement({ craft: Wood, quantity: 10 }),
    createRequirement({ craft: Energy, quantity: 10 }),
  ];

  output = [
    Energy,
  ];

  requirements = [
    PavedRoad,
    WaterPump,
  ];
}