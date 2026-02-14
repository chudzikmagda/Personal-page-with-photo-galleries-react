<?php
$env = parse_ini_file(__DIR__ . '/../.env');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['name'], $_POST['message'], $_POST['email'])) {

    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    if (!$email) {
        die("Invalid email format");
    }

    $name = htmlspecialchars(trim($_POST['name']));
    $message = htmlspecialchars(trim($_POST['message']));
    $recipient = $env['MAIL_TO'] ?? '';
    $subject = "Message from contact form";
    $formcontent = "Name: $name\n";
    $formcontent .= "Email: $email\n\n";
    $formcontent .= "Message:\n$message\n";

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = $env['MAIL_HOST'] ?? '';
        $mail->SMTPAuth   = true;
        $mail->Username   = $env['MAIL_USER'] ?? '';
        $mail->Password   = $env['MAIL_PASS'] ?? '';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = $env['MAIL_PORT'] ?? 587;
        $mail->CharSet    = 'UTF-8'; 
        $mail->setFrom($env['MAIL_FROM'] ?? '', 'magdachudzik.pl');
        $mail->addAddress($recipient);
        $mail->addReplyTo($email, $name);
        $mail->isHTML(false); 
        $mail->Subject = $subject;
        $mail->Body    = $formcontent;
        $mail->send();
        echo "Email sent successfully";

    } catch (Exception $e) {
        error_log($mail->ErrorInfo); 
        echo "Email could not be sent. Please try again later.";
    }

} else {
    http_response_code(405);
    die("Method Not Allowed or missing data.");
}