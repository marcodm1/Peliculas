<?php
    include_once "cors.php";
//gggg
    if (!isset($_GET['codigoEmpresa'])) {
        echo json_encode(null);
        exit;
    }
    // require_once("./conectaBD.php");

    $codigoEmpresa = $_GET['codigoEmpresa'];
    include_once "funciones.php";
    $sponsor = obtenerSponsor();
    echo json_encode($sponsor);
?>