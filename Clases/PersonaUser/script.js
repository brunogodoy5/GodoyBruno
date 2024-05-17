class Persona{
    constructor(name,lastname,gender,city,email){
    this.name=name;
    this.lastname=lastname;
    this.gender=gender;
    this.city=city;
    this.email=email;
}
    saludar(){

        console.log(`Hola soy: ${this.name} ${this.lastname}`)
    }

    esmenor(){

        console.log(`Hola soy: ${this.name} y soy cliente`)
    }
    esmayor(){

        console.log(`Hola soy: ${this.name} y soy empleado`)
    }
    get
}

class Cliente extends Persona {
    constructor(name,lastname,gender,city,email,numero_cuenta){
    super(name,lastname,gender,city,email)
    this.numero_cuenta=numero_cuenta;
}}

class Empleado extends Persona {
    constructor(name,lastname,gender,city,email,legajo){
        super(name,lastname,gender,city,email)
        this.legajo=legajo;  
}}
//si es menor de 18 años es cliente y si es mayor es empleado.
function buscar(){
    fetch(`https://randomuser.me/api`)
    .then(response=>response.json())
    .then(data=>{
            console.log(data)

    let random =new Persona(data.results[0].name.first,data.results[0].name.last,data.results[0].gender,
                        data.results[0].location.city,data.results[0].email)

    console.log(random)
    random.saludar();
    
    if (data.results[0].dob.age<18) {
        let cliente =new Cliente (data.results[0].name.first,data.results[0].name.last,data.results[0].gender,
            data.results[0].location.city,data.results[0].email,"15")
            cliente.esmenor();
            
                   
    } else {
        let empleado =new Empleado(data.results[0].name.first,data.results[0].name.last,data.results[0].gender,
                        data.results[0].location.city,data.results[0].email,"100")
            empleado.esmayor();     
              
    }
    
}) 
}

