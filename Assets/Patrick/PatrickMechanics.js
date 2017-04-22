#pragma strict
var Patrick:GameObject;
var Squidward:GameObject;
var cam:Camera;
var Pcoll:BoxCollider;
var pos1:Vector3;
var targetPosition :Transform; // we have to add in the Inspector our target
var damp: int = 5; // we can change the slerp velocity here
var PatrickSound: AudioSource = GetComponent.<AudioSource>();
var count:int;
var touch:boolean;
var clone:GameObject;
var time:float;
static var spawned:boolean = false;
static var timer:float;

function Start () {


	while(touch == false)
	{
		count = CharacterMechanics.itemCount;
		yield WaitForSeconds (5);
		timer += 5;
  	}
	cam = GameObject.Find("First Person Controller/Main Camera").GetComponent(Camera);
	Pcoll = GetComponent.<BoxCollider>();
}

function Update(){
	Debug.Log(timer);
	if(!spawned){
		if(count >= 2 && timer >= 30){
			spawned = true;
  			pos1 = Random.insideUnitSphere * 25.0;
  			clone = Instantiate(Patrick, new Vector3(pos1.x + Squidward.transform.position.x, 0, pos1.z + Squidward.transform.position.z), Quaternion.identity);
  			PatrickSound.Play();
  		}
	}

	touch = CharacterMechanics.enemyTouch;

	if(Patrick.transform.position.y >= 0 && touch == false){
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
	var hit:RaycastHit;//stores the hit info
	var ray:Ray=cam.ScreenPointToRay(Input.mousePosition);

    	if(!(Pcoll.Raycast(ray,hit,20.0))){
    		time = 0;
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
  		else
  		{
  			time += Time.deltaTime;
  		}
}

function Death(){

	Patrick.transform.position = Vector3.MoveTowards(transform.position, Squidward.transform.position, 0);

}