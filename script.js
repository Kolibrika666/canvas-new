const colors = []; // массив цветов
colors[0] = document.getElementById("red");
colors[1] = document.getElementById("yellow");
colors[2] = document.getElementById("green");
colors[3] = document.getElementById("cyan");
colors[4] = document.getElementById("blue");
colors[5] = document.getElementById("magenta");

//console.log(colors)

const list = document.getElementById("list");
let targetColor = '#000';
let lineSize = 5;

const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");


function getColor(event) {

    if (event.target.tagName == "LI") { // если нажимаем на элемент списка-цвет
        targetColor = getTargetColor(event.target.id) // выбираем цвет для рисования
        console.log(targetColor)
        for (i of colors) { //перебираем каждый элемент списка цветов
            i.style.height = "50px";
            i.style.width = "50px";
        }
        event.target.style.height = '60px';
        event.target.style.width = '60px';
    }

}

function getTargetColor(id) {
    if (id == "red") {
        return "#f00"
    } else if (id == "yellow") {
        return "#ff0"
    } else if (id == "green") {
        return "#0f0"
    } else if (id == "cyan") {
        return "#0ff"
    } else if (id == "blue") {
        return "#00f"
    } else if (id == "magenta")
        return "#f0f"
}

function drow(event) {
    if (event.which == 1) {
        canvasContext.fillStyle = targetColor;
        canvasContext.beginPath();
        canvasContext.arc(event.offsetX, event.offsetY, lineSize, 0, Math.PI * 2);
        canvasContext.fill();
    }
}

list.addEventListener("click", getColor);
canvas.addEventListener("mousemove", drow);
