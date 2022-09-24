import Buildable from "../buildable";
import DirtRoad from "./dirt-road";
import Road from "./road";

export default class PavedRoad extends Road implements Buildable {
  name: string = "Paved Road";
  price = 30_000;
  isImprovementOf = DirtRoad;
  isNFT = false;
}