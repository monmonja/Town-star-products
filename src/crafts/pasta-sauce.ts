import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import GiftParcel from "./gift-parcel";
import BoxingFacility from "../buildings/boxing-facility";
import Warehouse from "../buildings/warehouse";
import FoodParcel from "./food-parcel";
import WoodenBox from "./wooden-box";
import Salt from "./salt";
import Sugar from "./sugar";
import SauceFacility from "../buildings/sauce-facility";
import Storehouse from "../buildings/storehouse";
import TomatoPaste from "./tomato-paste";

export default class PastaSauce extends Craft {
  name = "Pasta Sauce";

  requires = [
    createRequirement({ craft: TomatoPaste, quantity: 1 }),
    createRequirement({ craft: Salt, quantity: 1 }),
    createRequirement({ craft: Sugar, quantity: 1 }),
  ];

  generatedFrom = [
    SauceFacility,
  ];

  storage = [
    Storehouse,
  ];
}
