<?php
    include_once "cors.php";
    include_once "funciones.php";
    $sponsors = obtenerSponsors();
    echo json_encode($sponsors);
?>