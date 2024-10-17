<!-- Formulario HTML:

Crea un formulario con campos de entrada para:
Matrícula del vehículo
Marca del vehículo
Modelo del vehículo
Nombre del cliente
Tipo de servicio (puede ser un select con opciones como 
"Cambio de aceite", "Revisión general", "Reparación de motor", etc.)
Al hacer clic en el botón "Registrar", 
el formulario debe redirigir a un archivo PHP (por ejemplo, gestion_taller.php). -->



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="gestion_taller.php" method="post">
            <input type="text" id="matricula" name="matricula" placeholder="Matricula">
            <input type="text" id="marca" name="marca" placeholder="Marca del vehiculo">
            <input type="text" id="modelo" name="modelo" placeholder="Modelo de vehiculo">
            <input type="text" id="cliente" name="cliente" placeholder="Nombre del cliente">
            <select name="servicio" id="servicio">
                <option value="revision">Revision general</option>
                <option value="reparacion">Reparacion de motor</option>
                <option value="cambio">Cambio de aceite</option>
            </select>
            <input type="submit" value="Enviar">
    </form>
</body>
</html>