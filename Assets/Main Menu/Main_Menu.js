var quit=false;

function OnMouseEnter()
{
	
	GUI.color = Color.red;		//Change Color to red!
	
}

function OnMouseExit()
{

	GUI.color = Color.white;		//Change Color to white!

}

function OnMouseUp()
{

	if (quit == true)
	{
		Application.Quit();					    //If you click on quit aplication quits.
	}
	/*else
	{
		Application.LoadLevel(1);				//If you click on other button it loads game!
	}*/

}

function Update()
{
if (Input.GetKey(KeyCode.Escape)) 				//If you press (escape) game force closes!
	{
		Application.Quit();
	}

	if(Input.GetKey("q")){
		GUI.color = Color.red;
	}

}