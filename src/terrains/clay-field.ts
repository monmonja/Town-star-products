import Buildable from "../buildable";
import Item from "../item";
import Producer from "../producer";
import ClayLump from "../crafts/clay-lump";

export default class ClayField extends Item implements Buildable, Producer {
  name: string = "Clay Field";
  price = 10_000;
  isNFT = false;

  output = [
    ClayLump,
  ];
}