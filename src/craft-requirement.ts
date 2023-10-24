import Craft from "./crafts/craft";
import Placeable from "./placeable";

interface CraftRequirement {
  craft: Craft;
  quantity: number;
  building?: Placeable | any;
  required?: boolean;
  drawInline?: boolean;
}

function createRequirement(parameter: CraftRequirement): CraftRequirement {
  return {
    ...parameter,
  };
}

export {
  CraftRequirement,
  createRequirement,
};
