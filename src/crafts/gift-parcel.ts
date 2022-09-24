import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import DecoratedCake from "./decorated-cake";
import Sangria from "./sangria";
import PumpkinPie from "./pumpkin-pie";
import Warehouse from "../buildings/warehouse";
import BoxingFacility from "../buildings/boxing-facility";

export default class GiftParcel extends Craft {
  name = "Gift Parcel";

  requires = [
    createRequirement({ craft: DecoratedCake, quantity: 1 }),
    createRequirement({ craft: Sangria, quantity: 1 }),
    createRequirement({ craft: PumpkinPie, quantity: 1 }),
  ];

  generatedFrom = [
    BoxingFacility,
  ];

  storage = [
    Warehouse,
  ];
}