<?php

function validar_campo($campo)
{
    $campo = trim($campo);
    $campo = stripcslashes($campo);
    $campo = htmlspecialchars($campo);

    return $campo;
}
header('Content-Type: application/json');


if( isset($_POST['name']) && !empty($_POST['email']) && !empty($_POST['msg']) ){

    $destino = "straticonahuel@gmail.com";
    $name = validar_campo($_POST["name"]);
    $email = validar_campo($_POST["email"]);
    $msg = validar_campo($_POST["msg"]);

    $contenido = "Nombre: " .$name;
    $contenido .= "\n Correo: " . $email;
    $contenido .= "\n Mensaje: " . $msg;

    mail($destino,"Mensaje de contacto portfolio " . $name, $contenido);

    return print(json_encode('ok'));
}

return print(json_encode('no se envio'));



?>