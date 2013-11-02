class MathExt extends Math{
  function randomBelow(in){
    if(in%1!=0){
      android.widget.Toast.makeText(getApplicationContext(), "random() must have an integer parameter",android.widget.Toast.LENGTH_LONG).show();
      return false;
    }
    var out=0;
    var times=1+super.log(in)/3;///
    while(times>1){
      out+=super.random()*1000;
      times--;
    }
    out+=super.floor(super.random()*in);
    return out+1;
  }
}
