<?php
require_once "Persona.php";
$persona1=new Persona("Javier","Parra",23333333);
$persona2=new Persona("Pablo","Martinez",47723600);

echo "¿Hola como te va?, ".$persona1->nombre." ".$persona1->apellido;
echo $persona1->saludar();