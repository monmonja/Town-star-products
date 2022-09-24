import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Lumber from "../crafts/lumber";
import Producer from "../producer";
import Item from "../item";
import ChardonnayGrapes from "../crafts/chardonnay-grapes";

export default class ChardonnayVines extends Item implements Buildable, Producer {
  name = "Chardonnay Vines";
  price = 1_500;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 1 }),
  ];

  output = [
    ChardonnayGrapes,
  ];
}