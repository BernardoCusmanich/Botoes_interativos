var btazul = document.getElementById("azul");
var btcinza = document.getElementById("cinza");
var btverde = document.getElementById("verde");
var btvermelho = document.getElementById("vermelho");
var texto = document.getElementById("texto");

btazul.addEventListener("mouseover", azul)
btcinza.addEventListener("mouseover", cinza)
btverde.addEventListener("mouseover", verde)
btvermelho.addEventListener("mouseover", vermelho)
body.addEventListener("mouseout", preto)

function preto() {
    texto.style.color = "black";
    body.style.backgroundColor = "white";
}

function azul() {
    texto.style.color = "blue";
    body.style.backgroundColor = "yellow";
}

function cinza() {
    texto.style.color = "gray";
    body.style.backgroundColor = "green";
}

function verde() {
    texto.style.color = "green";
    body.style.backgroundColor = "gray";
}

function vermelho() {
    texto.style.color = "red";
    body.style.backgroundColor = "green";
}
