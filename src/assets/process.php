<?php

header('Content-Type: text/html; charset=utf-8');

$errors = '';

if(empty($errors))
{

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$from_email = $request->email;
	$message = $request->message;
	$from_firstName = $request->firstName;
	$from_lastName = $request->lastName;

	$to_email = 'inbox@ca-triumph.ru';

	$contact = "<p><strong>Name:</strong> $from_firstName $from_lastName</p>
							<p><strong>Email:</strong> $from_email</p>";
	$content = "<p>$message</p>";

	$website = 'Вопрос с сайта: ca-triumph';
	$email_subject = "$website: from $from_firstName $from_lastName";

	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';

	$headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=utf-8";
  $headers .= "Content-Transfer-Encoding: 8bit";
	$headers .= "From: $from_email\n";
	$headers .= "Reply-To: $from_email";

	mail($to_email,$email_subject,$email_body,$headers);

	$response_array['status'] = 'success';
	$response_array['from'] = $from_email;
	echo json_encode($response_array);
	echo json_encode($from_email);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>
