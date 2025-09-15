"use strict"
let boutons = document.getElementsByTagName("button");
let div = document.getElementById("div");
let p = document.getElementById("p1");
let info = document.getElementById("info");

boutons[1].onclick = function () {
    alert("Bouton 2 cliqué !")
}

boutons[2].onclick = click3;

function click3() {
    alert("Bouton 3 cliqué !")
}

p.addEventListener("click", () => {
    div.style.background = "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    p.style.color = "#2c3e50"
    p.style.fontWeight = "600"
})

p.addEventListener("dblclick", () => {
    div.style.background = "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"
    p.style.color = "#ecf0f1"
    p.style.fontWeight = "600"
})

p.addEventListener("mouseover", () => {
    p.style.fontWeight = "bold";
    p.style.transform = "scale(1.02)";
    div.style.transform = "scale(1.02)";
})

p.addEventListener("mouseout", () => {
    p.style.color = "#333";
    p.style.fontWeight = "400";
    p.style.transform = "scale(1)";
    div.style.transform = "scale(1)";
    div.style.background = "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)";
})

info.addEventListener("mouseout", (e)=>{
    info.textContent = `La souris est à la position X = ${e.offsetX} et Y = ${e.offsetY}`
})