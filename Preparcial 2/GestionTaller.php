<!-- Clase GestionTaller:

Utiliza el Trait CalculadoraCostos.
Métodos:
registrarReparacion($datos) que añade una nueva reparación al array de reparaciones.
buscarPorMatricula($matricula) que busca reparaciones por matrícula del vehículo.
buscarPorCliente($cliente) que busca reparaciones por nombre del cliente.
Mostrar Resultados:

En el archivo PHP (gestion_taller.php), después de procesar el registro o la consulta, 
muestra los resultados en formato HTML.  -->


<?php
    require_once "CalcularCostos.php";
 class GestionTaller{

    public $array=[];

    use CalcularCosto;

    public function registrarReparacion($matricula,$marca,$modelo,$cliente,$tipoServicio){
        $reparacion= new Reparacion($matricula,$marca,$modelo,$cliente,$tipoServicio);
        
        $reparacion->costo=$this->calcularcostotal(2,500);

        $this->array[]=$reparacion;

    }

    
    public function buscarPorMatricula(){
        
    }

    public function buscarPorCliente(){
        
    }




 }




?>