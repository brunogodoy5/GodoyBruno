let NombreUno, NombreDos
let ImagenUno, ImagenDos
let AtaqueUno = 0
let AtaqueDos = 0
let DefensaUno = 0
let DefensaDos= 0 
let nuevoBoton= document.querySelector('#nuevoBoton')


nuevoBoton.addEventListener('click', 


()=>{

    alert('ALERTA')
} 

)

document.getElementById('IngresoPokemon').addEventListener('click', 

async function() {
    let PokemonUno = document.getElementById('PokemonUno').value.toLowerCase();
    let PokemonDos = document.getElementById('PokemonDos').value.toLowerCase();
    alert("Alerta")
    console.log(PokemonUno)

    await PrimerPokemon(PokemonUno)
    await SegundoPokemon(PokemonDos)
    PokemonGanador(AtaqueUno, AtaqueDos)
})


async function PrimerPokemon(IdPokemonUno) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonUno}`)
    const data = await response.json()
    console.log(data)
    NombreUno = document.getElementById('TituloPokemonUno').innerHTML = (data.name)
    ImagenUno = document.getElementById('ImagenPokemonUno').src = data.sprites.front_default
   

    for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') { 
            document.getElementById('listaPokemonUno').innerHTML = (' Daño: '+ data.stats[i].base_stat)
    
            AtaqueUno = data.stats[i].base_stat;
        }
        if (data.stats[i].stat.name === 'defense') { 
            document.getElementById('listaPokemonUno2').innerHTML = (' Defensa: '+ data.stats[i].base_stat)
           
            DefensaUno = data.stats[i].base_stat;
        }
    }
}

async function SegundoPokemon(IdPokemonDos) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonDos}`)
    const data = await response.json()

    NombreDos = document.getElementById('TituloPokemonDos').innerHTML = (data.name)
    ImagenDos = document.getElementById('ImagenPokemonDos').src = data.sprites.front_default
    if (ImagenDos == null) {
        ImagenDos = document.getElementById('ImagenPokemonDos').src = imagen.png
    }

    for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') { 
            document.getElementById('listaPokemonDos').innerHTML = (' Daño: '+ data.stats[i].base_stat)
        
            AtaqueDos = data.stats[i].base_stat;
        }
        if (data.stats[i].stat.name === 'defense') { 
            document.getElementById('listaPokemonDos2').innerHTML = (' Defensa: '+ data.stats[i].base_stat)
           
            DefensaDos = data.stats[i].base_stat;
        }
                
    }
}

async function PokemonGanador(AtakUno, AtakDos) {

    if (AtakUno > AtakDos) {
        document.getElementById('TituloPokemonGanador').innerHTML = (NombreUno)
        document.getElementById('ImagenPokemonGanador').src = (ImagenUno)
        document.getElementById('listaPokemonGanador').innerHTML = (' Daño: '+ AtakUno + 'Defensa: ' + DefensaUno )
    } else if (AtakDos > AtakUno) {
        document.getElementById('TituloPokemonGanador').innerHTML = (NombreDos)
        document.getElementById('ImagenPokemonGanador').src = (ImagenDos)
        document.getElementById('listaPokemonGanador').innerHTML = (' Daño: '+ AtakDos)
    } else {
        document.getElementById('TituloPokemonGanador').innerHTML = ('EMPATE')
        document.getElementById('listaPokemonGanador').innerHTML = ('Elige otro pokemon')
        //POKEMON PARA EMPATE: 300 y 299
    }
}