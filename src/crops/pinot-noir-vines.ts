import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import PinotNoirGrapes from "../crafts/pinot-noir-grapes";
import { createRequirement } from "../craft-requirement";
import Lumber from "../crafts/lumber";

export default class PinotNoirVines extends Item implements Buildable, Producer {
  name = "Pinot Noir Vines";
  price = 5_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 1 }),
  ];

  output = [
    PinotNoirGrapes,
  ];
}