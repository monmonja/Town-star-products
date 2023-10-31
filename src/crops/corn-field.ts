import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import {createRequirement} from "../craft-requirement";
import Water from "../crafts/water";
import Corn from "../crafts/corn";

export default class CornField extends Item implements Buildable, Producer {
  name = "Corn Field";
  price = 1_500;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Water, quantity: 2 }),
  ];

  output = [
    Corn,
  ];
}
