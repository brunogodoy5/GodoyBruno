<?php
require_once "Animal.php";
class Perro extends Animal{

    public $tamaño;
    public $vacunas = [];

    public function __construct($id, $nombre, $edad, $raza, $peso, $tamaño){
        parent::__construct($id, $nombre, $edad, $raza, $peso);
        $this->tamaño = $tamaño;
    }

    public function vacunar($vacuna){
        $this->vacunas[] = $vacuna;
    }
    
  public function mostrarVacunas(){
    if(empty($this->vacunas)){
        return "No tiene vacunas";
    }
    return implode(", ", $this->vacunas);
  }
    
}
?>