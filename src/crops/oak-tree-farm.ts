import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import OakWood from "../crafts/oak-wood";

export default class OakTreeFarm extends Item implements Buildable, Producer {
  name = "Oak Tree Farm";
  price = 1_000;
  isNFT = false;

  output = [
    OakWood,
  ];
}