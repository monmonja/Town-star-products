import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Baguette from "./baguette";
import Jam from "./jam";
import Honey from "./honey";
import BoxingFacility from "../buildings/boxing-facility";
import Warehouse from "../buildings/warehouse";

export default class FoodParcel extends Craft {
  name = "Food Parcel";

  requires = [
    createRequirement({ craft: Baguette, quantity: 3 }),
    createRequirement({ craft: Jam, quantity: 2 }),
    createRequirement({ craft: Honey, quantity: 1 }),
  ];

  generatedFrom = [
    BoxingFacility,
  ];

  storage = [
    Warehouse,
  ];
}
