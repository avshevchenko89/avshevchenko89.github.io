$(function () {
    //variables
    var $prevButton = $('.prev');
    var $nextButton = $('.next');
    $('.first').addClass('current-step');
    var anketa = new Anketa('.content');
    anketa.start();
    var $flag;

    //controlButtons
    $prevButton.on('click', function () {
        if ($('.current-step').hasClass('first')) {
            return;
        } else {
            $flag = false;
            $('.current-step').removeClass('current-step').prev().addClass('current-step');
            $('.current-page').removeClass('current-page').prev().removeClass('passed-page').addClass('current-page');
            anketa.start();
        }
    });

    $nextButton.on('click', function (e) {
        e.preventDefault();

        if ($flag) {
            if ($('.current-step').hasClass('fourth')) {
                anketa.showResult();
            } else {
                $('.current-step').removeClass('current-step').next().addClass('current-step');
                $('.current-page').removeClass('current-page').addClass('passed-page').next().addClass('current-page');
                if ($('.current-step').hasClass('three')) {
                    $nextButton.html('Завершить');
                    $nextButton.addClass('finish');
                }
                anketa.start();
            }
        }
    });

    $('.page').on('click', function (e) {
        var $target = e.target;

        switch ($($target).html()) {
            case '2':
                if ($($target).prev().hasClass('passed-page')) {
                    $('.step').hide();
                    $('.second').show();
                    anketa.start();
                } else return;
                break;
            case '3':
                if ($($target).prev().hasClass('passed-page')) {
                    $('.step').hide();
                    $('.third').show();
                    $('.next').removeClass('finish').html('Следующий >');
                    anketa.start();
                } else return;
                break;
            case '4':
                if ($($target).prev().hasClass('passed-page')) {
                    $('.step').hide();
                    $('.fourth').show();
                    anketa.start();
                } else return;
                break;
            default:
                $('.step').hide();
                $('.first').show();
                anketa.start();
        }
    });


    //constructor
    function Anketa(elem) {

        var a, b;
        function value () {
            a = $('.a').val();
            b = $('.b').val();
        }

        function divide() {
            $flag = false;
            if (a<b) {
                $('.step').append('<p class="alert">False</p>');
                $flag = false;
            } else {
                $('.alert').remove();
                $flag = true;
            }
        }

        this.start = function () {
            //check the current__step
            var $current = $('.current-step');

            //check what to do according to actual step
            if ($($current).hasClass('first')) {
                console.log($current);
                console.log('first');
                value();
                $nextButton.on('click', function () {
                    divide();
                })
            }

            if ($($current).hasClass('second')) {
                console.log($current);
                console.log('second');
                value();
                $nextButton.on('click', function () {
                    divide();
                })
            };

            if ($($current).hasClass('third')) {
                console.log('three');
                value();
                $nextButton.on('click', function () {
                    divide();
                });
            };

            if ($($current).hasClass('fourth')) {
                console.log('four');
                value();
                $nextButton.on('click', function () {
                    divide();
                });
            };
        };

    }

});

