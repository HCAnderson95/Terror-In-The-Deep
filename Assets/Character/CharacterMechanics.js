#pragma strict

var Squidward:GameObject;
var boquillero:GameObject;
var barrel:GameObject;
var bell:GameObject;
var reed:GameObject;
var peg:GameObject;
var MouthPiece:GameObject;
public static var itemCount:int;
var scoreText:GUIText;
var ClarinetSound: AudioSource = GetComponent.<AudioSource>();
public static var enemyTouch:boolean = false;
var deathText:GUIText;
var deathSound: AudioSource = GetComponent.<AudioSource>();


function OnTriggerEnter(col:Collider) {
	if(col.tag == "Boquillero"){
		boquillero.transform.position = Vector3(20,-5,20);
		itemCount++;
		ClarinetSound.Play();
	}

	if(col.tag == "Barrel"){
		barrel.transform.position = Vector3(30,-5,20);
		itemCount++;
		ClarinetSound.Play();
	}

	if(col.tag == "Bell"){
		bell.transform.position = Vector3(40,-5,20);
		itemCount++;
		ClarinetSound.Play();
	}

	if(col.tag == "Reed"){
		reed.transform.position = Vector3(50,-5,20);
		itemCount++;
		ClarinetSound.Play();
	}

	if(col.tag == "Peg"){
		peg.transform.position = Vector3(60,-5,20);
		itemCount++;
		ClarinetSound.Play();
	}

	if(col.tag == "Mouth Piece"){
		MouthPiece.transform.position = Vector3(70,-5,20);
		itemCount++;
		ClarinetSound.Play();
	}

	UpdateScore();

	if(col.tag == "Enemy"){
		Death();
	}
    
}

function UpdateScore () {
    scoreText.text = "Clarinet Pieces: " + itemCount;
}

function Death(){
	enemyTouch = true;
	deathText.text = "You Are Dead.";
	GameObject.Find("Squidward").GetComponent(CharacterController).enabled = false;
	deathSound.Play();
}