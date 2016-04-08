alert('Начать?');

var arr = [];

for (var i = 0; i < 5; i++) {
  arr[i]= prompt('Введите имя');
}

console.log (arr);

var name = prompt('Введите имя пользователя');

var i = 0;
do {
  if (arr[i] === name) {
    console.log(name + ', вы успешно вошли');
  }
  i = i + 1;
}
while (i < arr.length);

if ((arr[0] != name) & (arr[1] != name) & (arr[2] != name) & (arr[3] != name) & (arr[4] != name)) {
  alert('Ошибка');
}
