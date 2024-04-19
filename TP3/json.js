function searchUser(){
       
    fetch(`https://randomuser.me/api/`)
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
    
      
            let longitud = data.results[0].location.coordinates.longitude
            let latitud = data.results[0].location.coordinates.latitude
        
            let imagen = document.getElementById("img");
            imagen.src = data.results[0].picture.large;

            let nombre = data.results[0].name.first;
            let apellido = data.results[0].name.last;
           
            let map = L.map("map").setView([longitud, latitud], 10);
            let marker = L.marker([longitud, latitud]).addTo(map);
           
           
            container = L.DomUtil.get('map');
            if (container != null) { 
                container._leaflet_id=null;
        }
         

            document.getElementById("nombre").innerHTML=`${nombre + " " + apellido}`
                                                      
      
            L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
                maxZoom: 90,
                attribution: `&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>`
             }).addTo(map);
             
             
             creatmap();
    })    
}
        
