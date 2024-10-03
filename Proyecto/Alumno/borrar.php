<?php

require_once("../conexion.php");

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

            $id = $_POST["id"];

        $database = new Database();

        $database->ejecutarConsulta("DELETE FROM `alumnos` WHERE id=$id");

            //var_dump($_POST);


          header('Location: index_alumno.php')  ;        
    }
?>