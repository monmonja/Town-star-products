import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import {createRequirement} from "../craft-requirement";
import Water from "../crafts/water";
import HuskRice from "../crafts/husk-rice.";

export default class RiceField extends Item implements Buildable, Producer {
  name = "Rice Field";
  price = 1_500;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Water, quantity: 10 }),
  ];

  output = [
    HuskRice,
  ];
}
