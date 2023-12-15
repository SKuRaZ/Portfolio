<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Set your email address
    $to = "suraz.shrestha.00.00@gmail.com";

    // Set email subject
    $subject = "New Contact Form Submission";

    // Build the email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Subject: $subject\n";
    $body .= "Message:\n$message";

    // Send email
    mail($to, $subject, $body);

    // You can redirect the user to a thank you page
    header("Location: thank_you.html");
    exit;
}
?>
