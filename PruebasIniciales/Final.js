document.querySelector(".button").addEventListener("click" ,function (event){
    
    // document.getElementsByClassName("telefono");
    if (document.getElementById("texto").value !== "") {
        let frase = document.getElementById("texto");
        alert("Hola " + frase.value);
        frase.value = "";
    
    } else {
        alert("Introduce texto para ser saludado hijo de re mil")
    }
    
});

document.getElementsByClassName("telefono").addEventListener("click" ,function (event){
    alert("El jose");
});