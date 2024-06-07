function searchUser(){
    let local = document.getElementById("local").checked;
    let internet = document.getElementById("internet").checked;




    document.getElementById("mujeres").innerHTML = "";
    document.getElementById("hombres").innerHTML = "";
    document.getElementById("contador").innerText = "";
    document.getElementById("contador2").innerText = "";
    document.getElementById("contador3").innerText = "";
    document.getElementById("mayorEdad").innerText = "";








    if (!local && !internet){
        alert(`Debe seleccionar una opcion`);
        return false
    }




    let url;




    if(local){
        url = `personas.json`
    }
    else{
        url = `https://randomuser.me/api/?results=10`
        internet=true;
    }




    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data["results"]);




        let array = [];
        let array2 = [];
        let mujeres = 0;
        let varones = 0;
        let mayorEdadPersona = null;






        data["results"].forEach(user => {
            if (user.gender === "female") {
                array.push(user.name.first + " " + user.name.last + ", su edad es: " + user.dob.age + " años");
                mujeres += 1;




            }
            else {
                array2.push(user.name.first + " " + user.name.last + ", su edad es: " + user.dob.age + " años");
                varones += 1;  
            }
            // Encontrar la persona de mayor edad
            if (mayorEdadPersona === null || user.dob.age > mayorEdadPersona.dob.age) {
            mayorEdadPersona = user;
            }
        });


       


        // Obtiene los contenedores para las mujeres y los hombres
        const mujeresDiv = document.getElementById("mujeres");
        const hombresDiv = document.getElementById("hombres");




       
        for (let i = 0; i < array.length; i++) {
            const nombre = array[i];




            let p = document.createElement("p"); // Crea un elemento de párrafo
            p.textContent = nombre; // Establece el texto del párrafo
            p.style.color = "#FF0000";
            mujeresDiv.appendChild(p); // Añade el párrafo al contenedor de mujeres




           
            let contadorMujeres = document.getElementById("contador");
            contadorMujeres.innerText = `Cantidad de mujeres: ` + mujeres;
        }




       
        for (let i = 0; i < array2.length; i++) {
            const nombre = array2[i];




            let p = document.createElement("p"); // Crea un elemento de párrafo
            p.textContent = nombre; // Establece el texto del párrafo
            p.style.color = "#0000FF";
            hombresDiv.appendChild(p); // Añade el párrafo al contenedor de hombres




           
            let contadorVarones = document.getElementById("contador2");
            contadorVarones.innerText = `Cantidad de hombres: ` + varones;
        }




        let personas = varones + mujeres;
        let contadorPersonas = document.getElementById("contador3");
        contadorPersonas.innerText = `Cantidad de personas: ` + personas;


        if (mayorEdadPersona !== null) {
            const mayorEdadDiv = document.getElementById("mayorEdad");
            let p = document.createElement("p");
            p.textContent = `La persona de mayor edad es ${mayorEdadPersona.name.first} ${mayorEdadPersona.name.last} con ${mayorEdadPersona.dob.age} años.`;
            mayorEdadDiv.appendChild(p);
   
        // Mostrar la imagen solo si la fuente de datos es de Internet
        if (internet) {
            let img = document.createElement("img");
            img.src = mayorEdadPersona.picture.large;  // Asumiendo que la URL de la imagen está en picture.large
            img.alt = `Foto de ${mayorEdadPersona.name.first} ${mayorEdadPersona.name.last}`;
            mayorEdadDiv.appendChild(img);
        }
    }
});
}