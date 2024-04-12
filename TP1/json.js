

const personaje = {
    "id": 140,
    "name": "Genital Washer",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Post-Apocalyptic Earth",
        "url": "https://rickandmortyapi.com/api/location/8"
    },
    "location": {
        "name": "Post-Apocalyptic Earth",
        "url": "https://rickandmortyapi.com/api/location/8"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/140.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/23"
    ],
    "url": "https://rickandmortyapi.com/api/character/140",
    "created": "2017-12-27T18:47:44.566Z"
}
//document.getElementById("result").innerHTML=("El personaje " + personaje.name + " esta " + personaje.status);


    /*forma para buscar usando la api chacarcter

function buscarPersonaje(){
  let codigoInput = document.getElementById("codigo").value;
  document.getElementById("result").innerHTML=" ";
  fetch("https://rickandmortyapi.com/api/character/" + codigoInput)
  .then(Response => Response.json())
  .then(data =>{
  
      if (data.name != null){
          document.getElementById("result").innerHTML=("El personaje " + data.name + " esta " + data.status)
  
      }
          else {
          
              document.getElementById("result").innerHTML=("El personaje no existe")   
          }
  
      console.log(data)   
  } )
  }

*/

/* function buscarImagen(){
    let codigoInput = document.getElementById("codigo").value;
    
    document.getElementById("result").innerHTML=" ";
    fetch(`https://rickandmortyapi.com/api/character/${codigoInput}`)
    .then(Response => Response.json())
    .then(data =>{
    let imagen= document.getElementById("imagen").src;
    imagen.src=data.image;
     let gender=data.gender;
    
        if (gender === "unknown"){
            document.getElementById("result").innerHTML=`<img src="${data.image}">
                                                         <p>${data.name}<p>
                                                         <p>${data.gender}<p>`
    
        }
            else {
            
                document.getElementById("result").innerHTML=("El personaje no es del genero que buscas")   
            }
    
        console.log(data)   
    } )
    }
*/


function comparar(){
    let codigoInput = document.getElementById("codigo").value;
    let codigoInput2= document.getElementById("codigo2").value;
    
    fetch(`https://rickandmortyapi.com/api/character/${codigoInput},${codigoInput2}`)
    .then(Response => Response.json())
    .then(data =>{ 

    let foto= document.getElementById("foto");
    let foto2= document.getElementById("foto2");
    
    foto.src = data[0].image;
    foto2.src = data[1].image;
        
    if (data[0].gender === data[1].gender) {
        
        document.getElementById("funcion").innerHTML=("Son del mismo genero")
    } else
        {
            document.getElementById("funcion").innerHTML=("Su genero es distinto")
        }




    })}

















//  console.log(personaje)
//  console.log(personaje.name)
//  console.log(personaje.origin.url)

/*const jugador ={ 
    "nombre" : "nahuel",
    "apellido" : "barrios",
    "apodo":"perrito",
    "edad" : 28,
    "clubes":["san lorenzo","ucatolica"],
    "activo" : true,
    "sueldo": 1000000.99
}*/

// console.log(jugador.clubes[0])