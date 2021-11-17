<?php
    include_once "cors.php";

    if (!isset($_GET['codigoEmpresa'])) {
        echo json_encode(null);
        exit;
    }

    $codigoEmpresa = $_GET['codigoEmpresa'];
    include_once "funciones.php";
    $sponsor = eliminarSponsor($codigoEmpresa);
    echo json_encode($sponsor);
?>