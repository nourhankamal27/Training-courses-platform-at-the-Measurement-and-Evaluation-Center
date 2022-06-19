<?php
$con = mysqli_connect("localhost",'root', '', 'contant');
if($con){
    echo "conenction successful";
}else{
    echo"No connection";

}

//mysqli_select_db($conn ,"contant");

$user = $_POST['user'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$comments = $_POST['comments'];

$query =" insert into contant_use( user, email, mobile, comment)
values ('$user',' $email','$mobile','$comments') ";

mysqli_query($con, $query);


header('location:index.php')

?>