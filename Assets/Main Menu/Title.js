#pragma strict
import UnityEngine.SceneManagement;

var titleText:GUIText;
var playText:GUIText;
var quitText:GUIText;
var playColl:BoxCollider;
var quitColl:BoxCollider;
var introSong: AudioSource = GetComponent.<AudioSource>();

function Start () {
	introSong.Play();
}

function Update () {
	var hit:RaycastHit;//stores the hit info
	var ray:Ray  = Camera.main.ScreenPointToRay(Input.mousePosition);

	titleText.text = "Terror in the Deep";
	playText.text = "Play";
	quitText.text = "Quit";

	if(playColl.Raycast(ray,hit,5.0)){
		playText.material.color = Color.red;

		if(Input.GetMouseButton(0)){
         SceneManager.LoadScene("Terror in the Deep");
     }

	}

	else if(!playColl.Raycast(ray,hit,5.0)){
		playText.material.color = Color.white;
	}

	if(quitColl.Raycast(ray,hit,5.0)){
		quitText.material.color = Color.red;

		if(Input.GetMouseButton(0)){
         Application.Quit();
     }

	}

	else if(!quitColl.Raycast(ray,hit,5.0)){
		quitText.material.color = Color.white;
	}

}