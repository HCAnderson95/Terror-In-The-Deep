﻿#pragma strict
var Sandy:GameObject;
var Squidward:GameObject;
var pos1:Vector3;
var time:float;
var time2:float;
var targetPosition :Transform; // we have to add in the Inspector our target
var damp: int = 5; // we can change the slerp velocity here
var SandySound: AudioSource = GetComponent.<AudioSource>();
var count:int;
var touch:boolean;

function Start () {

	while(touch == false)
	{
	count = CharacterMechanics.itemCount;
	time = Random.Range(7.0, 15.0);
	time2 = Random.Range(8.0, 12.0);

	yield WaitForSeconds (time);
	if(count >= 6)
	{
  	pos1 = Random.insideUnitSphere * 25.0;
  	var clone = Instantiate (Sandy, new Vector3(pos1.x + Squidward.transform.position.x, 0, pos1.z + Squidward.transform.position.z), Quaternion.identity);
  	SandySound.Play();
  	}

  	Destroy (clone, 8.0);

  }

}

function Update () {

	touch = CharacterMechanics.enemyTouch;
	
	if(Sandy.transform.position.y >= 0 && touch == false){
		Move();
	}
}

function Move(){

	if ( targetPosition ) // we get sure the target is here
     {
        var rotationAngle = Quaternion.LookRotation ( targetPosition.position - transform.position);
        transform.rotation.x = 0;
        transform.rotation.z = 0;
        transform.rotation = Quaternion.Slerp ( transform.rotation, rotationAngle, Time.deltaTime * damp);
     }
  	Sandy.transform.position = Vector3.MoveTowards(transform.position, Squidward.transform.position, .06);
  	Sandy.transform.position.y = 0;

  		  
}