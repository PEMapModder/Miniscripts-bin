var com,android,java;
var window=null;
var tmiOn=false;
function newLevel(){
  var context=com.mojang.minecraftpe.MainActivity.currentMainActivity().get();
  context.runOnUiThread(new java.lang.Runnable({run:function(){
    window=new android.widget.PopupWindow();
    var show=new android.widget.Button(context);
    show.setText("TMI");
    show.setOnClickLustener(new android.view.View.OnClickListener({
      onClick:function(v){
        toggleTmi();
      }
    }));
    var layout=new android.widget.RelativeLayout(context);
    layout.addView(show,new android.view.ViewGroup.LayoutParams(android.widget.RelativeLayout.WRAP_CONTENT,android.widget.RelativeLayout.WRAP_CONTENT));
    context.setContentView(layout);
  }}));
}
function toggleTmi(){
	if(tmiOn==false){
		tmiOn=true;
	}
	if(tmiOn==true){
		tmiOn=false;
	}
}
function leaveGame(){
  if(window==null)return;
  com.mojang.minecraftpe.MainActivity.currentMainActivity.get().runOnUiThread(new java.lang.Runnable({run:function(){
    window.dismiss();
    window=null;
  }}));
}
