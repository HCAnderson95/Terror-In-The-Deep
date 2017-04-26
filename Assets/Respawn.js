#pragma strict
var respawn_loc:Transform[];
var Squidward:Transform;
public static var nextSpawn:Vector3;
var buffer:float;
var closest:float;
var i:int;
var j:int;
function Start () {
	nextSpawn = Vector3(0, 0, 0);
	closest = 999999;
}

function Update () {
	i = 0;
	j = 0;
	for(i = 0; i < respawn_loc.length; i++){
		buffer = Vector3.Distance(Squidward.position, respawn_loc[i].position);
		if (buffer < closest && buffer > 15){
			closest = buffer;
			nextSpawn = respawn_loc[i].position;
		}
	}
	if (Vector3.Distance(Squidward.position, nextSpawn) < 15){
		for(j = 0; i < respawn_loc.length; i++){
			buffer = Vector3.Distance(Squidward.position, respawn_loc[i].position);
			if (buffer < closest && buffer > 15){
				closest = buffer;
				nextSpawn = respawn_loc[i].position;
			}
		}
	}
}
