import Buildable from "../buildable";
import Item from "../item";

export default class FuelStorage extends Item implements Buildable {
  name = "Fuel Storage";
  price = 15_000;
  isNFT = false;
  icon = "buildings/icon_fuelStorage.png";
}