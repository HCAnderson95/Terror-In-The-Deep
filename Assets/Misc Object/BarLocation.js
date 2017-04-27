#pragma strict
public static var barRand:int;

function Start () {
	barRand = Random.Range(1,17);

	for(var i:int = 0; i < 17; i++)
	{
		if(barRand == PegLocation.pegRand)
		{
			barRand = Random.Range(1,17);
			i = 0;
		}

		if(barRand == ReedLocation.reedRand)
		{
			barRand = Random.Range(1,17);
			i = 0;
		}

		if(barRand == MPLocation.mpRand)
		{
			barRand = Random.Range(1,17);
			i = 0;
		}

		if(barRand == BoqLocation.boqRand)
		{
			barRand = Random.Range(1,17);
			i = 0;
		}

		if(barRand == BellLocation.bellRand)
		{
			barRand = Random.Range(1,17);
			i = 0;
		}
	}

	if(barRand == 1)
		transform.position = Vector3(166,1,56);

	else if(barRand == 2)
		transform.position = Vector3(145,1,16);

	else if(barRand == 3)
		transform.position = Vector3(115,1,-37);

	else if(barRand == 4)
		transform.position = Vector3(101,1,-5);

	else if(barRand == 5)
		transform.position = Vector3(96,1,30);

	else if(barRand == 6)
		transform.position = Vector3(97,1,65);

	else if(barRand == 7)
		transform.position = Vector3(82,1,62);

	else if(barRand == 8)
		transform.position = Vector3(59,1,62);

	else if(barRand == 9)
		transform.position = Vector3(64,1,-17);

	else if(barRand == 10)
		transform.position = Vector3(74,1,-44);

	else if(barRand == 11)
		transform.position = Vector3(106,1,-46);

	else if(barRand == 12)
		transform.position = Vector3(103,1,-29);

	else if(barRand == 13)
		transform.position = Vector3(143,1,-16);

	else if(barRand == 14)
		transform.position = Vector3(98,1,12);

	else if(barRand == 15)
		transform.position = Vector3(101,1,27);

	else if(barRand == 16)
		transform.position = Vector3(110,1,70);

	else if(barRand == 17)
		transform.position = Vector3(150,1,-6);

}

function Update () {
	
}
