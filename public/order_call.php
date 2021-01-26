<?php
$to = "info@cpr-team.ru" ;
$landingUrl = 'cpr-team.com';
$headers = "From: landing@$landingUrl";

if (!empty($_POST)) {
//    $name = trim(strip_tags($_POST['name']));
//    $email = trim(strip_tags($_POST['email']));
    $phone = trim(strip_tags($_POST['phone']));
//    $text = trim(strip_tags($_POST['text']));
    if ($phone) {
        $text = "Пользователь оставил заявку на звонок " . date('Y-m-d H:i:s');
        $text .= trim(strip_tags($_POST['text']));

        $message = "Запрос пользователя с $landingUrl\n";
        $message .= "Телефон: $phone\n";
        $message .= "Сообщение: \n $text\n";

        mail($to, "Запрос пользователя с $landingUrl", $message, $headers);
        echo 'OK';
    } else {
        $error = 'Введите e-mail или телефон';
        echo $error;
    }
    die;
}


