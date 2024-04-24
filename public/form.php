<?php

$email = "lesha_novitskiy@mail.ru";
// Проверяем, является ли запрос методом POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Проверяем значение параметра formName
    // Получаем значения полей tel и message из POST запроса
    $tel = $_POST['tel'];
    $message = $_POST['message'];

    // Отправляем значения на почту
    $to = $email;
    $subject = 'Новое сообщение с формы "Оставить заявку"';
    $body = "Телефон: $tel\n\nСообщение: $message";
    $headers = "From: " . $email;

    if (mail($to, $subject, $body, $headers)) {
        // Возвращаем успешный JSON ответ
        echo json_encode(['success' => true]);
    } else {
        // Возвращаем ошибку JSON ответ
        echo json_encode(['success' => false, 'error' => 'Не удалось отправить сообщение']);
    }
} else {
    // Возвращаем ошибку JSON ответ, если запрос не является методом POST
    echo json_encode(['success' => false, 'error' => 'Метод запроса должен быть POST']);
}
