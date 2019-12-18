<?php
$server='localhost:8080';
$username='root';
$password='';
$database='mydb';
$table='mytable';

$con=mysqli_connect($server,$username,$password);


    $q="create database if not exists $database ";
    $result=$con->query($q);
    
    if(mysqli_select_db($con,$database)===true)
    {
     echo("the connection with database ".$database." is done . <br>");  
    }
    
    //create the table . 
    $q="create table if not exists $table(target varchar(40),
    time varchar(150),event varchar(50)
    )";
    $result=$con->query($q);
    

    
?>