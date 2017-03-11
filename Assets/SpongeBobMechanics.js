﻿#pragma strict
var SpongeBob:GameObject;
var Squidward:GameObject;
var SpongeBobSound: AudioSource = GetComponent.<AudioSource>();
var targetPosition :Transform; // we have to add in the Inspector our target
var damp: int = 5; // we can change the slerp velocity here
var LightForGlove:Light;
var pos1: Vector3;
var time:float;
var time2:float;


function Start () {

	time = Random.Range(8.0, 12.0);
	time2 = Random.Range(5.0, 9.0);

  	pos1 = Random.insideUnitSphere * 25.0;
  	SpongeBob.transform.position = Vector3(pos1.x + Squidward.transform.position.x, 0, pos1.z + Squidward.transform.position.z);

  	yield WaitForSeconds (time2);
  	SpongeBob.transform.position = Vector3(0,-5,0);
}

function Update () {

	if(SpongeBob.transform.position.y >= 0){
	if(LightForGlove.enabled)
	Move();
	}
}

function Move(){
	if ( targetPosition ) // we get sure the target is here
    {
        var rotationAngle = Quaternion.LookRotation ( targetPosition.position - transform.position); // we get the angle has to be rotated
        transform.rotation = Quaternion.Slerp ( transform.rotation, rotationAngle, Time.deltaTime * damp);
    }

	SpongeBob.transform.position = Vector3.MoveTowards(transform.position, Squidward.transform.position, .07);
	SpongeBob.transform.position.y = 0;
}