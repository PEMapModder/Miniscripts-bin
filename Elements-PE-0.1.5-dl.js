/**
 * Created by QyMineAsap and DonalddoesMC
 * PEMapModder has no participation in this version of the script
 * This is only a raw copied version of the original script
 **/
ModPE.setItem (500, 9, 3, "Hellfire Sword");
ModPE.setItem (501, 10, 3, "TreeRoot Shovel");
ModPE.setItem (502, 11, 3, "SkyBreeze Pickaxe");
ModPE.setItem (503, 12, 3, "MutantEarth Axe");
ModPE.setItem (504, 13, 3, "NeptuneWave Hoe");

ModPE.setFoodItem (470, 3, 13, 2, "Chilli Seeds");
ModPE.setFoodItem (471, 3, 14, 2, "Calabash Seeds");
ModPE.setFoodItem (472, 3, 13, 2, "Rice Seeds"); 

ModPE.setItem (460, 7 , 7, "Earth Spirit Summoner");
ModPE.setItem (461, 7, 8, "Sky Spirit Summoner");
ModPE.setItem (462, 9, 8, "Water Spirit Summoner");
ModPE.setItem (463, 10, 8, "Fire Spirit Sumonner");
ModPE.setItem (464, 11, 8, "Plant Spirit Summoner");

ModPE.setItem(480, 11, 7, "Water Staff");
ModPE.setItem(481, 12, 7, "Plant Staff");
ModPE.setItem(482, 13, 7, "Light Staff");
ModPE.setItem(483, 14, 7, "Sky Staff");
ModPE.setItem(484, 13, 8, "Dark Staff");
ModPE.setItem(485, 14, 8, "Fire Staff");
ModPE.setItem(486, 14, 9, "Earth Staff");
ModPE.setItem(487, 14, 6, "Heat Staff");
ModPE.setItem(488, 12, 8, "Freeze Staff");

ModPE.setFoodItem (490, 9, 1, 8, "Seaweed");
ModPE.setFoodItem (491, 9, 2, 4, "Chilli"); //Good Chilli
ModPE.setFoodItem (492, 9, 2, -15, "Chilli"); //Bad Chilli
ModPE.setFoodItem (493, 10, 2, 6, "Potato");
ModPE.setFoodItem (494, 14, 10, 10, "Calabash");

var nc = 0;
var savat = 1;
var startquest = 1;
var questpart = 0;
var idgiven = 0;
var datagiven = 0;
var countgiven = 0;

var bosseskilled = 0;
var es = 0;
var ss = 0;
var fs = 0;
var ps = 0;
var ws = 0;
var fireX;
var fireY;
var fireZ;
var waterX;
var waterY;
var waterZ;
var plantX;
var plantY;
var plantZ;
var earthX;
var earthY;
var earthZ;
var skyX;
var skyY;
var skyZ;
var firebh = 0;
var waterbh = 0;
var plantbh = 0;
var skybh = 0;
var earthbh = 0;

var bossparticles = true; //Boss particle effect
var xc = 201; //Timer variable of 20 seconds
var mobdam = 10; //Damage variable
var fss = 0;
var sss = 0;
var wss = 0;
var ess = 0;
var pss = 0;

function procCmd(cmd)
{
var Data = cmd.split(" ");
if(Data[0] == "lmntcraft") //PC Crafting
{
preventDefault();
if(Data[1] == "enable")
{
preventDefault();
nc = 1; // activation
clientMessage ("[EPE] Elemental Crafting enabled!");
}
else if (Data[1] == "disable")
{
preventDefault();
nc = 0; // deactivation
clientMessage ("[EPE] Elemental Crafting disabled!");
}
}
else if (Data[0] == "secretct") //PC Crafting Recepies
{
preventDefault();
if (Data[1] == "t") //Tools
{
if (Data[2] == "1" || Data[2] != "2")
{
clientMessage ("Showing page 1 of 2");

clientMessage ("HellFire Sword");
clientMessage ("Netherrack top middle \n Netherrack middle \n Redstone Ore bottom middle");
clientMessage ("Sets mobs on fire on contact");

clientMessage ("TreeRoot Shovel");
clientMessage ("Leaves top middle \n Gold Ore middle \n Gold Ore bottom middle");
clientMessage ("Clears a 3x3 area of the same block");

clientMessage ("SkyBreeze Pickaxe");
clientMessage ("Glass top middle \n Glass top left \n Glass top right \n Iron Ore middle \n Iron Ore bottom middle");
clientMessage ("Acts like silk touch on blocks");
}
else if (Data[2] == "2")
{
clientMessage ("Showing page 2 of 2");

clientMessage ("MutantEarth Axe");
clientMessage ("Obsidian top middle \n Obsidian top left \n Obsidian middle left \n LapisLazuli Ore middle \n LapisLazuli Ore bottom middle");
clientMessage ("Treecapitates trees");

clientMessage ("NeptuneWave Hoe");
clientMessage ("Ice top middle \n Ice top left \n Diamond Ore middle \n Diamond Ore bottom middle");
clientMessage ("Automatically hydrates farmland");
}
}
else if (Data[1] == "s") //Staffs
{
if (Data[2] == "1" || Data[2] != "2" && Data[2] != "3")
{
clientMessage ("Showing page 1 of 3");
clientMessage ("All staffs have \n Stone Brick middle \n and Bookshelf \n bottom middle");

clientMessage ("Water Staff");
clientMessage ("Ice top middle");
clientMessage ("Acts as an infinite water source");

clientMessage ("Fire Staff");
clientMessage ("Netherrack top middle");
clientMessage ("Acts like flint and steel");

clientMessage ("Dark Staff");
clientMessage ("Obsidian top middle");
clientMessage ("Sets the time to night");
}
else if (Data[2] == "2")
{
clientMessage ("Showing page 2 of 3");
clientMessage ("All staffs have \n Stone Brick middle \n and Bookshelf \n bottom middle");

clientMessage ("Light Staff");
clientMessage ("Glowstone top middle");
clientMessage ("Sets the time to day");

clientMessage ("Plant Staff");
clientMessage ("Wood top middle");
clientMessage ("Turns blocks into their plant varient");

clientMessage ("Earth Staff");
clientMessage ("Dirt top middle");
clientMessage ("Turns plant varients back to normal");
}
else if (Data[2] == "3")
{
clientMessage ("Showing page 3 of 3");
clientMessage ("All staffs have \n Stone Brick middle \n and Bookshelf \n bottom middle");

clientMessage ("Sky Staff");
clientMessage ("Wool top middle");
clientMessage ("Flings mobs into the air");

clientMessage ("Heat Staff");
clientMessage ("Ice top left and \n Obsidian top roght");
clientMessage ("Makes ice water, \n obsidian lava \n and evaporates snow");

clientMessage ("Freeze Staff");
clientMessage ("Ice top left and Obsidian top right");
clientMessage ("Turns lava into obsidian, \n and water into ice");
}
}

}
else if (Data[0] == "srs") //Summoner recepies
{
preventDefault();
clientMessage ("Diamond on Wool = \n Sky Spirit Summoner");
clientMessage ("Diamond on Ice = \n Water Spirit Summoner");
clientMessage ("Diamond on Netherrack = \n Fire Spirit Summoner");
clientMessage ("Diamond on Wood = \n Plant Spirit Summoner");
clientMessage ("Diamond on Dirt = \n Earth Spirit Summoner");
}
else if (Data[0] == "summon") //To spawn old/new mobs
{
preventDefault();
if (Data[1] == "chicken" || Data[1] == "ch" || Data[1] == "10" || Data[1] == "A")
{
spawnChicken (getPlayerX(), getPlayerY() + 1, getPlayerZ(), "mob/chicken.png");
}
else if (Data[1] == "cow" || Data[1] == "co" || Data[1] == "11" || Data[1] == "B")
{
spawnCow (getPlayerX(), getPlayerY() + 1, getPlayerZ(), "mob/cow.png");
}
else if (Data[1] == "pigzombie" || Data[1] == "pz" || Data[1] == "36" || Data[1] == "24" || Data[1] == "pigman")
{
spawnPigZombie (getPlayerX(), getPlayerY() + 1, getPlayerZ(), 283,  "mob/pigzombie.png");
}
else if (Data[1] == "zombie" || Data[1] == "zb" || Data[1] == "32" || Data[1] == "20")
{
Level.spawnMob (getPlayerX(), getPlayerY() + 1, getPlayerZ(), 32, "mob/zombie.png");
}
else if (Data[1] == "skeleton" || Data[1] == "sk" || Data[1] == "34" || Data[1] == "22")
{
Level.spawnMob (getPlayerX(), getPlayerY() + 1, getPlayerZ(), 34, "mob/skeleton.png");
}
else if (Data[1] == "spider" || Data[1] == "sp" || Data[1] == "35" || Data[1] == "23")
{
Level.spawnMob (getPlayerX(), getPlayerY() + 1, getPlayerZ(), 35, "mob/spider.png");
}
else if (Data[1] == "creeper" || Data[1] == "cr" || Data[1] == "33" || Data[1] == "21")
{
Level.spawnMob (getPlayerX(), getPlayerY() + 1, getPlayerZ(), 33, "mob/creeper.png");
}
else if (Data[1] == "pig" || Data[1] == "pg" || Data[1] == "12" || Data[1] == "C")
{
Level.spawnMob (getPlayerX(), getPlayerY() + 1, getPlayerZ(), 12, "mob/pig.png");
}
else if (Data[1] == "sheep" || Data[1] == "sh" || Data[1] == "13" || Data[1] == "D")
{
Level.spawnMob (getPlayerX(), getPlayerY() + 1, getPlayerZ(), 13, "mob/sheep.png");
}
else if (Data[1] == "donald" || Data[1] == "d")
{
spawnPigZombie (getPlayerX(), getPlayerY() + 1, getPlayerZ(), 255, "mob/DDMC.png");
}
else if (Data[1] == "qymine" || Data[1] == "q")
{
spawnPigZombie (getPlayerX(), getPlayerY() + 1, getPlayerZ(), 255, "mob/QMA.png");
}
else if (Data[1] == "primedtnt" || Data[1] == "tnt" || Data[1] == "pt" || Data[1] == "65" || Data[1] == "41")
{
Level.spawnMob (getPlayerX(), getPlayerY() + 1, getPlayerZ(), 65, "gui/itemframe.png");
}
else if (Data[1] == "plantspirit" || Data[1] == "ps")
{
spawnPigZombie (getPlayerX(), getPlayerY() + 1, getPlayerZ(), 481, "mob/plantman.png");
pss++;
ModPE.saveData (Level.getWorldDir() + "pss", pss);
}
else if (Data[1] == "earthspirit" || Data[1] == "es")
{
spawnPigZombie (getPlayerX(), getPlayerY() + 1, getPlayerZ(), 486, "mob/earthman.png");
ess++;
ModPE.saveData (Level.getWorldDir() + "ess", ess);
}
else if (Data[1] == "skyspirit" || Data[1] == "ss")
{
spawnPigZombie (getPlayerX(), getPlayerY() + 1, getPlayerZ(), 483, "mob/skyman.png");
sss++;
ModPE.saveData (Level.getWorldDir() + "sss", sss);
}
else if (Data[1] == "firespirit" || Data[1] == "fs")
{
fss++;
ModPE.saveData (Level.getWorldDir() + "fss", fss);
var firesummoncmd = Math.floor ((Math.random() * 10) + 1);
if (firesummoncmd <= 9)
{
spawnPigZombie (getPlayerX(), getPlayerY()+1, getPlayerZ(), 485, "mob/fireman.png"); 
}
else if (firesummoncmd == 10)
{
spawnPigZombie (getPlayerX(), getPlayerY()+1, getPlayerZ(), 487, "mob/fireman.png"); 
}
}
else if (Data[1] == "waterspirit" || Data[1] == "ws")
{
wss++;
ModPE.saveData (Level.getWorldDir() + "wss", wss);
var watersummoncmd = Math.floor ((Math.random() * 10) + 1);
if (watersummoncmd <= 9)
{
spawnPigZombie (getPlayerX(), getPlayerY()+1, getPlayerZ(), 480, "mob/waterman.png"); 
}
else if (watersummoncmd == 10)
{
spawnPigZombie (getPlayerX(), getPlayerY()+1, getPlayerZ(), 488, "mob/waterman.png"); 
}
}
}
else if (Data[0] == "skiptopart") //Storyline Skipper
{
preventDefault();
if (Data[1] == "0" || Data[1] == "start")
{
startquest = 1;
print ("[EPE] Save reset!");
questpart = ModPE.readData (Level.getWorldDir() + "quest");
ModPE.leaveGame();
}
else if (Data[1] == "1")
{
startquest = 0;
questpart = 1;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
clientMessage ("[EPE] Changed Questpart!");
questpart = ModPE.readData (Level.getWorldDir() + "quest");
}
else if (Data[1] == "2")
{
startquest = 0;
questpart = 2;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
clientMessage ("[EPE] Changed Questpart!");
questpart = ModPE.readData (Level.getWorldDir() + "quest");
}
else if (Data[1] == "3")
{
startquest = 0;
questpart = 3;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
clientMessage ("[EPE] Changed Questpart!");
questpart = ModPE.readData (Level.getWorldDir() + "quest")
}
else if (Data[1] == "4")
{
startquest = 0;
questpart = 4;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
clientMessage ("[EPE] Changed Questpart!");
questpart = ModPE.readData (Level.getWorldDir() + "quest");
}
else if (Data[1] == "5")
{
startquest = 0;
questpart = 5;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
clientMessage ("[EPE] Changed Questpart!");
questpart = ModPE.readData (Level.getWorldDir() + "quest");
}
else if (Data[1] == "6")
{
startquest = 0;
questpart = 6;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
clientMessage ("[EPE] Changed Questpart!");
questpart = ModPE.readData (Level.getWorldDir() + "quest");
}
else if (Data[1] == "7")
{
startquest = 0;
questpart = 7;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
clientMessage ("[EPE] Changed Questpart!");
questpart = ModPE.readData (Level.getWorldDir() + "quest");
}
else if (Data[1] == "8")
{
startquest = 0;
questpart = 8;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
clientMessage ("[EPE] Changed Questpart!");
questpart = ModPE.readData (Level.getWorldDir() + "quest");
}
else if (Data[1] == "9")
{
startquest = 0;
questpart = 9;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
clientMessage ("[EPE] Changed Questpart!");
questpart = ModPE.readData (Level.getWorldDir() + "quest");
}
else if (Data[1] == "10")
{
startquest = 0;
questpart = 10;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
clientMessage ("[EPE] Changed Questpart!");
questpart = ModPE.readData (Level.getWorldDir() + "quest");
}
else if (Data[1] == "11")
{
startquest = 0;
questpart = 11;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
clientMessage ("[EPE] Changed Questpart!");
questpart = ModPE.readData (Level.getWorldDir() + "quest");
}
else if (Data[1] == "12")
{
startquest = 0;
questpart = 12;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
clientMessage ("[EPE] Changed Questpart!");
questpart = ModPE.readData (Level.getWorldDir() + "quest");
}
else if (Data[1] == "13")
{
startquest = 0;
questpart = 13;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
clientMessage ("[EPE] Changed Questpart!");
questpart = ModPE.readData (Level.getWorldDir() + "quest");
}
}
else if (Data[0] == "save")
{
questpart = ModPE.readData (Level.getWorldDir() + "quest");
fss = ModPE.readData (Level.getWorldDir() + "fss");
sss = ModPE.readData (Level.getWorldDir() + "sss");
ess = ModPE.readData (Level.getWorldDir() + "ess");
pss = ModPE.readData (Level.getWorldDir() + "pss");
wss = ModPE.readData (Level.getWorldDir() + "wss");
clientMessage ("[EPE] Saved!");
}
else if (Data[0] == "give")
{
if (Data[1] == "0" || Data[2] == "0" || Data[1] > 510)
{
clientMessage ("[EPE] Invalid Number!");
}
else if (Data[1] > 0 )
{
Entity.setCarriedItem(getPlayerEnt(),Data[1],Data[2],Data[3]);
idgiven = Data[1];
countgiven = Data[2];
datagiven = Data[3];
clientMessage ("[EPE] Gave "+countgiven+" of ID "+idgiven+" with a damage value of "+datagiven+" ! ");
}
}
else if (Data[0] == "bossparticles")
{
if (Data[1] == "enable")
{
bossparticles = true;
clientMessage ("[EPE] Boss Particle Effects Enabled \n BEWARE: MAY LAG LOW-END DEVICES");
}
else if (Data[1] == "disable")
{
bossparticles = false;
clientMessage ("[EPE] Boss Particle Effects Disabled");
}
}
else if (Data[0] == "kill")
{
Player.setHealth (0);
clientMessage ("[EPE] You died");
}
else if (Data[0] == "spawnpoint")
{
Level.setSpawn (getPlayerX(), getPlayerY(), getPlayerZ());
clientMessage ("[EPE] Set Spawn!");
}
else if (Data[0] == "itemdrop")
{
Level.dropItem (getPlayerX(), getPlayerY() - 4, getPlayerZ(), 1, Data[1], Data[2], Data[3]);
idgiven = Data[1];
countgiven = Data[2];
datagiven = Data[3];
clientMessage ("[EPE] Dropped "+countgiven+" of ID "+idgiven+" with a damage value of "+datagiven+" ! ");
}
else if (Data[0] == "EPElist")
{
preventDefault();
clientMessage (" Summon <mob/mob id/mob hex> \n lmntcraft <enable/disable> \n EPEhelp <command> \n give <id> <amount> <damage> \n save \n skiptopart <number> \n srs \n secretct <t/s> <page number> \n EPElist \n bossparticles <enable/disable> \n kill \n spawnpoint \n itemdrop <ID> <Amount> <Damage>");
}
else if (Data[0] == "EPEhelp")
{
if (Data[1] == "summon")
{
clientMessage (" [EPE] Summons the specified mob where you are \n E.g. \n /summon firespirit");
}
else if (Data[1] == "give")
{
clientMessage ("[EPE] Gives you the specified item/block \n BEWARE: Replaces the one in hand \n E.g. \n /give 463 1 0");
}
else if (Data[1] == "save")
{
clientMessage ("[EPE] Saves current progress");
}
else if (Data[1] == "lmntcraft")
{
clientMessage ("[EPE] Toggles Special Crafting \n E.g. \n lmntcraft enable");
}
else if (Data[1] == "secretct")
{
clientMessage ("[EPE] Shows special crafting recepies of the specified type, depending on the page number given \n E.g. \n /secretct t 1");
}
else if (Data[1] == "EPElist")
{
clientMessage ("[EPE] Lists all the commands useable");
}
else if (Data[1] == "EPEhelp")
{
clientMessage ("[EPE] Gives info about the specified command \n E.g. \n /EPEhelp summon");
}
else if (Data[1] == "srs")
{
clientMessage ("[EPE] Displays how to get the specific spirit summoner");
}
else if (Data[1] == "bossparticles")
{
clientMessage ("[EPE] Toggles Boss Particle Effects \n It is recommended to disable it for Low-End devices \n E.g. \n /bossparticles disable");
}
else if (Data[1] == "kill")
{
clientMessage ("[EPE] Kills the user instantly");
}
else if (Data[1] == "spawnpoint")
{
clientMessage ("[EPE] Sets your spawnpoint at your current location");
}
else if (Data[1] == "itemdrop")
{
clientMessage ("[EPE] Drops the specified item/block \n E.g. \n /itemdrop 472 1 0");
}
}
}

function useItem (x, y, z, itemId, blockId, side)
{
if(itemId == 58)
{
if(nc == 1)
{
if(blockId == 15)
{
nc = 0;
print ("The crafting table's secrets were locked again..."); //PC Crafting Table Deactivation
}
else if (blockId > 15 && side == 1 || blockId < 15 && side == 1) //PC Crafting Table Placing
{
preventDefault();
setTile (x, y+1, z, 20);
setTile (x-1, y+1, z, 20);
setTile (x, y+1, z-1, 20);
setTile (x, y+1, z+1, 20);
setTile (x+1, y+1, z, 20);
setTile (x-1, y+1, z-1, 20);
setTile (x+1, y+1, z-1, 20);
setTile (x-1, y+1, z+1, 20);
setTile (x+1, y+1, z+1, 20);
setTile (x+2, y+1, z, 20);
setTile (x+2, y+1, z+1, 58);
addItemInventory (58, -1); 
if (questpart == 2) 
{
clientMessage ("<???> You have proved your loyalty...");
clientMessage ("<???> I respect that.");
clientMessage ("<???> Did I introduce myself?");
clientMessage ("<???> Call me the Old Hero.");
clientMessage ("<???> Now, to make the crafting \n table act like normal, \n tap it on iron again.");
clientMessage ("<???> Call out '/secretct t' to \n see all unlocked recepies.");
clientMessage ("<???> but.. have you used a hoe yet?");
questpart = 3;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
}
}
}
else if (nc == 0 &&blockId == 15)
{
nc = 1;
print ("The crafting table's secrets were unlocked!"); //PC crafting activation
}
else if (questpart == 1 && nc == 0)
{
clientMessage ("<???> That crafting table...");
clientMessage ("<???> There are hidden recepies...");
clientMessage ("<???> To access them you must unlock it...");
clientMessage ("<???> by tapping it on Iron Ore...");
questpart = 2;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
}
}
else if (blockId == 20 && getTile (x-1, y, z) == 20 && getTile (x-2, y, z) == 20 && getTile (x-3, y, z) == 20 && getTile (x-1, y, z+1) == 20 && getTile (x-1, y, z-1) == 20 && getTile (x-2, y, z+1) == 20 && getTile (x-2, y, z-1) == 20 && getTile (x-3, y, z-1) == 20 && getTile (x-3, y, z+1) == 20 && getTile (x, y, z+1) == 58) //Checks if you are using the Crafting Table
{
if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 0 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 0 && getTile (x-2, y+1, z+1) == 0 && getTile (x-2, y+1, z-1) == 0 && getTile (x-3, y+1, z-1) == 0 && getTile (x-3, y+1, z+1) == 0) //Removal of the PC Crafting Table
{
preventDefault();
Level.destroyBlock (x, y, z, false);
Level.destroyBlock (x-1, y, z, false);
Level.destroyBlock (x-1, y, z-1, false);
Level.destroyBlock (x-1, y, z+1, false);
Level.destroyBlock (x-2, y, z, false);
Level.destroyBlock (x-2, y, z-1, false);
Level.destroyBlock (x-2, y, z+1, false);
Level.destroyBlock (x-3, y, z+1, false);
Level.destroyBlock (x-3, y, z-1, false);
Level.destroyBlock (x-3, y, z, false);
Level.destroyBlock (x, y, z+1, false);
Level.dropItem (x-2, y, z, 1, 58, 1, 0); 
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 87 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 0 && getTile (x-2, y+1, z+1) == 73 && getTile (x-2, y+1, z-1) == 87 && getTile (x-3, y+1, z-1) == 0 && getTile (x-3, y+1, z+1) == 0) //Hellfire Sword Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.dropItem (x, y, z, 1, 500, 1, 0);
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 14 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 0 && getTile (x-2, y+1, z+1) == 14 && getTile (x-2, y+1, z-1) == 18 && getTile (x-3, y+1, z-1) == 0 && getTile (x-3, y+1, z+1) == 0) //TreeRoot Shovel Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.dropItem (x, y, z, 1, 501, 1, 0);
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 15 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 20 && getTile (x-2, y+1, z+1) == 15 && getTile (x-2, y+1, z-1) == 20 && getTile (x-3, y+1, z-1) == 20 && getTile (x-3, y+1, z+1) == 0) //SkyBreeze Pickaxe Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.destroyBlock (x-1, y+1, z-1, false);
Level.destroyBlock (x-3, y+1, z-1, false);
Level.dropItem (x, y, z, 1, 502, 1, 0);
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 21 && getTile (x-3, y+1, z) == 49 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 0 && getTile (x-2, y+1, z+1) == 21 && getTile (x-2, y+1, z-1) == 49 && getTile (x-3, y+1, z-1) == 49 && getTile (x-3, y+1, z+1) == 0) //MutantEarth Axe Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.destroyBlock (x-1, y+1, z-1, false);
Level.destroyBlock (x-3, y+1, z, false);
Level.dropItem (x, y, z, 1, 503, 1, 0);
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 56 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 0 && getTile (x-2, y+1, z+1) == 56 && getTile (x-2, y+1, z-1) == 79 && getTile (x-3, y+1, z-1) == 79 && getTile (x-3, y+1, z+1) == 0) //NeptuneWave Hoe Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.destroyBlock (x-3, y+1, z-1, false);
Level.dropItem (x, y, z, 1, 504, 1, 0);
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 98 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 0 && getTile (x-2, y+1, z+1) == 47 && getTile (x-2, y+1, z-1) == 79 && getTile (x-3, y+1, z-1) == 0 && getTile (x-3, y+1, z+1) == 0) //Water Staff Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.dropItem (x, y, z, 1, 480, 1, 0);
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 98 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 0 && getTile (x-2, y+1, z+1) == 47 && getTile (x-2, y+1, z-1) == 17 && getTile (x-3, y+1, z-1) == 0 && getTile (x-3, y+1, z+1) == 0) //Plant Staff Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.dropItem (x, y, z, 1, 481, 1, 0);
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 98 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 0 && getTile (x-2, y+1, z+1) == 47 && getTile (x-2, y+1, z-1) == 89 && getTile (x-3, y+1, z-1) == 0 && getTile (x-3, y+1, z+1) == 0) //Light Staff Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.dropItem (x, y, z, 1, 482, 1, 0);
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 98 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 0 && getTile (x-2, y+1, z+1) == 47 && getTile (x-2, y+1, z-1) == 35 && getTile (x-3, y+1, z-1) == 0 && getTile (x-3, y+1, z+1) == 0) //Sky Staff Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.dropItem (x, y, z, 1, 483, 1, 0);
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 98 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 0 && getTile (x-2, y+1, z+1) == 47 && getTile (x-2, y+1, z-1) == 49 && getTile (x-3, y+1, z-1) == 0 && getTile (x-3, y+1, z+1) == 0) //Dark Staff Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.dropItem (x, y, z, 1, 484, 1, 0);
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 98 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 0 && getTile (x-2, y+1, z+1) == 47 && getTile (x-2, y+1, z-1) == 87 && getTile (x-3, y+1, z-1) == 0 && getTile (x-3, y+1, z+1) == 0) //Fire Staff Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.dropItem (x, y, z, 1, 485, 1, 0);
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 98 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 0 && getTile (x-2, y+1, z+1) == 47 && getTile (x-2, y+1, z-1) == 3 && getTile (x-3, y+1, z-1) == 0 && getTile (x-3, y+1, z+1) == 0) //Earth Staff Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.dropItem (x, y, z, 1, 486, 1, 0);
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 98 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) ==  87 && getTile (x-2, y+1, z+1) == 47 && getTile (x-2, y+1, z-1) == 155 && getTile (x-3, y+1, z+1) == 0 && getTile (x-3, y+1, z-1) == 89) //Heat Staff Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-3, y+1, z-1, false);
Level.destroyBlock (x-1, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.dropItem (x, y, z, 1, 487, 1, 0);
}
else if(getTile (x-1, y+1, z) == 0 && getTile (x-2, y+1, z) == 98 && getTile (x-3, y+1, z) == 0 && getTile (x-1, y+1, z+1) == 0 && getTile (x-1, y+1, z-1) == 49 && getTile (x-2, y+1, z+1) == 47 && getTile (x-2, y+1, z-1) == 155 && getTile (x-3, y+1, z+1) == 0 && getTile (x-3, y+1, z-1) == 79) //Freeze Staff Crafting
{
Level.destroyBlock (x-2, y+1, z, false);
Level.destroyBlock (x-3, y+1, z-1, false);
Level.destroyBlock (x-1, y+1, z-1, false);
Level.destroyBlock (x-2, y+1, z+1, false);
Level.destroyBlock (x-2, y+1, z-1, false);
Level.dropItem (x, y, z, 1, 488, 1, 0);
}

}
else if (itemId == 290 || itemId == 291 || itemId == 292 || itemId == 293 || itemId == 294) //Obtaining New Food by hoeing
{
if (questpart == 3)
{
clientMessage ("<OldHero> In this world...");
clientMessage ("<OldHero> There are 5 food sources \n obtained by hoeing.");
clientMessage ("<OldHero> Seaweed, from \n hoeing underwater");
clientMessage ("<OldHero> Potatoes, from \n hoeing dirt");
clientMessage ("<OldHero> and the 3 seeds \n that have to be \n planted in farmland.");
clientMessage ("<OldHero> But... I suggest you find more ores");
questpart = 4;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
}
if (blockId == 3 && questpart != 3)
{
if (getTile (x, y+1, z) == 8 && getTile (x, y+2, z) == 8|| getTile (x, y+1, z) == 9 && getTile (x, y+2, z) == 9) //Obtaining Seaweed
{
var chance = Math.floor ((Math.random () * 30) +1);
if (chance <= 10)
{
Level.dropItem (x, y+1, z, 1, 490, 1, 0); 
}
}
else if (getTile (x, y+1, z) == 0) //Obtaining Potatoes
{
var chanses = Math.floor ((Math.random() * 5) + 1);
if (chanses == 1)
{
Level.dropItem (x, y+1, z, 1, 493, 1, 0); 
}
}
}
else if (blockId == 2 && getTile (x, y+1, z) == 0 && questpart != 3) //Obtaining Chilli and Calabash Seeds
{
var chanse = Math.floor ((Math.random () * 30) +1);
if (chanse <= 5)
{
Level.dropItem (x, y+1, z, 1, 470, 1, 0);
}
else if (chanse >= 25)
{
Level.dropItem (x, y+1, z, 1, 471, 1, 0); 
}
}
}
else if (itemId == 470 && blockId == 60) //Planting Chilli
{
var farmlandata = Level.getData (x, y, z);
addItemInventory (470, -1);
setTile (x, y+1, z, 18, 7);
setTile (x, y, z, 60, farmlandata); 
}
else if (itemId == 471 && blockId == 60) //Planting Calabash
{
var soildata = Level.getData (x, y, z);
addItemInventory (471, -1);
setTile (x, y+1, z, 18, 8);
setTile (x, y, z, 60, soildata);
}
else if (blockId == 18) //Plants
{
if(Level.getData (x, y, z) == 8) //Calabash Bush picking
{
setTile (x, y, z, 254);
var chancke = Math.floor ((Math.random() * 10) +1);
if (chancke <= 4)
{
Level.dropItem (x, y, z, 1, 494, 1, 0); 
}
else if (chancke >= 7)
{
Level.dropItem (x, y, z, 1, 471, 1, 0);
}
}
else if (Level.getData (x, y, z) == 7) //Chilli Bush Picking
{
setTile (x, y, z, 254);
var chanke = Math.floor ((Math.random() * 10) +1);
if (chanke <= 3)
{
Level.dropItem (x, y, z, 1, 491, 1, 0); 
}
else if (chanke >= 4 && chanke <= 6)
{
Level.dropItem (x, y, z, 1, 492, 1, 0); 
}
else if (chanke >= 7)
{
Level.dropItem (x, y, z, 1, 470, 1, 0); 
}
}
}
else if (itemId == 460) //Earth Spirit Spawn
{
addItemInventory (460, -1);
spawnPigZombie (x, y+1, z, 486, "mob/earthman.png"); 
clientMessage ("The Earth Spirit was summoned");
}
else if (itemId == 461) //Sky Spirit Spawn
{
addItemInventory (461, -1);
spawnPigZombie (x, y+1, z, 483, "mob/skyman.png"); 
clientMessage ("The Sky Spirit was summoned");
}
else if (itemId == 462) //Water Spirit Spawn
{
addItemInventory (462, -1);
clientMessage ("The Water Spirit was summoned");
var watersummon = Math.floor ((Math.random() * 10) + 1);
if (watersummon <= 9)
{
spawnPigZombie (x, y+1, z, 480, "mob/waterman.png"); 
}
else if (watersummon == 10)
{
spawnPigZombie (x, y+1, z, 488, "mob/waterman.png"); 
}
}
else if (itemId == 463) //Fire Spirit Spawn
{
addItemInventory (463, -1);
clientMessage ("The Fire Spirit was summoned");
var firesummon = Math.floor ((Math.random() * 10) + 1);
if (firesummon <= 9)
{
spawnPigZombie (x, y+1, z, 485, "mob/fireman.png"); 
}
else if (firesummon == 10)
{
spawnPigZombie (x, y+1, z, 487, "mob/fireman.png"); 
}
}
else if (itemId == 464) //Plant Spirit Spawn
{
addItemInventory (464, -1);
spawnPigZombie (x, y+1, z, 481, "mob/plantman.png"); 
clientMessage ("The Plant Spirit was summoned");
}
else if (itemId == 264 && es == 0 && fs == 0 && ss == 0 && ps == 0 && ws == 0) //Obtaining of Spirit Summoners
{
if (questpart == 5)
{
preventDefault();
clientMessage ("<OldHero> I think you should start \n making the sacred staffs \n now.");
clientMessage ("<OldHero> There are 9 staffs \n each with special \n powers.");
clientMessage ("<OldHero> The elemental spirits hold staffs too.");
clientMessage ("<OldHero> To find out what \n staff recepies are...");
clientMessage ("<OldHero> Call out '/secretct s...");
clientMessage ("<OldHero> After that... \n you should make a \n Nether Reactor...");
questpart = 6;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
}
if (blockId == 35)
{
addItemInventory (264, -1);
setTile (x, y, z, 4);
addItemInventory (461, 1);
clientMessage ("The Diamond absorbed the power of air");
}
else if (blockId == 3)
{
addItemInventory (264, -1);
setTile (x, y, z, 4);
addItemInventory (460, 1);
clientMessage ("The Diamond absorbed the power of ground");
}
else if (blockId == 87)
{
addItemInventory (264, -1);
setTile (x, y, z, 4);
addItemInventory (463, 1);
clientMessage ("The Diamond absorbed the power of flame");
}
else if (blockId == 79)
{
addItemInventory (264, -1);
setTile (x, y, z, 4);
addItemInventory (462, 1);
clientMessage ("The Diamond absorbed the power of aqua");
}
else if (blockId == 17)
{
addItemInventory (264, -1);
setTile (x, y, z, 4);
addItemInventory (464, 1);
clientMessage ("The Diamond absorbed the power of plants");
}
}
else if (itemId == 504) //NeptuneWave Hoe
{
if (blockId == 3)
{
preventDefault();
setTile (x, y, z, 60, 8);
Level.dropItem (x, y+1, z, 1, 493, 1, 0);
}
else if (blockId == 60)
{
preventDefault();
setTile (x, y, z, 60, 8);
}
else if (blockId == 2)
{
preventDefault();
setTile (x, y, z, 60, 8);
var seedrop = Math.floor ((Math.random() * 30) + 1);
if (seedrop <= 18)
{
Level.dropItem (x, y+1, z, 1, 295, 1, 0);
}
else if (seedrop <= 19 || seedrop >= 24)
{
Level.dropItem (x, y+1, z, 1, 470, 1, 0);
}
else if (seedrop >= 25 || seedrop <= 30)
{
Level.dropItem (x, y+1, z, 1, 471, 1, 0);
}
}
}
else if(itemId == 503 && blockId == 17) //MutantEarth Axe
{
preventDefault();
var chop = Level.getData(x, y, z);
Level.destroyBlock (x, y, z, false);
Level.dropItem (x, y, z, 1, 17, 1, chop);
for (var a = 1; a < 128; a++)
{
var treecheck = Level.getData (x, y+a, z);
if(getTile (x, y + a, z) == 17)
{
if(treecheck == 0)
{
Level.dropItem (x, y, z, 1, 17, 1, 0);
setTile (x, y + a, z, 0);
}
else if (treecheck == 1)
{
Level.dropItem (x, y, z, 1, 17, 1, 1);
setTile (x, y + a, z, 0);
}
else if (treecheck == 2)
{
Level.dropItem (x, y, z, 1, 17, 1, 2);
setTile (x,y + a, z + a, 0);
}
}
else { break; }
}
preventDefault();
}
else if (itemId == 502) //SkyBreeze Pickaxe
{
var minedblock = getTile (x, y, z);
var minedblockdata = Level.getData (x, y, z);
if (minedblock == 1 || minedblock == 4 || minedblock == 14 || minedblock == 15 || minedblock == 16 || minedblock == 20 || minedblock == 21 || minedblock == 22 || minedblock == 24 || minedblock == 41 || minedblock == 42 || minedblock == 43 || minedblock == 44 || minedblock == 45 || minedblock == 48 || minedblock == 49 || minedblock == 56 || minedblock == 57 || minedblock == 61 || minedblock == 62 || minedblock == 67 || minedblock == 73 || minedblock == 74 || minedblock == 79 || minedblock == 112 || minedblock == 89 || minedblock == 98 || minedblock == 102 || minedblock == 108 || minedblock == 109 || minedblock == 112 || minedblock == 114 || minedblock == 128 ||minedblock == 155 || minedblock == 156 || minedblock == 245 || minedblock == 246 || minedblock == 247 || minedblock == 255)
{
Level.destroyBlock (x, y, z, false);
Level.dropItem (x, y, z, 1, minedblock, 1, minedblockdata);
}
else if (minedblock == 71)
{
Level.destroyBlock (x, y, z, false);
Level.dropItem (x, y, z, 1, 330, 1, 0);
}
else if (minedblock == 7)
{
Level.destroyBlock (x, y, z, false);
setTile (x, y, z, 7);
}
}
else if (itemId == 501) //TreeRoot Shovel
{
if (blockId == 2 || blockId == 3 || blockId == 12 || blockId == 13 || blockId == 60 || blockId == 78 || blockId == 80 || blockId == 82 || blockId == 253 || blockId == 248 || blockId == 249)
{
var drop = getTile (x, y, z);
if (getTile (x-1, y, z) == blockId && getTile (x+1, y, z) == blockId && getTile (x, y, z-1) == blockId && getTile (x, y, z+1) == blockId && getTile (x-1, y, z-1) == blockId && getTile (x+1, y, z+1) == blockId && getTile (x+1, y, z-1) == blockId && getTile (x-1, y, z+1) == blockId)
{
if (drop == 2 || drop == 60 || drop == 3)
{
Level.destroyBlock (x, y, z, false);
Level.dropItem (x, y, z, 1, 3, 1, 0);
Level.destroyBlock (x-1, y, z, false);
Level.dropItem (x-1, y, z, 1, 3, 1, 0);
Level.destroyBlock (x+1, y, z, false);
Level.dropItem (x+1, y, z, 1, 3, 1, 0);
Level.destroyBlock (x, y, z+1, false);
Level.dropItem (x, y, z+1, 1, 3, 1, 0);
Level.destroyBlock (x, y, z-1, false);
Level.dropItem (x, y, z-1, 1, 3, 1, 0);
Level.destroyBlock (x-1, y, z-1, false);
Level.dropItem (x-1, y, z-1, 1, 3, 1, 0);
Level.destroyBlock (x+1, y, z+1, false);
Level.dropItem (x+1, y, z+1, 1, 3, 1, 0);
Level.destroyBlock (x-1, y, z+1, false);
Level.dropItem (x-1, y, z+1, 1, 3, 1, 0);
Level.destroyBlock (x+1, y, z-1, false);
Level.dropItem (x+1, y, z-1, 1, 3, 1, 0);
}
else if (drop == 12)
{
Level.destroyBlock (x, y, z, true);
Level.destroyBlock (x-1, y, z, true);
Level.destroyBlock (x+1, y, z, true);
Level.destroyBlock (x, y, z+1, true);
Level.destroyBlock (x, y, z-1, true);
Level.destroyBlock (x-1, y, z-1, true);
Level.destroyBlock (x+1, y, z+1, true);
Level.destroyBlock (x-1, y, z+1, true);
Level.destroyBlock (x+1, y, z-1, true);
}
else if (drop == 78)
{
Level.destroyBlock (x, y, z, false);
Level.dropItem (x, y, z, 1, 332, 1, 0);
Level.destroyBlock (x-1, y, z, false);
Level.dropItem (x-1, y, z, 1, 332, 1, 0);
Level.destroyBlock (x+1, y, z, false);
Level.dropItem (x+1, y, z, 1, 332, 1, 0);
Level.destroyBlock (x, y, z+1, false);
Level.dropItem (x, y, z+1, 1, 332, 1, 0);
Level.destroyBlock (x, y, z-1, false);
Level.dropItem (x, y, z-1, 1, 332, 1, 0);
Level.destroyBlock (x-1, y, z-1, false);
Level.dropItem (x-1, y, z-1, 1, 332, 1, 0);
Level.destroyBlock (x+1, y, z+1, false);
Level.dropItem (x+1, y, z+1, 1, 332, 1, 0);
Level.destroyBlock (x-1, y, z+1, false);
Level.dropItem (x-1, y, z+1, 1, 332, 1, 0);
Level.destroyBlock (x+1, y, z-1, false);
Level.dropItem (x+1, y, z-1, 1, 332, 1, 0);
}
else if (drop == 80)
{
Level.destroyBlock (x, y, z, false);
Level.dropItem (x, y, z, 1, 332, 4, 0);
Level.destroyBlock (x-1, y, z, false);
Level.dropItem (x-1, y, z, 1, 332, 4, 0);
Level.destroyBlock (x+1, y, z, false);
Level.dropItem (x+1, y, z, 1, 332, 4, 0);
Level.destroyBlock (x, y, z+1, false);
Level.dropItem (x, y, z+1, 1, 332, 4, 0);
Level.destroyBlock (x, y, z-1, false);
Level.dropItem (x, y, z-1, 1, 332, 4, 0);
Level.destroyBlock (x-1, y, z-1, false);
Level.dropItem (x-1, y, z-1, 1, 332, 4, 0);
Level.destroyBlock (x+1, y, z+1, false);
Level.dropItem (x+1, y, z+1, 1, 332, 4, 0);
Level.destroyBlock (x-1, y, z+1, false);
Level.dropItem (x-1, y, z+1, 1, 332, 4, 0);
Level.destroyBlock (x+1, y, z-1, false);
Level.dropItem (x+1, y, z-1, 1, 332, 4, 0);
}
else if (drop == 82)
{
Level.destroyBlock (x, y, z, false);
Level.dropItem (x, y, z, 1, 337, 4, 0);
Level.destroyBlock (x-1, y, z, false);
Level.dropItem (x-1, y, z, 1, 337, 4, 0);
Level.destroyBlock (x+1, y, z, false);
Level.dropItem (x+1, y, z, 1, 337, 4, 0);
Level.destroyBlock (x, y, z+1, false);
Level.dropItem (x, y, z+1, 1, 337, 4, 0);
Level.destroyBlock (x, y, z-1, false);
Level.dropItem (x, y, z-1, 1, 337, 4, 0);
Level.destroyBlock (x-1, y, z-1, false);
Level.dropItem (x-1, y, z-1, 1, 337, 4, 0);
Level.destroyBlock (x+1, y, z+1, false);
Level.dropItem (x+1, y, z+1, 1, 337, 4, 0);
Level.destroyBlock (x-1, y, z+1, false);
Level.dropItem (x-1, y, z+1, 1, 337, 4, 0);
Level.destroyBlock (x+1, y, z-1, false);
Level.dropItem (x+1, y, z-1, 1, 337, 4, 0);
}
else if (drop == 253 || drop == 248 || drop == 249)
{
Level.destroyBlock (x, y, z, false);
Level.destroyBlock (x-1, y, z, false);
Level.destroyBlock (x+1, y, z, false);
Level.destroyBlock (x, y, z+1, false);
Level.destroyBlock (x, y, z-1, false);
Level.destroyBlock (x-1, y, z-1, false);
Level.destroyBlock (x+1, y, z+1, false);
Level.destroyBlock (x-1, y, z+1, false);
Level.destroyBlock (x+1, y, z-1, false);
}
else if (drop == 13)
{
Level.destroyBlock (x, y, z, false);
Level.dropItem (x, y, z, 1, 318, 4, 0);
Level.destroyBlock (x-1, y, z, false);
Level.dropItem (x-1, y, z, 1, 318, 4, 0);
Level.destroyBlock (x+1, y, z, false);
Level.dropItem (x+1, y, z, 1, 318, 4, 0);
Level.destroyBlock (x, y, z+1, false);
Level.dropItem (x, y, z+1, 1, 318, 4, 0);
Level.destroyBlock (x, y, z-1, false);
Level.dropItem (x, y, z-1, 1, 318, 4, 0);
Level.destroyBlock (x-1, y, z-1, false);
Level.dropItem (x-1, y, z-1, 1, 318, 4, 0);
Level.destroyBlock (x+1, y, z+1, false);
Level.dropItem (x+1, y, z+1, 1, 318, 4, 0);
Level.destroyBlock (x-1, y, z+1, false);
Level.dropItem (x-1, y, z+1, 1, 318, 4, 0);
Level.destroyBlock (x+1, y, z-1, false);
Level.dropItem (x+1, y, z-1, 1, 318, 4, 0);
}
}
}
}
else if (itemId == 484)//Dark Staff
{
Level.setTime (7);
}
else if (itemId == 482) //Light Staff
{
Level.setTime (1);
}
else if (itemId == 480) //Water Staff
{
if (side == 1 && getTile (x, y+1, z) == 0)
{
setTile (x, y+1, z, 9);
}
else if (side == 0 && getTile (x, y-1, z) == 0)
{
setTile (x, y-1, z, 9);
}
else if (side == 2 && getTile (x, y, z-1) == 0)
{
setTile (x, y, z-1, 9);
}
else if (side == 3 && getTile (x, y, z+1) == 0)
{
setTile (x, y, z+1, 9);
}
else if (side == 4 && getTile (x-1, y, z) == 0)
{
setTile (x-1, y, z, 9);
}
else if (side == 5 && getTile (x+1, y, z) == 0)
{
setTile (x+1, y, z, 9);
}
}
else if (itemId == 481) //Plant Staff
{
if (blockId == 3)
{
setTile (x, y, z, 35, 13);
Level.destroyBlock (x, y, z, false);
setTile (x, y, z, 2);
}
else if (blockId == 4)
{
setTile (x, y, z, 35, 13);
Level.destroyBlock (x, y, z, false);
setTile (x, y, z, 48);
}
else if (blockId == 98 && Level.getData (x, y, z) == 0 || blockId == 98 && Level.getData (x, y, z) == 2)
{
setTile (x, y, z, 35, 13);
Level.destroyBlock (x, y, z, false);
setTile (x, y, z, 98, 1);
}
else if (blockId == 31)
{
setTile (x, y, z, 35, 13);
Level.destroyBlock (x, y, z, false);
var saptype = Math.floor ((Math.random() * 3) +1);
if (saptype == 1)
{
setTile (x, y, z, 6, 0);
}
else if (saptype == 2)
{
setTile (x, y, z, 6, 1);
}
else if (saptype == 3)
{
setTile (x, y, z, 6, 2);
}
}
}
else if (itemId == 483) //Sky Staff
{
setVelY (getPlayerEnt(), 1);
}
else if (itemId == 485) //Fire Staff
{
if (blockId == 45)
{
explode (x, y, z, 0.5);
}
else if (blockId > 45 || blockId < 45)
{
if (side == 1 && getTile (x, y+1, z) == 0)
{
setTile (x, y+1, z, 51);
}
else if (side == 0 && getTile (x, y-1, z) == 0)
{
setTile (x, y-1, z, 51);
}
else if (side == 2 && getTile (x, y, z-1) == 0)
{
setTile (x, y, z-1, 51);
}
else if (side == 3 && getTile (x, y, z+1) == 0)
{
setTile (x, y, z+1, 51);
}
else if (side == 4 && getTile (x-1, y, z) == 0)
{
setTile (x-1, y, z, 51);
}
else if (side == 5 && getTile (x+1, y, z) == 0)
{
setTile (x+1, y, z, 51);
}
}
}
else if (itemId == 486) //Earth Staff
{
if (blockId == 2)
{
setTile (x, y, z, 35, 12);
Level.destroyBlock (x, y, z, false);
setTile (x, y, z, 3);
}
else if (blockId == 48)
{
setTile (x, y, z, 35, 12);
Level.destroyBlock (x, y, z, false);
setTile (x, y, z, 4);
}
else if (blockId == 98 && Level.getData (x, y, z) == 1)
{
setTile (x, y, z, 35, 12);
Level.destroyBlock (x, y, z, false);
setTile (x, y, z, 98, 0);
}
else if (blockId == 6)
{
setTile (x, y, z, 35, 12);
Level.destroyBlock (x, y, z, false);
setTile (x, y, z, 31);
}
}
else if (itemId == 487) //Heat Staff
{
if (blockId == 78 || blockId == 80)
{
setTile (x, y, z, 0);
}
else if (blockId == 79)
{
setTile (x, y, z, 9);
}
else if (blockId == 49)
{
setTile (x, y, z, 11);
}
}
else if (itemId == 488) //Freeze Staff
{
if (side == 1)
{
if (getTile (x, y+1, z) == 9)
{
setTile (x, y+1, z, 79);
}
else if (getTile (x, y+1, z) == 11)
{
setTile (x, y+1, z, 49);
}
}
else if (side == 0)
{
if (getTile (x, y-1, z) == 9)
{
setTile (x, y-1, z, 79);
}
else if (getTile (x, y-1, z) == 11)
{
setTile (x, y-1, z, 49);
}
}
else if (side == 2)
{
if (getTile (x, y, z-1) == 9)
{
setTile (x, y, z-1, 79);
}
else if (getTile (x, y, z-1) == 11)
{
setTile (x, y, z-1, 49);
}
}
else if (side == 3)
{
if (getTile (x, y, z+1) == 9)
{
setTile (x, y, z+1, 79);
}
else if (getTile (x, y, z+1) == 11)
{
setTile (x, y, z+1, 49);
}
}
else if (side == 4)
{
if (getTile (x-1, y, z) == 9)
{
setTile (x-1, y, z, 79);
}
else if (getTile (x-1, y, z) == 11)
{
setTile (x-1, y, z, 49);
}
}
else if (side == 5)
{
if (getTile (x+1, y, z) == 9)
{
setTile (x+1, y, z, 79);
}
else if (getTile (x+1, y, z) == 11)
{
setTile (x+1, y, z, 49);
}
}
}
if (blockId == 247 && questpart == 6)
{
clientMessage ("<OldHero> Once you make \n the Nether Reactor...");
clientMessage ("<OldHero> Collect the netherrack \n for the special items..,");
clientMessage ("<OldHero> Then you can summon \n the Elementals... \n with glowstone...");
clientMessage ("<OldHero>They are like the spirits \n but are like the \n bosses...");
clientMessage ("<OldHero> But careful... \n Don't do what I did...");
clientMessage ("<OldHero> Are you wandering why \n you can't see me...?");
clientMessage ("<OldHero> ...");
questpart = 7;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
}
else if (blockId == 89 && questpart == 7)
{
clientMessage ("<OldHero> To create the \n element summoner...");
clientMessage ("<OldHero> You need glowstone \n in the middle, \n Stone Brick around it \n and a Chiseled Quartz \n on top...");
clientMessage ("<OldHero> Tap that Quartz \n with the specific summoner \n to spawn the specific boss...");
clientMessage ("<OldHero> But... again.. be careful...");
clientMessage ("<OldHero> There is one boss that is \n a real challenge...");
clientMessage ("<OldHero> I know for a fact...");
questpart = 8;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
}
if (blockId == 155 && Level.getData(x, y, z) == 1 && getTile (x-1, y-1, z) == 98 && getTile (x+1, y-1, z) == 98 && getTile (x, y-1, z-1) == 98 && getTile (x, y-1, z+1) == 98 && getTile (x-1, y-1, z-1) == 98 && getTile (x+1, y-1, z+1) == 98 && getTile (x-1, y-1, z+1) == 98 && getTile (x+1, y-1, z-1) == 98 && getTile (x, y-1, z) == 89) //Boss summoner detection
{
if (questpart >= 9)
{
if (itemId == 460) //Earth Boss spawning
{
if (ps == 0 && ss == 0 && ws == 0 && fs == 0)
{
preventDefault();
earthX = x;
earthY = y;
earthZ = z;
clientMessage ("Grondia was summoned...");
es = 1;
earthbh = 840;
setTile (earthX, earthY + 1, earthZ, 3);

setTile (earthX+1, earthY + 2, earthZ, 3);
setTile (earthX-1, earthY + 2, earthZ, 3);
setTile (earthX, earthY + 2, earthZ+1, 3);
setTile (earthX, earthY + 2, earthZ-1, 3);

setTile (earthX+1, earthY + 3, earthZ, 13);
setTile (earthX+1, earthY + 3, earthZ-1, 3);
setTile (earthX+1, earthY + 3, earthZ+1, 3);

setTile (earthX, earthY + 3, earthZ+2, 3);
setTile (earthX, earthY + 3, earthZ-2, 3);

setTile (earthX-2, earthY + 3, earthZ, 3);
setTile (earthX-1, earthY + 3, earthZ-1, 3);
setTile (earthX-1, earthY + 3, earthZ+1, 3);

setTile (earthX, earthY + 4, earthZ+2, 3);
setTile (earthX, earthY + 4, earthZ-2, 3);
setTile (earthX, earthY + 4, earthZ, 10);

setTile (earthX, earthY + 5, earthZ, 3);
setTile (earthX, earthY + 5, earthZ-1, 10);
setTile (earthX, earthY + 5, earthZ+1, 10);
setTile (earthX, earthY + 5, earthZ-2, 3);
setTile (earthX, earthY + 5, earthZ+2, 3);

setTile (earthX+1, earthY + 5, earthZ+1, 3);
setTile (earthX+1, earthY + 5, earthZ-1, 3);
setTile (earthX+1, earthY + 5, earthZ+2, 3);
setTile (earthX+1, earthY + 5, earthZ-2, 3);

setTile (earthX-1, earthY + 5, earthZ-1, 3);
setTile (earthX-1, earthY + 5, earthZ+1, 3);

setTile (earthX, earthY + 6, earthZ-1, 3);
setTile (earthX, earthY + 6, earthZ+1, 3);
setTile (earthX, earthY + 6, earthZ-2, 155);
setTile (earthX, earthY + 6, earthZ+2, 155);
setTile (earthX, earthY + 6, earthZ+3, 155);
setTile (earthX, earthY + 6, earthZ-3, 155);

setTile (earthX, earthY + 7, earthZ, 3);
setTile (earthX, earthY + 7, earthZ+1, 3);
setTile (earthX, earthY + 7, earthZ-1, 3);
setTile (earthX, earthY + 7, earthZ+4, 155);
setTile (earthX, earthY + 7, earthZ-4, 155);

setTile (earthX-1, earthY + 7, earthZ+1, 3);
setTile (earthX-1, earthY + 7, earthZ-1, 3);
setTile (earthX-1, earthY + 7, earthZ, 10);
setTile (earthX-2, earthY + 7, earthZ, 3);

setTile (earthX, earthY + 8, earthZ+4, 155);
setTile (earthX, earthY + 8, earthZ-4, 155);
setTile (earthX-2, earthY + 8, earthZ, 3);
setTile (earthX-1, earthY + 8, earthZ, 3);
}
}
else if (itemId == 461) //Sky Boss spawning
{
if (ps == 0 && es == 0 && ws == 0 && fs == 0)
{
preventDefault();
skyX = x;
skyY = y;
skyZ = z;
clientMessage ("Aethorion was summoned...");
ss = 1;
skybh = 840;
setTile (skyX, skyY + 1, skyZ, 20);

setTile (skyX+1, skyY + 2, skyZ, 20);
setTile (skyX-1, skyY + 2, skyZ, 20);
setTile (skyX, skyY + 2, skyZ+1, 20);
setTile (skyX, skyY + 2, skyZ-1, 20);

setTile (skyX+1, skyY + 3, skyZ, 35);
setTile (skyX+1, skyY + 3, skyZ-1, 20);
setTile (skyX+1, skyY + 3, skyZ+1, 20);

setTile (skyX, skyY + 3, skyZ+2, 20);
setTile (skyX, skyY + 3, skyZ-2, 20);

setTile (skyX-2, skyY + 3, skyZ, 20);
setTile (skyX-1, skyY + 3, skyZ-1, 20);
setTile (skyX-1, skyY + 3, skyZ+1, 20);

setTile (skyX, skyY + 4, skyZ+2, 20);
setTile (skyX, skyY + 4, skyZ-2, 20);
setTile (skyX, skyY + 4, skyZ, 8);

setTile (skyX, skyY + 5, skyZ, 20);
setTile (skyX, skyY + 5, skyZ-1, 8);
setTile (skyX, skyY + 5, skyZ+1, 8);
setTile (skyX, skyY + 5, skyZ-2, 20);
setTile (skyX, skyY + 5, skyZ+2, 20);

setTile (skyX+1, skyY + 5, skyZ+1, 20);
setTile (skyX+1, skyY + 5, skyZ-1, 20);
setTile (skyX+1, skyY + 5, skyZ+2, 20);
setTile (skyX+1, skyY + 5, skyZ-2, 20);

setTile (skyX-1, skyY + 5, skyZ-1, 20);
setTile (skyX-1, skyY + 5, skyZ+1, 20);

setTile (skyX, skyY + 6, skyZ-1, 20);
setTile (skyX, skyY + 6, skyZ+1, 20);
setTile (skyX, skyY + 6, skyZ-2, 155);
setTile (skyX, skyY + 6, skyZ+2, 155);
setTile (skyX, skyY + 6, skyZ+3, 155);
setTile (skyX, skyY + 6, skyZ-3, 155);

setTile (skyX, skyY + 7, skyZ, 20);
setTile (skyX, skyY + 7, skyZ+1, 20);
setTile (skyX, skyY + 7, skyZ-1, 20);
setTile (skyX, skyY + 7, skyZ+4, 155);
setTile (skyX, skyY + 7, skyZ-4, 155);

setTile (skyX-1, skyY + 7, skyZ+1, 20);
setTile (skyX-1, skyY + 7, skyZ-1, 20);
setTile (skyX-1, skyY + 7, skyZ, 8);
setTile (skyX-2, skyY + 7, skyZ, 20);

setTile (skyX, skyY + 8, skyZ+4, 155);
setTile (skyX, skyY + 8, skyZ-4, 155);
setTile (skyX-2, skyY + 8, skyZ, 20);
setTile (skyX-1, skyY + 8, skyZ, 20);
}
}
else if (itemId == 462) //Water Boss spawning
{
if (ps == 0 && es == 0 && ss == 0 && fs == 0)
{
preventDefault();
waterX = x;
waterY = y;
waterZ = z;
clientMessage ("Aqueor was summoned...");
ws = 1;
waterbh = 840;
setTile (waterX, waterY + 1, waterZ, 79);

setTile (waterX+1, waterY + 2, waterZ, 79);
setTile (waterX-1, waterY + 2, waterZ, 79);
setTile (waterX, waterY + 2, waterZ+1, 79);
setTile (waterX, waterY + 2, waterZ-1, 79);

setTile (waterX+1, waterY + 3, waterZ, 80);
setTile (waterX+1, waterY + 3, waterZ-1, 79);
setTile (waterX+1, waterY + 3, waterZ+1, 79);

setTile (waterX, waterY + 3, waterZ+2, 79);
setTile (waterX, waterY + 3, waterZ-2, 79);

setTile (waterX-2, waterY + 3, waterZ, 79);
setTile (waterX-1, waterY + 3, waterZ-1, 79);
setTile (waterX-1, waterY + 3, waterZ+1, 79);

setTile (waterX, waterY + 4, waterZ+2, 79);
setTile (waterX, waterY + 4, waterZ-2, 79);
setTile (waterX, waterY + 4, waterZ, 8);

setTile (waterX, waterY + 5, waterZ, 79);
setTile (waterX, waterY + 5, waterZ-1, 8);
setTile (waterX, waterY + 5, waterZ+1, 8);
setTile (waterX, waterY + 5, waterZ-2, 79);
setTile (waterX, waterY + 5, waterZ+2, 79);

setTile (waterX+1, waterY + 5, waterZ+1, 79);
setTile (waterX+1, waterY + 5, waterZ-1, 79);
setTile (waterX+1, waterY + 5, waterZ+2, 79);
setTile (waterX+1, waterY + 5, waterZ-2, 79);

setTile (waterX-1, waterY + 5, waterZ-1, 79);
setTile (waterX-1, waterY + 5, waterZ+1, 79);

setTile (waterX, waterY + 6, waterZ-1, 79);
setTile (waterX, waterY + 6, waterZ+1, 79);
setTile (waterX, waterY + 6, waterZ-2, 155, 2);
setTile (waterX, waterY + 6, waterZ+2, 155, 2);
setTile (waterX, waterY + 6, waterZ+3, 155, 2);
setTile (waterX, waterY + 6, waterZ-3, 155, 2);

setTile (waterX, waterY + 7, waterZ, 79);
setTile (waterX, waterY + 7, waterZ+1, 79);
setTile (waterX, waterY + 7, waterZ-1, 79);
setTile (waterX, waterY + 7, waterZ+4, 155, 2);
setTile (waterX, waterY + 7, waterZ-4, 155, 2);

setTile (waterX-1, waterY + 7, waterZ+1, 79);
setTile (waterX-1, waterY + 7, waterZ-1, 79);
setTile (waterX-1, waterY + 7, waterZ, 8);
setTile (waterX-2, waterY + 7, waterZ, 79);

setTile (waterX, waterY + 8, waterZ+4, 155, 2);
setTile (waterX, waterY + 8, waterZ-4, 155, 2);
setTile (waterX-2, waterY + 8, waterZ, 79);
setTile (waterX-1, waterY + 8, waterZ, 79);
}
}
else if (itemId == 463) //Fire Boss spawning
{
if (ps == 0 && es == 0 && ws == 0 && ss == 0)
{
preventDefault();
fireX = x;
fireY = y;
fireZ = z;
clientMessage ("Volcarus was summoned...");
fs = 1;
firebh = 840;
setTile (fireX, fireY + 1, fireZ, 87);

setTile (fireX+1, fireY + 2, fireZ, 87);
setTile (fireX-1, fireY + 2, fireZ, 87);
setTile (fireX, fireY + 2, fireZ+1, 87);
setTile (fireX, fireY + 2, fireZ-1, 87);

setTile (fireX+1, fireY + 3, fireZ, 246);
setTile (fireX+1, fireY + 3, fireZ-1, 87);
setTile (fireX+1, fireY + 3, fireZ+1, 87);

setTile (fireX, fireY + 3, fireZ+2, 87);
setTile (fireX, fireY + 3, fireZ-2, 87);

setTile (fireX-2, fireY + 3, fireZ, 87);
setTile (fireX-1, fireY + 3, fireZ-1, 87);
setTile (fireX-1, fireY + 3, fireZ+1, 87);

setTile (fireX, fireY + 4, fireZ+2, 87);
setTile (fireX, fireY + 4, fireZ-2, 87);
setTile (fireX, fireY + 4, fireZ, 10);

setTile (fireX, fireY + 5, fireZ, 87);
setTile (fireX, fireY + 5, fireZ-1, 10);
setTile (fireX, fireY + 5, fireZ+1, 10);
setTile (fireX, fireY + 5, fireZ-2, 87);
setTile (fireX, fireY + 5, fireZ+2, 87);

setTile (fireX+1, fireY + 5, fireZ+1, 87);
setTile (fireX+1, fireY + 5, fireZ-1, 87);
setTile (fireX+1, fireY + 5, fireZ+2, 87);
setTile (fireX+1, fireY + 5, fireZ-2, 87);

setTile (fireX-1, fireY + 5, fireZ-1, 87);
setTile (fireX-1, fireY + 5, fireZ+1, 87);

setTile (fireX, fireY + 6, fireZ-1, 87);
setTile (fireX, fireY + 6, fireZ+1, 87);
setTile (fireX, fireY + 6, fireZ-2, 155, 2);
setTile (fireX, fireY + 6, fireZ+2, 155, 2);
setTile (fireX, fireY + 6, fireZ+3, 155, 2);
setTile (fireX, fireY + 6, fireZ-3, 155, 2);

setTile (fireX, fireY + 7, fireZ, 87);
setTile (fireX, fireY + 7, fireZ+1, 87);
setTile (fireX, fireY + 7, fireZ-1, 87);
setTile (fireX, fireY + 7, fireZ+4, 155, 2);
setTile (fireX, fireY + 7, fireZ-4, 155, 2);

setTile (fireX-1, fireY + 7, fireZ+1, 87);
setTile (fireX-1, fireY + 7, fireZ-1, 87);
setTile (fireX-1, fireY + 7, fireZ, 10);
setTile (fireX-2, fireY + 7, fireZ, 87);

setTile (fireX, fireY + 8, fireZ+4, 155, 2);
setTile (fireX, fireY + 8, fireZ-4, 155, 2);
setTile (fireX-2, fireY + 8, fireZ, 87);
setTile (fireX-1, fireY + 8, fireZ, 87);
}
}
else if (itemId == 464) //Plant Boss spawning
{
if (ss == 0 && es == 0 && ws == 0 && fs == 0)
{
preventDefault();
plantX = x;
plantY = y;
plantZ = z;
clientMessage ("Synthesius was summoned...");
ps = 1;
plantbh = 840;
setTile (plantX, plantY + 1, plantZ, 48);

setTile (plantX+1, plantY + 2, plantZ, 48);
setTile (plantX-1, plantY + 2, plantZ, 48);
setTile (plantX, plantY + 2, plantZ+1, 48);
setTile (plantX, plantY + 2, plantZ-1, 48);

setTile (plantX+1, plantY + 3, plantZ, 17);
setTile (plantX+1, plantY + 3, plantZ-1, 48);
setTile (plantX+1, plantY + 3, plantZ+1, 48);

setTile (plantX, plantY + 3, plantZ+2, 48);
setTile (plantX, plantY + 3, plantZ-2, 48);

setTile (plantX-2, plantY + 3, plantZ, 48);
setTile (plantX-1, plantY + 3, plantZ-1, 48);
setTile (plantX-1, plantY + 3, plantZ+1, 48);

setTile (plantX, plantY + 4, plantZ+2, 48);
setTile (plantX, plantY + 4, plantZ-2, 48);
setTile (plantX, plantY + 4, plantZ, 8);

setTile (plantX, plantY + 5, plantZ, 48);
setTile (plantX, plantY + 5, plantZ-1, 8);
setTile (plantX, plantY + 5, plantZ+1, 8);
setTile (plantX, plantY + 5, plantZ-2, 48);
setTile (plantX, plantY + 5, plantZ+2, 48);

setTile (plantX+1, plantY + 5, plantZ+1, 48);
setTile (plantX+1, plantY + 5, plantZ-1, 48);
setTile (plantX+1, plantY + 5, plantZ+2, 48);
setTile (plantX+1, plantY + 5, plantZ-2, 48);

setTile (plantX-1, plantY + 5, plantZ-1, 48);
setTile (plantX-1, plantY + 5, plantZ+1, 48);

setTile (plantX, plantY + 6, plantZ-1, 48);
setTile (plantX, plantY + 6, plantZ+1, 48);
setTile (plantX, plantY + 6, plantZ-2, 155, 1);
setTile (plantX, plantY + 6, plantZ+2, 155, 1);
setTile (plantX, plantY + 6, plantZ+3, 155, 1);
setTile (plantX, plantY + 6, plantZ-3, 155, 1);

setTile (plantX, plantY + 7, plantZ, 48);
setTile (plantX, plantY + 7, plantZ+1, 48);
setTile (plantX, plantY + 7, plantZ-1, 48);
setTile (plantX, plantY + 7, plantZ+4, 155, 1);
setTile (plantX, plantY + 7, plantZ-4, 155, 1);

setTile (plantX-1, plantY + 7, plantZ+1, 48);
setTile (plantX-1, plantY + 7, plantZ-1, 48);
setTile (plantX-1, plantY + 7, plantZ, 8);
setTile (plantX-2, plantY + 7, plantZ, 48);

setTile (plantX, plantY + 8, plantZ+4, 155, 1);
setTile (plantX, plantY + 8, plantZ-4, 155, 1);
setTile (plantX-2, plantY + 8, plantZ, 48);
setTile (plantX-1, plantY + 8, plantZ, 48);
}
}
}
else if (questpart < 9)
{
preventDefault();
clientMessage ("Elemental Summoner created.");
questpart = 9;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
}
}
if (blockId == 246 && fs == 1) //Fire Boss Fighting
{
if (firebh >= 9)
{
preventDefault();
if (itemId == 268 || itemId == 283)
{
firebh = firebh - 5;
clientMessage (""+firebh+" health left");
}
else if (itemId == 272)
{
firebh = firebh - 6;
clientMessage (""+firebh+" health left");
}
else if (itemId == 267)
{
firebh = firebh - 7;
clientMessage (""+firebh+" health left");
}
else if (itemId == 276)
{
firebh = firebh - 8;
clientMessage (""+firebh+" health left");
}
else if (itemId != 268 || itemId != 272 || itemId != 267 || itemId != 276 || itemId != 283)
{
firebh = firebh - 1;
clientMessage (""+firebh+" health left");
}
}
else if (firebh < 9)
{
preventDefault();
fs = 0;
clientMessage ("Volcarus was slain");
explode (x, y, z, 0.1);
setTile (fireX, fireY + 1, fireZ, 0);

setTile (fireX+1, fireY + 2, fireZ, 0);
setTile (fireX-1, fireY + 2, fireZ, 0);
setTile (fireX, fireY + 2, fireZ+1, 0);
setTile (fireX, fireY + 2, fireZ-1, 0);

setTile (fireX+1, fireY + 3, fireZ, 49);
setTile (fireX+1, fireY + 3, fireZ-1, 0);
setTile (fireX+1, fireY + 3, fireZ+1, 0);

setTile (fireX, fireY + 3, fireZ+2, 0);
setTile (fireX, fireY + 3, fireZ-2, 0);

setTile (fireX-2, fireY + 3, fireZ, 0);
setTile (fireX-1, fireY + 3, fireZ-1, 0);
setTile (fireX-1, fireY + 3, fireZ+1, 0);

setTile (fireX, fireY + 4, fireZ+2, 0);
setTile (fireX, fireY + 4, fireZ-2, 0);
setTile (fireX, fireY + 4, fireZ, 0);

setTile (fireX, fireY + 5, fireZ, 0);
setTile (fireX, fireY + 5, fireZ-1, 0);
setTile (fireX, fireY + 5, fireZ+1, 0);
setTile (fireX, fireY + 5, fireZ-2, 0);
setTile (fireX, fireY + 5, fireZ+2, 0);

setTile (fireX+1, fireY + 5, fireZ+1, 0);
setTile (fireX+1, fireY + 5, fireZ-1, 0);
setTile (fireX+1, fireY + 5, fireZ+2, 0);
setTile (fireX+1, fireY + 5, fireZ-2, 0);

setTile (fireX-1, fireY + 5, fireZ-1, 0);
setTile (fireX-1, fireY + 5, fireZ+1, 0);

setTile (fireX, fireY + 6, fireZ-1, 0);
setTile (fireX, fireY + 6, fireZ+1, 0);
setTile (fireX, fireY + 6, fireZ-2, 0);
setTile (fireX, fireY + 6, fireZ+2, 0);
setTile (fireX, fireY + 6, fireZ+3, 0);
setTile (fireX, fireY + 6, fireZ-3, 0);

setTile (fireX, fireY + 7, fireZ, 0);
setTile (fireX, fireY + 7, fireZ+1, 0);
setTile (fireX, fireY + 7, fireZ-1, 0);
setTile (fireX, fireY + 7, fireZ+4, 0);
setTile (fireX, fireY + 7, fireZ-4, 0);

setTile (fireX-1, fireY + 7, fireZ+1, 0);
setTile (fireX-1, fireY + 7, fireZ-1, 0);
setTile (fireX-1, fireY + 7, fireZ, 0);
setTile (fireX-2, fireY + 7, fireZ, 0);

setTile (fireX, fireY + 8, fireZ+4, 0);
setTile (fireX, fireY + 8, fireZ-4, 0);
setTile (fireX-2, fireY + 8, fireZ, 0);
setTile (fireX-1, fireY + 8, fireZ, 0);
bosseskilled = bosseskilled + 1;
Level.dropItem (x, y, z, 1, 87, 32, 0);
Level.dropItem (x, y, z, 1, 463, 8, 0);
}
}
if (blockId == 17 && ps == 1) //Plant Boss Fighting
{
if (plantbh >= 9)
{
preventDefault();
if (itemId == 268 || itemId == 283)
{
plantbh = plantbh - 5;
clientMessage (""+plantbh+" health left");
}
else if (itemId == 272)
{
plantbh = plantbh - 6;
clientMessage (""+plantbh+" health left");
}
else if (itemId == 267)
{
plantbh = plantbh - 7;
clientMessage (""+plantbh+" health left");
}
else if (itemId == 276)
{
plantbh = plantbh - 8;
clientMessage (""+plantbh+" health left");
}
else if (itemId != 268 || itemId != 272 || itemId != 267 || itemId != 276 || itemId != 283)
{
plantbh = plantbh - 1;
clientMessage (""+plantbh+" health left");
}
}
else if (plantbh < 9)
{
preventDefault();
ps = 0;
clientMessage ("Synthesius was slain");
explode (x, y, z, 0.1);
setTile (plantX, plantY + 1, plantZ, 0);

setTile (plantX+1, plantY + 2, plantZ, 0);
setTile (plantX-1, plantY + 2, plantZ, 0);
setTile (plantX, plantY + 2, plantZ+1, 0);
setTile (plantX, plantY + 2, plantZ-1, 0);

setTile (plantX+1, plantY + 3, plantZ, 16);
setTile (plantX+1, plantY + 3, plantZ-1, 0);
setTile (plantX+1, plantY + 3, plantZ+1, 0);

setTile (plantX, plantY + 3, plantZ+2, 0);
setTile (plantX, plantY + 3, plantZ-2, 0);

setTile (plantX-2, plantY + 3, plantZ, 0);
setTile (plantX-1, plantY + 3, plantZ-1, 0);
setTile (plantX-1, plantY + 3, plantZ+1, 0);

setTile (plantX, plantY + 4, plantZ+2, 0);
setTile (plantX, plantY + 4, plantZ-2, 0);
setTile (plantX, plantY + 4, plantZ, 0);

setTile (plantX, plantY + 5, plantZ, 0);
setTile (plantX, plantY + 5, plantZ-1, 0);
setTile (plantX, plantY + 5, plantZ+1, 0);
setTile (plantX, plantY + 5, plantZ-2, 0);
setTile (plantX, plantY + 5, plantZ+2, 0);

setTile (plantX+1, plantY + 5, plantZ+1, 0);
setTile (plantX+1, plantY + 5, plantZ-1, 0);
setTile (plantX+1, plantY + 5, plantZ+2, 0);
setTile (plantX+1, plantY + 5, plantZ-2, 0);

setTile (plantX-1, plantY + 5, plantZ-1, 0);
setTile (plantX-1, plantY + 5, plantZ+1, 0);

setTile (plantX, plantY + 6, plantZ-1, 0);
setTile (plantX, plantY + 6, plantZ+1, 0);
setTile (plantX, plantY + 6, plantZ-2, 0);
setTile (plantX, plantY + 6, plantZ+2, 0);
setTile (plantX, plantY + 6, plantZ+3, 0);
setTile (plantX, plantY + 6, plantZ-3, 0);

setTile (plantX, plantY + 7, plantZ, 0);
setTile (plantX, plantY + 7, plantZ+1, 0);
setTile (plantX, plantY + 7, plantZ-1, 0);
setTile (plantX, plantY + 7, plantZ+4, 0);
setTile (plantX, plantY + 7, plantZ-4, 0);

setTile (plantX-1, plantY + 7, plantZ+1, 0);
setTile (plantX-1, plantY + 7, plantZ-1, 0);
setTile (plantX-1, plantY + 7, plantZ, 0);
setTile (plantX-2, plantY + 7, plantZ, 0);

setTile (plantX, plantY + 8, plantZ+4, 0);
setTile (plantX, plantY + 8, plantZ-4, 0);
setTile (plantX-2, plantY + 8, plantZ, 0);
setTile (plantX-1, plantY + 8, plantZ, 0);
bosseskilled = bosseskilled + 1;
Level.dropItem (x, y, z, 1, 48, 32, 0);
Level.dropItem (x, y, z, 1, 464, 8, 0);
}
}
if (blockId == 80 && ws == 1) //Water Boss Fighting
{
if (waterbh >= 9)
{
preventDefault();
if (itemId == 268 || itemId == 283)
{
waterbh = waterbh - 5;
clientMessage (""+waterbh+" health left");
}
else if (itemId == 272)
{
waterbh = waterbh - 6;
clientMessage (""+waterbh+" health left");
}
else if (itemId == 267)
{
waterbh = waterbh - 7;
clientMessage (""+waterbh+" health left");
}
else if (itemId == 276)
{
waterbh = waterbh - 8;
clientMessage (""+waterbh+" health left");
}
else if (itemId != 268 || itemId != 272 || itemId != 267 || itemId != 276 || itemId != 283)
{
waterbh = waterbh - 1;
clientMessage (""+waterbh+" health left");
}
}
else if (waterbh < 9)
{
preventDefault();
ws = 0;
clientMessage ("Aqueour was slain");
explode (x, y, z, 0.1);
setTile (waterX, waterY + 1, waterZ, 0);

setTile (waterX+1, waterY + 2, waterZ, 0);
setTile (waterX-1, waterY + 2, waterZ, 0);
setTile (waterX, waterY + 2, waterZ+1, 0);
setTile (waterX, waterY + 2, waterZ-1, 0);

setTile (waterX+1, waterY + 3, waterZ, 89);
setTile (waterX+1, waterY + 3, waterZ-1, 0);
setTile (waterX+1, waterY + 3, waterZ+1, 0);

setTile (waterX, waterY + 3, waterZ+2, 0);
setTile (waterX, waterY + 3, waterZ-2, 0);

setTile (waterX-2, waterY + 3, waterZ, 0);
setTile (waterX-1, waterY + 3, waterZ-1, 0);
setTile (waterX-1, waterY + 3, waterZ+1, 0);

setTile (waterX, waterY + 4, waterZ+2, 0);
setTile (waterX, waterY + 4, waterZ-2, 0);
setTile (waterX, waterY + 4, waterZ, 0);

setTile (waterX, waterY + 5, waterZ, 0);
setTile (waterX, waterY + 5, waterZ-1, 0);
setTile (waterX, waterY + 5, waterZ+1, 0);
setTile (waterX, waterY + 5, waterZ-2, 0);
setTile (waterX, waterY + 5, waterZ+2, 0);

setTile (waterX+1, waterY + 5, waterZ+1, 0);
setTile (waterX+1, waterY + 5, waterZ-1, 0);
setTile (waterX+1, waterY + 5, waterZ+2, 0);
setTile (waterX+1, waterY + 5, waterZ-2, 0);

setTile (waterX-1, waterY + 5, waterZ-1, 0);
setTile (waterX-1, waterY + 5, waterZ+1, 0);

setTile (waterX, waterY + 6, waterZ-1, 0);
setTile (waterX, waterY + 6, waterZ+1, 0);
setTile (waterX, waterY + 6, waterZ-2, 0);
setTile (waterX, waterY + 6, waterZ+2, 0);
setTile (waterX, waterY + 6, waterZ+3, 0);
setTile (waterX, waterY + 6, waterZ-3, 0);

setTile (waterX, waterY + 7, waterZ, 0);
setTile (waterX, waterY + 7, waterZ+1, 0);
setTile (waterX, waterY + 7, waterZ-1, 0);
setTile (waterX, waterY + 7, waterZ+4, 0);
setTile (waterX, waterY + 7, waterZ-4, 0);

setTile (waterX-1, waterY + 7, waterZ+1, 0);
setTile (waterX-1, waterY + 7, waterZ-1, 0);
setTile (waterX-1, waterY + 7, waterZ, 0);
setTile (waterX-2, waterY + 7, waterZ, 0);

setTile (waterX, waterY + 8, waterZ+4, 0);
setTile (waterX, waterY + 8, waterZ-4, 0);
setTile (waterX-2, waterY + 8, waterZ, 0);
setTile (waterX-1, waterY + 8, waterZ, 0);
bosseskilled = bosseskilled + 1;
Level.dropItem (x, y, z, 1, 79, 32, 0);
Level.dropItem (x, y, z, 1, 463, 8, 0);
}
}
if (blockId == 13 && es == 1) //Earth Boss Fighting
{
if (earthbh >= 9)
{
preventDefault();
if (itemId == 268 || itemId == 283)
{
earthbh = earthbh - 5;
clientMessage (""+earthbh+" health left");
}
else if (itemId == 272)
{
earthbh = earthbh - 6;
clientMessage (""+earthbh+" health left");
}
else if (itemId == 267)
{
earthbh = earthbh - 7;
clientMessage (""+earthbh+" health left");
}
else if (itemId == 276)
{
earthbh = earthbh - 8;
clientMessage (""+earthbh+" health left");
}
else if (itemId != 268 || itemId != 272 || itemId != 267 || itemId != 276 || itemId != 283)
{
earthbh = earthbh - 1;
clientMessage (""+earthbh+" health left");
}
}
else if (earthbh < 9)
{
preventDefault();
es = 0;
clientMessage ("Grondia was slain");
explode (x, y, z, 0.1);
setTile (earthX, earthY + 1, earthZ, 0);

setTile (earthX+1, earthY + 2, earthZ, 0);
setTile (earthX-1, earthY + 2, earthZ, 0);
setTile (earthX, earthY + 2, earthZ+1, 0);
setTile (earthX, earthY + 2, earthZ-1, 0);

setTile (earthX+1, earthY + 3, earthZ, 12);
setTile (earthX+1, earthY + 3, earthZ-1, 0);
setTile (earthX+1, earthY + 3, earthZ+1, 0);

setTile (earthX, earthY + 3, earthZ+2, 0);
setTile (earthX, earthY + 3, earthZ-2, 0);

setTile (earthX-2, earthY + 3, earthZ, 0);
setTile (earthX-1, earthY + 3, earthZ-1, 0);
setTile (earthX-1, earthY + 3, earthZ+1, 0);

setTile (earthX, earthY + 4, earthZ+2, 0);
setTile (earthX, earthY + 4, earthZ-2, 0);
setTile (earthX, earthY + 4, earthZ, 0);

setTile (earthX, earthY + 5, earthZ, 0);
setTile (earthX, earthY + 5, earthZ-1, 0);
setTile (earthX, earthY + 5, earthZ+1, 0);
setTile (earthX, earthY + 5, earthZ-2, 0);
setTile (earthX, earthY + 5, earthZ+2, 0);

setTile (earthX+1, earthY + 5, earthZ+1, 0);
setTile (earthX+1, earthY + 5, earthZ-1, 0);
setTile (earthX+1, earthY + 5, earthZ+2, 0);
setTile (earthX+1, earthY + 5, earthZ-2, 0);

setTile (earthX-1, earthY + 5, earthZ-1, 0);
setTile (earthX-1, earthY + 5, earthZ+1, 0);

setTile (earthX, earthY + 6, earthZ-1, 0);
setTile (earthX, earthY + 6, earthZ+1, 0);
setTile (earthX, earthY + 6, earthZ-2, 0);
setTile (earthX, earthY + 6, earthZ+2, 0);
setTile (earthX, earthY + 6, earthZ+3, 0);
setTile (earthX, earthY + 6, earthZ-3, 0);

setTile (earthX, earthY + 7, earthZ, 0);
setTile (earthX, earthY + 7, earthZ+1, 0);
setTile (earthX, earthY + 7, earthZ-1, 0);
setTile (earthX, earthY + 7, earthZ+4, 0);
setTile (earthX, earthY + 7, earthZ-4, 0);

setTile (earthX-1, earthY + 7, earthZ+1, 0);
setTile (earthX-1, earthY + 7, earthZ-1, 0);
setTile (earthX-1, earthY + 7, earthZ, 0);
setTile (earthX-2, earthY + 7, earthZ, 0);

setTile (earthX, earthY + 8, earthZ+4, 0);
setTile (earthX, earthY + 8, earthZ-4, 0);
setTile (earthX-2, earthY + 8, earthZ, 0);
setTile (earthX-1, earthY + 8, earthZ, 0);
bosseskilled = bosseskilled + 1;
Level.dropItem (x, y, z, 1, 3, 32, 0);
Level.dropItem (x, y, z, 1, 460, 8, 0);
}
}
if (blockId == 35 && ss == 1 && Level.getData (x, y, z) == 0) //Sky Boss Fighting
{
if (skybh >= 9)
{
preventDefault();
if (itemId == 268 || itemId == 283)
{
skybh = skybh - 5;
clientMessage (""+skybh+" health left");
}
else if (itemId == 272)
{
skybh = skybh - 6;
clientMessage (""+skybh+" health left");
}
else if (itemId == 267)
{
skybh = skybh - 7;
clientMessage (""+skybh+" health left");
}
else if (itemId == 276)
{
skybh = skybh - 8;
clientMessage (""+skybh+" health left");
}
else if (itemId != 268 || itemId != 272 || itemId != 267 || itemId != 276 || itemId != 283)
{
skybh = skybh - 1;
clientMessage (""+skybh+" health left");
}
}
else if (skybh < 9)
{
preventDefault();
ss = 0;
clientMessage ("Aethorion was slain");
explode (x, y, z, 0.1);
setTile (skyX, skyY + 1, skyZ, 0);

setTile (skyX+1, skyY + 2, skyZ, 0);
setTile (skyX-1, skyY + 2, skyZ, 0);
setTile (skyX, skyY + 2, skyZ+1, 0);
setTile (skyX, skyY + 2, skyZ-1, 0);

setTile (skyX+1, skyY + 3, skyZ, 30);
setTile (skyX+1, skyY + 3, skyZ-1, 0);
setTile (skyX+1, skyY + 3, skyZ+1, 0);

setTile (skyX, skyY + 3, skyZ+2, 0);
setTile (skyX, skyY + 3, skyZ-2, 0);

setTile (skyX-2, skyY + 3, skyZ, 0);
setTile (skyX-1, skyY + 3, skyZ-1, 0);
setTile (skyX-1, skyY + 3, skyZ+1, 0);

setTile (skyX, skyY + 4, skyZ+2, 0);
setTile (skyX, skyY + 4, skyZ-2, 0);
setTile (skyX, skyY + 4, skyZ, 0);

setTile (skyX, skyY + 5, skyZ, 0);
setTile (skyX, skyY + 5, skyZ-1, 0);
setTile (skyX, skyY + 5, skyZ+1, 0);
setTile (skyX, skyY + 5, skyZ-2, 0);
setTile (skyX, skyY + 5, skyZ+2, 0);

setTile (skyX+1, skyY + 5, skyZ+1, 0);
setTile (skyX+1, skyY + 5, skyZ-1, 0);
setTile (skyX+1, skyY + 5, skyZ+2, 0);
setTile (skyX+1, skyY + 5, skyZ-2, 0);

setTile (skyX-1, skyY + 5, skyZ-1, 0);
setTile (skyX-1, skyY + 5, skyZ+1, 0);

setTile (skyX, skyY + 6, skyZ-1, 0);
setTile (skyX, skyY + 6, skyZ+1, 0);
setTile (skyX, skyY + 6, skyZ-2, 0);
setTile (skyX, skyY + 6, skyZ+2, 0);
setTile (skyX, skyY + 6, skyZ+3, 0);
setTile (skyX, skyY + 6, skyZ-3, 0);

setTile (skyX, skyY + 7, skyZ, 0);
setTile (skyX, skyY + 7, skyZ+1, 0);
setTile (skyX, skyY + 7, skyZ-1, 0);
setTile (skyX, skyY + 7, skyZ+4, 0);
setTile (skyX, skyY + 7, skyZ-4, 0);

setTile (skyX-1, skyY + 7, skyZ+1, 0);
setTile (skyX-1, skyY + 7, skyZ-1, 0);
setTile (skyX-1, skyY + 7, skyZ, 0);
setTile (skyX-2, skyY + 7, skyZ, 0);

setTile (skyX, skyY + 8, skyZ+4, 0);
setTile (skyX, skyY + 8, skyZ-4, 0);
setTile (skyX-2, skyY + 8, skyZ, 0);
setTile (skyX-1, skyY + 8, skyZ, 0);
bosseskilled = bosseskilled + 1;
Level.dropItem (x, y, z, 1, 20, 32, 0);
Level.dropItem (x, y, z, 1, 461, 8, 0);
}
}

}

function destroyBlock (x, y, z, side)
{
if (getTile (x, y, z) == 56 && questpart == 4)
{
clientMessage ("<OldHero> Diamonds... ");
clientMessage ("<OldHero> There are special mobs...");
clientMessage ("<OldHero> That can most \n easily be found by \n summoning them.");
clientMessage ("<OldHero> To get the 'summoners' \n tap a diamond on a \n certain block");
clientMessage ("<OldHero> To find out what \n blocks they are, \n call '/srs....' ");
clientMessage ("<OldHero> I remember when I \n got my first diamond...");
questpart = 5;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
}
if (fs == 1) //Boss Mining Prevention
{
if (getTile (x, y, z) == 87 || getTile (x, y, z) == 155 && Level.getData (x, y, z) == 2 || getTile (x, y, z) == 246)
{
preventDefault();
}
}
if (ws == 1)
{
if (getTile (x, y, z) == 79 || getTile (x, y, z) == 155 && Level.getData (x, y, z) == 2 || getTile (x, y, z) == 80)
{
preventDefault();
}
}
if (ps == 1)
{
if (getTile (x, y, z) == 48 || getTile (x, y, z) == 155 && Level.getData (x, y, z) == 1 || getTile (x, y, z) == 17)
{
preventDefault();
}
}
if (es == 1)
{
if (getTile (x, y, z) == 3 || getTile (x, y, z) == 155 && Level.getData (x, y, z) == 0 || getTile (x, y, z) == 13)
{
preventDefault();
}
}
if (ss == 1)
{
if (getTile (x, y, z) == 20 || getTile (x, y, z) == 155 && Level.getData (x, y, z) == 0 || getTile (x, y, z) == 35 && Level.getData (x, y, z) == 0)
{
preventDefault();
}
}
if (getTile (x, y, z) == 18 && getCarriedItem() == 481 && Level.getData (x, y, z) < 7)
{
var leafdata = Level.getData (x, y, z);
Level.dropItem (x, y, z, 1, 6, 1, leafdata);
}

}

function modTick()
{
if (startquest == 1)
{
clientMessage ("<???> Ah.");
clientMessage ("<???> Welcome to this world.");
clientMessage ("<???> I have called you here...");
clientMessage ("<???> To seek asistance.");
clientMessage ("<???> ...");
clientMessage ("<???> I have to go.");
clientMessage ("<???> I can only be in this world for a short time.");
clientMessage ("<???> I will explain more soon...");
startquest = 0;
questpart = 1;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
} //Below is boss particle effects
else if (es == 1 && bossparticles == true)
{
var eX = getPlayerX();
var eY = getPlayerY();
var eZ = getPlayerZ();
setTile (eX+1, eY, eZ, 3);
setTile (eX-1, eY, eZ, 3);
setTile (eX, eY, eZ+1, 3);
setTile (eX, eY, eZ-1, 3);
Level.destroyBlock (eX, eY, eZ-1, false);
Level.destroyBlock (eX, eY, eZ+1, false);
Level.destroyBlock (eX-1, eY, eZ, false);
Level.destroyBlock (eX+1, eY, eZ, false);
}
else if (ss == 1 && bossparticles == true)
{
var sX = getPlayerX();
var sY = getPlayerY();
var sZ = getPlayerZ();
setTile (sX+1, sY, sZ, 35);
setTile (sX-1, sY, sZ, 35);
setTile (sX, sY, sZ-1, 35);
setTile (sX, sY, sZ+1, 35);
Level.destroyBlock (sX+1, sY, sZ, false);
Level.destroyBlock (sX-1, sY, sZ, false);
Level.destroyBlock (sX, sY, sZ-1, false);
Level.destroyBlock (sX, sY, sZ+1, false);
}
else if (ps == 1 && bossparticles == true)
{
var pX = getPlayerX();
var pY = getPlayerY();
var pZ = getPlayerZ();
setTile (pX-1, pY, pZ, 18);
setTile (pX, pY, pZ-1, 18);
setTile (pX+1, pY, pZ, 18);
setTile (pX, pY, pZ+1, 18);
Level.destroyBlock (pX+1, pY, pZ, false);
Level.destroyBlock (pX, pY, pZ+1, false);
Level.destroyBlock (pX, pY, pZ-1, false);
Level.destroyBlock (pX-1, pY, pZ, false);
}
else if (fs == 1 && bossparticles == true)
{
var fX = getPlayerX();
var fY = getPlayerY();
var fZ = getPlayerZ();
setTile (fX+1, fY, fZ, 11);
setTile (fX, fY, fZ+1, 11);
setTile (fX-1, fY, fZ, 11);
setTile (fX, fY, fZ-1, 11);
Level.destroyBlock (fX-1, fY, fZ, false);
Level.destroyBlock (fX+1, fY, fZ, false);
Level.destroyBlock (fX, fY, fZ-1, false);
Level.destroyBlock (fX, fY, fZ+1, false);
}
else if (ws == 1 && bossparticles == true)
{
var wX = getPlayerX();
var wY = getPlayerY();
var wZ = getPlayerZ();
setTile (wX-1, wY, wZ, 9);
setTile (wX+1, wY, wZ, 9);
setTile (wX, wY, wZ-1, 9);
setTile (wX, wY, wZ+1, 9);
Level.destroyBlock (wX+1, wY, wZ, false);
Level.destroyBlock (wX, wY, wZ+1, false);
Level.destroyBlock (wX, wY, wZ-1, false);
Level.destroyBlock (wX-1, wY, wZ, false);
}
if (bosseskilled == 5)
{
questpart = 10;
}
if (questpart == 10)
{
clientMessage ("<OldHero> You slayed all the Elementals...");
clientMessage ("<OldHero> Hahah...");
clientMessage ("<OldHero> You're really THAT STUPID?");
clientMessage ("<OldHero> What's the point of defeating the Elementals?");
clientMessage ("<OldHero> Apart from the fact now they are gone... there is nothing stopping me...");
clientMessage ("<OldHero> FROM DESTROYING THE WORLD!!!");
clientMessage ("<OldHero> Thanks for the help, Guillible!");
clientMessage ("<OldHero> I will dispose of you now");
questpart = 11;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
}
if (questpart == 11)
{
xc = 200;
}
if (xc != 201)
{
xc--;
}
else if (xc == 0)
{
Player.setHealth (0);
questpart = 12;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
}
if (questpart == 12)
{
clientMessage ("[EPE] Thanks for playing The Elements version 0.1.5 !");
clientMessage ("[EPE] By Donalddoesmc and QyMineAsap");
clientMessage ("[EPE] Special Thanks to 500ISE, Connor4898, mcpemodder and others.");
clientMessage ("[EPE] Stay tuned for the next update!");
questpart = 13;
ModPE.saveData (Level.getWorldDir() + "quest", questpart);
}
}

function attackHook (attacker, victim)
{
var held = getCarriedItem();
if (held == 500) //Hellfire Sword Effect
{
mobdam = Entity.getHealth(victim) - 5;
Entity.setHealth (victim, mobdam);
Entity.setFireTicks (victim, 150);
}
else if (held == 483) //Sky Staff Effect
{
setVelY(victim, 1);
}
else if (held == 485) //Fire Staff Effect
{
Entity.setFireTicks (victim, 15);
}
}

function deathHook (attacker, victim)
{
if (Entity.getEntityTypeId(victim) == 36) //Spirit drops
{
if (fss > 0)
{
preventDefault();
fss--;
ModPE.saveData (Level.getWorldDir() + "fss", fss);
Level.dropItem (Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1, 485, 1, 0);
}
if (ess > 0)
{
preventDefault();
ModPE.saveData (Level.getWorldDir() + "ess", ess);
ess--;
Level.dropItem (Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1, 486, 1, 0);
}
if (sss > 0)
{
preventDefault();
ModPE.saveData (Level.getWorldDir() + "sss", sss);
sss--;
Level.dropItem (Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1, 483, 1, 0);
}
if (pss > 0)
{
preventDefault();
ModPE.saveData (Level.getWorldDir() + "pss", pss);
pss--;
Level.dropItem (Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1, 481, 1, 0);
}
if (wss > 0)
{
preventDefault();
ModPE.saveData (Level.getWorldDir() + "wss", wss);
wss--;
Level.dropItem (Entity.getX(victim), Entity.getY(victim), Entity.getZ(victim), 1, 480, 1, 0);
}
}
}
