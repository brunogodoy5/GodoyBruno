<?php
require_once "../conexion.php";

$email = null;
$contraseña= null;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

if (isset($_POST['email']) && !empty(($_POST['email']))) {
    $email = trim($_POST['email']);
} else {
    echo "el email viene vacio";
}
if (isset($_POST['contraseña']) && !empty(($_POST['contraseña']))) {
    $contraseña = trim($_POST['contraseña']);
} else {
    echo "el email viene vacio";
}
    


    $database = new Database();

    $conn = $database->connect();

    $query= "SELECT * FROM profesores WHERE email = '$email' AND password = '$contraseña'";
            $stmt = $database -> conn -> prepare($query) ; //prepara la consulta
            $stmt -> execute(); // ejecuta la consulta
            $usuario = $stmt -> fetchAll(); // Devuelve el resultado en caso únicamente de que exista coincidencia de email y contraseña

            var_dump($usuario);
            if ($usuario == null) { //Si el usuario es igual a null, significa que por ninguna circunstancia hubo coincidencia, la query se ejecutó correctamente pero no hubo
                //ningun tipo de coincidencia en email y clave.
                echo "Error <br> <br>";
                header('Location: ../Vistas/usuariono.php');
            }
            else {
                echo "Login exitoso. <br><br>";
               header('Location: ../Alumno/index_alumno.php');
            }

       

  

        }
        
        
?>