import Craft from "./craft";
import Meadow from "../terrains/meadow";
import Trough from "../buildings/trough";
import { createRequirement } from "../craft-requirement";
import Wheat from "./wheat";
import FeedMill from "../buildings/feed-mill";

export default class Feed extends Craft {
  name = "Feed";

  requires = [
    createRequirement({ craft: Wheat, quantity: 2, building:  FeedMill, required: false, }),
  ];

  generatedFrom = [
    Meadow,
    FeedMill,
  ];

  storage = [
    Trough,
  ];
}
