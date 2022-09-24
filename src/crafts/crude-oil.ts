import Craft from "./craft";
import OilPump from "../buildings/oil-pump";
import Warehouse from "../buildings/warehouse";

export default class CrudeOil extends Craft {
  name = "Crude Oil";

  generatedFrom = [
    OilPump,
  ];

  storage = [
    Warehouse,
  ];
}