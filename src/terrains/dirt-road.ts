import Buildable from "../buildable";
import Road from "./road";

export default class DirtRoad extends Road implements Buildable {
  name: string = "Dirt Road";
  price = 1_000;
  isNFT = false;
}