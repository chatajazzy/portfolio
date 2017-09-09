<?php
$to      = 'kontakt@paulinachatkiewicz.pl';
$name = $_POST['name'];
$message = $_POST['message'];
$headers = 'From: ' . $_POST['email'] . "\r\n" .
	'Content-type: text/html; charset=utf-8';

mail($to, $name, $message, $headers);

?>
<html style="font-size: 150%;">
	<head>
		<meta charset="UTF-8">
	</head>
	<body style="display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;">
		<?php
		echo "<p style="font-size: 20px;">Dzięki za kontakt. Odezwę się tak prędko jak się da. ;)</p>";
		?>
		<?php
		echo "<a href='http://paulinachatkiewicz.pl' style=' color: #fff;
  text-decoration: none;
  display: block;
  padding: 10px 15px;
  background: crimson;'>Powrót</a>";
		?>
	</body>
</html>

<?php
require 'PHPMailerAutoload.php';

require_once('class.phpmailer.php');    // dodanie klasy phpmailer
require_once('class.smtp.php');    // dodanie klasy smtp
$mail = new PHPMailer();    //utworzenie nowej klasy phpmailer
$mail->From = $_POST['email'];    //Pełny adres e-mail
$mail->FromName = $_POST['name'];    //imię i nazwisko lub nazwa użyta do wysyłania wiadomości
$mail->Host = "smtp.zenbox.pl";    //adres serwera SMTP wysyłającego e-mail
$mail->Mailer = "smtp";    //do wysłania zostanie użyty serwer SMTP
$mail->SMTPAuth = true;    //włączenie autoryzacji do serwera SMTP
$mail->Username = "kontakt@paulinachatkiewicz.pl";    //nazwa użytkownika do skrzynki e-mail
$mail->Password = "hasło";    //hasło użytkownika do skrzynki e-mail
$mail->Port = 587; //port serwera SMTP 
$mail->Body = $_POST['message'];    //Treść wiadomości, można stosować zmienne i znaczniki HTML 
$mail->SMTPAutoTLS = false;   //wyłączenie TLS
$mail->SMTPSecure = '';    // 
$mail->AddAddress ("kontakt@paulinachatkiewicz.pl","Paulina Chatkiewicz");    //adres skrzynki e-mail oraz nazwa
                                                    //adresata, do którego trafi wiadomość
if($mail->Send())    //sprawdzenie wysłania, jeśli wiadomość została pomyślnie wysłana
    {                      
        echo 'E-mail został wysłany'; //wyświetl ten komunikat
        }            
    else    //w przeciwnym wypadku
        {           
        echo 'E-mail nie mógł zostać wysłany';    //wyświetl następujący
        }
?>