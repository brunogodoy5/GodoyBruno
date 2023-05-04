function getCharacter(){
    var aux=(document.getElementById("numero"))
    fetch("https://rickandmortyapi.com/api/character/"+aux.value)
    .then(function (response) {
        return response.json()
    })
    .then (function(data){
        
        let nombre=document.getElementById("nombre")
        nombre.innerText="Nombre: "+data.name

        let status=document.getElementById("status")
        status.innerText="Status: "+data.status

        let especie=document.getElementById("especie")
        especie.innerText="Especie: "+data.species

        let location=document.getElementById("location")
        location.innerText="Localidad: "+data.location.name

        let imagen=document.getElementById("imagen")
        imagen.src=data.image


    })
    
}
