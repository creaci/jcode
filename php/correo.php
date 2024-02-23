<?php
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $correo = $_POST["correo"]; 
    $tema = $_POST["tema"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "jimyalvarado.18@gmail.com"; 
    $asunto = "Consulta via Web de $email";

    $contenido = "Nombre: $nombre \n";
    $contenido .= "Telefono: $telefono \n";
    $contenido .= "Correo: $correo \n";
    $contenido .= "Tema: $tema \n";
    $contenido .= "Mensaje: $mensaje";

    $header = "From: jcodeweb@github.com"; 

    $mail = mail($destinatario, $asunto, $contenido, $header);

    if ($mail) {
        echo "<script>alert('El correo se envio correctamente :)')</script>";
    } else {
        echo "<script>alert('El correo no se pudo enviar, intente nuevamente :(')</script>";
    }

?>