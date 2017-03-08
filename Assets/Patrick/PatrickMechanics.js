#pragma strict

var Patrick:GameObject;
var Squidward:GameObject;
var cam:Camera;
var PatrickIB:CapsuleCollider;
var Pcoll:BoxCollider;
var pos1:Vector3;
var time:float;
var PatrickSound: AudioSource = GetComponent.<AudioSource>();

function Start () {

	while(true)
	{

	time = Random.Range(5.0, 10.0);

	yield WaitForSeconds (time);
  	pos1 = Random.insideUnitSphere * 25.0;
  	Patrick.transform.position = Vector3(pos1.x + Squidward.transform.position.x, 1, pos1.z + Squidward.transform.position.z);
  	PatrickSound.Play();

  	yield WaitForSeconds (time);
  	Patrick.transform.position = Vector3(0,-5,0);

  }


	cam = GameObject.Find("First Person Controller/Main Camera").GetComponent(Camera);
	PatrickIB = GetComponent.<CapsuleCollider>();
	Pcoll = GetComponent.<BoxCollider>();

}

function Update(){

	if(Squidward.transform.position.y <= Patrick.transform.position.y)
	Move();

	if(Patrick.transform.position.y > .9 && Patrick.transform.position.y < 1)
  	Move();
}

function Move(){
	var hit:RaycastHit;//stores the hit info
	var ray:Ray=cam.ScreenPointToRay(Input.mousePosition);

    	if(!(PatrickIB.Raycast(ray,hit,10.0)) && !(Pcoll.Raycast(ray,hit,10.0))){
  		 	Patrick.transform.position = Vector3.MoveTowards(transform.position, Squidward.transform.position, .07);
  		  }
}