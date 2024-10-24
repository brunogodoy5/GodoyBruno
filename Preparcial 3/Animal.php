<?php
class Animal{
    public $id;
    public $nombre;
    public $edad;
    public $raza;
    public $peso;

    public function __construct($id, $nombre, $edad, $raza, $peso){
        $this->id = $id;
        $this->nombre = $nombre;
        $this->edad = $edad;
        $this->raza = $raza;
        $this->peso = $peso;

    }
    
}
?>