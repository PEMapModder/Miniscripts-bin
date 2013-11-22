<?php
/*
__PocketMine Plugin__
author=PEMapModder
description=logs player actions
version=1.0.0
class=A
name=PlayerActionsLogger
apiversion=10
*/
class A implements Plugin {
	private $api,$server,$log,$dir,$tempBreak,$tempKill,$tempPlace;
	public function __construct(ServerAPI $api, $server=false) {
		$this->api=$api;
		$this->server=ServerAPI::request();
	}
	public function init(){
		$this->dir=$this->api->plugin->configPath($this);
		$this->api->addHandler("player.block.touch",array($this,"event"),100);
		$this->api->addHandler("player.death",array($this,"event"),100);
		$this->log=new Config($this->dir."log.yml",CONFIG_YAML,array(
			"breaks"=>array(),
			"kills"=>array(),
			"places"=>array()
		));
		$this->api->addHandler("server.close",array($this,"serverClose"),5);
		$this->api->schedule(1200,array($this,"save"),array(),true);
	}
	public function __destruct(){}
	public function save(){
		$this->log->set("breaks",$this->tempBreak);
		$this->log->set("kills",$this->tempKill);
		$this->log->set("places",$this->tempPlace);
		$this->log->save();
		$this->log->reload();
		$this->tempBreak=$this->log->get("breaks");
		$this->tempKill=$this->log->get("kills");
		$this->tempPlace=$this->log->get("places");
	}
	private function addBreak($x,$y,$z,$level,$player) {
		$this->tempBreak[]=array(
			"x"			=>$x,
			"y"			=>$y,
			"z"			=>$z,
			"level"		=>$level->getName(),
			"ign"		=>$player->username,
			"tool"		=>$player->getItem()
		);
	}
	private function addKill($murderer,$victim){
		$mEntity=$murderer->entity;
		$level=$victim->entity->level;
		$vEntity=$victim->entity;
		$this->tempKill[]=array(
			"murderer"=>array(
					"username"	=>	$murderer->usernamedd,
					"x"			=>	$mEntity->x,
					"y"			=>	$mEntity->y,
					"z"			=>	$mEntity->z,
					"level"		=>	$level->getName(),
					"ip"		=>	$murderer->ip,
					"port"		=>	$murderer->port
				),
			"item"=>$murderer->getItem(),
			"victim"=>array(
					"username"	=>	$victim->username,
					"x"			=>	$vEntity->x,
					"y"			=>	$vEntity->y,
					"z"			=>	$vEntity->z,
					"level"		=>	$vEntity->level->getName(),
					"ip"		=>	$victim->ip,
					"port"		=>	$victim->port,
					"armor"		=>	array(
						"helmet"	=>	$victim->getArmor(0),
						"tunic"		=>	$victim->getArmor(1),
						"leggings"	=>	$victim->getArmor(2),
						"boots"		=>	$victim->getArmor(3)
					)
				)
		);
	}
	public function event(&$data,$event) {
		switch ($event) {
			case "player.block.touch":
				if ($data["type"]==="break") {
					$this->addBreak($data["target"]->x,$data["target"]->y,$data["target"]->z,$data["target"]->level,$data["player"]);
				}
				else {
				#	$this->addPlace($data["target"],$data["player"]);
				}
			break;
			case "player.death":
				if(is_numeric($data["cause"])){
					$murderer=$this->api->entity->get($data["cause"]);
					if($murderer instanceof Entity and $murderer->class==ENTITY_PLAYER){
						$this->addKill($murderer,$data["player"]);
					}
				}
				break;
			case "server.close":
				$this->save();
		};
	}
}
