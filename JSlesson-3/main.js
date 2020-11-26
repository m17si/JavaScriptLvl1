console.log('Задание №1');
function simpleNum(x) {
  var i = x, b = 0;

  while (i >= 1) {
    if (x % i !== 0) {
      i--;
    }
    else {
      b++;
      i--;
    }
  }

  if (b > 2) {
    return false;
  }
  else {
    return true;
  }
}

var y = 1, num = '';

while (y <= 100) {

  if (simpleNum(y) == true) {
    num += y + ' ';
    y++;
  }
  else {
    y++;
  }
}
console.log(num);

console.log('Задание № 2-3');
var basket = [
  {
    title: "Товар 1",
    price: 100,
    quantity: 1
  },
  {
    title: "Товар 2",
    price: 200,
    quantity: 4
  },
  {
    title: "Товар 3",
    price: 300,
    quantity: 2

  }
]

function countBasketPrice(x) {
  var result = 0;
  for (var item of x) {
    result += item.price * item.quantity;

  }
  return console.log(result);
}

countBasketPrice(basket);

console.log('Задание №4');
for (var i = 0; i < 10; console.log(i), i++) {

}

console.log('Задание №5');
var string = 'x';
for (var i = 1; i <= 20; i++) {
  console.log(string);
  string += 'x'
}