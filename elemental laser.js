class elementalLaserSubclass extends ElementsPE{ // incorrect usage
ModPE.setItem(511,12,5,"Elemental Laser Gun");//did i misplace x and y? but please u make the texture. i am terrible at arts
ModPE.setItem(510,13,5,"Elemental Laser Gun Batteries");
ModPE.setItem(509,14,5,"Elemental Explosive Laser Gun");
ModPE.setItem(508,15,5,"Elemental Explosive Laser Gun Batteries");
function useItem(a,b,c,d) /*extends ElementsPE.useItem(double,double,double,int,int,int)*/{
if(d==511/*laser gun*/&&getInventoryItemCount(510,0,false)>0){
  shootLaser(getPlayerX(),getPlayerY(),getPlayerZ(),getYaw(),getPitch()*-1,readData(Level.getWorldDir()+"preference.accuracy.laser"),readData(Level.getWorldDir()+"preference.laser.type"),readData(Level.getWorldDir()+"preference.laser.explode.radius"));
}
}
@Override(requestPriority=1)
function procCmd(c)/*extends ElementsPE.procCmd(String)*/{
if(c=="/toggle lasertype")saveData(Level.getWorldDir()+"preference.laser.type",!(readData(Level.getWorldDir()+"preference.laser.type")));
if(c.split(" ")[0]=="/preference"&&c.split(" ")[1]=="laseraccuracy"){
  switch(c.split(" ")[2]){
  case "1":var args=10;break;
  case "2":var args=9;break;
  case "3":var args=8;break;
  case "4":var args=7;break;
  case "5":var args=6;break;
  case "6":var args=5;break;
  case "7":var args=4;break;
  case "8":var args=3;break;
  case "9":var args=2;break;
  default:clientMessage("Invalid arguments");
  case "10":var args=1;// maybe add more args?
  }
  saveData(Level.getWorldDir()+"preference.accuracy.laser",args);
}
if(c.split(" ")[0]=="/preference"&&c.split(" ")[1]=="laserexploderadius"){
  // saveData(Level.getWorldDir()+"preference.laser.explode.radius",(int)c.split(" ")[2]); // possible?
}
}
function shootlaser(x,y,z,yaw,negPitch,accuracy,isExplosive,explodeRadius){
addItemInventory(510,-1);
var carryOn=true;
var beamX=x,beamY=y,beamZ=z;
var intX,intY,intZ;
var beamInTile=0;
var trial=0;
var throughX;
var throughY;
var throughZ;
var blockIs;
var blockDataIs;
while(carryOn&&0<=beamX<256&&0<=beamY<128&&0<=beamZ<256){
  var xDistance=Math.cos((90-yaw)/180*Math.PI)*accuracy*Math.sin(negPitch);
  var zDistance=Math.sin((90-yaw)/180*Math.PI)*accuracy*Math.sin(negPitch);
  var yDistance=Math.sin(negPitch/180*Math.PI)*accuracy*Math.sin(negPitch);
  beamX=beamX+xDistance;
  beamY=beamY+yDistance;
  beamZ=beamZ+zDistance;
  intX=Math.floor(beamX);
  intY=Math.floor(beamY);
  intZ=Math.floor(beamZ);
  beamInTile=getTile(intX,intY,intY);
  beamInDamage=getData(intX,intY,intZ);
  if(beamInTile!=0&&!(8<=beaminTile<=11)){
   carryOn=false;
   while(trial>0){
        setTile(throughX[trial],throughY[trial],throughZ[trial],blockIs[trial],blockDataIs);// restore to water/lava/air with correct damage value
        trial--;
   }
   if(isExplosive)explode(intX,intY,intZ,explodeRadius);
   else setTile(intX,intY,intZ,0);
  }
  throughX[trial]=intX;
  throughY[trial]=intY;
  throughZ[trial]=intZ;
  blockIs[trial]=beamInTile;
  blockDataIs[trial]=beamInDamage;
  setTile(intX,intY,intZ,50);// make light beam visible with torches
  trial++;
}
}
function getInventoryItemCount(itemId,itemDamage,wantSlotNotNumber){
var sum=0,slot=0;
for(var i=0;i<27;i++){
  if(getInventorySlot(i)==itemId&&getInventorySlotData(i)==itemDamage){
   slot++;
   sum=sum+getInventorySlotCount(i);
  }
}if(wantSlotNotNumber)return slot;
return sum;
}
// } // incorrect usage
