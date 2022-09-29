import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import CandyCanes from "../crafts/candy-canes";
import ChocolateCoveredStrawberries from "../crafts/chocolate-covered-strawberries";
import Road from "../terrains/road";

export default class CandyShop extends Item implements Buildable, Producer {
  name = "Candy Shop";
  price = 150_000;
  isNFT = false;
  icon = "buildings/icon_candyShop.png";

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 10 }),
  ];

  output = [
    CandyCanes,
    ChocolateCoveredStrawberries,
  ];

  requirements = [
    Road,
  ];
}