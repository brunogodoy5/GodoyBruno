let url;

async function consultarPersonaje() {
    
   const response = await fetch('https://rickandmortyapi.com/api/character/');

   const data = await response.json();

   console.log(data.results.length);


   for (let i = 0; i < data.results.length; i++) {

       console.log(data.results[i].name)
       
   };
};    

//consultarPersonaje();
//Mostrar nombres.
//Pedir mas de 20 pokemones y mostrar impar

function consultarPersonaje2() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    .then(response => response.json())
    .then(data =>{ 
    
        //console.log(data)
        //console.log(data.results[12].url)

        for (let i = 0; i < data.results.length; i++) {
           
           // console.log(data.results[i].name)
        
        if (i % 2 !== 0 ) { 
            //console.log(data.results[i].name)
            //console.log(i)
        }    
         }

         url = data.results[7].url
         console.log(data.results[5].url)
        }
        )



        console.log(url)
    };



    function mostrarPoder(url) {
        
         fetch(url)
         then(response => response.json())
         then(data =>{ 
     
         console.log(data)
         }
         )
        
        

}



//consultarPersonaje();
//consultarPersonaje2();
//mostrarPoder(url)




function getPersonaje() {

    fetch('https://rickandmortyapi.com/api/character/' + id_Pokemon.value)
    .then(response => response.json())
    .then(data =>{ 
        
            console.log(data)

        let pokemon = document.getElementById("id_Pokemon")
        let pokemon2 = document.getElementById("id_Pokemon2")

        let aux= document.getElementById("nombre_morty")
        aux.innerHTML=data.name;

        for (let i = 0; i < data.results.length; i++) {
           
            // console.log(data.results[i].name)
            // console.log(i)
            // console.log(pokemon)
         if (pokemon.value == i ) { 
                //console.log(i)
                console.log(data.results[i].name)
            
               

                if (pokemon2.value == i ) { 
                    //console.log(i)
                    console.log(data.results[i].name)
                    
                    
                }

            }

        }

       // alert(pokemon.value + "   " + pokemon2.value)
        
    }
    )


}