
<?php


require_once 'Producto.php';
require_once 'Bebida.php';
require_once 'Comida.php';
require_once "index.php";
require_once "array.php";


foreach ($productos as $producto) {
        if ($producto['codigo'] === '001') {
    
        
            $comida = new Comida(
                $producto['codigo'],
                $producto['nombre'],
                $producto['color'],
                $producto['tipo'],
                $producto['precio_unitario'],
                $producto['peso'],
            );
            echo "Codigo: " . $producto['codigo'] .
                 ",  Nombre: " . $producto['nombre'] .
                 ",  Color: " . $producto['color'] .
                 ",  Tipo: " . $producto['tipo'] .
                 ",  Precio C/U: " . $producto['precio_unitario'] .
                 ",  Peso: " . $producto['peso'] . " <br><br>";
           ;
        } 
        if ($producto['codigo'] === '002') {
            
            $comida = new Bebida(
                $producto['codigo'],
                $producto['nombre'],
                $producto['color'],
                $producto['tipo'],
                $producto['precio_unitario'],
                $producto['litros'],
            );
            echo "Codigo: " . $producto['codigo'] .
                 ", Nombre: " . $producto['nombre'] .
                 ",  Color: " . $producto['color'] .
                 ",  Tipo: " . $producto['tipo'] .
                 ",  Precio C/U: " . $producto['precio_unitario'] .
                 ",  Litros: " . $producto['litros'] . " <br> <br>";
           ;
        } 
      
}

?>
