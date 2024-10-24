<?php
require_once 'Perro.php';
require_once 'Gato.php';
require_once "index.php";
require_once "array.php";


if (isset($_POST["id"])) {
    $id = (int)$_POST["id"];
    $animalEncontrado = buscarAnimalPorId($id, $animales);

    

    if ($animalEncontrado) {
        echo "Animal encontrado: " . $animalEncontrado['tipo'] . " - " . $animalEncontrado['nombre'] . "<br>";

        if ($animalEncontrado['tipo'] === 'perro') {
            $nuevoAnimal = new Perro(
                $animalEncontrado['id'],
                $animalEncontrado['nombre'],
                $animalEncontrado['edad'],
                $animalEncontrado['raza'],
                $animalEncontrado['peso'],
                $animalEncontrado['tamaño'],
            );
            echo "Nuevo objeto creado: Raza: " . $nuevoAnimal->raza . ", Peso: " . $nuevoAnimal->peso . " kg, Tamaño: " . $nuevoAnimal->tamaño .  "<br>";
            $nuevoAnimal->vacunar("Rabia");
            $nuevoAnimal->vacunar("Parvovirus");
            echo "Vacunas de " . $nuevoAnimal->nombre . ": " . $nuevoAnimal->mostrarVacunas() ;
        } elseif ($animalEncontrado['tipo'] === 'gato') {
            $nuevoAnimal = new Gato(
                $animalEncontrado['id'],
                $animalEncontrado['nombre'],
                $animalEncontrado['edad'],
                $animalEncontrado['raza'],
                $animalEncontrado['peso'],
                $animalEncontrado['pelajeLargo'],
                $animalEncontrado['comportamiento']
            );
            echo "Nuevo objeto creado: Raza: " . $nuevoAnimal->raza . ", Peso: " . $nuevoAnimal->peso . " kg, Pelaje: " . ($nuevoAnimal->pelajeLargo ? "Largo" : "Corto") . ", Comportamiento: " . $nuevoAnimal->mostrarComportamiento() . "<br>";
        }
    } else {
        echo "Animal no encontrado.";
    }
}

?>
