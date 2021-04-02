let canvas; 

function init() {
  canvas = new fabric.Canvas('can', {
    isDrawingMode: true
  });
  let brush =  canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
  brush.width = 20;
  w = canvas.width;
  h = canvas.height;
}

function erase() {
  let m = confirm("Want to clear");
  canvas.isDrawingMode = true;
  if (m) {
    ctx.clearRect(0, 0, w, h);
    document.getElementById("canvasimg").style.display = "none";
  }
}

function save() {
  canvas.isDrawingMode = false;
  let dataURL = canvas.toSVG();
  document.getElementById("canvasimg").innerHTML = dataURL;
}

