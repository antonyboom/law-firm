<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'mailer/PHPMailerAutoload.php';

if (isset($_POST['firstName']) $$ isset($_POST['lastName']) && isset($_POST['email']) && isset($_POST['message'])) {

    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->From = $_POST['email'];
    $mail->FromFirstName = $_POST['firstName'];
    $mail->FromLastName = $_POST['lastName'];

    $mail->AddAddress('inbox@ca-triumph.ru'); //recipient
    $mail->Subject = $_POST['email'];
    $mail->Body =

    "От: " . $_POST['email'] . "\r\n\r\nСообщение: " . stripslashes($_POST['message']);

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if(!$mail->send()) {
        $formData = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($formData);
        exit;
    }

    $formData = array('success' => true, 'message' => 'Thanks! We have received your message.');
    echo json_encode($formData);

} else {

    $formData = array('success' => false, 'message' => 'Please fill out the form completely.');
    echo json_encode($formData);

}
