<?php

/* https://api.telegram.org/bot1795383320:AAEF72IuyCknBXerIU4pJPiNz0BWlN7ZydQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];

$token = "6286043277:AAH4LMOuXi9-4duz75zWcvkXslJn-tDLqG0";
$chat_id = "-1001483191527";
$arr = array(
  'Запит дзвінка від клієнта',
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
  
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: https://clicknet.com.ua/dent/');
} else {
  echo "Error";
}
?>