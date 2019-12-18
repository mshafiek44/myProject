<?php
 
$con=new mysqli("localhost:8080","root","","mydb");

 if(isset($_POST['object']))
 { 
 $arr_object = json_decode($_POST['object'], true);
 print_r($arr_object);
  for($i=0;$i<count($arr_object);$i++)
  {
	   $event_target=$arr_object[$i]['target'];
	   $event=$arr_object[$i]['type'];
	   $event_time=$arr_object[$i]['time'];
		  
		
		$q="insert into tableleters values('$event_target','$even','$event_time')";
		$result=$con->query($q);
  }
  
 echo json_encode($arr_object);
 }
 

if(isset($_GET['person']))
{
	$q="select * from tableleters";
	$do=$con->query($q);
	if($do)
	{
		$rows=array();
		if($do->num_rows >0)
		{
			while($row=$do->fetch_assoc())
			{
				array_push($rows,$row);
			}
			echo json_encode($rows);
		}
		else{echo "No data";}
	}
	
	
}
	
?>