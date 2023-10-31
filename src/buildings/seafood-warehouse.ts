import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import Energy from "../crafts/energy";
import Road from "../terrains/road";
import Lumber from "../crafts/lumber";

export default class SeafoodWarehouse extends Item implements Buildable, Producer {
  name = "Seafood Warehouse";
  price = 50_000;
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
    Road,
  ];
}
