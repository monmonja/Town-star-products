import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import WoodenBox from "./wooden-box";
import Bracelet from "./bracelet";
import ChandelierEarrings from "./chandelier-earrings";
import GoldenHeartNecklace from "./golden-heart-necklace";
import BoxingFacility from "../buildings/boxing-facility";
import JewelryStore from "../buildings/jewelry-store";

export default class JewelrySet extends Craft {
  name = "Jewelry Set";

  requires = [
    createRequirement({ craft: WoodenBox, quantity: 1 }),
    createRequirement({ craft: Bracelet, quantity: 1 }),
    createRequirement({ craft: ChandelierEarrings, quantity: 2 }),
    createRequirement({ craft: GoldenHeartNecklace, quantity: 1 }),
  ];

  generatedFrom = [
    BoxingFacility,
  ];

  storage = [
    JewelryStore,
  ];
}
