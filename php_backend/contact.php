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
  $subject = $_POST['_subject'];
  $to = $_POST['_replyto'];
  $message = $_POST['_message'];


  //Instantiation and passing `true` enables exceptions
  $mail = new PHPMailer(true);

  try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
//        $mail->isSMTP();                                            //Send using SMTP
    $mail->Host = 'mail.supunkanushka.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth = true;                                   //Enable SMTP authentication
    $mail->Username = 'test@supunkanushka.com';                     //SMTP username
    $mail->Password = 'Test@SupunKanushka';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port = 465;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('test@supunkanushka.com', 'Visha Consultants');
    $mail->addAddress($to, $name);     //Add a recipient
    $mail->addCC('skanushka@gmail.com');

    //Attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $subject;
    $mail->Body = $message;

    $mail->send();
    echo 'Message has been sent';
    header("Location: https://new.vishaconsultants.com/contact-us?success=true");
  } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    header("Location: https://new.vishaconsultants.com/contact-us?success=false");
  }

} else {
  echo 'done';
  header("Location: https://new.vishaconsultants.com/contact-us");
}
