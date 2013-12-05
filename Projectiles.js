//@author PEMapModder
//Copyright (C) 2013 PEMapModder
//This script can be used for redistributing or modification, or both. However, it must be indicated that PEMapModder started this script.
var GRAVITY_CONSTANT=9.8;
var projectiles=[];
var X_AXIS=0,Y_AXIS=1,Z_AXIS=2,YAW=3,PITCH=4,VELOCITY=5,TICKS_RUN=6,CUSTOM_GRAVITY=7,DESPAWN_TIME=8,PROJECTILE_OBJECT_TYPE=9,PROJECTILE_OBJECT_PARAMS=10,PROJECTILE_LISTENER_ID=11;
var PROJECTILE_TYPE_BLOCK=100;
var PROJECTILE_TYPE_ENTITY=101;
var POP_B_ID=0,POP_B_DAMAGE=1;
var POP_E_RENDERID=0,POP_E_ENTITYID=1,POP_E_NATIVE_ENTITY;
function projectileUpdateListener(listenerId,projectile){
  switch(listenerId){

//your listeners here


        break;default:return false;break;
  }
}
function addNewProjectile(x,y,z,iY,iP,iV,dT,cG,oT,oP,lI){
  if(cG<0)cG=GRAVITY_CONSTANT;
  var id=projectiles.length;
  projectiles[id]=[x,y,z,iY,iP,iV,0,cG,dT,oT,oP,lI,"run"];
  return id;
}
function project(x,y,z,s,y,p,rT,cG){
  var vX=s*Math.sin(y)*Math.cos(p);
  var vY=s*Math.sin(p);
  var vZ=s*Math.cos(y)*Math.cos(p);
  var result=[vX+x,vY-cG*rT+y,vZ+z];
  return result;
}
/*@Override function modTick()*/ function projectileHandler(){
  for(var id=0;id<projectiles.length;id++){
        var obj=projectiles[id];
        if(obj==false)continue;
        if(obj[12]=="stopped")continue;
        var coors=project(obj[X_AXIS],obj[Y_AXIS],obj[Z_AXIS],obj[VELOCITY],obj[YAW],obj[PITCH],obj[TICKS_RUN],obj[CUSTOM_GRAVITY]);
        var action=projectileUpdateListener(obj[PROJECTILE_LISTENER_ID],obj);
        if(action==false||action=="preventDefault")continue;
        if(action=="remove"||obj[DESPAWN_TIME]<obj[TICKS_RUN]){projectiles[id]=false;continue;}
        if(action=="stop"){projectiles[id][12]="stopped";continue;}
        projectileUpdateHandler(obj,coors);
  }
  /*super.modTick();*/
  //My tradition
}
function projectileUpdateHandler(p,c){
  if(p[PROJECTILE_OBJECT_TYPE]==PROJECTILE_TYPE_BLOCK]){
        Level.setTile(c[X_AXIS],c[Y_AXIS],c[Z_AXIS],p[POP_B_ID],p[POP_B_DAMAGE]); // I just realized that in the whole script addon this is the only one that uses ModPE functions. lol.
  }
  else{
        Entity.setPosition(p[PROJCTILE_OBJECT_PARAMS][POP_E_NATIVE_ENTITY],c[X_AXIS],c[Y_AXIS],c[Z_AXIS]);
  }
}
