<?php

header('Content-type: application/json');
    $host = 'fdb34.awardspace.net';
    $dbname = '3986739_marcobd';
    $usuario = '3986739_marcobd';
    $contrasenia = '12mdmcpsok';
    // falta poner los datos de las variables de entorno
    try { 
        try {
            $conexion = new PDO("mysql:host=$host;dbname=$dbname","$usuario","$contrasenia");
            // $conexion->exec("set names utf8"); 
            $consulta = $conexion->prepare("SELECT nombreEmpresa from sponsors");
            $resultado = $consulta->execute();
            $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($resultado);
        }catch(Exception $error) {
            echo "Error al establecer la conexión.";
        }
    }catch(Exception $error) {
        echo "Error al establecer la conexión.";
    }