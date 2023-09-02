const DEFAULT_COLOR = "#000";
const DEFAULT_SIZE = 16;
let currentColor = DEFAULT_COLOR;
const $canvas = document.querySelector(".canvas");
const $colorChange = document.querySelector("#color-change");
const $eraser = document.querySelector("#eraser");
generateCanvas(DEFAULT_SIZE);
const $canvasElement = document.querySelectorAll(".canvas-element");

$colorChange.addEventListener("input", setCurrentColor);
$eraser.addEventListener("click", setCurrentColorEraser);

function generateCanvas(lengt) {
  for (let i = 0; i < lengt ** 2; i++) {
    $canvas.innerHTML += `<div class="canvas-element"></div>`;
  }
}

function setCurrentColor(event) {
  currentColor = event.target.value;
}

function setCurrentColorEraser() {
  currentColor = "#fff";
}

$canvasElement.forEach((pixel) => {
  pixel.addEventListener("click", () => {
    pixel.style.backgroundColor = currentColor;
  });
});
