#pragma strict
public static var boqRand:int;

function Start () {
	boqRand = Random.Range(1,18);

	for(var i:int = 0; i < 18; i++)
	{
		if(boqRand == PegLocation.pegRand)
		{
			boqRand = Random.Range(1,18);
			i = 0;
		}

		if(boqRand == ReedLocation.reedRand)
		{
			boqRand = Random.Range(1,18);
			i = 0;
		}

		if(boqRand == BarLocation.barRand)
		{
			boqRand = Random.Range(1,18);
			i = 0;
		}

		if(boqRand == MPLocation.mpRand)
		{
			boqRand = Random.Range(1,18);
			i = 0;
		}

		if(boqRand == BellLocation.bellRand)
		{
			boqRand = Random.Range(1,18);
			i = 0;
		}
	}

	if(boqRand == 1)
		transform.position = Vector3(166,1,56);

	else if(boqRand == 2)
		transform.position = Vector3(145,1,16);

	else if(boqRand == 3)
		transform.position = Vector3(115,1,-37);

	else if(boqRand == 4)
		transform.position = Vector3(101,1,-5);

	else if(boqRand == 5)
		transform.position = Vector3(96,1,30);

	else if(boqRand == 6)
		transform.position = Vector3(97,1,65);

	else if(boqRand == 7)
		transform.position = Vector3(82,1,62);

	else if(boqRand == 8)
		transform.position = Vector3(59,1,62);

	else if(boqRand == 9)
		transform.position = Vector3(64,1,-17);

	else if(boqRand == 10)
		transform.position = Vector3(74,1,-44);

	else if(boqRand == 11)
		transform.position = Vector3(106,1,-46);

	else if(boqRand == 12)
		transform.position = Vector3(103,1,-29);

	else if(boqRand == 13)
		transform.position = Vector3(78,-5,8);

	else if(boqRand == 14)
		transform.position = Vector3(98,1,12);

	else if(boqRand == 15)
		transform.position = Vector3(101,1,27);

	else if(boqRand == 16)
		transform.position = Vector3(110,1,70);

	else if(boqRand == 17)
		transform.position = Vector3(150,1,-6);

	else if(boqRand == 18)
		transform.position = Vector3(143,1,-16);
}

function Update () {
	
}
