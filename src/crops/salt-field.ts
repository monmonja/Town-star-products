import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import Brine from "../crafts/brine";

export default class SaltField extends Item implements Buildable, Producer {
  name = "Salt Field";
  price = 1_250;
  isNFT = false;

  output = [
    Brine,
  ];
}