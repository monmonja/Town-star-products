import Buildable from "../buildable";
import { createRequirement } from "../craft-requirement";
import Wood from "../crafts/wood";
import Lumber from "../crafts/lumber";
import Energy from "../crafts/energy";
import Producer from "../producer";
import Item from "../item";
import FoodParcel from "../crafts/food-parcel";
import GiftParcel from "../crafts/gift-parcel";
import Road from "../terrains/road";
import PartyBox from "../crafts/party-box";
import StackBox from "../crafts/stack-box";
import JewelrySet from "../crafts/jewelry-set";

export default class BoxingFacility extends Item implements Buildable, Producer {
  name = "Boxing Facility";
  price = 300_000;
  isNFT = false;
  icon = "buildings/icon_boxing_Facility.png";

  buildRequirements = [
    createRequirement({ craft: Lumber, quantity: 10 }),
    createRequirement({ craft: Wood, quantity: 10 }),
    createRequirement({ craft: Energy, quantity: 10 }),
  ];

  output = [
    FoodParcel,
    GiftParcel,
    PartyBox,
    StackBox,
    JewelrySet,
  ];

  requirements = [
    Road,
  ];
}
