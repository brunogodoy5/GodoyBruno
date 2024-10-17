<!-- Trait CalculadoraCostos:

Método: calcularCostoTotal($horasTrabajo, $costoMateriales) que calcula el costo total de una reparación. -->


<?php
    trait CalcularCosto{

        public function calcularcostotal($horasTrabajo,$costoMateriales){
                
                    $valorHora=100;
                    $total=($valorHora*$horasTrabajo)+$costoMateriales;

                    return $total;


        }
    }
?>