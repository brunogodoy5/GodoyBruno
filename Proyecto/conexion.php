<?php

class Database {
    private $host = 'localhost';
    private $db_name = 'asistencia';
    private $username = 'root';
    private $password = '';
    public $conn;

    public function connect() {
        $this->conn = null;
        
        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, 
                                  $this->username, 
                                  $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo "Error de conexión: " . $e->getMessage();
        }

        return $this->conn;
    }

    public function ejecutarConsulta($query){
        try{
        $this->connect();
        $stmt = $this -> conn -> prepare($query);
            $stmt -> execute(); 
            $datos = $stmt -> fetchAll();
            return $datos;
        }
        catch(PDOException $e){
            echo "Error de consulta: " . $e->getMessage();
        } 
    }
}
