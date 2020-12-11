var pathArr = ["img\\red.jpg", "img\\blue.jpg", "img\\yellow.jpg"];
var startId = 0;
var img = document.getElementById('slider');

function next() {

  (startId == 2) ? startId = 0 : startId++;
  img.src = pathArr[startId];
}

function early() {

  (startId == 0) ? startId = 2 : startId--;
  img.src = pathArr[startId];
}