#pragma strict
var Patrick:Transform;
var Bubbles:Transform;
var buffer:Vector3;
var time:float = 0;
function Start () {
	
}

function Update () {
	if(Patrick.position.y >= 0){
	buffer = Patrick.position;
	buffer.y = Patrick.position.y + .07;
	}
	if (Patrick.position == Vector3(0, -5, 0)){
	Bubbles.position = buffer;
	time += Time.deltaTime;
		if (time >= 1){
			Bubbles.position = Vector3(10, -10, 10);
		}
	}
	else
		time = 0;
}
