import Buildable from "../buildable";
import Item from "../item";
import Nectar from "../crafts/nectar";

export default class CloverField extends Item implements Buildable {
  name: string = "Clover Field";
  price = 3_500;
  isNFT = false;

  output = [
    Nectar,
  ];
}