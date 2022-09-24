import Item from "../item";
import {CraftRequirement} from "../craft-requirement";
import Placeable from "../placeable";

export default abstract class Craft extends Item {
  name: string;

  requires?: CraftRequirement[];
  generatedFrom?: Placeable | any [];
  storage?: Placeable | any [];
}