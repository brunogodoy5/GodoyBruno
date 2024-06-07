function mayoredad() {
fetch(`https://randomuser.me/api/?results=3`)
.then (response => response.json())
.then (data =>{

    console.log(data)

    let= array=[];
    let mayorEdad = null;

    data["results"].forEach(user => {
        array.push(user.dob.age);
        if (mayorEdad === null || mayorEdad ) {
            mayorEdad = user;       
        }
    });
    console.log(array)
        if (mayorEdad != null) { 
        const mostrarEdad = document.getElementById("mayorEdades")
        let p=document.createElement("p")
        p.textContent= `La persona de mayor edad es ${mayorEdad.name.first}`
        mostrarEdad.appendChild(p)            
        }
        console.log(mayorEdad.name.first," ",mayorEdad.dob.age)

})
}
function ricky() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;

    fetch(`https://rickandmortyapi.com/api/character/${num1},${num2},${num3}`)
    .then(response => response.json())
    .then(data =>{
        let array=[];
        console.log(data)

        data.forEach(nombre => {
            array.push(nombre.name)
            array.sort()
        });
        console.log(array)
        
        let ordenar=document.getElementById("ordenar");
        let p =document.createElement("p")
        p.textContent=`El personaje con el mayor nombre es: ${array[0]}`
        ordenar.appendChild(p)
})
}
