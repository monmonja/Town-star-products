import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Producer from "../producer";
import Item from "../item";
import Energy from "../crafts/energy";
import PavedRoad from "../terrains/paved-road";
import WaterPump from "./water-pump";
import Steel from "../crafts/steel";
import Iron from "../crafts/iron";

export default class NuclearPower extends Item implements Buildable, Producer {
  name = "Nuclear Power";
  price = 10_000_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Steel, quantity: 5 }),
    createRequirement({ craft: Iron, quantity: 5 }),
    createRequirement({ craft: Energy, quantity: 5 }),
  ];

  output = [
    Energy,
  ];

  requirements = [
    PavedRoad,
    WaterPump,
  ];
}