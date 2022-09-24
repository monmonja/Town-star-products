import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Lumber from "../crafts/lumber";
import CabernetGrapes from "../crafts/cabernet-grapes";
import Producer from "../producer";
import Item from "../item";

export default class CabernetVines extends Item implements Buildable, Producer {
  name = "Cabernet Vines";
  price = 3_500;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 1 }),
  ];

  output = [
    CabernetGrapes,
  ];
}