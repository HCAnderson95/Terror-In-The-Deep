#pragma strict
var speed:float = 75.0;
var x:int = 0;
var y:int = 0;

function Start () {

	while(true)
	{
		while(x < 10)
		{
		transform.position.y = transform.position.y + .026;
		yield WaitForSeconds(.07);
		x++;
		}

		while(y < 10)
		{
		transform.position.y = transform.position.y - .026;
		yield WaitForSeconds(.07);
		y++;
		}

		x = 0;
		y = 0;
	}

}

function Update () {
	transform.Rotate(Vector3.up, speed * Time.deltaTime);
}
