#pragma strict
var SpongeBob:Transform;
var Bubbles:Transform;
var buffer:Vector3;
var time:float = 0;
function Start () {
	
}

function Update () {
	if(SpongeBob.position.y >= 0){
	buffer = SpongeBob.position;
	buffer.y = SpongeBob.position.y + .07;
	}
	if (SpongeBob.position == Vector3(10, -5, 10)){
	Bubbles.position = buffer;
	time += Time.deltaTime;
		if (time >= 1){
			Bubbles.position = Vector3(10, -10, 10);
		}
	}
	else
		time = 0;
}
