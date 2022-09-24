import Buildable from "../buildable";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Feed from "../crafts/feed";
import Wheat from "../crafts/wheat";

export default class FeedMill extends Item implements Buildable {
  name = "Feed Mill";
  price = 5_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Wheat, quantity: 2 }),
  ];

  output = [
    Feed,
  ];
}