import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import Cotton from "../crafts/cotton";

export default class CottonField extends Item implements Buildable, Producer {
  name = "Cotton Field";
  price = 250;
  isNFT = false;

  output = [
    Cotton,
  ];
}