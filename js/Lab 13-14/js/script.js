'use strict';

$(function() {
    var $database = {
        header: 'Тест по программированию',
        questions: [{
            title: 'Вопрос №1',
            checkboxname: ['one','two','three'],
            id: ['1','2','3'],
            answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']
            },
            {
            title: 'Вопрос №2',
            checkboxname: ['one','two','three'],
            id: ['1','2','3'],
            answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']
            },
            {
            title: 'Вопрос №3',
            checkboxname: ['one','two','three'],
            id: ['1','2','3'],
            answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3']
        }],
        correct: [1, 2, 3],
        submit: 'Проверить мои результаты'
    };

    localStorage.setItem('test', JSON.stringify($database));

    var $data = JSON.parse(localStorage.getItem('test'));

    var $html = $('#test').html();
    var $content = tmpl($html, $data);
    $('.wrapper').append($content);

    function testResult() {
        var result = 0;
        var answer = $('input:checked');
        var correct = $data.correct;
        for (var i = 0; i<answer.length; i++) {
            if ($(answer[i]).attr('id') == correct[i]) {
                result += 1;
            }
        }
        return result;
    }

    function showModal(e) {
        e.preventDefault();
        var $modal = $('<div class="modal"></div>');
        var result = 0;
        var answer = $('input:checked');
        var correct = $data.correct;
        for (var i = 0; i<answer.length; i++) {
            if ($(answer[i]).attr('id') == correct[i]) {
                result += 1;
                $modal.append('<p class="correct">Ответ на ' + (i+1) + ' вопрос <b>правильный</b></p>');
            } else {
                $modal.append('<p class="incorrect">Ответ на ' + (i+1) + ' вопрос <b>неправильный</b></p>');
            }
        }
        $modal.append('<h4 class="result">Всего правильных ответов: ' + result + '</h4><hr>');
        if (result == $data.questions.length) {
            $modal.append('<h4>Поздравляем! Вы успешно прошли тест</h4>');
        } else {
            $modal.append('<h4>Tест не пройден</h4>');
        }
        $modal.append('<button>Закрыть и начать заново</button>');
        $('body').append($modal);
        $('button').one('click', function (e) {
            e.preventDefault();
            $modal.detach();
            $('input').attr('checked', false);
        })
    }

    $('button').on('click', showModal);

    return this;
});
