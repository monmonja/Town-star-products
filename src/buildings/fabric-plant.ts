import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";
import Producer from "../producer";
import Item from "../item";
import CottonYarn from "../crafts/cotton-yarn";
import WoolYarn from "../crafts/wool-yarn";
import Uniforms from "../crafts/uniforms";
import PavedRoad from "../terrains/paved-road";
import FabricBox from "../crafts/fabric-box";

export default class FabricPlant extends Item implements Buildable, Producer {
  name = "Fabric Plant";
  price = 500_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 10 }),
    createRequirement({ craft: Wood, quantity: 10 }),
    createRequirement({ craft: Energy, quantity: 10 }),
  ];

  output = [
    CottonYarn,
    WoolYarn,
    Uniforms,
    FabricBox,
  ];

  requirements = [
    PavedRoad,
  ];
}