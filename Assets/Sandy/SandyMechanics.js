#pragma strict
var Sandy:GameObject;
var Squidward:GameObject;
var pos1:Vector3;
var time:float;
var time2:float;
var targetPosition :Transform; // we have to add in the Inspector our target
var damp: int = 5; // we can change the slerp velocity here
var SandySound: AudioSource = GetComponent.<AudioSource>();
var count:int;

function Start () {

	while(true)
	{
	count = CharacterMechanics.itemCount;
	time = Random.Range(7.0, 15.0);
	time2 = Random.Range(8.0, 12.0);

	yield WaitForSeconds (time);
	if(count >= 6)
	{
  	pos1 = Random.insideUnitSphere * 25.0;
  	Sandy.transform.position = Vector3(pos1.x + Squidward.transform.position.x, 0, pos1.z + Squidward.transform.position.z);
  	SandySound.Play();
  	}

  	yield WaitForSeconds (time2);
  	Sandy.transform.position = Vector3(15,-5,15);
  }

}

function Update () {
	
	if(Sandy.transform.position.y >= 0){
		Move();
	}
}

function Move(){

	if ( targetPosition ) // we get sure the target is here
     {
        var rotationAngle = Quaternion.LookRotation ( targetPosition.position - transform.position);
        transform.rotation = Quaternion.Slerp ( transform.rotation, rotationAngle, Time.deltaTime * damp);
     }
  	Sandy.transform.position = Vector3.MoveTowards(transform.position, Squidward.transform.position, .06);
  	Sandy.transform.position.y = 0;

  		  
}