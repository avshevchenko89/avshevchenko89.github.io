'use strict';

var now = new Date();
var today = now.getDate();
var todayYear = now.getFullYear();
var todayMonth = now.getMonth()+1;

function createCalendar(id, year, month) {
    var elem = document.getElementById(id);

    var mon = month - 1;
    var d = new Date(year, mon);

    var dayName = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

    var table = '<table><tr>';

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 0; i < getDay(d); i++) {
        table += '<td>'+ dayName[i] +'</td>';
    }


    for (var i = getDay(d); i<7; i++) {
        table += '<td>' + dayName[i] + ', ' + d.getDate() + '</td>';
        d.setDate(d.getDate() + 1);
    }
    table+='<tr>';


    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';

    elem.innerHTML = table;

    var calMonth;

    switch (d.getMonth()) {
        case 1: calMonth='Январь';
            break;
        case 2: calMonth='Февраль';
            break;
        case 3: calMonth='Март';
            break;
        case 4: calMonth='Апрель';
            break;
        case 5: calMonth='Май';
            break;
        case 6: calMonth='Июнь';
            break;
        case 7: calMonth='Июль';
            break;
        case 8: calMonth='Август';
            break;
        case 9: calMonth='Сентябрь';
            break;
        case 10: calMonth='Октябрь';
            break;
        case 11: calMonth='Ноябрь';
            break;
        default: calMonth='Декабрь';
    }

    document.querySelector('.date').innerHTML = calMonth + ' ' + year;

    var tdList = document.getElementsByTagName('td');

    for (var i = 0; i < tdList.length; i++) {
        tdList[i].addEventListener('click', addNote);
    }

    for (var i = 0; i < tdList.length; i++) {
       if ((tdList[i].innerHTML == today) && (d.getMonth() == todayMonth) && (d.getFullYear() == todayYear)) {
            tdList[i].style.background = '#f4f4f4';
        }
    }

    document.getElementById('btn').addEventListener('click', function() {
        var find = document.getElementById('find').value;
        find = find.split(' ');
        var findDay = +find[0];
        var findMonth = +find[1];
        var findYear = +find[2];
        createCalendar('calendar', findYear, findMonth);

        for (var i = 0; i < tdList.length; i++) {
            if (tdList[i].innerHTML == findDay) {
                tdList[i].style.background = '#C6EE8E';
            }
        }
    });
}

function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

var year = 2013;
var month = 3;

createCalendar('calendar', year, month);


//предыдущий месяц
document.querySelector('.back').addEventListener('click', function () {
    month -=1;
    if (month < 1) {
        year -=1;
        month = 12;
    }
    createCalendar('calendar', year, month);

});

//следующий месяц
document.querySelector('.forward').addEventListener('click', function () {
    month +=1;
    if (month > 12) {
        year +=1;
        month = 1;
    }
    createCalendar('calendar', year, month);
});


function addNote() {
    var td = this;

    var note = document.createElement('input');
    note.type = 'text';
    note.id = 'txt';

    this.appendChild(note);
    this.removeEventListener('click', addNote);

    document.querySelector('.add').addEventListener('click', function () {

        var text = document.getElementById('txt').value;
        localStorage.setItem('note', text);
        td.removeChild(note);

        td.innerHTML+='<br><p>' + localStorage.getItem('note') + '</p>';
        td.style.background = '#B9EEE9';
    });

}


document.querySelector('.reset').addEventListener('click', function () {
    localStorage.clear();
    createCalendar('calendar',year, month);
});

document.querySelector('.today').addEventListener('click', function () {
    createCalendar('calendar', todayYear, todayMonth);
});
