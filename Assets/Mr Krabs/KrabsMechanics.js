#pragma strict
var Squidward:GameObject;
var MrKrabs:GameObject;
var pos1:Vector3;
var time:float;
var targetPosition :Transform; // we have to add in the Inspector our target
var damp: int = 5; // we can change the slerp velocity here
var KrabsSound: AudioSource = GetComponent.<AudioSource>();
var count:int;
var touch:boolean;
var clone:GameObject;
static var spawned:boolean = false;
static var timer:float;

function Start () {

	while(touch == false)
	{
	count = CharacterMechanics.itemCount;
	yield WaitForSeconds (5);
	timer += 5;
  	}

}

function Update () {
	if(!spawned){
		if(count >= 4 && timer >= 30)
		{
			spawned = true;
  			pos1 = Random.insideUnitSphere * 25.0;
  			clone = Instantiate(MrKrabs, new Vector3(pos1.x + Squidward.transform.position.x, 0, pos1.z + Squidward.transform.position.z), Quaternion.identity);
  			KrabsSound.Play();
  		}
	}
	touch = CharacterMechanics.enemyTouch;

  	if(MrKrabs.transform.position.y >= 0 && touch == false){
  		Move();
  	}
 	if(time >= 4){
 	 	timer = 0;
		Destroy (this.gameObject, 0.2);
	 	spawned = false;
		time = 0;
  	}
}

function Move(){
		if(Input.GetKey("w") || Input.GetKey("a") || Input.GetKey("s") || Input.GetKey("d")){
			time = 0;
			if ( targetPosition ) // we get sure the target is here
     			{
        			var rotationAngle = Quaternion.LookRotation ( targetPosition.position - transform.position); // we get the angle has to be rotated
        			transform.rotation.x = 0;
        			transform.rotation.z = 0;
         			transform.rotation = Quaternion.Slerp ( transform.rotation, rotationAngle, Time.deltaTime * damp);
         		}
  		 	MrKrabs.transform.position = Vector3.MoveTowards(transform.position, Squidward.transform.position, .15);
  		 	MrKrabs.transform.position.y = 0;
  		 
  		  }
  		  else{
  		  	time += Time.deltaTime;
  		  }
}
