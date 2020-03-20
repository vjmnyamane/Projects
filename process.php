<?php

sleep(1);
$to = 'vuyiswamnyamane@gmail.com';
$subject = 'School Contact Form';

if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$subject = trim($_POST['subject']);
	$message = trim($_POST['message']);

	if(!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {

		$full_name = $name;
		$body = $full_name ."\n". $subject ."\n". $message;
		$headers = "From  {$full_name}  " . $email; 

		mail($to, $subject, $body, $headers);
		header('location: ../form.html');
	}
} else {
	header('location: ../form.html');
}

?>