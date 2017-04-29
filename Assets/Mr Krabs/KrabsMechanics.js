#pragma strict
var Squidward:GameObject;
var MrKrabs:GameObject;
var pos1:Vector3;
var time:float;
var targetPosition :Transform; // we have to add in the Inspector our target
var damp: int = 5; // we can change the slerp velocity here
var KrabsSound: AudioSource;
var Bubbles: AudioSource;
var agent: UnityEngine.AI.NavMeshAgent;
var count:int;
var touch:boolean;
var clone:GameObject;
var anim: Animator;
static var spawned:boolean = false;
static var timer:float;
var KrabsNextSpawn:Vector3;
function Start () {
	agent = GetComponent.<UnityEngine.AI.NavMeshAgent>();
	anim = GetComponent("Animator");
	timer = 0;
	spawned = false;
	agent.enabled = false;
	while(touch == false)
	{
	count = CharacterMechanics.itemCount;
	yield WaitForSeconds (5);
	timer += 5;
  	}

}

function Update () {
	KrabsNextSpawn = Respawn.nextSpawn;
	if(!spawned){
		if(count >= 4 && timer >= 40)
		{
			spawned = true;
  			pos1 = Random.insideUnitSphere * 25.0;
  			MrKrabs.transform.position = KrabsNextSpawn;
  			agent.enabled = true;
  			KrabsSound.Play();
  		}
	}

	touch = CharacterMechanics.enemyTouch;
  	if(MrKrabs.transform.position.y >= -1 && touch == false){
  		Move();
  	}
 	if(time >= 4){
 	 	timer = 0;
 	 	agent.enabled = false;
		MrKrabs.transform.position = Vector3(5, -5, 5);
	 	spawned = false;
		time = 0;
		Bubbles.Play();
  	}
  	if (touch)
		anim.speed = 0;
}

function Move(){
		if(Input.GetKey("w") || Input.GetKey("a") || Input.GetKey("s") || Input.GetKey("d")){
			anim.speed = 1;
			time = 0;
			agent.Resume();
			if ( targetPosition ) // we get sure the target is here
     			agent.destination = targetPosition.position;
  		  }
  		  else{
  		  	anim.speed = 0;
  		  	agent.velocity = Vector3.zero;
			agent.Stop();
  		  	time += Time.deltaTime;
  		  }
}
