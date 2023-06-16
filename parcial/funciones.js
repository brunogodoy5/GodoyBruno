function getBuscar() {
    const codprov=document.getElementById("cod-provincia").value
    const municipio=document.getElementById("idmun").value
    const contenedor=document.getElementById("contenedor")
    
   
   
    fetch("datosCensales.json")
    .then(function(response){
        return response.json()
    })
    .then(function(data){

        console.log(data)

        let localidades=data["localidades-censales"] 
        let total=data.cantidad
        console.log(data.cantidad)
        
            for (let i = 0; i < total; i++) {
                      
                if (codprov==localidades[i].provincia.id){
                    contenedor.innerText="Provincia: "+localidades[i].provincia.nombre
                                        + "  Latitud: "+localidades[i].centroide.lat
                                        + "   Longitud: "+localidades[i].centroide.lon
                if (municipio==localidades[i].municipio.id) {

                   contenedor.innerText="municipio: "+localidades[i].municipio.nombre
                                    
                            }    
                                
                }
                
                  
            }
        
    })
}
      

