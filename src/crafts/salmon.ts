import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Water from "./water";
import Silo from "../buildings/silo";
import CornField from "../crops/corn-field";
import WildNetFishing from "../crops/wild-net-fishing";
import FishingPlatform from "../crops/fishing-platform";
import Energy from "./energy";

export default class Salmon extends Craft {
  name = "Salmon";

  requires = [
   // createRequirement({ craft: FishChum, quantity: 2, building: WildNetFishing }),
    createRequirement({ craft: Energy, quantity: 8, building: WildNetFishing }),
    //createRequirement({ craft: FishChum, quantity: 1, building: FishingPlatform }),
    createRequirement({ craft: Energy, quantity: 4, building: FishingPlatform }),
  ];

  generatedFrom = [
    WildNetFishing,
    FishingPlatform,
  ];

  storage = [
    Silo,
  ];
}
