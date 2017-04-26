#pragma strict
public static var pegRand:int;

function Start () {
	pegRand = Random.Range(1,18);

	for(var i:int = 0; i < 18; i++)
	{
		if(pegRand == MPLocation.mpRand)
		{
			pegRand = Random.Range(1,18);
			i = 0;
		}

		if(pegRand == ReedLocation.reedRand)
		{
			pegRand = Random.Range(1,18);
			i = 0;
		}

		if(pegRand == BarLocation.barRand)
		{
			pegRand = Random.Range(1,18);
			i = 0;
		}

		if(pegRand == BoqLocation.boqRand)
		{
			pegRand = Random.Range(1,18);
			i = 0;
		}

		if(pegRand == BellLocation.bellRand)
		{
			pegRand = Random.Range(1,18);
			i = 0;
		}
	}

	if(pegRand == 1)
		transform.position = Vector3(166,1,56);

	else if(pegRand == 2)
		transform.position = Vector3(145,1,16);

	else if(pegRand == 3)
		transform.position = Vector3(115,1,-37);

	else if(pegRand == 4)
		transform.position = Vector3(101,1,-5);

	else if(pegRand == 5)
		transform.position = Vector3(96,1,30);

	else if(pegRand == 6)
		transform.position = Vector3(97,1,65);

	else if(pegRand == 7)
		transform.position = Vector3(82,1,62);

	else if(pegRand == 8)
		transform.position = Vector3(59,1,62);

	else if(pegRand == 9)
		transform.position = Vector3(64,1,-17);

	else if(pegRand == 10)
		transform.position = Vector3(74,1,-44);

	else if(pegRand == 11)
		transform.position = Vector3(106,1,-46);

	else if(pegRand == 12)
		transform.position = Vector3(103,1,-29);

	else if(pegRand == 13)
		transform.position = Vector3(78,-5,8);

	else if(pegRand == 14)
		transform.position = Vector3(98,1,12);

	else if(pegRand == 15)
		transform.position = Vector3(101,1,27);

	else if(pegRand == 16)
		transform.position = Vector3(110,1,70);

	else if(pegRand == 17)
		transform.position = Vector3(150,1,-6);

	else if(pegRand == 18)
		transform.position = Vector3(143,1,-16);
}

function Update () {
	
}
