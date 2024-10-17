<?php

require_once "Reparacion.php";
require_once "GestionTaller.php";

if (isset($_POST["matricula"])) {
    $matricula=$_POST["matricula"];
}
if (isset($_POST["marca"])) {
    $marca=$_POST["marca"];
}
if (isset($_POST["modelo"])) {
    $modelo=$_POST["modelo"];
}
if (isset($_POST["cliente"])) {
    $cliente=$_POST["cliente"];
}
if (isset($_POST["servicio"])) {
    $tipoServicio=$_POST["servicio"];
}
$gestor = new GestionTaller();
$gestor->registrarReparacion($matricula,$marca,$modelo,$cliente,$tipoServicio);

foreach ($gestor->array as $reparacion) {
    $reparacion->getInformacion();
    $reparacion->getDetallesReparacion();

}

?>




