import Buildable from "../buildable";
import Item from "../item";

export default class BuilderHouse extends Item implements Buildable {
  name = "Builder House";
  price = 2_500;
  isNFT = false;
}