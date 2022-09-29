import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import Energy from "../crafts/energy";
import Road from "../terrains/road";

export default class WindTurbine extends Item implements Buildable, Producer {
  name = "Wind Turbine";
  price = 2_500;
  isNFT = false;
  icon = "buildings/icon_windTurbine.png";

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 1 }),
  ];

  output = [
    Energy,
  ];

  requirements = [
    Road,
  ];
}