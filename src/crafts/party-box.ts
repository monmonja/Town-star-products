import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import GiftParcel from "./gift-parcel";
import BoxingFacility from "../buildings/boxing-facility";
import Warehouse from "../buildings/warehouse";
import FoodParcel from "./food-parcel";
import WoodenBox from "./wooden-box";

export default class PartyBox extends Craft {
  name = "Party Box";

  requires = [
    createRequirement({ craft: GiftParcel, quantity: 1 }),
    createRequirement({ craft: FoodParcel, quantity: 1 }),
    createRequirement({ craft: WoodenBox, quantity: 1 }),
  ];

  generatedFrom = [
    BoxingFacility,
  ];

  storage = [
    Warehouse,
  ];
}