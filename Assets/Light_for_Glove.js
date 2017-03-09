#pragma strict

var LightForGlove : Light; //Add the light source to the torch in Inspector
private var gloveActive : boolean = false;
var LightClick: AudioSource = GetComponent.<AudioSource>();

function Start () {
	
}

function Update () {

	if (Input.GetKeyDown("e")) 
	     ToggleGlove();

	
}

function ToggleGlove() {
	LightClick.Play();
    gloveActive=!gloveActive;
    LightForGlove.enabled = gloveActive;
 
}