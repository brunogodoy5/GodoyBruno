<?php

 require_once "Producto.php";


Class Bebida extends Producto{

    public $litro;
  

    public function __construct($codigo,$nombre,$color,$tipo,$precio,$litro){
       parent::__construct($codigo,$nombre,$color,$tipo,$precio);

        $this->litro=$litro;
       
       
       
       

    }

}


?>