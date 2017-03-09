#pragma strict

var LightForGlove : Light; //Add the light source to the torch in Inspector
private var gloveActive : boolean = false;

function Start () {

	     

/*var lightGameObject : GameObject = new GameObject("The Light");
var lightComp = lightGameObject.AddComponent.<Light>();
lightGameObject.transform.position = Vector3(5.4, -11.9, 29.5);*/
	
}

function Update () {

	if (Input.GetKeyDown("e")) 
	     ToggleGlove();
	
}

function ToggleGlove() {
     gloveActive=!gloveActive;
     LightForGlove.enabled = gloveActive;
 
}