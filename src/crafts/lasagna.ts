import Craft from "./craft";
import { createRequirement } from "../craft-requirement";
import Beehive from "../buildings/beehive";
import Pantry from "../buildings/pantry";
import Eggs from "./eggs";
import Cheese from "./cheese";
import PastaSauce from "./pasta-sauce";

export default class Lasagna extends Craft {
  name = "Lasagna";

  requires = [
    createRequirement({ craft: Cheese, quantity: 2 }),
    createRequirement({ craft: PastaSauce, quantity: 2 }),
    createRequirement({ craft: Eggs, quantity: 1 }),
  ];

  generatedFrom = [
    Beehive,
  ];

  storage = [
    Pantry,
  ];
}
