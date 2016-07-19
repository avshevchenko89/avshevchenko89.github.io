$(function () {
    //carousel
    var $carousel = $('.carousel');
    var $blockWidth = $($carousel).find('.carousel__block').css('width');
    var $currentLeft = -69;

    function autoRight() {
        setInterval(function () {
            if (!$($carousel).hasClass('hover')) {
                moveRight($carousel);
            }
        }, 3000);
    };

    function moveRight() {
        $($carousel).find('.carousel__items').animate({
            left: '-' + $blockWidth + 'px'
        }, 300, function () {
            $($carousel).find('.carousel__block').eq(0).clone().appendTo($($carousel).find('.carousel__items'));
            $($carousel).find('.carousel__block').eq(0).remove();
            $($carousel).find('.carousel__items').css({"left": "0px"});
        });
        $currentLeft += 24;
        $('.active').animate({
            left: $currentLeft
        }, 300, function () {
            if ($currentLeft == -21) {
                $currentLeft = -93;
            }
        });
    };

    autoRight('carousel:first');

    $carousel.on('mouseenter', function () {
        $(this).addClass('hover');
    });

    $carousel.on('mouseleave', function () {
        $(this).removeClass('hover');
    });

    //accorderon
    var $flag = false;

    $('.banner__toggle').on('click', function () {
        if (!$flag) {
            $('.banner__toggle').html('+');
            $('.banner__toggle').removeClass('banner__active');
            $('.banner__title').removeClass('banner__active');
            $('.banner__text').slideUp();
            $(this).parent().find('.banner__text').slideDown();
            $(this).html('-');
            $(this).addClass('banner__active');
            $(this).parent().find('.banner__title').addClass('banner__active');
            $flag = true;
        } else {
            $(this).parent().find('.banner__text').slideUp();
            $(this).html('+');
            $(this).removeClass('banner__active');
            $(this).parent().find('.banner__title').removeClass('banner__active');
            $flag = false;
        }
    });

});


