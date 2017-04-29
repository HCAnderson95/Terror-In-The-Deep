#pragma strict
var Patrick:GameObject;
var Squidward:GameObject;
var cam:Camera;
var Pcoll:BoxCollider;
var pos1:Vector3;
var targetPosition :Transform; // we have to add in the Inspector our target
var damp: int = 5; // we can change the slerp velocity here
var PatrickSound: AudioSource;
var Bubbles: AudioSource;
var agent: UnityEngine.AI.NavMeshAgent;
var count:int;
var touch:boolean;
var time:float;
var anim: Animator;
static var spawned:boolean = false;
static var timer:float;
var patrickNextSpawn:Vector3;
function Start () {
	agent = GetComponent.<UnityEngine.AI.NavMeshAgent>();

	timer = 0;
	spawned = false;
	anim = GetComponent("Animator");
	agent.enabled = false;
	while(touch == false)
	{
		count = CharacterMechanics.itemCount;
		yield WaitForSeconds (5);
		timer += 5;
  	}
	Pcoll = GetComponent.<BoxCollider>();
}

function Update(){
	patrickNextSpawn = Respawn.nextSpawn;
	if(!spawned){
		if(count >= 2 && timer >= 35){
			spawned = true;
  			pos1 = Random.insideUnitSphere * 25.0;
  			Patrick.transform.position = patrickNextSpawn;
  			agent.enabled = true;
  			PatrickSound.Play();
  		}
	}

	touch = CharacterMechanics.enemyTouch;

	if(Patrick.transform.position.y >= -1 && touch == false){
		Move();
	}
	if(time >= 4){
		timer = 0;
		agent.enabled = false;
	  	Patrick.transform.position = Vector3(0,-5,0);
	  	spawned = false;
	  	time = 0;
	  	Bubbles.Play();
  	}
  	if (touch)
		anim.speed = 0;
}

function Move(){
	var hit:RaycastHit;//stores the hit info
	var ray:Ray=cam.ScreenPointToRay(Input.mousePosition);

    	if(!(Pcoll.Raycast(ray,hit,20.0))){
    		agent.Resume();
    		anim.speed = 1;
    		time = 0;
    		agent.destination = targetPosition.position;
  		  }
  		else
  		{
  			agent.velocity = Vector3.zero;
			agent.Stop();
 			anim.speed = 0;
  			time += Time.deltaTime;
  		}
}

function Death(){

	Patrick.transform.position = Vector3.MoveTowards(transform.position, Squidward.transform.position, 0);

}
