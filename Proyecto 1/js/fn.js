//2 objetos Personas:
//Con Nombre, Apellido, DNI, Edad, Colores.
//1) Comparar las edades y mostrar quien es el mayor.
//2) Crear un array a cada Objeto que contenga  4 colores.
//3) Y mostrar quien tiene el color "Azul".
//Si 1 sola persona lo tiene, mostrar nombre de la persona
//Si lo tienen las dos mostrar los dos nombres

let colores = ["rojo","azul","verde","naranja"];
let colores2 = ["rojo","verde","naranja","rosa"];

let persona = {


    apellido:"Godoy",
    nombre:"Bruno",
    edad:23,
    dni:43631803,
    colores

}
let persona2 = {

    apellido:"Martinez",
    nombre:"Juan",
    edad:27,
    dni:44566788,
    colores2

}

function ejemplo(persona,persona2) {
    let result;


    if (persona.edad>persona2.edad) {

         result=persona.nombre + ' ' + persona.apellido + ' es el mayor';
        
    } else {
        result=persona2.nombre + ' ' + persona2.apellido + ' es el mayor';
        
    }
    return result;
    
}
function color(persona,persona2) {
    let tiene = persona.colores.includes("azul");
    let tiene2 = persona2.colores2.includes("azul");

    if (tiene && tiene2) {
        return `${persona.nombre} y ${persona2.nombre} tienen azul`;
    } else if (tiene) {
        return `${persona.nombre} tiene azul`;
    } else if (tiene2) {
        return `${persona2.nombre} tiene azul`;
    } else {
        return "Ninguno tiene azul";
    }
}

console.log(ejemplo(persona, persona2));
console.log(color(persona, persona2));


