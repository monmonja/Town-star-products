import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";

export default class TreeFarm extends Item implements Buildable, Producer {
  name = "Tree Farm";
  price = 500;
  isNFT = false;

  output = [
    Wood,
  ];
}