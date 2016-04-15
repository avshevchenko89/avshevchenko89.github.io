var test = {
    header: 'Тест по программированию',
    question: ['Вопрос №1' , 'Вопрос №2' ,' Вопрос №3'],
    checkboxName: ['one' , 'two' , 'three' , 'four' , 'five' , 'six' , 'seven' ,'eight','nine'],
    id: ['1' , '2' , '3' , '4' , '5' , '6' , '7' ,'8','9'],
    answer: ['Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3'],
    submit: 'Проверить мои результаты'
};
var k = 0;

var header = document.createElement ('h3');
    header.innerHTML = test.header;
    header.style.marginBottom = '60px';
    header.style.fontFamily = 'Arial';
    header.style.textAlign = 'center';

var form = document.createElement( 'form');
    form.action = '#';
    form.method = 'post';
    form.classList.add ('form-group');

var list = document.createElement ('ol');
    list.classList.add ('list-group');
    list.style.paddingLeft = '25px';

var parent = document.body;

var container = document.createElement ('div');
    container.classList.add ('container');
    container.style.width = '800px';
    container.style.margin = '0 auto';
    container.style.padding = '0';
    container.style.background = '#fff';

var button = document.createElement ('button');
    button.classList.add ('btn');
    button.classList.add ('btn-default');
    button.type = 'submit';
    button.innerHTML = test.submit;
    button.style.margin = '20px auto auto 240px';
    button.style.padding = '10px 30px';
    button.style.background = '#cfe2f3';
    button.style.fontSize = '20px';
    button.style.fontWeight = 'bold';

container.appendChild (header);
parent.appendChild (container);
container.appendChild (form);
form.appendChild (list);

for (var i = 0; i < test.question.length; i++) {
  var listItem = document.createElement ('li');
      listItem.classList.add = 'list-group-item';
      listItem.style.fontSize = '18px';
      listItem.style.fontFamily = 'Arial';

  list.appendChild (listItem);

  var question = document.createElement ('h4');
      question.innerHTML = test.question [i];

  listItem.appendChild (question);
  for (var j = 0; j < 3; j++) {
    var checkbox = document.createElement ('input');
      checkbox.type = 'checkbox';
      checkbox.name = test.checkboxName [k];
      checkbox.id = test.id [k];

    var answer = document.createElement ('p');
        answer.style.marginBottom = '0';

    var label = document.createElement ('label');
      label.htmlFor = test.id [k];
      label.style.marginLeft = '10px';
      label.style.fontSize = '18px';
      label.style.fontWeight = 'normal';

    label.appendChild (document.createTextNode(test.answer [k]));
    listItem.appendChild (answer);
    answer.appendChild (checkbox);
    answer.appendChild (label);
    k++;
  }
}

form.appendChild (button);
