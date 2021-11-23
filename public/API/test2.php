<?php

    // http://marcodm.atwebpages.com/API/test2.php?nombre=Hannes

    // $dominioPermitido = "http://localhost:3000";
    // header("Access-Control-Allow-Origin: $dominioPermitido");
    // header("Access-Control-Allow-Headers: content-type");
    // header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");

    $recibe = json_decode($_GET['x']);

    $nombre = $recibe->nombre;
    $recibe = json_encode($nombre);

    echo $recibe;

    // echo $_GET["nombre"];




