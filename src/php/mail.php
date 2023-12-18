<?php
if (isset($_POST['name']) && isset($_POST['message']) && isset($_POST['email'])) {
    $name = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);
    $email = $_POST['email'];
    $recipient = "kontakt@magdachudzik.pl";
    $subject = "Wiadomość z portfolio fotograficznego";
    $formcontent = "From: $name\n\nEmail: $email\n\nMessage: $message\n\n";
    
    $mailheader = "From: $email\r\n";

    if (mail($recipient, $subject, $formcontent, $mailheader)) {
        echo "Email sent successfully";
    } else {
        echo "Email could not be sent";
    }
} else {
    $error_message = "POST data is missing";
    die($error_message);
}
?>
