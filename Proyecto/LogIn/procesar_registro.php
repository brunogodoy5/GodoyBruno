<?php

require_once "../conexion.php";
require_once "../Profesor/Profesor.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener y sanitizar datos
    $nombre = trim($_POST['nombre']);
    $apellido = trim($_POST['apellido']);
    $email = trim($_POST['email']);
    $password = $_POST['contraseña'];
    $legajo = $_POST['legajo'];
    $dni = $_POST['dni'];
    $instituto = $_POST['instituto'];
    
    $database = new Database();//crear una base de datos

    $conn = $database->connect();// conecta a la base de datos


    $profesor = new Profesor();

    $profesor->setProfesor($database, $nombre, $apellido, $dni, $email, $password, $legajo, $instituto);
    
   

    header('Location: ../index.php');
    

    

    //muestra los datos en pantalla
    //var_dump($nombre, $apellido, $email, $contraseña, $tipo);
    }



?>
