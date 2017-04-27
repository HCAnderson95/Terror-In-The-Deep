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
	closest = 999999;
	for(i = 0; i < respawn_loc.length; i++){
		buffer = Vector3.Distance(Squidward.position, respawn_loc[i].position);
		if (buffer < closest && buffer > 10){
			closest = buffer;
			nextSpawn = respawn_loc[i].position;
		}
	}
	if (Vector3.Distance(Squidward.position, nextSpawn) <= 10){
		closest = 999999;
		for(j = 0; j < respawn_loc.length; j++){
			buffer = Vector3.Distance(Squidward.position, respawn_loc[i].position);
			if (buffer < closest && buffer > 10){
				closest = buffer;
				nextSpawn = respawn_loc[i].position;
			}
		}
	}
}
