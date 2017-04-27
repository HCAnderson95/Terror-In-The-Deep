#pragma strict
var MrKrabs:Transform;
var Bubbles:Transform;
var buffer:Vector3;
var time:float = 0;
function Start () {
	
}

function Update () {
	if(MrKrabs.position.y >= 0){
	buffer = MrKrabs.position;
	buffer.y = MrKrabs.position.y + .07;
	}
	if (MrKrabs.position == Vector3(5, -5, 5)){
	Bubbles.position = buffer;
	time += Time.deltaTime;
		if (time >= 1){
			Bubbles.position = Vector3(10, -10, 10);
		}
	}
	else
		time = 0;
}
