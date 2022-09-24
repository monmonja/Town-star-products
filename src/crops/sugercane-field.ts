import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import Sugarcane from "../crafts/sugarcane";

export default class SugercaneField extends Item implements Buildable, Producer {
  name = "Sugercane Field";
  price = 250;
  isNFT = false;

  output = [
    Sugarcane,
  ];
}