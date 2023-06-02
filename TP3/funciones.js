function getConsulta(){
    let genderr
    fetch('https://randomuser.me/api/')
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        let info
        info=data.results[0]
        
        let nombre=document.getElementById("nombre")
        nombre.innerText="Nombre: "+info.name.first

        let apellido=document.getElementById("apellido")
        apellido.innerText="Apellido: "+info.name.last

        let sexo=document.getElementById("sexo")
        sexo.innerText="Genero: "+info.gender
        genderr=info.gender // Para comparar con el genero del personaje de rick
        let nacimiento=document.getElementById("nacimiento")
        nacimiento.innerText="Nacimiento: "+info.registered.date // .slice(0,10) para sacar hora de nacimiento

        let localidad=document.getElementById("localidad")
        localidad.innerText="Localidad: "+info.location.city+", "+info.location.country

        let coordenadas=document.getElementById("coordenadas")
        coordenadas.innerText= "Latitud: "+info.location.coordinates.latitude+
                                " Longitud: "+info.location.coordinates.longitude
        let imagen=document.getElementById("imagen")
        imagen.src=info.picture.large

        getCharacter(genderr)
    })
}

function getCharacter(genderr) {
    var personaje
    
    fetch("https://rickandmortyapi.com/api/character/") // PARA SABER LA CANTIDAD DE PERSONAJES
    .then(function(response) {
      return response.json();
    })
    .then(function(dataa) {
      let cantpers = dataa.info.count; // Cantidad total de personajes
      personaje=Math.floor(Math.random() * cantpers) + 1
      
        fetch("https://rickandmortyapi.com/api/character/"+personaje)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let imagen2= document.getElementById("imagen2")
            imagen2.src= data.image

            let nombre2 = document.getElementById("nombre2");
            nombre2.innerText="Nombre: "+data.name

            let sexo2= document.getElementById("sexo2")
            sexo2.innerText="Genero: "+data.gender

            let status2= document.getElementById("status2")
            status2.innerText="Status: "+data.status2
            
            let especie2= document.getElementById("especie2")
            especie2.innerText="Especie: "+data.species

            let localidad2= document.getElementById("localidad2")
            localidad2.innerText="Localidad: "+data.location.name

            if (genderr==data.gender.toLowerCase()) {
            let genero=document.getElementById("genero")
            genero.src="https://img.freepik.com/vector-premium/logotipo-simbolo-icono-marca-verificacion-verde-circulo-ilustracion-vector-color-verde-simbolo-garrapata_685751-503.jpg?w=2000"
            }
            else {
                genero.src="https://static.vecteezy.com/system/resources/previews/009/342/191/original/tick-and-cross-clipart-design-illustration-free-png.png"
            }
        })
    })
}
