//Just a pre-port for factions plugin
var api,factions=[];
function Factions(inApi,server){
	api=inApi;
}
function init(){
	this.api.console.register("f","factions plugin",callable("f"));
	this.api.addHandler("player.block.touch",callable("onBlockTouch"));
	this.api.addHandler("player.block.place",callable("onBlockPlace"));
}
function f(cmd, args, issuer){
	if(args.length==0)return "Invalid subcmd.\nUse \/f help or \/fh to see help";
	var r="";
	switch(args[0]){
		case "create":
		break;
		case "help":
		break;
		case "dismiss":
		break;
		case "me":
		break;
		case "accept":
			var acceptee=this.api.player.get(args[1]);
			if(acceptee==false)return "Player "+acceptee+" not found.\nPlease type full name";
		break;
		case "join":
			r=sendRequestJoinF(args[1]);
		break;
	}
}
function sendRequestJoinF(team){
	
}
function onBlockTouch(data){
	player=data.player;
	
}