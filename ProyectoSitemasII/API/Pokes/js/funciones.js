let NombreUno, NombreDos
let ImagenUno, ImagenDos
let NombreTres
let ImagenTres
let AtaqueUno = 0
let AtaqueDos = 0
let AtaqueTres = 0
let DefensaUno = 0
let DefensaDos = 0
let DefensaTres = 0
let Velocidad = 0 
let PokemonUno
let PokemonDos
let datosUno= [];
let datosDos=[];
let ataque;
let defensa;
let ataque2;
let defensa2;

document.getElementById('IngresoPokemon').addEventListener('click', 

async function() {
     PokemonUno = document.getElementById('PokemonUno').value.toLowerCase();
     PokemonDos = document.getElementById('PokemonDos').value.toLowerCase();


    await PrimerPokemon(PokemonUno)
    await SegundoPokemon(PokemonDos)
    PokemonGanador(AtaqueUno, AtaqueDos, AtaqueTres)
})


async function PrimerPokemon(IdPokemonUno) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonUno}`)
    const data = await response.json()

    NombreUno = document.getElementById('TituloPokemonUno').innerHTML = (data.name)
    ImagenUno = document.getElementById('ImagenPokemonUno').src = data.sprites.front_default
    console.log(data)
    datosUno = data;

    for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') { 
            document.getElementById('listaPokemonUno').innerHTML = (' Daño: '+ data.stats[i].base_stat)
            AtaqueUno = data.stats[i].base_stat;
        }
        if (data.stats[i].stat.name === 'defense') { 
            document.getElementById('listaPokemonUnoDef').innerHTML = (' Defensa: '+ data.stats[i].base_stat)
           DefensaUno = data.stats[i].base_stat;
        }
    }
}

async function SegundoPokemon(IdPokemonDos) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonDos}`)
    const data = await response.json()

    NombreDos = document.getElementById('TituloPokemonDos').innerHTML = (data.name)
    ImagenDos = document.getElementById('ImagenPokemonDos').src = data.sprites.front_default
    datosDos = data;
    for (let i = 0; i < data.stats.length; i++) {
        if (data.stats[i].stat.name === 'attack') { 
            document.getElementById('listaPokemonDos').innerHTML = (' Daño: '+ data.stats[i].base_stat)
        
            AtaqueDos = data.stats[i].base_stat;
        }       
        if (data.stats[i].stat.name === 'defense') { 
            document.getElementById('listaPokemonDosDef').innerHTML = (' Defensa: '+ data.stats[i].base_stat)
           DefensaDos = data.stats[i].base_stat;
        } 
    }
}
document.getElementById('NuevoButt').addEventListener('click',

    async function ()  {
        let IdPokemonTres = document.getElementById('PokemonTres').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${IdPokemonTres}`);
        const data = await response.json();
        NombreTres = document.getElementById('TituloPokemonTres').innerHTML = data.name;
        ImagenTres = document.getElementById('ImagenPokemonTres').src = data.sprites.front_default;
        
        console.log(data);

        for (let i = 0; i < data.stats.length; i++) {
            if (data.stats[i].stat.name === 'attack') {
                document.getElementById('listaPokemonTres').innerHTML = 'Daño: ' + data.stats[i].base_stat;
                AtaqueTres = data.stats[i].base_stat;
            }
            if (data.stats[i].stat.name === 'defense') {
                document.getElementById('listaPokemonTresDef').innerHTML = 'Defensa: ' + data.stats[i].base_stat;
                DefensaTres = data.stats[i].base_stat;
            }
            if (data.stats[i].stat.name === 'speed') {
                document.getElementById('listaPokemonTresSpe').innerHTML = 'Speed: ' + data.stats[i].base_stat;
                Velocidad = data.stats[i].base_stat;
            }
        }
    })

async function PokemonGanador(AtakUno, AtakDos, AtakTres) {

    if (AtakUno > AtakDos && AtakUno > AtakTres ) {
        document.getElementById('TituloPokemonGanador').innerHTML = (NombreUno)
        document.getElementById('ImagenPokemonGanador').src = (ImagenUno)
        document.getElementById('listaPokemonGanador').innerHTML = (' Daño: '+ AtakUno)
        document.getElementById('listaPokemonGanadorDef').innerHTML = (' Defensa: '+ DefensaUno)
    } else if (AtakDos > AtakUno && AtakDos > AtakTres) {
        document.getElementById('TituloPokemonGanador').innerHTML = (NombreDos)
        document.getElementById('ImagenPokemonGanador').src = (ImagenDos)
        document.getElementById('listaPokemonGanador').innerHTML = (' Daño: '+ AtakDos)
        document.getElementById('listaPokemonGanadorDef').innerHTML = (' Defensa: '+ DefensaDos)
    }else if (AtakTres > AtakUno && AtakTres> AtakDos) {
        document.getElementById('TituloPokemonGanador').innerHTML = (NombreTres)
        document.getElementById('ImagenPokemonGanador').src = (ImagenTres)
        document.getElementById('listaPokemonGanador').innerHTML = (' Daño: '+ AtakTres)
        document.getElementById('listaPokemonGanadorDef').innerHTML = (' Defensa: '+ DefensaTres)
    } else {
        document.getElementById('TituloPokemonGanador').innerHTML = ('EMPATE')
        document.getElementById('listaPokemonGanador').innerHTML = ('Elige otro pokemon')
        //POKEMON PARA EMPATE: 300 y 299
    }
    pelea(datosUno,datosDos);
}





function pelea(datosUno,datosDos) {
    for (let i = 0; i < datosUno.stats.length; i++) {
        if (datosUno.stats[i].stat.name === 'attack') {
            ataque = data.stats[i].base_stat;
        }
        if (datosUno.stats[i].stat.name === 'defense') {
            defensa = data.stats[i].base_stat;
        }
        if (datosDos.stats[i].stat.name === 'attack') {
            ataque2 = data.stats[i].base_stat;
        }
        if (datosDos.stats[i].stat.name === 'defense') {
            defensa2 = data.stats[i].base_stat;
        }
        
    }
    console.log(ataque)

    
}



async function generar() {
    const equipo = [];
    for (let i = 0; i < 3; i++) {
        const randomId = Math.floor(Math.random() * 1015) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();
        equipo.push(data);
    }
    return equipo;
}

function calcular(equipo) {
    let ataque = 0;
    let defensa = 0;
    
    equipo.forEach(pokemon => {
        pokemon.stats.forEach(stat => {
            if (stat.stat.name === 'attack') {
                ataque += stat.base_stat;
            }
            if (stat.stat.name === 'defense') {
                defensa += stat.base_stat;
            }
        });
    });
    
    return { ataque, defensa };
}

async function pelea() {
    const equipoA = await generar();
    const equipoB = await generar();

    const statsA = calcular(equipoA);
    const statsB = calcular(equipoB);

    console.log('A:', equipoA.map(p => p.name));
    console.log('B:', equipoB.map(p => p.name));

    console.log('Ataque A:', statsA.ataque);
    console.log('Defensa A:', statsA.defensa);
    console.log('Ataque B:', statsB.ataque);
    console.log('Defensa B:', statsB.defensa);

    if (statsA.ataque > statsB.defensa) {
        console.log('Ataque A gana a Defensa B');
    } else if (statsA.ataque < statsB.defensa) {
        console.log('Defensa B gana a Ataque A');
    } else {
        console.log('Empate');
    }

    if (statsB.ataque > statsA.defensa) {
        console.log('Ataque B gana Defensa A');
    } else if (statsB.ataque < statsA.defensa) {
        console.log('Defensa A gana Ataque B');
    } else {
        console.log('Empate');
    }
}

pelea();


// pokemon 1 ataca defenda del otro 
// pokemon 2 ataca defensa del otro 
// dar resultado.
