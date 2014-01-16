<?php
/*
__PocketMine Plugin__
class=PingGrapher
apiversion=10,11
version=0.0.0.0
name=PingGrapher

*/
class PingGrapher implements Plugin {
	private $streams=array();
	private $dir;
	private $localPlot=false;
	public function __construct(ServerAPI $a,$s=false) {
		
	}
	public function init() {
		ServerAPI::request()->schedule(100,array($this,"scheduledGraph"));
		ServerAPI::request()->schedule(3000,array($this,"scheduledPutContents"));
		$cfg=new Config(($this->dir=ServerAPI::request()->api->plugin->configPath($this))."config.properties",CONFIG_PROPERTIES,array(
			"plot local connections"=>false
		));
		if($cfg->get("plot local connections"===true))$this->localPlot=true;
		else $this->localPlot=false;
	}
	public function __destruct() {
		
	}
	public function scheduledGraph() {
		foreach($this->streams as $ign=>$stream){
			$this->plot($stream,$ign);
		}
	}
	private function plot($stream,$ign) {
		$p=ServerAPI::request()->api->player->get($ign);
		$ping=$p->getLag();
		$o="";
		for($i=$ping/50;$i>0;$i--){
			$o.=" ";
		}
		if (false===fwrite($stream,$o."|")) {
			console("An error occured while trying to plot graph to $ign's ping graph");
		}
	}
	public function scheduledPutContents() {
		foreach($this->streams as $s){
			$this->putContents($s);
		}
	}
	private function putContents($stream) {
		if(false===fwrite($stream,date("d-n-y G:i:s\n")))
			console("An error occurred while trying to write current time to ".array_search($stream,$this->streams)."'s ping graph");
	}
	public function onJoin(Player $p) {
		if(substr($p->ip,0,8)=="192.168." and $this->localPlot!==true)return;
		if(!file_exists($this->getFile($p->username)))
			$ne=true;
		$this->streams[$p->username]=fopen($this->getFile($p->username),"a");
		if(isset($ne) and $ne===true)
			putContents($this->streams[$p->username]);
	}
	public function onQuit(Player $p) {
		if(!isset($this->streams[$p->username]))return;
		if(false===fclose($this->streams[$p->username])){
			console("Failure while trying to close output stream of $p.");
		}
	}
	private function getFile($ign){
		return $this->dir.substr($ign,0,1)."\\$ign.txt";
	}
}
