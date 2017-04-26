#pragma strict
var count:int;
var winText:GUIText;

function Start () {
	
}

function Update () {
	count = CharacterMechanics.itemCount;

	if(count >= 6)
	{
		winText.text = "You Escaped With the Clarinet Pieces.";
	}
}
