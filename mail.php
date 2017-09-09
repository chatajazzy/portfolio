<?php
    require_once('class.phpmailer.php');    //dodanie klasy phpmailer
    require_once('class.smtp.php');    //dodanie klasy smtp
    $mail = new PHPMailer();    //utworzenie nowej klasy phpmailer
    $mail->From = $_POST['email'];    //adres e-mail użyty do wysyłania wiadomości
    $mail->FromName = $_POST['name'];    //imię i nazwisko lub nazwa użyta do wysyłania wiadomości
    $mail->AddReplyTo($_POST['email']); //adres e-mail nadawcy oraz jego nazwa
                                                 //w polu "Odpowiedz do"  
    $mail->Host = "smtp.zenbox.pl";    //adres serwera SMTP wysyłającego e-mail
    $mail->Mailer = "smtp";    //do wysłania zostanie użyty serwer SMTP
    $mail->SMTPAuth = true;    //włączenie autoryzacji do serwera SMTP
    $mail->Username = "kontakt@paulinachatkiewicz.pl";    //nazwa użytkownika do skrzynki e-mail
    $mail->Password = "2PbPR5ad";    //hasło użytkownika do skrzynki e-mail
    $mail->Port = 587; //port serwera SMTP zależny od konfiguracji dostawcy usługi poczty

    $mail->Body = $_POST['message'];    //Treść wiadomości, można stosować zmienne i znaczniki HTML     
    $mail->AddAddress ("kontakt@paulinachatkiewicz.pl");    //adres skrzynki e-mail oraz nazwa
                                                    //adresata, do którego trafi wiadomość
     if($mail->Send())    //sprawdzenie wysłania, jeśli wiadomość została pomyślnie wysłana
        {                      
        echo "<meta http-equiv=\"refresh\" content=\"0;URL=success.html\">";
        }            
    else    //w przeciwnym wypadku
        {           
        echo 'E-mail nie mógł zostać wysłany';    //wyświetl następujący
        }
  ?>  
