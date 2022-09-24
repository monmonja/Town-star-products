import Craft from "./craft";
import Warehouse from "../buildings/warehouse";
import Well from "../buildings/well";
import WindPump from "../buildings/wind-pump";

export default class Water extends Craft {
  name = "Water";

  generatedFrom = [
    Well,
    WindPump,
  ];

  storage = [
    Warehouse,
  ];
}