// class Persona{

//     nombre="";
//     apellido="";
//     dni="";
//     nacionalidad="";
//     fecha_nacimiento="";
// }

// class Cliente extends Persona {

//    numero_cuenta="";
// }
class Persona{
    constructor(nombre,apellido,dni,nacionalidad,fecha_nacimiento){
    this.nombre=nombre;
    this.apellido=apellido;
    this.dni=dni;
    this.nacionalidad=nacionalidad;
    this.fecha_nacimiento=fecha_nacimiento;}
    
    Saludar(){

        console.log(`Hola,soy,${this.nombre} ${this.apellido}`)

    }}


class Cliente extends Persona {
    constructor(nombre,apellido,dni,fecha_nacimiento,nacionalidad,numero_cuenta){
    super(nombre,apellido,dni,fecha_nacimiento,nacionalidad)
    this.numero_cuenta=numero_cuenta;
}}

let bruno = new Cliente("Bruno","Godoy","43.631.803","Argentino","13-09-2001","1");
// bruno.nombre="Bruno";
// bruno.apellido="Godoy";
// bruno.fecha_nacimiento="13-09-2001";
// bruno.dni="43.631.803";
// bruno.nacionalidad="Argentino";
// bruno.numero_cuenta="1";

console.log(bruno);
bruno.Saludar();