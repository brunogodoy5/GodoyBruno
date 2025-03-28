


let persona = {


    apellido:"Godoy",
    nombre:"Bruno",
    edad:23,
    dni:43631803

}
let persona2 = {

    apellido:"Martinez",
    nombre:"Juan",
    edad:27,
    dni:44566788

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

console.log(ejemplo(persona,persona2));