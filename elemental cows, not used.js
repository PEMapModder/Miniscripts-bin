var elementalOxesList=[];
var leadedEntToPlayerList=[];
var leadedEntToFencePostList=[];
ModPE.setItem(140,15,15,"Lead");
function entityAddedHook(v){
  if(Entity.getEntityTypeId(v)==11){
    if(Math.random()<0.5){
      var coorX=Entity.getX(v);
      var coorY=Entity.getY(v);
      var coorZ=Entity.getZ(v);
      Entity.setPosition(v,127,0,127);
      Level.spawnMob(coorX,coorY,coorZ,11);
      elementalOxesList[elementalOxesList.length]=v;
    }
  }
}
function useItem(x,y,z,i,b,s){
  if(i==140&&b==85){
    for(var i=0;i<leadedEntToPlayerList.length;i++){
      leadedEntToFencePostList[leadedEntToFencePostList.length]=[leadedEntToPlayerList[i],x,y,z];
    }
    leadedEntToPlayerList=[];
  }
}
function attackHook(a,v){
  if(10<=Entity.getMobTypeId(v)<=13&&getCarriedItem()==140){
    for(var i=0;i<leadedEntToPlayerList.length;i++){
      if(leadedEntToPlayerList[i]==v){
        leadedEntToPlayerList[i]=-1;
        return;
      }
    }
    leadedEntToPlayerList[leadedEntToPlayerList.length]=v;
  }
}
function modTick(){
  for(var i=0;i<elementalOxesList.length;i++){
    var e=elementalOxesList[i];
    if(Level.getTile(Entity.getX(e),Entity.getY(e)-1,Entity.getZ(e))==3){
      setTile(Entity.getX(e),Entity.get(Ye),Entity.getZ(e),60);
    }
  }
  for(var j=0;j<leadedEntToPlayerList.length;j++){
    setYawToHere(leadedEntToPlayerList[j],Player.getX(),Player.getY,Player.getZ());
  }
  var doingThisNow=[];
  for(var k=0;k<leadedEntToFencePostList.length;k++){
    doingThisNow=leadedEntToFencePostList;
    setYawToHere(doingThisNow[0],doingThisNow[1],doingThisNow[2],doingThisNow[3]);
  }
}
function setYawToHere(ent,toX,toY,toZ){
  var xDiff=Entity.getX(ent)-toX;
  var yDiff=Entity.getY(ent)-toY;
  var zDiff=Entity.getZ(ent)-toZ;
  var planeDistance=Math.sqrt(xDiff^2+zDiff^2);
  Entity.setRotation(ent,Math.arccos(zDiff/planeDistance)+180,0);//Maybe change pitch into something else for better performance?
}
