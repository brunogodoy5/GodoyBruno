<!--  Clase Vehiculo:

Propiedades: matricula, marca, modelo, cliente
Método: getInformacion() que devuelve una cadena con la información del vehículo. -->

<?php

Class Vehiculo{

        public $matricula;
        public $marca;
        public $modelo;
        public $cliente;

        public function __construct($matricula,$marca,$modelo,$cliente){
            $this->matricula=$matricula;
            $this->marca=$marca;
            $this->modelo=$modelo;
            $this->cliente=$cliente;
        } 

    public function getInformacion(){

        echo "Vehiculo: $this->matricula, $this->marca, $this->modelo, $this->cliente";

    }
  }
?>