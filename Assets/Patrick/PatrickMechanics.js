#pragma strict
var Patrick:GameObject;
var Squidward:GameObject;
var cam:Camera;
var Pcoll:BoxCollider;
var pos1:Vector3;
var time:float;
var time2:float;
var targetPosition :Transform; // we have to add in the Inspector our target
var damp: int = 5; // we can change the slerp velocity here
var PatrickSound: AudioSource = GetComponent.<AudioSource>();
var count:int;
var touch:boolean;

function Start () {


	while(touch == false)
	{
	count = CharacterMechanics.itemCount;
	time = Random.Range(8.0, 12.0);
	time2 = Random.Range(5.0, 8.0);

	yield WaitForSeconds (time);
	if(count >= 2)
	{
  	pos1 = Random.insideUnitSphere * 25.0;
  	Patrick.transform.position = Vector3(pos1.x + Squidward.transform.position.x, 0, pos1.z + Squidward.transform.position.z);
  	PatrickSound.Play();
  	}

  	yield WaitForSeconds (time2);
  	Patrick.transform.position = Vector3(0,-5,0);

  }
	cam = GameObject.Find("First Person Controller/Main Camera").GetComponent(Camera);
	Pcoll = GetComponent.<BoxCollider>();

}

function Update(){

	touch = CharacterMechanics.enemyTouch;

	if(Patrick.transform.position.y >= 0 && touch == false){
		Move();
		}
}

function Move(){
	var hit:RaycastHit;//stores the hit info
	var ray:Ray=cam.ScreenPointToRay(Input.mousePosition);

    	if(!(Pcoll.Raycast(ray,hit,20.0))){
    		if ( targetPosition ) // we get sure the target is here
     		{
        		var rotationAngle = Quaternion.LookRotation ( targetPosition.position - transform.position); // we get the angle has to be rotated
        		transform.rotation.x = 0;
        		transform.rotation.z = 0;
         		transform.rotation = Quaternion.Slerp ( transform.rotation, rotationAngle, Time.deltaTime * damp);
        	 }

  		 	Patrick.transform.position = Vector3.MoveTowards(transform.position, Squidward.transform.position, .09);
  		 	Patrick.transform.position.y = 0;

  		  }
}

function Death(){

	Patrick.transform.position = Vector3.MoveTowards(transform.position, Squidward.transform.position, 0);

}