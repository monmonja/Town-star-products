import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import Energy from "../crafts/energy";
import Road from "../terrains/road";
import Lumber from "../crafts/lumber";
import IceBlock from "../crafts/ice-block";
import MagicPowder from "../crafts/magic-powder";

export default class NorthPoleCreationLab extends Item implements Buildable, Producer {
  name = "North Pole Creation Lab";
  price = 500_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 10 }),
    createRequirement({ craft: Wood, quantity: 10 }),
    createRequirement({ craft: Energy, quantity: 10 }),
  ];

  output = [
    //Lights,
    //BoomCanes,
  ];

  requirements = [
    Road,
  ];
}
