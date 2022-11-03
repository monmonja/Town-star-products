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
import PartyBox from "./crafts/party-box";
import Beehive from "./buildings/beehive";
import Cakery from "./buildings/cakery";
import FabricPlant from "./buildings/fabric-plant";
import FeedMill from "./buildings/feed-mill";
import FuelStorage from "./buildings/fuel-storage";
import GlassFactory from "./buildings/glass-factory";
import IronMine from "./buildings/iron-mine";
import LumberMill from "./buildings/lumber-mill";
import LumberYard from "./buildings/lumber-yard";
import MilkBarn from "./buildings/milk-barn";
import NuclearPower from "./buildings/nuclear-power";
import OilPump from "./buildings/oil-pump";
import Pantry from "./buildings/pantry";
import PotteryShop from "./buildings/pottery-shop";
import PowerPlant from "./buildings/power-plant";
import Refinery from "./buildings/refinery";
import SandMine from "./buildings/sand-mine";
import ShallowMine from "./buildings/shallow-mine";
import SheepPen from "./buildings/sheep-pen";
import Silo from "./buildings/silo";
import SteelMill from "./buildings/steel-mill";
import Storehouse from "./buildings/storehouse";
import Trough from "./buildings/trough";
import Warehouse from "./buildings/warehouse";
import WaterFacility from "./buildings/water-facility";
import WaterPump from "./buildings/water-pump";
import Well from "./buildings/well";
import WindMill from "./buildings/wind-mill";
import WindPump from "./buildings/wind-pump";
import Winery from "./buildings/winery";
import WoodShed from "./buildings/wood-shed";
import BlueSteel from "./crafts/blue-steel";
import CeramicBowl from "./crafts/ceramic-bowl";
import Chardonnay from "./crafts/chardonnay";
import ChardonnayGrapes from "./crafts/chardonnay-grapes";
import ChocolateCoveredStrawberries from "./crafts/chocolate-covered-strawberries";
import ClayLump from "./crafts/clay-lump";
import Cotton from "./crafts/cotton";
import CottonYarn from "./crafts/cotton-yarn";
import Dough from "./crafts/dough";
import FabricBox from "./crafts/fabric-box";
import FancyCake from "./crafts/fancy-cake";
import FoodParcel from "./crafts/food-parcel";
import Gasoline from "./crafts/gasoline";
import Honey from "./crafts/honey";
import Honeycomb from "./crafts/honeycomb";
import JackOLantern from "./crafts/jack-o-lantern";
import Jam from "./crafts/jam";
import JetFuel from "./crafts/jet-fuel";
import Nectar from "./crafts/nectar";
import PinotNoir from "./crafts/pinot-noir";
import PinotNoirGrapes from "./crafts/pinot-noir-grapes";
import Steel from "./crafts/steel";
import Uniforms from "./crafts/uniforms";
import Wax from "./crafts/wax";
import WoodenBox from "./crafts/wooden-box";
import CabernetVines from "./crops/cabernet-vines";
import ChardonnayVines from "./crops/chardonnay-vines";
import ChickenCoop from "./buildings/chicken-coop";
import CandyShop from "./buildings/candy-shop";
import CocoaTree from "./crops/cocoa-tree";
import CottonField from "./crops/cotton-field";
import OakTreeFarm from "./crops/oak-tree-farm";
import PeppermintField from "./crops/peppermint-field";
import PinotNoirVines from "./crops/pinot-noir-vines";
import PumpkinPatch from "./crops/pumpkin-patch";
import SaltField from "./crops/salt-field";
import StrawberryFarm from "./crops/strawberry-farm";
import SugercaneField from "./crops/sugercane-field";
import TreeFarm from "./crops/tree-farm";
import WheatField from "./crops/wheat-field";
import ClayField from "./terrains/clay-field";
import CloverField from "./terrains/clover-field";
import DirtRoad from "./terrains/dirt-road";
import Mountain from "./terrains/mountains";
import OpenWorld from "./terrains/open-world";
import PavedRoad from "./terrains/paved-road";
import Pond from "./terrains/pond";
import Road from "./terrains/road";
import ATV from "./workers/atv";
import BeeKeeperHouse from "./workers/bee-keeper-house";
import BuilderHouse from "./workers/builder-house";
import FarmHouse from "./workers/farm-house";
import FarmTractor from "./workers/farm-tractor";
import Forklift from "./workers/forklift";
import LumberjackHouse from "./workers/lumberjack-house";
import RanchHouse from "./workers/ranch-house";
import TheLoggerHouse from "./workers/the-logger-house";
import WorkerHouse from "./workers/worker-house";
import ProductSelector from "./ui/product-selection";
import Petroleum from "./crafts/petroleum";
import StackedBox from "./crafts/stacked-box";

window.products = {

  // crafts
  [Baguette.name]: new Baguette(),
  [Batter.name]: new Batter(),
  [BlueSteel.name]: new BlueSteel(),
  [Brine.name]: new Brine(),
  [Butter.name]: new Butter(),
  [CabernetGrapes.name]: new CabernetGrapes(),
  [CabernetSauvignon.name]: new CabernetSauvignon(),
  [Cake.name]: new Cake(),
  [CandyCanes.name]: new CandyCanes(),
  [CeramicBowl.name]: new CeramicBowl(),
  [Chardonnay.name]: new Chardonnay(),
  [ChardonnayGrapes.name]: new ChardonnayGrapes(),
  [ChocolateBar.name]: new ChocolateBar(),
  [ChocolateCoveredStrawberries.name]: new ChocolateCoveredStrawberries(),
  [Chromium.name]: new Chromium(),
  [ClayLump.name]: new ClayLump(),
  [Cocoa.name]: new Cocoa(),
  [Cotton.name]: new Cotton(),
  [CottonYarn.name]: new CottonYarn(),
  [CrudeOil.name]: new CrudeOil(),
  [DecoratedCake.name]: new DecoratedCake(),
  [Dough.name]: new Dough(),
  [Eggs.name]: new Eggs(),
  [Energy.name]: new Energy(),
  [FabricBox.name]: new FabricBox(),
  [FancyCake.name]: new FancyCake(),
  [Feed.name]: new Feed(),
  [Flour.name]: new Flour(),
  [FoodParcel.name]: new FoodParcel(),
  [Gasoline.name]: new Gasoline(),
  [GiftParcel.name]: new GiftParcel(),
  [Honey.name]: new Honey(),
  [Honeycomb.name]: new Honeycomb(),
  [Iron.name]: new Iron(),
  [JackOLantern.name]: new JackOLantern(),
  [Jam.name]: new Jam(),
  [JetFuel.name]: new JetFuel(),
  [Limestone.name]: new Limestone(),
  [Lumber.name]: new Lumber(),
  [Milk.name]: new Milk(),
  [Nectar.name]: new Nectar(),
  [OakBarrel.name]: new OakBarrel(),
  [OakWood.name]: new OakWood(),
  [PartyBox.name]: new PartyBox(),
  [Peppermint.name]: new Peppermint(),
  [Petroleum.name]: new Petroleum(),
  [PinotNoir.name]: new PinotNoir(),
  [PinotNoirGrapes.name]: new PinotNoirGrapes(),
  [Pumpkin.name]: new Pumpkin(),
  [PumpkinPie.name]: new PumpkinPie(),
  [Salt.name]: new Salt(),
  [Sangria.name]: new Sangria(),
  [Silica.name]: new Silica(),
  [StackedBox.name]: new StackedBox(),
  [Steel.name]: new Steel(),
  [Strawberries.name]: new Strawberries(),
  [Sugar.name]: new Sugar(),
  [Sugarcane.name]: new Sugarcane(),
  [Uniforms.name]: new Uniforms(),
  [Water.name]: new Water(),
  [WaterDrum.name]: new WaterDrum(),
  [Wax.name]: new Wax(),
  [Wheat.name]: new Wheat(),
  [WineBottle.name]: new WineBottle(),
  [Wood.name]: new Wood(),
  [WoodenBox.name]: new WoodenBox(),
  [Wool.name]: new Wool(),
  [WoolYarn.name]: new WoolYarn(),

  // buildings
  [Bakery.name]: new Bakery(),
  [Beehive.name]: new Beehive(),
  [BoxingFacility.name]: new BoxingFacility(),
  [Cakery.name]: new Cakery(),
  [CandyShop.name]: new CandyShop(),
  [ChickenCoop.name]: new ChickenCoop(),
  [ChocolateShop.name]: new ChocolateShop(),
  [FabricPlant.name]: new FabricPlant(),
  [FeedMill.name]: new FeedMill(),
  [FuelStorage.name]: new FuelStorage(),
  [GlassFactory.name]: new GlassFactory(),
  [IronMine.name]: new IronMine(),
  [LumberMill.name]: new LumberMill(),
  [LumberYard.name]: new LumberYard(),
  [MilkBarn.name]: new MilkBarn(),
  [NuclearPower.name]: new NuclearPower(),
  [OilPump.name]: new OilPump(),
  [Pantry.name]: new Pantry(),
  [PotteryShop.name]: new PotteryShop(),
  [PowerPlant.name]: new PowerPlant(),
  [Refinery.name]: new Refinery(),
  [SandMine.name]: new SandMine(),
  [ShallowMine.name]: new ShallowMine(),
  [SheepPen.name]: new SheepPen(),
  [Silo.name]: new Silo(),
  [SteelMill.name]: new SteelMill(),
  [Storehouse.name]: new Storehouse(),
  [Trough.name]: new Trough(),
  [Warehouse.name]: new Warehouse(),
  [WaterFacility.name]: new WaterFacility(),
  [WaterPump.name]: new WaterPump(),
  [Well.name]: new Well(),
  [WindMill.name]: new WindMill(),
  [WindPump.name]: new WindPump(),
  [Winery.name]: new Winery(),
  [WoodShed.name]: new WoodShed(),

  // crops
  [CabernetVines.name]: new CabernetVines(),
  [ChardonnayVines.name]: new ChardonnayVines(),
  [CocoaTree.name]: new CocoaTree(),
  [CottonField.name]: new CottonField(),
  [OakTreeFarm.name]: new OakTreeFarm(),
  [PeppermintField.name]: new PeppermintField(),
  [PinotNoirVines.name]: new PinotNoirVines(),
  [PumpkinPatch.name]: new PumpkinPatch(),
  [SaltField.name]: new SaltField(),
  [StrawberryFarm.name]: new StrawberryFarm(),
  [SugercaneField.name]: new SugercaneField(),
  [TreeFarm.name]: new TreeFarm(),
  [WheatField.name]: new WheatField(),

  // terrains
  [ClayField.name]: new ClayField(),
  [CloverField.name]: new CloverField(),
  [DirtRoad.name]: new DirtRoad(),
  [Meadow.name]: new Meadow(),
  [Mountain.name]: new Mountain(),
  [OpenWorld.name]: new OpenWorld(),
  [PavedRoad.name]: new PavedRoad(),
  [Pond.name]: new Pond(),
  [Road.name]: new Road(),

  // workers
  [ATV.name]: new ATV(),
  [BeeKeeperHouse.name]: new BeeKeeperHouse(),
  [BuilderHouse.name]: new BuilderHouse(),
  [FarmHouse.name]: new FarmHouse(),
  [FarmTractor.name]: new FarmTractor(),
  [Forklift.name]: new Forklift(),
  [LumberjackHouse.name]: new LumberjackHouse(),
  [RanchHouse.name]: new RanchHouse(),
  [TheLoggerHouse.name]: new TheLoggerHouse(),
  [WorkerHouse.name]: new WorkerHouse(),
}

let productSelector = new ProductSelector('product-selector', window.products);
productSelector.populate();
productSelector.addEvent();