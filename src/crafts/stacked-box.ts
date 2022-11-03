import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import FoodParcel from "./food-parcel";
import GiftParcel from "./gift-parcel";
import WoodenBox from "./wooden-box";
import BoxingFacility from "../buildings/boxing-facility";
import Warehouse from "../buildings/warehouse";

export default class StackedBox extends Craft {
  name = "Stacked Box";

  requires = [
    createRequirement({ craft: FoodParcel, quantity: 1 }),
    createRequirement({ craft: GiftParcel, quantity: 1 }),
    createRequirement({ craft: WoodenBox, quantity: 1 })
  ];

  generatedFrom = [
    BoxingFacility,
  ];

  storage = [
    Warehouse,
  ];
}