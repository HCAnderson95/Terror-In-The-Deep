#pragma strict
var Sandy:GameObject;
var Squidward:GameObject;
var pos1:Vector3;
var time:float;
var time2:float;
var targetPosition :Transform; // we have to add in the Inspector our target
var damp: int = 5; // we can change the slerp velocity here
var SandySound: AudioSource;
var Bubbles: AudioSource;
var agent: UnityEngine.AI.NavMeshAgent;
var count:int;
var touch:boolean;
static var spawned:boolean = false;

function Start () {
	agent = GetComponent.<UnityEngine.AI.NavMeshAgent>();

	spawned = false;
	agent.enabled = false;
	while(touch == false)
	{
	count = CharacterMechanics.itemCount;

	yield WaitForSeconds (5);
	if(count >= 6 && spawned == false)
	{
	spawned = true;
  	pos1 = Random.insideUnitSphere * 25.0;
  	Sandy.transform.position = Vector3(pos1.x + Squidward.transform.position.x, 0, pos1.z + Squidward.transform.position.z);
  	agent.enabled = true;
  	SandySound.Play();
  	}
  }
}

function Update () {

	touch = CharacterMechanics.enemyTouch;
	
	if(Sandy.transform.position.y >= 0 && touch == false){
		Move();
	}
}

function Move(){
	agent.destination = targetPosition.position;	  
}
