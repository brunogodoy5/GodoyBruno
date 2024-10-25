<?php

require_once "Producto.php";

Class Comida extends Producto{

    public $peso;
  

    public function __construct($codigo,$nombre,$color,$tipo,$precio,$peso){
       parent::__construct($codigo,$nombre,$color,$tipo,$precio);

        $this->peso=$peso;
       
       
       
       

    }

}


?>



