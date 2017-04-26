#pragma strict
public static var mpRand:int;

function Start () {
	mpRand = Random.Range(1,18);

	for(var i:int = 0; i < 18; i++)
	{
		if(mpRand == PegLocation.pegRand)
		{
			mpRand = Random.Range(1,18);
			i = 0;
		}

		if(mpRand == ReedLocation.reedRand)
		{
			mpRand = Random.Range(1,18);
			i = 0;
		}

		if(mpRand == BarLocation.barRand)
		{
			mpRand = Random.Range(1,18);
			i = 0;
		}

		if(mpRand == BoqLocation.boqRand)
		{
			mpRand = Random.Range(1,18);
			i = 0;
		}

		if(mpRand == BellLocation.bellRand)
		{
			mpRand = Random.Range(1,18);
			i = 0;
		}
	}

	if(mpRand == 1)
		transform.position = Vector3(166,1,56);

	else if(mpRand == 2)
		transform.position = Vector3(145,1,16);

	else if(mpRand == 3)
		transform.position = Vector3(115,1,-37);

	else if(mpRand == 4)
		transform.position = Vector3(101,1,-5);

	else if(mpRand == 5)
		transform.position = Vector3(96,1,30);

	else if(mpRand == 6)
		transform.position = Vector3(97,1,65);

	else if(mpRand == 7)
		transform.position = Vector3(82,1,62);

	else if(mpRand == 8)
		transform.position = Vector3(59,1,62);

	else if(mpRand == 9)
		transform.position = Vector3(64,1,-17);

	else if(mpRand == 10)
		transform.position = Vector3(74,1,-44);

	else if(mpRand == 11)
		transform.position = Vector3(106,1,-46);

	else if(mpRand == 12)
		transform.position = Vector3(103,1,-29);

	else if(mpRand == 13)
		transform.position = Vector3(78,-5,8);

	else if(mpRand == 14)
		transform.position = Vector3(98,1,12);

	else if(mpRand == 15)
		transform.position = Vector3(101,1,27);

	else if(mpRand == 16)
		transform.position = Vector3(110,1,70);

	else if(mpRand == 17)
		transform.position = Vector3(150,1,-6);

	else if(mpRand == 18)
		transform.position = Vector3(143,1,-16);
}

function Update () {
	
}
