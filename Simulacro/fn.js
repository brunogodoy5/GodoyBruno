let i1=0;
let i2=0;
let $array = [];
let $array2 = [];

function search(){

    

    let $numero= document.getElementById("codigo1").value;
    
    console.log($array.includes($numero))

    if ($numero > 0  && $numero < 1000 && !$array.includes($numero) && !$array2.includes($numero)){ 

    i1 += 1  

    $array = $array.concat([$numero]);

    if (i1 === 3){

    document.getElementById("codigo1").disabled = true;
    document.getElementById("enviar1").disabled = true;

    }
    }

    else{

        alert("El numero ingresado no es valido. Ingrese uno nuevo");

        document.getElementById("codigo1") != null;

    }
    
    console.log($array)
}


function search2(){

    let $numero2= document.getElementById("codigo2").value;

    console.log($array2.includes($numero2))

    if ($numero2 > 0 && $numero2 < 1000 && !$array.includes($numero2) && !$array2.includes($numero2)){

    i2 += 1

    $array2 = $array2.concat([$numero2]);

    if (i2 === 3){

        document.getElementById("codigo2").disabled = true;
        document.getElementById("enviar2").disabled = true;
    }

    if( i1 === 3 && i2 === 3){
    buscarImagenes();
    }
}

else{

    alert("El numero ingresado no es valido. Ingrese uno nuevo")
    document.getElementById("codigo2") != null;

}
    console.log($array2)
}


function buscarImagenes(){

    let personajesID=$array.join(",")
    let personajesID2=$array2.join(",");

    fetch(`https://rickandmortyapi.com/api/character/${personajesID},${personajesID2}`)
    .then(Response => Response.json())
    .then(data =>{

        data.forEach((personaje, index) => {

            const img = document.createElement("img");
            img.src = personaje.image;

            img.classList.add(`imagen-${index + 1}`); 

            // Determinar a qué contenedor agregar la imagen según el orden de entrada
            if ($array.includes(personaje.id.toString())) {
                document.getElementById("imagenes1").appendChild(img);
            } else {
                document.getElementById("imagenes2").appendChild(img);
            }
            
        });

    })
}


    