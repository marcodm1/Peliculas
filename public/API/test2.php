<?php
    header('Content-type: application/json');
    $json = file_get_contents('php://input');
    $recibe = json_decode($json);
    $nombre = $recibe->nombre;
    $direccion = $recibe->direccion;
    $dias = $recibe->dias;
    $codigo = $recibe->codigo;

    // CONEXION
    $host = 'fdb34.awardspace.net';
    $dbname = '3986739_marcobd';
    $usuario = '3986739_marcobd';
    $contrasenia = '12mdmcpsok';

    $respuesta = array(
        "resultado" => null, 
        "texto" => ''
    );

    try {
        $conexion = new PDO("mysql:host=$host;dbname=$dbname","$usuario","$contrasenia");
        // $conexion->exec("set names utf8;"); 
        $consulta = $conexion->prepare("INSERT INTO sponsors(nombreEmpresa, direccionEmpresa, diasContratados, codigoEmpresa) VALUES (?, ?, ?, ?)");
        $consulta->bindParam(1, $nombre);
        $consulta->bindParam(2, $direccion);
        $consulta->bindParam(3, $dias);
        $consulta->bindParam(4, $codigo);
        $resultado = $consulta->execute();
        if ($resultado) {
            $respuesta['resultado'] = true;
            $respuesta['texto'] = "Enviado correctamente";
        } else {
            $respuesta['resultado'] = false;
            $respuesta['texto'] = $conexion->errorInfo();
        }
    }catch(Exception $error) {
        $respuesta['resultado'] = false;
        $respuesta['texto'] = $error->getMessage();
    }
    echo json_encode($respuesta);
    
    // $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
 // $consulta->bindParam(1, $nombre /*,PDO::PARAM_INT si ponemos esto es para indicar el tipo de dato por ejemplo PDO::PARAM_STR*/);
        






    // header('Content-type: application/json');

    // // CONEXION
    // $host = $ENV['MYSQL_HOST'];
    // $dbname = $ENV['MYSQL_DATABASE_NAME'];
    // $usuario = $ENV['MYSQL_USER'];
    // $codigo = $ENV['MYSQL_codigo'];
    // $conexion = new PDO("mysql:host=$host;dbname=$dbname","$usuario","$codigo");

    // // JSON
    // $recibe = json_decode($_GET['x']);
    // // FORMULARIO
    // $nombre = $recibe->nombre;
    // $direccion = $recibe->direccion;
    // $dias = $recibe->dias;
    // $codigo = $recibe->codigo;
    // // hidden de la selección
    // $opcion = $recibe->opcion;



    // prueba snecilla si recibe datos o no
    // echo json_encode("aqui esta la respuesta de php");

    // switch ($opcion) {
        // case 'create':
        //     create($nombre, $direccion, $dias, $codigo, $conexion);
        //     break;
        // case 'read':
        //     read($conexion);
        //     break;
        // case 'update':
        //     update($nombre, $codigo, $conexion);
        //     break;
        // case 'delete':
        //     delete($nombre, $codigo, $conexion);
        //     break;
    // }

    // function create($nombre, $direccion, $dias, $codigo, $conexion) {
    //     $newPass  = codigo_hash($codigo, codigo_DEFAULT);
    //     $consulta = $conexion->prepare("INSERT INTO `sponsors`(`nombreEmpresa`, `direccionEmpresa`, `diasContratados`, `codigoEmpresa`) VALUES (?,?,?,?)");
    //     $consulta->bindParam(1, $nombre /*,PDO::PARAM_INT si ponemos esto es para indicar el tipo de dato por ejemplo PDO::PARAM_STR*/);
    //     $consulta->bindParam(2, $direccion);
    //     $consulta->bindParam(3, $dias);
    //     $consulta->bindParam(4, $newPass);
    //     try {
    //         $consulta->execute();
    //         echo json_encode("false");
    //     } catch (PDOException $error){
    //         echo json_encode("true");
    //     }
    // }

    // function read($conexion) {
    //     try { 
    //         try {
    //             // $conexion->exec("set names utf8"); 
    //             $consulta = $conexion->prepare("SELECT nombreEmpresa from sponsors");
    //             $resultado = $consulta->execute();
    //             $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
    //             echo json_encode($resultado);
    //         }catch(Exception $error) {
    //             echo "Error al establecer la conexión.";
    //         }
    //     }catch(Exception $error) {
    //         echo "Error al establecer la conexión.";
    //     }
    // }
    // function update($nombre1, $nombre2, $codigo, $conexion) {
    //     $newPass  = codigo_hash($codigo, codigo_DEFAULT); 
    //     $consulta = $conexion->prepare("UPDATE usuarios SET nombre = ? and codigo = ? WHERE nombre = ? ");
    //     $consulta->bindParam(1, $nombre2);
    //     $consulta->bindParam(2, $newPass);
    //     $consulta->bindParam(3, $nombre1);
    //     try {
    //         $consulta->execute();
    //         return "Actualizado correctamente";
    //     } catch (PDOException $error){
    //         return "Error: El usuario no tiene los permisos necesarios para modificar.";
    //     }
    // }
    // function delete($nombre, $codigo, $conexion) {
        /* $
¿Realmente desea ejecutar "DELETE FROM `sponsors` WHERE `sponsors`.`codigoEmpresa` = 12344"?
        */
    //     $consulta = $conexion->prepare("SELECT codigo from usuarios WHERE nombre = ?");
    //     $consulta->bindParam(1, $nombre);
    //     try {
    //         $consulta->execute();
    //         $consulta = $consulta->fetchAll(PDO::FETCH_ASSOC);
    //         foreach ($consulta as $poss => $valor) {
    //             foreach ($valor as $codigoe) {
    //                 $hash = $codigoe;
    //             }
    //         }
    //     } catch (PDOException $error){
    //         return "Error: No se ha podido acceder a los datos.";
    //     }
    //     if (!codigo_verify($codigo, $hash)) { // no me funciona bien esta parte
    //         return "La contraseña no coincide";
    //     }
    //     $consulta = $this->conexion->prepare("DELETE from usuarios WHERE nombre = ?");
    //     $consulta->bindParam(1, $nombre);
    //     try {
    //         $consulta->execute(); // PDOException: SQLSTATE[HY093]: Invalid parameter number: number of bound variables does not match number of tokens
    //         return "Eliminado correctamente";
    //     } catch (PDOException $error){
    //         return "Error: El usuario no tiene los permisos necesarios para eliminar.";
    //     }
    // }
    // function comprobar($nombre, $conexion) {
    //     $consulta = $conexion->prepare("SELECT * from usuarios WHERE nombre = ?");
    //     $consulta->bindParam(1, $nombre);
    //     try {
    //         $consulta->execute();
    //         $consulta = $consulta->fetchAll(PDO::FETCH_ASSOC);
    //         if (!empty($consulta)) {
    //             return true;
    //         }
    //     } catch (PDOException $error){ // no estoy utilizando $error
    //         return false;
    //     }
    // }




        // $nombre = $recibe->nombre;
    // $recibe = json_encode($nombre);
    // echo $recibe;

    // $saludo = json_encode("hola desde php");
    // echo $saludo;