<?php
	$q= $_GET["q"];
	if($q=1)
	{
		require 'config.php';
		$conn = mysql_connect($host , $username , $password);
		mysql_select_db("feedback");
		$sql= "SELECT * FROM posts";
		$result= mysql_query($sql);
		$places= array();
		$places_1= array();
		$places_2= array();
		$j=0;
		while($row= mysql_fetch_array($result))
		{
			$places_1[0]= $row['user_id'];
			$query= "SELECT * FROM users_backup WHERE $places_1[0]= id";
			$result1= mysql_query($query);
			while($rew= mysql_fetch_array($result1))
			{
				$places_2[0]= $rew['fullname'];
				$places_2[1]= $rew['username'];
				$places_1[0]= implode(",",$places_2);
			}
			$places_1[1]= $row['title'];
			$places_1[2]= $row['content'];
			$var='/<[^<>@]*>|\&nbsp;/';
			$replace= ' ';
			$places_1[2]= preg_replace($var,$replace,$places_1[2]);
			$places_1[3]= $row['created_at'];
			$places_1[3]= prodate($places_1[3]);
			$places[$j]= implode('~',$places_1);
			$j++;
		}
		$places= array_reverse($places);
		$places1= implode('$',$places);
		echo $places1;
	}
	function prodate($places_1){
	$places_2 = (float)((time()- strtotime($places_1))/(60*60*24));
	if($places_2 >= 30)
	{
		$places_3= (int)($places_2/30);
			if($places_3==1)
			{
				$places_1= $places_3." month";
				return $places_1;
			}
		$places_1= $places_3." months";
		return $places_1;
	}
	if($places_2<30 && $places_2>=1)
	{
		$places_3 = (int)($places_2);
			if($places_3==1)
			{
				$places_1= $places_3." day";
				return $places_1;
			}
		$places_1= $places_3." days";
		return $places_1;
	}
	if($places_2<1)
	{
		$places_2= ($places_2*24);
		$places_3= int($places_2);
		if($places_3==1)
		{
			$places_1= (int)($places_3)." hour";
			return $places_1;
		}
		if($places_3<1)
			{
				$places_4= $places_3*60;
					if($places_4<1)
						{
							$places_5= $places_4*60;
							$places_1= (int)($places_5)." seconds";
							return $places_1;
						}
				$places_1= (int)($places_4)." minutes";
				return $places_1;
			}
		$places_1= (int)($places_3)." hours";
		return $places_1;
	}
}
?>