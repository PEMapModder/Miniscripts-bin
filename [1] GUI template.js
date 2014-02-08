/*
 * Copyright © 2014 PEMapModder
 * This software, and modified versions of it, can be shared by any legal means for any non-commercial usage, as long as credit of the original creator is given to PEMapModder, along with its original source or link to it.
*/

var ctx;
var myView;
function newLevel(){
  ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({run:function(){
    try{
      myView=new android.widget.PopupWindow(ctx);
      myView.setContentView(getLayout());
      myView.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
      myView.showAtLocation(
          ctx.getWindow().getDecorView(),
          android.view.Gravity.LEFT|android.view.Gravity.TOP,
          0, 0);
      
    }catch(e){print("error: "+e.toString());}
  }}));
}
function getLayout(){
  var layout=new android.view.LinearLayout(ctx);
  var ttv=new android.view.Button(ctx);
  ttv.setText(android.R.ok);
  ttv.setOnClickListener(
    new android.view.View.OnClickListener({
      onClick:function(v){
        print("ok");
      }
    })
  );
  layout.addView(ttv);
  return layout;
}
function leaveGame(){
  if(myView!=null){
    try{
      com.mojang.minecraftpe.MainActivity.currentMainActivity.get().runOnUiThread(new java.lang.Runnable({run:function(){
        myView.dismiss();
        myView=null;
      }}));
    }catch(e){
      print(e.toString());
    }
  }
}
