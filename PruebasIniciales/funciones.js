


let result = function getCopyRight(name, year, formater){  //Funcion anonima
    let copyright = formater(name, year);
    return copyright;
};

let palito = function(name, year){ // Tambien funcion anonima
    return name + " | " + year;
};

let guion = function(name, year){ // Aun mas funcion anonima 
    return name + " - " + year;
};


console.log(result("Alejandro", 22, guion));

console.log(palito("Alex", 23));

let amount = "8";

if (amount >= 7){
    console.log("yes");
}

window.BeforeUnloadEvent()

/*
(function(name, year){ // Funcion Autoinvocada
    console.log(name, year);
});
*/