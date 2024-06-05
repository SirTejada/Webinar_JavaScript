
let numeroCuadrados = 1;

function generateNewRect() {
	const rect = document.querySelector('.rect');
    const area = document.querySelector('.area');
    let base = Math.random()*100;
    let altura = Math.random()*100;
    rect.style.width = base + "px";
    rect.style.height = altura + "px";
    getRectArea(base, altura);
    
}

function getRectArea(width, height) {
    let area = width * height;
    console.log(area)
    console.log(typeof area)
    document.querySelector(".area").textContent = area.toFixed(2);
    newRectangle(area,width, height );
}

function newRectangle(area, width, height) {
    document.querySelector(".historico").innerHTML += "Area del rectangulo " + numeroCuadrados + " con altura " + height.toFixed(2) + " y anchura " + width.toFixed(2) + ": " + area.toFixed(2) + " <br>";
    numeroCuadrados++;
}