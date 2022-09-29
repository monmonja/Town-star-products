import Buildable from "../buildable";
import Item from "../item";
import Road from "../terrains/road";

export default class WoodShed extends Item implements Buildable {
  name = "Wood Shed";
  price = 5_000;
  isNFT = false;
  icon = "buildings/icon_woodShed.png";

  requirements = [
    Road,
  ];
}