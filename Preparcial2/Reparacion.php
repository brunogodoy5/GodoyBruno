<!-- Clase Reparacion:

Hereda de la clase Vehiculo.
Propiedades adicionales: tipoServicio, fecha, costo
Método: getDetallesReparacion() que devuelve una cadena con los detalles de la reparación. -->

<?php
require_once "Vehiculo.php";
Class Reparacion extends Vehiculo{
        public $tipoServicio;
        public $fecha;
        public $costo;


public function __construct($matricula,$marca,$modelo,$cliente,$tipoServicio){
    parent::__construct($matricula,$marca,$modelo,$cliente);
        $this->tipoServicio=$tipoServicio;
        $this->fecha=date("d-m-Y");
        $this->costo=500;
  }

public function getDetallesReparacion(){

    echo "Reparacion:$this->tipoServicio;$this->fecha;$this->costo";

  }
 }
?>