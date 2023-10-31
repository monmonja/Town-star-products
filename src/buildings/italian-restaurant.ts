import Wood from "../crafts/wood";
import Buildable from "../buildable";
import Producer from "../producer";
import Item from "../item";
import { createRequirement } from "../craft-requirement";
import Water from "../crafts/water";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";

export default class ItalianRestaurant extends Item implements Buildable, Producer {
  name = "Italian Restaurant";
  price = 850_000;
  isNFT = false;

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 10 }),
    createRequirement({ craft: Wood, quantity: 10 }),
    createRequirement({ craft: Energy, quantity: 10 }),
  ];

  output = [
    //PizzaBase,
    //ShrimpPizza
    //FourCheesePizza,
    //Risotto,
    //Lasagna,
  ];
}
