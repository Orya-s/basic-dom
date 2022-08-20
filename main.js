
const playingField = document.getElementById("playing-field")
// console.log(playingField)

const down = document.getElementById("down")
// console.log(down)
// console.log(down.innerHTML)


// set h1
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

header.setAttribute("class", "my-header") // adds a class to the h1 element called "my-header"

// set h2
const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: Orya"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)



// game functions

const ball = document.getElementById("ball")
// ball.style.backgroundColor = "yellow"


const moveRight = function() {
    let move = parseInt("25px")
    let dist = parseInt(document.getElementById("ball").style.left) || 0
    dist += move
    document.getElementById("ball").style.left = (dist + "px")
}

const moveLeft = function() {
    let move = parseInt("25px")
    let dist = parseInt(document.getElementById("ball").style.left) || 0
    dist -= move
    document.getElementById("ball").style.left = (dist + "px")
}

const moveUp = function() {
    let move = parseInt("25px")
    let dist = parseInt(document.getElementById("ball").style.top) || 0
    dist -= move
    document.getElementById("ball").style.top = (dist + "px")
}

const moveDown = function() {
    let move = parseInt("25px")
    let dist = parseInt(document.getElementById("ball").style.top) || 0
    dist += move
    document.getElementById("ball").style.top = (dist + "px")
}




