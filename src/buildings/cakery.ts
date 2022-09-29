import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";
import Producer from "../producer";
import Item from "../item";
import Cake from "../crafts/cake";
import PumpkinPie from "../crafts/pumpkin-pie";
import Batter from "../crafts/batter";
import Road from "../terrains/road";

export default class Cakery extends Item implements Buildable, Producer {
  name = "Cakery";
  price = 1_000_000;
  isNFT = false;
  icon = "buildings/icon_cakery.png";

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 10 }),
    createRequirement({ craft: Wood, quantity: 10 }),
    createRequirement({ craft: Energy, quantity: 10 }),
  ];

  output = [
    Batter,
    Cake,
    PumpkinPie,
  ];

  requirements = [
    Road,
  ];
}