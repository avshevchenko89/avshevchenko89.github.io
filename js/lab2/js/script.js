alert('Начать?');

var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i]= prompt('Введите имя');
}

console.log (arr);

var name = prompt('Введите имя пользователя');

for (var i = 0; i < arr.length; i++) {
  if (arr[i] != name) {
  // if ((arr[i] != name) & (arr[(i+1)] != name) & (arr[(i+2)] != name) & (arr[i+3] != name) & (arr[i+4] != name)) {
    alert ('Ошибка');
    // i=arr.length;
  } else {
      alert (name + ', вы успешно вошли');
      i = arr.length;
  }
}
