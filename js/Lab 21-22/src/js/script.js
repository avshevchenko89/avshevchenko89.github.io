$(function() {
    localStorage.setItem('test', JSON.stringify(database));
    let $data = JSON.parse(localStorage.getItem('test'));

    let $html = $('#test').html();
    let $content = tmpl($html, $data);
    $('.wrapper').append($content);

    function showModal(e) {
        e.preventDefault();

        let $modal = $('<div class="modal"></div>');
        let $result = 0;
        let $answer = $('input:checked');
        let $correct = [];

        for (let i = 0; i < $data.questions.length; i++) {
                $correct[i] = $data.questions[i].correct;
            if ($($answer[i]).attr('id') == $correct[i]) {
                $result += 1;
                $modal.append('<p class="correct">Ответ на ' + (i+1) + ' вопрос <b>правильный</b></p>');
            } else {
                $modal.append('<p class="incorrect">Ответ на ' + (i+1) + ' вопрос <b>неправильный</b></p>');
            }
        }

        console.log($correct);

        $modal.append('<h4 class="result">Всего правильных ответов: ' + $result + '</h4><hr>');

        if ($result == $data.questions.length) {
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
});
