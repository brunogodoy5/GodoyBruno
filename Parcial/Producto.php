<?php


Class Producto{

    public $codigo;
    public $nombre;
    public $color; 
    public $tipo; 
    public $precio; 

    public function __construct($codigo,$nombre,$color,$tipo,$precio){
        $this->codigo=$codigo;
        $this->nombre=$nombre;
        $this->color=$color;
        $this->tipo=$tipo;
        $this->precio=$precio;
    }

}


?>