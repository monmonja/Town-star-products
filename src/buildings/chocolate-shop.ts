import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Producer from "../producer";
import Item from "../item";
import Road from "../terrains/road";
import ChocolateBar from "../crafts/chocolate-bar";
import FancyCake from "../crafts/fancy-cake";
import DecoratedCake from "../crafts/decorated-cake";

export default class ChocolateShop extends Item implements Buildable, Producer {
  name = "Chocolate Shop";
  price = 300_000;
  isNFT = false;
  icon = "buildings/icon_chocolateShop.png";

  buildRequirements = [
    createRequirement({ craft: Wood, quantity: 20 }),
  ];

  output = [
    ChocolateBar,
    FancyCake,
    DecoratedCake,
  ];

  requirements = [
    Road,
  ];
}