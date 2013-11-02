var elementalOxesList=[];
var leadedEntToPlayerList=[];
var leadedEntToFencePostList=[];
ModPE.setItem(140,15,15,"Lead");//whatever x and y
ModPE.setItem(141,15,15,"Elemental wolf spawn egg");
function entityAddedHook(v){
  if(Entity.getEntityTypeId(v)==11){
    if(Math.random()<0.5){
      var coorX=Entity.getX(v);
      var coorY=Entity.getY(v);
      var coorZ=Entity.getZ(v);
      Entity.setPosition(v,127,0,127);
      v=Level.spawnMob(coorX,coorY,coorZ,11);
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
  if(i==141){
    //You mamage the side things
    var newWolf=Level.spawnMob(10);
    //add to array ... Im lazy
    Entity.setRenderType(newWolf,13);
  }
}
/**********************************************************
 * Donald this is when we want to set a block with same physics of fence post but
 * with different texture, while the original fence post texture cannot be deleted
 **********************************************************/
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
function deathHook(m,v){
	    var inArray=false;
     if(m==getPlayerEnt()){//maybe wrong?   
     	    for(var i=0;i<elementalOxesList.length;i++){
     	    	    if(elementalOxesList[i]==v){
          	    	    inArray=true;
          	    }
	    	    }
     }
     if(inArray){
     	    preventDefault();
          var vX=Entity.getX(v),vY=Entity.getY(v),vZ=Entity.getZ(v);   
          Entity.setPosition(v,128,-1,128);
          Level.dropItem(vX,vY,vZ,1,141,Math.floor(40*Math.random()));
     }
}
function modTick(){
  for(var i=0;i<elementalOxesList.length;i++){
    var e=elementalOxesList[i];
    if(Level.getTile(Entity.getX(e),Entity.getY(e)-1,Entity.getZ(e))==3){
      setTile(Entity.getX(e),Entity.getY(e)-1,Entity.getZ(e),60);
    }
  }
  for(var j=0;j<leadedEntToPlayerList.length;j++){
    setYawToHere(leadedEntToPlayerList[j],Player.getX(),Player.getY,Player.getZ());
  }
  var doingThisNow=[];
  for(var k=0;k<leadedEntToFencePostList.length;k++){
    doingThisNow=leadedEntToFencePostList[k];
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
