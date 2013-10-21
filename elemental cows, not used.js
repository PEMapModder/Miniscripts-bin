var elementalOxesList=new Array[];
ModPE.setItem(140,15,15,"Lead");
@Extend
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
function attackHook(a,v){
  
}
function modTick(){
  for(var i=0;i<elementalOxesList;i++){
    var e=elementalOxesList[i];
    if(Level.getTile(Entity.getX(e),Entity.getY(e)-1,Entity.getZ(e))==3){
      setTile(Entity.getX(e),Entity.get(Ye),Entity.getZ(e),60);
    }
  }
}
