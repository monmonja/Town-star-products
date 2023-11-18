import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import Apple from "../crafts/apple";

export default class AppleTree extends Item implements Buildable, Producer {
  name = "Apple Tree";
  price = 1_500;
  isNFT = false;

  buildRequirements = [
  ];

  output = [
    Apple,
  ];
}
