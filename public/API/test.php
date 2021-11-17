<?php

header('Content-type: application/json');
    $host = 'fdb34.awardspace.net';
    $dbname = '3986739_marcobd';
    $usuario = '3986739_marcobd';
    $contrasenia = '%v9Eys].9hLj1?%Y';
    // falta poner los datos de las variables de entorno
    try {
        $conexion = new PDO("mysql:host=$host;dbname=$dbname","$usuario","$contrasenia");
        $conexion->exec("set names utf8");
         // cambiar por la consulta
        $array2 = array ();
        $array2["nombre"] = "juan";
        echo json_encode($array2);
    }catch(Exception $error) {
        echo "Error al establecer la conexión.";
    }