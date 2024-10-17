<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="consulta.php" method="POST">
        <label for="">Ingrese el titulo o el autor del libro</label><br><br>
        <input type="text" name="libro" id="libro"><br><br>
        <input type="submit" value="Enviar"><br><br>
    </form>
    <?php
        if (isset($_GET["error"])) {
            echo $_GET["error"];
        }
    ?>
</body>

</html>