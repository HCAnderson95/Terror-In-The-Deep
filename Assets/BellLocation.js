#pragma strict
public static var bellRand:int;

function Start () {
	bellRand = Random.Range(1,18);

	for(var i:int = 0; i < 18; i++)
	{
		if(bellRand == PegLocation.pegRand)
		{
			bellRand = Random.Range(1,18);
			i = 0;
		}

		if(bellRand == ReedLocation.reedRand)
		{
			bellRand = Random.Range(1,18);
			i = 0;
		}

		if(bellRand == BarLocation.barRand)
		{
			bellRand = Random.Range(1,18);
			i = 0;
		}

		if(bellRand == BoqLocation.boqRand)
		{
			bellRand = Random.Range(1,18);
			i = 0;
		}

		if(bellRand == MPLocation.mpRand)
		{
			bellRand = Random.Range(1,18);
			i = 0;
		}
	}

	if(bellRand == 1)
		transform.position = Vector3(166,1,56);

	else if(bellRand == 2)
		transform.position = Vector3(145,1,16);

	else if(bellRand == 3)
		transform.position = Vector3(115,1,-37);

	else if(bellRand == 4)
		transform.position = Vector3(101,1,-5);

	else if(bellRand == 5)
		transform.position = Vector3(96,1,30);

	else if(bellRand == 6)
		transform.position = Vector3(97,1,65);

	else if(bellRand == 7)
		transform.position = Vector3(82,1,62);

	else if(bellRand == 8)
		transform.position = Vector3(59,1,62);

	else if(bellRand == 9)
		transform.position = Vector3(64,1,-17);

	else if(bellRand == 10)
		transform.position = Vector3(74,1,-44);

	else if(bellRand == 11)
		transform.position = Vector3(106,1,-46);

	else if(bellRand == 12)
		transform.position = Vector3(103,1,-29);

	else if(bellRand == 13)
		transform.position = Vector3(78,-5,8);

	else if(bellRand == 14)
		transform.position = Vector3(98,1,12);

	else if(bellRand == 15)
		transform.position = Vector3(101,1,27);

	else if(bellRand == 16)
		transform.position = Vector3(110,1,70);

	else if(bellRand == 17)
		transform.position = Vector3(150,1,-6);

	else if(bellRand == 18)
		transform.position = Vector3(143,1,-16);
}

function Update () {
	
}
