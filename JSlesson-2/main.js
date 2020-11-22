console.log('Задание 3'); //Задание 3
var a = 13, b = -12;
if (a > 0 && b > 0) {
  console.log(a - b);
}
else if (a < 0 && b < 0) {
  console.log(a * b);
}
else { //(a > 0 && b < 0) || (a < 0 && b > 0)
  console.log(a + b);
}


console.log('Задание 4'); //Задание 4
a = +((Math.random() * 15).toFixed(0));
switch (a) {
  case 0:
    console.log(0);
  case 1:
    console.log(1);
  case 2:
    console.log(2);
  case 3:
    console.log(3);
  case 4:
    console.log(4);
  case 5:
    console.log(5);
  case 6:
    console.log(6);
  case 7:
    console.log(7);
  case 8:
    console.log(8);
  case 9:
    console.log(9);
  case 10:
    console.log(10);
  case 11:
    console.log(11);
  case 12:
    console.log(12);
  case 13:
    console.log(13);
  case 14:
    console.log(14);
  case 15:
    console.log(15);
}

console.log('Задание 5 и 6');//Задание 5 и 6
function sum(x, y) {
  return x + y;
}

function uba(x, y) {
  return x - y;
}

function umn(x, y) {
  return x * y;
}

function del(x, y) {
  return x / y;
}


function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case '+':
      return sum(arg1, arg2);
    case '-':
      return uba(arg1, arg2);
    case '*':
      return umn(arg1, arg2);
    case '/':
      return del(arg1, arg2);
  }
}
console.log(mathOperation(14, 19, '*'));


console.log('Задание на понимание рекурси: задание 8') //Возведение в степень
function power(val, pow) {
  if (pow == 1) {
    return val;
  }

  return val * power(val, --pow);
}

var val = 5, pow = 4;
console.log('Число ' + val + ' в степени ' + pow + ' = ' + power(val, pow));

//Факториал
function fact(mef) {
  if (mef == 1) {
    return mef;
  }

  return mef * fact(--mef);
}

var arg3 = 6;
console.log('Факториал ' + arg3 + " = " + fact(arg3));