alert('Начать?');

var base = prompt('Основа экспоненты');
var decBase = base - Math.floor(base);

if ((base < 0) || (decBase != 0)) {
  alert('Некорректная основа экспоненты, введите целую, большую или равную 0')
  base = prompt('Основа экспоненты');
}

var exp = prompt('Показатель экспоненты');
var decExp = exp - Math.floor(exp);

if ((exp < 0) || (decExp != 0)) {
  alert('Некорректная степень, введите целую, большую или равную 0');
  exp = prompt('Показатель экспоненты');
  result = pow(base, exp);
  console.log('Результат = ' + result);
} else {
  result = pow(base, exp);
  console.log('Результат = ' + result);
}

function pow(base, exp) {
  var result = 1;

  for (var i = 0; i < exp; i++) {
    result *= base;
  }

  return result;
}
