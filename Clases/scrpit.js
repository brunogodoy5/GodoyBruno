class Persona {

    constructor(nombre,apellido,fecha_nacimiento){

            this.nombre=nombre;
            this.apellido=apellido;
            this.fecha_nacimiento=fecha_nacimiento;
    }


    saludar(){

        console.log(`Hola,soy ${this.nombre}`)

    }

    getEdad(){
          let edad= 2024-this.fecha_nacimiento;

          return edad;
    }
    getedad1(){
        let anio= new Date();
        let edad1= anio.getFullYear()-this.fecha_nacimiento;
        return edad1;
    }
}

    let bruno=new Persona("bruno","godoy","2001");
    let edad=bruno.getEdad();
        console.log(bruno.getEdad());

