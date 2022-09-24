import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";
import Butter from "../crafts/butter";
import Dough from "../crafts/dough";
import Baguette from "../crafts/baguette";
import Jam from "../crafts/jam";
import Producer from "../producer";
import Item from "../item";
import Road from "../terrains/road";

export default class Bakery extends Item implements Buildable, Producer {
  name = "Bakery";
  price = 400_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 10 }),
    createRequirement({ craft: Wood, quantity: 10 }),
    createRequirement({ craft: Energy, quantity: 10 }),
  ];

  output = [
    Butter,
    Dough,
    Baguette,
    Jam,
  ];

  requirements = [
    Road,
  ];
}