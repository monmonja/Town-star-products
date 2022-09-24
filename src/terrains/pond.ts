import Buildable from "../buildable";
import Item from "../item";

export default class Pond extends Item implements Buildable {
  name: string = "Pond";
  price = 10_000;
  isNFT = false;
}