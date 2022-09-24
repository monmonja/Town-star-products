import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import Wheat from "../crafts/wheat";

export default class WheatField extends Item implements Buildable, Producer {
  name = "Wheat Field";
  price = 250;
  isNFT = false;

  output = [
    Wheat,
  ];
}