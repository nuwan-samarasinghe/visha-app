<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $name = $_POST['_name'];
  $apn = $_POST['_apn'];
  $contact = $_POST['_contact'];
  $email = $_POST['_email'];
  $message = $_POST['_message'];


  //Instantiation and passing `true` enables exceptions
  $mail = new PHPMailer(true);

  try {
    //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host = 'smtpout.secureserver.net';                     //Set the SMTP server to send through
    $mail->SMTPAuth = true;                                   //Enable SMTP authentication
    $mail->Username = 'No-Reply@vishaconsultants.com';                     //SMTP username
    $mail->Password = 'noreply';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port = 465;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('No-Reply@vishaconsultants.com', 'Visha Consultants');
    $mail->addAddress($email, $name);     //Add a recipient
    $mail->addCC('info@vishaconsultants.com');

    //Attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = "Greetings from Visha Consultants";

    $body = '
<!DOCTYPE html>
<html>
<head>
  <style>

    #message td, #message th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    #message th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #134383;
      color: white;
    }
  </style>
</head>
<body>
<h4>Hi ' . $name . '</h4>
<p>
  Thank you for contacting us. We received your project details and site location.
  We will review the details and site geologic condition and get back to you at our earliest convenience.
</p>
<p>
  Please find the below copy of your submission.
</p>
<table id="message">
  <tr>
    <th>Filed</th>
    <th>Answer</th>
  </tr>
  <tr>
    <td>Name</td>
    <td>' . $name . '</td>
  </tr>
  <tr>
    <td>Property Address / APN Number</td>
    <td>' . $apn . '</td>
  </tr>
  <tr>
    <td>Contact Number</td>
    <td>' . $contact . '</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>' . $email . '</td>
  </tr>
  <tr>
    <td>Project Details</td>
    <td>' . $message . '</td>
  </tr>
</table>

<p>
  Thank you,
  <br>
  Visha Consultants, Inc.
</p>

</body>
</html>
';
    $mail->Body = $body;
    $mail->send();
    echo 'Message has been sent';
    header("Location: https://vishaconsultants.com/contact-us?success=true");
    die();
  } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    header("Location: https://vishaconsultants.com/contact-us?success=false");
    die();
  }

} else {
  echo 'done';
  header("Location: https://vishaconsultants.com/contact-us");
  die();
}
