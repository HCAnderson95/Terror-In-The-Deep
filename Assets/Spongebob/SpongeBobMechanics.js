#pragma strict
var SpongeBob:GameObject;
var Squidward:GameObject;
var SpongeBobSound: AudioSource = GetComponent.<AudioSource>();
var targetPosition :Transform; // we have to add in the Inspector our target
var damp: int = 5; // we can change the slerp velocity here
var LightForGlove:Light;
var pos1: Vector3;
var time:float = 0;
var count:int;
var touch:boolean;
var clone:GameObject;
static var spawned:boolean = false;
static var timer:float;

function Start () {
	while(touch == false){
	count = CharacterMechanics.itemCount;
	yield WaitForSeconds (5);
	timer += 5;
  	}
}

function Update () {
	if(!spawned){
		if (count >= 1 && timer >= 30){
			spawned = true;
			pos1 = Random.insideUnitSphere * 25.0;
  			clone = Instantiate(SpongeBob, new Vector3(pos1.x + Squidward.transform.position.x, 0, pos1.z + Squidward.transform.position.z), Quaternion.identity);
  			SpongeBobSound.Play();
		}
	}
	touch = CharacterMechanics.enemyTouch;

	if(SpongeBob.transform.position.y >= 0){
		if(LightForGlove.enabled && touch == false){
			Move();
			}
	}
	if(!LightForGlove.enabled){
	time += Time.deltaTime;
	if(time >= 4){
		timer = 0;
		Destroy (clone, 1);
		time = 0;
		spawned = false;
		}
	}
	else
		time = 0;
}

function Move(){
	if ( targetPosition ) //make sure the target is here
    {
        var rotationAngle = Quaternion.LookRotation ( targetPosition.position - transform.position); // we get the angle has to be rotated
        transform.rotation.x = 0;
        transform.rotation.z = 0;
        transform.rotation = Quaternion.Slerp ( transform.rotation, rotationAngle, Time.deltaTime * damp);
    }

	SpongeBob.transform.position = Vector3.MoveTowards(transform.position, Squidward.transform.position, .07);
	SpongeBob.transform.position.y = 0;
}
