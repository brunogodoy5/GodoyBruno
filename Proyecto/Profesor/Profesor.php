<?php

class Profesor{

    public function setProfesor($database, $nombre, $apellido, $dni, $email, $password, $legajo, $instituto){
        $query ="INSERT INTO `profesores`(`id`, `nombre`, `apellido`, `dni`, `email`, `password`, `legajo`, `id_instituto`) 
        VALUES (NULL,'$nombre','$apellido',$dni,'$email','$password',$legajo,'$instituto')";
    
            $stmt = $database -> conn -> prepare($query) ; //prepara la consulta
            $stmt -> execute(); // ejecuta la consulta
            $usuario = $stmt -> fetchAll(); // Devuelve los datos
    }

}

?>