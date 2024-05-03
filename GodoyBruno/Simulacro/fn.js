
let array =[];
function vector() {
     
        let valor1 = document.getElementById("valor1").value;
        let boton1 = document.getElementById("boton1");
        var total1= array.push(valor1);
                
            if (total1 = 3) {
                boton1.disabled = true;
               

            }
            console.log(array.length)
}
function vector1() {
        let valor2 = document.getElementById("valor2").value;
        let boton2 = document.getElementById("boton2");
        var total2= array.push(valor2);
                
            if (total2 === 6) {
                boton2.disabled = true;
            }
            console.log(array.length)
    


}