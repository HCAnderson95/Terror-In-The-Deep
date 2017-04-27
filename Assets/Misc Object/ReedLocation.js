#pragma strict
public static var reedRand:int;

function Start () {
	reedRand = Random.Range(1,17);

	for(var i:int = 0; i < 17; i++)
	{
		if(reedRand == PegLocation.pegRand)
		{
			reedRand = Random.Range(1,17);
			i = 0;
		}

		if(reedRand == MPLocation.mpRand)
		{
			reedRand = Random.Range(1,17);
			i = 0;
		}

		if(reedRand == BarLocation.barRand)
		{
			reedRand = Random.Range(1,17);
			i = 0;
		}

		if(reedRand == BoqLocation.boqRand)
		{
			reedRand = Random.Range(1,17);
			i = 0;
		}

		if(reedRand == BellLocation.bellRand)
		{
			reedRand = Random.Range(1,17);
			i = 0;
		}
	}

	if(reedRand == 1)
		transform.position = Vector3(166,1,56);

	else if(reedRand == 2)
		transform.position = Vector3(145,1,16);

	else if(reedRand == 3)
		transform.position = Vector3(115,1,-37);

	else if(reedRand == 4)
		transform.position = Vector3(101,1,-5);

	else if(reedRand == 5)
		transform.position = Vector3(96,1,30);

	else if(reedRand == 6)
		transform.position = Vector3(97,1,65);

	else if(reedRand == 7)
		transform.position = Vector3(82,1,62);

	else if(reedRand == 8)
		transform.position = Vector3(59,1,62);

	else if(reedRand == 9)
		transform.position = Vector3(64,1,-17);

	else if(reedRand == 10)
		transform.position = Vector3(74,1,-44);

	else if(reedRand == 11)
		transform.position = Vector3(106,1,-46);

	else if(reedRand == 12)
		transform.position = Vector3(103,1,-29);

	else if(reedRand == 13)
		transform.position = Vector3(143,1,-16);

	else if(reedRand == 14)
		transform.position = Vector3(98,1,12);

	else if(reedRand == 15)
		transform.position = Vector3(101,1,27);

	else if(reedRand == 16)
		transform.position = Vector3(110,1,70);

	else if(reedRand == 17)
		transform.position = Vector3(150,1,-6);

}

function Update () {
	
}
