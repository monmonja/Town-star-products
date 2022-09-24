import Buildable from "../buildable";
import Item from "../item";
import Road from "../terrains/road";

export default class LumberjackHouse extends Item implements Buildable {
  name = "Lumberjack House";
  isNFT = false;
  price = 2_500;

  requirements = [
    Road,
  ];
}