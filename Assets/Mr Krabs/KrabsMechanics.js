#pragma strict
var Squidward:GameObject;
var MrKrabs:GameObject;
var pos1:Vector3;
var time:float;
var targetPosition :Transform; // we have to add in the Inspector our target
var damp: int = 5; // we can change the slerp velocity here
var KrabsSound: AudioSource;
var agent: UnityEngine.AI.NavMeshAgent;
var count:int;
var touch:boolean;
var clone:GameObject;
static var spawned:boolean = false;
static var timer:float;

function Start () {
	agent = GetComponent.<UnityEngine.AI.NavMeshAgent>();

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
	
	Debug.Log(timer);
	Debug.Log(spawned);
	if(!spawned){
		if(count >= 4 && timer >= 30)
		{
			spawned = true;
  			pos1 = Random.insideUnitSphere * 25.0;
  			MrKrabs.transform.position = Vector3(pos1.x + Squidward.transform.position.x, 0, pos1.z + Squidward.transform.position.z);
  			agent.enabled = true;
  			KrabsSound.Play();
  		}
	}

	touch = CharacterMechanics.enemyTouch;
  	if(MrKrabs.transform.position.y >= 0 && touch == false){
  		Move();
  	}
 	if(time >= 4){
 	 	timer = 0;
 	 	agent.enabled = false;
		MrKrabs.transform.position = Vector3(5, -5, 5);
	 	spawned = false;
		time = 0;
  	}
}

function Move(){
		if(Input.GetKey("w") || Input.GetKey("a") || Input.GetKey("s") || Input.GetKey("d")){
			time = 0;
			agent.Resume();
			if ( targetPosition ) // we get sure the target is here
     			agent.destination = targetPosition.position;
  		  }
  		  else{
  		  	agent.velocity = Vector3.zero;
			agent.Stop();
  		  	time += Time.deltaTime;
  		  }
}
