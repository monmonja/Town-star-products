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
import StackBox from "./crafts/stack-box";
import AquaculturistHouse from "./workers/aquaculturist-house";
import TrickOrTreatBag from "./crafts/trick-or-treat-bag";
import Corn from "./crafts/corn";
import CandyCorn from "./crafts/candy-corn";
import CornField from "./crops/corn-field";
import CornStarch from "./crafts/corn-starch";
import CopperPanningSite from "./buildings/copper-panning-site";
import FishFarm from "./buildings/fish-farm";
import Forge from "./buildings/forge";
import Foundry from "./buildings/foundry";
import GoldPanningSite from "./buildings/gold-panning-site";
import ItalianRestaurant from "./buildings/italian-restaurant";
import JewelryCraftingTable from "./buildings/jewelry-crafting-table";
import JewelryStore from "./buildings/jewelry-store";
import MasterWizard from "./buildings/master-wizard";
import MixingTent from "./buildings/mixing-tent";
import NorthPoleCreationLab from "./buildings/north-pole-creation-lab";
import OreStorage from "./buildings/ore-storage";
import SantasFactory from "./buildings/santas-factory";
import SauceFacility from "./buildings/sauce-facility";
import SeafoodWarehouse from "./buildings/seafood-warehouse";
import ShrimpFarm from "./buildings/shrimp-farm";
import SilverPanningSite from "./buildings/silver-panning-site";
import SushiRestaurant from "./buildings/sushi-restaurant";
import WireMill from "./buildings/wire-mill";
import WizardsWorkshop from "./buildings/wizards-workshop";
import WormFarm from "./buildings/worm-farm";
import AppleTree from "./crops/apple-tree";
import FishingPlatform from "./crops/fishing-platform";
import RiceField from "./crops/rice-field";
import SeaweedFarm from "./crops/seaweed-farm";
import TomatoFarm from "./crops/tomato-farm";
import WasabiFarm from "./crops/wasabi-farm";
import WildNetFishing from "./crops/wild-net-fishing";
import PannerBunkHouse from "./workers/panner-bunk-house";
import PannerHouse from "./workers/panner-house";
import SeaweedFarmerHouse from "./workers/seaweed-farmer-house";
import Apple from "./crafts/apple";
import ApplePie from "./crafts/apple-pie";
import Bicycle from "./crafts/bicycle";
import BoomCanes from "./crafts/boom-canes";
import Bracelet from "./crafts/bracelet";
import ChandelierEarrings from "./crafts/chandelier-earrings";
import Cheese from "./crafts/cheese";
import Copper from "./crafts/copper";
import CopperJumpRing from "./crafts/copper-jump-ring";
import CopperOre from "./crafts/copper-ore";
import CopperWire from "./crafts/copper-wire";
import Eel from "./crafts/eel";
import EelNigiri from "./crafts/eel-nigiri";
import EnchantedObject from "./crafts/enchanted-object";
import FishChum from "./crafts/fish-chum";
import FoodMix from "./crafts/food-mix";
import FourCheesePizza from "./crafts/four-cheese-pizza";
import Glue from "./crafts/glue";
import Gold from "./crafts/gold";
import GoldJumpRing from "./crafts/gold-jump-ring";
import GoldOre from "./crafts/gold-ore";
import GoldPlatedHeartPendant from "./crafts/gold-plated-heart-pendant";
import GoldenHeartNecklace from "./crafts/golden-heart-necklace";
import HeartShapedPrint from "./crafts/heart-shaped-print";
import HuskRice from "./crafts/husk-rice.";
import IceBlock from "./crafts/ice-block";
import JewelrySet from "./crafts/jewelry-set";
import Lasagna from "./crafts/lasagna";
import Lights from "./crafts/lights";
import LobsterClasp from "./crafts/lobster-clasp";
import MagicPowder from "./crafts/magic-powder";
import MoltenGlass from "./crafts/molten-glass";
import MysticMatter from "./crafts/mystic-matter";
import PastaSauce from "./crafts/pasta-sauce";
import PizzaBase from "./crafts/pizza-base";
import RedSteel from "./crafts/red-steel";
import RiceVinegar from "./crafts/rice-vinegar";
import Risotto from "./crafts/risotto";
import RockingHorse from "./crafts/rocking-horse";
import Roe from "./crafts/roe";
import Salmon from "./crafts/salmon";
import SalmonNigiri from "./crafts/salmon-nigiri";
import Seaweed from "./crafts/seaweed";
import Shrimp from "./crafts/shrimp";
import ShrimpPizza from "./crafts/shrimp-pizza";
import Silver from "./crafts/silver";
import SilverJumpRing from "./crafts/silver-jump-ring";
import SilverOre from "./crafts/silver-ore";
import SilverWire from "./crafts/silver-wire";
import SterlingSilver from "./crafts/sterling-silver";
import SterlingSilverJumpRing from "./crafts/sterling-silver-jump-ring";
import SupplyBox from "./crafts/supply-box";
import SushiBoat from "./crafts/sushi-boat";
import TomatoPaste from "./crafts/tomato-paste";
import Tomatoes from "./crafts/tomatoes";
import Wasabi from "./crafts/wasabi";
import WhiteRice from "./crafts/white-rice";
import Worms from "./crafts/worms";

window.products = {

  // crafts
  [Apple.name]: new Apple(),
  [ApplePie.name]: new ApplePie(),
  [Baguette.name]: new Baguette(),
  [Batter.name]: new Batter(),
  [Bicycle.name]: new Bicycle(),
  [BlueSteel.name]: new BlueSteel(),
  [BoomCanes.name]: new BoomCanes(),
  [Bracelet.name]: new Bracelet(),
  [Brine.name]: new Brine(),
  [Butter.name]: new Butter(),
  [CabernetGrapes.name]: new CabernetGrapes(),
  [CabernetSauvignon.name]: new CabernetSauvignon(),
  [Cake.name]: new Cake(),
  [CandyCanes.name]: new CandyCanes(),
  [CandyCorn.name]: new CandyCorn(),
  [CeramicBowl.name]: new CeramicBowl(),
  [ChandelierEarrings.name]: new ChandelierEarrings(),
  [Chardonnay.name]: new Chardonnay(),
  [ChardonnayGrapes.name]: new ChardonnayGrapes(),
  [Cheese.name]: new Cheese(),
  [ChocolateBar.name]: new ChocolateBar(),
  [ChocolateCoveredStrawberries.name]: new ChocolateCoveredStrawberries(),
  [Chromium.name]: new Chromium(),
  [ClayLump.name]: new ClayLump(),
  [Cocoa.name]: new Cocoa(),
  [Copper.name]: new Copper(),
  [CopperJumpRing.name]: new CopperJumpRing(),
  [CopperOre.name]: new CopperOre(),
  [CopperWire.name]: new CopperWire(),
  [Corn.name]: new Corn(),
  [CornStarch.name]: new CornStarch(),
  [Cotton.name]: new Cotton(),
  [CottonYarn.name]: new CottonYarn(),
  [CrudeOil.name]: new CrudeOil(),
  [DecoratedCake.name]: new DecoratedCake(),
  [Dough.name]: new Dough(),
  [Eel.name]: new Eel(),
  [EelNigiri.name]: new EelNigiri(),
  [Eggs.name]: new Eggs(),
  [EnchantedObject.name]: new EnchantedObject(),
  [Energy.name]: new Energy(),
  [FabricBox.name]: new FabricBox(),
  [FancyCake.name]: new FancyCake(),
  [Feed.name]: new Feed(),
  [FishChum.name]: new FishChum(),
  [Flour.name]: new Flour(),
  [FoodMix.name]: new FoodMix(),
  [FoodParcel.name]: new FoodParcel(),
  [FourCheesePizza.name]: new FourCheesePizza(),
  [Gasoline.name]: new Gasoline(),
  [GiftParcel.name]: new GiftParcel(),
  [Glue.name]: new Glue(),
  [Gold.name]: new Gold(),
  [GoldJumpRing.name]: new GoldJumpRing(),
  [GoldOre.name]: new GoldOre(),
  [GoldPlatedHeartPendant.name]: new GoldPlatedHeartPendant(),
  [GoldenHeartNecklace.name]: new GoldenHeartNecklace(),
  [HeartShapedPrint.name]: new HeartShapedPrint(),
  [Honey.name]: new Honey(),
  [Honeycomb.name]: new Honeycomb(),
  [HuskRice.name]: new HuskRice(),
  [IceBlock.name]: new IceBlock(),
  [Iron.name]: new Iron(),
  [JackOLantern.name]: new JackOLantern(),
  [Jam.name]: new Jam(),
  [JetFuel.name]: new JetFuel(),
  [JewelrySet.name]: new JewelrySet(),
  [Lasagna.name]: new Lasagna(),
  [Lights.name]: new Lights(),
  [Limestone.name]: new Limestone(),
  [LobsterClasp.name]: new LobsterClasp(),
  [Lumber.name]: new Lumber(),
  [MagicPowder.name]: new MagicPowder(),
  [Milk.name]: new Milk(),
  [MoltenGlass.name]: new MoltenGlass(),
  [MysticMatter.name]: new MysticMatter(),
  [Nectar.name]: new Nectar(),
  [OakBarrel.name]: new OakBarrel(),
  [OakWood.name]: new OakWood(),
  [PartyBox.name]: new PartyBox(),
  [PastaSauce.name]: new PastaSauce(),
  [Peppermint.name]: new Peppermint(),
  [Petroleum.name]: new Petroleum(),
  [PinotNoir.name]: new PinotNoir(),
  [PinotNoirGrapes.name]: new PinotNoirGrapes(),
  [PizzaBase.name]: new PizzaBase(),
  [Pumpkin.name]: new Pumpkin(),
  [PumpkinPie.name]: new PumpkinPie(),
  [RedSteel.name]: new RedSteel(),
  [RiceVinegar.name]: new RiceVinegar(),
  [Risotto.name]: new Risotto(),
  [RockingHorse.name]: new RockingHorse(),
  [Roe.name]: new Roe(),
  [Salmon.name]: new Salmon(),
  [SalmonNigiri.name]: new SalmonNigiri(),
  [Salt.name]: new Salt(),
  [Sangria.name]: new Sangria(),
  [Seaweed.name]: new Seaweed(),
  [Shrimp.name]: new Shrimp(),
  [ShrimpPizza.name]: new ShrimpPizza(),
  [Silica.name]: new Silica(),
  [Silver.name]: new Silver(),
  [SilverJumpRing.name]: new SilverJumpRing(),
  [SilverOre.name]: new SilverOre(),
  [SilverWire.name]: new SilverWire(),
  [StackBox.name]: new StackBox(),
  [Steel.name]: new Steel(),
  [SterlingSilver.name]: new SterlingSilver(),
  [SterlingSilverJumpRing.name]: new SterlingSilverJumpRing(),
  [Strawberries.name]: new Strawberries(),
  [Sugar.name]: new Sugar(),
  [Sugarcane.name]: new Sugarcane(),
  [SupplyBox.name]: new SupplyBox(),
  [SushiBoat.name]: new SushiBoat(),
  [TomatoPaste.name]: new TomatoPaste(),
  [Tomatoes.name]: new Tomatoes(),
  [TrickOrTreatBag.name]: new TrickOrTreatBag(),
  [Uniforms.name]: new Uniforms(),
  [Wasabi.name]: new Wasabi(),
  [Water.name]: new Water(),
  [WaterDrum.name]: new WaterDrum(),
  [Wax.name]: new Wax(),
  [Wheat.name]: new Wheat(),
  [WhiteRice.name]: new WhiteRice(),
  [WineBottle.name]: new WineBottle(),
  [Wood.name]: new Wood(),
  [WoodenBox.name]: new WoodenBox(),
  [Wool.name]: new Wool(),
  [WoolYarn.name]: new WoolYarn(),
  [Worms.name]: new Worms(),

  // buildings
  [Bakery.name]: new Bakery(),
  [Beehive.name]: new Beehive(),
  [BoxingFacility.name]: new BoxingFacility(),
  [Cakery.name]: new Cakery(),
  [CandyShop.name]: new CandyShop(),
  [ChickenCoop.name]: new ChickenCoop(),
  [ChocolateShop.name]: new ChocolateShop(),
  [CopperPanningSite.name]: new CopperPanningSite(),
  [FabricPlant.name]: new FabricPlant(),
  [FeedMill.name]: new FeedMill(),
  [FishFarm.name]: new FishFarm(),
  [Forge.name]: new Forge(),
  [Foundry.name]: new Foundry(),
  [FuelStorage.name]: new FuelStorage(),
  [GlassFactory.name]: new GlassFactory(),
  [GoldPanningSite.name]: new GoldPanningSite(),
  [IronMine.name]: new IronMine(),
  [ItalianRestaurant.name]: new ItalianRestaurant(),
  [JewelryCraftingTable.name]: new JewelryCraftingTable(),
  [JewelryStore.name]: new JewelryStore(),
  [LumberMill.name]: new LumberMill(),
  [LumberYard.name]: new LumberYard(),
  [MasterWizard.name]: new MasterWizard(),
  [MilkBarn.name]: new MilkBarn(),
  [MixingTent.name]: new MixingTent(),
  [NorthPoleCreationLab.name]: new NorthPoleCreationLab(),
  [NuclearPower.name]: new NuclearPower(),
  [OilPump.name]: new OilPump(),
  [OreStorage.name]: new OreStorage(),
  [Pantry.name]: new Pantry(),
  [PotteryShop.name]: new PotteryShop(),
  [PowerPlant.name]: new PowerPlant(),
  [Refinery.name]: new Refinery(),
  [SandMine.name]: new SandMine(),
  [SantasFactory.name]: new SantasFactory(),
  [SauceFacility.name]: new SauceFacility(),
  [SeafoodWarehouse.name]: new SeafoodWarehouse(),
  [ShallowMine.name]: new ShallowMine(),
  [SheepPen.name]: new SheepPen(),
  [ShrimpFarm.name]: new ShrimpFarm(),
  [Silo.name]: new Silo(),
  [SilverPanningSite.name]: new SilverPanningSite(),
  [SteelMill.name]: new SteelMill(),
  [Storehouse.name]: new Storehouse(),
  [SushiRestaurant.name]: new SushiRestaurant(),
  [Trough.name]: new Trough(),
  [Warehouse.name]: new Warehouse(),
  [WaterFacility.name]: new WaterFacility(),
  [WaterPump.name]: new WaterPump(),
  [Well.name]: new Well(),
  [WindMill.name]: new WindMill(),
  [WindPump.name]: new WindPump(),
  [Winery.name]: new Winery(),
  [WireMill.name]: new WireMill(),
  [WizardsWorkshop.name]: new WizardsWorkshop(),
  [WoodShed.name]: new WoodShed(),
  [WormFarm.name]: new WormFarm(),

  // crops
  [AppleTree.name]: new AppleTree(),
  [CabernetVines.name]: new CabernetVines(),
  [ChardonnayVines.name]: new ChardonnayVines(),
  [CocoaTree.name]: new CocoaTree(),
  [CornField.name]: new CornField(),
  [CottonField.name]: new CottonField(),
  [FishingPlatform.name]: new FishingPlatform(),
  [OakTreeFarm.name]: new OakTreeFarm(),
  [PeppermintField.name]: new PeppermintField(),
  [PinotNoirVines.name]: new PinotNoirVines(),
  [PumpkinPatch.name]: new PumpkinPatch(),
  [RiceField.name]: new RiceField(),
  [SaltField.name]: new SaltField(),
  [SeaweedFarm.name]: new SeaweedFarm(),
  [StrawberryFarm.name]: new StrawberryFarm(),
  [SugercaneField.name]: new SugercaneField(),
  [TomatoFarm.name]: new TomatoFarm(),
  [TreeFarm.name]: new TreeFarm(),
  [WasabiFarm.name]: new WasabiFarm(),
  [WheatField.name]: new WheatField(),
  [WildNetFishing.name]: new WildNetFishing(),

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
  [AquaculturistHouse.name]: new AquaculturistHouse(),
  [ATV.name]: new ATV(),
  [BeeKeeperHouse.name]: new BeeKeeperHouse(),
  [BuilderHouse.name]: new BuilderHouse(),
  [FarmHouse.name]: new FarmHouse(),
  [FarmTractor.name]: new FarmTractor(),
  [Forklift.name]: new Forklift(),
  [LumberjackHouse.name]: new LumberjackHouse(),
  [PannerBunkHouse.name]: new PannerBunkHouse(),
  [PannerHouse.name]: new PannerHouse(),
  [RanchHouse.name]: new RanchHouse(),
  [SeaweedFarmerHouse.name]: new SeaweedFarmerHouse(),
  [TheLoggerHouse.name]: new TheLoggerHouse(),
  [WorkerHouse.name]: new WorkerHouse(),
}

let productSelector = new ProductSelector('product-selector', window.products);
productSelector.populate();
productSelector.addEvent();
