<?php


class Alumno{
    
    public function setAlumno($database, $nombre, $apellido, $dni, $email, $fecha_nacimiento,$materia){
    
        $query= "INSERT INTO `alumnos`(`id`, `nombre`, `apellido`, `dni`, `fecha_nacimiento`, `id_materia`, `email`) 
        VALUES (NULL,'$nombre','$apellido',$dni,'$fecha_nacimiento',$materia,'$email')";

            $stmt = $database -> conn -> prepare($query) ; //prepara la consulta
            $stmt -> execute(); // ejecuta la consulta
            $alumno = $stmt -> fetchAll(); // Devuelve los datos

    }

    public function getAlumno($database, $id){
        $query= "SELECT * FROM `alumnos` WHERE `alumnos`.`id` = $id";
        $stmt = $database -> conn -> prepare($query) ; //prepara la consulta
        $stmt -> execute(); // ejecuta la consulta
        $alumno = $stmt -> fetchAll(); // Devuelve los datos 
    
        return $alumno;
    }

}

?>