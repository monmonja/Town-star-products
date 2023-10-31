import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import Road from "../terrains/road";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";
import MysticMatter from "../crafts/mystic-matter";

export default class WizardsWorkshop extends Item implements Buildable, Producer {
  name = "Wizard's Workshop";
  price = 1_500_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 10 }),
    createRequirement({ craft: Wood, quantity: 10 }),
    createRequirement({ craft: Energy, quantity: 10 }),
  ];

  output = [
    MysticMatter,
   // Glue,
  ];

  requirements = [
    Road,
  ];
}
