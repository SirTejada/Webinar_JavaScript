
let map = new Map();

document.getElementById("subirPelicula").addEventListener("click", function (event) {
    alert("Hola");
    let nombre = document.getElementById("nombrePelicula").value;
    let anoPelicula = document.getElementById("anoPelicula").value;
    let generoPelicula = document.getElementById("generoPelicula").value;
    nuevaPelicula(nombre, anoPelicula, generoPelicula);
});




function nuevaPelicula(nombre, fecha, genero) {
    let pelicula = {
        nombre: nombre,
        fecha: fecha,
        genero: genero
      };
    map.set(map.size, pelicula);
    alert("Nueva Pelicula: " + nombre + fecha + genero);
}

