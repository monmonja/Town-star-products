import { CraftRequirement } from "./craft-requirement";
import Placeable from "./placeable";

interface Buildable extends Placeable {
  price?: number
  metaPrice?: number

  isImprovementOf?: Buildable | any

  buildRequirements?: CraftRequirement[]
  requirements?: Buildable | any []
}

export default Buildable;