#pragma strict
var Squidward:GameObject;
var MrKrabs:GameObject;
var pos1:Vector3;
var time:float;
var time2:float;
var targetPosition :Transform; // we have to add in the Inspector our target
var damp: int = 5; // we can change the slerp velocity here
var KrabsSound: AudioSource = GetComponent.<AudioSource>();


function Start () {

	while(true)
	{

	time = Random.Range(12.0, 17.0);
	time2 = Random.Range(5.0, 8.0);

	yield WaitForSeconds (time);
  	pos1 = Random.insideUnitSphere * 25.0;
  	MrKrabs.transform.position = Vector3(pos1.x + Squidward.transform.position.x, 0, pos1.z + Squidward.transform.position.z);
  	KrabsSound.Play();

  	yield WaitForSeconds (time2);
  	MrKrabs.transform.position = Vector3(5,-5,5);
  	}
}

function Update () {

  	if(MrKrabs.transform.position.y >= 0)
  		Move();

}

function Move(){
		if(Input.GetKey("w") || Input.GetKey("a") || Input.GetKey("s") || Input.GetKey("d")){
			if ( targetPosition ) // we get sure the target is here
     			{
        			var rotationAngle = Quaternion.LookRotation ( targetPosition.position - transform.position); // we get the angle has to be rotated
         			transform.rotation = Quaternion.Slerp ( transform.rotation, rotationAngle, Time.deltaTime * damp);
         		}
  		 	MrKrabs.transform.position = Vector3.MoveTowards(transform.position, Squidward.transform.position, .15);
  		 	MrKrabs.transform.position.y = 0;
  		 
  		  }
}