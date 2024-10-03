<?php
require_once "../conexion.php";

$database = new Database(); //inicializo la clase DataBase 

$alumnos = $database->ejecutarConsulta('SELECT alumnos.*, 
                                        materias.nombre AS nombre_materia 
                                        FROM `alumnos` 
                                        INNER JOIN 
                                        `materias` ON `alumnos`.`id_materia` = `materias`.`id`;');

$institutos = $database->ejecutarConsulta('SELECT institutos.* FROM `institutos`');

$materias = $database->ejecutarConsulta(
    'SELECT materias.* 
    FROM `materias`
    INNER JOIN 
    `institutos` ON `materias`.`id_instituto` = `institutos`.`id`; '
);

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Asistencias</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>

    <div class="row align-items-start">
        <div class="col-2">
            <select class="form-select form-select-sm" aria-label="Small select" id="institutoSelect" name="idInstitutoSelect">
                <option value="NULL" selected="">Institutos</option>
                <?php
                foreach ($institutos as $instituto) { ?>
                    <option value="<?php echo $instituto['id']; ?>"> <?php echo $instituto['nombre']; ?></option>
                <?php } ?>

            </select>
        </div>

        <div class="col-2">
           <div id="selectMateriasDiv"></div> 
        </div>
    </div>

    <script>
    document.addEventListener('DOMContentLoaded', function() { //Empiezo por un eventListener con DOMcontentLoaded para que todo lo que haga, sea ya con el DOM cargado
   
 // Obtener los datos de materias desde PHP
 let materias = <?php echo json_encode($materias); ?>; //Tal como dice en la linea anterior, meto el json de materias en una variable de java script

institutoSelect.addEventListener('change', function() {
    if (this.value !== "NULL") {
        selectMaterias(); // Llama a la función selectMaterias cuando el select cambia (el parametro change del EventListener cumple la misma función que el atributo "onchange")
    } else {
        selectMateriasDiv.innerHTML = ''; // Limpia el select de materias si "NULL" es seleccionado (es decir si vuelvo con el select a "institutos" me saca nuevamente el select de materias )
    }
});

function selectMaterias() {
    let idInstitutoSelect = institutoSelect.value; //le asigno la id del instituto seleccionado a la variable idInstitutoSelect
    // console.log(idInstitutoSelect); (logeaba id para testeo de que llegue bien)

    let options = '<select class="form-select form-select-sm" aria-label="Small select" id="materiaSelect">';
    options += '<option selected="">Materias</option>'; // ( el += es una abreviación par "sumarle" un nuevo mensaje a lo que ya tenía anteriormente)
    //lo uso para acortar el mensaje y dejarlo en dos lineas en este caso ,para que sea mas legible.

    // Filtrar las materias correspondientes al instituto seleccionado
    materias.forEach(function(materia) { //estructura de iteración para recorrer las materias
        if (materia.id_instituto == idInstitutoSelect) { //condición donde verifico que el id del instituto de cada materia, sea igual al id del instituto seleccionado
            options += `<option value="${materia.nombre}">${materia.nombre}</option>`; //nuevamente utilizo += esta vez para agregar opciones en caso de que cumpla la condición
        }
    });

    options += '</select>'; //al finalizar la iteración sea cual sea el resultado cierro el tag select.
    selectMateriasDiv.innerHTML = options; //options va a tener todo el codigo html, el cual lo redirijo a el div selectMateriasDiv con innerHTML
}
});


</script>

    <h3>Datos del Alumno</h3>
    <table >
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>DNI</th>
                <th>Fecha de Nacimiento</th>
                <th>Materia</th>
                <th>Promedio</th>
                <th>Asistencia</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($alumnos as $alumno) { ?>
                <tr>
                    <td><?php echo $alumno['nombre'] . " " . $alumno['apellido']; ?></td>
                    <td><?php echo $alumno['email']; ?></td>
                    <td><?php echo $alumno['dni']; ?></td>
                    <td><?php echo $alumno['fecha_nacimiento']; ?></td>
                    <td><?php echo $alumno['nombre_materia']; ?></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <a href="modificar.php?id=<?php echo $alumno['id']; ?>">   Modificar Alumno</a>
                        <form action="borrar.php" method="post" >
                        <input type="hidden" id="id" name="id" value="<?php echo $alumno['id']; ?>"> 
                        <input type="submit" value="Borrar alumno"></form>
                    </td>

                </tr>
            <?php } ?>
        </tbody>
    </table>
    <a class="new-student" href="alta_alumno.php">Nuevo Alumno</a>
</body>

</html>
















<style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 20px;
    }

    h3 {
        text-align: center;
        color: #333;
        margin-bottom: 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        background-color: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    th,
    td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #28a745;
        color: white;
    }

    tr:hover {
        background-color: #f1f1f1;
    }
    a, input[type="submit"] {
        display: inline-block; /* Para que se comporten como botones */
        width: 180px; /* Ancho fijo para ambos */
        padding: 4px 20px; /* Espaciado interno */
        color: #fff; /* Color del texto */
        background-color: #28a745; /* Color de fondo */
        border: none; /* Sin borde */
        border-radius: 5px; /* Bordes redondeados */
        text-decoration: none; /* Sin subrayado */
        font-size: 15px; /* Tamaño de fuente */
        margin: 3px 1px; /* Espacio mínimo entre los dos */
    }

    /* Estilo para el hover */
    a:hover, input[type="submit"]:hover {
        background-color: #218838; /* Color de fondo al pasar el mouse */
    }
        .new-student {
        display: block;
        text-align: center;
        margin-top: 20px;
        font-size: 1.1em;
    }

</style>