function f(e) {

  var p = e.target.src.replace('small', 'big');

  var b = document.getElementById("big");
  b.src = p;

}

function ImageError() {
  alert('ОЙ, А ЭТОЙ БОЛЬШОЙ КАРТИНКИ НЕТУ');
}