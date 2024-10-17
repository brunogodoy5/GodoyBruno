<?php
class Libro{

    public $titulo;
    public $autor;
    public $anio;
    public $genero;
    public $codigo;

    public function __construct($titulo, $autor, $anio, $genero, $codigo){

        $this->titulo = $titulo;
        $this->autor = $autor;
        $this->anio = $anio;
        $this->genero = $genero;
        $this->codigo = $codigo;

    }

    public function getInformacion(){
        echo "Titulo: {$this->titulo} <br>";
        echo "Autor: {$this->autor} <br>";
        echo "Año: {$this->anio} <br>";
        echo "Género: {$this->genero} <br>";
        echo "Código: {$this->codigo} <br>";
    }

}


class Consulta extends Libro{

    public static function buscarPorTitulo($titulo, $libros){
        foreach ($libros as $libro) {
            if ($libro->titulo === $titulo) {
                return $libro;
            }
        }
        return false;
    }

    public static function buscarPorAutor($autor, $libros){
        $resultados =[];
        foreach ($libros as $libro) {
            if ($libro->autor === $autor) {
                $resultados[] = $libro;
            }
        }
        if (!empty($resultados)) {
            return $resultados;
        }else{
            return false;
        }
       
    }
}

$libros = [
    new Libro("1984", "George Orwell", 1949, "Distopía", "001"),
    new Libro("Cien años de soledad", "Gabriel Garcia Marquez", 1967, "Realismo Mágico", "002"),
    new Libro("El Quijote", "Miguel de Cervantes", 1605, "Aventura", "003"),
    new Libro("El Quijote 2", "Miguel de Cervantes", 1605, "Aventura", "004")
];

if (isset($_POST["libro"])) {
    $buscarLibro = $_POST["libro"]; 
    $resultado = Consulta::buscarPorTitulo($buscarLibro, $libros);
    if ($resultado) {
        $resultado->getInformacion();
    }else{
        $resultado = Consulta::buscarPorAutor($buscarLibro, $libros);
        if ($resultado) {
            foreach ($resultado as $libro) {
                $libro->getInformacion();
                echo "<br>";
                
            }
        }else{

            echo "No es encuentra el libro o autor";
        }
    }
        
}


?>