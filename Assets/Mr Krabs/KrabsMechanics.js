#pragma strict
var Squidward:GameObject;
var MrKrabs:GameObject;
var pos1:Vector3;
var time:float;
var KrabsSound: AudioSource = GetComponent.<AudioSource>();


function Start () {

	while(true)
	{

	time = Random.Range(5.0, 10.0);

	yield WaitForSeconds (time);
  	pos1 = Random.insideUnitSphere * 25.0;
  	MrKrabs.transform.position = Vector3(pos1.x + Squidward.transform.position.x, 1, pos1.z + Squidward.transform.position.z);
  	KrabsSound.Play();

  	yield WaitForSeconds (time);
  	MrKrabs.transform.position = Vector3(0,-5,0);
  	}
}

function Update () {

  	if(Squidward.transform.position.y <= MrKrabs.transform.position.y)
  	Move();

  	if(MrKrabs.transform.position.y > .9 && MrKrabs.transform.position.y < 1)
  	Move();



}

function Move(){
		if(Input.GetKey("w") || Input.GetKey("a") || Input.GetKey("s") || Input.GetKey("d")){
  		 	MrKrabs.transform.position = Vector3.MoveTowards(transform.position, Squidward.transform.position, .15);
  		  }
}