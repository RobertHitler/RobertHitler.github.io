<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<?php
$to = "robert.h.parikrma@gmail.com";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: dilstar27micheal@rediffmail.com";

if(mail($to,$subject,$txt,$headers)){
	echo("mail sent");}
	else {
	echo("cannot send");
	}

?>
	
</body>
</html>