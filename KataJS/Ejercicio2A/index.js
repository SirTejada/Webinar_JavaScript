
let numeros = [];

function Ordenar() {
    let input = document.getElementById("lista").value;
    
    let numero = "";


    for (let i = 0; i <= input.length; i++) {
        if (!isNaN(Number(input[i])) && input[i] != " ") { // Si es un numero entra
            numero += input[i];
        }
        else {
            if (!numero == " " && !numero == ""){
                numeros.push(Number(numero));
                numero = "";
            }
        }
    }
    document.getElementById("original").innerHTML = numeros;
    numeros.sort();
    document.getElementById("ordenado").innerHTML = numeros;
}

function setNumeros() {
    document.getElementById("lista").value += "23, 45, 12, 33, 98, 40";
}

function Buscar() {
    let numeroBuscado = document.getElementById("numeroBusqueda").value;

    if(numeros.length == 0) {
        document.getElementById("posicion").innerHTML = "Primero tienes que generar una lista de numeros";
    }else{
        for(let i = 0; i < numeros.length; i++){
            if (numeroBuscado == numeros[i]){
                document.getElementById("posicion").innerHTML = "El numero " + numeroBuscado + " esta en la posicion: " + (i + 1);
                break;
            }
        }
    }



}