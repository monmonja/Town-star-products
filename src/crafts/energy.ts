import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import CrudeOil from "./crude-oil";
import WaterDrum from "./water-drum";
import WindTurbine from "../buildings/wind-turbine";
import NuclearPower from "../buildings/nuclear-power";
import PowerPlant from "../buildings/power-plant";
import Warehouse from "../buildings/warehouse";

export default class Energy extends Craft {
  name = "Energy";

  requires = [
    createRequirement({
      craft: CrudeOil,
      quantity: 2,
      building: PowerPlant,
      required: false,
    }),
    createRequirement({
      craft: WaterDrum,
      quantity: 1,
      building: PowerPlant,
      required: false,
    }),
  ];

  generatedFrom = [
    PowerPlant,
    WindTurbine,
    NuclearPower,
  ];

  storage = [
    Warehouse,
  ];
}