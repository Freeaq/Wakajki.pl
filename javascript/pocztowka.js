const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
let drawing = false;
let lastX = 0;
let lastY = 0;
let color = '#000000';



function setCanvasSize() {
    canvas.width = window.innerWidth * 0.5;
    canvas.height = window.innerHeight * 0.5;
  }
  
  setCanvasSize();
  window.addEventListener('resize', setCanvasSize)

function getTouchPos(canvasDom, touchEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: touchEvent.touches[0].clientX - rect.left,
    y: touchEvent.touches[0].clientY - rect.top
  };
}

function startDrawing(e) {
  drawing = true;
  lastX = e.offsetX || e.touches[0].clientX - canvas.offsetLeft;
  lastY = e.offsetY || e.touches[0].clientY - canvas.offsetTop;
}

function draw(e) {
  if (!drawing) return;
  e.preventDefault(); 
  let mouseX = e.offsetX || e.touches[0].clientX - canvas.offsetLeft;
  let mouseY = e.offsetY || e.touches[0].clientY - canvas.offsetTop;

  context.strokeStyle = color;
  context.lineWidth = 5;
  context.lineCap = 'round';
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(mouseX, mouseY);
  context.stroke();
  lastX = mouseX;
  lastY = mouseY;
}

function stopDrawing() {
  drawing = false;
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

canvas.addEventListener('touchstart', (e) => {
  var touch = getTouchPos(canvas, e);
  var mouseEvent = new MouseEvent('mousedown', {
    clientX: touch.x,
    clientY: touch.y
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener('touchmove', (e) => {
  var touch = getTouchPos(canvas, e);
  var mouseEvent = new MouseEvent('mousemove', {
    clientX: touch.x,
    clientY: touch.y
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

canvas.addEventListener('touchend', (e) => {
  var mouseEvent = new MouseEvent('mouseup', {});
  canvas.dispatchEvent(mouseEvent);
}, false);

// Prevent scrolling when touching the canvas
document.body.addEventListener("touchstart", (e) => {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchend", (e) => {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchmove", (e) => {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);

function setCanvasWidth() {
  var width = window.innerWidth * 0.4;
  canvas.width = width;
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
  const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
  const link = document.createElement('a');
  link.download = 'plakat.png';
  link.href = image;
  link.click();
}

document.getElementById('color').addEventListener('input', (e) => {
  color = e.target.value;
});

setCanvasWidth();
window.addEventListener('resize', setCanvasWidth);