import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Peppermint from "../crafts/peppermint";

export default class PeppermintField extends Item implements Buildable, Producer {
  name = "Peppermint Field";
  price = 2_500;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 3 }),
  ];

  output = [
    Peppermint,
  ];
}