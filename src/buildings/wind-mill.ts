import Buildable from "../buildable";
import Item from "../item";

export default class WindMill extends Item implements Buildable {
  name = "Wind Mill";
  price = 7_500;
  isNFT = false;
}