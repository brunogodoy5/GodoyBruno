class Animal {

    nombre;
    raza;
    edad;

    getinfo(){};


    hacerruido(){
        return "Miau";
    };


    caminar(){};
    estadosalud(){};

}



    


let gato= new Animal();
    gato.nombre="coco";
    gato.raza="felino";
   

console.log(gato.hacerruido())
console.log(gato.nombre)


let gato1= new Animal();
    gato1.nombre="garfield";

    console.log(gato.nombre,gato1.nombre)







class Animal2{
    name;
    raza;
    constructor(name,raza){
    this.name=name;
    this.raza=raza;
    }
}    

let perro = new Animal2("coco","canino");



console.log(perro.name)
