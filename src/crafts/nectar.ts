import Craft from "./craft";
import CloverField from "../terrains/clover-field";

export default class Nectar extends Craft {
  name = "Nectar";

  generatedFrom = [
    CloverField,
  ];
}