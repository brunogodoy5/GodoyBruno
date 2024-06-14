let array=[];
let array2=[];
function pokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=3&offset=3')
    .then(response=>response.json())
    .then(data=>{
        console.log('1: ' , data.results)
        // console.log(data["results"])
        // data["results"].forEach(poke => {
        //     console.log(poke.name)
            
        // });
       for (let i = 0; i < data.results.length; i++) {
                element = data.results[i];
            // console.log('_2: ' , data.results.length)
            //console.log('2: ' , data.results[i].name)
            array.push(data.results[i].name)
            array2.push(data.results[i].url)
        }
        fetch(data.results[0].url)
        .then(response => response.json())
        .then(data=>{
            console.log(data.sprites.back_default)
            document.getElementById("mostrar").innerHTML=`<img src= "${data.sprites.back_default}"></img>`
        }) 
            //console.log('3: ',array)
            console.log('4: ',array2)
            let mostrar=document.getElementById("mostrar");
            let p=document.createElement("p");
            p.textContent=`${array}`
            mostrar.appendChild(p)
    })

}