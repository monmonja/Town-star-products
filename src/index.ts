import Bakery from "./buildings/bakery";

declare global {
  interface Window {
    products : any;
  }
}

import Lumber from "./crafts/lumber";
import Wood from "./crafts/wood";
import Energy from "./crafts/energy";
import Butter from "./crafts/butter";
import Salt from "./crafts/salt";
import Milk from "./crafts/milk";
import Water from "./crafts/water";
import Meadow from "./terrains/meadow";
import Feed from "./crafts/feed";
import Brine from "./crafts/brine";
import Baguette from "./crafts/baguette";
import CrudeOil from "./crafts/crude-oil";
import WaterDrum from "./crafts/water-drum";
import GiftParcel from "./crafts/gift-parcel";
import BoxingFacility from "./buildings/boxing-facility";
import DecoratedCake from "./crafts/decorated-cake";
import Cake from "./crafts/cake";
import Batter from "./crafts/batter";
import Flour from "./crafts/flour";
import Wheat from "./crafts/wheat";
import WoolYarn from "./crafts/wool-yarn";
import Wool from "./crafts/wool";
import Eggs from "./crafts/eggs";
import Sugar from "./crafts/sugar";
import ChocolateBar from "./crafts/chocolate-bar";
import ChocolateShop from "./buildings/chocolate-shop";
import Cocoa from "./crafts/cocoa";
import CandyCanes from "./crafts/candy-canes";
import Peppermint from "./crafts/peppermint";
import Sangria from "./crafts/sangria";
import WineBottle from "./crafts/wine-bottle";
import PumpkinPie from "./crafts/pumpkin-pie";
import Pumpkin from "./crafts/pumpkin";
import Sugarcane from "./crafts/sugarcane";
import CabernetSauvignon from "./crafts/cabernet-sauvignon";
import Strawberries from "./crafts/strawberries";
import CabernetGrapes from "./crafts/cabernet-grapes";
import Silica from "./crafts/silica";
import Limestone from "./crafts/limestone";
import Chromium from "./crafts/chromium";
import OakBarrel from "./crafts/oak-barrel";
import OakWood from "./crafts/oak-wood";
import Iron from "./crafts/iron";

window.products = {
  [GiftParcel.name]: new GiftParcel(),
  [DecoratedCake.name]: new DecoratedCake(),
  [Cake.name]: new Cake(),
  [Batter.name]: new Batter(),
  [Flour.name]: new Flour(),
  [Wheat.name]: new Wheat(),
  [WoolYarn.name]: new WoolYarn(),
  [Wool.name]: new Wool(),
  [Eggs.name]: new Eggs(),
  [Sugar.name]: new Sugar(),
  [ChocolateBar.name]: new ChocolateBar(),
  [ChocolateShop.name]: new ChocolateShop(),
  [Cocoa.name]: new Cocoa(),
  [CandyCanes.name]: new CandyCanes(),
  [Peppermint.name]: new Peppermint(),
  [Sangria.name]: new Sangria(),
  [WineBottle.name]: new WineBottle(),
  [PumpkinPie.name]: new PumpkinPie(),
  [Pumpkin.name]: new Pumpkin(),
  [BoxingFacility.name]: new BoxingFacility(),
  [Butter.name]: new Butter(),
  [Baguette.name]: new Baguette(),
  [Bakery.name]: new Bakery(),
  [Lumber.name]: new Lumber(),
  [Wood.name]: new Wood(),
  [Energy.name]: new Energy(),
  [Salt.name]: new Salt(),
  [Milk.name]: new Milk(),
  [Water.name]: new Water(),
  [Feed.name]: new Feed(),
  [Brine.name]: new Brine(),
  [Meadow.name]: new Meadow(),
  [CrudeOil.name]: new CrudeOil(),
  [WaterDrum.name]: new WaterDrum(),
  [Sugarcane.name]: new Sugarcane(),
  [CabernetSauvignon.name]: new CabernetSauvignon(),
  [Strawberries.name]: new Strawberries(),
  [CabernetGrapes.name]: new CabernetGrapes(),
  [Silica.name]: new Silica(),
  [Limestone.name]: new Limestone(),
  [Chromium.name]: new Chromium(),
  [WineBottle.name]: new WineBottle(),
  [OakBarrel.name]: new OakBarrel(),
  [OakWood.name]: new OakWood(),
  [Iron.name]: new Iron(),
}
