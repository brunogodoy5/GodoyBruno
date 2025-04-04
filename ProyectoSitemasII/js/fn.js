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
    let result2
   
    if (tiene && tiene2) {
        result2 = `${persona.nombre} y ${persona2.nombre} tienen azul`;
    } else if (tiene) {
        result2= `${persona.nombre} tiene azul`;
    } else if (tiene2) {
        result2= `${persona2.nombre} tiene azul`;
    } else {
        result2= "Ninguno tiene azul";
    }
    return result2;
}

console.log(ejemplo(persona, persona2));
console.log(color(persona, persona2));






let palabra="Hola mundo";
console.log(palabra.length);
//cuenta letras.
console.log(palabra.toUpperCase());
//pasa a mayuscula.



console.log(colores.length)
//cantidad de valores del array.




colores.push("Amarillo")
//agrega valor al final.
colores.unshift("Verde")
//agrega valor al inicio.
console.log(colores)


let caja = {
        nombre:"1",
        color:"Marron",
        altura:1.67,
        peso:70,
        cantidad:[10,22,56,34,21]

}
let caja2 = {
    nombre:"2",
    color:"Blanco",
    altura:1.59,
    peso:83,
    cantidad:[455,223,52,31,29]

}


function mostrar(caja,caja2) {
    
    const resultado = caja.cantidad.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    const resultado2 = caja2.cantidad.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    let escrito

    if (resultado>resultado2) {
         
        escrito= 'La caja nº ' + caja.nombre + ' de color ' + caja.color + ' tiene mayor cantidad';
        
    }else{
        escrito= 'La caja nº ' + caja2.nombre + ' de color ' + caja2.color + ' tiene mayor cantidad';
    }
    return escrito;
    
}
 
console.log(mostrar(caja,caja2))




