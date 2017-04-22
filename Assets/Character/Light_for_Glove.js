#pragma strict

var LightForGlove : Light; //Add the light source to the torch in Inspector
var gloveActive : boolean = true;
var LightClick: AudioSource;

function Start () {
}

function Update () {

	if (Input.GetKeyDown("e")) {
	    gloveActive = !gloveActive;
    	LightForGlove.enabled = gloveActive;
    	LightClick.Play();
    }

	
}