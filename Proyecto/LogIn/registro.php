<?php 
require_once('../conexion.php');

$database=new database();

$institutos=$database->ejecutarConsulta("select * from institutos");

// var_dump($institutos); //mostrar datos de instituto

 
?>

<!DOCTYPE html>
<html>
<head>
    <title>Registro - Sistema de Asistencias</title>
    
</head>
<body>
    

    <form action="procesar_registro.php" method="POST">
    <h2>Registro de Usuario</h2>
        <label>Nombre:</label>
        <input type="text" name="nombre" required><br>

        <label>Apellido:</label>
        <input type="text" name="apellido" required><br>

        <label>Email:</label>
        <input type="email" name="email" required><br>

        <label>Contraseña:</label>
        <input type="password" name="contraseña" required><br>
        
        <label>DNI:</label>
        <input type="text" name="dni"><br>
        
        <label>Legajo:</label>
        <input type="number" name="legajo"><br>

        <label>Instituto</label>
        <select name="instituto" id="instituto">
            <?php
              foreach ($institutos as $instituto) {
                echo '<option value="' . $instituto['id'] . '">' . $instituto['nombre'] . '</option>';
            }
            ?>
        </select>
        <button type="submit">Registrarse</button>
    </form>
    </body>
    
</html>






























<style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        h2 {
            text-align: center;
        }
        input[type="text"], input[type="email"], input[type="password"], input[type="number"], select {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #218838;
        }
        .toggle {
            text-align: center;
            margin-top: 10px;
        }
    </style>
