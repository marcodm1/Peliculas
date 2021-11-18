<?php

/*
    mi phpmyAdmin
    https://supportindeed.com/phpMyAdmin4/sql.php?server=1&db=3986739_marcobd&table=sponsors&pos=0&token=6e10c847bebb2f00c5408a6b4f16d139 

    mi servidor
    https://cp1.awardspace.net/database-manager/

    mi trello
    https://trello.com/b/4o2BzD0t/proyecto


                                    Base de datos

    tabla sponsors
        nombreEmpresa   direccionEmpresa    diasContratados     codigoEmpresa
*/

function eliminarSponsor($codigoEmpresa) {
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("DELETE FROM sponsors WHERE codigoEmpresa = ?");
    return $sentencia->execute([$codigoEmpresa]);
}

function actualizarSponsor($sponsor) {
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("UPDATE sponsors SET nombreEmpresa = ?, direccionEmpresa = ?, diasContratados = ? WHERE codigoEmpresa = ? ");
    return $sentencia->execute([ $sponsor->nombreEmpresa, $sponsor->direccionEmpresa, $sponsor->diasContratados, $sponsor->codigoEmpresa ]);
}

function obtenerSponsorPorCodigoEmpresa($codigoEmpresa) {
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("SELECT nombreEmpresa, direccionEmpresa, diasContratados, codigoEmpresa FROM sponsors WHERE codigoEmpresa = ?");
    $sentenca->execute([$codigoEmpresa]);
    return $sentencia->execute([$codigoEmpresa]);
}

function obtenerSponsors() {
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("SELECT nombreEmpresa, direccionEmpresa, diasContratados, codigoEmpresa FROM sponsors");
    return $sentencia->execute([$codigoEmpresa]);
}

function guardarSponsor($sponsor) {
    $bd = obtenerConexion();
    $sentencia = $bd->prepare("INSERT INTO sponsors(nombreEmpresa, direccionEmpresa, diasContratados, codigoEmpresa) VALUES (?, ?, ?, ?)");
    return $sentencia->execute([ $sponsor->nombreEmpresa, $sponsor->direccionEmpresa, $sponsor->diasContratados, $sponsor->codigoEmpresa ]);
}

function obtenerVariablesDeEntorno($key) {
    if (defined("_ENV_CACHE")) {
        $vars = _ENV_CACHE;
    }else {
        $file = "env.php";
        if (!file_exists($file)) {
            throw new Exception("El archivo de las variables de entorno ($file) no existe. Crealo!");
        }
        $vars = parse_int_filr($file);
        define("_ENV_CACHE", $vars);
    }
    if (isset($vars[$key])) {
        return $vars[$key];
    }else {
        throw new Exception("La clave especificada ($key) no existe en el archivo de las variables de entorno");
    }
}

function obtenerConexion() {
    $host = 'fdb34.awardspace.net';
    $dbname = '3986739_marcobd';
    $usuario = '3986739_marcobd';
    $contrasenia = '%v9Eys].9hLj1?%Y';
    // falta poner los datos de las varññlllññiabljkhkhes de entorno
    try {
        $conexion = new PDO("mysql:host=$host;dbname=$dbname","$usuario","$contrasenia");
        $conexion->exec("set names utf8"); 
    }catch(Exception $error) {
        echo "Error al establecer la conexión.";
    }
}
