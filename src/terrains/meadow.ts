import Buildable from "../buildable";
import Item from "../item";
import Feed from "../crafts/feed";

export default class Meadow extends Item implements Buildable {
  name: string = "Meadow";
  price = 500;
  isNFT = false;

  output = [
    Feed,
  ];
}