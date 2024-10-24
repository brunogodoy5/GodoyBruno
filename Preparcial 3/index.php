<?php
function buscarAnimalPorId($id, $animales) {
    foreach ($animales as $animal) {
        if ($animal['id'] === $id) {
            return $animal;
        }
    }
    return null;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="datos.php" method="POST">
        <input type="number" name="id" placeholder="Ingrese el ID del animal"> <br><br>
        <button type="submit">Buscar ID</button><br><br>
    </form>
</body>
</html>