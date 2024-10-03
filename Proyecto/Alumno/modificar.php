<?php
require_once "Alumno.php";
require_once "../conexion.php";

$database = new Database();

$conn = $database->connect();

$alumno = new Alumno();

$materias = $database->ejecutarConsulta('select * from materias');

$id = $_GET['id'];

$alumnoBuscado=$alumno->getAlumno($database, $id);
 
  //var_dump($_POST);


if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $dni = $_POST['dni'];
        $email = $_POST['email'];
        $fecha_nacimiento = $_POST['fecha_nacimiento'];
        $materia = $_POST['materia'];

    if(($nombre != $alumnoBuscado[0]['nombre']) or ($apellido != $alumnoBuscado[0]['apellido']) 
    or ($dni != $alumnoBuscado[0]['dni']) or ($email != $alumnoBuscado[0]['email']) 
    or ($fecha_nacimiento != $alumnoBuscado[0]['fecha_nacimiento']) or ($materia != $alumnoBuscado[0]['materia'])){
        
        $database->ejecutarConsulta("UPDATE `alumnos` 
                                    SET `nombre`='$nombre',
                                    `apellido`='$apellido',`dni`=$dni,
                                    `fecha_nacimiento`='$fecha_nacimiento',
                                    `id_materia`=$materia,`email`='$email'
                                     WHERE id=$id");

        header('Location: index_alumno.php');
    
    }else{
        header('Location: index_alumno.php');
    }
 }
 




?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8"> <!-- Define la codificación de caracteres -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Asegura que el diseño sea responsivo -->
    <title>Modificar Alumno</title>
</head>
<body>
    <div class="container"> <!-- Contenedor principal del formulario -->
        <h2>Modificar Alumno</h2> <!-- Título del formulario -->
        <form action="modificar.php?id=<?php echo $alumnoBuscado[0]['id']; ?>" method="POST"> <!-- Formulario que envía datos a modificar.php -->
            
            <label for="nombre">Nombre:</label> <!-- Etiqueta para el campo de nombre -->
            <input type="text" id="nombre" name="nombre" value="<?php echo ($alumnoBuscado[0]['nombre']); ?>"> <!-- Campo de entrada para el nombre -->

            <label for="apellido">Apellido:</label> <!-- Etiqueta para el campo de apellido -->
            <input type="text" id="apellido" name="apellido" value="<?php echo ($alumnoBuscado[0]['apellido']); ?>"> <!-- Campo de entrada para el apellido -->

            <label for="dni">DNI:</label> <!-- Etiqueta para el campo de DNI -->
            <input type="text" id="dni" name="dni" value="<?php echo ($alumnoBuscado[0]['dni']); ?>"> <!-- Campo de entrada para el DNI -->

            <label for="email">Email:</label> <!-- Etiqueta para el campo de email -->
            <input type="email" id="email" name="email" value="<?php echo ($alumnoBuscado[0]['email']); ?>" > <!-- Campo de entrada para el email -->

            <label for="fecha_nacimiento">Fecha de Nacimiento:</label> <!-- Etiqueta para el campo de fecha de nacimiento -->
            <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" value="<?php echo($alumnoBuscado[0]['fecha_nacimiento']); ?>"> <!-- Campo de entrada para la fecha de nacimiento -->

            <label for="materia">Materia:</label> <!-- Etiqueta para el campo de materia -->
            <select name="materia" id="materia" required> <!-- Menú desplegable para seleccionar la materia -->
                <?php
                foreach ($materias as $materia) { // Itera sobre las materias disponibles
                    $selected = ($materia['id'] == $alumnoBuscado[0]['materia_id']) ? 'selected' : ''; // Marca la materia actual como seleccionada
                    echo '<option value="' . $materia['id'] . '" ' . $selected . '>' . $materia['nombre'] . '</option>'; // Crea una opción en el menú
                }
                ?>
            </select>

            <input type="submit" value="Enviar"> <!-- Botón para enviar el formulario -->
        </form>
    </div>
</body>
</html>

































                <style>
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Define la fuente de la página */
                        background-color: #f4f4f4; /* Color de fondo de la página */
                        margin: 0; /* Elimina el margen por defecto */
                        padding: 20px; /* Espacio alrededor del contenido */
                    }
                    .container {
                        background: white; /* Fondo blanco para el contenedor */
                        padding: 30px; /* Espacio interno del contenedor */
                        border-radius: 12px; /* Bordes redondeados */
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombra para dar profundidad */
                        width: 400px; /* Ancho fijo del contenedor */
                        margin: auto; /* Centra el contenedor horizontalmente */
                    }
                    h2 {
                        text-align: center; /* Centra el título */
                        color: #333; /* Color del texto del título */
                        margin-bottom: 20px; /* Espacio debajo del título */
                    }
                    label {
                        font-size: 0.9em; /* Tamaño de fuente de las etiquetas */
                        color: #555; /* Color del texto de las etiquetas */
                    }
                    input[type="text"], input[type="email"], input[type="date"], select {
                        width: 100%; /* Ancho completo del campo */
                        padding: 12px; /* Espacio interno del campo */
                        margin: 8px 0; /* Espacio vertical entre campos */
                        border: 1px solid #28a745; /* Borde verde para los campos */
                        border-radius: 6px; /* Bordes redondeados */
                        transition: border 0.3s; /* Efecto suave al cambiar el borde */
                    }
                    input[type="text"]:focus, input[type="email"]:focus, input[type="date"]:focus, select:focus {
                        border-color: #218838; /* Color de borde al enfocar el campo */
                        outline: none; /* Elimina el contorno por defecto */
                    }
                    input[type="submit"] {
                        width: 100%; /* Ancho completo del botón */
                        padding: 12px; /* Espacio interno del botón */
                        background-color: #28a745; /* Color de fondo del botón */
                        color: white; /* Color del texto del botón */
                        border: none; /* Sin borde */
                        border-radius: 6px; /* Bordes redondeados */
                        font-size: 1em; /* Tamaño de fuente del botón */
                        cursor: pointer; /* Cambia el cursor al pasar por encima */
                        transition: background-color 0.3s; /* Efecto suave al cambiar el color de fondo */
                    }
                    input[type="submit"]:hover {
                        background-color: #218838; /* Color de fondo al pasar el mouse sobre el botón */
                    }
                </style>