let mayor=0;
let menor=Infinity;
let array=[];
let datos;
let datos2;
let random=[];
let rickmor=[];
let i;
let nombre;
let nombre2;
let linea="";

function getEdad() {
    fetch(`random.json`)
    .then (response=>response.json())
    .then (data =>{
    //console.log(data["results"])
    i=0;

    data["results"].forEach(user=> {
        if (user.dob.age>mayor) {
            mayor=user.dob.age;
            datos=user;

          
        }
        if (user.dob.age<menor) {
            menor=user.dob.age
            datos2=user
        }
        if (i<=4) {
            random.push(user);
            i+=1;

        }
    });
    console.log(random)
    //console.log(mayor)
    //console.log(datos)
    //console.log(datos2)
    
    const mayorEdad = document.getElementById("mayorEdades");
    let p = document.createElement("p")
    p.textContent = `La persona de mayor edad es ${datos.name.first} ${datos.name.last} `
    mayorEdad.appendChild(p);


    const menorEdad = document.getElementById("menorEdades");
    let p1 = document.createElement("p")
    p1.textContent = `La persona de menor edad es ${datos2.name.first} ${datos2.name.last} `
    menorEdad.appendChild(p1);

    })
    fetch(`ricky.json`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data.results[0].name)
         i=0
        data["results"].forEach(user => {
            if (i<=4) {
                rickmor.push(user);
                i+=1;
    
            }
        });
        console.log(rickmor)
        
        
        //     i = 0;
        // let j = 0; 
        // for (let index = 1; index <= 10; index++) {
        //     if (index % 2 == 0) {
        //         const nombre = document.getElementById("intercalado");
        //         let p = document.createElement("p")
        //         p.textContent = `Random ${i} es ${random[i].name.first} ${random[i].name.last} `
        //         nombre.appendChild(p);
        //         i++;
        //     }else{
        //         const nombre2 = document.getElementById("intercalado");
        //         let p = document.createElement("p")
        //         p.textContent = `Ricky ${j} es ${rickmor[j].name} `
        //         nombre2.appendChild(p);
        //         j++;
        //     }
        // }


        // for (let i = 0; i < random.length; i++) {

        //     const nombre = document.getElementById("intercalado");
        //     let p = document.createElement("p")
        //     p.textContent = `Random ${i} es ${random[i].name.first} ${random[i].name.last}`
        //     nombre.appendChild(p);

        //     let p2 = document.createElement("p")
        //     const nombre2 = document.getElementById("intercalado");
        //     p2.textContent = `Ricky ${i} es ${rickmor[i].name}`
        //     nombre2.appendChild(p2);
        // }

        })                              


        for (let i = 0; i < random.length ; i++) {
            linea += `${random[i].name.first} ${random[i].name.last}, `
            linea += `${rickmor[i].name}, `
            
        }
        document.getElementById("intercalado").innerText=linea


    

  }






