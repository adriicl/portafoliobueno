<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validar los datos
    if (empty($name) || empty($email) || empty($message)) {
        echo "Todos los campos son obligatorios.";
        exit;
    }

    // Puedes enviar los datos por correo electrónico
    $to = "adriancabreraleonis172003@gmail.com"; 
    $subject = "Nuevo mensaje de $name";
    $body = "Nombre: $name\nCorreo: $email\nMensaje:\n$message";
    $headers = "From: $email";

    if (@mail($to, $subject, $body, $headers)) {
        header('Location: gracias.html');
        exit;
    } else {
        echo "Hubo un error al enviar el mensaje. Inténtalo de nuevo más tarde.";
    }
}
?>


