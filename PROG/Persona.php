<?php


    class Persona{
      public $nombre;//atributos
      public $apellido;
      public $dni;
    

    public function saludar(){//metodos

    }

    public function __construct($nombre,$apellido,$dni){
      $this->nombre=$nombre;
      $this->apellido=$apellido;
      $this->dni=$dni;

    }}