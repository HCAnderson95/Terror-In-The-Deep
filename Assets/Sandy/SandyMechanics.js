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
var anim: Animator;
static var spawned:boolean = false;
var sandyNextSpawn:Vector3;
function Start () {
	agent = GetComponent.<UnityEngine.AI.NavMeshAgent>();
	anim = GetComponent("Animator");
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
  	Sandy.transform.position = sandyNextSpawn;
  	agent.enabled = true;
  	SandySound.Play();
  	}
  }
}

function Update () {
	sandyNextSpawn = Respawn.nextSpawn;
	touch = CharacterMechanics.enemyTouch;
	
	if(Sandy.transform.position.y >= -1 && touch == false){
		Move();
	}
	if (touch){
		anim.speed = 0;
		agent.velocity = Vector3.zero;
		agent.Stop();
	}
}

function Move(){
	agent.destination = targetPosition.position;	  
}
