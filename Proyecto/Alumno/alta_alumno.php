<?php
require_once "../conexion.php";
require_once "Alumno.php";

$database = new Database();

$materias = $database->ejecutarConsulta('select * from materias');

    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $dni = $_POST['dni'];
        $email = $_POST['email'];
        $fecha_nacimiento = $_POST['fecha_nacimiento'];
        $materia = $_POST['materia'];

        $database = new Database();

        $conn = $database->connect();// conecta a la base de datos

        $alumno = new Alumno();


        $alumno->setAlumno($database, $nombre, $apellido, $dni, $email, $fecha_nacimiento, $materia);

        header('Location: index_alumno.php');
    }

?>


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Alumno</title>
</head>
<body>
    <div class="container">
        <h2>Registro de Alumno</h2>
        <form action="alta_alumno.php" method="POST">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required>

            <label for="dni">DNI:</label>
            <input type="text" id="dni" name="dni" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="fecha_nacimiento">Fecha de Nacimiento:</label>
            <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required>

            <label for="materia">Materia:</label>
            <select name="materia" id="materia" required>
                <?php
                foreach ($materias as $materia) {
                    echo '<option value="' . $materia['id'] . '">' . $materia['nombre'] . '</option>';
                }
                ?>
            </select>

            <input type="submit" value="Enviar">
        </form>
    </div>
</body>
</html>









































                <style>
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background-color: #e9ecef;
                        margin: 0;
                    }
                    .container {
                        background: white;
                        padding: 30px;
                        border-radius: 12px;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                        width: 400px;
                    }
                    h2 {
                        text-align: center;
                        color: #333;
                        margin-bottom: 20px;
                    }
                    label {
                        font-size: 0.9em;
                        color: #555;
                    }
                    input[type="text"], input[type="email"], input[type="date"], select {
                        width: 100%;
                        padding: 12px;
                        margin: 8px 0;
                        border: 1px solid #ccc;
                        border-radius: 6px;
                        transition: border 0.3s;
                    }
                    input[type="text"]:focus, input[type="email"]:focus, input[type="date"]:focus, select:focus {
                        border-color: #28a745;
                        outline: none;
                    }
                    input[type="submit"] {
                        width: 100%;
                        padding: 12px;
                        background-color: #28a745;
                        color: white;
                        border: none;
                        border-radius: 6px;
                        font-size: 1em;
                        cursor: pointer;
                        transition: background-color 0.3s;
                    }
                    input[type="submit"]:hover {
                        background-color: #218838;
                    }
                </style>