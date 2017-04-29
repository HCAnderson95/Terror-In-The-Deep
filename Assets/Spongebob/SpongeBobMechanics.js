#pragma strict
import UnityEngine.AI;
var SpongeBob:GameObject;
var Squidward:GameObject;
var SpongeBobSound: AudioSource;
var Bubbles: AudioSource;
var agent: UnityEngine.AI.NavMeshAgent;
var targetPosition :Transform; // we have to add in the Inspector our target
var damp: int = 5; // we can change the slerp velocity here
var LightForGlove:Light;
var pos1: Vector3;
var time:float = 0;
var count:int;
var touch:boolean;
var anim: Animator;
static var spawned:boolean = false;
static var timer:float;
var spongeNextSpawn:Vector3;

function Start () {
	agent = GetComponent.<UnityEngine.AI.NavMeshAgent>();
	timer = 0;
	spawned = false;
	anim = GetComponent("Animator");
	agent.enabled = false;
	while(touch == false){
	count = CharacterMechanics.itemCount;
	yield WaitForSeconds (5);
	timer += 5;
  	}
}

function Update () {
	spongeNextSpawn = Respawn.nextSpawn;


	if(!spawned){
		if (count >= 1 && timer >= 30){
			spawned = true;
			pos1 = Random.insideUnitSphere * 25.0;
			SpongeBob.transform.position = spongeNextSpawn;
			agent.enabled = true;
  			SpongeBobSound.Play();
		}
	}
	touch = CharacterMechanics.enemyTouch;
	if(SpongeBob.transform.position.y >= -1){
		if(LightForGlove.enabled && touch == false){
			agent.Resume();
			Move();
			anim.speed = 1;
			}
		else{
			agent.velocity = Vector3.zero;
			agent.Stop();
			anim.speed = 0;
		}
		if(!LightForGlove.enabled){
			time += Time.deltaTime;
			if(time >= 4){
				timer = 0;
				agent.enabled = false;
				SpongeBob.transform.position = Vector3(10, -5, 10);
				time = 0;
				spawned = false;
				Bubbles.Play();
			}
		}
		else
			time = 0;
	}
	if (touch)
		anim.speed = 0;
}

function Move(){
        agent.destination = targetPosition.position;
}
