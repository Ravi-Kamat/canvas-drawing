const canvas = document.getElementById("canvas");
const incBtn = document.getElementById("increase");
const decbtn = document.getElementById("decrease");
const sizebtn = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");


const ctx = canvas.getContext("2d");


let size = 5
let isPressed = false
let color = "black"
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})


canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {

        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2
    }

})
function updateSizeOnScreen() {
    sizebtn.innerText = size
}

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, Math.PI * 2, true)
    ctx.fillStyle = color
    ctx.fill()
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

incBtn.addEventListener("click", () => {
    size += 2

    if (size > 30) {
        size = 30
    }
    updateSizeOnScreen()
})

decbtn.addEventListener("click", () => {
    size -= 2

    if (size < 2) {
        size = 2
    }
    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => {
    color = e.target.value
})


clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))