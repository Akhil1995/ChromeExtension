<?php
$q= $_GET["q"];
if($q=1){
require 'config.php';
$conn = mysql_connect($host , $username , $password);
mysql_select_db("instimaps");
$sql= "SELECT * FROM markers ";
$result= mysql_query($sql);
$places= array();
$places_1= array();
$j=0;
while($row= mysql_fetch_array($result))
{
	$places_1[0]= $row['id'];
	$places_1[1]= $row['name'];
	$places_1[2]= $row['address'];
	$places_1[3]= $row['lat'];
	$places_1[4]= $row['lng'];
	$places_1[5]= $row['type'];
	$places[$j]= implode('~',$places_1);
	$j++;
}
$places1= implode('$',$places);
echo $places1;
}
?>